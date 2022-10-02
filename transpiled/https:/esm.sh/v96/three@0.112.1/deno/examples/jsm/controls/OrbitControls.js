/* esm.sh - esbuild bundle(three@0.112.1/examples/jsm/controls/OrbitControls) deno production */
import { EventDispatcher as ce, MOUSE as l, Quaternion as ie, Spherical as le, TOUCH as f, Vector2 as u, Vector3 as h } from "/transpiled/https://esm.sh/v96/three@0.112.1/deno/three.js";

var j = function (M, N) {
  N === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), N === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = M, this.domElement = N, this.enabled = !0, this.target = new h(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }, this.mouseButtons = {
    LEFT: l.ROTATE,
    MIDDLE: l.DOLLY,
    RIGHT: l.PAN
  }, this.touches = {
    ONE: f.ROTATE,
    TWO: f.DOLLY_PAN
  }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
    return i.phi;
  }, this.getAzimuthalAngle = function () {
    return i.theta;
  }, this.saveState = function () {
    e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
  }, this.reset = function () {
    e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(_), e.update(), o = a.NONE;
  }, this.update = function () {
    var t = new h(),
        n = new ie().setFromUnitVectors(M.up, new h(0, 1, 0)),
        s = n.clone().inverse(),
        r = new h(),
        E = new ie();
    return function () {
      var L = e.object.position;
      return t.copy(L).sub(e.target), t.applyQuaternion(n), i.setFromVector3(t), e.autoRotate && o === a.NONE && Y(ue()), e.enableDamping ? (i.theta += c.theta * e.dampingFactor, i.phi += c.phi * e.dampingFactor) : (i.theta += c.theta, i.phi += c.phi), i.theta = Math.max(e.minAzimuthAngle, Math.min(e.maxAzimuthAngle, i.theta)), i.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, i.phi)), i.makeSafe(), i.radius *= w, i.radius = Math.max(e.minDistance, Math.min(e.maxDistance, i.radius)), e.enableDamping === !0 ? e.target.addScaledVector(g, e.dampingFactor) : e.target.add(g), t.setFromSpherical(i), t.applyQuaternion(s), L.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, g.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), g.set(0, 0, 0)), w = 1, R || r.distanceToSquared(e.object.position) > X || 8 * (1 - E.dot(e.object.quaternion)) > X ? (e.dispatchEvent(_), r.copy(e.object.position), E.copy(e.object.quaternion), R = !1, !0) : !1;
    };
  }(), this.dispose = function () {
    e.domElement.removeEventListener("contextmenu", se, !1), e.domElement.removeEventListener("mousedown", $, !1), e.domElement.removeEventListener("wheel", ee, !1), e.domElement.removeEventListener("touchstart", ae, !1), e.domElement.removeEventListener("touchend", ne, !1), e.domElement.removeEventListener("touchmove", oe, !1), document.removeEventListener("mousemove", I, !1), document.removeEventListener("mouseup", z, !1), e.domElement.removeEventListener("keydown", te, !1);
  };
  var e = this,
      _ = {
    type: "change"
  },
      k = {
    type: "start"
  },
      S = {
    type: "end"
  },
      a = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  },
      o = a.NONE,
      X = 1e-6,
      i = new le(),
      c = new le(),
      w = 1,
      g = new h(),
      R = !1,
      m = new u(),
      p = new u(),
      T = new u(),
      d = new u(),
      b = new u(),
      y = new u(),
      O = new u(),
      P = new u(),
      v = new u();

  function ue() {
    return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
  }

  function D() {
    return Math.pow(.95, e.zoomSpeed);
  }

  function Y(t) {
    c.theta -= t;
  }

  function Z(t) {
    c.phi -= t;
  }

  var F = function () {
    var t = new h();
    return function (s, r) {
      t.setFromMatrixColumn(r, 0), t.multiplyScalar(-s), g.add(t);
    };
  }(),
      V = function () {
    var t = new h();
    return function (s, r) {
      e.screenSpacePanning === !0 ? t.setFromMatrixColumn(r, 1) : (t.setFromMatrixColumn(r, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(s), g.add(t);
    };
  }(),
      A = function () {
    var t = new h();
    return function (s, r) {
      var E = e.domElement;

      if (e.object.isPerspectiveCamera) {
        var re = e.object.position;
        t.copy(re).sub(e.target);
        var L = t.length();
        L *= Math.tan(e.object.fov / 2 * Math.PI / 180), F(2 * s * L / E.clientHeight, e.object.matrix), V(2 * r * L / E.clientHeight, e.object.matrix);
      } else e.object.isOrthographicCamera ? (F(s * (e.object.right - e.object.left) / e.object.zoom / E.clientWidth, e.object.matrix), V(r * (e.object.top - e.object.bottom) / e.object.zoom / E.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
    };
  }();

  function x(t) {
    e.object.isPerspectiveCamera ? w /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), R = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
  }

  function K(t) {
    e.object.isPerspectiveCamera ? w *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), R = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
  }

  function C(t) {
    m.set(t.clientX, t.clientY);
  }

  function he(t) {
    O.set(t.clientX, t.clientY);
  }

  function H(t) {
    d.set(t.clientX, t.clientY);
  }

  function fe(t) {
    p.set(t.clientX, t.clientY), T.subVectors(p, m).multiplyScalar(e.rotateSpeed);
    var n = e.domElement;
    Y(2 * Math.PI * T.x / n.clientHeight), Z(2 * Math.PI * T.y / n.clientHeight), m.copy(p), e.update();
  }

  function me(t) {
    P.set(t.clientX, t.clientY), v.subVectors(P, O), v.y > 0 ? x(D()) : v.y < 0 && K(D()), O.copy(P), e.update();
  }

  function pe(t) {
    b.set(t.clientX, t.clientY), y.subVectors(b, d).multiplyScalar(e.panSpeed), A(y.x, y.y), d.copy(b), e.update();
  }

  function Oe() {}

  function de(t) {
    t.deltaY < 0 ? K(D()) : t.deltaY > 0 && x(D()), e.update();
  }

  function be(t) {
    var n = !1;

    switch (t.keyCode) {
      case e.keys.UP:
        A(0, e.keyPanSpeed), n = !0;
        break;

      case e.keys.BOTTOM:
        A(0, -e.keyPanSpeed), n = !0;
        break;

      case e.keys.LEFT:
        A(e.keyPanSpeed, 0), n = !0;
        break;

      case e.keys.RIGHT:
        A(-e.keyPanSpeed, 0), n = !0;
        break;
    }

    n && (t.preventDefault(), e.update());
  }

  function W(t) {
    if (t.touches.length == 1) m.set(t.touches[0].pageX, t.touches[0].pageY);else {
      var n = .5 * (t.touches[0].pageX + t.touches[1].pageX),
          s = .5 * (t.touches[0].pageY + t.touches[1].pageY);
      m.set(n, s);
    }
  }

  function B(t) {
    if (t.touches.length == 1) d.set(t.touches[0].pageX, t.touches[0].pageY);else {
      var n = .5 * (t.touches[0].pageX + t.touches[1].pageX),
          s = .5 * (t.touches[0].pageY + t.touches[1].pageY);
      d.set(n, s);
    }
  }

  function G(t) {
    var n = t.touches[0].pageX - t.touches[1].pageX,
        s = t.touches[0].pageY - t.touches[1].pageY,
        r = Math.sqrt(n * n + s * s);
    O.set(0, r);
  }

  function Ee(t) {
    e.enableZoom && G(t), e.enablePan && B(t);
  }

  function ge(t) {
    e.enableZoom && G(t), e.enableRotate && W(t);
  }

  function q(t) {
    if (t.touches.length == 1) p.set(t.touches[0].pageX, t.touches[0].pageY);else {
      var n = .5 * (t.touches[0].pageX + t.touches[1].pageX),
          s = .5 * (t.touches[0].pageY + t.touches[1].pageY);
      p.set(n, s);
    }
    T.subVectors(p, m).multiplyScalar(e.rotateSpeed);
    var r = e.domElement;
    Y(2 * Math.PI * T.x / r.clientHeight), Z(2 * Math.PI * T.y / r.clientHeight), m.copy(p);
  }

  function Q(t) {
    if (t.touches.length == 1) b.set(t.touches[0].pageX, t.touches[0].pageY);else {
      var n = .5 * (t.touches[0].pageX + t.touches[1].pageX),
          s = .5 * (t.touches[0].pageY + t.touches[1].pageY);
      b.set(n, s);
    }
    y.subVectors(b, d).multiplyScalar(e.panSpeed), A(y.x, y.y), d.copy(b);
  }

  function J(t) {
    var n = t.touches[0].pageX - t.touches[1].pageX,
        s = t.touches[0].pageY - t.touches[1].pageY,
        r = Math.sqrt(n * n + s * s);
    P.set(0, r), v.set(0, Math.pow(P.y / O.y, e.zoomSpeed)), x(v.y), O.copy(P);
  }

  function Te(t) {
    e.enableZoom && J(t), e.enablePan && Q(t);
  }

  function ye(t) {
    e.enableZoom && J(t), e.enableRotate && q(t);
  }

  function Pe() {}

  function $(t) {
    if (e.enabled !== !1) {
      switch (t.preventDefault(), e.domElement.focus ? e.domElement.focus() : window.focus(), t.button) {
        case 0:
          switch (e.mouseButtons.LEFT) {
            case l.ROTATE:
              if (t.ctrlKey || t.metaKey || t.shiftKey) {
                if (e.enablePan === !1) return;
                H(t), o = a.PAN;
              } else {
                if (e.enableRotate === !1) return;
                C(t), o = a.ROTATE;
              }

              break;

            case l.PAN:
              if (t.ctrlKey || t.metaKey || t.shiftKey) {
                if (e.enableRotate === !1) return;
                C(t), o = a.ROTATE;
              } else {
                if (e.enablePan === !1) return;
                H(t), o = a.PAN;
              }

              break;

            default:
              o = a.NONE;
          }

          break;

        case 1:
          switch (e.mouseButtons.MIDDLE) {
            case l.DOLLY:
              if (e.enableZoom === !1) return;
              he(t), o = a.DOLLY;
              break;

            default:
              o = a.NONE;
          }

          break;

        case 2:
          switch (e.mouseButtons.RIGHT) {
            case l.ROTATE:
              if (e.enableRotate === !1) return;
              C(t), o = a.ROTATE;
              break;

            case l.PAN:
              if (e.enablePan === !1) return;
              H(t), o = a.PAN;
              break;

            default:
              o = a.NONE;
          }

          break;
      }

      o !== a.NONE && (document.addEventListener("mousemove", I, !1), document.addEventListener("mouseup", z, !1), e.dispatchEvent(k));
    }
  }

  function I(t) {
    if (e.enabled !== !1) switch (t.preventDefault(), o) {
      case a.ROTATE:
        if (e.enableRotate === !1) return;
        fe(t);
        break;

      case a.DOLLY:
        if (e.enableZoom === !1) return;
        me(t);
        break;

      case a.PAN:
        if (e.enablePan === !1) return;
        pe(t);
        break;
    }
  }

  function z(t) {
    e.enabled !== !1 && (document.removeEventListener("mousemove", I, !1), document.removeEventListener("mouseup", z, !1), e.dispatchEvent(S), o = a.NONE);
  }

  function ee(t) {
    e.enabled === !1 || e.enableZoom === !1 || o !== a.NONE && o !== a.ROTATE || (t.preventDefault(), t.stopPropagation(), e.dispatchEvent(k), de(t), e.dispatchEvent(S));
  }

  function te(t) {
    e.enabled === !1 || e.enableKeys === !1 || e.enablePan === !1 || be(t);
  }

  function ae(t) {
    if (e.enabled !== !1) {
      switch (t.preventDefault(), t.touches.length) {
        case 1:
          switch (e.touches.ONE) {
            case f.ROTATE:
              if (e.enableRotate === !1) return;
              W(t), o = a.TOUCH_ROTATE;
              break;

            case f.PAN:
              if (e.enablePan === !1) return;
              B(t), o = a.TOUCH_PAN;
              break;

            default:
              o = a.NONE;
          }

          break;

        case 2:
          switch (e.touches.TWO) {
            case f.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1) return;
              Ee(t), o = a.TOUCH_DOLLY_PAN;
              break;

            case f.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1) return;
              ge(t), o = a.TOUCH_DOLLY_ROTATE;
              break;

            default:
              o = a.NONE;
          }

          break;

        default:
          o = a.NONE;
      }

      o !== a.NONE && e.dispatchEvent(k);
    }
  }

  function oe(t) {
    if (e.enabled !== !1) switch (t.preventDefault(), t.stopPropagation(), o) {
      case a.TOUCH_ROTATE:
        if (e.enableRotate === !1) return;
        q(t), e.update();
        break;

      case a.TOUCH_PAN:
        if (e.enablePan === !1) return;
        Q(t), e.update();
        break;

      case a.TOUCH_DOLLY_PAN:
        if (e.enableZoom === !1 && e.enablePan === !1) return;
        Te(t), e.update();
        break;

      case a.TOUCH_DOLLY_ROTATE:
        if (e.enableZoom === !1 && e.enableRotate === !1) return;
        ye(t), e.update();
        break;

      default:
        o = a.NONE;
    }
  }

  function ne(t) {
    e.enabled !== !1 && (e.dispatchEvent(S), o = a.NONE);
  }

  function se(t) {
    e.enabled !== !1 && t.preventDefault();
  }

  e.domElement.addEventListener("contextmenu", se, !1), e.domElement.addEventListener("mousedown", $, !1), e.domElement.addEventListener("wheel", ee, !1), e.domElement.addEventListener("touchstart", ae, !1), e.domElement.addEventListener("touchend", ne, !1), e.domElement.addEventListener("touchmove", oe, !1), e.domElement.addEventListener("keydown", te, !1), e.domElement.tabIndex === -1 && (e.domElement.tabIndex = 0), this.update();
};

j.prototype = Object.create(ce.prototype);
j.prototype.constructor = j;

var U = function (M, N) {
  j.call(this, M, N), this.mouseButtons.LEFT = l.PAN, this.mouseButtons.RIGHT = l.ROTATE, this.touches.ONE = f.PAN, this.touches.TWO = f.DOLLY_ROTATE;
};

U.prototype = Object.create(ce.prototype);
U.prototype.constructor = U;
export { U as MapControls, j as OrbitControls };