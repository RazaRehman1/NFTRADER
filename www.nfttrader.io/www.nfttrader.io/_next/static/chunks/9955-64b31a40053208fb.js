(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9955], {
        53470: function(e, s) {
            "use strict";
            s.Z = {
                src: "/_next/static/media/chat.937a6cb1.svg",
                height: 16,
                width: 16
            }
        },
        69955: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return J
                }
            });
            var a = t(44453),
                n = t.n(a),
                r = t(8014),
                l = t(74491),
                c = t(62044),
                o = t(73811),
                i = t(75575),
                x = t(54425),
                d = t.n(x),
                p = t(42412),
                u = t(55905),
                m = t(3152),
                f = t(92314),
                g = "/_next/static/media/kebab_menu_post_dark_blue.51f9d6c7.svg",
                h = t(39329),
                w = t.n(h),
                b = t(36686),
                j = t(49803),
                v = t(24058),
                y = t(82340),
                N = t(96501),
                k = t(56168),
                C = "/_next/static/media/eye.5c7743be.svg",
                _ = t(53470),
                A = t(75657),
                Z = t(69324),
                I = t(29622),
                P = t(45713),
                D = t(52298),
                S = t(47257),
                T = t(90197),
                E = t(85429),
                L = t(79327),
                R = t(31023),
                F = t(25689),
                H = t(10208),
                M = t(24789),
                U = t(83516),
                B = t(66986);

            function O(e, s, t, a, n, r, l) {
                try {
                    var c = e[r](l),
                        o = c.value
                } catch (i) {
                    return void t(i)
                }
                c.done ? s(o) : Promise.resolve(o).then(a, n)
            }

            function V(e, s) {
                return null != s && "undefined" !== typeof Symbol && s[Symbol.hasInstance] ? s[Symbol.hasInstance](e) : e instanceof s
            }
            var J = function(e) {
                var s, t = e.post,
                    a = e.currentUserAddress,
                    x = e.isPreview,
                    h = void 0 !== x && x,
                    J = e.isPreviewOptions,
                    z = void 0 === J ? {
                        dayDuration: 0
                    } : J,
                    Y = (e.className, e.showSkeletonLoader),
                    G = void 0 !== Y && Y,
                    W = e.onDeletePost,
                    q = e.activateObserver,
                    K = e.options,
                    Q = e.ETHUSDRate,
                    X = (0, c.Z)("common").t,
                    $ = (0, k.useState)(!1),
                    ee = $[0],
                    se = $[1],
                    te = (0, k.useState)(!1),
                    ae = te[0],
                    ne = te[1],
                    re = (0, k.useState)(),
                    le = re[0],
                    ce = re[1],
                    oe = (0, k.useRef)(null),
                    ie = (0, P.Z)(!1),
                    xe = ie.ref,
                    de = ie.isComponentVisible,
                    pe = ie.setIsComponentVisible,
                    ue = (0, k.useRef)(),
                    me = (0, k.useRef)(null),
                    fe = (0, k.useRef)(null),
                    ge = (0, k.useRef)(null),
                    he = (0, k.useRef)(""),
                    we = (0, M.Ge)().connector,
                    be = function() {
                        var e, s = (e = n().mark((function e() {
                            var s, a, r, l, c;
                            return n().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (s = F.hexlify(H.Y0("".concat(T.ov._MESSAGE_TO_SIGN))), !V(we, U.zw)) {
                                            e.next = 6;
                                            break
                                        }
                                        a = null === (r = we.walletConnectProvider) || void 0 === r ? void 0 : r.connector.signPersonalMessage([s, t.creator.address]), e.next = 21;
                                        break;
                                    case 6:
                                        if (!V(we, B.J)) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 9, we.getProvider();
                                    case 9:
                                        return l = e.sent, e.next = 12, l.send("personal_sign", [s, t.creator.address]);
                                    case 12:
                                        a = e.sent, e.next = 21;
                                        break;
                                    case 15:
                                        return e.next = 17, new R.Web3Provider(window.ethereum);
                                    case 17:
                                        return c = e.sent, e.next = 20, c.send("personal_sign", [s, t.creator.address]);
                                    case 20:
                                        a = e.sent;
                                    case 21:
                                        return e.abrupt("return", a);
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var s = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var r = e.apply(s, t);

                                function l(e) {
                                    O(r, a, n, l, c, "next", e)
                                }

                                function c(e) {
                                    O(r, a, n, l, c, "throw", e)
                                }
                                l(void 0)
                            }))
                        });
                        return function() {
                            return s.apply(this, arguments)
                        }
                    }(),
                    je = (0, k.useCallback)((function(e) {
                        return d()(1e3 * e).format("MMMM D YYYY, h:mm a")
                    }), []),
                    ve = (0, k.useCallback)((function(e) {
                        return e === T.RW.ACTIVE ? "time" : "descriptive"
                    }), []),
                    ye = (0, k.useCallback)((function(e) {
                        return e === T.RW.ACTIVE ? void 0 : {
                            status: u.u[e]
                        }
                    }), []),
                    Ne = (0, k.useCallback)((function(e, s) {
                        if (e === T.RW.ACTIVE) return s
                    }), []),
                    ke = (0, k.useCallback)((function(e) {
                        return X("MESSAGE_".concat(e))
                    }), []),
                    Ce = (0, k.useCallback)((function(e, s) {
                        return e.slice(s).map((function(e) {
                            return e.imageUrl
                        }))
                    }), []),
                    _e = (0, k.useCallback)((function(e, s, t) {
                        return e.slice(s).map((function(e) {
                            return t ? e.name : "".concat(e.name, " #").concat(e.tokenId)
                        }))
                    }), []),
                    Ae = function(e, s) {
                        var t = e[0];
                        if (t) {
                            var a = t.intersectionRatio;
                            se(a < 1)
                        }
                    };
                return (0, k.useEffect)((function() {
                    he.current = (0, L.Z)()
                }), []), (0, k.useEffect)((function() {
                    oe.current = new T.ov({
                        apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                    }), oe.current.config({
                        backendURL: "https://api.nfttrader.io"
                    })
                }), []), (0, k.useEffect)((function() {
                    G && se(G)
                }), [G]), (0, k.useEffect)((function() {
                    if (q && me && me.current) return ue.current = new IntersectionObserver(Ae, {
                            rootMargin: "500px 0px 500px 0px",
                            threshold: 1
                        }), ue.current.observe(me.current),
                        function() {
                            var e;
                            null === (e = ue.current) || void 0 === e || e.disconnect()
                        }
                }), [q, me]), (0, k.useEffect)((function() {
                    ee || ce(fe.current.scrollHeight)
                }), [ee]), (0, r.jsxs)("div", {
                    ref: me,
                    children: [ee ? (0, r.jsxs)("div", {
                        className: "flex flex-col w-full gap-y-[8px] lg:gap-y-[8px]",
                        ref: ge,
                        style: {
                            height: "".concat(le ? "".concat(le, "px") : "auto")
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-x-[8px] lg:gap-x-[16px]",
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(w().skeleton, " w-[32px] h-[32px] rounded-full lg:w-[40px] lg:h-[40px]")
                                }), (0, r.jsx)("span", {
                                    className: "".concat(w().skeleton, " w-[100px] h-[10px] rounded-full")
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-x-[12px] gap-y-[8px] lg:flex-row lg:gap-y-[0px] lg:justify-between",
                                children: [(0, r.jsx)("span", {
                                    className: "".concat(w().skeleton, " w-[130px] h-[10px] rounded-full lg:flex-none")
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-end items-center gap-x-[8px] w-full lg:justify-start lg:gap-x-[12px]",
                                    children: [(0, r.jsx)("div", {
                                        className: "".concat(w().skeleton, " w-[70px] h-[31px] rounded-full")
                                    }), (0, r.jsx)("div", {
                                        className: "".concat(w().skeleton, " w-[24px] h-[24px] rounded-full")
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "".concat(w().postSkeleton, " flex flex-col gap-y-[16px] w-full relative lg:pl-[60px]"),
                            children: (0, r.jsxs)("div", {
                                className: "w-full border-solid border-[1px] border-gray-200 rounded-[16px] rounded-tl-[32px] bg-primary-white z-[1] p-[24px]",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, r.jsx)("span", {
                                        className: "".concat(w().skeleton, " w-[120px] h-[10px] rounded-full")
                                    }), (0, r.jsxs)("div", {
                                        className: "hidden items-center gap-x-[4px] lg:flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "".concat(w().skeleton, " w-[16px] h-[16px] rounded-full")
                                        }), (0, r.jsx)("span", {
                                            className: "".concat(w().skeleton, " w-[140px] h-[10px] rounded-full")
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "".concat(w().skeleton, " w-[280px] h-[10px] rounded-full mt-[8px]")
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-between mt-[16px]",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col gap-y-[12px]",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex gap-x-[8px]",
                                            children: [(0, r.jsx)("div", {
                                                className: "".concat(w().skeleton, " rounded-[8px] w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]")
                                            }), (0, r.jsx)("div", {
                                                className: "".concat(w().skeleton, " rounded-[8px] w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]")
                                            }), (0, r.jsx)("div", {
                                                className: "".concat(w().skeleton, " rounded-[8px] w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]")
                                            }), (0, r.jsx)("div", {
                                                className: "".concat(w().skeleton, " rounded-[8px] w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]")
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center gap-x-[4px] lg:hidden",
                                            children: [(0, r.jsx)("div", {
                                                className: "".concat(w().skeleton, " w-[16px] h-[16px] rounded-full")
                                            }), (0, r.jsx)("span", {
                                                className: "".concat(w().skeleton, " w-[140px] h-[10px] rounded-full")
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "".concat(w().skeleton, " flex flex-col gap-y-[6px] flex-none w-[250px] h-[70px] border-[1px] border-gray-200 border-solid bg-gray-100 rounded-[16px] rounded-tl-[0px] p-[8px]")
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "flex items-end justify-end relative"
                                    })]
                                })]
                            })
                        })]
                    }) : (0, r.jsxs)("div", {
                        className: "flex flex-col w-full gap-y-[8px] lg:gap-y-[8px]",
                        ref: fe,
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-x-[8px] lg:gap-x-[16px]",
                                children: [(0, r.jsx)(l.Z, {
                                    address: t.creator.address,
                                    src: t.creator.imageUrl,
                                    sizesClassNames: "w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]",
                                    jazziconSize: {
                                        defaultSize: 32,
                                        breakpoints: [1024],
                                        sizes: [40]
                                    },
                                    isNFT: t.creator.isNft ? 1 : 0
                                }), t.creator.username ? (0, r.jsx)(o.Z, {
                                    text: "@".concat(t.creator.username),
                                    url: "/".concat(t.creator.username ? t.creator.username : t.creator.address),
                                    customColor: "#03045e",
                                    isCustom: !0,
                                    className: "text-xs font-semibold",
                                    isTargetBlank: !0
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        className: "hidden lg:block",
                                        children: (0, r.jsx)(o.Z, {
                                            text: (0, i.x)(t.creator.address),
                                            url: "/".concat(t.creator.address),
                                            isCustom: !0,
                                            customColor: "#03045e",
                                            className: "text-xs",
                                            isTargetBlank: !0
                                        })
                                    }), (0, r.jsx)("span", {
                                        className: "lg:hidden",
                                        children: (0, r.jsx)(o.Z, {
                                            text: (0, i.N)(t.creator.address),
                                            url: "/".concat(t.creator.address),
                                            isCustom: !0,
                                            customColor: "#03045e",
                                            className: "text-xs",
                                            isTargetBlank: !0
                                        })
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-x-[12px] gap-y-[8px] ".concat(K ? "".concat("dateMobile" in K && K.dateMobile ? "" : "lg:flex-row lg:gap-y-[0px] lg:justify-between") : "lg:flex-row lg:gap-y-[0px] lg:justify-between"),
                                children: [(0, r.jsx)("span", {
                                    className: "rubik text-xs font-light text-primary-dark-blue lg:flex-none",
                                    children: je(t.creationDate)
                                }), (0, r.jsxs)("div", {
                                    ref: xe,
                                    className: "flex justify-end items-center gap-x-[8px] w-full relative lg:justify-start lg:gap-x-[12px]",
                                    children: [(0, r.jsx)(p.Z, {
                                        mode: {
                                            type: ve(t.status)
                                        },
                                        status: ye(t.status),
                                        expirationDate: Ne(t.status, t.expirationDate),
                                        isPreview: h,
                                        dayDuration: z.dayDuration
                                    }), (s = t.networkId, (0, r.jsx)(r.Fragment, {
                                        children: he.current ? (0, r.jsxs)("div", {
                                            className: "w-[24px] relative",
                                            children: [(0, r.jsx)("img", {
                                                src: (0, m.l2)(s),
                                                className: "w-[24px]",
                                                "data-for": "".concat(he.current),
                                                "data-tip": !0
                                            }), (0, r.jsx)(E.Z, {
                                                id: he.current,
                                                backgroundColor: "#01085a",
                                                effect: "solid",
                                                children: (0, r.jsx)("span", {
                                                    className: "rubik text-xs text-primary-white font-regular capitalize",
                                                    children: (0, m.qe)(s)
                                                })
                                            })]
                                        }) : (0, r.jsx)(r.Fragment, {})
                                    })), !h && t.creator.address.toLowerCase() === (null === a || void 0 === a ? void 0 : a.toLowerCase()) && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("img", {
                                            src: f.Z.src,
                                            className: "w-[24px] cursor-pointer",
                                            onMouseEnter: function(e) {
                                                e.target.src = g
                                            },
                                            onMouseLeave: function(e) {
                                                e.target.src = f.Z.src
                                            },
                                            onClick: function() {
                                                pe(!0)
                                            }
                                        }), de && (0, r.jsx)(D.Z, {
                                            options: [{
                                                description: X("deleteLabel"),
                                                value: "delete",
                                                class: "gtm-delete-post"
                                            }],
                                            onSelect: function(e) {
                                                e.value, e.index;
                                                pe(!1), ne(!0)
                                            },
                                            mode: "selectable",
                                            onClose: function() {
                                                pe(!1)
                                            },
                                            className: "-left-[10px] top-[30px]"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "".concat(w().post, " flex flex-col gap-y-[16px] w-full relative ").concat(K ? "".concat("noPadding" in K && K.noPadding ? "".concat(w().noPadding) : "lg:pl-[60px]") : "lg:pl-[60px]"),
                            children: (0, r.jsxs)("div", {
                                className: "w-full border-solid border-[1px] border-gray-200 rounded-[16px] rounded-tl-[32px] bg-primary-white z-[1] p-[24px] transition-shadow duration-200 hover:shadow-lg",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, r.jsx)(b.Z, {
                                        children: ke(t.messages[0].type)
                                    }), (t.type === T.JH.A1 || t.type === T.JH.B1 || t.type === T.JH.C1) && (0, r.jsx)("div", {
                                        className: "hidden lg:block",
                                        children: (0, r.jsx)(I.Z, {
                                            assetsAccountLeft: t.assets.offered ? t.assets.offered : [],
                                            networkId: t.networkId,
                                            ETHUSDRate: Q,
                                            account: t.creator.address
                                        })
                                    })]
                                }), (0, r.jsx)(b.Z, {
                                    children: ke(t.messages[1].type)
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col justify-between mt-[16px] gap-y-[24px] x2l:gap-y-[0px] x2l:flex-row",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col gap-y-[12px]",
                                        children: [(t.type === T.JH.A1 || t.type === T.JH.B1) && t.assets.offered && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(Z.Z, {
                                                assets: t.assets.offered,
                                                mode: "STANDARD",
                                                maxItemDisplayedDesktop: 8,
                                                maxItemDisplayedMobile: 5,
                                                classNameAssetCard: "w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]",
                                                classNameCounterAssets: "w-[39px] h-[39px] lg:w-[63px] lg:h-[63px]"
                                            }), (0, r.jsx)("div", {
                                                className: "flex items-center gap-x-[4px] lg:hidden",
                                                children: (0, r.jsx)(I.Z, {
                                                    assetsAccountLeft: t.assets.offered ? t.assets.offered : [],
                                                    networkId: t.networkId,
                                                    ETHUSDRate: Q
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "flex flex-col gap-y-[6px] flex-none w-fit border-[1px] border-gray-200 border-solid bg-gray-100 rounded-[16px] rounded-tl-[0px] p-[8px] lg:max-w-[550px]",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex items-center gap-x-[4px]",
                                                    children: [t.type === T.JH.A1 && (0, r.jsxs)(r.Fragment, {
                                                        children: [(0, r.jsx)("img", {
                                                            src: j.Z.src,
                                                            className: "w-[16px]"
                                                        }), (0, r.jsxs)("span", {
                                                            className: "rubik font-semibold text-xs text-primary-dark-blue lg:text-sm",
                                                            children: [X("onlyAcceptLabel"), ":"]
                                                        })]
                                                    }), t.type === T.JH.B1 && (0, r.jsxs)(r.Fragment, {
                                                        children: [(0, r.jsx)("img", {
                                                            src: v.Z.src,
                                                            className: "w-[16px]"
                                                        }), (0, r.jsxs)("span", {
                                                            className: "rubik font-semibold text-xs text-primary-dark-blue lg:text-sm",
                                                            children: [X("wouldLoveLabel"), ":"]
                                                        })]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-wrap items-center gap-x-[8px] gap-y-[8px] lg:gap-x-[4px] lg:gap-y-[8px]",
                                                    children: [t.assets.wanted && (0, r.jsx)(r.Fragment, {
                                                        children: t.assets.wanted.length < 5 ? t.assets.wanted.map((function(e, s) {
                                                            return (0, r.jsx)(y.Z, {
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
                                                                avatarClassName: "w-[16px] h-[16px]",
                                                                avatarBadgeClassName: "w-[8px] h-[8px]",
                                                                shrinkText: !0
                                                            }, "collection-".concat(e.address, "-").concat(s))
                                                        })) : t.assets.wanted.slice(0, 5).map((function(e, s) {
                                                            return (0, r.jsx)(y.Z, {
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
                                                                avatarClassName: "w-[16px] h-[16px]",
                                                                avatarBadgeClassName: "w-[8px] h-[8px]",
                                                                shrinkText: !0
                                                            }, "collection-".concat(e.address, "-").concat(s))
                                                        }))
                                                    }), t.assets.wanted && t.assets.wanted.length > 5 && (0, r.jsx)(N.Z, {
                                                        src: Ce(t.assets.wanted, 5),
                                                        counter: t.assets.wanted.length - 5,
                                                        names: _e(t.assets.wanted, 5, !0),
                                                        className: "w-[16px] h-[16px]",
                                                        isMini: !0
                                                    })]
                                                })]
                                            })]
                                        }), (t.type === T.JH.A2 || t.type === T.JH.B2) && (0, r.jsx)(r.Fragment, {
                                            children: t.assets.wanted && (0, r.jsx)(r.Fragment, {
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex flex-wrap gap-x-[8px] gap-y-[8px] lg:gap-x-[12px] lg:gap-y-[12px]",
                                                    children: [t.assets.wanted.length > 4 ? (0, r.jsx)(r.Fragment, {
                                                        children: t.assets.wanted.slice(0, 4).map((function(e, s) {
                                                            return (0, r.jsx)(y.Z, {
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
                                                            }, "collection-".concat(e.address, "-").concat(s))
                                                        }))
                                                    }) : (0, r.jsx)(r.Fragment, {
                                                        children: t.assets.wanted.map((function(e, s) {
                                                            return (0, r.jsx)(y.Z, {
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
                                                            }, "collection-".concat(e.address, "-").concat(s))
                                                        }))
                                                    }), t.assets.wanted.length > 4 && (0, r.jsx)(N.Z, {
                                                        src: Ce(t.assets.wanted, 4),
                                                        counter: t.assets.wanted.length - 5 + 1,
                                                        names: _e(t.assets.wanted, 4, !0),
                                                        className: "w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]",
                                                        isMini: !1
                                                    })]
                                                })
                                            })
                                        }), t.type === T.JH.C1 && (0, r.jsxs)(r.Fragment, {
                                            children: [t.assets.offered && (0, r.jsx)(Z.Z, {
                                                assets: t.assets.offered,
                                                mode: "STANDARD",
                                                maxItemDisplayedDesktop: 8,
                                                maxItemDisplayedMobile: 5,
                                                classNameAssetCard: "w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]",
                                                classNameCounterAssets: "w-[39px] h-[39px] lg:w-[63px] lg:h-[63px]"
                                            }), (0, r.jsx)("div", {
                                                className: "flex items-center gap-x-[4px] lg:hidden",
                                                children: (0, r.jsx)(I.Z, {
                                                    assetsAccountLeft: t.assets.offered ? t.assets.offered : [],
                                                    networkId: t.networkId,
                                                    ETHUSDRate: Q
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "flex items-end justify-end relative",
                                        children: !h && (0, r.jsx)("div", {
                                            className: "".concat(w().hoverableAction, " flex items-center gap-x-[8px] cursor-pointer"),
                                            children: "number" === typeof t.numberOffers && 0 === t.numberOffers ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)("span", {
                                                    className: "text-sm font-semibold text-primary-blue gtm-take-look",
                                                    children: (0, r.jsx)(A.default, {
                                                        href: "/post/".concat(t.id),
                                                        children: X("takeLookLabel")
                                                    })
                                                }), (0, r.jsx)("img", {
                                                    src: C,
                                                    width: 16,
                                                    height: 16
                                                })]
                                            }) : (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)("span", {
                                                    className: "text-sm font-semibold text-primary-blue gtm-take-look",
                                                    children: (0, r.jsx)(A.default, {
                                                        href: "/post/".concat(t.id),
                                                        children: X("makeYourOfferLabel")
                                                    })
                                                }), (0, r.jsx)("img", {
                                                    src: _.Z.src,
                                                    className: "w-[16px] h-[16px]"
                                                }), (0, r.jsx)("div", {
                                                    className: "flex items-center justify-center absolute w-[20px] h-[20px] rounded-full bg-primary-yellow border-[1px] border-solid border-primary-blue -right-[10px] -bottom-[10px]",
                                                    children: (0, r.jsx)("span", {
                                                        className: "rubik text-xxs font-semibold text-primary-blue",
                                                        children: t.numberOffers
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), ae && (0, r.jsx)(S.Z, {
                        modalTitle: X("deleteThePostLabel"),
                        modalDescription: X("alertRemovePostLabel"),
                        action: function(e) {
                            e("loading"), be().then((function(s) {
                                oe.current && oe.current.deletePost(t.id, t.creator.address, s).then((function(s) {
                                    e("default"), ne(!1), W && W()
                                })).catch((function(s) {
                                    console.error(s), e("disabled")
                                }))
                            })).catch((function(s) {
                                console.log(s), e("default")
                            }))
                        },
                        actionClose: function() {
                            ne(!1)
                        },
                        buttonsText: [X("yesDeleteItLabel"), X("cancelLabel")],
                        isOpen: !0,
                        closeOnAction: !1
                    })]
                })
            }
        },
        39329: function(e) {
            e.exports = {
                kebab: "PostComponent_kebab__Gt4pB",
                post: "PostComponent_post__7NeaZ",
                hoverableAction: "PostComponent_hoverableAction__ntkPT",
                postSkeleton: "PostComponent_postSkeleton__Okd2p",
                "skeleton-loading": "PostComponent_skeleton-loading__7qzLl",
                skeleton: "PostComponent_skeleton__JO_aP",
                noPadding: "PostComponent_noPadding__oICyo"
            }
        }
    }
]);