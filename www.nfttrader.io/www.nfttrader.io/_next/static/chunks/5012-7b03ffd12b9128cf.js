(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5012], {
        71916: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/bell_blue.1ad933e3.svg",
                height: 16,
                width: 16
            }
        },
        28354: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/follow_user_blue.d4c3d671.svg",
                height: 16,
                width: 16
            }
        },
        5029: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/mute.99136cf5.svg",
                height: 16,
                width: 16
            }
        },
        14879: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/smile_favourites_gray.e7fb8651.svg",
                height: 64,
                width: 64
            }
        },
        52912: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/unfollow_user_dark_blue.2cd57e1b.svg",
                height: 16,
                width: 14
            }
        },
        79299: function(e, t, s) {
            "use strict";
            var n = s(8014),
                r = s(56168),
                l = s(54533),
                a = s(62044);
            t.Z = function(e) {
                var t = e.approveLabel,
                    s = void 0 === t || t,
                    i = (0, a.Z)("common").t,
                    c = (0, r.useRef)(!1),
                    o = (0, r.useState)(0),
                    d = o[0],
                    u = o[1],
                    x = (0, l.C)((function(e) {
                        return e
                    })).trademodal,
                    m = x.assetsCurrentlyApproved,
                    f = x.assetsToApprove,
                    p = 100 / f;
                return (0, r.useEffect)((function() {
                    return c.current = !0,
                        function() {
                            c.current = !1
                        }
                }), []), (0, r.useEffect)((function() {
                    0 == s ? u(85) : (m > 0 && c.current && u(d + p), m === f && c.current && u(100))
                }), [m]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: "flex flex-col items-center w-full",
                        children: [(0, n.jsx)("div", {
                            className: "flex items-center h-[15px] w-full border-primary-white border-[1px] border-solid rounded-[16px] px-[4px]",
                            children: (0, n.jsx)("div", {
                                className: "bg-primary-white h-[8px] rounded-[8px]",
                                style: {
                                    width: "".concat(d, "%")
                                }
                            })
                        }), s && (0, n.jsxs)("div", {
                            className: "mt-[16px] text-primary-white text-lg font-semibold",
                            children: [m, " / ", f, " ", i("approvedLabel")]
                        }), !s && (0, n.jsx)("div", {
                            className: "mt-[16px] text-primary-white text-lg font-semibold w-[296px]"
                        })]
                    })
                })
            }
        },
        45012: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return ks
                }
            });
            var n = s(8014),
                r = s(56168),
                l = s(15532),
                a = s(54533),
                i = s(47257),
                c = s(44889),
                o = s(70164),
                d = s(11304),
                u = s(11852),
                x = s(21558),
                m = s(71732),
                f = s(62044),
                p = function(e) {
                    var t = e.stepDescription,
                        s = e.isClickable,
                        r = void 0 !== s && s,
                        l = e.isCurrent,
                        a = void 0 !== l && l,
                        i = e.isCompleted,
                        c = void 0 !== i && i,
                        o = e.index,
                        d = e.onClick,
                        u = e.className,
                        x = (0, f.Z)("common").t;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("span", {
                            className: "flex justify-between items-center",
                            children: [(0, n.jsx)("span", {
                                className: "".concat(a ? "text-primary-dark-blue" : "", " ").concat(a || c ? "" : "text-primary-gray", " ").concat(c && !a ? "text-primary-blue" : "", " text-xl font-semibold mr-[18px]"),
                                children: "0".concat(o + 1)
                            }), (0, n.jsx)("span", {
                                className: "text-base font-semibold ".concat(a ? "text-primary-dark-blue" : "", " ").concat(r ? "cursor-pointer" : "", " ").concat(c && !a ? "text-primary-blue" : "", " ").concat(a || c ? "" : "text-primary-gray", " ").concat(u || ""),
                                onClick: d,
                                children: t
                            })]
                        }), c && !a && (0, n.jsxs)("span", {
                            className: "flex items-center",
                            children: [(0, n.jsx)("span", {
                                className: "text-xxs text-primary-blue mr-[8px]",
                                children: x("completeLabel")
                            }), (0, n.jsx)("img", {
                                src: m.Z.src,
                                className: "w-[16px] h-[16px]"
                            })]
                        })]
                    })
                },
                h = s(99506),
                g = s.n(h),
                b = function(e) {
                    var t = e.stepperItems,
                        s = (0, f.Z)("common").t,
                        c = (0, a.C)((function(e) {
                            return e
                        })).trademodal,
                        o = (0, a.T)(),
                        d = c.currentStepMenu,
                        m = c.isStepperMenuListOpen,
                        h = c.isDeleteTradeModalOpen,
                        b = function() {
                            o((0, l.tj)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        if (m) {
                            var e = function() {
                                window.innerWidth > 1023 && b()
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [m]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("section", {
                            className: "".concat(g().stepperMenuList, " fixed w-full h-full overflow-y-scroll scrollbar-hide z-10 bg-primary-white px-[16px]"),
                            children: [(0, n.jsxs)("div", {
                                className: "".concat(g().mainContent),
                                children: [(0, n.jsx)("div", {
                                    className: "flex items-center w-full h-[72px]",
                                    children: (0, n.jsx)("div", {
                                        className: "flex items-center justify-center rounded-full bg-primary-blue w-[40px] h-[40px] cursor-pointer hover:bg-primary-dark-blue",
                                        onClick: b,
                                        children: (0, n.jsx)("img", {
                                            src: x.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "w-full mt-[30px]",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-2xl font-semibold text-primary-blue",
                                        children: s("completeStepLabel")
                                    }), (0, n.jsx)("nav", {
                                        className: "mt-[55px]",
                                        children: (0, n.jsx)("ul", {
                                            children: t.map((function(e, t) {
                                                return (0, n.jsx)("li", {
                                                    className: "flex items-center cursor-pointer mb-[32px]",
                                                    children: (0, n.jsx)("div", {
                                                        onClick: function(s) {
                                                            t <= d && d !== t && (! function(e) {
                                                                0 === e ? (o((0, l.Bu)(null)), o((0, l.bW)()), o((0, l.C$)()), o((0, l.MW)(!1)), o((0, l.eF)(7)), o((0, l.y4)(0)), o((0, l.YM)(0)), o((0, l.$J)(0)), o((0, l.P$)(!1)), o((0, l.sP)(!1)), o((0, l.s7)(!1)), o((0, l.JW)(!1)), o((0, l.Dh)(!1)), o((0, l.Wq)()), o((0, l.Dy)())) : 1 === e ? (o((0, l.C$)()), o((0, l.eF)(7)), o((0, l.y4)(0)), o((0, l.YM)(0)), o((0, l.$J)(0)), o((0, l.P$)(!1)), o((0, l.sP)(!1)), o((0, l.s7)(!1)), o((0, l.JW)(!1)), o((0, l.Dh)(!1)), o((0, l.Wq)()), o((0, l.Dy)())) : 2 === e && (o((0, l.eF)(7)), o((0, l.y4)(0)), o((0, l.YM)(0)), o((0, l.$J)(0)), o((0, l.P$)(!1)), o((0, l.KC)()), o((0, l.sP)(!1)), o((0, l.s7)(!1)), o((0, l.JW)(!1)), o((0, l.Dh)(!1)), o((0, l.Wq)()), o((0, l.Dy)()))
                                                            }(t), o((0, l.Um)(t)), e.onClick(s))
                                                        },
                                                        className: "flex justify-between w-full",
                                                        children: (0, n.jsx)(p, {
                                                            index: t,
                                                            stepDescription: e.stepDescription,
                                                            isClickable: t <= d,
                                                            isCurrent: d === t,
                                                            isCompleted: t <= d
                                                        }, t)
                                                    })
                                                }, t)
                                            }))
                                        })
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                children: (0, n.jsx)(u.Z, {
                                    text: s("cancelTradeLabel"),
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
                                        o((0, l.xI)(!0))
                                    }
                                })
                            })]
                        }), h && (0, n.jsx)(i.Z, {
                            modalTitle: s("cancelTradeLabel"),
                            modalDescription: s("This will cancel all your current choices"),
                            action: function() {
                                document.body.classList.remove("no-scroll"), o((0, l.r$)(!1)), o((0, l.jO)()), o((0, l.eV)(null)), o((0, l.vg)(null)), o((0, l.xI)(!1))
                            },
                            actionClose: function() {
                                o((0, l.xI)(!1))
                            },
                            buttonsText: [s("yesCancelItLabel"), s("dismissLabel")],
                            isOpen: !0
                        })]
                    })
                },
                j = s(9495),
                y = function(e) {
                    var t = e.stepperItems,
                        s = (0, a.C)((function(e) {
                            return e
                        })).trademodal,
                        r = (0, a.T)(),
                        i = s.currentStepMenu,
                        c = s.isApproving;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-center mr-[24px]",
                                children: t.map((function(e, t) {
                                    return (0, n.jsx)(j.Z, {
                                        isClickable: t <= i,
                                        isCurrent: i === t,
                                        onClick: function(s) {
                                            c || (! function(e) {
                                                0 === e ? (r((0, l.Bu)(null)), r((0, l.bW)()), r((0, l.C$)()), r((0, l.MW)(!1)), r((0, l.eF)(7)), r((0, l.y4)(0)), r((0, l.YM)(0)), r((0, l.$J)(0)), r((0, l.P$)(!1)), r((0, l.sP)(!1)), r((0, l.s7)(!1)), r((0, l.JW)(!1)), r((0, l.Dh)(!1)), r((0, l.Wq)()), r((0, l.Dy)())) : 1 === e ? (r((0, l.C$)()), r((0, l.eF)(7)), r((0, l.y4)(0)), r((0, l.YM)(0)), r((0, l.$J)(0)), r((0, l.P$)(!1)), r((0, l.sP)(!1)), r((0, l.s7)(!1)), r((0, l.JW)(!1)), r((0, l.Dh)(!1)), r((0, l.Wq)()), r((0, l.Dy)())) : 2 === e && (r((0, l.eF)(7)), r((0, l.y4)(0)), r((0, l.YM)(0)), r((0, l.$J)(0)), r((0, l.P$)(!1)), r((0, l.KC)()), r((0, l.sP)(!1)), r((0, l.s7)(!1)), r((0, l.JW)(!1)), r((0, l.Dh)(!1)), r((0, l.Wq)()), r((0, l.Dy)()))
                                            }(t), r((0, l.Um)(t)), e.onClick(s))
                                        },
                                        className: "".concat(t > 0 ? "mx-[4px]" : "mr-[4px]")
                                    }, t)
                                }))
                            }), (0, n.jsxs)("div", {
                                className: "hidden items-center lg:flex text-primary-white text-base font-semibold",
                                children: [(0, n.jsx)("span", {
                                    className: "text-xl font-semibold mr-[16px]",
                                    children: "0".concat(i + 1)
                                }), " ", (0, n.jsx)("span", {
                                    children: t[i].stepDescription
                                })]
                            })]
                        })
                    })
                },
                v = s(20259),
                w = s.n(v),
                N = s(53904),
                k = s(24789),
                C = s(90197),
                S = s(16058),
                E = s(64380),
                T = s(87863),
                _ = function(e, t) {
                    return e.findIndex((function(e) {
                        return 0 === e.collection.statusVerification
                    })) > -1 || t.findIndex((function(e) {
                        return 0 === e.collection.statusVerification
                    })) > -1
                },
                L = function(e, t) {
                    return e.findIndex((function(e) {
                        return 2 === e.collection.statusVerification
                    })) > -1 || t.findIndex((function(e) {
                        return 2 === e.collection.statusVerification
                    })) > -1
                },
                F = s(34288),
                R = s(59166),
                Z = function(e) {
                    var t = e.stepperItems,
                        s = e.mode,
                        i = void 0 === s ? null : s,
                        x = (0, f.Z)("common").t,
                        m = (0, r.useRef)(!1),
                        p = (0, r.useState)(!1),
                        h = p[0],
                        g = p[1],
                        j = (0, r.useState)(!1),
                        v = j[0],
                        Z = j[1],
                        I = (0, r.useState)(!1),
                        A = I[0],
                        M = I[1],
                        z = (0, a.C)((function(e) {
                            return e
                        })),
                        B = z.trademodal,
                        O = z.waccount,
                        P = (0, a.T)(),
                        U = B.isStepperMenuListOpen,
                        D = B.isDeleteTradeModalOpen,
                        V = B.canProceed,
                        H = B.currentStepMenu,
                        W = B.assetsCurrentlyApproved,
                        K = B.assetsToApprove,
                        Y = B.assetsAttemptsToApprove,
                        $ = B.who,
                        J = B.maker,
                        G = B.taker,
                        Q = (B.mode, B.swapId),
                        q = B.isErrorToCheckReportedAssets,
                        X = B.hasFinishedToCheckReportedAssets,
                        ee = B.existsReportedAsset,
                        te = B.reportedAssetsQueue,
                        se = O.currentNetworkId,
                        ne = O.account,
                        re = (0, k.Ge)().library,
                        le = function() {
                            P((0, l.tj)(!0))
                        },
                        ae = function() {
                            P((0, l._1)(!0))
                        },
                        ie = function() {
                            P((0, l._1)(!1))
                        },
                        ce = function(e, t) {
                            if (se) {
                                var s = new C.h4({
                                    apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                });
                                s.initClient({
                                    web3Provider: re.provider
                                }), s.setNetworkId(se), s.config({
                                    backendURL: "https://api.nfttrader.io"
                                }), s.on("cancelTradeTransactionCreated", (function() {
                                    e("loading")
                                })), s.on("cancelTradeTransactionMined", (function() {
                                    e("default"), document.body.classList.remove("no-scroll"), P((0, l.r$)(!1)), P((0, l.jO)()), P((0, l.eV)(null)), P((0, l.vg)(null))
                                })), s.on("cancelTradeTransactionError", (function() {
                                    e("default")
                                })), s.cancelTrade(t).then((function() {
                                    console.log("cancelSwap performed()")
                                })).catch((function(e) {
                                    console.warn("cancelSwap error:", e)
                                }))
                            }
                        },
                        oe = function(e) {
                            if (!(Y < K) && J && J.assets && G && G.assets && se) {
                                ae();
                                var t = new C.h4({
                                    apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                });
                                t.initClient({
                                    web3Provider: re.provider
                                }), t.setNetworkId(se);
                                var s = t.getSeaportContractsAddresses()[se],
                                    n = [],
                                    r = ("maker" === e ? J : G).assets;
                                P((0, l.YM)(r.filter((function(e) {
                                    return e.isApproved
                                })).length)), P((0, l.P$)(!0)), r.filter((function(e) {
                                    return !1 === e.isApproved
                                })).forEach((function(e) {
                                    if (-1 === n.indexOf(e.collection.address.toLowerCase())) {
                                        n.push(e.collection.address.toLowerCase());
                                        var t = new N.CH(e.collection.address, e.collection.abi, re);
                                        t = t.connect(re.getSigner(ne)), "ERC721" === e.type || "ERC1155" === e.type ? t.setApprovalForAll(s, !0).then((function(t) {
                                            t.wait().then((function(t) {
                                                P((0, l.cP)({
                                                    id: void 0,
                                                    contractAddress: e.collection.address,
                                                    type: e.type,
                                                    approved: !0
                                                }))
                                            })).catch((function(t) {
                                                console.log("[wait tx error]"), console.error(t), P((0, l.cP)({
                                                    id: void 0,
                                                    contractAddress: e.collection.address,
                                                    type: e.type,
                                                    approved: !1
                                                })), ie()
                                            }))
                                        })).catch((function(t) {
                                            console.log("[setApprovalForAll tx error]"), console.error(t), P((0, l.cP)({
                                                id: void 0,
                                                contractAddress: e.collection.address,
                                                type: e.type,
                                                approved: !1
                                            })), ie()
                                        })) : t.approve(s, e.amount).then((function(t) {
                                            t.wait().then((function() {
                                                P((0, l.cP)({
                                                    id: void 0,
                                                    contractAddress: e.collection.address,
                                                    type: e.type,
                                                    approved: !0
                                                }))
                                            })).catch((function(t) {
                                                console.log("[wait tx error]"), console.error(t), P((0, l.cP)({
                                                    id: void 0,
                                                    contractAddress: e.collection.address,
                                                    type: e.type,
                                                    approved: !1
                                                })), ie()
                                            }))
                                        })).catch((function(t) {
                                            console.log("[approve tx error]"), console.error(t), P((0, l.cP)({
                                                id: void 0,
                                                contractAddress: e.collection.address,
                                                type: e.type,
                                                approved: !1
                                            })), ie()
                                        }))
                                    }
                                }))
                            }
                        };
                    return (0, r.useEffect)((function() {
                        return m.current = !0,
                            function() {
                                m.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (!U || D) {
                            var e = function() {
                                window.innerWidth < 1024 && D && le()
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [U, D]), (0, r.useEffect)((function() {
                        3 === H && (W === K ? m.current && Z(!0) : m.current && Z(!1), Y === K && (m.current && g(!1), P((0, l.P$)(!1))))
                    }), [W, H, K, Y]), (0, r.useEffect)((function() {
                        H < 3 && P((0, l.Gu)())
                    }), [H]), (0, r.useEffect)((function() {
                        "string" === typeof Q && Number(Q) >= 0 && m.current && M(!0)
                    }), [Q]), (0, r.useEffect)((function() {
                        if (3 === H && v && J && G) {
                            var e = J.assets.filter((function(e) {
                                return "ERC1155" === e.type || "ERC721" === e.type
                            })).length + G.assets.filter((function(e) {
                                return "ERC1155" === e.type || "ERC721" === e.type
                            })).length;
                            if (te.length === e) {
                                var t = {
                                    networkId: null === se || void 0 === se ? void 0 : se.toString(),
                                    tokens: te
                                };
                                P((0, l.s7)(!0)), (0, F.Tn)((0, R.f)("getNftReported"), t).then((function(e) {
                                    var t = e.data;
                                    P((0, l.Nu)(t))
                                })).catch((function(e) {
                                    console.log(e), P((0, l.sP)(!0))
                                })).finally((function() {
                                    P((0, l.JW)(!0))
                                }))
                            }
                        }
                    }), [te, H, v]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "".concat(w().stepperMenu, " flex justify-between items-center w-full ").concat(5 === H && "INIT_MAKER_FROM_POST" === i ? "" : "h-[72px] lg:h-[88px]", " bg-primary-blue rounded-b-[40px] px-[16px]"),
                            children: H <= 3 ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center justify-center w-[40px] h-[40px] mr-[10px]",
                                        children: ["maker" === $ && (0, n.jsx)("img", {
                                            src: c.Z.src,
                                            className: "cursor-pointer lg:hidden",
                                            onClick: le,
                                            width: 16,
                                            height: 16
                                        }), (0, n.jsx)("img", {
                                            src: d.Z.src,
                                            className: "cursor-pointer ".concat("maker" === $ ? "hidden lg:block" : ""),
                                            onClick: function() {
                                                P((0, l.xI)(!0))
                                            },
                                            width: 26,
                                            height: 26
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex items-center justify-center",
                                        children: ["maker" === $ && t && null === i && (0, n.jsx)(y, {
                                            stepperItems: t
                                        }), "maker" === $ && "VIEW_MAKER" === i || "INIT_MAKER_FROM_POST" === i && (0, n.jsx)("h3", {
                                            className: "text-lg ml-[40px] text-primary-white font-semibold lg:text-xl",
                                            children: x("checkYourAssetsLabel")
                                        }), "taker" === $ && (0, n.jsx)("h3", {
                                            className: "text-lg ml-[40px] text-primary-white font-semibold lg:text-xl",
                                            children: x("doYouAcceptThisTradeLabel")
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex items-center",
                                    children: null === i || "INIT_MAKER_FROM_POST" === i ? (0, n.jsxs)(n.Fragment, {
                                        children: [2 === H && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)(u.Z, {
                                                text: x("buyCryptoLabel"),
                                                initialState: {
                                                    state: "default"
                                                },
                                                type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !1
                                                },
                                                size: "small",
                                                className: "lg:px-8 lg:py-4 mr-[15px] hidden sm:block",
                                                onClick: function() {
                                                    P((0, T.gj)(!0))
                                                }
                                            })
                                        }), H < 3 ? (0, n.jsx)(n.Fragment, {
                                            children: !0 === V ? (0, n.jsx)(u.Z, {
                                                text: x("proceedLabel"),
                                                type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !0
                                                },
                                                size: "small",
                                                onClick: function() {
                                                    P((0, l.Um)(H + 1)), P((0, l.MW)(!1))
                                                },
                                                initialState: {
                                                    state: "default"
                                                },
                                                iconSrc: o.Z.src,
                                                className: "lg:px-8 lg:py-4"
                                            }) : (0, n.jsx)("div", {
                                                children: (0, n.jsx)(u.Z, {
                                                    text: x("proceedLabel"),
                                                    type: {
                                                        class: "primary",
                                                        hasColoredBg: !0,
                                                        icon: !0
                                                    },
                                                    size: "small",
                                                    initialState: {
                                                        state: "disabled"
                                                    },
                                                    iconSrc: o.Z.src,
                                                    className: "lg:px-8 lg:py-4"
                                                })
                                            })
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: v ? (0, n.jsx)(n.Fragment, {
                                                children: X ? (0, n.jsx)("div", {
                                                    children: q ? (0, n.jsx)(u.Z, {
                                                        text: x("errorLabel"),
                                                        type: {
                                                            class: "primary",
                                                            hasColoredBg: !0,
                                                            icon: !1
                                                        },
                                                        size: "small",
                                                        initialState: {
                                                            state: "disabled"
                                                        },
                                                        className: "lg:px-8 lg:py-4"
                                                    }) : (0, n.jsx)(n.Fragment, {
                                                        children: ee ? (0, n.jsx)(u.Z, {
                                                            text: x("tradeDisabledLabel"),
                                                            type: {
                                                                class: "primary",
                                                                hasColoredBg: !0,
                                                                icon: !1
                                                            },
                                                            size: "small",
                                                            initialState: {
                                                                state: "disabled"
                                                            },
                                                            className: "lg:px-8 lg:py-4"
                                                        }) : (0, n.jsx)(u.Z, {
                                                            text: x(null === i ? "confirmLabel" : "acceptDealLabel"),
                                                            type: {
                                                                class: "primary",
                                                                hasColoredBg: !0,
                                                                icon: !1
                                                            },
                                                            size: "small",
                                                            onClick: function(e) {
                                                                if (ie(), (null === J || void 0 === J ? void 0 : J.assets) && (null === G || void 0 === G ? void 0 : G.assets))
                                                                    if (L(J.assets, G.assets)) e("disabled");
                                                                    else {
                                                                        var t = _(J.assets, G.assets);
                                                                        P(t ? (0, l.AW)(!0) : (0, l.Um)(H + 1))
                                                                    }
                                                            },
                                                            initialState: {
                                                                state: "default"
                                                            },
                                                            className: "lg:px-8 lg:py-4"
                                                        })
                                                    })
                                                }) : (0, n.jsx)(u.Z, {
                                                    text: "Checking",
                                                    type: {
                                                        class: "primary",
                                                        hasColoredBg: !0,
                                                        icon: !1
                                                    },
                                                    size: "large",
                                                    initialState: {
                                                        state: "loading"
                                                    },
                                                    className: "lg:px-8 lg:py-4"
                                                })
                                            }) : (0, n.jsx)(n.Fragment, {
                                                children: h ? (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)("div", {
                                                        children: (0, n.jsx)(u.Z, {
                                                            text: (0, n.jsxs)("div", {
                                                                className: "flex items-center justify-center",
                                                                children: [(0, n.jsx)("span", {
                                                                    children: x("approvingLabel")
                                                                }), (0, n.jsx)("img", {
                                                                    src: S.Z.src,
                                                                    className: "".concat(w().rotating, " ml-[9px]"),
                                                                    width: 16,
                                                                    height: 16
                                                                })]
                                                            }),
                                                            type: {
                                                                class: "primary",
                                                                hasColoredBg: !0,
                                                                icon: !1
                                                            },
                                                            size: "small",
                                                            onClick: function() {
                                                                ae()
                                                            },
                                                            initialState: {
                                                                state: "default"
                                                            },
                                                            className: "lg:px-8 lg:py-4"
                                                        })
                                                    })
                                                }) : (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)(u.Z, {
                                                        text: x("approveLabel"),
                                                        type: {
                                                            class: "primary",
                                                            hasColoredBg: !0,
                                                            icon: !1
                                                        },
                                                        size: "small",
                                                        onClick: function() {
                                                            "maker" === $ ? (g(!0), oe("maker")) : "taker" === $ && (g(!0), oe("taker"))
                                                        },
                                                        initialState: {
                                                            state: "default"
                                                        },
                                                        className: "lg:px-8 lg:py-4"
                                                    })
                                                })
                                            })
                                        })]
                                    }) : (0, n.jsx)(n.Fragment, {
                                        children: "VIEW_MAKER" === i && (0, n.jsx)(u.Z, {
                                            text: x("cancelDealLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1
                                            },
                                            size: "small",
                                            onClick: function(e) {
                                                Q && (e("disabled"), ce(e, Q))
                                            },
                                            initialState: {
                                                state: A ? "default" : "disabled"
                                            },
                                            className: "lg:px-8 lg:py-4"
                                        })
                                    })
                                })]
                            }) : (0, n.jsx)(n.Fragment, {
                                children: H >= 4 && (0, n.jsx)(n.Fragment, {
                                    children: "INIT_MAKER_FROM_POST" !== i ? (0, n.jsx)("div", {
                                        className: "w-full flex justify-center",
                                        children: (0, n.jsx)("img", {
                                            src: E.Z.src,
                                            className: "w-[170px] h-[auto] lg:w-[187px]"
                                        })
                                    }) : (0, n.jsx)(n.Fragment, {
                                        children: 4 === H && (0, n.jsx)("div", {
                                            className: "w-full flex justify-center",
                                            children: (0, n.jsx)("img", {
                                                src: E.Z.src,
                                                className: "w-[170px] h-[auto] lg:w-[187px]"
                                            })
                                        })
                                    })
                                })
                            })
                        }), U && t && (0, n.jsx)(b, {
                            stepperItems: t
                        })]
                    })
                },
                I = s(44453),
                A = s.n(I),
                M = s(21124),
                z = s.n(M),
                B = s(78913),
                O = function(e) {
                    var t = e.isOpen,
                        s = void 0 !== t && t,
                        i = (e.actionClose, (0, f.Z)("common").t),
                        c = (0, r.useState)(s)[0],
                        o = (0, a.T)(),
                        d = (0, a.C)((function(e) {
                            return e
                        })).trademodal.who,
                        x = function() {
                            o((0, l.aj)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        c || x()
                    }), [c]), (0, n.jsx)(n.Fragment, {
                        children: c && (0, n.jsx)("div", {
                            className: "".concat(z().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            onClick: function() {
                                o((0, l.aj)(!1))
                            },
                            children: (0, n.jsx)("div", {
                                className: "".concat(z().paymentModal, " fixed flex flex-col bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-full text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                onClick: function(e) {
                                    e.stopPropagation()
                                },
                                children: (0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-white",
                                    children: [(0, n.jsx)("img", {
                                        src: B.Z.src,
                                        className: "w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] ".concat(z().rotating)
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col gap-y-[8px] justify-center items-center mt-[40px] text-center",
                                        children: [(0, n.jsxs)("h2", {
                                            className: "text-primary-white text-3xl font-semibold",
                                            children: [i("loadingLabel"), " .."]
                                        }), (0, n.jsx)("div", {
                                            className: "".concat("maker" === d ? "mb-[40px]" : ""),
                                            children: "maker" === d ? (0, n.jsx)(n.Fragment, {
                                                children: i("waitConfirmTxMakerLabel")
                                            }) : (0, n.jsx)(n.Fragment, {
                                                children: i("waitConfirmTxLabel")
                                            })
                                        }), "taker" === d && (0, n.jsx)("div", {
                                            className: "mb-[40px] px-[55px]",
                                            children: (0, n.jsx)("span", {
                                                className: "text-xs text-primary-white font-regular",
                                                children: i("validateTxLabel")
                                            })
                                        }), (0, n.jsx)(u.Z, {
                                            text: i("dismissLabel"),
                                            type: {
                                                class: "secondary",
                                                hasColoredBg: !0,
                                                icon: !1
                                            },
                                            size: "large",
                                            onClick: function() {
                                                x()
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "w-full lg:w-[123px]"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                P = s(39496),
                U = s(93442),
                D = s(91936),
                V = s(40385),
                H = s.n(V),
                W = s(3152),
                K = s(68182),
                Y = s(83660),
                $ = s(22496),
                J = s(39542),
                G = s.n(J),
                Q = function(e) {
                    var t = e.className,
                        s = void 0 === t ? "" : t,
                        r = e.children;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "".concat(G().bubbleMessage, " ").concat(s, " pt-[20px] pl-[16px] pr-[20px] pb-[8] shadow-md rounded-[16px] bg-primary-white absolute"),
                            children: (0, n.jsx)("div", {
                                className: "h-[80%] overflow-y-scroll scrollbar-hide pr-[20px]",
                                children: (0, n.jsx)("div", {
                                    className: "rubik text-xs font-light",
                                    children: r
                                })
                            })
                        })
                    })
                },
                q = s(91335),
                X = s(41050),
                ee = "/_next/static/media/smile.3f2ef185.png",
                te = s(46834);

            function se(e, t, s, n, r, l, a) {
                try {
                    var i = e[l](a),
                        c = i.value
                } catch (o) {
                    return void s(o)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function ne(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(n, r) {
                        var l = e.apply(t, s);

                        function a(e) {
                            se(l, n, r, a, i, "next", e)
                        }

                        function i(e) {
                            se(l, n, r, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var re = function(e) {
                    var t = e.isCurrent,
                        s = (0, f.Z)("common").t,
                        i = (0, r.useRef)(!1),
                        c = (0, r.useState)(),
                        o = c[0],
                        d = c[1],
                        x = (0, r.useState)(),
                        m = (x[0], x[1]),
                        p = (0, r.useState)([]),
                        h = p[0],
                        g = p[1],
                        b = (0, r.useState)("calculating"),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(!1),
                        w = v[0],
                        E = v[1],
                        T = (0, r.useState)(null),
                        _ = T[0],
                        L = T[1],
                        F = (0, r.useState)(),
                        R = F[0],
                        Z = F[1],
                        I = (0, r.useState)(),
                        M = I[0],
                        z = I[1],
                        B = (0, r.useState)(!1),
                        V = B[0],
                        J = B[1],
                        G = (0, r.useState)(!1),
                        se = G[0],
                        re = G[1],
                        le = (0, r.useState)(!1),
                        ae = le[0],
                        ie = (le[1], (0, r.useState)("")),
                        ce = ie[0],
                        oe = (ie[1], (0, r.useState)("")),
                        de = oe[0],
                        ue = oe[1],
                        xe = (0, a.T)(),
                        me = (0, a.C)((function(e) {
                            return e
                        })),
                        fe = me.trademodal,
                        pe = me.waccount,
                        he = fe.isPaymentModalOpen,
                        ge = fe.currentStepMenu,
                        be = fe.who,
                        je = fe.maker,
                        ye = fe.taker,
                        ve = fe.dayDuration,
                        we = fe.swapId,
                        Ne = fe.postId,
                        ke = fe.replyId,
                        Ce = pe.currentNetworkId,
                        Se = (0, k.Ge)().library,
                        Ee = function(e) {
                            if (!e.find((function(e) {
                                    return "ERC721" === e.type || "ERC1155" === e.type
                                }))) return !1;
                            var t = !1,
                                s = !1;
                            if (e.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })).forEach((function(e) {
                                    "ERC1155" === e.type ? s = !0 : "ERC721" === e.type && (t = !0)
                                })), s && t) return !1;
                            var n = [];
                            return e.filter((function(e) {
                                return "ERC1155" === e.type || "ERC721" === e.type
                            })).forEach((function(e) {
                                -1 === n.indexOf(e.collection.address.toLowerCase()) && n.push(e.collection.address.toLowerCase())
                            })), 1 === n.length
                        },
                        Te = function() {
                            if (Se && Ce && _) {
                                i.current && (ue("loading"), z(!0));
                                var e = new C.h4({
                                    apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                });
                                e.initClient({
                                    web3Provider: Se.provider
                                }), e.setNetworkId(Ce);
                                var t = function() {
                                    if (ye && ye.collector && ye.assets && je && je.assets && je.collector) {
                                        var e = ve,
                                            t = ye.collector.address,
                                            s = je.collector.address,
                                            n = new C.Rw,
                                            r = {},
                                            l = {};
                                        je.assets.filter((function(e) {
                                            return "NATIVE" !== e.type
                                        })).forEach((function(e) {
                                            "ERC721" === e.type ? e.collection.address.toLowerCase() in r ? r[e.collection.address.toLowerCase()].push(e.id) : r[e.collection.address.toLowerCase()] = [e.id] : "ERC1155" === e.type ? e.collection.address.toLowerCase() in l ? (l[e.collection.address.toLowerCase()].tokenAmounts.push(e.amount), l[e.collection.address.toLowerCase()].tokenIds.push(e.id)) : l[e.collection.address.toLowerCase()] = {
                                                tokenAmounts: [e.amount],
                                                tokenIds: [e.id]
                                            } : "ERC20" === e.type && n.addERC20Asset(e.collection.address.toLowerCase(), e.amount)
                                        })), Object.keys(r).forEach((function(e) {
                                            r[e].forEach((function(t) {
                                                n.addERC721Asset(e, t)
                                            }))
                                        })), Object.keys(l).forEach((function(e) {
                                            l[e].tokenIds.forEach((function(t, s) {
                                                n.addERC1155Asset(e, t, l[e].tokenAmounts[s])
                                            }))
                                        }));
                                        var a = new C.Rw,
                                            i = "0",
                                            c = ye.assets.find((function(e) {
                                                return "NATIVE" === e.type
                                            }));
                                        c && (i = c.amount ? c.amount : "0");
                                        var o = {},
                                            d = {};
                                        return ye.assets.filter((function(e) {
                                            return "NATIVE" !== e.type
                                        })).forEach((function(e) {
                                            "ERC721" === e.type ? e.collection.address.toLowerCase() in o ? o[e.collection.address.toLowerCase()].push(e.id) : o[e.collection.address.toLowerCase()] = [e.id] : "ERC1155" === e.type ? e.collection.address.toLowerCase() in d ? (d[e.collection.address.toLowerCase()].tokenAmounts.push(e.amount), d[e.collection.address.toLowerCase()].tokenIds.push(e.id)) : d[e.collection.address.toLowerCase()] = {
                                                tokenAmounts: [e.amount],
                                                tokenIds: [e.id]
                                            } : "ERC20" === e.type && a.addERC20Asset(e.collection.address.toLowerCase(), e.amount, s)
                                        })), U.O$.from(i).isZero() || a.addNativeAsset(i, s), Object.keys(o).forEach((function(e) {
                                            o[e].forEach((function(t) {
                                                a.addERC721Asset(e, t, s)
                                            }))
                                        })), Object.keys(d).forEach((function(e) {
                                            d[e].tokenIds.forEach((function(t, n) {
                                                a.addERC1155Asset(e, t, d[e].tokenAmounts[n], s)
                                            }))
                                        })), {
                                            maker: {
                                                assets: n.toArray(),
                                                address: s
                                            },
                                            taker: {
                                                assets: a.toArray(),
                                                address: t
                                            },
                                            end: e
                                        }
                                    }
                                    return null
                                }();
                                if (!t) return;
                                var s = t.maker,
                                    n = t.taker,
                                    r = t.end;
                                xe((0, l.aj)(!0)), e.config({
                                    backendURL: "https://api.nfttrader.io"
                                }), e.createTrade(s, n, r, "", JSON.parse(JSON.stringify(_)), Ne && ke ? {
                                    postId: Ne,
                                    replyId: ke
                                } : void 0).then((function() {
                                    console.log("createSwap performed()"), xe((0, l.Um)(ge + 1)), i.current && ue("")
                                })).catch((function(e) {
                                    console.warn("createSwap() error:", e), i.current && (z(!1), ue("")), xe((0, l.aj)(!1))
                                }))
                            }
                        },
                        _e = function() {
                            var e = ne(A().mark((function e(t) {
                                var n, r, l, a, i, c, o, u, x, f, p, h, g, b;
                                return A().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!Se || !Ce) {
                                                e.next = 15;
                                                break
                                            }
                                            return (n = new C.h4({
                                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                            })).initClient({
                                                web3Provider: Se.provider
                                            }), n.setNetworkId(Ce), n.config({
                                                backendURL: "https://api.nfttrader.io"
                                            }), e.prev = 5, e.next = 8, n.getTradeOrder(Ce, t);
                                        case 8:
                                            (r = e.sent) && (l = r.master[0].flatFeeTakerNative, a = r.master[0].percentageFeeTakerNative, l > 0 || a > 0 ? (i = r.master[0].percentageFeeTaker, c = new q.Z(i), o = new q.Z(r.master[0].valueTaker), u = o.gt(0) ? c.div(r.master[0].valueTaker).times(100) : new q.Z(0), m(r.master[0].flatFeeTaker), d("".concat(l > 0 ? "".concat(l, " ").concat((0, W.dW)(Ce)).concat(u.gt(0) ? " + " : "") : "").concat(u.gt(0) ? "".concat(u.toString(), "%") : "")), x = l > 0 ? new X.Z(l) : new X.Z(a), Z("".concat(x.toString(10), " ").concat((0, W.dW)(Ce)))) : (f = r.detail, (p = f.find((function(e) {
                                                return "ERC20" === e.type
                                            }))) ? (h = new q.Z(p.blcPercentageNative), g = new q.Z(p.blcNative), b = new X.Z(p.blcPercentageNative), h = h.div(g).times(100), d("".concat(h.toString(), "%")), Z("".concat(b.toString(10), " ").concat(p.symbol))) : (d(s("freeLabel")), Z(s("freeLabel"))))), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5), console.warn("error during the calculation of the platform fee:", e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 12]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Le = function() {
                            var e = ne(A().mark((function e(t, s, n, r) {
                                var l, a, c, o, d, u, x, m, f, p, h, b, j, v, w, k, C, S, E, T;
                                return A().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (l = new N.CH(s, t, Se), a = n.collection.address.toLowerCase(), c = n.id, !a || !c) {
                                                e.next = 71;
                                                break
                                            }
                                            o = r.assets.filter((function(e) {
                                                return "ERC20" === e.type || "NATIVE" === e.type
                                            })), d = [], u = [], x = !0, m = !1, f = !0, p = !1, h = void 0, e.prev = 10, b = o[Symbol.iterator]();
                                        case 12:
                                            if (f = (j = b.next()).done) {
                                                e.next = 56;
                                                break
                                            }
                                            if (!(v = j.value).amount) {
                                                e.next = 53;
                                                break
                                            }
                                            return e.prev = 15, e.next = 18, l.getRoyaltyView(a, c, v.amount);
                                        case 18:
                                            if (w = e.sent, k = w.amounts, !((C = w.recipients).length > 0 && k.length > 0)) {
                                                e.next = 45;
                                                break
                                            }
                                            if (m = !0, k.forEach((function(e, t) {
                                                    if (S = 0 === t ? e : S.add(e), x) {
                                                        var s = new q.Z(e.toString());
                                                        u.push({
                                                            recipient: C[t],
                                                            basisPoints: s.div(v.amount).times(1e4).toNumber()
                                                        })
                                                    }
                                                })), x = !1, "NATIVE" !== v.type) {
                                                e.next = 30;
                                                break
                                            }
                                            d.push({
                                                amount: D.formatUnits(S ? S.toString() : "0", (0, K.z)("ETHEREUM_DECIMALS_NUMBER")),
                                                currency: v.collection.symbol ? v.collection.symbol : "",
                                                visible: !0
                                            }), e.next = 43;
                                            break;
                                        case 30:
                                            return E = new N.CH(v.collection.address, v.collection.abi, Se), e.prev = 31, e.next = 34, E.decimals();
                                        case 34:
                                            T = e.sent, d.push({
                                                amount: D.formatUnits(S ? S.toString() : "0", T),
                                                currency: v.collection.symbol ? v.collection.symbol : "",
                                                visible: !0
                                            }), e.next = 43;
                                            break;
                                        case 38:
                                            e.prev = 38, e.t0 = e.catch(31), console.error(e.t0), d.push({
                                                amount: "",
                                                currency: "",
                                                visible: !1
                                            }), m = !1;
                                        case 43:
                                            e.next = 46;
                                            break;
                                        case 45:
                                            m = !1;
                                        case 46:
                                            e.next = 53;
                                            break;
                                        case 48:
                                            e.prev = 48, e.t1 = e.catch(15), console.error(e.t1), d.push({
                                                amount: "",
                                                currency: "",
                                                visible: !1
                                            }), m = !1;
                                        case 53:
                                            f = !0, e.next = 12;
                                            break;
                                        case 56:
                                            e.next = 62;
                                            break;
                                        case 58:
                                            e.prev = 58, e.t2 = e.catch(10), p = !0, h = e.t2;
                                        case 62:
                                            e.prev = 62, e.prev = 63, f || null == b.return || b.return();
                                        case 65:
                                            if (e.prev = 65, !p) {
                                                e.next = 68;
                                                break
                                            }
                                            throw h;
                                        case 68:
                                            return e.finish(65);
                                        case 69:
                                            return e.finish(62);
                                        case 70:
                                            i.current && (g(d), L(u), y(m));
                                        case 71:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [10, 58, 62, 70],
                                    [15, 48],
                                    [31, 38],
                                    [63, , 65, 69]
                                ])
                            })));
                            return function(t, s, n, r) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.useEffect)((function() {
                        return i.current = !0,
                            function() {
                                i.current = !1
                            }
                    })), (0, r.useEffect)((function() {
                        Ce && be && je && je.assets && ye && ye.assets && "string" === typeof we && Number(we) >= 0 && "taker" === be && _e(we).then((function() {}))
                    }), []), (0, r.useEffect)((function() {
                        if (be && je && je.assets && ye && ye.assets && Ce) {
                            var e = new C.h4({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            });
                            e.initClient({
                                web3Provider: Se.provider
                            }), e.setNetworkId(Ce), e.config({
                                backendURL: "https://api.nfttrader.io"
                            });
                            var t = e.getRoyaltyRegistriesEngines(),
                                s = e.getRoyaltyRegistryEngineABI(),
                                n = t[Ce];
                            if ("maker" === be) {
                                if (-1 === je.assets.findIndex((function(e) {
                                        return "NATIVE" === e.type || "ERC20" === e.type
                                    })))
                                    if (Ee(je.assets) && n.length > 0)
                                        if (-1 !== ye.assets.findIndex((function(e) {
                                                return "NATIVE" === e.type || "ERC20" === e.type
                                            })) && -1 === ye.assets.findIndex((function(e) {
                                                return "ERC721" === e.type || "ERC1155" === e.type
                                            }))) {
                                            var r = je.assets.find((function(e) {
                                                return "ERC721" === e.type || "ERC1155" === e.type
                                            }));
                                            if (!r) return void(i.current && y(!1));
                                            Le(s, n, r, ye).then((function() {
                                                console.log("royalties calculated()")
                                            })).catch((function(e) {
                                                console.warn("error while calculating royalties:", e)
                                            }))
                                        } else i.current && (y(!1), L([]));
                                else i.current && (y(!1), L([]))
                            } else if (-1 !== ye.assets.findIndex((function(e) {
                                    return "ERC721" === e.type || "ERC1155" === e.type
                                }))) i.current && y(!1);
                            else if (Ee(je.assets) && n.length > 0) {
                                var l = je.assets.find((function(e) {
                                    return "ERC721" === e.type || "ERC1155" === e.type
                                }));
                                l && Le(s, n, l, ye).then((function() {
                                    console.log("royalties calculated()")
                                })).catch((function(e) {
                                    console.warn("error while calculating royalties:", e)
                                }))
                            } else i.current && y(!1)
                        }
                    }), []), (0, n.jsx)(P.Z, {
                        isCurrent: t,
                        children: (0, n.jsxs)("section", {
                            className: "mt-[32px] lg:mt-[16px]",
                            children: [(0, n.jsx)("div", {
                                className: "text-center",
                                children: (0, n.jsx)("h3", {
                                    className: "text-primary-blue text-2xl font-semibold",
                                    children: s("proceedWithPaymentLabel")
                                })
                            }), (0, n.jsx)("div", {
                                className: "mt-[40px] text-center",
                                children: (0, n.jsx)("h4", {
                                    className: "text-primary-dark-blue font-semibold text-xl",
                                    children: s("transactionCalculationLabel")
                                })
                            }), (0, n.jsx)("div", {
                                className: "mt-[32px] flex justify-center",
                                children: (0, n.jsxs)("div", {
                                    className: "w-[343px] flex flex-col justify-center items-center md:w-[464px]",
                                    children: ["maker" === be && (0, n.jsxs)("div", {
                                        className: "w-[95%] flex justify-between",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-primary-dark-blue text-sm font-semibold",
                                            children: s("estimatedGasPriceLabel")
                                        }), (0, n.jsx)("span", {
                                            className: "text-primary-dark-blue text-base font-semibold text-right",
                                            children: s("freeLabel")
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "w-[95%] flex justify-between mt-[16px] relative",
                                        children: [(0, n.jsxs)("span", {
                                            className: "flex justify-between items-center text-primary-dark-blue text-sm font-semibold",
                                            children: [(0, n.jsx)("span", {
                                                className: "mr-[4px]",
                                                children: s("platformFeeLabel")
                                            }), (0, n.jsx)("img", {
                                                src: $.Z.src,
                                                className: "w-[16px] h-[16px] cursor-pointer",
                                                onClick: function() {
                                                    J(!V)
                                                }
                                            }), V && (0, n.jsx)(Q, {
                                                className: "w-[296px] h-[90px] bottom-[45px] right-[60px]",
                                                children: s("platformFeeDescriptionLabel")
                                            })]
                                        }), "maker" === be ? (0, n.jsx)("span", {
                                            className: "text-primary-dark-blue text-base font-semibold text-right",
                                            children: s("freeLabel")
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: o ? (0, n.jsx)("span", {
                                                className: "text-primary-dark-blue text-base font-semibold text-right",
                                                children: o
                                            }) : (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("img", {
                                                    src: S.Z.src,
                                                    className: "w-[12px] h-[auto] ".concat(H().rotating)
                                                })
                                            })
                                        })]
                                    }), j && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsxs)("div", {
                                            className: "w-[95%] mt-[16px]",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center gap-x-[15px] p-[5px] rounded-[4px] bg-primary-gray/10",
                                                children: [(0, n.jsx)("img", {
                                                    src: ee,
                                                    className: "h-[25px] w-[25px]"
                                                }), (0, n.jsx)("p", {
                                                    className: "flex flex-col",
                                                    children: (0, n.jsx)("span", {
                                                        className: "text-xs font-semibold text-primary-dark-blue",
                                                        children: s("barterCreatorFeeLabel")
                                                    })
                                                })]
                                            }), (0, n.jsx)("p", {
                                                className: "text-xxs font-regular text-primary-blue p-[5px]",
                                                children: (0, n.jsx)(te.Z, {
                                                    i18nKey: "common:howWeCategorizeBarterLabel",
                                                    components: [(0, n.jsx)("a", {
                                                        href: "https://discord.com/channels/712389494812442634/1068526208356204564",
                                                        target: "_blank",
                                                        className: "font-semibold underline"
                                                    })]
                                                })
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "w-[95%] flex justify-between mt-[16px]",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex gap-x-[4px] relative",
                                                children: [(0, n.jsx)("span", {
                                                    className: "text-primary-dark-blue text-sm font-semibold",
                                                    children: s("royaltiesLabel")
                                                }), (0, n.jsx)("img", {
                                                    src: $.Z.src,
                                                    className: "w-[16px] h-[16px] cursor-pointer",
                                                    onClick: function() {
                                                        re(!se)
                                                    }
                                                }), se && (0, n.jsx)(Q, {
                                                    className: "w-[296px] h-[70px] bottom-[45px] left-[63px]",
                                                    children: s("platformRoyaltiesDescriptionLabel")
                                                })]
                                            }), h.length > 0 ? (0, n.jsxs)("span", {
                                                className: "flex justify-between items-center text-primary-blue text-sm font-semibold select-none cursor-pointer hover:underline",
                                                onClick: function() {
                                                    E(!w)
                                                },
                                                children: [(0, n.jsx)("span", {
                                                    className: "mr-[4px]",
                                                    children: w ? "Hide" : "Show"
                                                }), (0, n.jsx)("img", {
                                                    src: Y.Z.src,
                                                    className: "w-auto h-[5px]"
                                                })]
                                            }) : (0, n.jsx)("img", {
                                                src: S.Z.src,
                                                className: "w-[12px] h-[auto] ".concat(H().rotating)
                                            })]
                                        }), (0, n.jsx)(n.Fragment, {
                                            children: w && (0, n.jsx)(n.Fragment, {
                                                children: h.map((function(e, t) {
                                                    return (0, n.jsx)(r.Fragment, {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "w-[95%] flex items-center justify-between mt-[16px] px-[5px] py-[5px] rounded-[4px] bg-gray-200",
                                                            children: [(0, n.jsx)("span", {
                                                                className: "text-primary-dark-blue text-xs font-semibold hover:underline",
                                                                children: (0, n.jsx)("a", {
                                                                    href: "https://royaltyregistry.xyz/lookup",
                                                                    target: "_blank",
                                                                    children: s("royaltiesLabel")
                                                                })
                                                            }), (0, n.jsxs)("span", {
                                                                className: "text-sm font-semibold",
                                                                children: [e.amount, " ", e.currency]
                                                            })]
                                                        })
                                                    }, "royalty-".concat(t))
                                                }))
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[32px] w-full h-[1px] bg-[#D5D8DE] lg:mt-[28px]"
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-between items-center mt-[34px] w-[95%] lg:mt-[30px]",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-primary-dark-blue text-base font-semibold",
                                            children: s("maker" === be ? "totalYouWillPayLabel" : "totalPlatformChargeLabel")
                                        }), "maker" === be ? (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("span", {
                                                className: "text-primary-dark-blue font-semibold text-lg lg:text-xl",
                                                children: s("freeLabel")
                                            })
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: R ? (0, n.jsxs)("span", {
                                                className: "text-primary-dark-blue font-semibold ".concat(R.length > 6 ? "text-base lg:text-base" : "text-lg lg:text-xl"),
                                                children: ["~", R]
                                            }) : (0, n.jsx)("img", {
                                                src: S.Z.src,
                                                className: "w-[16px] h-[auto] ".concat(H().rotating)
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center w-full mt-[64px] mb-[97px]",
                                        children: [ae ? (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                children: (0, n.jsx)("span", {
                                                    className: "text-state-warning text-sm font-semibold",
                                                    children: s("errorLabel")
                                                })
                                            })
                                        }) : (0, n.jsx)(u.Z, {
                                            text: s("maker" === be ? "createTradeLabel" : "proceedWithPaymentLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !1,
                                                icon: !1
                                            },
                                            size: "large",
                                            onClick: function() {
                                                "maker" === be ? Te() : "taker" === be && function() {
                                                    if (Se && Ce && "string" === typeof we && Number(we) >= 0) {
                                                        i.current && (ue("loading"), z(!0));
                                                        var e = new C.h4({
                                                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                                        });
                                                        e.initClient({
                                                            web3Provider: Se.provider
                                                        }), e.setNetworkId(Ce), e.config({
                                                            backendURL: "https://api.nfttrader.io"
                                                        }), e.on("execTradeTransactionError", (function(e) {
                                                            e.error, e.typeError, i.current && (z(!1), ue("")), xe((0, l.aj)(!1))
                                                        })), e.on("execTradeTransactionCreated", (function() {
                                                            xe((0, l.aj)(!0))
                                                        })), e.on("execTradeTransactionMined", (function(e) {
                                                            e.receipt, xe((0, l.Um)(ge + 1)), xe((0, l.aj)(!1)), i.current && ue("")
                                                        })), e.setBlocksNumberConfirmationRequired(3), e.execTrade(we).then((function() {
                                                            console.log("execSwap performed()")
                                                        })).catch((function() {
                                                            console.log("error during execSwap:", ce), xe((0, l.aj)(!1)), i.current && (ue(""), z(!1))
                                                        }))
                                                    }
                                                }()
                                            },
                                            initialState: {
                                                state: "" === de ? "calculating" === j ? "disabled" : "maker" === be ? Array.isArray(_) ? "default" : "disabled" : "default" : de
                                            },
                                            className: "w-full",
                                            id: "maker" === be ? "gtm-create-trade" : "taker" === be ? "gtm-close-trade" : ""
                                        }), (0, n.jsx)(u.Z, {
                                            text: s("maker" === be ? "cancelTradeLabel" : "closeLabel"),
                                            type: {
                                                class: "secondary",
                                                hasColoredBg: !1,
                                                icon: !1
                                            },
                                            size: "large",
                                            onClick: function() {
                                                xe((0, l.xI)(!0))
                                            },
                                            initialState: {
                                                state: M ? "disabled" : "default"
                                            },
                                            className: "w-full mt-[16px]"
                                        })]
                                    })]
                                })
                            }), he && (0, n.jsx)(O, {
                                isOpen: !0,
                                actionClose: function() {}
                            })]
                        })
                    })
                },
                le = s(75575),
                ae = s(74491),
                ie = s(19090),
                ce = s.n(ie),
                oe = s(64334),
                de = s(59370),
                ue = s(55741),
                xe = s(41816),
                me = s(35019),
                fe = function(e) {
                    var t = e.days,
                        s = e.onChange,
                        l = e.editable,
                        a = void 0 === l || l,
                        i = e.pastDate,
                        c = e.expiredDate,
                        o = e.expired,
                        d = void 0 !== o && o,
                        u = e.className,
                        x = e.who,
                        m = (0, f.Z)("common").t,
                        p = (0, r.useRef)(!1),
                        h = (0, r.useState)(!1),
                        g = h[0],
                        b = h[1],
                        j = (0, r.useState)(!0),
                        y = j[0],
                        v = j[1],
                        w = (0, r.useState)(t),
                        N = w[0],
                        k = w[1],
                        C = (0, r.useState)(0),
                        S = C[0],
                        E = C[1],
                        T = (0, r.useState)(new Date),
                        _ = T[0],
                        L = T[1],
                        F = (0, r.useState)(c)[0],
                        R = (0, r.useState)(d)[0],
                        Z = (0, r.useRef)(null),
                        I = function(e) {
                            return "".concat(e.getDate(), "/").concat(e.getMonth() + 1, "/").concat(e.getFullYear())
                        };
                    return (0, r.useEffect)((function() {
                        return p.current = !0,
                            function() {
                                p.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (Z.current) {
                            p.current && v(!1);
                            var e = Z.current;
                            (g ? e.animate([{
                                width: "90%"
                            }], {
                                duration: 300,
                                fill: "forwards"
                            }) : e.animate([{
                                width: "100%"
                            }], {
                                duration: 300,
                                fill: "forwards"
                            })).onfinish = function() {
                                p.current && v(!0)
                            }
                        }
                    }), [g]), (0, r.useEffect)((function() {
                        if (!R) {
                            s && s(N);
                            var e = null;
                            (e = i ? new Date(i) : new Date).setDate(e.getDate() + N), p.current && L(e)
                        }
                    }), [N]), (0, r.useEffect)((function() {
                        if (!R && F) {
                            var e = new Date,
                                t = (0, me.t)(e.toString(), new Date(F).toString()),
                                s = t.weekdays,
                                n = t.days,
                                r = 0;
                            if (s > 0) r = 7 * s;
                            r += n, p.current && E(r)
                        }
                    }), [N]), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col items-center ".concat(u),
                            children: [(0, n.jsx)("div", {
                                className: "".concat("maker" === x ? g ? "cursor-default" : "cursor-pointer" : "cursor-default", " w-full flex justify-center items-center select-none"),
                                onClick: function() {
                                    y && a && !R && b(!g)
                                },
                                children: (0, n.jsx)("div", {
                                    className: "".concat(ce().insideBorder, " px-[24px] py-[12px] rounded-[100px] flex justify-center items-center"),
                                    ref: Z,
                                    style: {
                                        width: "100%"
                                    },
                                    children: g ? (0, n.jsx)("div", {
                                        className: "flex justify-between items-center w-full ".concat(ce().fade),
                                        onClick: function(e) {
                                            e.stopPropagation()
                                        },
                                        children: y && !R ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex justify-between items-center text-primary-blue text-lg font-semibold mr-[24px]",
                                                children: [(0, n.jsx)("img", {
                                                    src: oe.Z.src,
                                                    className: "cursor-pointer",
                                                    onClick: function(e) {
                                                        N > (0, K.z)("MIN_DAY_DURATION_DEAL") && p.current && k(N - 1)
                                                    },
                                                    onMouseEnter: function(e) {
                                                        e.target.src = de.Z.src
                                                    },
                                                    onMouseLeave: function(e) {
                                                        e.target.src = oe.Z.src
                                                    }
                                                }), (0, n.jsx)("div", {
                                                    className: "mx-[16px] w-[100px] text-center ".concat(N > 99 ? "text-xs" : "text-base"),
                                                    children: "".concat(0 === N ? "\u221e" : "".concat(N, " day").concat(1 === N ? "" : "s"))
                                                }), (0, n.jsx)("img", {
                                                    src: ue.Z.src,
                                                    className: "cursor-pointer",
                                                    onClick: function(e) {
                                                        p.current && k(N + 1)
                                                    },
                                                    onMouseEnter: function(e) {
                                                        e.target.src = xe.Z.src
                                                    },
                                                    onMouseLeave: function(e) {
                                                        e.target.src = ue.Z.src
                                                    }
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: "text-primary-blue text-lg font-semibold cursor-pointer hover:underline",
                                                onClick: function() {
                                                    b(!g)
                                                },
                                                children: m("saveLabel")
                                            })]
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "h-[27px]"
                                            })
                                        })
                                    }) : (0, n.jsxs)("div", {
                                        className: "flex justify-center items-center w-full ".concat(ce().fade),
                                        children: [R && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "text-primary-dark-blue text-sm font-semibold mr-[8px]",
                                                children: m("tradeExpiredLabel")
                                            })
                                        }), y && !R ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("div", {
                                                className: "text-primary-dark-blue text-sm font-semibold mr-[8px]",
                                                children: m("tradeWillExpireLabel")
                                            }), (0, n.jsx)("div", {
                                                className: "text-primary-blue text-lg font-semibold ".concat("maker" === x && "hover:underline"),
                                                children: "maker" === x ? "".concat(N, " day").concat(0 === N || N > 1 ? "s" : "") : "".concat(S, " day").concat(0 === S || S > 1 ? "s" : "")
                                            })]
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "h-[27px]"
                                            })
                                        })]
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "flex justify-center items-center mt-[12px]",
                                children: (0, n.jsx)("span", {
                                    className: "rubik text-primary-gray text-xs font-regular",
                                    children: R ? (0, n.jsx)(n.Fragment, {
                                        children: F && (0, n.jsxs)(n.Fragment, {
                                            children: [m("expiredOnLabel"), ":", " ", F && I(new Date(F))]
                                        })
                                    }) : (0, n.jsxs)(n.Fragment, {
                                        children: [m("expiryDateLabel"), ":", " ", "maker" === x ? _ && I(_) : F && I(new Date(F))]
                                    })
                                })
                            })]
                        })
                    })
                },
                pe = s(40182),
                he = s(56522),
                ge = s(6955),
                be = s.n(ge),
                je = function(e) {
                    var t = e.actionButtonText,
                        s = void 0 === t ? "" : t,
                        l = e.textEmptyContainer,
                        a = void 0 === l ? "" : l,
                        i = e.onClick,
                        c = e.disabledCurrency,
                        o = void 0 !== c && c,
                        d = e.textDisabledContainer,
                        u = void 0 === d ? "" : d,
                        x = e.children,
                        m = e.actionHasIcon,
                        p = void 0 === m || m,
                        h = e.hasShowMore,
                        g = void 0 !== h && h,
                        b = e.who,
                        j = void 0 === b ? null : b,
                        y = e.isLeft,
                        v = void 0 === y || y,
                        w = e.className,
                        N = void 0 === w ? "" : w,
                        k = (0, f.Z)("common").t,
                        C = (0, r.useRef)(!1),
                        S = (0, r.useState)(!0),
                        E = S[0],
                        T = S[1],
                        _ = (0, r.useRef)(null),
                        L = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        return C.current = !0,
                            function() {
                                C.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (null != _.current) {
                            var e = new ResizeObserver((function(e) {
                                if (e.length > 0) {
                                    var t, s = e[0];
                                    (t = Array.isArray(s.borderBoxSize) ? s.borderBoxSize[0] : s.borderBoxSize).blockSize > 80 && !0 === E ? C.current && T(!1) : t.blockSize <= 80 && !1 === E && C.current && T(!0)
                                }
                            }));
                            return e.observe(_.current),
                                function() {
                                    _.current && (e.unobserve(_.current), e.disconnect())
                                }
                        }
                    }), [_.current, E]), (0, r.useEffect)((function() {
                        var e = function() {
                            if (L.current) {
                                var e = L.current,
                                    t = e.querySelector("div#badge-content"),
                                    s = e.querySelectorAll("#badge-content > div:first-child > div"),
                                    n = t.offsetWidth,
                                    r = 0,
                                    l = !0,
                                    a = !1,
                                    i = void 0;
                                try {
                                    for (var c, o = s[Symbol.iterator](); !(l = (c = o.next()).done); l = !0) {
                                        r += c.value.offsetWidth + 8 * s.length
                                    }
                                } catch (d) {
                                    a = !0, i = d
                                } finally {
                                    try {
                                        l || null == o.return || o.return()
                                    } finally {
                                        if (a) throw i
                                    }
                                }
                                n > r && C.current && T(!0)
                            }
                        };
                        return window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), []), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "".concat(E ? "rounded-[100px]" : "rounded-[24px]", " ").concat(x ? "py-[13px] px-[22px]" : "p-[22px]", " flex items-center border-[1px] border-gray-200 select-none cursor-default border-solid bg-gray-100 ").concat(N),
                            ref: _,
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col justify-center w-full",
                                ref: L,
                                children: [(0, n.jsxs)("div", {
                                    id: "badge-content",
                                    className: "flex justify-between",
                                    children: [(0, n.jsx)("div", {
                                        className: "flex flex-wrap justify-start items-center ".concat(E ? be().keepHozDistance : be().keepVerDistance + " " + be().keepHozDistance),
                                        children: x || (0, n.jsx)("span", {
                                            className: "".concat(o ? "text-primary-gray" : "text-primary-dark-blue", " rubik text-sm font-regular"),
                                            children: o ? u : a
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-end items-center select-none ".concat(E ? "" : "hidden"),
                                        onClick: function(e) {
                                            o || "maker" !== j && null !== j || i && (!g || x.length <= 2) && i(e)
                                        },
                                        children: [(0, n.jsx)("span", {
                                            className: "".concat(o ? "text-primary-gray cursor-default" : "text-primary-blue cursor-pointer hover:underline hover:text-primary-dark-blue", "  text-sm font-semibold mr-[8px]"),
                                            children: g ? (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: x.length >= 3 ? (0, n.jsx)(n.Fragment, {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex justify-between items-center",
                                                            onClick: function(e) {
                                                                e.stopPropagation();
                                                                var t = !1;
                                                                if (Array.prototype.forEach.call(window.document.getElementsByClassName(v ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.contains("badge-is-shown") && (t = !0)
                                                                    })), t) i && i(e);
                                                                else {
                                                                    var s;
                                                                    Array.prototype.forEach.call(window.document.getElementsByClassName(v ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.remove("hidden"), e.classList.add("badge-is-shown")
                                                                    }));
                                                                    var n = window.document.getElementById("badge-show-more-".concat(v ? "left" : "right"));
                                                                    n && (n.innerHTML = k("editOfferLabel")), null === (s = window.document.getElementById("badge-img-show-more-".concat(v ? "left" : "right"))) || void 0 === s || s.remove()
                                                                }
                                                            },
                                                            children: [(0, n.jsx)("span", {
                                                                id: "badge-show-more-".concat(v ? "left" : "right"),
                                                                className: "hover:underline",
                                                                children: "".concat(x.length - 2, " more item").concat(x.length - 2 > 1 ? "s" : "")
                                                            }), (0, n.jsx)("img", {
                                                                id: "badge-img-show-more-".concat(v ? "left" : "right"),
                                                                src: he.Z.src,
                                                                className: "w-[16px] h-[16px]"
                                                            })]
                                                        })
                                                    }) : (0, n.jsx)(n.Fragment, {
                                                        children: "maker" === j ? k("editOfferLabel") : ""
                                                    })
                                                })
                                            }) : s
                                        }), p && (0, n.jsx)("div", {
                                            className: "".concat(o ? "bg-gray-300 cursor-default" : "bg-primary-blue cursor-pointer hover:bg-primary-dark-blue", " rounded-full flex items-center justify-center w-[24px] h-[24px]"),
                                            children: (0, n.jsx)("img", {
                                                src: pe.Z.src,
                                                width: 8,
                                                height: 8
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-end mt-[26px] mb-[10px] ".concat(E ? "hidden" : "", " "),
                                    children: (0, n.jsxs)("div", {
                                        className: "flex justify-end items-center w-[150px] cursor-pointer select-none",
                                        onClick: function(e) {
                                            "maker" !== j && null !== j || i && (!g || x.length <= 2) && i(e)
                                        },
                                        children: [(0, n.jsx)("span", {
                                            className: "text-primary-blue text-sm font-semibold hover:underline mr-[8px]",
                                            children: g ? (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: x.length >= 3 ? (0, n.jsx)(n.Fragment, {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex justify-between items-center",
                                                            onClick: function(e) {
                                                                e.stopPropagation();
                                                                var t = !1;
                                                                if (Array.prototype.forEach.call(window.document.getElementsByClassName(v ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.contains("badge-is-shown") && (t = !0)
                                                                    })), t) i && i(e);
                                                                else {
                                                                    var s;
                                                                    Array.prototype.forEach.call(window.document.getElementsByClassName(v ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.remove("hidden"), e.classList.add("badge-is-shown")
                                                                    }));
                                                                    var n = window.document.getElementById("badge-show-more-".concat(v ? "left" : "right", "-2"));
                                                                    n && (n.innerHTML = "edit offer"), null === (s = window.document.getElementById("badge-img-show-more-".concat(v ? "left" : "right", "-2"))) || void 0 === s || s.remove()
                                                                }
                                                            },
                                                            children: [(0, n.jsx)("span", {
                                                                id: "badge-show-more-".concat(v ? "left" : "right", "-2"),
                                                                className: "hover:underline",
                                                                children: "".concat(x.length - 2, " more item").concat(x.length - 2 > 1 ? "s" : "")
                                                            }), (0, n.jsx)("img", {
                                                                id: "badge-img-show-more-".concat(v ? "left" : "right", "-2"),
                                                                src: he.Z.src,
                                                                className: "w-[16px] h-[16px]"
                                                            })]
                                                        })
                                                    }) : (0, n.jsx)(n.Fragment, {
                                                        children: "maker" === j ? "edit offer" : ""
                                                    })
                                                })
                                            }) : s
                                        }), p && (0, n.jsx)("div", {
                                            className: "rounded-full bg-primary-blue flex items-center justify-center cursor-pointer w-[24px] h-[24px]",
                                            children: (0, n.jsx)("img", {
                                                src: pe.Z.src,
                                                width: 8,
                                                height: 8
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                ye = s(36893),
                ve = s(26013),
                we = s.n(ve),
                Ne = s(31017),
                ke = "/_next/static/media/check_white.9085fb03.svg",
                Ce = s(13230),
                Se = s(79327),
                Ee = s(85429),
                Te = function(e) {
                    var t, s = e.text,
                        i = e.isDisabled,
                        c = e.isEditable,
                        o = e.isHidden,
                        d = void 0 !== o && o,
                        u = e.isSummary,
                        x = void 0 !== u && u,
                        m = e.isShrinked,
                        f = void 0 !== m && m,
                        p = e.tokenSymbol,
                        h = e.icon,
                        g = e.asset,
                        b = void 0 === g ? null : g,
                        j = e.isNFTsSummary,
                        y = void 0 !== j && j,
                        v = e.checkApprove,
                        w = void 0 !== v && v,
                        S = e.onClick,
                        E = e.className,
                        T = e.showTooltip,
                        _ = void 0 !== T && T,
                        L = (0, Se.Z)(),
                        F = (0, r.useRef)(!1),
                        R = (0, r.useState)(!1),
                        Z = R[0],
                        I = R[1],
                        A = (0, r.useState)(!1),
                        M = A[0],
                        z = A[1],
                        B = (0, r.useState)(w)[0],
                        O = (0, a.T)(),
                        P = (0, a.C)((function(e) {
                            return e
                        })),
                        D = P.waccount,
                        V = P.trademodal,
                        H = D.currentNetworkId,
                        W = D.account,
                        K = V.assetsAttemptsToApprove,
                        Y = V.assetsToApprove,
                        $ = V.isApproving,
                        J = V.who,
                        G = V.maker,
                        Q = V.taker,
                        q = (0, k.Ge)().library;
                    return (0, r.useEffect)((function() {
                        return F.current = !0,
                            function() {
                                F.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (B && H && b && "ERC20" === b.type) {
                            var e = new C.h4({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            });
                            e.initClient({
                                web3Provider: q.provider
                            }), e.setNetworkId(H);
                            var t = e.getSeaportContractsAddresses()[H],
                                s = new N.CH(b.collection.address, b.collection.abi, q);
                            F.current && I(!0), s.allowance(W, t).then((function(e) {
                                var t = U.O$.from(b.amount);
                                F.current && (I(!1), z(e.gte(t))), O((0, l.cP)({
                                    id: void 0,
                                    contractAddress: b.collection.address,
                                    type: b.type,
                                    approved: e.gte(t)
                                }))
                            })).catch((function(e) {
                                console.error(e), F.current && (I(!1), z(!1))
                            }))
                        } else B && H && b && "NATIVE" === b.type && (O((0, l.cP)({
                            id: void 0,
                            contractAddress: b.collection.address,
                            type: b.type,
                            approved: !0
                        })), F.current && z(!0))
                    }), []), (0, r.useEffect)((function() {
                        if (B && G && G.assets && Q && Q.assets && b)("maker" === J ? G : Q).assets.filter((function(e) {
                            return "ERC20" === e.type
                        })).forEach((function(e) {
                            e.collection.address.toLowerCase() === b.collection.address.toLowerCase() && e.isApproved && F.current && (I(!1), z(!0))
                        })), K === Y && Z && F.current && I(!1);
                        else if (B && G && G.assets && Q && Q.assets && y && K === Y) {
                            Z && F.current && I(!1);
                            var e = ("maker" === J ? G : Q).assets,
                                t = e.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })).length;
                            e.filter((function(e) {
                                return ("ERC1155" === e.type || "ERC721" === e.type) && e.isApproved
                            })).length === t && F.current && (I(!1), z(!0))
                        }
                    }), [K]), (0, r.useEffect)((function() {
                        !M && $ && B && F.current ? I(!0) : !$ && B && F.current && I(!1)
                    }), [$]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            title: _ ? void 0 : "".concat(s).concat(p ? " ".concat(p) : ""),
                            className: "".concat(x ? "border-slate-200" : i ? "border-primary-gray" : "border-primary-blue", " ").concat(c ? "hover:shadow hover:shadow-indigo-200" : "", " ").concat(S && !i && "cursor-pointer select-none ".concat(!c && we().clickableBadge), " ").concat(d ? "hidden" : "", " flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max ").concat(E),
                            onClick: S,
                            onMouseEnter: function() {
                                if (S) {
                                    var e = document.getElementById("img-".concat(L));
                                    e && (e.src = Ce.Z.src)
                                }
                            },
                            onMouseLeave: function(e) {
                                if (S) {
                                    var t = document.getElementById("img-".concat(L));
                                    t && (t.src = h)
                                }
                            },
                            "data-for": "".concat(L),
                            "data-tip": !0,
                            children: [(0, n.jsxs)("span", {
                                id: L,
                                className: "".concat(x ? "text-primary-blue" : i ? "text-primary-gray" : "text-primary-blue ".concat(S && "hover:text-primary-dark-blue"), " text-sm font-semibold"),
                                children: [f ? (t = s, t.length > 5 ? t.substring(0, 4) + ".." : t) : s, " ", h && p && (0, n.jsx)("span", {
                                    className: "text-primary-dark-blue",
                                    children: p
                                })]
                            }), !h || b || y ? (0, n.jsx)(n.Fragment, {
                                children: b || y ? (0, n.jsx)(n.Fragment, {
                                    children: Z && !M ? (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                            className: "flex items-center justify-center w-[24px] h-[24px] bg-primary-blue rounded-full relative left-[10px]",
                                            children: (0, n.jsx)("img", {
                                                src: Ne.Z.src,
                                                className: "w-[15px] h-[15px] ".concat(we().rotating)
                                            })
                                        })
                                    }) : (0, n.jsx)(n.Fragment, {
                                        children: M ? (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "flex items-center justify-center w-[24px] h-[24px] bg-primary-blue rounded-full relative left-[10px]",
                                                children: (0, n.jsx)("img", {
                                                    src: ke,
                                                    className: "w-[15px] h-[15px]"
                                                })
                                            })
                                        }) : (0, n.jsx)("img", {
                                            className: "w-[24px] h-[24px] relative left-[10px]",
                                            src: "string" === typeof h ? h : ""
                                        })
                                    })
                                }) : (0, n.jsx)(n.Fragment, {})
                            }) : (0, n.jsx)(n.Fragment, {
                                children: "string" === typeof h ? (0, n.jsx)("img", {
                                    className: "w-[24px] h-[24px] relative left-[10px]",
                                    src: h,
                                    id: "img-".concat(L)
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: h
                                })
                            })]
                        }), _ && b && (0, n.jsxs)(Ee.Z, {
                            id: L,
                            place: "bottom",
                            type: "dark",
                            effect: "float",
                            backgroundColor: "#01085a",
                            children: [b.amountHumanReadable, " ", b.collection.symbol]
                        })]
                    })
                },
                _e = s(56021),
                Le = s(80190),
                Fe = s(61156),
                Re = s.n(Fe),
                Ze = s(37601),
                Ie = s(50425),
                Ae = s(90138),
                Me = s(22537),
                ze = s(57996),
                Be = "/_next/static/media/suspicious.a17fc4e9.svg",
                Oe = s(94047),
                Pe = s.n(Oe),
                Ue = function(e) {
                    e.className;
                    var t = (0, f.Z)("common").t,
                        s = (0, r.useState)(!1),
                        l = s[0],
                        a = s[1];
                    return (0, n.jsxs)("div", {
                        className: "relative",
                        onMouseEnter: function() {
                            a(!0)
                        },
                        onMouseLeave: function() {
                            a(!1)
                        },
                        children: [(0, n.jsx)("div", {
                            className: "flex justify-center items-center w-[40px] h-[40px]",
                            children: (0, n.jsx)("div", {
                                className: "flex justify-center items-center rounded-full w-[28px] h-[28px] bg-state-warning",
                                children: (0, n.jsx)("img", {
                                    src: Be,
                                    width: 16,
                                    height: 16
                                })
                            })
                        }), l && (0, n.jsx)("div", {
                            className: "".concat(Pe().bubble, " absolute bg-state-warning whitespace-nowrap rounded-[5px] flex items-center shadow-sm"),
                            children: (0, n.jsx)("span", {
                                className: "rubik text-xs font-semibold p-[5px] text-primary-white",
                                children: t("suspiciousAssetLabel")
                            })
                        })]
                    })
                },
                De = function(e) {
                    var t = e.NFTSrc,
                        s = e.NFTId,
                        i = e.standard,
                        c = e.collection,
                        o = e.address,
                        d = e.isSelected,
                        u = void 0 !== d && d,
                        x = e.isShrinked,
                        m = void 0 !== x && x,
                        f = e.checkApprove,
                        p = void 0 !== f && f,
                        h = e.checkReported,
                        g = void 0 !== h && h,
                        b = e.isTaker,
                        j = void 0 !== b && b,
                        y = e.isDisabled,
                        v = void 0 !== y && y,
                        w = e.amount,
                        S = e.hasPlaceholder,
                        E = void 0 !== S && S,
                        T = e.className,
                        _ = e.onClick,
                        L = (0, r.useRef)(!1),
                        F = (0, r.useState)(!1),
                        R = F[0],
                        Z = F[1],
                        I = (0, r.useState)(u),
                        A = I[0],
                        M = I[1],
                        z = (0, r.useState)(!1),
                        B = z[0],
                        O = z[1],
                        P = (0, r.useState)(!1),
                        U = P[0],
                        D = P[1],
                        V = (0, r.useState)(w),
                        H = V[0],
                        K = V[1],
                        Y = (0, r.useState)(t),
                        $ = Y[0],
                        J = Y[1],
                        G = (0, r.useState)(E),
                        Q = G[0],
                        q = G[1],
                        X = (0, r.useState)(p)[0],
                        ee = (0, r.useState)(g)[0],
                        te = (0, r.useState)(!1),
                        se = te[0],
                        ne = te[1],
                        re = (0, a.T)(),
                        le = (0, a.C)((function(e) {
                            return e
                        })),
                        ae = le.waccount,
                        ie = le.trademodal,
                        ce = ae.currentNetworkId,
                        oe = ie.assetsAttemptsToApprove,
                        de = ie.assetsToApprove,
                        ue = ie.isApproving,
                        xe = ie.who,
                        me = ie.maker,
                        fe = ie.taker,
                        pe = ie.hasFinishedToCheckReportedAssets,
                        he = ie.reportedAssetsQueueResult,
                        ge = (0, k.Ge)().library,
                        be = (0, ze.g)(ce, c.address, s);
                    return (0, r.useEffect)((function() {
                        return L.current = !0,
                            function() {
                                L.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (X && ce && ge) {
                            var e = new C.h4({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            });
                            e.initClient({
                                web3Provider: ge.provider
                            }), e.setNetworkId(ce);
                            var t = e.getSeaportContractsAddresses()[ce],
                                n = new N.CH(c.address, c.abi, ge);
                            L.current && O(!0), n.isApprovedForAll(o, t).then((function(e) {
                                L.current && (O(!1), D(e)), re((0, l.cP)({
                                    id: s,
                                    contractAddress: c.address,
                                    type: i,
                                    approved: e
                                }))
                            })).catch((function(e) {
                                console.error(e), L.current && (O(!1), D(!1))
                            }))
                        }
                    }), [X]), (0, r.useEffect)((function() {
                        X && me && me.assets && fe && fe.assets && (("maker" === xe ? me : fe).assets.forEach((function(e) {
                            e.type === i && e.collection.address.toLowerCase() === c.address.toLowerCase() && e.id === s && e.isApproved && L.current && (O(!1), D(!0))
                        })), oe === de && B && L.current && O(!1))
                    }), [oe]), (0, r.useEffect)((function() {
                        !U && ue && X ? L.current && O(!0) : !ue && X && L.current && O(!1)
                    }), [ue]), (0, r.useEffect)((function() {
                        ee && ce && re((0, l.Lv)({
                            collection: c.address,
                            tokenId: s
                        }))
                    }), [ee]), (0, r.useEffect)((function() {
                        if (pe) {
                            var e = he.find((function(e) {
                                return e.collection.toLowerCase() === c.address.toLowerCase() && e.tokenId === s
                            }));
                            if (e && L.current) return void ne(e.isCompromised);
                            L.current && ne(!1)
                        }
                    }), [pe]), (0, r.useEffect)((function() {
                        var e, t;
                        A && ((null === me || void 0 === me ? void 0 : me.assets) && (e = me.assets.find((function(e) {
                            return e.collection.address.toLowerCase() === c.address.toLowerCase() && e.id === s
                        }))), (null === fe || void 0 === fe ? void 0 : fe.assets) && (t = fe.assets.find((function(e) {
                            return e.collection.address.toLowerCase() === c.address.toLowerCase() && e.id === s
                        }))), e || t || L.current && M(!1))
                    }), [fe, me]), (0, r.useEffect)((function() {
                        M(u)
                    }), [u]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "".concat(A ? "border-primary-blue" : "border-[transparent]", " ").concat(m || v ? "" : "cursor-pointer", " ").concat(v ? "bg-gray-100" : "bg-primary-white shadow-md hover:shadow-lg", " border-solid border-[1px] transition-shadow duration-300 rounded-[16px] shadow-light-shadow select-none w-[163.5px] h-[224px] p-[12px]\n          flex flex-col items-center ").concat(m ? "lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]" : "lg:w-[208px] lg:h-[284px]", "  lg:p-[16px] ").concat(T),
                            onClick: function(e) {
                                m || v || (_ && _(e, !A), B || U || ("ERC1155" === i ? Z(!0) : M(!A)))
                            },
                            children: [(0, n.jsxs)("div", {
                                className: "group relative w-full h-[140px] ".concat(m ? "lg:h-[152px]" : "lg:h-[176px]"),
                                children: [(0, n.jsx)("div", {
                                    className: "rounded-[8px] overflow-hidden absolute w-full h-full",
                                    children: (0, n.jsx)("div", {
                                        className: "transition-transform group-hover:scale-[1.2] w-full h-full",
                                        style: {
                                            backgroundImage: "url(".concat($, ")"),
                                            backgroundSize: "".concat(Q ? "50% auto" : "cover"),
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center",
                                            backgroundColor: "".concat(Q ? "rgb(243,244,246)" : ""),
                                            border: "".concat(E ? "1px solid #e5e7eb" : "")
                                        }
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "overflow-hidden w-full h-full",
                                    children: (0, n.jsx)("div", {
                                        className: "flex invisible translate-y-5 group-hover:visible group-hover:translate-y-0 transition duration-700 items-end w-full h-full z-50",
                                        children: (0, n.jsx)("div", {
                                            className: "flex w-full bg-gray-300 pb-1 pt-1 rounded-b-[8px]",
                                            children: be.map((function(e, t) {
                                                return (0, n.jsx)("div", {
                                                    className: "pl-1",
                                                    children: (0, n.jsx)("a", {
                                                        href: e.link,
                                                        target: "_blank",
                                                        children: (0, n.jsx)("img", {
                                                            src: e.logo,
                                                            className: "w-[16px]"
                                                        })
                                                    })
                                                }, t)
                                            }))
                                        })
                                    })
                                }), (0, n.jsx)("img", {
                                    className: "hidden",
                                    src: "".concat($),
                                    onError: function() {
                                        J(Me.Z.src), q(!0)
                                    }
                                }), (0, n.jsx)("img", {
                                    className: "absolute top-[8px] left-[8px] w-[24px] h-[24px]",
                                    src: (0, W.l2)(c.networkId),
                                    "data-for": "nft-".concat(s, "-tooltip"),
                                    "data-tip": !0
                                }), (0, n.jsx)(Ee.Z, {
                                    id: "nft-".concat(s, "-tooltip"),
                                    type: "dark",
                                    effect: "solid",
                                    backgroundColor: "#01085a",
                                    children: (0, n.jsx)("span", {
                                        className: "rubik text-xs text-primary-white font-regular capitalize",
                                        children: (0, W.qe)(c.networkId)
                                    })
                                }), A && "ERC721" === i && (0, n.jsx)("div", {
                                    className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                    children: (0, n.jsx)("div", {
                                        className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                                        children: (0, n.jsx)("img", {
                                            src: Le.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }), A && "ERC1155" === i && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                                            children: (0, n.jsx)("img", {
                                                src: Le.Z.src,
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "absolute -bottom-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-blue",
                                            children: (0, n.jsx)("span", {
                                                className: "text-primary-white text-[16px] font-semibold",
                                                children: H
                                            })
                                        })
                                    })]
                                }), m && "ERC1155" === i && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "absolute -bottom-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-blue",
                                            children: (0, n.jsx)("span", {
                                                className: "text-primary-white text-[16px] font-semibold",
                                                children: H
                                            })
                                        })
                                    })
                                }), B && (0, n.jsx)("div", {
                                    className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                    children: (0, n.jsx)("div", {
                                        className: "flex justify-center items-center rounded-full w-[28px] h-[28px] bg-primary-blue",
                                        children: (0, n.jsx)("img", {
                                            src: Ne.Z.src,
                                            className: "".concat(Re().rotating),
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }), U && (0, n.jsx)("div", {
                                    className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                    children: (0, n.jsx)("div", {
                                        className: "flex justify-center items-center rounded-full w-[28px] h-[28px] bg-primary-blue",
                                        children: (0, n.jsx)("img", {
                                            src: ke,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }), se && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "absolute -top-[15px] -left-[15px]",
                                        children: (0, n.jsx)(Ue, {})
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "mt-[8px] text-left w-full",
                                children: (0, n.jsx)("span", {
                                    className: "text-base ".concat(v ? "text-primary-gray" : A ? "text-primary-blue" : "text-primary-dark-blue", " ").concat(m ? "lg:text-sm" : "lg:text-lg", " font-semibold"),
                                    children: (0, n.jsx)(Ie.Z, {
                                        text: "#".concat(s),
                                        className: "h-[28.5px]",
                                        animationSpeed: "20"
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-center items-center mt-[4px] w-full ".concat(m && "lg:mt-[8px]"),
                                children: [(0, n.jsx)(Ze.Z, {
                                    src: c.imageUrl ? c.imageUrl : "",
                                    statusVerification: c.statusVerification,
                                    className: "mr-[10px] w-[30px] h-[30px]",
                                    badgeClassName: "w-[15px] h-[15px]",
                                    showCollectionTooltip: !0,
                                    collection: c
                                }), (0, n.jsx)("div", {
                                    className: "flex-1 h-full",
                                    children: (0, n.jsx)(Ie.Z, {
                                        text: c.name,
                                        className: "h-full text-xxs font-semibold ".concat(v ? "text-primary-gray" : "text-primary-dark-blue", " flex items-center")
                                    })
                                })]
                            })]
                        }), R && (0, n.jsx)(Ae.Z, {
                            NFTSrc: t,
                            NFTId: s,
                            NFTCollection: c,
                            NFTAmount: H,
                            isUpdating: Number(H) > 0,
                            owner: o,
                            isOpen: !0,
                            action: function(e) {
                                K(e), Z(!1), 0 === Number(e) ? (M(!1), re(j ? (0, l.E4)({
                                    id: s,
                                    type: i,
                                    amount: "0",
                                    amountHumanReadable: "0",
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: E
                                }) : (0, l.iB)({
                                    id: s,
                                    type: i,
                                    amount: "0",
                                    amountHumanReadable: "0",
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: E
                                })), re((0, l.Gu)())) : (M(!0), j ? (re((0, l.E4)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: E
                                })), re((0, l.c6)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: E
                                }))) : (re((0, l.iB)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: E
                                })), re((0, l.TG)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: E
                                }))), re((0, l.Gu)()))
                            },
                            actionClose: function() {
                                Z(!1)
                            }
                        })]
                    })
                },
                Ve = s(29113),
                He = s(88867),
                We = s.n(He),
                Ke = s(79299),
                Ye = function(e) {
                    var t = e.isOpen,
                        s = void 0 !== t && t,
                        i = (e.actionClose, (0, f.Z)("common").t),
                        c = (0, r.useState)(s),
                        o = c[0],
                        d = (c[1], (0, a.T)()),
                        x = (0, a.C)((function(e) {
                            return e
                        })).trademodal,
                        m = x.assetsCurrentlyApproved,
                        p = x.assetsToApprove,
                        h = x.currentStepMenu,
                        g = x.taker,
                        b = x.maker,
                        j = x.isErrorToCheckReportedAssets,
                        y = x.hasFinishedToCheckReportedAssets,
                        v = x.existsReportedAsset,
                        w = function() {
                            d((0, l._1)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        o || w()
                    }), [o]), (0, n.jsx)(n.Fragment, {
                        children: o && (0, n.jsx)("div", {
                            className: "".concat(We().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            onClick: function() {
                                d((0, l._1)(!1))
                            },
                            children: (0, n.jsxs)("div", {
                                className: "".concat(We().approvingModal, " fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-full text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px] ").concat(m === p ? "".concat(We().goUpButton) : ""),
                                onClick: function(e) {
                                    e.stopPropagation()
                                },
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-white",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-2xl font-semibold text-primary-white mb-[8px]",
                                        children: i("assetsBeingApprovedLabel")
                                    }), (0, n.jsx)("span", {
                                        className: "rubik text-base font-light",
                                        children: i("pleaseWaitConfirmTxLabel")
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex flex-col items-center justify-center mt-[40px]",
                                    children: (0, n.jsx)(Ke.Z, {})
                                }), m === p && (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center mt-[40px] lg:flex-row-reverse lg:justify-between",
                                    children: [y ? (0, n.jsx)(n.Fragment, {
                                        children: j ? (0, n.jsx)(u.Z, {
                                            text: i("errorLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1
                                            },
                                            size: "small",
                                            initialState: {
                                                state: "disabled"
                                            },
                                            className: "w-full mb-[16px] lg:mb-[0] lg:w-[auto]"
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: v ? (0, n.jsx)(u.Z, {
                                                text: i("tradeDisabledLabel"),
                                                type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !1
                                                },
                                                size: "small",
                                                initialState: {
                                                    state: "disabled"
                                                },
                                                className: "w-full mb-[16px] lg:mb-[0] lg:w-[auto]"
                                            }) : (0, n.jsx)(u.Z, {
                                                text: i("confirmLabel"),
                                                type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !1
                                                },
                                                size: "large",
                                                onClick: function(e) {
                                                    if (w(), (null === b || void 0 === b ? void 0 : b.assets) && (null === g || void 0 === g ? void 0 : g.assets))
                                                        if (L(b.assets, g.assets)) e("disabled");
                                                        else {
                                                            var t = _(b.assets, g.assets);
                                                            d(t ? (0, l.AW)(!0) : (0, l.Um)(h + 1))
                                                        }
                                                },
                                                initialState: {
                                                    state: "default"
                                                },
                                                className: "w-full mb-[16px] lg:mb-[0] lg:w-[auto]"
                                            })
                                        })
                                    }) : (0, n.jsx)(u.Z, {
                                        text: "Checking",
                                        type: {
                                            class: "primary",
                                            hasColoredBg: !0,
                                            icon: !1
                                        },
                                        size: "small",
                                        initialState: {
                                            state: "loading"
                                        },
                                        className: "w-full mb-[16px] lg:mb-[0] lg:w-[auto]"
                                    }), (0, n.jsx)(u.Z, {
                                        text: i("cancelLabel"),
                                        type: {
                                            class: "secondary",
                                            hasColoredBg: !0,
                                            icon: !1
                                        },
                                        size: "large",
                                        onClick: function() {
                                            w()
                                        },
                                        initialState: {
                                            state: "default"
                                        },
                                        className: "w-full lg:w-[auto]"
                                    })]
                                })]
                            })
                        })
                    })
                },
                $e = s(3055),
                Je = s.n($e),
                Ge = s(3710),
                Qe = s(17023),
                qe = s(71004),
                Xe = function(e) {
                    var t = e.isOpen,
                        s = void 0 !== t && t,
                        i = (e.actionClose, (0, f.Z)("common").t),
                        c = (0, r.useState)(s)[0],
                        o = (0, a.T)(),
                        d = (0, a.C)((function(e) {
                            return e
                        })),
                        x = d.trademodal,
                        m = d.waccount,
                        p = x.currentStepMenu,
                        h = x.taker,
                        g = x.maker,
                        b = m.currentNetworkId,
                        j = function() {
                            o((0, l.AW)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        c || j()
                    }), [c]), (0, n.jsx)(n.Fragment, {
                        children: c && (0, n.jsx)("div", {
                            className: "".concat(Je().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            onClick: function() {
                                o((0, l.AW)(!1))
                            },
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Je().unverifiedCollectionModal, " fixed flex flex-col w-full h-full bg-primary-white z-[20000] rounded-t-[32px] py-[40px] px-[16px] overflow-y-scroll scrollbar-hide text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                onClick: function(e) {
                                    e.stopPropagation()
                                },
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-blue",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-2xl font-semibold mb-[8px]",
                                        children: i("takeCautionTitleLabel")
                                    }), (0, n.jsx)("span", {
                                        className: "rubik text-base text-primary-blue font-light",
                                        children: (0, n.jsxs)("span", {
                                            children: [i("takeCautionLabelOne"), " ", (0, n.jsxs)("a", {
                                                className: "hover:underline",
                                                href: "https://docs.nfttrader.io/documentation/collection-verification-process",
                                                target: "_blank",
                                                children: [(0, n.jsx)("span", {
                                                    className: "font-semibold",
                                                    children: i("takeCautionLabelTwo")
                                                }), " (", (0, n.jsx)("img", {
                                                    src: Qe.Z.src,
                                                    className: "inline-block",
                                                    width: 16,
                                                    height: 16
                                                }), ")."]
                                            }), " ", i("takeCautionLabelThree"), " ", (0, n.jsx)("span", {
                                                className: "font-semibold text-primary-blue",
                                                children: i("takeCautionLabelFour")
                                            }), " ", i("takeCautionLabelFive")]
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "w-full flex-none py-[25px] h-[230px] overflow-y-scroll overflow-x-none lg:flex lg:justify-center",
                                    children: (0, n.jsxs)("ul", {
                                        className: "w-[95%]",
                                        children: [g && g.assets && g.assets.filter((function(e) {
                                            return 0 === e.collection.statusVerification
                                        })).map((function(e, t) {
                                            return (0, n.jsxs)("li", {
                                                className: "flex items-center justify-between w-full ".concat(t > 0 ? "my-[15px]" : "mb-[15px]"),
                                                children: [(0, n.jsxs)("div", {
                                                    className: "flex gap-x-[18px]",
                                                    children: [(0, n.jsx)(Ge.Z, {
                                                        src: e.imageSrc ? e.imageSrc : "",
                                                        hasPlaceholder: e.hasPlaceholder,
                                                        className: "w-[64px] h-[64px]",
                                                        type: e.type,
                                                        isClickable: !0,
                                                        tokenId: e.id,
                                                        networkId: e.collection.networkId,
                                                        address: e.collection.address,
                                                        name: "".concat(e.collection.name, " #").concat(e.id),
                                                        amount: "ERC1155" === e.type ? e.amount : void 0
                                                    }), (0, n.jsxs)("div", {
                                                        className: "flex flex-col justify-center items-start",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "w-[200px] h-[30px] text-sm font-semibold text-primary-blue",
                                                            children: (0, n.jsx)(Ie.Z, {
                                                                text: "#".concat(e.id),
                                                                className: "h-full"
                                                            })
                                                        }), (0, n.jsxs)("div", {
                                                            className: "flex justify-start items-center",
                                                            children: [(0, n.jsx)(Ze.Z, {
                                                                src: e.collection.imageUrl ? e.collection.imageUrl : "",
                                                                statusVerification: e.collection.statusVerification,
                                                                className: "w-[24px] h-[24px]",
                                                                badgeClassName: "w-[12px] h-[12px]"
                                                            }), (0, n.jsx)("span", {
                                                                className: "w-[200px] h-[30px] ml-[18px] text-sm font-semibold text-primary-blue relative top-[5px]",
                                                                children: (0, n.jsx)(Ie.Z, {
                                                                    text: e.collection.name,
                                                                    className: "h-full"
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex-none justify-between md:flex",
                                                    children: [(0, n.jsx)("a", {
                                                        href: (0, Ve.w)(b, e.collection.address),
                                                        target: "_blank",
                                                        className: "mr-[11px]",
                                                        children: (0, n.jsx)("img", {
                                                            src: (0, qe.A)(b),
                                                            className: "hover:opacity-60",
                                                            width: 32,
                                                            height: 32
                                                        })
                                                    }), (0, n.jsx)("a", {
                                                        href: (0, ze.g)(b, e.collection.address, e.id ? e.id : null).find((function(e) {
                                                            return "opensea" === e.type || "rarible" === e.type
                                                        })).link,
                                                        target: "_blank",
                                                        children: (0, n.jsx)("img", {
                                                            src: (0, ze.g)(b, e.collection.address, e.id ? e.id : null).find((function(e) {
                                                                return "opensea" === e.type || "rarible" === e.type
                                                            })).logo,
                                                            className: "hover:opacity-60",
                                                            width: 32,
                                                            height: 32
                                                        })
                                                    })]
                                                })]
                                            }, "".concat(e.collection.address, "-").concat(e.id))
                                        })), h && h.assets && h.assets.filter((function(e) {
                                            return 0 === e.collection.statusVerification
                                        })).map((function(e, t) {
                                            return (0, n.jsxs)("li", {
                                                className: "flex items-center justify-between w-full ".concat(t > 0 ? "my-[15px]" : "mb-[15px]"),
                                                children: [(0, n.jsxs)("div", {
                                                    className: "flex gap-x-[18px]",
                                                    children: [(0, n.jsx)(Ge.Z, {
                                                        src: e.imageSrc ? e.imageSrc : "",
                                                        hasPlaceholder: e.hasPlaceholder,
                                                        className: "w-[64px] h-[64px]",
                                                        type: e.type,
                                                        isClickable: !0,
                                                        tokenId: e.id,
                                                        networkId: e.collection.networkId,
                                                        address: e.collection.address,
                                                        name: "".concat(e.collection.name, " #").concat(e.id),
                                                        amount: "ERC1155" === e.type ? e.amount : void 0
                                                    }), (0, n.jsxs)("div", {
                                                        className: "flex flex-col justify-center items-start",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "w-[200px] h-[30px] text-sm font-semibold text-primary-blue",
                                                            children: (0, n.jsx)(Ie.Z, {
                                                                text: "#".concat(e.id),
                                                                className: "h-full"
                                                            })
                                                        }), (0, n.jsxs)("div", {
                                                            className: "flex justify-start items-center",
                                                            children: [(0, n.jsx)(Ze.Z, {
                                                                src: e.collection.imageUrl ? e.collection.imageUrl : "",
                                                                statusVerification: e.collection.statusVerification,
                                                                className: "w-[24px] h-[24px]",
                                                                badgeClassName: "w-[12px] h-[12px]"
                                                            }), (0, n.jsx)("span", {
                                                                className: "w-[200px] h-[30px] ml-[18px] text-sm font-semibold text-primary-blue relative top-[5px]",
                                                                children: (0, n.jsx)(Ie.Z, {
                                                                    text: e.collection.name,
                                                                    className: "h-full"
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex-none justify-between sm:flex",
                                                    children: [(0, n.jsx)("a", {
                                                        href: (0, Ve.w)(b, e.collection.address),
                                                        target: "_blank",
                                                        className: "mr-[11px]",
                                                        children: (0, n.jsx)("img", {
                                                            src: (0, qe.A)(b),
                                                            className: "hover:opacity-60",
                                                            width: 32,
                                                            height: 32
                                                        })
                                                    }), (0, n.jsx)("a", {
                                                        href: (0, ze.g)(b, e.collection.address, e.id ? e.id : null).find((function(e) {
                                                            return "opensea" === e.type || "rarible" === e.type
                                                        })).link,
                                                        target: "_blank",
                                                        children: (0, n.jsx)("img", {
                                                            src: (0, ze.g)(b, e.collection.address, e.id ? e.id : null).find((function(e) {
                                                                return "opensea" === e.type || "rarible" === e.type
                                                            })).logo,
                                                            width: 32,
                                                            height: 32,
                                                            className: "hover:opacity-60"
                                                        })
                                                    })]
                                                })]
                                            }, "".concat(e.collection.address, "-").concat(e.id))
                                        }))]
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center mt-[40px] lg:flex-row-reverse lg:justify-between",
                                    children: [(0, n.jsx)(u.Z, {
                                        text: i("confirmLabel"),
                                        type: {
                                            class: "primary",
                                            hasColoredBg: !1,
                                            icon: !1
                                        },
                                        size: "large",
                                        onClick: function() {
                                            j(), o((0, l.Um)(p + 1))
                                        },
                                        initialState: {
                                            state: "default"
                                        },
                                        className: "w-full mb-[16px] lg:mb-[0] lg:w-[auto]"
                                    }), (0, n.jsx)(u.Z, {
                                        text: i("dismissLabel"),
                                        type: {
                                            class: "secondary",
                                            hasColoredBg: !1,
                                            icon: !1
                                        },
                                        size: "large",
                                        onClick: function() {
                                            j()
                                        },
                                        initialState: {
                                            state: "default"
                                        },
                                        className: "w-full lg:w-[auto]"
                                    })]
                                })]
                            })
                        })
                    })
                },
                et = function(e) {
                    var t = e.isCurrent,
                        s = e.left,
                        i = e.right,
                        c = (0, f.Z)("common").t,
                        o = (0, r.useRef)(!1),
                        d = (0, r.useState)([]),
                        u = d[0],
                        x = d[1],
                        m = (0, r.useState)([]),
                        p = m[0],
                        h = m[1],
                        g = (0, a.T)(),
                        b = (0, a.C)((function(e) {
                            return e
                        })),
                        j = b.trademodal,
                        y = b.waccount,
                        v = j.dayDuration,
                        w = j.isApprovingModalOpen,
                        N = j.isUnverifiedCollectionModalOpen,
                        k = j.who,
                        C = j.tradeCreationDate,
                        S = j.tradeExpirationDate,
                        E = j.mode,
                        T = y.currentNetworkId;
                    return (0, r.useEffect)((function() {
                        return o.current = !0,
                            function() {
                                o.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (0 === u.length) {
                            var e = s.assets.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })),
                                t = s.assets.filter((function(e) {
                                    return "ERC20" === e.type || "NATIVE" === e.type
                                })),
                                n = [];
                            e.length > 0 && n.push({
                                text: "".concat(e.length, " NFT").concat(e.length > 1 ? "s" : ""),
                                isDisabled: !0,
                                isEditable: !1,
                                isSummary: !0,
                                isShrinked: !1,
                                isHidden: !1,
                                tokenSymbol: null,
                                asset: null,
                                isNFTsSummary: !0,
                                icon: ye.Z.src
                            }), t.forEach((function(e) {
                                n.push({
                                    text: e.amountHumanReadable ? e.amountHumanReadable : "",
                                    isDisabled: !0,
                                    isEditable: !1,
                                    isSummary: !0,
                                    isHidden: !1,
                                    isShrinked: !0,
                                    tokenSymbol: e.collection.symbol,
                                    isNFTsSummary: !1,
                                    asset: e,
                                    icon: e.collection.imageUrl
                                })
                            })), n.length > 2 && n.forEach((function(e, t) {
                                t > 1 && (e.isHidden = !0)
                            })), o.current && x(n)
                        }
                        if (0 === p.length) {
                            var r = i.assets.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })),
                                l = i.assets.filter((function(e) {
                                    return "ERC20" === e.type || "NATIVE" === e.type
                                })),
                                a = [];
                            r.length > 0 && a.push({
                                text: "".concat(r.length, " NFT").concat(r.length > 1 ? "s" : ""),
                                isDisabled: !0,
                                isEditable: !1,
                                isSummary: !0,
                                isHidden: !1,
                                isShrinked: !1,
                                tokenSymbol: null,
                                isNFTsSummary: !0,
                                asset: null,
                                icon: ye.Z.src
                            }), l.forEach((function(e) {
                                a.push({
                                    text: e.amountHumanReadable ? e.amountHumanReadable : "",
                                    isDisabled: !0,
                                    isEditable: !1,
                                    isSummary: !0,
                                    isHidden: !1,
                                    isShrinked: !0,
                                    tokenSymbol: e.collection.symbol,
                                    isNFTsSummary: !1,
                                    asset: e,
                                    icon: e.collection.imageUrl
                                })
                            })), a.length > 2 && a.forEach((function(e, t) {
                                t > 1 && (e.isHidden = !0)
                            })), o.current && h(a)
                        }
                    }), []), (0, n.jsx)(P.Z, {
                        isCurrent: t,
                        children: s && s.collector && i && i.collector ? (0, n.jsxs)("section", {
                            className: "w-full",
                            children: [(0, n.jsx)("div", {
                                className: "w-full",
                                children: (0, n.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, n.jsxs)("div", {
                                        className: "hidden lg:flex lg:justify-between lg:items-start",
                                        children: [(0, n.jsx)("div", {
                                            className: "flex justify-start h-[40px] w-[226px]",
                                            children: (0, n.jsx)("div", {
                                                className: "flex h-full justify-between",
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex items-center h-full",
                                                    children: [(0, n.jsx)(ae.Z, {
                                                        address: s.collector.address,
                                                        src: s.collector.imageUrl,
                                                        isNFT: s.collector.isNft,
                                                        className: "mr-[16px]",
                                                        sizesClassNames: "w-[32px] h-[32px]",
                                                        jazziconSize: {
                                                            defaultSize: 32,
                                                            breakpoints: [],
                                                            sizes: []
                                                        }
                                                    }), (0, n.jsxs)("div", {
                                                        className: "flex flex-col justify-center",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "text-sm font-semibold text-primary-dark-blue",
                                                            children: c("yourWalletLabel")
                                                        }), (0, n.jsx)("span", {
                                                            className: "rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline",
                                                            children: (0, n.jsx)("a", {
                                                                href: (0, Ve.w)(T, s.collector.address),
                                                                target: "_blank",
                                                                children: (0, le.N)(s.collector.address)
                                                            })
                                                        }), (0, n.jsx)("span", {
                                                            className: "hidden rubik text-xs font-regular cursor-pointer text-primary-gray xl:inline hover:underline",
                                                            children: (0, n.jsx)("a", {
                                                                href: (0, Ve.w)(T, s.collector.address),
                                                                target: "_blank",
                                                                children: (0, le.x)(s.collector.address)
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex justify-between items-center",
                                            children: [(0, n.jsx)("div", {
                                                className: "mr-[26px]",
                                                children: (0, n.jsx)("h3", {
                                                    className: "text-primary-blue text-lg font-bold text-right",
                                                    children: c("whatYouAreTradingLabel")
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "rounded-full flex items-center justify-center w-[40px] h-[40px] mr-[32px] xl:bg-primary-blue",
                                                children: (0, n.jsx)("span", {
                                                    className: "text-primary-dark-blue text-sm font-bold xl:text-primary-white",
                                                    children: c("outLabel")
                                                })
                                            }), (0, n.jsx)("img", {
                                                src: _e.Z.src,
                                                className: "w-[40px] h-[40px]"
                                            }), (0, n.jsx)("div", {
                                                className: "rounded-full flex items-center justify-center w-[40px] h-[40px] ml-[32px] xl:bg-primary-blue",
                                                children: (0, n.jsx)("span", {
                                                    className: "text-primary-dark-blue text-sm font-bold xl:text-primary-white",
                                                    children: c("inLabel")
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "ml-[26px]",
                                                children: (0, n.jsx)("h3", {
                                                    className: "text-primary-blue text-lg font-bold",
                                                    children: c("whatYouWillReceiveLabel")
                                                })
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex justify-end h-[40px] w-[226px]",
                                            children: (0, n.jsx)("div", {
                                                className: "flex h-full justify-between",
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex flex-row-reverse items-center h-full",
                                                    children: [(0, n.jsx)(ae.Z, {
                                                        address: i.collector.address,
                                                        src: i.collector.imageUrl,
                                                        isNFT: i.collector.isNft,
                                                        className: "ml-[16px] justify-end",
                                                        sizesClassNames: "w-[32px] h-[32px]",
                                                        jazziconSize: {
                                                            defaultSize: 32,
                                                            breakpoints: [],
                                                            sizes: []
                                                        }
                                                    }), (0, n.jsxs)("div", {
                                                        className: "flex flex-col justify-start text-right",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "text-sm font-semibold text-primary-dark-blue",
                                                            children: i.collector.username ? "@" + i.collector.username : (0, n.jsx)(n.Fragment, {
                                                                children: (0, n.jsx)("span", {
                                                                    className: "text-primary-gray rubik text-xs",
                                                                    children: c("usernameNotSetLabel")
                                                                })
                                                            })
                                                        }), (0, n.jsx)("span", {
                                                            className: "rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline",
                                                            children: (0, n.jsx)("a", {
                                                                href: (0, Ve.w)(T, i.collector.address),
                                                                target: "_blank",
                                                                children: (0, le.N)(i.collector.address)
                                                            })
                                                        }), (0, n.jsx)("span", {
                                                            className: "hidden rubik text-xs font-regular text-primary-gray cursor-pointer xl:inline hover:underline",
                                                            children: (0, n.jsx)("a", {
                                                                href: (0, Ve.w)(T, i.collector.address),
                                                                target: "_blank",
                                                                children: (0, le.x)(i.collector.address)
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "w-full mt-[24px] px-[16px] lg:flex lg:justify-center lg:items-center lg:px-[auto] lg:mt-[32px]",
                                        children: [(0, n.jsx)("h1", {
                                            className: "text-2xl font-semibold text-primary-dark-blue text-center mb-[16px] lg:hidden",
                                            children: c("verifyConfirmLabel")
                                        }), (0, n.jsxs)("div", {
                                            className: "lg:w-[294px]",
                                            children: [(null === E || "INIT_MAKER_FROM_POST" === E) && (0, n.jsx)(fe, {
                                                days: v,
                                                onChange: function(e) {
                                                    g((0, l.eF)(e))
                                                },
                                                pastDate: C,
                                                expiredDate: S,
                                                editable: "maker" === k,
                                                expired: !!S && (new Date).getTime() > new Date(S).getTime(),
                                                who: k
                                            }), "VIEW_MAKER" === E && (0, n.jsx)(fe, {
                                                days: v,
                                                onChange: function(e) {
                                                    g((0, l.eF)(e))
                                                },
                                                pastDate: C,
                                                expiredDate: S,
                                                editable: !1,
                                                expired: !!S && (new Date).getTime() > new Date(S).getTime(),
                                                who: "taker"
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col mt-[32px] lg:flex-row lg:justify-between",
                                        children: [(0, n.jsxs)("div", {
                                            className: "flex justify-between lg:hidden",
                                            children: [(0, n.jsx)("div", {
                                                children: (0, n.jsx)("h3", {
                                                    className: "text-primary-blue text-lg font-bold",
                                                    children: c("whatYouAreTradingLabel")
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full",
                                                children: (0, n.jsx)("span", {
                                                    className: "text-sm font-bold text-primary-white",
                                                    children: c("outLabel")
                                                })
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex mt-[8px] lg:hidden",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-center h-full",
                                                children: [(0, n.jsx)(ae.Z, {
                                                    address: s.collector.address,
                                                    src: s.collector.imageUrl,
                                                    isNFT: s.collector.isNft,
                                                    className: "mr-[16px]",
                                                    sizesClassNames: "w-[32px] h-[32px]",
                                                    jazziconSize: {
                                                        defaultSize: 32,
                                                        breakpoints: [],
                                                        sizes: []
                                                    }
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [(0, n.jsx)("span", {
                                                        className: "text-base font-semibold text-primary-dark-blue",
                                                        children: c("yourWalletLabel")
                                                    }), (0, n.jsx)("span", {
                                                        className: "rubik text-xs font-regular text-primary-gray cursor-pointer hover:underline",
                                                        children: (0, n.jsx)("a", {
                                                            href: (0, Ve.w)(T, s.collector.address),
                                                            target: "_blank",
                                                            children: (0, le.x)(s.collector.address)
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]",
                                            children: [(0, n.jsx)("div", {
                                                className: "badges-left w-full",
                                                children: u.length > 0 && (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)(je, {
                                                        textEmptyContainer: "",
                                                        actionButtonText: "",
                                                        onClick: function() {
                                                            g((0, l.KC)()), g((0, l.Um)(2)), g((0, l.MW)(!0)), g((0, l.sP)(!1)), g((0, l.s7)(!1)), g((0, l.JW)(!1)), g((0, l.Dh)(!1)), g((0, l.Wq)())
                                                        },
                                                        actionHasIcon: !1,
                                                        hasShowMore: !0,
                                                        who: "taker",
                                                        children: u.map((function(e, t) {
                                                            return (0, n.jsx)(Te, {
                                                                text: e.text,
                                                                isDisabled: e.isDisabled,
                                                                isEditable: e.isEditable,
                                                                isHidden: e.isHidden,
                                                                isShrinked: e.isShrinked,
                                                                isSummary: e.isSummary,
                                                                tokenSymbol: e.tokenSymbol,
                                                                asset: e.asset,
                                                                isNFTsSummary: e.isNFTsSummary,
                                                                checkApprove: !0,
                                                                icon: e.icon,
                                                                className: "badge-left",
                                                                showTooltip: !e.isNFTsSummary
                                                            }, "badge-left-more-".concat(t))
                                                        }))
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll scrollbar-hide lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3",
                                                children: s.assets.filter((function(e) {
                                                    return "ERC721" === e.type || "ERC1155" === e.type
                                                })).map((function(e, t, r) {
                                                    return (0, n.jsx)(De, {
                                                        NFTSrc: e.imageSrc ? e.imageSrc : "",
                                                        NFTId: e.id ? e.id : "",
                                                        standard: e.type,
                                                        collection: e.collection,
                                                        address: s.collector && s.collector.address ? s.collector.address : "",
                                                        isSelected: !1,
                                                        isShrinked: !0,
                                                        checkApprove: !0,
                                                        checkReported: !0,
                                                        hasPlaceholder: e.hasPlaceholder,
                                                        amount: e.amount ? e.amount : "",
                                                        className: "".concat(0 === t ? "ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0]" : t < r.length - 1 ? "mr-[8px] lg:mr-[0]" : "mr-[16px] lg:mr-[0]", " flex-none lg:flex-auto")
                                                    }, "".concat(e.collection.address, "-").concat(e.id, "-left"))
                                                }))
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "my-[32px] flex items-center justify-center lg:hidden",
                                            children: (0, n.jsx)("div", {
                                                className: "w-full h-[1px] bg-[#D5D8DE]"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex justify-between lg:hidden",
                                            children: [(0, n.jsx)("div", {
                                                children: (0, n.jsx)("h3", {
                                                    className: "text-primary-blue text-lg font-bold",
                                                    children: c("whatYouWillReceiveLabel")
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full",
                                                children: (0, n.jsx)("span", {
                                                    className: "text-sm font-bold text-primary-white",
                                                    children: c("inLabel")
                                                })
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex mt-[8px] lg:hidden",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-center h-full",
                                                children: [(0, n.jsx)(ae.Z, {
                                                    address: i.collector.address,
                                                    src: i.collector.imageUrl,
                                                    isNFT: i.collector.isNft,
                                                    className: "mr-[16px]",
                                                    sizesClassNames: "w-[32px] h-[32px]",
                                                    jazziconSize: {
                                                        defaultSize: 32,
                                                        breakpoints: [],
                                                        sizes: []
                                                    }
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [(0, n.jsx)("span", {
                                                        className: "text-base font-semibold text-primary-dark-blue",
                                                        children: i.collector.username ? "@" + i.collector.username : (0, n.jsx)(n.Fragment, {
                                                            children: (0, n.jsx)("span", {
                                                                className: "text-primary-gray rubik text-xs",
                                                                children: c("usernameNotSetLabel")
                                                            })
                                                        })
                                                    }), (0, n.jsx)("span", {
                                                        className: "rubik text-xs font-regular cursor-pointer text-primary-gray hover:underline",
                                                        children: (0, n.jsx)("a", {
                                                            href: (0, Ve.w)(T, i.collector.address),
                                                            target: "_blank",
                                                            children: (0, le.x)(i.collector.address)
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "mt-[24px] hidden divider lg:flex lg:justify-center lg:w-[4%]",
                                            children: (0, n.jsx)("div", {
                                                className: "h-full w-[1px] bg-[#D3D6DC]"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]",
                                            children: [(0, n.jsx)("div", {
                                                className: "badges-right w-full",
                                                children: p.length > 0 && (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)(je, {
                                                        textEmptyContainer: "",
                                                        actionButtonText: "",
                                                        onClick: function() {
                                                            g((0, l.KC)()), g((0, l.Um)(1)), g((0, l.MW)(!0)), g((0, l.sP)(!1)), g((0, l.s7)(!1)), g((0, l.JW)(!1)), g((0, l.Dh)(!1)), g((0, l.Wq)())
                                                        },
                                                        actionHasIcon: !1,
                                                        hasShowMore: !0,
                                                        who: "taker",
                                                        isLeft: !1,
                                                        children: p.map((function(e, t) {
                                                            return (0, n.jsx)(Te, {
                                                                text: e.text,
                                                                isDisabled: e.isDisabled,
                                                                isEditable: e.isEditable,
                                                                isHidden: e.isHidden,
                                                                isShrinked: e.isShrinked,
                                                                isSummary: e.isSummary,
                                                                tokenSymbol: e.tokenSymbol,
                                                                icon: e.icon,
                                                                asset: e.asset,
                                                                className: "badge-right",
                                                                showTooltip: !e.isNFTsSummary
                                                            }, "badge-right-more-".concat(t))
                                                        }))
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll scrollbar-hide lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3",
                                                children: i.assets.filter((function(e) {
                                                    return "ERC721" === e.type || "ERC1155" === e.type
                                                })).map((function(e, t, s) {
                                                    return (0, n.jsx)(De, {
                                                        NFTSrc: e.imageSrc ? e.imageSrc : "",
                                                        NFTId: e.id ? e.id : "",
                                                        standard: e.type,
                                                        collection: e.collection,
                                                        address: i.collector && i.collector.address ? i.collector.address : "",
                                                        isSelected: !1,
                                                        isShrinked: !0,
                                                        hasPlaceholder: e.hasPlaceholder,
                                                        checkReported: !0,
                                                        amount: e.amount ? e.amount : "",
                                                        className: "".concat(0 === t ? "ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0]" : t < s.length - 1 ? "mr-[8px] lg:mr-[0]" : "mr-[16px] lg:mr-[0]", " flex-none lg:flex-auto")
                                                    }, "".concat(e.collection.address, "-").concat(e.id, "-right-desktop"))
                                                }))
                                            })]
                                        })]
                                    })]
                                })
                            }), w && (0, n.jsx)(Ye, {
                                isOpen: !0,
                                actionClose: function() {}
                            }), N && (0, n.jsx)(Xe, {
                                isOpen: !0,
                                actionClose: function() {}
                            })]
                        }) : (0, n.jsx)(n.Fragment, {})
                    })
                },
                tt = s(83741),
                st = s(32176),
                nt = s(14879),
                rt = s(92314),
                lt = s(71916),
                at = s(52912),
                it = s(5029),
                ct = s(56837),
                ot = s.n(ct),
                dt = s(34543),
                ut = s(12488),
                xt = s(33551),
                mt = s(77165),
                ft = s(41339),
                pt = s(14808),
                ht = s(97342),
                gt = function(e) {
                    var t = e.isModalOpen,
                        s = e.actionClose,
                        i = (0, f.Z)("common").t,
                        c = (0, r.useRef)(!1),
                        o = (0, r.useState)([]),
                        d = o[0],
                        u = o[1],
                        x = (0, r.useState)(0),
                        m = x[0],
                        p = x[1],
                        h = (0, r.useState)(10)[0],
                        g = (0, r.useState)(!1),
                        b = g[0],
                        j = g[1],
                        y = (0, r.useState)(0),
                        v = y[0],
                        w = y[1],
                        N = (0, r.useState)(!1),
                        k = N[0],
                        C = N[1],
                        S = (0, r.useState)(!1),
                        E = S[0],
                        T = S[1],
                        _ = (0, a.C)((function(e) {
                            return e
                        })),
                        L = _.trademodal,
                        Z = _.waccount,
                        I = (0, a.T)(),
                        A = L.currentStepMenu,
                        M = L.mode,
                        z = (Z.currentNetworkId, Z.account),
                        B = Z.jwtToken,
                        O = function() {
                            console.log("server error: [401]"), I((0, l.jO)()), I((0, l.r$)(!1)), I((0, ut.up)(!0)), I((0, ut.kt)()), (0, xt.uM)({
                                account: null,
                                isConnected: !1,
                                currentNetworkId: null,
                                currentNetworkName: null,
                                nonce: null,
                                username: null,
                                email: null,
                                firstLogin: null,
                                createdAt: null,
                                updatedAt: null,
                                jwtToken: null,
                                walletProviderName: null,
                                walletProviderIconURL: null,
                                avatarUrl: null,
                                isNFT: 0,
                                isVerified: 0,
                                sessionExpired: !1,
                                bio: null,
                                tokenId: null,
                                collectionAddress: null
                            })
                        },
                        P = function() {
                            console.log("server error: [500]")
                        },
                        U = function(e) {
                            B && (0, F.U3)((0, R.f)("unfollowUser"), {
                                userFavourite: e
                            }, B).then((function() {
                                T(!0)
                            })).catch((function(e) {
                                (0, ht.$)(e, void 0, O, P)
                            }))
                        },
                        D = function() {
                            var e = [];
                            c.current && C(!0), z && (e = [m.toString(), h.toString()]), B ? (0, F.Vd)((0, R.f)("followedUsers", e), B).then((function(e) {
                                var t = e.data[0],
                                    s = t.count,
                                    n = t.rows;
                                c.current && w(s), 0 === d.length ? c.current && u(n) : c.current && u(d.concat(n))
                            })).catch((function(e) {
                                (0, ht.$)(e, void 0, O, P)
                            })).finally((function() {
                                c.current && C(!1)
                            })) : c.current && C(!1)
                        },
                        V = function(e, t) {
                            B && (0, F.jl)((0, R.f)("followUser"), {
                                userFavourite: e,
                                notification: t
                            }, B).then((function() {})).catch((function(e) {
                                (0, ht.$)(e, void 0, O, P)
                            }))
                        };
                    return (0, r.useEffect)((function() {
                        return c.current = !0,
                            function() {
                                c.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        E ? (T(!1), u([]), p(0), w(0), j(!1)) : v > d.length ? c.current && (p(m + 10), j(!0)) : c.current && j(!1)
                    }), [d, E]), (0, r.useEffect)((function() {
                        D()
                    }), [E]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(st.Z, {
                            isOpen: t,
                            actionClose: s,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h4", {
                                    className: "text-lg font-semibold text-primary-dark-blue",
                                    children: i("followedTradersLabel")
                                }), (0, n.jsxs)("div", {
                                    className: "mt-[24px]",
                                    children: [d && 0 === d.length && !k && (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsxs)("div", {
                                            className: "flex flex-col justify-center items-center p-[16px]",
                                            children: [(0, n.jsx)("img", {
                                                src: nt.Z.src,
                                                width: 64,
                                                height: 64
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-base font-light text-center text-primary-dark-blue w-[256px] mt-[16px]",
                                                children: i("favouriteBookmarkedLabel")
                                            })]
                                        })
                                    }), (0, n.jsx)(n.Fragment, {
                                        children: k && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "flex items-center justify-center w-full h-full",
                                                children: (0, n.jsx)(mt.Z, {
                                                    isWhite: !1,
                                                    className: "w-[30px] h-[30px]"
                                                })
                                            })
                                        })
                                    }), d && d.length > 0 && (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                            id: "favorites-scrollable",
                                            className: "h-[550px] overflow-y-scroll",
                                            children: (0, n.jsx)("ul", {
                                                className: "".concat(ot().ulContainer),
                                                children: (0, n.jsx)(dt.Z, {
                                                    dataLength: d.length,
                                                    next: D,
                                                    hasMore: b,
                                                    loader: (0, n.jsx)("div", {
                                                        className: "flex justify-center items-center",
                                                        children: (0, n.jsx)(mt.Z, {
                                                            isWhite: !1,
                                                            className: "w-[24px] h-[24px]"
                                                        })
                                                    }),
                                                    scrollThreshold: .99,
                                                    scrollableTarget: "favorites-scrollable",
                                                    style: {
                                                        overflow: "initial"
                                                    },
                                                    children: d.map((function(e, t) {
                                                        return (0, n.jsx)("li", {
                                                            className: "block cursor-pointer h-[36px] ".concat(t < d.length - 1 ? "mb-[22px]" : ""),
                                                            children: (0, n.jsxs)("div", {
                                                                className: "flex h-full justify-between relative",
                                                                children: [(0, n.jsxs)("div", {
                                                                    className: "flex items-center h-full",
                                                                    onClick: function() {
                                                                        null === M && (I((0, l.Bu)(e)), I((0, l.Um)(A + 1)), I((0, l.MW)(!1)))
                                                                    },
                                                                    children: [(0, n.jsx)(ae.Z, {
                                                                        address: e.address,
                                                                        src: e.imageUrl ? e.imageUrl : "",
                                                                        isNFT: e.isNft,
                                                                        className: "mr-[16px]",
                                                                        sizesClassNames: "w-[32px] h-[32px]",
                                                                        jazziconSize: {
                                                                            defaultSize: 32,
                                                                            breakpoints: [],
                                                                            sizes: []
                                                                        }
                                                                    }), (0, n.jsxs)("div", {
                                                                        className: "flex flex-col justify-center",
                                                                        children: [(0, n.jsx)("span", {
                                                                            className: "".concat(ot().username, " text-sm font-semibold text-primary-dark-blue"),
                                                                            children: e.username ? "@".concat(e.username) : (0, n.jsx)(n.Fragment, {
                                                                                children: (0, n.jsx)("span", {
                                                                                    className: "text-primary-gray rubik text-xs",
                                                                                    children: i("usernameNotSetLabel")
                                                                                })
                                                                            })
                                                                        }), (0, n.jsx)("span", {
                                                                            className: "rubik text-xs font-regular text-primary-gray",
                                                                            children: (0, le.N)(e.address)
                                                                        })]
                                                                    })]
                                                                }), (0, n.jsx)("div", {
                                                                    className: "".concat(ot().starContainer, " flex justify-center items-center h-full"),
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "flex justify-center items-center w-[24px] h-[24px]",
                                                                        children: (0, n.jsx)(ft.J, {
                                                                            className: "w-full lg:w-fit",
                                                                            children: function() {
                                                                                return (0, n.jsxs)(n.Fragment, {
                                                                                    children: [(0, n.jsx)(ft.J.Button, {
                                                                                        className: "w-full",
                                                                                        children: (0, n.jsx)("span", {
                                                                                            children: (0, n.jsx)("img", {
                                                                                                src: rt.Z.src
                                                                                            })
                                                                                        })
                                                                                    }), (0, n.jsx)(pt.u, {
                                                                                        as: r.Fragment,
                                                                                        enter: "transition ease-out duration-200",
                                                                                        enterFrom: "opacity-0 translate-y-1",
                                                                                        enterTo: "opacity-100 translate-y-0",
                                                                                        leave: "transition ease-in duration-150",
                                                                                        leaveFrom: "opacity-100 translate-y-0",
                                                                                        leaveTo: "opacity-0 translate-y-1",
                                                                                        children: (0, n.jsx)(ft.J.Panel, {
                                                                                            className: "absolute z-50 w-[200px] right-0 px-0 lg:max-w-3xl",
                                                                                            children: function(t) {
                                                                                                var s = t.close;
                                                                                                return (0, n.jsxs)("div", {
                                                                                                    className: "rounded-lg bg-white p-3 shadow-light-bg-blue",
                                                                                                    children: [(0, n.jsx)("div", {
                                                                                                        className: "text-sm text-gray-500",
                                                                                                        children: "Trader notifications"
                                                                                                    }), (0, n.jsxs)("div", {
                                                                                                        className: "mt-3 space-y-4",
                                                                                                        children: [(0, n.jsxs)("div", {
                                                                                                            className: "flex cursor-pointer items-center justify-between",
                                                                                                            onClick: function() {
                                                                                                                V(e.address, 1), s()
                                                                                                            },
                                                                                                            children: [(0, n.jsx)("div", {
                                                                                                                className: "font-museo text-sm font-semibold text-primary-blue",
                                                                                                                children: i("allNewPostLabel")
                                                                                                            }), (0, n.jsx)("img", {
                                                                                                                src: lt.Z.src,
                                                                                                                className: "text-primary-blue",
                                                                                                                width: 16,
                                                                                                                height: 16
                                                                                                            })]
                                                                                                        }), (0, n.jsxs)("div", {
                                                                                                            className: "flex cursor-pointer items-center justify-between",
                                                                                                            onClick: function() {
                                                                                                                V(e.address, 0), s()
                                                                                                            },
                                                                                                            children: [(0, n.jsx)("div", {
                                                                                                                className: "font-museo text-sm font-semibold text-primary-dark-blue",
                                                                                                                children: "Mute"
                                                                                                            }), (0, n.jsx)("img", {
                                                                                                                src: it.Z.src,
                                                                                                                className: "h-4 w-4 text-primary-dark-blue"
                                                                                                            })]
                                                                                                        }), (0, n.jsx)("hr", {}), (0, n.jsxs)("div", {
                                                                                                            className: "flex cursor-pointer items-center justify-between",
                                                                                                            onClick: function() {
                                                                                                                U(e.address), s()
                                                                                                            },
                                                                                                            children: [(0, n.jsx)("div", {
                                                                                                                className: "font-museo text-sm font-semibold text-primary-dark-blue",
                                                                                                                children: "Unfollow"
                                                                                                            }), (0, n.jsx)("img", {
                                                                                                                src: at.Z.src,
                                                                                                                className: "h-4 w-4 text-primary-dark-blue"
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
                                                                    })
                                                                })]
                                                            })
                                                        }, "favourite-item-".concat(t))
                                                    }))
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsxs)("section", {
                            className: "hidden lg:block",
                            children: [(0, n.jsx)("h4", {
                                className: "text-base font-semibold text-primary-dark-blue",
                                children: i("followedTradersLabel")
                            }), (0, n.jsxs)("div", {
                                className: "mt-[24px]",
                                children: [d && 0 === d.length && !k && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center p-[16px]",
                                        children: [(0, n.jsx)("img", {
                                            src: nt.Z.src,
                                            className: "w-[64px] h-[64px]"
                                        }), (0, n.jsx)("p", {
                                            className: "rubik text-base font-light text-center text-primary-dark-blue mt-[16px]",
                                            children: i("favouriteBookmarkedLabel")
                                        })]
                                    })
                                }), (0, n.jsx)(n.Fragment, {
                                    children: k && (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                            className: "flex items-center justify-center w-full h-[250px]",
                                            children: (0, n.jsx)(mt.Z, {
                                                isWhite: !1,
                                                className: "w-[30px] h-[30px]"
                                            })
                                        })
                                    })
                                }), d && d.length > 0 && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "h-[530px] overflow-y-scroll",
                                        id: "favorites-scrollable-desktop",
                                        children: (0, n.jsx)("ul", {
                                            className: "".concat(ot().ulContainer),
                                            children: (0, n.jsx)(dt.Z, {
                                                dataLength: d.length,
                                                next: D,
                                                hasMore: b,
                                                loader: (0, n.jsx)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: (0, n.jsx)(mt.Z, {
                                                        isWhite: !1,
                                                        className: "w-[24px] h-[24px]"
                                                    })
                                                }),
                                                scrollableTarget: "favorites-scrollable-desktop",
                                                scrollThreshold: .99,
                                                style: {
                                                    overflow: "initial"
                                                },
                                                children: d.map((function(e, t) {
                                                    return (0, n.jsx)("li", {
                                                        className: "childrens block cursor-pointer h-[36px] ".concat(t < d.length - 1 ? "mb-[22px]" : ""),
                                                        id: "favourite-item-".concat(t),
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex h-full justify-between relative",
                                                            children: [(0, n.jsxs)("div", {
                                                                className: "flex items-center h-full",
                                                                onClick: function() {
                                                                    null === M && (I((0, l.Bu)(e)), I((0, l.Um)(A + 1)), I((0, l.MW)(!1)))
                                                                },
                                                                children: [(0, n.jsx)(ae.Z, {
                                                                    address: e.address,
                                                                    src: e.imageUrl ? e.imageUrl : "",
                                                                    isNFT: e.isNft,
                                                                    className: "mr-[16px]",
                                                                    sizesClassNames: "w-[32px] h-[32px]",
                                                                    jazziconSize: {
                                                                        defaultSize: 32,
                                                                        breakpoints: [],
                                                                        sizes: []
                                                                    }
                                                                }), (0, n.jsxs)("div", {
                                                                    className: "flex flex-col justify-center",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "".concat(ot().username, " text-sm font-semibold text-primary-dark-blue"),
                                                                        children: e.username ? "@".concat(e.username) : (0, n.jsx)(n.Fragment, {
                                                                            children: (0, n.jsx)("span", {
                                                                                className: "text-primary-gray rubik text-xs",
                                                                                children: i("usernameNotSetLabel")
                                                                            })
                                                                        })
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "rubik text-xs font-regular text-primary-gray",
                                                                        children: (0, le.N)(e.address)
                                                                    })]
                                                                })]
                                                            }), (0, n.jsx)("div", {
                                                                className: "flex justify-center items-center w-[24px] h-[24px]",
                                                                children: (0, n.jsx)(ft.J, {
                                                                    className: "w-full lg:w-fit",
                                                                    children: function() {
                                                                        return (0, n.jsxs)(n.Fragment, {
                                                                            children: [(0, n.jsx)(ft.J.Button, {
                                                                                className: "w-full",
                                                                                children: (0, n.jsx)("span", {
                                                                                    children: (0, n.jsx)("img", {
                                                                                        src: rt.Z.src
                                                                                    })
                                                                                })
                                                                            }), (0, n.jsx)(pt.u, {
                                                                                as: r.Fragment,
                                                                                enter: "transition ease-out duration-200",
                                                                                enterFrom: "opacity-0 translate-y-1",
                                                                                enterTo: "opacity-100 translate-y-0",
                                                                                leave: "transition ease-in duration-150",
                                                                                leaveFrom: "opacity-100 translate-y-0",
                                                                                leaveTo: "opacity-0 translate-y-1",
                                                                                children: (0, n.jsx)(ft.J.Panel, {
                                                                                    className: "absolute z-50 w-[200px] right-0 px-0 lg:max-w-3xl",
                                                                                    children: function(t) {
                                                                                        var s = t.close;
                                                                                        return (0, n.jsxs)("div", {
                                                                                            className: "rounded-lg bg-white p-3 shadow-light-bg-blue",
                                                                                            children: [(0, n.jsx)("div", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Trader notifications"
                                                                                            }), (0, n.jsxs)("div", {
                                                                                                className: "mt-3 space-y-4",
                                                                                                children: [(0, n.jsxs)("div", {
                                                                                                    className: "flex cursor-pointer items-center justify-between",
                                                                                                    onClick: function() {
                                                                                                        V(e.address, 1), s()
                                                                                                    },
                                                                                                    children: [(0, n.jsx)("div", {
                                                                                                        className: "font-museo text-sm font-semibold text-primary-blue",
                                                                                                        children: "All new post"
                                                                                                    }), (0, n.jsx)("img", {
                                                                                                        src: lt.Z.src,
                                                                                                        className: "h-4 w-4 text-primary-blue"
                                                                                                    })]
                                                                                                }), (0, n.jsxs)("div", {
                                                                                                    className: "flex cursor-pointer items-center justify-between",
                                                                                                    onClick: function() {
                                                                                                        V(e.address, 0), s()
                                                                                                    },
                                                                                                    children: [(0, n.jsx)("div", {
                                                                                                        className: "font-museo text-sm font-semibold text-primary-dark-blue",
                                                                                                        children: "Mute"
                                                                                                    }), (0, n.jsx)("img", {
                                                                                                        src: it.Z.src,
                                                                                                        className: "h-4 w-4 text-primary-dark-blue"
                                                                                                    })]
                                                                                                }), (0, n.jsx)("hr", {}), (0, n.jsxs)("div", {
                                                                                                    className: "flex cursor-pointer items-center justify-between",
                                                                                                    onClick: function() {
                                                                                                        U(e.address), s()
                                                                                                    },
                                                                                                    children: [(0, n.jsx)("div", {
                                                                                                        className: "font-museo text-sm font-semibold text-primary-dark-blue",
                                                                                                        children: "Unfollow"
                                                                                                    }), (0, n.jsx)("img", {
                                                                                                        src: at.Z.src,
                                                                                                        className: "h-4 w-4 text-primary-dark-blue"
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
                                                            })]
                                                        })
                                                    }, "favourite-item-".concat(t))
                                                }))
                                            })
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                bt = s(29548),
                jt = s(28354),
                yt = function(e) {
                    var t = e.address,
                        s = e.username,
                        i = e.avatar,
                        c = e.isRegistered,
                        o = e.className,
                        d = e.onClick,
                        u = (e.onChange, e.isSelected),
                        x = void 0 !== u && u,
                        m = (e.onFavourite, (0, f.Z)("common").t),
                        p = (0, r.useRef)(!1),
                        h = (0, r.useState)(!1),
                        g = h[0],
                        b = h[1],
                        j = (0, r.useState)(!1),
                        y = j[0],
                        v = j[1],
                        w = (0, a.T)(),
                        N = (0, a.C)((function(e) {
                            return e
                        })).waccount,
                        k = N.jwtToken,
                        C = (N.currentNetworkId, function() {
                            console.log("server error: [401]"), w((0, l.jO)()), w((0, l.r$)(!1)), w((0, ut.up)(!0)), w((0, ut.kt)()), (0, xt.uM)({
                                account: null,
                                isConnected: !1,
                                currentNetworkId: null,
                                currentNetworkName: null,
                                nonce: null,
                                username: null,
                                email: null,
                                firstLogin: null,
                                createdAt: null,
                                updatedAt: null,
                                jwtToken: null,
                                walletProviderName: null,
                                walletProviderIconURL: null,
                                avatarUrl: null,
                                isNFT: 0,
                                isVerified: 0,
                                sessionExpired: !1,
                                bio: null,
                                tokenId: null,
                                collectionAddress: null
                            })
                        }),
                        S = function() {
                            console.log("server error: [500]")
                        };
                    return (0, r.useEffect)((function() {
                        if (p.current = !0, k) return (0, F.Vd)((0, R.f)("isUserFollowed", [t]), k).then((function(e) {
                                b(!0), v(e.data[0].notification)
                            })).catch((function(e) {
                                b(!1), (0, ht.$)(e, void 0, C, S), v(!1), console.log(e)
                            })),
                            function() {
                                p.current = !1
                            }
                    }), [k]), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("article", {
                            className: "flex items-center justify-between w-full h-[80px] rounded-[80px] border-[1px] border-solid cursor-pointer px-[32px] hover:border-primary-blue ".concat(x ? "border-primary-blue" : "border-[rgba(151, 157, 172, 0.4)]", " ").concat(o),
                            onClick: function(e) {
                                d && d(e)
                            },
                            children: [(0, n.jsxs)("div", {
                                className: "flex flex-col justify-center",
                                children: [(0, n.jsxs)("span", {
                                    className: "text-primary-dark-blue text-base font-semibold",
                                    children: [(0, n.jsx)("span", {
                                        className: "lg:hidden",
                                        children: (0, le.x)(t)
                                    }), (0, n.jsx)("span", {
                                        className: "hidden lg:inline",
                                        children: t
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex justify-start items-center",
                                    children: [(0, n.jsx)(ae.Z, {
                                        address: t,
                                        src: i.imageSrc,
                                        isNFT: i.isNFT,
                                        className: "mr-[8px]",
                                        sizesClassNames: "w-[24px] h-[24px]",
                                        jazziconSize: {
                                            defaultSize: 24,
                                            breakpoints: [],
                                            sizes: []
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "mr-[8px] text-base font-semibold text-primary-dark-blue",
                                        children: 1 === c ? (0, n.jsx)(n.Fragment, {
                                            children: s ? "@".concat(s) : (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("span", {
                                                    className: "text-primary-gray rubik text-xs",
                                                    children: m("usernameNotSetLabel")
                                                })
                                            })
                                        }) : (0, n.jsx)("span", {
                                            className: "text-primary-gray",
                                            children: m("notRegisteredUserLabel")
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "w-[24px] h-[24px] flex items-center justify-center",
                                        children: (0, n.jsx)("img", {
                                            src: g || y ? g && !y ? it.Z.src : lt.Z.src : jt.Z.src
                                        })
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: "w-[32px] h-[32px] flex justify-center items-center",
                                children: (0, n.jsx)("div", {
                                    className: "".concat(x ? "border-primary-blue" : "border-primary-gray", " w-[24px] h-[24px] flex justify-center items-center border-[1px] border-solid rounded-full hover:border-primary-blue"),
                                    children: (0, n.jsx)("div", {
                                        className: "".concat(x ? "bg-primary-blue" : "", " w-[10.5px] h-[10.5px] rounded-full")
                                    })
                                })
                            })]
                        })
                    })
                },
                vt = s(70118);

            function wt(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var Nt = function(e) {
                    var t = e.isCurrent,
                        s = (0, f.Z)("common").t,
                        i = (0, r.useRef)(!1),
                        c = (0, r.useState)(!1),
                        o = c[0],
                        d = c[1],
                        x = (0, r.useState)(""),
                        m = x[0],
                        p = x[1],
                        h = (0, r.useState)(),
                        g = h[0],
                        b = h[1],
                        j = (0, r.useState)(""),
                        y = j[0],
                        v = j[1],
                        w = (0, r.useState)(!1),
                        N = w[0],
                        k = w[1],
                        C = (0, r.useRef)({
                            clearInput: null
                        }),
                        S = (0, a.C)((function(e) {
                            return e
                        })),
                        E = S.trademodal,
                        T = S.waccount,
                        _ = (0, a.T)(),
                        L = E.taker,
                        Z = T.currentNetworkId,
                        I = T.jwtToken,
                        A = (0, r.useState)(!1),
                        M = A[0],
                        z = A[1],
                        B = function() {
                            console.log("server error: [401]"), _((0, l.jO)()), _((0, l.r$)(!1)), _((0, ut.up)(!0)), _((0, ut.kt)()), (0, xt.uM)({
                                account: null,
                                isConnected: !1,
                                currentNetworkId: null,
                                currentNetworkName: null,
                                nonce: null,
                                username: null,
                                email: null,
                                firstLogin: null,
                                createdAt: null,
                                updatedAt: null,
                                jwtToken: null,
                                walletProviderName: null,
                                walletProviderIconURL: null,
                                avatarUrl: null,
                                isNFT: 0,
                                isVerified: 0,
                                sessionExpired: !1,
                                bio: null,
                                tokenId: null,
                                collectionAddress: null
                            })
                        },
                        O = function() {
                            console.log("server error: [500]")
                        };
                    return (0, r.useEffect)((function() {
                        return i.current = !0,
                            function() {
                                i.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (o) {
                            var e = function() {
                                window.innerWidth > 1023 && i.current && d(!1)
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [o]), (0, r.useEffect)((function() {
                        i.current && (b([]), k(!0))
                    }), [m]), (0, r.useEffect)((function() {
                        N && function(e) {
                            if (0 === e.length) return i.current && k(!1), i.current && z(!1), void setTimeout((function() {
                                i.current && b([])
                            }), 500);
                            Z && I ? (i.current && z(!0), (0, F.Vd)((0, R.f)("searchUser", [Z, e]), I).then((function(t) {
                                var s = t.data;
                                if (wt(s, Array) && s.length > 0) {
                                    var n = s[0],
                                        r = [];
                                    "isAddress" in n && !0 === n.isAddress ? s.forEach((function(t) {
                                        r.push({
                                            networkId: Z,
                                            username: "",
                                            address: e,
                                            imageUrl: "",
                                            isVerified: 0,
                                            isNft: 0,
                                            isRegistered: 0
                                        })
                                    })) : "networkId" in n && s.forEach((function(e) {
                                        r.push({
                                            networkId: e.currentNetworkId,
                                            username: e.username,
                                            address: e.address,
                                            imageUrl: e.imageUrl,
                                            isVerified: e.isVerified,
                                            isNft: e.isNft,
                                            isRegistered: e.isRegistered,
                                            isFavourite: e.isFavourite
                                        })
                                    })), i.current && b(r), i.current && z(!1)
                                }
                            })).catch((function(e) {
                                i.current && z(!1), (0, ht.$)(e, void 0, B, O)
                            })).finally((function() {
                                i.current && k(!1)
                            }))) : i.current && z(!1)
                        }(m)
                    }), [N]), (0, n.jsx)(P.Z, {
                        isCurrent: t,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("section", {
                                className: "grid grid-cols-12",
                                children: [(0, n.jsx)("div", {
                                    className: "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                                    children: (0, n.jsx)(gt, {
                                        isModalOpen: !1,
                                        actionClose: function() {}
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "col-span-12 pt-[30px] lg:pt-0 lg:rounded-[16px] lg:col-span-9 lg:pl-[48px] lg:min-h-[732px]",
                                    children: (0, n.jsx)("div", {
                                        className: "w-full lg:min-h-[732px]",
                                        children: (0, n.jsxs)("div", {
                                            className: "w-full bg-primary-white lg:px-[112px] lg:rounded-[16px] lg:rounded-tr-[40px] lg:min-h-[732px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "text-center text-primary-dark-blue text-2xl font-semibold",
                                                children: s("whoDoYouToMakeTradeLabel")
                                            }), (0, n.jsxs)("div", {
                                                className: "flex flex-col mt-[40px] text-center lg:items-center lg:pt-[0px]",
                                                children: [(0, n.jsx)("span", {
                                                    className: "mb-[16px] text-base font-regular text-primary-dark-blue lg:mb-[24px]",
                                                    children: s("searchForAndSelectCounterpartyTraderLabel")
                                                }), (0, n.jsx)(tt.Z, {
                                                    setFilter: function(e) {
                                                        p(e), v(""), _((0, l.MW)(!1)), L && _((0, l.FI)())
                                                    },
                                                    onClear: function() {
                                                        _((0, l.MW)(!1)), L && _((0, l.FI)())
                                                    },
                                                    placeholder: s("searchUsernameAddressLabel"),
                                                    refClear: C,
                                                    className: "h-[52px] lg:w-[600px]"
                                                }), (0, n.jsx)("div", {
                                                    className: "flex items-center justify-center mt-[16px] lg:hidden",
                                                    children: (0, n.jsxs)("span", {
                                                        className: "flex cursor-pointer text-primary-blue w-max hover:underline",
                                                        onClick: function() {
                                                            d(!0)
                                                        },
                                                        children: [(0, n.jsx)("span", {
                                                            className: "text-base font-semibold mr-[8px]",
                                                            children: s("selectFromFavouriteLabel")
                                                        }), (0, n.jsx)("img", {
                                                            src: bt.Z.src
                                                        })]
                                                    })
                                                }), (0, n.jsxs)("div", {
                                                    className: "mt-[56px] lg:w-[600px]",
                                                    children: [(0, n.jsx)(n.Fragment, {
                                                        children: M && (0, n.jsx)(n.Fragment, {
                                                            children: (0, n.jsx)("div", {
                                                                className: "flex items-center justify-center w-full h-full",
                                                                children: (0, n.jsx)(mt.Z, {
                                                                    isWhite: !1,
                                                                    className: "w-[30px] h-[30px]"
                                                                })
                                                            })
                                                        })
                                                    }), g && g.length > 0 && (0, n.jsx)("ul", {
                                                        children: g.map((function(e, t) {
                                                            return (0, n.jsx)("li", {
                                                                className: "mb-[8px]",
                                                                children: (0, n.jsx)(yt, {
                                                                    address: e.address,
                                                                    username: e.username,
                                                                    avatar: {
                                                                        imageSrc: e.imageUrl,
                                                                        isNFT: e.isNft,
                                                                        isVerified: 0
                                                                    },
                                                                    isRegistered: e.isRegistered ? e.isRegistered : 0,
                                                                    onClick: function() {
                                                                        v(e.address), _((0, l.Bu)(e)), _((0, l.Gu)())
                                                                    },
                                                                    onChange: function() {},
                                                                    isSelected: y === e.address,
                                                                    onFavourite: function(t) {
                                                                        var s = JSON.parse(JSON.stringify(g)),
                                                                            n = s.find((function(t) {
                                                                                return t.address.toLowerCase() === e.address.toLowerCase()
                                                                            }));
                                                                        n.isFavourite = t, b(s), y === e.address && (_((0, l.Bu)(n)), _((0, l.Gu)()))
                                                                    }
                                                                }, "selectable-user-".concat(e.address))
                                                            }, "collector-".concat(e.address, "-").concat(t, "-").concat((new Date).getTime()))
                                                        }))
                                                    }), 0 === (null === g || void 0 === g ? void 0 : g.length) && m.length > 0 && !M && (0, n.jsxs)("div", {
                                                        className: "flex flex-col items-center justify-center",
                                                        children: [(0, n.jsx)("img", {
                                                            src: vt.Z.src,
                                                            className: "w-[88px] h-[88px]"
                                                        }), (0, n.jsxs)("div", {
                                                            className: "mt-[24px] text-center flex flex-col items-center",
                                                            children: [(0, n.jsx)("span", {
                                                                className: "text-base font-regular text-primary-dark-blue",
                                                                children: s("noAddressFoundLabel")
                                                            }), (0, n.jsx)(u.Z, {
                                                                text: s("clearSearchLabel"),
                                                                type: {
                                                                    class: "primary",
                                                                    hasColoredBg: !1,
                                                                    icon: !1
                                                                },
                                                                initialState: {
                                                                    state: "default"
                                                                },
                                                                size: "large",
                                                                onClick: function() {
                                                                    C.current && C.current.clearInput && wt(C.current.clearInput, Function) && C.current.clearInput(), _((0, l.MW)(!1)), L && _((0, l.FI)())
                                                                },
                                                                className: "mt-[40px] py-3"
                                                            })]
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }), o && (0, n.jsx)(gt, {
                                isModalOpen: o,
                                actionClose: function() {
                                    d(!1)
                                }
                            })]
                        })
                    })
                },
                kt = s(87774),
                Ct = s(75657),
                St = function(e) {
                    var t = e.isCurrent,
                        s = (0, f.Z)("common").t,
                        r = (0, a.T)(),
                        i = (0, a.C)((function(e) {
                            return e
                        })).trademodal,
                        c = i.who,
                        o = i.mode;
                    return (0, n.jsx)(P.Z, {
                        isCurrent: t,
                        children: (0, n.jsx)("section", {
                            className: "flex justify-center items-center",
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col items-center justify-center ".concat("maker" === c ? "h-[506px]" : "h-[526px]"),
                                children: [(0, n.jsx)("img", {
                                    src: kt.Z.src,
                                    className: "w-[170px] h-[auto] lg:w-[204px]"
                                }), (0, n.jsx)("img", {
                                    src: B.Z.src,
                                    className: "mt-[8px] w-[103px] h-[auto] lg:w-[160px]"
                                }), (0, n.jsxs)("div", {
                                    className: "mt-[40px] text-center text-primary-white lg:mt-[48px]",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-primary-white text-2xl font-semibold lg:text-3xl",
                                        children: s("maker" === c ? "yourDealHasBeenDeliveredLabel" : "yourTradeWasSuccessfulLabel")
                                    }), (0, n.jsx)("div", {
                                        className: "text-center mt-[32px] lg:mt-[40px]",
                                        children: (0, n.jsx)("span", {
                                            className: "text-primary-white",
                                            children: "maker" === c ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("span", {
                                                    className: "rubik text-base font-light",
                                                    children: s("yourCounterpartyFindDealLabel")
                                                }), " ", (0, n.jsx)(Ct.default, {
                                                    href: "/my-trades",
                                                    children: (0, n.jsx)("a", {
                                                        className: "text-base font-semibold hover:underline",
                                                        target: "_blank",
                                                        children: s("hubTradesPageLabel")
                                                    })
                                                })]
                                            }) : (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("span", {
                                                    className: "rubik text-base font-light",
                                                    children: s("yourNewAssetsCanBeFoundWalletLabel")
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[16px] text-center text-primary-white",
                                        children: "maker" === c ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("span", {
                                                className: "rubik text-base font-light",
                                                children: s("forMoreInfoReadLabel")
                                            }), " ", (0, n.jsx)(Ct.default, {
                                                href: "/faq",
                                                children: (0, n.jsx)("a", {
                                                    className: "text-base font-semibold hover:underline",
                                                    target: "_blank",
                                                    children: s("FAQ")
                                                })
                                            })]
                                        }) : (0, n.jsx)(n.Fragment, {})
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[48px]",
                                        children: (0, n.jsx)(u.Z, {
                                            text: s("maker" === c ? "INIT_MAKER_FROM_POST" === o ? "backToPostPageLabel" : "backToHomeLabel" : "backToHubLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1
                                            },
                                            size: "large",
                                            onClick: function() {
                                                "INIT_MAKER_FROM_POST" !== o ? (document.body.classList.remove("no-scroll"), r((0, l.r$)(!1)), r((0, l.jO)()), r((0, l.eV)(null)), r((0, l.vg)(null))) : location.href = location.href
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "w-full"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                Et = s(73552),
                Tt = s.n(Et),
                _t = s(50813),
                Lt = s.n(_t),
                Ft = s(71733),
                Rt = function(e) {
                    var t = e.collection,
                        s = e.className,
                        r = void 0 === s ? "" : s,
                        l = e.isSelected,
                        a = void 0 !== l && l,
                        i = e.onClick,
                        c = e.showSkeletonLoader,
                        o = void 0 !== c && c;
                    return (0, n.jsx)(n.Fragment, {
                        children: o ? (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Lt().collectionRow, " flex justify-between items-center h-[36px] mb-[16px] cursor-pointer ").concat(r),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex justify-start flex-1 items-center mr-[16px]",
                                    children: [(0, n.jsx)("div", {
                                        className: "".concat(Lt().skeleton, " w-[20px] h-[20px] flex-none mr-[12px] rounded-full")
                                    }), (0, n.jsx)("div", {
                                        className: "w-full h-[40px] flex items-center",
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(Lt().skeleton, " w-[150px] h-[5px] rounded-full")
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "".concat(Lt().skeleton, " w-[32px] h-[32px] rounded-full")
                                })]
                            })
                        }) : (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Lt().collectionRow, " flex justify-between items-center h-[36px] mb-[16px] cursor-pointer ").concat(r),
                                onClick: i,
                                children: [(0, n.jsxs)("div", {
                                    className: "flex justify-start flex-1 items-center mr-[16px]",
                                    children: [(0, n.jsx)("div", {
                                        className: "w-[32px] h-[32px] flex items-center justify-center mr-[12px]",
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(Lt().radio, " ").concat(a ? "border-primary-blue" : "border-primary-gray", " flex items-center justify-center h-[24px] w-[24px] rounded-full border-[1px] border-solid hover:border-primary-blue"),
                                            children: a && (0, n.jsx)("div", {
                                                className: "w-[10.5px] h-[10.5px] bg-primary-blue rounded-full"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "w-full h-[40px]",
                                        children: (0, n.jsx)("span", {
                                            className: "text-sm font-semibold text-primary-dark-blue flex items-center h-full",
                                            children: t.name
                                        })
                                    })]
                                }), (0, n.jsx)(Ze.Z, {
                                    src: "imageUrl" in t && null != t.imageUrl ? t.imageUrl : Ft.Z.src,
                                    className: "w-[32px] h-[32px]",
                                    badgeClassName: "w-[16px] h-[16px]",
                                    statusVerification: t.statusVerification,
                                    showCollectionTooltip: !0,
                                    collection: t,
                                    canReport: !0
                                })]
                            })
                        })
                    })
                },
                Zt = s(92594),
                It = s.n(Zt),
                At = s(83050),
                Mt = s(81067),
                zt = s(60638),
                Bt = s(42161),
                Ot = s.n(Bt),
                Pt = function(e) {
                    var t = e.src,
                        s = e.size,
                        l = e.url,
                        a = (0, r.useRef)(!1),
                        i = (0, r.useRef)(null),
                        c = (0, r.useState)(!1),
                        o = c[0],
                        d = c[1];
                    return (0, r.useEffect)((function() {
                        return a.current = !0,
                            function() {
                                a.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        var e = (0, zt.i)(t);
                        if (o) {
                            i.current.src = e
                        } else {
                            var s = new window.Image;
                            s.onload = function() {
                                a.current && d(!0)
                            }, s.onerror = function() {
                                a.current && d(!1)
                            }, s.src = e
                        }
                    }), [o]), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "".concat(o ? "" : "bg-black", " rounded-full flex justify-center items-center overflow-hidden"),
                            style: {
                                width: "".concat(s, "px"),
                                height: "".concat(s, "px")
                            },
                            children: [o && (0, n.jsx)("a", {
                                href: l,
                                target: "_blank",
                                children: (0, n.jsx)("img", {
                                    ref: i,
                                    className: "object-cover"
                                })
                            }), !o && (0, n.jsx)("img", {
                                src: Ne.Z.src,
                                className: "".concat(Ot().rotating),
                                width: 24,
                                height: 24
                            })]
                        })
                    })
                },
                Ut = s(47805);

            function Dt(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var Vt = function(e) {
                    var t = e.isOpen,
                        s = void 0 !== t && t,
                        i = e.actionClose,
                        c = (0, f.Z)("common").t,
                        o = (0, r.useRef)(!1),
                        d = (0, r.useState)(s),
                        x = d[0],
                        m = d[1],
                        p = (0, r.useState)(!1),
                        h = p[0],
                        g = p[1],
                        b = (0, r.useState)(),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(!1),
                        w = v[0],
                        N = v[1],
                        k = (0, a.T)(),
                        C = (0, a.C)((function(e) {
                            return e
                        })).waccount.currentNetworkId;
                    return (0, r.useEffect)((function() {
                        return o.current = !0,
                            function() {
                                o.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        x || k((0, l.Dc)(!1))
                    }), [x]), (0, n.jsx)(n.Fragment, {
                        children: x && (0, n.jsx)("div", {
                            className: "".concat(It().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            children: (0, n.jsxs)("div", {
                                className: "".concat(It().customCollectionModal, " fixed flex flex-col bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full h-full text-center overflow-y-scroll scrollbar-hide lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-white",
                                    children: [(0, n.jsx)("div", {
                                        className: "flex items-center justify-center w-[32px] h-[32px]",
                                        children: (0, n.jsx)("img", {
                                            src: At.Z.src,
                                            className: "cursor-pointer",
                                            onClick: function() {
                                                Dt(i, Function) && i(), m(!1)
                                            },
                                            width: 26,
                                            height: 26
                                        })
                                    }), (0, n.jsx)("h3", {
                                        className: "text-xl font-semibold text-primary-blue mt-[16px]",
                                        children: c("addNFTCollectionLabel")
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center mt-[40px]",
                                    children: [(0, n.jsx)("span", {
                                        className: "text-base font-semibold text-primary-dark-blue mb-[16px]",
                                        children: c("collectionAddressLabel")
                                    }), (0, n.jsx)(tt.Z, {
                                        placeholder: "0x....",
                                        setFilter: function(e) {
                                            var t;
                                            42 === (t = e).length && null != t.match(/^0x[a-fA-F0-9]{40}$/g) && C ? (0, F.bf)((0, R.f)("getNftCollection", [C, t])).then((function(e) {
                                                var t = e.data[0];
                                                o.current && y(t)
                                            })).catch((function(e) {
                                                console.error(e)
                                            })) : o.current && y(void 0), o.current && g(!0), 0 === t.length && o.current && g(!1)
                                        },
                                        hideIcon: !0,
                                        className: "w-full h-[52px]"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center mt-[40px] px-[24px] py-[16px]",
                                    children: [j && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(Pt, {
                                            src: j.image ? j.image : Ft.Z.src,
                                            url: j.externalUrl ? j.externalUrl : "",
                                            size: 72
                                        }, j.symbol + (new Date).getTime()), (0, n.jsxs)("div", {
                                            className: "text-center w-full mt-[18px]",
                                            children: [(0, n.jsx)("span", {
                                                className: "text-xl font-semibold text-primary-dark-blue",
                                                children: j.name ? j.name : ""
                                            }), (0, n.jsx)("p", {
                                                className: "mt-[8px]",
                                                children: (0, Ut.q)(j.description, 15)
                                            })]
                                        })]
                                    }), !j && (0, n.jsxs)(n.Fragment, {
                                        children: [h && (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("img", {
                                                src: vt.Z.src,
                                                width: 72,
                                                height: 72
                                            }), (0, n.jsx)("span", {
                                                className: "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                                children: c("noSuchCollectionLabel")
                                            })]
                                        }), !h && (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("img", {
                                                src: Mt.Z.src,
                                                className: "w-[130px]"
                                            }), (0, n.jsx)("span", {
                                                className: "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                                children: c("pasteCollectionLabel")
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                                    children: [j ? (0, n.jsx)(n.Fragment, {
                                        children: w ? (0, n.jsx)("div", {
                                            children: (0, n.jsx)(u.Z, {
                                                text: c("addCapitalizedLabel"),
                                                type: {
                                                    class: "primary",
                                                    icon: !1,
                                                    hasColoredBg: !1
                                                },
                                                size: "large",
                                                initialState: {
                                                    state: "loading"
                                                },
                                                className: "mb-[16px] lg:mb-[auto]",
                                                onClick: function() {}
                                            })
                                        }) : (0, n.jsx)(u.Z, {
                                            text: c("addCapitalizedLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "mb-[16px] lg:mb-[auto]",
                                            onClick: function() {
                                                var e;
                                                N(!0), e = j, (0, F.VZ)((0, R.f)("insertCollection"), {
                                                    network: (0, W.kb)(C),
                                                    collection: e.collectionAddress,
                                                    networkId: C
                                                }).then((function(e) {
                                                    o.current && (N(!1), m(!1))
                                                })).catch((function(e) {
                                                    o.current && N(!1), console.error(e)
                                                }))
                                            }
                                        })
                                    }) : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(u.Z, {
                                            text: c("addCapitalizedLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: "disabled"
                                            },
                                            className: "mb-[16px] lg:mb-[auto]"
                                        })
                                    }), (0, n.jsx)(u.Z, {
                                        text: c("closeLabel"),
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
                                            Dt(i, Function) && i(), m(!1)
                                        }
                                    })]
                                })]
                            })
                        })
                    })
                },
                Ht = s(11912),
                Wt = s.n(Ht),
                Kt = function(e) {
                    var t = e.isModalOpen,
                        s = e.actionClose,
                        i = e.onClickItem,
                        c = (0, f.Z)("common").t,
                        o = (0, r.useRef)(!1),
                        d = (0, r.useRef)(null),
                        u = (0, r.useState)([]),
                        x = u[0],
                        m = u[1],
                        p = (0, r.useState)(""),
                        h = p[0],
                        g = p[1],
                        b = (0, r.useState)(""),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(0),
                        w = v[0],
                        N = v[1],
                        k = (0, r.useState)(0),
                        S = k[0],
                        E = k[1],
                        T = (0, r.useState)(10)[0],
                        _ = (0, r.useState)(!1),
                        L = _[0],
                        F = _[1],
                        R = (0, r.useState)(!1),
                        Z = R[0],
                        I = R[1],
                        A = (0, r.useState)(!1),
                        M = A[0],
                        z = A[1],
                        B = (0, a.T)(),
                        O = (0, a.C)((function(e) {
                            return e
                        })),
                        P = O.trademodal,
                        U = O.waccount,
                        D = P.isCustomCollectionModalOpen,
                        V = U.currentNetworkId,
                        H = U.account,
                        W = function(e) {
                            d.current && H && (0 === x.length ? o.current && z(!0) : o.current && z(!1), d.current.getCollections({
                                userAddress: H,
                                networkId: V || "*",
                                searchType: "NFT",
                                skip: S,
                                take: T,
                                queryString: e && e.length > 0 ? e : void 0
                            }).then((function(e) {
                                if (e) {
                                    var t = e.data[0],
                                        s = t.rows,
                                        n = t.count;
                                    o.current && N(n), 0 === x.length ? o.current && m(s) : o.current && m(x.concat(s))
                                }
                            })).catch((function(e) {
                                (0, ht.$)(e, B)
                            })).finally((function() {
                                o.current && (z(!1), F(!1))
                            })))
                        },
                        K = (0, r.useRef)(Wt()((function(e) {
                            o.current && y(e)
                        }), 300)).current;
                    return (0, r.useEffect)((function() {
                        return o.current = !0, d.current = new C.k_({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), d.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }),
                            function() {
                                o.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        o.current && (N(0), E(0), m([]), F(!0))
                    }), [j]), (0, r.useEffect)((function() {
                        w > x.length ? o.current && (E(S + 10), I(!0)) : o.current && I(!1)
                    }), [x]), (0, r.useEffect)((function() {
                        L && W(j)
                    }), [L]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(st.Z, {
                            isOpen: t,
                            actionClose: s,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h4", {
                                    className: "text-lg font-semibold text-center text-primary-dark-blue",
                                    children: c("filterCollectionsLabel")
                                }), (0, n.jsxs)("div", {
                                    className: "mt-[24px] text-center",
                                    children: [(0, n.jsx)(tt.Z, {
                                        placeholder: c("filterCollectionOrAddressLabel"),
                                        setFilter: K,
                                        className: "h-[52px]"
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[16px] text-center",
                                        children: (0, n.jsx)("span", {
                                            onClick: function() {
                                                B((0, l.Dc)(!0))
                                            },
                                            className: "mt-[16px] text-sm font-regular text-primary-blue cursor-pointer hover:underline",
                                            children: c("addNFTCollectionLabel")
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "mt-[48px]",
                                    children: (0, n.jsxs)(dt.Z, {
                                        dataLength: x.length,
                                        next: W,
                                        scrollThreshold: .99,
                                        hasMore: Z,
                                        loader: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center",
                                            children: (0, n.jsx)(mt.Z, {
                                                isWhite: !1,
                                                className: "w-[24px] h-[24px]"
                                            })
                                        }),
                                        scrollableTarget: "scrollable-modal",
                                        style: {
                                            overflow: "initial"
                                        },
                                        children: [(0, n.jsx)(n.Fragment, {
                                            children: M && (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("div", {
                                                    className: "flex items-center justify-center w-full h-full",
                                                    children: (0, n.jsx)(mt.Z, {
                                                        isWhite: !1,
                                                        className: "w-[30px] h-[30px]"
                                                    })
                                                })
                                            })
                                        }), x.map((function(e) {
                                            return (0, n.jsx)(Rt, {
                                                collection: e,
                                                isSelected: h === e.address,
                                                onClick: function() {
                                                    e.address !== h ? (g(e.address), i && i(e)) : i && i(e)
                                                }
                                            }, "collection-".concat(e.address))
                                        }))]
                                    })
                                }), D && (0, n.jsx)(Vt, {
                                    isOpen: !0,
                                    actionClose: function() {
                                        B((0, l.Dc)(!1))
                                    }
                                })]
                            })
                        }), (0, n.jsxs)("section", {
                            className: "hidden lg:block",
                            children: [(0, n.jsx)("h4", {
                                className: "text-base font-semibold text-primary-dark-blue",
                                children: c("filterCollectionOrAddressLabel")
                            }), (0, n.jsxs)("div", {
                                className: "mt-[24px]",
                                children: [(0, n.jsx)(tt.Z, {
                                    placeholder: c("filterCollectionOrAddressLabel"),
                                    setFilter: K,
                                    className: "h-[52px]"
                                }), (0, n.jsx)("div", {
                                    className: "mt-[16px]",
                                    children: (0, n.jsx)("span", {
                                        className: "mt-[16px] text-sm font-regular text-primary-blue cursor-pointer hover:underline",
                                        onClick: function() {
                                            B((0, l.Dc)(!0))
                                        },
                                        children: c("addNFTCollectionLabel")
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "mt-[48px] max-h-[504px] ".concat(Tt().scrollbar, " overflow-y-scroll scrollbar-hide overflow-x-hidden px-[3px]"),
                                id: "collections-scrollable",
                                children: (0, n.jsxs)(dt.Z, {
                                    dataLength: x.length,
                                    next: W,
                                    scrollThreshold: .99,
                                    hasMore: Z,
                                    loader: (0, n.jsx)("div", {
                                        className: "flex justify-center items-center",
                                        children: (0, n.jsx)(mt.Z, {
                                            isWhite: !1,
                                            className: "w-[24px] h-[24px]"
                                        })
                                    }),
                                    scrollableTarget: "collections-scrollable",
                                    style: {
                                        overflow: "initial"
                                    },
                                    children: [(0, n.jsx)(n.Fragment, {
                                        children: M && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "flex items-center justify-center w-full h-[250px]",
                                                children: (0, n.jsx)(mt.Z, {
                                                    isWhite: !1,
                                                    className: "w-[30px] h-[30px]"
                                                })
                                            })
                                        })
                                    }), x.map((function(e) {
                                        return (0, n.jsx)(Rt, {
                                            collection: e,
                                            isSelected: h === e.address,
                                            onClick: function() {
                                                e.address !== h ? (g(e.address), i && i(e)) : i && i(e)
                                            }
                                        }, "desktop-collection-".concat(e.address))
                                    }))]
                                })
                            })]
                        }), D && (0, n.jsx)(Vt, {
                            isOpen: !0,
                            actionClose: function() {
                                B((0, l.Dc)(!1))
                            }
                        })]
                    })
                },
                Yt = s(60734),
                $t = s(61257),
                Jt = s(11861),
                Gt = s.n(Jt),
                Qt = s(87805),
                qt = s(19755),
                Xt = s(96360),
                es = s(951);

            function ts(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var ss = function(e) {
                    var t = e.tokens,
                        s = e.tokenSelectedIndex,
                        i = e.tokenAmount,
                        c = e.isOpen,
                        o = void 0 !== c && c,
                        d = e.isEditingAmount,
                        x = void 0 !== d && d,
                        m = e.isTaker,
                        p = void 0 !== m && m,
                        h = e.isMoonpayVisible,
                        g = void 0 !== h && h,
                        b = e.action,
                        j = e.actionClose,
                        y = e.onRemove,
                        v = (0, f.Z)("common").t,
                        w = (0, r.useRef)(!1),
                        N = (0, r.useState)(o),
                        k = N[0],
                        C = N[1],
                        S = (0, r.useState)(i),
                        E = S[0],
                        _ = S[1],
                        L = (0, r.useState)(""),
                        F = L[0],
                        R = L[1],
                        Z = (0, r.useState)(!1),
                        I = Z[0],
                        A = Z[1],
                        M = (0, r.useState)(!1),
                        z = M[0],
                        B = M[1],
                        O = (0, r.useState)(),
                        P = O[0],
                        U = O[1],
                        D = (0, r.useState)(s),
                        V = D[0],
                        H = D[1],
                        W = (0, r.useState)(!1),
                        K = W[0],
                        Y = W[1],
                        $ = (0, a.T)(),
                        J = (0, a.C)((function(e) {
                            return e
                        })).trademodal,
                        G = J.taker,
                        Q = J.maker;
                    return (0, r.useEffect)((function() {
                        return w.current = !0,
                            function() {
                                w.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        G && Q && (p && G.collector && w.current ? R(G.collector.address) : Q.collector && w.current && R(Q.collector.address))
                    }), []), (0, n.jsx)(n.Fragment, {
                        children: k && (0, n.jsx)("div", {
                            className: "".concat(Gt().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Gt().cryptoTokenModal, " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] text-center overflow-y-scroll scrollbar-hide lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-white",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-lg font-semibold text-primary-blue lg:text-xl",
                                        children: x ? (0, n.jsx)(n.Fragment, {
                                            children: v("editAmountLabel")
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: v("selectedDesiredLabel")
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "flex w-full justify-center items-center mt-[24px]",
                                        children: F && F.length > 0 && (0, n.jsx)(Qt.Z, {
                                            tokenAmount: E,
                                            tokens: t,
                                            tokenSelectedIndex: V,
                                            userAddress: F,
                                            placeholder: "0.00",
                                            showBalance: !p,
                                            onInsufficientFunds: function() {
                                                Y(!0)
                                            },
                                            onValueChange: function(e) {
                                                var t = e.value,
                                                    s = e.amountBase,
                                                    n = e.balance,
                                                    r = e.currentTokenIndex;
                                                if (A(!1), s && n && t) {
                                                    if (p) {
                                                        if (0 === parseFloat(t)) return void B(!1)
                                                    } else if (0 === parseFloat(t) || s.gt(n)) return void B(!1);
                                                    _(t), H(r), U(s), B(!0)
                                                } else _("0"), B(!1)
                                            },
                                            alreadyFocused: x,
                                            animationOnFocused: !0,
                                            onTokenChange: function() {
                                                A(!0)
                                            }
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                                    children: [I ? (0, n.jsx)(u.Z, {
                                        text: v(x ? "saveCapitalizedLabel" : "addCapitalizedLabel"),
                                        type: {
                                            class: "primary",
                                            icon: !1,
                                            hasColoredBg: !1
                                        },
                                        size: "large",
                                        initialState: {
                                            state: "disabled"
                                        },
                                        className: "mb-[16px] lg:mb-[auto]"
                                    }) : (0, n.jsx)(n.Fragment, {
                                        children: z ? (0, n.jsx)(u.Z, {
                                            text: v(x ? "saveCapitalizedLabel" : "addCapitalizedLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !1,
                                                hasColoredBg: !1
                                            },
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "mb-[16px] lg:mb-[auto]",
                                            onClick: function() {
                                                ts(b, Function) && b(), x ? p ? ("ERC20" === t[V].type ? $((0, l.xp)({
                                                    tokenAddress: t[V].address,
                                                    amount: P ? P.toString() : "",
                                                    amountHumanReadable: E
                                                })) : $((0, l.CO)({
                                                    type: t[V].type,
                                                    amount: P ? P.toString() : "",
                                                    amountHumanReadable: E
                                                })), $((0, l.Gu)())) : ("ERC20" === t[V].type ? $((0, l.$N)({
                                                    tokenAddress: t[V].address,
                                                    amount: P ? P.toString() : "",
                                                    amountHumanReadable: E
                                                })) : $((0, l.Qw)({
                                                    type: t[V].type,
                                                    amount: P ? P.toString() : "",
                                                    amountHumanReadable: E
                                                })), $((0, l.Gu)())) : ($(p ? (0, l.c6)({
                                                    id: "",
                                                    type: t[V].type,
                                                    amount: P ? P.toString() : "",
                                                    amountHumanReadable: E,
                                                    owner: F,
                                                    collection: {
                                                        name: t[V].name,
                                                        statusVerification: t[V].statusVerification,
                                                        address: t[V].address,
                                                        imageUrl: t[V].imageUrl,
                                                        networkId: t[V].networkId,
                                                        abi: t[V].abi,
                                                        type: t[V].type,
                                                        symbol: t[V].symbol,
                                                        createdAt: t[V].createdAt
                                                    },
                                                    imageSrc: t[V].imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                }) : (0, l.TG)({
                                                    id: "",
                                                    type: t[V].type,
                                                    amount: P ? P.toString() : "",
                                                    amountHumanReadable: E,
                                                    owner: F,
                                                    collection: {
                                                        name: t[V].name,
                                                        statusVerification: t[V].statusVerification,
                                                        address: t[V].address,
                                                        imageUrl: t[V].imageUrl,
                                                        networkId: t[V].networkId,
                                                        abi: t[V].abi,
                                                        type: t[V].type,
                                                        symbol: t[V].symbol,
                                                        createdAt: t[V].createdAt
                                                    },
                                                    imageSrc: t[V].imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                })), $((0, l.Gu)())), C(!1)
                                            }
                                        }) : (0, n.jsx)("div", {
                                            children: (0, n.jsx)(u.Z, {
                                                text: v(x ? "saveCapitalizedLabel" : "addCapitalizedLabel"),
                                                type: {
                                                    class: "primary",
                                                    icon: !1,
                                                    hasColoredBg: !1
                                                },
                                                size: "large",
                                                initialState: {
                                                    state: "disabled"
                                                },
                                                className: "mb-[16px] lg:mb-[auto]"
                                            })
                                        })
                                    }), !x && !0 === g && K && (0, n.jsx)("div", {
                                        children: (0, n.jsx)(u.Z, {
                                            text: v("topUpMoonpayLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            iconSrc: es.Z.src,
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "ml-[2px] px-[28px]",
                                            onClick: function() {
                                                $((0, T.gj)(!0))
                                            }
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-between items-start",
                                        children: [(0, n.jsx)(u.Z, {
                                            text: v(x ? "cancelLabel" : "closeLabel"),
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
                                                ts(j, Function) && j(), C(!1)
                                            }
                                        }), x && (0, n.jsxs)("div", {
                                            className: "flex items-center justify-center mt-[15px] ml-[24px] cursor-pointer",
                                            onClick: function() {
                                                y && y(), $((0, l.Gu)())
                                            },
                                            onMouseEnter: function(e) {
                                                document.getElementById("trash-icon").src = Xt.Z.src;
                                                var t = document.getElementById("remove-label");
                                                t.classList.add("text-primary-dark-blue"), t.classList.add("underline"), t.classList.remove("text-primary-blue")
                                            },
                                            onMouseLeave: function(e) {
                                                document.getElementById("trash-icon").src = qt.Z.src;
                                                var t = document.getElementById("remove-label");
                                                t.classList.remove("text-primary-dark-blue"), t.classList.remove("underline"), t.classList.add("text-primary-blue")
                                            },
                                            children: [(0, n.jsx)("img", {
                                                id: "trash-icon",
                                                src: qt.Z.src,
                                                className: "w-[16px] mr-[4px]",
                                                onMouseEnter: function(e) {
                                                    document.getElementById("trash-icon").src = Xt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.add("text-primary-dark-blue"), t.classList.add("underline"), t.classList.remove("text-primary-blue")
                                                },
                                                onMouseLeave: function(e) {
                                                    document.getElementById("trash-icon").src = qt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.remove("text-primary-dark-blue"), t.classList.remove("underline"), t.classList.add("text-primary-blue")
                                                }
                                            }), (0, n.jsx)("span", {
                                                id: "remove-label",
                                                className: "text-primary-blue text-base font-semibold hover:underline hover:text-primary-dark-blue",
                                                onMouseEnter: function(e) {
                                                    document.getElementById("trash-icon").src = Xt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.add("text-primary-dark-blue"), t.classList.add("underline"), t.classList.remove("text-primary-blue")
                                                },
                                                onMouseLeave: function(e) {
                                                    document.getElementById("trash-icon").src = qt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.remove("text-primary-dark-blue"), t.classList.remove("underline"), t.classList.add("text-primary-blue")
                                                },
                                                children: v("removeLabel")
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                ns = s(27616),
                rs = s.n(ns);
            var ls = function(e) {
                    var t = e.isModalOpen,
                        s = e.actionClose,
                        i = e.isTaker,
                        c = void 0 !== i && i,
                        o = e.isMoonpayVisible,
                        d = void 0 !== o && o,
                        u = (0, f.Z)("common").t,
                        x = (0, r.useRef)(!1),
                        m = (0, r.useRef)(null),
                        p = (0, r.useState)([]),
                        h = p[0],
                        g = p[1],
                        b = (0, r.useState)(""),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(null),
                        w = v[0],
                        N = v[1],
                        k = (0, r.useState)(!1),
                        E = k[0],
                        T = k[1],
                        _ = (0, r.useState)(0),
                        L = _[0],
                        F = _[1],
                        R = (0, r.useState)(!1),
                        Z = R[0],
                        I = R[1],
                        A = (0, r.useState)(0),
                        M = A[0],
                        z = A[1],
                        B = (0, r.useState)(10)[0],
                        O = (0, r.useState)(0),
                        P = O[0],
                        U = O[1],
                        D = (0, r.useState)(!1),
                        V = D[0],
                        H = D[1],
                        W = (0, r.useState)(!1),
                        K = W[0],
                        Y = W[1],
                        $ = (0, a.T)(),
                        J = (0, a.C)((function(e) {
                            return e
                        })),
                        G = J.waccount,
                        Q = J.trademodal,
                        q = G.currentNetworkId,
                        X = G.account,
                        ee = Q.taker,
                        te = function(e) {
                            m.current && X && m.current.getCollections({
                                userAddress: X,
                                networkId: q || "*",
                                searchType: "TKN",
                                skip: M,
                                take: B,
                                queryString: e && e.length > 0 ? e : void 0
                            }).then((function(e) {
                                if (e) {
                                    var t = e.data[0],
                                        s = t.rows,
                                        n = t.count;
                                    x.current && U(n), 0 === h.length ? x.current && g(s) : x.current && g(h.concat(s))
                                }
                            })).catch((function(e) {
                                (0, ht.$)(e, $)
                            })).finally((function() {
                                x.current && I(!1)
                            }))
                        },
                        se = function() {
                            return w && w.amountHumanReadable ? w.amountHumanReadable : "0"
                        },
                        ne = function() {
                            return !!w
                        };
                    return (0, r.useEffect)((function() {
                        return x.current = !0, m.current = new C.k_({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), m.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }),
                            function() {
                                x.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        x.current && (U(0), z(0), g([]), I(!0))
                    }), [j]), (0, r.useEffect)((function() {
                        P > h.length ? x.current && (z(M + 10), H(!0)) : x.current && H(!1)
                    }), [h]), (0, r.useEffect)((function() {
                        Z && te(j)
                    }), [Z]), (0, r.useEffect)((function() {
                        if (ee && ee.assets) {
                            var e = ee.assets.filter((function(e) {
                                return "ERC20" === e.type || "NATIVE" === e.type
                            }));
                            e.length > 0 ? N(e[0]) : N(null)
                        }
                    }), [ee]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(st.Z, {
                            isOpen: t,
                            actionClose: s,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h4", {
                                    className: "text-lg font-semibold text-center text-primary-blue",
                                    children: u("selectDesiredTokenLabel")
                                }), (0, n.jsx)("div", {
                                    className: "mt-[24px] text-center",
                                    children: (0, n.jsx)(tt.Z, {
                                        placeholder: u("searchTokenNameAddressLabel"),
                                        setFilter: function(e) {
                                            y(e)
                                        },
                                        className: "h-[52px]"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-[48px]",
                                    children: (0, n.jsx)(dt.Z, {
                                        dataLength: h.length,
                                        next: te,
                                        hasMore: V,
                                        loader: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center",
                                            children: (0, n.jsx)("img", {
                                                src: S.Z.src,
                                                className: "".concat(rs().rotating),
                                                width: 24,
                                                height: 24
                                            })
                                        }),
                                        scrollableTarget: "scrollable-modal",
                                        style: {
                                            overflow: "initial"
                                        },
                                        children: h.map((function(e, t) {
                                            return (0, n.jsx)($t.Z, {
                                                tokenName: e.name,
                                                tokenImageSrc: e.imageUrl ? e.imageUrl : "",
                                                onClick: function() {
                                                    F(t), T(!0)
                                                },
                                                enabled: !w || ("ERC20" === e.type ? e.address.toLowerCase() === w.collection.address.toLowerCase() : e.type === w.type),
                                                className: "mt-[8px]"
                                            }, "token-item-".concat(t))
                                        }))
                                    })
                                }), E && (0, n.jsx)(ss, {
                                    tokens: h.filter((function(e, t) {
                                        return t === L
                                    })),
                                    tokenSelectedIndex: 0,
                                    tokenAmount: se(),
                                    isEditingAmount: ne(),
                                    isTaker: c,
                                    isOpen: !0,
                                    action: function() {
                                        T(!1), $((0, l.eY)(!1))
                                    },
                                    actionClose: function() {
                                        T(!1), $((0, l.eY)(!1))
                                    },
                                    onRemove: function() {
                                        w && "NATIVE" === w.type ? $((0, l.sX)(w)) : w && "ERC20" === w.type && $((0, l.zs)(w)), T(!1), $((0, l.eY)(!1))
                                    }
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "".concat(!1 === K ? "".concat(rs().overlay) : "", " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            children: [(0, n.jsx)("div", {
                                className: "".concat(!0 === K && "hidden", " ").concat(rs().erc20Tokens, " fixed flex flex-col bg-primary-white z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-[304px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                children: (0, n.jsxs)("section", {
                                    className: "hidden lg:block",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center w-full",
                                        children: [(0, n.jsx)("div", {
                                            className: "flex items-center justify-center w-[32px] h-[32px]",
                                            children: (0, n.jsx)("img", {
                                                src: At.Z.src,
                                                className: "cursor-pointer",
                                                onClick: function() {
                                                    var e, t;
                                                    e = s, (null != (t = Function) && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t) && s()
                                                },
                                                width: 26,
                                                height: 26
                                            })
                                        }), (0, n.jsx)("h4", {
                                            className: "text-xl font-semibold text-primary-blue mt-[16px]",
                                            children: u("selectDesiredTokenLabel")
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[40px]",
                                        children: (0, n.jsx)(tt.Z, {
                                            placeholder: u("searchTokenNameAddressLabel"),
                                            setFilter: function(e) {
                                                y(e)
                                            },
                                            className: "h-[52px]"
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[40px] max-h-[504px] ".concat(rs().scrollbar, " overflow-y-scroll scrollbar-hide overflow-x-hidden px-[3px]"),
                                        id: "collections-scrollable",
                                        children: (0, n.jsx)(dt.Z, {
                                            dataLength: h.length,
                                            next: te,
                                            hasMore: !0,
                                            loader: (0, n.jsx)("div", {
                                                className: "flex justify-center items-center",
                                                children: (0, n.jsx)("img", {
                                                    src: S.Z.src,
                                                    className: "".concat(rs().rotating, " w-[24px] h-[24px]")
                                                })
                                            }),
                                            scrollableTarget: "collections-scrollable",
                                            style: {
                                                overflow: "initial"
                                            },
                                            children: h.map((function(e, t) {
                                                return (0, n.jsx)($t.Z, {
                                                    tokenName: e.name,
                                                    tokenImageSrc: e.imageUrl ? e.imageUrl : "",
                                                    onClick: function() {
                                                        F(t), T(!0), Y(!0)
                                                    },
                                                    className: "mt-[8px]",
                                                    enabled: !w || ("ERC20" === e.type ? e.address.toLowerCase() === w.collection.address.toLowerCase() : e.type === w.type)
                                                }, "token-item-".concat(t))
                                            }))
                                        })
                                    })]
                                })
                            }), E && (0, n.jsx)(ss, {
                                tokens: h.filter((function(e, t) {
                                    return t === L
                                })),
                                tokenSelectedIndex: 0,
                                tokenAmount: se(),
                                isEditingAmount: ne(),
                                isTaker: c,
                                isMoonpayVisible: d,
                                isOpen: !0,
                                action: function() {
                                    T(!1), $((0, l.eY)(!1))
                                },
                                actionClose: function() {
                                    T(!1), $((0, l.eY)(!1))
                                },
                                onRemove: function() {
                                    w && "NATIVE" === w.type ? $((0, l.sX)(w)) : w && "ERC20" === w.type && $((0, l.zs)(w)), T(!1), $((0, l.eY)(!1))
                                }
                            })]
                        })]
                    })
                },
                as = s(97110),
                is = s(3110),
                cs = s(19722),
                os = s(73811),
                ds = function(e) {
                    var t = e.isCurrent,
                        s = (0, f.Z)("common").t,
                        i = (0, r.useRef)(!1),
                        c = (0, r.useState)(!1),
                        o = c[0],
                        d = c[1],
                        x = (0, r.useState)([]),
                        m = (x[0], x[1]),
                        p = (0, r.useState)(),
                        h = p[0],
                        g = p[1],
                        b = (0, r.useState)(null),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(1),
                        w = v[0],
                        N = (v[1], (0, r.useState)(0)),
                        k = (N[0], N[1]),
                        C = (0, r.useState)(!1),
                        S = C[0],
                        E = C[1],
                        T = (0, r.useState)(!1),
                        _ = T[0],
                        L = T[1],
                        Z = (0, r.useState)(),
                        I = Z[0],
                        A = Z[1],
                        M = (0, r.useState)([]),
                        z = M[0],
                        B = M[1],
                        O = (0, r.useState)(!1),
                        U = O[0],
                        D = O[1],
                        V = (0, r.useState)([])[0],
                        H = (0, a.C)((function(e) {
                            return e
                        })),
                        W = H.trademodal,
                        K = H.waccount,
                        Y = (0, a.T)(),
                        $ = W.isERC20ModalOpen,
                        J = W.maker,
                        G = K.currentNetworkId,
                        Q = function(e, t) {
                            var s, n = J && J.collector ? J.collector.address : "";
                            G && (s = (0, R.f)("getNftCollectionAssetsByOwner", [G, e.address, n, "50", j || "null"]), (0, F.bf)(s).then((function(e) {
                                var s = e.data[0],
                                    n = (s.response, s.nfts),
                                    r = s.continuation,
                                    l = s.total;
                                i.current && (k(l), E(!1)), 0 === n.length ? i.current && B(n) : i.current && B(z.concat(n)), r ? i.current && y(r) : i.current && y(null), t && i.current && t("default")
                            })).catch((function(e) {
                                i.current && E(!1), t && i.current && t("default"), console.log(e)
                            })))
                        },
                        q = function(e, t) {
                            return e > 0 && t > 0 ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " + ").concat(t, " ").concat(s("cryptoSelectedLabel")) : e > 0 ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " selected") : t > 0 ? "".concat(t, " ").concat(s("crypto selected")) : "0 NFTs ".concat(s("selectedLabel"))
                        },
                        X = function(e, t) {
                            if (J && J.assets.find((function(s) {
                                    var n;
                                    return s.collection.address.toLowerCase() === t.address.toLowerCase() && e.tokenId.toLowerCase() === (null === (n = s.id) || void 0 === n ? void 0 : n.toLowerCase())
                                }))) return !0;
                            return !1
                        },
                        ee = function(e, t) {
                            if (J) {
                                var s = J.assets.find((function(s) {
                                    var n;
                                    return s.collection.address.toLowerCase() === t.address.toLowerCase() && e.tokenId.toLowerCase() === (null === (n = s.id) || void 0 === n ? void 0 : n.toLowerCase())
                                }));
                                if (s && s.amount) return s.amount
                            }
                            return "0"
                        };
                    return (0, r.useEffect)((function() {
                        return i.current = !0,
                            function() {
                                i.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (o) {
                            var e = function() {
                                window.innerWidth > 1023 && i.current && d(!1)
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [o]), (0, r.useEffect)((function() {
                        "null" !== j ? i.current && L(!0) : i.current && L(!1)
                    }), [j, w]), (0, r.useEffect)((function() {
                        I && Q(I)
                    }), [I]), (0, r.useEffect)((function() {
                        if (J && J.assets) {
                            var e = new Array,
                                t = 0;
                            J.assets.forEach((function(s) {
                                "ERC20" === s.type || "NATIVE" === s.type ? e.push({
                                    text: s.amountHumanReadable ? s.amountHumanReadable : "",
                                    isDisabled: !1,
                                    isEditable: !0,
                                    tokenSymbol: s.collection.symbol ? s.collection.symbol : "",
                                    icon: s.imageSrc ? s.imageSrc : "",
                                    asset: s
                                }) : t++
                            })), i.current && (g({
                                text: q(t, e.length),
                                isDisabled: !(t > 0 || e.length > 0),
                                isEditable: !1,
                                tokenSymbol: "",
                                icon: "",
                                asset: null
                            }), m(e))
                        }
                    }), [null === J || void 0 === J ? void 0 : J.assets]), (0, n.jsx)(P.Z, {
                        isCurrent: t,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("section", {
                                className: "grid grid-cols-12",
                                children: [(0, n.jsx)("div", {
                                    className: "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                                    children: (0, n.jsx)(Kt, {
                                        isModalOpen: !1,
                                        actionClose: function() {},
                                        onClickItem: function(e) {
                                            e.address != (null === I || void 0 === I ? void 0 : I.address) && (B([]), y(null), E(!0), A(e))
                                        }
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "col-span-12 pt-[30px] lg:pt-0 lg:col-span-9 lg:pl-[32px] lg:min-h-[732px]",
                                    children: (0, n.jsx)("div", {
                                        className: "w-full lg:min-h-[732px]",
                                        children: (0, n.jsxs)("div", {
                                            className: "w-full lg:min-h-[732px]",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex flex-col lg:flex-row-reverse",
                                                children: [J && (0, n.jsxs)("div", {
                                                    className: "flex items-center justify-between lg:items-start lg:flex-row-reverse",
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "flex items-center lg:flex-row-reverse",
                                                        children: [(0, n.jsx)("div", {
                                                            className: "flex items-center mr-[16px] lg:ml-[16px] lg:mr-[auto]",
                                                            children: J && J.collector && (0, n.jsx)(n.Fragment, {
                                                                children: (0, n.jsx)(ae.Z, {
                                                                    address: J.collector.address,
                                                                    src: J.collector.imageUrl,
                                                                    isNFT: J.collector.isNft,
                                                                    sizesClassNames: "w-[24px] h-[24px]",
                                                                    jazziconSize: {
                                                                        defaultSize: 24,
                                                                        breakpoints: [],
                                                                        sizes: []
                                                                    }
                                                                })
                                                            })
                                                        }), (0, n.jsxs)("div", {
                                                            className: "flex flex-col",
                                                            children: [(0, n.jsx)("span", {
                                                                className: "text-base font-semibold text-primary-dark-blue",
                                                                children: s("yourWalletLabel")
                                                            }), (0, n.jsx)("span", {
                                                                className: "rubik text-xs font-regular cursor-pointer text-primary-gray",
                                                                children: J && J.collector && (0, n.jsx)(os.Z, {
                                                                    text: (0, le.x)(J.collector.address),
                                                                    url: (0, Ve.w)(G, J.collector.address),
                                                                    isCustom: !0,
                                                                    isTargetBlank: !0,
                                                                    customColor: "#979dac",
                                                                    weight: "font-regular",
                                                                    className: "text-xs"
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center lg:mr-[16px] lg:h-[44px]"
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "mt-[24px] lg:flex-1 lg:mt-[auto]",
                                                    children: (0, n.jsx)("h3", {
                                                        className: "text-left text-primary-dark-blue text-2xl font-semibold lg:pr-[30px]",
                                                        children: s("selectWhatYouWantToOfferLabel")
                                                    })
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[24px]",
                                                children: h && (0, n.jsx)(Te, {
                                                    text: h.text,
                                                    isDisabled: h.isDisabled,
                                                    isEditable: h.isEditable,
                                                    onClick: function() {
                                                        h.isDisabled || Y((0, l.Rd)(!0))
                                                    }
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[20px]",
                                                children: (0, n.jsx)("div", {
                                                    className: "rounded-[100px] p-[22px] flex items-center border-[1px] border-primary-dark-blue bg-primary-white select-none cursor-default border-solid",
                                                    children: (0, n.jsxs)("span", {
                                                        className: "text-primary-dark-blue text-sm font-regular",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "font-semibold",
                                                            children: s("cryptoDisabledLabel")
                                                        }), " ", s("askYourCounterpartyTokenLabel")]
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[32px] lg:hidden",
                                                children: (0, n.jsx)(u.Z, {
                                                    text: s("filterCollectionsLabel"),
                                                    type: {
                                                        class: "primary",
                                                        icon: !0,
                                                        hasColoredBg: !1
                                                    },
                                                    size: "large",
                                                    initialState: {
                                                        state: "default"
                                                    },
                                                    iconSrc: Yt.Z.src,
                                                    showNotifications: !0,
                                                    notificationsNumber: function() {
                                                        if (J) {
                                                            var e = J.assets,
                                                                t = 0;
                                                            return e.forEach((function(e) {
                                                                "ERC721" !== e.type && "ERC1155" !== e.type || t++
                                                            })), t
                                                        }
                                                        return 0
                                                    }(),
                                                    onClick: function() {
                                                        d(!0)
                                                    }
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[28px]",
                                                children: !1 === S ? (0, n.jsx)(n.Fragment, {
                                                    children: z.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                                        children: [(0, n.jsx)("div", {
                                                            className: "grid justify-items-center gap-x-[16px] gap-y-[16px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 x2l:grid-cols-4",
                                                            children: I && z.map((function(e, t) {
                                                                var s, r;
                                                                return (0, n.jsx)(De, {
                                                                    NFTSrc: (0, cs.G)(e.cachedFileUrl),
                                                                    NFTId: e.tokenId,
                                                                    standard: I.type,
                                                                    collection: I,
                                                                    address: (null === J || void 0 === J || null === (s = J.collector) || void 0 === s ? void 0 : s.address) ? null === J || void 0 === J || null === (r = J.collector) || void 0 === r ? void 0 : r.address : "",
                                                                    isSelected: X(e, I),
                                                                    isTaker: !1,
                                                                    amount: ee(e, I),
                                                                    hasPlaceholder: (0, cs.A)(e.cachedFileUrl),
                                                                    onClick: function(t, s) {
                                                                        var n, r;
                                                                        s ? "ERC721" === I.type && (Y((0, l.TG)({
                                                                            id: e.tokenId,
                                                                            type: I.type,
                                                                            amount: null,
                                                                            amountHumanReadable: null,
                                                                            owner: (null === J || void 0 === J || null === (n = J.collector) || void 0 === n ? void 0 : n.address) || "",
                                                                            collection: I,
                                                                            imageSrc: (0, cs.G)(e.cachedFileUrl),
                                                                            isApproved: !1,
                                                                            hasPlaceholder: (0, cs.A)(e.cachedFileUrl)
                                                                        })), Y((0, l.Gu)())) : "ERC721" === I.type && (Y((0, l.iB)({
                                                                            id: e.tokenId,
                                                                            type: I.type,
                                                                            amount: null,
                                                                            amountHumanReadable: null,
                                                                            owner: (null === J || void 0 === J || null === (r = J.collector) || void 0 === r ? void 0 : r.address) || "",
                                                                            collection: I,
                                                                            imageSrc: (0, cs.G)(e.cachedFileUrl),
                                                                            isApproved: !1,
                                                                            hasPlaceholder: (0, cs.A)(e.cachedFileUrl)
                                                                        })), Y((0, l.Gu)()))
                                                                    }
                                                                }, "nft-item-".concat(t))
                                                            }))
                                                        }), _ && (0, n.jsx)("div", {
                                                            className: "flex justify-center items-center w-full h-[80px]",
                                                            children: (0, n.jsx)(u.Z, {
                                                                text: s("loadMoreLabel"),
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
                                                                    I && Q(I, e), e && e("loading")
                                                                }
                                                            })
                                                        })]
                                                    }) : (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-[500px]",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex flex-col items-center justify-center h-full w-full",
                                                            children: I ? (0, n.jsxs)(n.Fragment, {
                                                                children: [(0, n.jsx)("img", {
                                                                    src: as.Z.src,
                                                                    className: "w-[88px] h-[88px]"
                                                                }), (0, n.jsx)("div", {
                                                                    className: "text-xl font-semibold text-primary-dark-blue mt-[24px]",
                                                                    children: s("sorryLabel")
                                                                }), (0, n.jsx)("div", {
                                                                    className: "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                                    children: s("noAssetsFoundLabel")
                                                                })]
                                                            }) : (0, n.jsxs)(n.Fragment, {
                                                                children: [(0, n.jsx)("img", {
                                                                    src: is.Z.src,
                                                                    className: "w-[173px] hidden lg:block"
                                                                }), (0, n.jsx)("img", {
                                                                    src: Mt.Z.src,
                                                                    className: "w-[173px] block lg:hidden"
                                                                }), (0, n.jsx)("span", {
                                                                    className: "text-base font-regular text-primary-dark-blue text-center mt-[16px]",
                                                                    children: s("selectCollectionShowNFTsLabel")
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }) : (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-[500px]",
                                                        children: (0, n.jsx)(mt.Z, {
                                                            isWhite: !1,
                                                            className: "w-[30px] h-[30px]"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), o && (0, n.jsx)(Kt, {
                                isModalOpen: o,
                                actionClose: function() {
                                    d(!1)
                                },
                                onClickItem: function(e) {
                                    e.address != (null === I || void 0 === I ? void 0 : I.address) && (B([]), y(null), E(!0), A(e))
                                }
                            }), $ && (0, n.jsx)(ls, {
                                isModalOpen: !0,
                                actionClose: function() {
                                    Y((0, l.eY)(!1))
                                },
                                isTaker: !1,
                                isMoonpayVisible: !0
                            }), U && (0, n.jsx)(ss, {
                                tokens: new Array(V[0].collection),
                                tokenSelectedIndex: 0,
                                tokenAmount: V[0].amountHumanReadable ? V[0].amountHumanReadable : "0",
                                isEditingAmount: !0,
                                isTaker: !1,
                                isOpen: !0,
                                action: function() {
                                    D(!1)
                                },
                                actionClose: function() {
                                    D(!1)
                                },
                                onRemove: function() {
                                    "NATIVE" === V[0].type ? Y((0, l.Bd)(V[0])) : Y((0, l.TJ)(V[0])), D(!1)
                                }
                            })]
                        })
                    })
                },
                us = s(12348),
                xs = s(45511),
                ms = s(9197),
                fs = function(e) {
                    var t, s = e.isCurrent,
                        i = (0, f.Z)("common").t,
                        c = (0, r.useRef)(!1),
                        o = (0, r.useState)(!1),
                        d = o[0],
                        x = o[1],
                        m = (0, r.useState)([]),
                        p = m[0],
                        h = m[1],
                        g = (0, r.useState)(),
                        b = g[0],
                        j = g[1],
                        y = (0, r.useState)(null),
                        v = y[0],
                        w = y[1],
                        N = (0, r.useState)(1),
                        k = N[0],
                        C = (N[1], (0, r.useState)(0)),
                        S = (C[0], C[1]),
                        E = (0, r.useState)(!1),
                        T = E[0],
                        _ = E[1],
                        L = (0, r.useState)(!1),
                        Z = L[0],
                        I = L[1],
                        A = (0, r.useState)(),
                        M = A[0],
                        z = A[1],
                        B = (0, r.useState)([]),
                        O = B[0],
                        U = B[1],
                        D = (0, r.useState)(!1),
                        V = D[0],
                        H = D[1],
                        W = (0, r.useState)([]),
                        K = W[0],
                        Y = W[1],
                        $ = (0, r.useState)([]),
                        J = $[0],
                        G = $[1],
                        Q = (0, r.useState)([]),
                        q = Q[0],
                        X = Q[1],
                        ee = (0, a.C)((function(e) {
                            return e
                        })),
                        te = ee.trademodal,
                        se = ee.waccount,
                        ne = (0, a.T)(),
                        re = te.isERC20ModalOpen,
                        ie = te.taker,
                        ce = se.jwtToken,
                        oe = se.currentNetworkId,
                        de = (0, r.useState)((null === ie || void 0 === ie || null === (t = ie.collector) || void 0 === t ? void 0 : t.isFavourite) || 0),
                        ue = (de[0], de[1]),
                        xe = function() {
                            console.log("server error: [401]"), ne((0, l.jO)()), ne((0, l.r$)(!1)), ne((0, ut.up)(!0)), ne((0, ut.kt)()), (0, xt.uM)({
                                account: null,
                                isConnected: !1,
                                currentNetworkId: null,
                                currentNetworkName: null,
                                nonce: null,
                                username: null,
                                email: null,
                                firstLogin: null,
                                createdAt: null,
                                updatedAt: null,
                                jwtToken: null,
                                walletProviderName: null,
                                walletProviderIconURL: null,
                                avatarUrl: null,
                                isNFT: 0,
                                isVerified: 0,
                                sessionExpired: !1,
                                bio: null,
                                tokenId: null,
                                collectionAddress: null
                            })
                        },
                        me = function() {
                            console.log("server error: [500]")
                        },
                        fe = function(e, t) {
                            var s, n = ie && ie.collector ? ie.collector.address : "";
                            oe && (s = (0, R.f)("getNftCollectionAssetsByOwner", [oe, e.address, n, "50", v || "null"]), (0, F.bf)(s).then((function(e) {
                                var s = e.data[0],
                                    n = (s.response, s.nfts),
                                    r = s.continuation,
                                    l = s.total;
                                c.current && (S(l), _(!1)), 0 === n.length ? c.current && U(n) : c.current && U(O.concat(n)), r ? c.current && w(r) : c.current && w(null), t && c.current && t("default")
                            })).catch((function(e) {
                                c.current && _(!1), t && c.current && t("default"), console.log(e)
                            })))
                        },
                        pe = function(e, t) {
                            return e > 0 && t > 0 ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " + ").concat(t, " ").concat(i("cryptoSelectedLabel")) : e > 0 ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " selected") : t > 0 ? "".concat(t, " ").concat(i("cryptoSelectedLabel")) : "0 NFTs ".concat(i("selectedLabel"))
                        },
                        he = function(e, t) {
                            if (ie && ie.assets.find((function(s) {
                                    var n;
                                    return s.collection.address.toLowerCase() === t.address.toLowerCase() && e.tokenId.toLowerCase() === (null === (n = s.id) || void 0 === n ? void 0 : n.toLowerCase())
                                }))) return !0;
                            return !1
                        },
                        ge = function(e, t) {
                            if (ie) {
                                var s = ie.assets.find((function(s) {
                                    var n;
                                    return s.collection.address.toLowerCase() === t.address.toLowerCase() && e.tokenId.toLowerCase() === (null === (n = s.id) || void 0 === n ? void 0 : n.toLowerCase())
                                }));
                                if (s && s.amount) return s.amount
                            }
                            return "0"
                        };
                    return (0, r.useEffect)((function() {
                        return c.current = !0,
                            function() {
                                c.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (d) {
                            var e = function() {
                                window.innerWidth > 1023 && c.current && x(!1)
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [d]), (0, r.useEffect)((function() {
                        "null" !== v ? c.current && I(!0) : c.current && I(!1)
                    }), [v, k]), (0, r.useEffect)((function() {
                        M && fe(M)
                    }), [M]), (0, r.useEffect)((function() {
                        if (ie && ie.assets) {
                            var e = new Array,
                                t = 0;
                            ie.assets.forEach((function(s) {
                                "ERC20" === s.type || "NATIVE" === s.type ? e.push({
                                    text: s.amountHumanReadable ? s.amountHumanReadable : "",
                                    isDisabled: !1,
                                    isEditable: !0,
                                    tokenSymbol: s.collection.symbol ? s.collection.symbol : "",
                                    icon: s.imageSrc ? s.imageSrc : "",
                                    asset: s
                                }) : t++
                            })), c.current && (j({
                                text: pe(t, e.length),
                                isDisabled: !(t > 0 || e.length > 0),
                                isEditable: !1,
                                tokenSymbol: "",
                                icon: "",
                                asset: null
                            }), h(e))
                        }
                    }), [null === ie || void 0 === ie ? void 0 : ie.assets]), (0, n.jsx)(P.Z, {
                        isCurrent: s,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("section", {
                                className: "grid grid-cols-12",
                                children: [(0, n.jsx)("div", {
                                    className: "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                                    children: (0, n.jsx)(Kt, {
                                        isModalOpen: !1,
                                        actionClose: function() {},
                                        onClickItem: function(e) {
                                            e.address != (null === M || void 0 === M ? void 0 : M.address) && (U([]), w(null), _(!0), z(e))
                                        }
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "col-span-12 pt-[30px] lg:pt-0 lg:col-span-9 lg:pl-[32px] lg:min-h-[732px]",
                                    children: (0, n.jsx)("div", {
                                        className: "w-full lg:min-h-[732px]",
                                        children: (0, n.jsxs)("div", {
                                            className: "w-full bg-primary-white lg:min-h-[732px]",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex flex-col lg:flex-row-reverse",
                                                children: [ie && (0, n.jsxs)("div", {
                                                    className: "flex items-center justify-between lg:items-start lg:flex-row-reverse",
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "flex items-center lg:flex-row-reverse",
                                                        children: [(0, n.jsx)("div", {
                                                            className: "flex items-center mr-[16px] lg:ml-[16px] lg:mr-[auto]",
                                                            children: ie && ie.collector && (0, n.jsx)(n.Fragment, {
                                                                children: (0, n.jsx)(ae.Z, {
                                                                    address: ie.collector.address,
                                                                    src: ie.collector.imageUrl,
                                                                    isNFT: ie.collector.isNft,
                                                                    sizesClassNames: "w-[24px] h-[24px]",
                                                                    jazziconSize: {
                                                                        defaultSize: 24,
                                                                        breakpoints: [],
                                                                        sizes: []
                                                                    }
                                                                })
                                                            })
                                                        }), (0, n.jsxs)("div", {
                                                            className: "flex flex-col",
                                                            children: [(0, n.jsx)("span", {
                                                                className: "text-base font-semibold text-primary-dark-blue",
                                                                children: ie && ie.collector && (0, n.jsx)(n.Fragment, {
                                                                    children: ie.collector.username ? "@".concat(ie.collector.username) : (0, n.jsx)("span", {
                                                                        className: "text-primary-gray rubik text-xs",
                                                                        children: i("usernameNotSetLabel")
                                                                    })
                                                                })
                                                            }), (0, n.jsx)("span", {
                                                                className: "rubik text-xs font-regular cursor-pointer",
                                                                children: ie && ie.collector && (0, n.jsx)(os.Z, {
                                                                    text: (0, le.x)(ie.collector.address),
                                                                    url: (0, Ve.w)(oe, ie.collector.address),
                                                                    isCustom: !0,
                                                                    isTargetBlank: !0,
                                                                    customColor: "#979dac",
                                                                    weight: "font-regular",
                                                                    className: "text-xs"
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center lg:mr-[16px] lg:h-[44px]",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex items-center justify-center w-[24px] h-[24px]",
                                                            children: ie && ie.collector && (0, n.jsx)(n.Fragment, {
                                                                children: 1 === ie.collector.isFavourite ? (0, n.jsx)("img", {
                                                                    src: bt.Z.src,
                                                                    className: "w-[16px] h-[16px] cursor-pointer",
                                                                    onClick: function(e) {
                                                                        var t, s;
                                                                        e.stopPropagation(), s = (null === (t = ie.collector) || void 0 === t ? void 0 : t.address) || "", q.indexOf(s) > -1 || oe && ce && (X(q.concat([s])), (0, F.U3)((0, R.f)("unfollowUser"), {
                                                                            userFavourite: s
                                                                        }, ce).then((function(e) {
                                                                            var t = JSON.parse(JSON.stringify(q));
                                                                            t = t.splice(t.indexOf(s), 1), c.current && (X(t), ue(0)), ne((0, l.YB)(0))
                                                                        })).catch((function(e) {
                                                                            var t = JSON.parse(JSON.stringify(q));
                                                                            t = t.splice(t.indexOf(s), 1), c.current && X(t), (0, ht.$)(e, void 0, xe, me)
                                                                        })))
                                                                    },
                                                                    onMouseEnter: function(e) {
                                                                        e.target.src = xs.Z.src
                                                                    },
                                                                    onMouseLeave: function(e) {
                                                                        e.target.src = bt.Z.src
                                                                    }
                                                                }) : (0, n.jsx)("img", {
                                                                    src: us.Z.src,
                                                                    className: "w-[16px] h-[16px] cursor-pointer",
                                                                    onClick: function(e) {
                                                                        var t, s;
                                                                        e.stopPropagation(), s = (null === (t = ie.collector) || void 0 === t ? void 0 : t.address) || "", J.indexOf(s) > -1 || oe && ce && (G(J.concat([s])), (0, F.jl)((0, R.f)("followUser"), {
                                                                            userFavourite: s
                                                                        }, ce).then((function(e) {
                                                                            var t = JSON.parse(JSON.stringify(J));
                                                                            t = t.splice(t.indexOf(s), 1), c.current && (G(t), ue(1)), ne((0, l.YB)(1))
                                                                        })).catch((function(e) {
                                                                            var t = JSON.parse(JSON.stringify(J));
                                                                            t = t.splice(t.indexOf(s), 1), c.current && G(t), (0, ht.$)(e, void 0, xe, me)
                                                                        })))
                                                                    },
                                                                    onMouseEnter: function(e) {
                                                                        e.target.src = ms.Z.src
                                                                    },
                                                                    onMouseLeave: function(e) {
                                                                        e.target.src = us.Z.src
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "mt-[24px] lg:flex-1 lg:mt-[auto]",
                                                    children: (0, n.jsx)("h3", {
                                                        className: "text-primary-dark-blue text-2xl font-semibold lg:pr-[30px] lg:w-[500px] lg:text-left ",
                                                        children: i("selectNFTsFromCounterpartyCollectionLabel")
                                                    })
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[24px]",
                                                children: b && (0, n.jsx)(Te, {
                                                    text: b.text,
                                                    isDisabled: b.isDisabled,
                                                    isEditable: b.isEditable,
                                                    onClick: function() {
                                                        b.isDisabled || ne((0, l.Rd)(!0))
                                                    }
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[20px]",
                                                children: (0, n.jsx)(je, {
                                                    actionButtonText: i("addTokensLabel"),
                                                    textEmptyContainer: i("includeCryptoLabel"),
                                                    onClick: function() {
                                                        ne((0, l.eY)(!0))
                                                    },
                                                    disabledCurrency: !1,
                                                    textDisabledContainer: i("disabledCryptoLabel"),
                                                    children: p.length > 0 && p.map((function(e, t) {
                                                        return (0, n.jsx)(Te, {
                                                            text: e.text,
                                                            isDisabled: e.isDisabled,
                                                            isEditable: e.isEditable,
                                                            tokenSymbol: e.tokenSymbol,
                                                            icon: e.icon,
                                                            onClick: function() {
                                                                Y(new Array(e.asset)), H(!0)
                                                            }
                                                        }, "badge-token-".concat(t))
                                                    }))
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[32px] lg:hidden",
                                                children: (0, n.jsx)(u.Z, {
                                                    text: i("filterCollectionsLabel"),
                                                    type: {
                                                        class: "primary",
                                                        icon: !0,
                                                        hasColoredBg: !1
                                                    },
                                                    size: "large",
                                                    initialState: {
                                                        state: "default"
                                                    },
                                                    iconSrc: Yt.Z.src,
                                                    showNotifications: !0,
                                                    notificationsNumber: function() {
                                                        if (ie) {
                                                            var e = ie.assets,
                                                                t = 0;
                                                            return e.forEach((function(e) {
                                                                "ERC721" !== e.type && "ERC1155" !== e.type || t++
                                                            })), t
                                                        }
                                                        return 0
                                                    }(),
                                                    onClick: function() {
                                                        x(!0)
                                                    }
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[28px]",
                                                children: !1 === T ? (0, n.jsx)(n.Fragment, {
                                                    children: O.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                                        children: [(0, n.jsx)("div", {
                                                            className: "grid justify-items-center gap-x-[16px] gap-y-[16px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 x2l:grid-cols-4",
                                                            children: M && O.map((function(e, t) {
                                                                var s, r;
                                                                return (0, n.jsx)(De, {
                                                                    NFTSrc: (0, cs.G)(e.cachedFileUrl),
                                                                    NFTId: e.tokenId,
                                                                    standard: M.type,
                                                                    collection: M,
                                                                    address: (null === ie || void 0 === ie || null === (s = ie.collector) || void 0 === s ? void 0 : s.address) ? null === ie || void 0 === ie || null === (r = ie.collector) || void 0 === r ? void 0 : r.address : "",
                                                                    isSelected: he(e, M),
                                                                    isTaker: !0,
                                                                    amount: ge(e, M),
                                                                    hasPlaceholder: (0, cs.A)(e.cachedFileUrl),
                                                                    onClick: function(t, s) {
                                                                        var n, r;
                                                                        s ? "ERC721" === M.type && (ne((0, l.c6)({
                                                                            id: e.tokenId,
                                                                            type: M.type,
                                                                            amount: null,
                                                                            amountHumanReadable: null,
                                                                            owner: (null === ie || void 0 === ie || null === (n = ie.collector) || void 0 === n ? void 0 : n.address) || "",
                                                                            collection: M,
                                                                            imageSrc: (0, cs.G)(e.cachedFileUrl),
                                                                            isApproved: !1,
                                                                            hasPlaceholder: (0, cs.A)(e.cachedFileUrl)
                                                                        })), ne((0, l.Gu)())) : "ERC721" === M.type && (ne((0, l.E4)({
                                                                            id: e.tokenId,
                                                                            type: M.type,
                                                                            amount: null,
                                                                            amountHumanReadable: null,
                                                                            owner: (null === ie || void 0 === ie || null === (r = ie.collector) || void 0 === r ? void 0 : r.address) || "",
                                                                            collection: M,
                                                                            imageSrc: (0, cs.G)(e.cachedFileUrl),
                                                                            isApproved: !1,
                                                                            hasPlaceholder: (0, cs.A)(e.cachedFileUrl)
                                                                        })), ne((0, l.Gu)()))
                                                                    }
                                                                }, "nft-item-".concat(t))
                                                            }))
                                                        }), Z && (0, n.jsx)("div", {
                                                            className: "flex justify-center items-center w-full h-[80px]",
                                                            children: (0, n.jsx)(u.Z, {
                                                                text: i("loadMoreLabel"),
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
                                                                    M && fe(M, e), e && e("loading")
                                                                }
                                                            })
                                                        })]
                                                    }) : (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-[500px]",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex flex-col items-center justify-center h-full w-full",
                                                            children: M ? (0, n.jsxs)(n.Fragment, {
                                                                children: [(0, n.jsx)("img", {
                                                                    src: as.Z.src,
                                                                    className: "w-[88px] h-[88px]"
                                                                }), (0, n.jsx)("div", {
                                                                    className: "text-xl font-semibold text-primary-dark-blue mt-[24px]",
                                                                    children: i("sorryLabel")
                                                                }), (0, n.jsx)("div", {
                                                                    className: "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                                    children: i("noAssetsFoundLabel")
                                                                })]
                                                            }) : (0, n.jsxs)(n.Fragment, {
                                                                children: [(0, n.jsx)("img", {
                                                                    src: is.Z.src,
                                                                    className: "w-[173px] hidden lg:block"
                                                                }), (0, n.jsx)("img", {
                                                                    src: Mt.Z.src,
                                                                    className: "w-[173px] block lg:hidden"
                                                                }), (0, n.jsx)("span", {
                                                                    className: "text-base font-regular text-primary-dark-blue text-center mt-[16px]",
                                                                    children: i("selectCollectionShowCounterpartyNFTsLabel")
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }) : (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-[500px]",
                                                        children: (0, n.jsx)(mt.Z, {
                                                            isWhite: !1,
                                                            className: "w-[30px] h-[30px]"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), d && (0, n.jsx)(Kt, {
                                isModalOpen: d,
                                actionClose: function() {
                                    x(!1)
                                },
                                onClickItem: function(e) {
                                    e.address != (null === M || void 0 === M ? void 0 : M.address) && (U([]), w(null), _(!0), z(e))
                                }
                            }), re && (0, n.jsx)(ls, {
                                isModalOpen: !0,
                                actionClose: function() {
                                    ne((0, l.eY)(!1))
                                },
                                isTaker: !0
                            }), V && (0, n.jsx)(ss, {
                                tokens: new Array(K[0].collection),
                                tokenSelectedIndex: 0,
                                tokenAmount: K[0].amountHumanReadable ? K[0].amountHumanReadable : "0",
                                isEditingAmount: !0,
                                isTaker: !0,
                                isOpen: !0,
                                action: function() {
                                    H(!1)
                                },
                                actionClose: function() {
                                    H(!1)
                                },
                                onRemove: function() {
                                    "NATIVE" === K[0].type ? ne((0, l.sX)(K[0])) : ne((0, l.zs)(K[0])), H(!1)
                                }
                            })]
                        })
                    })
                },
                ps = s(6089),
                hs = s.n(ps),
                gs = s(43135),
                bs = s.n(gs),
                js = s(90902),
                ys = s(58693),
                vs = function(e) {
                    var t = e.asset,
                        s = e.className,
                        l = void 0 === s ? "" : s,
                        a = e.onClick,
                        i = (0, f.Z)("common").t,
                        c = (0, r.useState)(null),
                        o = c[0],
                        d = c[1],
                        u = (0, k.Ge)().library,
                        x = function(e, t) {
                            return new Promise((function(s, n) {
                                e ? s((0, K.z)("ETHEREUM_DECIMALS_NUMBER")) : new N.CH(t.collection.address, t.collection.abi, u).decimals().then((function(e) {
                                    s(e)
                                })).catch((function(e) {
                                    console.log(e), n(null)
                                }))
                            }))
                        };
                    return (0, r.useEffect)((function() {
                        var e;
                        "NATIVE" !== t.type && "ERC20" !== t.type || (e = t, (0, F.bf)((0, R.f)("getPairValue", ["".concat(e.collection.symbol, "-USD")])).then((function(t) {
                            var s = t.data[0].amount,
                                n = U.O$.from(Number(s).toFixed(0)),
                                r = U.O$.from(e.amount);
                            x("NATIVE" === e.type, e).then((function(e) {
                                var t = D.formatUnits(r.mul(n), e);
                                d("(~ ".concat(new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(Number(t)), ")"))
                            }))
                        })).catch((function(e) {
                            console.log(e)
                        })))
                    }), []), (0, n.jsxs)("div", {
                        className: "flex items-center justify-between ".concat(l),
                        children: [(0, n.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: "ERC20" === t.collection.type || "NATIVE" === t.collection.type ? (0, n.jsx)(Ze.Z, {
                                src: t.collection.imageUrl ? t.collection.imageUrl : Me.Z.src,
                                className: "w-[40px] h-[40px]"
                            }) : (0, n.jsx)("div", {
                                className: "w-[40px] h-[40px] rounded-full",
                                style: {
                                    backgroundImage: "url(".concat(t.imageSrc ? t.imageSrc : Me.Z.src, ")"),
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center"
                                }
                            })
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col flex-1 ml-[20px]",
                            children: [(0, n.jsxs)("span", {
                                className: "flex items-center text-lg font-semibold",
                                children: [(0, n.jsx)(Ie.Z, {
                                    text: "ERC20" === t.type || "NATIVE" === t.type ? "".concat(t.amountHumanReadable, " ").concat(t.collection.symbol) : "#".concat(t.id),
                                    className: "w-[200px] h-[30px]"
                                }), "ERC1155" === t.collection.type && (0, n.jsx)("div", {
                                    className: "flex items-center justify-center rounded-full bg-primary-blue w-[24px] h-[24px]",
                                    children: (0, n.jsx)("span", {
                                        className: "rubik text-xs font-bold text-primary-white",
                                        children: "".concat(t.amount)
                                    })
                                })]
                            }), "NATIVE" === t.type || "ERC20" === t.type ? (0, n.jsxs)("span", {
                                className: "text-primary-gray text-xs font-semibold",
                                children: [!o && i("calculatingLabel"), o && o]
                            }) : (0, n.jsxs)("div", {
                                className: "flex items-center gap-x-1",
                                children: [(0, n.jsx)(Ze.Z, {
                                    src: t.collection.imageUrl ? t.collection.imageUrl : Me.Z.src,
                                    className: "w-[16px] h-[16px]",
                                    badgeClassName: "w-[10px] h-[10px]",
                                    statusVerification: t.collection.statusVerification
                                }), (0, n.jsx)("span", {
                                    className: "text-xxs font-semibold relative top-[2px]",
                                    children: (0, n.jsx)(Ie.Z, {
                                        text: t.collection.name,
                                        className: "w-[180px] h-[20px]"
                                    })
                                })]
                            })]
                        }), "ERC20" === t.collection.type || "NATIVE" === t.collection.type ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                                children: (0, n.jsx)("img", {
                                    src: Ce.Z.src,
                                    className: "cursor-pointer",
                                    onClick: function() {
                                        a && a()
                                    },
                                    width: 24,
                                    height: 24
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidden justify-center items-center w-[32px] h-[32px] lg:flex",
                                children: (0, n.jsx)("img", {
                                    src: js.Z.src,
                                    className: "w-[24px] h-[24px] cursor-pointer",
                                    onMouseEnter: function(e) {
                                        e.target.src = Ce.Z.src
                                    },
                                    onMouseLeave: function(e) {
                                        e.target.src = js.Z.src
                                    },
                                    onClick: function() {
                                        a && a()
                                    }
                                })
                            })]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                                children: (0, n.jsx)("img", {
                                    src: qt.Z.src,
                                    className: "w-[24px] h-[24px] cursor-pointer",
                                    onClick: function() {
                                        a && a()
                                    }
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidde items-center justify-center w-[32px] h-[32px] lg:flex",
                                children: (0, n.jsx)("img", {
                                    src: ys.Z.src,
                                    className: "w-[24px] h-[24px] cursor-pointer",
                                    onMouseEnter: function(e) {
                                        e.target.src = qt.Z.src
                                    },
                                    onMouseLeave: function(e) {
                                        e.target.src = ys.Z.src
                                    },
                                    onClick: function() {
                                        a && a()
                                    }
                                })
                            })]
                        })]
                    })
                },
                ws = s(340),
                Ns = function() {
                    var e = (0, r.useRef)(!1),
                        t = (0, a.C)((function(e) {
                            return e
                        })).trademodal,
                        s = t.maker,
                        i = t.taker,
                        c = t.currentStepMenu,
                        o = (0, r.useState)(!0),
                        d = o[0],
                        u = o[1],
                        x = (0, r.useState)(!0),
                        m = x[0],
                        p = x[1],
                        h = (0, r.useState)([]),
                        g = h[0],
                        b = h[1],
                        j = (0, r.useState)([]),
                        y = j[0],
                        v = j[1],
                        w = (0, r.useState)([]),
                        N = w[0],
                        k = w[1],
                        C = (0, r.useState)(!1),
                        S = C[0],
                        E = C[1],
                        T = (0, f.Z)("common").t,
                        _ = (0, r.useState)(!0),
                        L = _[0],
                        F = _[1],
                        R = (0, a.T)(),
                        Z = function() {
                            R((0, l.Rd)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        return e.current = !0,
                            function() {
                                e.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (i && s && i.assets && s.assets && c && (1 === c || 2 === c)) {
                            var t = [];
                            1 === c ? t = i.assets : 2 === c && (t = s.assets);
                            var n = t.findIndex((function(e) {
                                return "NATIVE" === e.collection.type || "ERC20" === e.collection.type
                            })) > -1;
                            e.current && u(n), n && e.current && b(t.filter((function(e) {
                                return "NATIVE" === e.collection.type || "ERC20" === e.collection.type
                            })));
                            var r = t.findIndex((function(e) {
                                return "ERC721" === e.collection.type || "ERC1155" === e.collection.type
                            })) > -1;
                            e.current && p(r), r && e.current && v(t.filter((function(e) {
                                return "ERC721" === e.collection.type || "ERC1155" === e.collection.type
                            })))
                        }
                    }), [c, i, s]), (0, r.useEffect)((function() {
                        d || m || Z()
                    }), [d, m]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "fixed w-full h-full flex flex-col-reverse z-[10500] bg-primary-gray/50 top-[0] left-[0] ".concat(!L && "invisible", " lg:flex-row-reverse"),
                            children: (0, n.jsxs)("div", {
                                className: "".concat(bs().cart, " h-[500px] w-full bg-primary-white rounded-t-[24px] px-[24px] pt-[24px] overflow-y-scroll scrollbar-hide lg:rounded-t-[0px] lg:h-full lg:w-[400px] lg:pt-[28px]"),
                                children: [(0, n.jsx)("div", {
                                    className: "flex items-center justify-center w-full h-[4px] lg:hidden",
                                    children: (0, n.jsx)("div", {
                                        className: "w-[30px] h-[4px] bg-primary-gray/40 rounded-[2px] cursor-pointer hover:bg-primary-blue",
                                        onClick: function() {
                                            Z()
                                        }
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "lg:flex lg:items-center lg:justify-between mt-[24px] lg:mt-[0px]",
                                    children: [(0, n.jsx)("h3", {
                                        className: "w-full text-center text-primary-dark-blue text-xl font-semibold lg:text-left",
                                        children: T("selectionPreviewLabel")
                                    }), (0, n.jsx)("div", {
                                        className: "flex justify-center items-center w-[36px] h-[36px]",
                                        children: (0, n.jsx)("img", {
                                            src: At.Z.src,
                                            className: "hidden lg:block cursor-pointer",
                                            onMouseEnter: function(e) {
                                                e.target.src = ws.Z.src
                                            },
                                            onMouseLeave: function(e) {
                                                e.target.src = At.Z.src
                                            },
                                            onClick: function() {
                                                Z()
                                            },
                                            width: 24,
                                            height: 24
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col lg:mt-[32px]",
                                    children: [d && g.map((function(e, t) {
                                        return (0, n.jsx)(vs, {
                                            asset: e,
                                            className: "".concat(0 === t ? "mb-[12px]" : "mt-[12px] mb-[12px]"),
                                            onClick: function() {
                                                F(!1), k(new Array(e)), E(!0)
                                            }
                                        }, "crypto-".concat(t, "-").concat(e.collection.symbol).concat("-".concat("ERC20" === e.collection.type && e.collection.address)))
                                    })), d && m && (0, n.jsx)("div", {
                                        className: "w-full h-[1px] mt-[12px] mb-[12px] bg-primary-gray/40"
                                    }), m && y.map((function(e, t) {
                                        return (0, n.jsx)(vs, {
                                            asset: e,
                                            className: "".concat(0 === t ? "mb-[12px] ".concat(d && m && "mt-[12px]") : "mt-[12px] mb-[12px]"),
                                            onClick: function() {
                                                var t, n;
                                                1 === c ? R((0, l.E4)({
                                                    id: e.id,
                                                    type: e.collection.type,
                                                    amount: null,
                                                    amountHumanReadable: null,
                                                    owner: (null === i || void 0 === i || null === (t = i.collector) || void 0 === t ? void 0 : t.address) || "",
                                                    collection: e.collection,
                                                    imageSrc: (0, cs.G)(e.imageSrc),
                                                    isApproved: !1,
                                                    hasPlaceholder: (0, cs.A)(e.imageSrc)
                                                })) : 2 === c && R((0, l.iB)({
                                                    id: e.id,
                                                    type: e.collection.type,
                                                    amount: null,
                                                    amountHumanReadable: null,
                                                    owner: (null === s || void 0 === s || null === (n = s.collector) || void 0 === n ? void 0 : n.address) || "",
                                                    collection: e.collection,
                                                    imageSrc: (0, cs.G)(e.imageSrc),
                                                    isApproved: !1,
                                                    hasPlaceholder: (0, cs.A)(e.imageSrc)
                                                })), R((0, l.Gu)())
                                            }
                                        }, "nft-".concat(t, "-").concat(e.collection.address, "-"))
                                    }))]
                                })]
                            })
                        }), S && (0, n.jsx)(ss, {
                            tokens: new Array(N[0].collection),
                            tokenSelectedIndex: 0,
                            tokenAmount: N[0].amountHumanReadable ? N[0].amountHumanReadable : "0",
                            isEditingAmount: !0,
                            isTaker: 1 === c,
                            isOpen: !0,
                            action: function() {
                                E(!1), Z()
                            },
                            actionClose: function() {
                                E(!1), Z()
                            },
                            onRemove: function() {
                                1 === c ? "NATIVE" === N[0].type ? R((0, l.sX)(N[0])) : R((0, l.zs)(N[0])) : 2 === c && ("NATIVE" === N[0].type ? R((0, l.Bd)(N[0])) : R((0, l.TJ)(N[0]))), E(!1), Z()
                            }
                        })]
                    })
                },
                ks = function(e) {
                    var t = e.onOpen,
                        s = e.onClose,
                        c = (0, f.Z)("common").t,
                        o = (0, a.C)((function(e) {
                            return e
                        })),
                        d = o.trademodal,
                        u = o.waccount,
                        x = (0, a.T)(),
                        m = d.stepperMenuSteps,
                        p = d.currentStepMenu,
                        h = d.isDeleteTradeModalOpen,
                        g = d.isCartOpen,
                        b = d.maker,
                        j = d.taker,
                        y = d.who,
                        v = d.mode,
                        w = d.swapId,
                        N = u.isConnected,
                        S = u.currentNetworkId,
                        E = m.map((function(e) {
                            return {
                                stepDescription: e.stepDescription,
                                isCompleted: e.isCompleted,
                                isCurrent: e.isCurrent,
                                onClick: function() {}
                            }
                        })),
                        T = (0, k.Ge)().library,
                        _ = function() {
                            document.body.classList.remove("no-scroll"), x((0, l.jO)()), x((0, l.r$)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        N || _()
                    }), [N]), (0, r.useEffect)((function() {
                        if (null !== y || null !== v) {
                            if ("VIEW_MAKER" === v || "INIT_MAKER_FROM_POST" === v) return t && t(), "INIT_MAKER_FROM_POST" === v ? function() {
                                s && s()
                            } : void 0;
                            var e = u.account,
                                n = u.username,
                                r = u.avatarUrl,
                                a = u.isNFT,
                                i = u.isVerified,
                                c = {
                                    networkId: S || "1",
                                    username: n || "",
                                    address: e || "",
                                    imageUrl: r || "",
                                    isNft: a ? 1 : 0,
                                    isVerified: i
                                };
                            return "maker" === y && x((0, l.jO)()), x("maker" === y ? (0, l.M7)(c) : (0, l.Bu)(c)), t && t(),
                                function() {
                                    s && s()
                                }
                        }
                    }), []), (0, r.useEffect)((function() {
                        if (w && S) {
                            var e = new C.h4({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            });
                            e.initClient({
                                web3Provider: T.provider
                            }), e.setNetworkId(S), e.config({
                                backendURL: "https://api.nfttrader.io"
                            }), e.getTradeOrder(S, w).then((function(e) {
                                !e || 1 !== e.master[0].swapStatus && 2 !== e.master[0].swapStatus || (_(), x((0, l.vg)(null)), x((0, l.eV)(null)))
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }), [w, S]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]",
                            children: (0, n.jsxs)("div", {
                                className: "".concat(hs().tradeModal, " relative w-full h-full ").concat(p < 4 ? "bg-primary-white" : 4 === p ? "bg-primary-white lg:bg-primary-white" : "bg-primary-blue lg:bg-primary-blue"),
                                children: [p <= 4 && null === v && (0, n.jsx)(Z, {
                                    stepperItems: E
                                }), "VIEW_MAKER" === v && (0, n.jsx)(Z, {
                                    mode: "VIEW_MAKER"
                                }), "INIT_MAKER_FROM_POST" === v && (0, n.jsx)(Z, {
                                    mode: "INIT_MAKER_FROM_POST"
                                }), (0, n.jsx)("section", {
                                    className: "".concat(p <= 4 ? hs().mainSection : hs().fullSection, " ").concat(p < 4 ? "bg-primary-white" : 4 === p ? "bg-primary-white lg:bg-primary-white" : "bg-primary-blue lg:bg-primary-blue", " overflow-y-scroll scrollbar-hide"),
                                    children: (0, n.jsxs)("div", {
                                        className: "".concat(p < 5 ? "px-[16px] lg:p-[48px]" : "flex items-center justify-center h-full"),
                                        children: [0 === p && null === v && (0, n.jsx)(Nt, {
                                            isCurrent: !0
                                        }), 1 === p && null === v && (0, n.jsx)(fs, {
                                            isCurrent: !0
                                        }), 2 === p && null === v && (0, n.jsx)(ds, {
                                            isCurrent: !0
                                        }), 3 === p && null === v && b && j && (0, n.jsx)(n.Fragment, {
                                            children: "maker" === y ? (0, n.jsx)(et, {
                                                isCurrent: !0,
                                                left: b,
                                                right: j
                                            }) : (0, n.jsx)(et, {
                                                isCurrent: !0,
                                                left: j,
                                                right: b
                                            })
                                        }), 3 === p && ("VIEW_MAKER" === v || "INIT_MAKER_FROM_POST" === v) && b && j && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)(et, {
                                                isCurrent: !0,
                                                left: b,
                                                right: j
                                            })
                                        }), 4 === p && (null === v || "INIT_MAKER_FROM_POST" === v) && b && j && (0, n.jsx)(re, {
                                            isCurrent: !0
                                        }), 5 === p && (null === v || "INIT_MAKER_FROM_POST" === v) && (0, n.jsx)(St, {
                                            isCurrent: !0
                                        })]
                                    })
                                })]
                            })
                        }), g && (0, n.jsx)(Ns, {}), h && (0, n.jsx)(i.Z, {
                            modalTitle: "maker" === y ? null === v ? c("cancelTradeLabel") : "".concat(c("goBackTradeHubLabel"), "?") : null === v ? "".concat(c("goBackTradeHubLabel"), "?") : c("closeWindowLabel"),
                            modalDescription: c("maker" === y ? null === v ? "cancelCurrentChoiceLabel" : "youCanReturnLaterLabel" : null === v ? "youCanReturnLaterLabel" : "youCanChangeCounterpartyLabel"),
                            action: function() {
                                _(), x((0, l.xI)(!1)), x((0, l.eV)(null)), x((0, l.vg)(null))
                            },
                            actionClose: function() {
                                x((0, l.xI)(!1))
                            },
                            buttonsText: [c("maker" === y && null === v ? "yesCancelItLabel" : "goBackTradeHubLabel"), c("dismissLabel")],
                            isOpen: !0
                        })]
                    })
                }
        },
        39542: function(e) {
            e.exports = {
                bubbleMessage: "BubbleMessage_bubbleMessage__k5GQ_"
            }
        },
        94047: function(e) {
            e.exports = {
                bubble: "CompromisedAssetIcon_bubble__43V2E"
            }
        },
        26013: function(e) {
            e.exports = {
                clickableBadge: "Badge_clickableBadge__ro4Ap",
                rotating: "Badge_rotating___HVgB",
                rotate: "Badge_rotate__4q1sK"
            }
        },
        42161: function(e) {
            e.exports = {
                rotating: "ImageCollection_rotating__gq4eT",
                rotate: "ImageCollection_rotate__A0tRK"
            }
        },
        19090: function(e) {
            e.exports = {
                insideBorder: "TimeCursor_insideBorder__vEvf5",
                fade: "TimeCursor_fade__z1z6z"
            }
        },
        88867: function(e) {
            e.exports = {
                approvingModal: "ApprovingModal_approvingModal__vsUa6",
                goUp: "ApprovingModal_goUp__fdFX6",
                goUpButton: "ApprovingModal_goUpButton__1ejv_",
                overlay: "ApprovingModal_overlay__Hl84m",
                zoom: "ApprovingModal_zoom__By21E"
            }
        },
        6955: function(e) {
            e.exports = {
                keepVerDistance: "BadgeContainer_keepVerDistance__dsfWw",
                keepHozDistance: "BadgeContainer_keepHozDistance__beEt1"
            }
        },
        50813: function(e) {
            e.exports = {
                collectionRow: "CollectionRow_collectionRow__E19wk",
                radio: "CollectionRow_radio__eMbTU"
            }
        },
        11861: function(e) {
            e.exports = {
                cryptoTokenModal: "CryptoTokenModal_cryptoTokenModal__N9H1U",
                goUp: "CryptoTokenModal_goUp__NmeZJ",
                overlay: "CryptoTokenModal_overlay___4A_q",
                zoom: "CryptoTokenModal_zoom__pMqf3"
            }
        },
        92594: function(e) {
            e.exports = {
                customCollectionModal: "CustomCollectionModal_customCollectionModal__ffC_P",
                goUp: "CustomCollectionModal_goUp__p_2tZ",
                overlay: "CustomCollectionModal_overlay__jrtvO",
                zoom: "CustomCollectionModal_zoom__BlAP8"
            }
        },
        61156: function(e) {
            e.exports = {
                rotating: "NFTItem_rotating__0yhYj",
                rotate: "NFTItem_rotate__kbbTX"
            }
        },
        21124: function(e) {
            e.exports = {
                paymentModal: "PaymentModal_paymentModal__92On3",
                goUp: "PaymentModal_goUp__v0xqg",
                rotating: "PaymentModal_rotating__465Nh",
                rotate: "PaymentModal_rotate__ovupj",
                overlay: "PaymentModal_overlay__vQOC3",
                zoom: "PaymentModal_zoom__Dsl_P"
            }
        },
        20259: function(e) {
            e.exports = {
                stepperMenu: "StepperMenu_stepperMenu__3C4Tf",
                translate: "StepperMenu_translate__jRGiI",
                rotating: "StepperMenu_rotating__mK5j5",
                rotate: "StepperMenu_rotate__i_AYX"
            }
        },
        99506: function(e) {
            e.exports = {
                stepperMenuList: "StepperMenuList_stepperMenuList__oZwnq",
                goUp: "StepperMenuList_goUp__S1cbv",
                mainContent: "StepperMenuList_mainContent__P6W4b"
            }
        },
        3055: function(e) {
            e.exports = {
                unverifiedCollectionModal: "UnverifiedCollectionModal_unverifiedCollectionModal__7iN4H",
                goUp: "UnverifiedCollectionModal_goUp__vTs_C",
                goUpButton: "UnverifiedCollectionModal_goUpButton__FGBK4",
                overlay: "UnverifiedCollectionModal_overlay__7uyp9",
                zoom: "UnverifiedCollectionModal_zoom__b8fmc"
            }
        },
        43135: function(e) {
            e.exports = {
                cart: "Cart_cart__wKMuM",
                slideTop: "Cart_slideTop__Cwq_H",
                slideLeft: "Cart_slideLeft__CNnDt"
            }
        },
        73552: function(e) {
            e.exports = {
                scrollbar: "Collections_scrollbar__njHUm",
                rotating: "Collections_rotating__2gUsm",
                rotate: "Collections_rotate__7_rtP"
            }
        },
        27616: function(e) {
            e.exports = {
                scrollbar: "ERC20Tokens_scrollbar__V8bgW",
                rotating: "ERC20Tokens_rotating__ZcF9M",
                rotate: "ERC20Tokens_rotate__jjbQ7",
                overlay: "ERC20Tokens_overlay__j7OF2",
                erc20Tokens: "ERC20Tokens_erc20Tokens__P_uiP",
                zoom: "ERC20Tokens_zoom__hDJTW"
            }
        },
        56837: function(e) {
            e.exports = {
                rotating: "Favourites_rotating__Vct_7",
                rotate: "Favourites_rotate__AhtWJ",
                ulContainer: "Favourites_ulContainer__wW1Ry",
                username: "Favourites_username__Tnl7g",
                use: "Favourites_use__BbKJi",
                starContainer: "Favourites_starContainer__0TXyW"
            }
        },
        40385: function(e) {
            e.exports = {
                rotating: "PageFive_rotating__j70V4",
                rotate: "PageFive_rotate__VWOKp"
            }
        },
        6089: function(e) {
            e.exports = {
                overlay: "TradeModal_overlay___1gA1",
                tradeModal: "TradeModal_tradeModal____hST",
                zoom: "TradeModal_zoom__I937v",
                fullSection: "TradeModal_fullSection__26B2a",
                mainSection: "TradeModal_mainSection__3a9sS"
            }
        }
    }
]);