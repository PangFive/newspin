"use strict";
(globalThis["webpackChunkwheel_of_names_quasar"] = globalThis["webpackChunkwheel_of_names_quasar"] || []).push([[6129], {
    8647: (e, l, a) => {
        a.r(l),
        a.d(l, {
            default: () => ro
        });
        a(239),
        a(4702);
        var t = a(1758)
          , o = a(8734)
          , n = a(9104)
          , s = a(8790)
          , i = a(6980)
          , u = a(455)
          , c = a(4907)
          , r = a(7387)
          , d = a(6583)
          , v = a(8648)
          , h = a(1895)
          , p = a(884);
        const f = {
            __name: "LanguagePicker",
            emits: ["open-languages"],
            setup(e, {emit: l}) {
                const {locale: a} = (0,
                r.s9)()
                  , o = l
                  , n = (0,
                t.EW)(( () => p.tr().find((e => e.name == a.value))?.humanName));
                return (e, l) => {
                    const a = (0,
                    t.g2)("q-btn");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(a, {
                        stretch: "",
                        flat: "",
                        "no-caps": "",
                        icon: "fas fa-globe",
                        label: n.value,
                        "aria-label": "Language",
                        onClick: l[0] || (l[0] = e => o("open-languages"))
                    }, null, 8, ["label"])
                }
            }
        };
        var g = a(6384)
          , m = a(8582)
          , b = a.n(m);
        const k = f
          , w = k;
        b()(f, "components", {
            QBtn: g.A
        });
        const _ = {
            class: "toolbar"
        }
          , y = {
            __name: "AppToolbar",
            emits: ["reset-wheel", "open-wheel", "save-wheel", "share-wheel", "customize-wheel", "link-sheet", "open-account-dialog", "open-languages"],
            setup(e, {emit: l}) {
                const a = (0,
                i.Pj)()
                  , d = (0,
                u.rd)()
                  , {t: v, locale: p} = (0,
                r.s9)()
                  , f = (0,
                c.A)()
                  , g = l
                  , m = f.platform.is.capacitor ? "Wheel of Names" : "wheelofnames.com"
                  , b = (0,
                t.EW)(( () => "/" + (0,
                h.ek)(p.value)))
                  , k = (0,
                t.EW)(( () => f.fullscreen.isActive))
                  , y = (0,
                t.EW)(( () => a.getters.wheelIsBusy))
                  , F = (0,
                t.EW)(( () => a.getters.sheetLinked))
                  , W = (0,
                t.EW)(( () => !k.value && !F.value))
                  , R = (0,
                t.EW)(( () => !F.value))
                  , L = (0,
                t.EW)(( () => !k.value))
                  , A = (0,
                t.EW)(( () => !k.value))
                  , C = (0,
                t.EW)(( () => !k.value))
                  , q = (0,
                t.EW)(( () => !k.value))
                  , S = (0,
                t.EW)(( () => !k.value && F.value))
                  , x = (0,
                t.EW)(( () => !k.value))
                  , Q = (0,
                t.EW)(( () => !k.value));
                function D() {
                    f.fullscreen.isActive ? (0,
                    h.sx)("Wheel", "ExitFullscreen") : (0,
                    h.sx)("Wheel", "EnterFullscreen"),
                    f.fullscreen.toggle()
                }
                function V() {
                    f.dark.toggle(),
                    f.dark.isActive ? (0,
                    h.sx)("Wheel", "EnterDarkMode") : (0,
                    h.sx)("Wheel", "EnterLightMode"),
                    a.commit("setDarkMode", f.dark.isActive)
                }
                function E() {
                    const e = a.getters.version
                      , l = (0,
                    h.HK)(navigator.userAgent, e);
                    window.open(l, "_new")
                }
                function K(e) {
                    g("open-wheel")
                }
                function X(e) {
                    g("save-wheel")
                }
                function I(e) {
                    g("reset-wheel")
                }
                return (e, l) => {
                    const i = (0,
                    t.g2)("q-avatar")
                      , u = (0,
                    t.g2)("q-toolbar-title")
                      , c = (0,
                    t.g2)("q-btn")
                      , r = (0,
                    t.g2)("q-space")
                      , h = (0,
                    t.g2)("q-tooltip")
                      , p = (0,
                    t.g2)("q-icon")
                      , f = (0,
                    t.g2)("q-item-section")
                      , F = (0,
                    t.g2)("q-item-label")
                      , T = (0,
                    t.g2)("q-item")
                      , U = (0,
                    t.g2)("q-separator")
                      , P = (0,
                    t.g2)("q-list")
                      , j = (0,
                    t.g2)("q-btn-dropdown")
                      , M = (0,
                    t.g2)("q-menu")
                      , B = (0,
                    t.g2)("q-toolbar")
                      , O = (0,
                    t.gN)("close-popup");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(B, {
                        class: "q-px-none"
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            onClick: l[0] || (l[0] = e => (0,
                            o.R1)(d).push(b.value))
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(u, {
                                class: "row no-wrap items-center"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, {
                                    class: "desktop",
                                    style: {
                                        "margin-right": "8px"
                                    }
                                }, {
                                    default: (0,
                                    t.k6)(( () => l[27] || (l[27] = [(0,
                                    t.Lk)("img", {
                                        width: "38",
                                        height: "38",
                                        src: "/images/logo-dark-background-38.png"
                                    }, null, -1)]))),
                                    _: 1
                                }), (0,
                                t.Lk)("span", null, (0,
                                s.v_)((0,
                                o.R1)(m)), 1)])),
                                _: 1
                            })])),
                            _: 1
                        }), (0,
                        t.bF)(r), (0,
                        t.Lk)("div", _, [(0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            icon: "fas fa-palette",
                            label: (0,
                            o.R1)(v)("common.Customize"),
                            "aria-label": "Customize",
                            onClick: l[1] || (l[1] = e => g("customize-wheel"))
                        }, null, 8, ["disable", "label"]), [[n.aG, q.value]]), (0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            icon: "fas fa-file",
                            label: (0,
                            o.R1)(v)("toolbar.New"),
                            "aria-label": "New",
                            onClick: I
                        }, null, 8, ["disable", "label"]), [[n.aG, W.value]]), (0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            icon: "fa fa-folder-open",
                            label: k.value ? "" : (0,
                            o.R1)(v)("common.Open"),
                            "aria-label": "Open",
                            onClick: K
                        }, {
                            default: (0,
                            t.k6)(( () => [k.value ? ((0,
                            t.uX)(),
                            (0,
                            t.Wv)(h, {
                                key: 0
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.eW)((0,
                                s.v_)((0,
                                o.R1)(v)("common.Open")), 1)])),
                                _: 1
                            })) : (0,
                            t.Q3)("", !0)])),
                            _: 1
                        }, 8, ["disable", "label"]), [[n.aG, R.value]]), (0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value || (0,
                            o.R1)(a).getters.readOnlyMode,
                            icon: "fa fa-save",
                            label: (0,
                            o.R1)(v)("common.Save"),
                            "aria-label": "Save",
                            onClick: X
                        }, null, 8, ["disable", "label"]), [[n.aG, L.value]]), (0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value || (0,
                            o.R1)(a).getters.readOnlyMode,
                            icon: "fa fa-share-alt",
                            label: (0,
                            o.R1)(v)("toolbar.Share"),
                            "aria-label": "Share",
                            onClick: l[2] || (l[2] = e => g("share-wheel"))
                        }, null, 8, ["disable", "label"]), [[n.aG, A.value]]), (0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            icon: "fa fa-search",
                            label: (0,
                            o.R1)(v)("toolbar.Gallery"),
                            "aria-label": "Gallery",
                            onClick: l[3] || (l[3] = e => (0,
                            o.R1)(d).push("/gallery"))
                        }, null, 8, ["disable", "label"]), [[n.aG, C.value]]), (0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            "aria-label": "Fullscreen",
                            onClick: D,
                            icon: k.value ? "fa fa-compress" : "fa fa-expand"
                        }, {
                            default: (0,
                            t.k6)(( () => [k.value ? ((0,
                            t.uX)(),
                            (0,
                            t.Wv)(h, {
                                key: 0
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.eW)((0,
                                s.v_)((0,
                                o.R1)(v)("toolbar.Exit fullscreen")), 1)])),
                                _: 1
                            })) : (0,
                            t.Q3)("", !0), k.value ? (0,
                            t.Q3)("", !0) : ((0,
                            t.uX)(),
                            (0,
                            t.Wv)(h, {
                                key: 1
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.eW)((0,
                                s.v_)((0,
                                o.R1)(v)("toolbar.Fullscreen")), 1)])),
                                _: 1
                            }))])),
                            _: 1
                        }, 8, ["disable", "icon"]), (0,
                        t.bo)((0,
                        t.bF)(c, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            icon: "fa fa-unlink",
                            label: (0,
                            o.R1)(v)("toolbar.Unlink Google Spreadsheet"),
                            "aria-label": "Unlink Google Spreadsheet",
                            onClick: l[4] || (l[4] = e => (0,
                            o.R1)(a).commit("unlinkSheet"))
                        }, null, 8, ["disable", "label"]), [[n.aG, S.value]]), (0,
                        t.bo)((0,
                        t.bF)(j, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: y.value,
                            "aria-label": "More",
                            label: (0,
                            o.R1)(v)("toolbar.More")
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(P, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bo)(((0,
                                t.uX)(),
                                (0,
                                t.Wv)(T, {
                                    clickable: "",
                                    onClick: E
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fa fa-comment"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Feedback")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[O]]), (0,
                                t.bF)(T, {
                                    clickable: "",
                                    onClick: l[5] || (l[5] = e => (0,
                                    o.R1)(d).push("/faq"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fa fa-question-circle"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.FAQ")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.bF)(T, {
                                    clickable: "",
                                    onClick: l[6] || (l[6] = e => (0,
                                    o.R1)(d).push("/user-reviews-and-tutorials"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fab fa-youtube"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.User reviews and tutorials")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.bF)(T, {
                                    clickable: "",
                                    onClick: l[7] || (l[7] = e => (0,
                                    o.R1)(d).push("/how-to-use-in-the-classroom"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fas fa-chalkboard-teacher"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Use this in the classroom")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.bF)(T, {
                                    clickable: "",
                                    onClick: l[8] || (l[8] = e => (0,
                                    o.R1)(d).push("/changelog"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fas fa-list-alt"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Changelog")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.bF)(T, {
                                    clickable: "",
                                    onClick: l[9] || (l[9] = e => (0,
                                    o.R1)(d).push("/privacy-policy"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fas fa-user-secret"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Privacy policy")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.bF)(T, {
                                    clickable: "",
                                    onClick: l[10] || (l[10] = e => (0,
                                    o.R1)(d).push("/faq/terms"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fas fa-balance-scale"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("appInfo.Terms of service")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.bF)(U), (0,
                                t.bo)(((0,
                                t.uX)(),
                                (0,
                                t.Wv)(T, {
                                    clickable: "",
                                    onClick: l[11] || (l[11] = e => g("link-sheet"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fa fa-link"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Link Google Spreadsheet")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[O]]), (0,
                                t.bo)(((0,
                                t.uX)(),
                                (0,
                                t.Wv)(T, {
                                    clickable: "",
                                    onClick: V
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fas fa-moon"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.eW)((0,
                                        s.v_)((0,
                                        o.R1)(v)("toolbar.Dark mode")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[O]]), (0,
                                t.bF)(U), (0,
                                t.bo)(((0,
                                t.uX)(),
                                (0,
                                t.Wv)(T, {
                                    clickable: "",
                                    onClick: l[12] || (l[12] = e => g("open-account-dialog"))
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(f, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(p, {
                                            name: "fas fa-user-alt"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(f, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(F, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.My account")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[O]])])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["disable", "label"]), [[n.aG, x.value]]), (0,
                        t.bo)((0,
                        t.bF)(w, {
                            disable: y.value,
                            onOpenLanguages: l[13] || (l[13] = e => g("open-languages"))
                        }, null, 8, ["disable"]), [[n.aG, Q.value]])]), (0,
                        t.bF)(c, {
                            class: "hamburger",
                            round: "",
                            unelevated: "",
                            color: "primary",
                            icon: "fas fa-bars"
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(M, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(P, null, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[14] || (l[14] = e => g("customize-wheel"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-palette"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Customize")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[15] || (l[15] = e => g("reset-wheel"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-file"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.New")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[16] || (l[16] = e => g("open-wheel"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-folder-open"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Open")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        disable: (0,
                                        o.R1)(a).getters.readOnlyMode,
                                        onClick: l[17] || (l[17] = e => g("save-wheel"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-save"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Save")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }, 8, ["disable"])), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        disable: (0,
                                        o.R1)(a).getters.readOnlyMode,
                                        onClick: l[18] || (l[18] = e => g("share-wheel"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-share-alt"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Share")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }, 8, ["disable"])), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[19] || (l[19] = e => (0,
                                        o.R1)(d).push("/gallery"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-search"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Gallery")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: D
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: k.value ? "fa fa-compress" : "fa fa-expand"
                                            }, null, 8, ["name"])])),
                                            _: 1
                                        }), k.value ? (0,
                                        t.Q3)("", !0) : ((0,
                                        t.uX)(),
                                        (0,
                                        t.Wv)(f, {
                                            key: 0
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Fullscreen")), 1)])),
                                            _: 1
                                        })), k.value ? ((0,
                                        t.uX)(),
                                        (0,
                                        t.Wv)(f, {
                                            key: 1
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Exit fullscreen")), 1)])),
                                            _: 1
                                        })) : (0,
                                        t.Q3)("", !0)])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: V
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-moon"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Dark mode")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bF)(T, {
                                        clickable: "",
                                        onClick: l[20] || (l[20] = e => g("open-languages"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-globe"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Language")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: E
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-comment"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.Feedback")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[21] || (l[21] = e => (0,
                                        o.R1)(d).push("/faq"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-question-circle"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("toolbar.FAQ")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[22] || (l[22] = e => (0,
                                        o.R1)(d).push("/user-reviews-and-tutorials"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fab fa-youtube"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(F, null, {
                                                default: (0,
                                                t.k6)(( () => [(0,
                                                t.eW)((0,
                                                s.v_)((0,
                                                o.R1)(v)("toolbar.User reviews and tutorials")), 1)])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[23] || (l[23] = e => (0,
                                        o.R1)(d).push("/how-to-use-in-the-classroom"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-chalkboard-teacher"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(F, null, {
                                                default: (0,
                                                t.k6)(( () => [(0,
                                                t.eW)((0,
                                                s.v_)((0,
                                                o.R1)(v)("common.Use this in the classroom")), 1)])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]]), (0,
                                    t.bF)(T, {
                                        clickable: "",
                                        onClick: l[24] || (l[24] = e => (0,
                                        o.R1)(d).push("/privacy-policy"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-user-secret"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("common.Privacy policy")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bF)(T, {
                                        clickable: "",
                                        onClick: l[25] || (l[25] = e => (0,
                                        o.R1)(d).push("/faq/terms"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fas fa-balance-scale"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)((0,
                                            o.R1)(v)("appInfo.Terms of service")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.bo)(((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(T, {
                                        clickable: "",
                                        onClick: l[26] || (l[26] = e => g("link-sheet"))
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(f, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(p, {
                                                name: "fa fa-link"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.bF)(f, null, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(F, null, {
                                                default: (0,
                                                t.k6)(( () => [(0,
                                                t.eW)((0,
                                                s.v_)((0,
                                                o.R1)(v)("common.Link Google Spreadsheet")), 1)])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[O]])])),
                                    _: 1
                                })])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    })
                }
            }
        };
        var F = a(2807)
          , W = a(6914)
          , R = a(9150)
          , L = a(3952)
          , A = a(3676)
          , C = a(7410)
          , q = a(1207)
          , S = a(3999)
          , x = a(124)
          , Q = a(5173)
          , D = a(492)
          , V = a(3796)
          , E = a(386)
          , K = a(4436)
          , X = a(8672);
        const I = (0,
        F.A)(y, [["__scopeId", "data-v-3fc0f3a0"]])
          , T = I;
        b()(y, "components", {
            QToolbar: W.A,
            QBtn: g.A,
            QToolbarTitle: R.A,
            QAvatar: L.A,
            QSpace: A.A,
            QTooltip: C.A,
            QBtnDropdown: q.A,
            QList: S.A,
            QItem: x.A,
            QItemSection: Q.A,
            QIcon: D.A,
            QItemLabel: V.A,
            QSeparator: E.A,
            QMenu: K.A
        }),
        b()(y, "directives", {
            ClosePopup: X.A
        });
        var U = a(2938)
          , P = a(6393)
          , j = a(1192)
          , M = function(e, l, a, t) {
            function o(e) {
                return e instanceof a ? e : new a((function(l) {
                    l(e)
                }
                ))
            }
            return new (a || (a = Promise))((function(a, n) {
                function s(e) {
                    try {
                        u(t.next(e))
                    } catch (l) {
                        n(l)
                    }
                }
                function i(e) {
                    try {
                        u(t["throw"](e))
                    } catch (l) {
                        n(l)
                    }
                }
                function u(e) {
                    e.done ? a(e.value) : o(e.value).then(s, i)
                }
                u((t = t.apply(e, l || [])).next())
            }
            ))
        };
        const B = {
            class: "text-h6"
        }
          , O = (0,
        t.pM)({
            __name: "LoginDialog",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , {t: n} = (0,
                r.s9)()
                  , u = (0,
                o.KR)()
                  , c = (0,
                o.KR)(!1);
                let d;
                function v(e) {
                    return M(this, void 0, void 0, (function*() {
                        if (!(0,
                        h.Hd)()) {
                            u.value = e,
                            c.value = !0;
                            try {
                                (0,
                                h.sx)("Wheel", "LoginAttempt", ""),
                                p()
                            } catch (l) {
                                c.value = !1,
                                j.Qg(n, l),
                                (0,
                                h.sx)("Wheel", "LoginFailure", null === l || void 0 === l ? void 0 : l.toString())
                            }
                            return new Promise((e => d = e))
                        }
                    }
                    ))
                }
                function p() {
                    return M(this, void 0, void 0, (function*() {
                        yield a.dispatch("loginWithUi", "auth-container"),
                        (0,
                        h.sx)("Wheel", "LoginSuccess", ""),
                        c.value = !1,
                        d("login")
                    }
                    ))
                }
                function f() {
                    c.value = !1,
                    d("cancel")
                }
                function g() {
                    c.value = !1,
                    d("switch")
                }
                return l({
                    askUserToLogIn: v
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-btn")
                      , r = (0,
                    t.g2)("q-card-actions")
                      , d = (0,
                    t.g2)("q-card")
                      , v = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(v, {
                        modelValue: c.value,
                        "onUpdate:modelValue": l[3] || (l[3] = e => c.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(d, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", B, [l[4] || (l[4] = (0,
                                t.Lk)("i", {
                                    class: "fas fa-user"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(n)("common.Log in")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(a, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.eW)((0,
                                s.v_)((0,
                                o.R1)(n)("common.Please choose your sign-in method")), 1)])),
                                _: 1
                            }), (0,
                            t.bF)(a, null, {
                                default: (0,
                                t.k6)(( () => l[5] || (l[5] = [(0,
                                t.Lk)("div", {
                                    id: "auth-container"
                                }, null, -1)]))),
                                _: 1
                            }), (0,
                            t.bF)(r, {
                                align: u.value ? "between" : "right"
                            }, {
                                default: (0,
                                t.k6)(( () => ["save" === u.value ? ((0,
                                t.uX)(),
                                (0,
                                t.Wv)(i, {
                                    key: 0,
                                    "no-caps": "",
                                    unelevated: "",
                                    label: (0,
                                    o.R1)(n)("savedialog.Save to a local file instead"),
                                    onClick: l[0] || (l[0] = e => g())
                                }, null, 8, ["label"])) : (0,
                                t.Q3)("", !0), "open" === u.value ? ((0,
                                t.uX)(),
                                (0,
                                t.Wv)(i, {
                                    key: 1,
                                    "no-caps": "",
                                    unelevated: "",
                                    label: (0,
                                    o.R1)(n)("opendialog.Open a local file instead"),
                                    onClick: l[1] || (l[1] = e => g())
                                }, null, 8, ["label"])) : (0,
                                t.Q3)("", !0), (0,
                                t.bF)(i, {
                                    "no-caps": "",
                                    unelevated: "",
                                    label: (0,
                                    o.R1)(n)("common.Cancel"),
                                    onClick: l[2] || (l[2] = e => f())
                                }, null, 8, ["label"])])),
                                _: 1
                            }, 8, ["align"])])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        });
        var G = a(1797)
          , z = a(3316)
          , N = a(4189)
          , H = a(2669);
        const J = O
          , Y = J;
        b()(O, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        const $ = ["src"]
          , Z = {
            __name: "ProfileDropdown",
            emits: ["log-out"],
            setup(e, {emit: l}) {
                const a = (0,
                i.Pj)()
                  , n = (0,
                u.rd)()
                  , {t: d} = (0,
                r.s9)()
                  , v = (0,
                c.A)()
                  , p = l;
                function f() {
                    a.dispatch("logOut"),
                    p("log-out")
                }
                async function g() {
                    const e = d("profiledropdown.Are you sure you want to delete your account");
                    if (await j.lJ(d, e)) {
                        v.loading.show();
                        try {
                            await a.dispatch("deleteAccount"),
                            a.dispatch("resetWheel");
                            const e = d("profiledropdown.Your account and your saved wheels have been deleted");
                            j.Ds(e),
                            p("log-out")
                        } catch (l) {
                            h.to("DeleteAccountError", l),
                            j.Qg(d, l)
                        }
                        v.loading.hide()
                    }
                }
                return (e, l) => {
                    const i = (0,
                    t.g2)("q-item-section")
                      , u = (0,
                    t.g2)("q-item")
                      , c = (0,
                    t.g2)("q-separator")
                      , r = (0,
                    t.g2)("q-item-label")
                      , v = (0,
                    t.g2)("q-list")
                      , h = (0,
                    t.g2)("q-btn-dropdown")
                      , p = (0,
                    t.gN)("close-popup");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(h, null, {
                        label: (0,
                        t.k6)(( () => [(0,
                        t.Lk)("img", {
                            style: {
                                "border-radius": "50%",
                                height: "30px"
                            },
                            src: (0,
                            o.R1)(a).getters.userPhotoUrl
                        }, null, 8, $)])),
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(v, null, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(u, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, null, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.eW)((0,
                                    s.v_)((0,
                                    o.R1)(d)("profiledropdown.Signed in as", {
                                        name: (0,
                                        o.R1)(a).getters.userDisplayName
                                    })), 1)])),
                                    _: 1
                                })])),
                                _: 1
                            }), (0,
                            t.bF)(c), (0,
                            t.bo)(((0,
                            t.uX)(),
                            (0,
                            t.Wv)(u, {
                                clickable: "",
                                onClick: l[0] || (l[0] = e => f())
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, null, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(r, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.eW)((0,
                                        s.v_)((0,
                                        o.R1)(d)("profiledropdown.Sign out")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            })), [[p]]), (0,
                            t.bF)(u, {
                                clickable: "",
                                onClick: l[1] || (l[1] = e => (0,
                                o.R1)(n).push("/export"))
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, null, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(r, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.eW)((0,
                                        s.v_)((0,
                                        o.R1)(d)("profiledropdown.Export my data")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }), (0,
                            t.bo)(((0,
                            t.uX)(),
                            (0,
                            t.Wv)(u, {
                                clickable: "",
                                onClick: l[2] || (l[2] = e => g())
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, null, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.bF)(r, null, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.eW)((0,
                                        s.v_)((0,
                                        o.R1)(d)("profiledropdown.Delete my account")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            })), [[p]])])),
                            _: 1
                        })])),
                        _: 1
                    })
                }
            }
        }
          , ee = Z
          , le = ee;
        b()(Z, "components", {
            QBtnDropdown: q.A,
            QList: S.A,
            QItem: x.A,
            QItemSection: Q.A,
            QSeparator: E.A,
            QItemLabel: V.A
        }),
        b()(Z, "directives", {
            ClosePopup: X.A
        });
        const ae = {
            class: "text-h6"
        }
          , te = {
            key: 0
        }
          , oe = {
            key: 1
        }
          , ne = {
            style: {
                height: "50vh",
                overflow: "auto"
            }
        }
          , se = {
            __name: "OpenDialog",
            emits: ["reset-wheel-rotation", "reset-address-bar"],
            setup(e, {expose: l, emit: a}) {
                const u = (0,
                i.Pj)()
                  , d = (0,
                c.A)()
                  , {t: v} = (0,
                r.s9)()
                  , p = a
                  , f = (0,
                o.KR)(!1)
                  , g = (0,
                o.KR)([])
                  , m = (0,
                t.EW)(( () => 0 == g.value.length))
                  , b = (0,
                o.KR)("")
                  , k = (0,
                t.EW)(( () => b.value.toLowerCase()))
                  , w = (0,
                t.EW)(( () => g.value.filter((e => !b.value || e.config.title.toLowerCase().includes(k.value)))));
                let _;
                async function y() {
                    return (0,
                    h.sx)("Wheel", "ShowOpenDialog"),
                    await R(),
                    b.value = "",
                    f.value = !0,
                    new Promise((e => _ = e))
                }
                async function F(e) {
                    f.value = !1,
                    _("open");
                    const l = await u.dispatch("loadSavedWheel", e);
                    u.commit("setWheelConfig", l.wheelConfig),
                    u.commit("clearWinners"),
                    p("reset-wheel-rotation"),
                    p("reset-address-bar"),
                    (0,
                    h.sx)("Wheel", "OpenWheel")
                }
                async function W(e, l) {
                    const a = v("opendialog.Are you sure", {
                        wheelTitle: (0,
                        h.ZD)(l)
                    });
                    if (await j.lJ(v, a))
                        try {
                            (0,
                            h.sx)("Wheel", "DeleteWheel"),
                            g.value = g.value.filter((l => l.path != e)),
                            await u.dispatch("deleteWheel", e)
                        } catch (t) {
                            (0,
                            h.to)("DeleteWheelError", t),
                            j.Qg(v, t)
                        }
                }
                async function R() {
                    try {
                        d.loading.show(),
                        g.value = await u.dispatch("getSavedWheels", {
                            fields: "path,config.title"
                        })
                    } catch (e) {
                        j.Qg(v, e),
                        (0,
                        h.to)("LoadSavedWheelsError (Open dialog)", e)
                    } finally {
                        d.loading.hide()
                    }
                }
                function L() {
                    f.value = !1,
                    _("cancel")
                }
                function A() {
                    f.value = !1,
                    _("switch")
                }
                return l({
                    show: y
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-space")
                      , i = (0,
                    t.g2)("q-card-section")
                      , u = (0,
                    t.g2)("q-input")
                      , c = (0,
                    t.g2)("q-btn")
                      , r = (0,
                    t.g2)("q-item-section")
                      , d = (0,
                    t.g2)("q-item")
                      , h = (0,
                    t.g2)("q-card-actions")
                      , p = (0,
                    t.g2)("q-card")
                      , k = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(k, {
                        modelValue: f.value,
                        "onUpdate:modelValue": l[3] || (l[3] = e => f.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(p, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(i, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", ae, [l[4] || (l[4] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-folder-open"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(v)("opendialog.Open wheel")), 1)]), (0,
                                t.bF)(a), (0,
                                t.bF)(le, {
                                    onLogOut: l[0] || (l[0] = e => L())
                                })])),
                                _: 1
                            }), (0,
                            t.bF)(i, null, {
                                default: (0,
                                t.k6)(( () => [m.value ? ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", te, (0,
                                s.v_)((0,
                                o.R1)(v)("opendialog.No wheels found")), 1)) : ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", oe, [g.value.length > 5 ? ((0,
                                t.uX)(),
                                (0,
                                t.Wv)(u, {
                                    key: 0,
                                    dense: "",
                                    filled: "",
                                    modelValue: b.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e => b.value = e),
                                    placeholder: (0,
                                    o.R1)(v)("common.Search")
                                }, null, 8, ["modelValue", "placeholder"])) : (0,
                                t.Q3)("", !0), (0,
                                t.Lk)("div", ne, [(0,
                                t.bF)(n.F, {
                                    name: "animated-list",
                                    tag: "q-list"
                                }, {
                                    default: (0,
                                    t.k6)(( () => [((0,
                                    t.uX)(!0),
                                    (0,
                                    t.CE)(t.FK, null, (0,
                                    t.pI)(w.value, (e => ((0,
                                    t.uX)(),
                                    (0,
                                    t.Wv)(d, {
                                        key: e.config.title,
                                        class: "q-px-none"
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [(0,
                                        t.bF)(r, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(c, {
                                                flat: "",
                                                color: "primary",
                                                icon: "fa fa-folder-open",
                                                onClick: l => F(e.path)
                                            }, null, 8, ["onClick"])])),
                                            _: 2
                                        }, 1024), (0,
                                        t.bF)(r, {
                                            onClick: l => F(e.path),
                                            style: {
                                                cursor: "pointer"
                                            }
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.eW)((0,
                                            s.v_)(e.config.title), 1)])),
                                            _: 2
                                        }, 1032, ["onClick"]), (0,
                                        t.bF)(r, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.k6)(( () => [(0,
                                            t.bF)(c, {
                                                icon: "far fa-trash-alt",
                                                flat: "",
                                                color: "negative",
                                                onClick: l => W(e.path, e.config.title)
                                            }, null, 8, ["onClick"])])),
                                            _: 2
                                        }, 1024)])),
                                        _: 2
                                    }, 1024)))), 128))])),
                                    _: 1
                                })])]))])),
                                _: 1
                            }), (0,
                            t.bF)(h, {
                                align: "between"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(v)("opendialog.Open a local file instead"),
                                    onClick: A
                                }, null, 8, ["label"]), (0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(v)("common.Cancel"),
                                    onClick: l[2] || (l[2] = e => L())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        };
        var ie = a(7837);
        const ue = se
          , ce = ue;
        b()(se, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QSpace: A.A,
            QInput: ie.A,
            QList: S.A,
            QItem: x.A,
            QItemSection: Q.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        const re = {
            class: "text-h6"
        }
          , de = {
            class: "row q-gutter-md items-center"
        }
          , ve = {
            class: "col-3"
        }
          , he = {
            class: "col"
        }
          , pe = {
            class: "row q-gutter-md items-center"
        }
          , fe = {
            class: "col-3"
        }
          , ge = {
            class: "col"
        }
          , me = {
            __name: "SaveCloudDialog",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , u = (0,
                c.A)()
                  , {t: d} = (0,
                r.s9)()
                  , v = (0,
                o.KR)(!1)
                  , p = (0,
                o.KR)(null)
                  , f = (0,
                o.KR)([])
                  , g = (0,
                t.EW)(( () => f.value.map((e => ({
                    value: e.config.title,
                    label: e.config.title
                })))))
                  , m = (0,
                t.EW)(( () => a.getters.wheelConfig))
                  , b = (0,
                o.KR)("")
                  , k = (0,
                o.KR)("")
                  , w = (0,
                o.KR)("")
                  , _ = (0,
                t.EW)(( () => w.value != b.value && f.value.some((e => e.config.title == b.value))))
                  , y = (0,
                o.KR)(!1);
                let F;
                async function W() {
                    return (0,
                    h.sx)("Wheel", "ShowSaveDialog"),
                    A(),
                    b.value = m.value.title,
                    w.value = m.value.title,
                    k.value = "",
                    v.value = !0,
                    new Promise((e => F = e))
                }
                async function R() {
                    if (b.value)
                        if (_.value) {
                            const e = d("savedialog.You are about to overwrite");
                            await j.lJ(d, e) && L()
                        } else
                            L()
                }
                async function L() {
                    u.loading.show();
                    try {
                        (0,
                        h.sx)("Wheel", "SaveWheel"),
                        a.commit("setWheelTitle", b.value),
                        await a.dispatch("saveWheel", m.value),
                        u.loading.hide();
                        const e = d("savedialog.Wheel saved successfully", {
                            wheelTitle: (0,
                            h.oF)(b.value)
                        });
                        j.Ds(e)
                    } catch (e) {
                        u.loading.hide(),
                        j.Qg(d, e),
                        (0,
                        h.to)("SaveWheelError", e)
                    }
                    v.value = !1,
                    F("save")
                }
                async function A() {
                    try {
                        y.value = !0,
                        f.value = await a.dispatch("getSavedWheels", {
                            fields: "config.title"
                        })
                    } catch (e) {
                        j.Qg(d, e),
                        (0,
                        h.to)("LoadSavedWheelsError (Save dialog)", e)
                    } finally {
                        y.value = !1
                    }
                }
                function C() {
                    v.value = !1,
                    F("cancel")
                }
                function q() {
                    v.value = !1,
                    F("switch")
                }
                return (0,
                t.wB)(( () => k.value), (e => {
                    b.value = e.value
                }
                )),
                l({
                    show: W
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-space")
                      , i = (0,
                    t.g2)("q-card-section")
                      , u = (0,
                    t.g2)("q-input")
                      , c = (0,
                    t.g2)("q-select")
                      , r = (0,
                    t.g2)("q-btn")
                      , h = (0,
                    t.g2)("q-card-actions")
                      , f = (0,
                    t.g2)("q-card")
                      , m = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(m, {
                        modelValue: v.value,
                        "onUpdate:modelValue": l[5] || (l[5] = e => v.value = e),
                        onShow: l[6] || (l[6] = e => p.value.select())
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(f, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(i, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", re, [l[7] || (l[7] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-save"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(d)("savedialog.Save wheel to the cloud")), 1)]), (0,
                                t.bF)(a), (0,
                                t.bF)(le, {
                                    onLogOut: l[0] || (l[0] = e => C())
                                })])),
                                _: 1
                            }), (0,
                            t.bF)(i, {
                                class: "q-gutter-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", de, [(0,
                                t.Lk)("div", ve, (0,
                                s.v_)((0,
                                o.R1)(d)("savedialog.Save as")), 1), (0,
                                t.Lk)("div", he, [(0,
                                t.bF)(u, {
                                    modelValue: b.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e => b.value = e),
                                    filled: "",
                                    dense: "",
                                    onKeyup: l[2] || (l[2] = (0,
                                    n.jR)((e => R()), ["native", "enter"])),
                                    ref_key: "saveAsField",
                                    ref: p,
                                    required: "",
                                    maxlength: "50"
                                }, null, 8, ["modelValue"])])]), (0,
                                t.Lk)("div", pe, [(0,
                                t.Lk)("div", fe, (0,
                                s.v_)((0,
                                o.R1)(d)("savedialog.Your existing wheels")), 1), (0,
                                t.Lk)("div", ge, [(0,
                                t.bF)(c, {
                                    filled: "",
                                    dense: "",
                                    label: (0,
                                    o.R1)(d)("savedialog.Select a wheel"),
                                    modelValue: k.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e => k.value = e),
                                    options: g.value,
                                    "map-options": "",
                                    loading: y.value
                                }, null, 8, ["label", "modelValue", "options", "loading"])])]), (0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(d)("savedialog.You will always be able to access")), 1), (0,
                                t.bF)(r, {
                                    outline: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(d)("savedialog.Save to a local file instead"),
                                    onClick: q
                                }, null, 8, ["label"])])),
                                _: 1
                            }), (0,
                            t.bF)(h, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(d)("common.Cancel"),
                                    onClick: l[4] || (l[4] = e => C())
                                }, null, 8, ["label"]), (0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(d)("common.Save"),
                                    onClick: R
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        };
        var be = a(2606);
        const ke = me
          , we = ke;
        b()(me, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QSpace: A.A,
            QInput: ie.A,
            QSelect: be.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        var _e = function(e, l, a, t) {
            function o(e) {
                return e instanceof a ? e : new a((function(l) {
                    l(e)
                }
                ))
            }
            return new (a || (a = Promise))((function(a, n) {
                function s(e) {
                    try {
                        u(t.next(e))
                    } catch (l) {
                        n(l)
                    }
                }
                function i(e) {
                    try {
                        u(t["throw"](e))
                    } catch (l) {
                        n(l)
                    }
                }
                function u(e) {
                    e.done ? a(e.value) : o(e.value).then(s, i)
                }
                u((t = t.apply(e, l || [])).next())
            }
            ))
        };
        const ye = {
            class: "text-h6"
        }
          , Fe = {
            class: "row items-center"
        }
          , We = {
            class: "col-shrink q-mr-md q-mb-md"
        }
          , Re = {
            class: "col-12 col-md-grow q-mb-md"
        }
          , Le = (0,
        t.pM)({
            __name: "SaveLocalDialog",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , {t: u} = (0,
                r.s9)()
                  , d = (0,
                c.A)()
                  , p = (0,
                o.KR)(!1)
                  , f = (0,
                o.KR)(null)
                  , g = (0,
                t.EW)(( () => a.getters.wheelConfig))
                  , m = (0,
                o.KR)("")
                  , b = d.platform.is.ios ? ".json" : ".wheel";
                let k;
                function w() {
                    return _e(this, void 0, void 0, (function*() {
                        return (0,
                        h.sx)("Wheel", "ShowSaveLocalDialog"),
                        m.value = g.value.title,
                        p.value = !0,
                        new Promise((e => k = e))
                    }
                    ))
                }
                function _() {
                    return _e(this, void 0, void 0, (function*() {
                        a.commit("setWheelTitle", m.value);
                        try {
                            yield(0,
                            v.Ai)(new Blob([JSON.stringify(g.value.getValues())]), {
                                fileName: `${g.value.title || "Untitled"}${b}`,
                                extensions: [b],
                                mimeTypes: ["application/json"]
                            });
                            const e = u("savedialog.Wheel saved successfully", {
                                wheelTitle: (0,
                                h.oF)(g.value.title)
                            });
                            j.Ds(e)
                        } catch (e) {
                            if (e instanceof DOMException && e.message.includes("abort"))
                                return;
                            (0,
                            h.to)("SaveLocalError", e),
                            j.Qg(u, e)
                        }
                        p.value = !1,
                        k("save")
                    }
                    ))
                }
                function y() {
                    p.value = !1,
                    k("cancel")
                }
                function F() {
                    p.value = !1,
                    k("switch")
                }
                return l({
                    show: w
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-input")
                      , c = (0,
                    t.g2)("q-btn")
                      , r = (0,
                    t.g2)("q-card-actions")
                      , d = (0,
                    t.g2)("q-card")
                      , v = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(v, {
                        modelValue: p.value,
                        "onUpdate:modelValue": l[1] || (l[1] = e => p.value = e),
                        onShow: l[2] || (l[2] = e => f.value.select())
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(d, null, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(a, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", ye, [l[3] || (l[3] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-save"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(u)("savedialog.Save to a local file")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(a, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", Fe, [(0,
                                t.Lk)("div", We, (0,
                                s.v_)((0,
                                o.R1)(u)("savedialog.File name")), 1), (0,
                                t.Lk)("div", Re, [(0,
                                t.bF)(i, {
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => m.value = e),
                                    filled: "",
                                    dense: "",
                                    onKeyup: (0,
                                    n.jR)(_, ["native", "enter"]),
                                    ref_key: "saveAsField",
                                    ref: f,
                                    required: "",
                                    maxlength: "50",
                                    suffix: (0,
                                    o.R1)(b)
                                }, null, 8, ["modelValue", "suffix"])])]), (0,
                                t.bF)(c, {
                                    outline: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(u)("savedialog.Save to the cloud instead"),
                                    onClick: F
                                }, null, 8, ["label"])])),
                                _: 1
                            }), (0,
                            t.bF)(r, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(u)("common.Cancel"),
                                    onClick: y
                                }, null, 8, ["label"]), (0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(u)("common.Save"),
                                    onClick: _
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        })
          , Ae = Le
          , Ce = Ae;
        b()(Le, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QInput: ie.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        const qe = {
            class: "text-h6"
        }
          , Se = {
            __name: "ShareDialogInfo",
            setup(e, {expose: l}) {
                (0,
                i.Pj)(),
                (0,
                c.A)();
                const {t: a} = (0,
                r.s9)()
                  , n = (0,
                o.KR)(!1);
                let u, d;
                async function v() {
                    return (0,
                    h.sx)("Wheel", "ShowShareDialog"),
                    n.value = !0,
                    new Promise(( (e, l) => {
                        u = e,
                        d = l
                    }
                    ))
                }
                function p() {
                    u({
                        openMySharedWheels: !0,
                        openShareSettings: !1
                    }),
                    n.value = !1
                }
                function f() {
                    u({
                        openMySharedWheels: !1,
                        openShareSettings: !0
                    }),
                    n.value = !1
                }
                function g() {
                    u({
                        openMySharedWheels: !1,
                        openShareSettings: !1
                    }),
                    n.value = !1
                }
                return l({
                    show: v
                }),
                (e, l) => {
                    const i = (0,
                    t.g2)("q-card-section")
                      , u = (0,
                    t.g2)("router-link")
                      , c = (0,
                    t.g2)("q-btn")
                      , r = (0,
                    t.g2)("q-card-actions")
                      , d = (0,
                    t.g2)("q-card")
                      , v = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(v, {
                        modelValue: n.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e => n.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(d, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(i, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", qe, [l[3] || (l[3] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-share-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(a)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(i, {
                                class: "q-gutter-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(a)("sharedialog.If you continue")), 1), (0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(a)("sharedialog.This link will work for anyone")), 1), (0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(a)("sharedialog.We want this website to be safe place for everyone")), 1), (0,
                                t.Lk)("div", null, [(0,
                                t.bF)(u, {
                                    to: "/faq/terms"
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.eW)((0,
                                    s.v_)((0,
                                    o.R1)(a)("appInfo.Terms of service")), 1)])),
                                    _: 1
                                })]), (0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(a)("sharedialog.See my shared wheels"),
                                    onClick: p
                                }, null, 8, ["label"])])),
                                _: 1
                            }), (0,
                            t.bF)(r, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(a)("common.Cancel"),
                                    onClick: l[0] || (l[0] = e => g())
                                }, null, 8, ["label"]), (0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(a)("common.Continue"),
                                    onClick: l[1] || (l[1] = e => f())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , xe = Se
          , Qe = xe;
        b()(Se, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        var De = a(3276);
        const Ve = {
            class: "text-h6"
        }
          , Ee = {
            key: 0
        }
          , Ke = {
            class: "text-left"
        }
          , Xe = {
            class: "text-left"
        }
          , Ie = {
            class: "text-left created-column"
        }
          , Te = {
            class: "text-right views-column"
        }
          , Ue = {
            class: "break-long-words"
        }
          , Pe = ["href"]
          , je = {
            class: "copy-column"
        }
          , Me = {
            class: "created-column"
        }
          , Be = {
            class: "text-right views-column"
        }
          , Oe = {
            class: "delete-column"
        }
          , Ge = {
            key: 0
        }
          , ze = {
            __name: "ShareDialogMySharedWheels",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , u = (0,
                c.A)()
                  , {t: d, locale: v} = (0,
                r.s9)()
                  , f = (0,
                o.KR)(!1)
                  , g = (0,
                o.KR)([])
                  , m = (0,
                t.EW)(( () => 0 == g.value.length));
                async function b() {
                    (0,
                    h.sx)("Wheel", "ViewSharedWheelsAttempt"),
                    await W(),
                    (0,
                    h.sx)("Wheel", "ViewSharedWheelsSuccess"),
                    f.value = !0
                }
                function k() {
                    f.value = !1
                }
                function w(e) {
                    return location.protocol + "//" + (0,
                    p.Lo)(location.host, v.value, e)
                }
                function _(e) {
                    return (0,
                    p.Lo)(location.host, v.value, e)
                }
                async function y(e) {
                    await navigator.clipboard.writeText(e);
                    const l = d("sharedialog.Link copied to the clipboard");
                    j.Ds(l)
                }
                async function F(e) {
                    const l = d("opendialog.Are you sure", {
                        wheelTitle: (0,
                        h.ZD)(e)
                    });
                    if (await j.lJ(d, l))
                        try {
                            g.value = g.value.filter((l => l.path != e)),
                            await a.dispatch("deleteWheel", e)
                        } catch (t) {
                            (0,
                            h.to)("DeleteSharedWheelError", t),
                            j.Qg(d, t)
                        }
                }
                async function W() {
                    try {
                        u.loading.show(),
                        await a.dispatch("userIsLoggedIn") || await a.dispatch("loginAnonymously"),
                        g.value = await a.dispatch("getSharedWheels", {
                            fields: "path,config.title,created,readCount"
                        })
                    } catch (e) {
                        j.Qg(d, e),
                        (0,
                        h.to)("ViewSharedWheelsError", e)
                    } finally {
                        u.loading.hide()
                    }
                }
                return l({
                    show: b
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-space")
                      , i = (0,
                    t.g2)("q-card-section")
                      , c = (0,
                    t.g2)("q-btn")
                      , r = (0,
                    t.g2)("q-markup-table")
                      , p = (0,
                    t.g2)("q-card-actions")
                      , b = (0,
                    t.g2)("q-card")
                      , W = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(W, {
                        modelValue: f.value,
                        "onUpdate:modelValue": l[1] || (l[1] = e => f.value = e),
                        maximized: (0,
                        o.R1)(u).platform.is.mobile,
                        style: {
                            "max-width": "900px"
                        }
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(b, {
                            style: {
                                width: "900px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(i, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", Ve, [l[2] || (l[2] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-share-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(d)("sharedialog.My shared wheels")), 1)]), (0,
                                t.bF)(a), (0,
                                t.bF)(De.A)])),
                                _: 1
                            }), (0,
                            t.bF)(i, {
                                style: {
                                    "max-height": "75vh",
                                    overflow: "auto"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(r, {
                                    flat: ""
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.Lk)("thead", null, [m.value ? (0,
                                    t.Q3)("", !0) : ((0,
                                    t.uX)(),
                                    (0,
                                    t.CE)("tr", Ee, [(0,
                                    t.Lk)("th", Ke, (0,
                                    s.v_)((0,
                                    o.R1)(d)("common.Wheel title")), 1), (0,
                                    t.Lk)("th", Xe, (0,
                                    s.v_)((0,
                                    o.R1)(d)("sharedialog.Link")), 1), l[3] || (l[3] = (0,
                                    t.Lk)("th", {
                                        class: "copy-column"
                                    }, null, -1)), (0,
                                    t.Lk)("th", Ie, (0,
                                    s.v_)((0,
                                    o.R1)(d)("sharedialog.Created")), 1), (0,
                                    t.Lk)("th", Te, (0,
                                    s.v_)((0,
                                    o.R1)(d)("sharedialog.Visits")), 1), l[4] || (l[4] = (0,
                                    t.Lk)("th", {
                                        class: "delete-column"
                                    }, null, -1))]))]), (0,
                                    t.bF)(n.F, {
                                        name: "animated-list",
                                        tag: "tbody"
                                    }, {
                                        default: (0,
                                        t.k6)(( () => [((0,
                                        t.uX)(!0),
                                        (0,
                                        t.CE)(t.FK, null, (0,
                                        t.pI)(g.value, (e => ((0,
                                        t.uX)(),
                                        (0,
                                        t.CE)("tr", {
                                            key: e.path
                                        }, [(0,
                                        t.Lk)("td", Ue, (0,
                                        s.v_)(e.config.title), 1), (0,
                                        t.Lk)("td", null, [(0,
                                        t.Lk)("a", {
                                            href: w(e.path)
                                        }, (0,
                                        s.v_)(_(e.path)), 9, Pe)]), (0,
                                        t.Lk)("td", je, [(0,
                                        t.bF)(c, {
                                            icon: "far fa-clipboard",
                                            flat: "",
                                            round: "",
                                            dense: "",
                                            size: "sm",
                                            onClick: l => y(w(e.path))
                                        }, null, 8, ["onClick"])]), (0,
                                        t.Lk)("td", Me, (0,
                                        s.v_)((0,
                                        o.R1)(h.PK)(e.created, (0,
                                        o.R1)(v))), 1), (0,
                                        t.Lk)("td", Be, (0,
                                        s.v_)((0,
                                        o.R1)(h.EK)(e.readCount)), 1), (0,
                                        t.Lk)("td", Oe, [(0,
                                        t.bF)(c, {
                                            icon: "far fa-trash-alt",
                                            flat: "",
                                            round: "",
                                            dense: "",
                                            size: "sm",
                                            color: "negative",
                                            onClick: l => F(e.path)
                                        }, null, 8, ["onClick"])])])))), 128)), m.value ? ((0,
                                        t.uX)(),
                                        (0,
                                        t.CE)("tr", Ge, [(0,
                                        t.Lk)("td", null, (0,
                                        s.v_)((0,
                                        o.R1)(d)("sharedialog.No wheels found")), 1)])) : (0,
                                        t.Q3)("", !0)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }), (0,
                            t.bF)(p, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(d)("common.Close"),
                                    onClick: l[0] || (l[0] = e => k())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue", "maximized"])
                }
            }
        };
        var Ne = a(857);
        const He = (0,
        F.A)(ze, [["__scopeId", "data-v-4d172d7a"]])
          , Je = He;
        b()(ze, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QSpace: A.A,
            QMarkupTable: Ne.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        const Ye = {
            class: "text-h6"
        }
          , $e = {
            class: "q-gutter-y-sm"
        }
          , Ze = {
            for: "wheelTitleField"
        }
          , el = {
            class: "q-gutter-y-sm"
        }
          , ll = {
            class: "q-gutter-y-sm"
        }
          , al = {
            key: 0,
            class: "q-gutter-y-sm"
        }
          , tl = {
            for: "wheelDescriptionField"
        }
          , ol = {
            __name: "ShareDialogSettings",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , {t: u, locale: c} = (0,
                r.s9)()
                  , d = (0,
                o.KR)(!1)
                  , v = (0,
                o.KR)(null)
                  , h = (0,
                o.KR)()
                  , p = (0,
                o.KR)()
                  , f = (0,
                o.KR)(!1)
                  , g = (0,
                t.EW)({
                    get: () => a.getters.showTitle,
                    set: e => {
                        a.commit("setShowTitle", e)
                    }
                })
                  , m = (0,
                o.KR)("copyable");
                let b, k;
                async function w() {
                    return h.value = a.getters.wheelTitle,
                    p.value = a.getters.wheelDescription,
                    m.value = "copyable",
                    d.value = !0,
                    new Promise(( (e, l) => {
                        b = e,
                        k = l
                    }
                    ))
                }
                async function _() {
                    if (W())
                        if ("gallery" === m.value) {
                            const e = u("sharedialog.You are about to publish your wheel to the public gallery");
                            await j.lJ(u, e) && y()
                        } else
                            y()
                }
                function y() {
                    a.commit("setWheelTitle", h.value),
                    a.commit("setWheelDescription", p.value),
                    b(m.value),
                    d.value = !1
                }
                function F() {
                    b(),
                    d.value = !1
                }
                function W() {
                    return v.value.validate(),
                    !v.value.hasError
                }
                return l({
                    askUserForSettings: w
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-input")
                      , c = (0,
                    t.g2)("q-checkbox")
                      , r = (0,
                    t.g2)("q-radio")
                      , b = (0,
                    t.g2)("q-btn")
                      , k = (0,
                    t.g2)("q-card-actions")
                      , w = (0,
                    t.g2)("q-card")
                      , y = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(y, {
                        modelValue: d.value,
                        "onUpdate:modelValue": l[10] || (l[10] = e => d.value = e),
                        onShow: l[11] || (l[11] = e => v.value.select())
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(w, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", Ye, [l[12] || (l[12] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-share-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(u)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(a, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", $e, [(0,
                                t.Lk)("label", Ze, (0,
                                s.v_)((0,
                                o.R1)(u)("common.Wheel title")), 1), (0,
                                t.bF)(i, {
                                    id: "wheelTitleField",
                                    modelValue: h.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => h.value = e),
                                    filled: "",
                                    dense: "",
                                    "bottom-slots": "",
                                    rules: [e => e.length > 0 || (0,
                                    o.R1)(u)("sharedialog.Your wheel must have a title")],
                                    ref_key: "wheelTitleField",
                                    ref: v,
                                    maxlength: "50",
                                    onKeyup: l[1] || (l[1] = (0,
                                    n.jR)((e => _()), ["native", "enter"]))
                                }, null, 8, ["modelValue", "rules"]), (0,
                                t.bF)(c, {
                                    modelValue: g.value,
                                    "onUpdate:modelValue": l[2] || (l[2] = e => g.value = e)
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.eW)((0,
                                    s.v_)((0,
                                    o.R1)(u)("sharedialog.Show title to people")), 1)])),
                                    _: 1
                                }, 8, ["modelValue"])]), (0,
                                t.Lk)("div", el, [(0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(u)("sharedialog.Visibility")), 1), (0,
                                t.Lk)("div", ll, [(0,
                                t.bF)(r, {
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e => m.value = e),
                                    dense: "",
                                    val: "spin-only",
                                    label: (0,
                                    o.R1)(u)("sharedialog.Anyone with the link can spin the wheel")
                                }, null, 8, ["modelValue", "label"]), (0,
                                t.bF)(r, {
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[4] || (l[4] = e => m.value = e),
                                    dense: "",
                                    val: "copyable",
                                    label: (0,
                                    o.R1)(u)("sharedialog.Anyone with the link can spin and copy the wheel")
                                }, null, 8, ["modelValue", "label"]), (0,
                                t.bF)(r, {
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[5] || (l[5] = e => m.value = e),
                                    dense: "",
                                    val: "gallery",
                                    label: (0,
                                    o.R1)(u)("sharedialog.This wheel would be useful")
                                }, null, 8, ["modelValue", "label"]), f.value ? ((0,
                                t.uX)(),
                                (0,
                                t.Wv)(r, {
                                    key: 0,
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[6] || (l[6] = e => m.value = e),
                                    dense: "",
                                    val: "live",
                                    label: (0,
                                    o.R1)(u)("sharedialog.Broadcast spins and edits")
                                }, null, 8, ["modelValue", "label"])) : (0,
                                t.Q3)("", !0)])]), "gallery" == m.value ? ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", al, [(0,
                                t.Lk)("label", tl, (0,
                                s.v_)((0,
                                o.R1)(u)("common.Wheel description")), 1), (0,
                                t.bF)(i, {
                                    type: "textarea",
                                    modelValue: p.value,
                                    "onUpdate:modelValue": l[7] || (l[7] = e => p.value = e),
                                    filled: "",
                                    dense: "",
                                    maxlength: "200",
                                    rows: "3",
                                    id: "wheelDescriptionField"
                                }, null, 8, ["modelValue"])])) : (0,
                                t.Q3)("", !0)])),
                                _: 1
                            }), (0,
                            t.bF)(k, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(b, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(u)("common.Cancel"),
                                    onClick: l[8] || (l[8] = e => F())
                                }, null, 8, ["label"]), (0,
                                t.bF)(b, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(u)("common.Continue"),
                                    onClick: l[9] || (l[9] = e => _())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        };
        var nl = a(460)
          , sl = a(7878);
        const il = ol
          , ul = il;
        b()(ol, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QInput: ie.A,
            QCheckbox: nl.A,
            QRadio: sl.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        const cl = {
            class: "text-h6"
        }
          , rl = {
            class: "row q-gutter-sm"
        }
          , dl = {
            class: "col-grow"
        }
          , vl = {
            class: "col-shrink"
        }
          , hl = {
            __name: "ShareDialogLink",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , n = (0,
                c.A)()
                  , {t: u, locale: d} = (0,
                r.s9)()
                  , v = (0,
                o.KR)(!1)
                  , f = (0,
                o.KR)("");
                async function g(e, l, t) {
                    n.loading.show();
                    try {
                        await a.dispatch("userIsLoggedIn") || await a.dispatch("loginAnonymously");
                        const o = window.location.host
                          , n = await a.dispatch("shareWheel", {
                            wheelConfig: a.getters.wheelConfig,
                            shareMode: e,
                            editPermissions: l,
                            password: t
                        })
                          , s = p.Lo(o, d.value, n);
                        f.value = window.location.protocol + "//" + s,
                        (0,
                        h.sx)("Wheel", "CreateSharableLink"),
                        v.value = !0
                    } catch (o) {
                        if (o.toString().includes("family")) {
                            const e = u("sharedialog.The wheel includes text that");
                            j.ic(u, e)
                        } else
                            j.Qg(u, o);
                        (0,
                        h.to)("CreateSharableLinkError", o)
                    }
                    n.loading.hide()
                }
                async function m() {
                    await navigator.clipboard.writeText(f.value),
                    (0,
                    h.sx)("Wheel", "CopySharableLink");
                    const e = u("sharedialog.Link copied to the clipboard");
                    j.Ds(e)
                }
                function b() {
                    v.value = !1
                }
                return l({
                    share: g
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-card-section")
                      , n = (0,
                    t.g2)("q-input")
                      , i = (0,
                    t.g2)("q-btn")
                      , c = (0,
                    t.g2)("q-card-actions")
                      , r = (0,
                    t.g2)("q-card")
                      , d = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(d, {
                        modelValue: v.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e => v.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(r, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", cl, [l[3] || (l[3] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-share-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(u)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(a, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(u)("sharedialog.Link to this wheel")), 1), (0,
                                t.Lk)("div", rl, [(0,
                                t.Lk)("div", dl, [(0,
                                t.bF)(n, {
                                    id: "sharableLinkText",
                                    modelValue: f.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => f.value = e),
                                    readonly: "",
                                    dense: "",
                                    standout: "",
                                    style: {
                                        "min-width": "300px"
                                    }
                                }, null, 8, ["modelValue"])]), (0,
                                t.Lk)("div", vl, [(0,
                                t.bF)(i, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "positive",
                                    label: (0,
                                    o.R1)(u)("sharedialog.Copy link"),
                                    onClick: m
                                }, null, 8, ["label"])])]), (0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(u)("sharedialog.This link will work for anyone")), 1)])),
                                _: 1
                            }), (0,
                            t.bF)(c, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(u)("common.Close"),
                                    onClick: l[1] || (l[1] = e => b())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , pl = hl
          , fl = pl;
        b()(hl, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QInput: ie.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        const gl = {
            class: "text-h6"
        }
          , ml = {
            class: "q-gutter-y-sm"
        }
          , bl = {
            class: "q-gutter-y-sm"
        }
          , kl = {
            class: "row"
        }
          , wl = {
            class: "row q-gutter-x-md"
        }
          , _l = {
            class: "row"
        }
          , yl = {
            __name: "LiveWheelPermissionDialog",
            setup(e, {expose: l}) {
                (0,
                i.Pj)();
                const {t: a, locale: n} = (0,
                r.s9)()
                  , u = (0,
                o.KR)(!1)
                  , c = (0,
                o.KR)("owner")
                  , d = (0,
                o.KR)("");
                let v, h;
                async function p() {
                    return c.value = "owner",
                    d.value = "",
                    u.value = !0,
                    new Promise(( (e, l) => {
                        v = e,
                        h = l
                    }
                    ))
                }
                function f() {
                    v({
                        editPermissions: c.value,
                        password: d.value
                    }),
                    u.value = !1
                }
                function g() {
                    v(),
                    u.value = !1
                }
                return l({
                    show: p
                }),
                (e, l) => {
                    const n = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-radio")
                      , r = (0,
                    t.g2)("q-input")
                      , v = (0,
                    t.g2)("q-btn")
                      , h = (0,
                    t.g2)("q-card-actions")
                      , p = (0,
                    t.g2)("q-card")
                      , m = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(m, {
                        modelValue: u.value,
                        "onUpdate:modelValue": l[6] || (l[6] = e => u.value = e),
                        onShow: l[7] || (l[7] = l => e.wheelTitleField.select())
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(p, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(n, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", gl, [l[8] || (l[8] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-share-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(a)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(n, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", ml, [(0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(a)("sharedialog.Who can spin and edit the wheel")), 1), (0,
                                t.Lk)("div", bl, [(0,
                                t.Lk)("div", kl, [(0,
                                t.bF)(i, {
                                    modelValue: c.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => c.value = e),
                                    dense: "",
                                    val: "owner",
                                    label: (0,
                                    o.R1)(a)("sharedialog.Only me")
                                }, null, 8, ["modelValue", "label"])]), (0,
                                t.Lk)("div", wl, [(0,
                                t.bF)(i, {
                                    modelValue: c.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e => c.value = e),
                                    dense: "",
                                    val: "password",
                                    label: (0,
                                    o.R1)(a)("sharedialog.Anyone who knows the password")
                                }, null, 8, ["modelValue", "label"]), (0,
                                t.bF)(r, {
                                    type: "password",
                                    modelValue: d.value,
                                    "onUpdate:modelValue": l[2] || (l[2] = e => d.value = e),
                                    filled: "",
                                    dense: "",
                                    maxlength: "50",
                                    placeholder: (0,
                                    o.R1)(a)("sharedialog.Password"),
                                    id: "wheelPasswordField",
                                    disable: "password" !== c.value
                                }, null, 8, ["modelValue", "placeholder", "disable"])]), (0,
                                t.Lk)("div", _l, [(0,
                                t.bF)(i, {
                                    modelValue: c.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e => c.value = e),
                                    dense: "",
                                    val: "anyone",
                                    label: (0,
                                    o.R1)(a)("sharedialog.Anyone with the link")
                                }, null, 8, ["modelValue", "label"])])])])])),
                                _: 1
                            }), (0,
                            t.bF)(h, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(v, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(a)("common.Cancel"),
                                    onClick: l[4] || (l[4] = e => g())
                                }, null, 8, ["label"]), (0,
                                t.bF)(v, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(a)("common.Continue"),
                                    onClick: l[5] || (l[5] = e => f())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , Fl = yl
          , Wl = Fl;
        b()(yl, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QRadio: sl.A,
            QInput: ie.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        var Rl = a(37);
        const Ll = {
            class: "text-h6"
        }
          , Al = {
            style: {
                "margin-top": "10px"
            }
        }
          , Cl = {
            style: {
                "margin-top": "10px",
                color: "#999"
            }
        }
          , ql = {
            __name: "SheetLoginDialog",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , {t: n, locale: u} = ((0,
                c.A)(),
                (0,
                r.s9)())
                  , d = (0,
                o.KR)(!1);
                let v, p;
                async function f() {
                    return (0,
                    h.sx)("Wheel", "ShowSpreadsheetDialog"),
                    d.value = !0,
                    new Promise(( (e, l) => {
                        v = e,
                        p = l
                    }
                    ))
                }
                async function g() {
                    d.value = !1;
                    try {
                        (0,
                        h.sx)("Wheel", "LoginForSheetAttempt", "");
                        const e = await a.dispatch("logInToSheets", u);
                        (0,
                        h.sx)("Wheel", "LoginForSheetSuccess", ""),
                        v(e)
                    } catch (e) {
                        (0,
                        h.to)("LoginForSheetError", e),
                        (0,
                        h.sx)("Wheel", "LoginForSheetFailure", e.toString()),
                        j.Qg(n, e),
                        p()
                    }
                }
                function m() {
                    d.value = !1,
                    v()
                }
                return l({
                    askUserToLogIn: f
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-btn")
                      , u = (0,
                    t.g2)("q-card-actions")
                      , c = (0,
                    t.g2)("q-card")
                      , r = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(r, {
                        modelValue: d.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e => d.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(c, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", Ll, [l[3] || (l[3] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-link"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(n)("common.Link Google Spreadsheet")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(a, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", null, (0,
                                s.v_)((0,
                                o.R1)(n)("sheetdialog.When you link a spreadsheet")), 1), (0,
                                t.Lk)("p", Al, (0,
                                s.v_)((0,
                                o.R1)(n)("sheetdialog.To import sheets")), 1), (0,
                                t.Lk)("p", Cl, (0,
                                s.v_)((0,
                                o.R1)(n)("common.If you dont see a Google login button below")), 1)])),
                                _: 1
                            }), (0,
                            t.bF)(u, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, {
                                    unelevated: "",
                                    label: (0,
                                    o.R1)(n)("common.Cancel"),
                                    onClick: l[0] || (l[0] = e => m())
                                }, null, 8, ["label"]), (0,
                                t.Lk)("input", {
                                    type: "image",
                                    style: {
                                        height: "40px"
                                    },
                                    alt: "Sign in with Google",
                                    src: "/images/btn_google_signin_dark_normal_web@2x.png",
                                    onClick: l[1] || (l[1] = e => g())
                                })])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , Sl = ql
          , xl = Sl;
        async function Ql(e) {
            const l = await gapi.client.sheets.spreadsheets.get({
                spreadsheetId: e
            });
            return l.result.properties.title
        }
        async function Dl(e) {
            const l = await gapi.client.sheets.spreadsheets.get({
                spreadsheetId: e
            });
            return l.result.sheets.map((e => e.properties.title))
        }
        async function Vl(e, l) {
            const a = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: e,
                range: l
            })
              , t = []
              , o = a.result;
            if (o.values && o.values.length > 0) {
                const e = Kl(o.values)[0];
                for (let l = 0; l < e.length && l < 27; l++)
                    t.push({
                        id: String.fromCharCode(l + 65),
                        name: e[l]
                    })
            }
            return t
        }
        async function El(e, l, a, t) {
            const o = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: e,
                range: l + "!" + a + ":" + a
            })
              , n = [];
            if (o.result.values && o.result.values.length > 0) {
                const e = Kl(o.result.values);
                for (let l = 0; l < e.length; l++)
                    if (0 == l && t)
                        ;
                    else {
                        const a = e[l];
                        "undefined" != typeof a[0] && n.push(a[0])
                    }
            }
            return n
        }
        function Kl(e) {
            return e.filter((e => e.length > 0))
        }
        b()(ql, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        const Xl = {
            class: "text-h6"
        }
          , Il = {
            class: "row items-center"
        }
          , Tl = {
            class: "col-4"
        }
          , Ul = {
            class: "col"
        }
          , Pl = {
            class: "row items-center"
        }
          , jl = {
            class: "col-4"
        }
          , Ml = {
            class: "col"
        }
          , Bl = {
            class: "row items-center"
        }
          , Ol = {
            class: "col-4"
        }
          , Gl = {
            class: "col"
        }
          , zl = {
            class: "row items-center"
        }
          , Nl = {
            class: "col-4"
        }
          , Hl = {
            class: "col"
        }
          , Jl = {
            __name: "SheetConfigDialog",
            setup(e, {expose: l}) {
                (0,
                i.Pj)(),
                (0,
                c.A)();
                const {t: a, locale: n} = (0,
                r.s9)()
                  , u = (0,
                o.KR)(!1)
                  , d = (0,
                o.KR)("")
                  , v = (0,
                o.KR)("")
                  , p = (0,
                o.KR)(null)
                  , f = (0,
                o.KR)(null)
                  , g = (0,
                o.KR)([])
                  , m = (0,
                o.KR)([])
                  , b = (0,
                o.KR)(!0);
                let k, w;
                async function _(e) {
                    return u.value = !0,
                    d.value = e,
                    new Promise((async (e, l) => {
                        k = e,
                        w = l,
                        v.value = "",
                        p.value = "",
                        g.value = [],
                        f.value = "",
                        m.value = [],
                        v.value = await Ql(d.value),
                        g.value = await Dl(d.value),
                        g.value.length > 0 && (p.value = g.value[0])
                    }
                    ))
                }
                function y() {
                    (0,
                    h.sx)("Wheel", "LinkSpreadsheet"),
                    u.value = !1,
                    k({
                        tab: p.value,
                        column: f.value,
                        skipFirstRow: b.value
                    })
                }
                function F() {
                    u.value = !1,
                    k({
                        tab: "",
                        column: "",
                        skipFirstRow: !1
                    })
                }
                return (0,
                t.wB)(( () => p.value), (async e => {
                    m.value = [],
                    f.value = "";
                    const l = await Vl(d.value, e);
                    m.value = l.map((e => ({
                        value: e.id,
                        label: e.name
                    }))),
                    m.value.length > 0 && (f.value = m.value[0].value)
                }
                )),
                l({
                    askUserToConfigure: _
                }),
                (e, l) => {
                    const n = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-input")
                      , c = (0,
                    t.g2)("q-select")
                      , r = (0,
                    t.g2)("q-checkbox")
                      , d = (0,
                    t.g2)("q-btn")
                      , h = (0,
                    t.g2)("q-card-actions")
                      , k = (0,
                    t.g2)("q-card")
                      , w = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(w, {
                        modelValue: u.value,
                        "onUpdate:modelValue": l[6] || (l[6] = e => u.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(k, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(n, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", Xl, [l[7] || (l[7] = (0,
                                t.Lk)("i", {
                                    class: "fa fa-link"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(a)("common.Link Google Spreadsheet")), 1)])])),
                                _: 1
                            }), (0,
                            t.bF)(n, {
                                class: "q-gutter-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", Il, [(0,
                                t.Lk)("div", Tl, (0,
                                s.v_)((0,
                                o.R1)(a)("sheetdialog.Selected spreadsheet")), 1), (0,
                                t.Lk)("div", Ul, [(0,
                                t.bF)(i, {
                                    dense: "",
                                    filled: "",
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => v.value = e),
                                    readonly: ""
                                }, null, 8, ["modelValue"])])]), (0,
                                t.Lk)("div", Pl, [(0,
                                t.Lk)("div", jl, (0,
                                s.v_)((0,
                                o.R1)(a)("sheetdialog.Tab")), 1), (0,
                                t.Lk)("div", Ml, [(0,
                                t.bF)(c, {
                                    modelValue: p.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e => p.value = e),
                                    options: g.value,
                                    filled: "",
                                    dense: ""
                                }, null, 8, ["modelValue", "options"])])]), (0,
                                t.Lk)("div", Bl, [(0,
                                t.Lk)("div", Ol, (0,
                                s.v_)((0,
                                o.R1)(a)("sheetdialog.Column")), 1), (0,
                                t.Lk)("div", Gl, [(0,
                                t.bF)(c, {
                                    modelValue: f.value,
                                    "onUpdate:modelValue": l[2] || (l[2] = e => f.value = e),
                                    options: m.value,
                                    filled: "",
                                    dense: "",
                                    "emit-value": "",
                                    "map-options": ""
                                }, null, 8, ["modelValue", "options"])])]), (0,
                                t.Lk)("div", zl, [(0,
                                t.Lk)("div", Nl, (0,
                                s.v_)((0,
                                o.R1)(a)("sheetdialog.First row")), 1), (0,
                                t.Lk)("div", Hl, [(0,
                                t.bF)(r, {
                                    modelValue: b.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e => b.value = e),
                                    label: (0,
                                    o.R1)(a)("sheetdialog.Is a header and should not be imported")
                                }, null, 8, ["modelValue", "label"])])])])),
                                _: 1
                            }), (0,
                            t.bF)(h, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(d, {
                                    unelevated: "",
                                    label: (0,
                                    o.R1)(a)("common.Cancel"),
                                    onClick: l[4] || (l[4] = e => F())
                                }, null, 8, ["label"]), (0,
                                t.bF)(d, {
                                    unelevated: "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(a)("common.OK"),
                                    onClick: l[5] || (l[5] = e => y())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , Yl = Jl
          , $l = Yl;
        b()(Jl, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QInput: ie.A,
            QSelect: be.A,
            QCheckbox: nl.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        var Zl = function(e, l, a, t) {
            function o(e) {
                return e instanceof a ? e : new a((function(l) {
                    l(e)
                }
                ))
            }
            return new (a || (a = Promise))((function(a, n) {
                function s(e) {
                    try {
                        u(t.next(e))
                    } catch (l) {
                        n(l)
                    }
                }
                function i(e) {
                    try {
                        u(t["throw"](e))
                    } catch (l) {
                        n(l)
                    }
                }
                function u(e) {
                    e.done ? a(e.value) : o(e.value).then(s, i)
                }
                u((t = t.apply(e, l || [])).next())
            }
            ))
        };
        const ea = {
            class: "text-h6"
        }
          , la = {
            class: "row items-center q-gutter-x-md"
        }
          , aa = {
            class: "col-shrink"
        }
          , ta = ["src"]
          , oa = {
            class: "col text-h5"
        }
          , na = {
            class: "col-shrink"
        }
          , sa = {
            class: "q-gutter-x-md"
        }
          , ia = (0,
        t.pM)({
            __name: "AccountDialog",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , n = (0,
                u.rd)()
                  , {t: d} = (0,
                r.s9)()
                  , v = (0,
                c.A)()
                  , p = (0,
                o.KR)(!1);
                function f() {
                    h.sx("Wheel", "ShowAccountDialog"),
                    p.value = !0
                }
                function g() {
                    a.dispatch("logOut"),
                    p.value = !1
                }
                function m() {
                    return Zl(this, void 0, void 0, (function*() {
                        const e = d("profiledropdown.Are you sure you want to delete your account");
                        if (yield j.lJ(d, e)) {
                            v.loading.show();
                            try {
                                h.sx("Wheel", "DeleteAccount"),
                                yield a.dispatch("deleteAccount"),
                                a.dispatch("resetWheel"),
                                j.Ds(d("profiledropdown.Your account and your saved wheels have been deleted"))
                            } catch (l) {
                                const e = h.q6(l);
                                j.Qg(d, e),
                                h.to("DeleteAccountError", e)
                            }
                            v.loading.hide(),
                            p.value = !1
                        }
                    }
                    ))
                }
                return l({
                    show: f
                }),
                (e, l) => {
                    const i = (0,
                    t.g2)("q-space")
                      , u = (0,
                    t.g2)("q-card-section")
                      , c = (0,
                    t.g2)("q-avatar")
                      , r = (0,
                    t.g2)("q-btn")
                      , v = (0,
                    t.g2)("q-card-actions")
                      , h = (0,
                    t.g2)("q-card")
                      , f = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(f, {
                        modelValue: p.value,
                        "onUpdate:modelValue": l[4] || (l[4] = e => p.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(h, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(u, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", ea, [l[5] || (l[5] = (0,
                                t.Lk)("i", {
                                    class: "fas fa-user-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(d)("common.My account")), 1)]), (0,
                                t.bF)(i), (0,
                                t.bF)(De.A)])),
                                _: 1
                            }), (0,
                            t.bF)(u, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", la, [(0,
                                t.Lk)("div", aa, [(0,
                                t.bF)(c, {
                                    size: "64px"
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.Lk)("img", {
                                        src: (0,
                                        o.R1)(a).getters.userPhotoUrl
                                    }, null, 8, ta)])),
                                    _: 1
                                })]), (0,
                                t.Lk)("div", oa, (0,
                                s.v_)((0,
                                o.R1)(d)("profiledropdown.Signed in as", {
                                    name: (0,
                                    o.R1)(a).getters.userDisplayName
                                })), 1), (0,
                                t.Lk)("div", na, [(0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "warning",
                                    "text-color": "black",
                                    label: (0,
                                    o.R1)(d)("profiledropdown.Sign out"),
                                    onClick: l[0] || (l[0] = e => g())
                                }, null, 8, ["label"])])]), (0,
                                t.Lk)("div", sa, [(0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(d)("profiledropdown.Export my data"),
                                    onClick: l[1] || (l[1] = e => (0,
                                    o.R1)(n).push("/export"))
                                }, null, 8, ["label"]), (0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "negative",
                                    label: (0,
                                    o.R1)(d)("profiledropdown.Delete my account"),
                                    onClick: l[2] || (l[2] = e => m())
                                }, null, 8, ["label"])])])),
                                _: 1
                            }), (0,
                            t.bF)(v, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(d)("common.Close"),
                                    onClick: l[3] || (l[3] = e => p.value = !1)
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        })
          , ua = ia
          , ca = ua;
        b()(ia, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QSpace: A.A,
            QAvatar: L.A,
            QBtn: g.A,
            QCardActions: H.A
        });
        var ra = a(5483);
        const da = {
            class: "text-h6"
        }
          , va = {
            class: "text-h6",
            style: {
                "margin-top": "16px"
            }
        }
          , ha = {
            class: "q-py-md"
        }
          , pa = {
            class: "row items-start q-gutter-md"
        }
          , fa = ["onClick"]
          , ga = {
            class: "text-h6",
            style: {
                "margin-top": "16px"
            }
        }
          , ma = {
            class: "q-py-md",
            style: {
                height: "40vh",
                overflow: "auto"
            }
        }
          , ba = {
            class: "row items-start q-gutter-md"
        }
          , ka = ["onClick"]
          , wa = {
            __name: "LanguageDialog",
            emits: ["language-changed"],
            setup(e, {expose: l, emit: a}) {
                const {t: n} = (0,
                r.s9)()
                  , i = a
                  , u = (0,
                o.KR)(!1)
                  , c = (0,
                o.KR)([])
                  , d = (0,
                o.KR)([])
                  , v = (0,
                o.KR)("")
                  , f = (0,
                t.EW)(( () => v.value.toLowerCase()))
                  , g = (0,
                t.EW)(( () => c.value.filter((e => !v.value || e.humanName.toLowerCase().includes(f.value)))));
                async function m() {
                    (0,
                    h.sx)("Wheel", "ShowLanguageDialog"),
                    v.value = "",
                    u.value = !0,
                    c.value = p.tr(),
                    d.value = p.xC(navigator.languages);
                    try {
                        const e = await ra.Up()
                          , l = [...navigator.languages, ...e];
                        d.value = p.xC(l)
                    } catch (e) {
                        (0,
                        h.to)("GetLangsForMyAddressError", e)
                    }
                }
                function b(e) {
                    (0,
                    h.sx)("Wheel", "ChangeLanguageFromNewDialog"),
                    i("language-changed", e),
                    u.value = !1
                }
                return l({
                    show: m
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-space")
                      , i = (0,
                    t.g2)("q-card-section")
                      , c = (0,
                    t.g2)("q-input")
                      , r = (0,
                    t.g2)("q-btn")
                      , h = (0,
                    t.g2)("q-card-actions")
                      , p = (0,
                    t.g2)("q-card")
                      , f = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(f, {
                        modelValue: u.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e => u.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(p, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(i, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", da, [l[3] || (l[3] = (0,
                                t.Lk)("i", {
                                    class: "fas fa-globe"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(n)("toolbar.Language")), 1)]), (0,
                                t.bF)(a), (0,
                                t.bF)(De.A)])),
                                _: 1
                            }), (0,
                            t.bF)(i, null, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.Lk)("div", va, (0,
                                s.v_)((0,
                                o.R1)(n)("languagedialog.Suggested languages")), 1), (0,
                                t.Lk)("div", ha, [(0,
                                t.Lk)("div", pa, [((0,
                                t.uX)(!0),
                                (0,
                                t.CE)(t.FK, null, (0,
                                t.pI)(d.value, (e => ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", {
                                    key: "locale.name",
                                    onClick: l => b(e.name),
                                    class: "language"
                                }, (0,
                                s.v_)(e.humanName), 9, fa)))), 128))])]), (0,
                                t.Lk)("div", ga, (0,
                                s.v_)((0,
                                o.R1)(n)("languagedialog.All languages")), 1), (0,
                                t.bF)(c, {
                                    dense: "",
                                    filled: "",
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => v.value = e),
                                    placeholder: (0,
                                    o.R1)(n)("common.Search"),
                                    style: {
                                        "margin-top": "16px"
                                    }
                                }, null, 8, ["modelValue", "placeholder"]), (0,
                                t.Lk)("div", ma, [(0,
                                t.Lk)("div", ba, [((0,
                                t.uX)(!0),
                                (0,
                                t.CE)(t.FK, null, (0,
                                t.pI)(g.value, (e => ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", {
                                    key: "locale.name",
                                    onClick: l => b(e.name),
                                    class: "language"
                                }, (0,
                                s.v_)(e.humanName), 9, ka)))), 128))])])])),
                                _: 1
                            }), (0,
                            t.bF)(h, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(n)("common.Close"),
                                    onClick: l[1] || (l[1] = e => u.value = !1)
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , _a = (0,
        F.A)(wa, [["__scopeId", "data-v-06d9ceb7"]])
          , ya = _a;
        b()(wa, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QSpace: A.A,
            QInput: ie.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        const Fa = {
            __name: "TitleAndDescriptionDialog",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , {t: u} = (0,
                r.s9)()
                  , c = (0,
                o.KR)(!1)
                  , d = (0,
                t.EW)(( () => a.getters.wheelConfig))
                  , v = (0,
                o.KR)("")
                  , p = (0,
                o.KR)("");
                function f() {
                    (0,
                    h.sx)("Wheel", "ShowTitleAndDescriptionDialog"),
                    v.value = d.value.title,
                    p.value = d.value.description,
                    c.value = !0
                }
                function g() {
                    (0,
                    h.sx)("Wheel", "SetTitleAndDescription"),
                    a.commit("setWheelTitle", v.value),
                    a.commit("setWheelDescription", p.value),
                    m()
                }
                function m() {
                    c.value = !1
                }
                function b(e) {
                    e.preventDefault(),
                    g()
                }
                return l({
                    show: f
                }),
                (e, l) => {
                    const a = (0,
                    t.g2)("q-card-section")
                      , i = (0,
                    t.g2)("q-input")
                      , r = (0,
                    t.g2)("q-btn")
                      , d = (0,
                    t.g2)("q-card-actions")
                      , h = (0,
                    t.g2)("q-card")
                      , f = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(f, {
                        modelValue: c.value,
                        "onUpdate:modelValue": l[4] || (l[4] = e => c.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(h, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(a, {
                                class: "text-h6"
                            }, {
                                default: (0,
                                t.k6)(( () => [l[5] || (l[5] = (0,
                                t.Lk)("i", {
                                    class: "fas fa-pencil-alt"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(u)("common.Edit title and description")), 1)])),
                                _: 1
                            }), (0,
                            t.bF)(a, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(i, {
                                    autofocus: "",
                                    filled: "",
                                    dense: "",
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e => v.value = e),
                                    ref: "wheelTitleInput",
                                    onKeydown: (0,
                                    n.jR)(b, ["native", "enter"]),
                                    maxlength: "50",
                                    placeholder: (0,
                                    o.R1)(u)("common.Wheel title")
                                }, null, 8, ["modelValue", "placeholder"]), (0,
                                t.bF)(i, {
                                    filled: "",
                                    dense: "",
                                    type: "textarea",
                                    modelValue: p.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e => p.value = e),
                                    onKeydown: (0,
                                    n.jR)(b, ["native", "enter"]),
                                    maxlength: "200",
                                    placeholder: (0,
                                    o.R1)(u)("common.Wheel description")
                                }, null, 8, ["modelValue", "placeholder"])])),
                                _: 1
                            }), (0,
                            t.bF)(d, {
                                align: "right"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.R1)(u)("common.Cancel"),
                                    onClick: l[2] || (l[2] = e => m())
                                }, null, 8, ["label"]), (0,
                                t.bF)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.R1)(u)("common.OK"),
                                    onClick: l[3] || (l[3] = e => g())
                                }, null, 8, ["label"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , Wa = Fa
          , Ra = Wa;
        b()(Fa, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QInput: ie.A,
            QCardActions: H.A,
            QBtn: g.A
        });
        const La = {
            __name: "SheetDataPump",
            setup(e, {expose: l}) {
                const a = (0,
                i.Pj)()
                  , {t} = (0,
                r.s9)();
                let o = 0;
                function n(e, l, t, n) {
                    o = (new Date).getTime(),
                    a.commit("linkSheet"),
                    s(e, l, t, n)
                }
                async function s(e, l, o, n) {
                    if (!u() && a.getters.sheetLinked)
                        try {
                            const t = await El(e, l, o, n)
                              , i = t.map((e => (0,
                            h.oF)(e)))
                              , {additions: u, removals: r} = (0,
                            h.Hu)(a.getters.wheelConfig.entries.map((e => e.text)), i);
                            c(u),
                            a.commit("appendTextEntries", u),
                            a.commit("removeTextEntries", r),
                            setTimeout(( () => s(e, l, o, n)), 5e3)
                        } catch (i) {
                            a.commit("unlinkSheet"),
                            (0,
                            h.to)("ImportDataFromSpreadsheetError", i),
                            j.Qg(t, i)
                        }
                    else
                        a.commit("unlinkSheet")
                }
                function u() {
                    const e = 36e5
                      , l = (new Date).getTime();
                    return l - o > e
                }
                function c(e) {
                    if (e.length > 2) {
                        const l = t("sheetdialog.entries added", {
                            count: e.length
                        });
                        j.Ds(l)
                    } else
                        e.forEach((e => {
                            const l = t("sheetdialog.added", {
                                entry: (0,
                                h.oF)(e)
                            });
                            j.Ds(l)
                        }
                        ))
                }
                return l({
                    start: n
                }),
                (e, l) => null
            }
        }
          , Aa = La
          , Ca = Aa;
        var qa = a(8435)
          , Sa = a(4115)
          , xa = a(5205);
        const Qa = {
            style: {
                height: "4em"
            }
        }
          , Da = {
            key: 0,
            class: "text-h3",
            style: {
                position: "absolute",
                color: "#34a853"
            }
        }
          , Va = {
            key: 0,
            class: "text-h3",
            style: {
                position: "absolute",
                color: "#34a853"
            }
        }
          , Ea = {
            __name: "YearlyStatsCounter",
            props: {
                title: String,
                increment: Number,
                fps: Number
            },
            setup(e) {
                const l = e
                  , a = (0,
                o.KR)(0)
                  , i = (0,
                o.KR)("")
                  , u = (0,
                o.KR)(!0);
                return (0,
                xa.Rg)(( () => {
                    const e = new Date((new Date).getFullYear(),0,1)
                      , t = new Date;
                    a.value = (t - e) / 1e3 * l.increment,
                    i.value = Math.round(a.value).toLocaleString(),
                    u.value = !u.value
                }
                ), 1e3 / l.fps, {
                    immediateCallback: !0
                }),
                (l, a) => ((0,
                t.uX)(),
                (0,
                t.CE)("div", Qa, [(0,
                t.eW)((0,
                s.v_)(e.title) + " ", 1), (0,
                t.bF)(n.eB, {
                    name: "fade",
                    mode: "in-out"
                }, {
                    default: (0,
                    t.k6)(( () => [u.value ? ((0,
                    t.uX)(),
                    (0,
                    t.CE)("p", Da, (0,
                    s.v_)(i.value), 1)) : (0,
                    t.Q3)("", !0)])),
                    _: 1
                }), (0,
                t.bF)(n.eB, {
                    name: "fade",
                    mode: "in-out"
                }, {
                    default: (0,
                    t.k6)(( () => [u.value ? (0,
                    t.Q3)("", !0) : ((0,
                    t.uX)(),
                    (0,
                    t.CE)("p", Va, (0,
                    s.v_)(i.value), 1))])),
                    _: 1
                })]))
            }
        }
          , Ka = (0,
        F.A)(Ea, [["__scopeId", "data-v-e9540f52"]])
          , Xa = Ka
          , Ia = {
            class: "q-pa-md about-card-row"
        }
          , Ta = {
            class: "about-card-column"
        }
          , Ua = {
            class: "about-card-column"
        }
          , Pa = {
            class: "about-card-column"
        }
          , ja = (0,
        t.pM)({
            __name: "AboutCards",
            setup(e) {
                const l = (0,
                i.Pj)();
                return (e, a) => {
                    const n = (0,
                    t.g2)("router-link")
                      , i = (0,
                    t.g2)("q-badge");
                    return (0,
                    t.uX)(),
                    (0,
                    t.CE)("div", Ia, [(0,
                    t.Lk)("div", Ta, [(0,
                    t.bF)(Sa.A, null, {
                        header: (0,
                        t.k6)(( () => a[0] || (a[0] = [(0,
                        t.eW)(" What is the wheel spinner for? ")]))),
                        main: (0,
                        t.k6)(( () => [a[8] || (a[8] = (0,
                        t.eW)(" Every day we hear from people who use our website in new ways: ")), (0,
                        t.Lk)("ul", null, [(0,
                        t.Lk)("li", null, [a[2] || (a[2] = (0,
                        t.eW)(" Random name picker in the classroom: pick which student will answer the next question. ")), (0,
                        t.bF)(n, {
                            to: "/how-to-use-in-the-classroom"
                        }, {
                            default: (0,
                            t.k6)(( () => a[1] || (a[1] = [(0,
                            t.eW)(" How to use it in the classroom ")]))),
                            _: 1
                        })]), a[3] || (a[3] = (0,
                        t.Lk)("li", null, " If you are a retailer, spin the wheel to pick which loyal customer will get the monthly giveaway. ", -1)), a[4] || (a[4] = (0,
                        t.Lk)("li", null, " When you give a presentation, use the wheel spinner to pick a lucky winner among the attendees who turned in the survey. ", -1)), a[5] || (a[5] = (0,
                        t.Lk)("li", null, " Random name picker at work: in your daily standup meeting at work, randomize who speaks first. ", -1)), a[6] || (a[6] = (0,
                        t.Lk)("li", null, " If you are overwhelmed by your to do items, put them on a wheel and spin to find which one to start with. ", -1)), a[7] || (a[7] = (0,
                        t.Lk)("li", null, " If you can't agree on what to have for dinner, put the alternatives on the wheel and spin. ", -1))])])),
                        _: 1
                    }), (0,
                    t.bF)(Sa.A, null, {
                        header: (0,
                        t.k6)(( () => a[9] || (a[9] = [(0,
                        t.eW)(" Does it use renewable energy? ")]))),
                        main: (0,
                        t.k6)(( () => [a[11] || (a[11] = (0,
                        t.Lk)("p", null, " We are proud to share that 100% of the electricity that powers our servers is renewable, and 93% comes from carbon-free energy sources. ", -1)), (0,
                        t.Lk)("p", null, [(0,
                        t.bF)(n, {
                            to: "/faq/sustainability"
                        }, {
                            default: (0,
                            t.k6)(( () => a[10] || (a[10] = [(0,
                            t.eW)("Sustainability")]))),
                            _: 1
                        })])])),
                        _: 1
                    })]), (0,
                    t.Lk)("div", Ua, [(0,
                    t.bF)(Sa.A, null, {
                        header: (0,
                        t.k6)(( () => a[12] || (a[12] = [(0,
                        t.eW)(" How to use the wheel spinner ")]))),
                        main: (0,
                        t.k6)(( () => [(0,
                        t.Lk)("p", null, [a[14] || (a[14] = (0,
                        t.eW)(" It's easy: type in your entries in the textbox to the right of the wheel, then click the wheel to spin it and get a random winner. To make the wheel your own by customizing the colors, sounds, and spin time, click ")), (0,
                        t.bF)(i, {
                            color: "primary"
                        }, {
                            default: (0,
                            t.k6)(( () => a[13] || (a[13] = [(0,
                            t.Lk)("i", {
                                class: "fas fa-palette"
                            }, null, -1), (0,
                            t.eW)(" Customize")]))),
                            _: 1
                        }), a[15] || (a[15] = (0,
                        t.eW)(" at the top of the page. "))]), (0,
                        t.Lk)("p", null, [(0,
                        t.bF)(n, {
                            to: "/user-reviews-and-tutorials"
                        }, {
                            default: (0,
                            t.k6)(( () => a[16] || (a[16] = [(0,
                            t.eW)(" Video reviews and tutorials by users ")]))),
                            _: 1
                        })])])),
                        _: 1
                    }), (0,
                    t.bF)(Sa.A, null, {
                        header: (0,
                        t.k6)(( () => [(0,
                        t.eW)(" Activity in " + (0,
                        s.v_)((new Date).getFullYear()), 1)])),
                        main: (0,
                        t.k6)(( () => [(0,
                        t.bF)(Xa, {
                            title: "Wheel spins",
                            increment: (0,
                            o.R1)(l).getters.spinsPerSecond,
                            fps: .333333
                        }, null, 8, ["increment"]), a[17] || (a[17] = (0,
                        t.Lk)("br", null, null, -1)), (0,
                        t.bF)(Xa, {
                            title: "Hours of spinning",
                            increment: (0,
                            o.R1)(l).getters.hoursSpunPerSecond,
                            fps: (0,
                            o.R1)(l).getters.hoursSpunPerSecond
                        }, null, 8, ["increment", "fps"]), a[18] || (a[18] = (0,
                        t.Lk)("br", null, null, -1))])),
                        _: 1
                    })]), (0,
                    t.Lk)("div", Pa, [(0,
                    t.bF)(Sa.A, null, {
                        header: (0,
                        t.k6)(( () => a[19] || (a[19] = [(0,
                        t.eW)(" Is my data private? ")]))),
                        main: (0,
                        t.k6)(( () => [a[21] || (a[21] = (0,
                        t.Lk)("p", null, " We are committed to protecting and respecting your privacy and the security of your data. We comply with GDPR, CCPA, SB 190, SB 1392, and we closely monitor changes to them. We follow industry best practices for data encryption and backups. ", -1)), (0,
                        t.Lk)("p", null, [(0,
                        t.bF)(n, {
                            to: "/privacy-policy"
                        }, {
                            default: (0,
                            t.k6)(( () => a[20] || (a[20] = [(0,
                            t.eW)(" How we safeguard your privacy ")]))),
                            _: 1
                        })])])),
                        _: 1
                    }), (0,
                    t.bF)(Sa.A, null, {
                        header: (0,
                        t.k6)(( () => a[22] || (a[22] = [(0,
                        t.eW)(" Can the wheel be rigged? ")]))),
                        main: (0,
                        t.k6)(( () => [a[25] || (a[25] = (0,
                        t.Lk)("p", null, " There is no functionality to determine which entry will win ahead of time. When you click the wheel, it accelerates for exactly one second, then it is set to a random rotation between 0 and 360 degrees, and finally it decelerates to a stop. The setting of a random rotation is not visible to the naked eye as it happens when the wheel is spinning quite fast. ", -1)), (0,
                        t.Lk)("p", null, [(0,
                        t.bF)(n, {
                            to: "/faq/randomness"
                        }, {
                            default: (0,
                            t.k6)(( () => a[23] || (a[23] = [(0,
                            t.eW)("Randomness of the wheel")]))),
                            _: 1
                        }), a[24] || (a[24] = (0,
                        t.eW)(". "))])])),
                        _: 1
                    })])])
                }
            }
        });
        var Ma = a(3954);
        const Ba = (0,
        F.A)(ja, [["__scopeId", "data-v-13eaa228"]])
          , Oa = Ba;
        b()(ja, "components", {
            QBadge: Ma.A
        });
        const Ga = {
            class: "q-gutter-y-sm"
        }
          , za = {
            class: "row items-center q-gutter-x-md"
        }
          , Na = {
            key: 0,
            style: {
                "font-size": "32px"
            },
            class: "break-long-words"
        }
          , Ha = {
            key: 0,
            class: "break-long-words"
        }
          , Ja = {
            __name: "TitleAndDescription",
            props: {
                editable: Boolean
            },
            emits: ["edit-title-and-description"],
            setup(e, {emit: l}) {
                const a = (0,
                i.Pj)()
                  , {t: u} = (0,
                r.s9)()
                  , c = e
                  , d = l
                  , v = (0,
                t.EW)(( () => a.getters.wheelConfig))
                  , h = (0,
                t.EW)(( () => v.value.title))
                  , p = (0,
                t.EW)(( () => v.value.description));
                return (e, l) => {
                    const a = (0,
                    t.g2)("q-tooltip")
                      , i = (0,
                    t.g2)("q-btn");
                    return (0,
                    t.uX)(),
                    (0,
                    t.CE)("div", Ga, [(0,
                    t.Lk)("div", za, [h.value ? ((0,
                    t.uX)(),
                    (0,
                    t.CE)("span", Na, (0,
                    s.v_)(h.value), 1)) : (0,
                    t.Q3)("", !0), (0,
                    t.bo)((0,
                    t.bF)(i, {
                        round: "",
                        unelevated: "",
                        dense: "",
                        color: "primary",
                        icon: "fas fa-pencil-alt",
                        onClick: l[0] || (l[0] = e => d("edit-title-and-description"))
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(a, null, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.eW)((0,
                            s.v_)((0,
                            o.R1)(u)("common.Edit title and description")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }, 512), [[n.aG, c.editable]])]), p.value ? ((0,
                    t.uX)(),
                    (0,
                    t.CE)("div", Ha, (0,
                    s.v_)(p.value), 1)) : (0,
                    t.Q3)("", !0), l[1] || (l[1] = (0,
                    t.Lk)("div", {
                        class: "q-pb-sm desktop-only"
                    }, null, -1))])
                }
            }
        }
          , Ya = (0,
        F.A)(Ja, [["__scopeId", "data-v-0c16652e"]])
          , $a = Ya;
        b()(Ja, "components", {
            QBtn: g.A,
            QTooltip: C.A
        });
        var Za = a(6787);
        const et = (0,
        t.pM)({
            __name: "DesktopAdFreestar",
            setup(e) {
                return (0,
                t.sV)(( () => {
                    console.log("Initializing desktop Freestar ads"),
                    (0,
                    Za.oU)({
                        link: [{
                            href: "https://a.pub.network/",
                            crossorigin: "",
                            type: "text/javascript"
                        }, {
                            rel: "preconnect",
                            href: "https://b.pub.network/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://c.pub.network/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://d.pub.network/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://c.amazon-adsystem.com",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://s.amazon-adsystem.com",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://btloader.com/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://api.btloader.com/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://cdn.confiant-integrations.net",
                            crossorigin: ""
                        }],
                        script: [{
                            src: "https://a.pub.network/wheelofnames-com/pubfig.min.js",
                            crossorigin: "",
                            async: !0,
                            "data-cfasync": !1
                        }]
                    }),
                    window.freestar = window.freestar || {};
                    const e = window.freestar;
                    e.queue = e.queue || [],
                    e.config = e.config || {},
                    e.config.enabled_slots = [],
                    e.initCallback = function() {
                        0 === e.config.enabled_slots.length ? e.initCallbackCalled = !1 : e.newAdSlots(e.config.enabled_slots)
                    }
                    ,
                    e.config.enabled_slots.push({
                        placementName: "wheelofnames_siderail_left",
                        slotId: "wheelofnames_siderail_left"
                    }),
                    e.config.enabled_slots.push({
                        placementName: "wheelofnames_siderail_left_2",
                        slotId: "wheelofnames_siderail_left_2"
                    })
                }
                )),
                (0,
                t.hi)(( () => {
                    console.log("Destroying Freestar ads");
                    const e = window.freestar;
                    e.queue.push(( () => {
                        e.deleteAdSlots()
                    }
                    ))
                }
                )),
                (e, l) => ((0,
                t.uX)(),
                (0,
                t.CE)(t.FK, null, [l[0] || (l[0] = (0,
                t.Lk)("div", {
                    id: "wheelofnames_siderail_left",
                    "data-freestar-ad": "__336x280"
                }, null, -1)), l[1] || (l[1] = (0,
                t.Lk)("div", {
                    id: "wheelofnames_siderail_left_2",
                    "data-freestar-ad": "__336x280"
                }, null, -1)), l[2] || (l[2] = (0,
                t.Lk)("button", {
                    id: "pmLink"
                }, "Privacy Manager", -1))], 64))
            }
        })
          , lt = (0,
        F.A)(et, [["__scopeId", "data-v-3570691a"]])
          , at = lt
          , tt = (0,
        t.pM)({
            __name: "DesktopAdPlaywire",
            setup(e) {
                return (0,
                t.sV)(( () => {
                    console.log("Initializing desktop Playwire ads"),
                    window.ramp = window.ramp || {};
                    const e = window.ramp;
                    e.que = e.que || [],
                    e.passiveMode = !0,
                    window._pwGA4PageviewId = "".concat(Date.now()),
                    window.dataLayer = window.dataLayer || [],
                    window.gtag = window.gtag || function() {
                        dataLayer.push(arguments)
                    }
                    ,
                    gtag("js", new Date),
                    gtag("config", "G-XV614N2RLR", {
                        send_page_view: !1
                    }),
                    gtag("event", "ramp_js", {
                        send_to: "G-XV614N2RLR",
                        pageview_id: window._pwGA4PageviewId
                    }),
                    (0,
                    Za.oU)({
                        script: [{
                            src: "//cdn.intergient.com/1025262/74945/ramp.js",
                            async: !0
                        }]
                    });
                    const l = [{
                        selectorId: "top-med-rect",
                        type: "med_rect_atf"
                    }, {
                        selectorId: "bottom-med-rect",
                        type: "med_rect_btf"
                    }, {
                        type: "bottom_rail"
                    }];
                    function a() {
                        e.addUnits(l).then(( () => {
                            e.displayUnits()
                        }
                        )).catch((l => {
                            e.displayUnits(),
                            console.log(l)
                        }
                        ))
                    }
                    e.que.push(a)
                }
                )),
                (0,
                t.hi)(( () => {
                    console.log("Destroying Playwire ads");
                    const e = window.ramp;
                    "function" === typeof e.destroyUnits && e.destroyUnits("all")
                }
                )),
                (e, l) => ((0,
                t.uX)(),
                (0,
                t.CE)(t.FK, null, [l[0] || (l[0] = (0,
                t.Lk)("div", {
                    id: "top-med-rect"
                }, null, -1)), l[1] || (l[1] = (0,
                t.Lk)("div", {
                    id: "bottom-med-rect"
                }, null, -1))], 64))
            }
        })
          , ot = tt
          , nt = ot
          , st = {
            key: 0,
            class: "root"
        }
          , it = {
            class: "ad-declaration"
        }
          , ut = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        }
          , ct = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        }
          , rt = {
            key: 0,
            class: "ad-declaration"
        }
          , dt = {
            __name: "DesktopAd",
            setup(e) {
                const l = (0,
                i.Pj)()
                  , {t: a} = (0,
                r.s9)()
                  , n = (0,
                t.EW)(( () => l.getters.advertiser))
                  , u = (0,
                t.EW)(( () => !c.value && n.value && "none" !== n.value))
                  , c = (0,
                o.KR)(!1)
                  , d = (0,
                o.KR)(!1);
                function v() {
                    h.sx("Wheel", "HideDesktopAd", ""),
                    c.value = !0
                }
                function p() {
                    d.value = !d.value,
                    h.sx("Wheel", "ToggleBadAdInstructions", d.value ? "Show" : "Hide")
                }
                return (e, l) => {
                    const i = (0,
                    t.g2)("q-btn");
                    return u.value ? ((0,
                    t.uX)(),
                    (0,
                    t.CE)("div", st, [(0,
                    t.Lk)("div", it, [(0,
                    t.Lk)("span", ut, [(0,
                    t.eW)((0,
                    s.v_)((0,
                    o.R1)(a)("app.Report bad ad")) + " ", 1), (0,
                    t.bF)(i, {
                        onClick: l[0] || (l[0] = e => p()),
                        icon: "fas fa-flag",
                        flat: "",
                        round: "",
                        size: "sm"
                    })]), (0,
                    t.Lk)("span", ct, [(0,
                    t.eW)((0,
                    s.v_)((0,
                    o.R1)(a)("app.Close ad")) + " ", 1), (0,
                    t.bF)(i, {
                        onClick: l[1] || (l[1] = e => v()),
                        icon: "fas fa-times-circle",
                        flat: "",
                        round: "",
                        size: "sm"
                    })])]), d.value ? ((0,
                    t.uX)(),
                    (0,
                    t.CE)("div", rt, l[2] || (l[2] = [(0,
                    t.Fv)('<div class="card" data-v-76ed4eb4><div class="card-header" data-v-76ed4eb4><div class="card-header-title" data-v-76ed4eb4> How to report an inappropriate ad </div></div><div class="card-content" data-v-76ed4eb4><ol data-v-76ed4eb4><li data-v-76ed4eb4> Take a screenshot of this page. (Unsure how to take a screenshot? <a target="_new" href="https://www.take-a-screenshot.org/" data-v-76ed4eb4>See instructions here</a>.) </li><li data-v-76ed4eb4> Create an email with the subject line <b data-v-76ed4eb4>Bad ad</b></li><li data-v-76ed4eb4> Attach the screenshot to the email and send it to admin@wheelofnames.com. </li></ol></div></div>', 1)]))) : (0,
                    t.Q3)("", !0), "freestar" !== n.value || c.value ? (0,
                    t.Q3)("", !0) : ((0,
                    t.uX)(),
                    (0,
                    t.Wv)(at, {
                        key: 1
                    })), "playwire" !== n.value || c.value ? (0,
                    t.Q3)("", !0) : ((0,
                    t.uX)(),
                    (0,
                    t.Wv)(nt, {
                        key: 2
                    }))])) : (0,
                    t.Q3)("", !0)
                }
            }
        }
          , vt = (0,
        F.A)(dt, [["__scopeId", "data-v-76ed4eb4"]])
          , ht = vt;
        b()(dt, "components", {
            QBtn: g.A
        });
        const pt = (0,
        t.pM)({
            __name: "MobileAdFreestar",
            setup(e) {
                return (0,
                t.sV)(( () => {
                    console.log("Initializing mobile Freestar ad"),
                    (0,
                    Za.oU)({
                        link: [{
                            href: "https://a.pub.network/",
                            crossorigin: "",
                            type: "text/javascript"
                        }, {
                            rel: "preconnect",
                            href: "https://b.pub.network/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://c.pub.network/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://d.pub.network/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://c.amazon-adsystem.com",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://s.amazon-adsystem.com",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://btloader.com/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://api.btloader.com/",
                            crossorigin: ""
                        }, {
                            rel: "preconnect",
                            href: "https://cdn.confiant-integrations.net",
                            crossorigin: ""
                        }],
                        script: [{
                            src: "https://a.pub.network/wheelofnames-com/pubfig.min.js",
                            crossorigin: "",
                            async: !0,
                            "data-cfasync": !1
                        }]
                    }),
                    window.freestar = window.freestar || {};
                    const e = window.freestar;
                    e.queue = e.queue || [],
                    e.config = e.config || {},
                    e.config.enabled_slots = [],
                    e.initCallback = function() {
                        0 === e.config.enabled_slots.length ? e.initCallbackCalled = !1 : e.newAdSlots(e.config.enabled_slots)
                    }
                }
                )),
                (e, l) => null
            }
        })
          , ft = pt
          , gt = ft
          , mt = {
            __name: "MobileAdPlaywire",
            setup(e) {
                return (0,
                t.sV)(( () => {
                    console.log("Initializing mobile Playwire ad"),
                    window.ramp = window.ramp || {};
                    const e = window.ramp;
                    e.que = e.que || [],
                    e.passiveMode = !0,
                    window._pwGA4PageviewId = "".concat(Date.now()),
                    window.dataLayer = window.dataLayer || [],
                    window.gtag = window.gtag || function() {
                        dataLayer.push(arguments)
                    }
                    ,
                    gtag("js", new Date),
                    gtag("config", "G-XV614N2RLR", {
                        send_page_view: !1
                    }),
                    gtag("event", "ramp_js", {
                        send_to: "G-XV614N2RLR",
                        pageview_id: window._pwGA4PageviewId
                    }),
                    (0,
                    Za.oU)({
                        script: [{
                            src: "//cdn.intergient.com/1025262/74945/ramp.js",
                            async: !0
                        }]
                    });
                    const l = [{
                        type: "bottom_rail"
                    }];
                    function a() {
                        e.addUnits(l).then(( () => {
                            e.displayUnits()
                        }
                        )).catch((l => {
                            e.displayUnits(),
                            console.log(l)
                        }
                        ))
                    }
                    e.que.push(a)
                }
                )),
                (e, l) => null
            }
        }
          , bt = mt
          , kt = bt
          , wt = {
            __name: "MobileAd",
            setup(e) {
                const l = (0,
                i.Pj)()
                  , a = (0,
                t.EW)(( () => l.getters.advertiser));
                return (e, l) => ((0,
                t.uX)(),
                (0,
                t.CE)(t.FK, null, ["freestar" === a.value ? ((0,
                t.uX)(),
                (0,
                t.Wv)(gt, {
                    key: 0
                })) : (0,
                t.Q3)("", !0), "playwire" === a.value ? ((0,
                t.uX)(),
                (0,
                t.Wv)(kt, {
                    key: 1
                })) : (0,
                t.Q3)("", !0)], 64))
            }
        }
          , _t = wt
          , yt = _t;
        var Ft = a(4089)
          , Wt = a(2019)
          , Rt = a(2368);
        const Lt = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
          , At = "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets.readonly";
        let Ct;
        function qt(e) {
            return Ct = e,
            new Promise((function(e, l) {
                gapi.load("auth2:client:picker", (function() {
                    gapi.client.init({
                        apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                        discoveryDocs: Lt,
                        clientId: "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com",
                        scope: At
                    }).then(( () => {
                        gapi.client.setToken({
                            access_token: Ct
                        }),
                        e()
                    }
                    ))
                }
                ))
            }
            ))
        }
        function St() {
            return new Promise((function(e, l) {
                const a = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS)
                  , t = (new google.picker.PickerBuilder).enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId("1096958520212").setOAuthToken(Ct).addView(a).setDeveloperKey("AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g").setCallback((function(a) {
                    if ("cancel" == a.action && l("No spreadsheet picked"),
                    "picked" == a.action && a.docs.length > 0) {
                        const l = a.docs[0].id;
                        e(l)
                    }
                }
                )).setTitle("Select a spreadsheet").build();
                t.setVisible(!0)
            }
            ))
        }
        const xt = {
            key: 0,
            style: {
                "text-align": "center"
            }
        }
          , Qt = {
            class: "banner-text"
        }
          , Dt = {
            __name: "MaintenanceBanner",
            setup(e) {
                const l = (0,
                i.Pj)()
                  , a = (0,
                o.KR)(!0)
                  , n = () => {
                    a.value = !1
                }
                ;
                return (e, i) => a.value && (0,
                o.R1)(l).getters.maintenanceMessage ? ((0,
                t.uX)(),
                (0,
                t.CE)("div", xt, [i[1] || (i[1] = (0,
                t.Lk)("span", {
                    class: "banner-left"
                }, "    ", -1)), (0,
                t.Lk)("span", Qt, (0,
                s.v_)((0,
                o.R1)(l).getters.maintenanceMessage), 1), i[2] || (i[2] = (0,
                t.Lk)("span", {
                    class: "banner-right"
                }, "    ", -1)), (0,
                t.Lk)("span", null, [(0,
                t.Lk)("i", {
                    class: "fas fa-times close-icon",
                    onClick: i[0] || (i[0] = e => n())
                })])])) : (0,
                t.Q3)("", !0)
            }
        }
          , Vt = (0,
        F.A)(Dt, [["__scopeId", "data-v-03e72d16"]])
          , Et = Vt
          , Kt = {
            key: 0
        }
          , Xt = {
            key: 1
        }
          , It = {
            class: "q-mt-md"
        }
          , Tt = {
            key: 0
        }
          , Ut = {
            key: 1
        }
          , Pt = {
            class: "q-gutter-x-md"
        }
          , jt = {
            class: "q-mt-md"
        }
          , Mt = {
            key: 0
        }
          , Bt = {
            key: 1
        }
          , Ot = {
            __name: "WheelLocationDialog",
            setup(e, {expose: l}) {
                const {t: a} = (0,
                r.s9)()
                  , n = (0,
                o.KR)(!1)
                  , i = (0,
                o.KR)("");
                let u, c;
                function d(e) {
                    return i.value = e,
                    n.value = !0,
                    new Promise(( (e, l) => {
                        u = e,
                        c = l
                    }
                    ))
                }
                function v(e) {
                    (0,
                    h.sx)("Wheel", "WheelLocationDialog", e),
                    u(e),
                    n.value = !1
                }
                return l({
                    askUserForLocation: d
                }),
                (e, l) => {
                    const u = (0,
                    t.g2)("q-space")
                      , c = (0,
                    t.g2)("q-card-section")
                      , r = (0,
                    t.g2)("q-icon")
                      , d = (0,
                    t.g2)("q-btn")
                      , h = (0,
                    t.g2)("router-link")
                      , p = (0,
                    t.g2)("q-card")
                      , f = (0,
                    t.g2)("q-dialog");
                    return (0,
                    t.uX)(),
                    (0,
                    t.Wv)(f, {
                        modelValue: n.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e => n.value = e)
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(p, {
                            style: {
                                width: "400px"
                            }
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(c, {
                                class: "row items-center text-h6",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.k6)(( () => ["save" === i.value ? ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", Kt, [l[3] || (l[3] = (0,
                                t.Lk)("i", {
                                    class: "fas fa-save"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(a)("savedialog.Save wheel")), 1)])) : ((0,
                                t.uX)(),
                                (0,
                                t.CE)("div", Xt, [l[4] || (l[4] = (0,
                                t.Lk)("i", {
                                    class: "fas fa-folder-open"
                                }, null, -1)), (0,
                                t.eW)(" " + (0,
                                s.v_)((0,
                                o.R1)(a)("opendialog.Open wheel")), 1)])), (0,
                                t.bF)(u), (0,
                                t.bF)(De.A)])),
                                _: 1
                            }), (0,
                            t.bF)(c, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.k6)(( () => [(0,
                                t.bF)(d, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    padding: "lg",
                                    onClick: l[0] || (l[0] = e => v("cloud")),
                                    style: {
                                        width: "100%"
                                    }
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.Lk)("div", null, [(0,
                                    t.bF)(r, {
                                        name: "fas fa-cloud",
                                        size: "8em"
                                    }), (0,
                                    t.Lk)("div", It, ["save" === i.value ? ((0,
                                    t.uX)(),
                                    (0,
                                    t.CE)("span", Tt, (0,
                                    s.v_)((0,
                                    o.R1)(a)("savedialog.Save to the cloud (recommended)")), 1)) : ((0,
                                    t.uX)(),
                                    (0,
                                    t.CE)("span", Ut, (0,
                                    s.v_)((0,
                                    o.R1)(a)("opendialog.Open from the cloud (recommended)")), 1))])])])),
                                    _: 1
                                }), (0,
                                t.bF)(d, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "grey-7",
                                    padding: "sm",
                                    onClick: l[1] || (l[1] = e => v("local")),
                                    style: {
                                        width: "100%"
                                    }
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.Lk)("div", Pt, [(0,
                                    t.bF)(r, {
                                        name: "fas fa-hard-drive",
                                        size: "4em"
                                    }), (0,
                                    t.Lk)("span", jt, ["save" === i.value ? ((0,
                                    t.uX)(),
                                    (0,
                                    t.CE)("span", Mt, (0,
                                    s.v_)((0,
                                    o.R1)(a)("savedialog.Save to a local file")), 1)) : ((0,
                                    t.uX)(),
                                    (0,
                                    t.CE)("span", Bt, (0,
                                    s.v_)((0,
                                    o.R1)(a)("opendialog.Open a local file")), 1))])])])),
                                    _: 1
                                }), (0,
                                t.Lk)("div", null, [l[5] || (l[5] = (0,
                                t.Lk)("i", {
                                    class: "fa-regular fa-circle-question q-mr-sm"
                                }, null, -1)), (0,
                                t.bF)(h, {
                                    target: "_blank",
                                    to: "/faq/saving"
                                }, {
                                    default: (0,
                                    t.k6)(( () => [(0,
                                    t.eW)((0,
                                    s.v_)((0,
                                    o.R1)(a)("app.Help me choose")), 1)])),
                                    _: 1
                                })])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])
                }
            }
        }
          , Gt = Ot
          , zt = Gt;
        b()(Ot, "components", {
            QDialog: G.A,
            QCard: z.A,
            QCardSection: N.A,
            QSpace: A.A,
            QBtn: g.A,
            QIcon: D.A
        });
        var Nt = a(2826);
        const Ht = {
            class: "q-pa-md"
        }
          , Jt = {
            style: {
                height: "600px"
            }
        }
          , Yt = {
            key: 0
        }
          , $t = {
            class: "q-px-md q-pt-md row"
        }
          , Zt = {
            class: "col-3"
        }
          , eo = {
            class: "col-6"
        }
          , lo = {
            key: 0
        }
          , ao = {
            key: 1
        }
          , to = 56
          , oo = 16
          , no = {
            __name: "EditWheelPage",
            setup(e) {
                const l = (0,
                i.Pj)()
                  , f = (0,
                u.rd)()
                  , g = (0,
                u.lq)()
                  , m = (0,
                c.A)()
                  , {t: b, locale: k, setLocaleMessage: w} = (0,
                r.s9)()
                  , {shouldUseMobileLayout: _} = (0,
                Nt.t)();
                async function y(e) {
                    (0,
                    h.sx)("Wheel", "ChangeLanguage"),
                    F(e),
                    f.push(`/${(0,
                    h.ek)(e)}`).catch((e => {
                        console.error(e)
                    }
                    ))
                }
                async function F(e) {
                    if (!e)
                        return;
                    if (!W(e))
                        return;
                    R(e);
                    const l = await L(e);
                    w(e, l),
                    k.value = e
                }
                function W(e) {
                    return p.tr().find((l => l.name == e))
                }
                function R(e) {
                    const l = p.ss(e, navigator.languages);
                    l && setTimeout((async () => {
                        const e = await L(l)
                          , a = e["app"]["Click the Language menu"];
                        (0,
                        j.Ds)(a)
                    }
                    ), 3e3)
                }
                async function L(e) {
                    const l = p.q9(e)
                      , t = await a(6240)(`./${l}`);
                    return t.default
                }
                (0,
                t.sV)((async () => {
                    await F(g.params.lang || "en"),
                    l.dispatch("loadInitialEditableWheel"),
                    l.dispatch("loadServerSettings"),
                    await l.dispatch("loadPreferences"),
                    m.dark.set(l.getters.darkMode),
                    setTimeout(( () => {
                        l.getters.wheelIsAdvanced && !l.getters.wheelConfig.usesAdvancedFeatures() && ((0,
                        h.sx)("Wheel", "AdvancedWheelAutoDowngraded"),
                        l.dispatch("setAdvanced", !1))
                    }
                    ), 200)
                }
                ));
                const {width: A, height: C} = (0,
                d.lWr)()
                  , q = (0,
                t.EW)(( () => C.value - (to + oo)))
                  , S = (0,
                o.KR)(null)
                  , x = (0,
                o.KR)(null)
                  , Q = (0,
                o.KR)(null)
                  , D = (0,
                t.EW)(( () => l.getters.wheelConfig));
                function V() {
                    (0,
                    h.sx)("Wheel", "NewWheel"),
                    l.commit("saveWheelConfigForUndo"),
                    l.dispatch("resetWheel"),
                    E(),
                    (0,
                    j.$3)(b, b("app.Loaded default names and options"), ( () => {
                        (0,
                        h.sx)("Wheel", "UndoNewWheel"),
                        l.commit("undoWheelConfigChange")
                    }
                    ));
                    const e = p.qq(location.hostname, k.value);
                    f.replace(e)
                }
                function E() {
                    S.value.resetRotation()
                }
                function K() {
                    const e = p.qq(location.hostname, k.value);
                    window.history.replaceState({}, "", e)
                }
                function X(e) {
                    D.value.displayWinnerDialog && x.value.show(e),
                    D.value.animateWinner && Q.value.show(e),
                    D.value.launchConfetti && (0,
                    Wt.q)(D.value.getCoalescedColors())
                }
                (0,
                t.wB)(( () => D.value), ( () => {
                    Ft.qX(D.value.duringSpinSound, D.value.afterSpinSound)
                }
                ));
                const I = (0,
                o.KR)(null)
                  , M = (0,
                o.KR)(null);
                async function B() {
                    let e;
                    do {
                        let a = l.getters.wheelLocation;
                        "cloud" !== a && (a = await J.value.askUserForLocation("open"),
                        l.commit("setWheelLocation", a)),
                        e = await ("local" === a ? z() : O()),
                        "switch" === e && l.commit("switchWheelLocation")
                    } while ("switch" === e)
                }
                async function O() {
                    try {
                        if (!await G()) {
                            const e = await I.value.askUserToLogIn("open");
                            if ("switch" === e)
                                return l.commit("switchWheelLocation"),
                                z()
                        }
                        if (await G())
                            return await M.value.show()
                    } catch (e) {
                        (0,
                        j.Qg)(b, e),
                        (0,
                        h.to)("OpenWheelError", e)
                    }
                }
                async function G() {
                    return await l.dispatch("userIsLoggedIn")
                }
                async function z() {
                    try {
                        const e = await (0,
                        v.lt)({
                            mimeTypes: ["text/plain", "application/json"],
                            extensions: [".json", ".wheel"]
                        })
                          , a = await e.text()
                          , t = JSON.parse(a);
                        l.commit("setWheelConfig", t)
                    } catch (e) {
                        if (e instanceof DOMException && e.message.includes("abort"))
                            return;
                        (0,
                        j.Qg)(b, e),
                        (0,
                        h.to)("OpenWheelFromLocalFileError", e)
                    }
                }
                const N = (0,
                o.KR)(null)
                  , H = (0,
                o.KR)(null)
                  , J = (0,
                o.KR)(null);
                async function $() {
                    let e;
                    do {
                        const a = l.getters.wheelLocation || await J.value.askUserForLocation("save");
                        l.commit("setWheelLocation", a),
                        e = await ("local" === a ? ee() : Z()),
                        "switch" === e && l.commit("switchWheelLocation")
                    } while ("switch" === e)
                }
                async function Z() {
                    if (D.value.isTooBigForDatabase())
                        return (0,
                        h.sx)("Wheel", "WheelTooBigForDatabase", ""),
                        await (0,
                        j.OQ)(b, b("savedialog.Thats a lot of images"), b("savedialog.Do you want to save it as a local file instead?")) ? ee() : void 0;
                    try {
                        if (!await G()) {
                            const e = await I.value.askUserToLogIn("save");
                            if ("switch" === e)
                                return l.commit("switchWheelLocation"),
                                ee()
                        }
                        if (await G()) {
                            const e = await N.value.show();
                            return K(),
                            e
                        }
                    } catch (e) {
                        (0,
                        j.Qg)(b, e),
                        (0,
                        h.to)("SaveWheelError", e)
                    }
                }
                function ee() {
                    return H.value.show()
                }
                const le = (0,
                o.KR)(null)
                  , ae = (0,
                o.KR)(null)
                  , te = (0,
                o.KR)(null)
                  , oe = (0,
                o.KR)(null)
                  , ne = (0,
                o.KR)(null);
                async function se() {
                    if (D.value.isTooBigForDatabase())
                        return (0,
                        h.sx)("Wheel", "WheelTooBigForDatabase", ""),
                        void (0,
                        j.ic)(b, b("savedialog.Sorry, too many images"));
                    try {
                        const {openMySharedWheels: e, openShareSettings: l} = await le.value.show();
                        if (e && ae.value.show(),
                        l) {
                            const e = await te.value.askUserForSettings();
                            if (!e)
                                return;
                            let l, a;
                            if ("live" === e) {
                                const e = await ne.value.show();
                                if (!e)
                                    return;
                                l = e.editPermissions,
                                a = e.password
                            }
                            await oe.value.share(e, l, a)
                        }
                    } catch (e) {
                        (0,
                        j.Qg)(b, e),
                        (0,
                        h.to)("ShareWheelError", e)
                    }
                }
                const ie = (0,
                t.EW)(( () => m.fullscreen.isActive))
                  , ue = (0,
                t.EW)(( () => !ie.value && !m.platform.is.capacitor && !m.platform.within.iframe))
                  , re = ((0,
                t.EW)(( () => window.location.host.includes("preview"))),
                (0,
                t.EW)(( () => window.location.pathname.includes("/noads"))))
                  , de = (0,
                t.EW)(( () => m.platform.is.desktop && !re.value))
                  , ve = (0,
                o.KR)(null);
                function he() {
                    ve.value.show()
                }
                const pe = (0,
                o.KR)(null)
                  , fe = (0,
                o.KR)(null)
                  , ge = (0,
                o.KR)(null);
                async function me() {
                    l.commit("unlinkSheet");
                    const e = await pe.value.askUserToLogIn();
                    if (e) {
                        await qt(e);
                        const l = await St();
                        if (l) {
                            const {tab: e, column: a, skipFirstRow: t} = await fe.value.askUserToConfigure(l);
                            e && a && ge.value.start(l, e, a, t)
                        }
                    }
                }
                const be = (0,
                o.KR)(null);
                async function ke() {
                    try {
                        await G() || await I.value.askUserToLogIn(),
                        await G() && await be.value.show()
                    } catch (e) {
                        (0,
                        j.Qg)(b, e),
                        (0,
                        h.to)("AccountDialogError", e)
                    }
                }
                const _e = (0,
                o.KR)(null);
                function ye() {
                    _e.value.show()
                }
                const Fe = (0,
                o.KR)(null);
                function We() {
                    Fe.value.show()
                }
                const Re = (0,
                t.EW)(( () => "2672"))
                  , Le = (0,
                t.EW)(( () => l.getters.commitHash));
                return (e, l) => {
                    const a = (0,
                    t.g2)("q-header")
                      , i = (0,
                    t.g2)("q-page-container")
                      , u = (0,
                    t.g2)("q-layout");
                    return (0,
                    t.uX)(),
                    (0,
                    t.CE)(t.FK, null, [(0,
                    t.bF)(u, {
                        view: "hhh lpr fff"
                    }, {
                        default: (0,
                        t.k6)(( () => [(0,
                        t.bF)(a, {
                            reveal: "",
                            elevated: "",
                            class: "bg-primary text-white"
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.bF)(Et), (0,
                            t.bF)(T, {
                                onResetWheel: V,
                                onOpenWheel: B,
                                onSaveWheel: $,
                                onShareWheel: se,
                                onCustomizeWheel: he,
                                onLinkSheet: me,
                                onOpenAccountDialog: ke,
                                onLanguageChanged: y,
                                onOpenLanguages: ye
                            })])),
                            _: 1
                        }), (0,
                        o.R1)(_) ? ((0,
                        t.uX)(),
                        (0,
                        t.Wv)(i, {
                            key: 0
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.Lk)("div", Ht, [(0,
                            t.bo)((0,
                            t.bF)($a, {
                                editable: !ie.value,
                                onEditTitleAndDescription: We
                            }, null, 8, ["editable"]), [[n.aG, D.value.showTitle]]), (0,
                            t.bF)(U.A, {
                                ref_key: "spinningWheel",
                                ref: S,
                                onWheelStopped: X
                            }, null, 512), (0,
                            t.Lk)("div", Jt, [(0,
                            t.bo)((0,
                            t.bF)(qa.A, {
                                showAppInfo: !0
                            }, null, 512), [[n.aG, !ie.value]])])]), ue.value ? ((0,
                            t.uX)(),
                            (0,
                            t.CE)("div", Yt, [l[0] || (l[0] = (0,
                            t.Lk)("hr", null, null, -1)), (0,
                            t.bF)(Oa)])) : (0,
                            t.Q3)("", !0), (0,
                            t.eW)(" " + (0,
                            s.v_)(Re.value) + " / " + (0,
                            s.v_)(Le.value) + " ", 1), (0,
                            t.bF)(yt)])),
                            _: 1
                        })) : ((0,
                        t.uX)(),
                        (0,
                        t.Wv)(i, {
                            key: 1
                        }, {
                            default: (0,
                            t.k6)(( () => [(0,
                            t.Lk)("div", $t, [(0,
                            t.Lk)("div", Zt, [(0,
                            t.bo)((0,
                            t.bF)($a, {
                                editable: !ie.value,
                                onEditTitleAndDescription: We
                            }, null, 8, ["editable"]), [[n.aG, D.value.showTitle]]), de.value ? (0,
                            t.bo)(((0,
                            t.uX)(),
                            (0,
                            t.Wv)(ht, {
                                key: 0
                            }, null, 512)), [[n.aG, !ie.value]]) : (0,
                            t.Q3)("", !0)]), (0,
                            t.Lk)("div", eo, [(0,
                            t.bF)(U.A, {
                                ref_key: "spinningWheel",
                                ref: S,
                                onWheelStopped: X
                            }, null, 512)]), (0,
                            t.Lk)("div", {
                                class: "col-3 q-pb-md",
                                style: (0,
                                s.Tr)("height: " + q.value + "px")
                            }, [(0,
                            t.bo)((0,
                            t.bF)(qa.A, {
                                showAppInfo: !0
                            }, null, 512), [[n.aG, !ie.value]])], 4)]), ue.value ? ((0,
                            t.uX)(),
                            (0,
                            t.CE)("div", lo, [l[1] || (l[1] = (0,
                            t.Lk)("hr", null, null, -1)), (0,
                            t.bF)(Oa)])) : (0,
                            t.Q3)("", !0), ue.value ? ((0,
                            t.uX)(),
                            (0,
                            t.CE)("div", ao, (0,
                            s.v_)(Re.value) + " / " + (0,
                            s.v_)(Le.value), 1)) : (0,
                            t.Q3)("", !0)])),
                            _: 1
                        })), (0,
                        t.bF)(P.A, {
                            ref_key: "winnerDialog",
                            ref: x
                        }, null, 512), (0,
                        t.bF)(Y, {
                            ref_key: "loginDialog",
                            ref: I
                        }, null, 512), (0,
                        t.bF)(ce, {
                            ref_key: "openDialog",
                            ref: M,
                            onResetWheelRotation: E,
                            onResetAddressBar: K
                        }, null, 512), (0,
                        t.bF)(we, {
                            ref_key: "saveCloudDialog",
                            ref: N
                        }, null, 512), (0,
                        t.bF)(Ce, {
                            ref_key: "saveLocalDialog",
                            ref: H
                        }, null, 512), (0,
                        t.bF)(Qe, {
                            ref_key: "shareDialogInfo",
                            ref: le
                        }, null, 512), (0,
                        t.bF)(Je, {
                            ref_key: "shareDialogMySharedWheels",
                            ref: ae
                        }, null, 512), (0,
                        t.bF)(ul, {
                            ref_key: "shareDialogSettings",
                            ref: te
                        }, null, 512), (0,
                        t.bF)(fl, {
                            ref_key: "shareDialogLink",
                            ref: oe
                        }, null, 512), (0,
                        t.bF)(Wl, {
                            ref_key: "liveWheelPermissionDialog",
                            ref: ne
                        }, null, 512), (0,
                        t.bF)(Rl.A, {
                            ref_key: "customizeDialog",
                            ref: ve
                        }, null, 512), (0,
                        t.bF)(xl, {
                            ref_key: "sheetLoginDialog",
                            ref: pe
                        }, null, 512), (0,
                        t.bF)($l, {
                            ref_key: "sheetConfigDialog",
                            ref: fe
                        }, null, 512), (0,
                        t.bF)(Ca, {
                            ref_key: "sheetDataPump",
                            ref: ge
                        }, null, 512), (0,
                        t.bF)(ca, {
                            ref_key: "accountDialog",
                            ref: be
                        }, null, 512), (0,
                        t.bF)(ya, {
                            ref_key: "languageDialog",
                            ref: _e,
                            onLanguageChanged: y
                        }, null, 512), (0,
                        t.bF)(Ra, {
                            ref_key: "titleAndDescriptionDialog",
                            ref: Fe
                        }, null, 512), (0,
                        t.bF)(zt, {
                            ref_key: "wheelLocationDialog",
                            ref: J
                        }, null, 512)])),
                        _: 1
                    }), (0,
                    t.bF)(Rt.A, {
                        ref_key: "winnerAnimation",
                        ref: Q
                    }, null, 512)], 64)
                }
            }
        };
        var so = a(2008)
          , io = a(8416)
          , uo = a(9967);
        const co = no
          , ro = co;
        b()(no, "components", {
            QLayout: so.A,
            QHeader: io.A,
            QPageContainer: uo.A
        })
    }
}]);
