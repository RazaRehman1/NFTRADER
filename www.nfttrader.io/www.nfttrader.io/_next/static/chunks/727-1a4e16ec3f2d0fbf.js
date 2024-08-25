(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [727], {
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
        65120: function(e, t, s) {
            "use strict";
            var n = s(8014),
                r = s(56168),
                l = s(80190),
                i = s(63350),
                a = s.n(i);
            t.Z = function(e) {
                var t = e.isChecked,
                    s = void 0 !== t && t,
                    i = e.isDisabled,
                    c = void 0 !== i && i,
                    o = e.label,
                    d = e.value,
                    u = e.onClick,
                    x = (0, r.useRef)(null),
                    m = (0, r.useState)(s),
                    f = m[0],
                    p = m[1],
                    h = (0, r.useState)(c),
                    g = h[0],
                    b = h[1];
                return (0, r.useEffect)((function() {
                    p(s)
                }), [s]), (0, r.useEffect)((function() {
                    b(c)
                }), [c]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: "flex items-center ".concat(g ? "cursor-default" : "cursor-pointer", " ").concat(o ? "gap-x-[16px] justify-between" : "justify-center"),
                        onClick: function() {
                            g || (p(!f), u && u(!f, d))
                        },
                        children: [(0, n.jsx)("div", {
                            className: "flex items-center justify-center w-[32px] h-[32px]",
                            children: (0, n.jsx)("div", {
                                className: "flex items-center justify-center w-[22px] h-[22px] border-[1px] border-solid rounded-[6px] select-none ".concat(g ? "border-primary-gray" : f ? "border-primary-blue" : "border-primary-gray hover:border-primary-blue"),
                                children: f && (0, n.jsx)("img", {
                                    ref: x,
                                    src: l.Z.src,
                                    className: "w-[15px] ".concat(g ? a().disabled : "")
                                })
                            })
                        }), o ? (0, n.jsx)("span", {
                            className: "text-sm font-semibold ".concat(g ? "text-primary-gray" : "text-primary-dark-blue", "  select-none"),
                            children: o
                        }) : (0, n.jsx)(n.Fragment, {})]
                    })
                })
            }
        },
        29452: function(e, t, s) {
            "use strict";
            var n = s(8014),
                r = s(56168),
                l = s(27746),
                i = s(45617),
                a = s.n(i);
            t.Z = function(e) {
                var t = e.message,
                    s = e.value,
                    i = e.index,
                    c = e.isSelected,
                    o = void 0 !== c && c,
                    d = e.isDisabled,
                    u = void 0 !== d && d,
                    x = e.onClick,
                    m = e.icon,
                    f = (0, r.useState)(o),
                    p = f[0],
                    h = f[1],
                    g = (0, r.useContext)(l.w),
                    b = g.currentIndex,
                    j = g.setCurrentIndex,
                    y = g.setCurrentValue;
                return (0, r.useEffect)((function() {
                    h(b === i)
                }), [b]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        className: "flex-none w-fit h-[36px] ".concat(u ? "bg-gray-100 border-gray-200" : p ? "bg-primary-blue border-primary-blue cursor-pointer transition-all duration-300 hover:shadow-md" : "bg-gray-100 border-gray-200 cursor-pointer transition-all duration-300 hover:bg-primary-blue hover:border-primary-blue hover:shadow-md", " group px-[16px] py-[8px] border-solid border-[1px] rounded-[32px] select-none"),
                        onClick: function() {
                            u || (x && x(s, i), j(i), y(s))
                        },
                        children: (0, n.jsxs)("div", {
                            className: "flex items-center w-full h-full ".concat(m ? "gap-x-[5px]" : ""),
                            children: [m && (0, n.jsx)("span", {
                                className: "".concat(u ? "".concat(a().disabled) : p ? "".concat(a().selected) : ""),
                                children: m
                            }), (0, n.jsx)("span", {
                                className: "text-sm font-regular ".concat(u ? "text-primary-gray" : p ? "text-primary-white" : "text-primary-dark-blue group-hover:text-primary-white"),
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
                l = s(60638),
                i = s(31017),
                a = s(86530),
                c = s.n(a);
            t.Z = function(e) {
                var t = e.src,
                    s = e.size,
                    a = e.url,
                    o = (0, r.useRef)(!1),
                    d = (0, r.useRef)(null),
                    u = (0, r.useState)(!1),
                    x = u[0],
                    m = u[1];
                return (0, r.useEffect)((function() {
                    return o.current = !0,
                        function() {
                            o.current = !1
                        }
                }), []), (0, r.useEffect)((function() {
                    var e = (0, l.i)(t);
                    if (x) {
                        d.current.src = e
                    } else {
                        var s = new window.Image;
                        s.onload = function() {
                            o.current && m(!0)
                        }, s.onerror = function() {
                            o.current && m(!1)
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
                            href: a,
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
                l = s(27746);
            t.Z = function(e) {
                var t = e.children,
                    s = e.onSelect,
                    i = e.selectedIndex,
                    a = (0, r.useState)("undefined" !== typeof i ? i : -1),
                    c = a[0],
                    o = a[1],
                    d = (0, r.useState)(void 0),
                    u = d[0],
                    x = d[1];
                return (0, r.useEffect)((function() {
                    s && u && s(u, c)
                }), [u]), (0, n.jsx)(l.w.Provider, {
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
        30727: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return Cs
                }
            });
            var n = s(8014),
                r = s(56168),
                l = s(65246),
                i = s(54533),
                a = s(47257),
                c = s(9918),
                o = s.n(c),
                d = s(44889),
                u = s(11304),
                x = s(70164),
                m = s(64380),
                f = s(11852),
                p = s(9495),
                h = function(e) {
                    var t = e.stepperItems,
                        s = (0, i.C)((function(e) {
                            return e
                        })).postmodal,
                        r = (0, i.T)(),
                        a = s.currentStepMenu;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-center mr-[24px]",
                                children: t.map((function(e, t) {
                                    return (0, n.jsx)(p.Z, {
                                        isClickable: t <= a,
                                        isCurrent: a === t,
                                        onClick: function(s) {
                                            ! function(e) {
                                                0 === e ? (r((0, l.bW)()), r((0, l.C$)()), r((0, l.xX)()), r((0, l.MW)(!1)), r((0, l.eF)(7))) : 1 === e ? (r((0, l.C$)()), r((0, l.bW)()), r((0, l.xX)()), r((0, l.MW)(!1))) : 2 === e && (r((0, l.C$)()), r((0, l.MW)(!1)))
                                            }(t), r((0, l.Um)(t)), e.onClick(s)
                                        },
                                        className: "".concat(t > 0 ? "mx-[4px]" : "mr-[4px]")
                                    }, t)
                                }))
                            }), (0, n.jsxs)("div", {
                                className: "hidden items-center lg:flex text-primary-white text-base font-semibold",
                                children: [(0, n.jsx)("span", {
                                    className: "text-xl font-semibold mr-[16px]",
                                    children: "0".concat(a + 1)
                                }), " ", (0, n.jsx)("span", {
                                    children: t[a].stepDescription
                                })]
                            })]
                        })
                    })
                },
                g = s(62044),
                b = s(21558),
                j = s(71732),
                y = function(e) {
                    var t = e.stepDescription,
                        s = e.isClickable,
                        r = void 0 !== s && s,
                        l = e.isCurrent,
                        i = void 0 !== l && l,
                        a = e.isCompleted,
                        c = void 0 !== a && a,
                        o = e.index,
                        d = e.onClick,
                        u = e.className,
                        x = (0, g.Z)("common").t;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("span", {
                            className: "flex justify-between items-center",
                            children: [(0, n.jsx)("span", {
                                className: "".concat(i ? "text-primary-dark-blue" : "", " ").concat(i || c ? "" : "text-primary-gray", " ").concat(c && !i ? "text-primary-blue" : "", " text-xl font-semibold mr-[18px]"),
                                children: "0".concat(o + 1)
                            }), (0, n.jsx)("span", {
                                className: "text-base font-semibold ".concat(i ? "text-primary-dark-blue" : "", " ").concat(r ? "cursor-pointer" : "", " ").concat(c && !i ? "text-primary-blue" : "", " ").concat(i || c ? "" : "text-primary-gray", " ").concat(u || ""),
                                onClick: d,
                                children: t
                            })]
                        }), c && !i && (0, n.jsxs)("span", {
                            className: "flex items-center",
                            children: [(0, n.jsx)("span", {
                                className: "text-xxs text-primary-blue mr-[8px]",
                                children: x("completeLabel")
                            }), (0, n.jsx)("img", {
                                src: j.Z.src,
                                width: 16,
                                height: 16
                            })]
                        })]
                    })
                },
                v = s(22535),
                N = s.n(v),
                w = function(e) {
                    var t = e.stepperItems,
                        s = (0, g.Z)("common").t,
                        c = (0, i.C)((function(e) {
                            return e
                        })).postmodal,
                        o = (0, i.T)(),
                        d = c.currentStepMenu,
                        u = c.isStepperMenuListOpen,
                        x = c.isDeletePostModalOpen,
                        m = function() {
                            o((0, l.tj)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        if (u) {
                            var e = function() {
                                window.innerWidth > 1023 && m()
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [u]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("section", {
                            className: "".concat(N().stepperMenuList, " fixed w-full h-full overflow-y-scroll scrollbar-hide z-10 bg-primary-white px-[16px]"),
                            children: [(0, n.jsxs)("div", {
                                className: "".concat(N().mainContent),
                                children: [(0, n.jsx)("div", {
                                    className: "flex items-center w-full h-[72px]",
                                    children: (0, n.jsx)("div", {
                                        className: "flex items-center justify-center rounded-full bg-primary-blue w-[40px] h-[40px] cursor-pointer hover:bg-primary-dark-blue",
                                        onClick: m,
                                        children: (0, n.jsx)("img", {
                                            width: 16,
                                            height: 16,
                                            src: b.Z.src
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
                                                                0 === e ? (o((0, l.bW)()), o((0, l.C$)()), o((0, l.xX)()), o((0, l.MW)(!1)), o((0, l.eF)(7))) : 1 === e ? (o((0, l.C$)()), o((0, l.bW)()), o((0, l.xX)()), o((0, l.MW)(!1))) : 2 === e && (o((0, l.C$)()), o((0, l.MW)(!1)))
                                                            }(t), o((0, l.Um)(t)), e.onClick(s))
                                                        },
                                                        className: "flex justify-between w-full",
                                                        children: (0, n.jsx)(y, {
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
                                children: (0, n.jsx)(f.Z, {
                                    text: s("cancelPostLabel"),
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
                                        o((0, l.fs)(!0))
                                    }
                                })
                            })]
                        }), x && (0, n.jsx)(a.Z, {
                            modalTitle: s("cancelPostLabel"),
                            modalDescription: s("This will cancel all your current choices"),
                            action: function() {
                                document.body.classList.remove("no-scroll"), o((0, l.pV)(!1)), o((0, l.q7)()), o((0, l.fs)(!1))
                            },
                            actionClose: function() {
                                o((0, l.fs)(!1))
                            },
                            buttonsText: [s("yesCancelItLabel"), s("dismissLabel")],
                            isOpen: !0
                        })]
                    })
                },
                k = function(e) {
                    var t = e.stepperItems,
                        s = (0, g.Z)("common").t,
                        r = (0, i.C)((function(e) {
                            return e
                        })).postmodal,
                        a = (0, i.T)(),
                        c = r.isStepperMenuListOpen,
                        p = r.canProceed,
                        b = r.currentStepMenu;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "".concat(o().stepperMenu, " flex justify-between items-center w-full h-[72px] bg-primary-blue rounded-b-[40px] px-[16px] lg:h-[88px]"),
                            children: b <= 3 ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center justify-center w-[40px] h-[40px] mr-[10px]",
                                        children: [(0, n.jsx)("img", {
                                            src: d.Z.src,
                                            className: "cursor-pointer lg:hidden",
                                            onClick: function() {
                                                a((0, l.tj)(!0))
                                            },
                                            width: 16,
                                            height: 16
                                        }), (0, n.jsx)("img", {
                                            src: u.Z.src,
                                            className: "cursor-pointer hidden lg:block",
                                            onClick: function() {
                                                a((0, l.fs)(!0))
                                            },
                                            width: 26,
                                            height: 26
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "flex items-center justify-center",
                                        children: t && (0, n.jsx)(h, {
                                            stepperItems: t
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, n.jsx)(n.Fragment, {
                                        children: b < 3 ? (0, n.jsx)(f.Z, {
                                            text: s("proceedLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !0
                                            },
                                            size: "small",
                                            onClick: function() {
                                                var e;
                                                a((0, l.Um)(b + 1)), a((0, l.MW)(!1)), null === (e = document.getElementById("postmodal-body")) || void 0 === e || e.scrollTo(0, 0)
                                            },
                                            initialState: {
                                                state: p ? "default" : "disabled"
                                            },
                                            iconSrc: x.Z.src,
                                            className: "lg:px-8 lg:py-4"
                                        }) : (0, n.jsx)(f.Z, {
                                            text: s("proceedLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !0
                                            },
                                            size: "small",
                                            onClick: function() {
                                                a((0, l.Um)(b + 1)), a((0, l.MW)(!1))
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            iconSrc: x.Z.src,
                                            className: "lg:px-8 lg:py-4"
                                        })
                                    })
                                })]
                            }) : (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                    className: "w-full flex justify-center",
                                    children: (0, n.jsx)("img", {
                                        src: m.Z.src,
                                        className: "w-[170px] h-[auto] lg:w-[187px]"
                                    })
                                })
                            })
                        }), c && t && (0, n.jsx)(w, {
                            stepperItems: t
                        })]
                    })
                },
                C = s(58018),
                S = s.n(C),
                L = s(39496),
                E = s(80636),
                Z = s(29452),
                T = s(34102),
                F = s.n(T),
                _ = s(49803),
                I = s(24058),
                R = "/_next/static/media/video.48c478f8.svg",
                D = "/_next/static/media/video_blue.4441eb6d.svg",
                M = s(78913),
                A = s(52802),
                P = s(14808),
                O = function(e) {
                    var t = e.isCurrent,
                        s = (0, g.Z)("common").t,
                        a = (0, r.useState)(!0),
                        c = a[0],
                        o = a[1],
                        d = (0, r.useState)(!0),
                        u = d[0],
                        x = d[1],
                        m = (0, r.useState)(!0),
                        f = m[0],
                        p = m[1],
                        h = (0, r.useState)(),
                        b = (h[0], h[1]),
                        j = (0, r.useState)(null),
                        y = j[0],
                        v = j[1],
                        N = (0, r.useState)(null),
                        w = N[0],
                        k = N[1],
                        C = (0, r.useState)(),
                        S = (C[0], C[1]),
                        T = (0, r.useState)(!1),
                        O = T[0],
                        z = T[1],
                        B = (0, r.useState)(!1),
                        U = B[0],
                        V = B[1],
                        H = (0, i.T)();
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(L.Z, {
                            isCurrent: t,
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col lg:flex-row",
                                children: [(0, n.jsxs)("div", {
                                    className: "".concat(F().bgFormLeft, " flex flex-col justify-between lg:bg-primary-blue lg:p-[48px] lg:rounded-bl-[16px]"),
                                    children: [(0, n.jsx)("h1", {
                                        className: "text-2xl font-semibold text-primary-dark-blue lg:text-primary-white lg:text-3xl",
                                        children: s("pageOnePostModalTitleLabel")
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col text-primary-white gap-y-[10px]",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-primary-white text-base font-bold",
                                            children: s("newPublicHuntLabel")
                                        }), (0, n.jsxs)(A.v, {
                                            as: "div",
                                            className: "relative inline-block text-left",
                                            children: [(0, n.jsxs)(A.v.Button, {
                                                className: "flex items-center gap-x-[8px] cursor-pointer hover:underline",
                                                children: [(0, n.jsx)("span", {
                                                    className: "text-primary-white text-sm font-regular",
                                                    children: s("watchTutorialLabel")
                                                }), (0, n.jsx)("img", {
                                                    src: R,
                                                    className: "w-[16px]"
                                                })]
                                            }), (0, n.jsx)(P.u, {
                                                enter: "transition duration-100 ease-out",
                                                enterFrom: "transform scale-95 opacity-0",
                                                enterTo: "transform scale-100 opacity-100",
                                                leave: "transition duration-75 ease-out",
                                                leaveFrom: "transform scale-100 opacity-100",
                                                leaveTo: "transform scale-95 opacity-0",
                                                children: (0, n.jsx)(A.v.Items, {
                                                    className: "absolute bottom-[40px] right-0 w-[310px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "flex flex-col px-1 py-1",
                                                        children: [(0, n.jsx)(A.v.Item, {
                                                            children: function(e) {
                                                                var t = e.active;
                                                                return (0, n.jsxs)("a", {
                                                                    className: "flex gap-x-[10px] px-[5px] py-[4px] ".concat(t && "bg-gray-100"),
                                                                    href: "https://youtu.be/DFOU77-SlXg",
                                                                    target: "_blank",
                                                                    children: [(0, n.jsx)("img", {
                                                                        src: D,
                                                                        className: "w-[15px]"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "text-primary-dark-blue font-semibold text-xs",
                                                                        children: s("isItSafeNFTPostSystemLabel")
                                                                    })]
                                                                })
                                                            }
                                                        }), (0, n.jsx)(A.v.Item, {
                                                            children: function(e) {
                                                                var t = e.active;
                                                                return (0, n.jsxs)("a", {
                                                                    className: "flex gap-x-[10px] px-[5px] py-[4px] ".concat(t && "bg-gray-100"),
                                                                    href: "https://youtu.be/2uZtTBqrqKs",
                                                                    target: "_blank",
                                                                    children: [(0, n.jsx)("img", {
                                                                        src: D,
                                                                        className: "w-[15px]"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "text-primary-dark-blue font-semibold text-xs",
                                                                        children: s("howToCreatePostTradingCenterLabel")
                                                                    })]
                                                                })
                                                            }
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "".concat(F().corner, " relative flex flex-col my-[40px] lg:my-[0px]"),
                                    children: (0, n.jsxs)("div", {
                                        className: "lg:p-[56px] lg:pr-[150px] relative rounded-[16px] rounded-bl-[0px] rounded-tl-[40px] lg:bg-primary-white",
                                        children: [(0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("h3", {
                                                className: "text-primary-dark-blue text-xl font-semibold",
                                                children: s("letsStartHelloLabel")
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-sm font-light mt-[4px]",
                                                children: s("chooseWayLabel")
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex flex-wrap gap-x-[12px] gap-y-[16px] mt-[16px]",
                                            children: (0, n.jsxs)(E.Z, {
                                                onSelect: function(e) {
                                                    b(e), o(!1), H((0, l.Z)([{
                                                        type: e
                                                    }])), H((0, l.Gu)())
                                                },
                                                children: [(0, n.jsx)(Z.Z, {
                                                    message: s("messageCreatePost1Label"),
                                                    value: "0",
                                                    index: 0
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("messageCreatePost2Label"),
                                                    value: "1",
                                                    index: 1
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("messageCreatePost3Label"),
                                                    value: "2",
                                                    index: 2
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("messageCreatePost4Label"),
                                                    value: "3",
                                                    index: 3
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("messageCreatePost5Label"),
                                                    value: "4",
                                                    index: 4
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("messageCreatePost6Label"),
                                                    value: "5",
                                                    index: 5
                                                })]
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col mt-[56px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "text-primary-dark-blue text-xl font-semibold",
                                                children: s("imLookingForLabel")
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-sm font-light mt-[4px]",
                                                children: s("whatKindForLabel")
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex flex-wrap gap-x-[12px] gap-y-[16px] mt-[16px]",
                                            children: (0, n.jsxs)(E.Z, {
                                                onSelect: function(e) {
                                                    v(e), x(!1), H((0, l.cK)({
                                                        lookingForType: e,
                                                        offerType: w
                                                    })), H((0, l.Gu)())
                                                },
                                                children: [(0, n.jsx)(Z.Z, {
                                                    message: s("imLookingForPostOneLabel"),
                                                    value: "0",
                                                    index: 0,
                                                    isDisabled: c,
                                                    onClick: function() {
                                                        z(!1)
                                                    },
                                                    icon: (0, n.jsx)("img", {
                                                        src: _.Z.src,
                                                        className: "w-[16px]"
                                                    })
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("imLookingForPostTwoLabel"),
                                                    value: "1",
                                                    index: 1,
                                                    isDisabled: c,
                                                    onClick: function() {
                                                        z(!1)
                                                    },
                                                    icon: (0, n.jsx)("img", {
                                                        src: I.Z.src,
                                                        className: "w-[16px]"
                                                    })
                                                }), U ? (0, n.jsx)(Z.Z, {
                                                    message: s("imLookingForPostThreeLabel"),
                                                    value: "2",
                                                    index: 2,
                                                    isDisabled: !0
                                                }) : (0, n.jsx)(Z.Z, {
                                                    message: s("imLookingForPostThreeLabel"),
                                                    value: "2",
                                                    index: 2,
                                                    isDisabled: c,
                                                    onClick: function() {
                                                        z(!0)
                                                    }
                                                })]
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col mt-[56px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "text-primary-dark-blue text-xl font-semibold",
                                                children: s("iWillOfferLabel")
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-sm font-light mt-[4px]",
                                                children: s("iWillOfferDescriptionLabel")
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex flex-wrap gap-x-[12px] gap-y-[16px] mt-[16px]",
                                            children: (0, n.jsxs)(E.Z, {
                                                onSelect: function(e) {
                                                    k(e), p(!1), H((0, l.cK)({
                                                        lookingForType: y,
                                                        offerType: e
                                                    })), H((0, l.Gu)())
                                                },
                                                children: [(0, n.jsx)(Z.Z, {
                                                    message: s("offerPostOneLabel"),
                                                    value: "0",
                                                    index: 0,
                                                    isDisabled: u,
                                                    onClick: function() {
                                                        V(!1)
                                                    }
                                                }), O ? (0, n.jsx)(Z.Z, {
                                                    message: s("offerPostTwoLabel"),
                                                    value: "1",
                                                    index: 1,
                                                    isDisabled: !0
                                                }) : (0, n.jsx)(Z.Z, {
                                                    message: s("offerPostTwoLabel"),
                                                    value: "1",
                                                    index: 1,
                                                    isDisabled: u,
                                                    onClick: function() {
                                                        V(!0)
                                                    }
                                                })]
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col mt-[56px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "text-primary-dark-blue text-xl font-semibold",
                                                children: s("howLongPostLabel")
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-sm font-light mt-[4px]",
                                                children: s("howLongPostDescriptionLabel")
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex flex-wrap gap-x-[12px] gap-y-[16px] mt-[16px]",
                                            children: (0, n.jsxs)(E.Z, {
                                                onSelect: function(e) {
                                                    S(e), H((0, l.eF)(Number(e))), H((0, l.Gu)())
                                                },
                                                children: [(0, n.jsx)(Z.Z, {
                                                    message: s("postDurationOneLabel"),
                                                    value: "1",
                                                    index: 0,
                                                    isDisabled: f
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("postDurationTwoLabel"),
                                                    value: "3",
                                                    index: 1,
                                                    isDisabled: f
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("postDurationThreeLabel"),
                                                    value: "7",
                                                    index: 2,
                                                    isDisabled: f
                                                }), (0, n.jsx)(Z.Z, {
                                                    message: s("postDurationFourLabel"),
                                                    value: "15",
                                                    index: 3,
                                                    isDisabled: f
                                                })]
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col gap-y-[4px] h-[88px] w-full relative py-[20px] px-[32px] rounded-[16px] bg-primary-blue mt-[64px] overflow-hidden lg:hidden",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-bold text-base text-primary-white",
                                                children: s("newPublicHuntLabel")
                                            }), (0, n.jsxs)(A.v, {
                                                as: "div",
                                                className: "relative inline-block text-left",
                                                children: [(0, n.jsxs)(A.v.Button, {
                                                    className: "flex items-center gap-x-[8px] cursor-pointer hover:underline",
                                                    children: [(0, n.jsx)("span", {
                                                        className: "text-primary-white text-sm font-regular",
                                                        children: s("watchTutorialLabel")
                                                    }), (0, n.jsx)("img", {
                                                        src: R,
                                                        className: "w-[16px]"
                                                    })]
                                                }), (0, n.jsx)(P.u, {
                                                    enter: "transition duration-100 ease-out",
                                                    enterFrom: "transform scale-95 opacity-0",
                                                    enterTo: "transform scale-100 opacity-100",
                                                    leave: "transition duration-75 ease-out",
                                                    leaveFrom: "transform scale-100 opacity-100",
                                                    leaveTo: "transform scale-95 opacity-0",
                                                    children: (0, n.jsx)(A.v.Items, {
                                                        className: "absolute bottom-[0px] left-0 w-[310px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex flex-col px-1 py-1",
                                                            children: [(0, n.jsx)(A.v.Item, {
                                                                children: function(e) {
                                                                    var t = e.active;
                                                                    return (0, n.jsxs)("a", {
                                                                        className: "flex gap-x-[10px] px-[5px] py-[4px] ".concat(t && "bg-gray-100"),
                                                                        href: "https://youtu.be/DFOU77-SlXg",
                                                                        target: "_blank",
                                                                        children: [(0, n.jsx)("img", {
                                                                            src: D,
                                                                            className: "w-[15px]"
                                                                        }), (0, n.jsx)("span", {
                                                                            className: "text-primary-dark-blue font-semibold text-xs",
                                                                            children: s("isItSafeNFTPostSystemLabel")
                                                                        })]
                                                                    })
                                                                }
                                                            }), (0, n.jsx)(A.v.Item, {
                                                                children: function(e) {
                                                                    var t = e.active;
                                                                    return (0, n.jsxs)("a", {
                                                                        className: "flex gap-x-[10px] px-[5px] py-[4px] ".concat(t && "bg-gray-100"),
                                                                        href: "https://youtu.be/2uZtTBqrqKs",
                                                                        target: "_blank",
                                                                        children: [(0, n.jsx)("img", {
                                                                            src: D,
                                                                            className: "w-[15px]"
                                                                        }), (0, n.jsx)("span", {
                                                                            className: "text-primary-dark-blue font-semibold text-xs",
                                                                            children: s("howToCreatePostTradingCenterLabel")
                                                                        })]
                                                                    })
                                                                }
                                                            })]
                                                        })
                                                    })
                                                })]
                                            }), (0, n.jsx)("img", {
                                                src: M.Z.src,
                                                className: "absolute -right-[20px] -top-[10px]",
                                                width: 108,
                                                height: 108
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                z = s(46834),
                B = s(83741),
                U = s(32176),
                V = "/_next/static/media/smile_favourite_collection.16037f2a.svg",
                H = s(29548),
                W = s(12348),
                G = s(45511),
                J = s(9197),
                K = s(65746),
                q = s.n(K),
                $ = s(34288),
                Y = s(59166),
                X = s(34543),
                Q = s(12488),
                ee = s(33551),
                te = s(77165),
                se = s(37601),
                ne = s(55002),
                re = s(80190),
                le = s(97342),
                ie = function(e) {
                    var t = e.isModalOpen,
                        s = e.actionClose,
                        a = e.onClick,
                        c = e.isDisabled,
                        o = e.forceUpdate,
                        d = void 0 === o ? 0 : o,
                        u = (0, g.Z)("common").t,
                        x = (0, r.useRef)(!1),
                        m = (0, r.useState)([]),
                        f = m[0],
                        p = m[1],
                        h = (0, r.useState)(0),
                        b = h[0],
                        j = h[1],
                        y = (0, r.useState)(10)[0],
                        v = (0, r.useState)(!1),
                        N = v[0],
                        w = v[1],
                        k = (0, r.useState)(!1),
                        C = k[0],
                        S = k[1],
                        L = (0, r.useState)(0),
                        E = L[0],
                        Z = L[1],
                        T = (0, r.useState)([]),
                        F = T[0],
                        _ = T[1],
                        I = (0, r.useState)([]),
                        R = I[0],
                        D = I[1],
                        M = (0, r.useState)([]),
                        A = M[0],
                        P = M[1],
                        O = (0, r.useState)(!1),
                        z = O[0],
                        B = O[1],
                        K = (0, i.C)((function(e) {
                            return e
                        })),
                        ie = K.postmodal,
                        ae = K.waccount,
                        ce = (0, i.T)(),
                        oe = ie.taker,
                        de = ae.currentNetworkId,
                        ue = ae.account,
                        xe = ae.jwtToken,
                        me = function() {
                            console.log("server error: [401]"), ce((0, l.q7)()), ce((0, l.pV)(!1)), ce((0, Q.up)(!0)), ce((0, Q.kt)()), (0, ee.uM)({
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
                        fe = function() {
                            console.log("server error: [500]")
                        },
                        pe = function(e) {
                            R.indexOf(e.address) > -1 || de && xe && (x.current && D(R.concat([e.address])), (0, $.U3)((0, Y.f)("deleteFavouriteCollection"), {
                                networkId: de.toString(),
                                collectionFavourite: e.address
                            }, xe).then((function(t) {
                                var s = JSON.parse(JSON.stringify(R));
                                s = s.splice(s.indexOf(e.address), 1), x.current && D(s);
                                var n = JSON.parse(JSON.stringify(A));
                                n[n.findIndex((function(t) {
                                    return t.id.toLowerCase() === e.address.toLowerCase()
                                }))].selected = !1, x.current && P(n)
                            })).catch((function(t) {
                                var s = JSON.parse(JSON.stringify(R));
                                s = s.splice(s.indexOf(e.address), 1), x.current && D(s), (0, le.$)(t, void 0, me, fe)
                            })))
                        },
                        he = function(e) {
                            F.indexOf(e.address) > -1 || de && xe && (x.current && _(F.concat([e.address])), (0, $.jl)((0, Y.f)("addFavouriteCollection"), {
                                networkId: de.toString(),
                                collectionFavourite: e.address
                            }, xe).then((function(t) {
                                var s = JSON.parse(JSON.stringify(F));
                                s = s.splice(s.indexOf(e.address), 1), x.current && _(s);
                                var n = JSON.parse(JSON.stringify(A));
                                n[n.findIndex((function(t) {
                                    return t.id.toLowerCase() === e.address.toLowerCase()
                                }))].selected = !0, x.current && P(n)
                            })).catch((function(t) {
                                var s = JSON.parse(JSON.stringify(F));
                                s = s.splice(s.indexOf(e.address), 1), x.current && _(s), (0, le.$)(t, void 0, me, fe)
                            })))
                        },
                        ge = function(e, t) {
                            var s = t.find((function(t) {
                                return t.id.toLowerCase() === e.toLowerCase()
                            }));
                            return !!s && s.selected
                        },
                        be = function() {
                            if (!C) {
                                var e = [];
                                x.current && B(!0), de && ue && (e = [de.toString(), b.toString(), y.toString()]), x.current && B(!0), xe ? (0, $.Vd)((0, Y.f)("getFavouriteCollections", e), xe).then((function(e) {
                                    var t = e.data[0],
                                        s = t.count,
                                        n = t.rows,
                                        r = new Array;
                                    n.forEach((function(e) {
                                        r.push({
                                            id: e.address,
                                            selected: !0
                                        })
                                    })), x.current && Z(s), 0 === f.length ? x.current && (p(n), P(r)) : x.current && (p(f.concat(n)), P(A.concat(r)))
                                })).catch((function(e) {
                                    (0, le.$)(e, void 0, me, fe), console.log(e)
                                })).finally((function() {
                                    x.current && (B(!1), S(!1))
                                })) : x.current && B(!1)
                            }
                        },
                        je = function(e) {
                            if (oe && oe.collections) return oe.collections.findIndex((function(t) {
                                return e.address.toLowerCase() === t.address.toLowerCase()
                            })) > -1
                        };
                    return (0, r.useEffect)((function() {
                        return x.current = !0,
                            function() {
                                x.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        C || (E > f.length ? x.current && (j(b + 10), w(!0)) : x.current && w(!1))
                    }), [f]), (0, r.useEffect)((function() {
                        C ? (p([]), j(0), Z(0), w(!1), S(!1)) : be()
                    }), [C]), (0, r.useEffect)((function() {
                        0 !== d && S(!0)
                    }), [d]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(U.Z, {
                            isOpen: t,
                            actionClose: s,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h4", {
                                    className: "text-lg font-semibold text-primary-dark-blue",
                                    children: u("favouriteCollectionsLabel")
                                }), (0, n.jsxs)("div", {
                                    className: "mt-[24px]",
                                    children: [f && 0 === f.length && !z && (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsxs)("div", {
                                            className: "flex flex-col justify-center items-center p-[16px]",
                                            children: [(0, n.jsx)("img", {
                                                src: V,
                                                width: 64,
                                                height: 64
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-base font-light text-center text-primary-dark-blue w-[256px] mt-[16px]",
                                                children: u("favouriteBookmarkedCollectionLabel")
                                            })]
                                        })
                                    }), (0, n.jsx)(n.Fragment, {
                                        children: z && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "flex items-center justify-center w-full h-full",
                                                children: (0, n.jsx)(te.Z, {
                                                    isWhite: !1,
                                                    className: "w-[30px] h-[30px]"
                                                })
                                            })
                                        })
                                    }), f && f.length > 0 && (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                            id: "favorites-scrollable",
                                            children: (0, n.jsx)("ul", {
                                                className: "".concat(q().ulContainer, " ").concat(c ? q().disabled : ""),
                                                children: (0, n.jsx)(X.Z, {
                                                    dataLength: f.length,
                                                    next: be,
                                                    hasMore: N,
                                                    loader: (0, n.jsx)("div", {
                                                        className: "flex justify-center items-center",
                                                        children: (0, n.jsx)(te.Z, {
                                                            isWhite: !1,
                                                            className: "w-[24px] h-[24px]"
                                                        })
                                                    }),
                                                    scrollableTarget: "favorites-scrollable",
                                                    style: {
                                                        overflow: "initial"
                                                    },
                                                    children: f.map((function(e, t) {
                                                        return (0, n.jsx)("li", {
                                                            className: "block ".concat(c ? "" : "cursor-pointer", " h-[36px] ").concat(t < f.length - 1 ? "mb-[22px]" : ""),
                                                            onClick: function() {
                                                                c || a(e)
                                                            },
                                                            children: (0, n.jsxs)("div", {
                                                                className: "flex h-full justify-between relative",
                                                                children: [(0, n.jsxs)("div", {
                                                                    className: "flex items-center h-full gap-x-[16px]",
                                                                    children: [(0, n.jsx)(se.Z, {
                                                                        src: e.imageUrl ? e.imageUrl : "",
                                                                        className: "w-[32px] h-[32px]",
                                                                        statusVerification: e.statusVerification,
                                                                        badgeClassName: "w-[16px] h-[16px]"
                                                                    }), (0, n.jsx)("div", {
                                                                        className: "flex flex-col justify-center",
                                                                        children: (0, n.jsx)("span", {
                                                                            className: "text-sm font-semibold text-primary-dark-blue",
                                                                            children: e.name
                                                                        })
                                                                    })]
                                                                }), (0, n.jsx)("div", {
                                                                    className: "".concat(q().starContainer, " flex justify-center items-center h-full"),
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "flex justify-center items-center w-[24px] h-[24px]",
                                                                        children: ge(e.address, A) ? (0, n.jsx)("img", {
                                                                            src: H.Z.src,
                                                                            className: "".concat(c ? "" : "cursor-pointer"),
                                                                            onClick: function(t) {
                                                                                t.stopPropagation(), c || pe(e)
                                                                            },
                                                                            width: 16,
                                                                            height: 16
                                                                        }) : (0, n.jsx)("img", {
                                                                            width: 16,
                                                                            height: 16,
                                                                            src: W.Z.src,
                                                                            className: "".concat(c ? "" : "cursor-pointer"),
                                                                            onClick: function(t) {
                                                                                t.stopPropagation(), c || he(e)
                                                                            }
                                                                        })
                                                                    })
                                                                }), (0, n.jsx)("span", {
                                                                    className: "".concat(je(e) ? "" : q().use, " items-center justify-center absolute right-[30px] top-[10px]"),
                                                                    children: je(e) ? (0, n.jsx)("img", {
                                                                        src: re.Z.src,
                                                                        className: "ml-[4px]",
                                                                        width: 16,
                                                                        height: 16
                                                                    }) : (0, n.jsxs)(n.Fragment, {
                                                                        children: [(0, n.jsx)("span", {
                                                                            className: "rubik text-xs text-primary-blue font-semibold",
                                                                            children: u("addLabel")
                                                                        }), (0, n.jsx)("img", {
                                                                            src: ne.Z.src,
                                                                            className: "ml-[4px]",
                                                                            width: 8,
                                                                            height: 8
                                                                        })]
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
                            className: "hidden lg:block lg:h-full",
                            children: [(0, n.jsx)("h4", {
                                className: "text-base font-semibold text-primary-dark-blue",
                                children: u("favouriteCollectionsLabel")
                            }), (0, n.jsxs)("div", {
                                className: "mt-[24px] h-full",
                                children: [f && 0 === f.length && !z && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center p-[16px]",
                                        children: [(0, n.jsx)("img", {
                                            src: V,
                                            width: 64,
                                            height: 64
                                        }), (0, n.jsx)("p", {
                                            className: "rubik text-base font-light text-center text-primary-dark-blue mt-[16px]",
                                            children: u("favouriteBookmarkedCollectionLabel")
                                        })]
                                    })
                                }), z && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "flex items-center justify-center w-full h-full",
                                        children: (0, n.jsx)(te.Z, {
                                            isWhite: !1,
                                            className: "w-[30px] h-[30px]"
                                        })
                                    })
                                }), f && f.length > 0 && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "".concat(q().scrollbar, " overflow-y-scroll scrollbar-hide"),
                                        children: (0, n.jsx)("ul", {
                                            className: "".concat(q().ulContainer, " ").concat(c ? "".concat(q().disabled) : ""),
                                            children: (0, n.jsx)(X.Z, {
                                                dataLength: f.length,
                                                next: be,
                                                hasMore: N,
                                                loader: (0, n.jsx)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: (0, n.jsx)(te.Z, {
                                                        isWhite: !1,
                                                        className: "w-[24px] h-[24px]"
                                                    })
                                                }),
                                                scrollableTarget: "favorites-scrollable",
                                                style: {
                                                    overflow: "initial"
                                                },
                                                children: f.map((function(e, t) {
                                                    return (0, n.jsx)("li", {
                                                        className: "block ".concat(c ? "" : "cursor-pointer", " h-[36px] ").concat(t < f.length - 1 ? "mb-[22px]" : ""),
                                                        onClick: function() {
                                                            c || a(e)
                                                        },
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex h-full justify-between relative",
                                                            children: [(0, n.jsxs)("div", {
                                                                className: "flex items-center h-full gap-x-[16px]",
                                                                children: [(0, n.jsx)(se.Z, {
                                                                    src: e.imageUrl ? e.imageUrl : "",
                                                                    className: "w-[32px] h-[32px]",
                                                                    statusVerification: e.statusVerification,
                                                                    badgeClassName: "w-[16px] h-[16px]"
                                                                }), (0, n.jsx)("div", {
                                                                    className: "flex justify-center",
                                                                    children: (0, n.jsx)("span", {
                                                                        className: "".concat(q().username, " text-sm font-semibold text-primary-dark-blue"),
                                                                        children: e.name
                                                                    })
                                                                })]
                                                            }), (0, n.jsx)("div", {
                                                                className: "flex justify-center items-center h-full",
                                                                children: (0, n.jsx)("div", {
                                                                    className: "".concat(q().starContainer, " flex justify-center items-center w-[24px] h-[24px]"),
                                                                    children: ge(e.address, A) ? (0, n.jsx)("img", {
                                                                        width: 16,
                                                                        height: 16,
                                                                        src: H.Z.src,
                                                                        className: "".concat(c ? "" : "cursor-pointer"),
                                                                        onClick: function(t) {
                                                                            t.stopPropagation(), c || pe(e)
                                                                        },
                                                                        onMouseEnter: function(e) {
                                                                            e.target.src = G.Z.src
                                                                        },
                                                                        onMouseLeave: function(e) {
                                                                            e.target.src = H.Z.src
                                                                        }
                                                                    }) : (0, n.jsx)("img", {
                                                                        width: 16,
                                                                        height: 16,
                                                                        src: W.Z.src,
                                                                        className: "".concat(c ? "" : "cursor-pointer"),
                                                                        onClick: function(t) {
                                                                            t.stopPropagation(), c || he(e)
                                                                        },
                                                                        onMouseEnter: function(e) {
                                                                            e.target.src = J.Z.src
                                                                        },
                                                                        onMouseLeave: function(e) {
                                                                            e.target.src = W.Z.src
                                                                        }
                                                                    })
                                                                })
                                                            }), (0, n.jsx)("span", {
                                                                className: "".concat(je(e) ? "" : q().use, " items-center justify-center absolute right-[30px] top-[10px]"),
                                                                children: je(e) ? (0, n.jsx)("img", {
                                                                    src: re.Z.src,
                                                                    className: "ml-[4px]",
                                                                    width: 16,
                                                                    height: 16
                                                                }) : (0, n.jsxs)(n.Fragment, {
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "rubik text-xs text-primary-blue font-semibold",
                                                                        children: u("addLabel")
                                                                    }), (0, n.jsx)("img", {
                                                                        src: ne.Z.src,
                                                                        className: "ml-[4px]",
                                                                        width: 8,
                                                                        height: 8
                                                                    })]
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
                ae = s(97110),
                ce = s(11890),
                oe = s.n(ce),
                de = function(e) {
                    var t = e.isSelected,
                        s = void 0 !== t && t,
                        l = e.collection,
                        a = e.isDisabled,
                        c = e.showCollectionTooltip,
                        o = void 0 !== c && c,
                        d = e.onClick,
                        u = e.isClickable,
                        x = void 0 === u || u,
                        m = e.showIsFavorite,
                        f = void 0 === m || m,
                        p = e.isFavorite,
                        h = void 0 !== p && p,
                        g = e.onClickFavorite,
                        b = e.forceShowSelectedCheck,
                        j = void 0 !== b && b,
                        y = e.className,
                        v = void 0 === y ? "" : y,
                        N = (0, r.useState)(s),
                        w = N[0],
                        k = N[1],
                        C = (0, r.useState)(h),
                        S = C[0],
                        L = C[1],
                        E = (0, i.C)((function(e) {
                            return e
                        })).postmodal.taker;
                    return (0, r.useEffect)((function() {
                        a && k(!1)
                    }), [a]), (0, r.useEffect)((function() {
                        if (E && E.collections) {
                            var e = E.collections.findIndex((function(e) {
                                return l.address.toLowerCase() === e.address.toLowerCase()
                            })) > -1;
                            k(e)
                        }
                    }), [E, null === E || void 0 === E ? void 0 : E.collections]), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "".concat(a ? "border-gray-100 bg-[#f3f4f6]" : w && x ? "border-primary-blue bg-primary-white ".concat(x ? "cursor-pointer" : "cursor-default", " shadow-md hover:shadow-lg") : "border-primary-[transparent] bg-primary-white ".concat(x ? "cursor-pointer" : "cursor-default", " shadow-md hover:shadow-lg"), " flex items-center gap-x-[16px] rounded-[16px] p-[16px] border-[1px] border-solid select-none relative ").concat(v),
                            onClick: function() {
                                var e = !1;
                                !a && x && (d && (e = d()), e || k(!w))
                            },
                            children: [(0, n.jsx)(se.Z, {
                                src: l.imageUrl ? l.imageUrl : "",
                                statusVerification: l.statusVerification,
                                className: "w-[64px] h-[64px] flex-none",
                                badgeClassName: "w-[24px] h-[24px]",
                                showCollectionTooltip: o,
                                collection: o ? l : void 0
                            }), (0, n.jsx)("span", {
                                className: "".concat(a ? "text-primary-gray" : w && x ? "text-primary-blue" : "text-primary-dark-blue", " text-base font-semibold"),
                                children: l.name
                            }), (w && x || j) && (0, n.jsx)("div", {
                                className: "".concat(j ? "border-primary-gray" : "border-primary-blue", " flex items-center justify-center w-[26px] h-[26px] border-[1px] border-solid rounded-full absolute top-[6px] right-[6px]"),
                                children: (0, n.jsx)("img", {
                                    src: re.Z.src,
                                    className: "".concat(j ? oe().isDisabled : ""),
                                    width: 16,
                                    height: 16
                                })
                            }), f && (0, n.jsx)("img", {
                                src: S ? H.Z.src : W.Z.src,
                                className: " absolute bottom-[8px] right-[10px] ".concat(a ? "opacity-40" : ""),
                                onClick: function(e) {
                                    e.stopPropagation(), !a && x && g && g(S, (function() {
                                        L(!S)
                                    }))
                                },
                                width: 14,
                                height: 14
                            })]
                        })
                    })
                },
                ue = function(e) {
                    var t = e.url,
                        s = e.time,
                        l = e.size,
                        i = e.className,
                        a = (0, r.useState)(0),
                        c = a[0],
                        o = a[1];
                    return (0, r.useEffect)((function() {
                        if (t.length > 1) {
                            var e = setInterval((function() {
                                c === t.length - 1 ? o(0) : o(c + 1)
                            }), s);
                            return function() {
                                clearInterval(e)
                            }
                        }
                    }), [c]), (0, n.jsx)("div", {
                        className: "rounded-full ".concat(i || ""),
                        style: {
                            backgroundImage: "url(".concat(t[c], ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            width: "".concat(l, "px"),
                            height: "".concat(l, "px")
                        }
                    })
                },
                xe = s(54998),
                me = s.n(xe),
                fe = function(e) {
                    var t, s = e.isSelected,
                        l = void 0 !== s && s,
                        a = e.collections,
                        c = e.isDisabled,
                        o = e.onClick,
                        d = e.isClickable,
                        u = void 0 === d || d,
                        x = e.showSkeletonLoader,
                        m = void 0 !== x && x,
                        f = e.forceShowSelectedCheck,
                        p = void 0 !== f && f,
                        h = e.className,
                        b = void 0 === h ? "" : h,
                        j = (0, g.Z)("common").t,
                        y = (0, r.useState)(l),
                        v = y[0],
                        N = y[1],
                        w = (0, i.C)((function(e) {
                            return e
                        })).postmodal.taker;
                    return (0, r.useEffect)((function() {
                        c && N(!1)
                    }), [c]), (0, r.useEffect)((function() {
                        if (w && w.collections) {
                            var e = w.collections.findIndex((function(e) {
                                return "ERC20" === e.type || "NATIVE" === e.type
                            })) > -1;
                            N(e)
                        }
                    }), [w, null === w || void 0 === w ? void 0 : w.collections]), (0, n.jsx)(n.Fragment, {
                        children: m ? (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "border-primary-[transparent] bg-primary-white flex items-center gap-x-[16px] rounded-[16px] p-[16px] border-[1px] border-solid select-none relative ".concat(b),
                                children: [(0, n.jsx)("div", {
                                    className: "".concat(me().skeleton, " w-[44px] h-[44px] rounded-full")
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col items-start gap-y-[5px]",
                                    children: [(0, n.jsx)("div", {
                                        className: "".concat(me().skeleton, " w-[75px] h-[16px] rounded-full")
                                    }), (0, n.jsx)("div", {
                                        className: "".concat(me().skeleton, " w-[105px] h-[16px] rounded-full")
                                    })]
                                })]
                            })
                        }) : (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "".concat(c ? "border-gray-100 bg-[#f3f4f6]" : v ? "border-primary-blue bg-primary-white ".concat(u ? "cursor-pointer" : "cursor-default", " shadow-md hover:shadow-lg") : "border-primary-[transparent] bg-primary-white ".concat(u ? "cursor-pointer" : "cursor-default", " shadow-md hover:shadow-lg"), " flex items-center gap-x-[16px] rounded-[16px] p-[16px] border-[1px] border-solid select-none relative ").concat(b),
                                onClick: function() {
                                    var e = !1;
                                    !c && u && (o && (e = o(N)), e || N(!v))
                                },
                                children: [(0, n.jsx)(ue, {
                                    url: (t = a, t.map((function(e) {
                                        return e.imageUrl ? e.imageUrl : ""
                                    }))),
                                    time: 2e3,
                                    size: 44
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col items-start",
                                    children: [(0, n.jsx)("span", {
                                        className: "".concat(c ? "text-primary-gray" : v ? "text-primary-blue" : "text-primary-dark-blue", " text-base font-semibold"),
                                        children: j("tokensLabel")
                                    }), (0, n.jsx)("span", {
                                        className: "rubik text-sm font-regular text-primary-gray",
                                        children: function(e) {
                                            var t = e.map((function(e) {
                                                return e.symbol ? e.symbol : ""
                                            })).join(", ");
                                            return t.length > 15 ? t.substring(0, 15) + "..." : t
                                        }(a)
                                    })]
                                }), v || p && (0, n.jsx)("div", {
                                    className: "".concat(p ? "border-primary-gray" : "border-primary-blue", " flex items-center justify-center w-[26px] h-[26px] border-[1px] border-solid rounded-full absolute top-[6px] right-[6px]"),
                                    children: (0, n.jsx)("img", {
                                        src: re.Z.src,
                                        className: "".concat(p ? me().isDisabled : ""),
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            })
                        })
                    })
                },
                pe = s(60591),
                he = s.n(pe),
                ge = s(13230),
                be = s(79327),
                je = s(85429),
                ye = function(e) {
                    var t, s = e.text,
                        r = e.isDisabled,
                        l = e.isEditable,
                        i = e.isHidden,
                        a = void 0 !== i && i,
                        c = e.isSummary,
                        o = void 0 !== c && c,
                        d = e.isShrinked,
                        u = void 0 !== d && d,
                        x = e.tokenSymbol,
                        m = e.icon,
                        f = e.asset,
                        p = void 0 === f ? null : f,
                        h = e.isNFTsSummary,
                        g = void 0 !== h && h,
                        b = e.onClick,
                        j = e.className,
                        y = e.showTooltip,
                        v = void 0 !== y && y,
                        N = (0, be.Z)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            title: v ? void 0 : "".concat(s).concat(x ? " ".concat(x) : ""),
                            className: "".concat(o ? "border-slate-200" : r ? "border-primary-gray" : "border-primary-blue", " ").concat(l ? "hover:shadow hover:shadow-indigo-200" : "", " ").concat(b && !r && "cursor-pointer select-none ".concat(!l && he().clickableBadge), " ").concat(a ? "hidden" : "", " flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max ").concat(j),
                            onClick: b,
                            onMouseEnter: function() {
                                if (b) {
                                    var e = document.getElementById("img-".concat(N));
                                    e && (e.src = ge.Z.src)
                                }
                            },
                            onMouseLeave: function(e) {
                                if (b) {
                                    var t = document.getElementById("img-".concat(N));
                                    t && (t.src = m)
                                }
                            },
                            "data-for": "".concat(N),
                            "data-tip": !0,
                            children: [(0, n.jsxs)("span", {
                                id: N,
                                className: "".concat(o ? "text-primary-blue" : r ? "text-primary-gray" : "text-primary-blue ".concat(b && "hover:text-primary-dark-blue"), " text-sm font-semibold"),
                                children: [u ? (t = s, t.length > 5 ? t.substring(0, 4) + ".." : t) : s, " ", m && x && (0, n.jsx)("span", {
                                    className: "text-primary-dark-blue",
                                    children: x
                                })]
                            }), !m || p || g ? (0, n.jsx)(n.Fragment, {
                                children: (p || g) && (0, n.jsx)("img", {
                                    className: "w-[24px] h-[24px] relative left-[10px]",
                                    src: "string" === typeof m ? m : ""
                                })
                            }) : (0, n.jsx)(n.Fragment, {
                                children: "string" === typeof m ? (0, n.jsx)("img", {
                                    className: "w-[24px] h-[24px] relative left-[10px]",
                                    src: m,
                                    id: "img-".concat(N)
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: m
                                })
                            })]
                        }), v && p && (0, n.jsxs)(je.Z, {
                            id: N,
                            place: "bottom",
                            type: "dark",
                            effect: "float",
                            backgroundColor: "#01085a",
                            children: [p.amountHumanReadable, " ", p.collection.symbol]
                        })]
                    })
                },
                ve = s(22496),
                Ne = function(e) {
                    var t = e.headerText,
                        s = e.currentSelection,
                        r = e.onClick,
                        l = e.className,
                        i = e.isLocked,
                        a = void 0 !== i && i,
                        c = e.lockedMessage,
                        o = (0, g.Z)("common").t;
                    return (0, n.jsxs)("div", {
                        className: "flex items-center justify-between relative bg-gray-100 border-[1px] border-solid border-gray-200 gap-x-[8px] py-[14px] px-[16px] rounded-[16px] ".concat(l || ""),
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, n.jsx)("span", {
                                className: "rubik text-sm font-light",
                                children: t
                            }), (0, n.jsx)("span", {
                                className: "text-primary-dark-blue",
                                children: s
                            })]
                        }), a ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: "peer flex gap-x-[8px] cursor-pointer",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm text-primary-blue font-semibold",
                                    children: o("lockedLabel")
                                }), (0, n.jsx)("img", {
                                    src: ve.Z.src,
                                    width: 16,
                                    height: 16
                                })]
                            }), c && (0, n.jsx)("div", {
                                className: "peer-hover:block hidden bg-primary-dark-blue absolute right-[20px] -bottom-[15px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[12px] rounded-tr-[0px] px-[12px] py-[8px]",
                                children: (0, n.jsx)("span", {
                                    className: "rubik text-xs font-regular text-primary-white whitespace-nowrap",
                                    children: c
                                })
                            })]
                        }) : (0, n.jsx)(f.Z, {
                            text: o("changeLabel"),
                            type: {
                                class: "secondary",
                                icon: !1,
                                hasColoredBg: !1
                            },
                            initialState: {
                                state: "default"
                            },
                            size: "small",
                            onClick: function() {
                                r && r()
                            },
                            className: "bg-gray-100"
                        })]
                    })
                },
                we = s(95734),
                ke = s.n(we),
                Ce = "/_next/static/media/warning.4da4999d.svg",
                Se = r.createContext({
                    currentIndex: 0,
                    currentValue: "",
                    setCurrentIndex: function(e) {},
                    setCurrentValue: function(e) {}
                }),
                Le = function(e) {
                    var t = e.title,
                        s = e.description,
                        l = e.value,
                        i = e.index,
                        a = e.isSelected,
                        c = e.showWarning,
                        o = e.warningText,
                        d = e.icon,
                        u = e.onClick,
                        x = e.className,
                        m = (0, r.useState)(a),
                        f = m[0],
                        p = m[1],
                        h = (0, r.useContext)(Se),
                        g = h.currentIndex,
                        b = h.setCurrentIndex,
                        j = h.setCurrentValue;
                    return (0, r.useEffect)((function() {
                        p(g === i)
                    }), [g]), (0, n.jsxs)("div", {
                        className: "".concat(f ? "border-primary-blue" : "border-primary-gray hover:border-primary-blue", " flex flex-col gap-y-[12px] relative border-[1px] border-solid w-full min-h-[98px] rounded-[16px] p-[16px] cursor-pointer ").concat(x || ""),
                        onClick: function() {
                            p(!f), u && u(l, !f), b(i), j(l)
                        },
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-col gap-y-[4px]",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center gap-x-[11px]",
                                children: [d && (0, n.jsx)("span", {
                                    className: "text-base font-semibold text-primary-dark-blue",
                                    children: d
                                }), (0, n.jsx)("span", {
                                    className: "text-base font-semibold text-primary-dark-blue",
                                    children: t
                                })]
                            }), (0, n.jsx)("p", {
                                className: "rubik text-sm font-light text-primary-dark-blue",
                                children: s
                            })]
                        }), c && (0, n.jsxs)("div", {
                            className: "flex gap-x-[12px] px-[12px] py-[8px] bg-gray-100 rounded-[8px]",
                            children: [(0, n.jsx)("img", {
                                src: Ce,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)("span", {
                                className: "font-regular text-xs text-primary-dark-blue",
                                children: o
                            })]
                        }), f && (0, n.jsx)("img", {
                            src: re.Z.src,
                            className: "absolute right-[10px] top-[10px]",
                            width: 20,
                            height: 20
                        })]
                    })
                },
                Ee = function(e) {
                    var t = e.children,
                        s = e.onSelect,
                        l = e.selectedIndex,
                        i = (0, r.useState)(l),
                        a = i[0],
                        c = i[1],
                        o = (0, r.useState)(void 0),
                        d = o[0],
                        u = o[1];
                    return (0, r.useEffect)((function() {
                        s && d && s(d)
                    }), [d]), (0, n.jsx)(Se.Provider, {
                        value: {
                            currentIndex: a,
                            setCurrentIndex: c,
                            currentValue: d || "",
                            setCurrentValue: u
                        },
                        children: t
                    })
                },
                Ze = "/_next/static/media/settings.37a4f0c7.svg",
                Te = "/_next/static/media/mascotte_open_to_proposal.d8fe86e1.svg",
                Fe = s(11912),
                _e = s.n(Fe),
                Ie = s(90197);

            function Re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function De(e) {
                return function(e) {
                    if (Array.isArray(e)) return Re(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Re(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return Re(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Me = function(e) {
                    var t = e.isCurrent,
                        s = (0, i.C)((function(e) {
                            return e
                        })),
                        a = s.waccount,
                        c = s.postmodal,
                        o = a.currentNetworkId,
                        d = a.jwtToken,
                        u = a.account,
                        x = (0, i.T)(),
                        m = c.lookingForType,
                        p = c.offerType,
                        h = c.taker,
                        b = c.isCartOpen,
                        j = (0, g.Z)("common").t,
                        y = (0, r.useRef)(!1),
                        v = (0, r.useRef)(null),
                        N = (0, r.useState)([]),
                        w = N[0],
                        k = N[1],
                        C = (0, r.useState)(""),
                        S = C[0],
                        E = C[1],
                        Z = (0, r.useState)([]),
                        T = Z[0],
                        F = Z[1],
                        R = (0, r.useState)([]),
                        D = R[0],
                        M = R[1],
                        A = (0, r.useState)(!1),
                        P = A[0],
                        O = A[1],
                        U = (0, r.useState)(0),
                        V = U[0],
                        W = U[1],
                        G = (0, r.useState)(0),
                        J = G[0],
                        K = G[1],
                        q = (0, r.useState)(10)[0],
                        X = (0, r.useState)(!1),
                        se = X[0],
                        ne = X[1],
                        re = (0, r.useRef)({
                            clearInput: null
                        }),
                        ce = (0, r.useState)(!1),
                        oe = ce[0],
                        ue = ce[1],
                        xe = (0, r.useState)(!1),
                        me = xe[0],
                        pe = xe[1],
                        he = (0, r.useState)("2" === m),
                        ge = he[0],
                        be = he[1],
                        je = (0, r.useState)(),
                        ve = je[0],
                        we = je[1],
                        Ce = (0, r.useState)(!1),
                        Se = Ce[0],
                        Fe = Ce[1],
                        Re = (0, r.useState)(0),
                        Me = Re[0],
                        Ae = Re[1],
                        Pe = (0, r.useState)(!1),
                        Oe = Pe[0],
                        ze = Pe[1],
                        Be = (0, r.useState)(m),
                        Ue = Be[0],
                        Ve = Be[1],
                        He = function() {
                            console.log("server error: [401]"), x((0, l.q7)()), x((0, l.pV)(!1)), x((0, Q.up)(!0)), x((0, Q.kt)()), (0, ee.uM)({
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
                        We = function() {
                            console.log("server error: [500]")
                        },
                        Ge = function(e, t) {
                            v.current && u && (0 === T.length ? y.current && pe(!0) : y.current && pe(!1), v.current.getCollections({
                                userAddress: u,
                                networkId: o || "*",
                                searchType: "NFT",
                                skip: J,
                                take: q,
                                queryString: e && e.length > 0 ? e : void 0
                            }).then((function(e) {
                                if (e) {
                                    var t = e.data[0],
                                        s = t.rows,
                                        n = t.count;
                                    y.current && W(n), 0 === T.length ? y.current && F(s) : y.current && F(T.concat(s))
                                }
                            })).catch((function(e) {
                                (0, le.$)(e, x), console.log(e)
                            })).finally((function() {
                                y.current && (pe(!1), t && t("default"))
                            })), y.current && ne(!1))
                        },
                        Je = (0, r.useCallback)((function(e, t) {
                            return e > 0 && t > 0 ? "".concat(e, " ").concat("".concat(j(e > 1 ? "collectionPluralLabel" : "collectionSingularLabel")), " + ").concat(t, " ").concat(j("cryptoSelectedLabel")) : e > 0 ? "".concat(e, " ").concat("".concat(j(e > 1 ? "collectionPluralLabel" : "collectionSingularLabel")), " selected") : t > 0 ? "".concat(t, " ").concat(j("cryptoSelectedLabel")) : "0 ".concat(j("collectionPluralLabel"), " ").concat(j("selectedLabel"))
                        }), []),
                        Ke = (0, r.useCallback)((function() {
                            Fe(!0), x((0, l.Rd)(!0))
                        }), []),
                        qe = (0, r.useCallback)((function(e) {
                            var t = w.findIndex((function(t) {
                                return t.address.toLowerCase() === e.address.toLowerCase()
                            }));
                            k(-1 === t ? De(w).concat([e]) : w.filter((function(t) {
                                return t.address.toLowerCase() !== e.address.toLowerCase()
                            })))
                        }), [w]),
                        $e = (0, r.useRef)(_e()((function(e) {
                            y.current && E(e)
                        }), 300)).current;
                    return (0, r.useEffect)((function() {
                        return y.current = !0, v.current = new Ie.k_({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), v.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }),
                            function() {
                                y.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        (null === h || void 0 === h ? void 0 : h.collections) && k(h.collections)
                    }), []), (0, r.useEffect)((function() {
                        !b && Se && h && h.collections && k(h.collections)
                    }), [b, Se]), (0, r.useEffect)((function() {
                        y.current && (W(0), K(0), F([]), ne(!0))
                    }), [S]), (0, r.useEffect)((function() {
                        V > T.length ? y.current && (K(J + 10), O(!0)) : y.current && O(!1)
                    }), [T]), (0, r.useEffect)((function() {
                        se && Ge(S)
                    }), [se]), (0, r.useEffect)((function() {
                        Ge(), v.current && u && v.current.getCollections({
                            userAddress: u,
                            networkId: o || "*",
                            searchType: "TKN",
                            skip: 0,
                            take: 10
                        }).then((function(e) {
                            if (e) {
                                var t = e.data[0],
                                    s = t.rows,
                                    n = t.count;
                                y.current && W(n), 0 === D.length ? y.current && M(s) : y.current && M(D.concat(s))
                            }
                        })).catch((function(e) {
                            (0, le.$)(e, x)
                        }))
                    }), []), (0, r.useEffect)((function() {
                        x((0, l.fG)(w)), x((0, l.Gu)())
                    }), [w]), (0, r.useEffect)((function() {
                        ge ? (k([]), x((0, l.fG)([])), x((0, l.bW)()), x((0, l.Gu)())) : x((0, l.Gu)())
                    }), [ge]), (0, r.useEffect)((function() {
                        be("2" === m)
                    }), [m]), (0, r.useEffect)((function() {
                        if (h && h.collections) {
                            var e = h.collections.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })).length,
                                t = h.collections.filter((function(e) {
                                    return "ERC20" === e.type || "NATIVE" === e.type
                                })).length;
                            we({
                                text: Je(e, t),
                                isDisabled: !(e > 0 || t > 0),
                                isEditable: !1,
                                tokenSymbol: "",
                                icon: "",
                                asset: null
                            })
                        }
                    }), [h, null === h || void 0 === h ? void 0 : h.collections]), (0, r.useEffect)((function() {
                        if (oe) {
                            var e = function() {
                                window.innerWidth > 1023 && y.current && ue(!1)
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [oe]), (0, n.jsx)(L.Z, {
                        isCurrent: t,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("section", {
                                className: "grid grid-cols-12",
                                children: [(0, n.jsxs)("div", {
                                    className: "hidden rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                                    children: [(0, n.jsx)(Ne, {
                                        headerText: j("imLookingForLabel"),
                                        currentSelection: "0" === m ? (0, n.jsxs)("span", {
                                            className: "flex gap-x-[9px]",
                                            children: [(0, n.jsx)("img", {
                                                src: _.Z.src,
                                                className: "w-[14px]"
                                            }), (0, n.jsx)("span", {
                                                className: "font-semibold",
                                                children: j("imLookingForPostCardOneLabel")
                                            })]
                                        }) : "1" === m ? (0, n.jsxs)("span", {
                                            className: "flex gap-x-[9px]",
                                            children: [(0, n.jsx)("img", {
                                                src: I.Z.src,
                                                className: "w-[14px]"
                                            }), (0, n.jsx)("span", {
                                                className: "font-semibold",
                                                children: j("imLookingForPostCardTwoLabel")
                                            })]
                                        }) : "2" === m ? (0, n.jsx)("span", {
                                            className: "font-semibold",
                                            children: j("imLookingForPostCardThreeLabel")
                                        }) : void 0,
                                        className: "mb-[48px]",
                                        onClick: function() {
                                            ze(!0)
                                        }
                                    }), (0, n.jsx)(ie, {
                                        isModalOpen: !1,
                                        actionClose: function() {},
                                        onClick: function(e) {
                                            qe(e)
                                        },
                                        isDisabled: ge,
                                        forceUpdate: Me
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "col-span-12 lg:pt-0 lg:rounded-[16px] lg:col-span-9 lg:pl-[64px] lg:min-h-[732px]",
                                    children: (0, n.jsx)("div", {
                                        className: "w-full lg:min-h-[732px]",
                                        children: (0, n.jsxs)("div", {
                                            className: "w-full lg:rounded-[16px] lg:rounded-tr-[40px] lg:min-h-[732px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "text-left text-primary-dark-blue text-2xl font-semibold",
                                                children: j("selectCollectionsInterestedLabel")
                                            }), (0, n.jsxs)("div", {
                                                className: "flex flex-col mt-[40px] text-center lg:items-center lg:pt-[0px]",
                                                children: [(0, n.jsx)("div", {
                                                    className: "flex justify-between w-full lg:justify-start",
                                                    children: ve && D && (0, n.jsxs)(n.Fragment, {
                                                        children: [(0, n.jsx)(ye, {
                                                            text: ve.text,
                                                            isDisabled: ve.isDisabled,
                                                            isEditable: ve.isEditable,
                                                            onClick: function() {
                                                                ve.isDisabled || (x((0, l.mS)(D)), Ke())
                                                            }
                                                        }), (0, n.jsx)("div", {
                                                            className: "flex justify-center items-center rounded-full w-[36px] h-[36px] bg-primary-blue hover:bg-primary-dark-blue cursor-pointer lg:hidden",
                                                            onClick: function() {
                                                                ze(!0)
                                                            },
                                                            children: (0, n.jsx)("img", {
                                                                src: Ze,
                                                                className: "w-[16px]"
                                                            })
                                                        })]
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "w-full mt-[24px]",
                                                    children: (0, n.jsx)(B.Z, {
                                                        setFilter: function(e) {
                                                            $e(e)
                                                        },
                                                        onClear: function() {},
                                                        placeholder: j("searchCollectionLabel"),
                                                        refClear: re,
                                                        isDisabled: ge,
                                                        className: "h-[52px]"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "flex items-center justify-center mt-[16px] lg:hidden",
                                                    children: (0, n.jsxs)("span", {
                                                        className: "flex cursor-pointer text-primary-blue w-max hover:underline",
                                                        onClick: function() {
                                                            ue(!0)
                                                        },
                                                        children: [(0, n.jsx)("span", {
                                                            className: "text-base font-semibold mr-[8px]",
                                                            children: j("selectFromFavouriteLabel")
                                                        }), (0, n.jsx)("img", {
                                                            src: H.Z.src
                                                        })]
                                                    })
                                                }), (0, n.jsxs)("div", {
                                                    className: "mt-[40px] w-full",
                                                    children: [me && (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-full",
                                                        children: (0, n.jsx)(te.Z, {
                                                            isWhite: !1,
                                                            className: "w-[30px] h-[30px]"
                                                        })
                                                    }), (0, n.jsxs)("div", {
                                                        className: "grid grid-cols-1 gap-y-[16px] relative md:grid-cols-2 md:gap-x-[16px] xlg:grid-cols-3",
                                                        children: [T && T.length > 0 && (0, n.jsx)(fe, {
                                                            isSelected: w.findIndex((function(e) {
                                                                return "ERC20" === e.type || "NATIVE" === e.type
                                                            })) > -1,
                                                            isDisabled: ge,
                                                            collections: D || [],
                                                            showSkeletonLoader: !D,
                                                            onClick: function(e) {
                                                                return x((0, l.mS)(D)), x((0, l.nI)(!0)), Ke(), !0
                                                            },
                                                            forceShowSelectedCheck: ge
                                                        }), T && T.map((function(e, t) {
                                                            return (0, n.jsx)(de, {
                                                                isSelected: w.findIndex((function(t) {
                                                                    return t.address.toLowerCase() === e.address.toLowerCase()
                                                                })) > -1,
                                                                isDisabled: ge,
                                                                collection: e,
                                                                showCollectionTooltip: !0,
                                                                onClick: function() {
                                                                    qe(e)
                                                                },
                                                                isFavorite: !!e.isFavourite && 1 === e.isFavourite,
                                                                onClickFavorite: function(t, s) {
                                                                    t ? function(e, t) {
                                                                        (0, $.U3)((0, Y.f)("deleteFavouriteCollection"), {
                                                                            networkId: o,
                                                                            collectionFavourite: e.address
                                                                        }, d).then((function() {
                                                                            t()
                                                                        })).catch((function(e) {
                                                                            (0, le.$)(e, void 0, He, We)
                                                                        })).finally((function() {
                                                                            Ae(Me + 1)
                                                                        }))
                                                                    }(e, s) : function(e, t) {
                                                                        (0, $.jl)((0, Y.f)("addFavouriteCollection"), {
                                                                            networkId: o,
                                                                            collectionFavourite: e.address
                                                                        }, d).then((function() {
                                                                            t()
                                                                        })).catch((function(e) {
                                                                            (0, le.$)(e, void 0, He, We)
                                                                        })).finally((function() {
                                                                            Ae(Me + 1)
                                                                        }))
                                                                    }(e, s)
                                                                },
                                                                forceShowSelectedCheck: ge
                                                            }, "".concat(e.address, "-").concat(t))
                                                        })), "2" === m && (0, n.jsx)("div", {
                                                            className: "w-full h-full hidden absolute justify-center lg:flex",
                                                            children: (0, n.jsxs)("div", {
                                                                className: "flex-col w-[467px] h-[277px] gap-y-[24px] shadow-md bg-primary-white rounded-[16px] py-[48px] px-[72px] items-center top-[60px] relative border-[1px] border-solid border-gray lg:flex",
                                                                children: [(0, n.jsx)("img", {
                                                                    src: Te,
                                                                    className: "w-[81px]"
                                                                }), (0, n.jsxs)("div", {
                                                                    className: "flex flex-col items-center gap-y-[8px]",
                                                                    children: [(0, n.jsx)("span", {
                                                                        className: "text-xl font-semibold text-primary-dark-blue",
                                                                        children: j("openToProposalOffererLabel")
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "text-primary-blue text-base font-semibold cursor-pointer hover:underline",
                                                                        onClick: function() {
                                                                            ze(!0)
                                                                        },
                                                                        children: j("selectCollectionTokensLabel")
                                                                    })]
                                                                })]
                                                            })
                                                        })]
                                                    }), (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full",
                                                        children: 0 === (null === T || void 0 === T ? void 0 : T.length) && S.length > 0 && !me && (0, n.jsxs)("div", {
                                                            className: "flex flex-col items-center justify-center",
                                                            children: [(0, n.jsx)("img", {
                                                                src: ae.Z.src,
                                                                width: 88,
                                                                height: 88
                                                            }), (0, n.jsxs)("div", {
                                                                className: "mt-[24px] text-center flex flex-col items-center",
                                                                children: [(0, n.jsx)("span", {
                                                                    className: "text-base font-regular text-primary-dark-blue",
                                                                    children: j("noCollectionFoundLabel")
                                                                }), (0, n.jsx)(f.Z, {
                                                                    text: j("clearSearchLabel"),
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
                                                                        var e, t;
                                                                        re.current && re.current.clearInput && (e = re.current.clearInput, null != (t = Function) && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t) && re.current.clearInput(), x((0, l.MW)(!1))
                                                                    },
                                                                    className: "mt-[40px] py-3"
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, n.jsx)("div", {
                                                        className: "".concat(P ? "" : "mt-[40px]", " w-full"),
                                                        children: P && (0, n.jsx)("div", {
                                                            className: "flex justify-center items-center w-full h-[80px]",
                                                            children: (0, n.jsx)(n.Fragment, {
                                                                children: "2" === m ? (0, n.jsx)(f.Z, {
                                                                    text: j("loadMoreLabel"),
                                                                    type: {
                                                                        class: "primary",
                                                                        icon: !1,
                                                                        hasColoredBg: !1
                                                                    },
                                                                    size: "small",
                                                                    initialState: {
                                                                        state: "disabled"
                                                                    }
                                                                }) : (0, n.jsx)("div", {
                                                                    children: (0, n.jsx)(f.Z, {
                                                                        text: j("loadMoreLabel"),
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
                                                                            e && e("loading"), Ge(S, e)
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }), oe && (0, n.jsx)(ie, {
                                isModalOpen: oe,
                                actionClose: function() {
                                    ue(!1)
                                },
                                onClick: function(e) {
                                    qe(e)
                                },
                                isDisabled: ge,
                                forceUpdate: Me
                            }), Oe && (0, n.jsx)("div", {
                                className: "fixed w-full h-full flex flex-row-reverse z-[10500] bg-primary-gray/50 top-[0px] left-[0px]",
                                onClick: function() {
                                    ze(!1)
                                },
                                children: (0, n.jsxs)("div", {
                                    className: "".concat(ke().sidebar, " w-full bg-primary-white px-[24px] pt-[24px] scrollbar-hide overflow-y-scroll lg:h-full lg:w-[400px] lg:pt-[28px] lg:relative"),
                                    onClick: function(e) {
                                        e.stopPropagation()
                                    },
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-col gap-y-[24px] h-[100%] scrollbar-hide lg:h-[calc(100%-100px)] lg:overflow-y-scroll",
                                        children: [(0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("h2", {
                                                className: "font-semibold text-xl text-primary-dark-blue",
                                                children: j("imLookingForLabel")
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-base font-light text-primary-dark-blue",
                                                children: j("kindOfLookingDescriptionLabel")
                                            })]
                                        }), (0, n.jsxs)(Ee, {
                                            onSelect: function(e) {
                                                Ve(e)
                                            },
                                            selectedIndex: Number(m),
                                            children: [(0, n.jsx)(Le, {
                                                title: j("imLookingForPostOneLabel"),
                                                description: j("lookingForOfferDescriptionOneLabel"),
                                                value: "0",
                                                index: 0,
                                                isSelected: "0" === m,
                                                showWarning: !1,
                                                icon: (0, n.jsx)("img", {
                                                    src: _.Z.src,
                                                    className: "w-[16px]"
                                                }),
                                                className: "flex-none"
                                            }), (0, n.jsx)(Le, {
                                                title: j("imLookingForPostTwoLabel"),
                                                description: j("lookingForOfferDescriptionTwoLabel"),
                                                value: "1",
                                                index: 1,
                                                isSelected: "1" === m,
                                                showWarning: !1,
                                                icon: (0, n.jsx)("img", {
                                                    src: I.Z.src,
                                                    className: "w-[16px]"
                                                }),
                                                className: "flex-none"
                                            }), (0, n.jsx)(Le, {
                                                title: j("imLookingForPostThreeLabel"),
                                                description: j("lookingForOfferDescriptionThreeLabel"),
                                                value: "2",
                                                index: 2,
                                                isSelected: "2" === m,
                                                showWarning: !0,
                                                warningText: (0, n.jsx)(z.Z, {
                                                    i18nKey: "common:lookingForOfferWarningThreeLabel",
                                                    components: [(0, n.jsx)("b", {
                                                        className: "font-semibold"
                                                    })],
                                                    values: {
                                                        count: 42
                                                    }
                                                }),
                                                className: "flex-none"
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-between w-[auto] h-[78px] mt-[48px] -mx-[24px] p-[16px] border-[1px] border-solid border-gray-200 bg-gray-100 bottom-[0] left-[0] lg:w-full lg:absolute lg:mx-[0] lg:mt-[0]",
                                        children: [(0, n.jsx)(f.Z, {
                                            text: j("cancelLabel"),
                                            type: {
                                                class: "secondary",
                                                hasColoredBg: !1,
                                                icon: !1
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            size: "large",
                                            onClick: function() {
                                                ze(!1)
                                            },
                                            className: "bg-gray-100"
                                        }), (0, n.jsx)(f.Z, {
                                            text: j("saveLabel"),
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
                                                ze(!1), x((0, l.cK)({
                                                    lookingForType: Ue,
                                                    offerType: "2" === Ue ? "0" : p
                                                })), x((0, l.Gu)())
                                            },
                                            className: "capitalize"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                Ae = s(75575),
                Pe = s(74491),
                Oe = s(38509),
                ze = s.n(Oe),
                Be = s(99397),
                Ue = s.n(Be),
                Ve = s(71733),
                He = function(e) {
                    var t = e.collection,
                        s = e.className,
                        r = void 0 === s ? "" : s,
                        l = e.isSelected,
                        i = void 0 !== l && l,
                        a = e.onClick,
                        c = e.showSkeletonLoader,
                        o = void 0 !== c && c,
                        d = e.isDisabled,
                        u = void 0 !== d && d;
                    return (0, n.jsx)(n.Fragment, {
                        children: o ? (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Ue().collectionRow, " flex justify-between items-center h-[36px] mb-[16px] cursor-pointer ").concat(r),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex justify-start flex-1 items-center mr-[16px]",
                                    children: [(0, n.jsx)("div", {
                                        className: "".concat(Ue().skeleton, " w-[20px] h-[20px] flex-none mr-[12px] rounded-full")
                                    }), (0, n.jsx)("div", {
                                        className: "w-full h-[40px] flex items-center",
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(Ue().skeleton, " w-[150px] h-[5px] rounded-full")
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "".concat(Ue().skeleton, " w-[32px] h-[32px] rounded-full")
                                })]
                            })
                        }) : (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Ue().collectionRow, " flex justify-between items-center h-[36px] mb-[16px] cursor-pointer ").concat(r),
                                onClick: function(e) {
                                    u || a && a(e)
                                },
                                children: [(0, n.jsxs)("div", {
                                    className: "flex justify-start flex-1 items-center mr-[16px]",
                                    children: [(0, n.jsx)("div", {
                                        className: "w-[32px] h-[32px] flex items-center justify-center mr-[12px]",
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(Ue().radio, " ").concat(u ? "border-primary-gray" : i ? "border-primary-blue" : "border-primary-gray", " flex items-center justify-center h-[24px] w-[24px] rounded-full border-[1px] border-solid hover:border-primary-blue"),
                                            children: i && (0, n.jsx)("div", {
                                                className: "".concat(u ? "bg-primary-gray" : i ? "bg-primary-blue" : "", " w-[10.5px] h-[10.5px] rounded-full")
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "w-full h-[40px]",
                                        children: (0, n.jsx)("span", {
                                            className: "".concat(u ? "text-primary-gray" : "text-primary-dark-blue", " text-sm font-semibold  flex items-center h-full"),
                                            children: t.name
                                        })
                                    })]
                                }), (0, n.jsx)(se.Z, {
                                    src: "imageUrl" in t && null != t.imageUrl ? t.imageUrl : Ve.Z.src,
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
                We = s(76752),
                Ge = s.n(We),
                Je = s(83050),
                Ke = s(81067),
                qe = s(70118),
                $e = s(94084),
                Ye = s(47805),
                Xe = s(3152);

            function Qe(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var et = function(e) {
                    var t = e.isOpen,
                        s = void 0 !== t && t,
                        a = e.actionClose,
                        c = (0, g.Z)("common").t,
                        o = (0, r.useRef)(!1),
                        d = (0, r.useState)(s),
                        u = d[0],
                        x = d[1],
                        m = (0, r.useState)(!1),
                        p = m[0],
                        h = m[1],
                        b = (0, r.useState)(),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(!1),
                        N = v[0],
                        w = v[1],
                        k = (0, i.T)(),
                        C = (0, i.C)((function(e) {
                            return e
                        })).waccount.currentNetworkId;
                    return (0, r.useEffect)((function() {
                        return o.current = !0,
                            function() {
                                o.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        u || k((0, l.Dc)(!1))
                    }), [u]), (0, n.jsx)(n.Fragment, {
                        children: u && (0, n.jsx)("div", {
                            className: "".concat(Ge().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Ge().customCollectionModal, " fixed flex flex-col bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full h-full text-center overflow-y-scroll scrollbar-hide lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-white",
                                    children: [(0, n.jsx)("div", {
                                        className: "flex items-center justify-center w-[32px] h-[32px]",
                                        children: (0, n.jsx)("img", {
                                            src: Je.Z.src,
                                            className: "cursor-pointer",
                                            onClick: function() {
                                                Qe(a, Function) && a(), x(!1)
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
                                    }), (0, n.jsx)(B.Z, {
                                        placeholder: "0x....",
                                        setFilter: function(e) {
                                            var t;
                                            42 === (t = e).length && null != t.match(/^0x[a-fA-F0-9]{40}$/g) && C ? (0, $.bf)((0, Y.f)("getNftCollection", [C, t])).then((function(e) {
                                                var t = e.data[0];
                                                o.current && y(t)
                                            })).catch((function(e) {
                                                console.error(e)
                                            })) : o.current && y(void 0), o.current && h(!0), 0 === t.length && o.current && h(!1)
                                        },
                                        hideIcon: !0,
                                        className: "w-full h-[52px]"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center mt-[40px] px-[24px] py-[16px]",
                                    children: [j && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)($e.Z, {
                                            src: j.image ? j.image : Ve.Z.src,
                                            url: j.externalUrl ? j.externalUrl : "",
                                            size: 72
                                        }, j.symbol + (new Date).getTime()), (0, n.jsxs)("div", {
                                            className: "text-center w-full mt-[18px]",
                                            children: [(0, n.jsx)("span", {
                                                className: "text-xl font-semibold text-primary-dark-blue",
                                                children: j.name ? j.name : ""
                                            }), (0, n.jsx)("p", {
                                                className: "mt-[8px]",
                                                children: (0, Ye.q)(j.description, 15)
                                            })]
                                        })]
                                    }), !j && (0, n.jsxs)(n.Fragment, {
                                        children: [p && (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("img", {
                                                src: qe.Z.src,
                                                width: 72,
                                                height: 72
                                            }), (0, n.jsx)("span", {
                                                className: "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                                children: c("noSuchCollectionLabel")
                                            })]
                                        }), !p && (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("img", {
                                                src: Ke.Z.src,
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
                                        children: N ? (0, n.jsx)("div", {
                                            children: (0, n.jsx)(f.Z, {
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
                                        }) : (0, n.jsx)(f.Z, {
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
                                                w(!0), e = j, (0, $.VZ)((0, Y.f)("insertCollection"), {
                                                    network: (0, Xe.kb)(C),
                                                    collection: e.collectionAddress,
                                                    networkId: C
                                                }).then((function(e) {
                                                    o.current && (w(!1), x(!1))
                                                })).catch((function(e) {
                                                    o.current && w(!1), console.error(e)
                                                }))
                                            }
                                        })
                                    }) : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(f.Z, {
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
                                    }), (0, n.jsx)(f.Z, {
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
                                            Qe(a, Function) && a(), x(!1)
                                        }
                                    })]
                                })]
                            })
                        })
                    })
                },
                tt = function(e) {
                    var t = e.isModalOpen,
                        s = e.actionClose,
                        a = e.onClickItem,
                        c = e.isDisabled,
                        o = void 0 !== c && c,
                        d = (0, g.Z)("common").t,
                        u = (0, r.useRef)(!1),
                        x = (0, r.useRef)(null),
                        m = (0, r.useState)([]),
                        f = m[0],
                        p = m[1],
                        h = (0, r.useState)(""),
                        b = h[0],
                        j = h[1],
                        y = (0, r.useState)(""),
                        v = y[0],
                        N = y[1],
                        w = (0, r.useState)(0),
                        k = w[0],
                        C = w[1],
                        S = (0, r.useState)(0),
                        L = S[0],
                        E = S[1],
                        Z = (0, r.useState)(10)[0],
                        T = (0, r.useState)(!1),
                        F = T[0],
                        _ = T[1],
                        I = (0, r.useState)(!1),
                        R = I[0],
                        D = I[1],
                        M = (0, r.useState)(!1),
                        A = M[0],
                        P = M[1],
                        O = (0, i.T)(),
                        z = (0, i.C)((function(e) {
                            return e
                        })),
                        V = z.postmodal,
                        H = z.waccount,
                        W = V.isCustomCollectionModalOpen,
                        G = H.currentNetworkId,
                        J = H.account,
                        K = function(e) {
                            x.current && J && (0 === f.length ? u.current && P(!0) : u.current && P(!1), x.current.getCollections({
                                userAddress: J,
                                networkId: G || "*",
                                searchType: "NFT",
                                skip: L,
                                take: Z,
                                queryString: e && e.length > 0 ? e : void 0
                            }).then((function(e) {
                                if (e) {
                                    var t = e.data[0],
                                        s = t.rows,
                                        n = t.count;
                                    u.current && C(n), 0 === f.length ? u.current && p(s) : u.current && p(f.concat(s))
                                }
                            })).catch((function(e) {
                                (0, le.$)(e, O)
                            })).finally((function() {
                                u.current && (P(!1), _(!1))
                            })))
                        },
                        q = (0, r.useRef)(_e()((function(e) {
                            u.current && N(e)
                        }), 300)).current;
                    return (0, r.useEffect)((function() {
                        return u.current = !0, x.current = new Ie.k_({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), x.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }),
                            function() {
                                u.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        u.current && (C(0), E(0), p([]), _(!0))
                    }), [v]), (0, r.useEffect)((function() {
                        k > f.length ? u.current && (E(L + 10), D(!0)) : u.current && D(!1)
                    }), [f]), (0, r.useEffect)((function() {
                        F && K(v)
                    }), [F]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(U.Z, {
                            isOpen: t,
                            actionClose: s,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h4", {
                                    className: "text-lg font-semibold text-center text-primary-dark-blue",
                                    children: d("filterCollectionsLabel")
                                }), (0, n.jsxs)("div", {
                                    className: "mt-[24px] text-center",
                                    children: [(0, n.jsx)(B.Z, {
                                        placeholder: d("filterCollectionOrAddressLabel"),
                                        setFilter: q,
                                        isDisabled: o,
                                        className: "h-[52px]"
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[16px] text-center",
                                        children: (0, n.jsx)("span", {
                                            onClick: function() {
                                                O((0, l.Dc)(!0))
                                            },
                                            className: "mt-[16px] text-sm font-regular text-primary-blue cursor-pointer hover:underline",
                                            children: d("addNFTCollectionLabel")
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "mt-[48px]",
                                    children: (0, n.jsxs)(X.Z, {
                                        dataLength: f.length,
                                        next: K,
                                        scrollThreshold: .99,
                                        hasMore: R,
                                        loader: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center",
                                            children: (0, n.jsx)(te.Z, {
                                                isWhite: !1,
                                                className: "w-[24px] h-[24px]"
                                            })
                                        }),
                                        scrollableTarget: "scrollable-modal",
                                        style: {
                                            overflow: "initial"
                                        },
                                        children: [A && (0, n.jsx)("div", {
                                            className: "flex items-center justify-center w-full h-full",
                                            children: (0, n.jsx)(te.Z, {
                                                isWhite: !1,
                                                className: "w-[30px] h-[30px]"
                                            })
                                        }), f.map((function(e) {
                                            return (0, n.jsx)(He, {
                                                collection: e,
                                                isSelected: b === e.address,
                                                isDisabled: o,
                                                onClick: function() {
                                                    e.address !== b ? (j(e.address), a && a(e)) : a && a(e)
                                                }
                                            }, "collection-".concat(e.address))
                                        }))]
                                    })
                                }), W && (0, n.jsx)(et, {
                                    isOpen: !0,
                                    actionClose: function() {
                                        O((0, l.Dc)(!1))
                                    }
                                })]
                            })
                        }), (0, n.jsxs)("section", {
                            className: "hidden lg:block",
                            children: [(0, n.jsx)("h4", {
                                className: "text-base font-semibold text-primary-dark-blue",
                                children: d("filterCollectionOrAddressLabel")
                            }), (0, n.jsxs)("div", {
                                className: "mt-[24px]",
                                children: [(0, n.jsx)(B.Z, {
                                    placeholder: d("filterCollectionOrAddressLabel"),
                                    setFilter: q,
                                    isDisabled: o,
                                    className: "h-[52px]"
                                }), (0, n.jsx)("div", {
                                    className: "mt-[16px]",
                                    children: (0, n.jsx)("span", {
                                        className: "".concat(o ? "text-primary-gray" : "text-primary-blue", " mt-[16px] text-sm font-regular cursor-pointer hover:underline"),
                                        onClick: function() {
                                            O((0, l.Dc)(!0))
                                        },
                                        children: d("addNFTCollectionLabel")
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "mt-[48px] max-h-[504px] ".concat(ze().scrollbar, " overflow-y-scroll scrollbar-hide overflow-x-hidden px-[3px]"),
                                id: "collections-scrollable",
                                children: (0, n.jsxs)(X.Z, {
                                    dataLength: f.length,
                                    next: K,
                                    scrollThreshold: .99,
                                    hasMore: R,
                                    loader: (0, n.jsx)("div", {
                                        className: "flex justify-center items-center",
                                        children: (0, n.jsx)(te.Z, {
                                            isWhite: !1,
                                            className: "w-[24px] h-[24px]"
                                        })
                                    }),
                                    scrollableTarget: "collections-scrollable",
                                    style: {
                                        overflow: "initial"
                                    },
                                    children: [(0, n.jsx)(n.Fragment, {
                                        children: A && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "flex items-center justify-center w-full h-[250px]",
                                                children: (0, n.jsx)(te.Z, {
                                                    isWhite: !1,
                                                    className: "w-[30px] h-[30px]"
                                                })
                                            })
                                        })
                                    }), f.map((function(e) {
                                        return (0, n.jsx)(He, {
                                            collection: e,
                                            isSelected: b === e.address,
                                            isDisabled: o,
                                            onClick: function() {
                                                e.address !== b ? (j(e.address), a && a(e)) : a && a(e)
                                            }
                                        }, "desktop-collection-".concat(e.address))
                                    }))]
                                })
                            })]
                        }), W && (0, n.jsx)(et, {
                            isOpen: !0,
                            actionClose: function() {
                                O((0, l.Dc)(!1))
                            }
                        })]
                    })
                },
                st = s(60734),
                nt = s(50425),
                rt = s(90138),
                lt = s(22537),
                it = s(57996),
                at = function(e) {
                    var t = e.NFTSrc,
                        s = e.NFTId,
                        a = e.standard,
                        c = e.collection,
                        o = e.address,
                        d = e.isSelected,
                        u = void 0 !== d && d,
                        x = e.isShrinked,
                        m = void 0 !== x && x,
                        f = e.isDisabled,
                        p = void 0 !== f && f,
                        h = e.amount,
                        g = e.hasPlaceholder,
                        b = void 0 !== g && g,
                        j = e.className,
                        y = e.onClick,
                        v = (0, r.useRef)(!1),
                        N = (0, r.useState)(!1),
                        w = N[0],
                        k = N[1],
                        C = (0, r.useState)(u),
                        S = C[0],
                        L = C[1],
                        E = (0, r.useState)(h),
                        Z = E[0],
                        T = E[1],
                        F = (0, r.useState)(t),
                        _ = F[0],
                        I = F[1],
                        R = (0, r.useState)(b),
                        D = R[0],
                        M = R[1],
                        A = (0, i.T)(),
                        P = (0, i.C)((function(e) {
                            return e
                        })),
                        O = P.waccount,
                        z = P.postmodal,
                        B = O.currentNetworkId,
                        U = z.maker,
                        V = z.taker,
                        H = (0, it.g)(B, c.address, s);
                    return (0, r.useEffect)((function() {
                        return v.current = !0,
                            function() {
                                v.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        var e, t;
                        S && ((null === U || void 0 === U ? void 0 : U.assets) && (e = U.assets.find((function(e) {
                            return e.collection.address.toLowerCase() === c.address.toLowerCase() && e.id === s
                        }))), (null === V || void 0 === V ? void 0 : V.assets) && (t = V.assets.find((function(e) {
                            return e.collection.address.toLowerCase() === c.address.toLowerCase() && e.id === s
                        }))), e || t || v.current && L(!1))
                    }), [V, U]), (0, r.useEffect)((function() {
                        L(u)
                    }), [u]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "".concat(S ? "border-primary-blue" : "border-[transparent]", " ").concat(m || p ? "" : "cursor-pointer", " ").concat(p ? "bg-gray-100" : "bg-primary-white shadow-md hover:shadow-lg", " border-solid border-[1px] transition-shadow duration-300 rounded-[16px] shadow-light-shadow select-none w-[163.5px] h-[224px] p-[12px]\n          flex flex-col items-center ").concat(m ? "lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]" : "lg:w-[208px] lg:h-[284px]", "  lg:p-[16px] ").concat(j),
                            onClick: function(e) {
                                m || p || (y && y(e, !S), "ERC1155" === a ? k(!0) : L(!S))
                            },
                            children: [(0, n.jsxs)("div", {
                                className: "group rounded-[8px] relative w-full h-[140px] ".concat(m ? "lg:h-[152px]" : "lg:h-[176px]"),
                                children: [(0, n.jsx)("div", {
                                    className: "rounded-[8px] overflow-hidden absolute w-full h-full",
                                    children: (0, n.jsx)("div", {
                                        className: "transition-transform group-hover:scale-[1.2] w-full h-full",
                                        style: {
                                            backgroundImage: "url(".concat(_, ")"),
                                            backgroundSize: "".concat(D ? "50% auto" : "cover"),
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center",
                                            backgroundColor: "".concat(D ? "rgb(243,244,246)" : ""),
                                            border: "".concat(b ? "1px solid #e5e7eb" : "")
                                        }
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "overflow-hidden w-full h-full",
                                    children: (0, n.jsx)("div", {
                                        className: "flex invisible translate-y-5 group-hover:visible group-hover:translate-y-0 transition duration-700 items-end w-full h-full z-50",
                                        children: (0, n.jsx)("div", {
                                            className: "flex w-full bg-black bg-opacity-50 pb-1 pt-1",
                                            children: H.map((function(e, t) {
                                                return (0, n.jsx)("div", {
                                                    className: "pl-1",
                                                    children: (0, n.jsx)("a", {
                                                        href: e.link,
                                                        target: "_blank",
                                                        children: (0, n.jsx)("img", {
                                                            src: e.logo
                                                        })
                                                    })
                                                }, t)
                                            }))
                                        })
                                    })
                                }), (0, n.jsx)("img", {
                                    className: "hidden",
                                    src: "".concat(_),
                                    onError: function() {
                                        I(lt.Z.src), M(!0)
                                    }
                                }), (0, n.jsx)("img", {
                                    className: "absolute top-[8px] left-[8px] w-[24px] h-[24px]",
                                    src: (0, Xe.l2)(c.networkId),
                                    "data-for": "nft-".concat(s, "-tooltip"),
                                    "data-tip": !0
                                }), (0, n.jsx)(je.Z, {
                                    id: "nft-".concat(s, "-tooltip"),
                                    type: "dark",
                                    effect: "solid",
                                    backgroundColor: "#01085a",
                                    children: (0, n.jsx)("span", {
                                        className: "rubik text-xs text-primary-white font-regular capitalize",
                                        children: (0, Xe.qe)(c.networkId)
                                    })
                                }), S && "ERC721" === a && (0, n.jsx)("div", {
                                    className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                    children: (0, n.jsx)("div", {
                                        className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                                        children: (0, n.jsx)("img", {
                                            src: re.Z.src,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }), S && "ERC1155" === a && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        className: "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                                            children: (0, n.jsx)("img", {
                                                src: re.Z.src,
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
                                                children: Z
                                            })
                                        })
                                    })]
                                }), m && "ERC1155" === a && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "absolute -bottom-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                                        children: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-blue",
                                            children: (0, n.jsx)("span", {
                                                className: "text-primary-white text-[16px] font-semibold",
                                                children: Z
                                            })
                                        })
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: "mt-[8px] text-left w-full",
                                children: (0, n.jsx)("span", {
                                    className: "text-base ".concat(p ? "text-primary-gray" : S ? "text-primary-blue" : "text-primary-dark-blue", " ").concat(m ? "lg:text-sm" : "lg:text-lg", " font-semibold"),
                                    children: (0, n.jsx)(nt.Z, {
                                        text: "#".concat(s),
                                        className: "h-[28.5px]",
                                        animationSpeed: "20"
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-center items-center mt-[4px] w-full ".concat(m && "lg:mt-[8px]"),
                                children: [(0, n.jsx)(se.Z, {
                                    src: c.imageUrl ? c.imageUrl : "",
                                    statusVerification: c.statusVerification,
                                    className: "mr-[10px] w-[30px] h-[30px]",
                                    badgeClassName: "w-[15px] h-[15px]",
                                    showCollectionTooltip: !0,
                                    collection: c
                                }), (0, n.jsx)("div", {
                                    className: "flex-1 h-full",
                                    children: (0, n.jsx)(nt.Z, {
                                        text: c.name,
                                        className: "h-full text-xxs font-semibold ".concat(p ? "text-primary-gray" : "text-primary-dark-blue", " flex items-center")
                                    })
                                })]
                            })]
                        }), w && (0, n.jsx)(rt.Z, {
                            NFTSrc: t,
                            NFTId: s,
                            NFTCollection: c,
                            NFTAmount: Z,
                            isUpdating: Number(Z) > 0,
                            owner: o,
                            isOpen: !0,
                            action: function(e) {
                                T(e), k(!1), 0 === Number(e) ? (L(!1), A((0, l.iB)({
                                    id: s,
                                    type: a,
                                    amount: "0",
                                    amountHumanReadable: "0",
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: b
                                })), A((0, l.Gu)())) : (L(!0), A((0, l.iB)({
                                    id: s,
                                    type: a,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: b
                                })), A((0, l.TG)({
                                    id: s,
                                    type: a,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: b
                                })), A((0, l.Gu)()))
                            },
                            actionClose: function() {
                                k(!1)
                            }
                        })]
                    })
                },
                ct = s(61257),
                ot = s(82534),
                dt = s.n(ot),
                ut = s(87805),
                xt = s(19755),
                mt = s(96360),
                ft = s(951),
                pt = s(87863);

            function ht(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var gt = function(e) {
                    var t = e.tokens,
                        s = e.tokenSelectedIndex,
                        a = e.tokenAmount,
                        c = e.isOpen,
                        o = void 0 !== c && c,
                        d = e.isEditingAmount,
                        u = void 0 !== d && d,
                        x = e.isTaker,
                        m = void 0 !== x && x,
                        p = e.isMoonpayVisible,
                        h = void 0 !== p && p,
                        b = e.action,
                        j = e.actionClose,
                        y = e.onRemove,
                        v = (0, g.Z)("common").t,
                        N = (0, r.useRef)(!1),
                        w = (0, r.useState)(o),
                        k = w[0],
                        C = w[1],
                        S = (0, r.useState)(a),
                        L = S[0],
                        E = S[1],
                        Z = (0, r.useState)(""),
                        T = Z[0],
                        F = Z[1],
                        _ = (0, r.useState)(!1),
                        I = _[0],
                        R = _[1],
                        D = (0, r.useState)(!1),
                        M = D[0],
                        A = D[1],
                        P = (0, r.useState)(),
                        O = P[0],
                        z = P[1],
                        B = (0, r.useState)(s),
                        U = B[0],
                        V = B[1],
                        H = (0, r.useState)(!1),
                        W = H[0],
                        G = H[1],
                        J = (0, i.T)(),
                        K = (0, i.C)((function(e) {
                            return e
                        })).postmodal,
                        q = K.taker,
                        $ = K.maker;
                    return (0, r.useEffect)((function() {
                        return N.current = !0,
                            function() {
                                N.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        q && $ && (m && q.collector && N.current ? F(q.collector.address) : $.collector && N.current && F($.collector.address))
                    }), []), (0, n.jsx)(n.Fragment, {
                        children: k && (0, n.jsx)("div", {
                            className: "".concat(dt().overlay, " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            children: (0, n.jsxs)("div", {
                                className: "".concat(dt().cryptoTokenModal, " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full text-center overflow-y-scroll scrollbar-hide lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center text-primary-white",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-lg font-semibold text-primary-blue lg:text-xl",
                                        children: u ? (0, n.jsx)(n.Fragment, {
                                            children: v("editAmountLabel")
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: v("selectedDesiredLabel")
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "flex w-full justify-center items-center mt-[24px]",
                                        children: T && T.length > 0 && (0, n.jsx)(ut.Z, {
                                            tokenAmount: L,
                                            tokens: t,
                                            tokenSelectedIndex: U,
                                            userAddress: T,
                                            placeholder: "0.00",
                                            showBalance: !m,
                                            onInsufficientFunds: function() {
                                                G(!0)
                                            },
                                            onValueChange: function(e) {
                                                var t = e.value,
                                                    s = e.amountBase,
                                                    n = e.balance,
                                                    r = e.currentTokenIndex;
                                                if (R(!1), s && n && t) {
                                                    if (m) {
                                                        if (0 === parseFloat(t)) return void A(!1)
                                                    } else if (0 === parseFloat(t) || s.gt(n)) return void A(!1);
                                                    E(t), V(r), z(s), A(!0)
                                                } else E("0"), A(!1)
                                            },
                                            alreadyFocused: u,
                                            animationOnFocused: !0,
                                            onTokenChange: function() {
                                                R(!0)
                                            }
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                                    children: [I ? (0, n.jsx)(f.Z, {
                                        text: v(u ? "saveCapitalizedLabel" : "addCapitalizedLabel"),
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
                                        children: M ? (0, n.jsx)(f.Z, {
                                            text: v(u ? "saveCapitalizedLabel" : "addCapitalizedLabel"),
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
                                                ht(b, Function) && b(), u ? m ? ("ERC20" === t[U].type ? J((0, l.xp)({
                                                    tokenAddress: t[U].address,
                                                    amount: O ? O.toString() : "",
                                                    amountHumanReadable: L
                                                })) : J((0, l.CO)({
                                                    type: t[U].type,
                                                    amount: O ? O.toString() : "",
                                                    amountHumanReadable: L
                                                })), J((0, l.Gu)())) : ("ERC20" === t[U].type ? J((0, l.$N)({
                                                    tokenAddress: t[U].address,
                                                    amount: O ? O.toString() : "",
                                                    amountHumanReadable: L
                                                })) : J((0, l.Qw)({
                                                    type: t[U].type,
                                                    amount: O ? O.toString() : "",
                                                    amountHumanReadable: L
                                                })), J((0, l.Gu)())) : (J(m ? (0, l.c6)({
                                                    id: "",
                                                    type: t[U].type,
                                                    amount: O ? O.toString() : "",
                                                    amountHumanReadable: L,
                                                    owner: T,
                                                    collection: {
                                                        name: t[U].name,
                                                        statusVerification: t[U].statusVerification,
                                                        address: t[U].address,
                                                        imageUrl: t[U].imageUrl,
                                                        networkId: t[U].networkId,
                                                        abi: t[U].abi,
                                                        type: t[U].type,
                                                        symbol: t[U].symbol,
                                                        createdAt: t[U].createdAt
                                                    },
                                                    imageSrc: t[U].imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                }) : (0, l.TG)({
                                                    id: "",
                                                    type: t[U].type,
                                                    amount: O ? O.toString() : "",
                                                    amountHumanReadable: L,
                                                    owner: T,
                                                    collection: {
                                                        name: t[U].name,
                                                        statusVerification: t[U].statusVerification,
                                                        address: t[U].address,
                                                        imageUrl: t[U].imageUrl,
                                                        networkId: t[U].networkId,
                                                        abi: t[U].abi,
                                                        type: t[U].type,
                                                        symbol: t[U].symbol,
                                                        createdAt: t[U].createdAt
                                                    },
                                                    imageSrc: t[U].imageUrl,
                                                    isApproved: !1,
                                                    hasPlaceholder: !1
                                                })), J((0, l.Gu)())), C(!1)
                                            }
                                        }) : (0, n.jsx)("div", {
                                            children: (0, n.jsx)(f.Z, {
                                                text: v(u ? "saveCapitalizedLabel" : "addCapitalizedLabel"),
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
                                    }), !u && !0 === h && W && (0, n.jsx)("div", {
                                        children: (0, n.jsx)(f.Z, {
                                            text: v("topUpMoonpayLabel"),
                                            type: {
                                                class: "primary",
                                                icon: !0,
                                                hasColoredBg: !1
                                            },
                                            iconSrc: ft.Z.src,
                                            size: "large",
                                            initialState: {
                                                state: "default"
                                            },
                                            className: "ml-[2px] px-[28px]",
                                            onClick: function() {
                                                J((0, pt.gj)(!0))
                                            }
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-between items-start",
                                        children: [(0, n.jsx)(f.Z, {
                                            text: v(u ? "cancelLabel" : "closeLabel"),
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
                                                ht(j, Function) && j(), C(!1)
                                            }
                                        }), u && (0, n.jsxs)("div", {
                                            className: "flex items-center justify-center mt-[15px] ml-[24px] cursor-pointer",
                                            onClick: function() {
                                                y && y(), J((0, l.Gu)())
                                            },
                                            onMouseEnter: function(e) {
                                                document.getElementById("trash-icon").src = mt.Z.src;
                                                var t = document.getElementById("remove-label");
                                                t.classList.add("text-primary-dark-blue"), t.classList.add("underline"), t.classList.remove("text-primary-blue")
                                            },
                                            onMouseLeave: function(e) {
                                                document.getElementById("trash-icon").src = xt.Z.src;
                                                var t = document.getElementById("remove-label");
                                                t.classList.remove("text-primary-dark-blue"), t.classList.remove("underline"), t.classList.add("text-primary-blue")
                                            },
                                            children: [(0, n.jsx)("img", {
                                                id: "trash-icon",
                                                src: xt.Z.src,
                                                className: "w-[16px] mr-[4px]",
                                                onMouseEnter: function(e) {
                                                    document.getElementById("trash-icon").src = mt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.add("text-primary-dark-blue"), t.classList.add("underline"), t.classList.remove("text-primary-blue")
                                                },
                                                onMouseLeave: function(e) {
                                                    document.getElementById("trash-icon").src = xt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.remove("text-primary-dark-blue"), t.classList.remove("underline"), t.classList.add("text-primary-blue")
                                                }
                                            }), (0, n.jsx)("span", {
                                                id: "remove-label",
                                                className: "text-primary-blue text-base font-semibold hover:underline hover:text-primary-dark-blue",
                                                onMouseEnter: function(e) {
                                                    document.getElementById("trash-icon").src = mt.Z.src;
                                                    var t = document.getElementById("remove-label");
                                                    t.classList.add("text-primary-dark-blue"), t.classList.add("underline"), t.classList.remove("text-primary-blue")
                                                },
                                                onMouseLeave: function(e) {
                                                    document.getElementById("trash-icon").src = xt.Z.src;
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
                bt = s(21812),
                jt = s.n(bt),
                yt = s(16058);
            var vt = function(e) {
                    var t = e.isModalOpen,
                        s = e.actionClose,
                        a = e.isTaker,
                        c = void 0 !== a && a,
                        o = e.isMoonpayVisible,
                        d = void 0 !== o && o,
                        u = (0, g.Z)("common").t,
                        x = (0, r.useRef)(!1),
                        m = (0, r.useRef)(null),
                        f = (0, r.useState)([]),
                        p = f[0],
                        h = f[1],
                        b = (0, r.useState)(""),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(!1),
                        N = v[0],
                        w = v[1],
                        k = (0, r.useState)(0),
                        C = k[0],
                        S = k[1],
                        L = (0, r.useState)(!1),
                        E = L[0],
                        Z = L[1],
                        T = (0, r.useState)(0),
                        F = T[0],
                        _ = T[1],
                        I = (0, r.useState)(10)[0],
                        R = (0, r.useState)(0),
                        D = R[0],
                        M = R[1],
                        A = (0, r.useState)(!1),
                        P = A[0],
                        O = A[1],
                        z = (0, r.useState)(!1),
                        V = z[0],
                        H = z[1],
                        W = (0, i.T)(),
                        G = (0, i.C)((function(e) {
                            return e
                        })).waccount,
                        J = G.currentNetworkId,
                        K = G.account,
                        q = function(e) {
                            if (m.current && K) {
                                e && e.length > 0 ? [J || "1", "TKN", F, I, e] : [J || "1", "TKN", F, I], m.current.getCollections({
                                    userAddress: K,
                                    networkId: J || "*",
                                    searchType: "TKN",
                                    skip: F,
                                    take: I,
                                    queryString: e && e.length > 0 ? e : void 0
                                }).then((function(e) {
                                    if (e) {
                                        var t = e.data[0],
                                            s = t.rows,
                                            n = t.count;
                                        x.current && M(n), 0 === p.length ? x.current && h(s) : x.current && h(p.concat(s))
                                    }
                                })).catch((function(e) {
                                    (0, le.$)(e, W)
                                })).finally((function() {
                                    x.current && Z(!1)
                                }))
                            }
                        };
                    return (0, r.useEffect)((function() {
                        return x.current = !0, m.current = new Ie.k_({
                                apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                            }), m.current.config({
                                backendURL: "https://api.nfttrader.io"
                            }),
                            function() {
                                x.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        x.current && (M(0), _(0), h([]), Z(!0))
                    }), [j]), (0, r.useEffect)((function() {
                        D > p.length ? x.current && (_(F + 10), O(!0)) : x.current && O(!1)
                    }), [p]), (0, r.useEffect)((function() {
                        E && q(j)
                    }), [E]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(U.Z, {
                            isOpen: t,
                            actionClose: s,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h4", {
                                    className: "text-lg font-semibold text-center text-primary-blue",
                                    children: u("selectDesiredTokenLabel")
                                }), (0, n.jsx)("div", {
                                    className: "mt-[24px] text-center",
                                    children: (0, n.jsx)(B.Z, {
                                        placeholder: "Search token name or address",
                                        setFilter: function(e) {
                                            y(e)
                                        },
                                        className: "h-[52px]"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-[48px]",
                                    children: (0, n.jsx)(X.Z, {
                                        dataLength: p.length,
                                        next: q,
                                        hasMore: P,
                                        loader: (0, n.jsx)("div", {
                                            className: "flex justify-center items-center",
                                            children: (0, n.jsx)("img", {
                                                src: yt.Z.src,
                                                className: "".concat(jt().rotating),
                                                width: 24,
                                                height: 24
                                            })
                                        }),
                                        scrollableTarget: "scrollable-modal",
                                        style: {
                                            overflow: "initial"
                                        },
                                        children: p.map((function(e, t) {
                                            return (0, n.jsx)(ct.Z, {
                                                tokenName: e.name,
                                                tokenImageSrc: e.imageUrl ? e.imageUrl : "",
                                                onClick: function() {
                                                    S(t), w(!0)
                                                },
                                                className: "mt-[8px]",
                                                enabled: !0
                                            }, "token-item-".concat(t))
                                        }))
                                    })
                                }), N && (0, n.jsx)(gt, {
                                    tokens: p,
                                    tokenSelectedIndex: C,
                                    tokenAmount: "0",
                                    isEditingAmount: !1,
                                    isTaker: c,
                                    isOpen: !0,
                                    action: function() {
                                        w(!1), W((0, l.eY)(!1))
                                    },
                                    actionClose: function() {
                                        w(!1), W((0, l.eY)(!1))
                                    }
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "".concat(!1 === V ? "".concat(jt().overlay) : "", " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"),
                            children: [(0, n.jsx)("div", {
                                className: "".concat(!0 === V && "hidden", " ").concat(jt().erc20Tokens, " fixed flex flex-col w-full h-[304px] bg-primary-white z-[20000] rounded-t-[32px] py-[40px] px-[16px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"),
                                children: (0, n.jsxs)("section", {
                                    className: "hidden lg:block",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center w-full",
                                        children: [(0, n.jsx)("div", {
                                            className: "flex items-center justify-center w-[32px] h-[32px]",
                                            children: (0, n.jsx)("img", {
                                                src: Je.Z.src,
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
                                        children: (0, n.jsx)(B.Z, {
                                            placeholder: u("searchTokenNameAddressLabel"),
                                            setFilter: function(e) {
                                                y(e)
                                            },
                                            className: "h-[52px]"
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[40px] max-h-[504px] ".concat(jt().scrollbar, " overflow-y-scroll scrollbar-hide overflow-x-hidden px-[3px]"),
                                        id: "collections-scrollable",
                                        children: (0, n.jsx)(X.Z, {
                                            dataLength: p.length,
                                            next: q,
                                            hasMore: !0,
                                            loader: (0, n.jsx)("div", {
                                                className: "flex justify-center items-center",
                                                children: (0, n.jsx)("img", {
                                                    src: yt.Z.src,
                                                    className: "".concat(jt().rotating),
                                                    width: 24,
                                                    height: 24
                                                })
                                            }),
                                            scrollableTarget: "collections-scrollable",
                                            style: {
                                                overflow: "initial"
                                            },
                                            children: p.map((function(e, t) {
                                                return (0, n.jsx)(ct.Z, {
                                                    tokenName: e.name,
                                                    tokenImageSrc: e.imageUrl ? e.imageUrl : "",
                                                    onClick: function() {
                                                        S(t), w(!0), H(!0)
                                                    },
                                                    className: "mt-[8px]",
                                                    enabled: !0
                                                }, "token-item-".concat(t))
                                            }))
                                        })
                                    })]
                                })
                            }), N && (0, n.jsx)(gt, {
                                tokens: p,
                                tokenSelectedIndex: C,
                                tokenAmount: "0",
                                isEditingAmount: !1,
                                isTaker: c,
                                isMoonpayVisible: d,
                                isOpen: !0,
                                action: function() {
                                    w(!1), W((0, l.eY)(!1))
                                },
                                actionClose: function() {
                                    w(!1), W((0, l.eY)(!1))
                                }
                            })]
                        })]
                    })
                },
                Nt = s(3110),
                wt = s(19722),
                kt = s(29113),
                Ct = s(73811),
                St = s(93329),
                Lt = s.n(St),
                Et = function(e) {
                    var t = e.isCurrent,
                        s = (0, i.C)((function(e) {
                            return e
                        })),
                        a = s.postmodal,
                        c = s.waccount,
                        o = (0, i.T)(),
                        d = a.isERC20ModalOpen,
                        u = a.maker,
                        x = a.offerType,
                        m = a.lookingForType,
                        p = c.currentNetworkId,
                        h = (0, g.Z)("common").t,
                        b = (0, r.useRef)(!1),
                        j = (0, r.useState)(!1),
                        y = j[0],
                        v = j[1],
                        N = (0, r.useState)([]),
                        w = (N[0], N[1]),
                        k = (0, r.useState)(),
                        C = k[0],
                        S = k[1],
                        E = (0, r.useState)(null),
                        Z = E[0],
                        T = E[1],
                        F = (0, r.useState)(1)[0],
                        I = (0, r.useState)(0),
                        R = (I[0], I[1]),
                        D = (0, r.useState)(!1),
                        M = D[0],
                        A = D[1],
                        P = (0, r.useState)(!1),
                        O = P[0],
                        z = P[1],
                        U = (0, r.useState)(),
                        V = U[0],
                        H = U[1],
                        W = (0, r.useState)([]),
                        G = W[0],
                        J = W[1],
                        K = (0, r.useState)(!1),
                        q = K[0],
                        X = K[1],
                        Q = (0, r.useState)([])[0],
                        ee = (0, r.useState)("1" === x),
                        se = ee[0],
                        ne = ee[1],
                        re = (0, r.useState)(!1),
                        le = re[0],
                        ie = re[1],
                        ce = (0, r.useState)(x),
                        oe = ce[0],
                        de = ce[1],
                        ue = function(e, t) {
                            var s, n = u && u.collector ? u.collector.address : "";
                            p && (s = (0, Y.f)("getNftCollectionAssetsByOwner", [p, e.address, n, "50", Z || "null"]), (0, $.bf)(s).then((function(e) {
                                var s = e.data[0],
                                    n = (s.response, s.nfts),
                                    r = s.continuation,
                                    l = s.total;
                                b.current && (R(l), A(!1)), 0 === n.length ? b.current && J(n) : b.current && J(G.concat(n)), r ? b.current && T(r) : b.current && T(null), t && b.current && t("default")
                            })).catch((function(e) {
                                b.current && A(!1), t && b.current && t("default"), console.log(e)
                            })))
                        },
                        xe = function(e, t) {
                            return e > 0 && t > 0 ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " + ").concat(t, " ").concat(h("cryptoSelectedLabel")) : e > 0 ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " selected") : t > 0 ? "".concat(t, " ").concat(h("crypto selected")) : "0 NFTs ".concat(h("selectedLabel"))
                        },
                        me = function(e, t) {
                            if (u) {
                                var s = u.assets;
                                if (s)
                                    if (s.find((function(s) {
                                            var n;
                                            return s.collection.address.toLowerCase() === t.address.toLowerCase() && e.tokenId.toLowerCase() === (null === (n = s.id) || void 0 === n ? void 0 : n.toLowerCase())
                                        }))) return !0
                            }
                            return !1
                        },
                        fe = function(e, t) {
                            if (u) {
                                var s = u.assets;
                                if (s) {
                                    var n = s.find((function(s) {
                                        var n;
                                        return s.collection.address.toLowerCase() === t.address.toLowerCase() && e.tokenId.toLowerCase() === (null === (n = s.id) || void 0 === n ? void 0 : n.toLowerCase())
                                    }));
                                    if (n && n.amount) return n.amount
                                }
                            }
                            return "0"
                        },
                        pe = (0, r.useRef)(_e()((function(e, t) {
                            "" != e ? function(e, t) {
                                if (A(!0), p && t && u && u.collector) {
                                    var s = (0, Y.f)("getNftMetadataWithAddress", [p, t.address, e, u.collector.address]);
                                    (0, $.bf)(s, {
                                        headers: {
                                            "x-api-key": "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                                        }
                                    }).then((function(e) {
                                        var t = e.data[0];
                                        !0 === t.isOwner ? b.current && J([t]) : b.current && J([])
                                    })).catch((function(e) {
                                        console.log(e), b.current && J([])
                                    })).finally((function() {
                                        b.current && A(!1)
                                    }))
                                }
                            }(e, t) : b.current && (J([]), T(null), A(!0), H(V))
                        }), 300)).current;
                    return (0, r.useEffect)((function() {
                        return b.current = !0,
                            function() {
                                b.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        o((0, l.Gu)())
                    }), []), (0, r.useEffect)((function() {
                        if (y) {
                            var e = function() {
                                window.innerWidth > 1023 && b.current && v(!1)
                            };
                            return e(), window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }
                    }), [y]), (0, r.useEffect)((function() {
                        "null" !== Z ? b.current && z(!0) : b.current && z(!1)
                    }), [Z, F]), (0, r.useEffect)((function() {
                        V && ue(V)
                    }), [V]), (0, r.useEffect)((function() {
                        if (u && u.assets) {
                            var e = new Array,
                                t = 0;
                            u.assets.forEach((function(s) {
                                "ERC20" === s.type || "NATIVE" === s.type ? e.push({
                                    text: s.amountHumanReadable ? s.amountHumanReadable : "",
                                    isDisabled: !1,
                                    isEditable: !0,
                                    tokenSymbol: s.collection.symbol ? s.collection.symbol : "",
                                    icon: s.imageSrc ? s.imageSrc : "",
                                    asset: s
                                }) : t++
                            })), b.current && (S({
                                text: xe(t, e.length),
                                isDisabled: !(t > 0 || e.length > 0),
                                isEditable: !1,
                                tokenSymbol: "",
                                icon: "",
                                asset: null
                            }), w(e))
                        }
                    }), [null === u || void 0 === u ? void 0 : u.assets]), (0, r.useEffect)((function() {
                        "1" === x && (o((0, l.C$)()), o((0, l.Gu)()))
                    }), [x]), (0, n.jsx)(L.Z, {
                        isCurrent: t,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)("section", {
                                className: "grid grid-cols-12",
                                children: [(0, n.jsxs)("div", {
                                    className: "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                                    children: [(0, n.jsx)(Ne, {
                                        headerText: h("iWillOfferLabel"),
                                        currentSelection: "0" === x ? (0, n.jsxs)("span", {
                                            className: "flex gap-x-[9px]",
                                            children: [(0, n.jsx)("img", {
                                                src: _.Z.src,
                                                className: "w-[14px]"
                                            }), (0, n.jsx)("span", {
                                                className: "font-semibold",
                                                children: h("offerForPostCardOneLabel")
                                            })]
                                        }) : "1" === x ? (0, n.jsx)("span", {
                                            className: "font-semibold",
                                            children: h("offerForPostCardTwoLabel")
                                        }) : void 0,
                                        className: "mb-[48px]",
                                        onClick: function() {
                                            ie(!0)
                                        },
                                        isLocked: "2" === m,
                                        lockedMessage: h("lockedPostTypeSelectionLabel")
                                    }), (0, n.jsx)(tt, {
                                        isModalOpen: !1,
                                        actionClose: function() {},
                                        onClickItem: function(e) {
                                            e.address != (null === V || void 0 === V ? void 0 : V.address) && (J([]), T(null), A(!0), H(e))
                                        },
                                        isDisabled: "1" === x
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "col-span-12 pt-[30px] lg:pt-0 lg:col-span-9 lg:pl-[32px] lg:min-h-[732px]",
                                    children: (0, n.jsx)("div", {
                                        className: "w-full lg:min-h-[732px]",
                                        children: (0, n.jsxs)("div", {
                                            className: "w-full lg:min-h-[732px]",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex flex-col lg:flex-row-reverse",
                                                children: [u && (0, n.jsxs)("div", {
                                                    className: "flex items-center justify-between lg:items-start lg:flex-row-reverse",
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "flex items-center lg:flex-row-reverse",
                                                        children: [(0, n.jsx)("div", {
                                                            className: "flex items-center mr-[16px] lg:ml-[16px] lg:mr-[auto]",
                                                            children: u && u.collector && (0, n.jsx)(Pe.Z, {
                                                                address: u.collector.address,
                                                                src: u.collector.imageUrl,
                                                                isNFT: u.collector.isNft ? 1 : 0,
                                                                sizesClassNames: "w-[24px] h-[24px]",
                                                                jazziconSize: {
                                                                    defaultSize: 24,
                                                                    breakpoints: [],
                                                                    sizes: []
                                                                }
                                                            })
                                                        }), (0, n.jsxs)("div", {
                                                            className: "flex flex-col text-right",
                                                            children: [(0, n.jsx)("span", {
                                                                className: "text-base font-semibold text-primary-dark-blue",
                                                                children: h("yourWalletLabel")
                                                            }), (0, n.jsx)("span", {
                                                                className: "rubik text-xs font-regular cursor-pointer text-primary-gray",
                                                                children: u && u.collector && (0, n.jsx)(Ct.Z, {
                                                                    text: (0, Ae.x)(u.collector.address),
                                                                    url: (0, kt.w)(p, u.collector.address),
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
                                                        children: h("selectWhatYouWantToOfferPostLabel")
                                                    })
                                                })]
                                            }), se ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("div", {
                                                    className: "mt-[24px]",
                                                    children: C && (0, n.jsx)(ye, {
                                                        text: C.text,
                                                        isDisabled: C.isDisabled,
                                                        isEditable: C.isEditable,
                                                        onClick: function() {
                                                            C.isDisabled || o((0, l.Rd)(!0))
                                                        }
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "mt-[20px]",
                                                    children: (0, n.jsx)(B.Z, {
                                                        setFilter: function(e) {
                                                            V && function(e, t) {
                                                                pe(e, t)
                                                            }(e, V)
                                                        },
                                                        placeholder: h("searchByTokenIdLabel"),
                                                        regex: /^\d+$/,
                                                        isDisabled: !V,
                                                        className: "h-[52px]"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "mt-[32px] lg:hidden",
                                                    children: (0, n.jsx)(f.Z, {
                                                        text: h("filterCollectionsLabel"),
                                                        type: {
                                                            class: "primary",
                                                            icon: !0,
                                                            hasColoredBg: !1
                                                        },
                                                        size: "large",
                                                        initialState: {
                                                            state: "default"
                                                        },
                                                        iconSrc: st.Z.src,
                                                        showNotifications: !0,
                                                        notificationsNumber: function() {
                                                            if (u) {
                                                                var e = u.assets;
                                                                if (e) {
                                                                    var t = 0;
                                                                    return e.forEach((function(e) {
                                                                        "ERC721" !== e.type && "ERC1155" !== e.type || t++
                                                                    })), t
                                                                }
                                                            }
                                                            return 0
                                                        }(),
                                                        onClick: function() {
                                                            v(!0)
                                                        }
                                                    })
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[28px]",
                                                children: !1 === M ? (0, n.jsx)(n.Fragment, {
                                                    children: G.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "grid justify-items-center gap-x-[16px] gap-y-[16px] grid-cols-2 relative sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 x2l:grid-cols-4",
                                                            children: [V && G.map((function(e, t) {
                                                                var s, r;
                                                                return (0, n.jsx)(at, {
                                                                    NFTSrc: (0, wt.G)(e.cachedFileUrl),
                                                                    NFTId: e.tokenId,
                                                                    standard: V.type,
                                                                    collection: V,
                                                                    isDisabled: se,
                                                                    address: (null === u || void 0 === u || null === (s = u.collector) || void 0 === s ? void 0 : s.address) ? null === u || void 0 === u || null === (r = u.collector) || void 0 === r ? void 0 : r.address : "",
                                                                    isSelected: !se && me(e, V),
                                                                    amount: se ? "" : fe(e, V),
                                                                    hasPlaceholder: (0, wt.A)(e.cachedFileUrl),
                                                                    onClick: function(t, s) {
                                                                        var n, r;
                                                                        s ? "ERC721" === V.type && (o((0, l.TG)({
                                                                            id: e.tokenId,
                                                                            type: V.type,
                                                                            amount: null,
                                                                            amountHumanReadable: null,
                                                                            owner: (null === u || void 0 === u || null === (n = u.collector) || void 0 === n ? void 0 : n.address) || "",
                                                                            collection: V,
                                                                            imageSrc: (0, wt.G)(e.cachedFileUrl),
                                                                            isApproved: !1,
                                                                            hasPlaceholder: (0, wt.A)(e.cachedFileUrl)
                                                                        })), o((0, l.Gu)())) : "ERC721" === V.type && (o((0, l.iB)({
                                                                            id: e.tokenId,
                                                                            type: V.type,
                                                                            amount: null,
                                                                            amountHumanReadable: null,
                                                                            owner: (null === u || void 0 === u || null === (r = u.collector) || void 0 === r ? void 0 : r.address) || "",
                                                                            collection: V,
                                                                            imageSrc: (0, wt.G)(e.cachedFileUrl),
                                                                            isApproved: !1,
                                                                            hasPlaceholder: (0, wt.A)(e.cachedFileUrl)
                                                                        })), o((0, l.Gu)()))
                                                                    }
                                                                }, "nft-item-".concat(t))
                                                            })), "1" === x && (0, n.jsx)("div", {
                                                                className: "w-full h-full hidden absolute justify-center lg:flex",
                                                                children: (0, n.jsxs)("div", {
                                                                    className: "flex-col w-[467px] h-[277px] gap-y-[24px] shadow-md bg-primary-white rounded-[16px] py-[48px] px-[72px] items-center top-[100px] relative border-[1px] border-solid border-gray lg:flex",
                                                                    children: [(0, n.jsx)("img", {
                                                                        src: Nt.Z.src,
                                                                        className: "w-[81px]"
                                                                    }), (0, n.jsxs)("div", {
                                                                        className: "flex flex-col items-center gap-y-[8px]",
                                                                        children: [(0, n.jsx)("span", {
                                                                            className: "text-xl font-semibold text-primary-dark-blue",
                                                                            children: h("openToProposalOffererLabel")
                                                                        }), (0, n.jsx)("span", {
                                                                            className: "text-primary-blue text-base font-semibold cursor-pointer hover:underline",
                                                                            onClick: function() {
                                                                                ie(!0)
                                                                            },
                                                                            children: h("selectNFTTokensLabel")
                                                                        })]
                                                                    })]
                                                                })
                                                            })]
                                                        }), O && (0, n.jsx)("div", {
                                                            className: "flex justify-center items-center w-full h-[80px]",
                                                            children: (0, n.jsx)(f.Z, {
                                                                text: h("loadMoreLabel"),
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
                                                                    V && ue(V, e), e && e("loading")
                                                                }
                                                            })
                                                        })]
                                                    }) : (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-[500px]",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex flex-col items-center justify-center relative h-full w-full",
                                                            children: V ? (0, n.jsxs)(n.Fragment, {
                                                                children: [(0, n.jsx)("img", {
                                                                    src: ae.Z.src,
                                                                    width: 88,
                                                                    height: 88
                                                                }), (0, n.jsx)("div", {
                                                                    className: "text-xl font-semibold text-primary-dark-blue mt-[24px]",
                                                                    children: h("sorryLabel")
                                                                }), (0, n.jsx)("div", {
                                                                    className: "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                                    children: h("noAssetsFoundLabel")
                                                                })]
                                                            }) : (0, n.jsx)(n.Fragment, {
                                                                children: se ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [(0, n.jsx)("div", {
                                                                        className: "w-full h-full hidden absolute justify-center lg:flex",
                                                                        children: (0, n.jsxs)("div", {
                                                                            className: "flex-col w-[467px] h-[277px] gap-y-[24px] shadow-md bg-primary-white rounded-[16px] py-[48px] px-[72px] items-center top-[100px] relative border-[1px] border-solid border-gray lg:flex",
                                                                            children: [(0, n.jsx)("img", {
                                                                                src: Nt.Z.src,
                                                                                className: "w-[81px]"
                                                                            }), (0, n.jsxs)("div", {
                                                                                className: "flex flex-col items-center gap-y-[8px]",
                                                                                children: [(0, n.jsx)("span", {
                                                                                    className: "text-xl font-semibold text-primary-dark-blue",
                                                                                    children: h("openToProposalOffererLabel")
                                                                                }), (0, n.jsx)("span", {
                                                                                    className: "text-primary-blue text-base font-semibold cursor-pointer hover:underline",
                                                                                    onClick: function() {
                                                                                        ie(!0)
                                                                                    },
                                                                                    children: h("selectNFTTokensLabel")
                                                                                })]
                                                                            })]
                                                                        })
                                                                    }), (0, n.jsx)("img", {
                                                                        src: Te,
                                                                        className: "w-[128px] block lg:hidden"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "text-base font-regular text-primary-dark-blue text-center mt-[16px] lg:hidden",
                                                                        children: h("offerAnythingLabel")
                                                                    })]
                                                                }) : (0, n.jsxs)(n.Fragment, {
                                                                    children: [(0, n.jsx)("img", {
                                                                        src: Nt.Z.src,
                                                                        className: "w-[173px] hidden lg:block"
                                                                    }), (0, n.jsx)("img", {
                                                                        src: Ke.Z.src,
                                                                        className: "w-[173px] block lg:hidden"
                                                                    }), (0, n.jsx)("span", {
                                                                        className: "text-base font-regular text-primary-dark-blue text-center mt-[16px]",
                                                                        children: h("selectCollectionShowNFTsLabel")
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    })
                                                }) : (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-full h-[500px]",
                                                        children: (0, n.jsx)(te.Z, {
                                                            isWhite: !1,
                                                            className: "w-[30px] h-[30px]"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), y && (0, n.jsx)(tt, {
                                isModalOpen: y,
                                actionClose: function() {
                                    v(!1)
                                },
                                onClickItem: function(e) {
                                    e.address != (null === V || void 0 === V ? void 0 : V.address) && (J([]), T(null), A(!0), H(e))
                                },
                                isDisabled: "1" === x
                            }), d && (0, n.jsx)(vt, {
                                isModalOpen: !0,
                                actionClose: function() {
                                    o((0, l.eY)(!1))
                                },
                                isTaker: !1,
                                isMoonpayVisible: !0
                            }), q && (0, n.jsx)(gt, {
                                tokens: new Array(Q[0].collection),
                                tokenSelectedIndex: 0,
                                tokenAmount: Q[0].amountHumanReadable ? Q[0].amountHumanReadable : "0",
                                isEditingAmount: !0,
                                isTaker: !1,
                                isOpen: !0,
                                action: function() {
                                    X(!1)
                                },
                                actionClose: function() {
                                    X(!1)
                                },
                                onRemove: function() {
                                    "NATIVE" === Q[0].type ? o((0, l.Bd)(Q[0])) : o((0, l.TJ)(Q[0])), X(!1)
                                }
                            }), le && (0, n.jsx)("div", {
                                className: "fixed w-full h-full flex flex-row-reverse z-[10500] bg-primary-gray/50 top-[0px] left-[0px]",
                                onClick: function() {
                                    ie(!1)
                                },
                                children: (0, n.jsxs)("div", {
                                    className: "".concat(Lt().sidebar, " w-full bg-primary-white px-[24px] pt-[24px] scrollbar-hide overflow-y-scroll lg:h-full lg:w-[400px] lg:pt-[28px] lg:relative"),
                                    onClick: function(e) {
                                        e.stopPropagation()
                                    },
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-col gap-y-[24px] h-[100%] scrollbar-hide lg:h-[calc(100%-100px)] lg:overflow-y-scroll",
                                        children: [(0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("h2", {
                                                className: "font-semibold text-xl text-primary-dark-blue",
                                                children: h("iWillOfferLabel")
                                            }), (0, n.jsx)("p", {
                                                className: "rubik text-base font-light text-primary-dark-blue",
                                                children: h("kindOfOfferDescriptionLabel")
                                            })]
                                        }), (0, n.jsxs)(Ee, {
                                            onSelect: function(e) {
                                                de(e)
                                            },
                                            selectedIndex: Number(x),
                                            children: [(0, n.jsx)(Le, {
                                                title: h("offerPostOneLabel"),
                                                description: h("offerForPostCardDescriptionOneLabel"),
                                                value: "0",
                                                index: 0,
                                                isSelected: "0" === x,
                                                showWarning: !1,
                                                icon: (0, n.jsx)("img", {
                                                    src: _.Z.src,
                                                    width: 16,
                                                    height: 16
                                                }),
                                                className: "flex-none"
                                            }), (0, n.jsx)(Le, {
                                                title: h("offerPostTwoLabel"),
                                                description: h("offerForPostCardDescriptionTwoLabel"),
                                                value: "1",
                                                index: 1,
                                                isSelected: "1" === x,
                                                showWarning: !1,
                                                className: "flex-none"
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-between w-[auto] h-[78px] mt-[48px] -mx-[24px] p-[16px] border-[1px] border-solid border-gray-200 bg-gray-100 bottom-[0] left-[0] lg:w-full lg:absolute lg:mx-[0] lg:mt-[0]",
                                        children: [(0, n.jsx)(f.Z, {
                                            text: h("cancelLabel"),
                                            type: {
                                                class: "secondary",
                                                hasColoredBg: !1,
                                                icon: !1
                                            },
                                            initialState: {
                                                state: "default"
                                            },
                                            size: "large",
                                            onClick: function() {
                                                ie(!1)
                                            },
                                            className: "bg-gray-100"
                                        }), (0, n.jsx)(f.Z, {
                                            text: h("saveLabel"),
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
                                                ie(!1), ne("1" === oe), o((0, l.cK)({
                                                    lookingForType: m,
                                                    offerType: oe
                                                })), o((0, l.Gu)())
                                            },
                                            className: "capitalize"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                Zt = s(14905),
                Tt = s.n(Zt),
                Ft = s(90902),
                _t = s(58693),
                It = s(93442),
                Rt = s(53904),
                Dt = s(91936),
                Mt = s(68182),
                At = s(24789),
                Pt = function(e) {
                    var t = e.asset,
                        s = e.className,
                        l = void 0 === s ? "" : s,
                        i = e.onClick,
                        a = (0, g.Z)("common").t,
                        c = (0, r.useState)(null),
                        o = c[0],
                        d = c[1],
                        u = (0, At.Ge)().library,
                        x = function(e, t) {
                            return new Promise((function(s, n) {
                                e ? s((0, Mt.z)("ETHEREUM_DECIMALS_NUMBER")) : new Rt.CH(t.collection.address, t.collection.abi, u).decimals().then((function(e) {
                                    s(e)
                                })).catch((function(e) {
                                    console.log(e), n(null)
                                }))
                            }))
                        };
                    return (0, r.useEffect)((function() {
                        var e;
                        "NATIVE" !== t.type && "ERC20" !== t.type || (e = t, (0, $.bf)((0, Y.f)("getPairValue", ["".concat(e.collection.symbol, "-USD")])).then((function(t) {
                            var s = t.data[0].amount,
                                n = It.O$.from(Number(s).toFixed(0)),
                                r = It.O$.from(e.amount);
                            x("NATIVE" === e.type, e).then((function(e) {
                                var t = Dt.formatUnits(r.mul(n), e);
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
                            children: "ERC20" === t.collection.type || "NATIVE" === t.collection.type ? (0, n.jsx)(se.Z, {
                                src: t.collection.imageUrl ? t.collection.imageUrl : lt.Z.src,
                                className: "w-[40px] h-[40px]"
                            }) : (0, n.jsx)("div", {
                                className: "w-[40px] h-[40px] rounded-full",
                                style: {
                                    backgroundImage: "url(".concat(t.imageSrc ? t.imageSrc : lt.Z.src, ")"),
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center"
                                }
                            })
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col flex-1 ml-[20px]",
                            children: [(0, n.jsxs)("span", {
                                className: "flex items-center text-lg font-semibold",
                                children: [(0, n.jsx)(nt.Z, {
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
                                children: [!o && a("calculatingLabel"), o && o]
                            }) : (0, n.jsxs)("div", {
                                className: "flex items-center gap-x-1",
                                children: [(0, n.jsx)(se.Z, {
                                    src: t.collection.imageUrl ? t.collection.imageUrl : lt.Z.src,
                                    className: "w-[16px] h-[16px]",
                                    badgeClassName: "w-[10px] h-[10px]",
                                    statusVerification: t.collection.statusVerification
                                }), (0, n.jsx)("span", {
                                    className: "text-xxs font-semibold relative top-[2px]",
                                    children: (0, n.jsx)(nt.Z, {
                                        text: t.collection.name,
                                        className: "w-[180px] h-[20px]"
                                    })
                                })]
                            })]
                        }), "ERC20" === t.collection.type || "NATIVE" === t.collection.type ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                                children: (0, n.jsx)("img", {
                                    src: ge.Z.src,
                                    className: "cursor-pointer",
                                    onClick: function(e) {
                                        i && i(e)
                                    },
                                    width: 24,
                                    height: 24
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidden justify-center items-center w-[32px] h-[32px] lg:flex",
                                children: (0, n.jsx)("img", {
                                    src: Ft.Z.src,
                                    className: "cursor-pointer",
                                    onMouseEnter: function(e) {
                                        e.target.src = ge.Z.src
                                    },
                                    onMouseLeave: function(e) {
                                        e.target.src = Ft.Z.src
                                    },
                                    onClick: function(e) {
                                        i && i(e)
                                    },
                                    width: 24,
                                    height: 24
                                })
                            })]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                                children: (0, n.jsx)("img", {
                                    src: xt.Z.src,
                                    className: "cursor-pointer",
                                    onClick: function(e) {
                                        i && i(e)
                                    },
                                    width: 24,
                                    height: 24
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidden items-center justify-center w-[32px] h-[32px] lg:flex",
                                children: (0, n.jsx)("img", {
                                    src: _t.Z.src,
                                    className: "cursor-pointer",
                                    onMouseEnter: function(e) {
                                        e.target.src = xt.Z.src
                                    },
                                    onMouseLeave: function(e) {
                                        e.target.src = _t.Z.src
                                    },
                                    onClick: function(e) {
                                        i && i(e)
                                    },
                                    width: 24,
                                    height: 24
                                })
                            })]
                        })]
                    })
                },
                Ot = s(340),
                zt = s(71320),
                Bt = function(e) {
                    var t, s = e.collections,
                        r = e.className,
                        l = void 0 === r ? "" : r,
                        a = e.onClick,
                        c = (0, g.Z)("common").t,
                        o = (0, i.C)((function(e) {
                            return e
                        })).postmodal.taker;
                    return (0, n.jsxs)("div", {
                        className: "flex items-center justify-between ".concat(l),
                        children: [(0, n.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: (0, n.jsx)(ue, {
                                url: (t = s, t.map((function(e) {
                                    return e.imageUrl ? e.imageUrl : ""
                                }))),
                                time: 2e3,
                                size: 24
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex flex-col flex-1 ml-[20px]",
                            children: (0, n.jsx)("span", {
                                className: "flex items-center text-sm font-semibold text-primary-dark-blue",
                                children: o && o.collections ? (0, n.jsx)(n.Fragment, {
                                    children: 0 === o.collections.filter((function(e) {
                                        return "ERC20" === e.type || "NATIVE" === e.type
                                    })).length ? c("selectTokensLabel") : function(e) {
                                        var t = e.map((function(e) {
                                            return e.symbol ? e.symbol : ""
                                        })).join(", ");
                                        return t.length > 15 ? t.substring(0, 15) + "..." : t
                                    }(o.collections.filter((function(e) {
                                        return "ERC20" === e.type || "NATIVE" === e.type
                                    })))
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: c("selectTokensLabel")
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                            children: o && o.collections ? (0, n.jsx)(n.Fragment, {
                                children: 0 === o.collections.filter((function(e) {
                                    return "ERC20" === e.type || "NATIVE" === e.type
                                })).length ? (0, n.jsx)("img", {
                                    src: ne.Z.src,
                                    className: "cursor-pointer",
                                    onClick: function(e) {
                                        a && a(e)
                                    },
                                    width: 16,
                                    height: 16
                                }) : (0, n.jsx)("img", {
                                    src: ge.Z.src,
                                    className: "cursor-pointer",
                                    onClick: function(e) {
                                        a && a(e)
                                    },
                                    width: 16,
                                    height: 16
                                })
                            }) : (0, n.jsx)("img", {
                                src: ne.Z.src,
                                className: "cursor-pointer",
                                onClick: function(e) {
                                    a && a(e)
                                },
                                width: 16,
                                height: 16
                            })
                        }), (0, n.jsx)("div", {
                            className: "hidden justify-center items-center w-[32px] h-[32px] lg:flex",
                            children: o && o.collections ? (0, n.jsx)(n.Fragment, {
                                children: 0 === o.collections.filter((function(e) {
                                    return "ERC20" === e.type || "NATIVE" === e.type
                                })).length ? (0, n.jsx)("img", {
                                    src: zt.Z.src,
                                    className: "cursor-pointer",
                                    onMouseEnter: function(e) {
                                        e.target.src = ne.Z.src
                                    },
                                    onMouseLeave: function(e) {
                                        e.target.src = zt.Z.src
                                    },
                                    onClick: function(e) {
                                        a && a(e)
                                    },
                                    width: 16,
                                    height: 16
                                }) : (0, n.jsx)("img", {
                                    src: Ft.Z.src,
                                    className: "w-[16px] h-[16px] cursor-pointer",
                                    onMouseEnter: function(e) {
                                        e.target.src = ge.Z.src
                                    },
                                    onMouseLeave: function(e) {
                                        e.target.src = Ft.Z.src
                                    },
                                    onClick: function(e) {
                                        a && a(e)
                                    },
                                    width: 16,
                                    height: 16
                                })
                            }) : (0, n.jsx)("img", {
                                src: zt.Z.src,
                                className: "cursor-pointer",
                                onMouseEnter: function(e) {
                                    e.target.src = ne.Z.src
                                },
                                onMouseLeave: function(e) {
                                    e.target.src = zt.Z.src
                                },
                                onClick: function(e) {
                                    a && a(e)
                                },
                                width: 16,
                                height: 16
                            })
                        })]
                    })
                },
                Ut = function(e) {
                    var t = e.collection,
                        s = e.className,
                        r = void 0 === s ? "" : s,
                        l = e.onClick;
                    return (0, n.jsxs)("div", {
                        className: "flex items-center justify-between ".concat(r),
                        children: [(0, n.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: (0, n.jsx)(se.Z, {
                                src: t.imageUrl ? t.imageUrl : lt.Z.src,
                                statusVerification: t.statusVerification,
                                className: "w-[32px] h-[32px]",
                                badgeClassName: "w-[16px] h-[16px]"
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex flex-col flex-1 ml-[20px]",
                            children: (0, n.jsx)("span", {
                                className: "flex items-center text-sm font-semibold text-primary-dark-blue ",
                                children: (0, n.jsx)(nt.Z, {
                                    text: t.name,
                                    className: "w-[200px] h-[30px]"
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                            children: (0, n.jsx)("img", {
                                src: xt.Z.src,
                                className: "cursor-pointer",
                                onClick: function() {
                                    l && l()
                                },
                                width: 16,
                                height: 16
                            })
                        }), (0, n.jsx)("div", {
                            className: "hidden items-center justify-center w-[32px] h-[32px] lg:flex",
                            children: (0, n.jsx)("img", {
                                src: _t.Z.src,
                                className: "cursor-pointer",
                                onMouseEnter: function(e) {
                                    e.target.src = xt.Z.src
                                },
                                onMouseLeave: function(e) {
                                    e.target.src = _t.Z.src
                                },
                                onClick: function() {
                                    l && l()
                                },
                                width: 16,
                                height: 16
                            })
                        })]
                    })
                },
                Vt = s(65120);

            function Ht(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function Wt(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ht(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Ht(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return Ht(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Gt = function() {
                    var e = (0, r.useRef)(!1),
                        t = (0, i.C)((function(e) {
                            return e
                        })).postmodal,
                        s = t.maker,
                        a = t.taker,
                        c = t.currentStepMenu,
                        o = t.tokensAvailable,
                        d = t.showTokens,
                        u = (0, r.useState)(!0),
                        x = u[0],
                        m = u[1],
                        p = (0, r.useState)(!0),
                        h = p[0],
                        b = p[1],
                        j = (0, r.useState)([]),
                        y = j[0],
                        v = j[1],
                        N = (0, r.useState)([]),
                        w = N[0],
                        k = N[1],
                        C = (0, r.useState)([]),
                        S = C[0],
                        L = C[1],
                        E = (0, r.useState)([]),
                        Z = E[0],
                        T = E[1],
                        F = (0, r.useState)(!1),
                        _ = F[0],
                        I = F[1],
                        R = (0, g.Z)("common").t,
                        D = (0, r.useState)(!0),
                        M = D[0],
                        A = D[1],
                        P = (0, i.T)(),
                        O = function() {
                            P((0, l.nI)(!1)), P((0, l.Rd)(!1))
                        },
                        z = function(e) {
                            return !(!a || !a.collections) && void 0 != a.collections.find((function(t) {
                                return t.type === e.type && t.address.toLowerCase() === e.address.toLowerCase() && ("ERC20" === e.type || "NATIVE" === e.type)
                            }))
                        },
                        B = function() {
                            if (a && a.collections && a.collections.find((function(e) {
                                    return "ERC20" === e.type || "NATIVE" === e.type
                                }))) return !0;
                            return !1
                        };
                    return (0, r.useEffect)((function() {
                        return e.current = !0,
                            function() {
                                e.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (s && s.assets && c && 2 === c) {
                            var t = s.assets,
                                n = t.findIndex((function(e) {
                                    return "NATIVE" === e.collection.type || "ERC20" === e.collection.type
                                })) > -1;
                            e.current && m(n), n && e.current && v(t.filter((function(e) {
                                return "NATIVE" === e.collection.type || "ERC20" === e.collection.type
                            })));
                            var r = t.findIndex((function(e) {
                                return "ERC721" === e.collection.type || "ERC1155" === e.collection.type
                            })) > -1;
                            e.current && b(r), r && e.current && k(t.filter((function(e) {
                                return "ERC721" === e.collection.type || "ERC1155" === e.collection.type
                            })))
                        }
                    }), [c, s]), (0, r.useEffect)((function() {
                        if (a && a.collections && c && 1 === c) {
                            var e = a.collections;
                            e && L(e)
                        }
                    }), [c, a]), (0, r.useEffect)((function() {
                        x || h || O()
                    }), [x, h]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "fixed w-full h-full flex flex-col-reverse z-[10500] bg-primary-gray/50 top-[0] left-[0] ".concat(!M && "invisible", " lg:flex-row-reverse"),
                            onClick: function() {
                                O()
                            },
                            children: (0, n.jsxs)("div", {
                                className: "".concat(Tt().cart, " h-[500px] w-full bg-primary-white rounded-t-[24px] px-[24px] pt-[24px] overflow-y-scroll scrollbar-hide lg:rounded-t-[0px] lg:h-full lg:w-[400px] lg:pt-[28px] lg:relative"),
                                onClick: function(e) {
                                    e.stopPropagation()
                                },
                                children: [(0, n.jsx)("div", {
                                    className: "flex items-center justify-center w-full h-[4px] lg:hidden",
                                    children: (0, n.jsx)("div", {
                                        className: "w-[30px] h-[4px] bg-primary-gray/40 rounded-[2px] cursor-pointer hover:bg-primary-blue",
                                        onClick: function() {
                                            O()
                                        }
                                    })
                                }), d ? (0, n.jsx)(n.Fragment, {
                                    children: 1 === c && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)("div", {
                                            className: "lg:flex lg:items-center lg:justify-between mt-[24px] lg:mt-[0px]",
                                            children: (0, n.jsx)("h3", {
                                                className: "w-full text-center text-primary-dark-blue text-xl font-semibold lg:text-left",
                                                children: R("selectDesiredTokenLabel")
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "mt-[32px] lg:flex lg:flex-col lg:h-[80%]",
                                            children: o && o.map((function(e, t) {
                                                return (0, n.jsxs)("div", {
                                                    className: "flex items-center justify-between ".concat(0 === t ? "" : "mt-[24px]"),
                                                    children: [(0, n.jsx)(Vt.Z, {
                                                        label: e.symbol ? e.symbol : "",
                                                        isChecked: z(e),
                                                        isDisabled: B() && !z(e),
                                                        value: "".concat(e.symbol, "-").concat(e.address, "-").concat(e.type),
                                                        onClick: function(t) {
                                                            t ? function(e) {
                                                                if (a && a.collections) {
                                                                    if (a.collections.find((function(t) {
                                                                            return t.address.toLowerCase() === e.address.toLowerCase() && t.type === e.type && ("ERC20" === e.type || "NATIVE" === e.type)
                                                                        }))) return;
                                                                    P((0, l.fG)(Wt(a.collections).concat([e]))), P((0, l.Gu)())
                                                                }
                                                            }(e) : function(e) {
                                                                if (a && a.collections) {
                                                                    if (!a.collections.find((function(t) {
                                                                            return t.address.toLowerCase() === e.address.toLowerCase() && t.type === e.type && ("ERC20" === e.type || "NATIVE" === e.type)
                                                                        }))) return;
                                                                    P((0, l.fG)(a.collections.filter((function(t) {
                                                                        return !(t.address.toLowerCase() === e.address.toLowerCase() && t.type === e.type && ("ERC20" === e.type || "NATIVE" === e.type))
                                                                    })))), P((0, l.Gu)())
                                                                }
                                                            }(e)
                                                        }
                                                    }), (0, n.jsx)("div", {
                                                        className: "flex items-center justify-center w-[24px] h-[24px]",
                                                        children: (0, n.jsx)("img", {
                                                            src: e.imageUrl ? e.imageUrl : "",
                                                            width: 24,
                                                            height: 24
                                                        })
                                                    })]
                                                }, "".concat(e.address || e.type, "-").concat(t))
                                            }))
                                        })]
                                    })
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: [2 === c && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsxs)("div", {
                                            className: "lg:flex lg:items-center lg:justify-between mt-[24px] lg:mt-[0px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "w-full text-center text-primary-dark-blue text-xl font-semibold lg:text-left",
                                                children: R("selectionPreviewLabel")
                                            }), (0, n.jsx)("div", {
                                                className: "flex justify-center items-center w-[36px] h-[36px]",
                                                children: (0, n.jsx)("img", {
                                                    src: Je.Z.src,
                                                    className: "hidden lg:block cursor-pointer",
                                                    onMouseEnter: function(e) {
                                                        e.target.src = Ot.Z.src
                                                    },
                                                    onMouseLeave: function(e) {
                                                        e.target.src = Je.Z.src
                                                    },
                                                    onClick: function() {
                                                        O()
                                                    },
                                                    width: 24,
                                                    height: 24
                                                })
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "lg:flex lg:flex-col lg:h-[80%] lg:mt-[32px]",
                                            children: [x && y.map((function(e, t) {
                                                return (0, n.jsx)(Pt, {
                                                    asset: e,
                                                    onClick: function() {
                                                        A(!1), T(new Array(e)), I(!0)
                                                    }
                                                }, "crypto-".concat(t, "-").concat(e.collection.symbol).concat("-".concat("ERC20" === e.collection.type && e.collection.address)))
                                            })), x && h && (0, n.jsx)("div", {
                                                className: "w-full h-[1px] mt-[12px] bg-primary-gray/40"
                                            }), h && w.map((function(e, t) {
                                                return (0, n.jsx)(Pt, {
                                                    asset: e,
                                                    className: "mt-[24px]",
                                                    onClick: function() {
                                                        var t;
                                                        P((0, l.iB)({
                                                            id: e.id,
                                                            type: e.collection.type,
                                                            amount: null,
                                                            amountHumanReadable: null,
                                                            owner: (null === s || void 0 === s || null === (t = s.collector) || void 0 === t ? void 0 : t.address) || "",
                                                            collection: e.collection,
                                                            imageSrc: (0, wt.G)(e.imageSrc),
                                                            isApproved: !1,
                                                            hasPlaceholder: (0, wt.A)(e.imageSrc)
                                                        })), P((0, l.Gu)())
                                                    }
                                                }, "nft-".concat(t, "-").concat(e.collection.address, "-"))
                                            }))]
                                        })]
                                    }), 1 === c && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsxs)("div", {
                                            className: "lg:flex lg:items-center lg:justify-between mt-[24px] lg:mt-[0px]",
                                            children: [(0, n.jsx)("h3", {
                                                className: "w-full text-center text-primary-dark-blue text-xl font-semibold lg:text-left",
                                                children: R("collectionInterestedLabel")
                                            }), (0, n.jsx)("div", {
                                                className: "flex justify-center items-center w-[36px] h-[36px]",
                                                children: (0, n.jsx)("img", {
                                                    src: Je.Z.src,
                                                    className: "hidden lg:block cursor-pointer",
                                                    onMouseEnter: function(e) {
                                                        e.target.src = Ot.Z.src
                                                    },
                                                    onMouseLeave: function(e) {
                                                        e.target.src = Je.Z.src
                                                    },
                                                    onClick: function() {
                                                        O()
                                                    },
                                                    width: 24,
                                                    height: 24
                                                })
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "flex flex-col scrollbar-hide lg:block lg:h-[75%] lg:overflow-scroll lg:mt-[32px]",
                                            children: (0, n.jsxs)(n.Fragment, {
                                                children: [o && (0, n.jsx)(Bt, {
                                                    collections: o,
                                                    onClick: function() {
                                                        P((0, l.nI)(!0))
                                                    }
                                                }), (0, n.jsx)("div", {
                                                    className: "w-full h-[1px] mt-[12px] bg-primary-gray/40"
                                                }), S.filter((function(e) {
                                                    return "ERC1155" === e.type || "ERC721" === e.type
                                                })).map((function(e, t) {
                                                    return (0, n.jsx)(Ut, {
                                                        collection: e,
                                                        className: "mt-[24px]",
                                                        onClick: function() {
                                                            ! function(e) {
                                                                if (a && a.collections) {
                                                                    if (!a.collections.find((function(t) {
                                                                            return t.address.toLowerCase() === e.address.toLowerCase() && t.type === e.type && ("ERC721" === e.type || "ERC1155" === e.type)
                                                                        }))) return;
                                                                    P((0, l.fG)(a.collections.filter((function(t) {
                                                                        return !(t.address.toLowerCase() === e.address.toLowerCase() && t.type === e.type && ("ERC721" === e.type || "ERC1155" === e.type))
                                                                    })))), P((0, l.Gu)())
                                                                }
                                                            }(e)
                                                        }
                                                    }, "collection-".concat(t, "-").concat(e.address, "-"))
                                                }))]
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "hidden absolute w-full h-[79px] bg-gray-100 border-t-[1px] border-gray-200 bottom-[0px] left-[0px] p-[16px] lg:block",
                                    children: 1 === c ? (0, n.jsx)(n.Fragment, {
                                        children: d ? (0, n.jsx)("div", {
                                            className: "flex justify-between w-full h-full",
                                            children: (0, n.jsx)(f.Z, {
                                                text: R("backLabel"),
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
                                                    P((0, l.nI)(!1))
                                                },
                                                className: "bg-gray-100"
                                            })
                                        }) : (0, n.jsx)("div", {
                                            className: "flex justify-end w-full h-full",
                                            children: (0, n.jsx)(f.Z, {
                                                text: R("closeLabel"),
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
                                                    O()
                                                }
                                            })
                                        })
                                    }) : (0, n.jsx)("div", {
                                        className: "flex justify-end w-full h-full",
                                        children: (0, n.jsx)(f.Z, {
                                            text: R("closeLabel"),
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
                                                O()
                                            }
                                        })
                                    })
                                })]
                            })
                        }), _ && (0, n.jsx)(gt, {
                            tokens: new Array(Z[0].collection),
                            tokenSelectedIndex: 0,
                            tokenAmount: Z[0].amountHumanReadable ? Z[0].amountHumanReadable : "0",
                            isEditingAmount: !0,
                            isTaker: !1,
                            isOpen: !0,
                            action: function() {
                                I(!1), O()
                            },
                            actionClose: function() {
                                I(!1), O()
                            },
                            onRemove: function() {
                                "NATIVE" === Z[0].type ? P((0, l.Bd)(Z[0])) : P((0, l.TJ)(Z[0])), I(!1), O()
                            }
                        })]
                    })
                },
                Jt = s(3907),
                Kt = s.n(Jt),
                qt = s(64334),
                $t = s(59370),
                Yt = s(55741),
                Xt = s(41816),
                Qt = s(35019),
                es = function(e) {
                    var t = e.days,
                        s = e.onChange,
                        l = e.editable,
                        i = void 0 === l || l,
                        a = e.pastDate,
                        c = e.expiredDate,
                        o = e.expired,
                        d = void 0 !== o && o,
                        u = e.className,
                        x = e.who,
                        m = e.isPost,
                        f = void 0 !== m && m,
                        p = (0, g.Z)("common").t,
                        h = (0, r.useRef)(!1),
                        b = (0, r.useState)(!1),
                        j = b[0],
                        y = b[1],
                        v = (0, r.useState)(!0),
                        N = v[0],
                        w = v[1],
                        k = (0, r.useState)(t),
                        C = k[0],
                        S = k[1],
                        L = (0, r.useState)(0),
                        E = L[0],
                        Z = L[1],
                        T = (0, r.useState)(new Date),
                        F = T[0],
                        _ = T[1],
                        I = (0, r.useState)(c)[0],
                        R = (0, r.useState)(d)[0],
                        D = (0, r.useRef)(null),
                        M = function(e) {
                            return "".concat(e.getDate() < 10 ? "0".concat(e.getDate()) : "".concat(e.getDate()), "/").concat(e.getMonth() + 1, "/").concat(e.getFullYear())
                        };
                    return (0, r.useEffect)((function() {
                        return h.current = !0,
                            function() {
                                h.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (D.current) {
                            h.current && w(!1);
                            var e = D.current;
                            (j ? e.animate([{
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
                                h.current && w(!0)
                            }
                        }
                    }), [j]), (0, r.useEffect)((function() {
                        if (!R) {
                            s && s(C);
                            var e = null;
                            (e = a ? new Date(a) : new Date).setDate(e.getDate() + C), h.current && _(e)
                        }
                    }), [C]), (0, r.useEffect)((function() {
                        if (!R && I) {
                            var e = new Date,
                                t = (0, Qt.t)(e.toString(), new Date(I).toString()),
                                s = t.weekdays,
                                n = t.days,
                                r = 0;
                            if (s > 0) r = 7 * s;
                            r += n, h.current && Z(r)
                        }
                    }), [C]), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col items-center ".concat(u),
                            children: [(0, n.jsx)("div", {
                                className: "".concat("maker" === x ? j || f ? "cursor-default" : "cursor-pointer" : "cursor-default", " w-full flex justify-center items-center select-none"),
                                onClick: function() {
                                    N && i && !R && y(!j)
                                },
                                children: (0, n.jsx)("div", {
                                    className: "".concat(Kt().insideBorder, " px-[24px] py-[12px] rounded-[100px] flex justify-center items-center"),
                                    ref: D,
                                    style: {
                                        width: "100%"
                                    },
                                    children: j ? (0, n.jsx)("div", {
                                        className: "flex justify-between items-center w-full ".concat(Kt().fade),
                                        onClick: function(e) {
                                            e.stopPropagation()
                                        },
                                        children: N && !R ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex justify-between items-center text-primary-blue text-lg font-semibold mr-[24px]",
                                                children: [(0, n.jsx)("img", {
                                                    src: qt.Z.src,
                                                    className: "cursor-pointer",
                                                    onClick: function(e) {
                                                        C > (0, Mt.z)("MIN_DAY_DURATION_DEAL") && h.current && S(C - 1)
                                                    },
                                                    onMouseEnter: function(e) {
                                                        e.target.src = $t.Z.src
                                                    },
                                                    onMouseLeave: function(e) {
                                                        e.target.src = qt.Z.src
                                                    }
                                                }), (0, n.jsx)("div", {
                                                    className: "mx-[16px] w-[100px] text-center ".concat(C > 99 ? "text-xs" : "text-base"),
                                                    children: "".concat(0 === C ? "\u221e" : "".concat(C, " day").concat(1 === C ? "" : "s"))
                                                }), (0, n.jsx)("img", {
                                                    src: Yt.Z.src,
                                                    className: "cursor-pointer",
                                                    onClick: function(e) {
                                                        h.current && S(C + 1)
                                                    },
                                                    onMouseEnter: function(e) {
                                                        e.target.src = Xt.Z.src
                                                    },
                                                    onMouseLeave: function(e) {
                                                        e.target.src = Yt.Z.src
                                                    }
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: "text-primary-blue text-lg font-semibold cursor-pointer hover:underline",
                                                onClick: function() {
                                                    y(!j)
                                                },
                                                children: p("saveLabel")
                                            })]
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "h-[27px]"
                                            })
                                        })
                                    }) : (0, n.jsxs)("div", {
                                        className: "flex justify-center items-center w-full ".concat(Kt().fade),
                                        children: [R && (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                                className: "text-primary-dark-blue text-sm font-semibold mr-[8px]",
                                                children: p(f ? "postExpiredLabel" : "tradeExpiredLabel")
                                            })
                                        }), N && !R ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("div", {
                                                className: "text-primary-dark-blue text-sm font-semibold mr-[8px]",
                                                children: p(f ? "postWillExpireLabel" : "tradeWillExpireLabel")
                                            }), (0, n.jsx)("div", {
                                                className: "text-primary-blue text-lg font-semibold ".concat("maker" === x && !f && "hover:underline"),
                                                children: "maker" === x ? "".concat(C, " day").concat(0 === C || C > 1 ? "s" : "") : "".concat(E, " day").concat(0 === E || E > 1 ? "s" : "")
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
                                        children: I && (0, n.jsxs)(n.Fragment, {
                                            children: [p("expiredOnLabel"), ":", " ", I && M(new Date(I))]
                                        })
                                    }) : (0, n.jsxs)(n.Fragment, {
                                        children: [p("expiryDateLabel"), ":", " ", "maker" === x ? F && M(F) : I && M(new Date(I))]
                                    })
                                })
                            })]
                        })
                    })
                },
                ts = s(40182),
                ss = s(56522),
                ns = s(29542),
                rs = s.n(ns),
                ls = function(e) {
                    var t = e.actionButtonText,
                        s = void 0 === t ? "" : t,
                        l = e.textEmptyContainer,
                        i = void 0 === l ? "" : l,
                        a = e.onClick,
                        c = e.children,
                        o = e.actionHasIcon,
                        d = void 0 === o || o,
                        u = e.hasShowMore,
                        x = void 0 !== u && u,
                        m = e.who,
                        f = void 0 === m ? null : m,
                        p = e.isLeft,
                        h = void 0 === p || p,
                        b = e.className,
                        j = void 0 === b ? "" : b,
                        y = (0, g.Z)("common").t,
                        v = (0, r.useRef)(!1),
                        N = (0, r.useState)(!0),
                        w = N[0],
                        k = N[1],
                        C = (0, r.useRef)(null),
                        S = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        return v.current = !0,
                            function() {
                                v.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (null != C.current) {
                            var e = new ResizeObserver((function(e) {
                                if (e.length > 0) {
                                    var t, s = e[0];
                                    (t = Array.isArray(s.borderBoxSize) ? s.borderBoxSize[0] : s.borderBoxSize).blockSize > 80 && !0 === w ? v.current && k(!1) : t.blockSize <= 80 && !1 === w && v.current && k(!0)
                                }
                            }));
                            return e.observe(C.current),
                                function() {
                                    C.current && (e.unobserve(C.current), e.disconnect())
                                }
                        }
                    }), [C.current, w]), (0, r.useEffect)((function() {
                        var e = function() {
                            if (S.current) {
                                var e = S.current,
                                    t = e.querySelector("div#badge-content"),
                                    s = e.querySelectorAll("#badge-content > div:first-child > div"),
                                    n = t.offsetWidth,
                                    r = 0,
                                    l = !0,
                                    i = !1,
                                    a = void 0;
                                try {
                                    for (var c, o = s[Symbol.iterator](); !(l = (c = o.next()).done); l = !0) {
                                        r += c.value.offsetWidth + 8 * s.length
                                    }
                                } catch (d) {
                                    i = !0, a = d
                                } finally {
                                    try {
                                        l || null == o.return || o.return()
                                    } finally {
                                        if (i) throw a
                                    }
                                }
                                n > r && v.current && k(!0)
                            }
                        };
                        return window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), []), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "".concat(w ? "rounded-[100px]" : "rounded-[24px]", " ").concat(c ? "py-[13px] px-[22px]" : "p-[22px]", " flex items-center border-[1px] border-gary-200 select-none cursor-default border-solid bg-gray-100 ").concat(j),
                            ref: C,
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col justify-center w-full",
                                ref: S,
                                children: [(0, n.jsxs)("div", {
                                    id: "badge-content",
                                    className: "flex justify-between",
                                    children: [(0, n.jsx)("div", {
                                        className: "flex flex-wrap justify-start items-center ".concat(w ? rs().keepHozDistance : rs().keepVerDistance + " " + rs().keepHozDistance),
                                        children: c || (0, n.jsx)("span", {
                                            className: "rubik text-sm font-regular text-primary-dark-blue",
                                            children: i
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-end items-center cursor-pointer select-none ".concat(w ? "" : "hidden"),
                                        onClick: function(e) {
                                            "maker" !== f && null !== f || a && (!x || c.length <= 2) && a(e)
                                        },
                                        children: [(0, n.jsx)("span", {
                                            className: "text-primary-blue hover:underline text-sm font-semibold mr-[8px] hover:text-primary-dark-blue",
                                            children: x ? (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: c.length >= 3 ? (0, n.jsx)(n.Fragment, {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex justify-between items-center",
                                                            onClick: function(e) {
                                                                e.stopPropagation();
                                                                var t = !1;
                                                                if (Array.prototype.forEach.call(window.document.getElementsByClassName(h ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.contains("badge-is-shown") && (t = !0)
                                                                    })), t) a && a(e);
                                                                else {
                                                                    var n;
                                                                    Array.prototype.forEach.call(window.document.getElementsByClassName(h ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.remove("hidden"), e.classList.add("badge-is-shown")
                                                                    }));
                                                                    var r = window.document.getElementById("badge-show-more-".concat(h ? "left" : "right"));
                                                                    r && (r.innerHTML = "string" === typeof s && s.length > 0 ? y("editChoiceLabel") : y("editOfferLabel")), null === (n = window.document.getElementById("badge-img-show-more-".concat(h ? "left" : "right"))) || void 0 === n || n.remove()
                                                                }
                                                            },
                                                            children: [(0, n.jsx)("span", {
                                                                id: "badge-show-more-".concat(h ? "left" : "right"),
                                                                className: "hover:underline",
                                                                children: "".concat(c.length - 2, " more item").concat(c.length - 2 > 1 ? "s" : "")
                                                            }), (0, n.jsx)("img", {
                                                                id: "badge-img-show-more-".concat(h ? "left" : "right"),
                                                                src: ss.Z.src,
                                                                className: "w-[16px] h-[16px]"
                                                            })]
                                                        })
                                                    }) : (0, n.jsx)(n.Fragment, {
                                                        children: "maker" === f ? "string" === typeof s && s.length > 0 ? y("editChoiceLabel") : y("editOfferLabel") : ""
                                                    })
                                                })
                                            }) : s
                                        }), d && (0, n.jsx)("div", {
                                            className: "rounded-full bg-primary-blue flex items-center justify-center cursor-pointer w-[24px] h-[24px] hover:bg-primary-dark-blue",
                                            children: (0, n.jsx)("img", {
                                                src: ts.Z.src,
                                                width: 8,
                                                height: 8
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-end mt-[26px] mb-[10px] ".concat(w ? "hidden" : "", " "),
                                    children: (0, n.jsxs)("div", {
                                        className: "flex justify-end items-center w-[150px] cursor-pointer select-none",
                                        onClick: function(e) {
                                            "maker" !== f && null !== f || a && (!x || c.length <= 2) && a(e)
                                        },
                                        children: [(0, n.jsx)("span", {
                                            className: "text-primary-blue text-sm font-semibold hover:underline mr-[8px]",
                                            children: x ? (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsx)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: c.length >= 3 ? (0, n.jsx)(n.Fragment, {
                                                        children: (0, n.jsxs)("div", {
                                                            className: "flex justify-between items-center",
                                                            onClick: function(e) {
                                                                e.stopPropagation();
                                                                var t = !1;
                                                                if (Array.prototype.forEach.call(window.document.getElementsByClassName(h ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.contains("badge-is-shown") && (t = !0)
                                                                    })), t) a && a(e);
                                                                else {
                                                                    var n;
                                                                    Array.prototype.forEach.call(window.document.getElementsByClassName(h ? "badge-left" : "badge-right"), (function(e) {
                                                                        e.classList.remove("hidden"), e.classList.add("badge-is-shown")
                                                                    }));
                                                                    var r = window.document.getElementById("badge-show-more-".concat(h ? "left" : "right", "-2"));
                                                                    r && (r.innerHTML = "string" === typeof s && s.length > 0 ? y("editChoiceLabel") : y("editOfferLabel")), null === (n = window.document.getElementById("badge-img-show-more-".concat(h ? "left" : "right", "-2"))) || void 0 === n || n.remove()
                                                                }
                                                            },
                                                            children: [(0, n.jsx)("span", {
                                                                id: "badge-show-more-".concat(h ? "left" : "right", "-2"),
                                                                className: "hover:underline",
                                                                children: "".concat(c.length - 2, " more item").concat(c.length - 2 > 1 ? "s" : "")
                                                            }), (0, n.jsx)("img", {
                                                                id: "badge-img-show-more-".concat(h ? "left" : "right", "-2"),
                                                                src: ss.Z.src,
                                                                className: "w-[16px] h-[16px]"
                                                            })]
                                                        })
                                                    }) : (0, n.jsx)(n.Fragment, {
                                                        children: "maker" === f ? "string" === typeof s && s.length > 0 ? y("editChoiceLabel") : y("editOfferLabel") : ""
                                                    })
                                                })
                                            }) : s
                                        }), d && (0, n.jsx)("div", {
                                            className: "rounded-full bg-primary-blue flex items-center justify-center cursor-pointer w-[24px] h-[24px]",
                                            children: (0, n.jsx)("img", {
                                                src: ts.Z.src,
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
                is = s(36893),
                as = "/_next/static/media/collections_icon.78635d74.svg",
                cs = "/_next/static/media/token_collection.ed7c2aaa.svg",
                os = s(56021),
                ds = function(e) {
                    var t = e.isCurrent,
                        s = e.left,
                        a = e.right,
                        c = (0, g.Z)("common").t,
                        o = (0, r.useRef)(!1),
                        d = (0, r.useState)([]),
                        u = d[0],
                        x = d[1],
                        m = (0, r.useState)([]),
                        f = m[0],
                        p = m[1],
                        h = (0, i.T)(),
                        b = (0, i.C)((function(e) {
                            return e
                        })),
                        j = b.postmodal,
                        y = b.waccount,
                        v = j.dayDuration,
                        N = j.offerType,
                        w = j.lookingForType,
                        k = y.currentNetworkId;
                    return (0, r.useEffect)((function() {
                        return o.current = !0,
                            function() {
                                o.current = !1
                            }
                    }), []), (0, r.useEffect)((function() {
                        if (0 === u.length && "1" != N && s.assets) {
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
                                icon: is.Z.src
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
                        if (0 === f.length && a.collections) {
                            var r = [];
                            a.collections.filter((function(e) {
                                return "ERC1155" === e.type || "ERC721" === e.type
                            })).length > 0 && r.push({
                                text: "".concat(a.collections.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })).length, " Collection").concat(a.collections.filter((function(e) {
                                    return "ERC1155" === e.type || "ERC721" === e.type
                                })).length > 1 ? "s" : ""),
                                isDisabled: !0,
                                isEditable: !1,
                                isSummary: !0,
                                isHidden: !1,
                                isShrinked: !1,
                                tokenSymbol: null,
                                isNFTsSummary: !0,
                                asset: null,
                                icon: as
                            }), a.collections.filter((function(e) {
                                return "NATIVE" === e.type || "ERC20" === e.type
                            })).length > 0 && r.push({
                                text: "".concat(a.collections.filter((function(e) {
                                    return "NATIVE" === e.type || "ERC20" === e.type
                                })).length, " Token").concat(a.collections.filter((function(e) {
                                    return "NATIVE" === e.type || "ERC20" === e.type
                                })).length > 1 ? "s" : ""),
                                isDisabled: !0,
                                isEditable: !1,
                                isSummary: !0,
                                isHidden: !1,
                                isShrinked: !1,
                                tokenSymbol: null,
                                isNFTsSummary: !0,
                                asset: null,
                                icon: cs
                            }), o.current && p(r)
                        }
                    }), []), (0, n.jsx)(L.Z, {
                        isCurrent: t,
                        children: s && s.collector && a ? (0, n.jsx)("section", {
                            className: "w-full",
                            children: (0, n.jsx)("div", {
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
                                                    children: [(0, n.jsx)(Pe.Z, {
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
                                                                href: (0, kt.w)(k, s.collector.address),
                                                                target: "_blank",
                                                                children: (0, Ae.N)(s.collector.address)
                                                            })
                                                        }), (0, n.jsx)("span", {
                                                            className: "hidden rubik text-xs font-regular cursor-pointer text-primary-gray xl:inline hover:underline",
                                                            children: (0, n.jsx)("a", {
                                                                href: (0, kt.w)(k, s.collector.address),
                                                                target: "_blank",
                                                                children: (0, Ae.x)(s.collector.address)
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
                                                width: 40,
                                                height: 40,
                                                src: os.Z.src
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
                                            className: "flex justify-end h-[40px] w-[226px]"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "w-full mt-[24px] px-[16px] lg:flex lg:justify-center lg:items-center lg:px-[auto] lg:mt-[32px]",
                                        children: [(0, n.jsx)("h1", {
                                            className: "text-2xl font-semibold text-primary-dark-blue text-center mb-[16px] lg:hidden",
                                            children: c("verifyConfirmLabel")
                                        }), (0, n.jsx)("div", {
                                            className: "w-full flex justify-center items-center",
                                            children: (0, n.jsx)(es, {
                                                days: v || 0,
                                                onChange: function(e) {
                                                    h((0, l.eF)(e))
                                                },
                                                pastDate: new Date,
                                                expiredDate: new Date,
                                                editable: !1,
                                                expired: !1,
                                                who: "maker",
                                                isPost: !0,
                                                className: "w-[274px] lg:w-[294px]"
                                            })
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
                                                children: [(0, n.jsx)(Pe.Z, {
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
                                                            href: (0, kt.w)(k, s.collector.address),
                                                            target: "_blank",
                                                            children: (0, Ae.x)(s.collector.address)
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]",
                                            children: "1" === N ? (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center gap-y-[24px] w-full h-full",
                                                    children: [(0, n.jsx)("img", {
                                                        src: Te,
                                                        className: "w-[120px]"
                                                    }), (0, n.jsx)("span", {
                                                        className: "text-primary-dark-blue text-xl font-semibold",
                                                        children: c("openTradeProposalLabel")
                                                    }), (0, n.jsx)("span", {
                                                        className: "text-primary-blue cursor-pointer hover:underline",
                                                        onClick: function() {
                                                            h((0, l.Um)(2)), h((0, l.MW)(!0))
                                                        },
                                                        children: c("selectNFTTokensLabel")
                                                    })]
                                                })
                                            }) : (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("div", {
                                                    className: "badges-left w-full",
                                                    children: u.length > 0 && (0, n.jsx)(n.Fragment, {
                                                        children: (0, n.jsx)(ls, {
                                                            textEmptyContainer: "",
                                                            actionButtonText: "",
                                                            onClick: function() {
                                                                h((0, l.Um)(2)), h((0, l.MW)(!0))
                                                            },
                                                            actionHasIcon: !1,
                                                            hasShowMore: !0,
                                                            who: "maker",
                                                            children: u.map((function(e, t) {
                                                                return (0, n.jsx)(ye, {
                                                                    text: e.text,
                                                                    isDisabled: e.isDisabled,
                                                                    isEditable: e.isEditable,
                                                                    isHidden: e.isHidden,
                                                                    isShrinked: e.isShrinked,
                                                                    isSummary: e.isSummary,
                                                                    tokenSymbol: e.tokenSymbol,
                                                                    asset: e.asset,
                                                                    isNFTsSummary: e.isNFTsSummary,
                                                                    icon: e.icon,
                                                                    className: "badge-left",
                                                                    showTooltip: !e.isNFTsSummary
                                                                }, "badge-left-more-".concat(t))
                                                            }))
                                                        })
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll scrollbar-hide lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3",
                                                    children: s.assets && s.assets.filter((function(e) {
                                                        return "ERC721" === e.type || "ERC1155" === e.type
                                                    })).map((function(e, t, r) {
                                                        return (0, n.jsx)(at, {
                                                            NFTSrc: e.imageSrc ? e.imageSrc : "",
                                                            NFTId: e.id ? e.id : "",
                                                            standard: e.type,
                                                            collection: e.collection,
                                                            address: s.collector && s.collector.address ? s.collector.address : "",
                                                            isSelected: !1,
                                                            isShrinked: !0,
                                                            hasPlaceholder: e.hasPlaceholder,
                                                            amount: e.amount ? e.amount : "",
                                                            className: "".concat(0 === t ? "ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0]" : t < r.length - 1 ? "mr-[8px] lg:mr-[0]" : "mr-[16px] lg:mr-[0]", " flex-none lg:flex-auto")
                                                        }, "".concat(e.collection.address, "-").concat(e.id, "-left"))
                                                    }))
                                                })]
                                            })
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
                                            className: "flex mt-[8px] lg:hidden"
                                        }), (0, n.jsx)("div", {
                                            className: "mt-[24px] hidden divider lg:flex lg:justify-center lg:w-[4%]",
                                            children: (0, n.jsx)("div", {
                                                className: "h-full w-[1px] bg-[#D3D6DC]"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]",
                                            children: ["2" === w ? (0, n.jsx)(n.Fragment, {
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center gap-y-[24px] w-full h-full",
                                                    children: [(0, n.jsx)("img", {
                                                        src: Te,
                                                        className: "w-[120px]"
                                                    }), (0, n.jsx)("span", {
                                                        className: "text-primary-dark-blue text-xl font-semibold",
                                                        children: c("openTradeProposalLabel")
                                                    }), (0, n.jsx)("span", {
                                                        className: "text-primary-blue cursor-pointer hover:underline",
                                                        onClick: function() {
                                                            h((0, l.Um)(1)), h((0, l.MW)(!0))
                                                        },
                                                        children: c("selectCollectionTokensLabel")
                                                    })]
                                                })
                                            }) : (0, n.jsx)(n.Fragment, {}), (0, n.jsx)("div", {
                                                className: "badges-right w-full",
                                                children: f.length > 0 && (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)(ls, {
                                                        textEmptyContainer: "",
                                                        actionButtonText: c("editChoiceLabel"),
                                                        onClick: function() {
                                                            h((0, l.Um)(1)), h((0, l.MW)(!0))
                                                        },
                                                        actionHasIcon: !1,
                                                        hasShowMore: !0,
                                                        who: "maker",
                                                        isLeft: !1,
                                                        children: f.map((function(e, t) {
                                                            return (0, n.jsx)(ye, {
                                                                text: e.text,
                                                                isDisabled: e.isDisabled,
                                                                isEditable: e.isEditable,
                                                                isHidden: e.isHidden,
                                                                isShrinked: e.isShrinked,
                                                                isSummary: e.isSummary,
                                                                tokenSymbol: e.tokenSymbol,
                                                                icon: e.icon,
                                                                className: "badge-right"
                                                            }, "badge-right-more-".concat(t))
                                                        }))
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "mt-[24px] gap-x-[16px] flex py-[10px] overflow-y-scroll scrollbar-hide lg:grid lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:mt-[32px] lg:mx-[auto] lg:gap-x-[24px] lg:gap-y-[32px] lg:grid-cols-2",
                                                children: a.collections && a.collections.map((function(e, t) {
                                                    return (0, n.jsx)(de, {
                                                        collection: e,
                                                        showCollectionTooltip: "ERC1155" === e.type || "ERC721" === e.type,
                                                        isClickable: !1,
                                                        onClick: function() {},
                                                        className: "min-w-[272px] flex-none lg:flex lg:min-w-[auto]",
                                                        showIsFavorite: !1
                                                    }, "".concat(e.address, "-").concat(t))
                                                }))
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }) : (0, n.jsx)(n.Fragment, {})
                    })
                },
                us = s(44453),
                xs = s.n(us),
                ms = s(69955),
                fs = s(31023),
                ps = s(25689),
                hs = s(10208),
                gs = s(83516),
                bs = s(66986);

            function js(e, t, s, n, r, l, i) {
                try {
                    var a = e[l](i),
                        c = a.value
                } catch (o) {
                    return void s(o)
                }
                a.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function ys(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
            }
            var vs = function(e) {
                    var t = e.isCurrent,
                        s = (0, g.Z)("common").t,
                        a = (0, r.useRef)(null),
                        c = (0, i.C)((function(e) {
                            return e
                        })),
                        o = c.postmodal,
                        d = c.waccount,
                        u = (0, i.T)(),
                        x = o.postType,
                        m = o.maker,
                        p = o.taker,
                        h = o.messages,
                        b = o.dayDuration,
                        j = o.typeWanted,
                        y = o.typeOffered,
                        v = o.currentStepMenu,
                        N = d.currentNetworkId,
                        w = (0, At.Ge)().connector,
                        k = (0, r.useState)(null),
                        C = k[0],
                        S = k[1],
                        E = (0, r.useState)(null),
                        Z = E[0],
                        T = E[1],
                        F = function(e, t) {
                            if ((e === Ie.JH.A1 || e === Ie.JH.A2 || e === Ie.JH.B1 || e === Ie.JH.B2) && t) {
                                var s = [];
                                return t.collections && t.collections.forEach((function(e) {
                                    s.push({
                                        name: e.name,
                                        statusVerification: e.statusVerification,
                                        address: e.address,
                                        imageUrl: e.imageUrl ? e.imageUrl : "",
                                        networkId: e.networkId,
                                        abi: e.abi,
                                        type: e.type,
                                        isNft: !1,
                                        symbol: e.symbol ? e.symbol : "",
                                        createdAt: e.createdAt,
                                        tokenId: null,
                                        amount: null,
                                        amountHumanReadable: null,
                                        isDifferent: !1
                                    })
                                })), s
                            }
                        },
                        _ = function(e, t) {
                            if ((e === Ie.JH.A1 || e === Ie.JH.B1 || e === Ie.JH.C1) && t) {
                                var s = [];
                                return t.assets && t.assets.forEach((function(e) {
                                    s.push({
                                        name: e.collection.name,
                                        statusVerification: e.collection.statusVerification,
                                        address: e.collection.address,
                                        imageUrl: "NATIVE" === e.type || "ERC20" === e.type ? e.collection.imageUrl : e.imageSrc ? e.imageSrc : e.collection.imageUrl,
                                        networkId: e.collection.networkId,
                                        abi: "NATIVE" !== e.type ? e.collection.abi : null,
                                        type: e.type,
                                        isNft: "ERC1155" === e.type || "ERC721" === e.type,
                                        symbol: e.collection.symbol,
                                        createdAt: e.collection.createdAt,
                                        tokenId: "ERC1155" === e.type || "ERC721" === e.type ? e.id : null,
                                        amount: "ERC721" !== e.type ? e.amount : null,
                                        amountHumanReadable: "ERC721" !== e.type ? e.amountHumanReadable : null,
                                        isDifferent: !1
                                    })
                                })), s
                            }
                        },
                        I = function(e, t, s) {
                            var n = [];
                            return s.forEach((function(e) {
                                n.push(e)
                            })), n.push({
                                type: "".concat(e, "_").concat(t)
                            }), n
                        },
                        R = function() {
                            var e, t = (e = xs().mark((function e() {
                                var t, s, n, r, l, i, a, c;
                                return xs().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = ps.hexlify(hs.Y0("".concat(Ie.ov._MESSAGE_TO_SIGN))), !ys(w, gs.zw)) {
                                                e.next = 6;
                                                break
                                            }
                                            s = null === (n = w.walletConnectProvider) || void 0 === n ? void 0 : n.connector.signPersonalMessage([t, null === m || void 0 === m || null === (r = m.collector) || void 0 === r ? void 0 : r.address]), e.next = 23;
                                            break;
                                        case 6:
                                            if (!ys(w, bs.J)) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 10, w.getProvider();
                                        case 10:
                                            return i = e.sent, e.next = 13, i.send("personal_sign", [t, null === m || void 0 === m || null === (l = m.collector) || void 0 === l ? void 0 : l.address]);
                                        case 13:
                                            s = e.sent, e.next = 23;
                                            break;
                                        case 16:
                                            return e.next = 19, new fs.Web3Provider(window.ethereum);
                                        case 19:
                                            return c = e.sent, e.next = 22, c.send("personal_sign", [t, null === m || void 0 === m || null === (a = m.collector) || void 0 === a ? void 0 : a.address]);
                                        case 22:
                                            s = e.sent;
                                        case 23:
                                            return e.abrupt("return", s);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    s = arguments;
                                return new Promise((function(n, r) {
                                    var l = e.apply(t, s);

                                    function i(e) {
                                        js(l, n, r, i, a, "next", e)
                                    }

                                    function a(e) {
                                        js(l, n, r, i, a, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return (0, r.useEffect)((function() {
                        a.current = new Ie.ov({
                            apiKey: "QOZB1cFfKg5gQ2apdjB1H7EiXT2Pwpje8EOmToYB"
                        })
                    }), []), (0, r.useEffect)((function() {
                        if (a.current) {
                            var e, t, s = new Date,
                                n = new Ie.zK;
                            n.setNetworkId(N), n.setIntroMessage(h[0].type), n.setPostType(x), n.setPostDuration(b), n.setPostCreator(m.collector.address), null === p || void 0 === p || null === (e = p.collections) || void 0 === e || e.forEach((function(e) {
                                n.addWantedAsset({
                                    tokenId: null,
                                    address: e.address,
                                    networkId: e.networkId,
                                    type: e.type,
                                    amount: null
                                })
                            })), null === m || void 0 === m || null === (t = m.assets) || void 0 === t || t.forEach((function(e) {
                                n.addOfferedAsset({
                                    tokenId: e.id,
                                    address: e.collection.address,
                                    networkId: e.collection.networkId,
                                    type: e.type,
                                    amount: e.amount
                                })
                            }));
                            var r = {
                                id: "",
                                parentId: "",
                                score: 0,
                                like: 0,
                                status: Ie.RW.ACTIVE,
                                type: x,
                                creationDate: Math.floor(s.getTime() / 1e3),
                                networkId: N,
                                expirationDate: Math.floor(new Date(s.setDate(s.getDate() + b)).getTime() / 1e3),
                                numberOffers: 0,
                                accepted: !1,
                                creator: m.collector,
                                messages: I(j.join(""), y.join(""), h),
                                assets: {
                                    wanted: F(x, p),
                                    offered: _(x, m)
                                },
                                isCreator: !0
                            };
                            S(r), T(n)
                        }
                    }), [a.current]), (0, n.jsx)(L.Z, {
                        isCurrent: t,
                        children: C && d ? (0, n.jsxs)("section", {
                            className: "mt-[32px] px-[16px] w-full lg:mt-[16px] lg:px-[48px] lg:max-w-[1024px]",
                            children: [(0, n.jsx)("h1", {
                                className: "mb-[40px] w-full text-primary-blue text-2xl font-semibold text-center",
                                children: s("publicPostTitleReviewLabel")
                            }), (0, n.jsx)(ms.Z, {
                                post: C,
                                isPreview: !0,
                                isPreviewOptions: {
                                    dayDuration: b
                                },
                                className: "w-full",
                                currentUserAddress: d.account
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col items-center gap-y-[16px] mt-[40px] mb-[64px]",
                                children: [(0, n.jsx)(f.Z, {
                                    text: s("publishPostLabel"),
                                    type: {
                                        class: "primary",
                                        icon: !1,
                                        hasColoredBg: !1
                                    },
                                    size: "large",
                                    initialState: {
                                        state: "default"
                                    },
                                    className: "w-full lg:w-[400px]",
                                    onClick: function(e) {
                                        Z && (e("loading"), function(e, t) {
                                            var s;
                                            null === (s = a.current) || void 0 === s || s.config({
                                                backendURL: "https://api.nfttrader.io"
                                            });
                                            try {
                                                var n = e.factory(),
                                                    r = e.getCreatePost(n);
                                                R().then((function(e) {
                                                    var s;
                                                    null === (s = a.current) || void 0 === s || s.createPost(r, e).then((function() {
                                                        u((0, l.Um)(v + 1))
                                                    })).finally((function() {
                                                        t("default")
                                                    }))
                                                })).catch((function(e) {
                                                    console.log(e), t("default")
                                                }))
                                            } catch (i) {
                                                console.log(i)
                                            }
                                        }(Z, e))
                                    },
                                    id: "gtm-publish-post"
                                }), (0, n.jsx)(f.Z, {
                                    text: s("editPostLabel"),
                                    type: {
                                        class: "secondary",
                                        icon: !1,
                                        hasColoredBg: !1
                                    },
                                    size: "large",
                                    initialState: {
                                        state: "default"
                                    },
                                    className: "w-full lg:w-[400px]",
                                    onClick: function() {
                                        u((0, l.Um)(v - 1))
                                    }
                                })]
                            })]
                        }) : (0, n.jsx)(n.Fragment, {})
                    })
                },
                Ns = s(87774),
                ws = s(75657),
                ks = function(e) {
                    var t = e.isCurrent,
                        s = (0, g.Z)("common").t,
                        r = (0, i.T)();
                    return (0, n.jsx)(L.Z, {
                        isCurrent: t,
                        children: (0, n.jsx)("section", {
                            className: "flex justify-center items-center mt-[60px] lg:mt-[auto]",
                            children: (0, n.jsxs)("div", {
                                className: "flex flex-col items-center justify-center h-[506px]",
                                children: [(0, n.jsx)("img", {
                                    src: Ns.Z.src,
                                    className: "w-[171px] h-[auto] lg:w-[204px]"
                                }), (0, n.jsx)("img", {
                                    src: M.Z.src,
                                    className: "mt-[8px] w-[136px] h-[auto] lg:w-[160px]"
                                }), (0, n.jsxs)("div", {
                                    className: "mt-[40px] text-center text-primary-white lg:mt-[48px]",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-primary-white text-2xl font-semibold lg:text-3xl",
                                        children: s("yourPostHasBeenDeliveredLabel")
                                    }), (0, n.jsx)("div", {
                                        className: "text-center mt-[32px] lg:mt-[40px]",
                                        children: (0, n.jsx)("span", {
                                            className: "text-primary-white",
                                            children: (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("span", {
                                                    className: "rubik text-base font-light",
                                                    children: s("youCanFindPostLabel")
                                                }), " ", (0, n.jsx)(ws.default, {
                                                    href: "/my-trades",
                                                    children: (0, n.jsx)("a", {
                                                        className: "text-base font-semibold hover:underline",
                                                        target: "_blank",
                                                        children: s("hubTradesPageLabel")
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[16px] text-center text-primary-white",
                                        children: (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("span", {
                                                className: "rubik text-base font-light",
                                                children: s("forMoreInfoReadLabel")
                                            }), " ", (0, n.jsx)(ws.default, {
                                                href: "/faq",
                                                children: (0, n.jsx)("a", {
                                                    className: "text-base font-semibold hover:underline",
                                                    target: "_blank",
                                                    children: s("FAQ")
                                                })
                                            })]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-[48px]",
                                        children: (0, n.jsx)(f.Z, {
                                            text: s("closeLabel"),
                                            type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1
                                            },
                                            size: "large",
                                            onClick: function() {
                                                document.body.classList.remove("no-scroll"), r((0, l.pV)(!1)), r((0, l.q7)())
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
                Cs = function(e) {
                    e.onOpen, e.onClose;
                    var t = (0, g.Z)("common").t,
                        s = (0, i.C)((function(e) {
                            return e
                        })),
                        c = s.postmodal,
                        o = s.waccount,
                        d = (0, i.T)(),
                        u = c.stepperMenuSteps,
                        x = c.currentStepMenu,
                        m = c.isDeletePostModalOpen,
                        f = c.isCartOpen,
                        p = c.maker,
                        h = c.taker,
                        b = o.isConnected,
                        j = o.currentNetworkId,
                        y = u.map((function(e) {
                            return {
                                stepDescription: e.stepDescription,
                                isCompleted: e.isCompleted,
                                isCurrent: e.isCurrent,
                                onClick: function() {}
                            }
                        })),
                        v = function() {
                            document.body.classList.remove("no-scroll"), d((0, l.q7)()), d((0, l.pV)(!1))
                        };
                    return (0, r.useEffect)((function() {
                        b || v()
                    }), [b]), (0, r.useEffect)((function() {
                        var e = o.account,
                            t = o.username,
                            s = o.avatarUrl,
                            n = o.isNFT,
                            r = o.isVerified,
                            i = {
                                networkId: j || "1",
                                username: t || "",
                                address: e || "",
                                imageUrl: s || "",
                                isNft: n,
                                isVerified: r
                            };
                        d((0, l.q7)()), d((0, l.M7)(i))
                    }), []), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]",
                            children: (0, n.jsxs)("div", {
                                className: "".concat(S().postModal, " relative w-full h-full ").concat(0 === x ? "bg-primary-white lg:bg-[#f3f4f6]" : x < 5 && x > 0 ? "bg-primary-white" : "bg-primary-blue"),
                                children: [x <= 4 && (0, n.jsx)(k, {
                                    stepperItems: y
                                }), (0, n.jsx)("section", {
                                    id: "postmodal-body",
                                    className: "".concat(x <= 4 ? S().mainSection : S().fullSection, " ").concat(0 === x ? "bg-primary-white lg:bg-[#f3f4f6]" : x < 5 && x > 0 ? "bg-primary-white" : "bg-primary-blue lg:bg-primary-blue", " overflow-y-scroll scrollbar-hide"),
                                    children: (0, n.jsxs)("div", {
                                        className: "".concat(x < 4 ? "px-[16px] py-[24px] lg:p-[48px]" : 4 === x ? "flex justify-center h-[auto] px-[16px] lg:p-[48px]" : "px-[16px] lg:p-[48px]"),
                                        children: [0 === x && (0, n.jsx)(O, {
                                            isCurrent: !0
                                        }), 1 === x && (0, n.jsx)(Me, {
                                            isCurrent: !0
                                        }), 2 === x && (0, n.jsx)(Et, {
                                            isCurrent: !0
                                        }), 3 === x && p && h && (0, n.jsx)(ds, {
                                            isCurrent: !0,
                                            left: p,
                                            right: h
                                        }), 4 === x && (0, n.jsx)(vs, {
                                            isCurrent: !0
                                        }), 5 === x && (0, n.jsx)(ks, {
                                            isCurrent: !0
                                        })]
                                    })
                                })]
                            })
                        }), f && (0, n.jsx)(Gt, {}), m && (0, n.jsx)(a.Z, {
                            modalTitle: t("closePostLabel"),
                            modalDescription: t("cancelCurrentChoiceLabel"),
                            action: function() {
                                v(), d((0, l.fs)(!1))
                            },
                            actionClose: function() {
                                d((0, l.fs)(!1))
                            },
                            buttonsText: [t("yesCancelItLabel"), t("dismissLabel")],
                            isOpen: !0
                        })]
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
        63350: function(e) {
            e.exports = {
                disabled: "CheckBox_disabled__hvGjI"
            }
        },
        45617: function(e) {
            e.exports = {
                selected: "ToggleMessagePost_selected__xJV9_",
                disabled: "ToggleMessagePost_disabled__W5RQz"
            }
        },
        60591: function(e) {
            e.exports = {
                clickableBadge: "Badge_clickableBadge__47lUq",
                rotating: "Badge_rotating__jcLMc",
                rotate: "Badge_rotate__cmeoT"
            }
        },
        86530: function(e) {
            e.exports = {
                rotating: "ImageCollection_rotating__1B2Nj",
                rotate: "ImageCollection_rotate__Sfq5v"
            }
        },
        3907: function(e) {
            e.exports = {
                insideBorder: "TimeCursor_insideBorder__uyBmu",
                fade: "TimeCursor_fade__mrB_i"
            }
        },
        29542: function(e) {
            e.exports = {
                keepVerDistance: "BadgeContainer_keepVerDistance__r0KH2",
                keepHozDistance: "BadgeContainer_keepHozDistance__kkOli"
            }
        },
        11890: function(e) {
            e.exports = {
                isDisabled: "CollectionItem_isDisabled__to4Bb"
            }
        },
        54998: function(e) {
            e.exports = {
                isDisabled: "CollectionItemTokens_isDisabled__mVK2_",
                skeleton: "CollectionItemTokens_skeleton__GuIYn",
                "skeleton-loading": "CollectionItemTokens_skeleton-loading__CV8I5"
            }
        },
        99397: function(e) {
            e.exports = {
                collectionRow: "CollectionRow_collectionRow__E0Z2A",
                radio: "CollectionRow_radio__nphaZ",
                skeleton: "CollectionRow_skeleton__qZzRG",
                "skeleton-loading": "CollectionRow_skeleton-loading__28Vz2"
            }
        },
        82534: function(e) {
            e.exports = {
                cryptoTokenModal: "CryptoTokenModal_cryptoTokenModal__k8hMH",
                goUp: "CryptoTokenModal_goUp__1PqiI",
                overlay: "CryptoTokenModal_overlay__AHB_r",
                zoom: "CryptoTokenModal_zoom__izmXU"
            }
        },
        76752: function(e) {
            e.exports = {
                customCollectionModal: "CustomCollectionModal_customCollectionModal__j9NQp",
                goUp: "CustomCollectionModal_goUp__dWXh_",
                overlay: "CustomCollectionModal_overlay__uk1VW",
                zoom: "CustomCollectionModal_zoom__UiD0U"
            }
        },
        9918: function() {},
        22535: function(e) {
            e.exports = {
                stepperMenuList: "StepperMenuList_stepperMenuList__p3Wvy",
                goUp: "StepperMenuList_goUp__h3_s1",
                mainContent: "StepperMenuList_mainContent__LJAHV"
            }
        },
        14905: function(e) {
            e.exports = {
                cart: "Cart_cart__w_xL5",
                slideTop: "Cart_slideTop__n24TJ",
                slideLeft: "Cart_slideLeft__DQkFv"
            }
        },
        38509: function(e) {
            e.exports = {
                scrollbar: "Collections_scrollbar__5hnEt",
                rotating: "Collections_rotating__7lkfs",
                rotate: "Collections_rotate__KqQDC"
            }
        },
        21812: function(e) {
            e.exports = {
                scrollbar: "ERC20Tokens_scrollbar__XLAh3",
                rotating: "ERC20Tokens_rotating__XGMv6",
                rotate: "ERC20Tokens_rotate__rHZM3",
                overlay: "ERC20Tokens_overlay__xUUmG",
                erc20Tokens: "ERC20Tokens_erc20Tokens__V_kPo",
                zoom: "ERC20Tokens_zoom__yqYZU"
            }
        },
        65746: function(e) {
            e.exports = {
                scrollbar: "Favourites_scrollbar__vokzj",
                rotating: "Favourites_rotating__hR7dQ",
                rotate: "Favourites_rotate__6ie_i",
                disabled: "Favourites_disabled__Sy97I",
                starContainer: "Favourites_starContainer__hcE2Y",
                ulContainer: "Favourites_ulContainer__DhRX5",
                use: "Favourites_use__0r0SJ",
                username: "Favourites_username__2LLNh"
            }
        },
        34102: function(e) {
            e.exports = {
                corner: "PageOne_corner__CvrV3",
                bgFormLeft: "PageOne_bgFormLeft__dgX_s"
            }
        },
        93329: function(e) {
            e.exports = {
                sidebar: "PageThree_sidebar__m5eE5",
                slideLeft: "PageThree_slideLeft__LKXDG"
            }
        },
        95734: function(e) {
            e.exports = {
                sidebar: "PageTwo_sidebar__ak3pT",
                slideLeft: "PageTwo_slideLeft__H9EVe"
            }
        },
        58018: function(e) {
            e.exports = {
                overlay: "PostModal_overlay__qUEWX",
                postModal: "PostModal_postModal__A6EtB",
                zoom: "PostModal_zoom__jx_Gp",
                fullSection: "PostModal_fullSection__8DpRr",
                mainSection: "PostModal_mainSection__0Mem3"
            }
        }
    }
]);