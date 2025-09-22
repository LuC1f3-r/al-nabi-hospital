var n1 = Object.defineProperty;
var r1 = (e, t, n) =>
  t in e
    ? n1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var I = (e, t, n) => r1(e, typeof t != "symbol" ? t + "" : t, n);
function i1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a &&
            Object.defineProperty(
              e,
              i,
              a.get ? a : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var a1 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Kg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qg = { exports: {} },
  fl = {},
  Gg = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xa = Symbol.for("react.element"),
  o1 = Symbol.for("react.portal"),
  s1 = Symbol.for("react.fragment"),
  l1 = Symbol.for("react.strict_mode"),
  u1 = Symbol.for("react.profiler"),
  c1 = Symbol.for("react.provider"),
  d1 = Symbol.for("react.context"),
  f1 = Symbol.for("react.forward_ref"),
  p1 = Symbol.for("react.suspense"),
  h1 = Symbol.for("react.memo"),
  m1 = Symbol.for("react.lazy"),
  bp = Symbol.iterator;
function g1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bp && e[bp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xg = Object.assign,
  Zg = {};
function Ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zg),
    (this.updater = n || qg);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jg() {}
Jg.prototype = Ni.prototype;
function xd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zg),
    (this.updater = n || qg);
}
var wd = (xd.prototype = new Jg());
wd.constructor = xd;
Xg(wd, Ni.prototype);
wd.isPureReactComponent = !0;
var Sp = Array.isArray,
  ey = Object.prototype.hasOwnProperty,
  bd = { current: null },
  ty = { key: !0, ref: !0, __self: !0, __source: !0 };
function ny(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      ey.call(t, r) && !ty.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Xa,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: bd.current,
  };
}
function y1(e, t) {
  return {
    $$typeof: Xa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xa;
}
function v1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var kp = /\/+/g;
function Kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? v1("" + e.key)
    : t.toString(36);
}
function Ko(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xa:
          case o1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Kl(o, 0) : r),
      Sp(i)
        ? ((n = ""),
          e != null && (n = e.replace(kp, "$&/") + "/"),
          Ko(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Sd(i) &&
            (i = y1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(kp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Sp(e)))
    for (var s = 0; s < e.length; s++) {
      a = e[s];
      var l = r + Kl(a, s);
      o += Ko(a, t, n, l, i);
    }
  else if (((l = g1(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(a = e.next()).done; )
      (a = a.value), (l = r + Kl(a, s++)), (o += Ko(a, t, n, l, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function mo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ko(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function x1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Je = { current: null },
  Qo = { transition: null },
  w1 = {
    ReactCurrentDispatcher: Je,
    ReactCurrentBatchConfig: Qo,
    ReactCurrentOwner: bd,
  };
function ry() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: mo,
  forEach: function (e, t, n) {
    mo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Ni;
X.Fragment = s1;
X.Profiler = u1;
X.PureComponent = xd;
X.StrictMode = l1;
X.Suspense = p1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w1;
X.act = ry;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xg({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = bd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      ey.call(t, l) &&
        !ty.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Xa, type: e.type, key: i, ref: a, props: r, _owner: o };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: d1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: c1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = ny;
X.createFactory = function (e) {
  var t = ny.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: f1, render: e };
};
X.isValidElement = Sd;
X.lazy = function (e) {
  return { $$typeof: m1, _payload: { _status: -1, _result: e }, _init: x1 };
};
X.memo = function (e, t) {
  return { $$typeof: h1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Qo.transition;
  Qo.transition = {};
  try {
    e();
  } finally {
    Qo.transition = t;
  }
};
X.unstable_act = ry;
X.useCallback = function (e, t) {
  return Je.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Je.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Je.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Je.current.useEffect(e, t);
};
X.useId = function () {
  return Je.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Je.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Je.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Je.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Je.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Je.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Je.current.useRef(e);
};
X.useState = function (e) {
  return Je.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Je.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Je.current.useTransition();
};
X.version = "18.3.1";
Gg.exports = X;
var x = Gg.exports;
const _ = Kg(x),
  iy = i1({ __proto__: null, default: _ }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b1 = x,
  S1 = Symbol.for("react.element"),
  k1 = Symbol.for("react.fragment"),
  D1 = Object.prototype.hasOwnProperty,
  C1 = b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  E1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ay(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) D1.call(t, r) && !E1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: S1,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: C1.current,
  };
}
fl.Fragment = k1;
fl.jsx = ay;
fl.jsxs = ay;
Qg.exports = fl;
var p = Qg.exports,
  oy = { exports: {} },
  mt = {},
  sy = { exports: {} },
  ly = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, N) {
    var O = T.length;
    T.push(N);
    e: for (; 0 < O; ) {
      var W = (O - 1) >>> 1,
        q = T[W];
      if (0 < i(q, N)) (T[W] = N), (T[O] = q), (O = W);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var N = T[0],
      O = T.pop();
    if (O !== N) {
      T[0] = O;
      e: for (var W = 0, q = T.length, Me = q >>> 1; W < Me; ) {
        var P = 2 * (W + 1) - 1,
          Z = T[P],
          he = P + 1,
          ut = T[he];
        if (0 > i(Z, O))
          he < q && 0 > i(ut, Z)
            ? ((T[W] = ut), (T[he] = O), (W = he))
            : ((T[W] = Z), (T[P] = O), (W = P));
        else if (he < q && 0 > i(ut, O)) (T[W] = ut), (T[he] = O), (W = he);
        else break e;
      }
    }
    return N;
  }
  function i(T, N) {
    var O = T.sortIndex - N.sortIndex;
    return O !== 0 ? O : T.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    w = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(T) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= T)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function S(T) {
    if (((w = !1), y(T), !v))
      if (n(l) !== null) (v = !0), H(k);
      else {
        var N = n(u);
        N !== null && V(S, N.startTime - T);
      }
  }
  function k(T, N) {
    (v = !1), w && ((w = !1), g(D), (D = -1)), (h = !0);
    var O = f;
    try {
      for (
        y(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (T && !B()));

      ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var q = W(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(l) && r(l),
            y(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Me = !0;
      else {
        var P = n(u);
        P !== null && V(S, P.startTime - N), (Me = !1);
      }
      return Me;
    } finally {
      (d = null), (f = O), (h = !1);
    }
  }
  var E = !1,
    C = null,
    D = -1,
    M = 5,
    A = -1;
  function B() {
    return !(e.unstable_now() - A < M);
  }
  function j() {
    if (C !== null) {
      var T = e.unstable_now();
      A = T;
      var N = !0;
      try {
        N = C(!0, T);
      } finally {
        N ? U() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var U;
  if (typeof m == "function")
    U = function () {
      m(j);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(),
      Q = K.port2;
    (K.port1.onmessage = j),
      (U = function () {
        Q.postMessage(null);
      });
  } else
    U = function () {
      b(j, 0);
    };
  function H(T) {
    (C = T), E || ((E = !0), U());
  }
  function V(T, N) {
    D = b(function () {
      T(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), H(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var O = f;
      f = N;
      try {
        return T();
      } finally {
        f = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = f;
      f = T;
      try {
        return N();
      } finally {
        f = O;
      }
    }),
    (e.unstable_scheduleCallback = function (T, N, O) {
      var W = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? W + O : W))
          : (O = W),
        T)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = O + q),
        (T = {
          id: c++,
          callback: N,
          priorityLevel: T,
          startTime: O,
          expirationTime: q,
          sortIndex: -1,
        }),
        O > W
          ? ((T.sortIndex = O),
            t(u, T),
            n(l) === null &&
              T === n(u) &&
              (w ? (g(D), (D = -1)) : (w = !0), V(S, O - W)))
          : ((T.sortIndex = q), t(l, T), v || h || ((v = !0), H(k))),
        T
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (T) {
      var N = f;
      return function () {
        var O = f;
        f = N;
        try {
          return T.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(ly);
sy.exports = ly;
var P1 = sy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var M1 = x,
  ht = P1;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var uy = new Set(),
  Ca = {};
function jr(e, t) {
  hi(e, t), hi(e + "Capture", t);
}
function hi(e, t) {
  for (Ca[e] = t, e = 0; e < t.length; e++) uy.add(t[e]);
}
var bn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Uu = Object.prototype.hasOwnProperty,
  T1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Dp = {},
  Cp = {};
function N1(e) {
  return Uu.call(Cp, e)
    ? !0
    : Uu.call(Dp, e)
    ? !1
    : T1.test(e)
    ? (Cp[e] = !0)
    : ((Dp[e] = !0), !1);
}
function _1(e, t, n, r) {
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
function A1(e, t, n, r) {
  if (t === null || typeof t > "u" || _1(e, t, n, r)) return !0;
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
function et(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var Ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ye[e] = new et(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ye[t] = new et(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ye[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ye[e] = new et(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ye[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ye[e] = new et(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ye[e] = new et(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ye[e] = new et(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ye[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var kd = /[\-:]([a-z])/g;
function Dd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kd, Dd);
    Ye[t] = new et(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kd, Dd);
    Ye[t] = new et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(kd, Dd);
  Ye[t] = new et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ye[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ye.xlinkHref = new et(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ye[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cd(e, t, n, r) {
  var i = Ye.hasOwnProperty(t) ? Ye[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (A1(t, n, i, r) && (n = null),
    r || i === null
      ? N1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mn = M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  go = Symbol.for("react.element"),
  Yr = Symbol.for("react.portal"),
  Wr = Symbol.for("react.fragment"),
  Ed = Symbol.for("react.strict_mode"),
  Ku = Symbol.for("react.profiler"),
  cy = Symbol.for("react.provider"),
  dy = Symbol.for("react.context"),
  Pd = Symbol.for("react.forward_ref"),
  Qu = Symbol.for("react.suspense"),
  Gu = Symbol.for("react.suspense_list"),
  Md = Symbol.for("react.memo"),
  jn = Symbol.for("react.lazy"),
  fy = Symbol.for("react.offscreen"),
  Ep = Symbol.iterator;
function Yi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ep && e[Ep]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  Ql;
function ra(e) {
  if (Ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ql = (t && t[1]) || "";
    }
  return (
    `
` +
    Ql +
    e
  );
}
var Gl = !1;
function ql(e, t) {
  if (!e || Gl) return "";
  Gl = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          s = a.length - 1;
        1 <= o && 0 <= s && i[o] !== a[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== a[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== a[s])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ra(e) : "";
}
function R1(e) {
  switch (e.tag) {
    case 5:
      return ra(e.type);
    case 16:
      return ra("Lazy");
    case 13:
      return ra("Suspense");
    case 19:
      return ra("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ql(e.type, !1)), e;
    case 11:
      return (e = ql(e.type.render, !1)), e;
    case 1:
      return (e = ql(e.type, !0)), e;
    default:
      return "";
  }
}
function qu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wr:
      return "Fragment";
    case Yr:
      return "Portal";
    case Ku:
      return "Profiler";
    case Ed:
      return "StrictMode";
    case Qu:
      return "Suspense";
    case Gu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dy:
        return (e.displayName || "Context") + ".Consumer";
      case cy:
        return (e._context.displayName || "Context") + ".Provider";
      case Pd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Md:
        return (
          (t = e.displayName || null), t !== null ? t : qu(e.type) || "Memo"
        );
      case jn:
        (t = e._payload), (e = e._init);
        try {
          return qu(e(t));
        } catch {}
    }
  return null;
}
function O1(e) {
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
      return qu(t);
    case 8:
      return t === Ed ? "StrictMode" : "Mode";
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
function Zn(e) {
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
function py(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function j1(e) {
  var t = py(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yo(e) {
  e._valueTracker || (e._valueTracker = j1(e));
}
function hy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = py(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xu(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function my(e, t) {
  (t = t.checked), t != null && Cd(e, "checked", t, !1);
}
function Zu(e, t) {
  my(e, t);
  var n = Zn(t.value),
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
    ? Ju(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ju(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mp(e, t, n) {
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
function Ju(e, t, n) {
  (t !== "number" || xs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ia = Array.isArray;
function ai(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ec(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (ia(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function gy(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Np(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vo,
  vy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vo = vo || document.createElement("div"),
          vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ea(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ca = {
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
  L1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ca).forEach(function (e) {
  L1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ca[t] = ca[e]);
  });
});
function xy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ca.hasOwnProperty(e) && ca[e])
    ? ("" + t).trim()
    : t + "px";
}
function wy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = xy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var I1 = we(
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
function nc(e, t) {
  if (t) {
    if (I1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function rc(e, t) {
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
var ic = null;
function Td(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ac = null,
  oi = null,
  si = null;
function _p(e) {
  if ((e = eo(e))) {
    if (typeof ac != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = yl(t)), ac(e.stateNode, e.type, t));
  }
}
function by(e) {
  oi ? (si ? si.push(e) : (si = [e])) : (oi = e);
}
function Sy() {
  if (oi) {
    var e = oi,
      t = si;
    if (((si = oi = null), _p(e), t)) for (e = 0; e < t.length; e++) _p(t[e]);
  }
}
function ky(e, t) {
  return e(t);
}
function Dy() {}
var Xl = !1;
function Cy(e, t, n) {
  if (Xl) return e(t, n);
  Xl = !0;
  try {
    return ky(e, t, n);
  } finally {
    (Xl = !1), (oi !== null || si !== null) && (Dy(), Sy());
  }
}
function Pa(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var oc = !1;
if (bn)
  try {
    var Wi = {};
    Object.defineProperty(Wi, "passive", {
      get: function () {
        oc = !0;
      },
    }),
      window.addEventListener("test", Wi, Wi),
      window.removeEventListener("test", Wi, Wi);
  } catch {
    oc = !1;
  }
function F1(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var da = !1,
  ws = null,
  bs = !1,
  sc = null,
  V1 = {
    onError: function (e) {
      (da = !0), (ws = e);
    },
  };
function B1(e, t, n, r, i, a, o, s, l) {
  (da = !1), (ws = null), F1.apply(V1, arguments);
}
function Y1(e, t, n, r, i, a, o, s, l) {
  if ((B1.apply(this, arguments), da)) {
    if (da) {
      var u = ws;
      (da = !1), (ws = null);
    } else throw Error(R(198));
    bs || ((bs = !0), (sc = u));
  }
}
function Lr(e) {
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
function Ey(e) {
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
function Ap(e) {
  if (Lr(e) !== e) throw Error(R(188));
}
function W1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Ap(i), e;
        if (a === r) return Ap(i), t;
        a = a.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Py(e) {
  return (e = W1(e)), e !== null ? My(e) : null;
}
function My(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = My(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ty = ht.unstable_scheduleCallback,
  Rp = ht.unstable_cancelCallback,
  H1 = ht.unstable_shouldYield,
  z1 = ht.unstable_requestPaint,
  Ce = ht.unstable_now,
  $1 = ht.unstable_getCurrentPriorityLevel,
  Nd = ht.unstable_ImmediatePriority,
  Ny = ht.unstable_UserBlockingPriority,
  Ss = ht.unstable_NormalPriority,
  U1 = ht.unstable_LowPriority,
  _y = ht.unstable_IdlePriority,
  pl = null,
  Xt = null;
function K1(e) {
  if (Xt && typeof Xt.onCommitFiberRoot == "function")
    try {
      Xt.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : q1,
  Q1 = Math.log,
  G1 = Math.LN2;
function q1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Q1(e) / G1) | 0)) | 0;
}
var xo = 64,
  wo = 4194304;
function aa(e) {
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
function ks(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = aa(s)) : ((a &= o), a !== 0 && (r = aa(a)));
  } else (o = n & ~i), o !== 0 ? (r = aa(o)) : a !== 0 && (r = aa(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Lt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function X1(e, t) {
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
function Z1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Lt(a),
      s = 1 << o,
      l = i[o];
    l === -1
      ? (!(s & n) || s & r) && (i[o] = X1(s, t))
      : l <= t && (e.expiredLanes |= s),
      (a &= ~s);
  }
}
function lc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ay() {
  var e = xo;
  return (xo <<= 1), !(xo & 4194240) && (xo = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Za(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Lt(t)),
    (e[t] = n);
}
function J1(e, t) {
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
    var i = 31 - Lt(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function _d(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Lt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var se = 0;
function Ry(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Oy,
  Ad,
  jy,
  Ly,
  Iy,
  uc = !1,
  bo = [],
  Wn = null,
  Hn = null,
  zn = null,
  Ma = new Map(),
  Ta = new Map(),
  In = [],
  eb =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Op(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Hn = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ma.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ta.delete(t.pointerId);
  }
}
function Hi(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = eo(t)), t !== null && Ad(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function tb(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Wn = Hi(Wn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Hn = Hi(Hn, e, t, n, r, i)), !0;
    case "mouseover":
      return (zn = Hi(zn, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return Ma.set(a, Hi(Ma.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), Ta.set(a, Hi(Ta.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Fy(e) {
  var t = pr(e.target);
  if (t !== null) {
    var n = Lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ey(n)), t !== null)) {
          (e.blockedOn = t),
            Iy(e.priority, function () {
              jy(n);
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
function Go(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ic = r), n.target.dispatchEvent(r), (ic = null);
    } else return (t = eo(n)), t !== null && Ad(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function jp(e, t, n) {
  Go(e) && n.delete(t);
}
function nb() {
  (uc = !1),
    Wn !== null && Go(Wn) && (Wn = null),
    Hn !== null && Go(Hn) && (Hn = null),
    zn !== null && Go(zn) && (zn = null),
    Ma.forEach(jp),
    Ta.forEach(jp);
}
function zi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    uc ||
      ((uc = !0),
      ht.unstable_scheduleCallback(ht.unstable_NormalPriority, nb)));
}
function Na(e) {
  function t(i) {
    return zi(i, e);
  }
  if (0 < bo.length) {
    zi(bo[0], e);
    for (var n = 1; n < bo.length; n++) {
      var r = bo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && zi(Wn, e),
      Hn !== null && zi(Hn, e),
      zn !== null && zi(zn, e),
      Ma.forEach(t),
      Ta.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    (r = In[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    Fy(n), n.blockedOn === null && In.shift();
}
var li = Mn.ReactCurrentBatchConfig,
  Ds = !0;
function rb(e, t, n, r) {
  var i = se,
    a = li.transition;
  li.transition = null;
  try {
    (se = 1), Rd(e, t, n, r);
  } finally {
    (se = i), (li.transition = a);
  }
}
function ib(e, t, n, r) {
  var i = se,
    a = li.transition;
  li.transition = null;
  try {
    (se = 4), Rd(e, t, n, r);
  } finally {
    (se = i), (li.transition = a);
  }
}
function Rd(e, t, n, r) {
  if (Ds) {
    var i = cc(e, t, n, r);
    if (i === null) lu(e, t, r, Cs, n), Op(e, r);
    else if (tb(i, e, t, n, r)) r.stopPropagation();
    else if ((Op(e, r), t & 4 && -1 < eb.indexOf(e))) {
      for (; i !== null; ) {
        var a = eo(i);
        if (
          (a !== null && Oy(a),
          (a = cc(e, t, n, r)),
          a === null && lu(e, t, r, Cs, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else lu(e, t, r, null, n);
  }
}
var Cs = null;
function cc(e, t, n, r) {
  if (((Cs = null), (e = Td(r)), (e = pr(e)), e !== null))
    if (((t = Lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ey(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Cs = e), null;
}
function Vy(e) {
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
      switch ($1()) {
        case Nd:
          return 1;
        case Ny:
          return 4;
        case Ss:
        case U1:
          return 16;
        case _y:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vn = null,
  Od = null,
  qo = null;
function By() {
  if (qo) return qo;
  var e,
    t = Od,
    n = t.length,
    r,
    i = "value" in Vn ? Vn.value : Vn.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (qo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Xo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function So() {
  return !0;
}
function Lp() {
  return !1;
}
function gt(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(a) : a[s]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? So
        : Lp),
      (this.isPropagationStopped = Lp),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = So));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = So));
      },
      persist: function () {},
      isPersistent: So,
    }),
    t
  );
}
var _i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jd = gt(_i),
  Ja = we({}, _i, { view: 0, detail: 0 }),
  ab = gt(Ja),
  Jl,
  eu,
  $i,
  hl = we({}, Ja, {
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
    getModifierState: Ld,
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
        : (e !== $i &&
            ($i && e.type === "mousemove"
              ? ((Jl = e.screenX - $i.screenX), (eu = e.screenY - $i.screenY))
              : (eu = Jl = 0),
            ($i = e)),
          Jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : eu;
    },
  }),
  Ip = gt(hl),
  ob = we({}, hl, { dataTransfer: 0 }),
  sb = gt(ob),
  lb = we({}, Ja, { relatedTarget: 0 }),
  tu = gt(lb),
  ub = we({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cb = gt(ub),
  db = we({}, _i, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fb = gt(db),
  pb = we({}, _i, { data: 0 }),
  Fp = gt(pb),
  hb = {
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
  mb = {
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
  gb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gb[e]) ? !!t[e] : !1;
}
function Ld() {
  return yb;
}
var vb = we({}, Ja, {
    key: function (e) {
      if (e.key) {
        var t = hb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mb[e.keyCode] || "Unidentified"
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
    getModifierState: Ld,
    charCode: function (e) {
      return e.type === "keypress" ? Xo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xb = gt(vb),
  wb = we({}, hl, {
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
  Vp = gt(wb),
  bb = we({}, Ja, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ld,
  }),
  Sb = gt(bb),
  kb = we({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Db = gt(kb),
  Cb = we({}, hl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Eb = gt(Cb),
  Pb = [9, 13, 27, 32],
  Id = bn && "CompositionEvent" in window,
  fa = null;
bn && "documentMode" in document && (fa = document.documentMode);
var Mb = bn && "TextEvent" in window && !fa,
  Yy = bn && (!Id || (fa && 8 < fa && 11 >= fa)),
  Bp = " ",
  Yp = !1;
function Wy(e, t) {
  switch (e) {
    case "keyup":
      return Pb.indexOf(t.keyCode) !== -1;
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
function Hy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hr = !1;
function Tb(e, t) {
  switch (e) {
    case "compositionend":
      return Hy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yp = !0), Bp);
    case "textInput":
      return (e = t.data), e === Bp && Yp ? null : e;
    default:
      return null;
  }
}
function Nb(e, t) {
  if (Hr)
    return e === "compositionend" || (!Id && Wy(e, t))
      ? ((e = By()), (qo = Od = Vn = null), (Hr = !1), e)
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
      return Yy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _b = {
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
function Wp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_b[e.type] : t === "textarea";
}
function zy(e, t, n, r) {
  by(r),
    (t = Es(t, "onChange")),
    0 < t.length &&
      ((n = new jd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var pa = null,
  _a = null;
function Ab(e) {
  t0(e, 0);
}
function ml(e) {
  var t = Ur(e);
  if (hy(t)) return e;
}
function Rb(e, t) {
  if (e === "change") return t;
}
var $y = !1;
if (bn) {
  var nu;
  if (bn) {
    var ru = "oninput" in document;
    if (!ru) {
      var Hp = document.createElement("div");
      Hp.setAttribute("oninput", "return;"),
        (ru = typeof Hp.oninput == "function");
    }
    nu = ru;
  } else nu = !1;
  $y = nu && (!document.documentMode || 9 < document.documentMode);
}
function zp() {
  pa && (pa.detachEvent("onpropertychange", Uy), (_a = pa = null));
}
function Uy(e) {
  if (e.propertyName === "value" && ml(_a)) {
    var t = [];
    zy(t, _a, e, Td(e)), Cy(Ab, t);
  }
}
function Ob(e, t, n) {
  e === "focusin"
    ? (zp(), (pa = t), (_a = n), pa.attachEvent("onpropertychange", Uy))
    : e === "focusout" && zp();
}
function jb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(_a);
}
function Lb(e, t) {
  if (e === "click") return ml(t);
}
function Ib(e, t) {
  if (e === "input" || e === "change") return ml(t);
}
function Fb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vt = typeof Object.is == "function" ? Object.is : Fb;
function Aa(e, t) {
  if (Vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Uu.call(t, i) || !Vt(e[i], t[i])) return !1;
  }
  return !0;
}
function $p(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Up(e, t) {
  var n = $p(e);
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
    n = $p(n);
  }
}
function Ky(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ky(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qy() {
  for (var e = window, t = xs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xs(e.document);
  }
  return t;
}
function Fd(e) {
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
function Vb(e) {
  var t = Qy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ky(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Up(n, a));
        var o = Up(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var Bb = bn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  dc = null,
  ha = null,
  fc = !1;
function Kp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fc ||
    zr == null ||
    zr !== xs(r) ||
    ((r = zr),
    "selectionStart" in r && Fd(r)
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
    (ha && Aa(ha, r)) ||
      ((ha = r),
      (r = Es(dc, "onSelect")),
      0 < r.length &&
        ((t = new jd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function ko(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: ko("Animation", "AnimationEnd"),
    animationiteration: ko("Animation", "AnimationIteration"),
    animationstart: ko("Animation", "AnimationStart"),
    transitionend: ko("Transition", "TransitionEnd"),
  },
  iu = {},
  Gy = {};
bn &&
  ((Gy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function gl(e) {
  if (iu[e]) return iu[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gy) return (iu[e] = t[n]);
  return e;
}
var qy = gl("animationend"),
  Xy = gl("animationiteration"),
  Zy = gl("animationstart"),
  Jy = gl("transitionend"),
  e0 = new Map(),
  Qp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function rr(e, t) {
  e0.set(e, t), jr(t, [e]);
}
for (var au = 0; au < Qp.length; au++) {
  var ou = Qp[au],
    Yb = ou.toLowerCase(),
    Wb = ou[0].toUpperCase() + ou.slice(1);
  rr(Yb, "on" + Wb);
}
rr(qy, "onAnimationEnd");
rr(Xy, "onAnimationIteration");
rr(Zy, "onAnimationStart");
rr("dblclick", "onDoubleClick");
rr("focusin", "onFocus");
rr("focusout", "onBlur");
rr(Jy, "onTransitionEnd");
hi("onMouseEnter", ["mouseout", "mouseover"]);
hi("onMouseLeave", ["mouseout", "mouseover"]);
hi("onPointerEnter", ["pointerout", "pointerover"]);
hi("onPointerLeave", ["pointerout", "pointerover"]);
jr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var oa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hb = new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));
function Gp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Y1(r, t, void 0, e), (e.currentTarget = null);
}
function t0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
          Gp(i, s, u), (a = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== a && i.isPropagationStopped())
          )
            break e;
          Gp(i, s, u), (a = l);
        }
    }
  }
  if (bs) throw ((e = sc), (bs = !1), (sc = null), e);
}
function ce(e, t) {
  var n = t[yc];
  n === void 0 && (n = t[yc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (n0(t, e, 2, !1), n.add(r));
}
function su(e, t, n) {
  var r = 0;
  t && (r |= 4), n0(n, e, r, t);
}
var Do = "_reactListening" + Math.random().toString(36).slice(2);
function Ra(e) {
  if (!e[Do]) {
    (e[Do] = !0),
      uy.forEach(function (n) {
        n !== "selectionchange" && (Hb.has(n) || su(n, !1, e), su(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Do] || ((t[Do] = !0), su("selectionchange", !1, t));
  }
}
function n0(e, t, n, r) {
  switch (Vy(t)) {
    case 1:
      var i = rb;
      break;
    case 4:
      i = ib;
      break;
    default:
      i = Rd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !oc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function lu(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = pr(s)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = a = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Cy(function () {
    var u = a,
      c = Td(n),
      d = [];
    e: {
      var f = e0.get(e);
      if (f !== void 0) {
        var h = jd,
          v = e;
        switch (e) {
          case "keypress":
            if (Xo(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = xb;
            break;
          case "focusin":
            (v = "focus"), (h = tu);
            break;
          case "focusout":
            (v = "blur"), (h = tu);
            break;
          case "beforeblur":
          case "afterblur":
            h = tu;
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
            h = Ip;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = sb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Sb;
            break;
          case qy:
          case Xy:
          case Zy:
            h = cb;
            break;
          case Jy:
            h = Db;
            break;
          case "scroll":
            h = ab;
            break;
          case "wheel":
            h = Eb;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = fb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Vp;
        }
        var w = (t & 4) !== 0,
          b = !w && e === "scroll",
          g = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              g !== null && ((S = Pa(m, g)), S != null && w.push(Oa(m, S, y)))),
            b)
          )
            break;
          m = m.return;
        }
        0 < w.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ic &&
            (v = n.relatedTarget || n.fromElement) &&
            (pr(v) || v[Sn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? pr(v) : null),
              v !== null &&
                ((b = Lr(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((w = Ip),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Vp),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (b = h == null ? f : Ur(h)),
            (y = v == null ? f : Ur(v)),
            (f = new w(S, m + "leave", h, n, c)),
            (f.target = b),
            (f.relatedTarget = y),
            (S = null),
            pr(c) === u &&
              ((w = new w(g, m + "enter", v, n, c)),
              (w.target = y),
              (w.relatedTarget = b),
              (S = w)),
            (b = S),
            h && v)
          )
            t: {
              for (w = h, g = v, m = 0, y = w; y; y = Fr(y)) m++;
              for (y = 0, S = g; S; S = Fr(S)) y++;
              for (; 0 < m - y; ) (w = Fr(w)), m--;
              for (; 0 < y - m; ) (g = Fr(g)), y--;
              for (; m--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                (w = Fr(w)), (g = Fr(g));
              }
              w = null;
            }
          else w = null;
          h !== null && qp(d, f, h, w, !1),
            v !== null && b !== null && qp(d, b, v, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Ur(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var k = Rb;
        else if (Wp(f))
          if ($y) k = Ib;
          else {
            k = jb;
            var E = Ob;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = Lb);
        if (k && (k = k(e, u))) {
          zy(d, k, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Ju(f, "number", f.value);
      }
      switch (((E = u ? Ur(u) : window), e)) {
        case "focusin":
          (Wp(E) || E.contentEditable === "true") &&
            ((zr = E), (dc = u), (ha = null));
          break;
        case "focusout":
          ha = dc = zr = null;
          break;
        case "mousedown":
          fc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fc = !1), Kp(d, n, c);
          break;
        case "selectionchange":
          if (Bb) break;
        case "keydown":
        case "keyup":
          Kp(d, n, c);
      }
      var C;
      if (Id)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Hr
          ? Wy(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (Yy &&
          n.locale !== "ko" &&
          (Hr || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Hr && (C = By())
            : ((Vn = c),
              (Od = "value" in Vn ? Vn.value : Vn.textContent),
              (Hr = !0))),
        (E = Es(u, D)),
        0 < E.length &&
          ((D = new Fp(D, e, null, n, c)),
          d.push({ event: D, listeners: E }),
          C ? (D.data = C) : ((C = Hy(n)), C !== null && (D.data = C)))),
        (C = Mb ? Tb(e, n) : Nb(e, n)) &&
          ((u = Es(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Fp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    t0(d, t);
  });
}
function Oa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = Pa(e, n)),
      a != null && r.unshift(Oa(e, a, i)),
      (a = Pa(e, t)),
      a != null && r.push(Oa(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qp(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = Pa(n, a)), l != null && o.unshift(Oa(n, l, s)))
        : i || ((l = Pa(n, a)), l != null && o.push(Oa(n, l, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var zb = /\r\n?/g,
  $b = /\u0000|\uFFFD/g;
function Xp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zb,
      `
`
    )
    .replace($b, "");
}
function Co(e, t, n) {
  if (((t = Xp(t)), Xp(e) !== t && n)) throw Error(R(425));
}
function Ps() {}
var pc = null,
  hc = null;
function mc(e, t) {
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
var gc = typeof setTimeout == "function" ? setTimeout : void 0,
  Ub = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zp = typeof Promise == "function" ? Promise : void 0,
  Kb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zp < "u"
      ? function (e) {
          return Zp.resolve(null).then(e).catch(Qb);
        }
      : gc;
function Qb(e) {
  setTimeout(function () {
    throw e;
  });
}
function uu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Na(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Na(t);
}
function $n(e) {
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
function Jp(e) {
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
var Ai = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + Ai,
  ja = "__reactProps$" + Ai,
  Sn = "__reactContainer$" + Ai,
  yc = "__reactEvents$" + Ai,
  Gb = "__reactListeners$" + Ai,
  qb = "__reactHandles$" + Ai;
function pr(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Sn] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Jp(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = Jp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function eo(e) {
  return (
    (e = e[Kt] || e[Sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function yl(e) {
  return e[ja] || null;
}
var vc = [],
  Kr = -1;
function ir(e) {
  return { current: e };
}
function de(e) {
  0 > Kr || ((e.current = vc[Kr]), (vc[Kr] = null), Kr--);
}
function ue(e, t) {
  Kr++, (vc[Kr] = e.current), (e.current = t);
}
var Jn = {},
  Ke = ir(Jn),
  at = ir(!1),
  Pr = Jn;
function mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ot(e) {
  return (e = e.childContextTypes), e != null;
}
function Ms() {
  de(at), de(Ke);
}
function eh(e, t, n) {
  if (Ke.current !== Jn) throw Error(R(168));
  ue(Ke, t), ue(at, n);
}
function r0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, O1(e) || "Unknown", i));
  return we({}, n, r);
}
function Ts(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jn),
    (Pr = Ke.current),
    ue(Ke, e),
    ue(at, at.current),
    !0
  );
}
function th(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = r0(e, t, Pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(at),
      de(Ke),
      ue(Ke, e))
    : de(at),
    ue(at, n);
}
var cn = null,
  vl = !1,
  cu = !1;
function i0(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function Xb(e) {
  (vl = !0), i0(e);
}
function ar() {
  if (!cu && cn !== null) {
    cu = !0;
    var e = 0,
      t = se;
    try {
      var n = cn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (cn = null), (vl = !1);
    } catch (i) {
      throw (cn !== null && (cn = cn.slice(e + 1)), Ty(Nd, ar), i);
    } finally {
      (se = t), (cu = !1);
    }
  }
  return null;
}
var Qr = [],
  Gr = 0,
  Ns = null,
  _s = 0,
  bt = [],
  St = 0,
  Mr = null,
  fn = 1,
  pn = "";
function ur(e, t) {
  (Qr[Gr++] = _s), (Qr[Gr++] = Ns), (Ns = e), (_s = t);
}
function a0(e, t, n) {
  (bt[St++] = fn), (bt[St++] = pn), (bt[St++] = Mr), (Mr = e);
  var r = fn;
  e = pn;
  var i = 32 - Lt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Lt(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (fn = (1 << (32 - Lt(t) + i)) | (n << i) | r),
      (pn = a + e);
  } else (fn = (1 << a) | (n << i) | r), (pn = e);
}
function Vd(e) {
  e.return !== null && (ur(e, 1), a0(e, 1, 0));
}
function Bd(e) {
  for (; e === Ns; )
    (Ns = Qr[--Gr]), (Qr[Gr] = null), (_s = Qr[--Gr]), (Qr[Gr] = null);
  for (; e === Mr; )
    (Mr = bt[--St]),
      (bt[St] = null),
      (pn = bt[--St]),
      (bt[St] = null),
      (fn = bt[--St]),
      (bt[St] = null);
}
var ft = null,
  dt = null,
  fe = !1,
  Ot = null;
function o0(e, t) {
  var n = Dt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (dt = $n(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mr !== null ? { id: fn, overflow: pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wc(e) {
  if (fe) {
    var t = dt;
    if (t) {
      var n = t;
      if (!nh(e, t)) {
        if (xc(e)) throw Error(R(418));
        t = $n(n.nextSibling);
        var r = ft;
        t && nh(e, t)
          ? o0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ft = e));
      }
    } else {
      if (xc(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (ft = e);
    }
  }
}
function rh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function Eo(e) {
  if (e !== ft) return !1;
  if (!fe) return rh(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !mc(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (xc(e)) throw (s0(), Error(R(418)));
    for (; t; ) o0(e, t), (t = $n(t.nextSibling));
  }
  if ((rh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = $n(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = ft ? $n(e.stateNode.nextSibling) : null;
  return !0;
}
function s0() {
  for (var e = dt; e; ) e = $n(e.nextSibling);
}
function gi() {
  (dt = ft = null), (fe = !1);
}
function Yd(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
var Zb = Mn.ReactCurrentBatchConfig;
function Ui(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            o === null ? delete s[a] : (s[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ih(e) {
  var t = e._init;
  return t(e._payload);
}
function l0(e) {
  function t(g, m) {
    if (e) {
      var y = g.deletions;
      y === null ? ((g.deletions = [m]), (g.flags |= 16)) : y.push(m);
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
  function i(g, m) {
    return (g = Gn(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function a(g, m, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((g.flags |= 2), m) : y)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, m, y, S) {
    return m === null || m.tag !== 6
      ? ((m = yu(y, g.mode, S)), (m.return = g), m)
      : ((m = i(m, y)), (m.return = g), m);
  }
  function l(g, m, y, S) {
    var k = y.type;
    return k === Wr
      ? c(g, m, y.props.children, S, y.key)
      : m !== null &&
        (m.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === jn &&
            ih(k) === m.type))
      ? ((S = i(m, y.props)), (S.ref = Ui(g, m, y)), (S.return = g), S)
      : ((S = is(y.type, y.key, y.props, null, g.mode, S)),
        (S.ref = Ui(g, m, y)),
        (S.return = g),
        S);
  }
  function u(g, m, y, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = vu(y, g.mode, S)), (m.return = g), m)
      : ((m = i(m, y.children || [])), (m.return = g), m);
  }
  function c(g, m, y, S, k) {
    return m === null || m.tag !== 7
      ? ((m = br(y, g.mode, S, k)), (m.return = g), m)
      : ((m = i(m, y)), (m.return = g), m);
  }
  function d(g, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = yu("" + m, g.mode, y)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case go:
          return (
            (y = is(m.type, m.key, m.props, null, g.mode, y)),
            (y.ref = Ui(g, null, m)),
            (y.return = g),
            y
          );
        case Yr:
          return (m = vu(m, g.mode, y)), (m.return = g), m;
        case jn:
          var S = m._init;
          return d(g, S(m._payload), y);
      }
      if (ia(m) || Yi(m))
        return (m = br(m, g.mode, y, null)), (m.return = g), m;
      Po(g, m);
    }
    return null;
  }
  function f(g, m, y, S) {
    var k = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return k !== null ? null : s(g, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case go:
          return y.key === k ? l(g, m, y, S) : null;
        case Yr:
          return y.key === k ? u(g, m, y, S) : null;
        case jn:
          return (k = y._init), f(g, m, k(y._payload), S);
      }
      if (ia(y) || Yi(y)) return k !== null ? null : c(g, m, y, S, null);
      Po(g, y);
    }
    return null;
  }
  function h(g, m, y, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(y) || null), s(m, g, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case go:
          return (g = g.get(S.key === null ? y : S.key) || null), l(m, g, S, k);
        case Yr:
          return (g = g.get(S.key === null ? y : S.key) || null), u(m, g, S, k);
        case jn:
          var E = S._init;
          return h(g, m, y, E(S._payload), k);
      }
      if (ia(S) || Yi(S)) return (g = g.get(y) || null), c(m, g, S, k, null);
      Po(m, S);
    }
    return null;
  }
  function v(g, m, y, S) {
    for (
      var k = null, E = null, C = m, D = (m = 0), M = null;
      C !== null && D < y.length;
      D++
    ) {
      C.index > D ? ((M = C), (C = null)) : (M = C.sibling);
      var A = f(g, C, y[D], S);
      if (A === null) {
        C === null && (C = M);
        break;
      }
      e && C && A.alternate === null && t(g, C),
        (m = a(A, m, D)),
        E === null ? (k = A) : (E.sibling = A),
        (E = A),
        (C = M);
    }
    if (D === y.length) return n(g, C), fe && ur(g, D), k;
    if (C === null) {
      for (; D < y.length; D++)
        (C = d(g, y[D], S)),
          C !== null &&
            ((m = a(C, m, D)), E === null ? (k = C) : (E.sibling = C), (E = C));
      return fe && ur(g, D), k;
    }
    for (C = r(g, C); D < y.length; D++)
      (M = h(C, g, D, y[D], S)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? D : M.key),
          (m = a(M, m, D)),
          E === null ? (k = M) : (E.sibling = M),
          (E = M));
    return (
      e &&
        C.forEach(function (B) {
          return t(g, B);
        }),
      fe && ur(g, D),
      k
    );
  }
  function w(g, m, y, S) {
    var k = Yi(y);
    if (typeof k != "function") throw Error(R(150));
    if (((y = k.call(y)), y == null)) throw Error(R(151));
    for (
      var E = (k = null), C = m, D = (m = 0), M = null, A = y.next();
      C !== null && !A.done;
      D++, A = y.next()
    ) {
      C.index > D ? ((M = C), (C = null)) : (M = C.sibling);
      var B = f(g, C, A.value, S);
      if (B === null) {
        C === null && (C = M);
        break;
      }
      e && C && B.alternate === null && t(g, C),
        (m = a(B, m, D)),
        E === null ? (k = B) : (E.sibling = B),
        (E = B),
        (C = M);
    }
    if (A.done) return n(g, C), fe && ur(g, D), k;
    if (C === null) {
      for (; !A.done; D++, A = y.next())
        (A = d(g, A.value, S)),
          A !== null &&
            ((m = a(A, m, D)), E === null ? (k = A) : (E.sibling = A), (E = A));
      return fe && ur(g, D), k;
    }
    for (C = r(g, C); !A.done; D++, A = y.next())
      (A = h(C, g, D, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? D : A.key),
          (m = a(A, m, D)),
          E === null ? (k = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        C.forEach(function (j) {
          return t(g, j);
        }),
      fe && ur(g, D),
      k
    );
  }
  function b(g, m, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Wr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case go:
          e: {
            for (var k = y.key, E = m; E !== null; ) {
              if (E.key === k) {
                if (((k = y.type), k === Wr)) {
                  if (E.tag === 7) {
                    n(g, E.sibling),
                      (m = i(E, y.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === jn &&
                    ih(k) === E.type)
                ) {
                  n(g, E.sibling),
                    (m = i(E, y.props)),
                    (m.ref = Ui(g, E, y)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            y.type === Wr
              ? ((m = br(y.props.children, g.mode, S, y.key)),
                (m.return = g),
                (g = m))
              : ((S = is(y.type, y.key, y.props, null, g.mode, S)),
                (S.ref = Ui(g, m, y)),
                (S.return = g),
                (g = S));
          }
          return o(g);
        case Yr:
          e: {
            for (E = y.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(g, m.sibling),
                    (m = i(m, y.children || [])),
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
            (m = vu(y, g.mode, S)), (m.return = g), (g = m);
          }
          return o(g);
        case jn:
          return (E = y._init), b(g, m, E(y._payload), S);
      }
      if (ia(y)) return v(g, m, y, S);
      if (Yi(y)) return w(g, m, y, S);
      Po(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = i(m, y)), (m.return = g), (g = m))
          : (n(g, m), (m = yu(y, g.mode, S)), (m.return = g), (g = m)),
        o(g))
      : n(g, m);
  }
  return b;
}
var yi = l0(!0),
  u0 = l0(!1),
  As = ir(null),
  Rs = null,
  qr = null,
  Wd = null;
function Hd() {
  Wd = qr = Rs = null;
}
function zd(e) {
  var t = As.current;
  de(As), (e._currentValue = t);
}
function bc(e, t, n) {
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
function ui(e, t) {
  (Rs = e),
    (Wd = qr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (rt = !0), (e.firstContext = null));
}
function Et(e) {
  var t = e._currentValue;
  if (Wd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qr === null)) {
      if (Rs === null) throw Error(R(308));
      (qr = e), (Rs.dependencies = { lanes: 0, firstContext: e });
    } else qr = qr.next = e;
  return t;
}
var hr = null;
function $d(e) {
  hr === null ? (hr = [e]) : hr.push(e);
}
function c0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $d(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    kn(e, r)
  );
}
function kn(e, t) {
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
var Ln = !1;
function Ud(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function d0(e, t) {
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
function hn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ne & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      kn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $d(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    kn(e, n)
  );
}
function Zo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _d(e, n);
  }
}
function ah(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
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
function Os(e, t, n, r) {
  var i = e.updateQueue;
  Ln = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), o === null ? (a = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== o &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (a !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (s = a);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            w = s;
          switch (((f = t), (h = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = we({}, d, f);
              break e;
            case 2:
              Ln = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Nr |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function oh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var to = {},
  Zt = ir(to),
  La = ir(to),
  Ia = ir(to);
function mr(e) {
  if (e === to) throw Error(R(174));
  return e;
}
function Kd(e, t) {
  switch ((ue(Ia, t), ue(La, e), ue(Zt, to), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = tc(t, e));
  }
  de(Zt), ue(Zt, t);
}
function vi() {
  de(Zt), de(La), de(Ia);
}
function f0(e) {
  mr(Ia.current);
  var t = mr(Zt.current),
    n = tc(t, e.type);
  t !== n && (ue(La, e), ue(Zt, n));
}
function Qd(e) {
  La.current === e && (de(Zt), de(La));
}
var me = ir(0);
function js(e) {
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
var du = [];
function Gd() {
  for (var e = 0; e < du.length; e++)
    du[e]._workInProgressVersionPrimary = null;
  du.length = 0;
}
var Jo = Mn.ReactCurrentDispatcher,
  fu = Mn.ReactCurrentBatchConfig,
  Tr = 0,
  ve = null,
  _e = null,
  Oe = null,
  Ls = !1,
  ma = !1,
  Fa = 0,
  Jb = 0;
function We() {
  throw Error(R(321));
}
function qd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n])) return !1;
  return !0;
}
function Xd(e, t, n, r, i, a) {
  if (
    ((Tr = a),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Jo.current = e === null || e.memoizedState === null ? rS : iS),
    (e = n(r, i)),
    ma)
  ) {
    a = 0;
    do {
      if (((ma = !1), (Fa = 0), 25 <= a)) throw Error(R(301));
      (a += 1),
        (Oe = _e = null),
        (t.updateQueue = null),
        (Jo.current = aS),
        (e = n(r, i));
    } while (ma);
  }
  if (
    ((Jo.current = Is),
    (t = _e !== null && _e.next !== null),
    (Tr = 0),
    (Oe = _e = ve = null),
    (Ls = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Zd() {
  var e = Fa !== 0;
  return (Fa = 0), e;
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (ve.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function Pt() {
  if (_e === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Oe === null ? ve.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (_e = e);
  else {
    if (e === null) throw Error(R(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Oe === null ? (ve.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function Va(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pu(e) {
  var t = Pt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = _e,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var s = (o = null),
      l = null,
      u = a;
    do {
      var c = u.lane;
      if ((Tr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (o = r)) : (l = l.next = d),
          (ve.lanes |= c),
          (Nr |= c);
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? (o = r) : (l.next = s),
      Vt(r, t.memoizedState) || (rt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (ve.lanes |= a), (Nr |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hu(e) {
  var t = Pt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Vt(a, t.memoizedState) || (rt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function p0() {}
function h0(e, t) {
  var n = ve,
    r = Pt(),
    i = t(),
    a = !Vt(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (rt = !0)),
    (r = r.queue),
    Jd(y0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ba(9, g0.bind(null, n, r, i, t), void 0, null),
      Le === null)
    )
      throw Error(R(349));
    Tr & 30 || m0(n, t, i);
  }
  return i;
}
function m0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function g0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), v0(t) && x0(e);
}
function y0(e, t, n) {
  return n(function () {
    v0(t) && x0(e);
  });
}
function v0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vt(e, n);
  } catch {
    return !0;
  }
}
function x0(e) {
  var t = kn(e, 1);
  t !== null && It(t, e, 1, -1);
}
function sh(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Va,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nS.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Ba(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function w0() {
  return Pt().memoizedState;
}
function es(e, t, n, r) {
  var i = zt();
  (ve.flags |= e),
    (i.memoizedState = Ba(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
  var i = Pt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (_e !== null) {
    var o = _e.memoizedState;
    if (((a = o.destroy), r !== null && qd(r, o.deps))) {
      i.memoizedState = Ba(t, n, a, r);
      return;
    }
  }
  (ve.flags |= e), (i.memoizedState = Ba(1 | t, n, a, r));
}
function lh(e, t) {
  return es(8390656, 8, e, t);
}
function Jd(e, t) {
  return xl(2048, 8, e, t);
}
function b0(e, t) {
  return xl(4, 2, e, t);
}
function S0(e, t) {
  return xl(4, 4, e, t);
}
function k0(e, t) {
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
function D0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xl(4, 4, k0.bind(null, t, e), n)
  );
}
function ef() {}
function C0(e, t) {
  var n = Pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function E0(e, t) {
  var n = Pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function P0(e, t, n) {
  return Tr & 21
    ? (Vt(n, t) || ((n = Ay()), (ve.lanes |= n), (Nr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = n));
}
function eS(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fu.transition;
  fu.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (fu.transition = r);
  }
}
function M0() {
  return Pt().memoizedState;
}
function tS(e, t, n) {
  var r = Qn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    T0(e))
  )
    N0(t, n);
  else if (((n = c0(e, t, n, r)), n !== null)) {
    var i = Ze();
    It(n, e, r, i), _0(n, t, r);
  }
}
function nS(e, t, n) {
  var r = Qn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (T0(e)) N0(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Vt(s, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), $d(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = c0(e, t, i, r)),
      n !== null && ((i = Ze()), It(n, e, r, i), _0(n, t, r));
  }
}
function T0(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function N0(e, t) {
  ma = Ls = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _d(e, n);
  }
}
var Is = {
    readContext: Et,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  rS = {
    readContext: Et,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Et,
    useEffect: lh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        es(4194308, 4, k0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return es(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return es(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zt();
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
        (e = e.dispatch = tS.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sh,
    useDebugValue: ef,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = sh(!1),
        t = e[0];
      return (e = eS.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        i = zt();
      if (fe) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(R(349));
        Tr & 30 || m0(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        lh(y0.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Ba(9, g0.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = Le.identifierPrefix;
      if (fe) {
        var n = pn,
          r = fn;
        (n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jb++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  iS = {
    readContext: Et,
    useCallback: C0,
    useContext: Et,
    useEffect: Jd,
    useImperativeHandle: D0,
    useInsertionEffect: b0,
    useLayoutEffect: S0,
    useMemo: E0,
    useReducer: pu,
    useRef: w0,
    useState: function () {
      return pu(Va);
    },
    useDebugValue: ef,
    useDeferredValue: function (e) {
      var t = Pt();
      return P0(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = pu(Va)[0],
        t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: p0,
    useSyncExternalStore: h0,
    useId: M0,
    unstable_isNewReconciler: !1,
  },
  aS = {
    readContext: Et,
    useCallback: C0,
    useContext: Et,
    useEffect: Jd,
    useImperativeHandle: D0,
    useInsertionEffect: b0,
    useLayoutEffect: S0,
    useMemo: E0,
    useReducer: hu,
    useRef: w0,
    useState: function () {
      return hu(Va);
    },
    useDebugValue: ef,
    useDeferredValue: function (e) {
      var t = Pt();
      return _e === null ? (t.memoizedState = e) : P0(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = hu(Va)[0],
        t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: p0,
    useSyncExternalStore: h0,
    useId: M0,
    unstable_isNewReconciler: !1,
  };
function _t(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ze(),
      i = Qn(e),
      a = hn(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Un(e, a, i)),
      t !== null && (It(t, e, i, r), Zo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ze(),
      i = Qn(e),
      a = hn(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Un(e, a, i)),
      t !== null && (It(t, e, i, r), Zo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ze(),
      r = Qn(e),
      i = hn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Un(e, i, r)),
      t !== null && (It(t, e, r, n), Zo(t, e, r));
  },
};
function uh(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Aa(n, r) || !Aa(i, a)
      : !0
  );
}
function A0(e, t, n) {
  var r = !1,
    i = Jn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Et(a))
      : ((i = ot(t) ? Pr : Ke.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? mi(e, i) : Jn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function ch(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wl.enqueueReplaceState(t, t.state, null);
}
function kc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ud(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Et(a))
    : ((a = ot(t) ? Pr : Ke.current), (i.context = mi(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Sc(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && wl.enqueueReplaceState(i, i.state, null),
      Os(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function xi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += R1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function mu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Dc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var oS = typeof WeakMap == "function" ? WeakMap : Map;
function R0(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vs || ((Vs = !0), (Oc = r)), Dc(e, t);
    }),
    n
  );
}
function O0(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Dc(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        Dc(e, t),
          typeof r != "function" &&
            (Kn === null ? (Kn = new Set([this])) : Kn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function dh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new oS();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = wS.bind(null, e, t, n)), t.then(e, e));
}
function fh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ph(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hn(-1, 1)), (t.tag = 2), Un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sS = Mn.ReactCurrentOwner,
  rt = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? u0(t, null, n, r) : yi(t, e.child, n, r);
}
function hh(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    ui(t, i),
    (r = Xd(e, t, n, r, a, i)),
    (n = Zd()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Dn(e, t, i))
      : (fe && n && Vd(t), (t.flags |= 1), Qe(e, t, r, i), t.child)
  );
}
function mh(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !uf(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), j0(e, t, a, r, i))
      : ((e = is(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Aa), n(o, r) && e.ref === t.ref)
    )
      return Dn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Gn(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function j0(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Aa(a, r) && e.ref === t.ref)
      if (((rt = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (rt = !0);
      else return (t.lanes = e.lanes), Dn(e, t, i);
  }
  return Cc(e, t, n, r, i);
}
function L0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Zr, ct),
        (ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(Zr, ct),
          (ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        ue(Zr, ct),
        (ct |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(Zr, ct),
      (ct |= r);
  return Qe(e, t, i, n), t.child;
}
function I0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cc(e, t, n, r, i) {
  var a = ot(n) ? Pr : Ke.current;
  return (
    (a = mi(t, a)),
    ui(t, i),
    (n = Xd(e, t, n, r, a, i)),
    (r = Zd()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Dn(e, t, i))
      : (fe && r && Vd(t), (t.flags |= 1), Qe(e, t, n, i), t.child)
  );
}
function gh(e, t, n, r, i) {
  if (ot(n)) {
    var a = !0;
    Ts(t);
  } else a = !1;
  if ((ui(t, i), t.stateNode === null))
    ts(e, t), A0(t, n, r), kc(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Et(u))
      : ((u = ot(n) ? Pr : Ke.current), (u = mi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && ch(t, o, r, u)),
      (Ln = !1);
    var f = t.memoizedState;
    (o.state = f),
      Os(t, r, o, i),
      (l = t.memoizedState),
      s !== r || f !== l || at.current || Ln
        ? (typeof c == "function" && (Sc(t, n, c, r), (l = t.memoizedState)),
          (s = Ln || uh(t, n, s, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      d0(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : _t(t.type, s)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Et(l))
        : ((l = ot(n) ? Pr : Ke.current), (l = mi(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && ch(t, o, r, l)),
      (Ln = !1),
      (f = t.memoizedState),
      (o.state = f),
      Os(t, r, o, i);
    var v = t.memoizedState;
    s !== d || f !== v || at.current || Ln
      ? (typeof h == "function" && (Sc(t, n, h, r), (v = t.memoizedState)),
        (u = Ln || uh(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ec(e, t, n, r, a, i);
}
function Ec(e, t, n, r, i, a) {
  I0(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && th(t, n, !1), Dn(e, t, a);
  (r = t.stateNode), (sS.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = yi(t, e.child, null, a)), (t.child = yi(t, null, s, a)))
      : Qe(e, t, s, a),
    (t.memoizedState = r.state),
    i && th(t, n, !0),
    t.child
  );
}
function F0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? eh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && eh(e, t.context, !1),
    Kd(e, t.containerInfo);
}
function yh(e, t, n, r, i) {
  return gi(), Yd(i), (t.flags |= 256), Qe(e, t, n, r), t.child;
}
var Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function V0(e, t, n) {
  var r = t.pendingProps,
    i = me.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ue(me, i & 1),
    e === null)
  )
    return (
      wc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = kl(o, r, 0, null)),
              (e = br(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Mc(n)),
              (t.memoizedState = Pc),
              e)
            : tf(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return lS(e, t, o, r, s, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Gn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (a = Gn(s, a)) : ((a = br(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Mc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pc),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Gn(a, { mode: "visible", children: r.children })),
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
function tf(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mo(e, t, n, r) {
  return (
    r !== null && Yd(r),
    yi(t, e.child, null, n),
    (e = tf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lS(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mu(Error(R(422)))), Mo(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = kl({ mode: "visible", children: r.children }, i, 0, null)),
        (a = br(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && yi(t, e.child, null, o),
        (t.child.memoizedState = Mc(o)),
        (t.memoizedState = Pc),
        a);
  if (!(t.mode & 1)) return Mo(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (a = Error(R(419))), (r = mu(a, r, void 0)), Mo(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), rt || s)) {
    if (((r = Le), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), kn(e, i), It(r, e, i, -1));
    }
    return lf(), (r = mu(Error(R(421)))), Mo(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (dt = $n(i.nextSibling)),
      (ft = t),
      (fe = !0),
      (Ot = null),
      e !== null &&
        ((bt[St++] = fn),
        (bt[St++] = pn),
        (bt[St++] = Mr),
        (fn = e.id),
        (pn = e.overflow),
        (Mr = t)),
      (t = tf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function vh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bc(e.return, t, n);
}
function gu(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function B0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((Qe(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vh(e, n, t);
        else if (e.tag === 19) vh(e, n, t);
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
  if ((ue(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && js(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          gu(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && js(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        gu(t, !0, n, null, a);
        break;
      case "together":
        gu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ts(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uS(e, t, n) {
  switch (t.tag) {
    case 3:
      F0(t), gi();
      break;
    case 5:
      f0(t);
      break;
    case 1:
      ot(t.type) && Ts(t);
      break;
    case 4:
      Kd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ue(As, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? V0(e, t, n)
          : (ue(me, me.current & 1),
            (e = Dn(e, t, n)),
            e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return B0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ue(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), L0(e, t, n);
  }
  return Dn(e, t, n);
}
var Y0, Tc, W0, H0;
Y0 = function (e, t) {
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
};
Tc = function () {};
W0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), mr(Zt.current);
    var a = null;
    switch (n) {
      case "input":
        (i = Xu(e, i)), (r = Xu(e, r)), (a = []);
        break;
      case "select":
        (i = we({}, i, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = ec(e, i)), (r = ec(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ps);
    }
    nc(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ca.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                s[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (a || (a = []), a.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (a = a || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (a = a || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ca.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ce("scroll", e),
                  a || s === l || (a = []))
                : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
H0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ki(e, t) {
  if (!fe)
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
function He(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cS(e, t, n) {
  var r = t.pendingProps;
  switch ((Bd(t), t.tag)) {
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
      return He(t), null;
    case 1:
      return ot(t.type) && Ms(), He(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vi(),
        de(at),
        de(Ke),
        Gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Eo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (Ic(Ot), (Ot = null)))),
        Tc(e, t),
        He(t),
        null
      );
    case 5:
      Qd(t);
      var i = mr(Ia.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        W0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return He(t), null;
        }
        if (((e = mr(Zt.current)), Eo(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Kt] = t), (r[ja] = a), (e = (t.mode & 1) !== 0), n)) {
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
              for (i = 0; i < oa.length; i++) ce(oa[i], r);
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
              Pp(r, a), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              Tp(r, a), ce("invalid", r);
          }
          nc(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (a.suppressHydrationWarning !== !0 &&
                      Co(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (a.suppressHydrationWarning !== !0 &&
                      Co(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Ca.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              yo(r), Mp(r, a, !0);
              break;
            case "textarea":
              yo(r), Np(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ps);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Kt] = t),
            (e[ja] = r),
            Y0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = rc(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < oa.length; i++) ce(oa[i], e);
                i = r;
                break;
              case "source":
                ce("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (i = r);
                break;
              case "details":
                ce("toggle", e), (i = r);
                break;
              case "input":
                Pp(e, r), (i = Xu(e, r)), ce("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = we({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                Tp(e, r), (i = ec(e, r)), ce("invalid", e);
                break;
              default:
                i = r;
            }
            nc(n, i), (s = i);
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var l = s[a];
                a === "style"
                  ? wy(e, l)
                  : a === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && vy(e, l))
                  : a === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ea(e, l)
                    : typeof l == "number" && Ea(e, "" + l)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Ca.hasOwnProperty(a)
                      ? l != null && a === "onScroll" && ce("scroll", e)
                      : l != null && Cd(e, a, l, o));
              }
            switch (n) {
              case "input":
                yo(e), Mp(e, r, !1);
                break;
              case "textarea":
                yo(e), Np(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? ai(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      ai(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ps);
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
      return He(t), null;
    case 6:
      if (e && t.stateNode != null) H0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = mr(Ia.current)), mr(Zt.current), Eo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Kt] = t),
            (a = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Co(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Co(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Kt] = t),
            (t.stateNode = r);
      }
      return He(t), null;
    case 13:
      if (
        (de(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && dt !== null && t.mode & 1 && !(t.flags & 128))
          s0(), gi(), (t.flags |= 98560), (a = !1);
        else if (((a = Eo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(R(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(R(317));
            a[Kt] = t;
          } else
            gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          He(t), (a = !1);
        } else Ot !== null && (Ic(Ot), (Ot = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? Ae === 0 && (Ae = 3) : lf())),
          t.updateQueue !== null && (t.flags |= 4),
          He(t),
          null);
    case 4:
      return (
        vi(), Tc(e, t), e === null && Ra(t.stateNode.containerInfo), He(t), null
      );
    case 10:
      return zd(t.type._context), He(t), null;
    case 17:
      return ot(t.type) && Ms(), He(t), null;
    case 19:
      if ((de(me), (a = t.memoizedState), a === null)) return He(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Ki(a, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = js(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ki(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Ce() > wi &&
            ((t.flags |= 128), (r = !0), Ki(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = js(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ki(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !fe)
            )
              return He(t), null;
          } else
            2 * Ce() - a.renderingStartTime > wi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ki(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = me.current),
          ue(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (He(t), null);
    case 22:
    case 23:
      return (
        sf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ct & 1073741824 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : He(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function dS(e, t) {
  switch ((Bd(t), t.tag)) {
    case 1:
      return (
        ot(t.type) && Ms(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vi(),
        de(at),
        de(Ke),
        Gd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qd(t), null;
    case 13:
      if (
        (de(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        gi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(me), null;
    case 4:
      return vi(), null;
    case 10:
      return zd(t.type._context), null;
    case 22:
    case 23:
      return sf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var To = !1,
  ze = !1,
  fS = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function Nc(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var xh = !1;
function pS(e, t) {
  if (((pc = Ds), (e = Qy()), Fd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = o + i),
                d !== a || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (s = o),
                f === a && ++c === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hc = { focusedElem: e, selectionRange: n }, Ds = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    b = v.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : _t(t.type, w),
                      b
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
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
                throw Error(R(163));
            }
        } catch (S) {
          Se(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (v = xh), (xh = !1), v;
}
function ga(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Nc(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function bl(e, t) {
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
function _c(e) {
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
function z0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), z0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[ja], delete t[yc], delete t[Gb], delete t[qb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $0(e.return)) return null;
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
function Ac(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ps));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ac(e, t, n), e = e.sibling; e !== null; ) Ac(e, t, n), (e = e.sibling);
}
function Rc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rc(e, t, n), e = e.sibling; e !== null; ) Rc(e, t, n), (e = e.sibling);
}
var Fe = null,
  Rt = !1;
function Nn(e, t, n) {
  for (n = n.child; n !== null; ) U0(e, t, n), (n = n.sibling);
}
function U0(e, t, n) {
  if (Xt && typeof Xt.onCommitFiberUnmount == "function")
    try {
      Xt.onCommitFiberUnmount(pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Xr(n, t);
    case 6:
      var r = Fe,
        i = Rt;
      (Fe = null),
        Nn(e, t, n),
        (Fe = r),
        (Rt = i),
        Fe !== null &&
          (Rt
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null &&
        (Rt
          ? ((e = Fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? uu(e.parentNode, n)
              : e.nodeType === 1 && uu(e, n),
            Na(e))
          : uu(Fe, n.stateNode));
      break;
    case 4:
      (r = Fe),
        (i = Rt),
        (Fe = n.stateNode.containerInfo),
        (Rt = !0),
        Nn(e, t, n),
        (Fe = r),
        (Rt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Nc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Nn(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (Xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Se(n, t, s);
        }
      Nn(e, t, n);
      break;
    case 21:
      Nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Nn(e, t, n), (ze = r))
        : Nn(e, t, n);
      break;
    default:
      Nn(e, t, n);
  }
}
function bh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fS()),
      t.forEach(function (r) {
        var i = SS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Fe = s.stateNode), (Rt = !1);
              break e;
            case 3:
              (Fe = s.stateNode.containerInfo), (Rt = !0);
              break e;
            case 4:
              (Fe = s.stateNode.containerInfo), (Rt = !0);
              break e;
          }
          s = s.return;
        }
        if (Fe === null) throw Error(R(160));
        U0(a, o, i), (Fe = null), (Rt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Se(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) K0(t, e), (t = t.sibling);
}
function K0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), Ht(e), r & 4)) {
        try {
          ga(3, e, e.return), bl(3, e);
        } catch (w) {
          Se(e, e.return, w);
        }
        try {
          ga(5, e, e.return);
        } catch (w) {
          Se(e, e.return, w);
        }
      }
      break;
    case 1:
      Tt(t, e), Ht(e), r & 512 && n !== null && Xr(n, n.return);
      break;
    case 5:
      if (
        (Tt(t, e),
        Ht(e),
        r & 512 && n !== null && Xr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ea(i, "");
        } catch (w) {
          Se(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && a.type === "radio" && a.name != null && my(i, a),
              rc(s, o);
            var u = rc(s, a);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? wy(i, d)
                : c === "dangerouslySetInnerHTML"
                ? vy(i, d)
                : c === "children"
                ? Ea(i, d)
                : Cd(i, c, d, u);
            }
            switch (s) {
              case "input":
                Zu(i, a);
                break;
              case "textarea":
                gy(i, a);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? ai(i, !!a.multiple, h, !1)
                  : f !== !!a.multiple &&
                    (a.defaultValue != null
                      ? ai(i, !!a.multiple, a.defaultValue, !0)
                      : ai(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[ja] = a;
          } catch (w) {
            Se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), Ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (w) {
          Se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Na(t.containerInfo);
        } catch (w) {
          Se(e, e.return, w);
        }
      break;
    case 4:
      Tt(t, e), Ht(e);
      break;
    case 13:
      Tt(t, e),
        Ht(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (af = Ce())),
        r & 4 && bh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || c), Tt(t, e), (ze = u)) : Tt(t, e),
        Ht(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ga(4, f, f.return);
                  break;
                case 1:
                  Xr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      Se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Xr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    kh(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (F = h)) : kh(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = xy("display", o)));
              } catch (w) {
                Se(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                Se(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Tt(t, e), Ht(e), r & 4 && bh(e);
      break;
    case 21:
      break;
    default:
      Tt(t, e), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ea(i, ""), (r.flags &= -33));
          var a = wh(e);
          Rc(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = wh(e);
          Ac(e, s, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hS(e, t, n) {
  (F = e), Q0(e);
}
function Q0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || To;
      if (!o) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || ze;
        s = To;
        var u = ze;
        if (((To = o), (ze = l) && !u))
          for (F = i; F !== null; )
            (o = F),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Dh(i)
                : l !== null
                ? ((l.return = o), (F = l))
                : Dh(i);
        for (; a !== null; ) (F = a), Q0(a), (a = a.sibling);
        (F = i), (To = s), (ze = u);
      }
      Sh(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (F = a)) : Sh(e);
  }
}
function Sh(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && oh(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                oh(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Na(d);
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
              throw Error(R(163));
          }
        ze || (t.flags & 512 && _c(t));
      } catch (f) {
        Se(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function kh(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Dh(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bl(4, t);
          } catch (l) {
            Se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Se(t, i, l);
            }
          }
          var a = t.return;
          try {
            _c(t);
          } catch (l) {
            Se(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            _c(t);
          } catch (l) {
            Se(t, o, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (F = s);
      break;
    }
    F = t.return;
  }
}
var mS = Math.ceil,
  Fs = Mn.ReactCurrentDispatcher,
  nf = Mn.ReactCurrentOwner,
  Ct = Mn.ReactCurrentBatchConfig,
  ne = 0,
  Le = null,
  Ne = null,
  Be = 0,
  ct = 0,
  Zr = ir(0),
  Ae = 0,
  Ya = null,
  Nr = 0,
  Sl = 0,
  rf = 0,
  ya = null,
  nt = null,
  af = 0,
  wi = 1 / 0,
  un = null,
  Vs = !1,
  Oc = null,
  Kn = null,
  No = !1,
  Bn = null,
  Bs = 0,
  va = 0,
  jc = null,
  ns = -1,
  rs = 0;
function Ze() {
  return ne & 6 ? Ce() : ns !== -1 ? ns : (ns = Ce());
}
function Qn(e) {
  return e.mode & 1
    ? ne & 2 && Be !== 0
      ? Be & -Be
      : Zb.transition !== null
      ? (rs === 0 && (rs = Ay()), rs)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vy(e.type))),
        e)
    : 1;
}
function It(e, t, n, r) {
  if (50 < va) throw ((va = 0), (jc = null), Error(R(185)));
  Za(e, n, r),
    (!(ne & 2) || e !== Le) &&
      (e === Le && (!(ne & 2) && (Sl |= n), Ae === 4 && Fn(e, Be)),
      st(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((wi = Ce() + 500), vl && ar()));
}
function st(e, t) {
  var n = e.callbackNode;
  Z1(e, t);
  var r = ks(e, e === Le ? Be : 0);
  if (r === 0)
    n !== null && Rp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rp(n), t === 1))
      e.tag === 0 ? Xb(Ch.bind(null, e)) : i0(Ch.bind(null, e)),
        Kb(function () {
          !(ne & 6) && ar();
        }),
        (n = null);
    else {
      switch (Ry(r)) {
        case 1:
          n = Nd;
          break;
        case 4:
          n = Ny;
          break;
        case 16:
          n = Ss;
          break;
        case 536870912:
          n = _y;
          break;
        default:
          n = Ss;
      }
      n = nv(n, G0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function G0(e, t) {
  if (((ns = -1), (rs = 0), ne & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (ci() && e.callbackNode !== n) return null;
  var r = ks(e, e === Le ? Be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ys(e, r);
  else {
    t = r;
    var i = ne;
    ne |= 2;
    var a = X0();
    (Le !== e || Be !== t) && ((un = null), (wi = Ce() + 500), wr(e, t));
    do
      try {
        vS();
        break;
      } catch (s) {
        q0(e, s);
      }
    while (!0);
    Hd(),
      (Fs.current = a),
      (ne = i),
      Ne !== null ? (t = 0) : ((Le = null), (Be = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = lc(e)), i !== 0 && ((r = i), (t = Lc(e, i)))), t === 1)
    )
      throw ((n = Ya), wr(e, 0), Fn(e, r), st(e, Ce()), n);
    if (t === 6) Fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !gS(i) &&
          ((t = Ys(e, r)),
          t === 2 && ((a = lc(e)), a !== 0 && ((r = a), (t = Lc(e, a)))),
          t === 1))
      )
        throw ((n = Ya), wr(e, 0), Fn(e, r), st(e, Ce()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          cr(e, nt, un);
          break;
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = af + 500 - Ce()), 10 < t))
          ) {
            if (ks(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ze(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = gc(cr.bind(null, e, nt, un), t);
            break;
          }
          cr(e, nt, un);
          break;
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Lt(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = Ce() - r),
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
                : 1960 * mS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gc(cr.bind(null, e, nt, un), r);
            break;
          }
          cr(e, nt, un);
          break;
        case 5:
          cr(e, nt, un);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return st(e, Ce()), e.callbackNode === n ? G0.bind(null, e) : null;
}
function Lc(e, t) {
  var n = ya;
  return (
    e.current.memoizedState.isDehydrated && (wr(e, t).flags |= 256),
    (e = Ys(e, t)),
    e !== 2 && ((t = nt), (nt = n), t !== null && Ic(t)),
    e
  );
}
function Ic(e) {
  nt === null ? (nt = e) : nt.push.apply(nt, e);
}
function gS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Vt(a(), i)) return !1;
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
function Fn(e, t) {
  for (
    t &= ~rf,
      t &= ~Sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ch(e) {
  if (ne & 6) throw Error(R(327));
  ci();
  var t = ks(e, 0);
  if (!(t & 1)) return st(e, Ce()), null;
  var n = Ys(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lc(e);
    r !== 0 && ((t = r), (n = Lc(e, r)));
  }
  if (n === 1) throw ((n = Ya), wr(e, 0), Fn(e, t), st(e, Ce()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cr(e, nt, un),
    st(e, Ce()),
    null
  );
}
function of(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && ((wi = Ce() + 500), vl && ar());
  }
}
function _r(e) {
  Bn !== null && Bn.tag === 0 && !(ne & 6) && ci();
  var t = ne;
  ne |= 1;
  var n = Ct.transition,
    r = se;
  try {
    if (((Ct.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (Ct.transition = n), (ne = t), !(ne & 6) && ar();
  }
}
function sf() {
  (ct = Zr.current), de(Zr);
}
function wr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ub(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((Bd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ms();
          break;
        case 3:
          vi(), de(at), de(Ke), Gd();
          break;
        case 5:
          Qd(r);
          break;
        case 4:
          vi();
          break;
        case 13:
          de(me);
          break;
        case 19:
          de(me);
          break;
        case 10:
          zd(r.type._context);
          break;
        case 22:
        case 23:
          sf();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (Ne = e = Gn(e.current, null)),
    (Be = ct = t),
    (Ae = 0),
    (Ya = null),
    (rf = Sl = Nr = 0),
    (nt = ya = null),
    hr !== null)
  ) {
    for (t = 0; t < hr.length; t++)
      if (((n = hr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    hr = null;
  }
  return e;
}
function q0(e, t) {
  do {
    var n = Ne;
    try {
      if ((Hd(), (Jo.current = Is), Ls)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ls = !1;
      }
      if (
        ((Tr = 0),
        (Oe = _e = ve = null),
        (ma = !1),
        (Fa = 0),
        (nf.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (Ya = t), (Ne = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          s = n,
          l = t;
        if (
          ((t = Be),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = fh(o);
          if (h !== null) {
            (h.flags &= -257),
              ph(h, o, s, a, t),
              h.mode & 1 && dh(a, u, t),
              (t = h),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(l), (t.updateQueue = w);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              dh(a, u, t), lf();
              break e;
            }
            l = Error(R(426));
          }
        } else if (fe && s.mode & 1) {
          var b = fh(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              ph(b, o, s, a, t),
              Yd(xi(l, s));
            break e;
          }
        }
        (a = l = xi(l, s)),
          Ae !== 4 && (Ae = 2),
          ya === null ? (ya = [a]) : ya.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = R0(a, l, t);
              ah(a, g);
              break e;
            case 1:
              s = l;
              var m = a.type,
                y = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Kn === null || !Kn.has(y))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var S = O0(a, s, t);
                ah(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      J0(n);
    } catch (k) {
      (t = k), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function X0() {
  var e = Fs.current;
  return (Fs.current = Is), e === null ? Is : e;
}
function lf() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Le === null || (!(Nr & 268435455) && !(Sl & 268435455)) || Fn(Le, Be);
}
function Ys(e, t) {
  var n = ne;
  ne |= 2;
  var r = X0();
  (Le !== e || Be !== t) && ((un = null), wr(e, t));
  do
    try {
      yS();
      break;
    } catch (i) {
      q0(e, i);
    }
  while (!0);
  if ((Hd(), (ne = n), (Fs.current = r), Ne !== null)) throw Error(R(261));
  return (Le = null), (Be = 0), Ae;
}
function yS() {
  for (; Ne !== null; ) Z0(Ne);
}
function vS() {
  for (; Ne !== null && !H1(); ) Z0(Ne);
}
function Z0(e) {
  var t = tv(e.alternate, e, ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? J0(e) : (Ne = t),
    (nf.current = null);
}
function J0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dS(n, t)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (Ne = null);
        return;
      }
    } else if (((n = cS(n, t, ct)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function cr(e, t, n) {
  var r = se,
    i = Ct.transition;
  try {
    (Ct.transition = null), (se = 1), xS(e, t, n, r);
  } finally {
    (Ct.transition = i), (se = r);
  }
  return null;
}
function xS(e, t, n, r) {
  do ci();
  while (Bn !== null);
  if (ne & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (J1(e, a),
    e === Le && ((Ne = Le = null), (Be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      No ||
      ((No = !0),
      nv(Ss, function () {
        return ci(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = Ct.transition), (Ct.transition = null);
    var o = se;
    se = 1;
    var s = ne;
    (ne |= 4),
      (nf.current = null),
      pS(e, n),
      K0(n, e),
      Vb(hc),
      (Ds = !!pc),
      (hc = pc = null),
      (e.current = n),
      hS(n),
      z1(),
      (ne = s),
      (se = o),
      (Ct.transition = a);
  } else e.current = n;
  if (
    (No && ((No = !1), (Bn = e), (Bs = i)),
    (a = e.pendingLanes),
    a === 0 && (Kn = null),
    K1(n.stateNode),
    st(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vs) throw ((Vs = !1), (e = Oc), (Oc = null), e);
  return (
    Bs & 1 && e.tag !== 0 && ci(),
    (a = e.pendingLanes),
    a & 1 ? (e === jc ? va++ : ((va = 0), (jc = e))) : (va = 0),
    ar(),
    null
  );
}
function ci() {
  if (Bn !== null) {
    var e = Ry(Bs),
      t = Ct.transition,
      n = se;
    try {
      if (((Ct.transition = null), (se = 16 > e ? 16 : e), Bn === null))
        var r = !1;
      else {
        if (((e = Bn), (Bn = null), (Bs = 0), ne & 6)) throw Error(R(331));
        var i = ne;
        for (ne |= 4, F = e.current; F !== null; ) {
          var a = F,
            o = a.child;
          if (F.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ga(8, c, a);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (F = d);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        h = c.return;
                      if ((z0(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (F = f);
                        break;
                      }
                      F = h;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var b = w.sibling;
                    (w.sibling = null), (w = b);
                  } while (w !== null);
                }
              }
              F = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (F = o);
          else
            e: for (; F !== null; ) {
              if (((a = F), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ga(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (F = g);
                break e;
              }
              F = a.return;
            }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          o = F;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (F = y);
          else
            e: for (o = m; F !== null; ) {
              if (((s = F), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bl(9, s);
                  }
                } catch (k) {
                  Se(s, s.return, k);
                }
              if (s === o) {
                F = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (F = S);
                break e;
              }
              F = s.return;
            }
        }
        if (
          ((ne = i), ar(), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        )
          try {
            Xt.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (Ct.transition = t);
    }
  }
  return !1;
}
function Eh(e, t, n) {
  (t = xi(n, t)),
    (t = R0(e, t, 1)),
    (e = Un(e, t, 1)),
    (t = Ze()),
    e !== null && (Za(e, 1, t), st(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) Eh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Eh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kn === null || !Kn.has(r)))
        ) {
          (e = xi(n, e)),
            (e = O0(t, e, 1)),
            (t = Un(t, e, 1)),
            (e = Ze()),
            t !== null && (Za(t, 1, e), st(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (Be & n) === n &&
      (Ae === 4 || (Ae === 3 && (Be & 130023424) === Be && 500 > Ce() - af)
        ? wr(e, 0)
        : (rf |= n)),
    st(e, t);
}
function ev(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wo), (wo <<= 1), !(wo & 130023424) && (wo = 4194304))
      : (t = 1));
  var n = Ze();
  (e = kn(e, t)), e !== null && (Za(e, t, n), st(e, n));
}
function bS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ev(e, n);
}
function SS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), ev(e, n);
}
var tv;
tv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (rt = !1), uS(e, t, n);
      rt = !!(e.flags & 131072);
    }
  else (rt = !1), fe && t.flags & 1048576 && a0(t, _s, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ts(e, t), (e = t.pendingProps);
      var i = mi(t, Ke.current);
      ui(t, n), (i = Xd(null, t, r, e, i, n));
      var a = Zd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ot(r) ? ((a = !0), Ts(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ud(t),
            (i.updater = wl),
            (t.stateNode = i),
            (i._reactInternals = t),
            kc(t, r, e, n),
            (t = Ec(null, t, r, !0, a, n)))
          : ((t.tag = 0), fe && a && Vd(t), Qe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ts(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = DS(r)),
          (e = _t(r, e)),
          i)
        ) {
          case 0:
            t = Cc(null, t, r, e, n);
            break e;
          case 1:
            t = gh(null, t, r, e, n);
            break e;
          case 11:
            t = hh(null, t, r, e, n);
            break e;
          case 14:
            t = mh(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        Cc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        gh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((F0(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          d0(e, t),
          Os(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = xi(Error(R(423)), t)), (t = yh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = xi(Error(R(424)), t)), (t = yh(e, t, r, n, i));
            break e;
          } else
            for (
              dt = $n(t.stateNode.containerInfo.firstChild),
                ft = t,
                fe = !0,
                Ot = null,
                n = u0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gi(), r === i)) {
            t = Dn(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        f0(t),
        e === null && wc(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        mc(r, i) ? (o = null) : a !== null && mc(r, a) && (t.flags |= 32),
        I0(e, t),
        Qe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && wc(t), null;
    case 13:
      return V0(e, t, n);
    case 4:
      return (
        Kd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yi(t, null, r, n)) : Qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        hh(e, t, r, i, n)
      );
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          ue(As, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (Vt(a.value, o)) {
            if (a.children === i.children && !at.current) {
              t = Dn(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var s = a.dependencies;
              if (s !== null) {
                o = a.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (a.tag === 1) {
                      (l = hn(-1, n & -n)), (l.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (a.lanes |= n),
                      (l = a.alternate),
                      l !== null && (l.lanes |= n),
                      bc(a.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(R(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  bc(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        Qe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ui(t, n),
        (i = Et(i)),
        (r = r(i)),
        (t.flags |= 1),
        Qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = _t(r, t.pendingProps)),
        (i = _t(r.type, i)),
        mh(e, t, r, i, n)
      );
    case 15:
      return j0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        ts(e, t),
        (t.tag = 1),
        ot(r) ? ((e = !0), Ts(t)) : (e = !1),
        ui(t, n),
        A0(t, r, i),
        kc(t, r, i, n),
        Ec(null, t, r, !0, e, n)
      );
    case 19:
      return B0(e, t, n);
    case 22:
      return L0(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function nv(e, t) {
  return Ty(e, t);
}
function kS(e, t, n, r) {
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
function Dt(e, t, n, r) {
  return new kS(e, t, n, r);
}
function uf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function DS(e) {
  if (typeof e == "function") return uf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pd)) return 11;
    if (e === Md) return 14;
  }
  return 2;
}
function Gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Dt(e.tag, t, e.key, e.mode)),
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
function is(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) uf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Wr:
        return br(n.children, i, a, t);
      case Ed:
        (o = 8), (i |= 8);
        break;
      case Ku:
        return (
          (e = Dt(12, n, t, i | 2)), (e.elementType = Ku), (e.lanes = a), e
        );
      case Qu:
        return (e = Dt(13, n, t, i)), (e.elementType = Qu), (e.lanes = a), e;
      case Gu:
        return (e = Dt(19, n, t, i)), (e.elementType = Gu), (e.lanes = a), e;
      case fy:
        return kl(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cy:
              o = 10;
              break e;
            case dy:
              o = 9;
              break e;
            case Pd:
              o = 11;
              break e;
            case Md:
              o = 14;
              break e;
            case jn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Dt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function br(e, t, n, r) {
  return (e = Dt(7, e, r, t)), (e.lanes = n), e;
}
function kl(e, t, n, r) {
  return (
    (e = Dt(22, e, r, t)),
    (e.elementType = fy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yu(e, t, n) {
  return (e = Dt(6, e, null, t)), (e.lanes = n), e;
}
function vu(e, t, n) {
  return (
    (t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function CS(e, t, n, r, i) {
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
    (this.eventTimes = Zl(0)),
    (this.expirationTimes = Zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cf(e, t, n, r, i, a, o, s, l) {
  return (
    (e = new CS(e, t, n, s, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Dt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ud(a),
    e
  );
}
function ES(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rv(e) {
  if (!e) return Jn;
  e = e._reactInternals;
  e: {
    if (Lr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ot(n)) return r0(e, n, t);
  }
  return t;
}
function iv(e, t, n, r, i, a, o, s, l) {
  return (
    (e = cf(n, r, !0, e, i, a, o, s, l)),
    (e.context = rv(null)),
    (n = e.current),
    (r = Ze()),
    (i = Qn(n)),
    (a = hn(r, i)),
    (a.callback = t ?? null),
    Un(n, a, i),
    (e.current.lanes = i),
    Za(e, i, r),
    st(e, r),
    e
  );
}
function Dl(e, t, n, r) {
  var i = t.current,
    a = Ze(),
    o = Qn(i);
  return (
    (n = rv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hn(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Un(i, t, o)),
    e !== null && (It(e, i, o, a), Zo(e, i, o)),
    o
  );
}
function Ws(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ph(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function df(e, t) {
  Ph(e, t), (e = e.alternate) && Ph(e, t);
}
function PS() {
  return null;
}
var av =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ff(e) {
  this._internalRoot = e;
}
Cl.prototype.render = ff.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Dl(e, t, null, null);
};
Cl.prototype.unmount = ff.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _r(function () {
      Dl(null, e, null, null);
    }),
      (t[Sn] = null);
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ly();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    In.splice(n, 0, e), n === 0 && Fy(e);
  }
};
function pf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function El(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mh() {}
function MS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = Ws(o);
        a.call(u);
      };
    }
    var o = iv(t, r, e, 0, null, !1, !1, "", Mh);
    return (
      (e._reactRootContainer = o),
      (e[Sn] = o.current),
      Ra(e.nodeType === 8 ? e.parentNode : e),
      _r(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ws(l);
      s.call(u);
    };
  }
  var l = cf(e, 0, !1, null, null, !1, !1, "", Mh);
  return (
    (e._reactRootContainer = l),
    (e[Sn] = l.current),
    Ra(e.nodeType === 8 ? e.parentNode : e),
    _r(function () {
      Dl(t, l, n, r);
    }),
    l
  );
}
function Pl(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = Ws(o);
        s.call(l);
      };
    }
    Dl(t, o, e, i);
  } else o = MS(n, t, e, i, r);
  return Ws(o);
}
Oy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = aa(t.pendingLanes);
        n !== 0 &&
          (_d(t, n | 1), st(t, Ce()), !(ne & 6) && ((wi = Ce() + 500), ar()));
      }
      break;
    case 13:
      _r(function () {
        var r = kn(e, 1);
        if (r !== null) {
          var i = Ze();
          It(r, e, 1, i);
        }
      }),
        df(e, 1);
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
      var n = Ze();
      It(t, e, 134217728, n);
    }
    df(e, 134217728);
  }
};
jy = function (e) {
  if (e.tag === 13) {
    var t = Qn(e),
      n = kn(e, t);
    if (n !== null) {
      var r = Ze();
      It(n, e, t, r);
    }
    df(e, t);
  }
};
Ly = function () {
  return se;
};
Iy = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
ac = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = yl(r);
            if (!i) throw Error(R(90));
            hy(r), Zu(r, i);
          }
        }
      }
      break;
    case "textarea":
      gy(e, n);
      break;
    case "select":
      (t = n.value), t != null && ai(e, !!n.multiple, t, !1);
  }
};
ky = of;
Dy = _r;
var TS = { usingClientEntryPoint: !1, Events: [eo, Ur, yl, by, Sy, of] },
  Qi = {
    findFiberByHostInstance: pr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  NS = {
    bundleType: Qi.bundleType,
    version: Qi.version,
    rendererPackageName: Qi.rendererPackageName,
    rendererConfig: Qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Py(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qi.findFiberByHostInstance || PS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_o.isDisabled && _o.supportsFiber)
    try {
      (pl = _o.inject(NS)), (Xt = _o);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TS;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pf(t)) throw Error(R(200));
  return ES(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!pf(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = av;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cf(e, 1, !1, null, null, n, !1, r, i)),
    (e[Sn] = t.current),
    Ra(e.nodeType === 8 ? e.parentNode : e),
    new ff(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Py(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return _r(e);
};
mt.hydrate = function (e, t, n) {
  if (!El(t)) throw Error(R(200));
  return Pl(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!pf(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = av;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = iv(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[Sn] = t.current),
    Ra(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Cl(t);
};
mt.render = function (e, t, n) {
  if (!El(t)) throw Error(R(200));
  return Pl(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!El(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (_r(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sn] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = of;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!El(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Pl(e, t, n, !1, r);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function ov() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov);
    } catch (e) {
      console.error(e);
    }
}
ov(), (oy.exports = mt);
var hf = oy.exports;
const _S = Kg(hf);
var sv,
  Th = hf;
(sv = Th.createRoot), Th.hydrateRoot;
const AS = "modulepreload",
  RS = function (e) {
    return "/" + e;
  },
  Nh = {},
  no = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        s =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = RS(l)), l in Nh)) return;
          Nh[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : AS),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = l),
            s && d.setAttribute("nonce", s),
            document.head.appendChild(d),
            u)
          )
            return new Promise((f, h) => {
              d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    function a(o) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const s of o || []) s.status === "rejected" && a(s.reason);
      return t().catch(a);
    });
  };
/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _h = "popstate";
function OS(e = {}) {
  function t(r, i) {
    let { pathname: a, search: o, hash: s } = r.location;
    return Fc(
      "",
      { pathname: a, search: o, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Wa(i);
  }
  return LS(t, n, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function rn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jS() {
  return Math.random().toString(36).substring(2, 10);
}
function Ah(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Fc(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Ri(t) : t),
    state: n,
    key: (t && t.key) || r || jS(),
  };
}
function Wa({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function Ri(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function LS(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = "POP",
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState({ ...o.state, idx: u }, ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = "POP";
    let b = c(),
      g = b == null ? null : b - u;
    (u = b), l && l({ action: s, location: w.location, delta: g });
  }
  function f(b, g) {
    s = "PUSH";
    let m = Fc(w.location, b, g);
    u = c() + 1;
    let y = Ah(m, u),
      S = w.createHref(m);
    try {
      o.pushState(y, "", S);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(S);
    }
    a && l && l({ action: s, location: w.location, delta: 1 });
  }
  function h(b, g) {
    s = "REPLACE";
    let m = Fc(w.location, b, g);
    u = c();
    let y = Ah(m, u),
      S = w.createHref(m);
    o.replaceState(y, "", S),
      a && l && l({ action: s, location: w.location, delta: 0 });
  }
  function v(b) {
    return IS(b);
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(_h, d),
        (l = b),
        () => {
          i.removeEventListener(_h, d), (l = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: v,
    encodeLocation(b) {
      let g = v(b);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: h,
    go(b) {
      return o.go(b);
    },
  };
  return w;
}
function IS(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" &&
    (n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    xe(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : Wa(e);
  return (
    (r = r.replace(/ $/, "%20")),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r, n)
  );
}
function lv(e, t, n = "/") {
  return FS(e, t, n, !1);
}
function FS(e, t, n, r) {
  let i = typeof t == "string" ? Ri(t) : t,
    a = Cn(i.pathname || "/", n);
  if (a == null) return null;
  let o = uv(e);
  VS(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = qS(a);
    s = QS(o[l], u, r);
  }
  return s;
}
function uv(e, t = [], n = [], r = "") {
  let i = (a, o, s) => {
    let l = {
      relativePath: s === void 0 ? a.path || "" : s,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    l.relativePath.startsWith("/") &&
      (xe(
        l.relativePath.startsWith(r),
        `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = mn([r, l.relativePath]),
      c = n.concat(l);
    a.children &&
      a.children.length > 0 &&
      (xe(
        a.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      uv(a.children, t, c, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: US(u, a.index), routesMeta: c });
  };
  return (
    e.forEach((a, o) => {
      var s;
      if (a.path === "" || !((s = a.path) != null && s.includes("?"))) i(a, o);
      else for (let l of cv(a.path)) i(a, o, l);
    }),
    t
  );
}
function cv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [a, ""] : [a];
  let o = cv(r.join("/")),
    s = [];
  return (
    s.push(...o.map((l) => (l === "" ? a : [a, l].join("/")))),
    i && s.push(...o),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function VS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : KS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var BS = /^:[\w-]+$/,
  YS = 3,
  WS = 2,
  HS = 1,
  zS = 10,
  $S = -2,
  Rh = (e) => e === "*";
function US(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Rh) && (r += $S),
    t && (r += WS),
    n
      .filter((i) => !Rh(i))
      .reduce((i, a) => i + (BS.test(a) ? YS : a === "" ? HS : zS), r)
  );
}
function KS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function QS(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let l = r[s],
      u = s === r.length - 1,
      c = a === "/" ? t : t.slice(a.length) || "/",
      d = Hs(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Hs(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: mn([a, d.pathname]),
        pathnameBase: ek(mn([a, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (a = mn([a, d.pathnameBase]));
  }
  return o;
}
function Hs(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = GS(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, { paramName: c, isOptional: d }, f) => {
      if (c === "*") {
        let v = s[f] || "";
        o = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const h = s[f];
      return (
        d && !h ? (u[c] = void 0) : (u[c] = (h || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function GS(e, t = !1, n = !0) {
  rn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function qS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      rn(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function Cn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function XS(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Ri(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ZS(n, t)) : t,
    search: tk(r),
    hash: nk(i),
  };
}
function ZS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function xu(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function JS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function dv(e) {
  let t = JS(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function fv(e, t, n, r = !1) {
  let i;
  typeof e == "string"
    ? (i = Ri(e))
    : ((i = { ...e }),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        xu("?", "pathname", "search", i)
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        xu("#", "pathname", "hash", i)
      ),
      xe(!i.search || !i.search.includes("#"), xu("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "",
    o = a ? "/" : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = XS(i, s),
    u = o && o !== "/" && o.endsWith("/"),
    c = (a || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
var mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ek = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  tk = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  nk = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function rk(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var pv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(pv);
var ik = ["GET", ...pv];
new Set(ik);
var Oi = x.createContext(null);
Oi.displayName = "DataRouter";
var Ml = x.createContext(null);
Ml.displayName = "DataRouterState";
x.createContext(!1);
var hv = x.createContext({ isTransitioning: !1 });
hv.displayName = "ViewTransition";
var ak = x.createContext(new Map());
ak.displayName = "Fetchers";
var ok = x.createContext(null);
ok.displayName = "Await";
var sn = x.createContext(null);
sn.displayName = "Navigation";
var ro = x.createContext(null);
ro.displayName = "Location";
var Wt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Wt.displayName = "Route";
var mf = x.createContext(null);
mf.displayName = "RouteError";
function sk(e, { relative: t } = {}) {
  xe(
    io(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = x.useContext(sn),
    { hash: i, pathname: a, search: o } = ao(e, { relative: t }),
    s = a;
  return (
    n !== "/" && (s = a === "/" ? n : mn([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function io() {
  return x.useContext(ro) != null;
}
function or() {
  return (
    xe(
      io(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    x.useContext(ro).location
  );
}
var mv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gv(e) {
  x.useContext(sn).static || x.useLayoutEffect(e);
}
function gf() {
  let { isDataRoute: e } = x.useContext(Wt);
  return e ? Sk() : lk();
}
function lk() {
  xe(
    io(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = x.useContext(Oi),
    { basename: t, navigator: n } = x.useContext(sn),
    { matches: r } = x.useContext(Wt),
    { pathname: i } = or(),
    a = JSON.stringify(dv(r)),
    o = x.useRef(!1);
  return (
    gv(() => {
      o.current = !0;
    }),
    x.useCallback(
      (l, u = {}) => {
        if ((rn(o.current, mv), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = fv(l, JSON.parse(a), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : mn([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, a, i, e]
    )
  );
}
var uk = x.createContext(null);
function ck(e) {
  let t = x.useContext(Wt).outlet;
  return t && x.createElement(uk.Provider, { value: e }, t);
}
function bO() {
  let { matches: e } = x.useContext(Wt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ao(e, { relative: t } = {}) {
  let { matches: n } = x.useContext(Wt),
    { pathname: r } = or(),
    i = JSON.stringify(dv(n));
  return x.useMemo(() => fv(e, JSON.parse(i), r, t === "path"), [e, i, r, t]);
}
function dk(e, t) {
  return yv(e, t);
}
function yv(e, t, n, r) {
  var g;
  xe(
    io(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i } = x.useContext(sn),
    { matches: a } = x.useContext(Wt),
    o = a[a.length - 1],
    s = o ? o.params : {},
    l = o ? o.pathname : "/",
    u = o ? o.pathnameBase : "/",
    c = o && o.route;
  {
    let m = (c && c.path) || "";
    vv(
      l,
      !c || m.endsWith("*") || m.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${
        m === "/" ? "*" : `${m}/*`
      }">.`
    );
  }
  let d = or(),
    f;
  if (t) {
    let m = typeof t == "string" ? Ri(t) : t;
    xe(
      u === "/" || ((g = m.pathname) == null ? void 0 : g.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`
    ),
      (f = m);
  } else f = d;
  let h = f.pathname || "/",
    v = h;
  if (u !== "/") {
    let m = u.replace(/^\//, "").split("/");
    v = "/" + h.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let w = lv(e, { pathname: v });
  rn(
    c || w != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ),
    rn(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let b = gk(
    w &&
      w.map((m) =>
        Object.assign({}, m, {
          params: Object.assign({}, s, m.params),
          pathname: mn([
            u,
            i.encodeLocation
              ? i.encodeLocation(m.pathname).pathname
              : m.pathname,
          ]),
          pathnameBase:
            m.pathnameBase === "/"
              ? u
              : mn([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(m.pathnameBase).pathname
                    : m.pathnameBase,
                ]),
        })
      ),
    a,
    n,
    r
  );
  return t && b
    ? x.createElement(
        ro.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...f,
            },
            navigationType: "POP",
          },
        },
        b
      )
    : b;
}
function fk() {
  let e = bk(),
    t = rk(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: r },
    a = { padding: "2px 4px", backgroundColor: r },
    o = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (o = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: a }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: a }, "errorElement"),
        " prop on your route."
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? x.createElement("pre", { style: i }, n) : null,
      o
    )
  );
}
var pk = x.createElement(fk, null),
  hk = class extends x.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            Wt.Provider,
            { value: this.props.routeContext },
            x.createElement(mf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function mk({ routeContext: e, match: t, children: n }) {
  let r = x.useContext(Oi);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    x.createElement(Wt.Provider, { value: e }, n)
  );
}
function gk(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let i = e,
    a = n == null ? void 0 : n.errors;
  if (a != null) {
    let l = i.findIndex(
      (u) => u.route.id && (a == null ? void 0 : a[u.route.id]) !== void 0
    );
    xe(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ),
      (i = i.slice(0, Math.min(i.length, l + 1)));
  }
  let o = !1,
    s = -1;
  if (n)
    for (let l = 0; l < i.length; l++) {
      let u = i[l];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (s = l),
        u.route.id)
      ) {
        let { loaderData: c, errors: d } = n,
          f =
            u.route.loader &&
            !c.hasOwnProperty(u.route.id) &&
            (!d || d[u.route.id] === void 0);
        if (u.route.lazy || f) {
          (o = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((l, u, c) => {
    let d,
      f = !1,
      h = null,
      v = null;
    n &&
      ((d = a && u.route.id ? a[u.route.id] : void 0),
      (h = u.route.errorElement || pk),
      o &&
        (s < 0 && c === 0
          ? (vv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (f = !0),
            (v = null))
          : s === c &&
            ((f = !0), (v = u.route.hydrateFallbackElement || null))));
    let w = t.concat(i.slice(0, c + 1)),
      b = () => {
        let g;
        return (
          d
            ? (g = h)
            : f
            ? (g = v)
            : u.route.Component
            ? (g = x.createElement(u.route.Component, null))
            : u.route.element
            ? (g = u.route.element)
            : (g = l),
          x.createElement(mk, {
            match: u,
            routeContext: { outlet: l, matches: w, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0)
      ? x.createElement(hk, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: d,
          children: b(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : b();
  }, null);
}
function yf(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yk(e) {
  let t = x.useContext(Oi);
  return xe(t, yf(e)), t;
}
function vk(e) {
  let t = x.useContext(Ml);
  return xe(t, yf(e)), t;
}
function xk(e) {
  let t = x.useContext(Wt);
  return xe(t, yf(e)), t;
}
function vf(e) {
  let t = xk(e),
    n = t.matches[t.matches.length - 1];
  return (
    xe(
      n.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    n.route.id
  );
}
function wk() {
  return vf("useRouteId");
}
function bk() {
  var r;
  let e = x.useContext(mf),
    t = vk("useRouteError"),
    n = vf("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function Sk() {
  let { router: e } = yk("useNavigate"),
    t = vf("useNavigate"),
    n = x.useRef(!1);
  return (
    gv(() => {
      n.current = !0;
    }),
    x.useCallback(
      async (i, a = {}) => {
        rn(n.current, mv),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...a }));
      },
      [e, t]
    )
  );
}
var Oh = {};
function vv(e, t, n) {
  !t && !Oh[e] && ((Oh[e] = !0), rn(!1, n));
}
x.memo(kk);
function kk({ routes: e, future: t, state: n }) {
  return yv(e, void 0, n, t);
}
function Dk(e) {
  return ck(e.context);
}
function An(e) {
  xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Ck({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: a = !1,
}) {
  xe(
    !io(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let o = e.replace(/^\/*/, "/"),
    s = x.useMemo(
      () => ({ basename: o, navigator: i, static: a, future: {} }),
      [o, i, a]
    );
  typeof n == "string" && (n = Ri(n));
  let {
      pathname: l = "/",
      search: u = "",
      hash: c = "",
      state: d = null,
      key: f = "default",
    } = n,
    h = x.useMemo(() => {
      let v = Cn(l, o);
      return v == null
        ? null
        : {
            location: { pathname: v, search: u, hash: c, state: d, key: f },
            navigationType: r,
          };
    }, [o, l, u, c, d, f, r]);
  return (
    rn(
      h != null,
      `<Router basename="${o}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    h == null
      ? null
      : x.createElement(
          sn.Provider,
          { value: s },
          x.createElement(ro.Provider, { children: t, value: h })
        )
  );
}
function Ek({ children: e, location: t }) {
  return dk(Vc(e), t);
}
function Vc(e, t = []) {
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let a = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, Vc(r.props.children, a));
        return;
      }
      xe(
        r.type === An,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        xe(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let o = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Vc(r.props.children, a)), n.push(o);
    }),
    n
  );
}
var as = "get",
  os = "application/x-www-form-urlencoded";
function Tl(e) {
  return e != null && typeof e.tagName == "string";
}
function Pk(e) {
  return Tl(e) && e.tagName.toLowerCase() === "button";
}
function Mk(e) {
  return Tl(e) && e.tagName.toLowerCase() === "form";
}
function Tk(e) {
  return Tl(e) && e.tagName.toLowerCase() === "input";
}
function Nk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _k(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Nk(e);
}
var Ao = null;
function Ak() {
  if (Ao === null)
    try {
      new FormData(document.createElement("form"), 0), (Ao = !1);
    } catch {
      Ao = !0;
    }
  return Ao;
}
var Rk = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wu(e) {
  return e != null && !Rk.has(e)
    ? (rn(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${os}"`
      ),
      null)
    : e;
}
function Ok(e, t) {
  let n, r, i, a, o;
  if (Mk(e)) {
    let s = e.getAttribute("action");
    (r = s ? Cn(s, t) : null),
      (n = e.getAttribute("method") || as),
      (i = wu(e.getAttribute("enctype")) || os),
      (a = new FormData(e));
  } else if (Pk(e) || (Tk(e) && (e.type === "submit" || e.type === "image"))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (
      ((r = l ? Cn(l, t) : null),
      (n = e.getAttribute("formmethod") || s.getAttribute("method") || as),
      (i =
        wu(e.getAttribute("formenctype")) ||
        wu(s.getAttribute("enctype")) ||
        os),
      (a = new FormData(s, e)),
      !Ak())
    ) {
      let { name: u, type: c, value: d } = e;
      if (c === "image") {
        let f = u ? `${u}.` : "";
        a.append(`${f}x`, "0"), a.append(`${f}y`, "0");
      } else u && a.append(u, d);
    }
  } else {
    if (Tl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = as), (r = null), (i = os), (o = e);
  }
  return (
    a && i === "text/plain" && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function xf(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jk(e, t, n) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${n}`)
      : t && Cn(r.pathname, t) === "/"
      ? (r.pathname = `${t.replace(/\/$/, "")}/_root.${n}`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`),
    r
  );
}
async function Lk(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ik(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function Fk(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let a = t.routes[i.route.id];
      if (a) {
        let o = await Lk(a, n);
        return o.links ? o.links() : [];
      }
      return [];
    })
  );
  return Wk(
    r
      .flat(1)
      .filter(Ik)
      .filter((i) => i.rel === "stylesheet" || i.rel === "preload")
      .map((i) =>
        i.rel === "stylesheet"
          ? { ...i, rel: "prefetch", as: "style" }
          : { ...i, rel: "prefetch" }
      )
  );
}
function jh(e, t, n, r, i, a) {
  let o = (l, u) => (n[u] ? l.route.id !== n[u].route.id : !0),
    s = (l, u) => {
      var c;
      return (
        n[u].pathname !== l.pathname ||
        (((c = n[u].route.path) == null ? void 0 : c.endsWith("*")) &&
          n[u].params["*"] !== l.params["*"])
      );
    };
  return a === "assets"
    ? t.filter((l, u) => o(l, u) || s(l, u))
    : a === "data"
    ? t.filter((l, u) => {
        var d;
        let c = r.routes[l.route.id];
        if (!c || !c.hasLoader) return !1;
        if (o(l, u) || s(l, u)) return !0;
        if (l.route.shouldRevalidate) {
          let f = l.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: ((d = n[0]) == null ? void 0 : d.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: l.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof f == "boolean") return f;
        }
        return !0;
      })
    : [];
}
function Vk(e, t, { includeHydrateFallback: n } = {}) {
  return Bk(
    e
      .map((r) => {
        let i = t.routes[r.route.id];
        if (!i) return [];
        let a = [i.module];
        return (
          i.clientActionModule && (a = a.concat(i.clientActionModule)),
          i.clientLoaderModule && (a = a.concat(i.clientLoaderModule)),
          n &&
            i.hydrateFallbackModule &&
            (a = a.concat(i.hydrateFallbackModule)),
          i.imports && (a = a.concat(i.imports)),
          a
        );
      })
      .flat(1)
  );
}
function Bk(e) {
  return [...new Set(e)];
}
function Yk(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Wk(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, i) => {
      let a = JSON.stringify(Yk(i));
      return n.has(a) || (n.add(a), r.push({ key: a, link: i })), r;
    }, [])
  );
}
function xv() {
  let e = x.useContext(Oi);
  return (
    xf(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function Hk() {
  let e = x.useContext(Ml);
  return (
    xf(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var wf = x.createContext(void 0);
wf.displayName = "FrameworkContext";
function wv() {
  let e = x.useContext(wf);
  return (
    xf(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function zk(e, t) {
  let n = x.useContext(wf),
    [r, i] = x.useState(!1),
    [a, o] = x.useState(!1),
    {
      onFocus: s,
      onBlur: l,
      onMouseEnter: u,
      onMouseLeave: c,
      onTouchStart: d,
    } = t,
    f = x.useRef(null);
  x.useEffect(() => {
    if ((e === "render" && o(!0), e === "viewport")) {
      let w = (g) => {
          g.forEach((m) => {
            o(m.isIntersecting);
          });
        },
        b = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        f.current && b.observe(f.current),
        () => {
          b.disconnect();
        }
      );
    }
  }, [e]),
    x.useEffect(() => {
      if (r) {
        let w = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [r]);
  let h = () => {
      i(!0);
    },
    v = () => {
      i(!1), o(!1);
    };
  return n
    ? e !== "intent"
      ? [a, f, {}]
      : [
          a,
          f,
          {
            onFocus: Gi(s, h),
            onBlur: Gi(l, v),
            onMouseEnter: Gi(u, h),
            onMouseLeave: Gi(c, v),
            onTouchStart: Gi(d, h),
          },
        ]
    : [!1, f, {}];
}
function Gi(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function $k({ page: e, ...t }) {
  let { router: n } = xv(),
    r = x.useMemo(() => lv(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? x.createElement(Kk, { page: e, matches: r, ...t }) : null;
}
function Uk(e) {
  let { manifest: t, routeModules: n } = wv(),
    [r, i] = x.useState([]);
  return (
    x.useEffect(() => {
      let a = !1;
      return (
        Fk(e, t, n).then((o) => {
          a || i(o);
        }),
        () => {
          a = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Kk({ page: e, matches: t, ...n }) {
  let r = or(),
    { manifest: i, routeModules: a } = wv(),
    { basename: o } = xv(),
    { loaderData: s, matches: l } = Hk(),
    u = x.useMemo(() => jh(e, t, l, i, r, "data"), [e, t, l, i, r]),
    c = x.useMemo(() => jh(e, t, l, i, r, "assets"), [e, t, l, i, r]),
    d = x.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        w = !1;
      if (
        (t.forEach((g) => {
          var y;
          let m = i.routes[g.route.id];
          !m ||
            !m.hasLoader ||
            ((!u.some((S) => S.route.id === g.route.id) &&
              g.route.id in s &&
              (y = a[g.route.id]) != null &&
              y.shouldRevalidate) ||
            m.hasClientLoader
              ? (w = !0)
              : v.add(g.route.id));
        }),
        v.size === 0)
      )
        return [];
      let b = jk(e, o, "data");
      return (
        w &&
          v.size > 0 &&
          b.searchParams.set(
            "_routes",
            t
              .filter((g) => v.has(g.route.id))
              .map((g) => g.route.id)
              .join(",")
          ),
        [b.pathname + b.search]
      );
    }, [o, s, r, i, u, t, e, a]),
    f = x.useMemo(() => Vk(c, i), [c, i]),
    h = Uk(c);
  return x.createElement(
    x.Fragment,
    null,
    d.map((v) =>
      x.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...n,
      })
    ),
    f.map((v) =>
      x.createElement("link", { key: v, rel: "modulepreload", href: v, ...n })
    ),
    h.map(({ key: v, link: w }) =>
      x.createElement("link", { key: v, nonce: n.nonce, ...w })
    )
  );
}
function Qk(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var bv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  bv && (window.__reactRouterVersion = "7.8.0");
} catch {}
function Gk({ basename: e, children: t, window: n }) {
  let r = x.useRef();
  r.current == null && (r.current = OS({ window: n, v5Compat: !0 }));
  let i = r.current,
    [a, o] = x.useState({ action: i.action, location: i.location }),
    s = x.useCallback(
      (l) => {
        x.startTransition(() => o(l));
      },
      [o]
    );
  return (
    x.useLayoutEffect(() => i.listen(s), [i, s]),
    x.createElement(Ck, {
      basename: e,
      children: t,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
var Sv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tt = x.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: i,
      reloadDocument: a,
      replace: o,
      state: s,
      target: l,
      to: u,
      preventScrollReset: c,
      viewTransition: d,
      ...f
    },
    h
  ) {
    let { basename: v } = x.useContext(sn),
      w = typeof u == "string" && Sv.test(u),
      b,
      g = !1;
    if (typeof u == "string" && w && ((b = u), bv))
      try {
        let M = new URL(window.location.href),
          A = u.startsWith("//") ? new URL(M.protocol + u) : new URL(u),
          B = Cn(A.pathname, v);
        A.origin === M.origin && B != null
          ? (u = B + A.search + A.hash)
          : (g = !0);
      } catch {
        rn(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let m = sk(u, { relative: i }),
      [y, S, k] = zk(r, f),
      E = Jk(u, {
        replace: o,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: d,
      });
    function C(M) {
      t && t(M), M.defaultPrevented || E(M);
    }
    let D = x.createElement("a", {
      ...f,
      ...k,
      href: b || m,
      onClick: g || a ? t : C,
      ref: Qk(h, S),
      target: l,
      "data-discover": !w && n === "render" ? "true" : void 0,
    });
    return y && !w
      ? x.createElement(x.Fragment, null, D, x.createElement($k, { page: m }))
      : D;
  });
tt.displayName = "Link";
var qk = x.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: a,
    to: o,
    viewTransition: s,
    children: l,
    ...u
  },
  c
) {
  let d = ao(o, { relative: u.relative }),
    f = or(),
    h = x.useContext(Ml),
    { navigator: v, basename: w } = x.useContext(sn),
    b = h != null && iD(d) && s === !0,
    g = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
    m = f.pathname,
    y =
      h && h.navigation && h.navigation.location
        ? h.navigation.location.pathname
        : null;
  n ||
    ((m = m.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (g = g.toLowerCase())),
    y && w && (y = Cn(y, w) || y);
  const S = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
  let k = m === g || (!i && m.startsWith(g) && m.charAt(S) === "/"),
    E =
      y != null &&
      (y === g || (!i && y.startsWith(g) && y.charAt(g.length) === "/")),
    C = { isActive: k, isPending: E, isTransitioning: b },
    D = k ? t : void 0,
    M;
  typeof r == "function"
    ? (M = r(C))
    : (M = [
        r,
        k ? "active" : null,
        E ? "pending" : null,
        b ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let A = typeof a == "function" ? a(C) : a;
  return x.createElement(
    tt,
    {
      ...u,
      "aria-current": D,
      className: M,
      ref: c,
      style: A,
      to: o,
      viewTransition: s,
    },
    typeof l == "function" ? l(C) : l
  );
});
qk.displayName = "NavLink";
var Xk = x.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = as,
      action: s,
      onSubmit: l,
      relative: u,
      preventScrollReset: c,
      viewTransition: d,
      ...f
    },
    h
  ) => {
    let v = nD(),
      w = rD(s, { relative: u }),
      b = o.toLowerCase() === "get" ? "get" : "post",
      g = typeof s == "string" && Sv.test(s),
      m = (y) => {
        if ((l && l(y), y.defaultPrevented)) return;
        y.preventDefault();
        let S = y.nativeEvent.submitter,
          k = (S == null ? void 0 : S.getAttribute("formmethod")) || o;
        v(S || y.currentTarget, {
          fetcherKey: t,
          method: k,
          navigate: n,
          replace: i,
          state: a,
          relative: u,
          preventScrollReset: c,
          viewTransition: d,
        });
      };
    return x.createElement("form", {
      ref: h,
      method: b,
      action: w,
      onSubmit: r ? l : m,
      ...f,
      "data-discover": !g && e === "render" ? "true" : void 0,
    });
  }
);
Xk.displayName = "Form";
function Zk(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function kv(e) {
  let t = x.useContext(Oi);
  return xe(t, Zk(e)), t;
}
function Jk(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: a,
    viewTransition: o,
  } = {}
) {
  let s = gf(),
    l = or(),
    u = ao(e, { relative: a });
  return x.useCallback(
    (c) => {
      if (_k(c, t)) {
        c.preventDefault();
        let d = n !== void 0 ? n : Wa(l) === Wa(u);
        s(e, {
          replace: d,
          state: r,
          preventScrollReset: i,
          relative: a,
          viewTransition: o,
        });
      }
    },
    [l, s, u, n, r, t, e, i, a, o]
  );
}
var eD = 0,
  tD = () => `__${String(++eD)}__`;
function nD() {
  let { router: e } = kv("useSubmit"),
    { basename: t } = x.useContext(sn),
    n = wk();
  return x.useCallback(
    async (r, i = {}) => {
      let { action: a, method: o, encType: s, formData: l, body: u } = Ok(r, t);
      if (i.navigate === !1) {
        let c = i.fetcherKey || tD();
        await e.fetch(c, n, i.action || a, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || o,
          formEncType: i.encType || s,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || a, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || o,
          formEncType: i.encType || s,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n]
  );
}
function rD(e, { relative: t } = {}) {
  let { basename: n } = x.useContext(sn),
    r = x.useContext(Wt);
  xe(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1),
    a = { ...ao(e || ".", { relative: t }) },
    o = or();
  if (e == null) {
    a.search = o.search;
    let s = new URLSearchParams(a.search),
      l = s.getAll("index");
    if (l.some((c) => c === "")) {
      s.delete("index"),
        l.filter((d) => d).forEach((d) => s.append("index", d));
      let c = s.toString();
      a.search = c ? `?${c}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (a.pathname = a.pathname === "/" ? n : mn([n, a.pathname])),
    Wa(a)
  );
}
function iD(e, { relative: t } = {}) {
  let n = x.useContext(hv);
  xe(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = kv("useViewTransitionState"),
    i = ao(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = Cn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Cn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Hs(i.pathname, o) != null || Hs(i.pathname, a) != null;
}
const bf = x.createContext({});
function ji(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Sf = typeof window < "u",
  Nl = Sf ? x.useLayoutEffect : x.useEffect,
  _l = x.createContext(null);
function kf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Df(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const an = (e, t, n) => (n > t ? t : n < e ? e : n);
let Ha = () => {};
const En = {},
  Dv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Cv(e) {
  return typeof e == "object" && e !== null;
}
const Ev = (e) => /^0[^.\s]+$/u.test(e);
function Cf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const lt = (e) => e,
  aD = (e, t) => (n) => t(e(n)),
  oo = (...e) => e.reduce(aD),
  bi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Ef {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return kf(this.subscriptions, t), () => Df(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let a = 0; a < i; a++) {
          const o = this.subscriptions[a];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Jt = (e) => e * 1e3,
  en = (e) => e / 1e3;
function Pf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Pv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  oD = 1e-7,
  sD = 12;
function lD(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do (o = t + (n - t) / 2), (a = Pv(o, r, i) - e), a > 0 ? (n = o) : (t = o);
  while (Math.abs(a) > oD && ++s < sD);
  return o;
}
function so(e, t, n, r) {
  if (e === t && n === r) return lt;
  const i = (a) => lD(a, 0, 1, e, n);
  return (a) => (a === 0 || a === 1 ? a : Pv(i(a), t, r));
}
const Mv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Tv = (e) => (t) => 1 - e(1 - t),
  Nv = so(0.33, 1.53, 0.69, 0.99),
  Mf = Tv(Nv),
  _v = Mv(Mf),
  Av = (e) =>
    (e *= 2) < 1 ? 0.5 * Mf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Tf = (e) => 1 - Math.sin(Math.acos(e)),
  Rv = Tv(Tf),
  Ov = Mv(Tf),
  uD = so(0.42, 0, 1, 1),
  cD = so(0, 0, 0.58, 1),
  jv = so(0.42, 0, 0.58, 1),
  dD = (e) => Array.isArray(e) && typeof e[0] != "number",
  Lv = (e) => Array.isArray(e) && typeof e[0] == "number",
  fD = {
    linear: lt,
    easeIn: uD,
    easeInOut: jv,
    easeOut: cD,
    circIn: Tf,
    circInOut: Ov,
    circOut: Rv,
    backIn: Mf,
    backInOut: _v,
    backOut: Nv,
    anticipate: Av,
  },
  pD = (e) => typeof e == "string",
  Lh = (e) => {
    if (Lv(e)) {
      Ha(e.length === 4);
      const [t, n, r, i] = e;
      return so(t, n, r, i);
    } else if (pD(e)) return fD[e];
    return e;
  },
  Ro = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function hD(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    a = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    o.has(c) && (u.schedule(c), e()), c(s);
  }
  const u = {
    schedule: (c, d = !1, f = !1) => {
      const v = f && i ? n : r;
      return d && o.add(c), v.has(c) || v.add(c), c;
    },
    cancel: (c) => {
      r.delete(c), o.delete(c);
    },
    process: (c) => {
      if (((s = c), i)) {
        a = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(l),
        n.clear(),
        (i = !1),
        a && ((a = !1), u.process(c));
    },
  };
  return u;
}
const mD = 40;
function Iv(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Ro.reduce((y, S) => ((y[S] = hD(a)), y), {}),
    {
      setup: s,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: v,
    } = o,
    w = () => {
      const y = En.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        En.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, mD), 1)),
        (i.timestamp = y),
        (i.isProcessing = !0),
        s.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(w));
    },
    b = () => {
      (n = !0), (r = !0), i.isProcessing || e(w);
    };
  return {
    schedule: Ro.reduce((y, S) => {
      const k = o[S];
      return (y[S] = (E, C = !1, D = !1) => (n || b(), k.schedule(E, C, D))), y;
    }, {}),
    cancel: (y) => {
      for (let S = 0; S < Ro.length; S++) o[Ro[S]].cancel(y);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: oe,
  cancel: Bt,
  state: Re,
  steps: bu,
} = Iv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : lt, !0);
let ss;
function gD() {
  ss = void 0;
}
const it = {
    now: () => (
      ss === void 0 &&
        it.set(
          Re.isProcessing || En.useManualTiming
            ? Re.timestamp
            : performance.now()
        ),
      ss
    ),
    set: (e) => {
      (ss = e), queueMicrotask(gD);
    },
  },
  Fv = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Nf = Fv("--"),
  yD = Fv("var(--"),
  _f = (e) => (yD(e) ? vD.test(e.split("/*")[0].trim()) : !1),
  vD =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Li = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  za = { ...Li, transform: (e) => an(0, 1, e) },
  Oo = { ...Li, default: 1 },
  xa = (e) => Math.round(e * 1e5) / 1e5,
  Af = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function xD(e) {
  return e == null;
}
const wD =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Rf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && wD.test(n) && n.startsWith(e)) ||
      (t && !xD(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Vv = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, a, o, s] = r.match(Af);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  bD = (e) => an(0, 255, e),
  Su = { ...Li, transform: (e) => Math.round(bD(e)) },
  gr = {
    test: Rf("rgb", "red"),
    parse: Vv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Su.transform(e) +
      ", " +
      Su.transform(t) +
      ", " +
      Su.transform(n) +
      ", " +
      xa(za.transform(r)) +
      ")",
  };
function SD(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Bc = { test: Rf("#"), parse: SD, transform: gr.transform },
  lo = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rn = lo("deg"),
  tn = lo("%"),
  z = lo("px"),
  kD = lo("vh"),
  DD = lo("vw"),
  Ih = {
    ...tn,
    parse: (e) => tn.parse(e) / 100,
    transform: (e) => tn.transform(e * 100),
  },
  Jr = {
    test: Rf("hsl", "hue"),
    parse: Vv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      tn.transform(xa(t)) +
      ", " +
      tn.transform(xa(n)) +
      ", " +
      xa(za.transform(r)) +
      ")",
  },
  Te = {
    test: (e) => gr.test(e) || Bc.test(e) || Jr.test(e),
    parse: (e) =>
      gr.test(e) ? gr.parse(e) : Jr.test(e) ? Jr.parse(e) : Bc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? gr.transform(e)
        : Jr.transform(e),
    getAnimatableNone: (e) => {
      const t = Te.parse(e);
      return (t.alpha = 0), Te.transform(t);
    },
  },
  CD =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ED(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Af)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(CD)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Bv = "number",
  Yv = "color",
  PD = "var",
  MD = "var(",
  Fh = "${}",
  TD =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function $a(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let a = 0;
  const s = t
    .replace(
      TD,
      (l) => (
        Te.test(l)
          ? (r.color.push(a), i.push(Yv), n.push(Te.parse(l)))
          : l.startsWith(MD)
          ? (r.var.push(a), i.push(PD), n.push(l))
          : (r.number.push(a), i.push(Bv), n.push(parseFloat(l))),
        ++a,
        Fh
      )
    )
    .split(Fh);
  return { values: n, split: s, indexes: r, types: i };
}
function Wv(e) {
  return $a(e).values;
}
function Hv(e) {
  const { split: t, types: n } = $a(e),
    r = t.length;
  return (i) => {
    let a = "";
    for (let o = 0; o < r; o++)
      if (((a += t[o]), i[o] !== void 0)) {
        const s = n[o];
        s === Bv
          ? (a += xa(i[o]))
          : s === Yv
          ? (a += Te.transform(i[o]))
          : (a += i[o]);
      }
    return a;
  };
}
const ND = (e) =>
  typeof e == "number" ? 0 : Te.test(e) ? Te.getAnimatableNone(e) : e;
function _D(e) {
  const t = Wv(e);
  return Hv(e)(t.map(ND));
}
const er = {
  test: ED,
  parse: Wv,
  createTransformer: Hv,
  getAnimatableNone: _D,
};
function ku(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function AD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (i = ku(l, s, e + 1 / 3)), (a = ku(l, s, e)), (o = ku(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function zs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ge = (e, t, n) => e + (t - e) * n,
  Du = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  RD = [Bc, gr, Jr],
  OD = (e) => RD.find((t) => t.test(e));
function Vh(e) {
  const t = OD(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Jr && (n = AD(n)), n;
}
const Bh = (e, t) => {
    const n = Vh(e),
      r = Vh(t);
    if (!n || !r) return zs(e, t);
    const i = { ...n };
    return (a) => (
      (i.red = Du(n.red, r.red, a)),
      (i.green = Du(n.green, r.green, a)),
      (i.blue = Du(n.blue, r.blue, a)),
      (i.alpha = ge(n.alpha, r.alpha, a)),
      gr.transform(i)
    );
  },
  Yc = new Set(["none", "hidden"]);
function jD(e, t) {
  return Yc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function LD(e, t) {
  return (n) => ge(e, t, n);
}
function Of(e) {
  return typeof e == "number"
    ? LD
    : typeof e == "string"
    ? _f(e)
      ? zs
      : Te.test(e)
      ? Bh
      : VD
    : Array.isArray(e)
    ? zv
    : typeof e == "object"
    ? Te.test(e)
      ? Bh
      : ID
    : zs;
}
function zv(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((a, o) => Of(a)(a, t[o]));
  return (a) => {
    for (let o = 0; o < r; o++) n[o] = i[o](a);
    return n;
  };
}
function ID(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Of(e[i])(e[i], t[i]));
  return (i) => {
    for (const a in r) n[a] = r[a](i);
    return n;
  };
}
function FD(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    (n[i] = s), r[a]++;
  }
  return n;
}
const VD = (e, t) => {
  const n = er.createTransformer(t),
    r = $a(e),
    i = $a(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Yc.has(e) && !i.values.length) || (Yc.has(t) && !r.values.length)
      ? jD(e, t)
      : oo(zv(FD(r, i), i.values), n)
    : zs(e, t);
};
function $v(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ge(e, t, n)
    : Of(e)(e, t);
}
const BD = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => oe.update(t, n),
      stop: () => Bt(t),
      now: () => (Re.isProcessing ? Re.timestamp : it.now()),
    };
  },
  Uv = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let a = 0; a < i; a++)
      r += Math.round(e(a / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  $s = 2e4;
function jf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < $s; ) (t += n), (r = e.next(t));
  return t >= $s ? 1 / 0 : t;
}
function YD(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(jf(r), $s);
  return {
    type: "keyframes",
    ease: (a) => r.next(i * a).value / t,
    duration: en(i),
  };
}
const WD = 5;
function Kv(e, t, n) {
  const r = Math.max(t - WD, 0);
  return Pf(n - e(r), t - r);
}
const be = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Cu = 0.001;
function HD({
  duration: e = be.duration,
  bounce: t = be.bounce,
  velocity: n = be.velocity,
  mass: r = be.mass,
}) {
  let i,
    a,
    o = 1 - t;
  (o = an(be.minDamping, be.maxDamping, o)),
    (e = an(be.minDuration, be.maxDuration, en(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            h = Wc(u, o),
            v = Math.exp(-d);
          return Cu - (f / h) * v;
        }),
        (a = (u) => {
          const d = u * o * e,
            f = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            w = Wc(Math.pow(u, 2), o);
          return ((-i(u) + Cu > 0 ? -1 : 1) * ((f - h) * v)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Cu + c * d;
        }),
        (a = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = $D(i, a, s);
  if (((e = Jt(e)), isNaN(l)))
    return { stiffness: be.stiffness, damping: be.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const zD = 12;
function $D(e, t, n) {
  let r = n;
  for (let i = 1; i < zD; i++) r = r - e(r) / t(r);
  return r;
}
function Wc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const UD = ["duration", "bounce"],
  KD = ["stiffness", "damping", "mass"];
function Yh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function QD(e) {
  let t = {
    velocity: be.velocity,
    stiffness: be.stiffness,
    damping: be.damping,
    mass: be.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Yh(e, KD) && Yh(e, UD))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * an(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: be.mass, stiffness: i, damping: a };
    } else {
      const n = HD(e);
      (t = { ...t, ...n, mass: be.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Us(e = be.visualDuration, t = be.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = QD({ ...n, velocity: -en(n.velocity || 0) }),
    v = f || 0,
    w = u / (2 * Math.sqrt(l * c)),
    b = o - a,
    g = en(Math.sqrt(l / c)),
    m = Math.abs(b) < 5;
  r || (r = m ? be.restSpeed.granular : be.restSpeed.default),
    i || (i = m ? be.restDelta.granular : be.restDelta.default);
  let y;
  if (w < 1) {
    const k = Wc(g, w);
    y = (E) => {
      const C = Math.exp(-w * g * E);
      return (
        o - C * (((v + w * g * b) / k) * Math.sin(k * E) + b * Math.cos(k * E))
      );
    };
  } else if (w === 1) y = (k) => o - Math.exp(-g * k) * (b + (v + g * b) * k);
  else {
    const k = g * Math.sqrt(w * w - 1);
    y = (E) => {
      const C = Math.exp(-w * g * E),
        D = Math.min(k * E, 300);
      return (
        o - (C * ((v + w * g * b) * Math.sinh(D) + k * b * Math.cosh(D))) / k
      );
    };
  }
  const S = {
    calculatedDuration: (h && d) || null,
    next: (k) => {
      const E = y(k);
      if (h) s.done = k >= d;
      else {
        let C = k === 0 ? v : 0;
        w < 1 && (C = k === 0 ? Jt(v) : Kv(y, k, E));
        const D = Math.abs(C) <= r,
          M = Math.abs(o - E) <= i;
        s.done = D && M;
      }
      return (s.value = s.done ? o : E), s;
    },
    toString: () => {
      const k = Math.min(jf(S), $s),
        E = Uv((C) => S.next(k * C).value, k, 30);
      return k + "ms " + E;
    },
    toTransition: () => {},
  };
  return S;
}
Us.applyToOptions = (e) => {
  const t = YD(e, 100, Us);
  return (
    (e.ease = t.ease), (e.duration = Jt(t.duration)), (e.type = "keyframes"), e
  );
};
function Hc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (D) => (s !== void 0 && D < s) || (l !== void 0 && D > l),
    v = (D) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - D) < Math.abs(l - D)
        ? s
        : l;
  let w = n * t;
  const b = d + w,
    g = o === void 0 ? b : o(b);
  g !== b && (w = g - d);
  const m = (D) => -w * Math.exp(-D / r),
    y = (D) => g + m(D),
    S = (D) => {
      const M = m(D),
        A = y(D);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? g : A);
    };
  let k, E;
  const C = (D) => {
    h(f.value) &&
      ((k = D),
      (E = Us({
        keyframes: [f.value, v(f.value)],
        velocity: Kv(y, D, f.value),
        damping: i,
        stiffness: a,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (D) => {
        let M = !1;
        return (
          !E && k === void 0 && ((M = !0), S(D), C(D)),
          k !== void 0 && D >= k ? E.next(D - k) : (!M && S(D), f)
        );
      },
    }
  );
}
function GD(e, t, n) {
  const r = [],
    i = n || En.mix || $v,
    a = e.length - 1;
  for (let o = 0; o < a; o++) {
    let s = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || lt : t;
      s = oo(l, s);
    }
    r.push(s);
  }
  return r;
}
function Lf(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const a = e.length;
  if ((Ha(a === t.length), a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = GD(t, r, i),
    l = s.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = bi(e[d], e[d + 1], c);
      return s[d](f);
    };
  return n ? (c) => u(an(e[0], e[a - 1], c)) : u;
}
function qD(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = bi(0, t, r);
    e.push(ge(n, 1, i));
  }
}
function Qv(e) {
  const t = [0];
  return qD(t, e.length - 1), t;
}
function XD(e, t) {
  return e.map((n) => n * t);
}
function ZD(e, t) {
  return e.map(() => t || jv).splice(0, e.length - 1);
}
function wa({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = dD(r) ? r.map(Lh) : Lh(r),
    a = { done: !1, value: t[0] },
    o = XD(n && n.length === t.length ? n : Qv(t), e),
    s = Lf(o, t, { ease: Array.isArray(i) ? i : ZD(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((a.value = s(l)), (a.done = l >= e), a),
  };
}
const JD = (e) => e !== null;
function If(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const a = e.filter(JD),
    s = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : a.length - 1;
  return !s || r === void 0 ? a[s] : r;
}
const eC = { decay: Hc, inertia: Hc, tween: wa, keyframes: wa, spring: Us };
function Gv(e) {
  typeof e.type == "string" && (e.type = eC[e.type]);
}
class Ff {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const tC = (e) => e / 100;
class Vf extends Ff {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== it.now() && this.tick(it.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Gv(t);
    const {
      type: n = wa,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a,
      velocity: o = 0,
    } = t;
    let { keyframes: s } = t;
    const l = n || wa;
    l !== wa &&
      typeof s[0] != "number" &&
      ((this.mixKeyframes = oo(tC, $v(s[0], s[1]))), (s = [0, 100]));
    const u = l({ ...t, keyframes: s });
    a === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...s].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = jf(u));
    const { calculatedDuration: c } = u;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: a,
      mirroredGenerator: o,
      resolvedDuration: s,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: v,
      onUpdate: w,
      finalKeyframe: b,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? g < 0 : g > i;
    (this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let y = this.currentTime,
      S = r;
    if (d) {
      const D = Math.min(this.currentTime, i) / s;
      let M = Math.floor(D),
        A = D % 1;
      !A && D >= 1 && (A = 1),
        A === 1 && M--,
        (M = Math.min(M, d + 1)),
        !!(M % 2) &&
          (f === "reverse"
            ? ((A = 1 - A), h && (A -= h / s))
            : f === "mirror" && (S = o)),
        (y = an(0, 1, A) * s);
    }
    const k = m ? { done: !1, value: c[0] } : S.next(y);
    a && (k.value = a(k.value));
    let { done: E } = k;
    !m &&
      l !== null &&
      (E =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const C =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      C && v !== Hc && (k.value = If(c, this.options, b, this.speed)),
      w && w(k.value),
      C && this.finish(),
      k
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return en(this.calculatedDuration);
  }
  get time() {
    return en(this.currentTime);
  }
  set time(t) {
    var n;
    (t = Jt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(it.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = en(this.currentTime));
  }
  play() {
    var i, a;
    if (this.isStopped) return;
    const { driver: t = BD, startTime: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))),
      (a = (i = this.options).onPlay) == null || a.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(it.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function nC(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const yr = (e) => (e * 180) / Math.PI,
  zc = (e) => {
    const t = yr(Math.atan2(e[1], e[0]));
    return $c(t);
  },
  rC = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: zc,
    rotateZ: zc,
    skewX: (e) => yr(Math.atan(e[1])),
    skewY: (e) => yr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  $c = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Wh = zc,
  Hh = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  zh = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  iC = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Hh,
    scaleY: zh,
    scale: (e) => (Hh(e) + zh(e)) / 2,
    rotateX: (e) => $c(yr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => $c(yr(Math.atan2(-e[2], e[0]))),
    rotateZ: Wh,
    rotate: Wh,
    skewX: (e) => yr(Math.atan(e[4])),
    skewY: (e) => yr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Uc(e) {
  return e.includes("scale") ? 1 : 0;
}
function Kc(e, t) {
  if (!e || e === "none") return Uc(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = iC), (i = n);
  else {
    const s = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = rC), (i = s);
  }
  if (!i) return Uc(t);
  const a = r[t],
    o = i[1].split(",").map(oC);
  return typeof a == "function" ? a(o) : o[a];
}
const aC = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Kc(n, t);
};
function oC(e) {
  return parseFloat(e.trim());
}
const Ii = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Fi = new Set(Ii),
  $h = (e) => e === Li || e === z,
  sC = new Set(["x", "y", "z"]),
  lC = Ii.filter((e) => !sC.has(e));
function uC(e) {
  const t = [];
  return (
    lC.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Sr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Kc(t, "x"),
  y: (e, { transform: t }) => Kc(t, "y"),
};
Sr.translateX = Sr.x;
Sr.translateY = Sr.y;
const kr = new Set();
let Qc = !1,
  Gc = !1,
  qc = !1;
function qv() {
  if (Gc) {
    const e = Array.from(kr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = uC(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([a, o]) => {
            var s;
            (s = r.getValue(a)) == null || s.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Gc = !1), (Qc = !1), kr.forEach((e) => e.complete(qc)), kr.clear();
}
function Xv() {
  kr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Gc = !0);
  });
}
function cC() {
  (qc = !0), Xv(), qv(), (qc = !1);
}
class Bf {
  constructor(t, n, r, i, a, o = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = a),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (kr.add(this),
          Qc || ((Qc = !0), oe.read(Xv), oe.resolveKeyframes(qv)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const a = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (a !== void 0) t[0] = a;
      else if (r && n) {
        const s = r.readValue(n, o);
        s != null && (t[0] = s);
      }
      t[0] === void 0 && (t[0] = o), i && a === void 0 && i.set(t[0]);
    }
    nC(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      kr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (kr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dC = (e) => e.startsWith("--");
function fC(e, t, n) {
  dC(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Zv = Cf(() => window.ScrollTimeline !== void 0),
  pC = {};
function hC(e, t) {
  const n = Cf(e);
  return () => pC[t] ?? n();
}
const Jv = hC(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  sa = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Uh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: sa([0, 0.65, 0.55, 1]),
    circOut: sa([0.55, 0, 1, 0.45]),
    backIn: sa([0.31, 0.01, 0.66, -0.59]),
    backOut: sa([0.33, 1.53, 0.69, 0.99]),
  };
function ex(e, t) {
  if (e)
    return typeof e == "function"
      ? Jv()
        ? Uv(e, t)
        : "ease-out"
      : Lv(e)
      ? sa(e)
      : Array.isArray(e)
      ? e.map((n) => ex(n, t) || Uh.easeOut)
      : Uh[e];
}
function mC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = "loop",
    ease: s = "easeOut",
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = ex(s, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: a + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function tx(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function gC({ type: e, ...t }) {
  return tx(e) && Jv()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class yC extends Ff {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: a,
      allowFlatten: o = !1,
      finalKeyframe: s,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!a),
      (this.allowFlatten = o),
      (this.options = t),
      Ha(typeof t.type != "string");
    const u = gC(t);
    (this.animation = mC(n, r, i, u, a)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !a)) {
          const c = If(i, this.options, s, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : fC(n, r, c),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return en(Number(t));
  }
  get time() {
    return en(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = Jt(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Zv() ? ((this.animation.timeline = t), lt) : n(this)
    );
  }
}
const nx = { anticipate: Av, backInOut: _v, circInOut: Ov };
function vC(e) {
  return e in nx;
}
function xC(e) {
  typeof e.ease == "string" && vC(e.ease) && (e.ease = nx[e.ease]);
}
const Kh = 10;
class wC extends yC {
  constructor(t) {
    xC(t),
      Gv(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: a,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const s = new Vf({ ...o, autoplay: !1 }),
      l = Jt(this.finishedTime ?? this.time);
    n.setWithVelocity(s.sample(l - Kh).value, s.sample(l).value, Kh), s.stop();
  }
}
const Qh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (er.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function bC(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function SC(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const a = e[e.length - 1],
    o = Qh(i, t),
    s = Qh(a, t);
  return !o || !s ? !1 : bC(e) || ((n === "spring" || tx(n)) && r);
}
function Xc(e) {
  (e.duration = 0), e.type;
}
const kC = new Set(["opacity", "clipPath", "filter", "transform"]),
  DC = Cf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function CC(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    DC() &&
    n &&
    kC.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    i !== "mirror" &&
    a !== 0 &&
    o !== "inertia"
  );
}
const EC = 40;
class PC extends Ff {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: a = 0,
    repeatType: o = "loop",
    keyframes: s,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    super(),
      (this.stop = () => {
        var w, b;
        this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (b = this.keyframeResolver) == null || b.cancel();
      }),
      (this.createdAt = it.now());
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: a,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || Bf;
    (this.keyframeResolver = new h(
      s,
      (w, b, g) => this.onKeyframesResolved(w, b, f, !g),
      l,
      u,
      c
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: a,
      type: o,
      velocity: s,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    (this.resolvedAt = it.now()),
      SC(t, a, o, s) ||
        ((En.instantAnimations || !l) && (c == null || c(If(t, r, n))),
        (t[0] = t[t.length - 1]),
        Xc(r),
        (r.repeat = 0));
    const f = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > EC
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      h =
        !u && CC(f)
          ? new wC({ ...f, element: f.motionValue.owner.current })
          : new Vf(f);
    h.finished.then(() => this.notifyFinished()).catch(lt),
      this.pendingTimeline &&
        ((this.stopTimeline = h.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = h);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), cC()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const MC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function TC(e) {
  const t = MC.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function rx(e, t, n = 1) {
  const [r, i] = TC(e);
  if (!r) return;
  const a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    const o = a.trim();
    return Dv(o) ? parseFloat(o) : o;
  }
  return _f(i) ? rx(i, t, n + 1) : i;
}
function Yf(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const ix = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ii,
  ]),
  NC = { test: (e) => e === "auto", parse: (e) => e },
  ax = (e) => (t) => t.test(e),
  ox = [Li, z, tn, Rn, DD, kD, NC],
  Gh = (e) => ox.find(ax(e));
function _C(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Ev(e)
    : !0;
}
const AC = new Set(["brightness", "contrast", "saturate", "opacity"]);
function RC(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Af) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let a = AC.has(t) ? 1 : 0;
  return r !== n && (a *= 100), t + "(" + a + i + ")";
}
const OC = /\b([a-z-]*)\(.*?\)/gu,
  Zc = {
    ...er,
    getAnimatableNone: (e) => {
      const t = e.match(OC);
      return t ? t.map(RC).join(" ") : e;
    },
  },
  qh = { ...Li, transform: Math.round },
  jC = {
    rotate: Rn,
    rotateX: Rn,
    rotateY: Rn,
    rotateZ: Rn,
    scale: Oo,
    scaleX: Oo,
    scaleY: Oo,
    scaleZ: Oo,
    skew: Rn,
    skewX: Rn,
    skewY: Rn,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: za,
    originX: Ih,
    originY: Ih,
    originZ: z,
  },
  Wf = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    radius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    backgroundPositionX: z,
    backgroundPositionY: z,
    ...jC,
    zIndex: qh,
    fillOpacity: za,
    strokeOpacity: za,
    numOctaves: qh,
  },
  LC = {
    ...Wf,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: Zc,
    WebkitFilter: Zc,
  },
  sx = (e) => LC[e];
function lx(e, t) {
  let n = sx(e);
  return (
    n !== Zc && (n = er), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const IC = new Set(["auto", "none", "0"]);
function FC(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const a = e[r];
    typeof a == "string" && !IC.has(a) && $a(a).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const a of t) e[a] = lx(n, i);
}
class VC extends Bf {
  constructor(t, n, r, i, a) {
    super(t, n, r, i, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), _f(u))) {
        const c = rx(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !ix.has(r) || t.length !== 2)) return;
    const [i, a] = t,
      o = Gh(i),
      s = Gh(a);
    if (o !== s)
      if ($h(o) && $h(s))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else Sr[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || _C(t[i])) && r.push(i);
    r.length && FC(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Sr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var s;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const a = r.length - 1,
      o = r[a];
    (r[a] = Sr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (s = this.removedTransforms) != null &&
        s.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function ux(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const cx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Hf(e) {
  return Cv(e) && "offsetHeight" in e;
}
const Xh = 30,
  BC = (e) => !isNaN(parseFloat(e)),
  ba = { current: void 0 };
class YC {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var a;
        const i = it.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((a = this.events.change) == null || a.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = it.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = BC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ef());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            oe.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return ba.current && ba.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = it.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Xh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Xh);
    return Pf(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function jt(e, t) {
  return new YC(e, t);
}
const { schedule: zf } = Iv(queueMicrotask, !1),
  Nt = { x: !1, y: !1 };
function dx() {
  return Nt.x || Nt.y;
}
function WC(e) {
  return e === "x" || e === "y"
    ? Nt[e]
      ? null
      : ((Nt[e] = !0),
        () => {
          Nt[e] = !1;
        })
    : Nt.x || Nt.y
    ? null
    : ((Nt.x = Nt.y = !0),
      () => {
        Nt.x = Nt.y = !1;
      });
}
function fx(e, t) {
  const n = ux(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Zh(e) {
  return !(e.pointerType === "touch" || dx());
}
function HC(e, t, n = {}) {
  const [r, i, a] = fx(e, n),
    o = (s) => {
      if (!Zh(s)) return;
      const { target: l } = s,
        u = t(l, s);
      if (typeof u != "function" || !l) return;
      const c = (d) => {
        Zh(d) && (u(d), l.removeEventListener("pointerleave", c));
      };
      l.addEventListener("pointerleave", c, i);
    };
  return (
    r.forEach((s) => {
      s.addEventListener("pointerenter", o, i);
    }),
    a
  );
}
const px = (e, t) => (t ? (e === t ? !0 : px(e, t.parentElement)) : !1),
  $f = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  zC = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function $C(e) {
  return zC.has(e.tagName) || e.tabIndex !== -1;
}
const ls = new WeakSet();
function Jh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Eu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const UC = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Jh(() => {
    if (ls.has(n)) return;
    Eu(n, "down");
    const i = Jh(() => {
        Eu(n, "up");
      }),
      a = () => Eu(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", a, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function em(e) {
  return $f(e) && !dx();
}
function KC(e, t, n = {}) {
  const [r, i, a] = fx(e, n),
    o = (s) => {
      const l = s.currentTarget;
      if (!em(s)) return;
      ls.add(l);
      const u = t(l, s),
        c = (h, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ls.has(l) && ls.delete(l),
            em(h) && typeof u == "function" && u(h, { success: v });
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              px(l, h.target)
          );
        },
        f = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((s) => {
      (n.useGlobalTarget ? window : s).addEventListener("pointerdown", o, i),
        Hf(s) &&
          (s.addEventListener("focus", (u) => UC(u, i)),
          !$C(s) && !s.hasAttribute("tabindex") && (s.tabIndex = 0));
    }),
    a
  );
}
function Uf(e) {
  return Cv(e) && "ownerSVGElement" in e;
}
const us = new WeakMap();
let On;
const hx = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : Uf(r) && "getBBox" in r
      ? r.getBBox()[t]
      : r[n],
  QC = hx("inline", "width", "offsetWidth"),
  GC = hx("block", "height", "offsetHeight");
function qC({ target: e, borderBoxSize: t }) {
  var n;
  (n = us.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return QC(e, t);
        },
        get height() {
          return GC(e, t);
        },
      });
    });
}
function XC(e) {
  e.forEach(qC);
}
function ZC() {
  typeof ResizeObserver > "u" || (On = new ResizeObserver(XC));
}
function JC(e, t) {
  On || ZC();
  const n = ux(e);
  return (
    n.forEach((r) => {
      let i = us.get(r);
      i || ((i = new Set()), us.set(r, i)),
        i.add(t),
        On == null || On.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = us.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || On == null || On.unobserve(r);
      });
    }
  );
}
const cs = new Set();
let ei;
function e2() {
  (ei = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    cs.forEach((t) => t(e));
  }),
    window.addEventListener("resize", ei);
}
function t2(e) {
  return (
    cs.add(e),
    ei || e2(),
    () => {
      cs.delete(e),
        !cs.size &&
          typeof ei == "function" &&
          (window.removeEventListener("resize", ei), (ei = void 0));
    }
  );
}
function n2(e, t) {
  return typeof e == "function" ? t2(e) : JC(e, t);
}
function mx(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), (n = o);
  };
  return oe.preUpdate(r, !0), () => Bt(r);
}
function r2(e) {
  return Uf(e) && e.tagName === "svg";
}
function i2(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = Lf(i, a, o);
  return t ? s(r) : s;
}
const Ue = (e) => !!(e && e.getVelocity),
  a2 = [...ox, Te, er],
  o2 = (e) => a2.find(ax(e)),
  Al = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class s2 extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (Hf(r) && r.offsetWidth) || 0,
        a = this.props.sizeRef.current;
      (a.height = n.offsetHeight || 0),
        (a.width = n.offsetWidth || 0),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function l2({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = x.useId(),
    a = x.useRef(null),
    o = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: s } = x.useContext(Al);
  return (
    x.useInsertionEffect(() => {
      const { width: l, height: u, top: c, left: d, right: f } = o.current;
      if (t || !a.current || !l || !u) return;
      const h = n === "left" ? `left: ${d}` : `right: ${f}`;
      a.current.dataset.motionPopId = i;
      const v = document.createElement("style");
      s && (v.nonce = s);
      const w = r ?? document.head;
      return (
        w.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${h}px !important;
            top: ${c}px !important;
          }
        `),
        () => {
          w.contains(v) && w.removeChild(v);
        }
      );
    }, [t]),
    p.jsx(s2, {
      isPresent: t,
      childRef: a,
      sizeRef: o,
      children: x.cloneElement(e, { ref: a }),
    })
  );
}
const u2 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: s,
  root: l,
}) => {
  const u = ji(c2),
    c = x.useId();
  let d = !0,
    f = x.useMemo(
      () => (
        (d = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (h) => {
            u.set(h, !0);
            for (const v of u.values()) if (!v) return;
            r && r();
          },
          register: (h) => (u.set(h, !1), () => u.delete(h)),
        }
      ),
      [n, u, r]
    );
  return (
    a && d && (f = { ...f }),
    x.useMemo(() => {
      u.forEach((h, v) => u.set(v, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = p.jsx(l2, { isPresent: n, anchorX: s, root: l, children: e })),
    p.jsx(_l.Provider, { value: f, children: e })
  );
};
function c2() {
  return new Map();
}
function gx(e = !0) {
  const t = x.useContext(_l);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    a = x.useId();
  x.useEffect(() => {
    if (e) return i(a);
  }, [e]);
  const o = x.useCallback(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const jo = (e) => e.key || "";
function tm(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const dn = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = "sync",
    propagate: o = !1,
    anchorX: s = "left",
    root: l,
  }) => {
    const [u, c] = gx(o),
      d = x.useMemo(() => tm(e), [e]),
      f = o && !u ? [] : d.map(jo),
      h = x.useRef(!0),
      v = x.useRef(d),
      w = ji(() => new Map()),
      [b, g] = x.useState(d),
      [m, y] = x.useState(d);
    Nl(() => {
      (h.current = !1), (v.current = d);
      for (let E = 0; E < m.length; E++) {
        const C = jo(m[E]);
        f.includes(C) ? w.delete(C) : w.get(C) !== !0 && w.set(C, !1);
      }
    }, [m, f.length, f.join("-")]);
    const S = [];
    if (d !== b) {
      let E = [...d];
      for (let C = 0; C < m.length; C++) {
        const D = m[C],
          M = jo(D);
        f.includes(M) || (E.splice(C, 0, D), S.push(D));
      }
      return a === "wait" && S.length && (E = S), y(tm(E)), g(d), null;
    }
    const { forceRender: k } = x.useContext(bf);
    return p.jsx(p.Fragment, {
      children: m.map((E) => {
        const C = jo(E),
          D = o && !u ? !1 : d === m || f.includes(C),
          M = () => {
            if (w.has(C)) w.set(C, !0);
            else return;
            let A = !0;
            w.forEach((B) => {
              B || (A = !1);
            }),
              A &&
                (k == null || k(),
                y(v.current),
                o && (c == null || c()),
                r && r());
          };
        return p.jsx(
          u2,
          {
            isPresent: D,
            initial: !h.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
            root: l,
            onExitComplete: D ? void 0 : M,
            anchorX: s,
            children: E,
          },
          C
        );
      }),
    });
  },
  yx = x.createContext({ strict: !1 }),
  nm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Si = {};
for (const e in nm) Si[e] = { isEnabled: (t) => nm[e].some((n) => !!t[n]) };
function d2(e) {
  for (const t in e) Si[t] = { ...Si[t], ...e[t] };
}
const f2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ks(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    f2.has(e)
  );
}
let vx = (e) => !Ks(e);
function p2(e) {
  typeof e == "function" && (vx = (t) => (t.startsWith("on") ? !Ks(t) : e(t)));
}
try {
  p2(require("@emotion/is-prop-valid").default);
} catch {}
function h2(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((vx(i) ||
        (n === !0 && Ks(i)) ||
        (!t && !Ks(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Rl = x.createContext({});
function Ol(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ua(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Kf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qf = ["initial", ...Kf];
function jl(e) {
  return Ol(e.animate) || Qf.some((t) => Ua(e[t]));
}
function xx(e) {
  return !!(jl(e) || e.variants);
}
function m2(e, t) {
  if (jl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ua(n) ? n : void 0,
      animate: Ua(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function g2(e) {
  const { initial: t, animate: n } = m2(e, x.useContext(Rl));
  return x.useMemo(() => ({ initial: t, animate: n }), [rm(t), rm(n)]);
}
function rm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ka = {};
function y2(e) {
  for (const t in e) (Ka[t] = e[t]), Nf(t) && (Ka[t].isCSSVariable = !0);
}
function wx(e, { layout: t, layoutId: n }) {
  return (
    Fi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ka[e] || e === "opacity"))
  );
}
const v2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  x2 = Ii.length;
function w2(e, t, n) {
  let r = "",
    i = !0;
  for (let a = 0; a < x2; a++) {
    const o = Ii[a],
      s = e[o];
    if (s === void 0) continue;
    let l = !0;
    if (
      (typeof s == "number"
        ? (l = s === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(s) === 0),
      !l || n)
    ) {
      const u = cx(s, Wf[o]);
      if (!l) {
        i = !1;
        const c = v2[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Gf(e, t, n) {
  const { style: r, vars: i, transformOrigin: a } = e;
  let o = !1,
    s = !1;
  for (const l in t) {
    const u = t[l];
    if (Fi.has(l)) {
      o = !0;
      continue;
    } else if (Nf(l)) {
      i[l] = u;
      continue;
    } else {
      const c = cx(u, Wf[l]);
      l.startsWith("origin") ? ((s = !0), (a[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = w2(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    s)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = a;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const qf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function bx(e, t, n) {
  for (const r in t) !Ue(t[r]) && !wx(r, n) && (e[r] = t[r]);
}
function b2({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = qf();
    return Gf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function S2(e, t) {
  const n = e.style || {},
    r = {};
  return bx(r, n, e), Object.assign(r, b2(e, t)), r;
}
function k2(e, t) {
  const n = {},
    r = S2(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const D2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  C2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function E2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const a = i ? D2 : C2;
  e[a.offset] = z.transform(-r);
  const o = z.transform(t),
    s = z.transform(n);
  e[a.array] = `${o} ${s}`;
}
function Sx(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  l,
  u,
  c
) {
  if ((Gf(e, s, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && E2(d, i, a, o, !1);
}
const kx = () => ({ ...qf(), attrs: {} }),
  Dx = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function P2(e, t, n, r) {
  const i = x.useMemo(() => {
    const a = kx();
    return (
      Sx(a, t, Dx(r), e.transformTemplate, e.style),
      { ...a.attrs, style: { ...a.style } }
    );
  }, [t]);
  if (e.style) {
    const a = {};
    bx(a, e.style, e), (i.style = { ...a, ...i.style });
  }
  return i;
}
const M2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Xf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(M2.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function T2(e, t, n, { latestValues: r }, i, a = !1) {
  const s = (Xf(e) ? P2 : k2)(t, r, i, e),
    l = h2(t, typeof e == "string", a),
    u = e !== x.Fragment ? { ...l, ...s, ref: n } : {},
    { children: c } = t,
    d = x.useMemo(() => (Ue(c) ? c.get() : c), [c]);
  return x.createElement(e, { ...u, children: d });
}
function im(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Zf(e, t, n, r) {
  if (typeof t == "function") {
    const [i, a] = im(r);
    t = t(n !== void 0 ? n : e.custom, i, a);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, a] = im(r);
    t = t(n !== void 0 ? n : e.custom, i, a);
  }
  return t;
}
function ds(e) {
  return Ue(e) ? e.get() : e;
}
function N2({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: _2(n, r, i, e), renderState: t() };
}
function _2(e, t, n, r) {
  const i = {},
    a = r(e, {});
  for (const f in a) i[f] = ds(a[f]);
  let { initial: o, animate: s } = e;
  const l = jl(e),
    u = xx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? s : o;
  if (d && typeof d != "boolean" && !Ol(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = Zf(e, f[h]);
      if (v) {
        const { transitionEnd: w, transition: b, ...g } = v;
        for (const m in g) {
          let y = g[m];
          if (Array.isArray(y)) {
            const S = c ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (i[m] = y);
        }
        for (const m in w) i[m] = w[m];
      }
    }
  }
  return i;
}
const Cx = (e) => (t, n) => {
  const r = x.useContext(Rl),
    i = x.useContext(_l),
    a = () => N2(e, t, r, i);
  return n ? a() : ji(a);
};
function Jf(e, t, n) {
  var a;
  const { style: r } = e,
    i = {};
  for (const o in r)
    (Ue(r[o]) ||
      (t.style && Ue(t.style[o])) ||
      wx(o, e) ||
      ((a = n == null ? void 0 : n.getValue(o)) == null
        ? void 0
        : a.liveStyle) !== void 0) &&
      (i[o] = r[o]);
  return i;
}
const A2 = Cx({ scrapeMotionValuesFromProps: Jf, createRenderState: qf });
function Ex(e, t, n) {
  const r = Jf(e, t, n);
  for (const i in e)
    if (Ue(e[i]) || Ue(t[i])) {
      const a =
        Ii.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[a] = e[i];
    }
  return r;
}
const R2 = Cx({ scrapeMotionValuesFromProps: Ex, createRenderState: kx }),
  O2 = Symbol.for("motionComponentSymbol");
function ti(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function j2(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ti(n) && (n.current = r));
    },
    [t]
  );
}
const ep = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  L2 = "framerAppearId",
  Px = "data-" + ep(L2),
  Mx = x.createContext({});
function I2(e, t, n, r, i) {
  var w, b;
  const { visualElement: a } = x.useContext(Rl),
    o = x.useContext(yx),
    s = x.useContext(_l),
    l = x.useContext(Al).reducedMotion,
    u = x.useRef(null);
  (r = r || o.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const c = u.current,
    d = x.useContext(Mx);
  c &&
    !c.projection &&
    i &&
    (c.type === "html" || c.type === "svg") &&
    F2(u.current, n, i, d);
  const f = x.useRef(!1);
  x.useInsertionEffect(() => {
    c && f.current && c.update(n, s);
  });
  const h = n[Px],
    v = x.useRef(
      !!h &&
        !((w = window.MotionHandoffIsComplete) != null && w.call(window, h)) &&
        ((b = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : b.call(window, h))
    );
  return (
    Nl(() => {
      c &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        v.current && c.animationState && c.animationState.animateChanges());
    }),
    x.useEffect(() => {
      c &&
        (!v.current && c.animationState && c.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) == null ||
              g.call(window, h);
          }),
          (v.current = !1)),
        (c.enteringChildren = void 0));
    }),
    c
  );
}
function F2(e, t, n, r) {
  const {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Tx(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && ti(s)),
      visualElement: e,
      animationType: typeof a == "string" ? a : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Tx(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Tx(e.parent);
}
function Pu(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && d2(n);
  const i = Xf(e) ? R2 : A2;
  function a(s, l) {
    let u;
    const c = { ...x.useContext(Al), ...s, layoutId: V2(s) },
      { isStatic: d } = c,
      f = g2(s),
      h = i(s, d);
    if (!d && Sf) {
      B2();
      const v = Y2(c);
      (u = v.MeasureLayout),
        (f.visualElement = I2(e, h, c, r, v.ProjectionNode));
    }
    return p.jsxs(Rl.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? p.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        T2(e, s, j2(h, f.visualElement, l), h, d, t),
      ],
    });
  }
  a.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const o = x.forwardRef(a);
  return (o[O2] = e), o;
}
function V2({ layoutId: e }) {
  const t = x.useContext(bf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function B2(e, t) {
  x.useContext(yx).strict;
}
function Y2(e) {
  const { drag: t, layout: n } = Si;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function W2(e, t) {
  if (typeof Proxy > "u") return Pu;
  const n = new Map(),
    r = (a, o) => Pu(a, o, e, t),
    i = (a, o) => r(a, o);
  return new Proxy(i, {
    get: (a, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Pu(o, void 0, e, t)), n.get(o)),
  });
}
function Nx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function H2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function z2(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Mu(e) {
  return e === void 0 || e === 1;
}
function Jc({ scale: e, scaleX: t, scaleY: n }) {
  return !Mu(e) || !Mu(t) || !Mu(n);
}
function dr(e) {
  return (
    Jc(e) ||
    _x(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function _x(e) {
  return am(e.x) || am(e.y);
}
function am(e) {
  return e && e !== "0%";
}
function Qs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function om(e, t, n, r, i) {
  return i !== void 0 && (e = Qs(e, i, r)), Qs(e, n, r) + t;
}
function ed(e, t = 0, n = 1, r, i) {
  (e.min = om(e.min, t, n, r, i)), (e.max = om(e.max, t, n, r, i));
}
function Ax(e, { x: t, y: n }) {
  ed(e.x, t.translate, t.scale, t.originPoint),
    ed(e.y, n.translate, n.scale, n.originPoint);
}
const sm = 0.999999999999,
  lm = 1.0000000000001;
function $2(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    (a = n[s]), (o = a.projectionDelta);
    const { visualElement: l } = a.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        ri(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Ax(e, o)),
      r && dr(a.latestValues) && ri(e, a.latestValues));
  }
  t.x < lm && t.x > sm && (t.x = 1), t.y < lm && t.y > sm && (t.y = 1);
}
function ni(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function um(e, t, n, r, i = 0.5) {
  const a = ge(e.min, e.max, i);
  ed(e, t, n, a, r);
}
function ri(e, t) {
  um(e.x, t.x, t.scaleX, t.scale, t.originX),
    um(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Rx(e, t) {
  return Nx(z2(e.getBoundingClientRect(), t));
}
function U2(e, t, n) {
  const r = Rx(e, n),
    { scroll: i } = t;
  return i && (ni(r.x, i.offset.x), ni(r.y, i.offset.y)), r;
}
const cm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ii = () => ({ x: cm(), y: cm() }),
  dm = () => ({ min: 0, max: 0 }),
  De = () => ({ x: dm(), y: dm() }),
  Gs = { current: null },
  tp = { current: !1 };
function Ox() {
  if (((tp.current = !0), !!Sf))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Gs.current = e.matches);
      e.addEventListener("change", t), t();
    } else Gs.current = !1;
}
const K2 = new WeakMap();
function Q2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      a = n[r];
    if (Ue(i)) e.addValue(r, i);
    else if (Ue(a)) e.addValue(r, jt(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, jt(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const fm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class G2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: a,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Bf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = it.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), oe.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.blockInitialAnimation = !!a),
      (this.isControllingVariants = jl(n)),
      (this.isVariantNode = xx(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const h = d[f];
      l[f] !== void 0 && Ue(h) && h.set(l[f]);
    }
  }
  mount(t) {
    var n;
    (this.current = t),
      K2.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      tp.current || Ox(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Gs.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      Bt(this.notifyUpdate),
      Bt(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Fi.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      (this.latestValues[t] = o),
        this.props.onUpdate && oe.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let a;
    window.MotionCheckAppearSync &&
      (a = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), a && a(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Si) {
      const n = Si[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const a = this.features[t];
        a.isMounted ? a.update() : (a.mount(), (a.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : De();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < fm.length; r++) {
      const i = fm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const a = "on" + i,
        o = t[a];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Q2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = jt(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (Dv(r) || Ev(r))
          ? (r = parseFloat(r))
          : !o2(r) && er.test(n) && (r = lx(t, n)),
        this.setBaseTarget(t, Ue(r) ? r.get() : r)),
      Ue(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var a;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Zf(
        this.props,
        n,
        (a = this.presenceContext) == null ? void 0 : a.custom
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ue(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ef()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    zf.render(this.render);
  }
}
class jx extends G2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = VC);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ue(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Lx(e, { style: t, vars: n }, r, i) {
  const a = e.style;
  let o;
  for (o in t) a[o] = t[o];
  i == null || i.applyProjectionStyles(a, r);
  for (o in n) a.setProperty(o, n[o]);
}
function q2(e) {
  return window.getComputedStyle(e);
}
class X2 extends jx {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Lx);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Fi.has(n))
      return (r = this.projection) != null && r.isProjecting ? Uc(n) : aC(t, n);
    {
      const i = q2(t),
        a = (Nf(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Rx(t, n);
  }
  build(t, n, r) {
    Gf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Jf(t, n, r);
  }
}
const Ix = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Z2(e, t, n, r) {
  Lx(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ix.has(i) ? i : ep(i), t.attrs[i]);
}
class J2 extends jx {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = De);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fi.has(n)) {
      const r = sx(n);
      return (r && r.default) || 0;
    }
    return (n = Ix.has(n) ? n : ep(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ex(t, n, r);
  }
  build(t, n, r) {
    Sx(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    Z2(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Dx(t.tagName)), super.mount(t);
  }
}
const eE = (e, t) =>
  Xf(e) ? new J2(t) : new X2(t, { allowProjection: e !== x.Fragment });
function di(e, t, n) {
  const r = e.getProps();
  return Zf(r, t, n !== void 0 ? n : r.custom, e);
}
const td = (e) => Array.isArray(e);
function tE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, jt(n));
}
function nE(e) {
  return td(e) ? e[e.length - 1] || 0 : e;
}
function rE(e, t) {
  const n = di(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...a } = n || {};
  a = { ...a, ...r };
  for (const o in a) {
    const s = nE(a[o]);
    tE(e, o, s);
  }
}
function iE(e) {
  return !!(Ue(e) && e.add);
}
function nd(e, t) {
  const n = e.getValue("willChange");
  if (iE(n)) return n.add(t);
  if (!n && En.WillChange) {
    const r = new En.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Fx(e) {
  return e.props[Px];
}
const aE = (e) => e !== null;
function oE(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(aE),
    a = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[a];
}
const sE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  lE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  uE = { type: "keyframes", duration: 0.8 },
  cE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  dE = (e, { keyframes: t }) =>
    t.length > 2
      ? uE
      : Fi.has(e)
      ? e.startsWith("scale")
        ? lE(t[1])
        : sE
      : cE;
function fE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const np =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    const s = Yf(r, e) || {},
      l = s.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Jt(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...s,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), s.onUpdate && s.onUpdate(f);
      },
      onComplete: () => {
        o(), s.onComplete && s.onComplete();
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    fE(s) || Object.assign(c, dE(e, c)),
      c.duration && (c.duration = Jt(c.duration)),
      c.repeatDelay && (c.repeatDelay = Jt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Xc(c), c.delay === 0 && (d = !0)),
      (En.instantAnimations || En.skipAnimations) &&
        ((d = !0), Xc(c), (c.delay = 0)),
      (c.allowFlatten = !s.type && !s.ease),
      d && !a && t.get() !== void 0)
    ) {
      const f = oE(c.keyframes, s);
      if (f !== void 0) {
        oe.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return s.isSync ? new Vf(c) : new PC(c);
  };
function pE({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Vx(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  const l = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (const c in s) {
    const d = e.getValue(c, e.latestValues[c] ?? null),
      f = s[c];
    if (f === void 0 || (u && pE(u, c))) continue;
    const h = { delay: n, ...Yf(a || {}, c) },
      v = d.get();
    if (
      v !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(f) &&
      f === v &&
      !h.velocity
    )
      continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const g = Fx(e);
      if (g) {
        const m = window.MotionHandoffAnimation(g, c, oe);
        m !== null && ((h.startTime = m), (w = !0));
      }
    }
    nd(e, c),
      d.start(
        np(c, d, f, e.shouldReduceMotion && ix.has(c) ? { type: !1 } : h, e, w)
      );
    const b = d.animation;
    b && l.push(b);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        oe.update(() => {
          o && rE(e, o);
        });
      }),
    l
  );
}
function Bx(e, t, n, r = 0, i = 1) {
  const a = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function rd(e, t, n = {}) {
  var l;
  const r = di(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = r ? () => Promise.all(Vx(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return hE(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    const [u, c] = s === "beforeChildren" ? [a, o] : [o, a];
    return u().then(() => c());
  } else return Promise.all([a(), o(n.delay)]);
}
function hE(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  const s = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      s.push(
        rd(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Bx(e.variantChildren, l, r, i, a),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(s);
}
function mE(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((a) => rd(e, a, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = rd(e, t, n);
  else {
    const i = typeof t == "function" ? di(e, t, n.custom) : t;
    r = Promise.all(Vx(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Yx(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const gE = Qf.length;
function Wx(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Wx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < gE; n++) {
    const r = Qf[n],
      i = e.props[r];
    (Ua(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const yE = [...Kf].reverse(),
  vE = Kf.length;
function xE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => mE(e, n, r)));
}
function wE(e) {
  let t = xE(e),
    n = pm(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = di(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: h, transitionEnd: v, ...w } = d;
      u = { ...u, ...w, ...v };
    }
    return u;
  };
  function a(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = Wx(e.parent) || {},
      d = [],
      f = new Set();
    let h = {},
      v = 1 / 0;
    for (let b = 0; b < vE; b++) {
      const g = yE[b],
        m = n[g],
        y = u[g] !== void 0 ? u[g] : c[g],
        S = Ua(y),
        k = g === l ? m.isActive : null;
      k === !1 && (v = b);
      let E = y === c[g] && y !== u[g] && S;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (m.protectedKeys = { ...h }),
        (!m.isActive && k === null) ||
          (!y && !m.prevProp) ||
          Ol(y) ||
          typeof y == "boolean")
      )
        continue;
      const C = bE(m.prevProp, y);
      let D = C || (g === l && m.isActive && !E && S) || (b > v && S),
        M = !1;
      const A = Array.isArray(y) ? y : [y];
      let B = A.reduce(i(g), {});
      k === !1 && (B = {});
      const { prevResolvedValues: j = {} } = m,
        U = { ...j, ...B },
        K = (V) => {
          (D = !0),
            f.has(V) && ((M = !0), f.delete(V)),
            (m.needsAnimating[V] = !0);
          const T = e.getValue(V);
          T && (T.liveStyle = !1);
        };
      for (const V in U) {
        const T = B[V],
          N = j[V];
        if (h.hasOwnProperty(V)) continue;
        let O = !1;
        td(T) && td(N) ? (O = !Yx(T, N)) : (O = T !== N),
          O
            ? T != null
              ? K(V)
              : f.add(V)
            : T !== void 0 && f.has(V)
            ? K(V)
            : (m.protectedKeys[V] = !0);
      }
      (m.prevProp = y),
        (m.prevResolvedValues = B),
        m.isActive && (h = { ...h, ...B }),
        r && e.blockInitialAnimation && (D = !1);
      const Q = E && C;
      D &&
        (!Q || M) &&
        d.push(
          ...A.map((V) => {
            const T = { type: g };
            if (
              typeof V == "string" &&
              r &&
              !Q &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: N } = e,
                O = di(N, V);
              if (N.enteringChildren && O) {
                const { delayChildren: W } = O.transition || {};
                T.delay = Bx(N.enteringChildren, e, W);
              }
            }
            return { animation: V, options: T };
          })
        );
    }
    if (f.size) {
      const b = {};
      if (typeof u.initial != "boolean") {
        const g = di(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (b.transition = g.transition);
      }
      f.forEach((g) => {
        const m = e.getBaseTarget(g),
          y = e.getValue(g);
        y && (y.liveStyle = !0), (b[g] = m ?? null);
      }),
        d.push({ animation: b });
    }
    let w = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function s(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) == null ||
      d.forEach((f) => {
        var h;
        return (h = f.animationState) == null ? void 0 : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const c = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      (n = pm()), (r = !0);
    },
  };
}
function bE(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Yx(t, e) : !1;
}
function lr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function pm() {
  return {
    animate: lr(!0),
    whileInView: lr(),
    whileHover: lr(),
    whileTap: lr(),
    whileDrag: lr(),
    whileFocus: lr(),
    exit: lr(),
  };
}
class sr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class SE extends sr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = wE(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ol(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let kE = 0;
class DE extends sr {
  constructor() {
    super(...arguments), (this.id = kE++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const CE = { animation: { Feature: SE }, exit: { Feature: DE } };
function Qa(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function uo(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const EE = (e) => (t) => $f(t) && e(t, uo(t));
function Sa(e, t, n, r) {
  return Qa(e, t, EE(n), r);
}
const Hx = 1e-4,
  PE = 1 - Hx,
  ME = 1 + Hx,
  zx = 0.01,
  TE = 0 - zx,
  NE = 0 + zx;
function qe(e) {
  return e.max - e.min;
}
function _E(e, t, n) {
  return Math.abs(e - t) <= n;
}
function hm(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ge(t.min, t.max, e.origin)),
    (e.scale = qe(n) / qe(t)),
    (e.translate = ge(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= PE && e.scale <= ME) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= TE && e.translate <= NE) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function ka(e, t, n, r) {
  hm(e.x, t.x, n.x, r ? r.originX : void 0),
    hm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function mm(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + qe(t));
}
function AE(e, t, n) {
  mm(e.x, t.x, n.x), mm(e.y, t.y, n.y);
}
function gm(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + qe(t));
}
function Da(e, t, n) {
  gm(e.x, t.x, n.x), gm(e.y, t.y, n.y);
}
function vt(e) {
  return [e("x"), e("y")];
}
const $x = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ym = (e, t) => Math.abs(e - t);
function RE(e, t) {
  const n = ym(e.x, t.x),
    r = ym(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ux {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: a = !1,
      distanceThreshold: o = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Nu(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          v = RE(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!h && !v) return;
        const { point: w } = f,
          { timestamp: b } = Re;
        this.history.push({ ...w, timestamp: b });
        const { onStart: g, onMove: m } = this.handlers;
        h ||
          (g && g(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Tu(h, this.transformPagePoint)),
          oe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: v, onSessionEnd: w, resumeAnimation: b } = this.handlers;
        if (
          (this.dragSnapToOrigin && b && b(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const g = Nu(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Tu(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, g), w && w(f, g);
      }),
      !$f(t))
    )
      return;
    (this.dragSnapToOrigin = a),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window);
    const s = uo(t),
      l = Tu(s, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = Re;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, Nu(l, this.history)),
      (this.removeListeners = oo(
        Sa(this.contextWindow, "pointermove", this.handlePointerMove),
        Sa(this.contextWindow, "pointerup", this.handlePointerUp),
        Sa(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Bt(this.updatePoint);
  }
}
function Tu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Nu({ point: e }, t) {
  return {
    point: e,
    delta: vm(e, Kx(t)),
    offset: vm(e, OE(t)),
    velocity: jE(t, 0.1),
  };
}
function OE(e) {
  return e[0];
}
function Kx(e) {
  return e[e.length - 1];
}
function jE(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Kx(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Jt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const a = en(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function LE(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ge(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ge(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function xm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function IE(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: xm(e.x, n, i), y: xm(e.y, t, r) };
}
function wm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function FE(e, t) {
  return { x: wm(e.x, t.x), y: wm(e.y, t.y) };
}
function VE(e, t) {
  let n = 0.5;
  const r = qe(e),
    i = qe(t);
  return (
    i > r
      ? (n = bi(t.min, t.max - r, e.min))
      : r > i && (n = bi(e.min, e.max - i, t.min)),
    an(0, 1, n)
  );
}
function BE(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const id = 0.35;
function YE(e = id) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = id),
    { x: bm(e, "left", "right"), y: bm(e, "top", "bottom") }
  );
}
function bm(e, t, n) {
  return { min: Sm(e, t), max: Sm(e, n) };
}
function Sm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const WE = new WeakMap();
class HE {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = De()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const a = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(uo(d).point);
      },
      o = (d, f) => {
        const { drag: h, dragPropagation: v, onDragStart: w } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = WC(h)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          vt((g) => {
            let m = this.getAxisMotionValue(g).get() || 0;
            if (tn.test(m)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const S = y.layout.layoutBox[g];
                S && (m = qe(S) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[g] = m;
          }),
          w && oe.postRender(() => w(d, f)),
          nd(this.visualElement, "transform");
        const { animationState: b } = this.visualElement;
        b && b.setActive("whileDrag", !0);
      },
      s = (d, f) => {
        (this.latestPointerEvent = d), (this.latestPanInfo = f);
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: w,
          onDrag: b,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: g } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = zE(g)),
            this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, g),
          this.updateAxis("y", f.point, g),
          this.visualElement.render(),
          b && b(d, f);
      },
      l = (d, f) => {
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      u = () =>
        vt((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ux(
      t,
      {
        onSessionStart: a,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: $x(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      a = this.isDragging;
    if ((this.cancel(), !a || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && oe.postRender(() => s(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Lo(t, i, this.currentDirection)) return;
    const a = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = LE(o, this.constraints[t], this.elastic[t])),
      a.set(o);
  }
  resolveConstraints() {
    var a;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (a = this.visualElement.projection) == null
          ? void 0
          : a.layout,
      i = this.constraints;
    t && ti(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = IE(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = YE(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        vt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = BE(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ti(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const a = U2(r, i.root, this.visualElement.getTransformPagePoint());
    let o = FE(i.layout.layoutBox, a);
    if (n) {
      const s = n(H2(o));
      (this.hasMutatedConstraints = !!s), s && (o = Nx(s));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: a,
        dragSnapToOrigin: o,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = vt((c) => {
        if (!Lo(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      nd(this.visualElement, t), r.start(np(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    vt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    vt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    vt((n) => {
      const { drag: r } = this.getProps();
      if (!Lo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        a = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: s } = i.layout.layoutBox[n];
        a.set(t[n] - ge(o, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ti(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    vt((o) => {
      const s = this.getAxisMotionValue(o);
      if (s && this.constraints !== !1) {
        const l = s.get();
        i[o] = VE({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      vt((o) => {
        if (!Lo(o, t, null)) return;
        const s = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        s.set(ge(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    WE.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Sa(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        ti(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      a = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      oe.read(r);
    const o = Qa(window, "resize", () => this.scalePositionWithinConstraints()),
      s = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (vt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: a = !1,
        dragElastic: o = id,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: a,
      dragElastic: o,
      dragMomentum: s,
    };
  }
}
function Lo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function zE(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class $E extends sr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = lt),
      (this.removeListeners = lt),
      (this.controls = new HE(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || lt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const km = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class UE extends sr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = lt);
  }
  onPointerDown(t) {
    this.session = new Ux(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $x(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: km(t),
      onStart: km(n),
      onMove: r,
      onEnd: (a, o) => {
        delete this.session, i && oe.postRender(() => i(a, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Sa(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const fs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Dm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const qi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (z.test(e)) e = parseFloat(e);
        else return e;
      const n = Dm(e, t.target.x),
        r = Dm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  KE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = er.parse(e);
      if (i.length > 5) return r;
      const a = er.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= s), (i[1 + o] /= l);
      const u = ge(s, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        a(i)
      );
    },
  };
let _u = !1;
class QE extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: a } = t;
    y2(GE),
      a &&
        (n.group && n.group.add(a),
        r && r.register && i && r.register(a),
        _u && a.root.didUpdate(),
        a.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        a.setOptions({
          ...a.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (fs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: a,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = a),
        (_u = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== a
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== a &&
          (a
            ? o.promote()
            : o.relegate() ||
              oe.postRender(() => {
                const s = o.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      zf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    (_u = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Qx(e) {
  const [t, n] = gx(),
    r = x.useContext(bf);
  return p.jsx(QE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(Mx),
    isPresent: t,
    safeToRemove: n,
  });
}
const GE = {
  borderRadius: {
    ...qi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: qi,
  borderTopRightRadius: qi,
  borderBottomLeftRadius: qi,
  borderBottomRightRadius: qi,
  boxShadow: KE,
};
function qE(e, t, n) {
  const r = Ue(e) ? e : jt(e);
  return r.start(np("", r, t, n)), r.animation;
}
const XE = (e, t) => e.depth - t.depth;
class ZE {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    kf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Df(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(XE),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function JE(e, t) {
  const n = it.now(),
    r = ({ timestamp: i }) => {
      const a = i - n;
      a >= t && (Bt(r), e(a - t));
    };
  return oe.setup(r, !0), () => Bt(r);
}
const Gx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  eP = Gx.length,
  Cm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Em = (e) => typeof e == "number" || z.test(e);
function tP(e, t, n, r, i, a) {
  i
    ? ((e.opacity = ge(0, n.opacity ?? 1, nP(r))),
      (e.opacityExit = ge(t.opacity ?? 1, 0, rP(r))))
    : a && (e.opacity = ge(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < eP; o++) {
    const s = `border${Gx[o]}Radius`;
    let l = Pm(t, s),
      u = Pm(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Em(l) === Em(u)
        ? ((e[s] = Math.max(ge(Cm(l), Cm(u), r), 0)),
          (tn.test(u) || tn.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ge(t.rotate || 0, n.rotate || 0, r));
}
function Pm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const nP = qx(0, 0.5, Rv),
  rP = qx(0.5, 0.95, lt);
function qx(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(bi(e, t, r)));
}
function Mm(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function yt(e, t) {
  Mm(e.x, t.x), Mm(e.y, t.y);
}
function Tm(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Nm(e, t, n, r, i) {
  return (
    (e -= t), (e = Qs(e, 1 / n, r)), i !== void 0 && (e = Qs(e, 1 / i, r)), e
  );
}
function iP(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (tn.test(t) &&
      ((t = parseFloat(t)), (t = ge(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let s = ge(a.min, a.max, r);
  e === a && (s -= t),
    (e.min = Nm(e.min, t, n, s, i)),
    (e.max = Nm(e.max, t, n, s, i));
}
function _m(e, t, [n, r, i], a, o) {
  iP(e, t[n], t[r], t[i], t.scale, a, o);
}
const aP = ["x", "scaleX", "originX"],
  oP = ["y", "scaleY", "originY"];
function Am(e, t, n, r) {
  _m(e.x, t, aP, n ? n.x : void 0, r ? r.x : void 0),
    _m(e.y, t, oP, n ? n.y : void 0, r ? r.y : void 0);
}
function Rm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Xx(e) {
  return Rm(e.x) && Rm(e.y);
}
function Om(e, t) {
  return e.min === t.min && e.max === t.max;
}
function sP(e, t) {
  return Om(e.x, t.x) && Om(e.y, t.y);
}
function jm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Zx(e, t) {
  return jm(e.x, t.x) && jm(e.y, t.y);
}
function Lm(e) {
  return qe(e.x) / qe(e.y);
}
function Im(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class lP {
  constructor() {
    this.members = [];
  }
  add(t) {
    kf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Df(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const a = this.members[i];
      if (a.isPresent !== !1) {
        r = a;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function uP(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Au = ["", "X", "Y", "Z"],
  cP = 1e3;
let dP = 0;
function Ru(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Jx(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Fx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: a } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(i || a));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Jx(r);
}
function ew({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, s = t == null ? void 0 : t()) {
      (this.id = dP++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(hP),
            this.nodes.forEach(vP),
            this.nodes.forEach(xP),
            this.nodes.forEach(mP);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ZE());
    }
    addEventListener(o, s) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ef()),
        this.eventHandlers.get(o).add(s)
      );
    }
    notifyListeners(o, ...s) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...s);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      (this.isSVG = Uf(o) && !r2(o)), (this.instance = o);
      const { layoutId: s, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || s) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        oe.read(() => {
          d = window.innerWidth;
        }),
          e(o, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = JE(f, 250)),
              fs.hasAnimatedSinceResize &&
                ((fs.hasAnimatedSinceResize = !1), this.nodes.forEach(Bm)));
          });
      }
      s && this.root.registerSharedNode(s, this),
        this.options.animate !== !1 &&
          u &&
          (s || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || DP,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: b } =
                  u.getProps(),
                g = !this.targetLayout || !Zx(this.targetLayout, h),
                m = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (d && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...Yf(v, "layout"), onPlay: w, onComplete: b };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, m);
              } else
                d || Bm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Bt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(wP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Jx(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Fm);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Vm);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(yP),
            this.nodes.forEach(fP),
            this.nodes.forEach(pP))
          : this.nodes.forEach(Vm),
        this.clearAllSnapshots();
      const s = it.now();
      (Re.delta = an(0, 1e3 / 60, s - Re.timestamp)),
        (Re.timestamp = s),
        (Re.isProcessing = !0),
        bu.update.process(Re),
        bu.preRender.process(Re),
        bu.render.process(Re),
        (Re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), zf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(gP), this.sharedNodes.forEach(bP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !qe(this.snapshot.measuredBox.x) &&
          !qe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = De()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (s = !1),
        s && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        s = this.projectionDelta && !Xx(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (s || dr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        o && (l = this.removeTransform(l)),
        CP(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return De();
      const s = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(EP)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ni(s.x, c.offset.x), ni(s.y, c.offset.y));
      }
      return s;
    }
    removeElementScroll(o) {
      var l;
      const s = De();
      if ((yt(s, o), (l = this.scroll) != null && l.wasRoot)) return s;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && yt(s, o), ni(s.x, d.offset.x), ni(s.y, d.offset.y));
      }
      return s;
    }
    applyTransform(o, s = !1) {
      const l = De();
      yt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ri(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          dr(c.latestValues) && ri(l, c.latestValues);
      }
      return dr(this.latestValues) && ri(l, this.latestValues), l;
    }
    removeTransform(o) {
      const s = De();
      yt(s, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !dr(u.latestValues)) continue;
        Jc(u.latestValues) && u.updateSnapshot();
        const c = De(),
          d = u.measurePageBox();
        yt(c, d),
          Am(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return dr(this.latestValues) && Am(s, this.latestValues), s;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var f;
      const s = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== s;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((f = this.parent) != null && f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Re.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = De()),
              (this.relativeTargetOrigin = De()),
              Da(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = De()), (this.targetWithTransforms = De())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              AE(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : yt(this.target, this.layout.layoutBox),
              Ax(this.target, this.targetDelta))
            : yt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const h = this.getClosestProjectingParent();
          h &&
          !!h.resumingFrom == !!this.resumingFrom &&
          !h.options.layoutScroll &&
          h.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = De()),
              (this.relativeTargetOrigin = De()),
              Da(this.relativeTargetOrigin, this.target, h.target),
              yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Jc(this.parent.latestValues) ||
          _x(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        s = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        s &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Re.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      yt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      $2(this.layoutCorrected, this.treeScale, this.path, s),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = De()));
      const { target: h } = o;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Tm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Tm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ka(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Im(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Im(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var s;
      if (((s = this.options.visualElement) == null || s.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ii()),
        (this.projectionDelta = ii()),
        (this.projectionDeltaWithTransform = ii());
    }
    setAnimationOrigin(o, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ii();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = De(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        w = h !== v,
        b = this.getStack(),
        g = !b || b.members.length <= 1,
        m = !!(w && !g && this.options.crossfade === !0 && !this.path.some(kP));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (S) => {
        const k = S / 1e3;
        Ym(d.x, o.x, k),
          Ym(d.y, o.y, k),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Da(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            SP(this.relativeTarget, this.relativeTargetOrigin, f, k),
            y && sP(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = De()),
            yt(y, this.relativeTarget)),
          w &&
            ((this.animationValues = c), tP(c, u, this.latestValues, k, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var s, l, u;
      this.notifyListeners("animationStart"),
        (s = this.currentAnimation) == null || s.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Bt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = oe.update(() => {
          (fs.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = jt(0)),
            (this.currentAnimation = qE(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c);
              },
              onStop: () => {},
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(cP),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!s || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          tw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || De();
          const d = qe(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = qe(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        yt(s, l),
          ri(s, c),
          ka(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(o, s) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new lP()),
        this.sharedNodes.get(o).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: o } = this.options;
      return o
        ? ((s = this.getStack()) == null ? void 0 : s.lead) || this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: o } = this.options;
      return o ? ((s = this.getStack()) == null ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let s = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (s = !0),
        !s)
      )
        return;
      const u = {};
      l.z && Ru("z", o, u, this.animationValues);
      for (let c = 0; c < Au.length; c++)
        Ru(`rotate${Au[c]}`, o, u, this.animationValues),
          Ru(`skew${Au[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, s) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = ds(s == null ? void 0 : s.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = ds(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !dr(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = uP(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), (o.transform = d);
      const { x: f, y: h } = this.projectionDelta;
      (o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? c.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const v in Ka) {
        if (c[v] === void 0) continue;
        const { correct: w, applyTo: b, isCSSVariable: g } = Ka[v],
          m = d === "none" ? c[v] : w(c[v], u);
        if (b) {
          const y = b.length;
          for (let S = 0; S < y; S++) o[b[S]] = m;
        } else
          g ? (this.options.visualElement.renderState.vars[v] = m) : (o[v] = m);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? ds(s == null ? void 0 : s.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var s;
        return (s = o.currentAnimation) == null ? void 0 : s.stop();
      }),
        this.root.nodes.forEach(Fm),
        this.root.sharedNodes.clear();
    }
  };
}
function fP(e) {
  e.updateLayout();
}
function pP(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: a } = e.options,
      o = t.source !== e.layout.source;
    a === "size"
      ? vt((d) => {
          const f = o ? t.measuredBox[d] : t.layoutBox[d],
            h = qe(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : tw(a, t.layoutBox, r) &&
        vt((d) => {
          const f = o ? t.measuredBox[d] : t.layoutBox[d],
            h = qe(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const s = ii();
    ka(s, r, t.layoutBox);
    const l = ii();
    o ? ka(l, e.applyTransform(i, !0), t.measuredBox) : ka(l, r, t.layoutBox);
    const u = !Xx(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = De();
          Da(v, t.layoutBox, f.layoutBox);
          const w = De();
          Da(w, r, h.layoutBox),
            Zx(v, w) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function hP(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function mP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gP(e) {
  e.clearSnapshot();
}
function Fm(e) {
  e.clearMeasurements();
}
function Vm(e) {
  e.isLayoutDirty = !1;
}
function yP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Bm(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function vP(e) {
  e.resolveTargetDelta();
}
function xP(e) {
  e.calcProjection();
}
function wP(e) {
  e.resetSkewAndRotation();
}
function bP(e) {
  e.removeLeadSnapshot();
}
function Ym(e, t, n) {
  (e.translate = ge(t.translate, 0, n)),
    (e.scale = ge(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Wm(e, t, n, r) {
  (e.min = ge(t.min, n.min, r)), (e.max = ge(t.max, n.max, r));
}
function SP(e, t, n, r) {
  Wm(e.x, t.x, n.x, r), Wm(e.y, t.y, n.y, r);
}
function kP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const DP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  zm = Hm("applewebkit/") && !Hm("chrome/") ? Math.round : lt;
function $m(e) {
  (e.min = zm(e.min)), (e.max = zm(e.max));
}
function CP(e) {
  $m(e.x), $m(e.y);
}
function tw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !_E(Lm(t), Lm(n), 0.2))
  );
}
function EP(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const PP = ew({
    attachResizeListener: (e, t) => Qa(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ou = { current: void 0 },
  nw = ew({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ou.current) {
        const e = new PP({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ou.current = e);
      }
      return Ou.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  MP = {
    pan: { Feature: UE },
    drag: { Feature: $E, ProjectionNode: nw, MeasureLayout: Qx },
  };
function Um(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    a = r[i];
  a && oe.postRender(() => a(t, uo(t)));
}
class TP extends sr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = HC(
        t,
        (n, r) => (Um(this.node, r, "Start"), (i) => Um(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class NP extends sr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = oo(
      Qa(this.node.current, "focus", () => this.onFocus()),
      Qa(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Km(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    a = r[i];
  a && oe.postRender(() => a(t, uo(t)));
}
class _P extends sr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = KC(
        t,
        (n, r) => (
          Km(this.node, r, "Start"),
          (i, { success: a }) => Km(this.node, i, a ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const ad = new WeakMap(),
  ju = new WeakMap(),
  AP = (e) => {
    const t = ad.get(e.target);
    t && t(e);
  },
  RP = (e) => {
    e.forEach(AP);
  };
function OP({ root: e, ...t }) {
  const n = e || document;
  ju.has(n) || ju.set(n, {});
  const r = ju.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(RP, { root: e, ...t })), r[i];
}
function jP(e, t, n) {
  const r = OP(t);
  return (
    ad.set(e, n),
    r.observe(e),
    () => {
      ad.delete(e), r.unobserve(e);
    }
  );
}
const LP = { some: 0, all: 1 };
class IP extends sr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: a } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : LP[i],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), a && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return jP(this.node.current, o, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(FP(t, n)) && this.startObserver();
  }
  unmount() {}
}
function FP({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const VP = {
    inView: { Feature: IP },
    tap: { Feature: _P },
    focus: { Feature: NP },
    hover: { Feature: TP },
  },
  BP = { layout: { ProjectionNode: nw, MeasureLayout: Qx } },
  YP = { ...CE, ...VP, ...MP, ...BP },
  $ = W2(YP, eE),
  WP = 50,
  Qm = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  HP = () => ({ time: 0, x: Qm(), y: Qm() }),
  zP = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Gm(e, t, n, r) {
  const i = n[t],
    { length: a, position: o } = zP[t],
    s = i.current,
    l = n.time;
  (i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = bi(0, i.scrollLength, i.current));
  const u = r - l;
  i.velocity = u > WP ? 0 : Pf(i.current - s, u);
}
function $P(e, t, n) {
  Gm(e, "x", t, n), Gm(e, "y", t, n), (t.time = n);
}
function UP(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (Hf(r))
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const a = r.getBoundingClientRect();
      (n.x += i.left - a.left), (n.y += i.top - a.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: a } = r.getBBox();
      (n.x += i), (n.y += a);
      let o = null,
        s = r.parentNode;
      for (; !o; ) s.tagName === "svg" && (o = s), (s = r.parentNode);
      r = o;
    } else break;
  return n;
}
const od = { start: 0, center: 0.5, end: 1 };
function qm(e, t, n = 0) {
  let r = 0;
  if ((e in od && (e = od[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const KP = [0, 0];
function QP(e, t, n, r) {
  let i = Array.isArray(e) ? e : KP,
    a = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, od[e] ? e : "0"])),
    (a = qm(i[0], n, r)),
    (o = qm(i[1], t)),
    a - o
  );
}
const GP = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  qP = { x: 0, y: 0 };
function XP(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function ZP(e, t, n) {
  const { offset: r = GP.All } = n,
    { target: i = e, axis: a = "y" } = n,
    o = a === "y" ? "height" : "width",
    s = i !== e ? UP(i, e) : qP,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : XP(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let c = !t[a].interpolate;
  const d = r.length;
  for (let f = 0; f < d; f++) {
    const h = QP(r[f], u[o], l[o], s[a]);
    !c && h !== t[a].interpolatorOffsets[f] && (c = !0), (t[a].offset[f] = h);
  }
  c &&
    ((t[a].interpolate = Lf(t[a].offset, Qv(r), { clamp: !1 })),
    (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = an(0, 1, t[a].interpolate(t[a].current)));
}
function JP(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function eM(e, t, n, r = {}) {
  return {
    measure: (i) => {
      JP(e, r.target, n), $P(e, n, i), (r.offset || r.target) && ZP(e, n, r);
    },
    notify: () => t(n),
  };
}
const Xi = new WeakMap(),
  Xm = new WeakMap(),
  Lu = new WeakMap(),
  Zm = (e) => (e === document.scrollingElement ? window : e);
function rw(e, { container: t = document.scrollingElement, ...n } = {}) {
  if (!t) return lt;
  let r = Lu.get(t);
  r || ((r = new Set()), Lu.set(t, r));
  const i = HP(),
    a = eM(t, e, i, n);
  if ((r.add(a), !Xi.has(t))) {
    const s = () => {
        for (const d of r) d.measure(Re.timestamp);
        oe.preUpdate(l);
      },
      l = () => {
        for (const d of r) d.notify();
      },
      u = () => oe.read(s);
    Xi.set(t, u);
    const c = Zm(t);
    window.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && Xm.set(t, n2(t, u)),
      c.addEventListener("scroll", u, { passive: !0 }),
      u();
  }
  const o = Xi.get(t);
  return (
    oe.read(o, !1, !0),
    () => {
      var u;
      Bt(o);
      const s = Lu.get(t);
      if (!s || (s.delete(a), s.size)) return;
      const l = Xi.get(t);
      Xi.delete(t),
        l &&
          (Zm(t).removeEventListener("scroll", l),
          (u = Xm.get(t)) == null || u(),
          window.removeEventListener("resize", l));
    }
  );
}
const Jm = new Map();
function tM(e) {
  const t = { value: 0 },
    n = rw((r) => {
      t.value = r[e.axis].progress * 100;
    }, e);
  return { currentTime: t, cancel: n };
}
function iw({ source: e, container: t, ...n }) {
  const { axis: r } = n;
  e && (t = e);
  const i = Jm.get(t) ?? new Map();
  Jm.set(t, i);
  const a = n.target ?? "self",
    o = i.get(a) ?? {},
    s = r + (n.offset ?? []).join(",");
  return (
    o[s] ||
      (o[s] =
        !n.target && Zv()
          ? new ScrollTimeline({ source: t, axis: r })
          : tM({ container: t, ...n })),
    o[s]
  );
}
function nM(e, t) {
  const n = iw(t);
  return e.attachTimeline({
    timeline: t.target ? void 0 : n,
    observe: (r) => (
      r.pause(),
      mx((i) => {
        r.time = r.duration * i;
      }, n)
    ),
  });
}
function rM(e) {
  return e.length === 2;
}
function iM(e, t) {
  return rM(e)
    ? rw((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : mx(e, iw(t));
}
function aM(
  e,
  { axis: t = "y", container: n = document.scrollingElement, ...r } = {}
) {
  if (!n) return lt;
  const i = { axis: t, container: n, ...r };
  return typeof e == "function" ? iM(e, i) : nM(e, i);
}
const oM = () => ({
    scrollX: jt(0),
    scrollY: jt(0),
    scrollXProgress: jt(0),
    scrollYProgress: jt(0),
  }),
  Io = (e) => (e ? !e.current : !1);
function sM({ container: e, target: t, ...n } = {}) {
  const r = ji(oM),
    i = x.useRef(null),
    a = x.useRef(!1),
    o = x.useCallback(
      () => (
        (i.current = aM(
          (s, { x: l, y: u }) => {
            r.scrollX.set(l.current),
              r.scrollXProgress.set(l.progress),
              r.scrollY.set(u.current),
              r.scrollYProgress.set(u.progress);
          },
          {
            ...n,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )),
        () => {
          var s;
          (s = i.current) == null || s.call(i);
        }
      ),
      [e, t, JSON.stringify(n.offset)]
    );
  return (
    Nl(() => {
      if (((a.current = !1), Io(e) || Io(t))) {
        a.current = !0;
        return;
      } else return o();
    }, [o]),
    x.useEffect(() => {
      if (a.current) return Ha(!Io(e)), Ha(!Io(t)), o();
    }, [o]),
    r
  );
}
function lM(e) {
  const t = ji(() => jt(e)),
    { isStatic: n } = x.useContext(Al);
  if (n) {
    const [, r] = x.useState(e);
    x.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function aw(e, t) {
  const n = lM(t()),
    r = () => n.set(t());
  return (
    r(),
    Nl(() => {
      const i = () => oe.preRender(r, !1, !0),
        a = e.map((o) => o.on("change", i));
      return () => {
        a.forEach((o) => o()), Bt(r);
      };
    }),
    n
  );
}
function uM(e) {
  (ba.current = []), e();
  const t = aw(ba.current, e);
  return (ba.current = void 0), t;
}
function cM(e, t, n, r) {
  if (typeof e == "function") return uM(e);
  const i = typeof t == "function" ? t : i2(t, n, r);
  return Array.isArray(e) ? eg(e, i) : eg([e], ([a]) => i(a));
}
function eg(e, t) {
  const n = ji(() => []);
  return aw(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function dM() {
  !tp.current && Ox();
  const [e] = x.useState(Gs.current);
  return e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var fM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pM = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  J = (e, t) => {
    const n = x.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: o,
          className: s = "",
          children: l,
          ...u
        },
        c
      ) =>
        x.createElement(
          "svg",
          {
            ref: c,
            ...fM,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(a) * 24) / Number(i) : a,
            className: ["lucide", `lucide-${pM(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([d, f]) => x.createElement(d, f)),
            ...(Array.isArray(l) ? l : [l]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = J("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hM = J("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mM = J("Ambulance", [
  ["path", { d: "M10 10H6", key: "1bsnug" }],
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
      key: "lrkjwd",
    },
  ],
  ["path", { d: "M8 8v4", key: "1fwk8c" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = J("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gM = J("Baby", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tg = J("Bone", [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = J("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yM = J("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = J("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vM = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xM = J("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = J("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = J("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zi = J("Droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wM = J("Ear", [
  [
    "path",
    {
      d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
      key: "1dfaln",
    },
  ],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bM = J("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qs = J("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = J("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = J("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SM = J("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = J("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kM = J("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DM = J("Microscope", [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = J("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CM = J("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e",
    },
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EM = J("Scan", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PM = J("Scissors", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MM = J("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = J("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dw = J("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TM = J("Stethoscope", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r",
    },
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NM = J("Syringe", [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  [
    "path",
    {
      d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
      key: "1exhtz",
    },
  ],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = J("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = J("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = J("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  rg = (e) => {
    let t;
    const n = new Set(),
      r = (u, c) => {
        const d = typeof u == "function" ? u(t) : u;
        if (!Object.is(d, t)) {
          const f = t;
          (t =
            c ?? (typeof d != "object" || d === null)
              ? d
              : Object.assign({}, t, d)),
            n.forEach((h) => h(t, f));
        }
      },
      i = () => t,
      s = {
        setState: r,
        getState: i,
        getInitialState: () => l,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      l = (t = e(r, i, s));
    return s;
  },
  _M = (e) => (e ? rg(e) : rg),
  AM = (e) => e;
function RM(e, t = AM) {
  const n = _.useSyncExternalStore(
    e.subscribe,
    _.useCallback(() => t(e.getState()), [e, t]),
    _.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return _.useDebugValue(n), n;
}
const ig = (e) => {
    const t = _M(e),
      n = (r) => RM(t, r);
    return Object.assign(n, t), n;
  },
  OM = (e) => (e ? ig(e) : ig),
  Ll = OM((e) => ({
    isModalOpen: !1,
    selectedDoctor: null,
    setIsModalOpen: (t) => e({ isModalOpen: t }),
    setSelectedDoctor: (t) => e({ selectedDoctor: t }),
  })),
  jM = "/assets/hero-BdSz08yI.mp4",
  LM = (e, t) => {
    const n = new Set([...Object.keys(e), ...t.flatMap((i) => Object.keys(i))]),
      r = {};
    return (
      n.forEach((i) => {
        r[i] = [e[i], ...t.map((a) => a[i])];
      }),
      r
    );
  },
  Fo = ({
    text: e = "",
    delay: t = 200,
    className: n = "",
    animateBy: r = "words",
    direction: i = "top",
    threshold: a = 0.1,
    rootMargin: o = "0px",
    animationFrom: s,
    animationTo: l,
    easing: u = (f) => f,
    onAnimationComplete: c,
    stepDuration: d = 0.35,
  }) => {
    const f = r === "words" ? e.split(" ") : e.split(""),
      [h, v] = x.useState(!1),
      w = x.useRef(null);
    x.useEffect(() => {
      if (!w.current) return;
      const C = new IntersectionObserver(
        ([D]) => {
          D.isIntersecting && (v(!0), C.unobserve(w.current));
        },
        { threshold: a, rootMargin: o }
      );
      return C.observe(w.current), () => C.disconnect();
    }, [a, o]);
    const b = x.useMemo(
        () =>
          i === "top"
            ? { filter: "blur(10px)", opacity: 0, y: -50 }
            : { filter: "blur(10px)", opacity: 0, y: 50 },
        [i]
      ),
      g = x.useMemo(
        () => [
          { filter: "blur(5px)", opacity: 0.5, y: i === "top" ? 5 : -5 },
          { filter: "blur(0px)", opacity: 1, y: 0 },
        ],
        [i]
      ),
      m = s ?? b,
      y = l ?? g,
      S = y.length + 1,
      k = d * (S - 1),
      E = Array.from({ length: S }, (C, D) => (S === 1 ? 0 : D / (S - 1)));
    return p.jsx("p", {
      ref: w,
      className: `blur-text ${n} flex flex-wrap`,
      children: f.map((C, D) => {
        const M = LM(m, y),
          A = { duration: k, times: E, delay: (D * t) / 1e3, ease: u };
        return p.jsxs(
          $.span,
          {
            initial: m,
            animate: h ? M : m,
            transition: A,
            onAnimationComplete: D === f.length - 1 ? c : void 0,
            style: {
              display: "inline-block",
              willChange: "transform, filter, opacity",
            },
            children: [
              C === " " ? " " : C,
              r === "words" && D < f.length - 1 && " ",
            ],
          },
          D
        );
      }),
    });
  },
  IM = () => {
    const { setIsModalOpen: e } = Ll(),
      t = () => {
        var n;
        (n = document.getElementById("services")) == null ||
          n.scrollIntoView({ behavior: "smooth" });
      };
    return p.jsxs("section", {
      id: "hero",
      className: "pt-16 min-h-screen relative overflow-hidden",
      style: {
        background:
          "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)",
      },
      children: [
        p.jsx("div", {
          className: "absolute inset-0 z-0",
          children: p.jsxs("video", {
            className: "w-full h-full object-cover",
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            style: { filter: "brightness(0.7) contrast(1.1)" },
            children: [
              p.jsx("source", { src: jM, type: "video/mp4" }),
              "Your browser does not support the video tag.",
            ],
          }),
        }),
        p.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
          children: p.jsx("div", {
            className:
              "flex items-center justify-center min-h-[80vh] relative z-20",
            children: p.jsxs($.div, {
              className: "text-center space-y-8 max-w-4xl mx-auto",
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                p.jsxs("div", {
                  className:
                    "space-y-4 flex flex-col items-center justify-center",
                  children: [
                    p.jsxs("div", {
                      className: "flex flex-wrap justify-center",
                      children: [
                        p.jsx(Fo, {
                          text: "Trusted Healthcare,",
                          animateBy: "words",
                          direction: "top",
                          delay: 150,
                          stepDuration: 0.35,
                          className:
                            "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
                        }),
                        p.jsx(Fo, {
                          text: "Compassionate Care",
                          animateBy: "words",
                          direction: "top",
                          delay: 150,
                          stepDuration: 0.35,
                          className:
                            "text-4xl md:text-5xl lg:text-6xl font-bold text-[#38bdf8] leading-tight",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className:
                        "flex flex-wrap justify-center text-center w-full items-center",
                      children: [
                        p.jsx(Fo, {
                          text: "Providing exceptional medical services with 24/7 emergency care, experienced doctors, and",
                          animateBy: "words",
                          direction: "bottom",
                          delay: 100,
                          stepDuration: 0.25,
                          className:
                            "text-xl text-blue-100 leading-relaxed text-center mx-auto",
                        }),
                        p.jsx(Fo, {
                          text: "family-centered approach to your health and wellness.",
                          animateBy: "words",
                          direction: "bottom",
                          delay: 100,
                          stepDuration: 0.25,
                          className:
                            "text-xl text-blue-100 leading-relaxed text-center mx-auto",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs($.div, {
                  className: "flex flex-wrap justify-center gap-4 sm:gap-8",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.6 },
                  children: [
                    p.jsxs("div", {
                      className: "flex items-center space-x-2 text-blue-200",
                      children: [
                        p.jsx(rp, { className: "h-5 w-5" }),
                        p.jsx("span", {
                          className: "text-sm font-medium",
                          children: "24/7 Emergency",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "flex items-center space-x-2 text-blue-200",
                      children: [
                        p.jsx(ap, { className: "h-5 w-5" }),
                        p.jsx("span", {
                          className: "text-sm font-medium",
                          children: "Trusted Doctors",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "flex items-center space-x-2 text-blue-200",
                      children: [
                        p.jsx(pw, { className: "h-5 w-5" }),
                        p.jsx("span", {
                          className: "text-sm font-medium",
                          children: "Family-Centered",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs($.div, {
                  className:
                    "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.8 },
                  children: [
                    p.jsxs($.button, {
                      onClick: () => e(!0),
                      className:
                        "glassmorphism-button text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 hover:shadow-2xl",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: [
                        p.jsx(ld, { className: "h-5 w-5" }),
                        p.jsx("span", { children: "Book Appointment" }),
                      ],
                    }),
                    p.jsx($.button, {
                      onClick: t,
                      className:
                        "glassmorphism-button text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300 backdrop-blur-md bg-white/5 border border-white/30 hover:bg-white/15 hover:shadow-2xl",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: "Our Services",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
var op = {},
  ud = { exports: {} };
(function (e, t) {
  (function (n, r) {
    r(t);
  })(a1, function (n) {
    var r = function () {
        return (
          (r =
            Object.assign ||
            function (a) {
              for (var o, s = 1, l = arguments.length; s < l; s++)
                for (var u in (o = arguments[s]))
                  Object.prototype.hasOwnProperty.call(o, u) && (a[u] = o[u]);
              return a;
            }),
          r.apply(this, arguments)
        );
      },
      i = (function () {
        function a(o, s, l) {
          var u = this;
          (this.endVal = s),
            (this.options = l),
            (this.version = "2.9.0"),
            (this.defaults = {
              startVal: 0,
              decimalPlaces: 0,
              duration: 2,
              useEasing: !0,
              useGrouping: !0,
              useIndianSeparators: !1,
              smartEasingThreshold: 999,
              smartEasingAmount: 333,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: "",
              enableScrollSpy: !1,
              scrollSpyDelay: 200,
              scrollSpyOnce: !1,
            }),
            (this.finalEndVal = null),
            (this.useEasing = !0),
            (this.countDown = !1),
            (this.error = ""),
            (this.startVal = 0),
            (this.paused = !0),
            (this.once = !1),
            (this.count = function (c) {
              u.startTime || (u.startTime = c);
              var d = c - u.startTime;
              (u.remaining = u.duration - d),
                u.useEasing
                  ? u.countDown
                    ? (u.frameVal =
                        u.startVal -
                        u.easingFn(d, 0, u.startVal - u.endVal, u.duration))
                    : (u.frameVal = u.easingFn(
                        d,
                        u.startVal,
                        u.endVal - u.startVal,
                        u.duration
                      ))
                  : (u.frameVal =
                      u.startVal + (u.endVal - u.startVal) * (d / u.duration));
              var f = u.countDown
                ? u.frameVal < u.endVal
                : u.frameVal > u.endVal;
              (u.frameVal = f ? u.endVal : u.frameVal),
                (u.frameVal = Number(
                  u.frameVal.toFixed(u.options.decimalPlaces)
                )),
                u.printValue(u.frameVal),
                d < u.duration
                  ? (u.rAF = requestAnimationFrame(u.count))
                  : u.finalEndVal !== null
                  ? u.update(u.finalEndVal)
                  : u.options.onCompleteCallback &&
                    u.options.onCompleteCallback();
            }),
            (this.formatNumber = function (c) {
              var d,
                f,
                h,
                v,
                w = c < 0 ? "-" : "";
              d = Math.abs(c).toFixed(u.options.decimalPlaces);
              var b = (d += "").split(".");
              if (
                ((f = b[0]),
                (h = b.length > 1 ? u.options.decimal + b[1] : ""),
                u.options.useGrouping)
              ) {
                v = "";
                for (var g = 3, m = 0, y = 0, S = f.length; y < S; ++y)
                  u.options.useIndianSeparators &&
                    y === 4 &&
                    ((g = 2), (m = 1)),
                    y !== 0 && m % g == 0 && (v = u.options.separator + v),
                    m++,
                    (v = f[S - y - 1] + v);
                f = v;
              }
              return (
                u.options.numerals &&
                  u.options.numerals.length &&
                  ((f = f.replace(/[0-9]/g, function (k) {
                    return u.options.numerals[+k];
                  })),
                  (h = h.replace(/[0-9]/g, function (k) {
                    return u.options.numerals[+k];
                  }))),
                w + u.options.prefix + f + h + u.options.suffix
              );
            }),
            (this.easeOutExpo = function (c, d, f, h) {
              return (f * (1 - Math.pow(2, (-10 * c) / h)) * 1024) / 1023 + d;
            }),
            (this.options = r(r({}, this.defaults), l)),
            (this.formattingFn = this.options.formattingFn
              ? this.options.formattingFn
              : this.formatNumber),
            (this.easingFn = this.options.easingFn
              ? this.options.easingFn
              : this.easeOutExpo),
            (this.el = typeof o == "string" ? document.getElementById(o) : o),
            (s = s ?? this.parse(this.el.innerHTML)),
            (this.startVal = this.validateValue(this.options.startVal)),
            (this.frameVal = this.startVal),
            (this.endVal = this.validateValue(s)),
            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
            this.resetDuration(),
            (this.options.separator = String(this.options.separator)),
            (this.useEasing = this.options.useEasing),
            this.options.separator === "" && (this.options.useGrouping = !1),
            this.el
              ? this.printValue(this.startVal)
              : (this.error = "[CountUp] target is null or undefined"),
            typeof window < "u" &&
              this.options.enableScrollSpy &&
              (this.error
                ? console.error(this.error, o)
                : ((window.onScrollFns = window.onScrollFns || []),
                  window.onScrollFns.push(function () {
                    return u.handleScroll(u);
                  }),
                  (window.onscroll = function () {
                    window.onScrollFns.forEach(function (c) {
                      return c();
                    });
                  }),
                  this.handleScroll(this)));
        }
        return (
          (a.prototype.handleScroll = function (o) {
            if (o && window && !o.once) {
              var s = window.innerHeight + window.scrollY,
                l = o.el.getBoundingClientRect(),
                u = l.top + window.pageYOffset,
                c = l.top + l.height + window.pageYOffset;
              c < s && c > window.scrollY && o.paused
                ? ((o.paused = !1),
                  setTimeout(function () {
                    return o.start();
                  }, o.options.scrollSpyDelay),
                  o.options.scrollSpyOnce && (o.once = !0))
                : (window.scrollY > c || u > s) && !o.paused && o.reset();
            }
          }),
          (a.prototype.determineDirectionAndSmartEasing = function () {
            var o = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > o;
            var s = o - this.startVal;
            if (
              Math.abs(s) > this.options.smartEasingThreshold &&
              this.options.useEasing
            ) {
              this.finalEndVal = o;
              var l = this.countDown ? 1 : -1;
              (this.endVal = o + l * this.options.smartEasingAmount),
                (this.duration = this.duration / 2);
            } else (this.endVal = o), (this.finalEndVal = null);
            this.finalEndVal !== null
              ? (this.useEasing = !1)
              : (this.useEasing = this.options.useEasing);
          }),
          (a.prototype.start = function (o) {
            this.error ||
              (this.options.onStartCallback && this.options.onStartCallback(),
              o && (this.options.onCompleteCallback = o),
              this.duration > 0
                ? (this.determineDirectionAndSmartEasing(),
                  (this.paused = !1),
                  (this.rAF = requestAnimationFrame(this.count)))
                : this.printValue(this.endVal));
          }),
          (a.prototype.pauseResume = function () {
            this.paused
              ? ((this.startTime = null),
                (this.duration = this.remaining),
                (this.startVal = this.frameVal),
                this.determineDirectionAndSmartEasing(),
                (this.rAF = requestAnimationFrame(this.count)))
              : cancelAnimationFrame(this.rAF),
              (this.paused = !this.paused);
          }),
          (a.prototype.reset = function () {
            cancelAnimationFrame(this.rAF),
              (this.paused = !0),
              this.resetDuration(),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              this.printValue(this.startVal);
          }),
          (a.prototype.update = function (o) {
            cancelAnimationFrame(this.rAF),
              (this.startTime = null),
              (this.endVal = this.validateValue(o)),
              this.endVal !== this.frameVal &&
                ((this.startVal = this.frameVal),
                this.finalEndVal == null && this.resetDuration(),
                (this.finalEndVal = null),
                this.determineDirectionAndSmartEasing(),
                (this.rAF = requestAnimationFrame(this.count)));
          }),
          (a.prototype.printValue = function (o) {
            var s;
            if (this.el) {
              var l = this.formattingFn(o);
              !((s = this.options.plugin) === null || s === void 0) && s.render
                ? this.options.plugin.render(this.el, l)
                : this.el.tagName === "INPUT"
                ? (this.el.value = l)
                : this.el.tagName === "text" || this.el.tagName === "tspan"
                ? (this.el.textContent = l)
                : (this.el.innerHTML = l);
            }
          }),
          (a.prototype.ensureNumber = function (o) {
            return typeof o == "number" && !isNaN(o);
          }),
          (a.prototype.validateValue = function (o) {
            var s = Number(o);
            return this.ensureNumber(s)
              ? s
              : ((this.error = "[CountUp] invalid start or end value: ".concat(
                  o
                )),
                null);
          }),
          (a.prototype.resetDuration = function () {
            (this.startTime = null),
              (this.duration = 1e3 * Number(this.options.duration)),
              (this.remaining = this.duration);
          }),
          (a.prototype.parse = function (o) {
            var s = function (d) {
                return d.replace(/([.,'  ])/g, "\\$1");
              },
              l = s(this.options.separator),
              u = s(this.options.decimal),
              c = o
                .replace(new RegExp(l, "g"), "")
                .replace(new RegExp(u, "g"), ".");
            return parseFloat(c);
          }),
          a
        );
      })();
    n.CountUp = i;
  });
})(ud, ud.exports);
var FM = ud.exports;
Object.defineProperty(op, "__esModule", { value: !0 });
var je = x,
  VM = FM;
function BM(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      l = !0,
      u = !1;
    try {
      if (((a = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          l = !0
        );
    } catch (c) {
      (u = !0), (i = c);
    } finally {
      try {
        if (!l && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function ag(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ag(Object(n), !0).forEach(function (r) {
          HM(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ag(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function YM(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WM(e) {
  var t = YM(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function HM(e, t, n) {
  return (
    (t = WM(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cd() {
  return (
    (cd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cd.apply(this, arguments)
  );
}
function zM(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hw(e, t) {
  if (e == null) return {};
  var n = zM(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function $M(e, t) {
  return UM(e) || BM(e, t) || KM(e, t) || QM();
}
function UM(e) {
  if (Array.isArray(e)) return e;
}
function KM(e, t) {
  if (e) {
    if (typeof e == "string") return og(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return og(e, t);
  }
}
function og(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function QM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var GM =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? je.useLayoutEffect
    : je.useEffect;
function At(e) {
  var t = je.useRef(e);
  return (
    GM(function () {
      t.current = e;
    }),
    je.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var qM = function (t, n) {
    var r = n.decimal,
      i = n.decimals,
      a = n.duration,
      o = n.easingFn,
      s = n.end,
      l = n.formattingFn,
      u = n.numerals,
      c = n.prefix,
      d = n.separator,
      f = n.start,
      h = n.suffix,
      v = n.useEasing,
      w = n.useGrouping,
      b = n.useIndianSeparators,
      g = n.enableScrollSpy,
      m = n.scrollSpyDelay,
      y = n.scrollSpyOnce,
      S = n.plugin;
    return new VM.CountUp(t, s, {
      startVal: f,
      duration: a,
      decimal: r,
      decimalPlaces: i,
      easingFn: o,
      formattingFn: l,
      numerals: u,
      separator: d,
      prefix: c,
      suffix: h,
      plugin: S,
      useEasing: v,
      useIndianSeparators: b,
      useGrouping: w,
      enableScrollSpy: g,
      scrollSpyDelay: m,
      scrollSpyOnce: y,
    });
  },
  XM = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate",
  ],
  ZM = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
  },
  mw = function (t) {
    var n = Object.fromEntries(
        Object.entries(t).filter(function (M) {
          var A = $M(M, 2),
            B = A[1];
          return B !== void 0;
        })
      ),
      r = je.useMemo(
        function () {
          return Zs(Zs({}, ZM), n);
        },
        [t]
      ),
      i = r.ref,
      a = r.startOnMount,
      o = r.enableReinitialize,
      s = r.delay,
      l = r.onEnd,
      u = r.onStart,
      c = r.onPauseResume,
      d = r.onReset,
      f = r.onUpdate,
      h = hw(r, XM),
      v = je.useRef(),
      w = je.useRef(),
      b = je.useRef(!1),
      g = At(function () {
        return qM(typeof i == "string" ? i : i.current, h);
      }),
      m = At(function (M) {
        var A = v.current;
        if (A && !M) return A;
        var B = g();
        return (v.current = B), B;
      }),
      y = At(function () {
        var M = function () {
          return m(!0).start(function () {
            l == null || l({ pauseResume: S, reset: k, start: C, update: E });
          });
        };
        s && s > 0 ? (w.current = setTimeout(M, s * 1e3)) : M(),
          u == null || u({ pauseResume: S, reset: k, update: E });
      }),
      S = At(function () {
        m().pauseResume(), c == null || c({ reset: k, start: C, update: E });
      }),
      k = At(function () {
        m().el &&
          (w.current && clearTimeout(w.current),
          m().reset(),
          d == null || d({ pauseResume: S, start: C, update: E }));
      }),
      E = At(function (M) {
        m().update(M), f == null || f({ pauseResume: S, reset: k, start: C });
      }),
      C = At(function () {
        k(), y();
      }),
      D = At(function (M) {
        a && (M && k(), y());
      });
    return (
      je.useEffect(
        function () {
          b.current ? o && D(!0) : ((b.current = !0), D());
        },
        [
          o,
          b,
          D,
          s,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.formattingFn,
        ]
      ),
      je.useEffect(
        function () {
          return function () {
            k();
          };
        },
        [k]
      ),
      { start: C, pauseResume: S, reset: k, update: E, getCountUp: m }
    );
  },
  JM = ["className", "redraw", "containerProps", "children", "style"],
  eT = function (t) {
    var n = t.className,
      r = t.redraw,
      i = t.containerProps,
      a = t.children,
      o = t.style,
      s = hw(t, JM),
      l = je.useRef(null),
      u = je.useRef(!1),
      c = mw(
        Zs(
          Zs({}, s),
          {},
          {
            ref: l,
            startOnMount: typeof a != "function" || t.delay === 0,
            enableReinitialize: !1,
          }
        )
      ),
      d = c.start,
      f = c.reset,
      h = c.update,
      v = c.pauseResume,
      w = c.getCountUp,
      b = At(function () {
        d();
      }),
      g = At(function (S) {
        t.preserveValue || f(), h(S);
      }),
      m = At(function () {
        if (
          typeof t.children == "function" &&
          !(l.current instanceof Element)
        ) {
          console.error(
            `Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`
          );
          return;
        }
        w();
      });
    je.useEffect(
      function () {
        m();
      },
      [m]
    ),
      je.useEffect(
        function () {
          u.current && g(t.end);
        },
        [t.end, g]
      );
    var y = r && t;
    return (
      je.useEffect(
        function () {
          r && u.current && b();
        },
        [b, r, y]
      ),
      je.useEffect(
        function () {
          !r && u.current && b();
        },
        [
          b,
          r,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.className,
          t.formattingFn,
        ]
      ),
      je.useEffect(function () {
        u.current = !0;
      }, []),
      typeof a == "function"
        ? a({
            countUpRef: l,
            start: d,
            reset: f,
            update: h,
            pauseResume: v,
            getCountUp: w,
          })
        : je.createElement(
            "span",
            cd({ className: n, ref: l, style: o }, i),
            typeof t.start < "u" ? w().formattingFn(t.start) : ""
          )
    );
  },
  tT = (op.default = eT);
op.useCountUp = mw;
var dd = new Map(),
  Vo = new WeakMap(),
  sg = 0,
  nT = void 0;
function rT(e) {
  return e
    ? (Vo.has(e) || ((sg += 1), Vo.set(e, sg.toString())), Vo.get(e))
    : "0";
}
function iT(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? rT(e.root) : e[t]}`)
    .toString();
}
function aT(e) {
  const t = iT(e);
  let n = dd.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const a = new IntersectionObserver((o) => {
      o.forEach((s) => {
        var l;
        const u = s.isIntersecting && i.some((c) => s.intersectionRatio >= c);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u),
          (l = r.get(s.target)) == null ||
            l.forEach((c) => {
              c(u, s);
            });
      });
    }, e);
    (i =
      a.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: a, elements: r }),
      dd.set(t, n);
  }
  return n;
}
function oT(e, t, n = {}, r = nT) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: a, elements: o } = aT(n),
    s = o.get(e) || [];
  return (
    o.has(e) || o.set(e, s),
    s.push(t),
    a.observe(e),
    function () {
      s.splice(s.indexOf(t), 1),
        s.length === 0 && (o.delete(e), a.unobserve(e)),
        o.size === 0 && (a.disconnect(), dd.delete(i));
    }
  );
}
function gw({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: a,
  skip: o,
  initialInView: s,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [d, f] = x.useState(null),
    h = x.useRef(u),
    [v, w] = x.useState({ inView: !!s, entry: void 0 });
  (h.current = u),
    x.useEffect(() => {
      if (o || !d) return;
      let y;
      return (
        (y = oT(
          d,
          (S, k) => {
            w({ inView: S, entry: k }),
              h.current && h.current(S, k),
              k.isIntersecting && a && y && (y(), (y = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          l
        )),
        () => {
          y && y();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, d, i, r, a, o, n, l, t]);
  const b = (c = v.entry) == null ? void 0 : c.target,
    g = x.useRef(void 0);
  !d &&
    b &&
    !a &&
    !o &&
    g.current !== b &&
    ((g.current = b), w({ inView: !!s, entry: void 0 }));
  const m = [f, v.inView, v.entry];
  return (m.ref = m[0]), (m.inView = m[1]), (m.entry = m[2]), m;
}
const sT = _.memo(() => {
    const [e, t] = gw({ triggerOnce: !0, threshold: 0.1 }),
      n = x.useMemo(
        () => [
          {
            icon: pw,
            number: 150561,
            suffix: "+",
            label: "Patients Treated",
            color: "from-blue-500 to-cyan-500",
          },
          {
            icon: ow,
            number: 25,
            suffix: "+",
            label: "Years of Experience",
            color: "from-emerald-500 to-teal-500",
          },
          {
            icon: qs,
            number: 15,
            suffix: "+",
            label: "Doctors Onboard",
            color: "from-rose-500 to-pink-500",
          },
          {
            icon: sd,
            number: 128311,
            suffix: "+",
            label: "Surgeries Performed",
            color: "from-violet-500 to-purple-500",
          },
        ],
        []
      );
    return p.jsxs("section", {
      className:
        "py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA] relative overflow-hidden",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 opacity-10",
          children: p.jsx("div", {
            className: "absolute inset-0",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            },
          }),
        }),
        p.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [
            p.jsxs($.div, {
              ref: e,
              className: "text-center mb-16",
              initial: { opacity: 0, y: 30 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              children: [
                p.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-white mb-4 font-serif",
                  style: { fontFamily: "'Cormorant Garamond', serif" },
                  children: "Trusted by Thousands",
                }),
                p.jsx("p", {
                  className:
                    "text-xl text-blue-100 max-w-2xl mx-auto font-serif",
                  style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                  },
                  children:
                    "Our commitment to excellence is reflected in the numbers that matter most",
                }),
              ],
            }),
            p.jsx("div", {
              className:
                "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",
              children: n.map((r, i) =>
                p.jsx(
                  $.div,
                  {
                    className: "text-center",
                    initial: { opacity: 0, y: 50 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8, delay: i * 0.2 },
                    children: p.jsxs("div", {
                      className: "relative group",
                      children: [
                        p.jsx("div", {
                          className: `absolute inset-0 bg-gradient-to-br ${r.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10 will-change-auto`,
                        }),
                        p.jsxs("div", {
                          className:
                            "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out transform-gpu will-change-transform hover:bg-white/15 hover:scale-105 hover:shadow-2xl",
                          children: [
                            p.jsx("div", {
                              className: `w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center transition-transform duration-300 ease-out transform-gpu will-change-transform group-hover:rotate-6`,
                              children: p.jsx(r.icon, {
                                className:
                                  "h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white",
                              }),
                            }),
                            p.jsxs("div", {
                              className:
                                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif",
                              style: {
                                fontFamily: "'Cormorant Garamond', serif",
                              },
                              children: [
                                t &&
                                  p.jsx(tT, {
                                    end: r.number,
                                    duration: 2.5,
                                    delay: i * 0.2,
                                    separator: ",",
                                  }),
                                p.jsx("span", {
                                  className: "text-blue-200",
                                  children: r.suffix,
                                }),
                              ],
                            }),
                            p.jsx("p", {
                              className:
                                "text-blue-100 font-medium text-sm sm:text-base lg:text-lg font-serif",
                              style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 500,
                              },
                              children: r.label,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  i
                )
              ),
            }),
            p.jsx("div", {
              className: "mt-8 sm:mt-12 lg:mt-16 text-center",
              children: p.jsx($.p, {
                className: "text-blue-200 text-sm sm:text-base font-serif",
                style: {
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                },
                initial: { opacity: 0 },
                animate: t ? { opacity: 1 } : {},
                transition: { duration: 0.8, delay: 1 },
                children:
                  "Excellence in healthcare, measured by trust and results",
              }),
            }),
          ],
        }),
      ],
    });
  }),
  lT = () => {
    const [e, t] = gw({ triggerOnce: !0, threshold: 0.1 }),
      n = [
        {
          icon: rp,
          title: "24/7 Support",
          description: "Round-the-clock emergency care and support",
        },
        {
          icon: ow,
          title: "Skilled Staff",
          description: "Highly qualified and experienced medical professionals",
        },
        {
          icon: ap,
          title: "Modern Equipment",
          description: "State-of-the-art medical technology and facilities",
        },
        {
          icon: qs,
          title: "Trustworthy Care",
          description: "Compassionate and reliable healthcare services",
        },
      ];
    return p.jsx("section", {
      id: "about",
      className: "py-20 bg-white",
      children: p.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: p.jsxs($.div, {
          ref: e,
          className: "grid lg:grid-cols-2 gap-12 items-center",
          initial: { opacity: 0 },
          animate: t ? { opacity: 1 } : {},
          transition: { duration: 0.6 },
          children: [
            p.jsxs($.div, {
              className: "relative",
              initial: { opacity: 0, x: -30 },
              animate: t ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.6, delay: 0.2 },
              children: [
                p.jsxs("div", {
                  className: "relative overflow-hidden rounded-3xl",
                  children: [
                    p.jsx("img", {
                      src: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
                      alt: "Medical Care",
                      className: "w-full h-96 object-cover",
                    }),
                    p.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-tr from-[#007BBA]/10 to-transparent",
                    }),
                  ],
                }),
                p.jsx($.div, {
                  className:
                    "absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6",
                  initial: { opacity: 0, scale: 0.8 },
                  animate: t ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.4, delay: 0.4 },
                  children: p.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 text-center",
                    children: [
                      p.jsxs("div", {
                        children: [
                          p.jsx("div", {
                            className: "text-2xl font-bold text-[#007BBA]",
                            children: "15+",
                          }),
                          p.jsx("div", {
                            className: "text-sm text-gray-600",
                            children: "Years",
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        children: [
                          p.jsx("div", {
                            className: "text-2xl font-bold text-[#007BBA]",
                            children: "50+",
                          }),
                          p.jsx("div", {
                            className: "text-sm text-gray-600",
                            children: "Doctors",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            p.jsxs($.div, {
              className: "space-y-8",
              initial: { opacity: 0, x: 30 },
              animate: t ? { opacity: 1, x: 0 } : {},
              transition: { duration: 0.6, delay: 0.3 },
              children: [
                p.jsxs($.div, {
                  className: "space-y-4",
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.5, delay: 0.4 },
                  children: [
                    p.jsx("h2", {
                      className:
                        "text-3xl md:text-4xl font-bold text-[#004F74]",
                      children: "Caring for You Like Family",
                    }),
                    p.jsx("p", {
                      className: "text-lg text-gray-600 leading-relaxed",
                      children:
                        "At Al Nabi Hospital, we believe that exceptional healthcare goes beyond medical expertise. We combine cutting-edge technology with compassionate care to ensure every patient receives the personalized attention they deserve.",
                    }),
                    p.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children:
                        "Our commitment to excellence has made us a trusted healthcare provider in the community, serving families with dedication and integrity for over 15 years.",
                    }),
                  ],
                }),
                p.jsx($.div, {
                  className: "grid sm:grid-cols-2 gap-6",
                  initial: { opacity: 0, y: 30 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.6, delay: 0.5 },
                  children: n.map((r, i) =>
                    p.jsxs(
                      $.div,
                      {
                        className: "flex items-start space-x-3",
                        initial: { opacity: 0, y: 20 },
                        animate: t ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 0.4, delay: 0.6 + i * 0.1 },
                        children: [
                          p.jsx("div", {
                            className: "flex-shrink-0",
                            children: p.jsx("div", {
                              className:
                                "w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center group-hover:bg-[#007BBA] transition-colors duration-300",
                              children: p.jsx(r.icon, {
                                className: "h-6 w-6 text-[#007BBA]",
                              }),
                            }),
                          }),
                          p.jsxs("div", {
                            children: [
                              p.jsx("h3", {
                                className: "font-semibold text-[#004F74] mb-1",
                                children: r.title,
                              }),
                              p.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: r.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  uT = () => {
    const e = gf(),
      [t, n] = x.useState(null),
      [r, i] = x.useState(!1),
      a = [
        {
          id: "cardiology",
          icon: qs,
          title: "Cardiology",
          description:
            "Advanced heart care with cutting-edge diagnostics and treatments.",
        },
        {
          id: "neurology",
          icon: ng,
          title: "Neurology",
          description: "Expert care for brain and nervous system disorders.",
        },
        {
          id: "pediatrics",
          icon: gM,
          title: "Pediatrics",
          description:
            "Specialized care for infants, children, and adolescents.",
        },
        {
          id: "ophthalmology",
          icon: bM,
          title: "Ophthalmology",
          description:
            "Comprehensive eye care, including surgery and vision correction.",
        },
        {
          id: "orthopedics",
          icon: tg,
          title: "Orthopedics",
          description:
            "Advanced treatment for bone, joint, and muscle conditions.",
        },
        {
          id: "general-medicine",
          icon: TM,
          title: "General Medicine",
          description:
            "Primary care for routine check-ups and chronic conditions.",
        },
        {
          id: "emergency-medicine",
          icon: mM,
          title: "Emergency Medicine",
          description: "24/7 urgent care for life-threatening conditions.",
        },
        {
          id: "general-surgery",
          icon: PM,
          title: "General Surgery",
          description: "Expert surgical care for a wide range of conditions.",
        },
        {
          id: "obstetrics-gynecology",
          icon: qs,
          title: "Obstetrics & Gynecology",
          description: "Comprehensive women’s health and maternity care.",
        },
        {
          id: "ent",
          icon: wM,
          title: "ENT (Ear, Nose, Throat)",
          description: "Specialized care for ear, nose, and throat disorders.",
        },
        {
          id: "urology",
          icon: Zi,
          title: "Urology",
          description:
            "Treatment for urinary tract and male reproductive health.",
        },
        {
          id: "plastic-reconstructive-surgery",
          icon: ap,
          title: "Plastic & Reconstructive Surgery",
          description: "Cosmetic and reconstructive procedures with precision.",
        },
        {
          id: "dermatology",
          icon: fw,
          title: "Dermatology",
          description: "Skin health solutions for medical and cosmetic needs.",
        },
        {
          id: "psychiatry",
          icon: ng,
          title: "Psychiatry",
          description:
            "Mental health care with compassionate, personalized treatment.",
        },
        {
          id: "pulmonology",
          icon: sd,
          title: "Pulmonology",
          description: "Care for respiratory conditions and lung health.",
        },
        {
          id: "gastroenterology",
          icon: Zi,
          title: "Gastroenterology",
          description: "Diagnosis and treatment of digestive system disorders.",
        },
        {
          id: "nephrology",
          icon: Zi,
          title: "Nephrology",
          description:
            "Kidney care, including dialysis and transplant support.",
        },
        {
          id: "endocrinology",
          icon: Zi,
          title: "Endocrinology",
          description: "Management of hormonal and metabolic disorders.",
        },
        {
          id: "rheumatology",
          icon: tg,
          title: "Rheumatology",
          description: "Treatment for arthritis and autoimmune diseases.",
        },
        {
          id: "infectious-diseases",
          icon: NM,
          title: "Infectious Diseases",
          description: "Expert care for infections and preventive strategies.",
        },
        {
          id: "anesthesiology-pain-management",
          icon: Zi,
          title: "Anesthesiology & Pain Management",
          description: "Advanced pain relief and anesthesia services.",
        },
        {
          id: "physiotherapy",
          icon: sd,
          title: "Physiotherapy",
          description: "Rehabilitation and mobility enhancement therapies.",
        },
        {
          id: "radiology-imaging",
          icon: EM,
          title: "Radiology & Imaging",
          description: "State-of-the-art diagnostic imaging services.",
        },
        {
          id: "pathology-laboratory",
          icon: DM,
          title: "Pathology & Laboratory",
          description: "Accurate diagnostics through advanced lab testing.",
        },
      ],
      o = a.slice(0, 6),
      s = r ? a : o,
      l = (u) => {
        if (!a.some((c) => c.id === u)) {
          console.error(`Invalid service ID: ${u}`);
          return;
        }
        n(u);
        try {
          e(`/services/${u}`, { replace: !1, state: { fromServices: !0 } });
          const c = setTimeout(() => {
            n(null);
          }, 500);
          return () => clearTimeout(c);
        } catch (c) {
          console.error("Navigation error:", c), n(null);
        }
      };
    return p.jsx("section", {
      id: "services",
      className: "py-20 bg-gradient-to-b from-[#F6FAFD] to-white",
      children: p.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          p.jsxs("div", {
            className: "text-center mb-16",
            children: [
              p.jsx("h2", {
                className:
                  "text-4xl md:text-5xl font-bold text-[#004F74] mb-4 tracking-tight",
                children: "Our Medical Specializations",
              }),
              p.jsx("p", {
                className:
                  "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed",
                children:
                  "Discover our wide range of medical services, delivered by expert specialists using state-of-the-art technology to ensure the highest quality care.",
              }),
            ],
          }),
          p.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: p.jsx(dn, {
              children: s.map((u, c) =>
                p.jsxs(
                  $.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.5, delay: c * 0.1 },
                    className:
                      "bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 group border border-gray-100",
                    children: [
                      p.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ease-out",
                        children: p.jsx(u.icon, {
                          className: "h-8 w-8 text-white",
                        }),
                      }),
                      p.jsx("h3", {
                        className: "text-xl font-semibold text-[#004F74] mb-3",
                        children: u.title,
                      }),
                      p.jsx("p", {
                        className: "text-gray-600 leading-relaxed mb-4 text-sm",
                        children: u.description,
                      }),
                      p.jsxs("button", {
                        onClick: () => l(u.id),
                        disabled: t === u.id,
                        "aria-label": `Learn more about ${u.title}`,
                        className: `text-[#007BBA] font-medium hover:text-[#004F74] transition-colors duration-200 ease-out flex items-center space-x-2 group-hover:translate-x-2 transition-transform ${
                          t === u.id ? "opacity-50 cursor-not-allowed" : ""
                        }`,
                        children: [
                          p.jsx("span", {
                            children: t === u.id ? "Loading..." : "Learn More",
                          }),
                          p.jsx("span", {
                            className: `transition-transform duration-200 ${
                              t === u.id ? "animate-spin" : ""
                            }`,
                            children: t === u.id ? "⟳" : "→",
                          }),
                        ],
                      }),
                    ],
                  },
                  u.id
                )
              ),
            }),
          }),
          !r &&
            p.jsx("div", {
              className: "text-center mt-12",
              children: p.jsx($.button, {
                onClick: () => i(!0),
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className:
                  "bg-[#007BBA] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#004F74] transition-colors duration-300 shadow-md",
                children: "More Services",
              }),
            }),
        ],
      }),
    });
  },
  cT = "/assets/dr-jilani-BbfM0ePG.jpg",
  dT = () => {
    const [e, t] = x.useState("main"),
      [n, r] = x.useState(4),
      i = {
        main: [
          {
            name: "Dr. Jilani Awati",
            specialization: "MS General Surgery & Laparoscopic Surgeon",
            image: cT,
            availability: "Available",
            department: "surgery",
          },
          {
            name: "Dr. Osama Awati",
            specialization: "MBBS",
            image:
              "https://images.pexels.com/photos/6749761/pexels-photo-6749761.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "general",
          },
        ],
        visiting: [
          {
            name: "Dr. Bilal Abdullah",
            specialization: "MD General Medicine",
            image:
              "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "general-medicine",
          },
          {
            name: "Dr. Azmat",
            specialization: "Plastic Surgeon",
            image:
              "https://images.pexels.com/photos/6749768/pexels-photo-6749768.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "plastic-surgery",
          },
          {
            name: "Dr. Asma Jahagirdar",
            specialization: "DA Anaesthesia",
            image:
              "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "anaesthesia",
          },
          {
            name: "Dr. Tahir",
            specialization: "DA Anaesthesia",
            image:
              "https://images.pexels.com/photos/6749763/pexels-photo-6749763.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "anaesthesia",
          },
          {
            name: "Dr. Nishikant Gujar",
            specialization: "MS General Surgery",
            image:
              "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "surgery",
          },
          {
            name: "Dr. Meenal Aggarwal",
            specialization: "MD Anaesthesia",
            image:
              "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "anaesthesia",
          },
          {
            name: "Dr. Swaleha",
            specialization: "MS Gynaecologist",
            image:
              "https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "gynaecology",
          },
          {
            name: "Dr. Surendra Aggarwal",
            specialization: "MCh Pediatric Surgeon",
            image:
              "https://images.pexels.com/photos/6749765/pexels-photo-6749765.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "pediatrics",
          },
          {
            name: "Dr. Rizwan",
            specialization: "MD Pediatrics",
            image:
              "https://images.pexels.com/photos/6749764/pexels-photo-6749764.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "pediatrics",
          },
          {
            name: "Dr. Yitendra Nayak",
            specialization: "MCh Neurosurgery",
            image:
              "https://images.pexels.com/photos/6749766/pexels-photo-6749766.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "neurosurgery",
          },
          {
            name: "Dr. Soumya",
            specialization: "MD Psychiatrist",
            image:
              "https://images.pexels.com/photos/6749767/pexels-photo-6749767.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "psychiatry",
          },
          {
            name: "Dr. Ravindra Kulkarni",
            specialization: "MS Ortho & Spine Surgeon",
            image:
              "https://images.pexels.com/photos/6749768/pexels-photo-6749768.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Available",
            department: "orthopedics",
          },
        ],
        management: [
          {
            name: "Umarfarook Gundagi",
            specialization: "Manager",
            image:
              "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Office Hours",
            department: "management",
          },
          {
            name: "Abdul Razak Aliyabadi",
            specialization: "Administrator",
            image:
              "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Office Hours",
            department: "management",
          },
          {
            name: "Azlan Awati",
            specialization: "Administrator",
            image:
              "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
            availability: "Office Hours",
            department: "management",
          },
        ],
      },
      a = [
        { id: "main", label: "Main Doctors" },
        { id: "visiting", label: "Visiting Doctors" },
        { id: "management", label: "Management" },
      ],
      o = i[e] || [],
      s = o.slice(0, n),
      l = () => {
        r((c) => c + 3);
      },
      u = (c) => {
        t(c), r(3);
      };
    return p.jsx("section", {
      id: "doctors",
      className: "py-20 bg-white",
      children: p.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          p.jsxs("div", {
            className: "text-center mb-12",
            children: [
              p.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-[#004F74] mb-4",
                children: "Our Medical Team",
              }),
              p.jsx("p", {
                className: "text-lg text-gray-600 max-w-2xl mx-auto",
                children:
                  "Meet our dedicated team of healthcare professionals committed to providing exceptional care.",
              }),
            ],
          }),
          p.jsx("div", {
            className: "flex justify-center mb-12",
            children: p.jsx("div", {
              className: "bg-[#F6FAFD] p-2 rounded-full",
              children: a.map((c) =>
                p.jsx(
                  "button",
                  {
                    onClick: () => u(c.id),
                    className: `px-6 py-3 rounded-full transition-all duration-300 ${
                      e === c.id
                        ? "bg-[#007BBA] text-white"
                        : "text-gray-600 hover:text-[#007BBA]"
                    }`,
                    children: c.label,
                  },
                  c.id
                )
              ),
            }),
          }),
          p.jsx("div", {
            className: "flex flex-wrap justify-center gap-8",
            children: s.map((c, d) =>
              p.jsxs(
                "div",
                {
                  className:
                    "w-72 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                  children: [
                    p.jsxs("div", {
                      className: "relative",
                      children: [
                        p.jsx("img", {
                          src: c.image,
                          alt: c.name,
                          className: "w-full h-64 object-cover",
                        }),
                        p.jsx("div", {
                          className: `absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                            c.availability === "Available"
                              ? "bg-green-100 text-green-800"
                              : c.availability === "Busy"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`,
                          children: c.availability,
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "p-6",
                      children: [
                        p.jsx("h3", {
                          className:
                            "text-xl font-semibold text-[#004F74] mb-2",
                          children: c.name,
                        }),
                        p.jsx("p", {
                          className: "text-[#007BBA] mb-4",
                          children: c.specialization,
                        }),
                        p.jsxs("div", {
                          className:
                            "flex items-center space-x-2 text-gray-600 mb-4",
                          children: [
                            p.jsx(ip, { className: "h-4 w-4" }),
                            p.jsx("span", {
                              className: "text-sm",
                              children: "Al Nabi Hospital",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                d
              )
            ),
          }),
          n < o.length &&
            p.jsx("div", {
              className: "flex justify-center mt-8",
              children: p.jsx("button", {
                onClick: l,
                className:
                  "px-6 py-2 bg-[#007BBA] text-white rounded-full hover:bg-[#005f8c] transition-all duration-300",
                children: "See More",
              }),
            }),
        ],
      }),
    });
  },
  fT = () => {
    const [e, t] = x.useState(0),
      n = [
        {
          name: "Sarah Ahmed",
          location: "Bijapur, IN",
          condition: "Cardiac Surgery",
          rating: 5,
          quote:
            "The cardiac team at Al Nabi Hospital saved my life. Dr. Ahmed and his team were not only highly skilled but also incredibly compassionate throughout my entire treatment journey.",
          image:
            "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
          verified: !0,
        },
        {
          name: "Mohammed Hassan",
          location: "Bijapur, IN",
          condition: "Neurology Treatment",
          rating: 5,
          quote:
            "Outstanding neurological care with cutting-edge technology. The doctors explained everything clearly and made me feel comfortable during a very difficult time.",
          image:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
          verified: !0,
        },
        {
          name: "Fatima Ali",
          location: "Bijapur, IN",
          condition: "Pediatric Care",
          rating: 5,
          quote:
            "The pediatric department is absolutely wonderful! My children actually look forward to their visits. The doctors and nurses make every child feel special and safe.",
          image:
            "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
          verified: !0,
        },
        {
          name: "Omar Malik",
          location: "Bijapur, IN",
          condition: "Emergency Care",
          rating: 5,
          quote:
            "When my father had a heart attack at 2 AM, Al Nabi Hospital's emergency team was ready and waiting. Their quick response and professional care saved his life.",
          image:
            "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150",
          verified: !0,
        },
      ],
      r = () => {
        t((o) => (o + 1) % n.length);
      },
      i = () => {
        t((o) => (o - 1 + n.length) % n.length);
      },
      a = (o) =>
        Array.from({ length: 5 }, (s, l) =>
          p.jsx(
            dw,
            {
              className: `h-5 w-5 ${
                l < o ? "text-amber-400 fill-current" : "text-gray-200"
              }`,
            },
            l
          )
        );
    return p.jsxs("section", {
      id: "testimonials",
      className:
        "py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 opacity-10",
          children: p.jsx("div", {
            className: "absolute inset-0",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007BBA' fill-opacity='0.2'%3E%3Cpath d='M30 30c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5 6 13.5 13.5 13.5 13.5-6 13.5-13.5zm15 0c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5 6 13.5 13.5 13.5 13.5-6 13.5-13.5z'/%3E%3C/g%3E%3C/svg%3E")`,
            },
          }),
        }),
        p.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            p.jsxs($.div, {
              className: "text-center mb-12 md:mb-16",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: [
                p.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-extrabold text-gray-900 mb-4",
                  children: "Voices of Our Patients",
                }),
                p.jsx("p", {
                  className: "text-lg text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Hear from those who have experienced exceptional care at Al Nabi Hospital.",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "max-w-4xl mx-auto relative",
              children: [
                p.jsx("button", {
                  onClick: i,
                  className:
                    "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white shadow-lg rounded-full p-3 bg-gray-50",
                  children: p.jsx(xM, { className: "h-5 w-5 text-blue-600" }),
                }),
                p.jsx("button", {
                  onClick: r,
                  className:
                    "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white shadow-lg rounded-full p-3 bg-gray-50",
                  children: p.jsx(sw, { className: "h-5 w-5 text-blue-600" }),
                }),
                p.jsx(dn, {
                  mode: "wait",
                  children: p.jsx(
                    $.div,
                    {
                      initial: { opacity: 0, x: 50 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -50 },
                      transition: { duration: 0.4 },
                      className: "relative",
                      children: p.jsxs("div", {
                        className:
                          "bg-white rounded-2xl shadow-xl p-6 md:p-8 relative border border-gray-100 hover:shadow-2xl transition-shadow duration-300",
                        children: [
                          p.jsx("div", {
                            className: "absolute top-4 left-4",
                            children: p.jsx("div", {
                              className:
                                "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",
                              children: p.jsx(CM, {
                                className: "h-5 w-5 text-blue-600",
                              }),
                            }),
                          }),
                          p.jsxs("div", {
                            className:
                              "grid md:grid-cols-3 gap-6 items-start pt-6",
                            children: [
                              p.jsxs("div", {
                                className: "md:col-span-2 space-y-5",
                                children: [
                                  p.jsxs("p", {
                                    className:
                                      "text-lg text-gray-700 leading-relaxed font-medium",
                                    children: ['"', n[e].quote, '"'],
                                  }),
                                  p.jsxs("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                      a(n[e].rating),
                                      n[e].verified &&
                                        p.jsx("span", {
                                          className:
                                            "bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full",
                                          children: "Verified Patient",
                                        }),
                                    ],
                                  }),
                                  p.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      p.jsx("h4", {
                                        className:
                                          "font-semibold text-gray-900 text-lg",
                                        children: n[e].name,
                                      }),
                                      p.jsx("p", {
                                        className: "text-gray-500 text-sm",
                                        children: n[e].location,
                                      }),
                                      p.jsxs("p", {
                                        className:
                                          "text-blue-600 text-sm font-medium",
                                        children: [
                                          "Treatment: ",
                                          n[e].condition,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              p.jsx("div", {
                                className: "text-center",
                                children: p.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    p.jsx("img", {
                                      src: n[e].image,
                                      alt: n[e].name,
                                      className:
                                        "w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto border-2 border-blue-100 shadow-md",
                                    }),
                                    p.jsx("div", {
                                      className:
                                        "absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center",
                                      children: p.jsx("div", {
                                        className:
                                          "w-2 h-2 bg-white rounded-full",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e
                  ),
                }),
                p.jsx("div", {
                  className: "flex justify-center space-x-2 mt-6",
                  children: n.map((o, s) =>
                    p.jsx(
                      $.button,
                      {
                        onClick: () => t(s),
                        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          s === e
                            ? "bg-blue-600 scale-125"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`,
                        whileHover: { scale: 1.3 },
                        whileTap: { scale: 0.9 },
                      },
                      s
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  pT = () => {
    const [e, t] = x.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      }),
      n = (i) => {
        i.preventDefault();
        const a = "917090900087",
          o = encodeURIComponent(`Name: ${e.name}
Email: ${e.email}
Subject: ${e.subject}
Message: ${e.message}`),
          s = `https://wa.me/${a}?text=${o}`;
        window.open(s, "_blank"),
          t({ name: "", email: "", subject: "", message: "" });
      },
      r = (i) => {
        t({ ...e, [i.target.name]: i.target.value });
      };
    return p.jsx("section", {
      id: "contact",
      className: "py-20 bg-white",
      children: p.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          p.jsxs("div", {
            className: "text-center mb-16",
            children: [
              p.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-[#004F74] mb-4",
                children: "Get In Touch",
              }),
              p.jsx("p", {
                className: "text-lg text-gray-600 max-w-2xl mx-auto",
                children:
                  "Have questions or need to reach us? We're here to help. Contact us through any of the following methods.",
              }),
            ],
          }),
          p.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
              p.jsxs("div", {
                className: "space-y-8",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("h3", {
                        className: "text-2xl font-semibold text-[#004F74] mb-6",
                        children: "Contact Information",
                      }),
                      p.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          p.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              p.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center",
                                children: p.jsx(ip, {
                                  className: "h-6 w-6 text-[#007BBA]",
                                }),
                              }),
                              p.jsxs("div", {
                                children: [
                                  p.jsx("h4", {
                                    className:
                                      "font-semibold text-[#004F74] mb-1",
                                    children: "Address",
                                  }),
                                  p.jsxs("p", {
                                    className: "text-gray-600",
                                    children: [
                                      "Near Zanda Katta, Jamiya Masjid Road,",
                                      p.jsx("br", {}),
                                      "Vijayapura, KA, India - 586101",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              p.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center",
                                children: p.jsx(cw, {
                                  className: "h-6 w-6 text-[#007BBA]",
                                }),
                              }),
                              p.jsxs("div", {
                                children: [
                                  p.jsx("h4", {
                                    className:
                                      "font-semibold text-[#004F74] mb-1",
                                    children: "Phone",
                                  }),
                                  p.jsxs("p", {
                                    className: "text-gray-600",
                                    children: [
                                      "General: +91 70909 00087",
                                      p.jsx("br", {}),
                                      "Emergency: +91 70909 00087",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              p.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center",
                                children: p.jsx(lw, {
                                  className: "h-6 w-6 text-[#007BBA]",
                                }),
                              }),
                              p.jsxs("div", {
                                children: [
                                  p.jsx("h4", {
                                    className:
                                      "font-semibold text-[#004F74] mb-1",
                                    children: "Email",
                                  }),
                                  p.jsxs("p", {
                                    className: "text-gray-600",
                                    children: [
                                      "alnabihospital@gmail.com",
                                      p.jsx("br", {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              p.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center",
                                children: p.jsx(rp, {
                                  className: "h-6 w-6 text-[#007BBA]",
                                }),
                              }),
                              p.jsxs("div", {
                                children: [
                                  p.jsx("h4", {
                                    className:
                                      "font-semibold text-[#004F74] mb-1",
                                    children: "Hours",
                                  }),
                                  p.jsxs("p", {
                                    className: "text-gray-600",
                                    children: [
                                      "Mon - Fri: 8:00 AM - 8:00 PM",
                                      p.jsx("br", {}),
                                      "Tue - Fri: 8:00 AM - 8:00 PM",
                                      p.jsx("br", {}),
                                      "Wed - Fri: 8:00 AM - 8:00 PM",
                                      p.jsx("br", {}),
                                      "Thur - Fri: 8:00 AM - 8:00 PM",
                                      p.jsx("br", {}),
                                      "Fri - Fri: 8:00 AM - 8:00 PM",
                                      p.jsx("br", {}),
                                      "Sat - Sun: 9:00 AM - 6:00 PM",
                                      p.jsx("br", {}),
                                      "Sun - Fri: 8:00 AM - 8:00 PM",
                                      p.jsx("br", {}),
                                      p.jsx("span", {
                                        className: "text-[#007BBA] font-medium",
                                        children: "Emergency: 24/7",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx("div", {
                    className: "bg-[#F6FAFD] rounded-2xl overflow-hidden h-64",
                    children: p.jsx("iframe", {
                      title: "Al Nabi Hospital Location",
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.07030985858944!2d75.73039703711392!3d16.82271180678271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65571f0f051cb%3A0x274037d5d8953ade!2sAl%20Nabi%20Hospital!5e0!3m2!1sen!2sin!4v1755198084646!5m2!1sen!2sin",
                      width: "100%",
                      height: "100%",
                      style: { border: 0 },
                      allowFullScreen: !0,
                      loading: "lazy",
                      referrerPolicy: "no-referrer-when-downgrade",
                    }),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "bg-[#F6FAFD] rounded-3xl p-8",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center space-x-3 mb-6",
                    children: [
                      p.jsx(uw, { className: "h-6 w-6 text-[#007BBA]" }),
                      p.jsx("h3", {
                        className: "text-2xl font-semibold text-[#004F74]",
                        children: "Send us a Message",
                      }),
                    ],
                  }),
                  p.jsxs("form", {
                    onSubmit: n,
                    className: "space-y-6",
                    children: [
                      p.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                          p.jsx("div", {
                            children: p.jsx("input", {
                              type: "text",
                              name: "name",
                              placeholder: "Your Name",
                              value: e.name,
                              onChange: r,
                              required: !0,
                              className:
                                "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent",
                            }),
                          }),
                          p.jsx("div", {
                            children: p.jsx("input", {
                              type: "email",
                              name: "email",
                              placeholder: "Your Email",
                              value: e.email,
                              onChange: r,
                              required: !0,
                              className:
                                "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent",
                            }),
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        children: p.jsx("input", {
                          type: "text",
                          name: "subject",
                          placeholder: "Subject",
                          value: e.subject,
                          onChange: r,
                          required: !0,
                          className:
                            "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent",
                        }),
                      }),
                      p.jsx("div", {
                        children: p.jsx("textarea", {
                          name: "message",
                          placeholder: "Your Message",
                          rows: 5,
                          value: e.message,
                          onChange: r,
                          required: !0,
                          className:
                            "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent resize-none",
                        }),
                      }),
                      p.jsx("button", {
                        type: "submit",
                        className:
                          "w-full bg-[#007BBA] text-white py-4 rounded-xl font-semibold hover:bg-[#004F74] transition-colors transform hover:scale-105 duration-300",
                        children: "Send Message",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function yw(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = yw(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Ve() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = yw(e)) && (r && (r += " "), (r += t));
  return r;
}
const vw = 6048e5,
  hT = 864e5,
  Il = 6e4,
  Fl = 36e5,
  mT = 1e3,
  lg = Symbol.for("constructDateFrom");
function le(e, t) {
  return typeof e == "function"
    ? e(t)
    : e && typeof e == "object" && lg in e
    ? e[lg](t)
    : e instanceof Date
    ? new e.constructor(t)
    : new Date(t);
}
function Y(e, t) {
  return le(t || e, e);
}
function Ft(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  return isNaN(t)
    ? le((n == null ? void 0 : n.in) || e, NaN)
    : (t && r.setDate(r.getDate() + t), r);
}
function Yt(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return le(e, NaN);
  if (!t) return r;
  const i = r.getDate(),
    a = le(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const o = a.getDate();
  return i >= o ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
function xw(e, t, n) {
  return le(e, +Y(e) + t);
}
function gT(e, t, n) {
  return xw(e, t * Fl);
}
let yT = {};
function Ir() {
  return yT;
}
function Pn(e, t) {
  var s, l, u, c;
  const n = Ir(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.weekStartsOn) ??
      0,
    i = Y(e, t == null ? void 0 : t.in),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function ki(e, t) {
  return Pn(e, { ...t, weekStartsOn: 1 });
}
function ww(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = n.getFullYear(),
    i = le(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = ki(i),
    o = le(n, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const s = ki(o);
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= s.getTime()
    ? r
    : r - 1;
}
function Js(e) {
  const t = Y(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Tn(e, ...t) {
  const n = le.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Ar(e, t) {
  const n = Y(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Di(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t),
    a = Ar(r),
    o = Ar(i),
    s = +a - Js(a),
    l = +o - Js(o);
  return Math.round((s - l) / hT);
}
function vT(e, t) {
  const n = ww(e, t),
    r = le(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ki(r);
}
function fd(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  return r.setTime(r.getTime() + t * Il), r;
}
function sp(e, t, n) {
  return Yt(e, t * 3, n);
}
function xT(e, t, n) {
  return xw(e, t * 1e3);
}
function el(e, t, n) {
  return Ft(e, t * 7, n);
}
function gn(e, t, n) {
  return Yt(e, t * 12, n);
}
function ug(e, t) {
  let n,
    r = t == null ? void 0 : t.in;
  return (
    e.forEach((i) => {
      !r && typeof i == "object" && (r = le.bind(null, i));
      const a = Y(i, r);
      (!n || n < a || isNaN(+a)) && (n = a);
    }),
    le(r, n || NaN)
  );
}
function cg(e, t) {
  let n,
    r = t == null ? void 0 : t.in;
  return (
    e.forEach((i) => {
      !r && typeof i == "object" && (r = le.bind(null, i));
      const a = Y(i, r);
      (!n || n > a || isNaN(+a)) && (n = a);
    }),
    le(r, n || NaN)
  );
}
function wT(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t);
  return +Ar(r) == +Ar(i);
}
function yn(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function tl(e) {
  return !((!yn(e) && typeof e != "number") || isNaN(+Y(e)));
}
function nl(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t),
    a = r.getFullYear() - i.getFullYear(),
    o = r.getMonth() - i.getMonth();
  return a * 12 + o;
}
function Dr(e, t) {
  const n = Y(e, t == null ? void 0 : t.in);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function rl(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t),
    a = r.getFullYear() - i.getFullYear(),
    o = Dr(r) - Dr(i);
  return a * 4 + o;
}
function il(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t);
  return r.getFullYear() - i.getFullYear();
}
function bT(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t),
    a = dg(r, i),
    o = Math.abs(Di(r, i));
  r.setDate(r.getDate() - a * o);
  const s = +(dg(r, i) === -a),
    l = a * (o - s);
  return l === 0 ? 0 : l;
}
function dg(e, t) {
  const n =
    e.getFullYear() - t.getFullYear() ||
    e.getMonth() - t.getMonth() ||
    e.getDate() - t.getDate() ||
    e.getHours() - t.getHours() ||
    e.getMinutes() - t.getMinutes() ||
    e.getSeconds() - t.getSeconds() ||
    e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function bw(e, t) {
  const n = Y(e, t == null ? void 0 : t.in);
  return n.setHours(23, 59, 59, 999), n;
}
function Sw(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = n.getMonth();
  return (
    n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n
  );
}
function pd(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = n.getMonth(),
    i = r - (r % 3);
  return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
function kw(e, t) {
  const n = Y(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Dw(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Vl(e, t) {
  const n = Y(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ST(e, t) {
  var s, l;
  const n = Ir(),
    r =
      n.weekStartsOn ??
      ((l = (s = n.locale) == null ? void 0 : s.options) == null
        ? void 0
        : l.weekStartsOn) ??
      0,
    i = Y(e, t == null ? void 0 : t.in),
    a = i.getDay(),
    o = (a < r ? -7 : 0) + 6 - (a - r);
  return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
const kT = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  DT = (e, t, n) => {
    let r;
    const i = kT[e];
    return (
      typeof i == "string"
        ? (r = i)
        : t === 1
        ? (r = i.one)
        : (r = i.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Iu(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const CT = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  ET = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  PT = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  MT = {
    date: Iu({ formats: CT, defaultWidth: "full" }),
    time: Iu({ formats: ET, defaultWidth: "full" }),
    dateTime: Iu({ formats: PT, defaultWidth: "full" }),
  },
  TT = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  NT = (e, t, n, r) => TT[e];
function Ji(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : o;
      i = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[s] || e.values[o];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const _T = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  AT = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  RT = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
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
    ],
  },
  OT = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  jT = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  LT = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  IT = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  FT = {
    ordinalNumber: IT,
    era: Ji({ values: _T, defaultWidth: "wide" }),
    quarter: Ji({
      values: AT,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Ji({ values: RT, defaultWidth: "wide" }),
    day: Ji({ values: OT, defaultWidth: "wide" }),
    dayPeriod: Ji({
      values: jT,
      defaultWidth: "wide",
      formattingValues: LT,
      defaultFormattingWidth: "wide",
    }),
  };
function ea(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(i);
    if (!a) return null;
    const o = a[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s) ? BT(s, (d) => d.test(o)) : VT(s, (d) => d.test(o));
    let u;
    (u = e.valueCallback ? e.valueCallback(l) : l),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function VT(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function BT(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function YT(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0],
      a = t.match(e.parsePattern);
    if (!a) return null;
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const WT = /^(\d+)(th|st|nd|rd)?/i,
  HT = /\d+/i,
  zT = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  $T = { any: [/^b/i, /^(a|c)/i] },
  UT = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  KT = { any: [/1/i, /2/i, /3/i, /4/i] },
  QT = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  GT = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  qT = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  XT = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  ZT = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  JT = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  eN = {
    ordinalNumber: YT({
      matchPattern: WT,
      parsePattern: HT,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: ea({
      matchPatterns: zT,
      defaultMatchWidth: "wide",
      parsePatterns: $T,
      defaultParseWidth: "any",
    }),
    quarter: ea({
      matchPatterns: UT,
      defaultMatchWidth: "wide",
      parsePatterns: KT,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: ea({
      matchPatterns: QT,
      defaultMatchWidth: "wide",
      parsePatterns: GT,
      defaultParseWidth: "any",
    }),
    day: ea({
      matchPatterns: qT,
      defaultMatchWidth: "wide",
      parsePatterns: XT,
      defaultParseWidth: "any",
    }),
    dayPeriod: ea({
      matchPatterns: ZT,
      defaultMatchWidth: "any",
      parsePatterns: JT,
      defaultParseWidth: "any",
    }),
  },
  Cw = {
    code: "en-US",
    formatDistance: DT,
    formatLong: MT,
    formatRelative: NT,
    localize: FT,
    match: eN,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function tN(e, t) {
  const n = Y(e, t == null ? void 0 : t.in);
  return Di(n, Vl(n)) + 1;
}
function lp(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = +ki(n) - +vT(n);
  return Math.round(r / vw) + 1;
}
function up(e, t) {
  var c, d, f, h;
  const n = Y(e, t == null ? void 0 : t.in),
    r = n.getFullYear(),
    i = Ir(),
    a =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((h = (f = i.locale) == null ? void 0 : f.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      1,
    o = le((t == null ? void 0 : t.in) || e, 0);
  o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = Pn(o, t),
    l = le((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = Pn(l, t);
  return +n >= +s ? r + 1 : +n >= +u ? r : r - 1;
}
function nN(e, t) {
  var s, l, u, c;
  const n = Ir(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.firstWeekContainsDate) ??
      1,
    i = up(e, t),
    a = le((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Pn(a, t);
}
function Ew(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = +Pn(n, t) - +nN(n, t);
  return Math.round(r / vw) + 1;
}
function ae(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const _n = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return ae(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : ae(n + 1, 2);
    },
    d(e, t) {
      return ae(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return ae(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return ae(e.getHours(), t.length);
    },
    m(e, t) {
      return ae(e.getMinutes(), t.length);
    },
    s(e, t) {
      return ae(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        i = Math.trunc(r * Math.pow(10, n - 3));
      return ae(i, t.length);
    },
  },
  Vr = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  fg = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          i = r > 0 ? r : 1 - r;
        return n.ordinalNumber(i, { unit: "year" });
      }
      return _n.y(e, t);
    },
    Y: function (e, t, n, r) {
      const i = up(e, r),
        a = i > 0 ? i : 1 - i;
      if (t === "YY") {
        const o = a % 100;
        return ae(o, 2);
      }
      return t === "Yo"
        ? n.ordinalNumber(a, { unit: "year" })
        : ae(a, t.length);
    },
    R: function (e, t) {
      const n = ww(e);
      return ae(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return ae(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return ae(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return ae(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return _n.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return ae(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const i = Ew(e, r);
      return t === "wo"
        ? n.ordinalNumber(i, { unit: "week" })
        : ae(i, t.length);
    },
    I: function (e, t, n) {
      const r = lp(e);
      return t === "Io"
        ? n.ordinalNumber(r, { unit: "week" })
        : ae(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : _n.d(e, t);
    },
    D: function (e, t, n) {
      const r = tN(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : ae(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(a);
        case "ee":
          return ae(a, 2);
        case "eo":
          return n.ordinalNumber(a, { unit: "day" });
        case "eee":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(a);
        case "cc":
          return ae(a, t.length);
        case "co":
          return n.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return n.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        i = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(i);
        case "ii":
          return ae(i, t.length);
        case "io":
          return n.ordinalNumber(i, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const i = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r === 12
          ? (i = Vr.noon)
          : r === 0
          ? (i = Vr.midnight)
          : (i = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r >= 17
          ? (i = Vr.evening)
          : r >= 12
          ? (i = Vr.afternoon)
          : r >= 4
          ? (i = Vr.morning)
          : (i = Vr.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return _n.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : _n.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko"
        ? n.ordinalNumber(r, { unit: "hour" })
        : ae(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ae(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : _n.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : _n.s(e, t);
    },
    S: function (e, t) {
      return _n.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return hg(r);
        case "XXXX":
        case "XX":
          return fr(r);
        case "XXXXX":
        case "XXX":
        default:
          return fr(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return hg(r);
        case "xxxx":
        case "xx":
          return fr(r);
        case "xxxxx":
        case "xxx":
        default:
          return fr(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + pg(r, ":");
        case "OOOO":
        default:
          return "GMT" + fr(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + pg(r, ":");
        case "zzzz":
        default:
          return "GMT" + fr(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(+e / 1e3);
      return ae(r, t.length);
    },
    T: function (e, t, n) {
      return ae(+e, t.length);
    },
  };
function pg(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    i = Math.trunc(r / 60),
    a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + ae(a, 2);
}
function hg(e, t) {
  return e % 60 === 0
    ? (e > 0 ? "-" : "+") + ae(Math.abs(e) / 60, 2)
    : fr(e, t);
}
function fr(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    i = ae(Math.trunc(r / 60), 2),
    a = ae(r % 60, 2);
  return n + i + t + a;
}
const mg = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Pw = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  rN = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      i = n[2];
    if (!i) return mg(e, t);
    let a;
    switch (r) {
      case "P":
        a = t.dateTime({ width: "short" });
        break;
      case "PP":
        a = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        a = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        a = t.dateTime({ width: "full" });
        break;
    }
    return a.replace("{{date}}", mg(r, t)).replace("{{time}}", Pw(i, t));
  },
  hd = { p: Pw, P: rN },
  iN = /^D+$/,
  aN = /^Y+$/,
  oN = ["D", "DD", "YY", "YYYY"];
function sN(e) {
  return iN.test(e);
}
function lN(e) {
  return aN.test(e);
}
function uN(e, t, n) {
  const r = cN(e, t, n);
  if ((console.warn(r), oN.includes(e))) throw new RangeError(r);
}
function cN(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const dN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  fN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  pN = /^'([^]*?)'?$/,
  hN = /''/g,
  mN = /[a-zA-Z]/;
function gg(e, t, n) {
  var c, d, f, h, v, w, b, g;
  const r = Ir(),
    i = (n == null ? void 0 : n.locale) ?? r.locale ?? Cw,
    a =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((h = (f = r.locale) == null ? void 0 : f.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      1,
    o =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((w = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) ==
      null
        ? void 0
        : w.weekStartsOn) ??
      r.weekStartsOn ??
      ((g = (b = r.locale) == null ? void 0 : b.options) == null
        ? void 0
        : g.weekStartsOn) ??
      0,
    s = Y(e, n == null ? void 0 : n.in);
  if (!tl(s)) throw new RangeError("Invalid time value");
  let l = t
    .match(fN)
    .map((m) => {
      const y = m[0];
      if (y === "p" || y === "P") {
        const S = hd[y];
        return S(m, i.formatLong);
      }
      return m;
    })
    .join("")
    .match(dN)
    .map((m) => {
      if (m === "''") return { isToken: !1, value: "'" };
      const y = m[0];
      if (y === "'") return { isToken: !1, value: gN(m) };
      if (fg[y]) return { isToken: !0, value: m };
      if (y.match(mN))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            y +
            "`"
        );
      return { isToken: !1, value: m };
    });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = { firstWeekContainsDate: a, weekStartsOn: o, locale: i };
  return l
    .map((m) => {
      if (!m.isToken) return m.value;
      const y = m.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && lN(y)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && sN(y))) &&
        uN(y, t, String(e));
      const S = fg[y[0]];
      return S(s, y, i.localize, u);
    })
    .join("");
}
function gN(e) {
  const t = e.match(pN);
  return t ? t[1].replace(hN, "'") : e;
}
function yg(e, t) {
  return Y(e, t == null ? void 0 : t.in).getDate();
}
function yN(e, t) {
  return Y(e, t == null ? void 0 : t.in).getDay();
}
function vN(e, t) {
  const n = Y(e, t == null ? void 0 : t.in),
    r = n.getFullYear(),
    i = n.getMonth(),
    a = le(n, 0);
  return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function xN() {
  return Object.assign({}, Ir());
}
function vn(e, t) {
  return Y(e, t == null ? void 0 : t.in).getHours();
}
function wN(e, t) {
  const n = Y(e, t == null ? void 0 : t.in).getDay();
  return n === 0 ? 7 : n;
}
function xn(e, t) {
  return Y(e, t == null ? void 0 : t.in).getMinutes();
}
function $e(e, t) {
  return Y(e, t == null ? void 0 : t.in).getMonth();
}
function qn(e) {
  return Y(e).getSeconds();
}
function md(e) {
  return +Y(e);
}
function G(e, t) {
  return Y(e, t == null ? void 0 : t.in).getFullYear();
}
function tr(e, t) {
  return +Y(e) > +Y(t);
}
function Rr(e, t) {
  return +Y(e) < +Y(t);
}
function bN(e, t) {
  return +Y(e) == +Y(t);
}
function SN(e, t) {
  const n = kN(t) ? new t(0) : le(t, 0);
  return (
    n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()),
    n.setHours(
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    ),
    n
  );
}
function kN(e) {
  var t;
  return (
    typeof e == "function" &&
    ((t = e.prototype) == null ? void 0 : t.constructor) === e
  );
}
const DN = 10;
class Mw {
  constructor() {
    I(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class CN extends Mw {
  constructor(t, n, r, i, a) {
    super(),
      (this.value = t),
      (this.validateValue = n),
      (this.setValue = r),
      (this.priority = i),
      a && (this.subPriority = a);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class EN extends Mw {
  constructor(n, r) {
    super();
    I(this, "priority", DN);
    I(this, "subPriority", -1);
    this.context = n || ((i) => le(r, i));
  }
  set(n, r) {
    return r.timestampIsSet ? n : le(n, SN(n, this.context));
  }
}
class re {
  run(t, n, r, i) {
    const a = this.parse(t, n, r, i);
    return a
      ? {
          setter: new CN(
            a.value,
            this.validate,
            this.set,
            this.priority,
            this.subPriority
          ),
          rest: a.rest,
        }
      : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class PN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 140);
    I(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return (
          i.era(n, { width: "abbreviated" }) || i.era(n, { width: "narrow" })
        );
      case "GGGGG":
        return i.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return (
          i.era(n, { width: "wide" }) ||
          i.era(n, { width: "abbreviated" }) ||
          i.era(n, { width: "narrow" })
        );
    }
  }
  set(n, r, i) {
    return (r.era = i), n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const Ee = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  Qt = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function Pe(e, t) {
  return e && { value: t(e.value), rest: e.rest };
}
function ye(e, t) {
  const n = t.match(e);
  return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
}
function Gt(e, t) {
  const n = t.match(e);
  if (!n) return null;
  if (n[0] === "Z") return { value: 0, rest: t.slice(1) };
  const r = n[1] === "+" ? 1 : -1,
    i = n[2] ? parseInt(n[2], 10) : 0,
    a = n[3] ? parseInt(n[3], 10) : 0,
    o = n[5] ? parseInt(n[5], 10) : 0;
  return { value: r * (i * Fl + a * Il + o * mT), rest: t.slice(n[0].length) };
}
function Tw(e) {
  return ye(Ee.anyDigitsSigned, e);
}
function ke(e, t) {
  switch (e) {
    case 1:
      return ye(Ee.singleDigit, t);
    case 2:
      return ye(Ee.twoDigits, t);
    case 3:
      return ye(Ee.threeDigits, t);
    case 4:
      return ye(Ee.fourDigits, t);
    default:
      return ye(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function al(e, t) {
  switch (e) {
    case 1:
      return ye(Ee.singleDigitSigned, t);
    case 2:
      return ye(Ee.twoDigitsSigned, t);
    case 3:
      return ye(Ee.threeDigitsSigned, t);
    case 4:
      return ye(Ee.fourDigitsSigned, t);
    default:
      return ye(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function cp(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Nw(e, t) {
  const n = t > 0,
    r = n ? t : 1 - t;
  let i;
  if (r <= 50) i = e || 100;
  else {
    const a = r + 50,
      o = Math.trunc(a / 100) * 100,
      s = e >= a % 100;
    i = e + o - (s ? 100 : 0);
  }
  return n ? i : 1 - i;
}
function _w(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
class MN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 130);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "u",
      "w",
      "I",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    const a = (o) => ({ year: o, isTwoDigitYear: r === "yy" });
    switch (r) {
      case "y":
        return Pe(ke(4, n), a);
      case "yo":
        return Pe(i.ordinalNumber(n, { unit: "year" }), a);
      default:
        return Pe(ke(r.length, n), a);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, i) {
    const a = n.getFullYear();
    if (i.isTwoDigitYear) {
      const s = Nw(i.year, a);
      return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const o = !("era" in r) || r.era === 1 ? i.year : 1 - i.year;
    return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class TN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 130);
    I(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    const a = (o) => ({ year: o, isTwoDigitYear: r === "YY" });
    switch (r) {
      case "Y":
        return Pe(ke(4, n), a);
      case "Yo":
        return Pe(i.ordinalNumber(n, { unit: "year" }), a);
      default:
        return Pe(ke(r.length, n), a);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, i, a) {
    const o = up(n, a);
    if (i.isTwoDigitYear) {
      const l = Nw(i.year, o);
      return (
        n.setFullYear(l, 0, a.firstWeekContainsDate),
        n.setHours(0, 0, 0, 0),
        Pn(n, a)
      );
    }
    const s = !("era" in r) || r.era === 1 ? i.year : 1 - i.year;
    return (
      n.setFullYear(s, 0, a.firstWeekContainsDate),
      n.setHours(0, 0, 0, 0),
      Pn(n, a)
    );
  }
}
class NN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 130);
    I(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r) {
    return al(r === "R" ? 4 : r.length, n);
  }
  set(n, r, i) {
    const a = le(n, 0);
    return a.setFullYear(i, 0, 4), a.setHours(0, 0, 0, 0), ki(a);
  }
}
class _N extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 130);
    I(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "R",
      "w",
      "I",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r) {
    return al(r === "u" ? 4 : r.length, n);
  }
  set(n, r, i) {
    return n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class AN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 120);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    switch (r) {
      case "Q":
      case "QQ":
        return ke(r.length, n);
      case "Qo":
        return i.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return (
          i.quarter(n, { width: "abbreviated", context: "formatting" }) ||
          i.quarter(n, { width: "narrow", context: "formatting" })
        );
      case "QQQQQ":
        return i.quarter(n, { width: "narrow", context: "formatting" });
      case "QQQQ":
      default:
        return (
          i.quarter(n, { width: "wide", context: "formatting" }) ||
          i.quarter(n, { width: "abbreviated", context: "formatting" }) ||
          i.quarter(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, i) {
    return n.setMonth((i - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class RN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 120);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    switch (r) {
      case "q":
      case "qq":
        return ke(r.length, n);
      case "qo":
        return i.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return (
          i.quarter(n, { width: "abbreviated", context: "standalone" }) ||
          i.quarter(n, { width: "narrow", context: "standalone" })
        );
      case "qqqqq":
        return i.quarter(n, { width: "narrow", context: "standalone" });
      case "qqqq":
      default:
        return (
          i.quarter(n, { width: "wide", context: "standalone" }) ||
          i.quarter(n, { width: "abbreviated", context: "standalone" }) ||
          i.quarter(n, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, i) {
    return n.setMonth((i - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class ON extends re {
  constructor() {
    super(...arguments);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
    I(this, "priority", 110);
  }
  parse(n, r, i) {
    const a = (o) => o - 1;
    switch (r) {
      case "M":
        return Pe(ye(Ee.month, n), a);
      case "MM":
        return Pe(ke(2, n), a);
      case "Mo":
        return Pe(i.ordinalNumber(n, { unit: "month" }), a);
      case "MMM":
        return (
          i.month(n, { width: "abbreviated", context: "formatting" }) ||
          i.month(n, { width: "narrow", context: "formatting" })
        );
      case "MMMMM":
        return i.month(n, { width: "narrow", context: "formatting" });
      case "MMMM":
      default:
        return (
          i.month(n, { width: "wide", context: "formatting" }) ||
          i.month(n, { width: "abbreviated", context: "formatting" }) ||
          i.month(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, i) {
    return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class jN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 110);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    const a = (o) => o - 1;
    switch (r) {
      case "L":
        return Pe(ye(Ee.month, n), a);
      case "LL":
        return Pe(ke(2, n), a);
      case "Lo":
        return Pe(i.ordinalNumber(n, { unit: "month" }), a);
      case "LLL":
        return (
          i.month(n, { width: "abbreviated", context: "standalone" }) ||
          i.month(n, { width: "narrow", context: "standalone" })
        );
      case "LLLLL":
        return i.month(n, { width: "narrow", context: "standalone" });
      case "LLLL":
      default:
        return (
          i.month(n, { width: "wide", context: "standalone" }) ||
          i.month(n, { width: "abbreviated", context: "standalone" }) ||
          i.month(n, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, i) {
    return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function LN(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in),
    i = Ew(r, n) - t;
  return r.setDate(r.getDate() - i * 7), Y(r, n == null ? void 0 : n.in);
}
class IN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 100);
    I(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    switch (r) {
      case "w":
        return ye(Ee.week, n);
      case "wo":
        return i.ordinalNumber(n, { unit: "week" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, i, a) {
    return Pn(LN(n, i, a), a);
  }
}
function FN(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in),
    i = lp(r, n) - t;
  return r.setDate(r.getDate() - i * 7), r;
}
class VN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 100);
    I(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    switch (r) {
      case "I":
        return ye(Ee.week, n);
      case "Io":
        return i.ordinalNumber(n, { unit: "week" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, i) {
    return ki(FN(n, i));
  }
}
const BN = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  YN = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class WN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 90);
    I(this, "subPriority", 1);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    switch (r) {
      case "d":
        return ye(Ee.date, n);
      case "do":
        return i.ordinalNumber(n, { unit: "date" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    const i = n.getFullYear(),
      a = _w(i),
      o = n.getMonth();
    return a ? r >= 1 && r <= YN[o] : r >= 1 && r <= BN[o];
  }
  set(n, r, i) {
    return n.setDate(i), n.setHours(0, 0, 0, 0), n;
  }
}
class HN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 90);
    I(this, "subpriority", 1);
    I(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    switch (r) {
      case "D":
      case "DD":
        return ye(Ee.dayOfYear, n);
      case "Do":
        return i.ordinalNumber(n, { unit: "date" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    const i = n.getFullYear();
    return _w(i) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, i) {
    return n.setMonth(0, i), n.setHours(0, 0, 0, 0), n;
  }
}
function dp(e, t, n) {
  var d, f, h, v;
  const r = Ir(),
    i =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : f.weekStartsOn) ??
      r.weekStartsOn ??
      ((v = (h = r.locale) == null ? void 0 : h.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    a = Y(e, n == null ? void 0 : n.in),
    o = a.getDay(),
    l = ((t % 7) + 7) % 7,
    u = 7 - i,
    c = t < 0 || t > 6 ? t - ((o + u) % 7) : ((l + u) % 7) - ((o + u) % 7);
  return Ft(a, c, n);
}
class zN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 90);
    I(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return (
          i.day(n, { width: "abbreviated", context: "formatting" }) ||
          i.day(n, { width: "short", context: "formatting" }) ||
          i.day(n, { width: "narrow", context: "formatting" })
        );
      case "EEEEE":
        return i.day(n, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return (
          i.day(n, { width: "short", context: "formatting" }) ||
          i.day(n, { width: "narrow", context: "formatting" })
        );
      case "EEEE":
      default:
        return (
          i.day(n, { width: "wide", context: "formatting" }) ||
          i.day(n, { width: "abbreviated", context: "formatting" }) ||
          i.day(n, { width: "short", context: "formatting" }) ||
          i.day(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, i, a) {
    return (n = dp(n, i, a)), n.setHours(0, 0, 0, 0), n;
  }
}
class $N extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 90);
    I(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i, a) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return ((s + a.weekStartsOn + 6) % 7) + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return Pe(ke(r.length, n), o);
      case "eo":
        return Pe(i.ordinalNumber(n, { unit: "day" }), o);
      case "eee":
        return (
          i.day(n, { width: "abbreviated", context: "formatting" }) ||
          i.day(n, { width: "short", context: "formatting" }) ||
          i.day(n, { width: "narrow", context: "formatting" })
        );
      case "eeeee":
        return i.day(n, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return (
          i.day(n, { width: "short", context: "formatting" }) ||
          i.day(n, { width: "narrow", context: "formatting" })
        );
      case "eeee":
      default:
        return (
          i.day(n, { width: "wide", context: "formatting" }) ||
          i.day(n, { width: "abbreviated", context: "formatting" }) ||
          i.day(n, { width: "short", context: "formatting" }) ||
          i.day(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, i, a) {
    return (n = dp(n, i, a)), n.setHours(0, 0, 0, 0), n;
  }
}
class UN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 90);
    I(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T",
    ]);
  }
  parse(n, r, i, a) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return ((s + a.weekStartsOn + 6) % 7) + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return Pe(ke(r.length, n), o);
      case "co":
        return Pe(i.ordinalNumber(n, { unit: "day" }), o);
      case "ccc":
        return (
          i.day(n, { width: "abbreviated", context: "standalone" }) ||
          i.day(n, { width: "short", context: "standalone" }) ||
          i.day(n, { width: "narrow", context: "standalone" })
        );
      case "ccccc":
        return i.day(n, { width: "narrow", context: "standalone" });
      case "cccccc":
        return (
          i.day(n, { width: "short", context: "standalone" }) ||
          i.day(n, { width: "narrow", context: "standalone" })
        );
      case "cccc":
      default:
        return (
          i.day(n, { width: "wide", context: "standalone" }) ||
          i.day(n, { width: "abbreviated", context: "standalone" }) ||
          i.day(n, { width: "short", context: "standalone" }) ||
          i.day(n, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, i, a) {
    return (n = dp(n, i, a)), n.setHours(0, 0, 0, 0), n;
  }
}
function KN(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in),
    i = wN(r, n),
    a = t - i;
  return Ft(r, a, n);
}
class QN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 90);
    I(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T",
    ]);
  }
  parse(n, r, i) {
    const a = (o) => (o === 0 ? 7 : o);
    switch (r) {
      case "i":
      case "ii":
        return ke(r.length, n);
      case "io":
        return i.ordinalNumber(n, { unit: "day" });
      case "iii":
        return Pe(
          i.day(n, { width: "abbreviated", context: "formatting" }) ||
            i.day(n, { width: "short", context: "formatting" }) ||
            i.day(n, { width: "narrow", context: "formatting" }),
          a
        );
      case "iiiii":
        return Pe(i.day(n, { width: "narrow", context: "formatting" }), a);
      case "iiiiii":
        return Pe(
          i.day(n, { width: "short", context: "formatting" }) ||
            i.day(n, { width: "narrow", context: "formatting" }),
          a
        );
      case "iiii":
      default:
        return Pe(
          i.day(n, { width: "wide", context: "formatting" }) ||
            i.day(n, { width: "abbreviated", context: "formatting" }) ||
            i.day(n, { width: "short", context: "formatting" }) ||
            i.day(n, { width: "narrow", context: "formatting" }),
          a
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, i) {
    return (n = KN(n, i)), n.setHours(0, 0, 0, 0), n;
  }
}
class GN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 80);
    I(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return (
          i.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          i.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
      case "aaaaa":
        return i.dayPeriod(n, { width: "narrow", context: "formatting" });
      case "aaaa":
      default:
        return (
          i.dayPeriod(n, { width: "wide", context: "formatting" }) ||
          i.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          i.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(n, r, i) {
    return n.setHours(cp(i), 0, 0, 0), n;
  }
}
class qN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 80);
    I(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return (
          i.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          i.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
      case "bbbbb":
        return i.dayPeriod(n, { width: "narrow", context: "formatting" });
      case "bbbb":
      default:
        return (
          i.dayPeriod(n, { width: "wide", context: "formatting" }) ||
          i.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          i.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(n, r, i) {
    return n.setHours(cp(i), 0, 0, 0), n;
  }
}
class XN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 80);
    I(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return (
          i.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          i.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
      case "BBBBB":
        return i.dayPeriod(n, { width: "narrow", context: "formatting" });
      case "BBBB":
      default:
        return (
          i.dayPeriod(n, { width: "wide", context: "formatting" }) ||
          i.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          i.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(n, r, i) {
    return n.setHours(cp(i), 0, 0, 0), n;
  }
}
class ZN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 70);
    I(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "h":
        return ye(Ee.hour12h, n);
      case "ho":
        return i.ordinalNumber(n, { unit: "hour" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 12;
  }
  set(n, r, i) {
    const a = n.getHours() >= 12;
    return (
      a && i < 12
        ? n.setHours(i + 12, 0, 0, 0)
        : !a && i === 12
        ? n.setHours(0, 0, 0, 0)
        : n.setHours(i, 0, 0, 0),
      n
    );
  }
}
class JN extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 70);
    I(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "H":
        return ye(Ee.hour23h, n);
      case "Ho":
        return i.ordinalNumber(n, { unit: "hour" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, i) {
    return n.setHours(i, 0, 0, 0), n;
  }
}
class e_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 70);
    I(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "K":
        return ye(Ee.hour11h, n);
      case "Ko":
        return i.ordinalNumber(n, { unit: "hour" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, i) {
    return (
      n.getHours() >= 12 && i < 12
        ? n.setHours(i + 12, 0, 0, 0)
        : n.setHours(i, 0, 0, 0),
      n
    );
  }
}
class t_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 70);
    I(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "k":
        return ye(Ee.hour24h, n);
      case "ko":
        return i.ordinalNumber(n, { unit: "hour" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 24;
  }
  set(n, r, i) {
    const a = i <= 24 ? i % 24 : i;
    return n.setHours(a, 0, 0, 0), n;
  }
}
class n_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 60);
    I(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "m":
        return ye(Ee.minute, n);
      case "mo":
        return i.ordinalNumber(n, { unit: "minute" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, i) {
    return n.setMinutes(i, 0, 0), n;
  }
}
class r_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 50);
    I(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, i) {
    switch (r) {
      case "s":
        return ye(Ee.second, n);
      case "so":
        return i.ordinalNumber(n, { unit: "second" });
      default:
        return ke(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, i) {
    return n.setSeconds(i, 0), n;
  }
}
class i_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 30);
    I(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const i = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return Pe(ke(r.length, n), i);
  }
  set(n, r, i) {
    return n.setMilliseconds(i), n;
  }
}
class a_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 10);
    I(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return Gt(Qt.basicOptionalMinutes, n);
      case "XX":
        return Gt(Qt.basic, n);
      case "XXXX":
        return Gt(Qt.basicOptionalSeconds, n);
      case "XXXXX":
        return Gt(Qt.extendedOptionalSeconds, n);
      case "XXX":
      default:
        return Gt(Qt.extended, n);
    }
  }
  set(n, r, i) {
    return r.timestampIsSet ? n : le(n, n.getTime() - Js(n) - i);
  }
}
class o_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 10);
    I(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return Gt(Qt.basicOptionalMinutes, n);
      case "xx":
        return Gt(Qt.basic, n);
      case "xxxx":
        return Gt(Qt.basicOptionalSeconds, n);
      case "xxxxx":
        return Gt(Qt.extendedOptionalSeconds, n);
      case "xxx":
      default:
        return Gt(Qt.extended, n);
    }
  }
  set(n, r, i) {
    return r.timestampIsSet ? n : le(n, n.getTime() - Js(n) - i);
  }
}
class s_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 40);
    I(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Tw(n);
  }
  set(n, r, i) {
    return [le(n, i * 1e3), { timestampIsSet: !0 }];
  }
}
class l_ extends re {
  constructor() {
    super(...arguments);
    I(this, "priority", 20);
    I(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Tw(n);
  }
  set(n, r, i) {
    return [le(n, i), { timestampIsSet: !0 }];
  }
}
const u_ = {
    G: new PN(),
    y: new MN(),
    Y: new TN(),
    R: new NN(),
    u: new _N(),
    Q: new AN(),
    q: new RN(),
    M: new ON(),
    L: new jN(),
    w: new IN(),
    I: new VN(),
    d: new WN(),
    D: new HN(),
    E: new zN(),
    e: new $N(),
    c: new UN(),
    i: new QN(),
    a: new GN(),
    b: new qN(),
    B: new XN(),
    h: new ZN(),
    H: new JN(),
    K: new e_(),
    k: new t_(),
    m: new n_(),
    s: new r_(),
    S: new i_(),
    X: new a_(),
    x: new o_(),
    t: new s_(),
    T: new l_(),
  },
  c_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  d_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  f_ = /^'([^]*?)'?$/,
  p_ = /''/g,
  h_ = /\S/,
  m_ = /[a-zA-Z]/;
function g_(e, t, n, r) {
  var b, g, m, y, S, k, E, C;
  const i = () => le((r == null ? void 0 : r.in) || n, NaN),
    a = xN(),
    o = (r == null ? void 0 : r.locale) ?? a.locale ?? Cw,
    s =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((g = (b = r == null ? void 0 : r.locale) == null ? void 0 : b.options) ==
      null
        ? void 0
        : g.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((y = (m = a.locale) == null ? void 0 : m.options) == null
        ? void 0
        : y.firstWeekContainsDate) ??
      1,
    l =
      (r == null ? void 0 : r.weekStartsOn) ??
      ((k = (S = r == null ? void 0 : r.locale) == null ? void 0 : S.options) ==
      null
        ? void 0
        : k.weekStartsOn) ??
      a.weekStartsOn ??
      ((C = (E = a.locale) == null ? void 0 : E.options) == null
        ? void 0
        : C.weekStartsOn) ??
      0;
  if (!t) return e ? i() : Y(n, r == null ? void 0 : r.in);
  const u = { firstWeekContainsDate: s, weekStartsOn: l, locale: o },
    c = [new EN(r == null ? void 0 : r.in, n)],
    d = t
      .match(d_)
      .map((D) => {
        const M = D[0];
        if (M in hd) {
          const A = hd[M];
          return A(D, o.formatLong);
        }
        return D;
      })
      .join("")
      .match(c_),
    f = [];
  for (let D of d) {
    const M = D[0],
      A = u_[M];
    if (A) {
      const { incompatibleTokens: B } = A;
      if (Array.isArray(B)) {
        const U = f.find((K) => B.includes(K.token) || K.token === M);
        if (U)
          throw new RangeError(
            `The format string mustn't contain \`${U.fullToken}\` and \`${D}\` at the same time`
          );
      } else if (A.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${D}\` and any other token at the same time`
        );
      f.push({ token: M, fullToken: D });
      const j = A.run(e, D, o.match, u);
      if (!j) return i();
      c.push(j.setter), (e = j.rest);
    } else {
      if (M.match(m_))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            M +
            "`"
        );
      if (
        (D === "''" ? (D = "'") : M === "'" && (D = y_(D)), e.indexOf(D) === 0)
      )
        e = e.slice(D.length);
      else return i();
    }
  }
  if (e.length > 0 && h_.test(e)) return i();
  const h = c
    .map((D) => D.priority)
    .sort((D, M) => M - D)
    .filter((D, M, A) => A.indexOf(D) === M)
    .map((D) =>
      c
        .filter((M) => M.priority === D)
        .sort((M, A) => A.subPriority - M.subPriority)
    )
    .map((D) => D[0]);
  let v = Y(n, r == null ? void 0 : r.in);
  if (isNaN(+v)) return i();
  const w = {};
  for (const D of h) {
    if (!D.validate(v, u)) return i();
    const M = D.set(v, w, u);
    Array.isArray(M) ? ((v = M[0]), Object.assign(w, M[1])) : (v = M);
  }
  return v;
}
function y_(e) {
  return e.match(f_)[1].replace(p_, "'");
}
function v_(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t);
  return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
function x_(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t);
  return +pd(r) == +pd(i);
}
function w_(e, t, n) {
  const [r, i] = Tn(n == null ? void 0 : n.in, e, t);
  return r.getFullYear() === i.getFullYear();
}
function Ga(e, t, n) {
  const r = +Y(e, n == null ? void 0 : n.in),
    [i, a] = [
      +Y(t.start, n == null ? void 0 : n.in),
      +Y(t.end, n == null ? void 0 : n.in),
    ].sort((o, s) => o - s);
  return r >= i && r <= a;
}
function b_(e, t, n) {
  return Ft(e, -1, n);
}
function S_(e, t) {
  const n = () => le(t == null ? void 0 : t.in, NaN),
    i = E_(e);
  let a;
  if (i.date) {
    const u = P_(i.date, 2);
    a = M_(u.restDateString, u.year);
  }
  if (!a || isNaN(+a)) return n();
  const o = +a;
  let s = 0,
    l;
  if (i.time && ((s = T_(i.time)), isNaN(s))) return n();
  if (i.timezone) {
    if (((l = N_(i.timezone)), isNaN(l))) return n();
  } else {
    const u = new Date(o + s),
      c = Y(0, t == null ? void 0 : t.in);
    return (
      c.setFullYear(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()),
      c.setHours(
        u.getUTCHours(),
        u.getUTCMinutes(),
        u.getUTCSeconds(),
        u.getUTCMilliseconds()
      ),
      c
    );
  }
  return Y(o + s + l, t == null ? void 0 : t.in);
}
const Bo = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  k_ = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  D_ =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  C_ = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function E_(e) {
  const t = {},
    n = e.split(Bo.dateTimeDelimiter);
  let r;
  if (n.length > 2) return t;
  if (
    (/:/.test(n[0])
      ? (r = n[0])
      : ((t.date = n[0]),
        (r = n[1]),
        Bo.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(Bo.timeZoneDelimiter)[0]),
          (r = e.substr(t.date.length, e.length)))),
    r)
  ) {
    const i = Bo.timezone.exec(r);
    i ? ((t.time = r.replace(i[1], "")), (t.timezone = i[1])) : (t.time = r);
  }
  return t;
}
function P_(e, t) {
  const n = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)"
    ),
    r = e.match(n);
  if (!r) return { year: NaN, restDateString: "" };
  const i = r[1] ? parseInt(r[1]) : null,
    a = r[2] ? parseInt(r[2]) : null;
  return {
    year: a === null ? i : a * 100,
    restDateString: e.slice((r[1] || r[2]).length),
  };
}
function M_(e, t) {
  if (t === null) return new Date(NaN);
  const n = e.match(k_);
  if (!n) return new Date(NaN);
  const r = !!n[4],
    i = ta(n[1]),
    a = ta(n[2]) - 1,
    o = ta(n[3]),
    s = ta(n[4]),
    l = ta(n[5]) - 1;
  if (r) return j_(t, s, l) ? __(t, s, l) : new Date(NaN);
  {
    const u = new Date(0);
    return !R_(t, a, o) || !O_(t, i)
      ? new Date(NaN)
      : (u.setUTCFullYear(t, a, Math.max(i, o)), u);
  }
}
function ta(e) {
  return e ? parseInt(e) : 1;
}
function T_(e) {
  const t = e.match(D_);
  if (!t) return NaN;
  const n = Fu(t[1]),
    r = Fu(t[2]),
    i = Fu(t[3]);
  return L_(n, r, i) ? n * Fl + r * Il + i * 1e3 : NaN;
}
function Fu(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function N_(e) {
  if (e === "Z") return 0;
  const t = e.match(C_);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1,
    r = parseInt(t[2]),
    i = (t[3] && parseInt(t[3])) || 0;
  return I_(r, i) ? n * (r * Fl + i * Il) : NaN;
}
function __(e, t, n) {
  const r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7,
    a = (t - 1) * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const A_ = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Aw(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function R_(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (A_[t] || (Aw(e) ? 29 : 28));
}
function O_(e, t) {
  return t >= 1 && t <= (Aw(e) ? 366 : 365);
}
function j_(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function L_(e, t, n) {
  return e === 24
    ? t === 0 && n === 0
    : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function I_(e, t) {
  return t >= 0 && t <= 59;
}
function wt(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in),
    i = r.getFullYear(),
    a = r.getDate(),
    o = le(e, 0);
  o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
  const s = vN(o);
  return r.setMonth(t, Math.min(a, s)), r;
}
function ps(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  return r.setHours(t), r;
}
function hs(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  return r.setMinutes(t), r;
}
function Br(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in),
    i = Math.trunc(r.getMonth() / 3) + 1,
    a = t - i;
  return wt(r, r.getMonth() + a * 3);
}
function ms(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  return r.setSeconds(t), r;
}
function $t(e, t, n) {
  const r = Y(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? le(e, NaN) : (r.setFullYear(t), r);
}
function Cr(e, t, n) {
  return Yt(e, -t, n);
}
function Rw(e, t, n) {
  return sp(e, -1, n);
}
function vg(e, t, n) {
  return el(e, -1, n);
}
function Ci(e, t, n) {
  return gn(e, -t, n);
}
function Bl() {
  return typeof window < "u";
}
function Vi(e) {
  return Ow(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ln(e) {
  var t;
  return (t = (Ow(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ow(e) {
  return Bl() ? e instanceof Node || e instanceof pt(e).Node : !1;
}
function Xe(e) {
  return Bl() ? e instanceof Element || e instanceof pt(e).Element : !1;
}
function on(e) {
  return Bl() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1;
}
function xg(e) {
  return !Bl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
const F_ = new Set(["inline", "contents"]);
function co(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !F_.has(i);
}
const V_ = new Set(["table", "td", "th"]);
function B_(e) {
  return V_.has(Vi(e));
}
const Y_ = [":popover-open", ":modal"];
function Yl(e) {
  return Y_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const W_ = ["transform", "translate", "scale", "rotate", "perspective"],
  H_ = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  z_ = ["paint", "layout", "strict", "content"];
function fp(e) {
  const t = pp(),
    n = Xe(e) ? Mt(e) : e;
  return (
    W_.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    H_.some((r) => (n.willChange || "").includes(r)) ||
    z_.some((r) => (n.contain || "").includes(r))
  );
}
function $_(e) {
  let t = nr(e);
  for (; on(t) && !Ei(t); ) {
    if (fp(t)) return t;
    if (Yl(t)) return null;
    t = nr(t);
  }
  return null;
}
function pp() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const U_ = new Set(["html", "body", "#document"]);
function Ei(e) {
  return U_.has(Vi(e));
}
function Mt(e) {
  return pt(e).getComputedStyle(e);
}
function Wl(e) {
  return Xe(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function nr(e) {
  if (Vi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (xg(e) && e.host) || ln(e);
  return xg(t) ? t.host : t;
}
function jw(e) {
  const t = nr(e);
  return Ei(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : on(t) && co(t)
    ? t
    : jw(t);
}
function qa(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = jw(e),
    a = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = pt(i);
  if (a) {
    const s = gd(o);
    return t.concat(
      o,
      o.visualViewport || [],
      co(i) ? i : [],
      s && n ? qa(s) : []
    );
  }
  return t.concat(i, qa(i, [], n));
}
function gd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const Pi = Math.min,
  Er = Math.max,
  ol = Math.round,
  Yo = Math.floor,
  nn = (e) => ({ x: e, y: e }),
  K_ = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Q_ = { start: "end", end: "start" };
function G_(e, t, n) {
  return Er(e, Pi(t, n));
}
function Hl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mi(e) {
  return e.split("-")[0];
}
function fo(e) {
  return e.split("-")[1];
}
function q_(e) {
  return e === "x" ? "y" : "x";
}
function hp(e) {
  return e === "y" ? "height" : "width";
}
const X_ = new Set(["top", "bottom"]);
function vr(e) {
  return X_.has(Mi(e)) ? "y" : "x";
}
function mp(e) {
  return q_(vr(e));
}
function Z_(e, t, n) {
  n === void 0 && (n = !1);
  const r = fo(e),
    i = mp(e),
    a = hp(i);
  let o =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[a] > t.floating[a] && (o = sl(o)), [o, sl(o)];
}
function J_(e) {
  const t = sl(e);
  return [yd(e), t, yd(t)];
}
function yd(e) {
  return e.replace(/start|end/g, (t) => Q_[t]);
}
const wg = ["left", "right"],
  bg = ["right", "left"],
  eA = ["top", "bottom"],
  tA = ["bottom", "top"];
function nA(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? bg : wg) : t ? wg : bg;
    case "left":
    case "right":
      return t ? eA : tA;
    default:
      return [];
  }
}
function rA(e, t, n, r) {
  const i = fo(e);
  let a = nA(Mi(e), n === "start", r);
  return (
    i && ((a = a.map((o) => o + "-" + i)), t && (a = a.concat(a.map(yd)))), a
  );
}
function sl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => K_[t]);
}
function iA(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Lw(e) {
  return typeof e != "number"
    ? iA(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ll(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
var aA = typeof document < "u",
  oA = function () {},
  ul = aA ? x.useLayoutEffect : oA;
const sA = { ...iy },
  lA = sA.useInsertionEffect,
  uA = lA || ((e) => e());
function cA(e) {
  const t = x.useRef(() => {});
  return (
    uA(() => {
      t.current = e;
    }),
    x.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function Sg(e, t, n) {
  let { reference: r, floating: i } = e;
  const a = vr(t),
    o = mp(t),
    s = hp(o),
    l = Mi(t),
    u = a === "y",
    c = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (fo(t)) {
    case "start":
      h[o] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const dA = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: a = [],
      platform: o,
    } = n,
    s = a.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: d } = Sg(u, r, l),
    f = r,
    h = {},
    v = 0;
  for (let w = 0; w < s.length; w++) {
    const { name: b, fn: g } = s[w],
      {
        x: m,
        y,
        data: S,
        reset: k,
      } = await g({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (c = m ?? c),
      (d = y ?? d),
      (h = { ...h, [b]: { ...h[b], ...S } }),
      k &&
        v <= 50 &&
        (v++,
        typeof k == "object" &&
          (k.placement && (f = k.placement),
          k.rects &&
            (u =
              k.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : k.rects),
          ({ x: c, y: d } = Sg(u, f, l))),
        (w = -1));
  }
  return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
};
async function fA(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: a, rects: o, elements: s, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = Hl(t, e),
    v = Lw(h),
    b = s[f ? (d === "floating" ? "reference" : "floating") : d],
    g = ll(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    m =
      d === "floating"
        ? { x: r, y: i, width: o.floating.width, height: o.floating.height }
        : o.reference,
    y = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(s.floating)),
    S = (await (a.isElement == null ? void 0 : a.isElement(y)))
      ? (await (a.getScale == null ? void 0 : a.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = ll(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: m,
            offsetParent: y,
            strategy: l,
          })
        : m
    );
  return {
    top: (g.top - k.top + v.top) / S.y,
    bottom: (k.bottom - g.bottom + v.bottom) / S.y,
    left: (g.left - k.left + v.left) / S.x,
    right: (k.right - g.right + v.right) / S.x,
  };
}
const pA = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = Hl(e, t) || {};
      if (u == null) return {};
      const d = Lw(c),
        f = { x: n, y: r },
        h = mp(i),
        v = hp(h),
        w = await o.getDimensions(u),
        b = h === "y",
        g = b ? "top" : "left",
        m = b ? "bottom" : "right",
        y = b ? "clientHeight" : "clientWidth",
        S = a.reference[v] + a.reference[h] - f[h] - a.floating[v],
        k = f[h] - a.reference[h],
        E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let C = E ? E[y] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
        (C = s.floating[y] || a.floating[v]);
      const D = S / 2 - k / 2,
        M = C / 2 - w[v] / 2 - 1,
        A = Pi(d[g], M),
        B = Pi(d[m], M),
        j = A,
        U = C - w[v] - B,
        K = C / 2 - w[v] / 2 + D,
        Q = G_(j, K, U),
        H =
          !l.arrow &&
          fo(i) != null &&
          K !== Q &&
          a.reference[v] / 2 - (K < j ? A : B) - w[v] / 2 < 0,
        V = H ? (K < j ? K - j : K - U) : 0;
      return {
        [h]: f[h] + V,
        data: {
          [h]: Q,
          centerOffset: K - Q - V,
          ...(H && { alignmentOffset: V }),
        },
        reset: H,
      };
    },
  }),
  hA = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: a,
              rects: o,
              initialPlacement: s,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: w = !0,
              ...b
            } = Hl(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const g = Mi(i),
            m = vr(s),
            y = Mi(s) === s,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            k = f || (y || !w ? [sl(s)] : J_(s)),
            E = v !== "none";
          !f && E && k.push(...rA(s, w, v, S));
          const C = [s, ...k],
            D = await fA(t, b),
            M = [];
          let A = ((r = a.flip) == null ? void 0 : r.overflows) || [];
          if ((c && M.push(D[g]), d)) {
            const K = Z_(i, o, S);
            M.push(D[K[0]], D[K[1]]);
          }
          if (
            ((A = [...A, { placement: i, overflows: M }]),
            !M.every((K) => K <= 0))
          ) {
            var B, j;
            const K = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1,
              Q = C[K];
            if (
              Q &&
              (!(d === "alignment" ? m !== vr(Q) : !1) ||
                A.every((T) =>
                  vr(T.placement) === m ? T.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: K, overflows: A },
                reset: { placement: Q },
              };
            let H =
              (j = A.filter((V) => V.overflows[0] <= 0).sort(
                (V, T) => V.overflows[1] - T.overflows[1]
              )[0]) == null
                ? void 0
                : j.placement;
            if (!H)
              switch (h) {
                case "bestFit": {
                  var U;
                  const V =
                    (U = A.filter((T) => {
                      if (E) {
                        const N = vr(T.placement);
                        return N === m || N === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((N) => N > 0)
                          .reduce((N, O) => N + O, 0),
                      ])
                      .sort((T, N) => T[1] - N[1])[0]) == null
                      ? void 0
                      : U[0];
                  V && (H = V);
                  break;
                }
                case "initialPlacement":
                  H = s;
                  break;
              }
            if (i !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  },
  mA = new Set(["left", "top"]);
async function gA(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Mi(n),
    s = fo(n),
    l = vr(n) === "y",
    u = mA.has(o) ? -1 : 1,
    c = a && l ? -1 : 1,
    d = Hl(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    s && typeof v == "number" && (h = s === "end" ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const yA = function (e) {
  return (
    e === void 0 && (e = 0),
    {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const { x: i, y: a, placement: o, middlewareData: s } = t,
          l = await gA(t, e);
        return o === ((n = s.offset) == null ? void 0 : n.placement) &&
          (r = s.arrow) != null &&
          r.alignmentOffset
          ? {}
          : { x: i + l.x, y: a + l.y, data: { ...l, placement: o } };
      },
    }
  );
};
function Iw(e) {
  const t = Mt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = on(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = ol(n) !== a || ol(r) !== o;
  return s && ((n = a), (r = o)), { width: n, height: r, $: s };
}
function gp(e) {
  return Xe(e) ? e : e.contextElement;
}
function fi(e) {
  const t = gp(e);
  if (!on(t)) return nn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Iw(t);
  let o = (a ? ol(n.width) : n.width) / r,
    s = (a ? ol(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
const vA = nn(0);
function Fw(e) {
  const t = pt(e);
  return !pp() || !t.visualViewport
    ? vA
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function xA(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== pt(e)) ? !1 : t;
}
function Or(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    a = gp(e);
  let o = nn(1);
  t && (r ? Xe(r) && (o = fi(r)) : (o = fi(e)));
  const s = xA(a, n, r) ? Fw(a) : nn(0);
  let l = (i.left + s.x) / o.x,
    u = (i.top + s.y) / o.y,
    c = i.width / o.x,
    d = i.height / o.y;
  if (a) {
    const f = pt(a),
      h = r && Xe(r) ? pt(r) : r;
    let v = f,
      w = gd(v);
    for (; w && r && h !== v; ) {
      const b = fi(w),
        g = w.getBoundingClientRect(),
        m = Mt(w),
        y = g.left + (w.clientLeft + parseFloat(m.paddingLeft)) * b.x,
        S = g.top + (w.clientTop + parseFloat(m.paddingTop)) * b.y;
      (l *= b.x),
        (u *= b.y),
        (c *= b.x),
        (d *= b.y),
        (l += y),
        (u += S),
        (v = pt(w)),
        (w = gd(v));
    }
  }
  return ll({ width: c, height: d, x: l, y: u });
}
function yp(e, t) {
  const n = Wl(e).scrollLeft;
  return t ? t.left + n : Or(ln(e)).left + n;
}
function Vw(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : yp(e, r)),
    a = r.top + t.scrollTop;
  return { x: i, y: a };
}
function wA(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const a = i === "fixed",
    o = ln(r),
    s = t ? Yl(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = nn(1);
  const c = nn(0),
    d = on(r);
  if (
    (d || (!d && !a)) &&
    ((Vi(r) !== "body" || co(o)) && (l = Wl(r)), on(r))
  ) {
    const h = Or(r);
    (u = fi(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
  }
  const f = o && !d && !a ? Vw(o, l, !0) : nn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function bA(e) {
  return Array.from(e.getClientRects());
}
function SA(e) {
  const t = ln(e),
    n = Wl(e),
    r = e.ownerDocument.body,
    i = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + yp(e);
  const s = -n.scrollTop;
  return (
    Mt(r).direction === "rtl" && (o += Er(t.clientWidth, r.clientWidth) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function kA(e, t) {
  const n = pt(e),
    r = ln(e),
    i = n.visualViewport;
  let a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    l = 0;
  if (i) {
    (a = i.width), (o = i.height);
    const u = pp();
    (!u || (u && t === "fixed")) && ((s = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: a, height: o, x: s, y: l };
}
const DA = new Set(["absolute", "fixed"]);
function CA(e, t) {
  const n = Or(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = on(e) ? fi(e) : nn(1),
    o = e.clientWidth * a.x,
    s = e.clientHeight * a.y,
    l = i * a.x,
    u = r * a.y;
  return { width: o, height: s, x: l, y: u };
}
function kg(e, t, n) {
  let r;
  if (t === "viewport") r = kA(e, n);
  else if (t === "document") r = SA(ln(e));
  else if (Xe(t)) r = CA(t, n);
  else {
    const i = Fw(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return ll(r);
}
function Bw(e, t) {
  const n = nr(e);
  return n === t || !Xe(n) || Ei(n)
    ? !1
    : Mt(n).position === "fixed" || Bw(n, t);
}
function EA(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = qa(e, [], !1).filter((s) => Xe(s) && Vi(s) !== "body"),
    i = null;
  const a = Mt(e).position === "fixed";
  let o = a ? nr(e) : e;
  for (; Xe(o) && !Ei(o); ) {
    const s = Mt(o),
      l = fp(o);
    !l && s.position === "fixed" && (i = null),
      (
        a
          ? !l && !i
          : (!l && s.position === "static" && !!i && DA.has(i.position)) ||
            (co(o) && !l && Bw(e, o))
      )
        ? (r = r.filter((c) => c !== o))
        : (i = s),
      (o = nr(o));
  }
  return t.set(e, r), r;
}
function PA(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Yl(t)
          ? []
          : EA(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = o[0],
    l = o.reduce((u, c) => {
      const d = kg(t, c, i);
      return (
        (u.top = Er(d.top, u.top)),
        (u.right = Pi(d.right, u.right)),
        (u.bottom = Pi(d.bottom, u.bottom)),
        (u.left = Er(d.left, u.left)),
        u
      );
    }, kg(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function MA(e) {
  const { width: t, height: n } = Iw(e);
  return { width: t, height: n };
}
function TA(e, t, n) {
  const r = on(t),
    i = ln(t),
    a = n === "fixed",
    o = Or(e, !0, a, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = nn(0);
  function u() {
    l.x = yp(i);
  }
  if (r || (!r && !a))
    if (((Vi(t) !== "body" || co(i)) && (s = Wl(t)), r)) {
      const h = Or(t, !0, a, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else i && u();
  a && !r && i && u();
  const c = i && !r && !a ? Vw(i, s) : nn(0),
    d = o.left + s.scrollLeft - l.x - c.x,
    f = o.top + s.scrollTop - l.y - c.y;
  return { x: d, y: f, width: o.width, height: o.height };
}
function Vu(e) {
  return Mt(e).position === "static";
}
function Dg(e, t) {
  if (!on(e) || Mt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return ln(e) === n && (n = n.ownerDocument.body), n;
}
function Yw(e, t) {
  const n = pt(e);
  if (Yl(e)) return n;
  if (!on(e)) {
    let i = nr(e);
    for (; i && !Ei(i); ) {
      if (Xe(i) && !Vu(i)) return i;
      i = nr(i);
    }
    return n;
  }
  let r = Dg(e, t);
  for (; r && B_(r) && Vu(r); ) r = Dg(r, t);
  return r && Ei(r) && Vu(r) && !fp(r) ? n : r || $_(e) || n;
}
const NA = async function (e) {
  const t = this.getOffsetParent || Yw,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: TA(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function _A(e) {
  return Mt(e).direction === "rtl";
}
const AA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wA,
  getDocumentElement: ln,
  getClippingRect: PA,
  getOffsetParent: Yw,
  getElementRects: NA,
  getClientRects: bA,
  getDimensions: MA,
  getScale: fi,
  isElement: Xe,
  isRTL: _A,
};
function Ww(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function RA(e, t) {
  let n = null,
    r;
  const i = ln(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function o(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((s || t(), !f || !h)) return;
    const v = Yo(d),
      w = Yo(i.clientWidth - (c + f)),
      b = Yo(i.clientHeight - (d + h)),
      g = Yo(c),
      y = {
        rootMargin: -v + "px " + -w + "px " + -b + "px " + -g + "px",
        threshold: Er(0, Pi(1, l)) || 1,
      };
    let S = !0;
    function k(E) {
      const C = E[0].intersectionRatio;
      if (C !== l) {
        if (!S) return o();
        C
          ? o(!1, C)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      C === 1 && !Ww(u, e.getBoundingClientRect()) && o(), (S = !1);
    }
    try {
      n = new IntersectionObserver(k, { ...y, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(k, y);
    }
    n.observe(e);
  }
  return o(!0), a;
}
function OA(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = gp(e),
    c = i || a ? [...(u ? qa(u) : []), ...qa(t)] : [];
  c.forEach((g) => {
    i && g.addEventListener("scroll", n, { passive: !0 }),
      a && g.addEventListener("resize", n);
  });
  const d = u && s ? RA(u, n) : null;
  let f = -1,
    h = null;
  o &&
    ((h = new ResizeObserver((g) => {
      let [m] = g;
      m &&
        m.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n();
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let v,
    w = l ? Or(e) : null;
  l && b();
  function b() {
    const g = Or(e);
    w && !Ww(w, g) && n(), (w = g), (v = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var g;
      c.forEach((m) => {
        i && m.removeEventListener("scroll", n),
          a && m.removeEventListener("resize", n);
      }),
        d == null || d(),
        (g = h) == null || g.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const jA = yA,
  LA = hA,
  Cg = pA,
  IA = (e, t, n) => {
    const r = new Map(),
      i = { platform: AA, ...n },
      a = { ...i.platform, _c: r };
    return dA(e, t, { ...i, platform: a });
  };
var FA = typeof document < "u",
  VA = function () {},
  gs = FA ? x.useLayoutEffect : VA;
function cl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!cl(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const a = i[r];
      if (!(a === "_owner" && e.$$typeof) && !cl(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Hw(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Eg(e, t) {
  const n = Hw(e);
  return Math.round(t * n) / n;
}
function Bu(e) {
  const t = x.useRef(e);
  return (
    gs(() => {
      t.current = e;
    }),
    t
  );
}
function BA(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = x.useState(r);
  cl(f, r) || h(r);
  const [v, w] = x.useState(null),
    [b, g] = x.useState(null),
    m = x.useCallback((T) => {
      T !== E.current && ((E.current = T), w(T));
    }, []),
    y = x.useCallback((T) => {
      T !== C.current && ((C.current = T), g(T));
    }, []),
    S = a || v,
    k = o || b,
    E = x.useRef(null),
    C = x.useRef(null),
    D = x.useRef(c),
    M = l != null,
    A = Bu(l),
    B = Bu(i),
    j = Bu(u),
    U = x.useCallback(() => {
      if (!E.current || !C.current) return;
      const T = { placement: t, strategy: n, middleware: f };
      B.current && (T.platform = B.current),
        IA(E.current, C.current, T).then((N) => {
          const O = { ...N, isPositioned: j.current !== !1 };
          K.current &&
            !cl(D.current, O) &&
            ((D.current = O),
            hf.flushSync(() => {
              d(O);
            }));
        });
    }, [f, t, n, B, j]);
  gs(() => {
    u === !1 &&
      D.current.isPositioned &&
      ((D.current.isPositioned = !1), d((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const K = x.useRef(!1);
  gs(
    () => (
      (K.current = !0),
      () => {
        K.current = !1;
      }
    ),
    []
  ),
    gs(() => {
      if ((S && (E.current = S), k && (C.current = k), S && k)) {
        if (A.current) return A.current(S, k, U);
        U();
      }
    }, [S, k, U, A, M]);
  const Q = x.useMemo(
      () => ({ reference: E, floating: C, setReference: m, setFloating: y }),
      [m, y]
    ),
    H = x.useMemo(() => ({ reference: S, floating: k }), [S, k]),
    V = x.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!H.floating) return T;
      const N = Eg(H.floating, c.x),
        O = Eg(H.floating, c.y);
      return s
        ? {
            ...T,
            transform: "translate(" + N + "px, " + O + "px)",
            ...(Hw(H.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: O };
    }, [n, s, H.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: U, refs: Q, elements: H, floatingStyles: V }),
    [c, U, Q, H, V]
  );
}
const YA = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Cg({ element: r.current, padding: i }).fn(n)
            : {}
          : r
          ? Cg({ element: r, padding: i }).fn(n)
          : {};
      },
    };
  },
  WA = (e, t) => ({ ...jA(e), options: [e, t] }),
  HA = (e, t) => ({ ...LA(e), options: [e, t] }),
  zA = (e, t) => ({ ...YA(e), options: [e, t] }),
  $A = { ...iy };
let Pg = !1,
  UA = 0;
const Mg = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + UA++;
function KA() {
  const [e, t] = x.useState(() => (Pg ? Mg() : void 0));
  return (
    ul(() => {
      e == null && t(Mg());
    }, []),
    x.useEffect(() => {
      Pg = !0;
    }, []),
    e
  );
}
const QA = $A.useId,
  zw = QA || KA,
  GA = x.forwardRef(function (t, n) {
    const {
        context: {
          placement: r,
          elements: { floating: i },
          middlewareData: { arrow: a, shift: o },
        },
        width: s = 14,
        height: l = 7,
        tipRadius: u = 0,
        strokeWidth: c = 0,
        staticOffset: d,
        stroke: f,
        d: h,
        style: { transform: v, ...w } = {},
        ...b
      } = t,
      g = zw(),
      [m, y] = x.useState(!1);
    if (
      (ul(() => {
        if (!i) return;
        Mt(i).direction === "rtl" && y(!0);
      }, [i]),
      !i)
    )
      return null;
    const [S, k] = r.split("-"),
      E = S === "top" || S === "bottom";
    let C = d;
    ((E && o != null && o.x) || (!E && o != null && o.y)) && (C = null);
    const D = c * 2,
      M = D / 2,
      A = (s / 2) * (u / -8 + 1),
      B = ((l / 2) * u) / 4,
      j = !!h,
      U = C && k === "end" ? "bottom" : "top";
    let K = C && k === "end" ? "right" : "left";
    C && m && (K = k === "end" ? "left" : "right");
    const Q = (a == null ? void 0 : a.x) != null ? C || a.x : "",
      H = (a == null ? void 0 : a.y) != null ? C || a.y : "",
      V =
        h ||
        "M0,0" +
          (" H" + s) +
          (" L" + (s - A) + "," + (l - B)) +
          (" Q" + s / 2 + "," + l + " " + A + "," + (l - B)) +
          " Z",
      T = {
        top: j ? "rotate(180deg)" : "",
        left: j ? "rotate(90deg)" : "rotate(-90deg)",
        bottom: j ? "" : "rotate(180deg)",
        right: j ? "rotate(-90deg)" : "rotate(90deg)",
      }[S];
    return p.jsxs("svg", {
      ...b,
      "aria-hidden": !0,
      ref: n,
      width: j ? s : s + D,
      height: s,
      viewBox: "0 0 " + s + " " + (l > s ? l : s),
      style: {
        position: "absolute",
        pointerEvents: "none",
        [K]: Q,
        [U]: H,
        [S]: E || j ? "100%" : "calc(100% - " + D / 2 + "px)",
        transform: [T, v].filter((N) => !!N).join(" "),
        ...w,
      },
      children: [
        D > 0 &&
          p.jsx("path", {
            clipPath: "url(#" + g + ")",
            fill: "none",
            stroke: f,
            strokeWidth: D + (h ? 0 : 1),
            d: V,
          }),
        p.jsx("path", { stroke: D && !h ? b.fill : "none", d: V }),
        p.jsx("clipPath", {
          id: g,
          children: p.jsx("rect", {
            x: -M,
            y: M * (j ? -1 : 1),
            width: s + D,
            height: s,
          }),
        }),
      ],
    });
  });
function qA() {
  const e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((i) => i(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, new Set()), e.get(t).add(n);
    },
    off(t, n) {
      var r;
      (r = e.get(t)) == null || r.delete(n);
    },
  };
}
const XA = x.createContext(null),
  ZA = x.createContext(null),
  JA = () => {
    var e;
    return ((e = x.useContext(XA)) == null ? void 0 : e.id) || null;
  },
  eR = () => x.useContext(ZA);
function tR(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    i = zw(),
    a = x.useRef({}),
    [o] = x.useState(() => qA()),
    s = JA() != null,
    [l, u] = x.useState(r.reference),
    c = cA((h, v, w) => {
      (a.current.openEvent = h ? v : void 0),
        o.emit("openchange", { open: h, event: v, reason: w, nested: s }),
        n == null || n(h, v, w);
    }),
    d = x.useMemo(() => ({ setPositionReference: u }), []),
    f = x.useMemo(
      () => ({
        reference: l || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [l, r.reference, r.floating]
    );
  return x.useMemo(
    () => ({
      dataRef: a,
      open: t,
      onOpenChange: c,
      elements: f,
      events: o,
      floatingId: i,
      refs: d,
    }),
    [t, c, f, o, i, d]
  );
}
function nR(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = tR({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    i = r.elements,
    [a, o] = x.useState(null),
    [s, l] = x.useState(null),
    c = (i == null ? void 0 : i.domReference) || a,
    d = x.useRef(null),
    f = eR();
  ul(() => {
    c && (d.current = c);
  }, [c]);
  const h = BA({ ...e, elements: { ...i, ...(s && { reference: s }) } }),
    v = x.useCallback(
      (y) => {
        const S = Xe(y)
          ? {
              getBoundingClientRect: () => y.getBoundingClientRect(),
              getClientRects: () => y.getClientRects(),
              contextElement: y,
            }
          : y;
        l(S), h.refs.setReference(S);
      },
      [h.refs]
    ),
    w = x.useCallback(
      (y) => {
        (Xe(y) || y === null) && ((d.current = y), o(y)),
          (Xe(h.refs.reference.current) ||
            h.refs.reference.current === null ||
            (y !== null && !Xe(y))) &&
            h.refs.setReference(y);
      },
      [h.refs]
    ),
    b = x.useMemo(
      () => ({
        ...h.refs,
        setReference: w,
        setPositionReference: v,
        domReference: d,
      }),
      [h.refs, w, v]
    ),
    g = x.useMemo(() => ({ ...h.elements, domReference: c }), [h.elements, c]),
    m = x.useMemo(
      () => ({ ...h, ...r, refs: b, elements: g, nodeId: t }),
      [h, b, g, t, r]
    );
  return (
    ul(() => {
      r.dataRef.current.floatingContext = m;
      const y = f == null ? void 0 : f.nodesRef.current.find((S) => S.id === t);
      y && (y.context = m);
    }),
    x.useMemo(() => ({ ...h, context: m, refs: b, elements: g }), [h, b, g, m])
  );
}
/*!
  react-datepicker v8.4.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/ var vd = function (t, n) {
  return (
    (vd =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, i) {
          r.__proto__ = i;
        }) ||
      function (r, i) {
        for (var a in i)
          Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
      }),
    vd(t, n)
  );
};
function Ie(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  vd(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var te = function () {
  return (
    (te =
      Object.assign ||
      function (n) {
        for (var r, i = 1, a = arguments.length; i < a; i++) {
          r = arguments[i];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
        }
        return n;
      }),
    te.apply(this, arguments)
  );
};
function qt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var rR = function (e) {
    var t = e.showTimeSelectOnly,
      n = t === void 0 ? !1 : t,
      r = e.showTime,
      i = r === void 0 ? !1 : r,
      a = e.className,
      o = e.children,
      s = n ? "Choose Time" : "Choose Date".concat(i ? " and Time" : "");
    return _.createElement(
      "div",
      { className: a, role: "dialog", "aria-label": s, "aria-modal": "true" },
      o
    );
  },
  iR = function (e, t) {
    var n = x.useRef(null),
      r = x.useRef(e);
    r.current = e;
    var i = x.useCallback(
      function (a) {
        var o,
          s =
            (a.composed &&
              a.composedPath &&
              a.composedPath().find(function (l) {
                return l instanceof Node;
              })) ||
            a.target;
        n.current &&
          !n.current.contains(s) &&
          ((t && s instanceof HTMLElement && s.classList.contains(t)) ||
            (o = r.current) === null ||
            o === void 0 ||
            o.call(r, a));
      },
      [t]
    );
    return (
      x.useEffect(
        function () {
          return (
            document.addEventListener("mousedown", i),
            function () {
              document.removeEventListener("mousedown", i);
            }
          );
        },
        [i]
      ),
      n
    );
  },
  zl = function (e) {
    var t = e.children,
      n = e.onClickOutside,
      r = e.className,
      i = e.containerRef,
      a = e.style,
      o = e.ignoreClass,
      s = iR(n, o);
    return _.createElement(
      "div",
      {
        className: r,
        style: a,
        ref: function (l) {
          (s.current = l), i && (i.current = l);
        },
      },
      t
    );
  },
  L;
(function (e) {
  (e.ArrowUp = "ArrowUp"),
    (e.ArrowDown = "ArrowDown"),
    (e.ArrowLeft = "ArrowLeft"),
    (e.ArrowRight = "ArrowRight"),
    (e.PageUp = "PageUp"),
    (e.PageDown = "PageDown"),
    (e.Home = "Home"),
    (e.End = "End"),
    (e.Enter = "Enter"),
    (e.Space = " "),
    (e.Tab = "Tab"),
    (e.Escape = "Escape"),
    (e.Backspace = "Backspace"),
    (e.X = "x");
})(L || (L = {}));
function $w() {
  var e = typeof window < "u" ? window : globalThis;
  return e;
}
var po = 12;
function ie(e) {
  if (e == null) return new Date();
  var t = typeof e == "string" ? S_(e) : Y(e);
  return $l(t) ? t : new Date();
}
function Yu(e, t, n, r, i) {
  i === void 0 && (i = ie());
  for (
    var a = Ti(n) || Ti(vp()), o = Array.isArray(t) ? t : [t], s = 0, l = o;
    s < l.length;
    s++
  ) {
    var u = l[s],
      c = g_(e, u, i, { locale: a });
    if ($l(c) && (!r || e === pe(c, u, n))) return c;
  }
  return null;
}
function $l(e, t) {
  return tl(e) && !Rr(e, new Date("1/1/1800"));
}
function pe(e, t, n) {
  if (n === "en")
    return gg(e, t, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0,
    });
  var r = n ? Ti(n) : void 0;
  return (
    n &&
      !r &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          n,
          '"].'
        )
      ),
    (r = r || Ti(vp())),
    gg(e, t, {
      locale: r,
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0,
    })
  );
}
function xt(e, t) {
  var n = t.dateFormat,
    r = t.locale,
    i = Array.isArray(n) && n.length > 0 ? n[0] : n;
  return (e && pe(e, i, r)) || "";
}
var Uw = " - ";
function aR(e, t, n) {
  if (!e) return "";
  var r = xt(e, n),
    i = t ? xt(t, n) : "";
  return "".concat(r).concat(Uw).concat(i);
}
function oR(e, t) {
  if (!(e != null && e.length)) return "";
  var n = e[0] ? xt(e[0], t) : "";
  if (e.length === 1) return n;
  if (e.length === 2 && e[1]) {
    var r = xt(e[1], t);
    return "".concat(n, ", ").concat(r);
  }
  var i = e.length - 1;
  return "".concat(n, " (+").concat(i, ")");
}
function Wu(e, t) {
  var n = t.hour,
    r = n === void 0 ? 0 : n,
    i = t.minute,
    a = i === void 0 ? 0 : i,
    o = t.second,
    s = o === void 0 ? 0 : o;
  return ps(hs(ms(e, s), a), r);
}
function sR(e) {
  return lp(e);
}
function lR(e, t) {
  return pe(e, "ddd", t);
}
function ys(e) {
  return Ar(e);
}
function Xn(e, t, n) {
  var r = Ti(t || vp());
  return Pn(e, { locale: r, weekStartsOn: n });
}
function wn(e) {
  return kw(e);
}
function la(e) {
  return Vl(e);
}
function Tg(e) {
  return pd(e);
}
function Ng() {
  return Ar(ie());
}
function _g(e) {
  return bw(e);
}
function uR(e) {
  return ST(e);
}
function cR(e) {
  return Sw(e);
}
function Ut(e, t) {
  return e && t ? w_(e, t) : !e && !t;
}
function Ge(e, t) {
  return e && t ? v_(e, t) : !e && !t;
}
function dl(e, t) {
  return e && t ? x_(e, t) : !e && !t;
}
function ee(e, t) {
  return e && t ? wT(e, t) : !e && !t;
}
function xr(e, t) {
  return e && t ? bN(e, t) : !e && !t;
}
function ua(e, t, n) {
  var r,
    i = Ar(t),
    a = bw(n);
  try {
    r = Ga(e, { start: i, end: a });
  } catch {
    r = !1;
  }
  return r;
}
function vp() {
  var e = $w();
  return e.__localeId__;
}
function Ti(e) {
  if (typeof e == "string") {
    var t = $w();
    return t.__localeData__ ? t.__localeData__[e] : void 0;
  } else return e;
}
function dR(e, t, n) {
  return t(pe(e, "EEEE", n));
}
function fR(e, t) {
  return pe(e, "EEEEEE", t);
}
function pR(e, t) {
  return pe(e, "EEE", t);
}
function xp(e, t) {
  return pe(wt(ie(), e), "LLLL", t);
}
function Kw(e, t) {
  return pe(wt(ie(), e), "LLL", t);
}
function hR(e, t) {
  return pe(Br(ie(), e), "QQQ", t);
}
function kt(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.maxDate,
    a = n.excludeDates,
    o = n.excludeDateIntervals,
    s = n.includeDates,
    l = n.includeDateIntervals,
    u = n.filterDate;
  return (
    ho(e, { minDate: r, maxDate: i }) ||
    (a &&
      a.some(function (c) {
        return c instanceof Date ? ee(e, c) : ee(e, c.date);
      })) ||
    (o &&
      o.some(function (c) {
        var d = c.start,
          f = c.end;
        return Ga(e, { start: d, end: f });
      })) ||
    (s &&
      !s.some(function (c) {
        return ee(e, c);
      })) ||
    (l &&
      !l.some(function (c) {
        var d = c.start,
          f = c.end;
        return Ga(e, { start: d, end: f });
      })) ||
    (u && !u(ie(e))) ||
    !1
  );
}
function wp(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.excludeDates,
    i = n.excludeDateIntervals;
  return i && i.length > 0
    ? i.some(function (a) {
        var o = a.start,
          s = a.end;
        return Ga(e, { start: o, end: s });
      })
    : (r &&
        r.some(function (a) {
          var o;
          return a instanceof Date
            ? ee(e, a)
            : ee(e, (o = a.date) !== null && o !== void 0 ? o : new Date());
        })) ||
        !1;
}
function Qw(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.maxDate,
    a = n.excludeDates,
    o = n.includeDates,
    s = n.filterDate;
  return (
    ho(e, { minDate: r ? kw(r) : void 0, maxDate: i ? Sw(i) : void 0 }) ||
    (a == null
      ? void 0
      : a.some(function (l) {
          return Ge(e, l instanceof Date ? l : l.date);
        })) ||
    (o &&
      !o.some(function (l) {
        return Ge(e, l);
      })) ||
    (s && !s(ie(e))) ||
    !1
  );
}
function Wo(e, t, n, r) {
  var i = G(e),
    a = $e(e),
    o = G(t),
    s = $e(t),
    l = G(r);
  return i === o && i === l
    ? a <= n && n <= s
    : i < o
    ? (l === i && a <= n) || (l === o && s >= n) || (l < o && l > i)
    : !1;
}
function mR(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.maxDate,
    a = n.excludeDates,
    o = n.includeDates;
  return (
    ho(e, { minDate: r, maxDate: i }) ||
    (a &&
      a.some(function (s) {
        return Ge(s instanceof Date ? s : s.date, e);
      })) ||
    (o &&
      !o.some(function (s) {
        return Ge(s, e);
      })) ||
    !1
  );
}
function Ho(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.maxDate,
    a = n.excludeDates,
    o = n.includeDates,
    s = n.filterDate;
  return (
    ho(e, { minDate: r, maxDate: i }) ||
    (a == null
      ? void 0
      : a.some(function (l) {
          return dl(e, l instanceof Date ? l : l.date);
        })) ||
    (o &&
      !o.some(function (l) {
        return dl(e, l);
      })) ||
    (s && !s(ie(e))) ||
    !1
  );
}
function zo(e, t, n) {
  if (!t || !n || !tl(t) || !tl(n)) return !1;
  var r = G(t),
    i = G(n);
  return r <= e && i >= e;
}
function vs(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.maxDate,
    a = n.excludeDates,
    o = n.includeDates,
    s = n.filterDate,
    l = new Date(e, 0, 1);
  return (
    ho(l, { minDate: r ? Vl(r) : void 0, maxDate: i ? Dw(i) : void 0 }) ||
    (a == null
      ? void 0
      : a.some(function (u) {
          return Ut(l, u instanceof Date ? u : u.date);
        })) ||
    (o &&
      !o.some(function (u) {
        return Ut(l, u);
      })) ||
    (s && !s(ie(l))) ||
    !1
  );
}
function $o(e, t, n, r) {
  var i = G(e),
    a = Dr(e),
    o = G(t),
    s = Dr(t),
    l = G(r);
  return i === o && i === l
    ? a <= n && n <= s
    : i < o
    ? (l === i && a <= n) || (l === o && s >= n) || (l < o && l > i)
    : !1;
}
function ho(e, t) {
  var n,
    r = t === void 0 ? {} : t,
    i = r.minDate,
    a = r.maxDate;
  return (n = (i && Di(e, i) < 0) || (a && Di(e, a) > 0)) !== null &&
    n !== void 0
    ? n
    : !1;
}
function Ag(e, t) {
  return t.some(function (n) {
    return vn(n) === vn(e) && xn(n) === xn(e) && qn(n) === qn(e);
  });
}
function Rg(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.excludeTimes,
    i = n.includeTimes,
    a = n.filterTime;
  return (r && Ag(e, r)) || (i && !Ag(e, i)) || (a && !a(e)) || !1;
}
function Og(e, t) {
  var n = t.minTime,
    r = t.maxTime;
  if (!n || !r) throw new Error("Both minTime and maxTime props required");
  var i = ie();
  (i = ps(i, vn(e))), (i = hs(i, xn(e))), (i = ms(i, qn(e)));
  var a = ie();
  (a = ps(a, vn(n))), (a = hs(a, xn(n))), (a = ms(a, qn(n)));
  var o = ie();
  (o = ps(o, vn(r))), (o = hs(o, xn(r))), (o = ms(o, qn(r)));
  var s;
  try {
    s = !Ga(i, { start: a, end: o });
  } catch {
    s = !1;
  }
  return s;
}
function jg(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.includeDates,
    a = Cr(e, 1);
  return (
    (r && nl(r, a) > 0) ||
    (i &&
      i.every(function (o) {
        return nl(o, a) > 0;
      })) ||
    !1
  );
}
function Lg(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.maxDate,
    i = n.includeDates,
    a = Yt(e, 1);
  return (
    (r && nl(a, r) > 0) ||
    (i &&
      i.every(function (o) {
        return nl(a, o) > 0;
      })) ||
    !1
  );
}
function gR(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.includeDates,
    a = Vl(e),
    o = Rw(a);
  return (
    (r && rl(r, o) > 0) ||
    (i &&
      i.every(function (s) {
        return rl(s, o) > 0;
      })) ||
    !1
  );
}
function yR(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.maxDate,
    i = n.includeDates,
    a = Dw(e),
    o = sp(a, 1);
  return (
    (r && rl(o, r) > 0) ||
    (i &&
      i.every(function (s) {
        return rl(o, s) > 0;
      })) ||
    !1
  );
}
function Ig(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.includeDates,
    a = Ci(e, 1);
  return (
    (r && il(r, a) > 0) ||
    (i &&
      i.every(function (o) {
        return il(o, a) > 0;
      })) ||
    !1
  );
}
function vR(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.minDate,
    i = n.yearItemNumber,
    a = i === void 0 ? po : i,
    o = la(Ci(e, a)),
    s = Yn(o, a).endPeriod,
    l = r && G(r);
  return (l && l > s) || !1;
}
function Fg(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.maxDate,
    i = n.includeDates,
    a = gn(e, 1);
  return (
    (r && il(a, r) > 0) ||
    (i &&
      i.every(function (o) {
        return il(a, o) > 0;
      })) ||
    !1
  );
}
function xR(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.maxDate,
    i = n.yearItemNumber,
    a = i === void 0 ? po : i,
    o = gn(e, a),
    s = Yn(o, a).startPeriod,
    l = r && G(r);
  return (l && l < s) || !1;
}
function Gw(e) {
  var t = e.minDate,
    n = e.includeDates;
  if (n && t) {
    var r = n.filter(function (i) {
      return Di(i, t) >= 0;
    });
    return cg(r);
  } else return n ? cg(n) : t;
}
function qw(e) {
  var t = e.maxDate,
    n = e.includeDates;
  if (n && t) {
    var r = n.filter(function (i) {
      return Di(i, t) <= 0;
    });
    return ug(r);
  } else return n ? ug(n) : t;
}
function Vg(e, t) {
  var n;
  e === void 0 && (e = []),
    t === void 0 && (t = "react-datepicker__day--highlighted");
  for (var r = new Map(), i = 0, a = e.length; i < a; i++) {
    var o = e[i];
    if (yn(o)) {
      var s = pe(o, "MM.dd.yyyy"),
        l = r.get(s) || [];
      l.includes(t) || (l.push(t), r.set(s, l));
    } else if (typeof o == "object") {
      var u = Object.keys(o),
        c = (n = u[0]) !== null && n !== void 0 ? n : "",
        d = o[c];
      if (typeof c == "string" && Array.isArray(d))
        for (var f = 0, h = d.length; f < h; f++) {
          var v = d[f];
          if (v) {
            var s = pe(v, "MM.dd.yyyy"),
              l = r.get(s) || [];
            l.includes(c) || (l.push(c), r.set(s, l));
          }
        }
    }
  }
  return r;
}
function wR(e, t) {
  return e.length !== t.length
    ? !1
    : e.every(function (n, r) {
        return n === t[r];
      });
}
function bR(e, t) {
  e === void 0 && (e = []),
    t === void 0 && (t = "react-datepicker__day--holidays");
  var n = new Map();
  return (
    e.forEach(function (r) {
      var i = r.date,
        a = r.holidayName;
      if (yn(i)) {
        var o = pe(i, "MM.dd.yyyy"),
          s = n.get(o) || { className: "", holidayNames: [] };
        if (
          !("className" in s && s.className === t && wR(s.holidayNames, [a]))
        ) {
          s.className = t;
          var l = s.holidayNames;
          (s.holidayNames = l ? qt(qt([], l, !0), [a], !1) : [a]), n.set(o, s);
        }
      }
    }),
    n
  );
}
function SR(e, t, n, r, i) {
  for (var a = i.length, o = [], s = 0; s < a; s++) {
    var l = e,
      u = i[s];
    u && ((l = gT(l, vn(u))), (l = fd(l, xn(u))), (l = xT(l, qn(u))));
    var c = fd(e, (n + 1) * r);
    tr(l, t) && Rr(l, c) && u != null && o.push(u);
  }
  return o;
}
function Bg(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function Yn(e, t) {
  t === void 0 && (t = po);
  var n = Math.ceil(G(e) / t) * t,
    r = n - (t - 1);
  return { startPeriod: r, endPeriod: n };
}
function kR(e) {
  var t = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 24);
  return Math.round((+n - +t) / 36e5);
}
function Yg(e) {
  var t = e.getSeconds(),
    n = e.getMilliseconds();
  return Y(e.getTime() - t * 1e3 - n);
}
function DR(e, t) {
  return Yg(e).getTime() === Yg(t).getTime();
}
function Wg(e) {
  if (!yn(e)) throw new Error("Invalid date");
  var t = new Date(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Hg(e, t) {
  if (!yn(e) || !yn(t)) throw new Error("Invalid date received");
  var n = Wg(e),
    r = Wg(t);
  return Rr(n, r);
}
function Xw(e) {
  return e.key === L.Space;
}
var CR = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (
        (r.inputRef = _.createRef()),
        (r.onTimeChange = function (i) {
          var a, o;
          r.setState({ time: i });
          var s = r.props.date,
            l = s instanceof Date && !isNaN(+s),
            u = l ? s : new Date();
          if (i != null && i.includes(":")) {
            var c = i.split(":"),
              d = c[0],
              f = c[1];
            u.setHours(Number(d)), u.setMinutes(Number(f));
          }
          (o = (a = r.props).onChange) === null || o === void 0 || o.call(a, u);
        }),
        (r.renderTimeInput = function () {
          var i = r.state.time,
            a = r.props,
            o = a.date,
            s = a.timeString,
            l = a.customTimeInput;
          return l
            ? x.cloneElement(l, { date: o, value: i, onChange: r.onTimeChange })
            : _.createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                ref: r.inputRef,
                onClick: function () {
                  var u;
                  (u = r.inputRef.current) === null ||
                    u === void 0 ||
                    u.focus();
                },
                required: !0,
                value: i,
                onChange: function (u) {
                  r.onTimeChange(u.target.value || s);
                },
              });
        }),
        (r.state = { time: r.props.timeString }),
        r
      );
    }
    return (
      (t.getDerivedStateFromProps = function (n, r) {
        return n.timeString !== r.time ? { time: n.timeString } : null;
      }),
      (t.prototype.render = function () {
        return _.createElement(
          "div",
          { className: "react-datepicker__input-time-container" },
          _.createElement(
            "div",
            { className: "react-datepicker-time__caption" },
            this.props.timeInputLabel
          ),
          _.createElement(
            "div",
            { className: "react-datepicker-time__input-container" },
            _.createElement(
              "div",
              { className: "react-datepicker-time__input" },
              this.renderTimeInput()
            )
          )
        );
      }),
      t
    );
  })(x.Component),
  ER = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.dayEl = x.createRef()),
        (n.handleClick = function (r) {
          !n.isDisabled() && n.props.onClick && n.props.onClick(r);
        }),
        (n.handleMouseEnter = function (r) {
          !n.isDisabled() && n.props.onMouseEnter && n.props.onMouseEnter(r);
        }),
        (n.handleOnKeyDown = function (r) {
          var i,
            a,
            o = r.key;
          o === L.Space && (r.preventDefault(), (r.key = L.Enter)),
            (a = (i = n.props).handleOnKeyDown) === null ||
              a === void 0 ||
              a.call(i, r);
        }),
        (n.isSameDay = function (r) {
          return ee(n.props.day, r);
        }),
        (n.isKeyboardSelected = function () {
          var r;
          if (n.props.disabledKeyboardNavigation) return !1;
          var i = n.props.selectsMultiple
              ? (r = n.props.selectedDates) === null || r === void 0
                ? void 0
                : r.some(function (o) {
                    return n.isSameDayOrWeek(o);
                  })
              : n.isSameDayOrWeek(n.props.selected),
            a = n.props.preSelection && n.isDisabled(n.props.preSelection);
          return !i && n.isSameDayOrWeek(n.props.preSelection) && !a;
        }),
        (n.isDisabled = function (r) {
          return (
            r === void 0 && (r = n.props.day),
            kt(r, {
              minDate: n.props.minDate,
              maxDate: n.props.maxDate,
              excludeDates: n.props.excludeDates,
              excludeDateIntervals: n.props.excludeDateIntervals,
              includeDateIntervals: n.props.includeDateIntervals,
              includeDates: n.props.includeDates,
              filterDate: n.props.filterDate,
            })
          );
        }),
        (n.isExcluded = function () {
          return wp(n.props.day, {
            excludeDates: n.props.excludeDates,
            excludeDateIntervals: n.props.excludeDateIntervals,
          });
        }),
        (n.isStartOfWeek = function () {
          return ee(
            n.props.day,
            Xn(n.props.day, n.props.locale, n.props.calendarStartDay)
          );
        }),
        (n.isSameWeek = function (r) {
          return (
            n.props.showWeekPicker &&
            ee(r, Xn(n.props.day, n.props.locale, n.props.calendarStartDay))
          );
        }),
        (n.isSameDayOrWeek = function (r) {
          return n.isSameDay(r) || n.isSameWeek(r);
        }),
        (n.getHighLightedClass = function () {
          var r = n.props,
            i = r.day,
            a = r.highlightDates;
          if (!a) return !1;
          var o = pe(i, "MM.dd.yyyy");
          return a.get(o);
        }),
        (n.getHolidaysClass = function () {
          var r,
            i = n.props,
            a = i.day,
            o = i.holidays;
          if (!o) return [void 0];
          var s = pe(a, "MM.dd.yyyy");
          return o.has(s)
            ? [(r = o.get(s)) === null || r === void 0 ? void 0 : r.className]
            : [void 0];
        }),
        (n.isInRange = function () {
          var r = n.props,
            i = r.day,
            a = r.startDate,
            o = r.endDate;
          return !a || !o ? !1 : ua(i, a, o);
        }),
        (n.isInSelectingRange = function () {
          var r,
            i = n.props,
            a = i.day,
            o = i.selectsStart,
            s = i.selectsEnd,
            l = i.selectsRange,
            u = i.selectsDisabledDaysInRange,
            c = i.startDate,
            d = i.endDate,
            f =
              (r = n.props.selectingDate) !== null && r !== void 0
                ? r
                : n.props.preSelection;
          return !(o || s || l) || !f || (!u && n.isDisabled())
            ? !1
            : o && d && (Rr(f, d) || xr(f, d))
            ? ua(a, f, d)
            : (s && c && (tr(f, c) || xr(f, c))) ||
              (l && c && !d && (tr(f, c) || xr(f, c)))
            ? ua(a, c, f)
            : !1;
        }),
        (n.isSelectingRangeStart = function () {
          var r;
          if (!n.isInSelectingRange()) return !1;
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.selectsStart,
            l =
              (r = n.props.selectingDate) !== null && r !== void 0
                ? r
                : n.props.preSelection;
          return s ? ee(a, l) : ee(a, o);
        }),
        (n.isSelectingRangeEnd = function () {
          var r;
          if (!n.isInSelectingRange()) return !1;
          var i = n.props,
            a = i.day,
            o = i.endDate,
            s = i.selectsEnd,
            l = i.selectsRange,
            u =
              (r = n.props.selectingDate) !== null && r !== void 0
                ? r
                : n.props.preSelection;
          return s || l ? ee(a, u) : ee(a, o);
        }),
        (n.isRangeStart = function () {
          var r = n.props,
            i = r.day,
            a = r.startDate,
            o = r.endDate;
          return !a || !o ? !1 : ee(a, i);
        }),
        (n.isRangeEnd = function () {
          var r = n.props,
            i = r.day,
            a = r.startDate,
            o = r.endDate;
          return !a || !o ? !1 : ee(o, i);
        }),
        (n.isWeekend = function () {
          var r = yN(n.props.day);
          return r === 0 || r === 6;
        }),
        (n.isAfterMonth = function () {
          return (
            n.props.month !== void 0 &&
            (n.props.month + 1) % 12 === $e(n.props.day)
          );
        }),
        (n.isBeforeMonth = function () {
          return (
            n.props.month !== void 0 &&
            ($e(n.props.day) + 1) % 12 === n.props.month
          );
        }),
        (n.isCurrentDay = function () {
          return n.isSameDay(ie());
        }),
        (n.isSelected = function () {
          var r;
          return n.props.selectsMultiple
            ? (r = n.props.selectedDates) === null || r === void 0
              ? void 0
              : r.some(function (i) {
                  return n.isSameDayOrWeek(i);
                })
            : n.isSameDayOrWeek(n.props.selected);
        }),
        (n.getClassNames = function (r) {
          var i = n.props.dayClassName ? n.props.dayClassName(r) : void 0;
          return Ve(
            "react-datepicker__day",
            i,
            "react-datepicker__day--" + lR(n.props.day),
            {
              "react-datepicker__day--disabled": n.isDisabled(),
              "react-datepicker__day--excluded": n.isExcluded(),
              "react-datepicker__day--selected": n.isSelected(),
              "react-datepicker__day--keyboard-selected":
                n.isKeyboardSelected(),
              "react-datepicker__day--range-start": n.isRangeStart(),
              "react-datepicker__day--range-end": n.isRangeEnd(),
              "react-datepicker__day--in-range": n.isInRange(),
              "react-datepicker__day--in-selecting-range":
                n.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start":
                n.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end":
                n.isSelectingRangeEnd(),
              "react-datepicker__day--today": n.isCurrentDay(),
              "react-datepicker__day--weekend": n.isWeekend(),
              "react-datepicker__day--outside-month":
                n.isAfterMonth() || n.isBeforeMonth(),
            },
            n.getHighLightedClass(),
            n.getHolidaysClass()
          );
        }),
        (n.getAriaLabel = function () {
          var r = n.props,
            i = r.day,
            a = r.ariaLabelPrefixWhenEnabled,
            o = a === void 0 ? "Choose" : a,
            s = r.ariaLabelPrefixWhenDisabled,
            l = s === void 0 ? "Not available" : s,
            u = n.isDisabled() || n.isExcluded() ? l : o;
          return "".concat(u, " ").concat(pe(i, "PPPP", n.props.locale));
        }),
        (n.getTitle = function () {
          var r = n.props,
            i = r.day,
            a = r.holidays,
            o = a === void 0 ? new Map() : a,
            s = r.excludeDates,
            l = pe(i, "MM.dd.yyyy"),
            u = [];
          return (
            o.has(l) && u.push.apply(u, o.get(l).holidayNames),
            n.isExcluded() &&
              u.push(
                s == null
                  ? void 0
                  : s
                      .filter(function (c) {
                        return c instanceof Date
                          ? ee(c, i)
                          : ee(c == null ? void 0 : c.date, i);
                      })
                      .map(function (c) {
                        if (!(c instanceof Date))
                          return c == null ? void 0 : c.message;
                      })
              ),
            u.join(", ")
          );
        }),
        (n.getTabIndex = function () {
          var r = n.props.selected,
            i = n.props.preSelection,
            a =
              !(
                n.props.showWeekPicker &&
                (n.props.showWeekNumber || !n.isStartOfWeek())
              ) &&
              (n.isKeyboardSelected() || (n.isSameDay(r) && ee(i, r)))
                ? 0
                : -1;
          return a;
        }),
        (n.handleFocusDay = function () {
          var r;
          n.shouldFocusDay() &&
            ((r = n.dayEl.current) === null ||
              r === void 0 ||
              r.focus({ preventScroll: !0 }));
        }),
        (n.renderDayContents = function () {
          return (n.props.monthShowsDuplicateDaysEnd && n.isAfterMonth()) ||
            (n.props.monthShowsDuplicateDaysStart && n.isBeforeMonth())
            ? null
            : n.props.renderDayContents
            ? n.props.renderDayContents(yg(n.props.day), n.props.day)
            : yg(n.props.day);
        }),
        (n.render = function () {
          return _.createElement(
            "div",
            {
              ref: n.dayEl,
              className: n.getClassNames(n.props.day),
              onKeyDown: n.handleOnKeyDown,
              onClick: n.handleClick,
              onMouseEnter: n.props.usePointerEvent
                ? void 0
                : n.handleMouseEnter,
              onPointerEnter: n.props.usePointerEvent
                ? n.handleMouseEnter
                : void 0,
              tabIndex: n.getTabIndex(),
              "aria-label": n.getAriaLabel(),
              role: "option",
              title: n.getTitle(),
              "aria-disabled": n.isDisabled(),
              "aria-current": n.isCurrentDay() ? "date" : void 0,
              "aria-selected": n.isSelected() || n.isInRange(),
            },
            n.renderDayContents(),
            n.getTitle() !== "" &&
              _.createElement("span", { className: "overlay" }, n.getTitle())
          );
        }),
        n
      );
    }
    return (
      (t.prototype.componentDidMount = function () {
        this.handleFocusDay();
      }),
      (t.prototype.componentDidUpdate = function () {
        this.handleFocusDay();
      }),
      (t.prototype.shouldFocusDay = function () {
        var n = !1;
        return (
          this.getTabIndex() === 0 &&
            this.isSameDay(this.props.preSelection) &&
            ((!document.activeElement ||
              document.activeElement === document.body) &&
              (n = !0),
            this.props.inline && !this.props.shouldFocusDayInline && (n = !1),
            this.isDayActiveElement() && (n = !0),
            this.isDuplicateDay() && (n = !1)),
          n
        );
      }),
      (t.prototype.isDayActiveElement = function () {
        var n, r, i;
        return (
          ((r =
            (n = this.props.containerRef) === null || n === void 0
              ? void 0
              : n.current) === null || r === void 0
            ? void 0
            : r.contains(document.activeElement)) &&
          ((i = document.activeElement) === null || i === void 0
            ? void 0
            : i.classList.contains("react-datepicker__day"))
        );
      }),
      (t.prototype.isDuplicateDay = function () {
        return (
          (this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth()) ||
          (this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth())
        );
      }),
      t
    );
  })(x.Component),
  PR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.weekNumberEl = x.createRef()),
        (n.handleClick = function (r) {
          n.props.onClick && n.props.onClick(r);
        }),
        (n.handleOnKeyDown = function (r) {
          var i,
            a,
            o = r.key;
          o === L.Space && (r.preventDefault(), (r.key = L.Enter)),
            (a = (i = n.props).handleOnKeyDown) === null ||
              a === void 0 ||
              a.call(i, r);
        }),
        (n.isKeyboardSelected = function () {
          return (
            !n.props.disabledKeyboardNavigation &&
            !ee(n.props.date, n.props.selected) &&
            ee(n.props.date, n.props.preSelection)
          );
        }),
        (n.getTabIndex = function () {
          return n.props.showWeekPicker &&
            n.props.showWeekNumber &&
            (n.isKeyboardSelected() ||
              (ee(n.props.date, n.props.selected) &&
                ee(n.props.preSelection, n.props.selected)))
            ? 0
            : -1;
        }),
        (n.handleFocusWeekNumber = function (r) {
          var i = !1;
          n.getTabIndex() === 0 &&
            !(r != null && r.isInputFocused) &&
            ee(n.props.date, n.props.preSelection) &&
            ((!document.activeElement ||
              document.activeElement === document.body) &&
              (i = !0),
            n.props.inline && !n.props.shouldFocusDayInline && (i = !1),
            n.props.containerRef &&
              n.props.containerRef.current &&
              n.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement &&
              document.activeElement.classList.contains(
                "react-datepicker__week-number"
              ) &&
              (i = !0)),
            i &&
              n.weekNumberEl.current &&
              n.weekNumberEl.current.focus({ preventScroll: !0 });
        }),
        n
      );
    }
    return (
      Object.defineProperty(t, "defaultProps", {
        get: function () {
          return { ariaLabelPrefix: "week " };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidMount = function () {
        this.handleFocusWeekNumber();
      }),
      (t.prototype.componentDidUpdate = function (n) {
        this.handleFocusWeekNumber(n);
      }),
      (t.prototype.render = function () {
        var n = this.props,
          r = n.weekNumber,
          i = n.isWeekDisabled,
          a = n.ariaLabelPrefix,
          o = a === void 0 ? t.defaultProps.ariaLabelPrefix : a,
          s = n.onClick,
          l = {
            "react-datepicker__week-number": !0,
            "react-datepicker__week-number--clickable": !!s && !i,
            "react-datepicker__week-number--selected":
              !!s && ee(this.props.date, this.props.selected),
          };
        return _.createElement(
          "div",
          {
            ref: this.weekNumberEl,
            className: Ve(l),
            "aria-label": "".concat(o, " ").concat(this.props.weekNumber),
            onClick: this.handleClick,
            onKeyDown: this.handleOnKeyDown,
            tabIndex: this.getTabIndex(),
          },
          r
        );
      }),
      t
    );
  })(x.Component),
  MR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.isDisabled = function (r) {
          return kt(r, {
            minDate: n.props.minDate,
            maxDate: n.props.maxDate,
            excludeDates: n.props.excludeDates,
            excludeDateIntervals: n.props.excludeDateIntervals,
            includeDateIntervals: n.props.includeDateIntervals,
            includeDates: n.props.includeDates,
            filterDate: n.props.filterDate,
          });
        }),
        (n.handleDayClick = function (r, i) {
          n.props.onDayClick && n.props.onDayClick(r, i);
        }),
        (n.handleDayMouseEnter = function (r) {
          n.props.onDayMouseEnter && n.props.onDayMouseEnter(r);
        }),
        (n.handleWeekClick = function (r, i, a) {
          for (var o, s, l, u = new Date(r), c = 0; c < 7; c++) {
            var d = new Date(r);
            d.setDate(d.getDate() + c);
            var f = !n.isDisabled(d);
            if (f) {
              u = d;
              break;
            }
          }
          typeof n.props.onWeekSelect == "function" &&
            n.props.onWeekSelect(u, i, a),
            n.props.showWeekPicker && n.handleDayClick(u, a),
            ((o = n.props.shouldCloseOnSelect) !== null && o !== void 0
              ? o
              : t.defaultProps.shouldCloseOnSelect) &&
              ((l = (s = n.props).setOpen) === null ||
                l === void 0 ||
                l.call(s, !1));
        }),
        (n.formatWeekNumber = function (r) {
          return n.props.formatWeekNumber ? n.props.formatWeekNumber(r) : sR(r);
        }),
        (n.isWeekDisabled = function () {
          for (
            var r = n.startOfWeek(), i = Ft(r, 6), a = new Date(r);
            a <= i;

          ) {
            if (!n.isDisabled(a)) return !1;
            a = Ft(a, 1);
          }
          return !0;
        }),
        (n.renderDays = function () {
          var r = n.startOfWeek(),
            i = [],
            a = n.formatWeekNumber(r);
          if (n.props.showWeekNumber) {
            var o =
              n.props.onWeekSelect || n.props.showWeekPicker
                ? n.handleWeekClick.bind(n, r, a)
                : void 0;
            i.push(
              _.createElement(
                PR,
                te({ key: "W" }, t.defaultProps, n.props, {
                  weekNumber: a,
                  isWeekDisabled: n.isWeekDisabled(),
                  date: r,
                  onClick: o,
                })
              )
            );
          }
          return i.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (s) {
              var l = Ft(r, s);
              return _.createElement(
                ER,
                te({}, t.defaultProps, n.props, {
                  ariaLabelPrefixWhenEnabled: n.props.chooseDayAriaLabelPrefix,
                  ariaLabelPrefixWhenDisabled:
                    n.props.disabledDayAriaLabelPrefix,
                  key: l.valueOf(),
                  day: l,
                  onClick: n.handleDayClick.bind(n, l),
                  onMouseEnter: n.handleDayMouseEnter.bind(n, l),
                })
              );
            })
          );
        }),
        (n.startOfWeek = function () {
          return Xn(n.props.day, n.props.locale, n.props.calendarStartDay);
        }),
        (n.isKeyboardSelected = function () {
          return (
            !n.props.disabledKeyboardNavigation &&
            !ee(n.startOfWeek(), n.props.selected) &&
            ee(n.startOfWeek(), n.props.preSelection)
          );
        }),
        n
      );
    }
    return (
      Object.defineProperty(t, "defaultProps", {
        get: function () {
          return { shouldCloseOnSelect: !0 };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.render = function () {
        var n = {
          "react-datepicker__week": !0,
          "react-datepicker__week--selected": ee(
            this.startOfWeek(),
            this.props.selected
          ),
          "react-datepicker__week--keyboard-selected":
            this.isKeyboardSelected(),
        };
        return _.createElement("div", { className: Ve(n) }, this.renderDays());
      }),
      t
    );
  })(x.Component),
  na,
  TR = 6,
  pi = {
    TWO_COLUMNS: "two_columns",
    THREE_COLUMNS: "three_columns",
    FOUR_COLUMNS: "four_columns",
  },
  Hu =
    ((na = {}),
    (na[pi.TWO_COLUMNS] = {
      grid: [
        [0, 1],
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [10, 11],
      ],
      verticalNavigationOffset: 2,
    }),
    (na[pi.THREE_COLUMNS] = {
      grid: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ],
      verticalNavigationOffset: 3,
    }),
    (na[pi.FOUR_COLUMNS] = {
      grid: [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
      ],
      verticalNavigationOffset: 4,
    }),
    na),
  Uo = 1;
function zg(e, t) {
  return e ? pi.FOUR_COLUMNS : t ? pi.TWO_COLUMNS : pi.THREE_COLUMNS;
}
var NR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.MONTH_REFS = qt([], Array(12), !0).map(function () {
          return x.createRef();
        })),
        (n.QUARTER_REFS = qt([], Array(4), !0).map(function () {
          return x.createRef();
        })),
        (n.isDisabled = function (r) {
          return kt(r, {
            minDate: n.props.minDate,
            maxDate: n.props.maxDate,
            excludeDates: n.props.excludeDates,
            excludeDateIntervals: n.props.excludeDateIntervals,
            includeDateIntervals: n.props.includeDateIntervals,
            includeDates: n.props.includeDates,
            filterDate: n.props.filterDate,
          });
        }),
        (n.isExcluded = function (r) {
          return wp(r, {
            excludeDates: n.props.excludeDates,
            excludeDateIntervals: n.props.excludeDateIntervals,
          });
        }),
        (n.handleDayClick = function (r, i) {
          var a, o;
          (o = (a = n.props).onDayClick) === null ||
            o === void 0 ||
            o.call(a, r, i, n.props.orderInDisplay);
        }),
        (n.handleDayMouseEnter = function (r) {
          var i, a;
          (a = (i = n.props).onDayMouseEnter) === null ||
            a === void 0 ||
            a.call(i, r);
        }),
        (n.handleMouseLeave = function () {
          var r, i;
          (i = (r = n.props).onMouseLeave) === null ||
            i === void 0 ||
            i.call(r);
        }),
        (n.isRangeStartMonth = function (r) {
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.endDate;
          return !o || !s ? !1 : Ge(wt(a, r), o);
        }),
        (n.isRangeStartQuarter = function (r) {
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.endDate;
          return !o || !s ? !1 : dl(Br(a, r), o);
        }),
        (n.isRangeEndMonth = function (r) {
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.endDate;
          return !o || !s ? !1 : Ge(wt(a, r), s);
        }),
        (n.isRangeEndQuarter = function (r) {
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.endDate;
          return !o || !s ? !1 : dl(Br(a, r), s);
        }),
        (n.isInSelectingRangeMonth = function (r) {
          var i,
            a = n.props,
            o = a.day,
            s = a.selectsStart,
            l = a.selectsEnd,
            u = a.selectsRange,
            c = a.startDate,
            d = a.endDate,
            f =
              (i = n.props.selectingDate) !== null && i !== void 0
                ? i
                : n.props.preSelection;
          return !(s || l || u) || !f
            ? !1
            : s && d
            ? Wo(f, d, r, o)
            : (l && c) || (u && c && !d)
            ? Wo(c, f, r, o)
            : !1;
        }),
        (n.isSelectingMonthRangeStart = function (r) {
          var i;
          if (!n.isInSelectingRangeMonth(r)) return !1;
          var a = n.props,
            o = a.day,
            s = a.startDate,
            l = a.selectsStart,
            u = wt(o, r),
            c =
              (i = n.props.selectingDate) !== null && i !== void 0
                ? i
                : n.props.preSelection;
          return l ? Ge(u, c) : Ge(u, s);
        }),
        (n.isSelectingMonthRangeEnd = function (r) {
          var i;
          if (!n.isInSelectingRangeMonth(r)) return !1;
          var a = n.props,
            o = a.day,
            s = a.endDate,
            l = a.selectsEnd,
            u = a.selectsRange,
            c = wt(o, r),
            d =
              (i = n.props.selectingDate) !== null && i !== void 0
                ? i
                : n.props.preSelection;
          return l || u ? Ge(c, d) : Ge(c, s);
        }),
        (n.isInSelectingRangeQuarter = function (r) {
          var i,
            a = n.props,
            o = a.day,
            s = a.selectsStart,
            l = a.selectsEnd,
            u = a.selectsRange,
            c = a.startDate,
            d = a.endDate,
            f =
              (i = n.props.selectingDate) !== null && i !== void 0
                ? i
                : n.props.preSelection;
          return !(s || l || u) || !f
            ? !1
            : s && d
            ? $o(f, d, r, o)
            : (l && c) || (u && c && !d)
            ? $o(c, f, r, o)
            : !1;
        }),
        (n.isWeekInMonth = function (r) {
          var i = n.props.day,
            a = Ft(r, 6);
          return Ge(r, i) || Ge(a, i);
        }),
        (n.isCurrentMonth = function (r, i) {
          return G(r) === G(ie()) && i === $e(ie());
        }),
        (n.isCurrentQuarter = function (r, i) {
          return G(r) === G(ie()) && i === Dr(ie());
        }),
        (n.isSelectedMonth = function (r, i, a) {
          return $e(a) === i && G(r) === G(a);
        }),
        (n.isSelectMonthInList = function (r, i, a) {
          return a.some(function (o) {
            return n.isSelectedMonth(r, i, o);
          });
        }),
        (n.isSelectedQuarter = function (r, i, a) {
          return Dr(r) === i && G(r) === G(a);
        }),
        (n.isMonthSelected = function () {
          var r = n.props,
            i = r.day,
            a = r.selected,
            o = r.selectedDates,
            s = r.selectsMultiple,
            l = $e(i);
          return s
            ? o == null
              ? void 0
              : o.some(function (u) {
                  return n.isSelectedMonth(i, l, u);
                })
            : !!a && n.isSelectedMonth(i, l, a);
        }),
        (n.renderWeeks = function () {
          for (
            var r = [],
              i = n.props.fixedHeight,
              a = 0,
              o = !1,
              s = Xn(wn(n.props.day), n.props.locale, n.props.calendarStartDay),
              l = function (v) {
                return n.props.showWeekPicker
                  ? Xn(v, n.props.locale, n.props.calendarStartDay)
                  : n.props.preSelection;
              },
              u = function (v) {
                return n.props.showWeekPicker
                  ? Xn(v, n.props.locale, n.props.calendarStartDay)
                  : n.props.selected;
              },
              c = n.props.selected ? u(n.props.selected) : void 0,
              d = n.props.preSelection ? l(n.props.preSelection) : void 0;
            r.push(
              _.createElement(
                MR,
                te({}, n.props, {
                  ariaLabelPrefix: n.props.weekAriaLabelPrefix,
                  key: a,
                  day: s,
                  month: $e(n.props.day),
                  onDayClick: n.handleDayClick,
                  onDayMouseEnter: n.handleDayMouseEnter,
                  selected: c,
                  preSelection: d,
                  showWeekNumber: n.props.showWeekNumbers,
                })
              )
            ),
              !o;

          ) {
            a++, (s = el(s, 1));
            var f = i && a >= TR,
              h = !i && !n.isWeekInMonth(s);
            if (f || h)
              if (n.props.peekNextMonth) o = !0;
              else break;
          }
          return r;
        }),
        (n.onMonthClick = function (r, i) {
          var a = n.isMonthDisabledForLabelDate(i),
            o = a.isDisabled,
            s = a.labelDate;
          o || n.handleDayClick(wn(s), r);
        }),
        (n.onMonthMouseEnter = function (r) {
          var i = n.isMonthDisabledForLabelDate(r),
            a = i.isDisabled,
            o = i.labelDate;
          a || n.handleDayMouseEnter(wn(o));
        }),
        (n.handleMonthNavigation = function (r, i) {
          var a, o, s, l;
          (o = (a = n.props).setPreSelection) === null ||
            o === void 0 ||
            o.call(a, i),
            (l =
              (s = n.MONTH_REFS[r]) === null || s === void 0
                ? void 0
                : s.current) === null ||
              l === void 0 ||
              l.focus();
        }),
        (n.handleKeyboardNavigation = function (r, i, a) {
          var o,
            s = n.props,
            l = s.selected,
            u = s.preSelection,
            c = s.setPreSelection,
            d = s.minDate,
            f = s.maxDate,
            h = s.showFourColumnMonthYearPicker,
            v = s.showTwoColumnMonthYearPicker;
          if (u) {
            var w = zg(h, v),
              b = n.getVerticalOffset(w),
              g = (o = Hu[w]) === null || o === void 0 ? void 0 : o.grid,
              m = function (C, D, M) {
                var A,
                  B,
                  j = D,
                  U = M;
                switch (C) {
                  case L.ArrowRight:
                    (j = Yt(D, Uo)), (U = M === 11 ? 0 : M + Uo);
                    break;
                  case L.ArrowLeft:
                    (j = Cr(D, Uo)), (U = M === 0 ? 11 : M - Uo);
                    break;
                  case L.ArrowUp:
                    (j = Cr(D, b)),
                      (U =
                        !(
                          (A = g == null ? void 0 : g[0]) === null ||
                          A === void 0
                        ) && A.includes(M)
                          ? M + 12 - b
                          : M - b);
                    break;
                  case L.ArrowDown:
                    (j = Yt(D, b)),
                      (U =
                        !(
                          (B = g == null ? void 0 : g[g.length - 1]) === null ||
                          B === void 0
                        ) && B.includes(M)
                          ? M - 12 + b
                          : M + b);
                    break;
                }
                return { newCalculatedDate: j, newCalculatedMonth: U };
              },
              y = function (C, D, M) {
                for (
                  var A = 40,
                    B = C,
                    j = !1,
                    U = 0,
                    K = m(B, D, M),
                    Q = K.newCalculatedDate,
                    H = K.newCalculatedMonth;
                  !j;

                ) {
                  if (U >= A) {
                    (Q = D), (H = M);
                    break;
                  }
                  if (d && Q < d) {
                    B = L.ArrowRight;
                    var V = m(B, Q, H);
                    (Q = V.newCalculatedDate), (H = V.newCalculatedMonth);
                  }
                  if (f && Q > f) {
                    B = L.ArrowLeft;
                    var V = m(B, Q, H);
                    (Q = V.newCalculatedDate), (H = V.newCalculatedMonth);
                  }
                  if (mR(Q, n.props)) {
                    var V = m(B, Q, H);
                    (Q = V.newCalculatedDate), (H = V.newCalculatedMonth);
                  } else j = !0;
                  U++;
                }
                return { newCalculatedDate: Q, newCalculatedMonth: H };
              };
            if (i === L.Enter) {
              n.isMonthDisabled(a) || (n.onMonthClick(r, a), c == null || c(l));
              return;
            }
            var S = y(i, u, a),
              k = S.newCalculatedDate,
              E = S.newCalculatedMonth;
            switch (i) {
              case L.ArrowRight:
              case L.ArrowLeft:
              case L.ArrowUp:
              case L.ArrowDown:
                n.handleMonthNavigation(E, k);
                break;
            }
          }
        }),
        (n.getVerticalOffset = function (r) {
          var i, a;
          return (a =
            (i = Hu[r]) === null || i === void 0
              ? void 0
              : i.verticalNavigationOffset) !== null && a !== void 0
            ? a
            : 0;
        }),
        (n.onMonthKeyDown = function (r, i) {
          var a = n.props,
            o = a.disabledKeyboardNavigation,
            s = a.handleOnMonthKeyDown,
            l = r.key;
          l !== L.Tab && r.preventDefault(),
            o || n.handleKeyboardNavigation(r, l, i),
            s && s(r);
        }),
        (n.onQuarterClick = function (r, i) {
          var a = Br(n.props.day, i);
          Ho(a, n.props) || n.handleDayClick(Tg(a), r);
        }),
        (n.onQuarterMouseEnter = function (r) {
          var i = Br(n.props.day, r);
          Ho(i, n.props) || n.handleDayMouseEnter(Tg(i));
        }),
        (n.handleQuarterNavigation = function (r, i) {
          var a, o, s, l;
          n.isDisabled(i) ||
            n.isExcluded(i) ||
            ((o = (a = n.props).setPreSelection) === null ||
              o === void 0 ||
              o.call(a, i),
            (l =
              (s = n.QUARTER_REFS[r - 1]) === null || s === void 0
                ? void 0
                : s.current) === null ||
              l === void 0 ||
              l.focus());
        }),
        (n.onQuarterKeyDown = function (r, i) {
          var a,
            o,
            s = r.key;
          if (!n.props.disabledKeyboardNavigation)
            switch (s) {
              case L.Enter:
                n.onQuarterClick(r, i),
                  (o = (a = n.props).setPreSelection) === null ||
                    o === void 0 ||
                    o.call(a, n.props.selected);
                break;
              case L.ArrowRight:
                if (!n.props.preSelection) break;
                n.handleQuarterNavigation(
                  i === 4 ? 1 : i + 1,
                  sp(n.props.preSelection, 1)
                );
                break;
              case L.ArrowLeft:
                if (!n.props.preSelection) break;
                n.handleQuarterNavigation(
                  i === 1 ? 4 : i - 1,
                  Rw(n.props.preSelection)
                );
                break;
            }
        }),
        (n.isMonthDisabledForLabelDate = function (r) {
          var i,
            a = n.props,
            o = a.day,
            s = a.minDate,
            l = a.maxDate,
            u = a.excludeDates,
            c = a.includeDates,
            d = wt(o, r);
          return {
            isDisabled:
              (i = (s || l || u || c) && Qw(d, n.props)) !== null &&
              i !== void 0
                ? i
                : !1,
            labelDate: d,
          };
        }),
        (n.isMonthDisabled = function (r) {
          var i = n.isMonthDisabledForLabelDate(r).isDisabled;
          return i;
        }),
        (n.getMonthClassNames = function (r) {
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.endDate,
            l = i.preSelection,
            u = i.monthClassName,
            c = u ? u(wt(a, r)) : void 0,
            d = n.getSelection();
          return Ve(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(r),
            c,
            {
              "react-datepicker__month-text--disabled": n.isMonthDisabled(r),
              "react-datepicker__month-text--selected": d
                ? n.isSelectMonthInList(a, r, d)
                : void 0,
              "react-datepicker__month-text--keyboard-selected":
                !n.props.disabledKeyboardNavigation &&
                l &&
                n.isSelectedMonth(a, r, l) &&
                !n.isMonthSelected() &&
                !n.isMonthDisabled(r),
              "react-datepicker__month-text--in-selecting-range":
                n.isInSelectingRangeMonth(r),
              "react-datepicker__month-text--in-range":
                o && s ? Wo(o, s, r, a) : void 0,
              "react-datepicker__month-text--range-start":
                n.isRangeStartMonth(r),
              "react-datepicker__month-text--range-end": n.isRangeEndMonth(r),
              "react-datepicker__month-text--selecting-range-start":
                n.isSelectingMonthRangeStart(r),
              "react-datepicker__month-text--selecting-range-end":
                n.isSelectingMonthRangeEnd(r),
              "react-datepicker__month-text--today": n.isCurrentMonth(a, r),
            }
          );
        }),
        (n.getTabIndex = function (r) {
          if (n.props.preSelection == null) return "-1";
          var i = $e(n.props.preSelection),
            a = n.isMonthDisabledForLabelDate(i).isDisabled,
            o =
              r === i && !(a || n.props.disabledKeyboardNavigation)
                ? "0"
                : "-1";
          return o;
        }),
        (n.getQuarterTabIndex = function (r) {
          if (n.props.preSelection == null) return "-1";
          var i = Dr(n.props.preSelection),
            a = Ho(n.props.day, n.props),
            o =
              r === i && !(a || n.props.disabledKeyboardNavigation)
                ? "0"
                : "-1";
          return o;
        }),
        (n.getAriaLabel = function (r) {
          var i = n.props,
            a = i.chooseDayAriaLabelPrefix,
            o = a === void 0 ? "Choose" : a,
            s = i.disabledDayAriaLabelPrefix,
            l = s === void 0 ? "Not available" : s,
            u = i.day,
            c = i.locale,
            d = wt(u, r),
            f = n.isDisabled(d) || n.isExcluded(d) ? l : o;
          return "".concat(f, " ").concat(pe(d, "MMMM yyyy", c));
        }),
        (n.getQuarterClassNames = function (r) {
          var i = n.props,
            a = i.day,
            o = i.startDate,
            s = i.endDate,
            l = i.selected,
            u = i.minDate,
            c = i.maxDate,
            d = i.excludeDates,
            f = i.includeDates,
            h = i.filterDate,
            v = i.preSelection,
            w = i.disabledKeyboardNavigation,
            b = (u || c || d || f || h) && Ho(Br(a, r), n.props);
          return Ve(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(r),
            {
              "react-datepicker__quarter-text--disabled": b,
              "react-datepicker__quarter-text--selected": l
                ? n.isSelectedQuarter(a, r, l)
                : void 0,
              "react-datepicker__quarter-text--keyboard-selected":
                !w && v && n.isSelectedQuarter(a, r, v) && !b,
              "react-datepicker__quarter-text--in-selecting-range":
                n.isInSelectingRangeQuarter(r),
              "react-datepicker__quarter-text--in-range":
                o && s ? $o(o, s, r, a) : void 0,
              "react-datepicker__quarter-text--range-start":
                n.isRangeStartQuarter(r),
              "react-datepicker__quarter-text--range-end":
                n.isRangeEndQuarter(r),
              "react-datepicker__quarter-text--today": n.isCurrentQuarter(a, r),
            }
          );
        }),
        (n.getMonthContent = function (r) {
          var i = n.props,
            a = i.showFullMonthYearPicker,
            o = i.renderMonthContent,
            s = i.locale,
            l = i.day,
            u = Kw(r, s),
            c = xp(r, s);
          return o ? o(r, u, c, l) : a ? c : u;
        }),
        (n.getQuarterContent = function (r) {
          var i,
            a = n.props,
            o = a.renderQuarterContent,
            s = a.locale,
            l = hR(r, s);
          return (i = o == null ? void 0 : o(r, l)) !== null && i !== void 0
            ? i
            : l;
        }),
        (n.renderMonths = function () {
          var r,
            i = n.props,
            a = i.showTwoColumnMonthYearPicker,
            o = i.showFourColumnMonthYearPicker,
            s = i.day,
            l = i.selected,
            u = (r = Hu[zg(o, a)]) === null || r === void 0 ? void 0 : r.grid;
          return u == null
            ? void 0
            : u.map(function (c, d) {
                return _.createElement(
                  "div",
                  { className: "react-datepicker__month-wrapper", key: d },
                  c.map(function (f, h) {
                    return _.createElement(
                      "div",
                      {
                        ref: n.MONTH_REFS[f],
                        key: h,
                        onClick: function (v) {
                          n.onMonthClick(v, f);
                        },
                        onKeyDown: function (v) {
                          Xw(v) && (v.preventDefault(), (v.key = L.Enter)),
                            n.onMonthKeyDown(v, f);
                        },
                        onMouseEnter: n.props.usePointerEvent
                          ? void 0
                          : function () {
                              return n.onMonthMouseEnter(f);
                            },
                        onPointerEnter: n.props.usePointerEvent
                          ? function () {
                              return n.onMonthMouseEnter(f);
                            }
                          : void 0,
                        tabIndex: Number(n.getTabIndex(f)),
                        className: n.getMonthClassNames(f),
                        "aria-disabled": n.isMonthDisabled(f),
                        role: "option",
                        "aria-label": n.getAriaLabel(f),
                        "aria-current": n.isCurrentMonth(s, f)
                          ? "date"
                          : void 0,
                        "aria-selected": l
                          ? n.isSelectedMonth(s, f, l)
                          : void 0,
                      },
                      n.getMonthContent(f)
                    );
                  })
                );
              });
        }),
        (n.renderQuarters = function () {
          var r = n.props,
            i = r.day,
            a = r.selected,
            o = [1, 2, 3, 4];
          return _.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            o.map(function (s, l) {
              return _.createElement(
                "div",
                {
                  key: l,
                  ref: n.QUARTER_REFS[l],
                  role: "option",
                  onClick: function (u) {
                    n.onQuarterClick(u, s);
                  },
                  onKeyDown: function (u) {
                    n.onQuarterKeyDown(u, s);
                  },
                  onMouseEnter: n.props.usePointerEvent
                    ? void 0
                    : function () {
                        return n.onQuarterMouseEnter(s);
                      },
                  onPointerEnter: n.props.usePointerEvent
                    ? function () {
                        return n.onQuarterMouseEnter(s);
                      }
                    : void 0,
                  className: n.getQuarterClassNames(s),
                  "aria-selected": a ? n.isSelectedQuarter(i, s, a) : void 0,
                  tabIndex: Number(n.getQuarterTabIndex(s)),
                  "aria-current": n.isCurrentQuarter(i, s) ? "date" : void 0,
                },
                n.getQuarterContent(s)
              );
            })
          );
        }),
        (n.getClassNames = function () {
          var r = n.props,
            i = r.selectingDate,
            a = r.selectsStart,
            o = r.selectsEnd,
            s = r.showMonthYearPicker,
            l = r.showQuarterYearPicker,
            u = r.showWeekPicker;
          return Ve(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": i && (a || o) },
            { "react-datepicker__monthPicker": s },
            { "react-datepicker__quarterPicker": l },
            { "react-datepicker__weekPicker": u }
          );
        }),
        n
      );
    }
    return (
      (t.prototype.getSelection = function () {
        var n = this.props,
          r = n.selected,
          i = n.selectedDates,
          a = n.selectsMultiple;
        if (a) return i;
        if (r) return [r];
      }),
      (t.prototype.render = function () {
        var n = this.props,
          r = n.showMonthYearPicker,
          i = n.showQuarterYearPicker,
          a = n.day,
          o = n.ariaLabelPrefix,
          s = o === void 0 ? "Month " : o,
          l = s ? s.trim() + " " : "";
        return _.createElement(
          "div",
          {
            className: this.getClassNames(),
            onMouseLeave: this.props.usePointerEvent
              ? void 0
              : this.handleMouseLeave,
            onPointerLeave: this.props.usePointerEvent
              ? this.handleMouseLeave
              : void 0,
            "aria-label": ""
              .concat(l)
              .concat(pe(a, "MMMM, yyyy", this.props.locale)),
            role: "listbox",
          },
          r
            ? this.renderMonths()
            : i
            ? this.renderQuarters()
            : this.renderWeeks()
        );
      }),
      t
    );
  })(x.Component),
  _R = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.isSelectedMonth = function (r) {
          return n.props.month === r;
        }),
        (n.renderOptions = function () {
          return n.props.monthNames.map(function (r, i) {
            return _.createElement(
              "div",
              {
                className: n.isSelectedMonth(i)
                  ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                  : "react-datepicker__month-option",
                key: r,
                onClick: n.onChange.bind(n, i),
                "aria-selected": n.isSelectedMonth(i) ? "true" : void 0,
              },
              n.isSelectedMonth(i)
                ? _.createElement(
                    "span",
                    { className: "react-datepicker__month-option--selected" },
                    "✓"
                  )
                : "",
              r
            );
          });
        }),
        (n.onChange = function (r) {
          return n.props.onChange(r);
        }),
        (n.handleClickOutside = function () {
          return n.props.onCancel();
        }),
        n
      );
    }
    return (
      (t.prototype.render = function () {
        return _.createElement(
          zl,
          {
            className: "react-datepicker__month-dropdown",
            onClickOutside: this.handleClickOutside,
          },
          this.renderOptions()
        );
      }),
      t
    );
  })(x.Component),
  AR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.state = { dropdownVisible: !1 }),
        (n.renderSelectOptions = function (r) {
          return r.map(function (i, a) {
            return _.createElement("option", { key: i, value: a }, i);
          });
        }),
        (n.renderSelectMode = function (r) {
          return _.createElement(
            "select",
            {
              value: n.props.month,
              className: "react-datepicker__month-select",
              onChange: function (i) {
                return n.onChange(parseInt(i.target.value));
              },
            },
            n.renderSelectOptions(r)
          );
        }),
        (n.renderReadView = function (r, i) {
          return _.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: n.toggleDropdown,
            },
            _.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            _.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              i[n.props.month]
            )
          );
        }),
        (n.renderDropdown = function (r) {
          return _.createElement(
            _R,
            te({ key: "dropdown" }, n.props, {
              monthNames: r,
              onChange: n.onChange,
              onCancel: n.toggleDropdown,
            })
          );
        }),
        (n.renderScrollMode = function (r) {
          var i = n.state.dropdownVisible,
            a = [n.renderReadView(!i, r)];
          return i && a.unshift(n.renderDropdown(r)), a;
        }),
        (n.onChange = function (r) {
          n.toggleDropdown(), r !== n.props.month && n.props.onChange(r);
        }),
        (n.toggleDropdown = function () {
          return n.setState({ dropdownVisible: !n.state.dropdownVisible });
        }),
        n
      );
    }
    return (
      (t.prototype.render = function () {
        var n = this,
          r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
            this.props.useShortMonthInDropdown
              ? function (a) {
                  return Kw(a, n.props.locale);
                }
              : function (a) {
                  return xp(a, n.props.locale);
                }
          ),
          i;
        switch (this.props.dropdownMode) {
          case "scroll":
            i = this.renderScrollMode(r);
            break;
          case "select":
            i = this.renderSelectMode(r);
            break;
        }
        return _.createElement(
          "div",
          {
            className:
              "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                this.props.dropdownMode
              ),
          },
          i
        );
      }),
      t
    );
  })(x.Component);
function RR(e, t) {
  for (var n = [], r = wn(e), i = wn(t); !tr(r, i); )
    n.push(ie(r)), (r = Yt(r, 1));
  return n;
}
var OR = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (
        (r.renderOptions = function () {
          return r.state.monthYearsList.map(function (i) {
            var a = md(i),
              o = Ut(r.props.date, i) && Ge(r.props.date, i);
            return _.createElement(
              "div",
              {
                className: o
                  ? "react-datepicker__month-year-option--selected_month-year"
                  : "react-datepicker__month-year-option",
                key: a,
                onClick: r.onChange.bind(r, a),
                "aria-selected": o ? "true" : void 0,
              },
              o
                ? _.createElement(
                    "span",
                    {
                      className:
                        "react-datepicker__month-year-option--selected",
                    },
                    "✓"
                  )
                : "",
              pe(i, r.props.dateFormat, r.props.locale)
            );
          });
        }),
        (r.onChange = function (i) {
          return r.props.onChange(i);
        }),
        (r.handleClickOutside = function () {
          r.props.onCancel();
        }),
        (r.state = { monthYearsList: RR(r.props.minDate, r.props.maxDate) }),
        r
      );
    }
    return (
      (t.prototype.render = function () {
        var n = Ve({
          "react-datepicker__month-year-dropdown": !0,
          "react-datepicker__month-year-dropdown--scrollable":
            this.props.scrollableMonthYearDropdown,
        });
        return _.createElement(
          zl,
          { className: n, onClickOutside: this.handleClickOutside },
          this.renderOptions()
        );
      }),
      t
    );
  })(x.Component),
  jR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.state = { dropdownVisible: !1 }),
        (n.renderSelectOptions = function () {
          for (
            var r = wn(n.props.minDate), i = wn(n.props.maxDate), a = [];
            !tr(r, i);

          ) {
            var o = md(r);
            a.push(
              _.createElement(
                "option",
                { key: o, value: o },
                pe(r, n.props.dateFormat, n.props.locale)
              )
            ),
              (r = Yt(r, 1));
          }
          return a;
        }),
        (n.onSelectChange = function (r) {
          n.onChange(parseInt(r.target.value));
        }),
        (n.renderSelectMode = function () {
          return _.createElement(
            "select",
            {
              value: md(wn(n.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: n.onSelectChange,
            },
            n.renderSelectOptions()
          );
        }),
        (n.renderReadView = function (r) {
          var i = pe(n.props.date, n.props.dateFormat, n.props.locale);
          return _.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: n.toggleDropdown,
            },
            _.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            _.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              i
            )
          );
        }),
        (n.renderDropdown = function () {
          return _.createElement(
            OR,
            te({ key: "dropdown" }, n.props, {
              onChange: n.onChange,
              onCancel: n.toggleDropdown,
            })
          );
        }),
        (n.renderScrollMode = function () {
          var r = n.state.dropdownVisible,
            i = [n.renderReadView(!r)];
          return r && i.unshift(n.renderDropdown()), i;
        }),
        (n.onChange = function (r) {
          n.toggleDropdown();
          var i = ie(r);
          (Ut(n.props.date, i) && Ge(n.props.date, i)) || n.props.onChange(i);
        }),
        (n.toggleDropdown = function () {
          return n.setState({ dropdownVisible: !n.state.dropdownVisible });
        }),
        n
      );
    }
    return (
      (t.prototype.render = function () {
        var n;
        switch (this.props.dropdownMode) {
          case "scroll":
            n = this.renderScrollMode();
            break;
          case "select":
            n = this.renderSelectMode();
            break;
        }
        return _.createElement(
          "div",
          {
            className:
              "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                this.props.dropdownMode
              ),
          },
          n
        );
      }),
      t
    );
  })(x.Component),
  LR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.state = { height: null }),
        (n.scrollToTheSelectedTime = function () {
          requestAnimationFrame(function () {
            var r, i, a;
            n.list &&
              (n.list.scrollTop =
                (a =
                  n.centerLi &&
                  t.calcCenterPosition(
                    n.props.monthRef
                      ? n.props.monthRef.clientHeight -
                          ((i =
                            (r = n.header) === null || r === void 0
                              ? void 0
                              : r.clientHeight) !== null && i !== void 0
                            ? i
                            : 0)
                      : n.list.clientHeight,
                    n.centerLi
                  )) !== null && a !== void 0
                  ? a
                  : 0);
          });
        }),
        (n.handleClick = function (r) {
          var i, a;
          ((n.props.minTime || n.props.maxTime) && Og(r, n.props)) ||
            ((n.props.excludeTimes ||
              n.props.includeTimes ||
              n.props.filterTime) &&
              Rg(r, n.props)) ||
            (a = (i = n.props).onChange) === null ||
            a === void 0 ||
            a.call(i, r);
        }),
        (n.isSelectedTime = function (r) {
          return n.props.selected && DR(n.props.selected, r);
        }),
        (n.isDisabledTime = function (r) {
          return (
            ((n.props.minTime || n.props.maxTime) && Og(r, n.props)) ||
            ((n.props.excludeTimes ||
              n.props.includeTimes ||
              n.props.filterTime) &&
              Rg(r, n.props))
          );
        }),
        (n.liClasses = function (r) {
          var i,
            a = [
              "react-datepicker__time-list-item",
              n.props.timeClassName ? n.props.timeClassName(r) : void 0,
            ];
          return (
            n.isSelectedTime(r) &&
              a.push("react-datepicker__time-list-item--selected"),
            n.isDisabledTime(r) &&
              a.push("react-datepicker__time-list-item--disabled"),
            n.props.injectTimes &&
              (vn(r) * 3600 + xn(r) * 60 + qn(r)) %
                (((i = n.props.intervals) !== null && i !== void 0
                  ? i
                  : t.defaultProps.intervals) *
                  60) !==
                0 &&
              a.push("react-datepicker__time-list-item--injected"),
            a.join(" ")
          );
        }),
        (n.handleOnKeyDown = function (r, i) {
          var a, o;
          r.key === L.Space && (r.preventDefault(), (r.key = L.Enter)),
            (r.key === L.ArrowUp || r.key === L.ArrowLeft) &&
              r.target instanceof HTMLElement &&
              r.target.previousSibling &&
              (r.preventDefault(),
              r.target.previousSibling instanceof HTMLElement &&
                r.target.previousSibling.focus()),
            (r.key === L.ArrowDown || r.key === L.ArrowRight) &&
              r.target instanceof HTMLElement &&
              r.target.nextSibling &&
              (r.preventDefault(),
              r.target.nextSibling instanceof HTMLElement &&
                r.target.nextSibling.focus()),
            r.key === L.Enter && n.handleClick(i),
            (o = (a = n.props).handleOnKeyDown) === null ||
              o === void 0 ||
              o.call(a, r);
        }),
        (n.renderTimes = function () {
          for (
            var r,
              i = [],
              a = typeof n.props.format == "string" ? n.props.format : "p",
              o =
                (r = n.props.intervals) !== null && r !== void 0
                  ? r
                  : t.defaultProps.intervals,
              s = n.props.selected || n.props.openToDate || ie(),
              l = ys(s),
              u =
                n.props.injectTimes &&
                n.props.injectTimes.sort(function (b, g) {
                  return b.getTime() - g.getTime();
                }),
              c = 60 * kR(s),
              d = c / o,
              f = 0;
            f < d;
            f++
          ) {
            var h = fd(l, f * o);
            if ((i.push(h), u)) {
              var v = SR(l, h, f, o, u);
              i = i.concat(v);
            }
          }
          var w = i.reduce(function (b, g) {
            return g.getTime() <= s.getTime() ? g : b;
          }, i[0]);
          return i.map(function (b) {
            return _.createElement(
              "li",
              {
                key: b.valueOf(),
                onClick: n.handleClick.bind(n, b),
                className: n.liClasses(b),
                ref: function (g) {
                  b === w && (n.centerLi = g);
                },
                onKeyDown: function (g) {
                  n.handleOnKeyDown(g, b);
                },
                tabIndex: b === w ? 0 : -1,
                role: "option",
                "aria-selected": n.isSelectedTime(b) ? "true" : void 0,
                "aria-disabled": n.isDisabledTime(b) ? "true" : void 0,
              },
              pe(b, a, n.props.locale)
            );
          });
        }),
        (n.renderTimeCaption = function () {
          return n.props.showTimeCaption === !1
            ? _.createElement(_.Fragment, null)
            : _.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--time ".concat(
                      n.props.showTimeSelectOnly
                        ? "react-datepicker__header--time--only"
                        : ""
                    ),
                  ref: function (r) {
                    n.header = r;
                  },
                },
                _.createElement(
                  "div",
                  { className: "react-datepicker-time__header" },
                  n.props.timeCaption
                )
              );
        }),
        n
      );
    }
    return (
      Object.defineProperty(t, "defaultProps", {
        get: function () {
          return {
            intervals: 30,
            todayButton: null,
            timeCaption: "Time",
            showTimeCaption: !0,
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidMount = function () {
        this.scrollToTheSelectedTime(), this.observeDatePickerHeightChanges();
      }),
      (t.prototype.componentWillUnmount = function () {
        var n;
        (n = this.resizeObserver) === null || n === void 0 || n.disconnect();
      }),
      (t.prototype.observeDatePickerHeightChanges = function () {
        var n = this,
          r = this.props.monthRef;
        this.updateContainerHeight(),
          r &&
            ((this.resizeObserver = new ResizeObserver(function () {
              n.updateContainerHeight();
            })),
            this.resizeObserver.observe(r));
      }),
      (t.prototype.updateContainerHeight = function () {
        this.props.monthRef &&
          this.header &&
          this.setState({
            height: this.props.monthRef.clientHeight - this.header.clientHeight,
          });
      }),
      (t.prototype.render = function () {
        var n = this,
          r,
          i = this.state.height;
        return _.createElement(
          "div",
          {
            className: "react-datepicker__time-container ".concat(
              (
                (r = this.props.todayButton) !== null && r !== void 0
                  ? r
                  : t.defaultProps.todayButton
              )
                ? "react-datepicker__time-container--with-today-button"
                : ""
            ),
          },
          this.renderTimeCaption(),
          _.createElement(
            "div",
            { className: "react-datepicker__time" },
            _.createElement(
              "div",
              { className: "react-datepicker__time-box" },
              _.createElement(
                "ul",
                {
                  className: "react-datepicker__time-list",
                  ref: function (a) {
                    n.list = a;
                  },
                  style: i ? { height: i } : {},
                  role: "listbox",
                  "aria-label": this.props.timeCaption,
                },
                this.renderTimes()
              )
            )
          )
        );
      }),
      (t.calcCenterPosition = function (n, r) {
        return r.offsetTop - (n / 2 - r.clientHeight / 2);
      }),
      t
    );
  })(x.Component),
  $g = 3,
  IR = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (
        (r.YEAR_REFS = qt([], Array(r.props.yearItemNumber), !0).map(
          function () {
            return x.createRef();
          }
        )),
        (r.isDisabled = function (i) {
          return kt(i, {
            minDate: r.props.minDate,
            maxDate: r.props.maxDate,
            excludeDates: r.props.excludeDates,
            includeDates: r.props.includeDates,
            filterDate: r.props.filterDate,
          });
        }),
        (r.isExcluded = function (i) {
          return wp(i, { excludeDates: r.props.excludeDates });
        }),
        (r.selectingDate = function () {
          var i;
          return (i = r.props.selectingDate) !== null && i !== void 0
            ? i
            : r.props.preSelection;
        }),
        (r.updateFocusOnPaginate = function (i) {
          var a = function () {
            var o, s;
            (s =
              (o = r.YEAR_REFS[i]) === null || o === void 0
                ? void 0
                : o.current) === null ||
              s === void 0 ||
              s.focus();
          };
          window.requestAnimationFrame(a);
        }),
        (r.handleYearClick = function (i, a) {
          r.props.onDayClick && r.props.onDayClick(i, a);
        }),
        (r.handleYearNavigation = function (i, a) {
          var o,
            s,
            l,
            u,
            c = r.props,
            d = c.date,
            f = c.yearItemNumber;
          if (!(d === void 0 || f === void 0)) {
            var h = Yn(d, f).startPeriod;
            r.isDisabled(a) ||
              r.isExcluded(a) ||
              ((s = (o = r.props).setPreSelection) === null ||
                s === void 0 ||
                s.call(o, a),
              i - h < 0
                ? r.updateFocusOnPaginate(f - (h - i))
                : i - h >= f
                ? r.updateFocusOnPaginate(Math.abs(f - (i - h)))
                : (u =
                    (l = r.YEAR_REFS[i - h]) === null || l === void 0
                      ? void 0
                      : l.current) === null ||
                  u === void 0 ||
                  u.focus());
          }
        }),
        (r.isSameDay = function (i, a) {
          return ee(i, a);
        }),
        (r.isCurrentYear = function (i) {
          return i === G(ie());
        }),
        (r.isRangeStart = function (i) {
          return (
            r.props.startDate &&
            r.props.endDate &&
            Ut($t(ie(), i), r.props.startDate)
          );
        }),
        (r.isRangeEnd = function (i) {
          return (
            r.props.startDate &&
            r.props.endDate &&
            Ut($t(ie(), i), r.props.endDate)
          );
        }),
        (r.isInRange = function (i) {
          return zo(i, r.props.startDate, r.props.endDate);
        }),
        (r.isInSelectingRange = function (i) {
          var a = r.props,
            o = a.selectsStart,
            s = a.selectsEnd,
            l = a.selectsRange,
            u = a.startDate,
            c = a.endDate;
          return !(o || s || l) || !r.selectingDate()
            ? !1
            : o && c
            ? zo(i, r.selectingDate(), c)
            : (s && u) || (l && u && !c)
            ? zo(i, u, r.selectingDate())
            : !1;
        }),
        (r.isSelectingRangeStart = function (i) {
          var a;
          if (!r.isInSelectingRange(i)) return !1;
          var o = r.props,
            s = o.startDate,
            l = o.selectsStart,
            u = $t(ie(), i);
          return l
            ? Ut(u, (a = r.selectingDate()) !== null && a !== void 0 ? a : null)
            : Ut(u, s ?? null);
        }),
        (r.isSelectingRangeEnd = function (i) {
          var a;
          if (!r.isInSelectingRange(i)) return !1;
          var o = r.props,
            s = o.endDate,
            l = o.selectsEnd,
            u = o.selectsRange,
            c = $t(ie(), i);
          return l || u
            ? Ut(c, (a = r.selectingDate()) !== null && a !== void 0 ? a : null)
            : Ut(c, s ?? null);
        }),
        (r.isKeyboardSelected = function (i) {
          if (
            !(
              r.props.date === void 0 ||
              r.props.selected == null ||
              r.props.preSelection == null
            )
          ) {
            var a = r.props,
              o = a.minDate,
              s = a.maxDate,
              l = a.excludeDates,
              u = a.includeDates,
              c = a.filterDate,
              d = la($t(r.props.date, i)),
              f = (o || s || l || u || c) && vs(i, r.props);
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.props.inline &&
              !ee(d, la(r.props.selected)) &&
              ee(d, la(r.props.preSelection)) &&
              !f
            );
          }
        }),
        (r.isSelectedYear = function (i) {
          var a = r.props,
            o = a.selectsMultiple,
            s = a.selected,
            l = a.selectedDates;
          return o
            ? l == null
              ? void 0
              : l.some(function (u) {
                  return i === G(u);
                })
            : !!s && i === G(s);
        }),
        (r.onYearClick = function (i, a) {
          var o = r.props.date;
          o !== void 0 && r.handleYearClick(la($t(o, a)), i);
        }),
        (r.onYearKeyDown = function (i, a) {
          var o,
            s,
            l = i.key,
            u = r.props,
            c = u.date,
            d = u.yearItemNumber,
            f = u.handleOnKeyDown;
          if (
            (l !== L.Tab && i.preventDefault(),
            !r.props.disabledKeyboardNavigation)
          )
            switch (l) {
              case L.Enter:
                if (r.props.selected == null) break;
                r.onYearClick(i, a),
                  (s = (o = r.props).setPreSelection) === null ||
                    s === void 0 ||
                    s.call(o, r.props.selected);
                break;
              case L.ArrowRight:
                if (r.props.preSelection == null) break;
                r.handleYearNavigation(a + 1, gn(r.props.preSelection, 1));
                break;
              case L.ArrowLeft:
                if (r.props.preSelection == null) break;
                r.handleYearNavigation(a - 1, Ci(r.props.preSelection, 1));
                break;
              case L.ArrowUp: {
                if (
                  c === void 0 ||
                  d === void 0 ||
                  r.props.preSelection == null
                )
                  break;
                var h = Yn(c, d).startPeriod,
                  v = $g,
                  w = a - v;
                if (w < h) {
                  var b = d % v;
                  a >= h && a < h + b ? (v = b) : (v += b), (w = a - v);
                }
                r.handleYearNavigation(w, Ci(r.props.preSelection, v));
                break;
              }
              case L.ArrowDown: {
                if (
                  c === void 0 ||
                  d === void 0 ||
                  r.props.preSelection == null
                )
                  break;
                var g = Yn(c, d).endPeriod,
                  v = $g,
                  w = a + v;
                if (w > g) {
                  var b = d % v;
                  a <= g && a > g - b ? (v = b) : (v += b), (w = a + v);
                }
                r.handleYearNavigation(w, gn(r.props.preSelection, v));
                break;
              }
            }
          f && f(i);
        }),
        (r.getYearClassNames = function (i) {
          var a = r.props,
            o = a.date,
            s = a.minDate,
            l = a.maxDate,
            u = a.excludeDates,
            c = a.includeDates,
            d = a.filterDate,
            f = a.yearClassName;
          return Ve(
            "react-datepicker__year-text",
            "react-datepicker__year-".concat(i),
            o ? (f == null ? void 0 : f($t(o, i))) : void 0,
            {
              "react-datepicker__year-text--selected": r.isSelectedYear(i),
              "react-datepicker__year-text--disabled":
                (s || l || u || c || d) && vs(i, r.props),
              "react-datepicker__year-text--keyboard-selected":
                r.isKeyboardSelected(i),
              "react-datepicker__year-text--range-start": r.isRangeStart(i),
              "react-datepicker__year-text--range-end": r.isRangeEnd(i),
              "react-datepicker__year-text--in-range": r.isInRange(i),
              "react-datepicker__year-text--in-selecting-range":
                r.isInSelectingRange(i),
              "react-datepicker__year-text--selecting-range-start":
                r.isSelectingRangeStart(i),
              "react-datepicker__year-text--selecting-range-end":
                r.isSelectingRangeEnd(i),
              "react-datepicker__year-text--today": r.isCurrentYear(i),
            }
          );
        }),
        (r.getYearTabIndex = function (i) {
          if (
            r.props.disabledKeyboardNavigation ||
            r.props.preSelection == null
          )
            return "-1";
          var a = G(r.props.preSelection),
            o = vs(i, r.props);
          return i === a && !o ? "0" : "-1";
        }),
        (r.getYearContent = function (i) {
          return r.props.renderYearContent ? r.props.renderYearContent(i) : i;
        }),
        r
      );
    }
    return (
      (t.prototype.render = function () {
        var n = this,
          r = [],
          i = this.props,
          a = i.date,
          o = i.yearItemNumber,
          s = i.onYearMouseEnter,
          l = i.onYearMouseLeave;
        if (a === void 0) return null;
        for (
          var u = Yn(a, o),
            c = u.startPeriod,
            d = u.endPeriod,
            f = function (w) {
              r.push(
                _.createElement(
                  "div",
                  {
                    ref: h.YEAR_REFS[w - c],
                    onClick: function (b) {
                      n.onYearClick(b, w);
                    },
                    onKeyDown: function (b) {
                      Xw(b) && (b.preventDefault(), (b.key = L.Enter)),
                        n.onYearKeyDown(b, w);
                    },
                    tabIndex: Number(h.getYearTabIndex(w)),
                    className: h.getYearClassNames(w),
                    onMouseEnter: h.props.usePointerEvent
                      ? void 0
                      : function (b) {
                          return s(b, w);
                        },
                    onPointerEnter: h.props.usePointerEvent
                      ? function (b) {
                          return s(b, w);
                        }
                      : void 0,
                    onMouseLeave: h.props.usePointerEvent
                      ? void 0
                      : function (b) {
                          return l(b, w);
                        },
                    onPointerLeave: h.props.usePointerEvent
                      ? function (b) {
                          return l(b, w);
                        }
                      : void 0,
                    key: w,
                    "aria-current": h.isCurrentYear(w) ? "date" : void 0,
                  },
                  h.getYearContent(w)
                )
              );
            },
            h = this,
            v = c;
          v <= d;
          v++
        )
          f(v);
        return _.createElement(
          "div",
          { className: "react-datepicker__year" },
          _.createElement(
            "div",
            {
              className: "react-datepicker__year-wrapper",
              onMouseLeave: this.props.usePointerEvent
                ? void 0
                : this.props.clearSelectingDate,
              onPointerLeave: this.props.usePointerEvent
                ? this.props.clearSelectingDate
                : void 0,
            },
            r
          )
        );
      }),
      t
    );
  })(x.Component);
function FR(e, t, n, r) {
  for (var i = [], a = 0; a < 2 * t + 1; a++) {
    var o = e + t - a,
      s = !0;
    n && (s = G(n) <= o), r && s && (s = G(r) >= o), s && i.push(o);
  }
  return i;
}
var VR = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      (r.renderOptions = function () {
        var s = r.props.year,
          l = r.state.yearsList.map(function (d) {
            return _.createElement(
              "div",
              {
                className:
                  s === d
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: d,
                onClick: r.onChange.bind(r, d),
                "aria-selected": s === d ? "true" : void 0,
              },
              s === d
                ? _.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              d
            );
          }),
          u = r.props.minDate ? G(r.props.minDate) : null,
          c = r.props.maxDate ? G(r.props.maxDate) : null;
        return (
          (!c ||
            !r.state.yearsList.find(function (d) {
              return d === c;
            })) &&
            l.unshift(
              _.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: r.incrementYears,
                },
                _.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                })
              )
            ),
          (!u ||
            !r.state.yearsList.find(function (d) {
              return d === u;
            })) &&
            l.push(
              _.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: r.decrementYears,
                },
                _.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                })
              )
            ),
          l
        );
      }),
        (r.onChange = function (s) {
          r.props.onChange(s);
        }),
        (r.handleClickOutside = function () {
          r.props.onCancel();
        }),
        (r.shiftYears = function (s) {
          var l = r.state.yearsList.map(function (u) {
            return u + s;
          });
          r.setState({ yearsList: l });
        }),
        (r.incrementYears = function () {
          return r.shiftYears(1);
        }),
        (r.decrementYears = function () {
          return r.shiftYears(-1);
        });
      var i = n.yearDropdownItemNumber,
        a = n.scrollableYearDropdown,
        o = i || (a ? 10 : 5);
      return (
        (r.state = {
          yearsList: FR(r.props.year, o, r.props.minDate, r.props.maxDate),
        }),
        (r.dropdownRef = x.createRef()),
        r
      );
    }
    return (
      (t.prototype.componentDidMount = function () {
        var n = this.dropdownRef.current;
        if (n) {
          var r = n.children ? Array.from(n.children) : null,
            i = r
              ? r.find(function (a) {
                  return a.ariaSelected;
                })
              : null;
          n.scrollTop =
            i && i instanceof HTMLElement
              ? i.offsetTop + (i.clientHeight - n.clientHeight) / 2
              : (n.scrollHeight - n.clientHeight) / 2;
        }
      }),
      (t.prototype.render = function () {
        var n = Ve({
          "react-datepicker__year-dropdown": !0,
          "react-datepicker__year-dropdown--scrollable":
            this.props.scrollableYearDropdown,
        });
        return _.createElement(
          zl,
          {
            className: n,
            containerRef: this.dropdownRef,
            onClickOutside: this.handleClickOutside,
          },
          this.renderOptions()
        );
      }),
      t
    );
  })(x.Component),
  BR = (function (e) {
    Ie(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.state = { dropdownVisible: !1 }),
        (n.renderSelectOptions = function () {
          for (
            var r = n.props.minDate ? G(n.props.minDate) : 1900,
              i = n.props.maxDate ? G(n.props.maxDate) : 2100,
              a = [],
              o = r;
            o <= i;
            o++
          )
            a.push(_.createElement("option", { key: o, value: o }, o));
          return a;
        }),
        (n.onSelectChange = function (r) {
          n.onChange(parseInt(r.target.value));
        }),
        (n.renderSelectMode = function () {
          return _.createElement(
            "select",
            {
              value: n.props.year,
              className: "react-datepicker__year-select",
              onChange: n.onSelectChange,
            },
            n.renderSelectOptions()
          );
        }),
        (n.renderReadView = function (r) {
          return _.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (i) {
                return n.toggleDropdown(i);
              },
            },
            _.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            _.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              n.props.year
            )
          );
        }),
        (n.renderDropdown = function () {
          return _.createElement(
            VR,
            te({ key: "dropdown" }, n.props, {
              onChange: n.onChange,
              onCancel: n.toggleDropdown,
            })
          );
        }),
        (n.renderScrollMode = function () {
          var r = n.state.dropdownVisible,
            i = [n.renderReadView(!r)];
          return r && i.unshift(n.renderDropdown()), i;
        }),
        (n.onChange = function (r) {
          n.toggleDropdown(), r !== n.props.year && n.props.onChange(r);
        }),
        (n.toggleDropdown = function (r) {
          n.setState(
            { dropdownVisible: !n.state.dropdownVisible },
            function () {
              n.props.adjustDateOnChange && n.handleYearChange(n.props.date, r);
            }
          );
        }),
        (n.handleYearChange = function (r, i) {
          var a;
          (a = n.onSelect) === null || a === void 0 || a.call(n, r, i),
            n.setOpen();
        }),
        (n.onSelect = function (r, i) {
          var a, o;
          (o = (a = n.props).onSelect) === null ||
            o === void 0 ||
            o.call(a, r, i);
        }),
        (n.setOpen = function () {
          var r, i;
          (i = (r = n.props).setOpen) === null || i === void 0 || i.call(r, !0);
        }),
        n
      );
    }
    return (
      (t.prototype.render = function () {
        var n;
        switch (this.props.dropdownMode) {
          case "scroll":
            n = this.renderScrollMode();
            break;
          case "select":
            n = this.renderSelectMode();
            break;
        }
        return _.createElement(
          "div",
          {
            className:
              "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                this.props.dropdownMode
              ),
          },
          n
        );
      }),
      t
    );
  })(x.Component),
  YR = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  WR = function (e) {
    var t = (e.className || "").split(/\s+/);
    return YR.some(function (n) {
      return t.indexOf(n) >= 0;
    });
  },
  HR = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (
        (r.monthContainer = void 0),
        (r.handleClickOutside = function (i) {
          r.props.onClickOutside(i);
        }),
        (r.setClickOutsideRef = function () {
          return r.containerRef.current;
        }),
        (r.handleDropdownFocus = function (i) {
          var a, o;
          WR(i.target) &&
            ((o = (a = r.props).onDropdownFocus) === null ||
              o === void 0 ||
              o.call(a, i));
        }),
        (r.getDateInView = function () {
          var i = r.props,
            a = i.preSelection,
            o = i.selected,
            s = i.openToDate,
            l = Gw(r.props),
            u = qw(r.props),
            c = ie(),
            d = s || o || a;
          return d || (l && Rr(c, l) ? l : u && tr(c, u) ? u : c);
        }),
        (r.increaseMonth = function () {
          r.setState(
            function (i) {
              var a = i.date;
              return { date: Yt(a, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        (r.decreaseMonth = function () {
          r.setState(
            function (i) {
              var a = i.date;
              return { date: Cr(a, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        (r.handleDayClick = function (i, a, o) {
          r.props.onSelect(i, a, o),
            r.props.setPreSelection && r.props.setPreSelection(i);
        }),
        (r.handleDayMouseEnter = function (i) {
          r.setState({ selectingDate: i }),
            r.props.onDayMouseEnter && r.props.onDayMouseEnter(i);
        }),
        (r.handleMonthMouseLeave = function () {
          r.setState({ selectingDate: void 0 }),
            r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
        }),
        (r.handleYearMouseEnter = function (i, a) {
          r.setState({ selectingDate: $t(ie(), a) }),
            r.props.onYearMouseEnter && r.props.onYearMouseEnter(i, a);
        }),
        (r.handleYearMouseLeave = function (i, a) {
          r.props.onYearMouseLeave && r.props.onYearMouseLeave(i, a);
        }),
        (r.handleYearChange = function (i) {
          var a, o, s, l;
          (o = (a = r.props).onYearChange) === null ||
            o === void 0 ||
            o.call(a, i),
            r.setState({ isRenderAriaLiveMessage: !0 }),
            r.props.adjustDateOnChange &&
              (r.props.onSelect(i),
              (l = (s = r.props).setOpen) === null ||
                l === void 0 ||
                l.call(s, !0)),
            r.props.setPreSelection && r.props.setPreSelection(i);
        }),
        (r.getEnabledPreSelectionDateForMonth = function (i) {
          if (!kt(i, r.props)) return i;
          for (
            var a = wn(i), o = cR(i), s = bT(o, a), l = null, u = 0;
            u <= s;
            u++
          ) {
            var c = Ft(a, u);
            if (!kt(c, r.props)) {
              l = c;
              break;
            }
          }
          return l;
        }),
        (r.handleMonthChange = function (i) {
          var a,
            o,
            s,
            l =
              (a = r.getEnabledPreSelectionDateForMonth(i)) !== null &&
              a !== void 0
                ? a
                : i;
          r.handleCustomMonthChange(l),
            r.props.adjustDateOnChange &&
              (r.props.onSelect(l),
              (s = (o = r.props).setOpen) === null ||
                s === void 0 ||
                s.call(o, !0)),
            r.props.setPreSelection && r.props.setPreSelection(l);
        }),
        (r.handleCustomMonthChange = function (i) {
          var a, o;
          (o = (a = r.props).onMonthChange) === null ||
            o === void 0 ||
            o.call(a, i),
            r.setState({ isRenderAriaLiveMessage: !0 });
        }),
        (r.handleMonthYearChange = function (i) {
          r.handleYearChange(i), r.handleMonthChange(i);
        }),
        (r.changeYear = function (i) {
          r.setState(
            function (a) {
              var o = a.date;
              return { date: $t(o, Number(i)) };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        (r.changeMonth = function (i) {
          r.setState(
            function (a) {
              var o = a.date;
              return { date: wt(o, Number(i)) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        (r.changeMonthYear = function (i) {
          r.setState(
            function (a) {
              var o = a.date;
              return { date: $t(wt(o, $e(i)), G(i)) };
            },
            function () {
              return r.handleMonthYearChange(r.state.date);
            }
          );
        }),
        (r.header = function (i) {
          i === void 0 && (i = r.state.date);
          var a = Xn(i, r.props.locale, r.props.calendarStartDay),
            o = [];
          return (
            r.props.showWeekNumbers &&
              o.push(
                _.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  r.props.weekLabel || "#"
                )
              ),
            o.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (s) {
                var l = Ft(a, s),
                  u = r.formatWeekday(l, r.props.locale),
                  c = r.props.weekDayClassName
                    ? r.props.weekDayClassName(l)
                    : void 0;
                return _.createElement(
                  "div",
                  {
                    key: s,
                    "aria-label": pe(l, "EEEE", r.props.locale),
                    className: Ve("react-datepicker__day-name", c),
                  },
                  u
                );
              })
            )
          );
        }),
        (r.formatWeekday = function (i, a) {
          return r.props.formatWeekDay
            ? dR(i, r.props.formatWeekDay, a)
            : r.props.useWeekdaysShort
            ? pR(i, a)
            : fR(i, a);
        }),
        (r.decreaseYear = function () {
          r.setState(
            function (i) {
              var a,
                o = i.date;
              return {
                date: Ci(
                  o,
                  r.props.showYearPicker
                    ? (a = r.props.yearItemNumber) !== null && a !== void 0
                      ? a
                      : t.defaultProps.yearItemNumber
                    : 1
                ),
              };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        (r.clearSelectingDate = function () {
          r.setState({ selectingDate: void 0 });
        }),
        (r.renderPreviousButton = function () {
          var i, a, o;
          if (!r.props.renderCustomHeader) {
            var s =
                (i = r.props.monthsShown) !== null && i !== void 0
                  ? i
                  : t.defaultProps.monthsShown,
              l = r.props.showPreviousMonths ? s - 1 : 0,
              u =
                (a = r.props.monthSelectedIn) !== null && a !== void 0 ? a : l,
              c = Cr(r.state.date, u),
              d;
            switch (!0) {
              case r.props.showMonthYearPicker:
                d = Ig(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                d = vR(r.state.date, r.props);
                break;
              case r.props.showQuarterYearPicker:
                d = gR(r.state.date, r.props);
                break;
              default:
                d = jg(c, r.props);
                break;
            }
            if (
              !(
                (!((o = r.props.forceShowMonthNavigation) !== null &&
                o !== void 0
                  ? o
                  : t.defaultProps.forceShowMonthNavigation) &&
                  !r.props.showDisabledMonthNavigation &&
                  d) ||
                r.props.showTimeSelectOnly
              )
            ) {
              var f = [
                  "react-datepicker__navigation-icon",
                  "react-datepicker__navigation-icon--previous",
                ],
                h = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous",
                ],
                v = r.decreaseMonth;
              (r.props.showMonthYearPicker ||
                r.props.showQuarterYearPicker ||
                r.props.showYearPicker) &&
                (v = r.decreaseYear),
                d &&
                  r.props.showDisabledMonthNavigation &&
                  (h.push("react-datepicker__navigation--previous--disabled"),
                  (v = void 0));
              var w =
                  r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker,
                b = r.props,
                g = b.previousMonthButtonLabel,
                m = g === void 0 ? t.defaultProps.previousMonthButtonLabel : g,
                y = b.previousYearButtonLabel,
                S = y === void 0 ? t.defaultProps.previousYearButtonLabel : y,
                k = r.props,
                E = k.previousMonthAriaLabel,
                C =
                  E === void 0
                    ? typeof m == "string"
                      ? m
                      : "Previous Month"
                    : E,
                D = k.previousYearAriaLabel,
                M =
                  D === void 0
                    ? typeof S == "string"
                      ? S
                      : "Previous Year"
                    : D;
              return _.createElement(
                "button",
                {
                  type: "button",
                  className: h.join(" "),
                  onClick: v,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": w ? M : C,
                },
                _.createElement("span", { className: f.join(" ") }, w ? S : m)
              );
            }
          }
        }),
        (r.increaseYear = function () {
          r.setState(
            function (i) {
              var a,
                o = i.date;
              return {
                date: gn(
                  o,
                  r.props.showYearPicker
                    ? (a = r.props.yearItemNumber) !== null && a !== void 0
                      ? a
                      : t.defaultProps.yearItemNumber
                    : 1
                ),
              };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        (r.renderNextButton = function () {
          var i;
          if (!r.props.renderCustomHeader) {
            var a;
            switch (!0) {
              case r.props.showMonthYearPicker:
                a = Fg(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                a = xR(r.state.date, r.props);
                break;
              case r.props.showQuarterYearPicker:
                a = yR(r.state.date, r.props);
                break;
              default:
                a = Lg(r.state.date, r.props);
                break;
            }
            if (
              !(
                (!((i = r.props.forceShowMonthNavigation) !== null &&
                i !== void 0
                  ? i
                  : t.defaultProps.forceShowMonthNavigation) &&
                  !r.props.showDisabledMonthNavigation &&
                  a) ||
                r.props.showTimeSelectOnly
              )
            ) {
              var o = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--next",
                ],
                s = [
                  "react-datepicker__navigation-icon",
                  "react-datepicker__navigation-icon--next",
                ];
              r.props.showTimeSelect &&
                o.push("react-datepicker__navigation--next--with-time"),
                r.props.todayButton &&
                  o.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var l = r.increaseMonth;
              (r.props.showMonthYearPicker ||
                r.props.showQuarterYearPicker ||
                r.props.showYearPicker) &&
                (l = r.increaseYear),
                a &&
                  r.props.showDisabledMonthNavigation &&
                  (o.push("react-datepicker__navigation--next--disabled"),
                  (l = void 0));
              var u =
                  r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker,
                c = r.props,
                d = c.nextMonthButtonLabel,
                f = d === void 0 ? t.defaultProps.nextMonthButtonLabel : d,
                h = c.nextYearButtonLabel,
                v = h === void 0 ? t.defaultProps.nextYearButtonLabel : h,
                w = r.props,
                b = w.nextMonthAriaLabel,
                g =
                  b === void 0 ? (typeof f == "string" ? f : "Next Month") : b,
                m = w.nextYearAriaLabel,
                y = m === void 0 ? (typeof v == "string" ? v : "Next Year") : m;
              return _.createElement(
                "button",
                {
                  type: "button",
                  className: o.join(" "),
                  onClick: l,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": u ? y : g,
                },
                _.createElement("span", { className: s.join(" ") }, u ? v : f)
              );
            }
          }
        }),
        (r.renderCurrentMonth = function (i) {
          i === void 0 && (i = r.state.date);
          var a = ["react-datepicker__current-month"];
          return (
            r.props.showYearDropdown &&
              a.push("react-datepicker__current-month--hasYearDropdown"),
            r.props.showMonthDropdown &&
              a.push("react-datepicker__current-month--hasMonthDropdown"),
            r.props.showMonthYearDropdown &&
              a.push("react-datepicker__current-month--hasMonthYearDropdown"),
            _.createElement(
              "h2",
              { className: a.join(" ") },
              pe(i, r.props.dateFormat, r.props.locale)
            )
          );
        }),
        (r.renderYearDropdown = function (i) {
          if ((i === void 0 && (i = !1), !(!r.props.showYearDropdown || i)))
            return _.createElement(
              BR,
              te({}, t.defaultProps, r.props, {
                date: r.state.date,
                onChange: r.changeYear,
                year: G(r.state.date),
              })
            );
        }),
        (r.renderMonthDropdown = function (i) {
          if ((i === void 0 && (i = !1), !(!r.props.showMonthDropdown || i)))
            return _.createElement(
              AR,
              te({}, t.defaultProps, r.props, {
                month: $e(r.state.date),
                onChange: r.changeMonth,
              })
            );
        }),
        (r.renderMonthYearDropdown = function (i) {
          if (
            (i === void 0 && (i = !1), !(!r.props.showMonthYearDropdown || i))
          )
            return _.createElement(
              jR,
              te({}, t.defaultProps, r.props, {
                date: r.state.date,
                onChange: r.changeMonthYear,
              })
            );
        }),
        (r.handleTodayButtonClick = function (i) {
          r.props.onSelect(Ng(), i),
            r.props.setPreSelection && r.props.setPreSelection(Ng());
        }),
        (r.renderTodayButton = function () {
          if (!(!r.props.todayButton || r.props.showTimeSelectOnly))
            return _.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: r.handleTodayButtonClick,
              },
              r.props.todayButton
            );
        }),
        (r.renderDefaultHeader = function (i) {
          var a = i.monthDate,
            o = i.i;
          return _.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                r.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            r.renderCurrentMonth(a),
            _.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    r.props.dropdownMode
                  ),
                onFocus: r.handleDropdownFocus,
              },
              r.renderMonthDropdown(o !== 0),
              r.renderMonthYearDropdown(o !== 0),
              r.renderYearDropdown(o !== 0)
            ),
            _.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              r.header(a)
            )
          );
        }),
        (r.renderCustomHeader = function (i) {
          var a,
            o,
            s = i.monthDate,
            l = i.i;
          if (
            (r.props.showTimeSelect && !r.state.monthContainer) ||
            r.props.showTimeSelectOnly
          )
            return null;
          var u = jg(r.state.date, r.props),
            c = Lg(r.state.date, r.props),
            d = Ig(r.state.date, r.props),
            f = Fg(r.state.date, r.props),
            h =
              !r.props.showMonthYearPicker &&
              !r.props.showQuarterYearPicker &&
              !r.props.showYearPicker;
          return _.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: r.props.onDropdownFocus,
            },
            (o = (a = r.props).renderCustomHeader) === null || o === void 0
              ? void 0
              : o.call(
                  a,
                  te(te({}, r.state), {
                    customHeaderCount: l,
                    monthDate: s,
                    changeMonth: r.changeMonth,
                    changeYear: r.changeYear,
                    decreaseMonth: r.decreaseMonth,
                    increaseMonth: r.increaseMonth,
                    decreaseYear: r.decreaseYear,
                    increaseYear: r.increaseYear,
                    prevMonthButtonDisabled: u,
                    nextMonthButtonDisabled: c,
                    prevYearButtonDisabled: d,
                    nextYearButtonDisabled: f,
                  })
                ),
            h &&
              _.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                r.header(s)
              )
          );
        }),
        (r.renderYearHeader = function (i) {
          var a = i.monthDate,
            o = r.props,
            s = o.showYearPicker,
            l = o.yearItemNumber,
            u = l === void 0 ? t.defaultProps.yearItemNumber : l,
            c = Yn(a, u),
            d = c.startPeriod,
            f = c.endPeriod;
          return _.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            s ? "".concat(d, " - ").concat(f) : G(a)
          );
        }),
        (r.renderHeader = function (i) {
          var a = i.monthDate,
            o = i.i,
            s = o === void 0 ? 0 : o,
            l = { monthDate: a, i: s };
          switch (!0) {
            case r.props.renderCustomHeader !== void 0:
              return r.renderCustomHeader(l);
            case r.props.showMonthYearPicker ||
              r.props.showQuarterYearPicker ||
              r.props.showYearPicker:
              return r.renderYearHeader(l);
            default:
              return r.renderDefaultHeader(l);
          }
        }),
        (r.renderMonths = function () {
          var i, a;
          if (!(r.props.showTimeSelectOnly || r.props.showYearPicker)) {
            for (
              var o = [],
                s =
                  (i = r.props.monthsShown) !== null && i !== void 0
                    ? i
                    : t.defaultProps.monthsShown,
                l = r.props.showPreviousMonths ? s - 1 : 0,
                u =
                  r.props.showMonthYearPicker || r.props.showQuarterYearPicker
                    ? gn(r.state.date, l)
                    : Cr(r.state.date, l),
                c =
                  (a = r.props.monthSelectedIn) !== null && a !== void 0
                    ? a
                    : l,
                d = 0;
              d < s;
              ++d
            ) {
              var f = d - c + l,
                h =
                  r.props.showMonthYearPicker || r.props.showQuarterYearPicker
                    ? gn(u, f)
                    : Yt(u, f),
                v = "month-".concat(d),
                w = d < s - 1,
                b = d > 0;
              o.push(
                _.createElement(
                  "div",
                  {
                    key: v,
                    ref: function (g) {
                      r.monthContainer = g ?? void 0;
                    },
                    className: "react-datepicker__month-container",
                  },
                  r.renderHeader({ monthDate: h, i: d }),
                  _.createElement(
                    NR,
                    te({}, t.defaultProps, r.props, {
                      containerRef: r.containerRef,
                      ariaLabelPrefix: r.props.monthAriaLabelPrefix,
                      day: h,
                      onDayClick: r.handleDayClick,
                      handleOnKeyDown: r.props.handleOnDayKeyDown,
                      handleOnMonthKeyDown: r.props.handleOnKeyDown,
                      onDayMouseEnter: r.handleDayMouseEnter,
                      onMouseLeave: r.handleMonthMouseLeave,
                      orderInDisplay: d,
                      selectingDate: r.state.selectingDate,
                      monthShowsDuplicateDaysEnd: w,
                      monthShowsDuplicateDaysStart: b,
                    })
                  )
                )
              );
            }
            return o;
          }
        }),
        (r.renderYears = function () {
          if (!r.props.showTimeSelectOnly && r.props.showYearPicker)
            return _.createElement(
              "div",
              { className: "react-datepicker__year--container" },
              r.renderHeader({ monthDate: r.state.date }),
              _.createElement(
                IR,
                te({}, t.defaultProps, r.props, {
                  selectingDate: r.state.selectingDate,
                  date: r.state.date,
                  onDayClick: r.handleDayClick,
                  clearSelectingDate: r.clearSelectingDate,
                  onYearMouseEnter: r.handleYearMouseEnter,
                  onYearMouseLeave: r.handleYearMouseLeave,
                })
              )
            );
        }),
        (r.renderTimeSection = function () {
          if (
            r.props.showTimeSelect &&
            (r.state.monthContainer || r.props.showTimeSelectOnly)
          )
            return _.createElement(
              LR,
              te({}, t.defaultProps, r.props, {
                onChange: r.props.onTimeChange,
                format: r.props.timeFormat,
                intervals: r.props.timeIntervals,
                monthRef: r.state.monthContainer,
              })
            );
        }),
        (r.renderInputTimeSection = function () {
          var i = r.props.selected ? new Date(r.props.selected) : void 0,
            a = i && $l(i) && !!r.props.selected,
            o = a
              ? "".concat(Bg(i.getHours()), ":").concat(Bg(i.getMinutes()))
              : "";
          if (r.props.showTimeInput)
            return _.createElement(
              CR,
              te({}, t.defaultProps, r.props, {
                date: i,
                timeString: o,
                onChange: r.props.onTimeChange,
              })
            );
        }),
        (r.renderAriaLiveRegion = function () {
          var i,
            a = Yn(
              r.state.date,
              (i = r.props.yearItemNumber) !== null && i !== void 0
                ? i
                : t.defaultProps.yearItemNumber
            ),
            o = a.startPeriod,
            s = a.endPeriod,
            l;
          return (
            r.props.showYearPicker
              ? (l = "".concat(o, " - ").concat(s))
              : r.props.showMonthYearPicker || r.props.showQuarterYearPicker
              ? (l = G(r.state.date))
              : (l = ""
                  .concat(xp($e(r.state.date), r.props.locale), " ")
                  .concat(G(r.state.date))),
            _.createElement(
              "span",
              {
                role: "alert",
                "aria-live": "polite",
                className: "react-datepicker__aria-live",
              },
              r.state.isRenderAriaLiveMessage && l
            )
          );
        }),
        (r.renderChildren = function () {
          if (r.props.children)
            return _.createElement(
              "div",
              { className: "react-datepicker__children-container" },
              r.props.children
            );
        }),
        (r.containerRef = x.createRef()),
        (r.state = {
          date: r.getDateInView(),
          selectingDate: void 0,
          monthContainer: void 0,
          isRenderAriaLiveMessage: !1,
        }),
        r
      );
    }
    return (
      Object.defineProperty(t, "defaultProps", {
        get: function () {
          return {
            monthsShown: 1,
            forceShowMonthNavigation: !1,
            timeCaption: "Time",
            previousYearButtonLabel: "Previous Year",
            nextYearButtonLabel: "Next Year",
            previousMonthButtonLabel: "Previous Month",
            nextMonthButtonLabel: "Next Month",
            yearItemNumber: po,
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidMount = function () {
        var n = this;
        this.props.showTimeSelect &&
          (this.assignMonthContainer = (function () {
            n.setState({ monthContainer: n.monthContainer });
          })());
      }),
      (t.prototype.componentDidUpdate = function (n) {
        var r = this;
        if (
          this.props.preSelection &&
          (!ee(this.props.preSelection, n.preSelection) ||
            this.props.monthSelectedIn !== n.monthSelectedIn)
        ) {
          var i = !Ge(this.state.date, this.props.preSelection);
          this.setState({ date: this.props.preSelection }, function () {
            return i && r.handleCustomMonthChange(r.state.date);
          });
        } else
          this.props.openToDate &&
            !ee(this.props.openToDate, n.openToDate) &&
            this.setState({ date: this.props.openToDate });
      }),
      (t.prototype.render = function () {
        var n = this.props.container || rR;
        return _.createElement(
          zl,
          {
            onClickOutside: this.handleClickOutside,
            style: { display: "contents" },
            ignoreClass: this.props.outsideClickIgnoreClass,
          },
          _.createElement(
            "div",
            { style: { display: "contents" }, ref: this.containerRef },
            _.createElement(
              n,
              {
                className: Ve("react-datepicker", this.props.className, {
                  "react-datepicker--time-only": this.props.showTimeSelectOnly,
                }),
                showTime: this.props.showTimeSelect || this.props.showTimeInput,
                showTimeSelectOnly: this.props.showTimeSelectOnly,
              },
              this.renderAriaLiveRegion(),
              this.renderPreviousButton(),
              this.renderNextButton(),
              this.renderMonths(),
              this.renderYears(),
              this.renderTodayButton(),
              this.renderTimeSection(),
              this.renderInputTimeSection(),
              this.renderChildren()
            )
          )
        );
      }),
      t
    );
  })(x.Component),
  zR = function (e) {
    var t = e.icon,
      n = e.className,
      r = n === void 0 ? "" : n,
      i = e.onClick,
      a = "react-datepicker__calendar-icon";
    if (typeof t == "string")
      return _.createElement("i", {
        className: "".concat(a, " ").concat(t, " ").concat(r),
        "aria-hidden": "true",
        onClick: i,
      });
    if (_.isValidElement(t)) {
      var o = t;
      return _.cloneElement(o, {
        className: ""
          .concat(o.props.className || "", " ")
          .concat(a, " ")
          .concat(r),
        onClick: function (s) {
          typeof o.props.onClick == "function" && o.props.onClick(s),
            typeof i == "function" && i(s);
        },
      });
    }
    return _.createElement(
      "svg",
      {
        className: "".concat(a, " ").concat(r),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        onClick: i,
      },
      _.createElement("path", {
        d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
      })
    );
  },
  Zw = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (r.portalRoot = null), (r.el = document.createElement("div")), r;
    }
    return (
      (t.prototype.componentDidMount = function () {
        (this.portalRoot = (this.props.portalHost || document).getElementById(
          this.props.portalId
        )),
          this.portalRoot ||
            ((this.portalRoot = document.createElement("div")),
            this.portalRoot.setAttribute("id", this.props.portalId),
            (this.props.portalHost || document.body).appendChild(
              this.portalRoot
            )),
          this.portalRoot.appendChild(this.el);
      }),
      (t.prototype.componentWillUnmount = function () {
        this.portalRoot && this.portalRoot.removeChild(this.el);
      }),
      (t.prototype.render = function () {
        return _S.createPortal(this.props.children, this.el);
      }),
      t
    );
  })(x.Component),
  $R = "[tabindex], a, button, input, select, textarea",
  UR = function (e) {
    return (e instanceof HTMLAnchorElement || !e.disabled) && e.tabIndex !== -1;
  },
  Jw = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (
        (r.getTabChildren = function () {
          var i;
          return Array.prototype.slice
            .call(
              (i = r.tabLoopRef.current) === null || i === void 0
                ? void 0
                : i.querySelectorAll($R),
              1,
              -1
            )
            .filter(UR);
        }),
        (r.handleFocusStart = function () {
          var i = r.getTabChildren();
          i && i.length > 1 && i[i.length - 1].focus();
        }),
        (r.handleFocusEnd = function () {
          var i = r.getTabChildren();
          i && i.length > 1 && i[0].focus();
        }),
        (r.tabLoopRef = x.createRef()),
        r
      );
    }
    return (
      (t.prototype.render = function () {
        var n;
        return (
          (n = this.props.enableTabLoop) !== null && n !== void 0
            ? n
            : t.defaultProps.enableTabLoop
        )
          ? _.createElement(
              "div",
              { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
              _.createElement("div", {
                className: "react-datepicker__tab-loop__start",
                tabIndex: 0,
                onFocus: this.handleFocusStart,
              }),
              this.props.children,
              _.createElement("div", {
                className: "react-datepicker__tab-loop__end",
                tabIndex: 0,
                onFocus: this.handleFocusEnd,
              })
            )
          : this.props.children;
      }),
      (t.defaultProps = { enableTabLoop: !0 }),
      t
    );
  })(x.Component);
function KR(e) {
  var t = function (n) {
    var r,
      i = typeof n.hidePopper == "boolean" ? n.hidePopper : !0,
      a = x.useRef(null),
      o = nR(
        te(
          {
            open: !i,
            whileElementsMounted: OA,
            placement: n.popperPlacement,
            middleware: qt(
              [HA({ padding: 15 }), WA(10), zA({ element: a })],
              (r = n.popperModifiers) !== null && r !== void 0 ? r : [],
              !0
            ),
          },
          n.popperProps
        )
      ),
      s = te(te({}, n), {
        hidePopper: i,
        popperProps: te(te({}, o), { arrowRef: a }),
      });
    return _.createElement(e, te({}, s));
  };
  return t;
}
var QR = (function (e) {
    Ie(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      Object.defineProperty(t, "defaultProps", {
        get: function () {
          return { hidePopper: !0 };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.render = function () {
        var n = this.props,
          r = n.className,
          i = n.wrapperClassName,
          a = n.hidePopper,
          o = a === void 0 ? t.defaultProps.hidePopper : a,
          s = n.popperComponent,
          l = n.targetComponent,
          u = n.enableTabLoop,
          c = n.popperOnKeyDown,
          d = n.portalId,
          f = n.portalHost,
          h = n.popperProps,
          v = n.showArrow,
          w = void 0;
        if (!o) {
          var b = Ve("react-datepicker-popper", r);
          w = _.createElement(
            Jw,
            { enableTabLoop: u },
            _.createElement(
              "div",
              {
                ref: h.refs.setFloating,
                style: h.floatingStyles,
                className: b,
                "data-placement": h.placement,
                onKeyDown: c,
              },
              s,
              v &&
                _.createElement(GA, {
                  ref: h.arrowRef,
                  context: h.context,
                  fill: "currentColor",
                  strokeWidth: 1,
                  height: 8,
                  width: 16,
                  style: { transform: "translateY(-1px)" },
                  className: "react-datepicker__triangle",
                })
            )
          );
        }
        this.props.popperContainer &&
          (w = x.createElement(this.props.popperContainer, {}, w)),
          d &&
            !o &&
            (w = _.createElement(Zw, { portalId: d, portalHost: f }, w));
        var g = Ve("react-datepicker-wrapper", i);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("div", { ref: h.refs.setReference, className: g }, l),
          w
        );
      }),
      t
    );
  })(x.Component),
  GR = KR(QR),
  Ug = "react-datepicker-ignore-onclickoutside";
function qR(e, t) {
  return e && t ? $e(e) !== $e(t) || G(e) !== G(t) : e !== t;
}
var zu = "Date input not valid.",
  XR = (function (e) {
    Ie(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (
        (r.calendar = null),
        (r.input = null),
        (r.getPreSelection = function () {
          return r.props.openToDate
            ? r.props.openToDate
            : r.props.selectsEnd && r.props.startDate
            ? r.props.startDate
            : r.props.selectsStart && r.props.endDate
            ? r.props.endDate
            : ie();
        }),
        (r.modifyHolidays = function () {
          var i;
          return (i = r.props.holidays) === null || i === void 0
            ? void 0
            : i.reduce(function (a, o) {
                var s = new Date(o.date);
                return $l(s)
                  ? qt(qt([], a, !0), [te(te({}, o), { date: s })], !1)
                  : a;
              }, []);
        }),
        (r.calcInitialState = function () {
          var i,
            a = r.getPreSelection(),
            o = Gw(r.props),
            s = qw(r.props),
            l = o && Rr(a, ys(o)) ? o : s && tr(a, _g(s)) ? s : a;
          return {
            open: r.props.startOpen || !1,
            preventFocus: !1,
            inputValue: null,
            preSelection:
              (i = r.props.selectsRange
                ? r.props.startDate
                : r.props.selected) !== null && i !== void 0
                ? i
                : l,
            highlightDates: Vg(r.props.highlightDates),
            focused: !1,
            shouldFocusDayInline: !1,
            isRenderAriaLiveMessage: !1,
            wasHidden: !1,
          };
        }),
        (r.resetHiddenStatus = function () {
          r.setState(te(te({}, r.state), { wasHidden: !1 }));
        }),
        (r.setHiddenStatus = function () {
          r.setState(te(te({}, r.state), { wasHidden: !0 }));
        }),
        (r.setHiddenStateOnVisibilityHidden = function () {
          document.visibilityState === "hidden" && r.setHiddenStatus();
        }),
        (r.clearPreventFocusTimeout = function () {
          r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
        }),
        (r.setFocus = function () {
          var i, a;
          (a = (i = r.input) === null || i === void 0 ? void 0 : i.focus) ===
            null ||
            a === void 0 ||
            a.call(i, { preventScroll: !0 });
        }),
        (r.setBlur = function () {
          var i, a;
          (a = (i = r.input) === null || i === void 0 ? void 0 : i.blur) ===
            null ||
            a === void 0 ||
            a.call(i),
            r.cancelFocusInput();
        }),
        (r.deferBlur = function () {
          requestAnimationFrame(function () {
            r.setBlur();
          });
        }),
        (r.setOpen = function (i, a) {
          a === void 0 && (a = !1),
            r.setState(
              {
                open: i,
                preSelection:
                  i && r.state.open
                    ? r.state.preSelection
                    : r.calcInitialState().preSelection,
                lastPreSelectChange: $u,
              },
              function () {
                i ||
                  r.setState(
                    function (o) {
                      return { focused: a ? o.focused : !1 };
                    },
                    function () {
                      !a && r.deferBlur(), r.setState({ inputValue: null });
                    }
                  );
              }
            );
        }),
        (r.inputOk = function () {
          return yn(r.state.preSelection);
        }),
        (r.isCalendarOpen = function () {
          return r.props.open === void 0
            ? r.state.open && !r.props.disabled && !r.props.readOnly
            : r.props.open;
        }),
        (r.handleFocus = function (i) {
          var a,
            o,
            s = r.state.wasHidden,
            l = s ? r.state.open : !0;
          s && r.resetHiddenStatus(),
            r.state.preventFocus ||
              ((o = (a = r.props).onFocus) === null ||
                o === void 0 ||
                o.call(a, i),
              l &&
                !r.props.preventOpenOnFocus &&
                !r.props.readOnly &&
                r.setOpen(!0)),
            r.setState({ focused: !0 });
        }),
        (r.sendFocusBackToInput = function () {
          r.preventFocusTimeout && r.clearPreventFocusTimeout(),
            r.setState({ preventFocus: !0 }, function () {
              r.preventFocusTimeout = setTimeout(function () {
                r.setFocus(), r.setState({ preventFocus: !1 });
              });
            });
        }),
        (r.cancelFocusInput = function () {
          clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = void 0);
        }),
        (r.deferFocusInput = function () {
          r.cancelFocusInput(),
            (r.inputFocusTimeout = setTimeout(function () {
              return r.setFocus();
            }, 1));
        }),
        (r.handleDropdownFocus = function () {
          r.cancelFocusInput();
        }),
        (r.handleBlur = function (i) {
          var a, o;
          (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
            ((o = (a = r.props).onBlur) === null ||
              o === void 0 ||
              o.call(a, i)),
            r.state.open && r.props.open === !1 && r.setOpen(!1),
            r.setState({ focused: !1 });
        }),
        (r.handleCalendarClickOutside = function (i) {
          var a, o;
          r.props.inline || r.setOpen(!1),
            (o = (a = r.props).onClickOutside) === null ||
              o === void 0 ||
              o.call(a, i),
            r.props.withPortal && i.preventDefault();
        }),
        (r.handleChange = function () {
          for (var i, a, o, s, l, u = [], c = 0; c < arguments.length; c++)
            u[c] = arguments[c];
          var d = u[0];
          if (
            !(
              r.props.onChangeRaw &&
              (r.props.onChangeRaw.apply(r, u),
              !d ||
                typeof d.isDefaultPrevented != "function" ||
                d.isDefaultPrevented())
            )
          ) {
            r.setState({
              inputValue:
                (d == null ? void 0 : d.target) instanceof HTMLInputElement
                  ? d.target.value
                  : null,
              lastPreSelectChange: ZR,
            });
            var f = r.props,
              h = f.selectsRange,
              v = f.startDate,
              w = f.endDate,
              b =
                (i = r.props.dateFormat) !== null && i !== void 0
                  ? i
                  : t.defaultProps.dateFormat,
              g =
                (a = r.props.strictParsing) !== null && a !== void 0
                  ? a
                  : t.defaultProps.strictParsing,
              m =
                (d == null ? void 0 : d.target) instanceof HTMLInputElement
                  ? d.target.value
                  : "";
            if (h) {
              var y = m.split(b.includes("-") ? Uw : "-", 2).map(function (B) {
                  return B.trim();
                }),
                S = y[0],
                k = y[1],
                E = Yu(S ?? "", b, r.props.locale, g),
                C = Yu(k ?? "", b, r.props.locale, g),
                D =
                  (v == null ? void 0 : v.getTime()) !==
                  (E == null ? void 0 : E.getTime()),
                M =
                  (w == null ? void 0 : w.getTime()) !==
                  (C == null ? void 0 : C.getTime());
              if ((!D && !M) || (E && kt(E, r.props)) || (C && kt(C, r.props)))
                return;
              (s = (o = r.props).onChange) === null ||
                s === void 0 ||
                s.call(o, [E, C], d);
            } else {
              var A = Yu(
                m,
                b,
                r.props.locale,
                g,
                (l = r.props.selected) !== null && l !== void 0 ? l : void 0
              );
              (A || !m) && r.setSelected(A, d, !0);
            }
          }
        }),
        (r.handleSelect = function (i, a, o) {
          if (!r.props.readOnly) {
            if (
              (r.props.shouldCloseOnSelect &&
                !r.props.showTimeSelect &&
                r.sendFocusBackToInput(),
              r.props.onChangeRaw && r.props.onChangeRaw(a),
              r.setSelected(i, a, !1, o),
              r.props.showDateSelect &&
                r.setState({ isRenderAriaLiveMessage: !0 }),
              !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
            )
              r.setPreSelection(i);
            else if (!r.props.inline) {
              r.props.selectsRange || r.setOpen(!1);
              var s = r.props,
                l = s.startDate,
                u = s.endDate;
              l && !u && (r.props.swapRange || !Hg(i, l)) && r.setOpen(!1);
            }
          }
        }),
        (r.setSelected = function (i, a, o, s) {
          var l,
            u,
            c = i;
          if (r.props.showYearPicker) {
            if (c !== null && vs(G(c), r.props)) return;
          } else if (r.props.showMonthYearPicker) {
            if (c !== null && Qw(c, r.props)) return;
          } else if (c !== null && kt(c, r.props)) return;
          var d = r.props,
            f = d.onChange,
            h = d.selectsRange,
            v = d.startDate,
            w = d.endDate,
            b = d.selectsMultiple,
            g = d.selectedDates,
            m = d.minTime,
            y = d.swapRange;
          if (!xr(r.props.selected, c) || r.props.allowSameDay || h || b)
            if (
              (c !== null &&
                (r.props.selected &&
                  (!o ||
                    (!r.props.showTimeSelect &&
                      !r.props.showTimeSelectOnly &&
                      !r.props.showTimeInput)) &&
                  (c = Wu(c, {
                    hour: vn(r.props.selected),
                    minute: xn(r.props.selected),
                    second: qn(r.props.selected),
                  })),
                !o &&
                  (r.props.showTimeSelect || r.props.showTimeSelectOnly) &&
                  m &&
                  (c = Wu(c, {
                    hour: m.getHours(),
                    minute: m.getMinutes(),
                    second: m.getSeconds(),
                  })),
                r.props.inline || r.setState({ preSelection: c }),
                r.props.focusSelectedMonth ||
                  r.setState({ monthSelectedIn: s })),
              h)
            ) {
              var S = !v && !w,
                k = v && !w,
                E = v && w;
              S
                ? f == null || f([c, null], a)
                : k &&
                  (c === null
                    ? f == null || f([null, null], a)
                    : Hg(c, v)
                    ? y
                      ? f == null || f([c, v], a)
                      : f == null || f([c, null], a)
                    : f == null || f([v, c], a)),
                E && (f == null || f([c, null], a));
            } else if (b) {
              if (c !== null)
                if (!(g != null && g.length)) f == null || f([c], a);
                else {
                  var C = g.some(function (M) {
                    return ee(M, c);
                  });
                  if (C) {
                    var D = g.filter(function (M) {
                      return !ee(M, c);
                    });
                    f == null || f(D, a);
                  } else f == null || f(qt(qt([], g, !0), [c], !1), a);
                }
            } else f == null || f(c, a);
          o ||
            ((u = (l = r.props).onSelect) === null ||
              u === void 0 ||
              u.call(l, c, a),
            r.setState({ inputValue: null }));
        }),
        (r.setPreSelection = function (i) {
          if (!r.props.readOnly) {
            var a = yn(r.props.minDate),
              o = yn(r.props.maxDate),
              s = !0;
            if (i) {
              var l = ys(i);
              if (a && o) s = ua(i, r.props.minDate, r.props.maxDate);
              else if (a) {
                var u = ys(r.props.minDate);
                s = tr(i, u) || xr(l, u);
              } else if (o) {
                var c = _g(r.props.maxDate);
                s = Rr(i, c) || xr(l, c);
              }
            }
            s && r.setState({ preSelection: i });
          }
        }),
        (r.toggleCalendar = function () {
          r.setOpen(!r.state.open);
        }),
        (r.handleTimeChange = function (i) {
          var a, o;
          if (!(r.props.selectsRange || r.props.selectsMultiple)) {
            var s = r.props.selected ? r.props.selected : r.getPreSelection(),
              l = r.props.selected ? i : Wu(s, { hour: vn(i), minute: xn(i) });
            r.setState({ preSelection: l }),
              (o = (a = r.props).onChange) === null ||
                o === void 0 ||
                o.call(a, l),
              r.props.shouldCloseOnSelect &&
                !r.props.showTimeInput &&
                (r.sendFocusBackToInput(), r.setOpen(!1)),
              r.props.showTimeInput && r.setOpen(!0),
              (r.props.showTimeSelectOnly || r.props.showTimeSelect) &&
                r.setState({ isRenderAriaLiveMessage: !0 }),
              r.setState({ inputValue: null });
          }
        }),
        (r.onInputClick = function () {
          var i, a;
          !r.props.disabled && !r.props.readOnly && r.setOpen(!0),
            (a = (i = r.props).onInputClick) === null ||
              a === void 0 ||
              a.call(i);
        }),
        (r.onInputKeyDown = function (i) {
          var a, o, s, l, u, c;
          (o = (a = r.props).onKeyDown) === null ||
            o === void 0 ||
            o.call(a, i);
          var d = i.key;
          if (!r.state.open && !r.props.inline && !r.props.preventOpenOnFocus) {
            (d === L.ArrowDown || d === L.ArrowUp || d === L.Enter) &&
              ((s = r.onInputClick) === null || s === void 0 || s.call(r));
            return;
          }
          if (r.state.open) {
            if (d === L.ArrowDown || d === L.ArrowUp) {
              i.preventDefault();
              var f = r.props.showTimeSelectOnly
                  ? ".react-datepicker__time-list-item[tabindex='0']"
                  : r.props.showWeekPicker && r.props.showWeekNumbers
                  ? '.react-datepicker__week-number[tabindex="0"]'
                  : r.props.showFullMonthYearPicker ||
                    r.props.showMonthYearPicker
                  ? '.react-datepicker__month-text[tabindex="0"]'
                  : '.react-datepicker__day[tabindex="0"]',
                h =
                  ((l = r.calendar) === null || l === void 0
                    ? void 0
                    : l.containerRef.current) instanceof Element &&
                  r.calendar.containerRef.current.querySelector(f);
              h instanceof HTMLElement && h.focus({ preventScroll: !0 });
              return;
            }
            var v = ie(r.state.preSelection);
            d === L.Enter
              ? (i.preventDefault(),
                i.target.blur(),
                r.inputOk() && r.state.lastPreSelectChange === $u
                  ? (r.handleSelect(v, i),
                    !r.props.shouldCloseOnSelect && r.setPreSelection(v))
                  : r.setOpen(!1))
              : d === L.Escape
              ? (i.preventDefault(),
                i.target.blur(),
                r.sendFocusBackToInput(),
                r.setOpen(!1))
              : d === L.Tab && r.setOpen(!1),
              r.inputOk() ||
                (c = (u = r.props).onInputError) === null ||
                c === void 0 ||
                c.call(u, { code: 1, msg: zu });
          }
        }),
        (r.onPortalKeyDown = function (i) {
          var a = i.key;
          a === L.Escape &&
            (i.preventDefault(),
            r.setState({ preventFocus: !0 }, function () {
              r.setOpen(!1),
                setTimeout(function () {
                  r.setFocus(), r.setState({ preventFocus: !1 });
                });
            }));
        }),
        (r.onDayKeyDown = function (i) {
          var a,
            o,
            s,
            l,
            u,
            c,
            d = r.props,
            f = d.minDate,
            h = d.maxDate,
            v = d.disabledKeyboardNavigation,
            w = d.showWeekPicker,
            b = d.shouldCloseOnSelect,
            g = d.locale,
            m = d.calendarStartDay,
            y = d.adjustDateOnChange,
            S = d.inline;
          if (
            ((o = (a = r.props).onKeyDown) === null ||
              o === void 0 ||
              o.call(a, i),
            !v)
          ) {
            var k = i.key,
              E = i.shiftKey,
              C = ie(r.state.preSelection),
              D = function (Q, H) {
                var V = H;
                switch (Q) {
                  case L.ArrowRight:
                    V = w ? el(H, 1) : Ft(H, 1);
                    break;
                  case L.ArrowLeft:
                    V = w ? vg(H) : b_(H);
                    break;
                  case L.ArrowUp:
                    V = vg(H);
                    break;
                  case L.ArrowDown:
                    V = el(H, 1);
                    break;
                  case L.PageUp:
                    V = E ? Ci(H, 1) : Cr(H, 1);
                    break;
                  case L.PageDown:
                    V = E ? gn(H, 1) : Yt(H, 1);
                    break;
                  case L.Home:
                    V = Xn(H, g, m);
                    break;
                  case L.End:
                    V = uR(H);
                    break;
                }
                return V;
              },
              M = function (Q, H) {
                for (var V = 40, T = Q, N = !1, O = 0, W = D(Q, H); !N; ) {
                  if (O >= V) {
                    W = H;
                    break;
                  }
                  f &&
                    W < f &&
                    ((T = L.ArrowRight), (W = kt(f, r.props) ? D(T, W) : f)),
                    h &&
                      W > h &&
                      ((T = L.ArrowLeft), (W = kt(h, r.props) ? D(T, W) : h)),
                    kt(W, r.props)
                      ? ((T === L.PageUp || T === L.Home) && (T = L.ArrowRight),
                        (T === L.PageDown || T === L.End) && (T = L.ArrowLeft),
                        (W = D(T, W)))
                      : (N = !0),
                    O++;
                }
                return W;
              };
            if (k === L.Enter) {
              i.preventDefault(),
                r.handleSelect(C, i),
                !b && r.setPreSelection(C);
              return;
            } else if (k === L.Escape) {
              i.preventDefault(),
                r.setOpen(!1),
                r.inputOk() ||
                  (l = (s = r.props).onInputError) === null ||
                  l === void 0 ||
                  l.call(s, { code: 1, msg: zu });
              return;
            }
            var A = null;
            switch (k) {
              case L.ArrowLeft:
              case L.ArrowRight:
              case L.ArrowUp:
              case L.ArrowDown:
              case L.PageUp:
              case L.PageDown:
              case L.Home:
              case L.End:
                A = M(k, C);
                break;
            }
            if (!A) {
              (c = (u = r.props).onInputError) === null ||
                c === void 0 ||
                c.call(u, { code: 1, msg: zu });
              return;
            }
            if (
              (i.preventDefault(),
              r.setState({ lastPreSelectChange: $u }),
              y && r.setSelected(A),
              r.setPreSelection(A),
              S)
            ) {
              var B = $e(C),
                j = $e(A),
                U = G(C),
                K = G(A);
              B !== j || U !== K
                ? r.setState({ shouldFocusDayInline: !0 })
                : r.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        (r.onPopperKeyDown = function (i) {
          var a = i.key;
          a === L.Escape &&
            (i.preventDefault(), r.sendFocusBackToInput(), r.setOpen(!1));
        }),
        (r.onClearClick = function (i) {
          i && i.preventDefault && i.preventDefault(), r.sendFocusBackToInput();
          var a = r.props,
            o = a.selectsRange,
            s = a.onChange;
          o ? s == null || s([null, null], i) : s == null || s(null, i),
            r.setState({ inputValue: null });
        }),
        (r.clear = function () {
          r.onClearClick();
        }),
        (r.onScroll = function (i) {
          typeof r.props.closeOnScroll == "boolean" && r.props.closeOnScroll
            ? (i.target === document ||
                i.target === document.documentElement ||
                i.target === document.body) &&
              r.setOpen(!1)
            : typeof r.props.closeOnScroll == "function" &&
              r.props.closeOnScroll(i) &&
              r.setOpen(!1);
        }),
        (r.renderCalendar = function () {
          var i, a;
          return !r.props.inline && !r.isCalendarOpen()
            ? null
            : _.createElement(
                HR,
                te(
                  {
                    showMonthYearDropdown: void 0,
                    ref: function (o) {
                      r.calendar = o;
                    },
                  },
                  r.props,
                  r.state,
                  {
                    setOpen: r.setOpen,
                    dateFormat:
                      (i = r.props.dateFormatCalendar) !== null && i !== void 0
                        ? i
                        : t.defaultProps.dateFormatCalendar,
                    onSelect: r.handleSelect,
                    onClickOutside: r.handleCalendarClickOutside,
                    holidays: bR(r.modifyHolidays()),
                    outsideClickIgnoreClass: Ug,
                    onDropdownFocus: r.handleDropdownFocus,
                    onTimeChange: r.handleTimeChange,
                    className: r.props.calendarClassName,
                    container: r.props.calendarContainer,
                    handleOnKeyDown: r.props.onKeyDown,
                    handleOnDayKeyDown: r.onDayKeyDown,
                    setPreSelection: r.setPreSelection,
                    dropdownMode:
                      (a = r.props.dropdownMode) !== null && a !== void 0
                        ? a
                        : t.defaultProps.dropdownMode,
                  }
                ),
                r.props.children
              );
        }),
        (r.renderAriaLiveRegion = function () {
          var i = r.props,
            a = i.dateFormat,
            o = a === void 0 ? t.defaultProps.dateFormat : a,
            s = i.locale,
            l = r.props.showTimeInput || r.props.showTimeSelect,
            u = l ? "PPPPp" : "PPPP",
            c;
          return (
            r.props.selectsRange
              ? (c = "Selected start date: "
                  .concat(
                    xt(r.props.startDate, { dateFormat: u, locale: s }),
                    ". "
                  )
                  .concat(
                    r.props.endDate
                      ? "End date: " +
                          xt(r.props.endDate, { dateFormat: u, locale: s })
                      : ""
                  ))
              : r.props.showTimeSelectOnly
              ? (c = "Selected time: ".concat(
                  xt(r.props.selected, { dateFormat: o, locale: s })
                ))
              : r.props.showYearPicker
              ? (c = "Selected year: ".concat(
                  xt(r.props.selected, { dateFormat: "yyyy", locale: s })
                ))
              : r.props.showMonthYearPicker
              ? (c = "Selected month: ".concat(
                  xt(r.props.selected, { dateFormat: "MMMM yyyy", locale: s })
                ))
              : r.props.showQuarterYearPicker
              ? (c = "Selected quarter: ".concat(
                  xt(r.props.selected, { dateFormat: "yyyy, QQQ", locale: s })
                ))
              : (c = "Selected date: ".concat(
                  xt(r.props.selected, { dateFormat: u, locale: s })
                )),
            _.createElement(
              "span",
              {
                role: "alert",
                "aria-live": "polite",
                className: "react-datepicker__aria-live",
              },
              c
            )
          );
        }),
        (r.renderDateInput = function () {
          var i,
            a,
            o,
            s = Ve(r.props.className, ((i = {}), (i[Ug] = r.state.open), i)),
            l =
              r.props.customInput || _.createElement("input", { type: "text" }),
            u = r.props.customInputRef || "ref",
            c = r.props,
            d = c.dateFormat,
            f = d === void 0 ? t.defaultProps.dateFormat : d,
            h = c.locale,
            v =
              typeof r.props.value == "string"
                ? r.props.value
                : typeof r.state.inputValue == "string"
                ? r.state.inputValue
                : r.props.selectsRange
                ? aR(r.props.startDate, r.props.endDate, {
                    dateFormat: f,
                    locale: h,
                  })
                : r.props.selectsMultiple
                ? oR(
                    (o = r.props.selectedDates) !== null && o !== void 0
                      ? o
                      : [],
                    { dateFormat: f, locale: h }
                  )
                : xt(r.props.selected, { dateFormat: f, locale: h });
          return x.cloneElement(
            l,
            ((a = {}),
            (a[u] = function (w) {
              r.input = w;
            }),
            (a.value = v),
            (a.onBlur = r.handleBlur),
            (a.onChange = r.handleChange),
            (a.onClick = r.onInputClick),
            (a.onFocus = r.handleFocus),
            (a.onKeyDown = r.onInputKeyDown),
            (a.id = r.props.id),
            (a.name = r.props.name),
            (a.form = r.props.form),
            (a.autoFocus = r.props.autoFocus),
            (a.placeholder = r.props.placeholderText),
            (a.disabled = r.props.disabled),
            (a.autoComplete = r.props.autoComplete),
            (a.className = Ve(l.props.className, s)),
            (a.title = r.props.title),
            (a.readOnly = r.props.readOnly),
            (a.required = r.props.required),
            (a.tabIndex = r.props.tabIndex),
            (a["aria-describedby"] = r.props.ariaDescribedBy),
            (a["aria-invalid"] = r.props.ariaInvalid),
            (a["aria-labelledby"] = r.props.ariaLabelledBy),
            (a["aria-required"] = r.props.ariaRequired),
            a)
          );
        }),
        (r.renderClearButton = function () {
          var i = r.props,
            a = i.isClearable,
            o = i.disabled,
            s = i.selected,
            l = i.startDate,
            u = i.endDate,
            c = i.clearButtonTitle,
            d = i.clearButtonClassName,
            f = d === void 0 ? "" : d,
            h = i.ariaLabelClose,
            v = h === void 0 ? "Close" : h,
            w = i.selectedDates,
            b = i.readOnly;
          return a &&
            !b &&
            (s != null || l != null || u != null || (w != null && w.length))
            ? _.createElement("button", {
                type: "button",
                className: Ve("react-datepicker__close-icon", f, {
                  "react-datepicker__close-icon--disabled": o,
                }),
                disabled: o,
                "aria-label": v,
                onClick: r.onClearClick,
                title: c,
                tabIndex: -1,
              })
            : null;
        }),
        (r.state = r.calcInitialState()),
        (r.preventFocusTimeout = void 0),
        r
      );
    }
    return (
      Object.defineProperty(t, "defaultProps", {
        get: function () {
          return {
            allowSameDay: !1,
            dateFormat: "MM/dd/yyyy",
            dateFormatCalendar: "LLLL yyyy",
            disabled: !1,
            disabledKeyboardNavigation: !1,
            dropdownMode: "scroll",
            preventOpenOnFocus: !1,
            monthsShown: 1,
            readOnly: !1,
            withPortal: !1,
            selectsDisabledDaysInRange: !1,
            shouldCloseOnSelect: !0,
            showTimeSelect: !1,
            showTimeInput: !1,
            showPreviousMonths: !1,
            showMonthYearPicker: !1,
            showFullMonthYearPicker: !1,
            showTwoColumnMonthYearPicker: !1,
            showFourColumnMonthYearPicker: !1,
            showYearPicker: !1,
            showQuarterYearPicker: !1,
            showWeekPicker: !1,
            strictParsing: !1,
            swapRange: !1,
            timeIntervals: 30,
            timeCaption: "Time",
            previousMonthAriaLabel: "Previous Month",
            previousMonthButtonLabel: "Previous Month",
            nextMonthAriaLabel: "Next Month",
            nextMonthButtonLabel: "Next Month",
            previousYearAriaLabel: "Previous Year",
            previousYearButtonLabel: "Previous Year",
            nextYearAriaLabel: "Next Year",
            nextYearButtonLabel: "Next Year",
            timeInputLabel: "Time",
            enableTabLoop: !0,
            yearItemNumber: po,
            focusSelectedMonth: !1,
            showPopperArrow: !0,
            excludeScrollbar: !0,
            customTimeInput: null,
            calendarStartDay: void 0,
            toggleCalendarOnIconClick: !1,
            usePointerEvent: !1,
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidMount = function () {
        window.addEventListener("scroll", this.onScroll, !0),
          document.addEventListener(
            "visibilitychange",
            this.setHiddenStateOnVisibilityHidden
          );
      }),
      (t.prototype.componentDidUpdate = function (n, r) {
        var i, a, o, s;
        n.inline &&
          qR(n.selected, this.props.selected) &&
          this.setPreSelection(this.props.selected),
          this.state.monthSelectedIn !== void 0 &&
            n.monthsShown !== this.props.monthsShown &&
            this.setState({ monthSelectedIn: 0 }),
          n.highlightDates !== this.props.highlightDates &&
            this.setState({ highlightDates: Vg(this.props.highlightDates) }),
          !r.focused &&
            !xr(n.selected, this.props.selected) &&
            this.setState({ inputValue: null }),
          r.open !== this.state.open &&
            (r.open === !1 &&
              this.state.open === !0 &&
              ((a = (i = this.props).onCalendarOpen) === null ||
                a === void 0 ||
                a.call(i)),
            r.open === !0 &&
              this.state.open === !1 &&
              ((s = (o = this.props).onCalendarClose) === null ||
                s === void 0 ||
                s.call(o)));
      }),
      (t.prototype.componentWillUnmount = function () {
        this.clearPreventFocusTimeout(),
          window.removeEventListener("scroll", this.onScroll, !0),
          document.removeEventListener(
            "visibilitychange",
            this.setHiddenStateOnVisibilityHidden
          );
      }),
      (t.prototype.renderInputContainer = function () {
        var n = this.props,
          r = n.showIcon,
          i = n.icon,
          a = n.calendarIconClassname,
          o = n.calendarIconClassName,
          s = n.toggleCalendarOnIconClick,
          l = this.state.open;
        return (
          a &&
            console.warn(
              "calendarIconClassname props is deprecated. should use calendarIconClassName props."
            ),
          _.createElement(
            "div",
            {
              className: "react-datepicker__input-container".concat(
                r ? " react-datepicker__view-calendar-icon" : ""
              ),
            },
            r &&
              _.createElement(
                zR,
                te(
                  {
                    icon: i,
                    className: Ve(
                      o,
                      !o && a,
                      l && "react-datepicker-ignore-onclickoutside"
                    ),
                  },
                  s ? { onClick: this.toggleCalendar } : null
                )
              ),
            this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
            this.renderDateInput(),
            this.renderClearButton()
          )
        );
      }),
      (t.prototype.render = function () {
        var n = this.renderCalendar();
        if (this.props.inline) return n;
        if (this.props.withPortal) {
          var r = this.state.open
            ? _.createElement(
                Jw,
                { enableTabLoop: this.props.enableTabLoop },
                _.createElement(
                  "div",
                  {
                    className: "react-datepicker__portal",
                    tabIndex: -1,
                    onKeyDown: this.onPortalKeyDown,
                  },
                  n
                )
              )
            : null;
          return (
            this.state.open &&
              this.props.portalId &&
              (r = _.createElement(
                Zw,
                te({ portalId: this.props.portalId }, this.props),
                r
              )),
            _.createElement("div", null, this.renderInputContainer(), r)
          );
        }
        return _.createElement(
          GR,
          te({}, this.props, {
            className: this.props.popperClassName,
            hidePopper: !this.isCalendarOpen(),
            targetComponent: this.renderInputContainer(),
            popperComponent: n,
            popperOnKeyDown: this.onPopperKeyDown,
            showArrow: this.props.showPopperArrow,
          })
        );
      }),
      t
    );
  })(x.Component),
  ZR = "input",
  $u = "navigate";
const JR = () => {
    var c;
    const { isModalOpen: e, setIsModalOpen: t, selectedDoctor: n } = Ll(),
      [r, i] = x.useState({
        fullName: "",
        phone: "",
        email: "",
        department: "",
        doctor: "",
        selectedDate: new Date(),
        notes: "",
      }),
      a = [
        { id: "general", name: "General Medicine" },
        { id: "anaesthesia", name: "Anaesthesia" },
        { id: "general_surgery", name: "General Surgery" },
        { id: "pediatrics", name: "Pediatrics" },
        { id: "neurology", name: "Neurology" },
        { id: "psychiatry", name: "Psychiatry" },
        { id: "orthopedics", name: "Orthopedics" },
      ],
      o = {
        general: [
          "Dr. Bilal Abdullah, MD General Medicine",
          "Dr. Osama Awati, MBBS",
        ],
        anaesthesia: [
          "Dr. Asma Jahagirdar, DA",
          "Dr. Tahir, DA",
          "Dr. Meenal Aggarwal, MD Anaesthesia",
        ],
        general_surgery: [
          "Dr. Nishikant Gujar, MS General Surgery",
          "Dr. Jilani Awati, MS General Surgery and Laparoscopic Surgeon",
        ],
        pediatrics: [
          "Dr. Surendra Aggarwal, MCh Pediatric Surgeon",
          "Dr. Rizwan, MD Pediatrics",
        ],
        neurology: ["Dr. Yitendra Nayak, MCh Neurosurgery"],
        psychiatry: ["Dr. Soumya, MD Psychiatrist"],
        orthopedics: ["Dr. Ravindra Kulkarni, MS Ortho and Spine Surgeon"],
      };
    x.useEffect(() => {
      const d = window.getComputedStyle(document.body).overflow,
        f = window.innerWidth - document.documentElement.clientWidth;
      return (
        e
          ? ((document.body.style.overflow = "hidden"),
            (document.body.style.paddingRight = `${f}px`))
          : ((document.body.style.overflow = d),
            (document.body.style.paddingRight = "0px")),
        () => {
          (document.body.style.overflow = d),
            (document.body.style.paddingRight = "0px");
        }
      );
    }, [e]),
      x.useEffect(() => {
        n && i((d) => ({ ...d, department: n.department, doctor: n.name }));
      }, [n]);
    const s = (d) => {
        d.preventDefault();
        const f = `
New Appointment Booking:
Name: ${r.fullName}
Phone: ${r.phone}
Email: ${r.email}
Department: ${r.department}
Doctor: ${r.doctor}
Date & Time: ${r.selectedDate.toLocaleString()}
Notes: ${r.notes || "N/A"}
    `,
          w = `https://wa.me/919738878894?text=${encodeURIComponent(f)}`;
        window.open(w, "_blank"),
          t(!1),
          i({
            fullName: "",
            phone: "",
            email: "",
            department: "",
            doctor: "",
            selectedDate: new Date(),
            notes: "",
          });
      },
      l = (d) => {
        const { name: f, value: h } = d.target;
        i((v) => ({ ...v, [f]: h, ...(f === "department" && { doctor: "" }) }));
      },
      u = (d) => {
        d.target === d.currentTarget && t(!1);
      };
    return e
      ? p.jsx("div", {
          className:
            "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center z-50 p-4 overflow-y-auto",
          onClick: u,
          children: p.jsxs("div", {
            className: "bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl",
            children: [
              p.jsx("div", {
                className:
                  "bg-gradient-to-r from-[#004F74] to-[#007BBA] text-white p-6 sm:p-8 rounded-t-3xl shadow-lg",
                children: p.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    p.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        p.jsx(ld, { className: "h-6 w-6 sm:h-8 sm:w-8" }),
                        p.jsxs("div", {
                          children: [
                            p.jsx("h2", {
                              className:
                                "text-xl sm:text-2xl lg:text-3xl font-bold",
                              children: "Book Your Appointment",
                            }),
                            p.jsx("p", {
                              className:
                                "text-sm sm:text-base text-blue-100 mt-1",
                              children:
                                "Schedule your visit with our expert medical professionals",
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsx("button", {
                      onClick: () => t(!1),
                      className:
                        "p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0",
                      children: p.jsx(Xs, { className: "h-6 w-6" }),
                    }),
                  ],
                }),
              }),
              p.jsxs("form", {
                onSubmit: s,
                className: "p-6 sm:p-8 space-y-8",
                children: [
                  p.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      p.jsxs("h3", {
                        className:
                          "text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2",
                        children: [
                          p.jsx(fw, { className: "h-5 w-5" }),
                          p.jsx("span", { children: "Personal Information" }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",
                        children: [
                          p.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              p.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700",
                                children: "Full Name *",
                              }),
                              p.jsx("input", {
                                type: "text",
                                name: "fullName",
                                placeholder: "Enter your full name",
                                value: r.fullName,
                                onChange: l,
                                required: !0,
                                className:
                                  "w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base",
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              p.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700",
                                children: "Phone Number *",
                              }),
                              p.jsx("input", {
                                type: "tel",
                                name: "phone",
                                placeholder: "+91 XX XXX XXXX",
                                value: r.phone,
                                onChange: l,
                                required: !0,
                                className:
                                  "w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base",
                              }),
                            ],
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          p.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700",
                            children: "Email Address *",
                          }),
                          p.jsx("input", {
                            type: "email",
                            name: "email",
                            placeholder: "your.email@example.com",
                            value: r.email,
                            onChange: l,
                            required: !0,
                            className:
                              "w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      p.jsxs("h3", {
                        className:
                          "text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2",
                        children: [
                          p.jsx(yM, { className: "h-5 w-5" }),
                          p.jsx("span", { children: "Medical Information" }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",
                        children: [
                          p.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              p.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700",
                                children: "Department *",
                              }),
                              p.jsxs("select", {
                                name: "department",
                                value: r.department,
                                onChange: l,
                                required: !0,
                                className:
                                  "w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base bg-white",
                                children: [
                                  p.jsx("option", {
                                    value: "",
                                    children: "Choose Department",
                                  }),
                                  a.map((d) =>
                                    p.jsx(
                                      "option",
                                      { value: d.id, children: d.name },
                                      d.id
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              p.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700",
                                children: "Preferred Doctor *",
                              }),
                              p.jsxs("select", {
                                name: "doctor",
                                value: r.doctor,
                                onChange: l,
                                required: !0,
                                disabled: !r.department,
                                className:
                                  "w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 disabled:bg-gray-100 text-base bg-white",
                                children: [
                                  p.jsx("option", {
                                    value: "",
                                    children: "Select Doctor",
                                  }),
                                  r.department &&
                                    ((c = o[r.department]) == null
                                      ? void 0
                                      : c.map((d) =>
                                          p.jsx(
                                            "option",
                                            { value: d, children: d },
                                            d
                                          )
                                        )),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      p.jsxs("h3", {
                        className:
                          "text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2",
                        children: [
                          p.jsx(ld, { className: "h-5 w-5" }),
                          p.jsx("span", { children: "Preferred Date & Time" }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm",
                        children: [
                          p.jsxs("div", {
                            className: "flex flex-col items-center space-y-4",
                            children: [
                              p.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "Select Date and Time *",
                              }),
                              p.jsx("div", {
                                className: "w-full max-w-md mx-auto",
                                children: p.jsx(XR, {
                                  selected: r.selectedDate,
                                  onChange: (d) =>
                                    i((f) => ({
                                      ...f,
                                      selectedDate: d || new Date(),
                                    })),
                                  showTimeSelect: !0,
                                  timeIntervals: 30,
                                  timeCaption: "Time",
                                  dateFormat: "MMMM d, yyyy h:mm aa",
                                  minDate: new Date(),
                                  filterTime: (d) => {
                                    const f = d.getHours();
                                    return f >= 8 && f <= 18;
                                  },
                                  className:
                                    "w-full text-center text-base sm:text-lg font-semibold text-[#004F74] bg-white border-2 border-[#007BBA]/20 rounded-lg py-3 px-4 hover:border-[#007BBA] focus:border-[#007BBA] focus:ring-2 focus:ring-[#007BBA]/20 transition-all duration-300",
                                  wrapperClassName: "w-full",
                                  calendarClassName: "responsive-calendar",
                                  popperClassName: "responsive-popper",
                                  popperPlacement: "bottom",
                                  popperModifiers: [
                                    {
                                      name: "preventOverflow",
                                      fn: ({ x: d, y: f, placement: h }) => ({
                                        x: d,
                                        y: f,
                                        data: { placement: h },
                                      }),
                                      options: {
                                        rootBoundary: "viewport",
                                        tether: !1,
                                        altAxis: !0,
                                      },
                                    },
                                  ],
                                }),
                              }),
                              p.jsx("div", {
                                className:
                                  "bg-white rounded-lg p-3 border border-[#007BBA]/20 w-full max-w-md mx-auto",
                                children: p.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    p.jsx("p", {
                                      className: "text-sm text-gray-600",
                                      children: "Selected Appointment",
                                    }),
                                    p.jsx("p", {
                                      className:
                                        "text-lg font-semibold text-[#004F74] mt-1",
                                      children:
                                        r.selectedDate.toLocaleDateString(
                                          "en-US",
                                          {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          }
                                        ),
                                    }),
                                    p.jsx("p", {
                                      className:
                                        "text-base text-[#007BBA] font-medium",
                                      children:
                                        r.selectedDate.toLocaleTimeString(
                                          "en-US",
                                          {
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: !0,
                                          }
                                        ),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          p.jsx("div", {
                            className: "mt-6 text-center space-y-2",
                            children: p.jsxs("div", {
                              className:
                                "flex flex-wrap justify-center gap-4 text-sm text-gray-600",
                              children: [
                                p.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    p.jsx("div", {
                                      className:
                                        "w-3 h-3 bg-green-500 rounded-full",
                                    }),
                                    p.jsx("span", {
                                      children:
                                        "Available Hours: 8:00 AM - 6:00 PM",
                                    }),
                                  ],
                                }),
                                p.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    p.jsx("div", {
                                      className:
                                        "w-3 h-3 bg-red-500 rounded-full",
                                    }),
                                    p.jsx("span", {
                                      children: "Emergency: 24/7",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      p.jsxs("h3", {
                        className:
                          "text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2",
                        children: [
                          p.jsx(kM, { className: "h-5 w-5" }),
                          p.jsx("span", { children: "Additional Information" }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          p.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700",
                            children: "Additional Notes (Optional)",
                          }),
                          p.jsx("textarea", {
                            name: "notes",
                            placeholder:
                              "Please describe any specific concerns, symptoms, or requirements...",
                            value: r.notes,
                            onChange: l,
                            rows: 4,
                            className:
                              "w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent resize-none transition-all duration-300 text-base",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx("div", {
                    className: "pt-4",
                    children: p.jsx("button", {
                      type: "submit",
                      className:
                        "w-full bg-gradient-to-r from-[#004F74] to-[#007BBA] text-white py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 hover:from-blue-600 hover:to-purple-700 shadow-lg",
                      children: "Confirm Appointment",
                    }),
                  }),
                ],
              }),
              p.jsx("div", {
                className:
                  "bg-[#F6FAFD] px-6 sm:px-8 py-4 sm:py-6 rounded-b-3xl border-t border-gray-100",
                children: p.jsxs("div", {
                  className: "text-center space-y-2",
                  children: [
                    p.jsx("p", {
                      className: "text-sm sm:text-base text-gray-600",
                      children:
                        "📞 We will contact you within 24 hours to confirm your appointment details.",
                    }),
                    p.jsx("p", {
                      className: "text-xs sm:text-sm text-gray-500",
                      children:
                        "For urgent matters, please call our emergency line: +91 4 123 4568",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  eO = ({ children: e }) => {
    const { scrollYProgress: t } = sM(),
      n = cM(t, [0, 1], ["0%", "50%"]);
    return p.jsxs("div", {
      className: "parallax-container min-h-screen",
      children: [
        p.jsx($.div, {
          className: "parallax-layer elegant-gradient-bg",
          style: { y: n },
        }),
        p.jsx("div", { className: "grain-overlay" }),
        p.jsx("div", { className: "relative z-10", children: e }),
      ],
    });
  },
  e1 = "/assets/logo-DOvatX_J.png",
  tO = {
    brand: { logo: e1 },
    menuItems: [
      { id: "home", label: "Home", type: "scroll", section: "hero" },
      { id: "about", label: "About Us", type: "scroll", section: "about" },
      {
        id: "services",
        label: "Services",
        type: "scroll",
        section: "services",
      },
      {
        id: "doctors",
        label: "Our Doctors",
        type: "scroll",
        section: "doctors",
      },
      {
        id: "testimonials",
        label: "Testimonials",
        type: "scroll",
        section: "testimonials",
      },
      { id: "contact", label: "Contact", type: "scroll", section: "contact" },
    ],
    cta: { text: "Book Appointment" },
    animations: {
      staggerDelay: 0.1,
      springConfig: { stiffness: 250, damping: 30 },
      hoverScale: 1.02,
      scrollThreshold: 80,
      maxScrollForProgress: 120,
    },
    styles: {
      scrolled: {
        height: "h-12",
        iconSize: "h-6 w-6",
        menuFontSize: "text-sm",
        buttonPadding: "px-2 py-1",
        borderRadius: "9999px",
        topOffset: "22px",
        width: "40%",
        leftOffset: "30%",
      },
      default: {
        height: "h-16",
        iconSize: "h-8 w-8",
        menuFontSize: "text-base",
        buttonPadding: "px-4 py-2.5",
        borderRadius: "28px",
        topOffset: "22px",
        width: "96%",
        leftOffset: "2%",
      },
    },
  },
  nO = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1),
      [i, a] = x.useState(0),
      [o, s] = x.useState("home"),
      [l, u] = x.useState(!1),
      [c, d] = x.useState(null),
      f = dM(),
      { setIsModalOpen: h } = Ll(),
      v = gf(),
      w = or(),
      { brand: b, menuItems: g, cta: m, animations: y, styles: S } = tO,
      k = n ? S.scrolled : S.default;
    x.useEffect(() => {
      const N = () => u(window.innerWidth <= 1024);
      return (
        N(),
        window.addEventListener("resize", N),
        () => window.removeEventListener("resize", N)
      );
    }, []),
      x.useEffect(() => {
        let N = window.scrollY,
          O = !1;
        const W = () => {
          O ||
            (requestAnimationFrame(() => {
              const q = window.scrollY;
              r(q > y.scrollThreshold);
              const Me = Math.max(
                  document.documentElement.scrollHeight - window.innerHeight,
                  1
                ),
                P = Math.min(q / Me, 1),
                Z = 1 - Math.pow(1 - P, 3);
              a(Z);
              const he = y.maxScrollForProgress,
                ut = Math.min(q / he, 1),
                Bi = document.querySelector(".nav-container");
              if (Bi) {
                const Ul = 1 - ut * 0.05,
                  t1 = ut * -1;
                (Bi.style.transform = `scale(${Ul}) translateY(${t1}px)`),
                  (Bi.style.transition = "transform 0.15s ease-out");
              }
              e && Math.abs(q - N) > 8 && t(!1), (N = q), (O = !1);
            }),
            (O = !0));
        };
        return (
          window.addEventListener("scroll", W, { passive: !0 }),
          () => window.removeEventListener("scroll", W)
        );
      }, [y.scrollThreshold, l, e]),
      x.useEffect(() => {
        const N = () => {
          let O = "home",
            W = Number.POSITIVE_INFINITY;
          g.forEach((q) => {
            if (q.type === "scroll" && q.section) {
              const Me = document.getElementById(q.section);
              if (Me) {
                const P = Me.getBoundingClientRect();
                P.top >= -120 && P.top < W && ((W = P.top), (O = q.section));
              }
            }
          }),
            s(O);
        };
        return (
          window.addEventListener("scroll", N, { passive: !0 }),
          () => window.removeEventListener("scroll", N)
        );
      }, [g]),
      x.useEffect(() => {
        const N = (O) => {
          const W = O.target;
          e &&
            !W.closest(".mobile-menu-container") &&
            !W.closest(".mobile-menu-toggle") &&
            t(!1);
        };
        return (
          e
            ? (document.addEventListener("click", N),
              (document.body.style.overflow = "hidden"))
            : (document.body.style.overflow = "unset"),
          () => {
            document.removeEventListener("click", N),
              (document.body.style.overflow = "unset");
          }
        );
      }, [e]);
    const E = (N) => {
        const O = () => {
          const W = document.getElementById(N);
          if (W) {
            const P = W.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: P, behavior: "smooth" });
          } else window.scrollTo({ top: 0, behavior: "smooth" });
        };
        w.pathname !== "/" ? (v("/"), setTimeout(O, 300)) : O(), t(!1), d(null);
      },
      C = (N) => {
        v(N), t(!1), d(null);
      },
      D = () => {
        v("/"), window.scrollTo({ top: 0, behavior: "smooth" }), t(!1);
      },
      M = () => {
        h(!0), t(!1);
      },
      A = f
        ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
        : {
            initial: { y: -120, opacity: 0, scale: 0.98, filter: "blur(6px)" },
            animate: {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: { type: "spring", ...y.springConfig },
            },
          },
      B = f
        ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
        : {
            initial: { opacity: 0, y: -10 },
            animate: (N) => ({
              opacity: 1,
              y: 0,
              transition: { delay: y.staggerDelay * N + 0.2, duration: 0.4 },
            }),
          },
      j = {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.25 } },
      },
      U = f
        ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
        : {
            initial: { opacity: 0, x: 10 },
            animate: (N) => ({
              opacity: 1,
              x: 0,
              transition: { delay: 0.04 * N, duration: 0.25 },
            }),
          },
      K = () => {
        const N = n ? (l ? 12 : 20) : l ? 8 : 16,
          O = n
            ? "0 16px 32px -12px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.05)"
            : "0 12px 24px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.05)",
          W = n
            ? "0 25px 50px -12px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.05)"
            : "0 20px 40px -8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.05)";
        return {
          background: `
        linear-gradient(135deg, 
          rgba(255, 255, 255, ${n ? "0.95" : "0.85"}) 0%,
          rgba(255, 255, 255, ${n ? "0.90" : "0.75"}) 100%
        )
      `,
          backdropFilter: `blur(${N}px) saturate(180%)`,
          borderRadius: k.borderRadius,
          border: `1px solid rgba(255, 255, 255, ${n ? "0.4" : "0.3"})`,
          boxShadow: l ? O : W,
          willChange: "transform, opacity",
        };
      },
      Q = b.logo,
      H = `
    relative px-1 py-1 text-gray-700 hover:text-[#007BBA] font-medium transition-all duration-200 bg-transparent rounded-none shadow-none outline-none border-none group
  `,
      V = `
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:w-0
    group-hover:after:w-full
    after:h-[2px]
    after:bg-[#007BBA]
    group-hover:after:bg-[#004F74]
    after:transition-all
    after:duration-300
  `,
      T = `
    text-[#004F74]
    font-bold
    after:w-full
    after:bg-[#004F74]
  `;
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx($.div, {
          className:
            "fixed top-0 left-0 right-0 h-0.5 bg-[#007BBA]/70 z-[60] origin-left",
          style: { scaleX: i },
          "aria-hidden": "true",
        }),
        !l &&
          p.jsxs($.nav, {
            className:
              "fixed z-50 transition-transform duration-500 ease-out nav-container",
            style: {
              ...K(),
              top: k.topOffset,
              left: k.leftOffset,
              right: n ? "2.5%" : "2%",
              width: k.width,
            },
            role: "navigation",
            "aria-label": "Main Navigation",
            variants: A,
            initial: "initial",
            animate: "animate",
            children: [
              p.jsx($.div, {
                className: "absolute inset-0 -z-10",
                initial: { opacity: 0, scale: 0.98 },
                animate: { opacity: n ? 0.55 : 0.4, scale: n ? 1.005 : 1.02 },
                transition: { duration: 0.5 },
                style: {
                  background: `
              radial-gradient(ellipse 80% 60% at 50% -20%, 
                rgba(0, 123, 186, 0.12) 0%,
                rgba(0, 123, 186, 0.06) 40%,
                transparent 70%
              )
            `,
                  borderRadius: k.borderRadius,
                  transform: "translateY(6px)",
                  filter: "blur(10px)",
                  willChange: "opacity, transform",
                },
              }),
              p.jsx("div", {
                className: "max-w-8xl mx-auto px-10 lg:px-10 w-full",
                children: p.jsxs("div", {
                  className: `flex items-center transition-all duration-700 ${k.height}`,
                  children: [
                    p.jsx(dn, {
                      children:
                        !n &&
                        p.jsx($.div, {
                          initial: { opacity: 0, x: -14 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -14 },
                          transition: { duration: 0.25 },
                          className:
                            "flex items-center cursor-pointer group pl-6",
                          onClick: D,
                          whileHover: { scale: y.hoverScale },
                          whileTap: { scale: 0.96 },
                          children: p.jsxs($.div, {
                            className: "relative",
                            children: [
                              p.jsx("img", {
                                src: Q,
                                alt: "Al Nabi Hospital Logo",
                                className: `transition-all duration-700 ${k.iconSize} object-contain`,
                                style: { height: "4rem", width: "auto" },
                              }),
                              p.jsx($.div, {
                                className:
                                  "absolute inset-0 bg-[#007BBA] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                                initial: !1,
                              }),
                            ],
                          }),
                        }),
                    }),
                    p.jsx("div", {
                      className:
                        "hidden lg:flex flex-1 items-center justify-center",
                      children: p.jsx("div", {
                        className: "flex items-center space-x-6",
                        children: g.map((N, O) => {
                          var q;
                          const W = N.type === "scroll" && N.section === o;
                          return N.type === "dropdown"
                            ? p.jsxs(
                                "div",
                                {
                                  className: "relative group",
                                  onMouseEnter: () => d(N.id),
                                  onMouseLeave: () => d(null),
                                  children: [
                                    p.jsxs($.button, {
                                      className: `${H} ${V} flex items-center ${
                                        k.menuFontSize
                                      } ${W ? T : ""}`,
                                      style: {
                                        fontFamily:
                                          "'Cormorant Garamond', 'DM Serif Display', serif",
                                        fontWeight: 500,
                                      },
                                      custom: O,
                                      variants: B,
                                      initial: "initial",
                                      animate: "animate",
                                      children: [
                                        p.jsx("span", { children: N.label }),
                                        p.jsx($.div, {
                                          animate: {
                                            rotate: c === N.id ? 180 : 0,
                                          },
                                          transition: { duration: 0.25 },
                                          children: p.jsx(vM, {
                                            className: "h-4 w-4 ml-1",
                                          }),
                                        }),
                                      ],
                                    }),
                                    p.jsx(dn, {
                                      children:
                                        c === N.id &&
                                        p.jsx($.div, {
                                          className:
                                            "absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden z-50",
                                          initial: {
                                            opacity: 0,
                                            y: 12,
                                            scale: 0.98,
                                          },
                                          animate: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                          },
                                          exit: {
                                            opacity: 0,
                                            y: 12,
                                            scale: 0.98,
                                          },
                                          transition: { duration: 0.2 },
                                          children:
                                            (q = N.subItems) == null
                                              ? void 0
                                              : q.map((Me, P) =>
                                                  p.jsx(
                                                    $.div,
                                                    {
                                                      initial: {
                                                        opacity: 0,
                                                        x: -8,
                                                      },
                                                      animate: {
                                                        opacity: 1,
                                                        x: 0,
                                                      },
                                                      transition: {
                                                        delay: P * 0.04,
                                                        duration: 0.2,
                                                      },
                                                      children: p.jsx(tt, {
                                                        to: Me.path,
                                                        className:
                                                          "block px-6 py-4 text-sm text-gray-700 hover:text-[#007BBA] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 bg-transparent rounded-none",
                                                        style: {
                                                          fontFamily:
                                                            "'Cormorant Garamond', serif",
                                                          fontWeight: 400,
                                                        },
                                                        onClick: () => d(null),
                                                        children: Me.label,
                                                      }),
                                                    },
                                                    Me.id
                                                  )
                                                ),
                                        }),
                                    }),
                                  ],
                                },
                                N.id
                              )
                            : p.jsx(
                                $.button,
                                {
                                  onClick: () =>
                                    N.type === "scroll" && N.section
                                      ? E(N.section)
                                      : N.path
                                      ? C(N.path)
                                      : null,
                                  className: `${H} ${V} ${k.menuFontSize} ${
                                    W ? T : ""
                                  }`,
                                  style: {
                                    fontFamily:
                                      "'Cormorant Garamond', 'DM Serif Display', serif",
                                    fontWeight: 500,
                                  },
                                  whileHover: { y: -1 },
                                  custom: O,
                                  variants: B,
                                  initial: "initial",
                                  animate: "animate",
                                  "aria-current": W ? "page" : void 0,
                                  children: p.jsx("span", {
                                    children: N.label,
                                  }),
                                },
                                N.id
                              );
                        }),
                      }),
                    }),
                    p.jsx(dn, {
                      children:
                        !n &&
                        p.jsxs($.button, {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 10 },
                          transition: { duration: 0.25 },
                          onClick: M,
                          className: `hidden lg:flex bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white rounded-full hover:shadow-xl transition-all duration-300 items-center justify-center space-x-2 font-semibold ${k.buttonPadding} ${k.menuFontSize} hover:from-[#004F74] hover:to-[#007BBA] backdrop-blur-sm`,
                          style: {
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 600,
                            boxShadow: "0 8px 25px -8px rgba(0, 123, 186, 0.4)",
                          },
                          whileHover: { scale: y.hoverScale, y: -1 },
                          whileTap: { scale: 0.96 },
                          children: [
                            p.jsx("span", { children: m.text }),
                            p.jsx(sw, { className: "h-4 w-4" }),
                          ],
                        }),
                    }),
                    p.jsx("div", { className: "hidden items-center ml-auto" }),
                  ],
                }),
              }),
            ],
          }),
        p.jsx($.button, {
          onClick: () => t((N) => !N),
          className:
            "mobile-menu-toggle fixed lg:hidden top-4 right-4 w-12 h-12 flex justify-center items-center rounded-2xl bg-white/90 shadow-md border border-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/70 z-[70] focus:outline-none focus:ring-2 focus:ring-[#007BBA]",
          "aria-expanded": e,
          "aria-controls": "mobile-navigation",
          "aria-label": e ? "Close menu" : "Open menu",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.96 },
          children: p.jsx(dn, {
            mode: "wait",
            children: e
              ? p.jsx(
                  $.div,
                  {
                    initial: { rotate: -90, opacity: 0 },
                    animate: { rotate: 0, opacity: 1 },
                    exit: { rotate: 90, opacity: 0 },
                    children: p.jsx(Xs, {
                      className: "h-6 w-6 text-[#007BBA]",
                    }),
                  },
                  "close"
                )
              : p.jsx(
                  $.div,
                  {
                    initial: { rotate: 90, opacity: 0 },
                    animate: { rotate: 0, opacity: 1 },
                    exit: { rotate: -90, opacity: 0 },
                    children: p.jsx(SM, {
                      className: "h-6 w-6 text-[#007BBA]",
                    }),
                  },
                  "menu"
                ),
          }),
        }),
        p.jsx(dn, {
          children:
            e &&
            p.jsx($.div, {
              className:
                "fixed inset-0 bg-black/40 backdrop-blur-sm z-60 lg:hidden mobile-menu-container",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.2 },
              "aria-hidden": "true",
            }),
        }),
        p.jsx(dn, {
          children:
            e &&
            p.jsxs($.div, {
              id: "mobile-navigation",
              role: "menu",
              className:
                "fixed top-0 right-0 bottom-0 w-[86vw] sm:w-[420px] bg-white/95 backdrop-blur-xl rounded-l-3xl shadow-2xl z-[70] lg:hidden overflow-y-auto mobile-menu-container border-l border-white/40",
              variants: j,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              "aria-modal": "true",
              children: [
                p.jsxs("div", {
                  className:
                    "mobile-logo relative w-full flex items-center justify-between px-4 pt-4 pb-2",
                  children: [
                    p.jsx("img", {
                      src: Q,
                      alt: "Al Nabi Hospital Logo",
                      className: "h-10 w-auto object-contain",
                      style: { maxWidth: "44px", borderRadius: "12px" },
                      "aria-hidden": "false",
                    }),
                    p.jsx("button", {
                      className:
                        "absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#007BBA]",
                      "aria-label": "Close menu",
                      onClick: () => t(!1),
                      tabIndex: 0,
                      type: "button",
                      children: p.jsx(Xs, {
                        className: "h-6 w-6 text-[#007BBA]",
                      }),
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "px-6 pt-2 pb-8 space-y-2",
                  children: [
                    g.map((N, O) => {
                      var q;
                      const W = N.type === "scroll" && N.section === o;
                      return N.type === "dropdown"
                        ? p.jsxs(
                            "div",
                            {
                              className: "space-y-2",
                              children: [
                                p.jsx($.div, {
                                  className:
                                    "px-4 pt-3 pb-1 text-base font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-100 bg-transparent rounded-none",
                                  style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                  },
                                  custom: O,
                                  variants: U,
                                  initial: "initial",
                                  animate: "animate",
                                  children: N.label,
                                }),
                                (q = N.subItems) == null
                                  ? void 0
                                  : q.map((Me, P) =>
                                      p.jsx(
                                        $.button,
                                        {
                                          onClick: () => C(Me.path),
                                          className:
                                            "block w-full px-6 py-2 text-gray-700 hover:text-[#007BBA] transition-all duration-200 text-left bg-transparent rounded-none font-medium",
                                          style: {
                                            fontFamily:
                                              "'Cormorant Garamond', serif",
                                            fontWeight: 500,
                                          },
                                          custom: O + P,
                                          variants: U,
                                          initial: "initial",
                                          animate: "animate",
                                          whileHover: { x: 4 },
                                          children: p.jsx("span", {
                                            children: Me.label,
                                          }),
                                        },
                                        Me.id
                                      )
                                    ),
                              ],
                            },
                            N.id
                          )
                        : p.jsx(
                            $.button,
                            {
                              onClick: () =>
                                N.type === "scroll" && N.section
                                  ? E(N.section)
                                  : N.path
                                  ? C(N.path)
                                  : null,
                              className: `block w-full px-4 py-3 text-gray-800 hover:text-[#007BBA] transition-all duration-200 bg-transparent rounded-xl font-medium text-left ${
                                W ? "text-[#004F74] font-bold underline" : ""
                              }`,
                              style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 500,
                              },
                              "aria-current": W ? "page" : void 0,
                              custom: O,
                              variants: U,
                              initial: "initial",
                              animate: "animate",
                              whileHover: { x: 4 },
                              children: p.jsx("span", { children: N.label }),
                            },
                            N.id
                          );
                    }),
                    p.jsx($.button, {
                      onClick: M,
                      className:
                        "w-full mt-6 bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white px-6 py-4 rounded-2xl font-semibold text-center hover:from-[#004F74] hover:to-[#007BBA] transition-all duration-300 shadow-lg",
                      style: {
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                      },
                      initial: { opacity: 0, y: 16 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.25 },
                      whileHover: { y: -2 },
                      whileTap: { y: 0 },
                      children: m.text,
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  rO = "/assets/kingpin-logo-BIJ2W9-W.png",
  iO = () =>
    p.jsx("footer", {
      className: "bg-[#004F74] text-white",
      children: p.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
        children: [
          p.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8",
            children: [
              p.jsxs("div", {
                className: "space-y-6",
                children: [
                  p.jsx("div", {
                    className: "flex items-center space-x-3",
                    children: p.jsx("img", {
                      src: e1,
                      alt: "Al Nabi Hospital Logo",
                      className:
                        "h-10 sm:h-12 md:h-14 w-auto max-w-xs transition-transform duration-300 hover:scale-105 shadow-sm bg-white/80 p-1 rounded",
                      "aria-label": "Al Nabi Hospital",
                    }),
                  }),
                  p.jsx("p", {
                    className: "text-blue-50 leading-relaxed text-sm",
                    children:
                      "Providing exceptional healthcare services with compassion, expertise, and state-of-the-art medical technology for over 15 years.",
                  }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Quick Links",
                  }),
                  p.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/about",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "About Us",
                        }),
                      }),
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/services",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Our Services",
                        }),
                      }),
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/doctors",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Our Doctors",
                        }),
                      }),
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/testimonials",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Testimonials",
                        }),
                      }),
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/careers",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Careers",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Legal",
                  }),
                  p.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/terms",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Terms & Conditions",
                        }),
                      }),
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/privacy-policy",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Privacy Policy",
                        }),
                      }),
                      p.jsx("li", {
                        children: p.jsx(tt, {
                          to: "/cookie-policy",
                          className:
                            "text-blue-50 hover:text-white transition-colors duration-200",
                          children: "Cookie Policy",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Contact Info",
                  }),
                  p.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      p.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          p.jsx(ip, {
                            className: "h-5 w-5 text-[#007BBA] mt-1",
                          }),
                          p.jsxs("div", {
                            className: "text-blue-50",
                            children: [
                              p.jsx("p", {
                                children: "Near Zanda Katta, Jamiya Masjid",
                              }),
                              p.jsx("p", {
                                children: "Road, Vijayapura, KA, IN",
                              }),
                              p.jsx("p", { children: "586101" }),
                            ],
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          p.jsx(cw, { className: "h-5 w-5 text-[#007BBA]" }),
                          p.jsxs("div", {
                            className: "text-blue-50",
                            children: [
                              p.jsx("p", { children: "+91 70909 00087" }),
                              p.jsx("p", {
                                className: "text-sm",
                                children: "Emergency: +91 70909 00087",
                              }),
                            ],
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          p.jsx(lw, { className: "h-5 w-5 text-[#007BBA]" }),
                          p.jsx("div", {
                            className: "text-blue-50",
                            children: p.jsx("p", {
                              children: "alnabihospital@gmail.com",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          p.jsx("div", {
            className: "border-t border-blue-300/20 mt-12 pt-8",
            children: p.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center gap-4",
              children: [
                p.jsx("p", {
                  className: "text-blue-50 text-sm",
                  children: "© 2025 Al Nabi Hospital. All rights reserved.",
                }),
                p.jsxs("p", {
                  className: "text-blue-50 text-sm flex items-center gap-2",
                  children: [
                    p.jsx("span", {
                      className: "font-semibold",
                      children: "Crafted and Managed by",
                    }),
                    p.jsx("img", {
                      src: rO,
                      alt: "KingpiN Vision Forge Logo",
                      className:
                        "h-8 sm:h-10 md:h-12 w-auto max-w-xs align-middle transition-transform duration-300 hover:scale-105 shadow-sm bg-white/80 p-1 rounded",
                      "aria-label": "KingpiN Vision Forge",
                    }),
                    p.jsxs("span", {
                      className: "font-bold text-lg tracking-tight",
                      children: [
                        p.jsx("span", {
                          className: "text-red-500",
                          children: "K",
                        }),
                        "ingpi",
                        p.jsx("span", {
                          className: "text-blue-300",
                          children: "N",
                        }),
                      ],
                    }),
                    p.jsx("span", {
                      className: "text-amber-400 italic font-serif text-base",
                      children: "Vision Forge",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "flex flex-wrap justify-center gap-6 mt-4 md:mt-0",
                  children: [
                    p.jsx(tt, {
                      to: "/terms",
                      className:
                        "text-blue-50 hover:text-amber-400 text-sm transition-colors duration-200",
                      "aria-label": "Terms of Service",
                      children: "Terms of Service",
                    }),
                    p.jsx(tt, {
                      to: "/privacy-policy",
                      className:
                        "text-blue-50 hover:text-amber-400 text-sm transition-colors duration-200",
                      "aria-label": "Privacy Policy",
                      children: "Privacy Policy",
                    }),
                    p.jsx(tt, {
                      to: "/cookie-policy",
                      className:
                        "text-blue-50 hover:text-amber-400 text-sm transition-colors duration-200",
                      "aria-label": "Cookie Policy",
                      children: "Cookie Policy",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  aO = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(nO, {}),
        p.jsx("main", { children: p.jsx(Dk, {}) }),
        p.jsx(iO, {}),
      ],
    }),
  oO = ({ isOpen: e, onClick: t }) =>
    p.jsxs("button", {
      className: "button",
      onClick: t,
      children: [
        p.jsx("div", { className: "outline" }),
        p.jsxs("div", {
          className: "state state--default",
          style: { display: e ? "none" : "flex" },
          children: [
            p.jsx("div", {
              className: "icon",
              children: p.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                height: "1.2em",
                width: "1.2em",
                children: [
                  p.jsxs("g", {
                    style: { filter: "url(#shadow)" },
                    children: [
                      p.jsx("path", {
                        fill: "currentColor",
                        d: "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z",
                      }),
                      p.jsx("path", {
                        fill: "currentColor",
                        d: "M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z",
                      }),
                    ],
                  }),
                  p.jsx("defs", {
                    children: p.jsx("filter", {
                      id: "shadow",
                      children: p.jsx("feDropShadow", {
                        floodOpacity: "0.6",
                        stdDeviation: "0.8",
                        dy: "1",
                        dx: "0",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            p.jsx("p", {
              children: [
                "S",
                "e",
                "n",
                "d",
                " ",
                "M",
                "e",
                "s",
                "s",
                "a",
                "g",
                "e",
              ].map((n, r) =>
                p.jsx("span", { style: { "--i": r }, children: n }, r)
              ),
            }),
          ],
        }),
        p.jsxs("div", {
          className: "state state--sent",
          style: { display: e ? "flex" : "none" },
          children: [
            p.jsx("div", {
              className: "icon",
              children: p.jsx("svg", {
                stroke: "black",
                strokeWidth: "0.5px",
                width: "1.2em",
                height: "1.2em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: p.jsxs("g", {
                  style: { filter: "url(#shadow)" },
                  children: [
                    p.jsx("path", {
                      d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z",
                      fill: "currentColor",
                    }),
                    p.jsx("path", {
                      d: "M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
              }),
            }),
            p.jsx("p", {
              children: ["S", "e", "n", "t", "!"].map((n, r) =>
                p.jsx("span", { style: { "--i": r + 5 }, children: n }, r)
              ),
            }),
          ],
        }),
      ],
    }),
  sO = ({ isOpen: e, onClick: t, isVisible: n }) => {
    const [r, i] = x.useState(!1);
    return (
      x.useEffect(() => {
        const a = () => {
          i(window.innerWidth < 768);
        };
        return (
          a(),
          window.addEventListener("resize", a),
          () => window.removeEventListener("resize", a)
        );
      }, []),
      n
        ? p.jsx($.div, {
            initial: { opacity: 0, scale: 0, y: 100 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.6,
            },
            className: `fixed ${
              r ? "bottom-4 right-4" : "bottom-6 right-6"
            } z-50`,
            children: p.jsx(oO, { isOpen: e, onClick: t }),
          })
        : null
    );
  },
  lO = (e) => {
    const t = `New Appointment Booking:
Name: ${e.name}
Phone: ${e.phone}
Email: ${e.email}
Department: ${e.department}
Doctor: ${e.doctor || "To be assigned"}
Date & Time: ${e.date} at ${e.time}
Notes: ${e.notes || "N/A"}`,
      i = `https://wa.me/919738878894?text=${encodeURIComponent(t)}`;
    return window.open(i, "_blank"), i;
  },
  uO = async (e) => (
    console.log("Sending email confirmation:", e),
    new Promise((t) => {
      setTimeout(() => {
        console.log("Email confirmation sent successfully"), t(!0);
      }, 1e3);
    })
  ),
  cO = (e) => {
    const t = [];
    if (
      ((!e.name || e.name.trim().length < 2) &&
        t.push("Name must be at least 2 characters long"),
      (!e.phone ||
        !/^[\+]?[1-9][\d]{0,15}$/.test(e.phone.replace(/\s/g, ""))) &&
        t.push("Please enter a valid phone number"),
      (!e.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)) &&
        t.push("Please enter a valid email address"),
      !e.date)
    )
      t.push("Please select an appointment date");
    else {
      const n = new Date(e.date),
        r = new Date();
      r.setHours(0, 0, 0, 0), n < r && t.push("Please select a future date");
    }
    return (
      e.time || t.push("Please select an appointment time"),
      { isValid: t.length === 0, errors: t }
    );
  },
  dO = ({ isOpen: e, onClose: t }) => {
    const [n, r] = x.useState([
        {
          id: "1",
          text: "Hello! 👋 Welcome to Al Nabi Hospital. I'm here to help you with appointments, information about our services, or answer any questions you might have.",
          isBot: !0,
          timestamp: new Date(),
          options: [
            "Book Appointment",
            "Our Services",
            "Contact Information",
            "Emergency Info",
            "Find Doctor",
          ],
        },
      ]),
      [i, a] = x.useState(""),
      [o, s] = x.useState(!1),
      [l, u] = x.useState(!1),
      [c, d] = x.useState({
        name: "",
        phone: "",
        email: "",
        department: "",
        date: "",
        time: "",
        notes: "",
      }),
      [f, h] = x.useState(0),
      [v, w] = x.useState(!1),
      [b, g] = x.useState([]),
      [m, y] = x.useState(!1),
      S = x.useRef(null),
      k = x.useRef(null),
      { setIsModalOpen: E } = Ll(),
      C = [
        "General Medicine",
        "Anaesthesia",
        "General Surgery",
        "Pediatrics",
        "Neurology",
        "Psychiatry",
        "Orthopedics",
        "Cardiology",
        "Ophthalmology",
        "Emergency Medicine",
        "Obstetrics & Gynecology",
        "Dermatology",
        "ENT",
        "Urology",
        "Radiology",
        "Pathology",
        "Physiotherapy",
      ],
      D = {
        "General Medicine": [
          "Dr. Bilal Abdullah, MD General Medicine",
          "Dr. Osama Awati, MBBS",
        ],
        Anaesthesia: [
          "Dr. Asma Jahagirdar, DA",
          "Dr. Tahir, DA",
          "Dr. Meenal Aggarwal, MD Anaesthesia",
        ],
        "General Surgery": [
          "Dr. Nishikant Gujar, MS General Surgery",
          "Dr. Jilani Awati, MS General Surgery and Laparoscopic Surgeon",
        ],
        Pediatrics: [
          "Dr. Surendra Aggarwal, MCh Pediatric Surgeon",
          "Dr. Rizwan, MD Pediatrics",
        ],
        Neurology: ["Dr. Yitendra Nayak, MCh Neurosurgery"],
        Psychiatry: ["Dr. Soumya, MD Psychiatrist"],
        Orthopedics: ["Dr. Ravindra Kulkarni, MS Ortho and Spine Surgeon"],
        Cardiology: [
          "Dr. Ahmed Hassan, Interventional Cardiologist",
          "Dr. Sarah Al-Rashid, Cardiac Surgeon",
        ],
        Ophthalmology: [
          "Dr. Fatima Omar, Ophthalmologist",
          "Dr. Ahmad Khalil, Retinal Specialist",
        ],
        "Emergency Medicine": [
          "Dr. Khalid Salem, Emergency Physician",
          "Dr. Aisha Noor, Trauma Specialist",
        ],
        "Obstetrics & Gynecology": [
          "Dr. Layla Hassan, Obstetrician",
          "Dr. Noor Ibrahim, Gynecologist",
        ],
        Dermatology: [
          "Dr. Sarah Ahmed, Dermatologist",
          "Dr. Mohamed El-Sayed, Dermatologist",
        ],
        ENT: [
          "Dr. Omar Abdallah, ENT Specialist",
          "Dr. Fatima Al-Zahra, ENT Surgeon",
        ],
        Urology: [
          "Dr. Hassan Mahmoud, Urologist",
          "Dr. Youssef Ali, Urological Surgeon",
        ],
        Radiology: [
          "Dr. Khalid Salem, Radiologist",
          "Dr. Aisha Noor, Interventional Radiologist",
        ],
        Pathology: [
          "Dr. Mohamed Ali, Pathologist",
          "Dr. Fatima Omar, Clinical Pathologist",
        ],
        Physiotherapy: [
          "Dr. John Smith, Physiotherapist",
          "Dr. Maria Garcia, Rehabilitation Specialist",
        ],
      },
      M = {
        "General Medicine": [
          "Routine Health Checkups",
          "Chronic Disease Management",
          "Preventive Care",
          "Health Screenings",
          "Vaccination Services",
          "Minor Procedures",
          "Health Counseling",
          "Referral Services",
        ],
        Anaesthesia: [
          "General Anaesthesia",
          "Regional Anaesthesia",
          "Local Anaesthesia",
          "Pain Management",
          "Critical Care Anaesthesia",
          "Obstetric Anaesthesia",
          "Pediatric Anaesthesia",
          "Cardiac Anaesthesia",
        ],
        "General Surgery": [
          "Appendectomy",
          "Hernia Repair",
          "Gallbladder Surgery",
          "Thyroidectomy",
          "Laparoscopic Surgery",
          "Robotic Surgery",
          "Colorectal Surgery",
          "Wound Care",
        ],
        Pediatrics: [
          "Well-Child Checkups",
          "Immunizations",
          "Growth Monitoring",
          "Developmental Assessments",
          "Pediatric Emergency Care",
          "Newborn Care",
          "Adolescent Medicine",
          "Pediatric Surgery",
        ],
        Neurology: [
          "EEG (Electroencephalography)",
          "EMG (Electromyography)",
          "MRI Brain Imaging",
          "Stroke Treatment",
          "Epilepsy Management",
          "Movement Disorders",
          "Memory Disorders",
          "Headache Treatment",
        ],
        Psychiatry: [
          "Mental Health Assessment",
          "Depression Treatment",
          "Anxiety Disorders",
          "Bipolar Disorder",
          "Schizophrenia",
          "Addiction Treatment",
          "Child Psychiatry",
          "Geriatric Psychiatry",
        ],
        Orthopedics: [
          "Joint Replacement Surgery",
          "Sports Medicine",
          "Fracture Treatment",
          "Spine Surgery",
          "Arthroscopic Surgery",
          "Physical Therapy",
          "Pain Management",
          "Orthopedic Trauma",
        ],
        Cardiology: [
          "Cardiac Catheterization",
          "Echocardiography",
          "Stress Testing",
          "Holter Monitoring",
          "Pacemaker Implantation",
          "Cardiac Surgery",
          "Preventive Cardiology",
          "Heart Failure Management",
        ],
        Ophthalmology: [
          "Comprehensive Eye Exams",
          "Cataract Surgery",
          "Glaucoma Treatment",
          "Retinal Disorders",
          "LASIK Surgery",
          "Diabetic Eye Care",
          "Pediatric Ophthalmology",
          "Emergency Eye Care",
        ],
        "Emergency Medicine": [
          "Trauma Care",
          "Cardiac Emergencies",
          "Stroke Management",
          "Critical Care",
          "Pediatric Emergencies",
          "Resuscitation Services",
          "Triage and Stabilization",
          "Emergency Diagnostics",
        ],
        "Obstetrics & Gynecology": [
          "Prenatal Care",
          "Labor and Delivery",
          "Gynecological Surgery",
          "Fertility Treatments",
          "Menopause Management",
          "Pap Smears",
          "Mammography",
          "High-Risk Pregnancy Care",
        ],
        Dermatology: [
          "Skin Cancer Screening",
          "Acne Treatment",
          "Eczema Management",
          "Psoriasis Treatment",
          "Cosmetic Dermatology",
          "Surgical Dermatology",
          "Allergy Testing",
          "Hair Loss Treatment",
        ],
        ENT: [
          "Hearing Tests",
          "Sinus Treatment",
          "Tonsillectomy",
          "Voice Disorders",
          "Balance Disorders",
          "Sleep Apnea",
          "Head and Neck Surgery",
          "Allergy Treatment",
        ],
        Urology: [
          "Prostate Treatment",
          "Kidney Stones",
          "Bladder Disorders",
          "Male Infertility",
          "Urinary Incontinence",
          "Urological Cancer",
          "Minimally Invasive Surgery",
          "Robotic Surgery",
        ],
        Radiology: [
          "X-Ray Imaging",
          "CT Scans",
          "MRI Scans",
          "Ultrasound",
          "Nuclear Medicine",
          "Interventional Radiology",
          "Mammography",
          "Bone Density Scans",
        ],
        Pathology: [
          "Blood Tests",
          "Tissue Analysis",
          "Cancer Diagnosis",
          "Microbiology",
          "Cytology",
          "Molecular Pathology",
          "Forensic Pathology",
          "Clinical Chemistry",
        ],
        Physiotherapy: [
          "Physical Rehabilitation",
          "Sports Injury Treatment",
          "Post-Surgery Recovery",
          "Neurological Rehabilitation",
          "Cardiac Rehabilitation",
          "Pain Management",
          "Orthopedic Rehabilitation",
          "Geriatric Physiotherapy",
        ],
      },
      A = [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
      ];
    x.useEffect(() => {
      const P = () => {
        y(window.innerWidth < 768);
      };
      return (
        P(),
        window.addEventListener("resize", P),
        () => window.removeEventListener("resize", P)
      );
    }, []),
      x.useEffect(() => {
        B();
      }, [n]),
      x.useEffect(() => {
        e && k.current && k.current.focus();
      }, [e]);
    const B = () => {
        var P;
        (P = S.current) == null || P.scrollIntoView({ behavior: "smooth" });
      },
      j = (P, Z = !1, he, ut = "text") => {
        const Bi = {
          id: Date.now().toString(),
          text: P,
          isBot: Z,
          timestamp: new Date(),
          options: he,
          type: ut,
        };
        r((Ul) => [...Ul, Bi]);
      },
      U = (P, Z = 1e3) => {
        s(!0),
          setTimeout(() => {
            s(!1), P();
          }, Z);
      },
      K = (P) => P.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(P),
      Q = (P) => /^[+]?[1-9][\d]{0,15}$/.test(P.replace(/\s/g, "")),
      H = (P) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P),
      V = (P) => {
        const Z = new Date(P),
          he = new Date();
        return he.setHours(0, 0, 0, 0), Z >= he;
      },
      T = (P) => {
        j(P, !1),
          U(() => {
            switch (P) {
              case "Book Appointment":
                w(!0),
                  h(1),
                  g([]),
                  j(
                    "Great! I'll help you book an appointment. Let's start with your full name.",
                    !0
                  );
                break;
              case "Our Services":
                j(
                  `🏥 *Al Nabi Hospital - Complete Services Directory:*

🩺 **General Medicine** - Primary healthcare & preventive care
💉 **Anaesthesia** - Pain management & surgical support
🔪 **General Surgery** - Surgical procedures & laparoscopic surgery
👶 **Pediatrics** - Child healthcare & development
🧠 **Neurology** - Brain & nervous system disorders
🧠 **Psychiatry** - Mental health & behavioral therapy
🦴 **Orthopedics** - Bone, joint & spine care
💓 **Cardiology** - Heart care & cardiovascular health
👁️ **Ophthalmology** - Eye care & vision correction
🚨 **Emergency Medicine** - 24/7 urgent care
👩‍⚕️ **Obstetrics & Gynecology** - Women's health & maternity
🩸 **Dermatology** - Skin, hair & nail conditions
👂 **ENT** - Ear, nose & throat care
🚹 **Urology** - Urinary system & male health
📷 **Radiology** - Diagnostic imaging & scans
🔬 **Pathology** - Laboratory testing & diagnosis
💪 **Physiotherapy** - Rehabilitation & physical therapy

Which department would you like to know more about?`,
                  !0,
                  C
                );
                break;
              case "Contact Information":
                j(
                  `📍 *Al Nabi Hospital Contact Details:*

📞 **Main Phone:** +91 4 123 4567
🚨 **Emergency:** +91 4 123 4568
📧 **Email:** info@alnabihospital.com
📍 **Address:** 123 Medical Center Drive, Bijapur, Karnataka, India

⏰ *Operating Hours:*
Monday - Friday: 8:00 AM - 8:00 PM
Saturday - Sunday: 9:00 AM - 6:00 PM
🚨 Emergency Services: 24/7

🅿️ **Parking:** Free parking available
♿ **Accessibility:** Wheelchair accessible`,
                  !0,
                  [
                    "Book Appointment",
                    "Our Services",
                    "Emergency Info",
                    "Find Doctor",
                  ]
                );
                break;
              case "Emergency Info":
                j(
                  `🚨 *Emergency Services - Available 24/7*

📞 **Emergency Hotline:** +91 4 123 4568
🏥 **Emergency Department:** Ground Floor, Building A

*When to visit Emergency:*
• Chest pain or difficulty breathing
• Severe injuries or trauma
• High fever with severe symptoms
• Loss of consciousness
• Severe allergic reactions
• Uncontrolled bleeding
• Severe abdominal pain
• Stroke symptoms (FAST)

⚡ **Response Time:** Average 5-10 minutes
🚑 **Ambulance Service:** Available

For non-emergency appointments, I can help you book one now!`,
                  !0,
                  ["Book Appointment", "Contact Information", "Our Services"]
                );
                break;
              case "Find Doctor":
                j(
                  `👨‍⚕️ *Find a Doctor*

Please select a department to see available doctors:`,
                  !0,
                  C
                );
                break;
              default:
                if (C.includes(P)) {
                  const Z = D[P] || [],
                    he = M[P] || [];
                  j(
                    `🏥 *${P} Department*

*Available Doctors:*
${Z.map((ut) => `• ${ut}`).join(`
`)}

*Services Offered:*
${he.slice(0, 6).map((ut) => `• ${ut}`).join(`
`)}${
                      he.length > 6
                        ? `
... and more`
                        : ""
                    }

Would you like to book an appointment with our ${P} team?`,
                    !0,
                    ["Book Appointment", "More Information", "Other Services"]
                  );
                }
                break;
            }
          });
      },
      N = (P) => {
        j(P, !1),
          g([]),
          U(() => {
            switch (f) {
              case 1:
                if (!K(P)) {
                  g([
                    "Please enter a valid name (minimum 2 characters, letters only)",
                  ]);
                  return;
                }
                d((Z) => ({ ...Z, name: P })),
                  h(2),
                  j(
                    "Perfect! Now, please provide your phone number (with country code if international).",
                    !0
                  );
                break;
              case 2:
                if (!Q(P)) {
                  g(["Please enter a valid phone number"]);
                  return;
                }
                d((Z) => ({ ...Z, phone: P })),
                  h(3),
                  j("Great! What's your email address?", !0);
                break;
              case 3:
                if (!H(P)) {
                  g(["Please enter a valid email address"]);
                  return;
                }
                d((Z) => ({ ...Z, email: P })),
                  h(4),
                  j("Which department would you like to visit?", !0, C);
                break;
              case 4:
                {
                  d((he) => ({ ...he, department: P })), h(5);
                  const Z = D[P] || [];
                  j(
                    `Excellent choice! Here are our available ${P} doctors:

${Z.map((he) => `• ${he}`).join(`
`)}

Which doctor would you prefer? (Or type "any" for any available doctor)`,
                    !0,
                    [...Z, "Any Available Doctor"]
                  );
                }
                break;
              case 5:
                d((Z) => ({ ...Z, doctor: P })),
                  h(6),
                  j(
                    "When would you prefer your appointment? Please provide a date (YYYY-MM-DD format, e.g., 2024-02-15).",
                    !0
                  );
                break;
              case 6:
                if (!V(P)) {
                  g(["Please select a future date"]);
                  return;
                }
                d((Z) => ({ ...Z, date: P })),
                  h(7),
                  j("What time works best for you?", !0, A);
                break;
              case 7:
                d((Z) => ({ ...Z, time: P })),
                  h(8),
                  j(
                    'Any additional notes or specific concerns? (Optional - you can type "none" if no additional notes)',
                    !0
                  );
                break;
              case 8:
                d((Z) => ({ ...Z, notes: P })), O();
                break;
            }
          });
      },
      O = () => {
        const P = { ...c },
          Z = cO(P);
        if (!Z.isValid) {
          g(Z.errors);
          return;
        }
        U(() => {
          j(
            `✅ *Appointment Confirmed!*

👤 **Name:** ${P.name}
📞 **Phone:** ${P.phone}
📧 **Email:** ${P.email}
🏥 **Department:** ${P.department}
👨‍⚕️ **Doctor:** ${P.doctor || "To be assigned"}
📅 **Date:** ${P.date}
⏰ **Time:** ${P.time}
📝 **Notes:** ${P.notes || "None"}

📱 *WhatsApp confirmation sent!*
📧 *Email confirmation sent!*

Your appointment has been successfully booked! You'll receive a confirmation email shortly.

Is there anything else I can help you with?`,
            !0,
            [
              "Book Another Appointment",
              "Our Services",
              "Contact Information",
              "Rate Experience",
            ],
            "confirmation"
          ),
            lO(P),
            uO(P),
            w(!1),
            h(0),
            d({
              name: "",
              phone: "",
              email: "",
              department: "",
              date: "",
              time: "",
              notes: "",
            });
        }, 1500);
      },
      W = () => {
        i.trim() &&
          (v && f > 0
            ? N(i)
            : (j(i, !1),
              U(() => {
                const P = i.toLowerCase();
                P.includes("appointment") || P.includes("book")
                  ? T("Book Appointment")
                  : P.includes("service") || P.includes("department")
                  ? T("Our Services")
                  : P.includes("contact") ||
                    P.includes("phone") ||
                    P.includes("address")
                  ? T("Contact Information")
                  : P.includes("emergency") || P.includes("urgent")
                  ? T("Emergency Info")
                  : P.includes("doctor") || P.includes("physician")
                  ? T("Find Doctor")
                  : P.includes("hello") || P.includes("hi") || P.includes("hey")
                  ? j("Hello! How can I assist you today?", !0, [
                      "Book Appointment",
                      "Our Services",
                      "Contact Information",
                      "Emergency Info",
                    ])
                  : P.includes("thank") || P.includes("thanks")
                  ? j(
                      "You're welcome! Is there anything else I can help you with?",
                      !0,
                      [
                        "Book Appointment",
                        "Our Services",
                        "Contact Information",
                      ]
                    )
                  : P.includes("price") ||
                    P.includes("cost") ||
                    P.includes("fee")
                  ? j(
                      `💰 *Pricing Information:*

Consultation fees vary by department:
• General Medicine: ₹500 - ₹800
• Specialists: ₹800 - ₹1500
• Emergency: ₹1000 - ₹2000
• Surgery: ₹5000 - ₹50000 (depending on procedure)

💳 *Payment Methods:*
• Cash
• Credit/Debit Cards
• UPI
• Insurance accepted
• EMI options available

For exact pricing, please contact our billing department or book an appointment.`,
                      !0,
                      ["Book Appointment", "Contact Information"]
                    )
                  : P.includes("insurance") || P.includes("claim")
                  ? j(
                      `🏥 *Insurance Information:*

We accept most major insurance providers:
• Government schemes (Ayushman Bharat, CGHS)
• Private insurance (ICICI, HDFC, Bajaj, etc.)
• Corporate insurance
• TPA networks

📋 *Required Documents:*
• Insurance card
• ID proof (Aadhar/PAN)
• Referral letter (if required)
• Pre-authorization (for planned procedures)

For specific insurance queries, please contact our billing department.`,
                      !0,
                      ["Book Appointment", "Contact Information"]
                    )
                  : P.includes("location") ||
                    P.includes("where") ||
                    P.includes("address")
                  ? j(
                      `📍 *Hospital Location:*

🏥 **Al Nabi Hospital**
123 Medical Center Drive
Bijapur, Karnataka, India

🗺️ **How to reach us:**
• By Road: 5 minutes from Bijapur Bus Stand
• By Train: 10 minutes from Bijapur Railway Station
• By Air: 45 minutes from Belgaum Airport

🅿️ **Parking:** Free parking available
♿ **Accessibility:** Wheelchair accessible

Need directions? I can help you with the route!`,
                      !0,
                      ["Book Appointment", "Contact Information"]
                    )
                  : P.includes("timing") ||
                    P.includes("hours") ||
                    P.includes("schedule")
                  ? j(
                      `⏰ *Hospital Timings:*

🩺 **Outpatient Department:**
Monday - Friday: 8:00 AM - 8:00 PM
Saturday - Sunday: 9:00 AM - 6:00 PM

🚨 **Emergency Services:**
24/7 Available

🏥 **Inpatient Services:**
24/7 Available

💊 **Pharmacy:**
Monday - Sunday: 7:00 AM - 10:00 PM

🔬 **Laboratory:**
Monday - Sunday: 7:00 AM - 8:00 PM

📞 **Appointment Booking:**
Available 24/7 online`,
                      !0,
                      ["Book Appointment", "Contact Information"]
                    )
                  : P.includes("facility") ||
                    P.includes("equipment") ||
                    P.includes("technology")
                  ? j(
                      `🏥 *Hospital Facilities & Technology:*

🔬 **Advanced Diagnostics:**
• MRI, CT Scan, X-Ray
• Ultrasound, ECG, EEG
• Blood Bank & Laboratory
• Pathology Services

🏥 **Medical Equipment:**
• Modern Operation Theaters
• ICU & NICU
• Ventilators & Monitors
• Laparoscopic Equipment
• Robotic Surgery Systems

🏨 **Patient Facilities:**
• Private & General Wards
• AC Rooms Available
• Cafeteria & Canteen
• Prayer Room
• Wi-Fi Access

Would you like to know about specific facilities?`,
                      !0,
                      ["Book Appointment", "Our Services"]
                    )
                  : P.includes("ambulance") ||
                    P.includes("emergency") ||
                    P.includes("urgent")
                  ? j(
                      `🚑 *Emergency & Ambulance Services:*

📞 **Emergency Hotline:** +91 4 123 4568
🚑 **Ambulance Service:** 24/7 Available

⚡ **Response Time:**
• City: 10-15 minutes
• Nearby areas: 20-30 minutes

🏥 **Emergency Department:**
• Level I Trauma Center
• Cardiac Emergency Unit
• Pediatric Emergency
• Stroke Unit

💳 **Emergency Payment:**
• Cash/Card accepted
• Insurance processing
• EMI options available

For immediate emergency, call the hotline directly!`,
                      !0,
                      ["Contact Information", "Emergency Info"]
                    )
                  : P.includes("test") ||
                    P.includes("lab") ||
                    P.includes("diagnostic")
                  ? j(
                      `🔬 *Laboratory & Diagnostic Services:*

🩸 **Blood Tests:**
• Complete Blood Count (CBC)
• Blood Sugar, Cholesterol
• Liver & Kidney Function
• Thyroid Tests
• Cancer Markers

📷 **Imaging Services:**
• X-Ray (Digital)
• Ultrasound
• CT Scan
• MRI
• ECG, EEG, EMG

🔍 **Specialized Tests:**
• Cardiac Tests
• Neurological Tests
• Pregnancy Tests
• Allergy Tests
• Genetic Testing

⏰ **Report Timing:**
• Routine: 24-48 hours
• Emergency: 2-4 hours
• Specialized: 3-7 days

Book your tests online or visit our lab!`,
                      !0,
                      ["Book Appointment", "Contact Information"]
                    )
                  : P.includes("surgery") ||
                    P.includes("operation") ||
                    P.includes("procedure")
                  ? j(
                      `🔪 *Surgical Services:*

🏥 **Available Surgeries:**
• General Surgery
• Laparoscopic Surgery
• Orthopedic Surgery
• Cardiac Surgery
• Neurosurgery
• Pediatric Surgery
• Gynecological Surgery
• ENT Surgery

⚡ **Special Features:**
• Minimally Invasive Procedures
• Robotic Surgery
• Day Care Surgery
• Advanced Anesthesia
• Post-operative Care

👨‍⚕️ **Surgical Team:**
• Experienced Surgeons
• Anesthesiologists
• Surgical Nurses
• Support Staff

📋 **Pre-surgery Requirements:**
• Medical Evaluation
• Pre-operative Tests
• Insurance Approval
• Fasting Instructions

Would you like to book a consultation with our surgeons?`,
                      !0,
                      ["Book Appointment", "Our Services"]
                    )
                  : P.includes("covid") ||
                    P.includes("corona") ||
                    P.includes("vaccine")
                  ? j(
                      `🦠 *COVID-19 Services:*

🔬 **Testing:**
• RT-PCR Test
• Rapid Antigen Test
• Antibody Test

💉 **Vaccination:**
• COVID-19 Vaccines Available
• Booster Doses
• Vaccination Certificates

🏥 **Treatment:**
• COVID-19 Treatment
• Post-COVID Care
• Rehabilitation Services

🛡️ **Safety Measures:**
• Regular Sanitization
• Social Distancing
• Mask Mandatory
• Temperature Screening

📞 **COVID Helpline:** +91 4 123 4569

Stay safe and get vaccinated!`,
                      !0,
                      ["Book Appointment", "Contact Information"]
                    )
                  : P.includes("cardiology") ||
                    P.includes("heart") ||
                    P.includes("cardiac")
                  ? j(
                      `💓 *Cardiology Department:*

👨‍⚕️ **Our Cardiologists:**
• Dr. Ahmed Hassan, Interventional Cardiologist
• Dr. Sarah Al-Rashid, Cardiac Surgeon

🔬 **Services:**
• Cardiac Catheterization
• Echocardiography
• Stress Testing
• Holter Monitoring
• Pacemaker Implantation
• Cardiac Surgery
• Preventive Cardiology
• Heart Failure Management

⚡ **Emergency Cardiac Care:**
• 24/7 Cardiac Emergency
• Primary Angioplasty
• Cardiac ICU

Would you like to book an appointment with our cardiology team?`,
                      !0,
                      ["Book Appointment", "Our Services"]
                    )
                  : P.includes("neurology") ||
                    P.includes("brain") ||
                    P.includes("nerve")
                  ? j(
                      `🧠 *Neurology Department:*

👨‍⚕️ **Our Neurologists:**
• Dr. Yitendra Nayak, MCh Neurosurgery

🔬 **Services:**
• EEG (Electroencephalography)
• EMG (Electromyography)
• MRI Brain Imaging
• Stroke Treatment
• Epilepsy Management
• Movement Disorders
• Memory Disorders
• Headache Treatment

⚡ **Emergency Neurology:**
• Stroke Unit
• 24/7 Neurological Emergency
• Neurosurgical ICU

Would you like to book an appointment with our neurology team?`,
                      !0,
                      ["Book Appointment", "Our Services"]
                    )
                  : P.includes("pediatrics") ||
                    P.includes("child") ||
                    P.includes("baby")
                  ? j(
                      `👶 *Pediatrics Department:*

👨‍⚕️ **Our Pediatricians:**
• Dr. Surendra Aggarwal, MCh Pediatric Surgeon
• Dr. Rizwan, MD Pediatrics

🔬 **Services:**
• Well-Child Checkups
• Immunizations
• Growth Monitoring
• Developmental Assessments
• Pediatric Emergency Care
• Newborn Care
• Adolescent Medicine
• Pediatric Surgery

🏥 **Child-Friendly Environment:**
• Play Area
• Child-Safe Equipment
• Pediatric ICU
• Neonatal Care

Would you like to book an appointment for your child?`,
                      !0,
                      ["Book Appointment", "Our Services"]
                    )
                  : j(
                      "I understand you're looking for information. Here are some ways I can help you:",
                      !0,
                      [
                        "Book Appointment",
                        "Our Services",
                        "Contact Information",
                        "Emergency Info",
                      ]
                    );
              })),
          a(""));
      },
      q = (P) => {
        u(!1),
          j(
            `Thank you for rating your experience ${P}/5 stars! ⭐ Your feedback helps us improve our service. 🙏`,
            !0,
            ["Book Appointment", "Our Services", "Contact Information"]
          );
      },
      Me = (P) => {
        P.key === "Enter" && !P.shiftKey && (P.preventDefault(), W());
      };
    return e
      ? p.jsx(dn, {
          children: p.jsxs($.div, {
            initial: { opacity: 0, scale: 0.8, y: 100 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.8, y: 100 },
            transition: { type: "spring", stiffness: 400, damping: 30 },
            className: `fixed ${m ? "inset-0" : "bottom-6 right-6"} ${
              m ? "w-full h-full" : "w-96 h-[600px]"
            } bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 chatbot-window chatbot-container`,
            children: [
              p.jsxs("div", {
                className:
                  "bg-gradient-to-r from-[#004F74] to-[#007BBA] p-4 flex items-center justify-between text-white shadow-lg",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      p.jsx("div", {
                        className:
                          "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                        children: p.jsx(uw, { className: "h-5 w-5" }),
                      }),
                      p.jsxs("div", {
                        children: [
                          p.jsx("h3", {
                            className: "font-semibold",
                            children: "Al Nabi Assistant",
                          }),
                          p.jsx("p", {
                            className: "text-xs text-blue-100",
                            children: "Online • Ready to help",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsx("button", {
                    onClick: t,
                    className:
                      "p-2 hover:bg-white/20 rounded-full transition-colors",
                    children: p.jsx(Xs, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 chatbot-messages",
                children: [
                  n.map((P) =>
                    p.jsx(
                      "div",
                      {
                        className: `flex ${
                          P.isBot ? "justify-start" : "justify-end"
                        }`,
                        children: p.jsxs("div", {
                          className: `max-w-[85%] p-3 rounded-2xl ${
                            P.isBot
                              ? "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-400 shadow-sm"
                              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                          } ${
                            P.type === "confirmation"
                              ? "border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100"
                              : ""
                          }`,
                          children: [
                            p.jsx("p", {
                              className:
                                "text-sm whitespace-pre-line leading-relaxed",
                              children: P.text,
                            }),
                            P.options &&
                              p.jsx("div", {
                                className: "mt-3 space-y-2",
                                children: P.options.map((Z, he) =>
                                  p.jsx(
                                    "button",
                                    {
                                      onClick: () => T(Z),
                                      className:
                                        "block w-full text-left p-2 text-xs bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 rounded-lg transition-all duration-200 border border-blue-200 shadow-sm",
                                      children: Z,
                                    },
                                    he
                                  )
                                ),
                              }),
                          ],
                        }),
                      },
                      P.id
                    )
                  ),
                  b.length > 0 &&
                    p.jsx("div", {
                      className: "flex justify-start",
                      children: p.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 p-3 rounded-2xl shadow-sm max-w-[85%]",
                        children: p.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            p.jsx(hM, { className: "h-4 w-4 text-red-500" }),
                            p.jsx("p", {
                              className: "text-sm text-red-700",
                              children: b[0],
                            }),
                          ],
                        }),
                      }),
                    }),
                  o &&
                    p.jsx("div", {
                      className: "flex justify-start",
                      children: p.jsx("div", {
                        className: "bg-white p-3 rounded-2xl shadow-sm",
                        children: p.jsxs("div", {
                          className: "flex space-x-1",
                          children: [
                            p.jsx("div", {
                              className:
                                "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                            }),
                            p.jsx("div", {
                              className:
                                "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                              style: { animationDelay: "0.1s" },
                            }),
                            p.jsx("div", {
                              className:
                                "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                              style: { animationDelay: "0.2s" },
                            }),
                          ],
                        }),
                      }),
                    }),
                  l &&
                    p.jsxs("div", {
                      className:
                        "bg-white p-4 rounded-2xl shadow-sm border border-gray-200",
                      children: [
                        p.jsx("p", {
                          className: "text-sm text-gray-800 mb-3",
                          children: "How was your experience?",
                        }),
                        p.jsx("div", {
                          className: "flex space-x-2",
                          children: [1, 2, 3, 4, 5].map((P) =>
                            p.jsx(
                              "button",
                              {
                                onClick: () => q(P),
                                className:
                                  "p-1 hover:bg-yellow-100 rounded transition-colors",
                                children: p.jsx(dw, {
                                  className:
                                    "h-5 w-5 text-yellow-400 fill-current",
                                }),
                              },
                              P
                            )
                          ),
                        }),
                      ],
                    }),
                  p.jsx("div", { ref: S }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "p-4 bg-white border-t border-gray-200 chatbot-input",
                children: [
                  p.jsxs("div", {
                    className: "flex space-x-2",
                    children: [
                      p.jsx("input", {
                        ref: k,
                        type: "text",
                        value: i,
                        onChange: (P) => a(P.target.value),
                        onKeyPress: Me,
                        placeholder:
                          v && f > 0
                            ? "Type your response..."
                            : "Type your message...",
                        className:
                          "flex-1 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                      }),
                      p.jsx("button", {
                        onClick: W,
                        disabled: !i.trim(),
                        className:
                          "p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md",
                        children: p.jsx(MM, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className:
                      "flex flex-wrap gap-2 mt-2 chatbot-quick-actions",
                    children: [
                      p.jsx("button", {
                        onClick: () => T("Book Appointment"),
                        className:
                          "text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full hover:from-blue-100 hover:to-purple-100 transition-all duration-200 border border-blue-200 shadow-sm",
                        children: "📅 Book Appointment",
                      }),
                      p.jsx("button", {
                        onClick: () => T("Our Services"),
                        className:
                          "text-xs px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 rounded-full hover:from-green-100 hover:to-emerald-100 transition-all duration-200 border border-green-200 shadow-sm",
                        children: "🏥 Services",
                      }),
                      p.jsx("button", {
                        onClick: () => u(!0),
                        className:
                          "text-xs px-3 py-1 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-600 rounded-full hover:from-yellow-100 hover:to-orange-100 transition-all duration-200 border border-yellow-200 shadow-sm",
                        children: "⭐ Rate Experience",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  fO = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1);
    x.useEffect(() => {
      const a = () => {
        const o = document.getElementById("hero");
        if (o) {
          const s = o.offsetTop + o.offsetHeight,
            l = window.scrollY + window.innerHeight;
          r(l > s + 100);
        }
      };
      return (
        window.addEventListener("scroll", a),
        a(),
        () => window.removeEventListener("scroll", a)
      );
    }, []);
    const i = () => {
      t(!e);
    };
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(sO, { isOpen: e, onClick: i, isVisible: n }),
        p.jsx(dO, { isOpen: e, onClose: () => t(!1) }),
      ],
    });
  },
  pO = x.lazy(() => no(() => import("./ServicePage-BzylH6TW.js"), [])),
  hO = x.lazy(() => no(() => import("./Careers-Bwe69BMQ.js"), [])),
  mO = x.lazy(() => no(() => import("./Terms-BpYw9ZdE.js"), [])),
  gO = x.lazy(() => no(() => import("./CookiePolicy-rDsQjhWx.js"), [])),
  yO = x.lazy(() => no(() => import("./PrivacyPolicy-CRzUoGEt.js"), [])),
  vO = x.memo(() =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(IM, {}),
        p.jsx(sT, {}),
        p.jsx(lT, {}),
        p.jsx(uT, {}),
        p.jsx(dT, {}),
        p.jsx(fT, {}),
        p.jsx("div", { id: "contact-section", children: p.jsx(pT, {}) }),
      ],
    })
  ),
  xO = () => {
    const [e, t] = x.useState(!0);
    return (
      x.useEffect(() => {
        const n = () => {
          const r = document.getElementById("contact-section");
          if (!r) return;
          const i = r.getBoundingClientRect(),
            a = i.top < window.innerHeight && i.bottom >= 0;
          t(!a);
        };
        return (
          window.addEventListener("scroll", n),
          n(),
          () => {
            window.removeEventListener("scroll", n);
          }
        );
      }, []),
      p.jsx(Gk, {
        children: p.jsx(eO, {
          children: p.jsxs("div", {
            className: "min-h-screen",
            children: [
              p.jsx(x.Suspense, {
                fallback: p.jsx("div", { children: "Loading..." }),
                children: p.jsx(Ek, {
                  children: p.jsxs(An, {
                    path: "/",
                    element: p.jsx(aO, {}),
                    children: [
                      p.jsx(An, { index: !0, element: p.jsx(vO, {}) }),
                      p.jsx(An, {
                        path: "/services/:serviceId",
                        element: p.jsx(pO, {}),
                      }),
                      p.jsx(An, { path: "/careers", element: p.jsx(hO, {}) }),
                      p.jsx(An, { path: "/terms", element: p.jsx(mO, {}) }),
                      p.jsx(An, {
                        path: "/cookie-policy",
                        element: p.jsx(gO, {}),
                      }),
                      p.jsx(An, {
                        path: "/privacy-policy",
                        element: p.jsx(yO, {}),
                      }),
                    ],
                  }),
                }),
              }),
              p.jsx(JR, {}),
              e && p.jsx(fO, {}),
            ],
          }),
        }),
      })
    );
  };
sv(document.getElementById("root")).render(
  p.jsx(x.StrictMode, { children: p.jsx(xO, {}) })
);
export {
  ow as A,
  tg as B,
  rp as C,
  Zi as D,
  wM as E,
  qs as H,
  DM as M,
  cw as P,
  _ as R,
  EM as S,
  pw as U,
  Xs as X,
  gf as a,
  Ll as b,
  J as c,
  sd as d,
  NM as e,
  ng as f,
  fw as g,
  ap as h,
  PM as i,
  p as j,
  mM as k,
  TM as l,
  bM as m,
  gM as n,
  $ as o,
  ld as p,
  lw as q,
  x as r,
  yM as s,
  ip as t,
  bO as u,
  sw as v,
  hM as w,
};
