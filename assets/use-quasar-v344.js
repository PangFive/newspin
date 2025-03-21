import {L as s, ai as a, H as t, aj as i} from "./index-v344.js";
const n = s("preferences", {
    state: () => ({
        // edit
        version: 345,
        appInfoVisible: !0,
        darkMode: "auto",
        latestSeenVersion: 0,
        userHasSeenCurrentVersion: !1,
        seenUkraineBanner: !1,
        wheelLocation: "cloud",
        showWheelOverlay: !0
    }),
    actions: {
        setDurablePrefs(e) {
            "appInfoVisible"in e && (this.appInfoVisible = e.appInfoVisible),
            "darkMode"in e && (this.darkMode = e.darkMode),
            "latestSeenVersion"in e && (this.latestSeenVersion = e.latestSeenVersion),
            "seenUkraineBanner"in e && (this.seenUkraineBanner = e.seenUkraineBanner),
            "wheelLocation"in e && (this.wheelLocation = e.wheelLocation),
            "showWheelOverlay"in e && (this.showWheelOverlay = e.showWheelOverlay),
            this.savePrefsToLocalStorage()
        },
        setLatestSeenVersion(e) {
            this.latestSeenVersion = e,
            this.savePrefsToLocalStorage()
        },
        setUserHasSeenCurrentVersion(e) {
            this.userHasSeenCurrentVersion = e
        },
        toggleAppInfoVisibility() {
            this.appInfoVisible = !this.appInfoVisible,
            this.savePrefsToLocalStorage()
        },
        setDarkMode(e) {
            this.darkMode = e,
            a.set(e),
            this.savePrefsToLocalStorage()
        },
        setSeenUkraineBanner() {
            this.seenUkraineBanner = !0,
            this.savePrefsToLocalStorage()
        },
        setWheelLocation(e) {
            this.wheelLocation = e,
            this.savePrefsToLocalStorage()
        },
        switchWheelLocation() {
            this.wheelLocation = this.wheelLocation === "cloud" ? "local" : "cloud"
        },
        setShowWheelOverlay(e) {
            this.showWheelOverlay = e,
            this.savePrefsToLocalStorage()
        },
        loadPreferences() {
            try {
                const e = JSON.parse(localStorage.getItem("Preferences") || "{}");
                this.setUserHasSeenCurrentVersion(this.version <= e.latestSeenVersion),
                this.setDurablePrefs(e)
            } catch {}
            this.setLatestSeenVersion(this.version)
        },
        savePrefsToLocalStorage() {
            localStorage.setItem("Preferences", JSON.stringify({
                appInfoVisible: this.appInfoVisible,
                darkMode: this.darkMode,
                latestSeenVersion: this.latestSeenVersion,
                seenUkraineBanner: this.seenUkraineBanner,
                wheelLocation: this.wheelLocation,
                showWheelOverlay: this.showWheelOverlay
            }))
        }
    }
});
function r() {
    return t(i)
}
export {r as a, n as u};
