(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const h of f)
      if (h.type === "childList")
        for (const y of h.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && c(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const h = {};
    return (
      f.integrity && (h.integrity = f.integrity),
      f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const h = s(f);
    fetch(f.href, h);
  }
})();
var lp =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function op(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var bi = { exports: {} },
  Lr = {},
  eu = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function ip() {
  if (pc) return te;
  pc = 1;
  var i = Symbol.for("react.element"),
    u = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    y = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function A(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (O && v[O]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    C = {};
  function x(v, T, Z) {
    (this.props = v),
      (this.context = T),
      (this.refs = C),
      (this.updater = Z || U);
  }
  (x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (v, T) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, T, "setState");
    }),
    (x.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function F() {}
  F.prototype = x.prototype;
  function Q(v, T, Z) {
    (this.props = v),
      (this.context = T),
      (this.refs = C),
      (this.updater = Z || U);
  }
  var X = (Q.prototype = new F());
  (X.constructor = Q), j(X, x.prototype), (X.isPureReactComponent = !0);
  var ee = Array.isArray,
    re = Object.prototype.hasOwnProperty,
    oe = { current: null },
    fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Re(v, T, Z) {
    var ne,
      ie = {},
      ue = null,
      de = null;
    if (T != null)
      for (ne in (T.ref !== void 0 && (de = T.ref),
      T.key !== void 0 && (ue = "" + T.key),
      T))
        re.call(T, ne) && !fe.hasOwnProperty(ne) && (ie[ne] = T[ne]);
    var ae = arguments.length - 2;
    if (ae === 1) ie.children = Z;
    else if (1 < ae) {
      for (var ye = Array(ae), Ge = 0; Ge < ae; Ge++)
        ye[Ge] = arguments[Ge + 2];
      ie.children = ye;
    }
    if (v && v.defaultProps)
      for (ne in ((ae = v.defaultProps), ae))
        ie[ne] === void 0 && (ie[ne] = ae[ne]);
    return {
      $$typeof: i,
      type: v,
      key: ue,
      ref: de,
      props: ie,
      _owner: oe.current,
    };
  }
  function Ue(v, T) {
    return {
      $$typeof: i,
      type: v.type,
      key: T,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function Rt(v) {
    return typeof v == "object" && v !== null && v.$$typeof === i;
  }
  function en(v) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (Z) {
        return T[Z];
      })
    );
  }
  var gt = /\/+/g;
  function Ye(v, T) {
    return typeof v == "object" && v !== null && v.key != null
      ? en("" + v.key)
      : T.toString(36);
  }
  function at(v, T, Z, ne, ie) {
    var ue = typeof v;
    (ue === "undefined" || ue === "boolean") && (v = null);
    var de = !1;
    if (v === null) de = !0;
    else
      switch (ue) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case i:
            case u:
              de = !0;
          }
      }
    if (de)
      return (
        (de = v),
        (ie = ie(de)),
        (v = ne === "" ? "." + Ye(de, 0) : ne),
        ee(ie)
          ? ((Z = ""),
            v != null && (Z = v.replace(gt, "$&/") + "/"),
            at(ie, T, Z, "", function (Ge) {
              return Ge;
            }))
          : ie != null &&
            (Rt(ie) &&
              (ie = Ue(
                ie,
                Z +
                  (!ie.key || (de && de.key === ie.key)
                    ? ""
                    : ("" + ie.key).replace(gt, "$&/") + "/") +
                  v
              )),
            T.push(ie)),
        1
      );
    if (((de = 0), (ne = ne === "" ? "." : ne + ":"), ee(v)))
      for (var ae = 0; ae < v.length; ae++) {
        ue = v[ae];
        var ye = ne + Ye(ue, ae);
        de += at(ue, T, Z, ye, ie);
      }
    else if (((ye = A(v)), typeof ye == "function"))
      for (v = ye.call(v), ae = 0; !(ue = v.next()).done; )
        (ue = ue.value), (ye = ne + Ye(ue, ae++)), (de += at(ue, T, Z, ye, ie));
    else if (ue === "object")
      throw (
        ((T = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return de;
  }
  function wt(v, T, Z) {
    if (v == null) return v;
    var ne = [],
      ie = 0;
    return (
      at(v, ne, "", "", function (ue) {
        return T.call(Z, ue, ie++);
      }),
      ne
    );
  }
  function Ve(v) {
    if (v._status === -1) {
      var T = v._result;
      (T = T()),
        T.then(
          function (Z) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = Z));
          },
          function (Z) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = Z));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = T));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Se = { current: null },
    M = { transition: null },
    J = {
      ReactCurrentDispatcher: Se,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: oe,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (te.Children = {
      map: wt,
      forEach: function (v, T, Z) {
        wt(
          v,
          function () {
            T.apply(this, arguments);
          },
          Z
        );
      },
      count: function (v) {
        var T = 0;
        return (
          wt(v, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (v) {
        return (
          wt(v, function (T) {
            return T;
          }) || []
        );
      },
      only: function (v) {
        if (!Rt(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (te.Component = x),
    (te.Fragment = s),
    (te.Profiler = f),
    (te.PureComponent = Q),
    (te.StrictMode = c),
    (te.Suspense = z),
    (te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (te.act = H),
    (te.cloneElement = function (v, T, Z) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var ne = j({}, v.props),
        ie = v.key,
        ue = v.ref,
        de = v._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((ue = T.ref), (de = oe.current)),
          T.key !== void 0 && (ie = "" + T.key),
          v.type && v.type.defaultProps)
        )
          var ae = v.type.defaultProps;
        for (ye in T)
          re.call(T, ye) &&
            !fe.hasOwnProperty(ye) &&
            (ne[ye] = T[ye] === void 0 && ae !== void 0 ? ae[ye] : T[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) ne.children = Z;
      else if (1 < ye) {
        ae = Array(ye);
        for (var Ge = 0; Ge < ye; Ge++) ae[Ge] = arguments[Ge + 2];
        ne.children = ae;
      }
      return {
        $$typeof: i,
        type: v.type,
        key: ie,
        ref: ue,
        props: ne,
        _owner: de,
      };
    }),
    (te.createContext = function (v) {
      return (
        (v = {
          $$typeof: y,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: h, _context: v }),
        (v.Consumer = v)
      );
    }),
    (te.createElement = Re),
    (te.createFactory = function (v) {
      var T = Re.bind(null, v);
      return (T.type = v), T;
    }),
    (te.createRef = function () {
      return { current: null };
    }),
    (te.forwardRef = function (v) {
      return { $$typeof: E, render: v };
    }),
    (te.isValidElement = Rt),
    (te.lazy = function (v) {
      return { $$typeof: R, _payload: { _status: -1, _result: v }, _init: Ve };
    }),
    (te.memo = function (v, T) {
      return { $$typeof: _, type: v, compare: T === void 0 ? null : T };
    }),
    (te.startTransition = function (v) {
      var T = M.transition;
      M.transition = {};
      try {
        v();
      } finally {
        M.transition = T;
      }
    }),
    (te.unstable_act = H),
    (te.useCallback = function (v, T) {
      return Se.current.useCallback(v, T);
    }),
    (te.useContext = function (v) {
      return Se.current.useContext(v);
    }),
    (te.useDebugValue = function () {}),
    (te.useDeferredValue = function (v) {
      return Se.current.useDeferredValue(v);
    }),
    (te.useEffect = function (v, T) {
      return Se.current.useEffect(v, T);
    }),
    (te.useId = function () {
      return Se.current.useId();
    }),
    (te.useImperativeHandle = function (v, T, Z) {
      return Se.current.useImperativeHandle(v, T, Z);
    }),
    (te.useInsertionEffect = function (v, T) {
      return Se.current.useInsertionEffect(v, T);
    }),
    (te.useLayoutEffect = function (v, T) {
      return Se.current.useLayoutEffect(v, T);
    }),
    (te.useMemo = function (v, T) {
      return Se.current.useMemo(v, T);
    }),
    (te.useReducer = function (v, T, Z) {
      return Se.current.useReducer(v, T, Z);
    }),
    (te.useRef = function (v) {
      return Se.current.useRef(v);
    }),
    (te.useState = function (v) {
      return Se.current.useState(v);
    }),
    (te.useSyncExternalStore = function (v, T, Z) {
      return Se.current.useSyncExternalStore(v, T, Z);
    }),
    (te.useTransition = function () {
      return Se.current.useTransition();
    }),
    (te.version = "18.3.1"),
    te
  );
}
var hc;
function hu() {
  return hc || ((hc = 1), (eu.exports = ip())), eu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc;
function up() {
  if (mc) return Lr;
  mc = 1;
  var i = hu(),
    u = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(E, z, _) {
    var R,
      O = {},
      A = null,
      U = null;
    _ !== void 0 && (A = "" + _),
      z.key !== void 0 && (A = "" + z.key),
      z.ref !== void 0 && (U = z.ref);
    for (R in z) c.call(z, R) && !h.hasOwnProperty(R) && (O[R] = z[R]);
    if (E && E.defaultProps)
      for (R in ((z = E.defaultProps), z)) O[R] === void 0 && (O[R] = z[R]);
    return {
      $$typeof: u,
      type: E,
      key: A,
      ref: U,
      props: O,
      _owner: f.current,
    };
  }
  return (Lr.Fragment = s), (Lr.jsx = y), (Lr.jsxs = y), Lr;
}
var yc;
function sp() {
  return yc || ((yc = 1), (bi.exports = up())), bi.exports;
}
var b = sp(),
  mn = hu(),
  ql = {},
  tu = { exports: {} },
  Je = {},
  nu = { exports: {} },
  ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc;
function ap() {
  return (
    vc ||
      ((vc = 1),
      (function (i) {
        function u(M, J) {
          var H = M.length;
          M.push(J);
          e: for (; 0 < H; ) {
            var v = (H - 1) >>> 1,
              T = M[v];
            if (0 < f(T, J)) (M[v] = J), (M[H] = T), (H = v);
            else break e;
          }
        }
        function s(M) {
          return M.length === 0 ? null : M[0];
        }
        function c(M) {
          if (M.length === 0) return null;
          var J = M[0],
            H = M.pop();
          if (H !== J) {
            M[0] = H;
            e: for (var v = 0, T = M.length, Z = T >>> 1; v < Z; ) {
              var ne = 2 * (v + 1) - 1,
                ie = M[ne],
                ue = ne + 1,
                de = M[ue];
              if (0 > f(ie, H))
                ue < T && 0 > f(de, ie)
                  ? ((M[v] = de), (M[ue] = H), (v = ue))
                  : ((M[v] = ie), (M[ne] = H), (v = ne));
              else if (ue < T && 0 > f(de, H))
                (M[v] = de), (M[ue] = H), (v = ue);
              else break e;
            }
          }
          return J;
        }
        function f(M, J) {
          var H = M.sortIndex - J.sortIndex;
          return H !== 0 ? H : M.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var y = Date,
            E = y.now();
          i.unstable_now = function () {
            return y.now() - E;
          };
        }
        var z = [],
          _ = [],
          R = 1,
          O = null,
          A = 3,
          U = !1,
          j = !1,
          C = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function X(M) {
          for (var J = s(_); J !== null; ) {
            if (J.callback === null) c(_);
            else if (J.startTime <= M)
              c(_), (J.sortIndex = J.expirationTime), u(z, J);
            else break;
            J = s(_);
          }
        }
        function ee(M) {
          if (((C = !1), X(M), !j))
            if (s(z) !== null) (j = !0), Ve(re);
            else {
              var J = s(_);
              J !== null && Se(ee, J.startTime - M);
            }
        }
        function re(M, J) {
          (j = !1), C && ((C = !1), F(Re), (Re = -1)), (U = !0);
          var H = A;
          try {
            for (
              X(J), O = s(z);
              O !== null && (!(O.expirationTime > J) || (M && !en()));

            ) {
              var v = O.callback;
              if (typeof v == "function") {
                (O.callback = null), (A = O.priorityLevel);
                var T = v(O.expirationTime <= J);
                (J = i.unstable_now()),
                  typeof T == "function"
                    ? (O.callback = T)
                    : O === s(z) && c(z),
                  X(J);
              } else c(z);
              O = s(z);
            }
            if (O !== null) var Z = !0;
            else {
              var ne = s(_);
              ne !== null && Se(ee, ne.startTime - J), (Z = !1);
            }
            return Z;
          } finally {
            (O = null), (A = H), (U = !1);
          }
        }
        var oe = !1,
          fe = null,
          Re = -1,
          Ue = 5,
          Rt = -1;
        function en() {
          return !(i.unstable_now() - Rt < Ue);
        }
        function gt() {
          if (fe !== null) {
            var M = i.unstable_now();
            Rt = M;
            var J = !0;
            try {
              J = fe(!0, M);
            } finally {
              J ? Ye() : ((oe = !1), (fe = null));
            }
          } else oe = !1;
        }
        var Ye;
        if (typeof Q == "function")
          Ye = function () {
            Q(gt);
          };
        else if (typeof MessageChannel < "u") {
          var at = new MessageChannel(),
            wt = at.port2;
          (at.port1.onmessage = gt),
            (Ye = function () {
              wt.postMessage(null);
            });
        } else
          Ye = function () {
            x(gt, 0);
          };
        function Ve(M) {
          (fe = M), oe || ((oe = !0), Ye());
        }
        function Se(M, J) {
          Re = x(function () {
            M(i.unstable_now());
          }, J);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            j || U || ((j = !0), Ve(re));
          }),
          (i.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ue = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return s(z);
          }),
          (i.unstable_next = function (M) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = A;
            }
            var H = A;
            A = J;
            try {
              return M();
            } finally {
              A = H;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (M, J) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var H = A;
            A = M;
            try {
              return J();
            } finally {
              A = H;
            }
          }),
          (i.unstable_scheduleCallback = function (M, J, H) {
            var v = i.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? v + H : v))
                : (H = v),
              M)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = H + T),
              (M = {
                id: R++,
                callback: J,
                priorityLevel: M,
                startTime: H,
                expirationTime: T,
                sortIndex: -1,
              }),
              H > v
                ? ((M.sortIndex = H),
                  u(_, M),
                  s(z) === null &&
                    M === s(_) &&
                    (C ? (F(Re), (Re = -1)) : (C = !0), Se(ee, H - v)))
                : ((M.sortIndex = T), u(z, M), j || U || ((j = !0), Ve(re))),
              M
            );
          }),
          (i.unstable_shouldYield = en),
          (i.unstable_wrapCallback = function (M) {
            var J = A;
            return function () {
              var H = A;
              A = J;
              try {
                return M.apply(this, arguments);
              } finally {
                A = H;
              }
            };
          });
      })(ru)),
    ru
  );
}
var gc;
function cp() {
  return gc || ((gc = 1), (nu.exports = ap())), nu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc;
function fp() {
  if (wc) return Je;
  wc = 1;
  var i = hu(),
    u = cp();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    f = {};
  function h(e, t) {
    y(e, t), y(e + "Capture", t);
  }
  function y(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var E = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    z = Object.prototype.hasOwnProperty,
    _ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    R = {},
    O = {};
  function A(e) {
    return z.call(O, e)
      ? !0
      : z.call(R, e)
      ? !1
      : _.test(e)
      ? (O[e] = !0)
      : ((R[e] = !0), !1);
  }
  function U(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function j(e, t, n, r) {
    if (t === null || typeof t > "u" || U(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function C(e, t, n, r, l, o, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = a);
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      x[e] = new C(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      x[t] = new C(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      x[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      x[e] = new C(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        x[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      x[e] = new C(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      x[e] = new C(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      x[e] = new C(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      x[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var F = /[\-:]([a-z])/g;
  function Q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(F, Q);
      x[t] = new C(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(F, Q);
        x[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(F, Q);
      x[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      x[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (x.xlinkHref = new C(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      x[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function X(e, t, n, r) {
    var l = x.hasOwnProperty(t) ? x[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (j(t, n, l, r) && (n = null),
      r || l === null
        ? A(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    re = Symbol.for("react.element"),
    oe = Symbol.for("react.portal"),
    fe = Symbol.for("react.fragment"),
    Re = Symbol.for("react.strict_mode"),
    Ue = Symbol.for("react.profiler"),
    Rt = Symbol.for("react.provider"),
    en = Symbol.for("react.context"),
    gt = Symbol.for("react.forward_ref"),
    Ye = Symbol.for("react.suspense"),
    at = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Ve = Symbol.for("react.lazy"),
    Se = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Object.assign,
    v;
  function T(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var Z = !1;
  function ne(e, t) {
    if (!e || Z) return "";
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (
          var l = S.stack.split(`
`),
            o = r.stack.split(`
`),
            a = l.length - 1,
            d = o.length - 1;
          1 <= a && 0 <= d && l[a] !== o[d];

        )
          d--;
        for (; 1 <= a && 0 <= d; a--, d--)
          if (l[a] !== o[d]) {
            if (a !== 1 || d !== 1)
              do
                if ((a--, d--, 0 > d || l[a] !== o[d])) {
                  var p =
                    `
` + l[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= a && 0 <= d);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function ie(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ne(e.type, !1)), e;
      case 11:
        return (e = ne(e.type.render, !1)), e;
      case 1:
        return (e = ne(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case fe:
        return "Fragment";
      case oe:
        return "Portal";
      case Ue:
        return "Profiler";
      case Re:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case en:
          return (e.displayName || "Context") + ".Consumer";
        case Rt:
          return (e._context.displayName || "Context") + ".Provider";
        case gt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case wt:
          return (
            (t = e.displayName || null), t !== null ? t : ue(e.type) || "Memo"
          );
        case Ve:
          (t = e._payload), (e = e._init);
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ue(t);
      case 8:
        return t === Re ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ae(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ge(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (a) {
            (r = "" + a), o.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Mr(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function wu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ir(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function oo(e, t) {
    var n = t.checked;
    return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Su(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ku(e, t) {
    (t = t.checked), t != null && X(e, "checked", t, !1);
  }
  function io(e, t) {
    ku(e, t);
    var n = ae(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? uo(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && uo(e, t.type, ae(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Eu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function uo(e, t, n) {
    (t !== "number" || Ir(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function wn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ae(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function xu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function Cu(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function _u(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ru(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ao(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ru(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ur,
    Nu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ur = Ur || document.createElement("div"),
            Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ur.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    af = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Jn).forEach(function (e) {
    af.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
    });
  });
  function Tu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Pu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Tu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var cf = H(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function co(e, t) {
    if (t) {
      if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function fo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var po = null;
  function ho(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var mo = null,
    Sn = null,
    kn = null;
  function Ou(e) {
    if ((e = yr(e))) {
      if (typeof mo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = sl(t)), mo(e.stateNode, e.type, t));
    }
  }
  function Lu(e) {
    Sn ? (kn ? kn.push(e) : (kn = [e])) : (Sn = e);
  }
  function zu() {
    if (Sn) {
      var e = Sn,
        t = kn;
      if (((kn = Sn = null), Ou(e), t)) for (e = 0; e < t.length; e++) Ou(t[e]);
    }
  }
  function Du(e, t) {
    return e(t);
  }
  function Fu() {}
  var yo = !1;
  function ju(e, t, n) {
    if (yo) return e(t, n);
    yo = !0;
    try {
      return Du(e, t, n);
    } finally {
      (yo = !1), (Sn !== null || kn !== null) && (Fu(), zu());
    }
  }
  function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = sl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var vo = !1;
  if (E)
    try {
      var Yn = {};
      Object.defineProperty(Yn, "passive", {
        get: function () {
          vo = !0;
        },
      }),
        window.addEventListener("test", Yn, Yn),
        window.removeEventListener("test", Yn, Yn);
    } catch {
      vo = !1;
    }
  function ff(e, t, n, r, l, o, a, d, p) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (P) {
      this.onError(P);
    }
  }
  var Gn = !1,
    Br = null,
    Hr = !1,
    go = null,
    df = {
      onError: function (e) {
        (Gn = !0), (Br = e);
      },
    };
  function pf(e, t, n, r, l, o, a, d, p) {
    (Gn = !1), (Br = null), ff.apply(df, arguments);
  }
  function hf(e, t, n, r, l, o, a, d, p) {
    if ((pf.apply(this, arguments), Gn)) {
      if (Gn) {
        var S = Br;
        (Gn = !1), (Br = null);
      } else throw Error(s(198));
      Hr || ((Hr = !0), (go = S));
    }
  }
  function tn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Au(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Mu(e) {
    if (tn(e) !== e) throw Error(s(188));
  }
  function mf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = tn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Mu(l), e;
          if (o === r) return Mu(l), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var a = !1, d = l.child; d; ) {
          if (d === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (d === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = o.child; d; ) {
            if (d === n) {
              (a = !0), (n = o), (r = l);
              break;
            }
            if (d === r) {
              (a = !0), (r = o), (n = l);
              break;
            }
            d = d.sibling;
          }
          if (!a) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Iu(e) {
    return (e = mf(e)), e !== null ? Uu(e) : null;
  }
  function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Bu = u.unstable_scheduleCallback,
    Hu = u.unstable_cancelCallback,
    yf = u.unstable_shouldYield,
    vf = u.unstable_requestPaint,
    Ee = u.unstable_now,
    gf = u.unstable_getCurrentPriorityLevel,
    wo = u.unstable_ImmediatePriority,
    Vu = u.unstable_UserBlockingPriority,
    Vr = u.unstable_NormalPriority,
    wf = u.unstable_LowPriority,
    $u = u.unstable_IdlePriority,
    $r = null,
    St = null;
  function Sf(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot($r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : xf,
    kf = Math.log,
    Ef = Math.LN2;
  function xf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((kf(e) / Ef) | 0)) | 0;
  }
  var Wr = 64,
    Qr = 4194304;
  function Zn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Kr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var d = a & ~l;
      d !== 0 ? (r = Zn(d)) : ((o &= a), o !== 0 && (r = Zn(o)));
    } else (a = n & ~l), a !== 0 ? (r = Zn(a)) : o !== 0 && (r = Zn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Cf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _f(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var a = 31 - ct(o),
        d = 1 << a,
        p = l[a];
      p === -1
        ? (!(d & n) || d & r) && (l[a] = Cf(d, t))
        : p <= t && (e.expiredLanes |= d),
        (o &= ~d);
    }
  }
  function So(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Wu() {
    var e = Wr;
    return (Wr <<= 1), !(Wr & 4194240) && (Wr = 64), e;
  }
  function ko(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ct(t)),
      (e[t] = n);
  }
  function Rf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ct(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function Eo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ct(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ce = 0;
  function Qu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ku,
    xo,
    qu,
    Ju,
    Xu,
    Co = !1,
    qr = [],
    jt = null,
    At = null,
    Mt = null,
    er = new Map(),
    tr = new Map(),
    It = [],
    Nf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Yu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tr.delete(t.pointerId);
    }
  }
  function nr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = yr(t)), t !== null && xo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Tf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (jt = nr(jt, e, t, n, r, l)), !0;
      case "dragenter":
        return (At = nr(At, e, t, n, r, l)), !0;
      case "mouseover":
        return (Mt = nr(Mt, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return er.set(o, nr(er.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), tr.set(o, nr(tr.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Gu(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = tn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Au(n)), t !== null)) {
            (e.blockedOn = t),
              Xu(e.priority, function () {
                qu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ro(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (po = r), n.target.dispatchEvent(r), (po = null);
      } else return (t = yr(n)), t !== null && xo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Zu(e, t, n) {
    Jr(e) && n.delete(t);
  }
  function Pf() {
    (Co = !1),
      jt !== null && Jr(jt) && (jt = null),
      At !== null && Jr(At) && (At = null),
      Mt !== null && Jr(Mt) && (Mt = null),
      er.forEach(Zu),
      tr.forEach(Zu);
  }
  function rr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Co ||
        ((Co = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Pf)));
  }
  function lr(e) {
    function t(l) {
      return rr(l, e);
    }
    if (0 < qr.length) {
      rr(qr[0], e);
      for (var n = 1; n < qr.length; n++) {
        var r = qr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && rr(jt, e),
        At !== null && rr(At, e),
        Mt !== null && rr(Mt, e),
        er.forEach(t),
        tr.forEach(t),
        n = 0;
      n < It.length;
      n++
    )
      (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
      Gu(n), n.blockedOn === null && It.shift();
  }
  var En = ee.ReactCurrentBatchConfig,
    Xr = !0;
  function Of(e, t, n, r) {
    var l = ce,
      o = En.transition;
    En.transition = null;
    try {
      (ce = 1), _o(e, t, n, r);
    } finally {
      (ce = l), (En.transition = o);
    }
  }
  function Lf(e, t, n, r) {
    var l = ce,
      o = En.transition;
    En.transition = null;
    try {
      (ce = 4), _o(e, t, n, r);
    } finally {
      (ce = l), (En.transition = o);
    }
  }
  function _o(e, t, n, r) {
    if (Xr) {
      var l = Ro(e, t, n, r);
      if (l === null) $o(e, t, r, Yr, n), Yu(e, r);
      else if (Tf(l, e, t, n, r)) r.stopPropagation();
      else if ((Yu(e, r), t & 4 && -1 < Nf.indexOf(e))) {
        for (; l !== null; ) {
          var o = yr(l);
          if (
            (o !== null && Ku(o),
            (o = Ro(e, t, n, r)),
            o === null && $o(e, t, r, Yr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else $o(e, t, r, null, n);
    }
  }
  var Yr = null;
  function Ro(e, t, n, r) {
    if (((Yr = null), (e = ho(r)), (e = nn(e)), e !== null))
      if (((t = tn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Au(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Yr = e), null;
  }
  function bu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (gf()) {
          case wo:
            return 1;
          case Vu:
            return 4;
          case Vr:
          case wf:
            return 16;
          case $u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ut = null,
    No = null,
    Gr = null;
  function es() {
    if (Gr) return Gr;
    var e,
      t = No,
      n = t.length,
      r,
      l = "value" in Ut ? Ut.value : Ut.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[o - r]; r++);
    return (Gr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Zr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function br() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function Ze(e) {
    function t(n, r, l, o, a) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(o) : o[d]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? br
          : ts),
        (this.isPropagationStopped = ts),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = br));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = br));
        },
        persist: function () {},
        isPersistent: br,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    To = Ze(xn),
    or = H({}, xn, { view: 0, detail: 0 }),
    zf = Ze(or),
    Po,
    Oo,
    ir,
    el = H({}, or, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ir &&
              (ir && e.type === "mousemove"
                ? ((Po = e.screenX - ir.screenX), (Oo = e.screenY - ir.screenY))
                : (Oo = Po = 0),
              (ir = e)),
            Po);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Oo;
      },
    }),
    ns = Ze(el),
    Df = H({}, el, { dataTransfer: 0 }),
    Ff = Ze(Df),
    jf = H({}, or, { relatedTarget: 0 }),
    Lo = Ze(jf),
    Af = H({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mf = Ze(Af),
    If = H({}, xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Uf = Ze(If),
    Bf = H({}, xn, { data: 0 }),
    rs = Ze(Bf),
    Hf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Vf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    $f = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Wf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = $f[e])
      ? !!t[e]
      : !1;
  }
  function zo() {
    return Wf;
  }
  var Qf = H({}, or, {
      key: function (e) {
        if (e.key) {
          var t = Hf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Vf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zo,
      charCode: function (e) {
        return e.type === "keypress" ? Zr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Kf = Ze(Qf),
    qf = H({}, el, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ls = Ze(qf),
    Jf = H({}, or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zo,
    }),
    Xf = Ze(Jf),
    Yf = H({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gf = Ze(Yf),
    Zf = H({}, el, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    bf = Ze(Zf),
    ed = [9, 13, 27, 32],
    Do = E && "CompositionEvent" in window,
    ur = null;
  E && "documentMode" in document && (ur = document.documentMode);
  var td = E && "TextEvent" in window && !ur,
    os = E && (!Do || (ur && 8 < ur && 11 >= ur)),
    is = " ",
    us = !1;
  function ss(e, t) {
    switch (e) {
      case "keyup":
        return ed.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function as(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Cn = !1;
  function nd(e, t) {
    switch (e) {
      case "compositionend":
        return as(t);
      case "keypress":
        return t.which !== 32 ? null : ((us = !0), is);
      case "textInput":
        return (e = t.data), e === is && us ? null : e;
      default:
        return null;
    }
  }
  function rd(e, t) {
    if (Cn)
      return e === "compositionend" || (!Do && ss(e, t))
        ? ((e = es()), (Gr = No = Ut = null), (Cn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return os && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ld = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ld[e.type] : t === "textarea";
  }
  function fs(e, t, n, r) {
    Lu(r),
      (t = ol(t, "onChange")),
      0 < t.length &&
        ((n = new To("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var sr = null,
    ar = null;
  function od(e) {
    Ps(e, 0);
  }
  function tl(e) {
    var t = Pn(e);
    if (wu(t)) return e;
  }
  function id(e, t) {
    if (e === "change") return t;
  }
  var ds = !1;
  if (E) {
    var Fo;
    if (E) {
      var jo = "oninput" in document;
      if (!jo) {
        var ps = document.createElement("div");
        ps.setAttribute("oninput", "return;"),
          (jo = typeof ps.oninput == "function");
      }
      Fo = jo;
    } else Fo = !1;
    ds = Fo && (!document.documentMode || 9 < document.documentMode);
  }
  function hs() {
    sr && (sr.detachEvent("onpropertychange", ms), (ar = sr = null));
  }
  function ms(e) {
    if (e.propertyName === "value" && tl(ar)) {
      var t = [];
      fs(t, ar, e, ho(e)), ju(od, t);
    }
  }
  function ud(e, t, n) {
    e === "focusin"
      ? (hs(), (sr = t), (ar = n), sr.attachEvent("onpropertychange", ms))
      : e === "focusout" && hs();
  }
  function sd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tl(ar);
  }
  function ad(e, t) {
    if (e === "click") return tl(t);
  }
  function cd(e, t) {
    if (e === "input" || e === "change") return tl(t);
  }
  function fd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : fd;
  function cr(e, t) {
    if (ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!z.call(t, l) || !ft(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ys(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vs(e, t) {
    var n = ys(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ys(n);
    }
  }
  function gs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? gs(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ws() {
    for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ir(e.document);
    }
    return t;
  }
  function Ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function dd(e) {
    var t = ws(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      gs(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ao(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = vs(n, o));
          var a = vs(n, r);
          l &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var pd = E && "documentMode" in document && 11 >= document.documentMode,
    _n = null,
    Mo = null,
    fr = null,
    Io = !1;
  function Ss(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io ||
      _n == null ||
      _n !== Ir(r) ||
      ((r = _n),
      "selectionStart" in r && Ao(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && cr(fr, r)) ||
        ((fr = r),
        (r = ol(Mo, "onSelect")),
        0 < r.length &&
          ((t = new To("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = _n))));
  }
  function nl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Rn = {
      animationend: nl("Animation", "AnimationEnd"),
      animationiteration: nl("Animation", "AnimationIteration"),
      animationstart: nl("Animation", "AnimationStart"),
      transitionend: nl("Transition", "TransitionEnd"),
    },
    Uo = {},
    ks = {};
  E &&
    ((ks = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Rn.animationend.animation,
      delete Rn.animationiteration.animation,
      delete Rn.animationstart.animation),
    "TransitionEvent" in window || delete Rn.transitionend.transition);
  function rl(e) {
    if (Uo[e]) return Uo[e];
    if (!Rn[e]) return e;
    var t = Rn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ks) return (Uo[e] = t[n]);
    return e;
  }
  var Es = rl("animationend"),
    xs = rl("animationiteration"),
    Cs = rl("animationstart"),
    _s = rl("transitionend"),
    Rs = new Map(),
    Ns =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Bt(e, t) {
    Rs.set(e, t), h(t, [e]);
  }
  for (var Bo = 0; Bo < Ns.length; Bo++) {
    var Ho = Ns[Bo],
      hd = Ho.toLowerCase(),
      md = Ho[0].toUpperCase() + Ho.slice(1);
    Bt(hd, "on" + md);
  }
  Bt(Es, "onAnimationEnd"),
    Bt(xs, "onAnimationIteration"),
    Bt(Cs, "onAnimationStart"),
    Bt("dblclick", "onDoubleClick"),
    Bt("focusin", "onFocus"),
    Bt("focusout", "onBlur"),
    Bt(_s, "onTransitionEnd"),
    y("onMouseEnter", ["mouseout", "mouseover"]),
    y("onMouseLeave", ["mouseout", "mouseover"]),
    y("onPointerEnter", ["pointerout", "pointerover"]),
    y("onPointerLeave", ["pointerout", "pointerover"]),
    h(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    h(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    h(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    h(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    h(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var dr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(dr)
    );
  function Ts(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), hf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ps(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var d = r[a],
              p = d.instance,
              S = d.currentTarget;
            if (((d = d.listener), p !== o && l.isPropagationStopped()))
              break e;
            Ts(l, d, S), (o = p);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((d = r[a]),
              (p = d.instance),
              (S = d.currentTarget),
              (d = d.listener),
              p !== o && l.isPropagationStopped())
            )
              break e;
            Ts(l, d, S), (o = p);
          }
      }
    }
    if (Hr) throw ((e = go), (Hr = !1), (go = null), e);
  }
  function he(e, t) {
    var n = t[Xo];
    n === void 0 && (n = t[Xo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Os(t, e, 2, !1), n.add(r));
  }
  function Vo(e, t, n) {
    var r = 0;
    t && (r |= 4), Os(n, e, r, t);
  }
  var ll = "_reactListening" + Math.random().toString(36).slice(2);
  function pr(e) {
    if (!e[ll]) {
      (e[ll] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (yd.has(n) || Vo(n, !1, e), Vo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ll] || ((t[ll] = !0), Vo("selectionchange", !1, t));
    }
  }
  function Os(e, t, n, r) {
    switch (bu(t)) {
      case 1:
        var l = Of;
        break;
      case 4:
        l = Lf;
        break;
      default:
        l = _o;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !vo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function $o(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var d = r.stateNode.containerInfo;
          if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var p = a.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = a.stateNode.containerInfo),
                p === l || (p.nodeType === 8 && p.parentNode === l))
              )
                return;
              a = a.return;
            }
          for (; d !== null; ) {
            if (((a = nn(d)), a === null)) return;
            if (((p = a.tag), p === 5 || p === 6)) {
              r = o = a;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    ju(function () {
      var S = o,
        P = ho(n),
        L = [];
      e: {
        var N = Rs.get(e);
        if (N !== void 0) {
          var I = To,
            V = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              I = Kf;
              break;
            case "focusin":
              (V = "focus"), (I = Lo);
              break;
            case "focusout":
              (V = "blur"), (I = Lo);
              break;
            case "beforeblur":
            case "afterblur":
              I = Lo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              I = ns;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = Ff;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = Xf;
              break;
            case Es:
            case xs:
            case Cs:
              I = Mf;
              break;
            case _s:
              I = Gf;
              break;
            case "scroll":
              I = zf;
              break;
            case "wheel":
              I = bf;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = Uf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = ls;
          }
          var $ = (t & 4) !== 0,
            xe = !$ && e === "scroll",
            g = $ ? (N !== null ? N + "Capture" : null) : N;
          $ = [];
          for (var m = S, w; m !== null; ) {
            w = m;
            var D = w.stateNode;
            if (
              (w.tag === 5 &&
                D !== null &&
                ((w = D),
                g !== null &&
                  ((D = Xn(m, g)), D != null && $.push(hr(m, D, w)))),
              xe)
            )
              break;
            m = m.return;
          }
          0 < $.length &&
            ((N = new I(N, V, null, n, P)), L.push({ event: N, listeners: $ }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (I = e === "mouseout" || e === "pointerout"),
            N &&
              n !== po &&
              (V = n.relatedTarget || n.fromElement) &&
              (nn(V) || V[Nt]))
          )
            break e;
          if (
            (I || N) &&
            ((N =
              P.window === P
                ? P
                : (N = P.ownerDocument)
                ? N.defaultView || N.parentWindow
                : window),
            I
              ? ((V = n.relatedTarget || n.toElement),
                (I = S),
                (V = V ? nn(V) : null),
                V !== null &&
                  ((xe = tn(V)), V !== xe || (V.tag !== 5 && V.tag !== 6)) &&
                  (V = null))
              : ((I = null), (V = S)),
            I !== V)
          ) {
            if (
              (($ = ns),
              (D = "onMouseLeave"),
              (g = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                (($ = ls),
                (D = "onPointerLeave"),
                (g = "onPointerEnter"),
                (m = "pointer")),
              (xe = I == null ? N : Pn(I)),
              (w = V == null ? N : Pn(V)),
              (N = new $(D, m + "leave", I, n, P)),
              (N.target = xe),
              (N.relatedTarget = w),
              (D = null),
              nn(P) === S &&
                (($ = new $(g, m + "enter", V, n, P)),
                ($.target = w),
                ($.relatedTarget = xe),
                (D = $)),
              (xe = D),
              I && V)
            )
              t: {
                for ($ = I, g = V, m = 0, w = $; w; w = Nn(w)) m++;
                for (w = 0, D = g; D; D = Nn(D)) w++;
                for (; 0 < m - w; ) ($ = Nn($)), m--;
                for (; 0 < w - m; ) (g = Nn(g)), w--;
                for (; m--; ) {
                  if ($ === g || (g !== null && $ === g.alternate)) break t;
                  ($ = Nn($)), (g = Nn(g));
                }
                $ = null;
              }
            else $ = null;
            I !== null && Ls(L, N, I, $, !1),
              V !== null && xe !== null && Ls(L, xe, V, $, !0);
          }
        }
        e: {
          if (
            ((N = S ? Pn(S) : window),
            (I = N.nodeName && N.nodeName.toLowerCase()),
            I === "select" || (I === "input" && N.type === "file"))
          )
            var W = id;
          else if (cs(N))
            if (ds) W = cd;
            else {
              W = sd;
              var K = ud;
            }
          else
            (I = N.nodeName) &&
              I.toLowerCase() === "input" &&
              (N.type === "checkbox" || N.type === "radio") &&
              (W = ad);
          if (W && (W = W(e, S))) {
            fs(L, W, n, P);
            break e;
          }
          K && K(e, N, S),
            e === "focusout" &&
              (K = N._wrapperState) &&
              K.controlled &&
              N.type === "number" &&
              uo(N, "number", N.value);
        }
        switch (((K = S ? Pn(S) : window), e)) {
          case "focusin":
            (cs(K) || K.contentEditable === "true") &&
              ((_n = K), (Mo = S), (fr = null));
            break;
          case "focusout":
            fr = Mo = _n = null;
            break;
          case "mousedown":
            Io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Io = !1), Ss(L, n, P);
            break;
          case "selectionchange":
            if (pd) break;
          case "keydown":
          case "keyup":
            Ss(L, n, P);
        }
        var q;
        if (Do)
          e: {
            switch (e) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break e;
              case "compositionend":
                Y = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break e;
            }
            Y = void 0;
          }
        else
          Cn
            ? ss(e, n) && (Y = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Y = "onCompositionStart");
        Y &&
          (os &&
            n.locale !== "ko" &&
            (Cn || Y !== "onCompositionStart"
              ? Y === "onCompositionEnd" && Cn && (q = es())
              : ((Ut = P),
                (No = "value" in Ut ? Ut.value : Ut.textContent),
                (Cn = !0))),
          (K = ol(S, Y)),
          0 < K.length &&
            ((Y = new rs(Y, e, null, n, P)),
            L.push({ event: Y, listeners: K }),
            q ? (Y.data = q) : ((q = as(n)), q !== null && (Y.data = q)))),
          (q = td ? nd(e, n) : rd(e, n)) &&
            ((S = ol(S, "onBeforeInput")),
            0 < S.length &&
              ((P = new rs("onBeforeInput", "beforeinput", null, n, P)),
              L.push({ event: P, listeners: S }),
              (P.data = q)));
      }
      Ps(L, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ol(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Xn(e, n)),
        o != null && r.unshift(hr(e, o, l)),
        (o = Xn(e, t)),
        o != null && r.push(hr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function Nn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ls(e, t, n, r, l) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n,
        p = d.alternate,
        S = d.stateNode;
      if (p !== null && p === r) break;
      d.tag === 5 &&
        S !== null &&
        ((d = S),
        l
          ? ((p = Xn(n, o)), p != null && a.unshift(hr(n, p, d)))
          : l || ((p = Xn(n, o)), p != null && a.push(hr(n, p, d)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var vd = /\r\n?/g,
    gd = /\u0000|\uFFFD/g;
  function zs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vd,
        `
`
      )
      .replace(gd, "");
  }
  function il(e, t, n) {
    if (((t = zs(t)), zs(e) !== t && n)) throw Error(s(425));
  }
  function ul() {}
  var Wo = null,
    Qo = null;
  function Ko(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var qo = typeof setTimeout == "function" ? setTimeout : void 0,
    wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ds = typeof Promise == "function" ? Promise : void 0,
    Sd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ds < "u"
        ? function (e) {
            return Ds.resolve(null).then(e).catch(kd);
          }
        : qo;
  function kd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Jo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), lr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    lr(t);
  }
  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Fs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Tn = Math.random().toString(36).slice(2),
    kt = "__reactFiber$" + Tn,
    mr = "__reactProps$" + Tn,
    Nt = "__reactContainer$" + Tn,
    Xo = "__reactEvents$" + Tn,
    Ed = "__reactListeners$" + Tn,
    xd = "__reactHandles$" + Tn;
  function nn(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[kt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Fs(e); e !== null; ) {
            if ((n = e[kt])) return n;
            e = Fs(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function yr(e) {
    return (
      (e = e[kt] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Pn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function sl(e) {
    return e[mr] || null;
  }
  var Yo = [],
    On = -1;
  function Vt(e) {
    return { current: e };
  }
  function me(e) {
    0 > On || ((e.current = Yo[On]), (Yo[On] = null), On--);
  }
  function pe(e, t) {
    On++, (Yo[On] = e.current), (e.current = t);
  }
  var $t = {},
    Fe = Vt($t),
    $e = Vt(!1),
    rn = $t;
  function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function We(e) {
    return (e = e.childContextTypes), e != null;
  }
  function al() {
    me($e), me(Fe);
  }
  function js(e, t, n) {
    if (Fe.current !== $t) throw Error(s(168));
    pe(Fe, t), pe($e, n);
  }
  function As(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, de(e) || "Unknown", l));
    return H({}, n, r);
  }
  function cl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        $t),
      (rn = Fe.current),
      pe(Fe, e),
      pe($e, $e.current),
      !0
    );
  }
  function Ms(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = As(e, t, rn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        me($e),
        me(Fe),
        pe(Fe, e))
      : me($e),
      pe($e, n);
  }
  var Tt = null,
    fl = !1,
    Go = !1;
  function Is(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  function Cd(e) {
    (fl = !0), Is(e);
  }
  function Wt() {
    if (!Go && Tt !== null) {
      Go = !0;
      var e = 0,
        t = ce;
      try {
        var n = Tt;
        for (ce = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Tt = null), (fl = !1);
      } catch (l) {
        throw (Tt !== null && (Tt = Tt.slice(e + 1)), Bu(wo, Wt), l);
      } finally {
        (ce = t), (Go = !1);
      }
    }
    return null;
  }
  var zn = [],
    Dn = 0,
    dl = null,
    pl = 0,
    rt = [],
    lt = 0,
    ln = null,
    Pt = 1,
    Ot = "";
  function on(e, t) {
    (zn[Dn++] = pl), (zn[Dn++] = dl), (dl = e), (pl = t);
  }
  function Us(e, t, n) {
    (rt[lt++] = Pt), (rt[lt++] = Ot), (rt[lt++] = ln), (ln = e);
    var r = Pt;
    e = Ot;
    var l = 32 - ct(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - ct(t) + l;
    if (30 < o) {
      var a = l - (l % 5);
      (o = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (l -= a),
        (Pt = (1 << (32 - ct(t) + l)) | (n << l) | r),
        (Ot = o + e);
    } else (Pt = (1 << o) | (n << l) | r), (Ot = e);
  }
  function Zo(e) {
    e.return !== null && (on(e, 1), Us(e, 1, 0));
  }
  function bo(e) {
    for (; e === dl; )
      (dl = zn[--Dn]), (zn[Dn] = null), (pl = zn[--Dn]), (zn[Dn] = null);
    for (; e === ln; )
      (ln = rt[--lt]),
        (rt[lt] = null),
        (Ot = rt[--lt]),
        (rt[lt] = null),
        (Pt = rt[--lt]),
        (rt[lt] = null);
  }
  var be = null,
    et = null,
    ve = !1,
    dt = null;
  function Bs(e, t) {
    var n = st(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Hs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (be = e), (et = Ht(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (be = e), (et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = ln !== null ? { id: Pt, overflow: Ot } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = st(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (be = e),
              (et = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ei(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ti(e) {
    if (ve) {
      var t = et;
      if (t) {
        var n = t;
        if (!Hs(e, t)) {
          if (ei(e)) throw Error(s(418));
          t = Ht(n.nextSibling);
          var r = be;
          t && Hs(e, t)
            ? Bs(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (be = e));
        }
      } else {
        if (ei(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (ve = !1), (be = e);
      }
    }
  }
  function Vs(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    be = e;
  }
  function hl(e) {
    if (e !== be) return !1;
    if (!ve) return Vs(e), (ve = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
      t && (t = et))
    ) {
      if (ei(e)) throw ($s(), Error(s(418)));
      for (; t; ) Bs(e, t), (t = Ht(t.nextSibling));
    }
    if ((Vs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                et = Ht(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $s() {
    for (var e = et; e; ) e = Ht(e.nextSibling);
  }
  function Fn() {
    (et = be = null), (ve = !1);
  }
  function ni(e) {
    dt === null ? (dt = [e]) : dt.push(e);
  }
  var _d = ee.ReactCurrentBatchConfig;
  function vr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (a) {
              var d = l.refs;
              a === null ? delete d[o] : (d[o] = a);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ws(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qs(e) {
    function t(g, m) {
      if (e) {
        var w = g.deletions;
        w === null ? ((g.deletions = [m]), (g.flags |= 16)) : w.push(m);
      }
    }
    function n(g, m) {
      if (!e) return null;
      for (; m !== null; ) t(g, m), (m = m.sibling);
      return null;
    }
    function r(g, m) {
      for (g = new Map(); m !== null; )
        m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
      return g;
    }
    function l(g, m) {
      return (g = Zt(g, m)), (g.index = 0), (g.sibling = null), g;
    }
    function o(g, m, w) {
      return (
        (g.index = w),
        e
          ? ((w = g.alternate),
            w !== null
              ? ((w = w.index), w < m ? ((g.flags |= 2), m) : w)
              : ((g.flags |= 2), m))
          : ((g.flags |= 1048576), m)
      );
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function d(g, m, w, D) {
      return m === null || m.tag !== 6
        ? ((m = qi(w, g.mode, D)), (m.return = g), m)
        : ((m = l(m, w)), (m.return = g), m);
    }
    function p(g, m, w, D) {
      var W = w.type;
      return W === fe
        ? P(g, m, w.props.children, D, w.key)
        : m !== null &&
          (m.elementType === W ||
            (typeof W == "object" &&
              W !== null &&
              W.$$typeof === Ve &&
              Ws(W) === m.type))
        ? ((D = l(m, w.props)), (D.ref = vr(g, m, w)), (D.return = g), D)
        : ((D = Ul(w.type, w.key, w.props, null, g.mode, D)),
          (D.ref = vr(g, m, w)),
          (D.return = g),
          D);
    }
    function S(g, m, w, D) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== w.containerInfo ||
        m.stateNode.implementation !== w.implementation
        ? ((m = Ji(w, g.mode, D)), (m.return = g), m)
        : ((m = l(m, w.children || [])), (m.return = g), m);
    }
    function P(g, m, w, D, W) {
      return m === null || m.tag !== 7
        ? ((m = hn(w, g.mode, D, W)), (m.return = g), m)
        : ((m = l(m, w)), (m.return = g), m);
    }
    function L(g, m, w) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = qi("" + m, g.mode, w)), (m.return = g), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case re:
            return (
              (w = Ul(m.type, m.key, m.props, null, g.mode, w)),
              (w.ref = vr(g, null, m)),
              (w.return = g),
              w
            );
          case oe:
            return (m = Ji(m, g.mode, w)), (m.return = g), m;
          case Ve:
            var D = m._init;
            return L(g, D(m._payload), w);
        }
        if (Kn(m) || J(m))
          return (m = hn(m, g.mode, w, null)), (m.return = g), m;
        ml(g, m);
      }
      return null;
    }
    function N(g, m, w, D) {
      var W = m !== null ? m.key : null;
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return W !== null ? null : d(g, m, "" + w, D);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case re:
            return w.key === W ? p(g, m, w, D) : null;
          case oe:
            return w.key === W ? S(g, m, w, D) : null;
          case Ve:
            return (W = w._init), N(g, m, W(w._payload), D);
        }
        if (Kn(w) || J(w)) return W !== null ? null : P(g, m, w, D, null);
        ml(g, w);
      }
      return null;
    }
    function I(g, m, w, D, W) {
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return (g = g.get(w) || null), d(m, g, "" + D, W);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case re:
            return (
              (g = g.get(D.key === null ? w : D.key) || null), p(m, g, D, W)
            );
          case oe:
            return (
              (g = g.get(D.key === null ? w : D.key) || null), S(m, g, D, W)
            );
          case Ve:
            var K = D._init;
            return I(g, m, w, K(D._payload), W);
        }
        if (Kn(D) || J(D)) return (g = g.get(w) || null), P(m, g, D, W, null);
        ml(m, D);
      }
      return null;
    }
    function V(g, m, w, D) {
      for (
        var W = null, K = null, q = m, Y = (m = 0), Le = null;
        q !== null && Y < w.length;
        Y++
      ) {
        q.index > Y ? ((Le = q), (q = null)) : (Le = q.sibling);
        var se = N(g, q, w[Y], D);
        if (se === null) {
          q === null && (q = Le);
          break;
        }
        e && q && se.alternate === null && t(g, q),
          (m = o(se, m, Y)),
          K === null ? (W = se) : (K.sibling = se),
          (K = se),
          (q = Le);
      }
      if (Y === w.length) return n(g, q), ve && on(g, Y), W;
      if (q === null) {
        for (; Y < w.length; Y++)
          (q = L(g, w[Y], D)),
            q !== null &&
              ((m = o(q, m, Y)),
              K === null ? (W = q) : (K.sibling = q),
              (K = q));
        return ve && on(g, Y), W;
      }
      for (q = r(g, q); Y < w.length; Y++)
        (Le = I(q, g, Y, w[Y], D)),
          Le !== null &&
            (e &&
              Le.alternate !== null &&
              q.delete(Le.key === null ? Y : Le.key),
            (m = o(Le, m, Y)),
            K === null ? (W = Le) : (K.sibling = Le),
            (K = Le));
      return (
        e &&
          q.forEach(function (bt) {
            return t(g, bt);
          }),
        ve && on(g, Y),
        W
      );
    }
    function $(g, m, w, D) {
      var W = J(w);
      if (typeof W != "function") throw Error(s(150));
      if (((w = W.call(w)), w == null)) throw Error(s(151));
      for (
        var K = (W = null), q = m, Y = (m = 0), Le = null, se = w.next();
        q !== null && !se.done;
        Y++, se = w.next()
      ) {
        q.index > Y ? ((Le = q), (q = null)) : (Le = q.sibling);
        var bt = N(g, q, se.value, D);
        if (bt === null) {
          q === null && (q = Le);
          break;
        }
        e && q && bt.alternate === null && t(g, q),
          (m = o(bt, m, Y)),
          K === null ? (W = bt) : (K.sibling = bt),
          (K = bt),
          (q = Le);
      }
      if (se.done) return n(g, q), ve && on(g, Y), W;
      if (q === null) {
        for (; !se.done; Y++, se = w.next())
          (se = L(g, se.value, D)),
            se !== null &&
              ((m = o(se, m, Y)),
              K === null ? (W = se) : (K.sibling = se),
              (K = se));
        return ve && on(g, Y), W;
      }
      for (q = r(g, q); !se.done; Y++, se = w.next())
        (se = I(q, g, Y, se.value, D)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              q.delete(se.key === null ? Y : se.key),
            (m = o(se, m, Y)),
            K === null ? (W = se) : (K.sibling = se),
            (K = se));
      return (
        e &&
          q.forEach(function (rp) {
            return t(g, rp);
          }),
        ve && on(g, Y),
        W
      );
    }
    function xe(g, m, w, D) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === fe &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case re:
            e: {
              for (var W = w.key, K = m; K !== null; ) {
                if (K.key === W) {
                  if (((W = w.type), W === fe)) {
                    if (K.tag === 7) {
                      n(g, K.sibling),
                        (m = l(K, w.props.children)),
                        (m.return = g),
                        (g = m);
                      break e;
                    }
                  } else if (
                    K.elementType === W ||
                    (typeof W == "object" &&
                      W !== null &&
                      W.$$typeof === Ve &&
                      Ws(W) === K.type)
                  ) {
                    n(g, K.sibling),
                      (m = l(K, w.props)),
                      (m.ref = vr(g, K, w)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                  n(g, K);
                  break;
                } else t(g, K);
                K = K.sibling;
              }
              w.type === fe
                ? ((m = hn(w.props.children, g.mode, D, w.key)),
                  (m.return = g),
                  (g = m))
                : ((D = Ul(w.type, w.key, w.props, null, g.mode, D)),
                  (D.ref = vr(g, m, w)),
                  (D.return = g),
                  (g = D));
            }
            return a(g);
          case oe:
            e: {
              for (K = w.key; m !== null; ) {
                if (m.key === K)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === w.containerInfo &&
                    m.stateNode.implementation === w.implementation
                  ) {
                    n(g, m.sibling),
                      (m = l(m, w.children || [])),
                      (m.return = g),
                      (g = m);
                    break e;
                  } else {
                    n(g, m);
                    break;
                  }
                else t(g, m);
                m = m.sibling;
              }
              (m = Ji(w, g.mode, D)), (m.return = g), (g = m);
            }
            return a(g);
          case Ve:
            return (K = w._init), xe(g, m, K(w._payload), D);
        }
        if (Kn(w)) return V(g, m, w, D);
        if (J(w)) return $(g, m, w, D);
        ml(g, w);
      }
      return (typeof w == "string" && w !== "") || typeof w == "number"
        ? ((w = "" + w),
          m !== null && m.tag === 6
            ? (n(g, m.sibling), (m = l(m, w)), (m.return = g), (g = m))
            : (n(g, m), (m = qi(w, g.mode, D)), (m.return = g), (g = m)),
          a(g))
        : n(g, m);
    }
    return xe;
  }
  var jn = Qs(!0),
    Ks = Qs(!1),
    yl = Vt(null),
    vl = null,
    An = null,
    ri = null;
  function li() {
    ri = An = vl = null;
  }
  function oi(e) {
    var t = yl.current;
    me(yl), (e._currentValue = t);
  }
  function ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Mn(e, t) {
    (vl = e),
      (ri = An = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Qe = !0), (e.firstContext = null));
  }
  function ot(e) {
    var t = e._currentValue;
    if (ri !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
        if (vl === null) throw Error(s(308));
        (An = e), (vl.dependencies = { lanes: 0, firstContext: e });
      } else An = An.next = e;
    return t;
  }
  var un = null;
  function ui(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function qs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ui(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Lt(e, r)
    );
  }
  function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Qt = !1;
  function si(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Js(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function zt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), le & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Lt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ui(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Lt(e, n)
    );
  }
  function gl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
    }
  }
  function Xs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = a) : (o = o.next = a), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function wl(e, t, n, r) {
    var l = e.updateQueue;
    Qt = !1;
    var o = l.firstBaseUpdate,
      a = l.lastBaseUpdate,
      d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var p = d,
        S = p.next;
      (p.next = null), a === null ? (o = S) : (a.next = S), (a = p);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (d = P.lastBaseUpdate),
        d !== a &&
          (d === null ? (P.firstBaseUpdate = S) : (d.next = S),
          (P.lastBaseUpdate = p)));
    }
    if (o !== null) {
      var L = l.baseState;
      (a = 0), (P = S = p = null), (d = o);
      do {
        var N = d.lane,
          I = d.eventTime;
        if ((r & N) === N) {
          P !== null &&
            (P = P.next =
              {
                eventTime: I,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var V = e,
              $ = d;
            switch (((N = t), (I = n), $.tag)) {
              case 1:
                if (((V = $.payload), typeof V == "function")) {
                  L = V.call(I, L, N);
                  break e;
                }
                L = V;
                break e;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = $.payload),
                  (N = typeof V == "function" ? V.call(I, L, N) : V),
                  N == null)
                )
                  break e;
                L = H({}, L, N);
                break e;
              case 2:
                Qt = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (N = l.effects),
            N === null ? (l.effects = [d]) : N.push(d));
        } else
          (I = {
            eventTime: I,
            lane: N,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            P === null ? ((S = P = I), (p = L)) : (P = P.next = I),
            (a |= N);
        if (((d = d.next), d === null)) {
          if (((d = l.shared.pending), d === null)) break;
          (N = d),
            (d = N.next),
            (N.next = null),
            (l.lastBaseUpdate = N),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (P === null && (p = L),
        (l.baseState = p),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = P),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (a |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (cn |= a), (e.lanes = a), (e.memoizedState = L);
    }
  }
  function Ys(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var gr = {},
    Et = Vt(gr),
    wr = Vt(gr),
    Sr = Vt(gr);
  function sn(e) {
    if (e === gr) throw Error(s(174));
    return e;
  }
  function ai(e, t) {
    switch ((pe(Sr, t), pe(wr, e), pe(Et, gr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ao(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ao(t, e));
    }
    me(Et), pe(Et, t);
  }
  function In() {
    me(Et), me(wr), me(Sr);
  }
  function Gs(e) {
    sn(Sr.current);
    var t = sn(Et.current),
      n = ao(t, e.type);
    t !== n && (pe(wr, e), pe(Et, n));
  }
  function ci(e) {
    wr.current === e && (me(Et), me(wr));
  }
  var ge = Vt(0);
  function Sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var fi = [];
  function di() {
    for (var e = 0; e < fi.length; e++)
      fi[e]._workInProgressVersionPrimary = null;
    fi.length = 0;
  }
  var kl = ee.ReactCurrentDispatcher,
    pi = ee.ReactCurrentBatchConfig,
    an = 0,
    we = null,
    Ne = null,
    Pe = null,
    El = !1,
    kr = !1,
    Er = 0,
    Rd = 0;
  function je() {
    throw Error(s(321));
  }
  function hi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function mi(e, t, n, r, l, o) {
    if (
      ((an = o),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (kl.current = e === null || e.memoizedState === null ? Od : Ld),
      (e = n(r, l)),
      kr)
    ) {
      o = 0;
      do {
        if (((kr = !1), (Er = 0), 25 <= o)) throw Error(s(301));
        (o += 1),
          (Pe = Ne = null),
          (t.updateQueue = null),
          (kl.current = zd),
          (e = n(r, l));
      } while (kr);
    }
    if (
      ((kl.current = _l),
      (t = Ne !== null && Ne.next !== null),
      (an = 0),
      (Pe = Ne = we = null),
      (El = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function yi() {
    var e = Er !== 0;
    return (Er = 0), e;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Pe === null ? (we.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
  }
  function it() {
    if (Ne === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Pe === null ? we.memoizedState : Pe.next;
    if (t !== null) (Pe = t), (Ne = e);
    else {
      if (e === null) throw Error(s(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        Pe === null ? (we.memoizedState = Pe = e) : (Pe = Pe.next = e);
    }
    return Pe;
  }
  function xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vi(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ne,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var a = l.next;
        (l.next = o.next), (o.next = a);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var d = (a = null),
        p = null,
        S = o;
      do {
        var P = S.lane;
        if ((an & P) === P)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action));
        else {
          var L = {
            lane: P,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          p === null ? ((d = p = L), (a = r)) : (p = p.next = L),
            (we.lanes |= P),
            (cn |= P);
        }
        S = S.next;
      } while (S !== null && S !== o);
      p === null ? (a = r) : (p.next = d),
        ft(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = p),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (we.lanes |= o), (cn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function gi(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var a = (l = l.next);
      do (o = e(o, a.action)), (a = a.next);
      while (a !== l);
      ft(o, t.memoizedState) || (Qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Zs() {}
  function bs(e, t) {
    var n = we,
      r = it(),
      l = t(),
      o = !ft(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Qe = !0)),
      (r = r.queue),
      wi(na.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Cr(9, ta.bind(null, n, r, l, t), void 0, null),
        Oe === null)
      )
        throw Error(s(349));
      an & 30 || ea(n, t, l);
    }
    return l;
  }
  function ea(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ta(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ra(t) && la(e);
  }
  function na(e, t, n) {
    return n(function () {
      ra(t) && la(e);
    });
  }
  function ra(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function la(e) {
    var t = Lt(e, 1);
    t !== null && yt(t, e, 1, -1);
  }
  function oa(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Pd.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ia() {
    return it().memoizedState;
  }
  function xl(e, t, n, r) {
    var l = xt();
    (we.flags |= e),
      (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Cl(e, t, n, r) {
    var l = it();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ne !== null) {
      var a = Ne.memoizedState;
      if (((o = a.destroy), r !== null && hi(r, a.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    (we.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r));
  }
  function ua(e, t) {
    return xl(8390656, 8, e, t);
  }
  function wi(e, t) {
    return Cl(2048, 8, e, t);
  }
  function sa(e, t) {
    return Cl(4, 2, e, t);
  }
  function aa(e, t) {
    return Cl(4, 4, e, t);
  }
  function ca(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function fa(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Cl(4, 4, ca.bind(null, t, e), n)
    );
  }
  function Si() {}
  function da(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function pa(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ha(e, t, n) {
    return an & 21
      ? (ft(n, t) ||
          ((n = Wu()), (we.lanes |= n), (cn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
  }
  function Nd(e, t) {
    var n = ce;
    (ce = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = pi.transition;
    pi.transition = {};
    try {
      e(!1), t();
    } finally {
      (ce = n), (pi.transition = r);
    }
  }
  function ma() {
    return it().memoizedState;
  }
  function Td(e, t, n) {
    var r = Yt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ya(e))
    )
      va(t, n);
    else if (((n = qs(e, t, n, r)), n !== null)) {
      var l = He();
      yt(n, e, r, l), ga(n, t, r);
    }
  }
  function Pd(e, t, n) {
    var r = Yt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ya(e)) va(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var a = t.lastRenderedState,
            d = o(a, n);
          if (((l.hasEagerState = !0), (l.eagerState = d), ft(d, a))) {
            var p = t.interleaved;
            p === null
              ? ((l.next = l), ui(t))
              : ((l.next = p.next), (p.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = qs(e, t, l, r)),
        n !== null && ((l = He()), yt(n, e, r, l), ga(n, t, r));
    }
  }
  function ya(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function va(e, t) {
    kr = El = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ga(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
    }
  }
  var _l = {
      readContext: ot,
      useCallback: je,
      useContext: je,
      useEffect: je,
      useImperativeHandle: je,
      useInsertionEffect: je,
      useLayoutEffect: je,
      useMemo: je,
      useReducer: je,
      useRef: je,
      useState: je,
      useDebugValue: je,
      useDeferredValue: je,
      useTransition: je,
      useMutableSource: je,
      useSyncExternalStore: je,
      useId: je,
      unstable_isNewReconciler: !1,
    },
    Od = {
      readContext: ot,
      useCallback: function (e, t) {
        return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ot,
      useEffect: ua,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          xl(4194308, 4, ca.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Td.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: oa,
      useDebugValue: Si,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = oa(!1),
          t = e[0];
        return (e = Nd.bind(null, e[1])), (xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          l = xt();
        if (ve) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Oe === null)) throw Error(s(349));
          an & 30 || ea(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          ua(na.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, ta.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = Oe.identifierPrefix;
        if (ve) {
          var n = Ot,
            r = Pt;
          (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Er++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Rd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ld = {
      readContext: ot,
      useCallback: da,
      useContext: ot,
      useEffect: wi,
      useImperativeHandle: fa,
      useInsertionEffect: sa,
      useLayoutEffect: aa,
      useMemo: pa,
      useReducer: vi,
      useRef: ia,
      useState: function () {
        return vi(xr);
      },
      useDebugValue: Si,
      useDeferredValue: function (e) {
        var t = it();
        return ha(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = vi(xr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: Zs,
      useSyncExternalStore: bs,
      useId: ma,
      unstable_isNewReconciler: !1,
    },
    zd = {
      readContext: ot,
      useCallback: da,
      useContext: ot,
      useEffect: wi,
      useImperativeHandle: fa,
      useInsertionEffect: sa,
      useLayoutEffect: aa,
      useMemo: pa,
      useReducer: gi,
      useRef: ia,
      useState: function () {
        return gi(xr);
      },
      useDebugValue: Si,
      useDeferredValue: function (e) {
        var t = it();
        return Ne === null ? (t.memoizedState = e) : ha(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = gi(xr)[0],
          t = it().memoizedState;
        return [e, t];
      },
      useMutableSource: Zs,
      useSyncExternalStore: bs,
      useId: ma,
      unstable_isNewReconciler: !1,
    };
  function pt(e, t) {
    if (e && e.defaultProps) {
      (t = H({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ki(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : H({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Rl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? tn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = He(),
        l = Yt(e),
        o = zt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (yt(t, e, l, r), gl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = He(),
        l = Yt(e),
        o = zt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (yt(t, e, l, r), gl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = He(),
        r = Yt(e),
        l = zt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Kt(e, l, r)),
        t !== null && (yt(t, e, r, n), gl(t, e, r));
    },
  };
  function wa(e, t, n, r, l, o, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !cr(n, r) || !cr(l, o)
        : !0
    );
  }
  function Sa(e, t, n) {
    var r = !1,
      l = $t,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ot(o))
        : ((l = We(t) ? rn : Fe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ln(e, l) : $t)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Rl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ka(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
  }
  function Ei(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), si(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = ot(o))
      : ((o = We(t) ? rn : Fe.current), (l.context = Ln(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (ki(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
        wl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Un(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ie(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ci(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Dd = typeof WeakMap == "function" ? WeakMap : Map;
  function Ea(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Dl || ((Dl = !0), (Ui = r)), Ci(e, t);
      }),
      n
    );
  }
  function xa(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ci(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Ci(e, t),
            typeof r != "function" &&
              (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Ca(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Dd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = qd.bind(null, e, t, n)), t.then(e, e));
  }
  function _a(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ra(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = zt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Fd = ee.ReactCurrentOwner,
    Qe = !1;
  function Be(e, t, n, r) {
    t.child = e === null ? Ks(t, null, n, r) : jn(t, e.child, n, r);
  }
  function Na(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Mn(t, l),
      (r = mi(e, t, n, r, o, l)),
      (n = yi()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Dt(e, t, l))
        : (ve && n && Zo(t), (t.flags |= 1), Be(e, t, r, l), t.child)
    );
  }
  function Ta(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ki(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Pa(e, t, o, r, l))
        : ((e = Ul(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var a = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : cr), n(a, r) && e.ref === t.ref)
      )
        return Dt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Zt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cr(o, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (Qe = !0);
        else return (t.lanes = e.lanes), Dt(e, t, l);
    }
    return _i(e, t, n, r, l);
  }
  function Oa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          pe(Hn, tt),
          (tt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            pe(Hn, tt),
            (tt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          pe(Hn, tt),
          (tt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        pe(Hn, tt),
        (tt |= r);
    return Be(e, t, l, n), t.child;
  }
  function La(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function _i(e, t, n, r, l) {
    var o = We(n) ? rn : Fe.current;
    return (
      (o = Ln(t, o)),
      Mn(t, l),
      (n = mi(e, t, n, r, o, l)),
      (r = yi()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Dt(e, t, l))
        : (ve && r && Zo(t), (t.flags |= 1), Be(e, t, n, l), t.child)
    );
  }
  function za(e, t, n, r, l) {
    if (We(n)) {
      var o = !0;
      cl(t);
    } else o = !1;
    if ((Mn(t, l), t.stateNode === null))
      Tl(e, t), Sa(t, n, r), Ei(t, n, r, l), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        d = t.memoizedProps;
      a.props = d;
      var p = a.context,
        S = n.contextType;
      typeof S == "object" && S !== null
        ? (S = ot(S))
        : ((S = We(n) ? rn : Fe.current), (S = Ln(t, S)));
      var P = n.getDerivedStateFromProps,
        L =
          typeof P == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== r || p !== S) && ka(t, a, r, S)),
        (Qt = !1);
      var N = t.memoizedState;
      (a.state = N),
        wl(t, r, a, l),
        (p = t.memoizedState),
        d !== r || N !== p || $e.current || Qt
          ? (typeof P == "function" && (ki(t, n, P, r), (p = t.memoizedState)),
            (d = Qt || wa(t, n, d, r, N, p, S))
              ? (L ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = S),
            (r = d))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Js(e, t),
        (d = t.memoizedProps),
        (S = t.type === t.elementType ? d : pt(t.type, d)),
        (a.props = S),
        (L = t.pendingProps),
        (N = a.context),
        (p = n.contextType),
        typeof p == "object" && p !== null
          ? (p = ot(p))
          : ((p = We(n) ? rn : Fe.current), (p = Ln(t, p)));
      var I = n.getDerivedStateFromProps;
      (P =
        typeof I == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== L || N !== p) && ka(t, a, r, p)),
        (Qt = !1),
        (N = t.memoizedState),
        (a.state = N),
        wl(t, r, a, l);
      var V = t.memoizedState;
      d !== L || N !== V || $e.current || Qt
        ? (typeof I == "function" && (ki(t, n, I, r), (V = t.memoizedState)),
          (S = Qt || wa(t, n, S, r, N, V, p) || !1)
            ? (P ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, V, p),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, V, p)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (d === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = V)),
          (a.props = r),
          (a.state = V),
          (a.context = p),
          (r = S))
        : (typeof a.componentDidUpdate != "function" ||
            (d === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ri(e, t, n, r, o, l);
  }
  function Ri(e, t, n, r, l, o) {
    La(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return l && Ms(t, n, !1), Dt(e, t, o);
    (r = t.stateNode), (Fd.current = t);
    var d =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = jn(t, e.child, null, o)), (t.child = jn(t, null, d, o)))
        : Be(e, t, d, o),
      (t.memoizedState = r.state),
      l && Ms(t, n, !0),
      t.child
    );
  }
  function Da(e) {
    var t = e.stateNode;
    t.pendingContext
      ? js(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && js(e, t.context, !1),
      ai(e, t.containerInfo);
  }
  function Fa(e, t, n, r, l) {
    return Fn(), ni(l), (t.flags |= 256), Be(e, t, n, r), t.child;
  }
  var Ni = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ti(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ja(e, t, n) {
    var r = t.pendingProps,
      l = ge.current,
      o = !1,
      a = (t.flags & 128) !== 0,
      d;
    if (
      ((d = a) ||
        (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      d
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      pe(ge, l & 1),
      e === null)
    )
      return (
        ti(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((a = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (a = { mode: "hidden", children: a }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = a))
                  : (o = Bl(a, r, 0, null)),
                (e = hn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Ti(n)),
                (t.memoizedState = Ni),
                e)
              : Pi(t, a))
      );
    if (((l = e.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
      return jd(e, t, a, r, d, l, n);
    if (o) {
      (o = r.fallback), (a = t.mode), (l = e.child), (d = l.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = Zt(l, p)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        d !== null ? (o = Zt(d, o)) : ((o = hn(o, a, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? Ti(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (o.memoizedState = a),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ni),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Zt(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Pi(e, t) {
    return (
      (t = Bl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Nl(e, t, n, r) {
    return (
      r !== null && ni(r),
      jn(t, e.child, null, n),
      (e = Pi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jd(e, t, n, r, l, o, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = xi(Error(s(422)))), Nl(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Bl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = hn(o, l, a, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && jn(t, e.child, null, a),
          (t.child.memoizedState = Ti(a)),
          (t.memoizedState = Ni),
          o);
    if (!(t.mode & 1)) return Nl(e, t, a, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d), (o = Error(s(419))), (r = xi(o, r, void 0)), Nl(e, t, a, r)
      );
    }
    if (((d = (a & e.childLanes) !== 0), Qe || d)) {
      if (((r = Oe), r !== null)) {
        switch (a & -a) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | a) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Lt(e, l), yt(r, e, l, -1));
      }
      return Qi(), (r = xi(Error(s(421)))), Nl(e, t, a, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Jd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (et = Ht(l.nextSibling)),
        (be = t),
        (ve = !0),
        (dt = null),
        e !== null &&
          ((rt[lt++] = Pt),
          (rt[lt++] = Ot),
          (rt[lt++] = ln),
          (Pt = e.id),
          (Ot = e.overflow),
          (ln = t)),
        (t = Pi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Aa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ii(e.return, t, n);
  }
  function Oi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Ma(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Be(e, t, r.children, n), (r = ge.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Aa(e, n, t);
          else if (e.tag === 19) Aa(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((pe(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Sl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Oi(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Sl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Oi(t, !0, n, null, o);
          break;
        case "together":
          Oi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Tl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Dt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (cn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Zt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ad(e, t, n) {
    switch (t.tag) {
      case 3:
        Da(t), Fn();
        break;
      case 5:
        Gs(t);
        break;
      case 1:
        We(t.type) && cl(t);
        break;
      case 4:
        ai(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        pe(yl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (pe(ge, ge.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? ja(e, t, n)
            : (pe(ge, ge.current & 1),
              (e = Dt(e, t, n)),
              e !== null ? e.sibling : null);
        pe(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ma(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          pe(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Oa(e, t, n);
    }
    return Dt(e, t, n);
  }
  var Ia, Li, Ua, Ba;
  (Ia = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Li = function () {}),
    (Ua = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), sn(Et.current);
        var o = null;
        switch (n) {
          case "input":
            (l = oo(e, l)), (r = oo(e, r)), (o = []);
            break;
          case "select":
            (l = H({}, l, { value: void 0 })),
              (r = H({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = so(e, l)), (r = so(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ul);
        }
        co(n, r);
        var a;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === "style") {
              var d = l[S];
              for (a in d) d.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              S !== "dangerouslySetInnerHTML" &&
                S !== "children" &&
                S !== "suppressContentEditableWarning" &&
                S !== "suppressHydrationWarning" &&
                S !== "autoFocus" &&
                (f.hasOwnProperty(S)
                  ? o || (o = [])
                  : (o = o || []).push(S, null));
        for (S in r) {
          var p = r[S];
          if (
            ((d = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && p !== d && (p != null || d != null))
          )
            if (S === "style")
              if (d) {
                for (a in d)
                  !d.hasOwnProperty(a) ||
                    (p && p.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in p)
                  p.hasOwnProperty(a) &&
                    d[a] !== p[a] &&
                    (n || (n = {}), (n[a] = p[a]));
              } else n || (o || (o = []), o.push(S, n)), (n = p);
            else
              S === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (d = d ? d.__html : void 0),
                  p != null && d !== p && (o = o || []).push(S, p))
                : S === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (o = o || []).push(S, "" + p)
                : S !== "suppressContentEditableWarning" &&
                  S !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(S)
                    ? (p != null && S === "onScroll" && he("scroll", e),
                      o || d === p || (o = []))
                    : (o = o || []).push(S, p));
        }
        n && (o = o || []).push("style", n);
        var S = o;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (Ba = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function _r(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Md(e, t, n) {
    var r = t.pendingProps;
    switch ((bo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ae(t), null;
      case 1:
        return We(t.type) && al(), Ae(t), null;
      case 3:
        return (
          (r = t.stateNode),
          In(),
          me($e),
          me(Fe),
          di(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (hl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), dt !== null && (Vi(dt), (dt = null)))),
          Li(e, t),
          Ae(t),
          null
        );
      case 5:
        ci(t);
        var l = sn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ua(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ae(t), null;
          }
          if (((e = sn(Et.current)), hl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[kt] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                he("cancel", r), he("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) he(dr[l], r);
                break;
              case "source":
                he("error", r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", r), he("load", r);
                break;
              case "details":
                he("toggle", r);
                break;
              case "input":
                Su(r, o), he("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  he("invalid", r);
                break;
              case "textarea":
                xu(r, o), he("invalid", r);
            }
            co(n, o), (l = null);
            for (var a in o)
              if (o.hasOwnProperty(a)) {
                var d = o[a];
                a === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (o.suppressHydrationWarning !== !0 &&
                        il(r.textContent, d, e),
                      (l = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (o.suppressHydrationWarning !== !0 &&
                        il(r.textContent, d, e),
                      (l = ["children", "" + d]))
                  : f.hasOwnProperty(a) &&
                    d != null &&
                    a === "onScroll" &&
                    he("scroll", r);
              }
            switch (n) {
              case "input":
                Mr(r), Eu(r, o, !0);
                break;
              case "textarea":
                Mr(r), _u(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ul);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ru(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[kt] = t),
              (e[mr] = r),
              Ia(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = fo(n, r)), n)) {
                case "dialog":
                  he("cancel", e), he("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  he("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < dr.length; l++) he(dr[l], e);
                  l = r;
                  break;
                case "source":
                  he("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  he("error", e), he("load", e), (l = r);
                  break;
                case "details":
                  he("toggle", e), (l = r);
                  break;
                case "input":
                  Su(e, r), (l = oo(e, r)), he("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = H({}, r, { value: void 0 })),
                    he("invalid", e);
                  break;
                case "textarea":
                  xu(e, r), (l = so(e, r)), he("invalid", e);
                  break;
                default:
                  l = r;
              }
              co(n, l), (d = l);
              for (o in d)
                if (d.hasOwnProperty(o)) {
                  var p = d[o];
                  o === "style"
                    ? Pu(e, p)
                    : o === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && Nu(e, p))
                    : o === "children"
                    ? typeof p == "string"
                      ? (n !== "textarea" || p !== "") && qn(e, p)
                      : typeof p == "number" && qn(e, "" + p)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (f.hasOwnProperty(o)
                        ? p != null && o === "onScroll" && he("scroll", e)
                        : p != null && X(e, o, p, a));
                }
              switch (n) {
                case "input":
                  Mr(e), Eu(e, r, !1);
                  break;
                case "textarea":
                  Mr(e), _u(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ae(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? wn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        wn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ae(t), null;
      case 6:
        if (e && t.stateNode != null) Ba(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = sn(Sr.current)), sn(Et.current), hl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kt] = t),
              (o = r.nodeValue !== n) && ((e = be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    il(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r);
        }
        return Ae(t), null;
      case 13:
        if (
          (me(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && et !== null && t.mode & 1 && !(t.flags & 128))
            $s(), Fn(), (t.flags |= 98560), (o = !1);
          else if (((o = hl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[kt] = t;
            } else
              Fn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ae(t), (o = !1);
          } else dt !== null && (Vi(dt), (dt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ge.current & 1 ? Te === 0 && (Te = 3) : Qi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ae(t),
            null);
      case 4:
        return (
          In(),
          Li(e, t),
          e === null && pr(t.stateNode.containerInfo),
          Ae(t),
          null
        );
      case 10:
        return oi(t.type._context), Ae(t), null;
      case 17:
        return We(t.type) && al(), Ae(t), null;
      case 19:
        if ((me(ge), (o = t.memoizedState), o === null)) return Ae(t), null;
        if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
          if (r) _r(o, !1);
          else {
            if (Te !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = Sl(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      _r(o, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (a = o.alternate),
                      a === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = a.childLanes),
                          (o.lanes = a.lanes),
                          (o.child = a.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = a.memoizedProps),
                          (o.memoizedState = a.memoizedState),
                          (o.updateQueue = a.updateQueue),
                          (o.type = a.type),
                          (e = a.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return pe(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ee() > Vn &&
              ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Sl(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                _r(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !a.alternate &&
                  !ve)
              )
                return Ae(t), null;
            } else
              2 * Ee() - o.renderingStartTime > Vn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = o.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (o.last = a));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ee()),
            (t.sibling = null),
            (n = ge.current),
            pe(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ae(t), null);
      case 22:
      case 23:
        return (
          Wi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? tt & 1073741824 &&
              (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ae(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Id(e, t) {
    switch ((bo(t), t.tag)) {
      case 1:
        return (
          We(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          In(),
          me($e),
          me(Fe),
          di(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ci(t), null;
      case 13:
        if (
          (me(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Fn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return me(ge), null;
      case 4:
        return In(), null;
      case 10:
        return oi(t.type._context), null;
      case 22:
      case 23:
        return Wi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pl = !1,
    Me = !1,
    Ud = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function Bn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ke(e, t, r);
        }
      else n.current = null;
  }
  function zi(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var Ha = !1;
  function Bd(e, t) {
    if (((Wo = Xr), (e = ws()), Ao(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              d = -1,
              p = -1,
              S = 0,
              P = 0,
              L = e,
              N = null;
            t: for (;;) {
              for (
                var I;
                L !== n || (l !== 0 && L.nodeType !== 3) || (d = a + l),
                  L !== o || (r !== 0 && L.nodeType !== 3) || (p = a + r),
                  L.nodeType === 3 && (a += L.nodeValue.length),
                  (I = L.firstChild) !== null;

              )
                (N = L), (L = I);
              for (;;) {
                if (L === e) break t;
                if (
                  (N === n && ++S === l && (d = a),
                  N === o && ++P === r && (p = a),
                  (I = L.nextSibling) !== null)
                )
                  break;
                (L = N), (N = L.parentNode);
              }
              L = I;
            }
            n = d === -1 || p === -1 ? null : { start: d, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Qo = { focusedElem: e, selectionRange: n }, Xr = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var V = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (V !== null) {
                    var $ = V.memoizedProps,
                      xe = V.memoizedState,
                      g = t.stateNode,
                      m = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? $ : pt(t.type, $),
                        xe
                      );
                    g.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1
                    ? (w.textContent = "")
                    : w.nodeType === 9 &&
                      w.documentElement &&
                      w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (D) {
            ke(t, t.return, D);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (V = Ha), (Ha = !1), V;
  }
  function Rr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && zi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ol(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Di(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Va(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Va(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kt],
          delete t[mr],
          delete t[Xo],
          delete t[Ed],
          delete t[xd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function $a(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Wa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $a(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fi(e, t, n), e = e.sibling; e !== null; )
        Fi(e, t, n), (e = e.sibling);
  }
  function ji(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ji(e, t, n), e = e.sibling; e !== null; )
        ji(e, t, n), (e = e.sibling);
  }
  var ze = null,
    ht = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) Qa(e, t, n), (n = n.sibling);
  }
  function Qa(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount($r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Me || Bn(n, t);
      case 6:
        var r = ze,
          l = ht;
        (ze = null),
          qt(e, t, n),
          (ze = r),
          (ht = l),
          ze !== null &&
            (ht
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (ht
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? Jo(e.parentNode, n)
                : e.nodeType === 1 && Jo(e, n),
              lr(e))
            : Jo(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (l = ht),
          (ze = n.stateNode.containerInfo),
          (ht = !0),
          qt(e, t, n),
          (ze = r),
          (ht = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Me &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              a = o.destroy;
            (o = o.tag),
              a !== void 0 && (o & 2 || o & 4) && zi(n, t, a),
              (l = l.next);
          } while (l !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (
          !Me &&
          (Bn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (d) {
            ke(n, t, d);
          }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Me = (r = Me) || n.memoizedState !== null), qt(e, t, n), (Me = r))
          : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function Ka(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ud()),
        t.forEach(function (r) {
          var l = Xd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            a = t,
            d = a;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                (ze = d.stateNode), (ht = !1);
                break e;
              case 3:
                (ze = d.stateNode.containerInfo), (ht = !0);
                break e;
              case 4:
                (ze = d.stateNode.containerInfo), (ht = !0);
                break e;
            }
            d = d.return;
          }
          if (ze === null) throw Error(s(160));
          Qa(o, a, l), (ze = null), (ht = !1);
          var p = l.alternate;
          p !== null && (p.return = null), (l.return = null);
        } catch (S) {
          ke(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) qa(t, e), (t = t.sibling);
  }
  function qa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((mt(t, e), Ct(e), r & 4)) {
          try {
            Rr(3, e, e.return), Ol(3, e);
          } catch ($) {
            ke(e, e.return, $);
          }
          try {
            Rr(5, e, e.return);
          } catch ($) {
            ke(e, e.return, $);
          }
        }
        break;
      case 1:
        mt(t, e), Ct(e), r & 512 && n !== null && Bn(n, n.return);
        break;
      case 5:
        if (
          (mt(t, e),
          Ct(e),
          r & 512 && n !== null && Bn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            qn(l, "");
          } catch ($) {
            ke(e, e.return, $);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            a = n !== null ? n.memoizedProps : o,
            d = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              d === "input" && o.type === "radio" && o.name != null && ku(l, o),
                fo(d, a);
              var S = fo(d, o);
              for (a = 0; a < p.length; a += 2) {
                var P = p[a],
                  L = p[a + 1];
                P === "style"
                  ? Pu(l, L)
                  : P === "dangerouslySetInnerHTML"
                  ? Nu(l, L)
                  : P === "children"
                  ? qn(l, L)
                  : X(l, P, L, S);
              }
              switch (d) {
                case "input":
                  io(l, o);
                  break;
                case "textarea":
                  Cu(l, o);
                  break;
                case "select":
                  var N = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var I = o.value;
                  I != null
                    ? wn(l, !!o.multiple, I, !1)
                    : N !== !!o.multiple &&
                      (o.defaultValue != null
                        ? wn(l, !!o.multiple, o.defaultValue, !0)
                        : wn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[mr] = o;
            } catch ($) {
              ke(e, e.return, $);
            }
        }
        break;
      case 6:
        if ((mt(t, e), Ct(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch ($) {
            ke(e, e.return, $);
          }
        }
        break;
      case 3:
        if (
          (mt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            lr(t.containerInfo);
          } catch ($) {
            ke(e, e.return, $);
          }
        break;
      case 4:
        mt(t, e), Ct(e);
        break;
      case 13:
        mt(t, e),
          Ct(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ii = Ee())),
          r & 4 && Ka(e);
        break;
      case 22:
        if (
          ((P = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Me = (S = Me) || P), mt(t, e), (Me = S)) : mt(t, e),
          Ct(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null),
            (e.stateNode.isHidden = S) && !P && e.mode & 1)
          )
            for (B = e, P = e.child; P !== null; ) {
              for (L = B = P; B !== null; ) {
                switch (((N = B), (I = N.child), N.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Rr(4, N, N.return);
                    break;
                  case 1:
                    Bn(N, N.return);
                    var V = N.stateNode;
                    if (typeof V.componentWillUnmount == "function") {
                      (r = N), (n = N.return);
                      try {
                        (t = r),
                          (V.props = t.memoizedProps),
                          (V.state = t.memoizedState),
                          V.componentWillUnmount();
                      } catch ($) {
                        ke(r, n, $);
                      }
                    }
                    break;
                  case 5:
                    Bn(N, N.return);
                    break;
                  case 22:
                    if (N.memoizedState !== null) {
                      Ya(L);
                      continue;
                    }
                }
                I !== null ? ((I.return = N), (B = I)) : Ya(L);
              }
              P = P.sibling;
            }
          e: for (P = null, L = e; ; ) {
            if (L.tag === 5) {
              if (P === null) {
                P = L;
                try {
                  (l = L.stateNode),
                    S
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((d = L.stateNode),
                        (p = L.memoizedProps.style),
                        (a =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (d.style.display = Tu("display", a)));
                } catch ($) {
                  ke(e, e.return, $);
                }
              }
            } else if (L.tag === 6) {
              if (P === null)
                try {
                  L.stateNode.nodeValue = S ? "" : L.memoizedProps;
                } catch ($) {
                  ke(e, e.return, $);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              P === L && (P = null), (L = L.return);
            }
            P === L && (P = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        mt(t, e), Ct(e), r & 4 && Ka(e);
        break;
      case 21:
        break;
      default:
        mt(t, e), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if ($a(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (qn(l, ""), (r.flags &= -33));
            var o = Wa(e);
            ji(e, o, l);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              d = Wa(e);
            Fi(e, d, a);
            break;
          default:
            throw Error(s(161));
        }
      } catch (p) {
        ke(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hd(e, t, n) {
    (B = e), Ja(e);
  }
  function Ja(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        o = l.child;
      if (l.tag === 22 && r) {
        var a = l.memoizedState !== null || Pl;
        if (!a) {
          var d = l.alternate,
            p = (d !== null && d.memoizedState !== null) || Me;
          d = Pl;
          var S = Me;
          if (((Pl = a), (Me = p) && !S))
            for (B = l; B !== null; )
              (a = B),
                (p = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Ga(l)
                  : p !== null
                  ? ((p.return = a), (B = p))
                  : Ga(l);
          for (; o !== null; ) (B = o), Ja(o), (o = o.sibling);
          (B = l), (Pl = d), (Me = S);
        }
        Xa(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (B = o)) : Xa(e);
    }
  }
  function Xa(e) {
    for (; B !== null; ) {
      var t = B;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Me || Ol(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Me)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : pt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ys(t, o, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ys(t, a, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var S = t.alternate;
                  if (S !== null) {
                    var P = S.memoizedState;
                    if (P !== null) {
                      var L = P.dehydrated;
                      L !== null && lr(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Me || (t.flags & 512 && Di(t));
        } catch (N) {
          ke(t, t.return, N);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Ya(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Ga(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ol(4, t);
            } catch (p) {
              ke(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                ke(t, l, p);
              }
            }
            var o = t.return;
            try {
              Di(t);
            } catch (p) {
              ke(t, o, p);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Di(t);
            } catch (p) {
              ke(t, a, p);
            }
        }
      } catch (p) {
        ke(t, t.return, p);
      }
      if (t === e) {
        B = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        (d.return = t.return), (B = d);
        break;
      }
      B = t.return;
    }
  }
  var Vd = Math.ceil,
    Ll = ee.ReactCurrentDispatcher,
    Ai = ee.ReactCurrentOwner,
    ut = ee.ReactCurrentBatchConfig,
    le = 0,
    Oe = null,
    _e = null,
    De = 0,
    tt = 0,
    Hn = Vt(0),
    Te = 0,
    Nr = null,
    cn = 0,
    zl = 0,
    Mi = 0,
    Tr = null,
    Ke = null,
    Ii = 0,
    Vn = 1 / 0,
    Ft = null,
    Dl = !1,
    Ui = null,
    Jt = null,
    Fl = !1,
    Xt = null,
    jl = 0,
    Pr = 0,
    Bi = null,
    Al = -1,
    Ml = 0;
  function He() {
    return le & 6 ? Ee() : Al !== -1 ? Al : (Al = Ee());
  }
  function Yt(e) {
    return e.mode & 1
      ? le & 2 && De !== 0
        ? De & -De
        : _d.transition !== null
        ? (Ml === 0 && (Ml = Wu()), Ml)
        : ((e = ce),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bu(e.type))),
          e)
      : 1;
  }
  function yt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Bi = null), Error(s(185)));
    bn(e, n, r),
      (!(le & 2) || e !== Oe) &&
        (e === Oe && (!(le & 2) && (zl |= n), Te === 4 && Gt(e, De)),
        qe(e, r),
        n === 1 &&
          le === 0 &&
          !(t.mode & 1) &&
          ((Vn = Ee() + 500), fl && Wt()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    _f(e, t);
    var r = Kr(e, e === Oe ? De : 0);
    if (r === 0)
      n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Hu(n), t === 1))
        e.tag === 0 ? Cd(ba.bind(null, e)) : Is(ba.bind(null, e)),
          Sd(function () {
            !(le & 6) && Wt();
          }),
          (n = null);
      else {
        switch (Qu(r)) {
          case 1:
            n = wo;
            break;
          case 4:
            n = Vu;
            break;
          case 16:
            n = Vr;
            break;
          case 536870912:
            n = $u;
            break;
          default:
            n = Vr;
        }
        n = uc(n, Za.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Za(e, t) {
    if (((Al = -1), (Ml = 0), le & 6)) throw Error(s(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = Kr(e, e === Oe ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
    else {
      t = r;
      var l = le;
      le |= 2;
      var o = tc();
      (Oe !== e || De !== t) && ((Ft = null), (Vn = Ee() + 500), dn(e, t));
      do
        try {
          Qd();
          break;
        } catch (d) {
          ec(e, d);
        }
      while (!0);
      li(),
        (Ll.current = o),
        (le = l),
        _e !== null ? (t = 0) : ((Oe = null), (De = 0), (t = Te));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = So(e)), l !== 0 && ((r = l), (t = Hi(e, l)))),
        t === 1)
      )
        throw ((n = Nr), dn(e, 0), Gt(e, r), qe(e, Ee()), n);
      if (t === 6) Gt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !$d(l) &&
            ((t = Il(e, r)),
            t === 2 && ((o = So(e)), o !== 0 && ((r = o), (t = Hi(e, o)))),
            t === 1))
        )
          throw ((n = Nr), dn(e, 0), Gt(e, r), qe(e, Ee()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            pn(e, Ke, Ft);
            break;
          case 3:
            if (
              (Gt(e, r),
              (r & 130023424) === r && ((t = Ii + 500 - Ee()), 10 < t))
            ) {
              if (Kr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                He(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = qo(pn.bind(null, e, Ke, Ft), t);
              break;
            }
            pn(e, Ke, Ft);
            break;
          case 4:
            if ((Gt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var a = 31 - ct(r);
              (o = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Ee() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Vd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = qo(pn.bind(null, e, Ke, Ft), r);
              break;
            }
            pn(e, Ke, Ft);
            break;
          case 5:
            pn(e, Ke, Ft);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return qe(e, Ee()), e.callbackNode === n ? Za.bind(null, e) : null;
  }
  function Hi(e, t) {
    var n = Tr;
    return (
      e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
      (e = Il(e, t)),
      e !== 2 && ((t = Ke), (Ke = n), t !== null && Vi(t)),
      e
    );
  }
  function Vi(e) {
    Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
  }
  function $d(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!ft(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Gt(e, t) {
    for (
      t &= ~Mi,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ct(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function ba(e) {
    if (le & 6) throw Error(s(327));
    $n();
    var t = Kr(e, 0);
    if (!(t & 1)) return qe(e, Ee()), null;
    var n = Il(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = So(e);
      r !== 0 && ((t = r), (n = Hi(e, r)));
    }
    if (n === 1) throw ((n = Nr), dn(e, 0), Gt(e, t), qe(e, Ee()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      pn(e, Ke, Ft),
      qe(e, Ee()),
      null
    );
  }
  function $i(e, t) {
    var n = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      (le = n), le === 0 && ((Vn = Ee() + 500), fl && Wt());
    }
  }
  function fn(e) {
    Xt !== null && Xt.tag === 0 && !(le & 6) && $n();
    var t = le;
    le |= 1;
    var n = ut.transition,
      r = ce;
    try {
      if (((ut.transition = null), (ce = 1), e)) return e();
    } finally {
      (ce = r), (ut.transition = n), (le = t), !(le & 6) && Wt();
    }
  }
  function Wi() {
    (tt = Hn.current), me(Hn);
  }
  function dn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), wd(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((bo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && al();
            break;
          case 3:
            In(), me($e), me(Fe), di();
            break;
          case 5:
            ci(r);
            break;
          case 4:
            In();
            break;
          case 13:
            me(ge);
            break;
          case 19:
            me(ge);
            break;
          case 10:
            oi(r.type._context);
            break;
          case 22:
          case 23:
            Wi();
        }
        n = n.return;
      }
    if (
      ((Oe = e),
      (_e = e = Zt(e.current, null)),
      (De = tt = t),
      (Te = 0),
      (Nr = null),
      (Mi = zl = cn = 0),
      (Ke = Tr = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var a = o.next;
            (o.next = l), (r.next = a);
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function ec(e, t) {
    do {
      var n = _e;
      try {
        if ((li(), (kl.current = _l), El)) {
          for (var r = we.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          El = !1;
        }
        if (
          ((an = 0),
          (Pe = Ne = we = null),
          (kr = !1),
          (Er = 0),
          (Ai.current = null),
          n === null || n.return === null)
        ) {
          (Te = 1), (Nr = t), (_e = null);
          break;
        }
        e: {
          var o = e,
            a = n.return,
            d = n,
            p = t;
          if (
            ((t = De),
            (d.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var S = p,
              P = d,
              L = P.tag;
            if (!(P.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var N = P.alternate;
              N
                ? ((P.updateQueue = N.updateQueue),
                  (P.memoizedState = N.memoizedState),
                  (P.lanes = N.lanes))
                : ((P.updateQueue = null), (P.memoizedState = null));
            }
            var I = _a(a);
            if (I !== null) {
              (I.flags &= -257),
                Ra(I, a, d, o, t),
                I.mode & 1 && Ca(o, S, t),
                (t = I),
                (p = S);
              var V = t.updateQueue;
              if (V === null) {
                var $ = new Set();
                $.add(p), (t.updateQueue = $);
              } else V.add(p);
              break e;
            } else {
              if (!(t & 1)) {
                Ca(o, S, t), Qi();
                break e;
              }
              p = Error(s(426));
            }
          } else if (ve && d.mode & 1) {
            var xe = _a(a);
            if (xe !== null) {
              !(xe.flags & 65536) && (xe.flags |= 256),
                Ra(xe, a, d, o, t),
                ni(Un(p, d));
              break e;
            }
          }
          (o = p = Un(p, d)),
            Te !== 4 && (Te = 2),
            Tr === null ? (Tr = [o]) : Tr.push(o),
            (o = a);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Ea(o, p, t);
                Xs(o, g);
                break e;
              case 1:
                d = p;
                var m = o.type,
                  w = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (w !== null &&
                      typeof w.componentDidCatch == "function" &&
                      (Jt === null || !Jt.has(w))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var D = xa(o, d, t);
                  Xs(o, D);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        rc(n);
      } catch (W) {
        (t = W), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tc() {
    var e = Ll.current;
    return (Ll.current = _l), e === null ? _l : e;
  }
  function Qi() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
      Oe === null || (!(cn & 268435455) && !(zl & 268435455)) || Gt(Oe, De);
  }
  function Il(e, t) {
    var n = le;
    le |= 2;
    var r = tc();
    (Oe !== e || De !== t) && ((Ft = null), dn(e, t));
    do
      try {
        Wd();
        break;
      } catch (l) {
        ec(e, l);
      }
    while (!0);
    if ((li(), (le = n), (Ll.current = r), _e !== null)) throw Error(s(261));
    return (Oe = null), (De = 0), Te;
  }
  function Wd() {
    for (; _e !== null; ) nc(_e);
  }
  function Qd() {
    for (; _e !== null && !yf(); ) nc(_e);
  }
  function nc(e) {
    var t = ic(e.alternate, e, tt);
    (e.memoizedProps = e.pendingProps),
      t === null ? rc(e) : (_e = t),
      (Ai.current = null);
  }
  function rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Id(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Te = 6), (_e = null);
          return;
        }
      } else if (((n = Md(n, t, tt)), n !== null)) {
        _e = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
  }
  function pn(e, t, n) {
    var r = ce,
      l = ut.transition;
    try {
      (ut.transition = null), (ce = 1), Kd(e, t, n, r);
    } finally {
      (ut.transition = l), (ce = r);
    }
    return null;
  }
  function Kd(e, t, n, r) {
    do $n();
    while (Xt !== null);
    if (le & 6) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Rf(e, o),
      e === Oe && ((_e = Oe = null), (De = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Fl ||
        ((Fl = !0),
        uc(Vr, function () {
          return $n(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = ut.transition), (ut.transition = null);
      var a = ce;
      ce = 1;
      var d = le;
      (le |= 4),
        (Ai.current = null),
        Bd(e, n),
        qa(n, e),
        dd(Qo),
        (Xr = !!Wo),
        (Qo = Wo = null),
        (e.current = n),
        Hd(n),
        vf(),
        (le = d),
        (ce = a),
        (ut.transition = o);
    } else e.current = n;
    if (
      (Fl && ((Fl = !1), (Xt = e), (jl = l)),
      (o = e.pendingLanes),
      o === 0 && (Jt = null),
      Sf(n.stateNode),
      qe(e, Ee()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Dl) throw ((Dl = !1), (e = Ui), (Ui = null), e);
    return (
      jl & 1 && e.tag !== 0 && $n(),
      (o = e.pendingLanes),
      o & 1 ? (e === Bi ? Pr++ : ((Pr = 0), (Bi = e))) : (Pr = 0),
      Wt(),
      null
    );
  }
  function $n() {
    if (Xt !== null) {
      var e = Qu(jl),
        t = ut.transition,
        n = ce;
      try {
        if (((ut.transition = null), (ce = 16 > e ? 16 : e), Xt === null))
          var r = !1;
        else {
          if (((e = Xt), (Xt = null), (jl = 0), le & 6)) throw Error(s(331));
          var l = le;
          for (le |= 4, B = e.current; B !== null; ) {
            var o = B,
              a = o.child;
            if (B.flags & 16) {
              var d = o.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var S = d[p];
                  for (B = S; B !== null; ) {
                    var P = B;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rr(8, P, o);
                    }
                    var L = P.child;
                    if (L !== null) (L.return = P), (B = L);
                    else
                      for (; B !== null; ) {
                        P = B;
                        var N = P.sibling,
                          I = P.return;
                        if ((Va(P), P === S)) {
                          B = null;
                          break;
                        }
                        if (N !== null) {
                          (N.return = I), (B = N);
                          break;
                        }
                        B = I;
                      }
                  }
                }
                var V = o.alternate;
                if (V !== null) {
                  var $ = V.child;
                  if ($ !== null) {
                    V.child = null;
                    do {
                      var xe = $.sibling;
                      ($.sibling = null), ($ = xe);
                    } while ($ !== null);
                  }
                }
                B = o;
              }
            }
            if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (B = a);
            else
              e: for (; B !== null; ) {
                if (((o = B), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(9, o, o.return);
                  }
                var g = o.sibling;
                if (g !== null) {
                  (g.return = o.return), (B = g);
                  break e;
                }
                B = o.return;
              }
          }
          var m = e.current;
          for (B = m; B !== null; ) {
            a = B;
            var w = a.child;
            if (a.subtreeFlags & 2064 && w !== null) (w.return = a), (B = w);
            else
              e: for (a = m; B !== null; ) {
                if (((d = B), d.flags & 2048))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ol(9, d);
                    }
                  } catch (W) {
                    ke(d, d.return, W);
                  }
                if (d === a) {
                  B = null;
                  break e;
                }
                var D = d.sibling;
                if (D !== null) {
                  (D.return = d.return), (B = D);
                  break e;
                }
                B = d.return;
              }
          }
          if (
            ((le = l),
            Wt(),
            St && typeof St.onPostCommitFiberRoot == "function")
          )
            try {
              St.onPostCommitFiberRoot($r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ce = n), (ut.transition = t);
      }
    }
    return !1;
  }
  function lc(e, t, n) {
    (t = Un(n, t)),
      (t = Ea(e, t, 1)),
      (e = Kt(e, t, 1)),
      (t = He()),
      e !== null && (bn(e, 1, t), qe(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) lc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Jt === null || !Jt.has(r)))
          ) {
            (e = Un(n, e)),
              (e = xa(t, e, 1)),
              (t = Kt(t, e, 1)),
              (e = He()),
              t !== null && (bn(t, 1, e), qe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function qd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = He()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Oe === e &&
        (De & n) === n &&
        (Te === 4 || (Te === 3 && (De & 130023424) === De && 500 > Ee() - Ii)
          ? dn(e, 0)
          : (Mi |= n)),
      qe(e, t);
  }
  function oc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
        : (t = 1));
    var n = He();
    (e = Lt(e, t)), e !== null && (bn(e, t, n), qe(e, n));
  }
  function Jd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), oc(e, n);
  }
  function Xd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), oc(e, n);
  }
  var ic;
  ic = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || $e.current) Qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), Ad(e, t, n);
        Qe = !!(e.flags & 131072);
      }
    else (Qe = !1), ve && t.flags & 1048576 && Us(t, pl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Tl(e, t), (e = t.pendingProps);
        var l = Ln(t, Fe.current);
        Mn(t, n), (l = mi(null, t, r, e, l, n));
        var o = yi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              We(r) ? ((o = !0), cl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              si(t),
              (l.updater = Rl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ei(t, r, e, n),
              (t = Ri(null, t, r, !0, o, n)))
            : ((t.tag = 0), ve && o && Zo(t), Be(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Tl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Gd(r)),
            (e = pt(r, e)),
            l)
          ) {
            case 0:
              t = _i(null, t, r, e, n);
              break e;
            case 1:
              t = za(null, t, r, e, n);
              break e;
            case 11:
              t = Na(null, t, r, e, n);
              break e;
            case 14:
              t = Ta(null, t, r, pt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          _i(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          za(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Da(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Js(e, t),
            wl(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Un(Error(s(423)), t)), (t = Fa(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Un(Error(s(424)), t)), (t = Fa(e, t, r, n, l));
              break e;
            } else
              for (
                et = Ht(t.stateNode.containerInfo.firstChild),
                  be = t,
                  ve = !0,
                  dt = null,
                  n = Ks(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Fn(), r === l)) {
              t = Dt(e, t, n);
              break e;
            }
            Be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Gs(t),
          e === null && ti(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (a = l.children),
          Ko(r, l) ? (a = null) : o !== null && Ko(r, o) && (t.flags |= 32),
          La(e, t),
          Be(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && ti(t), null;
      case 13:
        return ja(e, t, n);
      case 4:
        return (
          ai(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jn(t, null, r, n)) : Be(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          Na(e, t, r, l, n)
        );
      case 7:
        return Be(e, t, t.pendingProps, n), t.child;
      case 8:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (a = l.value),
            pe(yl, r._currentValue),
            (r._currentValue = a),
            o !== null)
          )
            if (ft(o.value, a)) {
              if (o.children === l.children && !$e.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var d = o.dependencies;
                if (d !== null) {
                  a = o.child;
                  for (var p = d.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (o.tag === 1) {
                        (p = zt(-1, n & -n)), (p.tag = 2);
                        var S = o.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var P = S.pending;
                          P === null
                            ? (p.next = p)
                            : ((p.next = P.next), (P.next = p)),
                            (S.pending = p);
                        }
                      }
                      (o.lanes |= n),
                        (p = o.alternate),
                        p !== null && (p.lanes |= n),
                        ii(o.return, n, t),
                        (d.lanes |= n);
                      break;
                    }
                    p = p.next;
                  }
                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((a = o.return), a === null)) throw Error(s(341));
                  (a.lanes |= n),
                    (d = a.alternate),
                    d !== null && (d.lanes |= n),
                    ii(a, n, t),
                    (a = o.sibling);
                } else a = o.child;
                if (a !== null) a.return = o;
                else
                  for (a = o; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((o = a.sibling), o !== null)) {
                      (o.return = a.return), (a = o);
                      break;
                    }
                    a = a.return;
                  }
                o = a;
              }
          Be(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Mn(t, n),
          (l = ot(l)),
          (r = r(l)),
          (t.flags |= 1),
          Be(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = pt(r, t.pendingProps)),
          (l = pt(r.type, l)),
          Ta(e, t, r, l, n)
        );
      case 15:
        return Pa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          Tl(e, t),
          (t.tag = 1),
          We(r) ? ((e = !0), cl(t)) : (e = !1),
          Mn(t, n),
          Sa(t, r, l),
          Ei(t, r, l, n),
          Ri(null, t, r, !0, e, n)
        );
      case 19:
        return Ma(e, t, n);
      case 22:
        return Oa(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function uc(e, t) {
    return Bu(e, t);
  }
  function Yd(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function st(e, t, n, r) {
    return new Yd(e, t, n, r);
  }
  function Ki(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Gd(e) {
    if (typeof e == "function") return Ki(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === gt)) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = st(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ul(e, t, n, r, l, o) {
    var a = 2;
    if (((r = e), typeof e == "function")) Ki(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case fe:
          return hn(n.children, l, o, t);
        case Re:
          (a = 8), (l |= 8);
          break;
        case Ue:
          return (
            (e = st(12, n, t, l | 2)), (e.elementType = Ue), (e.lanes = o), e
          );
        case Ye:
          return (e = st(13, n, t, l)), (e.elementType = Ye), (e.lanes = o), e;
        case at:
          return (e = st(19, n, t, l)), (e.elementType = at), (e.lanes = o), e;
        case Se:
          return Bl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Rt:
                a = 10;
                break e;
              case en:
                a = 9;
                break e;
              case gt:
                a = 11;
                break e;
              case wt:
                a = 14;
                break e;
              case Ve:
                (a = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = st(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function hn(e, t, n, r) {
    return (e = st(7, e, r, t)), (e.lanes = n), e;
  }
  function Bl(e, t, n, r) {
    return (
      (e = st(22, e, r, t)),
      (e.elementType = Se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function qi(e, t, n) {
    return (e = st(6, e, null, t)), (e.lanes = n), e;
  }
  function Ji(e, t, n) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Zd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ko(0)),
      (this.expirationTimes = ko(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ko(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Xi(e, t, n, r, l, o, a, d, p) {
    return (
      (e = new Zd(e, t, n, d, p)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = st(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      si(o),
      e
    );
  }
  function bd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: oe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function sc(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
      if (tn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (We(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (We(n)) return As(e, n, t);
    }
    return t;
  }
  function ac(e, t, n, r, l, o, a, d, p) {
    return (
      (e = Xi(n, r, !0, e, l, o, a, d, p)),
      (e.context = sc(null)),
      (n = e.current),
      (r = He()),
      (l = Yt(n)),
      (o = zt(r, l)),
      (o.callback = t ?? null),
      Kt(n, o, l),
      (e.current.lanes = l),
      bn(e, l, r),
      qe(e, r),
      e
    );
  }
  function Hl(e, t, n, r) {
    var l = t.current,
      o = He(),
      a = Yt(l);
    return (
      (n = sc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(o, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Kt(l, t, a)),
      e !== null && (yt(e, l, a, o), gl(e, l, a)),
      a
    );
  }
  function Vl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yi(e, t) {
    cc(e, t), (e = e.alternate) && cc(e, t);
  }
  var fc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gi(e) {
    this._internalRoot = e;
  }
  ($l.prototype.render = Gi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Hl(e, t, null, null);
    }),
    ($l.prototype.unmount = Gi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fn(function () {
            Hl(null, e, null, null);
          }),
            (t[Nt] = null);
        }
      });
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
      It.splice(n, 0, e), n === 0 && Gu(e);
    }
  };
  function Zi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Wl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function dc() {}
  function ep(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var S = Vl(a);
          o.call(S);
        };
      }
      var a = ac(t, r, e, 0, null, !1, !1, "", dc);
      return (
        (e._reactRootContainer = a),
        (e[Nt] = a.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        a
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var S = Vl(p);
        d.call(S);
      };
    }
    var p = Xi(e, 0, !1, null, null, !1, !1, "", dc);
    return (
      (e._reactRootContainer = p),
      (e[Nt] = p.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Hl(t, p, n, r);
      }),
      p
    );
  }
  function Ql(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var p = Vl(a);
          d.call(p);
        };
      }
      Hl(t, a, e, l);
    } else a = ep(n, t, e, l, r);
    return Vl(a);
  }
  (Ku = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zn(t.pendingLanes);
          n !== 0 &&
            (Eo(t, n | 1), qe(t, Ee()), !(le & 6) && ((Vn = Ee() + 500), Wt()));
        }
        break;
      case 13:
        fn(function () {
          var r = Lt(e, 1);
          if (r !== null) {
            var l = He();
            yt(r, e, 1, l);
          }
        }),
          Yi(e, 1);
    }
  }),
    (xo = function (e) {
      if (e.tag === 13) {
        var t = Lt(e, 134217728);
        if (t !== null) {
          var n = He();
          yt(t, e, 134217728, n);
        }
        Yi(e, 134217728);
      }
    }),
    (qu = function (e) {
      if (e.tag === 13) {
        var t = Yt(e),
          n = Lt(e, t);
        if (n !== null) {
          var r = He();
          yt(n, e, t, r);
        }
        Yi(e, t);
      }
    }),
    (Ju = function () {
      return ce;
    }),
    (Xu = function (e, t) {
      var n = ce;
      try {
        return (ce = e), t();
      } finally {
        ce = n;
      }
    }),
    (mo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((io(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = sl(r);
                if (!l) throw Error(s(90));
                wu(r), io(r, l);
              }
            }
          }
          break;
        case "textarea":
          Cu(e, n);
          break;
        case "select":
          (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
      }
    }),
    (Du = $i),
    (Fu = fn);
  var tp = { usingClientEntryPoint: !1, Events: [yr, Pn, sl, Lu, zu, $i] },
    Or = {
      findFiberByHostInstance: nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    np = {
      bundleType: Or.bundleType,
      version: Or.version,
      rendererPackageName: Or.rendererPackageName,
      rendererConfig: Or.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Iu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Or.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber)
      try {
        ($r = Kl.inject(np)), (St = Kl);
      } catch {}
  }
  return (
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp),
    (Je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Zi(t)) throw Error(s(200));
      return bd(e, t, null, n);
    }),
    (Je.createRoot = function (e, t) {
      if (!Zi(e)) throw Error(s(299));
      var n = !1,
        r = "",
        l = fc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Xi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Nt] = t.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        new Gi(t)
      );
    }),
    (Je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = Iu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Je.flushSync = function (e) {
      return fn(e);
    }),
    (Je.hydrate = function (e, t, n) {
      if (!Wl(t)) throw Error(s(200));
      return Ql(null, e, t, !0, n);
    }),
    (Je.hydrateRoot = function (e, t, n) {
      if (!Zi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        a = fc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = ac(t, null, e, 1, n ?? null, l, !1, o, a)),
        (e[Nt] = t.current),
        pr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new $l(t);
    }),
    (Je.render = function (e, t, n) {
      if (!Wl(t)) throw Error(s(200));
      return Ql(null, e, t, !1, n);
    }),
    (Je.unmountComponentAtNode = function (e) {
      if (!Wl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (fn(function () {
            Ql(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Nt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Je.unstable_batchedUpdates = $i),
    (Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Wl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ql(e, t, n, !1, r);
    }),
    (Je.version = "18.3.1-next-f1338f8080-20240426"),
    Je
  );
}
var Sc;
function dp() {
  if (Sc) return tu.exports;
  Sc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (u) {
        console.error(u);
      }
  }
  return i(), (tu.exports = fp()), tu.exports;
}
var kc;
function pp() {
  if (kc) return ql;
  kc = 1;
  var i = dp();
  return (ql.createRoot = i.createRoot), (ql.hydrateRoot = i.hydrateRoot), ql;
}
var hp = pp();
const mp = (i) => {
  const { items: u, groupName: s, itemChangeFunc: c } = i;
  return b.jsx("div", {
    className: "filters",
    children: u.map((f) =>
      b.jsxs(
        "div",
        {
          className: "radio-item",
          children: [
            b.jsx("input", {
              type: "radio",
              id: f.id,
              name: s,
              onChange: () => {
                c(f.id);
              },
            }),
            b.jsx("label", { htmlFor: f.id, children: f.label }),
          ],
        },
        f.id
      )
    ),
  });
};
var Dr = { exports: {} },
  yp = Dr.exports,
  Ec;
function vp() {
  return (
    Ec ||
      ((Ec = 1),
      (function (i, u) {
        (function (s, c) {
          var f = {};
          s.PubSub
            ? ((f = s.PubSub),
              console.warn("PubSub already loaded, using existing version"))
            : ((s.PubSub = f), c(f)),
            i !== void 0 && i.exports && (u = i.exports = f),
            (u.PubSub = f),
            (i.exports = u = f);
        })((typeof window == "object" && window) || yp || lp, function (s) {
          var c = {},
            f = -1,
            h = "*";
          function y(C) {
            var x;
            for (x in C)
              if (Object.prototype.hasOwnProperty.call(C, x)) return !0;
            return !1;
          }
          function E(C) {
            return function () {
              throw C;
            };
          }
          function z(C, x, F) {
            try {
              C(x, F);
            } catch (Q) {
              setTimeout(E(Q), 0);
            }
          }
          function _(C, x, F) {
            C(x, F);
          }
          function R(C, x, F, Q) {
            var X = c[x],
              ee = Q ? _ : z,
              re;
            if (Object.prototype.hasOwnProperty.call(c, x))
              for (re in X)
                Object.prototype.hasOwnProperty.call(X, re) && ee(X[re], C, F);
          }
          function O(C, x, F) {
            return function () {
              var X = String(C),
                ee = X.lastIndexOf(".");
              for (R(C, C, x, F); ee !== -1; )
                (X = X.substr(0, ee)), (ee = X.lastIndexOf(".")), R(C, X, x, F);
              R(C, h, x, F);
            };
          }
          function A(C) {
            var x = String(C),
              F = !!(Object.prototype.hasOwnProperty.call(c, x) && y(c[x]));
            return F;
          }
          function U(C) {
            for (
              var x = String(C), F = A(x) || A(h), Q = x.lastIndexOf(".");
              !F && Q !== -1;

            )
              (x = x.substr(0, Q)), (Q = x.lastIndexOf(".")), (F = A(x));
            return F;
          }
          function j(C, x, F, Q) {
            C = typeof C == "symbol" ? C.toString() : C;
            var X = O(C, x, Q),
              ee = U(C);
            return ee ? (F === !0 ? X() : setTimeout(X, 0), !0) : !1;
          }
          (s.publish = function (C, x) {
            return j(C, x, !1, s.immediateExceptions);
          }),
            (s.publishSync = function (C, x) {
              return j(C, x, !0, s.immediateExceptions);
            }),
            (s.subscribe = function (C, x) {
              if (typeof x != "function") return !1;
              (C = typeof C == "symbol" ? C.toString() : C),
                Object.prototype.hasOwnProperty.call(c, C) || (c[C] = {});
              var F = "uid_" + String(++f);
              return (c[C][F] = x), F;
            }),
            (s.subscribeAll = function (C) {
              return s.subscribe(h, C);
            }),
            (s.subscribeOnce = function (C, x) {
              var F = s.subscribe(C, function () {
                s.unsubscribe(F), x.apply(this, arguments);
              });
              return s;
            }),
            (s.clearAllSubscriptions = function () {
              c = {};
            }),
            (s.clearSubscriptions = function (x) {
              var F;
              for (F in c)
                Object.prototype.hasOwnProperty.call(c, F) &&
                  F.indexOf(x) === 0 &&
                  delete c[F];
            }),
            (s.countSubscriptions = function (x) {
              var F,
                Q,
                X = 0;
              for (F in c)
                if (
                  Object.prototype.hasOwnProperty.call(c, F) &&
                  F.indexOf(x) === 0
                ) {
                  for (Q in c[F]) X++;
                  break;
                }
              return X;
            }),
            (s.getSubscriptions = function (x) {
              var F,
                Q = [];
              for (F in c)
                Object.prototype.hasOwnProperty.call(c, F) &&
                  F.indexOf(x) === 0 &&
                  Q.push(F);
              return Q;
            }),
            (s.unsubscribe = function (C) {
              var x = function (Re) {
                  var Ue;
                  for (Ue in c)
                    if (
                      Object.prototype.hasOwnProperty.call(c, Ue) &&
                      Ue.indexOf(Re) === 0
                    )
                      return !0;
                  return !1;
                },
                F =
                  typeof C == "string" &&
                  (Object.prototype.hasOwnProperty.call(c, C) || x(C)),
                Q = !F && typeof C == "string",
                X = typeof C == "function",
                ee = !1,
                re,
                oe,
                fe;
              if (F) {
                s.clearSubscriptions(C);
                return;
              }
              for (re in c)
                if (Object.prototype.hasOwnProperty.call(c, re)) {
                  if (((oe = c[re]), Q && oe[C])) {
                    delete oe[C], (ee = C);
                    break;
                  }
                  if (X)
                    for (fe in oe)
                      Object.prototype.hasOwnProperty.call(oe, fe) &&
                        oe[fe] === C &&
                        (delete oe[fe], (ee = !0));
                }
              return ee;
            });
        });
      })(Dr, Dr.exports)),
    Dr.exports
  );
}
var gp = vp();
const Mc = op(gp);
function wp() {
  const i = {
    items: [
      { id: "CN", label: "China" },
      { id: "US", label: "USA" },
      { id: "JP", label: "Japan" },
      { id: "CA", label: "Canada" },
      { id: "GB", label: "UK" },
    ],
    groupName: "Country",
    itemChangeFunc: (u) => {
      Mc.publish("country", u);
    },
  };
  return b.jsxs("div", {
    className: "controller",
    children: [b.jsx("span", { children: "2025" }), b.jsx(mp, { ...i })],
  });
}
const Sp = (i) => {
  const { year: u, month: s, holidays: c, country: f } = i,
    [h, y] = mn.useState({});
  let E = {},
    z = [];
  mn.useEffect(() => {
    (z = Object.keys(c)), R(u, s);
  }, [c]);
  const _ = (O, A) => new Date(O, A, 0).getDate(),
    R = (O, A) => {
      let U = new Date();
      U.setFullYear(O), U.setMonth(A, 1);
      const j = U.getDay(),
        C = _(O, A + 1);
      U.setDate(U.getDate() - j - 1);
      let x = "";
      for (let F = 0; F < 37; F++) {
        let Q = {
          whichMonth: "",
          data_ymd: "",
          current: new Date(),
          rest: !1,
          weekend: !1,
          work: !1,
          desc: "",
        };
        if ((U.setDate(U.getDate() + 1), F < j)) x = "preMonth";
        else if (F > j - 1 && F < C + j) x = "currentMonth";
        else break;
        (Q.whichMonth = x),
          (Q.data_ymd =
            U.getMonth() + 1 + "/" + U.getDate() + "/" + U.getFullYear()),
          Q.current.setFullYear(U.getFullYear()),
          Q.current.setMonth(U.getMonth()),
          Q.current.setDate(U.getDate()),
          (Q.weekend = Q.current.getDay() === 6 || Q.current.getDay() === 0),
          (E[Q.data_ymd] = Q);
      }
      for (const F of z)
        E[F] &&
          ((E[F].rest = c[F].type === "holiday"),
          (E[F].work = c[F].type !== "holiday"),
          (E[F].desc = c[F].type === "holiday" ? c[F].note.split(",")[0] : ""));
      y(E);
    };
  return b.jsxs("div", {
    className: "container",
    children: [
      b.jsx("div", {
        className: "date-items header",
        children: b.jsxs("div", {
          className: "week",
          children: [
            b.jsx("div", { className: "weekend", children: "Sun" }),
            b.jsx("div", { children: "Mon" }),
            b.jsx("div", { children: "Tue" }),
            b.jsx("div", { children: "Wed" }),
            b.jsx("div", { children: "Thu" }),
            b.jsx("div", { children: "Fri" }),
            b.jsx("div", { className: "weekend", children: "Sat" }),
          ],
        }),
      }),
      b.jsx("div", {
        className: "date-items body " + f,
        children: b.jsx("div", {
          className: "grid-container",
          role: "grid",
          children: Object.keys(h).map((O, A) => {
            let U = h[O];
            return b.jsxs(
              "a",
              {
                href: "#",
                onClick: (j) => j.preventDefault(),
                role: "cell",
                "data-ymd": U.data_ymd,
                "data-index": A,
                className: U.rest
                  ? "rest " + U.whichMonth
                  : U.work
                  ? "work " + U.whichMonth
                  : U.weekend
                  ? "weekend " + U.whichMonth
                  : U.whichMonth,
                children: [
                  b.jsx("span", {
                    className: "sr-only",
                    children: U.current.toDateString(),
                  }),
                  b.jsx("span", {
                    "aria-hidden": "true",
                    className: "disDate",
                    children:
                      U.current.toDateString() !== new Date().toDateString()
                        ? U.current.getDate()
                        : "Today",
                  }),
                  b.jsx("span", {
                    className: "desc",
                    title: U.desc,
                    children: U.desc,
                  }),
                  b.jsx("span", { className: "patch", children: "补班" }),
                ],
              },
              A
            );
          }),
        }),
      }),
    ],
  });
};
function Ic(i, u) {
  return function () {
    return i.apply(u, arguments);
  };
}
const { toString: kp } = Object.prototype,
  { getPrototypeOf: mu } = Object,
  bl = ((i) => (u) => {
    const s = kp.call(u);
    return i[s] || (i[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  vt = (i) => ((i = i.toLowerCase()), (u) => bl(u) === i),
  eo = (i) => (u) => typeof u === i,
  { isArray: Wn } = Array,
  Fr = eo("undefined");
function Ep(i) {
  return (
    i !== null &&
    !Fr(i) &&
    i.constructor !== null &&
    !Fr(i.constructor) &&
    nt(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const Uc = vt("ArrayBuffer");
function xp(i) {
  let u;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (u = ArrayBuffer.isView(i))
      : (u = i && i.buffer && Uc(i.buffer)),
    u
  );
}
const Cp = eo("string"),
  nt = eo("function"),
  Bc = eo("number"),
  to = (i) => i !== null && typeof i == "object",
  _p = (i) => i === !0 || i === !1,
  Jl = (i) => {
    if (bl(i) !== "object") return !1;
    const u = mu(i);
    return (
      (u === null ||
        u === Object.prototype ||
        Object.getPrototypeOf(u) === null) &&
      !(Symbol.toStringTag in i) &&
      !(Symbol.iterator in i)
    );
  },
  Rp = vt("Date"),
  Np = vt("File"),
  Tp = vt("Blob"),
  Pp = vt("FileList"),
  Op = (i) => to(i) && nt(i.pipe),
  Lp = (i) => {
    let u;
    return (
      i &&
      ((typeof FormData == "function" && i instanceof FormData) ||
        (nt(i.append) &&
          ((u = bl(i)) === "formdata" ||
            (u === "object" &&
              nt(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  zp = vt("URLSearchParams"),
  [Dp, Fp, jp, Ap] = ["ReadableStream", "Request", "Response", "Headers"].map(
    vt
  ),
  Mp = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function jr(i, u, { allOwnKeys: s = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let c, f;
  if ((typeof i != "object" && (i = [i]), Wn(i)))
    for (c = 0, f = i.length; c < f; c++) u.call(null, i[c], c, i);
  else {
    const h = s ? Object.getOwnPropertyNames(i) : Object.keys(i),
      y = h.length;
    let E;
    for (c = 0; c < y; c++) (E = h[c]), u.call(null, i[E], E, i);
  }
}
function Hc(i, u) {
  u = u.toLowerCase();
  const s = Object.keys(i);
  let c = s.length,
    f;
  for (; c-- > 0; ) if (((f = s[c]), u === f.toLowerCase())) return f;
  return null;
}
const yn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Vc = (i) => !Fr(i) && i !== yn;
function su() {
  const { caseless: i } = (Vc(this) && this) || {},
    u = {},
    s = (c, f) => {
      const h = (i && Hc(u, f)) || f;
      Jl(u[h]) && Jl(c)
        ? (u[h] = su(u[h], c))
        : Jl(c)
        ? (u[h] = su({}, c))
        : Wn(c)
        ? (u[h] = c.slice())
        : (u[h] = c);
    };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && jr(arguments[c], s);
  return u;
}
const Ip = (i, u, s, { allOwnKeys: c } = {}) => (
    jr(
      u,
      (f, h) => {
        s && nt(f) ? (i[h] = Ic(f, s)) : (i[h] = f);
      },
      { allOwnKeys: c }
    ),
    i
  ),
  Up = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  Bp = (i, u, s, c) => {
    (i.prototype = Object.create(u.prototype, c)),
      (i.prototype.constructor = i),
      Object.defineProperty(i, "super", { value: u.prototype }),
      s && Object.assign(i.prototype, s);
  },
  Hp = (i, u, s, c) => {
    let f, h, y;
    const E = {};
    if (((u = u || {}), i == null)) return u;
    do {
      for (f = Object.getOwnPropertyNames(i), h = f.length; h-- > 0; )
        (y = f[h]), (!c || c(y, i, u)) && !E[y] && ((u[y] = i[y]), (E[y] = !0));
      i = s !== !1 && mu(i);
    } while (i && (!s || s(i, u)) && i !== Object.prototype);
    return u;
  },
  Vp = (i, u, s) => {
    (i = String(i)),
      (s === void 0 || s > i.length) && (s = i.length),
      (s -= u.length);
    const c = i.indexOf(u, s);
    return c !== -1 && c === s;
  },
  $p = (i) => {
    if (!i) return null;
    if (Wn(i)) return i;
    let u = i.length;
    if (!Bc(u)) return null;
    const s = new Array(u);
    for (; u-- > 0; ) s[u] = i[u];
    return s;
  },
  Wp = (
    (i) => (u) =>
      i && u instanceof i
  )(typeof Uint8Array < "u" && mu(Uint8Array)),
  Qp = (i, u) => {
    const c = (i && i[Symbol.iterator]).call(i);
    let f;
    for (; (f = c.next()) && !f.done; ) {
      const h = f.value;
      u.call(i, h[0], h[1]);
    }
  },
  Kp = (i, u) => {
    let s;
    const c = [];
    for (; (s = i.exec(u)) !== null; ) c.push(s);
    return c;
  },
  qp = vt("HTMLFormElement"),
  Jp = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, c, f) {
      return c.toUpperCase() + f;
    }),
  xc = (
    ({ hasOwnProperty: i }) =>
    (u, s) =>
      i.call(u, s)
  )(Object.prototype),
  Xp = vt("RegExp"),
  $c = (i, u) => {
    const s = Object.getOwnPropertyDescriptors(i),
      c = {};
    jr(s, (f, h) => {
      let y;
      (y = u(f, h, i)) !== !1 && (c[h] = y || f);
    }),
      Object.defineProperties(i, c);
  },
  Yp = (i) => {
    $c(i, (u, s) => {
      if (nt(i) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const c = i[s];
      if (nt(c)) {
        if (((u.enumerable = !1), "writable" in u)) {
          u.writable = !1;
          return;
        }
        u.set ||
          (u.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  Gp = (i, u) => {
    const s = {},
      c = (f) => {
        f.forEach((h) => {
          s[h] = !0;
        });
      };
    return Wn(i) ? c(i) : c(String(i).split(u)), s;
  },
  Zp = () => {},
  bp = (i, u) => (i != null && Number.isFinite((i = +i)) ? i : u),
  lu = "abcdefghijklmnopqrstuvwxyz",
  Cc = "0123456789",
  Wc = { DIGIT: Cc, ALPHA: lu, ALPHA_DIGIT: lu + lu.toUpperCase() + Cc },
  eh = (i = 16, u = Wc.ALPHA_DIGIT) => {
    let s = "";
    const { length: c } = u;
    for (; i--; ) s += u[(Math.random() * c) | 0];
    return s;
  };
function th(i) {
  return !!(
    i &&
    nt(i.append) &&
    i[Symbol.toStringTag] === "FormData" &&
    i[Symbol.iterator]
  );
}
const nh = (i) => {
    const u = new Array(10),
      s = (c, f) => {
        if (to(c)) {
          if (u.indexOf(c) >= 0) return;
          if (!("toJSON" in c)) {
            u[f] = c;
            const h = Wn(c) ? [] : {};
            return (
              jr(c, (y, E) => {
                const z = s(y, f + 1);
                !Fr(z) && (h[E] = z);
              }),
              (u[f] = void 0),
              h
            );
          }
        }
        return c;
      };
    return s(i, 0);
  },
  rh = vt("AsyncFunction"),
  lh = (i) => i && (to(i) || nt(i)) && nt(i.then) && nt(i.catch),
  Qc = ((i, u) =>
    i
      ? setImmediate
      : u
      ? ((s, c) => (
          yn.addEventListener(
            "message",
            ({ source: f, data: h }) => {
              f === yn && h === s && c.length && c.shift()();
            },
            !1
          ),
          (f) => {
            c.push(f), yn.postMessage(s, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (s) => setTimeout(s))(
    typeof setImmediate == "function",
    nt(yn.postMessage)
  ),
  oh =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(yn)
      : (typeof process < "u" && process.nextTick) || Qc,
  k = {
    isArray: Wn,
    isArrayBuffer: Uc,
    isBuffer: Ep,
    isFormData: Lp,
    isArrayBufferView: xp,
    isString: Cp,
    isNumber: Bc,
    isBoolean: _p,
    isObject: to,
    isPlainObject: Jl,
    isReadableStream: Dp,
    isRequest: Fp,
    isResponse: jp,
    isHeaders: Ap,
    isUndefined: Fr,
    isDate: Rp,
    isFile: Np,
    isBlob: Tp,
    isRegExp: Xp,
    isFunction: nt,
    isStream: Op,
    isURLSearchParams: zp,
    isTypedArray: Wp,
    isFileList: Pp,
    forEach: jr,
    merge: su,
    extend: Ip,
    trim: Mp,
    stripBOM: Up,
    inherits: Bp,
    toFlatObject: Hp,
    kindOf: bl,
    kindOfTest: vt,
    endsWith: Vp,
    toArray: $p,
    forEachEntry: Qp,
    matchAll: Kp,
    isHTMLForm: qp,
    hasOwnProperty: xc,
    hasOwnProp: xc,
    reduceDescriptors: $c,
    freezeMethods: Yp,
    toObjectSet: Gp,
    toCamelCase: Jp,
    noop: Zp,
    toFiniteNumber: bp,
    findKey: Hc,
    global: yn,
    isContextDefined: Vc,
    ALPHABET: Wc,
    generateString: eh,
    isSpecCompliantForm: th,
    toJSONObject: nh,
    isAsyncFn: rh,
    isThenable: lh,
    setImmediate: Qc,
    asap: oh,
  };
function G(i, u, s, c, f) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = i),
    (this.name = "AxiosError"),
    u && (this.code = u),
    s && (this.config = s),
    c && (this.request = c),
    f && ((this.response = f), (this.status = f.status ? f.status : null));
}
k.inherits(G, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Kc = G.prototype,
  qc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((i) => {
  qc[i] = { value: i };
});
Object.defineProperties(G, qc);
Object.defineProperty(Kc, "isAxiosError", { value: !0 });
G.from = (i, u, s, c, f, h) => {
  const y = Object.create(Kc);
  return (
    k.toFlatObject(
      i,
      y,
      function (z) {
        return z !== Error.prototype;
      },
      (E) => E !== "isAxiosError"
    ),
    G.call(y, i.message, u, s, c, f),
    (y.cause = i),
    (y.name = i.name),
    h && Object.assign(y, h),
    y
  );
};
const ih = null;
function au(i) {
  return k.isPlainObject(i) || k.isArray(i);
}
function Jc(i) {
  return k.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function _c(i, u, s) {
  return i
    ? i
        .concat(u)
        .map(function (f, h) {
          return (f = Jc(f)), !s && h ? "[" + f + "]" : f;
        })
        .join(s ? "." : "")
    : u;
}
function uh(i) {
  return k.isArray(i) && !i.some(au);
}
const sh = k.toFlatObject(k, {}, null, function (u) {
  return /^is[A-Z]/.test(u);
});
function no(i, u, s) {
  if (!k.isObject(i)) throw new TypeError("target must be an object");
  (u = u || new FormData()),
    (s = k.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (C, x) {
        return !k.isUndefined(x[C]);
      }
    ));
  const c = s.metaTokens,
    f = s.visitor || R,
    h = s.dots,
    y = s.indexes,
    z = (s.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(u);
  if (!k.isFunction(f)) throw new TypeError("visitor must be a function");
  function _(j) {
    if (j === null) return "";
    if (k.isDate(j)) return j.toISOString();
    if (!z && k.isBlob(j))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(j) || k.isTypedArray(j)
      ? z && typeof Blob == "function"
        ? new Blob([j])
        : Buffer.from(j)
      : j;
  }
  function R(j, C, x) {
    let F = j;
    if (j && !x && typeof j == "object") {
      if (k.endsWith(C, "{}"))
        (C = c ? C : C.slice(0, -2)), (j = JSON.stringify(j));
      else if (
        (k.isArray(j) && uh(j)) ||
        ((k.isFileList(j) || k.endsWith(C, "[]")) && (F = k.toArray(j)))
      )
        return (
          (C = Jc(C)),
          F.forEach(function (X, ee) {
            !(k.isUndefined(X) || X === null) &&
              u.append(
                y === !0 ? _c([C], ee, h) : y === null ? C : C + "[]",
                _(X)
              );
          }),
          !1
        );
    }
    return au(j) ? !0 : (u.append(_c(x, C, h), _(j)), !1);
  }
  const O = [],
    A = Object.assign(sh, {
      defaultVisitor: R,
      convertValue: _,
      isVisitable: au,
    });
  function U(j, C) {
    if (!k.isUndefined(j)) {
      if (O.indexOf(j) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      O.push(j),
        k.forEach(j, function (F, Q) {
          (!(k.isUndefined(F) || F === null) &&
            f.call(u, F, k.isString(Q) ? Q.trim() : Q, C, A)) === !0 &&
            U(F, C ? C.concat(Q) : [Q]);
        }),
        O.pop();
    }
  }
  if (!k.isObject(i)) throw new TypeError("data must be an object");
  return U(i), u;
}
function Rc(i) {
  const u = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (c) {
    return u[c];
  });
}
function yu(i, u) {
  (this._pairs = []), i && no(i, this, u);
}
const Xc = yu.prototype;
Xc.append = function (u, s) {
  this._pairs.push([u, s]);
};
Xc.toString = function (u) {
  const s = u
    ? function (c) {
        return u.call(this, c, Rc);
      }
    : Rc;
  return this._pairs
    .map(function (f) {
      return s(f[0]) + "=" + s(f[1]);
    }, "")
    .join("&");
};
function ah(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Yc(i, u, s) {
  if (!u) return i;
  const c = (s && s.encode) || ah;
  k.isFunction(s) && (s = { serialize: s });
  const f = s && s.serialize;
  let h;
  if (
    (f
      ? (h = f(u, s))
      : (h = k.isURLSearchParams(u) ? u.toString() : new yu(u, s).toString(c)),
    h)
  ) {
    const y = i.indexOf("#");
    y !== -1 && (i = i.slice(0, y)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + h);
  }
  return i;
}
class Nc {
  constructor() {
    this.handlers = [];
  }
  use(u, s, c) {
    return (
      this.handlers.push({
        fulfilled: u,
        rejected: s,
        synchronous: c ? c.synchronous : !1,
        runWhen: c ? c.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(u) {
    this.handlers[u] && (this.handlers[u] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(u) {
    k.forEach(this.handlers, function (c) {
      c !== null && u(c);
    });
  }
}
const Gc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ch = typeof URLSearchParams < "u" ? URLSearchParams : yu,
  fh = typeof FormData < "u" ? FormData : null,
  dh = typeof Blob < "u" ? Blob : null,
  ph = {
    isBrowser: !0,
    classes: { URLSearchParams: ch, FormData: fh, Blob: dh },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  vu = typeof window < "u" && typeof document < "u",
  cu = (typeof navigator == "object" && navigator) || void 0,
  hh =
    vu &&
    (!cu || ["ReactNative", "NativeScript", "NS"].indexOf(cu.product) < 0),
  mh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  yh = (vu && window.location.href) || "http://localhost",
  vh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: vu,
        hasStandardBrowserEnv: hh,
        hasStandardBrowserWebWorkerEnv: mh,
        navigator: cu,
        origin: yh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ie = { ...vh, ...ph };
function gh(i, u) {
  return no(
    i,
    new Ie.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (s, c, f, h) {
          return Ie.isNode && k.isBuffer(s)
            ? (this.append(c, s.toString("base64")), !1)
            : h.defaultVisitor.apply(this, arguments);
        },
      },
      u
    )
  );
}
function wh(i) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, i)
    .map((u) => (u[0] === "[]" ? "" : u[1] || u[0]));
}
function Sh(i) {
  const u = {},
    s = Object.keys(i);
  let c;
  const f = s.length;
  let h;
  for (c = 0; c < f; c++) (h = s[c]), (u[h] = i[h]);
  return u;
}
function Zc(i) {
  function u(s, c, f, h) {
    let y = s[h++];
    if (y === "__proto__") return !0;
    const E = Number.isFinite(+y),
      z = h >= s.length;
    return (
      (y = !y && k.isArray(f) ? f.length : y),
      z
        ? (k.hasOwnProp(f, y) ? (f[y] = [f[y], c]) : (f[y] = c), !E)
        : ((!f[y] || !k.isObject(f[y])) && (f[y] = []),
          u(s, c, f[y], h) && k.isArray(f[y]) && (f[y] = Sh(f[y])),
          !E)
    );
  }
  if (k.isFormData(i) && k.isFunction(i.entries)) {
    const s = {};
    return (
      k.forEachEntry(i, (c, f) => {
        u(wh(c), f, s, 0);
      }),
      s
    );
  }
  return null;
}
function kh(i, u, s) {
  if (k.isString(i))
    try {
      return (u || JSON.parse)(i), k.trim(i);
    } catch (c) {
      if (c.name !== "SyntaxError") throw c;
    }
  return (0, JSON.stringify)(i);
}
const Ar = {
  transitional: Gc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (u, s) {
      const c = s.getContentType() || "",
        f = c.indexOf("application/json") > -1,
        h = k.isObject(u);
      if ((h && k.isHTMLForm(u) && (u = new FormData(u)), k.isFormData(u)))
        return f ? JSON.stringify(Zc(u)) : u;
      if (
        k.isArrayBuffer(u) ||
        k.isBuffer(u) ||
        k.isStream(u) ||
        k.isFile(u) ||
        k.isBlob(u) ||
        k.isReadableStream(u)
      )
        return u;
      if (k.isArrayBufferView(u)) return u.buffer;
      if (k.isURLSearchParams(u))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          u.toString()
        );
      let E;
      if (h) {
        if (c.indexOf("application/x-www-form-urlencoded") > -1)
          return gh(u, this.formSerializer).toString();
        if ((E = k.isFileList(u)) || c.indexOf("multipart/form-data") > -1) {
          const z = this.env && this.env.FormData;
          return no(
            E ? { "files[]": u } : u,
            z && new z(),
            this.formSerializer
          );
        }
      }
      return h || f ? (s.setContentType("application/json", !1), kh(u)) : u;
    },
  ],
  transformResponse: [
    function (u) {
      const s = this.transitional || Ar.transitional,
        c = s && s.forcedJSONParsing,
        f = this.responseType === "json";
      if (k.isResponse(u) || k.isReadableStream(u)) return u;
      if (u && k.isString(u) && ((c && !this.responseType) || f)) {
        const y = !(s && s.silentJSONParsing) && f;
        try {
          return JSON.parse(u);
        } catch (E) {
          if (y)
            throw E.name === "SyntaxError"
              ? G.from(E, G.ERR_BAD_RESPONSE, this, null, this.response)
              : E;
        }
      }
      return u;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ie.classes.FormData, Blob: Ie.classes.Blob },
  validateStatus: function (u) {
    return u >= 200 && u < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  Ar.headers[i] = {};
});
const Eh = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  xh = (i) => {
    const u = {};
    let s, c, f;
    return (
      i &&
        i
          .split(
            `
`
          )
          .forEach(function (y) {
            (f = y.indexOf(":")),
              (s = y.substring(0, f).trim().toLowerCase()),
              (c = y.substring(f + 1).trim()),
              !(!s || (u[s] && Eh[s])) &&
                (s === "set-cookie"
                  ? u[s]
                    ? u[s].push(c)
                    : (u[s] = [c])
                  : (u[s] = u[s] ? u[s] + ", " + c : c));
          }),
      u
    );
  },
  Tc = Symbol("internals");
function zr(i) {
  return i && String(i).trim().toLowerCase();
}
function Xl(i) {
  return i === !1 || i == null ? i : k.isArray(i) ? i.map(Xl) : String(i);
}
function Ch(i) {
  const u = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; (c = s.exec(i)); ) u[c[1]] = c[2];
  return u;
}
const _h = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function ou(i, u, s, c, f) {
  if (k.isFunction(c)) return c.call(this, u, s);
  if ((f && (u = s), !!k.isString(u))) {
    if (k.isString(c)) return u.indexOf(c) !== -1;
    if (k.isRegExp(c)) return c.test(u);
  }
}
function Rh(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (u, s, c) => s.toUpperCase() + c);
}
function Nh(i, u) {
  const s = k.toCamelCase(" " + u);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(i, c + s, {
      value: function (f, h, y) {
        return this[c].call(this, u, f, h, y);
      },
      configurable: !0,
    });
  });
}
class Xe {
  constructor(u) {
    u && this.set(u);
  }
  set(u, s, c) {
    const f = this;
    function h(E, z, _) {
      const R = zr(z);
      if (!R) throw new Error("header name must be a non-empty string");
      const O = k.findKey(f, R);
      (!O || f[O] === void 0 || _ === !0 || (_ === void 0 && f[O] !== !1)) &&
        (f[O || z] = Xl(E));
    }
    const y = (E, z) => k.forEach(E, (_, R) => h(_, R, z));
    if (k.isPlainObject(u) || u instanceof this.constructor) y(u, s);
    else if (k.isString(u) && (u = u.trim()) && !_h(u)) y(xh(u), s);
    else if (k.isHeaders(u)) for (const [E, z] of u.entries()) h(z, E, c);
    else u != null && h(s, u, c);
    return this;
  }
  get(u, s) {
    if (((u = zr(u)), u)) {
      const c = k.findKey(this, u);
      if (c) {
        const f = this[c];
        if (!s) return f;
        if (s === !0) return Ch(f);
        if (k.isFunction(s)) return s.call(this, f, c);
        if (k.isRegExp(s)) return s.exec(f);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(u, s) {
    if (((u = zr(u)), u)) {
      const c = k.findKey(this, u);
      return !!(c && this[c] !== void 0 && (!s || ou(this, this[c], c, s)));
    }
    return !1;
  }
  delete(u, s) {
    const c = this;
    let f = !1;
    function h(y) {
      if (((y = zr(y)), y)) {
        const E = k.findKey(c, y);
        E && (!s || ou(c, c[E], E, s)) && (delete c[E], (f = !0));
      }
    }
    return k.isArray(u) ? u.forEach(h) : h(u), f;
  }
  clear(u) {
    const s = Object.keys(this);
    let c = s.length,
      f = !1;
    for (; c--; ) {
      const h = s[c];
      (!u || ou(this, this[h], h, u, !0)) && (delete this[h], (f = !0));
    }
    return f;
  }
  normalize(u) {
    const s = this,
      c = {};
    return (
      k.forEach(this, (f, h) => {
        const y = k.findKey(c, h);
        if (y) {
          (s[y] = Xl(f)), delete s[h];
          return;
        }
        const E = u ? Rh(h) : String(h).trim();
        E !== h && delete s[h], (s[E] = Xl(f)), (c[E] = !0);
      }),
      this
    );
  }
  concat(...u) {
    return this.constructor.concat(this, ...u);
  }
  toJSON(u) {
    const s = Object.create(null);
    return (
      k.forEach(this, (c, f) => {
        c != null && c !== !1 && (s[f] = u && k.isArray(c) ? c.join(", ") : c);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([u, s]) => u + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(u) {
    return u instanceof this ? u : new this(u);
  }
  static concat(u, ...s) {
    const c = new this(u);
    return s.forEach((f) => c.set(f)), c;
  }
  static accessor(u) {
    const c = (this[Tc] = this[Tc] = { accessors: {} }).accessors,
      f = this.prototype;
    function h(y) {
      const E = zr(y);
      c[E] || (Nh(f, y), (c[E] = !0));
    }
    return k.isArray(u) ? u.forEach(h) : h(u), this;
  }
}
Xe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(Xe.prototype, ({ value: i }, u) => {
  let s = u[0].toUpperCase() + u.slice(1);
  return {
    get: () => i,
    set(c) {
      this[s] = c;
    },
  };
});
k.freezeMethods(Xe);
function iu(i, u) {
  const s = this || Ar,
    c = u || s,
    f = Xe.from(c.headers);
  let h = c.data;
  return (
    k.forEach(i, function (E) {
      h = E.call(s, h, f.normalize(), u ? u.status : void 0);
    }),
    f.normalize(),
    h
  );
}
function bc(i) {
  return !!(i && i.__CANCEL__);
}
function Qn(i, u, s) {
  G.call(this, i ?? "canceled", G.ERR_CANCELED, u, s),
    (this.name = "CanceledError");
}
k.inherits(Qn, G, { __CANCEL__: !0 });
function ef(i, u, s) {
  const c = s.config.validateStatus;
  !s.status || !c || c(s.status)
    ? i(s)
    : u(
        new G(
          "Request failed with status code " + s.status,
          [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s
        )
      );
}
function Th(i) {
  const u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (u && u[1]) || "";
}
function Ph(i, u) {
  i = i || 10;
  const s = new Array(i),
    c = new Array(i);
  let f = 0,
    h = 0,
    y;
  return (
    (u = u !== void 0 ? u : 1e3),
    function (z) {
      const _ = Date.now(),
        R = c[h];
      y || (y = _), (s[f] = z), (c[f] = _);
      let O = h,
        A = 0;
      for (; O !== f; ) (A += s[O++]), (O = O % i);
      if (((f = (f + 1) % i), f === h && (h = (h + 1) % i), _ - y < u)) return;
      const U = R && _ - R;
      return U ? Math.round((A * 1e3) / U) : void 0;
    }
  );
}
function Oh(i, u) {
  let s = 0,
    c = 1e3 / u,
    f,
    h;
  const y = (_, R = Date.now()) => {
    (s = R), (f = null), h && (clearTimeout(h), (h = null)), i.apply(null, _);
  };
  return [
    (..._) => {
      const R = Date.now(),
        O = R - s;
      O >= c
        ? y(_, R)
        : ((f = _),
          h ||
            (h = setTimeout(() => {
              (h = null), y(f);
            }, c - O)));
    },
    () => f && y(f),
  ];
}
const Gl = (i, u, s = 3) => {
    let c = 0;
    const f = Ph(50, 250);
    return Oh((h) => {
      const y = h.loaded,
        E = h.lengthComputable ? h.total : void 0,
        z = y - c,
        _ = f(z),
        R = y <= E;
      c = y;
      const O = {
        loaded: y,
        total: E,
        progress: E ? y / E : void 0,
        bytes: z,
        rate: _ || void 0,
        estimated: _ && E && R ? (E - y) / _ : void 0,
        event: h,
        lengthComputable: E != null,
        [u ? "download" : "upload"]: !0,
      };
      i(O);
    }, s);
  },
  Pc = (i, u) => {
    const s = i != null;
    return [(c) => u[0]({ lengthComputable: s, total: i, loaded: c }), u[1]];
  },
  Oc =
    (i) =>
    (...u) =>
      k.asap(() => i(...u)),
  Lh = Ie.hasStandardBrowserEnv
    ? ((i, u) => (s) => (
        (s = new URL(s, Ie.origin)),
        i.protocol === s.protocol &&
          i.host === s.host &&
          (u || i.port === s.port)
      ))(
        new URL(Ie.origin),
        Ie.navigator && /(msie|trident)/i.test(Ie.navigator.userAgent)
      )
    : () => !0,
  zh = Ie.hasStandardBrowserEnv
    ? {
        write(i, u, s, c, f, h) {
          const y = [i + "=" + encodeURIComponent(u)];
          k.isNumber(s) && y.push("expires=" + new Date(s).toGMTString()),
            k.isString(c) && y.push("path=" + c),
            k.isString(f) && y.push("domain=" + f),
            h === !0 && y.push("secure"),
            (document.cookie = y.join("; "));
        },
        read(i) {
          const u = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return u ? decodeURIComponent(u[3]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Dh(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Fh(i, u) {
  return u ? i.replace(/\/?\/$/, "") + "/" + u.replace(/^\/+/, "") : i;
}
function tf(i, u) {
  return i && !Dh(u) ? Fh(i, u) : u;
}
const Lc = (i) => (i instanceof Xe ? { ...i } : i);
function gn(i, u) {
  u = u || {};
  const s = {};
  function c(_, R, O, A) {
    return k.isPlainObject(_) && k.isPlainObject(R)
      ? k.merge.call({ caseless: A }, _, R)
      : k.isPlainObject(R)
      ? k.merge({}, R)
      : k.isArray(R)
      ? R.slice()
      : R;
  }
  function f(_, R, O, A) {
    if (k.isUndefined(R)) {
      if (!k.isUndefined(_)) return c(void 0, _, O, A);
    } else return c(_, R, O, A);
  }
  function h(_, R) {
    if (!k.isUndefined(R)) return c(void 0, R);
  }
  function y(_, R) {
    if (k.isUndefined(R)) {
      if (!k.isUndefined(_)) return c(void 0, _);
    } else return c(void 0, R);
  }
  function E(_, R, O) {
    if (O in u) return c(_, R);
    if (O in i) return c(void 0, _);
  }
  const z = {
    url: h,
    method: h,
    data: h,
    baseURL: y,
    transformRequest: y,
    transformResponse: y,
    paramsSerializer: y,
    timeout: y,
    timeoutMessage: y,
    withCredentials: y,
    withXSRFToken: y,
    adapter: y,
    responseType: y,
    xsrfCookieName: y,
    xsrfHeaderName: y,
    onUploadProgress: y,
    onDownloadProgress: y,
    decompress: y,
    maxContentLength: y,
    maxBodyLength: y,
    beforeRedirect: y,
    transport: y,
    httpAgent: y,
    httpsAgent: y,
    cancelToken: y,
    socketPath: y,
    responseEncoding: y,
    validateStatus: E,
    headers: (_, R, O) => f(Lc(_), Lc(R), O, !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, i, u)), function (R) {
      const O = z[R] || f,
        A = O(i[R], u[R], R);
      (k.isUndefined(A) && O !== E) || (s[R] = A);
    }),
    s
  );
}
const nf = (i) => {
    const u = gn({}, i);
    let {
      data: s,
      withXSRFToken: c,
      xsrfHeaderName: f,
      xsrfCookieName: h,
      headers: y,
      auth: E,
    } = u;
    (u.headers = y = Xe.from(y)),
      (u.url = Yc(tf(u.baseURL, u.url), i.params, i.paramsSerializer)),
      E &&
        y.set(
          "Authorization",
          "Basic " +
            btoa(
              (E.username || "") +
                ":" +
                (E.password ? unescape(encodeURIComponent(E.password)) : "")
            )
        );
    let z;
    if (k.isFormData(s)) {
      if (Ie.hasStandardBrowserEnv || Ie.hasStandardBrowserWebWorkerEnv)
        y.setContentType(void 0);
      else if ((z = y.getContentType()) !== !1) {
        const [_, ...R] = z
          ? z
              .split(";")
              .map((O) => O.trim())
              .filter(Boolean)
          : [];
        y.setContentType([_ || "multipart/form-data", ...R].join("; "));
      }
    }
    if (
      Ie.hasStandardBrowserEnv &&
      (c && k.isFunction(c) && (c = c(u)), c || (c !== !1 && Lh(u.url)))
    ) {
      const _ = f && h && zh.read(h);
      _ && y.set(f, _);
    }
    return u;
  },
  jh = typeof XMLHttpRequest < "u",
  Ah =
    jh &&
    function (i) {
      return new Promise(function (s, c) {
        const f = nf(i);
        let h = f.data;
        const y = Xe.from(f.headers).normalize();
        let { responseType: E, onUploadProgress: z, onDownloadProgress: _ } = f,
          R,
          O,
          A,
          U,
          j;
        function C() {
          U && U(),
            j && j(),
            f.cancelToken && f.cancelToken.unsubscribe(R),
            f.signal && f.signal.removeEventListener("abort", R);
        }
        let x = new XMLHttpRequest();
        x.open(f.method.toUpperCase(), f.url, !0), (x.timeout = f.timeout);
        function F() {
          if (!x) return;
          const X = Xe.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders()
            ),
            re = {
              data:
                !E || E === "text" || E === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: X,
              config: i,
              request: x,
            };
          ef(
            function (fe) {
              s(fe), C();
            },
            function (fe) {
              c(fe), C();
            },
            re
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = F)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(F);
            }),
          (x.onabort = function () {
            x &&
              (c(new G("Request aborted", G.ECONNABORTED, i, x)), (x = null));
          }),
          (x.onerror = function () {
            c(new G("Network Error", G.ERR_NETWORK, i, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let ee = f.timeout
              ? "timeout of " + f.timeout + "ms exceeded"
              : "timeout exceeded";
            const re = f.transitional || Gc;
            f.timeoutErrorMessage && (ee = f.timeoutErrorMessage),
              c(
                new G(
                  ee,
                  re.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                  i,
                  x
                )
              ),
              (x = null);
          }),
          h === void 0 && y.setContentType(null),
          "setRequestHeader" in x &&
            k.forEach(y.toJSON(), function (ee, re) {
              x.setRequestHeader(re, ee);
            }),
          k.isUndefined(f.withCredentials) ||
            (x.withCredentials = !!f.withCredentials),
          E && E !== "json" && (x.responseType = f.responseType),
          _ && (([A, j] = Gl(_, !0)), x.addEventListener("progress", A)),
          z &&
            x.upload &&
            (([O, U] = Gl(z)),
            x.upload.addEventListener("progress", O),
            x.upload.addEventListener("loadend", U)),
          (f.cancelToken || f.signal) &&
            ((R = (X) => {
              x &&
                (c(!X || X.type ? new Qn(null, i, x) : X),
                x.abort(),
                (x = null));
            }),
            f.cancelToken && f.cancelToken.subscribe(R),
            f.signal &&
              (f.signal.aborted ? R() : f.signal.addEventListener("abort", R)));
        const Q = Th(f.url);
        if (Q && Ie.protocols.indexOf(Q) === -1) {
          c(new G("Unsupported protocol " + Q + ":", G.ERR_BAD_REQUEST, i));
          return;
        }
        x.send(h || null);
      });
    },
  Mh = (i, u) => {
    const { length: s } = (i = i ? i.filter(Boolean) : []);
    if (u || s) {
      let c = new AbortController(),
        f;
      const h = function (_) {
        if (!f) {
          (f = !0), E();
          const R = _ instanceof Error ? _ : this.reason;
          c.abort(
            R instanceof G ? R : new Qn(R instanceof Error ? R.message : R)
          );
        }
      };
      let y =
        u &&
        setTimeout(() => {
          (y = null), h(new G(`timeout ${u} of ms exceeded`, G.ETIMEDOUT));
        }, u);
      const E = () => {
        i &&
          (y && clearTimeout(y),
          (y = null),
          i.forEach((_) => {
            _.unsubscribe
              ? _.unsubscribe(h)
              : _.removeEventListener("abort", h);
          }),
          (i = null));
      };
      i.forEach((_) => _.addEventListener("abort", h));
      const { signal: z } = c;
      return (z.unsubscribe = () => k.asap(E)), z;
    }
  },
  Ih = function* (i, u) {
    let s = i.byteLength;
    if (s < u) {
      yield i;
      return;
    }
    let c = 0,
      f;
    for (; c < s; ) (f = c + u), yield i.slice(c, f), (c = f);
  },
  Uh = async function* (i, u) {
    for await (const s of Bh(i)) yield* Ih(s, u);
  },
  Bh = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const u = i.getReader();
    try {
      for (;;) {
        const { done: s, value: c } = await u.read();
        if (s) break;
        yield c;
      }
    } finally {
      await u.cancel();
    }
  },
  zc = (i, u, s, c) => {
    const f = Uh(i, u);
    let h = 0,
      y,
      E = (z) => {
        y || ((y = !0), c && c(z));
      };
    return new ReadableStream(
      {
        async pull(z) {
          try {
            const { done: _, value: R } = await f.next();
            if (_) {
              E(), z.close();
              return;
            }
            let O = R.byteLength;
            if (s) {
              let A = (h += O);
              s(A);
            }
            z.enqueue(new Uint8Array(R));
          } catch (_) {
            throw (E(_), _);
          }
        },
        cancel(z) {
          return E(z), f.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ro =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  rf = ro && typeof ReadableStream == "function",
  Hh =
    ro &&
    (typeof TextEncoder == "function"
      ? (
          (i) => (u) =>
            i.encode(u)
        )(new TextEncoder())
      : async (i) => new Uint8Array(await new Response(i).arrayBuffer())),
  lf = (i, ...u) => {
    try {
      return !!i(...u);
    } catch {
      return !1;
    }
  },
  Vh =
    rf &&
    lf(() => {
      let i = !1;
      const u = new Request(Ie.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (i = !0), "half";
        },
      }).headers.has("Content-Type");
      return i && !u;
    }),
  Dc = 64 * 1024,
  fu = rf && lf(() => k.isReadableStream(new Response("").body)),
  Zl = { stream: fu && ((i) => i.body) };
ro &&
  ((i) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
      !Zl[u] &&
        (Zl[u] = k.isFunction(i[u])
          ? (s) => s[u]()
          : (s, c) => {
              throw new G(
                `Response type '${u}' is not supported`,
                G.ERR_NOT_SUPPORT,
                c
              );
            });
    });
  })(new Response());
const $h = async (i) => {
    if (i == null) return 0;
    if (k.isBlob(i)) return i.size;
    if (k.isSpecCompliantForm(i))
      return (
        await new Request(Ie.origin, { method: "POST", body: i }).arrayBuffer()
      ).byteLength;
    if (k.isArrayBufferView(i) || k.isArrayBuffer(i)) return i.byteLength;
    if ((k.isURLSearchParams(i) && (i = i + ""), k.isString(i)))
      return (await Hh(i)).byteLength;
  },
  Wh = async (i, u) => {
    const s = k.toFiniteNumber(i.getContentLength());
    return s ?? $h(u);
  },
  Qh =
    ro &&
    (async (i) => {
      let {
        url: u,
        method: s,
        data: c,
        signal: f,
        cancelToken: h,
        timeout: y,
        onDownloadProgress: E,
        onUploadProgress: z,
        responseType: _,
        headers: R,
        withCredentials: O = "same-origin",
        fetchOptions: A,
      } = nf(i);
      _ = _ ? (_ + "").toLowerCase() : "text";
      let U = Mh([f, h && h.toAbortSignal()], y),
        j;
      const C =
        U &&
        U.unsubscribe &&
        (() => {
          U.unsubscribe();
        });
      let x;
      try {
        if (
          z &&
          Vh &&
          s !== "get" &&
          s !== "head" &&
          (x = await Wh(R, c)) !== 0
        ) {
          let re = new Request(u, { method: "POST", body: c, duplex: "half" }),
            oe;
          if (
            (k.isFormData(c) &&
              (oe = re.headers.get("content-type")) &&
              R.setContentType(oe),
            re.body)
          ) {
            const [fe, Re] = Pc(x, Gl(Oc(z)));
            c = zc(re.body, Dc, fe, Re);
          }
        }
        k.isString(O) || (O = O ? "include" : "omit");
        const F = "credentials" in Request.prototype;
        j = new Request(u, {
          ...A,
          signal: U,
          method: s.toUpperCase(),
          headers: R.normalize().toJSON(),
          body: c,
          duplex: "half",
          credentials: F ? O : void 0,
        });
        let Q = await fetch(j);
        const X = fu && (_ === "stream" || _ === "response");
        if (fu && (E || (X && C))) {
          const re = {};
          ["status", "statusText", "headers"].forEach((Ue) => {
            re[Ue] = Q[Ue];
          });
          const oe = k.toFiniteNumber(Q.headers.get("content-length")),
            [fe, Re] = (E && Pc(oe, Gl(Oc(E), !0))) || [];
          Q = new Response(
            zc(Q.body, Dc, fe, () => {
              Re && Re(), C && C();
            }),
            re
          );
        }
        _ = _ || "text";
        let ee = await Zl[k.findKey(Zl, _) || "text"](Q, i);
        return (
          !X && C && C(),
          await new Promise((re, oe) => {
            ef(re, oe, {
              data: ee,
              headers: Xe.from(Q.headers),
              status: Q.status,
              statusText: Q.statusText,
              config: i,
              request: j,
            });
          })
        );
      } catch (F) {
        throw (
          (C && C(),
          F && F.name === "TypeError" && /fetch/i.test(F.message)
            ? Object.assign(new G("Network Error", G.ERR_NETWORK, i, j), {
                cause: F.cause || F,
              })
            : G.from(F, F && F.code, i, j))
        );
      }
    }),
  du = { http: ih, xhr: Ah, fetch: Qh };
k.forEach(du, (i, u) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: u });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: u });
  }
});
const Fc = (i) => `- ${i}`,
  Kh = (i) => k.isFunction(i) || i === null || i === !1,
  of = {
    getAdapter: (i) => {
      i = k.isArray(i) ? i : [i];
      const { length: u } = i;
      let s, c;
      const f = {};
      for (let h = 0; h < u; h++) {
        s = i[h];
        let y;
        if (
          ((c = s),
          !Kh(s) && ((c = du[(y = String(s)).toLowerCase()]), c === void 0))
        )
          throw new G(`Unknown adapter '${y}'`);
        if (c) break;
        f[y || "#" + h] = c;
      }
      if (!c) {
        const h = Object.entries(f).map(
          ([E, z]) =>
            `adapter ${E} ` +
            (z === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let y = u
          ? h.length > 1
            ? `since :
` +
              h.map(Fc).join(`
`)
            : " " + Fc(h[0])
          : "as no adapter specified";
        throw new G(
          "There is no suitable adapter to dispatch the request " + y,
          "ERR_NOT_SUPPORT"
        );
      }
      return c;
    },
    adapters: du,
  };
function uu(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new Qn(null, i);
}
function jc(i) {
  return (
    uu(i),
    (i.headers = Xe.from(i.headers)),
    (i.data = iu.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    of
      .getAdapter(i.adapter || Ar.adapter)(i)
      .then(
        function (c) {
          return (
            uu(i),
            (c.data = iu.call(i, i.transformResponse, c)),
            (c.headers = Xe.from(c.headers)),
            c
          );
        },
        function (c) {
          return (
            bc(c) ||
              (uu(i),
              c &&
                c.response &&
                ((c.response.data = iu.call(
                  i,
                  i.transformResponse,
                  c.response
                )),
                (c.response.headers = Xe.from(c.response.headers)))),
            Promise.reject(c)
          );
        }
      )
  );
}
const uf = "1.7.9",
  lo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, u) => {
    lo[i] = function (c) {
      return typeof c === i || "a" + (u < 1 ? "n " : " ") + i;
    };
  }
);
const Ac = {};
lo.transitional = function (u, s, c) {
  function f(h, y) {
    return (
      "[Axios v" +
      uf +
      "] Transitional option '" +
      h +
      "'" +
      y +
      (c ? ". " + c : "")
    );
  }
  return (h, y, E) => {
    if (u === !1)
      throw new G(
        f(y, " has been removed" + (s ? " in " + s : "")),
        G.ERR_DEPRECATED
      );
    return (
      s &&
        !Ac[y] &&
        ((Ac[y] = !0),
        console.warn(
          f(
            y,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future"
          )
        )),
      u ? u(h, y, E) : !0
    );
  };
};
lo.spelling = function (u) {
  return (s, c) => (console.warn(`${c} is likely a misspelling of ${u}`), !0);
};
function qh(i, u, s) {
  if (typeof i != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(i);
  let f = c.length;
  for (; f-- > 0; ) {
    const h = c[f],
      y = u[h];
    if (y) {
      const E = i[h],
        z = E === void 0 || y(E, h, i);
      if (z !== !0)
        throw new G("option " + h + " must be " + z, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new G("Unknown option " + h, G.ERR_BAD_OPTION);
  }
}
const Yl = { assertOptions: qh, validators: lo },
  _t = Yl.validators;
class vn {
  constructor(u) {
    (this.defaults = u),
      (this.interceptors = { request: new Nc(), response: new Nc() });
  }
  async request(u, s) {
    try {
      return await this._request(u, s);
    } catch (c) {
      if (c instanceof Error) {
        let f = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(f)
          : (f = new Error());
        const h = f.stack ? f.stack.replace(/^.+\n/, "") : "";
        try {
          c.stack
            ? h &&
              !String(c.stack).endsWith(h.replace(/^.+\n.+\n/, "")) &&
              (c.stack +=
                `
` + h)
            : (c.stack = h);
        } catch {}
      }
      throw c;
    }
  }
  _request(u, s) {
    typeof u == "string" ? ((s = s || {}), (s.url = u)) : (s = u || {}),
      (s = gn(this.defaults, s));
    const { transitional: c, paramsSerializer: f, headers: h } = s;
    c !== void 0 &&
      Yl.assertOptions(
        c,
        {
          silentJSONParsing: _t.transitional(_t.boolean),
          forcedJSONParsing: _t.transitional(_t.boolean),
          clarifyTimeoutError: _t.transitional(_t.boolean),
        },
        !1
      ),
      f != null &&
        (k.isFunction(f)
          ? (s.paramsSerializer = { serialize: f })
          : Yl.assertOptions(
              f,
              { encode: _t.function, serialize: _t.function },
              !0
            )),
      Yl.assertOptions(
        s,
        {
          baseUrl: _t.spelling("baseURL"),
          withXsrfToken: _t.spelling("withXSRFToken"),
        },
        !0
      ),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase());
    let y = h && k.merge(h.common, h[s.method]);
    h &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (j) => {
          delete h[j];
        }
      ),
      (s.headers = Xe.concat(y, h));
    const E = [];
    let z = !0;
    this.interceptors.request.forEach(function (C) {
      (typeof C.runWhen == "function" && C.runWhen(s) === !1) ||
        ((z = z && C.synchronous), E.unshift(C.fulfilled, C.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function (C) {
      _.push(C.fulfilled, C.rejected);
    });
    let R,
      O = 0,
      A;
    if (!z) {
      const j = [jc.bind(this), void 0];
      for (
        j.unshift.apply(j, E),
          j.push.apply(j, _),
          A = j.length,
          R = Promise.resolve(s);
        O < A;

      )
        R = R.then(j[O++], j[O++]);
      return R;
    }
    A = E.length;
    let U = s;
    for (O = 0; O < A; ) {
      const j = E[O++],
        C = E[O++];
      try {
        U = j(U);
      } catch (x) {
        C.call(this, x);
        break;
      }
    }
    try {
      R = jc.call(this, U);
    } catch (j) {
      return Promise.reject(j);
    }
    for (O = 0, A = _.length; O < A; ) R = R.then(_[O++], _[O++]);
    return R;
  }
  getUri(u) {
    u = gn(this.defaults, u);
    const s = tf(u.baseURL, u.url);
    return Yc(s, u.params, u.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (u) {
  vn.prototype[u] = function (s, c) {
    return this.request(
      gn(c || {}, { method: u, url: s, data: (c || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (u) {
  function s(c) {
    return function (h, y, E) {
      return this.request(
        gn(E || {}, {
          method: u,
          headers: c ? { "Content-Type": "multipart/form-data" } : {},
          url: h,
          data: y,
        })
      );
    };
  }
  (vn.prototype[u] = s()), (vn.prototype[u + "Form"] = s(!0));
});
class gu {
  constructor(u) {
    if (typeof u != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (h) {
      s = h;
    });
    const c = this;
    this.promise.then((f) => {
      if (!c._listeners) return;
      let h = c._listeners.length;
      for (; h-- > 0; ) c._listeners[h](f);
      c._listeners = null;
    }),
      (this.promise.then = (f) => {
        let h;
        const y = new Promise((E) => {
          c.subscribe(E), (h = E);
        }).then(f);
        return (
          (y.cancel = function () {
            c.unsubscribe(h);
          }),
          y
        );
      }),
      u(function (h, y, E) {
        c.reason || ((c.reason = new Qn(h, y, E)), s(c.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(u) {
    if (this.reason) {
      u(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(u) : (this._listeners = [u]);
  }
  unsubscribe(u) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(u);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const u = new AbortController(),
      s = (c) => {
        u.abort(c);
      };
    return (
      this.subscribe(s),
      (u.signal.unsubscribe = () => this.unsubscribe(s)),
      u.signal
    );
  }
  static source() {
    let u;
    return {
      token: new gu(function (f) {
        u = f;
      }),
      cancel: u,
    };
  }
}
function Jh(i) {
  return function (s) {
    return i.apply(null, s);
  };
}
function Xh(i) {
  return k.isObject(i) && i.isAxiosError === !0;
}
const pu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(pu).forEach(([i, u]) => {
  pu[u] = i;
});
function sf(i) {
  const u = new vn(i),
    s = Ic(vn.prototype.request, u);
  return (
    k.extend(s, vn.prototype, u, { allOwnKeys: !0 }),
    k.extend(s, u, null, { allOwnKeys: !0 }),
    (s.create = function (f) {
      return sf(gn(i, f));
    }),
    s
  );
}
const Ce = sf(Ar);
Ce.Axios = vn;
Ce.CanceledError = Qn;
Ce.CancelToken = gu;
Ce.isCancel = bc;
Ce.VERSION = uf;
Ce.toFormData = no;
Ce.AxiosError = G;
Ce.Cancel = Ce.CanceledError;
Ce.all = function (u) {
  return Promise.all(u);
};
Ce.spread = Jh;
Ce.isAxiosError = Xh;
Ce.mergeConfig = gn;
Ce.AxiosHeaders = Xe;
Ce.formToJSON = (i) => Zc(k.isHTMLForm(i) ? new FormData(i) : i);
Ce.getAdapter = of.getAdapter;
Ce.HttpStatusCode = pu;
Ce.default = Ce;
function Yh() {
  const i = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let u = {};
  const [s, c] = mn.useState(u),
    [f, h] = mn.useState(""),
    [y, E] = mn.useState(!1);
  mn.useEffect(() => {
    Mc.subscribe("country", async (_, R) => {
      try {
        E(!0),
          setTimeout(() => {
            var O;
            (O = document.querySelector("img.loading")) == null ||
              O.classList.add("animation");
          }, 10),
          h(R),
          R !== "CN"
            ? (async () => {
                var U;
                const O = await Ce.get(
                    `https://date.nager.at/api/v3/PublicHolidays/2025/${R}`
                  ),
                  A = z(O.data);
                c(A),
                  E(!1),
                  (U = document.querySelector("img.loading")) == null ||
                    U.classList.remove("animation");
              })()
            : (async () => {
                var A;
                const O = await Ce.get("cn.json");
                c(O.data),
                  E(!1),
                  (A = document.querySelector("img.loading")) == null ||
                    A.classList.remove("animation");
              })();
      } catch (O) {
        console.log(O);
      }
    });
  }, []);
  const z = (_) => {
    let R = {};
    return (
      _.forEach((O) => {
        let A = new Date(O.date),
          U = A.getMonth() + 1 + "/" + A.getDate() + "/" + A.getFullYear();
        R[U] = { type: "holiday", note: O.localName };
      }),
      R
    );
  };
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx("img", {
        className: y ? "loading show" : "loading",
        src: "/Me/Energy_logo.svg",
        alt: "logo",
      }),
      b.jsx("div", { className: "bg" }),
      b.jsx("div", {
        className: "calendar-items",
        children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_) =>
          b.jsxs(
            "div",
            {
              className: "month-container",
              children: [
                b.jsx("div", { className: "month", children: i[_] }),
                b.jsx(Sp, { year: 2025, month: _, holidays: s, country: f }),
              ],
            },
            _
          )
        ),
      }),
    ],
  });
}
function Gh() {
  return b.jsx(b.Fragment, {
    children: b.jsxs("div", {
      className: "app-container",
      children: [b.jsx(wp, {}), b.jsx(Yh, {})],
    }),
  });
}
hp.createRoot(document.getElementById("root")).render(
  b.jsx(mn.StrictMode, { children: b.jsx(Gh, {}) })
);
