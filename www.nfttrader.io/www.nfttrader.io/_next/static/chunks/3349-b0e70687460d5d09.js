(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3349], {
        80697: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/vertical_dots_white.06151f7e.svg",
                height: 16,
                width: 16
            }
        },
        58616: function(e, t, l) {
            "use strict";
            var s = l(8014),
                r = l(56168),
                n = l(11852),
                i = l(23977),
                o = l.n(i),
                c = l(83050),
                a = l(83741),
                d = l(81067),
                x = l(70118),
                u = l(94084),
                m = l(47805),
                p = l(34288),
                f = l(59166),
                h = l(71733),
                b = l(62044),
                g = l(3152);

            function j(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            t.Z = function(e) {
                var t = e.isOpen,
                    l = void 0 !== t && t,
                    i = e.networkId,
                    v = e.actionClose,
                    N = e.collectionAddress,
                    w = (0, b.Z)("common").t,
                    y = (0, r.useRef)(!1),
                    C = (0, r.useState)(l),
                    k = C[0],
                    _ = C[1],
                    F = (0, r.useState)(!1),
                    S = F[0],
                    Z = F[1],
                    E = (0, r.useState)(),
                    I = E[0],
                    R = E[1],
                    T = (0, r.useState)(!1),
                    z = T[0],
                    A = T[1],
                    L = function(e) {
                        42 === e.length && null != e.match(/^0x[a-fA-F0-9]{40}$/g) && i ? (0, p.bf)((0, f.f)("getNftCollection", [i, e])).then((function(e) {
                            var t = e.data[0];
                            y.current && R(t)
                        })).catch((function(e) {
                            console.error(e)
                        })) : y.current && R(void 0), y.current && Z(!0), 0 === e.length && y.current && Z(!1)
                    };
                return (0, r.useEffect)((function() {
                    return y.current = !0,
                        function() {
                            y.current = !1
                        }
                }), []), (0, r.useEffect)((function() {
                    k || v()
                }), [k]), (0, r.useEffect)((function() {
                    N && L(N)
                }), [N]), (0, s.jsx)(s.Fragment, {
                    children: k && (0, s.jsx)("div", {
                        className: "".concat(o().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                        children: (0, s.jsxs)("div", {
                            className: "".concat(o().customCollectionModal, " fixed flex flex-col bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full h-full text-center overflow-y-scroll scrollbar-hide lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col items-center justify-center text-primary-white",
                                children: [(0, s.jsx)("div", {
                                    className: "flex items-center justify-center w-[32px] h-[32px]",
                                    children: (0, s.jsx)("img", {
                                        src: c.Z.src,
                                        className: "cursor-pointer",
                                        onClick: function() {
                                            j(v, Function) && v(), _(!1)
                                        },
                                        width: 26,
                                        height: 26
                                    })
                                }), (0, s.jsx)("h3", {
                                    className: "text-xl font-semibold text-primary-blue mt-[16px]",
                                    children: w("addNFTCollectionLabel")
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col items-center justify-center mt-[40px]",
                                children: [(0, s.jsx)("span", {
                                    className: "text-base font-semibold text-primary-dark-blue mb-[16px]",
                                    children: w("collectionAddressLabel")
                                }), (0, s.jsx)(a.Z, {
                                    placeholder: "0x....",
                                    setFilter: function(e) {
                                        L(e)
                                    },
                                    hideIcon: !0,
                                    className: "w-full h-[52px]",
                                    value: N
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col justify-center items-center mt-[40px] px-[24px] py-[16px]",
                                children: [I && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(u.Z, {
                                        src: I.image ? I.image : h.Z.src,
                                        url: I.externalUrl ? I.externalUrl : "",
                                        size: 72
                                    }, I.symbol + (new Date).getTime()), (0, s.jsxs)("div", {
                                        className: "text-center w-full mt-[18px] max-h-[100px] overflow-y-auto scrollbar-hide",
                                        children: [(0, s.jsx)("span", {
                                            className: "text-xl font-semibold text-primary-dark-blue",
                                            children: I.name ? I.name : ""
                                        }), (0, s.jsx)("p", {
                                            className: "mt-[8px]",
                                            children: (0, m.q)(I.description, 15)
                                        })]
                                    })]
                                }), !I && (0, s.jsxs)(s.Fragment, {
                                    children: [S && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("img", {
                                            src: x.Z.src,
                                            width: 72,
                                            height: 72
                                        }), (0, s.jsx)("span", {
                                            className: "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                            children: w("noSuchCollectionLabel")
                                        })]
                                    }), !S && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)("img", {
                                            src: d.Z.src,
                                            className: "w-[130px]"
                                        }), (0, s.jsx)("span", {
                                            className: "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                            children: w("pasteCollectionLabel")
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                                children: [I ? (0, s.jsx)(s.Fragment, {
                                    children: z ? (0, s.jsx)("div", {
                                        children: (0, s.jsx)(n.Z, {
                                            text: w("addCapitalizedLabel"),
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
                                    }) : (0, s.jsx)(n.Z, {
                                        text: w("addCapitalizedLabel"),
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
                                            A(!0), e = I, (0, p.VZ)((0, f.f)("insertCollection"), {
                                                network: (0, g.kb)(i),
                                                collection: e.collectionAddress,
                                                networkId: i
                                            }).then((function(e) {
                                                y.current && (A(!1), _(!1))
                                            })).catch((function(e) {
                                                y.current && A(!1), console.error(e)
                                            }))
                                        }
                                    })
                                }) : (0, s.jsx)("div", {
                                    children: (0, s.jsx)(n.Z, {
                                        text: w("addCapitalizedLabel"),
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
                                }), (0, s.jsx)(n.Z, {
                                    text: w("closeLabel"),
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
                                        j(v, Function) && v(), _(!1)
                                    }
                                })]
                            })]
                        })
                    })
                })
            }
        },
        70202: function(e, t, l) {
            "use strict";
            var s = l(8014),
                r = l(80190),
                n = l(37601),
                i = l(50425),
                o = l(56168),
                c = l(90138),
                a = l(22537),
                d = l(52208),
                x = l.n(d),
                u = l(3152),
                m = l(85429),
                p = l(62044);
            t.Z = function(e) {
                var t = e.NFTSrc,
                    l = e.NFTId,
                    d = e.standard,
                    f = e.collection,
                    h = e.address,
                    b = e.isSelected,
                    g = void 0 !== b && b,
                    j = e.isShrinked,
                    v = void 0 !== j && j,
                    N = e.showERC1155Amount,
                    w = void 0 !== N && N,
                    y = e.isNotClickable,
                    C = void 0 !== y && y,
                    k = e.amount,
                    _ = e.hasPlaceholder,
                    F = void 0 !== _ && _,
                    S = e.className,
                    Z = e.onClick,
                    E = e.onAddERC1155,
                    I = e.onRemoveERC1155,
                    R = e.activateObserver,
                    T = void 0 !== R && R,
                    z = e.onClickAddCollection,
                    A = (0, o.useRef)(!1),
                    L = (0, o.useRef)(),
                    M = (0, o.useRef)(null),
                    U = ((0, p.Z)("common").t, (0, o.useState)(!1)),
                    B = U[0],
                    O = U[1],
                    J = (0, o.useState)(g),
                    V = J[0],
                    q = J[1],
                    D = (0, o.useState)(k),
                    H = D[0],
                    P = D[1],
                    X = (0, o.useState)(t),
                    G = X[0],
                    Q = X[1],
                    $ = (0, o.useState)(F),
                    K = $[0],
                    W = $[1],
                    Y = (0, o.useState)(!1),
                    ee = Y[0],
                    te = Y[1],
                    le = function(e, t) {
                        var l = e[0];
                        if (l) {
                            var s = l.intersectionRatio;
                            te(s < 1)
                        }
                    };
                return (0, o.useEffect)((function() {
                    return A.current = !0,
                        function() {
                            A.current = !1
                        }
                }), []), (0, o.useEffect)((function() {
                    q(g)
                }), [g]), (0, o.useEffect)((function() {
                    P(k)
                }), [k]), (0, o.useEffect)((function() {
                    if (T && M && M.current) return L.current = new IntersectionObserver(le, {
                            rootMargin: "300px 0px 300px 0px",
                            threshold: 1
                        }), L.current.observe(M.current),
                        function() {
                            var e;
                            null === (e = L.current) || void 0 === e || e.disconnect()
                        }
                }), [T, M]), (0, s.jsx)("div", {
                    ref: M,
                    children: ee ? (0, s.jsx)("div", {
                        className: "w-[167.5px] h-[216px] shadow rounded-[16px] lg:w-[200px] lg:h-[248px] ".concat(x().skeleton)
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "".concat(V ? "border-primary-blue" : "border-primary-gray/20", " flex flex-col items-center w-[167.5px] h-[216px] ").concat(C ? "" : "cursor-pointer", " group border-solid border-[1px] transition-shadow duration-300 shadow rounded-[16px] select-none p-[12px] hover:shadow-lg lg:w-[200px] lg:h-[248px] lg:p-[16px] ").concat(S),
                            onClick: function(e) {
                                C || (Z && Z(e, !V), "ERC1155" === d ? O(!0) : q(!V))
                            },
                            children: [(0, s.jsxs)("div", {
                                className: "relative w-full h-[136px] lg:h-[168px]",
                                children: [(0, s.jsx)("div", {
                                    className: "rounded-[8px] overflow-hidden absolute w-full h-full",
                                    children: (0, s.jsx)("div", {
                                        className: "transition-transform group-hover:scale-[1.2] w-full h-full",
                                        style: {
                                            backgroundImage: "url(".concat(G, ")"),
                                            backgroundSize: "".concat(K ? "50% auto" : "cover"),
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center",
                                            backgroundColor: "".concat(K ? "rgb(243,244,246)" : ""),
                                            border: "".concat(F ? "1px solid #e5e7eb" : "")
                                        }
                                    })
                                }), (0, s.jsx)("img", {
                                    className: "hidden",
                                    src: "".concat(G),
                                    onError: function() {
                                        Q(a.Z.src), W(!0)
                                    }
                                }), (0, s.jsx)("img", {
                                    className: "absolute top-[8px] left-[8px] w-[24px] h-[24px]",
                                    src: (0, u.l2)(f.networkId),
                                    "data-for": "nft-".concat(l, "-tooltip"),
                                    "data-tip": !0
                                }), (0, s.jsx)(m.Z, {
                                    id: "nft-".concat(l, "-tooltip"),
                                    type: "dark",
                                    effect: "solid",
                                    backgroundColor: "#01085a",
                                    children: (0, s.jsx)("span", {
                                        className: "rubik text-xs text-primary-white font-regular capitalize",
                                        children: (0, u.qe)(f.networkId)
                                    })
                                }), V && "ERC721" === d && (0, s.jsx)("div", {
                                    className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                    children: (0, s.jsx)("div", {
                                        className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                                        children: (0, s.jsx)("img", {
                                            src: r.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }), V && "ERC1155" === d && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, s.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                                            children: (0, s.jsx)("img", {
                                                src: r.Z.src,
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "absolute -bottom-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, s.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] border-[1px] border-white border-solid bg-primary-blue",
                                            children: (0, s.jsx)("span", {
                                                className: "text-primary-white text-[16px] font-semibold",
                                                children: H
                                            })
                                        })
                                    })]
                                }), (v || w) && "ERC1155" === d && (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "absolute -bottom-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, s.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] border-[1px] border-white border-solid bg-primary-blue",
                                            children: (0, s.jsx)("span", {
                                                className: "text-primary-white text-[16px] font-semibold",
                                                children: H
                                            })
                                        })
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "mt-[8px] text-left w-full",
                                children: (0, s.jsx)("span", {
                                    className: "text-base ".concat(V ? "text-primary-blue" : "text-primary-dark-blue", " lg:text-lg font-semibold"),
                                    children: (0, s.jsx)(i.Z, {
                                        text: "#".concat(l),
                                        className: "h-[28.5px]",
                                        animationSpeed: "20"
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex justify-center items-center mt-[4px] w-full",
                                children: [(0, s.jsx)(n.Z, {
                                    src: f.imageUrl ? f.imageUrl : "",
                                    statusVerification: f.statusVerification,
                                    className: "mr-[10px] w-[30px] h-[30px]",
                                    badgeClassName: "w-[15px] h-[15px]",
                                    showCollectionTooltip: !0,
                                    collection: f,
                                    onClickAddCollection: function(e) {
                                        z && z(e)
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "flex-1 h-full",
                                    children: (0, s.jsx)(i.Z, {
                                        text: f.name,
                                        className: "h-full text-xxs font-semibold text-primary-dark-blue flex items-center"
                                    })
                                })]
                            })]
                        }), B && (0, s.jsx)(c.Z, {
                            NFTSrc: t,
                            NFTId: l,
                            NFTCollection: f,
                            NFTAmount: H,
                            isUpdating: Number(H) > 0,
                            owner: h,
                            isOpen: !0,
                            action: function(e) {
                                E && Number(e) > 0 && (E(e), q(!0)), I && 0 === Number(e) && (I(), q(!1)), O(!1)
                            },
                            actionClose: function() {
                                O(!1)
                            }
                        })]
                    })
                })
            }
        },
        23977: function(e) {
            e.exports = {
                customCollectionModal: "CustomCollectionModal_customCollectionModal__fFGJh",
                goUp: "CustomCollectionModal_goUp__877bt",
                overlay: "CustomCollectionModal_overlay__iX58J",
                zoom: "CustomCollectionModal_zoom__m74iD"
            }
        },
        52208: function(e) {
            e.exports = {
                rotating: "NFTItem_rotating___MROH",
                rotate: "NFTItem_rotate__TTL_X",
                skeleton: "NFTItem_skeleton__6QJBH",
                "skeleton-loading": "NFTItem_skeleton-loading__4mt_C"
            }
        }
    }
]);