(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3073], {
        8980: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[profile]", function() {
                return r(84601)
            }])
        },
        6650: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/chat_gray.7d4aa45e.svg",
                height: 16,
                width: 16
            }
        },
        45182: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/open_to_proposal.2a4629f5.svg",
                height: 40,
                width: 40
            }
        },
        99033: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/smile_gray.b3c722c3.svg",
                height: 104,
                width: 106
            }
        },
        95560: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/swap_heart.c311cbb6.svg",
                height: 40,
                width: 40
            }
        },
        84601: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return lt
                },
                default: function() {
                    return it
                }
            });
            var s = r(8014),
                a = r(62044),
                n = r(75332),
                l = r(56168),
                i = r(59166),
                o = r(34288),
                c = r(82836),
                d = r(64816),
                u = r(11852),
                m = r(41339),
                f = r(14808),
                x = r(69921),
                p = r(60113),
                h = r.n(p),
                g = r(1984),
                b = r(74491),
                w = "/_next/static/media/settings_blue.a6a940a0.svg",
                y = "/_next/static/media/trade.328791d4.svg",
                v = "/_next/static/media/trader_notifications.58270ba3.svg",
                j = r(5029),
                k = "/_next/static/media/mute_white.7a80304d.svg",
                N = r(71916),
                C = "/_next/static/media/bell_dark_blue.8d12eb69.svg",
                L = "/_next/static/media/mute_blue.6da40a35.svg",
                E = r(52912),
                S = r(28354),
                T = r(54533),
                I = r(44453),
                A = r.n(I),
                R = "/_next/static/media/loader_state_success.a7f41697.svg",
                _ = r(81988),
                Z = r.n(_),
                O = function(e) {
                    var t = e.text,
                        r = e.secondaryText,
                        a = e.intervalTimeMs,
                        n = e.loader,
                        i = void 0 !== n && n,
                        o = e.isExpired,
                        c = void 0 !== o && o,
                        d = (0, l.useState)(!1),
                        u = d[0],
                        m = d[1];
                    return (0, l.useEffect)((function() {
                        var e = setInterval((function() {
                            m(!u)
                        }), a);
                        return function() {
                            clearInterval(e)
                        }
                    }), [u]), (0, s.jsxs)("div", {
                        className: "flex items-center ".concat(c ? "justify-center" : i ? "justify-between" : "justify-center", " px-[16px] py-[4px] border-[1px] ").concat(c ? "border-primary-gray" : "border-state-success", " border-solid rounded-[36px]"),
                        children: [u && (0, s.jsx)("span", {
                            className: "text-sm font-semibold ".concat(c ? "text-primary-gray" : "text-state-success"),
                            children: t
                        }), !u && (0, s.jsx)("span", {
                            className: "text-sm font-semibold ".concat(c ? "text-primary-gray" : "text-state-success"),
                            children: r
                        }), i && (0, s.jsx)("img", {
                            src: R,
                            className: "".concat(Z().rotating, " ml-[8px]"),
                            width: 12,
                            height: 12
                        })]
                    })
                },
                U = "/_next/static/media/eye_white.cfde6143.svg",
                F = r(80697),
                P = r(35019),
                M = r(37601),
                z = r(1439),
                D = r(76690),
                V = r.n(D),
                H = r(15532),
                B = r(54373),
                K = r(53904),
                X = r(91936),
                Q = r(24789),
                G = r(68182),
                q = r(47257),
                J = r(29113),
                $ = r(73811),
                W = r(90197);

            function Y(e, t, r, s, a, n, l) {
                try {
                    var i = e[n](l),
                        o = i.value
                } catch (c) {
                    return void r(c)
                }
                i.done ? t(o) : Promise.resolve(o).then(s, a)
            }

            function ee(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(s, a) {
                        var n = e.apply(t, r);

                        function l(e) {
                            Y(n, s, a, l, i, "next", e)
                        }

                        function i(e) {
                            Y(n, s, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var te = function(e) {
                    var t = e.trade,
                        r = e.currentAccount,
                        n = e.minElementsPlaceholder,
                        i = void 0 === n ? 3 : n,
                        o = (0, a.Z)("common").t,
                        c = (0, l.useState)(t.addressMaker.toLowerCase() === r.toLowerCase())[0],
                        d = (0, l.useState)(!1),
                        m = d[0],
                        f = d[1],
                        x = (0, l.useState)(!1),
                        p = x[0],
                        h = x[1],
                        g = (0, l.useState)(),
                        w = g[0],
                        y = g[1],
                        v = (0, l.useRef)(null),
                        j = (0, T.T)(),
                        k = (0, T.C)((function(e) {
                            return e
                        })).waccount,
                        N = k.isConnected,
                        C = k.currentNetworkId,
                        L = k.jwtToken,
                        E = (0, Q.Ge)().library,
                        S = function(e) {
                            var t = e.weekdays,
                                r = e.days,
                                s = e.hours,
                                a = e.minutes;
                            return "".concat(t > 0 ? "".concat(t, "w ") : "").concat(r > 0 ? "".concat(r, "d ") : "").concat(s > 0 ? "".concat(s, "h ") : "").concat(a > 0 ? "".concat(a, "m ") : "", " left")
                        },
                        I = function(e, r) {
                            N && v.current ? (j((0, H.eV)("taker")), v.current.getTradeOrder(e.networkId, e.swapId.toString()).then(function() {
                                var s = ee(A().mark((function s(a) {
                                    var n, l;
                                    return A().wrap((function(s) {
                                        for (;;) switch (s.prev = s.next) {
                                            case 0:
                                                if (!a) {
                                                    s.next = 14;
                                                    break
                                                }
                                                return n = a.master, l = a.detail, j((0, H.vg)(e.swapId.toString())), s.next = 5, R(t, l, n[0]);
                                            case 5:
                                                return s.next = 7, _(t, l, n[0]);
                                            case 7:
                                                j((0, H.dC)(t.swapStart.toString())), j((0, H.J7)(t.swapEnd.toString())), j((0, H.M7)(Z(t))), j((0, H.D0)()), j((0, H.r$)(!0)), document.body.classList.add("no-scroll"), r && r("default");
                                            case 14:
                                            case "end":
                                                return s.stop()
                                        }
                                    }), s)
                                })));
                                return function(e) {
                                    return s.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.log(e), r && r("default")
                            }))) : (j((0, B.Hj)(!0)), r && r("default"))
                        },
                        R = function() {
                            var e = ee(A().mark((function e(t, r, s) {
                                var a, n, l, i, o, c, d, u, m, f;
                                return A().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = [], n = !0, l = !1, i = void 0, e.prev = 2, o = t.collections.filter((function(e) {
                                                return 1 === e.creator
                                            }))[Symbol.iterator]();
                                        case 4:
                                            if (n = (c = o.next()).done) {
                                                e.next = 27;
                                                break
                                            }
                                            if ("ERC1155" !== (d = c.value).type && "ERC721" !== d.type) {
                                                e.next = 10;
                                                break
                                            }[], ("ERC1155" === d.type ? r.filter((function(e) {
                                                var t;
                                                return "ERC1155" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 1 === e.creator
                                            })) : r.filter((function(e) {
                                                var t;
                                                return "ERC721" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 1 === e.creator
                                            }))).forEach((function(e) {
                                                a.push({
                                                    id: e.tokenId,
                                                    amount: "ERC1155" === e.type ? e.blc : null,
                                                    amountHumanReadable: "ERC1155" === e.type ? e.blc : null,
                                                    type: e.type,
                                                    owner: t.addressMaker,
                                                    collection: {
                                                        name: d.name,
                                                        statusVerification: d.statusVerification,
                                                        address: d.collectionAddress.toLowerCase(),
                                                        imageUrl: d.assetLogo ? d.assetLogo : "",
                                                        abi: d.abi,
                                                        networkId: d.networkId,
                                                        type: d.type,
                                                        symbol: d.symbol ? d.symbol : "",
                                                        createdAt: null
                                                    },
                                                    imageSrc: e.imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                })
                                            })), e.next = 24;
                                            break;
                                        case 10:
                                            if ("ERC20" !== d.type) {
                                                e.next = 24;
                                                break
                                            }
                                            if (!(u = r.find((function(e) {
                                                    var t;
                                                    return (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && "ERC20" === e.type && 1 === e.creator
                                                }))) || !u.collectionAddress) {
                                                e.next = 24;
                                                break
                                            }
                                            return m = new K.CH(u.collectionAddress, d.abi, E), e.prev = 14, e.next = 17, m.decimals();
                                        case 17:
                                            f = e.sent, a.push({
                                                id: null,
                                                amount: u.blc ? u.blc : null,
                                                amountHumanReadable: X.formatUnits(u.blc, f),
                                                type: u.type,
                                                owner: t.addressMaker,
                                                collection: {
                                                    name: d.name,
                                                    statusVerification: d.statusVerification,
                                                    address: d.collectionAddress.toLowerCase(),
                                                    imageUrl: d.assetLogo ? d.assetLogo : "",
                                                    abi: d.abi,
                                                    networkId: d.networkId,
                                                    type: d.type,
                                                    symbol: d.symbol ? d.symbol : "",
                                                    createdAt: null
                                                },
                                                imageSrc: u.imgURL,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), e.next = 24;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(14), console.log(e.t0);
                                        case 24:
                                            n = !0, e.next = 4;
                                            break;
                                        case 27:
                                            e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t1 = e.catch(2), l = !0, i = e.t1;
                                        case 33:
                                            e.prev = 33, e.prev = 34, n || null == o.return || o.return();
                                        case 36:
                                            if (e.prev = 36, !l) {
                                                e.next = 39;
                                                break
                                            }
                                            throw i;
                                        case 39:
                                            return e.finish(36);
                                        case 40:
                                            return e.finish(33);
                                        case 41:
                                            "0" !== s.valueMaker && a.push({
                                                id: null,
                                                amount: s.valueMaker,
                                                amountHumanReadable: X.formatUnits(s.valueMaker, (0, G.z)("ETHEREUM_DECIMALS_NUMBER")),
                                                type: "NATIVE",
                                                owner: t.addressMaker,
                                                collection: {
                                                    name: s.name,
                                                    statusVerification: 1,
                                                    address: "",
                                                    imageUrl: s.imageUrl,
                                                    abi: [],
                                                    networkId: t.networkId,
                                                    type: "NATIVE",
                                                    symbol: s.symbol,
                                                    createdAt: null
                                                },
                                                imageSrc: s.imageUrl,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), a.forEach((function(e) {
                                                j((0, H.TG)(e))
                                            }));
                                        case 43:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 29, 33, 41],
                                    [14, 21],
                                    [34, , 36, 40]
                                ])
                            })));
                            return function(t, r, s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _ = function() {
                            var e = ee(A().mark((function e(t, r, s) {
                                var a, n, l, i, o, c, d, u, m, f;
                                return A().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = [], n = !0, l = !1, i = void 0, e.prev = 2, o = t.collections.filter((function(e) {
                                                return 0 === e.creator
                                            }))[Symbol.iterator]();
                                        case 4:
                                            if (n = (c = o.next()).done) {
                                                e.next = 27;
                                                break
                                            }
                                            if ("ERC1155" !== (d = c.value).type && "ERC721" !== d.type) {
                                                e.next = 10;
                                                break
                                            }[], ("ERC1155" === d.type ? r.filter((function(e) {
                                                var t;
                                                return "ERC1155" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 0 === e.creator
                                            })) : r.filter((function(e) {
                                                var t;
                                                return "ERC721" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 0 === e.creator
                                            }))).forEach((function(e) {
                                                a.push({
                                                    id: e.tokenId,
                                                    amount: "ERC1155" === e.type ? e.blc : null,
                                                    amountHumanReadable: "ERC1155" === e.type ? e.blc : null,
                                                    type: e.type,
                                                    owner: t.addressTaker,
                                                    collection: {
                                                        name: d.name,
                                                        statusVerification: d.statusVerification,
                                                        address: d.collectionAddress.toLowerCase(),
                                                        imageUrl: d.assetLogo ? d.assetLogo : "",
                                                        abi: d.abi,
                                                        networkId: d.networkId,
                                                        type: d.type,
                                                        symbol: d.symbol ? d.symbol : "",
                                                        createdAt: null
                                                    },
                                                    imageSrc: e.imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                })
                                            })), e.next = 24;
                                            break;
                                        case 10:
                                            if ("ERC20" !== d.type) {
                                                e.next = 24;
                                                break
                                            }
                                            if (!(u = r.find((function(e) {
                                                    var t;
                                                    return (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && "ERC20" === e.type && 0 === e.creator
                                                }))) || !u.collectionAddress) {
                                                e.next = 24;
                                                break
                                            }
                                            return m = new K.CH(u.collectionAddress, d.abi, E), e.prev = 14, e.next = 17, m.decimals();
                                        case 17:
                                            f = e.sent, a.push({
                                                id: null,
                                                amount: u.blc ? u.blc : null,
                                                amountHumanReadable: X.formatUnits(u.blc, f),
                                                type: u.type,
                                                owner: t.addressTaker,
                                                collection: {
                                                    name: d.name,
                                                    statusVerification: d.statusVerification,
                                                    address: d.collectionAddress.toLowerCase(),
                                                    imageUrl: d.assetLogo ? d.assetLogo : "",
                                                    abi: d.abi,
                                                    networkId: d.networkId,
                                                    type: d.type,
                                                    symbol: d.symbol ? d.symbol : "",
                                                    createdAt: null
                                                },
                                                imageSrc: u.imgURL,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), e.next = 24;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(14), console.log(e.t0);
                                        case 24:
                                            n = !0, e.next = 4;
                                            break;
                                        case 27:
                                            e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t1 = e.catch(2), l = !0, i = e.t1;
                                        case 33:
                                            e.prev = 33, e.prev = 34, n || null == o.return || o.return();
                                        case 36:
                                            if (e.prev = 36, !l) {
                                                e.next = 39;
                                                break
                                            }
                                            throw i;
                                        case 39:
                                            return e.finish(36);
                                        case 40:
                                            return e.finish(33);
                                        case 41:
                                            "0" !== s.valueTaker && a.push({
                                                id: null,
                                                amount: s.valueTaker,
                                                amountHumanReadable: X.formatUnits(s.valueTaker, (0, G.z)("ETHEREUM_DECIMALS_NUMBER")),
                                                type: "NATIVE",
                                                owner: t.addressTaker,
                                                collection: {
                                                    name: s.name,
                                                    statusVerification: 1,
                                                    address: "",
                                                    imageUrl: s.imageUrl,
                                                    abi: [],
                                                    networkId: t.networkId,
                                                    type: "NATIVE",
                                                    symbol: s.symbol,
                                                    createdAt: null
                                                },
                                                imageSrc: s.imageUrl,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), a.forEach((function(e) {
                                                j((0, H.c6)(e))
                                            }));
                                        case 43:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 29, 33, 41],
                                    [14, 21],
                                    [34, , 36, 40]
                                ])
                            })));
                            return function(t, r, s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Z = function(e) {
                            return {
                                networkId: e.networkId,
                                username: e.maker[0].username,
                                address: e.addressMaker,
                                imageUrl: e.maker[0].imageUrl,
                                isVerified: e.maker[0].isVerified,
                                isNft: e.maker[0].isNft
                            }
                        },
                        D = function(e) {
                            return {
                                networkId: e.networkId,
                                username: e.taker[0].username,
                                address: e.addressTaker,
                                imageUrl: e.taker[0].imageUrl,
                                isVerified: e.taker[0].isVerified,
                                isNft: e.taker[0].isNft
                            }
                        };
                    return (0, l.useEffect)((function() {
                        (null === C || void 0 === C ? void 0 : C.length) && E && !v.current && (v.current = new W.h4({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        }), v.current.initClient({
                            web3Provider: E.provider
                        }), v.current.setNetworkId(C), v.current.config({
                            backendURL: "https://api.nfttrader.io"
                        }))
                    }), [L, C, E]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("section", {
                            className: "flex flex-col items-start mt-[24px] md:mt-[32px] lg:flex-row-reverse",
                            children: [(0, s.jsxs)("div", {
                                className: "flex justify-between items-center w-full lg:mt-[auto] lg:ml-[16px] relative",
                                children: [c ? (0, s.jsx)(s.Fragment, {
                                    children: Date.parse((new Date).toString()) < Date.parse(t.swapEnd.toString()) ? (0, s.jsx)(O, {
                                        text: o("waitingCounterpartLabel"),
                                        secondaryText: S((0, P.t)((new Date).toString(), t.swapEnd.toString())),
                                        intervalTimeMs: 3e3,
                                        loader: !0
                                    }) : (0, s.jsx)(O, {
                                        text: o("expiredLabel"),
                                        secondaryText: o("expiredLabel"),
                                        intervalTimeMs: 3e3,
                                        loader: !1,
                                        isExpired: !0
                                    })
                                }) : (0, s.jsx)(s.Fragment, {
                                    children: Date.parse((new Date).toString()) < Date.parse(t.swapEnd.toString()) ? (0, s.jsx)(O, {
                                        text: o("newRequestLabel"),
                                        secondaryText: S((0, P.t)((new Date).toString(), t.swapEnd.toString())),
                                        intervalTimeMs: 3e3,
                                        loader: !1
                                    }) : (0, s.jsx)(O, {
                                        text: o("expiredLabel"),
                                        secondaryText: o("expiredLabel"),
                                        intervalTimeMs: 3e3,
                                        loader: !1,
                                        isExpired: !0
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "rounded-full bg-primary-blue flex items-center w-[36px] h-[36px] justify-center cursor-pointer hover:bg-primary-dark-blue select-none ".concat(!c && "md:hidden"),
                                    onClick: function() {
                                        c ? f(!m) : I(t, null)
                                    },
                                    children: [!c && (0, s.jsx)("img", {
                                        src: U,
                                        width: 16,
                                        height: 16
                                    }), c && (0, s.jsx)("img", {
                                        src: F.Z.src,
                                        width: 16,
                                        height: 16
                                    })]
                                }), (0, s.jsx)(u.Z, {
                                    text: o("checkDealLabel"),
                                    type: {
                                        class: "primary",
                                        hasColoredBg: !1,
                                        icon: !0
                                    },
                                    initialState: {
                                        state: "default"
                                    },
                                    size: "small",
                                    iconSrc: U,
                                    className: "hidden ".concat(!c && "md:flex"),
                                    onClick: function(e) {
                                        e("loading"), I(t, e)
                                    }
                                }), m && (0, s.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center w-[215px] h-[88px] absolute top-[40px] right-0 bg-primary-white z-[999] rounded-[8px] shadow-md",
                                    children: [(0, s.jsx)("div", {
                                        className: "flex items-center justify-center w-full h-[76px] text-sm font-semibold text-primary-blue cursor-pointer rounded-b-[8px] hover:bg-[#f0f0f0] gtm-delete-trade",
                                        onClick: function() {
                                            y(t.swapId), h(!0), f(!m)
                                        },
                                        children: (0, s.jsx)("span", {
                                            children: o("cancelDealLabel")
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "flex items-center justify-center w-full h-[76px] text-sm font-semibold text-primary-blue cursor-pointer rounded-b-[8px] hover:bg-[#f0f0f0]",
                                        onClick: function() {
                                            var e;
                                            f(!m), e = t, N && v.current ? (j((0, H.eV)("maker")), j((0, H.Ky)("VIEW_MAKER")), v.current.getTradeOrder(e.networkId, e.swapId.toString()).then(function() {
                                                var r = ee(A().mark((function r(s) {
                                                    var a, n;
                                                    return A().wrap((function(r) {
                                                        for (;;) switch (r.prev = r.next) {
                                                            case 0:
                                                                if (!s) {
                                                                    r.next = 13;
                                                                    break
                                                                }
                                                                return a = s.master, n = s.detail, j((0, H.vg)(e.swapId.toString())), r.next = 5, R(t, n, a[0]);
                                                            case 5:
                                                                return r.next = 7, _(t, n, a[0]);
                                                            case 7:
                                                                j((0, H.dC)(t.swapStart.toString())), j((0, H.J7)(t.swapEnd.toString())), j((0, H.M7)(Z(t))), j((0, H.Bu)(D(t))), j((0, H.r$)(!0)), document.body.classList.add("no-scroll");
                                                            case 13:
                                                            case "end":
                                                                return r.stop()
                                                        }
                                                    }), r)
                                                })));
                                                return function(e) {
                                                    return r.apply(this, arguments)
                                                }
                                            }()).catch((function(e) {
                                                console.error(e)
                                            }))) : j((0, B.Hj)(!0))
                                        },
                                        children: (0, s.jsx)("span", {
                                            children: o("checkDigitalLabel")
                                        })
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "mt-[20px] flex justify-start items-center lg:mt-[0px] lg:h-[40px] lg:min-w-[210px]",
                                children: [!c && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsxs)("span", {
                                        className: "rubik text-sm font-light text-primary-dark-blue",
                                        children: [o("fromLabel"), ":"]
                                    }), (0, s.jsx)(b.Z, {
                                        address: t.addressMaker,
                                        src: t.maker.length > 0 ? t.maker[0].imageUrl : "",
                                        isNFT: t.maker.length > 0 ? t.maker[0].isNft : 0,
                                        className: "w-[24px] h-[24px] ml-[8px] mr-[8px]",
                                        sizesClassNames: "w-[24px] h-[24px]",
                                        jazziconSize: {
                                            defaultSize: 24,
                                            breakpoints: [],
                                            sizes: []
                                        }
                                    }), t.maker.length > 0 && t.maker[0].username ? (0, s.jsx)("span", {
                                        className: "text-primary-dark-blue text-sm font-semibold",
                                        children: (0, s.jsx)($.Z, {
                                            url: (0, J.w)(C, t.addressMaker),
                                            isTargetBlank: !0,
                                            isCustom: !0,
                                            customColor: "#03045e",
                                            text: "@".concat(t.maker[0].username),
                                            className: "text-sm"
                                        })
                                    }) : (0, s.jsx)("span", {
                                        className: "text-primary-gray text-sm",
                                        children: (0, s.jsx)($.Z, {
                                            url: (0, J.w)(C, t.addressMaker),
                                            isTargetBlank: !0,
                                            isCustom: !0,
                                            customColor: "#979dac",
                                            text: o("usernameNotSetLabel"),
                                            weight: "font-light",
                                            className: "text-sm"
                                        })
                                    })]
                                }), c && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsxs)("span", {
                                        className: "rubik text-sm font-light text-primary-dark-blue",
                                        children: [o("toLabel"), ":"]
                                    }), (0, s.jsx)(b.Z, {
                                        address: t.addressTaker,
                                        src: t.taker.length > 0 ? t.taker[0].imageUrl : "",
                                        isNFT: t.taker.length > 0 ? t.taker[0].isNft : 0,
                                        className: "w-[24px] h-[24px] ml-[8px] mr-[8px]",
                                        sizesClassNames: "w-[24px] h-[24px]",
                                        jazziconSize: {
                                            defaultSize: 24,
                                            breakpoints: [],
                                            sizes: []
                                        }
                                    }), t.taker.length > 0 && t.taker[0].username ? (0, s.jsx)("span", {
                                        className: "text-primary-dark-blue text-sm font-semibold",
                                        children: (0, s.jsx)($.Z, {
                                            url: (0, J.w)(C, t.addressTaker),
                                            isTargetBlank: !0,
                                            isCustom: !0,
                                            customColor: "#03045e",
                                            text: "@".concat(t.taker[0].username),
                                            className: "text-sm"
                                        })
                                    }) : (0, s.jsx)("span", {
                                        className: "text-primary-gray text-sm",
                                        children: (0, s.jsx)($.Z, {
                                            url: (0, J.w)(C, t.addressTaker),
                                            isTargetBlank: !0,
                                            isCustom: !0,
                                            customColor: "#979dac",
                                            text: o("usernameNotSetLabel"),
                                            weight: "font-light",
                                            className: "text-sm"
                                        })
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "mt-[24px] flex justify-start items-center w-full lg:w-[280px] lg:mt-[auto] lg:flex-none",
                                children: [(0, s.jsxs)("div", {
                                    className: "relative",
                                    style: {
                                        minWidth: "50px"
                                    },
                                    children: [t.collections.filter((function(e) {
                                        return 1 === e.creator
                                    })).length <= i && t.collections.filter((function(e) {
                                        return 1 === e.creator
                                    })).map((function(e, r) {
                                        return (0, s.jsx)(M.Z, {
                                            src: e.assetLogo ? e.assetLogo : "",
                                            className: "w-[40px] h-[40px] absolute",
                                            style: {
                                                top: "-20px",
                                                left: "".concat(11 * r, "px"),
                                                position: "absolute"
                                            }
                                        }, "avatar-collection-maker-".concat(t.addressMaker, "-").concat(t.swapId, "-").concat(r))
                                    })), t.collections.filter((function(e) {
                                        return 1 === e.creator
                                    })).length > i && t.collections.filter((function(e, t) {
                                        return 1 === e.creator && t <= i
                                    })).map((function(e, r) {
                                        return (0, s.jsx)(M.Z, {
                                            src: e.assetLogo ? e.assetLogo : "",
                                            className: "w-[40px] h-[40px]",
                                            style: {
                                                top: "-20px",
                                                left: "".concat(11 * r, "px"),
                                                position: "absolute"
                                            }
                                        }, "avatar-collection-maker-".concat(t.addressMaker, "-").concat(t.swapId, "-").concat(r))
                                    })), t.collections.filter((function(e) {
                                        return 1 === e.creator
                                    })).length > i && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("div", {
                                            className: "bg-primary-dark-blue flex justify-center items-center w-[40px] h-[40px] rounded-full text-primary-white absolute ".concat(V().collectionPlaceholder, " cursor-pointer"),
                                            style: {
                                                top: "-20px",
                                                left: "".concat(11 * i, "px")
                                            },
                                            children: (0, s.jsxs)("span", {
                                                className: "text-primary-white text-lg font-semibold",
                                                children: ["+", t.collections.filter((function(e, t) {
                                                    return 1 === e.creator && t > i
                                                })).length]
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "".concat(V().list, " flex-col p-[5px] rounded-[4px] bg-primary-dark-blue min-w-[130px] absolute z-[10]"),
                                            style: {
                                                top: "10px",
                                                left: "60px"
                                            },
                                            children: t.collections.filter((function(e, t) {
                                                return 1 === e.creator && t > i
                                            })).map((function(e, r) {
                                                return (0, s.jsx)("div", {
                                                    className: "text-sm font-regular text-primary-white",
                                                    children: e.name
                                                }, "".concat(e.symbol, "-").concat(r, "-").concat(t.swapId, "-maker"))
                                            }))
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex justify-between items-center mx-[16px]",
                                    children: [(0, s.jsx)(b.Z, {
                                        address: t.addressMaker,
                                        src: t.maker.length > 0 ? t.maker[0].imageUrl : "",
                                        isNFT: t.maker.length > 0 ? t.maker[0].isNft : 0,
                                        className: "w-[16px] h-[16px]",
                                        sizesClassNames: "w-[16px] h-[16px]",
                                        jazziconSize: {
                                            defaultSize: 16,
                                            breakpoints: [],
                                            sizes: []
                                        }
                                    }), (0, s.jsx)("img", {
                                        src: z.Z.src,
                                        className: "ml-[8px] mr-[8px]",
                                        width: 40,
                                        height: 40
                                    }), (0, s.jsx)(b.Z, {
                                        address: t.addressTaker,
                                        src: t.taker.length > 0 ? t.taker[0].imageUrl : "",
                                        isNFT: t.taker.length > 0 ? t.taker[0].isNft : 0,
                                        className: "w-[16px] h-[16px]",
                                        sizesClassNames: "w-[16px] h-[16px]",
                                        jazziconSize: {
                                            defaultSize: 16,
                                            breakpoints: [],
                                            sizes: []
                                        }
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "relative",
                                    children: [t.collections.filter((function(e) {
                                        return 0 === e.creator
                                    })).length <= i && t.collections.filter((function(e) {
                                        return 0 === e.creator
                                    })).map((function(e, r) {
                                        return (0, s.jsx)(M.Z, {
                                            src: e.assetLogo ? e.assetLogo : "",
                                            className: "w-[40px] h-[40px]",
                                            style: {
                                                top: "-20px",
                                                left: "".concat(11 * r, "px"),
                                                position: "absolute"
                                            }
                                        }, "avatar-collection-taker-".concat(t.addressTaker, "-").concat(t.swapId, "-").concat(r))
                                    })), t.collections.filter((function(e) {
                                        return 0 === e.creator
                                    })).length > i && t.collections.filter((function(e, t) {
                                        return 0 === e.creator && t <= i
                                    })).map((function(e, r) {
                                        return (0, s.jsx)(M.Z, {
                                            src: e.assetLogo ? e.assetLogo : "",
                                            className: "w-[40px] h-[40px] absolute",
                                            style: {
                                                top: "-20px",
                                                left: "".concat(11 * r, "px"),
                                                position: "absolute"
                                            }
                                        }, "avatar-collection-taker-".concat(t.addressTaker, "-").concat(t.swapId, "-").concat(r))
                                    })), t.collections.filter((function(e) {
                                        return 0 === e.creator
                                    })).length > i && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("div", {
                                            className: "bg-primary-dark-blue flex justify-center items-center w-[40px] h-[40px] rounded-full text-primary-white absolute ".concat(V().collectionPlaceholder, " cursor-pointer"),
                                            style: {
                                                top: "-20px",
                                                left: "".concat(11 * i, "px")
                                            },
                                            children: (0, s.jsxs)("span", {
                                                className: "text-primary-white text-lg font-semibold",
                                                children: ["+", t.collections.filter((function(e, t) {
                                                    return 0 === e.creator && t > i
                                                })).length]
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "".concat(V().list, " flex-col p-[5px] rounded-[4px] min-w-[130px] bg-primary-dark-blue absolute z-[10]"),
                                            style: {
                                                top: "10px",
                                                left: "60px"
                                            },
                                            children: t.collections.filter((function(e, t) {
                                                return 0 === e.creator && t > i
                                            })).map((function(e, r) {
                                                return (0, s.jsx)("div", {
                                                    className: "text-sm font-regular text-primary-white",
                                                    children: e.name
                                                }, "".concat(e.symbol, "-").concat(r, "-").concat(t.swapId, "-taker"))
                                            }))
                                        })]
                                    })]
                                })]
                            })]
                        }), p && (0, s.jsx)(q.Z, {
                            modalTitle: o("cancelDealLabel"),
                            modalDescription: o("alertRemoveDealCounterpartyTradeRequestLabel"),
                            action: function(e, t) {
                                e("disabled"),
                                    function(e, t) {
                                        if (v.current && w) {
                                            var r = v.current;
                                            r.on("cancelTradeTransactionCreated", (function() {
                                                e("loading")
                                            })), r.on("cancelTradeTransactionMined", (function() {
                                                e("default"), t(!1)
                                            })), r.on("cancelTradeTransactionError", (function() {
                                                e("default")
                                            })), r.config({
                                                backendURL: "https://api.nfttrader.io"
                                            }), r.cancelTrade(w).then((function() {
                                                console.log("cancelSwap performed()")
                                            })).catch((function(e) {
                                                console.warn("cancelSwap error:", e)
                                            }))
                                        }
                                    }(e, t)
                            },
                            actionClose: function() {
                                h(!1)
                            },
                            buttonsText: [o("yesCancelItLabel"), o("dismissLabel")],
                            isOpen: !0,
                            closeOnAction: !1
                        })]
                    })
                },
                re = "/_next/static/media/refresh.fbdcb619.svg",
                se = r(31017),
                ae = r(14879),
                ne = r(82926),
                le = r.n(ne),
                ie = r(77165);

            function oe(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), s.forEach((function(t) {
                        oe(e, t, r[t])
                    }))
                }
                return e
            }
            var de = function(e) {
                    e.user;
                    var t = (0, a.Z)("common").t,
                        r = (0, Q.Ge)().library,
                        n = (0, l.useRef)(!1),
                        i = (0, l.useRef)(null),
                        o = (0, l.useState)(0),
                        c = o[0],
                        d = o[1],
                        m = (0, l.useState)(5)[0],
                        f = (0, l.useState)(!1),
                        x = f[0],
                        p = f[1],
                        h = (0, l.useState)(!1),
                        g = h[0],
                        b = h[1],
                        w = (0, l.useState)(0),
                        y = w[0],
                        v = w[1],
                        j = (0, l.useState)(!1),
                        k = j[0],
                        N = j[1],
                        C = (0, l.useState)([]),
                        L = C[0],
                        E = C[1],
                        S = (0, l.useState)(null),
                        I = S[0],
                        A = S[1],
                        R = (0, T.C)((function(e) {
                            return e
                        })).waccount,
                        _ = R.account,
                        Z = R.currentNetworkId,
                        O = function(e) {
                            var t;
                            Z && _ && (n.current && b(!0), null === (t = i.current) || void 0 === t || t.getUserTradesList({
                                networkId: Z,
                                address: _,
                                status: "0",
                                skip: c,
                                take: m
                            }).then((function(t) {
                                var r = t.tradeList,
                                    s = t.count,
                                    a = r.map((function(e) {
                                        return ce({}, e, {
                                            swapStart: new Date(e.swapStart),
                                            swapEnd: new Date(e.swapEnd)
                                        })
                                    }));
                                n.current && (b(!1), v(s), e && e("default")), 0 === L.length ? n.current && E(a) : Z === I ? n.current && E(L.concat(a)) : n.current && (d(0), E(a))
                            })).catch((function(t) {
                                n.current && (b(!1), e && e("default")), console.error(t)
                            })))
                        };
                    return (0, l.useEffect)((function() {
                        return n.current = !0,
                            function() {
                                n.current = !1
                            }
                    }), []), (0, l.useEffect)((function() {
                        x ? n.current && p(!1) : y > L.length ? n.current && (d(c + m), N(!0)) : n.current && N(!1)
                    }), [L]), (0, l.useEffect)((function() {
                        i && Z && _ && (O(null), n.current && A(Z))
                    }), [Z, _, i.current]), (0, l.useEffect)((function() {
                        (null === Z || void 0 === Z ? void 0 : Z.length) && r && !i.current && (i.current = new W.h4({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        }), i.current.initClient({
                            web3Provider: r.provider
                        }), i.current.setNetworkId(Z), i.current.config({
                            backendURL: "https://api.nfttrader.io"
                        }))
                    }), [Z, r]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("section", {
                            className: "flex flex-col justify-start p-[24px] md:pt-[32px] md:pb-[40px] md:pl-[40px] md:pr-[40px] bg-primary-white rounded-2xl shadow-3xl",
                            children: [(0, s.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-lg font-semibold text-primary-dark-blue md:text-xl",
                                    children: t("activeTradesLabel")
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-center items-center w-[30px] h-[30px] select-none bg-primary-blue transition-colors ease-in-out duration-500 rounded-full cursor-pointer hover:bg-primary-dark-blue",
                                    onClick: function() {
                                        ! function() {
                                            if (n.current && p(!0), Z && _) {
                                                var e, t = c / m * m;
                                                0 === t && (t = m), null === (e = i.current) || void 0 === e || e.getUserTradesList({
                                                    networkId: Z,
                                                    address: _,
                                                    status: "0",
                                                    skip: 0,
                                                    take: t
                                                }).then((function(e) {
                                                    var t = e.tradeList,
                                                        r = e.count,
                                                        s = t.map((function(e) {
                                                            return ce({}, e, {
                                                                swapStart: new Date(e.swapStart),
                                                                swapEnd: new Date(e.swapEnd)
                                                            })
                                                        }));
                                                    n.current && (v(r), E(s)), r > t.length && n.current && N(!0), n.current && p(!1)
                                                })).catch((function(e) {
                                                    console.error(e), p(!1)
                                                }))
                                            }
                                        }()
                                    },
                                    children: x ? (0, s.jsx)("img", {
                                        src: se.Z.src,
                                        className: "".concat(le().rotating),
                                        width: 16,
                                        height: 16
                                    }) : (0, s.jsx)("img", {
                                        src: re,
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            }), L.length > 0 ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: "w-full mt-[24px]",
                                    children: L.map((function(e, t) {
                                        return (0, s.jsx)(te, {
                                            trade: e,
                                            currentAccount: _ || "",
                                            minElementsPlaceholder: 3
                                        }, "trade-".concat(e.swapId, "-").concat(e.addressMaker, "-").concat(e.addressTaker))
                                    }))
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-center items-center mt-[60px]",
                                    children: k && (0, s.jsx)(u.Z, {
                                        text: t("loadMoreLabel"),
                                        type: {
                                            class: "secondary",
                                            hasColoredBg: !1,
                                            icon: !1
                                        },
                                        initialState: {
                                            state: "default"
                                        },
                                        size: "large",
                                        onClick: function(e) {
                                            e("loading"), O(e)
                                        },
                                        className: "w-full"
                                    })
                                })]
                            }) : (0, s.jsx)(s.Fragment, {
                                children: g ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "flex flex-col items-center justify-center gap-4 w-full h-[200px] mt-[24px]",
                                        children: (0, s.jsx)(ie.Z, {
                                            isWhite: !1,
                                            className: "w-[30px] h-[30px]"
                                        })
                                    })
                                }) : (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-4 w-full h-[200px] mt-[24px]",
                                        children: [(0, s.jsx)("img", {
                                            src: ae.Z.src,
                                            className: "w-[52px] h-[52px]"
                                        }), (0, s.jsx)("span", {
                                            className: "rubik text-sm text-primary-dark-blue",
                                            children: t("activeTradeShownHereLabel")
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                ue = r(71024),
                me = r(56021),
                fe = r(95560),
                xe = r(53470),
                pe = r(6650),
                he = r(91886),
                ge = r(16876),
                be = r(69324),
                we = r(85429),
                ye = r(39701),
                ve = r.n(ye),
                je = r(3152),
                ke = r(45182),
                Ne = r(75657),
                Ce = r(97342);

            function Le(e, t, r, s, a, n, l) {
                try {
                    var i = e[n](l),
                        o = i.value
                } catch (c) {
                    return void r(c)
                }
                i.done ? t(o) : Promise.resolve(o).then(s, a)
            }

            function Ee(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(s, a) {
                        var n = e.apply(t, r);

                        function l(e) {
                            Le(n, s, a, l, i, "next", e)
                        }

                        function i(e) {
                            Le(n, s, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Se(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), s.forEach((function(t) {
                        Se(e, t, r[t])
                    }))
                }
                return e
            }
            var Ie = function(e) {
                    var t = e.user,
                        r = e.jwtToken,
                        c = e.currentNetworkId,
                        d = (0, l.useRef)(!1),
                        m = (0, l.useRef)(),
                        f = (0, l.useRef)(),
                        x = (0, l.useState)(!1),
                        p = x[0],
                        h = x[1],
                        g = (0, l.useState)(null),
                        b = g[0],
                        w = g[1],
                        y = (0, l.useState)(null),
                        v = y[0],
                        j = y[1],
                        k = (0, l.useState)(0),
                        N = k[0],
                        C = k[1],
                        L = (0, l.useState)(0),
                        E = L[0],
                        S = L[1],
                        I = (0, l.useState)(),
                        R = I[0],
                        _ = I[1],
                        Z = (0, l.useState)(),
                        O = Z[0],
                        U = Z[1],
                        F = (0, l.useState)(!1),
                        P = F[0],
                        z = F[1],
                        D = (0, a.Z)("common").t,
                        V = (0, n.useRouter)(),
                        q = (0, T.T)(),
                        J = (0, Q.Ge)().library,
                        $ = (0, l.useCallback)((function(e) {
                            return 1 === e ? 48 : 2 === e ? 76 : 3 === e ? 95 : 4 === e ? 104 : 130
                        }), []),
                        Y = function(e, t, r, s) {
                            var a, n, l, i, o, c, d, u;
                            if (t) {
                                if (R && "string" !== typeof R && R[e]) return r ? s ? null === (a = R[e].wanted) || void 0 === a ? void 0 : a.mobile : null === (n = R[e].wanted) || void 0 === n ? void 0 : n.desktop : s ? null === (l = R[e].offered) || void 0 === l ? void 0 : l.mobile : null === (i = R[e].offered) || void 0 === i ? void 0 : i.desktop
                            } else if (O && "string" !== typeof O && O[e]) return r ? s ? null === (o = O[e].wanted) || void 0 === o ? void 0 : o.mobile : null === (c = O[e].wanted) || void 0 === c ? void 0 : c.desktop : s ? null === (d = O[e].offered) || void 0 === d ? void 0 : d.mobile : null === (u = O[e].offered) || void 0 === u ? void 0 : u.desktop
                        },
                        ee = (0, l.useCallback)((function(e) {
                            var t = 0;
                            return e.forEach((function(e) {
                                "number" === typeof e.numberOffersRead && "number" === typeof e.numberOffers && (t += e.numberOffers - e.numberOffersRead)
                            })), t
                        }), []),
                        te = function(e) {
                            return {
                                networkId: e.networkId,
                                username: e.maker[0].username,
                                address: e.maker[0].address,
                                imageUrl: e.maker[0].imageUrl,
                                isVerified: e.maker[0].isVerified,
                                isNft: e.maker[0].isNft
                            }
                        },
                        re = function() {
                            var e = Ee(A().mark((function e(t, r, s) {
                                var a, n, l, i, o, c, d, u, m, f;
                                return A().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = [], n = !0, l = !1, i = void 0, e.prev = 2, o = t.collections.filter((function(e) {
                                                return 1 === e.creator
                                            }))[Symbol.iterator]();
                                        case 4:
                                            if (n = (c = o.next()).done) {
                                                e.next = 27;
                                                break
                                            }
                                            if ("ERC1155" !== (d = c.value).type && "ERC721" !== d.type) {
                                                e.next = 10;
                                                break
                                            }[], ("ERC1155" === d.type ? r.filter((function(e) {
                                                var t;
                                                return "ERC1155" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 1 === e.creator
                                            })) : r.filter((function(e) {
                                                var t;
                                                return "ERC721" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 1 === e.creator
                                            }))).forEach((function(e) {
                                                a.push({
                                                    id: e.tokenId,
                                                    amount: "ERC1155" === e.type ? e.blc : null,
                                                    amountHumanReadable: "ERC1155" === e.type ? e.blc : null,
                                                    type: e.type,
                                                    owner: t.maker[0].address,
                                                    collection: {
                                                        name: d.name ? d.name : "",
                                                        statusVerification: d.statusVerification,
                                                        address: d.collectionAddress.toLowerCase(),
                                                        imageUrl: d.assetLogo ? d.assetLogo : "",
                                                        abi: d.abi,
                                                        networkId: d.networkId,
                                                        type: d.type,
                                                        symbol: d.symbol ? d.symbol : "",
                                                        createdAt: null
                                                    },
                                                    imageSrc: e.imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                })
                                            })), e.next = 24;
                                            break;
                                        case 10:
                                            if ("ERC20" !== d.type) {
                                                e.next = 24;
                                                break
                                            }
                                            if (!(u = r.find((function(e) {
                                                    var t;
                                                    return (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && "ERC20" === e.type && 1 === e.creator
                                                }))) || !u.collectionAddress) {
                                                e.next = 24;
                                                break
                                            }
                                            return m = new K.CH(u.collectionAddress, d.abi, J), e.prev = 14, e.next = 17, m.decimals();
                                        case 17:
                                            f = e.sent, a.push({
                                                id: null,
                                                amount: u.blc ? u.blc : null,
                                                amountHumanReadable: X.formatUnits(u.blc, f),
                                                type: u.type,
                                                owner: t.maker[0].address,
                                                collection: {
                                                    name: d.name ? d.name : "",
                                                    statusVerification: d.statusVerification,
                                                    address: d.collectionAddress.toLowerCase(),
                                                    imageUrl: d.assetLogo ? d.assetLogo : "",
                                                    abi: d.abi,
                                                    networkId: d.networkId,
                                                    type: d.type,
                                                    symbol: d.symbol ? d.symbol : "",
                                                    createdAt: null
                                                },
                                                imageSrc: u.imgURL,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), e.next = 24;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(14), console.log(e.t0);
                                        case 24:
                                            n = !0, e.next = 4;
                                            break;
                                        case 27:
                                            e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t1 = e.catch(2), l = !0, i = e.t1;
                                        case 33:
                                            e.prev = 33, e.prev = 34, n || null == o.return || o.return();
                                        case 36:
                                            if (e.prev = 36, !l) {
                                                e.next = 39;
                                                break
                                            }
                                            throw i;
                                        case 39:
                                            return e.finish(36);
                                        case 40:
                                            return e.finish(33);
                                        case 41:
                                            "0" !== s.valueMaker && a.push({
                                                id: null,
                                                amount: s.valueMaker,
                                                amountHumanReadable: X.formatUnits(s.valueMaker, (0, G.z)("ETHEREUM_DECIMALS_NUMBER")),
                                                type: "NATIVE",
                                                owner: t.maker[0].address,
                                                collection: {
                                                    name: s.name,
                                                    statusVerification: 1,
                                                    address: "",
                                                    imageUrl: s.imageUrl,
                                                    abi: [],
                                                    networkId: t.networkId,
                                                    type: "NATIVE",
                                                    symbol: s.symbol,
                                                    createdAt: null
                                                },
                                                imageSrc: s.imageUrl,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), a.forEach((function(e) {
                                                q((0, H.TG)(e))
                                            }));
                                        case 43:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 29, 33, 41],
                                    [14, 21],
                                    [34, , 36, 40]
                                ])
                            })));
                            return function(t, r, s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        se = function() {
                            var e = Ee(A().mark((function e(t, r, s) {
                                var a, n, l, i, o, c, d, u, m, f;
                                return A().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = [], n = !0, l = !1, i = void 0, e.prev = 2, o = t.collections.filter((function(e) {
                                                return 0 === e.creator
                                            }))[Symbol.iterator]();
                                        case 4:
                                            if (n = (c = o.next()).done) {
                                                e.next = 27;
                                                break
                                            }
                                            if ("ERC1155" !== (d = c.value).type && "ERC721" !== d.type) {
                                                e.next = 10;
                                                break
                                            }[], ("ERC1155" === d.type ? r.filter((function(e) {
                                                var t;
                                                return "ERC1155" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 0 === e.creator
                                            })) : r.filter((function(e) {
                                                var t;
                                                return "ERC721" === e.type && (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && 0 === e.creator
                                            }))).forEach((function(e) {
                                                a.push({
                                                    id: e.tokenId,
                                                    amount: "ERC1155" === e.type ? e.blc : null,
                                                    amountHumanReadable: "ERC1155" === e.type ? e.blc : null,
                                                    type: e.type,
                                                    owner: t.taker[0].address,
                                                    collection: {
                                                        name: d.name ? d.name : "",
                                                        statusVerification: d.statusVerification,
                                                        address: d.collectionAddress.toLowerCase(),
                                                        imageUrl: d.assetLogo ? d.assetLogo : "",
                                                        abi: d.abi,
                                                        networkId: d.networkId,
                                                        type: d.type,
                                                        symbol: d.symbol ? d.symbol : "",
                                                        createdAt: null
                                                    },
                                                    imageSrc: e.imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                })
                                            })), e.next = 24;
                                            break;
                                        case 10:
                                            if ("ERC20" !== d.type) {
                                                e.next = 24;
                                                break
                                            }
                                            if (!(u = r.find((function(e) {
                                                    var t;
                                                    return (null === (t = e.collectionAddress) || void 0 === t ? void 0 : t.toLowerCase()) === d.collectionAddress.toLowerCase() && "ERC20" === e.type && 0 === e.creator
                                                }))) || !u.collectionAddress) {
                                                e.next = 24;
                                                break
                                            }
                                            return m = new K.CH(u.collectionAddress, d.abi, J), e.prev = 14, e.next = 17, m.decimals();
                                        case 17:
                                            f = e.sent, a.push({
                                                id: null,
                                                amount: u.blc ? u.blc : null,
                                                amountHumanReadable: X.formatUnits(u.blc, f),
                                                type: u.type,
                                                owner: t.taker[0].address,
                                                collection: {
                                                    name: d.name ? d.name : "",
                                                    statusVerification: d.statusVerification,
                                                    address: d.collectionAddress.toLowerCase(),
                                                    imageUrl: d.assetLogo ? d.assetLogo : "",
                                                    abi: d.abi,
                                                    networkId: d.networkId,
                                                    type: d.type,
                                                    symbol: d.symbol ? d.symbol : "",
                                                    createdAt: null
                                                },
                                                imageSrc: u.imgURL,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), e.next = 24;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(14), console.log(e.t0);
                                        case 24:
                                            n = !0, e.next = 4;
                                            break;
                                        case 27:
                                            e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t1 = e.catch(2), l = !0, i = e.t1;
                                        case 33:
                                            e.prev = 33, e.prev = 34, n || null == o.return || o.return();
                                        case 36:
                                            if (e.prev = 36, !l) {
                                                e.next = 39;
                                                break
                                            }
                                            throw i;
                                        case 39:
                                            return e.finish(36);
                                        case 40:
                                            return e.finish(33);
                                        case 41:
                                            "0" !== s.valueTaker && a.push({
                                                id: null,
                                                amount: s.valueTaker,
                                                amountHumanReadable: X.formatUnits(s.valueTaker, (0, G.z)("ETHEREUM_DECIMALS_NUMBER")),
                                                type: "NATIVE",
                                                owner: t.taker[0].address,
                                                collection: {
                                                    name: s.name,
                                                    statusVerification: 1,
                                                    address: "",
                                                    imageUrl: s.imageUrl,
                                                    abi: [],
                                                    networkId: t.networkId,
                                                    type: "NATIVE",
                                                    symbol: s.symbol,
                                                    createdAt: null
                                                },
                                                imageSrc: s.imageUrl,
                                                isApproved: !1,
                                                hasPlaceholder: !1
                                            }), a.forEach((function(e) {
                                                q((0, H.c6)(e))
                                            }));
                                        case 43:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 29, 33, 41],
                                    [14, 21],
                                    [34, , 36, 40]
                                ])
                            })));
                            return function(t, r, s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ae = function(e, t) {
                            if (r) {
                                var s = (0, i.f)("getSwapByPostId", [e]);
                                t("loading"), (0, o.Vd)(s, r).then((function(e) {
                                    ! function(e, t) {
                                        f.current ? (q((0, H.eV)("taker")), f.current.getTradeOrder(e.networkId, e.swapId.toString()).then(function() {
                                            var r = Ee(A().mark((function r(s) {
                                                var a, n;
                                                return A().wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (!s) {
                                                                r.next = 14;
                                                                break
                                                            }
                                                            return a = s.master, n = s.detail, q((0, H.vg)(e.swapId.toString())), r.next = 5, re(e, n, a[0]);
                                                        case 5:
                                                            return r.next = 7, se(e, n, a[0]);
                                                        case 7:
                                                            q((0, H.dC)(e.swapStart.toString())), q((0, H.J7)(e.swapEnd.toString())), q((0, H.M7)(te(e))), q((0, H.D0)()), q((0, H.r$)(!0)), document.body.classList.add("no-scroll"), t && t("default");
                                                        case 14:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function(e) {
                                                return r.apply(this, arguments)
                                            }
                                        }()).catch((function(e) {
                                            console.log(e), t && t("default")
                                        }))) : (q((0, B.Hj)(!0)), t && t("default"))
                                    }(e, t)
                                })).catch((function(e) {
                                    (0, Ce.$)(e, q), console.log(e), t("default")
                                }))
                            }
                        };
                    return (0, l.useEffect)((function() {
                        var e;
                        d.current = !0;
                        var r = function() {
                            e && clearTimeout(e), e = setTimeout((function() {
                                window.innerWidth < 1024 ? z(!0) : z(!1)
                            }), 50)
                        };
                        return r(), window.addEventListener("resize", r), f.current = new W.h4({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), f.current.initClient({
                                web3Provider: J.provider
                            }), f.current.setNetworkId(c), f.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }), m.current = new W.ov({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), m.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }), m.current && m.current.listPosts({
                                owner: t.address
                            }, void 0, 0, 3, t.address).then((function(e) {
                                var r = e.posts,
                                    s = e.total;
                                w(r), C(s), m.current.listPosts({
                                    owner: t.address,
                                    includeParent: !0
                                }, void 0, 0, 3).then((function(e) {
                                    var t = e.posts,
                                        r = e.total;
                                    j(t), S(r)
                                })).catch((function(e) {
                                    console.log(e)
                                })).finally((function() {}))
                            })).catch((function(e) {
                                console.log(e)
                            })).finally((function() {})),
                            function() {
                                d.current = !1, window.removeEventListener("resize", r)
                            }
                    }), []), (0, l.useEffect)((function() {
                        if (Array.isArray(b) && Array.isArray(v)) {
                            h(!0);
                            var e = null;
                            b.forEach((function(t, r) {
                                0 === r ? e = Se({}, t.id, {
                                    wanted: t.assets.wanted ? {
                                        mobile: 70,
                                        desktop: $(t.assets.wanted.length)
                                    } : void 0,
                                    offered: t.assets.offered ? {
                                        mobile: 70,
                                        desktop: $(t.assets.offered.length)
                                    } : void 0
                                }) : e[t.id] = {
                                    wanted: t.assets.wanted ? {
                                        mobile: 70,
                                        desktop: $(t.assets.wanted.length)
                                    } : void 0,
                                    offered: t.assets.offered ? {
                                        mobile: 70,
                                        desktop: $(t.assets.offered.length)
                                    } : void 0
                                }
                            })), _(e);
                            var t = null;
                            v.forEach((function(e, r) {
                                0 === r ? t = Se({}, e.id, {
                                    wanted: e.assets.wanted ? {
                                        mobile: 70,
                                        desktop: $(e.assets.wanted.length)
                                    } : void 0,
                                    offered: e.assets.offered ? {
                                        mobile: 70,
                                        desktop: $(e.assets.offered.length)
                                    } : void 0
                                }) : t[e.id] = {
                                    wanted: e.assets.wanted ? {
                                        mobile: 70,
                                        desktop: $(e.assets.wanted.length)
                                    } : void 0,
                                    offered: e.assets.offered ? {
                                        mobile: 70,
                                        desktop: $(e.assets.offered.length)
                                    } : void 0
                                }
                            })), U(t)
                        }
                    }), [b, v]), (0, l.useEffect)((function() {
                        R && O && h(!0)
                    }), [R, O]), p && b && v ? (0, s.jsxs)("section", {
                        className: "flex flex-col justify-start gap-y-[16px] p-[24px] bg-primary-white rounded-2xl shadow-3xl lg:flex-row",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-y-[40px] mb-[24px] justify-between lg:mb-[0px] lg:flex-1",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center justify-between w-full",
                                children: [(0, s.jsxs)("h3", {
                                    className: "text-base font-regular text-primary-dark-blue",
                                    children: [(0, s.jsx)("span", {
                                        className: "font-semibold text-xl",
                                        children: N
                                    }), " ", D("activeThreadsLabel")]
                                }), ee(b) > 0 && (0, s.jsx)("div", {
                                    className: "flex items-center justify-center bg-primary-yellow px-[8px] py-[6px] rounded-[4px] select-none",
                                    children: (0, s.jsx)("span", {
                                        className: "rubik text-xs font-semibold text-primary-blue",
                                        children: "".concat(ee(b), " ").concat(D("unreadRepliesLabel"))
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "flex flex-col gap-y-[24px] min-h-[174px]",
                                children: (0, s.jsx)(s.Fragment, {
                                    children: b.map((function(e, t) {
                                        var r, a;
                                        return (0, s.jsx)(l.Fragment, {
                                            children: (0, s.jsxs)("div", {
                                                className: "flex relative",
                                                children: [(0, s.jsx)("img", {
                                                    src: (0, je.l2)(e.networkId),
                                                    className: "absolute -left-[13px] -top-[10px]"
                                                }), (null === (r = e.assets.offered) || void 0 === r ? void 0 : r.length) ? (0, s.jsxs)("div", {
                                                    style: {
                                                        width: "".concat(Y(e.id, !0, !1, P), "px")
                                                    },
                                                    children: [(0, s.jsx)("div", {
                                                        className: "hidden lg:block",
                                                        children: (0, s.jsx)(be.Z, {
                                                            assets: e.assets.offered,
                                                            mode: "SHRINKED",
                                                            maxItemDisplayedDesktop: 4,
                                                            maxItemDisplayedMobile: 1,
                                                            classNameAssetCard: "w-[40px] h-[40px]",
                                                            classNameCounterAssets: "w-[40px] h-[40px]",
                                                            deltaX: 20
                                                        })
                                                    }), (0, s.jsx)("div", {
                                                        className: "lg:hidden",
                                                        children: (0, s.jsx)(be.Z, {
                                                            assets: e.assets.offered,
                                                            mode: "SHRINKED",
                                                            maxItemDisplayedDesktop: 2,
                                                            maxItemDisplayedMobile: 1,
                                                            classNameAssetCard: "w-[40px] h-[40px]",
                                                            classNameCounterAssets: "w-[40px] h-[40px]",
                                                            deltaX: 20
                                                        })
                                                    })]
                                                }) : (0, s.jsx)("img", {
                                                    src: ke.Z.src,
                                                    className: "relative z-[1] mr-[10px]",
                                                    width: 40,
                                                    height: 40
                                                }), Object.values(e.assets).some((function(e) {
                                                    return !e.length
                                                })) ? (0, s.jsx)("div", {
                                                    className: "flex justify-center items-center mr-[10px]",
                                                    children: (0, s.jsx)("img", {
                                                        src: me.Z.src
                                                    })
                                                }) : (0, s.jsx)("div", {
                                                    className: "flex justify-center items-center mr-[10px]",
                                                    children: (0, s.jsx)("img", {
                                                        src: e.type === W.JH.B1 || e.type === W.JH.B2 ? fe.Z.src : me.Z.src
                                                    })
                                                }), (null === (a = e.assets.wanted) || void 0 === a ? void 0 : a.length) ? (0, s.jsx)("div", {
                                                    style: {
                                                        width: "".concat(Y(e.id, !1, !0, P), "px")
                                                    },
                                                    children: (0, s.jsx)(ue.Z, {
                                                        maxItemsViewable: P ? 2 : 3,
                                                        shrink: !0,
                                                        useOnlyMobile: !0,
                                                        children: e.assets.wanted.map((function(e, t) {
                                                            return (0, s.jsx)(M.Z, {
                                                                src: e.imageUrl,
                                                                className: "w-[40px] h-[40px]",
                                                                badgeClassName: "w-[16px] h-[16px]",
                                                                statusVerification: e.statusVerification,
                                                                collection: Te({}, e, {
                                                                    abi: e.abi ? e.abi : []
                                                                }),
                                                                showCollectionTooltip: "ERC20" !== e.type && "NATIVE" !== e.type
                                                            }, "avatar-".concat(t))
                                                        }))
                                                    })
                                                }) : (0, s.jsx)("img", {
                                                    src: ke.Z.src,
                                                    width: 40,
                                                    height: 40
                                                }), (0, s.jsx)(Ne.default, {
                                                    href: "/post/".concat(e.id),
                                                    passHref: !0,
                                                    children: (0, s.jsx)("a", {
                                                        className: "cursor-pointer relative flex items-center justify-center w-10 h-10 border ".concat(e.numberOffers > 0 ? ve().hoverFilterDarkBlue : ve().hoverFilterDarkGray, " ").concat(e.numberOffers > 0 ? "border-primary-blue hover:border-primary-dark-blue" : "border-primary-gray hover:border-[#585b63]", " rounded-full ml-auto"),
                                                        children: (0, s.jsxs)("div", {
                                                            className: "",
                                                            onClick: function() {
                                                                V.push("/post/".concat(e.id))
                                                            },
                                                            children: [(0, s.jsx)("div", {
                                                                className: "relative w-4 h-4",
                                                                children: (0, s.jsx)("img", {
                                                                    src: e.numberOffers > 0 ? xe.Z.src : pe.Z.src
                                                                })
                                                            }), e.numberOffersRead < e.numberOffers ? (0, s.jsxs)("div", {
                                                                className: "absolute bottom-0 right-0 p-[2px] rounded-full bg-primary-yellow font-semibold text-primary-blue text-xxs text-center",
                                                                children: ["+", e.numberOffers - e.numberOffersRead]
                                                            }) : (0, s.jsx)("div", {
                                                                className: "absolute bottom-0 right-0 w-3 font-semibold ".concat(e.numberOffers > 0 ? "text-primary-blue" : "text-primary-gray", " text-xxs text-center bg-white"),
                                                                children: e.numberOffers
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        }, "post-assets-".concat(t))
                                    }))
                                })
                            }), (0, s.jsx)(u.Z, {
                                size: "large",
                                initialState: {
                                    state: "default"
                                },
                                text: D("seeAllLabel"),
                                type: {
                                    class: "secondary",
                                    icon: !1,
                                    hasColoredBg: !1
                                },
                                onClick: function() {
                                    n.default.push("".concat(t.username ? t.username : t.address, "/threads"))
                                },
                                className: "w-full hover:bg-primary-blue hover:text-primary-white"
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex justify-center items-center w-full h-[1px] lg:w-[64px] lg:h-[336px]",
                            children: (0, s.jsx)("div", {
                                className: "w-full h-[1px] bg-primary-gray/40 lg:w-[1px] lg:h-full"
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col gap-y-[40px] mt-[24px] justify-between lg:mt-[0px] lg:flex-1",
                            children: (0, s.jsx)(s.Fragment, {
                                children: v ? (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsxs)("h3", {
                                        className: "text-base font-regular text-primary-dark-blue",
                                        children: [(0, s.jsx)("span", {
                                            className: "font-semibold text-xl",
                                            children: E
                                        }), " ", D("activeRepliesLabel")]
                                    }), (0, s.jsx)("div", {
                                        className: "flex flex-col gap-y-[24px] min-h-[174px]",
                                        children: v.map((function(e, t) {
                                            var r;
                                            return (0, s.jsx)(l.Fragment, {
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex relative justify-between",
                                                    children: [(0, s.jsx)("img", {
                                                        src: (0, je.l2)(e.networkId),
                                                        className: "absolute -left-[13px] -top-[10px]"
                                                    }), (null === (r = e.assets.offered) || void 0 === r ? void 0 : r.length) ? (0, s.jsxs)("div", {
                                                        style: {
                                                            width: "".concat(Y(e.id, !1, !1, P), "px")
                                                        },
                                                        children: [(0, s.jsx)("div", {
                                                            className: "hidden lg:block",
                                                            children: (0, s.jsx)(be.Z, {
                                                                assets: e.assets.offered,
                                                                mode: "SHRINKED",
                                                                maxItemDisplayedDesktop: 4,
                                                                maxItemDisplayedMobile: 1,
                                                                classNameAssetCard: "w-[40px] h-[40px]",
                                                                classNameCounterAssets: "w-[40px] h-[40px]",
                                                                deltaX: 20
                                                            })
                                                        }), (0, s.jsx)("div", {
                                                            className: "lg:hidden",
                                                            children: (0, s.jsx)(be.Z, {
                                                                assets: e.assets.offered,
                                                                mode: "SHRINKED",
                                                                maxItemDisplayedDesktop: 2,
                                                                maxItemDisplayedMobile: 1,
                                                                classNameAssetCard: "w-[40px] h-[40px]",
                                                                classNameCounterAssets: "w-[40px] h-[40px]",
                                                                deltaX: 20
                                                            })
                                                        })]
                                                    }) : null, e.accepted ? (0, s.jsx)(u.Z, {
                                                        size: "small",
                                                        initialState: {
                                                            state: "default"
                                                        },
                                                        text: (0, s.jsxs)("div", {
                                                            className: "flex items-center gap-x-[12px] justify-between",
                                                            children: [(0, s.jsx)("span", {
                                                                children: D("acceptLabel")
                                                            }), (0, s.jsx)("svg", {
                                                                className: "w-[12px]",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0, s.jsx)("path", {
                                                                    d: "M7.67993 22.695L5.80493 20.805L14.4599 12.165L5.81993 3.54001L7.67993 1.69501L18.1949 12.21L7.67993 22.695Z",
                                                                    fill: "currentColor"
                                                                })
                                                            })]
                                                        }),
                                                        type: {
                                                            class: "primary",
                                                            icon: !1,
                                                            hasColoredBg: !1
                                                        },
                                                        onClick: function(t) {
                                                            ae(e.parent.id, t)
                                                        }
                                                    }) : (0, s.jsxs)("div", {
                                                        className: "flex items-center gap-x-[12px]",
                                                        children: [1 === e.like && (0, s.jsxs)(s.Fragment, {
                                                            children: [(0, s.jsx)("img", {
                                                                src: he.Z.src,
                                                                className: "w-[32px] h-[32px]",
                                                                "data-for": "".concat(e.id, "-tooltip"),
                                                                "data-tip": !0
                                                            }), (0, s.jsx)(we.Z, {
                                                                id: "".concat(e.id, "-tooltip"),
                                                                type: "dark",
                                                                effect: "solid",
                                                                backgroundColor: "#01085a",
                                                                children: D("creatorLikeThisReplyLabel")
                                                            })]
                                                        }), 2 === e.like && (0, s.jsxs)(s.Fragment, {
                                                            children: [(0, s.jsx)("img", {
                                                                src: ge.Z.src,
                                                                className: "w-[32px] h-[32px]",
                                                                "data-for": "".concat(e.id, "-tooltip"),
                                                                "data-tip": !0
                                                            }), (0, s.jsx)(we.Z, {
                                                                id: "".concat(e.id, "-tooltip"),
                                                                type: "dark",
                                                                effect: "solid",
                                                                backgroundColor: "#01085a",
                                                                children: D("creatorDoesntLikeThisReplyLabel")
                                                            })]
                                                        }), (0, s.jsx)(Ne.default, {
                                                            href: "/post/".concat(e.parentId),
                                                            passHref: !0,
                                                            children: (0, s.jsx)("a", {
                                                                className: "flex justify-center items-center h-[40px] w-[40px] cursor-pointer rounded-full border-[1px] border-solid border-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-blue text-primary-blue hover:text-white",
                                                                children: (0, s.jsx)("div", {
                                                                    children: (0, s.jsx)("svg", {
                                                                        className: "w-[16px]",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            d: "M7.67993 22.695L5.80493 20.805L14.4599 12.165L5.81993 3.54001L7.67993 1.69501L18.1949 12.21L7.67993 22.695Z",
                                                                            fill: "currentColor"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }, "post-assets-".concat(t))
                                        }))
                                    }), (0, s.jsx)(u.Z, {
                                        size: "large",
                                        initialState: {
                                            state: "default"
                                        },
                                        text: D("seeAllLabel"),
                                        type: {
                                            class: "secondary",
                                            icon: !1,
                                            hasColoredBg: !1
                                        },
                                        onClick: function() {
                                            n.default.push("/".concat(t.username ? t.username : t.address, "/replies"))
                                        },
                                        className: "w-full hover:bg-primary-blue hover:text-primary-white"
                                    })]
                                }) : null
                            })
                        })]
                    }) : (0, s.jsxs)("section", {
                        className: "flex flex-col justify-start gap-y-[16px] p-[24px] bg-primary-white rounded-2xl shadow-3xl lg:flex-row",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-y-[40px] mb-[24px] justify-between lg:mb-[0px] lg:flex-1",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center justify-between w-full",
                                children: (0, s.jsx)("div", {
                                    className: "w-[60px] h-[20px] rounded-full ".concat(ve().skeleton)
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-y-[24px]",
                                children: [(0, s.jsx)("div", {
                                    className: "w-full ".concat(ve().skeleton, " h-[20px] rounded-full lg:w-[200px]")
                                }), (0, s.jsx)("div", {
                                    className: "w-full ".concat(ve().skeleton, " h-[20px] rounded-full lg:w-[200px]")
                                }), (0, s.jsx)("div", {
                                    className: "w-full ".concat(ve().skeleton, " h-[20px] rounded-full lg:w-[200px]")
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-full h-[40px] rounded-full ".concat(ve().skeleton)
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex justify-center items-center w-full h-[1px] lg:w-[64px] lg:h-[336px]",
                            children: (0, s.jsx)("div", {
                                className: "w-full h-[1px] bg-primary-gray/40 lg:w-[1px] lg:h-full"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-y-[40px] mb-[24px] justify-between lg:mb-[0px] lg:flex-1",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center justify-between w-full",
                                children: (0, s.jsx)("div", {
                                    className: "w-[60px] h-[20px] rounded-full ".concat(ve().skeleton)
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-y-[24px]",
                                children: [(0, s.jsx)("div", {
                                    className: "w-full ".concat(ve().skeleton, " h-[20px] rounded-full lg:w-[200px]")
                                }), (0, s.jsx)("div", {
                                    className: "w-full ".concat(ve().skeleton, " h-[20px] rounded-full lg:w-[200px]")
                                }), (0, s.jsx)("div", {
                                    className: "w-full ".concat(ve().skeleton, " h-[20px] rounded-full lg:w-[200px]")
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-full h-[40px] rounded-full ".concat(ve().skeleton)
                            })]
                        })]
                    })
                },
                Ae = r(98542),
                Re = function(e) {
                    var t = e.user,
                        r = e.jwtToken,
                        a = e.currentNetworkId,
                        n = (0, T.C)((function(e) {
                            return e
                        })).waccount.isConnected;
                    return (0, s.jsx)("div", {
                        children: (0, s.jsxs)("main", {
                            children: [n && t && t.isOwner && r && (0, s.jsxs)("div", {
                                className: "flex flex-col gap-4 lg:gap-12 px-4 m-auto mt-4 lg:mt-12 lg:px-10 xl:px-0",
                                children: [(0, s.jsx)(Ie, {
                                    user: t,
                                    jwtToken: r,
                                    currentNetworkId: a
                                }), (0, s.jsx)(de, {
                                    user: t
                                })]
                            }), t && !t.isOwner && (0, s.jsx)("div", {
                                className: "px-[16px] mt-[32px] lg:mt-[0px]",
                                children: (0, s.jsx)(Ae.Z, {
                                    user: t,
                                    hideSearchUserBar: !0
                                })
                            })]
                        })
                    })
                },
                _e = r(65246),
                Ze = r(30561),
                Oe = r(5945),
                Ue = r(30727),
                Fe = r(45012),
                Pe = r(34543),
                Me = r(93383),
                ze = r.n(Me),
                De = r(16058),
                Ve = r(99033),
                He = r(96894);

            function Be(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), s.forEach((function(t) {
                        Be(e, t, r[t])
                    }))
                }
                return e
            }
            var Xe = function(e) {
                    var t = e.user,
                        r = e.onLoadHistory,
                        n = (0, l.useRef)(!1),
                        i = (0, l.useRef)(null),
                        o = (0, Q.Ge)().library,
                        c = (0, a.Z)("common").t,
                        d = (0, l.useState)({
                            swaps: []
                        }),
                        u = d[0],
                        m = d[1],
                        f = (0, l.useState)(!1),
                        x = f[0],
                        p = f[1],
                        h = (0, l.useState)(!1),
                        g = h[0],
                        b = h[1],
                        w = (0, l.useState)(0),
                        y = w[0],
                        v = w[1],
                        j = (0, l.useState)(10)[0],
                        k = (0, l.useState)(0),
                        N = k[0],
                        C = k[1],
                        L = function() {
                            if (i.current) {
                                n.current && p(!0);
                                var e = {
                                    networkId: "*",
                                    status: "*",
                                    skip: y,
                                    take: j,
                                    address: t.address
                                };
                                i.current.config({
                                    backendURL: "https://api.nfttrader.io"
                                }), i.current.getUserTradesList(e).then((function(e) {
                                    var t = e.tradeList,
                                        r = e.count;
                                    n.current && C(r), 0 === u.swaps.length ? n.current && m({
                                        swaps: t
                                    }) : n.current && m({
                                        swaps: u.swaps.concat(t)
                                    })
                                })).catch((function(e) {
                                    console.error(e)
                                })).finally((function() {
                                    n.current && p(!1), r && r()
                                }))
                            }
                        };
                    return (0, l.useEffect)((function() {
                        return n.current = !0,
                            function() {
                                n.current = !1
                            }
                    })), (0, l.useEffect)((function() {
                        N > u.swaps.length ? n.current && (v(y + j), b(!0)) : n.current && b(!1)
                    }), [u.swaps]), (0, l.useEffect)((function() {
                        i.current || (i.current = new W.h4({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        }), L())
                    }), []), (0, l.useEffect)((function() {
                        o && i.current && i.current.initClient({
                            web3Provider: o.provider
                        })
                    }), [o, i.current]), (0, s.jsx)(s.Fragment, {
                        children: u.swaps.length > 0 ? (0, s.jsx)("div", {
                            className: "w-full flex flex-col justify-center items-center pb-[40px] px-4 lg:px-10 xl:px-0 m-auto ".concat(ze().scrollableTrades),
                            children: (0, s.jsx)(Pe.Z, {
                                dataLength: u.swaps.length,
                                hasMore: g,
                                next: L,
                                loader: (0, s.jsx)(s.Fragment, {
                                    children: x && (0, s.jsx)("div", {
                                        className: "flex justify-center items-center",
                                        children: (0, s.jsx)("img", {
                                            src: De.Z.src,
                                            className: "".concat(ze().rotating),
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                }),
                                className: "flex flex-col justify-center items-center gap-8 py-[40px]",
                                children: u.swaps.map((function(e) {
                                    return (0, s.jsx)(He.Z, {
                                        maker: Ke({}, e.maker[0], {
                                            collections: e.collections.filter((function(e) {
                                                return 1 === e.creator
                                            }))
                                        }),
                                        taker: Ke({}, e.taker[0], {
                                            collections: e.collections.filter((function(e) {
                                                return 0 === e.creator
                                            }))
                                        }),
                                        timestamp: e.swapEnd,
                                        swapId: e.swapId,
                                        type: e.type,
                                        txHash: e.txHash,
                                        status: e.swapStatus,
                                        className: "w-full",
                                        isClickable: !0,
                                        redirect: !0,
                                        networkId: e.networkId
                                    }, "trade-".concat(e.networkId, "-").concat(e.swapId))
                                }))
                            })
                        }) : (0, s.jsx)(s.Fragment, {
                            children: x ? (0, s.jsx)("div", {
                                className: "flex justify-center items-center pb-[50px]",
                                children: (0, s.jsx)(ie.Z, {
                                    isWhite: !1,
                                    className: "w-[36px] h-[36px]"
                                })
                            }) : (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center gap-10 pb-[50px] mt-[76px] text-center",
                                    children: [(0, s.jsx)("img", {
                                        src: Ve.Z.src
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center",
                                        children: [(0, s.jsx)("h1", {
                                            className: "text-2xl text-primary-dark-blue font-semibold lg:text-3xl",
                                            children: c("noResultsLabel")
                                        }), (0, s.jsx)("h3", {
                                            className: "text-base font-light text-primary-dark-blue",
                                            children: c("tryAgainLabel")
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                Qe = r(71689),
                Ge = r(16317),
                qe = r(14620),
                Je = r.n(qe),
                $e = r(62794),
                We = r(60734),
                Ye = r(70202),
                et = r(19722),
                tt = r(97110),
                rt = r(58616),
                st = function(e) {
                    var t = e.user,
                        r = e.headerContainerRef,
                        n = (0, a.Z)("common").t,
                        i = (0, l.useRef)(!1),
                        o = (0, l.useRef)(null),
                        c = (0, l.useRef)(null),
                        u = (0, l.useState)("1"),
                        m = u[0],
                        x = u[1],
                        p = (0, l.useState)(),
                        g = p[0],
                        b = p[1],
                        w = (0, l.useState)(0),
                        y = w[0],
                        v = w[1],
                        j = (0, l.useState)(!0),
                        k = j[0],
                        N = j[1],
                        C = (0, l.useState)(null),
                        L = C[0],
                        E = C[1],
                        S = (0, l.useState)(!1),
                        T = S[0],
                        I = S[1],
                        A = (0, l.useState)(0),
                        R = A[0],
                        _ = A[1],
                        Z = (0, l.useState)(!1),
                        O = Z[0],
                        U = Z[1],
                        F = (0, l.useState)([]),
                        P = F[0],
                        M = F[1],
                        z = (0, l.useState)(!1),
                        D = z[0],
                        V = z[1],
                        H = (0, l.useState)(!1),
                        B = H[0],
                        K = H[1],
                        X = (0, l.useState)(),
                        Q = X[0],
                        q = X[1],
                        J = (0, l.useState)(!1),
                        $ = J[0],
                        Y = J[1],
                        ee = (0, l.useState)(),
                        te = ee[0],
                        re = ee[1],
                        se = function(e) {
                            t && o.current && m && (i.current && U(!0), o.current.getNFTs({
                                networkId: m,
                                address: t.address,
                                take: 50,
                                continuation: L || void 0,
                                collections: e ? e.map((function(e) {
                                    return {
                                        address: e.address
                                    }
                                })) : void 0
                            }).then((function(e) {
                                if (e) {
                                    var t = e.data[0],
                                        r = t.nfts,
                                        s = t.continuation,
                                        a = t.total;
                                    i.current && _(a), 0 === r.length ? i.current && M(r) : i.current && M(P.concat(r)), s ? i.current && E(s) : i.current && E(null)
                                }
                            })).catch((function(e) {
                                console.log(e)
                            })).finally((function() {
                                i.current && U(!1)
                            })))
                        },
                        ae = (0, l.useCallback)((function(e, t) {
                            var r = e[0];
                            r.isIntersecting, r.isVisible
                        }), []);
                    return (0, l.useEffect)((function() {
                        return i.current = !0, o.current = new W.k_({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), o.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }), K(!0), q(new IntersectionObserver(ae, {
                                rootMargin: "-85px 0px 0px 0px",
                                threshold: [1]
                            })),
                            function() {
                                i.current = !1
                            }
                    }), []), (0, l.useEffect)((function() {
                        (g || m) && i.current && I(!0)
                    }), [g, m]), (0, l.useEffect)((function() {
                        T && i.current && M([])
                    }), [T]), (0, l.useEffect)((function() {
                        T && i.current && _(0)
                    }), [T, P]), (0, l.useEffect)((function() {
                        T && i.current && V(!1)
                    }), [T, P, R]), (0, l.useEffect)((function() {
                        T && i.current && E(null)
                    }), [T, P, R, D]), (0, l.useEffect)((function() {
                        T && i.current && I(!1)
                    }), [T, P, L, D, R]), (0, l.useEffect)((function() {
                        B && !T && se(g)
                    }), [B, T]), (0, l.useEffect)((function() {
                        i.current && R > 0 && P.length > 0 && (P.length < R ? V(!0) : V(!1))
                    }), [P, R]), (0, l.useEffect)((function() {
                        var e = r.current;
                        if (e && Q) return Q.observe(e),
                            function() {
                                Q.disconnect()
                            }
                    }), [r.current, Q]), (0, s.jsxs)("section", {
                        className: "grid grid-cols-12",
                        children: [(0, s.jsxs)("div", {
                            className: "bg-primary-white rounded-[16px] ".concat(k ? "w-[100%] mt-[40px] col-span-12 lg:mt-[40px] lg:flex lg:flex-col lg:gap-y-[32px] lg:col-span-3 lg:max-h-[732px] lg:w-[336px]" : "hidden", " lg:sticky lg:top-[85px] lg:mt-[0]"),
                            ref: c,
                            children: [(0, s.jsxs)(Qe.R, {
                                value: y,
                                onChange: function(e) {
                                    x(e.toString()), v(0)
                                },
                                children: [(0, s.jsxs)("div", {
                                    id: "grid-filter-chain",
                                    className: "grid grid-cols-12",
                                    children: [(0, s.jsxs)(Qe.R.Button, {
                                        className: "flex w-full col-span-10 cursor-pointer items-center space-x-3 rounded-full border border-gray-300 py-3.5 px-6 text-left relative font-semibold text-primary-blue focus:outline-none focus:ring-0 lg:col-span-12",
                                        children: [(0, s.jsx)("img", {
                                            src: (0, je.l2)(m)
                                        }), (0, s.jsx)("span", {
                                            className: "capitalize block truncate text-primary-dark-blue",
                                            children: (0, je.qe)(m)
                                        }), (0, s.jsx)("span", {
                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",
                                            children: (0, s.jsx)(d.ZXJ, {
                                                className: "h-6 w-6 text-primary-blue",
                                                "aria-hidden": "true"
                                            })
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "flex justify-center col-span-2 lg:hidden",
                                        children: (0, s.jsx)("div", {
                                            className: "flex items-center justify-center w-[47px] h-[47px] border-[1px] ".concat(k ? "" : "bg-primary-blue hover:bg-primary-dark-blue", " border-primary-blue border-solid rounded-full cursor-pointer transition-colors ease-in-out duration-500 ").concat(k ? "hover:border-primary-dark-blue" : "", " ").concat(k ? Je().filterHoverDarkBlue : ""),
                                            onClick: function() {
                                                N(!k)
                                            },
                                            children: (0, s.jsx)("img", {
                                                src: k ? $e.Z.src : We.Z.src,
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                    })]
                                }), (0, s.jsx)(f.u, {
                                    as: l.Fragment,
                                    leave: "transition ease-in duration-100",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, s.jsx)(Qe.R.Options, {
                                        className: "absolute z-30 mt-1 w-[80%] rounded-2xl bg-white p-2 shadow-light-bg-grey lg:w-[336px]",
                                        children: je.$C.map((function(e, t) {
                                            return je.Kz[e].mainnet ? (0, s.jsxs)(Qe.R.Option, {
                                                className: function(e) {
                                                    var t = e.active;
                                                    return h()("flex cursor-pointer items-center space-x-3 rounded-md p-4 font-museo text-sm font-semibold text-primary-dark-blue", t && "bg-gray-100")
                                                },
                                                value: e,
                                                children: [(0, s.jsx)("img", {
                                                    src: (0, je.l2)(e),
                                                    className: "w-[24px]"
                                                }), (0, s.jsx)("span", {
                                                    className: "capitalize text-primary-dark-blue",
                                                    children: (0, je.qe)(e)
                                                })]
                                            }, t) : (0, s.jsx)(l.Fragment, {}, t)
                                        }))
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-y-[16px] mt-[40px] lg:mt-[0px]",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-primary-dark-blue text-base font-semibold",
                                    children: n("filterCollectionsLabel")
                                }), (0, s.jsx)(Ge.Z, {
                                    networkId: m,
                                    userAddress: (0, G.z)("ETHEREUM_ADDRESS_ZERO"),
                                    onAddCollection: function(e) {
                                        b(e)
                                    },
                                    mode: "checkbox"
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "col-span-12 lg:flex lg:flex-col lg:gap-y-[32px] ".concat(k ? "lg:col-span-9" : "", " lg:pl-[32px] lg:min-h-[732px]"),
                            children: [(0, s.jsx)("div", {
                                className: "".concat(k ? "hidden" : "flex", " justify-between w-full h-[48px] mt-[40px] lg:flex"),
                                children: (0, s.jsx)("div", {
                                    className: "flex items-center justify-center w-[47px] h-[47px] border-[1px] ".concat(k ? "" : "bg-primary-blue hover:bg-primary-dark-blue", " border-primary-blue border-solid rounded-full cursor-pointer transition-colors ease-in-out duration-500 ").concat(k ? "hover:border-primary-dark-blue" : "", " ").concat(k ? Je().filterHoverDarkBlue : ""),
                                    onClick: function() {
                                        N(!k)
                                    },
                                    children: (0, s.jsx)("img", {
                                        src: k ? $e.Z.src : We.Z.src,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, s.jsx)(s.Fragment, {
                                children: P.length > 0 ? (0, s.jsx)(Pe.Z, {
                                    dataLength: P.length,
                                    hasMore: D,
                                    next: function() {
                                        se(g)
                                    },
                                    loader: (0, s.jsx)("div", {
                                        className: "".concat(k ? "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 xlg:col-span-3 xl:col-span-4 2xl:col-span-5" : "col-span-1 xs:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5", " py-[40px]"),
                                        children: (0, s.jsx)("div", {
                                            className: "flex justify-center items-center",
                                            children: (0, s.jsx)(ie.Z, {
                                                isWhite: !1,
                                                className: "w-[36px] h-[36px]"
                                            })
                                        })
                                    }),
                                    className: "grid justify-items-center mt-[40px] lg:mt-[0px] ".concat(k ? "grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xlg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" : "grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", " gap-4 w-full"),
                                    children: P.map((function(e, t) {
                                        return (0, s.jsx)(Ne.default, {
                                            href: "assets/".concat("137" !== m ? (0, je.kb)(m) : (0, je.nh)(m).chainName.toLowerCase(), "/").concat(e.contract.address, "/").concat(e.tokenId),
                                            children: (0, s.jsx)("a", {
                                                children: (0, s.jsx)(Ye.Z, {
                                                    NFTSrc: (0, et.G)(e.image.cachedUrl),
                                                    NFTId: e.tokenId,
                                                    standard: e.tokenType,
                                                    collection: {
                                                        name: e.nfttraderCollection ? e.nfttraderCollection.name : e.contract.name,
                                                        statusVerification: e.nfttraderCollection ? e.nfttraderCollection.statusVerification : -1,
                                                        address: e.nfttraderCollection ? e.nfttraderCollection.address.toLowerCase() : e.contract.address ? e.contract.address.toLowerCase() : "",
                                                        imageUrl: e.nfttraderCollection ? e.nfttraderCollection.imageUrl : e.contract.openSeaMetadata ? e.contract.openSeaMetadata.imageUrl : "",
                                                        networkId: m,
                                                        abi: e.nfttraderCollection ? e.nfttraderCollection.abi : [],
                                                        type: e.nfttraderCollection ? e.nfttraderCollection.type : e.contract.tokenType,
                                                        symbol: e.nfttraderCollection ? e.nfttraderCollection.symbol : e.contract.symbol,
                                                        createdAt: e.nfttraderCollection ? e.nfttraderCollection.createdAt : null
                                                    },
                                                    address: e.nfttraderCollection ? e.nfttraderCollection.address : e.contract.address ? e.contract.address.toLowerCase() : "",
                                                    isSelected: !1,
                                                    hasPlaceholder: (0, et.A)(e.image.cachedUrl),
                                                    isNotClickable: !0,
                                                    showERC1155Amount: "ERC1155" === (e.nfttraderCollection ? e.nfttraderCollection.type : e.contract.tokenType),
                                                    amount: e.balance ? e.balance : void 0,
                                                    activateObserver: !0,
                                                    onClickAddCollection: function(e) {
                                                        Y(!0), re(e)
                                                    }
                                                })
                                            })
                                        }, t)
                                    }))
                                }) : (0, s.jsx)("div", {
                                    className: "flex items-center justify-center w-full ".concat(0 !== P.length || O ? "" : "h-[500px]", " ").concat(0 === P.length && O || D ? "h-[100px]" : ""),
                                    children: (0, s.jsx)("div", {
                                        className: "flex flex-col items-center justify-center h-full w-full",
                                        children: 0 !== P.length || O ? (0, s.jsx)(s.Fragment, {
                                            children: 0 === P.length && O || D ? (0, s.jsx)("div", {
                                                className: "flex justify-center items-center",
                                                children: (0, s.jsx)(ie.Z, {
                                                    isWhite: !1,
                                                    className: "w-[36px] h-[36px]"
                                                })
                                            }) : (0, s.jsx)(s.Fragment, {})
                                        }) : (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)("img", {
                                                src: tt.Z.src,
                                                width: 88,
                                                height: 88
                                            }), (0, s.jsx)("div", {
                                                className: "text-xl font-semibold text-primary-dark-blue mt-[24px]",
                                                children: n("sorryLabel")
                                            }), (0, s.jsx)("div", {
                                                className: "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                children: n("noAssetsFoundLabel")
                                            })]
                                        })
                                    })
                                })
                            })]
                        }), $ && (0, s.jsx)(rt.Z, {
                            networkId: m,
                            isOpen: !0,
                            actionClose: function() {
                                Y(!1)
                            },
                            collectionAddress: te
                        })]
                    })
                },
                at = r(36063),
                nt = r(70362),
                lt = !0,
                it = function(e) {
                    var t = (0, n.useRouter)(),
                        r = (0, a.Z)("common").t,
                        p = (0, l.useRef)(null),
                        I = (0, T.C)((function(e) {
                            return e
                        })),
                        A = I.waccount,
                        R = I.trademodal,
                        _ = I.reportmodal,
                        Z = I.postmodal,
                        O = (0, T.T)(),
                        U = A.isConnected,
                        F = A.jwtToken,
                        P = A.currentNetworkId,
                        M = A.account,
                        z = R.isOpen,
                        D = R.mode,
                        V = _.isOpen,
                        K = Z.isOpen,
                        X = t.query.profile,
                        Q = (0, l.useRef)(!1),
                        G = (0, l.useState)(),
                        q = G[0],
                        J = G[1],
                        $ = (0, l.useState)(!1),
                        W = $[0],
                        Y = $[1],
                        ee = (0, l.useState)(!1),
                        te = ee[0],
                        re = ee[1],
                        se = (0, l.useState)(!1),
                        ae = se[0],
                        ne = se[1],
                        le = (0, l.useState)(!1),
                        ie = le[0],
                        oe = le[1],
                        ce = (0, l.useState)(0),
                        de = ce[0],
                        ue = ce[1],
                        me = (0, l.useState)(0),
                        fe = me[0],
                        xe = me[1],
                        pe = (0, l.useState)(!1),
                        he = pe[0],
                        ge = pe[1],
                        be = (0, l.useState)(!1),
                        we = be[0],
                        ye = be[1],
                        ve = (0, l.useState)(!1),
                        je = ve[0],
                        ke = ve[1],
                        Ne = function(t) {
                            F && (0, o.jl)((0, i.f)("followUser"), {
                                userFavourite: e.address,
                                notification: t
                            }, F).then((function() {
                                ye(1 == t)
                            })).catch((function(e) {
                                ye(1 != t), (0, Ce.$)(e, O)
                            }))
                        };
                    return (0, l.useEffect)((function() {
                        return Q.current = !0,
                            function() {
                                Q.current = !1
                            }
                    }), []), (0, l.useEffect)((function() {
                        J(0)
                    }), [e]), (0, l.useEffect)((function() {
                        e && t.query.owner && (e.isOwner || e.address.toLowerCase() === t.query.owner.toLowerCase() || t.push("".concat(e.username ? e.username : e.address)))
                    }), [t.query]), (0, l.useEffect)((function() {
                        e && e.address && F && M && ((0, o.bf)((0, i.f)("countFollowed", [e.address])).then((function(e) {
                            xe(e.data[0].count)
                        })).catch((function(e) {
                            console.log(e)
                        })), (0, o.bf)((0, i.f)("countFollowers", [e.address])).then((function(e) {
                            ue(e.data[0].count)
                        })).catch((function(e) {
                            console.log(e)
                        })), e.address.toLowerCase() === M.toLowerCase() ? (ge(!1), ye(!1)) : e.isOwner || (0, o.Vd)((0, i.f)("isUserFollowed", [e.address]), F).then((function(e) {
                            ge(!0), ye(e.data[0].notification)
                        })).catch((function(e) {
                            ge(!1), ye(!1), (0, Ce.$)(e, O)
                        })))
                    }), [e, F, M]), (0, l.useEffect)((function() {
                        U && t.replace(t.asPath)
                    }), [U]), (0, s.jsxs)(nt.Z, {
                        hideFooter: !je,
                        children: ["number" === typeof q && e && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(g.default, {
                                children: [(0, s.jsx)("title", {
                                    children: r("profileTitleLabel") + " " + X
                                }), (0, s.jsx)("link", {
                                    rel: "canonical",
                                    href: "https://www.nfttrader.io/".concat(X)
                                }), (0, s.jsx)("meta", {
                                    name: "title",
                                    content: r("profileTitleLabel") + " " + X
                                }), (0, s.jsx)("meta", {
                                    name: "description",
                                    content: r("metaDescriptionProfileLabel")
                                }), (0, s.jsx)("meta", {
                                    property: "og:site_name",
                                    content: "NFT Trader"
                                }), (0, s.jsx)("meta", {
                                    property: "og:type",
                                    content: "website"
                                }), (0, s.jsx)("meta", {
                                    property: "og:url",
                                    content: "https://www.nfttrader.io/".concat(X)
                                }), (0, s.jsx)("meta", {
                                    property: "og:title",
                                    content: r("profileTitleLabel") + " " + X
                                }), (0, s.jsx)("meta", {
                                    property: "og:description",
                                    content: r("metaDescriptionProfileLabel")
                                }), (0, s.jsx)("meta", {
                                    property: "og:image",
                                    content: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png"
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:card",
                                    content: "summary_large_image"
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:url",
                                    content: "https://www.nfttrader.io/".concat(X)
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:title",
                                    content: r("profileTitleLabel") + " " + X
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:description",
                                    content: r("metaDescriptionProfileLabel")
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:image",
                                    content: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "rounded-b-[32px] bg-primary-blue lg:rounded-b-[50px]",
                                ref: p,
                                children: (0, s.jsx)("div", {
                                    className: "mx-auto max-w-[1920px] p-[16px] pb-[24px] lg:px-[48px] lg:pt-[40px] lg:pb-[48px]",
                                    children: (0, s.jsxs)("div", {
                                        className: "relative lg:flex lg:gap-[60px] lg:justify-between",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex flex-col lg:gap-[60px] lg:flex-row",
                                            children: [(0, s.jsx)(b.Z, {
                                                address: e.address,
                                                isNFT: e.isNft ? 1 : 0,
                                                className: "w-[160px] h-[160px]",
                                                sizesClassNames: "w-[160px] h-[160px] overflow-hidden",
                                                jazziconSize: {
                                                    defaultSize: 160,
                                                    breakpoints: [],
                                                    sizes: []
                                                },
                                                src: e.avatarUrl ? e.avatarUrl : ""
                                            }), (0, s.jsxs)("div", {
                                                className: "mt-[16px] lg:mt-0",
                                                children: [(0, s.jsx)("h1", {
                                                    className: "font-museo text-3xl font-semibold text-white",
                                                    children: (0, s.jsx)("span", {
                                                        children: e.username ? "@".concat(e.username) : (0, s.jsx)(s.Fragment, {
                                                            children: (0, s.jsx)("span", {
                                                                className: "text-primary-white rubik text-xs",
                                                                children: r("usernameNotSetLabel")
                                                            })
                                                        })
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    className: "mt-2 flex-col items-center lg:flex lg:flex-row",
                                                    children: [(0, s.jsx)("h4", {
                                                        className: "mr-2 text-sm font-light text-white break-words",
                                                        children: "".concat(e.address)
                                                    }), (0, s.jsx)("button", {
                                                        className: "inline-flex h-7 w-7 items-center justify-center rounded-full border border-white",
                                                        onClick: function() {
                                                            at.Am.dismiss(), (0, at.Am)(r("copiedToClipboardLabel"), {
                                                                position: "bottom-center",
                                                                className: "text-sm font-semibold",
                                                                style: {
                                                                    backgroundColor: "#0405fe",
                                                                    color: "#fff"
                                                                }
                                                            }), navigator.clipboard.writeText(e.address)
                                                        },
                                                        children: (0, s.jsx)(c.Fqs, {
                                                            className: "h-3 w-3 text-white"
                                                        })
                                                    })]
                                                }), e.bio ? (0, s.jsx)("p", {
                                                    className: "mt-5 max-w-2xl text-sm font-light text-white",
                                                    children: W ? e.bio : "".concat(e.bio.substring(0, 80), "...")
                                                }) : (0, s.jsx)("p", {
                                                    className: "mt-5"
                                                }), e.bio && e.bio.length > 80 ? (0, s.jsxs)("button", {
                                                    className: "mt-[8px] mb-[32px] flex items-center gap-2 font-museo text-white",
                                                    onClick: function() {
                                                        Y(!W)
                                                    },
                                                    children: [W ? (0, s.jsx)("span", {
                                                        className: "font-semibold",
                                                        children: r("readLessLabel")
                                                    }) : (0, s.jsx)("span", {
                                                        className: "font-semibold",
                                                        children: r("readMoreLabel")
                                                    }), (0, s.jsx)(d.ZXJ, {
                                                        className: "h-4 w-4 ".concat(W ? "rotate-180" : "")
                                                    })]
                                                }) : (0, s.jsx)(s.Fragment, {}), (0, s.jsx)("div", {
                                                    className: "flex items-center space-x-4 py-6 lg:hidden",
                                                    children: U && (0, s.jsxs)(s.Fragment, {
                                                        children: [(0, s.jsxs)("div", {
                                                            className: "flex items-center space-x-1 text-sm font-light text-white",
                                                            children: [(0, s.jsx)("span", {
                                                                className: "font-semibold",
                                                                children: de
                                                            }), (0, s.jsx)("span", {
                                                                children: r("followersLabel")
                                                            })]
                                                        }), (0, s.jsxs)("div", {
                                                            className: "flex items-center space-x-1 text-sm font-light text-white",
                                                            children: [(0, s.jsx)("span", {
                                                                className: "font-semibold",
                                                                children: fe
                                                            }), (0, s.jsx)("span", {
                                                                children: r("followingLabel")
                                                            })]
                                                        })]
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: "flex items-center justify-start w-full gap-x-[16px]",
                                                    children: e.isOwner ? (0, s.jsx)(u.Z, {
                                                        text: (0, s.jsxs)("div", {
                                                            className: "flex items-center justify-between gap-x-[8px]",
                                                            children: [(0, s.jsx)("span", {
                                                                children: r("settingsLabel")
                                                            }), (0, s.jsx)("img", {
                                                                src: w,
                                                                width: 16,
                                                                height: 16
                                                            })]
                                                        }),
                                                        type: {
                                                            class: "primary",
                                                            hasColoredBg: !0,
                                                            icon: !1
                                                        },
                                                        size: "large",
                                                        initialState: {
                                                            state: "default"
                                                        },
                                                        className: "w-full mt-[16px] lg:w-fit",
                                                        onClick: function() {
                                                            t.push("".concat(e.username ? e.username : e.address, "/settings"))
                                                        }
                                                    }) : (0, s.jsxs)(s.Fragment, {
                                                        children: [(0, s.jsx)(u.Z, {
                                                            text: (0, s.jsxs)("div", {
                                                                className: "flex items-center justify-between gap-x-[8px] gtm-modal-create-trade",
                                                                children: [(0, s.jsx)("span", {
                                                                    children: r("newTradeLabel")
                                                                }), (0, s.jsx)("img", {
                                                                    src: y,
                                                                    width: 16,
                                                                    height: 16
                                                                })]
                                                            }),
                                                            type: {
                                                                class: "primary",
                                                                hasColoredBg: !0,
                                                                icon: !1
                                                            },
                                                            size: "large",
                                                            initialState: {
                                                                state: "default"
                                                            },
                                                            className: "w-full lg:w-fit",
                                                            onClick: function() {
                                                                U ? (ne(!0), O((0, H.eV)("maker")), O((0, H.r$)(!0)), document.body.classList.add("no-scroll")) : O((0, B.Hj)(!0))
                                                            }
                                                        }), he && U && M && e.address.toLowerCase() !== M.toLowerCase() && (0, s.jsx)(s.Fragment, {
                                                            children: (0, s.jsx)(m.J, {
                                                                className: "w-full lg:w-fit",
                                                                children: function() {
                                                                    return (0, s.jsxs)(s.Fragment, {
                                                                        children: [(0, s.jsx)(m.J.Button, {
                                                                            className: "w-full",
                                                                            children: (0, s.jsxs)("span", {
                                                                                className: "flex justify-center items-center align-middle text-white rounded-full border border-white px-[24px] py-[14px]",
                                                                                children: [r("followedLabel"), (0, s.jsx)("img", {
                                                                                    src: we ? v : k,
                                                                                    className: "ml-[8px]",
                                                                                    width: 16,
                                                                                    height: 16
                                                                                })]
                                                                            })
                                                                        }), (0, s.jsx)(f.u, {
                                                                            as: l.Fragment,
                                                                            enter: "transition ease-out duration-200",
                                                                            enterFrom: "opacity-0 translate-y-1",
                                                                            enterTo: "opacity-100 translate-y-0",
                                                                            leave: "transition ease-in duration-150",
                                                                            leaveFrom: "opacity-100 translate-y-0",
                                                                            leaveTo: "opacity-0 translate-y-1",
                                                                            children: (0, s.jsx)(m.J.Panel, {
                                                                                className: "absolute z-10 mt-3 w-[200px] origin-top-right px-0 lg:max-w-3xl",
                                                                                children: function(t) {
                                                                                    var a = t.close;
                                                                                    return (0, s.jsxs)("div", {
                                                                                        className: "rounded-lg bg-white p-3 shadow-light-bg-blue",
                                                                                        children: [(0, s.jsx)("div", {
                                                                                            className: "text-sm text-gray-500",
                                                                                            children: r("traderNotificationsLabel")
                                                                                        }), (0, s.jsxs)("div", {
                                                                                            className: "flex flex-col gap-y-[5px] mt-3",
                                                                                            children: [(0, s.jsxs)("div", {
                                                                                                className: "flex items-center justify-between py-[5px] px-[2px] rounded-[3px] cursor-pointer transition-colors duration-300 hover:bg-gray-100",
                                                                                                onClick: function() {
                                                                                                    Ne(1), a()
                                                                                                },
                                                                                                children: [(0, s.jsx)("div", {
                                                                                                    className: "font-museo text-sm font-semibold ".concat(we ? "text-primary-blue" : "text-primary-dark-blue"),
                                                                                                    children: r("allNewPostLabel")
                                                                                                }), (0, s.jsx)("img", {
                                                                                                    src: we ? N.Z.src : C,
                                                                                                    className: "text-primary-blue",
                                                                                                    width: 16,
                                                                                                    height: 16
                                                                                                })]
                                                                                            }), (0, s.jsxs)("div", {
                                                                                                className: "flex items-center justify-between py-[5px] px-[2px] rounded-[3px] cursor-pointer transition-colors duration-300 hover:bg-gray-100",
                                                                                                onClick: function() {
                                                                                                    Ne(0), a()
                                                                                                },
                                                                                                children: [(0, s.jsx)("div", {
                                                                                                    className: "font-museo text-sm font-semibold ".concat(we ? "text-primary-dark-blue" : "text-primary-blue"),
                                                                                                    children: r("muteLabel")
                                                                                                }), (0, s.jsx)("img", {
                                                                                                    src: we ? j.Z.src : L,
                                                                                                    className: "text-primary-dark-blue",
                                                                                                    width: 16,
                                                                                                    height: 16
                                                                                                })]
                                                                                            }), (0, s.jsx)("hr", {}), (0, s.jsxs)("div", {
                                                                                                className: "flex items-center justify-between py-[5px] px-[2px] rounded-[3px] transition-colors duration-300 cursor-pointer hover:bg-gray-100",
                                                                                                onClick: function() {
                                                                                                    F && (0, o.U3)((0, i.f)("unfollowUser"), {
                                                                                                        userFavourite: e.address
                                                                                                    }, F).then((function() {
                                                                                                        ge(!1)
                                                                                                    })).catch((function(e) {
                                                                                                        (0, Ce.$)(e, O)
                                                                                                    })), a()
                                                                                                },
                                                                                                children: [(0, s.jsx)("div", {
                                                                                                    className: "font-museo text-sm font-semibold text-primary-dark-blue",
                                                                                                    children: r("unfollowLabel")
                                                                                                }), (0, s.jsx)("img", {
                                                                                                    src: E.Z.src,
                                                                                                    className: "text-primary-dark-blue",
                                                                                                    width: 16,
                                                                                                    height: 16
                                                                                                })]
                                                                                            })]
                                                                                        })]
                                                                                    })
                                                                                }
                                                                            })
                                                                        })]
                                                                    })
                                                                }
                                                            })
                                                        }), !he && U && e.address != A.account && (0, s.jsx)(u.Z, {
                                                            text: (0, s.jsxs)("div", {
                                                                className: "flex items-center justify-between gap-x-[8px]",
                                                                children: [(0, s.jsx)("span", {
                                                                    children: r("followLabel")
                                                                }), (0, s.jsx)("img", {
                                                                    src: S.Z.src,
                                                                    width: 16,
                                                                    height: 16
                                                                })]
                                                            }),
                                                            type: {
                                                                class: "primary",
                                                                hasColoredBg: !0,
                                                                icon: !1
                                                            },
                                                            size: "large",
                                                            initialState: {
                                                                state: "default"
                                                            },
                                                            className: "w-full lg:w-fit",
                                                            onClick: function(t) {
                                                                t("loading"),
                                                                    function(e, t) {
                                                                        F && e != A.account && (0, o.jl)((0, i.f)("followUser"), {
                                                                            userFavourite: e
                                                                        }, F).then((function(e) {
                                                                            ge(!0)
                                                                        })).catch((function(e) {
                                                                            (0, Ce.$)(e, O)
                                                                        })).finally((function() {
                                                                            t("default")
                                                                        }))
                                                                    }(e.address, t)
                                                            }
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "hidden lg:flex lg:flex-col lg:justify-between lg:items-end",
                                            children: (0, s.jsx)("div", {
                                                className: "flex items-center space-x-4",
                                                children: U && (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex items-center space-x-1 text-sm font-light text-white",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "font-semibold",
                                                            children: de
                                                        }), (0, s.jsx)("span", {
                                                            children: r("followersLabel")
                                                        })]
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex items-center space-x-1 text-sm font-light text-white",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "font-semibold",
                                                            children: fe
                                                        }), (0, s.jsx)("span", {
                                                            children: r("followingLabel")
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "mx-auto max-w-[1920px] p-[16px] lg:p-[48px]",
                                children: (0, s.jsxs)(x.O.Group, {
                                    selectedIndex: q,
                                    onChange: function(e) {
                                        J(e), e < 2 && ke(!1)
                                    },
                                    children: [(0, s.jsxs)(x.O.List, {
                                        className: "flex items-center space-x-10 overflow-auto",
                                        children: [(0, s.jsx)(x.O, {
                                            className: function(e) {
                                                var t = e.selected;
                                                return h()("flex items-center space-x-3 border-b-2 border-solid font-museo text-lg font-semibold leading-loose focus:outline-none focus:ring-0", t ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500")
                                            },
                                            children: (0, s.jsx)("span", {
                                                className: "whitespace-nowrap",
                                                children: U && e.isOwner ? r("tradesOffersLabel") : r("allPostsLabel")
                                            })
                                        }), (0, s.jsx)(x.O, {
                                            className: function(e) {
                                                var t = e.selected;
                                                return h()("flex items-center space-x-3 border-b-2 border-solid font-museo text-lg font-semibold leading-loose focus:outline-none focus:ring-0", t ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500")
                                            },
                                            children: (0, s.jsx)("span", {
                                                className: "whitespace-nowrap",
                                                children: r("collectedNFTsLabel")
                                            })
                                        }), (0, s.jsx)(x.O, {
                                            className: function(e) {
                                                var t = e.selected;
                                                return h()("flex items-center space-x-3 border-b-2 border-solid font-museo text-lg font-semibold leading-loose focus:outline-none focus:ring-0", t ? "border-primary-blue text-primary-blue" : "border-transparent text-gray-500")
                                            },
                                            children: (0, s.jsx)("span", {
                                                className: "whitespace-nowrap",
                                                children: r("historyLabel")
                                            })
                                        })]
                                    }), (0, s.jsxs)(x.O.Panels, {
                                        children: [(0, s.jsx)(x.O.Panel, {
                                            children: (0, s.jsx)(Re, {
                                                user: e,
                                                jwtToken: F || null,
                                                currentNetworkId: P
                                            })
                                        }), (0, s.jsx)(x.O.Panel, {
                                            children: (0, s.jsx)(st, {
                                                user: e,
                                                headerContainerRef: p
                                            })
                                        }), (0, s.jsx)(x.O.Panel, {
                                            children: (0, s.jsx)(Xe, {
                                                user: e,
                                                onLoadHistory: function() {
                                                    ke(!0)
                                                }
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), z && (0, s.jsx)(Fe.Z, {
                            onOpen: function() {
                                var t;
                                if (!te) return ae ? (O((0, H.Um)(1)), void O((0, H.Bu)((t = e, {
                                    username: t.username ? t.username : "",
                                    address: t.address ? t.address : "",
                                    imageUrl: t.avatarUrl ? t.avatarUrl : "",
                                    isVerified: 0,
                                    isNft: t.isNft ? 1 : 0
                                })))) : void(null !== D && "VIEW_MAKER" !== D || O((0, H.Um)(3)))
                            },
                            onClose: function() {
                                te && re(!1), ae && ne(!1)
                            }
                        }), V && (0, s.jsx)(Ze.Z, {}), K && (0, s.jsx)(Ue.Z, {}), ie && (0, s.jsx)(Oe.Z, {
                            onClose: function() {
                                Q.current && oe(!1), document.body.classList.remove("no-scroll")
                            },
                            onClickOpenTrade: function() {
                                Q.current && oe(!1), U ? (O((0, H.eV)("maker")), O((0, H.r$)(!0)), document.body.classList.add("no-scroll")) : O((0, B.Hj)(!0))
                            },
                            onClickOpenPost: function() {
                                oe(!1), U ? (O((0, _e.pV)(!0)), document.body.classList.add("no-scroll")) : O((0, B.Hj)(!0))
                            }
                        })]
                    })
                }
        },
        71024: function(e, t, r) {
            "use strict";
            var s = r(8014),
                a = r(56168),
                n = r(85429),
                l = r(79327),
                i = r(60077),
                o = r(44737),
                c = r.n(o);
            t.Z = function(e) {
                var t = e.children,
                    r = e.shrink,
                    o = void 0 !== r && r,
                    d = (e.size, e.shrinkOptions),
                    u = e.useOnlyMobile,
                    m = void 0 !== u && u,
                    f = e.onMoreItemEnter,
                    x = e.onMoreItemLeave,
                    p = e.deltaX,
                    h = e.maxItemsViewable,
                    g = e.className,
                    b = (0, a.useRef)(null),
                    w = (0, a.useState)(!1),
                    y = w[0],
                    v = w[1],
                    j = (0, a.useState)(!1),
                    k = j[0],
                    N = j[1],
                    C = h || 3,
                    L = a.Children.toArray(t),
                    E = d && d.maxItems ? d.maxItems : C,
                    S = !0 === o && L.length > E,
                    T = p || 20,
                    I = function(e, t, r) {
                        (0, i.Z)({
                            targets: e,
                            opacity: 0,
                            easing: "easeInOutQuad",
                            duration: null !== t && void 0 !== t ? t : 300,
                            complete: null !== r && void 0 !== r ? r : void 0
                        })
                    },
                    A = function(e, t, r) {
                        (0, i.Z)({
                            targets: e,
                            opacity: 1,
                            easing: "easeInOutQuad",
                            duration: t || 300,
                            complete: r || void 0
                        })
                    },
                    R = function(e) {
                        return Number(e.replace("px", ""))
                    };
                return (0, a.useEffect)((function() {
                    return b.current = (0, l.Z)(), v(!0),
                        function() {
                            b.current = null
                        }
                }), []), (0, s.jsx)(s.Fragment, {
                    children: y && (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(s.Fragment, {
                            children: !1 === o ? (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)("div", {
                                    className: "w-full overflow-x-scroll scrollbar-hide",
                                    children: (0, s.jsx)("div", {
                                        className: "w-full flex items-center",
                                        children: a.Children.map(L, (function(e, t) {
                                            return (0, s.jsx)("div", {
                                                className: "mr-[8px] ".concat(g || ""),
                                                children: e
                                            }, "assets-not-shrinked-".concat(t, "-").concat(b.current))
                                        }))
                                    })
                                })
                            }) : (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)("div", {
                                    className: "w-full relative h-[42px] ".concat(g || ""),
                                    onMouseLeave: function() {
                                        x && S && x(), N(!1), window.innerWidth >= 1024 && !m && function() {
                                            var e = document.getElementById("show-more-desktop-".concat(b.current));
                                            if (e) {
                                                for (var t = 0, r = L.length; t < r;) {
                                                    if (t > 0) {
                                                        var s = document.getElementById("asset-item-".concat(b.current, "-").concat(t));
                                                        s && I(s, 300, (function(e) {
                                                            if ("animatables" in e && void 0 !== e.animatables[0]) {
                                                                var t = e.animatables[0].target;
                                                                t.style.visibility = "hidden";
                                                                var r = t.getAttribute("data-original-value"),
                                                                    s = t.getAttribute("data-is-visible");
                                                                r && (t.style.left = r), s && "true" === s && (t.style.visibility = "visible", A(t, 100))
                                                            }
                                                        }))
                                                    }
                                                    t++
                                                }
                                                setTimeout((function() {
                                                    e.style.visibility = "visible", e.style.opacity = "1"
                                                }), 100)
                                            }
                                        }()
                                    },
                                    children: [a.Children.map(L, (function(e, t) {
                                        return (0, s.jsx)("div", {
                                            className: "absolute ".concat(t >= E ? "opacity-0" : ""),
                                            style: {
                                                left: 0 === t ? "0px" : "".concat(t * T, "px"),
                                                visibility: "".concat(t < E ? "visible" : "hidden")
                                            },
                                            id: "asset-item-".concat(b.current, "-").concat(t),
                                            "data-original-value": "".concat(t * T, "px"),
                                            "data-is-visible": "".concat(t < E),
                                            children: e
                                        }, "assets-shrinked-".concat(t, "-").concat(b.current))
                                    })), S && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("div", {
                                            "data-for": "mobile-tooltip-".concat(b.current),
                                            "data-tip": !0,
                                            className: "flex items-center justify-center absolute rounded-full border-[1px] border-dashed border-primary-gray/40 w-[40px] h-[40px] ".concat(m ? "" : "lg:hidden"),
                                            style: {
                                                left: "".concat(E * T + 30, "px")
                                            },
                                            children: (0, s.jsxs)("span", {
                                                className: "".concat(c().alwaysVisible, " rubik text-xs font-regular text-primary-dark-blue"),
                                                children: ["+", L.length - E]
                                            })
                                        }), (0, s.jsx)(n.Z, {
                                            id: "mobile-tooltip-".concat(b.current),
                                            place: "bottom",
                                            type: "dark",
                                            effect: "float",
                                            backgroundColor: "#01085a",
                                            children: (0, s.jsx)("div", {
                                                className: "flex flex-col items-center justify-center",
                                                children: function(e, t) {
                                                    var r = Array.from(e).splice(t);
                                                    return a.Children.map(r, (function(e, t) {
                                                        var r = e.props.collection;
                                                        return (0, s.jsx)("span", {
                                                            className: "rubik text-xs text-primary-white font-regular",
                                                            children: r.name
                                                        }, "span-additional-collection-asset-".concat(t, "-").concat(b.current))
                                                    }))
                                                }(L, E)
                                            })
                                        }), (0, s.jsx)(s.Fragment, {
                                            children: (0, s.jsx)("div", {
                                                id: "show-more-desktop-".concat(b.current),
                                                className: "hidden items-center justify-center absolute rounded-full border-[1px] border-dashed border-primary-gray/40 w-[40px] h-[40px] ".concat(m ? "" : "lg:flex"),
                                                style: {
                                                    left: "".concat(E * T + 30, "px")
                                                },
                                                onMouseEnter: function(e) {
                                                    f && f(), N(!0), k || function(e) {
                                                        I(e, 300, (function(e) {
                                                            "animatables" in e && void 0 !== e.animatables[0] && (e.animatables[0].target.style.visibility = "hidden")
                                                        }));
                                                        for (var t, r, s, a = 0, n = L.length; a < n;) {
                                                            if (a > 0) {
                                                                var l = document.getElementById("asset-item-".concat(b.current, "-").concat(a));
                                                                l && (l.style.visibility = "visible", A(l), t = 30 * a, r = l, s = void 0, (0, i.Z)({
                                                                    targets: r,
                                                                    left: [R(r.style.left), R(r.style.left) + t],
                                                                    easing: "easeInOutQuad",
                                                                    duration: 300,
                                                                    complete: s || void 0
                                                                }))
                                                            }
                                                            a++
                                                        }
                                                    }(e.target)
                                                },
                                                children: (0, s.jsxs)("span", {
                                                    className: "".concat(c().alwaysVisible, " rubik text-xs font-regular text-primary-dark-blue"),
                                                    children: ["+", L.length - E]
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        81988: function(e) {
            e.exports = {
                rotating: "TagStatus_rotating__ee09s",
                rotate: "TagStatus_rotate__qPcIU"
            }
        },
        76690: function(e) {
            e.exports = {
                list: "ActiveTradeRow_list__fPhzF",
                collectionPlaceholder: "ActiveTradeRow_collectionPlaceholder__IO_r7"
            }
        },
        44737: function(e) {
            e.exports = {
                alwaysVisible: "RowCollections_alwaysVisible__Xbrsq"
            }
        },
        39701: function(e) {
            e.exports = {
                hoverFilterDarkBlue: "ActiveThreads_hoverFilterDarkBlue__kjxvf",
                disabled: "ActiveThreads_disabled__4P_Oo",
                hoverFilterDarkGray: "ActiveThreads_hoverFilterDarkGray__Hb3zg",
                skeleton: "ActiveThreads_skeleton__8lgW_",
                "skeleton-loading": "ActiveThreads_skeleton-loading__bb_1C"
            }
        },
        82926: function(e) {
            e.exports = {
                rotating: "ActiveTradeList_rotating__M1PJZ",
                rotate: "ActiveTradeList_rotate__rAHNr"
            }
        },
        14620: function(e) {
            e.exports = {
                filterHoverDarkBlue: "CollectedNFTs_filterHoverDarkBlue__4XhfR"
            }
        },
        93383: function(e) {
            e.exports = {
                rotating: "History_rotating__ugr_R",
                rotate: "History_rotate__FHCmZ",
                scrollableTrades: "History_scrollableTrades__31G8V"
            }
        }
    },
    function(e) {
        e.O(0, [4885, 5937, 1228, 9846, 5429, 7682, 77, 9596, 4808, 362, 9441, 1859, 5012, 9955, 727, 6894, 9300, 6793, 8542, 3349, 9774, 2888, 179], (function() {
            return t = 8980, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);