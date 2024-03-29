(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenupopover/countrymenupopover.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenupopover/countrymenupopover.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A doloribus obcaecati repudiandae dignissimos dolore atque ex, dolores veritatis voluptatem quae facilis, debitis quisquam assumenda alias rerum illo. Harum, aut sunt.</h1>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialpop/socialpop.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialpop/socialpop.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-title>\n            Share\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"newsocialin\">\n        <ion-row>\n            <ion-col size=\"4\">\n                <div (click)=\"whatsapp()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialwhat.svg\" />\n                    <p>WhatsApp</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"insta()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialinsat.svg\" />\n                    <p>Instagram</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"facebook()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialimg.svg\" />\n                    <p>Facebook</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"twitter()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialtwitter.svg\" />\n                    <p>Twitter</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"email()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialmail.svg\" />\n                    <p>Mail</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"sms()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialmessage.svg\" />\n                    <p>Message</p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"socialbtnin\">\n        <ion-button (click)=\"pop()\" class=\"socbtn\" fill=\"clear\">Cancel</ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/countrymenupopover/countrymenupopover.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/countrymenupopover/countrymenupopover.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnltZW51cG9wb3Zlci9jb3VudHJ5bWVudXBvcG92ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/countrymenupopover/countrymenupopover.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/countrymenupopover/countrymenupopover.page.ts ***!
  \***************************************************************/
/*! exports provided: CountrymenupopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenupopoverPage", function() { return CountrymenupopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let CountrymenupopoverPage = class CountrymenupopoverPage {
    constructor(navctrl, navParams) {
        this.navctrl = navctrl;
        this.navParams = navParams;
        console.log(this.navctrl);
    }
    ngOnInit() {
        this.country_list = this.navParams.get('country_list');
        console.log(this.country_list);
    }
};
CountrymenupopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
CountrymenupopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countrymenupopover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./countrymenupopover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenupopover/countrymenupopover.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./countrymenupopover.page.scss */ "./src/app/countrymenupopover/countrymenupopover.page.scss")).default]
    })
], CountrymenupopoverPage);



/***/ }),

/***/ "./src/app/socialpop/socialpop.page.scss":
/*!***********************************************!*\
  !*** ./src/app/socialpop/socialpop.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 45px;\n}\n\n.socialimgin {\n  width: 100%;\n  margin: 0 auto 15px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.newsocialin {\n  padding: 0 15px;\n}\n\n.socialimgin p {\n  width: 100%;\n  color: #292020;\n  font-size: 10px;\n  margin: 0;\n}\n\n.socialbtnin {\n  border-top: 1px solid #E1D8EB;\n  width: 100%;\n  margin: 5px auto 0;\n  text-align: center;\n}\n\n.socbtn {\n  color: #592D8D;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: inherit;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\nion-title {\n  color: #292020;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFscG9wL0Q6XFxmaW5hbCBiYWNrdXAgc2FmZWNpdHkvc3JjXFxhcHBcXHNvY2lhbHBvcFxcc29jaWFscG9wLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc29jaWFscG9wL3NvY2lhbHBvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc29jaWFscG9wL3NvY2lhbHBvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uc29jaWFsaW1naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV3c29jaWFsaW4ge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uc29jaWFsaW1naW4gcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc29jaWFsYnRuaW4ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUQ4RUI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG8gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2J0biB7XHJcbiAgICBjb2xvcjogIzU5MkQ4RDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufSIsIi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA0NXB4O1xufVxuXG4uc29jaWFsaW1naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdzb2NpYWxpbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnNvY2lhbGltZ2luIHAge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc29jaWFsYnRuaW4ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRDhFQjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc29jYnRuIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/socialpop/socialpop.page.ts":
/*!*********************************************!*\
  !*** ./src/app/socialpop/socialpop.page.ts ***!
  \*********************************************/
/*! exports provided: SocialpopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialpopPage", function() { return SocialpopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





let SocialpopPage = class SocialpopPage {
    constructor(nav, popoverController, socialSharing, translate) {
        this.nav = nav;
        this.popoverController = popoverController;
        this.socialSharing = socialSharing;
        this.translate = translate;
    }
    ngOnInit() { }
    eventFromPopover() {
        this.popoverController.dismiss('edupala.com');
    }
    email() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaEmail(share_msg + 'webapp.safecity.in', null, null);
        this.pop();
    }
    facebook() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaFacebook(share_msg + 'webapp.safecity.in', null, null);
        this.pop();
    }
    insta() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaInstagram(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    sms() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaSMS(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    twitter() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaTwitter(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    whatsapp() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaWhatsApp(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    pop() {
        this.nav.pop();
    }
};
SocialpopPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
SocialpopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-socialpop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./socialpop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialpop/socialpop.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./socialpop.page.scss */ "./src/app/socialpop/socialpop.page.scss")).default]
    })
], SocialpopPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map