(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5066], {
        52400: function(e, t, a) {
            "use strict";
            a.d(t, {
                w_: function() {
                    return o
                }
            });
            var s = a(56168),
                r = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                n = s.createContext && s.createContext(r),
                l = function() {
                    return (l = Object.assign || function(e) {
                        for (var t, a = 1, s = arguments.length; a < s; a++)
                            for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                i = function(e, t) {
                    var a = {};
                    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (a[s[r]] = e[s[r]])
                    }
                    return a
                };

            function c(e) {
                return e && e.map((function(e, t) {
                    return s.createElement(e.tag, l({
                        key: t
                    }, e.attr), c(e.child))
                }))
            }

            function o(e) {
                return function(t) {
                    return s.createElement(d, l({
                        attr: l({}, e.attr)
                    }, t), c(e.child))
                }
            }

            function d(e) {
                var t = function(t) {
                    var a, r = e.attr,
                        n = e.size,
                        c = e.title,
                        o = i(e, ["attr", "size", "title"]),
                        d = n || t.size || "1em";
                    return t.className && (a = t.className), e.className && (a = (a ? a + " " : "") + e.className), s.createElement("svg", l({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, r, o, {
                        className: a,
                        style: l(l({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && s.createElement("title", null, c), e.children)
                };
                return void 0 !== n ? s.createElement(n.Consumer, null, (function(e) {
                    return t(e)
                })) : t(r)
            }
        },
        58424: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/assets/[network]/[collection]/[tokenid]", function() {
                return a(19671)
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
        19671: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: function() {
                    return T
                },
                default: function() {
                    return E
                }
            });
            var s = a(8014),
                r = a(64816),
                n = a(59166),
                l = a(34288),
                i = a(1984),
                c = a(62044),
                o = a(3152),
                d = a(37601),
                x = a(29113),
                m = a(75657),
                p = a(29622),
                u = a(54533),
                f = a(56168),
                h = a(69955),
                b = a(11852),
                j = a(15532),
                g = a(54373),
                y = a(45012),
                w = a(70362),
                N = a(85429),
                k = a(12039),
                v = "/_next/static/media/nft_description.9dd730b3.svg",
                _ = "/_next/static/media/nft_properties.143221ad.svg",
                C = "/_next/static/media/nft_traits.6f23d29f.svg",
                L = a(75575),
                O = "/_next/static/media/external_link_dark_blue.8e0955b4.svg",
                T = !0,
                E = function(e) {
                    var t, a, T = e.asset,
                        E = e.network,
                        I = e.collection,
                        S = e.nft,
                        Z = e.tokenid,
                        F = e.traitsRarity,
                        P = (0, c.Z)("common").t,
                        U = (0, u.T)(),
                        z = (0, u.C)((function(e) {
                            return e
                        })),
                        B = z.waccount,
                        D = z.trademodal,
                        R = B.isConnected,
                        A = D.isOpen,
                        H = (0, f.useState)(),
                        V = H[0],
                        q = H[1],
                        M = (0, f.useState)(!0),
                        X = M[0],
                        Q = M[1],
                        K = (0, f.useState)(!0),
                        W = K[0],
                        Y = K[1],
                        $ = (0, f.useState)(!0),
                        G = $[0],
                        J = $[1];
                    return (0, f.useEffect)((function() {
                        var e, t;
                        e = I, t = Z, (0, l.bf)((0, n.f)("getPostByNFT", [e, t]), {
                            headers: {
                                "content-type": "application/json",
                                "x-api-key": "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }
                        }).then((function(e) {
                            "id" in e && q(e)
                        })).catch((function(e) {}))
                    }), []), (0, s.jsxs)(w.Z, {
                        children: [T && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(i.default, {
                                children: [(0, s.jsx)("title", {
                                    children: P("genericTitleLabel") + " " + S.name + " " + Z
                                }), (0, s.jsx)("link", {
                                    rel: "canonical",
                                    href: "https://www.nfttrader.io/assets/".concat(E, "/").concat(I, "/").concat(Z)
                                }), (0, s.jsx)("meta", {
                                    name: "title",
                                    content: P("genericTitleLabel") + " " + S.name + " " + Z
                                }), (0, s.jsx)("meta", {
                                    name: "description",
                                    content: P("metaDescriptionLabel")
                                }), (0, s.jsx)("meta", {
                                    property: "og:site_name",
                                    content: "NFT Trader"
                                }), (0, s.jsx)("meta", {
                                    property: "og:type",
                                    content: "website"
                                }), (0, s.jsx)("meta", {
                                    property: "og:url",
                                    content: "https://www.nfttrader.io/".concat(E, "/").concat(I, "/").concat(Z)
                                }), (0, s.jsx)("meta", {
                                    property: "og:title",
                                    content: P("genericTitleLabel") + " " + S.name + " " + Z
                                }), (0, s.jsx)("meta", {
                                    property: "og:description",
                                    content: P("metaDescriptionLabel")
                                }), (0, s.jsx)("meta", {
                                    property: "og:image",
                                    content: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png"
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:card",
                                    content: "summary_large_image"
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:url",
                                    content: "https://www.nfttrader.io/".concat(E, "/").concat(I, "/").concat(Z)
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:title",
                                    content: P("genericTitleLabel") + " " + S.name + " " + Z
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:description",
                                    content: P("metaDescriptionLabel")
                                }), (0, s.jsx)("meta", {
                                    property: "twitter:image",
                                    content: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "mx-auto max-w-7xl p-4 lg:px-12 lg:pt-20 lg:pb-10",
                                children: (0, s.jsxs)("div", {
                                    className: "lg:flex",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col gap-y-[48px] lg:w-1/2",
                                        children: [(0, s.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, s.jsx)("img", {
                                                src: (0, o.l2)(T.networkId),
                                                alt: (0, o.qe)(T.networkId),
                                                className: "absolute top-2 left-2 cursor-pointer",
                                                width: 25,
                                                height: 25,
                                                "data-for": "nft-chain-tooltip",
                                                "data-tip": !0
                                            }), (0, s.jsx)("img", {
                                                src: T.cachedFileUrl ? T.cachedFileUrl : "",
                                                alt: T.metadata.name ? T.metadata.name : "",
                                                className: "w-full rounded-2xl"
                                            }), (0, s.jsx)(N.Z, {
                                                id: "nft-chain-tooltip",
                                                type: "dark",
                                                effect: "solid",
                                                backgroundColor: "#01085a",
                                                children: (0, s.jsx)("span", {
                                                    className: "rubik text-xs text-primary-white font-regular capitalize",
                                                    children: (0, o.qe)(T.networkId)
                                                })
                                            })]
                                        }), S.nfttraderCollection && "astar_zkevm" === E && (0, s.jsxs)("div", {
                                            className: "flex flex-col w-full border-gray-300 border-[1px] border-solid rounded-[16px]",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex flex-col gap-y-[8px] px-[20px] py-[18px] border-gray-300 border-b-[1px] border-solid",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex justify-between w-full",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex gap-x-[4px] items-center",
                                                        children: [(0, s.jsx)("img", {
                                                            src: v,
                                                            className: "w-[16px] h-[16px]"
                                                        }), (0, s.jsx)("span", {
                                                            className: "text-base font-semibold text-primary-blue",
                                                            children: P("descriptionLabel")
                                                        })]
                                                    }), (0, s.jsx)("img", {
                                                        src: k.Z.src,
                                                        className: "w-[16px] h-[16px] cursor-pointer ".concat(X ? "rotate-[180deg]" : ""),
                                                        onClick: function() {
                                                            Q(!X)
                                                        }
                                                    })]
                                                }), X && (0, s.jsx)("div", {
                                                    className: "rubik text-sm text-light text-primary-dark-blue",
                                                    children: S.nfttraderCollection.description
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex flex-col gap-y-[8px] px-[20px] py-[18px] border-gray-300 border-b-[1px] border-solid",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex justify-between w-full",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex gap-x-[4px] items-center",
                                                        children: [(0, s.jsx)("img", {
                                                            src: _,
                                                            className: "w-[16px] h-[16px]"
                                                        }), (0, s.jsx)("span", {
                                                            className: "text-base font-semibold text-primary-blue",
                                                            children: P("detailsLabel")
                                                        })]
                                                    }), (0, s.jsx)("img", {
                                                        src: k.Z.src,
                                                        className: "w-[16px] h-[16px] cursor-pointer ".concat(W ? "rotate-[180deg]" : ""),
                                                        onClick: function() {
                                                            Y(!W)
                                                        }
                                                    })]
                                                }), W && (0, s.jsxs)("div", {
                                                    className: "flex flex-col gap-y-[8px] w-full",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex items-center justify-between w-full",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "rubik text-primary-dark-blue text-sm font-light",
                                                            children: P("contractAddressLabel")
                                                        }), (0, s.jsxs)("a", {
                                                            className: "flex gap-x-[8px] items-center rubik text-[14px] text-primary-dark-blue hover:underline",
                                                            href: (0, x.w)(T.networkId, S.contract.address),
                                                            target: "_blank",
                                                            children: [(0, L.N)(S.contract.address), (0, s.jsx)("img", {
                                                                src: O,
                                                                className: "w-[16px] h-[16px]"
                                                            })]
                                                        })]
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex items-center justify-between w-full",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "rubik text-primary-dark-blue text-sm font-light",
                                                            children: P("tokenIDLabel")
                                                        }), (0, s.jsx)("span", {
                                                            className: "rubik text-[14px] text-primary-dark-blue",
                                                            children: S.tokenId
                                                        })]
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex items-center justify-between w-full",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "rubik text-primary-dark-blue text-sm font-light",
                                                            children: P("tokenStandardLabel")
                                                        }), (0, s.jsx)("span", {
                                                            className: "rubik text-[14px] text-primary-dark-blue",
                                                            children: S.nfttraderCollection.tokenType
                                                        })]
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex items-center justify-between w-full",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "rubik text-primary-dark-blue text-sm font-light",
                                                            children: P("chainLabel")
                                                        }), (0, s.jsx)("span", {
                                                            className: "rubik text-[14px] text-primary-dark-blue",
                                                            children: (0, o.qe)(T.networkId)
                                                        })]
                                                    }), (0, s.jsxs)("div", {
                                                        className: "flex items-center justify-between w-full",
                                                        children: [(0, s.jsx)("span", {
                                                            className: "rubik text-primary-dark-blue text-sm font-light",
                                                            children: P("creatorRoyaltiesLabel")
                                                        }), (0, s.jsx)("span", {
                                                            className: "rubik text-[14px] text-primary-dark-blue",
                                                            children: S.nfttraderCollection.percentageRoyalties
                                                        })]
                                                    })]
                                                })]
                                            }), F && "traits" in F && (0, s.jsxs)("div", {
                                                className: "flex flex-col gap-y-[8px] px-[20px] py-[18px]",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex justify-between w-full",
                                                    children: [(0, s.jsxs)("div", {
                                                        className: "flex gap-x-[4px] items-center",
                                                        children: [(0, s.jsx)("img", {
                                                            src: C,
                                                            className: "w-[16px] h-[16px]"
                                                        }), (0, s.jsx)("span", {
                                                            className: "text-base font-semibold text-primary-blue",
                                                            children: P("traitsLabel")
                                                        })]
                                                    }), (0, s.jsx)("img", {
                                                        src: k.Z.src,
                                                        className: "w-[16px] h-[16px] cursor-pointer ".concat(G ? "rotate-[180deg]" : ""),
                                                        onClick: function() {
                                                            J(!G)
                                                        }
                                                    })]
                                                }), G && (0, s.jsx)("div", {
                                                    className: "flex flex-wrap gap-x-[12px] gap-y-[12px]",
                                                    children: F.traits.map((function(e, t) {
                                                        return (0, s.jsxs)("div", {
                                                            className: "flex flex-col w-[30%] gap-y-[4px] px-[16px] py-[12px] text-center items-center rounded-[16px] border-[1px] border-solid border-primary-gray bg-[#f3f4f6]",
                                                            children: [(0, s.jsx)("span", {
                                                                className: "rubik text-xxs text-primary-dark-blue",
                                                                children: e.key.toUpperCase()
                                                            }), (0, s.jsx)("span", {
                                                                className: "rubik text-sm text-primary-dark-blue",
                                                                children: e.value
                                                            }), (0, s.jsxs)("span", {
                                                                className: "rubik text-sm font-light text-primary-dark-blue",
                                                                children: [Number(e.rarity).toFixed(2), "%"]
                                                            })]
                                                        }, t)
                                                    }))
                                                })]
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "mt-6 lg:mt-0 lg:w-1/2 lg:pl-32",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex-1",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "mt-2 flex flex-1 items-center space-x-4",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "relative h-6 w-6",
                                                        children: (0, s.jsx)(d.Z, {
                                                            src: S ? S.nfttraderCollection ? S.nfttraderCollection.imageUrl : S.contract.openSeaMetadata.imageUrl ? S.contract.openSeaMetadata.imageUrl : "" : T.openSea.imageUrl,
                                                            className: "w-[24px] h-[24px]",
                                                            statusVerification: S.nfttraderCollection ? S.nfttraderCollection.statusVerification : void 0,
                                                            showCollectionTooltip: !!S,
                                                            collection: S.nfttraderCollection ? S.nfttraderCollection : void 0,
                                                            badgeClassName: "w-[8px] h-[8px]"
                                                        })
                                                    }), (0, s.jsx)("h3", {
                                                        className: "font-museo text-sm font-semibold text-primary-dark-blue",
                                                        children: S ? S.name : T.openSea.collectionName ? T.openSea.collectionName : I
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: "mt-5 font-museo text-4xl font-semibold text-primary-blue",
                                                    children: ["#", Z]
                                                })]
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "mt-6 text-gray-500 lg:mt-8",
                                            children: [P("ownedByLabel"), ":", " ", (0, s.jsx)("span", {
                                                className: "text-primary-blue hover:text-primary-dark-blue",
                                                children: (a = T.user, T ? !a || "object" === typeof a && 0 === Object.keys(a).length ? "ERC721" === T.type ? (0, s.jsx)("a", {
                                                    href: (0, x.w)(T.networkId, T.owner),
                                                    target: "_blank",
                                                    children: T.owner
                                                }) : P("multipleOwnersLabel") : (0, s.jsx)(m.default, {
                                                    href: "/".concat(a.username ? a.username : a.address),
                                                    children: (0, s.jsx)("a", {
                                                        children: a.username ? "@".concat(a.username) : "".concat(a.address)
                                                    })
                                                }) : "")
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "mt-3 flex items-center text-gray-500",
                                            children: (0, s.jsx)(p.Z, {
                                                assetsAccountLeft: [{
                                                    name: null !== (t = T.metadata.name) && void 0 !== t ? t : "",
                                                    statusVerification: 0,
                                                    address: I,
                                                    imageUrl: "",
                                                    networkId: T.networkId,
                                                    abi: null,
                                                    type: T.type,
                                                    isNft: !0,
                                                    symbol: "",
                                                    createdAt: "",
                                                    tokenId: T.networkId,
                                                    amount: null,
                                                    amountHumanReadable: null,
                                                    isDifferent: !1
                                                }],
                                                networkId: T.networkId
                                            })
                                        }), (0, s.jsxs)(s.Fragment, {
                                            children: [!V && (0, s.jsxs)("div", {
                                                className: "flex flex-col items-center mt-8 gap-y-[24px] rounded-2xl bg-primary-blue p-6 lg:mt-14",
                                                children: [(0, s.jsx)("p", {
                                                    className: "text-center font-museo font-semibold text-white",
                                                    children: P("makeTradeOfferLabel")
                                                }), (0, s.jsx)(b.Z, {
                                                    text: P("startTradeLabel"),
                                                    type: {
                                                        class: "primary",
                                                        icon: !1,
                                                        hasColoredBg: !0
                                                    },
                                                    initialState: {
                                                        state: "default"
                                                    },
                                                    size: "large",
                                                    onClick: function() {
                                                        R ? (U((0, j.eV)("maker")), U((0, j.r$)(!0)), document.body.classList.add("no-scroll")) : U((0, g.Hj)(!0))
                                                    },
                                                    className: "w-[162px]"
                                                })]
                                            }), V && 0 === V.status && B && (0, s.jsx)(s.Fragment, {
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex flex-col gap-y-[16px]",
                                                    children: [(0, s.jsx)("p", {
                                                        className: "mt-8 rounded-2xl bg-primary-blue py-3 px-6 text-center font-museo font-semibold text-white",
                                                        children: P("thisNFTOfferedTradeLabel")
                                                    }), (0, s.jsx)(h.Z, {
                                                        post: V,
                                                        currentUserAddress: B.account,
                                                        className: "lg:pl-[0px]",
                                                        options: {
                                                            noPadding: !0,
                                                            dateMobile: !0
                                                        },
                                                        isPreview: !1
                                                    })]
                                                })
                                            }), V && 4 === V.status && (0, s.jsx)(s.Fragment, {
                                                children: (0, s.jsxs)("div", {
                                                    className: "mt-8 rounded-2xl bg-gray-100 p-6 lg:mt-14",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "text-center",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "inline-flex items-center space-x-2 rounded-full bg-primary-blue py-1 px-3 font-museo text-xs font-semibold text-white",
                                                            children: [(0, s.jsx)(r.ahH, {
                                                                className: "h-3 w-3"
                                                            }), (0, s.jsx)("span", {
                                                                children: P("reservedLabel")
                                                            })]
                                                        })
                                                    }), (0, s.jsx)("p", {
                                                        className: "mt-6 text-center font-museo font-semibold text-primary-dark-blue",
                                                        children: P("NFTUnderPostLabel")
                                                    }), (0, s.jsx)("p", {
                                                        className: "mt-2 text-center text-sm font-light text-primary-dark-blue",
                                                        children: P("pleaseComeBackLaterOfferLabel")
                                                    }), (0, s.jsx)("button", {
                                                        className: "mx-auto mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gray-500 py-3.5 px-6 font-museo font-semibold text-white lg:w-auto",
                                                        children: (0, s.jsx)("span", {
                                                            children: P("startTradeLabel")
                                                        })
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), A && (0, s.jsx)(y.Z, {})]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [4885, 5937, 9846, 5429, 7682, 362, 9441, 1859, 5012, 9955, 9774, 2888, 179], (function() {
            return t = 58424, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);