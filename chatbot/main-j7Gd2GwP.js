(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ':root{--page-bg: #ebebeb;--primary-text: #141414;--btn-bg: #ffffff;--btn-primary-text: blue;--input-color: #1089ca;--bg-image: none;--bg-month: #fff}.dark{--page-bg: #101524;--primary-text: #f1ddcc;--btn-bg: #1c2439;--btn-primary-text: #f1ddcc;--bg-month: #1d2439;--bg-image: linear-gradient(180deg, #0c101c, #171e32, #242f50);--bg-reverse: linear-gradient(180deg, #242f50, #171e32, #0c101c)}*{font-family:Fidelity Sans,Arial,sans-serif;line-height:1;font-weight:400;padding:0;margin:0;box-sizing:border-box;color:var(--primary-text)}* .sr-only{position:absolute;left:-999rem;z-index:-999}body{display:block;width:100vw;min-height:100vh;font-size:16px}body button,body a,body input{cursor:pointer}body button{background-color:var(--btn-bg);height:2rem;padding:0 1.25rem;border-radius:1rem;border:none;align-items:center;font-size:1rem;border:1px solid var(--btn-primary-text);display:flex}body .checkbox-item{height:1.25rem;display:flex}body .checkbox-item input[type=checkbox]{height:0;width:0;position:absolute;left:-999rem}body .checkbox-item input[type=checkbox]:focus-visible{outline:none}body .checkbox-item input[type=checkbox]+label{position:relative;display:flex;align-items:center;cursor:pointer}body .checkbox-item input[type=checkbox]+label>span{display:flex;justify-content:center;align-items:center;margin-right:.25rem;width:1.125rem;height:1.125rem;background-color:#fff;border:1px solid var(--primary-text);border-radius:4px;box-sizing:border-box;transition:border .15s linear}body .checkbox-item input[type=checkbox]:checked+label>span{border:.5rem solid var(--input-color)}body .checkbox-item input[type=checkbox]:checked+label>span:before{content:"";display:block;position:absolute;top:-1px;left:2px;border:2px solid #fff;border-top:1px solid transparent;border-left:1px solid transparent;transform:rotate(45deg);height:.5rem;width:.25rem;transform-origin:0% 100%}body .radio-item{height:1.25rem;display:flex;column-gap:.5rem;align-items:center;cursor:pointer}body .radio-item input{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid var(--primary-text);transition:border .2s linear}body .radio-item input:checked{border:5px solid var(--input-color);transition:border .15s linear}body .radio-item input:focus,body .radio-item input:focus-visible,body .radio-item input:hover{outline:none}body .radio-item label{font-size:1rem}body button.menu{outline:none!important;border:none;border-radius:0;padding:0;margin:0;width:1.5rem;height:1.125rem;background-color:transparent;border-top:2px solid var(--primary-text);border-bottom:2px solid var(--primary-text);position:fixed;z-index:2;top:1.25rem;left:1.25rem;display:none}@media screen and (max-width: 30rem){body button.menu{display:block}}body button.menu:before,body button.menu:after{display:block;content:"";position:absolute;left:0;top:6px;width:1.5rem;height:0;border-top:2px solid var(--primary-text);transition:transform .2s linear}body button.menu.expanded{border:none}body button.menu.expanded:before,body button.menu.expanded:after{transition:transform .2s linear;transform-origin:center;transform:rotate(45deg)}body button.menu.expanded:after{transform:rotate(-45deg)}body .bg{display:none;position:fixed;z-index:1;background-color:#0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);width:100vw;height:calc(100vh - 4rem);left:0;top:4rem}@media screen and (max-width: 30rem){body .bg{height:100vh;top:0}}body #root{width:100%;height:100%}body #root .app-container{width:100%;height:100vh;position:relative;background-color:var(--page-bg)}@media screen and (max-width: 30rem){body #root .app-container{padding:0}}body .feature-links{display:flex;padding:0 1rem;justify-content:flex-start;column-gap:1.5rem;margin-bottom:1.5rem}body .feature-links a{color:var(--input-color);font-size:1rem;text-decoration:none;outline:none;cursor:pointer}body .feature-links a.active{color:var(--primary-text);cursor:auto}.app-container header{min-height:4rem;border-bottom:1px solid #cccccc;background-color:#fff;display:flex;align-items:center;padding:0 1rem}.app-container header .site-logo{height:36px;display:inline-block;width:120px;background-image:url(/logo_2.svg);background-repeat:no-repeat;background-size:280px;background-position:-15px center;cursor:pointer;border:none!important;outline:none!important}.app-container header span{color:#141414;font-size:1.25rem;font-weight:400}.app-container .main-content-area{height:calc(100vh - 4rem);background-color:#f5f7fb;padding:1.5rem;column-gap:1.5rem;display:flex;overflow:hidden}.app-container .main-content-area>*{border-radius:.75rem;background-color:transparent;overflow:hidden}.app-container .main-content-area nav{display:flex;flex-direction:column;padding:1rem;padding-right:0;row-gap:1.5rem;background-color:#fff;padding-top:5rem;width:5.5rem;overflow:hidden;transition:width .2s ease-in-out;position:relative;border-radius:.75rem}.app-container .main-content-area nav.expanded{width:254px}.app-container .main-content-area nav>*{height:4rem;text-decoration:none;display:flex;align-items:center;padding-right:4rem;text-transform:uppercase;column-gap:1rem}.app-container .main-content-area nav>* span.icon{display:flex;align-items:center;justify-content:center;min-width:3rem;min-height:3rem;border-radius:50%;background-color:#fff;font-size:1rem;margin-left:.5rem}.app-container .main-content-area nav>* span.icon img{max-width:1.5rem;max-height:1.5rem}.app-container .main-content-area nav>* span.icon img.dashboard{max-width:2rem;max-height:2rem}.app-container .main-content-area nav>*.active{background-color:#f5f7fb;border-radius:2rem 0 0 2rem;position:relative}.app-container .main-content-area nav>*.active:before,.app-container .main-content-area nav>*.active:after{width:1.25rem;height:1.25rem;content:"";background-color:transparent;box-shadow:5px 5px 0 5px #f5f7fb;position:absolute;border-bottom-right-radius:1.25rem;top:-1.25rem;right:0}.app-container .main-content-area nav>*.active:after{top:unset;bottom:-1rem;transform:rotate(270deg)}.app-container .main-content-area nav>*.active span.icon{background-color:#fff}.app-container .main-content-area nav button{height:2rem;width:2rem;border-radius:1rem;font-size:.75rem;justify-content:center;padding:0;margin:0;border:none;position:absolute;bottom:1.5rem;left:1.5rem}.app-container .main-content-area nav button.collapsed:before,.app-container .main-content-area nav button.expanded:before{content:"";display:block;min-width:.625rem;min-height:.625rem;border-top:1px solid #141414;border-right:1px solid #141414;transform:rotate(45deg);transform-origin:center}.app-container .main-content-area nav button.expanded:before{transform:rotate(-135deg)}.app-container .main-content-area .history-container{flex-grow:1;display:flex;column-gap:1rem}.app-container .main-content-area .history-container main{background-color:#fff;flex-grow:1;min-width:calc(100% - 2rem - 660px);padding:1rem 0 0;border-radius:.75rem}.app-container .main-content-area .history-container main h1{font-size:2.5rem;font-weight:400;color:#4169e1;margin-bottom:1.5rem}.app-container .main-content-area .history-container aside{border-radius:.75rem;background-color:#fff;min-width:300px;max-width:360px;position:relative}.app-container .main-content-area .history-container aside.left-panel{width:360px}.app-container .main-content-area main{flex-grow:1;min-width:calc(100% - 2rem - 660px);padding:1rem 0 0}.app-container .main-content-area main h1{font-size:2.5rem;font-weight:400;color:#4169e1;margin-bottom:1.5rem}.app-container .main-content-area aside{min-width:330px;max-width:330px;position:relative}.app-container .main-content-area.fly main{min-width:calc(100% - .75rem - 330px)}.app-container .main-content-area.fly .right-panel{width:0;min-width:0;max-width:0;overflow:visible}.app-container .main-content-area.main main{min-width:100%}.app-container .main-content-area.main .left-panel,.app-container .main-content-area.main .right-panel{display:none}@media screen and (max-width: 30rem){.app-container{height:100%;overflow:hidden}.app-container header{display:none}.app-container .main-content-area{gap:0;padding:.75rem 0}.app-container .main-content-area main,.app-container .main-content-area aside{width:100vw;max-width:100vw;min-width:100vw;border-radius:0}}.conversation-history-container{padding:1.5rem 1rem}.conversation-history-container .search-box{width:100%;margin-bottom:1.5rem}.conversation-history-container .search-box input[type=search]{height:3rem;border-radius:.5rem;width:100%;border:none;box-shadow:0 0 .25rem #ccc}.conversation-history-container .conversation-list{display:flex;flex-direction:column;margin-top:1rem;width:calc(100% + 2rem);margin-left:-1rem}.conversation-history-container .conversation-list .conversation{display:flex;column-gap:1rem;padding:1rem}.conversation-history-container .conversation-list .conversation:hover{background-color:#c9e5fc;cursor:pointer;border-radius:.25rem;padding:1rem .75rem;margin:0 .25rem}.conversation-history-container .conversation-list .conversation img{width:3rem;height:3rem;border-radius:50%;object-fit:cover}.conversation-history-container .conversation-list .conversation .direction{flex-grow:1}.conversation-history-container .conversation-list .conversation .direction .name{font-size:.875rem;margin-bottom:.75rem}.conversation-history-container .conversation-list .conversation .direction>ul{display:flex;flex-wrap:wrap;row-gap:1rem;column-gap:.75rem}.conversation-history-container .conversation-list .conversation .direction>ul>li{height:1.5rem;border-radius:.75rem;background-color:#0000000d;padding:.25rem .75rem;font-size:.75rem;line-height:1;list-style:none;display:inline-flex;align-items:center}.conversation-history-container .conversation-list .conversation .result{min-width:6rem;text-align:right}.conversation-history-container .conversation-list .conversation .result .date{font-size:.875rem;line-height:1rem;color:#666;margin-bottom:.5rem;white-space:nowrap;display:flex;justify-content:space-between}.conversation-history-container .conversation-list .conversation .result .star-container{display:inline-flex;column-gap:.125rem}.conversation-history-container .conversation-list .conversation .result .star-container .star{font-size:1rem;display:inline-block;color:#ebebeb}.conversation-history-container .conversation-list .conversation .result .star-container .star.filled{color:gold}'
        )
      ),
        document.head.appendChild(e);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function xd(o, c) {
  for (var a = 0; a < c.length; a++) {
    const v = c[a];
    if (typeof v != "string" && !Array.isArray(v)) {
      for (const p in v)
        if (p !== "default" && !(p in o)) {
          const w = Object.getOwnPropertyDescriptor(v, p);
          w &&
            Object.defineProperty(
              o,
              p,
              w.get ? w : { enumerable: !0, get: () => v[p] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) v(p);
  new MutationObserver((p) => {
    for (const w of p)
      if (w.type === "childList")
        for (const S of w.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && v(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(p) {
    const w = {};
    return (
      p.integrity && (w.integrity = p.integrity),
      p.referrerPolicy && (w.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === "use-credentials"
        ? (w.credentials = "include")
        : p.crossOrigin === "anonymous"
        ? (w.credentials = "omit")
        : (w.credentials = "same-origin"),
      w
    );
  }
  function v(p) {
    if (p.ep) return;
    p.ep = !0;
    const w = a(p);
    fetch(p.href, w);
  }
})();
function Ed(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var Bu = { exports: {} },
  Pr = {},
  $u = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs;
function Cd() {
  if (Gs) return J;
  Gs = 1;
  var o = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    p = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    L = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function $(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (_ && h[_]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var ee = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    V = {};
  function A(h, E, Y) {
    (this.props = h),
      (this.context = E),
      (this.refs = V),
      (this.updater = Y || ee);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (h, E) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, h, E, "setState");
    }),
    (A.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    });
  function ie() {}
  ie.prototype = A.prototype;
  function X(h, E, Y) {
    (this.props = h),
      (this.context = E),
      (this.refs = V),
      (this.updater = Y || ee);
  }
  var b = (X.prototype = new ie());
  (b.constructor = X), Z(b, A.prototype), (b.isPureReactComponent = !0);
  var G = Array.isArray,
    Se = Object.prototype.hasOwnProperty,
    xe = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(h, E, Y) {
    var q,
      ne = {},
      re = null,
      ae = null;
    if (E != null)
      for (q in (E.ref !== void 0 && (ae = E.ref),
      E.key !== void 0 && (re = "" + E.key),
      E))
        Se.call(E, q) && !Le.hasOwnProperty(q) && (ne[q] = E[q]);
    var ue = arguments.length - 2;
    if (ue === 1) ne.children = Y;
    else if (1 < ue) {
      for (var de = Array(ue), Xe = 0; Xe < ue; Xe++)
        de[Xe] = arguments[Xe + 2];
      ne.children = de;
    }
    if (h && h.defaultProps)
      for (q in ((ue = h.defaultProps), ue))
        ne[q] === void 0 && (ne[q] = ue[q]);
    return {
      $$typeof: o,
      type: h,
      key: re,
      ref: ae,
      props: ne,
      _owner: xe.current,
    };
  }
  function pt(h, E) {
    return {
      $$typeof: o,
      type: h.type,
      key: E,
      ref: h.ref,
      props: h.props,
      _owner: h._owner,
    };
  }
  function Ke(h) {
    return typeof h == "object" && h !== null && h.$$typeof === o;
  }
  function kt(h) {
    var E = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (Y) {
        return E[Y];
      })
    );
  }
  var ht = /\/+/g;
  function Ye(h, E) {
    return typeof h == "object" && h !== null && h.key != null
      ? kt("" + h.key)
      : E.toString(36);
  }
  function it(h, E, Y, q, ne) {
    var re = typeof h;
    (re === "undefined" || re === "boolean") && (h = null);
    var ae = !1;
    if (h === null) ae = !0;
    else
      switch (re) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case o:
            case c:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = h),
        (ne = ne(ae)),
        (h = q === "" ? "." + Ye(ae, 0) : q),
        G(ne)
          ? ((Y = ""),
            h != null && (Y = h.replace(ht, "$&/") + "/"),
            it(ne, E, Y, "", function (Xe) {
              return Xe;
            }))
          : ne != null &&
            (Ke(ne) &&
              (ne = pt(
                ne,
                Y +
                  (!ne.key || (ae && ae.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(ht, "$&/") + "/") +
                  h
              )),
            E.push(ne)),
        1
      );
    if (((ae = 0), (q = q === "" ? "." : q + ":"), G(h)))
      for (var ue = 0; ue < h.length; ue++) {
        re = h[ue];
        var de = q + Ye(re, ue);
        ae += it(re, E, Y, de, ne);
      }
    else if (((de = $(h)), typeof de == "function"))
      for (h = de.call(h), ue = 0; !(re = h.next()).done; )
        (re = re.value), (de = q + Ye(re, ue++)), (ae += it(re, E, Y, de, ne));
    else if (re === "object")
      throw (
        ((E = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (E === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : E) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ae;
  }
  function mt(h, E, Y) {
    if (h == null) return h;
    var q = [],
      ne = 0;
    return (
      it(h, q, "", "", function (re) {
        return E.call(Y, re, ne++);
      }),
      q
    );
  }
  function Ae(h) {
    if (h._status === -1) {
      var E = h._result;
      (E = E()),
        E.then(
          function (Y) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = Y));
          },
          function (Y) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = Y));
          }
        ),
        h._status === -1 && ((h._status = 0), (h._result = E));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ve = { current: null },
    z = { transition: null },
    Q = {
      ReactCurrentDispatcher: ve,
      ReactCurrentBatchConfig: z,
      ReactCurrentOwner: xe,
    };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (J.Children = {
      map: mt,
      forEach: function (h, E, Y) {
        mt(
          h,
          function () {
            E.apply(this, arguments);
          },
          Y
        );
      },
      count: function (h) {
        var E = 0;
        return (
          mt(h, function () {
            E++;
          }),
          E
        );
      },
      toArray: function (h) {
        return (
          mt(h, function (E) {
            return E;
          }) || []
        );
      },
      only: function (h) {
        if (!Ke(h))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return h;
      },
    }),
    (J.Component = A),
    (J.Fragment = a),
    (J.Profiler = p),
    (J.PureComponent = X),
    (J.StrictMode = v),
    (J.Suspense = k),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (J.act = D),
    (J.cloneElement = function (h, E, Y) {
      if (h == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            h +
            "."
        );
      var q = Z({}, h.props),
        ne = h.key,
        re = h.ref,
        ae = h._owner;
      if (E != null) {
        if (
          (E.ref !== void 0 && ((re = E.ref), (ae = xe.current)),
          E.key !== void 0 && (ne = "" + E.key),
          h.type && h.type.defaultProps)
        )
          var ue = h.type.defaultProps;
        for (de in E)
          Se.call(E, de) &&
            !Le.hasOwnProperty(de) &&
            (q[de] = E[de] === void 0 && ue !== void 0 ? ue[de] : E[de]);
      }
      var de = arguments.length - 2;
      if (de === 1) q.children = Y;
      else if (1 < de) {
        ue = Array(de);
        for (var Xe = 0; Xe < de; Xe++) ue[Xe] = arguments[Xe + 2];
        q.children = ue;
      }
      return {
        $$typeof: o,
        type: h.type,
        key: ne,
        ref: re,
        props: q,
        _owner: ae,
      };
    }),
    (J.createContext = function (h) {
      return (
        (h = {
          $$typeof: S,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: w, _context: h }),
        (h.Consumer = h)
      );
    }),
    (J.createElement = je),
    (J.createFactory = function (h) {
      var E = je.bind(null, h);
      return (E.type = h), E;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (h) {
      return { $$typeof: P, render: h };
    }),
    (J.isValidElement = Ke),
    (J.lazy = function (h) {
      return { $$typeof: j, _payload: { _status: -1, _result: h }, _init: Ae };
    }),
    (J.memo = function (h, E) {
      return { $$typeof: L, type: h, compare: E === void 0 ? null : E };
    }),
    (J.startTransition = function (h) {
      var E = z.transition;
      z.transition = {};
      try {
        h();
      } finally {
        z.transition = E;
      }
    }),
    (J.unstable_act = D),
    (J.useCallback = function (h, E) {
      return ve.current.useCallback(h, E);
    }),
    (J.useContext = function (h) {
      return ve.current.useContext(h);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (h) {
      return ve.current.useDeferredValue(h);
    }),
    (J.useEffect = function (h, E) {
      return ve.current.useEffect(h, E);
    }),
    (J.useId = function () {
      return ve.current.useId();
    }),
    (J.useImperativeHandle = function (h, E, Y) {
      return ve.current.useImperativeHandle(h, E, Y);
    }),
    (J.useInsertionEffect = function (h, E) {
      return ve.current.useInsertionEffect(h, E);
    }),
    (J.useLayoutEffect = function (h, E) {
      return ve.current.useLayoutEffect(h, E);
    }),
    (J.useMemo = function (h, E) {
      return ve.current.useMemo(h, E);
    }),
    (J.useReducer = function (h, E, Y) {
      return ve.current.useReducer(h, E, Y);
    }),
    (J.useRef = function (h) {
      return ve.current.useRef(h);
    }),
    (J.useState = function (h) {
      return ve.current.useState(h);
    }),
    (J.useSyncExternalStore = function (h, E, Y) {
      return ve.current.useSyncExternalStore(h, E, Y);
    }),
    (J.useTransition = function () {
      return ve.current.useTransition();
    }),
    (J.version = "18.3.1"),
    J
  );
}
var Js;
function Ju() {
  return Js || ((Js = 1), ($u.exports = Cd())), $u.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs;
function _d() {
  if (Zs) return Pr;
  Zs = 1;
  var o = Ju(),
    c = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    v = Object.prototype.hasOwnProperty,
    p = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(P, k, L) {
    var j,
      _ = {},
      $ = null,
      ee = null;
    L !== void 0 && ($ = "" + L),
      k.key !== void 0 && ($ = "" + k.key),
      k.ref !== void 0 && (ee = k.ref);
    for (j in k) v.call(k, j) && !w.hasOwnProperty(j) && (_[j] = k[j]);
    if (P && P.defaultProps)
      for (j in ((k = P.defaultProps), k)) _[j] === void 0 && (_[j] = k[j]);
    return {
      $$typeof: c,
      type: P,
      key: $,
      ref: ee,
      props: _,
      _owner: p.current,
    };
  }
  return (Pr.Fragment = a), (Pr.jsx = S), (Pr.jsxs = S), Pr;
}
var qs;
function Pd() {
  return qs || ((qs = 1), (Bu.exports = _d())), Bu.exports;
}
var I = Pd(),
  T = Ju();
const Ku = Ed(T),
  Nd = xd({ __proto__: null, default: Ku }, [T]);
var Al = {},
  Vu = { exports: {} },
  Qe = {},
  Wu = { exports: {} },
  Hu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bs;
function Rd() {
  return (
    bs ||
      ((bs = 1),
      (function (o) {
        function c(z, Q) {
          var D = z.length;
          z.push(Q);
          e: for (; 0 < D; ) {
            var h = (D - 1) >>> 1,
              E = z[h];
            if (0 < p(E, Q)) (z[h] = Q), (z[D] = E), (D = h);
            else break e;
          }
        }
        function a(z) {
          return z.length === 0 ? null : z[0];
        }
        function v(z) {
          if (z.length === 0) return null;
          var Q = z[0],
            D = z.pop();
          if (D !== Q) {
            z[0] = D;
            e: for (var h = 0, E = z.length, Y = E >>> 1; h < Y; ) {
              var q = 2 * (h + 1) - 1,
                ne = z[q],
                re = q + 1,
                ae = z[re];
              if (0 > p(ne, D))
                re < E && 0 > p(ae, ne)
                  ? ((z[h] = ae), (z[re] = D), (h = re))
                  : ((z[h] = ne), (z[q] = D), (h = q));
              else if (re < E && 0 > p(ae, D))
                (z[h] = ae), (z[re] = D), (h = re);
              else break e;
            }
          }
          return Q;
        }
        function p(z, Q) {
          var D = z.sortIndex - Q.sortIndex;
          return D !== 0 ? D : z.id - Q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var w = performance;
          o.unstable_now = function () {
            return w.now();
          };
        } else {
          var S = Date,
            P = S.now();
          o.unstable_now = function () {
            return S.now() - P;
          };
        }
        var k = [],
          L = [],
          j = 1,
          _ = null,
          $ = 3,
          ee = !1,
          Z = !1,
          V = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          ie = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function b(z) {
          for (var Q = a(L); Q !== null; ) {
            if (Q.callback === null) v(L);
            else if (Q.startTime <= z)
              v(L), (Q.sortIndex = Q.expirationTime), c(k, Q);
            else break;
            Q = a(L);
          }
        }
        function G(z) {
          if (((V = !1), b(z), !Z))
            if (a(k) !== null) (Z = !0), Ae(Se);
            else {
              var Q = a(L);
              Q !== null && ve(G, Q.startTime - z);
            }
        }
        function Se(z, Q) {
          (Z = !1), V && ((V = !1), ie(je), (je = -1)), (ee = !0);
          var D = $;
          try {
            for (
              b(Q), _ = a(k);
              _ !== null && (!(_.expirationTime > Q) || (z && !kt()));

            ) {
              var h = _.callback;
              if (typeof h == "function") {
                (_.callback = null), ($ = _.priorityLevel);
                var E = h(_.expirationTime <= Q);
                (Q = o.unstable_now()),
                  typeof E == "function"
                    ? (_.callback = E)
                    : _ === a(k) && v(k),
                  b(Q);
              } else v(k);
              _ = a(k);
            }
            if (_ !== null) var Y = !0;
            else {
              var q = a(L);
              q !== null && ve(G, q.startTime - Q), (Y = !1);
            }
            return Y;
          } finally {
            (_ = null), ($ = D), (ee = !1);
          }
        }
        var xe = !1,
          Le = null,
          je = -1,
          pt = 5,
          Ke = -1;
        function kt() {
          return !(o.unstable_now() - Ke < pt);
        }
        function ht() {
          if (Le !== null) {
            var z = o.unstable_now();
            Ke = z;
            var Q = !0;
            try {
              Q = Le(!0, z);
            } finally {
              Q ? Ye() : ((xe = !1), (Le = null));
            }
          } else xe = !1;
        }
        var Ye;
        if (typeof X == "function")
          Ye = function () {
            X(ht);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            mt = it.port2;
          (it.port1.onmessage = ht),
            (Ye = function () {
              mt.postMessage(null);
            });
        } else
          Ye = function () {
            A(ht, 0);
          };
        function Ae(z) {
          (Le = z), xe || ((xe = !0), Ye());
        }
        function ve(z, Q) {
          je = A(function () {
            z(o.unstable_now());
          }, Q);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            Z || ee || ((Z = !0), Ae(Se));
          }),
          (o.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (pt = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return $;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return a(k);
          }),
          (o.unstable_next = function (z) {
            switch ($) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = $;
            }
            var D = $;
            $ = Q;
            try {
              return z();
            } finally {
              $ = D;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (z, Q) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var D = $;
            $ = z;
            try {
              return Q();
            } finally {
              $ = D;
            }
          }),
          (o.unstable_scheduleCallback = function (z, Q, D) {
            var h = o.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? h + D : h))
                : (D = h),
              z)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = D + E),
              (z = {
                id: j++,
                callback: Q,
                priorityLevel: z,
                startTime: D,
                expirationTime: E,
                sortIndex: -1,
              }),
              D > h
                ? ((z.sortIndex = D),
                  c(L, z),
                  a(k) === null &&
                    z === a(L) &&
                    (V ? (ie(je), (je = -1)) : (V = !0), ve(G, D - h)))
                : ((z.sortIndex = E), c(k, z), Z || ee || ((Z = !0), Ae(Se))),
              z
            );
          }),
          (o.unstable_shouldYield = kt),
          (o.unstable_wrapCallback = function (z) {
            var Q = $;
            return function () {
              var D = $;
              $ = Q;
              try {
                return z.apply(this, arguments);
              } finally {
                $ = D;
              }
            };
          });
      })(Hu)),
    Hu
  );
}
var ec;
function Ld() {
  return ec || ((ec = 1), (Wu.exports = Rd())), Wu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tc;
function Td() {
  if (tc) return Qe;
  tc = 1;
  var o = Ju(),
    c = Ld();
  function a(e) {
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
  var v = new Set(),
    p = {};
  function w(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (p[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var P = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    k = Object.prototype.hasOwnProperty,
    L =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    j = {},
    _ = {};
  function $(e) {
    return k.call(_, e)
      ? !0
      : k.call(j, e)
      ? !1
      : L.test(e)
      ? (_[e] = !0)
      : ((j[e] = !0), !1);
  }
  function ee(e, t, n, r) {
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
  function Z(e, t, n, r) {
    if (t === null || typeof t > "u" || ee(e, t, n, r)) return !0;
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
  function V(e, t, n, r, l, i, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      A[e] = new V(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new V(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      A[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      A[e] = new V(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        A[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      A[e] = new V(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      A[e] = new V(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      A[e] = new V(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      A[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ie = /[\-:]([a-z])/g;
  function X(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ie, X);
      A[t] = new V(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ie, X);
        A[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ie, X);
      A[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      A[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new V(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      A[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function b(e, t, n, r) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Z(t, n, l, r) && (n = null),
      r || l === null
        ? $(t) &&
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
  var G = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Se = Symbol.for("react.element"),
    xe = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    je = Symbol.for("react.strict_mode"),
    pt = Symbol.for("react.profiler"),
    Ke = Symbol.for("react.provider"),
    kt = Symbol.for("react.context"),
    ht = Symbol.for("react.forward_ref"),
    Ye = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    mt = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    ve = Symbol.for("react.offscreen"),
    z = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (z && e[z]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var D = Object.assign,
    h;
  function E(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = (t && t[1]) || "";
      }
    return (
      `
` +
      h +
      e
    );
  }
  var Y = !1;
  function q(e, t) {
    if (!e || Y) return "";
    Y = !0;
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
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (
          var l = g.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            s = i.length - 1;
          1 <= u && 0 <= s && l[u] !== i[s];

        )
          s--;
        for (; 1 <= u && 0 <= s; u--, s--)
          if (l[u] !== i[s]) {
            if (u !== 1 || s !== 1)
              do
                if ((u--, s--, 0 > s || l[u] !== i[s])) {
                  var f =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      f.includes("<anonymous>") &&
                      (f = f.replace("<anonymous>", e.displayName)),
                    f
                  );
                }
              while (1 <= u && 0 <= s);
            break;
          }
      }
    } finally {
      (Y = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = q(e.type, !1)), e;
      case 11:
        return (e = q(e.type.render, !1)), e;
      case 1:
        return (e = q(e.type, !0)), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case xe:
        return "Portal";
      case pt:
        return "Profiler";
      case je:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case kt:
          return (e.displayName || "Context") + ".Consumer";
        case Ke:
          return (e._context.displayName || "Context") + ".Provider";
        case ht:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case mt:
          return (
            (t = e.displayName || null), t !== null ? t : re(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
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
        return re(t);
      case 8:
        return t === je ? "StrictMode" : "Mode";
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
  function ue(e) {
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
  function de(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xe(e) {
    var t = de(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Lr(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function eo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = de(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Tr(e) {
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
  function Yl(e, t) {
    var n = t.checked;
    return D({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function to(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ue(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function no(e, t) {
    (t = t.checked), t != null && b(e, "checked", t, !1);
  }
  function Xl(e, t) {
    no(e, t);
    var n = ue(t.value),
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
      ? Gl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Gl(e, t.type, ue(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ro(e, t, n) {
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
  function Gl(e, t, n) {
    (t !== "number" || Tr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $n = Array.isArray;
  function pn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ue(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return D({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function lo(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if ($n(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ue(n) };
  }
  function io(e, t) {
    var n = ue(t.value),
      r = ue(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function uo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function oo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? oo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var zr,
    ao = (function (e) {
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
          zr = zr || document.createElement("div"),
            zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = zr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wn = {
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
    Pc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wn).forEach(function (e) {
    Pc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]);
    });
  });
  function so(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function co(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = so(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Nc = D(
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
  function ql(e, t) {
    if (t) {
      if (Nc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function bl(e, t) {
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
  var ei = null;
  function ti(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ni = null,
    hn = null,
    mn = null;
  function fo(e) {
    if ((e = fr(e))) {
      if (typeof ni != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = el(t)), ni(e.stateNode, e.type, t));
    }
  }
  function po(e) {
    hn ? (mn ? mn.push(e) : (mn = [e])) : (hn = e);
  }
  function ho() {
    if (hn) {
      var e = hn,
        t = mn;
      if (((mn = hn = null), fo(e), t)) for (e = 0; e < t.length; e++) fo(t[e]);
    }
  }
  function mo(e, t) {
    return e(t);
  }
  function vo() {}
  var ri = !1;
  function yo(e, t, n) {
    if (ri) return e(t, n);
    ri = !0;
    try {
      return mo(e, t, n);
    } finally {
      (ri = !1), (hn !== null || mn !== null) && (vo(), ho());
    }
  }
  function Hn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = el(n);
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
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var li = !1;
  if (P)
    try {
      var Qn = {};
      Object.defineProperty(Qn, "passive", {
        get: function () {
          li = !0;
        },
      }),
        window.addEventListener("test", Qn, Qn),
        window.removeEventListener("test", Qn, Qn);
    } catch {
      li = !1;
    }
  function Rc(e, t, n, r, l, i, u, s, f) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (C) {
      this.onError(C);
    }
  }
  var Kn = !1,
    jr = null,
    Or = !1,
    ii = null,
    Lc = {
      onError: function (e) {
        (Kn = !0), (jr = e);
      },
    };
  function Tc(e, t, n, r, l, i, u, s, f) {
    (Kn = !1), (jr = null), Rc.apply(Lc, arguments);
  }
  function zc(e, t, n, r, l, i, u, s, f) {
    if ((Tc.apply(this, arguments), Kn)) {
      if (Kn) {
        var g = jr;
        (Kn = !1), (jr = null);
      } else throw Error(a(198));
      Or || ((Or = !0), (ii = g));
    }
  }
  function qt(e) {
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
  function go(e) {
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
  function wo(e) {
    if (qt(e) !== e) throw Error(a(188));
  }
  function jc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = qt(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return wo(l), e;
          if (i === r) return wo(l), t;
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var u = !1, s = l.child; s; ) {
          if (s === n) {
            (u = !0), (n = l), (r = i);
            break;
          }
          if (s === r) {
            (u = !0), (r = l), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = i.child; s; ) {
            if (s === n) {
              (u = !0), (n = i), (r = l);
              break;
            }
            if (s === r) {
              (u = !0), (r = i), (n = l);
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function So(e) {
    return (e = jc(e)), e !== null ? ko(e) : null;
  }
  function ko(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ko(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var xo = c.unstable_scheduleCallback,
    Eo = c.unstable_cancelCallback,
    Oc = c.unstable_shouldYield,
    Ic = c.unstable_requestPaint,
    ge = c.unstable_now,
    Mc = c.unstable_getCurrentPriorityLevel,
    ui = c.unstable_ImmediatePriority,
    Co = c.unstable_UserBlockingPriority,
    Ir = c.unstable_NormalPriority,
    Dc = c.unstable_LowPriority,
    _o = c.unstable_IdlePriority,
    Mr = null,
    vt = null;
  function Fc(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(Mr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Bc,
    Uc = Math.log,
    Ac = Math.LN2;
  function Bc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Uc(e) / Ac) | 0)) | 0;
  }
  var Dr = 64,
    Fr = 4194304;
  function Yn(e) {
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
  function Ur(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var s = u & ~l;
      s !== 0 ? (r = Yn(s)) : ((i &= u), i !== 0 && (r = Yn(i)));
    } else (u = n & ~l), u !== 0 ? (r = Yn(u)) : i !== 0 && (r = Yn(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function $c(e, t) {
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
  function Vc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var u = 31 - ut(i),
        s = 1 << u,
        f = l[u];
      f === -1
        ? (!(s & n) || s & r) && (l[u] = $c(s, t))
        : f <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function oi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Po() {
    var e = Dr;
    return (Dr <<= 1), !(Dr & 4194240) && (Dr = 64), e;
  }
  function ai(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ut(t)),
      (e[t] = n);
  }
  function Wc(e, t) {
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
      var l = 31 - ut(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function si(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ut(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var oe = 0;
  function No(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ro,
    ci,
    Lo,
    To,
    zo,
    fi = !1,
    Ar = [],
    jt = null,
    Ot = null,
    It = null,
    Gn = new Map(),
    Jn = new Map(),
    Mt = [],
    Hc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function jo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ot = null;
        break;
      case "mouseover":
      case "mouseout":
        It = null;
        break;
      case "pointerover":
      case "pointerout":
        Gn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jn.delete(t.pointerId);
    }
  }
  function Zn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = fr(t)), t !== null && ci(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Qc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (jt = Zn(jt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ot = Zn(Ot, e, t, n, r, l)), !0;
      case "mouseover":
        return (It = Zn(It, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return Gn.set(i, Zn(Gn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), Jn.set(i, Zn(Jn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Oo(e) {
    var t = bt(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = go(n)), t !== null)) {
            (e.blockedOn = t),
              zo(e.priority, function () {
                Lo(n);
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
  function Br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (ei = r), n.target.dispatchEvent(r), (ei = null);
      } else return (t = fr(n)), t !== null && ci(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Io(e, t, n) {
    Br(e) && n.delete(t);
  }
  function Kc() {
    (fi = !1),
      jt !== null && Br(jt) && (jt = null),
      Ot !== null && Br(Ot) && (Ot = null),
      It !== null && Br(It) && (It = null),
      Gn.forEach(Io),
      Jn.forEach(Io);
  }
  function qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      fi ||
        ((fi = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Kc)));
  }
  function bn(e) {
    function t(l) {
      return qn(l, e);
    }
    if (0 < Ar.length) {
      qn(Ar[0], e);
      for (var n = 1; n < Ar.length; n++) {
        var r = Ar[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && qn(jt, e),
        Ot !== null && qn(Ot, e),
        It !== null && qn(It, e),
        Gn.forEach(t),
        Jn.forEach(t),
        n = 0;
      n < Mt.length;
      n++
    )
      (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
      Oo(n), n.blockedOn === null && Mt.shift();
  }
  var vn = G.ReactCurrentBatchConfig,
    $r = !0;
  function Yc(e, t, n, r) {
    var l = oe,
      i = vn.transition;
    vn.transition = null;
    try {
      (oe = 1), di(e, t, n, r);
    } finally {
      (oe = l), (vn.transition = i);
    }
  }
  function Xc(e, t, n, r) {
    var l = oe,
      i = vn.transition;
    vn.transition = null;
    try {
      (oe = 4), di(e, t, n, r);
    } finally {
      (oe = l), (vn.transition = i);
    }
  }
  function di(e, t, n, r) {
    if ($r) {
      var l = pi(e, t, n, r);
      if (l === null) Ti(e, t, r, Vr, n), jo(e, r);
      else if (Qc(l, e, t, n, r)) r.stopPropagation();
      else if ((jo(e, r), t & 4 && -1 < Hc.indexOf(e))) {
        for (; l !== null; ) {
          var i = fr(l);
          if (
            (i !== null && Ro(i),
            (i = pi(e, t, n, r)),
            i === null && Ti(e, t, r, Vr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Ti(e, t, r, null, n);
    }
  }
  var Vr = null;
  function pi(e, t, n, r) {
    if (((Vr = null), (e = ti(r)), (e = bt(e)), e !== null))
      if (((t = qt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = go(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Vr = e), null;
  }
  function Mo(e) {
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
        switch (Mc()) {
          case ui:
            return 1;
          case Co:
            return 4;
          case Ir:
          case Dc:
            return 16;
          case _o:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dt = null,
    hi = null,
    Wr = null;
  function Do() {
    if (Wr) return Wr;
    var e,
      t = hi,
      n = t.length,
      r,
      l = "value" in Dt ? Dt.value : Dt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Wr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Hr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Qr() {
    return !0;
  }
  function Fo() {
    return !1;
  }
  function Ge(e) {
    function t(n, r, l, i, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Qr
          : Fo),
        (this.isPropagationStopped = Fo),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Qr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Qr));
        },
        persist: function () {},
        isPersistent: Qr,
      }),
      t
    );
  }
  var yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    mi = Ge(yn),
    er = D({}, yn, { view: 0, detail: 0 }),
    Gc = Ge(er),
    vi,
    yi,
    tr,
    Kr = D({}, er, {
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
      getModifierState: wi,
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
          : (e !== tr &&
              (tr && e.type === "mousemove"
                ? ((vi = e.screenX - tr.screenX), (yi = e.screenY - tr.screenY))
                : (yi = vi = 0),
              (tr = e)),
            vi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : yi;
      },
    }),
    Uo = Ge(Kr),
    Jc = D({}, Kr, { dataTransfer: 0 }),
    Zc = Ge(Jc),
    qc = D({}, er, { relatedTarget: 0 }),
    gi = Ge(qc),
    bc = D({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ef = Ge(bc),
    tf = D({}, yn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    nf = Ge(tf),
    rf = D({}, yn, { data: 0 }),
    Ao = Ge(rf),
    lf = {
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
    uf = {
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
    of = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function af(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = of[e])
      ? !!t[e]
      : !1;
  }
  function wi() {
    return af;
  }
  var sf = D({}, er, {
      key: function (e) {
        if (e.key) {
          var t = lf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Hr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? uf[e.keyCode] || "Unidentified"
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
      getModifierState: wi,
      charCode: function (e) {
        return e.type === "keypress" ? Hr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Hr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    cf = Ge(sf),
    ff = D({}, Kr, {
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
    Bo = Ge(ff),
    df = D({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wi,
    }),
    pf = Ge(df),
    hf = D({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mf = Ge(hf),
    vf = D({}, Kr, {
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
    yf = Ge(vf),
    gf = [9, 13, 27, 32],
    Si = P && "CompositionEvent" in window,
    nr = null;
  P && "documentMode" in document && (nr = document.documentMode);
  var wf = P && "TextEvent" in window && !nr,
    $o = P && (!Si || (nr && 8 < nr && 11 >= nr)),
    Vo = " ",
    Wo = !1;
  function Ho(e, t) {
    switch (e) {
      case "keyup":
        return gf.indexOf(t.keyCode) !== -1;
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
  function Qo(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var gn = !1;
  function Sf(e, t) {
    switch (e) {
      case "compositionend":
        return Qo(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wo = !0), Vo);
      case "textInput":
        return (e = t.data), e === Vo && Wo ? null : e;
      default:
        return null;
    }
  }
  function kf(e, t) {
    if (gn)
      return e === "compositionend" || (!Si && Ho(e, t))
        ? ((e = Do()), (Wr = hi = Dt = null), (gn = !1), e)
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
        return $o && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xf = {
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
  function Ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xf[e.type] : t === "textarea";
  }
  function Yo(e, t, n, r) {
    po(r),
      (t = Zr(t, "onChange")),
      0 < t.length &&
        ((n = new mi("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var rr = null,
    lr = null;
  function Ef(e) {
    fa(e, 0);
  }
  function Yr(e) {
    var t = En(e);
    if (eo(t)) return e;
  }
  function Cf(e, t) {
    if (e === "change") return t;
  }
  var Xo = !1;
  if (P) {
    var ki;
    if (P) {
      var xi = "oninput" in document;
      if (!xi) {
        var Go = document.createElement("div");
        Go.setAttribute("oninput", "return;"),
          (xi = typeof Go.oninput == "function");
      }
      ki = xi;
    } else ki = !1;
    Xo = ki && (!document.documentMode || 9 < document.documentMode);
  }
  function Jo() {
    rr && (rr.detachEvent("onpropertychange", Zo), (lr = rr = null));
  }
  function Zo(e) {
    if (e.propertyName === "value" && Yr(lr)) {
      var t = [];
      Yo(t, lr, e, ti(e)), yo(Ef, t);
    }
  }
  function _f(e, t, n) {
    e === "focusin"
      ? (Jo(), (rr = t), (lr = n), rr.attachEvent("onpropertychange", Zo))
      : e === "focusout" && Jo();
  }
  function Pf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Yr(lr);
  }
  function Nf(e, t) {
    if (e === "click") return Yr(t);
  }
  function Rf(e, t) {
    if (e === "input" || e === "change") return Yr(t);
  }
  function Lf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ot = typeof Object.is == "function" ? Object.is : Lf;
  function ir(e, t) {
    if (ot(e, t)) return !0;
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
      if (!k.call(t, l) || !ot(e[l], t[l])) return !1;
    }
    return !0;
  }
  function qo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bo(e, t) {
    var n = qo(e);
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
      n = qo(n);
    }
  }
  function ea(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ea(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ta() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Tr(e.document);
    }
    return t;
  }
  function Ei(e) {
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
  function Tf(e) {
    var t = ta(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ea(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ei(n)) {
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
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = bo(n, i));
          var u = bo(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
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
  var zf = P && "documentMode" in document && 11 >= document.documentMode,
    wn = null,
    Ci = null,
    ur = null,
    _i = !1;
  function na(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _i ||
      wn == null ||
      wn !== Tr(r) ||
      ((r = wn),
      "selectionStart" in r && Ei(r)
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
      (ur && ir(ur, r)) ||
        ((ur = r),
        (r = Zr(Ci, "onSelect")),
        0 < r.length &&
          ((t = new mi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = wn))));
  }
  function Xr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Sn = {
      animationend: Xr("Animation", "AnimationEnd"),
      animationiteration: Xr("Animation", "AnimationIteration"),
      animationstart: Xr("Animation", "AnimationStart"),
      transitionend: Xr("Transition", "TransitionEnd"),
    },
    Pi = {},
    ra = {};
  P &&
    ((ra = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sn.animationend.animation,
      delete Sn.animationiteration.animation,
      delete Sn.animationstart.animation),
    "TransitionEvent" in window || delete Sn.transitionend.transition);
  function Gr(e) {
    if (Pi[e]) return Pi[e];
    if (!Sn[e]) return e;
    var t = Sn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ra) return (Pi[e] = t[n]);
    return e;
  }
  var la = Gr("animationend"),
    ia = Gr("animationiteration"),
    ua = Gr("animationstart"),
    oa = Gr("transitionend"),
    aa = new Map(),
    sa =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ft(e, t) {
    aa.set(e, t), w(t, [e]);
  }
  for (var Ni = 0; Ni < sa.length; Ni++) {
    var Ri = sa[Ni],
      jf = Ri.toLowerCase(),
      Of = Ri[0].toUpperCase() + Ri.slice(1);
    Ft(jf, "on" + Of);
  }
  Ft(la, "onAnimationEnd"),
    Ft(ia, "onAnimationIteration"),
    Ft(ua, "onAnimationStart"),
    Ft("dblclick", "onDoubleClick"),
    Ft("focusin", "onFocus"),
    Ft("focusout", "onBlur"),
    Ft(oa, "onTransitionEnd"),
    S("onMouseEnter", ["mouseout", "mouseover"]),
    S("onMouseLeave", ["mouseout", "mouseover"]),
    S("onPointerEnter", ["pointerout", "pointerover"]),
    S("onPointerLeave", ["pointerout", "pointerover"]),
    w(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    w(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    w(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    w(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    w(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    If = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(or)
    );
  function ca(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), zc(r, t, void 0, e), (e.currentTarget = null);
  }
  function fa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var s = r[u],
              f = s.instance,
              g = s.currentTarget;
            if (((s = s.listener), f !== i && l.isPropagationStopped()))
              break e;
            ca(l, s, g), (i = f);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((s = r[u]),
              (f = s.instance),
              (g = s.currentTarget),
              (s = s.listener),
              f !== i && l.isPropagationStopped())
            )
              break e;
            ca(l, s, g), (i = f);
          }
      }
    }
    if (Or) throw ((e = ii), (Or = !1), (ii = null), e);
  }
  function ce(e, t) {
    var n = t[Di];
    n === void 0 && (n = t[Di] = new Set());
    var r = e + "__bubble";
    n.has(r) || (da(t, e, 2, !1), n.add(r));
  }
  function Li(e, t, n) {
    var r = 0;
    t && (r |= 4), da(n, e, r, t);
  }
  var Jr = "_reactListening" + Math.random().toString(36).slice(2);
  function ar(e) {
    if (!e[Jr]) {
      (e[Jr] = !0),
        v.forEach(function (n) {
          n !== "selectionchange" && (If.has(n) || Li(n, !1, e), Li(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || ((t[Jr] = !0), Li("selectionchange", !1, t));
    }
  }
  function da(e, t, n, r) {
    switch (Mo(t)) {
      case 1:
        var l = Yc;
        break;
      case 4:
        l = Xc;
        break;
      default:
        l = di;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !li ||
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
  function Ti(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var s = r.stateNode.containerInfo;
          if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var f = u.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = u.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (((u = bt(s)), u === null)) return;
            if (((f = u.tag), f === 5 || f === 6)) {
              r = i = u;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    yo(function () {
      var g = i,
        C = ti(n),
        N = [];
      e: {
        var x = aa.get(e);
        if (x !== void 0) {
          var O = mi,
            F = e;
          switch (e) {
            case "keypress":
              if (Hr(n) === 0) break e;
            case "keydown":
            case "keyup":
              O = cf;
              break;
            case "focusin":
              (F = "focus"), (O = gi);
              break;
            case "focusout":
              (F = "blur"), (O = gi);
              break;
            case "beforeblur":
            case "afterblur":
              O = gi;
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
              O = Uo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Zc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = pf;
              break;
            case la:
            case ia:
            case ua:
              O = ef;
              break;
            case oa:
              O = mf;
              break;
            case "scroll":
              O = Gc;
              break;
            case "wheel":
              O = yf;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = nf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Bo;
          }
          var U = (t & 4) !== 0,
            we = !U && e === "scroll",
            m = U ? (x !== null ? x + "Capture" : null) : x;
          U = [];
          for (var d = g, y; d !== null; ) {
            y = d;
            var R = y.stateNode;
            if (
              (y.tag === 5 &&
                R !== null &&
                ((y = R),
                m !== null &&
                  ((R = Hn(d, m)), R != null && U.push(sr(d, R, y)))),
              we)
            )
              break;
            d = d.return;
          }
          0 < U.length &&
            ((x = new O(x, F, null, n, C)), N.push({ event: x, listeners: U }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((x = e === "mouseover" || e === "pointerover"),
            (O = e === "mouseout" || e === "pointerout"),
            x &&
              n !== ei &&
              (F = n.relatedTarget || n.fromElement) &&
              (bt(F) || F[xt]))
          )
            break e;
          if (
            (O || x) &&
            ((x =
              C.window === C
                ? C
                : (x = C.ownerDocument)
                ? x.defaultView || x.parentWindow
                : window),
            O
              ? ((F = n.relatedTarget || n.toElement),
                (O = g),
                (F = F ? bt(F) : null),
                F !== null &&
                  ((we = qt(F)), F !== we || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((O = null), (F = g)),
            O !== F)
          ) {
            if (
              ((U = Uo),
              (R = "onMouseLeave"),
              (m = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((U = Bo),
                (R = "onPointerLeave"),
                (m = "onPointerEnter"),
                (d = "pointer")),
              (we = O == null ? x : En(O)),
              (y = F == null ? x : En(F)),
              (x = new U(R, d + "leave", O, n, C)),
              (x.target = we),
              (x.relatedTarget = y),
              (R = null),
              bt(C) === g &&
                ((U = new U(m, d + "enter", F, n, C)),
                (U.target = y),
                (U.relatedTarget = we),
                (R = U)),
              (we = R),
              O && F)
            )
              t: {
                for (U = O, m = F, d = 0, y = U; y; y = kn(y)) d++;
                for (y = 0, R = m; R; R = kn(R)) y++;
                for (; 0 < d - y; ) (U = kn(U)), d--;
                for (; 0 < y - d; ) (m = kn(m)), y--;
                for (; d--; ) {
                  if (U === m || (m !== null && U === m.alternate)) break t;
                  (U = kn(U)), (m = kn(m));
                }
                U = null;
              }
            else U = null;
            O !== null && pa(N, x, O, U, !1),
              F !== null && we !== null && pa(N, we, F, U, !0);
          }
        }
        e: {
          if (
            ((x = g ? En(g) : window),
            (O = x.nodeName && x.nodeName.toLowerCase()),
            O === "select" || (O === "input" && x.type === "file"))
          )
            var B = Cf;
          else if (Ko(x))
            if (Xo) B = Rf;
            else {
              B = Pf;
              var W = _f;
            }
          else
            (O = x.nodeName) &&
              O.toLowerCase() === "input" &&
              (x.type === "checkbox" || x.type === "radio") &&
              (B = Nf);
          if (B && (B = B(e, g))) {
            Yo(N, B, n, C);
            break e;
          }
          W && W(e, x, g),
            e === "focusout" &&
              (W = x._wrapperState) &&
              W.controlled &&
              x.type === "number" &&
              Gl(x, "number", x.value);
        }
        switch (((W = g ? En(g) : window), e)) {
          case "focusin":
            (Ko(W) || W.contentEditable === "true") &&
              ((wn = W), (Ci = g), (ur = null));
            break;
          case "focusout":
            ur = Ci = wn = null;
            break;
          case "mousedown":
            _i = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_i = !1), na(N, n, C);
            break;
          case "selectionchange":
            if (zf) break;
          case "keydown":
          case "keyup":
            na(N, n, C);
        }
        var H;
        if (Si)
          e: {
            switch (e) {
              case "compositionstart":
                var K = "onCompositionStart";
                break e;
              case "compositionend":
                K = "onCompositionEnd";
                break e;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break e;
            }
            K = void 0;
          }
        else
          gn
            ? Ho(e, n) && (K = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (K = "onCompositionStart");
        K &&
          ($o &&
            n.locale !== "ko" &&
            (gn || K !== "onCompositionStart"
              ? K === "onCompositionEnd" && gn && (H = Do())
              : ((Dt = C),
                (hi = "value" in Dt ? Dt.value : Dt.textContent),
                (gn = !0))),
          (W = Zr(g, K)),
          0 < W.length &&
            ((K = new Ao(K, e, null, n, C)),
            N.push({ event: K, listeners: W }),
            H ? (K.data = H) : ((H = Qo(n)), H !== null && (K.data = H)))),
          (H = wf ? Sf(e, n) : kf(e, n)) &&
            ((g = Zr(g, "onBeforeInput")),
            0 < g.length &&
              ((C = new Ao("onBeforeInput", "beforeinput", null, n, C)),
              N.push({ event: C, listeners: g }),
              (C.data = H)));
      }
      fa(N, t);
    });
  }
  function sr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Hn(e, n)),
        i != null && r.unshift(sr(e, i, l)),
        (i = Hn(e, t)),
        i != null && r.push(sr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function kn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function pa(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var s = n,
        f = s.alternate,
        g = s.stateNode;
      if (f !== null && f === r) break;
      s.tag === 5 &&
        g !== null &&
        ((s = g),
        l
          ? ((f = Hn(n, i)), f != null && u.unshift(sr(n, f, s)))
          : l || ((f = Hn(n, i)), f != null && u.push(sr(n, f, s)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Mf = /\r\n?/g,
    Df = /\u0000|\uFFFD/g;
  function ha(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Mf,
        `
`
      )
      .replace(Df, "");
  }
  function qr(e, t, n) {
    if (((t = ha(t)), ha(e) !== t && n)) throw Error(a(425));
  }
  function br() {}
  var zi = null,
    ji = null;
  function Oi(e, t) {
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
  var Ii = typeof setTimeout == "function" ? setTimeout : void 0,
    Ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ma = typeof Promise == "function" ? Promise : void 0,
    Uf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ma < "u"
        ? function (e) {
            return ma.resolve(null).then(e).catch(Af);
          }
        : Ii;
  function Af(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Mi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), bn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    bn(t);
  }
  function Ut(e) {
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
  function va(e) {
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
  var xn = Math.random().toString(36).slice(2),
    yt = "__reactFiber$" + xn,
    cr = "__reactProps$" + xn,
    xt = "__reactContainer$" + xn,
    Di = "__reactEvents$" + xn,
    Bf = "__reactListeners$" + xn,
    $f = "__reactHandles$" + xn;
  function bt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[xt] || n[yt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = va(e); e !== null; ) {
            if ((n = e[yt])) return n;
            e = va(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function fr(e) {
    return (
      (e = e[yt] || e[xt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function el(e) {
    return e[cr] || null;
  }
  var Fi = [],
    Cn = -1;
  function At(e) {
    return { current: e };
  }
  function fe(e) {
    0 > Cn || ((e.current = Fi[Cn]), (Fi[Cn] = null), Cn--);
  }
  function se(e, t) {
    Cn++, (Fi[Cn] = e.current), (e.current = t);
  }
  var Bt = {},
    Oe = At(Bt),
    Be = At(!1),
    en = Bt;
  function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function $e(e) {
    return (e = e.childContextTypes), e != null;
  }
  function tl() {
    fe(Be), fe(Oe);
  }
  function ya(e, t, n) {
    if (Oe.current !== Bt) throw Error(a(168));
    se(Oe, t), se(Be, n);
  }
  function ga(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, ae(e) || "Unknown", l));
    return D({}, n, r);
  }
  function nl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Bt),
      (en = Oe.current),
      se(Oe, e),
      se(Be, Be.current),
      !0
    );
  }
  function wa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = ga(e, t, en)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        fe(Be),
        fe(Oe),
        se(Oe, e))
      : fe(Be),
      se(Be, n);
  }
  var Et = null,
    rl = !1,
    Ui = !1;
  function Sa(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  function Vf(e) {
    (rl = !0), Sa(e);
  }
  function $t() {
    if (!Ui && Et !== null) {
      Ui = !0;
      var e = 0,
        t = oe;
      try {
        var n = Et;
        for (oe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Et = null), (rl = !1);
      } catch (l) {
        throw (Et !== null && (Et = Et.slice(e + 1)), xo(ui, $t), l);
      } finally {
        (oe = t), (Ui = !1);
      }
    }
    return null;
  }
  var Pn = [],
    Nn = 0,
    ll = null,
    il = 0,
    be = [],
    et = 0,
    tn = null,
    Ct = 1,
    _t = "";
  function nn(e, t) {
    (Pn[Nn++] = il), (Pn[Nn++] = ll), (ll = e), (il = t);
  }
  function ka(e, t, n) {
    (be[et++] = Ct), (be[et++] = _t), (be[et++] = tn), (tn = e);
    var r = Ct;
    e = _t;
    var l = 32 - ut(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - ut(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      (i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Ct = (1 << (32 - ut(t) + l)) | (n << l) | r),
        (_t = i + e);
    } else (Ct = (1 << i) | (n << l) | r), (_t = e);
  }
  function Ai(e) {
    e.return !== null && (nn(e, 1), ka(e, 1, 0));
  }
  function Bi(e) {
    for (; e === ll; )
      (ll = Pn[--Nn]), (Pn[Nn] = null), (il = Pn[--Nn]), (Pn[Nn] = null);
    for (; e === tn; )
      (tn = be[--et]),
        (be[et] = null),
        (_t = be[--et]),
        (be[et] = null),
        (Ct = be[--et]),
        (be[et] = null);
  }
  var Je = null,
    Ze = null,
    pe = !1,
    at = null;
  function xa(e, t) {
    var n = lt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ea(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Je = e), (Ze = Ut(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Je = e), (Ze = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = tn !== null ? { id: Ct, overflow: _t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = lt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Je = e),
              (Ze = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function $i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vi(e) {
    if (pe) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!Ea(e, t)) {
          if ($i(e)) throw Error(a(418));
          t = Ut(n.nextSibling);
          var r = Je;
          t && Ea(e, t)
            ? xa(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (Je = e));
        }
      } else {
        if ($i(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (pe = !1), (Je = e);
      }
    }
  }
  function Ca(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Je = e;
  }
  function ul(e) {
    if (e !== Je) return !1;
    if (!pe) return Ca(e), (pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps))),
      t && (t = Ze))
    ) {
      if ($i(e)) throw (_a(), Error(a(418)));
      for (; t; ) xa(e, t), (t = Ut(t.nextSibling));
    }
    if ((Ca(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = Ut(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = Je ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function _a() {
    for (var e = Ze; e; ) e = Ut(e.nextSibling);
  }
  function Rn() {
    (Ze = Je = null), (pe = !1);
  }
  function Wi(e) {
    at === null ? (at = [e]) : at.push(e);
  }
  var Wf = G.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var s = l.refs;
              u === null ? delete s[i] : (s[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function ol(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Pa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Na(e) {
    function t(m, d) {
      if (e) {
        var y = m.deletions;
        y === null ? ((m.deletions = [d]), (m.flags |= 16)) : y.push(d);
      }
    }
    function n(m, d) {
      if (!e) return null;
      for (; d !== null; ) t(m, d), (d = d.sibling);
      return null;
    }
    function r(m, d) {
      for (m = new Map(); d !== null; )
        d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
      return m;
    }
    function l(m, d) {
      return (m = Gt(m, d)), (m.index = 0), (m.sibling = null), m;
    }
    function i(m, d, y) {
      return (
        (m.index = y),
        e
          ? ((y = m.alternate),
            y !== null
              ? ((y = y.index), y < d ? ((m.flags |= 2), d) : y)
              : ((m.flags |= 2), d))
          : ((m.flags |= 1048576), d)
      );
    }
    function u(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function s(m, d, y, R) {
      return d === null || d.tag !== 6
        ? ((d = Iu(y, m.mode, R)), (d.return = m), d)
        : ((d = l(d, y)), (d.return = m), d);
    }
    function f(m, d, y, R) {
      var B = y.type;
      return B === Le
        ? C(m, d, y.props.children, R, y.key)
        : d !== null &&
          (d.elementType === B ||
            (typeof B == "object" &&
              B !== null &&
              B.$$typeof === Ae &&
              Pa(B) === d.type))
        ? ((R = l(d, y.props)), (R.ref = dr(m, d, y)), (R.return = m), R)
        : ((R = zl(y.type, y.key, y.props, null, m.mode, R)),
          (R.ref = dr(m, d, y)),
          (R.return = m),
          R);
    }
    function g(m, d, y, R) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== y.containerInfo ||
        d.stateNode.implementation !== y.implementation
        ? ((d = Mu(y, m.mode, R)), (d.return = m), d)
        : ((d = l(d, y.children || [])), (d.return = m), d);
    }
    function C(m, d, y, R, B) {
      return d === null || d.tag !== 7
        ? ((d = fn(y, m.mode, R, B)), (d.return = m), d)
        : ((d = l(d, y)), (d.return = m), d);
    }
    function N(m, d, y) {
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return (d = Iu("" + d, m.mode, y)), (d.return = m), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Se:
            return (
              (y = zl(d.type, d.key, d.props, null, m.mode, y)),
              (y.ref = dr(m, null, d)),
              (y.return = m),
              y
            );
          case xe:
            return (d = Mu(d, m.mode, y)), (d.return = m), d;
          case Ae:
            var R = d._init;
            return N(m, R(d._payload), y);
        }
        if ($n(d) || Q(d))
          return (d = fn(d, m.mode, y, null)), (d.return = m), d;
        ol(m, d);
      }
      return null;
    }
    function x(m, d, y, R) {
      var B = d !== null ? d.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return B !== null ? null : s(m, d, "" + y, R);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Se:
            return y.key === B ? f(m, d, y, R) : null;
          case xe:
            return y.key === B ? g(m, d, y, R) : null;
          case Ae:
            return (B = y._init), x(m, d, B(y._payload), R);
        }
        if ($n(y) || Q(y)) return B !== null ? null : C(m, d, y, R, null);
        ol(m, y);
      }
      return null;
    }
    function O(m, d, y, R, B) {
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return (m = m.get(y) || null), s(d, m, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Se:
            return (
              (m = m.get(R.key === null ? y : R.key) || null), f(d, m, R, B)
            );
          case xe:
            return (
              (m = m.get(R.key === null ? y : R.key) || null), g(d, m, R, B)
            );
          case Ae:
            var W = R._init;
            return O(m, d, y, W(R._payload), B);
        }
        if ($n(R) || Q(R)) return (m = m.get(y) || null), C(d, m, R, B, null);
        ol(d, R);
      }
      return null;
    }
    function F(m, d, y, R) {
      for (
        var B = null, W = null, H = d, K = (d = 0), Re = null;
        H !== null && K < y.length;
        K++
      ) {
        H.index > K ? ((Re = H), (H = null)) : (Re = H.sibling);
        var le = x(m, H, y[K], R);
        if (le === null) {
          H === null && (H = Re);
          break;
        }
        e && H && le.alternate === null && t(m, H),
          (d = i(le, d, K)),
          W === null ? (B = le) : (W.sibling = le),
          (W = le),
          (H = Re);
      }
      if (K === y.length) return n(m, H), pe && nn(m, K), B;
      if (H === null) {
        for (; K < y.length; K++)
          (H = N(m, y[K], R)),
            H !== null &&
              ((d = i(H, d, K)),
              W === null ? (B = H) : (W.sibling = H),
              (W = H));
        return pe && nn(m, K), B;
      }
      for (H = r(m, H); K < y.length; K++)
        (Re = O(H, m, K, y[K], R)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              H.delete(Re.key === null ? K : Re.key),
            (d = i(Re, d, K)),
            W === null ? (B = Re) : (W.sibling = Re),
            (W = Re));
      return (
        e &&
          H.forEach(function (Jt) {
            return t(m, Jt);
          }),
        pe && nn(m, K),
        B
      );
    }
    function U(m, d, y, R) {
      var B = Q(y);
      if (typeof B != "function") throw Error(a(150));
      if (((y = B.call(y)), y == null)) throw Error(a(151));
      for (
        var W = (B = null), H = d, K = (d = 0), Re = null, le = y.next();
        H !== null && !le.done;
        K++, le = y.next()
      ) {
        H.index > K ? ((Re = H), (H = null)) : (Re = H.sibling);
        var Jt = x(m, H, le.value, R);
        if (Jt === null) {
          H === null && (H = Re);
          break;
        }
        e && H && Jt.alternate === null && t(m, H),
          (d = i(Jt, d, K)),
          W === null ? (B = Jt) : (W.sibling = Jt),
          (W = Jt),
          (H = Re);
      }
      if (le.done) return n(m, H), pe && nn(m, K), B;
      if (H === null) {
        for (; !le.done; K++, le = y.next())
          (le = N(m, le.value, R)),
            le !== null &&
              ((d = i(le, d, K)),
              W === null ? (B = le) : (W.sibling = le),
              (W = le));
        return pe && nn(m, K), B;
      }
      for (H = r(m, H); !le.done; K++, le = y.next())
        (le = O(H, m, K, le.value, R)),
          le !== null &&
            (e &&
              le.alternate !== null &&
              H.delete(le.key === null ? K : le.key),
            (d = i(le, d, K)),
            W === null ? (B = le) : (W.sibling = le),
            (W = le));
      return (
        e &&
          H.forEach(function (kd) {
            return t(m, kd);
          }),
        pe && nn(m, K),
        B
      );
    }
    function we(m, d, y, R) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Le &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Se:
            e: {
              for (var B = y.key, W = d; W !== null; ) {
                if (W.key === B) {
                  if (((B = y.type), B === Le)) {
                    if (W.tag === 7) {
                      n(m, W.sibling),
                        (d = l(W, y.props.children)),
                        (d.return = m),
                        (m = d);
                      break e;
                    }
                  } else if (
                    W.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Ae &&
                      Pa(B) === W.type)
                  ) {
                    n(m, W.sibling),
                      (d = l(W, y.props)),
                      (d.ref = dr(m, W, y)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                  n(m, W);
                  break;
                } else t(m, W);
                W = W.sibling;
              }
              y.type === Le
                ? ((d = fn(y.props.children, m.mode, R, y.key)),
                  (d.return = m),
                  (m = d))
                : ((R = zl(y.type, y.key, y.props, null, m.mode, R)),
                  (R.ref = dr(m, d, y)),
                  (R.return = m),
                  (m = R));
            }
            return u(m);
          case xe:
            e: {
              for (W = y.key; d !== null; ) {
                if (d.key === W)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === y.containerInfo &&
                    d.stateNode.implementation === y.implementation
                  ) {
                    n(m, d.sibling),
                      (d = l(d, y.children || [])),
                      (d.return = m),
                      (m = d);
                    break e;
                  } else {
                    n(m, d);
                    break;
                  }
                else t(m, d);
                d = d.sibling;
              }
              (d = Mu(y, m.mode, R)), (d.return = m), (m = d);
            }
            return u(m);
          case Ae:
            return (W = y._init), we(m, d, W(y._payload), R);
        }
        if ($n(y)) return F(m, d, y, R);
        if (Q(y)) return U(m, d, y, R);
        ol(m, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number"
        ? ((y = "" + y),
          d !== null && d.tag === 6
            ? (n(m, d.sibling), (d = l(d, y)), (d.return = m), (m = d))
            : (n(m, d), (d = Iu(y, m.mode, R)), (d.return = m), (m = d)),
          u(m))
        : n(m, d);
    }
    return we;
  }
  var Ln = Na(!0),
    Ra = Na(!1),
    al = At(null),
    sl = null,
    Tn = null,
    Hi = null;
  function Qi() {
    Hi = Tn = sl = null;
  }
  function Ki(e) {
    var t = al.current;
    fe(al), (e._currentValue = t);
  }
  function Yi(e, t, n) {
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
  function zn(e, t) {
    (sl = e),
      (Hi = Tn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ve = !0), (e.firstContext = null));
  }
  function tt(e) {
    var t = e._currentValue;
    if (Hi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
        if (sl === null) throw Error(a(308));
        (Tn = e), (sl.dependencies = { lanes: 0, firstContext: e });
      } else Tn = Tn.next = e;
    return t;
  }
  var rn = null;
  function Xi(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  function La(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Xi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Pt(e, r)
    );
  }
  function Pt(e, t) {
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
  var Vt = !1;
  function Gi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ta(e, t) {
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
  function Nt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), te & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Pt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Xi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Pt(e, n)
    );
  }
  function cl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), si(e, n);
    }
  }
  function za(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
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
  function fl(e, t, n, r) {
    var l = e.updateQueue;
    Vt = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var f = s,
        g = f.next;
      (f.next = null), u === null ? (i = g) : (u.next = g), (u = f);
      var C = e.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (s = C.lastBaseUpdate),
        s !== u &&
          (s === null ? (C.firstBaseUpdate = g) : (s.next = g),
          (C.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var N = l.baseState;
      (u = 0), (C = g = f = null), (s = i);
      do {
        var x = s.lane,
          O = s.eventTime;
        if ((r & x) === x) {
          C !== null &&
            (C = C.next =
              {
                eventTime: O,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var F = e,
              U = s;
            switch (((x = t), (O = n), U.tag)) {
              case 1:
                if (((F = U.payload), typeof F == "function")) {
                  N = F.call(O, N, x);
                  break e;
                }
                N = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = U.payload),
                  (x = typeof F == "function" ? F.call(O, N, x) : F),
                  x == null)
                )
                  break e;
                N = D({}, N, x);
                break e;
              case 2:
                Vt = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (x = l.effects),
            x === null ? (l.effects = [s]) : x.push(s));
        } else
          (O = {
            eventTime: O,
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            C === null ? ((g = C = O), (f = N)) : (C = C.next = O),
            (u |= x);
        if (((s = s.next), s === null)) {
          if (((s = l.shared.pending), s === null)) break;
          (x = s),
            (s = x.next),
            (x.next = null),
            (l.lastBaseUpdate = x),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (C === null && (f = N),
        (l.baseState = f),
        (l.firstBaseUpdate = g),
        (l.lastBaseUpdate = C),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (on |= u), (e.lanes = u), (e.memoizedState = N);
    }
  }
  function ja(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var pr = {},
    gt = At(pr),
    hr = At(pr),
    mr = At(pr);
  function ln(e) {
    if (e === pr) throw Error(a(174));
    return e;
  }
  function Ji(e, t) {
    switch ((se(mr, t), se(hr, e), se(gt, pr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Zl(t, e));
    }
    fe(gt), se(gt, t);
  }
  function jn() {
    fe(gt), fe(hr), fe(mr);
  }
  function Oa(e) {
    ln(mr.current);
    var t = ln(gt.current),
      n = Zl(t, e.type);
    t !== n && (se(hr, e), se(gt, n));
  }
  function Zi(e) {
    hr.current === e && (fe(gt), fe(hr));
  }
  var he = At(0);
  function dl(e) {
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
  var qi = [];
  function bi() {
    for (var e = 0; e < qi.length; e++)
      qi[e]._workInProgressVersionPrimary = null;
    qi.length = 0;
  }
  var pl = G.ReactCurrentDispatcher,
    eu = G.ReactCurrentBatchConfig,
    un = 0,
    me = null,
    Ee = null,
    Pe = null,
    hl = !1,
    vr = !1,
    yr = 0,
    Hf = 0;
  function Ie() {
    throw Error(a(321));
  }
  function tu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ot(e[n], t[n])) return !1;
    return !0;
  }
  function nu(e, t, n, r, l, i) {
    if (
      ((un = i),
      (me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (pl.current = e === null || e.memoizedState === null ? Xf : Gf),
      (e = n(r, l)),
      vr)
    ) {
      i = 0;
      do {
        if (((vr = !1), (yr = 0), 25 <= i)) throw Error(a(301));
        (i += 1),
          (Pe = Ee = null),
          (t.updateQueue = null),
          (pl.current = Jf),
          (e = n(r, l));
      } while (vr);
    }
    if (
      ((pl.current = yl),
      (t = Ee !== null && Ee.next !== null),
      (un = 0),
      (Pe = Ee = me = null),
      (hl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function ru() {
    var e = yr !== 0;
    return (yr = 0), e;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Pe === null ? (me.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
  }
  function nt() {
    if (Ee === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Pe === null ? me.memoizedState : Pe.next;
    if (t !== null) (Pe = t), (Ee = e);
    else {
      if (e === null) throw Error(a(310));
      (Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null,
        }),
        Pe === null ? (me.memoizedState = Pe = e) : (Pe = Pe.next = e);
    }
    return Pe;
  }
  function gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function lu(e) {
    var t = nt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Ee,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = i.next), (i.next = u);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var s = (u = null),
        f = null,
        g = i;
      do {
        var C = g.lane;
        if ((un & C) === C)
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (r = g.hasEagerState ? g.eagerState : e(r, g.action));
        else {
          var N = {
            lane: C,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          f === null ? ((s = f = N), (u = r)) : (f = f.next = N),
            (me.lanes |= C),
            (on |= C);
        }
        g = g.next;
      } while (g !== null && g !== i);
      f === null ? (u = r) : (f.next = s),
        ot(r, t.memoizedState) || (Ve = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = f),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (me.lanes |= i), (on |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function iu(e) {
    var t = nt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== l);
      ot(i, t.memoizedState) || (Ve = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Ia() {}
  function Ma(e, t) {
    var n = me,
      r = nt(),
      l = t(),
      i = !ot(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ve = !0)),
      (r = r.queue),
      uu(Ua.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        wr(9, Fa.bind(null, n, r, l, t), void 0, null),
        Ne === null)
      )
        throw Error(a(349));
      un & 30 || Da(n, t, l);
    }
    return l;
  }
  function Da(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (me.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Fa(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Aa(t) && Ba(e);
  }
  function Ua(e, t, n) {
    return n(function () {
      Aa(t) && Ba(e);
    });
  }
  function Aa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ot(e, n);
    } catch {
      return !0;
    }
  }
  function Ba(e) {
    var t = Pt(e, 1);
    t !== null && dt(t, e, 1, -1);
  }
  function $a(e) {
    var t = wt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Yf.bind(null, me, e)),
      [t.memoizedState, e]
    );
  }
  function wr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Va() {
    return nt().memoizedState;
  }
  function ml(e, t, n, r) {
    var l = wt();
    (me.flags |= e),
      (l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function vl(e, t, n, r) {
    var l = nt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ee !== null) {
      var u = Ee.memoizedState;
      if (((i = u.destroy), r !== null && tu(r, u.deps))) {
        l.memoizedState = wr(t, n, i, r);
        return;
      }
    }
    (me.flags |= e), (l.memoizedState = wr(1 | t, n, i, r));
  }
  function Wa(e, t) {
    return ml(8390656, 8, e, t);
  }
  function uu(e, t) {
    return vl(2048, 8, e, t);
  }
  function Ha(e, t) {
    return vl(4, 2, e, t);
  }
  function Qa(e, t) {
    return vl(4, 4, e, t);
  }
  function Ka(e, t) {
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
  function Ya(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), vl(4, 4, Ka.bind(null, t, e), n)
    );
  }
  function ou() {}
  function Xa(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tu(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ga(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ja(e, t, n) {
    return un & 21
      ? (ot(n, t) ||
          ((n = Po()), (me.lanes |= n), (on |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
  }
  function Qf(e, t) {
    var n = oe;
    (oe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = eu.transition;
    eu.transition = {};
    try {
      e(!1), t();
    } finally {
      (oe = n), (eu.transition = r);
    }
  }
  function Za() {
    return nt().memoizedState;
  }
  function Kf(e, t, n) {
    var r = Yt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      qa(e))
    )
      ba(t, n);
    else if (((n = La(e, t, n, r)), n !== null)) {
      var l = Ue();
      dt(n, e, r, l), es(n, t, r);
    }
  }
  function Yf(e, t, n) {
    var r = Yt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (qa(e)) ba(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            s = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = s), ot(s, u))) {
            var f = t.interleaved;
            f === null
              ? ((l.next = l), Xi(t))
              : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = La(e, t, l, r)),
        n !== null && ((l = Ue()), dt(n, e, r, l), es(n, t, r));
    }
  }
  function qa(e) {
    var t = e.alternate;
    return e === me || (t !== null && t === me);
  }
  function ba(e, t) {
    vr = hl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function es(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), si(e, n);
    }
  }
  var yl = {
      readContext: tt,
      useCallback: Ie,
      useContext: Ie,
      useEffect: Ie,
      useImperativeHandle: Ie,
      useInsertionEffect: Ie,
      useLayoutEffect: Ie,
      useMemo: Ie,
      useReducer: Ie,
      useRef: Ie,
      useState: Ie,
      useDebugValue: Ie,
      useDeferredValue: Ie,
      useTransition: Ie,
      useMutableSource: Ie,
      useSyncExternalStore: Ie,
      useId: Ie,
      unstable_isNewReconciler: !1,
    },
    Xf = {
      readContext: tt,
      useCallback: function (e, t) {
        return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: tt,
      useEffect: Wa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ml(4194308, 4, Ka.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ml(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ml(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = wt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = wt();
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
          (e = e.dispatch = Kf.bind(null, me, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: $a,
      useDebugValue: ou,
      useDeferredValue: function (e) {
        return (wt().memoizedState = e);
      },
      useTransition: function () {
        var e = $a(!1),
          t = e[0];
        return (e = Qf.bind(null, e[1])), (wt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = me,
          l = wt();
        if (pe) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Ne === null)) throw Error(a(349));
          un & 30 || Da(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Wa(Ua.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          wr(9, Fa.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = wt(),
          t = Ne.identifierPrefix;
        if (pe) {
          var n = _t,
            r = Ct;
          (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = yr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Hf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Gf = {
      readContext: tt,
      useCallback: Xa,
      useContext: tt,
      useEffect: uu,
      useImperativeHandle: Ya,
      useInsertionEffect: Ha,
      useLayoutEffect: Qa,
      useMemo: Ga,
      useReducer: lu,
      useRef: Va,
      useState: function () {
        return lu(gr);
      },
      useDebugValue: ou,
      useDeferredValue: function (e) {
        var t = nt();
        return Ja(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = lu(gr)[0],
          t = nt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ia,
      useSyncExternalStore: Ma,
      useId: Za,
      unstable_isNewReconciler: !1,
    },
    Jf = {
      readContext: tt,
      useCallback: Xa,
      useContext: tt,
      useEffect: uu,
      useImperativeHandle: Ya,
      useInsertionEffect: Ha,
      useLayoutEffect: Qa,
      useMemo: Ga,
      useReducer: iu,
      useRef: Va,
      useState: function () {
        return iu(gr);
      },
      useDebugValue: ou,
      useDeferredValue: function (e) {
        var t = nt();
        return Ee === null ? (t.memoizedState = e) : Ja(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = iu(gr)[0],
          t = nt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ia,
      useSyncExternalStore: Ma,
      useId: Za,
      unstable_isNewReconciler: !1,
    };
  function st(e, t) {
    if (e && e.defaultProps) {
      (t = D({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function au(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : D({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var gl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? qt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ue(),
        l = Yt(e),
        i = Nt(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Wt(e, i, l)),
        t !== null && (dt(t, e, l, r), cl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ue(),
        l = Yt(e),
        i = Nt(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Wt(e, i, l)),
        t !== null && (dt(t, e, l, r), cl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ue(),
        r = Yt(e),
        l = Nt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Wt(e, l, r)),
        t !== null && (dt(t, e, r, n), cl(t, e, r));
    },
  };
  function ts(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ir(n, r) || !ir(l, i)
        : !0
    );
  }
  function ns(e, t, n) {
    var r = !1,
      l = Bt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = tt(i))
        : ((l = $e(t) ? en : Oe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? _n(e, l) : Bt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = gl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function rs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && gl.enqueueReplaceState(t, t.state, null);
  }
  function su(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Gi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = tt(i))
      : ((i = $e(t) ? en : Oe.current), (l.context = _n(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (au(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && gl.enqueueReplaceState(l, l.state, null),
        fl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function On(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ne(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function cu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function fu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Zf = typeof WeakMap == "function" ? WeakMap : Map;
  function ls(e, t, n) {
    (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        _l || ((_l = !0), (Pu = r)), fu(e, t);
      }),
      n
    );
  }
  function is(e, t, n) {
    (n = Nt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          fu(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          fu(e, t),
            typeof r != "function" &&
              (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Zf();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = fd.bind(null, e, t, n)), t.then(e, e));
  }
  function os(e) {
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
  function as(e, t, n, r, l) {
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
                : ((t = Nt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var qf = G.ReactCurrentOwner,
    Ve = !1;
  function Fe(e, t, n, r) {
    t.child = e === null ? Ra(t, null, n, r) : Ln(t, e.child, n, r);
  }
  function ss(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      zn(t, l),
      (r = nu(e, t, n, r, i, l)),
      (n = ru()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Rt(e, t, l))
        : (pe && n && Ai(t), (t.flags |= 1), Fe(e, t, r, l), t.child)
    );
  }
  function cs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Ou(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), fs(e, t, i, r, l))
        : ((e = zl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ir), n(u, r) && e.ref === t.ref)
      )
        return Rt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Gt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function fs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ir(i, r) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ve = !0);
        else return (t.lanes = e.lanes), Rt(e, t, l);
    }
    return du(e, t, n, r, l);
  }
  function ds(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          se(Mn, qe),
          (qe |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            se(Mn, qe),
            (qe |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          se(Mn, qe),
          (qe |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        se(Mn, qe),
        (qe |= r);
    return Fe(e, t, l, n), t.child;
  }
  function ps(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function du(e, t, n, r, l) {
    var i = $e(n) ? en : Oe.current;
    return (
      (i = _n(t, i)),
      zn(t, l),
      (n = nu(e, t, n, r, i, l)),
      (r = ru()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Rt(e, t, l))
        : (pe && r && Ai(t), (t.flags |= 1), Fe(e, t, n, l), t.child)
    );
  }
  function hs(e, t, n, r, l) {
    if ($e(n)) {
      var i = !0;
      nl(t);
    } else i = !1;
    if ((zn(t, l), t.stateNode === null))
      Sl(e, t), ns(t, n, r), su(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        s = t.memoizedProps;
      u.props = s;
      var f = u.context,
        g = n.contextType;
      typeof g == "object" && g !== null
        ? (g = tt(g))
        : ((g = $e(n) ? en : Oe.current), (g = _n(t, g)));
      var C = n.getDerivedStateFromProps,
        N =
          typeof C == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      N ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((s !== r || f !== g) && rs(t, u, r, g)),
        (Vt = !1);
      var x = t.memoizedState;
      (u.state = x),
        fl(t, r, u, l),
        (f = t.memoizedState),
        s !== r || x !== f || Be.current || Vt
          ? (typeof C == "function" && (au(t, n, C, r), (f = t.memoizedState)),
            (s = Vt || ts(t, n, s, r, x, f, g))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (u.props = r),
            (u.state = f),
            (u.context = g),
            (r = s))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        Ta(e, t),
        (s = t.memoizedProps),
        (g = t.type === t.elementType ? s : st(t.type, s)),
        (u.props = g),
        (N = t.pendingProps),
        (x = u.context),
        (f = n.contextType),
        typeof f == "object" && f !== null
          ? (f = tt(f))
          : ((f = $e(n) ? en : Oe.current), (f = _n(t, f)));
      var O = n.getDerivedStateFromProps;
      (C =
        typeof O == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((s !== N || x !== f) && rs(t, u, r, f)),
        (Vt = !1),
        (x = t.memoizedState),
        (u.state = x),
        fl(t, r, u, l);
      var F = t.memoizedState;
      s !== N || x !== F || Be.current || Vt
        ? (typeof O == "function" && (au(t, n, O, r), (F = t.memoizedState)),
          (g = Vt || ts(t, n, g, r, x, F, f) || !1)
            ? (C ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, F, f),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, F, f)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (s === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (u.props = r),
          (u.state = F),
          (u.context = f),
          (r = g))
        : (typeof u.componentDidUpdate != "function" ||
            (s === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return pu(e, t, n, r, i, l);
  }
  function pu(e, t, n, r, l, i) {
    ps(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && wa(t, n, !1), Rt(e, t, i);
    (r = t.stateNode), (qf.current = t);
    var s =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Ln(t, e.child, null, i)), (t.child = Ln(t, null, s, i)))
        : Fe(e, t, s, i),
      (t.memoizedState = r.state),
      l && wa(t, n, !0),
      t.child
    );
  }
  function ms(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ya(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ya(e, t.context, !1),
      Ji(e, t.containerInfo);
  }
  function vs(e, t, n, r, l) {
    return Rn(), Wi(l), (t.flags |= 256), Fe(e, t, n, r), t.child;
  }
  var hu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ys(e, t, n) {
    var r = t.pendingProps,
      l = he.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      s;
    if (
      ((s = u) ||
        (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      se(he, l & 1),
      e === null)
    )
      return (
        Vi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = jl(u, r, 0, null)),
                (e = fn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = mu(n)),
                (t.memoizedState = hu),
                e)
              : vu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
      return bf(e, t, u, r, s, l, n);
    if (i) {
      (i = r.fallback), (u = t.mode), (l = e.child), (s = l.sibling);
      var f = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = f),
            (t.deletions = null))
          : ((r = Gt(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        s !== null ? (i = Gt(s, i)) : ((i = fn(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? mu(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = hu),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Gt(i, { mode: "visible", children: r.children })),
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
  function vu(e, t) {
    return (
      (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function wl(e, t, n, r) {
    return (
      r !== null && Wi(r),
      Ln(t, e.child, null, n),
      (e = vu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = cu(Error(a(422)))), wl(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = fn(i, l, u, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ln(t, e.child, null, u),
          (t.child.memoizedState = mu(u)),
          (t.memoizedState = hu),
          i);
    if (!(t.mode & 1)) return wl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (i = Error(a(419))), (r = cu(i, r, void 0)), wl(e, t, u, r)
      );
    }
    if (((s = (u & e.childLanes) !== 0), Ve || s)) {
      if (((r = Ne), r !== null)) {
        switch (u & -u) {
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
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Pt(e, l), dt(r, e, l, -1));
      }
      return ju(), (r = cu(Error(a(421)))), wl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = dd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Ze = Ut(l.nextSibling)),
        (Je = t),
        (pe = !0),
        (at = null),
        e !== null &&
          ((be[et++] = Ct),
          (be[et++] = _t),
          (be[et++] = tn),
          (Ct = e.id),
          (_t = e.overflow),
          (tn = t)),
        (t = vu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function gs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Yi(e.return, t, n);
  }
  function yu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function ws(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Fe(e, t, r.children, n), (r = he.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gs(e, n, t);
          else if (e.tag === 19) gs(e, n, t);
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
    if ((se(he, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && dl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            yu(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && dl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          yu(t, !0, n, null, i);
          break;
        case "together":
          yu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Sl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Rt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (on |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Gt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function ed(e, t, n) {
    switch (t.tag) {
      case 3:
        ms(t), Rn();
        break;
      case 5:
        Oa(t);
        break;
      case 1:
        $e(t.type) && nl(t);
        break;
      case 4:
        Ji(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        se(al, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (se(he, he.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? ys(e, t, n)
            : (se(he, he.current & 1),
              (e = Rt(e, t, n)),
              e !== null ? e.sibling : null);
        se(he, he.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return ws(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          se(he, he.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ds(e, t, n);
    }
    return Rt(e, t, n);
  }
  var Ss, gu, ks, xs;
  (Ss = function (e, t) {
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
    (gu = function () {}),
    (ks = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), ln(gt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = Yl(e, l)), (r = Yl(e, r)), (i = []);
            break;
          case "select":
            (l = D({}, l, { value: void 0 })),
              (r = D({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Jl(e, l)), (r = Jl(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = br);
        }
        ql(n, r);
        var u;
        n = null;
        for (g in l)
          if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null)
            if (g === "style") {
              var s = l[g];
              for (u in s) s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              g !== "dangerouslySetInnerHTML" &&
                g !== "children" &&
                g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                g !== "autoFocus" &&
                (p.hasOwnProperty(g)
                  ? i || (i = [])
                  : (i = i || []).push(g, null));
        for (g in r) {
          var f = r[g];
          if (
            ((s = l != null ? l[g] : void 0),
            r.hasOwnProperty(g) && f !== s && (f != null || s != null))
          )
            if (g === "style")
              if (s) {
                for (u in s)
                  !s.hasOwnProperty(u) ||
                    (f && f.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in f)
                  f.hasOwnProperty(u) &&
                    s[u] !== f[u] &&
                    (n || (n = {}), (n[u] = f[u]));
              } else n || (i || (i = []), i.push(g, n)), (n = f);
            else
              g === "dangerouslySetInnerHTML"
                ? ((f = f ? f.__html : void 0),
                  (s = s ? s.__html : void 0),
                  f != null && s !== f && (i = i || []).push(g, f))
                : g === "children"
                ? (typeof f != "string" && typeof f != "number") ||
                  (i = i || []).push(g, "" + f)
                : g !== "suppressContentEditableWarning" &&
                  g !== "suppressHydrationWarning" &&
                  (p.hasOwnProperty(g)
                    ? (f != null && g === "onScroll" && ce("scroll", e),
                      i || s === f || (i = []))
                    : (i = i || []).push(g, f));
        }
        n && (i = i || []).push("style", n);
        var g = i;
        (t.updateQueue = g) && (t.flags |= 4);
      }
    }),
    (xs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Sr(e, t) {
    if (!pe)
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
  function Me(e) {
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
  function td(e, t, n) {
    var r = t.pendingProps;
    switch ((Bi(t), t.tag)) {
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
        return Me(t), null;
      case 1:
        return $e(t.type) && tl(), Me(t), null;
      case 3:
        return (
          (r = t.stateNode),
          jn(),
          fe(Be),
          fe(Oe),
          bi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ul(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), at !== null && (Lu(at), (at = null)))),
          gu(e, t),
          Me(t),
          null
        );
      case 5:
        Zi(t);
        var l = ln(mr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ks(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Me(t), null;
          }
          if (((e = ln(gt.current)), ul(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[yt] = t), (r[cr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ce("cancel", r), ce("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < or.length; l++) ce(or[l], r);
                break;
              case "source":
                ce("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", r), ce("load", r);
                break;
              case "details":
                ce("toggle", r);
                break;
              case "input":
                to(r, i), ce("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  ce("invalid", r);
                break;
              case "textarea":
                lo(r, i), ce("invalid", r);
            }
            ql(n, i), (l = null);
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        qr(r.textContent, s, e),
                      (l = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        qr(r.textContent, s, e),
                      (l = ["children", "" + s]))
                  : p.hasOwnProperty(u) &&
                    s != null &&
                    u === "onScroll" &&
                    ce("scroll", r);
              }
            switch (n) {
              case "input":
                Lr(r), ro(r, i, !0);
                break;
              case "textarea":
                Lr(r), uo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = br);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = oo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[yt] = t),
              (e[cr] = r),
              Ss(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = bl(n, r)), n)) {
                case "dialog":
                  ce("cancel", e), ce("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ce("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < or.length; l++) ce(or[l], e);
                  l = r;
                  break;
                case "source":
                  ce("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ce("error", e), ce("load", e), (l = r);
                  break;
                case "details":
                  ce("toggle", e), (l = r);
                  break;
                case "input":
                  to(e, r), (l = Yl(e, r)), ce("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = D({}, r, { value: void 0 })),
                    ce("invalid", e);
                  break;
                case "textarea":
                  lo(e, r), (l = Jl(e, r)), ce("invalid", e);
                  break;
                default:
                  l = r;
              }
              ql(n, l), (s = l);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var f = s[i];
                  i === "style"
                    ? co(e, f)
                    : i === "dangerouslySetInnerHTML"
                    ? ((f = f ? f.__html : void 0), f != null && ao(e, f))
                    : i === "children"
                    ? typeof f == "string"
                      ? (n !== "textarea" || f !== "") && Vn(e, f)
                      : typeof f == "number" && Vn(e, "" + f)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (p.hasOwnProperty(i)
                        ? f != null && i === "onScroll" && ce("scroll", e)
                        : f != null && b(e, i, f, u));
                }
              switch (n) {
                case "input":
                  Lr(e), ro(e, r, !1);
                  break;
                case "textarea":
                  Lr(e), uo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ue(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? pn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        pn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = br);
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
        return Me(t), null;
      case 6:
        if (e && t.stateNode != null) xs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = ln(mr.current)), ln(gt.current), ul(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[yt] = t),
              (i = r.nodeValue !== n) && ((e = Je), e !== null))
            )
              switch (e.tag) {
                case 3:
                  qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    qr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[yt] = t),
              (t.stateNode = r);
        }
        return Me(t), null;
      case 13:
        if (
          (fe(he),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (pe && Ze !== null && t.mode & 1 && !(t.flags & 128))
            _a(), Rn(), (t.flags |= 98560), (i = !1);
          else if (((i = ul(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(a(317));
              i[yt] = t;
            } else
              Rn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Me(t), (i = !1);
          } else at !== null && (Lu(at), (at = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || he.current & 1 ? Ce === 0 && (Ce = 3) : ju())),
            t.updateQueue !== null && (t.flags |= 4),
            Me(t),
            null);
      case 4:
        return (
          jn(),
          gu(e, t),
          e === null && ar(t.stateNode.containerInfo),
          Me(t),
          null
        );
      case 10:
        return Ki(t.type._context), Me(t), null;
      case 17:
        return $e(t.type) && tl(), Me(t), null;
      case 19:
        if ((fe(he), (i = t.memoizedState), i === null)) return Me(t), null;
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) Sr(i, !1);
          else {
            if (Ce !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = dl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Sr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return se(he, (he.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ge() > Dn &&
              ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = dl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Sr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !pe)
              )
                return Me(t), null;
            } else
              2 * ge() - i.renderingStartTime > Dn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ge()),
            (t.sibling = null),
            (n = he.current),
            se(he, r ? (n & 1) | 2 : n & 1),
            t)
          : (Me(t), null);
      case 22:
      case 23:
        return (
          zu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? qe & 1073741824 &&
              (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Me(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function nd(e, t) {
    switch ((Bi(t), t.tag)) {
      case 1:
        return (
          $e(t.type) && tl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          jn(),
          fe(Be),
          fe(Oe),
          bi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Zi(t), null;
      case 13:
        if (
          (fe(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Rn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return fe(he), null;
      case 4:
        return jn(), null;
      case 10:
        return Ki(t.type._context), null;
      case 22:
      case 23:
        return zu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var kl = !1,
    De = !1,
    rd = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;
  function In(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ye(e, t, r);
        }
      else n.current = null;
  }
  function wu(e, t, n) {
    try {
      n();
    } catch (r) {
      ye(e, t, r);
    }
  }
  var Es = !1;
  function ld(e, t) {
    if (((zi = $r), (e = ta()), Ei(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              s = -1,
              f = -1,
              g = 0,
              C = 0,
              N = e,
              x = null;
            t: for (;;) {
              for (
                var O;
                N !== n || (l !== 0 && N.nodeType !== 3) || (s = u + l),
                  N !== i || (r !== 0 && N.nodeType !== 3) || (f = u + r),
                  N.nodeType === 3 && (u += N.nodeValue.length),
                  (O = N.firstChild) !== null;

              )
                (x = N), (N = O);
              for (;;) {
                if (N === e) break t;
                if (
                  (x === n && ++g === l && (s = u),
                  x === i && ++C === r && (f = u),
                  (O = N.nextSibling) !== null)
                )
                  break;
                (N = x), (x = N.parentNode);
              }
              N = O;
            }
            n = s === -1 || f === -1 ? null : { start: s, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ji = { focusedElem: e, selectionRange: n }, $r = !1, M = t;
      M !== null;

    )
      if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (M = e);
      else
        for (; M !== null; ) {
          t = M;
          try {
            var F = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var U = F.memoizedProps,
                      we = F.memoizedState,
                      m = t.stateNode,
                      d = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? U : st(t.type, U),
                        we
                      );
                    m.__reactInternalSnapshotBeforeUpdate = d;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = "")
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (R) {
            ye(t, t.return, R);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (M = e);
            break;
          }
          M = t.return;
        }
    return (F = Es), (Es = !1), F;
  }
  function kr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && wu(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function xl(e, t) {
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
  function Su(e) {
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
  function Cs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Cs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[yt],
          delete t[cr],
          delete t[Di],
          delete t[Bf],
          delete t[$f])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function _s(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ps(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || _s(e.return)) return null;
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
  function ku(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = br));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ku(e, t, n), e = e.sibling; e !== null; )
        ku(e, t, n), (e = e.sibling);
  }
  function xu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (xu(e, t, n), e = e.sibling; e !== null; )
        xu(e, t, n), (e = e.sibling);
  }
  var Te = null,
    ct = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null; ) Ns(e, t, n), (n = n.sibling);
  }
  function Ns(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(Mr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        De || In(n, t);
      case 6:
        var r = Te,
          l = ct;
        (Te = null),
          Ht(e, t, n),
          (Te = r),
          (ct = l),
          Te !== null &&
            (ct
              ? ((e = Te),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null &&
          (ct
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8
                ? Mi(e.parentNode, n)
                : e.nodeType === 1 && Mi(e, n),
              bn(e))
            : Mi(Te, n.stateNode));
        break;
      case 4:
        (r = Te),
          (l = ct),
          (Te = n.stateNode.containerInfo),
          (ct = !0),
          Ht(e, t, n),
          (Te = r),
          (ct = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !De &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            (i = i.tag),
              u !== void 0 && (i & 2 || i & 4) && wu(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (
          !De &&
          (In(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            ye(n, t, s);
          }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((De = (r = De) || n.memoizedState !== null), Ht(e, t, n), (De = r))
          : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function Rs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new rd()),
        t.forEach(function (r) {
          var l = pd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            s = u;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (Te = s.stateNode), (ct = !1);
                break e;
              case 3:
                (Te = s.stateNode.containerInfo), (ct = !0);
                break e;
              case 4:
                (Te = s.stateNode.containerInfo), (ct = !0);
                break e;
            }
            s = s.return;
          }
          if (Te === null) throw Error(a(160));
          Ns(i, u, l), (Te = null), (ct = !1);
          var f = l.alternate;
          f !== null && (f.return = null), (l.return = null);
        } catch (g) {
          ye(l, t, g);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ls(t, e), (t = t.sibling);
  }
  function Ls(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ft(t, e), St(e), r & 4)) {
          try {
            kr(3, e, e.return), xl(3, e);
          } catch (U) {
            ye(e, e.return, U);
          }
          try {
            kr(5, e, e.return);
          } catch (U) {
            ye(e, e.return, U);
          }
        }
        break;
      case 1:
        ft(t, e), St(e), r & 512 && n !== null && In(n, n.return);
        break;
      case 5:
        if (
          (ft(t, e),
          St(e),
          r & 512 && n !== null && In(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (U) {
            ye(e, e.return, U);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            s = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && no(l, i),
                bl(s, u);
              var g = bl(s, i);
              for (u = 0; u < f.length; u += 2) {
                var C = f[u],
                  N = f[u + 1];
                C === "style"
                  ? co(l, N)
                  : C === "dangerouslySetInnerHTML"
                  ? ao(l, N)
                  : C === "children"
                  ? Vn(l, N)
                  : b(l, C, N, g);
              }
              switch (s) {
                case "input":
                  Xl(l, i);
                  break;
                case "textarea":
                  io(l, i);
                  break;
                case "select":
                  var x = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var O = i.value;
                  O != null
                    ? pn(l, !!i.multiple, O, !1)
                    : x !== !!i.multiple &&
                      (i.defaultValue != null
                        ? pn(l, !!i.multiple, i.defaultValue, !0)
                        : pn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[cr] = i;
            } catch (U) {
              ye(e, e.return, U);
            }
        }
        break;
      case 6:
        if ((ft(t, e), St(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (U) {
            ye(e, e.return, U);
          }
        }
        break;
      case 3:
        if (
          (ft(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            bn(t.containerInfo);
          } catch (U) {
            ye(e, e.return, U);
          }
        break;
      case 4:
        ft(t, e), St(e);
        break;
      case 13:
        ft(t, e),
          St(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (_u = ge())),
          r & 4 && Rs(e);
        break;
      case 22:
        if (
          ((C = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((De = (g = De) || C), ft(t, e), (De = g)) : ft(t, e),
          St(e),
          r & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null),
            (e.stateNode.isHidden = g) && !C && e.mode & 1)
          )
            for (M = e, C = e.child; C !== null; ) {
              for (N = M = C; M !== null; ) {
                switch (((x = M), (O = x.child), x.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    kr(4, x, x.return);
                    break;
                  case 1:
                    In(x, x.return);
                    var F = x.stateNode;
                    if (typeof F.componentWillUnmount == "function") {
                      (r = x), (n = x.return);
                      try {
                        (t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount();
                      } catch (U) {
                        ye(r, n, U);
                      }
                    }
                    break;
                  case 5:
                    In(x, x.return);
                    break;
                  case 22:
                    if (x.memoizedState !== null) {
                      js(N);
                      continue;
                    }
                }
                O !== null ? ((O.return = x), (M = O)) : js(N);
              }
              C = C.sibling;
            }
          e: for (C = null, N = e; ; ) {
            if (N.tag === 5) {
              if (C === null) {
                C = N;
                try {
                  (l = N.stateNode),
                    g
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((s = N.stateNode),
                        (f = N.memoizedProps.style),
                        (u =
                          f != null && f.hasOwnProperty("display")
                            ? f.display
                            : null),
                        (s.style.display = so("display", u)));
                } catch (U) {
                  ye(e, e.return, U);
                }
              }
            } else if (N.tag === 6) {
              if (C === null)
                try {
                  N.stateNode.nodeValue = g ? "" : N.memoizedProps;
                } catch (U) {
                  ye(e, e.return, U);
                }
            } else if (
              ((N.tag !== 22 && N.tag !== 23) ||
                N.memoizedState === null ||
                N === e) &&
              N.child !== null
            ) {
              (N.child.return = N), (N = N.child);
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              C === N && (C = null), (N = N.return);
            }
            C === N && (C = null),
              (N.sibling.return = N.return),
              (N = N.sibling);
          }
        }
        break;
      case 19:
        ft(t, e), St(e), r & 4 && Rs(e);
        break;
      case 21:
        break;
      default:
        ft(t, e), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (_s(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
            var i = Ps(e);
            xu(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              s = Ps(e);
            ku(e, s, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (f) {
        ye(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function id(e, t, n) {
    (M = e), Ts(e);
  }
  function Ts(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
      var l = M,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || kl;
        if (!u) {
          var s = l.alternate,
            f = (s !== null && s.memoizedState !== null) || De;
          s = kl;
          var g = De;
          if (((kl = u), (De = f) && !g))
            for (M = l; M !== null; )
              (u = M),
                (f = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Os(l)
                  : f !== null
                  ? ((f.return = u), (M = f))
                  : Os(l);
          for (; i !== null; ) (M = i), Ts(i), (i = i.sibling);
          (M = l), (kl = s), (De = g);
        }
        zs(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (M = i)) : zs(e);
    }
  }
  function zs(e) {
    for (; M !== null; ) {
      var t = M;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                De || xl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !De)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : st(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && ja(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ja(t, u, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      f.autoFocus && n.focus();
                      break;
                    case "img":
                      f.src && (n.src = f.src);
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
                  var g = t.alternate;
                  if (g !== null) {
                    var C = g.memoizedState;
                    if (C !== null) {
                      var N = C.dehydrated;
                      N !== null && bn(N);
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
                throw Error(a(163));
            }
          De || (t.flags & 512 && Su(t));
        } catch (x) {
          ye(t, t.return, x);
        }
      }
      if (t === e) {
        M = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (M = n);
        break;
      }
      M = t.return;
    }
  }
  function js(e) {
    for (; M !== null; ) {
      var t = M;
      if (t === e) {
        M = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (M = n);
        break;
      }
      M = t.return;
    }
  }
  function Os(e) {
    for (; M !== null; ) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xl(4, t);
            } catch (f) {
              ye(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                ye(t, l, f);
              }
            }
            var i = t.return;
            try {
              Su(t);
            } catch (f) {
              ye(t, i, f);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Su(t);
            } catch (f) {
              ye(t, u, f);
            }
        }
      } catch (f) {
        ye(t, t.return, f);
      }
      if (t === e) {
        M = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (M = s);
        break;
      }
      M = t.return;
    }
  }
  var ud = Math.ceil,
    El = G.ReactCurrentDispatcher,
    Eu = G.ReactCurrentOwner,
    rt = G.ReactCurrentBatchConfig,
    te = 0,
    Ne = null,
    ke = null,
    ze = 0,
    qe = 0,
    Mn = At(0),
    Ce = 0,
    xr = null,
    on = 0,
    Cl = 0,
    Cu = 0,
    Er = null,
    We = null,
    _u = 0,
    Dn = 1 / 0,
    Lt = null,
    _l = !1,
    Pu = null,
    Qt = null,
    Pl = !1,
    Kt = null,
    Nl = 0,
    Cr = 0,
    Nu = null,
    Rl = -1,
    Ll = 0;
  function Ue() {
    return te & 6 ? ge() : Rl !== -1 ? Rl : (Rl = ge());
  }
  function Yt(e) {
    return e.mode & 1
      ? te & 2 && ze !== 0
        ? ze & -ze
        : Wf.transition !== null
        ? (Ll === 0 && (Ll = Po()), Ll)
        : ((e = oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mo(e.type))),
          e)
      : 1;
  }
  function dt(e, t, n, r) {
    if (50 < Cr) throw ((Cr = 0), (Nu = null), Error(a(185)));
    Xn(e, n, r),
      (!(te & 2) || e !== Ne) &&
        (e === Ne && (!(te & 2) && (Cl |= n), Ce === 4 && Xt(e, ze)),
        He(e, r),
        n === 1 &&
          te === 0 &&
          !(t.mode & 1) &&
          ((Dn = ge() + 500), rl && $t()));
  }
  function He(e, t) {
    var n = e.callbackNode;
    Vc(e, t);
    var r = Ur(e, e === Ne ? ze : 0);
    if (r === 0)
      n !== null && Eo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Eo(n), t === 1))
        e.tag === 0 ? Vf(Ms.bind(null, e)) : Sa(Ms.bind(null, e)),
          Uf(function () {
            !(te & 6) && $t();
          }),
          (n = null);
      else {
        switch (No(r)) {
          case 1:
            n = ui;
            break;
          case 4:
            n = Co;
            break;
          case 16:
            n = Ir;
            break;
          case 536870912:
            n = _o;
            break;
          default:
            n = Ir;
        }
        n = Ws(n, Is.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Is(e, t) {
    if (((Rl = -1), (Ll = 0), te & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n) return null;
    var r = Ur(e, e === Ne ? ze : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
    else {
      t = r;
      var l = te;
      te |= 2;
      var i = Fs();
      (Ne !== e || ze !== t) && ((Lt = null), (Dn = ge() + 500), sn(e, t));
      do
        try {
          sd();
          break;
        } catch (s) {
          Ds(e, s);
        }
      while (!0);
      Qi(),
        (El.current = i),
        (te = l),
        ke !== null ? (t = 0) : ((Ne = null), (ze = 0), (t = Ce));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = oi(e)), l !== 0 && ((r = l), (t = Ru(e, l)))),
        t === 1)
      )
        throw ((n = xr), sn(e, 0), Xt(e, r), He(e, ge()), n);
      if (t === 6) Xt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !od(l) &&
            ((t = Tl(e, r)),
            t === 2 && ((i = oi(e)), i !== 0 && ((r = i), (t = Ru(e, i)))),
            t === 1))
        )
          throw ((n = xr), sn(e, 0), Xt(e, r), He(e, ge()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            cn(e, We, Lt);
            break;
          case 3:
            if (
              (Xt(e, r),
              (r & 130023424) === r && ((t = _u + 500 - ge()), 10 < t))
            ) {
              if (Ur(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ue(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Ii(cn.bind(null, e, We, Lt), t);
              break;
            }
            cn(e, We, Lt);
            break;
          case 4:
            if ((Xt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - ut(r);
              (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ge() - r),
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
                  : 1960 * ud(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ii(cn.bind(null, e, We, Lt), r);
              break;
            }
            cn(e, We, Lt);
            break;
          case 5:
            cn(e, We, Lt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return He(e, ge()), e.callbackNode === n ? Is.bind(null, e) : null;
  }
  function Ru(e, t) {
    var n = Er;
    return (
      e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
      (e = Tl(e, t)),
      e !== 2 && ((t = We), (We = n), t !== null && Lu(t)),
      e
    );
  }
  function Lu(e) {
    We === null ? (We = e) : We.push.apply(We, e);
  }
  function od(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!ot(i(), l)) return !1;
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
  function Xt(e, t) {
    for (
      t &= ~Cu,
        t &= ~Cl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ut(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ms(e) {
    if (te & 6) throw Error(a(327));
    Fn();
    var t = Ur(e, 0);
    if (!(t & 1)) return He(e, ge()), null;
    var n = Tl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = oi(e);
      r !== 0 && ((t = r), (n = Ru(e, r)));
    }
    if (n === 1) throw ((n = xr), sn(e, 0), Xt(e, t), He(e, ge()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      cn(e, We, Lt),
      He(e, ge()),
      null
    );
  }
  function Tu(e, t) {
    var n = te;
    te |= 1;
    try {
      return e(t);
    } finally {
      (te = n), te === 0 && ((Dn = ge() + 500), rl && $t());
    }
  }
  function an(e) {
    Kt !== null && Kt.tag === 0 && !(te & 6) && Fn();
    var t = te;
    te |= 1;
    var n = rt.transition,
      r = oe;
    try {
      if (((rt.transition = null), (oe = 1), e)) return e();
    } finally {
      (oe = r), (rt.transition = n), (te = t), !(te & 6) && $t();
    }
  }
  function zu() {
    (qe = Mn.current), fe(Mn);
  }
  function sn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Ff(n)), ke !== null))
      for (n = ke.return; n !== null; ) {
        var r = n;
        switch ((Bi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && tl();
            break;
          case 3:
            jn(), fe(Be), fe(Oe), bi();
            break;
          case 5:
            Zi(r);
            break;
          case 4:
            jn();
            break;
          case 13:
            fe(he);
            break;
          case 19:
            fe(he);
            break;
          case 10:
            Ki(r.type._context);
            break;
          case 22:
          case 23:
            zu();
        }
        n = n.return;
      }
    if (
      ((Ne = e),
      (ke = e = Gt(e.current, null)),
      (ze = qe = t),
      (Ce = 0),
      (xr = null),
      (Cu = Cl = on = 0),
      (We = Er = null),
      rn !== null)
    ) {
      for (t = 0; t < rn.length; t++)
        if (((n = rn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            (i.next = l), (r.next = u);
          }
          n.pending = r;
        }
      rn = null;
    }
    return e;
  }
  function Ds(e, t) {
    do {
      var n = ke;
      try {
        if ((Qi(), (pl.current = yl), hl)) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          hl = !1;
        }
        if (
          ((un = 0),
          (Pe = Ee = me = null),
          (vr = !1),
          (yr = 0),
          (Eu.current = null),
          n === null || n.return === null)
        ) {
          (Ce = 1), (xr = t), (ke = null);
          break;
        }
        e: {
          var i = e,
            u = n.return,
            s = n,
            f = t;
          if (
            ((t = ze),
            (s.flags |= 32768),
            f !== null && typeof f == "object" && typeof f.then == "function")
          ) {
            var g = f,
              C = s,
              N = C.tag;
            if (!(C.mode & 1) && (N === 0 || N === 11 || N === 15)) {
              var x = C.alternate;
              x
                ? ((C.updateQueue = x.updateQueue),
                  (C.memoizedState = x.memoizedState),
                  (C.lanes = x.lanes))
                : ((C.updateQueue = null), (C.memoizedState = null));
            }
            var O = os(u);
            if (O !== null) {
              (O.flags &= -257),
                as(O, u, s, i, t),
                O.mode & 1 && us(i, g, t),
                (t = O),
                (f = g);
              var F = t.updateQueue;
              if (F === null) {
                var U = new Set();
                U.add(f), (t.updateQueue = U);
              } else F.add(f);
              break e;
            } else {
              if (!(t & 1)) {
                us(i, g, t), ju();
                break e;
              }
              f = Error(a(426));
            }
          } else if (pe && s.mode & 1) {
            var we = os(u);
            if (we !== null) {
              !(we.flags & 65536) && (we.flags |= 256),
                as(we, u, s, i, t),
                Wi(On(f, s));
              break e;
            }
          }
          (i = f = On(f, s)),
            Ce !== 4 && (Ce = 2),
            Er === null ? (Er = [i]) : Er.push(i),
            (i = u);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var m = ls(i, f, t);
                za(i, m);
                break e;
              case 1:
                s = f;
                var d = i.type,
                  y = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof d.getDerivedStateFromError == "function" ||
                    (y !== null &&
                      typeof y.componentDidCatch == "function" &&
                      (Qt === null || !Qt.has(y))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var R = is(i, s, t);
                  za(i, R);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        As(n);
      } catch (B) {
        (t = B), ke === n && n !== null && (ke = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Fs() {
    var e = El.current;
    return (El.current = yl), e === null ? yl : e;
  }
  function ju() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
      Ne === null || (!(on & 268435455) && !(Cl & 268435455)) || Xt(Ne, ze);
  }
  function Tl(e, t) {
    var n = te;
    te |= 2;
    var r = Fs();
    (Ne !== e || ze !== t) && ((Lt = null), sn(e, t));
    do
      try {
        ad();
        break;
      } catch (l) {
        Ds(e, l);
      }
    while (!0);
    if ((Qi(), (te = n), (El.current = r), ke !== null)) throw Error(a(261));
    return (Ne = null), (ze = 0), Ce;
  }
  function ad() {
    for (; ke !== null; ) Us(ke);
  }
  function sd() {
    for (; ke !== null && !Oc(); ) Us(ke);
  }
  function Us(e) {
    var t = Vs(e.alternate, e, qe);
    (e.memoizedProps = e.pendingProps),
      t === null ? As(e) : (ke = t),
      (Eu.current = null);
  }
  function As(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = nd(n, t)), n !== null)) {
          (n.flags &= 32767), (ke = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ce = 6), (ke = null);
          return;
        }
      } else if (((n = td(n, t, qe)), n !== null)) {
        ke = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function cn(e, t, n) {
    var r = oe,
      l = rt.transition;
    try {
      (rt.transition = null), (oe = 1), cd(e, t, n, r);
    } finally {
      (rt.transition = l), (oe = r);
    }
    return null;
  }
  function cd(e, t, n, r) {
    do Fn();
    while (Kt !== null);
    if (te & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (Wc(e, i),
      e === Ne && ((ke = Ne = null), (ze = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Pl ||
        ((Pl = !0),
        Ws(Ir, function () {
          return Fn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = rt.transition), (rt.transition = null);
      var u = oe;
      oe = 1;
      var s = te;
      (te |= 4),
        (Eu.current = null),
        ld(e, n),
        Ls(n, e),
        Tf(ji),
        ($r = !!zi),
        (ji = zi = null),
        (e.current = n),
        id(n),
        Ic(),
        (te = s),
        (oe = u),
        (rt.transition = i);
    } else e.current = n;
    if (
      (Pl && ((Pl = !1), (Kt = e), (Nl = l)),
      (i = e.pendingLanes),
      i === 0 && (Qt = null),
      Fc(n.stateNode),
      He(e, ge()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (_l) throw ((_l = !1), (e = Pu), (Pu = null), e);
    return (
      Nl & 1 && e.tag !== 0 && Fn(),
      (i = e.pendingLanes),
      i & 1 ? (e === Nu ? Cr++ : ((Cr = 0), (Nu = e))) : (Cr = 0),
      $t(),
      null
    );
  }
  function Fn() {
    if (Kt !== null) {
      var e = No(Nl),
        t = rt.transition,
        n = oe;
      try {
        if (((rt.transition = null), (oe = 16 > e ? 16 : e), Kt === null))
          var r = !1;
        else {
          if (((e = Kt), (Kt = null), (Nl = 0), te & 6)) throw Error(a(331));
          var l = te;
          for (te |= 4, M = e.current; M !== null; ) {
            var i = M,
              u = i.child;
            if (M.flags & 16) {
              var s = i.deletions;
              if (s !== null) {
                for (var f = 0; f < s.length; f++) {
                  var g = s[f];
                  for (M = g; M !== null; ) {
                    var C = M;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kr(8, C, i);
                    }
                    var N = C.child;
                    if (N !== null) (N.return = C), (M = N);
                    else
                      for (; M !== null; ) {
                        C = M;
                        var x = C.sibling,
                          O = C.return;
                        if ((Cs(C), C === g)) {
                          M = null;
                          break;
                        }
                        if (x !== null) {
                          (x.return = O), (M = x);
                          break;
                        }
                        M = O;
                      }
                  }
                }
                var F = i.alternate;
                if (F !== null) {
                  var U = F.child;
                  if (U !== null) {
                    F.child = null;
                    do {
                      var we = U.sibling;
                      (U.sibling = null), (U = we);
                    } while (U !== null);
                  }
                }
                M = i;
              }
            }
            if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (M = u);
            else
              e: for (; M !== null; ) {
                if (((i = M), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  (m.return = i.return), (M = m);
                  break e;
                }
                M = i.return;
              }
          }
          var d = e.current;
          for (M = d; M !== null; ) {
            u = M;
            var y = u.child;
            if (u.subtreeFlags & 2064 && y !== null) (y.return = u), (M = y);
            else
              e: for (u = d; M !== null; ) {
                if (((s = M), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xl(9, s);
                    }
                  } catch (B) {
                    ye(s, s.return, B);
                  }
                if (s === u) {
                  M = null;
                  break e;
                }
                var R = s.sibling;
                if (R !== null) {
                  (R.return = s.return), (M = R);
                  break e;
                }
                M = s.return;
              }
          }
          if (
            ((te = l),
            $t(),
            vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(Mr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (oe = n), (rt.transition = t);
      }
    }
    return !1;
  }
  function Bs(e, t, n) {
    (t = On(n, t)),
      (t = ls(e, t, 1)),
      (e = Wt(e, t, 1)),
      (t = Ue()),
      e !== null && (Xn(e, 1, t), He(e, t));
  }
  function ye(e, t, n) {
    if (e.tag === 3) Bs(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bs(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Qt === null || !Qt.has(r)))
          ) {
            (e = On(n, e)),
              (e = is(t, e, 1)),
              (t = Wt(t, e, 1)),
              (e = Ue()),
              t !== null && (Xn(t, 1, e), He(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function fd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ue()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ne === e &&
        (ze & n) === n &&
        (Ce === 4 || (Ce === 3 && (ze & 130023424) === ze && 500 > ge() - _u)
          ? sn(e, 0)
          : (Cu |= n)),
      He(e, t);
  }
  function $s(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Fr), (Fr <<= 1), !(Fr & 130023424) && (Fr = 4194304))
        : (t = 1));
    var n = Ue();
    (e = Pt(e, t)), e !== null && (Xn(e, t, n), He(e, n));
  }
  function dd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), $s(e, n);
  }
  function pd(e, t) {
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
        throw Error(a(314));
    }
    r !== null && r.delete(t), $s(e, n);
  }
  var Vs;
  Vs = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Be.current) Ve = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), ed(e, t, n);
        Ve = !!(e.flags & 131072);
      }
    else (Ve = !1), pe && t.flags & 1048576 && ka(t, il, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Sl(e, t), (e = t.pendingProps);
        var l = _n(t, Oe.current);
        zn(t, n), (l = nu(null, t, r, e, l, n));
        var i = ru();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              $e(r) ? ((i = !0), nl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Gi(t),
              (l.updater = gl),
              (t.stateNode = l),
              (l._reactInternals = t),
              su(t, r, e, n),
              (t = pu(null, t, r, !0, i, n)))
            : ((t.tag = 0), pe && i && Ai(t), Fe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Sl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = md(r)),
            (e = st(r, e)),
            l)
          ) {
            case 0:
              t = du(null, t, r, e, n);
              break e;
            case 1:
              t = hs(null, t, r, e, n);
              break e;
            case 11:
              t = ss(null, t, r, e, n);
              break e;
            case 14:
              t = cs(null, t, r, st(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          du(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          hs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ms(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Ta(e, t),
            fl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = On(Error(a(423)), t)), (t = vs(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = On(Error(a(424)), t)), (t = vs(e, t, r, n, l));
              break e;
            } else
              for (
                Ze = Ut(t.stateNode.containerInfo.firstChild),
                  Je = t,
                  pe = !0,
                  at = null,
                  n = Ra(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Rn(), r === l)) {
              t = Rt(e, t, n);
              break e;
            }
            Fe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Oa(t),
          e === null && Vi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Oi(r, l) ? (u = null) : i !== null && Oi(r, i) && (t.flags |= 32),
          ps(e, t),
          Fe(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Vi(t), null;
      case 13:
        return ys(e, t, n);
      case 4:
        return (
          Ji(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ln(t, null, r, n)) : Fe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          ss(e, t, r, l, n)
        );
      case 7:
        return Fe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Fe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Fe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            se(al, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (ot(i.value, u)) {
              if (i.children === l.children && !Be.current) {
                t = Rt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var s = i.dependencies;
                if (s !== null) {
                  u = i.child;
                  for (var f = s.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (i.tag === 1) {
                        (f = Nt(-1, n & -n)), (f.tag = 2);
                        var g = i.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var C = g.pending;
                          C === null
                            ? (f.next = f)
                            : ((f.next = C.next), (C.next = f)),
                            (g.pending = f);
                        }
                      }
                      (i.lanes |= n),
                        (f = i.alternate),
                        f !== null && (f.lanes |= n),
                        Yi(i.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    f = f.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (s = u.alternate),
                    s !== null && (s.lanes |= n),
                    Yi(u, n, t),
                    (u = i.sibling);
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      (i.return = u.return), (u = i);
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          Fe(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          zn(t, n),
          (l = tt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Fe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = st(r, t.pendingProps)),
          (l = st(r.type, l)),
          cs(e, t, r, l, n)
        );
      case 15:
        return fs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          Sl(e, t),
          (t.tag = 1),
          $e(r) ? ((e = !0), nl(t)) : (e = !1),
          zn(t, n),
          ns(t, r, l),
          su(t, r, l, n),
          pu(null, t, r, !0, e, n)
        );
      case 19:
        return ws(e, t, n);
      case 22:
        return ds(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Ws(e, t) {
    return xo(e, t);
  }
  function hd(e, t, n, r) {
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
  function lt(e, t, n, r) {
    return new hd(e, t, n, r);
  }
  function Ou(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function md(e) {
    if (typeof e == "function") return Ou(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ht)) return 11;
      if (e === mt) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = lt(e.tag, t, e.key, e.mode)),
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
  function zl(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) Ou(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Le:
          return fn(n.children, l, i, t);
        case je:
          (u = 8), (l |= 8);
          break;
        case pt:
          return (
            (e = lt(12, n, t, l | 2)), (e.elementType = pt), (e.lanes = i), e
          );
        case Ye:
          return (e = lt(13, n, t, l)), (e.elementType = Ye), (e.lanes = i), e;
        case it:
          return (e = lt(19, n, t, l)), (e.elementType = it), (e.lanes = i), e;
        case ve:
          return jl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ke:
                u = 10;
                break e;
              case kt:
                u = 9;
                break e;
              case ht:
                u = 11;
                break e;
              case mt:
                u = 14;
                break e;
              case Ae:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = lt(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function fn(e, t, n, r) {
    return (e = lt(7, e, r, t)), (e.lanes = n), e;
  }
  function jl(e, t, n, r) {
    return (
      (e = lt(22, e, r, t)),
      (e.elementType = ve),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Iu(e, t, n) {
    return (e = lt(6, e, null, t)), (e.lanes = n), e;
  }
  function Mu(e, t, n) {
    return (
      (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function vd(e, t, n, r, l) {
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
      (this.eventTimes = ai(0)),
      (this.expirationTimes = ai(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ai(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Du(e, t, n, r, l, i, u, s, f) {
    return (
      (e = new vd(e, t, n, s, f)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = lt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Gi(i),
      e
    );
  }
  function yd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: xe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Hs(e) {
    if (!e) return Bt;
    e = e._reactInternals;
    e: {
      if (qt(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($e(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if ($e(n)) return ga(e, n, t);
    }
    return t;
  }
  function Qs(e, t, n, r, l, i, u, s, f) {
    return (
      (e = Du(n, r, !0, e, l, i, u, s, f)),
      (e.context = Hs(null)),
      (n = e.current),
      (r = Ue()),
      (l = Yt(n)),
      (i = Nt(r, l)),
      (i.callback = t ?? null),
      Wt(n, i, l),
      (e.current.lanes = l),
      Xn(e, l, r),
      He(e, r),
      e
    );
  }
  function Ol(e, t, n, r) {
    var l = t.current,
      i = Ue(),
      u = Yt(l);
    return (
      (n = Hs(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Wt(l, t, u)),
      e !== null && (dt(e, l, u, i), cl(e, l, u)),
      u
    );
  }
  function Il(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ks(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fu(e, t) {
    Ks(e, t), (e = e.alternate) && Ks(e, t);
  }
  var Ys =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Uu(e) {
    this._internalRoot = e;
  }
  (Ml.prototype.render = Uu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Ol(e, t, null, null);
    }),
    (Ml.prototype.unmount = Uu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          an(function () {
            Ol(null, e, null, null);
          }),
            (t[xt] = null);
        }
      });
  function Ml(e) {
    this._internalRoot = e;
  }
  Ml.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = To();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      Mt.splice(n, 0, e), n === 0 && Oo(e);
    }
  };
  function Au(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Dl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Xs() {}
  function gd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var g = Il(u);
          i.call(g);
        };
      }
      var u = Qs(t, r, e, 0, null, !1, !1, "", Xs);
      return (
        (e._reactRootContainer = u),
        (e[xt] = u.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        an(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var g = Il(f);
        s.call(g);
      };
    }
    var f = Du(e, 0, !1, null, null, !1, !1, "", Xs);
    return (
      (e._reactRootContainer = f),
      (e[xt] = f.current),
      ar(e.nodeType === 8 ? e.parentNode : e),
      an(function () {
        Ol(t, f, n, r);
      }),
      f
    );
  }
  function Fl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var s = l;
        l = function () {
          var f = Il(u);
          s.call(f);
        };
      }
      Ol(t, u, e, l);
    } else u = gd(n, t, e, l, r);
    return Il(u);
  }
  (Ro = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Yn(t.pendingLanes);
          n !== 0 &&
            (si(t, n | 1), He(t, ge()), !(te & 6) && ((Dn = ge() + 500), $t()));
        }
        break;
      case 13:
        an(function () {
          var r = Pt(e, 1);
          if (r !== null) {
            var l = Ue();
            dt(r, e, 1, l);
          }
        }),
          Fu(e, 1);
    }
  }),
    (ci = function (e) {
      if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
          var n = Ue();
          dt(t, e, 134217728, n);
        }
        Fu(e, 134217728);
      }
    }),
    (Lo = function (e) {
      if (e.tag === 13) {
        var t = Yt(e),
          n = Pt(e, t);
        if (n !== null) {
          var r = Ue();
          dt(n, e, t, r);
        }
        Fu(e, t);
      }
    }),
    (To = function () {
      return oe;
    }),
    (zo = function (e, t) {
      var n = oe;
      try {
        return (oe = e), t();
      } finally {
        oe = n;
      }
    }),
    (ni = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Xl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var l = el(r);
                if (!l) throw Error(a(90));
                eo(r), Xl(r, l);
              }
            }
          }
          break;
        case "textarea":
          io(e, n);
          break;
        case "select":
          (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
      }
    }),
    (mo = Tu),
    (vo = an);
  var wd = { usingClientEntryPoint: !1, Events: [fr, En, el, po, ho, Tu] },
    _r = {
      findFiberByHostInstance: bt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Sd = {
      bundleType: _r.bundleType,
      version: _r.version,
      rendererPackageName: _r.rendererPackageName,
      rendererConfig: _r.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: G.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = So(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _r.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ul.isDisabled && Ul.supportsFiber)
      try {
        (Mr = Ul.inject(Sd)), (vt = Ul);
      } catch {}
  }
  return (
    (Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wd),
    (Qe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Au(t)) throw Error(a(200));
      return yd(e, t, null, n);
    }),
    (Qe.createRoot = function (e, t) {
      if (!Au(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = Ys;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Du(e, 1, !1, null, null, n, !1, r, l)),
        (e[xt] = t.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        new Uu(t)
      );
    }),
    (Qe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = So(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Qe.flushSync = function (e) {
      return an(e);
    }),
    (Qe.hydrate = function (e, t, n) {
      if (!Dl(t)) throw Error(a(200));
      return Fl(null, e, t, !0, n);
    }),
    (Qe.hydrateRoot = function (e, t, n) {
      if (!Au(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = Ys;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Qs(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[xt] = t.current),
        ar(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Ml(t);
    }),
    (Qe.render = function (e, t, n) {
      if (!Dl(t)) throw Error(a(200));
      return Fl(null, e, t, !1, n);
    }),
    (Qe.unmountComponentAtNode = function (e) {
      if (!Dl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (an(function () {
            Fl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[xt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Qe.unstable_batchedUpdates = Tu),
    (Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Dl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Fl(e, t, n, !1, r);
    }),
    (Qe.version = "18.3.1-next-f1338f8080-20240426"),
    Qe
  );
}
var nc;
function pc() {
  if (nc) return Vu.exports;
  nc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), (Vu.exports = Td()), Vu.exports;
}
var rc;
function zd() {
  if (rc) return Al;
  rc = 1;
  var o = pc();
  return (Al.createRoot = o.createRoot), (Al.hydrateRoot = o.hydrateRoot), Al;
}
var jd = zd();
pc();
/**
 * @remix-run/router v1.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var c = 1; c < arguments.length; c++) {
            var a = arguments[c];
            for (var v in a)
              Object.prototype.hasOwnProperty.call(a, v) && (o[v] = a[v]);
          }
          return o;
        }),
    Nr.apply(this, arguments)
  );
}
var dn;
(function (o) {
  (o.Pop = "POP"), (o.Push = "PUSH"), (o.Replace = "REPLACE");
})(dn || (dn = {}));
const lc = "popstate";
function Od(o) {
  o === void 0 && (o = {});
  function c(v, p) {
    let { pathname: w, search: S, hash: P } = v.location;
    return Yu(
      "",
      { pathname: w, search: S, hash: P },
      (p.state && p.state.usr) || null,
      (p.state && p.state.key) || "default"
    );
  }
  function a(v, p) {
    return typeof p == "string" ? p : Bl(p);
  }
  return Md(c, a, null, o);
}
function _e(o, c) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(c);
}
function hc(o, c) {
  if (!o) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Id() {
  return Math.random().toString(36).substr(2, 8);
}
function ic(o, c) {
  return { usr: o.state, key: o.key, idx: c };
}
function Yu(o, c, a, v) {
  return (
    a === void 0 && (a = null),
    Nr(
      { pathname: typeof o == "string" ? o : o.pathname, search: "", hash: "" },
      typeof c == "string" ? Rr(c) : c,
      { state: a, key: (c && c.key) || v || Id() }
    )
  );
}
function Bl(o) {
  let { pathname: c = "/", search: a = "", hash: v = "" } = o;
  return (
    a && a !== "?" && (c += a.charAt(0) === "?" ? a : "?" + a),
    v && v !== "#" && (c += v.charAt(0) === "#" ? v : "#" + v),
    c
  );
}
function Rr(o) {
  let c = {};
  if (o) {
    let a = o.indexOf("#");
    a >= 0 && ((c.hash = o.substr(a)), (o = o.substr(0, a)));
    let v = o.indexOf("?");
    v >= 0 && ((c.search = o.substr(v)), (o = o.substr(0, v))),
      o && (c.pathname = o);
  }
  return c;
}
function Md(o, c, a, v) {
  v === void 0 && (v = {});
  let { window: p = document.defaultView, v5Compat: w = !1 } = v,
    S = p.history,
    P = dn.Pop,
    k = null,
    L = j();
  L == null && ((L = 0), S.replaceState(Nr({}, S.state, { idx: L }), ""));
  function j() {
    return (S.state || { idx: null }).idx;
  }
  function _() {
    P = dn.Pop;
    let A = j(),
      ie = A == null ? null : A - L;
    (L = A), k && k({ action: P, location: V.location, delta: ie });
  }
  function $(A, ie) {
    P = dn.Push;
    let X = Yu(V.location, A, ie);
    L = j() + 1;
    let b = ic(X, L),
      G = V.createHref(X);
    try {
      S.pushState(b, "", G);
    } catch (Se) {
      if (Se instanceof DOMException && Se.name === "DataCloneError") throw Se;
      p.location.assign(G);
    }
    w && k && k({ action: P, location: V.location, delta: 1 });
  }
  function ee(A, ie) {
    P = dn.Replace;
    let X = Yu(V.location, A, ie);
    L = j();
    let b = ic(X, L),
      G = V.createHref(X);
    S.replaceState(b, "", G),
      w && k && k({ action: P, location: V.location, delta: 0 });
  }
  function Z(A) {
    let ie = p.location.origin !== "null" ? p.location.origin : p.location.href,
      X = typeof A == "string" ? A : Bl(A);
    return (
      (X = X.replace(/ $/, "%20")),
      _e(
        ie,
        "No window.location.(origin|href) available to create URL for href: " +
          X
      ),
      new URL(X, ie)
    );
  }
  let V = {
    get action() {
      return P;
    },
    get location() {
      return o(p, S);
    },
    listen(A) {
      if (k) throw new Error("A history only accepts one active listener");
      return (
        p.addEventListener(lc, _),
        (k = A),
        () => {
          p.removeEventListener(lc, _), (k = null);
        }
      );
    },
    createHref(A) {
      return c(p, A);
    },
    createURL: Z,
    encodeLocation(A) {
      let ie = Z(A);
      return { pathname: ie.pathname, search: ie.search, hash: ie.hash };
    },
    push: $,
    replace: ee,
    go(A) {
      return S.go(A);
    },
  };
  return V;
}
var uc;
(function (o) {
  (o.data = "data"),
    (o.deferred = "deferred"),
    (o.redirect = "redirect"),
    (o.error = "error");
})(uc || (uc = {}));
function Dd(o, c, a) {
  return a === void 0 && (a = "/"), Fd(o, c, a);
}
function Fd(o, c, a, v) {
  let p = typeof c == "string" ? Rr(c) : c,
    w = Un(p.pathname || "/", a);
  if (w == null) return null;
  let S = mc(o);
  Ud(S);
  let P = null;
  for (let k = 0; P == null && k < S.length; ++k) {
    let L = Gd(w);
    P = Yd(S[k], L);
  }
  return P;
}
function mc(o, c, a, v) {
  c === void 0 && (c = []), a === void 0 && (a = []), v === void 0 && (v = "");
  let p = (w, S, P) => {
    let k = {
      relativePath: P === void 0 ? w.path || "" : P,
      caseSensitive: w.caseSensitive === !0,
      childrenIndex: S,
      route: w,
    };
    k.relativePath.startsWith("/") &&
      (_e(
        k.relativePath.startsWith(v),
        'Absolute route path "' +
          k.relativePath +
          '" nested under path ' +
          ('"' + v + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (k.relativePath = k.relativePath.slice(v.length)));
    let L = Zt([v, k.relativePath]),
      j = a.concat(k);
    w.children &&
      w.children.length > 0 &&
      (_e(
        w.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + L + '".')
      ),
      mc(w.children, c, j, L)),
      !(w.path == null && !w.index) &&
        c.push({ path: L, score: Qd(L, w.index), routesMeta: j });
  };
  return (
    o.forEach((w, S) => {
      var P;
      if (w.path === "" || !((P = w.path) != null && P.includes("?"))) p(w, S);
      else for (let k of vc(w.path)) p(w, S, k);
    }),
    c
  );
}
function vc(o) {
  let c = o.split("/");
  if (c.length === 0) return [];
  let [a, ...v] = c,
    p = a.endsWith("?"),
    w = a.replace(/\?$/, "");
  if (v.length === 0) return p ? [w, ""] : [w];
  let S = vc(v.join("/")),
    P = [];
  return (
    P.push(...S.map((k) => (k === "" ? w : [w, k].join("/")))),
    p && P.push(...S),
    P.map((k) => (o.startsWith("/") && k === "" ? "/" : k))
  );
}
function Ud(o) {
  o.sort((c, a) =>
    c.score !== a.score
      ? a.score - c.score
      : Kd(
          c.routesMeta.map((v) => v.childrenIndex),
          a.routesMeta.map((v) => v.childrenIndex)
        )
  );
}
const Ad = /^:[\w-]+$/,
  Bd = 3,
  $d = 2,
  Vd = 1,
  Wd = 10,
  Hd = -2,
  oc = (o) => o === "*";
function Qd(o, c) {
  let a = o.split("/"),
    v = a.length;
  return (
    a.some(oc) && (v += Hd),
    c && (v += $d),
    a
      .filter((p) => !oc(p))
      .reduce((p, w) => p + (Ad.test(w) ? Bd : w === "" ? Vd : Wd), v)
  );
}
function Kd(o, c) {
  return o.length === c.length && o.slice(0, -1).every((v, p) => v === c[p])
    ? o[o.length - 1] - c[c.length - 1]
    : 0;
}
function Yd(o, c, a) {
  let { routesMeta: v } = o,
    p = {},
    w = "/",
    S = [];
  for (let P = 0; P < v.length; ++P) {
    let k = v[P],
      L = P === v.length - 1,
      j = w === "/" ? c : c.slice(w.length) || "/",
      _ = Xu(
        { path: k.relativePath, caseSensitive: k.caseSensitive, end: L },
        j
      ),
      $ = k.route;
    if (!_) return null;
    Object.assign(p, _.params),
      S.push({
        params: p,
        pathname: Zt([w, _.pathname]),
        pathnameBase: bd(Zt([w, _.pathnameBase])),
        route: $,
      }),
      _.pathnameBase !== "/" && (w = Zt([w, _.pathnameBase]));
  }
  return S;
}
function Xu(o, c) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [a, v] = Xd(o.path, o.caseSensitive, o.end),
    p = c.match(a);
  if (!p) return null;
  let w = p[0],
    S = w.replace(/(.)\/+$/, "$1"),
    P = p.slice(1);
  return {
    params: v.reduce((L, j, _) => {
      let { paramName: $, isOptional: ee } = j;
      if ($ === "*") {
        let V = P[_] || "";
        S = w.slice(0, w.length - V.length).replace(/(.)\/+$/, "$1");
      }
      const Z = P[_];
      return (
        ee && !Z ? (L[$] = void 0) : (L[$] = (Z || "").replace(/%2F/g, "/")), L
      );
    }, {}),
    pathname: w,
    pathnameBase: S,
    pattern: o,
  };
}
function Xd(o, c, a) {
  c === void 0 && (c = !1),
    a === void 0 && (a = !0),
    hc(
      o === "*" || !o.endsWith("*") || o.endsWith("/*"),
      'Route path "' +
        o +
        '" will be treated as if it were ' +
        ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + o.replace(/\*$/, "/*") + '".')
    );
  let v = [],
    p =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, P, k) => (
            v.push({ paramName: P, isOptional: k != null }),
            k ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (v.push({ paramName: "*" }),
        (p += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (p += "\\/*$")
      : o !== "" && o !== "/" && (p += "(?:(?=\\/|$))"),
    [new RegExp(p, c ? void 0 : "i"), v]
  );
}
function Gd(o) {
  try {
    return o
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      hc(
        !1,
        'The URL path "' +
          o +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + c + ").")
      ),
      o
    );
  }
}
function Un(o, c) {
  if (c === "/") return o;
  if (!o.toLowerCase().startsWith(c.toLowerCase())) return null;
  let a = c.endsWith("/") ? c.length - 1 : c.length,
    v = o.charAt(a);
  return v && v !== "/" ? null : o.slice(a) || "/";
}
function Jd(o, c) {
  c === void 0 && (c = "/");
  let {
    pathname: a,
    search: v = "",
    hash: p = "",
  } = typeof o == "string" ? Rr(o) : o;
  return {
    pathname: a ? (a.startsWith("/") ? a : Zd(a, c)) : c,
    search: ep(v),
    hash: tp(p),
  };
}
function Zd(o, c) {
  let a = c.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((p) => {
      p === ".." ? a.length > 1 && a.pop() : p !== "." && a.push(p);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Qu(o, c, a, v) {
  return (
    "Cannot include a '" +
    o +
    "' character in a manually specified " +
    ("`to." +
      c +
      "` field [" +
      JSON.stringify(v) +
      "].  Please separate it out to the ") +
    ("`to." + a + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function qd(o) {
  return o.filter(
    (c, a) => a === 0 || (c.route.path && c.route.path.length > 0)
  );
}
function Zu(o, c) {
  let a = qd(o);
  return c
    ? a.map((v, p) => (p === a.length - 1 ? v.pathname : v.pathnameBase))
    : a.map((v) => v.pathnameBase);
}
function qu(o, c, a, v) {
  v === void 0 && (v = !1);
  let p;
  typeof o == "string"
    ? (p = Rr(o))
    : ((p = Nr({}, o)),
      _e(
        !p.pathname || !p.pathname.includes("?"),
        Qu("?", "pathname", "search", p)
      ),
      _e(
        !p.pathname || !p.pathname.includes("#"),
        Qu("#", "pathname", "hash", p)
      ),
      _e(!p.search || !p.search.includes("#"), Qu("#", "search", "hash", p)));
  let w = o === "" || p.pathname === "",
    S = w ? "/" : p.pathname,
    P;
  if (S == null) P = a;
  else {
    let _ = c.length - 1;
    if (!v && S.startsWith("..")) {
      let $ = S.split("/");
      for (; $[0] === ".."; ) $.shift(), (_ -= 1);
      p.pathname = $.join("/");
    }
    P = _ >= 0 ? c[_] : "/";
  }
  let k = Jd(p, P),
    L = S && S !== "/" && S.endsWith("/"),
    j = (w || S === ".") && a.endsWith("/");
  return !k.pathname.endsWith("/") && (L || j) && (k.pathname += "/"), k;
}
const Zt = (o) => o.join("/").replace(/\/\/+/g, "/"),
  bd = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ep = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  tp = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function np(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
const yc = ["post", "put", "patch", "delete"];
new Set(yc);
const rp = ["get", ...yc];
new Set(rp);
/**
 * React Router v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var c = 1; c < arguments.length; c++) {
            var a = arguments[c];
            for (var v in a)
              Object.prototype.hasOwnProperty.call(a, v) && (o[v] = a[v]);
          }
          return o;
        }),
    $l.apply(this, arguments)
  );
}
const Hl = T.createContext(null),
  gc = T.createContext(null),
  Tt = T.createContext(null),
  bu = T.createContext(null),
  zt = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  wc = T.createContext(null);
function lp(o, c) {
  let { relative: a } = c === void 0 ? {} : c;
  An() || _e(!1);
  let { basename: v, navigator: p } = T.useContext(Tt),
    { hash: w, pathname: S, search: P } = Ql(o, { relative: a }),
    k = S;
  return (
    v !== "/" && (k = S === "/" ? v : Zt([v, S])),
    p.createHref({ pathname: k, search: P, hash: w })
  );
}
function An() {
  return T.useContext(bu) != null;
}
function Bn() {
  return An() || _e(!1), T.useContext(bu).location;
}
function Sc(o) {
  T.useContext(Tt).static || T.useLayoutEffect(o);
}
function kc() {
  let { isDataRoute: o } = T.useContext(zt);
  return o ? wp() : ip();
}
function ip() {
  An() || _e(!1);
  let o = T.useContext(Hl),
    { basename: c, future: a, navigator: v } = T.useContext(Tt),
    { matches: p } = T.useContext(zt),
    { pathname: w } = Bn(),
    S = JSON.stringify(Zu(p, a.v7_relativeSplatPath)),
    P = T.useRef(!1);
  return (
    Sc(() => {
      P.current = !0;
    }),
    T.useCallback(
      function (L, j) {
        if ((j === void 0 && (j = {}), !P.current)) return;
        if (typeof L == "number") {
          v.go(L);
          return;
        }
        let _ = qu(L, JSON.parse(S), w, j.relative === "path");
        o == null &&
          c !== "/" &&
          (_.pathname = _.pathname === "/" ? c : Zt([c, _.pathname])),
          (j.replace ? v.replace : v.push)(_, j.state, j);
      },
      [c, v, S, w, o]
    )
  );
}
const up = T.createContext(null);
function op(o) {
  let c = T.useContext(zt).outlet;
  return c && T.createElement(up.Provider, { value: o }, c);
}
function Ql(o, c) {
  let { relative: a } = c === void 0 ? {} : c,
    { future: v } = T.useContext(Tt),
    { matches: p } = T.useContext(zt),
    { pathname: w } = Bn(),
    S = JSON.stringify(Zu(p, v.v7_relativeSplatPath));
  return T.useMemo(() => qu(o, JSON.parse(S), w, a === "path"), [o, S, w, a]);
}
function ap(o, c) {
  return sp(o);
}
function sp(o, c, a, v) {
  An() || _e(!1);
  let { navigator: p } = T.useContext(Tt),
    { matches: w } = T.useContext(zt),
    S = w[w.length - 1],
    P = S ? S.params : {};
  S && S.pathname;
  let k = S ? S.pathnameBase : "/";
  S && S.route;
  let L = Bn(),
    j;
  j = L;
  let _ = j.pathname || "/",
    $ = _;
  if (k !== "/") {
    let V = k.replace(/^\//, "").split("/");
    $ = "/" + _.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let ee = Dd(o, { pathname: $ });
  return hp(
    ee &&
      ee.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, P, V.params),
          pathname: Zt([
            k,
            p.encodeLocation
              ? p.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? k
              : Zt([
                  k,
                  p.encodeLocation
                    ? p.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        })
      ),
    w,
    a,
    v
  );
}
function cp() {
  let o = gp(),
    c = np(o)
      ? o.status + " " + o.statusText
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    a = o instanceof Error ? o.stack : null,
    p = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return T.createElement(
    T.Fragment,
    null,
    T.createElement("h2", null, "Unexpected Application Error!"),
    T.createElement("h3", { style: { fontStyle: "italic" } }, c),
    a ? T.createElement("pre", { style: p }, a) : null,
    null
  );
}
const fp = T.createElement(cp, null);
class dp extends T.Component {
  constructor(c) {
    super(c),
      (this.state = {
        location: c.location,
        revalidation: c.revalidation,
        error: c.error,
      });
  }
  static getDerivedStateFromError(c) {
    return { error: c };
  }
  static getDerivedStateFromProps(c, a) {
    return a.location !== c.location ||
      (a.revalidation !== "idle" && c.revalidation === "idle")
      ? { error: c.error, location: c.location, revalidation: c.revalidation }
      : {
          error: c.error !== void 0 ? c.error : a.error,
          location: a.location,
          revalidation: c.revalidation || a.revalidation,
        };
  }
  componentDidCatch(c, a) {
    console.error(
      "React Router caught the following error during render",
      c,
      a
    );
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          zt.Provider,
          { value: this.props.routeContext },
          T.createElement(wc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function pp(o) {
  let { routeContext: c, match: a, children: v } = o,
    p = T.useContext(Hl);
  return (
    p &&
      p.static &&
      p.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (p.staticContext._deepestRenderedBoundaryId = a.route.id),
    T.createElement(zt.Provider, { value: c }, v)
  );
}
function hp(o, c, a, v) {
  var p;
  if (
    (c === void 0 && (c = []),
    a === void 0 && (a = null),
    v === void 0 && (v = null),
    o == null)
  ) {
    var w;
    if (!a) return null;
    if (a.errors) o = a.matches;
    else if (
      (w = v) != null &&
      w.v7_partialHydration &&
      c.length === 0 &&
      !a.initialized &&
      a.matches.length > 0
    )
      o = a.matches;
    else return null;
  }
  let S = o,
    P = (p = a) == null ? void 0 : p.errors;
  if (P != null) {
    let j = S.findIndex(
      (_) => _.route.id && (P == null ? void 0 : P[_.route.id]) !== void 0
    );
    j >= 0 || _e(!1), (S = S.slice(0, Math.min(S.length, j + 1)));
  }
  let k = !1,
    L = -1;
  if (a && v && v.v7_partialHydration)
    for (let j = 0; j < S.length; j++) {
      let _ = S[j];
      if (
        ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (L = j),
        _.route.id)
      ) {
        let { loaderData: $, errors: ee } = a,
          Z =
            _.route.loader &&
            $[_.route.id] === void 0 &&
            (!ee || ee[_.route.id] === void 0);
        if (_.route.lazy || Z) {
          (k = !0), L >= 0 ? (S = S.slice(0, L + 1)) : (S = [S[0]]);
          break;
        }
      }
    }
  return S.reduceRight((j, _, $) => {
    let ee,
      Z = !1,
      V = null,
      A = null;
    a &&
      ((ee = P && _.route.id ? P[_.route.id] : void 0),
      (V = _.route.errorElement || fp),
      k &&
        (L < 0 && $ === 0
          ? ((Z = !0), (A = null))
          : L === $ &&
            ((Z = !0), (A = _.route.hydrateFallbackElement || null))));
    let ie = c.concat(S.slice(0, $ + 1)),
      X = () => {
        let b;
        return (
          ee
            ? (b = V)
            : Z
            ? (b = A)
            : _.route.Component
            ? (b = T.createElement(_.route.Component, null))
            : _.route.element
            ? (b = _.route.element)
            : (b = j),
          T.createElement(pp, {
            match: _,
            routeContext: { outlet: j, matches: ie, isDataRoute: a != null },
            children: b,
          })
        );
      };
    return a && (_.route.ErrorBoundary || _.route.errorElement || $ === 0)
      ? T.createElement(dp, {
          location: a.location,
          revalidation: a.revalidation,
          component: V,
          error: ee,
          children: X(),
          routeContext: { outlet: null, matches: ie, isDataRoute: !0 },
        })
      : X();
  }, null);
}
var xc = (function (o) {
    return (
      (o.UseBlocker = "useBlocker"),
      (o.UseRevalidator = "useRevalidator"),
      (o.UseNavigateStable = "useNavigate"),
      o
    );
  })(xc || {}),
  Vl = (function (o) {
    return (
      (o.UseBlocker = "useBlocker"),
      (o.UseLoaderData = "useLoaderData"),
      (o.UseActionData = "useActionData"),
      (o.UseRouteError = "useRouteError"),
      (o.UseNavigation = "useNavigation"),
      (o.UseRouteLoaderData = "useRouteLoaderData"),
      (o.UseMatches = "useMatches"),
      (o.UseRevalidator = "useRevalidator"),
      (o.UseNavigateStable = "useNavigate"),
      (o.UseRouteId = "useRouteId"),
      o
    );
  })(Vl || {});
function mp(o) {
  let c = T.useContext(Hl);
  return c || _e(!1), c;
}
function vp(o) {
  let c = T.useContext(gc);
  return c || _e(!1), c;
}
function yp(o) {
  let c = T.useContext(zt);
  return c || _e(!1), c;
}
function Ec(o) {
  let c = yp(),
    a = c.matches[c.matches.length - 1];
  return a.route.id || _e(!1), a.route.id;
}
function gp() {
  var o;
  let c = T.useContext(wc),
    a = vp(Vl.UseRouteError),
    v = Ec(Vl.UseRouteError);
  return c !== void 0 ? c : (o = a.errors) == null ? void 0 : o[v];
}
function wp() {
  let { router: o } = mp(xc.UseNavigateStable),
    c = Ec(Vl.UseNavigateStable),
    a = T.useRef(!1);
  return (
    Sc(() => {
      a.current = !0;
    }),
    T.useCallback(
      function (p, w) {
        w === void 0 && (w = {}),
          a.current &&
            (typeof p == "number"
              ? o.navigate(p)
              : o.navigate(p, $l({ fromRouteId: c }, w)));
      },
      [o, c]
    )
  );
}
const ac = {};
function Sp(o, c) {
  ac[c] || ((ac[c] = !0), console.warn(c));
}
const sc = (o, c, a) =>
  Sp(
    o,
    "⚠️ React Router Future Flag Warning: " +
      c +
      ". " +
      ("You can use the `" + o + "` future flag to opt-in early. ") +
      ("For more information, see " + a + ".")
  );
function kp(o, c) {
  (o == null ? void 0 : o.v7_startTransition) === void 0 &&
    sc(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    (o == null ? void 0 : o.v7_relativeSplatPath) === void 0 &&
      sc(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function xp(o) {
  let { to: c, replace: a, state: v, relative: p } = o;
  An() || _e(!1);
  let { future: w, static: S } = T.useContext(Tt),
    { matches: P } = T.useContext(zt),
    { pathname: k } = Bn(),
    L = kc(),
    j = qu(c, Zu(P, w.v7_relativeSplatPath), k, p === "path"),
    _ = JSON.stringify(j);
  return (
    T.useEffect(
      () => L(JSON.parse(_), { replace: a, state: v, relative: p }),
      [L, _, p, a, v]
    ),
    null
  );
}
function Cc(o) {
  return op(o.context);
}
function Ep(o) {
  let {
    basename: c = "/",
    children: a = null,
    location: v,
    navigationType: p = dn.Pop,
    navigator: w,
    static: S = !1,
    future: P,
  } = o;
  An() && _e(!1);
  let k = c.replace(/^\/*/, "/"),
    L = T.useMemo(
      () => ({
        basename: k,
        navigator: w,
        static: S,
        future: $l({ v7_relativeSplatPath: !1 }, P),
      }),
      [k, P, w, S]
    );
  typeof v == "string" && (v = Rr(v));
  let {
      pathname: j = "/",
      search: _ = "",
      hash: $ = "",
      state: ee = null,
      key: Z = "default",
    } = v,
    V = T.useMemo(() => {
      let A = Un(j, k);
      return A == null
        ? null
        : {
            location: { pathname: A, search: _, hash: $, state: ee, key: Z },
            navigationType: p,
          };
    }, [k, j, _, $, ee, Z, p]);
  return V == null
    ? null
    : T.createElement(
        Tt.Provider,
        { value: L },
        T.createElement(bu.Provider, { children: a, value: V })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wl() {
  return (
    (Wl = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var c = 1; c < arguments.length; c++) {
            var a = arguments[c];
            for (var v in a)
              Object.prototype.hasOwnProperty.call(a, v) && (o[v] = a[v]);
          }
          return o;
        }),
    Wl.apply(this, arguments)
  );
}
function _c(o, c) {
  if (o == null) return {};
  var a = {},
    v = Object.keys(o),
    p,
    w;
  for (w = 0; w < v.length; w++)
    (p = v[w]), !(c.indexOf(p) >= 0) && (a[p] = o[p]);
  return a;
}
function Cp(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function _p(o, c) {
  return o.button === 0 && (!c || c === "_self") && !Cp(o);
}
const Pp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Np = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Rp = "6";
try {
  window.__reactRouterVersion = Rp;
} catch {}
const Lp = T.createContext({ isTransitioning: !1 }),
  Tp = "startTransition",
  cc = Nd[Tp];
function zp(o) {
  let { basename: c, children: a, future: v, window: p } = o,
    w = T.useRef();
  w.current == null && (w.current = Od({ window: p, v5Compat: !0 }));
  let S = w.current,
    [P, k] = T.useState({ action: S.action, location: S.location }),
    { v7_startTransition: L } = v || {},
    j = T.useCallback(
      (_) => {
        L && cc ? cc(() => k(_)) : k(_);
      },
      [k, L]
    );
  return (
    T.useLayoutEffect(() => S.listen(j), [S, j]),
    T.useEffect(() => kp(v), [v]),
    T.createElement(Ep, {
      basename: c,
      children: a,
      location: P.location,
      navigationType: P.action,
      navigator: S,
      future: v,
    })
  );
}
const jp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Op = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ip = T.forwardRef(function (c, a) {
    let {
        onClick: v,
        relative: p,
        reloadDocument: w,
        replace: S,
        state: P,
        target: k,
        to: L,
        preventScrollReset: j,
        viewTransition: _,
      } = c,
      $ = _c(c, Pp),
      { basename: ee } = T.useContext(Tt),
      Z,
      V = !1;
    if (typeof L == "string" && Op.test(L) && ((Z = L), jp))
      try {
        let b = new URL(window.location.href),
          G = L.startsWith("//") ? new URL(b.protocol + L) : new URL(L),
          Se = Un(G.pathname, ee);
        G.origin === b.origin && Se != null
          ? (L = Se + G.search + G.hash)
          : (V = !0);
      } catch {}
    let A = lp(L, { relative: p }),
      ie = Fp(L, {
        replace: S,
        state: P,
        target: k,
        preventScrollReset: j,
        relative: p,
        viewTransition: _,
      });
    function X(b) {
      v && v(b), b.defaultPrevented || ie(b);
    }
    return T.createElement(
      "a",
      Wl({}, $, { href: Z || A, onClick: V || w ? v : X, ref: a, target: k })
    );
  }),
  Mp = T.forwardRef(function (c, a) {
    let {
        "aria-current": v = "page",
        caseSensitive: p = !1,
        className: w = "",
        end: S = !1,
        style: P,
        to: k,
        viewTransition: L,
        children: j,
      } = c,
      _ = _c(c, Np),
      $ = Ql(k, { relative: _.relative }),
      ee = Bn(),
      Z = T.useContext(gc),
      { navigator: V, basename: A } = T.useContext(Tt),
      ie = Z != null && Up($) && L === !0,
      X = V.encodeLocation ? V.encodeLocation($).pathname : $.pathname,
      b = ee.pathname,
      G =
        Z && Z.navigation && Z.navigation.location
          ? Z.navigation.location.pathname
          : null;
    p ||
      ((b = b.toLowerCase()),
      (G = G ? G.toLowerCase() : null),
      (X = X.toLowerCase())),
      G && A && (G = Un(G, A) || G);
    const Se = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
    let xe = b === X || (!S && b.startsWith(X) && b.charAt(Se) === "/"),
      Le =
        G != null &&
        (G === X || (!S && G.startsWith(X) && G.charAt(X.length) === "/")),
      je = { isActive: xe, isPending: Le, isTransitioning: ie },
      pt = xe ? v : void 0,
      Ke;
    typeof w == "function"
      ? (Ke = w(je))
      : (Ke = [
          w,
          xe ? "active" : null,
          Le ? "pending" : null,
          ie ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let kt = typeof P == "function" ? P(je) : P;
    return T.createElement(
      Ip,
      Wl({}, _, {
        "aria-current": pt,
        className: Ke,
        ref: a,
        style: kt,
        to: k,
        viewTransition: L,
      }),
      typeof j == "function" ? j(je) : j
    );
  });
var Gu;
(function (o) {
  (o.UseScrollRestoration = "useScrollRestoration"),
    (o.UseSubmit = "useSubmit"),
    (o.UseSubmitFetcher = "useSubmitFetcher"),
    (o.UseFetcher = "useFetcher"),
    (o.useViewTransitionState = "useViewTransitionState");
})(Gu || (Gu = {}));
var fc;
(function (o) {
  (o.UseFetcher = "useFetcher"),
    (o.UseFetchers = "useFetchers"),
    (o.UseScrollRestoration = "useScrollRestoration");
})(fc || (fc = {}));
function Dp(o) {
  let c = T.useContext(Hl);
  return c || _e(!1), c;
}
function Fp(o, c) {
  let {
      target: a,
      replace: v,
      state: p,
      preventScrollReset: w,
      relative: S,
      viewTransition: P,
    } = c === void 0 ? {} : c,
    k = kc(),
    L = Bn(),
    j = Ql(o, { relative: S });
  return T.useCallback(
    (_) => {
      if (_p(_, a)) {
        _.preventDefault();
        let $ = v !== void 0 ? v : Bl(L) === Bl(j);
        k(o, {
          replace: $,
          state: p,
          preventScrollReset: w,
          relative: S,
          viewTransition: P,
        });
      }
    },
    [L, k, j, v, p, a, o, w, S, P]
  );
}
function Up(o, c) {
  c === void 0 && (c = {});
  let a = T.useContext(Lp);
  a == null && _e(!1);
  let { basename: v } = Dp(Gu.useViewTransitionState),
    p = Ql(o, { relative: c.relative });
  if (!a.isTransitioning) return !1;
  let w = Un(a.currentLocation.pathname, v) || a.currentLocation.pathname,
    S = Un(a.nextLocation.pathname, v) || a.nextLocation.pathname;
  return Xu(p.pathname, S) != null || Xu(p.pathname, w) != null;
}
const Ap = "modulepreload",
  Bp = function (o) {
    return "/" + o;
  },
  dc = {},
  Kl = function (c, a, v) {
    let p = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const S = document.querySelector("meta[property=csp-nonce]"),
        P =
          (S == null ? void 0 : S.nonce) ||
          (S == null ? void 0 : S.getAttribute("nonce"));
      p = Promise.allSettled(
        a.map((k) => {
          if (((k = Bp(k)), k in dc)) return;
          dc[k] = !0;
          const L = k.endsWith(".css"),
            j = L ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${k}"]${j}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = L ? "stylesheet" : Ap),
            L || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = k),
            P && _.setAttribute("nonce", P),
            document.head.appendChild(_),
            L)
          )
            return new Promise(($, ee) => {
              _.addEventListener("load", $),
                _.addEventListener("error", () =>
                  ee(new Error(`Unable to preload CSS for ${k}`))
                );
            });
        })
      );
    }
    function w(S) {
      const P = new Event("vite:preloadError", { cancelable: !0 });
      if (((P.payload = S), window.dispatchEvent(P), !P.defaultPrevented))
        throw S;
    }
    return p.then((S) => {
      for (const P of S || []) P.status === "rejected" && w(P.reason);
      return c().catch(w);
    });
  },
  $p = () =>
    I.jsxs("div", {
      className: "input-container",
      children: [
        I.jsx("input", {
          type: "text",
          placeholder: "Type a message",
          className: "input",
        }),
        I.jsx("button", { children: "search" }),
        I.jsx("button", { children: "start new" }),
        I.jsx("button", { children: "voice" }),
      ],
    }),
  Vp = () => I.jsx("div", { children: "conversationList" }),
  Wp = () =>
    I.jsxs("div", {
      className: "chatbot-container",
      children: [
        I.jsx("div", {
          className: "conversation-list",
          children: I.jsx(Vp, {}),
        }),
        I.jsx($p, {}),
      ],
    }),
  Hp = () => I.jsx(Wp, {}),
  Qp = T.lazy(() => Kl(() => Promise.resolve().then(() => bp), void 0)),
  Kp = T.lazy(() => Kl(() => Promise.resolve().then(() => lh), void 0)),
  Yp = T.lazy(() => Kl(() => Promise.resolve().then(() => uh), void 0)),
  Xp = T.lazy(() => Kl(() => Promise.resolve().then(() => ah), void 0)),
  Gp = [
    { path: "/chatbot", element: I.jsx(Hp, {}) },
    {
      path: "/admin",
      element: I.jsx(T.Suspense, {
        fallback: I.jsx("div", { children: "loading" }),
        children: I.jsx(Qp, {}),
      }),
      children: [
        { path: "dashboard", element: I.jsx(Yp, {}) },
        { path: "history", element: I.jsx(Kp, {}) },
        { path: "settings", element: I.jsx(Xp, {}) },
      ],
    },
    { path: "/", element: I.jsx(xp, { to: "/admin/history" }) },
  ];
function Jp() {
  const o = ap(Gp);
  return I.jsxs(I.Fragment, { children: [o, I.jsx(Cc, {})] });
}
jd.createRoot(document.getElementById("root")).render(
  I.jsx(T.StrictMode, { children: I.jsx(zp, { children: I.jsx(Jp, {}) }) })
);
const Zp = () => {
    const [o, c] = Ku.useState("History"),
      [a, v] = Ku.useState(!1),
      p = [
        {
          path: "/admin/history",
          text: "History",
          src: "/chatbot/icons/chat.svg",
        },
        {
          path: "/admin/settings",
          text: "Settings",
          src: "/chatbot/icons/setting.svg",
        },
        {
          path: "/admin/dashboard",
          text: "Dashboard",
          src: "/chatbot/icons/dashboard.svg",
        },
      ];
    return I.jsxs("nav", {
      className: a ? "expanded left-panel" : "left-panel",
      children: [
        p.map((w) =>
          I.jsxs(
            Mp,
            {
              to: w.path,
              className: w.text === o ? "active" : "",
              onClick: () => c(w.text),
              children: [
                I.jsx("span", {
                  className: "icon",
                  children: I.jsx("img", {
                    src: w.src,
                    alt: "icon",
                    className: w.text.toLowerCase(),
                  }),
                }),
                w.text,
              ],
            },
            w.text
          )
        ),
        I.jsx("button", {
          onClick: () => v(!a),
          "aria-label": "expand navigation bar",
          "aria-expanded": a,
          className: a ? "expanded" : "collapsed",
        }),
      ],
    });
  },
  qp = () =>
    I.jsxs("div", {
      className: "app-container",
      children: [
        I.jsxs("header", {
          children: [
            I.jsx("a", {
              href: "https://github.com/Harley-Li/Me",
              className: "site-logo",
            }),
            " ",
            I.jsx("span", { children: "Conversational UI" }),
          ],
        }),
        I.jsxs("div", {
          className: "main-content-area",
          children: [I.jsx(Zp, {}), I.jsx(Cc, {})],
        }),
      ],
    }),
  bp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function eh() {
  return I.jsx("div", {
    className: "search-box",
    children: I.jsx("input", { type: "search" }),
  });
}
const th = () => {
    const o = ["ISA", "SIPP", "Fund", "Transfer", "Investment"],
      c = () => {
        const p = Math.floor(Math.random() * 4) + 0;
        if (p === 4) return [o[p], o[p - 2], o[p - 3]];
        if (p === 0) return [o[p], o[p + 3], o[p + 4]];
        if (p === 2) return [o[p], o[0]];
        if (p === 1) return [o[p]];
        if (p === 3) return [o[p], o[1]];
      },
      a = Math.floor(Math.random() * 4),
      v = Math.floor(Math.random() * 59);
    return I.jsxs("div", {
      className: "conversation",
      children: [
        I.jsx("div", {
          className: "direction",
          children: I.jsx("ul", {
            children: c().map((p, w) => I.jsx("li", { children: p }, w)),
          }),
        }),
        I.jsxs("div", {
          className: "result",
          children: [
            I.jsxs("div", {
              className: "date",
              children: [
                "Duration:",
                I.jsxs("span", {
                  children: [
                    Math.floor(Math.random() * 10),
                    ":",
                    (v < 10 ? "0" : "") + v,
                  ],
                }),
              ],
            }),
            I.jsx("div", {
              className: "star-container",
              children: new Array(5).fill(0).map((p, w) =>
                I.jsx(
                  "span",
                  {
                    className: "star " + (w < a + 1 ? "filled" : ""),
                    children: "★",
                  },
                  w
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  nh = () =>
    I.jsxs("div", {
      className: "conversation-history-container",
      children: [
        I.jsx(eh, {}),
        I.jsx("div", { children: "All Conversations" }),
        I.jsx("div", {
          className: "conversation-list",
          children: [1, 2, 3, 4, 5, 6, 7].map((o, c) => I.jsx(th, {}, c)),
        }),
      ],
    }),
  rh = () =>
    I.jsx(I.Fragment, {
      children: I.jsxs("div", {
        className: "history-container",
        children: [
          I.jsx("aside", {
            "aria-labelledby": "sidebar_title",
            className: "left-panel",
            children: I.jsx(nh, {}),
          }),
          I.jsx("main", { children: "History" }),
          I.jsx("aside", {
            "aria-labelledby": "sidebar_title",
            className: "right-panel",
          }),
        ],
      }),
    }),
  lh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function ih() {
  return I.jsx(I.Fragment, {
    children: I.jsx("main", { children: "Dashboard" }),
  });
}
const uh = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ih }, Symbol.toStringTag, {
    value: "Module",
  })
);
function oh() {
  return I.jsxs(I.Fragment, {
    children: [
      I.jsx("main", { children: "Settings" }),
      I.jsx("aside", {
        "aria-labelledby": "sidebar_title",
        className: "right-panel",
      }),
    ],
  });
}
const ah = Object.freeze(
  Object.defineProperty({ __proto__: null, default: oh }, Symbol.toStringTag, {
    value: "Module",
  })
);
