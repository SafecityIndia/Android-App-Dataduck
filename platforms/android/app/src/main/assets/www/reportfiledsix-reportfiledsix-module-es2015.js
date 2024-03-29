(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledsix-reportfiledsix-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledsix/reportfiledsix.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledsix/reportfiledsix.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <div class=\"header-background\"></div>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/reportfiledfive' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"newbg\">\n    <div class=\"mainareain\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"newtext\">\n                    <h4>Can you tell us when this happened?<span class=\"red\">*</span></h4>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Select Time</ion-label>\n                                    <div class=\"new\">\n                                        <ion-datetime displayFormat=\"h:mm a\" placeholder=\"Select Time\" [disabled]=\"singleTimeDisable\" (ionChange)=\"getTime($event)\"></ion-datetime>\n                                        <ion-icon name=\"\" class=\"newcal\" slot=\"end\"></ion-icon>\n\n                                    </div>\n\n                                </ion-item>\n                                <ion-item (click)=\"timeClear()\">\n                                    <p class=\"newclear\">Clear Time</p>\n                                </ion-item>\n                                <ion-item class=\"newcheckbox\">\n                                    <ion-label>This is an estimate</ion-label>\n                                    <ion-checkbox [disabled]=\"singleTimeDisable\" slot=\"start\" (ngChange)=\"estimate($event)\"></ion-checkbox>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <div class=\"newadd\">OR</div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-list>\n                                <ion-list-header>\n                                    <ion-label>Select Time Range</ion-label>\n                                </ion-list-header>\n                                <ion-item class=\"timenext\">\n\n                                    <div class=\"new\">\n                                        <ion-datetime displayFormat=\"h:mm a\" placeholder=\"Select Time\" (ionChange)=\"getTimeFrom($event)\"></ion-datetime>\n                                        <ion-icon name=\"\" class=\"newcal\" slot=\"end\"></ion-icon>\n                                    </div>\n                                </ion-item>\n                                <ion-item class=\"newarea\">\n                                    <ion-label position=\"stacked\">to</ion-label>\n                                </ion-item>\n                                <ion-item class=\"timenext\">\n\n                                    <div class=\"new\">\n                                        <ion-datetime displayFormat=\"h:mm a\" placeholder=\"Select Time\" [disabled]=\"timeRangeDisable\" (ionChange)=\"getTimeTo($event)\"></ion-datetime>\n                                        <ion-icon name=\"\" class=\"newcal\" slot=\"end\"></ion-icon>\n                                    </div>\n\n                                </ion-item>\n                                <p class=\"newclear\" (click)=\"timeClear()\">Clear Time Range</p>\n\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n<div class=\"bottom\">\n    <ion-row>\n        <ion-col col-12>\n\n            <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"gotoFieldSeven()\" [disabled]=\"buttonDisabled\">NEXT</ion-button>\n        </ion-col>\n    </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/reportfiledsix/reportfiledsix-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reportfiledsix/reportfiledsix-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReportfiledsixPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledsixPageRoutingModule", function() { return ReportfiledsixPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reportfiledsix_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportfiledsix.page */ "./src/app/reportfiledsix/reportfiledsix.page.ts");




const routes = [
    {
        path: '',
        component: _reportfiledsix_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledsixPage"]
    }
];
let ReportfiledsixPageRoutingModule = class ReportfiledsixPageRoutingModule {
};
ReportfiledsixPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportfiledsixPageRoutingModule);



/***/ }),

/***/ "./src/app/reportfiledsix/reportfiledsix.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reportfiledsix/reportfiledsix.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportfiledsixPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledsixPageModule", function() { return ReportfiledsixPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reportfiledsix_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportfiledsix-routing.module */ "./src/app/reportfiledsix/reportfiledsix-routing.module.ts");
/* harmony import */ var _reportfiledsix_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportfiledsix.page */ "./src/app/reportfiledsix/reportfiledsix.page.ts");







let ReportfiledsixPageModule = class ReportfiledsixPageModule {
};
ReportfiledsixPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reportfiledsix_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledsixPageRoutingModule"]
        ],
        declarations: [_reportfiledsix_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledsixPage"]]
    })
], ReportfiledsixPageModule);



/***/ }),

/***/ "./src/app/reportfiledsix/reportfiledsix.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reportfiledsix/reportfiledsix.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-family: \"Lato\";\n  font-size: 18px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\n.md .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.md in-item {\n  width: 15px;\n  height: 24px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n  margin-bottom: 125px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\n.red {\n  color: #F71313;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-color:transparent;\n}\n\n.newcal {\n  background-image: url(/assets/images/icons/time.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 8PX;\n  background-position: 37%;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\nion-checkbox {\n  --border-radius:0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --size: 19px;\n  --border-color-checked: #ddd;\n  --border-width: 1px;\n  --border-color: #ddd;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newclear {\n  width: 100% !important;\n  float: right !important;\n  text-align: right !important;\n  color: #6A37A5 !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  margin-bottom: 0 !important;\n}\n\nion-img {\n  position: absolute;\n  top: 35px;\n  right: 25px;\n  z-index: 999;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  font-size: 16px;\n  color: #220E0E;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n}\n\nion-item.newcheckbox {\n  border-bottom: none;\n}\n\nion-datetime {\n  padding-left: 10px;\n  --padding-end:0;\n  width: 100%;\n}\n\n.new {\n  border: 1px solid #E1D8EB;\n  background-color: #fff;\n  width: 100%;\n  display: inline-flex;\n}\n\n.item .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.item .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.in-item[slot=start] {\n  -webkit-margin-end: 15px !important;\n          margin-inline-end: 15px !important;\n}\n\n.timenext {\n  width: 45%;\n  float: left;\n}\n\n.newarea {\n  width: 10%;\n  float: left;\n  --min-height:35px;\n  margin-top: 15px;\n}\n\n.newarea .label-stacked {\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: \"Lato\";\n}\n\nion-list-header ion-label {\n  margin-top: 0;\n  font-size: 16px;\n  color: #220E0E;\n  font-weight: 500;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    top: 12%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    top: 12%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZmlsZWRzaXgvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxccmVwb3J0ZmlsZWRzaXhcXHJlcG9ydGZpbGVkc2l4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZmlsZWRzaXgvcmVwb3J0ZmlsZWRzaXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsaUpBQUE7RUFDQSw0SUFBQTtFQUNBLDZJQUFBO0VBQ0EseUlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FBOztBREtBO0VBRUEsd0JBQUE7QUNIQTs7QURNQTtFQUVFLG9DQUFBO0FDSkY7O0FET0E7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNGLCtDQUFBO0VBQ0UsMENBQUE7QUNKSjs7QURPQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQyxtQkFBQTtFQUNELGVBQUE7QUNMQTs7QURRQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFFFO0VBR0Usd0JBQUE7QUNQSjs7QURTQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNMSjs7QURRQTtFQUVBLFdBQUE7RUFDSSxZQUFBO0FDTko7O0FEU0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7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QUQ2Q0M7RUFJRDtJQUVJLFFBQUE7RUMvQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGZpbGVkc2l4L3JlcG9ydGZpbGVkc2l4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdiZ1xyXG57XHJcbi0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG5oZWlnaHQ6MTAwJTtcclxucG9zaXRpb246Zml4ZWQ7XHJcblxyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyXHJcbntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuXHQgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbn1cclxuXHJcbi5uZXdhZGRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbjowcHggYXV0byAwO1xyXG5jb2xvcjojMjkyMDIwO1xyXG4gZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuICBpb24tcmFkaW9cclxuICB7XHJcbiBcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcclxuICB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLm1kIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi5tZCBpbi1pdGVtXHJcbntcclxud2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjglO1xyXG5tYXJnaW4tYm90dG9tOjEyNXB4O1xyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbm1hcmdpbi1ib3R0b206MjhweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0IGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcclxufVxyXG5cclxuLnJlZFxyXG57XHJcbmNvbG9yOiNGNzEzMTM7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjA7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXItdG9wOm5vbmU7XHJcbmJvcmRlci1sZWZ0Om5vbmU7XHJcbmJvcmRlci1yaWdodDpub25lO1xyXG5ib3JkZXItYm90dG9tOm5vbmU7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmV3Y2FsXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGltZS5zdmcpO1xyXG53aWR0aDoyNHB4O1xyXG5oZWlnaHQ6MjRweDtcclxubWFyZ2luLXRvcDo5cHg7XHJcbm1hcmdpbi1yaWdodDogOFBYO1xyXG5cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDM3JTtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG59XHJcblxyXG5pb24tY2hlY2tib3hcclxuICB7XHJcbiAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG4gICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcclxuIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xyXG4gLS1jaGVja21hcmstd2lkdGg6IDI7XHJcbiAgICAgLS1zaXplOiAxOXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcclxuXHQtLWJvcmRlci13aWR0aDogMXB4O1xyXG5cdCAtLWJvcmRlci1jb2xvcjogI2RkZDtcclxuXHQgbWFyZ2luLXRvcDowO1xyXG5cdCBtYXJnaW4tYm90dG9tOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXdjbGVhclxyXG4gIHtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IzZBMzdBNSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6NTAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTowIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWltZ1xyXG4gIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MzVweDtcclxuICByaWdodDoyNXB4O1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtc3RhY2tlZFxyXG4gIHtcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgY29sb3I6IzIyMEUwRTtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWhcclxuICB7XHJcbiAgdHJhbnNmb3JtOmluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLm5ld2NoZWNrYm94XHJcbiAge1xyXG4gIGJvcmRlci1ib3R0b206bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWRhdGV0aW1lXHJcbiAge1xyXG4gIFxyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdC0tcGFkZGluZy1lbmQ6MDtcclxuXHQgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5uZXdcclxuICB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIH1cclxuICBcclxuICBcclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcbiAuaW4taXRlbVtzbG90PVwic3RhcnRcIl1cclxuIHtcclxuIG1hcmdpbi1pbmxpbmUtZW5kOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAudGltZW5leHRcclxuIHtcclxuIHdpZHRoOjQ1JTtcclxuIGZsb2F0OmxlZnQ7XHJcbiBcclxuIH1cclxuLm5ld2FyZWFcclxue1xyXG53aWR0aDoxMCU7XHJcbmZsb2F0OmxlZnQ7XHJcbi0tbWluLWhlaWdodDozNXB4O1xyXG5tYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuXHJcbi5uZXdhcmVhIC5sYWJlbC1zdGFja2Vke1xyXG5tYXJnaW4taW5saW5lLWVuZDogMDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbFxyXG57XHJcbm1hcmdpbi10b3A6MDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluYXJlYWluIHtcclxuICAgIFxyXG4gICAgdG9wOiAxMiU7XHJcbn1cclxuXHJcbiBcclxuIH1cclxuIFxyXG4gQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDo2NDBweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzYwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuLm1haW5hcmVhaW57XHJcbiAgIFxyXG4gICAgdG9wOiAxMiU7XHJcbn1cclxuXHJcbiBcclxuIH1cclxuIiwiLm5ld2JnIHtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbi5uZXdhZGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG8gMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XG59XG5cbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5tZCAucmFkaW8taW5uZXIge1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLm1kIGluLWl0ZW0ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4JTtcbiAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0Y3MTMxMztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5cbi5uZXdjYWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGltZS5zdmcpO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogOFBYO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNyU7XG59XG5cbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcbiAgLS1jaGVja21hcmstd2lkdGg6IDI7XG4gIC0tc2l6ZTogMTlweDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uZXdjbGVhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzZBMzdBNSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzVweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuaW9uLWl0ZW0ubmV3Y2hlY2tib3gge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6MDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmluLWl0ZW1bc2xvdD1zdGFydF0ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udGltZW5leHQge1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm5ld2FyZWEge1xuICB3aWR0aDogMTAlO1xuICBmbG9hdDogbGVmdDtcbiAgLS1taW4taGVpZ2h0OjM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5uZXdhcmVhIC5sYWJlbC1zdGFja2VkIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICB0b3A6IDEyJTtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWFpbiB7XG4gICAgdG9wOiAxMiU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/reportfiledsix/reportfiledsix.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reportfiledsix/reportfiledsix.page.ts ***!
  \*******************************************************/
/*! exports provided: ReportfiledsixPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledsixPage", function() { return ReportfiledsixPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ReportfiledsixPage = class ReportfiledsixPage {
    constructor(navController, router, route) {
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.time = '';
        this.timeFrom = '';
        this.timeTo = '';
        this.timeEstimate = '0';
        this.singleTimeDisable = false;
        this.timeRangeDisable = false;
        this.buttonDisabled = true;
        this.timeArray = [];
        this.route.queryParams.subscribe(params => {
            this.forWho = params["forWho"];
            this.age = params["age"];
            this.pronoun = params["pronoun"];
            this.experience = params["experience"];
            this.date1 = params["date1"];
            this.dateEstimate = params["dateEstimate"];
            console.log("for Who", this.forWho);
            console.log("Age", this.age);
            console.log("pronoun", this.pronoun);
            console.log("experience", this.experience);
            console.log("date1", this.date1);
            console.log("dateEstimate", this.dateEstimate);
        });
    }
    ngOnInit() {
    }
    timeClear() {
        console.log("clear");
        this.ngOnInit();
        // this.navController.navigateRoot(this.navController.().component);
        // this.navController.navigateRoot(`/reportfiledsix`);
    }
    getTime(e) {
        console.log(e);
        this.buttonDisabled = false;
        this.timeRangeDisable = true;
        console.log(e.detail.value);
        this.time = e.detail.value;
        if (this.time.length > 10) {
            this.time = this.time.substring(11, 16);
        }
        console.log(this.time);
    }
    estimate(e) {
        console.log("estimate", e);
        let value = e.detail.checked;
        if (value == true) {
            this.timeEstimate = '1';
        }
        else {
            this.timeEstimate = '0';
        }
        console.log(this.timeEstimate);
    }
    getTimeFrom(e) {
        console.log(e.detail.value);
        this.singleTimeDisable = true;
        this.timeFrom = e.detail.value;
        if (this.timeFrom.length > 10) {
            this.timeFrom = this.timeFrom.substring(11, 16) + '-';
        }
        console.log(this.timeFrom);
    }
    getTimeTo(e) {
        console.log(e.detail.value);
        this.timeTo = e.detail.value;
        this.buttonDisabled = false;
        if (this.timeTo.length > 10) {
            this.timeTo = this.timeTo.substring(11, 16);
        }
        console.log(this.timeTo);
    }
    gotoFieldSeven() {
        // this.timeRange = this.timeFrom + this.timeTo
        if (this.timeFrom != '' && this.timeTo != '') {
            var timeRange = this.timeFrom.concat(this.timeTo.toString());
            console.log("timerange", timeRange);
            localStorage.setItem('timeRange', this.timeRange);
            this.navController.navigateForward(`/reportfiledseven`);
        }
        else {
            localStorage.setItem('time', this.time);
            localStorage.setItem('timeEstimate', this.timeEstimate);
            this.navController.navigateForward(`/reportfiledseven`);
        }
        // console.log(timeRange);
        // this.final_time = this.timeArray.join('-')
        // console.log("after join",this.final_time)
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //               age:this.age,
        //               forWho:this.forWho,
        //               pronoun:this.pronoun,
        //               experience:this.experience,
        //               date1:this.date1,
        //               dateEstimate:this.dateEstimate,
        //               time:this.time,
        //               timeEstimate:this.timeEstimate,
        //         }
        //   };
        // this.navController.navigateForward([`reportfiledseven`],navigationExtras);    
        // this.navController.navigateForward(`/reportfiledseven`);
    }
};
ReportfiledsixPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ReportfiledsixPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reportfiledsix',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reportfiledsix.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledsix/reportfiledsix.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reportfiledsix.page.scss */ "./src/app/reportfiledsix/reportfiledsix.page.scss")).default]
    })
], ReportfiledsixPage);



/***/ })

}]);
//# sourceMappingURL=reportfiledsix-reportfiledsix-module-es2015.js.map