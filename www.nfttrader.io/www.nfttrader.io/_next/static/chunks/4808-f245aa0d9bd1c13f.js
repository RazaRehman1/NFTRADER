"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4808], {
        52400: function(e, t, n) {
            n.d(t, {
                w_: function() {
                    return u
                }
            });
            var r = n(56168),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = r.createContext && r.createContext(o),
                l = function() {
                    return (l = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                i = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                };

            function s(e) {
                return e && e.map((function(e, t) {
                    return r.createElement(e.tag, l({
                        key: t
                    }, e.attr), s(e.child))
                }))
            }

            function u(e) {
                return function(t) {
                    return r.createElement(c, l({
                        attr: l({}, e.attr)
                    }, t), s(e.child))
                }
            }

            function c(e) {
                var t = function(t) {
                    var n, o = e.attr,
                        a = e.size,
                        s = e.title,
                        u = i(e, ["attr", "size", "title"]),
                        c = a || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", l({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, u, {
                        className: n,
                        style: l(l({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && r.createElement("title", null, s), e.children)
                };
                return void 0 !== a ? r.createElement(a.Consumer, null, (function(e) {
                    return t(e)
                })) : t(o)
            }
        },
        71689: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return q
                }
            });
            var r = n(56168),
                o = n(87996),
                a = n(74238),
                l = n(76178),
                i = n(49053);

            function s(e, t) {
                let [n, o] = (0, r.useState)(e), a = (0, i.E)(e);
                return (0, l.e)((() => o(a.current)), [a, o, ...t]), n
            }
            var u, c, d = n(26222),
                p = n(44505),
                f = n(99964),
                b = n(49741),
                v = n(66123),
                x = n(16369),
                g = n(93479),
                m = n(50857),
                h = n(84114),
                O = n(59743),
                R = n(90808),
                y = n(63988),
                T = n(84830),
                S = n(41784),
                I = n(78904),
                E = n(58901),
                P = n(22434),
                w = n(21421),
                L = ((c = L || {})[c.Open = 0] = "Open", c[c.Closed = 1] = "Closed", c),
                k = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(k || {}),
                z = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(z || {}),
                A = ((u = A || {})[u.OpenListbox = 0] = "OpenListbox", u[u.CloseListbox = 1] = "CloseListbox", u[u.GoToOption = 2] = "GoToOption", u[u.Search = 3] = "Search", u[u.ClearSearch = 4] = "ClearSearch", u[u.RegisterOption = 5] = "RegisterOption", u[u.UnregisterOption = 6] = "UnregisterOption", u[u.RegisterLabel = 7] = "RegisterLabel", u);

            function C(e, t = (e => e)) {
                let n = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    r = (0, m.z2)(t(e.options.slice()), (e => e.dataRef.current.domRef.current)),
                    o = n ? r.indexOf(n) : null;
                return -1 === o && (o = null), {
                    options: r,
                    activeOptionIndex: o
                }
            }
            let M = {
                    1: e => e.dataRef.current.disabled || 1 === e.listboxState ? e : { ...e,
                        activeOptionIndex: null,
                        listboxState: 1
                    },
                    0(e) {
                        if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
                        let t = e.activeOptionIndex,
                            {
                                isSelected: n
                            } = e.dataRef.current,
                            r = e.options.findIndex((e => n(e.dataRef.current.value)));
                        return -1 !== r && (t = r), { ...e,
                            listboxState: 0,
                            activeOptionIndex: t
                        }
                    },
                    2(e, t) {
                        var n;
                        if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                        let r = C(e),
                            o = (0, x.d)(t, {
                                resolveItems: () => r.options,
                                resolveActiveIndex: () => r.activeOptionIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeOptionIndex: o,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((e => {
                                var t;
                                return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r))
                            })),
                            a = o ? e.options.indexOf(o) : -1;
                        return -1 === a || a === e.activeOptionIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeOptionIndex: a,
                            activationTrigger: 1
                        }
                    },
                    4: e => e.dataRef.current.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : { ...e,
                        searchQuery: ""
                    },
                    5: (e, t) => {
                        let n = {
                                id: t.id,
                                dataRef: t.dataRef
                            },
                            r = C(e, (e => [...e, n]));
                        return null === e.activeOptionIndex && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)), { ...e,
                            ...r
                        }
                    },
                    6: (e, t) => {
                        let n = C(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    },
                    7: (e, t) => ({ ...e,
                        labelId: t.id
                    })
                },
                D = (0, r.createContext)(null);

            function N(e) {
                let t = (0, r.useContext)(D);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, N), t
                }
                return t
            }
            D.displayName = "ListboxActionsContext";
            let F = (0, r.createContext)(null);

            function _(e) {
                let t = (0, r.useContext)(F);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, _), t
                }
                return t
            }

            function j(e, t) {
                return (0, f.E)(t.type, M, e, t)
            }
            F.displayName = "ListboxDataContext";
            let U = r.Fragment;
            let V = p.AN.RenderStrategy | p.AN.Static;
            let Y = (0, p.yV)((function(e, t) {
                    let {
                        value: n,
                        defaultValue: a,
                        form: i,
                        name: s,
                        onChange: u,
                        by: c = ((e, t) => e === t),
                        disabled: b = !1,
                        horizontal: v = !1,
                        multiple: g = !1,
                        ...O
                    } = e;
                    const S = v ? "horizontal" : "vertical";
                    let P = (0, d.T)(t),
                        [w = (g ? [] : void 0), L] = (0, E.q)(n, u, a),
                        [k, z] = (0, r.useReducer)(j, {
                            dataRef: (0, r.createRef)(),
                            listboxState: 1,
                            options: [],
                            searchQuery: "",
                            labelId: null,
                            activeOptionIndex: null,
                            activationTrigger: 1
                        }),
                        A = (0, r.useRef)({
                            static: !1,
                            hold: !1
                        }),
                        C = (0, r.useRef)(null),
                        M = (0, r.useRef)(null),
                        N = (0, r.useRef)(null),
                        _ = (0, I.z)("string" == typeof c ? (e, t) => {
                            let n = c;
                            return (null == e ? void 0 : e[n]) === (null == t ? void 0 : t[n])
                        } : c),
                        V = (0, r.useCallback)((e => (0, f.E)(Y.mode, {
                            1: () => w.some((t => _(t, e))),
                            0: () => _(w, e)
                        })), [w]),
                        Y = (0, r.useMemo)((() => ({ ...k,
                            value: w,
                            disabled: b,
                            mode: g ? 1 : 0,
                            orientation: S,
                            compare: _,
                            isSelected: V,
                            optionsPropsRef: A,
                            labelRef: C,
                            buttonRef: M,
                            optionsRef: N
                        })), [w, b, g, k]);
                    (0, l.e)((() => {
                        k.dataRef.current = Y
                    }), [Y]), (0, R.O)([Y.buttonRef, Y.optionsRef], ((e, t) => {
                        var n;
                        z({
                            type: 1
                        }), (0, m.sP)(t, m.tJ.Loose) || (e.preventDefault(), null == (n = Y.buttonRef.current) || n.focus())
                    }), 0 === Y.listboxState);
                    let $ = (0, r.useMemo)((() => ({
                            open: 0 === Y.listboxState,
                            disabled: b,
                            value: w
                        })), [Y, b, w]),
                        G = (0, I.z)((e => {
                            let t = Y.options.find((t => t.id === e));
                            t && H(t.dataRef.current.value)
                        })),
                        B = (0, I.z)((() => {
                            if (null !== Y.activeOptionIndex) {
                                let {
                                    dataRef: e,
                                    id: t
                                } = Y.options[Y.activeOptionIndex];
                                H(e.current.value), z({
                                    type: 2,
                                    focus: x.T.Specific,
                                    id: t
                                })
                            }
                        })),
                        Q = (0, I.z)((() => z({
                            type: 0
                        }))),
                        q = (0, I.z)((() => z({
                            type: 1
                        }))),
                        W = (0, I.z)(((e, t, n) => e === x.T.Specific ? z({
                            type: 2,
                            focus: x.T.Specific,
                            id: t,
                            trigger: n
                        }) : z({
                            type: 2,
                            focus: e,
                            trigger: n
                        }))),
                        K = (0, I.z)(((e, t) => (z({
                            type: 5,
                            id: e,
                            dataRef: t
                        }), () => z({
                            type: 6,
                            id: e
                        })))),
                        Z = (0, I.z)((e => (z({
                            type: 7,
                            id: e
                        }), () => z({
                            type: 7,
                            id: null
                        })))),
                        H = (0, I.z)((e => (0, f.E)(Y.mode, {
                            0: () => null == L ? void 0 : L(e),
                            1() {
                                let t = Y.value.slice(),
                                    n = t.findIndex((t => _(t, e)));
                                return -1 === n ? t.push(e) : t.splice(n, 1), null == L ? void 0 : L(t)
                            }
                        }))),
                        J = (0, I.z)((e => z({
                            type: 3,
                            value: e
                        }))),
                        X = (0, I.z)((() => z({
                            type: 4
                        }))),
                        ee = (0, r.useMemo)((() => ({
                            onChange: H,
                            registerOption: K,
                            registerLabel: Z,
                            goToOption: W,
                            closeListbox: q,
                            openListbox: Q,
                            selectActiveOption: B,
                            selectOption: G,
                            search: J,
                            clearSearch: X
                        })), []),
                        te = {
                            ref: P
                        },
                        ne = (0, r.useRef)(null),
                        re = (0, o.G)();
                    return (0, r.useEffect)((() => {
                        ne.current && void 0 !== a && re.addEventListener(ne.current, "reset", (() => {
                            null == L || L(a)
                        }))
                    }), [ne, L]), r.createElement(D.Provider, {
                        value: ee
                    }, r.createElement(F.Provider, {
                        value: Y
                    }, r.createElement(h.up, {
                        value: (0, f.E)(Y.listboxState, {
                            0: h.ZM.Open,
                            1: h.ZM.Closed
                        })
                    }, null != s && null != w && (0, T.t)({
                        [s]: w
                    }).map((([e, t], n) => r.createElement(y._, {
                        features: y.A.Hidden,
                        ref: 0 === n ? e => {
                            var t;
                            ne.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                        } : void 0,
                        ...(0, p.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: i,
                            name: e,
                            value: t
                        })
                    }))), (0, p.sY)({
                        ourProps: te,
                        theirProps: O,
                        slot: $,
                        defaultTag: U,
                        name: "Listbox"
                    }))))
                })),
                $ = (0, p.yV)((function(e, t) {
                    var n;
                    let l = (0, a.M)(),
                        {
                            id: i = `headlessui-listbox-button-${l}`,
                            ...u
                        } = e,
                        c = _("Listbox.Button"),
                        f = N("Listbox.Button"),
                        b = (0, d.T)(c.buttonRef, t),
                        m = (0, o.G)(),
                        h = (0, I.z)((e => {
                            switch (e.key) {
                                case v.R.Space:
                                case v.R.Enter:
                                case v.R.ArrowDown:
                                    e.preventDefault(), f.openListbox(), m.nextFrame((() => {
                                        c.value || f.goToOption(x.T.First)
                                    }));
                                    break;
                                case v.R.ArrowUp:
                                    e.preventDefault(), f.openListbox(), m.nextFrame((() => {
                                        c.value || f.goToOption(x.T.Last)
                                    }))
                            }
                        })),
                        R = (0, I.z)((e => {
                            switch (e.key) {
                                case v.R.Space:
                                    e.preventDefault()
                            }
                        })),
                        y = (0, I.z)((e => {
                            if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                            0 === c.listboxState ? (f.closeListbox(), m.nextFrame((() => {
                                var e;
                                return null == (e = c.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (e.preventDefault(), f.openListbox())
                        })),
                        T = s((() => {
                            if (c.labelId) return [c.labelId, i].join(" ")
                        }), [c.labelId, i]),
                        S = (0, r.useMemo)((() => ({
                            open: 0 === c.listboxState,
                            disabled: c.disabled,
                            value: c.value
                        })), [c]),
                        E = {
                            ref: b,
                            id: i,
                            type: (0, O.f)(e, c.buttonRef),
                            "aria-haspopup": "listbox",
                            "aria-controls": null == (n = c.optionsRef.current) ? void 0 : n.id,
                            "aria-expanded": 0 === c.listboxState,
                            "aria-labelledby": T,
                            disabled: c.disabled,
                            onKeyDown: h,
                            onKeyUp: R,
                            onClick: y
                        };
                    return (0, p.sY)({
                        ourProps: E,
                        theirProps: u,
                        slot: S,
                        defaultTag: "button",
                        name: "Listbox.Button"
                    })
                })),
                G = (0, p.yV)((function(e, t) {
                    let n = (0, a.M)(),
                        {
                            id: o = `headlessui-listbox-label-${n}`,
                            ...i
                        } = e,
                        s = _("Listbox.Label"),
                        u = N("Listbox.Label"),
                        c = (0, d.T)(s.labelRef, t);
                    (0, l.e)((() => u.registerLabel(o)), [o]);
                    let f = (0, I.z)((() => {
                            var e;
                            return null == (e = s.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        })),
                        b = (0, r.useMemo)((() => ({
                            open: 0 === s.listboxState,
                            disabled: s.disabled
                        })), [s]);
                    return (0, p.sY)({
                        ourProps: {
                            ref: c,
                            id: o,
                            onClick: f
                        },
                        theirProps: i,
                        slot: b,
                        defaultTag: "label",
                        name: "Listbox.Label"
                    })
                })),
                B = (0, p.yV)((function(e, t) {
                    var n;
                    let l = (0, a.M)(),
                        {
                            id: i = `headlessui-listbox-options-${l}`,
                            ...u
                        } = e,
                        c = _("Listbox.Options"),
                        g = N("Listbox.Options"),
                        m = (0, d.T)(c.optionsRef, t),
                        O = (0, o.G)(),
                        R = (0, o.G)(),
                        y = (0, h.oJ)(),
                        T = null !== y ? (y & h.ZM.Open) === h.ZM.Open : 0 === c.listboxState;
                    (0, r.useEffect)((() => {
                        var e;
                        let t = c.optionsRef.current;
                        t && 0 === c.listboxState && t !== (null == (e = (0, S.r)(t)) ? void 0 : e.activeElement) && t.focus({
                            preventScroll: !0
                        })
                    }), [c.listboxState, c.optionsRef]);
                    let E = (0, I.z)((e => {
                            switch (R.dispose(), e.key) {
                                case v.R.Space:
                                    if ("" !== c.searchQuery) return e.preventDefault(), e.stopPropagation(), g.search(e.key);
                                case v.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), null !== c.activeOptionIndex) {
                                        let {
                                            dataRef: e
                                        } = c.options[c.activeOptionIndex];
                                        g.onChange(e.current.value)
                                    }
                                    0 === c.mode && (g.closeListbox(), (0, b.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = c.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    })));
                                    break;
                                case (0, f.E)(c.orientation, {
                                    vertical: v.R.ArrowDown,
                                    horizontal: v.R.ArrowRight
                                }):
                                    return e.preventDefault(), e.stopPropagation(), g.goToOption(x.T.Next);
                                case (0, f.E)(c.orientation, {
                                    vertical: v.R.ArrowUp,
                                    horizontal: v.R.ArrowLeft
                                }):
                                    return e.preventDefault(), e.stopPropagation(), g.goToOption(x.T.Previous);
                                case v.R.Home:
                                case v.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), g.goToOption(x.T.First);
                                case v.R.End:
                                case v.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), g.goToOption(x.T.Last);
                                case v.R.Escape:
                                    return e.preventDefault(), e.stopPropagation(), g.closeListbox(), O.nextFrame((() => {
                                        var e;
                                        return null == (e = c.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                case v.R.Tab:
                                    e.preventDefault(), e.stopPropagation();
                                    break;
                                default:
                                    1 === e.key.length && (g.search(e.key), R.setTimeout((() => g.clearSearch()), 350))
                            }
                        })),
                        P = s((() => {
                            var e, t, n;
                            return null != (n = null == (e = c.labelRef.current) ? void 0 : e.id) ? n : null == (t = c.buttonRef.current) ? void 0 : t.id
                        }), [c.labelRef.current, c.buttonRef.current]),
                        w = (0, r.useMemo)((() => ({
                            open: 0 === c.listboxState
                        })), [c]),
                        L = {
                            "aria-activedescendant": null === c.activeOptionIndex || null == (n = c.options[c.activeOptionIndex]) ? void 0 : n.id,
                            "aria-multiselectable": 1 === c.mode || void 0,
                            "aria-labelledby": P,
                            "aria-orientation": c.orientation,
                            id: i,
                            onKeyDown: E,
                            role: "listbox",
                            tabIndex: 0,
                            ref: m
                        };
                    return (0, p.sY)({
                        ourProps: L,
                        theirProps: u,
                        slot: w,
                        defaultTag: "ul",
                        features: V,
                        visible: T,
                        name: "Listbox.Options"
                    })
                })),
                Q = (0, p.yV)((function(e, t) {
                    let n = (0, a.M)(),
                        {
                            id: o = `headlessui-listbox-option-${n}`,
                            disabled: s = !1,
                            value: u,
                            ...c
                        } = e,
                        f = _("Listbox.Option"),
                        v = N("Listbox.Option"),
                        g = null !== f.activeOptionIndex && f.options[f.activeOptionIndex].id === o,
                        m = f.isSelected(u),
                        h = (0, r.useRef)(null),
                        O = (0, w.x)(h),
                        R = (0, i.E)({
                            disabled: s,
                            value: u,
                            domRef: h,
                            get textValue() {
                                return O()
                            }
                        }),
                        y = (0, d.T)(t, h);
                    (0, l.e)((() => {
                        if (0 !== f.listboxState || !g || 0 === f.activationTrigger) return;
                        let e = (0, b.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = h.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [h, g, f.listboxState, f.activationTrigger, f.activeOptionIndex]), (0, l.e)((() => v.registerOption(o, R)), [R, o]);
                    let T = (0, I.z)((e => {
                            if (s) return e.preventDefault();
                            v.onChange(u), 0 === f.mode && (v.closeListbox(), (0, b.k)().nextFrame((() => {
                                var e;
                                return null == (e = f.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })))
                        })),
                        S = (0, I.z)((() => {
                            if (s) return v.goToOption(x.T.Nothing);
                            v.goToOption(x.T.Specific, o)
                        })),
                        E = (0, P.g)(),
                        L = (0, I.z)((e => E.update(e))),
                        k = (0, I.z)((e => {
                            E.wasMoved(e) && (s || g || v.goToOption(x.T.Specific, o, 0))
                        })),
                        z = (0, I.z)((e => {
                            E.wasMoved(e) && (s || g && v.goToOption(x.T.Nothing))
                        })),
                        A = (0, r.useMemo)((() => ({
                            active: g,
                            selected: m,
                            disabled: s
                        })), [g, m, s]);
                    return (0, p.sY)({
                        ourProps: {
                            id: o,
                            ref: y,
                            role: "option",
                            tabIndex: !0 === s ? void 0 : -1,
                            "aria-disabled": !0 === s || void 0,
                            "aria-selected": m,
                            disabled: void 0,
                            onClick: T,
                            onFocus: S,
                            onPointerEnter: L,
                            onMouseEnter: L,
                            onPointerMove: k,
                            onMouseMove: k,
                            onPointerLeave: z,
                            onMouseLeave: z
                        },
                        theirProps: c,
                        slot: A,
                        defaultTag: "li",
                        name: "Listbox.Option"
                    })
                })),
                q = Object.assign(Y, {
                    Button: $,
                    Label: G,
                    Options: B,
                    Option: Q
                })
        },
        69921: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return V
                }
            });
            var r = n(56168),
                o = n(44505),
                a = n(74238),
                l = n(99964),
                i = n(66123),
                s = n(50857),
                u = n(76178),
                c = n(26222),
                d = n(59743),
                p = n(49053),
                f = n(2461),
                b = n(63988);

            function v({
                onFocus: e
            }) {
                let [t, n] = (0, r.useState)(!0), o = (0, f.t)();
                return t ? r.createElement(b._, {
                    as: "button",
                    type: "button",
                    features: b.A.Focusable,
                    onFocus: t => {
                        t.preventDefault();
                        let r, a = 50;
                        r = requestAnimationFrame((function t() {
                            if (a-- <= 0) r && cancelAnimationFrame(r);
                            else if (e()) {
                                if (cancelAnimationFrame(r), !o.current) return;
                                n(!1)
                            } else r = requestAnimationFrame(t)
                        }))
                    }
                }) : null
            }
            var x = n(78904),
                g = n(51455),
                m = n(41784);
            const h = r.createContext(null);

            function O({
                children: e
            }) {
                let t = r.useRef({
                    groups: new Map,
                    get(e, t) {
                        var n;
                        let r = this.groups.get(e);
                        r || (r = new Map, this.groups.set(e, r));
                        let o = null != (n = r.get(t)) ? n : 0;
                        return r.set(t, o + 1), [Array.from(r.keys()).indexOf(t), function() {
                            let e = r.get(t);
                            e > 1 ? r.set(t, e - 1) : r.delete(t)
                        }]
                    }
                });
                return r.createElement(h.Provider, {
                    value: t
                }, e)
            }

            function R(e) {
                let t = r.useContext(h);
                if (!t) throw new Error("You must wrap your component in a <StableCollection>");
                let n = function() {
                        var e, t, n;
                        let o = null != (n = null == (t = null == (e = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ? void 0 : e.ReactCurrentOwner) ? void 0 : t.current) ? n : null;
                        if (!o) return Symbol();
                        let a = [],
                            l = o;
                        for (; l;) a.push(l.index), l = l.return;
                        return "$." + a.join(".")
                    }(),
                    [o, a] = t.current.get(e, n);
                return r.useEffect((() => a), []), o
            }
            var y, T, S, I = ((S = I || {})[S.Forwards = 0] = "Forwards", S[S.Backwards = 1] = "Backwards", S),
                E = ((T = E || {})[T.Less = -1] = "Less", T[T.Equal = 0] = "Equal", T[T.Greater = 1] = "Greater", T),
                P = ((y = P || {})[y.SetSelectedIndex = 0] = "SetSelectedIndex", y[y.RegisterTab = 1] = "RegisterTab", y[y.UnregisterTab = 2] = "UnregisterTab", y[y.RegisterPanel = 3] = "RegisterPanel", y[y.UnregisterPanel = 4] = "UnregisterPanel", y);
            let w = {
                    0(e, t) {
                        var n;
                        let r = (0, s.z2)(e.tabs, (e => e.current)),
                            o = (0, s.z2)(e.panels, (e => e.current)),
                            a = r.filter((e => {
                                var t;
                                return !(null != (t = e.current) && t.hasAttribute("disabled"))
                            })),
                            i = { ...e,
                                tabs: r,
                                panels: o
                            };
                        if (t.index < 0 || t.index > r.length - 1) {
                            let n = (0, l.E)(Math.sign(t.index - e.selectedIndex), {
                                [-1]: () => 1,
                                0: () => (0, l.E)(Math.sign(t.index), {
                                    [-1]: () => 0,
                                    0: () => 0,
                                    1: () => 1
                                }),
                                1: () => 0
                            });
                            if (0 === a.length) return i;
                            let o = (0, l.E)(n, {
                                0: () => r.indexOf(a[0]),
                                1: () => r.indexOf(a[a.length - 1])
                            });
                            return { ...i,
                                selectedIndex: -1 === o ? e.selectedIndex : o
                            }
                        }
                        let u = r.slice(0, t.index),
                            c = [...r.slice(t.index), ...u].find((e => a.includes(e)));
                        if (!c) return i;
                        let d = null != (n = r.indexOf(c)) ? n : e.selectedIndex;
                        return -1 === d && (d = e.selectedIndex), { ...i,
                            selectedIndex: d
                        }
                    },
                    1(e, t) {
                        var n;
                        if (e.tabs.includes(t.tab)) return e;
                        let r = e.tabs[e.selectedIndex],
                            o = (0, s.z2)([...e.tabs, t.tab], (e => e.current)),
                            a = null != (n = o.indexOf(r)) ? n : e.selectedIndex;
                        return -1 === a && (a = e.selectedIndex), { ...e,
                            tabs: o,
                            selectedIndex: a
                        }
                    },
                    2: (e, t) => ({ ...e,
                        tabs: e.tabs.filter((e => e !== t.tab))
                    }),
                    3: (e, t) => e.panels.includes(t.panel) ? e : { ...e,
                        panels: (0, s.z2)([...e.panels, t.panel], (e => e.current))
                    },
                    4: (e, t) => ({ ...e,
                        panels: e.panels.filter((e => e !== t.panel))
                    })
                },
                L = (0, r.createContext)(null);

            function k(e) {
                let t = (0, r.useContext)(L);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, k), t
                }
                return t
            }
            L.displayName = "TabsDataContext";
            let z = (0, r.createContext)(null);

            function A(e) {
                let t = (0, r.useContext)(z);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, A), t
                }
                return t
            }

            function C(e, t) {
                return (0, l.E)(t.type, w, e, t)
            }
            z.displayName = "TabsActionsContext";
            let M = r.Fragment;
            let D = o.AN.RenderStrategy | o.AN.Static;
            let N = (0, o.yV)((function(e, t) {
                    var n, p;
                    let f = (0, a.M)(),
                        {
                            id: b = `headlessui-tabs-tab-${f}`,
                            ...v
                        } = e,
                        {
                            orientation: h,
                            activation: O,
                            selectedIndex: y,
                            tabs: T,
                            panels: S
                        } = k("Tab"),
                        I = A("Tab"),
                        E = k("Tab"),
                        P = (0, r.useRef)(null),
                        w = (0, c.T)(P, t);
                    (0, u.e)((() => I.registerTab(P)), [I, P]);
                    let L = R("tabs"),
                        z = T.indexOf(P); - 1 === z && (z = L);
                    let C = z === y,
                        M = (0, x.z)((e => {
                            var t;
                            let n = e();
                            if (n === s.fE.Success && "auto" === O) {
                                let e = null == (t = (0, m.r)(P)) ? void 0 : t.activeElement,
                                    n = E.tabs.findIndex((t => t.current === e)); - 1 !== n && I.change(n)
                            }
                            return n
                        })),
                        D = (0, x.z)((e => {
                            let t = T.map((e => e.current)).filter(Boolean);
                            if (e.key === i.R.Space || e.key === i.R.Enter) return e.preventDefault(), e.stopPropagation(), void I.change(z);
                            switch (e.key) {
                                case i.R.Home:
                                case i.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), M((() => (0, s.jA)(t, s.TO.First)));
                                case i.R.End:
                                case i.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), M((() => (0, s.jA)(t, s.TO.Last)))
                            }
                            return M((() => (0, l.E)(h, {
                                vertical: () => e.key === i.R.ArrowUp ? (0, s.jA)(t, s.TO.Previous | s.TO.WrapAround) : e.key === i.R.ArrowDown ? (0, s.jA)(t, s.TO.Next | s.TO.WrapAround) : s.fE.Error,
                                horizontal: () => e.key === i.R.ArrowLeft ? (0, s.jA)(t, s.TO.Previous | s.TO.WrapAround) : e.key === i.R.ArrowRight ? (0, s.jA)(t, s.TO.Next | s.TO.WrapAround) : s.fE.Error
                            }))) === s.fE.Success ? e.preventDefault() : void 0
                        })),
                        N = (0, r.useRef)(!1),
                        F = (0, x.z)((() => {
                            var e;
                            N.current || (N.current = !0, null == (e = P.current) || e.focus({
                                preventScroll: !0
                            }), I.change(z), (0, g.Y)((() => {
                                N.current = !1
                            })))
                        })),
                        _ = (0, x.z)((e => {
                            e.preventDefault()
                        })),
                        j = (0, r.useMemo)((() => ({
                            selected: C
                        })), [C]),
                        U = {
                            ref: w,
                            onKeyDown: D,
                            onMouseDown: _,
                            onClick: F,
                            id: b,
                            role: "tab",
                            type: (0, d.f)(e, P),
                            "aria-controls": null == (p = null == (n = S[z]) ? void 0 : n.current) ? void 0 : p.id,
                            "aria-selected": C,
                            tabIndex: C ? 0 : -1
                        };
                    return (0, o.sY)({
                        ourProps: U,
                        theirProps: v,
                        slot: j,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                })),
                F = (0, o.yV)((function(e, t) {
                    let {
                        defaultIndex: n = 0,
                        vertical: a = !1,
                        manual: l = !1,
                        onChange: i,
                        selectedIndex: d = null,
                        ...f
                    } = e;
                    const b = a ? "vertical" : "horizontal",
                        g = l ? "manual" : "auto";
                    let m = null !== d,
                        h = (0, c.T)(t),
                        [R, y] = (0, r.useReducer)(C, {
                            selectedIndex: null != d ? d : n,
                            tabs: [],
                            panels: []
                        }),
                        T = (0, r.useMemo)((() => ({
                            selectedIndex: R.selectedIndex
                        })), [R.selectedIndex]),
                        S = (0, p.E)(i || (() => {})),
                        I = (0, p.E)(R.tabs),
                        E = (0, r.useMemo)((() => ({
                            orientation: b,
                            activation: g,
                            ...R
                        })), [b, g, R]),
                        P = (0, x.z)((e => (y({
                            type: 1,
                            tab: e
                        }), () => y({
                            type: 2,
                            tab: e
                        })))),
                        w = (0, x.z)((e => (y({
                            type: 3,
                            panel: e
                        }), () => y({
                            type: 4,
                            panel: e
                        })))),
                        k = (0, x.z)((e => {
                            A.current !== e && S.current(e), m || y({
                                type: 0,
                                index: e
                            })
                        })),
                        A = (0, p.E)(m ? e.selectedIndex : R.selectedIndex),
                        D = (0, r.useMemo)((() => ({
                            registerTab: P,
                            registerPanel: w,
                            change: k
                        })), []);
                    (0, u.e)((() => {
                        y({
                            type: 0,
                            index: null != d ? d : n
                        })
                    }), [d]), (0, u.e)((() => {
                        if (void 0 === A.current || R.tabs.length <= 0) return;
                        let e = (0, s.z2)(R.tabs, (e => e.current));
                        e.some(((e, t) => R.tabs[t] !== e)) && k(e.indexOf(R.tabs[A.current]))
                    }));
                    let N = {
                        ref: h
                    };
                    return r.createElement(O, null, r.createElement(z.Provider, {
                        value: D
                    }, r.createElement(L.Provider, {
                        value: E
                    }, E.tabs.length <= 0 && r.createElement(v, {
                        onFocus: () => {
                            var e, t;
                            for (let n of I.current)
                                if (0 === (null == (e = n.current) ? void 0 : e.tabIndex)) return null == (t = n.current) || t.focus(), !0;
                            return !1
                        }
                    }), (0, o.sY)({
                        ourProps: N,
                        theirProps: f,
                        slot: T,
                        defaultTag: M,
                        name: "Tabs"
                    }))))
                })),
                _ = (0, o.yV)((function(e, t) {
                    let {
                        orientation: n,
                        selectedIndex: r
                    } = k("Tab.List"), a = (0, c.T)(t);
                    return (0, o.sY)({
                        ourProps: {
                            ref: a,
                            role: "tablist",
                            "aria-orientation": n
                        },
                        theirProps: e,
                        slot: {
                            selectedIndex: r
                        },
                        defaultTag: "div",
                        name: "Tabs.List"
                    })
                })),
                j = (0, o.yV)((function(e, t) {
                    let {
                        selectedIndex: n
                    } = k("Tab.Panels"), a = (0, c.T)(t), l = (0, r.useMemo)((() => ({
                        selectedIndex: n
                    })), [n]);
                    return (0, o.sY)({
                        ourProps: {
                            ref: a
                        },
                        theirProps: e,
                        slot: l,
                        defaultTag: "div",
                        name: "Tabs.Panels"
                    })
                })),
                U = (0, o.yV)((function(e, t) {
                    var n, l, i, s;
                    let d = (0, a.M)(),
                        {
                            id: p = `headlessui-tabs-panel-${d}`,
                            tabIndex: f = 0,
                            ...v
                        } = e,
                        {
                            selectedIndex: x,
                            tabs: g,
                            panels: m
                        } = k("Tab.Panel"),
                        h = A("Tab.Panel"),
                        O = (0, r.useRef)(null),
                        y = (0, c.T)(O, t);
                    (0, u.e)((() => h.registerPanel(O)), [h, O]);
                    let T = R("panels"),
                        S = m.indexOf(O); - 1 === S && (S = T);
                    let I = S === x,
                        E = (0, r.useMemo)((() => ({
                            selected: I
                        })), [I]),
                        P = {
                            ref: y,
                            id: p,
                            role: "tabpanel",
                            "aria-labelledby": null == (l = null == (n = g[S]) ? void 0 : n.current) ? void 0 : l.id,
                            tabIndex: I ? f : -1
                        };
                    return I || null != (i = v.unmount) && !i || null != (s = v.static) && s ? (0, o.sY)({
                        ourProps: P,
                        theirProps: v,
                        slot: E,
                        defaultTag: "div",
                        features: D,
                        visible: I,
                        name: "Tabs.Panel"
                    }) : r.createElement(b._, {
                        as: "span",
                        ...P
                    })
                })),
                V = Object.assign(N, {
                    Group: F,
                    List: _,
                    Panels: j,
                    Panel: U
                })
        },
        58901: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return a
                }
            });
            var r = n(56168),
                o = n(78904);

            function a(e, t, n) {
                let [a, l] = (0, r.useState)(n), i = void 0 !== e, s = (0, r.useRef)(i), u = (0, r.useRef)(!1), c = (0, r.useRef)(!1);
                return !i || s.current || u.current ? !i && s.current && !c.current && (c.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (u.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [i ? e : a, (0, o.z)((e => (i || l(e), null == t ? void 0 : t(e))))]
            }
        },
        84830: function(e, t, n) {
            function r(e = {}, t = null, n = []) {
                for (let [r, l] of Object.entries(e)) a(n, o(t, r), l);
                return n
            }

            function o(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function a(e, t, n) {
                if (Array.isArray(n))
                    for (let [r, l] of n.entries()) a(e, o(t, r.toString()), l);
                else n instanceof Date ? e.push([t, n.toISOString()]) : "boolean" == typeof n ? e.push([t, n ? "1" : "0"]) : "string" == typeof n ? e.push([t, n]) : "number" == typeof n ? e.push([t, `${n}`]) : null == n ? e.push([t, ""]) : r(n, t, e)
            }

            function l(e) {
                var t, n;
                let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                if (r) {
                    for (let t of r.elements)
                        if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) return void t.click();
                    null == (n = r.requestSubmit) || n.call(r)
                }
            }
            n.d(t, {
                g: function() {
                    return l
                },
                t: function() {
                    return r
                }
            })
        }
    }
]);