(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        s(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const f of d.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && s(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity),
        c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function s(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const d = o(c);
        fetch(c.href, d)
    }
}
)();
var hc = {
    exports: {}
}
  , Cl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fp;
function z1() {
    if (Fp)
        return Cl;
    Fp = 1;
    var i = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function o(s, c, d) {
        var f = null;
        if (d !== void 0 && (f = "" + d),
        c.key !== void 0 && (f = "" + c.key),
        "key"in c) {
            d = {};
            for (var m in c)
                m !== "key" && (d[m] = c[m])
        } else
            d = c;
        return c = d.ref,
        {
            $$typeof: i,
            type: s,
            key: f,
            ref: c !== void 0 ? c : null,
            props: d
        }
    }
    return Cl.Fragment = a,
    Cl.jsx = o,
    Cl.jsxs = o,
    Cl
}
var Pp;
function R1() {
    return Pp || (Pp = 1,
    hc.exports = z1()),
    hc.exports
}
var x = R1()
  , mc = {
    exports: {}
}
  , dt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function O1() {
    if (Wp)
        return dt;
    Wp = 1;
    var i = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , b = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function E(w) {
        return w === null || typeof w != "object" ? null : (w = S && w[S] || w["@@iterator"],
        typeof w == "function" ? w : null)
    }
    var D = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , O = Object.assign
      , _ = {};
    function H(w, U, J) {
        this.props = w,
        this.context = U,
        this.refs = _,
        this.updater = J || D
    }
    H.prototype.isReactComponent = {},
    H.prototype.setState = function(w, U) {
        if (typeof w != "object" && typeof w != "function" && w != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, U, "setState")
    }
    ,
    H.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate")
    }
    ;
    function Q() {}
    Q.prototype = H.prototype;
    function Y(w, U, J) {
        this.props = w,
        this.context = U,
        this.refs = _,
        this.updater = J || D
    }
    var G = Y.prototype = new Q;
    G.constructor = Y,
    O(G, H.prototype),
    G.isPureReactComponent = !0;
    var F = Array.isArray;
    function rt() {}
    var I = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , L = Object.prototype.hasOwnProperty;
    function at(w, U, J) {
        var K = J.ref;
        return {
            $$typeof: i,
            type: w,
            key: U,
            ref: K !== void 0 ? K : null,
            props: J
        }
    }
    function $(w, U) {
        return at(w.type, U, w.props)
    }
    function ut(w) {
        return typeof w == "object" && w !== null && w.$$typeof === i
    }
    function gt(w) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + w.replace(/[=:]/g, function(J) {
            return U[J]
        })
    }
    var kt = /\/+/g;
    function Ct(w, U) {
        return typeof w == "object" && w !== null && w.key != null ? gt("" + w.key) : U.toString(36)
    }
    function Dt(w) {
        switch (w.status) {
        case "fulfilled":
            return w.value;
        case "rejected":
            throw w.reason;
        default:
            switch (typeof w.status == "string" ? w.then(rt, rt) : (w.status = "pending",
            w.then(function(U) {
                w.status === "pending" && (w.status = "fulfilled",
                w.value = U)
            }, function(U) {
                w.status === "pending" && (w.status = "rejected",
                w.reason = U)
            })),
            w.status) {
            case "fulfilled":
                return w.value;
            case "rejected":
                throw w.reason
            }
        }
        throw w
    }
    function z(w, U, J, K, W) {
        var lt = typeof w;
        (lt === "undefined" || lt === "boolean") && (w = null);
        var vt = !1;
        if (w === null)
            vt = !0;
        else
            switch (lt) {
            case "bigint":
            case "string":
            case "number":
                vt = !0;
                break;
            case "object":
                switch (w.$$typeof) {
                case i:
                case a:
                    vt = !0;
                    break;
                case y:
                    return vt = w._init,
                    z(vt(w._payload), U, J, K, W)
                }
            }
        if (vt)
            return W = W(w),
            vt = K === "" ? "." + Ct(w, 0) : K,
            F(W) ? (J = "",
            vt != null && (J = vt.replace(kt, "$&/") + "/"),
            z(W, U, J, "", function(en) {
                return en
            })) : W != null && (ut(W) && (W = $(W, J + (W.key == null || w && w.key === W.key ? "" : ("" + W.key).replace(kt, "$&/") + "/") + vt)),
            U.push(W)),
            1;
        vt = 0;
        var Xt = K === "" ? "." : K + ":";
        if (F(w))
            for (var ht = 0; ht < w.length; ht++)
                K = w[ht],
                lt = Xt + Ct(K, ht),
                vt += z(K, U, J, lt, W);
        else if (ht = E(w),
        typeof ht == "function")
            for (w = ht.call(w),
            ht = 0; !(K = w.next()).done; )
                K = K.value,
                lt = Xt + Ct(K, ht++),
                vt += z(K, U, J, lt, W);
        else if (lt === "object") {
            if (typeof w.then == "function")
                return z(Dt(w), U, J, K, W);
            throw U = String(w),
            Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
        }
        return vt
    }
    function Z(w, U, J) {
        if (w == null)
            return w;
        var K = []
          , W = 0;
        return z(w, K, "", "", function(lt) {
            return U.call(J, lt, W++)
        }),
        K
    }
    function P(w) {
        if (w._status === -1) {
            var U = w._result;
            U = U(),
            U.then(function(J) {
                (w._status === 0 || w._status === -1) && (w._status = 1,
                w._result = J)
            }, function(J) {
                (w._status === 0 || w._status === -1) && (w._status = 2,
                w._result = J)
            }),
            w._status === -1 && (w._status = 0,
            w._result = U)
        }
        if (w._status === 1)
            return w._result.default;
        throw w._result
    }
    var ft = typeof reportError == "function" ? reportError : function(w) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var U = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
                error: w
            });
            if (!window.dispatchEvent(U))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", w);
            return
        }
        console.error(w)
    }
      , X = {
        map: Z,
        forEach: function(w, U, J) {
            Z(w, function() {
                U.apply(this, arguments)
            }, J)
        },
        count: function(w) {
            var U = 0;
            return Z(w, function() {
                U++
            }),
            U
        },
        toArray: function(w) {
            return Z(w, function(U) {
                return U
            }) || []
        },
        only: function(w) {
            if (!ut(w))
                throw Error("React.Children.only expected to receive a single React element child.");
            return w
        }
    };
    return dt.Activity = b,
    dt.Children = X,
    dt.Component = H,
    dt.Fragment = o,
    dt.Profiler = c,
    dt.PureComponent = Y,
    dt.StrictMode = s,
    dt.Suspense = p,
    dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I,
    dt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(w) {
            return I.H.useMemoCache(w)
        }
    },
    dt.cache = function(w) {
        return function() {
            return w.apply(null, arguments)
        }
    }
    ,
    dt.cacheSignal = function() {
        return null
    }
    ,
    dt.cloneElement = function(w, U, J) {
        if (w == null)
            throw Error("The argument must be a React element, but you passed " + w + ".");
        var K = O({}, w.props)
          , W = w.key;
        if (U != null)
            for (lt in U.key !== void 0 && (W = "" + U.key),
            U)
                !L.call(U, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && U.ref === void 0 || (K[lt] = U[lt]);
        var lt = arguments.length - 2;
        if (lt === 1)
            K.children = J;
        else if (1 < lt) {
            for (var vt = Array(lt), Xt = 0; Xt < lt; Xt++)
                vt[Xt] = arguments[Xt + 2];
            K.children = vt
        }
        return at(w.type, W, K)
    }
    ,
    dt.createContext = function(w) {
        return w = {
            $$typeof: f,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        w.Provider = w,
        w.Consumer = {
            $$typeof: d,
            _context: w
        },
        w
    }
    ,
    dt.createElement = function(w, U, J) {
        var K, W = {}, lt = null;
        if (U != null)
            for (K in U.key !== void 0 && (lt = "" + U.key),
            U)
                L.call(U, K) && K !== "key" && K !== "__self" && K !== "__source" && (W[K] = U[K]);
        var vt = arguments.length - 2;
        if (vt === 1)
            W.children = J;
        else if (1 < vt) {
            for (var Xt = Array(vt), ht = 0; ht < vt; ht++)
                Xt[ht] = arguments[ht + 2];
            W.children = Xt
        }
        if (w && w.defaultProps)
            for (K in vt = w.defaultProps,
            vt)
                W[K] === void 0 && (W[K] = vt[K]);
        return at(w, lt, W)
    }
    ,
    dt.createRef = function() {
        return {
            current: null
        }
    }
    ,
    dt.forwardRef = function(w) {
        return {
            $$typeof: m,
            render: w
        }
    }
    ,
    dt.isValidElement = ut,
    dt.lazy = function(w) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: w
            },
            _init: P
        }
    }
    ,
    dt.memo = function(w, U) {
        return {
            $$typeof: g,
            type: w,
            compare: U === void 0 ? null : U
        }
    }
    ,
    dt.startTransition = function(w) {
        var U = I.T
          , J = {};
        I.T = J;
        try {
            var K = w()
              , W = I.S;
            W !== null && W(J, K),
            typeof K == "object" && K !== null && typeof K.then == "function" && K.then(rt, ft)
        } catch (lt) {
            ft(lt)
        } finally {
            U !== null && J.types !== null && (U.types = J.types),
            I.T = U
        }
    }
    ,
    dt.unstable_useCacheRefresh = function() {
        return I.H.useCacheRefresh()
    }
    ,
    dt.use = function(w) {
        return I.H.use(w)
    }
    ,
    dt.useActionState = function(w, U, J) {
        return I.H.useActionState(w, U, J)
    }
    ,
    dt.useCallback = function(w, U) {
        return I.H.useCallback(w, U)
    }
    ,
    dt.useContext = function(w) {
        return I.H.useContext(w)
    }
    ,
    dt.useDebugValue = function() {}
    ,
    dt.useDeferredValue = function(w, U) {
        return I.H.useDeferredValue(w, U)
    }
    ,
    dt.useEffect = function(w, U) {
        return I.H.useEffect(w, U)
    }
    ,
    dt.useEffectEvent = function(w) {
        return I.H.useEffectEvent(w)
    }
    ,
    dt.useId = function() {
        return I.H.useId()
    }
    ,
    dt.useImperativeHandle = function(w, U, J) {
        return I.H.useImperativeHandle(w, U, J)
    }
    ,
    dt.useInsertionEffect = function(w, U) {
        return I.H.useInsertionEffect(w, U)
    }
    ,
    dt.useLayoutEffect = function(w, U) {
        return I.H.useLayoutEffect(w, U)
    }
    ,
    dt.useMemo = function(w, U) {
        return I.H.useMemo(w, U)
    }
    ,
    dt.useOptimistic = function(w, U) {
        return I.H.useOptimistic(w, U)
    }
    ,
    dt.useReducer = function(w, U, J) {
        return I.H.useReducer(w, U, J)
    }
    ,
    dt.useRef = function(w) {
        return I.H.useRef(w)
    }
    ,
    dt.useState = function(w) {
        return I.H.useState(w)
    }
    ,
    dt.useSyncExternalStore = function(w, U, J) {
        return I.H.useSyncExternalStore(w, U, J)
    }
    ,
    dt.useTransition = function() {
        return I.H.useTransition()
    }
    ,
    dt.version = "19.2.4",
    dt
}
var $p;
function mf() {
    return $p || ($p = 1,
    mc.exports = O1()),
    mc.exports
}
var q = mf()
  , pc = {
    exports: {}
}
  , Dl = {}
  , gc = {
    exports: {}
}
  , yc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function V1() {
    return Ip || (Ip = 1,
    (function(i) {
        function a(z, Z) {
            var P = z.length;
            z.push(Z);
            t: for (; 0 < P; ) {
                var ft = P - 1 >>> 1
                  , X = z[ft];
                if (0 < c(X, Z))
                    z[ft] = Z,
                    z[P] = X,
                    P = ft;
                else
                    break t
            }
        }
        function o(z) {
            return z.length === 0 ? null : z[0]
        }
        function s(z) {
            if (z.length === 0)
                return null;
            var Z = z[0]
              , P = z.pop();
            if (P !== Z) {
                z[0] = P;
                t: for (var ft = 0, X = z.length, w = X >>> 1; ft < w; ) {
                    var U = 2 * (ft + 1) - 1
                      , J = z[U]
                      , K = U + 1
                      , W = z[K];
                    if (0 > c(J, P))
                        K < X && 0 > c(W, J) ? (z[ft] = W,
                        z[K] = P,
                        ft = K) : (z[ft] = J,
                        z[U] = P,
                        ft = U);
                    else if (K < X && 0 > c(W, P))
                        z[ft] = W,
                        z[K] = P,
                        ft = K;
                    else
                        break t
                }
            }
            return Z
        }
        function c(z, Z) {
            var P = z.sortIndex - Z.sortIndex;
            return P !== 0 ? P : z.id - Z.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            i.unstable_now = function() {
                return d.now()
            }
        } else {
            var f = Date
              , m = f.now();
            i.unstable_now = function() {
                return f.now() - m
            }
        }
        var p = []
          , g = []
          , y = 1
          , b = null
          , S = 3
          , E = !1
          , D = !1
          , O = !1
          , _ = !1
          , H = typeof setTimeout == "function" ? setTimeout : null
          , Q = typeof clearTimeout == "function" ? clearTimeout : null
          , Y = typeof setImmediate < "u" ? setImmediate : null;
        function G(z) {
            for (var Z = o(g); Z !== null; ) {
                if (Z.callback === null)
                    s(g);
                else if (Z.startTime <= z)
                    s(g),
                    Z.sortIndex = Z.expirationTime,
                    a(p, Z);
                else
                    break;
                Z = o(g)
            }
        }
        function F(z) {
            if (O = !1,
            G(z),
            !D)
                if (o(p) !== null)
                    D = !0,
                    rt || (rt = !0,
                    gt());
                else {
                    var Z = o(g);
                    Z !== null && Dt(F, Z.startTime - z)
                }
        }
        var rt = !1
          , I = -1
          , L = 5
          , at = -1;
        function $() {
            return _ ? !0 : !(i.unstable_now() - at < L)
        }
        function ut() {
            if (_ = !1,
            rt) {
                var z = i.unstable_now();
                at = z;
                var Z = !0;
                try {
                    t: {
                        D = !1,
                        O && (O = !1,
                        Q(I),
                        I = -1),
                        E = !0;
                        var P = S;
                        try {
                            e: {
                                for (G(z),
                                b = o(p); b !== null && !(b.expirationTime > z && $()); ) {
                                    var ft = b.callback;
                                    if (typeof ft == "function") {
                                        b.callback = null,
                                        S = b.priorityLevel;
                                        var X = ft(b.expirationTime <= z);
                                        if (z = i.unstable_now(),
                                        typeof X == "function") {
                                            b.callback = X,
                                            G(z),
                                            Z = !0;
                                            break e
                                        }
                                        b === o(p) && s(p),
                                        G(z)
                                    } else
                                        s(p);
                                    b = o(p)
                                }
                                if (b !== null)
                                    Z = !0;
                                else {
                                    var w = o(g);
                                    w !== null && Dt(F, w.startTime - z),
                                    Z = !1
                                }
                            }
                            break t
                        } finally {
                            b = null,
                            S = P,
                            E = !1
                        }
                        Z = void 0
                    }
                } finally {
                    Z ? gt() : rt = !1
                }
            }
        }
        var gt;
        if (typeof Y == "function")
            gt = function() {
                Y(ut)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var kt = new MessageChannel
              , Ct = kt.port2;
            kt.port1.onmessage = ut,
            gt = function() {
                Ct.postMessage(null)
            }
        } else
            gt = function() {
                H(ut, 0)
            }
            ;
        function Dt(z, Z) {
            I = H(function() {
                z(i.unstable_now())
            }, Z)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(z) {
            z.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < z ? Math.floor(1e3 / z) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        i.unstable_next = function(z) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var Z = 3;
                break;
            default:
                Z = S
            }
            var P = S;
            S = Z;
            try {
                return z()
            } finally {
                S = P
            }
        }
        ,
        i.unstable_requestPaint = function() {
            _ = !0
        }
        ,
        i.unstable_runWithPriority = function(z, Z) {
            switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
            }
            var P = S;
            S = z;
            try {
                return Z()
            } finally {
                S = P
            }
        }
        ,
        i.unstable_scheduleCallback = function(z, Z, P) {
            var ft = i.unstable_now();
            switch (typeof P == "object" && P !== null ? (P = P.delay,
            P = typeof P == "number" && 0 < P ? ft + P : ft) : P = ft,
            z) {
            case 1:
                var X = -1;
                break;
            case 2:
                X = 250;
                break;
            case 5:
                X = 1073741823;
                break;
            case 4:
                X = 1e4;
                break;
            default:
                X = 5e3
            }
            return X = P + X,
            z = {
                id: y++,
                callback: Z,
                priorityLevel: z,
                startTime: P,
                expirationTime: X,
                sortIndex: -1
            },
            P > ft ? (z.sortIndex = P,
            a(g, z),
            o(p) === null && z === o(g) && (O ? (Q(I),
            I = -1) : O = !0,
            Dt(F, P - ft))) : (z.sortIndex = X,
            a(p, z),
            D || E || (D = !0,
            rt || (rt = !0,
            gt()))),
            z
        }
        ,
        i.unstable_shouldYield = $,
        i.unstable_wrapCallback = function(z) {
            var Z = S;
            return function() {
                var P = S;
                S = Z;
                try {
                    return z.apply(this, arguments)
                } finally {
                    S = P
                }
            }
        }
    }
    )(yc)),
    yc
}
var tg;
function _1() {
    return tg || (tg = 1,
    gc.exports = V1()),
    gc.exports
}
var vc = {
    exports: {}
}
  , ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eg;
function B1() {
    if (eg)
        return ce;
    eg = 1;
    var i = mf();
    function a(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                g += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o() {}
    var s = {
        d: {
            f: o,
            r: function() {
                throw Error(a(522))
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function d(p, g, y) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: b == null ? null : "" + b,
            children: p,
            containerInfo: g,
            implementation: y
        }
    }
    var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(p, g) {
        if (p === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s,
    ce.createPortal = function(p, g) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(a(299));
        return d(p, g, null, y)
    }
    ,
    ce.flushSync = function(p) {
        var g = f.T
          , y = s.p;
        try {
            if (f.T = null,
            s.p = 2,
            p)
                return p()
        } finally {
            f.T = g,
            s.p = y,
            s.d.f()
        }
    }
    ,
    ce.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        s.d.C(p, g))
    }
    ,
    ce.prefetchDNS = function(p) {
        typeof p == "string" && s.d.D(p)
    }
    ,
    ce.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var y = g.as
              , b = m(y, g.crossOrigin)
              , S = typeof g.integrity == "string" ? g.integrity : void 0
              , E = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            y === "style" ? s.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: b,
                integrity: S,
                fetchPriority: E
            }) : y === "script" && s.d.X(p, {
                crossOrigin: b,
                integrity: S,
                fetchPriority: E,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    ce.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var y = m(g.as, g.crossOrigin);
                    s.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && s.d.M(p)
    }
    ,
    ce.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var y = g.as
              , b = m(y, g.crossOrigin);
            s.d.L(p, y, {
                crossOrigin: b,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    ce.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var y = m(g.as, g.crossOrigin);
                s.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: y,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                s.d.m(p)
    }
    ,
    ce.requestFormReset = function(p) {
        s.d.r(p)
    }
    ,
    ce.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }
    ,
    ce.useFormState = function(p, g, y) {
        return f.H.useFormState(p, g, y)
    }
    ,
    ce.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    ce.version = "19.2.4",
    ce
}
var ng;
function U1() {
    if (ng)
        return vc.exports;
    ng = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (a) {
                console.error(a)
            }
    }
    return i(),
    vc.exports = B1(),
    vc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ig;
function L1() {
    if (ig)
        return Dl;
    ig = 1;
    var i = _1()
      , a = mf()
      , o = U1();
    function s(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function d(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function f(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function m(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (d(t) !== t)
            throw Error(s(188))
    }
    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = d(t),
            e === null)
                throw Error(s(188));
            return e !== t ? null : t
        }
        for (var n = t, l = e; ; ) {
            var r = n.return;
            if (r === null)
                break;
            var u = r.alternate;
            if (u === null) {
                if (l = r.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (r.child === u.child) {
                for (u = r.child; u; ) {
                    if (u === n)
                        return p(r),
                        t;
                    if (u === l)
                        return p(r),
                        e;
                    u = u.sibling
                }
                throw Error(s(188))
            }
            if (n.return !== l.return)
                n = r,
                l = u;
            else {
                for (var h = !1, v = r.child; v; ) {
                    if (v === n) {
                        h = !0,
                        n = r,
                        l = u;
                        break
                    }
                    if (v === l) {
                        h = !0,
                        l = r,
                        n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!h) {
                    for (v = u.child; v; ) {
                        if (v === n) {
                            h = !0,
                            n = u,
                            l = r;
                            break
                        }
                        if (v === l) {
                            h = !0,
                            l = u,
                            n = r;
                            break
                        }
                        v = v.sibling
                    }
                    if (!h)
                        throw Error(s(189))
                }
            }
            if (n.alternate !== l)
                throw Error(s(190))
        }
        if (n.tag !== 3)
            throw Error(s(188));
        return n.stateNode.current === n ? t : e
    }
    function y(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = y(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var b = Object.assign
      , S = Symbol.for("react.element")
      , E = Symbol.for("react.transitional.element")
      , D = Symbol.for("react.portal")
      , O = Symbol.for("react.fragment")
      , _ = Symbol.for("react.strict_mode")
      , H = Symbol.for("react.profiler")
      , Q = Symbol.for("react.consumer")
      , Y = Symbol.for("react.context")
      , G = Symbol.for("react.forward_ref")
      , F = Symbol.for("react.suspense")
      , rt = Symbol.for("react.suspense_list")
      , I = Symbol.for("react.memo")
      , L = Symbol.for("react.lazy")
      , at = Symbol.for("react.activity")
      , $ = Symbol.for("react.memo_cache_sentinel")
      , ut = Symbol.iterator;
    function gt(t) {
        return t === null || typeof t != "object" ? null : (t = ut && t[ut] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var kt = Symbol.for("react.client.reference");
    function Ct(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === kt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case O:
            return "Fragment";
        case H:
            return "Profiler";
        case _:
            return "StrictMode";
        case F:
            return "Suspense";
        case rt:
            return "SuspenseList";
        case at:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case D:
                return "Portal";
            case Y:
                return t.displayName || "Context";
            case Q:
                return (t._context.displayName || "Context") + ".Consumer";
            case G:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case I:
                return e = t.displayName || null,
                e !== null ? e : Ct(t.type) || "Memo";
            case L:
                e = t._payload,
                t = t._init;
                try {
                    return Ct(t(e))
                } catch {}
            }
        return null
    }
    var Dt = Array.isArray
      , z = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , P = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ft = []
      , X = -1;
    function w(t) {
        return {
            current: t
        }
    }
    function U(t) {
        0 > X || (t.current = ft[X],
        ft[X] = null,
        X--)
    }
    function J(t, e) {
        X++,
        ft[X] = t.current,
        t.current = e
    }
    var K = w(null)
      , W = w(null)
      , lt = w(null)
      , vt = w(null);
    function Xt(t, e) {
        switch (J(lt, e),
        J(W, t),
        J(K, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? vp(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = vp(e),
                t = bp(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        U(K),
        J(K, t)
    }
    function ht() {
        U(K),
        U(W),
        U(lt)
    }
    function en(t) {
        t.memoizedState !== null && J(vt, t);
        var e = K.current
          , n = bp(e, t.type);
        e !== n && (J(W, t),
        J(K, n))
    }
    function Ze(t) {
        W.current === t && (U(K),
        U(W)),
        vt.current === t && (U(vt),
        Al._currentValue = P)
    }
    var Dn, Li;
    function Ve(t) {
        if (Dn === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                Dn = e && e[1] || "",
                Li = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Dn + t + Li
    }
    var Po = !1;
    function Wo(t, e) {
        if (!t || Po)
            return "";
        Po = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var k = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(k.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(k, [])
                                } catch (R) {
                                    var N = R
                                }
                                Reflect.construct(t, [], k)
                            } else {
                                try {
                                    k.call()
                                } catch (R) {
                                    N = R
                                }
                                t.call(k.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (R) {
                                N = R
                            }
                            (k = t()) && typeof k.catch == "function" && k.catch(function() {})
                        }
                    } catch (R) {
                        if (R && N && typeof R.stack == "string")
                            return [R.stack, N.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = l.DetermineComponentFrameRoot()
              , h = u[0]
              , v = u[1];
            if (h && v) {
                var T = h.split(`
`)
                  , C = v.split(`
`);
                for (r = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; r < C.length && !C[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (l === T.length || r === C.length)
                    for (l = T.length - 1,
                    r = C.length - 1; 1 <= l && 0 <= r && T[l] !== C[r]; )
                        r--;
                for (; 1 <= l && 0 <= r; l--,
                r--)
                    if (T[l] !== C[r]) {
                        if (l !== 1 || r !== 1)
                            do
                                if (l--,
                                r--,
                                0 > r || T[l] !== C[r]) {
                                    var V = `
` + T[l].replace(" at new ", " at ");
                                    return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)),
                                    V
                                }
                            while (1 <= l && 0 <= r);
                        break
                    }
            }
        } finally {
            Po = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Ve(n) : ""
    }
    function rb(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Ve(t.type);
        case 16:
            return Ve("Lazy");
        case 13:
            return t.child !== e && e !== null ? Ve("Suspense Fallback") : Ve("Suspense");
        case 19:
            return Ve("SuspenseList");
        case 0:
        case 15:
            return Wo(t.type, !1);
        case 11:
            return Wo(t.type.render, !1);
        case 1:
            return Wo(t.type, !0);
        case 31:
            return Ve("Activity");
        default:
            return ""
        }
    }
    function Ff(t) {
        try {
            var e = ""
              , n = null;
            do
                e += rb(t, n),
                n = t,
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var $o = Object.prototype.hasOwnProperty
      , Io = i.unstable_scheduleCallback
      , tr = i.unstable_cancelCallback
      , ub = i.unstable_shouldYield
      , cb = i.unstable_requestPaint
      , Te = i.unstable_now
      , fb = i.unstable_getCurrentPriorityLevel
      , Pf = i.unstable_ImmediatePriority
      , Wf = i.unstable_UserBlockingPriority
      , Pl = i.unstable_NormalPriority
      , db = i.unstable_LowPriority
      , $f = i.unstable_IdlePriority
      , hb = i.log
      , mb = i.unstable_setDisableYieldValue
      , Ba = null
      , we = null;
    function Nn(t) {
        if (typeof hb == "function" && mb(t),
        we && typeof we.setStrictMode == "function")
            try {
                we.setStrictMode(Ba, t)
            } catch {}
    }
    var Ae = Math.clz32 ? Math.clz32 : yb
      , pb = Math.log
      , gb = Math.LN2;
    function yb(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (pb(t) / gb | 0) | 0
    }
    var Wl = 256
      , $l = 262144
      , Il = 4194304;
    function ci(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
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
            return 64;
        case 128:
            return 128;
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
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function ts(t, e, n) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var r = 0
          , u = t.suspendedLanes
          , h = t.pingedLanes;
        t = t.warmLanes;
        var v = l & 134217727;
        return v !== 0 ? (l = v & ~u,
        l !== 0 ? r = ci(l) : (h &= v,
        h !== 0 ? r = ci(h) : n || (n = v & ~t,
        n !== 0 && (r = ci(n))))) : (v = l & ~u,
        v !== 0 ? r = ci(v) : h !== 0 ? r = ci(h) : n || (n = l & ~t,
        n !== 0 && (r = ci(n)))),
        r === 0 ? 0 : e !== 0 && e !== r && (e & u) === 0 && (u = r & -r,
        n = e & -e,
        u >= n || u === 32 && (n & 4194048) !== 0) ? e : r
    }
    function Ua(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function vb(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
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
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function If() {
        var t = Il;
        return Il <<= 1,
        (Il & 62914560) === 0 && (Il = 4194304),
        t
    }
    function er(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function La(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function bb(t, e, n, l, r, u) {
        var h = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , T = t.expirationTimes
          , C = t.hiddenUpdates;
        for (n = h & ~n; 0 < n; ) {
            var V = 31 - Ae(n)
              , k = 1 << V;
            v[V] = 0,
            T[V] = -1;
            var N = C[V];
            if (N !== null)
                for (C[V] = null,
                V = 0; V < N.length; V++) {
                    var R = N[V];
                    R !== null && (R.lane &= -536870913)
                }
            n &= ~k
        }
        l !== 0 && td(t, l, 0),
        u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e))
    }
    function td(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - Ae(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930
    }
    function ed(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var l = 31 - Ae(n)
              , r = 1 << l;
            r & e | t[l] & e && (t[l] |= e),
            n &= ~r
        }
    }
    function nd(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : nr(n),
        (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }
    function nr(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
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
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function ir(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function id() {
        var t = Z.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Yp(t.type))
    }
    function ad(t, e) {
        var n = Z.p;
        try {
            return Z.p = t,
            e()
        } finally {
            Z.p = n
        }
    }
    var zn = Math.random().toString(36).slice(2)
      , le = "__reactFiber$" + zn
      , me = "__reactProps$" + zn
      , ki = "__reactContainer$" + zn
      , ar = "__reactEvents$" + zn
      , xb = "__reactListeners$" + zn
      , Sb = "__reactHandles$" + zn
      , ld = "__reactResources$" + zn
      , ka = "__reactMarker$" + zn;
    function lr(t) {
        delete t[le],
        delete t[me],
        delete t[ar],
        delete t[xb],
        delete t[Sb]
    }
    function Hi(t) {
        var e = t[le];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[ki] || n[le]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = Mp(t); t !== null; ) {
                        if (n = t[le])
                            return n;
                        t = Mp(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function qi(t) {
        if (t = t[le] || t[ki]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Ha(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(s(33))
    }
    function Yi(t) {
        var e = t[ld];
        return e || (e = t[ld] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function ne(t) {
        t[ka] = !0
    }
    var sd = new Set
      , od = {};
    function fi(t, e) {
        Gi(t, e),
        Gi(t + "Capture", e)
    }
    function Gi(t, e) {
        for (od[t] = e,
        t = 0; t < e.length; t++)
            sd.add(e[t])
    }
    var Tb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , rd = {}
      , ud = {};
    function wb(t) {
        return $o.call(ud, t) ? !0 : $o.call(rd, t) ? !1 : Tb.test(t) ? ud[t] = !0 : (rd[t] = !0,
        !1)
    }
    function es(t, e, n) {
        if (wb(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function ns(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function cn(t, e, n, l) {
        if (l === null)
            t.removeAttribute(n);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + l)
        }
    }
    function _e(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function cd(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Ab(t, e, n) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var r = l.get
              , u = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(h) {
                    n = "" + h,
                    u.call(this, h)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(h) {
                    n = "" + h
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function sr(t) {
        if (!t._valueTracker) {
            var e = cd(t) ? "checked" : "value";
            t._valueTracker = Ab(t, e, "" + t[e])
        }
    }
    function fd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , l = "";
        return t && (l = cd(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function is(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Eb = /[\n"\\]/g;
    function Be(t) {
        return t.replace(Eb, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function or(t, e, n, l, r, u, h, v) {
        t.name = "",
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"),
        e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + _e(e)) : t.value !== "" + _e(e) && (t.value = "" + _e(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"),
        e != null ? rr(t, h, _e(e)) : n != null ? rr(t, h, _e(n)) : l != null && t.removeAttribute("value"),
        r == null && u != null && (t.defaultChecked = !!u),
        r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + _e(v) : t.removeAttribute("name")
    }
    function dd(t, e, n, l, r, u, h, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                sr(t);
                return
            }
            n = n != null ? "" + _e(n) : "",
            e = e != null ? "" + _e(e) : n,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? r,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = v ? t.checked : !!l,
        t.defaultChecked = !!l,
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h),
        sr(t)
    }
    function rr(t, e, n) {
        e === "number" && is(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function Xi(t, e, n, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var r = 0; r < n.length; r++)
                e["$" + n[r]] = !0;
            for (n = 0; n < t.length; n++)
                r = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== r && (t[n].selected = r),
                r && l && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + _e(n),
            e = null,
            r = 0; r < t.length; r++) {
                if (t[r].value === n) {
                    t[r].selected = !0,
                    l && (t[r].defaultSelected = !0);
                    return
                }
                e !== null || t[r].disabled || (e = t[r])
            }
            e !== null && (e.selected = !0)
        }
    }
    function hd(t, e, n) {
        if (e != null && (e = "" + _e(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + _e(n) : ""
    }
    function md(t, e, n, l) {
        if (e == null) {
            if (l != null) {
                if (n != null)
                    throw Error(s(92));
                if (Dt(l)) {
                    if (1 < l.length)
                        throw Error(s(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""),
            e = n
        }
        n = _e(e),
        t.defaultValue = n,
        l = t.textContent,
        l === n && l !== "" && l !== null && (t.value = l),
        sr(t)
    }
    function Qi(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Mb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function pd(t, e, n) {
        var l = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Mb.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function gd(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(s(62));
        if (t = t.style,
        n != null) {
            for (var l in n)
                !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var r in e)
                l = e[r],
                e.hasOwnProperty(r) && n[r] !== l && pd(t, r, l)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && pd(t, u, e[u])
    }
    function ur(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
            return !0
        }
    }
    var jb = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Cb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function as(t) {
        return Cb.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function fn() {}
    var cr = null;
    function fr(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Zi = null
      , Ki = null;
    function yd(t) {
        var e = qi(t);
        if (e && (t = e.stateNode)) {
            var n = t[me] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (or(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Be("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var l = n[e];
                        if (l !== t && l.form === t.form) {
                            var r = l[me] || null;
                            if (!r)
                                throw Error(s(90));
                            or(l, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        l = n[e],
                        l.form === t.form && fd(l)
                }
                break t;
            case "textarea":
                hd(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && Xi(t, !!n.multiple, e, !1)
            }
        }
    }
    var dr = !1;
    function vd(t, e, n) {
        if (dr)
            return t(e, n);
        dr = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (dr = !1,
            (Zi !== null || Ki !== null) && (Qs(),
            Zi && (e = Zi,
            t = Ki,
            Ki = Zi = null,
            yd(e),
            t)))
                for (e = 0; e < t.length; e++)
                    yd(t[e])
        }
    }
    function qa(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var l = n[me] || null;
        if (l === null)
            return null;
        n = l[e];
        t: switch (e) {
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
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(s(231, e, typeof n));
        return n
    }
    var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , hr = !1;
    if (dn)
        try {
            var Ya = {};
            Object.defineProperty(Ya, "passive", {
                get: function() {
                    hr = !0
                }
            }),
            window.addEventListener("test", Ya, Ya),
            window.removeEventListener("test", Ya, Ya)
        } catch {
            hr = !1
        }
    var Rn = null
      , mr = null
      , ls = null;
    function bd() {
        if (ls)
            return ls;
        var t, e = mr, n = e.length, l, r = "value"in Rn ? Rn.value : Rn.textContent, u = r.length;
        for (t = 0; t < n && e[t] === r[t]; t++)
            ;
        var h = n - t;
        for (l = 1; l <= h && e[n - l] === r[u - l]; l++)
            ;
        return ls = r.slice(t, 1 < l ? 1 - l : void 0)
    }
    function ss(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function os() {
        return !0
    }
    function xd() {
        return !1
    }
    function pe(t) {
        function e(n, l, r, u, h) {
            this._reactName = n,
            this._targetInst = r,
            this.type = l,
            this.nativeEvent = u,
            this.target = h,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (n = t[v],
                this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? os : xd,
            this.isPropagationStopped = xd,
            this
        }
        return b(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = os)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = os)
            },
            persist: function() {},
            isPersistent: os
        }),
        e
    }
    var di = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, rs = pe(di), Ga = b({}, di, {
        view: 0,
        detail: 0
    }), Db = pe(Ga), pr, gr, Xa, us = b({}, Ga, {
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
        getModifierState: vr,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Xa && (Xa && t.type === "mousemove" ? (pr = t.screenX - Xa.screenX,
            gr = t.screenY - Xa.screenY) : gr = pr = 0,
            Xa = t),
            pr)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : gr
        }
    }), Sd = pe(us), Nb = b({}, us, {
        dataTransfer: 0
    }), zb = pe(Nb), Rb = b({}, Ga, {
        relatedTarget: 0
    }), yr = pe(Rb), Ob = b({}, di, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Vb = pe(Ob), _b = b({}, di, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Bb = pe(_b), Ub = b({}, di, {
        data: 0
    }), Td = pe(Ub), Lb = {
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
        MozPrintableKey: "Unidentified"
    }, kb = {
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
        224: "Meta"
    }, Hb = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function qb(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Hb[t]) ? !!e[t] : !1
    }
    function vr() {
        return qb
    }
    var Yb = b({}, Ga, {
        key: function(t) {
            if (t.key) {
                var e = Lb[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = ss(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? kb[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: vr,
        charCode: function(t) {
            return t.type === "keypress" ? ss(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? ss(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Gb = pe(Yb)
      , Xb = b({}, us, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , wd = pe(Xb)
      , Qb = b({}, Ga, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: vr
    })
      , Zb = pe(Qb)
      , Kb = b({}, di, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Jb = pe(Kb)
      , Fb = b({}, us, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Pb = pe(Fb)
      , Wb = b({}, di, {
        newState: 0,
        oldState: 0
    })
      , $b = pe(Wb)
      , Ib = [9, 13, 27, 32]
      , br = dn && "CompositionEvent"in window
      , Qa = null;
    dn && "documentMode"in document && (Qa = document.documentMode);
    var tx = dn && "TextEvent"in window && !Qa
      , Ad = dn && (!br || Qa && 8 < Qa && 11 >= Qa)
      , Ed = " "
      , Md = !1;
    function jd(t, e) {
        switch (t) {
        case "keyup":
            return Ib.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Cd(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Ji = !1;
    function ex(t, e) {
        switch (t) {
        case "compositionend":
            return Cd(e);
        case "keypress":
            return e.which !== 32 ? null : (Md = !0,
            Ed);
        case "textInput":
            return t = e.data,
            t === Ed && Md ? null : t;
        default:
            return null
        }
    }
    function nx(t, e) {
        if (Ji)
            return t === "compositionend" || !br && jd(t, e) ? (t = bd(),
            ls = mr = Rn = null,
            Ji = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Ad && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var ix = {
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
        week: !0
    };
    function Dd(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!ix[t.type] : e === "textarea"
    }
    function Nd(t, e, n, l) {
        Zi ? Ki ? Ki.push(l) : Ki = [l] : Zi = l,
        e = $s(e, "onChange"),
        0 < e.length && (n = new rs("onChange","change",null,n,l),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var Za = null
      , Ka = null;
    function ax(t) {
        dp(t, 0)
    }
    function cs(t) {
        var e = Ha(t);
        if (fd(e))
            return t
    }
    function zd(t, e) {
        if (t === "change")
            return e
    }
    var Rd = !1;
    if (dn) {
        var xr;
        if (dn) {
            var Sr = "oninput"in document;
            if (!Sr) {
                var Od = document.createElement("div");
                Od.setAttribute("oninput", "return;"),
                Sr = typeof Od.oninput == "function"
            }
            xr = Sr
        } else
            xr = !1;
        Rd = xr && (!document.documentMode || 9 < document.documentMode)
    }
    function Vd() {
        Za && (Za.detachEvent("onpropertychange", _d),
        Ka = Za = null)
    }
    function _d(t) {
        if (t.propertyName === "value" && cs(Ka)) {
            var e = [];
            Nd(e, Ka, t, fr(t)),
            vd(ax, e)
        }
    }
    function lx(t, e, n) {
        t === "focusin" ? (Vd(),
        Za = e,
        Ka = n,
        Za.attachEvent("onpropertychange", _d)) : t === "focusout" && Vd()
    }
    function sx(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return cs(Ka)
    }
    function ox(t, e) {
        if (t === "click")
            return cs(e)
    }
    function rx(t, e) {
        if (t === "input" || t === "change")
            return cs(e)
    }
    function ux(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Ee = typeof Object.is == "function" ? Object.is : ux;
    function Ja(t, e) {
        if (Ee(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , l = Object.keys(e);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var r = n[l];
            if (!$o.call(e, r) || !Ee(t[r], e[r]))
                return !1
        }
        return !0
    }
    function Bd(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Ud(t, e) {
        var n = Bd(t);
        t = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = t + n.textContent.length,
                t <= e && l >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Bd(n)
        }
    }
    function Ld(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ld(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function kd(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = is(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = is(t.document)
        }
        return e
    }
    function Tr(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var cx = dn && "documentMode"in document && 11 >= document.documentMode
      , Fi = null
      , wr = null
      , Fa = null
      , Ar = !1;
    function Hd(t, e, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Ar || Fi == null || Fi !== is(l) || (l = Fi,
        "selectionStart"in l && Tr(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Fa && Ja(Fa, l) || (Fa = l,
        l = $s(wr, "onSelect"),
        0 < l.length && (e = new rs("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = Fi)))
    }
    function hi(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var Pi = {
        animationend: hi("Animation", "AnimationEnd"),
        animationiteration: hi("Animation", "AnimationIteration"),
        animationstart: hi("Animation", "AnimationStart"),
        transitionrun: hi("Transition", "TransitionRun"),
        transitionstart: hi("Transition", "TransitionStart"),
        transitioncancel: hi("Transition", "TransitionCancel"),
        transitionend: hi("Transition", "TransitionEnd")
    }
      , Er = {}
      , qd = {};
    dn && (qd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Pi.animationend.animation,
    delete Pi.animationiteration.animation,
    delete Pi.animationstart.animation),
    "TransitionEvent"in window || delete Pi.transitionend.transition);
    function mi(t) {
        if (Er[t])
            return Er[t];
        if (!Pi[t])
            return t;
        var e = Pi[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in qd)
                return Er[t] = e[n];
        return t
    }
    var Yd = mi("animationend")
      , Gd = mi("animationiteration")
      , Xd = mi("animationstart")
      , fx = mi("transitionrun")
      , dx = mi("transitionstart")
      , hx = mi("transitioncancel")
      , Qd = mi("transitionend")
      , Zd = new Map
      , Mr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Mr.push("scrollEnd");
    function Ke(t, e) {
        Zd.set(t, e),
        fi(e, [t])
    }
    var fs = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , Ue = []
      , Wi = 0
      , jr = 0;
    function ds() {
        for (var t = Wi, e = jr = Wi = 0; e < t; ) {
            var n = Ue[e];
            Ue[e++] = null;
            var l = Ue[e];
            Ue[e++] = null;
            var r = Ue[e];
            Ue[e++] = null;
            var u = Ue[e];
            if (Ue[e++] = null,
            l !== null && r !== null) {
                var h = l.pending;
                h === null ? r.next = r : (r.next = h.next,
                h.next = r),
                l.pending = r
            }
            u !== 0 && Kd(n, r, u)
        }
    }
    function hs(t, e, n, l) {
        Ue[Wi++] = t,
        Ue[Wi++] = e,
        Ue[Wi++] = n,
        Ue[Wi++] = l,
        jr |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function Cr(t, e, n, l) {
        return hs(t, e, n, l),
        ms(t)
    }
    function pi(t, e) {
        return hs(t, null, null, e),
        ms(t)
    }
    function Kd(t, e, n) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n);
        for (var r = !1, u = t.return; u !== null; )
            u.childLanes |= n,
            l = u.alternate,
            l !== null && (l.childLanes |= n),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (r = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        r && e !== null && (r = 31 - Ae(n),
        t = u.hiddenUpdates,
        l = t[r],
        l === null ? t[r] = [e] : l.push(e),
        e.lane = n | 536870912),
        u) : null
    }
    function ms(t) {
        if (50 < yl)
            throw yl = 0,
            Uu = null,
            Error(s(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var $i = {};
    function mx(t, e, n, l) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Me(t, e, n, l) {
        return new mx(t,e,n,l)
    }
    function Dr(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function hn(t, e) {
        var n = t.alternate;
        return n === null ? (n = Me(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function Jd(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function ps(t, e, n, l, r, u) {
        var h = 0;
        if (l = t,
        typeof t == "function")
            Dr(t) && (h = 1);
        else if (typeof t == "string")
            h = b1(t, n, K.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case at:
                return t = Me(31, n, e, r),
                t.elementType = at,
                t.lanes = u,
                t;
            case O:
                return gi(n.children, r, u, e);
            case _:
                h = 8,
                r |= 24;
                break;
            case H:
                return t = Me(12, n, e, r | 2),
                t.elementType = H,
                t.lanes = u,
                t;
            case F:
                return t = Me(13, n, e, r),
                t.elementType = F,
                t.lanes = u,
                t;
            case rt:
                return t = Me(19, n, e, r),
                t.elementType = rt,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case Y:
                        h = 10;
                        break t;
                    case Q:
                        h = 9;
                        break t;
                    case G:
                        h = 11;
                        break t;
                    case I:
                        h = 14;
                        break t;
                    case L:
                        h = 16,
                        l = null;
                        break t
                    }
                h = 29,
                n = Error(s(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = Me(h, n, e, r),
        e.elementType = t,
        e.type = l,
        e.lanes = u,
        e
    }
    function gi(t, e, n, l) {
        return t = Me(7, t, l, e),
        t.lanes = n,
        t
    }
    function Nr(t, e, n) {
        return t = Me(6, t, null, e),
        t.lanes = n,
        t
    }
    function Fd(t) {
        var e = Me(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function zr(t, e, n) {
        return e = Me(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var Pd = new WeakMap;
    function Le(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = Pd.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: Ff(e)
            },
            Pd.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: Ff(e)
        }
    }
    var Ii = []
      , ta = 0
      , gs = null
      , Pa = 0
      , ke = []
      , He = 0
      , On = null
      , nn = 1
      , an = "";
    function mn(t, e) {
        Ii[ta++] = Pa,
        Ii[ta++] = gs,
        gs = t,
        Pa = e
    }
    function Wd(t, e, n) {
        ke[He++] = nn,
        ke[He++] = an,
        ke[He++] = On,
        On = t;
        var l = nn;
        t = an;
        var r = 32 - Ae(l) - 1;
        l &= ~(1 << r),
        n += 1;
        var u = 32 - Ae(e) + r;
        if (30 < u) {
            var h = r - r % 5;
            u = (l & (1 << h) - 1).toString(32),
            l >>= h,
            r -= h,
            nn = 1 << 32 - Ae(e) + r | n << r | l,
            an = u + t
        } else
            nn = 1 << u | n << r | l,
            an = t
    }
    function Rr(t) {
        t.return !== null && (mn(t, 1),
        Wd(t, 1, 0))
    }
    function Or(t) {
        for (; t === gs; )
            gs = Ii[--ta],
            Ii[ta] = null,
            Pa = Ii[--ta],
            Ii[ta] = null;
        for (; t === On; )
            On = ke[--He],
            ke[He] = null,
            an = ke[--He],
            ke[He] = null,
            nn = ke[--He],
            ke[He] = null
    }
    function $d(t, e) {
        ke[He++] = nn,
        ke[He++] = an,
        ke[He++] = On,
        nn = e.id,
        an = e.overflow,
        On = t
    }
    var se = null
      , Bt = null
      , At = !1
      , Vn = null
      , qe = !1
      , Vr = Error(s(519));
    function _n(t) {
        var e = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Wa(Le(e, t)),
        Vr
    }
    function Id(t) {
        var e = t.stateNode
          , n = t.type
          , l = t.memoizedProps;
        switch (e[le] = t,
        e[me] = l,
        n) {
        case "dialog":
            xt("cancel", e),
            xt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            xt("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < bl.length; n++)
                xt(bl[n], e);
            break;
        case "source":
            xt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            xt("error", e),
            xt("load", e);
            break;
        case "details":
            xt("toggle", e);
            break;
        case "input":
            xt("invalid", e),
            dd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            xt("invalid", e);
            break;
        case "textarea":
            xt("invalid", e),
            md(e, l.value, l.defaultValue, l.children)
        }
        n = l.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || gp(e.textContent, n) ? (l.popover != null && (xt("beforetoggle", e),
        xt("toggle", e)),
        l.onScroll != null && xt("scroll", e),
        l.onScrollEnd != null && xt("scrollend", e),
        l.onClick != null && (e.onclick = fn),
        e = !0) : e = !1,
        e || _n(t, !0)
    }
    function th(t) {
        for (se = t.return; se; )
            switch (se.tag) {
            case 5:
            case 31:
            case 13:
                qe = !1;
                return;
            case 27:
            case 3:
                qe = !0;
                return;
            default:
                se = se.return
            }
    }
    function ea(t) {
        if (t !== se)
            return !1;
        if (!At)
            return th(t),
            At = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || $u(t.type, t.memoizedProps)),
        n = !n),
        n && Bt && _n(t),
        th(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(s(317));
            Bt = Ep(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(s(317));
            Bt = Ep(t)
        } else
            e === 27 ? (e = Bt,
            Fn(t.type) ? (t = ic,
            ic = null,
            Bt = t) : Bt = e) : Bt = se ? Ge(t.stateNode.nextSibling) : null;
        return !0
    }
    function yi() {
        Bt = se = null,
        At = !1
    }
    function _r() {
        var t = Vn;
        return t !== null && (be === null ? be = t : be.push.apply(be, t),
        Vn = null),
        t
    }
    function Wa(t) {
        Vn === null ? Vn = [t] : Vn.push(t)
    }
    var Br = w(null)
      , vi = null
      , pn = null;
    function Bn(t, e, n) {
        J(Br, e._currentValue),
        e._currentValue = n
    }
    function gn(t) {
        t._currentValue = Br.current,
        U(Br)
    }
    function Ur(t, e, n) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function Lr(t, e, n, l) {
        var r = t.child;
        for (r !== null && (r.return = t); r !== null; ) {
            var u = r.dependencies;
            if (u !== null) {
                var h = r.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var v = u;
                    u = r;
                    for (var T = 0; T < e.length; T++)
                        if (v.context === e[T]) {
                            u.lanes |= n,
                            v = u.alternate,
                            v !== null && (v.lanes |= n),
                            Ur(u.return, n, t),
                            l || (h = null);
                            break t
                        }
                    u = v.next
                }
            } else if (r.tag === 18) {
                if (h = r.return,
                h === null)
                    throw Error(s(341));
                h.lanes |= n,
                u = h.alternate,
                u !== null && (u.lanes |= n),
                Ur(h, n, t),
                h = null
            } else
                h = r.child;
            if (h !== null)
                h.return = r;
            else
                for (h = r; h !== null; ) {
                    if (h === t) {
                        h = null;
                        break
                    }
                    if (r = h.sibling,
                    r !== null) {
                        r.return = h.return,
                        h = r;
                        break
                    }
                    h = h.return
                }
            r = h
        }
    }
    function na(t, e, n, l) {
        t = null;
        for (var r = e, u = !1; r !== null; ) {
            if (!u) {
                if ((r.flags & 524288) !== 0)
                    u = !0;
                else if ((r.flags & 262144) !== 0)
                    break
            }
            if (r.tag === 10) {
                var h = r.alternate;
                if (h === null)
                    throw Error(s(387));
                if (h = h.memoizedProps,
                h !== null) {
                    var v = r.type;
                    Ee(r.pendingProps.value, h.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (r === vt.current) {
                if (h = r.alternate,
                h === null)
                    throw Error(s(387));
                h.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(Al) : t = [Al])
            }
            r = r.return
        }
        t !== null && Lr(e, t, n, l),
        e.flags |= 262144
    }
    function ys(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ee(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function bi(t) {
        vi = t,
        pn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function oe(t) {
        return eh(vi, t)
    }
    function vs(t, e) {
        return vi === null && bi(t),
        eh(t, e)
    }
    function eh(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        pn === null) {
            if (t === null)
                throw Error(s(308));
            pn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            pn = pn.next = e;
        return n
    }
    var px = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , gx = i.unstable_scheduleCallback
      , yx = i.unstable_NormalPriority
      , Kt = {
        $$typeof: Y,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function kr() {
        return {
            controller: new px,
            data: new Map,
            refCount: 0
        }
    }
    function $a(t) {
        t.refCount--,
        t.refCount === 0 && gx(yx, function() {
            t.controller.abort()
        })
    }
    var Ia = null
      , Hr = 0
      , ia = 0
      , aa = null;
    function vx(t, e) {
        if (Ia === null) {
            var n = Ia = [];
            Hr = 0,
            ia = Gu(),
            aa = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return Hr++,
        e.then(nh, nh),
        e
    }
    function nh() {
        if (--Hr === 0 && Ia !== null) {
            aa !== null && (aa.status = "fulfilled");
            var t = Ia;
            Ia = null,
            ia = 0,
            aa = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function bx(t, e) {
        var n = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(r) {
                n.push(r)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var r = 0; r < n.length; r++)
                (0,
                n[r])(e)
        }, function(r) {
            for (l.status = "rejected",
            l.reason = r,
            r = 0; r < n.length; r++)
                (0,
                n[r])(void 0)
        }),
        l
    }
    var ih = z.S;
    z.S = function(t, e) {
        Hm = Te(),
        typeof e == "object" && e !== null && typeof e.then == "function" && vx(t, e),
        ih !== null && ih(t, e)
    }
    ;
    var xi = w(null);
    function qr() {
        var t = xi.current;
        return t !== null ? t : _t.pooledCache
    }
    function bs(t, e) {
        e === null ? J(xi, xi.current) : J(xi, e.pool)
    }
    function ah() {
        var t = qr();
        return t === null ? null : {
            parent: Kt._currentValue,
            pool: t
        }
    }
    var la = Error(s(460))
      , Yr = Error(s(474))
      , xs = Error(s(542))
      , Ss = {
        then: function() {}
    };
    function lh(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function sh(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(fn, fn),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            rh(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(fn, fn);
            else {
                if (t = _t,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(s(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var r = e;
                        r.status = "fulfilled",
                        r.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var r = e;
                        r.status = "rejected",
                        r.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                rh(t),
                t
            }
            throw Ti = e,
            la
        }
    }
    function Si(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ti = n,
            la) : n
        }
    }
    var Ti = null;
    function oh() {
        if (Ti === null)
            throw Error(s(459));
        var t = Ti;
        return Ti = null,
        t
    }
    function rh(t) {
        if (t === la || t === xs)
            throw Error(s(483))
    }
    var sa = null
      , tl = 0;
    function Ts(t) {
        var e = tl;
        return tl += 1,
        sa === null && (sa = []),
        sh(sa, t, e)
    }
    function el(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function ws(t, e) {
        throw e.$$typeof === S ? Error(s(525)) : (t = Object.prototype.toString.call(e),
        Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function uh(t) {
        function e(M, A) {
            if (t) {
                var j = M.deletions;
                j === null ? (M.deletions = [A],
                M.flags |= 16) : j.push(A)
            }
        }
        function n(M, A) {
            if (!t)
                return null;
            for (; A !== null; )
                e(M, A),
                A = A.sibling;
            return null
        }
        function l(M) {
            for (var A = new Map; M !== null; )
                M.key !== null ? A.set(M.key, M) : A.set(M.index, M),
                M = M.sibling;
            return A
        }
        function r(M, A) {
            return M = hn(M, A),
            M.index = 0,
            M.sibling = null,
            M
        }
        function u(M, A, j) {
            return M.index = j,
            t ? (j = M.alternate,
            j !== null ? (j = j.index,
            j < A ? (M.flags |= 67108866,
            A) : j) : (M.flags |= 67108866,
            A)) : (M.flags |= 1048576,
            A)
        }
        function h(M) {
            return t && M.alternate === null && (M.flags |= 67108866),
            M
        }
        function v(M, A, j, B) {
            return A === null || A.tag !== 6 ? (A = Nr(j, M.mode, B),
            A.return = M,
            A) : (A = r(A, j),
            A.return = M,
            A)
        }
        function T(M, A, j, B) {
            var ot = j.type;
            return ot === O ? V(M, A, j.props.children, B, j.key) : A !== null && (A.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === L && Si(ot) === A.type) ? (A = r(A, j.props),
            el(A, j),
            A.return = M,
            A) : (A = ps(j.type, j.key, j.props, null, M.mode, B),
            el(A, j),
            A.return = M,
            A)
        }
        function C(M, A, j, B) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== j.containerInfo || A.stateNode.implementation !== j.implementation ? (A = zr(j, M.mode, B),
            A.return = M,
            A) : (A = r(A, j.children || []),
            A.return = M,
            A)
        }
        function V(M, A, j, B, ot) {
            return A === null || A.tag !== 7 ? (A = gi(j, M.mode, B, ot),
            A.return = M,
            A) : (A = r(A, j),
            A.return = M,
            A)
        }
        function k(M, A, j) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = Nr("" + A, M.mode, j),
                A.return = M,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case E:
                    return j = ps(A.type, A.key, A.props, null, M.mode, j),
                    el(j, A),
                    j.return = M,
                    j;
                case D:
                    return A = zr(A, M.mode, j),
                    A.return = M,
                    A;
                case L:
                    return A = Si(A),
                    k(M, A, j)
                }
                if (Dt(A) || gt(A))
                    return A = gi(A, M.mode, j, null),
                    A.return = M,
                    A;
                if (typeof A.then == "function")
                    return k(M, Ts(A), j);
                if (A.$$typeof === Y)
                    return k(M, vs(M, A), j);
                ws(M, A)
            }
            return null
        }
        function N(M, A, j, B) {
            var ot = A !== null ? A.key : null;
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return ot !== null ? null : v(M, A, "" + j, B);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case E:
                    return j.key === ot ? T(M, A, j, B) : null;
                case D:
                    return j.key === ot ? C(M, A, j, B) : null;
                case L:
                    return j = Si(j),
                    N(M, A, j, B)
                }
                if (Dt(j) || gt(j))
                    return ot !== null ? null : V(M, A, j, B, null);
                if (typeof j.then == "function")
                    return N(M, A, Ts(j), B);
                if (j.$$typeof === Y)
                    return N(M, A, vs(M, j), B);
                ws(M, j)
            }
            return null
        }
        function R(M, A, j, B, ot) {
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
                return M = M.get(j) || null,
                v(A, M, "" + B, ot);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                case E:
                    return M = M.get(B.key === null ? j : B.key) || null,
                    T(A, M, B, ot);
                case D:
                    return M = M.get(B.key === null ? j : B.key) || null,
                    C(A, M, B, ot);
                case L:
                    return B = Si(B),
                    R(M, A, j, B, ot)
                }
                if (Dt(B) || gt(B))
                    return M = M.get(j) || null,
                    V(A, M, B, ot, null);
                if (typeof B.then == "function")
                    return R(M, A, j, Ts(B), ot);
                if (B.$$typeof === Y)
                    return R(M, A, j, vs(A, B), ot);
                ws(A, B)
            }
            return null
        }
        function tt(M, A, j, B) {
            for (var ot = null, Et = null, st = A, pt = A = 0, wt = null; st !== null && pt < j.length; pt++) {
                st.index > pt ? (wt = st,
                st = null) : wt = st.sibling;
                var Mt = N(M, st, j[pt], B);
                if (Mt === null) {
                    st === null && (st = wt);
                    break
                }
                t && st && Mt.alternate === null && e(M, st),
                A = u(Mt, A, pt),
                Et === null ? ot = Mt : Et.sibling = Mt,
                Et = Mt,
                st = wt
            }
            if (pt === j.length)
                return n(M, st),
                At && mn(M, pt),
                ot;
            if (st === null) {
                for (; pt < j.length; pt++)
                    st = k(M, j[pt], B),
                    st !== null && (A = u(st, A, pt),
                    Et === null ? ot = st : Et.sibling = st,
                    Et = st);
                return At && mn(M, pt),
                ot
            }
            for (st = l(st); pt < j.length; pt++)
                wt = R(st, M, pt, j[pt], B),
                wt !== null && (t && wt.alternate !== null && st.delete(wt.key === null ? pt : wt.key),
                A = u(wt, A, pt),
                Et === null ? ot = wt : Et.sibling = wt,
                Et = wt);
            return t && st.forEach(function(ti) {
                return e(M, ti)
            }),
            At && mn(M, pt),
            ot
        }
        function ct(M, A, j, B) {
            if (j == null)
                throw Error(s(151));
            for (var ot = null, Et = null, st = A, pt = A = 0, wt = null, Mt = j.next(); st !== null && !Mt.done; pt++,
            Mt = j.next()) {
                st.index > pt ? (wt = st,
                st = null) : wt = st.sibling;
                var ti = N(M, st, Mt.value, B);
                if (ti === null) {
                    st === null && (st = wt);
                    break
                }
                t && st && ti.alternate === null && e(M, st),
                A = u(ti, A, pt),
                Et === null ? ot = ti : Et.sibling = ti,
                Et = ti,
                st = wt
            }
            if (Mt.done)
                return n(M, st),
                At && mn(M, pt),
                ot;
            if (st === null) {
                for (; !Mt.done; pt++,
                Mt = j.next())
                    Mt = k(M, Mt.value, B),
                    Mt !== null && (A = u(Mt, A, pt),
                    Et === null ? ot = Mt : Et.sibling = Mt,
                    Et = Mt);
                return At && mn(M, pt),
                ot
            }
            for (st = l(st); !Mt.done; pt++,
            Mt = j.next())
                Mt = R(st, M, pt, Mt.value, B),
                Mt !== null && (t && Mt.alternate !== null && st.delete(Mt.key === null ? pt : Mt.key),
                A = u(Mt, A, pt),
                Et === null ? ot = Mt : Et.sibling = Mt,
                Et = Mt);
            return t && st.forEach(function(N1) {
                return e(M, N1)
            }),
            At && mn(M, pt),
            ot
        }
        function Vt(M, A, j, B) {
            if (typeof j == "object" && j !== null && j.type === O && j.key === null && (j = j.props.children),
            typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case E:
                    t: {
                        for (var ot = j.key; A !== null; ) {
                            if (A.key === ot) {
                                if (ot = j.type,
                                ot === O) {
                                    if (A.tag === 7) {
                                        n(M, A.sibling),
                                        B = r(A, j.props.children),
                                        B.return = M,
                                        M = B;
                                        break t
                                    }
                                } else if (A.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === L && Si(ot) === A.type) {
                                    n(M, A.sibling),
                                    B = r(A, j.props),
                                    el(B, j),
                                    B.return = M,
                                    M = B;
                                    break t
                                }
                                n(M, A);
                                break
                            } else
                                e(M, A);
                            A = A.sibling
                        }
                        j.type === O ? (B = gi(j.props.children, M.mode, B, j.key),
                        B.return = M,
                        M = B) : (B = ps(j.type, j.key, j.props, null, M.mode, B),
                        el(B, j),
                        B.return = M,
                        M = B)
                    }
                    return h(M);
                case D:
                    t: {
                        for (ot = j.key; A !== null; ) {
                            if (A.key === ot)
                                if (A.tag === 4 && A.stateNode.containerInfo === j.containerInfo && A.stateNode.implementation === j.implementation) {
                                    n(M, A.sibling),
                                    B = r(A, j.children || []),
                                    B.return = M,
                                    M = B;
                                    break t
                                } else {
                                    n(M, A);
                                    break
                                }
                            else
                                e(M, A);
                            A = A.sibling
                        }
                        B = zr(j, M.mode, B),
                        B.return = M,
                        M = B
                    }
                    return h(M);
                case L:
                    return j = Si(j),
                    Vt(M, A, j, B)
                }
                if (Dt(j))
                    return tt(M, A, j, B);
                if (gt(j)) {
                    if (ot = gt(j),
                    typeof ot != "function")
                        throw Error(s(150));
                    return j = ot.call(j),
                    ct(M, A, j, B)
                }
                if (typeof j.then == "function")
                    return Vt(M, A, Ts(j), B);
                if (j.$$typeof === Y)
                    return Vt(M, A, vs(M, j), B);
                ws(M, j)
            }
            return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j,
            A !== null && A.tag === 6 ? (n(M, A.sibling),
            B = r(A, j),
            B.return = M,
            M = B) : (n(M, A),
            B = Nr(j, M.mode, B),
            B.return = M,
            M = B),
            h(M)) : n(M, A)
        }
        return function(M, A, j, B) {
            try {
                tl = 0;
                var ot = Vt(M, A, j, B);
                return sa = null,
                ot
            } catch (st) {
                if (st === la || st === xs)
                    throw st;
                var Et = Me(29, st, null, M.mode);
                return Et.lanes = B,
                Et.return = M,
                Et
            } finally {}
        }
    }
    var wi = uh(!0)
      , ch = uh(!1)
      , Un = !1;
    function Gr(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Xr(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Ln(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function kn(t, e, n) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (jt & 2) !== 0) {
            var r = l.pending;
            return r === null ? e.next = e : (e.next = r.next,
            r.next = e),
            l.pending = e,
            e = ms(t),
            Kd(t, null, n),
            e
        }
        return hs(t, l, e, n),
        ms(t)
    }
    function nl(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            ed(t, n)
        }
    }
    function Qr(t, e) {
        var n = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var r = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? r = u = h : u = u.next = h,
                    n = n.next
                } while (n !== null);
                u === null ? r = u = e : u = u.next = e
            } else
                r = u = e;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: u,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var Zr = !1;
    function il() {
        if (Zr) {
            var t = aa;
            if (t !== null)
                throw t
        }
    }
    function al(t, e, n, l) {
        Zr = !1;
        var r = t.updateQueue;
        Un = !1;
        var u = r.firstBaseUpdate
          , h = r.lastBaseUpdate
          , v = r.shared.pending;
        if (v !== null) {
            r.shared.pending = null;
            var T = v
              , C = T.next;
            T.next = null,
            h === null ? u = C : h.next = C,
            h = T;
            var V = t.alternate;
            V !== null && (V = V.updateQueue,
            v = V.lastBaseUpdate,
            v !== h && (v === null ? V.firstBaseUpdate = C : v.next = C,
            V.lastBaseUpdate = T))
        }
        if (u !== null) {
            var k = r.baseState;
            h = 0,
            V = C = T = null,
            v = u;
            do {
                var N = v.lane & -536870913
                  , R = N !== v.lane;
                if (R ? (Tt & N) === N : (l & N) === N) {
                    N !== 0 && N === ia && (Zr = !0),
                    V !== null && (V = V.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var tt = t
                          , ct = v;
                        N = e;
                        var Vt = n;
                        switch (ct.tag) {
                        case 1:
                            if (tt = ct.payload,
                            typeof tt == "function") {
                                k = tt.call(Vt, k, N);
                                break t
                            }
                            k = tt;
                            break t;
                        case 3:
                            tt.flags = tt.flags & -65537 | 128;
                        case 0:
                            if (tt = ct.payload,
                            N = typeof tt == "function" ? tt.call(Vt, k, N) : tt,
                            N == null)
                                break t;
                            k = b({}, k, N);
                            break t;
                        case 2:
                            Un = !0
                        }
                    }
                    N = v.callback,
                    N !== null && (t.flags |= 64,
                    R && (t.flags |= 8192),
                    R = r.callbacks,
                    R === null ? r.callbacks = [N] : R.push(N))
                } else
                    R = {
                        lane: N,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    V === null ? (C = V = R,
                    T = k) : V = V.next = R,
                    h |= N;
                if (v = v.next,
                v === null) {
                    if (v = r.shared.pending,
                    v === null)
                        break;
                    R = v,
                    v = R.next,
                    R.next = null,
                    r.lastBaseUpdate = R,
                    r.shared.pending = null
                }
            } while (!0);
            V === null && (T = k),
            r.baseState = T,
            r.firstBaseUpdate = C,
            r.lastBaseUpdate = V,
            u === null && (r.shared.lanes = 0),
            Xn |= h,
            t.lanes = h,
            t.memoizedState = k
        }
    }
    function fh(t, e) {
        if (typeof t != "function")
            throw Error(s(191, t));
        t.call(e)
    }
    function dh(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                fh(n[t], e)
    }
    var oa = w(null)
      , As = w(0);
    function hh(t, e) {
        t = En,
        J(As, t),
        J(oa, e),
        En = t | e.baseLanes
    }
    function Kr() {
        J(As, En),
        J(oa, oa.current)
    }
    function Jr() {
        En = As.current,
        U(oa),
        U(As)
    }
    var je = w(null)
      , Ye = null;
    function Hn(t) {
        var e = t.alternate;
        J(Qt, Qt.current & 1),
        J(je, t),
        Ye === null && (e === null || oa.current !== null || e.memoizedState !== null) && (Ye = t)
    }
    function Fr(t) {
        J(Qt, Qt.current),
        J(je, t),
        Ye === null && (Ye = t)
    }
    function mh(t) {
        t.tag === 22 ? (J(Qt, Qt.current),
        J(je, t),
        Ye === null && (Ye = t)) : qn()
    }
    function qn() {
        J(Qt, Qt.current),
        J(je, je.current)
    }
    function Ce(t) {
        U(je),
        Ye === t && (Ye = null),
        U(Qt)
    }
    var Qt = w(0);
    function Es(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || ec(n) || nc(n)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var yn = 0
      , mt = null
      , Rt = null
      , Jt = null
      , Ms = !1
      , ra = !1
      , Ai = !1
      , js = 0
      , ll = 0
      , ua = null
      , xx = 0;
    function qt() {
        throw Error(s(321))
    }
    function Pr(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!Ee(t[n], e[n]))
                return !1;
        return !0
    }
    function Wr(t, e, n, l, r, u) {
        return yn = u,
        mt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        z.H = t === null || t.memoizedState === null ? Wh : du,
        Ai = !1,
        u = n(l, r),
        Ai = !1,
        ra && (u = gh(e, n, l, r)),
        ph(t),
        u
    }
    function ph(t) {
        z.H = rl;
        var e = Rt !== null && Rt.next !== null;
        if (yn = 0,
        Jt = Rt = mt = null,
        Ms = !1,
        ll = 0,
        ua = null,
        e)
            throw Error(s(300));
        t === null || Ft || (t = t.dependencies,
        t !== null && ys(t) && (Ft = !0))
    }
    function gh(t, e, n, l) {
        mt = t;
        var r = 0;
        do {
            if (ra && (ua = null),
            ll = 0,
            ra = !1,
            25 <= r)
                throw Error(s(301));
            if (r += 1,
            Jt = Rt = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            z.H = $h,
            u = e(n, l)
        } while (ra);
        return u
    }
    function Sx() {
        var t = z.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? sl(e) : e,
        t = t.useState()[0],
        (Rt !== null ? Rt.memoizedState : null) !== t && (mt.flags |= 1024),
        e
    }
    function $r() {
        var t = js !== 0;
        return js = 0,
        t
    }
    function Ir(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function tu(t) {
        if (Ms) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Ms = !1
        }
        yn = 0,
        Jt = Rt = mt = null,
        ra = !1,
        ll = js = 0,
        ua = null
    }
    function fe() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Jt === null ? mt.memoizedState = Jt = t : Jt = Jt.next = t,
        Jt
    }
    function Zt() {
        if (Rt === null) {
            var t = mt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = Rt.next;
        var e = Jt === null ? mt.memoizedState : Jt.next;
        if (e !== null)
            Jt = e,
            Rt = t;
        else {
            if (t === null)
                throw mt.alternate === null ? Error(s(467)) : Error(s(310));
            Rt = t,
            t = {
                memoizedState: Rt.memoizedState,
                baseState: Rt.baseState,
                baseQueue: Rt.baseQueue,
                queue: Rt.queue,
                next: null
            },
            Jt === null ? mt.memoizedState = Jt = t : Jt = Jt.next = t
        }
        return Jt
    }
    function Cs() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function sl(t) {
        var e = ll;
        return ll += 1,
        ua === null && (ua = []),
        t = sh(ua, t, e),
        e = mt,
        (Jt === null ? e.memoizedState : Jt.next) === null && (e = e.alternate,
        z.H = e === null || e.memoizedState === null ? Wh : du),
        t
    }
    function Ds(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return sl(t);
            if (t.$$typeof === Y)
                return oe(t)
        }
        throw Error(s(438, String(t)))
    }
    function eu(t) {
        var e = null
          , n = mt.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var l = mt.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(r) {
                    return r.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = Cs(),
        mt.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                n[l] = $;
        return e.index++,
        n
    }
    function vn(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Ns(t) {
        var e = Zt();
        return nu(e, Rt, t)
    }
    function nu(t, e, n) {
        var l = t.queue;
        if (l === null)
            throw Error(s(311));
        l.lastRenderedReducer = n;
        var r = t.baseQueue
          , u = l.pending;
        if (u !== null) {
            if (r !== null) {
                var h = r.next;
                r.next = u.next,
                u.next = h
            }
            e.baseQueue = r = u,
            l.pending = null
        }
        if (u = t.baseState,
        r === null)
            t.memoizedState = u;
        else {
            e = r.next;
            var v = h = null
              , T = null
              , C = e
              , V = !1;
            do {
                var k = C.lane & -536870913;
                if (k !== C.lane ? (Tt & k) === k : (yn & k) === k) {
                    var N = C.revertLane;
                    if (N === 0)
                        T !== null && (T = T.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        }),
                        k === ia && (V = !0);
                    else if ((yn & N) === N) {
                        C = C.next,
                        N === ia && (V = !0);
                        continue
                    } else
                        k = {
                            lane: 0,
                            revertLane: C.revertLane,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        },
                        T === null ? (v = T = k,
                        h = u) : T = T.next = k,
                        mt.lanes |= N,
                        Xn |= N;
                    k = C.action,
                    Ai && n(u, k),
                    u = C.hasEagerState ? C.eagerState : n(u, k)
                } else
                    N = {
                        lane: k,
                        revertLane: C.revertLane,
                        gesture: C.gesture,
                        action: C.action,
                        hasEagerState: C.hasEagerState,
                        eagerState: C.eagerState,
                        next: null
                    },
                    T === null ? (v = T = N,
                    h = u) : T = T.next = N,
                    mt.lanes |= k,
                    Xn |= k;
                C = C.next
            } while (C !== null && C !== e);
            if (T === null ? h = u : T.next = v,
            !Ee(u, t.memoizedState) && (Ft = !0,
            V && (n = aa,
            n !== null)))
                throw n;
            t.memoizedState = u,
            t.baseState = h,
            t.baseQueue = T,
            l.lastRenderedState = u
        }
        return r === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function iu(t) {
        var e = Zt()
          , n = e.queue;
        if (n === null)
            throw Error(s(311));
        n.lastRenderedReducer = t;
        var l = n.dispatch
          , r = n.pending
          , u = e.memoizedState;
        if (r !== null) {
            n.pending = null;
            var h = r = r.next;
            do
                u = t(u, h.action),
                h = h.next;
            while (h !== r);
            Ee(u, e.memoizedState) || (Ft = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            n.lastRenderedState = u
        }
        return [u, l]
    }
    function yh(t, e, n) {
        var l = mt
          , r = Zt()
          , u = At;
        if (u) {
            if (n === void 0)
                throw Error(s(407));
            n = n()
        } else
            n = e();
        var h = !Ee((Rt || r).memoizedState, n);
        if (h && (r.memoizedState = n,
        Ft = !0),
        r = r.queue,
        su(xh.bind(null, l, r, t), [t]),
        r.getSnapshot !== e || h || Jt !== null && Jt.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            ca(9, {
                destroy: void 0
            }, bh.bind(null, l, r, n, e), null),
            _t === null)
                throw Error(s(349));
            u || (yn & 127) !== 0 || vh(l, e, n)
        }
        return n
    }
    function vh(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = mt.updateQueue,
        e === null ? (e = Cs(),
        mt.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function bh(t, e, n, l) {
        e.value = n,
        e.getSnapshot = l,
        Sh(e) && Th(t)
    }
    function xh(t, e, n) {
        return n(function() {
            Sh(e) && Th(t)
        })
    }
    function Sh(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !Ee(t, n)
        } catch {
            return !0
        }
    }
    function Th(t) {
        var e = pi(t, 2);
        e !== null && xe(e, t, 2)
    }
    function au(t) {
        var e = fe();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            Ai) {
                Nn(!0);
                try {
                    n()
                } finally {
                    Nn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vn,
            lastRenderedState: t
        },
        e
    }
    function wh(t, e, n, l) {
        return t.baseState = n,
        nu(t, Rt, typeof l == "function" ? l : vn)
    }
    function Tx(t, e, n, l, r) {
        if (Os(t))
            throw Error(s(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: r,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    u.listeners.push(h)
                }
            };
            z.T !== null ? n(!0) : u.isTransition = !1,
            l(u),
            n = e.pending,
            n === null ? (u.next = e.pending = u,
            Ah(e, u)) : (u.next = n.next,
            e.pending = n.next = u)
        }
    }
    function Ah(t, e) {
        var n = e.action
          , l = e.payload
          , r = t.state;
        if (e.isTransition) {
            var u = z.T
              , h = {};
            z.T = h;
            try {
                var v = n(r, l)
                  , T = z.S;
                T !== null && T(h, v),
                Eh(t, e, v)
            } catch (C) {
                lu(t, e, C)
            } finally {
                u !== null && h.types !== null && (u.types = h.types),
                z.T = u
            }
        } else
            try {
                u = n(r, l),
                Eh(t, e, u)
            } catch (C) {
                lu(t, e, C)
            }
    }
    function Eh(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            Mh(t, e, l)
        }, function(l) {
            return lu(t, e, l)
        }) : Mh(t, e, n)
    }
    function Mh(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        jh(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        Ah(t, n)))
    }
    function lu(t, e, n) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = n,
                jh(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function jh(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Ch(t, e) {
        return e
    }
    function Dh(t, e) {
        if (At) {
            var n = _t.formState;
            if (n !== null) {
                t: {
                    var l = mt;
                    if (At) {
                        if (Bt) {
                            e: {
                                for (var r = Bt, u = qe; r.nodeType !== 8; ) {
                                    if (!u) {
                                        r = null;
                                        break e
                                    }
                                    if (r = Ge(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break e
                                    }
                                }
                                u = r.data,
                                r = u === "F!" || u === "F" ? r : null
                            }
                            if (r) {
                                Bt = Ge(r.nextSibling),
                                l = r.data === "F!";
                                break t
                            }
                        }
                        _n(l)
                    }
                    l = !1
                }
                l && (e = n[0])
            }
        }
        return n = fe(),
        n.memoizedState = n.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ch,
            lastRenderedState: e
        },
        n.queue = l,
        n = Jh.bind(null, mt, l),
        l.dispatch = n,
        l = au(!1),
        u = fu.bind(null, mt, !1, l.queue),
        l = fe(),
        r = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = r,
        n = Tx.bind(null, mt, r, u, n),
        r.dispatch = n,
        l.memoizedState = t,
        [e, n, !1]
    }
    function Nh(t) {
        var e = Zt();
        return zh(e, Rt, t)
    }
    function zh(t, e, n) {
        if (e = nu(t, e, Ch)[0],
        t = Ns(vn)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = sl(e)
            } catch (h) {
                throw h === la ? xs : h
            }
        else
            l = e;
        e = Zt();
        var r = e.queue
          , u = r.dispatch;
        return n !== e.memoizedState && (mt.flags |= 2048,
        ca(9, {
            destroy: void 0
        }, wx.bind(null, r, n), null)),
        [l, u, t]
    }
    function wx(t, e) {
        t.action = e
    }
    function Rh(t) {
        var e = Zt()
          , n = Rt;
        if (n !== null)
            return zh(e, n, t);
        Zt(),
        e = e.memoizedState,
        n = Zt();
        var l = n.queue.dispatch;
        return n.memoizedState = t,
        [e, l, !1]
    }
    function ca(t, e, n, l) {
        return t = {
            tag: t,
            create: n,
            deps: l,
            inst: e,
            next: null
        },
        e = mt.updateQueue,
        e === null && (e = Cs(),
        mt.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (l = n.next,
        n.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function Oh() {
        return Zt().memoizedState
    }
    function zs(t, e, n, l) {
        var r = fe();
        mt.flags |= t,
        r.memoizedState = ca(1 | e, {
            destroy: void 0
        }, n, l === void 0 ? null : l)
    }
    function Rs(t, e, n, l) {
        var r = Zt();
        l = l === void 0 ? null : l;
        var u = r.memoizedState.inst;
        Rt !== null && l !== null && Pr(l, Rt.memoizedState.deps) ? r.memoizedState = ca(e, u, n, l) : (mt.flags |= t,
        r.memoizedState = ca(1 | e, u, n, l))
    }
    function Vh(t, e) {
        zs(8390656, 8, t, e)
    }
    function su(t, e) {
        Rs(2048, 8, t, e)
    }
    function Ax(t) {
        mt.flags |= 4;
        var e = mt.updateQueue;
        if (e === null)
            e = Cs(),
            mt.updateQueue = e,
            e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }
    function _h(t) {
        var e = Zt().memoizedState;
        return Ax({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((jt & 2) !== 0)
                throw Error(s(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Bh(t, e) {
        return Rs(4, 2, t, e)
    }
    function Uh(t, e) {
        return Rs(4, 4, t, e)
    }
    function Lh(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function kh(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        Rs(4, 4, Lh.bind(null, e, t), n)
    }
    function ou() {}
    function Hh(t, e) {
        var n = Zt();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        return e !== null && Pr(e, l[1]) ? l[0] : (n.memoizedState = [t, e],
        t)
    }
    function qh(t, e) {
        var n = Zt();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        if (e !== null && Pr(e, l[1]))
            return l[0];
        if (l = t(),
        Ai) {
            Nn(!0);
            try {
                t()
            } finally {
                Nn(!1)
            }
        }
        return n.memoizedState = [l, e],
        l
    }
    function ru(t, e, n) {
        return n === void 0 || (yn & 1073741824) !== 0 && (Tt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Ym(),
        mt.lanes |= t,
        Xn |= t,
        n)
    }
    function Yh(t, e, n, l) {
        return Ee(n, e) ? n : oa.current !== null ? (t = ru(t, n, l),
        Ee(t, e) || (Ft = !0),
        t) : (yn & 42) === 0 || (yn & 1073741824) !== 0 && (Tt & 261930) === 0 ? (Ft = !0,
        t.memoizedState = n) : (t = Ym(),
        mt.lanes |= t,
        Xn |= t,
        e)
    }
    function Gh(t, e, n, l, r) {
        var u = Z.p;
        Z.p = u !== 0 && 8 > u ? u : 8;
        var h = z.T
          , v = {};
        z.T = v,
        fu(t, !1, e, n);
        try {
            var T = r()
              , C = z.S;
            if (C !== null && C(v, T),
            T !== null && typeof T == "object" && typeof T.then == "function") {
                var V = bx(T, l);
                ol(t, e, V, ze(t))
            } else
                ol(t, e, l, ze(t))
        } catch (k) {
            ol(t, e, {
                then: function() {},
                status: "rejected",
                reason: k
            }, ze())
        } finally {
            Z.p = u,
            h !== null && v.types !== null && (h.types = v.types),
            z.T = h
        }
    }
    function Ex() {}
    function uu(t, e, n, l) {
        if (t.tag !== 5)
            throw Error(s(476));
        var r = Xh(t).queue;
        Gh(t, r, e, P, n === null ? Ex : function() {
            return Qh(t),
            n(l)
        }
        )
    }
    function Xh(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: P,
            baseState: P,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: vn,
                lastRenderedState: P
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: vn,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Qh(t) {
        var e = Xh(t);
        e.next === null && (e = t.alternate.memoizedState),
        ol(t, e.next.queue, {}, ze())
    }
    function cu() {
        return oe(Al)
    }
    function Zh() {
        return Zt().memoizedState
    }
    function Kh() {
        return Zt().memoizedState
    }
    function Mx(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = ze();
                t = Ln(n);
                var l = kn(e, t, n);
                l !== null && (xe(l, e, n),
                nl(l, e, n)),
                e = {
                    cache: kr()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function jx(t, e, n) {
        var l = ze();
        n = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Os(t) ? Fh(e, n) : (n = Cr(t, e, n, l),
        n !== null && (xe(n, t, l),
        Ph(n, e, l)))
    }
    function Jh(t, e, n) {
        var l = ze();
        ol(t, e, n, l)
    }
    function ol(t, e, n, l) {
        var r = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Os(t))
            Fh(e, r);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var h = e.lastRenderedState
                      , v = u(h, n);
                    if (r.hasEagerState = !0,
                    r.eagerState = v,
                    Ee(v, h))
                        return hs(t, e, r, 0),
                        _t === null && ds(),
                        !1
                } catch {} finally {}
            if (n = Cr(t, e, r, l),
            n !== null)
                return xe(n, t, l),
                Ph(n, e, l),
                !0
        }
        return !1
    }
    function fu(t, e, n, l) {
        if (l = {
            lane: 2,
            revertLane: Gu(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Os(t)) {
            if (e)
                throw Error(s(479))
        } else
            e = Cr(t, n, l, 2),
            e !== null && xe(e, t, 2)
    }
    function Os(t) {
        var e = t.alternate;
        return t === mt || e !== null && e === mt
    }
    function Fh(t, e) {
        ra = Ms = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Ph(t, e, n) {
        if ((n & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            ed(t, n)
        }
    }
    var rl = {
        readContext: oe,
        use: Ds,
        useCallback: qt,
        useContext: qt,
        useEffect: qt,
        useImperativeHandle: qt,
        useLayoutEffect: qt,
        useInsertionEffect: qt,
        useMemo: qt,
        useReducer: qt,
        useRef: qt,
        useState: qt,
        useDebugValue: qt,
        useDeferredValue: qt,
        useTransition: qt,
        useSyncExternalStore: qt,
        useId: qt,
        useHostTransitionStatus: qt,
        useFormState: qt,
        useActionState: qt,
        useOptimistic: qt,
        useMemoCache: qt,
        useCacheRefresh: qt
    };
    rl.useEffectEvent = qt;
    var Wh = {
        readContext: oe,
        use: Ds,
        useCallback: function(t, e) {
            return fe().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: oe,
        useEffect: Vh,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            zs(4194308, 4, Lh.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return zs(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            zs(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = fe();
            e = e === void 0 ? null : e;
            var l = t();
            if (Ai) {
                Nn(!0);
                try {
                    t()
                } finally {
                    Nn(!1)
                }
            }
            return n.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, n) {
            var l = fe();
            if (n !== void 0) {
                var r = n(e);
                if (Ai) {
                    Nn(!0);
                    try {
                        n(e)
                    } finally {
                        Nn(!1)
                    }
                }
            } else
                r = e;
            return l.memoizedState = l.baseState = r,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: r
            },
            l.queue = t,
            t = t.dispatch = jx.bind(null, mt, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = fe();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = au(t);
            var e = t.queue
              , n = Jh.bind(null, mt, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: ou,
        useDeferredValue: function(t, e) {
            var n = fe();
            return ru(n, t, e)
        },
        useTransition: function() {
            var t = au(!1);
            return t = Gh.bind(null, mt, t.queue, !0, !1),
            fe().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var l = mt
              , r = fe();
            if (At) {
                if (n === void 0)
                    throw Error(s(407));
                n = n()
            } else {
                if (n = e(),
                _t === null)
                    throw Error(s(349));
                (Tt & 127) !== 0 || vh(l, e, n)
            }
            r.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: e
            };
            return r.queue = u,
            Vh(xh.bind(null, l, u, t), [t]),
            l.flags |= 2048,
            ca(9, {
                destroy: void 0
            }, bh.bind(null, l, u, n, e), null),
            n
        },
        useId: function() {
            var t = fe()
              , e = _t.identifierPrefix;
            if (At) {
                var n = an
                  , l = nn;
                n = (l & ~(1 << 32 - Ae(l) - 1)).toString(32) + n,
                e = "_" + e + "R_" + n,
                n = js++,
                0 < n && (e += "H" + n.toString(32)),
                e += "_"
            } else
                n = xx++,
                e = "_" + e + "r_" + n.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: cu,
        useFormState: Dh,
        useActionState: Dh,
        useOptimistic: function(t) {
            var e = fe();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = fu.bind(null, mt, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: eu,
        useCacheRefresh: function() {
            return fe().memoizedState = Mx.bind(null, mt)
        },
        useEffectEvent: function(t) {
            var e = fe()
              , n = {
                impl: t
            };
            return e.memoizedState = n,
            function() {
                if ((jt & 2) !== 0)
                    throw Error(s(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , du = {
        readContext: oe,
        use: Ds,
        useCallback: Hh,
        useContext: oe,
        useEffect: su,
        useImperativeHandle: kh,
        useInsertionEffect: Bh,
        useLayoutEffect: Uh,
        useMemo: qh,
        useReducer: Ns,
        useRef: Oh,
        useState: function() {
            return Ns(vn)
        },
        useDebugValue: ou,
        useDeferredValue: function(t, e) {
            var n = Zt();
            return Yh(n, Rt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Ns(vn)[0]
              , e = Zt().memoizedState;
            return [typeof t == "boolean" ? t : sl(t), e]
        },
        useSyncExternalStore: yh,
        useId: Zh,
        useHostTransitionStatus: cu,
        useFormState: Nh,
        useActionState: Nh,
        useOptimistic: function(t, e) {
            var n = Zt();
            return wh(n, Rt, t, e)
        },
        useMemoCache: eu,
        useCacheRefresh: Kh
    };
    du.useEffectEvent = _h;
    var $h = {
        readContext: oe,
        use: Ds,
        useCallback: Hh,
        useContext: oe,
        useEffect: su,
        useImperativeHandle: kh,
        useInsertionEffect: Bh,
        useLayoutEffect: Uh,
        useMemo: qh,
        useReducer: iu,
        useRef: Oh,
        useState: function() {
            return iu(vn)
        },
        useDebugValue: ou,
        useDeferredValue: function(t, e) {
            var n = Zt();
            return Rt === null ? ru(n, t, e) : Yh(n, Rt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = iu(vn)[0]
              , e = Zt().memoizedState;
            return [typeof t == "boolean" ? t : sl(t), e]
        },
        useSyncExternalStore: yh,
        useId: Zh,
        useHostTransitionStatus: cu,
        useFormState: Rh,
        useActionState: Rh,
        useOptimistic: function(t, e) {
            var n = Zt();
            return Rt !== null ? wh(n, Rt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: eu,
        useCacheRefresh: Kh
    };
    $h.useEffectEvent = _h;
    function hu(t, e, n, l) {
        e = t.memoizedState,
        n = n(l, e),
        n = n == null ? e : b({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var mu = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var l = ze()
              , r = Ln(l);
            r.payload = e,
            n != null && (r.callback = n),
            e = kn(t, r, l),
            e !== null && (xe(e, t, l),
            nl(e, t, l))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var l = ze()
              , r = Ln(l);
            r.tag = 1,
            r.payload = e,
            n != null && (r.callback = n),
            e = kn(t, r, l),
            e !== null && (xe(e, t, l),
            nl(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = ze()
              , l = Ln(n);
            l.tag = 2,
            e != null && (l.callback = e),
            e = kn(t, l, n),
            e !== null && (xe(e, t, n),
            nl(e, t, n))
        }
    };
    function Ih(t, e, n, l, r, u, h) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, h) : e.prototype && e.prototype.isPureReactComponent ? !Ja(n, l) || !Ja(r, u) : !0
    }
    function tm(t, e, n, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l),
        e.state !== t && mu.enqueueReplaceState(e, e.state, null)
    }
    function Ei(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var l in e)
                l !== "ref" && (n[l] = e[l])
        }
        if (t = t.defaultProps) {
            n === e && (n = b({}, n));
            for (var r in t)
                n[r] === void 0 && (n[r] = t[r])
        }
        return n
    }
    function em(t) {
        fs(t)
    }
    function nm(t) {
        console.error(t)
    }
    function im(t) {
        fs(t)
    }
    function Vs(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function am(t, e, n) {
        try {
            var l = t.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function pu(t, e, n) {
        return n = Ln(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            Vs(t, e)
        }
        ,
        n
    }
    function lm(t) {
        return t = Ln(t),
        t.tag = 3,
        t
    }
    function sm(t, e, n, l) {
        var r = n.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var u = l.value;
            t.payload = function() {
                return r(u)
            }
            ,
            t.callback = function() {
                am(e, n, l)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
            am(e, n, l),
            typeof r != "function" && (Qn === null ? Qn = new Set([this]) : Qn.add(this));
            var v = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function Cx(t, e, n, l, r) {
        if (n.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = n.alternate,
            e !== null && na(e, n, r, !0),
            n = je.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Ye === null ? Zs() : n.alternate === null && Yt === 0 && (Yt = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = r,
                    l === Ss ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([l]) : e.add(l),
                    Hu(t, l, r)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    l === Ss ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([l]) : n.add(l)),
                    Hu(t, l, r)),
                    !1
                }
                throw Error(s(435, n.tag))
            }
            return Hu(t, l, r),
            Zs(),
            !1
        }
        if (At)
            return e = je.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = r,
            l !== Vr && (t = Error(s(422), {
                cause: l
            }),
            Wa(Le(t, n)))) : (l !== Vr && (e = Error(s(423), {
                cause: l
            }),
            Wa(Le(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            r &= -r,
            t.lanes |= r,
            l = Le(l, n),
            r = pu(t.stateNode, l, r),
            Qr(t, r),
            Yt !== 4 && (Yt = 2)),
            !1;
        var u = Error(s(520), {
            cause: l
        });
        if (u = Le(u, n),
        gl === null ? gl = [u] : gl.push(u),
        Yt !== 4 && (Yt = 2),
        e === null)
            return !0;
        l = Le(l, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = r & -r,
                n.lanes |= t,
                t = pu(n.stateNode, l, t),
                Qr(n, t),
                !1;
            case 1:
                if (e = n.type,
                u = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Qn === null || !Qn.has(u))))
                    return n.flags |= 65536,
                    r &= -r,
                    n.lanes |= r,
                    r = lm(r),
                    sm(r, t, n, l),
                    Qr(n, r),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var gu = Error(s(461))
      , Ft = !1;
    function re(t, e, n, l) {
        e.child = t === null ? ch(e, null, n, l) : wi(e, t.child, n, l)
    }
    function om(t, e, n, l, r) {
        n = n.render;
        var u = e.ref;
        if ("ref"in l) {
            var h = {};
            for (var v in l)
                v !== "ref" && (h[v] = l[v])
        } else
            h = l;
        return bi(e),
        l = Wr(t, e, n, h, u, r),
        v = $r(),
        t !== null && !Ft ? (Ir(t, e, r),
        bn(t, e, r)) : (At && v && Rr(e),
        e.flags |= 1,
        re(t, e, l, r),
        e.child)
    }
    function rm(t, e, n, l, r) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !Dr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = u,
            um(t, e, u, l, r)) : (t = ps(n.type, null, l, e, e.mode, r),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !Au(t, r)) {
            var h = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : Ja,
            n(h, l) && t.ref === e.ref)
                return bn(t, e, r)
        }
        return e.flags |= 1,
        t = hn(u, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function um(t, e, n, l, r) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Ja(u, l) && t.ref === e.ref)
                if (Ft = !1,
                e.pendingProps = l = u,
                Au(t, r))
                    (t.flags & 131072) !== 0 && (Ft = !0);
                else
                    return e.lanes = t.lanes,
                    bn(t, e, r)
        }
        return yu(t, e, n, l, r)
    }
    function cm(t, e, n, l) {
        var r = l.children
          , u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | n : n,
                t !== null) {
                    for (l = e.child = t.child,
                    r = 0; l !== null; )
                        r = r | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = r & ~u
                } else
                    l = 0,
                    e.child = null;
                return fm(t, e, u, n, l)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && bs(e, u !== null ? u.cachePool : null),
                u !== null ? hh(e, u) : Kr(),
                mh(e);
            else
                return l = e.lanes = 536870912,
                fm(t, e, u !== null ? u.baseLanes | n : n, n, l)
        } else
            u !== null ? (bs(e, u.cachePool),
            hh(e, u),
            qn(),
            e.memoizedState = null) : (t !== null && bs(e, null),
            Kr(),
            qn());
        return re(t, e, r, n),
        e.child
    }
    function ul(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function fm(t, e, n, l, r) {
        var u = qr();
        return u = u === null ? null : {
            parent: Kt._currentValue,
            pool: u
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: u
        },
        t !== null && bs(e, null),
        Kr(),
        mh(e),
        t !== null && na(t, e, l, !0),
        e.childLanes = r,
        null
    }
    function _s(t, e) {
        return e = Us({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function dm(t, e, n) {
        return wi(e, t.child, null, n),
        t = _s(e, e.pendingProps),
        t.flags |= 2,
        Ce(e),
        e.memoizedState = null,
        t
    }
    function Dx(t, e, n) {
        var l = e.pendingProps
          , r = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (At) {
                if (l.mode === "hidden")
                    return t = _s(e, l),
                    e.lanes = 536870912,
                    ul(null, t);
                if (Fr(e),
                (t = Bt) ? (t = Ap(t, qe),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: On !== null ? {
                        id: nn,
                        overflow: an
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Fd(t),
                n.return = e,
                e.child = n,
                se = e,
                Bt = null)) : t = null,
                t === null)
                    throw _n(e);
                return e.lanes = 536870912,
                null
            }
            return _s(e, l)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var h = u.dehydrated;
            if (Fr(e),
            r)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = dm(t, e, n);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(s(558));
            else if (Ft || na(t, e, n, !1),
            r = (n & t.childLanes) !== 0,
            Ft || r) {
                if (l = _t,
                l !== null && (h = nd(l, n),
                h !== 0 && h !== u.retryLane))
                    throw u.retryLane = h,
                    pi(t, h),
                    xe(l, t, h),
                    gu;
                Zs(),
                e = dm(t, e, n)
            } else
                t = u.treeContext,
                Bt = Ge(h.nextSibling),
                se = e,
                At = !0,
                Vn = null,
                qe = !1,
                t !== null && $d(e, t),
                e = _s(e, l),
                e.flags |= 4096;
            return e
        }
        return t = hn(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Bs(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(s(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function yu(t, e, n, l, r) {
        return bi(e),
        n = Wr(t, e, n, l, void 0, r),
        l = $r(),
        t !== null && !Ft ? (Ir(t, e, r),
        bn(t, e, r)) : (At && l && Rr(e),
        e.flags |= 1,
        re(t, e, n, r),
        e.child)
    }
    function hm(t, e, n, l, r, u) {
        return bi(e),
        e.updateQueue = null,
        n = gh(e, l, n, r),
        ph(t),
        l = $r(),
        t !== null && !Ft ? (Ir(t, e, u),
        bn(t, e, u)) : (At && l && Rr(e),
        e.flags |= 1,
        re(t, e, n, u),
        e.child)
    }
    function mm(t, e, n, l, r) {
        if (bi(e),
        e.stateNode === null) {
            var u = $i
              , h = n.contextType;
            typeof h == "object" && h !== null && (u = oe(h)),
            u = new n(l,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = mu,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = l,
            u.state = e.memoizedState,
            u.refs = {},
            Gr(e),
            h = n.contextType,
            u.context = typeof h == "object" && h !== null ? oe(h) : $i,
            u.state = e.memoizedState,
            h = n.getDerivedStateFromProps,
            typeof h == "function" && (hu(e, n, h, l),
            u.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            h !== u.state && mu.enqueueReplaceState(u, u.state, null),
            al(e, l, u, r),
            il(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            u = e.stateNode;
            var v = e.memoizedProps
              , T = Ei(n, v);
            u.props = T;
            var C = u.context
              , V = n.contextType;
            h = $i,
            typeof V == "object" && V !== null && (h = oe(V));
            var k = n.getDerivedStateFromProps;
            V = typeof k == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || C !== h) && tm(e, u, l, h),
            Un = !1;
            var N = e.memoizedState;
            u.state = N,
            al(e, l, u, r),
            il(),
            C = e.memoizedState,
            v || N !== C || Un ? (typeof k == "function" && (hu(e, n, k, l),
            C = e.memoizedState),
            (T = Un || Ih(e, n, T, l, N, C, h)) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = C),
            u.props = l,
            u.state = C,
            u.context = h,
            l = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            u = e.stateNode,
            Xr(t, e),
            h = e.memoizedProps,
            V = Ei(n, h),
            u.props = V,
            k = e.pendingProps,
            N = u.context,
            C = n.contextType,
            T = $i,
            typeof C == "object" && C !== null && (T = oe(C)),
            v = n.getDerivedStateFromProps,
            (C = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== k || N !== T) && tm(e, u, l, T),
            Un = !1,
            N = e.memoizedState,
            u.state = N,
            al(e, l, u, r),
            il();
            var R = e.memoizedState;
            h !== k || N !== R || Un || t !== null && t.dependencies !== null && ys(t.dependencies) ? (typeof v == "function" && (hu(e, n, v, l),
            R = e.memoizedState),
            (V = Un || Ih(e, n, V, l, N, R, T) || t !== null && t.dependencies !== null && ys(t.dependencies)) ? (C || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, R, T),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, R, T)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = R),
            u.props = l,
            u.state = R,
            u.context = T,
            l = V) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return u = l,
        Bs(t, e),
        l = (e.flags & 128) !== 0,
        u || l ? (u = e.stateNode,
        n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = wi(e, t.child, null, r),
        e.child = wi(e, null, n, r)) : re(t, e, n, r),
        e.memoizedState = u.state,
        t = e.child) : t = bn(t, e, r),
        t
    }
    function pm(t, e, n, l) {
        return yi(),
        e.flags |= 256,
        re(t, e, n, l),
        e.child
    }
    var vu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function bu(t) {
        return {
            baseLanes: t,
            cachePool: ah()
        }
    }
    function xu(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= Ne),
        t
    }
    function gm(t, e, n) {
        var l = e.pendingProps, r = !1, u = (e.flags & 128) !== 0, h;
        if ((h = u) || (h = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
        h && (r = !0,
        e.flags &= -129),
        h = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (At) {
                if (r ? Hn(e) : qn(),
                (t = Bt) ? (t = Ap(t, qe),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: On !== null ? {
                        id: nn,
                        overflow: an
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Fd(t),
                n.return = e,
                e.child = n,
                se = e,
                Bt = null)) : t = null,
                t === null)
                    throw _n(e);
                return nc(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var v = l.children;
            return l = l.fallback,
            r ? (qn(),
            r = e.mode,
            v = Us({
                mode: "hidden",
                children: v
            }, r),
            l = gi(l, r, n, null),
            v.return = e,
            l.return = e,
            v.sibling = l,
            e.child = v,
            l = e.child,
            l.memoizedState = bu(n),
            l.childLanes = xu(t, h, n),
            e.memoizedState = vu,
            ul(null, l)) : (Hn(e),
            Su(e, v))
        }
        var T = t.memoizedState;
        if (T !== null && (v = T.dehydrated,
        v !== null)) {
            if (u)
                e.flags & 256 ? (Hn(e),
                e.flags &= -257,
                e = Tu(t, e, n)) : e.memoizedState !== null ? (qn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (qn(),
                v = l.fallback,
                r = e.mode,
                l = Us({
                    mode: "visible",
                    children: l.children
                }, r),
                v = gi(v, r, n, null),
                v.flags |= 2,
                l.return = e,
                v.return = e,
                l.sibling = v,
                e.child = l,
                wi(e, t.child, null, n),
                l = e.child,
                l.memoizedState = bu(n),
                l.childLanes = xu(t, h, n),
                e.memoizedState = vu,
                e = ul(null, l));
            else if (Hn(e),
            nc(v)) {
                if (h = v.nextSibling && v.nextSibling.dataset,
                h)
                    var C = h.dgst;
                h = C,
                l = Error(s(419)),
                l.stack = "",
                l.digest = h,
                Wa({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = Tu(t, e, n)
            } else if (Ft || na(t, e, n, !1),
            h = (n & t.childLanes) !== 0,
            Ft || h) {
                if (h = _t,
                h !== null && (l = nd(h, n),
                l !== 0 && l !== T.retryLane))
                    throw T.retryLane = l,
                    pi(t, l),
                    xe(h, t, l),
                    gu;
                ec(v) || Zs(),
                e = Tu(t, e, n)
            } else
                ec(v) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = T.treeContext,
                Bt = Ge(v.nextSibling),
                se = e,
                At = !0,
                Vn = null,
                qe = !1,
                t !== null && $d(e, t),
                e = Su(e, l.children),
                e.flags |= 4096);
            return e
        }
        return r ? (qn(),
        v = l.fallback,
        r = e.mode,
        T = t.child,
        C = T.sibling,
        l = hn(T, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = T.subtreeFlags & 65011712,
        C !== null ? v = hn(C, v) : (v = gi(v, r, n, null),
        v.flags |= 2),
        v.return = e,
        l.return = e,
        l.sibling = v,
        e.child = l,
        ul(null, l),
        l = e.child,
        v = t.child.memoizedState,
        v === null ? v = bu(n) : (r = v.cachePool,
        r !== null ? (T = Kt._currentValue,
        r = r.parent !== T ? {
            parent: T,
            pool: T
        } : r) : r = ah(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: r
        }),
        l.memoizedState = v,
        l.childLanes = xu(t, h, n),
        e.memoizedState = vu,
        ul(t.child, l)) : (Hn(e),
        n = t.child,
        t = n.sibling,
        n = hn(n, {
            mode: "visible",
            children: l.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (h = e.deletions,
        h === null ? (e.deletions = [t],
        e.flags |= 16) : h.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Su(t, e) {
        return e = Us({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function Us(t, e) {
        return t = Me(22, t, null, e),
        t.lanes = 0,
        t
    }
    function Tu(t, e, n) {
        return wi(e, t.child, null, n),
        t = Su(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function ym(t, e, n) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        Ur(t.return, e, n)
    }
    function wu(t, e, n, l, r, u) {
        var h = t.memoizedState;
        h === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: r,
            treeForkCount: u
        } : (h.isBackwards = e,
        h.rendering = null,
        h.renderingStartTime = 0,
        h.last = l,
        h.tail = n,
        h.tailMode = r,
        h.treeForkCount = u)
    }
    function vm(t, e, n) {
        var l = e.pendingProps
          , r = l.revealOrder
          , u = l.tail;
        l = l.children;
        var h = Qt.current
          , v = (h & 2) !== 0;
        if (v ? (h = h & 1 | 2,
        e.flags |= 128) : h &= 1,
        J(Qt, h),
        re(t, e, l, n),
        l = At ? Pa : 0,
        !v && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && ym(t, n, e);
                else if (t.tag === 19)
                    ym(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (r) {
        case "forwards":
            for (n = e.child,
            r = null; n !== null; )
                t = n.alternate,
                t !== null && Es(t) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = e.child,
            e.child = null) : (r = n.sibling,
            n.sibling = null),
            wu(e, !1, r, n, u, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            r = e.child,
            e.child = null; r !== null; ) {
                if (t = r.alternate,
                t !== null && Es(t) === null) {
                    e.child = r;
                    break
                }
                t = r.sibling,
                r.sibling = n,
                n = r,
                r = t
            }
            wu(e, !0, n, null, u, l);
            break;
        case "together":
            wu(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function bn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Xn |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (na(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(s(153));
        if (e.child !== null) {
            for (t = e.child,
            n = hn(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = hn(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function Au(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && ys(t)))
    }
    function Nx(t, e, n) {
        switch (e.tag) {
        case 3:
            Xt(e, e.stateNode.containerInfo),
            Bn(e, Kt, t.memoizedState.cache),
            yi();
            break;
        case 27:
        case 5:
            en(e);
            break;
        case 4:
            Xt(e, e.stateNode.containerInfo);
            break;
        case 10:
            Bn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                Fr(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Hn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? gm(t, e, n) : (Hn(e),
                t = bn(t, e, n),
                t !== null ? t.sibling : null);
            Hn(e);
            break;
        case 19:
            var r = (t.flags & 128) !== 0;
            if (l = (n & e.childLanes) !== 0,
            l || (na(t, e, n, !1),
            l = (n & e.childLanes) !== 0),
            r) {
                if (l)
                    return vm(t, e, n);
                e.flags |= 128
            }
            if (r = e.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            J(Qt, Qt.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            cm(t, e, n, e.pendingProps);
        case 24:
            Bn(e, Kt, t.memoizedState.cache)
        }
        return bn(t, e, n)
    }
    function bm(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Ft = !0;
            else {
                if (!Au(t, n) && (e.flags & 128) === 0)
                    return Ft = !1,
                    Nx(t, e, n);
                Ft = (t.flags & 131072) !== 0
            }
        else
            Ft = !1,
            At && (e.flags & 1048576) !== 0 && Wd(e, Pa, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = Si(e.elementType),
                e.type = t,
                typeof t == "function")
                    Dr(t) ? (l = Ei(t, l),
                    e.tag = 1,
                    e = mm(null, e, t, l, n)) : (e.tag = 0,
                    e = yu(null, e, t, l, n));
                else {
                    if (t != null) {
                        var r = t.$$typeof;
                        if (r === G) {
                            e.tag = 11,
                            e = om(null, e, t, l, n);
                            break t
                        } else if (r === I) {
                            e.tag = 14,
                            e = rm(null, e, t, l, n);
                            break t
                        }
                    }
                    throw e = Ct(t) || t,
                    Error(s(306, e, ""))
                }
            }
            return e;
        case 0:
            return yu(t, e, e.type, e.pendingProps, n);
        case 1:
            return l = e.type,
            r = Ei(l, e.pendingProps),
            mm(t, e, l, r, n);
        case 3:
            t: {
                if (Xt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(s(387));
                l = e.pendingProps;
                var u = e.memoizedState;
                r = u.element,
                Xr(t, e),
                al(e, l, null, n);
                var h = e.memoizedState;
                if (l = h.cache,
                Bn(e, Kt, l),
                l !== u.cache && Lr(e, [Kt], n, !0),
                il(),
                l = h.element,
                u.isDehydrated)
                    if (u = {
                        element: l,
                        isDehydrated: !1,
                        cache: h.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = pm(t, e, l, n);
                        break t
                    } else if (l !== r) {
                        r = Le(Error(s(424)), e),
                        Wa(r),
                        e = pm(t, e, l, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Bt = Ge(t.firstChild),
                        se = e,
                        At = !0,
                        Vn = null,
                        qe = !0,
                        n = ch(e, null, l, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (yi(),
                    l === r) {
                        e = bn(t, e, n);
                        break t
                    }
                    re(t, e, l, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return Bs(t, e),
            t === null ? (n = Np(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : At || (n = e.type,
            t = e.pendingProps,
            l = Is(lt.current).createElement(n),
            l[le] = e,
            l[me] = t,
            ue(l, n, t),
            ne(l),
            e.stateNode = l) : e.memoizedState = Np(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return en(e),
            t === null && At && (l = e.stateNode = jp(e.type, e.pendingProps, lt.current),
            se = e,
            qe = !0,
            r = Bt,
            Fn(e.type) ? (ic = r,
            Bt = Ge(l.firstChild)) : Bt = r),
            re(t, e, e.pendingProps.children, n),
            Bs(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && At && ((r = l = Bt) && (l = s1(l, e.type, e.pendingProps, qe),
            l !== null ? (e.stateNode = l,
            se = e,
            Bt = Ge(l.firstChild),
            qe = !1,
            r = !0) : r = !1),
            r || _n(e)),
            en(e),
            r = e.type,
            u = e.pendingProps,
            h = t !== null ? t.memoizedProps : null,
            l = u.children,
            $u(r, u) ? l = null : h !== null && $u(r, h) && (e.flags |= 32),
            e.memoizedState !== null && (r = Wr(t, e, Sx, null, null, n),
            Al._currentValue = r),
            Bs(t, e),
            re(t, e, l, n),
            e.child;
        case 6:
            return t === null && At && ((t = n = Bt) && (n = o1(n, e.pendingProps, qe),
            n !== null ? (e.stateNode = n,
            se = e,
            Bt = null,
            t = !0) : t = !1),
            t || _n(e)),
            null;
        case 13:
            return gm(t, e, n);
        case 4:
            return Xt(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = wi(e, null, l, n) : re(t, e, l, n),
            e.child;
        case 11:
            return om(t, e, e.type, e.pendingProps, n);
        case 7:
            return re(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return re(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return re(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return l = e.pendingProps,
            Bn(e, e.type, l.value),
            re(t, e, l.children, n),
            e.child;
        case 9:
            return r = e.type._context,
            l = e.pendingProps.children,
            bi(e),
            r = oe(r),
            l = l(r),
            e.flags |= 1,
            re(t, e, l, n),
            e.child;
        case 14:
            return rm(t, e, e.type, e.pendingProps, n);
        case 15:
            return um(t, e, e.type, e.pendingProps, n);
        case 19:
            return vm(t, e, n);
        case 31:
            return Dx(t, e, n);
        case 22:
            return cm(t, e, n, e.pendingProps);
        case 24:
            return bi(e),
            l = oe(Kt),
            t === null ? (r = qr(),
            r === null && (r = _t,
            u = kr(),
            r.pooledCache = u,
            u.refCount++,
            u !== null && (r.pooledCacheLanes |= n),
            r = u),
            e.memoizedState = {
                parent: l,
                cache: r
            },
            Gr(e),
            Bn(e, Kt, r)) : ((t.lanes & n) !== 0 && (Xr(t, e),
            al(e, null, null, n),
            il()),
            r = t.memoizedState,
            u = e.memoizedState,
            r.parent !== l ? (r = {
                parent: l,
                cache: l
            },
            e.memoizedState = r,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
            Bn(e, Kt, l)) : (l = u.cache,
            Bn(e, Kt, l),
            l !== r.cache && Lr(e, [Kt], n, !0))),
            re(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(s(156, e.tag))
    }
    function xn(t) {
        t.flags |= 4
    }
    function Eu(t, e, n, l, r) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (r & 335544128) === r)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Zm())
                    t.flags |= 8192;
                else
                    throw Ti = Ss,
                    Yr
        } else
            t.flags &= -16777217
    }
    function xm(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !_p(e))
            if (Zm())
                t.flags |= 8192;
            else
                throw Ti = Ss,
                Yr
    }
    function Ls(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? If() : 536870912,
        t.lanes |= e,
        ma |= e)
    }
    function cl(t, e) {
        if (!At)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function Ut(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , l = 0;
        if (e)
            for (var r = t.child; r !== null; )
                n |= r.lanes | r.childLanes,
                l |= r.subtreeFlags & 65011712,
                l |= r.flags & 65011712,
                r.return = t,
                r = r.sibling;
        else
            for (r = t.child; r !== null; )
                n |= r.lanes | r.childLanes,
                l |= r.subtreeFlags,
                l |= r.flags,
                r.return = t,
                r = r.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = n,
        e
    }
    function zx(t, e, n) {
        var l = e.pendingProps;
        switch (Or(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ut(e),
            null;
        case 1:
            return Ut(e),
            null;
        case 3:
            return n = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            gn(Kt),
            ht(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (ea(e) ? xn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            _r())),
            Ut(e),
            null;
        case 26:
            var r = e.type
              , u = e.memoizedState;
            return t === null ? (xn(e),
            u !== null ? (Ut(e),
            xm(e, u)) : (Ut(e),
            Eu(e, r, null, l, n))) : u ? u !== t.memoizedState ? (xn(e),
            Ut(e),
            xm(e, u)) : (Ut(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && xn(e),
            Ut(e),
            Eu(e, r, t, l, n)),
            null;
        case 27:
            if (Ze(e),
            n = lt.current,
            r = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && xn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(s(166));
                    return Ut(e),
                    null
                }
                t = K.current,
                ea(e) ? Id(e) : (t = jp(r, l, n),
                e.stateNode = t,
                xn(e))
            }
            return Ut(e),
            null;
        case 5:
            if (Ze(e),
            r = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && xn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(s(166));
                    return Ut(e),
                    null
                }
                if (u = K.current,
                ea(e))
                    Id(e);
                else {
                    var h = Is(lt.current);
                    switch (u) {
                    case 1:
                        u = h.createElementNS("http://www.w3.org/2000/svg", r);
                        break;
                    case 2:
                        u = h.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                        break;
                    default:
                        switch (r) {
                        case "svg":
                            u = h.createElementNS("http://www.w3.org/2000/svg", r);
                            break;
                        case "math":
                            u = h.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                            break;
                        case "script":
                            u = h.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof l.is == "string" ? h.createElement("select", {
                                is: l.is
                            }) : h.createElement("select"),
                            l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                            break;
                        default:
                            u = typeof l.is == "string" ? h.createElement(r, {
                                is: l.is
                            }) : h.createElement(r)
                        }
                    }
                    u[le] = e,
                    u[me] = l;
                    t: for (h = e.child; h !== null; ) {
                        if (h.tag === 5 || h.tag === 6)
                            u.appendChild(h.stateNode);
                        else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                            h.child.return = h,
                            h = h.child;
                            continue
                        }
                        if (h === e)
                            break t;
                        for (; h.sibling === null; ) {
                            if (h.return === null || h.return === e)
                                break t;
                            h = h.return
                        }
                        h.sibling.return = h.return,
                        h = h.sibling
                    }
                    e.stateNode = u;
                    t: switch (ue(u, r, l),
                    r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && xn(e)
                }
            }
            return Ut(e),
            Eu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && xn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(s(166));
                if (t = lt.current,
                ea(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    l = null,
                    r = se,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            l = r.memoizedProps
                        }
                    t[le] = e,
                    t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || gp(t.nodeValue, n)),
                    t || _n(e, !0)
                } else
                    t = Is(t).createTextNode(l),
                    t[le] = e,
                    e.stateNode = t
            }
            return Ut(e),
            null;
        case 31:
            if (n = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = ea(e),
                n !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(s(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(s(557));
                        t[le] = e
                    } else
                        yi(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Ut(e),
                    t = !1
                } else
                    n = _r(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Ce(e),
                    e) : (Ce(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(s(558))
            }
            return Ut(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (r = ea(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!r)
                            throw Error(s(318));
                        if (r = e.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(s(317));
                        r[le] = e
                    } else
                        yi(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Ut(e),
                    r = !1
                } else
                    r = _r(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r),
                    r = !0;
                if (!r)
                    return e.flags & 256 ? (Ce(e),
                    e) : (Ce(e),
                    null)
            }
            return Ce(e),
            (e.flags & 128) !== 0 ? (e.lanes = n,
            e) : (n = l !== null,
            t = t !== null && t.memoizedState !== null,
            n && (l = e.child,
            r = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool),
            u = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool),
            u !== r && (l.flags |= 2048)),
            n !== t && n && (e.child.flags |= 8192),
            Ls(e, e.updateQueue),
            Ut(e),
            null);
        case 4:
            return ht(),
            t === null && Ku(e.stateNode.containerInfo),
            Ut(e),
            null;
        case 10:
            return gn(e.type),
            Ut(e),
            null;
        case 19:
            if (U(Qt),
            l = e.memoizedState,
            l === null)
                return Ut(e),
                null;
            if (r = (e.flags & 128) !== 0,
            u = l.rendering,
            u === null)
                if (r)
                    cl(l, !1);
                else {
                    if (Yt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = Es(t),
                            u !== null) {
                                for (e.flags |= 128,
                                cl(l, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                Ls(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    Jd(n, t),
                                    n = n.sibling;
                                return J(Qt, Qt.current & 1 | 2),
                                At && mn(e, l.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && Te() > Gs && (e.flags |= 128,
                    r = !0,
                    cl(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!r)
                    if (t = Es(u),
                    t !== null) {
                        if (e.flags |= 128,
                        r = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Ls(e, t),
                        cl(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !u.alternate && !At)
                            return Ut(e),
                            null
                    } else
                        2 * Te() - l.renderingStartTime > Gs && n !== 536870912 && (e.flags |= 128,
                        r = !0,
                        cl(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = l.last,
                t !== null ? t.sibling = u : e.child = u,
                l.last = u)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = Te(),
            t.sibling = null,
            n = Qt.current,
            J(Qt, r ? n & 1 | 2 : n & 1),
            At && mn(e, l.treeForkCount),
            t) : (Ut(e),
            null);
        case 22:
        case 23:
            return Ce(e),
            Jr(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ut(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Ut(e),
            n = e.updateQueue,
            n !== null && Ls(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== n && (e.flags |= 2048),
            t !== null && U(xi),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            gn(Kt),
            Ut(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(s(156, e.tag))
    }
    function Rx(t, e) {
        switch (Or(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return gn(Kt),
            ht(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Ze(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Ce(e),
                e.alternate === null)
                    throw Error(s(340));
                yi()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Ce(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(s(340));
                yi()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return U(Qt),
            null;
        case 4:
            return ht(),
            null;
        case 10:
            return gn(e.type),
            null;
        case 22:
        case 23:
            return Ce(e),
            Jr(),
            t !== null && U(xi),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return gn(Kt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Sm(t, e) {
        switch (Or(e),
        e.tag) {
        case 3:
            gn(Kt),
            ht();
            break;
        case 26:
        case 27:
        case 5:
            Ze(e);
            break;
        case 4:
            ht();
            break;
        case 31:
            e.memoizedState !== null && Ce(e);
            break;
        case 13:
            Ce(e);
            break;
        case 19:
            U(Qt);
            break;
        case 10:
            gn(e.type);
            break;
        case 22:
        case 23:
            Ce(e),
            Jr(),
            t !== null && U(xi);
            break;
        case 24:
            gn(Kt)
        }
    }
    function fl(t, e) {
        try {
            var n = e.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var r = l.next;
                n = r;
                do {
                    if ((n.tag & t) === t) {
                        l = void 0;
                        var u = n.create
                          , h = n.inst;
                        l = u(),
                        h.destroy = l
                    }
                    n = n.next
                } while (n !== r)
            }
        } catch (v) {
            zt(e, e.return, v)
        }
    }
    function Yn(t, e, n) {
        try {
            var l = e.updateQueue
              , r = l !== null ? l.lastEffect : null;
            if (r !== null) {
                var u = r.next;
                l = u;
                do {
                    if ((l.tag & t) === t) {
                        var h = l.inst
                          , v = h.destroy;
                        if (v !== void 0) {
                            h.destroy = void 0,
                            r = e;
                            var T = n
                              , C = v;
                            try {
                                C()
                            } catch (V) {
                                zt(r, T, V)
                            }
                        }
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (V) {
            zt(e, e.return, V)
        }
    }
    function Tm(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                dh(e, n)
            } catch (l) {
                zt(t, t.return, l)
            }
        }
    }
    function wm(t, e, n) {
        n.props = Ei(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            zt(t, e, l)
        }
    }
    function dl(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(l) : n.current = l
            }
        } catch (r) {
            zt(t, e, r)
        }
    }
    function ln(t, e) {
        var n = t.ref
          , l = t.refCleanup;
        if (n !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (r) {
                    zt(t, e, r)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (r) {
                    zt(t, e, r)
                }
            else
                n.current = null
    }
    function Am(t) {
        var e = t.type
          , n = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break t;
            case "img":
                n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        } catch (r) {
            zt(t, t.return, r)
        }
    }
    function Mu(t, e, n) {
        try {
            var l = t.stateNode;
            t1(l, t.type, n, e),
            l[me] = e
        } catch (r) {
            zt(t, t.return, r)
        }
    }
    function Em(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Fn(t.type) || t.tag === 4
    }
    function ju(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Em(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Fn(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Cu(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = fn));
        else if (l !== 4 && (l === 27 && Fn(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Cu(t, e, n),
            t = t.sibling; t !== null; )
                Cu(t, e, n),
                t = t.sibling
    }
    function ks(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (l !== 4 && (l === 27 && Fn(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (ks(t, e, n),
            t = t.sibling; t !== null; )
                ks(t, e, n),
                t = t.sibling
    }
    function Mm(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var l = t.type, r = e.attributes; r.length; )
                e.removeAttributeNode(r[0]);
            ue(e, l, n),
            e[le] = t,
            e[me] = n
        } catch (u) {
            zt(t, t.return, u)
        }
    }
    var Sn = !1
      , Pt = !1
      , Du = !1
      , jm = typeof WeakSet == "function" ? WeakSet : Set
      , ie = null;
    function Ox(t, e) {
        if (t = t.containerInfo,
        Pu = so,
        t = kd(t),
        Tr(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var r = l.anchorOffset
                          , u = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var h = 0
                          , v = -1
                          , T = -1
                          , C = 0
                          , V = 0
                          , k = t
                          , N = null;
                        e: for (; ; ) {
                            for (var R; k !== n || r !== 0 && k.nodeType !== 3 || (v = h + r),
                            k !== u || l !== 0 && k.nodeType !== 3 || (T = h + l),
                            k.nodeType === 3 && (h += k.nodeValue.length),
                            (R = k.firstChild) !== null; )
                                N = k,
                                k = R;
                            for (; ; ) {
                                if (k === t)
                                    break e;
                                if (N === n && ++C === r && (v = h),
                                N === u && ++V === l && (T = h),
                                (R = k.nextSibling) !== null)
                                    break;
                                k = N,
                                N = k.parentNode
                            }
                            k = R
                        }
                        n = v === -1 || T === -1 ? null : {
                            start: v,
                            end: T
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Wu = {
            focusedElem: t,
            selectionRange: n
        },
        so = !1,
        ie = e; ie !== null; )
            if (e = ie,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                ie = t;
            else
                for (; ie !== null; ) {
                    switch (e = ie,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (n = 0; n < t.length; n++)
                                r = t[n],
                                r.ref.impl = r.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            n = e,
                            r = u.memoizedProps,
                            u = u.memoizedState,
                            l = n.stateNode;
                            try {
                                var tt = Ei(n.type, r);
                                t = l.getSnapshotBeforeUpdate(tt, u),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (ct) {
                                zt(n, n.return, ct)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                tc(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    tc(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(s(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        ie = t;
                        break
                    }
                    ie = e.return
                }
    }
    function Cm(t, e, n) {
        var l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            wn(t, n),
            l & 4 && fl(5, n);
            break;
        case 1:
            if (wn(t, n),
            l & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (h) {
                        zt(n, n.return, h)
                    }
                else {
                    var r = Ei(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (h) {
                        zt(n, n.return, h)
                    }
                }
            l & 64 && Tm(n),
            l & 512 && dl(n, n.return);
            break;
        case 3:
            if (wn(t, n),
            l & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    dh(t, e)
                } catch (h) {
                    zt(n, n.return, h)
                }
            }
            break;
        case 27:
            e === null && l & 4 && Mm(n);
        case 26:
        case 5:
            wn(t, n),
            e === null && l & 4 && Am(n),
            l & 512 && dl(n, n.return);
            break;
        case 12:
            wn(t, n);
            break;
        case 31:
            wn(t, n),
            l & 4 && zm(t, n);
            break;
        case 13:
            wn(t, n),
            l & 4 && Rm(t, n),
            l & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = Yx.bind(null, n),
            r1(t, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || Sn,
            !l) {
                e = e !== null && e.memoizedState !== null || Pt,
                r = Sn;
                var u = Pt;
                Sn = l,
                (Pt = e) && !u ? An(t, n, (n.subtreeFlags & 8772) !== 0) : wn(t, n),
                Sn = r,
                Pt = u
            }
            break;
        case 30:
            break;
        default:
            wn(t, n)
        }
    }
    function Dm(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Dm(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && lr(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Ht = null
      , ge = !1;
    function Tn(t, e, n) {
        for (n = n.child; n !== null; )
            Nm(t, e, n),
            n = n.sibling
    }
    function Nm(t, e, n) {
        if (we && typeof we.onCommitFiberUnmount == "function")
            try {
                we.onCommitFiberUnmount(Ba, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Pt || ln(n, e),
            Tn(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Pt || ln(n, e);
            var l = Ht
              , r = ge;
            Fn(n.type) && (Ht = n.stateNode,
            ge = !1),
            Tn(t, e, n),
            Sl(n.stateNode),
            Ht = l,
            ge = r;
            break;
        case 5:
            Pt || ln(n, e);
        case 6:
            if (l = Ht,
            r = ge,
            Ht = null,
            Tn(t, e, n),
            Ht = l,
            ge = r,
            Ht !== null)
                if (ge)
                    try {
                        (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(n.stateNode)
                    } catch (u) {
                        zt(n, e, u)
                    }
                else
                    try {
                        Ht.removeChild(n.stateNode)
                    } catch (u) {
                        zt(n, e, u)
                    }
            break;
        case 18:
            Ht !== null && (ge ? (t = Ht,
            Tp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            Ta(t)) : Tp(Ht, n.stateNode));
            break;
        case 4:
            l = Ht,
            r = ge,
            Ht = n.stateNode.containerInfo,
            ge = !0,
            Tn(t, e, n),
            Ht = l,
            ge = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Yn(2, n, e),
            Pt || Yn(4, n, e),
            Tn(t, e, n);
            break;
        case 1:
            Pt || (ln(n, e),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function" && wm(n, e, l)),
            Tn(t, e, n);
            break;
        case 21:
            Tn(t, e, n);
            break;
        case 22:
            Pt = (l = Pt) || n.memoizedState !== null,
            Tn(t, e, n),
            Pt = l;
            break;
        default:
            Tn(t, e, n)
        }
    }
    function zm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Ta(t)
            } catch (n) {
                zt(e, e.return, n)
            }
        }
    }
    function Rm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ta(t)
            } catch (n) {
                zt(e, e.return, n)
            }
    }
    function Vx(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new jm),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new jm),
            e;
        default:
            throw Error(s(435, t.tag))
        }
    }
    function Hs(t, e) {
        var n = Vx(t);
        e.forEach(function(l) {
            if (!n.has(l)) {
                n.add(l);
                var r = Gx.bind(null, t, l);
                l.then(r, r)
            }
        })
    }
    function ye(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var r = n[l]
                  , u = t
                  , h = e
                  , v = h;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (Fn(v.type)) {
                            Ht = v.stateNode,
                            ge = !1;
                            break t
                        }
                        break;
                    case 5:
                        Ht = v.stateNode,
                        ge = !1;
                        break t;
                    case 3:
                    case 4:
                        Ht = v.stateNode.containerInfo,
                        ge = !0;
                        break t
                    }
                    v = v.return
                }
                if (Ht === null)
                    throw Error(s(160));
                Nm(u, h, r),
                Ht = null,
                ge = !1,
                u = r.alternate,
                u !== null && (u.return = null),
                r.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                Om(e, t),
                e = e.sibling
    }
    var Je = null;
    function Om(t, e) {
        var n = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ye(e, t),
            ve(t),
            l & 4 && (Yn(3, t, t.return),
            fl(3, t),
            Yn(5, t, t.return));
            break;
        case 1:
            ye(e, t),
            ve(t),
            l & 512 && (Pt || n === null || ln(n, n.return)),
            l & 64 && Sn && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var r = Je;
            if (ye(e, t),
            ve(t),
            l & 512 && (Pt || n === null || ln(n, n.return)),
            l & 4) {
                var u = n !== null ? n.memoizedState : null;
                if (l = t.memoizedState,
                n === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                n = t.memoizedProps,
                                r = r.ownerDocument || r;
                                e: switch (l) {
                                case "title":
                                    u = r.getElementsByTagName("title")[0],
                                    (!u || u[ka] || u[le] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(l),
                                    r.head.insertBefore(u, r.querySelector("head > title"))),
                                    ue(u, l, n),
                                    u[le] = t,
                                    ne(u),
                                    l = u;
                                    break t;
                                case "link":
                                    var h = Op("link", "href", r).get(l + (n.href || ""));
                                    if (h) {
                                        for (var v = 0; v < h.length; v++)
                                            if (u = h[v],
                                            u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                h.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = r.createElement(l),
                                    ue(u, l, n),
                                    r.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (h = Op("meta", "content", r).get(l + (n.content || ""))) {
                                        for (v = 0; v < h.length; v++)
                                            if (u = h[v],
                                            u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                h.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = r.createElement(l),
                                    ue(u, l, n),
                                    r.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(s(468, l))
                                }
                                u[le] = t,
                                ne(u),
                                l = u
                            }
                            t.stateNode = l
                        } else
                            Vp(r, t.type, t.stateNode);
                    else
                        t.stateNode = Rp(r, l, t.memoizedProps);
                else
                    u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : u.count--,
                    l === null ? Vp(r, t.type, t.stateNode) : Rp(r, l, t.memoizedProps)) : l === null && t.stateNode !== null && Mu(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            ye(e, t),
            ve(t),
            l & 512 && (Pt || n === null || ln(n, n.return)),
            n !== null && l & 4 && Mu(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (ye(e, t),
            ve(t),
            l & 512 && (Pt || n === null || ln(n, n.return)),
            t.flags & 32) {
                r = t.stateNode;
                try {
                    Qi(r, "")
                } catch (tt) {
                    zt(t, t.return, tt)
                }
            }
            l & 4 && t.stateNode != null && (r = t.memoizedProps,
            Mu(t, r, n !== null ? n.memoizedProps : r)),
            l & 1024 && (Du = !0);
            break;
        case 6:
            if (ye(e, t),
            ve(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(s(162));
                l = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = l
                } catch (tt) {
                    zt(t, t.return, tt)
                }
            }
            break;
        case 3:
            if (no = null,
            r = Je,
            Je = to(e.containerInfo),
            ye(e, t),
            Je = r,
            ve(t),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ta(e.containerInfo)
                } catch (tt) {
                    zt(t, t.return, tt)
                }
            Du && (Du = !1,
            Vm(t));
            break;
        case 4:
            l = Je,
            Je = to(t.stateNode.containerInfo),
            ye(e, t),
            ve(t),
            Je = l;
            break;
        case 12:
            ye(e, t),
            ve(t);
            break;
        case 31:
            ye(e, t),
            ve(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Hs(t, l)));
            break;
        case 13:
            ye(e, t),
            ve(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ys = Te()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Hs(t, l)));
            break;
        case 22:
            r = t.memoizedState !== null;
            var T = n !== null && n.memoizedState !== null
              , C = Sn
              , V = Pt;
            if (Sn = C || r,
            Pt = V || T,
            ye(e, t),
            Pt = V,
            Sn = C,
            ve(t),
            l & 8192)
                t: for (e = t.stateNode,
                e._visibility = r ? e._visibility & -2 : e._visibility | 1,
                r && (n === null || T || Sn || Pt || Mi(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            T = n = e;
                            try {
                                if (u = T.stateNode,
                                r)
                                    h = u.style,
                                    typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    v = T.stateNode;
                                    var k = T.memoizedProps.style
                                      , N = k != null && k.hasOwnProperty("display") ? k.display : null;
                                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim()
                                }
                            } catch (tt) {
                                zt(T, T.return, tt)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = r ? "" : T.memoizedProps
                            } catch (tt) {
                                zt(T, T.return, tt)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            T = e;
                            try {
                                var R = T.stateNode;
                                r ? wp(R, !0) : wp(T.stateNode, !1)
                            } catch (tt) {
                                zt(T, T.return, tt)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (n = l.retryQueue,
            n !== null && (l.retryQueue = null,
            Hs(t, n))));
            break;
        case 19:
            ye(e, t),
            ve(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Hs(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ye(e, t),
            ve(t)
        }
    }
    function ve(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, l = t.return; l !== null; ) {
                    if (Em(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null)
                    throw Error(s(160));
                switch (n.tag) {
                case 27:
                    var r = n.stateNode
                      , u = ju(t);
                    ks(t, u, r);
                    break;
                case 5:
                    var h = n.stateNode;
                    n.flags & 32 && (Qi(h, ""),
                    n.flags &= -33);
                    var v = ju(t);
                    ks(t, v, h);
                    break;
                case 3:
                case 4:
                    var T = n.stateNode.containerInfo
                      , C = ju(t);
                    Cu(t, C, T);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (V) {
                zt(t, t.return, V)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Vm(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Vm(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function wn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Cm(t, e.alternate, e),
                e = e.sibling
    }
    function Mi(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Yn(4, e, e.return),
                Mi(e);
                break;
            case 1:
                ln(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && wm(e, e.return, n),
                Mi(e);
                break;
            case 27:
                Sl(e.stateNode);
            case 26:
            case 5:
                ln(e, e.return),
                Mi(e);
                break;
            case 22:
                e.memoizedState === null && Mi(e);
                break;
            case 30:
                Mi(e);
                break;
            default:
                Mi(e)
            }
            t = t.sibling
        }
    }
    function An(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , r = t
              , u = e
              , h = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                An(r, u, n),
                fl(4, u);
                break;
            case 1:
                if (An(r, u, n),
                l = u,
                r = l.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (C) {
                        zt(l, l.return, C)
                    }
                if (l = u,
                r = l.updateQueue,
                r !== null) {
                    var v = l.stateNode;
                    try {
                        var T = r.shared.hiddenCallbacks;
                        if (T !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < T.length; r++)
                                fh(T[r], v)
                    } catch (C) {
                        zt(l, l.return, C)
                    }
                }
                n && h & 64 && Tm(u),
                dl(u, u.return);
                break;
            case 27:
                Mm(u);
            case 26:
            case 5:
                An(r, u, n),
                n && l === null && h & 4 && Am(u),
                dl(u, u.return);
                break;
            case 12:
                An(r, u, n);
                break;
            case 31:
                An(r, u, n),
                n && h & 4 && zm(r, u);
                break;
            case 13:
                An(r, u, n),
                n && h & 4 && Rm(r, u);
                break;
            case 22:
                u.memoizedState === null && An(r, u, n),
                dl(u, u.return);
                break;
            case 30:
                break;
            default:
                An(r, u, n)
            }
            e = e.sibling
        }
    }
    function Nu(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && $a(n))
    }
    function zu(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && $a(t))
    }
    function Fe(t, e, n, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                _m(t, e, n, l),
                e = e.sibling
    }
    function _m(t, e, n, l) {
        var r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Fe(t, e, n, l),
            r & 2048 && fl(9, e);
            break;
        case 1:
            Fe(t, e, n, l);
            break;
        case 3:
            Fe(t, e, n, l),
            r & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && $a(t)));
            break;
        case 12:
            if (r & 2048) {
                Fe(t, e, n, l),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , h = u.id
                      , v = u.onPostCommit;
                    typeof v == "function" && v(h, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (T) {
                    zt(e, e.return, T)
                }
            } else
                Fe(t, e, n, l);
            break;
        case 31:
            Fe(t, e, n, l);
            break;
        case 13:
            Fe(t, e, n, l);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            h = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? Fe(t, e, n, l) : hl(t, e) : u._visibility & 2 ? Fe(t, e, n, l) : (u._visibility |= 2,
            fa(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            r & 2048 && Nu(h, e);
            break;
        case 24:
            Fe(t, e, n, l),
            r & 2048 && zu(e.alternate, e);
            break;
        default:
            Fe(t, e, n, l)
        }
    }
    function fa(t, e, n, l, r) {
        for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var u = t
              , h = e
              , v = n
              , T = l
              , C = h.flags;
            switch (h.tag) {
            case 0:
            case 11:
            case 15:
                fa(u, h, v, T, r),
                fl(8, h);
                break;
            case 23:
                break;
            case 22:
                var V = h.stateNode;
                h.memoizedState !== null ? V._visibility & 2 ? fa(u, h, v, T, r) : hl(u, h) : (V._visibility |= 2,
                fa(u, h, v, T, r)),
                r && C & 2048 && Nu(h.alternate, h);
                break;
            case 24:
                fa(u, h, v, T, r),
                r && C & 2048 && zu(h.alternate, h);
                break;
            default:
                fa(u, h, v, T, r)
            }
            e = e.sibling
        }
    }
    function hl(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , l = e
                  , r = l.flags;
                switch (l.tag) {
                case 22:
                    hl(n, l),
                    r & 2048 && Nu(l.alternate, l);
                    break;
                case 24:
                    hl(n, l),
                    r & 2048 && zu(l.alternate, l);
                    break;
                default:
                    hl(n, l)
                }
                e = e.sibling
            }
    }
    var ml = 8192;
    function da(t, e, n) {
        if (t.subtreeFlags & ml)
            for (t = t.child; t !== null; )
                Bm(t, e, n),
                t = t.sibling
    }
    function Bm(t, e, n) {
        switch (t.tag) {
        case 26:
            da(t, e, n),
            t.flags & ml && t.memoizedState !== null && x1(n, Je, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            da(t, e, n);
            break;
        case 3:
        case 4:
            var l = Je;
            Je = to(t.stateNode.containerInfo),
            da(t, e, n),
            Je = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = ml,
            ml = 16777216,
            da(t, e, n),
            ml = l) : da(t, e, n));
            break;
        default:
            da(t, e, n)
        }
    }
    function Um(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function pl(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    ie = l,
                    km(l, t)
                }
            Um(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Lm(t),
                t = t.sibling
    }
    function Lm(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            pl(t),
            t.flags & 2048 && Yn(9, t, t.return);
            break;
        case 3:
            pl(t);
            break;
        case 12:
            pl(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            qs(t)) : pl(t);
            break;
        default:
            pl(t)
        }
    }
    function qs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    ie = l,
                    km(l, t)
                }
            Um(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Yn(8, e, e.return),
                qs(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                qs(e));
                break;
            default:
                qs(e)
            }
            t = t.sibling
        }
    }
    function km(t, e) {
        for (; ie !== null; ) {
            var n = ie;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Yn(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                $a(n.memoizedState.cache)
            }
            if (l = n.child,
            l !== null)
                l.return = n,
                ie = l;
            else
                t: for (n = t; ie !== null; ) {
                    l = ie;
                    var r = l.sibling
                      , u = l.return;
                    if (Dm(l),
                    l === n) {
                        ie = null;
                        break t
                    }
                    if (r !== null) {
                        r.return = u,
                        ie = r;
                        break t
                    }
                    ie = u
                }
        }
    }
    var _x = {
        getCacheForType: function(t) {
            var e = oe(Kt)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        },
        cacheSignal: function() {
            return oe(Kt).controller.signal
        }
    }
      , Bx = typeof WeakMap == "function" ? WeakMap : Map
      , jt = 0
      , _t = null
      , bt = null
      , Tt = 0
      , Nt = 0
      , De = null
      , Gn = !1
      , ha = !1
      , Ru = !1
      , En = 0
      , Yt = 0
      , Xn = 0
      , ji = 0
      , Ou = 0
      , Ne = 0
      , ma = 0
      , gl = null
      , be = null
      , Vu = !1
      , Ys = 0
      , Hm = 0
      , Gs = 1 / 0
      , Xs = null
      , Qn = null
      , $t = 0
      , Zn = null
      , pa = null
      , Mn = 0
      , _u = 0
      , Bu = null
      , qm = null
      , yl = 0
      , Uu = null;
    function ze() {
        return (jt & 2) !== 0 && Tt !== 0 ? Tt & -Tt : z.T !== null ? Gu() : id()
    }
    function Ym() {
        if (Ne === 0)
            if ((Tt & 536870912) === 0 || At) {
                var t = $l;
                $l <<= 1,
                ($l & 3932160) === 0 && ($l = 262144),
                Ne = t
            } else
                Ne = 536870912;
        return t = je.current,
        t !== null && (t.flags |= 32),
        Ne
    }
    function xe(t, e, n) {
        (t === _t && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null) && (ga(t, 0),
        Kn(t, Tt, Ne, !1)),
        La(t, n),
        ((jt & 2) === 0 || t !== _t) && (t === _t && ((jt & 2) === 0 && (ji |= n),
        Yt === 4 && Kn(t, Tt, Ne, !1)),
        sn(t))
    }
    function Gm(t, e, n) {
        if ((jt & 6) !== 0)
            throw Error(s(327));
        var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ua(t, e)
          , r = l ? kx(t, e) : ku(t, e, !0)
          , u = l;
        do {
            if (r === 0) {
                ha && !l && Kn(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                u && !Ux(n)) {
                    r = ku(t, e, !1),
                    u = !1;
                    continue
                }
                if (r === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var h = 0;
                    else
                        h = t.pendingLanes & -536870913,
                        h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        e = h;
                        t: {
                            var v = t;
                            r = gl;
                            var T = v.current.memoizedState.isDehydrated;
                            if (T && (ga(v, h).flags |= 256),
                            h = ku(v, h, !1),
                            h !== 2) {
                                if (Ru && !T) {
                                    v.errorRecoveryDisabledLanes |= u,
                                    ji |= u,
                                    r = 4;
                                    break t
                                }
                                u = be,
                                be = r,
                                u !== null && (be === null ? be = u : be.push.apply(be, u))
                            }
                            r = h
                        }
                        if (u = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    ga(t, 0),
                    Kn(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    u = r,
                    u) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Kn(l, e, Ne, !Gn);
                        break t;
                    case 2:
                        be = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(s(329))
                    }
                    if ((e & 62914560) === e && (r = Ys + 300 - Te(),
                    10 < r)) {
                        if (Kn(l, e, Ne, !Gn),
                        ts(l, 0, !0) !== 0)
                            break t;
                        Mn = e,
                        l.timeoutHandle = xp(Xm.bind(null, l, n, be, Xs, Vu, e, Ne, ji, ma, Gn, u, "Throttled", -0, 0), r);
                        break t
                    }
                    Xm(l, n, be, Xs, Vu, e, Ne, ji, ma, Gn, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        sn(t)
    }
    function Xm(t, e, n, l, r, u, h, v, T, C, V, k, N, R) {
        if (t.timeoutHandle = -1,
        k = e.subtreeFlags,
        k & 8192 || (k & 16785408) === 16785408) {
            k = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: fn
            },
            Bm(e, u, k);
            var tt = (u & 62914560) === u ? Ys - Te() : (u & 4194048) === u ? Hm - Te() : 0;
            if (tt = S1(k, tt),
            tt !== null) {
                Mn = u,
                t.cancelPendingCommit = tt($m.bind(null, t, e, u, n, l, r, h, v, T, V, k, null, N, R)),
                Kn(t, u, h, !C);
                return
            }
        }
        $m(t, e, u, n, l, r, h, v, T)
    }
    function Ux(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var r = n[l]
                      , u = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Ee(u(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function Kn(t, e, n, l) {
        e &= ~Ou,
        e &= ~ji,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var r = e; 0 < r; ) {
            var u = 31 - Ae(r)
              , h = 1 << u;
            l[u] = -1,
            r &= ~h
        }
        n !== 0 && td(t, n, e)
    }
    function Qs() {
        return (jt & 6) === 0 ? (vl(0),
        !1) : !0
    }
    function Lu() {
        if (bt !== null) {
            if (Nt === 0)
                var t = bt.return;
            else
                t = bt,
                pn = vi = null,
                tu(t),
                sa = null,
                tl = 0,
                t = bt;
            for (; t !== null; )
                Sm(t.alternate, t),
                t = t.return;
            bt = null
        }
    }
    function ga(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        i1(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        Mn = 0,
        Lu(),
        _t = t,
        bt = n = hn(t.current, null),
        Tt = e,
        Nt = 0,
        De = null,
        Gn = !1,
        ha = Ua(t, e),
        Ru = !1,
        ma = Ne = Ou = ji = Xn = Yt = 0,
        be = gl = null,
        Vu = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var r = 31 - Ae(l)
                  , u = 1 << r;
                e |= t[r],
                l &= ~u
            }
        return En = e,
        ds(),
        n
    }
    function Qm(t, e) {
        mt = null,
        z.H = rl,
        e === la || e === xs ? (e = oh(),
        Nt = 3) : e === Yr ? (e = oh(),
        Nt = 4) : Nt = e === gu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        De = e,
        bt === null && (Yt = 1,
        Vs(t, Le(e, t.current)))
    }
    function Zm() {
        var t = je.current;
        return t === null ? !0 : (Tt & 4194048) === Tt ? Ye === null : (Tt & 62914560) === Tt || (Tt & 536870912) !== 0 ? t === Ye : !1
    }
    function Km() {
        var t = z.H;
        return z.H = rl,
        t === null ? rl : t
    }
    function Jm() {
        var t = z.A;
        return z.A = _x,
        t
    }
    function Zs() {
        Yt = 4,
        Gn || (Tt & 4194048) !== Tt && je.current !== null || (ha = !0),
        (Xn & 134217727) === 0 && (ji & 134217727) === 0 || _t === null || Kn(_t, Tt, Ne, !1)
    }
    function ku(t, e, n) {
        var l = jt;
        jt |= 2;
        var r = Km()
          , u = Jm();
        (_t !== t || Tt !== e) && (Xs = null,
        ga(t, e)),
        e = !1;
        var h = Yt;
        t: do
            try {
                if (Nt !== 0 && bt !== null) {
                    var v = bt
                      , T = De;
                    switch (Nt) {
                    case 8:
                        Lu(),
                        h = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        je.current === null && (e = !0);
                        var C = Nt;
                        if (Nt = 0,
                        De = null,
                        ya(t, v, T, C),
                        n && ha) {
                            h = 0;
                            break t
                        }
                        break;
                    default:
                        C = Nt,
                        Nt = 0,
                        De = null,
                        ya(t, v, T, C)
                    }
                }
                Lx(),
                h = Yt;
                break
            } catch (V) {
                Qm(t, V)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        pn = vi = null,
        jt = l,
        z.H = r,
        z.A = u,
        bt === null && (_t = null,
        Tt = 0,
        ds()),
        h
    }
    function Lx() {
        for (; bt !== null; )
            Fm(bt)
    }
    function kx(t, e) {
        var n = jt;
        jt |= 2;
        var l = Km()
          , r = Jm();
        _t !== t || Tt !== e ? (Xs = null,
        Gs = Te() + 500,
        ga(t, e)) : ha = Ua(t, e);
        t: do
            try {
                if (Nt !== 0 && bt !== null) {
                    e = bt;
                    var u = De;
                    e: switch (Nt) {
                    case 1:
                        Nt = 0,
                        De = null,
                        ya(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (lh(u)) {
                            Nt = 0,
                            De = null,
                            Pm(e);
                            break
                        }
                        e = function() {
                            Nt !== 2 && Nt !== 9 || _t !== t || (Nt = 7),
                            sn(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        Nt = 7;
                        break t;
                    case 4:
                        Nt = 5;
                        break t;
                    case 7:
                        lh(u) ? (Nt = 0,
                        De = null,
                        Pm(e)) : (Nt = 0,
                        De = null,
                        ya(t, e, u, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (bt.tag) {
                        case 26:
                            h = bt.memoizedState;
                        case 5:
                        case 27:
                            var v = bt;
                            if (h ? _p(h) : v.stateNode.complete) {
                                Nt = 0,
                                De = null;
                                var T = v.sibling;
                                if (T !== null)
                                    bt = T;
                                else {
                                    var C = v.return;
                                    C !== null ? (bt = C,
                                    Ks(C)) : bt = null
                                }
                                break e
                            }
                        }
                        Nt = 0,
                        De = null,
                        ya(t, e, u, 5);
                        break;
                    case 6:
                        Nt = 0,
                        De = null,
                        ya(t, e, u, 6);
                        break;
                    case 8:
                        Lu(),
                        Yt = 6;
                        break t;
                    default:
                        throw Error(s(462))
                    }
                }
                Hx();
                break
            } catch (V) {
                Qm(t, V)
            }
        while (!0);
        return pn = vi = null,
        z.H = l,
        z.A = r,
        jt = n,
        bt !== null ? 0 : (_t = null,
        Tt = 0,
        ds(),
        Yt)
    }
    function Hx() {
        for (; bt !== null && !ub(); )
            Fm(bt)
    }
    function Fm(t) {
        var e = bm(t.alternate, t, En);
        t.memoizedProps = t.pendingProps,
        e === null ? Ks(t) : bt = e
    }
    function Pm(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = hm(n, e, e.pendingProps, e.type, void 0, Tt);
            break;
        case 11:
            e = hm(n, e, e.pendingProps, e.type.render, e.ref, Tt);
            break;
        case 5:
            tu(e);
        default:
            Sm(n, e),
            e = bt = Jd(e, En),
            e = bm(n, e, En)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? Ks(t) : bt = e
    }
    function ya(t, e, n, l) {
        pn = vi = null,
        tu(e),
        sa = null,
        tl = 0;
        var r = e.return;
        try {
            if (Cx(t, r, e, n, Tt)) {
                Yt = 1,
                Vs(t, Le(n, t.current)),
                bt = null;
                return
            }
        } catch (u) {
            if (r !== null)
                throw bt = r,
                u;
            Yt = 1,
            Vs(t, Le(n, t.current)),
            bt = null;
            return
        }
        e.flags & 32768 ? (At || l === 1 ? t = !0 : ha || (Tt & 536870912) !== 0 ? t = !1 : (Gn = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = je.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        Wm(e, t)) : Ks(e)
    }
    function Ks(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Wm(e, Gn);
                return
            }
            t = e.return;
            var n = zx(e.alternate, e, En);
            if (n !== null) {
                bt = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                bt = e;
                return
            }
            bt = e = t
        } while (e !== null);
        Yt === 0 && (Yt = 5)
    }
    function Wm(t, e) {
        do {
            var n = Rx(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                bt = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                bt = t;
                return
            }
            bt = t = n
        } while (t !== null);
        Yt = 6,
        bt = null
    }
    function $m(t, e, n, l, r, u, h, v, T) {
        t.cancelPendingCommit = null;
        do
            Js();
        while ($t !== 0);
        if ((jt & 6) !== 0)
            throw Error(s(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(s(177));
            if (u = e.lanes | e.childLanes,
            u |= jr,
            bb(t, n, u, h, v, T),
            t === _t && (bt = _t = null,
            Tt = 0),
            pa = e,
            Zn = t,
            Mn = n,
            _u = u,
            Bu = r,
            qm = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Xx(Pl, function() {
                return ip(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = z.T,
                z.T = null,
                r = Z.p,
                Z.p = 2,
                h = jt,
                jt |= 4;
                try {
                    Ox(t, e, n)
                } finally {
                    jt = h,
                    Z.p = r,
                    z.T = l
                }
            }
            $t = 1,
            Im(),
            tp(),
            ep()
        }
    }
    function Im() {
        if ($t === 1) {
            $t = 0;
            var t = Zn
              , e = pa
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = z.T,
                z.T = null;
                var l = Z.p;
                Z.p = 2;
                var r = jt;
                jt |= 4;
                try {
                    Om(e, t);
                    var u = Wu
                      , h = kd(t.containerInfo)
                      , v = u.focusedElem
                      , T = u.selectionRange;
                    if (h !== v && v && v.ownerDocument && Ld(v.ownerDocument.documentElement, v)) {
                        if (T !== null && Tr(v)) {
                            var C = T.start
                              , V = T.end;
                            if (V === void 0 && (V = C),
                            "selectionStart"in v)
                                v.selectionStart = C,
                                v.selectionEnd = Math.min(V, v.value.length);
                            else {
                                var k = v.ownerDocument || document
                                  , N = k && k.defaultView || window;
                                if (N.getSelection) {
                                    var R = N.getSelection()
                                      , tt = v.textContent.length
                                      , ct = Math.min(T.start, tt)
                                      , Vt = T.end === void 0 ? ct : Math.min(T.end, tt);
                                    !R.extend && ct > Vt && (h = Vt,
                                    Vt = ct,
                                    ct = h);
                                    var M = Ud(v, ct)
                                      , A = Ud(v, Vt);
                                    if (M && A && (R.rangeCount !== 1 || R.anchorNode !== M.node || R.anchorOffset !== M.offset || R.focusNode !== A.node || R.focusOffset !== A.offset)) {
                                        var j = k.createRange();
                                        j.setStart(M.node, M.offset),
                                        R.removeAllRanges(),
                                        ct > Vt ? (R.addRange(j),
                                        R.extend(A.node, A.offset)) : (j.setEnd(A.node, A.offset),
                                        R.addRange(j))
                                    }
                                }
                            }
                        }
                        for (k = [],
                        R = v; R = R.parentNode; )
                            R.nodeType === 1 && k.push({
                                element: R,
                                left: R.scrollLeft,
                                top: R.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < k.length; v++) {
                            var B = k[v];
                            B.element.scrollLeft = B.left,
                            B.element.scrollTop = B.top
                        }
                    }
                    so = !!Pu,
                    Wu = Pu = null
                } finally {
                    jt = r,
                    Z.p = l,
                    z.T = n
                }
            }
            t.current = e,
            $t = 2
        }
    }
    function tp() {
        if ($t === 2) {
            $t = 0;
            var t = Zn
              , e = pa
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = z.T,
                z.T = null;
                var l = Z.p;
                Z.p = 2;
                var r = jt;
                jt |= 4;
                try {
                    Cm(t, e.alternate, e)
                } finally {
                    jt = r,
                    Z.p = l,
                    z.T = n
                }
            }
            $t = 3
        }
    }
    function ep() {
        if ($t === 4 || $t === 3) {
            $t = 0,
            cb();
            var t = Zn
              , e = pa
              , n = Mn
              , l = qm;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? $t = 5 : ($t = 0,
            pa = Zn = null,
            np(t, t.pendingLanes));
            var r = t.pendingLanes;
            if (r === 0 && (Qn = null),
            ir(n),
            e = e.stateNode,
            we && typeof we.onCommitFiberRoot == "function")
                try {
                    we.onCommitFiberRoot(Ba, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = z.T,
                r = Z.p,
                Z.p = 2,
                z.T = null;
                try {
                    for (var u = t.onRecoverableError, h = 0; h < l.length; h++) {
                        var v = l[h];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    z.T = e,
                    Z.p = r
                }
            }
            (Mn & 3) !== 0 && Js(),
            sn(t),
            r = t.pendingLanes,
            (n & 261930) !== 0 && (r & 42) !== 0 ? t === Uu ? yl++ : (yl = 0,
            Uu = t) : yl = 0,
            vl(0)
        }
    }
    function np(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        $a(e)))
    }
    function Js() {
        return Im(),
        tp(),
        ep(),
        ip()
    }
    function ip() {
        if ($t !== 5)
            return !1;
        var t = Zn
          , e = _u;
        _u = 0;
        var n = ir(Mn)
          , l = z.T
          , r = Z.p;
        try {
            Z.p = 32 > n ? 32 : n,
            z.T = null,
            n = Bu,
            Bu = null;
            var u = Zn
              , h = Mn;
            if ($t = 0,
            pa = Zn = null,
            Mn = 0,
            (jt & 6) !== 0)
                throw Error(s(331));
            var v = jt;
            if (jt |= 4,
            Lm(u.current),
            _m(u, u.current, h, n),
            jt = v,
            vl(0, !1),
            we && typeof we.onPostCommitFiberRoot == "function")
                try {
                    we.onPostCommitFiberRoot(Ba, u)
                } catch {}
            return !0
        } finally {
            Z.p = r,
            z.T = l,
            np(t, e)
        }
    }
    function ap(t, e, n) {
        e = Le(n, e),
        e = pu(t.stateNode, e, 2),
        t = kn(t, e, 2),
        t !== null && (La(t, 2),
        sn(t))
    }
    function zt(t, e, n) {
        if (t.tag === 3)
            ap(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    ap(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qn === null || !Qn.has(l))) {
                        t = Le(n, t),
                        n = lm(2),
                        l = kn(e, n, 2),
                        l !== null && (sm(n, l, e, t),
                        La(l, 2),
                        sn(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function Hu(t, e, n) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Bx;
            var r = new Set;
            l.set(e, r)
        } else
            r = l.get(e),
            r === void 0 && (r = new Set,
            l.set(e, r));
        r.has(n) || (Ru = !0,
        r.add(n),
        t = qx.bind(null, t, e, n),
        e.then(t, t))
    }
    function qx(t, e, n) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        _t === t && (Tt & n) === n && (Yt === 4 || Yt === 3 && (Tt & 62914560) === Tt && 300 > Te() - Ys ? (jt & 2) === 0 && ga(t, 0) : Ou |= n,
        ma === Tt && (ma = 0)),
        sn(t)
    }
    function lp(t, e) {
        e === 0 && (e = If()),
        t = pi(t, e),
        t !== null && (La(t, e),
        sn(t))
    }
    function Yx(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        lp(t, n)
    }
    function Gx(t, e) {
        var n = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(s(314))
        }
        l !== null && l.delete(e),
        lp(t, n)
    }
    function Xx(t, e) {
        return Io(t, e)
    }
    var Fs = null
      , va = null
      , qu = !1
      , Ps = !1
      , Yu = !1
      , Jn = 0;
    function sn(t) {
        t !== va && t.next === null && (va === null ? Fs = va = t : va = va.next = t),
        Ps = !0,
        qu || (qu = !0,
        Zx())
    }
    function vl(t, e) {
        if (!Yu && Ps) {
            Yu = !0;
            do
                for (var n = !1, l = Fs; l !== null; ) {
                    if (t !== 0) {
                        var r = l.pendingLanes;
                        if (r === 0)
                            var u = 0;
                        else {
                            var h = l.suspendedLanes
                              , v = l.pingedLanes;
                            u = (1 << 31 - Ae(42 | t) + 1) - 1,
                            u &= r & ~(h & ~v),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0,
                        up(l, u))
                    } else
                        u = Tt,
                        u = ts(l, l === _t ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (u & 3) === 0 || Ua(l, u) || (n = !0,
                        up(l, u));
                    l = l.next
                }
            while (n);
            Yu = !1
        }
    }
    function Qx() {
        sp()
    }
    function sp() {
        Ps = qu = !1;
        var t = 0;
        Jn !== 0 && n1() && (t = Jn);
        for (var e = Te(), n = null, l = Fs; l !== null; ) {
            var r = l.next
              , u = op(l, e);
            u === 0 ? (l.next = null,
            n === null ? Fs = r : n.next = r,
            r === null && (va = n)) : (n = l,
            (t !== 0 || (u & 3) !== 0) && (Ps = !0)),
            l = r
        }
        $t !== 0 && $t !== 5 || vl(t),
        Jn !== 0 && (Jn = 0)
    }
    function op(t, e) {
        for (var n = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var h = 31 - Ae(u)
              , v = 1 << h
              , T = r[h];
            T === -1 ? ((v & n) === 0 || (v & l) !== 0) && (r[h] = vb(v, e)) : T <= e && (t.expiredLanes |= v),
            u &= ~v
        }
        if (e = _t,
        n = Tt,
        n = ts(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        n === 0 || t === e && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && tr(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || Ua(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (l !== null && tr(l),
            ir(n)) {
            case 2:
            case 8:
                n = Wf;
                break;
            case 32:
                n = Pl;
                break;
            case 268435456:
                n = $f;
                break;
            default:
                n = Pl
            }
            return l = rp.bind(null, t),
            n = Io(n, l),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return l !== null && l !== null && tr(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function rp(t, e) {
        if ($t !== 0 && $t !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (Js() && t.callbackNode !== n)
            return null;
        var l = Tt;
        return l = ts(t, t === _t ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (Gm(t, l, e),
        op(t, Te()),
        t.callbackNode != null && t.callbackNode === n ? rp.bind(null, t) : null)
    }
    function up(t, e) {
        if (Js())
            return null;
        Gm(t, e, !0)
    }
    function Zx() {
        a1(function() {
            (jt & 6) !== 0 ? Io(Pf, Qx) : sp()
        })
    }
    function Gu() {
        if (Jn === 0) {
            var t = ia;
            t === 0 && (t = Wl,
            Wl <<= 1,
            (Wl & 261888) === 0 && (Wl = 256)),
            Jn = t
        }
        return Jn
    }
    function cp(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : as("" + t)
    }
    function fp(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function Kx(t, e, n, l, r) {
        if (e === "submit" && n && n.stateNode === r) {
            var u = cp((r[me] || null).action)
              , h = l.submitter;
            h && (e = (e = h[me] || null) ? cp(e.formAction) : h.getAttribute("formAction"),
            e !== null && (u = e,
            h = null));
            var v = new rs("action","action",null,l,r);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Jn !== 0) {
                                var T = h ? fp(r, h) : new FormData(r);
                                uu(n, {
                                    pending: !0,
                                    data: T,
                                    method: r.method,
                                    action: u
                                }, null, T)
                            }
                        } else
                            typeof u == "function" && (v.preventDefault(),
                            T = h ? fp(r, h) : new FormData(r),
                            uu(n, {
                                pending: !0,
                                data: T,
                                method: r.method,
                                action: u
                            }, u, T))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Xu = 0; Xu < Mr.length; Xu++) {
        var Qu = Mr[Xu]
          , Jx = Qu.toLowerCase()
          , Fx = Qu[0].toUpperCase() + Qu.slice(1);
        Ke(Jx, "on" + Fx)
    }
    Ke(Yd, "onAnimationEnd"),
    Ke(Gd, "onAnimationIteration"),
    Ke(Xd, "onAnimationStart"),
    Ke("dblclick", "onDoubleClick"),
    Ke("focusin", "onFocus"),
    Ke("focusout", "onBlur"),
    Ke(fx, "onTransitionRun"),
    Ke(dx, "onTransitionStart"),
    Ke(hx, "onTransitionCancel"),
    Ke(Qd, "onTransitionEnd"),
    Gi("onMouseEnter", ["mouseout", "mouseover"]),
    Gi("onMouseLeave", ["mouseout", "mouseover"]),
    Gi("onPointerEnter", ["pointerout", "pointerover"]),
    Gi("onPointerLeave", ["pointerout", "pointerover"]),
    fi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    fi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    fi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    fi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    fi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    fi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Px = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));
    function dp(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var l = t[n]
              , r = l.event;
            l = l.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var h = l.length - 1; 0 <= h; h--) {
                        var v = l[h]
                          , T = v.instance
                          , C = v.currentTarget;
                        if (v = v.listener,
                        T !== u && r.isPropagationStopped())
                            break t;
                        u = v,
                        r.currentTarget = C;
                        try {
                            u(r)
                        } catch (V) {
                            fs(V)
                        }
                        r.currentTarget = null,
                        u = T
                    }
                else
                    for (h = 0; h < l.length; h++) {
                        if (v = l[h],
                        T = v.instance,
                        C = v.currentTarget,
                        v = v.listener,
                        T !== u && r.isPropagationStopped())
                            break t;
                        u = v,
                        r.currentTarget = C;
                        try {
                            u(r)
                        } catch (V) {
                            fs(V)
                        }
                        r.currentTarget = null,
                        u = T
                    }
            }
        }
    }
    function xt(t, e) {
        var n = e[ar];
        n === void 0 && (n = e[ar] = new Set);
        var l = t + "__bubble";
        n.has(l) || (hp(e, t, 2, !1),
        n.add(l))
    }
    function Zu(t, e, n) {
        var l = 0;
        e && (l |= 4),
        hp(n, t, l, e)
    }
    var Ws = "_reactListening" + Math.random().toString(36).slice(2);
    function Ku(t) {
        if (!t[Ws]) {
            t[Ws] = !0,
            sd.forEach(function(n) {
                n !== "selectionchange" && (Px.has(n) || Zu(n, !1, t),
                Zu(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Ws] || (e[Ws] = !0,
            Zu("selectionchange", !1, e))
        }
    }
    function hp(t, e, n, l) {
        switch (Yp(e)) {
        case 2:
            var r = A1;
            break;
        case 8:
            r = E1;
            break;
        default:
            r = rc
        }
        n = r.bind(null, e, n, t),
        r = void 0,
        !hr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0),
        l ? r !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: r
        }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
            passive: r
        }) : t.addEventListener(e, n, !1)
    }
    function Ju(t, e, n, l, r) {
        var u = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var h = l.tag;
                if (h === 3 || h === 4) {
                    var v = l.stateNode.containerInfo;
                    if (v === r)
                        break;
                    if (h === 4)
                        for (h = l.return; h !== null; ) {
                            var T = h.tag;
                            if ((T === 3 || T === 4) && h.stateNode.containerInfo === r)
                                return;
                            h = h.return
                        }
                    for (; v !== null; ) {
                        if (h = Hi(v),
                        h === null)
                            return;
                        if (T = h.tag,
                        T === 5 || T === 6 || T === 26 || T === 27) {
                            l = u = h;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                l = l.return
            }
        vd(function() {
            var C = u
              , V = fr(n)
              , k = [];
            t: {
                var N = Zd.get(t);
                if (N !== void 0) {
                    var R = rs
                      , tt = t;
                    switch (t) {
                    case "keypress":
                        if (ss(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        R = Gb;
                        break;
                    case "focusin":
                        tt = "focus",
                        R = yr;
                        break;
                    case "focusout":
                        tt = "blur",
                        R = yr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        R = yr;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        R = Sd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        R = zb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        R = Zb;
                        break;
                    case Yd:
                    case Gd:
                    case Xd:
                        R = Vb;
                        break;
                    case Qd:
                        R = Jb;
                        break;
                    case "scroll":
                    case "scrollend":
                        R = Db;
                        break;
                    case "wheel":
                        R = Pb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        R = Bb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        R = wd;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        R = $b
                    }
                    var ct = (e & 4) !== 0
                      , Vt = !ct && (t === "scroll" || t === "scrollend")
                      , M = ct ? N !== null ? N + "Capture" : null : N;
                    ct = [];
                    for (var A = C, j; A !== null; ) {
                        var B = A;
                        if (j = B.stateNode,
                        B = B.tag,
                        B !== 5 && B !== 26 && B !== 27 || j === null || M === null || (B = qa(A, M),
                        B != null && ct.push(xl(A, B, j))),
                        Vt)
                            break;
                        A = A.return
                    }
                    0 < ct.length && (N = new R(N,tt,null,n,V),
                    k.push({
                        event: N,
                        listeners: ct
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (N = t === "mouseover" || t === "pointerover",
                    R = t === "mouseout" || t === "pointerout",
                    N && n !== cr && (tt = n.relatedTarget || n.fromElement) && (Hi(tt) || tt[ki]))
                        break t;
                    if ((R || N) && (N = V.window === V ? V : (N = V.ownerDocument) ? N.defaultView || N.parentWindow : window,
                    R ? (tt = n.relatedTarget || n.toElement,
                    R = C,
                    tt = tt ? Hi(tt) : null,
                    tt !== null && (Vt = d(tt),
                    ct = tt.tag,
                    tt !== Vt || ct !== 5 && ct !== 27 && ct !== 6) && (tt = null)) : (R = null,
                    tt = C),
                    R !== tt)) {
                        if (ct = Sd,
                        B = "onMouseLeave",
                        M = "onMouseEnter",
                        A = "mouse",
                        (t === "pointerout" || t === "pointerover") && (ct = wd,
                        B = "onPointerLeave",
                        M = "onPointerEnter",
                        A = "pointer"),
                        Vt = R == null ? N : Ha(R),
                        j = tt == null ? N : Ha(tt),
                        N = new ct(B,A + "leave",R,n,V),
                        N.target = Vt,
                        N.relatedTarget = j,
                        B = null,
                        Hi(V) === C && (ct = new ct(M,A + "enter",tt,n,V),
                        ct.target = j,
                        ct.relatedTarget = Vt,
                        B = ct),
                        Vt = B,
                        R && tt)
                            e: {
                                for (ct = Wx,
                                M = R,
                                A = tt,
                                j = 0,
                                B = M; B; B = ct(B))
                                    j++;
                                B = 0;
                                for (var ot = A; ot; ot = ct(ot))
                                    B++;
                                for (; 0 < j - B; )
                                    M = ct(M),
                                    j--;
                                for (; 0 < B - j; )
                                    A = ct(A),
                                    B--;
                                for (; j--; ) {
                                    if (M === A || A !== null && M === A.alternate) {
                                        ct = M;
                                        break e
                                    }
                                    M = ct(M),
                                    A = ct(A)
                                }
                                ct = null
                            }
                        else
                            ct = null;
                        R !== null && mp(k, N, R, ct, !1),
                        tt !== null && Vt !== null && mp(k, Vt, tt, ct, !0)
                    }
                }
                t: {
                    if (N = C ? Ha(C) : window,
                    R = N.nodeName && N.nodeName.toLowerCase(),
                    R === "select" || R === "input" && N.type === "file")
                        var Et = zd;
                    else if (Dd(N))
                        if (Rd)
                            Et = rx;
                        else {
                            Et = sx;
                            var st = lx
                        }
                    else
                        R = N.nodeName,
                        !R || R.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? C && ur(C.elementType) && (Et = zd) : Et = ox;
                    if (Et && (Et = Et(t, C))) {
                        Nd(k, Et, n, V);
                        break t
                    }
                    st && st(t, N, C),
                    t === "focusout" && C && N.type === "number" && C.memoizedProps.value != null && rr(N, "number", N.value)
                }
                switch (st = C ? Ha(C) : window,
                t) {
                case "focusin":
                    (Dd(st) || st.contentEditable === "true") && (Fi = st,
                    wr = C,
                    Fa = null);
                    break;
                case "focusout":
                    Fa = wr = Fi = null;
                    break;
                case "mousedown":
                    Ar = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ar = !1,
                    Hd(k, n, V);
                    break;
                case "selectionchange":
                    if (cx)
                        break;
                case "keydown":
                case "keyup":
                    Hd(k, n, V)
                }
                var pt;
                if (br)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var wt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            wt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            wt = "onCompositionUpdate";
                            break t
                        }
                        wt = void 0
                    }
                else
                    Ji ? jd(t, n) && (wt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (wt = "onCompositionStart");
                wt && (Ad && n.locale !== "ko" && (Ji || wt !== "onCompositionStart" ? wt === "onCompositionEnd" && Ji && (pt = bd()) : (Rn = V,
                mr = "value"in Rn ? Rn.value : Rn.textContent,
                Ji = !0)),
                st = $s(C, wt),
                0 < st.length && (wt = new Td(wt,t,null,n,V),
                k.push({
                    event: wt,
                    listeners: st
                }),
                pt ? wt.data = pt : (pt = Cd(n),
                pt !== null && (wt.data = pt)))),
                (pt = tx ? ex(t, n) : nx(t, n)) && (wt = $s(C, "onBeforeInput"),
                0 < wt.length && (st = new Td("onBeforeInput","beforeinput",null,n,V),
                k.push({
                    event: st,
                    listeners: wt
                }),
                st.data = pt)),
                Kx(k, t, C, n, V)
            }
            dp(k, e)
        })
    }
    function xl(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function $s(t, e) {
        for (var n = e + "Capture", l = []; t !== null; ) {
            var r = t
              , u = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || u === null || (r = qa(t, n),
            r != null && l.unshift(xl(t, r, u)),
            r = qa(t, e),
            r != null && l.push(xl(t, r, u))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function Wx(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function mp(t, e, n, l, r) {
        for (var u = e._reactName, h = []; n !== null && n !== l; ) {
            var v = n
              , T = v.alternate
              , C = v.stateNode;
            if (v = v.tag,
            T !== null && T === l)
                break;
            v !== 5 && v !== 26 && v !== 27 || C === null || (T = C,
            r ? (C = qa(n, u),
            C != null && h.unshift(xl(n, C, T))) : r || (C = qa(n, u),
            C != null && h.push(xl(n, C, T)))),
            n = n.return
        }
        h.length !== 0 && t.push({
            event: e,
            listeners: h
        })
    }
    var $x = /\r\n?/g
      , Ix = /\u0000|\uFFFD/g;
    function pp(t) {
        return (typeof t == "string" ? t : "" + t).replace($x, `
`).replace(Ix, "")
    }
    function gp(t, e) {
        return e = pp(e),
        pp(t) === e
    }
    function Ot(t, e, n, l, r, u) {
        switch (n) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Qi(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Qi(t, "" + l);
            break;
        case "className":
            ns(t, "class", l);
            break;
        case "tabIndex":
            ns(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            ns(t, n, l);
            break;
        case "style":
            gd(t, l, u);
            break;
        case "data":
            if (e !== "object") {
                ns(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = as("" + l),
            t.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (n === "formAction" ? (e !== "input" && Ot(t, e, "name", r.name, r, null),
                Ot(t, e, "formEncType", r.formEncType, r, null),
                Ot(t, e, "formMethod", r.formMethod, r, null),
                Ot(t, e, "formTarget", r.formTarget, r, null)) : (Ot(t, e, "encType", r.encType, r, null),
                Ot(t, e, "method", r.method, r, null),
                Ot(t, e, "target", r.target, r, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = as("" + l),
            t.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (t.onclick = fn);
            break;
        case "onScroll":
            l != null && xt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && xt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(s(61));
                if (n = l.__html,
                n != null) {
                    if (r.children != null)
                        throw Error(s(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = as("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
            break;
        case "popover":
            xt("beforetoggle", t),
            xt("toggle", t),
            es(t, "popover", l);
            break;
        case "xlinkActuate":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            es(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = jb.get(n) || n,
            es(t, n, l))
        }
    }
    function Fu(t, e, n, l, r, u) {
        switch (n) {
        case "style":
            gd(t, l, u);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(s(61));
                if (n = l.__html,
                n != null) {
                    if (r.children != null)
                        throw Error(s(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof l == "string" ? Qi(t, l) : (typeof l == "number" || typeof l == "bigint") && Qi(t, "" + l);
            break;
        case "onScroll":
            l != null && xt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && xt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = fn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!od.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"),
                    e = n.slice(2, r ? n.length - 7 : void 0),
                    u = t[me] || null,
                    u = u != null ? u[n] : null,
                    typeof u == "function" && t.removeEventListener(e, u, r),
                    typeof l == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, l, r);
                        break t
                    }
                    n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : es(t, n, l)
                }
        }
    }
    function ue(t, e, n) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            xt("error", t),
            xt("load", t);
            var l = !1, r = !1, u;
            for (u in n)
                if (n.hasOwnProperty(u)) {
                    var h = n[u];
                    if (h != null)
                        switch (u) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            r = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, e));
                        default:
                            Ot(t, e, u, h, n, null)
                        }
                }
            r && Ot(t, e, "srcSet", n.srcSet, n, null),
            l && Ot(t, e, "src", n.src, n, null);
            return;
        case "input":
            xt("invalid", t);
            var v = u = h = r = null
              , T = null
              , C = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var V = n[l];
                    if (V != null)
                        switch (l) {
                        case "name":
                            r = V;
                            break;
                        case "type":
                            h = V;
                            break;
                        case "checked":
                            T = V;
                            break;
                        case "defaultChecked":
                            C = V;
                            break;
                        case "value":
                            u = V;
                            break;
                        case "defaultValue":
                            v = V;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (V != null)
                                throw Error(s(137, e));
                            break;
                        default:
                            Ot(t, e, l, V, n, null)
                        }
                }
            dd(t, u, v, T, C, h, r, !1);
            return;
        case "select":
            xt("invalid", t),
            l = h = u = null;
            for (r in n)
                if (n.hasOwnProperty(r) && (v = n[r],
                v != null))
                    switch (r) {
                    case "value":
                        u = v;
                        break;
                    case "defaultValue":
                        h = v;
                        break;
                    case "multiple":
                        l = v;
                    default:
                        Ot(t, e, r, v, n, null)
                    }
            e = u,
            n = h,
            t.multiple = !!l,
            e != null ? Xi(t, !!l, e, !1) : n != null && Xi(t, !!l, n, !0);
            return;
        case "textarea":
            xt("invalid", t),
            u = r = l = null;
            for (h in n)
                if (n.hasOwnProperty(h) && (v = n[h],
                v != null))
                    switch (h) {
                    case "value":
                        l = v;
                        break;
                    case "defaultValue":
                        r = v;
                        break;
                    case "children":
                        u = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(s(91));
                        break;
                    default:
                        Ot(t, e, h, v, n, null)
                    }
            md(t, l, r, u);
            return;
        case "option":
            for (T in n)
                if (n.hasOwnProperty(T) && (l = n[T],
                l != null))
                    switch (T) {
                    case "selected":
                        t.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        Ot(t, e, T, l, n, null)
                    }
            return;
        case "dialog":
            xt("beforetoggle", t),
            xt("toggle", t),
            xt("cancel", t),
            xt("close", t);
            break;
        case "iframe":
        case "object":
            xt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < bl.length; l++)
                xt(bl[l], t);
            break;
        case "image":
            xt("error", t),
            xt("load", t);
            break;
        case "details":
            xt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            xt("error", t),
            xt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (C in n)
                if (n.hasOwnProperty(C) && (l = n[C],
                l != null))
                    switch (C) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(137, e));
                    default:
                        Ot(t, e, C, l, n, null)
                    }
            return;
        default:
            if (ur(e)) {
                for (V in n)
                    n.hasOwnProperty(V) && (l = n[V],
                    l !== void 0 && Fu(t, e, V, l, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (l = n[v],
            l != null && Ot(t, e, v, l, n, null))
    }
    function t1(t, e, n, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var r = null
              , u = null
              , h = null
              , v = null
              , T = null
              , C = null
              , V = null;
            for (R in n) {
                var k = n[R];
                if (n.hasOwnProperty(R) && k != null)
                    switch (R) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        T = k;
                    default:
                        l.hasOwnProperty(R) || Ot(t, e, R, null, l, k)
                    }
            }
            for (var N in l) {
                var R = l[N];
                if (k = n[N],
                l.hasOwnProperty(N) && (R != null || k != null))
                    switch (N) {
                    case "type":
                        u = R;
                        break;
                    case "name":
                        r = R;
                        break;
                    case "checked":
                        C = R;
                        break;
                    case "defaultChecked":
                        V = R;
                        break;
                    case "value":
                        h = R;
                        break;
                    case "defaultValue":
                        v = R;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(s(137, e));
                        break;
                    default:
                        R !== k && Ot(t, e, N, R, l, k)
                    }
            }
            or(t, h, v, T, C, V, u, r);
            return;
        case "select":
            R = h = v = N = null;
            for (u in n)
                if (T = n[u],
                n.hasOwnProperty(u) && T != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        R = T;
                    default:
                        l.hasOwnProperty(u) || Ot(t, e, u, null, l, T)
                    }
            for (r in l)
                if (u = l[r],
                T = n[r],
                l.hasOwnProperty(r) && (u != null || T != null))
                    switch (r) {
                    case "value":
                        N = u;
                        break;
                    case "defaultValue":
                        v = u;
                        break;
                    case "multiple":
                        h = u;
                    default:
                        u !== T && Ot(t, e, r, u, l, T)
                    }
            e = v,
            n = h,
            l = R,
            N != null ? Xi(t, !!n, N, !1) : !!l != !!n && (e != null ? Xi(t, !!n, e, !0) : Xi(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            R = N = null;
            for (v in n)
                if (r = n[v],
                n.hasOwnProperty(v) && r != null && !l.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Ot(t, e, v, null, l, r)
                    }
            for (h in l)
                if (r = l[h],
                u = n[h],
                l.hasOwnProperty(h) && (r != null || u != null))
                    switch (h) {
                    case "value":
                        N = r;
                        break;
                    case "defaultValue":
                        R = r;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(s(91));
                        break;
                    default:
                        r !== u && Ot(t, e, h, r, l, u)
                    }
            hd(t, N, R);
            return;
        case "option":
            for (var tt in n)
                if (N = n[tt],
                n.hasOwnProperty(tt) && N != null && !l.hasOwnProperty(tt))
                    switch (tt) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        Ot(t, e, tt, null, l, N)
                    }
            for (T in l)
                if (N = l[T],
                R = n[T],
                l.hasOwnProperty(T) && N !== R && (N != null || R != null))
                    switch (T) {
                    case "selected":
                        t.selected = N && typeof N != "function" && typeof N != "symbol";
                        break;
                    default:
                        Ot(t, e, T, N, l, R)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ct in n)
                N = n[ct],
                n.hasOwnProperty(ct) && N != null && !l.hasOwnProperty(ct) && Ot(t, e, ct, null, l, N);
            for (C in l)
                if (N = l[C],
                R = n[C],
                l.hasOwnProperty(C) && N !== R && (N != null || R != null))
                    switch (C) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (N != null)
                            throw Error(s(137, e));
                        break;
                    default:
                        Ot(t, e, C, N, l, R)
                    }
            return;
        default:
            if (ur(e)) {
                for (var Vt in n)
                    N = n[Vt],
                    n.hasOwnProperty(Vt) && N !== void 0 && !l.hasOwnProperty(Vt) && Fu(t, e, Vt, void 0, l, N);
                for (V in l)
                    N = l[V],
                    R = n[V],
                    !l.hasOwnProperty(V) || N === R || N === void 0 && R === void 0 || Fu(t, e, V, N, l, R);
                return
            }
        }
        for (var M in n)
            N = n[M],
            n.hasOwnProperty(M) && N != null && !l.hasOwnProperty(M) && Ot(t, e, M, null, l, N);
        for (k in l)
            N = l[k],
            R = n[k],
            !l.hasOwnProperty(k) || N === R || N == null && R == null || Ot(t, e, k, N, l, R)
    }
    function yp(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function e1() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
                var r = n[l]
                  , u = r.transferSize
                  , h = r.initiatorType
                  , v = r.duration;
                if (u && v && yp(h)) {
                    for (h = 0,
                    v = r.responseEnd,
                    l += 1; l < n.length; l++) {
                        var T = n[l]
                          , C = T.startTime;
                        if (C > v)
                            break;
                        var V = T.transferSize
                          , k = T.initiatorType;
                        V && yp(k) && (T = T.responseEnd,
                        h += V * (T < v ? 1 : (v - C) / (T - C)))
                    }
                    if (--l,
                    e += 8 * (u + h) / (r.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var Pu = null
      , Wu = null;
    function Is(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function vp(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function bp(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function $u(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Iu = null;
    function n1() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Iu ? !1 : (Iu = t,
        !0) : (Iu = null,
        !1)
    }
    var xp = typeof setTimeout == "function" ? setTimeout : void 0
      , i1 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Sp = typeof Promise == "function" ? Promise : void 0
      , a1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sp < "u" ? function(t) {
        return Sp.resolve(null).then(t).catch(l1)
    }
    : xp;
    function l1(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Fn(t) {
        return t === "head"
    }
    function Tp(t, e) {
        var n = e
          , l = 0;
        do {
            var r = n.nextSibling;
            if (t.removeChild(n),
            r && r.nodeType === 8)
                if (n = r.data,
                n === "/$" || n === "/&") {
                    if (l === 0) {
                        t.removeChild(r),
                        Ta(e);
                        return
                    }
                    l--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    l++;
                else if (n === "html")
                    Sl(t.ownerDocument.documentElement);
                else if (n === "head") {
                    n = t.ownerDocument.head,
                    Sl(n);
                    for (var u = n.firstChild; u; ) {
                        var h = u.nextSibling
                          , v = u.nodeName;
                        u[ka] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u),
                        u = h
                    }
                } else
                    n === "body" && Sl(t.ownerDocument.body);
            n = r
        } while (n);
        Ta(e)
    }
    function wp(t, e) {
        var n = t;
        t = 0;
        do {
            var l = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = l
        } while (n)
    }
    function tc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                tc(n),
                lr(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function s1(t, e, n, l) {
        for (; t.nodeType === 1; ) {
            var r = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[ka])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = Ge(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function o1(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ge(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Ap(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ge(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function ec(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function nc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function r1(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function Ge(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var ic = null;
    function Ep(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0)
                        return Ge(t.nextSibling);
                    e--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function Mp(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function jp(t, e, n) {
        switch (e = Is(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(s(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(s(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(s(454));
            return t;
        default:
            throw Error(s(451))
        }
    }
    function Sl(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        lr(t)
    }
    var Xe = new Map
      , Cp = new Set;
    function to(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var jn = Z.d;
    Z.d = {
        f: u1,
        r: c1,
        D: f1,
        C: d1,
        L: h1,
        m: m1,
        X: g1,
        S: p1,
        M: y1
    };
    function u1() {
        var t = jn.f()
          , e = Qs();
        return t || e
    }
    function c1(t) {
        var e = qi(t);
        e !== null && e.tag === 5 && e.type === "form" ? Qh(e) : jn.r(t)
    }
    var ba = typeof document > "u" ? null : document;
    function Dp(t, e, n) {
        var l = ba;
        if (l && typeof e == "string" && e) {
            var r = Be(e);
            r = 'link[rel="' + t + '"][href="' + r + '"]',
            typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
            Cp.has(r) || (Cp.add(r),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            l.querySelector(r) === null && (e = l.createElement("link"),
            ue(e, "link", t),
            ne(e),
            l.head.appendChild(e)))
        }
    }
    function f1(t) {
        jn.D(t),
        Dp("dns-prefetch", t, null)
    }
    function d1(t, e) {
        jn.C(t, e),
        Dp("preconnect", t, e)
    }
    function h1(t, e, n) {
        jn.L(t, e, n);
        var l = ba;
        if (l && t && e) {
            var r = 'link[rel="preload"][as="' + Be(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + Be(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (r += '[imagesizes="' + Be(n.imageSizes) + '"]')) : r += '[href="' + Be(t) + '"]';
            var u = r;
            switch (e) {
            case "style":
                u = xa(t);
                break;
            case "script":
                u = Sa(t)
            }
            Xe.has(u) || (t = b({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Xe.set(u, t),
            l.querySelector(r) !== null || e === "style" && l.querySelector(Tl(u)) || e === "script" && l.querySelector(wl(u)) || (e = l.createElement("link"),
            ue(e, "link", t),
            ne(e),
            l.head.appendChild(e)))
        }
    }
    function m1(t, e) {
        jn.m(t, e);
        var n = ba;
        if (n && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , r = 'link[rel="modulepreload"][as="' + Be(l) + '"][href="' + Be(t) + '"]'
              , u = r;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Sa(t)
            }
            if (!Xe.has(u) && (t = b({
                rel: "modulepreload",
                href: t
            }, e),
            Xe.set(u, t),
            n.querySelector(r) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(wl(u)))
                        return
                }
                l = n.createElement("link"),
                ue(l, "link", t),
                ne(l),
                n.head.appendChild(l)
            }
        }
    }
    function p1(t, e, n) {
        jn.S(t, e, n);
        var l = ba;
        if (l && t) {
            var r = Yi(l).hoistableStyles
              , u = xa(t);
            e = e || "default";
            var h = r.get(u);
            if (!h) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (h = l.querySelector(Tl(u)))
                    v.loading = 5;
                else {
                    t = b({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Xe.get(u)) && ac(t, n);
                    var T = h = l.createElement("link");
                    ne(T),
                    ue(T, "link", t),
                    T._p = new Promise(function(C, V) {
                        T.onload = C,
                        T.onerror = V
                    }
                    ),
                    T.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    T.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    eo(h, e, l)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: v
                },
                r.set(u, h)
            }
        }
    }
    function g1(t, e) {
        jn.X(t, e);
        var n = ba;
        if (n && t) {
            var l = Yi(n).hoistableScripts
              , r = Sa(t)
              , u = l.get(r);
            u || (u = n.querySelector(wl(r)),
            u || (t = b({
                src: t,
                async: !0
            }, e),
            (e = Xe.get(r)) && lc(t, e),
            u = n.createElement("script"),
            ne(u),
            ue(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            l.set(r, u))
        }
    }
    function y1(t, e) {
        jn.M(t, e);
        var n = ba;
        if (n && t) {
            var l = Yi(n).hoistableScripts
              , r = Sa(t)
              , u = l.get(r);
            u || (u = n.querySelector(wl(r)),
            u || (t = b({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Xe.get(r)) && lc(t, e),
            u = n.createElement("script"),
            ne(u),
            ue(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            l.set(r, u))
        }
    }
    function Np(t, e, n, l) {
        var r = (r = lt.current) ? to(r) : null;
        if (!r)
            throw Error(s(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = xa(n.href),
            n = Yi(r).hoistableStyles,
            l = n.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = xa(n.href);
                var u = Yi(r).hoistableStyles
                  , h = u.get(t);
                if (h || (r = r.ownerDocument || r,
                h = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, h),
                (u = r.querySelector(Tl(t))) && !u._p && (h.instance = u,
                h.state.loading = 5),
                Xe.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Xe.set(t, n),
                u || v1(r, t, n, h.state))),
                e && l === null)
                    throw Error(s(528, ""));
                return h
            }
            if (e && l !== null)
                throw Error(s(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Sa(n),
            n = Yi(r).hoistableScripts,
            l = n.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(s(444, t))
        }
    }
    function xa(t) {
        return 'href="' + Be(t) + '"'
    }
    function Tl(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function zp(t) {
        return b({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function v1(t, e, n, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        ue(e, "link", n),
        ne(e),
        t.head.appendChild(e))
    }
    function Sa(t) {
        return '[src="' + Be(t) + '"]'
    }
    function wl(t) {
        return "script[async]" + t
    }
    function Rp(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + Be(n.href) + '"]');
                if (l)
                    return e.instance = l,
                    ne(l),
                    l;
                var r = b({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                ne(l),
                ue(l, "style", r),
                eo(l, n.precedence, t),
                e.instance = l;
            case "stylesheet":
                r = xa(n.href);
                var u = t.querySelector(Tl(r));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    ne(u),
                    u;
                l = zp(n),
                (r = Xe.get(r)) && ac(l, r),
                u = (t.ownerDocument || t).createElement("link"),
                ne(u);
                var h = u;
                return h._p = new Promise(function(v, T) {
                    h.onload = v,
                    h.onerror = T
                }
                ),
                ue(u, "link", l),
                e.state.loading |= 4,
                eo(u, n.precedence, t),
                e.instance = u;
            case "script":
                return u = Sa(n.src),
                (r = t.querySelector(wl(u))) ? (e.instance = r,
                ne(r),
                r) : (l = n,
                (r = Xe.get(u)) && (l = b({}, n),
                lc(l, r)),
                t = t.ownerDocument || t,
                r = t.createElement("script"),
                ne(r),
                ue(r, "link", l),
                t.head.appendChild(r),
                e.instance = r);
            case "void":
                return null;
            default:
                throw Error(s(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            eo(l, n.precedence, t));
        return e.instance
    }
    function eo(t, e, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = l.length ? l[l.length - 1] : null, u = r, h = 0; h < l.length; h++) {
            var v = l[h];
            if (v.dataset.precedence === e)
                u = v;
            else if (u !== r)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function ac(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function lc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var no = null;
    function Op(t, e, n) {
        if (no === null) {
            var l = new Map
              , r = no = new Map;
            r.set(n, l)
        } else
            r = no,
            l = r.get(n),
            l || (l = new Map,
            r.set(n, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        n = n.getElementsByTagName(t),
        r = 0; r < n.length; r++) {
            var u = n[r];
            if (!(u[ka] || u[le] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = u.getAttribute(e) || "";
                h = t + h;
                var v = l.get(h);
                v ? v.push(u) : l.set(h, [u])
            }
        }
        return l
    }
    function Vp(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function b1(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function _p(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function x1(t, e, n, l) {
        if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var r = xa(l.href)
                  , u = e.querySelector(Tl(r));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = io.bind(t),
                    e.then(t, t)),
                    n.state.loading |= 4,
                    n.instance = u,
                    ne(u);
                    return
                }
                u = e.ownerDocument || e,
                l = zp(l),
                (r = Xe.get(r)) && ac(l, r),
                u = u.createElement("link"),
                ne(u);
                var h = u;
                h._p = new Promise(function(v, T) {
                    h.onload = v,
                    h.onerror = T
                }
                ),
                ue(u, "link", l),
                n.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(n, e),
            (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++,
            n = io.bind(t),
            e.addEventListener("load", n),
            e.addEventListener("error", n))
        }
    }
    var sc = 0;
    function S1(t, e) {
        return t.stylesheets && t.count === 0 && lo(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(n) {
            var l = setTimeout(function() {
                if (t.stylesheets && lo(t, t.stylesheets),
                t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && sc === 0 && (sc = 62500 * e1());
            var r = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && lo(t, t.stylesheets),
                t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, (t.imgBytes > sc ? 50 : 800) + e);
            return t.unsuspend = n,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(r)
            }
        }
        : null
    }
    function io() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                lo(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var ao = null;
    function lo(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        ao = new Map,
        e.forEach(T1, t),
        ao = null,
        io.call(t))
    }
    function T1(t, e) {
        if (!(e.state.loading & 4)) {
            var n = ao.get(t);
            if (n)
                var l = n.get(null);
            else {
                n = new Map,
                ao.set(t, n);
                for (var r = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < r.length; u++) {
                    var h = r[u];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h),
                    l = h)
                }
                l && n.set(null, l)
            }
            r = e.instance,
            h = r.getAttribute("data-precedence"),
            u = n.get(h) || l,
            u === l && n.set(null, r),
            n.set(h, r),
            this.count++,
            l = io.bind(this),
            r.addEventListener("load", l),
            r.addEventListener("error", l),
            u ? u.parentNode.insertBefore(r, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(r, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Al = {
        $$typeof: Y,
        Provider: null,
        Consumer: null,
        _currentValue: P,
        _currentValue2: P,
        _threadCount: 0
    };
    function w1(t, e, n, l, r, u, h, v, T) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = er(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = er(0),
        this.hiddenUpdates = er(null),
        this.identifierPrefix = l,
        this.onUncaughtError = r,
        this.onCaughtError = u,
        this.onRecoverableError = h,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = T,
        this.incompleteTransitions = new Map
    }
    function Bp(t, e, n, l, r, u, h, v, T, C, V, k) {
        return t = new w1(t,e,n,h,T,C,V,k,v),
        e = 1,
        u === !0 && (e |= 24),
        u = Me(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = kr(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: e
        },
        Gr(u),
        t
    }
    function Up(t) {
        return t ? (t = $i,
        t) : $i
    }
    function Lp(t, e, n, l, r, u) {
        r = Up(r),
        l.context === null ? l.context = r : l.pendingContext = r,
        l = Ln(e),
        l.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (l.callback = u),
        n = kn(t, l, e),
        n !== null && (xe(n, t, e),
        nl(n, t, e))
    }
    function kp(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function oc(t, e) {
        kp(t, e),
        (t = t.alternate) && kp(t, e)
    }
    function Hp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = pi(t, 67108864);
            e !== null && xe(e, t, 67108864),
            oc(t, 67108864)
        }
    }
    function qp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ze();
            e = nr(e);
            var n = pi(t, e);
            n !== null && xe(n, t, e),
            oc(t, e)
        }
    }
    var so = !0;
    function A1(t, e, n, l) {
        var r = z.T;
        z.T = null;
        var u = Z.p;
        try {
            Z.p = 2,
            rc(t, e, n, l)
        } finally {
            Z.p = u,
            z.T = r
        }
    }
    function E1(t, e, n, l) {
        var r = z.T;
        z.T = null;
        var u = Z.p;
        try {
            Z.p = 8,
            rc(t, e, n, l)
        } finally {
            Z.p = u,
            z.T = r
        }
    }
    function rc(t, e, n, l) {
        if (so) {
            var r = uc(l);
            if (r === null)
                Ju(t, e, l, oo, n),
                Gp(t, l);
            else if (j1(r, t, e, n, l))
                l.stopPropagation();
            else if (Gp(t, l),
            e & 4 && -1 < M1.indexOf(t)) {
                for (; r !== null; ) {
                    var u = qi(r);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var h = ci(u.pendingLanes);
                                if (h !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; h; ) {
                                        var T = 1 << 31 - Ae(h);
                                        v.entanglements[1] |= T,
                                        h &= ~T
                                    }
                                    sn(u),
                                    (jt & 6) === 0 && (Gs = Te() + 500,
                                    vl(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = pi(u, 2),
                            v !== null && xe(v, u, 2),
                            Qs(),
                            oc(u, 2)
                        }
                    if (u = uc(l),
                    u === null && Ju(t, e, l, oo, n),
                    u === r)
                        break;
                    r = u
                }
                r !== null && l.stopPropagation()
            } else
                Ju(t, e, l, null, n)
        }
    }
    function uc(t) {
        return t = fr(t),
        cc(t)
    }
    var oo = null;
    function cc(t) {
        if (oo = null,
        t = Hi(t),
        t !== null) {
            var e = d(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = f(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 31) {
                    if (t = m(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return oo = t,
        null
    }
    function Yp(t) {
        switch (t) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (fb()) {
            case Pf:
                return 2;
            case Wf:
                return 8;
            case Pl:
            case db:
                return 32;
            case $f:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var fc = !1
      , Pn = null
      , Wn = null
      , $n = null
      , El = new Map
      , Ml = new Map
      , In = []
      , M1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Gp(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Pn = null;
            break;
        case "dragenter":
        case "dragleave":
            Wn = null;
            break;
        case "mouseover":
        case "mouseout":
            $n = null;
            break;
        case "pointerover":
        case "pointerout":
            El.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ml.delete(e.pointerId)
        }
    }
    function jl(t, e, n, l, r, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [r]
        },
        e !== null && (e = qi(e),
        e !== null && Hp(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t)
    }
    function j1(t, e, n, l, r) {
        switch (e) {
        case "focusin":
            return Pn = jl(Pn, t, e, n, l, r),
            !0;
        case "dragenter":
            return Wn = jl(Wn, t, e, n, l, r),
            !0;
        case "mouseover":
            return $n = jl($n, t, e, n, l, r),
            !0;
        case "pointerover":
            var u = r.pointerId;
            return El.set(u, jl(El.get(u) || null, t, e, n, l, r)),
            !0;
        case "gotpointercapture":
            return u = r.pointerId,
            Ml.set(u, jl(Ml.get(u) || null, t, e, n, l, r)),
            !0
        }
        return !1
    }
    function Xp(t) {
        var e = Hi(t.target);
        if (e !== null) {
            var n = d(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = f(n),
                    e !== null) {
                        t.blockedOn = e,
                        ad(t.priority, function() {
                            qp(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = m(n),
                    e !== null) {
                        t.blockedOn = e,
                        ad(t.priority, function() {
                            qp(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function ro(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = uc(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var l = new n.constructor(n.type,n);
                cr = l,
                n.target.dispatchEvent(l),
                cr = null
            } else
                return e = qi(n),
                e !== null && Hp(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Qp(t, e, n) {
        ro(t) && n.delete(e)
    }
    function C1() {
        fc = !1,
        Pn !== null && ro(Pn) && (Pn = null),
        Wn !== null && ro(Wn) && (Wn = null),
        $n !== null && ro($n) && ($n = null),
        El.forEach(Qp),
        Ml.forEach(Qp)
    }
    function uo(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        fc || (fc = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, C1)))
    }
    var co = null;
    function Zp(t) {
        co !== t && (co = t,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            co === t && (co = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , l = t[e + 1]
                  , r = t[e + 2];
                if (typeof l != "function") {
                    if (cc(l || n) === null)
                        continue;
                    break
                }
                var u = qi(n);
                u !== null && (t.splice(e, 3),
                e -= 3,
                uu(u, {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: l
                }, l, r))
            }
        }))
    }
    function Ta(t) {
        function e(T) {
            return uo(T, t)
        }
        Pn !== null && uo(Pn, t),
        Wn !== null && uo(Wn, t),
        $n !== null && uo($n, t),
        El.forEach(e),
        Ml.forEach(e);
        for (var n = 0; n < In.length; n++) {
            var l = In[n];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < In.length && (n = In[0],
        n.blockedOn === null); )
            Xp(n),
            n.blockedOn === null && In.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (l = 0; l < n.length; l += 3) {
                var r = n[l]
                  , u = n[l + 1]
                  , h = r[me] || null;
                if (typeof u == "function")
                    h || Zp(n);
                else if (h) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (r = u,
                        h = u[me] || null)
                            v = h.formAction;
                        else if (cc(r) !== null)
                            continue
                    } else
                        v = h.action;
                    typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3),
                    l -= 3),
                    Zp(n)
                }
            }
    }
    function Kp() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(h) {
                        return r = h
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            r !== null && (r(),
            r = null),
            l || setTimeout(n, 20)
        }
        function n() {
            if (!l && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , r = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(n, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                r !== null && (r(),
                r = null)
            }
        }
    }
    function dc(t) {
        this._internalRoot = t
    }
    fo.prototype.render = dc.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(s(409));
        var n = e.current
          , l = ze();
        Lp(n, l, t, e, null, null)
    }
    ,
    fo.prototype.unmount = dc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Lp(t.current, 2, null, t, null, null),
            Qs(),
            e[ki] = null
        }
    }
    ;
    function fo(t) {
        this._internalRoot = t
    }
    fo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = id();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < In.length && e !== 0 && e < In[n].priority; n++)
                ;
            In.splice(n, 0, t),
            n === 0 && Xp(t)
        }
    }
    ;
    var Jp = a.version;
    if (Jp !== "19.2.4")
        throw Error(s(527, Jp, "19.2.4"));
    Z.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","),
            Error(s(268, t)));
        return t = g(e),
        t = t !== null ? y(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var D1 = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ho.isDisabled && ho.supportsFiber)
            try {
                Ba = ho.inject(D1),
                we = ho
            } catch {}
    }
    return Dl.createRoot = function(t, e) {
        if (!c(t))
            throw Error(s(299));
        var n = !1
          , l = ""
          , r = em
          , u = nm
          , h = im;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (h = e.onRecoverableError)),
        e = Bp(t, 1, !1, null, null, n, l, null, r, u, h, Kp),
        t[ki] = e.current,
        Ku(t),
        new dc(e)
    }
    ,
    Dl.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(s(299));
        var l = !1
          , r = ""
          , u = em
          , h = nm
          , v = im
          , T = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (h = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.formState !== void 0 && (T = n.formState)),
        e = Bp(t, 1, !0, e, n ?? null, l, r, T, u, h, v, Kp),
        e.context = Up(null),
        n = e.current,
        l = ze(),
        l = nr(l),
        r = Ln(l),
        r.callback = null,
        kn(n, r, l),
        n = l,
        e.current.lanes = n,
        La(e, n),
        sn(e),
        t[ki] = e.current,
        Ku(t),
        new fo(e)
    }
    ,
    Dl.version = "19.2.4",
    Dl
}
var ag;
function k1() {
    if (ag)
        return pc.exports;
    ag = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (a) {
                console.error(a)
            }
    }
    return i(),
    pc.exports = L1(),
    pc.exports
}
var H1 = k1()
  , No = {}
  , q1 = () => {
    window.va || (window.va = function(...a) {
        window.vaq || (window.vaq = []),
        window.vaq.push(a)
    }
    )
}
  , Y1 = "@vercel/analytics"
  , G1 = "2.0.1";
function $y() {
    return typeof window < "u"
}
function Iy() {
    try {
        const i = "production"
    } catch {}
    return "production"
}
function X1(i="auto") {
    if (i === "auto") {
        window.vam = Iy();
        return
    }
    window.vam = i
}
function Q1() {
    return ($y() ? window.vam : Iy()) || "production"
}
function pf() {
    return Q1() === "development"
}
function Z1(i) {
    return i.scriptSrc ? Ea(i.scriptSrc) : pf() ? "https://va.vercel-scripts.com/v1/script.debug.js" : i.basePath ? Ea(`${i.basePath}/insights/script.js`) : "/_vercel/insights/script.js"
}
function K1(i, a) {
    var o;
    let s = i;
    if (a)
        try {
            s = {
                ...(o = JSON.parse(a)) == null ? void 0 : o.analytics,
                ...i
            }
        } catch {}
    X1(s.mode);
    const c = {
        sdkn: Y1 + (s.framework ? `/${s.framework}` : ""),
        sdkv: G1
    };
    return s.disableAutoTrack && (c.disableAutoTrack = "1"),
    s.viewEndpoint && (c.viewEndpoint = Ea(s.viewEndpoint)),
    s.eventEndpoint && (c.eventEndpoint = Ea(s.eventEndpoint)),
    s.sessionEndpoint && (c.sessionEndpoint = Ea(s.sessionEndpoint)),
    pf() && s.debug === !1 && (c.debug = "false"),
    s.dsn && (c.dsn = s.dsn),
    s.endpoint ? c.endpoint = s.endpoint : s.basePath && (c.endpoint = Ea(`${s.basePath}/insights`)),
    {
        beforeSend: s.beforeSend,
        src: Z1(s),
        dataset: c
    }
}
function Ea(i) {
    return i.startsWith("http://") || i.startsWith("https://") || i.startsWith("/") ? i : `/${i}`
}
function J1(i={
    debug: !0
}, a) {
    var o;
    if (!$y())
        return;
    const {beforeSend: s, src: c, dataset: d} = K1(i, a);
    if (q1(),
    s && ((o = window.va) == null || o.call(window, "beforeSend", s)),
    document.head.querySelector(`script[src*="${c}"]`))
        return;
    const f = document.createElement("script");
    f.src = c;
    for (const [m,p] of Object.entries(d))
        f.dataset[m] = p;
    f.defer = !0,
    f.onerror = () => {
        const m = pf() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${c}. ${m}`)
    }
    ,
    document.head.appendChild(f)
}
function F1({route: i, path: a}) {
    var o;
    (o = window.va) == null || o.call(window, "pageview", {
        route: i,
        path: a
    })
}
function P1() {
    if (!(typeof process > "u" || typeof No > "u"))
        return No.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}
function W1() {
    if (!(typeof process > "u" || typeof No > "u"))
        return No.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
}
function $1(i) {
    return q.useEffect( () => {
        var a;
        i.beforeSend && ((a = window.va) == null || a.call(window, "beforeSend", i.beforeSend))
    }
    , [i.beforeSend]),
    q.useEffect( () => {
        J1({
            framework: i.framework || "react",
            basePath: i.basePath ?? P1(),
            ...i.route !== void 0 && {
                disableAutoTrack: !0
            },
            ...i
        }, i.configString ?? W1())
    }
    , []),
    q.useEffect( () => {
        i.route && i.path && F1({
            route: i.route,
            path: i.path
        })
    }
    , [i.route, i.path]),
    null
}
var zo = {}
  , I1 = () => {
    window.si || (window.si = function(...a) {
        window.siq = window.siq || [],
        window.siq.push(a)
    }
    )
}
  , tS = "@vercel/speed-insights"
  , eS = "2.0.0";
function nS() {
    return typeof window < "u"
}
function iS() {
    try {
        const i = "production"
    } catch {}
    return "production"
}
function t0() {
    return iS() === "development"
}
function aS(i) {
    return i.scriptSrc ? Ro(i.scriptSrc) : t0() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : i.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : i.basePath ? Ro(`${i.basePath}/speed-insights/script.js`) : "/_vercel/speed-insights/script.js"
}
function lS(i, a) {
    var o;
    let s = i;
    if (a)
        try {
            s = {
                ...(o = JSON.parse(a)) == null ? void 0 : o.speedInsights,
                ...i
            }
        } catch {}
    const c = {
        sdkn: tS + (s.framework ? `/${s.framework}` : ""),
        sdkv: eS
    };
    return s.sampleRate && (c.sampleRate = s.sampleRate.toString()),
    s.route && (c.route = s.route),
    t0() && s.debug === !1 && (c.debug = "false"),
    s.dsn && (c.dsn = s.dsn),
    s.endpoint ? c.endpoint = Ro(s.endpoint) : s.basePath && (c.endpoint = Ro(`${s.basePath}/speed-insights/vitals`)),
    {
        src: aS(s),
        beforeSend: s.beforeSend,
        dataset: c
    }
}
function Ro(i) {
    return i.startsWith("http://") || i.startsWith("https://") || i.startsWith("/") ? i : `/${i}`
}
function sS(i={}, a) {
    var o;
    if (!nS() || i.route === null)
        return null;
    I1();
    const {beforeSend: s, src: c, dataset: d} = lS(i, a);
    if (document.head.querySelector(`script[src*="${c}"]`))
        return null;
    s && ((o = window.si) == null || o.call(window, "beforeSend", s));
    const f = document.createElement("script");
    f.src = c,
    f.defer = !0;
    for (const [m,p] of Object.entries(d))
        f.dataset[m] = p;
    return f.onerror = () => {
        console.log(`[Vercel Speed Insights] Failed to load script from ${c}. Please check if any content blockers are enabled and try again.`)
    }
    ,
    document.head.appendChild(f),
    {
        setRoute: m => {
            f.dataset.route = m ?? void 0
        }
    }
}
function oS() {
    if (!(typeof process > "u" || typeof zo > "u"))
        return zo.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}
function rS() {
    if (!(typeof process > "u" || typeof zo > "u"))
        return zo.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
}
function uS(i) {
    q.useEffect( () => {
        var o;
        i.beforeSend && ((o = window.si) == null || o.call(window, "beforeSend", i.beforeSend))
    }
    , [i.beforeSend]);
    const a = q.useRef(null);
    return q.useEffect( () => {
        if (!a.current) {
            const o = sS({
                framework: i.framework ?? "react",
                basePath: i.basePath ?? oS(),
                ...i
            }, i.configString ?? rS());
            o && (a.current = o.setRoute)
        }
    }
    , [i]),
    q.useEffect( () => {
        a.current && i.route && a.current(i.route)
    }
    , [i.route]),
    null
}
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cS = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , fS = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, o, s) => s ? s.toUpperCase() : o.toLowerCase())
  , lg = i => {
    const a = fS(i);
    return a.charAt(0).toUpperCase() + a.slice(1)
}
  , e0 = (...i) => i.filter( (a, o, s) => !!a && a.trim() !== "" && s.indexOf(a) === o).join(" ").trim()
  , dS = i => {
    for (const a in i)
        if (a.startsWith("aria-") || a === "role" || a === "title")
            return !0
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mS = q.forwardRef( ({color: i="currentColor", size: a=24, strokeWidth: o=2, absoluteStrokeWidth: s, className: c="", children: d, iconNode: f, ...m}, p) => q.createElement("svg", {
    ref: p,
    ...hS,
    width: a,
    height: a,
    stroke: i,
    strokeWidth: s ? Number(o) * 24 / Number(a) : o,
    className: e0("lucide", c),
    ...!d && !dS(m) && {
        "aria-hidden": "true"
    },
    ...m
}, [...f.map( ([g,y]) => q.createElement(g, y)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = (i, a) => {
    const o = q.forwardRef( ({className: s, ...c}, d) => q.createElement(mS, {
        ref: d,
        iconNode: a,
        className: e0(`lucide-${cS(lg(i))}`, `lucide-${i}`, s),
        ...c
    }));
    return o.displayName = lg(i),
    o
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = [["path", {
    d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
    key: "mvr1a0"
}]]
  , gS = Go("heart", pS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]
  , vS = Go("instagram", yS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = [["path", {
    d: "M7 10v12",
    key: "1qc93n"
}], ["path", {
    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
    key: "emmmcr"
}]]
  , xS = Go("thumbs-up", bS);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]]
  , TS = Go("youtube", SS)
  , FB_PATH = [["path", { 
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", 
    key: "fb-path" 
}]]
  , FB_ICON = Go("facebook", FB_PATH)
  , gf = q.createContext({});
function si(i) {
    const a = q.useRef(null);
    return a.current === null && (a.current = i()),
    a.current
}
const wS = typeof window < "u"
  , Xo = wS ? q.useLayoutEffect : q.useEffect
  , Qo = q.createContext(null);
function yf(i, a) {
    i.indexOf(a) === -1 && i.push(a)
}
function Oo(i, a) {
    const o = i.indexOf(a);
    o > -1 && i.splice(o, 1)
}
const tn = (i, a, o) => o > a ? a : o < i ? i : o;
let ql = () => {}
;
const oi = {}
  , n0 = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function i0(i) {
    return typeof i == "object" && i !== null
}
const a0 = i => /^0[^.\s]+$/u.test(i);
function l0(i) {
    let a;
    return () => (a === void 0 && (a = i()),
    a)
}
const Se = i => i
  , AS = (i, a) => o => a(i(o))
  , Zl = (...i) => i.reduce(AS)
  , Na = (i, a, o) => {
    const s = a - i;
    return s === 0 ? 1 : (o - i) / s
}
;
class vf {
    constructor() {
        this.subscriptions = []
    }
    add(a) {
        return yf(this.subscriptions, a),
        () => Oo(this.subscriptions, a)
    }
    notify(a, o, s) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](a, o, s);
            else
                for (let d = 0; d < c; d++) {
                    const f = this.subscriptions[d];
                    f && f(a, o, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Re = i => i * 1e3
  , Qe = i => i / 1e3;
function bf(i, a) {
    return a ? i * (1e3 / a) : 0
}
const s0 = (i, a, o) => (((1 - 3 * o + 3 * a) * i + (3 * o - 6 * a)) * i + 3 * a) * i
  , ES = 1e-7
  , MS = 12;
function jS(i, a, o, s, c) {
    let d, f, m = 0;
    do
        f = a + (o - a) / 2,
        d = s0(f, s, c) - i,
        d > 0 ? o = f : a = f;
    while (Math.abs(d) > ES && ++m < MS);
    return f
}
function Kl(i, a, o, s) {
    if (i === a && o === s)
        return Se;
    const c = d => jS(d, 0, 1, i, o);
    return d => d === 0 || d === 1 ? d : s0(c(d), a, s)
}
const o0 = i => a => a <= .5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2
  , r0 = i => a => 1 - i(1 - a)
  , u0 = Kl(.33, 1.53, .69, .99)
  , xf = r0(u0)
  , c0 = o0(xf)
  , f0 = i => i >= 1 ? 1 : (i *= 2) < 1 ? .5 * xf(i) : .5 * (2 - Math.pow(2, -10 * (i - 1)))
  , Sf = i => 1 - Math.sin(Math.acos(i))
  , d0 = r0(Sf)
  , h0 = o0(Sf)
  , CS = Kl(.42, 0, 1, 1)
  , DS = Kl(0, 0, .58, 1)
  , m0 = Kl(.42, 0, .58, 1)
  , NS = i => Array.isArray(i) && typeof i[0] != "number"
  , p0 = i => Array.isArray(i) && typeof i[0] == "number"
  , zS = {
    linear: Se,
    easeIn: CS,
    easeInOut: m0,
    easeOut: DS,
    circIn: Sf,
    circInOut: h0,
    circOut: d0,
    backIn: xf,
    backInOut: c0,
    backOut: u0,
    anticipate: f0
}
  , RS = i => typeof i == "string"
  , sg = i => {
    if (p0(i)) {
        ql(i.length === 4);
        const [a,o,s,c] = i;
        return Kl(a, o, s, c)
    } else if (RS(i))
        return zS[i];
    return i
}
  , mo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function OS(i, a) {
    let o = new Set
      , s = new Set
      , c = !1
      , d = !1;
    const f = new WeakSet;
    let m = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function p(y) {
        f.has(y) && (g.schedule(y),
        i()),
        y(m)
    }
    const g = {
        schedule: (y, b=!1, S=!1) => {
            const D = S && c ? o : s;
            return b && f.add(y),
            D.add(y),
            y
        }
        ,
        cancel: y => {
            s.delete(y),
            f.delete(y)
        }
        ,
        process: y => {
            if (m = y,
            c) {
                d = !0;
                return
            }
            c = !0;
            const b = o;
            o = s,
            s = b,
            o.forEach(p),
            o.clear(),
            c = !1,
            d && (d = !1,
            g.process(y))
        }
    };
    return g
}
const VS = 40;
function g0(i, a) {
    let o = !1
      , s = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , d = () => o = !0
      , f = mo.reduce( (Y, G) => (Y[G] = OS(d),
    Y), {})
      , {setup: m, read: p, resolveKeyframes: g, preUpdate: y, update: b, preRender: S, render: E, postRender: D} = f
      , O = () => {
        const Y = oi.useManualTiming
          , G = Y ? c.timestamp : performance.now();
        o = !1,
        Y || (c.delta = s ? 1e3 / 60 : Math.max(Math.min(G - c.timestamp, VS), 1)),
        c.timestamp = G,
        c.isProcessing = !0,
        m.process(c),
        p.process(c),
        g.process(c),
        y.process(c),
        b.process(c),
        S.process(c),
        E.process(c),
        D.process(c),
        c.isProcessing = !1,
        o && a && (s = !1,
        i(O))
    }
      , _ = () => {
        o = !0,
        s = !0,
        c.isProcessing || i(O)
    }
    ;
    return {
        schedule: mo.reduce( (Y, G) => {
            const F = f[G];
            return Y[G] = (rt, I=!1, L=!1) => (o || _(),
            F.schedule(rt, I, L)),
            Y
        }
        , {}),
        cancel: Y => {
            for (let G = 0; G < mo.length; G++)
                f[mo[G]].cancel(Y)
        }
        ,
        state: c,
        steps: f
    }
}
const {schedule: St, cancel: Oe, state: ae, steps: bc} = g0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Se, !0);
let wo;
function _S() {
    wo = void 0
}
const de = {
    now: () => (wo === void 0 && de.set(ae.isProcessing || oi.useManualTiming ? ae.timestamp : performance.now()),
    wo),
    set: i => {
        wo = i,
        queueMicrotask(_S)
    }
}
  , y0 = i => a => typeof a == "string" && a.startsWith(i)
  , v0 = y0("--")
  , BS = y0("var(--")
  , Tf = i => BS(i) ? US.test(i.split("/*")[0].trim()) : !1
  , US = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function og(i) {
    return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--")
}
const Ra = {
    test: i => typeof i == "number",
    parse: parseFloat,
    transform: i => i
}
  , Yl = {
    ...Ra,
    transform: i => tn(0, 1, i)
}
  , po = {
    ...Ra,
    default: 1
}
  , Vl = i => Math.round(i * 1e5) / 1e5
  , wf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function LS(i) {
    return i == null
}
const kS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Af = (i, a) => o => !!(typeof o == "string" && kS.test(o) && o.startsWith(i) || a && !LS(o) && Object.prototype.hasOwnProperty.call(o, a))
  , b0 = (i, a, o) => s => {
    if (typeof s != "string")
        return s;
    const [c,d,f,m] = s.match(wf);
    return {
        [i]: parseFloat(c),
        [a]: parseFloat(d),
        [o]: parseFloat(f),
        alpha: m !== void 0 ? parseFloat(m) : 1
    }
}
  , HS = i => tn(0, 255, i)
  , xc = {
    ...Ra,
    transform: i => Math.round(HS(i))
}
  , Ri = {
    test: Af("rgb", "red"),
    parse: b0("red", "green", "blue"),
    transform: ({red: i, green: a, blue: o, alpha: s=1}) => "rgba(" + xc.transform(i) + ", " + xc.transform(a) + ", " + xc.transform(o) + ", " + Vl(Yl.transform(s)) + ")"
};
function qS(i) {
    let a = ""
      , o = ""
      , s = ""
      , c = "";
    return i.length > 5 ? (a = i.substring(1, 3),
    o = i.substring(3, 5),
    s = i.substring(5, 7),
    c = i.substring(7, 9)) : (a = i.substring(1, 2),
    o = i.substring(2, 3),
    s = i.substring(3, 4),
    c = i.substring(4, 5),
    a += a,
    o += o,
    s += s,
    c += c),
    {
        red: parseInt(a, 16),
        green: parseInt(o, 16),
        blue: parseInt(s, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Hc = {
    test: Af("#"),
    parse: qS,
    transform: Ri.transform
}
  , Jl = i => ({
    test: a => typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: a => `${a}${i}`
})
  , ii = Jl("deg")
  , un = Jl("%")
  , nt = Jl("px")
  , YS = Jl("vh")
  , GS = Jl("vw")
  , rg = {
    ...un,
    parse: i => un.parse(i) / 100,
    transform: i => un.transform(i * 100)
}
  , Ma = {
    test: Af("hsl", "hue"),
    parse: b0("hue", "saturation", "lightness"),
    transform: ({hue: i, saturation: a, lightness: o, alpha: s=1}) => "hsla(" + Math.round(i) + ", " + un.transform(Vl(a)) + ", " + un.transform(Vl(o)) + ", " + Vl(Yl.transform(s)) + ")"
}
  , Wt = {
    test: i => Ri.test(i) || Hc.test(i) || Ma.test(i),
    parse: i => Ri.test(i) ? Ri.parse(i) : Ma.test(i) ? Ma.parse(i) : Hc.parse(i),
    transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? Ri.transform(i) : Ma.transform(i),
    getAnimatableNone: i => {
        const a = Wt.parse(i);
        return a.alpha = 0,
        Wt.transform(a)
    }
}
  , XS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function QS(i) {
    var a, o;
    return isNaN(i) && typeof i == "string" && (((a = i.match(wf)) == null ? void 0 : a.length) || 0) + (((o = i.match(XS)) == null ? void 0 : o.length) || 0) > 0
}
const x0 = "number"
  , S0 = "color"
  , ZS = "var"
  , KS = "var("
  , ug = "${}"
  , JS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function za(i) {
    const a = i.toString()
      , o = []
      , s = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let d = 0;
    const m = a.replace(JS, p => (Wt.test(p) ? (s.color.push(d),
    c.push(S0),
    o.push(Wt.parse(p))) : p.startsWith(KS) ? (s.var.push(d),
    c.push(ZS),
    o.push(p)) : (s.number.push(d),
    c.push(x0),
    o.push(parseFloat(p))),
    ++d,
    ug)).split(ug);
    return {
        values: o,
        split: m,
        indexes: s,
        types: c
    }
}
function FS(i) {
    return za(i).values
}
function T0({split: i, types: a}) {
    const o = i.length;
    return s => {
        let c = "";
        for (let d = 0; d < o; d++)
            if (c += i[d],
            s[d] !== void 0) {
                const f = a[d];
                f === x0 ? c += Vl(s[d]) : f === S0 ? c += Wt.transform(s[d]) : c += s[d]
            }
        return c
    }
}
function PS(i) {
    return T0(za(i))
}
const WS = i => typeof i == "number" ? 0 : Wt.test(i) ? Wt.getAnimatableNone(i) : i
  , $S = (i, a) => typeof i == "number" ? a != null && a.trim().endsWith("/") ? i : 0 : WS(i);
function IS(i) {
    const a = za(i);
    return T0(a)(a.values.map( (s, c) => $S(s, a.split[c])))
}
const Ie = {
    test: QS,
    parse: FS,
    createTransformer: PS,
    getAnimatableNone: IS
};
function Sc(i, a, o) {
    return o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? i + (a - i) * 6 * o : o < 1 / 2 ? a : o < 2 / 3 ? i + (a - i) * (2 / 3 - o) * 6 : i
}
function tT({hue: i, saturation: a, lightness: o, alpha: s}) {
    i /= 360,
    a /= 100,
    o /= 100;
    let c = 0
      , d = 0
      , f = 0;
    if (!a)
        c = d = f = o;
    else {
        const m = o < .5 ? o * (1 + a) : o + a - o * a
          , p = 2 * o - m;
        c = Sc(p, m, i + 1 / 3),
        d = Sc(p, m, i),
        f = Sc(p, m, i - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(d * 255),
        blue: Math.round(f * 255),
        alpha: s
    }
}
function Vo(i, a) {
    return o => o > 0 ? a : i
}
const Lt = (i, a, o) => i + (a - i) * o
  , Tc = (i, a, o) => {
    const s = i * i
      , c = o * (a * a - s) + s;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , eT = [Hc, Ri, Ma]
  , nT = i => eT.find(a => a.test(i));
function cg(i) {
    const a = nT(i);
    if (!a)
        return !1;
    let o = a.parse(i);
    return a === Ma && (o = tT(o)),
    o
}
const fg = (i, a) => {
    const o = cg(i)
      , s = cg(a);
    if (!o || !s)
        return Vo(i, a);
    const c = {
        ...o
    };
    return d => (c.red = Tc(o.red, s.red, d),
    c.green = Tc(o.green, s.green, d),
    c.blue = Tc(o.blue, s.blue, d),
    c.alpha = Lt(o.alpha, s.alpha, d),
    Ri.transform(c))
}
  , qc = new Set(["none", "hidden"]);
function iT(i, a) {
    return qc.has(i) ? o => o <= 0 ? i : a : o => o >= 1 ? a : i
}
function aT(i, a) {
    return o => Lt(i, a, o)
}
function Ef(i) {
    return typeof i == "number" ? aT : typeof i == "string" ? Tf(i) ? Vo : Wt.test(i) ? fg : oT : Array.isArray(i) ? w0 : typeof i == "object" ? Wt.test(i) ? fg : lT : Vo
}
function w0(i, a) {
    const o = [...i]
      , s = o.length
      , c = i.map( (d, f) => Ef(d)(d, a[f]));
    return d => {
        for (let f = 0; f < s; f++)
            o[f] = c[f](d);
        return o
    }
}
function lT(i, a) {
    const o = {
        ...i,
        ...a
    }
      , s = {};
    for (const c in o)
        i[c] !== void 0 && a[c] !== void 0 && (s[c] = Ef(i[c])(i[c], a[c]));
    return c => {
        for (const d in s)
            o[d] = s[d](c);
        return o
    }
}
function sT(i, a) {
    const o = []
      , s = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < a.values.length; c++) {
        const d = a.types[c]
          , f = i.indexes[d][s[d]]
          , m = i.values[f] ?? 0;
        o[c] = m,
        s[d]++
    }
    return o
}
const oT = (i, a) => {
    const o = Ie.createTransformer(a)
      , s = za(i)
      , c = za(a);
    return s.indexes.var.length === c.indexes.var.length && s.indexes.color.length === c.indexes.color.length && s.indexes.number.length >= c.indexes.number.length ? qc.has(i) && !c.values.length || qc.has(a) && !s.values.length ? iT(i, a) : Zl(w0(sT(s, c), c.values), o) : Vo(i, a)
}
;
function A0(i, a, o) {
    return typeof i == "number" && typeof a == "number" && typeof o == "number" ? Lt(i, a, o) : Ef(i)(i, a)
}
const rT = i => {
    const a = ({timestamp: o}) => i(o);
    return {
        start: (o=!0) => St.update(a, o),
        stop: () => Oe(a),
        now: () => ae.isProcessing ? ae.timestamp : de.now()
    }
}
  , E0 = (i, a, o=10) => {
    let s = "";
    const c = Math.max(Math.round(a / o), 2);
    for (let d = 0; d < c; d++)
        s += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`
}
  , _o = 2e4;
function Mf(i) {
    let a = 0;
    const o = 50;
    let s = i.next(a);
    for (; !s.done && a < _o; )
        a += o,
        s = i.next(a);
    return a >= _o ? 1 / 0 : a
}
function uT(i, a=100, o) {
    const s = o({
        ...i,
        keyframes: [0, a]
    })
      , c = Math.min(Mf(s), _o);
    return {
        type: "keyframes",
        ease: d => s.next(c * d).value / a,
        duration: Qe(c)
    }
}
const Gt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function Yc(i, a) {
    return i * Math.sqrt(1 - a * a)
}
const cT = 12;
function fT(i, a, o) {
    let s = o;
    for (let c = 1; c < cT; c++)
        s = s - i(s) / a(s);
    return s
}
const wc = .001;
function dT({duration: i=Gt.duration, bounce: a=Gt.bounce, velocity: o=Gt.velocity, mass: s=Gt.mass}) {
    let c, d, f = 1 - a;
    f = tn(Gt.minDamping, Gt.maxDamping, f),
    i = tn(Gt.minDuration, Gt.maxDuration, Qe(i)),
    f < 1 ? (c = g => {
        const y = g * f
          , b = y * i
          , S = y - o
          , E = Yc(g, f)
          , D = Math.exp(-b);
        return wc - S / E * D
    }
    ,
    d = g => {
        const b = g * f * i
          , S = b * o + o
          , E = Math.pow(f, 2) * Math.pow(g, 2) * i
          , D = Math.exp(-b)
          , O = Yc(Math.pow(g, 2), f);
        return (-c(g) + wc > 0 ? -1 : 1) * ((S - E) * D) / O
    }
    ) : (c = g => {
        const y = Math.exp(-g * i)
          , b = (g - o) * i + 1;
        return -wc + y * b
    }
    ,
    d = g => {
        const y = Math.exp(-g * i)
          , b = (o - g) * (i * i);
        return y * b
    }
    );
    const m = 5 / i
      , p = fT(c, d, m);
    if (i = Re(i),
    isNaN(p))
        return {
            stiffness: Gt.stiffness,
            damping: Gt.damping,
            duration: i
        };
    {
        const g = Math.pow(p, 2) * s;
        return {
            stiffness: g,
            damping: f * 2 * Math.sqrt(s * g),
            duration: i
        }
    }
}
const hT = ["duration", "bounce"]
  , mT = ["stiffness", "damping", "mass"];
function dg(i, a) {
    return a.some(o => i[o] !== void 0)
}
function pT(i) {
    let a = {
        velocity: Gt.velocity,
        stiffness: Gt.stiffness,
        damping: Gt.damping,
        mass: Gt.mass,
        isResolvedFromDuration: !1,
        ...i
    };
    if (!dg(i, mT) && dg(i, hT))
        if (a.velocity = 0,
        i.visualDuration) {
            const o = i.visualDuration
              , s = 2 * Math.PI / (o * 1.2)
              , c = s * s
              , d = 2 * tn(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
            a = {
                ...a,
                mass: Gt.mass,
                stiffness: c,
                damping: d
            }
        } else {
            const o = dT({
                ...i,
                velocity: 0
            });
            a = {
                ...a,
                ...o,
                mass: Gt.mass
            },
            a.isResolvedFromDuration = !0
        }
    return a
}
function Bo(i=Gt.visualDuration, a=Gt.bounce) {
    const o = typeof i != "object" ? {
        visualDuration: i,
        keyframes: [0, 1],
        bounce: a
    } : i;
    let {restSpeed: s, restDelta: c} = o;
    const d = o.keyframes[0]
      , f = o.keyframes[o.keyframes.length - 1]
      , m = {
        done: !1,
        value: d
    }
      , {stiffness: p, damping: g, mass: y, duration: b, velocity: S, isResolvedFromDuration: E} = pT({
        ...o,
        velocity: -Qe(o.velocity || 0)
    })
      , D = S || 0
      , O = g / (2 * Math.sqrt(p * y))
      , _ = f - d
      , H = Qe(Math.sqrt(p / y))
      , Q = Math.abs(_) < 5;
    s || (s = Q ? Gt.restSpeed.granular : Gt.restSpeed.default),
    c || (c = Q ? Gt.restDelta.granular : Gt.restDelta.default);
    let Y, G, F, rt, I, L;
    if (O < 1)
        F = Yc(H, O),
        rt = (D + O * H * _) / F,
        Y = $ => {
            const ut = Math.exp(-O * H * $);
            return f - ut * (rt * Math.sin(F * $) + _ * Math.cos(F * $))
        }
        ,
        I = O * H * rt + _ * F,
        L = O * H * _ - rt * F,
        G = $ => Math.exp(-O * H * $) * (I * Math.sin(F * $) + L * Math.cos(F * $));
    else if (O === 1) {
        Y = ut => f - Math.exp(-H * ut) * (_ + (D + H * _) * ut);
        const $ = D + H * _;
        G = ut => Math.exp(-H * ut) * (H * $ * ut - D)
    } else {
        const $ = H * Math.sqrt(O * O - 1);
        Y = Ct => {
            const Dt = Math.exp(-O * H * Ct)
              , z = Math.min($ * Ct, 300);
            return f - Dt * ((D + O * H * _) * Math.sinh(z) + $ * _ * Math.cosh(z)) / $
        }
        ;
        const ut = (D + O * H * _) / $
          , gt = O * H * ut - _ * $
          , kt = O * H * _ - ut * $;
        G = Ct => {
            const Dt = Math.exp(-O * H * Ct)
              , z = Math.min($ * Ct, 300);
            return Dt * (gt * Math.sinh(z) + kt * Math.cosh(z))
        }
    }
    const at = {
        calculatedDuration: E && b || null,
        velocity: $ => Re(G($)),
        next: $ => {
            if (!E && O < 1) {
                const gt = Math.exp(-O * H * $)
                  , kt = Math.sin(F * $)
                  , Ct = Math.cos(F * $)
                  , Dt = f - gt * (rt * kt + _ * Ct)
                  , z = Re(gt * (I * kt + L * Ct));
                return m.done = Math.abs(z) <= s && Math.abs(f - Dt) <= c,
                m.value = m.done ? f : Dt,
                m
            }
            const ut = Y($);
            if (E)
                m.done = $ >= b;
            else {
                const gt = Re(G($));
                m.done = Math.abs(gt) <= s && Math.abs(f - ut) <= c
            }
            return m.value = m.done ? f : ut,
            m
        }
        ,
        toString: () => {
            const $ = Math.min(Mf(at), _o)
              , ut = E0(gt => at.next($ * gt).value, $, 30);
            return $ + "ms " + ut
        }
        ,
        toTransition: () => {}
    };
    return at
}
Bo.applyToOptions = i => {
    const a = uT(i, 100, Bo);
    return i.ease = a.ease,
    i.duration = Re(a.duration),
    i.type = "keyframes",
    i
}
;
const gT = 5;
function M0(i, a, o) {
    const s = Math.max(a - gT, 0);
    return bf(o - i(s), a - s)
}
function Gc({keyframes: i, velocity: a=0, power: o=.8, timeConstant: s=325, bounceDamping: c=10, bounceStiffness: d=500, modifyTarget: f, min: m, max: p, restDelta: g=.5, restSpeed: y}) {
    const b = i[0]
      , S = {
        done: !1,
        value: b
    }
      , E = L => m !== void 0 && L < m || p !== void 0 && L > p
      , D = L => m === void 0 ? p : p === void 0 || Math.abs(m - L) < Math.abs(p - L) ? m : p;
    let O = o * a;
    const _ = b + O
      , H = f === void 0 ? _ : f(_);
    H !== _ && (O = H - b);
    const Q = L => -O * Math.exp(-L / s)
      , Y = L => H + Q(L)
      , G = L => {
        const at = Q(L)
          , $ = Y(L);
        S.done = Math.abs(at) <= g,
        S.value = S.done ? H : $
    }
    ;
    let F, rt;
    const I = L => {
        E(S.value) && (F = L,
        rt = Bo({
            keyframes: [S.value, D(S.value)],
            velocity: M0(Y, L, S.value),
            damping: c,
            stiffness: d,
            restDelta: g,
            restSpeed: y
        }))
    }
    ;
    return I(0),
    {
        calculatedDuration: null,
        next: L => {
            let at = !1;
            return !rt && F === void 0 && (at = !0,
            G(L),
            I(L)),
            F !== void 0 && L >= F ? rt.next(L - F) : (!at && G(L),
            S)
        }
    }
}
function yT(i, a, o) {
    const s = []
      , c = o || oi.mix || A0
      , d = i.length - 1;
    for (let f = 0; f < d; f++) {
        let m = c(i[f], i[f + 1]);
        if (a) {
            const p = Array.isArray(a) ? a[f] || Se : a;
            m = Zl(p, m)
        }
        s.push(m)
    }
    return s
}
function jf(i, a, {clamp: o=!0, ease: s, mixer: c}={}) {
    const d = i.length;
    if (ql(d === a.length),
    d === 1)
        return () => a[0];
    if (d === 2 && a[0] === a[1])
        return () => a[1];
    const f = i[0] === i[1];
    i[0] > i[d - 1] && (i = [...i].reverse(),
    a = [...a].reverse());
    const m = yT(a, s, c)
      , p = m.length
      , g = y => {
        if (f && y < i[0])
            return a[0];
        let b = 0;
        if (p > 1)
            for (; b < i.length - 2 && !(y < i[b + 1]); b++)
                ;
        const S = Na(i[b], i[b + 1], y);
        return m[b](S)
    }
    ;
    return o ? y => g(tn(i[0], i[d - 1], y)) : g
}
function vT(i, a) {
    const o = i[i.length - 1];
    for (let s = 1; s <= a; s++) {
        const c = Na(0, a, s);
        i.push(Lt(o, 1, c))
    }
}
function j0(i) {
    const a = [0];
    return vT(a, i.length - 1),
    a
}
function bT(i, a) {
    return i.map(o => o * a)
}
function xT(i, a) {
    return i.map( () => a || m0).splice(0, i.length - 1)
}
function _l({duration: i=300, keyframes: a, times: o, ease: s="easeInOut"}) {
    const c = NS(s) ? s.map(sg) : sg(s)
      , d = {
        done: !1,
        value: a[0]
    }
      , f = bT(o && o.length === a.length ? o : j0(a), i)
      , m = jf(f, a, {
        ease: Array.isArray(c) ? c : xT(a, c)
    });
    return {
        calculatedDuration: i,
        next: p => (d.value = m(p),
        d.done = p >= i,
        d)
    }
}
const ST = i => i !== null;
function Zo(i, {repeat: a, repeatType: o="loop"}, s, c=1) {
    const d = i.filter(ST)
      , m = c < 0 || a && o !== "loop" && a % 2 === 1 ? 0 : d.length - 1;
    return !m || s === void 0 ? d[m] : s
}
const TT = {
    decay: Gc,
    inertia: Gc,
    tween: _l,
    keyframes: _l,
    spring: Bo
};
function C0(i) {
    typeof i.type == "string" && (i.type = TT[i.type])
}
class Cf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(a => {
            this.resolve = a
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(a, o) {
        return this.finished.then(a, o)
    }
}
const wT = i => i / 100;
class Gl extends Cf {
    constructor(a) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.delayState = {
            done: !1,
            value: void 0
        },
        this.stop = () => {
            var s, c;
            const {motionValue: o} = this.options;
            o && o.updatedAt !== de.now() && this.tick(de.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (c = (s = this.options).onStop) == null || c.call(s))
        }
        ,
        this.options = a,
        this.initAnimation(),
        this.play(),
        a.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: a} = this;
        C0(a);
        const {type: o=_l, repeat: s=0, repeatDelay: c=0, repeatType: d, velocity: f=0} = a;
        let {keyframes: m} = a;
        const p = o || _l;
        p !== _l && typeof m[0] != "number" && (this.mixKeyframes = Zl(wT, A0(m[0], m[1])),
        m = [0, 100]);
        const g = p({
            ...a,
            keyframes: m
        });
        d === "mirror" && (this.mirroredGenerator = p({
            ...a,
            keyframes: [...m].reverse(),
            velocity: -f
        })),
        g.calculatedDuration === null && (g.calculatedDuration = Mf(g));
        const {calculatedDuration: y} = g;
        this.calculatedDuration = y,
        this.resolvedDuration = y + c,
        this.totalDuration = this.resolvedDuration * (s + 1) - c,
        this.generator = g
    }
    updateTime(a) {
        const o = Math.round(a - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o
    }
    tick(a, o=!1) {
        const {generator: s, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: m, calculatedDuration: p} = this;
        if (this.startTime === null)
            return s.next(0);
        const {delay: g=0, keyframes: y, repeat: b, repeatType: S, repeatDelay: E, type: D, onUpdate: O, finalKeyframe: _} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, a) : this.speed < 0 && (this.startTime = Math.min(a - c / this.speed, this.startTime)),
        o ? this.currentTime = a : this.updateTime(a);
        const H = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
          , Q = this.playbackSpeed >= 0 ? H < 0 : H > c;
        this.currentTime = Math.max(H, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let Y = this.currentTime
          , G = s;
        if (b) {
            const L = Math.min(this.currentTime, c) / m;
            let at = Math.floor(L)
              , $ = L % 1;
            !$ && L >= 1 && ($ = 1),
            $ === 1 && at--,
            at = Math.min(at, b + 1),
            !!(at % 2) && (S === "reverse" ? ($ = 1 - $,
            E && ($ -= E / m)) : S === "mirror" && (G = f)),
            Y = tn(0, 1, $) * m
        }
        let F;
        Q ? (this.delayState.value = y[0],
        F = this.delayState) : F = G.next(Y),
        d && !Q && (F.value = d(F.value));
        let {done: rt} = F;
        !Q && p !== null && (rt = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && rt);
        return I && D !== Gc && (F.value = Zo(y, this.options, _, this.speed)),
        O && O(F.value),
        I && this.finish(),
        F
    }
    then(a, o) {
        return this.finished.then(a, o)
    }
    get duration() {
        return Qe(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: a=0} = this.options || {};
        return this.duration + Qe(a)
    }
    get time() {
        return Qe(this.currentTime)
    }
    set time(a) {
        a = Re(a),
        this.currentTime = a,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = a : this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
        this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = a,
        this.tick(a))
    }
    getGeneratorVelocity() {
        const a = this.currentTime;
        if (a <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(a);
        const o = this.generator.next(a).value;
        return M0(s => this.generator.next(s).value, a, o)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(a) {
        const o = this.playbackSpeed !== a;
        o && this.driver && this.updateTime(de.now()),
        this.playbackSpeed = a,
        o && this.driver && (this.time = Qe(this.currentTime))
    }
    play() {
        var c, d;
        if (this.isStopped)
            return;
        const {driver: a=rT, startTime: o} = this.options;
        this.driver || (this.driver = a(f => this.tick(f))),
        (d = (c = this.options).onPlay) == null || d.call(c);
        const s = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = o ?? s),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(de.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var a, o;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (o = (a = this.options).onComplete) == null || o.call(a)
    }
    cancel() {
        var a, o;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (o = (a = this.options).onCancel) == null || o.call(a)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(a) {
        return this.startTime = 0,
        this.tick(a, !0)
    }
    attachTimeline(a) {
        var o;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (o = this.driver) == null || o.stop(),
        a.observe(this)
    }
}
function AT(i) {
    for (let a = 1; a < i.length; a++)
        i[a] ?? (i[a] = i[a - 1])
}
const Oi = i => i * 180 / Math.PI
  , Xc = i => {
    const a = Oi(Math.atan2(i[1], i[0]));
    return Qc(a)
}
  , ET = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: i => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Xc,
    rotateZ: Xc,
    skewX: i => Oi(Math.atan(i[1])),
    skewY: i => Oi(Math.atan(i[2])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}
  , Qc = i => (i = i % 360,
i < 0 && (i += 360),
i)
  , hg = Xc
  , mg = i => Math.sqrt(i[0] * i[0] + i[1] * i[1])
  , pg = i => Math.sqrt(i[4] * i[4] + i[5] * i[5])
  , MT = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: mg,
    scaleY: pg,
    scale: i => (mg(i) + pg(i)) / 2,
    rotateX: i => Qc(Oi(Math.atan2(i[6], i[5]))),
    rotateY: i => Qc(Oi(Math.atan2(-i[2], i[0]))),
    rotateZ: hg,
    rotate: hg,
    skewX: i => Oi(Math.atan(i[4])),
    skewY: i => Oi(Math.atan(i[1])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Zc(i) {
    return i.includes("scale") ? 1 : 0
}
function Kc(i, a) {
    if (!i || i === "none")
        return Zc(a);
    const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let s, c;
    if (o)
        s = MT,
        c = o;
    else {
        const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        s = ET,
        c = m
    }
    if (!c)
        return Zc(a);
    const d = s[a]
      , f = c[1].split(",").map(CT);
    return typeof d == "function" ? d(f) : f[d]
}
const jT = (i, a) => {
    const {transform: o="none"} = getComputedStyle(i);
    return Kc(o, a)
}
;
function CT(i) {
    return parseFloat(i.trim())
}
const Oa = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Va = new Set(Oa)
  , gg = i => i === Ra || i === nt
  , DT = new Set(["x", "y", "z"])
  , NT = Oa.filter(i => !DT.has(i));
function zT(i) {
    const a = [];
    return NT.forEach(o => {
        const s = i.getValue(o);
        s !== void 0 && (a.push([o, s.get()]),
        s.set(o.startsWith("scale") ? 1 : 0))
    }
    ),
    a
}
const li = {
    width: ({x: i}, {paddingLeft: a="0", paddingRight: o="0", boxSizing: s}) => {
        const c = i.max - i.min;
        return s === "border-box" ? c : c - parseFloat(a) - parseFloat(o)
    }
    ,
    height: ({y: i}, {paddingTop: a="0", paddingBottom: o="0", boxSizing: s}) => {
        const c = i.max - i.min;
        return s === "border-box" ? c : c - parseFloat(a) - parseFloat(o)
    }
    ,
    top: (i, {top: a}) => parseFloat(a),
    left: (i, {left: a}) => parseFloat(a),
    bottom: ({y: i}, {top: a}) => parseFloat(a) + (i.max - i.min),
    right: ({x: i}, {left: a}) => parseFloat(a) + (i.max - i.min),
    x: (i, {transform: a}) => Kc(a, "x"),
    y: (i, {transform: a}) => Kc(a, "y")
};
li.translateX = li.x;
li.translateY = li.y;
const _i = new Set;
let Jc = !1
  , Fc = !1
  , Pc = !1;
function D0() {
    if (Fc) {
        const i = Array.from(_i).filter(s => s.needsMeasurement)
          , a = new Set(i.map(s => s.element))
          , o = new Map;
        a.forEach(s => {
            const c = zT(s);
            c.length && (o.set(s, c),
            s.render())
        }
        ),
        i.forEach(s => s.measureInitialState()),
        a.forEach(s => {
            s.render();
            const c = o.get(s);
            c && c.forEach( ([d,f]) => {
                var m;
                (m = s.getValue(d)) == null || m.set(f)
            }
            )
        }
        ),
        i.forEach(s => s.measureEndState()),
        i.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        }
        )
    }
    Fc = !1,
    Jc = !1,
    _i.forEach(i => i.complete(Pc)),
    _i.clear()
}
function N0() {
    _i.forEach(i => {
        i.readKeyframes(),
        i.needsMeasurement && (Fc = !0)
    }
    )
}
function RT() {
    Pc = !0,
    N0(),
    D0(),
    Pc = !1
}
class Df {
    constructor(a, o, s, c, d, f=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...a],
        this.onComplete = o,
        this.name = s,
        this.motionValue = c,
        this.element = d,
        this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (_i.add(this),
        Jc || (Jc = !0,
        St.read(N0),
        St.resolveKeyframes(D0))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: a, name: o, element: s, motionValue: c} = this;
        if (a[0] === null) {
            const d = c == null ? void 0 : c.get()
              , f = a[a.length - 1];
            if (d !== void 0)
                a[0] = d;
            else if (s && o) {
                const m = s.readValue(o, f);
                m != null && (a[0] = m)
            }
            a[0] === void 0 && (a[0] = f),
            c && d === void 0 && c.set(a[0])
        }
        AT(a)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(a=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
        _i.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (_i.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const OT = i => i.startsWith("--");
function z0(i, a, o) {
    OT(a) ? i.style.setProperty(a, o) : i.style[a] = o
}
const VT = {};
function Nf(i, a) {
    const o = l0(i);
    return () => VT[a] ?? o()
}
const zf = Nf( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , R0 = Nf( () => window.ViewTimeline !== void 0, "viewTimeline")
  , O0 = Nf( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Rl = ([i,a,o,s]) => `cubic-bezier(${i}, ${a}, ${o}, ${s})`
  , yg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Rl([0, .65, .55, 1]),
    circOut: Rl([.55, 0, 1, .45]),
    backIn: Rl([.31, .01, .66, -.59]),
    backOut: Rl([.33, 1.53, .69, .99])
};
function V0(i, a) {
    if (i)
        return typeof i == "function" ? O0() ? E0(i, a) : "ease-out" : p0(i) ? Rl(i) : Array.isArray(i) ? i.map(o => V0(o, a) || yg.easeOut) : yg[i]
}
function _T(i, a, o, {delay: s=0, duration: c=300, repeat: d=0, repeatType: f="loop", ease: m="easeOut", times: p}={}, g=void 0) {
    const y = {
        [a]: o
    };
    p && (y.offset = p);
    const b = V0(m, c);
    Array.isArray(b) && (y.easing = b);
    const S = {
        delay: s,
        duration: c,
        easing: Array.isArray(b) ? "linear" : b,
        fill: "both",
        iterations: d + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return g && (S.pseudoElement = g),
    i.animate(y, S)
}
function _0(i) {
    return typeof i == "function" && "applyToOptions"in i
}
function BT({type: i, ...a}) {
    return _0(i) && O0() ? i.applyToOptions(a) : (a.duration ?? (a.duration = 300),
    a.ease ?? (a.ease = "easeOut"),
    a)
}
class B0 extends Cf {
    constructor(a) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !a)
            return;
        const {element: o, name: s, keyframes: c, pseudoElement: d, allowFlatten: f=!1, finalKeyframe: m, onComplete: p} = a;
        this.isPseudoElement = !!d,
        this.allowFlatten = f,
        this.options = a,
        ql(typeof a.type != "string");
        const g = BT(a);
        this.animation = _T(o, s, c, g, d),
        g.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !d) {
                const y = Zo(c, this.options, m, this.speed);
                this.updateMotionValue && this.updateMotionValue(y),
                z0(o, s, y),
                this.animation.cancel()
            }
            p == null || p(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var a, o;
        (o = (a = this.animation).finish) == null || o.call(a)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: a} = this;
        a === "idle" || a === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var o, s, c;
        const a = (o = this.options) == null ? void 0 : o.element;
        !this.isPseudoElement && (a != null && a.isConnected) && ((c = (s = this.animation).commitStyles) == null || c.call(s))
    }
    get duration() {
        var o, s;
        const a = ((s = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null ? void 0 : s.call(o).duration) || 0;
        return Qe(Number(a))
    }
    get iterationDuration() {
        const {delay: a=0} = this.options || {};
        return this.duration + Qe(a)
    }
    get time() {
        return Qe(Number(this.animation.currentTime) || 0)
    }
    set time(a) {
        const o = this.finishedTime !== null;
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = Re(a),
        o && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(a) {
        a < 0 && (this.finishedTime = null),
        this.animation.playbackRate = a
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(a) {
        this.manualStartTime = this.animation.startTime = a
    }
    attachTimeline({timeline: a, rangeStart: o, rangeEnd: s, observe: c}) {
        var d;
        return this.allowFlatten && ((d = this.animation.effect) == null || d.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        a && zf() ? (this.animation.timeline = a,
        o && (this.animation.rangeStart = o),
        s && (this.animation.rangeEnd = s),
        Se) : c(this)
    }
}
const U0 = {
    anticipate: f0,
    backInOut: c0,
    circInOut: h0
};
function UT(i) {
    return i in U0
}
function LT(i) {
    typeof i.ease == "string" && UT(i.ease) && (i.ease = U0[i.ease])
}
const Ac = 10;
class kT extends B0 {
    constructor(a) {
        LT(a),
        C0(a),
        super(a),
        a.startTime !== void 0 && a.autoplay !== !1 && (this.startTime = a.startTime),
        this.options = a
    }
    updateMotionValue(a) {
        const {motionValue: o, onUpdate: s, onComplete: c, element: d, ...f} = this.options;
        if (!o)
            return;
        if (a !== void 0) {
            o.set(a);
            return
        }
        const m = new Gl({
            ...f,
            autoplay: !1
        })
          , p = Math.max(Ac, de.now() - this.startTime)
          , g = tn(0, Ac, p - Ac)
          , y = m.sample(p).value
          , {name: b} = this.options;
        d && b && z0(d, b, y),
        o.setWithVelocity(m.sample(Math.max(0, p - g)).value, y, g),
        m.stop()
    }
}
const vg = (i, a) => a === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (Ie.test(i) || i === "0") && !i.startsWith("url("));
function HT(i) {
    const a = i[0];
    if (i.length === 1)
        return !0;
    for (let o = 0; o < i.length; o++)
        if (i[o] !== a)
            return !0
}
function qT(i, a, o, s) {
    const c = i[0];
    if (c === null)
        return !1;
    if (a === "display" || a === "visibility")
        return !0;
    const d = i[i.length - 1]
      , f = vg(c, a)
      , m = vg(d, a);
    return !f || !m ? !1 : HT(i) || (o === "spring" || _0(o)) && s
}
function Wc(i) {
    i.duration = 0,
    i.type = "keyframes"
}
const L0 = new Set(["opacity", "clipPath", "filter", "transform"])
  , YT = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function GT(i) {
    for (let a = 0; a < i.length; a++)
        if (typeof i[a] == "string" && YT.test(i[a]))
            return !0;
    return !1
}
const XT = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , QT = l0( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ZT(i) {
    var b;
    const {motionValue: a, name: o, repeatDelay: s, repeatType: c, damping: d, type: f, keyframes: m} = i;
    if (!(((b = a == null ? void 0 : a.owner) == null ? void 0 : b.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: g, transformTemplate: y} = a.owner.getProps();
    return QT() && o && (L0.has(o) || XT.has(o) && GT(m)) && (o !== "transform" || !y) && !g && !s && c !== "mirror" && d !== 0 && f !== "inertia"
}
const KT = 40;
class JT extends Cf {
    constructor({autoplay: a=!0, delay: o=0, type: s="keyframes", repeat: c=0, repeatDelay: d=0, repeatType: f="loop", keyframes: m, name: p, motionValue: g, element: y, ...b}) {
        var D;
        super(),
        this.stop = () => {
            var O, _;
            this._animation && (this._animation.stop(),
            (O = this.stopTimeline) == null || O.call(this)),
            (_ = this.keyframeResolver) == null || _.cancel()
        }
        ,
        this.createdAt = de.now();
        const S = {
            autoplay: a,
            delay: o,
            type: s,
            repeat: c,
            repeatDelay: d,
            repeatType: f,
            name: p,
            motionValue: g,
            element: y,
            ...b
        }
          , E = (y == null ? void 0 : y.KeyframeResolver) || Df;
        this.keyframeResolver = new E(m, (O, _, H) => this.onKeyframesResolved(O, _, S, !H),p,g,y),
        (D = this.keyframeResolver) == null || D.scheduleResolve()
    }
    onKeyframesResolved(a, o, s, c) {
        var H, Q;
        this.keyframeResolver = void 0;
        const {name: d, type: f, velocity: m, delay: p, isHandoff: g, onUpdate: y} = s;
        this.resolvedAt = de.now();
        let b = !0;
        qT(a, d, f, m) || (b = !1,
        (oi.instantAnimations || !p) && (y == null || y(Zo(a, s, o))),
        a[0] = a[a.length - 1],
        Wc(s),
        s.repeat = 0);
        const E = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > KT ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: o,
            ...s,
            keyframes: a
        }
          , D = b && !g && ZT(E)
          , O = (Q = (H = E.motionValue) == null ? void 0 : H.owner) == null ? void 0 : Q.current;
        let _;
        if (D)
            try {
                _ = new kT({
                    ...E,
                    element: O
                })
            } catch {
                _ = new Gl(E)
            }
        else
            _ = new Gl(E);
        _.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Se),
        this.pendingTimeline && (this.stopTimeline = _.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = _
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(a, o) {
        return this.finished.finally(a).then( () => {}
        )
    }
    get animation() {
        var a;
        return this._animation || ((a = this.keyframeResolver) == null || a.resume(),
        RT()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(a) {
        this.animation.time = a
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(a) {
        this.animation.speed = a
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(a) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(a) : this.pendingTimeline = a,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var a;
        this._animation && this.animation.cancel(),
        (a = this.keyframeResolver) == null || a.cancel()
    }
}
function k0(i, a, o, s=0, c=1) {
    const d = Array.from(i).sort( (g, y) => g.sortNodePosition(y)).indexOf(a)
      , f = i.size
      , m = (f - 1) * s;
    return typeof o == "function" ? o(d, f) : c === 1 ? d * s : m - d * s
}
const FT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function PT(i) {
    const a = FT.exec(i);
    if (!a)
        return [, ];
    const [,o,s,c] = a;
    return [`--${o ?? s}`, c]
}
function H0(i, a, o=1) {
    const [s,c] = PT(i);
    if (!s)
        return;
    const d = window.getComputedStyle(a).getPropertyValue(s);
    if (d) {
        const f = d.trim();
        return n0(f) ? parseFloat(f) : f
    }
    return Tf(c) ? H0(c, a, o + 1) : c
}
const WT = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , $T = i => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , IT = {
    type: "keyframes",
    duration: .8
}
  , t2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , e2 = (i, {keyframes: a}) => a.length > 2 ? IT : Va.has(i) ? i.startsWith("scale") ? $T(a[1]) : WT : t2;
function q0(i, a) {
    if (i != null && i.inherit && a) {
        const {inherit: o, ...s} = i;
        return {
            ...a,
            ...s
        }
    }
    return i
}
function Rf(i, a) {
    const o = (i == null ? void 0 : i[a]) ?? (i == null ? void 0 : i.default) ?? i;
    return o !== i ? q0(o, i) : o
}
const n2 = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function i2(i) {
    for (const a in i)
        if (!n2.has(a))
            return !0;
    return !1
}
const Of = (i, a, o, s={}, c, d) => f => {
    const m = Rf(s, i) || {}
      , p = m.delay || s.delay || 0;
    let {elapsed: g=0} = s;
    g = g - Re(p);
    const y = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: a.getVelocity(),
        ...m,
        delay: -g,
        onUpdate: S => {
            a.set(S),
            m.onUpdate && m.onUpdate(S)
        }
        ,
        onComplete: () => {
            f(),
            m.onComplete && m.onComplete()
        }
        ,
        name: i,
        motionValue: a,
        element: d ? void 0 : c
    };
    i2(m) || Object.assign(y, e2(i, y)),
    y.duration && (y.duration = Re(y.duration)),
    y.repeatDelay && (y.repeatDelay = Re(y.repeatDelay)),
    y.from !== void 0 && (y.keyframes[0] = y.from);
    let b = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Wc(y),
    y.delay === 0 && (b = !0)),
    (oi.instantAnimations || oi.skipAnimations || c != null && c.shouldSkipAnimations) && (b = !0,
    Wc(y),
    y.delay = 0),
    y.allowFlatten = !m.type && !m.ease,
    b && !d && a.get() !== void 0) {
        const S = Zo(y.keyframes, m);
        if (S !== void 0) {
            St.update( () => {
                y.onUpdate(S),
                y.onComplete()
            }
            );
            return
        }
    }
    return m.isSync ? new Gl(y) : new JT(y)
}
;
function bg(i) {
    const a = [{}, {}];
    return i == null || i.values.forEach( (o, s) => {
        a[0][s] = o.get(),
        a[1][s] = o.getVelocity()
    }
    ),
    a
}
function Vf(i, a, o, s) {
    if (typeof a == "function") {
        const [c,d] = bg(s);
        a = a(o !== void 0 ? o : i.custom, c, d)
    }
    if (typeof a == "string" && (a = i.variants && i.variants[a]),
    typeof a == "function") {
        const [c,d] = bg(s);
        a = a(o !== void 0 ? o : i.custom, c, d)
    }
    return a
}
function Bi(i, a, o) {
    const s = i.getProps();
    return Vf(s, a, o !== void 0 ? o : s.custom, i)
}
const Y0 = new Set(["width", "height", "top", "left", "right", "bottom", ...Oa])
  , xg = 30
  , a2 = i => !isNaN(parseFloat(i))
  , Bl = {
    current: void 0
};
class l2 {
    constructor(a, o={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = s => {
            var d;
            const c = de.now();
            if (this.updatedAt !== c && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(s),
            this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
                for (const f of this.dependents)
                    f.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(a),
        this.owner = o.owner
    }
    setCurrent(a) {
        this.current = a,
        this.updatedAt = de.now(),
        this.canTrackVelocity === null && a !== void 0 && (this.canTrackVelocity = a2(this.current))
    }
    setPrevFrameValue(a=this.current) {
        this.prevFrameValue = a,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(a) {
        return this.on("change", a)
    }
    on(a, o) {
        this.events[a] || (this.events[a] = new vf);
        const s = this.events[a].add(o);
        return a === "change" ? () => {
            s(),
            St.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const a in this.events)
            this.events[a].clear()
    }
    attach(a, o) {
        this.passiveEffect = a,
        this.stopPassiveEffect = o
    }
    set(a) {
        this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a)
    }
    setWithVelocity(a, o, s) {
        this.set(o),
        this.prev = void 0,
        this.prevFrameValue = a,
        this.prevUpdatedAt = this.updatedAt - s
    }
    jump(a, o=!0) {
        this.updateAndNotify(a),
        this.prev = a,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        o && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var a;
        (a = this.events.change) == null || a.notify(this.current)
    }
    addDependent(a) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(a)
    }
    removeDependent(a) {
        this.dependents && this.dependents.delete(a)
    }
    get() {
        return Bl.current && Bl.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const a = de.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > xg)
            return 0;
        const o = Math.min(this.updatedAt - this.prevUpdatedAt, xg);
        return bf(parseFloat(this.current) - parseFloat(this.prevFrameValue), o)
    }
    start(a) {
        return this.stop(),
        new Promise(o => {
            this.hasAnimated = !0,
            this.animation = a(o),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var a, o;
        (a = this.dependents) == null || a.clear(),
        (o = this.events.destroy) == null || o.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function $e(i, a) {
    return new l2(i,a)
}
const $c = i => Array.isArray(i);
function s2(i, a, o) {
    i.hasValue(a) ? i.getValue(a).set(o) : i.addValue(a, $e(o))
}
function o2(i) {
    return $c(i) ? i[i.length - 1] || 0 : i
}
function r2(i, a) {
    const o = Bi(i, a);
    let {transitionEnd: s={}, transition: c={}, ...d} = o || {};
    d = {
        ...d,
        ...s
    };
    for (const f in d) {
        const m = o2(d[f]);
        s2(i, f, m)
    }
}
const ee = i => !!(i && i.getVelocity);
function u2(i) {
    return !!(ee(i) && i.add)
}
function Ic(i, a) {
    const o = i.getValue("willChange");
    if (u2(o))
        return o.add(a);
    if (!o && oi.WillChange) {
        const s = new oi.WillChange("auto");
        i.addValue("willChange", s),
        s.add(a)
    }
}
function _f(i) {
    return i.replace(/([A-Z])/g, a => `-${a.toLowerCase()}`)
}
const c2 = "framerAppearId"
  , G0 = "data-" + _f(c2);
function X0(i) {
    return i.props[G0]
}
function f2({protectedKeys: i, needsAnimating: a}, o) {
    const s = i.hasOwnProperty(o) && a[o] !== !0;
    return a[o] = !1,
    s
}
function Q0(i, a, {delay: o=0, transitionOverride: s, type: c}={}) {
    let {transition: d, transitionEnd: f, ...m} = a;
    const p = i.getDefaultTransition();
    d = d ? q0(d, p) : p;
    const g = d == null ? void 0 : d.reduceMotion;
    s && (d = s);
    const y = []
      , b = c && i.animationState && i.animationState.getState()[c];
    for (const S in m) {
        const E = i.getValue(S, i.latestValues[S] ?? null)
          , D = m[S];
        if (D === void 0 || b && f2(b, S))
            continue;
        const O = {
            delay: o,
            ...Rf(d || {}, S)
        }
          , _ = E.get();
        if (_ !== void 0 && !E.isAnimating() && !Array.isArray(D) && D === _ && !O.velocity) {
            St.update( () => E.set(D));
            continue
        }
        let H = !1;
        if (window.MotionHandoffAnimation) {
            const G = X0(i);
            if (G) {
                const F = window.MotionHandoffAnimation(G, S, St);
                F !== null && (O.startTime = F,
                H = !0)
            }
        }
        Ic(i, S);
        const Q = g ?? i.shouldReduceMotion;
        E.start(Of(S, E, D, Q && Y0.has(S) ? {
            type: !1
        } : O, i, H));
        const Y = E.animation;
        Y && y.push(Y)
    }
    if (f) {
        const S = () => St.update( () => {
            f && r2(i, f)
        }
        );
        y.length ? Promise.all(y).then(S) : S()
    }
    return y
}
function tf(i, a, o={}) {
    var p;
    const s = Bi(i, a, o.type === "exit" ? (p = i.presenceContext) == null ? void 0 : p.custom : void 0);
    let {transition: c=i.getDefaultTransition() || {}} = s || {};
    o.transitionOverride && (c = o.transitionOverride);
    const d = s ? () => Promise.all(Q0(i, s, o)) : () => Promise.resolve()
      , f = i.variantChildren && i.variantChildren.size ? (g=0) => {
        const {delayChildren: y=0, staggerChildren: b, staggerDirection: S} = c;
        return d2(i, a, g, y, b, S, o)
    }
    : () => Promise.resolve()
      , {when: m} = c;
    if (m) {
        const [g,y] = m === "beforeChildren" ? [d, f] : [f, d];
        return g().then( () => y())
    } else
        return Promise.all([d(), f(o.delay)])
}
function d2(i, a, o=0, s=0, c=0, d=1, f) {
    const m = [];
    for (const p of i.variantChildren)
        p.notify("AnimationStart", a),
        m.push(tf(p, a, {
            ...f,
            delay: o + (typeof s == "function" ? 0 : s) + k0(i.variantChildren, p, s, c, d)
        }).then( () => p.notify("AnimationComplete", a)));
    return Promise.all(m)
}
function h2(i, a, o={}) {
    i.notify("AnimationStart", a);
    let s;
    if (Array.isArray(a)) {
        const c = a.map(d => tf(i, d, o));
        s = Promise.all(c)
    } else if (typeof a == "string")
        s = tf(i, a, o);
    else {
        const c = typeof a == "function" ? Bi(i, a, o.custom) : a;
        s = Promise.all(Q0(i, c, o))
    }
    return s.then( () => {
        i.notify("AnimationComplete", a)
    }
    )
}
const m2 = {
    test: i => i === "auto",
    parse: i => i
}
  , Z0 = i => a => a.test(i)
  , K0 = [Ra, nt, un, ii, GS, YS, m2]
  , Sg = i => K0.find(Z0(i));
function p2(i) {
    return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || a0(i) : !0
}
const g2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function y2(i) {
    const [a,o] = i.slice(0, -1).split("(");
    if (a === "drop-shadow")
        return i;
    const [s] = o.match(wf) || [];
    if (!s)
        return i;
    const c = o.replace(s, "");
    let d = g2.has(a) ? 1 : 0;
    return s !== o && (d *= 100),
    a + "(" + d + c + ")"
}
const v2 = /\b([a-z-]*)\(.*?\)/gu
  , ef = {
    ...Ie,
    getAnimatableNone: i => {
        const a = i.match(v2);
        return a ? a.map(y2).join(" ") : i
    }
}
  , nf = {
    ...Ie,
    getAnimatableNone: i => {
        const a = Ie.parse(i);
        return Ie.createTransformer(i)(a.map(s => typeof s == "number" ? 0 : typeof s == "object" ? {
            ...s,
            alpha: 1
        } : s))
    }
}
  , Tg = {
    ...Ra,
    transform: Math.round
}
  , b2 = {
    rotate: ii,
    rotateX: ii,
    rotateY: ii,
    rotateZ: ii,
    scale: po,
    scaleX: po,
    scaleY: po,
    scaleZ: po,
    skew: ii,
    skewX: ii,
    skewY: ii,
    distance: nt,
    translateX: nt,
    translateY: nt,
    translateZ: nt,
    x: nt,
    y: nt,
    z: nt,
    perspective: nt,
    transformPerspective: nt,
    opacity: Yl,
    originX: rg,
    originY: rg,
    originZ: nt
}
  , Bf = {
    borderWidth: nt,
    borderTopWidth: nt,
    borderRightWidth: nt,
    borderBottomWidth: nt,
    borderLeftWidth: nt,
    borderRadius: nt,
    borderTopLeftRadius: nt,
    borderTopRightRadius: nt,
    borderBottomRightRadius: nt,
    borderBottomLeftRadius: nt,
    width: nt,
    maxWidth: nt,
    height: nt,
    maxHeight: nt,
    top: nt,
    right: nt,
    bottom: nt,
    left: nt,
    inset: nt,
    insetBlock: nt,
    insetBlockStart: nt,
    insetBlockEnd: nt,
    insetInline: nt,
    insetInlineStart: nt,
    insetInlineEnd: nt,
    padding: nt,
    paddingTop: nt,
    paddingRight: nt,
    paddingBottom: nt,
    paddingLeft: nt,
    paddingBlock: nt,
    paddingBlockStart: nt,
    paddingBlockEnd: nt,
    paddingInline: nt,
    paddingInlineStart: nt,
    paddingInlineEnd: nt,
    margin: nt,
    marginTop: nt,
    marginRight: nt,
    marginBottom: nt,
    marginLeft: nt,
    marginBlock: nt,
    marginBlockStart: nt,
    marginBlockEnd: nt,
    marginInline: nt,
    marginInlineStart: nt,
    marginInlineEnd: nt,
    fontSize: nt,
    backgroundPositionX: nt,
    backgroundPositionY: nt,
    ...b2,
    zIndex: Tg,
    fillOpacity: Yl,
    strokeOpacity: Yl,
    numOctaves: Tg
}
  , x2 = {
    ...Bf,
    color: Wt,
    backgroundColor: Wt,
    outlineColor: Wt,
    fill: Wt,
    stroke: Wt,
    borderColor: Wt,
    borderTopColor: Wt,
    borderRightColor: Wt,
    borderBottomColor: Wt,
    borderLeftColor: Wt,
    filter: ef,
    WebkitFilter: ef,
    mask: nf,
    WebkitMask: nf
}
  , J0 = i => x2[i]
  , S2 = new Set([ef, nf]);
function F0(i, a) {
    let o = J0(i);
    return S2.has(o) || (o = Ie),
    o.getAnimatableNone ? o.getAnimatableNone(a) : void 0
}
const T2 = new Set(["auto", "none", "0"]);
function w2(i, a, o) {
    let s = 0, c;
    for (; s < i.length && !c; ) {
        const d = i[s];
        typeof d == "string" && !T2.has(d) && za(d).values.length && (c = i[s]),
        s++
    }
    if (c && o)
        for (const d of a)
            i[d] = F0(o, c)
}
class A2 extends Df {
    constructor(a, o, s, c, d) {
        super(a, o, s, c, d, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: a, element: o, name: s} = this;
        if (!o || !o.current)
            return;
        super.readKeyframes();
        for (let y = 0; y < a.length; y++) {
            let b = a[y];
            if (typeof b == "string" && (b = b.trim(),
            Tf(b))) {
                const S = H0(b, o.current);
                S !== void 0 && (a[y] = S),
                y === a.length - 1 && (this.finalKeyframe = b)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Y0.has(s) || a.length !== 2)
            return;
        const [c,d] = a
          , f = Sg(c)
          , m = Sg(d)
          , p = og(c)
          , g = og(d);
        if (p !== g && li[s]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== m)
            if (gg(f) && gg(m))
                for (let y = 0; y < a.length; y++) {
                    const b = a[y];
                    typeof b == "string" && (a[y] = parseFloat(b))
                }
            else
                li[s] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: a, name: o} = this
          , s = [];
        for (let c = 0; c < a.length; c++)
            (a[c] === null || p2(a[c])) && s.push(c);
        s.length && w2(a, s, o)
    }
    measureInitialState() {
        const {element: a, unresolvedKeyframes: o, name: s} = this;
        if (!a || !a.current)
            return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = li[s](a.measureViewportBox(), window.getComputedStyle(a.current)),
        o[0] = this.measuredOrigin;
        const c = o[o.length - 1];
        c !== void 0 && a.getValue(s, c).jump(c, !1)
    }
    measureEndState() {
        var m;
        const {element: a, name: o, unresolvedKeyframes: s} = this;
        if (!a || !a.current)
            return;
        const c = a.getValue(o);
        c && c.jump(this.measuredOrigin, !1);
        const d = s.length - 1
          , f = s[d];
        s[d] = li[o](a.measureViewportBox(), window.getComputedStyle(a.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        (m = this.removedTransforms) != null && m.length && this.removedTransforms.forEach( ([p,g]) => {
            a.getValue(p).set(g)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function P0(i, a, o) {
    if (i == null)
        return [];
    if (i instanceof EventTarget)
        return [i];
    if (typeof i == "string") {
        const c = document.querySelectorAll(i);
        return c ? Array.from(c) : []
    }
    return Array.from(i).filter(s => s != null)
}
const W0 = (i, a) => a && typeof i == "number" ? a.transform(i) : i;
function Ul(i) {
    return i0(i) && "offsetHeight"in i && !("ownerSVGElement"in i)
}
const {schedule: Uf} = g0(queueMicrotask, !1)
  , We = {
    x: !1,
    y: !1
};
function $0() {
    return We.x || We.y
}
function E2(i) {
    return i === "x" || i === "y" ? We[i] ? null : (We[i] = !0,
    () => {
        We[i] = !1
    }
    ) : We.x || We.y ? null : (We.x = We.y = !0,
    () => {
        We.x = We.y = !1
    }
    )
}
function I0(i, a) {
    const o = P0(i)
      , s = new AbortController
      , c = {
        passive: !0,
        ...a,
        signal: s.signal
    };
    return [o, c, () => s.abort()]
}
function M2(i) {
    return !(i.pointerType === "touch" || $0())
}
function j2(i, a, o={}) {
    const [s,c,d] = I0(i, o);
    return s.forEach(f => {
        let m = !1, p = !1, g;
        const y = () => {
            f.removeEventListener("pointerleave", D)
        }
          , b = _ => {
            g && (g(_),
            g = void 0),
            y()
        }
          , S = _ => {
            m = !1,
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            p && (p = !1,
            b(_))
        }
          , E = () => {
            m = !0,
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c)
        }
          , D = _ => {
            if (_.pointerType !== "touch") {
                if (m) {
                    p = !0;
                    return
                }
                b(_)
            }
        }
          , O = _ => {
            if (!M2(_))
                return;
            p = !1;
            const H = a(f, _);
            typeof H == "function" && (g = H,
            f.addEventListener("pointerleave", D, c))
        }
        ;
        f.addEventListener("pointerenter", O, c),
        f.addEventListener("pointerdown", E, c)
    }
    ),
    d
}
const tv = (i, a) => a ? i === a ? !0 : tv(i, a.parentElement) : !1
  , Lf = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1
  , C2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function D2(i) {
    return C2.has(i.tagName) || i.isContentEditable === !0
}
const N2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function z2(i) {
    return N2.has(i.tagName) || i.isContentEditable === !0
}
const Ao = new WeakSet;
function wg(i) {
    return a => {
        a.key === "Enter" && i(a)
    }
}
function Ec(i, a) {
    i.dispatchEvent(new PointerEvent("pointer" + a,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const R2 = (i, a) => {
    const o = i.currentTarget;
    if (!o)
        return;
    const s = wg( () => {
        if (Ao.has(o))
            return;
        Ec(o, "down");
        const c = wg( () => {
            Ec(o, "up")
        }
        )
          , d = () => Ec(o, "cancel");
        o.addEventListener("keyup", c, a),
        o.addEventListener("blur", d, a)
    }
    );
    o.addEventListener("keydown", s, a),
    o.addEventListener("blur", () => o.removeEventListener("keydown", s), a)
}
;
function Ag(i) {
    return Lf(i) && !$0()
}
const Eg = new WeakSet;
function O2(i, a, o={}) {
    const [s,c,d] = I0(i, o)
      , f = m => {
        const p = m.currentTarget;
        if (!Ag(m) || Eg.has(m))
            return;
        Ao.add(p),
        o.stopPropagation && Eg.add(m);
        const g = a(p, m)
          , y = (E, D) => {
            window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", S),
            Ao.has(p) && Ao.delete(p),
            Ag(E) && typeof g == "function" && g(E, {
                success: D
            })
        }
          , b = E => {
            y(E, p === window || p === document || o.useGlobalTarget || tv(p, E.target))
        }
          , S = E => {
            y(E, !1)
        }
        ;
        window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", S, c)
    }
    ;
    return s.forEach(m => {
        (o.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        Ul(m) && (m.addEventListener("focus", g => R2(g, c)),
        !D2(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0))
    }
    ),
    d
}
function kf(i) {
    return i0(i) && "ownerSVGElement"in i
}
const Eo = new WeakMap;
let ai;
const ev = (i, a, o) => (s, c) => c && c[0] ? c[0][i + "Size"] : kf(s) && "getBBox"in s ? s.getBBox()[a] : s[o]
  , V2 = ev("inline", "width", "offsetWidth")
  , _2 = ev("block", "height", "offsetHeight");
function B2({target: i, borderBoxSize: a}) {
    var o;
    (o = Eo.get(i)) == null || o.forEach(s => {
        s(i, {
            get width() {
                return V2(i, a)
            },
            get height() {
                return _2(i, a)
            }
        })
    }
    )
}
function U2(i) {
    i.forEach(B2)
}
function L2() {
    typeof ResizeObserver > "u" || (ai = new ResizeObserver(U2))
}
function k2(i, a) {
    ai || L2();
    const o = P0(i);
    return o.forEach(s => {
        let c = Eo.get(s);
        c || (c = new Set,
        Eo.set(s, c)),
        c.add(a),
        ai == null || ai.observe(s)
    }
    ),
    () => {
        o.forEach(s => {
            const c = Eo.get(s);
            c == null || c.delete(a),
            c != null && c.size || ai == null || ai.unobserve(s)
        }
        )
    }
}
const Mo = new Set;
let ja;
function H2() {
    ja = () => {
        const i = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Mo.forEach(a => a(i))
    }
    ,
    window.addEventListener("resize", ja)
}
function q2(i) {
    return Mo.add(i),
    ja || H2(),
    () => {
        Mo.delete(i),
        !Mo.size && typeof ja == "function" && (window.removeEventListener("resize", ja),
        ja = void 0)
    }
}
function af(i, a) {
    return typeof i == "function" ? q2(i) : k2(i, a)
}
function nv(i, a) {
    let o;
    const s = () => {
        const {currentTime: c} = a
          , f = (c === null ? 0 : c.value) / 100;
        o !== f && i(f),
        o = f
    }
    ;
    return St.preUpdate(s, !0),
    () => Oe(s)
}
function Y2(i) {
    return kf(i) && i.tagName === "svg"
}
function G2(...i) {
    const a = !Array.isArray(i[0])
      , o = a ? 0 : -1
      , s = i[0 + o]
      , c = i[1 + o]
      , d = i[2 + o]
      , f = i[3 + o]
      , m = jf(c, d, f);
    return a ? m(s) : m
}
function X2(i, a, o={}) {
    const s = i.get();
    let c = null, d = s, f;
    const m = typeof s == "string" ? s.replace(/[\d.-]/g, "") : void 0
      , p = () => {
        c && (c.stop(),
        c = null),
        i.animation = void 0
    }
      , g = () => {
        const b = Mg(i.get())
          , S = Mg(d);
        if (b === S) {
            p();
            return
        }
        const E = c ? c.getGeneratorVelocity() : i.getVelocity();
        p(),
        c = new Gl({
            keyframes: [b, S],
            velocity: E,
            type: "spring",
            restDelta: .001,
            restSpeed: .01,
            ...o,
            onUpdate: f
        })
    }
      , y = () => {
        var b;
        g(),
        i.animation = c ?? void 0,
        (b = i.events.animationStart) == null || b.notify(),
        c == null || c.then( () => {
            var S;
            i.animation = void 0,
            (S = i.events.animationComplete) == null || S.notify()
        }
        )
    }
    ;
    if (i.attach( (b, S) => {
        d = b,
        f = E => S(Mc(E, m)),
        St.postRender(y)
    }
    , p),
    ee(a)) {
        let b = o.skipInitialAnimation === !0;
        const S = a.on("change", D => {
            b ? (b = !1,
            i.jump(Mc(D, m), !1)) : i.set(Mc(D, m))
        }
        )
          , E = i.on("destroy", S);
        return () => {
            S(),
            E()
        }
    }
    return p
}
function Mc(i, a) {
    return a ? i + a : i
}
function Mg(i) {
    return typeof i == "number" ? i : parseFloat(i)
}
const Q2 = [...K0, Wt, Ie]
  , Z2 = i => Q2.find(Z0(i))
  , jg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ca = () => ({
    x: jg(),
    y: jg()
})
  , Cg = () => ({
    min: 0,
    max: 0
})
  , te = () => ({
    x: Cg(),
    y: Cg()
})
  , K2 = new WeakMap;
function Ko(i) {
    return i !== null && typeof i == "object" && typeof i.start == "function"
}
function Xl(i) {
    return typeof i == "string" || Array.isArray(i)
}
const Hf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , qf = ["initial", ...Hf];
function Jo(i) {
    return Ko(i.animate) || qf.some(a => Xl(i[a]))
}
function iv(i) {
    return !!(Jo(i) || i.variants)
}
function J2(i, a, o) {
    for (const s in a) {
        const c = a[s]
          , d = o[s];
        if (ee(c))
            i.addValue(s, c);
        else if (ee(d))
            i.addValue(s, $e(c, {
                owner: i
            }));
        else if (d !== c)
            if (i.hasValue(s)) {
                const f = i.getValue(s);
                f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c)
            } else {
                const f = i.getStaticValue(s);
                i.addValue(s, $e(f !== void 0 ? f : c, {
                    owner: i
                }))
            }
    }
    for (const s in o)
        a[s] === void 0 && i.removeValue(s);
    return a
}
const lf = {
    current: null
}
  , av = {
    current: !1
}
  , F2 = typeof window < "u";
function P2() {
    if (av.current = !0,
    !!F2)
        if (window.matchMedia) {
            const i = window.matchMedia("(prefers-reduced-motion)")
              , a = () => lf.current = i.matches;
            i.addEventListener("change", a),
            a()
        } else
            lf.current = !1
}
const Dg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Uo = {};
function lv(i) {
    Uo = i
}
function W2() {
    return Uo
}
class $2 {
    scrapeMotionValuesFromProps(a, o, s) {
        return {}
    }
    constructor({parent: a, props: o, presenceContext: s, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: f, visualState: m}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = Df,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const E = de.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E,
            St.render(this.render, !1, !0))
        }
        ;
        const {latestValues: g, renderState: y} = m;
        this.latestValues = g,
        this.baseTarget = {
            ...g
        },
        this.initialValues = o.initial ? {
            ...g
        } : {},
        this.renderState = y,
        this.parent = a,
        this.props = o,
        this.presenceContext = s,
        this.depth = a ? a.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.skipAnimationsConfig = d,
        this.options = p,
        this.blockInitialAnimation = !!f,
        this.isControllingVariants = Jo(o),
        this.isVariantNode = iv(o),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(a && a.current);
        const {willChange: b, ...S} = this.scrapeMotionValuesFromProps(o, {}, this);
        for (const E in S) {
            const D = S[E];
            g[E] !== void 0 && ee(D) && D.set(g[E])
        }
    }
    mount(a) {
        var o, s;
        if (this.hasBeenMounted)
            for (const c in this.initialValues)
                (o = this.values.get(c)) == null || o.jump(this.initialValues[c]),
                this.latestValues[c] = this.initialValues[c];
        this.current = a,
        K2.set(a, this),
        this.projection && !this.projection.instance && this.projection.mount(a),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (c, d) => this.bindToMotionValue(d, c)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (av.current || P2(),
        this.shouldReduceMotion = lf.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (s = this.parent) == null || s.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var a;
        this.projection && this.projection.unmount(),
        Oe(this.notifyUpdate),
        Oe(this.render),
        this.valueSubscriptions.forEach(o => o()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (a = this.parent) == null || a.removeChild(this);
        for (const o in this.events)
            this.events[o].clear();
        for (const o in this.features) {
            const s = this.features[o];
            s && (s.unmount(),
            s.isMounted = !1)
        }
        this.current = null
    }
    addChild(a) {
        this.children.add(a),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(a)
    }
    removeChild(a) {
        this.children.delete(a),
        this.enteringChildren && this.enteringChildren.delete(a)
    }
    bindToMotionValue(a, o) {
        if (this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(),
        o.accelerate && L0.has(a) && this.current instanceof HTMLElement) {
            const {factory: f, keyframes: m, times: p, ease: g, duration: y} = o.accelerate
              , b = new B0({
                element: this.current,
                name: a,
                keyframes: m,
                times: p,
                ease: g,
                duration: Re(y)
            })
              , S = f(b);
            this.valueSubscriptions.set(a, () => {
                S(),
                b.cancel()
            }
            );
            return
        }
        const s = Va.has(a);
        s && this.onBindTransform && this.onBindTransform();
        const c = o.on("change", f => {
            this.latestValues[a] = f,
            this.props.onUpdate && St.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let d;
        typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, a, o)),
        this.valueSubscriptions.set(a, () => {
            c(),
            d && d(),
            o.owner && o.stop()
        }
        )
    }
    sortNodePosition(a) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== a.type ? 0 : this.sortInstanceNodePosition(this.current, a.current)
    }
    updateFeatures() {
        let a = "animation";
        for (a in Uo) {
            const o = Uo[a];
            if (!o)
                continue;
            const {isEnabled: s, Feature: c} = o;
            if (!this.features[a] && c && s(this.props) && (this.features[a] = new c(this)),
            this.features[a]) {
                const d = this.features[a];
                d.isMounted ? d.update() : (d.mount(),
                d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : te()
    }
    getStaticValue(a) {
        return this.latestValues[a]
    }
    setStaticValue(a, o) {
        this.latestValues[a] = o
    }
    update(a, o) {
        (a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = a,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = o;
        for (let s = 0; s < Dg.length; s++) {
            const c = Dg[s];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const d = "on" + c
              , f = a[d];
            f && (this.propEventSubscriptions[c] = this.on(c, f))
        }
        this.prevMotionValues = J2(this, this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(a) {
        const o = this.getClosestVariantNode();
        if (o)
            return o.variantChildren && o.variantChildren.add(a),
            () => o.variantChildren.delete(a)
    }
    addValue(a, o) {
        const s = this.values.get(a);
        o !== s && (s && this.removeValue(a),
        this.bindToMotionValue(a, o),
        this.values.set(a, o),
        this.latestValues[a] = o.get())
    }
    removeValue(a) {
        this.values.delete(a);
        const o = this.valueSubscriptions.get(a);
        o && (o(),
        this.valueSubscriptions.delete(a)),
        delete this.latestValues[a],
        this.removeValueFromRenderState(a, this.renderState)
    }
    hasValue(a) {
        return this.values.has(a)
    }
    getValue(a, o) {
        if (this.props.values && this.props.values[a])
            return this.props.values[a];
        let s = this.values.get(a);
        return s === void 0 && o !== void 0 && (s = $e(o === null ? void 0 : o, {
            owner: this
        }),
        this.addValue(a, s)),
        s
    }
    readValue(a, o) {
        let s = this.latestValues[a] !== void 0 || !this.current ? this.latestValues[a] : this.getBaseTargetFromProps(this.props, a) ?? this.readValueFromInstance(this.current, a, this.options);
        return s != null && (typeof s == "string" && (n0(s) || a0(s)) ? s = parseFloat(s) : !Z2(s) && Ie.test(o) && (s = F0(a, o)),
        this.setBaseTarget(a, ee(s) ? s.get() : s)),
        ee(s) ? s.get() : s
    }
    setBaseTarget(a, o) {
        this.baseTarget[a] = o
    }
    getBaseTarget(a) {
        var d;
        const {initial: o} = this.props;
        let s;
        if (typeof o == "string" || typeof o == "object") {
            const f = Vf(this.props, o, (d = this.presenceContext) == null ? void 0 : d.custom);
            f && (s = f[a])
        }
        if (o && s !== void 0)
            return s;
        const c = this.getBaseTargetFromProps(this.props, a);
        return c !== void 0 && !ee(c) ? c : this.initialValues[a] !== void 0 && s === void 0 ? void 0 : this.baseTarget[a]
    }
    on(a, o) {
        return this.events[a] || (this.events[a] = new vf),
        this.events[a].add(o)
    }
    notify(a, ...o) {
        this.events[a] && this.events[a].notify(...o)
    }
    scheduleRenderMicrotask() {
        Uf.render(this.render)
    }
}
class sv extends $2 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = A2
    }
    sortInstanceNodePosition(a, o) {
        return a.compareDocumentPosition(o) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(a, o) {
        const s = a.style;
        return s ? s[o] : void 0
    }
    removeValueFromRenderState(a, {vars: o, style: s}) {
        delete o[a],
        delete s[a]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: a} = this.props;
        ee(a) && (this.childSubscription = a.on("change", o => {
            this.current && (this.current.textContent = `${o}`)
        }
        ))
    }
}
class ri {
    constructor(a) {
        this.isMounted = !1,
        this.node = a
    }
    update() {}
}
function ov({top: i, left: a, right: o, bottom: s}) {
    return {
        x: {
            min: a,
            max: o
        },
        y: {
            min: i,
            max: s
        }
    }
}
function I2({x: i, y: a}) {
    return {
        top: a.min,
        right: i.max,
        bottom: a.max,
        left: i.min
    }
}
function tw(i, a) {
    if (!a)
        return i;
    const o = a({
        x: i.left,
        y: i.top
    })
      , s = a({
        x: i.right,
        y: i.bottom
    });
    return {
        top: o.y,
        left: o.x,
        bottom: s.y,
        right: s.x
    }
}
function jc(i) {
    return i === void 0 || i === 1
}
function sf({scale: i, scaleX: a, scaleY: o}) {
    return !jc(i) || !jc(a) || !jc(o)
}
function zi(i) {
    return sf(i) || rv(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY
}
function rv(i) {
    return Ng(i.x) || Ng(i.y)
}
function Ng(i) {
    return i && i !== "0%"
}
function Lo(i, a, o) {
    const s = i - o
      , c = a * s;
    return o + c
}
function zg(i, a, o, s, c) {
    return c !== void 0 && (i = Lo(i, c, s)),
    Lo(i, o, s) + a
}
function of(i, a=0, o=1, s, c) {
    i.min = zg(i.min, a, o, s, c),
    i.max = zg(i.max, a, o, s, c)
}
function uv(i, {x: a, y: o}) {
    of(i.x, a.translate, a.scale, a.originPoint),
    of(i.y, o.translate, o.scale, o.originPoint)
}
const Rg = .999999999999
  , Og = 1.0000000000001;
function ew(i, a, o, s=!1) {
    var m;
    const c = o.length;
    if (!c)
        return;
    a.x = a.y = 1;
    let d, f;
    for (let p = 0; p < c; p++) {
        d = o[p],
        f = d.projectionDelta;
        const {visualElement: g} = d.options;
        g && g.props.style && g.props.style.display === "contents" || (s && d.options.layoutScroll && d.scroll && d !== d.root && (rn(i.x, -d.scroll.offset.x),
        rn(i.y, -d.scroll.offset.y)),
        f && (a.x *= f.x.scale,
        a.y *= f.y.scale,
        uv(i, f)),
        s && zi(d.latestValues) && jo(i, d.latestValues, (m = d.layout) == null ? void 0 : m.layoutBox))
    }
    a.x < Og && a.x > Rg && (a.x = 1),
    a.y < Og && a.y > Rg && (a.y = 1)
}
function rn(i, a) {
    i.min += a,
    i.max += a
}
function Vg(i, a, o, s, c=.5) {
    const d = Lt(i.min, i.max, c);
    of(i, a, o, d, s)
}
function _g(i, a) {
    return typeof i == "string" ? parseFloat(i) / 100 * (a.max - a.min) : i
}
function jo(i, a, o) {
    const s = o ?? i;
    Vg(i.x, _g(a.x, s.x), a.scaleX, a.scale, a.originX),
    Vg(i.y, _g(a.y, s.y), a.scaleY, a.scale, a.originY)
}
function cv(i, a) {
    return ov(tw(i.getBoundingClientRect(), a))
}
function nw(i, a, o) {
    const s = cv(i, o)
      , {scroll: c} = a;
    return c && (rn(s.x, c.offset.x),
    rn(s.y, c.offset.y)),
    s
}
const iw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , aw = Oa.length;
function lw(i, a, o) {
    let s = ""
      , c = !0;
    for (let d = 0; d < aw; d++) {
        const f = Oa[d]
          , m = i[f];
        if (m === void 0)
            continue;
        let p = !0;
        if (typeof m == "number")
            p = m === (f.startsWith("scale") ? 1 : 0);
        else {
            const g = parseFloat(m);
            p = f.startsWith("scale") ? g === 1 : g === 0
        }
        if (!p || o) {
            const g = W0(m, Bf[f]);
            if (!p) {
                c = !1;
                const y = iw[f] || f;
                s += `${y}(${g}) `
            }
            o && (a[f] = g)
        }
    }
    return s = s.trim(),
    o ? s = o(a, c ? "" : s) : c && (s = "none"),
    s
}
function Yf(i, a, o) {
    const {style: s, vars: c, transformOrigin: d} = i;
    let f = !1
      , m = !1;
    for (const p in a) {
        const g = a[p];
        if (Va.has(p)) {
            f = !0;
            continue
        } else if (v0(p)) {
            c[p] = g;
            continue
        } else {
            const y = W0(g, Bf[p]);
            p.startsWith("origin") ? (m = !0,
            d[p] = y) : s[p] = y
        }
    }
    if (a.transform || (f || o ? s.transform = lw(a, i.transform, o) : s.transform && (s.transform = "none")),
    m) {
        const {originX: p="50%", originY: g="50%", originZ: y=0} = d;
        s.transformOrigin = `${p} ${g} ${y}`
    }
}
function fv(i, {style: a, vars: o}, s, c) {
    const d = i.style;
    let f;
    for (f in a)
        d[f] = a[f];
    c == null || c.applyProjectionStyles(d, s);
    for (f in o)
        d.setProperty(f, o[f])
}
function Bg(i, a) {
    return a.max === a.min ? 0 : i / (a.max - a.min) * 100
}
const Nl = {
    correct: (i, a) => {
        if (!a.target)
            return i;
        if (typeof i == "string")
            if (nt.test(i))
                i = parseFloat(i);
            else
                return i;
        const o = Bg(i, a.target.x)
          , s = Bg(i, a.target.y);
        return `${o}% ${s}%`
    }
}
  , sw = {
    correct: (i, {treeScale: a, projectionDelta: o}) => {
        const s = i
          , c = Ie.parse(i);
        if (c.length > 5)
            return s;
        const d = Ie.createTransformer(i)
          , f = typeof c[0] != "number" ? 1 : 0
          , m = o.x.scale * a.x
          , p = o.y.scale * a.y;
        c[0 + f] /= m,
        c[1 + f] /= p;
        const g = Lt(m, p, .5);
        return typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        d(c)
    }
}
  , rf = {
    borderRadius: {
        ...Nl,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Nl,
    borderTopRightRadius: Nl,
    borderBottomLeftRadius: Nl,
    borderBottomRightRadius: Nl,
    boxShadow: sw
};
function dv(i, {layout: a, layoutId: o}) {
    return Va.has(i) || i.startsWith("origin") || (a || o !== void 0) && (!!rf[i] || i === "opacity")
}
function Gf(i, a, o) {
    var f;
    const s = i.style
      , c = a == null ? void 0 : a.style
      , d = {};
    if (!s)
        return d;
    for (const m in s)
        (ee(s[m]) || c && ee(c[m]) || dv(m, i) || ((f = o == null ? void 0 : o.getValue(m)) == null ? void 0 : f.liveStyle) !== void 0) && (d[m] = s[m]);
    return d
}
function ow(i) {
    return window.getComputedStyle(i)
}
class rw extends sv {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = fv
    }
    readValueFromInstance(a, o) {
        var s;
        if (Va.has(o))
            return (s = this.projection) != null && s.isProjecting ? Zc(o) : jT(a, o);
        {
            const c = ow(a)
              , d = (v0(o) ? c.getPropertyValue(o) : c[o]) || 0;
            return typeof d == "string" ? d.trim() : d
        }
    }
    measureInstanceViewportBox(a, {transformPagePoint: o}) {
        return cv(a, o)
    }
    build(a, o, s) {
        Yf(a, o, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(a, o, s) {
        return Gf(a, o, s)
    }
}
const uw = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , cw = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function fw(i, a, o=1, s=0, c=!0) {
    i.pathLength = 1;
    const d = c ? uw : cw;
    i[d.offset] = `${-s}`,
    i[d.array] = `${a} ${o}`
}
const dw = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function hv(i, {attrX: a, attrY: o, attrScale: s, pathLength: c, pathSpacing: d=1, pathOffset: f=0, ...m}, p, g, y) {
    if (Yf(i, m, g),
    p) {
        i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
        return
    }
    i.attrs = i.style,
    i.style = {};
    const {attrs: b, style: S} = i;
    b.transform && (S.transform = b.transform,
    delete b.transform),
    (S.transform || b.transformOrigin) && (S.transformOrigin = b.transformOrigin ?? "50% 50%",
    delete b.transformOrigin),
    S.transform && (S.transformBox = (y == null ? void 0 : y.transformBox) ?? "fill-box",
    delete b.transformBox);
    for (const E of dw)
        b[E] !== void 0 && (S[E] = b[E],
        delete b[E]);
    a !== void 0 && (b.x = a),
    o !== void 0 && (b.y = o),
    s !== void 0 && (b.scale = s),
    c !== void 0 && fw(b, c, d, f, !1)
}
const mv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , pv = i => typeof i == "string" && i.toLowerCase() === "svg";
function hw(i, a, o, s) {
    fv(i, a, void 0, s);
    for (const c in a.attrs)
        i.setAttribute(mv.has(c) ? c : _f(c), a.attrs[c])
}
function gv(i, a, o) {
    const s = Gf(i, a, o);
    for (const c in i)
        if (ee(i[c]) || ee(a[c])) {
            const d = Oa.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            s[d] = i[c]
        }
    return s
}
class mw extends sv {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = te
    }
    getBaseTargetFromProps(a, o) {
        return a[o]
    }
    readValueFromInstance(a, o) {
        if (Va.has(o)) {
            const s = J0(o);
            return s && s.default || 0
        }
        return o = mv.has(o) ? o : _f(o),
        a.getAttribute(o)
    }
    scrapeMotionValuesFromProps(a, o, s) {
        return gv(a, o, s)
    }
    build(a, o, s) {
        hv(a, o, this.isSVGTag, s.transformTemplate, s.style)
    }
    renderInstance(a, o, s, c) {
        hw(a, o, s, c)
    }
    mount(a) {
        this.isSVGTag = pv(a.tagName),
        super.mount(a)
    }
}
const pw = qf.length;
function yv(i) {
    if (!i)
        return;
    if (!i.isControllingVariants) {
        const o = i.parent ? yv(i.parent) || {} : {};
        return i.props.initial !== void 0 && (o.initial = i.props.initial),
        o
    }
    const a = {};
    for (let o = 0; o < pw; o++) {
        const s = qf[o]
          , c = i.props[s];
        (Xl(c) || c === !1) && (a[s] = c)
    }
    return a
}
function vv(i, a) {
    if (!Array.isArray(a))
        return !1;
    const o = a.length;
    if (o !== i.length)
        return !1;
    for (let s = 0; s < o; s++)
        if (a[s] !== i[s])
            return !1;
    return !0
}
const gw = [...Hf].reverse()
  , yw = Hf.length;
function vw(i) {
    return a => Promise.all(a.map( ({animation: o, options: s}) => h2(i, o, s)))
}
function bw(i) {
    let a = vw(i)
      , o = Ug()
      , s = !0
      , c = !1;
    const d = g => (y, b) => {
        var E;
        const S = Bi(i, b, g === "exit" ? (E = i.presenceContext) == null ? void 0 : E.custom : void 0);
        if (S) {
            const {transition: D, transitionEnd: O, ..._} = S;
            y = {
                ...y,
                ..._,
                ...O
            }
        }
        return y
    }
    ;
    function f(g) {
        a = g(i)
    }
    function m(g) {
        const {props: y} = i
          , b = yv(i.parent) || {}
          , S = []
          , E = new Set;
        let D = {}
          , O = 1 / 0;
        for (let H = 0; H < yw; H++) {
            const Q = gw[H]
              , Y = o[Q]
              , G = y[Q] !== void 0 ? y[Q] : b[Q]
              , F = Xl(G)
              , rt = Q === g ? Y.isActive : null;
            rt === !1 && (O = H);
            let I = G === b[Q] && G !== y[Q] && F;
            if (I && (s || c) && i.manuallyAnimateOnMount && (I = !1),
            Y.protectedKeys = {
                ...D
            },
            !Y.isActive && rt === null || !G && !Y.prevProp || Ko(G) || typeof G == "boolean")
                continue;
            if (Q === "exit" && Y.isActive && rt !== !0) {
                Y.prevResolvedValues && (D = {
                    ...D,
                    ...Y.prevResolvedValues
                });
                continue
            }
            const L = xw(Y.prevProp, G);
            let at = L || Q === g && Y.isActive && !I && F || H > O && F
              , $ = !1;
            const ut = Array.isArray(G) ? G : [G];
            let gt = ut.reduce(d(Q), {});
            rt === !1 && (gt = {});
            const {prevResolvedValues: kt={}} = Y
              , Ct = {
                ...kt,
                ...gt
            }
              , Dt = P => {
                at = !0,
                E.has(P) && ($ = !0,
                E.delete(P)),
                Y.needsAnimating[P] = !0;
                const ft = i.getValue(P);
                ft && (ft.liveStyle = !1)
            }
            ;
            for (const P in Ct) {
                const ft = gt[P]
                  , X = kt[P];
                if (D.hasOwnProperty(P))
                    continue;
                let w = !1;
                $c(ft) && $c(X) ? w = !vv(ft, X) : w = ft !== X,
                w ? ft != null ? Dt(P) : E.add(P) : ft !== void 0 && E.has(P) ? Dt(P) : Y.protectedKeys[P] = !0
            }
            Y.prevProp = G,
            Y.prevResolvedValues = gt,
            Y.isActive && (D = {
                ...D,
                ...gt
            }),
            (s || c) && i.blockInitialAnimation && (at = !1);
            const z = I && L;
            at && (!z || $) && S.push(...ut.map(P => {
                const ft = {
                    type: Q
                };
                if (typeof P == "string" && (s || c) && !z && i.manuallyAnimateOnMount && i.parent) {
                    const {parent: X} = i
                      , w = Bi(X, P);
                    if (X.enteringChildren && w) {
                        const {delayChildren: U} = w.transition || {};
                        ft.delay = k0(X.enteringChildren, i, U)
                    }
                }
                return {
                    animation: P,
                    options: ft
                }
            }
            ))
        }
        if (E.size) {
            const H = {};
            if (typeof y.initial != "boolean") {
                const Q = Bi(i, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                Q && Q.transition && (H.transition = Q.transition)
            }
            E.forEach(Q => {
                const Y = i.getBaseTarget(Q)
                  , G = i.getValue(Q);
                G && (G.liveStyle = !0),
                H[Q] = Y ?? null
            }
            ),
            S.push({
                animation: H
            })
        }
        let _ = !!S.length;
        return s && (y.initial === !1 || y.initial === y.animate) && !i.manuallyAnimateOnMount && (_ = !1),
        s = !1,
        c = !1,
        _ ? a(S) : Promise.resolve()
    }
    function p(g, y) {
        var S;
        if (o[g].isActive === y)
            return Promise.resolve();
        (S = i.variantChildren) == null || S.forEach(E => {
            var D;
            return (D = E.animationState) == null ? void 0 : D.setActive(g, y)
        }
        ),
        o[g].isActive = y;
        const b = m(g);
        for (const E in o)
            o[E].protectedKeys = {};
        return b
    }
    return {
        animateChanges: m,
        setActive: p,
        setAnimateFunction: f,
        getState: () => o,
        reset: () => {
            o = Ug(),
            c = !0
        }
    }
}
function xw(i, a) {
    return typeof a == "string" ? a !== i : Array.isArray(a) ? !vv(a, i) : !1
}
function Ci(i=!1) {
    return {
        isActive: i,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Ug() {
    return {
        animate: Ci(!0),
        whileInView: Ci(),
        whileHover: Ci(),
        whileTap: Ci(),
        whileDrag: Ci(),
        whileFocus: Ci(),
        exit: Ci()
    }
}
function uf(i, a) {
    i.min = a.min,
    i.max = a.max
}
function Pe(i, a) {
    uf(i.x, a.x),
    uf(i.y, a.y)
}
function Lg(i, a) {
    i.translate = a.translate,
    i.scale = a.scale,
    i.originPoint = a.originPoint,
    i.origin = a.origin
}
const bv = 1e-4
  , Sw = 1 - bv
  , Tw = 1 + bv
  , xv = .01
  , ww = 0 - xv
  , Aw = 0 + xv;
function he(i) {
    return i.max - i.min
}
function Ew(i, a, o) {
    return Math.abs(i - a) <= o
}
function kg(i, a, o, s=.5) {
    i.origin = s,
    i.originPoint = Lt(a.min, a.max, i.origin),
    i.scale = he(o) / he(a),
    i.translate = Lt(o.min, o.max, i.origin) - i.originPoint,
    (i.scale >= Sw && i.scale <= Tw || isNaN(i.scale)) && (i.scale = 1),
    (i.translate >= ww && i.translate <= Aw || isNaN(i.translate)) && (i.translate = 0)
}
function Ll(i, a, o, s) {
    kg(i.x, a.x, o.x, s ? s.originX : void 0),
    kg(i.y, a.y, o.y, s ? s.originY : void 0)
}
function Hg(i, a, o, s=0) {
    const c = s ? Lt(o.min, o.max, s) : o.min;
    i.min = c + a.min,
    i.max = i.min + he(a)
}
function Mw(i, a, o, s) {
    Hg(i.x, a.x, o.x, s == null ? void 0 : s.x),
    Hg(i.y, a.y, o.y, s == null ? void 0 : s.y)
}
function qg(i, a, o, s=0) {
    const c = s ? Lt(o.min, o.max, s) : o.min;
    i.min = a.min - c,
    i.max = i.min + he(a)
}
function ko(i, a, o, s) {
    qg(i.x, a.x, o.x, s == null ? void 0 : s.x),
    qg(i.y, a.y, o.y, s == null ? void 0 : s.y)
}
function Yg(i, a, o, s, c) {
    return i -= a,
    i = Lo(i, 1 / o, s),
    c !== void 0 && (i = Lo(i, 1 / c, s)),
    i
}
function jw(i, a=0, o=1, s=.5, c, d=i, f=i) {
    if (un.test(a) && (a = parseFloat(a),
    a = Lt(f.min, f.max, a / 100) - f.min),
    typeof a != "number")
        return;
    let m = Lt(d.min, d.max, s);
    i === d && (m -= a),
    i.min = Yg(i.min, a, o, m, c),
    i.max = Yg(i.max, a, o, m, c)
}
function Gg(i, a, [o,s,c], d, f) {
    jw(i, a[o], a[s], a[c], a.scale, d, f)
}
const Cw = ["x", "scaleX", "originX"]
  , Dw = ["y", "scaleY", "originY"];
function Xg(i, a, o, s) {
    Gg(i.x, a, Cw, o ? o.x : void 0, s ? s.x : void 0),
    Gg(i.y, a, Dw, o ? o.y : void 0, s ? s.y : void 0)
}
function Qg(i) {
    return i.translate === 0 && i.scale === 1
}
function Sv(i) {
    return Qg(i.x) && Qg(i.y)
}
function Zg(i, a) {
    return i.min === a.min && i.max === a.max
}
function Nw(i, a) {
    return Zg(i.x, a.x) && Zg(i.y, a.y)
}
function Kg(i, a) {
    return Math.round(i.min) === Math.round(a.min) && Math.round(i.max) === Math.round(a.max)
}
function Tv(i, a) {
    return Kg(i.x, a.x) && Kg(i.y, a.y)
}
function Jg(i) {
    return he(i.x) / he(i.y)
}
function Fg(i, a) {
    return i.translate === a.translate && i.scale === a.scale && i.originPoint === a.originPoint
}
function on(i) {
    return [i("x"), i("y")]
}
function zw(i, a, o) {
    let s = "";
    const c = i.x.translate / a.x
      , d = i.y.translate / a.y
      , f = (o == null ? void 0 : o.z) || 0;
    if ((c || d || f) && (s = `translate3d(${c}px, ${d}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `),
    o) {
        const {transformPerspective: g, rotate: y, rotateX: b, rotateY: S, skewX: E, skewY: D} = o;
        g && (s = `perspective(${g}px) ${s}`),
        y && (s += `rotate(${y}deg) `),
        b && (s += `rotateX(${b}deg) `),
        S && (s += `rotateY(${S}deg) `),
        E && (s += `skewX(${E}deg) `),
        D && (s += `skewY(${D}deg) `)
    }
    const m = i.x.scale * a.x
      , p = i.y.scale * a.y;
    return (m !== 1 || p !== 1) && (s += `scale(${m}, ${p})`),
    s || "none"
}
const wv = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  , Rw = wv.length
  , Pg = i => typeof i == "string" ? parseFloat(i) : i
  , Wg = i => typeof i == "number" || nt.test(i);
function Ow(i, a, o, s, c, d) {
    c ? (i.opacity = Lt(0, o.opacity ?? 1, Vw(s)),
    i.opacityExit = Lt(a.opacity ?? 1, 0, _w(s))) : d && (i.opacity = Lt(a.opacity ?? 1, o.opacity ?? 1, s));
    for (let f = 0; f < Rw; f++) {
        const m = wv[f];
        let p = $g(a, m)
          , g = $g(o, m);
        if (p === void 0 && g === void 0)
            continue;
        p || (p = 0),
        g || (g = 0),
        p === 0 || g === 0 || Wg(p) === Wg(g) ? (i[m] = Math.max(Lt(Pg(p), Pg(g), s), 0),
        (un.test(g) || un.test(p)) && (i[m] += "%")) : i[m] = g
    }
    (a.rotate || o.rotate) && (i.rotate = Lt(a.rotate || 0, o.rotate || 0, s))
}
function $g(i, a) {
    return i[a] !== void 0 ? i[a] : i.borderRadius
}
const Vw = Av(0, .5, d0)
  , _w = Av(.5, .95, Se);
function Av(i, a, o) {
    return s => s < i ? 0 : s > a ? 1 : o(Na(i, a, s))
}
function Bw(i, a, o) {
    const s = ee(i) ? i : $e(i);
    return s.start(Of("", s, a, o)),
    s.animation
}
function Ql(i, a, o, s={
    passive: !0
}) {
    return i.addEventListener(a, o, s),
    () => i.removeEventListener(a, o)
}
const Uw = (i, a) => i.depth - a.depth;
class Lw {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(a) {
        yf(this.children, a),
        this.isDirty = !0
    }
    remove(a) {
        Oo(this.children, a),
        this.isDirty = !0
    }
    forEach(a) {
        this.isDirty && this.children.sort(Uw),
        this.isDirty = !1,
        this.children.forEach(a)
    }
}
function kw(i, a) {
    const o = de.now()
      , s = ({timestamp: c}) => {
        const d = c - o;
        d >= a && (Oe(s),
        i(d - a))
    }
    ;
    return St.setup(s, !0),
    () => Oe(s)
}
function Co(i) {
    return ee(i) ? i.get() : i
}
class Hw {
    constructor() {
        this.members = []
    }
    add(a) {
        yf(this.members, a);
        for (let o = this.members.length - 1; o >= 0; o--) {
            const s = this.members[o];
            if (s === a || s === this.lead || s === this.prevLead)
                continue;
            const c = s.instance;
            (!c || c.isConnected === !1) && !s.snapshot && (Oo(this.members, s),
            s.unmount())
        }
        a.scheduleRender()
    }
    remove(a) {
        if (Oo(this.members, a),
        a === this.prevLead && (this.prevLead = void 0),
        a === this.lead) {
            const o = this.members[this.members.length - 1];
            o && this.promote(o)
        }
    }
    relegate(a) {
        var o;
        for (let s = this.members.indexOf(a) - 1; s >= 0; s--) {
            const c = this.members[s];
            if (c.isPresent !== !1 && ((o = c.instance) == null ? void 0 : o.isConnected) !== !1)
                return this.promote(c),
                !0
        }
        return !1
    }
    promote(a, o) {
        var c;
        const s = this.lead;
        if (a !== s && (this.prevLead = s,
        this.lead = a,
        a.show(),
        s)) {
            s.updateSnapshot(),
            a.scheduleRender();
            const {layoutDependency: d} = s.options
              , {layoutDependency: f} = a.options;
            (d === void 0 || d !== f) && (a.resumeFrom = s,
            o && (s.preserveOpacity = !0),
            s.snapshot && (a.snapshot = s.snapshot,
            a.snapshot.latestValues = s.animationValues || s.latestValues),
            (c = a.root) != null && c.isUpdating && (a.isLayoutDirty = !0)),
            a.options.crossfade === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(a => {
            var o, s, c, d, f;
            (s = (o = a.options).onExitComplete) == null || s.call(o),
            (f = (c = a.resumingFrom) == null ? void 0 : (d = c.options).onExitComplete) == null || f.call(d)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(a => a.instance && a.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var a;
        (a = this.lead) != null && a.snapshot && (this.lead.snapshot = void 0)
    }
}
const Do = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Cc = ["", "X", "Y", "Z"]
  , qw = 1e3;
let Yw = 0;
function Dc(i, a, o, s) {
    const {latestValues: c} = a;
    c[i] && (o[i] = c[i],
    a.setStaticValue(i, 0),
    s && (s[i] = 0))
}
function Ev(i) {
    if (i.hasCheckedOptimisedAppear = !0,
    i.root === i)
        return;
    const {visualElement: a} = i.options;
    if (!a)
        return;
    const o = X0(a);
    if (window.MotionHasOptimisedAnimation(o, "transform")) {
        const {layout: c, layoutId: d} = i.options;
        window.MotionCancelOptimisedAnimation(o, "transform", St, !(c || d))
    }
    const {parent: s} = i;
    s && !s.hasCheckedOptimisedAppear && Ev(s)
}
function Mv({attachResizeListener: i, defaultParent: a, measureScroll: o, checkIsScrollRoot: s, resetTransform: c}) {
    return class {
        constructor(f={}, m=a == null ? void 0 : a()) {
            this.id = Yw++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(Qw),
                this.nodes.forEach(Ww),
                this.nodes.forEach($w),
                this.nodes.forEach(Zw)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = f,
            this.root = m ? m.root || m : this,
            this.path = m ? [...m.path, m] : [],
            this.parent = m,
            this.depth = m ? m.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Lw)
        }
        addEventListener(f, m) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new vf),
            this.eventHandlers.get(f).add(m)
        }
        notifyListeners(f, ...m) {
            const p = this.eventHandlers.get(f);
            p && p.notify(...m)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance)
                return;
            this.isSVG = kf(f) && !Y2(f),
            this.instance = f;
            const {layoutId: m, layout: p, visualElement: g} = this.options;
            if (g && !g.current && g.mount(f),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0),
            i) {
                let y, b = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                St.read( () => {
                    b = window.innerWidth
                }
                ),
                i(f, () => {
                    const E = window.innerWidth;
                    E !== b && (b = E,
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = kw(S, 250),
                    Do.hasAnimatedSinceResize && (Do.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(ey)))
                }
                )
            }
            m && this.root.registerSharedNode(m, this),
            this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: b, hasRelativeLayoutChanged: S, layout: E}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const D = this.options.transition || g.getDefaultTransition() || iA
                  , {onLayoutAnimationStart: O, onLayoutAnimationComplete: _} = g.getProps()
                  , H = !this.targetLayout || !Tv(this.targetLayout, E)
                  , Q = !b && S;
                if (this.options.layoutRoot || this.resumeFrom || Q || b && (H || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const Y = {
                        ...Rf(D, "layout"),
                        onPlay: O,
                        onComplete: _
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (Y.delay = 0,
                    Y.type = !1),
                    this.startAnimation(Y),
                    this.setAnimationOrigin(y, Q)
                } else
                    b || ey(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = E
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Oe(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Iw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: f} = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ev(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const b = this.path[y];
                b.shouldResetTransform = !0,
                (typeof b.latestValues.x == "string" || typeof b.latestValues.y == "string") && (b.isLayoutDirty = !0),
                b.updateScroll("snapshot"),
                b.options.layoutRoot && b.willUpdate(!1)
            }
            const {layoutId: m, layout: p} = this.options;
            if (m === void 0 && !p)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                const p = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                p && this.nodes.forEach(Jw),
                this.nodes.forEach(Ig);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(ty);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(Fw),
            this.nodes.forEach(Pw),
            this.nodes.forEach(Gw),
            this.nodes.forEach(Xw)) : this.nodes.forEach(ty),
            this.clearAllSnapshots();
            const m = de.now();
            ae.delta = tn(0, 1e3 / 60, m - ae.timestamp),
            ae.timestamp = m,
            ae.isProcessing = !0,
            bc.update.process(ae),
            bc.preRender.process(ae),
            bc.render.process(ae),
            ae.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Uf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Kw),
            this.sharedNodes.forEach(tA)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            St.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            St.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !he(this.snapshot.measuredBox.x) && !he(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = te()),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: m} = this.options;
            m && m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f="measure") {
            let m = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (m = !1),
            m && this.instance) {
                const p = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: p,
                    offset: o(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , m = this.projectionDelta && !Sv(this.projectionDelta)
              , p = this.getTransformTemplate()
              , g = p ? p(this.latestValues, "") : void 0
              , y = g !== this.prevTransformTemplateValue;
            f && this.instance && (m || zi(this.latestValues) || y) && (c(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(f=!0) {
            const m = this.measurePageBox();
            let p = this.removeElementScroll(m);
            return f && (p = this.removeTransform(p)),
            aA(p),
            {
                animationId: this.root.animationId,
                measuredBox: m,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var g;
            const {visualElement: f} = this.options;
            if (!f)
                return te();
            const m = f.measureViewportBox();
            if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(lA))) {
                const {scroll: y} = this.root;
                y && (rn(m.x, y.offset.x),
                rn(m.y, y.offset.y))
            }
            return m
        }
        removeElementScroll(f) {
            var p;
            const m = te();
            if (Pe(m, f),
            (p = this.scroll) != null && p.wasRoot)
                return m;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g]
                  , {scroll: b, options: S} = y;
                y !== this.root && b && S.layoutScroll && (b.wasRoot && Pe(m, f),
                rn(m.x, b.offset.x),
                rn(m.y, b.offset.y))
            }
            return m
        }
        applyTransform(f, m=!1, p) {
            var y, b;
            const g = p || te();
            Pe(g, f);
            for (let S = 0; S < this.path.length; S++) {
                const E = this.path[S];
                !m && E.options.layoutScroll && E.scroll && E !== E.root && (rn(g.x, -E.scroll.offset.x),
                rn(g.y, -E.scroll.offset.y)),
                zi(E.latestValues) && jo(g, E.latestValues, (y = E.layout) == null ? void 0 : y.layoutBox)
            }
            return zi(this.latestValues) && jo(g, this.latestValues, (b = this.layout) == null ? void 0 : b.layoutBox),
            g
        }
        removeTransform(f) {
            var p;
            const m = te();
            Pe(m, f);
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                if (!zi(y.latestValues))
                    continue;
                let b;
                y.instance && (sf(y.latestValues) && y.updateSnapshot(),
                b = te(),
                Pe(b, y.measurePageBox())),
                Xg(m, y.latestValues, (p = y.snapshot) == null ? void 0 : p.layoutBox, b)
            }
            return zi(this.latestValues) && Xg(m, this.latestValues),
            m
        }
        setTargetDelta(f) {
            this.targetDelta = f,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f=!1) {
            var E;
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== m;
            if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || (E = this.parent) != null && E.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: b} = this.options;
            if (!this.layout || !(y || b))
                return;
            this.resolvedRelativeTargetAt = ae.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = te(),
            this.targetWithTransforms = te()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            Mw(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Pe(this.target, this.layout.layoutBox),
            uv(this.target, this.targetDelta)) : Pe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || sf(this.parent.latestValues) || rv(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, m, p) {
            this.relativeParent = f,
            this.linkedParentVersion = f.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = te(),
            this.relativeTargetOrigin = te(),
            ko(this.relativeTargetOrigin, m, p, this.options.layoutAnchor || void 0),
            Pe(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var D;
            const f = this.getLead()
              , m = !!this.resumingFrom || this !== f;
            let p = !0;
            if ((this.isProjectionDirty || (D = this.parent) != null && D.isProjectionDirty) && (p = !1),
            m && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === ae.timestamp && (p = !1),
            p)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Pe(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x
              , S = this.treeScale.y;
            ew(this.layoutCorrected, this.treeScale, this.path, m),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = te());
            const {target: E} = f;
            if (!E) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Lg(this.prevProjectionDelta.x, this.projectionDelta.x),
            Lg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ll(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
            (this.treeScale.x !== b || this.treeScale.y !== S || !Fg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", E))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f=!0) {
            var m;
            if ((m = this.options.visualElement) == null || m.scheduleRender(),
            f) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ca(),
            this.projectionDelta = Ca(),
            this.projectionDeltaWithTransform = Ca()
        }
        setAnimationOrigin(f, m=!1) {
            const p = this.snapshot
              , g = p ? p.latestValues : {}
              , y = {
                ...this.latestValues
            }
              , b = Ca();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !m;
            const S = te()
              , E = p ? p.source : void 0
              , D = this.layout ? this.layout.source : void 0
              , O = E !== D
              , _ = this.getStack()
              , H = !_ || _.members.length <= 1
              , Q = !!(O && !H && this.options.crossfade === !0 && !this.path.some(nA));
            this.animationProgress = 0;
            let Y;
            this.mixTargetDelta = G => {
                const F = G / 1e3;
                ny(b.x, f.x, F),
                ny(b.y, f.y, F),
                this.setTargetDelta(b),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ko(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                eA(this.relativeTarget, this.relativeTargetOrigin, S, F),
                Y && Nw(this.relativeTarget, Y) && (this.isProjectionDirty = !1),
                Y || (Y = te()),
                Pe(Y, this.relativeTarget)),
                O && (this.animationValues = y,
                Ow(y, g, this.latestValues, F, Q, H)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = F
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            var m, p, g;
            this.notifyListeners("animationStart"),
            (m = this.currentAnimation) == null || m.stop(),
            (g = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || g.stop(),
            this.pendingAnimation && (Oe(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = St.update( () => {
                Do.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = $e(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = Bw(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: y => {
                        this.mixTargetDelta(y),
                        f.onUpdate && f.onUpdate(y)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        f.onComplete && f.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(qw),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {targetWithTransforms: m, target: p, layout: g, latestValues: y} = f;
            if (!(!m || !p || !g)) {
                if (this !== f && this.layout && g && jv(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    p = this.target || te();
                    const b = he(this.layout.layoutBox.x);
                    p.x.min = f.target.x.min,
                    p.x.max = p.x.min + b;
                    const S = he(this.layout.layoutBox.y);
                    p.y.min = f.target.y.min,
                    p.y.max = p.y.min + S
                }
                Pe(m, p),
                jo(m, y),
                Ll(this.projectionDeltaWithTransform, this.layoutCorrected, m, y)
            }
        }
        registerSharedNode(f, m) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new Hw),
            this.sharedNodes.get(f).add(m);
            const g = m.options.initialPromotionConfig;
            m.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(m) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            var m;
            const {layoutId: f} = this.options;
            return f ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this
        }
        getPrevLead() {
            var m;
            const {layoutId: f} = this.options;
            return f ? (m = this.getStack()) == null ? void 0 : m.prevLead : void 0
        }
        getStack() {
            const {layoutId: f} = this.options;
            if (f)
                return this.root.sharedNodes.get(f)
        }
        promote({needsReset: f, transition: m, preserveFollowOpacity: p}={}) {
            const g = this.getStack();
            g && g.promote(this, p),
            f && (this.projectionDelta = void 0,
            this.needsReset = !0),
            m && this.setOptions({
                transition: m
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: f} = this.options;
            if (!f)
                return;
            let m = !1;
            const {latestValues: p} = f;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (m = !0),
            !m)
                return;
            const g = {};
            p.z && Dc("z", f, g, this.animationValues);
            for (let y = 0; y < Cc.length; y++)
                Dc(`rotate${Cc[y]}`, f, g, this.animationValues),
                Dc(`skew${Cc[y]}`, f, g, this.animationValues);
            f.render();
            for (const y in g)
                f.setStaticValue(y, g[y]),
                this.animationValues && (this.animationValues[y] = g[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, m) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                f.visibility = "",
                f.opacity = "",
                f.pointerEvents = Co(m == null ? void 0 : m.pointerEvents) || "",
                f.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                f.pointerEvents = Co(m == null ? void 0 : m.pointerEvents) || ""),
                this.hasProjected && !zi(this.latestValues) && (f.transform = p ? p({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = g.animationValues || g.latestValues;
            this.applyTransformsToTarget();
            let b = zw(this.projectionDeltaWithTransform, this.treeScale, y);
            p && (b = p(y, b)),
            f.transform = b;
            const {x: S, y: E} = this.projectionDelta;
            f.transformOrigin = `${S.origin * 100}% ${E.origin * 100}% 0`,
            g.animationValues ? f.opacity = g === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = g === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const D in rf) {
                if (y[D] === void 0)
                    continue;
                const {correct: O, applyTo: _, isCSSVariable: H} = rf[D]
                  , Q = b === "none" ? y[D] : O(y[D], g);
                if (_) {
                    const Y = _.length;
                    for (let G = 0; G < Y; G++)
                        f[_[G]] = Q
                } else
                    H ? this.options.visualElement.renderState.vars[D] = Q : f[D] = Q
            }
            this.options.layoutId && (f.pointerEvents = g === this ? Co(m == null ? void 0 : m.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => {
                var m;
                return (m = f.currentAnimation) == null ? void 0 : m.stop()
            }
            ),
            this.root.nodes.forEach(Ig),
            this.root.sharedNodes.clear()
        }
    }
}
function Gw(i) {
    i.updateLayout()
}
function Xw(i) {
    var o;
    const a = ((o = i.resumeFrom) == null ? void 0 : o.snapshot) || i.snapshot;
    if (i.isLead() && i.layout && a && i.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: c} = i.layout
          , {animationType: d} = i.options
          , f = a.source !== i.layout.source;
        if (d === "size")
            on(b => {
                const S = f ? a.measuredBox[b] : a.layoutBox[b]
                  , E = he(S);
                S.min = s[b].min,
                S.max = S.min + E
            }
            );
        else if (d === "x" || d === "y") {
            const b = d === "x" ? "y" : "x";
            uf(f ? a.measuredBox[b] : a.layoutBox[b], s[b])
        } else
            jv(d, a.layoutBox, s) && on(b => {
                const S = f ? a.measuredBox[b] : a.layoutBox[b]
                  , E = he(s[b]);
                S.max = S.min + E,
                i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0,
                i.relativeTarget[b].max = i.relativeTarget[b].min + E)
            }
            );
        const m = Ca();
        Ll(m, s, a.layoutBox);
        const p = Ca();
        f ? Ll(p, i.applyTransform(c, !0), a.measuredBox) : Ll(p, s, a.layoutBox);
        const g = !Sv(m);
        let y = !1;
        if (!i.resumeFrom) {
            const b = i.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const {snapshot: S, layout: E} = b;
                if (S && E) {
                    const D = i.options.layoutAnchor || void 0
                      , O = te();
                    ko(O, a.layoutBox, S.layoutBox, D);
                    const _ = te();
                    ko(_, s, E.layoutBox, D),
                    Tv(O, _) || (y = !0),
                    b.options.layoutRoot && (i.relativeTarget = _,
                    i.relativeTargetOrigin = O,
                    i.relativeParent = b)
                }
            }
        }
        i.notifyListeners("didUpdate", {
            layout: s,
            snapshot: a,
            delta: p,
            layoutDelta: m,
            hasLayoutChanged: g,
            hasRelativeLayoutChanged: y
        })
    } else if (i.isLead()) {
        const {onExitComplete: s} = i.options;
        s && s()
    }
    i.options.transition = void 0
}
function Qw(i) {
    i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty))
}
function Zw(i) {
    i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1
}
function Kw(i) {
    i.clearSnapshot()
}
function Ig(i) {
    i.clearMeasurements()
}
function Jw(i) {
    i.isLayoutDirty = !0,
    i.updateLayout()
}
function ty(i) {
    i.isLayoutDirty = !1
}
function Fw(i) {
    i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout,
    i.isLayoutDirty = !0)
}
function Pw(i) {
    const {visualElement: a} = i.options;
    a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    i.resetTransform()
}
function ey(i) {
    i.finishAnimation(),
    i.targetDelta = i.relativeTarget = i.target = void 0,
    i.isProjectionDirty = !0
}
function Ww(i) {
    i.resolveTargetDelta()
}
function $w(i) {
    i.calcProjection()
}
function Iw(i) {
    i.resetSkewAndRotation()
}
function tA(i) {
    i.removeLeadSnapshot()
}
function ny(i, a, o) {
    i.translate = Lt(a.translate, 0, o),
    i.scale = Lt(a.scale, 1, o),
    i.origin = a.origin,
    i.originPoint = a.originPoint
}
function iy(i, a, o, s) {
    i.min = Lt(a.min, o.min, s),
    i.max = Lt(a.max, o.max, s)
}
function eA(i, a, o, s) {
    iy(i.x, a.x, o.x, s),
    iy(i.y, a.y, o.y, s)
}
function nA(i) {
    return i.animationValues && i.animationValues.opacityExit !== void 0
}
const iA = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , ay = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i)
  , ly = ay("applewebkit/") && !ay("chrome/") ? Math.round : Se;
function sy(i) {
    i.min = ly(i.min),
    i.max = ly(i.max)
}
function aA(i) {
    sy(i.x),
    sy(i.y)
}
function jv(i, a, o) {
    return i === "position" || i === "preserve-aspect" && !Ew(Jg(a), Jg(o), .2)
}
function lA(i) {
    var a;
    return i !== i.root && ((a = i.scroll) == null ? void 0 : a.wasRoot)
}
const sA = Mv({
    attachResizeListener: (i, a) => Ql(i, "resize", a),
    measureScroll: () => {
        var i, a;
        return {
            x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((a = document.body) == null ? void 0 : a.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , Nc = {
    current: void 0
}
  , Cv = Mv({
    measureScroll: i => ({
        x: i.scrollLeft,
        y: i.scrollTop
    }),
    defaultParent: () => {
        if (!Nc.current) {
            const i = new sA({});
            i.mount(window),
            i.setOptions({
                layoutScroll: !0
            }),
            Nc.current = i
        }
        return Nc.current
    }
    ,
    resetTransform: (i, a) => {
        i.style.transform = a !== void 0 ? a : "none"
    }
    ,
    checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed"
})
  , _a = q.createContext({
    transformPagePoint: i => i,
    isStatic: !1,
    reducedMotion: "never"
});
function oy(i, a) {
    if (typeof i == "function")
        return i(a);
    i != null && (i.current = a)
}
function oA(...i) {
    return a => {
        let o = !1;
        const s = i.map(c => {
            const d = oy(c, a);
            return !o && typeof d == "function" && (o = !0),
            d
        }
        );
        if (o)
            return () => {
                for (let c = 0; c < s.length; c++) {
                    const d = s[c];
                    typeof d == "function" ? d() : oy(i[c], null)
                }
            }
    }
}
function rA(...i) {
    return q.useCallback(oA(...i), i)
}
class uA extends q.Component {
    getSnapshotBeforeUpdate(a) {
        const o = this.props.childRef.current;
        if (Ul(o) && a.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const s = o.offsetParent
              , c = Ul(s) && s.offsetWidth || 0
              , d = Ul(s) && s.offsetHeight || 0
              , f = getComputedStyle(o)
              , m = this.props.sizeRef.current;
            m.height = parseFloat(f.height),
            m.width = parseFloat(f.width),
            m.top = o.offsetTop,
            m.left = o.offsetLeft,
            m.right = c - m.width - m.left,
            m.bottom = d - m.height - m.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function cA({children: i, isPresent: a, anchorX: o, anchorY: s, root: c, pop: d}) {
    var S;
    const f = q.useId()
      , m = q.useRef(null)
      , p = q.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: g} = q.useContext(_a)
      , y = ((S = i.props) == null ? void 0 : S.ref) ?? (i == null ? void 0 : i.ref)
      , b = rA(m, y);
    return q.useInsertionEffect( () => {
        const {width: E, height: D, top: O, left: _, right: H, bottom: Q} = p.current;
        if (a || d === !1 || !m.current || !E || !D)
            return;
        const Y = o === "left" ? `left: ${_}` : `right: ${H}`
          , G = s === "bottom" ? `bottom: ${Q}` : `top: ${O}`;
        m.current.dataset.motionPopId = f;
        const F = document.createElement("style");
        g && (F.nonce = g);
        const rt = c ?? document.head;
        return rt.appendChild(F),
        F.sheet && F.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${E}px !important;
            height: ${D}px !important;
            ${Y}px !important;
            ${G}px !important;
          }
        `),
        () => {
            var I;
            (I = m.current) == null || I.removeAttribute("data-motion-pop-id"),
            rt.contains(F) && rt.removeChild(F)
        }
    }
    , [a]),
    x.jsx(uA, {
        isPresent: a,
        childRef: m,
        sizeRef: p,
        pop: d,
        children: d === !1 ? i : q.cloneElement(i, {
            ref: b
        })
    })
}
const fA = ({children: i, initial: a, isPresent: o, onExitComplete: s, custom: c, presenceAffectsLayout: d, mode: f, anchorX: m, anchorY: p, root: g}) => {
    const y = si(dA)
      , b = q.useId();
    let S = !0
      , E = q.useMemo( () => (S = !1,
    {
        id: b,
        initial: a,
        isPresent: o,
        custom: c,
        onExitComplete: D => {
            y.set(D, !0);
            for (const O of y.values())
                if (!O)
                    return;
            s && s()
        }
        ,
        register: D => (y.set(D, !1),
        () => y.delete(D))
    }), [o, y, s]);
    return d && S && (E = {
        ...E
    }),
    q.useMemo( () => {
        y.forEach( (D, O) => y.set(O, !1))
    }
    , [o]),
    q.useEffect( () => {
        !o && !y.size && s && s()
    }
    , [o]),
    i = x.jsx(cA, {
        pop: f === "popLayout",
        isPresent: o,
        anchorX: m,
        anchorY: p,
        root: g,
        children: i
    }),
    x.jsx(Qo.Provider, {
        value: E,
        children: i
    })
}
;
function dA() {
    return new Map
}
function Dv(i=!0) {
    const a = q.useContext(Qo);
    if (a === null)
        return [!0, null];
    const {isPresent: o, onExitComplete: s, register: c} = a
      , d = q.useId();
    q.useEffect( () => {
        if (i)
            return c(d)
    }
    , [i]);
    const f = q.useCallback( () => i && s && s(d), [d, s, i]);
    return !o && s ? [!1, f] : [!0]
}
const go = i => i.key || "";
function ry(i) {
    const a = [];
    return q.Children.forEach(i, o => {
        q.isValidElement(o) && a.push(o)
    }
    ),
    a
}
const Nv = ({children: i, custom: a, initial: o=!0, onExitComplete: s, presenceAffectsLayout: c=!0, mode: d="sync", propagate: f=!1, anchorX: m="left", anchorY: p="top", root: g}) => {
    const [y,b] = Dv(f)
      , S = q.useMemo( () => ry(i), [i])
      , E = f && !y ? [] : S.map(go)
      , D = q.useRef(!0)
      , O = q.useRef(S)
      , _ = si( () => new Map)
      , H = q.useRef(new Set)
      , [Q,Y] = q.useState(S)
      , [G,F] = q.useState(S);
    Xo( () => {
        D.current = !1,
        O.current = S;
        for (let L = 0; L < G.length; L++) {
            const at = go(G[L]);
            E.includes(at) ? (_.delete(at),
            H.current.delete(at)) : _.get(at) !== !0 && _.set(at, !1)
        }
    }
    , [G, E.length, E.join("-")]);
    const rt = [];
    if (S !== Q) {
        let L = [...S];
        for (let at = 0; at < G.length; at++) {
            const $ = G[at]
              , ut = go($);
            E.includes(ut) || (L.splice(at, 0, $),
            rt.push($))
        }
        return d === "wait" && rt.length && (L = rt),
        F(ry(L)),
        Y(S),
        null
    }
    const {forceRender: I} = q.useContext(gf);
    return x.jsx(x.Fragment, {
        children: G.map(L => {
            const at = go(L)
              , $ = f && !y ? !1 : S === G || E.includes(at)
              , ut = () => {
                if (H.current.has(at))
                    return;
                if (_.has(at))
                    H.current.add(at),
                    _.set(at, !0);
                else
                    return;
                let gt = !0;
                _.forEach(kt => {
                    kt || (gt = !1)
                }
                ),
                gt && (I == null || I(),
                F(O.current),
                f && (b == null || b()),
                s && s())
            }
            ;
            return x.jsx(fA, {
                isPresent: $,
                initial: !D.current || o ? void 0 : !1,
                custom: a,
                presenceAffectsLayout: c,
                mode: d,
                root: g,
                onExitComplete: $ ? void 0 : ut,
                anchorX: m,
                anchorY: p,
                children: L
            }, at)
        }
        )
    })
}
  , zv = q.createContext({
    strict: !1
})
  , uy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let cy = !1;
function hA() {
    if (cy)
        return;
    const i = {};
    for (const a in uy)
        i[a] = {
            isEnabled: o => uy[a].some(s => !!o[s])
        };
    lv(i),
    cy = !0
}
function Rv() {
    return hA(),
    W2()
}
function mA(i) {
    const a = Rv();
    for (const o in i)
        a[o] = {
            ...a[o],
            ...i[o]
        };
    lv(a)
}
const pA = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Ho(i) {
    return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || pA.has(i)
}
let Ov = i => !Ho(i);
function gA(i) {
    typeof i == "function" && (Ov = a => a.startsWith("on") ? !Ho(a) : i(a))
}
try {
    gA(require("@emotion/is-prop-valid").default)
} catch {}
function yA(i, a, o) {
    const s = {};
    for (const c in i)
        c === "values" && typeof i.values == "object" || ee(i[c]) || (Ov(c) || o === !0 && Ho(c) || !a && !Ho(c) || i.draggable && c.startsWith("onDrag")) && (s[c] = i[c]);
    return s
}
const Fo = q.createContext({});
function vA(i, a) {
    if (Jo(i)) {
        const {initial: o, animate: s} = i;
        return {
            initial: o === !1 || Xl(o) ? o : void 0,
            animate: Xl(s) ? s : void 0
        }
    }
    return i.inherit !== !1 ? a : {}
}
function bA(i) {
    const {initial: a, animate: o} = vA(i, q.useContext(Fo));
    return q.useMemo( () => ({
        initial: a,
        animate: o
    }), [fy(a), fy(o)])
}
function fy(i) {
    return Array.isArray(i) ? i.join(" ") : i
}
const Xf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Vv(i, a, o) {
    for (const s in a)
        !ee(a[s]) && !dv(s, o) && (i[s] = a[s])
}
function xA({transformTemplate: i}, a) {
    return q.useMemo( () => {
        const o = Xf();
        return Yf(o, a, i),
        Object.assign({}, o.vars, o.style)
    }
    , [a])
}
function SA(i, a) {
    const o = i.style || {}
      , s = {};
    return Vv(s, o, i),
    Object.assign(s, xA(i, a)),
    s
}
function TA(i, a) {
    const o = {}
      , s = SA(i, a);
    return i.drag && i.dragListener !== !1 && (o.draggable = !1,
    s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
    s.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`),
    i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0),
    o.style = s,
    o
}
const _v = () => ({
    ...Xf(),
    attrs: {}
});
function wA(i, a, o, s) {
    const c = q.useMemo( () => {
        const d = _v();
        return hv(d, a, pv(s), i.transformTemplate, i.style),
        {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }
    , [a]);
    if (i.style) {
        const d = {};
        Vv(d, i.style, i),
        c.style = {
            ...d,
            ...c.style
        }
    }
    return c
}
const AA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Qf(i) {
    return typeof i != "string" || i.includes("-") ? !1 : !!(AA.indexOf(i) > -1 || /[A-Z]/u.test(i))
}
function EA(i, a, o, {latestValues: s}, c, d=!1, f) {
    const p = (f ?? Qf(i) ? wA : TA)(a, s, c, i)
      , g = yA(a, typeof i == "string", d)
      , y = i !== q.Fragment ? {
        ...g,
        ...p,
        ref: o
    } : {}
      , {children: b} = a
      , S = q.useMemo( () => ee(b) ? b.get() : b, [b]);
    return q.createElement(i, {
        ...y,
        children: S
    })
}
function MA({scrapeMotionValuesFromProps: i, createRenderState: a}, o, s, c) {
    return {
        latestValues: jA(o, s, c, i),
        renderState: a()
    }
}
function jA(i, a, o, s) {
    const c = {}
      , d = s(i, {});
    for (const S in d)
        c[S] = Co(d[S]);
    let {initial: f, animate: m} = i;
    const p = Jo(i)
      , g = iv(i);
    a && g && !p && i.inherit !== !1 && (f === void 0 && (f = a.initial),
    m === void 0 && (m = a.animate));
    let y = o ? o.initial === !1 : !1;
    y = y || f === !1;
    const b = y ? m : f;
    if (b && typeof b != "boolean" && !Ko(b)) {
        const S = Array.isArray(b) ? b : [b];
        for (let E = 0; E < S.length; E++) {
            const D = Vf(i, S[E]);
            if (D) {
                const {transitionEnd: O, transition: _, ...H} = D;
                for (const Q in H) {
                    let Y = H[Q];
                    if (Array.isArray(Y)) {
                        const G = y ? Y.length - 1 : 0;
                        Y = Y[G]
                    }
                    Y !== null && (c[Q] = Y)
                }
                for (const Q in O)
                    c[Q] = O[Q]
            }
        }
    }
    return c
}
const Bv = i => (a, o) => {
    const s = q.useContext(Fo)
      , c = q.useContext(Qo)
      , d = () => MA(i, a, s, c);
    return o ? d() : si(d)
}
  , CA = Bv({
    scrapeMotionValuesFromProps: Gf,
    createRenderState: Xf
})
  , DA = Bv({
    scrapeMotionValuesFromProps: gv,
    createRenderState: _v
})
  , NA = Symbol.for("motionComponentSymbol");
function zA(i, a, o) {
    const s = q.useRef(o);
    q.useInsertionEffect( () => {
        s.current = o
    }
    );
    const c = q.useRef(null);
    return q.useCallback(d => {
        var m;
        d && ((m = i.onMount) == null || m.call(i, d));
        const f = s.current;
        if (typeof f == "function")
            if (d) {
                const p = f(d);
                typeof p == "function" && (c.current = p)
            } else
                c.current ? (c.current(),
                c.current = null) : f(d);
        else
            f && (f.current = d);
        a && (d ? a.mount(d) : a.unmount())
    }
    , [a])
}
const Uv = q.createContext({});
function Aa(i) {
    return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current")
}
function RA(i, a, o, s, c, d) {
    var Y, G;
    const {visualElement: f} = q.useContext(Fo)
      , m = q.useContext(zv)
      , p = q.useContext(Qo)
      , g = q.useContext(_a)
      , y = g.reducedMotion
      , b = g.skipAnimations
      , S = q.useRef(null)
      , E = q.useRef(!1);
    s = s || m.renderer,
    !S.current && s && (S.current = s(i, {
        visualState: a,
        parent: f,
        props: o,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: b,
        isSVG: d
    }),
    E.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const D = S.current
      , O = q.useContext(Uv);
    D && !D.projection && c && (D.type === "html" || D.type === "svg") && OA(S.current, o, c, O);
    const _ = q.useRef(!1);
    q.useInsertionEffect( () => {
        D && _.current && D.update(o, p)
    }
    );
    const H = o[G0]
      , Q = q.useRef(!!H && typeof window < "u" && !((Y = window.MotionHandoffIsComplete) != null && Y.call(window, H)) && ((G = window.MotionHasOptimisedAnimation) == null ? void 0 : G.call(window, H)));
    return Xo( () => {
        E.current = !0,
        D && (_.current = !0,
        window.MotionIsMounted = !0,
        D.updateFeatures(),
        D.scheduleRenderMicrotask(),
        Q.current && D.animationState && D.animationState.animateChanges())
    }
    ),
    q.useEffect( () => {
        D && (!Q.current && D.animationState && D.animationState.animateChanges(),
        Q.current && (queueMicrotask( () => {
            var F;
            (F = window.MotionHandoffMarkAsComplete) == null || F.call(window, H)
        }
        ),
        Q.current = !1),
        D.enteringChildren = void 0)
    }
    ),
    D
}
function OA(i, a, o, s) {
    const {layoutId: c, layout: d, drag: f, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutAnchor: y, layoutCrossfade: b} = a;
    i.projection = new o(i.latestValues,a["data-framer-portal-id"] ? void 0 : Lv(i.parent)),
    i.projection.setOptions({
        layoutId: c,
        layout: d,
        alwaysMeasureLayout: !!f || m && Aa(m),
        visualElement: i,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: s,
        crossfade: b,
        layoutScroll: p,
        layoutRoot: g,
        layoutAnchor: y
    })
}
function Lv(i) {
    if (i)
        return i.options.allowProjection !== !1 ? i.projection : Lv(i.parent)
}
function zc(i, {forwardMotionProps: a=!1, type: o}={}, s, c) {
    s && mA(s);
    const d = o ? o === "svg" : Qf(i)
      , f = d ? DA : CA;
    function m(g, y) {
        let b;
        const S = {
            ...q.useContext(_a),
            ...g,
            layoutId: VA(g)
        }
          , {isStatic: E} = S
          , D = bA(g)
          , O = f(g, E);
        if (!E && typeof window < "u") {
            _A();
            const _ = BA(S);
            b = _.MeasureLayout,
            D.visualElement = RA(i, O, S, c, _.ProjectionNode, d)
        }
        return x.jsxs(Fo.Provider, {
            value: D,
            children: [b && D.visualElement ? x.jsx(b, {
                visualElement: D.visualElement,
                ...S
            }) : null, EA(i, g, zA(O, D.visualElement, y), O, E, a, d)]
        })
    }
    m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
    const p = q.forwardRef(m);
    return p[NA] = i,
    p
}
function VA({layoutId: i}) {
    const a = q.useContext(gf).id;
    return a && i !== void 0 ? a + "-" + i : i
}
function _A(i, a) {
    q.useContext(zv).strict
}
function BA(i) {
    const a = Rv()
      , {drag: o, layout: s} = a;
    if (!o && !s)
        return {};
    const c = {
        ...o,
        ...s
    };
    return {
        MeasureLayout: o != null && o.isEnabled(i) || s != null && s.isEnabled(i) ? c.MeasureLayout : void 0,
        ProjectionNode: c.ProjectionNode
    }
}
function UA(i, a) {
    if (typeof Proxy > "u")
        return zc;
    const o = new Map
      , s = (d, f) => zc(d, f, i, a)
      , c = (d, f) => s(d, f);
    return new Proxy(c,{
        get: (d, f) => f === "create" ? s : (o.has(f) || o.set(f, zc(f, void 0, i, a)),
        o.get(f))
    })
}
const LA = (i, a) => a.isSVG ?? Qf(i) ? new mw(a) : new rw(a,{
    allowProjection: i !== q.Fragment
});
class kA extends ri {
    constructor(a) {
        super(a),
        a.animationState || (a.animationState = bw(a))
    }
    updateAnimationControlsSubscription() {
        const {animate: a} = this.node.getProps();
        Ko(a) && (this.unmountControls = a.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: a} = this.node.getProps()
          , {animate: o} = this.node.prevProps || {};
        a !== o && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var a;
        this.node.animationState.reset(),
        (a = this.unmountControls) == null || a.call(this)
    }
}
let HA = 0;
class qA extends ri {
    constructor() {
        super(...arguments),
        this.id = HA++,
        this.isExitComplete = !1
    }
    update() {
        var d;
        if (!this.node.presenceContext)
            return;
        const {isPresent: a, onExitComplete: o} = this.node.presenceContext
          , {isPresent: s} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || a === s)
            return;
        if (a && s === !1) {
            if (this.isExitComplete) {
                const {initial: f, custom: m} = this.node.getProps();
                if (typeof f == "string") {
                    const p = Bi(this.node, f, m);
                    if (p) {
                        const {transition: g, transitionEnd: y, ...b} = p;
                        for (const S in b)
                            (d = this.node.getValue(S)) == null || d.jump(b[S])
                    }
                }
                this.node.animationState.reset(),
                this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const c = this.node.animationState.setActive("exit", !a);
        o && !a && c.then( () => {
            this.isExitComplete = !0,
            o(this.id)
        }
        )
    }
    mount() {
        const {register: a, onExitComplete: o} = this.node.presenceContext || {};
        o && o(this.id),
        a && (this.unmount = a(this.id))
    }
    unmount() {}
}
const YA = {
    animation: {
        Feature: kA
    },
    exit: {
        Feature: qA
    }
};
function Fl(i) {
    return {
        point: {
            x: i.pageX,
            y: i.pageY
        }
    }
}
const GA = i => a => Lf(a) && i(a, Fl(a));
function kl(i, a, o, s) {
    return Ql(i, a, GA(o), s)
}
const kv = ({current: i}) => i ? i.ownerDocument.defaultView : null
  , dy = (i, a) => Math.abs(i - a);
function XA(i, a) {
    const o = dy(i.x, a.x)
      , s = dy(i.y, a.y);
    return Math.sqrt(o ** 2 + s ** 2)
}
const hy = new Set(["auto", "scroll"]);
class Hv {
    constructor(a, o, {transformPagePoint: s, contextWindow: c=window, dragSnapToOrigin: d=!1, distanceThreshold: f=3, element: m}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.lastRawMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = E => {
            this.handleScroll(E.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = yo(this.lastRawMoveEventInfo, this.transformPagePoint));
            const E = Rc(this.lastMoveEventInfo, this.history)
              , D = this.startEvent !== null
              , O = XA(E.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!D && !O)
                return;
            const {point: _} = E
              , {timestamp: H} = ae;
            this.history.push({
                ..._,
                timestamp: H
            });
            const {onStart: Q, onMove: Y} = this.handlers;
            D || (Q && Q(this.lastMoveEvent, E),
            this.startEvent = this.lastMoveEvent),
            Y && Y(this.lastMoveEvent, E)
        }
        ,
        this.handlePointerMove = (E, D) => {
            this.lastMoveEvent = E,
            this.lastRawMoveEventInfo = D,
            this.lastMoveEventInfo = yo(D, this.transformPagePoint),
            St.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (E, D) => {
            this.end();
            const {onEnd: O, onSessionEnd: _, resumeAnimation: H} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && H && H(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const Q = Rc(E.type === "pointercancel" ? this.lastMoveEventInfo : yo(D, this.transformPagePoint), this.history);
            this.startEvent && O && O(E, Q),
            _ && _(E, Q)
        }
        ,
        !Lf(a))
            return;
        this.dragSnapToOrigin = d,
        this.handlers = o,
        this.transformPagePoint = s,
        this.distanceThreshold = f,
        this.contextWindow = c || window;
        const p = Fl(a)
          , g = yo(p, this.transformPagePoint)
          , {point: y} = g
          , {timestamp: b} = ae;
        this.history = [{
            ...y,
            timestamp: b
        }];
        const {onSessionStart: S} = o;
        S && S(a, Rc(g, this.history)),
        this.removeListeners = Zl(kl(this.contextWindow, "pointermove", this.handlePointerMove), kl(this.contextWindow, "pointerup", this.handlePointerUp), kl(this.contextWindow, "pointercancel", this.handlePointerUp)),
        m && this.startScrollTracking(m)
    }
    startScrollTracking(a) {
        let o = a.parentElement;
        for (; o; ) {
            const s = getComputedStyle(o);
            (hy.has(s.overflowX) || hy.has(s.overflowY)) && this.scrollPositions.set(o, {
                x: o.scrollLeft,
                y: o.scrollTop
            }),
            o = o.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(a) {
        const o = this.scrollPositions.get(a);
        if (!o)
            return;
        const s = a === window
          , c = s ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: a.scrollLeft,
            y: a.scrollTop
        }
          , d = {
            x: c.x - o.x,
            y: c.y - o.y
        };
        d.x === 0 && d.y === 0 || (s ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x,
        this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x,
        this.history[0].y -= d.y),
        this.scrollPositions.set(a, c),
        St.update(this.updatePoint, !0))
    }
    updateHandlers(a) {
        this.handlers = a
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Oe(this.updatePoint)
    }
}
function yo(i, a) {
    return a ? {
        point: a(i.point)
    } : i
}
function my(i, a) {
    return {
        x: i.x - a.x,
        y: i.y - a.y
    }
}
function Rc({point: i}, a) {
    return {
        point: i,
        delta: my(i, qv(a)),
        offset: my(i, QA(a)),
        velocity: ZA(a, .1)
    }
}
function QA(i) {
    return i[0]
}
function qv(i) {
    return i[i.length - 1]
}
function ZA(i, a) {
    if (i.length < 2)
        return {
            x: 0,
            y: 0
        };
    let o = i.length - 1
      , s = null;
    const c = qv(i);
    for (; o >= 0 && (s = i[o],
    !(c.timestamp - s.timestamp > Re(a))); )
        o--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    s === i[0] && i.length > 2 && c.timestamp - s.timestamp > Re(a) * 2 && (s = i[1]);
    const d = Qe(c.timestamp - s.timestamp);
    if (d === 0)
        return {
            x: 0,
            y: 0
        };
    const f = {
        x: (c.x - s.x) / d,
        y: (c.y - s.y) / d
    };
    return f.x === 1 / 0 && (f.x = 0),
    f.y === 1 / 0 && (f.y = 0),
    f
}
function KA(i, {min: a, max: o}, s) {
    return a !== void 0 && i < a ? i = s ? Lt(a, i, s.min) : Math.max(i, a) : o !== void 0 && i > o && (i = s ? Lt(o, i, s.max) : Math.min(i, o)),
    i
}
function py(i, a, o) {
    return {
        min: a !== void 0 ? i.min + a : void 0,
        max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
    }
}
function JA(i, {top: a, left: o, bottom: s, right: c}) {
    return {
        x: py(i.x, o, c),
        y: py(i.y, a, s)
    }
}
function gy(i, a) {
    let o = a.min - i.min
      , s = a.max - i.max;
    return a.max - a.min < i.max - i.min && ([o,s] = [s, o]),
    {
        min: o,
        max: s
    }
}
function FA(i, a) {
    return {
        x: gy(i.x, a.x),
        y: gy(i.y, a.y)
    }
}
function PA(i, a) {
    let o = .5;
    const s = he(i)
      , c = he(a);
    return c > s ? o = Na(a.min, a.max - s, i.min) : s > c && (o = Na(i.min, i.max - c, a.min)),
    tn(0, 1, o)
}
function WA(i, a) {
    const o = {};
    return a.min !== void 0 && (o.min = a.min - i.min),
    a.max !== void 0 && (o.max = a.max - i.min),
    o
}
const cf = .35;
function $A(i=cf) {
    return i === !1 ? i = 0 : i === !0 && (i = cf),
    {
        x: yy(i, "left", "right"),
        y: yy(i, "top", "bottom")
    }
}
function yy(i, a, o) {
    return {
        min: vy(i, a),
        max: vy(i, o)
    }
}
function vy(i, a) {
    return typeof i == "number" ? i : i[a] || 0
}
const IA = new WeakMap;
class tE {
    constructor(a) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = te(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = a
    }
    start(a, {snapToCursor: o=!1, distanceThreshold: s}={}) {
        const {presenceContext: c} = this.visualElement;
        if (c && c.isPresent === !1)
            return;
        const d = b => {
            o && this.snapToCursor(Fl(b).point),
            this.stopAnimation()
        }
          , f = (b, S) => {
            const {drag: E, dragPropagation: D, onDragStart: O} = this.getProps();
            if (E && !D && (this.openDragLock && this.openDragLock(),
            this.openDragLock = E2(E),
            !this.openDragLock))
                return;
            this.latestPointerEvent = b,
            this.latestPanInfo = S,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            on(H => {
                let Q = this.getAxisMotionValue(H).get() || 0;
                if (un.test(Q)) {
                    const {projection: Y} = this.visualElement;
                    if (Y && Y.layout) {
                        const G = Y.layout.layoutBox[H];
                        G && (Q = he(G) * (parseFloat(Q) / 100))
                    }
                }
                this.originPoint[H] = Q
            }
            ),
            O && St.update( () => O(b, S), !1, !0),
            Ic(this.visualElement, "transform");
            const {animationState: _} = this.visualElement;
            _ && _.setActive("whileDrag", !0)
        }
          , m = (b, S) => {
            this.latestPointerEvent = b,
            this.latestPanInfo = S;
            const {dragPropagation: E, dragDirectionLock: D, onDirectionLock: O, onDrag: _} = this.getProps();
            if (!E && !this.openDragLock)
                return;
            const {offset: H} = S;
            if (D && this.currentDirection === null) {
                this.currentDirection = nE(H),
                this.currentDirection !== null && O && O(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, H),
            this.updateAxis("y", S.point, H),
            this.visualElement.render(),
            _ && St.update( () => _(b, S), !1, !0)
        }
          , p = (b, S) => {
            this.latestPointerEvent = b,
            this.latestPanInfo = S,
            this.stop(b, S),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , g = () => {
            const {dragSnapToOrigin: b} = this.getProps();
            (b || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: y} = this.getProps();
        this.panSession = new Hv(a,{
            onSessionStart: d,
            onStart: f,
            onMove: m,
            onSessionEnd: p,
            resumeAnimation: g
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: s,
            contextWindow: kv(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(a, o) {
        const s = a || this.latestPointerEvent
          , c = o || this.latestPanInfo
          , d = this.isDragging;
        if (this.cancel(),
        !d || !c || !s)
            return;
        const {velocity: f} = c;
        this.startAnimation(f);
        const {onDragEnd: m} = this.getProps();
        m && St.postRender( () => m(s, c))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: a, animationState: o} = this.visualElement;
        a && (a.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: s} = this.getProps();
        !s && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        o && o.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(a, o, s) {
        const {drag: c} = this.getProps();
        if (!s || !vo(a, c, this.currentDirection))
            return;
        const d = this.getAxisMotionValue(a);
        let f = this.originPoint[a] + s[a];
        this.constraints && this.constraints[a] && (f = KA(f, this.constraints[a], this.elastic[a])),
        d.set(f)
    }
    resolveConstraints() {
        var d;
        const {dragConstraints: a, dragElastic: o} = this.getProps()
          , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout
          , c = this.constraints;
        a && Aa(a) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : a && s ? this.constraints = JA(s.layoutBox, a) : this.constraints = !1,
        this.elastic = $A(o),
        c !== this.constraints && !Aa(a) && s && this.constraints && !this.hasMutatedConstraints && on(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = WA(s.layoutBox[f], this.constraints[f]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: a, onMeasureDragConstraints: o} = this.getProps();
        if (!a || !Aa(a))
            return !1;
        const s = a.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const d = nw(s, c.root, this.visualElement.getTransformPagePoint());
        let f = FA(c.layout.layoutBox, d);
        if (o) {
            const m = o(I2(f));
            this.hasMutatedConstraints = !!m,
            m && (f = ov(m))
        }
        return f
    }
    startAnimation(a) {
        const {drag: o, dragMomentum: s, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: m} = this.getProps()
          , p = this.constraints || {}
          , g = on(y => {
            if (!vo(y, o, this.currentDirection))
                return;
            let b = p && p[y] || {};
            (f === !0 || f === y) && (b = {
                min: 0,
                max: 0
            });
            const S = c ? 200 : 1e6
              , E = c ? 40 : 1e7
              , D = {
                type: "inertia",
                velocity: s ? a[y] : 0,
                bounceStiffness: S,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...d,
                ...b
            };
            return this.startAxisValueAnimation(y, D)
        }
        );
        return Promise.all(g).then(m)
    }
    startAxisValueAnimation(a, o) {
        const s = this.getAxisMotionValue(a);
        return Ic(this.visualElement, a),
        s.start(Of(a, s, 0, o, this.visualElement, !1))
    }
    stopAnimation() {
        on(a => this.getAxisMotionValue(a).stop())
    }
    getAxisMotionValue(a) {
        const o = `_drag${a.toUpperCase()}`
          , s = this.visualElement.getProps()
          , c = s[o];
        return c || this.visualElement.getValue(a, (s.initial ? s.initial[a] : void 0) || 0)
    }
    snapToCursor(a) {
        on(o => {
            const {drag: s} = this.getProps();
            if (!vo(o, s, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , d = this.getAxisMotionValue(o);
            if (c && c.layout) {
                const {min: f, max: m} = c.layout.layoutBox[o]
                  , p = d.get() || 0;
                d.set(a[o] - Lt(f, m, .5) + p)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: a, dragConstraints: o} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!Aa(o) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        on(f => {
            const m = this.getAxisMotionValue(f);
            if (m && this.constraints !== !1) {
                const p = m.get();
                c[f] = PA({
                    min: p,
                    max: p
                }, this.constraints[f])
            }
        }
        );
        const {transformTemplate: d} = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        on(f => {
            if (!vo(f, a, null))
                return;
            const m = this.getAxisMotionValue(f)
              , {min: p, max: g} = this.constraints[f];
            m.set(Lt(p, g, c[f]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        IA.set(this.visualElement, this);
        const a = this.visualElement.current
          , o = kl(a, "pointerdown", g => {
            const {drag: y, dragListener: b=!0} = this.getProps()
              , S = g.target
              , E = S !== a && z2(S);
            y && b && !E && this.start(g)
        }
        );
        let s;
        const c = () => {
            const {dragConstraints: g} = this.getProps();
            Aa(g) && g.current && (this.constraints = this.resolveRefConstraints(),
            s || (s = eE(a, g.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: d} = this.visualElement
          , f = d.addEventListener("measure", c);
        d && !d.layout && (d.root && d.root.updateScroll(),
        d.updateLayout()),
        St.read(c);
        const m = Ql(window, "resize", () => this.scalePositionWithinConstraints())
          , p = d.addEventListener("didUpdate", ( ({delta: g, hasLayoutChanged: y}) => {
            this.isDragging && y && (on(b => {
                const S = this.getAxisMotionValue(b);
                S && (this.originPoint[b] += g[b].translate,
                S.set(S.get() + g[b].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            m(),
            o(),
            f(),
            p && p(),
            s && s()
        }
    }
    getProps() {
        const a = this.visualElement.getProps()
          , {drag: o=!1, dragDirectionLock: s=!1, dragPropagation: c=!1, dragConstraints: d=!1, dragElastic: f=cf, dragMomentum: m=!0} = a;
        return {
            ...a,
            drag: o,
            dragDirectionLock: s,
            dragPropagation: c,
            dragConstraints: d,
            dragElastic: f,
            dragMomentum: m
        }
    }
}
function by(i) {
    let a = !0;
    return () => {
        if (a) {
            a = !1;
            return
        }
        i()
    }
}
function eE(i, a, o) {
    const s = af(i, by(o))
      , c = af(a, by(o));
    return () => {
        s(),
        c()
    }
}
function vo(i, a, o) {
    return (a === !0 || a === i) && (o === null || o === i)
}
function nE(i, a=10) {
    let o = null;
    return Math.abs(i.y) > a ? o = "y" : Math.abs(i.x) > a && (o = "x"),
    o
}
class iE extends ri {
    constructor(a) {
        super(a),
        this.removeGroupControls = Se,
        this.removeListeners = Se,
        this.controls = new tE(a)
    }
    mount() {
        const {dragControls: a} = this.node.getProps();
        a && (this.removeGroupControls = a.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Se
    }
    update() {
        const {dragControls: a} = this.node.getProps()
          , {dragControls: o} = this.node.prevProps || {};
        a !== o && (this.removeGroupControls(),
        a && (this.removeGroupControls = a.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Oc = i => (a, o) => {
    i && St.update( () => i(a, o), !1, !0)
}
;
class aE extends ri {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Se
    }
    onPointerDown(a) {
        this.session = new Hv(a,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: kv(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: a, onPanStart: o, onPan: s, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: Oc(a),
            onStart: Oc(o),
            onMove: Oc(s),
            onEnd: (d, f) => {
                delete this.session,
                c && St.postRender( () => c(d, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = kl(this.node.current, "pointerdown", a => this.onPointerDown(a))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Vc = !1;
class lE extends q.Component {
    componentDidMount() {
        const {visualElement: a, layoutGroup: o, switchLayoutGroup: s, layoutId: c} = this.props
          , {projection: d} = a;
        d && (o.group && o.group.add(d),
        s && s.register && c && s.register(d),
        Vc && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        d.setOptions({
            ...d.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        Do.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(a) {
        const {layoutDependency: o, visualElement: s, drag: c, isPresent: d} = this.props
          , {projection: f} = s;
        return f && (f.isPresent = d,
        a.layoutDependency !== o && f.setOptions({
            ...f.options,
            layoutDependency: o
        }),
        Vc = !0,
        c || a.layoutDependency !== o || o === void 0 || a.isPresent !== d ? f.willUpdate() : this.safeToRemove(),
        a.isPresent !== d && (d ? f.promote() : f.relegate() || St.postRender( () => {
            const m = f.getStack();
            (!m || !m.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {visualElement: a, layoutAnchor: o} = this.props
          , {projection: s} = a;
        s && (s.options.layoutAnchor = o,
        s.root.didUpdate(),
        Uf.postRender( () => {
            !s.currentAnimation && s.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: a, layoutGroup: o, switchLayoutGroup: s} = this.props
          , {projection: c} = a;
        Vc = !0,
        c && (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        s && s.deregister && s.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: a} = this.props;
        a && a()
    }
    render() {
        return null
    }
}
function Yv(i) {
    const [a,o] = Dv()
      , s = q.useContext(gf);
    return x.jsx(lE, {
        ...i,
        layoutGroup: s,
        switchLayoutGroup: q.useContext(Uv),
        isPresent: a,
        safeToRemove: o
    })
}
const sE = {
    pan: {
        Feature: aE
    },
    drag: {
        Feature: iE,
        ProjectionNode: Cv,
        MeasureLayout: Yv
    }
};
function xy(i, a, o) {
    const {props: s} = i;
    i.animationState && s.whileHover && i.animationState.setActive("whileHover", o === "Start");
    const c = "onHover" + o
      , d = s[c];
    d && St.postRender( () => d(a, Fl(a)))
}
class oE extends ri {
    mount() {
        const {current: a} = this.node;
        a && (this.unmount = j2(a, (o, s) => (xy(this.node, s, "Start"),
        c => xy(this.node, c, "End"))))
    }
    unmount() {}
}
class rE extends ri {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let a = !1;
        try {
            a = this.node.current.matches(":focus-visible")
        } catch {
            a = !0
        }
        !a || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Zl(Ql(this.node.current, "focus", () => this.onFocus()), Ql(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Sy(i, a, o) {
    const {props: s} = i;
    if (i.current instanceof HTMLButtonElement && i.current.disabled)
        return;
    i.animationState && s.whileTap && i.animationState.setActive("whileTap", o === "Start");
    const c = "onTap" + (o === "End" ? "" : o)
      , d = s[c];
    d && St.postRender( () => d(a, Fl(a)))
}
class uE extends ri {
    mount() {
        const {current: a} = this.node;
        if (!a)
            return;
        const {globalTapTarget: o, propagate: s} = this.node.props;
        this.unmount = O2(a, (c, d) => (Sy(this.node, d, "Start"),
        (f, {success: m}) => Sy(this.node, f, m ? "End" : "Cancel")), {
            useGlobalTarget: o,
            stopPropagation: (s == null ? void 0 : s.tap) === !1
        })
    }
    unmount() {}
}
const ff = new WeakMap
  , _c = new WeakMap
  , cE = i => {
    const a = ff.get(i.target);
    a && a(i)
}
  , fE = i => {
    i.forEach(cE)
}
;
function dE({root: i, ...a}) {
    const o = i || document;
    _c.has(o) || _c.set(o, {});
    const s = _c.get(o)
      , c = JSON.stringify(a);
    return s[c] || (s[c] = new IntersectionObserver(fE,{
        root: i,
        ...a
    })),
    s[c]
}
function hE(i, a, o) {
    const s = dE(a);
    return ff.set(i, o),
    s.observe(i),
    () => {
        ff.delete(i),
        s.unobserve(i)
    }
}
const mE = {
    some: 0,
    all: 1
};
class pE extends ri {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        var p;
        (p = this.stopObserver) == null || p.call(this);
        const {viewport: a={}} = this.node.getProps()
          , {root: o, margin: s, amount: c="some", once: d} = a
          , f = {
            root: o ? o.current : void 0,
            rootMargin: s,
            threshold: typeof c == "number" ? c : mE[c]
        }
          , m = g => {
            const {isIntersecting: y} = g;
            if (this.isInView === y || (this.isInView = y,
            d && !y && this.hasEnteredView))
                return;
            y && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", y);
            const {onViewportEnter: b, onViewportLeave: S} = this.node.getProps()
              , E = y ? b : S;
            E && E(g)
        }
        ;
        this.stopObserver = hE(this.node.current, f, m)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: a, prevProps: o} = this.node;
        ["amount", "margin", "root"].some(gE(a, o)) && this.startObserver()
    }
    unmount() {
        var a;
        (a = this.stopObserver) == null || a.call(this),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
}
function gE({viewport: i={}}, {viewport: a={}}={}) {
    return o => i[o] !== a[o]
}
const yE = {
    inView: {
        Feature: pE
    },
    tap: {
        Feature: uE
    },
    focus: {
        Feature: rE
    },
    hover: {
        Feature: oE
    }
}
  , vE = {
    layout: {
        ProjectionNode: Cv,
        MeasureLayout: Yv
    }
}
  , bE = {
    ...YA,
    ...yE,
    ...sE,
    ...vE
}
  , Da = UA(bE, LA);
function xE(i, a, o) {
    q.useInsertionEffect( () => i.on(a, o), [i, a, o])
}
function qo(i) {
    return typeof window > "u" ? !1 : i ? R0() : zf()
}
const SE = 50
  , Ty = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , TE = () => ({
    time: 0,
    x: Ty(),
    y: Ty()
})
  , wE = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function wy(i, a, o, s) {
    const c = o[a]
      , {length: d, position: f} = wE[a]
      , m = c.current
      , p = o.time;
    c.current = Math.abs(i[`scroll${f}`]),
    c.scrollLength = i[`scroll${d}`] - i[`client${d}`],
    c.offset.length = 0,
    c.offset[0] = 0,
    c.offset[1] = c.scrollLength,
    c.progress = Na(0, c.scrollLength, c.current);
    const g = s - p;
    c.velocity = g > SE ? 0 : bf(c.current - m, g)
}
function AE(i, a, o) {
    wy(i, "x", a, o),
    wy(i, "y", a, o),
    a.time = o
}
function EE(i, a) {
    const o = {
        x: 0,
        y: 0
    };
    let s = i;
    for (; s && s !== a; )
        if (Ul(s))
            o.x += s.offsetLeft,
            o.y += s.offsetTop,
            s = s.offsetParent;
        else if (s.tagName === "svg") {
            const c = s.getBoundingClientRect();
            s = s.parentElement;
            const d = s.getBoundingClientRect();
            o.x += c.left - d.left,
            o.y += c.top - d.top
        } else if (s instanceof SVGGraphicsElement) {
            const {x: c, y: d} = s.getBBox();
            o.x += c,
            o.y += d;
            let f = null
              , m = s.parentNode;
            for (; !f; )
                m.tagName === "svg" && (f = m),
                m = s.parentNode;
            s = f
        } else
            break;
    return o
}
const df = {
    start: 0,
    center: .5,
    end: 1
};
function Ay(i, a, o=0) {
    let s = 0;
    if (i in df && (i = df[i]),
    typeof i == "string") {
        const c = parseFloat(i);
        i.endsWith("px") ? s = c : i.endsWith("%") ? i = c / 100 : i.endsWith("vw") ? s = c / 100 * document.documentElement.clientWidth : i.endsWith("vh") ? s = c / 100 * document.documentElement.clientHeight : i = c
    }
    return typeof i == "number" && (s = a * i),
    o + s
}
const ME = [0, 0];
function jE(i, a, o, s) {
    let c = Array.isArray(i) ? i : ME
      , d = 0
      , f = 0;
    return typeof i == "number" ? c = [i, i] : typeof i == "string" && (i = i.trim(),
    i.includes(" ") ? c = i.split(" ") : c = [i, df[i] ? i : "0"]),
    d = Ay(c[0], o, s),
    f = Ay(c[1], a),
    d - f
}
const Ol = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , CE = {
    x: 0,
    y: 0
};
function DE(i) {
    return "getBBox"in i && i.tagName !== "svg" ? i.getBBox() : {
        width: i.clientWidth,
        height: i.clientHeight
    }
}
function NE(i, a, o) {
    const {offset: s=Ol.All} = o
      , {target: c=i, axis: d="y"} = o
      , f = d === "y" ? "height" : "width"
      , m = c !== i ? EE(c, i) : CE
      , p = c === i ? {
        width: i.scrollWidth,
        height: i.scrollHeight
    } : DE(c)
      , g = {
        width: i.clientWidth,
        height: i.clientHeight
    };
    a[d].offset.length = 0;
    let y = !a[d].interpolate;
    const b = s.length;
    for (let S = 0; S < b; S++) {
        const E = jE(s[S], g[f], p[f], m[d]);
        !y && E !== a[d].interpolatorOffsets[S] && (y = !0),
        a[d].offset[S] = E
    }
    y && (a[d].interpolate = jf(a[d].offset, j0(s), {
        clamp: !1
    }),
    a[d].interpolatorOffsets = [...a[d].offset]),
    a[d].progress = tn(0, 1, a[d].interpolate(a[d].current))
}
function zE(i, a=i, o) {
    if (o.x.targetOffset = 0,
    o.y.targetOffset = 0,
    a !== i) {
        let s = a;
        for (; s && s !== i; )
            o.x.targetOffset += s.offsetLeft,
            o.y.targetOffset += s.offsetTop,
            s = s.offsetParent
    }
    o.x.targetLength = a === i ? a.scrollWidth : a.clientWidth,
    o.y.targetLength = a === i ? a.scrollHeight : a.clientHeight,
    o.x.containerLength = i.clientWidth,
    o.y.containerLength = i.clientHeight
}
function RE(i, a, o, s={}) {
    return {
        measure: c => {
            zE(i, s.target, o),
            AE(i, o, c),
            (s.offset || s.target) && NE(i, o, s)
        }
        ,
        notify: () => a(o)
    }
}
const wa = new WeakMap
  , Ey = new WeakMap
  , Bc = new WeakMap
  , My = new WeakMap
  , bo = new WeakMap
  , jy = i => i === document.scrollingElement ? window : i;
function Gv(i, {container: a=document.scrollingElement, trackContentSize: o=!1, ...s}={}) {
    if (!a)
        return Se;
    let c = Bc.get(a);
    c || (c = new Set,
    Bc.set(a, c));
    const d = TE()
      , f = RE(a, i, d, s);
    if (c.add(f),
    !wa.has(a)) {
        const p = () => {
            for (const S of c)
                S.measure(ae.timestamp);
            St.preUpdate(g)
        }
          , g = () => {
            for (const S of c)
                S.notify()
        }
          , y = () => St.read(p);
        wa.set(a, y);
        const b = jy(a);
        window.addEventListener("resize", y),
        a !== document.documentElement && Ey.set(a, af(a, y)),
        b.addEventListener("scroll", y),
        y()
    }
    if (o && !bo.has(a)) {
        const p = wa.get(a)
          , g = {
            width: a.scrollWidth,
            height: a.scrollHeight
        };
        My.set(a, g);
        const y = () => {
            const S = a.scrollWidth
              , E = a.scrollHeight;
            (g.width !== S || g.height !== E) && (p(),
            g.width = S,
            g.height = E)
        }
          , b = St.read(y, !0);
        bo.set(a, b)
    }
    const m = wa.get(a);
    return St.read(m, !1, !0),
    () => {
        var b;
        Oe(m);
        const p = Bc.get(a);
        if (!p || (p.delete(f),
        p.size))
            return;
        const g = wa.get(a);
        wa.delete(a),
        g && (jy(a).removeEventListener("scroll", g),
        (b = Ey.get(a)) == null || b(),
        window.removeEventListener("resize", g));
        const y = bo.get(a);
        y && (Oe(y),
        bo.delete(a)),
        My.delete(a)
    }
}
const OE = [[Ol.Enter, "entry"], [Ol.Exit, "exit"], [Ol.Any, "cover"], [Ol.All, "contain"]]
  , Cy = {
    start: 0,
    end: 1
};
function VE(i) {
    const a = i.trim().split(/\s+/);
    if (a.length !== 2)
        return;
    const o = Cy[a[0]]
      , s = Cy[a[1]];
    if (!(o === void 0 || s === void 0))
        return [o, s]
}
function _E(i) {
    if (i.length !== 2)
        return;
    const a = [];
    for (const o of i)
        if (Array.isArray(o))
            a.push(o);
        else if (typeof o == "string") {
            const s = VE(o);
            if (!s)
                return;
            a.push(s)
        } else
            return;
    return a
}
function BE(i, a) {
    const o = _E(i);
    if (!o)
        return !1;
    for (let s = 0; s < 2; s++) {
        const c = o[s]
          , d = a[s];
        if (c[0] !== d[0] || c[1] !== d[1])
            return !1
    }
    return !0
}
function Zf(i) {
    if (!i)
        return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
    for (const [a,o] of OE)
        if (BE(i, a))
            return {
                rangeStart: `${o} 0%`,
                rangeEnd: `${o} 100%`
            }
}
const Dy = new Map;
function Ny(i) {
    const a = {
        value: 0
    }
      , o = Gv(s => {
        a.value = s[i.axis].progress * 100
    }
    , i);
    return {
        currentTime: a,
        cancel: o
    }
}
function Xv({source: i, container: a, ...o}) {
    const {axis: s} = o;
    i && (a = i);
    let c = Dy.get(a);
    c || (c = new Map,
    Dy.set(a, c));
    const d = o.target ?? "self";
    let f = c.get(d);
    f || (f = {},
    c.set(d, f));
    const m = s + (o.offset ?? []).join(",");
    return f[m] || (o.target && qo(o.target) ? Zf(o.offset) ? f[m] = new ViewTimeline({
        subject: o.target,
        axis: s
    }) : f[m] = Ny({
        container: a,
        ...o
    }) : qo() ? f[m] = new ScrollTimeline({
        source: a,
        axis: s
    }) : f[m] = Ny({
        container: a,
        ...o
    })),
    f[m]
}
function UE(i, a) {
    const o = Xv(a)
      , s = a.target ? Zf(a.offset) : void 0
      , c = a.target ? qo(a.target) && !!s : qo();
    return i.attachTimeline({
        timeline: c ? o : void 0,
        ...s && c && {
            rangeStart: s.rangeStart,
            rangeEnd: s.rangeEnd
        },
        observe: d => (d.pause(),
        nv(f => {
            d.time = d.iterationDuration * f
        }
        , o))
    })
}
function LE(i) {
    return i.length === 2
}
function kE(i, a) {
    return LE(i) ? Gv(o => {
        i(o[a.axis].progress, o)
    }
    , a) : nv(i, Xv(a))
}
function Qv(i, {axis: a="y", container: o=document.scrollingElement, ...s}={}) {
    if (!o)
        return Se;
    const c = {
        axis: a,
        container: o,
        ...s
    };
    return typeof i == "function" ? kE(i, c) : UE(i, c)
}
const HE = () => ({
    scrollX: $e(0),
    scrollY: $e(0),
    scrollXProgress: $e(0),
    scrollYProgress: $e(0)
})
  , xo = i => i ? !i.current : !1;
function zy(i, a, o, s) {
    return {
        factory: c => Qv(c, {
            ...a,
            axis: i,
            container: (o == null ? void 0 : o.current) || void 0,
            target: (s == null ? void 0 : s.current) || void 0
        }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: c => c,
        duration: 1
    }
}
function qE(i, a) {
    return typeof window > "u" ? !1 : i ? R0() && !!Zf(a) : zf()
}
function YE({container: i, target: a, ...o}={}) {
    const s = si(HE);
    qE(a, o.offset) && (s.scrollXProgress.accelerate = zy("x", o, i, a),
    s.scrollYProgress.accelerate = zy("y", o, i, a));
    const c = q.useRef(null)
      , d = q.useRef(!1)
      , f = q.useCallback( () => (c.current = Qv( (m, {x: p, y: g}) => {
        s.scrollX.set(p.current),
        s.scrollXProgress.set(p.progress),
        s.scrollY.set(g.current),
        s.scrollYProgress.set(g.progress)
    }
    , {
        ...o,
        container: (i == null ? void 0 : i.current) || void 0,
        target: (a == null ? void 0 : a.current) || void 0
    }),
    () => {
        var m;
        (m = c.current) == null || m.call(c)
    }
    ), [i, a, JSON.stringify(o.offset)]);
    return Xo( () => {
        if (d.current = !1,
        xo(i) || xo(a)) {
            d.current = !0;
            return
        } else
            return f()
    }
    , [f]),
    q.useEffect( () => {
        if (d.current)
            return ql(!xo(i)),
            ql(!xo(a)),
            f()
    }
    , [f]),
    s
}
function Vi(i) {
    const a = si( () => $e(i))
      , {isStatic: o} = q.useContext(_a);
    if (o) {
        const [,s] = q.useState(i);
        q.useEffect( () => a.on("change", s), [])
    }
    return a
}
function Zv(i, a) {
    const o = Vi(a())
      , s = () => o.set(a());
    return s(),
    Xo( () => {
        const c = () => St.preRender(s, !1, !0)
          , d = i.map(f => f.on("change", c));
        return () => {
            d.forEach(f => f()),
            Oe(s)
        }
    }
    ),
    o
}
function GE(i) {
    Bl.current = [],
    i();
    const a = Zv(Bl.current, i);
    return Bl.current = void 0,
    a
}
function Hl(i, a, o, s) {
    if (typeof i == "function")
        return GE(i);
    if (o !== void 0 && !Array.isArray(o) && typeof a != "function")
        return XE(i, a, o, s);
    const f = typeof a == "function" ? a : G2(a, o, s)
      , m = Array.isArray(i) ? Ry(i, f) : Ry([i], ([g]) => f(g))
      , p = Array.isArray(i) ? void 0 : i.accelerate;
    return p && !p.isTransformed && typeof a != "function" && Array.isArray(o) && (s == null ? void 0 : s.clamp) !== !1 && (m.accelerate = {
        ...p,
        times: a,
        keyframes: o,
        isTransformed: !0,
        ...s != null && s.ease ? {
            ease: s.ease
        } : {}
    }),
    m
}
function Ry(i, a) {
    const o = si( () => []);
    return Zv(i, () => {
        o.length = 0;
        const s = i.length;
        for (let c = 0; c < s; c++)
            o[c] = i[c].get();
        return a(o)
    }
    )
}
function XE(i, a, o, s) {
    const c = si( () => Object.keys(o))
      , d = si( () => ({}));
    for (const f of c)
        d[f] = Hl(i, a, o[f], s);
    return d
}
function QE(i, a={}) {
    const {isStatic: o} = q.useContext(_a)
      , s = () => ee(i) ? i.get() : i;
    if (o)
        return Hl(s);
    const c = Vi(s());
    return q.useInsertionEffect( () => X2(c, i, a), [c, JSON.stringify(a)]),
    c
}
function Oy(i, a={}) {
    return QE(i, {
        type: "spring",
        ...a
    })
}
function ZE(i) {
    const a = q.useRef(0)
      , {isStatic: o} = q.useContext(_a);
    q.useEffect( () => {
        if (o)
            return;
        const s = ({timestamp: c, delta: d}) => {
            a.current || (a.current = c),
            i(c - a.current, d)
        }
        ;
        return St.update(s, !0),
        () => Oe(s)
    }
    , [i])
}
function KE(i) {
    const a = Vi(i.getVelocity())
      , o = () => {
        const s = i.getVelocity();
        a.set(s),
        s && St.update(o)
    }
    ;
    return xE(i, "change", () => {
        St.update(o, !1, !0)
    }
    ),
    a
}
function Kv(i) {
    var a, o, s = "";
    if (typeof i == "string" || typeof i == "number")
        s += i;
    else if (typeof i == "object")
        if (Array.isArray(i)) {
            var c = i.length;
            for (a = 0; a < c; a++)
                i[a] && (o = Kv(i[a])) && (s && (s += " "),
                s += o)
        } else
            for (o in i)
                i[o] && (s && (s += " "),
                s += o);
    return s
}
function JE() {
    for (var i, a, o = 0, s = "", c = arguments.length; o < c; o++)
        (i = arguments[o]) && (a = Kv(i)) && (s && (s += " "),
        s += a);
    return s
}
const FE = (i, a) => {
    const o = new Array(i.length + a.length);
    for (let s = 0; s < i.length; s++)
        o[s] = i[s];
    for (let s = 0; s < a.length; s++)
        o[i.length + s] = a[s];
    return o
}
  , PE = (i, a) => ({
    classGroupId: i,
    validator: a
})
  , Jv = (i=new Map, a=null, o) => ({
    nextPart: i,
    validators: a,
    classGroupId: o
})
  , Yo = "-"
  , Vy = []
  , WE = "arbitrary.."
  , $E = i => {
    const a = t3(i)
      , {conflictingClassGroups: o, conflictingClassGroupModifiers: s} = i;
    return {
        getClassGroupId: f => {
            if (f.startsWith("[") && f.endsWith("]"))
                return IE(f);
            const m = f.split(Yo)
              , p = m[0] === "" && m.length > 1 ? 1 : 0;
            return Fv(m, p, a)
        }
        ,
        getConflictingClassGroupIds: (f, m) => {
            if (m) {
                const p = s[f]
                  , g = o[f];
                return p ? g ? FE(g, p) : p : g || Vy
            }
            return o[f] || Vy
        }
    }
}
  , Fv = (i, a, o) => {
    if (i.length - a === 0)
        return o.classGroupId;
    const c = i[a]
      , d = o.nextPart.get(c);
    if (d) {
        const g = Fv(i, a + 1, d);
        if (g)
            return g
    }
    const f = o.validators;
    if (f === null)
        return;
    const m = a === 0 ? i.join(Yo) : i.slice(a).join(Yo)
      , p = f.length;
    for (let g = 0; g < p; g++) {
        const y = f[g];
        if (y.validator(m))
            return y.classGroupId
    }
}
  , IE = i => i.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const a = i.slice(1, -1)
      , o = a.indexOf(":")
      , s = a.slice(0, o);
    return s ? WE + s : void 0
}
)()
  , t3 = i => {
    const {theme: a, classGroups: o} = i;
    return e3(o, a)
}
  , e3 = (i, a) => {
    const o = Jv();
    for (const s in i) {
        const c = i[s];
        Kf(c, o, s, a)
    }
    return o
}
  , Kf = (i, a, o, s) => {
    const c = i.length;
    for (let d = 0; d < c; d++) {
        const f = i[d];
        n3(f, a, o, s)
    }
}
  , n3 = (i, a, o, s) => {
    if (typeof i == "string") {
        i3(i, a, o);
        return
    }
    if (typeof i == "function") {
        a3(i, a, o, s);
        return
    }
    l3(i, a, o, s)
}
  , i3 = (i, a, o) => {
    const s = i === "" ? a : Pv(a, i);
    s.classGroupId = o
}
  , a3 = (i, a, o, s) => {
    if (s3(i)) {
        Kf(i(s), a, o, s);
        return
    }
    a.validators === null && (a.validators = []),
    a.validators.push(PE(o, i))
}
  , l3 = (i, a, o, s) => {
    const c = Object.entries(i)
      , d = c.length;
    for (let f = 0; f < d; f++) {
        const [m,p] = c[f];
        Kf(p, Pv(a, m), o, s)
    }
}
  , Pv = (i, a) => {
    let o = i;
    const s = a.split(Yo)
      , c = s.length;
    for (let d = 0; d < c; d++) {
        const f = s[d];
        let m = o.nextPart.get(f);
        m || (m = Jv(),
        o.nextPart.set(f, m)),
        o = m
    }
    return o
}
  , s3 = i => "isThemeGetter"in i && i.isThemeGetter === !0
  , o3 = i => {
    if (i < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let a = 0
      , o = Object.create(null)
      , s = Object.create(null);
    const c = (d, f) => {
        o[d] = f,
        a++,
        a > i && (a = 0,
        s = o,
        o = Object.create(null))
    }
    ;
    return {
        get(d) {
            let f = o[d];
            if (f !== void 0)
                return f;
            if ((f = s[d]) !== void 0)
                return c(d, f),
                f
        },
        set(d, f) {
            d in o ? o[d] = f : c(d, f)
        }
    }
}
  , hf = "!"
  , _y = ":"
  , r3 = []
  , By = (i, a, o, s, c) => ({
    modifiers: i,
    hasImportantModifier: a,
    baseClassName: o,
    maybePostfixModifierPosition: s,
    isExternal: c
})
  , u3 = i => {
    const {prefix: a, experimentalParseClassName: o} = i;
    let s = c => {
        const d = [];
        let f = 0, m = 0, p = 0, g;
        const y = c.length;
        for (let O = 0; O < y; O++) {
            const _ = c[O];
            if (f === 0 && m === 0) {
                if (_ === _y) {
                    d.push(c.slice(p, O)),
                    p = O + 1;
                    continue
                }
                if (_ === "/") {
                    g = O;
                    continue
                }
            }
            _ === "[" ? f++ : _ === "]" ? f-- : _ === "(" ? m++ : _ === ")" && m--
        }
        const b = d.length === 0 ? c : c.slice(p);
        let S = b
          , E = !1;
        b.endsWith(hf) ? (S = b.slice(0, -1),
        E = !0) : b.startsWith(hf) && (S = b.slice(1),
        E = !0);
        const D = g && g > p ? g - p : void 0;
        return By(d, E, S, D)
    }
    ;
    if (a) {
        const c = a + _y
          , d = s;
        s = f => f.startsWith(c) ? d(f.slice(c.length)) : By(r3, !1, f, void 0, !0)
    }
    if (o) {
        const c = s;
        s = d => o({
            className: d,
            parseClassName: c
        })
    }
    return s
}
  , c3 = i => {
    const a = new Map;
    return i.orderSensitiveModifiers.forEach( (o, s) => {
        a.set(o, 1e6 + s)
    }
    ),
    o => {
        const s = [];
        let c = [];
        for (let d = 0; d < o.length; d++) {
            const f = o[d]
              , m = f[0] === "["
              , p = a.has(f);
            m || p ? (c.length > 0 && (c.sort(),
            s.push(...c),
            c = []),
            s.push(f)) : c.push(f)
        }
        return c.length > 0 && (c.sort(),
        s.push(...c)),
        s
    }
}
  , f3 = i => ({
    cache: o3(i.cacheSize),
    parseClassName: u3(i),
    sortModifiers: c3(i),
    ...$E(i)
})
  , d3 = /\s+/
  , h3 = (i, a) => {
    const {parseClassName: o, getClassGroupId: s, getConflictingClassGroupIds: c, sortModifiers: d} = a
      , f = []
      , m = i.trim().split(d3);
    let p = "";
    for (let g = m.length - 1; g >= 0; g -= 1) {
        const y = m[g]
          , {isExternal: b, modifiers: S, hasImportantModifier: E, baseClassName: D, maybePostfixModifierPosition: O} = o(y);
        if (b) {
            p = y + (p.length > 0 ? " " + p : p);
            continue
        }
        let _ = !!O
          , H = s(_ ? D.substring(0, O) : D);
        if (!H) {
            if (!_) {
                p = y + (p.length > 0 ? " " + p : p);
                continue
            }
            if (H = s(D),
            !H) {
                p = y + (p.length > 0 ? " " + p : p);
                continue
            }
            _ = !1
        }
        const Q = S.length === 0 ? "" : S.length === 1 ? S[0] : d(S).join(":")
          , Y = E ? Q + hf : Q
          , G = Y + H;
        if (f.indexOf(G) > -1)
            continue;
        f.push(G);
        const F = c(H, _);
        for (let rt = 0; rt < F.length; ++rt) {
            const I = F[rt];
            f.push(Y + I)
        }
        p = y + (p.length > 0 ? " " + p : p)
    }
    return p
}
  , m3 = (...i) => {
    let a = 0, o, s, c = "";
    for (; a < i.length; )
        (o = i[a++]) && (s = Wv(o)) && (c && (c += " "),
        c += s);
    return c
}
  , Wv = i => {
    if (typeof i == "string")
        return i;
    let a, o = "";
    for (let s = 0; s < i.length; s++)
        i[s] && (a = Wv(i[s])) && (o && (o += " "),
        o += a);
    return o
}
  , p3 = (i, ...a) => {
    let o, s, c, d;
    const f = p => {
        const g = a.reduce( (y, b) => b(y), i());
        return o = f3(g),
        s = o.cache.get,
        c = o.cache.set,
        d = m,
        m(p)
    }
      , m = p => {
        const g = s(p);
        if (g)
            return g;
        const y = h3(p, o);
        return c(p, y),
        y
    }
    ;
    return d = f,
    (...p) => d(m3(...p))
}
  , g3 = []
  , It = i => {
    const a = o => o[i] || g3;
    return a.isThemeGetter = !0,
    a
}
  , $v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Iv = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , y3 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , v3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , b3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , x3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , S3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , T3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , ei = i => y3.test(i)
  , yt = i => !!i && !Number.isNaN(Number(i))
  , ni = i => !!i && Number.isInteger(Number(i))
  , Uc = i => i.endsWith("%") && yt(i.slice(0, -1))
  , Cn = i => v3.test(i)
  , tb = () => !0
  , w3 = i => b3.test(i) && !x3.test(i)
  , Jf = () => !1
  , A3 = i => S3.test(i)
  , E3 = i => T3.test(i)
  , M3 = i => !et(i) && !it(i)
  , j3 = i => ui(i, ib, Jf)
  , et = i => $v.test(i)
  , Di = i => ui(i, ab, w3)
  , Uy = i => ui(i, _3, yt)
  , C3 = i => ui(i, sb, tb)
  , D3 = i => ui(i, lb, Jf)
  , Ly = i => ui(i, eb, Jf)
  , N3 = i => ui(i, nb, E3)
  , So = i => ui(i, ob, A3)
  , it = i => Iv.test(i)
  , zl = i => Ui(i, ab)
  , z3 = i => Ui(i, lb)
  , ky = i => Ui(i, eb)
  , R3 = i => Ui(i, ib)
  , O3 = i => Ui(i, nb)
  , To = i => Ui(i, ob, !0)
  , V3 = i => Ui(i, sb, !0)
  , ui = (i, a, o) => {
    const s = $v.exec(i);
    return s ? s[1] ? a(s[1]) : o(s[2]) : !1
}
  , Ui = (i, a, o=!1) => {
    const s = Iv.exec(i);
    return s ? s[1] ? a(s[1]) : o : !1
}
  , eb = i => i === "position" || i === "percentage"
  , nb = i => i === "image" || i === "url"
  , ib = i => i === "length" || i === "size" || i === "bg-size"
  , ab = i => i === "length"
  , _3 = i => i === "number"
  , lb = i => i === "family-name"
  , sb = i => i === "number" || i === "weight"
  , ob = i => i === "shadow"
  , B3 = () => {
    const i = It("color")
      , a = It("font")
      , o = It("text")
      , s = It("font-weight")
      , c = It("tracking")
      , d = It("leading")
      , f = It("breakpoint")
      , m = It("container")
      , p = It("spacing")
      , g = It("radius")
      , y = It("shadow")
      , b = It("inset-shadow")
      , S = It("text-shadow")
      , E = It("drop-shadow")
      , D = It("blur")
      , O = It("perspective")
      , _ = It("aspect")
      , H = It("ease")
      , Q = It("animate")
      , Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , G = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , F = () => [...G(), it, et]
      , rt = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , I = () => ["auto", "contain", "none"]
      , L = () => [it, et, p]
      , at = () => [ei, "full", "auto", ...L()]
      , $ = () => [ni, "none", "subgrid", it, et]
      , ut = () => ["auto", {
        span: ["full", ni, it, et]
    }, ni, it, et]
      , gt = () => [ni, "auto", it, et]
      , kt = () => ["auto", "min", "max", "fr", it, et]
      , Ct = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , Dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , z = () => ["auto", ...L()]
      , Z = () => [ei, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()]
      , P = () => [ei, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...L()]
      , ft = () => [ei, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...L()]
      , X = () => [i, it, et]
      , w = () => [...G(), ky, Ly, {
        position: [it, et]
    }]
      , U = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , J = () => ["auto", "cover", "contain", R3, j3, {
        size: [it, et]
    }]
      , K = () => [Uc, zl, Di]
      , W = () => ["", "none", "full", g, it, et]
      , lt = () => ["", yt, zl, Di]
      , vt = () => ["solid", "dashed", "dotted", "double"]
      , Xt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ht = () => [yt, Uc, ky, Ly]
      , en = () => ["", "none", D, it, et]
      , Ze = () => ["none", yt, it, et]
      , Dn = () => ["none", yt, it, et]
      , Li = () => [yt, it, et]
      , Ve = () => [ei, "full", ...L()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Cn],
            breakpoint: [Cn],
            color: [tb],
            container: [Cn],
            "drop-shadow": [Cn],
            ease: ["in", "out", "in-out"],
            font: [M3],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Cn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Cn],
            shadow: [Cn],
            spacing: ["px", yt],
            text: [Cn],
            "text-shadow": [Cn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", ei, et, it, _]
            }],
            container: ["container"],
            columns: [{
                columns: [yt, et, it, m]
            }],
            "break-after": [{
                "break-after": Y()
            }],
            "break-before": [{
                "break-before": Y()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: F()
            }],
            overflow: [{
                overflow: rt()
            }],
            "overflow-x": [{
                "overflow-x": rt()
            }],
            "overflow-y": [{
                "overflow-y": rt()
            }],
            overscroll: [{
                overscroll: I()
            }],
            "overscroll-x": [{
                "overscroll-x": I()
            }],
            "overscroll-y": [{
                "overscroll-y": I()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: at()
            }],
            "inset-x": [{
                "inset-x": at()
            }],
            "inset-y": [{
                "inset-y": at()
            }],
            start: [{
                "inset-s": at(),
                start: at()
            }],
            end: [{
                "inset-e": at(),
                end: at()
            }],
            "inset-bs": [{
                "inset-bs": at()
            }],
            "inset-be": [{
                "inset-be": at()
            }],
            top: [{
                top: at()
            }],
            right: [{
                right: at()
            }],
            bottom: [{
                bottom: at()
            }],
            left: [{
                left: at()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [ni, "auto", it, et]
            }],
            basis: [{
                basis: [ei, "full", "auto", m, ...L()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [yt, ei, "auto", "initial", "none", et]
            }],
            grow: [{
                grow: ["", yt, it, et]
            }],
            shrink: [{
                shrink: ["", yt, it, et]
            }],
            order: [{
                order: [ni, "first", "last", "none", it, et]
            }],
            "grid-cols": [{
                "grid-cols": $()
            }],
            "col-start-end": [{
                col: ut()
            }],
            "col-start": [{
                "col-start": gt()
            }],
            "col-end": [{
                "col-end": gt()
            }],
            "grid-rows": [{
                "grid-rows": $()
            }],
            "row-start-end": [{
                row: ut()
            }],
            "row-start": [{
                "row-start": gt()
            }],
            "row-end": [{
                "row-end": gt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": kt()
            }],
            "auto-rows": [{
                "auto-rows": kt()
            }],
            gap: [{
                gap: L()
            }],
            "gap-x": [{
                "gap-x": L()
            }],
            "gap-y": [{
                "gap-y": L()
            }],
            "justify-content": [{
                justify: [...Ct(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...Dt(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...Dt()]
            }],
            "align-content": [{
                content: ["normal", ...Ct()]
            }],
            "align-items": [{
                items: [...Dt(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...Dt(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ct()
            }],
            "place-items": [{
                "place-items": [...Dt(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...Dt()]
            }],
            p: [{
                p: L()
            }],
            px: [{
                px: L()
            }],
            py: [{
                py: L()
            }],
            ps: [{
                ps: L()
            }],
            pe: [{
                pe: L()
            }],
            pbs: [{
                pbs: L()
            }],
            pbe: [{
                pbe: L()
            }],
            pt: [{
                pt: L()
            }],
            pr: [{
                pr: L()
            }],
            pb: [{
                pb: L()
            }],
            pl: [{
                pl: L()
            }],
            m: [{
                m: z()
            }],
            mx: [{
                mx: z()
            }],
            my: [{
                my: z()
            }],
            ms: [{
                ms: z()
            }],
            me: [{
                me: z()
            }],
            mbs: [{
                mbs: z()
            }],
            mbe: [{
                mbe: z()
            }],
            mt: [{
                mt: z()
            }],
            mr: [{
                mr: z()
            }],
            mb: [{
                mb: z()
            }],
            ml: [{
                ml: z()
            }],
            "space-x": [{
                "space-x": L()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": L()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: Z()
            }],
            "inline-size": [{
                inline: ["auto", ...P()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...P()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...P()]
            }],
            "block-size": [{
                block: ["auto", ...ft()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...ft()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...ft()]
            }],
            w: [{
                w: [m, "screen", ...Z()]
            }],
            "min-w": [{
                "min-w": [m, "screen", "none", ...Z()]
            }],
            "max-w": [{
                "max-w": [m, "screen", "none", "prose", {
                    screen: [f]
                }, ...Z()]
            }],
            h: [{
                h: ["screen", "lh", ...Z()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...Z()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...Z()]
            }],
            "font-size": [{
                text: ["base", o, zl, Di]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [s, V3, C3]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Uc, et]
            }],
            "font-family": [{
                font: [z3, D3, a]
            }],
            "font-features": [{
                "font-features": [et]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [c, it, et]
            }],
            "line-clamp": [{
                "line-clamp": [yt, "none", it, Uy]
            }],
            leading: [{
                leading: [d, ...L()]
            }],
            "list-image": [{
                "list-image": ["none", it, et]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", it, et]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: X()
            }],
            "text-color": [{
                text: X()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...vt(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [yt, "from-font", "auto", it, Di]
            }],
            "text-decoration-color": [{
                decoration: X()
            }],
            "underline-offset": [{
                "underline-offset": [yt, "auto", it, et]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", it, et]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", it, et]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: w()
            }],
            "bg-repeat": [{
                bg: U()
            }],
            "bg-size": [{
                bg: J()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, ni, it, et],
                    radial: ["", it, et],
                    conic: [ni, it, et]
                }, O3, N3]
            }],
            "bg-color": [{
                bg: X()
            }],
            "gradient-from-pos": [{
                from: K()
            }],
            "gradient-via-pos": [{
                via: K()
            }],
            "gradient-to-pos": [{
                to: K()
            }],
            "gradient-from": [{
                from: X()
            }],
            "gradient-via": [{
                via: X()
            }],
            "gradient-to": [{
                to: X()
            }],
            rounded: [{
                rounded: W()
            }],
            "rounded-s": [{
                "rounded-s": W()
            }],
            "rounded-e": [{
                "rounded-e": W()
            }],
            "rounded-t": [{
                "rounded-t": W()
            }],
            "rounded-r": [{
                "rounded-r": W()
            }],
            "rounded-b": [{
                "rounded-b": W()
            }],
            "rounded-l": [{
                "rounded-l": W()
            }],
            "rounded-ss": [{
                "rounded-ss": W()
            }],
            "rounded-se": [{
                "rounded-se": W()
            }],
            "rounded-ee": [{
                "rounded-ee": W()
            }],
            "rounded-es": [{
                "rounded-es": W()
            }],
            "rounded-tl": [{
                "rounded-tl": W()
            }],
            "rounded-tr": [{
                "rounded-tr": W()
            }],
            "rounded-br": [{
                "rounded-br": W()
            }],
            "rounded-bl": [{
                "rounded-bl": W()
            }],
            "border-w": [{
                border: lt()
            }],
            "border-w-x": [{
                "border-x": lt()
            }],
            "border-w-y": [{
                "border-y": lt()
            }],
            "border-w-s": [{
                "border-s": lt()
            }],
            "border-w-e": [{
                "border-e": lt()
            }],
            "border-w-bs": [{
                "border-bs": lt()
            }],
            "border-w-be": [{
                "border-be": lt()
            }],
            "border-w-t": [{
                "border-t": lt()
            }],
            "border-w-r": [{
                "border-r": lt()
            }],
            "border-w-b": [{
                "border-b": lt()
            }],
            "border-w-l": [{
                "border-l": lt()
            }],
            "divide-x": [{
                "divide-x": lt()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": lt()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...vt(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...vt(), "hidden", "none"]
            }],
            "border-color": [{
                border: X()
            }],
            "border-color-x": [{
                "border-x": X()
            }],
            "border-color-y": [{
                "border-y": X()
            }],
            "border-color-s": [{
                "border-s": X()
            }],
            "border-color-e": [{
                "border-e": X()
            }],
            "border-color-bs": [{
                "border-bs": X()
            }],
            "border-color-be": [{
                "border-be": X()
            }],
            "border-color-t": [{
                "border-t": X()
            }],
            "border-color-r": [{
                "border-r": X()
            }],
            "border-color-b": [{
                "border-b": X()
            }],
            "border-color-l": [{
                "border-l": X()
            }],
            "divide-color": [{
                divide: X()
            }],
            "outline-style": [{
                outline: [...vt(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [yt, it, et]
            }],
            "outline-w": [{
                outline: ["", yt, zl, Di]
            }],
            "outline-color": [{
                outline: X()
            }],
            shadow: [{
                shadow: ["", "none", y, To, So]
            }],
            "shadow-color": [{
                shadow: X()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", b, To, So]
            }],
            "inset-shadow-color": [{
                "inset-shadow": X()
            }],
            "ring-w": [{
                ring: lt()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: X()
            }],
            "ring-offset-w": [{
                "ring-offset": [yt, Di]
            }],
            "ring-offset-color": [{
                "ring-offset": X()
            }],
            "inset-ring-w": [{
                "inset-ring": lt()
            }],
            "inset-ring-color": [{
                "inset-ring": X()
            }],
            "text-shadow": [{
                "text-shadow": ["none", S, To, So]
            }],
            "text-shadow-color": [{
                "text-shadow": X()
            }],
            opacity: [{
                opacity: [yt, it, et]
            }],
            "mix-blend": [{
                "mix-blend": [...Xt(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Xt()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [yt]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ht()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ht()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": X()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": X()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ht()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ht()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": X()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": X()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ht()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ht()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": X()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": X()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ht()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ht()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": X()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": X()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ht()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ht()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": X()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": X()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ht()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ht()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": X()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": X()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ht()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ht()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": X()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": X()
            }],
            "mask-image-radial": [{
                "mask-radial": [it, et]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ht()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ht()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": X()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": X()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": G()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [yt]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ht()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ht()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": X()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": X()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: w()
            }],
            "mask-repeat": [{
                mask: U()
            }],
            "mask-size": [{
                mask: J()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", it, et]
            }],
            filter: [{
                filter: ["", "none", it, et]
            }],
            blur: [{
                blur: en()
            }],
            brightness: [{
                brightness: [yt, it, et]
            }],
            contrast: [{
                contrast: [yt, it, et]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", E, To, So]
            }],
            "drop-shadow-color": [{
                "drop-shadow": X()
            }],
            grayscale: [{
                grayscale: ["", yt, it, et]
            }],
            "hue-rotate": [{
                "hue-rotate": [yt, it, et]
            }],
            invert: [{
                invert: ["", yt, it, et]
            }],
            saturate: [{
                saturate: [yt, it, et]
            }],
            sepia: [{
                sepia: ["", yt, it, et]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", it, et]
            }],
            "backdrop-blur": [{
                "backdrop-blur": en()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [yt, it, et]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [yt, it, et]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", yt, it, et]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [yt, it, et]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", yt, it, et]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [yt, it, et]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [yt, it, et]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", yt, it, et]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": L()
            }],
            "border-spacing-x": [{
                "border-spacing-x": L()
            }],
            "border-spacing-y": [{
                "border-spacing-y": L()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", it, et]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [yt, "initial", it, et]
            }],
            ease: [{
                ease: ["linear", "initial", H, it, et]
            }],
            delay: [{
                delay: [yt, it, et]
            }],
            animate: [{
                animate: ["none", Q, it, et]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [O, it, et]
            }],
            "perspective-origin": [{
                "perspective-origin": F()
            }],
            rotate: [{
                rotate: Ze()
            }],
            "rotate-x": [{
                "rotate-x": Ze()
            }],
            "rotate-y": [{
                "rotate-y": Ze()
            }],
            "rotate-z": [{
                "rotate-z": Ze()
            }],
            scale: [{
                scale: Dn()
            }],
            "scale-x": [{
                "scale-x": Dn()
            }],
            "scale-y": [{
                "scale-y": Dn()
            }],
            "scale-z": [{
                "scale-z": Dn()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Li()
            }],
            "skew-x": [{
                "skew-x": Li()
            }],
            "skew-y": [{
                "skew-y": Li()
            }],
            transform: [{
                transform: [it, et, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: F()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Ve()
            }],
            "translate-x": [{
                "translate-x": Ve()
            }],
            "translate-y": [{
                "translate-y": Ve()
            }],
            "translate-z": [{
                "translate-z": Ve()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: X()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: X()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", it, et]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mbs": [{
                "scroll-mbs": L()
            }],
            "scroll-mbe": [{
                "scroll-mbe": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pbs": [{
                "scroll-pbs": L()
            }],
            "scroll-pbe": [{
                "scroll-pbe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", it, et]
            }],
            fill: [{
                fill: ["none", ...X()]
            }],
            "stroke-w": [{
                stroke: [yt, zl, Di, Uy]
            }],
            stroke: [{
                stroke: ["none", ...X()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , U3 = p3(B3);
function Hy(...i) {
    return U3(JE(i))
}
const qy = (i, a, o) => {
    const s = a - i;
    return ((o - i) % s + s) % s + i
}
  , Lc = ({children: i, className: a, direction: o="right", baseVelocity: s=5, slowdownOnHover: c=!1, slowDownFactor: d=.3, slowDownSpringConfig: f={
    damping: 50,
    stiffness: 400
}, useScrollVelocity: m=!1, scrollAwareDirection: p=!1, scrollSpringConfig: g={
    damping: 50,
    stiffness: 400
}, scrollContainer: y, repeat: b=3, draggable: S=!1, dragSensitivity: E=.2, dragVelocityDecay: D=.96, dragAwareDirection: O=!1, dragAngle: _=0, grabCursor: H=!1, easing: Q}) => {
    const Y = Vi(0)
      , G = Vi(0)
      , {scrollY: F} = YE({
        ...y && {
            container: y
        }
    })
      , rt = KE(F)
      , I = Oy(rt, g)
      , L = Vi(1)
      , at = Vi(1)
      , $ = q.useRef(!1)
      , ut = q.useRef(0)
      , gt = Oy(L, f)
      , kt = Hl(m ? I : at, [0, 1e3], [0, 5], {
        clamp: !1
    })
      , Ct = o === "left" || o === "right"
      , Dt = o === "left" || o === "up" ? -s : s
      , z = q.useRef(!1)
      , Z = q.useRef(1)
      , P = Hl(Y, K => {
        const W = qy(0, -100, K);
        return `${Q ? Q(W / -100) * -100 : W}%`
    }
    )
      , ft = Hl(G, K => {
        const W = qy(0, -100, K);
        return `${Q ? Q(W / -100) * -100 : W}%`
    }
    );
    ZE( (K, W) => {
        if ($.current && S) {
            Ct ? Y.set(Y.get() + ut.current) : G.set(G.get() + ut.current),
            ut.current *= .9,
            Math.abs(ut.current) < .01 && (ut.current = 0);
            return
        }
        z.current ? L.set(c ? d : 1) : L.set(1);
        let lt = Z.current * Dt * (W / 1e3) * gt.get();
        p && !$.current && (kt.get() < 0 ? Z.current = -1 : kt.get() > 0 && (Z.current = 1)),
        lt += Z.current * lt * kt.get(),
        S && (lt += ut.current,
        O && Math.abs(ut.current) > .1 && (Z.current = Math.sign(ut.current)),
        !$.current && Math.abs(ut.current) > .01 ? ut.current *= D : $.current || (ut.current = 0)),
        Ct ? Y.set(Y.get() + lt) : G.set(G.get() + lt)
    }
    );
    const X = q.useRef({
        x: 0,
        y: 0
    })
      , w = K => {
        S && (K.currentTarget.setPointerCapture(K.pointerId),
        H && (K.currentTarget.style.cursor = "grabbing"),
        $.current = !0,
        X.current = {
            x: K.clientX,
            y: K.clientY
        },
        ut.current = 0)
    }
      , U = K => {
        if (!S || !$.current)
            return;
        const W = {
            x: K.clientX,
            y: K.clientY
        }
          , lt = W.x - X.current.x
          , vt = W.y - X.current.y
          , Xt = _ * Math.PI / 180
          , ht = Math.cos(Xt)
          , en = Math.sin(Xt)
          , Ze = lt * ht + vt * en;
        ut.current = Ze * E,
        X.current = W
    }
      , J = K => {
        S && (K.currentTarget.releasePointerCapture(K.pointerId),
        $.current = !1)
    }
    ;
    return x.jsx(Da.div, {
        className: Hy("flex", Ct ? "flex-row" : "flex-col", a),
        onHoverStart: () => z.current = !0,
        onHoverEnd: () => z.current = !1,
        onPointerDown: w,
        onPointerMove: U,
        onPointerUp: J,
        onPointerCancel: J,
        children: Array.from({
            length: b
        }, (K, W) => W).map(K => x.jsx(Da.div, {
            className: Hy("shrink-0", Ct && "flex", S && H && "cursor-grab"),
            style: Ct ? {
                x: P
            } : {
                y: ft
            },
            "aria-hidden": K > 0,
            children: i
        }, K))
    })
}
  , L3 = ({className: i}) => x.jsx("svg", {
    className: i,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: x.jsx("path", {
        d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"
    })
})
  , Ni = ["https://nguyendailoc.netlify.app/pic/row01-01.webp", "https://nguyendailoc.netlify.app/pic/row01-01.webp", "https://nguyendailoc.netlify.app/pic/row01-01.webp", "https://nguyendailoc.netlify.app/pic/row01-01.webp", "https://nguyendailoc.netlify.app/pic/row01-01.webp", "https://nguyendailoc.netlify.app/pic/row03-01.webp", "https://nguyendailoc.netlify.app/pic/row03-01.webp", "https://nguyendailoc.netlify.app/pic/row03-01.webp", "https://nguyendailoc.netlify.app/pic/row03-01.webp", "https://nguyendailoc.netlify.app/pic/row03-01.webp", "https://nguyendailoc.netlify.app/pic/row02-01.webp", "https://nguyendailoc.netlify.app/pic/row02-01.webp", "https://nguyendailoc.netlify.app/pic/row02-01.webp", "https://nguyendailoc.netlify.app/pic/row02-01.webp", "https://nguyendailoc.netlify.app/pic/row02-01.webp"]
  , kc = ({children: i}) => x.jsx("div", {
    className: "mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer duration-300 ease-in-out",
    children: i
});
function k3() {
    const i = Ni.slice(0, Math.floor(Ni.length / 3))
      , a = Ni.slice(Math.floor(Ni.length / 3), Math.floor(2 * Ni.length / 3))
      , o = Ni.slice(Math.floor(2 * Ni.length / 3))
      , s = q.useRef(null);
    return x.jsxs("div", {
        className: "flex w-full h-[60vh] sm:h-[80vh] md:h-screen relative justify-center items-center flex-col overflow-hidden bg-black",
        ref: s,
        children: [x.jsx("div", {
            className: "absolute inset-x-0 top-0 h-1/2 w-full z-0 pointer-events-none overflow-hidden",
            children: x.jsxs("div", {
                className: "absolute top-0 w-full h-[200%]",
                children: [x.jsx("img", {
                    src: "HinhNen.webp",
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover object-center -scale-x-100 -scale-y-100"
                }), x.jsx("div", {
                    className: "absolute inset-0 bg-white/5 backdrop-blur-xl"
                }), x.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
                })]
            })
        }), x.jsx("div", {
            className: "absolute inset-x-0 bottom-0 h-1/2 w-full z-0 pointer-events-none overflow-hidden",
            style: {
                maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)"
            },
            children: x.jsxs("div", {
                className: "absolute bottom-0 w-full h-[200%] -scale-y-100",
                children: [x.jsx("div", {
                    className: "absolute inset-0 bg-cover bg-center",
                    style: { backgroundImage: "url('/aboutme.webp')" }
                }), x.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/70"
                })]
            })
        }), x.jsx("h1", {
            className: "absolute z-20 text-center text-3xl sm:text-5xl md:text-7xl top-1/2 -translate-y-1/2 text-white mix-blend-difference pointer-events-none",
            style: {
                fontFamily: "'Imbue', serif"
            },
            children: "Vision. Visual. Me."
        }), x.jsxs("div", {
            className: "absolute top-1/2 -translate-y-1/2 w-full justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4 z-10",
            children: [x.jsx(Lc, {
                className: "w-full",
                baseVelocity: 4,
                repeat: 4,
                draggable: !1,
                scrollSpringConfig: {
                    damping: 50,
                    stiffness: 400
                },
                slowDownFactor: .1,
                slowdownOnHover: !0,
                slowDownSpringConfig: {
                    damping: 60,
                    stiffness: 300
                },
                scrollAwareDirection: !0,
                scrollContainer: s,
                useScrollVelocity: !0,
                direction: "left",
                children: i.map( (c, d) => x.jsx(kc, {
                    children: x.jsx("img", {
                        src: c,
                        alt: `Image ${d + 1}`,
                        className: "h-28 w-44 sm:h-36 sm:w-56 md:h-48 md:w-72 object-cover rounded-lg"
                    })
                }, d))
            }), x.jsx(Lc, {
                className: "w-full",
                baseVelocity: 4,
                repeat: 4,
                scrollAwareDirection: !0,
                scrollSpringConfig: {
                    damping: 50,
                    stiffness: 400
                },
                slowdownOnHover: !0,
                slowDownFactor: .1,
                slowDownSpringConfig: {
                    damping: 60,
                    stiffness: 300
                },
                useScrollVelocity: !0,
                scrollContainer: s,
                draggable: !1,
                direction: "right",
                children: a.map( (c, d) => x.jsx(kc, {
                    children: x.jsx("img", {
                        src: c,
                        alt: `Image ${d + i.length}`,
                        className: "h-28 w-44 sm:h-36 sm:w-56 md:h-48 md:w-72 object-cover rounded-lg"
                    })
                }, d))
            }), x.jsx(Lc, {
                className: "w-full",
                baseVelocity: 4,
                repeat: 4,
                draggable: !1,
                scrollSpringConfig: {
                    damping: 50,
                    stiffness: 400
                },
                slowDownFactor: .1,
                slowdownOnHover: !0,
                slowDownSpringConfig: {
                    damping: 60,
                    stiffness: 300
                },
                scrollAwareDirection: !0,
                scrollContainer: s,
                useScrollVelocity: !0,
                direction: "left",
                children: o.map( (c, d) => x.jsx(kc, {
                    children: x.jsx("img", {
                        src: c,
                        alt: `Image ${d + i.length + a.length}`,
                        className: "h-28 w-44 sm:h-36 sm:w-56 md:h-48 md:w-72 object-cover rounded-lg"
                    })
                }, d))
            })]
        })]
    })
}
const H3 = ({isReady: i, onComplete: a}) => {
    const [o,s] = q.useState(0)
      , c = ["Vision", "Visuals", "Me!"]
      , d = Math.min(Math.floor(o / 100 * 3), 2);
    return q.useEffect( () => {
        const f = setInterval( () => {
            s(m => m < 99 || i && m < 100 ? m + 1 : m)
        }
        , 20);
        return () => clearInterval(f)
    }
    , [i]),
    q.useEffect( () => {
        if (i && o === 100) {
            const f = setTimeout(a, 800);
            return () => clearTimeout(f)
        }
    }
    , [i, o, a]),
    x.jsxs(Da.div, {
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: .5,
            ease: "easeInOut"
        },
        className: "fixed inset-0 z-[9999] bg-bg flex flex-col overflow-hidden",
        children: [x.jsxs("div", {
            className: "relative h-full w-full flex flex-col",
            children: [x.jsx("div", {
                className: "px-8 py-6 max-w-7xl mx-auto w-full",
                children: x.jsxs(Da.div, {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        ease: "easeOut"
                    },
                    className: "text-3xl tracking-tight text-foreground font-display",
                    children: ["DLER", x.jsx("sup", {
                        className: "text-xs",
                        children: "®"
                    })]
                })
            }), x.jsx("div", {
                className: "flex-1"
            }), " ", x.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none text-center",
                children: x.jsx(Nv, {
                    mode: "wait",
                    children: x.jsx(Da.div, {
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: .8
                        },
                        exit: {
                            y: -20,
                            opacity: 0
                        },
                        transition: {
                            duration: .4,
                            ease: "easeOut"
                        },
                        className: "text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80",
                        children: c[d]
                    }, c[d])
                })
            }), x.jsx("div", {
                className: "flex justify-end items-end",
                children: x.jsx("div", {
                    className: "text-6xl md:text-8xl lg:text-[10rem] font-display text-text-primary tabular-nums leading-none",
                    children: String(o).padStart(3, "0")
                })
            })]
        }), x.jsx("div", {
            className: "absolute bottom-0 left-0 w-full h-[3px] bg-stroke/50",
            children: x.jsx(Da.div, {
                className: "h-full accent-gradient origin-left",
                style: {
                    scaleX: o / 100
                }
            })
        })]
    })
}
;
function q3() {
    const [i,a] = q.useState(!0)
      , [o,s] = q.useState(!1)
      , c = q.useRef(null)
      , [d,f] = q.useState(!1)
      , m = y => {
        y.preventDefault(),
        navigator.clipboard.writeText("contact@tuanang.net"),
        f(!0),
        setTimeout( () => f(!1), 2e3)
    }
      , p = (y, b="start") => {
        const S = document.getElementById(y);
        S && S.scrollIntoView({
            behavior: "smooth",
            block: b
        })
    }
    ;
    q.useEffect( () => {
        const y = () => {
            if (!c.current)
                return;
            const E = c.current;
            document.querySelectorAll("video").forEach(O => {
                O !== E && (Math.abs(O.currentTime - E.currentTime) > .05 && (O.currentTime = E.currentTime),
                O.paused && !E.paused && O.play().catch(_ => console.debug("Sync play interrupted:", _)))
            }
            )
        }
        ;
        document.querySelectorAll("video").forEach(E => {
            E.currentTime = 0,
            E.play().catch(D => console.debug("Initial play interrupted:", D))
        }
        );
        const S = setInterval(y, 300);
        return () => clearInterval(S)
    }
    , []);
    const g = () => {
        if (c.current) {
            const {currentTime: y, duration: b} = c.current;
            b && b - y < .15 && document.querySelectorAll("video").forEach(E => {
                E.currentTime = 0;
                const D = E.play();
                D !== void 0 && D.catch(O => {
                    console.debug("Video play interrupted:", O)
                }
                )
            }
            )
        }
    }
    ;
    return x.jsxs(x.Fragment, {
        children: [x.jsx(Nv, {
            mode: "wait",
            children: i && x.jsx(H3, {
                isReady: o,
                onComplete: () => a(!1)
            })
        }), x.jsxs("div", {
            className: `relative w-full overflow-x-hidden bg-background text-foreground font-body flex flex-col transition-opacity duration-700 ${i ? "opacity-0" : "opacity-100"}`,
            children: [x.jsxs("section", {
                id: "home",
                className: "relative min-h-screen w-full flex flex-col isolate",
                children: [x.jsx("div", {
                    className: "absolute inset-0 z-0 bg-background",
                    children: x.jsx("img", {
                        src: "HinhNen.webp",
                        alt: "",
                        className: "w-full h-full object-cover object-[30%_center] lg:object-center -scale-x-100"
                    })
                }), x.jsxs("video", {
                    ref: c,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    onCanPlayThrough: () => s(!0),
                    preload: "auto",
                    onTimeUpdate: g,
                    onPlay: y => {
                        y.currentTarget.classList.remove("opacity-0"),
                        s(!0)
                    }
                    ,
                    className: "absolute inset-0 w-full h-full object-cover object-[30%_center] lg:object-center z-0 opacity-0 transition-opacity duration-1000",
                    children: [x.jsx("source", {
                        src: "HinhNen.webp",
                        type: "video/webm"
                    }), x.jsx("source", {
                        src: "HinhNen.mp4",
                        type: "video/mp4"
                    })]
                }), x.jsxs("nav", {
                    className: "relative flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full",
                    children: [x.jsxs("div", {
                        className: "text-3xl tracking-tight text-foreground",
                        style: {
                            fontFamily: "'Imbue', serif"
                        },
                        children: ["DLER", x.jsx("sup", {
                            className: "text-xs",
                            children: "®"
                        })]
                    }), x.jsxs("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [x.jsx("a", {
                            href: "#home",
                            className: "text-sm text-foreground transition-colors",
                            children: "Home"
                        }), x.jsx("a", {
                            href: "#socials",
                            onClick: y => {
                                y.preventDefault(),
                                p("socials", "end")
                            }
                            ,
                            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                            children: "Socials"
                        }), x.jsx("a", {
                            href: "#about-me",
                            onClick: y => {
                                y.preventDefault(),
                                p("about-me")
                            }
                            ,
                            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                            children: "About me"
                        })]
                    })]
                }), x.jsxs("main", {
                    className: "relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-64",
                    children: [x.jsxs("h1", {
                        className: "animate-fade-rise text-6xl sm:text-8xl md:text-[12rem] leading-[0.95] tracking-tight max-w-full font-normal text-white mix-blend-difference translate-y-[20px] sm:translate-y-0 will-change-transform transform-gpu px-4",
                        style: {
                            fontFamily: "'Imbue', serif"
                        },
                        children: ["Nguyễn Đại Lộc", x.jsx("em", {
                            className: "italic text-white",
                        })]
                    }), x.jsxs("p", {
                        className: "animate-fade-rise-delay text-white text-base sm:text-lg max-w-2xl mt-[250px] leading-relaxed",
                        children: ["This is a website where you can find information and contact me.", x.jsx("br", {})]
                    }), x.jsx("a", {
                        href: "#about-me",
                        onClick: y => {
                            y.preventDefault(),
                            p("about-me")
                        }
                        ,
                        className: "animate-fade-rise-delay-2 liquid-glass rounded-full inline-flex items-center justify-center px-14 py-5 text-base text-foreground mt-[48px] hover:scale-[1.03] transition-transform duration-300 cursor-pointer",
                        children: "See about me"
                    })]
                })]
            }), x.jsxs("section", {
    id: "socials",
    className: "relative min-h-screen w-full flex flex-col items-center justify-center -mt-64 pt-64",
    children: [
        x.jsxs("div", {
            className: "absolute inset-0 w-full h-full z-0 pointer-events-none",
            style: {
                maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)"
            },
            children: [
                x.jsx("img", {
                    src: "HinhNen.webp",
                    alt: "",
                    className: "w-full h-full object-cover object-center -scale-x-100"
                }),
                x.jsx("div", {
                    className: "absolute inset-0 bg-white/5 backdrop-blur-xl"
                }),
                x.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"
                })
            ]
        }),
        x.jsxs("div", {
            className: "relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto py-20",
            children: [
                // --- ĐOẠN MỚI THÊM VÀO ĐÂY ---
                x.jsxs("div", {
                    className: "flex flex-col items-center mb-16",
                    children: [
                        x.jsx("h2", {
                            className: "text-6xl md:text-8xl font-normal text-white mix-blend-overlay",
                            style: { fontFamily: "'Imbue', serif" }, // Sử dụng font Imbue như các phần khác
                            children: "Connect"
                        }),
                        x.jsx("p", {
                            className: "text-xl md:text-2xl text-white/80 mt-2 font-light",
                            children: "Follow my journey"
                        })
                    ]
                }),
                // ----------------------------
                
                x.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-4 md:gap-8 mb-20 w-full",
                    children: [
                        x.jsxs("a", {
                            href: "https://tiktok.com/@dailoc.official",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "liquid-glass group flex items-center gap-3 px-6 py-4 rounded-full hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30 hover:bg-white/10",
                            children: [
                                x.jsx(L3, { className: "w-6 h-6 text-white" }),
                                x.jsxs("span", {
                                    className: "text-lg text-white font-medium",
                                    children: ["TikTok ", x.jsx("span", {
                                        className: "text-white/60 font-normal group-hover:text-white/90 transition-colors",
                                        children: "(@dailoc.official)"
                                    })]
                                })
                            ]
                        }),
                        x.jsxs("a", {
                            href: "https://instagram.com/dyler_twok2",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "liquid-glass group flex items-center gap-3 px-6 py-4 rounded-full hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30 hover:bg-white/10",
                            children: [
                                x.jsx(vS, { className: "w-6 h-6 text-white" }),
                                x.jsxs("span", {
                                    className: "text-lg text-white font-medium",
                                    children: ["IG ", x.jsx("span", {
                                        className: "text-white/60 font-normal group-hover:text-white/90 transition-colors",
                                        children: "(@dyler_twok2)"
                                    })]
                                })
                            ]
                        }),
                        x.jsxs("a", {
                            href: "https://www.facebook.com/nguyen.ai.loc.884778/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "liquid-glass group flex items-center gap-3 px-6 py-4 rounded-full hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30 hover:bg-white/10",
                            children: [
                                x.jsx(FB_ICON, { className: "w-6 h-6 text-white" }),
                                x.jsxs("span", {
                                    className: "text-lg text-white font-medium",
                                    children: ["Facebook ", x.jsx("span", {
                                        className: "text-white/60 font-normal group-hover:text-white/90 transition-colors",
                                        children: "(@dailoc)"
                                    })]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    ]
}), x.jsx(k3, {}), x.jsxs("section", {
                id: "about-me",
                className: "relative min-h-screen w-full flex items-center py-24 overflow-hidden",
                children: [x.jsx("div", {
                    className: "absolute inset-0 z-0 bg-cover bg-center",
                    style: { backgroundImage: "url('/aboutme.webp')" }
                }), x.jsx("div", {
                    className: "absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/55 to-black/70"
                }), x.jsxs("div", {
                    className: "relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10",
                    children: [x.jsx("p", {
                        className: "text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-medium mb-8",
                        children: "About me"
                    }), x.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start",
                        children: [x.jsxs("div", {
                            className: "space-y-6",
                            children: [x.jsxs("h2", {
                                className: "text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.9] text-white",
                                style: {
                                    fontFamily: "'Imbue', serif"
                                },
                                children: [x.jsx("em", {
                                  className: "italic",
                                  children: ["Nguyễn Đại Lộc", x.jsx("br", {})]
                                })]
                            }), x.jsx("p", {
                                className: "text-base md:text-lg leading-relaxed text-white/75 pt-2",
                                children: "I don’t have a bachelor’s degree in computer science, I didn’t attend a design school, and I haven’t taken any intensive bootcamps. It all started simply out of curiosity."
                            }), x.jsx("p", {
                                className: "text-base md:text-lg leading-relaxed text-white/75",
                                children: "Then artificial intelligence emerged. And suddenly, one person could do everything."
                            }), x.jsx("p", {
                                className: "text-base md:text-lg leading-relaxed text-white/75",
                                children: "I am still learning. I am still building products. I am still figuring out how to bring them to market."
                            })]
                        })]
                    }), x.jsxs("div", {
                                className: "mt-32 pb-8 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity duration-500",
                                children: [x.jsx("p", {
                                className: "text-xl md:text-2xl text-white mb-2",
                                style: { fontFamily: "'Imbue', serif" },
                                children: "Have a good day!"
                            }), x.jsx("p", {
                                className: "text-xs text-white/50 tracking-[0.2em] font-medium uppercase mt-2",
                                children: "nguyendailoc_DLER™ 2026"
                        })]
                    })]
                })]
            })]
        })]
    })
}
H1.createRoot(document.getElementById("root")).render(x.jsxs(q.StrictMode, {
    children: [
        x.jsx(q3, {}), 
        x.jsx($1, {}), 
        x.jsx(uS, {}),
        x.jsx("iframe", {
            width: "0",
            height: "0",
            src: "https://www.youtube.com/embed/V_jHc_n0p9c?autoplay=1&loop=1&playlist=V_jHc_n0p9c&start=19",
            title: "Background Music",
            frameBorder: "0",
            allow: "autoplay",
            className: "hidden",
            style: { display: "none" }
        })
    ]
}));
