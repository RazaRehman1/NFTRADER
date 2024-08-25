(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9341], {
        82509: function(e, t, s) {
            var n = {
                "./assets_tokens": [8249, 8249],
                "./assets_tokens.json": [8249, 8249],
                "./chart": [79578, 9578],
                "./chart.json": [79578, 9578],
                "./collectibles_top": [32874, 2874],
                "./collectibles_top.json": [32874, 2874],
                "./collections": [56679, 6679],
                "./collections.json": [56679, 6679],
                "./counterparty": [92533, 2533],
                "./counterparty.json": [92533, 2533],
                "./faq_accordion": [94767, 4767],
                "./faq_accordion.json": [94767, 4767],
                "./favourites_collectors": [34465, 4465],
                "./favourites_collectors.json": [34465, 4465],
                "./find_collection": [15341, 5341],
                "./find_collection.json": [15341, 5341],
                "./home_trades": [50678, 678],
                "./home_trades.json": [50678, 678],
                "./my_replies": [37535, 7535],
                "./my_replies.json": [37535, 7535],
                "./nft_bubbles": [69472, 9472],
                "./nft_bubbles.json": [69472, 9472],
                "./notifications": [98510, 8510],
                "./notifications.json": [98510, 8510],
                "./ournumbers": [59040, 9040],
                "./ournumbers.json": [59040, 9040],
                "./past_collectors": [247, 247],
                "./past_collectors.json": [247, 247],
                "./post_details_0": [60334, 334],
                "./post_details_0.json": [60334, 334],
                "./post_details_replies": [94549, 3329],
                "./post_details_replies.json": [94549, 3329],
                "./post_replies": [33874, 3874],
                "./post_replies.json": [33874, 3874],
                "./posts": [4182, 4182],
                "./posts.json": [4182, 4182],
                "./search_collections": [2902, 2902],
                "./search_collections.json": [2902, 2902],
                "./search_collectors": [78337, 8337],
                "./search_collectors.json": [78337, 8337],
                "./single_trade": [49702, 9702],
                "./single_trade.json": [49702, 9702],
                "./single_trade_detail": [660, 660],
                "./single_trade_detail.json": [660, 660],
                "./trades": [38390, 8390],
                "./trades.json": [38390, 8390],
                "./volume_chart": [53449, 3449],
                "./volume_chart.json": [53449, 3449]
            };

            function r(e) {
                if (!s.o(n, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = n[e],
                    r = t[0];
                return s.e(t[1]).then((function() {
                    return s.t(r, 19)
                }))
            }
            r.keys = function() {
                return Object.keys(n)
            }, r.id = 82509, e.exports = r
        },
        65779: function(e, t, s) {
            "use strict";
            s.d(t, {
                SS: function() {
                    return n
                },
                XI: function() {
                    return i
                }
            });
            const n = {
                string: {
                    parse: e => e,
                    serialize: e => `${e}`,
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                },
                integer: {
                    parse: e => parseInt(e),
                    serialize: e => Math.round(e).toFixed(),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                },
                float: {
                    parse: e => parseFloat(e),
                    serialize: e => e.toString(),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                },
                boolean: {
                    parse: e => "true" === e,
                    serialize: e => Boolean(e) ? "true" : "false",
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                },
                timestamp: {
                    parse: e => new Date(parseInt(e)),
                    serialize: e => e.valueOf().toString(),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                },
                isoDateTime: {
                    parse: e => new Date(e),
                    serialize: e => e.toISOString(),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                },
                stringEnum: e => ({
                    parse: t => {
                        const s = t;
                        return e.includes(s) ? s : null
                    },
                    serialize: e => e.toString(),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                }),
                json: () => ({
                    parse: e => {
                        try {
                            return JSON.parse(decodeURIComponent(e))
                        } catch (t) {
                            return null
                        }
                    },
                    serialize: e => encodeURIComponent(JSON.stringify(e)),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                }),
                array: (e, t = ",") => ({
                    parse: s => s.split(t).map((e => decodeURIComponent(e))).map(e.parse).filter((e => null !== e && void 0 !== e)),
                    serialize: s => s.map((t => e.serialize ? e.serialize(t) : `${t}`)).map(encodeURIComponent).join(t),
                    withDefault(e) {
                        return Object.assign(Object.assign({}, this), {
                            defaultValue: e
                        })
                    }
                })
            };
            var r = s(75332),
                a = s(56168);

            function i(e, {
                history: t = "replace"
            } = {}) {
                const s = (0, r.useRouter)(),
                    n = a.useMemo((() => "push" === t ? s.push : s.replace), [t]),
                    i = a.useCallback((() => {
                        if ("undefined" === typeof window) return Object.keys(e).reduce(((t, s) => {
                            const {
                                defaultValue: n
                            } = e[s];
                            return Object.assign(Object.assign({}, t), {
                                [s]: null !== n && void 0 !== n ? n : null
                            })
                        }), {});
                        const t = new URLSearchParams(window.location.search);
                        return Object.keys(e).reduce(((s, n) => {
                            var r, a;
                            const {
                                parse: i,
                                defaultValue: l
                            } = e[n], c = t.get(n), o = null !== c ? null !== (a = null !== (r = i(c)) && void 0 !== r ? r : l) && void 0 !== a ? a : null : null !== l && void 0 !== l ? l : null;
                            return Object.assign(Object.assign({}, s), {
                                [n]: o
                            })
                        }), {})
                    }), [e]);
                return [a.useMemo(i, Object.keys(e).map((e => s.query[e]))), a.useCallback(((t, r) => {
                    const a = i(),
                        l = "function" === typeof t ? t(a) : t;
                    const c = new URLSearchParams(window.location.search);
                    Object.keys(l).forEach((t => {
                        const s = l[t];
                        if (null === s) c.delete(t);
                        else if (void 0 !== s) {
                            const {
                                serialize: n = String
                            } = e[t];
                            c.set(t, n(s))
                        }
                    }));
                    const o = c.toString(),
                        d = window.location.hash;
                    return null === n || void 0 === n ? void 0 : n.call(s, {
                        pathname: s.pathname,
                        hash: d,
                        search: o
                    }, {
                        pathname: window.location.pathname,
                        hash: d,
                        search: o
                    }, r)
                }), [e, n])]
            }
        },
        67355: function(e, t, s) {
            var n = s(56168);

            function r(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var a = r(n);
            ! function(e) {
                if (!e || "undefined" === typeof window) return;
                const t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            const i = n.forwardRef((function({
                style: e = {},
                className: t = "",
                autoFill: s = !1,
                play: r = !0,
                pauseOnHover: i = !1,
                pauseOnClick: l = !1,
                direction: c = "left",
                speed: o = 50,
                delay: d = 0,
                loop: u = 0,
                gradient: x = !1,
                gradientColor: p = "white",
                gradientWidth: f = 200,
                onFinish: m,
                onCycleComplete: h,
                onMount: g,
                children: y
            }, b) {
                const [w, j] = n.useState(0), [v, N] = n.useState(0), [k, C] = n.useState(1), [S, E] = n.useState(!1), I = n.useRef(null), L = b || I, T = n.useRef(null), _ = n.useCallback((() => {
                    if (T.current && L.current) {
                        const e = L.current.getBoundingClientRect(),
                            t = T.current.getBoundingClientRect();
                        let n = e.width,
                            r = t.width;
                        "up" !== c && "down" !== c || (n = e.height, r = t.height), C(s && n && r && r < n ? Math.ceil(n / r) : 1), j(n), N(r)
                    }
                }), [s, L, c]);
                n.useEffect((() => {
                    if (S && (_(), T.current && L.current)) {
                        const e = new ResizeObserver((() => _()));
                        return e.observe(L.current), e.observe(T.current), () => {
                            e && e.disconnect()
                        }
                    }
                }), [_, L, S]), n.useEffect((() => {
                    _()
                }), [_, y]), n.useEffect((() => {
                    E(!0)
                }), []), n.useEffect((() => {
                    "function" === typeof g && g()
                }), []);
                const A = n.useMemo((() => s ? v * k / o : v < w ? w / o : v / o), [s, w, v, k, o]),
                    R = n.useMemo((() => Object.assign(Object.assign({}, e), {
                        "--pause-on-hover": !r || i ? "paused" : "running",
                        "--pause-on-click": !r || i && !l || l ? "paused" : "running",
                        "--width": "up" === c || "down" === c ? "100vh" : "100%",
                        "--transform": "up" === c ? "rotate(-90deg)" : "down" === c ? "rotate(90deg)" : "none"
                    })), [e, r, i, l, c]),
                    Z = n.useMemo((() => ({
                        "--gradient-color": p,
                        "--gradient-width": "number" === typeof f ? `${f}px` : f
                    })), [p, f]),
                    D = n.useMemo((() => ({
                        "--play": r ? "running" : "paused",
                        "--direction": "left" === c ? "normal" : "reverse",
                        "--duration": `${A}s`,
                        "--delay": `${d}s`,
                        "--iteration-count": u ? `${u}` : "infinite",
                        "--min-width": s ? "auto" : "100%"
                    })), [r, c, A, d, u, s]),
                    F = n.useMemo((() => ({
                        "--transform": "up" === c ? "rotate(90deg)" : "down" === c ? "rotate(-90deg)" : "none"
                    })), [c]),
                    B = n.useCallback((e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map(((e, t) => a.default.createElement(n.Fragment, {
                        key: t
                    }, n.Children.map(y, (e => a.default.createElement("div", {
                        style: F,
                        className: "rfm-child"
                    }, e))))))), [F, y]);
                return S ? a.default.createElement("div", {
                    ref: L,
                    style: R,
                    className: "rfm-marquee-container " + t
                }, x && a.default.createElement("div", {
                    style: Z,
                    className: "rfm-overlay"
                }), a.default.createElement("div", {
                    className: "rfm-marquee",
                    style: D,
                    onAnimationIteration: h,
                    onAnimationEnd: m
                }, a.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: T
                }, n.Children.map(y, (e => a.default.createElement("div", {
                    style: F,
                    className: "rfm-child"
                }, e)))), B(k - 1)), a.default.createElement("div", {
                    className: "rfm-marquee",
                    style: D
                }, B(k))) : null
            }));
            t.Z = i
        },
        64403: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/post/[pid]", function() {
                return s(25925)
            }])
        },
        12039: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/chevron_down.bd727213.svg",
                height: 24,
                width: 24
            }
        },
        33210: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/chevron_left_white.502e0f4e.svg",
                height: 24,
                width: 24
            }
        },
        55002: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/plus.02d79da2.svg",
                height: 24,
                width: 24
            }
        },
        71320: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/plus_gray.b336dc6b.svg",
                height: 24,
                width: 24
            }
        },
        25925: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Ss
                }
            });
            var n = s(44453),
                r = s.n(n),
                a = s(8014),
                i = s(57919),
                l = s.n(i),
                c = s(44138),
                o = s(75332),
                d = s(1984),
                u = s(62044),
                x = "/_next/static/media/chat_dark_blue.57436147.svg",
                p = "/_next/static/media/chevron_down_blue.0c5a5388.svg",
                f = "/_next/static/media/lock_white.5d049fca.svg",
                m = s(78913),
                h = s(49481),
                g = s.n(h),
                y = s(56168),
                b = s(72135),
                w = s.n(b),
                j = "/_next/static/media/close_gray.0b50c2fe.svg",
                v = "/_next/static/media/close.1b17f29a.svg",
                N = "/_next/static/media/mascotte_loader.48f6943a.svg",
                k = s(97110),
                C = s(74491),
                S = s(73811),
                E = s(75575),
                I = s(29113),
                L = s(54425),
                T = s.n(L),
                _ = s(42412),
                A = s(55905),
                R = s(3152),
                Z = s(36686),
                D = s(49803),
                F = s(24058),
                B = s(82340),
                O = s(96501),
                U = "/_next/static/media/nfts_wallet_checked.d666ab67.svg",
                H = s(12039),
                V = "/_next/static/media/chevron_up_blue.2c0f1782.svg",
                P = "/_next/static/media/swap_arrows_vertical.32579f65.svg",
                M = s(79327),
                z = s(85429),
                W = s(69324),
                J = s(57996),
                G = s(37601),
                K = s(3710),
                q = function(e) {
                    var t = e.asset,
                        s = e.isCollection,
                        n = e.showDifferent,
                        r = e.isDifferent,
                        i = (0, u.Z)("common").t,
                        l = (0, y.useCallback)((function(e) {
                            var t, s, n = e.split(".");
                            return n[1].length > 2 ? [n[0], null === (s = null === (t = n[1].match(/^.{2}/g)) || void 0 === t ? void 0 : t.concat("...")) || void 0 === s ? void 0 : s.join("")].join(".") : e
                        }), []);
                    return (0, a.jsx)(a.Fragment, {
                        children: s ? (0, a.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "flex gap-x-[16px] items-center lg:gap-x-[24px]",
                                children: [(0, a.jsx)(G.Z, {
                                    src: t.imageUrl,
                                    statusVerification: t.statusVerification,
                                    className: "w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                    badgeClassName: "w-[16px] h-[16px]",
                                    showCollectionTooltip: "NATIVE" !== t.type && "ERC20" !== t.type,
                                    collection: {
                                        name: t.name,
                                        statusVerification: t.statusVerification,
                                        address: t.address,
                                        imageUrl: t.imageUrl,
                                        networkId: t.networkId,
                                        abi: t.abi || [],
                                        type: t.type,
                                        symbol: t.symbol,
                                        createdAt: t.createdAt
                                    },
                                    canReport: !0
                                }), (0, a.jsx)("span", {
                                    className: "text-xs font-semibold text-primary-dark-blue lg:text-base",
                                    children: t.name
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex justify-end items-center gap-x-[17px]",
                                children: [(0, a.jsx)(S.Z, {
                                    text: i("viewOnLabel"),
                                    url: "".concat((0, J.g)(t.networkId, t.address, t.tokenId).find((function(e) {
                                        return "opensea" === e.type || "rarible" === e.type
                                    })).link),
                                    isCustom: !0,
                                    weight: "font-regular",
                                    customColor: "#03045e",
                                    isTargetBlank: !0
                                }), (0, a.jsx)("a", {
                                    href: (0, J.g)(t.networkId, t.address, t.tokenId).find((function(e) {
                                        return "opensea" === e.type || "rarible" === e.type
                                    })).link,
                                    target: "_blank",
                                    children: (0, a.jsx)("img", {
                                        src: (0, J.g)(t.networkId, t.address, t.tokenId).find((function(e) {
                                            return "opensea" === e.type || "rarible" === e.type
                                        })).logo,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            })]
                        }) : (0, a.jsxs)("div", {
                            className: "flex items-center justify-between gap-x-[16px]",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-x-[16px] lg:gap-x-[24px]",
                                children: [(0, a.jsx)(K.Z, {
                                    src: t.imageUrl ? t.imageUrl : "",
                                    hasPlaceholder: !t.imageUrl,
                                    type: t.type,
                                    className: "w-[40px] h-[40px]",
                                    amount: t.amountHumanReadable ? t.amountHumanReadable : "",
                                    name: "".concat(t.name, " #").concat(t.tokenId),
                                    symbol: t.symbol,
                                    isClickable: !0,
                                    address: t.address,
                                    tokenId: t.tokenId,
                                    networkId: (0, R.kb)(t.networkId)
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col items-start gap-y-[4px] lg:flex-row lg:gap-y-[0px]",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-lg font-semibold text-primary-dark-blue lg:text-2xl lg:w-[200px]",
                                        children: "ERC721" === t.type || "ERC1155" === t.type ? "#".concat(t.tokenId ? t.tokenId.length > 10 ? "".concat(t.tokenId.substring(0, 9), "..") : "".concat(t.tokenId) : "") : "".concat(l(t.amountHumanReadable), " ").concat(t.symbol)
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center gap-x-[8px] gap-y-[4px]",
                                        children: [(0, a.jsx)(G.Z, {
                                            src: t.collection.imageUrl ? t.collection.imageUrl : "",
                                            statusVerification: t.collection.statusVerification,
                                            className: "w-[16px] h-[16px] lg:w-[32px] lg:h-[32px]",
                                            badgeClassName: "w-[10px] h-[10px] lg:w-[16px] lg:h-[16px]",
                                            showCollectionTooltip: "NATIVE" !== t.type && "ERC20" !== t.type,
                                            collection: t.collection,
                                            canReport: !0
                                        }), (0, a.jsx)("span", {
                                            className: "text-xs font-semibold text-primary-dark-blue lg:text-base",
                                            children: t.collection.name
                                        }), n && r && (0, a.jsx)("div", {
                                            className: "flex items-center justify-center px-[12px] py-[4px] border-[1px] border-solid border-state-warning rounded-[32px]",
                                            children: i("scoreDifferentLabel")
                                        })]
                                    })]
                                })]
                            }), "ERC20" !== t.type && "NATIVE" !== t.type && (0, a.jsxs)("div", {
                                className: "flex justify-end items-center gap-x-[17px]",
                                children: [(0, a.jsx)(S.Z, {
                                    text: i("viewOnLabel"),
                                    url: "".concat((0, J.g)(t.networkId, t.address, t.tokenId).find((function(e) {
                                        return "opensea" === e.type || "rarible" === e.type
                                    })).link),
                                    isCustom: !0,
                                    weight: "font-regular",
                                    customColor: "#03045e",
                                    isTargetBlank: !0,
                                    className: "hidden lg:inline"
                                }), (0, a.jsx)("a", {
                                    href: "".concat((0, J.g)(t.networkId, t.address, t.tokenId).find((function(e) {
                                        return "opensea" === e.type || "rarible" === e.type
                                    })).link),
                                    target: "_blank",
                                    children: (0, a.jsx)("img", {
                                        src: (0, J.g)(t.networkId, t.address, t.tokenId).find((function(e) {
                                            return "opensea" === e.type || "rarible" === e.type
                                        })).logo,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            })]
                        })
                    })
                },
                X = s(29622),
                Y = "/_next/static/media/nfts_not_available.eb060407.svg",
                Q = {
                    src: "/_next/static/media/nfts_wallet_checked_locked.2c4823e3.svg",
                    height: 17,
                    width: 17
                },
                $ = s(59166),
                ee = s(34288),
                te = s(72027),
                se = s.n(te),
                ne = s(97342),
                re = s(54533),
                ae = function(e) {
                    var t = e.assetsAccountLeft,
                        s = e.assetsAccountRight,
                        n = e.onDoesNotOwn,
                        r = e.jwtToken,
                        i = e.networkId,
                        l = e.isLocked,
                        c = e.tooltipPosition,
                        o = (0, y.useRef)(!1),
                        d = (0, u.Z)("common").t,
                        x = (0, y.useRef)(""),
                        p = (0, y.useState)(!1),
                        f = p[0],
                        m = p[1],
                        h = (0, y.useState)(),
                        g = h[0],
                        b = h[1],
                        w = (0, y.useState)(),
                        j = w[0],
                        v = w[1],
                        N = (0, y.useState)(),
                        k = (N[0], N[1]),
                        C = (0, y.useState)(),
                        S = (C[0], C[1]),
                        E = (0, y.useState)(!1),
                        I = E[0],
                        L = E[1],
                        T = (0, y.useState)(!1),
                        _ = T[0],
                        A = T[1],
                        Z = (0, re.T)(),
                        D = function(e, t) {
                            var s = {
                                networkId: e,
                                address: t.user.address,
                                tokens: []
                            };
                            return t.assets.filter((function(e) {
                                return "ERC1155" === e.type || "ERC721" === e.type
                            })).forEach((function(e) {
                                s.tokens.push({
                                    collection: e.collection.address,
                                    tokenId: e.tokenId,
                                    type: e.type,
                                    balance: "ERC721" === e.type ? 1 : e.amount ? Number(e.amount) : 1
                                })
                            })), s
                        },
                        F = function(e, t) {
                            var s = t.findIndex((function(t) {
                                return e.address.toLowerCase() === t.collection.toLowerCase() && e.tokenId === t.tokenId && !0 === t.checked
                            })) > -1;
                            return s || !f && o.current && m(!0), s
                        };
                    return (0, y.useEffect)((function() {
                        return o.current = !0, x.current = (0, M.Z)(),
                            function() {
                                var e = (0, $.f)("nftBalance");
                                (0, ee.$Y)(e, D(i, t), r).then((function(n) {
                                    var a = n.data;
                                    o.current && k(t.user), s ? (0, ee.$Y)(e, D(i, s), r).then((function(e) {
                                        var t = e.data;
                                        o.current && (S(s.user), v(t), b(a), L(!0))
                                    })).catch((function(e) {
                                        o.current && (A(!0), L(!1)), (0, ne.$)(e, Z)
                                    })) : o.current && (b(a), L(!0))
                                })).catch((function(e) {
                                    o.current && (A(!0), L(!1)), console.log(e)
                                }))
                            }(),
                            function() {
                                o.current = !1
                            }
                    }), []), (0, y.useEffect)((function() {
                        f && n()
                    }), [f]), (0, a.jsx)(a.Fragment, {
                        children: I ? (0, a.jsxs)("div", {
                            className: "flex gap-x-[6px] cursor-pointer",
                            "data-for": x.current,
                            "data-tip": !0,
                            "data-event": "click",
                            children: [(0, a.jsx)("img", {
                                src: f ? Y : l ? Q : U,
                                width: 16,
                                height: 16
                            }), (0, a.jsx)("span", {
                                className: "rubik text-xs font-semibold ".concat(l ? "text-primary-gray" : f ? "text-state-warning" : "text-primary-blue"),
                                children: d(f ? "NFTsWalletCheckedNotOwnLabel" : "NFTsWalletCheckedLabel")
                            }), (0, a.jsx)(z.Z, {
                                id: x.current,
                                type: "light",
                                effect: "solid",
                                className: "".concat(se().tooltip, " scrollbar-hide"),
                                clickable: !0,
                                place: c,
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-y-[16px] p-[20px]",
                                    children: [g && t.assets.filter((function(e) {
                                        return "ERC721" === e.type || "ERC1155" === e.type
                                    })).map((function(e, t) {
                                        return (0, a.jsxs)("div", {
                                            className: "flex items-center gap-x-[8px]",
                                            children: [(0, a.jsx)(K.Z, {
                                                src: e.imageUrl,
                                                hasPlaceholder: !e.imageUrl,
                                                type: e.type,
                                                amount: "ERC1155" === e.type ? e.amount : void 0,
                                                name: "".concat(e.name, " #").concat(e.tokenId),
                                                className: "w-[40px] h-[40px]",
                                                hideTooltip: !0,
                                                isClickable: !0,
                                                address: e.address,
                                                tokenId: e.tokenId,
                                                networkId: (0, R.kb)(e.networkId)
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col items-start justify-start gap-y-[4px]",
                                                children: [(0, a.jsxs)("span", {
                                                    className: "text-sm text-primary-dark-blue font-regular",
                                                    children: [e.name, " #", e.tokenId.length > 20 ? "".concat(e.tokenId.substring(0, 20), "...") : e.tokenId]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex items-center gap-x-[4px]",
                                                    children: [(0, a.jsx)("img", {
                                                        src: F(e, g) ? U : Y,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("span", {
                                                        className: "rubik ".concat(F(e, g) ? "text-primary-blue" : "text-state-warning", " font-semibold text-xs"),
                                                        children: F(e, g) ? d("isNFTAvailableLabel") : d("isNFTNotAvailableLabel")
                                                    })]
                                                })]
                                            })]
                                        }, "".concat(e.address, "-").concat(e.tokenId))
                                    })), j && s && s.assets.filter((function(e) {
                                        return "ERC721" === e.type || "ERC1155" === e.type
                                    })).map((function(e, t) {
                                        return (0, a.jsxs)("div", {
                                            className: "flex items-center gap-x-[8px]",
                                            children: [(0, a.jsx)(K.Z, {
                                                src: e.imageUrl,
                                                hasPlaceholder: !e.imageUrl,
                                                type: e.type,
                                                amount: "ERC1155" === e.type ? e.amount : void 0,
                                                name: "".concat(e.name, " #").concat(e.tokenId),
                                                className: "w-[40px] h-[40px]",
                                                hideTooltip: !0,
                                                isClickable: !0,
                                                address: e.address,
                                                tokenId: e.tokenId,
                                                networkId: (0, R.kb)(e.networkId)
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col gap-y-[4px]",
                                                children: [(0, a.jsxs)("span", {
                                                    className: "text-sm text-primary-dark-blue font-regular",
                                                    children: [e.name, " #", e.tokenId.length > 20 ? "".concat(e.tokenId.substring(0, 20), "...") : e.tokenId]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex items-center gap-x-[4px]",
                                                    children: [(0, a.jsx)("img", {
                                                        src: F(e, j) ? U : Y,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("span", {
                                                        className: "rubik ".concat(F(e, j) ? "text-primary-blue" : "text-state-warning", " font-semibold text-xs"),
                                                        children: F(e, j) ? d("isNFTAvailableLabel") : d("isNFTNotAvailableLabel")
                                                    })]
                                                })]
                                            })]
                                        }, "".concat(e.address, "-").concat(e.tokenId))
                                    }))]
                                })
                            })]
                        }) : (0, a.jsx)(a.Fragment, {
                            children: _ ? (0, a.jsx)("div", {
                                className: "flex items-center gap-x-[8px]",
                                children: (0, a.jsx)("span", {
                                    className: "rubik text-state-warning font-semibold text-xs",
                                    children: d("errorNFTsWalletCheckedLabel")
                                })
                            }) : (0, a.jsxs)("div", {
                                className: "flex items-center gap-x-[8px]",
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(se().skeleton, " w-[16px] h-[16px] rounded-[100%]")
                                }), (0, a.jsx)("div", {
                                    className: "".concat(se().skeleton, " w-[200px] h-[16px] rounded-[16px]")
                                })]
                            })
                        })
                    })
                },
                ie = s(11852),
                le = s(19755),
                ce = s(47257),
                oe = s(90197),
                de = s(31023),
                ue = s(25689),
                xe = s(10208),
                pe = s(83516),
                fe = s(24789),
                me = s(66986);

            function he(e, t, s, n, r, a, i) {
                try {
                    var l = e[a](i),
                        c = l.value
                } catch (o) {
                    return void s(o)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function ge(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var ye = function(e) {
                    var t, s = e.postId,
                        n = e.onLoad,
                        i = e.jwtToken,
                        l = e.account,
                        c = (0, u.Z)("common").t,
                        d = (0, o.useRouter)(),
                        x = (0, fe.Ge)().connector,
                        p = (0, y.useRef)(null),
                        f = (0, y.useState)(!1),
                        m = f[0],
                        h = f[1],
                        g = (0, y.useState)(void 0),
                        b = g[0],
                        L = g[1],
                        J = (0, y.useState)(!1),
                        G = J[0],
                        K = J[1],
                        Y = (0, y.useState)(!1),
                        Q = Y[0],
                        $ = Y[1],
                        ee = (0, y.useState)(!1),
                        te = ee[0],
                        se = ee[1],
                        ne = (0, y.useRef)(""),
                        re = (0, y.useRef)(""),
                        ye = function() {
                            var e, t = (e = r().mark((function e() {
                                var t, s, n, a, i;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = ue.hexlify(xe.Y0("".concat(oe.ov._MESSAGE_TO_SIGN))), !ge(x, pe.zw)) {
                                                e.next = 6;
                                                break
                                            }
                                            s = null === (n = x.walletConnectProvider) || void 0 === n ? void 0 : n.connector.signPersonalMessage([t, l]), e.next = 21;
                                            break;
                                        case 6:
                                            if (!ge(x, me.J)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 9, x.getProvider();
                                        case 9:
                                            return a = e.sent, e.next = 12, a.send("personal_sign", [t, l]);
                                        case 12:
                                            s = e.sent, e.next = 21;
                                            break;
                                        case 15:
                                            return e.next = 17, new de.Web3Provider(window.ethereum);
                                        case 17:
                                            return i = e.sent, e.next = 20, i.send("personal_sign", [t, l]);
                                        case 20:
                                            s = e.sent;
                                        case 21:
                                            return e.abrupt("return", s);
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    s = arguments;
                                return new Promise((function(n, r) {
                                    var a = e.apply(t, s);

                                    function i(e) {
                                        he(a, n, r, i, l, "next", e)
                                    }

                                    function l(e) {
                                        he(a, n, r, i, l, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        be = (0, y.useCallback)((function(e) {
                            return T()(1e3 * e).format("MMMM D YYYY, h:mm a")
                        }), []),
                        we = (0, y.useCallback)((function(e) {
                            return e === oe.RW.ACTIVE ? "time" : "descriptive"
                        }), []),
                        je = (0, y.useCallback)((function(e) {
                            return e === oe.RW.ACTIVE ? void 0 : {
                                status: A.u[e]
                            }
                        }), []),
                        ve = (0, y.useCallback)((function(e, t) {
                            if (e === oe.RW.ACTIVE) return t
                        }), []),
                        Ne = (0, y.useCallback)((function(e, t) {
                            return e.slice(t).map((function(e) {
                                return e.imageUrl
                            }))
                        }), []),
                        ke = (0, y.useCallback)((function(e, t, s) {
                            return e.slice(t).map((function(e) {
                                return s ? e.name : "".concat(e.name, " #").concat(e.tokenId)
                            }))
                        }), []),
                        Ce = (0, y.useCallback)((function(e) {
                            return c("MESSAGE_".concat(e))
                        }), []);
                    return (0, y.useEffect)((function() {
                        re.current = (0, M.Z)()
                    }), []), (0, y.useEffect)((function() {
                        p.current = new oe.ov({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        })
                    }), []), (0, y.useEffect)((function() {
                        b && n(b)
                    }), [b]), (0, y.useEffect)((function() {
                        p.current && (p.current.config({
                            backendURL: "https://api.nfttrader.io"
                        }), $(!0), p.current.getPost(s).then((function(e) {
                            if (e) {
                                var t = e;
                                Object.keys(t).length > 0 ? (L(t), ne.current = (0, M.Z)(), se(!1)) : se(!0), $(!1)
                            }
                        })).catch((function(e) {
                            $(!1), se(!0), console.error(e)
                        })))
                    }), []), (0, a.jsx)(a.Fragment, {
                        children: te ? (0, a.jsx)("div", {
                            className: "flex flex-col w-full gap-y-[20px] lg:gap-y-[22px]",
                            children: (0, a.jsx)("div", {
                                className: "flex w-full lg:px-[24px]",
                                children: (0, a.jsx)("div", {
                                    className: "flex items-center justify-center w-full min-h-[300px] rounded-[16px] rounded-tl-[0px] bg-primary-blue p-[24px] lg:min-h-[384px]",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-y-[40px] items-center",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col items-center justify-between w-[128px] h-[104px] overflow-hidden",
                                            children: [(0, a.jsx)("img", {
                                                src: k.Z.src,
                                                className: "w-[60px] h-[60px] relative z-[1]"
                                            }), (0, a.jsx)("div", {
                                                className: "w-[128px] h-[16px] rounded-[100%] bg-primary-dark-blue relative"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "text-lg font-semibold text-primary-white text-center",
                                            children: [c("checkingStatusPostLabelError"), (0, a.jsxs)("div", {
                                                className: "flex pt-[24px] gap-[24px]",
                                                children: [(0, a.jsx)(ie.Z, {
                                                    text: "Retry",
                                                    type: {
                                                        class: "secondary",
                                                        icon: !1,
                                                        hasColoredBg: !0
                                                    },
                                                    initialState: {
                                                        state: "default"
                                                    },
                                                    onClick: function() {
                                                        location.reload()
                                                    },
                                                    size: "small",
                                                    className: "px-[32px] py-[10px]"
                                                }), (0, a.jsx)("a", {
                                                    href: "/posts",
                                                    children: (0, a.jsx)(ie.Z, {
                                                        text: c("backToTradingCenterLabel"),
                                                        type: {
                                                            class: "secondary",
                                                            icon: !1,
                                                            hasColoredBg: !0
                                                        },
                                                        initialState: {
                                                            state: "default"
                                                        },
                                                        size: "small",
                                                        className: "px-[32px] py-[10px]"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        }) : (0, a.jsx)(a.Fragment, {
                            children: !Q && b ? (0, a.jsxs)("div", {
                                className: "flex flex-col w-full gap-y-[20px] lg:gap-y-[22px]",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col-reverse items-start gap-y-[24px] lg:flex-row lg:items-center lg:justify-between lg:gap-y-[0px]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center gap-x-[8px] lg:gap-x-[16px]",
                                        children: [(0, a.jsx)(C.Z, {
                                            address: b.creator.address,
                                            src: b.creator.imageUrl,
                                            sizesClassNames: "w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                            jazziconSize: {
                                                defaultSize: 32,
                                                breakpoints: [1024],
                                                sizes: [40]
                                            },
                                            isNFT: b.creator.isNft ? 1 : 0
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[4px]",
                                            children: [(0, a.jsx)(S.Z, {
                                                text: b.creator.username ? "@".concat(b.creator.username) : c("usernameNotSetLabel"),
                                                url: "/".concat(b.creator.username ? b.creator.username : b.creator.address),
                                                customColor: "#03045e",
                                                isCustom: !0,
                                                className: "text-xs font-semibold lg:text-xs",
                                                isTargetBlank: !0
                                            }), (0, a.jsx)(S.Z, {
                                                text: (0, E.N)(b.creator.address),
                                                url: (0, I.w)(b.networkId, b.creator.address),
                                                isCustom: !0,
                                                customColor: "#979dac",
                                                className: "rubik text-sm",
                                                isTargetBlank: !0,
                                                weight: "font-regular"
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center justify-end w-full gap-x-[12px] lg:w-auto",
                                        children: [(0, a.jsx)("span", {
                                            className: "rubik text-xs font-light text-primary-dark-blue lg:flex-none",
                                            children: be(b.creationDate)
                                        }), (0, a.jsx)(_.Z, {
                                            mode: {
                                                type: we(b.status)
                                            },
                                            status: je(b.status),
                                            expirationDate: ve(b.status, b.expirationDate)
                                        }), (t = b.networkId, (0, a.jsx)(a.Fragment, {
                                            children: re.current ? (0, a.jsxs)("div", {
                                                className: "w-[24px] relative",
                                                children: [(0, a.jsx)("img", {
                                                    src: (0, R.l2)(t),
                                                    className: "w-[24px]",
                                                    "data-for": "".concat(re.current),
                                                    "data-tip": !0
                                                }), (0, a.jsx)(z.Z, {
                                                    id: re.current,
                                                    backgroundColor: "#01085a",
                                                    effect: "solid",
                                                    children: (0, a.jsx)("span", {
                                                        className: "rubik text-xs text-primary-white font-regular capitalize",
                                                        children: (0, R.qe)(t)
                                                    })
                                                })]
                                            }) : (0, a.jsx)(a.Fragment, {})
                                        })), (0, a.jsx)("div", {
                                            className: "flex items-center justify-center lg:w-[52px] lg:h-[52px]",
                                            onClick: function() {
                                                return d.push("/trading-center")
                                            },
                                            children: (0, a.jsx)("img", {
                                                src: v,
                                                className: "cursor-pointer ".concat(w().hoverFilterDarkBlue, " lg:w-[24px] lg:h-[24px]")
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex w-full lg:px-[24px]",
                                    children: (0, a.jsx)("div", {
                                        className: "".concat(w().post, " flex flex-col gap-y-[16px] w-full relative"),
                                        children: (0, a.jsxs)("div", {
                                            className: "w-full border-solid border-[1px] border-gray-200 rounded-[16px] rounded-tl-[32px] bg-primary-white z-[1] p-[24px] ".concat(b.type === oe.JH.A1 || b.type === oe.JH.B1 || b.type === oe.JH.C1 ? "pb-[0]" : "pb-[24px]", " transition-shadow duration-300 hover:shadow-lg"),
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, a.jsx)(Z.Z, {
                                                    children: Ce(b.messages[0].type)
                                                }), (0, a.jsx)("div", {
                                                    className: "hidden items-center gap-x-[20px] lg:flex",
                                                    children: (b.type === oe.JH.A1 || b.type === oe.JH.B1 || b.type === oe.JH.C1) && (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsx)(X.Z, {
                                                            assetsAccountLeft: b.assets.offered ? b.assets.offered : [],
                                                            networkId: b.networkId,
                                                            account: b.creator.address
                                                        }), (0, a.jsx)(ae, {
                                                            assetsAccountLeft: {
                                                                user: b.creator,
                                                                assets: b.assets.offered ? b.assets.offered : []
                                                            },
                                                            jwtToken: i,
                                                            networkId: b.networkId,
                                                            onDoesNotOwn: function() {},
                                                            isLocked: !1,
                                                            tooltipPosition: "bottom"
                                                        })]
                                                    })
                                                })]
                                            }), (0, a.jsx)(Z.Z, {
                                                children: Ce(b.messages[1].type)
                                            }), (0, a.jsx)("div", {
                                                className: "mt-[16px] w-full x2l:gap-y-[0px] x2l:flex-row",
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex flex-col gap-y-[12px]",
                                                    children: [(b.type === oe.JH.A1 || b.type === oe.JH.B1) && b.assets.offered && (0, a.jsxs)(a.Fragment, {
                                                        children: [G ? (0, a.jsx)("div", {
                                                            className: "flex flex-col gap-y-[24px]",
                                                            children: (b.type === oe.JH.A1 || b.type === oe.JH.B1) && b.assets.offered && b.assets.offered.map((function(e, t) {
                                                                return (0, a.jsx)(q, {
                                                                    asset: e,
                                                                    isCollection: !1,
                                                                    showDifferent: !1,
                                                                    isDifferent: !1
                                                                }, "".concat(e.address, "-").concat(t))
                                                            }))
                                                        }) : (0, a.jsx)(W.Z, {
                                                            assets: b.assets.offered,
                                                            mode: "STANDARD",
                                                            maxItemDisplayedDesktop: 8,
                                                            maxItemDisplayedMobile: 5,
                                                            classNameAssetCard: "w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]",
                                                            classNameCounterAssets: "w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                                        }), (0, a.jsxs)("div", {
                                                            className: "".concat(w().hoverFilterDarkBlue, " ").concat(G ? "hidden" : "flex", " justify-end items-center w-full gap-x-[8px] mt-[4px] cursor-pointer"),
                                                            onClick: function() {
                                                                K(!0)
                                                            },
                                                            children: [(0, a.jsx)("span", {
                                                                className: "text-sm font-semibold text-primary-blue",
                                                                children: c("detailsLabel")
                                                            }), (0, a.jsx)("img", {
                                                                src: H.Z.src,
                                                                width: 16,
                                                                height: 16
                                                            })]
                                                        }), (0, a.jsx)("div", {
                                                            className: "".concat(G ? "flex" : "hidden", " flex-col mt-[32px]"),
                                                            children: (0, a.jsx)("div", {
                                                                className: "flex items-center justify-end",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "".concat(w().hoverFilterDarkBlue, " flex items-center gap-x-[8px] cursor-pointer"),
                                                                    onClick: function() {
                                                                        K(!1)
                                                                    },
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-sm font-semibold text-primary-blue",
                                                                        children: c("closeLabel")
                                                                    }), (0, a.jsx)("img", {
                                                                        src: V,
                                                                        className: "w-[16px] h-[16px]"
                                                                    })]
                                                                })
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "flex flex-col gap-y-[18px] border-[1px] border-gray-200 border-solid border-x-0 border-b-0 bg-gray-100 rounded-[16px] rounded-t-[0px] -mx-[24px] p-[32px] relative lg:gap-y-[16px]",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "flex items-center justify-center w-[40px] h-[40px] absolute left-[50%] -top-[20px] -translate-x-[50%]",
                                                                children: (0, a.jsx)("img", {
                                                                    src: P,
                                                                    width: 24,
                                                                    height: 24
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "flex items-center justify-center gap-x-[4px]",
                                                                children: [b.type === oe.JH.A1 && (0, a.jsxs)(a.Fragment, {
                                                                    children: [(0, a.jsx)("img", {
                                                                        src: D.Z.src,
                                                                        className: "w-[16px]"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "rubik font-semibold text-xs text-primary-dark-blue lg:text-sm",
                                                                        children: [c("onlyAcceptExtendedLabel"), ":"]
                                                                    })]
                                                                }), b.type === oe.JH.B1 && (0, a.jsxs)(a.Fragment, {
                                                                    children: [(0, a.jsx)("img", {
                                                                        src: F.Z.src,
                                                                        className: "w-[16px]"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "rubik font-semibold text-xs text-primary-dark-blue lg:text-sm",
                                                                        children: [c("wouldLoveExtendedLabel"), ":"]
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "flex flex-wrap justify-center items-center gap-x-[8px] gap-y-[8px] lg:gap-x-[4px] lg:gap-y-[8px]",
                                                                children: b.assets.wanted && (0, a.jsx)(a.Fragment, {
                                                                    children: b.assets.wanted.map((function(e, t) {
                                                                        return (0, a.jsx)(B.Z, {
                                                                            collection: {
                                                                                name: e.name,
                                                                                statusVerification: e.statusVerification,
                                                                                address: e.address,
                                                                                imageUrl: e.imageUrl,
                                                                                networkId: e.networkId,
                                                                                abi: e.abi || [],
                                                                                type: e.type,
                                                                                symbol: e.symbol,
                                                                                createdAt: e.createdAt
                                                                            },
                                                                            avatarClassName: "w-[24px] h-[24px]",
                                                                            avatarBadgeClassName: "w-[12px] h-[12px]",
                                                                            shrinkText: !1
                                                                        }, "collection-".concat(e.address, "-").concat(t))
                                                                    }))
                                                                })
                                                            })]
                                                        })]
                                                    }), (b.type === oe.JH.A2 || b.type === oe.JH.B2) && (0, a.jsx)(a.Fragment, {
                                                        children: b.assets.wanted && (0, a.jsxs)(a.Fragment, {
                                                            children: [G ? (0, a.jsx)("div", {
                                                                className: "flex flex-col gap-y-[24px]",
                                                                children: (b.type === oe.JH.A2 || b.type === oe.JH.B2) && b.assets.wanted && b.assets.wanted.map((function(e, t) {
                                                                    return (0, a.jsx)(q, {
                                                                        asset: e,
                                                                        isCollection: !0,
                                                                        showDifferent: !1,
                                                                        isDifferent: !1
                                                                    }, "".concat(e.address, "-").concat(t))
                                                                }))
                                                            }) : (0, a.jsxs)("div", {
                                                                className: "flex flex-wrap gap-x-[8px] gap-y-[8px] lg:gap-x-[12px] lg:gap-y-[12px]",
                                                                children: [b.assets.wanted.length > 4 ? (0, a.jsx)(a.Fragment, {
                                                                    children: b.assets.wanted.slice(0, 4).map((function(e, t) {
                                                                        return (0, a.jsx)(B.Z, {
                                                                            collection: {
                                                                                name: e.name,
                                                                                statusVerification: e.statusVerification,
                                                                                address: e.address,
                                                                                imageUrl: e.imageUrl,
                                                                                networkId: e.networkId,
                                                                                abi: e.abi || [],
                                                                                type: e.type,
                                                                                symbol: e.symbol,
                                                                                createdAt: e.createdAt
                                                                            },
                                                                            avatarClassName: "w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]",
                                                                            avatarBadgeClassName: "w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]",
                                                                            shrinkText: !0
                                                                        }, "collection-".concat(e.address, "-").concat(t))
                                                                    }))
                                                                }) : (0, a.jsx)(a.Fragment, {
                                                                    children: b.assets.wanted.map((function(e, t) {
                                                                        return (0, a.jsx)(B.Z, {
                                                                            collection: {
                                                                                name: e.name,
                                                                                statusVerification: e.statusVerification,
                                                                                address: e.address,
                                                                                imageUrl: e.imageUrl,
                                                                                networkId: e.networkId,
                                                                                abi: e.abi || [],
                                                                                type: e.type,
                                                                                symbol: e.symbol,
                                                                                createdAt: e.createdAt
                                                                            },
                                                                            avatarClassName: "w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]",
                                                                            avatarBadgeClassName: "w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]",
                                                                            shrinkText: !0
                                                                        }, "collection-".concat(e.address, "-").concat(t))
                                                                    }))
                                                                }), b.assets.wanted.length > 4 && (0, a.jsx)(O.Z, {
                                                                    src: Ne(b.assets.wanted, 4),
                                                                    counter: b.assets.wanted.length - 5 + 1,
                                                                    names: ke(b.assets.wanted, 4, !0),
                                                                    className: "w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]",
                                                                    isMini: !1
                                                                })]
                                                            }), (0, a.jsxs)("div", {
                                                                className: "".concat(w().hoverFilterDarkBlue, " ").concat(G ? "hidden" : "flex", " justify-end items-center w-full gap-x-[8px] mt-[4px] cursor-pointer"),
                                                                onClick: function() {
                                                                    K(!0)
                                                                },
                                                                children: [(0, a.jsx)("span", {
                                                                    className: "text-sm font-semibold text-primary-blue",
                                                                    children: c("detailsLabel")
                                                                }), (0, a.jsx)("img", {
                                                                    src: H.Z.src,
                                                                    width: 16,
                                                                    height: 16
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "".concat(G ? "flex" : "hidden", " flex-col mt-[32px]"),
                                                                children: (0, a.jsx)("div", {
                                                                    className: "flex items-center justify-end",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "".concat(w().hoverFilterDarkBlue, " flex items-center gap-x-[8px] cursor-pointer"),
                                                                        onClick: function() {
                                                                            K(!1)
                                                                        },
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "text-sm font-semibold text-primary-blue",
                                                                            children: c("closeLabel")
                                                                        }), (0, a.jsx)("img", {
                                                                            src: V,
                                                                            className: "w-[16px] h-[16px]"
                                                                        })]
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }), b.type === oe.JH.C1 && (0, a.jsxs)(a.Fragment, {
                                                        children: [b.assets.offered && (0, a.jsx)(a.Fragment, {
                                                            children: G ? (0, a.jsx)("div", {
                                                                className: "flex flex-col gap-y-[24px]",
                                                                children: b.type === oe.JH.C1 && b.assets.offered && b.assets.offered.map((function(e, t) {
                                                                    return (0, a.jsx)(q, {
                                                                        asset: e,
                                                                        isCollection: !1,
                                                                        showDifferent: !1,
                                                                        isDifferent: !1
                                                                    }, "".concat(e.address, "-").concat(t))
                                                                }))
                                                            }) : (0, a.jsx)(W.Z, {
                                                                assets: b.assets.offered,
                                                                mode: "STANDARD",
                                                                maxItemDisplayedDesktop: 8,
                                                                maxItemDisplayedMobile: 5,
                                                                classNameAssetCard: "w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]",
                                                                classNameCounterAssets: "w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "flex gap-x-[6px] cursor-pointer lg:hidden",
                                                            "data-for": ne.current,
                                                            "data-tip": !0,
                                                            children: [(0, a.jsx)("img", {
                                                                src: U,
                                                                width: 16,
                                                                height: 16
                                                            }), (0, a.jsx)("span", {
                                                                className: "rubik text-primary-blue text-xs font-semibold",
                                                                children: c("NFTsWalletCheckedLabel")
                                                            }), (0, a.jsx)(z.Z, {
                                                                id: ne.current,
                                                                place: "bottom",
                                                                type: "dark",
                                                                backgroundColor: "#01085a",
                                                                children: c("creatorOfThePostOwnsNFTsLabel")
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "".concat(w().hoverFilterDarkBlue, " ").concat(G ? "hidden" : "flex", " justify-end items-center w-full gap-x-[8px] mt-[4px] cursor-pointer"),
                                                            onClick: function() {
                                                                K(!0)
                                                            },
                                                            children: [(0, a.jsx)("span", {
                                                                className: "text-sm font-semibold text-primary-blue",
                                                                children: c("detailsLabel")
                                                            }), (0, a.jsx)("img", {
                                                                src: H.Z.src,
                                                                width: 16,
                                                                height: 16
                                                            })]
                                                        }), (0, a.jsx)("div", {
                                                            className: "".concat(G ? "flex" : "hidden", " flex-col mt-[32px]"),
                                                            children: (0, a.jsx)("div", {
                                                                className: "flex items-center justify-end",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "".concat(w().hoverFilterDarkBlue, " flex items-center gap-x-[8px] cursor-pointer"),
                                                                    onClick: function() {
                                                                        K(!1)
                                                                    },
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-sm font-semibold text-primary-blue",
                                                                        children: c("closeLabel")
                                                                    }), (0, a.jsx)("img", {
                                                                        src: V,
                                                                        width: 16,
                                                                        height: 16
                                                                    })]
                                                                })
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "flex items-center justify-center gap-y-[18px] border-[1px] border-gray-200 border-solid border-x-0 border-b-0 bg-gray-100 rounded-[16px] rounded-t-[0px] -mx-[24px] p-[32px] relative lg:gap-y-[16px]",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "flex items-center justify-center w-[40px] h-[40px] absolute left-[50%] -top-[20px] -translate-x-[50%]",
                                                                children: (0, a.jsx)("img", {
                                                                    src: P,
                                                                    width: 24,
                                                                    height: 24
                                                                })
                                                            }), (0, a.jsx)("span", {
                                                                className: "rubik font-semibold text-xs text-primary-dark-blue lg:text-sm",
                                                                children: c("noPreferencesExtendedLabel")
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                }), b.creator.address == l && (0, a.jsx)("div", {
                                    className: "flex flex-row-reverse w-full px-[24px]",
                                    children: (0, a.jsx)(ie.Z, {
                                        text: c("deletePostLabel"),
                                        type: {
                                            class: "secondary",
                                            hasColoredBg: !1,
                                            icon: !0
                                        },
                                        initialState: {
                                            state: "default"
                                        },
                                        iconSrc: le.Z.src,
                                        size: "small",
                                        onClick: function() {
                                            h(!0)
                                        },
                                        className: "w-[179px] h-[40px]"
                                    })
                                }), m && (0, a.jsx)(ce.Z, {
                                    modalTitle: c("deleteThePostLabel"),
                                    modalDescription: c("alertRemovePostLabel"),
                                    action: function(e) {
                                        e("loading"), ye().then((function(t) {
                                            p.current && p.current.deletePost(s, b.creator.address, t).then((function(t) {
                                                e("default"), h(!1), d.push("/trading-center")
                                            })).catch((function(t) {
                                                console.error(t), e("disabled")
                                            }))
                                        })).catch((function(t) {
                                            console.log(t), e("default")
                                        }))
                                    },
                                    actionClose: function() {
                                        h(!1)
                                    },
                                    buttonsText: [c("yesDeleteItLabel"), c("cancelLabel")],
                                    isOpen: !0,
                                    closeOnAction: !1
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "flex flex-col w-full gap-y-[20px] lg:gap-y-[22px]",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col-reverse items-start gap-y-[24px] lg:flex-row lg:items-center lg:justify-between lg:gap-y-[0px]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center gap-x-[8px] lg:gap-x-[16px]",
                                        children: [(0, a.jsx)("div", {
                                            className: "".concat(w().skeleton, " w-[32px] h-[32px] rounded-full lg:w-[40px] lg:h-[40px]")
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[8px]",
                                            children: [(0, a.jsx)("span", {
                                                className: "".concat(w().skeleton, " w-[80px] h-[10px] rounded-full")
                                            }), (0, a.jsx)("span", {
                                                className: "".concat(w().skeleton, " w-[100px] h-[10px] rounded-full")
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center justify-end w-full gap-x-[12px] lg:w-auto",
                                        children: [(0, a.jsx)("span", {
                                            className: "".concat(w().skeleton, " w-[130px] h-[10px] rounded-full lg:flex-none")
                                        }), (0, a.jsx)("div", {
                                            className: "".concat(w().skeleton, " w-[70px] h-[31px] rounded-full")
                                        }), (0, a.jsx)("div", {
                                            className: "".concat(w().skeleton, " w-[24px] h-[24px] rounded-full")
                                        }), (0, a.jsx)("div", {
                                            className: "flex items-center justify-center lg:w-[52px] lg:h-[52px]",
                                            children: (0, a.jsx)("img", {
                                                src: j,
                                                className: "lg:w-[24px] lg:h-[24px]"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex w-full lg:px-[24px]",
                                    children: (0, a.jsx)("div", {
                                        className: "flex items-center justify-center w-full min-h-[300px] rounded-[16px] rounded-tl-[0px] bg-primary-blue p-[24px] lg:min-h-[384px]",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[40px] items-center",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col items-center justify-between w-[128px] h-[104px] overflow-hidden",
                                                children: [(0, a.jsx)("img", {
                                                    src: N,
                                                    className: "".concat(w().loader, " relative z-[1]"),
                                                    width: 84,
                                                    height: 67.67
                                                }), (0, a.jsx)("div", {
                                                    className: "w-[128px] h-[16px] rounded-[100%] bg-primary-dark-blue relative"
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "text-lg font-semibold text-primary-white text-center",
                                                children: c("checkingStatusPostLabel")
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                be = s(60077),
                we = function(e) {
                    var t = e.percentage,
                        s = e.className,
                        n = (0, y.useState)(),
                        r = n[0],
                        i = n[1];
                    return (0, y.useEffect)((function() {
                        i((0, M.Z)())
                    }), []), (0, y.useEffect)((function() {
                        r && (0, be.Z)({
                            targets: document.getElementById(r),
                            width: "".concat(t, "%"),
                            duration: 300,
                            easing: "easeInQuint"
                        })
                    }), [t, r]), (0, a.jsx)(a.Fragment, {
                        children: r && (0, a.jsx)("div", {
                            className: "w-full h-[4px] ".concat(s),
                            children: (0, a.jsx)("div", {
                                id: r,
                                className: "absolute h-[4px] bg-primary-blue top-[0] left-[0]"
                            })
                        })
                    })
                },
                je = function(e) {
                    var t = e.replyBubbleStatus,
                        s = e.onClickCustomize,
                        n = e.replyMessage,
                        r = e.isLocked,
                        i = e.isReadOnly,
                        l = e.isCreator,
                        c = (0, y.useState)(t),
                        o = c[0],
                        d = c[1],
                        x = (0, u.Z)("common").t;
                    return (0, y.useEffect)((function() {
                        d(t)
                    }), [t]), (0, a.jsx)("div", {
                        className: "flex items-center justify-center w-fit ".concat("SKELETON" === o ? "py-[12px]" : "py-[7.5px]", " px-[16px] rounded-[32px] rounded-tr-[0px] rounded-br-[16px] transition ").concat(r ? "border-primary-gray border-solid" : "SKELETON" === o ? "border-gray-200 border-solid" : "CUSTOMIZE" === o ? "border-primary-blue border-dashed" : "border-primary-blue border-solid", " border-[1px] ").concat(l ? "bg-primary-blue" : "bg-primary-white", " ").concat(i ? "" : "cursor-pointer", " select-none"),
                        onClick: function() {
                            s(o)
                        },
                        children: "SKELETON" === o ? (0, a.jsx)("div", {
                            className: "w-[136px] h-[12px] bg-gray-200"
                        }) : (0, a.jsxs)("span", {
                            className: "text-sm font-semibold ".concat(r ? "text-primary-gray" : l ? "text-primary-white" : "text-primary-blue"),
                            children: ["CUSTOMIZE" === o ? n || x("customizeMessageLabel") : "", "FILLED" === o && n]
                        })
                    })
                },
                ve = function(e) {
                    var t = e.scoreStatus,
                        s = e.className,
                        n = e.isLocked,
                        r = (0, y.useState)(t),
                        i = r[0],
                        l = r[1],
                        c = (0, y.useState)(!1),
                        o = c[0],
                        d = c[1],
                        x = (0, u.Z)("common").t,
                        p = (0, y.useRef)();
                    return (0, y.useEffect)((function() {
                        l(t)
                    }), [t]), (0, y.useEffect)((function() {
                        p.current = (0, M.Z)(), d(!0)
                    }), []), (0, a.jsx)(a.Fragment, {
                        children: o ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "".concat(n ? "DIFFERENT" === i ? "bg-gray-100" : "bg-primary-gray" : "UNAVAILABLE" === i ? "bg-gray-200" : "PERFECT" === i ? "bg-secondary-green" : "bg-secondary-light-red", " ").concat(n ? "border-primary-gray" : "UNAVAILABLE" === i ? "border-gray-200" : "PERFECT" === i ? "border-secondary-green" : "border-secondary-red", " border-[1px] border-solid items-center justify-center rounded-[32px] px-[12px] py-[4px] select-none ").concat(s),
                                "data-tip": !0,
                                "data-for": p.current,
                                children: (0, a.jsx)("span", {
                                    className: "text-sm font-semibold ".concat(n ? "DIFFERENT" === i ? "text-primary-gray" : "text-primary-white" : "DIFFERENT" === i ? "text-secondary-red" : "text-primary-white"),
                                    children: x("UNAVAILABLE" === i ? "scoreUnavailableLabel" : "PERFECT" === i ? "scorePerfectLabel" : "scoreDifferentLabel")
                                })
                            }), ("PERFECT" === i || "DIFFERENT" === i) && (0, a.jsx)(z.Z, {
                                id: p.current,
                                type: "dark",
                                effect: "solid",
                                backgroundColor: "#01085a",
                                children: x("PERFECT" === i ? "perfectMatchLabel" : "differentMatchLabel")
                            })]
                        }) : (0, a.jsx)(a.Fragment, {})
                    })
                },
                Ne = s(37197),
                ke = s.n(Ne),
                Ce = s(83050),
                Se = s(13230),
                Ee = "/_next/static/media/swap_arrow_gray.ac0f1595.svg",
                Ie = s(56021),
                Le = s(40182),
                Te = s(33210),
                _e = "/_next/static/media/reply.cfc08e98.svg";

            function Ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function Re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var n, r, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (s = s.call(e); !(i = (n = s.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (c) {
                            l = !0, r = c
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Ae(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return Ae(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ze = s(19581),
                De = s(80636),
                Fe = s(29452),
                Be = s(57321);

            function Oe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function Ue(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var n, r, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (s = s.call(e); !(i = (n = s.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (c) {
                            l = !0, r = c
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || Ve(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e) {
                return function(e) {
                    if (Array.isArray(e)) return Oe(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ve(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ve(e, t) {
                if (e) {
                    if ("string" === typeof e) return Oe(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Oe(e, t) : void 0
                }
            }
            var Pe = function(e) {
                    var t = e.assetsSelectorStatus,
                        s = e.assets,
                        n = e.onClick,
                        r = e.onHover,
                        i = e.onBlur,
                        l = (0, y.useState)(t),
                        c = l[0],
                        o = l[1],
                        d = (0, u.Z)("common").t;
                    return (0, y.useEffect)((function() {
                        o(t)
                    }), [t]), (0, a.jsx)("div", {
                        className: "group flex items-center cursor-pointer ".concat(s.length > 0 ? "justify-start" : "justify-center", " p-[8px] w-full h-[54px] border-[1px] border-dashed rounded-[8px] relative select-none lg:h-[58px] lg:p-[10px] ").concat("SKELETON" === c ? "border-gray-200" : s.length > 0 ? "border-primary-blue hover:border-primary-dark-blue" : "border-gray-200 hover:border-primary-blue"),
                        onClick: n,
                        children: (0, a.jsx)(a.Fragment, {
                            children: "SKELETON" === c ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                    className: "flex items-center justify-between gap-x-[4px]",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex items-center justify-center bg-gray-200 rounded-[8px] w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                        children: (0, a.jsx)("img", {
                                            src: Le.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "flex items-center justify-center bg-gray-200 rounded-[8px] w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                        children: (0, a.jsx)("img", {
                                            src: Le.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "flex items-center justify-center bg-gray-200 rounded-[8px] w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                        children: (0, a.jsx)("img", {
                                            src: Le.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    })]
                                })
                            }) : (0, a.jsx)(a.Fragment, {
                                children: 0 === s.length ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center justify-between gap-x-[4px]",
                                        children: [(0, a.jsx)("div", {
                                            className: "flex items-center justify-center w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] bg-gray-200 rounded-[8px]",
                                            children: (0, a.jsx)("img", {
                                                src: Le.Z.src,
                                                width: 16,
                                                height: 16
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "flex items-center justify-center w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] bg-gray-200 rounded-[8px]",
                                            children: (0, a.jsx)("img", {
                                                src: Le.Z.src,
                                                width: 16,
                                                height: 16
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "flex items-center justify-center w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] bg-gray-200 rounded-[8px]",
                                            children: (0, a.jsx)("img", {
                                                src: Le.Z.src,
                                                width: 16,
                                                height: 16
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "hidden items-center justify-center gap-x-[4px] absolute w-full h-hull group-hover:flex",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-sm font-semibold text-primary-blue capitalize",
                                            children: d("addLabel")
                                        }), (0, a.jsx)("img", {
                                            src: Le.Z.src,
                                            width: 16,
                                            height: 16
                                        })]
                                    })]
                                }) : (0, a.jsxs)("div", {
                                    className: "flex items-center justify-between gap-x-[8px] w-full",
                                    children: [(0, a.jsx)(W.Z, {
                                        mode: "HOVERABLE",
                                        assets: s,
                                        maxItemDisplayedDesktop: 6,
                                        maxItemDisplayedMobile: 5,
                                        classNameAssetCard: "w-[40px] h-[40px]",
                                        classNameCounterAssets: "w-[40px] h-[40px]",
                                        desktopAssetCardWidthWithGap: 48,
                                        deltaX: 20,
                                        onHover: r,
                                        onBlur: i
                                    }), (0, a.jsx)("img", {
                                        src: Se.Z.src,
                                        className: "w-[16px]"
                                    })]
                                })
                            })
                        })
                    })
                },
                Me = function(e) {
                    var t = e.replyBoxStatus,
                        s = e.waccount,
                        n = e.post,
                        r = e.assetsLeft,
                        i = e.assetsRight,
                        l = e.isReplyModalOpen,
                        c = e.currentStepMenu,
                        o = e.selectedReplyIndex,
                        d = e.selectedReply,
                        x = e.modalInitialized,
                        p = e.onSkeletonClick,
                        f = e.onAssetsLeftClick,
                        m = e.onAssetsRightClick,
                        h = e.onCloseClick,
                        g = e.onAddReplyClick,
                        b = e.onReviewClick,
                        w = e.onEditClick,
                        j = e.onOpenReplyModal,
                        v = e.onFetchReplyScore,
                        N = e.onPublishReply,
                        k = (0, y.useState)(t),
                        L = k[0],
                        T = k[1],
                        _ = (0, y.useState)("UNAVAILABLE"),
                        A = _[0],
                        R = _[1],
                        Z = (0, y.useState)("SKELETON"),
                        D = Z[0],
                        F = Z[1],
                        B = (0, y.useState)("SKELETON"),
                        O = B[0],
                        U = B[1],
                        H = (0, u.Z)("common").t,
                        V = Ue(function(e) {
                            var t = (0, y.useState)(!1),
                                s = t[0],
                                n = t[1],
                                r = (0, y.useState)("DOWN"),
                                a = r[0],
                                i = r[1],
                                l = (0, y.useMemo)((function() {
                                    return new IntersectionObserver((function(e) {
                                        var t = Re(e, 1)[0];
                                        t.boundingClientRect.top < 0 && (t.isIntersecting ? i("UP") : i("DOWN")), n(t.isIntersecting)
                                    }), e)
                                }), [n, i]);
                            return [s, a, (0, y.useCallback)((function(e) {
                                e ? l.observe(e) : (l.disconnect(), n(!1))
                            }), [l, n, i])]
                        }(), 3),
                        P = V[0],
                        z = (V[1], V[2]),
                        J = (0, y.useState)(),
                        G = J[0],
                        K = J[1],
                        q = (0, y.useState)(),
                        Y = q[0],
                        Q = q[1],
                        te = (0, y.useState)(!1),
                        se = te[0],
                        le = te[1],
                        oe = (0, y.useState)(!1),
                        de = oe[0],
                        ue = oe[1],
                        xe = (0, y.useState)(l),
                        pe = xe[0],
                        fe = xe[1],
                        me = (0, y.useState)(!0),
                        he = me[0],
                        ge = me[1],
                        ye = (0, y.useState)([]),
                        be = ye[0],
                        Ne = ye[1],
                        Le = (0, y.useState)([]),
                        Ae = Le[0],
                        Oe = Le[1],
                        Ve = (0, y.useState)(),
                        Me = Ve[0],
                        ze = Ve[1],
                        We = (0, y.useState)(o || 0),
                        Je = We[0],
                        Ge = We[1],
                        Ke = (0, y.useState)(!1),
                        qe = Ke[0],
                        Xe = Ke[1],
                        Ye = (0, y.useState)(!1),
                        Qe = Ye[0],
                        $e = Ye[1],
                        et = (0, y.useRef)(""),
                        tt = (0, y.useRef)(!1),
                        st = (0, re.T)(),
                        nt = (0, Ze.Z)("/api/mock/post/replies"),
                        rt = nt.data,
                        at = nt.isLoading,
                        it = nt.isError,
                        lt = function() {
                            r && (r.length < 5 ? K(142) : 5 === r.length ? K(170) : r.length >= 6 && K(210)), i && (i.length < 5 ? Q(142) : 5 === i.length ? Q(170) : i.length >= 6 && Q(210))
                        },
                        ct = function(e) {
                            "left" === e ? r && (3 === r.length ? K(190) : 4 === r.length ? K(240) : 5 === r.length ? K(290) : 6 === r.length ? K(340) : r.length >= 7 && K(380)) : i && (3 === i.length ? Q(190) : 4 === i.length ? Q(240) : 5 === i.length ? Q(290) : 6 === i.length ? Q(340) : i.length >= 7 && Q(380))
                        },
                        ot = function() {
                            T("SKELETON"), le(!1), ue(!1), Xe(!1), ze(void 0), ge(!0)
                        };
                    return (0, y.useEffect)((function() {
                        s.jwtToken && Ne([])
                    }), [s.jwtToken]), (0, y.useEffect)((function() {
                        "SKELETON" === L ? (R("UNAVAILABLE"), F("SKELETON"), U("SKELETON")) : "ACTIVE" === L && (F("CUSTOMIZE"), U("ACTIVE"))
                    }), [L]), (0, y.useEffect)((function() {
                        lt()
                    }), [r]), (0, y.useEffect)((function() {
                        at || it || !rt || Ne([{
                            type: H("randomMessageLabel")
                        }].concat(He(rt)))
                    }), [rt, at, it]), (0, y.useEffect)((function() {
                        if (be && be.length > 0) {
                            var e = Number(be[1].type),
                                t = Number(be[be.length - 1].type);
                            Oe([e, t])
                        }
                    }), [be]), (0, y.useEffect)((function() {
                        c < 3 && "SKELETON" != L ? F("CUSTOMIZE") : 3 === c && F("FILLED")
                    }), [c, Me]), (0, y.useEffect)((function() {
                        return et.current = (0, M.Z)(), tt.current = !0,
                            function() {
                                tt.current = !1
                            }
                    }), []), (0, y.useEffect)((function() {
                        if ("number" === typeof o && o >= 0 && be && Ae && be.length > 0 && Ae.length > 0 && c > 0) {
                            if (0 === o) {
                                var e = (0, Be.X)(Ae[0], Ae[1]);
                                c > 2 && !d ? ze(H("MESSAGE_".concat(e.toString()))) : c > 2 && d && ze(d), ge(!0)
                            } else c > 2 && ze(H("MESSAGE_".concat(be[o].type))), ge(!1);
                            Ge(o), ue(!0), le(!1)
                        }
                    }), [o, be, Ae, c]), (0, y.useEffect)((function() {
                        var e, t, a;
                        n && n.assets.wanted && i && r && r.length > 0 && i.length > 0 && (e = n.type, t = n.assets.wanted, a = i, s && s.jwtToken && (0, ee.jl)((0, $.f)("getPostReplyScore"), function(e, t, s) {
                            var n = [],
                                r = [];
                            return t && t.forEach((function(e) {
                                n.push({
                                    type: "NATIVE" != e.type ? void 0 : e.type,
                                    address: "NATIVE" != e.type ? e.address : void 0
                                })
                            })), s.forEach((function(e) {
                                r.push({
                                    type: "NATIVE" != e.type ? void 0 : e.type,
                                    address: "NATIVE" != e.type ? e.address : void 0
                                })
                            })), {
                                type: e,
                                wanted: n,
                                offered: r
                            }
                        }(e, t, a), s.jwtToken).then((function(e) {
                            var t, s = e.data;
                            t = 100 === s[0].score ? "PERFECT" : "DIFFERENT", tt.current && R(t), v(s[0].score)
                        })).catch((function(e) {
                            (0, ne.$)(e, st)
                        })))
                    }), [n, n.assets.wanted, i, r]), (0, y.useEffect)((function() {
                        3 === c && Xe(!0)
                    }), [c]), (0, y.useEffect)((function() {
                        fe(l)
                    }), [l]), (0, a.jsxs)("div", {
                        className: "w-full",
                        ref: z,
                        children: [!P && !pe && (0, a.jsx)("div", {
                            className: "w-full max-w-[1024px] h-[88px] fixed bottom-[0px] z-[10000] left-[50%] -translate-x-[50%]",
                            children: (0, a.jsx)("div", {
                                className: "".concat(ke().stickyBox, " w-full h-full relative"),
                                children: (0, a.jsx)("div", {
                                    className: "flex items-center justify-end w-full h-full relative px-[28px] bg-primary-white rounded-tl-[16px] rounded-tr-[40px] border-[1px] border-solid border-gray-200 z-[1]",
                                    children: (0, a.jsx)(a.Fragment, {
                                        children: x ? (0, a.jsx)(ie.Z, {
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            text: H("goUpLabel"),
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            onClick: function() {
                                                window.scrollTo(0, 0)
                                            }
                                        }) : (0, a.jsx)(ie.Z, {
                                            type: {
                                                class: "primary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            text: H("makeYourOfferLabel"),
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            iconSrc: _e,
                                            onClick: function() {
                                                "SKELETON" === L && (T("ACTIVE"), p(), j())
                                            }
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "hidden lg:block",
                            children: (0, a.jsxs)("div", {
                                className: "".concat(ke().replyBox, " ").concat("ACTIVE" === L ? "".concat(ke().hideSquare) : "", " ").concat("SKELETON" === L ? "border-gray-200 cursor-pointer" : "shadow-md border-[transparent]", " hover:shadow-md border-[1px] border-solid w-full flex ").concat("SKELETON" === L ? "rounded-[16px] rounded-tr-[40px]" : "rounded-t-[0px] rounded-b-[16px]", " transition relative flex flex-col"),
                                onClick: function() {
                                    "SKELETON" === L && (T("ACTIVE"), p())
                                },
                                children: ["ACTIVE" === L && (0, a.jsx)(we, {
                                    percentage: 3 == c ? 100 : 0 !== r.length || 0 !== i.length || se || de ? 0 === r.length && 0 === i.length && se && !de ? 10 : 0 === r.length && 0 === i.length && de ? 30 : r.length > 0 && 0 === i.length || 0 === r.length && i.length > 0 ? 30 + (se || de ? se && !de ? 10 : de ? 30 : 0 : 0) : r.length > 0 && i.length > 0 && !de ? 60 + (se || de ? se && !de ? 10 : de ? 30 : 0 : 0) : r.length > 0 && i.length > 0 && de ? 90 : 0 : 0,
                                    className: ""
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-y-[20px] ".concat("SKELETON" === L ? "rounded-[16px] rounded-tr-[40px]" : "rounded-t-[0px] rounded-b-[16px]", " p-[28px] w-full h-full bg-primary-white z-[1]"),
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex ".concat(se ? "items-start" : "items-center", " justify-end w-full lg:justify-between"),
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[36px]",
                                            children: [se && (0, a.jsxs)("div", {
                                                className: "flex flex-col gap-y-[16px]",
                                                children: [(0, a.jsx)("h3", {
                                                    className: "text-base text-primary-dark-blue font-semibold",
                                                    children: H("choosePerfectHelloLabel")
                                                }), (0, a.jsx)("div", {
                                                    className: "flex flex-wrap gap-x-[12px] gap-y-[18px]",
                                                    children: (0, a.jsx)(De.Z, {
                                                        onSelect: function(e, t) {
                                                            var s = 0;
                                                            if ("0" === e) {
                                                                var n = (0, Be.X)(Ae[0], Ae[1]);
                                                                ze(H("MESSAGE_".concat(n.toString()))), s = n, ge(!0)
                                                            } else ze(H("MESSAGE_".concat(e))), s = Number(e), ge(!1);
                                                            ue(!0), le(!1), g(H("MESSAGE_".concat(s)), s.toString(), Number(t)), Ge(Number(t))
                                                        },
                                                        selectedIndex: Je,
                                                        children: be.map((function(e, t) {
                                                            return (0, a.jsx)(Fe.Z, {
                                                                message: 0 === t ? e.type : H("MESSAGE_".concat(e.type)),
                                                                value: 0 === t ? "0" : e.type,
                                                                index: t,
                                                                isSelected: Je === t
                                                            }, t)
                                                        }))
                                                    })
                                                })]
                                            }), (0, a.jsx)(ve, {
                                                scoreStatus: A,
                                                className: "hidden lg:flex lg:w-fit",
                                                isLocked: !1
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex-none flex gap-x-[12px] ".concat(c < 3 ? "justify-between" : "justify-start"),
                                            children: [(0, a.jsx)(je, {
                                                replyBubbleStatus: D,
                                                onClickCustomize: function(e) {
                                                    "CUSTOMIZE" !== e && "FILLED" !== e || le(!se)
                                                },
                                                isLocked: !1,
                                                replyMessage: Me
                                            }), "SKELETON" === L ? (0, a.jsx)("div", {
                                                className: "w-[40px] h-[40px] rounded-full bg-gray-200"
                                            }) : (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(C.Z, {
                                                    address: s.account ? s.account : "",
                                                    src: s.avatarUrl ? s.avatarUrl : "",
                                                    isNFT: s.isNFT ? 1 : 0,
                                                    sizesClassNames: "w-[40px] h-[40px]",
                                                    jazziconSize: {
                                                        defaultSize: 40,
                                                        breakpoints: [],
                                                        sizes: []
                                                    }
                                                }), c < 3 ? (0, a.jsx)("div", {
                                                    className: "".concat(ke().fadeCloseButton, " flex items-center justify-center select-none"),
                                                    children: (0, a.jsx)("img", {
                                                        src: Ce.Z.src,
                                                        className: "".concat(ke().hoverFilterDarkBlue, " cursor-pointer"),
                                                        onClick: function() {
                                                            $e(!0)
                                                        },
                                                        width: 16,
                                                        height: 16
                                                    })
                                                }) : (0, a.jsxs)("div", {
                                                    className: "flex flex-col select-none flex-none",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-base font-semibold text-primary-dark-blue",
                                                        children: s.username ? "@".concat(s.username) : "".concat(H("usernameNotSetLabel"))
                                                    }), (0, a.jsx)("span", {
                                                        className: "rubik text-xs font-regular cursor-pointer text-primary-gray",
                                                        children: s && (0, a.jsx)(S.Z, {
                                                            text: (0, E.x)(s.account ? s.account : ""),
                                                            url: (0, I.w)(s.currentNetworkId, s.account ? s.account : ""),
                                                            isCustom: !0,
                                                            isTargetBlank: !0,
                                                            customColor: "#979dac",
                                                            weight: "font-regular",
                                                            className: "text-xs"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), "ACTIVE" === L && c < 3 && (0, a.jsx)("span", {
                                        className: "text-base font-semibold text-primary-dark-blue select-none",
                                        children: H("selectWhichAssetsCreatorLabel")
                                    }), (0, a.jsxs)("div", {
                                        className: "".concat(c < 3 ? "flex justify-between items-center" : "", " w-full"),
                                        children: [c < 3 ? (0, a.jsxs)("div", {
                                            className: "flex gap-x-[16px] items-center",
                                            children: [(0, a.jsx)("div", {
                                                className: "lg:min-w-[146px]",
                                                style: {
                                                    width: "".concat("ACTIVE" === L ? "".concat(G, "px") : "")
                                                },
                                                children: (0, a.jsx)(Pe, {
                                                    assetsSelectorStatus: O,
                                                    assets: r,
                                                    onClick: f,
                                                    onHover: function() {
                                                        ct("left")
                                                    },
                                                    onBlur: function() {
                                                        lt()
                                                    }
                                                })
                                            }), (0, a.jsx)("img", {
                                                src: Ee,
                                                className: "select-none",
                                                height: 40,
                                                width: 40
                                            }), (0, a.jsx)("div", {
                                                className: "lg:min-w-[146px]",
                                                style: {
                                                    width: "".concat("ACTIVE" === L ? "".concat(Y, "px") : "")
                                                },
                                                children: (0, a.jsx)(Pe, {
                                                    assetsSelectorStatus: O,
                                                    assets: i,
                                                    onClick: m,
                                                    onHover: function() {
                                                        ct("right")
                                                    },
                                                    onBlur: function() {
                                                        lt()
                                                    }
                                                })
                                            })]
                                        }) : (0, a.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex gap-x-[16px] items-center p-[10px]",
                                                children: [(0, a.jsx)(W.Z, {
                                                    mode: "STANDARD",
                                                    assets: r,
                                                    maxItemDisplayedDesktop: 6,
                                                    maxItemDisplayedMobile: 3,
                                                    classNameAssetCard: "w-[40px] h-[40px]",
                                                    classNameCounterAssets: "w-[40px] h-[40px]",
                                                    desktopAssetCardWidthWithGap: 48,
                                                    deltaX: 20
                                                }), (0, a.jsx)("img", {
                                                    src: Ie.Z.src,
                                                    className: "select-none",
                                                    width: 40,
                                                    height: 40
                                                }), (0, a.jsx)(W.Z, {
                                                    mode: "STANDARD",
                                                    assets: i,
                                                    maxItemDisplayedDesktop: 6,
                                                    maxItemDisplayedMobile: 3,
                                                    classNameAssetCard: "w-[40px] h-[40px]",
                                                    classNameCounterAssets: "w-[40px] h-[40px]",
                                                    desktopAssetCardWidthWithGap: 48,
                                                    deltaX: 20
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex items-end justify-between w-full",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "flex items-center gap-x-[12px]",
                                                    children: [(0, a.jsx)(ae, {
                                                        assetsAccountLeft: {
                                                            user: {
                                                                networkId: n.networkId,
                                                                username: n.creator.username ? n.creator.username : "",
                                                                address: n.creator.address ? n.creator.address : "",
                                                                imageUrl: n.creator.imageUrl ? n.creator.imageUrl : "",
                                                                isVerified: n.creator.isVerified,
                                                                isNft: n.creator.isNft
                                                            },
                                                            assets: r
                                                        },
                                                        assetsAccountRight: {
                                                            user: {
                                                                networkId: s.currentNetworkId,
                                                                username: s.username ? s.username : "",
                                                                address: s.account ? s.account : "",
                                                                imageUrl: s.avatarUrl ? s.avatarUrl : "",
                                                                isVerified: s.isVerified,
                                                                isNft: s.isNFT
                                                            },
                                                            assets: i
                                                        },
                                                        onDoesNotOwn: function() {},
                                                        jwtToken: s && s.jwtToken ? s.jwtToken : "",
                                                        networkId: s && s.currentNetworkId ? s.currentNetworkId : "",
                                                        isLocked: !1,
                                                        tooltipPosition: "bottom"
                                                    }), (0, a.jsx)("span", {
                                                        className: "rubik text-xs font-regular text-primary-gray",
                                                        children: "/"
                                                    }), (0, a.jsx)(X.Z, {
                                                        assetsAccountLeft: r,
                                                        assetsAccountRight: i,
                                                        networkId: s && s.currentNetworkId ? s.currentNetworkId : ""
                                                    })]
                                                }), qe && (0, a.jsxs)("div", {
                                                    className: "flex items-center gap-x-[16px]",
                                                    children: [(0, a.jsx)(ie.Z, {
                                                        text: H("editLabel"),
                                                        type: {
                                                            class: "secondary",
                                                            icon: !0,
                                                            hasColoredBg: !1
                                                        },
                                                        initialState: {
                                                            state: r.length > 0 && i.length > 0 ? "default" : "disabled"
                                                        },
                                                        size: "large",
                                                        iconSrc: Se.Z.src,
                                                        onClick: function() {
                                                            Xe(!1), w()
                                                        },
                                                        className: "".concat(ke().hoverFilterDarkBlue, " bg-transparent py-3 w-[120px]"),
                                                        classNameIcon: "".concat(ke().hoverFilterDarkBlue, " w-[16px]")
                                                    }), (0, a.jsx)(ie.Z, {
                                                        text: H("publishLabel"),
                                                        type: {
                                                            class: "primary",
                                                            icon: !1,
                                                            hasColoredBg: !1
                                                        },
                                                        initialState: {
                                                            state: r.length > 0 && i.length > 0 ? "default" : "disabled"
                                                        },
                                                        size: "large",
                                                        onClick: function() {
                                                            N(r, i, (function() {
                                                                ot()
                                                            }))
                                                        },
                                                        className: "py-3"
                                                    })]
                                                })]
                                            })]
                                        }), "SKELETON" === L ? (0, a.jsx)(ie.Z, {
                                            text: H("makeYourOfferLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            size: "large",
                                            iconSrc: _e,
                                            onClick: function() {
                                                "SKELETON" === L && (T("ACTIVE"), p())
                                            }
                                        }) : (0, a.jsx)("div", {
                                            className: "flex items-center justify-between gap-x-[16px]",
                                            children: !qe && (0, a.jsx)(ie.Z, {
                                                text: H("reviewLabel"),
                                                type: {
                                                    class: "primary",
                                                    icon: !0,
                                                    hasColoredBg: !1
                                                },
                                                initialState: {
                                                    state: r.length > 0 && i.length > 0 ? "default" : "disabled"
                                                },
                                                size: "large",
                                                iconSrc: Te.Z.src,
                                                onClick: function() {
                                                    if (he) {
                                                        var e = (0, Be.X)(Ae[0], Ae[1]);
                                                        ze(H("MESSAGE_".concat(e.toString()))), b(H("MESSAGE_".concat(e.toString())), e.toString())
                                                    } else b()
                                                }
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "lg:hidden",
                            children: c < 3 ? (0, a.jsx)("div", {
                                className: "".concat(ke().replyBox, " border-gray-200 border-[1px] border-solid w-full flex rounded-[16px] rounded-tr-[40px] relative"),
                                onClick: function() {},
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-y-[20px] rounded-[16px] rounded-tr-[40px] p-[24px] w-full h-full bg-primary-white z-[1]",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex items-center justify-end w-full lg:justify-between",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex justify-between gap-x-[12px]",
                                            children: [(0, a.jsx)(je, {
                                                replyBubbleStatus: "SKELETON",
                                                onClickCustomize: function() {},
                                                isLocked: !1
                                            }), (0, a.jsx)("div", {
                                                className: "w-[40px] h-[40px] rounded-full bg-gray-200"
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex gap-x-[15px] items-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-[120px]",
                                            children: (0, a.jsx)(Pe, {
                                                assetsSelectorStatus: "SKELETON",
                                                assets: r,
                                                onClick: function() {},
                                                onHover: function() {},
                                                onBlur: function() {}
                                            })
                                        }), (0, a.jsx)("img", {
                                            width: 24,
                                            height: 24,
                                            src: Ee,
                                            className: "select-none"
                                        }), (0, a.jsx)("div", {
                                            className: "w-[120px]",
                                            children: (0, a.jsx)(Pe, {
                                                assetsSelectorStatus: "SKELETON",
                                                assets: i,
                                                onClick: function() {},
                                                onHover: function() {},
                                                onBlur: function() {}
                                            })
                                        })]
                                    }), c < 3 ? (0, a.jsx)(a.Fragment, {
                                        children: x ? (0, a.jsx)(ie.Z, {
                                            type: {
                                                class: "primary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            text: H("completeYourOfferLabel"),
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            iconSrc: _e,
                                            onClick: j
                                        }) : (0, a.jsx)(ie.Z, {
                                            type: {
                                                class: "primary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            text: H("makeYourOfferLabel"),
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            iconSrc: _e,
                                            onClick: function() {
                                                "SKELETON" === L && (T("ACTIVE"), p(), j())
                                            }
                                        })
                                    }) : (0, a.jsx)(a.Fragment, {})]
                                })
                            }) : (0, a.jsx)(a.Fragment, {})
                        }), Qe && (0, a.jsx)(ce.Z, {
                            modalTitle: H("resetReplyBoxTitleLabel"),
                            modalDescription: H("resetReplyBoxDescriptionLabel"),
                            action: function() {
                                $e(!1), h(), ot()
                            },
                            actionClose: function() {
                                $e(!1)
                            },
                            buttonsText: [H("closeReplyBoxLabel"), H("dismissLabel")],
                            isOpen: !0
                        })]
                    })
                },
                ze = s(51043),
                We = s(34543),
                Je = s(77165),
                Ge = s(83741),
                Ke = s(70164),
                qe = "/_next/static/media/canceled.3cdcc48e.svg",
                Xe = s(62602),
                Ye = s(7046),
                Qe = s.n(Ye),
                $e = s(11912),
                et = s.n($e),
                tt = function(e) {
                    var t = e.collection,
                        s = e.onClick,
                        n = e.hideBadge,
                        r = void 0 !== n && n,
                        i = e.className,
                        l = void 0 === i ? "" : i,
                        c = e.showCollectionTooltip,
                        o = void 0 === c || c,
                        d = e.selectionAddress,
                        u = e.quantity,
                        x = e.forceShowQuantity,
                        p = void 0 !== x && x;
                    return (0, a.jsxs)("div", {
                        className: "flex items-center justify-between cursor-pointer ".concat(l),
                        onClick: s,
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-x-[16px]",
                            children: [(0, a.jsx)(G.Z, {
                                src: t.imageUrl ? t.imageUrl : "",
                                statusVerification: r ? void 0 : t.statusVerification,
                                className: "w-[32px] h-[32px]",
                                badgeClassName: "w-[16px] h-[16px]",
                                showCollectionTooltip: o,
                                collection: t,
                                canReport: !0
                            }), (0, a.jsx)("span", {
                                className: "text-sm font-semibold text-primary-dark-blue",
                                children: t.name
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex justify-between items-center gap-x-[8px]",
                            children: [function(e, t, s, n, r) {
                                if (e && n && e === t && n > 0 || "NATIVE" === s && n && n > 0 || r && n && n > 0) return (0, a.jsx)("div", {
                                    className: "flex items-center justify-center w-[24px] h-[24px] bg-primary-blue rounded-[100%]",
                                    children: (0, a.jsx)("span", {
                                        className: "rubik text-xs font-bold text-primary-white",
                                        children: n
                                    })
                                })
                            }(null === d || void 0 === d ? void 0 : d.toLowerCase(), t.address.toLowerCase(), t.type, u, p), (0, a.jsx)("div", {
                                className: "flex items-center justify-center w-[20px] h-[20px]",
                                children: (0, a.jsx)("img", {
                                    src: Ke.Z.src,
                                    width: 20,
                                    height: 20
                                })
                            })]
                        })]
                    })
                },
                st = function(e) {
                    var t = e.title,
                        s = e.currentNetworkId,
                        n = e.subTitle,
                        r = e.collectionsHighlighted,
                        i = e.isRestricted,
                        l = e.showTokens,
                        c = void 0 === l || l,
                        o = e.selections,
                        d = e.onClickTokens,
                        x = e.onClickCollection,
                        p = e.onAddNFTCollection,
                        f = e.collector,
                        m = e.showUsername,
                        h = (0, u.Z)("common").t,
                        g = (0, y.useRef)(null),
                        b = (0, y.useState)([]),
                        w = b[0],
                        j = b[1],
                        v = (0, y.useState)(""),
                        N = v[0],
                        k = v[1],
                        L = (0, y.useState)(0),
                        T = L[0],
                        _ = L[1],
                        A = (0, y.useState)(0),
                        R = A[0],
                        Z = A[1],
                        D = (0, y.useState)(10)[0],
                        F = (0, y.useState)(!1),
                        B = F[0],
                        O = F[1],
                        U = (0, y.useState)(!1),
                        H = U[0],
                        V = U[1],
                        P = (0, y.useState)(!1),
                        M = P[0],
                        z = P[1],
                        W = (0, y.useState)(),
                        J = W[0],
                        G = W[1],
                        K = (0, y.useState)(),
                        q = K[0],
                        X = K[1],
                        Y = (0, y.useState)(),
                        Q = Y[0],
                        $ = Y[1],
                        ee = (0, y.useState)(),
                        te = ee[0],
                        se = ee[1],
                        ae = (0, y.useState)(!1),
                        ie = ae[0],
                        le = ae[1],
                        ce = (0, y.useRef)(!1),
                        de = (0, re.T)(),
                        ue = function() {
                            if (g.current)
                                if (c) {
                                    g.current.getCollections({
                                        userAddress: f.address,
                                        networkId: s || "*",
                                        searchType: "TKN",
                                        skip: 0,
                                        take: 10
                                    }).then((function(e) {
                                        if (e) {
                                            var t = e.data[0].rows,
                                                s = t.find((function(e) {
                                                    return "NATIVE" === e.type
                                                }));
                                            if (s && ce.current && G({
                                                    name: "Tokens",
                                                    statusVerification: 1,
                                                    address: "",
                                                    imageUrl: s.imageUrl,
                                                    networkId: s.networkId,
                                                    abi: [],
                                                    type: "NATIVE",
                                                    symbol: "NTV",
                                                    createdAt: ""
                                                }), r) {
                                                var n = [];
                                                t.forEach((function(e) {
                                                    r.findIndex((function(t) {
                                                        return t.type === e.type && t.address.toLowerCase() === e.address.toLowerCase()
                                                    })) > -1 || n.push(e)
                                                })), ce.current && X(0 == n.length ? t : n)
                                            } else ce.current && X(t)
                                        }
                                    })).catch((function(e) {
                                        (0, ne.$)(e, de)
                                    }))
                                } else if (r) {
                                var e = [];
                                r.forEach((function(t) {
                                    "NATIVE" !== t.type && "ERC20" !== t.type || e.push(t)
                                })), X(e)
                            }
                        },
                        xe = function(e) {
                            g.current && (0 === w.length ? ce.current && z(!0) : ce.current && z(!1), g.current.getCollections({
                                userAddress: f.address,
                                networkId: s || "*",
                                searchType: "NFT",
                                skip: R,
                                take: D,
                                queryString: e && e.length > 0 ? e : void 0
                            }).then((function(e) {
                                if (e) {
                                    var t = e.data[0],
                                        s = t.rows,
                                        n = t.count;
                                    ce.current && _(n), 0 === w.length ? ce.current && j(s) : ce.current && j(w.concat(s))
                                }
                            })).catch((function(e) {
                                (0, ne.$)(e, de)
                            })).finally((function() {
                                ce.current && (z(!1), O(!1))
                            })))
                        },
                        pe = function(e, t) {
                            var s = e.findIndex((function(e) {
                                return e.collectionAddress.toLowerCase() === t.address.toLowerCase()
                            }));
                            return s > -1 ? e[s].collectionAddress.toLowerCase() : void 0
                        },
                        fe = function(e, t) {
                            var s = e.findIndex((function(e) {
                                return e.collectionAddress.toLowerCase() === t.address.toLowerCase()
                            }));
                            return s > -1 ? e[s].quantity : void 0
                        },
                        me = (0, y.useRef)(et()((function(e) {
                            ce.current && k(e)
                        }), 300)).current;
                    return (0, y.useEffect)((function() {
                        ce.current = !0, g.current = new oe.k_({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        }), g.current.config({
                            backendURL: "https://api.nfttrader.io"
                        });
                        var e = function() {
                            ce.current && (window.innerWidth >= 1024 ? (se(""), r && n ? r.length >= 5 ? $(window.innerHeight - 530) : 4 === r.length ? $(window.innerHeight - 500) : 3 === r.length ? $(window.innerHeight - 470) : 2 === r.length ? $(window.innerHeight - 420) : 1 === r.length && $(window.innerHeight - 380) : $(window.innerHeight - 300)) : ($(""), r && n ? r.length >= 5 ? se(window.innerHeight - 530) : 4 === r.length ? se(window.innerHeight - 500) : 3 === r.length ? se(window.innerHeight - 470) : 2 === r.length ? se(window.innerHeight - 420) : 1 === r.length && se(window.innerHeight - 380) : se(window.innerHeight - 300)))
                        };
                        return e(), window.addEventListener("resize", e),
                            function() {
                                ce.current = !1, window.removeEventListener("resize", e)
                            }
                    }), []), (0, y.useEffect)((function() {
                        xe(), ue()
                    }), []), (0, y.useEffect)((function() {
                        ce.current && (_(0), Z(0), j([]), O(!0))
                    }), [N]), (0, y.useEffect)((function() {
                        T > w.length ? ce.current && (Z(R + 10), V(!0)) : ce.current && V(!1)
                    }), [w]), (0, y.useEffect)((function() {
                        B && (xe(N), ue())
                    }), [B]), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-y-[12px]",
                        children: [(0, a.jsx)("div", {
                            className: "mb-[12px] lg:mb-[0]",
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-x-[16px]",
                                children: [(0, a.jsx)(C.Z, {
                                    src: f.imageUrl && "" != f.imageUrl ? f.imageUrl : void 0,
                                    address: f.address,
                                    isNFT: f.isNft,
                                    className: "w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]",
                                    sizesClassNames: "w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]",
                                    jazziconSize: {
                                        defaultSize: 24,
                                        breakpoints: [1024],
                                        sizes: [32]
                                    }
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-base font-semibold ".concat(f.username && f.username.length > 0 ? "text-primary-dark-blue" : "text-primary-gray"),
                                        children: f.username && f.username.length > 0 ? "".concat(m ? "@" : "").concat(f.username) : h("usernameNotSetLabel")
                                    }), (0, a.jsx)(S.Z, {
                                        text: (0, E.x)(f.address),
                                        url: (0, I.w)(s, f.address),
                                        isBlue: !1,
                                        isCustom: !0,
                                        isTargetBlank: !0,
                                        customColor: "#979dac",
                                        weight: "font-regular",
                                        className: "rubik text-xs"
                                    })]
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col gap-y-[8px]",
                            children: [(0, a.jsx)("h3", {
                                className: "text-xl font-semibold text-primary-dark-blue",
                                children: t
                            }), (0, a.jsx)("span", {
                                className: "font-semibold text-[14px] text-primary-blue cursor-pointer w-fit hover:text-primary-dark-blue",
                                onClick: function() {
                                    p && p()
                                },
                                children: h("addNFTCollectionLabel")
                            })]
                        }), r && n && (0, a.jsxs)("div", {
                            className: "flex flex-col gap-y-[12px] py-[12px] border-y-[1px] border-primary-gray/40 border-solid",
                            children: [(0, a.jsx)("span", {
                                children: n
                            }), (0, a.jsx)("div", {
                                className: "flex flex-col overflow-y-scroll scrollbar-hide max-h-[200px]",
                                children: r && r.map((function(e, t) {
                                    return (0, a.jsx)(tt, {
                                        collection: e,
                                        onClick: function() {
                                            "NATIVE" !== e.type && "ERC20" !== e.type || !d || d([e]), "ERC721" !== e.type && "ERC1155" !== e.type || !x || x(e)
                                        },
                                        hideBadge: !1,
                                        className: t === r.length - 1 ? "" : "mb-[12px]",
                                        showCollectionTooltip: "ERC721" === e.type || "ERC1155" === e.type,
                                        selectionAddress: !o || "ERC721" !== e.type && "ERC1155" !== e.type && "ERC20" !== e.type ? void 0 : pe(o, e),
                                        quantity: o ? fe(o, e) : void 0
                                    }, "".concat(e.address, "-").concat(t))
                                }))
                            })]
                        }), (0, a.jsx)(a.Fragment, {
                            children: !i && r && n ? (0, a.jsx)("div", {
                                className: "flex items-center cursor-pointer relative mb-[12px]",
                                onClick: function() {
                                    ce.current && le(!0)
                                },
                                children: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)("span", {
                                        className: "group ".concat(Qe().filterHoverDarkBlue, " flex items-center gap-x-[8px]"),
                                        children: [(0, a.jsx)("span", {
                                            className: "group-hover:text-primary-dark-blue text-sm font-bold text-primary-blue",
                                            children: h("searchByCollectionLabel")
                                        }), (0, a.jsx)("img", {
                                            src: Xe.Z.src,
                                            width: 16,
                                            height: 16
                                        })]
                                    }), ie && (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between gap-x-[8px] absolute w-full h-[50px] bg-primary-white z-[9999] mt-[15px]",
                                        children: [(0, a.jsx)(Ge.Z, {
                                            placeholder: h("filterCollectionOrAddressLabel"),
                                            setFilter: me,
                                            style: {
                                                height: "80%"
                                            },
                                            className: "relative top-[0px] flex-1"
                                        }), (0, a.jsx)("img", {
                                            className: "".concat(Qe().filterHoverDarkBlue, " w-[16px]"),
                                            src: qe,
                                            onClick: function(e) {
                                                e.stopPropagation(), ce.current && (le(!1), k(""))
                                            }
                                        })]
                                    })]
                                })
                            }) : (0, a.jsx)(a.Fragment, {
                                children: !i && (0, a.jsx)(Ge.Z, {
                                    placeholder: h("filterCollectionOrAddressLabel"),
                                    setFilter: me
                                })
                            })
                        }), !i && (0, a.jsxs)("div", {
                            className: "".concat(Q && "" != Q ? "overflow-y-scroll scrollbar-hide" : "", " pb-[30px]"),
                            id: "collections-scrollable",
                            style: {
                                maxHeight: "".concat(Q && "" != Q ? "".concat(Q, "px") : ""),
                                minHeight: "".concat(te && "" != te ? "".concat(te, "px") : "")
                            },
                            children: [c && J && q && (0, a.jsx)(tt, {
                                collection: J,
                                onClick: function() {
                                    d && d(q)
                                },
                                hideBadge: !0,
                                className: "mb-[12px]",
                                showCollectionTooltip: !1,
                                quantity: o ? function(e, t) {
                                    var s = 0;
                                    return t.forEach((function(t) {
                                        var n = e.findIndex((function(e) {
                                            return ("ERC20" === e.type || "NATIVE" === e.type) && t.type === e.type && e.collectionAddress.toLowerCase() === t.address.toLowerCase()
                                        }));
                                        n > -1 && (s += e[n].quantity)
                                    })), s > 0 ? s : void 0
                                }(o, q) : void 0,
                                forceShowQuantity: !0
                            }), Q && "" != Q && (0, a.jsxs)(We.Z, {
                                dataLength: w.length,
                                next: xe,
                                scrollThreshold: .99,
                                hasMore: H,
                                loader: (0, a.jsx)("div", {
                                    className: "flex justify-center items-center",
                                    children: (0, a.jsx)(Je.Z, {
                                        isWhite: !1,
                                        className: "w-[24px] h-[24px]"
                                    })
                                }),
                                scrollableTarget: "collections-scrollable",
                                style: {
                                    overflow: "initial"
                                },
                                children: [(0, a.jsx)(a.Fragment, {
                                    children: M && (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)("div", {
                                            className: "flex items-center justify-center w-full h-[250px]",
                                            children: (0, a.jsx)(Je.Z, {
                                                isWhite: !1,
                                                className: "w-[30px] h-[30px]"
                                            })
                                        })
                                    })
                                }), w.map((function(e, t) {
                                    return (0, a.jsx)(tt, {
                                        collection: e,
                                        onClick: function() {
                                            x && x(e)
                                        },
                                        hideBadge: !1,
                                        className: t === w.length - 1 ? "" : "mb-[12px]",
                                        showCollectionTooltip: !0,
                                        selectionAddress: o ? pe(o, e) : void 0,
                                        quantity: o ? fe(o, e) : void 0
                                    }, "".concat(e.address, "-").concat(t))
                                }))]
                            }), te && "" != te && (0, a.jsxs)(We.Z, {
                                dataLength: w.length,
                                next: xe,
                                scrollThreshold: .99,
                                hasMore: H,
                                loader: (0, a.jsx)("div", {
                                    className: "flex justify-center items-center",
                                    children: (0, a.jsx)(Je.Z, {
                                        isWhite: !1,
                                        className: "w-[24px] h-[24px]"
                                    })
                                }),
                                scrollableTarget: "scrollable-parent",
                                style: {
                                    overflow: "initial"
                                },
                                children: [(0, a.jsx)(a.Fragment, {
                                    children: M && (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)("div", {
                                            className: "flex items-center justify-center w-full h-[250px]",
                                            children: (0, a.jsx)(Je.Z, {
                                                isWhite: !1,
                                                className: "w-[30px] h-[30px]"
                                            })
                                        })
                                    })
                                }), w.map((function(e, t) {
                                    return (0, a.jsx)(tt, {
                                        collection: e,
                                        onClick: function() {
                                            x && x(e)
                                        },
                                        hideBadge: !1,
                                        className: t === w.length - 1 ? "" : "mb-[12px]",
                                        showCollectionTooltip: !0,
                                        selectionAddress: o ? pe(o, e) : void 0,
                                        quantity: o ? fe(o, e) : void 0
                                    }, "".concat(e.address, "-").concat(t))
                                }))]
                            })]
                        })]
                    })
                },
                nt = s(61257),
                rt = s(87805),
                at = function(e) {
                    var t = e.tokens,
                        s = e.userAddress,
                        n = e.currentTokenIndex,
                        r = e.onTokenChange,
                        i = e.onValueChange,
                        l = e.onRemoveToken,
                        c = e.selections,
                        o = e.title,
                        d = (0, y.useState)(n),
                        u = d[0],
                        x = d[1],
                        p = (0, y.useState)(),
                        f = p[0],
                        m = p[1],
                        h = (0, y.useState)(),
                        g = h[0],
                        b = h[1],
                        w = function(e) {
                            return 0 === c.length || !!j(e)
                        },
                        j = function(e) {
                            var t = c.findIndex((function(t) {
                                return "ERC20" === e.type ? t.tokenAddress.toLowerCase() === e.address.toLowerCase() : t.type === e.type
                            }));
                            if (t > -1) return c[t].amount
                        },
                        v = function(e) {
                            var t = c.findIndex((function(t) {
                                return "ERC20" === e.type ? t.tokenAddress.toLowerCase() === e.address.toLowerCase() : t.type === e.type
                            }));
                            if (t > -1) return c[t].amountUSD
                        };
                    return (0, y.useEffect)((function() {
                        x(n)
                    }), [n]), (0, y.useEffect)((function() {
                        var e, t = function() {
                            e && clearTimeout(e), e = setTimeout((function() {
                                window.innerWidth >= 1024 ? (m(window.innerHeight - 342), b("")) : (m(""), b(window.innerHeight - 342))
                            }), 50)
                        };
                        return t(), window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }), []), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-y-[32px]",
                        children: [(0, a.jsx)("h2", {
                            className: "text-xl font-semibold text-primary-dark-blue",
                            children: o
                        }), (0, a.jsx)(rt.Z, {
                            tokenAmount: u === n && j(t[u]) ? j(t[u]) : "",
                            tokens: t,
                            tokenSelectedIndex: u,
                            userAddress: s,
                            alreadyFocused: !0,
                            animationOnFocused: !1,
                            disableSelection: !0,
                            onTokenChange: r,
                            onValueChange: i
                        }), (0, a.jsx)("div", {
                            className: "flex flex-col gap-y-[8px] border-t-[1px] border-solid border-primary-gray/40 py-[32px]",
                            style: {
                                maxHeight: "".concat(f && "" != f ? "".concat(f, "px") : ""),
                                minHeight: "".concat(g && "" != g ? "".concat(g, "px") : "")
                            },
                            children: t.map((function(e, t) {
                                return (0, a.jsx)(nt.Z, {
                                    tokenName: e.symbol,
                                    tokenImageSrc: e.imageUrl,
                                    enabled: w(e),
                                    onClick: function() {
                                        r(t)
                                    },
                                    onRemoveToken: function() {
                                        l && l(t)
                                    },
                                    isItemSelected: u === t,
                                    amount: j(e),
                                    amountUSD: v(e)
                                }, "".concat(e.address, "-").concat(e.name, "-").concat(e.type, "-").concat(t))
                            }))
                        })]
                    })
                },
                it = s(19722),
                lt = s(50425),
                ct = s(70202),
                ot = s(3110),
                dt = s(81067),
                ut = function(e) {
                    var t = e.collection,
                        s = e.networkId,
                        n = e.userAddress,
                        r = e.isCollectibleSelected,
                        i = e.getAmountIfSelected,
                        l = e.onClickNFTItem,
                        c = e.onAddERC1155,
                        o = e.onRemoveERC1155,
                        d = (0, u.Z)("common").t,
                        x = (0, y.useRef)(!1),
                        p = (0, y.useState)(null),
                        f = p[0],
                        m = p[1],
                        h = (0, y.useState)(1)[0],
                        g = (0, y.useState)(0)[1],
                        b = (0, y.useState)(!1),
                        w = b[0],
                        j = b[1],
                        v = (0, y.useState)(!1),
                        N = v[0],
                        C = v[1],
                        S = (0, y.useState)([]),
                        E = S[0],
                        I = S[1],
                        L = (0, y.useState)(""),
                        T = L[0],
                        _ = L[1],
                        A = (0, y.useState)(""),
                        R = A[0],
                        Z = A[1],
                        D = (0, y.useState)(!1),
                        F = D[0],
                        B = D[1],
                        O = function(e, t) {
                            if (x.current && j(!0), s) {
                                var r = (0, $.f)("getNftCollectionAssetsByOwner", [s, e.address, n, "50", f || "null"]);
                                (0, ee.bf)(r).then((function(e) {
                                    var s = e.data[0],
                                        n = (s.response, s.nfts),
                                        r = s.continuation,
                                        a = s.total;
                                    x.current && g(a), 0 === n.length ? x.current && I(n) : x.current && I(E.concat(n)), r ? x.current && m(r) : x.current && m(null), t && x.current && t("default")
                                })).catch((function(e) {
                                    t && x.current && t("default"), console.log(e)
                                })).finally((function() {
                                    x.current && j(!1)
                                }))
                            }
                        },
                        U = (0, y.useRef)(et()((function(e) {
                            "" != e ? function(e) {
                                if (j(!0), s) {
                                    var r = (0, $.f)("getNftMetadataWithAddress", [s, t.address, e, n]);
                                    (0, ee.bf)(r, {
                                        headers: {
                                            "x-api-key": "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                        }
                                    }).then((function(e) {
                                        var t = e.data[0];
                                        !0 === t.isOwner ? x.current && I([t]) : x.current && I([])
                                    })).catch((function(e) {
                                        console.log(e), x.current && I([])
                                    })).finally((function() {
                                        x.current && j(!1)
                                    }))
                                }
                            }(e) : x.current && (I([]), B(!0))
                        }), 300)).current;
                    return (0, y.useEffect)((function() {
                        return x.current = !0,
                            function() {
                                x.current = !1
                            }
                    }), []), (0, y.useEffect)((function() {
                        var e;
                        O(t);
                        var s = function() {
                            e && clearTimeout(e), e = setTimeout((function() {
                                window.innerWidth >= 1024 ? (_(window.innerHeight - 297), Z("")) : (_(""), Z(window.innerHeight - 297))
                            }), 50)
                        };
                        return s(), window.addEventListener("resize", s),
                            function() {
                                window.removeEventListener("resize", s)
                            }
                    }), []), (0, y.useEffect)((function() {
                        "null" !== f ? x.current && C(!0) : x.current && C(!1)
                    }), [f, h]), (0, y.useEffect)((function() {
                        F && 0 === E.length && !1 === w && (O(t), B(!1))
                    }), [F, E, w]), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-y-[24px]",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col gap-y-[16px]",
                            children: [(0, a.jsx)("h2", {
                                className: "w-full h-[28px] text-xl font-semibold text-primary-dark-blue",
                                children: (0, a.jsx)(lt.Z, {
                                    text: t.name,
                                    className: "h-full"
                                })
                            }), (0, a.jsx)(Ge.Z, {
                                setFilter: function(e) {
                                    U(e)
                                },
                                placeholder: d("searchByTokenIdLabel"),
                                regex: /^\d+$/,
                                className: "h-[52px]"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex flex-col gap-y-[24px] ".concat(!0 === w || !1 === w && 0 === E.length ? "justify-center items-center h-[300px]" : ""),
                            style: {
                                maxHeight: "".concat(T && "" != T ? "".concat(T, "px") : ""),
                                minHeight: "".concat(R && "" != R ? "".concat(R, "px") : "")
                            },
                            children: !1 === w ? (0, a.jsx)(a.Fragment, {
                                children: E.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: "flex flex-wrap gap-x-[8px] gap-y-[8px] grid-cols-2 overflow-y-scroll scrollbar-hide lg:grid lg:flex-nowrap",
                                        children: t && E.map((function(e, s) {
                                            return (0, a.jsx)(ct.Z, {
                                                NFTSrc: (0, it.G)(e.cachedFileUrl),
                                                NFTId: e.tokenId,
                                                standard: t.type,
                                                collection: t,
                                                address: n,
                                                isSelected: r(e, t),
                                                amount: i(e, t),
                                                hasPlaceholder: (0, it.A)(e.cachedFileUrl),
                                                onClick: function(s, n) {
                                                    l && l(s, n, e, t)
                                                },
                                                onAddERC1155: function(t) {
                                                    c && c(e, t)
                                                },
                                                onRemoveERC1155: function() {
                                                    o && o(e)
                                                }
                                            }, "nft-item-".concat(s))
                                        }))
                                    }), N && (0, a.jsx)("div", {
                                        className: "flex justify-center items-center w-full h-[80px]",
                                        children: (0, a.jsx)(ie.Z, {
                                            text: d("loadMoreLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "small",
                                            initialState: {
                                                state: "default"
                                            },
                                            onClick: function(e) {
                                                t && O(t, e), e && e("loading")
                                            }
                                        })
                                    })]
                                }) : (0, a.jsx)("div", {
                                    className: "flex items-center justify-center w-full",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-col items-center justify-center h-full w-full",
                                        children: t ? (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("img", {
                                                src: k.Z.src,
                                                width: 88,
                                                height: 88
                                            }), (0, a.jsx)("div", {
                                                className: "text-xl font-semibold text-primary-dark-blue mt-[24px] text-center",
                                                children: d("sorryLabel")
                                            }), (0, a.jsx)("div", {
                                                className: "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                children: d("noAssetsFoundLabel")
                                            })]
                                        }) : (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("img", {
                                                src: ot.Z.src,
                                                className: "w-[173px] hidden lg:block"
                                            }), (0, a.jsx)("img", {
                                                src: dt.Z.src,
                                                className: "w-[173px] block lg:hidden"
                                            }), (0, a.jsx)("span", {
                                                className: "text-base font-regular text-primary-dark-blue text-center mt-[16px]",
                                                children: d("selectCollectionShowCounterpartyNFTsLabel")
                                            })]
                                        })
                                    })
                                })
                            }) : (0, a.jsx)("div", {
                                className: "flex items-center justify-center w-full",
                                children: (0, a.jsx)(Je.Z, {
                                    isWhite: !1,
                                    className: "w-[30px] h-[30px]"
                                })
                            })
                        })]
                    })
                },
                xt = s(58693),
                pt = s(90902),
                ft = s(71320),
                mt = s(80190),
                ht = s(32039),
                gt = s.n(ht),
                yt = function(e) {
                    var t = e.item,
                        s = e.isItemSelected,
                        n = e.onItemClick,
                        r = (0, y.useState)(s),
                        i = r[0],
                        l = r[1];
                    return (0, y.useEffect)((function() {
                        l(s)
                    }), [s]), (0, a.jsxs)("div", {
                        className: "".concat(i ? "border-primary-blue" : "border-gray-300", " border-solid border-[1px] hover:border-primary-blue flex items-center justify-between gap-x-[12px] py-[16px] pl-[16px] pr-[20px] rounded-[16px] cursor-pointer select-none"),
                        onClick: function() {
                            n && n(t, !i), l(!i)
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center justify-between gap-x-[16px]",
                            children: [(0, a.jsx)(K.Z, {
                                src: t.imageUrl ? t.imageUrl : "",
                                hasPlaceholder: !t.imageUrl,
                                type: t.type,
                                className: "w-[40px] h-[40px]",
                                amount: t.amount ? t.amount : "",
                                name: "ERC721" === t.type || "ERC1155" === t.type ? "".concat(t.name, " #").concat(t.tokenId) : "".concat(t.name),
                                symbol: t.symbol,
                                isClickable: !0,
                                address: t.address,
                                tokenId: t.tokenId,
                                networkId: (0, R.kb)(t.networkId)
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col gap-y-[4px]",
                                children: [(0, a.jsx)("span", {
                                    className: "text-sm font-semibold text-primary-dark-blue",
                                    children: "#".concat(t.tokenId)
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-x-[4px]",
                                    children: [(0, a.jsx)(G.Z, {
                                        src: t.collection.imageUrl ? t.collection.imageUrl : "",
                                        statusVerification: t.collection.statusVerification,
                                        className: "w-[16px] h-[16px]",
                                        badgeClassName: "w-[10px] h-[10px]"
                                    }), (0, a.jsx)("span", {
                                        className: "text-xxs font-semibold text-primary-dark-blue",
                                        children: t.collection.name
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex items-center justify-center w-[32px] h-[32px]",
                            children: i ? (0, a.jsx)("img", {
                                src: mt.Z.src,
                                className: "w-[16px] cursor-pointer ".concat(gt().deleteHover)
                            }) : (0, a.jsx)("img", {
                                src: ft.Z.src,
                                className: "w-[16px] cursor-pointer ".concat(gt().deleteHover)
                            })
                        })]
                    })
                },
                bt = function(e) {
                    var t = e.item,
                        s = e.onDeleteItemClick,
                        n = e.onEditTokenClick;
                    return (0, a.jsxs)("div", {
                        className: "flex items-center justify-between gap-x-[12px]",
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center justify-between gap-x-[16px]",
                            children: [(0, a.jsx)(K.Z, {
                                src: t.imageUrl ? t.imageUrl : "",
                                hasPlaceholder: !t.imageUrl,
                                type: t.type,
                                className: "w-[40px] h-[40px]",
                                amount: "ERC20" === t.type || "NATIVE" === t.type ? t.amountHumanReadable : t.amount ? t.amount : "",
                                name: "ERC721" === t.type || "ERC1155" === t.type ? "".concat(t.name, " #").concat(t.tokenId) : "".concat(t.name),
                                symbol: t.symbol,
                                isClickable: !0,
                                address: t.address,
                                tokenId: t.tokenId,
                                networkId: (0, R.kb)(t.networkId)
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col gap-y-[4px]",
                                children: ["NATIVE" === t.type || "ERC20" === t.type ? (0, a.jsx)("span", {
                                    className: "text-sm font-semibold text-primary-dark-blue",
                                    children: "".concat(t.amountHumanReadable, " ").concat(t.symbol)
                                }) : (0, a.jsx)("span", {
                                    className: "text-sm font-semibold text-primary-dark-blue",
                                    children: "#".concat(t.tokenId.length > 20 ? "".concat(t.tokenId.substring(0, 20), "...") : t.tokenId)
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-x-[4px]",
                                    children: [(0, a.jsx)(G.Z, {
                                        src: t.collection.imageUrl ? t.collection.imageUrl : "",
                                        statusVerification: t.collection.statusVerification,
                                        className: "w-[16px] h-[16px]",
                                        badgeClassName: "w-[10px] h-[10px]"
                                    }), (0, a.jsx)("span", {
                                        className: "text-xxs font-semibold text-primary-dark-blue",
                                        children: t.collection.name
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex items-center justify-center w-[32px] h-[32px]",
                            children: "NATIVE" === t.type || "ERC20" === t.type ? (0, a.jsx)("img", {
                                src: pt.Z.src,
                                className: "w-[16px] cursor-pointer ".concat(gt().deleteHover),
                                onClick: function() {
                                    n && n(t)
                                }
                            }) : (0, a.jsx)("img", {
                                src: xt.Z.src,
                                className: "w-[16px] cursor-pointer ".concat(gt().deleteHover),
                                onClick: function() {
                                    s && s(t)
                                }
                            })
                        })]
                    })
                },
                wt = function(e) {
                    var t = e.title,
                        s = e.mode,
                        n = e.items,
                        r = e.wanted,
                        i = e.subTitle,
                        l = e.onItemClick,
                        c = e.onDeleteItemClick,
                        o = e.onEditTokenClick,
                        d = e.collector,
                        x = e.networkId,
                        p = e.showUsername,
                        f = e.showAddNFTorTokenButton,
                        m = e.onAddNFTorTokenButtonClick,
                        h = (0, y.useRef)(!1),
                        g = (0, y.useState)(n),
                        b = g[0],
                        w = g[1],
                        j = (0, y.useState)(),
                        v = j[0],
                        N = j[1],
                        k = (0, y.useState)(),
                        L = k[0],
                        T = k[1],
                        _ = (0, u.Z)("common").t;
                    return (0, y.useEffect)((function() {
                        var e;
                        h.current = !0;
                        var t = function() {
                            e && clearTimeout(e), e = setTimeout((function() {
                                window.innerWidth >= 1024 ? h.current && (T(""), N("list" === s ? window.innerHeight - 140 : window.innerHeight - 240)) : h.current && (N(""), T("list" === s ? window.innerHeight - 190 : window.innerHeight - 290))
                            }), 50)
                        };
                        return t(), window.addEventListener("resize", t),
                            function() {
                                h.current = !1, window.removeEventListener("resize", t)
                            }
                    }), []), (0, y.useEffect)((function() {
                        h.current && w(n)
                    }), [n]), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-y-[12px]",
                        children: [(0, a.jsx)("div", {
                            className: "mb-[12px] lg:mb-[0]",
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-x-[16px]",
                                children: [(0, a.jsx)(C.Z, {
                                    src: d.imageUrl && "" != d.imageUrl ? d.imageUrl : void 0,
                                    address: d.address,
                                    isNFT: d.isNft,
                                    className: "w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]",
                                    sizesClassNames: "w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]",
                                    jazziconSize: {
                                        defaultSize: 24,
                                        breakpoints: [1024],
                                        sizes: [32]
                                    }
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-base font-semibold ".concat(d.username && d.username.length > 0 ? "text-primary-dark-blue" : "text-primary-gray"),
                                        children: d.username && d.username.length > 0 ? "".concat(p ? "@" : "").concat(d.username) : _("usernameNotSetLabel")
                                    }), (0, a.jsx)(S.Z, {
                                        text: (0, E.x)(d.address),
                                        url: (0, I.w)(x, d.address),
                                        isBlue: !1,
                                        isCustom: !0,
                                        isTargetBlank: !0,
                                        customColor: "#979dac",
                                        weight: "font-regular",
                                        className: "rubik text-xs"
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("h2", {
                            className: "text-xl font-semibold text-primary-dark-blue",
                            children: t
                        }), f && (0, a.jsxs)("div", {
                            className: "flex items-center justify-between rounded-[100px] px-[24px] py-[16px] bg-primary-blue text-primary-white cursor-pointer hover:bg-primary-dark-blue lg:hidden",
                            onClick: function() {
                                m && m()
                            },
                            children: [(0, a.jsx)("span", {
                                className: "text-sm font-semibold text-primary-white",
                                children: _("addNFTorTokenLabel")
                            }), (0, a.jsx)("img", {
                                src: Le.Z.src,
                                width: 16,
                                height: 16
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex flex-col gap-y-[24px] border-t-[1px] border-t-solid border-t-primary-gray/40 ".concat("list" === s ? "" : "py-[24px]"),
                            children: "list" === s ? (0, a.jsx)("div", {
                                className: "flex flex-col gap-y-[24px] py-[32px] lg:overflow-y-scroll lg:scrollbar-hide",
                                style: {
                                    maxHeight: "".concat(v && "" != v ? "".concat(v, "px") : "inherit"),
                                    minHeight: "".concat(L && "" != L ? "".concat(L, "px") : "inherit")
                                },
                                children: b.map((function(e, t) {
                                    return (0, a.jsx)(bt, {
                                        item: e,
                                        onEditTokenClick: function(e) {
                                            o && o(e)
                                        },
                                        onDeleteItemClick: function(e) {
                                            c && c(e)
                                        }
                                    }, "".concat(e.address, "-").concat(e.type, "-").concat(t))
                                }))
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [i && (0, a.jsx)("span", {
                                    className: "text-base font-bold text-primary-dark-blue",
                                    children: i
                                }), (0, a.jsx)("div", {
                                    className: "flex flex-col gap-y-[8px] lg:overflow-y-scroll lg:scrollbar-hide",
                                    style: {
                                        maxHeight: "".concat(v && "" != v ? "".concat(v, "px") : "inherit"),
                                        minHeight: "".concat(L && "" != L ? "".concat(L, "px") : "inherit")
                                    },
                                    children: r && b.map((function(e, t) {
                                        return (0, a.jsx)(yt, {
                                            isItemSelected: r.findIndex((function(t) {
                                                return t.address.toLowerCase() === e.address.toLowerCase() && t.tokenId === e.tokenId && t.type === e.type
                                            })) > -1,
                                            item: e,
                                            onItemClick: function(e, t) {
                                                l && l(e, t)
                                            }
                                        }, "".concat(e.address, "-").concat(e.type, "-").concat(t))
                                    }))
                                })]
                            })
                        })]
                    })
                },
                jt = s(55002),
                vt = s(5732),
                Nt = s.n(vt),
                kt = s(58616),
                Ct = s(44889),
                St = s(88337),
                Et = s.n(St),
                It = s(64380),
                Lt = s(9495),
                Tt = function(e) {
                    var t = e.stepperItems,
                        s = e.currentStepMenu,
                        n = e.onClickStep;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, a.jsx)("div", {
                                className: "flex items-center justify-center mr-[24px]",
                                children: t.map((function(e, t) {
                                    return (0, a.jsx)(Lt.Z, {
                                        isClickable: t <= s,
                                        isCurrent: s === t,
                                        onClick: function(e) {
                                            n(t)
                                        },
                                        className: "".concat(t > 0 ? "mx-[4px]" : "mr-[4px]")
                                    }, t)
                                }))
                            }), (0, a.jsxs)("div", {
                                className: "hidden items-center lg:flex text-primary-white text-base font-semibold",
                                children: [(0, a.jsx)("span", {
                                    className: "text-xl font-semibold mr-[16px]",
                                    children: "0".concat(s + 1)
                                }), " ", (0, a.jsx)("span", {
                                    children: t[s].stepDescription
                                })]
                            })]
                        })
                    })
                },
                _t = s(21558),
                At = s(71732),
                Rt = function(e) {
                    var t = e.stepDescription,
                        s = e.isClickable,
                        n = void 0 !== s && s,
                        r = e.isCurrent,
                        i = void 0 !== r && r,
                        l = e.isCompleted,
                        c = void 0 !== l && l,
                        o = e.index,
                        d = e.onClick,
                        x = e.className,
                        p = (0, u.Z)("common").t;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("span", {
                            className: "flex justify-between items-center",
                            children: [(0, a.jsx)("span", {
                                className: "".concat(i ? "text-primary-dark-blue" : "", " ").concat(i || c ? "" : "text-primary-gray", " ").concat(c && !i ? "text-primary-blue" : "", " text-xl font-semibold mr-[18px]"),
                                children: "0".concat(o + 1)
                            }), (0, a.jsx)("span", {
                                className: "text-base font-semibold ".concat(i ? "text-primary-dark-blue" : "", " ").concat(n ? "cursor-pointer" : "", " ").concat(c && !i ? "text-primary-blue" : "", " ").concat(i || c ? "" : "text-primary-gray", " ").concat(x || ""),
                                onClick: d,
                                children: t
                            })]
                        }), c && !i && (0, a.jsxs)("span", {
                            className: "flex items-center",
                            children: [(0, a.jsx)("span", {
                                className: "text-xxs text-primary-blue mr-[8px]",
                                children: p("completeLabel")
                            }), (0, a.jsx)("img", {
                                src: At.Z.src,
                                width: 16,
                                height: 16
                            })]
                        })]
                    })
                },
                Zt = s(96342),
                Dt = s.n(Zt),
                Ft = function(e) {
                    var t = e.stepperItems,
                        s = e.onCloseMenuList,
                        n = e.currentStepMenu,
                        r = e.onClickStep,
                        i = e.onClearReplyModal,
                        l = (0, u.Z)("common").t,
                        c = (0, y.useState)(!1),
                        o = c[0],
                        d = c[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("section", {
                            className: "".concat(Dt().stepperMenuList, " fixed w-full h-full overflow-y-scroll scrollbar-hide z-10 bg-primary-white px-[16px]"),
                            children: [(0, a.jsxs)("div", {
                                className: "".concat(Dt().mainContent),
                                children: [(0, a.jsx)("div", {
                                    className: "flex items-center w-full h-[72px]",
                                    children: (0, a.jsx)("div", {
                                        className: "flex items-center justify-center rounded-full bg-primary-blue w-[40px] h-[40px] cursor-pointer hover:bg-primary-dark-blue",
                                        onClick: function() {
                                            s()
                                        },
                                        children: (0, a.jsx)("img", {
                                            src: _t.Z.src,
                                            className: "w-[16px] h-[16px]"
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "w-full mt-[30px]",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-2xl font-semibold text-primary-blue",
                                        children: l("completeStepLabel")
                                    }), (0, a.jsx)("nav", {
                                        className: "mt-[55px]",
                                        children: (0, a.jsx)("ul", {
                                            children: t.map((function(e, t) {
                                                return (0, a.jsx)("li", {
                                                    className: "flex items-center cursor-pointer mb-[32px]",
                                                    children: (0, a.jsx)("div", {
                                                        className: "flex justify-between w-full",
                                                        children: (0, a.jsx)(Rt, {
                                                            index: t,
                                                            stepDescription: e.stepDescription,
                                                            isClickable: t < n,
                                                            isCurrent: t === n,
                                                            isCompleted: t < n,
                                                            onClick: function(e) {
                                                                t > n || (r(t), s())
                                                            }
                                                        }, t)
                                                    })
                                                }, t)
                                            }))
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(ie.Z, {
                                    text: l("cancelReplyLabel"),
                                    type: {
                                        class: "primary",
                                        icon: !1,
                                        hasColoredBg: !1
                                    },
                                    size: "large",
                                    initialState: {
                                        state: "default"
                                    },
                                    className: "relative bottom-[30px]",
                                    onClick: function() {
                                        d(!0)
                                    }
                                })
                            })]
                        }), o && (0, a.jsx)(ce.Z, {
                            modalTitle: l("cancelReplyLabel"),
                            modalDescription: l("thisWillCancelChoicesLabel"),
                            action: function() {
                                d(!1), i()
                            },
                            actionClose: function() {
                                d(!1)
                            },
                            buttonsText: [l("yesCancelItLabel"), l("dismissLabel")],
                            isOpen: !0
                        })]
                    })
                },
                Bt = function(e) {
                    var t = e.stepperItems,
                        s = e.step,
                        n = e.isReviewVisible,
                        r = e.canProceed,
                        i = e.className,
                        l = e.onProceed,
                        c = e.onReview,
                        o = e.onCartClick,
                        d = e.showCartButton,
                        x = e.isItemsListVisible,
                        p = e.totalAssets,
                        f = e.onClickStep,
                        m = e.onClearReplyModal,
                        h = (0, y.useState)(!1),
                        g = h[0],
                        b = h[1],
                        w = (0, y.useState)(r),
                        j = w[0],
                        v = w[1],
                        N = (0, y.useState)(n),
                        k = N[0],
                        C = N[1],
                        S = (0, y.useState)(p),
                        E = S[0],
                        I = S[1],
                        L = (0, y.useState)(s),
                        T = L[0],
                        _ = L[1],
                        A = (0, u.Z)("common").t,
                        R = (0, y.useRef)(!1);
                    return (0, y.useEffect)((function() {
                        return R.current = !0,
                            function() {
                                R.current = !1
                            }
                    }), []), (0, y.useEffect)((function() {
                        v(r)
                    }), [r]), (0, y.useEffect)((function() {
                        I(p)
                    }), [p]), (0, y.useEffect)((function() {
                        _(s)
                    }), [s]), (0, y.useEffect)((function() {
                        C(n)
                    }), [n]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "".concat(Et().stepperMenu, " flex ").concat(k ? "justify-center" : "justify-between", " items-center w-full h-[72px] bg-primary-blue rounded-b-[40px] px-[16px] ").concat(i),
                            children: T <= 2 && !k ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex items-center justify-center w-[40px] h-[40px] mr-[10px]",
                                        children: (0, a.jsx)("img", {
                                            src: Ct.Z.src,
                                            className: "cursor-pointer",
                                            onClick: function() {
                                                b(!0)
                                            },
                                            width: 16,
                                            height: 16
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "flex items-center justify-center",
                                        children: t && (0, a.jsx)(Tt, {
                                            stepperItems: t,
                                            currentStepMenu: T,
                                            onClickStep: f
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, a.jsx)(a.Fragment, {
                                        children: T < 2 ? (0, a.jsx)(a.Fragment, {
                                            children: x ? (0, a.jsx)(a.Fragment, {
                                                children: d ? (0, a.jsx)(ie.Z, {
                                                    text: A("cartLabel"),
                                                    type: {
                                                        class: "primary",
                                                        hasColoredBg: !0,
                                                        icon: !1
                                                    },
                                                    size: "small",
                                                    onClick: function() {
                                                        o && o()
                                                    },
                                                    initialState: {
                                                        state: E > 0 ? "default" : "disabled"
                                                    },
                                                    className: "lg:px-8 lg:py-4",
                                                    showNotifications: !0,
                                                    notificationsNumber: E
                                                }) : (0, a.jsx)(ie.Z, {
                                                    text: A("proceedLabel"),
                                                    type: {
                                                        class: "primary",
                                                        hasColoredBg: !0,
                                                        icon: !0
                                                    },
                                                    size: "small",
                                                    onClick: function() {
                                                        l && l()
                                                    },
                                                    initialState: {
                                                        state: j ? "default" : "disabled"
                                                    },
                                                    iconSrc: Ke.Z.src,
                                                    className: "lg:px-8 lg:py-4"
                                                })
                                            }) : (0, a.jsx)(ie.Z, {
                                                text: A("cartLabel"),
                                                type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !1
                                                },
                                                size: "small",
                                                onClick: function() {
                                                    o && o()
                                                },
                                                initialState: {
                                                    state: E > 0 ? "default" : "disabled"
                                                },
                                                className: "lg:px-8 lg:py-4",
                                                showNotifications: !0,
                                                notificationsNumber: E
                                            })
                                        }) : (0, a.jsx)(ie.Z, {
                                            text: A("reviewLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !0
                                            },
                                            size: "small",
                                            onClick: function() {
                                                c && c(), C(!0)
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "lg:px-8 lg:py-4"
                                        })
                                    })
                                })]
                            }) : (0, a.jsx)("div", {
                                className: "w-full flex justify-center",
                                children: (0, a.jsx)("img", {
                                    src: It.Z.src,
                                    className: "w-[170px] h-[auto] lg:w-[187px]"
                                })
                            })
                        }), g && t && (0, a.jsx)(Ft, {
                            stepperItems: t,
                            onCloseMenuList: function() {
                                b(!1)
                            },
                            currentStepMenu: T,
                            onClickStep: f,
                            onClearReplyModal: m
                        })]
                    })
                },
                Ot = s(67729),
                Ut = s.n(Ot),
                Ht = "/_next/static/media/swap_white.81f6d0e7.svg",
                Vt = "/_next/static/media/swap_arrows_vertical_dark_blue.c82f398f.svg",
                Pt = "/_next/static/media/emoji_neutral.9c5c2eae.svg",
                Mt = s(91886),
                zt = s(16876),
                Wt = s(11408),
                Jt = s.n(Wt),
                Gt = s(45713),
                Kt = function(e) {
                    var t = e.status,
                        s = e.canInteract,
                        n = e.enabled,
                        r = e.forceExtended,
                        i = e.onClickSave,
                        l = e.onClickHide,
                        c = e.className,
                        o = (0, u.Z)("common").t,
                        d = (0, y.useState)(!1),
                        x = d[0],
                        p = d[1],
                        f = (0, y.useState)(!1),
                        m = f[0],
                        h = f[1],
                        g = (0, y.useState)(t),
                        b = g[0],
                        w = g[1],
                        j = (0, Gt.Z)(!1),
                        v = j.ref,
                        N = j.isComponentVisible,
                        k = j.setIsComponentVisible;
                    return (0, y.useEffect)((function() {
                        w(b)
                    }), [t]), (0, y.useEffect)((function() {
                        N || h(!1)
                    }), [N]), (0, a.jsx)("div", {
                        ref: v,
                        className: c || "",
                        children: s ? (0, a.jsxs)("div", {
                            className: "relative",
                            children: [(0, a.jsxs)("div", {
                                className: "group flex items-center justify-center select-none ".concat(n ? "cursor-pointer" : "", " ").concat(x || m || r ? "w-[40px] h-[40px] gap-x-[8px] rounded-full lg:rounded-[36px] lg:w-fit lg:pl-[16px] lg:pr-[12px]" : "w-[40px] h-[40px] rounded-full", " border-[1px] border-solid ").concat(n ? "".concat("NONE" === b ? m ? "border-primary-dark-blue" : "border-primary-blue hover:border-primary-dark-blue" : "SAVED" === b ? m ? "border-primary-dark-blue" : "border-secondary-green hover:border-primary-dark-blue" : m ? "border-primary-dark-blue" : "border-state-warning hover:border-primary-dark-blue") : "border-primary-gray"),
                                onMouseEnter: function() {
                                    p(!0)
                                },
                                onMouseLeave: function() {
                                    p(!1)
                                },
                                onClick: function() {
                                    n && (h(!m), k(!N))
                                },
                                children: [(x || m || r) && (0, a.jsx)("span", {
                                    className: "hidden ".concat("".concat("NONE" === b ? m ? "text-primary-dark-blue" : "text-primary-blue" : "SAVED" === b ? m ? "text-primary-dark-blue" : "text-secondary-green" : m ? "text-primary-dark-blue" : "text-state-warning"), " text-sm font-semibold group-hover:text-primary-dark-blue lg:inline"),
                                    children: o("NONE" === b ? "interestedLabel" : "SAVED" === b ? "savedLabel" : "hiddenLabel")
                                }), (0, a.jsx)("img", {
                                    src: "NONE" === b ? Pt : "SAVED" === b ? Mt.Z.src : zt.Z.src,
                                    className: "".concat(n ? "" : "".concat(Jt().disabled)),
                                    width: 17,
                                    height: 17
                                })]
                            }), m && N && (0, a.jsxs)("div", {
                                className: "absolute rounded-[8px] bg-primary-white shadow-md top-[0] right-[0] w-[160px] select-none",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center justify-end px-[12px] py-[8px] gap-x-[12px] cursor-pointer rounded-t-[8px] hover:bg-primary-gray/20",
                                    onClick: function() {
                                        i(), h(!1), k(!1), w("SAVED")
                                    },
                                    children: [(0, a.jsx)("span", {
                                        className: "text-xs font-semibold text-primary-dark-blue",
                                        children: o("yesSaveItLabel")
                                    }), (0, a.jsx)("img", {
                                        src: Mt.Z.src,
                                        className: "w-[17px] h-[17px]"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center justify-end px-[12px] py-[8px] gap-x-[12px] cursor-pointer rounded-b-[8px] hover:bg-primary-gray/20",
                                    onClick: function() {
                                        l(), h(!1), k(!1), w("HIDDEN")
                                    },
                                    children: [(0, a.jsx)("span", {
                                        className: "text-xs font-semibold text-primary-dark-blue",
                                        children: o("noHideItLabel")
                                    }), (0, a.jsx)("img", {
                                        src: zt.Z.src,
                                        width: 17,
                                        height: 17
                                    })]
                                })]
                            })]
                        }) : (0, a.jsxs)("div", {
                            className: "flex items-center gap-x-[8px] select-none",
                            children: [(0, a.jsx)("span", {
                                className: "text-sm font-semibold ".concat(n ? "text-primary-dark-blue" : "text-primary-gray"),
                                children: "SAVED" === t ? o("creatorInterestedLabel") : "HIDDEN" === t ? o("creatorNotInterestedLabel") : ""
                            }), ("SAVED" === t || "HIDDEN" === t) && (0, a.jsx)("img", {
                                src: "SAVED" === t ? Mt.Z.src : zt.Z.src,
                                className: "".concat(n ? "" : "".concat(Jt().disabled)),
                                width: 17,
                                height: 17
                            })]
                        })
                    })
                },
                qt = "/_next/static/media/vertical_dots.cb1e2d72.svg",
                Xt = s(80697),
                Yt = s(99350),
                Qt = s(15532);

            function $t(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function es(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), n.forEach((function(t) {
                        $t(e, t, s[t])
                    }))
                }
                return e
            }
            var ts = function(e) {
                    var t, s = e.post,
                        n = e.waccount,
                        r = e.creatorThread,
                        i = e.onDeleteReplyClick,
                        l = e.isLocked,
                        c = e.isPreview,
                        o = e.postParent,
                        d = (0, y.useRef)(),
                        x = (0, u.Z)("common").t,
                        p = (0, y.useState)(!1),
                        f = p[0],
                        m = p[1],
                        h = (0, y.useState)(!1),
                        g = h[0],
                        b = h[1],
                        w = (0, y.useState)(!1),
                        j = w[0],
                        v = w[1],
                        N = (0, re.C)((function(e) {
                            return e
                        })).replymodal,
                        k = (0, re.T)(),
                        L = (0, Gt.Z)(!1),
                        _ = L.ref,
                        A = L.isComponentVisible,
                        R = L.setIsComponentVisible,
                        Z = (0, y.useCallback)((function(e) {
                            return e < 100 ? "DIFFERENT" : "PERFECT"
                        }), []),
                        F = (0, y.useCallback)((function(e) {
                            return T()(new Date(1e3 * e)).format("MMMM D YYYY, h:mm a")
                        }), []),
                        B = (0, y.useCallback)((function(e, t) {
                            return !!e && !!e.account && t.address.toLowerCase() === e.account.toLowerCase() && t.networkId === e.currentNetworkId
                        }), []),
                        O = function(e, t) {
                            k((0, Qt.eV)("maker")), k((0, Qt.Ky)("INIT_MAKER_FROM_POST")), k((0, Qt.M7)(t.creator)), k((0, Qt.Bu)(e.creator));
                            var s = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var a, i = e.assets.offered[Symbol.iterator](); !(s = (a = i.next()).done); s = !0) {
                                    var l = a.value;
                                    k((0, Qt.c6)({
                                        id: "ERC721" === l.type || "ERC1155" === l.type ? l.tokenId : null,
                                        type: l.type,
                                        amount: "NATIVE" === l.type || "ERC20" === l.type || "ERC1155" === l.type ? l.amount : null,
                                        amountHumanReadable: "NATIVE" === l.type || "ERC20" === l.type ? l.amountHumanReadable : null,
                                        owner: e.creator.address,
                                        collection: l.collection,
                                        imageSrc: l.imageUrl,
                                        isApproved: !1,
                                        hasPlaceholder: !l.imageUrl
                                    }))
                                }
                            } catch (f) {
                                n = !0, r = f
                            } finally {
                                try {
                                    s || null == i.return || i.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            var c = !0,
                                o = !1,
                                d = void 0;
                            try {
                                for (var u, x = e.assets.wanted[Symbol.iterator](); !(c = (u = x.next()).done); c = !0) {
                                    var p = u.value;
                                    k((0, Qt.TG)({
                                        id: "ERC721" === p.type || "ERC1155" === p.type ? p.tokenId : null,
                                        type: p.type,
                                        amount: "NATIVE" === p.type || "ERC20" === p.type || "ERC1155" === p.type ? p.amount : null,
                                        amountHumanReadable: "NATIVE" === p.type || "ERC20" === p.type ? p.amountHumanReadable : null,
                                        owner: t.creator.address,
                                        collection: p.collection,
                                        imageSrc: p.imageUrl,
                                        isApproved: !1,
                                        hasPlaceholder: !p.imageUrl
                                    }))
                                }
                            } catch (f) {
                                o = !0, d = f
                            } finally {
                                try {
                                    c || null == x.return || x.return()
                                } finally {
                                    if (o) throw d
                                }
                            }
                            k((0, Qt.D0)()), k((0, Qt.Um)(3)), k((0, Qt.ys)(t.id)), k((0, Qt.dc)(e.id)), k((0, Qt.r$)(!0)), document.body.classList.add("no-scroll")
                        },
                        U = (0, y.useCallback)((function(e) {
                            var t = (new Date).getTime() / 1e3;
                            return !e.expirationDate || e.expirationDate < t
                        }), []);
                    return (0, y.useEffect)((function() {
                        return d.current = !0,
                            function() {
                                d.current = !1
                            }
                    }), []), (0, y.useEffect)((function() {
                        A || b(!1)
                    }), [A]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: _,
                            children: (0, a.jsx)("div", {
                                className: "".concat(Ut().reply, " ").concat(l ? "".concat(Ut().replyLocked) : "", " ").concat(s.accepted ? "".concat(Ut().accepted) : "", " flex flex-col shadow-md border-gray-200 border-[1px] border-solid w-full rounded-t-[0px] rounded-tl-[16px] rounded-b-[16px] transition relative"),
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-y-[20px] rounded-[16px] rounded-tr-[40px] ".concat(s.accepted ? "rounded-bl-[40px] rounded-br-[16px]" : "rounded-b-[16px]", " p-[20px] w-full h-full bg-primary-white z-[1] lg:p-[28px]"),
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-col w-full gap-y-[24px] lg:flex-row lg:items-center lg:justify-between",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex items-center gap-x-[12px]",
                                                children: [(0, a.jsx)(ve, {
                                                    scoreStatus: Z(s.score),
                                                    className: "flex w-fit",
                                                    isLocked: l
                                                }), (0, a.jsx)("span", {
                                                    className: "rubik text-xs font-light lg:flex-none ".concat(l ? "text-primary-gray" : "text-primary-dark-blue"),
                                                    children: F(s.creationDate)
                                                })]
                                            }), n && n.account && n.account.toLowerCase() === s.creator.address.toLowerCase() && n.currentNetworkId === s.networkId && !c && (0, a.jsxs)("div", {
                                                className: "relative lg:hidden",
                                                children: [(0, a.jsx)("div", {
                                                    className: "flex items-center justify-center w-[36px] h-[36px] bg-primary-blue rounded-full cursor-pointer select-none hover:bg-primary-dark-blue",
                                                    onClick: function() {
                                                        b(!g), R(!A)
                                                    },
                                                    children: (0, a.jsx)("img", {
                                                        src: Xt.Z.src,
                                                        width: 16,
                                                        height: 16
                                                    })
                                                }), g && A && (0, a.jsx)("div", {
                                                    className: "absolute rounded-[8px] bg-primary-white shadow-md top-[0] right-[0] w-[160px] select-none",
                                                    children: (0, a.jsx)("div", {
                                                        className: "flex items-center justify-end px-[12px] py-[8px] gap-x-[12px] cursor-pointer rounded-t-[8px] hover:bg-primary-gray/20",
                                                        onClick: function() {
                                                            v(!0), R(!1)
                                                        },
                                                        children: (0, a.jsx)("span", {
                                                            className: "text-xs font-semibold text-primary-dark-blue",
                                                            children: x("deleteLabel")
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col-reverse gap-y-[12px] lg:flex-none lg:gap-x-[12px] lg:justify-start lg:flex-row",
                                            children: [(0, a.jsx)("div", {
                                                className: "flex justify-end",
                                                children: (0, a.jsx)(je, {
                                                    replyBubbleStatus: "FILLED",
                                                    onClickCustomize: function() {},
                                                    replyMessage: s.messages[0].type.length > 0 ? x("MESSAGE_".concat(s.messages[0].type)) : N.reply ? N.reply : x("MESSAGE_9"),
                                                    isLocked: l,
                                                    isReadOnly: !0,
                                                    isCreator: B(n, es({}, s.creator, {
                                                        networkId: s.networkId
                                                    }))
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "flex gap-x-[16px] flex-row-reverse justify-start lg:flex-row lg:justify-end",
                                                children: [(0, a.jsx)(C.Z, {
                                                    address: s.creator.address,
                                                    src: s.creator.imageUrl ? s.creator.imageUrl : "",
                                                    isNFT: s.creator.isNft,
                                                    sizesClassNames: "w-[40px] h-[40px]",
                                                    jazziconSize: {
                                                        defaultSize: 40,
                                                        breakpoints: [],
                                                        sizes: []
                                                    }
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-col select-none flex-none",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-base font-semibold text-right ".concat(l ? "text-primary-gray" : "text-primary-dark-blue", " lg:text-left"),
                                                        children: s.creator.username ? "@".concat(s.creator.username) : "".concat(x("usernameNotSetLabel"))
                                                    }), (0, a.jsx)("span", {
                                                        className: "rubik text-xs font-regular cursor-pointer text-primary-gray",
                                                        children: s.creator && (0, a.jsx)(S.Z, {
                                                            text: (0, E.x)(s.creator.address ? s.creator.address : ""),
                                                            url: (0, I.w)(s.networkId, s.creator.address ? s.creator.address : ""),
                                                            isCustom: !0,
                                                            isTargetBlank: !0,
                                                            customColor: "#979dac",
                                                            weight: "font-regular",
                                                            className: "text-xs"
                                                        })
                                                    })]
                                                }), n && n.account && n.account.toLowerCase() === s.creator.address.toLowerCase() && n.currentNetworkId === s.networkId && (0, a.jsxs)("div", {
                                                    className: "relative hidden lg:block",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "flex items-center justify-center w-[36px] h-[36px] ounded-full cursor-pointer select-none",
                                                        onClick: function() {
                                                            b(!g), R(!A)
                                                        },
                                                        children: (0, a.jsx)("img", {
                                                            src: qt,
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    }), g && A && (0, a.jsx)("div", {
                                                        className: "absolute rounded-[8px] bg-primary-white shadow-md top-[0] right-[0] w-[160px] select-none",
                                                        children: (0, a.jsx)("div", {
                                                            className: "flex items-center justify-end px-[12px] py-[8px] gap-x-[12px] cursor-pointer rounded-t-[8px] hover:bg-primary-gray/20",
                                                            onClick: function() {
                                                                v(!0), R(!1)
                                                            },
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-xs font-semibold text-primary-dark-blue",
                                                                children: x("deleteLabel")
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "w-full",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[32px] lg:gap-y-[24px]",
                                            children: [f ? (0, a.jsxs)("div", {
                                                className: "flex flex-col gap-y-[32px]",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "flex gap-x-[16px]",
                                                    children: [(0, a.jsx)(C.Z, {
                                                        address: r.address,
                                                        src: r.imageUrl,
                                                        sizesClassNames: "w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                                        jazziconSize: {
                                                            defaultSize: 32,
                                                            breakpoints: [1024],
                                                            sizes: [40]
                                                        },
                                                        isNFT: r.isNft
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex flex-col justify-center",
                                                        children: [(0, a.jsx)("span", {
                                                            className: "".concat(Ut().username, " text-sm font-semibold ").concat(l ? "text-primary-gray" : "text-primary-dark-blue"),
                                                            children: r.username ? "@".concat(r.username) : (0, a.jsx)(a.Fragment, {
                                                                children: (0, a.jsx)("span", {
                                                                    className: "text-primary-gray rubik text-xs",
                                                                    children: x("usernameNotSetLabel")
                                                                })
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            className: "rubik text-xs font-regular text-primary-gray",
                                                            children: (0, E.N)(r.address)
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-col gap-y-[24px]",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-lg text-primary-dark-blue font-semibold",
                                                        children: x("offeredNFTsLabel")
                                                    }), s.assets.wanted && s.assets.wanted.map((function(e, t) {
                                                        return (0, a.jsx)(q, {
                                                            asset: e,
                                                            isCollection: !1,
                                                            showDifferent: !0,
                                                            isDifferent: e.isDifferent
                                                        }, "".concat(e.address, "-").concat(t))
                                                    })), s.assets.wanted && s.assets.wanted.some((function(e) {
                                                        return "ERC1155" === e.type || "ERC721" === e.type
                                                    })) && n.jwtToken && n.currentNetworkId && (0, a.jsxs)("div", {
                                                        className: "flex flex-col gap-y-[8px]",
                                                        children: [(0, a.jsx)(ae, {
                                                            assetsAccountLeft: {
                                                                user: r,
                                                                assets: s.assets.wanted
                                                            },
                                                            onDoesNotOwn: function() {},
                                                            jwtToken: n.jwtToken,
                                                            networkId: n.currentNetworkId,
                                                            isLocked: l,
                                                            tooltipPosition: "top"
                                                        }), (0, a.jsx)(X.Z, {
                                                            assetsAccountLeft: s.assets.wanted,
                                                            networkId: n.currentNetworkId,
                                                            account: s.creator.address
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex items-center my-[8px] relative",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "h-[1px] w-full bg-primary-gray/40"
                                                    }), (0, a.jsx)("div", {
                                                        className: "absolute w-[40px] h-[40px] bg-primary-white left-[50%] -translate-x-[50%]",
                                                        children: (0, a.jsx)("img", {
                                                            src: Vt,
                                                            width: 40,
                                                            height: 40
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex gap-x-[16px]",
                                                    children: [(0, a.jsx)(C.Z, {
                                                        address: s.creator.address,
                                                        src: s.creator.imageUrl,
                                                        sizesClassNames: "w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                                        jazziconSize: {
                                                            defaultSize: 32,
                                                            breakpoints: [1024],
                                                            sizes: [40]
                                                        },
                                                        isNFT: s.creator.isNft
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex flex-col justify-center",
                                                        children: [(0, a.jsx)("span", {
                                                            className: "".concat(Ut().username, " text-sm font-semibold text-primary-dark-blue"),
                                                            children: s.creator.username ? "@".concat(s.creator.username) : (0, a.jsx)(a.Fragment, {
                                                                children: (0, a.jsx)("span", {
                                                                    className: "text-primary-gray rubik text-xs",
                                                                    children: x("usernameNotSetLabel")
                                                                })
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            className: "rubik text-xs font-regular text-primary-gray",
                                                            children: (0, E.N)(s.creator.address)
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-col gap-y-[24px]",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-lg text-primary-dark-blue font-semibold",
                                                        children: x("traderOfferLabel")
                                                    }), s.assets.offered && s.assets.offered.map((function(e, t) {
                                                        return (0, a.jsx)(q, {
                                                            asset: e,
                                                            isCollection: !1,
                                                            showDifferent: !0,
                                                            isDifferent: e.isDifferent
                                                        }, "".concat(e.address, "-").concat(t))
                                                    })), s.assets.offered && s.assets.offered.some((function(e) {
                                                        return "ERC1155" === e.type || "ERC721" === e.type
                                                    })) && n.jwtToken && n.currentNetworkId && (0, a.jsxs)("div", {
                                                        className: "flex flex-col gap-y-[8px]",
                                                        children: [(0, a.jsx)(ae, {
                                                            assetsAccountLeft: {
                                                                user: s.creator,
                                                                assets: s.assets.offered
                                                            },
                                                            onDoesNotOwn: function() {},
                                                            jwtToken: n.jwtToken,
                                                            networkId: n.currentNetworkId,
                                                            isLocked: l,
                                                            tooltipPosition: "top"
                                                        }), (0, a.jsx)(X.Z, {
                                                            assetsAccountLeft: s.assets.offered,
                                                            networkId: n.currentNetworkId,
                                                            account: n.account ? n.account : void 0
                                                        })]
                                                    })]
                                                })]
                                            }) : (0, a.jsxs)("div", {
                                                className: "flex gap-x-[16px] items-center",
                                                children: [(0, a.jsx)("div", {
                                                    className: "".concat((t = s.assets.wanted ? s.assets.wanted : [], t ? 1 === t.length ? "" : 2 === t.length ? "min-w-[60px]" : 3 === t.length ? "min-w-[100px]" : void 0 : "")),
                                                    children: (0, a.jsx)(W.Z, {
                                                        mode: "MOBILE_SHRINKED",
                                                        assets: s.assets.wanted ? s.assets.wanted : [],
                                                        maxItemDisplayedDesktop: 6,
                                                        maxItemDisplayedMobile: 2,
                                                        classNameAssetCard: "w-[40px] h-[40px]",
                                                        classNameCounterAssets: "w-[40px] h-[40px]",
                                                        desktopAssetCardWidthWithGap: 48,
                                                        deltaX: 10
                                                    })
                                                }), (0, a.jsx)("img", {
                                                    src: Ie.Z.src,
                                                    className: "select-none",
                                                    width: 40,
                                                    height: 40
                                                }), (0, a.jsx)("div", {
                                                    className: "min-w-[90px]",
                                                    children: (0, a.jsx)(W.Z, {
                                                        mode: "MOBILE_SHRINKED",
                                                        assets: s.assets.offered ? s.assets.offered : [],
                                                        maxItemDisplayedDesktop: 6,
                                                        maxItemDisplayedMobile: 2,
                                                        classNameAssetCard: "w-[40px] h-[40px]",
                                                        classNameCounterAssets: "w-[40px] h-[40px]",
                                                        desktopAssetCardWidthWithGap: 48,
                                                        deltaX: 10
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col w-full gap-y-[24px] lg:flex-row lg:items-end lg:gap-y-[0px] ".concat(f ? "lg:justify-end" : "lg:justify-between"),
                                                children: [!f && (0, a.jsxs)("div", {
                                                    className: "flex flex-col gap-y-[12px] lg:flex-row lg:items-center lg:gap-x-[12px] lg:gap-y-[0px]",
                                                    children: [(0, a.jsx)(ae, {
                                                        assetsAccountLeft: {
                                                            user: {
                                                                networkId: s.networkId,
                                                                username: s.creator.username ? s.creator.username : "",
                                                                address: s.creator.address ? s.creator.address : "",
                                                                imageUrl: s.creator.imageUrl ? s.creator.imageUrl : "",
                                                                isVerified: s.creator.isVerified,
                                                                isNft: s.creator.isNft
                                                            },
                                                            assets: s.assets.offered ? s.assets.offered : []
                                                        },
                                                        assetsAccountRight: {
                                                            user: {
                                                                networkId: r.networkId,
                                                                username: r.username ? r.username : "",
                                                                address: r.address ? r.address : "",
                                                                imageUrl: r.imageUrl ? r.imageUrl : "",
                                                                isVerified: r.isVerified,
                                                                isNft: r.isNft
                                                            },
                                                            assets: s.assets.wanted ? s.assets.wanted : []
                                                        },
                                                        onDoesNotOwn: function() {},
                                                        jwtToken: n.jwtToken ? n.jwtToken : "",
                                                        networkId: n.currentNetworkId ? n.currentNetworkId : "",
                                                        isLocked: l,
                                                        tooltipPosition: "top"
                                                    }), (0, a.jsx)("span", {
                                                        className: "hidden rubik text-xs font-regular text-primary-gray lg:inline",
                                                        children: "/"
                                                    }), (0, a.jsx)(X.Z, {
                                                        assetsAccountLeft: s.assets.wanted ? s.assets.wanted : [],
                                                        assetsAccountRight: s.assets.offered ? s.assets.offered : [],
                                                        networkId: n && n.currentNetworkId ? n.currentNetworkId : ""
                                                    })]
                                                }), !c && (0, a.jsxs)("div", {
                                                    className: "flex flex-row-reverse items-center justify-between lg:flex-row lg:gap-x-[16px]",
                                                    children: [s.status !== oe.RW.CANCELED && o && !U(o) && (0, a.jsxs)("div", {
                                                        className: "flex gap-x-[8px] lg:gap-x-[16px]",
                                                        children: [(0, a.jsx)(Kt, {
                                                            status: 0 === s.like ? "NONE" : 1 === s.like ? "SAVED" : "HIDDEN",
                                                            canInteract: !!B(n, es({}, r, {
                                                                networkId: s.networkId
                                                            })),
                                                            enabled: !l,
                                                            forceExtended: f,
                                                            onClickSave: function() {
                                                                var e, t;
                                                                e = s.id, t = r, (0, ee.Tn)((0, $.f)("likePost", [e]), {
                                                                    like: 1,
                                                                    creatorAddress: t.address
                                                                }, {
                                                                    "x-api-key": "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB",
                                                                    "nfttrader-signed-message": ""
                                                                }).then((function() {})).catch((function(e) {
                                                                    console.log(e)
                                                                }))
                                                            },
                                                            onClickHide: function() {
                                                                var e, t;
                                                                e = s.id, t = r, (0, ee.Tn)((0, $.f)("likePost", [e]), {
                                                                    like: 2,
                                                                    creatorAddress: t.address
                                                                }, {
                                                                    "x-api-key": "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB",
                                                                    "nfttrader-signed-message": ""
                                                                }).then((function() {})).catch((function(e) {
                                                                    console.log(e)
                                                                }))
                                                            }
                                                        }), B(n, es({}, r, {
                                                            networkId: s.networkId
                                                        })) && o && o.status === oe.RW.ACTIVE && !U(o) && (0, a.jsxs)(a.Fragment, {
                                                            children: [(0, a.jsxs)("div", {
                                                                onClick: function() {
                                                                    O(s, o)
                                                                },
                                                                className: "flex items-center justify-center gap-x-[11px] mr-[4px] bg-primary-blue px-[16px] py-[10px] rounded-[36px] cursor-pointer select-none hover:bg-primary-dark-blue gtm-create-trade-from-post ".concat(f ? "lg:flex" : "lg:hidden"),
                                                                children: [(0, a.jsx)("span", {
                                                                    className: "text-sm font-semibold text-primary-white",
                                                                    children: x("confirmLabel")
                                                                }), (0, a.jsx)("img", {
                                                                    src: Ht,
                                                                    className: "w-[18px]"
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "hidden cursor-pointer rounded-[100%] mr-[4px] gtm-create-trade-from-post ".concat(f ? "" : "lg:flex", " lg:items-center lg:justify-center lg:w-[40px] lg:h-[40px] lg:bg-primary-blue  hover:bg-primary-dark-blue"),
                                                                onClick: function() {
                                                                    O(s, o)
                                                                },
                                                                children: (0, a.jsx)("img", {
                                                                    src: Ht,
                                                                    className: "w-[18px]"
                                                                })
                                                            })]
                                                        })]
                                                    }), o && s.status !== oe.RW.CANCELED ? (0, a.jsxs)("div", {
                                                        className: "flex items-center justify-between gap-x-[8px] ".concat(l ? "" : "cursor-pointer"),
                                                        onClick: function() {
                                                            l || m(!f)
                                                        },
                                                        children: [(0, a.jsx)("span", {
                                                            className: "text-sm font-semibold ".concat(o.status !== oe.RW.RESERVED ? l ? "text-primary-dark-blue" : "text-primary-blue" : s.accepted ? "text-primary-blue" : l ? "text-primary-dark-blue" : "text-primary-blue"),
                                                            children: o.status !== oe.RW.RESERVED ? x(l ? "lockedLabel" : f ? "closeLabel" : "detailsLabel") : s.accepted ? x("onGoingDealLabel") : x(l ? "lockedLabel" : f ? "closeLabel" : "detailsLabel")
                                                        }), o.status !== oe.RW.RESERVED ? l ? (0, a.jsx)("img", {
                                                            src: D.Z.src,
                                                            className: "w-[11px]"
                                                        }) : (0, a.jsx)("img", {
                                                            src: H.Z.src,
                                                            className: "w-[10px] ".concat(f ? "rotate-180" : "")
                                                        }) : (0, a.jsx)(a.Fragment, {
                                                            children: s.accepted ? (0, a.jsx)("img", {
                                                                src: Yt.Z.src,
                                                                className: "w-[20px] animate-spin"
                                                            }) : l ? (0, a.jsx)("img", {
                                                                src: D.Z.src,
                                                                className: "w-[11px]"
                                                            }) : (0, a.jsx)("img", {
                                                                src: H.Z.src,
                                                                className: "w-[10px] ".concat(f ? "rotate-180" : "")
                                                            })
                                                        })]
                                                    }) : (0, a.jsx)("div", {
                                                        children: (0, a.jsx)("span", {
                                                            className: "text-sm font-semibold text-primary-gray",
                                                            children: x("canceledLabel")
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), j && (0, a.jsx)(ce.Z, {
                            modalTitle: x("deleteThePostLabel"),
                            modalDescription: x("alertRemovePostLabel"),
                            action: function(e) {
                                e("loading"), i(e, v)
                            },
                            actionClose: function() {
                                v(!1)
                            },
                            buttonsText: [x("yesDeleteItLabel"), x("cancelLabel")],
                            isOpen: !0,
                            closeOnAction: !1
                        })]
                    })
                },
                ss = s(93442);

            function ns(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function rs(e) {
                return function(e) {
                    if (Array.isArray(e)) return ns(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return ns(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return ns(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var as = function(e) {
                    var t = e.onClearReplyModal,
                        s = (0, u.Z)("common").t,
                        n = (0, y.useRef)(!1),
                        r = (0, y.useState)(!1),
                        i = r[0],
                        l = r[1],
                        c = (0, y.useState)(!1),
                        o = c[0],
                        d = c[1],
                        x = (0, y.useState)(!1),
                        p = x[0],
                        f = x[1],
                        m = (0, y.useState)(0),
                        h = m[0],
                        g = m[1],
                        b = (0, y.useState)(!1),
                        w = b[0],
                        j = b[1],
                        v = (0, y.useState)([]),
                        N = v[0],
                        k = v[1],
                        C = (0, y.useState)(),
                        S = C[0],
                        E = C[1],
                        I = (0, y.useState)(),
                        L = I[0],
                        T = I[1],
                        _ = (0, y.useState)(),
                        A = _[0],
                        R = _[1],
                        Z = (0, y.useState)(),
                        B = Z[0],
                        O = Z[1],
                        U = (0, y.useState)([]),
                        H = U[0],
                        V = U[1],
                        P = (0, y.useState)([]),
                        M = P[0],
                        z = P[1],
                        W = (0, y.useState)(0),
                        J = W[0],
                        G = W[1],
                        K = (0, y.useState)(0),
                        q = K[0],
                        X = K[1],
                        Y = (0, y.useState)(0),
                        Q = Y[0],
                        $ = Y[1],
                        ee = (0, y.useState)(!0),
                        te = ee[0],
                        se = ee[1],
                        ne = (0, y.useState)([]),
                        ae = ne[0],
                        le = ne[1],
                        ce = (0, y.useState)([]),
                        de = ce[0],
                        ue = ce[1],
                        xe = (0, Ze.Z)("/api/mock/post/replies", 0),
                        pe = xe.data,
                        fe = xe.isLoading,
                        me = xe.isError,
                        he = (0, y.useState)(!1),
                        ge = he[0],
                        ye = he[1],
                        be = (0, re.T)(),
                        we = (0, re.C)((function(e) {
                            return e
                        })),
                        je = we.replymodal,
                        ve = we.waccount,
                        Ne = je.currentStepMenu,
                        ke = je.post,
                        Ce = je.wanted,
                        Ee = je.offered,
                        Ie = je.canProceed,
                        Le = je.isCustomCollectionModalOpen,
                        Te = je.stepperMenuSteps,
                        _e = je.replyIndexSelected,
                        Ae = je.replyScoreValue,
                        Re = je.replyMessageType,
                        Oe = ve.currentNetworkId,
                        Ue = ve.jwtToken,
                        He = ve.account,
                        Ve = function(e) {
                            -1 === H.findIndex((function(t) {
                                if (e.type === t.type && e.address.toLowerCase() === t.address.toLowerCase()) {
                                    if ("NATIVE" === e.type || "ERC20" === e.type) return !0;
                                    if (("ERC1155" === e.type || "ERC721" === e.type) && e.tokenId === t.tokenId) return !0
                                }
                                return !1
                            })) && n.current && V(H.concat([e]))
                        },
                        Pe = function(e) {
                            n.current && V((function(t) {
                                return t.filter((function(t) {
                                    return e.type !== t.type || e.address.toLowerCase() != t.address.toLowerCase() || e.type === t.type && ("ERC721" === t.type || "ERC1155" === t.type) && e.tokenId !== t.tokenId
                                }))
                            }))
                        },
                        Me = function(e) {
                            -1 === M.findIndex((function(t) {
                                if (e.type === t.type && e.address.toLowerCase() === t.address.toLowerCase()) {
                                    if ("NATIVE" === e.type || "ERC20" === e.type) return !0;
                                    if (("ERC1155" === e.type || "ERC721" === e.type) && e.tokenId === t.tokenId) return !0
                                }
                                return !1
                            })) && n.current && z(M.concat([e]))
                        },
                        We = function(e) {
                            n.current && z((function(t) {
                                return t.filter((function(t) {
                                    return e.type !== t.type || e.address.toLowerCase() != t.address.toLowerCase() || e.type === t.type && ("ERC721" === t.type || "ERC1155" === t.type) && e.tokenId !== t.tokenId
                                }))
                            }))
                        };
                    return (0, y.useEffect)((function() {
                        return n.current = !0,
                            function() {
                                n.current = !1
                            }
                    }), []), (0, y.useEffect)((function() {
                        n.current && (G(H.filter((function(e) {
                            return "ERC721" === e.type || "ERC1155" === e.type
                        })).length), X(H.filter((function(e) {
                            return "ERC20" === e.type || "NATIVE" === e.type
                        })).length))
                    }), [H]), (0, y.useEffect)((function() {
                        n.current && $(M.filter((function(e) {
                            return "ERC721" === e.type || "ERC1155" === e.type
                        })).length)
                    }), [M]), (0, y.useEffect)((function() {
                        ke && (ke.type === oe.JH.A1 || ke.type === oe.JH.B1 || ke.type === oe.JH.C1) && Oe && Ue && He && ke.assets.offered && Ee ? 0 === Ne ? (n.current && j(!0), be((0, ze.Gu)())) : 1 === Ne ? (n.current && (V(Ee), j(!1), l(!0)), be((0, ze.Gu)())) : (2 === Ne || 3 === Ne) && be((0, ze.Gu)()) : ke && Oe && Ue && He && Ce && Ee && (ke.type === oe.JH.A2 || ke.type === oe.JH.B2) && (0 === Ne ? (n.current && (l(!0), z(Ce)), be((0, ze.Gu)())) : 1 === Ne ? (n.current && (V(Ee), j(!1), l(!0)), be((0, ze.Gu)())) : (2 === Ne || 3 === Ne) && be((0, ze.Gu)()))
                    }), [Ne, ke, Oe, Ue, He]), (0, y.useEffect)((function() {
                        var e = [],
                            t = [];
                        0 === Ne && Ce ? (Ce.forEach((function(s) {
                            var n = e.findIndex((function(e) {
                                return e.collectionAddress === s.address.toLowerCase()
                            })); - 1 === n ? e.push({
                                collectionAddress: s.address.toLowerCase(),
                                quantity: "ERC1155" === s.type ? Number(s.amount) : Number("1"),
                                type: s.type
                            }) : e[n].quantity = "ERC1155" === s.type ? e[n].quantity + Number(s.amount) : Number(e[n].quantity) + 1, "ERC20" !== s.type && "NATIVE" !== s.type || t.push({
                                tokenAddress: s.address,
                                type: s.type,
                                amount: s.amountHumanReadable ? s.amountHumanReadable : "",
                                amountUSD: s.amountUSD ? s.amountUSD : ""
                            })
                        })), n.current && R(e)) : 1 === Ne && Ee && (Ee.forEach((function(s) {
                            var n = e.findIndex((function(e) {
                                return e.collectionAddress === s.address.toLowerCase()
                            })); - 1 === n ? e.push({
                                collectionAddress: s.address.toLowerCase(),
                                quantity: "ERC1155" === s.type ? Number(s.amount) : Number("1"),
                                type: s.type
                            }) : e[n].quantity = "ERC1155" === s.type ? e[n].quantity + Number(s.amount) : Number(e[n].quantity) + 1, "ERC20" !== s.type && "NATIVE" !== s.type || t.push({
                                tokenAddress: s.address,
                                type: s.type,
                                amount: s.amountHumanReadable ? s.amountHumanReadable : "",
                                amountUSD: s.amountUSD ? s.amountUSD : ""
                            })
                        })), n.current && (R(e), O(t)))
                    }), [Ne, Ce, Ee]), (0, y.useEffect)((function() {
                        !fe && !me && pe && n.current && le([{
                            type: s("randomMessageLabel")
                        }].concat(rs(pe)))
                    }), [pe, fe, me]), (0, y.useEffect)((function() {
                        if (ae && ae.length > 0 && n.current) {
                            var e = Number(ae[1].type),
                                t = Number(ae[ae.length - 1].type);
                            ue([e, t])
                        }
                    }), [ae]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "".concat(3 === Ne ? "flex lg:hidden" : "flex", " w-full h-full fixed top-[0] left-[0] bg-primary-gray/40 z-[10001] cursor-pointer lg:flex-row-reverse"),
                            onClick: function() {
                                n.current && (V([]), z([])), be((0, ze.P3)(!1))
                            },
                            children: (0, a.jsxs)("div", {
                                className: "".concat(Nt().replyModal, " w-full h-full bg-primary-white cursor-default lg:w-[440px] lg:flex lg:flex-col lg:justify-between"),
                                onClick: function(e) {
                                    e.stopPropagation()
                                },
                                id: "scrollable-parent",
                                children: [ve && ve.currentNetworkId && ke && (0, a.jsx)(Bt, {
                                    stepperItems: Te,
                                    step: Ne,
                                    isReviewVisible: ge,
                                    className: "lg:hidden",
                                    canProceed: Ie,
                                    onProceed: function() {
                                        be((0, ze.Um)(Ne + 1))
                                    },
                                    onReview: function() {
                                        if (n.current && ye(!0), te) {
                                            var e = (0, Be.X)(de[0], de[1]);
                                            be((0, ze.VS)(s("MESSAGE_".concat(e)))), be((0, ze.c7)(e.toString())), be((0, ze.SR)(Number(0))), be((0, ze.Um)(3))
                                        } else be((0, ze.VS)(s("MESSAGE_".concat(ae[_e].type)))), be((0, ze.c7)(_e.toString())), be((0, ze.SR)(Number(_e))), be((0, ze.Um)(3))
                                    },
                                    onClearReplyModal: t,
                                    isItemsListVisible: w,
                                    showCartButton: ke.type != oe.JH.A1 && ke.type != oe.JH.B1 && ke.type != oe.JH.C1,
                                    onCartClick: function() {
                                        0 === Ne ? (be((0, ze.jX)([])), M.forEach((function(e) {
                                            be((0, ze.oS)(e))
                                        })), n.current && (f(!1), l(!1), d(!1), j(!0))) : 1 === Ne && (be((0, ze.SS)([])), H.forEach((function(e) {
                                            be((0, ze.cV)(e))
                                        })), n.current && (f(!1), l(!1), d(!1), j(!0))), be((0, ze.Gu)())
                                    },
                                    totalAssets: 0 === Ne ? Q : 1 === Ne ? J + q : 0,
                                    onClickStep: function(e) {
                                        Ne > e && (0 === e ? ke.type === oe.JH.A1 || ke.type === oe.JH.B1 || ke.type === oe.JH.C1 ? (f(!1), d(!1), l(!1), j(!0)) : ke.type !== oe.JH.A2 && ke.type !== oe.JH.B2 || (f(!1), d(!1), l(!0), j(!1)) : 1 === e && (f(!1), d(!1), l(!0), j(!1))), be((0, ze.Um)(e))
                                    }
                                }), (0, a.jsxs)("div", {
                                    className: "pt-[24px] px-[16px] relative",
                                    children: [0 === Ne && Oe && Ue && ke && He && (0, a.jsxs)(a.Fragment, {
                                        children: [w && (ke.type === oe.JH.A1 || ke.type === oe.JH.B1 || ke.type === oe.JH.C1) && (0, a.jsx)(wt, {
                                            title: s("selectWhichCollectionsOtherTraderLabel"),
                                            items: ke.assets.offered,
                                            wanted: Ce || [],
                                            mode: "selectlist",
                                            onItemClick: function(e, t) {
                                                be(t ? (0, ze.oS)(e) : (0, ze.Et)(e)), be((0, ze.Gu)())
                                            },
                                            collector: ke.creator,
                                            networkId: Oe,
                                            showUsername: !0,
                                            showAddNFTorTokenButton: !0,
                                            onAddNFTorTokenButtonClick: function() {
                                                n.current && (d(!1), f(!1), j(!1), l(!0))
                                            }
                                        }), w && (ke.type === oe.JH.A2 || ke.type === oe.JH.B2) && (0, a.jsx)(wt, {
                                            title: s("selectWhichCollectionsOtherTraderLabel"),
                                            items: Ce || [],
                                            mode: "list",
                                            onDeleteItemClick: function(e) {
                                                We(e), be((0, ze.Et)(e)), be((0, ze.Gu)())
                                            },
                                            collector: ke.creator,
                                            networkId: Oe,
                                            showUsername: !0,
                                            showAddNFTorTokenButton: !0,
                                            onAddNFTorTokenButtonClick: function() {
                                                n.current && (d(!1), f(!1), j(!1), l(!0))
                                            }
                                        }), i && (0, a.jsx)(st, {
                                            title: s("selectWhichCollectionsOtherTraderLabel"),
                                            currentNetworkId: Oe,
                                            onClickCollection: function(e) {
                                                n.current && (f(!0), l(!1), T(e))
                                            },
                                            onAddNFTCollection: function() {
                                                be((0, ze.Dc)(!0))
                                            },
                                            showTokens: !1,
                                            selections: A || [],
                                            collector: ke.creator,
                                            showUsername: !0
                                        }), p && L && Ce && (0, a.jsx)(ut, {
                                            collection: L,
                                            userAddress: ke.creator.address,
                                            networkId: Oe,
                                            isCollectibleSelected: function(e, t) {
                                                return Ce.findIndex((function(s) {
                                                    return s.type === t.type && s.tokenId === e.tokenId && s.address.toLowerCase() === t.address.toLowerCase()
                                                })) > -1
                                            },
                                            getAmountIfSelected: function(e, t) {
                                                var s = M.findIndex((function(s) {
                                                    return s.type === t.type && "ERC1155" === s.type && s.tokenId === e.tokenId
                                                }));
                                                return s > -1 ? M[s].amount : "0"
                                            },
                                            onClickNFTItem: function(e, t, s, n) {
                                                if ("ERC1155" !== n.type) {
                                                    var r = {
                                                        name: n.name,
                                                        statusVerification: n.statusVerification,
                                                        address: n.address,
                                                        type: n.type,
                                                        imageUrl: s.cachedFileUrl ? s.cachedFileUrl : "",
                                                        networkId: n.networkId,
                                                        abi: n.abi ? n.abi : [],
                                                        isNft: !0,
                                                        symbol: n.symbol,
                                                        createdAt: n.createdAt,
                                                        tokenId: s.tokenId,
                                                        amount: null,
                                                        amountHumanReadable: null,
                                                        collection: n,
                                                        isDifferent: !1
                                                    };
                                                    t ? Me(r) : (We(r), be((0, ze.Et)(r)), be((0, ze.Gu)()))
                                                }
                                            },
                                            onAddERC1155: function(e, t) {
                                                var s = {
                                                    name: L.name,
                                                    statusVerification: L.statusVerification,
                                                    address: L.address,
                                                    type: L.type,
                                                    imageUrl: e.cachedFileUrl ? e.cachedFileUrl : "",
                                                    networkId: L.networkId,
                                                    abi: L.abi ? L.abi : [],
                                                    isNft: !0,
                                                    symbol: L.symbol ? L.symbol : "",
                                                    createdAt: L.createdAt,
                                                    tokenId: e.tokenId,
                                                    amount: t,
                                                    amountHumanReadable: t,
                                                    collection: L,
                                                    isDifferent: !1
                                                };
                                                n.current && (We(s), Me(s))
                                            },
                                            onRemoveERC1155: function(e) {
                                                var t = {
                                                    name: L.name,
                                                    statusVerification: L.statusVerification,
                                                    address: L.address,
                                                    type: L.type,
                                                    imageUrl: e.cachedFileUrl ? e.cachedFileUrl : "",
                                                    networkId: L.networkId,
                                                    abi: L.abi ? L.abi : [],
                                                    isNft: !0,
                                                    symbol: L.symbol ? L.symbol : "",
                                                    createdAt: L.createdAt,
                                                    tokenId: e.tokenId,
                                                    amount: null,
                                                    amountHumanReadable: null,
                                                    collection: L,
                                                    isDifferent: !1
                                                };
                                                n.current && We(t), be((0, ze.Et)(t)), be((0, ze.Gu)())
                                            }
                                        })]
                                    }), 1 === Ne && Oe && Ue && ke && ve && ve.currentNetworkId && He && (0, a.jsxs)(a.Fragment, {
                                        children: [i && (0, a.jsx)(st, {
                                            title: s("selectWhichCollectionsLabel"),
                                            currentNetworkId: Oe,
                                            isRestricted: ke.type === oe.JH.A1 || ke.type === oe.JH.A2,
                                            subTitle: ke.type === oe.JH.A1 || ke.type === oe.JH.A2 ? (0, a.jsxs)("div", {
                                                className: "flex gap-x-[8px] items-center",
                                                children: [(0, a.jsx)("img", {
                                                    src: D.Z.src,
                                                    width: 16,
                                                    height: 16
                                                }), (0, a.jsx)("span", {
                                                    className: "text-base font-bold text-primary-dark-blue",
                                                    children: s("tradeOnlyAcceptCollectionLabel")
                                                })]
                                            }) : (0, a.jsx)(a.Fragment, {
                                                children: (ke.type === oe.JH.B1 || ke.type === oe.JH.B2) && (0, a.jsxs)("div", {
                                                    className: "flex gap-x-[8px] items-center",
                                                    children: [(0, a.jsx)("img", {
                                                        src: F.Z.src,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("span", {
                                                        className: "text-base font-bold text-primary-dark-blue",
                                                        children: s("tradeWouldLoveLabel")
                                                    })]
                                                })
                                            }),
                                            collectionsHighlighted: function() {
                                                if (ke && (ke.type === oe.JH.A1 || ke.type === oe.JH.A2 || ke.type === oe.JH.B1 || ke.type === oe.JH.B2)) return ke.assets.wanted.map((function(e) {
                                                    return {
                                                        name: e.name,
                                                        statusVerification: e.statusVerification,
                                                        address: e.address,
                                                        imageUrl: e.imageUrl ? e.imageUrl : "",
                                                        networkId: e.networkId,
                                                        abi: e.abi ? e.abi : [],
                                                        type: e.type,
                                                        symbol: e.symbol,
                                                        createdAt: e.createdAt
                                                    }
                                                }))
                                            }(),
                                            onClickCollection: function(e) {
                                                n.current && (f(!0), l(!1), T(e))
                                            },
                                            onClickTokens: function(e) {
                                                n.current && (d(!0), l(!1), k(e))
                                            },
                                            onAddNFTCollection: function() {
                                                be((0, ze.Dc)(!0))
                                            },
                                            showTokens: ke.type !== oe.JH.A1 && ke.type !== oe.JH.A2,
                                            selections: A || [],
                                            collector: {
                                                networkId: ve.currentNetworkId,
                                                username: s("yourWalletLabel"),
                                                address: He,
                                                imageUrl: ve.avatarUrl ? ve.avatarUrl : "",
                                                isVerified: ve.isVerified,
                                                isNft: ve.isNFT
                                            },
                                            showUsername: !1
                                        }), o && N && (0, a.jsx)(at, {
                                            title: s("selectedDesiredLabel"),
                                            tokens: N,
                                            userAddress: He,
                                            currentTokenIndex: h,
                                            onTokenChange: function(e) {
                                                n.current && g(e)
                                            },
                                            onValueChange: function(e) {
                                                var t = e.value,
                                                    s = e.amountBase,
                                                    r = e.amountUSD,
                                                    a = {
                                                        name: N[h].name,
                                                        statusVerification: N[h].statusVerification,
                                                        address: N[h].address,
                                                        imageUrl: N[h].imageUrl ? N[h].imageUrl : "",
                                                        networkId: N[h].networkId,
                                                        abi: N[h].abi,
                                                        type: N[h].type,
                                                        isNft: !1,
                                                        symbol: N[h].symbol ? N[h].symbol : "",
                                                        createdAt: N[h].createdAt,
                                                        tokenId: null,
                                                        amount: s.toString(),
                                                        amountHumanReadable: t || "",
                                                        collection: N[h],
                                                        amountUSD: r || "",
                                                        isDifferent: !1
                                                    };
                                                n.current && E("" !== t ? a : null)
                                            },
                                            selections: B || [],
                                            onRemoveToken: function(e) {
                                                var t = {
                                                    name: N[h].name,
                                                    statusVerification: N[h].statusVerification,
                                                    address: N[h].address,
                                                    imageUrl: N[h].imageUrl ? N[h].imageUrl : "",
                                                    networkId: N[h].networkId,
                                                    abi: N[h].abi,
                                                    type: N[h].type,
                                                    isNft: !1,
                                                    symbol: N[h].symbol ? N[h].symbol : "",
                                                    createdAt: N[h].createdAt,
                                                    tokenId: null,
                                                    amount: null,
                                                    amountHumanReadable: null,
                                                    collection: N[h],
                                                    isDifferent: !1
                                                };
                                                n.current && Pe(t), be("ERC20" === t.type ? (0, ze.Hi)(t) : (0, ze.JQ)(t)), be((0, ze.Gu)())
                                            }
                                        }), p && L && Ee && (0, a.jsx)(ut, {
                                            collection: L,
                                            userAddress: He,
                                            networkId: Oe,
                                            isCollectibleSelected: function(e, t) {
                                                return Ee.findIndex((function(s) {
                                                    return s.type === t.type && s.tokenId === e.tokenId && s.address.toLowerCase() === t.address.toLowerCase()
                                                })) > -1
                                            },
                                            getAmountIfSelected: function(e, t) {
                                                var s = H.findIndex((function(s) {
                                                    return s.type === t.type && "ERC1155" === s.type && s.tokenId === e.tokenId
                                                }));
                                                return s > -1 ? H[s].amount : "0"
                                            },
                                            onClickNFTItem: function(e, t, s, r) {
                                                if ("ERC1155" !== r.type) {
                                                    var a = {
                                                        name: r.name,
                                                        statusVerification: r.statusVerification,
                                                        address: r.address,
                                                        type: r.type,
                                                        imageUrl: s.cachedFileUrl ? s.cachedFileUrl : "",
                                                        networkId: r.networkId,
                                                        abi: r.abi ? r.abi : [],
                                                        isNft: !0,
                                                        symbol: r.symbol ? r.symbol : "",
                                                        createdAt: r.createdAt,
                                                        tokenId: s.tokenId,
                                                        amount: null,
                                                        amountHumanReadable: null,
                                                        collection: r,
                                                        isDifferent: !1
                                                    };
                                                    n.current && (t ? Ve(a) : (Pe(a), be((0, ze.qY)(a)), be((0, ze.Gu)())))
                                                }
                                            },
                                            onAddERC1155: function(e, t) {
                                                var s = {
                                                    name: L.name,
                                                    statusVerification: L.statusVerification,
                                                    address: L.address,
                                                    type: L.type,
                                                    imageUrl: e.cachedFileUrl ? e.cachedFileUrl : "",
                                                    networkId: L.networkId,
                                                    abi: L.abi ? L.abi : [],
                                                    isNft: !0,
                                                    symbol: L.symbol ? L.symbol : "",
                                                    createdAt: L.createdAt,
                                                    tokenId: e.tokenId,
                                                    amount: t,
                                                    amountHumanReadable: t,
                                                    collection: L,
                                                    isDifferent: !1
                                                };
                                                n.current && (Pe(s), Ve(s))
                                            },
                                            onRemoveERC1155: function(e) {
                                                var t = {
                                                    name: L.name,
                                                    statusVerification: L.statusVerification,
                                                    address: L.address,
                                                    type: L.type,
                                                    imageUrl: e.cachedFileUrl ? e.cachedFileUrl : "",
                                                    networkId: L.networkId,
                                                    abi: L.abi ? L.abi : [],
                                                    isNft: !0,
                                                    symbol: L.symbol ? L.symbol : "",
                                                    createdAt: L.createdAt,
                                                    tokenId: e.tokenId,
                                                    amount: null,
                                                    amountHumanReadable: null,
                                                    collection: L,
                                                    isDifferent: !1
                                                };
                                                n.current && Pe(t), be((0, ze.qY)(t)), be((0, ze.Gu)())
                                            }
                                        }), w && Ee && (0, a.jsx)(wt, {
                                            title: s("selectWhichCollectionsLabel"),
                                            subTitle: s("traderSelectedNFTLabel"),
                                            items: Ee,
                                            mode: "list",
                                            onDeleteItemClick: function(e) {
                                                n.current && Pe(e), be((0, ze.qY)(e)), be((0, ze.Gu)())
                                            },
                                            onEditTokenClick: function(e) {
                                                n.current && (j(!1), d(!0))
                                            },
                                            collector: {
                                                networkId: ve.currentNetworkId,
                                                username: ve.username ? ve.username : "",
                                                address: He,
                                                imageUrl: ve.avatarUrl ? ve.avatarUrl : "",
                                                isVerified: ve.isVerified,
                                                isNft: ve.isNFT
                                            },
                                            networkId: Oe,
                                            showUsername: !1,
                                            showAddNFTorTokenButton: !0,
                                            onAddNFTorTokenButtonClick: function() {
                                                n.current && (d(!1), f(!1), j(!1), l(!0))
                                            }
                                        })]
                                    }), 2 === Ne && (0, a.jsx)(a.Fragment, {
                                        children: ge ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[8px] lg:hidden",
                                            children: [(0, a.jsx)("h2", {
                                                className: "text-2xl font-semibold text-primary-dark-blue",
                                                children: s("sayHelloLabel")
                                            }), (0, a.jsx)("span", {
                                                className: "rubik text-sm font-light text-primary-dark-blue",
                                                children: s("chooseWayLabel")
                                            }), (0, a.jsx)("div", {
                                                className: "flex flex-wrap gap-x-[12px] gap-y-[18px] mt-[24px]",
                                                children: (0, a.jsx)(De.Z, {
                                                    onSelect: function(e, t) {
                                                        var r = 0;
                                                        if ("0" === e) {
                                                            var a = (0, Be.X)(de[0], de[1]);
                                                            n.current && (r = a, se(!0))
                                                        } else n.current && (r = Number(e), se(!1));
                                                        be((0, ze.VS)(s("MESSAGE_".concat(r)))), be((0, ze.c7)(r.toString())), be((0, ze.SR)(Number(t)))
                                                    },
                                                    selectedIndex: _e,
                                                    children: ae.map((function(e, t) {
                                                        return (0, a.jsx)(Fe.Z, {
                                                            message: 0 === t ? e.type : s("MESSAGE_".concat(e.type)),
                                                            value: 0 === t ? "0" : e.type,
                                                            index: t,
                                                            isSelected: _e === t
                                                        }, t)
                                                    }))
                                                })
                                            })]
                                        })
                                    }), 3 === Ne && (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-y-[40px] mt-[32px]",
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-2xl font-semibold text-primary-blue text-center",
                                                children: s("replyReviewLabel")
                                            }), (0, a.jsx)(ts, {
                                                post: {
                                                    id: "",
                                                    parentId: ke.id,
                                                    score: Ae,
                                                    isDifferent: Ae < 100,
                                                    like: 0,
                                                    status: oe.RW.ACTIVE,
                                                    type: oe.JH.R1,
                                                    accepted: !1,
                                                    creationDate: Math.floor((new Date).getTime() / 1e3),
                                                    networkId: Oe,
                                                    numberOffers: 0,
                                                    creator: {
                                                        networkId: Oe,
                                                        username: ve.username ? ve.username : "",
                                                        address: ve.account ? ve.account : "",
                                                        imageUrl: ve.avatarUrl ? ve.avatarUrl : "",
                                                        isVerified: ve.isVerified,
                                                        isNft: ve.isNFT
                                                    },
                                                    messages: [{
                                                        type: ""
                                                    }, {
                                                        type: Re
                                                    }],
                                                    assets: {
                                                        offered: Ee,
                                                        wanted: Ce
                                                    },
                                                    isCreator: !0
                                                },
                                                creatorThread: {
                                                    networkId: Oe,
                                                    username: ke.creator.username ? ke.creator.username : "",
                                                    address: ke.creator.address ? ke.creator.address : "",
                                                    imageUrl: ke.creator.imageUrl ? ke.creator.imageUrl : "",
                                                    isVerified: ke.creator.isVerified,
                                                    isNft: ke.creator.isNft
                                                },
                                                waccount: ve,
                                                onDeleteReplyClick: function() {},
                                                isLocked: !1,
                                                isPreview: !0,
                                                postParent: ke
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "".concat(Ne < 3 ? i ? 0 === Ne && M.length > 0 || 1 === Ne && H.length > 0 ? "flex" : "hidden lg:flex" : w ? "hidden lg:flex" : 2 === Ne ? "hidden" : "flex" : "flex mt-[100px]", " ").concat(Ne < 3 ? "h-[78px]" : "", " items-center w-full ").concat(i ? "fixed" : "", " bg-gray-100 border-y-[1px] border-gray-200 border-solid bottom-0 lg:static"),
                                    children: [0 === Ne && (0, a.jsxs)("div", {
                                        className: "flex items-center ".concat(!ke || ke.type !== oe.JH.A1 && ke.type !== oe.JH.B1 && ke.type !== oe.JH.C1 ? "justify-between" : "justify-end", " w-full h-full p-[16px]"),
                                        children: [!w && (0, a.jsxs)(a.Fragment, {
                                            children: [p && (0, a.jsx)("div", {
                                                className: "flex items-center justify-center w-[48px] h-[48px] border-[1px] border-solid border-gray-200 rounded-full bg-primary-white cursor-pointer hover:bg-primary-white/40",
                                                onClick: function() {
                                                    n.current && (f(!1), l(!0))
                                                },
                                                children: (0, a.jsx)("img", {
                                                    src: Ke.Z.src,
                                                    className: "rotate-180",
                                                    width: 16,
                                                    height: 16
                                                })
                                            }), !p && (0, a.jsx)(ie.Z, {
                                                text: s("cancelLabel"),
                                                type: {
                                                    class: "secondary",
                                                    icon: !1,
                                                    hasColoredBg: !1
                                                },
                                                size: "large",
                                                initialState: {
                                                    state: "default"
                                                },
                                                onClick: function() {
                                                    n.current && (l(!1), f(!1)), be((0, ze.P3)(!1))
                                                },
                                                className: "bg-transparent"
                                            })]
                                        }), !w && (p || i) && (0, a.jsx)(ie.Z, {
                                            text: s("addNFTLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: Q > 0 ? "default" : "disabled"
                                            },
                                            onClick: function() {
                                                be((0, ze.jX)([])), M.forEach((function(e) {
                                                    be((0, ze.oS)(e))
                                                })), n.current && (f(!1), l(!1), j(!0)), be((0, ze.Um)(Ne + 1)), be((0, ze.Gu)())
                                            },
                                            showNotifications: !0,
                                            notificationsNumber: Q
                                        }), w && (0, a.jsxs)(a.Fragment, {
                                            children: [ke && ke.type === oe.JH.A2 && (0, a.jsx)(ie.Z, {
                                                type: {
                                                    class: "secondary",
                                                    icon: !0,
                                                    hasColoredBg: !1
                                                },
                                                iconSrc: jt.Z.src,
                                                text: s("addMoreLabel"),
                                                size: "small",
                                                initialState: {
                                                    state: "default"
                                                },
                                                onClick: function() {
                                                    n.current && (f(!1), j(!1), l(!0))
                                                },
                                                className: "py-[12.5px] bg-transparent ".concat(Nt().hoverFilterDarkBlue),
                                                classNameIcon: "w-[16px] h-[16px]"
                                            }), (0, a.jsx)(ie.Z, {
                                                text: s("confirmLabel"),
                                                type: {
                                                    class: "primary",
                                                    icon: !1,
                                                    hasColoredBg: !1
                                                },
                                                size: "large",
                                                initialState: {
                                                    state: Ie ? "default" : "disabled"
                                                },
                                                onClick: function() {
                                                    be((0, ze.P3)(!1)), be((0, ze.Um)(Ne + 1))
                                                }
                                            })]
                                        })]
                                    }), 1 === Ne && (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between w-full h-full p-[16px]",
                                        children: [!w && (0, a.jsx)(a.Fragment, {
                                            children: o || p ? (0, a.jsx)("div", {
                                                className: "flex items-center justify-center w-[48px] h-[48px] border-[1px] border-solid border-gray-200 rounded-full bg-primary-white cursor-pointer hover:bg-primary-white/40",
                                                onClick: function() {
                                                    return o && n.current ? (d(!1), void l(!0)) : p && n.current ? (f(!1), void l(!0)) : void 0
                                                },
                                                children: (0, a.jsx)("img", {
                                                    src: Ke.Z.src,
                                                    className: "rotate-180",
                                                    width: 16,
                                                    height: 16
                                                })
                                            }) : (0, a.jsx)(ie.Z, {
                                                text: s("cancelLabel"),
                                                type: {
                                                    class: "secondary",
                                                    icon: !1,
                                                    hasColoredBg: !1
                                                },
                                                size: "large",
                                                initialState: {
                                                    state: "default"
                                                },
                                                onClick: function() {
                                                    n.current && (d(!1), l(!1), f(!1)), be((0, ze.P3)(!1))
                                                },
                                                className: "bg-transparent"
                                            })
                                        }), o && (0, a.jsx)(ie.Z, {
                                            text: s("addFundsLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: S ? "default" : "disabled"
                                            },
                                            onClick: function() {
                                                if (S) {
                                                    if (ss.O$.from(S.amount).isZero()) return;
                                                    "ERC20" === S.type ? be((0, ze.Hi)(S)) : "NATIVE" === S.type && be((0, ze.JQ)(S)), be((0, ze.cV)(S)), n.current && Ve(S)
                                                }
                                                n.current && (E(null), d(!1), l(!1), f(!1), j(!0)), be((0, ze.Gu)())
                                            }
                                        }), (!o && !w && J >= 0 && 0 === q || p) && (0, a.jsx)(ie.Z, {
                                            text: s("addNFTLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: J > 0 ? "default" : "disabled"
                                            },
                                            onClick: function() {
                                                be((0, ze.SS)([])), H.forEach((function(e) {
                                                    be((0, ze.cV)(e))
                                                })), n.current && (f(!1), l(!1), j(!0)), be((0, ze.Um)(Ne + 1)), be((0, ze.Gu)())
                                            },
                                            showNotifications: !0,
                                            notificationsNumber: J
                                        }), !o && !p && !w && J >= 0 && q > 0 && (0, a.jsx)(ie.Z, {
                                            text: s("confirmLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            onClick: function() {
                                                n.current && (f(!1), l(!1), j(!0)), be((0, ze.Um)(Ne + 1)), be((0, ze.Gu)())
                                            }
                                        }), w && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(ie.Z, {
                                                type: {
                                                    class: "secondary",
                                                    icon: !0,
                                                    hasColoredBg: !1
                                                },
                                                iconSrc: jt.Z.src,
                                                text: s("addMoreLabel"),
                                                size: "small",
                                                initialState: {
                                                    state: "default"
                                                },
                                                onClick: function() {
                                                    n.current && (d(!1), f(!1), j(!1), l(!0))
                                                },
                                                className: "py-[12.5px] bg-transparent ".concat(Nt().hoverFilterDarkBlue),
                                                classNameIcon: "w-[16px] h-[16px]"
                                            }), (0, a.jsx)(ie.Z, {
                                                text: s("confirmLabel"),
                                                type: {
                                                    class: "primary",
                                                    icon: !1,
                                                    hasColoredBg: !1
                                                },
                                                size: "large",
                                                initialState: {
                                                    state: Ie ? "default" : "disabled"
                                                },
                                                onClick: function() {
                                                    be((0, ze.Um)(Ne + 1)), be((0, ze.P3)(!1))
                                                }
                                            })]
                                        })]
                                    }), 3 === Ne && (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-y-[16px] w-full p-[16px]",
                                        children: [(0, a.jsx)(ie.Z, {
                                            text: s("confirmLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            onClick: function() {},
                                            className: "w-full"
                                        }), (0, a.jsx)(ie.Z, {
                                            text: s("editLabel"),
                                            type: {
                                                class: "secondary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            size: "large",
                                            iconSrc: Se.Z.src,
                                            onClick: function() {
                                                be((0, ze.Um)(2)), ye(!1)
                                            },
                                            className: "".concat(Nt().hoverFilterDarkBlue, " w-full bg-transparent py-3"),
                                            classNameIcon: "".concat(Nt().hoverFilterDarkBlue, " w-[16px]")
                                        })]
                                    })]
                                })]
                            })
                        }), Le && He && Oe && (0, a.jsx)(kt.Z, {
                            networkId: Oe,
                            isOpen: !0,
                            actionClose: function() {
                                be((0, ze.Dc)(!1))
                            }
                        })]
                    })
                },
                is = s(52298),
                ls = s(65779),
                cs = s(54373),
                os = s(87774),
                ds = s(79299),
                us = s(25681),
                xs = s.n(us),
                ps = function(e) {
                    var t = e.onClickOverlay,
                        s = e.isUploadingReply,
                        n = e.isError,
                        r = (0, u.Z)("common").t,
                        i = (0, y.useState)(!1),
                        l = i[0],
                        c = i[1];
                    return (0, y.useEffect)((function() {
                        s || c(!0)
                    }), [s]), (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            onClick: function() {
                                l && t()
                            },
                            className: "hidden lg:block",
                            children: (0, a.jsx)("div", {
                                className: "bg-primary-gray/50 fixed w-full h-full z-[9999] top-0 right-0",
                                children: (0, a.jsx)("div", {
                                    className: "bg-primary-blue absolute flex flex-row w-[368px] h-[208px] top-[112px] right-[24px] z-[10000] rounded-[16px]",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-y-[16px] w-full items-center justify-center",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col w-full ".concat(s || n ? "h-[72px]" : "", " items-center justify-center overflow-hidden"),
                                            children: [(0, a.jsx)("div", {
                                                children: !s && !n && (0, a.jsx)("img", {
                                                    src: os.Z.src
                                                })
                                            }), (0, a.jsx)("div", {
                                                children: (0, a.jsx)("img", {
                                                    src: n ? k.Z.src : m.Z.src,
                                                    width: 56,
                                                    height: 56,
                                                    className: "".concat(s && xs().loader, " flex relative z-[1]")
                                                })
                                            }), s && (0, a.jsx)("div", {
                                                className: "w-[128px] h-[16px] rounded-[100%] bg-primary-dark-blue relative z-[0]"
                                            })]
                                        }), (0, a.jsx)("h3", {
                                            className: "text-base font-semibold text-white",
                                            children: r(s ? "uploadReplyLabel" : n ? "somethingWrongLabel" : "publishedReplyLabel")
                                        }), s && (0, a.jsx)("div", {
                                            className: "flex flex-col items-center justify-center",
                                            children: (0, a.jsx)(ds.Z, {
                                                approveLabel: !1
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                fs = s(45012),
                ms = s(67355),
                hs = s(96894),
                gs = s(74622),
                ys = s(70362);

            function bs(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function ws(e, t, s, n, r, a, i) {
                try {
                    var l = e[a](i),
                        c = l.value
                } catch (o) {
                    return void s(o)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function js(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function vs(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }

            function Ns(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), n.forEach((function(t) {
                        js(e, t, s[t])
                    }))
                }
                return e
            }

            function ks(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var n, r, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (s = s.call(e); !(i = (n = s.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (c) {
                            l = !0, r = c
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return bs(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return bs(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Cs = function() {
                    var e = (0, u.Z)("common").t,
                        t = (0, y.useRef)(),
                        s = (0, o.useRouter)().query.pid,
                        n = (0, re.C)((function(e) {
                            return e
                        })),
                        i = n.waccount,
                        l = n.replymodal,
                        c = n.trademodal,
                        h = l.isOpen,
                        b = l.post,
                        w = l.wanted,
                        j = l.offered,
                        v = l.currentStepMenu,
                        N = l.replyIndexSelected,
                        k = l.replyMessageType,
                        C = l.reply,
                        S = l.isInitialized,
                        E = c.isOpen,
                        I = i.currentNetworkId,
                        L = i.isConnected,
                        T = i.jwtToken,
                        _ = (0, re.T)(),
                        A = (0, y.useState)(),
                        Z = A[0],
                        D = A[1],
                        F = (0, y.useState)(!0),
                        B = F[0],
                        O = F[1],
                        U = (0, y.useState)(!1),
                        H = U[0],
                        V = U[1],
                        P = (0, y.useRef)(null),
                        M = (0, y.useState)(),
                        z = M[0],
                        W = M[1],
                        J = (0, y.useState)(!1),
                        G = J[0],
                        K = J[1],
                        q = (0, y.useState)(!1),
                        X = (q[0], q[1]),
                        Y = (0, y.useState)(!1),
                        Q = Y[0],
                        te = Y[1],
                        se = (0, y.useState)({
                            skip: 0,
                            take: 5
                        }),
                        ae = se[0],
                        le = se[1],
                        ce = (0, y.useState)(!1),
                        he = ce[0],
                        ge = ce[1],
                        be = (0, y.useState)(!1),
                        we = be[0],
                        je = be[1],
                        ve = (0, y.useState)(),
                        Ne = ve[0],
                        ke = ve[1],
                        Ce = (0, y.useState)(!1),
                        Se = Ce[0],
                        Ee = Ce[1],
                        Ie = ks((0, ls.XI)({
                            collections: ls.SS.array(ls.SS.json()),
                            status: ls.SS.integer,
                            type: ls.SS.integer,
                            verified: ls.SS.boolean,
                            networks: ls.SS.string,
                            offers: ls.SS.integer,
                            field: ls.SS.string,
                            direction: ls.SS.string,
                            owner: ls.SS.string
                        }, {
                            history: "push"
                        }), 2),
                        Le = Ie[0],
                        Te = Ie[1],
                        _e = (0, y.useState)([{
                            description: e("creationDateOrderLabel"),
                            value: "creationDate"
                        }, {
                            description: e("bestMatchOrderLabel"),
                            value: "score"
                        }])[0],
                        Ae = (0, y.useState)(Le.field && _e.find((function(e) {
                            var t;
                            return e.value.toLowerCase() === (null === (t = Le.field) || void 0 === t ? void 0 : t.toLowerCase())
                        })) ? e("".concat(Le.field, "OrderLabel")) : e("creationDateOrderLabel")),
                        Re = Ae[0],
                        Ze = Ae[1],
                        De = (0, y.useState)(Le.field && _e.find((function(e) {
                            var t;
                            return e.value.toLowerCase() === (null === (t = Le.field) || void 0 === t ? void 0 : t.toLowerCase())
                        })) ? _e.findIndex((function(e) {
                            var t;
                            return e.value.toLowerCase() === (null === (t = Le.field) || void 0 === t ? void 0 : t.toLowerCase())
                        })) : 0),
                        Fe = De[0],
                        Be = De[1],
                        Oe = (0, y.useState)(),
                        Ue = Oe[0],
                        He = Oe[1],
                        Ve = (0, y.useState)(!1),
                        Pe = Ve[0],
                        Ge = Ve[1],
                        Ke = (0, y.useState)(!1),
                        qe = Ke[0],
                        Xe = Ke[1],
                        Ye = (0, y.useState)(!1),
                        Qe = Ye[0],
                        $e = Ye[1],
                        et = (0, fe.Ge)().connector,
                        tt = (0, Gt.Z)(!1),
                        st = (tt.ref, tt.isComponentVisible),
                        nt = tt.setIsComponentVisible,
                        rt = (0, Gt.Z)(!1),
                        at = (rt.ref, rt.isComponentVisible),
                        it = rt.setIsComponentVisible,
                        lt = function() {
                            var e, t = (e = r().mark((function e() {
                                var t, s, n, a, l;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = ue.hexlify(xe.Y0("".concat(oe.ov._MESSAGE_TO_SIGN))), !vs(et, pe.zw)) {
                                                e.next = 6;
                                                break
                                            }
                                            s = null === (n = et.walletConnectProvider) || void 0 === n ? void 0 : n.connector.signPersonalMessage([t, i.account]), e.next = 21;
                                            break;
                                        case 6:
                                            if (!vs(et, me.J)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 9, et.getProvider();
                                        case 9:
                                            return a = e.sent, e.next = 12, a.send("personal_sign", [t, i.account]);
                                        case 12:
                                            s = e.sent, e.next = 21;
                                            break;
                                        case 15:
                                            return e.next = 17, new de.Web3Provider(window.ethereum);
                                        case 17:
                                            return l = e.sent, e.next = 20, l.send("personal_sign", [t, i.account]);
                                        case 20:
                                            s = e.sent;
                                        case 21:
                                            return e.abrupt("return", s);
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    s = arguments;
                                return new Promise((function(n, r) {
                                    var a = e.apply(t, s);

                                    function i(e) {
                                        ws(a, n, r, i, l, "next", e)
                                    }

                                    function l(e) {
                                        ws(a, n, r, i, l, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ct = function() {
                            P.current && !he && (ge(!0), s && P.current.getPostReplies(s.toString(), Le.field ? {
                                field: Le.field ? Le.field : "creationDate",
                                direction: Le.direction ? Le.direction : void 0
                            } : void 0, ae.skip, ae.take).then((function(e) {
                                var s = e.posts,
                                    n = e.total;
                                Ne ? t.current && ke(Ne.concat(s)) : t.current && ke(s), t.current && (ae.total ? le(Ns({}, ae, {
                                    skip: ae.skip + 5
                                })) : le(Ns({}, ae, {
                                    skip: ae.skip + 5,
                                    total: n
                                })), X(!1))
                            })).catch((function(e) {
                                t.current && X(!0), console.log(e)
                            })).finally((function() {
                                t.current && ge(!1)
                            })))
                        },
                        ot = (0, y.useCallback)((function(e) {
                            var t = (new Date).getTime() / 1e3;
                            return !e.expirationDate || e.expirationDate < t
                        }), []);
                    return (0, y.useEffect)((function() {
                        P.current = new oe.ov({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        })
                    }), []), (0, y.useEffect)((function() {
                        Le && t.current && je(!0)
                    }), [Le]), (0, y.useEffect)((function() {
                        we && t.current && ke([])
                    }), [we]), (0, y.useEffect)((function() {
                        we && Ne && 0 === Ne.length && t.current && le(Ns({}, ae, {
                            skip: 0,
                            take: 5,
                            total: void 0
                        }))
                    }), [Ne, we]), (0, y.useEffect)((function() {
                        ae && we && t.current && 0 === ae.skip && 5 === ae.take && "undefined" === typeof ae.total && (je(!1), ct())
                    }), [ae, we]), (0, y.useEffect)((function() {
                        Ue && t.current && Te({
                            owner: Le.owner ? Le.owner : null,
                            collections: Le.collections ? Le.collections : null,
                            status: "number" === typeof Le.status ? Le.status : null,
                            type: "number" === typeof Le.type ? Le.type : null,
                            verified: Le.verified ? Le.verified : null,
                            networks: Le.networks ? Le.networks : null,
                            offers: Le.offers ? Le.offers : null,
                            field: Le.field ? Le.field : "creationDate",
                            direction: Ue
                        }, {
                            scroll: !1,
                            shallow: !0
                        })
                    }), [Ue]), (0, y.useEffect)((function() {
                        !we && ae && Ne && ae.total && t.current && (Ne.length < ae.total ? K(!0) : K(!1))
                    }), [ae, we, Ne]), (0, y.useEffect)((function() {
                        h ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
                    }), [h]), (0, y.useEffect)((function() {
                        var e, t = function() {
                            e && clearTimeout(e), e = setTimeout((function() {
                                window.innerWidth < 1024 ? (2 === v && _((0, ze.P3)(!0)), 3 !== v || document.body.classList.contains("no-scroll") || document.body.classList.add("no-scroll")) : (2 === v && _((0, ze.P3)(!1)), 3 === v && document.body.classList.contains("no-scroll") && document.body.classList.remove("no-scroll"))
                            }), 50)
                        };
                        return t(), window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }), [v]), (0, y.useEffect)((function() {
                        t.current = !0;
                        var e = setTimeout((function() {
                            var e = document.getElementById("nprogress");
                            e && (e.style.display = "none")
                        }), 3e3);
                        return function() {
                            t.current = !1, clearTimeout(e)
                        }
                    }), []), (0, y.useEffect)((function() {
                        var e = P.current;
                        e && e.config({
                            backendURL: "https://api.nfttrader.io"
                        }), ct()
                    }), [P.current]), (0, y.useEffect)((function() {
                        I && b && (b.networkId === I ? (Ee(!0), _((0, cs.HP)(!1)), _((0, cs.Yw)(!1))) : (Ee(!1), _((0, cs.HP)(!0)), _((0, cs.Yw)(!0))))
                    }), [I, b]), (0, y.useEffect)((function() {
                        b && b.status === oe.RW.COMPLETED && T && function(e) {
                            if (T) {
                                var t = (0, $.f)("getSwapByPostId", [e]);
                                V(!1), (0, ee.Vd)(t, T).then((function(e) {
                                    D(e), O(!1), V(!1)
                                })).catch((function(e) {
                                    V(!0), (0, ne.$)(e, _)
                                }))
                            }
                        }(b.id)
                    }), [b, T]), (0, y.useEffect)((function() {
                        var e;
                        Ne && b && T && i && i.account && i.account.toLowerCase() === b.creator.address.toLowerCase() && (e = b.id, T && (0, ee.Tn)((0, $.f)("markRepliesRead", [e]), {}, {
                            authorization: "Bearer ".concat(T),
                            "authorizer-type": "token"
                        }).then((function() {})).catch((function(e) {})))
                    }), [Ne, b]), (0, a.jsxs)(ys.Z, {
                        hideFooter: !Q,
                        children: [(0, a.jsxs)(d.default, {
                            children: [(0, a.jsx)("title", {
                                children: e("postTitleLabel") + " " + s
                            }), (0, a.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.nfttrader.io/post/".concat(s)
                            }), (0, a.jsx)("meta", {
                                name: "title",
                                content: e("postTitleLabel") + " " + s
                            }), (0, a.jsx)("meta", {
                                name: "description",
                                content: e("metaDescriptionLabel")
                            }), (0, a.jsx)("meta", {
                                property: "og:site_name",
                                content: "NFT Trader"
                            }), (0, a.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, a.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.nfttrader.io/post/".concat(s)
                            }), (0, a.jsx)("meta", {
                                property: "og:title",
                                content: e("postTitleLabel") + " " + s
                            }), (0, a.jsx)("meta", {
                                property: "og:description",
                                content: e("metaDescriptionLabel")
                            }), (0, a.jsx)("meta", {
                                property: "og:image",
                                content: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/metaogimage/posts/".concat(s, ".png")
                            }), (0, a.jsx)("meta", {
                                property: "twitter:card",
                                content: "summary_large_image"
                            }), (0, a.jsx)("meta", {
                                property: "twitter:url",
                                content: "https://www.nfttrader.io/post/".concat(s)
                            }), (0, a.jsx)("meta", {
                                property: "twitter:title",
                                content: e("postTitleLabel") + " " + s
                            }), (0, a.jsx)("meta", {
                                property: "twitter:description",
                                content: e("metaDescriptionLabel")
                            }), (0, a.jsx)("meta", {
                                property: "twitter:image",
                                content: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/metaogimage/posts/".concat(s, ".png")
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-y-[64px] px-[16px] ".concat(L ? "my-[40px] lg:my-[80px] lg:px-[24px] xl:px-[80px]" : ""),
                            onClick: function() {
                                (st || at) && (nt(!1), it(!1))
                            },
                            children: [(0, a.jsx)(a.Fragment, {
                                children: L ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: "w-full lg:max-w-[1280px] lg:px-[48px]",
                                        children: I && i && i.jwtToken && (0, a.jsx)(ye, {
                                            postId: "".concat(s),
                                            onLoad: function(e) {
                                                I !== e.networkId && (_((0, cs.HP)(!0)), _((0, cs.Yw)(!0))),
                                                    function(e) {
                                                        _((0, ze.mg)()), _((0, ze.Cd)(e))
                                                    }(e), W(e), te(!0)
                                            },
                                            jwtToken: i.jwtToken,
                                            account: i.account
                                        })
                                    }), b ? Se ? (0, a.jsxs)(a.Fragment, {
                                        children: [Pe && (0, a.jsx)(ps, {
                                            onClickOverlay: function() {
                                                Ge(!1), je(!0)
                                            },
                                            isUploadingReply: qe,
                                            isError: Qe
                                        }), b.status === oe.RW.ACTIVE && !ot(b) && i && i.account && i.account.toLowerCase() !== b.creator.address.toLowerCase() && (0, a.jsx)(Me, {
                                            replyBoxStatus: "SKELETON",
                                            waccount: i,
                                            post: b,
                                            assetsLeft: w || [],
                                            assetsRight: j || [],
                                            isReplyModalOpen: !1,
                                            selectedReplyIndex: N,
                                            selectedReply: C,
                                            onAssetsLeftClick: function() {
                                                _((0, ze.Um)(0)), _((0, ze.P3)(!0))
                                            },
                                            onAssetsRightClick: function() {
                                                _((0, ze.Um)(1)), _((0, ze.P3)(!0))
                                            },
                                            onSkeletonClick: function() {
                                                b && (b.type === oe.JH.A1 || b.type === oe.JH.B1 || b.type === oe.JH.C1 ? (_((0, ze.jX)(b.assets.offered)), _((0, ze.SS)([])), _((0, ze.P3)(!0))) : b.type !== oe.JH.A2 && b.type !== oe.JH.B2 || (_((0, ze.jX)([])), _((0, ze.SS)([]))), _((0, ze.Tc)(!0)))
                                            },
                                            onCloseClick: function() {
                                                _((0, ze.Um)(0)), _((0, ze.P3)(!1)), _((0, ze.SS)([])), _((0, ze.jX)([]))
                                            },
                                            onAddReplyClick: function(e, t, s) {
                                                _((0, ze.VS)(e)), _((0, ze.c7)(t)), _((0, ze.SR)(s))
                                            },
                                            onEditClick: function() {
                                                _((0, ze.Um)(2))
                                            },
                                            onReviewClick: function(e, t) {
                                                e && t && (_((0, ze.VS)(e)), _((0, ze.c7)(t))), _((0, ze.Um)(3)), _((0, ze.P3)(!0))
                                            },
                                            onOpenReplyModal: function() {
                                                _((0, ze.P3)(!0))
                                            },
                                            onFetchReplyScore: function(e) {
                                                _((0, ze.k2)(e))
                                            },
                                            onPublishReply: function(e, t, s) {
                                                lt().then((function(n) {
                                                    ! function(e, t, s, n, r) {
                                                        if (Xe(!0), $e(!1), Ge(!0), P.current && i && i.account && i.currentNetworkId) {
                                                            P.current.config({
                                                                backendURL: "https://api.nfttrader.io"
                                                            });
                                                            var a = new oe.zK;
                                                            a.setPostType(oe.JH.R1), a.setIntroMessage(k), a.setNetworkId(i.currentNetworkId), a.setPostCreator(i.account), a.setPostParentId(s), e.forEach((function(e) {
                                                                a.addWantedAsset({
                                                                    address: e.address,
                                                                    networkId: e.networkId,
                                                                    type: e.type,
                                                                    tokenId: e.tokenId,
                                                                    amount: e.amount
                                                                })
                                                            })), t.forEach((function(e) {
                                                                a.addOfferedAsset({
                                                                    address: e.address,
                                                                    networkId: e.networkId,
                                                                    type: e.type,
                                                                    tokenId: e.tokenId,
                                                                    amount: e.amount
                                                                })
                                                            }));
                                                            var l = a.factory(),
                                                                c = a.getCreatePostReply(l);
                                                            P.current.createPostReply(c, n).then((function(e) {})).catch((function(e) {
                                                                $e(!0), console.error(e)
                                                            })).finally((function() {
                                                                Xe(!1), r()
                                                            }))
                                                        }
                                                    }(e, t, b.id, n, (function() {
                                                        _((0, ze.Dc)(!1)), _((0, ze.Um)(0)), _((0, ze.jX)(null)), _((0, ze.SS)(null)), _((0, ze.MW)(!1)), _((0, ze.VS)(null)), _((0, ze.SR)(0)), _((0, ze.k2)(0)), _((0, ze.c7)(null)), _((0, ze.P3)(!1)), s()
                                                    }))
                                                })).catch((function(e) {
                                                    console.log(e)
                                                }))
                                            },
                                            currentStepMenu: v,
                                            modalInitialized: S
                                        }), b.status === oe.RW.RESERVED && (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsx)(ms.Z, {
                                                className: "bg-primary-blue rounded-[8px] h-[52px]",
                                                gradient: !1,
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex gap-x-[16px]",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-primary-white text-sm font-semibold",
                                                        children: e("privateDealCreatedLabel")
                                                    }), (0, a.jsx)("img", {
                                                        src: f,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("img", {
                                                        src: f,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("img", {
                                                        src: f,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("span", {
                                                        className: "text-primary-white text-sm font-semibold",
                                                        children: e("privateDealCreatedLabel")
                                                    }), (0, a.jsx)("img", {
                                                        src: f,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("img", {
                                                        src: f,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("img", {
                                                        src: f,
                                                        width: 16,
                                                        height: 16
                                                    }), (0, a.jsx)("span", {
                                                        className: "text-primary-white text-sm font-semibold",
                                                        children: e("privateDealCreatedLabel")
                                                    })]
                                                })
                                            })
                                        }), b.status === oe.RW.COMPLETED && !H && (0, a.jsx)("div", {
                                            className: "w-full mt-[30px] mb-[320px]",
                                            children: (0, a.jsx)("div", {
                                                className: "flex flex-col w-full left-[0] absolute",
                                                children: (0, a.jsxs)("div", {
                                                    className: "h-[140px] bg-primary-blue",
                                                    children: [(0, a.jsx)(ms.Z, {
                                                        className: "bg-primary-blue h-[52px]",
                                                        gradient: !1,
                                                        speed: 100,
                                                        children: (0, a.jsx)("div", {
                                                            className: "flex gap-x-[16px]",
                                                            children: [0, 0, 0, 0, 0, 0, 0, 0, 0].map((function(t, s) {
                                                                return (0, a.jsxs)(y.Fragment, {
                                                                    children: [(0, a.jsx)("img", {
                                                                        src: m.Z.src,
                                                                        width: 24,
                                                                        height: 24
                                                                    }), (0, a.jsx)("span", {
                                                                        className: "text-primary-white text-sm font-semibold",
                                                                        children: e("dealCompletedLabel")
                                                                    })]
                                                                }, s)
                                                            }))
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "px-[80px] mt-[20px]",
                                                        children: (0, a.jsx)(hs.Z, {
                                                            maker: Z ? Ns({}, Z.maker[0], {
                                                                collections: Z.collections.filter((function(e) {
                                                                    return 1 === e.creator
                                                                }))
                                                            }) : {
                                                                username: "",
                                                                address: "",
                                                                imageUrl: "",
                                                                isNft: 0,
                                                                collections: []
                                                            },
                                                            taker: Z ? Ns({}, Z.taker[0], {
                                                                collections: Z.collections.filter((function(e) {
                                                                    return 0 === e.creator
                                                                }))
                                                            }) : {
                                                                username: "",
                                                                address: "",
                                                                imageUrl: "",
                                                                isNft: 0,
                                                                collections: []
                                                            },
                                                            timestamp: Z ? Z.swapEnd : "",
                                                            swapId: Z ? Z.swapId : "",
                                                            type: Z ? Z.type : "DIRECT_DEAL",
                                                            txHash: Z ? Z.txHash : "",
                                                            status: Z ? Z.swapStatus : 1,
                                                            showSkeletonLoader: B,
                                                            networkId: Z ? Z.networkId : "1",
                                                            redirect: !0
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col-reverse w-full lg:flex-row items-center lg:justify-between",
                                            children: [(0, a.jsx)("div", {
                                                className: "flex gap-x-[28px]",
                                                children: (0, a.jsxs)("div", {
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex text-base text-primary-blue font-semibold cursor-pointer",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "flex-col items-center gap-y-[8px] xs:hidden lg:flex lg:mr-[8px]",
                                                            children: [(0, a.jsx)("img", {
                                                                src: p,
                                                                className: "rotate-180 ".concat("ASC" === Ue ? "".concat(g().disabled, " cursor-default") : "cursor-pointer", " ").concat(g().filterHoverDarkBlue),
                                                                onClick: function() {
                                                                    He("ASC")
                                                                },
                                                                width: 12,
                                                                height: 12
                                                            }), (0, a.jsx)("img", {
                                                                src: p,
                                                                className: "".concat("DESC" !== Ue && Ue ? "cursor-pointer" : "".concat(g().disabled, " cursor-default"), " ").concat(g().filterHoverDarkBlue),
                                                                onClick: function() {
                                                                    He("DESC")
                                                                },
                                                                width: 12,
                                                                height: 12
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "hidden lg:flex hover:text-black",
                                                            onClick: function() {
                                                                nt(!st), it(!at)
                                                            },
                                                            children: ["".concat(e("orderLabel"), ": ").concat(Re), (0, a.jsx)("img", {
                                                                src: p,
                                                                className: "ml-[8px]",
                                                                width: 12,
                                                                height: 12
                                                            })]
                                                        }), (0, a.jsx)("div", {
                                                            className: "flex lg:hidden",
                                                            children: (0, a.jsx)(ie.Z, {
                                                                text: e("orderLabel"),
                                                                type: {
                                                                    class: "secondary",
                                                                    hasColoredBg: !1,
                                                                    icon: !0
                                                                },
                                                                iconSrc: p,
                                                                initialState: {
                                                                    state: "default"
                                                                },
                                                                size: "large",
                                                                onClick: function() {
                                                                    it(!at)
                                                                }
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        children: st && (0, a.jsx)(is.Z, {
                                                            options: [{
                                                                description: e("creationDateOrderLabel"),
                                                                value: "creationDate"
                                                            }, {
                                                                description: e("bestMatchOrderLabel"),
                                                                value: "score"
                                                            }],
                                                            onSelect: function(e) {
                                                                var t = e.value,
                                                                    s = e.index,
                                                                    n = e.description;
                                                                Ze(n), Be(s), Te({
                                                                    owner: Le.owner ? Le.owner : null,
                                                                    collections: Le.collections ? Le.collections : null,
                                                                    status: "number" === typeof Le.status ? Le.status : null,
                                                                    type: "number" === typeof Le.type ? Le.type : null,
                                                                    verified: Le.verified ? Le.verified : null,
                                                                    networks: Le.networks ? Le.networks : null,
                                                                    offers: Le.offers ? Le.offers : null,
                                                                    field: t,
                                                                    direction: Ue
                                                                }, {
                                                                    scroll: !1,
                                                                    shallow: !0
                                                                }), nt(!1), it(!1)
                                                            },
                                                            mode: "options",
                                                            selectedIndex: Fe,
                                                            className: "hidden lg:flex z-[5] w-auto"
                                                        })
                                                    })]
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "flex font-semibold text-base text-primary-dark-blue items-center mb-[32px] lg:mb-[0px]",
                                                children: [(0, a.jsxs)("span", {
                                                    children: [ae.total, " ", e("repliesLabel").toLowerCase()]
                                                }), (0, a.jsx)("img", {
                                                    src: x,
                                                    className: "ml-[16px]",
                                                    width: 16,
                                                    height: 16
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "w-full",
                                            id: "replies-scrollable",
                                            children: [Ne && (0, a.jsx)(We.Z, {
                                                dataLength: Ne.length,
                                                next: ct,
                                                scrollThreshold: .99,
                                                hasMore: G,
                                                loader: (0, a.jsx)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: (0, a.jsx)(Je.Z, {
                                                        isWhite: !1,
                                                        className: "w-[24px] h-[24px]"
                                                    })
                                                }),
                                                scrollableTarget: "collections-scrollable",
                                                style: {
                                                    overflow: "initial"
                                                },
                                                className: "flex flex-col gap-y-[32px]",
                                                children: Ne && Ne.map((function(e, t) {
                                                    return (0, a.jsx)(ts, {
                                                        post: e,
                                                        postParent: b,
                                                        creatorThread: b.creator,
                                                        waccount: i,
                                                        onDeleteReplyClick: function(t, s) {
                                                            lt().then((function(n) {
                                                                P.current && P.current.deletePost(e.id, e.creator.address, n).then((function() {
                                                                    t("default"), s(!1), je(!0)
                                                                })).catch((function(e) {
                                                                    console.error(e), t("disabled")
                                                                }))
                                                            })).catch((function(e) {
                                                                console.log(e), t("default")
                                                            }))
                                                        },
                                                        isLocked: b.status === oe.RW.RESERVED && !e.accepted,
                                                        isPreview: !1
                                                    }, "reply-".concat(t))
                                                }))
                                            }), b && Ne && 0 === Ne.length && (0, a.jsx)("div", {
                                                className: "flex items-center justify-center w-full",
                                                children: (0, a.jsx)("div", {
                                                    className: "flex flex-col items-center justify-center h-full w-full",
                                                    children: (0, a.jsxs)(a.Fragment, {
                                                        children: [" ", (0, a.jsxs)("div", {
                                                            className: "flex text-xl font-semibold text-primary-dark-blue mt-[24px] text-center",
                                                            children: [(0, a.jsxs)("div", {
                                                                children: [e("noRepliesAvailableLabel"), " "]
                                                            }), (0, a.jsx)("div", {
                                                                className: "flex items-center justify-center pl-[10px]",
                                                                children: (0, a.jsx)("img", {
                                                                    src: x,
                                                                    width: 16,
                                                                    height: 16
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsxs)("div", {
                                            className: "fixed flex flex-col w-full bg-primary-blue z-[99999999999] rounded-t-[32px] py-[40px] px-[16px] h-[304px] text-center lg:fixed lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:top-[50%] lg:-translate-y-[50%] lg:p-[32px]",
                                            children: [(0, a.jsxs)("div", {
                                                className: "mb-[40px] text-primary-white",
                                                children: [(0, a.jsx)("h3", {
                                                    className: "text-2xl font-semibold",
                                                    children: e("wrongNetworkLabel")
                                                }), (0, a.jsx)("p", {
                                                    className: "rubik text-base font-light",
                                                    children: e("changeNetworkPostLabel")
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center items-center gap-y-[16px]",
                                                children: [(0, a.jsx)("img", {
                                                    src: (0, R.l2)(b.networkId),
                                                    width: 48,
                                                    height: 48
                                                }), (0, a.jsx)("span", {
                                                    className: "text-primary-white text-base font-semibold capitalize",
                                                    children: (0, R.qe)(b.networkId)
                                                })]
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "h-[500px]"
                                        })]
                                    }) : (0, a.jsx)("div", {
                                        className: "w-full lg:max-w-[1280px] lg:px-[48px]"
                                    })]
                                }) : (0, a.jsx)("div", {
                                    className: "flex items-center justify-center w-full h-[calc(100vh-152px)] min-h-[600px] overflow-y-scroll",
                                    children: (0, a.jsx)(gs.Z, {})
                                })
                            }), at && (0, a.jsx)(is.Z, {
                                options: [{
                                    description: e("creationDateOrderLabel"),
                                    value: "creationDate"
                                }, {
                                    description: e("bestMatchOrderLabel"),
                                    value: "score"
                                }],
                                onSelect: function(e) {
                                    var t = e.value,
                                        s = e.index,
                                        n = e.description;
                                    Ze(n), Be(s), Te({
                                        owner: Le.owner ? Le.owner : null,
                                        collections: Le.collections ? Le.collections : null,
                                        status: Le.status ? Le.status : null,
                                        type: Le.type ? Le.type : null,
                                        verified: Le.verified ? Le.verified : null,
                                        networks: Le.networks ? Le.networks : null,
                                        offers: Le.offers ? Le.offers : null,
                                        field: t,
                                        direction: Ue
                                    }, {
                                        scroll: !1,
                                        shallow: !0
                                    }), nt(!1), it(!1)
                                },
                                mode: "options",
                                onClose: function() {
                                    nt(!1), it(!1)
                                },
                                selectedIndex: Fe,
                                className: "top-[0px] left-[0px] lg:hidden"
                            })]
                        }), h && (0, a.jsx)(as, {
                            onClearReplyModal: function() {
                                _((0, ze.P3)(!1)), _((0, ze.mg)()), setTimeout((function() {
                                    _((0, ze.Cd)(z))
                                }), 100)
                            }
                        }), E && (0, a.jsx)(fs.Z, {})]
                    })
                },
                Ss = (0, c.Z)(Cs, Ns({}, l(), {
                    isLoader: !0,
                    skipInitialProps: !1,
                    loadLocaleFrom: function(e, t) {
                        return s(30242)("./".concat(e, "/").concat(t)).then((function(e) {
                            return e.default
                        }))
                    }
                }))
        },
        74622: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = s(8014),
                r = s(62044),
                a = "/_next/static/media/wallet_message.eb95fe95.svg",
                i = s(75657),
                l = function(e) {
                    var t = e.showLink,
                        s = e.user,
                        l = (0, r.Z)("common").t;
                    return (0, n.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-10 pb-[50px] text-center",
                        children: [(0, n.jsx)("img", {
                            src: a,
                            width: 88,
                            height: 88
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col items-center justify-center",
                            children: [(0, n.jsx)("h1", {
                                className: "text-2xl text-primary-dark-blue font-semibold lg:text-3xl",
                                children: l("connectYourWalletLabel")
                            }), (0, n.jsx)("h3", {
                                className: "text-base font-light text-primary-dark-blue",
                                children: l("connectYourWalletBrowserLabel")
                            }), t && s && (0, n.jsx)(i.default, {
                                href: "/".concat(s.username ? s.username : s.address),
                                passHref: !0,
                                children: (0, n.jsx)("a", {
                                    className: "rubik text-xs font-semibold underline text-primary-dark-blue mt-[20px]",
                                    children: l("backToMyTradesPageLabel")
                                })
                            })]
                        })]
                    })
                }
        },
        29452: function(e, t, s) {
            "use strict";
            var n = s(8014),
                r = s(56168),
                a = s(27746),
                i = s(45617),
                l = s.n(i);
            t.Z = function(e) {
                var t = e.message,
                    s = e.value,
                    i = e.index,
                    c = e.isSelected,
                    o = void 0 !== c && c,
                    d = e.isDisabled,
                    u = void 0 !== d && d,
                    x = e.onClick,
                    p = e.icon,
                    f = (0, r.useState)(o),
                    m = f[0],
                    h = f[1],
                    g = (0, r.useContext)(a.w),
                    y = g.currentIndex,
                    b = g.setCurrentIndex,
                    w = g.setCurrentValue;
                return (0, r.useEffect)((function() {
                    h(y === i)
                }), [y]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        className: "flex-none w-fit h-[36px] ".concat(u ? "bg-gray-100 border-gray-200" : m ? "bg-primary-blue border-primary-blue cursor-pointer transition-all duration-300 hover:shadow-md" : "bg-gray-100 border-gray-200 cursor-pointer transition-all duration-300 hover:bg-primary-blue hover:border-primary-blue hover:shadow-md", " group px-[16px] py-[8px] border-solid border-[1px] rounded-[32px] select-none"),
                        onClick: function() {
                            u || (x && x(s, i), b(i), w(s))
                        },
                        children: (0, n.jsxs)("div", {
                            className: "flex items-center w-full h-full ".concat(p ? "gap-x-[5px]" : ""),
                            children: [p && (0, n.jsx)("span", {
                                className: "".concat(u ? "".concat(l().disabled) : m ? "".concat(l().selected) : ""),
                                children: p
                            }), (0, n.jsx)("span", {
                                className: "text-sm font-regular ".concat(u ? "text-primary-gray" : m ? "text-primary-white" : "text-primary-dark-blue group-hover:text-primary-white"),
                                children: t
                            })]
                        })
                    })
                })
            }
        },
        94084: function(e, t, s) {
            "use strict";
            var n = s(8014),
                r = s(56168),
                a = s(60638),
                i = s(31017),
                l = s(86530),
                c = s.n(l);
            t.Z = function(e) {
                var t = e.src,
                    s = e.size,
                    l = e.url,
                    o = (0, r.useRef)(!1),
                    d = (0, r.useRef)(null),
                    u = (0, r.useState)(!1),
                    x = u[0],
                    p = u[1];
                return (0, r.useEffect)((function() {
                    return o.current = !0,
                        function() {
                            o.current = !1
                        }
                }), []), (0, r.useEffect)((function() {
                    var e = (0, a.i)(t);
                    if (x) {
                        d.current.src = e
                    } else {
                        var s = new window.Image;
                        s.onload = function() {
                            o.current && p(!0)
                        }, s.onerror = function() {
                            o.current && p(!1)
                        }, s.src = e
                    }
                }), [x]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: "".concat(x ? "" : "bg-black", " rounded-full flex justify-center items-center overflow-hidden"),
                        style: {
                            width: "".concat(s, "px"),
                            height: "".concat(s, "px")
                        },
                        children: [x && (0, n.jsx)("a", {
                            href: l,
                            target: "_blank",
                            children: (0, n.jsx)("img", {
                                ref: d,
                                className: "object-cover"
                            })
                        }), !x && (0, n.jsx)("img", {
                            src: i.Z.src,
                            className: "".concat(c().rotating),
                            width: 24,
                            height: 24
                        })]
                    })
                })
            }
        },
        80636: function(e, t, s) {
            "use strict";
            var n = s(8014),
                r = s(56168),
                a = s(27746);
            t.Z = function(e) {
                var t = e.children,
                    s = e.onSelect,
                    i = e.selectedIndex,
                    l = (0, r.useState)("undefined" !== typeof i ? i : -1),
                    c = l[0],
                    o = l[1],
                    d = (0, r.useState)(void 0),
                    u = d[0],
                    x = d[1];
                return (0, r.useEffect)((function() {
                    s && u && s(u, c)
                }), [u]), (0, n.jsx)(a.w.Provider, {
                    value: {
                        currentIndex: c,
                        setCurrentIndex: o,
                        currentValue: u || "",
                        setCurrentValue: x
                    },
                    children: t
                })
            }
        },
        27746: function(e, t, s) {
            "use strict";
            s.d(t, {
                w: function() {
                    return n
                }
            });
            var n = s(56168).createContext({
                currentIndex: 0,
                currentValue: "",
                setCurrentIndex: function(e) {},
                setCurrentValue: function(e) {}
            })
        },
        57321: function(e, t, s) {
            "use strict";
            s.d(t, {
                X: function() {
                    return n
                }
            });
            var n = function(e, t) {
                return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
            }
        },
        19581: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = s(44453),
                r = s.n(n),
                a = function(e) {
                    return s(82509)("./".concat(e))
                },
                i = s(56168);

            function l(e, t, s, n, r, a, i) {
                try {
                    var l = e[a](i),
                        c = l.value
                } catch (o) {
                    return void s(o)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function c(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(n, r) {
                        var a = e.apply(t, s);

                        function i(e) {
                            l(a, n, r, i, c, "next", e)
                        }

                        function c(e) {
                            l(a, n, r, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var o = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500,
                    s = (0, i.useState)(null),
                    n = s[0],
                    l = s[1],
                    o = (0, i.useState)(!0),
                    d = o[0],
                    u = o[1],
                    x = (0, i.useState)(!1),
                    p = x[0],
                    f = x[1];
                return (0, i.useEffect)((function() {
                    c(r().mark((function s() {
                        var n, i;
                        return r().wrap((function(s) {
                            for (;;) switch (s.prev = s.next) {
                                case 0:
                                    return s.prev = 0, s.next = 3, a(e.replace(/^\/api\/mock\//g, "").replace(/\//g, "_").replace(/$/, ".json"));
                                case 3:
                                    if (n = s.sent, i = n.default, !t) {
                                        s.next = 8;
                                        break
                                    }
                                    return s.next = 8, new Promise((function(e) {
                                        return setTimeout(e, t)
                                    }));
                                case 8:
                                    l(Array.isArray(i) ? i : [i]), f(!1), s.next = 17;
                                    break;
                                case 12:
                                    s.prev = 12, s.t0 = s.catch(0), l(null), f(!0), console.log(s.t0);
                                case 17:
                                    return s.prev = 17, u(!1), s.finish(17);
                                case 20:
                                case "end":
                                    return s.stop()
                            }
                        }), s, null, [
                            [0, 12, 17, 20]
                        ])
                    })))()
                }), []), {
                    data: n,
                    isLoading: d,
                    isError: p
                }
            }
        },
        49481: function(e) {
            e.exports = {
                filterHoverDarkBlue: "_pid__filterHoverDarkBlue__cRsOi",
                disabled: "_pid__disabled__V5WSS"
            }
        },
        11408: function(e) {
            e.exports = {
                disabled: "ReplyPostLike_disabled__lX8Yi"
            }
        },
        45617: function(e) {
            e.exports = {
                selected: "ToggleMessagePost_selected__xJV9_",
                disabled: "ToggleMessagePost_disabled__W5RQz"
            }
        },
        86530: function(e) {
            e.exports = {
                rotating: "ImageCollection_rotating__1B2Nj",
                rotate: "ImageCollection_rotate__Sfq5v"
            }
        },
        25681: function(e) {
            e.exports = {
                loader: "ReplyDialog_loader__ygWek",
                bounce: "ReplyDialog_bounce__1ZXHW"
            }
        },
        7046: function(e) {
            e.exports = {
                filterHoverDarkBlue: "CollectionsList_filterHoverDarkBlue__iaOe4"
            }
        },
        32039: function(e) {
            e.exports = {
                deleteHover: "ItemsList_deleteHover__xt_0p"
            }
        },
        72027: function(e) {
            e.exports = {
                tooltip: "NFTsWalletChecked_tooltip__AKB1y",
                skeleton: "NFTsWalletChecked_skeleton__OG_8f",
                "skeleton-loading": "NFTsWalletChecked_skeleton-loading__sbP5W"
            }
        },
        72135: function(e) {
            e.exports = {
                post: "PostDetail_post__XBoFj",
                hoverableAction: "PostDetail_hoverableAction__DtXCX",
                hoverFilterDarkBlue: "PostDetail_hoverFilterDarkBlue__vLKep",
                postSkeleton: "PostDetail_postSkeleton__QQoKP",
                "skeleton-loading": "PostDetail_skeleton-loading__gGiEH",
                skeleton: "PostDetail_skeleton__QupOt",
                loader: "PostDetail_loader__XvXqT",
                bounce: "PostDetail_bounce__z60h7"
            }
        },
        67729: function(e) {
            e.exports = {
                reply: "PostReply_reply__bakDY",
                replyLocked: "PostReply_replyLocked__CmPbr",
                accepted: "PostReply_accepted__lNM8s",
                fadeCloseButton: "PostReply_fadeCloseButton__hl6gk",
                stickyBox: "PostReply_stickyBox__BviUk",
                slideIn: "PostReply_slideIn__pwMUl",
                hoverFilterDarkBlue: "PostReply_hoverFilterDarkBlue__Rps4f"
            }
        },
        37197: function(e) {
            e.exports = {
                replyBox: "ReplyBox_replyBox__U7aPZ",
                hideSquare: "ReplyBox_hideSquare__ImRoi",
                fadeCloseButton: "ReplyBox_fadeCloseButton__rfBtZ",
                stickyBox: "ReplyBox_stickyBox__lUueJ",
                slideIn: "ReplyBox_slideIn__H5pYi",
                loader: "ReplyBox_loader__6LLs_",
                bounce: "ReplyBox_bounce__c4AqS",
                hoverFilterDarkBlue: "ReplyBox_hoverFilterDarkBlue__yp7SB"
            }
        },
        5732: function(e) {
            e.exports = {
                hoverFilterDarkBlue: "ReplyModal_hoverFilterDarkBlue__n1y5x",
                replyModal: "ReplyModal_replyModal__o__Te",
                slideLeft: "ReplyModal_slideLeft__OlQgm"
            }
        },
        88337: function(e) {
            e.exports = {
                stepperMenu: "StepperMenu_stepperMenu__kYVZO",
                translate: "StepperMenu_translate__XX__D",
                rotating: "StepperMenu_rotating__PBJAc",
                rotate: "StepperMenu_rotate__HvBE2"
            }
        },
        96342: function(e) {
            e.exports = {
                stepperMenuList: "StepperMenuList_stepperMenuList__mWcvp",
                goUp: "StepperMenuList_goUp__pghEk",
                mainContent: "StepperMenuList_mainContent__uH2qZ"
            }
        }
    },
    function(e) {
        e.O(0, [4885, 9846, 5429, 7682, 77, 362, 9441, 1859, 5012, 6894, 3349, 9774, 2888, 179], (function() {
            return t = 64403, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);