import { Hierarchy } from "/transpiled/https://escad.dev/core/hierarchy/mod.js";
import { HierarchyLog } from "/transpiled/https://escad.dev/core/logs/HierarchyLog.js";
import { StringLog } from "/transpiled/https://escad.dev/core/logs/StringLog.js";
export class Logger {
  logs = [];
  listeners = new Set();
  lastLogPromise;

  async log(logPromise) {
    const [log] = await (this.lastLogPromise = Promise.all([logPromise, this.lastLogPromise]));

    if (!log) {
      this.logs = [];
    } else {
      this.logs.push(log);
    }

    this.listeners.forEach(fn => fn(log));
  }

  clear() {
    this.log(null);
  }

  onLog(listener) {
    this.listeners.add(listener);
    return () => void this.listeners.delete(listener);
  }

}
export const logger = new Logger();
export function baseLog(messages, level) {
  let stringMessageAcc = [];

  for (const message of messages) {
    if (false || typeof message === "string" || typeof message === "boolean" || typeof message === "bigint" || typeof message === "undefined" || typeof message === "number" || message === null) {
      stringMessageAcc.push(message + "");
    } else {
      logStringMessageAcc();
      logger.log(Hierarchy.from(message).then(hierarchy => HierarchyLog.create(hierarchy, level)));
    }
  }

  logStringMessageAcc();

  function logStringMessageAcc() {
    if (stringMessageAcc.length) {
      logger.log(StringLog.create(stringMessageAcc.join(" "), level));
    }

    stringMessageAcc = [];
  }
}
export function log(...messages) {
  baseLog(messages, "log");
}