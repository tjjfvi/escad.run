// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
/**
 * This implementation is inspired by POSIX and Golang but does not port
 * implementation code. */
var State;
(function (State) {
    State[State["PASSTHROUGH"] = 0] = "PASSTHROUGH";
    State[State["PERCENT"] = 1] = "PERCENT";
    State[State["POSITIONAL"] = 2] = "POSITIONAL";
    State[State["PRECISION"] = 3] = "PRECISION";
    State[State["WIDTH"] = 4] = "WIDTH";
})(State || (State = {}));
var WorP;
(function (WorP) {
    WorP[WorP["WIDTH"] = 0] = "WIDTH";
    WorP[WorP["PRECISION"] = 1] = "PRECISION";
})(WorP || (WorP = {}));
class Flags {
    plus;
    dash;
    sharp;
    space;
    zero;
    lessthan;
    width = -1;
    precision = -1;
}
const min = Math.min;
const UNICODE_REPLACEMENT_CHARACTER = "\ufffd";
const DEFAULT_PRECISION = 6;
const FLOAT_REGEXP = /(-?)(\d)\.?(\d*)e([+-])(\d+)/;
var F;
(function (F) {
    F[F["sign"] = 1] = "sign";
    F[F["mantissa"] = 2] = "mantissa";
    F[F["fractional"] = 3] = "fractional";
    F[F["esign"] = 4] = "esign";
    F[F["exponent"] = 5] = "exponent";
})(F || (F = {}));
class Printf {
    format;
    args;
    i;
    state = State.PASSTHROUGH;
    verb = "";
    buf = "";
    argNum = 0;
    flags = new Flags();
    haveSeen;
    // barf, store precision and width errors for later processing ...
    tmpError;
    constructor(format, ...args) {
        this.format = format;
        this.args = args;
        this.haveSeen = Array.from({ length: args.length });
        this.i = 0;
    }
    doPrintf() {
        for (; this.i < this.format.length; ++this.i) {
            const c = this.format[this.i];
            switch (this.state) {
                case State.PASSTHROUGH:
                    if (c === "%") {
                        this.state = State.PERCENT;
                    }
                    else {
                        this.buf += c;
                    }
                    break;
                case State.PERCENT:
                    if (c === "%") {
                        this.buf += c;
                        this.state = State.PASSTHROUGH;
                    }
                    else {
                        this.handleFormat();
                    }
                    break;
                default:
                    throw Error("Should be unreachable, certainly a bug in the lib.");
            }
        }
        // check for unhandled args
        let extras = false;
        let err = "%!(EXTRA";
        for (let i = 0; i !== this.haveSeen.length; ++i) {
            if (!this.haveSeen[i]) {
                extras = true;
                err += ` '${Deno.inspect(this.args[i])}'`;
            }
        }
        err += ")";
        if (extras) {
            this.buf += err;
        }
        return this.buf;
    }
    // %[<positional>]<flag>...<verb>
    handleFormat() {
        this.flags = new Flags();
        const flags = this.flags;
        for (; this.i < this.format.length; ++this.i) {
            const c = this.format[this.i];
            switch (this.state) {
                case State.PERCENT:
                    switch (c) {
                        case "[":
                            this.handlePositional();
                            this.state = State.POSITIONAL;
                            break;
                        case "+":
                            flags.plus = true;
                            break;
                        case "<":
                            flags.lessthan = true;
                            break;
                        case "-":
                            flags.dash = true;
                            flags.zero = false; // only left pad zeros, dash takes precedence
                            break;
                        case "#":
                            flags.sharp = true;
                            break;
                        case " ":
                            flags.space = true;
                            break;
                        case "0":
                            // only left pad zeros, dash takes precedence
                            flags.zero = !flags.dash;
                            break;
                        default:
                            if (("1" <= c && c <= "9") || c === "." || c === "*") {
                                if (c === ".") {
                                    this.flags.precision = 0;
                                    this.state = State.PRECISION;
                                    this.i++;
                                }
                                else {
                                    this.state = State.WIDTH;
                                }
                                this.handleWidthAndPrecision(flags);
                            }
                            else {
                                this.handleVerb();
                                return; // always end in verb
                            }
                    } // switch c
                    break;
                case State.POSITIONAL:
                    // TODO(bartlomieju): either a verb or * only verb for now
                    if (c === "*") {
                        const worp = this.flags.precision === -1
                            ? WorP.WIDTH
                            : WorP.PRECISION;
                        this.handleWidthOrPrecisionRef(worp);
                        this.state = State.PERCENT;
                        break;
                    }
                    else {
                        this.handleVerb();
                        return; // always end in verb
                    }
                default:
                    throw new Error(`Should not be here ${this.state}, library bug!`);
            } // switch state
        }
    }
    /**
     * Handle width or precision
     * @param wOrP
     */
    handleWidthOrPrecisionRef(wOrP) {
        if (this.argNum >= this.args.length) {
            // handle Positional should have already taken care of it...
            return;
        }
        const arg = this.args[this.argNum];
        this.haveSeen[this.argNum] = true;
        if (typeof arg === "number") {
            switch (wOrP) {
                case WorP.WIDTH:
                    this.flags.width = arg;
                    break;
                default:
                    this.flags.precision = arg;
            }
        }
        else {
            const tmp = wOrP === WorP.WIDTH ? "WIDTH" : "PREC";
            this.tmpError = `%!(BAD ${tmp} '${this.args[this.argNum]}')`;
        }
        this.argNum++;
    }
    /**
     * Handle width and precision
     * @param flags
     */
    handleWidthAndPrecision(flags) {
        const fmt = this.format;
        for (; this.i !== this.format.length; ++this.i) {
            const c = fmt[this.i];
            switch (this.state) {
                case State.WIDTH:
                    switch (c) {
                        case ".":
                            // initialize precision, %9.f -> precision=0
                            this.flags.precision = 0;
                            this.state = State.PRECISION;
                            break;
                        case "*":
                            this.handleWidthOrPrecisionRef(WorP.WIDTH);
                            // force . or flag at this point
                            break;
                        default: {
                            const val = parseInt(c);
                            // most likely parseInt does something stupid that makes
                            // it unusable for this scenario ...
                            // if we encounter a non (number|*|.) we're done with prec & wid
                            if (isNaN(val)) {
                                this.i--;
                                this.state = State.PERCENT;
                                return;
                            }
                            flags.width = flags.width == -1 ? 0 : flags.width;
                            flags.width *= 10;
                            flags.width += val;
                        }
                    } // switch c
                    break;
                case State.PRECISION: {
                    if (c === "*") {
                        this.handleWidthOrPrecisionRef(WorP.PRECISION);
                        break;
                    }
                    const val = parseInt(c);
                    if (isNaN(val)) {
                        // one too far, rewind
                        this.i--;
                        this.state = State.PERCENT;
                        return;
                    }
                    flags.precision *= 10;
                    flags.precision += val;
                    break;
                }
                default:
                    throw new Error("can't be here. bug.");
            } // switch state
        }
    }
    /** Handle positional */
    handlePositional() {
        if (this.format[this.i] !== "[") {
            // sanity only
            throw new Error("Can't happen? Bug.");
        }
        let positional = 0;
        const format = this.format;
        this.i++;
        let err = false;
        for (; this.i !== this.format.length; ++this.i) {
            if (format[this.i] === "]") {
                break;
            }
            positional *= 10;
            const val = parseInt(format[this.i]);
            if (isNaN(val)) {
                //throw new Error(
                //  `invalid character in positional: ${format}[${format[this.i]}]`
                //);
                this.tmpError = "%!(BAD INDEX)";
                err = true;
            }
            positional += val;
        }
        if (positional - 1 >= this.args.length) {
            this.tmpError = "%!(BAD INDEX)";
            err = true;
        }
        this.argNum = err ? this.argNum : positional - 1;
        return;
    }
    /** Handle less than */
    handleLessThan() {
        // deno-lint-ignore no-explicit-any
        const arg = this.args[this.argNum];
        if ((arg || {}).constructor.name !== "Array") {
            throw new Error(`arg ${arg} is not an array. Todo better error handling`);
        }
        let str = "[ ";
        for (let i = 0; i !== arg.length; ++i) {
            if (i !== 0)
                str += ", ";
            str += this._handleVerb(arg[i]);
        }
        return str + " ]";
    }
    /** Handle verb */
    handleVerb() {
        const verb = this.format[this.i];
        this.verb = verb;
        if (this.tmpError) {
            this.buf += this.tmpError;
            this.tmpError = undefined;
            if (this.argNum < this.haveSeen.length) {
                this.haveSeen[this.argNum] = true; // keep track of used args
            }
        }
        else if (this.args.length <= this.argNum) {
            this.buf += `%!(MISSING '${verb}')`;
        }
        else {
            const arg = this.args[this.argNum]; // check out of range
            this.haveSeen[this.argNum] = true; // keep track of used args
            if (this.flags.lessthan) {
                this.buf += this.handleLessThan();
            }
            else {
                this.buf += this._handleVerb(arg);
            }
        }
        this.argNum++; // if there is a further positional, it will reset.
        this.state = State.PASSTHROUGH;
    }
    // deno-lint-ignore no-explicit-any
    _handleVerb(arg) {
        switch (this.verb) {
            case "t":
                return this.pad(arg.toString());
            case "b":
                return this.fmtNumber(arg, 2);
            case "c":
                return this.fmtNumberCodePoint(arg);
            case "d":
                return this.fmtNumber(arg, 10);
            case "o":
                return this.fmtNumber(arg, 8);
            case "x":
                return this.fmtHex(arg);
            case "X":
                return this.fmtHex(arg, true);
            case "e":
                return this.fmtFloatE(arg);
            case "E":
                return this.fmtFloatE(arg, true);
            case "f":
            case "F":
                return this.fmtFloatF(arg);
            case "g":
                return this.fmtFloatG(arg);
            case "G":
                return this.fmtFloatG(arg, true);
            case "s":
                return this.fmtString(arg);
            case "T":
                return this.fmtString(typeof arg);
            case "v":
                return this.fmtV(arg);
            case "j":
                return this.fmtJ(arg);
            default:
                return `%!(BAD VERB '${this.verb}')`;
        }
    }
    /**
     * Pad a string
     * @param s text to pad
     */
    pad(s) {
        const padding = this.flags.zero ? "0" : " ";
        if (this.flags.dash) {
            return s.padEnd(this.flags.width, padding);
        }
        return s.padStart(this.flags.width, padding);
    }
    /**
     * Pad a number
     * @param nStr
     * @param neg
     */
    padNum(nStr, neg) {
        let sign;
        if (neg) {
            sign = "-";
        }
        else if (this.flags.plus || this.flags.space) {
            sign = this.flags.plus ? "+" : " ";
        }
        else {
            sign = "";
        }
        const zero = this.flags.zero;
        if (!zero) {
            // sign comes in front of padding when padding w/ zero,
            // in from of value if padding with spaces.
            nStr = sign + nStr;
        }
        const pad = zero ? "0" : " ";
        const len = zero ? this.flags.width - sign.length : this.flags.width;
        if (this.flags.dash) {
            nStr = nStr.padEnd(len, pad);
        }
        else {
            nStr = nStr.padStart(len, pad);
        }
        if (zero) {
            // see above
            nStr = sign + nStr;
        }
        return nStr;
    }
    /**
     * Format a number
     * @param n
     * @param radix
     * @param upcase
     */
    fmtNumber(n, radix, upcase = false) {
        let num = Math.abs(n).toString(radix);
        const prec = this.flags.precision;
        if (prec !== -1) {
            this.flags.zero = false;
            num = n === 0 && prec === 0 ? "" : num;
            while (num.length < prec) {
                num = "0" + num;
            }
        }
        let prefix = "";
        if (this.flags.sharp) {
            switch (radix) {
                case 2:
                    prefix += "0b";
                    break;
                case 8:
                    // don't annotate octal 0 with 0...
                    prefix += num.startsWith("0") ? "" : "0";
                    break;
                case 16:
                    prefix += "0x";
                    break;
                default:
                    throw new Error("cannot handle base: " + radix);
            }
        }
        // don't add prefix in front of value truncated by precision=0, val=0
        num = num.length === 0 ? num : prefix + num;
        if (upcase) {
            num = num.toUpperCase();
        }
        return this.padNum(num, n < 0);
    }
    /**
     * Format number with code points
     * @param n
     */
    fmtNumberCodePoint(n) {
        let s = "";
        try {
            s = String.fromCodePoint(n);
        }
        catch {
            s = UNICODE_REPLACEMENT_CHARACTER;
        }
        return this.pad(s);
    }
    /**
     * Format special float
     * @param n
     */
    fmtFloatSpecial(n) {
        // formatting of NaN and Inf are pants-on-head
        // stupid and more or less arbitrary.
        if (isNaN(n)) {
            this.flags.zero = false;
            return this.padNum("NaN", false);
        }
        if (n === Number.POSITIVE_INFINITY) {
            this.flags.zero = false;
            this.flags.plus = true;
            return this.padNum("Inf", false);
        }
        if (n === Number.NEGATIVE_INFINITY) {
            this.flags.zero = false;
            return this.padNum("Inf", true);
        }
        return "";
    }
    /**
     * Round fraction to precision
     * @param fractional
     * @param precision
     * @returns tuple of fractional and round
     */
    roundFractionToPrecision(fractional, precision) {
        let round = false;
        if (fractional.length > precision) {
            fractional = "1" + fractional; // prepend a 1 in case of leading 0
            let tmp = parseInt(fractional.substr(0, precision + 2)) / 10;
            tmp = Math.round(tmp);
            fractional = Math.floor(tmp).toString();
            round = fractional[0] === "2";
            fractional = fractional.substr(1); // remove extra 1
        }
        else {
            while (fractional.length < precision) {
                fractional += "0";
            }
        }
        return [fractional, round];
    }
    /**
     * Format float E
     * @param n
     * @param upcase
     */
    fmtFloatE(n, upcase = false) {
        const special = this.fmtFloatSpecial(n);
        if (special !== "") {
            return special;
        }
        const m = n.toExponential().match(FLOAT_REGEXP);
        if (!m) {
            throw Error("can't happen, bug");
        }
        let fractional = m[F.fractional];
        const precision = this.flags.precision !== -1
            ? this.flags.precision
            : DEFAULT_PRECISION;
        let rounding = false;
        [fractional, rounding] = this.roundFractionToPrecision(fractional, precision);
        let e = m[F.exponent];
        let esign = m[F.esign];
        // scientific notation output with exponent padded to minlen 2
        let mantissa = parseInt(m[F.mantissa]);
        if (rounding) {
            mantissa += 1;
            if (10 <= mantissa) {
                mantissa = 1;
                const r = parseInt(esign + e) + 1;
                e = r.toString();
                esign = r < 0 ? "-" : "+";
            }
        }
        e = e.length == 1 ? "0" + e : e;
        const val = `${mantissa}.${fractional}${upcase ? "E" : "e"}${esign}${e}`;
        return this.padNum(val, n < 0);
    }
    /**
     * Format float F
     * @param n
     */
    fmtFloatF(n) {
        const special = this.fmtFloatSpecial(n);
        if (special !== "") {
            return special;
        }
        // stupid helper that turns a number into a (potentially)
        // VERY long string.
        function expandNumber(n) {
            if (Number.isSafeInteger(n)) {
                return n.toString() + ".";
            }
            const t = n.toExponential().split("e");
            let m = t[0].replace(".", "");
            const e = parseInt(t[1]);
            if (e < 0) {
                let nStr = "0.";
                for (let i = 0; i !== Math.abs(e) - 1; ++i) {
                    nStr += "0";
                }
                return (nStr += m);
            }
            else {
                const splIdx = e + 1;
                while (m.length < splIdx) {
                    m += "0";
                }
                return m.substr(0, splIdx) + "." + m.substr(splIdx);
            }
        }
        // avoiding sign makes padding easier
        const val = expandNumber(Math.abs(n));
        const arr = val.split(".");
        let dig = arr[0];
        let fractional = arr[1];
        const precision = this.flags.precision !== -1
            ? this.flags.precision
            : DEFAULT_PRECISION;
        let round = false;
        [fractional, round] = this.roundFractionToPrecision(fractional, precision);
        if (round) {
            dig = (parseInt(dig) + 1).toString();
        }
        return this.padNum(`${dig}.${fractional}`, n < 0);
    }
    /**
     * Format float G
     * @param n
     * @param upcase
     */
    fmtFloatG(n, upcase = false) {
        const special = this.fmtFloatSpecial(n);
        if (special !== "") {
            return special;
        }
        // The double argument representing a floating-point number shall be
        // converted in the style f or e (or in the style F or E in
        // the case of a G conversion specifier), depending on the
        // value converted and the precision. Let P equal the
        // precision if non-zero, 6 if the precision is omitted, or 1
        // if the precision is zero. Then, if a conversion with style E would
        // have an exponent of X:
        //     - If P > X>=-4, the conversion shall be with style f (or F )
        //     and precision P -( X+1).
        //     - Otherwise, the conversion shall be with style e (or E )
        //     and precision P -1.
        // Finally, unless the '#' flag is used, any trailing zeros shall be
        // removed from the fractional portion of the result and the
        // decimal-point character shall be removed if there is no
        // fractional portion remaining.
        // A double argument representing an infinity or NaN shall be
        // converted in the style of an f or F conversion specifier.
        // https://pubs.opengroup.org/onlinepubs/9699919799/functions/fprintf.html
        let P = this.flags.precision !== -1
            ? this.flags.precision
            : DEFAULT_PRECISION;
        P = P === 0 ? 1 : P;
        const m = n.toExponential().match(FLOAT_REGEXP);
        if (!m) {
            throw Error("can't happen");
        }
        const X = parseInt(m[F.exponent]) * (m[F.esign] === "-" ? -1 : 1);
        let nStr = "";
        if (P > X && X >= -4) {
            this.flags.precision = P - (X + 1);
            nStr = this.fmtFloatF(n);
            if (!this.flags.sharp) {
                nStr = nStr.replace(/\.?0*$/, "");
            }
        }
        else {
            this.flags.precision = P - 1;
            nStr = this.fmtFloatE(n);
            if (!this.flags.sharp) {
                nStr = nStr.replace(/\.?0*e/, upcase ? "E" : "e");
            }
        }
        return nStr;
    }
    /**
     * Format string
     * @param s
     */
    fmtString(s) {
        if (this.flags.precision !== -1) {
            s = s.substr(0, this.flags.precision);
        }
        return this.pad(s);
    }
    /**
     * Format hex
     * @param val
     * @param upper
     */
    fmtHex(val, upper = false) {
        // allow others types ?
        switch (typeof val) {
            case "number":
                return this.fmtNumber(val, 16, upper);
            case "string": {
                const sharp = this.flags.sharp && val.length !== 0;
                let hex = sharp ? "0x" : "";
                const prec = this.flags.precision;
                const end = prec !== -1 ? min(prec, val.length) : val.length;
                for (let i = 0; i !== end; ++i) {
                    if (i !== 0 && this.flags.space) {
                        hex += sharp ? " 0x" : " ";
                    }
                    // TODO(bartlomieju): for now only taking into account the
                    // lower half of the codePoint, ie. as if a string
                    // is a list of 8bit values instead of UCS2 runes
                    const c = (val.charCodeAt(i) & 0xff).toString(16);
                    hex += c.length === 1 ? `0${c}` : c;
                }
                if (upper) {
                    hex = hex.toUpperCase();
                }
                return this.pad(hex);
            }
            default:
                throw new Error("currently only number and string are implemented for hex");
        }
    }
    /**
     * Format value
     * @param val
     */
    fmtV(val) {
        if (this.flags.sharp) {
            const options = this.flags.precision !== -1
                ? { depth: this.flags.precision }
                : {};
            return this.pad(Deno.inspect(val, options));
        }
        else {
            const p = this.flags.precision;
            return p === -1 ? val.toString() : val.toString().substr(0, p);
        }
    }
    /**
     * Format JSON
     * @param val
     */
    fmtJ(val) {
        return JSON.stringify(val);
    }
}
/**
 * Converts and format a variable number of `args` as is specified by `format`.
 * `sprintf` returns the formatted string.
 *
 * @param format
 * @param args
 */
export function sprintf(format, ...args) {
    const printf = new Printf(format, ...args);
    return printf.doPrintf();
}
/**
 * Converts and format a variable number of `args` as is specified by `format`.
 * `printf` writes the formatted string to standard output.
 * @param format
 * @param args
 */
export function printf(format, ...args) {
    const s = sprintf(format, ...args);
    Deno.stdout.writeSync(new TextEncoder().encode(s));
}
