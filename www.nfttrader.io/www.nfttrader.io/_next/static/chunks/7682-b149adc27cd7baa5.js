"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7682], {
        60481: function(e, t, r) {
            var n = r(56168),
                o = r(50862);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function u(e, t, r) {
                return t && s(e.prototype, t), r && s(e, r), e
            }

            function l(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    r = String(e);
                if (0 === t) return r;
                var n = r.match(/(.*?)([0-9]+)(.*)/),
                    o = n ? n[1] : "",
                    i = n ? n[3] : "",
                    s = n ? n[2] : r,
                    u = s.length >= t ? s : (h(Array(t)).map((function() {
                        return "0"
                    })).join("") + s).slice(-1 * t);
                return "".concat(o).concat(u).concat(i)
            }
            var v = {
                daysInHours: !1,
                zeroPadTime: 2
            };

            function g(e, t) {
                var r = e.days,
                    n = e.hours,
                    o = e.minutes,
                    i = e.seconds,
                    s = Object.assign(Object.assign({}, v), t),
                    u = s.daysInHours,
                    l = s.zeroPadTime,
                    a = s.zeroPadDays,
                    c = void 0 === a ? l : a,
                    f = Math.min(2, l),
                    p = u ? m(n + 24 * r, l) : m(n, f);
                return {
                    days: u ? "" : m(r, c),
                    hours: p,
                    minutes: m(o, f),
                    seconds: m(i, f)
                }
            }
            var w = function(e) {
                l(r, e);
                var t = p(r);

                function r() {
                    var e;
                    return i(this, r), (e = t.apply(this, arguments)).state = {
                        count: e.props.count || 3
                    }, e.startCountdown = function() {
                        e.interval = window.setInterval((function() {
                            0 === e.state.count - 1 ? (e.stopCountdown(), e.props.onComplete && e.props.onComplete()) : e.setState((function(e) {
                                return {
                                    count: e.count - 1
                                }
                            }))
                        }), 1e3)
                    }, e.stopCountdown = function() {
                        clearInterval(e.interval)
                    }, e.addTime = function(t) {
                        e.stopCountdown(), e.setState((function(e) {
                            return {
                                count: e.count + t
                            }
                        }), e.startCountdown)
                    }, e
                }
                return u(r, [{
                    key: "componentDidMount",
                    value: function() {
                        this.startCountdown()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children ? (0, n.cloneElement)(this.props.children, {
                            count: this.state.count
                        }) : null
                    }
                }]), r
            }(n.Component);
            w.propTypes = {
                count: o.number,
                children: o.element,
                onComplete: o.func
            };
            var y = function(e) {
                l(r, e);
                var t = p(r);

                function r(e) {
                    var o;
                    if (i(this, r), (o = t.call(this, e)).mounted = !1, o.initialTimestamp = o.calcOffsetStartTimestamp(), o.offsetStartTimestamp = o.props.autoStart ? 0 : o.initialTimestamp, o.offsetTime = 0, o.legacyMode = !1, o.legacyCountdownRef = (0, n.createRef)(), o.tick = function() {
                            var e = o.calcTimeDelta(),
                                t = e.completed && !o.props.overtime ? void 0 : o.props.onTick;
                            o.setTimeDeltaState(e, void 0, t)
                        }, o.start = function() {
                            if (!o.isStarted()) {
                                var e = o.offsetStartTimestamp;
                                o.offsetStartTimestamp = 0, o.offsetTime += e ? o.calcOffsetStartTimestamp() - e : 0;
                                var t = o.calcTimeDelta();
                                o.setTimeDeltaState(t, "STARTED", o.props.onStart), o.props.controlled || t.completed && !o.props.overtime || (o.clearTimer(), o.interval = window.setInterval(o.tick, o.props.intervalDelay))
                            }
                        }, o.pause = function() {
                            o.isPaused() || (o.clearTimer(), o.offsetStartTimestamp = o.calcOffsetStartTimestamp(), o.setTimeDeltaState(o.state.timeDelta, "PAUSED", o.props.onPause))
                        }, o.stop = function() {
                            o.isStopped() || (o.clearTimer(), o.offsetStartTimestamp = o.calcOffsetStartTimestamp(), o.offsetTime = o.offsetStartTimestamp - o.initialTimestamp, o.setTimeDeltaState(o.calcTimeDelta(), "STOPPED", o.props.onStop))
                        }, o.isStarted = function() {
                            return o.isStatus("STARTED")
                        }, o.isPaused = function() {
                            return o.isStatus("PAUSED")
                        }, o.isStopped = function() {
                            return o.isStatus("STOPPED")
                        }, o.isCompleted = function() {
                            return o.isStatus("COMPLETED")
                        }, e.date) {
                        var s = o.calcTimeDelta();
                        o.state = {
                            timeDelta: s,
                            status: s.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else o.legacyMode = !0;
                    return o
                }
                return u(r, [{
                    key: "componentDidMount",
                    value: function() {
                        this.legacyMode || (this.mounted = !0, this.props.onMount && this.props.onMount(this.calcTimeDelta()), this.props.autoStart && this.start())
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.legacyMode || this.props.date !== e.date && (this.initialTimestamp = this.calcOffsetStartTimestamp(), this.offsetStartTimestamp = this.initialTimestamp, this.offsetTime = 0, this.setTimeDeltaState(this.calcTimeDelta()))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.legacyMode || (this.mounted = !1, this.clearTimer())
                    }
                }, {
                    key: "calcTimeDelta",
                    value: function() {
                        var e = this.props,
                            t = e.date,
                            r = e.now,
                            n = e.precision,
                            o = e.controlled,
                            i = e.overtime;
                        return function(e) {
                            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.now,
                                o = void 0 === n ? Date.now : n,
                                i = r.precision,
                                s = void 0 === i ? 0 : i,
                                u = r.controlled,
                                l = r.offsetTime,
                                a = void 0 === l ? 0 : l,
                                c = r.overtime;
                            t = "string" === typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, u || (t += a);
                            var f = u ? t : t - o(),
                                p = Math.min(20, Math.max(0, s)),
                                h = Math.round(1e3 * parseFloat(((c ? f : Math.max(0, f)) / 1e3).toFixed(p))),
                                d = Math.abs(h) / 1e3;
                            return {
                                total: h,
                                days: Math.floor(d / 86400),
                                hours: Math.floor(d / 3600 % 24),
                                minutes: Math.floor(d / 60 % 60),
                                seconds: Math.floor(d % 60),
                                milliseconds: Number((d % 1 * 1e3).toFixed()),
                                completed: h <= 0
                            }
                        }(t, {
                            now: r,
                            precision: n,
                            controlled: o,
                            offsetTime: this.offsetTime,
                            overtime: i
                        })
                    }
                }, {
                    key: "calcOffsetStartTimestamp",
                    value: function() {
                        return Date.now()
                    }
                }, {
                    key: "addTime",
                    value: function(e) {
                        this.legacyCountdownRef.current.addTime(e)
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        window.clearInterval(this.interval)
                    }
                }, {
                    key: "isStatus",
                    value: function(e) {
                        return this.state.status === e
                    }
                }, {
                    key: "setTimeDeltaState",
                    value: function(e, t, r) {
                        var n = this;
                        if (this.mounted) {
                            var o = e.completed && !this.state.timeDelta.completed,
                                i = e.completed && "STARTED" === t;
                            o && !this.props.overtime && this.clearTimer();
                            return this.setState((function(r) {
                                var o = t || r.status;
                                return e.completed && !n.props.overtime ? o = "COMPLETED" : t || "COMPLETED" !== o || (o = "STOPPED"), {
                                    timeDelta: e,
                                    status: o
                                }
                            }), (function() {
                                r && r(n.state.timeDelta), n.props.onComplete && (o || i) && n.props.onComplete(e, i)
                            }))
                        }
                    }
                }, {
                    key: "getApi",
                    value: function() {
                        return this.api = this.api || {
                            start: this.start,
                            pause: this.pause,
                            stop: this.stop,
                            isStarted: this.isStarted,
                            isPaused: this.isPaused,
                            isStopped: this.isStopped,
                            isCompleted: this.isCompleted
                        }
                    }
                }, {
                    key: "getRenderProps",
                    value: function() {
                        var e = this.props,
                            t = e.daysInHours,
                            r = e.zeroPadTime,
                            n = e.zeroPadDays,
                            o = this.state.timeDelta;
                        return Object.assign(Object.assign({}, o), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: g(o, {
                                daysInHours: t,
                                zeroPadTime: r,
                                zeroPadDays: n
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var e = this.props,
                                t = e.count,
                                r = e.children,
                                o = e.onComplete;
                            return (0, n.createElement)(w, {
                                ref: this.legacyCountdownRef,
                                count: t,
                                onComplete: o
                            }, r)
                        }
                        var i = this.props,
                            s = i.className,
                            u = i.overtime,
                            l = i.children,
                            a = i.renderer,
                            c = this.getRenderProps();
                        if (a) return a(c);
                        if (l && this.state.timeDelta.completed && !u) return (0, n.cloneElement)(l, {
                            countdown: c
                        });
                        var f = c.formatted,
                            p = f.days,
                            h = f.hours,
                            d = f.minutes,
                            m = f.seconds;
                        return (0, n.createElement)("span", {
                            className: s
                        }, c.total < 0 ? "-" : "", p, p ? ":" : "", h, ":", d, ":", m)
                    }
                }]), r
            }(n.Component);
            y.defaultProps = Object.assign(Object.assign({}, v), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }), y.propTypes = {
                date: (0, o.oneOfType)([(0, o.instanceOf)(Date), o.string, o.number]),
                daysInHours: o.bool,
                zeroPadTime: o.number,
                zeroPadDays: o.number,
                controlled: o.bool,
                intervalDelay: o.number,
                precision: o.number,
                autoStart: o.bool,
                overtime: o.bool,
                className: o.string,
                children: o.element,
                renderer: o.func,
                now: o.func,
                onMount: o.func,
                onStart: o.func,
                onPause: o.func,
                onStop: o.func,
                onTick: o.func,
                onComplete: o.func
            }, t.ZP = y
        },
        41339: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return q
                }
            });
            var n, o, i = r(56168),
                s = r(99964),
                u = r(44505),
                l = r(26222),
                a = r(74238),
                c = r(66123),
                f = r(93479),
                p = r(50857),
                h = r(84114),
                d = r(59743),
                m = r(90808),
                v = r(41784),
                g = r(71096),
                w = r(7061),
                y = r(63988),
                b = r(78904),
                E = r(61477),
                S = r(49053),
                P = r(76178),
                T = r(40465),
                O = r(54556),
                D = ((o = D || {})[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o),
                N = ((n = N || {})[n.TogglePopover = 0] = "TogglePopover", n[n.ClosePopover = 1] = "ClosePopover", n[n.SetButton = 2] = "SetButton", n[n.SetButtonId = 3] = "SetButtonId", n[n.SetPanel = 4] = "SetPanel", n[n.SetPanelId = 5] = "SetPanelId", n);
            let M = {
                    0: e => {
                        let t = { ...e,
                            popoverState: (0, s.E)(e.popoverState, {
                                0: 1,
                                1: 0
                            })
                        };
                        return 0 === t.popoverState && (t.__demoMode = !1), t
                    },
                    1: e => 1 === e.popoverState ? e : { ...e,
                        popoverState: 1
                    },
                    2: (e, t) => e.button === t.button ? e : { ...e,
                        button: t.button
                    },
                    3: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
                        buttonId: t.buttonId
                    },
                    4: (e, t) => e.panel === t.panel ? e : { ...e,
                        panel: t.panel
                    },
                    5: (e, t) => e.panelId === t.panelId ? e : { ...e,
                        panelId: t.panelId
                    }
                },
                A = (0, i.createContext)(null);

            function C(e) {
                let t = (0, i.useContext)(A);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, C), t
                }
                return t
            }
            A.displayName = "PopoverContext";
            let I = (0, i.createContext)(null);

            function R(e) {
                let t = (0, i.useContext)(I);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, R), t
                }
                return t
            }
            I.displayName = "PopoverAPIContext";
            let k = (0, i.createContext)(null);

            function x() {
                return (0, i.useContext)(k)
            }
            k.displayName = "PopoverGroupContext";
            let _ = (0, i.createContext)(null);

            function j(e, t) {
                return (0, s.E)(t.type, M, e, t)
            }
            _.displayName = "PopoverPanelContext";
            let B = u.AN.RenderStrategy | u.AN.Static;
            let F = u.AN.RenderStrategy | u.AN.Static;
            let L = (0, u.yV)((function(e, t) {
                    var r;
                    let {
                        __demoMode: n = !1,
                        ...o
                    } = e, a = (0, i.useRef)(null), c = (0, l.T)(t, (0, l.h)((e => {
                        a.current = e
                    }))), f = (0, i.useRef)([]), d = (0, i.useReducer)(j, {
                        __demoMode: n,
                        popoverState: n ? 0 : 1,
                        buttons: f,
                        button: null,
                        buttonId: null,
                        panel: null,
                        panelId: null,
                        beforePanelSentinel: (0, i.createRef)(),
                        afterPanelSentinel: (0, i.createRef)()
                    }), [{
                        popoverState: v,
                        button: y,
                        buttonId: E,
                        panel: P,
                        panelId: D,
                        beforePanelSentinel: N,
                        afterPanelSentinel: M
                    }, C] = d, R = (0, g.i)(null != (r = a.current) ? r : y), k = (0, i.useMemo)((() => {
                        if (!y || !P) return !1;
                        for (let s of document.querySelectorAll("body > *"))
                            if (Number(null == s ? void 0 : s.contains(y)) ^ Number(null == s ? void 0 : s.contains(P))) return !0;
                        let e = (0, p.GO)(),
                            t = e.indexOf(y),
                            r = (t + e.length - 1) % e.length,
                            n = (t + 1) % e.length,
                            o = e[r],
                            i = e[n];
                        return !P.contains(o) && !P.contains(i)
                    }), [y, P]), B = (0, S.E)(E), F = (0, S.E)(D), L = (0, i.useMemo)((() => ({
                        buttonId: B,
                        panelId: F,
                        close: () => C({
                            type: 1
                        })
                    })), [B, F, C]), z = x(), U = null == z ? void 0 : z.registerPopover, G = (0, b.z)((() => {
                        var e;
                        return null != (e = null == z ? void 0 : z.isFocusWithinPopoverGroup()) ? e : (null == R ? void 0 : R.activeElement) && ((null == y ? void 0 : y.contains(R.activeElement)) || (null == P ? void 0 : P.contains(R.activeElement)))
                    }));
                    (0, i.useEffect)((() => null == U ? void 0 : U(L)), [U, L]);
                    let [$, q] = (0, O.k)(), H = (0, T.v)({
                        mainTreeNodeRef: null == z ? void 0 : z.mainTreeNodeRef,
                        portals: $,
                        defaultContainers: [y, P]
                    });
                    (0, w.O)(null == R ? void 0 : R.defaultView, "focus", (e => {
                        var t, r, n, o;
                        e.target !== window && e.target instanceof HTMLElement && 0 === v && (G() || y && P && (H.contains(e.target) || null != (r = null == (t = N.current) ? void 0 : t.contains) && r.call(t, e.target) || null != (o = null == (n = M.current) ? void 0 : n.contains) && o.call(n, e.target) || C({
                            type: 1
                        })))
                    }), !0), (0, m.O)(H.resolveContainers, ((e, t) => {
                        C({
                            type: 1
                        }), (0, p.sP)(t, p.tJ.Loose) || (e.preventDefault(), null == y || y.focus())
                    }), 0 === v);
                    let V = (0, b.z)((e => {
                            C({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : "current" in e && e.current instanceof HTMLElement ? e.current : y : y;
                            null == t || t.focus()
                        })),
                        Z = (0, i.useMemo)((() => ({
                            close: V,
                            isPortalled: k
                        })), [V, k]),
                        W = (0, i.useMemo)((() => ({
                            open: 0 === v,
                            close: V
                        })), [v, V]),
                        Y = {
                            ref: c
                        };
                    return i.createElement(_.Provider, {
                        value: null
                    }, i.createElement(A.Provider, {
                        value: d
                    }, i.createElement(I.Provider, {
                        value: Z
                    }, i.createElement(h.up, {
                        value: (0, s.E)(v, {
                            0: h.ZM.Open,
                            1: h.ZM.Closed
                        })
                    }, i.createElement(q, null, (0, u.sY)({
                        ourProps: Y,
                        theirProps: o,
                        slot: W,
                        defaultTag: "div",
                        name: "Popover"
                    }), i.createElement(H.MainTreeNode, null))))))
                })),
                z = (0, u.yV)((function(e, t) {
                    let r = (0, a.M)(),
                        {
                            id: n = `headlessui-popover-button-${r}`,
                            ...o
                        } = e,
                        [h, m] = C("Popover.Button"),
                        {
                            isPortalled: v
                        } = R("Popover.Button"),
                        w = (0, i.useRef)(null),
                        S = `headlessui-focus-sentinel-${(0,a.M)()}`,
                        P = x(),
                        T = null == P ? void 0 : P.closeOthers,
                        O = null !== (0, i.useContext)(_);
                    (0, i.useEffect)((() => {
                        if (!O) return m({
                            type: 3,
                            buttonId: n
                        }), () => {
                            m({
                                type: 3,
                                buttonId: null
                            })
                        }
                    }), [O, n, m]);
                    let [D] = (0, i.useState)((() => Symbol())), N = (0, l.T)(w, t, O ? null : e => {
                        if (e) h.buttons.current.push(D);
                        else {
                            let e = h.buttons.current.indexOf(D); - 1 !== e && h.buttons.current.splice(e, 1)
                        }
                        h.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && m({
                            type: 2,
                            button: e
                        })
                    }), M = (0, l.T)(w, t), A = (0, g.i)(w), I = (0, b.z)((e => {
                        var t, r, n;
                        if (O) {
                            if (1 === h.popoverState) return;
                            switch (e.key) {
                                case c.R.Space:
                                case c.R.Enter:
                                    e.preventDefault(), null == (r = (t = e.target).click) || r.call(t), m({
                                        type: 1
                                    }), null == (n = h.button) || n.focus()
                            }
                        } else switch (e.key) {
                            case c.R.Space:
                            case c.R.Enter:
                                e.preventDefault(), e.stopPropagation(), 1 === h.popoverState && (null == T || T(h.buttonId)), m({
                                    type: 0
                                });
                                break;
                            case c.R.Escape:
                                if (0 !== h.popoverState) return null == T ? void 0 : T(h.buttonId);
                                if (!w.current || null != A && A.activeElement && !w.current.contains(A.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), m({
                                    type: 1
                                })
                        }
                    })), k = (0, b.z)((e => {
                        O || e.key === c.R.Space && e.preventDefault()
                    })), j = (0, b.z)((t => {
                        var r, n;
                        (0, f.P)(t.currentTarget) || e.disabled || (O ? (m({
                            type: 1
                        }), null == (r = h.button) || r.focus()) : (t.preventDefault(), t.stopPropagation(), 1 === h.popoverState && (null == T || T(h.buttonId)), m({
                            type: 0
                        }), null == (n = h.button) || n.focus()))
                    })), B = (0, b.z)((e => {
                        e.preventDefault(), e.stopPropagation()
                    })), F = 0 === h.popoverState, L = (0, i.useMemo)((() => ({
                        open: F
                    })), [F]), z = (0, d.f)(e, w), U = O ? {
                        ref: M,
                        type: z,
                        onKeyDown: I,
                        onClick: j
                    } : {
                        ref: N,
                        id: h.buttonId,
                        type: z,
                        "aria-expanded": 0 === h.popoverState,
                        "aria-controls": h.panel ? h.panelId : void 0,
                        onKeyDown: I,
                        onKeyUp: k,
                        onClick: j,
                        onMouseDown: B
                    }, G = (0, E.l)(), $ = (0, b.z)((() => {
                        let e = h.panel;
                        e && (0, s.E)(G.current, {
                            [E.N.Forwards]: () => (0, p.jA)(e, p.TO.First),
                            [E.N.Backwards]: () => (0, p.jA)(e, p.TO.Last)
                        }) === p.fE.Error && (0, p.jA)((0, p.GO)().filter((e => "true" !== e.dataset.headlessuiFocusGuard)), (0, s.E)(G.current, {
                            [E.N.Forwards]: p.TO.Next,
                            [E.N.Backwards]: p.TO.Previous
                        }), {
                            relativeTo: h.button
                        })
                    }));
                    return i.createElement(i.Fragment, null, (0, u.sY)({
                        ourProps: U,
                        theirProps: o,
                        slot: L,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), F && !O && v && i.createElement(y._, {
                        id: S,
                        features: y.A.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: $
                    }))
                })),
                U = (0, u.yV)((function(e, t) {
                    let r = (0, a.M)(),
                        {
                            id: n = `headlessui-popover-overlay-${r}`,
                            ...o
                        } = e,
                        [{
                            popoverState: s
                        }, c] = C("Popover.Overlay"),
                        p = (0, l.T)(t),
                        d = (0, h.oJ)(),
                        m = null !== d ? (d & h.ZM.Open) === h.ZM.Open : 0 === s,
                        v = (0, b.z)((e => {
                            if ((0, f.P)(e.currentTarget)) return e.preventDefault();
                            c({
                                type: 1
                            })
                        })),
                        g = (0, i.useMemo)((() => ({
                            open: 0 === s
                        })), [s]);
                    return (0, u.sY)({
                        ourProps: {
                            ref: p,
                            id: n,
                            "aria-hidden": !0,
                            onClick: v
                        },
                        theirProps: o,
                        slot: g,
                        defaultTag: "div",
                        features: B,
                        visible: m,
                        name: "Popover.Overlay"
                    })
                })),
                G = (0, u.yV)((function(e, t) {
                    let r = (0, a.M)(),
                        {
                            id: n = `headlessui-popover-panel-${r}`,
                            focus: o = !1,
                            ...f
                        } = e,
                        [d, m] = C("Popover.Panel"),
                        {
                            close: v,
                            isPortalled: w
                        } = R("Popover.Panel"),
                        S = `headlessui-focus-sentinel-before-${(0,a.M)()}`,
                        T = `headlessui-focus-sentinel-after-${(0,a.M)()}`,
                        O = (0, i.useRef)(null),
                        D = (0, l.T)(O, t, (e => {
                            m({
                                type: 4,
                                panel: e
                            })
                        })),
                        N = (0, g.i)(O);
                    (0, P.e)((() => (m({
                        type: 5,
                        panelId: n
                    }), () => {
                        m({
                            type: 5,
                            panelId: null
                        })
                    })), [n, m]);
                    let M = (0, h.oJ)(),
                        A = null !== M ? (M & h.ZM.Open) === h.ZM.Open : 0 === d.popoverState,
                        I = (0, b.z)((e => {
                            var t;
                            switch (e.key) {
                                case c.R.Escape:
                                    if (0 !== d.popoverState || !O.current || null != N && N.activeElement && !O.current.contains(N.activeElement)) return;
                                    e.preventDefault(), e.stopPropagation(), m({
                                        type: 1
                                    }), null == (t = d.button) || t.focus()
                            }
                        }));
                    (0, i.useEffect)((() => {
                        var t;
                        e.static || 1 === d.popoverState && (null == (t = e.unmount) || t) && m({
                            type: 4,
                            panel: null
                        })
                    }), [d.popoverState, e.unmount, e.static, m]), (0, i.useEffect)((() => {
                        if (d.__demoMode || !o || 0 !== d.popoverState || !O.current) return;
                        let e = null == N ? void 0 : N.activeElement;
                        O.current.contains(e) || (0, p.jA)(O.current, p.TO.First)
                    }), [d.__demoMode, o, O, d.popoverState]);
                    let k = (0, i.useMemo)((() => ({
                            open: 0 === d.popoverState,
                            close: v
                        })), [d, v]),
                        x = {
                            ref: D,
                            id: n,
                            onKeyDown: I,
                            onBlur: o && 0 === d.popoverState ? e => {
                                var t, r, n, o, i;
                                let s = e.relatedTarget;
                                s && O.current && (null != (t = O.current) && t.contains(s) || (m({
                                    type: 1
                                }), (null != (n = null == (r = d.beforePanelSentinel.current) ? void 0 : r.contains) && n.call(r, s) || null != (i = null == (o = d.afterPanelSentinel.current) ? void 0 : o.contains) && i.call(o, s)) && s.focus({
                                    preventScroll: !0
                                })))
                            } : void 0,
                            tabIndex: -1
                        },
                        j = (0, E.l)(),
                        B = (0, b.z)((() => {
                            let e = O.current;
                            e && (0, s.E)(j.current, {
                                [E.N.Forwards]: () => {
                                    var t;
                                    (0, p.jA)(e, p.TO.First) === p.fE.Error && (null == (t = d.afterPanelSentinel.current) || t.focus())
                                },
                                [E.N.Backwards]: () => {
                                    var e;
                                    null == (e = d.button) || e.focus({
                                        preventScroll: !0
                                    })
                                }
                            })
                        })),
                        L = (0, b.z)((() => {
                            let e = O.current;
                            e && (0, s.E)(j.current, {
                                [E.N.Forwards]: () => {
                                    var e;
                                    if (!d.button) return;
                                    let t = (0, p.GO)(),
                                        r = t.indexOf(d.button),
                                        n = t.slice(0, r + 1),
                                        o = [...t.slice(r + 1), ...n];
                                    for (let i of o.slice())
                                        if ("true" === i.dataset.headlessuiFocusGuard || null != (e = d.panel) && e.contains(i)) {
                                            let e = o.indexOf(i); - 1 !== e && o.splice(e, 1)
                                        }(0, p.jA)(o, p.TO.First, {
                                            sorted: !1
                                        })
                                },
                                [E.N.Backwards]: () => {
                                    var t;
                                    (0, p.jA)(e, p.TO.Previous) === p.fE.Error && (null == (t = d.button) || t.focus())
                                }
                            })
                        }));
                    return i.createElement(_.Provider, {
                        value: n
                    }, A && w && i.createElement(y._, {
                        id: S,
                        ref: d.beforePanelSentinel,
                        features: y.A.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: B
                    }), (0, u.sY)({
                        ourProps: x,
                        theirProps: f,
                        slot: k,
                        defaultTag: "div",
                        features: F,
                        visible: A,
                        name: "Popover.Panel"
                    }), A && w && i.createElement(y._, {
                        id: T,
                        ref: d.afterPanelSentinel,
                        features: y.A.Focusable,
                        "data-headlessui-focus-guard": !0,
                        as: "button",
                        type: "button",
                        onFocus: L
                    }))
                })),
                $ = (0, u.yV)((function(e, t) {
                    let r = (0, i.useRef)(null),
                        n = (0, l.T)(r, t),
                        [o, s] = (0, i.useState)([]),
                        a = (0, T.H)(),
                        c = (0, b.z)((e => {
                            s((t => {
                                let r = t.indexOf(e);
                                if (-1 !== r) {
                                    let e = t.slice();
                                    return e.splice(r, 1), e
                                }
                                return t
                            }))
                        })),
                        f = (0, b.z)((e => (s((t => [...t, e])), () => c(e)))),
                        p = (0, b.z)((() => {
                            var e;
                            let t = (0, v.r)(r);
                            if (!t) return !1;
                            let n = t.activeElement;
                            return !(null == (e = r.current) || !e.contains(n)) || o.some((e => {
                                var r, o;
                                return (null == (r = t.getElementById(e.buttonId.current)) ? void 0 : r.contains(n)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(n))
                            }))
                        })),
                        h = (0, b.z)((e => {
                            for (let t of o) t.buttonId.current !== e && t.close()
                        })),
                        d = (0, i.useMemo)((() => ({
                            registerPopover: f,
                            unregisterPopover: c,
                            isFocusWithinPopoverGroup: p,
                            closeOthers: h,
                            mainTreeNodeRef: a.mainTreeNodeRef
                        })), [f, c, p, h, a.mainTreeNodeRef]),
                        m = (0, i.useMemo)((() => ({})), []),
                        g = e,
                        w = {
                            ref: n
                        };
                    return i.createElement(k.Provider, {
                        value: d
                    }, (0, u.sY)({
                        ourProps: w,
                        theirProps: g,
                        slot: m,
                        defaultTag: "div",
                        name: "Popover.Group"
                    }), i.createElement(a.MainTreeNode, null))
                })),
                q = Object.assign(L, {
                    Button: z,
                    Overlay: U,
                    Panel: G,
                    Group: $
                })
        },
        91335: function(e, t, r) {
            var n = 1e6,
                o = 1e6,
                i = "[big.js] ",
                s = i + "Invalid ",
                u = s + "decimal places",
                l = i + "Division by zero",
                a = {},
                c = void 0,
                f = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

            function p(e, t, r, n) {
                var o = e.c;
                if (r === c && (r = e.constructor.RM), 0 !== r && 1 !== r && 2 !== r && 3 !== r) throw Error("[big.js] Invalid rounding mode");
                if (t < 1) n = 3 === r && (n || !!o[0]) || 0 === t && (1 === r && o[0] >= 5 || 2 === r && (o[0] > 5 || 5 === o[0] && (n || o[1] !== c))), o.length = 1, n ? (e.e = e.e - t + 1, o[0] = 1) : o[0] = e.e = 0;
                else if (t < o.length) {
                    if (n = 1 === r && o[t] >= 5 || 2 === r && (o[t] > 5 || 5 === o[t] && (n || o[t + 1] !== c || 1 & o[t - 1])) || 3 === r && (n || !!o[0]), o.length = t, n)
                        for (; ++o[--t] > 9;)
                            if (o[t] = 0, 0 === t) {
                                ++e.e, o.unshift(1);
                                break
                            }
                    for (t = o.length; !o[--t];) o.pop()
                }
                return e
            }

            function h(e, t, r) {
                var n = e.e,
                    o = e.c.join(""),
                    i = o.length;
                if (t) o = o.charAt(0) + (i > 1 ? "." + o.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
                else if (n < 0) {
                    for (; ++n;) o = "0" + o;
                    o = "0." + o
                } else if (n > 0)
                    if (++n > i)
                        for (n -= i; n--;) o += "0";
                    else n < i && (o = o.slice(0, n) + "." + o.slice(n));
                else i > 1 && (o = o.charAt(0) + "." + o.slice(1));
                return e.s < 0 && r ? "-" + o : o
            }
            a.abs = function() {
                var e = new this.constructor(this);
                return e.s = 1, e
            }, a.cmp = function(e) {
                var t, r = this,
                    n = r.c,
                    o = (e = new r.constructor(e)).c,
                    i = r.s,
                    s = e.s,
                    u = r.e,
                    l = e.e;
                if (!n[0] || !o[0]) return n[0] ? i : o[0] ? -s : 0;
                if (i != s) return i;
                if (t = i < 0, u != l) return u > l ^ t ? 1 : -1;
                for (s = (u = n.length) < (l = o.length) ? u : l, i = -1; ++i < s;)
                    if (n[i] != o[i]) return n[i] > o[i] ^ t ? 1 : -1;
                return u == l ? 0 : u > l ^ t ? 1 : -1
            }, a.div = function(e) {
                var t = this,
                    r = t.constructor,
                    o = t.c,
                    i = (e = new r(e)).c,
                    s = t.s == e.s ? 1 : -1,
                    a = r.DP;
                if (a !== ~~a || a < 0 || a > n) throw Error(u);
                if (!i[0]) throw Error(l);
                if (!o[0]) return e.s = s, e.c = [e.e = 0], e;
                var f, h, d, m, v, g = i.slice(),
                    w = f = i.length,
                    y = o.length,
                    b = o.slice(0, f),
                    E = b.length,
                    S = e,
                    P = S.c = [],
                    T = 0,
                    O = a + (S.e = t.e - e.e) + 1;
                for (S.s = s, s = O < 0 ? 0 : O, g.unshift(0); E++ < f;) b.push(0);
                do {
                    for (d = 0; d < 10; d++) {
                        if (f != (E = b.length)) m = f > E ? 1 : -1;
                        else
                            for (v = -1, m = 0; ++v < f;)
                                if (i[v] != b[v]) {
                                    m = i[v] > b[v] ? 1 : -1;
                                    break
                                } if (!(m < 0)) break;
                        for (h = E == f ? i : g; E;) {
                            if (b[--E] < h[E]) {
                                for (v = E; v && !b[--v];) b[v] = 9;
                                --b[v], b[E] += 10
                            }
                            b[E] -= h[E]
                        }
                        for (; !b[0];) b.shift()
                    }
                    P[T++] = m ? d : ++d, b[0] && m ? b[E] = o[w] || 0 : b = [o[w]]
                } while ((w++ < y || b[0] !== c) && s--);
                return P[0] || 1 == T || (P.shift(), S.e--, O--), T > O && p(S, O, r.RM, b[0] !== c), S
            }, a.eq = function(e) {
                return 0 === this.cmp(e)
            }, a.gt = function(e) {
                return this.cmp(e) > 0
            }, a.gte = function(e) {
                return this.cmp(e) > -1
            }, a.lt = function(e) {
                return this.cmp(e) < 0
            }, a.lte = function(e) {
                return this.cmp(e) < 1
            }, a.minus = a.sub = function(e) {
                var t, r, n, o, i = this,
                    s = i.constructor,
                    u = i.s,
                    l = (e = new s(e)).s;
                if (u != l) return e.s = -l, i.plus(e);
                var a = i.c.slice(),
                    c = i.e,
                    f = e.c,
                    p = e.e;
                if (!a[0] || !f[0]) return f[0] ? e.s = -l : a[0] ? e = new s(i) : e.s = 1, e;
                if (u = c - p) {
                    for ((o = u < 0) ? (u = -u, n = a) : (p = c, n = f), n.reverse(), l = u; l--;) n.push(0);
                    n.reverse()
                } else
                    for (r = ((o = a.length < f.length) ? a : f).length, u = l = 0; l < r; l++)
                        if (a[l] != f[l]) {
                            o = a[l] < f[l];
                            break
                        } if (o && (n = a, a = f, f = n, e.s = -e.s), (l = (r = f.length) - (t = a.length)) > 0)
                    for (; l--;) a[t++] = 0;
                for (l = t; r > u;) {
                    if (a[--r] < f[r]) {
                        for (t = r; t && !a[--t];) a[t] = 9;
                        --a[t], a[r] += 10
                    }
                    a[r] -= f[r]
                }
                for (; 0 === a[--l];) a.pop();
                for (; 0 === a[0];) a.shift(), --p;
                return a[0] || (e.s = 1, a = [p = 0]), e.c = a, e.e = p, e
            }, a.mod = function(e) {
                var t, r = this,
                    n = r.constructor,
                    o = r.s,
                    i = (e = new n(e)).s;
                if (!e.c[0]) throw Error(l);
                return r.s = e.s = 1, t = 1 == e.cmp(r), r.s = o, e.s = i, t ? new n(r) : (o = n.DP, i = n.RM, n.DP = n.RM = 0, r = r.div(e), n.DP = o, n.RM = i, this.minus(r.times(e)))
            }, a.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, e
            }, a.plus = a.add = function(e) {
                var t, r, n, o = this,
                    i = o.constructor;
                if (e = new i(e), o.s != e.s) return e.s = -e.s, o.minus(e);
                var s = o.e,
                    u = o.c,
                    l = e.e,
                    a = e.c;
                if (!u[0] || !a[0]) return a[0] || (u[0] ? e = new i(o) : e.s = o.s), e;
                if (u = u.slice(), t = s - l) {
                    for (t > 0 ? (l = s, n = a) : (t = -t, n = u), n.reverse(); t--;) n.push(0);
                    n.reverse()
                }
                for (u.length - a.length < 0 && (n = a, a = u, u = n), t = a.length, r = 0; t; u[t] %= 10) r = (u[--t] = u[t] + a[t] + r) / 10 | 0;
                for (r && (u.unshift(r), ++l), t = u.length; 0 === u[--t];) u.pop();
                return e.c = u, e.e = l, e
            }, a.pow = function(e) {
                var t = this,
                    r = new t.constructor("1"),
                    n = r,
                    i = e < 0;
                if (e !== ~~e || e < -1e6 || e > o) throw Error(s + "exponent");
                for (i && (e = -e); 1 & e && (n = n.times(t)), e >>= 1;) t = t.times(t);
                return i ? r.div(n) : n
            }, a.prec = function(e, t) {
                if (e !== ~~e || e < 1 || e > n) throw Error(s + "precision");
                return p(new this.constructor(this), e, t)
            }, a.round = function(e, t) {
                if (e === c) e = 0;
                else if (e !== ~~e || e < -n || e > n) throw Error(u);
                return p(new this.constructor(this), e + this.e + 1, t)
            }, a.sqrt = function() {
                var e, t, r, n = this,
                    o = n.constructor,
                    s = n.s,
                    u = n.e,
                    l = new o("0.5");
                if (!n.c[0]) return new o(n);
                if (s < 0) throw Error(i + "No square root");
                0 === (s = Math.sqrt(n + "")) || s === 1 / 0 ? ((t = n.c.join("")).length + u & 1 || (t += "0"), u = ((u + 1) / 2 | 0) - (u < 0 || 1 & u), e = new o(((s = Math.sqrt(t)) == 1 / 0 ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + u)) : e = new o(s + ""), u = e.e + (o.DP += 4);
                do {
                    r = e, e = l.times(r.plus(n.div(r)))
                } while (r.c.slice(0, u).join("") !== e.c.slice(0, u).join(""));
                return p(e, (o.DP -= 4) + e.e + 1, o.RM)
            }, a.times = a.mul = function(e) {
                var t, r = this,
                    n = r.constructor,
                    o = r.c,
                    i = (e = new n(e)).c,
                    s = o.length,
                    u = i.length,
                    l = r.e,
                    a = e.e;
                if (e.s = r.s == e.s ? 1 : -1, !o[0] || !i[0]) return e.c = [e.e = 0], e;
                for (e.e = l + a, s < u && (t = o, o = i, i = t, a = s, s = u, u = a), t = new Array(a = s + u); a--;) t[a] = 0;
                for (l = u; l--;) {
                    for (u = 0, a = s + l; a > l;) u = t[a] + i[l] * o[a - l - 1] + u, t[a--] = u % 10, u = u / 10 | 0;
                    t[a] = u
                }
                for (u ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
                return e.c = t, e
            }, a.toExponential = function(e, t) {
                var r = this,
                    o = r.c[0];
                if (e !== c) {
                    if (e !== ~~e || e < 0 || e > n) throw Error(u);
                    for (r = p(new r.constructor(r), ++e, t); r.c.length < e;) r.c.push(0)
                }
                return h(r, !0, !!o)
            }, a.toFixed = function(e, t) {
                var r = this,
                    o = r.c[0];
                if (e !== c) {
                    if (e !== ~~e || e < 0 || e > n) throw Error(u);
                    for (e = e + (r = p(new r.constructor(r), e + r.e + 1, t)).e + 1; r.c.length < e;) r.c.push(0)
                }
                return h(r, !1, !!o)
            }, a[Symbol.for("nodejs.util.inspect.custom")] = a.toJSON = a.toString = function() {
                var e = this,
                    t = e.constructor;
                return h(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
            }, a.toNumber = function() {
                var e = Number(h(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(i + "Imprecise conversion");
                return e
            }, a.toPrecision = function(e, t) {
                var r = this,
                    o = r.constructor,
                    i = r.c[0];
                if (e !== c) {
                    if (e !== ~~e || e < 1 || e > n) throw Error(s + "precision");
                    for (r = p(new o(r), e, t); r.c.length < e;) r.c.push(0)
                }
                return h(r, e <= r.e || r.e <= o.NE || r.e >= o.PE, !!i)
            }, a.valueOf = function() {
                var e = this,
                    t = e.constructor;
                if (!0 === t.strict) throw Error(i + "valueOf disallowed");
                return h(e, e.e <= t.NE || e.e >= t.PE, !0)
            };
            var d = function e() {
                function t(r) {
                    var n = this;
                    if (!(n instanceof t)) return r === c ? e() : new t(r);
                    if (r instanceof t) n.s = r.s, n.e = r.e, n.c = r.c.slice();
                    else {
                        if ("string" !== typeof r) {
                            if (!0 === t.strict && "bigint" !== typeof r) throw TypeError(s + "value");
                            r = 0 === r && 1 / r < 0 ? "-0" : String(r)
                        }! function(e, t) {
                            var r, n, o;
                            if (!f.test(t)) throw Error(s + "number");
                            e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                            (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length);
                            for (o = t.length, n = 0; n < o && "0" == t.charAt(n);) ++n;
                            if (n == o) e.c = [e.e = 0];
                            else {
                                for (; o > 0 && "0" == t.charAt(--o););
                                for (e.e = r - n - 1, e.c = [], r = 0; n <= o;) e.c[r++] = +t.charAt(n++)
                            }
                        }(n, r)
                    }
                    n.constructor = t
                }
                return t.prototype = a, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = false, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
            }();
            t.Z = d
        },
        41050: function(e, t, r) {
            var n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                o = Math.ceil,
                i = Math.floor,
                s = "[BigNumber Error] ",
                u = s + "Number primitive has more than 15 significant digits: ",
                l = 1e14,
                a = 14,
                c = 9007199254740991,
                f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                p = 1e7,
                h = 1e9;

            function d(e) {
                var t = 0 | e;
                return e > 0 || e === t ? t : t - 1
            }

            function m(e) {
                for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o;) {
                    for (t = e[n++] + "", r = a - t.length; r--; t = "0" + t);
                    i += t
                }
                for (o = i.length; 48 === i.charCodeAt(--o););
                return i.slice(0, o + 1 || 1)
            }

            function v(e, t) {
                var r, n, o = e.c,
                    i = t.c,
                    s = e.s,
                    u = t.s,
                    l = e.e,
                    a = t.e;
                if (!s || !u) return null;
                if (r = o && !o[0], n = i && !i[0], r || n) return r ? n ? 0 : -u : s;
                if (s != u) return s;
                if (r = s < 0, n = l == a, !o || !i) return n ? 0 : !o ^ r ? 1 : -1;
                if (!n) return l > a ^ r ? 1 : -1;
                for (u = (l = o.length) < (a = i.length) ? l : a, s = 0; s < u; s++)
                    if (o[s] != i[s]) return o[s] > i[s] ^ r ? 1 : -1;
                return l == a ? 0 : l > a ^ r ? 1 : -1
            }

            function g(e, t, r, n) {
                if (e < t || e > r || e !== i(e)) throw Error(s + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
            }

            function w(e) {
                var t = e.c.length - 1;
                return d(e.e / a) == t && e.c[t] % 2 != 0
            }

            function y(e, t) {
                return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
            }

            function b(e, t, r) {
                var n, o;
                if (t < 0) {
                    for (o = r + "."; ++t; o += r);
                    e = o + e
                } else if (++t > (n = e.length)) {
                    for (o = r, t -= n; --t; o += r);
                    e += o
                } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                return e
            }
            var E = function e(t) {
                var r, E, S, P = B.prototype = {
                        constructor: B,
                        toString: null,
                        valueOf: null
                    },
                    T = new B(1),
                    O = 20,
                    D = 4,
                    N = -7,
                    M = 21,
                    A = -1e7,
                    C = 1e7,
                    I = !1,
                    R = 1,
                    k = 0,
                    x = {
                        prefix: "",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        groupSeparator: ",",
                        decimalSeparator: ".",
                        fractionGroupSize: 0,
                        fractionGroupSeparator: "\xa0",
                        suffix: ""
                    },
                    _ = "0123456789abcdefghijklmnopqrstuvwxyz",
                    j = !0;

                function B(e, t) {
                    var r, o, s, l, f, p, h, d, m = this;
                    if (!(m instanceof B)) return new B(e, t);
                    if (null == t) {
                        if (e && !0 === e._isBigNumber) return m.s = e.s, void(!e.c || e.e > C ? m.c = m.e = null : e.e < A ? m.c = [m.e = 0] : (m.e = e.e, m.c = e.c.slice()));
                        if ((p = "number" == typeof e) && 0 * e == 0) {
                            if (m.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                for (l = 0, f = e; f >= 10; f /= 10, l++);
                                return void(l > C ? m.c = m.e = null : (m.e = l, m.c = [e]))
                            }
                            d = String(e)
                        } else {
                            if (!n.test(d = String(e))) return S(m, d, p);
                            m.s = 45 == d.charCodeAt(0) ? (d = d.slice(1), -1) : 1
                        }(l = d.indexOf(".")) > -1 && (d = d.replace(".", "")), (f = d.search(/e/i)) > 0 ? (l < 0 && (l = f), l += +d.slice(f + 1), d = d.substring(0, f)) : l < 0 && (l = d.length)
                    } else {
                        if (g(t, 2, _.length, "Base"), 10 == t && j) return U(m = new B(e), O + m.e + 1, D);
                        if (d = String(e), p = "number" == typeof e) {
                            if (0 * e != 0) return S(m, d, p, t);
                            if (m.s = 1 / e < 0 ? (d = d.slice(1), -1) : 1, B.DEBUG && d.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e)
                        } else m.s = 45 === d.charCodeAt(0) ? (d = d.slice(1), -1) : 1;
                        for (r = _.slice(0, t), l = f = 0, h = d.length; f < h; f++)
                            if (r.indexOf(o = d.charAt(f)) < 0) {
                                if ("." == o) {
                                    if (f > l) {
                                        l = h;
                                        continue
                                    }
                                } else if (!s && (d == d.toUpperCase() && (d = d.toLowerCase()) || d == d.toLowerCase() && (d = d.toUpperCase()))) {
                                    s = !0, f = -1, l = 0;
                                    continue
                                }
                                return S(m, String(e), p, t)
                            }
                        p = !1, (l = (d = E(d, t, 10, m.s)).indexOf(".")) > -1 ? d = d.replace(".", "") : l = d.length
                    }
                    for (f = 0; 48 === d.charCodeAt(f); f++);
                    for (h = d.length; 48 === d.charCodeAt(--h););
                    if (d = d.slice(f, ++h)) {
                        if (h -= f, p && B.DEBUG && h > 15 && (e > c || e !== i(e))) throw Error(u + m.s * e);
                        if ((l = l - f - 1) > C) m.c = m.e = null;
                        else if (l < A) m.c = [m.e = 0];
                        else {
                            if (m.e = l, m.c = [], f = (l + 1) % a, l < 0 && (f += a), f < h) {
                                for (f && m.c.push(+d.slice(0, f)), h -= a; f < h;) m.c.push(+d.slice(f, f += a));
                                f = a - (d = d.slice(f)).length
                            } else f -= h;
                            for (; f--; d += "0");
                            m.c.push(+d)
                        }
                    } else m.c = [m.e = 0]
                }

                function F(e, t, r, n) {
                    var o, i, s, u, l;
                    if (null == r ? r = D : g(r, 0, 8), !e.c) return e.toString();
                    if (o = e.c[0], s = e.e, null == t) l = m(e.c), l = 1 == n || 2 == n && (s <= N || s >= M) ? y(l, s) : b(l, s, "0");
                    else if (i = (e = U(new B(e), t, r)).e, u = (l = m(e.c)).length, 1 == n || 2 == n && (t <= i || i <= N)) {
                        for (; u < t; l += "0", u++);
                        l = y(l, i)
                    } else if (t -= s, l = b(l, i, "0"), i + 1 > u) {
                        if (--t > 0)
                            for (l += "."; t--; l += "0");
                    } else if ((t += i - u) > 0)
                        for (i + 1 == u && (l += "."); t--; l += "0");
                    return e.s < 0 && o ? "-" + l : l
                }

                function L(e, t) {
                    for (var r, n, o = 1, i = new B(e[0]); o < e.length; o++)(!(n = new B(e[o])).s || (r = v(i, n)) === t || 0 === r && i.s === t) && (i = n);
                    return i
                }

                function z(e, t, r) {
                    for (var n = 1, o = t.length; !t[--o]; t.pop());
                    for (o = t[0]; o >= 10; o /= 10, n++);
                    return (r = n + r * a - 1) > C ? e.c = e.e = null : r < A ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                }

                function U(e, t, r, n) {
                    var s, u, c, p, h, d, m, v = e.c,
                        g = f;
                    if (v) {
                        e: {
                            for (s = 1, p = v[0]; p >= 10; p /= 10, s++);
                            if ((u = t - s) < 0) u += a,
                            c = t,
                            h = v[d = 0],
                            m = i(h / g[s - c - 1] % 10);
                            else if ((d = o((u + 1) / a)) >= v.length) {
                                if (!n) break e;
                                for (; v.length <= d; v.push(0));
                                h = m = 0, s = 1, c = (u %= a) - a + 1
                            } else {
                                for (h = p = v[d], s = 1; p >= 10; p /= 10, s++);
                                m = (c = (u %= a) - a + s) < 0 ? 0 : i(h / g[s - c - 1] % 10)
                            }
                            if (n = n || t < 0 || null != v[d + 1] || (c < 0 ? h : h % g[s - c - 1]), n = r < 4 ? (m || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == r || n || 6 == r && (u > 0 ? c > 0 ? h / g[s - c] : 0 : v[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !v[0]) return v.length = 0, n ? (t -= e.e + 1, v[0] = g[(a - t % a) % a], e.e = -t || 0) : v[0] = e.e = 0, e;
                            if (0 == u ? (v.length = d, p = 1, d--) : (v.length = d + 1, p = g[a - u], v[d] = c > 0 ? i(h / g[s - c] % g[c]) * p : 0), n)
                                for (;;) {
                                    if (0 == d) {
                                        for (u = 1, c = v[0]; c >= 10; c /= 10, u++);
                                        for (c = v[0] += p, p = 1; c >= 10; c /= 10, p++);
                                        u != p && (e.e++, v[0] == l && (v[0] = 1));
                                        break
                                    }
                                    if (v[d] += p, v[d] != l) break;
                                    v[d--] = 0, p = 1
                                }
                            for (u = v.length; 0 === v[--u]; v.pop());
                        }
                        e.e > C ? e.c = e.e = null : e.e < A && (e.c = [e.e = 0])
                    }
                    return e
                }

                function G(e) {
                    var t, r = e.e;
                    return null === r ? e.toString() : (t = m(e.c), t = r <= N || r >= M ? y(t, r) : b(t, r, "0"), e.s < 0 ? "-" + t : t)
                }
                return B.clone = e, B.ROUND_UP = 0, B.ROUND_DOWN = 1, B.ROUND_CEIL = 2, B.ROUND_FLOOR = 3, B.ROUND_HALF_UP = 4, B.ROUND_HALF_DOWN = 5, B.ROUND_HALF_EVEN = 6, B.ROUND_HALF_CEIL = 7, B.ROUND_HALF_FLOOR = 8, B.EUCLID = 9, B.config = B.set = function(e) {
                    var t, r;
                    if (null != e) {
                        if ("object" != typeof e) throw Error(s + "Object expected: " + e);
                        if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (g(r = e[t], 0, h, t), O = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (g(r = e[t], 0, 8, t), D = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (g(r[0], -h, 0, t), g(r[1], 0, h, t), N = r[0], M = r[1]) : (g(r, -h, h, t), N = -(M = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                            if ((r = e[t]) && r.pop) g(r[0], -h, -1, t), g(r[1], 1, h, t), A = r[0], C = r[1];
                            else {
                                if (g(r, -h, h, t), !r) throw Error(s + t + " cannot be zero: " + r);
                                A = -(C = r < 0 ? -r : r)
                            }
                        if (e.hasOwnProperty(t = "CRYPTO")) {
                            if ((r = e[t]) !== !!r) throw Error(s + t + " not true or false: " + r);
                            if (r) {
                                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw I = !r, Error(s + "crypto unavailable");
                                I = r
                            } else I = r
                        }
                        if (e.hasOwnProperty(t = "MODULO_MODE") && (g(r = e[t], 0, 9, t), R = r), e.hasOwnProperty(t = "POW_PRECISION") && (g(r = e[t], 0, h, t), k = r), e.hasOwnProperty(t = "FORMAT")) {
                            if ("object" != typeof(r = e[t])) throw Error(s + t + " not an object: " + r);
                            x = r
                        }
                        if (e.hasOwnProperty(t = "ALPHABET")) {
                            if ("string" != typeof(r = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(r)) throw Error(s + t + " invalid: " + r);
                            j = "0123456789" == r.slice(0, 10), _ = r
                        }
                    }
                    return {
                        DECIMAL_PLACES: O,
                        ROUNDING_MODE: D,
                        EXPONENTIAL_AT: [N, M],
                        RANGE: [A, C],
                        CRYPTO: I,
                        MODULO_MODE: R,
                        POW_PRECISION: k,
                        FORMAT: x,
                        ALPHABET: _
                    }
                }, B.isBigNumber = function(e) {
                    if (!e || !0 !== e._isBigNumber) return !1;
                    if (!B.DEBUG) return !0;
                    var t, r, n = e.c,
                        o = e.e,
                        u = e.s;
                    e: if ("[object Array]" == {}.toString.call(n)) {
                        if ((1 === u || -1 === u) && o >= -h && o <= h && o === i(o)) {
                            if (0 === n[0]) {
                                if (0 === o && 1 === n.length) return !0;
                                break e
                            }
                            if ((t = (o + 1) % a) < 1 && (t += a), String(n[0]).length == t) {
                                for (t = 0; t < n.length; t++)
                                    if ((r = n[t]) < 0 || r >= l || r !== i(r)) break e;
                                if (0 !== r) return !0
                            }
                        }
                    } else
                    if (null === n && null === o && (null === u || 1 === u || -1 === u)) return !0;
                    throw Error(s + "Invalid BigNumber: " + e)
                }, B.maximum = B.max = function() {
                    return L(arguments, -1)
                }, B.minimum = B.min = function() {
                    return L(arguments, 1)
                }, B.random = function() {
                    var e = 9007199254740992,
                        t = Math.random() * e & 2097151 ? function() {
                            return i(Math.random() * e)
                        } : function() {
                            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                        };
                    return function(e) {
                        var r, n, u, l, c, p = 0,
                            d = [],
                            m = new B(T);
                        if (null == e ? e = O : g(e, 0, h), l = o(e / a), I)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(l *= 2)); p < l;)(c = 131072 * r[p] + (r[p + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), r[p] = n[0], r[p + 1] = n[1]) : (d.push(c % 1e14), p += 2);
                                p = l / 2
                            } else {
                                if (!crypto.randomBytes) throw I = !1, Error(s + "crypto unavailable");
                                for (r = crypto.randomBytes(l *= 7); p < l;)(c = 281474976710656 * (31 & r[p]) + 1099511627776 * r[p + 1] + 4294967296 * r[p + 2] + 16777216 * r[p + 3] + (r[p + 4] << 16) + (r[p + 5] << 8) + r[p + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, p) : (d.push(c % 1e14), p += 7);
                                p = l / 7
                            }
                        if (!I)
                            for (; p < l;)(c = t()) < 9e15 && (d[p++] = c % 1e14);
                        for (l = d[--p], e %= a, l && e && (c = f[a - e], d[p] = i(l / c) * c); 0 === d[p]; d.pop(), p--);
                        if (p < 0) d = [u = 0];
                        else {
                            for (u = -1; 0 === d[0]; d.splice(0, 1), u -= a);
                            for (p = 1, c = d[0]; c >= 10; c /= 10, p++);
                            p < a && (u -= a - p)
                        }
                        return m.e = u, m.c = d, m
                    }
                }(), B.sum = function() {
                    for (var e = 1, t = arguments, r = new B(t[0]); e < t.length;) r = r.plus(t[e++]);
                    return r
                }, E = function() {
                    var e = "0123456789";

                    function t(e, t, r, n) {
                        for (var o, i, s = [0], u = 0, l = e.length; u < l;) {
                            for (i = s.length; i--; s[i] *= t);
                            for (s[0] += n.indexOf(e.charAt(u++)), o = 0; o < s.length; o++) s[o] > r - 1 && (null == s[o + 1] && (s[o + 1] = 0), s[o + 1] += s[o] / r | 0, s[o] %= r)
                        }
                        return s.reverse()
                    }
                    return function(n, o, i, s, u) {
                        var l, a, c, f, p, h, d, v, g = n.indexOf("."),
                            w = O,
                            y = D;
                        for (g >= 0 && (f = k, k = 0, n = n.replace(".", ""), h = (v = new B(o)).pow(n.length - g), k = f, v.c = t(b(m(h.c), h.e, "0"), 10, i, e), v.e = v.c.length), c = f = (d = t(n, o, i, u ? (l = _, e) : (l = e, _))).length; 0 == d[--f]; d.pop());
                        if (!d[0]) return l.charAt(0);
                        if (g < 0 ? --c : (h.c = d, h.e = c, h.s = s, d = (h = r(h, v, w, y, i)).c, p = h.r, c = h.e), g = d[a = c + w + 1], f = i / 2, p = p || a < 0 || null != d[a + 1], p = y < 4 ? (null != g || p) && (0 == y || y == (h.s < 0 ? 3 : 2)) : g > f || g == f && (4 == y || p || 6 == y && 1 & d[a - 1] || y == (h.s < 0 ? 8 : 7)), a < 1 || !d[0]) n = p ? b(l.charAt(1), -w, l.charAt(0)) : l.charAt(0);
                        else {
                            if (d.length = a, p)
                                for (--i; ++d[--a] > i;) d[a] = 0, a || (++c, d = [1].concat(d));
                            for (f = d.length; !d[--f];);
                            for (g = 0, n = ""; g <= f; n += l.charAt(d[g++]));
                            n = b(n, c, l.charAt(0))
                        }
                        return n
                    }
                }(), r = function() {
                    function e(e, t, r) {
                        var n, o, i, s, u = 0,
                            l = e.length,
                            a = t % p,
                            c = t / p | 0;
                        for (e = e.slice(); l--;) u = ((o = a * (i = e[l] % p) + (n = c * i + (s = e[l] / p | 0) * a) % p * p + u) / r | 0) + (n / p | 0) + c * s, e[l] = o % r;
                        return u && (e = [u].concat(e)), e
                    }

                    function t(e, t, r, n) {
                        var o, i;
                        if (r != n) i = r > n ? 1 : -1;
                        else
                            for (o = i = 0; o < r; o++)
                                if (e[o] != t[o]) {
                                    i = e[o] > t[o] ? 1 : -1;
                                    break
                                } return i
                    }

                    function r(e, t, r, n) {
                        for (var o = 0; r--;) e[r] -= o, o = e[r] < t[r] ? 1 : 0, e[r] = o * n + e[r] - t[r];
                        for (; !e[0] && e.length > 1; e.splice(0, 1));
                    }
                    return function(n, o, s, u, c) {
                        var f, p, h, m, v, g, w, y, b, E, S, P, T, O, D, N, M, A = n.s == o.s ? 1 : -1,
                            C = n.c,
                            I = o.c;
                        if (!C || !C[0] || !I || !I[0]) return new B(n.s && o.s && (C ? !I || C[0] != I[0] : I) ? C && 0 == C[0] || !I ? 0 * A : A / 0 : NaN);
                        for (b = (y = new B(A)).c = [], A = s + (p = n.e - o.e) + 1, c || (c = l, p = d(n.e / a) - d(o.e / a), A = A / a | 0), h = 0; I[h] == (C[h] || 0); h++);
                        if (I[h] > (C[h] || 0) && p--, A < 0) b.push(1), m = !0;
                        else {
                            for (O = C.length, N = I.length, h = 0, A += 2, (v = i(c / (I[0] + 1))) > 1 && (I = e(I, v, c), C = e(C, v, c), N = I.length, O = C.length), T = N, S = (E = C.slice(0, N)).length; S < N; E[S++] = 0);
                            M = I.slice(), M = [0].concat(M), D = I[0], I[1] >= c / 2 && D++;
                            do {
                                if (v = 0, (f = t(I, E, N, S)) < 0) {
                                    if (P = E[0], N != S && (P = P * c + (E[1] || 0)), (v = i(P / D)) > 1)
                                        for (v >= c && (v = c - 1), w = (g = e(I, v, c)).length, S = E.length; 1 == t(g, E, w, S);) v--, r(g, N < w ? M : I, w, c), w = g.length, f = 1;
                                    else 0 == v && (f = v = 1), w = (g = I.slice()).length;
                                    if (w < S && (g = [0].concat(g)), r(E, g, S, c), S = E.length, -1 == f)
                                        for (; t(I, E, N, S) < 1;) v++, r(E, N < S ? M : I, S, c), S = E.length
                                } else 0 === f && (v++, E = [0]);
                                b[h++] = v, E[0] ? E[S++] = C[T] || 0 : (E = [C[T]], S = 1)
                            } while ((T++ < O || null != E[0]) && A--);
                            m = null != E[0], b[0] || b.splice(0, 1)
                        }
                        if (c == l) {
                            for (h = 1, A = b[0]; A >= 10; A /= 10, h++);
                            U(y, s + (y.e = h + p * a - 1) + 1, u, m)
                        } else y.e = p, y.r = +m;
                        return y
                    }
                }(), S = function() {
                    var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                        t = /^([^.]+)\.$/,
                        r = /^\.([^.]+)$/,
                        n = /^-?(Infinity|NaN)$/,
                        o = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                    return function(i, u, l, a) {
                        var c, f = l ? u : u.replace(o, "");
                        if (n.test(f)) i.s = isNaN(f) ? null : f < 0 ? -1 : 1;
                        else {
                            if (!l && (f = f.replace(e, (function(e, t, r) {
                                    return c = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, a && a != c ? e : t
                                })), a && (c = a, f = f.replace(t, "$1").replace(r, "0.$1")), u != f)) return new B(f, c);
                            if (B.DEBUG) throw Error(s + "Not a" + (a ? " base " + a : "") + " number: " + u);
                            i.s = null
                        }
                        i.c = i.e = null
                    }
                }(), P.absoluteValue = P.abs = function() {
                    var e = new B(this);
                    return e.s < 0 && (e.s = 1), e
                }, P.comparedTo = function(e, t) {
                    return v(this, new B(e, t))
                }, P.decimalPlaces = P.dp = function(e, t) {
                    var r, n, o, i = this;
                    if (null != e) return g(e, 0, h), null == t ? t = D : g(t, 0, 8), U(new B(i), e + i.e + 1, t);
                    if (!(r = i.c)) return null;
                    if (n = ((o = r.length - 1) - d(this.e / a)) * a, o = r[o])
                        for (; o % 10 == 0; o /= 10, n--);
                    return n < 0 && (n = 0), n
                }, P.dividedBy = P.div = function(e, t) {
                    return r(this, new B(e, t), O, D)
                }, P.dividedToIntegerBy = P.idiv = function(e, t) {
                    return r(this, new B(e, t), 0, 1)
                }, P.exponentiatedBy = P.pow = function(e, t) {
                    var r, n, u, l, c, f, p, h, d = this;
                    if ((e = new B(e)).c && !e.isInteger()) throw Error(s + "Exponent not an integer: " + G(e));
                    if (null != t && (t = new B(t)), c = e.e > 14, !d.c || !d.c[0] || 1 == d.c[0] && !d.e && 1 == d.c.length || !e.c || !e.c[0]) return h = new B(Math.pow(+G(d), c ? e.s * (2 - w(e)) : +G(e))), t ? h.mod(t) : h;
                    if (f = e.s < 0, t) {
                        if (t.c ? !t.c[0] : !t.s) return new B(NaN);
                        (n = !f && d.isInteger() && t.isInteger()) && (d = d.mod(t))
                    } else {
                        if (e.e > 9 && (d.e > 0 || d.e < -1 || (0 == d.e ? d.c[0] > 1 || c && d.c[1] >= 24e7 : d.c[0] < 8e13 || c && d.c[0] <= 9999975e7))) return l = d.s < 0 && w(e) ? -0 : 0, d.e > -1 && (l = 1 / l), new B(f ? 1 / l : l);
                        k && (l = o(k / a + 2))
                    }
                    for (c ? (r = new B(.5), f && (e.s = 1), p = w(e)) : p = (u = Math.abs(+G(e))) % 2, h = new B(T);;) {
                        if (p) {
                            if (!(h = h.times(d)).c) break;
                            l ? h.c.length > l && (h.c.length = l) : n && (h = h.mod(t))
                        }
                        if (u) {
                            if (0 === (u = i(u / 2))) break;
                            p = u % 2
                        } else if (U(e = e.times(r), e.e + 1, 1), e.e > 14) p = w(e);
                        else {
                            if (0 === (u = +G(e))) break;
                            p = u % 2
                        }
                        d = d.times(d), l ? d.c && d.c.length > l && (d.c.length = l) : n && (d = d.mod(t))
                    }
                    return n ? h : (f && (h = T.div(h)), t ? h.mod(t) : l ? U(h, k, D, undefined) : h)
                }, P.integerValue = function(e) {
                    var t = new B(this);
                    return null == e ? e = D : g(e, 0, 8), U(t, t.e + 1, e)
                }, P.isEqualTo = P.eq = function(e, t) {
                    return 0 === v(this, new B(e, t))
                }, P.isFinite = function() {
                    return !!this.c
                }, P.isGreaterThan = P.gt = function(e, t) {
                    return v(this, new B(e, t)) > 0
                }, P.isGreaterThanOrEqualTo = P.gte = function(e, t) {
                    return 1 === (t = v(this, new B(e, t))) || 0 === t
                }, P.isInteger = function() {
                    return !!this.c && d(this.e / a) > this.c.length - 2
                }, P.isLessThan = P.lt = function(e, t) {
                    return v(this, new B(e, t)) < 0
                }, P.isLessThanOrEqualTo = P.lte = function(e, t) {
                    return -1 === (t = v(this, new B(e, t))) || 0 === t
                }, P.isNaN = function() {
                    return !this.s
                }, P.isNegative = function() {
                    return this.s < 0
                }, P.isPositive = function() {
                    return this.s > 0
                }, P.isZero = function() {
                    return !!this.c && 0 == this.c[0]
                }, P.minus = function(e, t) {
                    var r, n, o, i, s = this,
                        u = s.s;
                    if (t = (e = new B(e, t)).s, !u || !t) return new B(NaN);
                    if (u != t) return e.s = -t, s.plus(e);
                    var c = s.e / a,
                        f = e.e / a,
                        p = s.c,
                        h = e.c;
                    if (!c || !f) {
                        if (!p || !h) return p ? (e.s = -t, e) : new B(h ? s : NaN);
                        if (!p[0] || !h[0]) return h[0] ? (e.s = -t, e) : new B(p[0] ? s : 3 == D ? -0 : 0)
                    }
                    if (c = d(c), f = d(f), p = p.slice(), u = c - f) {
                        for ((i = u < 0) ? (u = -u, o = p) : (f = c, o = h), o.reverse(), t = u; t--; o.push(0));
                        o.reverse()
                    } else
                        for (n = (i = (u = p.length) < (t = h.length)) ? u : t, u = t = 0; t < n; t++)
                            if (p[t] != h[t]) {
                                i = p[t] < h[t];
                                break
                            } if (i && (o = p, p = h, h = o, e.s = -e.s), (t = (n = h.length) - (r = p.length)) > 0)
                        for (; t--; p[r++] = 0);
                    for (t = l - 1; n > u;) {
                        if (p[--n] < h[n]) {
                            for (r = n; r && !p[--r]; p[r] = t);
                            --p[r], p[n] += l
                        }
                        p[n] -= h[n]
                    }
                    for (; 0 == p[0]; p.splice(0, 1), --f);
                    return p[0] ? z(e, p, f) : (e.s = 3 == D ? -1 : 1, e.c = [e.e = 0], e)
                }, P.modulo = P.mod = function(e, t) {
                    var n, o, i = this;
                    return e = new B(e, t), !i.c || !e.s || e.c && !e.c[0] ? new B(NaN) : !e.c || i.c && !i.c[0] ? new B(i) : (9 == R ? (o = e.s, e.s = 1, n = r(i, e, 0, 3), e.s = o, n.s *= o) : n = r(i, e, 0, R), (e = i.minus(n.times(e))).c[0] || 1 != R || (e.s = i.s), e)
                }, P.multipliedBy = P.times = function(e, t) {
                    var r, n, o, i, s, u, c, f, h, m, v, g, w, y, b, E = this,
                        S = E.c,
                        P = (e = new B(e, t)).c;
                    if (!S || !P || !S[0] || !P[0]) return !E.s || !e.s || S && !S[0] && !P || P && !P[0] && !S ? e.c = e.e = e.s = null : (e.s *= E.s, S && P ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                    for (n = d(E.e / a) + d(e.e / a), e.s *= E.s, (c = S.length) < (m = P.length) && (w = S, S = P, P = w, o = c, c = m, m = o), o = c + m, w = []; o--; w.push(0));
                    for (y = l, b = p, o = m; --o >= 0;) {
                        for (r = 0, v = P[o] % b, g = P[o] / b | 0, i = o + (s = c); i > o;) r = ((f = v * (f = S[--s] % b) + (u = g * f + (h = S[s] / b | 0) * v) % b * b + w[i] + r) / y | 0) + (u / b | 0) + g * h, w[i--] = f % y;
                        w[i] = r
                    }
                    return r ? ++n : w.splice(0, 1), z(e, w, n)
                }, P.negated = function() {
                    var e = new B(this);
                    return e.s = -e.s || null, e
                }, P.plus = function(e, t) {
                    var r, n = this,
                        o = n.s;
                    if (t = (e = new B(e, t)).s, !o || !t) return new B(NaN);
                    if (o != t) return e.s = -t, n.minus(e);
                    var i = n.e / a,
                        s = e.e / a,
                        u = n.c,
                        c = e.c;
                    if (!i || !s) {
                        if (!u || !c) return new B(o / 0);
                        if (!u[0] || !c[0]) return c[0] ? e : new B(u[0] ? n : 0 * o)
                    }
                    if (i = d(i), s = d(s), u = u.slice(), o = i - s) {
                        for (o > 0 ? (s = i, r = c) : (o = -o, r = u), r.reverse(); o--; r.push(0));
                        r.reverse()
                    }
                    for ((o = u.length) - (t = c.length) < 0 && (r = c, c = u, u = r, t = o), o = 0; t;) o = (u[--t] = u[t] + c[t] + o) / l | 0, u[t] = l === u[t] ? 0 : u[t] % l;
                    return o && (u = [o].concat(u), ++s), z(e, u, s)
                }, P.precision = P.sd = function(e, t) {
                    var r, n, o, i = this;
                    if (null != e && e !== !!e) return g(e, 1, h), null == t ? t = D : g(t, 0, 8), U(new B(i), e, t);
                    if (!(r = i.c)) return null;
                    if (n = (o = r.length - 1) * a + 1, o = r[o]) {
                        for (; o % 10 == 0; o /= 10, n--);
                        for (o = r[0]; o >= 10; o /= 10, n++);
                    }
                    return e && i.e + 1 > n && (n = i.e + 1), n
                }, P.shiftedBy = function(e) {
                    return g(e, -9007199254740991, c), this.times("1e" + e)
                }, P.squareRoot = P.sqrt = function() {
                    var e, t, n, o, i, s = this,
                        u = s.c,
                        l = s.s,
                        a = s.e,
                        c = O + 4,
                        f = new B("0.5");
                    if (1 !== l || !u || !u[0]) return new B(!l || l < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                    if (0 == (l = Math.sqrt(+G(s))) || l == 1 / 0 ? (((t = m(u)).length + a) % 2 == 0 && (t += "0"), l = Math.sqrt(+t), a = d((a + 1) / 2) - (a < 0 || a % 2), n = new B(t = l == 1 / 0 ? "5e" + a : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + a)) : n = new B(l + ""), n.c[0])
                        for ((l = (a = n.e) + c) < 3 && (l = 0);;)
                            if (i = n, n = f.times(i.plus(r(s, i, c, 1))), m(i.c).slice(0, l) === (t = m(n.c)).slice(0, l)) {
                                if (n.e < a && --l, "9999" != (t = t.slice(l - 3, l + 1)) && (o || "4999" != t)) {
                                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (U(n, n.e + O + 2, 1), e = !n.times(n).eq(s));
                                    break
                                }
                                if (!o && (U(i, i.e + O + 2, 0), i.times(i).eq(s))) {
                                    n = i;
                                    break
                                }
                                c += 4, l += 4, o = 1
                            }
                    return U(n, n.e + O + 1, D, e)
                }, P.toExponential = function(e, t) {
                    return null != e && (g(e, 0, h), e++), F(this, e, t, 1)
                }, P.toFixed = function(e, t) {
                    return null != e && (g(e, 0, h), e = e + this.e + 1), F(this, e, t)
                }, P.toFormat = function(e, t, r) {
                    var n, o = this;
                    if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = x;
                    else if ("object" != typeof r) throw Error(s + "Argument not an object: " + r);
                    if (n = o.toFixed(e, t), o.c) {
                        var i, u = n.split("."),
                            l = +r.groupSize,
                            a = +r.secondaryGroupSize,
                            c = r.groupSeparator || "",
                            f = u[0],
                            p = u[1],
                            h = o.s < 0,
                            d = h ? f.slice(1) : f,
                            m = d.length;
                        if (a && (i = l, l = a, a = i, m -= i), l > 0 && m > 0) {
                            for (i = m % l || l, f = d.substr(0, i); i < m; i += l) f += c + d.substr(i, l);
                            a > 0 && (f += c + d.slice(i)), h && (f = "-" + f)
                        }
                        n = p ? f + (r.decimalSeparator || "") + ((a = +r.fractionGroupSize) ? p.replace(new RegExp("\\d{" + a + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : p) : f
                    }
                    return (r.prefix || "") + n + (r.suffix || "")
                }, P.toFraction = function(e) {
                    var t, n, o, i, u, l, c, p, h, d, v, g, w = this,
                        y = w.c;
                    if (null != e && (!(c = new B(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(T))) throw Error(s + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + G(c));
                    if (!y) return new B(w);
                    for (t = new B(T), h = n = new B(T), o = p = new B(T), g = m(y), u = t.e = g.length - w.e - 1, t.c[0] = f[(l = u % a) < 0 ? a + l : l], e = !e || c.comparedTo(t) > 0 ? u > 0 ? t : h : c, l = C, C = 1 / 0, c = new B(g), p.c[0] = 0; d = r(c, t, 0, 1), 1 != (i = n.plus(d.times(o))).comparedTo(e);) n = o, o = i, h = p.plus(d.times(i = h)), p = i, t = c.minus(d.times(i = t)), c = i;
                    return i = r(e.minus(n), o, 0, 1), p = p.plus(i.times(h)), n = n.plus(i.times(o)), p.s = h.s = w.s, v = r(h, o, u *= 2, D).minus(w).abs().comparedTo(r(p, n, u, D).minus(w).abs()) < 1 ? [h, o] : [p, n], C = l, v
                }, P.toNumber = function() {
                    return +G(this)
                }, P.toPrecision = function(e, t) {
                    return null != e && g(e, 1, h), F(this, e, t, 2)
                }, P.toString = function(e) {
                    var t, r = this,
                        n = r.s,
                        o = r.e;
                    return null === o ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = o <= N || o >= M ? y(m(r.c), o) : b(m(r.c), o, "0") : 10 === e && j ? t = b(m((r = U(new B(r), O + o + 1, D)).c), r.e, "0") : (g(e, 2, _.length, "Base"), t = E(b(m(r.c), o, "0"), 10, e, n, !0)), n < 0 && r.c[0] && (t = "-" + t)), t
                }, P.valueOf = P.toJSON = function() {
                    return G(this)
                }, P._isBigNumber = !0, P[Symbol.toStringTag] = "BigNumber", P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf, null != t && B.set(t), B
            }();
            t.Z = E
        }
    }
]);