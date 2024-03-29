(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preframingtwo-preframingtwo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingtwo/preframingtwo.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preframingtwo/preframingtwo.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"mainframing\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <!-- <div class=\"newframing dynamic-success-link1\" > -->\n                <div class=\"newframing \">\n                    <!-- <p>We understand it is difficult to recall one’s traumatic experiences. If you feel uncomfortable at any time, know that you can exit. If you have not hit the submit button, your data will not be saved.<br><br> Even though you are sharing your experience anonymously, we need your consent to include your experience in our database of crowdsourced data.</p>\n<ion-list>\n<p *ngIf= \"error\" class=\"red\">Please check this box to proceed</p>\n \n<ion-item >\n    <ion-label>I Consent \n</ion-label>\n\t     <ion-checkbox  slot=\"start\" (ionChange)=\"ButtonEnableDisable($event)\"></ion-checkbox>\n  </ion-item>\n  \n</ion-list>\n<h5 (click)=\"policy()\">View Privacy Policy </h5>\n</div>\n<div class=\"bottomframing\">\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtnframing\" [disabled]=\"buttonDisabled\" (click)= \"addReport1()\">START</ion-button> -->\n                    <div class=\"topbordingin dynamic-success-link1\">\n\n                    </div>\n                    <!-- <div *ngIf=\"hide_for_jordan\"> -->\n                    <ion-list *ngIf=\"hide\">\n                        <p *ngIf=\"error\" class=\"red\">{{'consent_error' | translate}}</p>\n\n                        <ion-item>\n                            <ion-label>{{'i_consent' | translate}}\n                            </ion-label>\n                            <ion-checkbox class=\"newcheckbottomin\" slot=\"start\" (ionChange)=\"ButtonEnableDisable($event)\">\n                            </ion-checkbox>\n                        </ion-item>\n\n                    </ion-list>\n                    <!-- </div> -->\n                    <!-- <div *ngIf=\"hide_for_jordan\"> -->\n                    <h5 (click)=\"policy()\" *ngIf=\"hide\">{{'view_privacy_policy' | translate}}</h5>\n                    <!-- <h5 (click)=\"policy()\" *ngIf=\"hide_for_jordan_p\">{{'view_privacyprotection_policy' | translate}}</h5> -->\n                    <!-- </div> -->\n\n                </div>\n\n            </ion-col>\n        </ion-row>\n\n        <!-- <div *ngIf=\"hide_for_jordan\"> -->\n        <div class=\"bottomframing\" *ngIf=\"hide\">\n            <ion-button expand=\"full\" shape=\"round\" class=\"newbtnframing\" [disabled]=\"buttonDisabled\" (click)=\"addReport1()\">\n                {{'Start' | translate}}</ion-button>\n        </div>\n        <!-- </div> -->\n\n        <div class=\"bottomframing\" *ngIf=\"hide_for_jordan\">\n            <ion-button expand=\"full\" shape=\"round\" class=\"newbtnframing\" (click)=\"experiance()\">\n                {{'next' | translate}}</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/preframingtwo/preframingtwo-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/preframingtwo/preframingtwo-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PreframingtwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreframingtwoPageRoutingModule", function() { return PreframingtwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _preframingtwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preframingtwo.page */ "./src/app/preframingtwo/preframingtwo.page.ts");




const routes = [
    {
        path: '',
        component: _preframingtwo_page__WEBPACK_IMPORTED_MODULE_3__["PreframingtwoPage"]
    }
];
let PreframingtwoPageRoutingModule = class PreframingtwoPageRoutingModule {
};
PreframingtwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreframingtwoPageRoutingModule);



/***/ }),

/***/ "./src/app/preframingtwo/preframingtwo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/preframingtwo/preframingtwo.module.ts ***!
  \*******************************************************/
/*! exports provided: PreframingtwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreframingtwoPageModule", function() { return PreframingtwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _preframingtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preframingtwo-routing.module */ "./src/app/preframingtwo/preframingtwo-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _preframingtwo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preframingtwo.page */ "./src/app/preframingtwo/preframingtwo.page.ts");








let PreframingtwoPageModule = class PreframingtwoPageModule {
};
PreframingtwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _preframingtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreframingtwoPageRoutingModule"]
        ],
        declarations: [_preframingtwo_page__WEBPACK_IMPORTED_MODULE_7__["PreframingtwoPage"]]
    })
], PreframingtwoPageModule);



/***/ }),

/***/ "./src/app/preframingtwo/preframingtwo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/preframingtwo/preframingtwo.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 196px;\n  padding: 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.mainframing {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 20px;\n}\n\n.newframing h5 {\n  width: 100%;\n  height: auto;\n  line-height: 25px;\n  font-size: 20px;\n  text-align: center;\n  margin: 22px auto 0;\n  color: #592D8D;\n  margin-bottom: 50px;\n  font-size: 15px;\n  text-decoration: underline;\n  margin-top: 0;\n}\n\n.newframing {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.checkbox-icon {\n  --border-radius: none;\n}\n\n.custom-control-input:checked ~ .label1::before {\n  color: #220E0E !important;\n  border-color: #E1D8EB;\n  background: #fff;\n}\n\n.inputGroup input:checked ~ label:after {\n  width: 25px;\n  height: 26px;\n  content: \"\";\n  background: url(/assets/images/icons/tick.svg);\n  background-repeat: no-repeat;\n  background-position: 5px 8px;\n  z-index: 2;\n  position: relative;\n  float: right;\n  margin-top: -5px;\n  background-size: 19px;\n}\n\n.inputGroup input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n\n.custom-checkbox {\n  display: block;\n  position: relative;\n  padding-left: 35px !important;\n  margin-bottom: 12px;\n  cursor: pointer;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  font-size: 16px !important;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  margin-top: 8px !important;\n}\n\n/* Hide the browser's default checkbox */\n\n.custom-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.custom-checkbox:hover input ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.custom-checkbox input:checked ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.custom-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.custom-checkbox .checkmark:after {\n  left: 7px;\n  top: 2px;\n  width: 4px;\n  height: 9px;\n  border: solid #2ED35A;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.newbtnframing {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #572691;\n  --background-activated: #572691;\n  --background-focused: #572691;\n  --background-hover: #572691;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 40px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow: 0;\n  text-align: center;\n}\n\n.bottomframing {\n  width: 80%;\n  margin: 50px auto 150px;\n  text-align: center;\n}\n\n.newframing ion-item {\n  --padding-start: 0;\n  margin-bottom: 20px;\n  --inner-border-width: 0 0 0px 0;\n  border: none !important;\n}\n\n.newframing .red {\n  color: #BA0B0B;\n  font-size: 13px !important;\n  margin-bottom: 0 !important;\n}\n\n.newframing.item .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.newframing.item .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.newframing.in-item[slot=start] {\n  -webkit-margin-end: 15px !important;\n          margin-inline-end: 15px !important;\n}\n\n.newcheckbottomin {\n  --border-radius: 0 !important;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainframing {\n    bottom: inherit;\n    top: 5px;\n    margin-bottom: 25px;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainframing {\n    bottom: inherit;\n    top: 5px;\n    margin-bottom: 25px;\n  }\n}\n\n@media all and (max-width: 550px) and (min-width: 320px) {\n  .md .mainframing {\n    top: 11%;\n    bottom: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZnJhbWluZ3R3by9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxwcmVmcmFtaW5ndHdvXFxwcmVmcmFtaW5ndHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlZnJhbWluZ3R3by9wcmVmcmFtaW5ndHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FERUE7RUFHSSw4Q0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFFSSxtREFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURHQSx3Q0FBQTs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0RKOztBREtBLDZCQUFBOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0hKOztBRE9BLHdEQUFBOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0xKOztBRFNBLDZEQUFBOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1BKOztBRFdBLG9DQUFBOztBQUVBO0VBQ0ksY0FBQTtBQ1RKOztBRFlBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ1RKOztBRFlBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUNUSjs7QURZQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDVEo7O0FEWUE7RUFDSSxlQUFBO0FDVEo7O0FEWUE7RUFDSSxlQUFBO0FDVEo7O0FEWUE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDVEo7O0FEWUE7RUFDSSw2QkFBQTtBQ1RKOztBRFlBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0VDVE47QUFDRjs7QURZQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtFQ1ZOO0FBQ0Y7O0FEYUE7RUFDSTtJQUNJLFFBQUE7SUFDQSxlQUFBO0VDWE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByZWZyYW1pbmd0d28vcHJlZnJhbWluZ3R3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuLmJhY2tidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLm1haW5hcmVhaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE5NnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5tYWluZnJhbWluZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5ld2ZyYW1pbmcgaDUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjJweCBhdXRvIDA7XHJcbiAgICBjb2xvcjogIzU5MkQ4RDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5uZXdmcmFtaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMjIwRTBFO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmNoZWNrYm94LWljb24ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4ubGFiZWwxOjpiZWZvcmUge1xyXG4gICAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI0UxRDhFQjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5pbnB1dEdyb3VwIGlucHV0OmNoZWNrZWR+bGFiZWw6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy90aWNrLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDhweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkfmxhYmVsOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogOXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMkVEMzVBO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLm5ld2J0bmZyYW1pbmcge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTcyNjkxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU3MjY5MTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTcyNjkxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTcyNjkxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC0tYm94LXNoYWRvdzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbWZyYW1pbmcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvIDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3ZnJhbWluZyBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3ZnJhbWluZyAucmVkIHtcclxuICAgIGNvbG9yOiAjQkEwQjBCO1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdmcmFtaW5nLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5uZXdmcmFtaW5nLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm5ld2ZyYW1pbmcuaW4taXRlbVtzbG90PVwic3RhcnRcIl0ge1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld2NoZWNrYm90dG9taW4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAgIC5tYWluZnJhbWluZyB7XHJcbiAgICAgICAgYm90dG9tOiBpbmhlcml0O1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6NjQwcHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAgIC5tYWluZnJhbWluZyB7XHJcbiAgICAgICAgYm90dG9tOiBpbmhlcml0O1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAgIC5tZCAubWFpbmZyYW1pbmcge1xyXG4gICAgICAgIHRvcDogMTElO1xyXG4gICAgICAgIGJvdHRvbTogaW5oZXJpdDtcclxuICAgIH1cclxufSIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTk2cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDogNzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDc1cHg7XG59XG5cbi5tYWluZnJhbWluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xufVxuXG4ubmV3ZnJhbWluZyBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMnB4IGF1dG8gMDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdmcmFtaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNoZWNrYm94LWljb24ge1xuICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmxhYmVsMTo6YmVmb3JlIHtcbiAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRTFEOEVCO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGljay5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggOHB4O1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOXB4O1xufVxuXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmN1c3RvbS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbi5jdXN0b20tY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5jdXN0b20tY2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cbi5jdXN0b20tY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogN3B4O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlcjogc29saWQgIzJFRDM1QTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4ubmV3YnRuZnJhbWluZyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTcyNjkxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTcyNjkxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU3MjY5MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTcyNjkxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3R0b21mcmFtaW5nIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2ZyYW1pbmcgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV3ZnJhbWluZyAucmVkIHtcbiAgY29sb3I6ICNCQTBCMEI7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdmcmFtaW5nLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ld2ZyYW1pbmcuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uZXdmcmFtaW5nLmluLWl0ZW1bc2xvdD1zdGFydF0ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubmV3Y2hlY2tib3R0b21pbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluZnJhbWluZyB7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICAgIHRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5mcmFtaW5nIHtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTUwcHgpIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAubWQgLm1haW5mcmFtaW5nIHtcbiAgICB0b3A6IDExJTtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/preframingtwo/preframingtwo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/preframingtwo/preframingtwo.page.ts ***!
  \*****************************************************/
/*! exports provided: PreframingtwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreframingtwoPage", function() { return PreframingtwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








let PreframingtwoPage = class PreframingtwoPage {
    constructor(navController, translate, sharedservice, sanitizer, router) {
        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.sanitizer = sanitizer;
        this.router = router;
        this.buttonDisabled = true;
        this.error = false;
        this.hide = false;
        this.hide_for_jordan = false;
        this.hide_for_jordan_p = false;
        var self = this;
        //this.isEstimate = false
        let data = new FormData();
        data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        if (localStorage.getItem('Country_id') == '111') {
            data.append('type', 'welcome');
            this.hide_for_jordan = true;
            this.hide = false;
        }
        else {
            data.append('type', 'consent');
            this.hide_for_jordan = false;
            this.hide = true;
        }
        data.append('content_for', 'mobile');
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe((rdata) => {
            console.log(rdata);
            this.data = rdata['data'];
            this.sharedservice.loaderDismiss();
            console.log(this.data);
            this.content = this.data[0].content;
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-success-link1").html(this.content);
            jquery__WEBPACK_IMPORTED_MODULE_7__(".checkerrors").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").click(function (event) {
                event.preventDefault();
                self.addReport1();
                console.log('next');
            });
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-privacy").click(function (event) {
                event.preventDefault();
                console.log('privacy');
                self.policy();
            });
            jquery__WEBPACK_IMPORTED_MODULE_7__("#estimate").click(function (event) {
                // event.preventDefault();
                //console.log($("input[name='hidechecked]").is(':checked'))
                // var isEstimate = $(this).is(":checked");
                if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).is(":checked")) {
                    console.log("Checkbox is checked.");
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").removeAttr("disabled");
                    // $(".checkerrors").hide()
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).is(":not(:checked)")) {
                    console.log("Checkbox is unchecked.");
                    //$(".checkerrors").show();
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").attr("disabled", "disabled");
                }
                // console.log(isEstimate)
                console.log('next', event);
            });
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            console.log('complete');
            this.sharedservice.loaderDismiss();
        });
    }
    ngOnInit() {
    }
    // ***********************************Button unable disable***********************************
    ButtonEnableDisable(e) {
        // console.log(e.detail.checked);
        if (e.detail.checked == true) {
            // console.log("in")
            this.buttonDisabled = false;
            this.error = false;
        }
        else {
            this.buttonDisabled = true;
            this.error = true;
        }
    }
    experiance() {
        var self = this;
        //this.isEstimate = false
        let data = new FormData();
        data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        if (localStorage.getItem('Country_id') == '111') {
            data.append('type', 'experience');
            this.hide_for_jordan = false;
            this.hide_for_jordan_p = true;
            this.hide = true;
            console.log(this.hide, this.hide_for_jordan, this.hide_for_jordan_p);
        }
        else {
            data.append('type', 'consent');
            this.hide = true;
        }
        data.append('content_for', 'mobile');
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe((rdata) => {
            console.log(rdata);
            this.data = rdata['data'];
            this.sharedservice.loaderDismiss();
            console.log(this.data);
            this.content = this.data[0].content;
            this.hide = true;
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-success-link1").html(this.content);
            jquery__WEBPACK_IMPORTED_MODULE_7__(".checkerrors").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").click(function (event) {
                event.preventDefault();
                self.addReport1();
                console.log('next');
            });
            jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-privacy").click(function (event) {
                event.preventDefault();
                console.log('privacy');
                self.policy();
            });
            jquery__WEBPACK_IMPORTED_MODULE_7__("#estimate").click(function (event) {
                // event.preventDefault();
                //console.log($("input[name='hidechecked]").is(':checked'))
                // var isEstimate = $(this).is(":checked");
                if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).is(":checked")) {
                    console.log("Checkbox is checked.");
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").removeAttr("disabled");
                    // $(".checkerrors").hide()
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).is(":not(:checked)")) {
                    console.log("Checkbox is unchecked.");
                    //$(".checkerrors").show();
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".dynamic-click").attr("disabled", "disabled");
                }
                // console.log(isEstimate)
                console.log('next', event);
            });
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            console.log('complete');
            this.sharedservice.loaderDismiss();
        });
    }
    addReport1() {
        this.navController.navigateForward(`primaryform`);
    }
    policy() {
        this.navController.navigateForward(`privacypolicy`);
    }
};
PreframingtwoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PreframingtwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preframingtwo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./preframingtwo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingtwo/preframingtwo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./preframingtwo.page.scss */ "./src/app/preframingtwo/preframingtwo.page.scss")).default]
    })
], PreframingtwoPage);



/***/ })

}]);
//# sourceMappingURL=preframingtwo-preframingtwo-module-es2015.js.map