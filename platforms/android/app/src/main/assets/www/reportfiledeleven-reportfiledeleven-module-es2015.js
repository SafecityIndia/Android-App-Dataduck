(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledeleven-reportfiledeleven-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeleven/reportfiledeleven.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeleven/reportfiledeleven.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" translucent>\r\n    <div class=\"header-background\"></div>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref='/reportfiledten' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"newbg\">\r\n    <div class=\"mainareain\">\r\n        <form [formGroup]=\"addressForm\">\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <div class=\"newtext\">\r\n                        <h4>You’re doing great. Just one more step to go!</h4>\r\n                        <h5>Please enter the location where the incident took place<span class=\"red\">*</span></h5>\r\n\r\n                        <ion-list>\r\n\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\">Building, Locality, Street name, Area</ion-label>\r\n                                <ion-input type=\"text\" placeholder=\"Write here\" id=\"autocomplete\" (ionChange)=\"getlatlong()\" formControlName=\"locality\"></ion-input>\r\n                            </ion-item>\r\n\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\">Landmark</ion-label>\r\n                                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{landmark_disable}}\" (ionChange)=\"getlatlong()\" formControlName=\"landmark\"></ion-input>\r\n                            </ion-item>\r\n\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\">Area/Suburb</ion-label>\r\n                                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{area_disable}}\" (ionChange)=\"getlatlong()\" formControlName=\"area\"></ion-input>\r\n                            </ion-item>\r\n\r\n                            <p class=\"error\" *ngIf=\"!addressForm.controls.area.valid  && (addressForm.controls.area.dirty || addressForm.get('area').touched)\">\r\n                                Field is required</p>\r\n\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\">City</ion-label>\r\n                                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{city_disable}}\" (ionChange)=\"getlatlong()\" formControlName=\"city\"></ion-input>\r\n                            </ion-item>\r\n\r\n                            <p class=\"error\" *ngIf=\"!addressForm.controls.city.valid  && (addressForm.controls.city.dirty || addressForm.get('city').touched)\">\r\n                                Field is required</p>\r\n\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\">State</ion-label>\r\n                                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{state_disable}}\" (ionChange)=\"getlatlong()\" formControlName=\"state\"></ion-input>\r\n                            </ion-item>\r\n\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\">Country</ion-label>\r\n                                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{country_disable}}\" (ionChange)=\"getlatlong()\" formControlName=\"country\"></ion-input>\r\n                            </ion-item>\r\n\r\n                            <p class=\"error\" *ngIf=\"!addressForm.controls.country.valid  && (addressForm.controls.country.dirty || addressForm.get('country').touched)\">\r\n                                Field is required</p>\r\n\r\n                        </ion-list>\r\n\r\n                        <p>An exact location will help us identify patterns of violence across the city</p>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <div class=\"bottom\">\r\n                <ion-row>\r\n                    <ion-col col-12>\r\n                        <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"goToFieldTwelve()\" [disabled]=\"!addressForm.valid\">NEXT</ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/reportfiledeleven/reportfiledeleven-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/reportfiledeleven/reportfiledeleven-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReportfiledelevenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledelevenPageRoutingModule", function() { return ReportfiledelevenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportfiledeleven.page */ "./src/app/reportfiledeleven/reportfiledeleven.page.ts");




const routes = [
    {
        path: '',
        component: _reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledelevenPage"]
    }
];
let ReportfiledelevenPageRoutingModule = class ReportfiledelevenPageRoutingModule {
};
ReportfiledelevenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportfiledelevenPageRoutingModule);



/***/ }),

/***/ "./src/app/reportfiledeleven/reportfiledeleven.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/reportfiledeleven/reportfiledeleven.module.ts ***!
  \***************************************************************/
/*! exports provided: ReportfiledelevenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledelevenPageModule", function() { return ReportfiledelevenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reportfiledeleven_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportfiledeleven-routing.module */ "./src/app/reportfiledeleven/reportfiledeleven-routing.module.ts");
/* harmony import */ var _reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportfiledeleven.page */ "./src/app/reportfiledeleven/reportfiledeleven.page.ts");








let ReportfiledelevenPageModule = class ReportfiledelevenPageModule {
};
ReportfiledelevenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reportfiledeleven_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledelevenPageRoutingModule"]
        ],
        declarations: [_reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledelevenPage"]]
    })
], ReportfiledelevenPageModule);



/***/ }),

/***/ "./src/app/reportfiledeleven/reportfiledeleven.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/reportfiledeleven/reportfiledeleven.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#locationField,\n#controls {\n  position: relative;\n  width: 480px;\n}\n\n#autocomplete {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 99%;\n}\n\n.label {\n  text-align: right;\n  font-weight: bold;\n  width: 100px;\n  color: #303030;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n}\n\n#address {\n  border: 1px solid #000090;\n  background-color: #f0f9ff;\n  width: 480px;\n  padding-right: 2px;\n}\n\n#address td {\n  font-size: 10pt;\n}\n\n.field {\n  width: 99%;\n}\n\n.slimField {\n  width: 80px;\n}\n\n.wideField {\n  width: 200px;\n}\n\n#locationField {\n  height: 20px;\n  margin-bottom: 2px;\n}\n\n.newbg {\n  --background: -moz-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(239,253,255,1)), color-stop(42%, rgba(239,253,255,1)), color-stop(64%, rgba(244,232,253,1)), color-stop(100%, rgba(238,221,252,1)));\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.error {\n  font-size: 0.8em;\n  color: red !important;\n  margin-bottom: 15px !important;\n  margin-top: 6px !important;\n}\n\n.newtext ion-label {\n  white-space: inherit;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: #592D8D;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 60px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 125px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0 0;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZmlsZWRlbGV2ZW4vRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxccmVwb3J0ZmlsZWRlbGV2ZW5cXHJlcG9ydGZpbGVkZWxldmVuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZmlsZWRlbGV2ZW4vcmVwb3J0ZmlsZWRlbGV2ZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURJQTtFQUVBLDhJQUFBO0VBQ0EsOE1BQUE7RUFDQSxpSkFBQTtFQUNBLDRJQUFBO0VBQ0EsNklBQUE7RUFDQSx5SUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkE7O0FES0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0YsOEJBQUE7RUFDRCwwQkFBQTtBQ0ZEOztBREtBO0VBRUEsb0JBQUE7QUNIQTs7QURNQTtFQUVBLHdCQUFBO0FDSkE7O0FET0E7RUFFRSxvQ0FBQTtBQ0xGOztBRFFBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURTQTtFQUVBLCtCQUFBO0FDUEE7O0FEVUE7RUFFRSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0EsY0FBQTtBQ1JBOztBRFdBO0VBQ0EsZ0JBQUE7QUNSQTs7QURXRTtFQUdFLHdCQUFBO0FDVko7O0FEWUE7RUFDSSx3QkFBQTtFQUNILFVBQUE7RUFDRyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNSSjs7QURZQTtFQUVBLGdCQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNaQTs7QURlQTtFQUVBLGNBQUE7QUNiQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNkQTs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2ZBOztBRGtCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDaEJBOztBRG1CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDakJBOztBRG9CQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQ2pCSjs7QURtQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJBOztBRG9CQTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0YsK0NBQUE7RUFDRSwwQ0FBQTtBQ2pCSjs7QURtQkE7RUFFQSx1QkFBQTtBQ2pCQTs7QURvQkE7RUFFQSxpRUFBQTtVQUFBLGdFQUFBO0FDbEJBOztBRHFCQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLHNCQUFBO0VBQ0Qsd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0FDbkJBOztBRHVCQTtFQUNDLHNCQUFBO0FDcEJEOztBRHVCQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNyQkE7O0FEd0JBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3RCQTs7QUR5QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDdkJBIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0ZmlsZWRlbGV2ZW4vcmVwb3J0ZmlsZWRlbGV2ZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvY2F0aW9uRmllbGQsXHJcbiNjb250cm9scyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0ODBweDtcclxufVxyXG5cclxuI2F1dG9jb21wbGV0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogOTklO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBjb2xvcjogIzMwMzAzMDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2FkZHJlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwOTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjlmZjtcclxuICB3aWR0aDogNDgwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG59XHJcblxyXG4jYWRkcmVzcyB0ZCB7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbi5zbGltRmllbGQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ud2lkZUZpZWxkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbiNsb2NhdGlvbkZpZWxkIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdiZ1xyXG57XHJcbi0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpKSwgY29sb3Itc3RvcCg0MiUsIHJnYmEoMjM5LDI1MywyNTUsMSkpLCBjb2xvci1zdG9wKDY0JSwgcmdiYSgyNDQsMjMyLDI1MywxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMzgsMjIxLDI1MiwxKSkpO1xyXG4tLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuaGVpZ2h0OjEwMCU7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5cclxufVxyXG4uZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuIFx0bWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi10b3A6NnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhclxyXG57XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxufVxyXG5cclxuLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkXHJcbntcclxuLS1oaWdobGlnaHQtYmFja2dyb3VuZDogIzU5MkQ4RDtcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWhcclxuICB7XHJcbiAgdHJhbnNmb3JtOmluaGVyaXQ7XHJcbiAgfVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuIFxyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xyXG4gIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50OmluaGVyaXQ7XHJcbn1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDo2MHB4O1xyXG59XHJcblxyXG4ucmVkXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxufVxyXG5cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbm1hcmdpbi1ib3R0b206IDEyNXB4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoxOXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5jb2xvcjojNTkyRDhEO1xyXG5saW5lLWhlaWdodDoyOHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjJweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MThweDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcblx0IC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG59XHJcbmlvbi1saXN0XHJcbntcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciBcclxue1xyXG5wYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xyXG59XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDowO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6bm9uZTtcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcblxyXG59XHJcblxyXG5pb24taXRlbSAuaXRlbS1pbm5lcntcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmhlaWdodDo0MHB4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtc3RhY2tlZFxyXG57XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxufVxyXG5cclxuXHJcbiIsIiNsb2NhdGlvbkZpZWxkLFxuI2NvbnRyb2xzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDgwcHg7XG59XG5cbiNhdXRvY29tcGxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbi5sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNhZGRyZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDA5MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjlmZjtcbiAgd2lkdGg6IDQ4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbiNhZGRyZXNzIHRkIHtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uZmllbGQge1xuICB3aWR0aDogOTklO1xufVxuXG4uc2xpbUZpZWxkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi53aWRlRmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbiNsb2NhdGlvbkZpZWxkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5uZXdiZyB7XG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpKSwgY29sb3Itc3RvcCg0MiUsIHJnYmEoMjM5LDI1MywyNTUsMSkpLCBjb2xvci1zdG9wKDY0JSwgcmdiYSgyNDQsMjMyLDI1MywxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMzgsMjIxLDI1MiwxKSkpO1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogIzU5MkQ4RDtcbn1cblxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XG59XG5cbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IGluaGVyaXQ7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRjcxMzEzO1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubmV3dGV4dCBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYmFja2dyb3VuZCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG5cbmlvbi1pdGVtIC5pdGVtLWlubmVyIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/reportfiledeleven/reportfiledeleven.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/reportfiledeleven/reportfiledeleven.page.ts ***!
  \*************************************************************/
/*! exports provided: ReportfiledelevenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledelevenPage", function() { return ReportfiledelevenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let ReportfiledelevenPage = class ReportfiledelevenPage {
    constructor(navController, router, route, formBuilder) {
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.autoaddress = [];
        this.autoadd1 = [];
        this.locality_disable = false;
        this.landmark_disable = false;
        this.city_disable = false;
        this.state_disable = false;
        this.country_disable = false;
        this.area_disable = false;
        this.addressForm = this.formBuilder.group({
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            locality: '',
            landmark: '',
            state: ''
        });
        //   this.route.queryParams.subscribe(params => {
        //     this.forWho = params["forWho"];
        //     this.age = params["age"];
        //     this.pronoun = params["pronoun"];
        //     this.experience = params["experience"];
        //     this.date1 = params["date1"];
        //     this.dateEstimate = params["dateEstimate"];
        //     this.time = params["time"];
        //     this.timeEstimate = params["timeEstimate"];
        //     this.timeRange = params["timeRange"];
        //     this.violenceType = params["violenceType"];
        //     this.anythingElse = params["anythingElse"];
        //     this.policeRepo =params["policeRepo"];
        //     this.led =params["led"];
        //     console.log("for Who",this.forWho);
        //     console.log("Age",this.age);
        //     console.log("pronoun",this.pronoun);
        //     console.log("experience",this.experience);
        //     console.log("date1",this.date1);
        //     console.log("time",this.time);
        //     console.log("dateEstimate",this.dateEstimate);
        //     console.log("timeEstimate",this.timeEstimate);
        //     console.log("timeRange",this.timeRange);
        //     console.log("violenceType",this.violenceType);
        //  })
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.initAutocomplete();
    }
    //autocomplete code
    initAutocomplete() {
        // Create the autocomplete object, restricting the search predictions to
        // geographical location types.
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete').getElementsByTagName('input')[0], { types: ["geocode"], componentRestrictions: { country: 'in' } });
        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components.
        this.autocomplete.setFields(["address_component"]);
        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        this.autocomplete.addListener("place_changed", fillInAddress => {
            console.log(this.addressForm.value.locality);
            var autoadd = this.autocomplete.getPlace();
            this.autoadd1 = autoadd.address_components;
            console.log(this.autoadd1);
            for (var i = 0; i < this.autoadd1.length; i++) {
                //this.autoaddress.push(this.autoadd1[i].long_name)
                if (this.autoadd1[i].types[0] == 'country') {
                    this.addressForm.controls['country'].setValue(this.autoadd1[i].long_name);
                    this.country_disable = true;
                }
                else if (this.autoadd1[i].types[0] == 'locality') {
                    this.addressForm.controls['city'].setValue(this.autoadd1[i].long_name);
                    this.city_disable = true;
                }
                else if (this.autoadd1[i].types[0] == 'administrative_area_level_1') {
                    this.addressForm.controls['state'].setValue(this.autoadd1[i].long_name);
                    this.state_disable = true;
                }
                else if (this.autoadd1[i].types[0] == 'sublocality_level_1') {
                    this.addressForm.controls['locality'].setValue(this.autoadd1[i].long_name);
                    this.locality_disable = true;
                }
                else if (this.autoadd1[i].types[0] == 'sublocality_level_2') {
                    this.addressForm.controls['landmark'].setValue(this.autoadd1[i].long_name);
                    this.landmark_disable = true;
                }
                else if (this.autoadd1[i].types[0] == 'postal_code') {
                    this.addressForm.controls['area'].setValue(this.autoadd1[i].long_name);
                    this.area_disable = true;
                }
            }
            // this.autoaddress = autoadd.long_name.join(',')
            //  console.log(this.autoaddress)
            //  var final_result = this.autoaddress.join(',')
            //   console.log(final_result)
            //   console.log(this.autoaddress)
        });
    }
    goToFieldTwelve() {
        this.lat1 = localStorage.getItem('lat_report');
        this.longi1 = localStorage.getItem('longi_report');
        this.address1 = localStorage.getItem('address_report');
        let navigationExtras = {
            state: {
                area: this.addressForm.value.area,
                locality: this.addressForm.value.locality,
                landmark: this.addressForm.value.landmark,
                city: this.addressForm.value.city,
                state: this.addressForm.value.state,
                country: this.addressForm.value.country,
                lat: this.lat1,
                longi: this.longi1,
                address: this.address1
            }
        };
        this.router.navigate(['/reportfiledtwelve'], navigationExtras);
    }
    getlatlong() {
        localStorage.setItem('area', this.addressForm.value.area);
        localStorage.setItem('city', this.addressForm.value.city);
        localStorage.setItem('country', this.addressForm.value.country);
        localStorage.setItem('locality', this.addressForm.value.locality);
        localStorage.setItem('landmark', this.addressForm.value.landmark);
        localStorage.setItem('state', this.addressForm.value.state);
        // console.log(this.locality);  
        // console.log(this.landmark);
        // console.log(this.city);
        // console.log(this.state);
        // console.log(this.country);
        this.address2 = this.addressForm.value.area + ',' + this.addressForm.value.locality + ',' + this.addressForm.value.landmark + ',' + this.addressForm.value.city + ',' + this.addressForm.value.state + ',' + this.addressForm.value.country;
        console.log(this.address);
        var geocoder = new google.maps.Geocoder();
        var city, hascity, address = this.address2;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results);
                this.address = JSON.stringify(results[0].formatted_address);
                this.lat = JSON.stringify(results[0].geometry.location.lat());
                this.longi = JSON.stringify(results[0].geometry.location.lng());
                //this.locations = new google.maps.LatLng(this.lat, this.longi);
                console.log(this.lat);
                console.log(this.longi);
                console.log(this.address);
                localStorage.setItem('lat_report', this.lat);
                localStorage.setItem('longi_report', this.longi);
                localStorage.setItem('address_report', this.address);
            }
        });
        // this.navController.navigateForward(`/reportfiledten`);
    }
};
ReportfiledelevenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ReportfiledelevenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reportfiledeleven',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reportfiledeleven.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeleven/reportfiledeleven.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reportfiledeleven.page.scss */ "./src/app/reportfiledeleven/reportfiledeleven.page.scss")).default]
    })
], ReportfiledelevenPage);



/***/ })

}]);
//# sourceMappingURL=reportfiledeleven-reportfiledeleven-module-es2015.js.map