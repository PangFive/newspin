( () => {
  "use strict";
  var e = {
      2661: (e, t, n) => {
          var a = n(9104)
            , o = n(6501)
            , i = n(8734)
            , s = n(1758)
            , r = n(455)
            , l = n(6980)
            , c = n(7387)
            , h = n(4907)
            , m = n(6583)
            , u = n(6787)
            , d = n(1895);
          const g = {
              __name: "App",
              setup(e) {
                  const t = (0,
                  r.lq)()
                    , n = (0,
                  l.Pj)()
                    , a = (0,
                  h.A)()
                    , {t: o, locale: i} = (0,
                  c.s9)();
                  (0,
                  u.Zf)();
                  const g = (0,
                  s.EW)(( () => t.path.includes("faq") ? "FAQ" : t.path.includes("reviews") ? "Reviews & tutorials" : t.path.includes("classroom") ? "Classroom" : t.path.includes("privacy") ? "Privacy policy" : t.path.includes("changelog") ? "Changelog" : t.path.includes("export") ? "Export" : t.path.includes("admin") ? "Admin" : t.path.includes("gallery") ? o("toolbar.Gallery") : n.getters.wheelConfig.title ? n.getters.wheelConfig.title : "Wheel of Names | " + o("app.Random name picker")));
                  (0,
                  m.K7Q)(g);
                  const p = (0,
                  s.EW)(( () => n.getters.wheelConfig))
                    , w = (0,
                  s.EW)(( () => {
                      const e = ["faq", "reviews", "classroom", "privacy", "changelog", "admin", "gallery"];
                      return !e.find((e => t.path.includes(e)))
                  }
                  ));
                  function f(e, t) {
                      t = w.value ? (0,
                      d.PE)(e, t) : e ? "#121212" : "#FFFFFF",
                      document.documentElement.style.backgroundColor = t,
                      document.body.style.backgroundColor = t
                  }
                  function y() {
                      let e = "en";
                      w.value && (e = i.value),
                      document.documentElement.setAttribute("lang", e)
                  }
                  function v() {
                      let e = "";
                      w.value && (e = o("app.Free and easy to use")),
                      document.querySelector('meta[name="description"]').setAttribute("content", e)
                  }
                  return (0,
                  s.wB)(( () => p.value.pageBackgroundColor), ( () => {
                      f(a.dark.isActive, p.value.pageBackgroundColor)
                  }
                  )),
                  (0,
                  s.wB)(( () => a.dark.isActive), ( () => {
                      f(a.dark.isActive, p.value.pageBackgroundColor)
                  }
                  )),
                  (0,
                  s.wB)(( () => t.path), ( () => {
                      f(a.dark.isActive, p.value.pageBackgroundColor)
                  }
                  )),
                  (0,
                  s.wB)(( () => t.path), ( () => {
                      y(),
                      v()
                  }
                  ), {
                      immediate: !0
                  }),
                  (0,
                  s.wB)(( () => i.value), ( () => {
                      y(),
                      v()
                  }
                  )),
                  (e, t) => {
                      const n = (0,
                      s.g2)("router-view");
                      return (0,
                      s.uX)(),
                      (0,
                      s.Wv)(n)
                  }
              }
          }
            , p = g
            , w = p;
          var f = n(1519)
            , y = n(1573);
          const v = [{
              path: "/faq.html",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(1296)]).then(n.bind(n, 9164))
          }, {
              path: "/faq/:section?",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(1296)]).then(n.bind(n, 9164))
          }, {
              path: "/user-reviews-and-tutorials",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(7869)]).then(n.bind(n, 3957))
          }, {
              path: "/how-to-use-in-the-classroom",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(4249)]).then(n.bind(n, 9651))
          }, {
              path: "/privacy-policy.html",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(5454)]).then(n.bind(n, 5156))
          }, {
              path: "/privacy-policy",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(5454)]).then(n.bind(n, 5156))
          }, {
              path: "/changelog",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(9406)]).then(n.bind(n, 1136))
          }, {
              path: "/gallery",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(2458)]).then(n.bind(n, 6189))
          }, {
              path: "/my-wheels",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(4616)]).then(n.bind(n, 6732))
          }, {
              path: "/noads",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(6129)]).then(n.bind(n, 8647))
          }, {
              path: "/enthusiast",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(6129)]).then(n.bind(n, 8647))
          }, {
              path: "/api-doc",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(2484)]).then(n.bind(n, 6511))
          }, {
              path: "/:lang([a-z][a-z])?",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(6129)]).then(n.bind(n, 8647))
          }, {
              path: "/:lang([a-z][a-z]-[A-Z][A-Z])?",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(6129)]).then(n.bind(n, 8647))
          }, {
              path: "/:lang([a-z][a-z][a-z])",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(6129)]).then(n.bind(n, 8647))
          }, {
              path: "/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(3328)]).then(n.bind(n, 5028))
          }, {
              path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(3328)]).then(n.bind(n, 5028))
          }, {
              path: "/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(3328)]).then(n.bind(n, 5028))
          }, {
              path: "/view/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(3328)]).then(n.bind(n, 5028))
          }, {
              path: "/view/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(3328)]).then(n.bind(n, 5028))
          }, {
              path: "/view/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(3328)]).then(n.bind(n, 5028))
          }, {
              path: "/:lang([a-z][a-z])?/gallery",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(2458)]).then(n.bind(n, 6189))
          }, {
              path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/gallery",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(2458)]).then(n.bind(n, 6189))
          }, {
              path: "/:lang([a-z][a-z][a-z])/gallery",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(2458)]).then(n.bind(n, 6189))
          }, {
              path: "/export",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(504)]).then(n.bind(n, 805))
          }, {
              path: "/translate",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(4805)]).then(n.bind(n, 4653))
          }, {
              path: "/translate.html",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(4805)]).then(n.bind(n, 4653))
          }, {
              path: "/translations",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(4805)]).then(n.bind(n, 4653))
          }, {
              path: "/admin",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(7084)]).then(n.bind(n, 3340)),
              meta: {
                  adminOnly: !0
              }
          }, {
              path: "/admin.html",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(7084)]).then(n.bind(n, 3340)),
              meta: {
                  adminOnly: !0
              }
          }, {
              path: "/admin/review",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(7084)]).then(n.bind(n, 2762)),
              meta: {
                  adminOnly: !0
              }
          }, {
              path: "/admin/gallery",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(7084)]).then(n.bind(n, 511)),
              meta: {
                  adminOnly: !0
              }
          }, {
              path: "/admin/carousel",
              component: () => Promise.all([n.e(4121), n.e(996), n.e(7084)]).then(n.bind(n, 1936)),
              meta: {
                  adminOnly: !0
              }
          }, {
              path: "/:catchAll(.*)*",
              component: () => Promise.all([n.e(4121), n.e(9729)]).then(n.bind(n, 9729))
          }]
            , b = v;
          var N = n(9776)
            , C = n(5483);
          const S = (0,
          y.wE)((function() {
              const e = r.LA
                , t = (0,
              r.aE)({
                  scrollBehavior: () => ({
                      left: 0,
                      top: 0
                  }),
                  routes: b,
                  history: e("/")
              });
              return t.beforeEach((async (e, t, n) => {
                  const a = e.matched[0].meta.adminOnly;
                  if (a) {
                      await N.k5();
                      const e = await N.M2()
                        , t = await C.X1(e);
                      t ? n() : (alert("Please log in as an admin user."),
                      n(!1))
                  } else
                      n()
              }
              )),
              t.onError((e => {
                  (0,
                  d.to)("RouterError", e);
                  const t = "An update is available. Do you want to reload?\n\nIf reloading does not fix the issue, try using https://old.wheelofnames.com.";
                  confirm(t) && window.location.reload()
              }
              )),
              t
          }
          ));
          async function k(e, t) {
              const a = e(w);
              a.use(o.A, t);
              const s = "function" === typeof f.A ? await (0,
              f.A)({}) : f.A
                , {storeKey: r} = await Promise.resolve().then(n.bind(n, 1519))
                , l = (0,
              i.IG)("function" === typeof S ? await S({
                  store: s
              }) : S);
              return s.$router = l,
              {
                  app: a,
                  store: s,
                  storeKey: r,
                  router: l
              }
          }
          var P = n(4729)
            , A = n(6153)
            , I = n(989)
            , E = n(4806);
          const T = {
              config: {
                  dark: "auto",
                  notify: {
                      progress: !0
                  },
                  brand: {
                      primary: "#3369e8",
                      positive: "#009925",
                      negative: "#d50f25",
                      warning: "#EEB211"
                  }
              },
              plugins: {
                  Dialog: P.A,
                  Loading: A.A,
                  Notify: I.A,
                  AppFullscreen: E.A
              }
          }
            , W = "/";
          async function x({app: e, router: t, store: n, storeKey: a}, o) {
              let i = !1;
              const s = e => {
                  try {
                      return t.resolve(e).href
                  } catch (n) {}
                  return Object(e) === e ? null : e
              }
                , r = e => {
                  if (i = !0,
                  "string" === typeof e && /^https?:\/\//.test(e))
                      return void (window.location.href = e);
                  const t = s(e);
                  null !== t && (window.location.href = t)
              }
                , l = window.location.href.replace(window.location.origin, "");
              for (let h = 0; !1 === i && h < o.length; h++)
                  try {
                      await o[h]({
                          app: e,
                          router: t,
                          store: n,
                          ssrContext: null,
                          redirect: r,
                          urlPath: l,
                          publicPath: W
                      })
                  } catch (c) {
                      return c && c.url ? void r(c.url) : void console.error("[Quasar] boot error:", c)
                  }
              !0 !== i && (e.use(t),
              e.use(n, a),
              e.mount("#q-app"))
          }
          k(a.Ef, T).then((e => {
              const [t,a] = void 0 !== Promise.allSettled ? ["allSettled", e => e.map((e => {
                  if ("rejected" !== e.status)
                      return e.value.default;
                  console.error("[Quasar] boot error:", e.reason)
              }
              ))] : ["all", e => e.map((e => e.default))];
              return Promise[t]([Promise.resolve().then(n.bind(n, 886))]).then((t => {
                  const n = a(t).filter((e => "function" === typeof e));
                  x(e, n)
              }
              ))
          }
          ))
      }
      ,
      7058: (e, t, n) => {
          n.r(t),
          n.d(t, {
              default: () => o
          });
          var a = n(7964);
          const o = {
              en: a
          }
      }
      ,
      1519: (e, t, n) => {
          n.d(t, {
              A: () => w
          });
          var a = n(1573)
            , o = n(6980)
            , i = (n(239),
          n(1056))
            , s = n(1895)
            , r = n(7182)
            , l = n(5483);
          const c = {
              state: {
                  wheelConfig: new i.A,
                  sheetLinked: !1,
                  wheelIsBusy: !1,
                  winnerEntry: {},
                  winners: [],
                  path: "",
                  copyable: !1,
                  shareMode: "",
                  previousWheelConfig: ""
              },
              getters: {
                  wheelType: e => e.wheelConfig.type,
                  entries: e => e.wheelConfig.entries,
                  entryCount: e => e.wheelConfig.entries.length,
                  winners: e => e.winners,
                  winnerCount: e => e.winners.length,
                  winnerIndex: e => e.wheelConfig.entries.findIndex((t => t.id == e.winnerEntry.id)),
                  wheelConfig: e => e.wheelConfig,
                  enabledColors: e => e.wheelConfig.colorSettings.filter((e => e.enabled)),
                  sheetLinked: e => e.sheetLinked,
                  wheelPath: e => e.path,
                  wheelIsBusy: e => e.wheelIsBusy,
                  wheelIsShared: e => s.Ke(e.shareMode),
                  wheelIsCopyable: e => e.copyable,
                  shareMode: e => e.shareMode,
                  wheelIsAdvanced: e => e.wheelConfig.isAdvanced,
                  wheelTitle: e => e.wheelConfig.title,
                  wheelDescription: e => e.wheelConfig.description,
                  showTitle: e => e.wheelConfig.showTitle,
                  hubSize: e => e.wheelConfig.hubSize
              },
              mutations: {
                  setWheelConfig(e, t) {
                      const n = new i.A;
                      n.loadValues(t),
                      n.entries = s.AP(n.entries),
                      e.wheelConfig = n
                  },
                  setWheelConfigNoPersist(e, t) {
                      if (s.bM(e.wheelConfig, t))
                          return;
                      const n = new i.A;
                      n.loadValues(t),
                      n.entries = s.AP(n.entries),
                      e.wheelConfig = n
                  },
                  saveWheelConfigForUndo(e) {
                      e.previousWheelConfig = JSON.stringify(e.wheelConfig)
                  },
                  undoWheelConfigChange(e) {
                      const t = e.wheelConfig.clone();
                      t.loadValues(JSON.parse(e.previousWheelConfig)),
                      this.commit("setWheelConfig", t)
                  },
                  persistWheelConfig(e) {
                      this.commit("setWheelConfig", e.wheelConfig)
                  },
                  setGrayEmptyWheel(e) {
                      const t = e.wheelConfig.clone();
                      t.entries = s.AP([{
                          test: " "
                      }]),
                      t.title = "",
                      t.setColorValues(["#bbb"]),
                      this.commit("setWheelConfig", t)
                  },
                  setWheelTitle(e, t) {
                      const n = e.wheelConfig.clone();
                      n.title = t,
                      this.commit("setWheelConfig", n)
                  },
                  setWheelDescription(e, t) {
                      const n = e.wheelConfig.clone();
                      n.description = t,
                      this.commit("setWheelConfig", n)
                  },
                  setShowTitle(e, t) {
                      const n = e.wheelConfig.clone();
                      n.showTitle = t,
                      this.commit("setWheelConfig", n)
                  },
                  setEntries(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries = s.AP(t),
                      this.commit("setWheelConfig", n)
                  },
                  shuffleEntries(e) {
                      const t = e.wheelConfig.clone();
                      t.entries = s.R3(e.wheelConfig.entries),
                      this.commit("setWheelConfig", t)
                  },
                  sortEntries(e) {
                      const t = e.wheelConfig.clone();
                      t.entries = s.sL(e.wheelConfig.entries),
                      this.commit("setWheelConfig", t)
                  },
                  appendEntry(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries.push(t),
                      n.entries = s.AP(n.entries),
                      this.commit("setWheelConfig", n)
                  },
                  setEntryText(e, {index: t, text: n}) {
                      const a = e.wheelConfig.clone();
                      a.entries[t].text = n,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  setEntryColor(e, {index: t, color: n}) {
                      const a = e.wheelConfig.clone();
                      a.entries[t].color = n,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  setEntryGradientColor(e, {index: t, color: n}) {
                      const a = e.wheelConfig.clone();
                      a.entries[t].gradientColor = n,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  setEntrySound(e, {index: t, sound: n}) {
                      const a = e.wheelConfig.clone();
                      n ? a.entries[t].sound = n : delete a.entries[t].sound,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  setEntryMessage(e, {index: t, message: n}) {
                      const a = e.wheelConfig.clone();
                      n ? a.entries[t].message = n : delete a.entries[t].message,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  setEntryEnabled(e, {index: t, enabled: n}) {
                      const a = e.wheelConfig.clone();
                      a.entries[t].enabled = n,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  setEntryWeight(e, {index: t, weight: n}) {
                      const a = e.wheelConfig.clone();
                      a.entries[t].weight = n,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  refreshEntries(e) {
                      const t = e.wheelConfig.clone();
                      t.entries = s.AP(t.entries),
                      this.commit("setWheelConfig", t)
                  },
                  setTextEntries(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries = s.AP(t.map((e => ({
                          text: e
                      })))),
                      this.commit("setWheelConfig", n)
                  },
                  appendTextEntries(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries = s.AP(n.entries.concat(t.map((e => ({
                          text: e
                      }))))),
                      this.commit("setWheelConfig", n)
                  },
                  removeTextEntries(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries = s.AP(n.entries.filter((e => !t.includes(e.text)))),
                      this.commit("setWheelConfig", n)
                  },
                  removeEntryByIndex(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries.splice(t, 1),
                      e.sheetLinked = !1,
                      this.commit("setWheelConfig", n)
                  },
                  removeEntry(e, t) {
                      const n = e.wheelConfig.clone()
                        , a = n.entries.findIndex((e => e.id === t.id));
                      a > -1 && (n.entries.splice(a, 1),
                      e.sheetLinked = !1,
                      this.commit("setWheelConfig", n))
                  },
                  removeEntryAll(e, t) {
                      const n = e.wheelConfig.clone();
                      n.entries = n.entries.filter((e => !e.text || e.text.trim() != t.text.trim())),
                      e.sheetLinked = !1,
                      this.commit("setWheelConfig", n)
                  },
                  hideEntry(e, t) {
                      const n = e.wheelConfig.clone()
                        , a = n.entries.find((e => e.id === t.id));
                      a && (a.enabled = !1),
                      this.commit("setWheelConfig", n)
                  },
                  moveEntry(e, {index: t, direction: n}) {
                      const a = e.wheelConfig.clone()
                        , o = a.entries[t];
                      a.entries[t] = a.entries[t + n],
                      a.entries[t + n] = o,
                      a.entries = s.AP(a.entries),
                      this.commit("setWheelConfig", a)
                  },
                  duplicateEntry(e, t) {
                      const n = e.wheelConfig.clone()
                        , a = n.entries[t]
                        , o = Object.assign({}, a);
                      o.id = s.Cq(),
                      n.entries.splice(t + 1, 0, o),
                      n.entries = s.AP(n.entries),
                      this.commit("setWheelConfig", n)
                  },
                  setColorValues(e, t) {
                      const n = e.wheelConfig.clone();
                      n.setColorValues(t),
                      this.commit("setWheelConfig", n)
                  },
                  setHubSize(e, t) {
                      const n = e.wheelConfig.clone();
                      n.hubSize = t,
                      this.commit("setWheelConfig", n)
                  },
                  setUploadedCenterImage(e, {fileName: t, dataUri: n}) {
                      const a = e.wheelConfig.clone();
                      a.type = "color",
                      a.setUploadedCenterImage(t, n),
                      this.commit("setWheelConfig", a)
                  },
                  setUploadedBackgroundImage(e, {fileName: t, dataUri: n}) {
                      const a = e.wheelConfig.clone();
                      a.type = "image",
                      a.setUploadedBackgroundImage(t, n),
                      this.commit("setWheelConfig", a)
                  },
                  setGalleryBackgroundImage(e, t) {
                      const n = e.wheelConfig.clone();
                      n.type = "image",
                      n.setGalleryBackgroundImage(t),
                      this.commit("setWheelConfig", n)
                  },
                  setGalleryCenterImage(e, t) {
                      const n = e.wheelConfig.clone();
                      n.type = "color",
                      n.setGalleryCenterImage(t),
                      this.commit("setWheelConfig", n)
                  },
                  removeImageFromEntry(e, t) {
                      const n = e.wheelConfig.clone();
                      delete n.entries[t].image,
                      this.commit("setWheelConfig", n)
                  },
                  setWheelBusy(e, t) {
                      e.wheelIsBusy = t
                  },
                  linkSheet(e) {
                      e.sheetLinked = !0
                  },
                  unlinkSheet(e) {
                      e.sheetLinked = !1
                  },
                  setPath(e, t) {
                      e.path = t
                  },
                  setUnshared(e) {
                      e.path = "",
                      e.shareMode = ""
                  },
                  setShareMode(e, t) {
                      e.shareMode = t
                  },
                  setCopyable(e, {copyable: t, editable: n}) {
                      "undefined" != typeof n && (e.copyable = n),
                      "undefined" != typeof t && (e.copyable = t)
                  },
                  addWinner(e, t) {
                      e.winnerEntry = t;
                      const n = e.winners.slice(0);
                      n.push(t),
                      e.winners = n
                  },
                  sortWinners(e) {
                      e.winners = s.sL(e.winners)
                  },
                  clearWinners(e) {
                      e.winners = []
                  },
                  setVolumes(e, {duringSpinSoundVolume: t, afterSpinSoundVolume: n}) {
                      const a = e.wheelConfig.clone();
                      a.duringSpinSoundVolume = t,
                      a.afterSpinSoundVolume = n,
                      this.commit("setWheelConfig", a)
                  }
              },
              actions: {
                  loadInitialEditableWheel(e) {
                      const t = new i.A;
                      t.loadJson(localStorage.getItem("LastWheelConfig")),
                      e.commit("setWheelConfig", t)
                  },
                  async loadInitialSharedWheel(e, t) {
                      e.commit("setPath", t),
                      e.commit("setGrayEmptyWheel");
                      try {
                          const n = await l.V8(t);
                          e.commit("setShareMode", n.shareMode),
                          e.commit("setCopyable", {
                              copyable: ["copyable", "gallery"].includes(n.shareMode),
                              editable: n.editable
                          });
                          const a = new i.A;
                          a.loadValues(n.wheelConfig),
                          e.commit("setWheelConfigNoPersist", a)
                      } catch (n) {
                          throw e.commit("setWheelConfig", new i.A),
                          e.commit("setUnshared"),
                          n
                      }
                  },
                  resetWheel(e) {
                      const t = new i.A;
                      e.commit("unlinkSheet"),
                      e.commit("setWheelConfig", t),
                      e.commit("clearWinners")
                  },
                  async appendImageEntry(e, t) {
                      const n = e.state.wheelConfig.entries.slice(0);
                      let a;
                      if (e.state.wheelConfig.isAdvanced) {
                          const e = await r.w1(t);
                          a = r.jy(e) ? {
                              text: "",
                              image: t,
                              weight: 1,
                              enabled: !0
                          } : {
                              text: "",
                              image: t,
                              color: r.w4(e).slice(0, 7),
                              weight: 1,
                              enabled: !0
                          }
                      } else
                          a = {
                              text: "",
                              image: t
                          };
                      n.push(a),
                      e.commit("setEntries", n)
                  },
                  async attachImageToEntry(e, {imageData: t, index: n}) {
                      const a = s.o8(e.state.wheelConfig.entries)
                        , o = await r.w1(t)
                        , i = r.jy(o);
                      if (!i) {
                          const e = r.w4(o).slice(0, 7);
                          a[n].color = e
                      }
                      a[n].image = t,
                      e.commit("setEntries", a)
                  },
                  async setAdvanced(e, t) {
                      let n = e.state.wheelConfig.clone();
                      if (n.isAdvanced = t,
                      t)
                          for (let a = 0; a < n.entries.length; a++) {
                              const e = n.entries[a];
                              if (e.image) {
                                  const t = await r.w1(e.image);
                                  r.jy(t) || (e.color = r.w4(t).slice(0, 7))
                              }
                              e.weight = 1,
                              e.enabled = !0
                          }
                      else
                          n.entries.forEach((e => {
                              delete e.color,
                              delete e.weight,
                              delete e.enabled,
                              delete e.sound,
                              delete e.message
                          }
                          )),
                          n.entries = n.entries.filter((e => e.text || e.image));
                      e.commit("setWheelConfig", n)
                  }
              }
          };
          var h = n(9776);
          const m = {
              state: {
                  clientId: s.hw(1e5, 999999),
                  liveSharedWheelUserIdToken: "",
                  liveSharedWheelEditPermissions: null,
                  liveSharedWheelPassword: "",
                  liveSharedWheelIAmOwner: !1,
                  spinState: {}
              },
              getters: {
                  clientId: e => e.clientId,
                  liveSharedWheelEditPermissions: e => e.liveSharedWheelEditPermissions,
                  liveSharedWheelPassword: e => e.liveSharedWheelPassword,
                  liveSharedWheelIAmOwner: e => e.liveSharedWheelIAmOwner,
                  userHasEnteredCorrectPassword: e => !!e.liveSharedWheelPassword,
                  spinState: e => e.spinState
              },
              mutations: {
                  setLiveSharedWheelUserIdToken(e, t) {
                      e.liveSharedWheelUserIdToken = t
                  },
                  setLiveSharedWheelEditPermissions(e, t) {
                      e.liveSharedWheelEditPermissions = t
                  },
                  setLiveSharedWheelPassword(e, t) {
                      e.liveSharedWheelPassword = t
                  },
                  setLiveSharedWheelIAmOwner(e, t) {
                      e.liveSharedWheelIAmOwner = t
                  },
                  setSpinState(e, t) {
                      e.spinState = t
                  }
              },
              actions: {
                  async subscribeToLiveWheel(e, t) {
                      await h.k5(),
                      e.commit("setLiveSharedWheelIAmOwner", await e.dispatch("amIOwner", t)),
                      h.OA(t, (t => {
                          t.lastUpdatedByClientId != e.state.clientId && (e.commit("setLiveSharedWheelEditPermissions", t.editPermissions),
                          e.commit("setWheelConfigNoPersist", t.config))
                      }
                      )),
                      h.J(t, (t => {
                          e.commit("setSpinState", t)
                      }
                      ))
                  },
                  async isPassword(e, t) {
                      throw "Not implemented"
                  },
                  async setSpinState(e, t) {}
              }
          }
            , u = {
              state: {
                  userPhotoUrl: "",
                  userDisplayName: ""
              },
              getters: {
                  userPhotoUrl: e => e.userPhotoUrl,
                  userDisplayName: e => e.userDisplayName
              },
              mutations: {
                  setUserPhotoUrl(e, t) {
                      e.userPhotoUrl = t || "/images/user_profile.png"
                  },
                  setUserDisplayName(e, t) {
                      e.userDisplayName = t
                  },
                  clearUser(e) {
                      e.userPhotoUrl = "",
                      e.userDisplayName = ""
                  }
              },
              actions: {
                  async userIsLoggedIn({state: e, commit: t, rootState: n}) {
                      await h.k5();
                      const a = await h.ZR();
                      if (a) {
                          const e = await h.xC();
                          t("setUserPhotoUrl", e.photoURL),
                          t("setUserDisplayName", e.displayName)
                      }
                      return a
                  },
                  async logOut({state: e, commit: t, rootState: n}) {
                      h.je(),
                      t("clearUser")
                  },
                  async deleteAccount({state: e, commit: t, rootState: n}) {
                      const a = await h.M2();
                      await l.lw(a),
                      h.je(),
                      t("clearUser")
                  },
                  async loginAnonymously(e) {
                      await h.mE()
                  },
                  async loginWithUi({state: e, commit: t, rootState: n}, a) {
                      await h.k5();
                      const o = await h.IL()
                        , i = await h.HC(a);
                      t("setUserPhotoUrl", i.photoURL),
                      t("setUserDisplayName", i.displayName);
                      const s = await h.M2();
                      await l._m(s),
                      o && await l.F$(o, s)
                  },
                  async logInToSheets({state: e, commit: t, rootState: n}, a) {
                      await h.k5();
                      const o = await h.IL()
                        , i = await h.LI(a)
                        , s = await h.xC();
                      return t("setUserPhotoUrl", s.photoURL),
                      t("setUserDisplayName", s.displayName),
                      o && await l.F$(o, await h.M2()),
                      i
                  },
                  async userIsAdmin() {
                      await h.k5();
                      const e = await h.M2();
                      try {
                          return await l.X1(e)
                      } catch (t) {
                          return !1
                      }
                  },
                  async getUid() {
                      return await h.v6()
                  },
                  async getUserIdToken() {
                      return await h.M2()
                  },
                  async getSavedWheels(e, {fields: t}) {
                      const n = await h.M2();
                      let a = await l.cC(n, t);
                      return a = a.sort(( (e, t) => e.config.title.localeCompare(t.config.title, "en", {
                          numeric: !0,
                          sensitivity: "base"
                      }))),
                      a
                  },
                  async loadSavedWheel(e, t) {
                      const n = await h.M2()
                        , a = await l.lG(n, t);
                      return a
                  },
                  async loadWheel(e, t) {
                      const n = await h.M2()
                        , a = await l.W3(t, n);
                      return a
                  },
                  async loadMyWheels(e) {
                      const t = await h.M2()
                        , n = await l.zf(t);
                      return n
                  },
                  async saveWheel(e, t) {
                      const n = await h.M2();
                      await l.Fb(n, t.getValues())
                  },
                  async getSharedWheels(e, {fields: t}) {
                      const n = await h.M2()
                        , a = await l.ij(n, t);
                      return a
                  },
                  async shareWheel(e, {wheelConfig: t, shareMode: n, editPermissions: a, password: o}) {
                      const i = await h.M2();
                      return await l.TI({
                          wheelConfig: t,
                          idToken: i,
                          shareMode: n,
                          editPermissions: a,
                          password: o
                      })
                  },
                  async deleteWheel(e, t) {
                      const n = await h.M2();
                      await l.VU(n, t)
                  },
                  async amIOwner(e, t) {
                      throw "Not implemented"
                  },
                  async generateApiKey() {
                      const e = await h.M2()
                        , t = await l.XH(e);
                      return t
                  },
                  async getExistingApiKey() {
                      const e = await h.M2()
                        , t = await l.xy(e);
                      return t
                  },
                  async deleteExistingApiKey() {
                      const e = await h.M2();
                      await l.W4(e)
                  }
              }
          }
            , d = {
              state: {
                  version: "331",
                  appInfoVisible: !0,
                  darkMode: "auto",
                  latestSeenVersion: 0,
                  userHasSeenCurrentVersion: !1,
                  seenUkraineBanner: !1,
                  wheelLocation: ""
              },
              getters: {
                  version: e => e.version,
                  darkMode: e => e.darkMode,
                  appInfoVisible: e => e.appInfoVisible,
                  userHasSeenCurrentVersion: e => e.userHasSeenCurrentVersion,
                  seenUkraineBanner: e => e.seenUkraineBanner,
                  wheelLocation: e => e.wheelLocation
              },
              mutations: {
                  setDurablePrefs(e, {appInfoVisible: t, darkMode: n, latestSeenVersion: a, seenUkraineBanner: o, wheelLocation: i}) {
                      e.appInfoVisible = t,
                      e.darkMode = n,
                      e.latestSeenVersion = a,
                      e.seenUkraineBanner = o,
                      e.wheelLocation = i,
                      g(e)
                  },
                  setLatestSeenVersion(e, t) {
                      e.latestSeenVersion = t,
                      g(e)
                  },
                  setUserHasSeenCurrentVersion(e, t) {
                      e.userHasSeenCurrentVersion = t
                  },
                  toggleAppInfoVisibility(e) {
                      e.appInfoVisible = !e.appInfoVisible,
                      g(e)
                  },
                  setDarkMode(e, t) {
                      e.darkMode = t,
                      g(e)
                  },
                  setSeenUkraineBanner(e) {
                      e.seenUkraineBanner = !0,
                      g(e)
                  },
                  setWheelLocation(e, t) {
                      e.wheelLocation = t,
                      g(e)
                  },
                  switchWheelLocation(e) {
                      "local" === e.wheelLocation ? e.wheelLocation = "cloud" : e.wheelLocation = "local"
                  }
              },
              actions: {
                  loadPreferences({state: e, commit: t}) {
                      try {
                          const e = JSON.parse(localStorage.getItem("Preferences"));
                          t("setDurablePrefs", {
                              appInfoVisible: e.appInfoVisible,
                              darkMode: e.darkMode,
                              latestSeenVersion: e.latestSeenVersion,
                              seenUkraineBanner: e.seenUkraineBanner,
                              wheelLocation: e.wheelLocation
                          })
                      } catch {}
                      const n = e.version;
                      t("setUserHasSeenCurrentVersion", n == e.latestSeenVersion),
                      t("setLatestSeenVersion", n)
                  }
              }
          };
          function g(e) {
              const t = {
                  appInfoVisible: e.appInfoVisible,
                  darkMode: e.darkMode,
                  latestSeenVersion: e.latestSeenVersion,
                  seenUkraineBanner: e.seenUkraineBanner,
                  wheelLocation: e.wheelLocation
              };
              localStorage.setItem("Preferences", JSON.stringify(t))
          }
          const p = {
              state: {
                  settings: {
                      carouselSlides: [],
                      spinsPerSecond: 30,
                      hoursSpunPerSecond: .08,
                      maintenanceMessage: "",
                      readOnlyMode: !1,
                      commitHash: "?"
                  }
              },
              getters: {
                  carouselSlides: e => e.settings.carouselSlides,
                  spinsPerSecond: e => e.settings.spinsPerSecond,
                  hoursSpunPerSecond: e => e.settings.hoursSpunPerSecond,
                  maintenanceMessage: e => e.settings.maintenanceMessage,
                  readOnlyMode: e => e.settings.readOnlyMode,
                  commitHash: e => e.settings.commitHash,
                  advertiser: e => e.settings.advertiser
              },
              mutations: {
                  setSettings(e, t) {
                      e.settings = {
                          ...e.settings,
                          ...t
                      };
                      const n = Object.entries(t.advertiserWeights || {}).reduce(( (e, [t,n]) => e.concat(Array(n).fill(t))), [])
                        , a = Math.floor(Math.random() * n.length);
                      e.settings.advertiser = n[a]
                  }
              },
              actions: {
                  async loadServerSettings({dispatch: e, commit: t}) {
                      try {
                          const e = await l.mt();
                          t("setSettings", e)
                      } catch (n) {
                          console.log(n)
                      }
                  }
              }
          }
            , w = (0,
          a.M_)((function() {
              const e = (0,
              o.y$)({
                  modules: {
                      wheel: c,
                      liveWheel: m,
                      user: u,
                      preferences: d,
                      serverSettings: p
                  },
                  strict: !1
              });
              return e.subscribe(( (e, t) => {
                  "setWheelConfig" == e.type && (s.Ke(t.wheel.shareMode) || localStorage.setItem("LastWheelConfig", t.wheel.wheelConfig.getJson()))
              }
              )),
              e
          }
          ))
      }
      ,
      9776: (e, t, n) => {
          n.d(t, {
              IL: () => y,
              xC: () => p,
              v6: () => f,
              M2: () => w,
              HC: () => v,
              k5: () => d,
              mE: () => b,
              LI: () => N,
              je: () => C,
              OA: () => S,
              J: () => k,
              ZR: () => g
          });
          var a = n(1895);
          async function o(e) {
              const t = await i(e);
              return !!t && !t.isAnonymous
          }
          async function i(e) {
              return e.currentUser ? e.currentUser : new Promise((function(t) {
                  e.onAuthStateChanged((function(e) {
                      t(e)
                  }
                  ))
              }
              ))
          }
          async function s(e) {
              return await e.signInAnonymously(),
              e.currentUser
          }
          async function r(e, t) {
              t.addScope("https://www.googleapis.com/auth/drive.readonly"),
              t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),
              t.setCustomParameters({
                  prompt: "select_account"
              });
              const n = await e.signInWithPopup(t);
              return n.credential.accessToken
          }
          var l = n(884)
            , c = n(7067);
          let h, m, u;
          async function d() {
              h || (await P(),
              A(h),
              E(h))
          }
          async function g() {
              return await o(h.auth())
          }
          async function p() {
              return await i(h.auth())
          }
          async function w() {
              const e = await p();
              if (e)
                  return await e.getIdToken(!0)
          }
          async function f() {
              const e = await p();
              if (e)
                  return e.uid
          }
          async function y() {
              const e = await p();
              if (e && e.isAnonymous)
                  return await e.getIdToken()
          }
          function v(e) {
              return (0,
              c.loadCSS)("https://www.gstatic.com/firebasejs/ui/6.1.0/firebase-ui-auth.css"),
              new Promise((function(t, n) {
                  u || (u = new m.auth.AuthUI(h.auth())),
                  u.start(`#${e}`, {
                      signInFlow: "popup",
                      credentialHelper: m.auth.CredentialHelper.NONE,
                      signInOptions: [{
                          provider: h.auth.GoogleAuthProvider.PROVIDER_ID,
                          customParameters: {
                              prompt: "select_account"
                          }
                      }, h.auth.TwitterAuthProvider.PROVIDER_ID, h.auth.EmailAuthProvider.PROVIDER_ID],
                      callbacks: {
                          signInSuccessWithAuthResult: function(e, n) {
                              t(e.user)
                          }
                      },
                      tosUrl: "/faq/terms",
                      privacyPolicyUrl: "/privacy-policy.html"
                  })
              }
              ))
          }
          async function b() {
              const e = h.auth();
              return await s(e)
          }
          async function N(e) {
              const t = h.auth();
              t.languageCode = l.ql("Google", e);
              const n = T("Google");
              return await r(t, n)
          }
          function C() {
              try {
                  h.auth().signOut()
              } catch (e) {}
          }
          function S(e, t) {
              const n = h.firestore()
                , a = n.doc(`live-wheels/${e}`);
              a.onSnapshot((e => {
                  t(e.data())
              }
              ))
          }
          function k(e, t) {
              const n = h.firestore()
                , a = n.doc(`live-wheels/${e}/live-wheels-state/spin-state`);
              a.onSnapshot((e => {
                  t(e.data())
              }
              ))
          }
          async function P() {
              const e = await Promise.all([n.e(4121), n.e(7708)]).then(n.bind(n, 7251));
              h = e.default,
              await Promise.all([n.e(4121), n.e(7708)]).then(n.bind(n, 8944)),
              await Promise.all([n.e(4121), n.e(7708)]).then(n.bind(n, 8033)),
              m = await Promise.all([n.e(4121), n.e(7708)]).then(n.bind(n, 2879))
          }
          function A(e) {
              if (I())
                  return;
              const t = {
                  apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                  authDomain: "wheel-of-names-firebase.firebaseapp.com",
                  databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
                  projectId: "wheel-of-names-firebase",
                  timestampsInSnapshots: !0
              };
              e.initializeApp(t)
          }
          function I() {
              return h.apps && h.apps.length > 0
          }
          function E(e) {
              const t = e.firestore();
              if (a.kV(navigator.userAgent))
                  try {
                      t.enablePersistence({
                          synchronizeTabs: !0
                      })
                  } catch (n) {}
          }
          function T(e) {
              const t = {
                  google: new h.auth.GoogleAuthProvider,
                  facebook: new h.auth.FacebookAuthProvider,
                  twitter: new h.auth.TwitterAuthProvider
              };
              return t[e.toLowerCase()] || t["google"]
          }
      }
      ,
      7182: (e, t, n) => {
          async function a(e) {
              return new Promise((function(t, n) {
                  const a = new Image;
                  a.onload = function() {
                      const n = g(a.width, a.height, 200);
                      N(n, a),
                      t(S(n, e, .5))
                  }
                  ,
                  a.src = e
              }
              ))
          }
          async function o(e) {
              return new Promise((function(t, n) {
                  const a = new Image;
                  a.onload = function() {
                      const e = p(370);
                      w(a) || N(e, a, "blur(4px)"),
                      C(e, a, !0),
                      t(S(e, null, .5))
                  }
                  ,
                  a.src = e
              }
              ))
          }
          async function i(e) {
              return new Promise((function(t, n) {
                  const a = new Image;
                  a.onload = function() {
                      const e = p(700);
                      C(e, a, !1),
                      t(S(e, null, .7))
                  }
                  ,
                  a.src = e
              }
              ))
          }
          function s(e) {
              const t = document.createElement("canvas");
              return t.width = e.canvas.width,
              t.height = e.canvas.height,
              t
          }
          function r(e) {
              let t = document.createElement("canvas").getContext("2d");
              t.drawImage(e, 0, 0);
              let n = t.getImageData(0, 0, 1, 1).data;
              return y(n[0], n[1], n[2]) ? "#FFFFFFFF" : v(n[0], n[1], n[2], n[3])
          }
          function l(e) {
              let t = !1
                , n = e.match(/#\w\w\w\w\w\w(\w\w)/);
              return n && (t = "00" == n[1]),
              t
          }
          async function c(e) {
              const {extractColors: t} = await n.e(967).then(n.bind(n, 6580))
                , a = new Image;
              return a.src = e,
              new Promise((e => {
                  a.onload = async () => {
                      const n = await t(a);
                      e(n.map((e => e.hex)).slice(0, 6))
                  }
              }
              ))
          }
          function h(e) {
              const t = 300
                , n = p(t)
                , a = n.getContext("2d");
              a.fillStyle = "white",
              a.fillRect(0, 0, t, t),
              a.fillStyle = "black",
              a.textBaseline = "middle",
              a.textAlign = "center";
              const o = .9 * t;
              d(a, e, o),
              a.fillText(e, t / 2, t / 2, o);
              const i = n.toDataURL("image/webp", .5);
              return i
          }
          function m(e) {
              if (e)
                  return new Promise((async function(t) {
                      const n = new Image;
                      n.setAttribute("crossOrigin", "anonymous"),
                      n.onload = function() {
                          t(n)
                      }
                      ,
                      n.src = e
                  }
                  ))
          }
          function u(e) {
              const t = r(e);
              return "00" == t.slice(7)
          }
          function d(e, t, n) {
              for (let a = Math.round(n / 2); a >= n / 20; a--) {
                  e.font = `${a}px Quicksand, sans-serif`;
                  const o = e.measureText(t);
                  if (o.width <= n)
                      break
              }
          }
          function g(e, t, n) {
              let a = n / e
                , o = n / t
                , i = Math.max(a, o);
              const s = document.createElement("canvas");
              return s.width = e * i,
              s.height = t * i,
              s
          }
          function p(e) {
              const t = document.createElement("canvas");
              return t.width = e,
              t.height = e,
              t
          }
          function w(e) {
              const t = r(e);
              return "#FFFFFFFF" == t || "FF" == t.slice(7)
          }
          function f(e) {
              let t = e.getImageData(0, 0, 1, 1).data;
              return t[3] < 5
          }
          function y(e, t, n) {
              return e == t && e == n && e > 230
          }
          function v(e, t, n, a) {
              return `#${b(e)}${b(t)}${b(n)}${b(a)}`
          }
          n.d(t, {
              NN: () => i,
              Oh: () => s,
              S5: () => h,
              jy: () => u,
              o2: () => c,
              q8: () => o,
              tK: () => a,
              ty: () => l,
              w1: () => m,
              w4: () => r
          });
          const b = e => Number(e).toString(16).padStart(2, "0");
          function N(e, t, n) {
              const a = e.getContext("2d");
              a.save(),
              n && (a.filter = n),
              a.drawImage(t, -2, -2, e.width + 4, e.height + 4),
              a.restore()
          }
          function C(e, t, n) {
              const a = e.width;
              let o = a / Math.min(t.width, t.height);
              n && (o = a / Math.max(t.width, t.height));
              const i = t.width * o
                , s = (a - i) / 2
                , r = t.height * o
                , l = (a - r) / 2
                , c = e.getContext("2d");
              c.drawImage(t, s, l, i, r)
          }
          function S(e, t, n) {
              let a;
              return a = f(e.getContext("2d")) ? e.toDataURL("image/webp", .5) : e.toDataURL("image/jpeg", n),
              t && t.length < a.length ? t : a
          }
      }
      ,
      884: (e, t, n) => {
          n.d(t, {
              Lo: () => m,
              q9: () => d,
              ql: () => u,
              qq: () => h,
              ss: () => g,
              tr: () => w,
              xC: () => p
          });
          var a = n(9628)
            , o = n(9796)
            , i = n(2401)
            , s = n(5812)
            , r = n(502);
          const l = [{
              partialName: "noms",
              locale: "fr"
          }]
            , c = [{
              name: "am",
              humanName: "አማርኛ",
              googleName: "am_ET",
              twitterName: "am",
              file: "am-ET.json"
          }, {
              name: "ar",
              humanName: "العربية",
              googleName: "ar_AR",
              twitterName: "ar",
              file: "ar-EG.json"
          }, {
              name: "az",
              humanName: "Azərbaycanca",
              googleName: "az_AZ",
              twitterName: "az",
              file: "az-Latn-AZ.json"
          }, {
              name: "bg",
              humanName: "български",
              googleName: "bg_BG",
              twitterName: "bg",
              file: "bg-BG.json"
          }, {
              name: "bn",
              humanName: "বাংলা",
              googleName: "bn_IN",
              twitterName: "bn",
              file: "bn-IN.json"
          }, {
              name: "bs",
              humanName: "Bosanski",
              googleName: "bs_BA",
              twitterName: "bs",
              file: "bs-Latn-BA.json"
          }, {
              name: "ca",
              humanName: "Català",
              googleName: "ca_ES",
              twitterName: "ca",
              file: "ca-ES.json"
          }, {
              name: "cs",
              humanName: "Čeština",
              googleName: "cs_CZ",
              twitterName: "cs",
              file: "cs-CZ.json"
          }, {
              name: "cy",
              humanName: "Cymraeg",
              googleName: "cy_GB",
              twitterName: "cy",
              file: "cy-GB.json"
          }, {
              name: "da",
              humanName: "Dansk",
              googleName: "da_DK",
              twitterName: "da",
              file: "da-DK.json"
          }, {
              name: "de",
              humanName: "Deutsch",
              googleName: "de_DE",
              twitterName: "de",
              file: "de-DE.json"
          }, {
              name: "el",
              humanName: "Eλληνικά",
              googleName: "el_GR",
              twitterName: "el",
              file: "el-GR.json"
          }, {
              name: "en-PI",
              humanName: "English (Pirate)",
              googleName: "en_US",
              twitterName: "en",
              file: "en-PI.json"
          }, {
              name: "en",
              humanName: "English",
              googleName: "en_US",
              twitterName: "en",
              file: "en-US.json"
          }, {
              name: "es",
              humanName: "Español",
              googleName: "es_ES",
              twitterName: "es",
              file: "es-ES.json"
          }, {
              name: "et",
              humanName: "Estonian",
              googleName: "et_EE",
              twitterName: "et",
              file: "et-EE.json"
          }, {
              name: "fa",
              humanName: "فارسی",
              googleName: "fa_IR",
              twitterName: "fa",
              file: "fa-IR.json"
          }, {
              name: "fi",
              humanName: "Suomi",
              googleName: "fi_FI",
              twitterName: "fi",
              file: "fi-FI.json"
          }, {
              name: "fil",
              humanName: "Filipino",
              googleName: "fil_PH",
              twitterName: "fil",
              file: "fil-PH.json"
          }, {
              name: "fr",
              humanName: "Français",
              googleName: "fr_FR",
              twitterName: "fr",
              file: "fr-FR.json"
          }, {
              name: "gl",
              humanName: "Galego",
              googleName: "gl_ES",
              twitterName: "gl",
              file: "gl-ES.json"
          }, {
              name: "gu",
              humanName: "ગુજરાતી",
              googleName: "gu_IN",
              twitterName: "gu",
              file: "gu-IN.json"
          }, {
              name: "he",
              humanName: "עברית",
              googleName: "he_IL",
              twitterName: "he",
              file: "he-IL.json"
          }, {
              name: "hi",
              humanName: "हिंदी",
              googleName: "hi_IN",
              twitterName: "hi",
              file: "hi-IN.json"
          }, {
              name: "hr",
              humanName: "Hrvatski",
              googleName: "hr_HR",
              twitterName: "hr",
              file: "hr-HR.json"
          }, {
              name: "hu",
              humanName: "Magyar",
              googleName: "hu_HU",
              twitterName: "hu",
              file: "hu-HU.json"
          }, {
              name: "hy",
              humanName: "Հայերեն",
              googleName: "hy_AM",
              twitterName: "hy",
              file: "hy-AM.json"
          }, {
              name: "id",
              humanName: "Bahasa Indonesia",
              googleName: "id_ID",
              twitterName: "id",
              file: "id-ID.json"
          }, {
              name: "is",
              humanName: "Íslenskur",
              googleName: "is_IS",
              twitterName: "is",
              file: "is-IS.json"
          }, {
              name: "it",
              humanName: "Italiano",
              googleName: "it_IT",
              twitterName: "it",
              file: "it-IT.json"
          }, {
              name: "ja",
              humanName: "日本語",
              googleName: "ja_JP",
              twitterName: "ja",
              file: "ja-JP.json"
          }, {
              name: "ka",
              humanName: "ქართული",
              googleName: "ka_GE",
              twitterName: "ka",
              file: "ka-GE.json"
          }, {
              name: "kk",
              humanName: "Қазақ тілі",
              googleName: "kk_KZ",
              twitterName: "kk",
              file: "kk-KZ.json"
          }, {
              name: "kn",
              humanName: "ಕನ್ನಡ",
              googleName: "kn_IN",
              twitterName: "kn",
              file: "kn-IN.json"
          }, {
              name: "ko",
              humanName: "한국어",
              googleName: "ko_KR",
              twitterName: "ko",
              file: "ko-KR.json"
          }, {
              name: "lo",
              humanName: "ພາສາລາວ",
              googleName: "lo_LA",
              twitterName: "lo",
              file: "lo-LA.json"
          }, {
              name: "lt",
              humanName: "Lietuvių",
              googleName: "lt_LT",
              twitterName: "lt",
              file: "lt-LT.json"
          }, {
              name: "lv",
              humanName: "Latviešu",
              googleName: "lv_LV",
              twitterName: "lv",
              file: "lv-LV.json"
          }, {
              name: "mk",
              humanName: "Mакедонски",
              googleName: "mk_MK",
              twitterName: "mk",
              file: "mk-MK.json"
          }, {
              name: "ml",
              humanName: "മലയാളം",
              googleName: "ml_IN",
              twitterName: "ml",
              file: "ml-IN.json"
          }, {
              name: "mn",
              humanName: "Mонгол",
              googleName: "mn_MN",
              twitterName: "mn",
              file: "mn-MN.json"
          }, {
              name: "ms",
              humanName: "Bahasa Melayu",
              googleName: "ms_MY",
              twitterName: "ms",
              file: "ms-MY.json"
          }, {
              name: "my",
              humanName: "မြန်မာစာ",
              googleName: "my_MM",
              twitterName: "my",
              file: "my-MM.json"
          }, {
              name: "nl",
              humanName: "Nederlands",
              googleName: "nl_NL",
              twitterName: "nl",
              file: "nl-NL.json"
          }, {
              name: "no",
              humanName: "Norsk",
              googleName: "nb_NO",
              twitterName: "no",
              file: "nb-NO.json"
          }, {
              name: "pa",
              humanName: "ਪੰਜਾਬੀ",
              googleName: "pa_IN",
              twitterName: "pa",
              file: "pa-IN.json"
          }, {
              name: "pl",
              humanName: "Polski",
              googleName: "pl_PL",
              twitterName: "pl",
              file: "pl-PL.json"
          }, {
              name: "pt",
              humanName: "Português",
              googleName: "pt_BR",
              twitterName: "pt",
              file: "pt-PT.json"
          }, {
              name: "ro",
              humanName: "Română",
              googleName: "ro_RO",
              twitterName: "ro",
              file: "ro-RO.json"
          }, {
              name: "ru",
              humanName: "Pусский",
              googleName: "ru_RU",
              twitterName: "ru",
              file: "ru-RU.json"
          }, {
              name: "sl",
              humanName: "Slovenščina",
              googleName: "sl_SL",
              twitterName: "sl",
              file: "sl-SI.json"
          }, {
              name: "so",
              humanName: "Soomaali",
              googleName: "so_SO",
              twitterName: "so",
              file: "so-SO.json"
          }, {
              name: "sq",
              humanName: "Shqip",
              googleName: "sq_AL",
              twitterName: "sq",
              file: "sq-AL.json"
          }, {
              name: "sr",
              humanName: "Srpski",
              googleName: "sr_SP",
              twitterName: "sr",
              file: "sr-Latn-RS.json"
          }, {
              name: "sv",
              humanName: "Svenska",
              googleName: "sv_SE",
              twitterName: "sv",
              file: "sv-SE.json"
          }, {
              name: "ta",
              humanName: "தமிழ்",
              googleName: "ta_IN",
              twitterName: "ta",
              file: "ta-IN.json"
          }, {
              name: "th",
              humanName: "ไทย",
              googleName: "th_TH",
              twitterName: "th",
              file: "th-TH.json"
          }, {
              name: "tr",
              humanName: "Türkçe",
              googleName: "tr_TR",
              twitterName: "tr",
              file: "tr-TR.json"
          }, {
              name: "uk",
              humanName: "Українська",
              googleName: "uk_UA",
              twitterName: "uk",
              file: "uk-UA.json"
          }, {
              name: "ur",
              humanName: "اردو",
              googleName: "ur-PK",
              twitterName: "ur",
              file: "ur-PK.json"
          }, {
              name: "vi",
              humanName: "Tiếng Việt",
              googleName: "vi_VN",
              twitterName: "vi",
              file: "vi-VN.json"
          }, {
              name: "zh-CN",
              humanName: "简体中文",
              googleName: "zh_CN",
              twitterName: "zh-cn",
              file: "zh-CN.json"
          }, {
              name: "zh-HK",
              humanName: "繁體中文",
              googleName: "zh_TW",
              twitterName: "zh-tw",
              file: "zh-HK.json"
          }];
          function h(e, t) {
              return C(e) == t ? "/" : `/${t}/`
          }
          function m(e, t, n) {
              const a = e + h(e, t) + "/" + n;
              return a.replace("//", "/")
          }
          function u(e, t) {
              const n = c.find((e => e.name == t))
                , a = "twitter" == e.toLowerCase() ? "twitterName" : "googleName";
              return n?.[a] || "en_US"
          }
          function d(e) {
              return c.find((t => t.name == e))?.file || "en-US.json"
          }
          function g(e, t) {
              const n = v("")(t);
              return a.A(y, f(e), v({}), o.A("", "name"))([n])
          }
          function p(e) {
              return Array.isArray(e) ? a.A(y, i.A(N), s.A(r.A(["name", "humanName"])))(e) : []
          }
          function w() {
              return c.map((e => ({
                  name: e.name,
                  humanName: e.humanName
              }))).sort(b)
          }
          function f(e) {
              return function(t) {
                  return t.filter((t => !S(e, t.name)))
              }
          }
          function y(e) {
              return c.filter((t => e.some((e => S(e, t.name)))))
          }
          function v(e) {
              return function(t) {
                  return o.A(e, 0, t)
              }
          }
          function b(e, t) {
              return e.humanName.localeCompare(t.humanName)
          }
          function N(e) {
              return "en-PI" == e.name
          }
          function C(e) {
              return l.find((t => e.includes(t.partialName)))?.locale || "en"
          }
          function S(e, t) {
              return e.length == t.length ? e == t : k(e) == k(t)
          }
          function k(e) {
              return e.split("-")[0]
          }
      }
      ,
      5483: (e, t, n) => {
          n.d(t, {
              F$: () => p,
              Fb: () => u,
              M9: () => F,
              Pg: () => x,
              Pl: () => M,
              TI: () => i,
              Tl: () => y,
              Up: () => _,
              Uy: () => D,
              V8: () => s,
              VU: () => d,
              W3: () => h,
              W4: () => k,
              X1: () => v,
              XH: () => S,
              _6: () => N,
              _b: () => A,
              _m: () => g,
              aN: () => E,
              c1: () => V,
              cC: () => l,
              g8: () => U,
              gQ: () => j,
              hM: () => b,
              ij: () => r,
              ip: () => W,
              kk: () => T,
              lG: () => c,
              lw: () => w,
              mt: () => C,
              oU: () => f,
              sX: () => I,
              tQ: () => L,
              vI: () => R,
              w4: () => O,
              xy: () => P,
              zf: () => m
          });
          n(7396),
          n(923),
          n(9502);
          var a = n(1895)
            , o = n(1056);
          async function i({wheelConfig: e, idToken: t, shareMode: n}) {
              const a = await B("POST", "api/v2/wheels", t, {
                  wheelConfig: (0,
                  o.F)(e),
                  shareMode: n
              });
              return a.data.path
          }
          async function s(e) {
              const t = await B("GET", `api/v2/wheels/${e}`);
              return t.data
          }
          async function r(e, t) {
              let n = "api/v1/wheels/shared";
              t && t.length > 0 && (n += `?fields=${t}`);
              const a = await B("GET", n, e);
              return a.data.wheels
          }
          async function l(e, t) {
              let n = "api/v1/wheels/private";
              t && t.length > 0 && (n += `?fields=${t}`);
              const a = await B("GET", n, e);
              return a.data.wheels
          }
          async function c(e, t) {
              const n = await B("GET", `api/v2/wheels/${t}`, e);
              return n.data
          }
          async function h(e, t) {
              const n = await B("GET", `api/v2/wheels/${e}`, t);
              return n.data
          }
          async function m(e) {
              const t = await B("GET", "api/v2/wheels", e);
              return console.log("getMyWheels", t),
              t.data.wheels
          }
          async function u(e, t) {
              const n = {
                  config: t
              }
                , a = await B("PUT", "api/v1/wheels/private", e, n);
              return a.data.path
          }
          async function d(e, t) {
              const n = await B("DELETE", `api/v2/wheels/${t}`, e);
              return n.data
          }
          async function g(e) {
              await B("POST", "api/v2/users", e)
          }
          async function p(e, t) {
              await B("POST", "api/v2/wheels/change-owner", t, {
                  oldIdToken: e
              })
          }
          async function w(e) {
              await B("DELETE", "api/v2/users", e)
          }
          async function f(e) {
              const t = await B("GET", "api/v2/admin/review-queue", e);
              return t.data
          }
          async function y(e, t) {
              const n = await B("POST", "api/v2/admin/translate", e, {
                  texts: t
              });
              return n.data.translations
          }
          async function v(e) {
              const t = await B("GET", "api/v2/admin", e);
              return t.data.isAdmin
          }
          async function b(e, t) {
              const n = {
                  query: e,
                  pageNumber: t
              }
                , a = await B("POST", "api/v1/gallery/search2", null, n);
              return a.data
          }
          async function N() {
              const e = await B("GET", "api/v1/gallery/suggestions/list");
              return e.data.suggestions
          }
          async function C() {
              const e = await B("GET", "api/v2/client-settings");
              return e.data
          }
          async function S(e) {
              const t = await B("POST", "api/v2/api-keys", e);
              return t.data.apiKey
          }
          async function k(e) {
              const t = await B("DELETE", "api/v2/api-keys", e);
              return t.data
          }
          async function P(e) {
              const t = await B("GET", "api/v2/api-keys", e);
              return t.data
          }
          async function A(e) {
              const t = {
                  method: "GET",
                  mode: "cors",
                  headers: {
                      "x-api-key": e
                  }
              }
                , n = await fetch(a.e9("api/v2/api-keys"), t)
                , o = await G(n);
              return o.data
          }
          async function I(e, t, n) {
              const a = {
                  uid: t,
                  totalReviews: n
              };
              await B("PUT", "api/v2/admin/administrators", e, a)
          }
          async function E(e, t, n) {
              const a = {
                  uid: t,
                  sessionReviews: n
              };
              await B("PUT", "api/v2/admin/administrators", e, a)
          }
          async function T(e) {
              const t = await B("GET", "api/v1/admin/dirty-words", e);
              return t.data.dirtyWords
          }
          async function W(e, t) {
              await B("POST", "api/v1/admin/dirty-words", e, {
                  dirtyWords: t
              })
          }
          async function x(e) {
              const t = await B("GET", "api/v2/admin/administrators", e);
              return t.data.administrators
          }
          async function R(e, t, n) {
              const a = {
                  uid: t,
                  name: n
              };
              await B("POST", "api/v2/admin/administrators", e, a)
          }
          async function M(e, t) {
              const n = {
                  uid: t
              };
              await B("DELETE", "api/v2/admin/administrators", e, n)
          }
          async function O(e, t) {
              await B("PUT", `api/v2/admin/wheels/${t}`, e, {
                  shareMode: "copyable"
              })
          }
          async function L(e) {
              const t = "api/v2/admin/review-queue/next-shared-wheel"
                , n = await B("GET", t, e);
              return n.data.wheel
          }
          async function U(e) {
              const t = "api/v2/admin/review-queue/next-gallery-wheel"
                , n = await B("GET", t, e);
              return n.data.wheel
          }
          async function j(e, t) {
              await B("POST", `api/v2/admin/review-queue/approve/${t}`, e)
          }
          async function D(e, t) {
              await B("POST", `api/v2/admin/review-queue/reject/${t}`, e)
          }
          async function F(e, t) {
              await B("PUT", "api/v2/admin/client-settings", e, {
                  carouselSlides: t
              })
          }
          async function _() {
              const e = await B("GET", "api/v2/languages");
              return e.data.languages
          }
          async function V() {
              const e = "https://discord-bot-wada35rq7a-uc.a.run.app/guild-count"
                , t = {
                  method: "GET",
                  mode: "cors"
              }
                , n = await fetch(e, t)
                , a = await G(n);
              if (a.hasOwnProperty("guildCount"))
                  return a.guildCount;
              throw "No guildCount property in response"
          }
          async function B(e, t, n, o) {
              const i = {
                  method: e,
                  mode: "cors",
                  headers: {}
              };
              n && (i.headers["Authorization"] = n),
              o && (i.headers["Content-Type"] = "application/json",
              i.body = JSON.stringify(o));
              const s = await fetch(a.e9(t), i)
                , r = await G(s);
              return r
          }
          async function G(e) {
              const t = await e.text();
              if (t.startsWith("<"))
                  throw t;
              const n = JSON.parse(t);
              if (n.hasOwnProperty("error"))
                  throw n.error;
              return n
          }
      }
      ,
      1895: (e, t, n) => {
          n.d(t, {
              AP: () => E,
              Bu: () => c,
              CX: () => r,
              Cq: () => I,
              EK: () => G,
              Ft: () => T,
              HK: () => R,
              Hd: () => q,
              Hu: () => b,
              KN: () => z,
              Ke: () => J,
              PE: () => L,
              PK: () => F,
              Pe: () => Y,
              QH: () => f,
              R3: () => w,
              Vl: () => B,
              Wp: () => h,
              Xz: () => l,
              ZD: () => S,
              ZP: () => g,
              bM: () => i,
              cH: () => d,
              dZ: () => y,
              dv: () => p,
              e9: () => K,
              ek: () => x,
              f6: () => M,
              hw: () => W,
              kV: () => a,
              o8: () => j,
              oF: () => A,
              op: () => u,
              q6: () => $,
              r1: () => o,
              rB: () => O,
              sL: () => v,
              sW: () => k,
              sx: () => N,
              to: () => C,
              vG: () => U,
              yy: () => D
          });
          n(239);
          function a(e) {
              return -1 == e.indexOf("OS 12_2 like Mac OS X")
          }
          function o(e, t) {
              if (e === t)
                  return !0;
              if (null == e || null == t)
                  return !1;
              if (e.length != t.length)
                  return !1;
              for (var n = 0; n < e.length; ++n)
                  if (e[n] !== t[n])
                      return !1;
              return !0
          }
          function i(e, t) {
              const n = Object.keys(e)
                , a = Object.keys(t);
              if (n.length !== a.length)
                  return !1;
              for (const o of n) {
                  const n = e[o]
                    , a = t[o]
                    , r = s(n) && s(a);
                  if (r && !i(n, a) || !r && n !== a)
                      return !1
              }
              return !0
          }
          function s(e) {
              return null != e && "object" === typeof e
          }
          function r(e, t, n, a, o) {
              let i = Math.sqrt(Math.pow(t, 2) - Math.pow(o / 2, 2)) - Math.max(o * Math.cos(e) / (2 * Math.sin(e)), n);
              return i >= a
          }
          function l(e) {
              if (e) {
                  let t = e.match(/<img.*?src="(.*?)".*?>/);
                  t && (e = e.replace(t[0], ""))
              }
              let t = "";
              return e && (t = P(e)),
              t
          }
          function c(e) {
              let t = "";
              if (e) {
                  t = e;
                  const n = 18;
                  t.length > n && (t = t.substring(0, n - 1) + "…")
              }
              return t
          }
          function h(e, t) {
              if (e)
                  return t;
              {
                  const e = []
                    , n = [];
                  for (let a of t) {
                      const t = m(a);
                      e.includes(t) || (e.push(t),
                      n.push(a))
                  }
                  return n
              }
          }
          function m(e) {
              const t = {};
              return e.text && (t.text = e.text),
              e.image && (t.image = e.image),
              JSON.stringify(t)
          }
          function u(e, t) {
              const n = [];
              for (let a = 0; a < e.length; a++)
                  if (m(t) == m(e[a]) && n.push(a),
                  t.id == e[a].id)
                      return n[0] != a;
              return !1
          }
          function d(e) {
              if (!e)
                  return [];
              let t = e.split(/<div>|<\/div>|<br>|<p>/)
                , n = [/<div.*?>/g, /<\/div>/g, /<p.*?>/g, /<\/p>/g, /<span.*?>/g, /<\/span>/g, /<font.*?>/g, /<\/font>/g, /<!--.*?>/g, /<br.*?>/g];
              return t.map((e => {
                  let t = e;
                  return n.forEach((e => {
                      t = t.replace(e, "")
                  }
                  )),
                  p(l(t), g(t))
              }
              )).filter((e => e.text || e.image))
          }
          function g(e) {
              let t = "";
              if (e) {
                  let n = e.match(/<img.*?src="(.*?)".*?>/);
                  n && (t = n[1])
              }
              return t
          }
          function p(e, t, n, a, o, i) {
              const s = {};
              return e && (s.text = e),
              t && (s.image = t),
              n && (s.color = n),
              a && (s.weight = a),
              o && (s.sound = o),
              i && (s.message = i),
              s
          }
          function w(e) {
              const t = e.slice(0);
              for (var n = t.length - 1; n > 0; n--) {
                  var a = Math.floor(Math.random() * (n + 1))
                    , o = t[n];
                  t[n] = t[a],
                  t[a] = o
              }
              return t
          }
          function f(e) {
              return e[Math.floor(Math.random() * e.length)]
          }
          function y(e, t) {
              return t ? e.reduce((function(e, n) {
                  return e + (n.trim() == t.trim() ? 1 : 0)
              }
              ), 0) : 0
          }
          function v(e) {
              return e.slice(0).sort(( (e, t) => {
                  const n = e.text || ""
                    , a = t.text || "";
                  return n.localeCompare(a, "en", {
                      numeric: !0,
                      sensitivity: "base"
                  })
              }
              ))
          }
          function b(e, t) {
              return e || (e = []),
              t || (t = []),
              {
                  additions: t.filter((t => !e.includes(t))),
                  removals: e.filter((e => !t.includes(e)))
              }
          }
          function N(e, t, n) {
              location.host.startsWith("localhost") || location.host.startsWith("test") || "undefined" !== typeof gtag && gtag("event", t, {
                  event_label: n
              })
          }
          function C(e, t) {
              const n = t.toString()
                , a = navigator.userAgent;
              N(e, n, a),
              console.error(n)
          }
          function S(e) {
              return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
          }
          function k(e) {
              let t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
              return S(t).replace(/\|\|mark\|\|/g, "<mark>").replace(/\|\|\/mark\|\|/g, "</mark>")
          }
          function P(e) {
              return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&nbsp;/g, " ")
          }
          function A(e) {
              return e.replace(/<.*?>/g, "")
          }
          function I() {
              const e = 10;
              let t = "";
              const n = "abcdefghjkmnpqrstuvwxyz23456789";
              for (let a = 0; a < e; a++)
                  t += n.charAt(Math.floor(Math.random() * n.length));
              return t
          }
          function E(e) {
              return e && e.map ? e.map((e => (e.id = e.id || I(),
              e))) : []
          }
          function T(e) {
              let t = ""
                , n = "";
              return e && (e.image && (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
              e.text && (n = S(e.text),
              n = n.replace(/^ +$/g, "&nbsp;"))),
              "<div>" + t + n + "</div>"
          }
          function W(e, t) {
              return e = Math.ceil(e),
              t = Math.floor(t),
              Math.floor(Math.random() * (t - e + 1) + e)
          }
          function x(e) {
              return "en" == e ? "" : e
          }
          function R(e, t) {
              return "https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=" + encodeURIComponent(e) + "&entry.558479038=" + t
          }
          function M(e) {
              let t = 0;
              return e.forEach((e => {
                  e.weight && (1 != e.enabled && e.hasOwnProperty("enabled") || (t += e.weight))
              }
              )),
              t
          }
          function O(e, t) {
              let n = 0;
              if (0 == e.length)
                  return 0;
              if (e[0].weight) {
                  const a = M(e)
                    , o = e.map((e => 2 * Math.PI * e.weight / a))
                    , i = [];
                  n = 0;
                  let s = o[0] / 2;
                  e.forEach(( (e, t) => {
                      i.push(s),
                      s += o[t + 1]
                  }
                  )),
                  n = 0;
                  while (1) {
                      if (t < i[n])
                          break;
                      if (n++,
                      n > i.length - 1)
                          break
                  }
              } else {
                  const a = 2 * Math.PI / e.length;
                  n = Math.round(t / a)
              }
              return n >= e.length && (n = 0),
              n
          }
          function L(e, t) {
              return !e || t && "#ffffff" != t.toLowerCase() ? t || "#ffffff" : "#121212"
          }
          function U(e) {
              if (!e)
                  return "#000000";
              let t = "#" === e.charAt(0) ? e.substring(1, 7) : e
                , n = parseInt(t.substring(0, 2), 16)
                , a = parseInt(t.substring(2, 4), 16)
                , o = parseInt(t.substring(4, 6), 16)
                , i = [n / 255, a / 255, o / 255]
                , s = i.map((e => e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)))
                , r = .2126 * s[0] + .7152 * s[1] + .0722 * s[2];
              return r > .179 ? "#000000" : "#FFFFFF"
          }
          function j(e) {
              return JSON.parse(JSON.stringify(e))
          }
          function D(e) {
              return new Promise((t => setTimeout(t, e)))
          }
          function F(e, t) {
              return _(V(e), t)
          }
          function _(e, t, n=Date.now()) {
              if (!e)
                  return "-";
              t || (t = "en");
              const a = Math.floor((n - e) / 1e3)
                , o = [Math.floor(a / 31536e3), Math.floor(a / 2592e3), Math.floor(a / 604800), Math.floor(a / 86400), Math.floor(a / 3600), Math.floor(a / 60), a]
                , i = ["year", "month", "week", "day", "hour", "minute", "second"]
                , s = new Intl.RelativeTimeFormat(t,{
                  numeric: "auto"
              });
              for (const r in o)
                  if (o[r] >= 1)
                      return s.format(-o[r], i[r]);
              return "moments ago"
          }
          function V(e) {
              return e && e._seconds ? 1e3 * e._seconds : e && e.seconds ? 1e3 * e.seconds : e && Number.isInteger(e) ? e : void 0
          }
          function B(e) {
              if (H(e))
                  return "$ " + e.toFixed(2)
          }
          function G(e) {
              if ((e || 0 == e) && e.toLocaleString)
                  return e.toLocaleString()
          }
          function z(e) {
              return H(e) && e >= 0 ? Math.round(100 * e) + " %" : "?"
          }
          function H(e) {
              return Number.isFinite(e)
          }
          function q() {
              return window.location !== window.parent.location
          }
          function K(e) {
              return location.host.startsWith("localhost") ? `http://localhost:8081/${e}` : `/${e}`
          }
          function J(e) {
              const t = ["spin-only", "copyable", "gallery"];
              return t.includes(e)
          }
          function Y(e, t) {
              const n = Object.entries(e).sort(( (e, n) => "sounds.Sound effects" === e[0] ? -1 : "sounds.Sound effects" === n[0] ? 1 : "sounds.Winter holidays" === e[0] && t > 9 ? -1 : "sounds.Winter holidays" === n[0] && t > 9 ? 1 : 0));
              return n.reduce(( (e, t) => (e[t[0]] = t[1],
              e)), {})
          }
          function $(e) {
              return e instanceof Error ? e.message : "string" === typeof e ? e : e instanceof Object ? e.toString() : "An unknown error occurred"
          }
      }
      ,
      886: (e, t, n) => {
          n.r(t),
          n.d(t, {
              default: () => s
          });
          var a = n(1573)
            , o = n(7387)
            , i = n(7058);
          const s = (0,
          a.zj)(( ({app: e}) => {
              e.use((0,
              o.hU)({
                  locale: "en",
                  fallbackLocale: "en",
                  messages: i["default"]
              }))
          }
          ))
      }
      ,
      1056: (e, t, n) => {
          n.d(t, {
              A: () => o,
              F: () => s
          });
          var a = n(1895);
          class o {
              constructor(e) {
                  this.title = "",
                  this.description = "",
                  this.entries = [{
                      text: "Ali"
                  }, {
                      text: "Beatriz"
                  }, {
                      text: "Charles"
                  }, {
                      text: "Diya"
                  }, {
                      text: "Eric"
                  }, {
                      text: "Fatima"
                  }, {
                      text: "Gabriel"
                  }, {
                      text: "Hanna"
                  }],
                  this.colorSettings = [{
                      color: "#3369E8",
                      enabled: !0
                  }, {
                      color: "#D50F25",
                      enabled: !0
                  }, {
                      color: "#EEB211",
                      enabled: !0
                  }, {
                      color: "#009925",
                      enabled: !0
                  }, {
                      color: "#000000",
                      enabled: !1
                  }, {
                      color: "#000000",
                      enabled: !1
                  }],
                  this.pageBackgroundColor = "#FFFFFF",
                  this.type = "color",
                  this.pictureType = "none",
                  this.coverImageType = "",
                  this.coverImageName = "",
                  this.galleryPicture = "/images/none.png",
                  this.customPictureName = "",
                  this.customPictureDataUri = "",
                  this.customCoverImageDataUri = "",
                  this.centerText = "",
                  this.allowDuplicates = !0,
                  this.duringSpinSound = "ticking-sound",
                  this.duringSpinSoundVolume = 50,
                  this.afterSpinSound = "applause-sound-soft",
                  this.afterSpinSoundVolume = 50,
                  this.maxNames = 1e3,
                  this.spinTime = 10,
                  this.launchConfetti = !0,
                  this.animateWinner = !1,
                  this.autoRemoveWinner = !1,
                  this.displayWinnerDialog = !0,
                  this.displayRemoveButton = !0,
                  this.displayHideButton = !0,
                  this.winnerMessage = "",
                  this.playClickWhenWinnerRemoved = !1,
                  this.hubSize = "S",
                  this.drawOutlines = !1,
                  this.slowSpin = !1,
                  this.showTitle = !0,
                  this.isAdvanced = !1,
                  this.drawShadow = !0,
                  e && this.copyPropertiesFrom(e)
              }
              loadJson(e) {
                  try {
                      const t = JSON.parse(e);
                      t.entries.length > 0 && this.copyPropertiesFrom(t)
                  } catch (t) {
                      console.error(t)
                  }
              }
              getJson() {
                  return JSON.stringify(this)
              }
              getValues() {
                  return JSON.parse(this.getJson())
              }
              loadValues(e) {
                  this.copyPropertiesFrom(JSON.parse(JSON.stringify(e)))
              }
              clone() {
                  const e = new o;
                  return e.loadValues(this.getValues()),
                  e
              }
              hasOnlyDefaultEntries() {
                  return a.r1(this.getTexts(), (new o).getTexts())
              }
              setUploadedCenterImage(e, t) {
                  this.customPictureName = e,
                  this.customPictureDataUri = t,
                  this.pictureType = "uploaded",
                  this.centerText = ""
              }
              setUploadedBackgroundImage(e, t) {
                  this.coverImageName = e,
                  this.customCoverImageDataUri = t,
                  this.coverImageType = "uploaded"
              }
              setGalleryBackgroundImage(e) {
                  this.coverImageType = "gallery",
                  this.coverImageName = e
              }
              setGalleryCenterImage(e) {
                  this.centerText = "",
                  this.pictureType = "gallery",
                  this.galleryPicture = e,
                  this.customPictureName = "",
                  this.customPictureDataUri = ""
              }
              getWheelImage() {
                  return "none" === this.pictureType ? "/images/none.png" : "gallery" === this.pictureType && this.galleryPicture ? this.galleryPicture : "uploaded" !== this.pictureType && "text" !== this.pictureType || !this.customPictureDataUri ? null : this.customPictureDataUri
              }
              getCoverImage() {
                  return "gallery" === this.coverImageType && this.coverImageName ? this.coverImageName : "uploaded" === this.coverImageType && this.customCoverImageDataUri ? this.customCoverImageDataUri : null
              }
              shouldPlayTicks() {
                  return "ticking-sound" === this.duringSpinSound
              }
              setColorValues(e) {
                  if (e) {
                      this.colorSettings = e.map((e => ({
                          color: e,
                          enabled: !0
                      })));
                      while (this.colorSettings.length < 6)
                          this.colorSettings.push({
                              color: "#000000",
                              enabled: !1
                          })
                  }
              }
              getCoalescedColors() {
                  const e = this.colorSettings.filter((e => e.enabled)).map((e => e.color));
                  return e.length > 0 ? e : ["#CCCCCC"]
              }
              isTooBigForDatabase() {
                  return this.getJson().length > 99e4
              }
              getTexts() {
                  return this.entries.map((e => e.text)).filter((e => e))
              }
              getFirstText() {
                  const e = this.getTexts();
                  return e.length > 0 ? e[0] : ""
              }
              copyPropertiesFrom(e) {
                  Object.assign(this, e),
                  this.convertOldData()
              }
              usesAdvancedFeatures() {
                  for (const [e,t] of this.entries.entries()) {
                      if (t.color && t.color !== this.getEntryColor(e))
                          return !0;
                      if ("weight"in t && 1 !== t.weight)
                          return !0;
                      if (!1 === t.enabled)
                          return !0;
                      if (t.sound)
                          return !0;
                      if (t.message)
                          return !0
                  }
                  return !1
              }
              getEntryColor(e) {
                  const t = this.getCoalescedColors();
                  return this.entries.length > 1 && this.isLastSliceAndSameColorAsFirstSlice(e) && t.length > 2 ? t[1] : t[e % t.length]
              }
              isLastSliceAndSameColorAsFirstSlice(e) {
                  if (e === this.entries.length - 1) {
                      const t = this.getCoalescedColors();
                      return e % t.length === 0
                  }
                  return !1
              }
              convertOldData() {
                  const e = this;
                  Array.isArray(e.names) && (e.entries = e.names.map((e => a.dv(a.Xz(e), a.ZP(e)))),
                  delete e.names),
                  e.maxNames = Number(e.maxNames),
                  e.spinTime = Number(e.spinTime),
                  !1 === e.playTicks && (e.duringSpinSound = "no-sound"),
                  delete e.playTicks,
                  !1 === e.playCheers && (e.afterSpinSound = "no-sound"),
                  delete e.playCheers,
                  e.hasOwnProperty("showTitle") || (e.showTitle = !0),
                  "image" !== e.type || e.coverImageType || (e.coverImageType = "gallery"),
                  e.isAdvanced && e.entries.length > 0 && (e.entries[0].hasOwnProperty("enabled") || e.entries.forEach((e => {
                      e.enabled = !0
                  }
                  ))),
                  void 0 === e.drawShadow && (e.drawShadow = !0),
                  e.entries.forEach((e => {
                      e.text && (e.text = e.text.replace("\n", "").replace("\r", ""))
                  }
                  )),
                  a.AP(e.entries),
                  e.entries = e.entries.filter((e => e.text || e.image || "enabled"in e))
              }
              removeImages() {
                  var e;
                  for (const t of this.entries)
                      if (t.hasOwnProperty("image")) {
                          if (!(null === (e = t.text) || void 0 === e ? void 0 : e.trim()))
                              return !1;
                          delete t.image
                      }
                  return "image" === this.type && (this.type = "color"),
                  this.customPictureDataUri = "",
                  this.customCoverImageDataUri = "",
                  !0
              }
          }
          const i = Object.fromEntries(Object.entries(new o).map(( ([e,t]) => [e, typeof t])));
          function s(e) {
              const t = new o(e.clone());
              for (const n of t.entries)
                  delete n.id;
              return Object.fromEntries(Object.entries(t).filter(( ([e,t]) => e in i && typeof t === i[e])))
          }
      }
      ,
      7964: e => {
          e.exports = JSON.parse('{"advancededitor":{"Add entry":"Add entry","Color":"Color","Duplicate":"Duplicate","Entry":"Entry","Image attached":"Image attached","Inherit from wheel":"Inherit from wheel","No entries":"No entries","Not shown on the wheel":"Not shown on the wheel","Popup message":"Popup message","Probability":"Probability","Reset color":"Reset color","Shown on the wheel":"Shown on the wheel","Text":"Text","This color has been manually assigned":"This color has been manually assigned","This color is inherited from the theme":"This color is inherited from the theme","Use color from image":"Use color from image","Visible":"Visible","Weight":"Weight"},"app":{"Ads":"Ads","An error occurred":"An error occurred. Refresh the web page with Ctrl+Shift+R (Windows, Linux, Chromebook) or Command+Shift+R (Mac) or swiping down (iPhone, Android).","Click here to report an inappropriate ad":"Click here to report an inappropriate ad.","Click the Language menu":"Click the menu in the upper right to switch to English","Close ad":"Close ad","Confirm":"Confirm","Copy this wheel":"Copy this wheel","Create your own":"Create your own","Enter password":"Please enter the password","Error":"Error","Free and easy to use":"Free and easy to use spinner. Used by teachers and for raffles. Enter names and spin the wheel to pick a random winner. Customize look and feel, save and share wheels.","Help me choose":"Help me choose","Incorrect password":"Sorry, that was not the correct password","Loaded default names and options":"Loaded default names and options","New version available":"New version available","Random name picker":"Random name picker","Removed":"Removed {name}","Removing winner in":"Removing winner in {seconds} seconds","Report bad ad":"Report bad ad","There is a new version":"There is a new version of the application. To complete your action, reload the page to get the new version and then try your action again. If that doesn\'t work, try using https://old.wheelofnames.com.","We try to display only legitimate and honest ads":"We try to display only legitimate and honest ads."},"appInfo":{"Go back to the old design":"Go back to the old design","Terms of service":"Terms & conditions","Version":"Version","You are looking at a preview":"You\'re looking at a preview of our upcoming redesign!"},"common":{"Cancel":"Cancel","Changelog":"Changelog","Close":"Close","Continue":"Continue","Customize":"Customize","Delete":"Delete","Edit":"Edit","Edit description":"Edit description","Edit title":"Edit title","Edit title and description":"Edit title and description","If you dont see a Google login button below":"If you don\'t see a Google login button below, it\'s probably because you are using an ad-blocker that mistakenly thinks the button is an ad.","Import Twitter users":"Import Twitter users","Link Google Spreadsheet":"Link Google Spreadsheet","Load more":"Load more","Log in":"Log in","My account":"My account","OK":"OK","Open":"Open","Please choose your sign-in method":"Please choose your sign-in method below.","Privacy policy":"Privacy policy","Reload":"Reload","Report offensive content":"Report offensive content","Save":"Save","Search":"Search","Undo":"Undo","Use this in the classroom":"Use this in the classroom","We have a winner!":"We have a winner!","Wheel description":"Wheel description","Wheel title":"Wheel title"},"gallery":{"Spin this wheel":"Spin this wheel","views":"{readCount} views","wheels were found":"{resultCount} wheels were found.","You can add your own wheels":"You can add your own wheels to this gallery by clicking \\"Share\\" on the main page."},"languagedialog":{"All languages":"All languages","Suggested languages":"Suggested languages"},"nameTabs":{"Clear the list":"Clear the list","Entries":"Entries","Hide":"Hide","Results":"Results"},"opendialog":{"Are you sure":"Are you sure you want to delete \\"{wheelTitle}\\"? This action cannot be undone.","Delete wheel":"Delete wheel","No wheels found":"No wheels found in your account. Try saving a wheel!","Open a local file":"Open a local file","Open a local file instead":"Open a local file instead","Open from the cloud (recommended)":"Open from the cloud (recommended)","Open wheel":"Open wheel"},"optionsdialog":{"Adjust colors on the wheel":"Adjust colors on the wheel?","After spin":"After spin","All names in the text-box":"All names in the text-box have the same chance of winning, regardless of this value.","Animate winning entry":"Animate winning entry","Appearance":"Appearance","Apply a theme":"Apply a theme","Auto-remove winner after 5 seconds":"Auto-remove winner after 5 seconds","Background color":"Page background color","Center text":"Center text","Colors":"Colors","Colors tooltip":"Click the color swatches to modify them","Contours":"Contours","Custom":"Custom","Custom page background color":"Custom page background color is not visible in dark mode","Customize colors":"Customize colors","Disabled because the entries":"Disabled because the entries have unequal weights","Display duplicates":"Display duplicates","Display every entry":"Display every entry in the textbox as an entry on the wheel, even duplicates","Display Hide button":"Display the \\"Hide\\" button","Display popup with message:":"Display popup with message:","Display Remove button":"Display the \\"Remove\\" button","During spin":"During spin","From Gallery":"From gallery","Image":"Image","Image in the center of the wheel":"Image at the center of the wheel","Image size":"Image size","Launch confetti":"Launch confetti","Max names on wheel":"Max number of names visible on the wheel","No":"No","One color":"One color per section","Pick category":"Pick category","Pick theme":"Pick theme","Play click sound when the winner is removed":"Play a click sound when the winner is removed","Remove image":"Remove the image","Select a gallery picture":"Select a gallery picture","Show title":"Show title","Sound":"Sound","Spin slowly":"Spin slowly","Spin time (seconds)":"Spin time (seconds)","Text":"Text","Upload image":"Upload image","Volume":"Volume","Wheel background image":"Wheel background image","Wheel shadow":"Wheel shadow","Yes":"Yes","Your image has been uploaded":"Your image \\"{fileName}\\" has been uploaded successfully. Would you like to use the prominent colors from this image for the sectors of your wheel?"},"profiledropdown":{"Are you sure you want to delete your account":"Are you sure you want to delete your account and all your saved wheels? This action cannot be undone.","Delete account":"Delete account","Delete my account":"Delete my account","Export my data":"Export my data","Sign out":"Sign out","Signed in as":"Signed in as {name}","Your account and your saved wheels have been deleted":"Your account and your saved wheels have been deleted"},"savedialog":{"Do you want to save it as a local file instead?":"Your wheel is too big to be saved in the cloud. Do you want to save it as a local file instead?","File name":"File name","Save as":"Save as","Save to a local file":"Save to a local file","Save to a local file instead":"Save to a local file instead","Save to the cloud (recommended)":"Save to the cloud (recommended)","Save to the cloud instead":"Save to the cloud instead","Save wheel":"Save wheel","Save wheel to the cloud":"Save wheel to the cloud","Select a wheel":"Select a wheel","Sorry, too many images":"Sorry, this wheel has too many images to be saved in the database. Reduce the number of images and try saving again.","Thats a lot of images":"That\'s a lot of images!","Wheel saved successfully":"Wheel \\"{wheelTitle}\\" saved successfully","You are about to overwrite":"You are about to overwrite an existing wheel. Are you sure you want to continue?","You will always be able to access":"You will always be able to access your saved wheels so long as you open or save any wheel at least once every 12 months.","Your existing wheels":"Your existing wheels"},"sharedialog":{"Anyone who knows the password":"Anyone who knows the password","Anyone with the link":"Anyone with the link","Anyone with the link can spin and copy the wheel":"Anyone with the link can spin and copy the wheel","Anyone with the link can spin the wheel":"Anyone with the link can spin the wheel","Broadcast spins and edits":"Broadcast spins and edits to anyone watching the wheel","Copy link":"Copy link","Created":"Created","Gallery wheels require a title":"Gallery wheels require a title","If you continue":"If you continue, you will create a public link to your current wheel, including its names, colors and settings.","Last viewed":"Last viewed","Link":"Link","Link copied to the clipboard":"Link copied to the clipboard","Link to this wheel":"Link to this wheel with current names, colors and settings:","My shared wheels":"My shared wheels","No wheels found":"No shared wheels found in your account. Try sharing a wheel!","Only me":"Only me","Only wheels shared after":"Only wheels shared after July 12th, 2021 will appear in this list.","Password":"Password","Public":"Public","See my shared wheels":"See my shared wheels","Shareable link":"Shareable link","Show title to people":"Show the title to people who use your shared link","Sorry, too many images":"Sorry, this wheel has too many images to be shared. Reduce the number of images and try saving again.","The wheel includes text that":"The wheel includes text that isn\'t family-friendly. Please adjust it and try again.","They should be able to spin the wheel and":"They should be able to spin the wheel and make a copy of it","They should only be able to spin the wheel":"They should only be able to spin the wheel","This link will work for anyone":"This link will work for anyone and you can share it by email, website, social media, etc. Unused links will be deleted after 365 days.","This wheel would be useful":"This wheel would be useful to the Wheel of Names community and should appear in the public gallery","Unlisted":"Unlisted","Unlisted (spin-only)":"Unlisted (spin-only)","Visibility":"Visibility","Visits":"Views","We want this website to be safe place for everyone":"We want this website to be a safe place for everyone. Wheels that aren\'t family-friendly and that violate the terms of service will be deleted.","What should a person be able to do":"What should a person be able to do when they use your shared link?","Who can spin and edit the wheel":"Who should be able to spin and edit the wheel?","You are about to publish your wheel to the public gallery":"You are about to publish your wheel to the public gallery. Anyone in the world will be able to view your wheel. Please make sure it doesn\'t contain personal information, such as names. Are you sure you want to continue?","Your wheel must have a title":"Your wheel must have a title"},"sheetdialog":{"added":"{entry} added","Column":"Column","entries added":"{count} entries added","First row":"First row","Is a header and should not be imported":"Is a header and should not be imported","Link sheet":"Link sheet","Select a column":"Select a column","Select a tab":"Select a tab","Selected spreadsheet":"Selected spreadsheet","Tab":"Tab","To import sheets":"To import sheets you need to log in to your Google account. Why? Google needs to know who you are, so they can let you pick one of your spreadsheets.","When you link a spreadsheet":"When you link a spreadsheet, the wheel will contain the same entries as the spreadsheet. If rows are added or deleted in the spreadsheet, entries are automatically added to or removed from the wheel. The connection will close after one hour."},"sounds":{"Alarm clock":"Alarm clock","Angel choir":"Angel choir","Announcement bell":"Announcement bell","Applause":"Loud applause","Basketball buzzer":"Basketball buzzer","Bell ringing":"Bell ringing","Bird chirps":"Bird chirps","Boing":"Boing","Boing 2":"Boing 2","Carnival shout":"Carnival shout","Cartoon whistle":"Cartoon whistle","Cat meow":"Cat meow","Childrens hooray":"Children\'s hooray","Cinematic drum impact":"Cinematic drum impact","Cinematic music":"Cinematic music","Correct answer ding":"Correct answer ding","Crash":"Crash","Cymbals":"Cymbals","Dog bark":"Dog bark","Drum roll":"Drum roll","Easy listening":"Easy listening","Evil laugh":"Evil laugh","Fanfare":"Fanfare","Fireworks":"Fireworks","Game win ding":"Game win ding","Ghost":"Ghost","Hooray":"Hooray","Horror scream":"Horror scream","Horse":"Horse","Joke punchline":"Joke punchline","Lion roar":"Lion roar","Lost game":"Lost game","Microwave ding":"Microwave ding","Military trumpet":"Military trumpet","Mystery bell":"Mystery bell","No sound":"No sound","Notification bell":"Notification bell","Old phone ringing":"Old phone ringing","Pan flute":"Pan flute","Pop music":"Pop music","Random 8-Bit":"Random 8-Bit","Random ballroom dancing":"Random ballroom dancing","Random cinematic music":"Random cinematic music","Random dance & techno":"Random dance & techno","Random disco":"Random disco","Random easy listening":"Random easy listening","Random electronica":"Random electronica","Random folk music":"Random folk music","Random funk":"Random funk","Random hip hop":"Random hip hop","Random music":"Random music","Random polka":"Random polka","Random pop music":"Random pop music","Random reggae & reggaeton":"Random reggae & reggaeton","Random retro-rock":"Random retro-rock","Random rock music":"Random rock music","Random rockabilly":"Random rockabilly","Random silent film score":"Random silent film score","Random winter holidays":"Random winter holiday music","Random world music":"Random world music","Read out the winning name":"Read out the winning name","Read out the winning name (option 1)":"Read out the winning name (option 1)","Read out the winning name (option 2)":"Read out the winning name (option 2)","Referee whistle":"Referee whistle","Rock music":"Rock music","Sad trombone":"Sad trombone","Silent film score":"Silent film score","Sound effects":"Sound effects","Subdued applause":"Subdued applause","Swoosh ding":"Swoosh ding","Synth bell":"Synth bell","Taiko drum":"Taiko drum","Thunder":"Thunder","Ticking sound":"Ticking sound","Twinkling star":"Twinkling star","Water splash":"Water splash","Winter holidays":"Winter holiday music","Wolf howl":"Wolf howl","World music":"World music","Xylophone ascending":"Xylophone ascending"},"spinningwheel":{"Click to spin":"Click to spin","or press ctrl+enter":"or press ctrl+enter","Tap to spin":"Tap to spin"},"textboxbuttons":{"Add background image":"Add background image","Add center image":"Add center image","Add image":"Add image","Add image as entry":"Add image as entry","Advanced":"Advanced","Are you sure you want to switch to advanced":"Are you sure you want to switch to advanced mode? Advanced mode provides more customization, but you cannot paste in several entries at once. You can always switch back by unchecking the \\"Advanced\\" checkbox.","Revert from advanced":"Revert","Reverting will reset":"If you revert from advanced mode you may lose some colors. Are you sure you want to continue?","Shuffle":"Shuffle","Sort":"Sort","Updated the wheel background image":"Updated the wheel background image","Updated the wheel center image":"Updated the wheel center image"},"toolbar":{"Add your language":"Add your language","Dark mode":"Dark mode","Exit fullscreen":"Exit fullscreen","FAQ":"FAQ","Feedback":"Feedback","Fullscreen":"Fullscreen","Gallery":"Gallery","Language":"Language","More":"More","New":"New","Offline mode":"Offline mode","Please enter your email address":"Please enter your email address to continue","Send debug data":"Send debug data","Share":"Share","Unlink Google Spreadsheet":"Unlink Google Spreadsheet","User reviews and tutorials":"User reviews and tutorials","Your session is now being recorded":"Your session is now being recorded. You can stop the recording by closing your browser window."},"unsplashdialog":{"Search the gallery":"Search the gallery"},"winnerdialog":{"Hide":"Hide","Remove":"Remove","Remove all instances":"Remove all instances"}}')
      }
  }
    , t = {};
  function n(a) {
      var o = t[a];
      if (void 0 !== o)
          return o.exports;
      var i = t[a] = {
          exports: {}
      };
      return e[a].call(i.exports, i, i.exports, n),
      i.exports
  }
  n.m = e,
  ( () => {
      n.amdD = function() {
          throw new Error("define cannot be used indirect")
      }
  }
  )(),
  ( () => {
      var e = [];
      n.O = (t, a, o, i) => {
          if (!a) {
              var s = 1 / 0;
              for (h = 0; h < e.length; h++) {
                  for (var [a,o,i] = e[h], r = !0, l = 0; l < a.length; l++)
                      (!1 & i || s >= i) && Object.keys(n.O).every((e => n.O[e](a[l]))) ? a.splice(l--, 1) : (r = !1,
                      i < s && (s = i));
                  if (r) {
                      e.splice(h--, 1);
                      var c = o();
                      void 0 !== c && (t = c)
                  }
              }
              return t
          }
          i = i || 0;
          for (var h = e.length; h > 0 && e[h - 1][2] > i; h--)
              e[h] = e[h - 1];
          e[h] = [a, o, i]
      }
  }
  )(),
  ( () => {
      n.n = e => {
          var t = e && e.__esModule ? () => e["default"] : () => e;
          return n.d(t, {
              a: t
          }),
          t
      }
  }
  )(),
  ( () => {
      var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
      n.t = function(a, o) {
          if (1 & o && (a = this(a)),
          8 & o)
              return a;
          if ("object" === typeof a && a) {
              if (4 & o && a.__esModule)
                  return a;
              if (16 & o && "function" === typeof a.then)
                  return a
          }
          var i = Object.create(null);
          n.r(i);
          var s = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = t(r))
              Object.getOwnPropertyNames(r).forEach((e => s[e] = () => a[e]));
          return s["default"] = () => a,
          n.d(i, s),
          i
      }
  }
  )(),
  ( () => {
      n.d = (e, t) => {
          for (var a in t)
              n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                  enumerable: !0,
                  get: t[a]
              })
      }
  }
  )(),
  ( () => {
      n.f = {},
      n.e = e => Promise.all(Object.keys(n.f).reduce(( (t, a) => (n.f[a](e, t),
      t)), []))
  }
  )(),
  ( () => {
      n.u = e => "js/" + ({
          83: "locales/gl-ES",
          213: "locales/cs-CZ",
          430: "locales/uk-UA",
          504: "ExportPage",
          512: "locales/fr-FR",
          630: "locales/fi-FI",
          697: "locales/vi-VN",
          932: "locales/pl-PL",
          966: "locales/ru-RU",
          967: "vibrant",
          996: "chunk-common",
          1076: "locales/hr-HR",
          1109: "locales/am-ET",
          1296: "FaqPage",
          1367: "locales/ja-JP",
          1452: "locales/lt-LT",
          1517: "locales/zh-CN",
          1806: "locales/pa-IN",
          1808: "locales/he-IL",
          1879: "locales/sl-SI",
          1964: "locales/kn-IN",
          2052: "locales/fa-IR",
          2122: "locales/bs-Latn-BA",
          2458: "GalleryPage",
          2484: "ApiPage",
          2757: "locales/nb-NO",
          2772: "locales/mk-MK",
          2842: "locales/bg-BG",
          3248: "locales/da-DK",
          3328: "SharedWheelPage",
          3402: "locales/mn-MN",
          3502: "locales/hi-IN",
          3554: "locales/ta-IN",
          3662: "locales/ms-MY",
          3691: "locales/et-EE",
          3834: "locales/de-DE",
          3898: "locales/el-GR",
          3925: "locales/zh-HK",
          3933: "locales/hy-AM",
          4013: "locales/gu-IN",
          4076: "locales/is-IS",
          4219: "locales/ar-EG",
          4249: "ClassroomPage",
          4380: "locales/ca-ES",
          4616: "MyWheelsPage",
          4688: "locales/lo-LA",
          4772: "locales/es-ES",
          4805: "TranslationPage",
          4839: "locales/sq-AL",
          4853: "locales/fil-PH",
          4893: "locales/kk-KZ",
          5204: "locales/th-TH",
          5367: "locales/cy-GB",
          5454: "PrivacyPolicyPage",
          6129: "EditWheelPage",
          6228: "locales/ml-IN",
          6312: "locales/ka-GE",
          6322: "locales/en-PI",
          6456: "locales/nl-NL",
          6637: "locales/bn-IN",
          7084: "AdminPages",
          7092: "locales/tr-TR",
          7172: "locales/az-Latn-AZ",
          7473: "locales/ko-KR",
          7658: "locales/it-IT",
          7708: "firebase",
          7869: "TutorialsPage",
          7980: "locales/my-MM",
          8020: "locales/so-SO",
          8314: "locales/ro-RO",
          8554: "locales/id-ID",
          8724: "locales/pt-PT",
          9308: "locales/lv-LV",
          9406: "ChangelogPage",
          9514: "locales/hu-HU",
          9694: "locales/sr-Latn-RS",
          9721: "locales/sv-SE",
          9916: "locales/ur-PK"
      }[e] || e) + "-v309.js"
  }
  )(),
  ( () => {
      n.miniCssF = e => "css/" + {
          504: "ExportPage",
          1296: "FaqPage",
          2458: "GalleryPage",
          2484: "ApiPage",
          3328: "SharedWheelPage",
          4249: "ClassroomPage",
          4805: "TranslationPage",
          5454: "PrivacyPolicyPage",
          6129: "EditWheelPage",
          7084: "AdminPages",
          7869: "TutorialsPage",
          9406: "ChangelogPage"
      }[e] + "-v309.css"
  }
  )(),
  ( () => {
      n.g = function() {
          if ("object" === typeof globalThis)
              return globalThis;
          try {
              return this || new Function("return this")()
          } catch (e) {
              if ("object" === typeof window)
                  return window
          }
      }()
  }
  )(),
  ( () => {
      n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
  }
  )(),
  ( () => {
      var e = {}
        , t = "wheel-of-names-quasar:";
      n.l = (a, o, i, s) => {
          if (e[a])
              e[a].push(o);
          else {
              var r, l;
              if (void 0 !== i)
                  for (var c = document.getElementsByTagName("script"), h = 0; h < c.length; h++) {
                      var m = c[h];
                      if (m.getAttribute("src") == a || m.getAttribute("data-webpack") == t + i) {
                          r = m;
                          break
                      }
                  }
              r || (l = !0,
              r = document.createElement("script"),
              r.charset = "utf-8",
              r.timeout = 120,
              n.nc && r.setAttribute("nonce", n.nc),
              r.setAttribute("data-webpack", t + i),
              r.src = a),
              e[a] = [o];
              var u = (t, n) => {
                  r.onerror = r.onload = null,
                  clearTimeout(d);
                  var o = e[a];
                  if (delete e[a],
                  r.parentNode && r.parentNode.removeChild(r),
                  o && o.forEach((e => e(n))),
                  t)
                      return t(n)
              }
                , d = setTimeout(u.bind(null, void 0, {
                  type: "timeout",
                  target: r
              }), 12e4);
              r.onerror = u.bind(null, r.onerror),
              r.onload = u.bind(null, r.onload),
              l && document.head.appendChild(r)
          }
      }
  }
  )(),
  ( () => {
      n.r = e => {
          "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }),
          Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }
  }
  )(),
  ( () => {
      n.p = "/"
  }
  )(),
  ( () => {
      if ("undefined" !== typeof document) {
          var e = (e, t, a, o, i) => {
              var s = document.createElement("link");
              s.rel = "stylesheet",
              s.type = "text/css",
              n.nc && (s.nonce = n.nc);
              var r = n => {
                  if (s.onerror = s.onload = null,
                  "load" === n.type)
                      o();
                  else {
                      var a = n && n.type
                        , r = n && n.target && n.target.href || t
                        , l = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + r + ")");
                      l.name = "ChunkLoadError",
                      l.code = "CSS_CHUNK_LOAD_FAILED",
                      l.type = a,
                      l.request = r,
                      s.parentNode && s.parentNode.removeChild(s),
                      i(l)
                  }
              }
              ;
              return s.onerror = s.onload = r,
              s.href = t,
              a ? a.parentNode.insertBefore(s, a.nextSibling) : document.head.appendChild(s),
              s
          }
            , t = (e, t) => {
              for (var n = document.getElementsByTagName("link"), a = 0; a < n.length; a++) {
                  var o = n[a]
                    , i = o.getAttribute("data-href") || o.getAttribute("href");
                  if ("stylesheet" === o.rel && (i === e || i === t))
                      return o
              }
              var s = document.getElementsByTagName("style");
              for (a = 0; a < s.length; a++) {
                  o = s[a],
                  i = o.getAttribute("data-href");
                  if (i === e || i === t)
                      return o
              }
          }
            , a = a => new Promise(( (o, i) => {
              var s = n.miniCssF(a)
                , r = n.p + s;
              if (t(s, r))
                  return o();
              e(a, r, null, o, i)
          }
          ))
            , o = {
              3524: 0
          };
          n.f.miniCss = (e, t) => {
              var n = {
                  504: 1,
                  1296: 1,
                  2458: 1,
                  2484: 1,
                  3328: 1,
                  4249: 1,
                  4805: 1,
                  5454: 1,
                  6129: 1,
                  7084: 1,
                  7869: 1,
                  9406: 1
              };
              o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = a(e).then(( () => {
                  o[e] = 0
              }
              ), (t => {
                  throw delete o[e],
                  t
              }
              )))
          }
      }
  }
  )(),
  ( () => {
      var e = {
          3524: 0
      };
      n.f.j = (t, a) => {
          var o = n.o(e, t) ? e[t] : void 0;
          if (0 !== o)
              if (o)
                  a.push(o[2]);
              else {
                  var i = new Promise(( (n, a) => o = e[t] = [n, a]));
                  a.push(o[2] = i);
                  var s = n.p + n.u(t)
                    , r = new Error
                    , l = a => {
                      if (n.o(e, t) && (o = e[t],
                      0 !== o && (e[t] = void 0),
                      o)) {
                          var i = a && ("load" === a.type ? "missing" : a.type)
                            , s = a && a.target && a.target.src;
                          r.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")",
                          r.name = "ChunkLoadError",
                          r.type = i,
                          r.request = s,
                          o[1](r)
                      }
                  }
                  ;
                  n.l(s, l, "chunk-" + t, t)
              }
      }
      ,
      n.O.j = t => 0 === e[t];
      var t = (t, a) => {
          var o, i, [s,r,l] = a, c = 0;
          if (s.some((t => 0 !== e[t]))) {
              for (o in r)
                  n.o(r, o) && (n.m[o] = r[o]);
              if (l)
                  var h = l(n)
          }
          for (t && t(a); c < s.length; c++)
              i = s[c],
              n.o(e, i) && e[i] && e[i][0](),
              e[i] = 0;
          return n.O(h)
      }
        , a = globalThis["webpackChunkwheel_of_names_quasar"] = globalThis["webpackChunkwheel_of_names_quasar"] || [];
      a.forEach(t.bind(null, 0)),
      a.push = t.bind(null, a.push.bind(a))
  }
  )();
  var a = n.O(void 0, [4121], ( () => n(2661)));
  a = n.O(a)
}
)();
