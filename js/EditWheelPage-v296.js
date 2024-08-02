"use strict";
(globalThis["webpackChunkwheel_of_names_quasar"] = globalThis["webpackChunkwheel_of_names_quasar"] || []).push([[2265], {
    56563: (e,l,a)=>{
        a.r(l),
        a.d(l, {
            default: ()=>sn
        });
        a(66204);
        var t = a(59835)
          , o = a(60499)
          , n = a(61957)
          , i = a(86970)
          , s = a(33100)
          , u = a(18910)
          , c = a(19302)
          , r = a(78110)
          , d = a(3967)
          , m = a(73295)
          , w = a(16707)
          , p = a(72788);
        const h = {
            emits: ["open-languages"],
            setup(e, {emit: l}) {
                const {locale: a} = (0,
                r.QT)()
                  , n = (0,
                t.Fl)((()=>p.NB().find((e=>e.name == a.value))?.humanName));
                return (e,a)=>{
                    const i = (0,
                    t.up)("q-btn");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(i, {
                        stretch: "",
                        flat: "",
                        "no-caps": "",
                        icon: "fas fa-globe",
                        label: (0,
                        o.SU)(n),
                        "aria-label": "Language",
                        onClick: a[0] || (a[0] = e=>l("open-languages"))
                    }, null, 8, ["label"])
                }
            }
        };
        var f = a(68879)
          , v = a(69984)
          , g = a.n(v);
        const k = h
          , W = k;
        g()(h, "components", {
            QBtn: f.Z
        });
        const _ = e=>((0,
        t.dD)("data-v-3fc0f3a0"),
        e = e(),
        (0,
        t.Cn)(),
        e)
          , y = _((()=>(0,
        t._)("img", {
            width: "38",
            height: "38",
            src: "/images/logo-dark-background-38.png"
        }, null, -1)))
          , S = {
            class: "toolbar"
        }
          , U = {
            emits: ["reset-wheel", "open-wheel", "save-wheel", "share-wheel", "customize-wheel", "link-sheet", "open-account-dialog", "open-languages"],
            setup(e, {emit: l}) {
                const a = (0,
                s.oR)()
                  , d = (0,
                u.tv)()
                  , {t: m, locale: p} = (0,
                r.QT)()
                  , h = (0,
                c.Z)()
                  , f = h.platform.is.capacitor ? "Wheel of Names" : "wheelofnames.com"
                  , v = (0,
                t.Fl)((()=>"/" + (0,
                w.getNonEnglishLocale)(p.value)))
                  , g = (0,
                t.Fl)((()=>h.fullscreen.isActive))
                  , k = (0,
                t.Fl)((()=>a.getters.wheelIsBusy))
                  , _ = (0,
                t.Fl)((()=>a.getters.sheetLinked))
                  , U = (0,
                t.Fl)((()=>!g.value && !_.value))
                  , b = (0,
                t.Fl)((()=>!_.value))
                  , C = (0,
                t.Fl)((()=>!g.value))
                  , q = (0,
                t.Fl)((()=>!g.value))
                  , Z = (0,
                t.Fl)((()=>!g.value))
                  , x = (0,
                t.Fl)((()=>!g.value))
                  , Q = (0,
                t.Fl)((()=>!g.value && _.value))
                  , D = (0,
                t.Fl)((()=>!g.value))
                  , z = (0,
                t.Fl)((()=>!g.value));
                function V() {
                    h.fullscreen.isActive ? (0,
                    w.trackEvent)("Wheel", "ExitFullscreen") : (0,
                    w.trackEvent)("Wheel", "EnterFullscreen"),
                    h.fullscreen.toggle()
                }
                function F() {
                    h.dark.toggle(),
                    h.dark.isActive ? (0,
                    w.trackEvent)("Wheel", "EnterDarkMode") : (0,
                    w.trackEvent)("Wheel", "EnterLightMode"),
                    a.commit("setDarkMode", h.dark.isActive)
                }
                function E() {
                    const e = a.getters.version
                      , l = (0,
                    w.getFeedbackFormUrl)(navigator.userAgent, e);
                    window.open(l, "_new")
                }
                function H(e) {
                    l("open-wheel")
                }
                function T(e) {
                    l("save-wheel")
                }
                function L(e) {
                    l("reset-wheel")
                }
                return (e,s)=>{
                    const u = (0,
                    t.up)("q-avatar")
                      , c = (0,
                    t.up)("q-toolbar-title")
                      , r = (0,
                    t.up)("q-btn")
                      , w = (0,
                    t.up)("q-space")
                      , p = (0,
                    t.up)("q-tooltip")
                      , h = (0,
                    t.up)("q-icon")
                      , _ = (0,
                    t.up)("q-item-section")
                      , A = (0,
                    t.up)("q-item-label")
                      , I = (0,
                    t.up)("q-item")
                      , j = (0,
                    t.up)("q-separator")
                      , R = (0,
                    t.up)("q-list")
                      , P = (0,
                    t.up)("q-btn-dropdown")
                      , B = (0,
                    t.up)("q-menu")
                      , O = (0,
                    t.up)("q-toolbar")
                      , N = (0,
                    t.Q2)("close-popup");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(O, {
                        class: "q-px-none"
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            onClick: s[0] || (s[0] = e=>(0,
                            o.SU)(d).push((0,
                            o.SU)(v)))
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(c, {
                                class: "row no-wrap items-center"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(u, {
                                    class: "desktop",
                                    style: {
                                        "margin-right": "8px"
                                    }
                                }, {
                                    default: (0,
                                    t.w5)((()=>[y])),
                                    _: 1
                                }), (0,
                                t._)("span", null, (0,
                                i.zw)((0,
                                o.SU)(f)), 1)])),
                                _: 1
                            })])),
                            _: 1
                        }), (0,
                        t.Wm)(w), (0,
                        t._)("div", S, [(0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            icon: "fas fa-palette",
                            label: (0,
                            o.SU)(m)("common.Customize"),
                            "aria-label": "Customize",
                            onClick: s[1] || (s[1] = e=>l("customize-wheel"))
                        }, null, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(x)]]), (0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            icon: "fas fa-file",
                            label: (0,
                            o.SU)(m)("toolbar.New"),
                            "aria-label": "New",
                            onClick: L
                        }, null, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(U)]]), (0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            icon: "fa fa-folder-open",
                            label: (0,
                            o.SU)(g) ? "" : (0,
                            o.SU)(m)("common.Open"),
                            "aria-label": "Open",
                            onClick: H
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            o.SU)(g) ? ((0,
                            t.wg)(),
                            (0,
                            t.j4)(p, {
                                key: 0
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Uk)((0,
                                i.zw)((0,
                                o.SU)(m)("common.Open")), 1)])),
                                _: 1
                            })) : (0,
                            t.kq)("", !0)])),
                            _: 1
                        }, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(b)]]), (0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k) || (0,
                            o.SU)(a).getters.readOnlyMode,
                            icon: "fa fa-save",
                            label: (0,
                            o.SU)(m)("common.Save"),
                            "aria-label": "Save",
                            onClick: T
                        }, null, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(C)]]), (0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k) || (0,
                            o.SU)(a).getters.readOnlyMode,
                            icon: "fa fa-share-alt",
                            label: (0,
                            o.SU)(m)("toolbar.Share"),
                            "aria-label": "Share",
                            onClick: s[2] || (s[2] = e=>l("share-wheel"))
                        }, null, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(q)]]), (0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            icon: "fa fa-search",
                            label: (0,
                            o.SU)(m)("toolbar.Gallery"),
                            "aria-label": "Gallery",
                            onClick: s[3] || (s[3] = e=>(0,
                            o.SU)(d).push("/gallery"))
                        }, null, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(Z)]]), (0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            "aria-label": "Fullscreen",
                            onClick: V,
                            icon: (0,
                            o.SU)(g) ? "fa fa-compress" : "fa fa-expand"
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            o.SU)(g) ? ((0,
                            t.wg)(),
                            (0,
                            t.j4)(p, {
                                key: 0
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Uk)((0,
                                i.zw)((0,
                                o.SU)(m)("toolbar.Exit fullscreen")), 1)])),
                                _: 1
                            })) : (0,
                            t.kq)("", !0), (0,
                            o.SU)(g) ? (0,
                            t.kq)("", !0) : ((0,
                            t.wg)(),
                            (0,
                            t.j4)(p, {
                                key: 1
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Uk)((0,
                                i.zw)((0,
                                o.SU)(m)("toolbar.Fullscreen")), 1)])),
                                _: 1
                            }))])),
                            _: 1
                        }, 8, ["disable", "icon"]), (0,
                        t.wy)((0,
                        t.Wm)(r, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            icon: "fa fa-unlink",
                            label: (0,
                            o.SU)(m)("toolbar.Unlink Google Spreadsheet"),
                            "aria-label": "Unlink Google Spreadsheet",
                            onClick: s[4] || (s[4] = e=>(0,
                            o.SU)(a).commit("unlinkSheet"))
                        }, null, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(Q)]]), (0,
                        t.wy)((0,
                        t.Wm)(P, {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0,
                            o.SU)(k),
                            "aria-label": "More",
                            label: (0,
                            o.SU)(m)("toolbar.More")
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(R, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.wy)(((0,
                                t.wg)(),
                                (0,
                                t.j4)(I, {
                                    clickable: "",
                                    onClick: E
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fa fa-comment"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Feedback")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[N]]), (0,
                                t.Wm)(I, {
                                    clickable: "",
                                    onClick: s[5] || (s[5] = e=>(0,
                                    o.SU)(d).push("/faq"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fa fa-question-circle"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.FAQ")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.Wm)(I, {
                                    clickable: "",
                                    onClick: s[6] || (s[6] = e=>(0,
                                    o.SU)(d).push("/user-reviews-and-tutorials"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fab fa-youtube"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.User reviews and tutorials")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.Wm)(I, {
                                    clickable: "",
                                    onClick: s[7] || (s[7] = e=>(0,
                                    o.SU)(d).push("/how-to-use-in-the-classroom"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fas fa-chalkboard-teacher"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Use this in the classroom")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.Wm)(I, {
                                    clickable: "",
                                    onClick: s[8] || (s[8] = e=>(0,
                                    o.SU)(d).push("/changelog"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fas fa-list-alt"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Changelog")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.Wm)(I, {
                                    clickable: "",
                                    onClick: s[9] || (s[9] = e=>(0,
                                    o.SU)(d).push("/privacy-policy"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fas fa-user-secret"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Privacy policy")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.Wm)(I, {
                                    clickable: "",
                                    onClick: s[10] || (s[10] = e=>(0,
                                    o.SU)(d).push("/faq/terms"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fas fa-balance-scale"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("appInfo.Terms of service")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                t.Wm)(j), (0,
                                t.wy)(((0,
                                t.wg)(),
                                (0,
                                t.j4)(I, {
                                    clickable: "",
                                    onClick: s[11] || (s[11] = e=>l("link-sheet"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fa fa-link"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Link Google Spreadsheet")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[N]]), (0,
                                t.wy)(((0,
                                t.wg)(),
                                (0,
                                t.j4)(I, {
                                    clickable: "",
                                    onClick: F
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fas fa-moon"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Uk)((0,
                                        i.zw)((0,
                                        o.SU)(m)("toolbar.Dark mode")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[N]]), (0,
                                t.Wm)(j), (0,
                                t.wy)(((0,
                                t.wg)(),
                                (0,
                                t.j4)(I, {
                                    clickable: "",
                                    onClick: s[12] || (s[12] = e=>l("open-account-dialog"))
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(_, {
                                        side: ""
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(h, {
                                            name: "fas fa-user-alt"
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(_, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(A, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.My account")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })), [[N]])])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["disable", "label"]), [[n.F8, (0,
                        o.SU)(D)]]), (0,
                        t.wy)((0,
                        t.Wm)(W, {
                            disable: (0,
                            o.SU)(k),
                            onOpenLanguages: s[13] || (s[13] = e=>l("open-languages"))
                        }, null, 8, ["disable"]), [[n.F8, (0,
                        o.SU)(z)]])]), (0,
                        t.Wm)(r, {
                            class: "hamburger",
                            round: "",
                            unelevated: "",
                            color: "primary",
                            icon: "fas fa-bars"
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(B, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(R, null, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[14] || (s[14] = e=>l("customize-wheel"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-palette"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Customize")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[15] || (s[15] = e=>l("reset-wheel"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-file"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.New")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[16] || (s[16] = e=>l("open-wheel"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-folder-open"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Open")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        disable: (0,
                                        o.SU)(a).getters.readOnlyMode,
                                        onClick: s[17] || (s[17] = e=>l("save-wheel"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-save"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Save")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }, 8, ["disable"])), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        disable: (0,
                                        o.SU)(a).getters.readOnlyMode,
                                        onClick: s[18] || (s[18] = e=>l("share-wheel"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-share-alt"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Share")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }, 8, ["disable"])), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[19] || (s[19] = e=>(0,
                                        o.SU)(d).push("/gallery"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-search"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Gallery")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: V
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: (0,
                                                o.SU)(g) ? "fa fa-compress" : "fa fa-expand"
                                            }, null, 8, ["name"])])),
                                            _: 1
                                        }), (0,
                                        o.SU)(g) ? (0,
                                        t.kq)("", !0) : ((0,
                                        t.wg)(),
                                        (0,
                                        t.j4)(_, {
                                            key: 0
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Fullscreen")), 1)])),
                                            _: 1
                                        })), (0,
                                        o.SU)(g) ? ((0,
                                        t.wg)(),
                                        (0,
                                        t.j4)(_, {
                                            key: 1
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Exit fullscreen")), 1)])),
                                            _: 1
                                        })) : (0,
                                        t.kq)("", !0)])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: F
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-moon"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Dark mode")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.Wm)(I, {
                                        clickable: "",
                                        onClick: s[20] || (s[20] = e=>l("open-languages"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-globe"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Language")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: E
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-comment"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.Feedback")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[21] || (s[21] = e=>(0,
                                        o.SU)(d).push("/faq"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-question-circle"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("toolbar.FAQ")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[22] || (s[22] = e=>(0,
                                        o.SU)(d).push("/user-reviews-and-tutorials"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fab fa-youtube"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(A, null, {
                                                default: (0,
                                                t.w5)((()=>[(0,
                                                t.Uk)((0,
                                                i.zw)((0,
                                                o.SU)(m)("toolbar.User reviews and tutorials")), 1)])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[23] || (s[23] = e=>(0,
                                        o.SU)(d).push("/how-to-use-in-the-classroom"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-chalkboard-teacher"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(A, null, {
                                                default: (0,
                                                t.w5)((()=>[(0,
                                                t.Uk)((0,
                                                i.zw)((0,
                                                o.SU)(m)("common.Use this in the classroom")), 1)])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]]), (0,
                                    t.Wm)(I, {
                                        clickable: "",
                                        onClick: s[24] || (s[24] = e=>(0,
                                        o.SU)(d).push("/privacy-policy"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-user-secret"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("common.Privacy policy")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.Wm)(I, {
                                        clickable: "",
                                        onClick: s[25] || (s[25] = e=>(0,
                                        o.SU)(d).push("/faq/terms"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fas fa-balance-scale"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)((0,
                                            o.SU)(m)("appInfo.Terms of service")), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    t.wy)(((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(I, {
                                        clickable: "",
                                        onClick: s[26] || (s[26] = e=>l("link-sheet"))
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(_, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(h, {
                                                name: "fa fa-link"
                                            })])),
                                            _: 1
                                        }), (0,
                                        t.Wm)(_, null, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(A, null, {
                                                default: (0,
                                                t.w5)((()=>[(0,
                                                t.Uk)((0,
                                                i.zw)((0,
                                                o.SU)(m)("common.Link Google Spreadsheet")), 1)])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })), [[N]])])),
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
        var b = a(11639)
          , C = a(51663)
          , q = a(81973)
          , Z = a(61357)
          , x = a(90136)
          , Q = a(46858)
          , D = a(18479)
          , z = a(13246)
          , V = a(490)
          , F = a(76749)
          , E = a(22857)
          , H = a(33115)
          , T = a(50926)
          , L = a(56362)
          , A = a(62146);
        const I = (0,
        b.Z)(U, [["__scopeId", "data-v-3fc0f3a0"]])
          , j = I;
        g()(U, "components", {
            QToolbar: C.Z,
            QBtn: f.Z,
            QToolbarTitle: q.Z,
            QAvatar: Z.Z,
            QSpace: x.Z,
            QTooltip: Q.Z,
            QBtnDropdown: D.Z,
            QList: z.Z,
            QItem: V.Z,
            QItemSection: F.Z,
            QIcon: E.Z,
            QItemLabel: H.Z,
            QSeparator: T.Z,
            QMenu: L.Z
        }),
        g()(U, "directives", {
            ClosePopup: A.Z
        });
        var R = a(57908)
          , P = a(6297)
          , B = a(32637)
          , O = function(e, l, a, t) {
            function o(e) {
                return e instanceof a ? e : new a((function(l) {
                    l(e)
                }
                ))
            }
            return new (a || (a = Promise))((function(a, n) {
                function i(e) {
                    try {
                        u(t.next(e))
                    } catch (l) {
                        n(l)
                    }
                }
                function s(e) {
                    try {
                        u(t["throw"](e))
                    } catch (l) {
                        n(l)
                    }
                }
                function u(e) {
                    e.done ? a(e.value) : o(e.value).then(i, s)
                }
                u((t = t.apply(e, l || [])).next())
            }
            ))
        };
        const N = {
            class: "text-h6"
        }
          , M = (0,
        t._)("i", {
            class: "fas fa-user"
        }, null, -1)
          , G = (0,
        t._)("div", {
            id: "auth-container"
        }, null, -1)
          , Y = (0,
        t.aZ)({
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , {t: n} = (0,
                r.QT)()
                  , u = (0,
                o.iH)()
                  , c = (0,
                o.iH)(!1);
                let d;
                function m(e) {
                    return O(this, void 0, void 0, (function*() {
                        if (!(0,
                        w.pageIsInIframe)()) {
                            u.value = e,
                            c.value = !0;
                            try {
                                (0,
                                w.trackEvent)("Wheel", "LoginAttempt", ""),
                                p()
                            } catch (l) {
                                c.value = !1,
                                B.x2(n, l),
                                (0,
                                w.trackEvent)("Wheel", "LoginFailure", null === l || void 0 === l ? void 0 : l.toString())
                            }
                            return new Promise((e=>d = e))
                        }
                    }
                    ))
                }
                function p() {
                    return O(this, void 0, void 0, (function*() {
                        yield a.dispatch("loginWithUi", "auth-container"),
                        (0,
                        w.trackEvent)("Wheel", "LoginSuccess", ""),
                        c.value = !1,
                        d("login")
                    }
                    ))
                }
                function h() {
                    c.value = !1,
                    d("cancel")
                }
                function f() {
                    c.value = !1,
                    d("switch")
                }
                return l({
                    askUserToLogIn: m
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-btn")
                      , r = (0,
                    t.up)("q-card-actions")
                      , d = (0,
                    t.up)("q-card")
                      , m = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(m, {
                        modelValue: c.value,
                        "onUpdate:modelValue": l[3] || (l[3] = e=>c.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(d, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", N, [M, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(n)("common.Log in")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(a, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Uk)((0,
                                i.zw)((0,
                                o.SU)(n)("common.Please choose your sign-in method")), 1)])),
                                _: 1
                            }), (0,
                            t.Wm)(a, null, {
                                default: (0,
                                t.w5)((()=>[G])),
                                _: 1
                            }), (0,
                            t.Wm)(r, {
                                align: u.value ? "between" : "right"
                            }, {
                                default: (0,
                                t.w5)((()=>["save" === u.value ? ((0,
                                t.wg)(),
                                (0,
                                t.j4)(s, {
                                    key: 0,
                                    "no-caps": "",
                                    unelevated: "",
                                    label: (0,
                                    o.SU)(n)("savedialog.Save to a local file instead"),
                                    onClick: l[0] || (l[0] = e=>f())
                                }, null, 8, ["label"])) : (0,
                                t.kq)("", !0), "open" === u.value ? ((0,
                                t.wg)(),
                                (0,
                                t.j4)(s, {
                                    key: 1,
                                    "no-caps": "",
                                    unelevated: "",
                                    label: (0,
                                    o.SU)(n)("opendialog.Open a local file instead"),
                                    onClick: l[1] || (l[1] = e=>f())
                                }, null, 8, ["label"])) : (0,
                                t.kq)("", !0), (0,
                                t.Wm)(s, {
                                    "no-caps": "",
                                    unelevated: "",
                                    label: (0,
                                    o.SU)(n)("common.Cancel"),
                                    onClick: l[2] || (l[2] = e=>h())
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
        var K = a(43706)
          , $ = a(44458)
          , J = a(63190)
          , X = a(11821);
        const ee = Y
          , le = ee;
        g()(Y, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        const ae = ["src"]
          , te = {
            emits: ["log-out"],
            setup(e, {emit: l}) {
                const a = (0,
                s.oR)()
                  , n = (0,
                u.tv)()
                  , {t: d} = (0,
                r.QT)()
                  , m = (0,
                c.Z)();
                function p() {
                    a.dispatch("logOut"),
                    l("log-out")
                }
                async function h() {
                    const e = d("profiledropdown.Are you sure you want to delete your account");
                    if (await B.iG(d, e)) {
                        m.loading.show();
                        try {
                            await a.dispatch("deleteAccount"),
                            a.dispatch("resetWheel");
                            const e = d("profiledropdown.Your account and your saved wheels have been deleted");
                            B.c0(e),
                            l("log-out")
                        } catch (t) {
                            w.trackException("DeleteAccountError", t),
                            B.x2(d, t)
                        }
                        m.loading.hide()
                    }
                }
                return (e,l)=>{
                    const s = (0,
                    t.up)("q-item-section")
                      , u = (0,
                    t.up)("q-item")
                      , c = (0,
                    t.up)("q-separator")
                      , r = (0,
                    t.up)("q-item-label")
                      , m = (0,
                    t.up)("q-list")
                      , w = (0,
                    t.up)("q-btn-dropdown")
                      , f = (0,
                    t.Q2)("close-popup");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(w, null, {
                        label: (0,
                        t.w5)((()=>[(0,
                        t._)("img", {
                            style: {
                                "border-radius": "50%",
                                height: "30px"
                            },
                            src: (0,
                            o.SU)(a).getters.userPhotoUrl
                        }, null, 8, ae)])),
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(m, null, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(u, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, null, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Uk)((0,
                                    i.zw)((0,
                                    o.SU)(d)("profiledropdown.Signed in as", {
                                        name: (0,
                                        o.SU)(a).getters.userDisplayName
                                    })), 1)])),
                                    _: 1
                                })])),
                                _: 1
                            }), (0,
                            t.Wm)(c), (0,
                            t.wy)(((0,
                            t.wg)(),
                            (0,
                            t.j4)(u, {
                                clickable: "",
                                onClick: l[0] || (l[0] = e=>p())
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, null, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(r, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Uk)((0,
                                        i.zw)((0,
                                        o.SU)(d)("profiledropdown.Sign out")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            })), [[f]]), (0,
                            t.Wm)(u, {
                                clickable: "",
                                onClick: l[1] || (l[1] = e=>(0,
                                o.SU)(n).push("/export"))
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, null, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(r, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Uk)((0,
                                        i.zw)((0,
                                        o.SU)(d)("profiledropdown.Export my data")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }), (0,
                            t.wy)(((0,
                            t.wg)(),
                            (0,
                            t.j4)(u, {
                                clickable: "",
                                onClick: l[2] || (l[2] = e=>h())
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, null, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Wm)(r, null, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Uk)((0,
                                        i.zw)((0,
                                        o.SU)(d)("profiledropdown.Delete my account")), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            })), [[f]])])),
                            _: 1
                        })])),
                        _: 1
                    })
                }
            }
        }
          , oe = te
          , ne = oe;
        g()(te, "components", {
            QBtnDropdown: D.Z,
            QList: z.Z,
            QItem: V.Z,
            QItemSection: F.Z,
            QSeparator: T.Z,
            QItemLabel: H.Z
        }),
        g()(te, "directives", {
            ClosePopup: A.Z
        });
        const ie = {
            class: "text-h6"
        }
          , se = (0,
        t._)("i", {
            class: "fa fa-folder-open"
        }, null, -1)
          , ue = {
            key: 0
        }
          , ce = {
            key: 1
        }
          , re = {
            style: {
                height: "50vh",
                overflow: "auto"
            }
        }
          , de = {
            emits: ["reset-wheel-rotation", "reset-address-bar"],
            setup(e, {expose: l, emit: a}) {
                const u = (0,
                s.oR)()
                  , d = (0,
                c.Z)()
                  , {t: m} = (0,
                r.QT)()
                  , p = (0,
                o.iH)(!1)
                  , h = (0,
                o.iH)([])
                  , f = (0,
                t.Fl)((()=>0 == h.value.length))
                  , v = (0,
                o.iH)("")
                  , g = (0,
                t.Fl)((()=>v.value.toLowerCase()))
                  , k = (0,
                t.Fl)((()=>h.value.filter((e=>!v.value || e.config.title.toLowerCase().includes(g.value)))));
                let W;
                async function _() {
                    return (0,
                    w.trackEvent)("Wheel", "ShowOpenDialog"),
                    await U(),
                    v.value = "",
                    p.value = !0,
                    new Promise((e=>W = e))
                }
                async function y(e) {
                    p.value = !1,
                    W("open");
                    const l = await u.dispatch("loadSavedWheel", e);
                    u.commit("setWheelConfig", l.wheelConfig),
                    u.commit("clearWinners"),
                    a("reset-wheel-rotation"),
                    a("reset-address-bar"),
                    (0,
                    w.trackEvent)("Wheel", "OpenWheel")
                }
                async function S(e, l) {
                    const a = m("opendialog.Are you sure", {
                        wheelTitle: (0,
                        w.escapeHtml)(l)
                    });
                    if (await B.iG(m, a))
                        try {
                            (0,
                            w.trackEvent)("Wheel", "DeleteWheel"),
                            h.value = h.value.filter((l=>l.path != e)),
                            await u.dispatch("deleteWheel", e)
                        } catch (t) {
                            (0,
                            w.trackException)("DeleteWheelError", t),
                            B.x2(m, t)
                        }
                }
                async function U() {
                    try {
                        d.loading.show(),
                        h.value = await u.dispatch("getSavedWheels", {
                            fields: "path,config.title"
                        })
                    } catch (e) {
                        B.x2(m, e),
                        (0,
                        w.trackException)("LoadSavedWheelsError (Open dialog)", e)
                    } finally {
                        d.loading.hide()
                    }
                }
                function b() {
                    p.value = !1,
                    W("cancel")
                }
                function C() {
                    p.value = !1,
                    W("switch")
                }
                return l({
                    show: _
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-space")
                      , s = (0,
                    t.up)("q-card-section")
                      , u = (0,
                    t.up)("q-input")
                      , c = (0,
                    t.up)("q-btn")
                      , r = (0,
                    t.up)("q-item-section")
                      , d = (0,
                    t.up)("q-item")
                      , w = (0,
                    t.up)("q-card-actions")
                      , g = (0,
                    t.up)("q-card")
                      , W = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(W, {
                        modelValue: p.value,
                        "onUpdate:modelValue": l[3] || (l[3] = e=>p.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(g, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(s, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", ie, [se, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(m)("opendialog.Open wheel")), 1)]), (0,
                                t.Wm)(a), (0,
                                t.Wm)(ne, {
                                    onLogOut: l[0] || (l[0] = e=>b())
                                })])),
                                _: 1
                            }), (0,
                            t.Wm)(s, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                o.SU)(f) ? ((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", ue, (0,
                                i.zw)((0,
                                o.SU)(m)("opendialog.No wheels found")), 1)) : ((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", ce, [h.value.length > 5 ? ((0,
                                t.wg)(),
                                (0,
                                t.j4)(u, {
                                    key: 0,
                                    dense: "",
                                    filled: "",
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e=>v.value = e),
                                    placeholder: (0,
                                    o.SU)(m)("common.Search")
                                }, null, 8, ["modelValue", "placeholder"])) : (0,
                                t.kq)("", !0), (0,
                                t._)("div", re, [(0,
                                t.Wm)(n.W3, {
                                    name: "animated-list",
                                    tag: "q-list"
                                }, {
                                    default: (0,
                                    t.w5)((()=>[((0,
                                    t.wg)(!0),
                                    (0,
                                    t.iD)(t.HY, null, (0,
                                    t.Ko)((0,
                                    o.SU)(k), (e=>((0,
                                    t.wg)(),
                                    (0,
                                    t.j4)(d, {
                                        key: e.config.title,
                                        class: "q-px-none"
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[(0,
                                        t.Wm)(r, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(c, {
                                                flat: "",
                                                color: "primary",
                                                icon: "fa fa-folder-open",
                                                onClick: l=>y(e.path)
                                            }, null, 8, ["onClick"])])),
                                            _: 2
                                        }, 1024), (0,
                                        t.Wm)(r, {
                                            onClick: l=>y(e.path),
                                            style: {
                                                cursor: "pointer"
                                            }
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Uk)((0,
                                            i.zw)(e.config.title), 1)])),
                                            _: 2
                                        }, 1032, ["onClick"]), (0,
                                        t.Wm)(r, {
                                            side: ""
                                        }, {
                                            default: (0,
                                            t.w5)((()=>[(0,
                                            t.Wm)(c, {
                                                icon: "far fa-trash-alt",
                                                flat: "",
                                                color: "negative",
                                                onClick: l=>S(e.path, e.config.title)
                                            }, null, 8, ["onClick"])])),
                                            _: 2
                                        }, 1024)])),
                                        _: 2
                                    }, 1024)))), 128))])),
                                    _: 1
                                })])]))])),
                                _: 1
                            }), (0,
                            t.Wm)(w, {
                                align: "between"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(m)("opendialog.Open a local file instead"),
                                    onClick: C
                                }, null, 8, ["label"]), (0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(m)("common.Cancel"),
                                    onClick: l[2] || (l[2] = e=>b())
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
        var me = a(13119);
        const we = de
          , pe = we;
        g()(de, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QSpace: x.Z,
            QInput: me.Z,
            QList: z.Z,
            QItem: V.Z,
            QItemSection: F.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        const he = {
            class: "text-h6"
        }
          , fe = (0,
        t._)("i", {
            class: "fa fa-save"
        }, null, -1)
          , ve = {
            class: "row q-gutter-md items-center"
        }
          , ge = {
            class: "col-3"
        }
          , ke = {
            class: "col"
        }
          , We = {
            class: "row q-gutter-md items-center"
        }
          , _e = {
            class: "col-3"
        }
          , ye = {
            class: "col"
        }
          , Se = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , u = (0,
                c.Z)()
                  , {t: d} = (0,
                r.QT)()
                  , m = (0,
                o.iH)(!1)
                  , p = (0,
                o.iH)(null)
                  , h = (0,
                o.iH)([])
                  , f = (0,
                t.Fl)((()=>h.value.map((e=>({
                    value: e.config.title,
                    label: e.config.title
                })))))
                  , v = (0,
                t.Fl)((()=>a.getters.wheelConfig))
                  , g = (0,
                o.iH)("")
                  , k = (0,
                o.iH)("")
                  , W = (0,
                o.iH)("")
                  , _ = (0,
                t.Fl)((()=>W.value != g.value && h.value.some((e=>e.config.title == g.value))))
                  , y = (0,
                o.iH)(!1);
                let S;
                async function U() {
                    return (0,
                    w.trackEvent)("Wheel", "ShowSaveDialog"),
                    q(),
                    g.value = v.value.title,
                    W.value = v.value.title,
                    k.value = "",
                    m.value = !0,
                    new Promise((e=>S = e))
                }
                async function b() {
                    if (g.value)
                        if (_.value) {
                            const e = d("savedialog.You are about to overwrite");
                            await B.iG(d, e) && C()
                        } else
                            C()
                }
                async function C() {
                    u.loading.show();
                    try {
                        (0,
                        w.trackEvent)("Wheel", "SaveWheel"),
                        a.commit("setWheelTitle", g.value),
                        await a.dispatch("saveWheel", v.value),
                        u.loading.hide();
                        const e = d("savedialog.Wheel saved successfully", {
                            wheelTitle: (0,
                            w.removeHtml)(g.value)
                        });
                        B.c0(e)
                    } catch (e) {
                        u.loading.hide(),
                        B.x2(d, e),
                        (0,
                        w.trackException)("SaveWheelError", e)
                    }
                    m.value = !1,
                    S("save")
                }
                async function q() {
                    try {
                        y.value = !0,
                        h.value = await a.dispatch("getSavedWheels", {
                            fields: "config.title"
                        })
                    } catch (e) {
                        B.x2(d, e),
                        (0,
                        w.trackException)("LoadSavedWheelsError (Save dialog)", e)
                    } finally {
                        y.value = !1
                    }
                }
                function Z() {
                    m.value = !1,
                    S("cancel")
                }
                function x() {
                    m.value = !1,
                    S("switch")
                }
                return (0,
                t.YP)((()=>k.value), (e=>{
                    g.value = e.value
                }
                )),
                l({
                    show: U
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-space")
                      , s = (0,
                    t.up)("q-card-section")
                      , u = (0,
                    t.up)("q-input")
                      , c = (0,
                    t.up)("q-select")
                      , r = (0,
                    t.up)("q-btn")
                      , w = (0,
                    t.up)("q-card-actions")
                      , h = (0,
                    t.up)("q-card")
                      , v = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(v, {
                        modelValue: m.value,
                        "onUpdate:modelValue": l[5] || (l[5] = e=>m.value = e),
                        onShow: l[6] || (l[6] = e=>p.value.select())
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(h, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(s, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", he, [fe, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(d)("savedialog.Save wheel to the cloud")), 1)]), (0,
                                t.Wm)(a), (0,
                                t.Wm)(ne, {
                                    onLogOut: l[0] || (l[0] = e=>Z())
                                })])),
                                _: 1
                            }), (0,
                            t.Wm)(s, {
                                class: "q-gutter-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", ve, [(0,
                                t._)("div", ge, (0,
                                i.zw)((0,
                                o.SU)(d)("savedialog.Save as")), 1), (0,
                                t._)("div", ke, [(0,
                                t.Wm)(u, {
                                    modelValue: g.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e=>g.value = e),
                                    filled: "",
                                    dense: "",
                                    onKeyup: l[2] || (l[2] = (0,
                                    n.D2)((e=>b()), ["native", "enter"])),
                                    ref_key: "saveAsField",
                                    ref: p,
                                    required: "",
                                    maxlength: "50"
                                }, null, 8, ["modelValue"])])]), (0,
                                t._)("div", We, [(0,
                                t._)("div", _e, (0,
                                i.zw)((0,
                                o.SU)(d)("savedialog.Your existing wheels")), 1), (0,
                                t._)("div", ye, [(0,
                                t.Wm)(c, {
                                    filled: "",
                                    dense: "",
                                    label: (0,
                                    o.SU)(d)("savedialog.Select a wheel"),
                                    modelValue: k.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e=>k.value = e),
                                    options: (0,
                                    o.SU)(f),
                                    "map-options": "",
                                    loading: y.value
                                }, null, 8, ["label", "modelValue", "options", "loading"])])]), (0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(d)("savedialog.You will always be able to access")), 1), (0,
                                t.Wm)(r, {
                                    outline: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(d)("savedialog.Save to a local file instead"),
                                    onClick: x
                                }, null, 8, ["label"])])),
                                _: 1
                            }), (0,
                            t.Wm)(w, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(d)("common.Cancel"),
                                    onClick: l[4] || (l[4] = e=>Z())
                                }, null, 8, ["label"]), (0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(d)("common.Save"),
                                    onClick: b
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
        var Ue = a(18401);
        const be = Se
          , Ce = be;
        g()(Se, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QSpace: x.Z,
            QInput: me.Z,
            QSelect: Ue.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        const qe = {
            class: "text-h6"
        }
          , Ze = (0,
        t._)("i", {
            class: "fa fa-save"
        }, null, -1)
          , xe = {
            class: "row items-center"
        }
          , Qe = {
            class: "col-shrink q-mr-md q-mb-md"
        }
          , De = {
            class: "col-12 col-md-grow q-mb-md"
        }
          , ze = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , {t: u} = (0,
                r.QT)()
                  , d = (0,
                c.Z)()
                  , p = (0,
                o.iH)(!1)
                  , h = (0,
                o.iH)(null)
                  , f = (0,
                t.Fl)((()=>a.getters.wheelConfig))
                  , v = (0,
                o.iH)("")
                  , g = d.platform.is.ios ? ".json" : ".wheel";
                let k;
                async function W() {
                    return (0,
                    w.trackEvent)("Wheel", "ShowSaveLocalDialog"),
                    v.value = f.value.title,
                    p.value = !0,
                    new Promise((e=>k = e))
                }
                async function _() {
                    a.commit("setWheelTitle", v.value);
                    try {
                        await (0,
                        m.NL)(new Blob([JSON.stringify(f.value.getValues())]), {
                            fileName: `${f.value.title || "Untitled"}${g}`,
                            extensions: [g],
                            mimeTypes: ["application/json"]
                        });
                        const e = u("savedialog.Wheel saved successfully", {
                            wheelTitle: (0,
                            w.removeHtml)(f.value.title)
                        });
                        B.c0(e)
                    } catch (e) {
                        if (e instanceof DOMException && e.message.includes("abort"))
                            return;
                        (0,
                        w.trackException)("SaveLocalError", e),
                        B.x2(u, e)
                    }
                    p.value = !1,
                    k("save")
                }
                function y() {
                    p.value = !1,
                    k("cancel")
                }
                function S() {
                    p.value = !1,
                    k("switch")
                }
                return l({
                    show: W
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-input")
                      , c = (0,
                    t.up)("q-btn")
                      , r = (0,
                    t.up)("q-card-actions")
                      , d = (0,
                    t.up)("q-card")
                      , m = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(m, {
                        modelValue: p.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e=>p.value = e),
                        onShow: l[3] || (l[3] = e=>h.value.select())
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(d, null, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(a, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", qe, [Ze, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(u)("savedialog.Save to a local file")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(a, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", xe, [(0,
                                t._)("div", Qe, (0,
                                i.zw)((0,
                                o.SU)(u)("savedialog.File name")), 1), (0,
                                t._)("div", De, [(0,
                                t.Wm)(s, {
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>v.value = e),
                                    filled: "",
                                    dense: "",
                                    onKeyup: l[1] || (l[1] = (0,
                                    n.D2)((e=>_()), ["native", "enter"])),
                                    ref_key: "saveAsField",
                                    ref: h,
                                    required: "",
                                    maxlength: "50",
                                    suffix: (0,
                                    o.SU)(g)
                                }, null, 8, ["modelValue", "suffix"])])]), (0,
                                t.Wm)(c, {
                                    outline: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(u)("savedialog.Save to the cloud instead"),
                                    onClick: S
                                }, null, 8, ["label"])])),
                                _: 1
                            }), (0,
                            t.Wm)(r, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(u)("common.Cancel"),
                                    onClick: y
                                }, null, 8, ["label"]), (0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(u)("common.Save"),
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
        }
          , Ve = ze
          , Fe = Ve;
        g()(ze, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QInput: me.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        const Ee = {
            class: "text-h6"
        }
          , He = (0,
        t._)("i", {
            class: "fa fa-share-alt"
        }, null, -1)
          , Te = {
            setup(e, {expose: l}) {
                (0,
                s.oR)(),
                (0,
                c.Z)();
                const {t: a} = (0,
                r.QT)()
                  , n = (0,
                o.iH)(!1);
                let u, d;
                async function m() {
                    return (0,
                    w.trackEvent)("Wheel", "ShowShareDialog"),
                    n.value = !0,
                    new Promise(((e,l)=>{
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
                function h() {
                    u({
                        openMySharedWheels: !1,
                        openShareSettings: !0
                    }),
                    n.value = !1
                }
                function f() {
                    u({
                        openMySharedWheels: !1,
                        openShareSettings: !1
                    }),
                    n.value = !1
                }
                return l({
                    show: m
                }),
                (e,l)=>{
                    const s = (0,
                    t.up)("q-card-section")
                      , u = (0,
                    t.up)("router-link")
                      , c = (0,
                    t.up)("q-btn")
                      , r = (0,
                    t.up)("q-card-actions")
                      , d = (0,
                    t.up)("q-card")
                      , m = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(m, {
                        modelValue: n.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e=>n.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(d, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(s, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Ee, [He, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(a)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(s, {
                                class: "q-gutter-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(a)("sharedialog.If you continue")), 1), (0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(a)("sharedialog.This link will work for anyone")), 1), (0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(a)("sharedialog.We want this website to be safe place for everyone")), 1), (0,
                                t._)("div", null, [(0,
                                t.Wm)(u, {
                                    to: "/faq/terms"
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Uk)((0,
                                    i.zw)((0,
                                    o.SU)(a)("appInfo.Terms of service")), 1)])),
                                    _: 1
                                })]), (0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(a)("sharedialog.See my shared wheels"),
                                    onClick: p
                                }, null, 8, ["label"])])),
                                _: 1
                            }), (0,
                            t.Wm)(r, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(a)("common.Cancel"),
                                    onClick: l[0] || (l[0] = e=>f())
                                }, null, 8, ["label"]), (0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(a)("common.Continue"),
                                    onClick: l[1] || (l[1] = e=>h())
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
          , Le = Te
          , Ae = Le;
        g()(Te, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        var Ie = a(65819);
        const je = e=>((0,
        t.dD)("data-v-4d172d7a"),
        e = e(),
        (0,
        t.Cn)(),
        e)
          , Re = {
            class: "text-h6"
        }
          , Pe = je((()=>(0,
        t._)("i", {
            class: "fa fa-share-alt"
        }, null, -1)))
          , Be = {
            key: 0
        }
          , Oe = {
            class: "text-left"
        }
          , Ne = {
            class: "text-left"
        }
          , Me = je((()=>(0,
        t._)("th", {
            class: "copy-column"
        }, null, -1)))
          , Ge = {
            class: "text-left created-column"
        }
          , Ye = {
            class: "text-right views-column"
        }
          , Ke = je((()=>(0,
        t._)("th", {
            class: "delete-column"
        }, null, -1)))
          , $e = {
            class: "break-long-words"
        }
          , Je = ["href"]
          , Xe = {
            class: "copy-column"
        }
          , el = {
            class: "created-column"
        }
          , ll = {
            class: "text-right views-column"
        }
          , al = {
            class: "delete-column"
        }
          , tl = {
            key: 0
        }
          , ol = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , u = (0,
                c.Z)()
                  , {t: d, locale: m} = (0,
                r.QT)()
                  , h = (0,
                o.iH)(!1)
                  , f = (0,
                o.iH)([])
                  , v = (0,
                t.Fl)((()=>0 == f.value.length));
                async function g() {
                    (0,
                    w.trackEvent)("Wheel", "ViewSharedWheelsAttempt"),
                    await U(),
                    (0,
                    w.trackEvent)("Wheel", "ViewSharedWheelsSuccess"),
                    h.value = !0
                }
                function k() {
                    h.value = !1
                }
                function W(e) {
                    return location.protocol + "//" + (0,
                    p.WN)(location.host, m.value, e)
                }
                function _(e) {
                    return (0,
                    p.WN)(location.host, m.value, e)
                }
                async function y(e) {
                    await navigator.clipboard.writeText(e);
                    const l = d("sharedialog.Link copied to the clipboard");
                    B.c0(l)
                }
                async function S(e) {
                    const l = d("opendialog.Are you sure", {
                        wheelTitle: (0,
                        w.escapeHtml)(e)
                    });
                    if (await B.iG(d, l))
                        try {
                            f.value = f.value.filter((l=>l.path != e)),
                            await a.dispatch("deleteWheel", e)
                        } catch (t) {
                            (0,
                            w.trackException)("DeleteSharedWheelError", t),
                            B.x2(d, t)
                        }
                }
                async function U() {
                    try {
                        u.loading.show(),
                        await a.dispatch("userIsLoggedIn") || await a.dispatch("loginAnonymously"),
                        f.value = await a.dispatch("getSharedWheels", {
                            fields: "path,config.title,created,readCount"
                        })
                    } catch (e) {
                        B.x2(d, e),
                        (0,
                        w.trackException)("ViewSharedWheelsError", e)
                    } finally {
                        u.loading.hide()
                    }
                }
                return l({
                    show: g
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-space")
                      , s = (0,
                    t.up)("q-card-section")
                      , c = (0,
                    t.up)("q-btn")
                      , r = (0,
                    t.up)("q-markup-table")
                      , p = (0,
                    t.up)("q-card-actions")
                      , g = (0,
                    t.up)("q-card")
                      , U = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(U, {
                        modelValue: h.value,
                        "onUpdate:modelValue": l[1] || (l[1] = e=>h.value = e),
                        maximized: (0,
                        o.SU)(u).platform.is.mobile,
                        style: {
                            "max-width": "900px"
                        }
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(g, {
                            style: {
                                width: "900px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(s, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Re, [Pe, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(d)("sharedialog.My shared wheels")), 1)]), (0,
                                t.Wm)(a), (0,
                                t.Wm)(Ie.Z)])),
                                _: 1
                            }), (0,
                            t.Wm)(s, {
                                style: {
                                    "max-height": "75vh",
                                    overflow: "auto"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(r, {
                                    flat: ""
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t._)("thead", null, [(0,
                                    o.SU)(v) ? (0,
                                    t.kq)("", !0) : ((0,
                                    t.wg)(),
                                    (0,
                                    t.iD)("tr", Be, [(0,
                                    t._)("th", Oe, (0,
                                    i.zw)((0,
                                    o.SU)(d)("common.Wheel title")), 1), (0,
                                    t._)("th", Ne, (0,
                                    i.zw)((0,
                                    o.SU)(d)("sharedialog.Link")), 1), Me, (0,
                                    t._)("th", Ge, (0,
                                    i.zw)((0,
                                    o.SU)(d)("sharedialog.Created")), 1), (0,
                                    t._)("th", Ye, (0,
                                    i.zw)((0,
                                    o.SU)(d)("sharedialog.Visits")), 1), Ke]))]), (0,
                                    t.Wm)(n.W3, {
                                        name: "animated-list",
                                        tag: "tbody"
                                    }, {
                                        default: (0,
                                        t.w5)((()=>[((0,
                                        t.wg)(!0),
                                        (0,
                                        t.iD)(t.HY, null, (0,
                                        t.Ko)(f.value, (e=>((0,
                                        t.wg)(),
                                        (0,
                                        t.iD)("tr", {
                                            key: e.path
                                        }, [(0,
                                        t._)("td", $e, (0,
                                        i.zw)(e.config.title), 1), (0,
                                        t._)("td", null, [(0,
                                        t._)("a", {
                                            href: W(e.path)
                                        }, (0,
                                        i.zw)(_(e.path)), 9, Je)]), (0,
                                        t._)("td", Xe, [(0,
                                        t.Wm)(c, {
                                            icon: "far fa-clipboard",
                                            flat: "",
                                            round: "",
                                            dense: "",
                                            size: "sm",
                                            onClick: l=>y(W(e.path))
                                        }, null, 8, ["onClick"])]), (0,
                                        t._)("td", el, (0,
                                        i.zw)((0,
                                        o.SU)(w.getTimeAgo)(e.created, (0,
                                        o.SU)(m))), 1), (0,
                                        t._)("td", ll, (0,
                                        i.zw)((0,
                                        o.SU)(w.localestring)(e.readCount)), 1), (0,
                                        t._)("td", al, [(0,
                                        t.Wm)(c, {
                                            icon: "far fa-trash-alt",
                                            flat: "",
                                            round: "",
                                            dense: "",
                                            size: "sm",
                                            color: "negative",
                                            onClick: l=>S(e.path)
                                        }, null, 8, ["onClick"])])])))), 128)), (0,
                                        o.SU)(v) ? ((0,
                                        t.wg)(),
                                        (0,
                                        t.iD)("tr", tl, [(0,
                                        t._)("td", null, (0,
                                        i.zw)((0,
                                        o.SU)(d)("sharedialog.No wheels found")), 1)])) : (0,
                                        t.kq)("", !0)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }), (0,
                            t.Wm)(p, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(c, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(d)("common.Close"),
                                    onClick: l[0] || (l[0] = e=>k())
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
        var nl = a(66933);
        const il = (0,
        b.Z)(ol, [["__scopeId", "data-v-4d172d7a"]])
          , sl = il;
        g()(ol, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QSpace: x.Z,
            QMarkupTable: nl.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        const ul = {
            class: "text-h6"
        }
          , cl = (0,
        t._)("i", {
            class: "fa fa-share-alt"
        }, null, -1)
          , rl = {
            class: "q-gutter-y-sm"
        }
          , dl = {
            for: "wheelTitleField"
        }
          , ml = {
            class: "q-gutter-y-sm"
        }
          , wl = {
            class: "q-gutter-y-sm"
        }
          , pl = {
            key: 0,
            class: "q-gutter-y-sm"
        }
          , hl = {
            for: "wheelDescriptionField"
        }
          , fl = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , {t: u, locale: c} = (0,
                r.QT)()
                  , d = (0,
                o.iH)(!1)
                  , m = (0,
                o.iH)(null)
                  , w = (0,
                o.iH)()
                  , p = (0,
                o.iH)()
                  , h = (0,
                o.iH)(!1)
                  , f = (0,
                t.Fl)({
                    get: ()=>a.getters.showTitle,
                    set: e=>{
                        a.commit("setShowTitle", e)
                    }
                })
                  , v = (0,
                o.iH)("copyable");
                let g, k;
                async function W() {
                    return w.value = a.getters.wheelTitle,
                    p.value = a.getters.wheelDescription,
                    v.value = "copyable",
                    d.value = !0,
                    new Promise(((e,l)=>{
                        g = e,
                        k = l
                    }
                    ))
                }
                async function _() {
                    if (U())
                        if ("gallery" === v.value) {
                            const e = u("sharedialog.You are about to publish your wheel to the public gallery");
                            await B.iG(u, e) && y()
                        } else
                            y()
                }
                function y() {
                    a.commit("setWheelTitle", w.value),
                    a.commit("setWheelDescription", p.value),
                    g(v.value),
                    d.value = !1
                }
                function S() {
                    g(),
                    d.value = !1
                }
                function U() {
                    return m.value.validate(),
                    !m.value.hasError
                }
                return l({
                    askUserForSettings: W
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-input")
                      , c = (0,
                    t.up)("q-checkbox")
                      , r = (0,
                    t.up)("q-radio")
                      , g = (0,
                    t.up)("q-btn")
                      , k = (0,
                    t.up)("q-card-actions")
                      , W = (0,
                    t.up)("q-card")
                      , y = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(y, {
                        modelValue: d.value,
                        "onUpdate:modelValue": l[10] || (l[10] = e=>d.value = e),
                        onShow: l[11] || (l[11] = e=>m.value.select())
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(W, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", ul, [cl, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(u)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(a, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", rl, [(0,
                                t._)("label", dl, (0,
                                i.zw)((0,
                                o.SU)(u)("common.Wheel title")), 1), (0,
                                t.Wm)(s, {
                                    id: "wheelTitleField",
                                    modelValue: w.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>w.value = e),
                                    filled: "",
                                    dense: "",
                                    "bottom-slots": "",
                                    rules: [e=>e.length > 0 || (0,
                                    o.SU)(u)("sharedialog.Your wheel must have a title")],
                                    ref_key: "wheelTitleField",
                                    ref: m,
                                    maxlength: "50",
                                    onKeyup: l[1] || (l[1] = (0,
                                    n.D2)((e=>_()), ["native", "enter"]))
                                }, null, 8, ["modelValue", "rules"]), (0,
                                t.Wm)(c, {
                                    modelValue: (0,
                                    o.SU)(f),
                                    "onUpdate:modelValue": l[2] || (l[2] = e=>(0,
                                    o.dq)(f) ? f.value = e : null)
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Uk)((0,
                                    i.zw)((0,
                                    o.SU)(u)("sharedialog.Show title to people")), 1)])),
                                    _: 1
                                }, 8, ["modelValue"])]), (0,
                                t._)("div", ml, [(0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(u)("sharedialog.Visibility")), 1), (0,
                                t._)("div", wl, [(0,
                                t.Wm)(r, {
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e=>v.value = e),
                                    dense: "",
                                    val: "spin-only",
                                    label: (0,
                                    o.SU)(u)("sharedialog.Anyone with the link can spin the wheel")
                                }, null, 8, ["modelValue", "label"]), (0,
                                t.Wm)(r, {
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[4] || (l[4] = e=>v.value = e),
                                    dense: "",
                                    val: "copyable",
                                    label: (0,
                                    o.SU)(u)("sharedialog.Anyone with the link can spin and copy the wheel")
                                }, null, 8, ["modelValue", "label"]), (0,
                                t.Wm)(r, {
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[5] || (l[5] = e=>v.value = e),
                                    dense: "",
                                    val: "gallery",
                                    label: (0,
                                    o.SU)(u)("sharedialog.This wheel would be useful")
                                }, null, 8, ["modelValue", "label"]), h.value ? ((0,
                                t.wg)(),
                                (0,
                                t.j4)(r, {
                                    key: 0,
                                    modelValue: v.value,
                                    "onUpdate:modelValue": l[6] || (l[6] = e=>v.value = e),
                                    dense: "",
                                    val: "live",
                                    label: (0,
                                    o.SU)(u)("sharedialog.Broadcast spins and edits")
                                }, null, 8, ["modelValue", "label"])) : (0,
                                t.kq)("", !0)])]), "gallery" == v.value ? ((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", pl, [(0,
                                t._)("label", hl, (0,
                                i.zw)((0,
                                o.SU)(u)("common.Wheel description")), 1), (0,
                                t.Wm)(s, {
                                    type: "textarea",
                                    modelValue: p.value,
                                    "onUpdate:modelValue": l[7] || (l[7] = e=>p.value = e),
                                    filled: "",
                                    dense: "",
                                    maxlength: "200",
                                    rows: "3",
                                    id: "wheelDescriptionField"
                                }, null, 8, ["modelValue"])])) : (0,
                                t.kq)("", !0)])),
                                _: 1
                            }), (0,
                            t.Wm)(k, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(g, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(u)("common.Cancel"),
                                    onClick: l[8] || (l[8] = e=>S())
                                }, null, 8, ["label"]), (0,
                                t.Wm)(g, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(u)("common.Continue"),
                                    onClick: l[9] || (l[9] = e=>_())
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
        var vl = a(11221)
          , gl = a(11480);
        const kl = fl
          , Wl = kl;
        g()(fl, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QInput: me.Z,
            QCheckbox: vl.Z,
            QRadio: gl.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        const _l = {
            class: "text-h6"
        }
          , yl = (0,
        t._)("i", {
            class: "fa fa-share-alt"
        }, null, -1)
          , Sl = {
            class: "row q-gutter-sm"
        }
          , Ul = {
            class: "col-grow"
        }
          , bl = {
            class: "col-shrink"
        }
          , Cl = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , n = (0,
                c.Z)()
                  , {t: u, locale: d} = (0,
                r.QT)()
                  , m = (0,
                o.iH)(!1)
                  , h = (0,
                o.iH)("");
                async function f(e, l, t) {
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
                          , i = p.WN(o, d.value, n);
                        h.value = window.location.protocol + "//" + i,
                        (0,
                        w.trackEvent)("Wheel", "CreateSharableLink"),
                        m.value = !0
                    } catch (o) {
                        if (o.toString().includes("family")) {
                            const e = u("sharedialog.The wheel includes text that");
                            B.om(u, e)
                        } else
                            B.x2(u, o);
                        (0,
                        w.trackException)("CreateSharableLinkError", o)
                    }
                    n.loading.hide()
                }
                async function v() {
                    await navigator.clipboard.writeText(h.value),
                    (0,
                    w.trackEvent)("Wheel", "CopySharableLink");
                    const e = u("sharedialog.Link copied to the clipboard");
                    B.c0(e)
                }
                function g() {
                    m.value = !1
                }
                return l({
                    share: f
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-card-section")
                      , n = (0,
                    t.up)("q-input")
                      , s = (0,
                    t.up)("q-btn")
                      , c = (0,
                    t.up)("q-card-actions")
                      , r = (0,
                    t.up)("q-card")
                      , d = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(d, {
                        modelValue: m.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e=>m.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(r, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", _l, [yl, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(u)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(a, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(u)("sharedialog.Link to this wheel")), 1), (0,
                                t._)("div", Sl, [(0,
                                t._)("div", Ul, [(0,
                                t.Wm)(n, {
                                    id: "sharableLinkText",
                                    modelValue: h.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>h.value = e),
                                    readonly: "",
                                    dense: "",
                                    standout: "",
                                    style: {
                                        "min-width": "300px"
                                    }
                                }, null, 8, ["modelValue"])]), (0,
                                t._)("div", bl, [(0,
                                t.Wm)(s, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "positive",
                                    label: (0,
                                    o.SU)(u)("sharedialog.Copy link"),
                                    onClick: v
                                }, null, 8, ["label"])])]), (0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(u)("sharedialog.This link will work for anyone")), 1)])),
                                _: 1
                            }), (0,
                            t.Wm)(c, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(u)("common.Close"),
                                    onClick: l[1] || (l[1] = e=>g())
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
          , ql = Cl
          , Zl = ql;
        g()(Cl, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QInput: me.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        const xl = {
            class: "text-h6"
        }
          , Ql = (0,
        t._)("i", {
            class: "fa fa-share-alt"
        }, null, -1)
          , Dl = {
            class: "q-gutter-y-sm"
        }
          , zl = {
            class: "q-gutter-y-sm"
        }
          , Vl = {
            class: "row"
        }
          , Fl = {
            class: "row q-gutter-x-md"
        }
          , El = {
            class: "row"
        }
          , Hl = {
            setup(e, {expose: l}) {
                (0,
                s.oR)();
                const {t: a, locale: n} = (0,
                r.QT)()
                  , u = (0,
                o.iH)(!1)
                  , c = (0,
                o.iH)("owner")
                  , d = (0,
                o.iH)("");
                let m, w;
                async function p() {
                    return c.value = "owner",
                    d.value = "",
                    u.value = !0,
                    new Promise(((e,l)=>{
                        m = e,
                        w = l
                    }
                    ))
                }
                function h() {
                    m({
                        editPermissions: c.value,
                        password: d.value
                    }),
                    u.value = !1
                }
                function f() {
                    m(),
                    u.value = !1
                }
                return l({
                    show: p
                }),
                (e,l)=>{
                    const n = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-radio")
                      , r = (0,
                    t.up)("q-input")
                      , m = (0,
                    t.up)("q-btn")
                      , w = (0,
                    t.up)("q-card-actions")
                      , p = (0,
                    t.up)("q-card")
                      , v = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(v, {
                        modelValue: u.value,
                        "onUpdate:modelValue": l[6] || (l[6] = e=>u.value = e),
                        onShow: l[7] || (l[7] = l=>e.wheelTitleField.select())
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(p, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(n, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", xl, [Ql, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(a)("sharedialog.Shareable link")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(n, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Dl, [(0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(a)("sharedialog.Who can spin and edit the wheel")), 1), (0,
                                t._)("div", zl, [(0,
                                t._)("div", Vl, [(0,
                                t.Wm)(s, {
                                    modelValue: c.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>c.value = e),
                                    dense: "",
                                    val: "owner",
                                    label: (0,
                                    o.SU)(a)("sharedialog.Only me")
                                }, null, 8, ["modelValue", "label"])]), (0,
                                t._)("div", Fl, [(0,
                                t.Wm)(s, {
                                    modelValue: c.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e=>c.value = e),
                                    dense: "",
                                    val: "password",
                                    label: (0,
                                    o.SU)(a)("sharedialog.Anyone who knows the password")
                                }, null, 8, ["modelValue", "label"]), (0,
                                t.Wm)(r, {
                                    type: "password",
                                    modelValue: d.value,
                                    "onUpdate:modelValue": l[2] || (l[2] = e=>d.value = e),
                                    filled: "",
                                    dense: "",
                                    maxlength: "50",
                                    placeholder: (0,
                                    o.SU)(a)("sharedialog.Password"),
                                    id: "wheelPasswordField",
                                    disable: "password" !== c.value
                                }, null, 8, ["modelValue", "placeholder", "disable"])]), (0,
                                t._)("div", El, [(0,
                                t.Wm)(s, {
                                    modelValue: c.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e=>c.value = e),
                                    dense: "",
                                    val: "anyone",
                                    label: (0,
                                    o.SU)(a)("sharedialog.Anyone with the link")
                                }, null, 8, ["modelValue", "label"])])])])])),
                                _: 1
                            }), (0,
                            t.Wm)(w, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(m, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(a)("common.Cancel"),
                                    onClick: l[4] || (l[4] = e=>f())
                                }, null, 8, ["label"]), (0,
                                t.Wm)(m, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(a)("common.Continue"),
                                    onClick: l[5] || (l[5] = e=>h())
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
          , Tl = Hl
          , Ll = Tl;
        g()(Hl, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QRadio: gl.Z,
            QInput: me.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        var Al = a(12762);
        const Il = {
            class: "text-h6"
        }
          , jl = (0,
        t._)("i", {
            class: "fa fa-link"
        }, null, -1)
          , Rl = {
            style: {
                "margin-top": "10px"
            }
        }
          , Pl = {
            style: {
                "margin-top": "10px",
                color: "#999"
            }
        }
          , Bl = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , {t: n, locale: u} = ((0,
                c.Z)(),
                (0,
                r.QT)())
                  , d = (0,
                o.iH)(!1);
                let m, p;
                async function h() {
                    return (0,
                    w.trackEvent)("Wheel", "ShowSpreadsheetDialog"),
                    d.value = !0,
                    new Promise(((e,l)=>{
                        m = e,
                        p = l
                    }
                    ))
                }
                async function f() {
                    d.value = !1;
                    try {
                        (0,
                        w.trackEvent)("Wheel", "LoginForSheetAttempt", "");
                        const e = await a.dispatch("logInToSheets", u);
                        (0,
                        w.trackEvent)("Wheel", "LoginForSheetSuccess", ""),
                        m(e)
                    } catch (e) {
                        (0,
                        w.trackException)("LoginForSheetError", e),
                        (0,
                        w.trackEvent)("Wheel", "LoginForSheetFailure", e.toString()),
                        B.x2(n, e),
                        p()
                    }
                }
                function v() {
                    d.value = !1,
                    m()
                }
                return l({
                    askUserToLogIn: h
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-btn")
                      , u = (0,
                    t.up)("q-card-actions")
                      , c = (0,
                    t.up)("q-card")
                      , r = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(r, {
                        modelValue: d.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e=>d.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(c, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(a, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Il, [jl, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(n)("common.Link Google Spreadsheet")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(a, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", null, (0,
                                i.zw)((0,
                                o.SU)(n)("sheetdialog.When you link a spreadsheet")), 1), (0,
                                t._)("p", Rl, (0,
                                i.zw)((0,
                                o.SU)(n)("sheetdialog.To import sheets")), 1), (0,
                                t._)("p", Pl, (0,
                                i.zw)((0,
                                o.SU)(n)("common.If you dont see a Google login button below")), 1)])),
                                _: 1
                            }), (0,
                            t.Wm)(u, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, {
                                    unelevated: "",
                                    label: (0,
                                    o.SU)(n)("common.Cancel"),
                                    onClick: l[0] || (l[0] = e=>v())
                                }, null, 8, ["label"]), (0,
                                t._)("input", {
                                    type: "image",
                                    style: {
                                        height: "40px"
                                    },
                                    alt: "Sign in with Google",
                                    src: "/images/btn_google_signin_dark_normal_web@2x.png",
                                    onClick: l[1] || (l[1] = e=>f())
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
          , Ol = Bl
          , Nl = Ol;
        async function Ml(e) {
            const l = await gapi.client.sheets.spreadsheets.get({
                spreadsheetId: e
            });
            return l.result.properties.title
        }
        async function Gl(e) {
            const l = await gapi.client.sheets.spreadsheets.get({
                spreadsheetId: e
            });
            return l.result.sheets.map((e=>e.properties.title))
        }
        async function Yl(e, l) {
            const a = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: e,
                range: l
            })
              , t = []
              , o = a.result;
            if (o.values && o.values.length > 0) {
                const e = $l(o.values)[0];
                for (let l = 0; l < e.length && l < 27; l++)
                    t.push({
                        id: String.fromCharCode(l + 65),
                        name: e[l]
                    })
            }
            return t
        }
        async function Kl(e, l, a, t) {
            const o = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: e,
                range: l + "!" + a + ":" + a
            })
              , n = [];
            if (o.result.values && o.result.values.length > 0) {
                const e = $l(o.result.values);
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
        function $l(e) {
            return e.filter((e=>e.length > 0))
        }
        g()(Bl, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        const Jl = {
            class: "text-h6"
        }
          , Xl = (0,
        t._)("i", {
            class: "fa fa-link"
        }, null, -1)
          , ea = {
            class: "row items-center"
        }
          , la = {
            class: "col-4"
        }
          , aa = {
            class: "col"
        }
          , ta = {
            class: "row items-center"
        }
          , oa = {
            class: "col-4"
        }
          , na = {
            class: "col"
        }
          , ia = {
            class: "row items-center"
        }
          , sa = {
            class: "col-4"
        }
          , ua = {
            class: "col"
        }
          , ca = {
            class: "row items-center"
        }
          , ra = {
            class: "col-4"
        }
          , da = {
            class: "col"
        }
          , ma = {
            setup(e, {expose: l}) {
                (0,
                s.oR)(),
                (0,
                c.Z)();
                const {t: a, locale: n} = (0,
                r.QT)()
                  , u = (0,
                o.iH)(!1)
                  , d = (0,
                o.iH)("")
                  , m = (0,
                o.iH)("")
                  , p = (0,
                o.iH)(null)
                  , h = (0,
                o.iH)(null)
                  , f = (0,
                o.iH)([])
                  , v = (0,
                o.iH)([])
                  , g = (0,
                o.iH)(!0);
                let k, W;
                async function _(e) {
                    return u.value = !0,
                    d.value = e,
                    new Promise((async(e,l)=>{
                        k = e,
                        W = l,
                        m.value = "",
                        p.value = "",
                        f.value = [],
                        h.value = "",
                        v.value = [],
                        m.value = await Ml(d.value),
                        f.value = await Gl(d.value),
                        f.value.length > 0 && (p.value = f.value[0])
                    }
                    ))
                }
                function y() {
                    (0,
                    w.trackEvent)("Wheel", "LinkSpreadsheet"),
                    u.value = !1,
                    k({
                        tab: p.value,
                        column: h.value,
                        skipFirstRow: g.value
                    })
                }
                function S() {
                    u.value = !1,
                    k({
                        tab: "",
                        column: "",
                        skipFirstRow: !1
                    })
                }
                return (0,
                t.YP)((()=>p.value), (async e=>{
                    v.value = [],
                    h.value = "";
                    const l = await Yl(d.value, e);
                    v.value = l.map((e=>({
                        value: e.id,
                        label: e.name
                    }))),
                    v.value.length > 0 && (h.value = v.value[0].value)
                }
                )),
                l({
                    askUserToConfigure: _
                }),
                (e,l)=>{
                    const n = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-input")
                      , c = (0,
                    t.up)("q-select")
                      , r = (0,
                    t.up)("q-checkbox")
                      , d = (0,
                    t.up)("q-btn")
                      , w = (0,
                    t.up)("q-card-actions")
                      , k = (0,
                    t.up)("q-card")
                      , W = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(W, {
                        modelValue: u.value,
                        "onUpdate:modelValue": l[6] || (l[6] = e=>u.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(k, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(n, {
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Jl, [Xl, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(a)("common.Link Google Spreadsheet")), 1)])])),
                                _: 1
                            }), (0,
                            t.Wm)(n, {
                                class: "q-gutter-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", ea, [(0,
                                t._)("div", la, (0,
                                i.zw)((0,
                                o.SU)(a)("sheetdialog.Selected spreadsheet")), 1), (0,
                                t._)("div", aa, [(0,
                                t.Wm)(s, {
                                    dense: "",
                                    filled: "",
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>m.value = e),
                                    readonly: ""
                                }, null, 8, ["modelValue"])])]), (0,
                                t._)("div", ta, [(0,
                                t._)("div", oa, (0,
                                i.zw)((0,
                                o.SU)(a)("sheetdialog.Tab")), 1), (0,
                                t._)("div", na, [(0,
                                t.Wm)(c, {
                                    modelValue: p.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e=>p.value = e),
                                    options: f.value,
                                    filled: "",
                                    dense: ""
                                }, null, 8, ["modelValue", "options"])])]), (0,
                                t._)("div", ia, [(0,
                                t._)("div", sa, (0,
                                i.zw)((0,
                                o.SU)(a)("sheetdialog.Column")), 1), (0,
                                t._)("div", ua, [(0,
                                t.Wm)(c, {
                                    modelValue: h.value,
                                    "onUpdate:modelValue": l[2] || (l[2] = e=>h.value = e),
                                    options: v.value,
                                    filled: "",
                                    dense: "",
                                    "emit-value": "",
                                    "map-options": ""
                                }, null, 8, ["modelValue", "options"])])]), (0,
                                t._)("div", ca, [(0,
                                t._)("div", ra, (0,
                                i.zw)((0,
                                o.SU)(a)("sheetdialog.First row")), 1), (0,
                                t._)("div", da, [(0,
                                t.Wm)(r, {
                                    modelValue: g.value,
                                    "onUpdate:modelValue": l[3] || (l[3] = e=>g.value = e),
                                    label: (0,
                                    o.SU)(a)("sheetdialog.Is a header and should not be imported")
                                }, null, 8, ["modelValue", "label"])])])])),
                                _: 1
                            }), (0,
                            t.Wm)(w, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(d, {
                                    unelevated: "",
                                    label: (0,
                                    o.SU)(a)("common.Cancel"),
                                    onClick: l[4] || (l[4] = e=>S())
                                }, null, 8, ["label"]), (0,
                                t.Wm)(d, {
                                    unelevated: "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(a)("common.OK"),
                                    onClick: l[5] || (l[5] = e=>y())
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
          , wa = ma
          , pa = wa;
        g()(ma, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QInput: me.Z,
            QSelect: Ue.Z,
            QCheckbox: vl.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        const ha = {
            class: "text-h6"
        }
          , fa = (0,
        t._)("i", {
            class: "fas fa-user-alt"
        }, null, -1)
          , va = {
            class: "row items-center q-gutter-x-md"
        }
          , ga = {
            class: "col-shrink"
        }
          , ka = ["src"]
          , Wa = {
            class: "col text-h5"
        }
          , _a = {
            class: "col-shrink"
        }
          , ya = {
            class: "q-gutter-x-md"
        }
          , Sa = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , n = (0,
                u.tv)()
                  , {t: d} = (0,
                r.QT)()
                  , m = (0,
                c.Z)()
                  , p = (0,
                o.iH)(!1);
                function h() {
                    (0,
                    w.trackEvent)("Wheel", "ShowAccountDialog"),
                    p.value = !0
                }
                function f() {
                    a.dispatch("logOut"),
                    p.value = !1
                }
                async function v() {
                    const e = d("profiledropdown.Are you sure you want to delete your account");
                    if (await B.iG(d, e)) {
                        m.loading.show();
                        try {
                            (0,
                            w.trackEvent)("Wheel", "DeleteAccount"),
                            await a.dispatch("deleteAccount"),
                            a.dispatch("resetWheel"),
                            B.c0(d("profiledropdown.Your account and your saved wheels have been deleted"))
                        } catch (l) {
                            B.x2(d, l),
                            (0,
                            w.trackException)("DeleteAccountError", l)
                        }
                        m.loading.hide(),
                        p.value = !1
                    }
                }
                return l({
                    show: h
                }),
                (e,l)=>{
                    const s = (0,
                    t.up)("q-space")
                      , u = (0,
                    t.up)("q-card-section")
                      , c = (0,
                    t.up)("q-avatar")
                      , r = (0,
                    t.up)("q-btn")
                      , m = (0,
                    t.up)("q-card-actions")
                      , w = (0,
                    t.up)("q-card")
                      , h = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(h, {
                        modelValue: p.value,
                        "onUpdate:modelValue": l[4] || (l[4] = e=>p.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(w, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(u, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", ha, [fa, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(d)("common.My account")), 1)]), (0,
                                t.Wm)(s), (0,
                                t.Wm)(Ie.Z)])),
                                _: 1
                            }), (0,
                            t.Wm)(u, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", va, [(0,
                                t._)("div", ga, [(0,
                                t.Wm)(c, {
                                    size: "64px"
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t._)("img", {
                                        src: e.$store.getters.userPhotoUrl
                                    }, null, 8, ka)])),
                                    _: 1
                                })]), (0,
                                t._)("div", Wa, (0,
                                i.zw)((0,
                                o.SU)(d)("profiledropdown.Signed in as", {
                                    name: (0,
                                    o.SU)(a).getters.userDisplayName
                                })), 1), (0,
                                t._)("div", _a, [(0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "warning",
                                    "text-color": "black",
                                    label: (0,
                                    o.SU)(d)("profiledropdown.Sign out"),
                                    onClick: l[0] || (l[0] = e=>f())
                                }, null, 8, ["label"])])]), (0,
                                t._)("div", ya, [(0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(d)("profiledropdown.Export my data"),
                                    onClick: l[1] || (l[1] = e=>(0,
                                    o.SU)(n).push("/export"))
                                }, null, 8, ["label"]), (0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "negative",
                                    label: (0,
                                    o.SU)(d)("profiledropdown.Delete my account"),
                                    onClick: l[2] || (l[2] = e=>v())
                                }, null, 8, ["label"])])])),
                                _: 1
                            }), (0,
                            t.Wm)(m, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(d)("common.Close"),
                                    onClick: l[3] || (l[3] = e=>p.value = !1)
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
          , Ua = Sa
          , ba = Ua;
        g()(Sa, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QSpace: x.Z,
            QAvatar: Z.Z,
            QBtn: f.Z,
            QCardActions: X.Z
        });
        var Ca = a(78821);
        const qa = e=>((0,
        t.dD)("data-v-06d9ceb7"),
        e = e(),
        (0,
        t.Cn)(),
        e)
          , Za = {
            class: "text-h6"
        }
          , xa = qa((()=>(0,
        t._)("i", {
            class: "fas fa-globe"
        }, null, -1)))
          , Qa = {
            class: "text-h6",
            style: {
                "margin-top": "16px"
            }
        }
          , Da = {
            class: "q-py-md"
        }
          , za = {
            class: "row items-start q-gutter-md"
        }
          , Va = ["onClick"]
          , Fa = {
            class: "text-h6",
            style: {
                "margin-top": "16px"
            }
        }
          , Ea = {
            class: "q-py-md",
            style: {
                height: "40vh",
                overflow: "auto"
            }
        }
          , Ha = {
            class: "row items-start q-gutter-md"
        }
          , Ta = ["onClick"]
          , La = {
            emits: ["language-changed"],
            setup(e, {expose: l, emit: a}) {
                const {t: n} = (0,
                r.QT)()
                  , s = (0,
                o.iH)(!1)
                  , u = (0,
                o.iH)([])
                  , c = (0,
                o.iH)([])
                  , d = (0,
                o.iH)("")
                  , m = (0,
                t.Fl)((()=>d.value.toLowerCase()))
                  , h = (0,
                t.Fl)((()=>u.value.filter((e=>!d.value || e.humanName.toLowerCase().includes(m.value)))));
                async function f() {
                    (0,
                    w.trackEvent)("Wheel", "ShowLanguageDialog"),
                    d.value = "",
                    s.value = !0,
                    u.value = p.NB(),
                    c.value = p.DA(navigator.languages);
                    try {
                        const e = await Ca.xi()
                          , l = [...navigator.languages, ...e];
                        c.value = p.DA(l)
                    } catch (e) {
                        (0,
                        w.trackException)("GetLangsForMyAddressError", e)
                    }
                }
                function v(e) {
                    (0,
                    w.trackEvent)("Wheel", "ChangeLanguageFromNewDialog"),
                    a("language-changed", e),
                    s.value = !1
                }
                return l({
                    show: f
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-space")
                      , u = (0,
                    t.up)("q-card-section")
                      , r = (0,
                    t.up)("q-input")
                      , m = (0,
                    t.up)("q-btn")
                      , w = (0,
                    t.up)("q-card-actions")
                      , p = (0,
                    t.up)("q-card")
                      , f = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(f, {
                        modelValue: s.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e=>s.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(p, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(u, {
                                class: "row items-center",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Za, [xa, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(n)("toolbar.Language")), 1)]), (0,
                                t.Wm)(a), (0,
                                t.Wm)(Ie.Z)])),
                                _: 1
                            }), (0,
                            t.Wm)(u, null, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t._)("div", Qa, (0,
                                i.zw)((0,
                                o.SU)(n)("languagedialog.Suggested languages")), 1), (0,
                                t._)("div", Da, [(0,
                                t._)("div", za, [((0,
                                t.wg)(!0),
                                (0,
                                t.iD)(t.HY, null, (0,
                                t.Ko)(c.value, (e=>((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", {
                                    key: "locale.name",
                                    onClick: l=>v(e.name),
                                    class: "language"
                                }, (0,
                                i.zw)(e.humanName), 9, Va)))), 128))])]), (0,
                                t._)("div", Fa, (0,
                                i.zw)((0,
                                o.SU)(n)("languagedialog.All languages")), 1), (0,
                                t.Wm)(r, {
                                    dense: "",
                                    filled: "",
                                    modelValue: d.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>d.value = e),
                                    placeholder: (0,
                                    o.SU)(n)("common.Search"),
                                    style: {
                                        "margin-top": "16px"
                                    }
                                }, null, 8, ["modelValue", "placeholder"]), (0,
                                t._)("div", Ea, [(0,
                                t._)("div", Ha, [((0,
                                t.wg)(!0),
                                (0,
                                t.iD)(t.HY, null, (0,
                                t.Ko)((0,
                                o.SU)(h), (e=>((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", {
                                    key: "locale.name",
                                    onClick: l=>v(e.name),
                                    class: "language"
                                }, (0,
                                i.zw)(e.humanName), 9, Ta)))), 128))])])])),
                                _: 1
                            }), (0,
                            t.Wm)(w, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(m, {
                                    unelevated: "",
                                    "no-caps": "",
                                    label: (0,
                                    o.SU)(n)("common.Close"),
                                    onClick: l[1] || (l[1] = e=>s.value = !1)
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
          , Aa = (0,
        b.Z)(La, [["__scopeId", "data-v-06d9ceb7"]])
          , Ia = Aa;
        g()(La, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QSpace: x.Z,
            QInput: me.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        const ja = (0,
        t._)("i", {
            class: "fas fa-pencil-alt"
        }, null, -1)
          , Ra = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , {t: u} = (0,
                r.QT)()
                  , c = (0,
                o.iH)(!1)
                  , d = (0,
                t.Fl)((()=>a.getters.wheelConfig))
                  , m = (0,
                o.iH)("")
                  , p = (0,
                o.iH)("");
                function h() {
                    (0,
                    w.trackEvent)("Wheel", "ShowTitleAndDescriptionDialog"),
                    m.value = d.value.title,
                    p.value = d.value.description,
                    c.value = !0
                }
                function f() {
                    (0,
                    w.trackEvent)("Wheel", "SetTitleAndDescription"),
                    a.commit("setWheelTitle", m.value),
                    a.commit("setWheelDescription", p.value),
                    v()
                }
                function v() {
                    c.value = !1
                }
                function g(e) {
                    e.preventDefault(),
                    f()
                }
                return l({
                    show: h
                }),
                (e,l)=>{
                    const a = (0,
                    t.up)("q-card-section")
                      , s = (0,
                    t.up)("q-input")
                      , r = (0,
                    t.up)("q-btn")
                      , d = (0,
                    t.up)("q-card-actions")
                      , w = (0,
                    t.up)("q-card")
                      , h = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(h, {
                        modelValue: c.value,
                        "onUpdate:modelValue": l[4] || (l[4] = e=>c.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(w, {
                            style: {
                                width: "640px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(a, {
                                class: "text-h6"
                            }, {
                                default: (0,
                                t.w5)((()=>[ja, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(u)("common.Edit title and description")), 1)])),
                                _: 1
                            }), (0,
                            t.Wm)(a, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(s, {
                                    autofocus: "",
                                    filled: "",
                                    dense: "",
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[0] || (l[0] = e=>m.value = e),
                                    ref: "wheelTitleInput",
                                    onKeydown: (0,
                                    n.D2)(g, ["native", "enter"]),
                                    maxlength: "50",
                                    placeholder: (0,
                                    o.SU)(u)("common.Wheel title")
                                }, null, 8, ["modelValue", "onKeydown", "placeholder"]), (0,
                                t.Wm)(s, {
                                    filled: "",
                                    dense: "",
                                    type: "textarea",
                                    modelValue: p.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = e=>p.value = e),
                                    onKeydown: (0,
                                    n.D2)(g, ["native", "enter"]),
                                    maxlength: "200",
                                    placeholder: (0,
                                    o.SU)(u)("common.Wheel description")
                                }, null, 8, ["modelValue", "onKeydown", "placeholder"])])),
                                _: 1
                            }), (0,
                            t.Wm)(d, {
                                align: "right"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    label: (0,
                                    o.SU)(u)("common.Cancel"),
                                    onClick: l[2] || (l[2] = e=>v())
                                }, null, 8, ["label"]), (0,
                                t.Wm)(r, {
                                    unelevated: "",
                                    color: "primary",
                                    label: (0,
                                    o.SU)(u)("common.OK"),
                                    onClick: l[3] || (l[3] = e=>f())
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
          , Pa = Ra
          , Ba = Pa;
        g()(Ra, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QInput: me.Z,
            QCardActions: X.Z,
            QBtn: f.Z
        });
        const Oa = {
            setup(e, {expose: l}) {
                const a = (0,
                s.oR)()
                  , {t} = (0,
                r.QT)();
                let o = 0;
                function n(e, l, t, n) {
                    o = (new Date).getTime(),
                    a.commit("linkSheet"),
                    i(e, l, t, n)
                }
                async function i(e, l, o, n) {
                    if (!u() && a.getters.sheetLinked)
                        try {
                            const t = await Kl(e, l, o, n)
                              , s = t.map((e=>(0,
                            w.removeHtml)(e)))
                              , {additions: u, removals: r} = (0,
                            w.getArrayDiff)(a.getters.wheelConfig.entries.map((e=>e.text)), s);
                            c(u),
                            a.commit("appendTextEntries", u),
                            a.commit("removeTextEntries", r),
                            setTimeout((()=>i(e, l, o, n)), 5e3)
                        } catch (s) {
                            a.commit("unlinkSheet"),
                            (0,
                            w.trackException)("ImportDataFromSpreadsheetError", s),
                            B.x2(t, s)
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
                        B.c0(l)
                    } else
                        e.forEach((e=>{
                            const l = t("sheetdialog.added", {
                                entry: (0,
                                w.removeHtml)(e)
                            });
                            B.c0(l)
                        }
                        ))
                }
                return l({
                    start: n
                }),
                (e,l)=>null
            }
        }
          , Na = Oa
          , Ma = Na;
        var Ga = a(15613)
          , Ya = a(92904)
          , Ka = a(64959);
        const $a = {
            style: {
                height: "4em"
            }
        }
          , Ja = {
            key: 0,
            class: "text-h3",
            style: {
                position: "absolute",
                color: "#34a853"
            }
        }
          , Xa = {
            key: 0,
            class: "text-h3",
            style: {
                position: "absolute",
                color: "#34a853"
            }
        }
          , et = {
            props: {
                title: String,
                increment: Number,
                fps: Number
            },
            setup(e) {
                const l = e
                  , a = (0,
                o.iH)(0)
                  , s = (0,
                o.iH)("")
                  , u = (0,
                o.iH)(!0);
                return (0,
                Ka.Zv)((()=>{
                    const e = new Date((new Date).getFullYear(),0,1)
                      , t = new Date;
                    a.value = (t - e) / 1e3 * l.increment,
                    s.value = Math.round(a.value).toLocaleString(),
                    u.value = !u.value
                }
                ), 1e3 / l.fps, {
                    immediateCallback: !0
                }),
                (l,a)=>((0,
                t.wg)(),
                (0,
                t.iD)("div", $a, [(0,
                t.Uk)((0,
                i.zw)(e.title) + " ", 1), (0,
                t.Wm)(n.uT, {
                    name: "fade",
                    mode: "in-out"
                }, {
                    default: (0,
                    t.w5)((()=>[u.value ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("p", Ja, (0,
                    i.zw)(s.value), 1)) : (0,
                    t.kq)("", !0)])),
                    _: 1
                }), (0,
                t.Wm)(n.uT, {
                    name: "fade",
                    mode: "in-out"
                }, {
                    default: (0,
                    t.w5)((()=>[u.value ? (0,
                    t.kq)("", !0) : ((0,
                    t.wg)(),
                    (0,
                    t.iD)("p", Xa, (0,
                    i.zw)(s.value), 1))])),
                    _: 1
                })]))
            }
        }
          , lt = (0,
        b.Z)(et, [["__scopeId", "data-v-e9540f52"]])
          , at = lt
          , tt = {
            class: "q-pa-md row items-start q-gutter-md"
        }
          , ot = {
            class: "col-md"
        }
          , nt = (0,
        t.Uk)(" What is the wheel spinner for? ")
          , it = (0,
        t.Uk)(" Every day we hear from people who use our website in new ways: ")
          , st = (0,
        t.Uk)(" Random name picker in the classroom: pick which student will answer the next question. ")
          , ut = (0,
        t.Uk)(" How to use it in the classroom ")
          , ct = (0,
        t._)("li", null, " If you are a retailer, spin the wheel to pick which loyal customer will get the monthly giveaway. ", -1)
          , rt = (0,
        t._)("li", null, " When you give a presentation, use the wheel spinner to pick a lucky winner among the attendees who turned in the survey. ", -1)
          , dt = (0,
        t._)("li", null, " Random name picker at work: in your daily standup meeting at work, randomize who speaks first. ", -1)
          , mt = (0,
        t._)("li", null, " If you are overwhelmed by your to do items, put them on a wheel and spin to find which one to start with. ", -1)
          , wt = (0,
        t._)("li", null, " If you can't agree on what to have for dinner, put the alternatives on the wheel and spin. ", -1)
          , pt = (0,
        t.Uk)("   ")
          , ht = (0,
        t.Uk)(" Does it use renewable energy? ")
          , ft = (0,
        t._)("p", null, " We are proud to share that 100% of the electricity that powers our servers is renewable, and 93% comes from carbon-free energy sources. ", -1)
          , vt = (0,
        t.Uk)("Sustainability")
          , gt = {
            class: "col-md"
        }
          , kt = (0,
        t.Uk)(" How to use the wheel spinner ")
          , Wt = (0,
        t.Uk)(" It's easy: type in your entries in the textbox to the right of the wheel, then click the wheel to spin it and get a random winner. To make the wheel your own by customizing the colors, sounds, and spin time, click ")
          , _t = (0,
        t._)("i", {
            class: "fas fa-palette"
        }, null, -1)
          , yt = (0,
        t.Uk)(" Customize")
          , St = (0,
        t.Uk)(" at the top of the page. ")
          , Ut = (0,
        t.Uk)(" Video reviews and tutorials by users ")
          , bt = (0,
        t.Uk)("   ")
          , Ct = (0,
        t._)("br", null, null, -1)
          , qt = (0,
        t._)("br", null, null, -1)
          , Zt = {
            class: "col-md"
        }
          , xt = (0,
        t.Uk)(" Is my data private? ")
          , Qt = (0,
        t._)("p", null, " We are committed to protecting and respecting your privacy and the security of your data. We comply with GDPR, CCPA, SB 190, SB 1392, and we closely monitor changes to them. We follow industry best practices for data encryption and backups. ", -1)
          , Dt = (0,
        t.Uk)(" How we safeguard your privacy ")
          , zt = (0,
        t.Uk)("   ")
          , Vt = (0,
        t.Uk)(" Can the wheel be rigged? ")
          , Ft = (0,
        t._)("p", null, " There is no functionality to determine which entry will win ahead of time. When you click the wheel, it accelerates for exactly one second, then it is set to a random rotation between 0 and 360 degrees, and finally it decelerates to a stop. The setting of a random rotation is not visible to the naked eye as it happens when the wheel is spinning quite fast. ", -1)
          , Et = (0,
        t.Uk)("Randomness of the wheel")
          , Ht = (0,
        t.Uk)(". ")
          , Tt = {
            setup(e) {
                const l = (0,
                s.oR)();
                return (e,a)=>{
                    const n = (0,
                    t.up)("router-link")
                      , s = (0,
                    t.up)("q-badge");
                    return (0,
                    t.wg)(),
                    (0,
                    t.iD)("div", tt, [(0,
                    t._)("div", ot, [(0,
                    t.Wm)(Ya.Z, null, {
                        header: (0,
                        t.w5)((()=>[nt])),
                        main: (0,
                        t.w5)((()=>[it, (0,
                        t._)("ul", null, [(0,
                        t._)("li", null, [st, (0,
                        t.Wm)(n, {
                            to: "/how-to-use-in-the-classroom"
                        }, {
                            default: (0,
                            t.w5)((()=>[ut])),
                            _: 1
                        })]), ct, rt, dt, mt, wt])])),
                        _: 1
                    }), pt, (0,
                    t.Wm)(Ya.Z, null, {
                        header: (0,
                        t.w5)((()=>[ht])),
                        main: (0,
                        t.w5)((()=>[ft, (0,
                        t._)("p", null, [(0,
                        t.Wm)(n, {
                            to: "/faq/sustainability"
                        }, {
                            default: (0,
                            t.w5)((()=>[vt])),
                            _: 1
                        })])])),
                        _: 1
                    })]), (0,
                    t._)("div", gt, [(0,
                    t.Wm)(Ya.Z, null, {
                        header: (0,
                        t.w5)((()=>[kt])),
                        main: (0,
                        t.w5)((()=>[(0,
                        t._)("p", null, [Wt, (0,
                        t.Wm)(s, {
                            color: "primary"
                        }, {
                            default: (0,
                            t.w5)((()=>[_t, yt])),
                            _: 1
                        }), St]), (0,
                        t._)("p", null, [(0,
                        t.Wm)(n, {
                            to: "/user-reviews-and-tutorials"
                        }, {
                            default: (0,
                            t.w5)((()=>[Ut])),
                            _: 1
                        })])])),
                        _: 1
                    }), bt, (0,
                    t.Wm)(Ya.Z, null, {
                        header: (0,
                        t.w5)((()=>[(0,
                        t.Uk)(" Activity in " + (0,
                        i.zw)((new Date).getFullYear()), 1)])),
                        main: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(at, {
                            title: "Wheel spins",
                            increment: (0,
                            o.SU)(l).getters.spinsPerSecond,
                            fps: .333333
                        }, null, 8, ["increment", "fps"]), Ct, (0,
                        t.Wm)(at, {
                            title: "Hours of spinning",
                            increment: (0,
                            o.SU)(l).getters.hoursSpunPerSecond,
                            fps: (0,
                            o.SU)(l).getters.hoursSpunPerSecond
                        }, null, 8, ["increment", "fps"]), qt])),
                        _: 1
                    })]), (0,
                    t._)("div", Zt, [(0,
                    t.Wm)(Ya.Z, null, {
                        header: (0,
                        t.w5)((()=>[xt])),
                        main: (0,
                        t.w5)((()=>[Qt, (0,
                        t._)("p", null, [(0,
                        t.Wm)(n, {
                            to: "/privacy-policy.html"
                        }, {
                            default: (0,
                            t.w5)((()=>[Dt])),
                            _: 1
                        })])])),
                        _: 1
                    }), zt, (0,
                    t.Wm)(Ya.Z, null, {
                        header: (0,
                        t.w5)((()=>[Vt])),
                        main: (0,
                        t.w5)((()=>[Ft, (0,
                        t._)("p", null, [(0,
                        t.Wm)(n, {
                            to: "/faq/randomness"
                        }, {
                            default: (0,
                            t.w5)((()=>[Et])),
                            _: 1
                        }), Ht])])),
                        _: 1
                    })])])
                }
            }
        };
        var Lt = a(20990);
        const At = Tt
          , It = At;
        g()(Tt, "components", {
            QBadge: Lt.Z
        });
        const jt = e=>((0,
        t.dD)("data-v-0c16652e"),
        e = e(),
        (0,
        t.Cn)(),
        e)
          , Rt = {
            class: "q-gutter-y-sm"
        }
          , Pt = {
            class: "row items-center q-gutter-x-md"
        }
          , Bt = {
            key: 0,
            style: {
                "font-size": "32px"
            },
            class: "break-long-words"
        }
          , Ot = {
            key: 0,
            class: "break-long-words"
        }
          , Nt = jt((()=>(0,
        t._)("div", {
            class: "q-pb-sm desktop-only"
        }, null, -1)))
          , Mt = {
            props: {
                editable: Boolean
            },
            emits: ["edit-title-and-description"],
            setup(e, {emit: l}) {
                const a = e
                  , u = (0,
                s.oR)()
                  , {t: c} = (0,
                r.QT)()
                  , d = (0,
                t.Fl)((()=>u.getters.wheelConfig))
                  , m = (0,
                t.Fl)((()=>d.value.title))
                  , w = (0,
                t.Fl)((()=>d.value.description));
                return (e,s)=>{
                    const u = (0,
                    t.up)("q-tooltip")
                      , r = (0,
                    t.up)("q-btn");
                    return (0,
                    t.wg)(),
                    (0,
                    t.iD)("div", Rt, [(0,
                    t._)("div", Pt, [(0,
                    o.SU)(m) ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("span", Bt, (0,
                    i.zw)((0,
                    o.SU)(m)), 1)) : (0,
                    t.kq)("", !0), (0,
                    t.wy)((0,
                    t.Wm)(r, {
                        round: "",
                        unelevated: "",
                        dense: "",
                        color: "primary",
                        icon: "fas fa-pencil-alt",
                        onClick: s[0] || (s[0] = e=>l("edit-title-and-description"))
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(u, null, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Uk)((0,
                            i.zw)((0,
                            o.SU)(c)("common.Edit title and description")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }, 512), [[n.F8, a.editable]])]), (0,
                    o.SU)(w) ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", Ot, (0,
                    i.zw)((0,
                    o.SU)(w)), 1)) : (0,
                    t.kq)("", !0), Nt])
                }
            }
        }
          , Gt = (0,
        b.Z)(Mt, [["__scopeId", "data-v-0c16652e"]])
          , Yt = Gt;
        g()(Mt, "components", {
            QBtn: f.Z,
            QTooltip: Q.Z
        });
        var Kt = a(77513);
        const $t = {
            key: 0,
            class: "root"
        }
          , Jt = {
            // class: "ad-declaration"
            class: ""
        }
          , Xt = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        }
          , eo = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        }
          , lo = {
            key: 0,
            class: "ad-declaration"
        }
          , ao = (0,
        t.uE)('<div class="card" data-v-a0146a12><div class="card-header" data-v-a0146a12><div class="card-header-title" data-v-a0146a12> How to report an inappropriate ad </div></div><div class="card-content" data-v-a0146a12><ol data-v-a0146a12><li data-v-a0146a12> Take a screenshot of this page. (Unsure how to take a screenshot? <a target="_new" href="https://www.take-a-screenshot.org/" data-v-a0146a12>See instructions here</a>.) </li><li data-v-a0146a12> Create an email with the subject line <b data-v-a0146a12>Bad ad</b></li><li data-v-a0146a12> Attach the screenshot to the email and send it to admin@wheelofnames.com. </li></ol></div></div>', 1)
          , to = [ao]
          , oo = ["id"]
          , no = ["id"]
          , io = {
            setup(e) {
                const l = (0,
                s.oR)()
                  , {t: a} = (0,
                r.QT)()
                  , n = (0,
                t.Fl)((()=>l.getters.advertiser))
                  , u = (0,
                t.Fl)((()=>!c.value && n.value && "none" !== n.value))
                  , c = (0,
                o.iH)(!1)
                  , d = (0,
                o.iH)(!1);
                function m() {
                    w.trackEvent("Wheel", "HideDesktopAd", ""),
                    console.log('Calling ramp.destroyUnits("med_rect_atf")'),
                    "function" === typeof ramp.destroyUnits && ramp.destroyUnits("med_rect_atf"),
                    c.value = !0
                }
                function p() {
                    d.value = !d.value,
                    w.trackEvent("Wheel", "ToggleBadAdInstructions", d.value ? "Show" : "Hide")
                }
                return (e,l)=>{
                    const n = (0,
                    t.up)("q-btn");
                    return (0,
                    o.SU)(u) ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", $t, [(0,
                    t._)("div", Jt, [(0,
                    t._)("span", Xt, [(0,
                    t.Uk)((0,
                    i.zw)((0,
                    o.SU)(a)("app.Report bad ad")) + " ", 1), (0,
                    t.Wm)(n, {
                        onClick: l[0] || (l[0] = e=>p()),
                        // icon: "fas fa-flag",
                        icon: "",
                        flat: "",
                        round: "",
                        size: "sm"
                    })]), (0,
                    t._)("span", eo, [(0,
                    t.Uk)((0,
                    i.zw)((0,
                    o.SU)(a)("app.Close ad")) + " ", 1), (0,
                    t.Wm)(n, {
                        onClick: l[1] || (l[1] = e=>m()),
                        icon: "",
                        // icon: "fas fa-times-circle",
                        flat: "",
                        round: "",
                        size: "sm"
                    })])]), d.value ? ((0,
                    t.wg)(),
                    (0,
                    t.iD)("div", lo, to)) : (0,
                    t.kq)("", !0), (0,
                    t._)("div", {
                        id: (0,
                        o.SU)(Kt.qe).topDesktop
                    }, null, 8, oo), (0,
                    t._)("div", {
                        id: (0,
                        o.SU)(Kt.qe).bottomDesktop
                    }, null, 8, no)])) : (0,
                    t.kq)("", !0)
                }
            }
        }
          , so = (0,
        b.Z)(io, [["__scopeId", "data-v-a0146a12"]])
          , uo = so;
        g()(io, "components", {
            QBtn: f.Z
        });
        var co = a(51074)
          , ro = a(20332)
          , mo = a(80149);
        const wo = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
          , po = "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets.readonly";
        let ho;
        function fo(e) {
            return ho = e,
            new Promise((function(e, l) {
                gapi.load("auth2:client:picker", (function() {
                    gapi.client.init({
                        apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                        discoveryDocs: wo,
                        clientId: "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com",
                        scope: po
                    }).then((()=>{
                        gapi.client.setToken({
                            access_token: ho
                        }),
                        e()
                    }
                    ))
                }
                ))
            }
            ))
        }
        function vo() {
            return new Promise((function(e, l) {
                const a = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS)
                  , t = (new google.picker.PickerBuilder).enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId("1096958520212").setOAuthToken(ho).addView(a).setDeveloperKey("AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g").setCallback((function(a) {
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
        const go = {
            setup(e) {
                const l = (0,
                s.oR)();
                function a() {
                    const e = l.getters.version
                      , a = (0,
                    w.getFeedbackFormUrl)(navigator.userAgent, e);
                    window.open(a, "_new")
                }
                return (e,l)=>{
                    const o = (0,
                    t.up)("q-btn");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(o, {
                        color: "primary",
                        label: "Send us your feedback!",
                        icon: "fa fa-comment",
                        "no-caps": "",
                        class: "q-mb-md",
                        onClick: a
                    })
                }
            }
        }
          , ko = go
          , Wo = ko;
        g()(go, "components", {
            QBtn: f.Z
        });
        const _o = e=>((0,
        t.dD)("data-v-03e72d16"),
        e = e(),
        (0,
        t.Cn)(),
        e)
          , yo = {
            key: 0,
            style: {
                "text-align": "center"
            }
        }
          , So = _o((()=>(0,
        t._)("span", {
            class: "banner-left"
        }, "    ", -1)))
          , Uo = {
            class: "banner-text"
        }
          , bo = _o((()=>(0,
        t._)("span", {
            class: "banner-right"
        }, "    ", -1)))
          , Co = {
            setup(e) {
                const l = (0,
                s.oR)()
                  , a = (0,
                o.iH)(!0)
                  , n = ()=>{
                    a.value = !1
                }
                ;
                return (e,s)=>a.value && (0,
                o.SU)(l).getters.maintenanceMessage ? ((0,
                t.wg)(),
                (0,
                t.iD)("div", yo, [So, (0,
                t._)("span", Uo, (0,
                i.zw)((0,
                o.SU)(l).getters.maintenanceMessage), 1), bo, (0,
                t._)("span", null, [(0,
                t._)("i", {
                    class: "fas fa-times close-icon",
                    onClick: s[0] || (s[0] = e=>n())
                })])])) : (0,
                t.kq)("", !0)
            }
        }
          , qo = (0,
        b.Z)(Co, [["__scopeId", "data-v-03e72d16"]])
          , Zo = qo
          , xo = {
            key: 0
        }
          , Qo = (0,
        t._)("i", {
            class: "fas fa-save"
        }, null, -1)
          , Do = {
            key: 1
        }
          , zo = (0,
        t._)("i", {
            class: "fas fa-folder-open"
        }, null, -1)
          , Vo = {
            class: "q-mt-md"
        }
          , Fo = {
            key: 0
        }
          , Eo = {
            key: 1
        }
          , Ho = {
            class: "q-gutter-x-md"
        }
          , To = {
            class: "q-mt-md"
        }
          , Lo = {
            key: 0
        }
          , Ao = {
            key: 1
        }
          , Io = (0,
        t._)("i", {
            class: "fa-regular fa-circle-question q-mr-sm"
        }, null, -1)
          , jo = {
            setup(e, {expose: l}) {
                const {t: a} = (0,
                r.QT)()
                  , n = (0,
                o.iH)(!1)
                  , s = (0,
                o.iH)("");
                let u, c;
                function d(e) {
                    return s.value = e,
                    n.value = !0,
                    new Promise(((e,l)=>{
                        u = e,
                        c = l
                    }
                    ))
                }
                function m(e) {
                    (0,
                    w.trackEvent)("Wheel", "WheelLocationDialog", e),
                    u(e),
                    n.value = !1
                }
                return l({
                    askUserForLocation: d
                }),
                (e,l)=>{
                    const u = (0,
                    t.up)("q-space")
                      , c = (0,
                    t.up)("q-card-section")
                      , r = (0,
                    t.up)("q-icon")
                      , d = (0,
                    t.up)("q-btn")
                      , w = (0,
                    t.up)("router-link")
                      , p = (0,
                    t.up)("q-card")
                      , h = (0,
                    t.up)("q-dialog");
                    return (0,
                    t.wg)(),
                    (0,
                    t.j4)(h, {
                        modelValue: n.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e=>n.value = e)
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(p, {
                            style: {
                                width: "400px"
                            }
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(c, {
                                class: "row items-center text-h6",
                                style: {
                                    "background-color": "#00000020"
                                }
                            }, {
                                default: (0,
                                t.w5)((()=>["save" === s.value ? ((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", xo, [Qo, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(a)("savedialog.Save wheel")), 1)])) : ((0,
                                t.wg)(),
                                (0,
                                t.iD)("div", Do, [zo, (0,
                                t.Uk)(" " + (0,
                                i.zw)((0,
                                o.SU)(a)("opendialog.Open wheel")), 1)])), (0,
                                t.Wm)(u), (0,
                                t.Wm)(Ie.Z)])),
                                _: 1
                            }), (0,
                            t.Wm)(c, {
                                class: "q-gutter-y-md"
                            }, {
                                default: (0,
                                t.w5)((()=>[(0,
                                t.Wm)(d, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "primary",
                                    padding: "lg",
                                    onClick: l[0] || (l[0] = e=>m("cloud")),
                                    style: {
                                        width: "100%"
                                    }
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t._)("div", null, [(0,
                                    t.Wm)(r, {
                                        name: "fas fa-cloud",
                                        size: "8em"
                                    }), (0,
                                    t._)("div", Vo, ["save" === s.value ? ((0,
                                    t.wg)(),
                                    (0,
                                    t.iD)("span", Fo, (0,
                                    i.zw)((0,
                                    o.SU)(a)("savedialog.Save to the cloud (recommended)")), 1)) : ((0,
                                    t.wg)(),
                                    (0,
                                    t.iD)("span", Eo, (0,
                                    i.zw)((0,
                                    o.SU)(a)("opendialog.Open from the cloud (recommended)")), 1))])])])),
                                    _: 1
                                }), (0,
                                t.Wm)(d, {
                                    unelevated: "",
                                    "no-caps": "",
                                    color: "grey-7",
                                    padding: "sm",
                                    onClick: l[1] || (l[1] = e=>m("local")),
                                    style: {
                                        width: "100%"
                                    }
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t._)("div", Ho, [(0,
                                    t.Wm)(r, {
                                        name: "fas fa-hard-drive",
                                        size: "4em"
                                    }), (0,
                                    t._)("span", To, ["save" === s.value ? ((0,
                                    t.wg)(),
                                    (0,
                                    t.iD)("span", Lo, (0,
                                    i.zw)((0,
                                    o.SU)(a)("savedialog.Save to a local file")), 1)) : ((0,
                                    t.wg)(),
                                    (0,
                                    t.iD)("span", Ao, (0,
                                    i.zw)((0,
                                    o.SU)(a)("opendialog.Open a local file")), 1))])])])),
                                    _: 1
                                }), (0,
                                t._)("div", null, [Io, (0,
                                t.Wm)(w, {
                                    target: "_blank",
                                    to: "/faq/saving"
                                }, {
                                    default: (0,
                                    t.w5)((()=>[(0,
                                    t.Uk)((0,
                                    i.zw)((0,
                                    o.SU)(a)("app.Help me choose")), 1)])),
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
          , Ro = jo
          , Po = Ro;
        g()(jo, "components", {
            QDialog: K.Z,
            QCard: $.Z,
            QCardSection: J.Z,
            QSpace: x.Z,
            QBtn: f.Z,
            QIcon: E.Z
        });
        var Bo = a(5613);
        const Oo = {
            class: "q-pa-md"
        }
          , No = {
            style: {
                height: "600px"
            }
        }
          , Mo = {
            key: 0
        }
          , Go = (0,
        t._)("hr", null, null, -1)
          , Yo = {
            class: "q-px-md q-pt-md row"
        }
          , Ko = {
            class: "col-3"
        }
          , $o = {
            class: "col-6"
        }
          , Jo = {
            key: 0
        }
          , Xo = (0,
        t._)("hr", null, null, -1)
          , en = {
            key: 1
        }
          , ln = {
            setup(e) {
                const l = (0,
                s.oR)()
                  , h = (0,
                u.tv)()
                  , f = (0,
                u.yj)()
                  , v = (0,
                c.Z)()
                  , {t: g, locale: k, setLocaleMessage: W} = (0,
                r.QT)()
                  , {shouldUseMobileLayout: _} = (0,
                Bo.a)();
                async function y(e) {
                    (0,
                    w.trackEvent)("Wheel", "ChangeLanguage"),
                    S(e),
                    h.push(`/${(0,
                    w.getNonEnglishLocale)(e)}`).catch((e=>{
                        console.error(e)
                    }
                    ))
                }
                async function S(e) {
                    if (!e)
                        return;
                    if (!U(e))
                        return;
                    b(e);
                    const l = await C(e);
                    W(e, l),
                    k.value = e
                }
                function U(e) {
                    return p.NB().find((l=>l.name == e))
                }
                function b(e) {
                    const l = p.uq(e, navigator.languages);
                    l && setTimeout((async()=>{
                        const e = await C(l)
                          , a = e["app"]["Click the Language menu"];
                        (0,
                        B.c0)(a)
                    }
                    ), 3e3)
                }
                async function C(e) {
                    const l = p.VX(e)
                      , t = await a(30890)(`./${l}`);
                    return t.default
                }
                (0,
                t.bv)((async()=>{
                    await S(f.params.lang || "en"),
                    l.dispatch("loadInitialEditableWheel"),
                    l.dispatch("loadServerSettings"),
                    await l.dispatch("loadPreferences"),
                    v.dark.set(l.getters.darkMode),
                    de(l.getters.advertiser),
                    setTimeout((()=>{
                        l.getters.wheelIsAdvanced && !l.getters.wheelConfig.usesAdvancedFeatures() && ((0,
                        w.trackEvent)("Wheel", "AdvancedWheelAutoDowngraded"),
                        l.dispatch("setAdvanced", !1))
                    }
                    ), 200)
                }
                )),
                (0,
                t.Ah)((()=>{
                    Kt.bG()
                }
                ));
                const {width: q, height: Z} = (0,
                d.iPe)()
                  , x = 56
                  , Q = 16
                  , D = (0,
                t.Fl)((()=>Z.value - (x + Q)))
                  , z = (0,
                o.iH)(null)
                  , V = (0,
                o.iH)(null)
                  , F = (0,
                o.iH)(null)
                  , E = (0,
                t.Fl)((()=>l.getters.wheelConfig));
                function H() {
                    (0,
                    w.trackEvent)("Wheel", "NewWheel"),
                    l.commit("saveWheelConfigForUndo"),
                    l.dispatch("resetWheel"),
                    T(),
                    (0,
                    B.H8)(g, g("app.Loaded default names and options"), (()=>{
                        (0,
                        w.trackEvent)("Wheel", "UndoNewWheel"),
                        l.commit("undoWheelConfigChange")
                    }
                    ));
                    const e = p.qC(location.hostname, k.value);
                    h.replace(e)
                }
                function T() {
                    z.value.resetRotation()
                }
                function L() {
                    const e = p.qC(location.hostname, k.value);
                    window.history.replaceState({}, "", e)
                }
                function A(e) {
                    E.value.displayWinnerDialog && V.value.show(e),
                    E.value.animateWinner && F.value.show(e),
                    E.value.launchConfetti && (0,
                    ro.u)(E.value.getCoalescedColors())
                }
                (0,
                t.YP)((()=>E.value), (()=>{
                    co.qb(E.value.duringSpinSound, E.value.afterSpinSound)
                }
                ));
                const I = (0,
                o.iH)(null)
                  , O = (0,
                o.iH)(null);
                async function N() {
                    let e;
                    do {
                        let a = l.getters.wheelLocation;
                        "cloud" !== a && (a = await J.value.askUserForLocation("open"),
                        l.commit("setWheelLocation", a)),
                        e = await ("local" === a ? Y() : M()),
                        "switch" === e && l.commit("switchWheelLocation")
                    } while ("switch" === e)
                }
                async function M() {
                    try {
                        if (!await G()) {
                            const e = await I.value.askUserToLogIn("open");
                            if ("switch" === e)
                                return l.commit("switchWheelLocation"),
                                Y()
                        }
                        if (await G())
                            return await O.value.show()
                    } catch (e) {
                        (0,
                        B.x2)(g, e),
                        (0,
                        w.trackException)("OpenWheelError", e)
                    }
                }
                async function G() {
                    return await l.dispatch("userIsLoggedIn")
                }
                async function Y() {
                    try {
                        const e = await (0,
                        m.I$)({
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
                        B.x2)(g, e),
                        (0,
                        w.trackException)("OpenWheelFromLocalFileError", e)
                    }
                }
                const K = (0,
                o.iH)(null)
                  , $ = (0,
                o.iH)(null)
                  , J = (0,
                o.iH)(null);
                async function X() {
                    let e;
                    do {
                        const a = l.getters.wheelLocation || await J.value.askUserForLocation("save");
                        l.commit("setWheelLocation", a),
                        e = await ("local" === a ? ae() : ee()),
                        "switch" === e && l.commit("switchWheelLocation")
                    } while ("switch" === e)
                }
                async function ee() {
                    if (E.value.isTooBigForDatabase())
                        return (0,
                        w.trackEvent)("Wheel", "WheelTooBigForDatabase", ""),
                        void (0,
                        B.om)(g, g("savedialog.Sorry, too many images"));
                    try {
                        if (!await G()) {
                            const e = await I.value.askUserToLogIn("save");
                            if ("switch" === e)
                                return l.commit("switchWheelLocation"),
                                ae()
                        }
                        if (await G()) {
                            const e = await K.value.show();
                            return L(),
                            e
                        }
                    } catch (e) {
                        (0,
                        B.x2)(g, e),
                        (0,
                        w.trackException)("SaveWheelError", e)
                    }
                }
                function ae() {
                    return $.value.show()
                }
                const te = (0,
                o.iH)(null)
                  , oe = (0,
                o.iH)(null)
                  , ne = (0,
                o.iH)(null)
                  , ie = (0,
                o.iH)(null)
                  , se = (0,
                o.iH)(null);
                async function ue() {
                    if (E.value.isTooBigForDatabase())
                        return (0,
                        w.trackEvent)("Wheel", "WheelTooBigForDatabase", ""),
                        void (0,
                        B.om)(g, g("savedialog.Sorry, too many images"));
                    try {
                        const {openMySharedWheels: e, openShareSettings: l} = await te.value.show();
                        if (e && oe.value.show(),
                        l) {
                            const e = await ne.value.askUserForSettings();
                            if (!e)
                                return;
                            let l, a;
                            if ("live" === e) {
                                const e = await se.value.show();
                                if (!e)
                                    return;
                                l = e.editPermissions,
                                a = e.password
                            }
                            await ie.value.share(e, l, a)
                        }
                    } catch (e) {
                        (0,
                        B.x2)(g, e),
                        (0,
                        w.trackException)("ShareWheelError", e)
                    }
                }
                const ce = (0,
                t.Fl)((()=>v.fullscreen.isActive))
                  , re = (0,
                t.Fl)((()=>!ce.value && !v.platform.is.capacitor && !v.platform.within.iframe));
                function de(e) {
                    we.value || Kt.YY(e)
                }
                (0,
                t.YP)((()=>l.getters.advertiser), de);
                const me = (0,
                t.Fl)((()=>window.location.host.includes("preview")))
                  , we = (0,
                t.Fl)((()=>window.location.pathname.includes("/noads")))
                  , he = (0,
                t.Fl)((()=>v.platform.is.desktop && !we.value))
                  , fe = (0,
                o.iH)(null);
                function ve() {
                    fe.value.show()
                }
                const ge = (0,
                o.iH)(null)
                  , ke = (0,
                o.iH)(null)
                  , We = (0,
                o.iH)(null);
                async function _e() {
                    l.commit("unlinkSheet");
                    const e = await ge.value.askUserToLogIn();
                    if (e) {
                        await fo(e);
                        const l = await vo();
                        if (l) {
                            const {tab: e, column: a, skipFirstRow: t} = await ke.value.askUserToConfigure(l);
                            e && a && We.value.start(l, e, a, t)
                        }
                    }
                }
                const ye = (0,
                o.iH)(null);
                async function Se() {
                    try {
                        await G() || await I.value.askUserToLogIn(),
                        await G() && await ye.value.show()
                    } catch (e) {
                        (0,
                        B.x2)(g, e),
                        (0,
                        w.trackException)("AccountDialogError", e)
                    }
                }
                const Ue = (0,
                o.iH)(null);
                function be() {
                    Ue.value.show()
                }
                const qe = (0,
                o.iH)(null);
                function Ze() {
                    qe.value.show()
                }
                const xe = (0,
                t.Fl)((()=>"e2d6"))
                  , Qe = (0,
                t.Fl)((()=>l.getters.commitHash));
                return (e,l)=>{
                    const a = (0,
                    t.up)("q-header")
                      , s = (0,
                    t.up)("q-page-container")
                      , u = (0,
                    t.up)("q-layout");
                    return (0,
                    t.wg)(),
                    (0,
                    t.iD)(t.HY, null, [(0,
                    t.Wm)(u, {
                        view: "hhh lpr fff"
                    }, {
                        default: (0,
                        t.w5)((()=>[(0,
                        t.Wm)(a, {
                            reveal: "",
                            elevated: "",
                            class: "bg-primary text-white"
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t.Wm)(Zo), (0,
                            t.Wm)(j, {
                                onResetWheel: H,
                                onOpenWheel: N,
                                onSaveWheel: X,
                                onShareWheel: ue,
                                onCustomizeWheel: ve,
                                onLinkSheet: _e,
                                onOpenAccountDialog: Se,
                                onLanguageChanged: y,
                                onOpenLanguages: be
                            })])),
                            _: 1
                        }), (0,
                        o.SU)(_) ? ((0,
                        t.wg)(),
                        (0,
                        t.j4)(s, {
                            key: 0
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t._)("div", Oo, [(0,
                            o.SU)(me) ? ((0,
                            t.wg)(),
                            (0,
                            t.j4)(Wo, {
                                key: 0
                            })) : (0,
                            t.kq)("", !0), (0,
                            t.wy)((0,
                            t.Wm)(Yt, {
                                editable: !(0,
                                o.SU)(ce),
                                onEditTitleAndDescription: l[0] || (l[0] = e=>Ze())
                            }, null, 8, ["editable"]), [[n.F8, (0,
                            o.SU)(E).showTitle]]), (0,
                            t.Wm)(R.Z, {
                                ref_key: "spinningWheel",
                                ref: z,
                                onWheelStopped: A
                            }, null, 512), (0,
                            t._)("div", No, [(0,
                            t.wy)((0,
                            t.Wm)(Ga.Z, {
                                showAppInfo: !0
                            }, null, 512), [[n.F8, !(0,
                            o.SU)(ce)]])])]), (0,
                            o.SU)(re) ? ((0,
                            t.wg)(),
                            (0,
                            t.iD)("div", Mo, [Go, (0,
                            t.Wm)(It)])) : (0,
                            t.kq)("", !0), (0,
                            t.Uk)(" " + (0,
                            i.zw)((0,
                            o.SU)(xe)) + " / " + (0,
                            i.zw)((0,
                            o.SU)(Qe)), 1)])),
                            _: 1
                        })) : ((0,
                        t.wg)(),
                        (0,
                        t.j4)(s, {
                            key: 1
                        }, {
                            default: (0,
                            t.w5)((()=>[(0,
                            t._)("div", Yo, [(0,
                            t._)("div", Ko, [(0,
                            o.SU)(me) ? ((0,
                            t.wg)(),
                            (0,
                            t.j4)(Wo, {
                                key: 0
                            })) : (0,
                            t.kq)("", !0), (0,
                            t.wy)((0,
                            t.Wm)(Yt, {
                                editable: !(0,
                                o.SU)(ce),
                                onEditTitleAndDescription: l[1] || (l[1] = e=>Ze())
                            }, null, 8, ["editable"]), [[n.F8, (0,
                            o.SU)(E).showTitle]]), (0,
                            o.SU)(he) ? (0,
                            t.wy)(((0,
                            t.wg)(),
                            (0,
                            t.j4)(uo, {
                                key: 1
                            }, null, 512)), [[n.F8, !(0,
                            o.SU)(ce)]]) : (0,
                            t.kq)("", !0)]), (0,
                            t._)("div", $o, [(0,
                            t.Wm)(R.Z, {
                                ref_key: "spinningWheel",
                                ref: z,
                                onWheelStopped: A
                            }, null, 512)]), (0,
                            t._)("div", {
                                class: "col-3 q-pb-md",
                                style: (0,
                                i.j5)("height: " + (0,
                                o.SU)(D) + "px")
                            }, [(0,
                            t.wy)((0,
                            t.Wm)(Ga.Z, {
                                showAppInfo: !0
                            }, null, 512), [[n.F8, !(0,
                            o.SU)(ce)]])], 4)]), (0,
                            o.SU)(re) ? ((0,
                            t.wg)(),
                            (0,
                            t.iD)("div", Jo, [Xo, (0,
                            t.Wm)(It)])) : (0,
                            t.kq)("", !0), (0,
                            o.SU)(re) ? ((0,
                            t.wg)(),
                            (0,
                            t.iD)("div", en, (0,
                            i.zw)((0,
                            o.SU)(xe)) + " / " + (0,
                            i.zw)((0,
                            o.SU)(Qe)), 1)) : (0,
                            t.kq)("", !0)])),
                            _: 1
                        })), (0,
                        t.Wm)(P.Z, {
                            ref_key: "winnerDialog",
                            ref: V
                        }, null, 512), (0,
                        t.Wm)(le, {
                            ref_key: "loginDialog",
                            ref: I
                        }, null, 512), (0,
                        t.Wm)(pe, {
                            ref_key: "openDialog",
                            ref: O,
                            onResetWheelRotation: T,
                            onResetAddressBar: L
                        }, null, 512), (0,
                        t.Wm)(Ce, {
                            ref_key: "saveCloudDialog",
                            ref: K
                        }, null, 512), (0,
                        t.Wm)(Fe, {
                            ref_key: "saveLocalDialog",
                            ref: $
                        }, null, 512), (0,
                        t.Wm)(Ae, {
                            ref_key: "shareDialogInfo",
                            ref: te
                        }, null, 512), (0,
                        t.Wm)(sl, {
                            ref_key: "shareDialogMySharedWheels",
                            ref: oe
                        }, null, 512), (0,
                        t.Wm)(Wl, {
                            ref_key: "shareDialogSettings",
                            ref: ne
                        }, null, 512), (0,
                        t.Wm)(Zl, {
                            ref_key: "shareDialogLink",
                            ref: ie
                        }, null, 512), (0,
                        t.Wm)(Ll, {
                            ref_key: "liveWheelPermissionDialog",
                            ref: se
                        }, null, 512), (0,
                        t.Wm)(Al.Z, {
                            ref_key: "customizeDialog",
                            ref: fe
                        }, null, 512), (0,
                        t.Wm)(Nl, {
                            ref_key: "sheetLoginDialog",
                            ref: ge
                        }, null, 512), (0,
                        t.Wm)(pa, {
                            ref_key: "sheetConfigDialog",
                            ref: ke
                        }, null, 512), (0,
                        t.Wm)(Ma, {
                            ref_key: "sheetDataPump",
                            ref: We
                        }, null, 512), (0,
                        t.Wm)(ba, {
                            ref_key: "accountDialog",
                            ref: ye
                        }, null, 512), (0,
                        t.Wm)(Ia, {
                            ref_key: "languageDialog",
                            ref: Ue,
                            onLanguageChanged: y
                        }, null, 512), (0,
                        t.Wm)(Ba, {
                            ref_key: "titleAndDescriptionDialog",
                            ref: qe
                        }, null, 512), (0,
                        t.Wm)(Po, {
                            ref_key: "wheelLocationDialog",
                            ref: J
                        }, null, 512)])),
                        _: 1
                    }), (0,
                    t.Wm)(mo.Z, {
                        ref_key: "winnerAnimation",
                        ref: F
                    }, null, 512)], 64)
                }
            }
        };
        var an = a(20249)
          , tn = a(16602)
          , on = a(12133);
        const nn = ln
          , sn = nn;
        g()(ln, "components", {
            QLayout: an.Z,
            QHeader: tn.Z,
            QPageContainer: on.Z
        })
    }
}]);
