(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["primaryform-primaryform-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/primaryform/primaryform.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/primaryform/primaryform.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"hide_question\" class=\"ion-no-border newheader\">\n    <div class=\"header-background\"></div>\n    <ion-toolbar class=\"newtoolbar\">\n        <ion-buttons slot=\"start\" icon=\"undefined\" text=\"\" (click)=\"back()\" class=\"backbutton\" id=\"dynamicBack\">\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-header *ngIf=\"hide_thankyou\" class=\"ion-no-border thankuheadinnn\">\n    <ion-toolbar class=\"newtoolbar\">\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"newbg\">\n\n    <div class=\"mainform\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"formarea questionaire\">\n                    <form>\n\n                        <ul class=\"progress-form\">\n\n                            <div class=\"Step1\">\n                                <!-- <a id=\"dynamicBack\" href=\"javascript:void(0);\" class=\"pull-left animated fadeInUp show_one\"><img src=\"assets/images/icon-feather-arrow-left.svg\" class=\"img-fluid leftIcon\"></a> -->\n\n                                <!-- Dynamic questions start -->\n                                <li class=\"form-group animated fadeInUp activate selected singleColumn\" data-color=\"#7C6992\" data-percentage=\"100%\">\n                                    <label class=\"newview\">\n                    <span class=\"newquestion\" id=\"question_span\">\n                      <!-- Placeholder for dynamic questions --></span><span class=\"error red\">*</span><br>\n                    <span class=\"themeColor newspan\" id=\"subtext_span\">\n                      <!-- Placeholder for dynamic sub text --></span>\n                  </label>\n\n                                    <div id=\"options\">\n                                        <!-- Placeholder for dynamic options -->\n                                    </div>\n\n                                    <span class=\"sharingForInfo\"></span>\n                                </li>\n                                <!-- Dynamic questions end -->\n\n                            </div>\n\n                        </ul>\n\n                    </form>\n\n                    <!-- <button  (click)=\"next()\" class=\"btn btn-primary nxt_btn animated nextPage fadeInUp pull-right mt-4\">Next <span class=\"glyphicon glyphicon-chevron-down\"></span></button>                 -->\n\n                </div>\n                <!-- //questionaire -->\n\n\n                <!-- thank you section start -->\n                <div class=\"thankyou-section\" style=\"display:none\">\n\n                    <div class=\"text mx-auto\">\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <h4 class=\"textColor dynamic-success-title\" id=\"dynamic-success-title\"></h4>\n                                <div class=\"rightimg\">\n                                    <img src=\"assets/images/icons/thanku.png\" class=\"checkIcon\">\n                                </div>\n\n                                <div id=\"dynamic-success-content\" class=\"dynamic-success-content newcentertext\">\n                                </div>\n\n                                <div class=\"text-center mt-4 dynamic-success-link\">\n\n                                    <!-- YES, I\n              WANT TO HELP\n            NO, I WOULD LIKE TO EXIT</ion-button> -->\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n\n                </div>\n\n\n\n            </ion-col>\n        </ion-row>\n\n    </div>\n\n    <div class=\"count float-right\" *ngIf=\"hide_question\">\n        <div class=\"progress\">\n            <ion-progress-bar class=\"progress-bar\" buffer=\"0\" style=\"width: 0%;\"></ion-progress-bar>\n        </div>\n        <h5 class=\"progress-text\"> </h5>\n\n    </div>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n<div class=\"bottom\" *ngIf=\"hide_question\">\n    <ion-button id=\"dynamicNext\" expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"next()\">\n        {{'next' | translate}}</ion-button>\n</div>\n<!-- \n<ion-content *ngIf=\"hide_thankyou\">\n\n\n</ion-content> -->");

/***/ }),

/***/ "./src/app/primaryform/primaryform-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/primaryform/primaryform-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PrimaryformPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryformPageRoutingModule", function() { return PrimaryformPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _primaryform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./primaryform.page */ "./src/app/primaryform/primaryform.page.ts");




const routes = [
    {
        path: '',
        component: _primaryform_page__WEBPACK_IMPORTED_MODULE_3__["PrimaryformPage"]
    }
];
let PrimaryformPageRoutingModule = class PrimaryformPageRoutingModule {
};
PrimaryformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrimaryformPageRoutingModule);



/***/ }),

/***/ "./src/app/primaryform/primaryform.module.ts":
/*!***************************************************!*\
  !*** ./src/app/primaryform/primaryform.module.ts ***!
  \***************************************************/
/*! exports provided: PrimaryformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryformPageModule", function() { return PrimaryformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _primaryform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./primaryform-routing.module */ "./src/app/primaryform/primaryform-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _primaryform_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./primaryform.page */ "./src/app/primaryform/primaryform.page.ts");








let PrimaryformPageModule = class PrimaryformPageModule {
};
PrimaryformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _primaryform_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrimaryformPageRoutingModule"]
        ],
        declarations: [_primaryform_page__WEBPACK_IMPORTED_MODULE_7__["PrimaryformPage"]]
    })
], PrimaryformPageModule);



/***/ }),

/***/ "./src/app/primaryform/primaryform.page.scss":
/*!***************************************************!*\
  !*** ./src/app/primaryform/primaryform.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239, 253, 255, 1) 0%, rgba(239, 253, 255, 1) 32%, rgba(231, 246, 248, 1) 57%, rgba(252, 232, 242, 1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239, 253, 255, 1) 0%, rgba(239, 253, 255, 1) 32%, rgba(231, 246, 248, 1) 57%, rgba(252, 232, 242, 1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239, 253, 255, 1) 0%, rgba(239, 253, 255, 1) 32%, rgba(231, 246, 248, 1) 57%, rgba(252, 232, 242, 1) 100%);\n  --background: linear-gradient(135deg, rgba(239, 253, 255, 1) 0%, rgba(239, 253, 255, 1) 32%, rgba(231, 246, 248, 1) 57%, rgba(252, 232, 242, 1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.newheader {\n  box-shadow: none !important;\n}\n\n.secondthank {\n  text-align: center;\n}\n\n.newtoolbar {\n  --background: transparent !important;\n}\n\n.d-none {\n  display: none;\n}\n\n.topmargin {\n  margin-top: 0;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\n.thankuheadinnn {\n  box-shadow: none;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 62px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-md.thankuheadinnn::after {\n  background: transparent !important;\n}\n\n.form-group label {\n  box-shadow: none;\n  border-radius: 0;\n  font-size: 22px;\n  color: #292020;\n  font-weight: 400;\n  padding: 10px 0px;\n}\n\n.thankyou-section {\n  width: 100%;\n  padding: 20px;\n}\n\n.thankyou-section h4 {\n  margin: 0 auto 25px;\n  width: 100%;\n  font-size: 22px;\n  font-weight: 500;\n  font-weight: 500;\n  text-align: center;\n}\n\n.newcentertext {\n  width: 100%;\n  height: auto;\n  margin-bottom: 50px;\n  padding: 0 18px;\n}\n\n.rightimg img {\n  width: 70px;\n}\n\n.nobtn a {\n  color: #fff !important;\n  text-decoration: none;\n}\n\n.nobtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 95%;\n  font-weight: 500;\n  --box-shadow: none;\n  text-transform: uppercase;\n  margin: 0 auto 55px;\n  text-align: center;\n}\n\n.yesbtn a {\n  color: #592D8D !important;\n  text-decoration: none;\n}\n\n.yesbtn {\n  color: #592D8D !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 95%;\n  --box-shadow: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-width: 1px;\n  margin: 0 auto 20px;\n  text-align: center;\n}\n\n.newcentertext p {\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n.rightimg {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newrighticon {\n  width: 100%;\n  height: auto;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n\n.singleColumn .inputGroup {\n  width: 100%;\n}\n\n.inputGroup {\n  background-color: #fff;\n  display: block;\n  margin: 10px 0 0px;\n  position: relative;\n  border: 1px solid #E1D8EB;\n}\n\n.shareincidentform {\n  width: 100% !important;\n}\n\n.inputGroup label {\n  padding: 12px 30px;\n  width: 100%;\n  display: block;\n  text-align: left;\n  color: #3C454C;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  font-size: 16px !important;\n  transition: color 100ms ease-in;\n  overflow: hidden;\n  border-radius: 3px !important;\n}\n\n.label1 {\n  padding: 10px 12px 10px 20px !important;\n}\n\n.custom-control {\n  padding-left: 0px !important;\n}\n\n.progress-form .custom-radio-inside {\n  list-style: none;\n  -webkit-padding-start: 28px;\n          padding-inline-start: 28px;\n}\n\n.custom-control-input:checked ~ .label1::before {\n  color: #220E0E !important;\n  border-color: #E1D8EB;\n  background: #fff;\n}\n\n.inputGroup input:checked ~ label:after {\n  width: 25px;\n  height: 26px;\n  content: \"\";\n  background: url(/assets/images/icons/tick.svg);\n  background-repeat: no-repeat;\n  background-position: 5px 8px;\n  z-index: 2;\n  position: relative;\n  float: right;\n  margin-top: -5px;\n  background-size: 19px;\n}\n\n.inputGroup input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n\n.inputGroup input {\n  width: 32px;\n  height: 32px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  right: 30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n\n.mapouter {\n  min-height: 467px;\n  height: 60%;\n  position: relative;\n  width: 100%;\n  margin-bottom: 30px;\n  margin-top: 15px;\n}\n\n.md .mainform {\n  width: 100%;\n  height: auto;\n  margin-top: 50%;\n  margin-bottom: 210px;\n}\n\n.ios .mainform {\n  margin-top: 52%;\n  margin-bottom: 194px;\n}\n\n.progress-form {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.formarea {\n  width: 100%;\n  padding: 0 20px;\n}\n\n.newspan {\n  color: #5D5656;\n  font-size: 16px;\n  margin-top: 8px;\n  font-weight: 400;\n  float: left;\n}\n\n.newquestion {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 15px;\n}\n\n.newview {\n  width: 100%;\n  display: inline-block;\n}\n\n.form-group .inputBox,\n.input1 {\n  background-color: transparent !important;\n  border-bottom: 1px solid #623893 !important;\n  border-left: 0px !important;\n  border-right: 0px !important;\n  border-top: 0px !important;\n  height: auto !important;\n  padding: 15px 10px 10px !important;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  font-size: 16px !important;\n  color: #292020 !important;\n  outline: 0 !important;\n  width: 100%;\n}\n\n.newtime {\n  background-image: url(/assets/images/icons/time.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 8px;\n  background-position: 37%;\n}\n\n.form-group .inputBox {\n  padding: 15px 0 10px 0 !important;\n}\n\ninput:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.form-group input:focus {\n  outline: 0 !important;\n}\n\n.form-group input.inputBox:focus,\n.input1:focus,\n.input2:focus .form-group textarea:focus {\n  outline: 0 !important;\n  border-bottom: 2px solid #623893;\n  border-left: 0px;\n  border-right: 0px;\n  border-top: 0px;\n  box-shadow: none;\n}\n\ninput:active {\n  outline: 0 !important;\n}\n\n::focus {\n  outline: none !important;\n}\n\n.form-group .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.form-group .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.form-group ion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: none;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height: 41px;\n  --padding-start: 0;\n  --background: transparent;\n}\n\n.custom-checkbox {\n  display: block;\n  position: relative;\n  padding-left: 35px !important;\n  margin-bottom: 12px;\n  cursor: pointer;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  font-size: 16px !important;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  margin-top: 8px !important;\n}\n\n/* Hide the browser's default checkbox */\n\n.custom-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-size: 18px;\n}\n\n.newtextfour .sc-ion-label-ios-h {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.newtextfour .sc-ion-label-md-h {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.newtextfour h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.timenext {\n  width: 45%;\n  float: left;\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtextfour .newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-size: 18px;\n}\n\n.newtextfour ion-item {\n  --border-width: 0 0 0px 0 !important;\n  --inner-padding-end: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.newtextfourin ion-list-header ion-label {\n  margin-top: 0;\n  font-size: 16px;\n  color: #220E0E;\n  font-weight: 400;\n}\n\n/* On mouse-over, add a grey background color */\n\n.custom-checkbox:hover input ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.custom-checkbox input:checked ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.custom-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.custom-checkbox .checkmark:after {\n  left: 7px;\n  top: 2px;\n  width: 4px;\n  height: 9px;\n  border: solid #2ED35A;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.newtext ion-label {\n  margin-top: 10px;\n  margin-bottom: 11px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 100px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 55%;\n  margin-bottom: 150px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 0;\n  left: 0;\n  right: 0;\n  text-transform: uppercase;\n  margin: 0 auto 25px;\n  --box-shadow: 0;\n  text-align: center;\n}\n\n.themeColorin {\n  color: #592D8D !important;\n}\n\n.sub-label {\n  font-size: 16px !important;\n  color: #5D5656 !important;\n}\n\n.loctioninput .form-group {\n  margin-bottom: 20px;\n}\n\n.loctioninput .estimate {\n  margin-left: 0;\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n.loctioninput .form-group label {\n  font-size: 16px;\n  margin-bottom: 0px !important;\n  padding-bottom: 2px !important;\n  display: inline-block;\n  padding: 0 !important;\n  margin-top: 0px;\n}\n\n.newchekdot label {\n  font-size: 16px;\n}\n\n.pinned-add {\n  font-size: 16px !important;\n  margin: 0;\n}\n\n.loctioninput .form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-top: 10px;\n}\n\n.form-text {\n  background: #fff !important;\n  color: #220E0E !important;\n}\n\nion-list {\n  background: transparent !important;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height: 41px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius: 0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 24px;\n  margin-top: 1px;\n}\n\n.radio-inner {\n  width: 33%;\n  height: 50%;\n}\n\n.newinput {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtexttwo {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.red {\n  color: #F71313;\n}\n\n.red1 {\n  color: #F71313;\n  font-size: 13px !important;\n  margin-bottom: 0 !important;\n}\n\n.newcal {\n  background-image: url(/assets/images/icons/calendar.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 15px;\n}\n\nion-item.newcheckbox {\n  border-bottom: none;\n}\n\nion-datetime {\n  padding-left: 10px;\n  --padding-end: 0;\n  width: 100%;\n}\n\n.newcheckbox ion-checkbox {\n  --border-radius: 0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --size: 19px;\n  --border-color-checked: #ddd;\n  --border-width: 1px;\n  --border-color: #ddd;\n  margin-right: 19px;\n  margin: 10px 19px 12px 4px;\n}\n\n.newcheckbox {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newbtnin {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  left: 0;\n  right: 0;\n  text-transform: uppercase;\n  margin: 20px auto 25px;\n  --box-shadow: 0;\n  text-align: center;\n}\n\n.newtextfour ion-checkbox {\n  --border-radius: 0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --size: 19px;\n  --border-color-checked: #ddd;\n  --border-width: 1px;\n  --border-color: #ddd;\n  margin-right: 19px;\n}\n\n.newtextthree .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.newtextthree .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.newtextthree h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 16px;\n}\n\nion-item.newtextthree {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.new {\n  border: 1px solid #E1D8EB;\n  background-color: #fff;\n  width: 100%;\n  display: inline-flex;\n}\n\n.newtextthree .label-stacked {\n  margin-bottom: 10px;\n  font-size: 16px;\n  color: #220E0E;\n  transform: inherit;\n}\n\n.newclear {\n  width: 100% !important;\n  float: right !important;\n  text-align: right !important;\n  color: #6A37A5 !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  margin-bottom: 0 !important;\n}\n\n.newtextfour.new {\n  border: 1px solid #E1D8EB;\n  background-color: #fff;\n  width: 100%;\n  display: inline-flex;\n  background-color: transparent;\n}\n\n.newtextfour .label-stacked {\n  margin-bottom: 10px;\n  font-size: 16px;\n  color: #220E0E;\n  transform: inherit;\n}\n\n.newarea {\n  width: 10%;\n  float: left;\n  --min-height: 35px;\n  margin: 0;\n}\n\n.newarea .label-stacked {\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n}\n\nion-item.newtextfour {\n  --padding-start: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-color: transparent;\n}\n\nion-item.newtextfourin {\n  --padding-start: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-color: transparent;\n  --background: transparent ;\n}\n\n.newtextfour .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.newtextfour .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.newtextfour h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.timenext {\n  width: 45%;\n  float: left;\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtextfour .newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-size: 18px;\n}\n\n.newtextfourin ion-list-header ion-label {\n  margin-top: 0;\n  font-size: 16px;\n  color: #220E0E;\n  font-weight: 400;\n}\n\n.newtime {\n  background-image: url(/assets/images/icons/time.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 8PX;\n  background-position: 37%;\n}\n\n.newtextfour ion-list {\n  background: transparent;\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.newtextfour .newclear {\n  width: 100% !important;\n  float: right !important;\n  text-align: right !important;\n  color: #6A37A5 !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  margin-bottom: 0 !important;\n  margin-top: 0;\n}\n\n.md .count.float-right {\n  position: absolute;\n  top: 92px;\n  right: 40px;\n  left: 25px;\n  right: 25px;\n}\n\n.ios .count.float-right {\n  position: absolute;\n  top: 117px;\n  right: 40px;\n  left: 25px;\n  right: 25px;\n}\n\nion-progress-bar {\n  --progress-background: #6CBF52;\n  height: 10px;\n}\n\n.progress-buffer-bar {\n  background: transparent;\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #6CBF52;\n  transition: width 0.6s ease;\n}\n\n.progress {\n  height: 10px;\n  border-radius: 0;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n.count.float-right {\n  z-index: 999999;\n}\n\n.progress-text {\n  font-size: 16px !important;\n  color: #46962C;\n}\n\n.progress-bar {\n  background-color: #6CBF52;\n  box-shadow: none;\n}\n\n.count {\n  font-size: 36px;\n}\n\nincident_location .form-group {\n  margin-bottom: 5px !important;\n}\n\n.incident_location .form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.incident_location .form-group label {\n  font-size: 14px;\n  margin-bottom: 8px !important;\n  padding-bottom: 2px !important;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.noteColor label {\n  font-size: 14px !important;\n  margin-top: 8px !important;\n  display: inline-block;\n}\n\n.arrow_position {\n  position: absolute;\n  left: -36px;\n  top: 4px;\n}\n\n.relativepo {\n  position: relative;\n}\n\n.arrow_position .leftIcon {\n  width: 17px;\n}\n\n.newclearitem {\n  margin-bottom: 0;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .ios .mainform {\n    width: 100%;\n    height: auto;\n    margin-top: 51%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .md .mainform {\n    width: 100%;\n    height: auto;\n    margin-top: 51%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbWFyeWZvcm0vRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxccHJpbWFyeWZvcm1cXHByaW1hcnlmb3JtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpbWFyeWZvcm0vcHJpbWFyeWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkpBQUE7RUFDQSx3SkFBQTtFQUNBLHlKQUFBO0VBQ0EscUpBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLCtDQUFBO0VBQ0EsMENBQUE7QUNDSjs7QURFQTtFQUNJLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7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QkFBQTtFQUVBLGdCQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0FDWEo7O0FEY0E7RUFDSSw2QkFBQTtBQ1hKOztBRGNBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQ1hKOztBRGNBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNYSjs7QURjQTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ1hKOztBRGNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ1hKOztBRGNBO0VBQ0ksa0JBQUE7QUNYSjs7QURjQTtFQUNJLFdBQUE7QUNYSjs7QURjQTtFQUNJLGdCQUFBO0FDWEo7O0FEY0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ1hOO0FBQ0Y7O0FEY0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ1pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmltYXJ5Zm9ybS9wcmltYXJ5Zm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3Ymcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LCAyNTMsIDI1NSwgMSkgMCUsIHJnYmEoMjM5LCAyNTMsIDI1NSwgMSkgMzIlLCByZ2JhKDIzMSwgMjQ2LCAyNDgsIDEpIDU3JSwgcmdiYSgyNTIsIDIzMiwgMjQyLCAxKSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAwJSwgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAzMiUsIHJnYmEoMjMxLCAyNDYsIDI0OCwgMSkgNTclLCByZ2JhKDI1MiwgMjMyLCAyNDIsIDEpIDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAwJSwgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAzMiUsIHJnYmEoMjMxLCAyNDYsIDI0OCwgMSkgNTclLCByZ2JhKDI1MiwgMjMyLCAyNDIsIDEpIDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwgMjUzLCAyNTUsIDEpIDAlLCByZ2JhKDIzOSwgMjUzLCAyNTUsIDEpIDMyJSwgcmdiYSgyMzEsIDI0NiwgMjQ4LCAxKSA1NyUsIHJnYmEoMjUyLCAyMzIsIDI0MiwgMSkgMTAwJSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5uZXdoZWFkZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Vjb25kdGhhbmsge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3dG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvcG1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGhhbmt1aGVhZGlubm4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDYycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICAgIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG59XHJcblxyXG4uYmFja2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kLnRoYW5rdWhlYWRpbm5uOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4udGhhbmt5b3Utc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50aGFua3lvdS1zZWN0aW9uIGg0IHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3Y2VudGVydGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE4cHg7XHJcbn1cclxuXHJcbi5yaWdodGltZyBpbWcge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5ub2J0biBhIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ub2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDAgYXV0byA1NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ueWVzYnRuIGEge1xyXG4gICAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnllc2J0biB7XHJcbiAgICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld2NlbnRlcnRleHQgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnJpZ2h0aW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdyaWdodGljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2luZ2xlQ29sdW1uIC5pbnB1dEdyb3VwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXRHcm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xyXG59XHJcblxyXG4uc2hhcmVpbmNpZGVudGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0R3JvdXAgbGFiZWwge1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzNDNDU0QztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGVhc2UtaW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbDEge1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2dyZXNzLWZvcm0gLmN1c3RvbS1yYWRpby1pbnNpZGUge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyOHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4ubGFiZWwxOjpiZWZvcmUge1xyXG4gICAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI0UxRDhFQjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5pbnB1dEdyb3VwIGlucHV0OmNoZWNrZWR+bGFiZWw6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy90aWNrLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDhweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkfmxhYmVsOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbnB1dEdyb3VwIGlucHV0IHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hcG91dGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ2N3B4O1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubWQgLm1haW5mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjEwcHg7XHJcbn1cclxuXHJcbi5pb3MgLm1haW5mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDUyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE5NHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZm9ybSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm1hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4ubmV3c3BhbiB7XHJcbiAgICBjb2xvcjogIzVENTY1NjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm5ld3F1ZXN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubmV3dmlldyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLmlucHV0Qm94LFxyXG4uaW5wdXQxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYyMzg5MyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzI5MjAyMCAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXd0aW1lIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy90aW1lLnN2Zyk7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzclO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAuaW5wdXRCb3gge1xyXG4gICAgcGFkZGluZzogMTVweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dC5pbnB1dEJveDpmb2N1cyxcclxuLmlucHV0MTpmb2N1cyxcclxuLmlucHV0Mjpmb2N1cyAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyMzg5MztcclxuICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0OmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuOjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA0MXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xyXG5cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuXHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5uZXdhZGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDA7XHJcbiAgICBjb2xvcjogIzI5MjAyMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXIgaDQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLnRpbWVuZXh0IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXIgLm5ld2FkZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMDtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXIgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5ld3RleHRmb3VyaW4gaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMjBFMEU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcblxyXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogOXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMkVEMzVBO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLm5ld3RleHQgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG59XHJcblxyXG5pb24tcmFkaW8ge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xyXG59XHJcblxyXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMjIwRTBFO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm5ld3RleHQgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1RDU2NTY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLm5ld2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICAgIC0tYm94LXNoYWRvdzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRoZW1lQ29sb3JpbiB7XHJcbiAgICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5zdWItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVENTY1NiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9jdGlvbmlucHV0IC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5sb2N0aW9uaW5wdXQgLmVzdGltYXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5sb2N0aW9uaW5wdXQgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm5ld2NoZWtkb3QgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucGlubmVkLWFkZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuICAgIC0tbWluLWhlaWdodDogNDFweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcblxyXG4ucmFkaW8taW5uZXIge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4ubmV3aW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFEOEVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0dHdvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMjIwRTBFO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogI0Y3MTMxMztcclxufVxyXG5cclxuLnJlZDEge1xyXG4gICAgY29sb3I6ICNGNzEzMTM7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld2NhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2FsZW5kYXIuc3ZnKTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbS5uZXdjaGVja2JveCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3Y2hlY2tib3ggaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICMyRUQzNUE7XHJcbiAgICAtLWNoZWNrbWFyay13aWR0aDogMjtcclxuICAgIC0tc2l6ZTogMTlweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNkZGQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTlweCAxMnB4IDRweDtcclxufVxyXG5cclxuLm5ld2NoZWNrYm94IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubmV3YnRuaW4ge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjVweDtcclxuICAgIC0tYm94LXNoYWRvdzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3RleHRmb3VyIGlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xyXG4gICAgLS1jaGVja21hcmstd2lkdGg6IDI7XHJcbiAgICAtLXNpemU6IDE5cHg7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZGRkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4ubmV3dGV4dHRocmVlIC5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubmV3dGV4dHRocmVlIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0dGhyZWUgaDQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ubmV3dGV4dHRocmVlIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmV3IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLm5ld3RleHR0aHJlZSAubGFiZWwtc3RhY2tlZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMjBFMEU7XHJcbiAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZXdjbGVhciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2QTM3QTUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ci5uZXcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLm5ld3RleHRmb3VyIC5sYWJlbC1zdGFja2VkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyMEUwRTtcclxuICAgIHRyYW5zZm9ybTogaW5oZXJpdDtcclxufVxyXG5cclxuLm5ld2FyZWEge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLS1taW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmV3YXJlYSAubGFiZWwtc3RhY2tlZCB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtLm5ld3RleHRmb3VyIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24taXRlbS5uZXd0ZXh0Zm91cmluIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciBoNCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4udGltZW5leHQge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciAubmV3YWRkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwO1xyXG4gICAgY29sb3I6ICMyOTIwMjA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91cmluIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjIwRTBFO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5ld3RpbWUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3RpbWUuc3ZnKTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4UFg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNyU7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciBpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciAubmV3Y2xlYXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNkEzN0E1ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm1kIC5jb3VudC5mbG9hdC1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDkycHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICByaWdodDogMjVweDtcclxufVxyXG5cclxuLmlvcyAuY291bnQuZmxvYXQtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMTdweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5pb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzZDQkY1MjtcclxuICAgIGhlaWdodDogMTBweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWJ1ZmZlci1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkNCRjUyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjZzIGVhc2U7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG59XHJcblxyXG4uY291bnQuZmxvYXQtcmlnaHQge1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDY5NjJDO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Q0JGNTI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY291bnQge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG5pbmNpZGVudF9sb2NhdGlvbiAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluY2lkZW50X2xvY2F0aW9uIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5jaWRlbnRfbG9jYXRpb24gLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5ub3RlQ29sb3IgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFycm93X3Bvc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0zNnB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZXBvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFycm93X3Bvc2l0aW9uIC5sZWZ0SWNvbiB7XHJcbiAgICB3aWR0aDogMTdweDtcclxufVxyXG5cclxuLm5ld2NsZWFyaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgICAuaW9zIC5tYWluZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUxJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDo2NDBweCkgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gICAgLm1kIC5tYWluZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUxJTtcclxuICAgIH1cclxufSIsIi5uZXdiZyB7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwgMjUzLCAyNTUsIDEpIDAlLCByZ2JhKDIzOSwgMjUzLCAyNTUsIDEpIDMyJSwgcmdiYSgyMzEsIDI0NiwgMjQ4LCAxKSA1NyUsIHJnYmEoMjUyLCAyMzIsIDI0MiwgMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAwJSwgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAzMiUsIHJnYmEoMjMxLCAyNDYsIDI0OCwgMSkgNTclLCByZ2JhKDI1MiwgMjMyLCAyNDIsIDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwgMjUzLCAyNTUsIDEpIDAlLCByZ2JhKDIzOSwgMjUzLCAyNTUsIDEpIDMyJSwgcmdiYSgyMzEsIDI0NiwgMjQ4LCAxKSA1NyUsIHJnYmEoMjUyLCAyMzIsIDI0MiwgMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAwJSwgcmdiYSgyMzksIDI1MywgMjU1LCAxKSAzMiUsIHJnYmEoMjMxLCAyNDYsIDI0OCwgMSkgNTclLCByZ2JhKDI1MiwgMjMyLCAyNDIsIDEpIDEwMCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm5ld2hlYWRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlY29uZHRoYW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3dG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b3BtYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aGFua3VoZWFkaW5ubiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDogNjJweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDc1cHg7XG59XG5cbi5oZWFkZXItYmFja2dyb3VuZCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLW1kLnRoYW5rdWhlYWRpbm5uOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi50aGFua3lvdS1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50aGFua3lvdS1zZWN0aW9uIGg0IHtcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3Y2VudGVydGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbn1cblxuLnJpZ2h0aW1nIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4ubm9idG4gYSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5vYnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA5NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG8gNTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ueWVzYnRuIGEge1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi55ZXNidG4ge1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDk1JTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdjZW50ZXJ0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ucmlnaHRpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld3JpZ2h0aWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbmdsZUNvbHVtbiAuaW5wdXRHcm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXRHcm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggMCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbn1cblxuLnNoYXJlaW5jaWRlbnRmb3JtIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0R3JvdXAgbGFiZWwge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzQzQ1NEM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLWluO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsMSB7XG4gIHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzLWZvcm0gLmN1c3RvbS1yYWRpby1pbnNpZGUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMjhweDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAubGFiZWwxOjpiZWZvcmUge1xuICBjb2xvcjogIzIyMEUwRSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNFMUQ4RUI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbnB1dEdyb3VwIGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy90aWNrLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA4cHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE5cHg7XG59XG5cbi5pbnB1dEdyb3VwIGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCg1NiwgNTYsIDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW5wdXRHcm91cCBpbnB1dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XG4gIG9yZGVyOiAxO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5tYXBvdXRlciB7XG4gIG1pbi1oZWlnaHQ6IDQ2N3B4O1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm1kIC5tYWluZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjEwcHg7XG59XG5cbi5pb3MgLm1haW5mb3JtIHtcbiAgbWFyZ2luLXRvcDogNTIlO1xuICBtYXJnaW4tYm90dG9tOiAxOTRweDtcbn1cblxuLnByb2dyZXNzLWZvcm0ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb3JtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5uZXdzcGFuIHtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm5ld3F1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3dmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb3JtLWdyb3VwIC5pbnB1dEJveCxcbi5pbnB1dDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYyMzg5MyAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI5MjAyMCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3dGltZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy90aW1lLnN2Zyk7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDM3JTtcbn1cblxuLmZvcm0tZ3JvdXAgLmlucHV0Qm94IHtcbiAgcGFkZGluZzogMTVweCAwIDEwcHggMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQuaW5wdXRCb3g6Zm9jdXMsXG4uaW5wdXQxOmZvY3VzLFxuLmlucHV0Mjpmb2N1cyAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MjM4OTM7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbn1cblxuOjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tZ3JvdXAgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9ybS1ncm91cCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tbWluLWhlaWdodDogNDFweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLmN1c3RvbS1jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLm5ld2FkZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0byAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3dGV4dGZvdXIgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld3RleHRmb3VyIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4udGltZW5leHQge1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0Zm91ciAubmV3YWRkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvIDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5uZXd0ZXh0Zm91ciBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmV3dGV4dGZvdXJpbiBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXI6IHNvbGlkICMyRUQzNUE7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbmhlcml0O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1NSU7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ld3RleHQgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIC0tYm94LXNoYWRvdzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGhlbWVDb2xvcmluIHtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbn1cblxuLnN1Yi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzVENTY1NiAhaW1wb3J0YW50O1xufVxuXG4ubG9jdGlvbmlucHV0IC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZXN0aW1hdGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5ld2NoZWtkb3QgbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5waW5uZWQtYWRkIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb3JtLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1taW4taGVpZ2h0OiA0MXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG59XG5cbmlvbi1yYWRpby5tZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4ubmV3aW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0dHdvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRjcxMzEzO1xufVxuXG4ucmVkMSB7XG4gIGNvbG9yOiAjRjcxMzEzO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubmV3Y2FsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2NhbGVuZGFyLnN2Zyk7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pb24taXRlbS5uZXdjaGVja2JveCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdjaGVja2JveCBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcbiAgLS1jaGVja21hcmstd2lkdGg6IDI7XG4gIC0tc2l6ZTogMTlweDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XG4gIG1hcmdpbi1yaWdodDogMTlweDtcbiAgbWFyZ2luOiAxMHB4IDE5cHggMTJweCA0cHg7XG59XG5cbi5uZXdjaGVja2JveCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubmV3YnRuaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMjBweCBhdXRvIDI1cHg7XG4gIC0tYm94LXNoYWRvdzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3dGV4dGZvdXIgaW9uLWNoZWNrYm94IHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcbiAgLS1jaGVja21hcmstY29sb3I6ICMyRUQzNUE7XG4gIC0tY2hlY2ttYXJrLXdpZHRoOiAyO1xuICAtLXNpemU6IDE5cHg7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNkZGQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZGRkO1xuICBtYXJnaW4tcmlnaHQ6IDE5cHg7XG59XG5cbi5uZXd0ZXh0dGhyZWUgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ld3RleHR0aHJlZSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uZXd0ZXh0dGhyZWUgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWl0ZW0ubmV3dGV4dHRocmVlIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5ldyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5ld3RleHR0aHJlZSAubGFiZWwtc3RhY2tlZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLm5ld2NsZWFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNkEzN0E1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm5ld3RleHRmb3VyLm5ldyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uZXd0ZXh0Zm91ciAubGFiZWwtc3RhY2tlZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLm5ld2FyZWEge1xuICB3aWR0aDogMTAlO1xuICBmbG9hdDogbGVmdDtcbiAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5uZXdhcmVhIC5sYWJlbC1zdGFja2VkIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24taXRlbS5uZXd0ZXh0Zm91ciB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtLm5ld3RleHRmb3VyaW4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IDtcbn1cblxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uZXd0ZXh0Zm91ciAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uZXd0ZXh0Zm91ciBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLnRpbWVuZXh0IHtcbiAgd2lkdGg6IDQ1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubmV3dGV4dGZvdXIgLm5ld2FkZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0byAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3dGV4dGZvdXJpbiBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld3RpbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGltZS5zdmcpO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogOFBYO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNyU7XG59XG5cbi5uZXd0ZXh0Zm91ciBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5uZXd0ZXh0Zm91ciAubmV3Y2xlYXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2QTM3QTUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubWQgLmNvdW50LmZsb2F0LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkycHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBsZWZ0OiAyNXB4O1xuICByaWdodDogMjVweDtcbn1cblxuLmlvcyAuY291bnQuZmxvYXQtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTE3cHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBsZWZ0OiAyNXB4O1xuICByaWdodDogMjVweDtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzZDQkY1MjtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZ3Jlc3MtYnVmZmVyLWJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkNCRjUyO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XG59XG5cbi5wcm9ncmVzcyB7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbi5jb3VudC5mbG9hdC1yaWdodCB7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLnByb2dyZXNzLXRleHQge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0Njk2MkM7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkNCRjUyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuaW5jaWRlbnRfbG9jYXRpb24gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmluY2lkZW50X2xvY2F0aW9uIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLmluY2lkZW50X2xvY2F0aW9uIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLm5vdGVDb2xvciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYXJyb3dfcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zNnB4O1xuICB0b3A6IDRweDtcbn1cblxuLnJlbGF0aXZlcG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcnJvd19wb3NpdGlvbiAubGVmdEljb24ge1xuICB3aWR0aDogMTdweDtcbn1cblxuLm5ld2NsZWFyaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLmlvcyAubWFpbmZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MSU7XG4gIH1cbn1cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1kIC5tYWluZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUxJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/primaryform/primaryform.page.ts":
/*!*************************************************!*\
  !*** ./src/app/primaryform/primaryform.page.ts ***!
  \*************************************************/
/*! exports provided: PrimaryformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryformPage", function() { return PrimaryformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);










let PrimaryformPage = class PrimaryformPage {
    constructor(navController, translate, sharedservice, platform, alertController, el, sanitizer, router, route, httpClient) {
        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.platform = platform;
        this.alertController = alertController;
        this.el = el;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.httpClient = httpClient;
        this.otherFieldData = false;
        this.RelationFieldData = false;
        this.oneFieldData = false;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/get-forms/';
        this.formdata = [];
        this.questiondata = [];
        this.value = {
            "option_id": '',
            "answer": ""
        };
        // current_form
        // previous_form
        // next_form
        // question_ids_json
        this.incident_id = 0;
        this.currentQuestion = "";
        this.currentParentKey = 0;
        this.currentTreeOptions = [];
        this.selectedAnswers = [];
        this.dynamicQuestionJson = [];
        this.currentForm = 0;
        this.dependedQuestionsAnswers = {};
        this.dynamicQuestionOptionJson = [];
        this.p_bar = 0;
        this.hide_question = true;
        this.hide_thankyou = false;
        this.totalQuestions = 0;
        this.totalParentAnswers = 0;
        this.text_field_required_msg = "";
        this.text_field_valid_msg = "";
        this.final_Address = [];
        this.shared_data = this.sharedservice.getData();
        this.building_status = false;
        this.landmark_status = false;
        this.area_status = false;
        this.city_status = false;
        this.state_status = false;
        this.country_status = false;
        this.getForm();
        this.latitude = localStorage.getItem('map_lat');
        this.longitude = localStorage.getItem('map_longi');
    }
    ngOnInit() {
        // $(document).ready(function () {
        //   alert("Hello from New to design")
        // });
    }
    setProgress() {
        console.log(this.totalParentAnswers);
        console.log(this.totalQuestions);
        var progressPercent = this.totalParentAnswers / this.totalQuestions * 100;
        console.log(progressPercent);
        console.log(Math.round(progressPercent));
        console.log(this.completed);
        jquery__WEBPACK_IMPORTED_MODULE_8__(".progress-bar").css("width", Math.round(progressPercent) + "%");
        jquery__WEBPACK_IMPORTED_MODULE_8__(".progress-text").text(Math.round(progressPercent) + "% " + this.completed);
    }
    calculateTotalQuestions() {
        this.totalQuestions = 0;
        for (var i = 0; i < this.clientForms.length; i++) {
            if (this.clientForms[i].type == 'primary') {
                console.log('calculate Total Questions:', this.totalQuestions);
                this.totalQuestions += JSON.parse(this.clientForms[i].question_ids_json).length;
            }
            else if (this.clientForms[i].type == 'logic') {
                console.log('calculate Total Questions:', this.totalQuestions);
                console.log(this.clientForms[i].estimate_question);
                this.totalQuestions += this.clientForms[i].estimate_question || 0;
            }
            if (this.clientForms[i].is_submit == true)
                break;
        }
        this.setProgress();
    }
    getForm() {
        let data = new FormData();
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        data.append('platform', localStorage.getItem('platform'));
        data.append('app_version', this.sharedservice.app_version);
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('city_id', localStorage.getItem('City_id'));
        this.translate.get('completed').subscribe((res) => {
            console.log(res);
            this.completed = res;
        });
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('get-forms', data).subscribe((rdata) => {
            console.log(rdata);
            this.clientForms = rdata.forms;
            this.dynamicQuestionOptionJson = rdata.questions;
            this.category = rdata.categories;
            console.log("formdata ", JSON.stringify(this.clientForms));
            console.log("questiondata ", JSON.stringify(this.dynamicQuestionOptionJson));
            this.intiateForm();
            this.calculateTotalQuestions();
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.sharedservice.presentLoadingDefault()
        //     this.httpClient.post(this.apiUrl, data)
        //       .subscribe((rdata: any) => {
        //         console.log(rdata);
        //         this.clientForms = rdata.forms;
        //         this.dynamicQuestionOptionJson = rdata.questions
        //         this.category = rdata.categories
        //         console.log("formdata ", JSON.stringify(this.clientForms))
        //         console.log("questiondata ", JSON.stringify(this.dynamicQuestionOptionJson));
        //         this.intiateForm()
        //         this.calculateTotalQuestions()
        //       }, error => {
        //         this.sharedservice.loaderDismiss()
        //       },()=>{
        //         console.log('complete')
        //         this.sharedservice.loaderDismiss()
        //       });
    }
    next() {
        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        console.log('clicked ', this.currentTreeOptions);
        // Set answers
        this.setAnswers(answer_id => {
            if (this.currentTreeOptions.length == 0) {
                //console.log(currentQuestion);
                // Goto next parent if exists
                this.showNextParentQuestion();
                //this.p_bar += 10;
                //  $(".progress-bar").css("width", Math.round(this.p_bar) + "%");
                //$(".progress-text").text(Math.round(this.p_bar) + "% Completed");
            }
            else {
                // Continue parsing the tree
                for (var i = 0; i < this.currentTreeOptions.length; i++) {
                    var option = this.currentTreeOptions[i];
                    if (option.id == undefined || option.id == answer_id) {
                        this.currentTreeOptions = option["on_option_id"];
                        this.getDynamicQuestions(option["question_id"], null);
                        break;
                    }
                    // Last loop
                    if (i == this.currentTreeOptions.length - 1) {
                        // None of the option matches the condition
                        // Continue to next parent if exists.
                        this.showNextParentQuestion();
                    }
                }
            }
        });
    }
    ionViewDidEnter() {
        // alert('enter')
        this.subscription = this.platform.backButton.subscribeWithPriority(15, (processNextHandler) => {
            //navigator['app'].exitApp();
            //alert('hit')
            this.back();
        });
    }
    ionViewWillLeave() {
        // alert('exit')
        this.subscription.unsubscribe();
    }
    back() {
        console.log(' back button clicked');
        this.latitude = localStorage.getItem('map_lat');
        this.longitude = localStorage.getItem('map_longi');
        this.building = this.landmark = this.area = this.city = this.state = this.country = "";
        this.building_status = this.landmark_status = this.area_status = this.city_status = this.state_status = this.country_status = false;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
        // Set progress
        //	this.p_bar -= 10;
        //	$(".progress-bar").css("width", Math.round(this.p_bar) + "%");              
        //$(".progress-text").text(Math.round(this.p_bar) + "% Completed");
        if (this.selectedAnswers.length == 0) {
            // Redirect back to actual previous page
            console.log("consent page");
            this.navController.pop();
            //window.location.href = baseURL + "shareIncident";
        }
        else {
            // Back to previous question
            // Get previous question back
            var lastQuestion = this.selectedAnswers.pop();
            if (this.clientForms[this.currentForm].type == 'primary' || this.currentParentKey != lastQuestion.currentQuestion.currentParentKey) {
                // Update answer
                this.totalParentAnswers--;
                this.setProgress();
            }
            // Get previous question back
            //	var lastQuestion = this.selectedAnswers.pop();
            this.currentParentKey =
                lastQuestion.currentQuestion.currentParentKey;
            this.currentTreeOptions =
                lastQuestion.currentQuestion.currentTreeOptions;
            // Has form changed to previous form?
            if (this.currentForm != lastQuestion.currentQuestion.currentForm) {
                console.log('form changed!');
                this.currentForm = lastQuestion.currentQuestion.currentForm;
                this.setFormDynamicQuestion(this.clientForms[this.currentForm], callb => {
                    // Show the previous question
                    this.getDynamicQuestions(lastQuestion.currentQuestion.id, lastQuestion);
                });
            }
            else {
                // Show the previous question
                this.getDynamicQuestions(lastQuestion.currentQuestion.id, lastQuestion);
            }
        }
        return false;
    }
    GetFormattedDate(date) {
        // var todayTime = date.string
        console.log(date);
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [month, day, year].join('/');
    }
    //someone else alert
    verifyAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var please_ensure;
            this.translate.get('please_ensure').subscribe((res) => {
                please_ensure = res;
            });
            var ok;
            this.translate.get('ok').subscribe((res) => {
                ok = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                message: please_ensure,
                mode: 'ios',
                buttons: [{
                        text: ok,
                        handler: (alertData) => {
                        }
                    }]
            });
            yield alert.present();
        });
    }
    setAnswers(callback) {
        // Append form type to answer
        //this.answerJson.form_type = this.clientForms[this.currentForm].name;
        console.log('set answer', this.currentQuestion);
        var properties = JSON.parse(this.currentQuestion['properties']);
        if (properties.type == "radio") {
            var answer_id = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").val();
            var answer = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").data('val');
            var other_answers = {};
            if (jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").data('showtextbox') == true) {
                other_answers['answer_id'] = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + answer_id + "textbox").val();
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + "option" + answer_id + "radio" + "]:checked").data('showtextbox') == true) {
                var radionId = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + "option" + answer_id + "radio" + "]:checked").val();
                other_answers['answer_id'] = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + radionId + "textbox").val();
            }
            var subanswer_ids = '';
            // Get suboption answers of type checkbox
            jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "checkbox]:checked").each(function (index, el) {
                subanswer_ids += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__(this).val();
                answer += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('val');
            });
            // Get suboption answers of type radio
            var selectedSubOptionRadio = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "radio]:checked");
            if (selectedSubOptionRadio.length > 0) {
                subanswer_ids += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "radio]:checked").val();
                answer += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "radio]:checked").data('val');
            }
            // Update answer_id by appending subanswer id as well
            answer_id += subanswer_ids;
            if (answer_id == 'undefined') {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                return false;
            }
            this.answerJson = {
                "option_id": answer_id,
                "other_answers": other_answers,
                "answer": answer,
                'form_type': this.clientForms[this.currentForm].name
            };
            console.log('RADIO', this.answerJson);
            // this.p_bar += 10;
        }
        else if (properties.type == "text") {
            let answer_id = 0;
            let answer = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + this.currentQuestion['elementId']).val();
            this.answerJson = {
                "option_id": answer_id,
                "answer": answer,
                'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
        }
        else if (properties.type == "checkbox") {
            let answer_id = '';
            let answer = '';
            var other_answers = {};
            var parent_answer_arr = [];
            var main_answer_arr = [];
            var is_valid = true;
            jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").each(function (index, el) {
                var this_ans_id = JSON.stringify(jquery__WEBPACK_IMPORTED_MODULE_8__(this).val());
                this_ans_id = JSON.parse(this_ans_id);
                answer += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('val');
                answer_id += ',' + this_ans_id;
                // Has Subtext? Get textbox value
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true)
                    other_answers[this_ans_id] = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + this_ans_id + "textbox").val();
                // Is Main? Used for logical questions of categories
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('ismain'))
                    main_answer_arr.push(this_ans_id);
                // Has parent id? Used for secondary questions
                var parent_id = jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('parentid');
                parent_id = parent_id == 0 || parent_id == undefined ? parseInt(this_ans_id) : parent_id;
                if (!parent_answer_arr.includes(parent_id))
                    parent_answer_arr.push(parent_id);
                // Get answer of suboption of type radio
                // Currently there can only be two types of suboptions i.e. radio and checkbox
                // Checbox suboption answer already gets selected as normal option
                // Below code fetches answer for suboption of type radio.
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('hassuboptions') == true) {
                    //$("#dynamicNext").attr("disabled", "disabled");
                    var suboptionElem = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + this_ans_id + "]:checked");
                    if (suboptionElem.length > 0) {
                        answer += ',' + suboptionElem.data('val');
                        answer_id += ',' + suboptionElem.val();
                    }
                }
            });
            answer_id = answer_id.replace(',', '');
            if (answer_id == "") {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                return false;
            }
            else {
                var parent_answer_id = parent_answer_arr.sort().join(',');
                var main_answer_id = main_answer_arr.sort().join(',');
                this.answerJson = {
                    "option_id": answer_id,
                    "main_answer_id": main_answer_id,
                    "parent_option_id": parent_answer_id,
                    "other_answers": other_answers,
                    "answer": "",
                    'form_type': this.clientForms[this.currentForm].name
                };
                answer = answer.replace(',', '');
                var parent_answer_id = parent_answer_arr.sort().join(',');
                var main_answer_id = main_answer_arr.sort().join(',');
                this.answerJson = {
                    "option_id": answer_id,
                    "main_answer_id": main_answer_id,
                    "parent_option_id": parent_answer_id,
                    "other_answers": other_answers,
                    "answer": answer,
                    'form_type': this.clientForms[this.currentForm].name
                };
                if (this.currentQuestion['has_logic_dependency'] == "1") {
                    this.dependedQuestionsAnswers[this.currentQuestion['id']] = {
                        "answers": answer_id,
                        "main_answers": main_answer_id,
                        "parent_answers": parent_answer_id
                    };
                }
            }
            // this.p_bar += 10;
        }
        else if (properties.type == "estimate-datepicker") {
            let answer_id = 0;
            console.log(this.currentQuestion);
            let answer = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]").val();
            var isEstimate = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "checked]").is(':checked');
            var date = this.GetFormattedDate(answer);
            console.log(date);
            if (answer == "") {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                return false;
            }
            this.answerJson = {
                "option_id": answer_id,
                "answer": date,
                "isEstimate": isEstimate,
                'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
        }
        else if (properties.type == "estimate-time-or-rangepicker") {
            let answer_id = 0;
            let answer1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]").val();
            var isEstimate = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "checked]").is(':checked');
            console.log(isEstimate);
            let answer;
            if (answer1) {
                var time = JSON.stringify(answer1);
                console.log(answer1);
                var date1 = time.split('T');
                console.log(date1);
                console.log(date1[0]);
                console.log(date1[1]);
                console.log(date1[1].split('.'));
                var time2 = date1[1].split('.');
                var final_date = time2[0];
                console.log(final_date);
                var time_split = final_date.split(':');
                console.log(time_split);
                if (time_split[0].charAt(0) == '0') {
                    var t = time_split[0].slice(1);
                    time_split[0] = t;
                    console.log(time_split[0]);
                }
                if (time_split[1].charAt(0) == '0') {
                    var t = time_split[1].slice(1);
                    time_split[1] = t;
                    console.log(time_split[1]);
                }
                let hour = JSON.parse(time_split[0]);
                let minute = JSON.parse(time_split[1]);
                console.log(hour);
                console.log(minute);
                var hours = hour > 12 ? hour - 12 : hour;
                var am_pm = hour >= 12 ? "PM" : "AM";
                var minutes = minute < 10 ? "0" + minute : minute;
                answer = hours + ":" + minutes + " " + am_pm;
                console.log(answer);
            }
            if (answer1 == "") {
                var timeStart1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "start]").val();
                var timeEnd1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "end]").val();
                if (timeStart1 == "" && timeEnd1 == "") {
                    if (!jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').next('.timeRange_valid').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').after('<div class="validdation_time" style="color:red;">' + properties["validations"][0]["startendtime"] + '</div>');
                        //$('.timeRange').after('<div class="timeRange_valid" style="color:red;">Please select Start Time and End Time Both.</div>');
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                    return false;
                }
                else {
                    //for timestart
                    var time = JSON.stringify(timeStart1);
                    console.log(timeStart1);
                    var date1 = time.split('T');
                    console.log(date1);
                    console.log(date1[0]);
                    console.log(date1[1]);
                    console.log(date1[1].split('.'));
                    var time2 = date1[1].split('.');
                    var final_date = time2[0];
                    console.log(final_date);
                    var time_split = final_date.split(':');
                    console.log(time_split);
                    if (time_split[0].charAt(0) == '0') {
                        var t = time_split[0].slice(1);
                        time_split[0] = t;
                        console.log(time_split[0]);
                    }
                    if (time_split[1].charAt(0) == '0') {
                        var t = time_split[1].slice(1);
                        time_split[1] = t;
                        console.log(time_split[1]);
                    }
                    let hour = JSON.parse(time_split[0]);
                    let minute = JSON.parse(time_split[1]);
                    console.log(hour);
                    console.log(minute);
                    var hours = hour > 12 ? hour - 12 : hour;
                    var am_pm = hour >= 12 ? "PM" : "AM";
                    var minutes = minute < 10 ? "0" + minute : minute;
                    let timeStart = hours + ":" + minutes + " " + am_pm;
                    //for timeend
                    var timeend = JSON.stringify(timeEnd1);
                    console.log(timeEnd1);
                    var dateend1 = timeend.split('T');
                    console.log(dateend1);
                    console.log(dateend1[0]);
                    console.log(dateend1[1]);
                    console.log(dateend1[1].split('.'));
                    var timeend2 = dateend1[1].split('.');
                    var final_enddate = timeend2[0];
                    console.log(final_enddate);
                    var time_split_end = final_enddate.split(':');
                    console.log(time_split_end);
                    if (time_split_end[0].charAt(0) == '0') {
                        var t = time_split_end[0].slice(1);
                        time_split_end[0] = t;
                        console.log(time_split_end[0]);
                    }
                    if (time_split_end[1].charAt(0) == '0') {
                        var t = time_split_end[1].slice(1);
                        time_split_end[1] = t;
                        console.log(time_split_end[1]);
                    }
                    let hourend = JSON.parse(time_split_end[0]);
                    let minuteend = JSON.parse(time_split_end[1]);
                    console.log(hourend);
                    console.log(minute);
                    var hoursend = hourend > 12 ? hourend - 12 : hourend;
                    var am_pm_end = hourend >= 12 ? "PM" : "AM";
                    var minutesend = minuteend < 10 ? "0" + minuteend : minuteend;
                    let timeEnd = hoursend + ":" + minutesend + " " + am_pm_end;
                    var day = '1 1 1970 ', // 1st January 1970
                    hourDiff = (Date.parse(day + timeEnd) - Date.parse(day + timeStart)) / 1000 / 60;
                    console.log(hourDiff + ' min');
                    if (hourDiff < 0) {
                        if (!jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').next('.timeRange_valid').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').after('<div class="validdation_time" style="color:red;">' + properties["validations"][0]["timediff"] + '</div>');
                            //$('.timeRange').after('<div class="timeRange_valid" style="color:red;">End Time is Less Than Start Time.</div>');
                        }
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                        return false;
                    }
                    console.log(timeStart);
                    console.log(timeEnd);
                    answer = timeStart + '-' + timeEnd;
                    isEstimate = true;
                }
            }
            this.answerJson = {
                "option_id": answer_id,
                "answer": answer,
                "isEstimate": isEstimate,
                'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
        }
        else if (properties.type == "incident-address-form") {
            let answer_id = 0;
            // var building = $("input[name=" + this.currentQuestion['elementId'] + "building]").val();
            // var landmark = $("input[name=" + this.currentQuestion['elementId'] + "landmark]").val();
            // var area = $("input[name=" + this.currentQuestion['elementId'] + "area]").val();
            // var city = $("input[name=" + this.currentQuestion['elementId'] + "city]").val();
            // var state = $("input[name=" + this.currentQuestion['elementId'] + "state]").val();
            // var country = $("input[name=" + this.currentQuestion['elementId'] + "country]").val();
            // var latitude = $("input[name=" + this.currentQuestion['elementId'] + "latitude]").val();
            // var longitude = $("input[name=" + this.currentQuestion['elementId'] + "longitude]").val();
            // if (area == "" || city == "" || state == "" || country == "") {
            //   if (area == "") {
            //     if (!$('.suburb').next('.validdation_suburb').length) {
            //       $('.suburb').after('<div class="validdation_suburb" style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   if (city == "") {
            //     if (!$('.city').next('.validdation_city').length) {
            //       $('.city').after('<div class="validdation_city"><div style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   if (state == "") {
            //     if (!$('.state').next('.validdation_state').length) {
            //       $('.state').after('<div class="validdation_state" style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   if (country == "") {
            //     if (!$('.country').next('.validdation_country').length) {
            //       $('.country').after('<div class="validdation_country" style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   $("#dynamicNext").attr("disabled", "disabled");
            //   return false;
            // }
            // $("#dynamicNext").removeAttr("disabled");
            this.answerJson = {
                "option_id": answer_id,
                "answer": "",
                "address": {
                    "building": this.building,
                    "landmark": this.landmark,
                    "area": this.area,
                    "city": this.city,
                    "state": this.state,
                    "country": this.country,
                    "latitude": this.latitude,
                    "longitude": this.longitude
                },
                'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
            // this.p_bar += 10;
        }
        else if (properties.type == "incident-pin-map") {
            let answer_id = 0;
            var isAccepted = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "checked]").is(':checked');
            var latitude = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + this.currentQuestion['elementId'] + "latitude").val();
            var longitude = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + this.currentQuestion['elementId'] + "longitude").val();
            this.answerJson = {
                "option_id": 0,
                "answer": "",
                "address": {
                    "latitude": latitude,
                    "longitude": longitude
                },
                "isAccepted": isAccepted,
                'form_type': this.clientForms[this.currentForm].name
            };
            //this.p_bar += 5;
            console.log(this.answerJson);
        }
        // Save the questions and answers
        if (this.currentTreeOptions.length == 0) {
            this.currentQuestion['currentTreeOptions'] = [];
        }
        else {
            this.currentQuestion['currentTreeOptions'] = this.currentTreeOptions;
        }
        this.currentQuestion['answerJson'] = this.answerJson;
        this.selectedAnswers.push({ 'currentQuestion': this.currentQuestion });
        console.log(this.selectedAnswers);
        // Return answer id
        callback(answer_id);
    }
    diff_hours(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(diff);
    }
    intiateForm() {
        var form = this.clientForms[this.currentForm];
        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        this.setFormDynamicQuestion(form, call => {
            // Reset counters
            this.currentParentKey = 0;
            if (this.dynamicQuestionJson.length > 0) {
                this.currentTreeOptions = this.dynamicQuestionJson[0]["on_option_id"];
                this.getDynamicQuestions(this.dynamicQuestionJson[0].question_id, null);
            }
            else {
                this.totalParentAnswers--;
                this.showNextParentQuestion();
            }
        });
    }
    setFormDynamicQuestion(form, callback) {
        if (form.type == "logic") {
            // figure out the actual answer to use to get the logical questions
            var logicDetails = JSON.parse(form.question_ids_json);
            var dependant_question_id = logicDetails.dependant_question_id;
            var answer_type = logicDetails.answer_type;
            var dependent_answers;
            console.log(logicDetails);
            console.log(this.dependedQuestionsAnswers);
            if (answer_type == "main") {
                dependent_answers = this.dependedQuestionsAnswers[dependant_question_id]["main_answers"];
                console.log(dependent_answers);
            }
            else if (answer_type == "parent") {
                dependent_answers = this.dependedQuestionsAnswers[dependant_question_id]["parent_answers"];
                console.log(dependent_answers);
            }
            else {
                // answer_type = "actual"
                dependent_answers = this.dependedQuestionsAnswers[dependant_question_id]["answers"];
                console.log(dependent_answers);
            }
            console.log(dependent_answers);
            // make a ajax call to get combination json data
            var baseURL = this.sharedservice.get_url();
            jquery__WEBPACK_IMPORTED_MODULE_8__["ajax"]({
                url: baseURL + 'get-logical-questions',
                type: 'POST',
                data: { form_id: form.id, question_id: dependant_question_id, ans_ids: dependent_answers, 'lang_id': localStorage.getItem('Lang_id'), 'platform': localStorage.getItem('platform'), 'app_version': this.sharedservice.app_version, 'country_id': localStorage.getItem('Country_id'), 'city_id': localStorage.getItem('City_id') },
            })
                .done(data => {
                console.log("success", data);
                var parsedData = data;
                this.dynamicQuestionJson = parsedData.comb_json;
                // Update Progress based on newly added questions
                //totalQuestions += dynamicQuestionJson.length;
                console.log('add ' + this.dynamicQuestionJson.length + ' questions');
                this.clientForms[this.currentForm].estimate_question = this.dynamicQuestionJson.length;
                this.calculateTotalQuestions();
                var relatedquestions = Object.values(parsedData.questions);
                // Update questin options
                relatedquestions.forEach(questionObj => {
                    console.log(questionObj);
                    console.log(questionObj['question']);
                    console.log(questionObj['question'].id);
                    console.log(this.dynamicQuestionOptionJson);
                    this.dynamicQuestionOptionJson[questionObj['question'].id] = questionObj;
                });
                callback();
            });
            // }) {
            // .fail(function() {
            //   console.log("error");
            // })
            // .always(function() {
            //   console.log("complete");
            // });
            // When data was already available
            /*var parsedJSON = JSON.parse(form.question_ids_json);
            if(parsedJSON[dependent_answers]!=undefined) {
              dynamicQuestionJson = parsedJSON[dependent_answers];
              console.log(dynamicQuestionJson);
            } else {
              dynamicQuestionJson = [];
            }*/
        }
        else {
            this.dynamicQuestionJson = JSON.parse(form.question_ids_json);
            callback();
        }
    }
    showNextParentQuestion() {
        // We update progress only for answer to parent questions
        console.log('Set progress for parent question!');
        this.totalParentAnswers++;
        this.setProgress();
        if (this.dynamicQuestionJson[this.currentParentKey + 1] != undefined) {
            var nextParent = this.dynamicQuestionJson[++this.currentParentKey];
            this.currentTreeOptions = nextParent["on_option_id"];
            this.getDynamicQuestions(nextParent["question_id"], null);
        }
        else {
            // dynamicQuestionJson recursion completed
            // Check if form needs to be submitted
            var thisForm = this.clientForms[this.currentForm];
            if (thisForm.is_submit == true) {
                // Submit the form and get back id
                var loadertext;
                this.translate.get('loadertext').subscribe((res) => {
                    loadertext = res;
                });
                this.sharedservice.presentLoadingDefault(loadertext);
                console.log("answer", JSON.stringify(this.selectedAnswers));
                console.log(this.selectedAnswers);
                var baseURL = this.sharedservice.get_url();
                jquery__WEBPACK_IMPORTED_MODULE_8__["ajax"]({
                    url: baseURL + 'save-incident',
                    type: 'POST',
                    data: { answers_json: JSON.stringify(this.selectedAnswers), incident_id: this.incident_id, user_id: localStorage.getItem('userId'), 'client_id': '1', 'lang_id': localStorage.getItem('Lang_id'), 'platform': localStorage.getItem('platform'), 'app_version': this.sharedservice.app_version, 'country_id': localStorage.getItem('Country_id'), 'city_id': localStorage.getItem('City_id') },
                })
                    .done(data => {
                    this.sharedservice.loaderDismiss();
                    console.log("success", data);
                    var parsedData = data;
                    if (parsedData.success == true) {
                        this.incident_id = parsedData.incident_id;
                        this.shared_data['incident_id'] = this.incident_id;
                        this.sharedservice.setData(this.shared_data);
                        var incident_id = JSON.stringify(this.incident_id);
                        localStorage.setItem('incident_id', incident_id);
                        console.log(thisForm);
                        this.onFormSaved(thisForm);
                    }
                    else {
                        // alert('Something went wrong!');
                    }
                });
            }
            else {
                // continue with the form recursion
                this.showNextForm();
            }
        }
    }
    onFormSaved(thisForm) {
        console.log('thisform', thisForm);
        // Reset the variables to disable back
        this.clientForms.splice(0, this.currentForm + 1);
        this.currentForm = -1;
        this.currentQuestion = "";
        this.currentParentKey = 0;
        this.currentTreeOptions = [];
        this.selectedAnswers = [];
        this.dynamicQuestionJson = [];
        this.totalParentAnswers = 0;
        if (thisForm.thank_you_web != null) {
            var thankyouJson = JSON.parse(thisForm.thank_you_web);
            console.log(thankyouJson);
            console.log(thankyouJson.title);
            console.log(thankyouJson.content);
            var title = thankyouJson.title;
            var content = thankyouJson.content;
            console.log(title);
            console.log(content);
            // title = JSON.parse(title)
            // content = JSON.parse(content)
            console.log(title);
            console.log(content);
            // this.title = this.sanitizer.bypassSecurityTrustHtml(thankyouJson.title) ; 
            // this.content = this.sanitizer.bypassSecurityTrustHtml(thankyouJson.content);
            // console.log(title)
            // console.log(content)
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-title").html(title);
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-content").html(content);
            var links = '';
            var redirect_url = "";
            thankyouJson.links.forEach(function (link) {
                if (link.is_next)
                    links += '<ion-button expand="full" shape="round" class="yesbtn btn w-50 btn_purple mb-4 dynamic-thankyou-next" (click)="help()">' + link.title + '</ion-button>';
                else {
                    //var baseURL = 'http://101.53.143.7/~dataduck/safecity_webapp/'
                    //redirect_url = link.redirect_url != undefined ? baseURL + link.redirect_url : '#';
                    links += '<ion-button expand="full" shape="round" fill="outline" class="nobtn btn w-50 btn_p_white dynamic-thankyou-end">' + link.title + '</ion-button>';
                }
                if (thankyouJson.links.length == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-content").addClass('secondthank');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-content").removeClass('secondthank');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-success-link").html(links);
            var self = this;
            // Show thank you div
            jquery__WEBPACK_IMPORTED_MODULE_8__(".questionaire").hide();
            jquery__WEBPACK_IMPORTED_MODULE_8__(".thankyou-section").show();
            this.hide_thankyou = true;
            this.hide_question = false;
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-thankyou-next").click(function (event) {
                event.preventDefault();
                self.calculateTotalQuestions();
                self.showNextForm();
                setTimeout(() => {
                    // Hide thank you div
                    jquery__WEBPACK_IMPORTED_MODULE_8__(".thankyou-section").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_8__(".questionaire").show();
                    self.hide_thankyou = false;
                    self.hide_question = true;
                }, 1000);
                console.log('next');
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-thankyou-end").click(function (event) {
                event.preventDefault();
                console.log('help');
                self.router.navigate(['/helplines']);
                //this.resetState();
                //window.location.href = redirect_url;
            });
        }
        else {
            // continue with the form recursion
            this.showNextForm();
        }
    }
    help() {
        console.log('help');
        // let navigationExtras: NavigationExtras = {
        //   state: {
        //     content : content
        //   }
        // };
        this.router.navigate(['/helplines']);
    }
    showQuestionAgain() {
        //     event.stopPropagation();
        //     event.preventDefault();
        // console.log('question',event)
        jquery__WEBPACK_IMPORTED_MODULE_8__(".thankyou-section").hide();
        jquery__WEBPACK_IMPORTED_MODULE_8__(".questionaire").show();
        this.hide_question = true;
        this.hide_thankyou = false;
        this.showNextForm();
    }
    showNextForm() {
        if (this.clientForms[this.currentForm + 1] != undefined) {
            this.currentForm++;
            console.log('moving forward to form ' + this.currentForm);
            this.intiateForm();
        }
        else {
            console.log("The END!");
        }
    }
    getDynamicQuestions(questionId, lastQuestion) {
        var parsedData = this.dynamicQuestionOptionJson[questionId];
        this.currentQuestion = parsedData["question"];
        this.currentQuestion['currentParentKey'] = this.currentParentKey;
        this.currentQuestion['currentForm'] = this.currentForm;
        console.log(this.currentQuestion);
        var hide_span_for_datepicker = JSON.parse(this.currentQuestion['properties']);
        console.log(hide_span_for_datepicker);
        console.log(hide_span_for_datepicker.type);
        console.log(this.currentQuestion['properties']['type']);
        // Set question and subtext
        jquery__WEBPACK_IMPORTED_MODULE_8__("#question_span").html(this.currentQuestion['question']);
        if (hide_span_for_datepicker.type != 'estimate-datepicker' && hide_span_for_datepicker.type != 'estimate-time-or-rangepicker') {
            console.log('in');
            jquery__WEBPACK_IMPORTED_MODULE_8__("#subtext_span").html(this.currentQuestion['subtext']);
        }
        // if(hide_span_for_datepicker.type !=  'estimate-time-or-rangepicker')
        // {
        //   console.log('in')
        //   $("#subtext_span").html(this.currentQuestion['subtext']);
        // }
        this.createDynamicElement(parsedData, lastQuestion);
        //this.saveStateLocally();
    }
    createDynamicElement(data, lastQuestion) {
        var properties = JSON.parse(data.question.properties);
        switch (properties.type) {
            case "radio":
                this.componentRadio(data, lastQuestion);
                break;
            case "text":
                this.componentText(data, properties, lastQuestion);
                break;
            case "estimate-datepicker":
                this.componentEstimateDatepicker(data, lastQuestion);
                break;
            case "estimate-time-or-rangepicker":
                this.componentEstimateTimeOrRangepicker(data, lastQuestion);
                break;
            case "checkbox":
                this.componentCheckbox(data, lastQuestion);
                break;
            case "incident-address-form":
                this.componentIncidentAddressForm(data, properties, lastQuestion);
                break;
            case "incident-pin-map":
                this.componentIncidentPinMap(data, lastQuestion);
                break;
            default:
                this.componentRadio(data, lastQuestion);
                break;
        }
    }
    componentIncidentAddressForm(data, properties, lastQuestion) {
        var self = this;
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        var answerJson = lastQuestion != null ? lastQuestion.currentQuestion.answerJson : "";
        // this.building = '';
        // 	this.landmark = '';
        // 	this.area = '';
        // 	this.city = '';
        // 	this.state = '';
        // 	this.country = '';
        // 	this.latitude = '';
        //   this.longitude = '';
        if (answerJson != "") {
            this.isAccepted = answerJson.isAccepted;
            this.building = answerJson.address.building;
            this.landmark = answerJson.address.landmark;
            this.area = answerJson.address.area;
            this.city = answerJson.address.city;
            this.state = answerJson.address.state;
            this.country = answerJson.address.country;
            this.latitude = answerJson.address.latitude;
            this.longitude = answerJson.address.longitude;
        }
        var locate_add_on_map;
        this.translate.get('locate_add_on_map').subscribe((res) => {
            locate_add_on_map = res;
        });
        var start_typing_select_from_suggestion;
        this.translate.get('start_typing_select_from_suggestion').subscribe((res) => {
            start_typing_select_from_suggestion = res;
        });
        var start_typing;
        this.translate.get('start_typing').subscribe((res) => {
            start_typing = res;
        });
        var map_move_pin;
        this.translate.get('map_move_pin').subscribe((res) => {
            map_move_pin = res;
        });
        var an_exact_location_help_us;
        this.translate.get('an_exact_location_help_us').subscribe((res) => {
            an_exact_location_help_us = res;
        });
        var address_pinned_on_map;
        this.translate.get('address_pinned_on_map').subscribe((res) => {
            address_pinned_on_map = res;
        });
        var univercity_of_glocestershire;
        this.translate.get('univercity_of_glocestershire').subscribe((res) => {
            univercity_of_glocestershire = res;
        });
        var enter_area;
        this.translate.get('enter_area').subscribe((res) => {
            enter_area = res;
        });
        var please_enter_area;
        this.translate.get('please_enter_area').subscribe((res) => {
            please_enter_area = res;
        });
        var enter_building;
        this.translate.get('enter_building').subscribe((res) => {
            enter_building = res;
        });
        var i_confirm;
        this.translate.get('i_confirm').subscribe((res) => {
            i_confirm = res;
        });
        var example_kurla_road;
        this.translate.get('example_kurla_road').subscribe((res) => {
            example_kurla_road = res;
        });
        var the_info_shared;
        this.translate.get('the_info_shared').subscribe((res) => {
            the_info_shared = res;
        });
        var elementHtml = `
    <div class="loctioninput">
    <div class="form-group  loctioninput mb-4">
      <label class="themeColorin m-0 p-0 d-block">${locate_add_on_map}<span class="error red">*</span></label>
       <label class="mb-2 p-0 sub-label d-block">${start_typing_select_from_suggestion}</label>
      <input type="text" class="form-control form-text search_address" id="search_address" name="" placeholder="${start_typing}" value="">
   </div>

   <div class="form-group mb-4">
      <label class="themeColorin m-0 p-0 d-block">${map_move_pin}</label>
       <label class="mb-3 p-0 sub-label d-block">${an_exact_location_help_us}</label>
     <div class="mapouter" style="height:467px">
     </div>
   </div>

   <div class="form-group mb-4">
      <label class="themeColorin m-0 p-0 d-block">${address_pinned_on_map}</label>
       <p class="m-0 pt-0 pinned-add">${univercity_of_glocestershire}</p>
   </div>

   <div class="form-group mb-4">
		 	  <label class="themeColor mb-2 p-0 d-block">${enter_area}<span class="error">*</span></label>
		 	  <input type="text" class="form-control form-text" id="area" placeholder="${please_enter_area}" value="">
      </div>
      
   <div class="form-group loctioninput mb-4">
      <label class="themeColorin mb-2 p-0 d-block">${enter_building}</label>
      <input type="text" class="form-control form-text" id="building_address" placeholder="${example_kurla_road}" value="">
   </div>

   <p class="mt-4 pt-2 lignheight20">
     ${the_info_shared}
   </p>


   <div class="custom-control custom-checkbox newchekdot estimate mt-1">
   <label class="custom-control-label eLabel" for="confirm_address">${i_confirm}
     <input type="checkbox" class="custom-control-input estimate map_estimate" id="confirm_address" ${this.isAccepted ? 'checked' : ''}>
     <span class="checkmark"></span>
     </label>
   </div>
   </div>
		 `;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
        //$(".locality").focus();
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input:text").eq(0).focus();
        // Set Address if any
        if (this.country) {
            self.showAddress();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
        }
        // On Building Address Changed
        jquery__WEBPACK_IMPORTED_MODULE_8__("#building_address , #area").keyup(function (e) {
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id') == 'building_address')
                self.building = jquery__WEBPACK_IMPORTED_MODULE_8__(this).val();
            else if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id') == 'area')
                self.area = jquery__WEBPACK_IMPORTED_MODULE_8__(this).val();
            if (self.area.length == 0) {
                self.area_status = false;
            }
            else {
                self.area_status = true;
            }
            self.showAddress();
            // self.building = $(this).val();
            // self.showAddress();
        });
        // On confirmation change
        jquery__WEBPACK_IMPORTED_MODULE_8__("#confirm_address").change(function (event) {
            self.isAccepted = jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked');
            self.showAddress();
        });
        // Initialize Map and Address Search
        self.initMap('search_address');
    }
    updateMarker() {
        console.log('updating marker');
        console.log(this.latitude, this.longitude);
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        this.mapMarker.setPosition(location);
        this.map.setCenter(location);
    }
    initMap(searchFieldId) {
        var self = this;
        // Enable autocomplete
        if (google) {
            /////////////
            // Set map //
            /////////////
            // console.log(this.latitude)
            // console.log(this.longitude)
            var location = new google.maps.LatLng(this.latitude, this.longitude);
            var options = {
                center: location,
                zoom: 15,
                animation: 'DROP',
                draggable: true,
                fullscreenControl: false,
                gestureHandling: 'cooperative',
                scaleControl: true,
            };
            var map = new google.maps.Map(document.getElementsByClassName("mapouter")[0], options);
            this.map = map;
            ////////////////
            // Set Marker //
            ////////////////
            var mapMarker = new google.maps.Marker({
                position: location,
                // title: marker.title,
                latitude: this.latitude,
                longitude: this.longitude,
                animation: 'DROP',
                draggable: true,
            });
            mapMarker.setMap(map);
            this.mapMarker = mapMarker;
            // On drag end
            google.maps.event.addListener(mapMarker, 'dragend', function () {
                console.log(this.mapMarker);
                var markerlatlong = mapMarker.getPosition();
                self.latitude = JSON.stringify(mapMarker.getPosition().lat());
                self.longitude = JSON.stringify(mapMarker.getPosition().lng());
                // Reverse Geocode to get Address
                self.geocodeLatLng();
            });
            console.log(self.latitude);
            console.log(self.longitude);
            var geocoder = new google.maps.Geocoder();
            this.geocoder = geocoder;
            ///////////////
            // Searchbox //
            ///////////////
            // Create the search box
            const input = document.getElementById(searchFieldId);
            const searchBox = new google.maps.places.SearchBox(input);
            // Bias the SearchBox results towards current map's viewport.
            map.addListener("bounds_changed", () => {
                searchBox.setBounds(map.getBounds());
            });
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();
                console.log(places);
                if (places.length == 0) {
                    self.resetFields("No results found");
                    return;
                }
                var place = places[0];
                // Set Coordinates
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                self.updateMarker();
                var addcomponent = place.address_components;
                // Set Address
                self.setAddress(addcomponent);
                /*places.forEach((place) => {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }

                    latitude  = place.geometry.location.lat();
                    longitude = place.geometry.location.lng();
                });*/
            });
        }
    }
    // Reverse Geocode
    geocodeLatLng() {
        console.log(this.latitude);
        console.log(this.longitude);
        const latlng = {
            lat: parseFloat(this.latitude),
            lng: parseFloat(this.longitude),
        };
        var geocoder = this.geocoder;
        geocoder.geocode({ location: latlng }, (results, status) => {
            console.log(results);
            if (status === "OK") {
                if (results[0]) {
                    // Set Address
                    console.log(results[0].address_components);
                    this.setAddress(results[0].address_components);
                }
                else {
                    this.resetFields("No results found");
                }
            }
            else {
                this.resetFields("Geocoder failed due to: " + status);
            }
        });
    }
    setAddress(addcomponent) {
        // Set Address
        this.building = this.landmark = this.area = this.city = this.state = this.country = "";
        this.building_status = this.landmark_status = this.area_status = this.city_status = this.state_status = this.country_status = false;
        if (addcomponent) {
            var street_number = '';
            var route = '';
            var localbuilding = '';
            this.final_Address = [];
            for (var i = 0; i < addcomponent.length; i++) {
                this.final_Address.push(addcomponent[i].long_name);
                if (addcomponent[i].types[0] == 'country') {
                    this.country = addcomponent[i].long_name;
                    this.country_status = true;
                }
                else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                    this.state = addcomponent[i].long_name;
                    this.state_status = true;
                }
                else if (addcomponent[i].types[0] == 'locality') {
                    this.city = addcomponent[i].long_name;
                    this.city_status = true;
                }
                else if (addcomponent[i].types[0] == 'postal_code') {
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                    this.area = addcomponent[i].long_name;
                    this.area_status = true;
                }
                else if (addcomponent[i].types[0] == "sublocality_level_3" || addcomponent[i].types[0] == "sublocality") {
                    this.landmark = addcomponent[i].long_name;
                    this.landmark_status = true;
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_2') {
                    localbuilding = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'street_number') {
                    street_number = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'route') {
                    route = addcomponent[i].long_name;
                }
            }
            console.log(this.final_Address);
            var addr = this.final_Address.join(',');
            jquery__WEBPACK_IMPORTED_MODULE_8__(".search_address").val(addr);
            jquery__WEBPACK_IMPORTED_MODULE_8__("#area").val(this.area);
            console.log(addr);
            this.building = street_number + ' ' + route;
            this.building = this.building.trim() == '' ? localbuilding : this.building;
        }
        jquery__WEBPACK_IMPORTED_MODULE_8__("#building_address").val(this.building);
        this.showAddress();
    }
    resetFields(message) {
        this.building = this.landmark = this.area = this.city = this.state = this.country = "";
        this.building_status = this.landmark_status = this.area_status = this.city_status = this.state_status = this.country_status = false;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#building_address").val('');
        jquery__WEBPACK_IMPORTED_MODULE_8__("#area").val('');
        jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
        // Show message like Select a valid address
        // Disable next
        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
    }
    showAddress() {
        if (this.latitude != '' && this.longitude != '' && this.country_status == true && this.state_status == true) {
            console.log('else', this.country, this.state);
            if (this.building != '' && this.landmark != '') {
                console.log('else', this.country, this.state);
                // $(".search_address").text(this.building+', '+this.landmark+', '+this.area+', '+this.city+', '+this.state+', '+this.country);        
                jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.building + ', ' + this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
            }
            else if (this.building != '') {
                console.log('else', this.country, this.state);
                /// $(".search_address").text(this.building+','+this.area+', '+this.city+', '+this.state+', '+this.country);        
                jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.building + ',' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
            }
            else if (this.landmark != '') {
                console.log('else', this.country, this.state);
                jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
                //$(".search_address").text(this.landmark+', '+this.area+', '+this.city+', '+this.state+', '+this.country);  
            }
            else if (this.area != '' && this.city != '') {
                console.log('else', this.country, this.state);
                jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
                //$(".search_address").text(this.area+', '+this.city+', '+this.state+', '+this.country);
            }
            else {
                console.log('else', this.country, this.state);
                jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
            }
        }
        else {
            console.log('else', this.country, this.state);
            jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
        }
        if (this.area_status == true && this.isAccepted == true && this.country && this.state) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        }
    }
    initAutoComplete(elementInitial) {
        // Create the autocomplete object, restricting the search predictions to
        // geographical location types.
        var autocomplete = new google.maps.places.Autocomplete(
        // document.getElementById('autocomplete').getElementsByTagName('input')[0],
        document.getElementById(elementInitial + 'building'), {});
        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components.
        autocomplete.setFields(["address_component", "geometry"]);
        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        autocomplete.addListener("place_changed", function () {
            var place = autocomplete.getPlace();
            var latitude = place.geometry.location.lat();
            var longitude = place.geometry.location.lng();
            document.getElementById(elementInitial + 'latitude')['value'] = latitude;
            document.getElementById(elementInitial + 'longitude')['value'] = longitude;
            var addcomponent = place.address_components;
            for (var i = 0; i < addcomponent.length; i++) {
                if (addcomponent[i].types[0] == 'country') {
                    document.getElementById(elementInitial + 'country')['value'] = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'locality') {
                    document.getElementById(elementInitial + 'city')['value'] = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                    document.getElementById(elementInitial + 'state')['value'] = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                    document.getElementById(elementInitial + 'area')['value'] = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_2') {
                    document.getElementById(elementInitial + 'building')['value'] = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'postal_code') {
                    document.getElementById(elementInitial + 'landmark')['value'] = addcomponent[i].long_name;
                }
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            }
        });
    }
    componentIncidentPinMap(data, lastQuestion) {
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        var isAccepted = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isAccepted : false;
        var latitude = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.location.latitude : '';
        var longitude = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.location.longitude : '';
        if (latitude == '' || longitude == '') {
            console.log('map pin', this.selectedAnswers[this.selectedAnswers.length - 1]);
            var prevAnsAdd = this.selectedAnswers[this.selectedAnswers.length - 1].currentQuestion.answerJson.address;
            latitude = prevAnsAdd.latitude;
            longitude = prevAnsAdd.longitude;
        }
        var elementHtml = `
    <div class="text-left">
      <div class="mapouter">
      </div>
    </div>
    <div class="custom-control custom-checkbox estimate">
    <p>The information that you share with us anonymously helps shape policy and decision making. Please confirm that you are submitting information true to your knowledge. You can go back and edit your answers before submitting, if needed. </p>
      <label class="custom-checkbox estimate">
	  
    I confirm
      <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate map_estimate" id="estimate" ${isAccepted ? 'checked' : ''} >
      <span class="checkmark"></span>
	  </label>
    </div>
    <input type="hidden" id="option${data["question"]["id"]}latitude" name="option${data["question"]["id"]}latitude" value="${latitude}">
    <input type="hidden" id="option${data["question"]["id"]}longitude" name="option${data["question"]["id"]}longitude" value="${longitude}">
  `;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        if (isAccepted && latitude != '' && longitude != '')
            //$("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + data["question"]["id"] + 'checked]').change(function (event) {
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked'))
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            else
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        });
        var location = new google.maps.LatLng(latitude, longitude);
        var options = {
            center: location,
            zoom: 15,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false,
            // Disable Zoom and pan
            //gestureHandling: 'none',
            minZoom: 17,
            maxZoom: 22
            //zoomControl: false
        };
        // Set map
        var map = new google.maps.Map(document.getElementsByClassName("mapouter")[0], options);
        // Set Marker
        var mapMarker = new google.maps.Marker({
            position: location,
            // title: marker.title,
            latitude: latitude,
            longitude: longitude,
            animation: 'DROP',
            draggable: true,
        });
        mapMarker.setMap(map);
        // On drag end
        google.maps.event.addListener(mapMarker, 'dragend', function () {
            var markerlatlong = mapMarker.getPosition();
            var lat = JSON.stringify(mapMarker.getPosition().lat());
            var lng = JSON.stringify(mapMarker.getPosition().lng());
            jquery__WEBPACK_IMPORTED_MODULE_8__("option" + data["question"]["id"] + "latitude").val(lat);
            jquery__WEBPACK_IMPORTED_MODULE_8__("option" + data["question"]["id"] + "longitude").val(lng);
            console.log(lat, lng);
        });
    }
    componentCheckbox(data, lastQuestion) {
        var selectedAnswerId = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
        var selectedAnswerArr = selectedAnswerId == null ? [] : selectedAnswerId.split(',');
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        var elementHtml = `<div class="row">`;
        var i = 0;
        if (data["question"].is_category == true) {
            var data_options = [];
            var categories = this.category;
            categories.forEach(function (category) {
                data_options.push({
                    'id': category.id,
                    'textbox_placeholder': null,
                    'title': category.title,
                    'parent_id': category.parent_id,
                    'is_main': category.is_main
                });
            });
            data["options"] = data_options;
        }
        var thisQuestion = this.dynamicQuestionOptionJson[data["question"]["id"]];
        var hasSuboptions = thisQuestion['suboptions'] == undefined ? false : true;
        data["options"].sort(function (a, b) {
            return a.order_no - b.order_no;
        });
        data["options"].forEach(function (option) {
            if (option.title != null) {
                var showTextbox = option.textbox_placeholder != null;
                var isSelected = selectedAnswerArr.includes(option.id);
                var includesSuboptions = hasSuboptions ? thisQuestion["suboptions"][option.id] != undefined ? true : false : false;
                if (!hasSuboptions)
                    elementHtml += `<div class="col-md-6">`;
                elementHtml += `
				<div class="inputGroup custom-control shareincidentform">
				  <input type="checkbox" id="${option.id}" data-id="1"  name="option${data["question"]["id"]}" class="custom-control-input getAttr dynamic-checkbox" value="${option.id}" data-parentid="${option.parent_id}" data-ismain="${option.is_main}" data-val="${option.title[0].toUpperCase() + option.title.substr(1)}" data-hasSuboptions="${includesSuboptions}" data-showtextbox="${showTextbox}" ${isSelected ? "checked" : ""}>
				  <label class="custom-control-label label1" for="${option.id}">${option.title[0].toUpperCase() + option.title.substr(1)}</label>
				</div>
			`;
                if (showTextbox) {
                    var text_placeholder = option.textbox_placeholder;
                    try {
                        console.log('in');
                        var text_properties = JSON.parse(option.textbox_placeholder);
                        console.log(text_properties);
                        text_placeholder = text_properties.placeholder;
                        console.log(text_placeholder);
                        console.log(text_properties.validations[0]);
                        // this.text_field_required_msg = text_properties.validations[0].message;
                        // console.log(this.text_field_required_msg)
                        // this.text_field_valid_msg = text_properties.validations[1].message;
                        // console.log(this.text_field_valid_msg)
                    }
                    catch (e) {
                        console.log(e);
                        console.log('out', option);
                        text_placeholder = option.textbox_placeholder;
                        console.log(text_placeholder);
                    }
                    var otheranswers = selectedAnswerId != null ? lastQuestion.currentQuestion.answerJson.other_answers : null;
                    var othertextval = otheranswers != null && otheranswers[option.id] != undefined ? otheranswers[option.id] : "";
                    elementHtml += `
				<input type="text" class="form-control input1 specifyBox1 shareincidentform ${isSelected ? "" : "d-none"}" name="option${option.id}textbox" placeholder="${text_placeholder}" value="${othertextval}">
				`;
                }
                else if (hasSuboptions && includesSuboptions) {
                    elementHtml += `<ul id="suboption-container-${option.id}" style="${isSelected ? '' : 'display:none'}" class="custom-radio-inside suboption-container">`;
                    var subOptionProperties = JSON.parse(option.suboption_properties);
                    thisQuestion['suboptions'][option.id].forEach(function (suboption) {
                        var isSuboptionSelected = selectedAnswerArr.includes(suboption.id);
                        if (subOptionProperties.type == 'checkbox') {
                            elementHtml += `
							<li>
							  <div class="inputGroup custom-control shareincidentform">
							    <input type="checkbox" id='${suboption.id}' name="option${data["question"]["id"]}" class="custom-control-input" value="${suboption.id}" data-parentid="${suboption.parent_id}" data-ismain="${suboption.is_main}" data-val="${suboption.title}" data-hasSuboptions="false" data-showtextbox="false" ${isSuboptionSelected ? "checked" : ""} >
							    <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
							  </div>
							</li>`;
                        }
                        else {
                            elementHtml += `
							<li>
		                      <div class="inputGroup custom-control shareincidentform">
		                        <input type="radio" id='${suboption.id}' name="suboption${option.id}" class="custom-control-input" value="${suboption.id}"  data-val="${suboption.title}" ${isSuboptionSelected ? "checked" : ""}>
		                        <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
		                      </div>
		                    </li>`;
                        }
                    });
                    elementHtml += `</ul>`;
                }
                if (!hasSuboptions)
                    elementHtml += `</div>`;
            }
        });
        elementHtml += `</div>`;
        console.log(elementHtml);
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=checkbox]").click(function (event) {
            // if (($('input:checkbox:checked').length) > 0) {
            //   console.log('in')
            //   $("#dynamicNext").removeAttr("disabled");
            // }
            // else {
            //   $("#dynamicNext").attr("disabled", "disabled");
            // }
            var optionid = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id');
            console.log(optionid);
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) {
                //var optionid = $(this).attr('id');
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                    console.log('show a textbox F');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").removeClass('d-none');
                }
                else {
                    console.log('hide a textbox F');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").addClass('d-none');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox]+.validdation_text").remove();
                }
            }
            // Handle suboptions toggle
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('hassuboptions') == true) {
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).fadeIn('slow');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).fadeOut('slow');
                    // Uncheck all suboptions
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid + " input[type=checkbox]").prop('checked', false);
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid + " input[type=radio]").prop('checked', false);
                }
            }
            // Run Validation
            console.log(self.text_field_required_msg);
            self.validate(optionid);
        });
        // Run Validation on textbox
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").keyup(function (event) {
            self.validate(null);
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").change(function (event) {
            self.validate(null);
        });
        // Run validation on suboption radio click
        jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input[type=radio]").click(function (event) {
            self.validate(null);
        });
        // Add new event listener
        // $("#dynamicNext").off('click').click(function(event) {
        // 	event.preventDefault();
        // 	var is_valid = self.validate();
        // 	if(is_valid)
        // 		nextClick();
        // });
    }
    validate(clickedId) {
        var self = this;
        var is_valid = true;
        var total_checked = jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=checkbox]:checked").length;
        if (total_checked == 0) {
            is_valid = false;
        }
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=checkbox]:checked").each(function (index, el) {
            var parentOptionId = jquery__WEBPACK_IMPORTED_MODULE_8__(el).attr('id');
            // Check for suboptions validity
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('hassuboptions') == true) {
                if (jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + parentOptionId + " input:checked").length == 0)
                    is_valid = false;
            }
            // Check for other textbox validity
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('showtextbox') == true) {
                var textboxSelector = 'input[name=option' + parentOptionId + 'textbox]';
                console.log(self.ValidateText(jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + parentOptionId + 'textbox]').val()));
                if (!self.ValidateText(jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + parentOptionId + 'textbox]').val())) {
                    is_valid = false;
                    if (clickedId != parentOptionId || clickedId == null) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').length == 0)
                            jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector).after('<div class="validdation_text" style="color:red;">' + self.text_field_required_msg + '</div>');
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').remove();
                }
            }
        });
        if (!is_valid)
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        else
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
        return is_valid;
    }
    ValidateText(value) {
        //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
        var regex = /^[\w\s.-]+$/;
        //Validate TextBox value against the Regex.
        var isValid = regex.test(value);
        /*if (!isValid) {
            alert("Contains Special Characters.");
        } else {
            alert("Does not contain Special Characters.");
        }*/
        return isValid;
    }
    componentRadio(data, lastQuestion) {
        console.log(data);
        var self = this;
        var selectedAnswerId = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
        var selectedAnswerArr = selectedAnswerId == null ? [] : selectedAnswerId.split(',');
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        var thisQuestion = this.dynamicQuestionOptionJson[data["question"]["id"]];
        var hasSuboptions = thisQuestion['suboptions'] == undefined ? false : true;
        var optionHtml = "";
        data["options"].sort(function (a, b) {
            return a.order_no - b.order_no;
        });
        data["options"].forEach(function (option) {
            if (option.title != null) {
                var showTextbox = option.textbox_placeholder != null;
                var isSelected = selectedAnswerArr.includes(option.id);
                var includesSuboptions = hasSuboptions ? thisQuestion["suboptions"][option.id] != undefined ? true : false : false;
                optionHtml += `
				<div class="inputGroup custom-control">
				  <input type="radio" data-option_tag="${option.tags}" id="${option.id}" name="option${data["question"]["id"]}" class="custom-control-input dynamic-radio" data-val="${option.title[0].toUpperCase() + option.title.substr(1)}"  data-hasSuboptions="${includesSuboptions}" value="${option.id}" 
			${isSelected ? "checked" : ""}
			data-showtextbox="${showTextbox}">
				  <label class="custom-control-label label1" for="${option.id}">${option.title[0].toUpperCase() + option.title.substr(1)}</label>
				</div>
			`;
                if (showTextbox) {
                    var text_placeholder = option.textbox_placeholder;
                    console.log('****', option);
                    console.log('****', text_placeholder);
                    try {
                        console.log('in');
                        var text_properties = JSON.parse(option.textbox_placeholder);
                        console.log('****', text_properties);
                        text_placeholder = text_properties.placeholder;
                        self.text_field_required_msg = text_properties.validations[0].message;
                        self.text_field_valid_msg = text_properties.validations[1].message;
                    }
                    catch (e) {
                        console.log('out');
                        text_placeholder = option.textbox_placeholder;
                    }
                    var otheranswers = selectedAnswerId != null ? lastQuestion.currentQuestion.answerJson.other_answers : null;
                    var othertextval = otheranswers != null && otheranswers['answer_id'] != undefined ? otheranswers['answer_id'] : "";
                    optionHtml += `
				<input type="text" class="form-control input1 specifyBox1 dynamic-radio-textbox ${isSelected ? "" : "d-none"}" name="option${option.id}textbox" placeholder="${text_placeholder}" value="${othertextval}">
				`;
                }
                else if (hasSuboptions && thisQuestion["suboptions"][option.id] != undefined) {
                    optionHtml += `<ul id="suboption-container-${option.id}" class="custom-radio-inside specifyBoxradio suboption-container" style="${isSelected ? '' : 'display:none'}"`;
                    var subOptionProperties = JSON.parse(option.suboption_properties);
                    thisQuestion['suboptions'][option.id].forEach(function (suboption) {
                        var isSuboptionSelected = selectedAnswerArr.includes(suboption.id);
                        if (subOptionProperties.type == 'checkbox') {
                            optionHtml += `
							<li>
							  <div class="inputGroup custom-control shareincidentform">
							    <input type="checkbox" id='${suboption.id}' name="suboption${option.id}checkbox" class="custom-control-input" value="${suboption.id}" data-parentid="${suboption.parent_id}" data-ismain="${suboption.is_main}" data-val="${suboption.title}" data-hasSuboptions="false" data-showtextbox="false" ${isSuboptionSelected ? "checked" : ""} >
							    <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
							  </div>
							</li>`;
                        }
                        else {
                            if (suboption.textbox_placeholder == null) {
                                optionHtml += `
							<li>
		                      <div class="inputGroup custom-control shareincidentform">
		                        <input type="radio" id='${suboption.id}' name="option${option.id}radio" class="custom-control-input dynamic-radio-suboption" value="${suboption.id}"  data-val="${suboption.title}" ${isSuboptionSelected ? "checked" : ""}>
		                        <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
		                      </div>
		                    </li>`;
                            }
                            else {
                                optionHtml += `
							<li>
		                      <div class="inputGroup custom-control shareincidentform">
		                        <input type="radio" id='${suboption.id}' name="option${option.id}radio" class="custom-control-input dynamic-radio-suboption" value="${suboption.id}"  data-val="${suboption.title}" ${isSuboptionSelected ? "checked" : ""} data-showtextbox="true" data-option_tag="null">
		                        <label class="custom-control-label label1" for="${suboption.id}" >${suboption.title}</label>
		                      </div>
		                    </li>`;
                                optionHtml += `
							<input type="text" id="dynamic-radio-textbox-suboption_id" class="form-control input1 specifyBox1 dynamic-radio-textbox-suboption ${isSuboptionSelected ? "" : "d-none"}" name="option${suboption.id}textbox" placeholder="${suboption.textbox_placeholder}" value="">
							`;
                            }
                        }
                    });
                    optionHtml += `</ul>`;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(optionHtml);
        jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio").click(function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-textbox").addClass('d-none');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
            // console.log('option'+ data.options[0].id)
            // var answer_id = $("input[name=" + 'option'+ data.options[0].id + "]:checked").val();
            // var answer = $("input[name="+ 'option'+ data.options[0].id+ "]:checked").data('val');
            // console.log(answer)
            //  // Someone Else
            //  if(answer == 'Someone Else')
            //  {
            //      self.verifyAlert()
            //  }
            var optionid = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id');
            // Handle other textbox toggle
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) {
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").removeClass('d-none');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").addClass('d-none');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox]+.validdation_text").remove();
                }
            }
            //Pop-up window information if sharing for someone else
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('option_tag') == 'report_for_someone_else') {
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                    console.log('someone else');
                    self.verifyAlert();
                }
            }
            // Handle suboptions toggle
            if (!jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).is(':visible')) {
                // Hide all sub options first
                jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container").fadeOut('slow');
                jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input[type=checkbox]").prop('checked', false);
                jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input[type=radio]").prop('checked', false);
                // Show sub option if current selection has one
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('hassuboptions') == true && jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked'))
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).fadeIn('slow');
            }
            // Run Validation
            self.validate_radio_sub_option(optionid);
        });
        //for suboption other radion button
        //ngo selection
        jquery__WEBPACK_IMPORTED_MODULE_8__("body").on('click', '#suboption-container-642 .dynamic-radio-suboption', function () {
            var ngoId = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id');
            jquery__WEBPACK_IMPORTED_MODULE_8__('#options [data-val="An NGO"]').val(ngoId);
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-suboption").click(function (event) {
            var suboptionid = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id');
            // Handle other textbox toggle
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-textbox-suboption").removeClass('d-none');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-textbox-suboption").addClass('d-none');
                jquery__WEBPACK_IMPORTED_MODULE_8__('#dynamic-radio-textbox-suboption_id').val('');
            }
            // Run Validation
        });
        // $(".dynamic-radio-suboption").click(function(event) {
        // 	var suboptionid = $(this).attr('id');
        //   console.log('suboption id',suboptionid)
        // 	// Handle other textbox toggle
        // 	if($(this).data('showtextbox')==true) {
        // 		$("#dynamicNext").attr("disabled", "disabled");
        // 		$(".dynamic-radio-textbox-suboption").removeClass('d-none');
        // 	}else{
        // 		$(".dynamic-radio-textbox-suboption").addClass('d-none');
        //     // $("input[name=option"+suboptionid+"textbox]+.dynamic-radio-textbox-suboption").remove();
        // 	}
        // 	// Run Validation
        // });
        // Run validation on suboption click
        jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input").click(function (event) {
            self.validate_radio_sub_option(null);
        });
        // Run Validation on textbox
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").keyup(function (event) {
            self.validate_radio_sub_option(null);
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").change(function (event) {
            self.validate_radio_sub_option(null);
        });
    }
    validate_radio_sub_option(clickedId) {
        var is_valid = true;
        var self = this;
        var total_checked = jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=radio]:checked").length;
        if (total_checked == 0) {
            is_valid = false;
        }
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=radio]:checked").each(function (index, el) {
            var parentOptionId = jquery__WEBPACK_IMPORTED_MODULE_8__(el).attr('id');
            // Check for suboptions validity
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('hassuboptions') == true) {
                if (jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + parentOptionId + " input:checked").length == 0)
                    is_valid = false;
            }
            // Check for other textbox validity
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('showtextbox') == true) {
                var textboxSelector = 'input[name=option' + parentOptionId + 'textbox]';
                if (!self.ValidateText(jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + parentOptionId + 'textbox]').val())) {
                    // Check if textbox is shown just now (not dirty)
                    is_valid = false;
                    if (clickedId != parentOptionId || clickedId == null) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').length == 0)
                            jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector).after('<div class="validdation_text" style="color:red;">' + self.text_field_required_msg + '</div>');
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').remove();
                }
            }
        });
        if (!is_valid)
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        else
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
        return is_valid;
    }
    /** Custom components */
    componentText(data, properties, lastQuestion) {
        var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        /*var attr = properties.validations;
        if (typeof attr !== typeof undefined && attr !== false) {
            console.log(attr);
        }*/
        console.log(properties.validations.length);
        if (properties.validations.length == 4) {
            var validation_type = properties.validations[1].type != null ? properties.validations[1].type : "text";
            var number_req_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][0]["message"] + '</div>';
            var number_type_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][1]["message"] + '</div>';
            var number_min_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][2]["message"] + '</div>';
            var number_max_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][3]["message"] + '</div>';
        }
        else {
            var number_req_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][0]["message"] + '</div>';
            var text_alpha_valid_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][1]["message"] + '</div>';
        }
        console.log(validation_type);
        if (validation_type == 'number') {
            var elementHtml = `<input type="${properties.validations[1].type}" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" min="${properties.validations[2].min}" max="${properties.validations[3].max}" >`;
        }
        else {
            var elementHtml = `<input type="text" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" >`;
        }
        //var elementHtml = `<input type="text" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" >`;
        //console.log(elementHtml);
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
        jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').focus();
        jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").change(function (e) {
            console.log('20202020202020202020202020');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
            if (validation_type == 'number') {
                var input_val = jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val();
                if (input_val) {
                    if (input_val < 18) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_min_msg + '</div>');
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                    }
                    else if (input_val > 120) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_max_msg + '</div>');
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;" >' + number_type_msg + '</div>');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                if ((jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val()) != "") {
                    // let txt_value = JSON.stringify($(".inputBox").val());
                    // console.log(JSON.parse(txt_value))
                    // var regex = /^[\w\s.-]+$/
                    // var value1 = JSON.parse(txt_value)
                    // //Validate TextBox value against the Regex.
                    // var isValid = regex.test(value1);
                    // console.log(isValid)
                    // if (isValid) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                    // }
                    // else {
                    //   $('#options').append('<div class="validdation_text" style="color:red;">' + text_alpha_valid_msg + '</div>');
                    //   $("#dynamicNext").attr("disabled", "disabled");
                    // }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('#options').append('<div class="validdation_text" style="color:red;">' + number_req_msg + '</div>');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").keyup(function (e) {
            console.log('20202020202020202020202020');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
            if (validation_type == 'number') {
                var input_val = jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val();
                if (input_val) {
                    if (input_val < 18) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_min_msg + '</div>');
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                    }
                    else if (input_val > 120) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_max_msg + '</div>');
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;" >' + number_type_msg + '</div>');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                if ((jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val()) != "") {
                    // let txt_value = JSON.stringify($(".inputBox").val());
                    // console.log(JSON.parse(txt_value))
                    // var regex = /^[\w\s.-]+$/
                    // var value1 = JSON.parse(txt_value)
                    // //Validate TextBox value against the Regex.
                    // var isValid = regex.test(value1);
                    // console.log(isValid)
                    // if (isValid) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                    // }
                    // else {
                    //   $('#options').append('<div class="validdation_text" style="color:red;">' + text_alpha_valid_msg + '</div>');
                    //   $("#dynamicNext").attr("disabled", "disabled");
                    // }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('#options').append('<div class="validdation_text" style="color:red;">' + number_req_msg + '</div>');
                    jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                }
            }
        });
    }
    /** Get Todays date helper */
    getTodayDate(format) {
        var date = new Date().toJSON().slice(0, 10);
        console.log(date);
        switch (format) {
            case 'Y-m-d':
                return date;
            case 'd-m-Y':
                return date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
            case 'm-d-Y':
                return date.slice(5, 7) + '/' + date.slice(8, 10) + '/' + date.slice(0, 4);
            default:
                return date;
        }
    }
    componentEstimateDatepicker(data, lastQuestion) {
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
        var isEstimate = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isEstimate : false;
        var elementHtml = "";
        // var setDate = answer == "" ? this.getTodayDate('Y-m-d') : answer;
        var de = new Date();
        var d = new Date(de), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        var date = [year, month, day].join('-');
        console.log(date);
        var select_date;
        this.translate.get('select_date').subscribe((res) => {
            select_date = res;
        });
        var this_is_an_estimate;
        this.translate.get('this_is_an_estimate').subscribe((res) => {
            this_is_an_estimate = res;
        });
        elementHtml = `<ion-list>
  <ion-item class="newtextthree">
 <ion-label position="stacked">${select_date}</ion-label>
   <!-- <ion-img width="24" height="24" src="assets/images/icons/calendar.svg" tappable item-right> </ion-img>  -->
 <div class="new">
 <ion-datetime  displayFormat="YYYY-MM-DD" id="datetimepicker" name="option${data["question"]["id"]}" data-target="#datetimepicker" data-target="#datetimepicker" data-toggle="datetimepicker" [dayShortNames]="customDayShortNames"
  placeholder="${select_date}"  max="${date}"></ion-datetime>
<ion-icon name="" class="newcal" slot="end"></ion-icon>
</div>

</ion-item>

</ion-list>
<label class="custom-checkbox estimate">
${this_is_an_estimate}
  <input type="checkbox"  class="custom-control-input estimate" id="estimate"  name="option${data["question"]["id"]}checked" ${isEstimate ? "checked" : ""}>
  <span class="checkmark"></span>

                     </label>
                     `;
        // `<div class="input-group date selectDate" id="datetimepicker" data-target-input="nearest">
        //                       <input type="text" class="form-control datetimepicker-input getDate"  name="option${data["question"]["id"]}" data-target="#datetimepicker">
        //                       <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
        //                         <div class="input-group-text"> <img src="assets/images/calender.png" class="img-fluid"></div>
        //                       </div>
        //                     </div>
        //                     <div class="custom-control custom-checkbox estimate">
        //                       <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate" id="estimate" ${isEstimate?"checked":""}>
        //                       <label class="custom-control-label eLabel" for="estimate">This is an estimate</label>
        //                     </div>`;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
        // Initialize Datepicker
        var todaydate = new Date();
        // $('#datetimepicker').datetimepicker({
        //      format: 'L', 
        //      todayHighlight: true,
        //      showClose: true,
        //      toolbarplacement: 'bottom',
        //      showClear: true,
        //      //showClose: true,
        //      endDate: todaydate,
        //      maxDate: todaydate,
        //      icons: { 
        //        close: 'OK'
        //      },
        //      // debug: true
        // });
        //$('#datetimepicker').data("datetimepicker").date(setDate);
        jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
        jquery__WEBPACK_IMPORTED_MODULE_8__("#datetimepicker").click(function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
        });
    }
    componentEstimateTimeOrRangepicker(data, lastQuestion) {
        this.currentQuestion['elementId'] = "option" + data["question"]["id"];
        var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
        var selectedTime = answer != "" && !answer.includes("-") ? answer : "";
        var selectedStarTime = answer.includes("-") ? answer.split("-")[0] : "";
        var selectedEndTime = answer.includes("-") ? answer.split("-")[1] : "";
        var isEstimate = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isEstimate : false;
        var elementHtml = "";
        var select_time;
        this.translate.get('select_time').subscribe((res) => {
            select_time = res;
        });
        var select_time_range;
        this.translate.get('select_time_range').subscribe((res) => {
            select_time_range = res;
        });
        var clear_time;
        this.translate.get('clear_time').subscribe((res) => {
            clear_time = res;
        });
        var clear_time_range;
        this.translate.get('clear_time_range').subscribe((res) => {
            clear_time_range = res;
        });
        var or;
        this.translate.get('or').subscribe((res) => {
            or = res;
        });
        var this_is_an_estimate;
        this.translate.get('this_is_an_estimate').subscribe((res) => {
            this_is_an_estimate = res;
        });
        var to;
        this.translate.get('to').subscribe((res) => {
            to = res;
        });
        elementHtml = `
    
  <ion-row>
        <ion-col size="12">
  <div class="newtextfour">
 
  <ion-row class="mainTime" >
        <ion-col size="12">
   <ion-list>
     <ion-item>
    <ion-label position="stacked" >${select_time}</ion-label>
       <div class="new">
     <ion-datetime class="input-group-append timePick timepicker" id="timepicker"  picker-format="hh : mm A" display-format="hh : mm A" name="option${data["question"]["id"]}" placeholder=${select_time} ></ion-datetime>
     <ion-icon name="" class="newtime" slot="end"></ion-icon>
     
     </div>
       </ion-item>
    <ion-item class="newclearitem">
    <p  class="clearTime themeColor newclear" >${clear_time}</p>
       </ion-item>
  <label class="custom-checkbox estimate">
${this_is_an_estimate}
  <input type="checkbox" class="estimate1" id="estimate1" name="option${data["question"]["id"]}checked" ${isEstimate ? "checked" : ""}>
  <span class="checkmark"></span>

                     </label>
   
  </ion-list>
  </ion-col>
     </ion-row>
        <ion-row>
        <ion-col size="12">
      <div class="newadd">${or}</div>
      </ion-col>
     </ion-row>

     <ion-row class="timeRange">
        <ion-col size="12">
  <ion-list>
  <ion-list-header >
    <ion-label class="topmargin" >${select_time_range}</ion-label>
  </ion-list-header>
   <ion-item class="timenext">
  
       <div class="new">
     <ion-datetime id="timepicker1" class="input-group-append rangeTime selectTime startTime"   picker-format="hh : mm A" display-format="hh : mm A" name="option${data["question"]["id"]}start" placeholder=${select_time} ></ion-datetime>
     <ion-icon name="" class="newtime" slot="end" ></ion-icon>
     </div>
  </ion-item >
    <ion-item class="newarea">
    <ion-label position="stacked" >${to}</ion-label>
  </ion-item >
    <ion-item class="timenext">
    
    <div class="new">
     <ion-datetime id="timepicker2" class="input-group-append rangeTime selectTime endTime"   picker-format="hh : mm A" display-format="hh : mm A" name="option${data["question"]["id"]}end" placeholder=${select_time}  ></ion-datetime>
     <ion-icon name="" class="newtime" slot="end"></ion-icon>
     </div>
  
  </ion-item>
  <ion-item class="newclear">
  <p class="clearTimeRange themeColor newclear"  >${clear_time_range}</p>
  </ion-item>
  </ion-list>
  
  </ion-col>
     </ion-row>
     </div>
      </ion-col>
     </ion-row>`;
        // `<div class="mainTime">
        //                   <div class="row">
        //                     <div class="col-md-8">
        //                       <div class="input-group date selectTime" id="timepicker" data-target-input="nearest">
        //                         <input type="text" class="form-control datetimepicker-input timepicker" name="option${data["question"]["id"]}" data-target="#timepicker" value=""/>
        //                         <div class="input-group-append timePick" data-target="#timepicker" data-toggle="datetimepicker">
        //                           <div class="input-group-text">
        //                             <img src="assets/images/timer.png" class="img-fluid">
        //                           </div>
        //                         </div>
        //                       </div>
        //                     </div>
        //                     <div class="col-md-4">
        //                       <a class="clearTime btn animated fadeInUp pull-right mt-0 themeColor">Clear Time</a>
        //                     </div>
        //                   </div>
        //                   <div class="custom-control custom-checkbox estimate mb-20">
        //                     <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate1" id="estimate1" ${isEstimate?"checked":""}>
        //                     <label class="custom-control-label eLabel" for="estimate1">This is an estimate</label>
        //                   </div>
        //                 </div>
        //                 <div class="timeRange">
        //                   <div class="text-center">
        //                     <label class="themeColor">OR</label>
        //                   </div>
        //                   <div class="row">
        //                     <div class="col-md-12">
        //                       <label>
        //                         <h6 class="textColor">Select a Time Range</h6>
        //                       </label>
        //                     </div>
        //                     <div class="col-md-12">
        //                       <div class="row">
        //                         <div class="col-md-12">
        //                           <div class="row">
        //                             <div class="col-md-8">
        //                               <div class="col-md-5 p-0 float-left">
        //                                 <div class="input-group date selectTime" id="timepicker1" data-target-input="nearest">
        //                                   <input type="text" name="option${data["question"]["id"]}start" class="form-control datetimepicker-input startTime" data-target="#timepicker1" value=""/>
        //                                   <div class="input-group-append rangeTime" data-target="#timepicker1" data-toggle="datetimepicker">
        //                                     <div class="input-group-text"><img src="assets/images/timer.png" class="img-fluid"></div>
        //                                   </div>
        //                                 </div>
        //                               </div>
        //                               <div class="col-md-2 text-center p-0 float-left">
        //                                 <span class="themeColor">To</span>
        //                               </div>
        //                               <div class="col-md-5 p-0 float-left">
        //                                 <div class="input-group date selectTime" id="timepicker2" data-target-input="nearest">
        //                                   <input type="text" name="option${data["question"]["id"]}end" class="form-control datetimepicker-input endTime" data-target="#timepicker2" value=""/>
        //                                   <div class="input-group-append rangeTime" data-target="#timepicker2" data-toggle="datetimepicker">
        //                                     <div class="input-group-text"><img src="assets/images/timer.png" class="img-fluid"></div>
        //                                   </div>
        //                                 </div>
        //                               </div>
        //                             </div>
        //                             <div class="col-md-4">
        //                               <a class="clearTimeRange btn animated fadeInUp pull-right mt-0 themeColor">Clear Time Range</a>
        //                             </div>
        //                           </div>
        //                         </div>
        //                       </div>
        //                     </div>
        //                   </div> 
        //                 </div>
        //               `;
        jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
        // Intialize Timepickers
        //   $('#timepicker').datetimepicker({
        //     format: 'LT',
        //   });
        // $('#timepicker').data("datetimepicker").date(selectedTime);
        //   $('#timepicker1').datetimepicker({
        //     format: 'LT',
        //   });
        // $('#timepicker1').data("datetimepicker").date(selectedStarTime);
        //   $('#timepicker2').datetimepicker({
        //     format: 'LT',
        //   });
        // $('#timepicker2').data("datetimepicker").date(selectedEndTime);
        // // Hide a picker if ones value is already selected
        // if (selectedTime != "") {
        //   $('.timeRange').css('opacity', '0.2').css('pointer-events', 'none');
        //   //$("#dynamicNext").removeAttr("disabled");
        // } else if (selectedStarTime != "" && selectedEndTime != "") {
        //   $('.mainTime').css('opacity', '0.2').css('pointer-events', 'none');
        //   //$("#dynamicNext").removeAttr("disabled");
        // }
        // Hide/show other picker based on selections
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_8__(".timePick").change(function (e) {
            let answer1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + self.currentQuestion['elementId'] + "]").val();
            console.log(answer1);
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__(".timePick").click(function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_8__('.startTime').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.endTime').val('');
            console.log('in');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').css('opacity', '0.2').css('pointer-events', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_8__(".timeRange_valid").remove();
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__(".clearTime").click(function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timepicker').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.estimate1').prop('checked', false);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').css('opacity', '1').css('pointer-events', 'all');
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__(".rangeTime").click(function (e) {
            console.log(e);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timepicker').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.estimate1').prop('checked', false);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.mainTime').css('opacity', '0.2').css('pointer-events', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_8__(".timeRange_valid").remove();
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
        });
        jquery__WEBPACK_IMPORTED_MODULE_8__(".clearTimeRange").click(function (e) {
            console.log(e);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.startTime').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.endTime').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.mainTime').css('opacity', '1').css('pointer-events', 'all');
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
        });
    }
};
PrimaryformPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PrimaryformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-primaryform',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./primaryform.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/primaryform/primaryform.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./primaryform.page.scss */ "./src/app/primaryform/primaryform.page.scss")).default]
    })
], PrimaryformPage);



/***/ })

}]);
//# sourceMappingURL=primaryform-primaryform-module-es2015.js.map