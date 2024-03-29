(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editreport-editreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editreport/editreport.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editreport/editreport.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons> \n<ion-title><div class=\"ion-text-wrap\">{{'edit_incident' | translate}}</div></ion-title>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"newbgin\">\n<ion-row>\n      <ion-col col-12>\n<ion-list>\n\n  <div id=\"edit_div\" class=\"forminci\" >\n                                        \n  </div>\n\n <!-- <ion-item>\n    <ion-label position=\"stacked\">Who are you reporting for?</ion-label>\n    <ion-select  >\n      <ion-select-option value=\"my\">Myself</ion-select-option>\n      <ion-select-option value=\"someone\">Someone else</ion-select-option>\n    </ion-select>\n  </ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Can you help us categorize the incident?</ion-label>\n  <ion-select >\n      <ion-select-option value=\"my\">Catcalling | Staring</ion-select-option>\n      <ion-select-option value=\"someone\">Someone else</ion-select-option>\n    </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">How old are you?</ion-label>\n  <ion-input type=\"text\"  ></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Please tell us your gender</ion-label>\n  <ion-select >\n      <ion-select-option value=\"male\">Male</ion-select-option>\n      <ion-select-option value=\"female\">Female</ion-select-option>\n\t  <ion-select-option value=\"others\">Others</ion-select-option>\n\t  <ion-select-option value=\"not\">Prefer not to say</ion-select-option>\n    </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Can you tell us what happened?</ion-label>\n  <ion-textarea rows=\"4\" cols=\"15\" placeholder=\"Enter any notes here...\"></ion-textarea>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">What do you think led to the attack?</ion-label>\n<ion-select >\n      <ion-select-option value=\"gender\">My gender</ion-select-option>\n      <ion-select-option value=\"sexuality\">My sexuality/perceived sexuality</ion-select-option>\n\t  <ion-select-option value=\"religion\">My ethnicity,religion, or caste</ion-select-option>\n\t  <ion-select-option value=\"harasser\">Because the harasser wanted to intimidate me</ion-select-option>\n\t    <ion-select-option value=\"relationship\">Because of my relationship status</ion-select-option>\n\t\t  <ion-select-option value=\"know\">Because the harasser wanted to sexually assault me</ion-select-option>\n\t\t  \t  <ion-select-option value=\"know\">Don’t know</ion-select-option>\n\t\t\t  \t  <ion-select-option value=\"Other\">Other </ion-select-option>\n    </ion-select>\n</ion-item>\n\n<ion-item >\n  <ion-label position=\"stacked\">Have you reported the incident to the police?</ion-label>\n  <ion-input type=\"text\"  ></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Did you receive medical help?</ion-label>\n  <ion-input type=\"text\"  ></ion-input>\n</ion-item>\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">Location where the incident took place</ion-label>\n   <div class=\"newarea\">\n  <ion-input type=\"text\"  ></ion-input>\n   <img  src=\"assets/images/icons/location.svg\"/>\n   </div>\n</ion-item>\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">When did the incident take place?</ion-label>\n  <div class=\"newarea\">\n  <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n  <img  src=\"assets/images/icons/calendar.svg\"/>\n  </div>\n</ion-item>\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">What time did the incident take place?</ion-label>\n  <div class=\"newarea\">\n  <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Select Date\"></ion-datetime>\n   <img src=\"assets/images/icons/time.svg\"/>\n   </div> \n</ion-item>-->\n\t </ion-list>\n\t \n\t  <ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" id=\"saveChanges\" shape=\"round\"  class=\"newbtn\"  (click)=\"final_Submit()\"  >{{\"button_done\"|translate}}</ion-button> \n  </ion-col>\n  </ion-row> \n\t </ion-col>\n    </ion-row>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/editreport/editreport-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/editreport/editreport-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreportPageRoutingModule", function() { return EditreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editreport.page */ "./src/app/editreport/editreport.page.ts");




const routes = [
    {
        path: '',
        component: _editreport_page__WEBPACK_IMPORTED_MODULE_3__["EditreportPage"]
    }
];
let EditreportPageRoutingModule = class EditreportPageRoutingModule {
};
EditreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditreportPageRoutingModule);



/***/ }),

/***/ "./src/app/editreport/editreport.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editreport/editreport.module.ts ***!
  \*************************************************/
/*! exports provided: EditreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreportPageModule", function() { return EditreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editreport-routing.module */ "./src/app/editreport/editreport-routing.module.ts");
/* harmony import */ var _editreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editreport.page */ "./src/app/editreport/editreport.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let EditreportPageModule = class EditreportPageModule {
};
EditreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _editreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditreportPageRoutingModule"]
        ],
        declarations: [_editreport_page__WEBPACK_IMPORTED_MODULE_6__["EditreportPage"]]
    })
], EditreportPageModule);



/***/ }),

/***/ "./src/app/editreport/editreport.page.scss":
/*!*************************************************!*\
  !*** ./src/app/editreport/editreport.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.newbg ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.newbg .in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.newbg.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n}\n\n.newbg ion-select {\n  width: 100%;\n  margin-top: 0;\n  white-space: inherit;\n}\n\n.newbg.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\n.newbgin {\n  width: 100%;\n  height: auto;\n  padding: 0 20px;\n  margin-top: 25px;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.newbg .item .sc-ion-label-ios-h {\n  margin-bottom: 8px;\n}\n\n.newbg .item .sc-ion-label-md-h {\n  margin-bottom: 8px;\n}\n\n.newbg ion-textarea {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.newbg .alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.newbg .alert-radio-label.sc-ion-alert-ios {\n  white-space: inherit;\n}\n\nion-alert.alert-radio-button {\n  white-space: inherit !important;\n}\n\n.my-custom-class .alert-radio-button {\n  border-bottom: 1px solid #ddd;\n}\n\n.newbgin .newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 35px auto 120px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newinput img {\n  margin-top: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  border: 1px solid #ddd;\n  padding: 8px;\n  margin-bottom: 0;\n  border-left: 0;\n  border-radius: 0 3px 3px 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.newarea {\n  display: inline-flex;\n  width: 100%;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n  white-space: inherit;\n  font-size: 15px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.alert-radio-group.alert-radio-label {\n  white-space: inherit;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  transform: inherit;\n  white-space: inherit;\n}\n\n.newinput ion-input {\n  border-radius: 3px 0px 0px 3px;\n}\n\n.newinput ion-datetime {\n  border-radius: 3px 0px 0px 3px;\n}\n\n.newbg ion-datetime {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  width: 100%;\n  --min-height: 40px;\n  --padding-top: 12px;\n}\n\n.newquestion {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHJlcG9ydC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxlZGl0cmVwb3J0XFxlZGl0cmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdHJlcG9ydC9lZGl0cmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURVQTtFQUNBLGNBQUE7QUNQQTs7QURVQTtFQUNBLGdCQUFBO0FDUEE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEU0E7RUFFQSxzQkFBQTtFQUNBLFlBQUE7QUNQQTs7QURVRTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1JGOztBRFdBO0VBQ0MseUJBQUE7QUNSRDs7QURXQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNSRDs7QURXQztFQUVBLHFDQUFBO0VBQ0EseUJBQUE7QUNURDs7QURZQTtFQUNBLFdBQUE7RUFDSSxhQUFBO0VBQ0gsb0JBQUE7QUNURDs7QURZQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYQTs7QURjQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDRyxnQkFBQTtBQ1pIOztBRGVBO0VBQ0Esa0JBQUE7QUNaQTs7QURjQTtFQUNBLGtCQUFBO0FDWEE7O0FEY0E7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0csZ0JBQUE7QUNaSDs7QURlQTtFQUVBLG9CQUFBO0FDYkE7O0FEZ0JBO0VBRUEsb0JBQUE7QUNkQTs7QURpQkE7RUFFQSwrQkFBQTtBQ2ZBOztBRGtCQTtFQUVBLDZCQUFBO0FDaEJBOztBRG1CQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osV0FBQTtFQUNDLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbEJBOztBRHNCQTtFQUNHLGFBQUE7RUFDQyx1QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDSCxxQkFBQTtVQUFBLG9CQUFBO0FDbkJEOztBRHNCQTtFQUVBLG9CQUFBO0VBQ0EsV0FBQTtBQ3BCQTs7QUR1QkE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ3JCQTs7QUR1QkE7RUFJQSxvQkFBQTtBQ3ZCQTs7QUQwQkE7RUFDSSxvQkFBQTtBQ3ZCSjs7QUQwQkE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FDeEJBOztBRDJCQTtFQUVHLDhCQUFBO0FDekJIOztBRDRCQTtFQUVHLDhCQUFBO0FDMUJIOztBRDZCQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtBQzNCSDs7QUQ2QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL2VkaXRyZXBvcnQvZWRpdHJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5pb24tc2VsZWN0IHtcclxuXHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuaGVpZ2h0OjQwcHg7XHJcblxyXG59XHJcbiAgLm5ld2JnIGlvbi1pdGVtXHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld2JnIC5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3YmcuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHQtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG5cdH1cclxuXHJcbi5uZXdiZyBpb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4ubmV3Ymcuc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3YmdpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjBweDtcclxubWFyZ2luLXRvcDoyNXB4O1xyXG59XHJcblxyXG5pb24taW5wdXRcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbi0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi10b3A6MDtcclxuICAgbWluLWhlaWdodDogNDBweFxyXG59XHJcblxyXG4ubmV3YmcgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaHtcclxubWFyZ2luLWJvdHRvbTo4cHg7XHJcbn1cclxuLm5ld2JnIC5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaHtcclxubWFyZ2luLWJvdHRvbTo4cHg7XHJcbn1cclxuXHJcbi5uZXdiZyBpb24tdGV4dGFyZWFcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbi0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi10b3A6MDtcclxuICAgbWluLWhlaWdodDogNDBweFxyXG59XHJcblxyXG4ubmV3YmcgLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZXdiZyAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbmlvbi1hbGVydC5hbGVydC1yYWRpby1idXR0b25cclxue1xyXG53aGl0ZS1zcGFjZTppbmhlcml0IWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtcmFkaW8tYnV0dG9uXHJcbntcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLm5ld2JnaW4gLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDoxMDAlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjM1cHggYXV0byAxMjBweDtcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuLm5ld2lucHV0IGltZ3tcclxuICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcblx0bWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuXHJcbi5uZXdhcmVhXHJcbntcclxuZGlzcGxheTppbmxpbmUtZmxleDtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWhcclxue1xyXG50cmFuc2Zvcm06aW5oZXJpdDtcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuZm9udC1zaXplOjE1cHg7XHJcbn1cclxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZFxyXG57XHJcblxyXG5cclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufSBcclxuXHJcbi5hbGVydC1yYWRpby1ncm91cC5hbGVydC1yYWRpby1sYWJlbHtcclxuICAgIHdoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4ubmV3aW5wdXQgaW9uLWlucHV0XHJcbntcclxuICAgYm9yZGVyLXJhZGl1czozcHggMHB4IDBweCAzcHg7XHJcbn1cclxuXHJcbi5uZXdpbnB1dCBpb24tZGF0ZXRpbWVcclxue1xyXG4gICBib3JkZXItcmFkaXVzOjNweCAwcHggMHB4IDNweDtcclxufVxyXG5cclxuLm5ld2JnIGlvbi1kYXRldGltZVxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxubWFyZ2luLXRvcDowO1xyXG53aWR0aDoxMDAlO1xyXG4gICAtLW1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuLm5ld3F1ZXN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5uZXdiZyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdiZyAuaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4ubmV3YmcuaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5uZXdiZyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4ubmV3Ymcuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgIWltcG9ydGFudDtcbn1cblxuLm5ld2JnaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLm5ld2JnIC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5uZXdiZyAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5uZXdiZyBpb24tdGV4dGFyZWEge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi5uZXdiZyAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5uZXdiZyAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG5pb24tYWxlcnQuYWxlcnQtcmFkaW8tYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtcmFkaW8tYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5uZXdiZ2luIC5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzNXB4IGF1dG8gMTIwcHg7XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdpbnB1dCBpbWcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbi5uZXdhcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uYWxlcnQtcmFkaW8tZ3JvdXAuYWxlcnQtcmFkaW8tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLm5ld2lucHV0IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcbn1cblxuLm5ld2lucHV0IGlvbi1kYXRldGltZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcbn1cblxuLm5ld2JnIGlvbi1kYXRldGltZSB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLm5ld3F1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/editreport/editreport.page.ts":
/*!***********************************************!*\
  !*** ./src/app/editreport/editreport.page.ts ***!
  \***********************************************/
/*! exports provided: EditreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreportPage", function() { return EditreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







let EditreportPage = class EditreportPage {
    constructor(route, translate, navController, sharedservice, router, httpClient) {
        this.route = route;
        this.translate = translate;
        this.navController = navController;
        this.sharedservice = sharedservice;
        this.router = router;
        this.httpClient = httpClient;
        this.self = this;
        this.latitude = 19.076090;
        this.longitude = 72.877426;
        this.building = "";
        this.landmark = "";
        this.area = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.street_number = "";
        this.routes = "";
        this.localbuilding = '';
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/get-forms/';
        this.baseURL = this.sharedservice.get_url();
        console.log(incidentEditForm);
        // incidentEditForm.init()
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.selected_inc_id = this.data[0].id;
                this.fetch_categories();
                console.log(this.data);
            }
        });
        // $(document).on('click', '#saveChanges', function(event) {
        //   event.preventDefault();
        //   if(!incidentEditForm.valid())
        //       return false;
        //   console.log('form is valid! Yeah!');
        //   var answersArr = incidentEditForm.getAnswers();
        //   console.log(answersArr);
        // });
    }
    ngOnInit() {
    }
    fetch_categories() {
        let data = new FormData();
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('get-forms', data).subscribe((rdata) => {
            console.log(rdata);
            this.category = rdata.categories;
            this.fetchIncidentDetail(this.data[0].id, this.category);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl, data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.category = rdata.categories
        //     this.fetchIncidentDetail(this.data[0].id,this.category)
        //   }, error => {
        //     this.sharedservice.loaderDismiss()
        //   },()=>{
        //     this.sharedservice.loaderDismiss()
        //   });
    }
    final_Submit() {
        if (!incidentEditForm.valid())
            return false;
        console.log('form is valid! Yeah!');
        var answersArr = incidentEditForm.getAnswers();
        console.log(answersArr);
        var self = this;
        // Send Update Request
        let data = new FormData();
        data.append('incident_id', this.selected_inc_id);
        data.append('incident_data', JSON.stringify(answersArr));
        this.sharedservice.sharedPostRequest('reported-incident/update', data).subscribe((rdata) => {
            console.log(rdata);
            if (rdata.status == true) {
                // self.navController.navigateForward(`/myreport`);
                self.navController.navigateRoot(`/home`);
            }
            else {
            }
        }, error => {
        }, () => {
        });
        // $.ajax({
        //     url: this.baseURL+'api/reported-incident/update/',
        //     type: 'POST',
        //     data: {incident_id: this.selected_inc_id, incident_data: JSON.stringify(answersArr)},
        // })
        // .done(function(data) {
        //     console.log("success");
        //     console.log(data);
        //     if(data.status==true) {
        //      self.navController.navigateForward(`/myreport`);
        //     } else {
        //     }
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     console.log("complete");
        // });
    }
    fetchIncidentDetail(incidentId, category) {
        var self = this;
        var selectedIncidentId = incidentId;
        $.ajax({
            url: this.sharedservice.get_url() + 'reported-incident/details',
            type: 'POST',
            data: { incident_id: selectedIncidentId },
        })
            .done(function (data) {
            console.log("success");
            console.log(data);
            if (data.status) {
                this.incidentData = data.data;
                console.log(this.incidentData);
                console.log(this.incidentData.answers);
                var primary_data = { 'primary': this.incidentData.answers.primary };
                console.log(primary_data);
                this.incidentData.answers = primary_data;
                console.log(this.incidentData);
                console.log(this.incidentData.answers);
                //var baseURL = 'http://101.53.143.7/~dataduck/safecity_webapp/';
                incidentEditForm.init(this.incidentData, self.baseURL, category);
                // Set Details
            }
            else {
                // things went wrong!
            }
        })
            .fail(function () {
            console.log("error");
        })
            .always(function () {
            console.log("complete");
        });
    }
    inits(incidentData) {
        // Get all question ids
        var allForms = Object.values(incidentData.answers);
        var question_id_arr = [];
        for (var i = 0; i < allForms.length; i++) {
            var formAnswers = Object.values(allForms[i]);
            for (var j = 0; j < formAnswers.length; j++) {
                question_id_arr.push(formAnswers[j].question_id);
            }
        }
        // Fetch questions with options for answered questions
        $.ajax({
            url: this.sharedservice.get_url() + "api/questions/getQuestionOptions",
            type: "POST",
            data: { ques_id: question_id_arr },
        })
            .done(function (data) {
            console.log("success");
            console.log(data);
            if (data.status == true) {
                console.log("in edit!");
                $("#edit_div").html("");
                this.questionsObj = data.data;
                // Iterate through all forms
                for (var i = 0; i < allForms.length; i++) {
                    var formAnswers = Object.values(allForms[i]);
                    // Iterate through answers in current form
                    for (var j = 0; j < formAnswers.length; j++) {
                        this.answerObj = formAnswers[j];
                        // Create appropriate Question element for current answer
                        var questionHTML = this.renderQuestion(this.questionsObj, this.answerObj, incidentData);
                        $("#edit_div").append(questionHTML);
                    }
                }
                // Reorder questions
                this.divList = $(".question-listing-item");
                this.divList.sort(function (a, b) {
                    return ($(a).data("questionid") - $(b).data("questionid"));
                });
                $("#edit_div").html(this.divList);
                // Initialize Events
                this.initializeEvents();
            }
        })
            .fail(function () {
            console.log("error");
        })
            .always(function () {
            console.log("complete");
        });
    }
    initializeEvents() {
        /////////////////////////////
        // Set Incident Datepicker //
        /////////////////////////////
        var self = this;
        var todaydate = new Date();
        var datePicker = $("#datepicker .parent-option-field").val();
        console.log(datePicker);
        // $('#datepicker').datetimepicker({
        //      format: 'YYYY-MM-DD', 
        //      todayHighlight: true,
        //      toolbarplacement: 'bottom',
        //      showClose: true,
        //      endDate: todaydate,
        //      maxDate: todaydate,
        //      icons: { 
        //        close: 'OK'
        //      },
        //      ignoreReadonly: true,
        // });
        //		$('#datepicker').data("datetimepicker").date(moment(datePicker));
        ///////////////////////////////////////////////
        // Set Incident Timepicker / TimeRangePicker //
        ///////////////////////////////////////////////
        var timePicker = $("#timepicker .parent-option-field").val();
        var timePickerStart = $("#timerangepickerstart .parent-rangestart-field").val();
        var timePickerEnd = $("#timerangepickerend .parent-rangeend-field").val();
        // $("#timepicker, #timerangepickerstart, #timerangepickerend").datetimepicker({
        //         format: 'LT',
        //         ignoreReadonly: true,
        //         useCurrent: false
        //         /*buttons: {
        //         	showClear: true
        //         },
        //         icons: { 
        //         	clear: 'fa fa-trash'
        //         },
        //         showClear: true*/
        //     });
        // Set Initial Time
        // $('#timepicker').data("datetimepicker").date(moment(timePicker));
        // $('#timerangepickerstart').data("datetimepicker").date(moment(timePickerStart));
        // $('#timerangepickerend').data("datetimepicker").date(moment(timePickerEnd));
        // Set timepicker event
        $("#timepicker").on("change.datetimepicker", function (e) {
            // Disable Rangepicker
            $(".timerangepicker-container").addClass('nonactive');
            self.validateAnswers();
        });
        // Add dependency on timerangepickers
        $("#timerangepickerstart").on("change.datetimepicker", function (e) {
            // Disable single timepicker
            $(".timepicker-container").addClass('nonactive');
            // Restrict time selection
            // $('#timerangepickerend').datetimepicker('minDate', e.date);
            // $('#timerangepickerend').datetimepicker('maxDate', moment(e.date).set({"hour": 23, "minute": 59}));
            self.validateAnswers();
        });
        $("#timerangepickerend").on("change.datetimepicker", function (e) {
            // Disable single timepicker
            $(".timepicker-container").addClass('nonactive');
            // Restrict time selection
            // $('#timerangepickerstart').datetimepicker('minDate', moment(e.date).set({"hour": 00, "minute": 00}));
            // $('#timerangepickerstart').datetimepicker('maxDate', e.date);
            self.validateAnswers();
        });
        // Clear Time/TimeRange values
        $(".clearTime, .clearTimeRange").click(function (event) {
            event.preventDefault();
            $("#timepicker .parent-option-field").val('');
            $("#timerangepickerstart .parent-rangestart-field").val('');
            $("#timerangepickerend .parent-rangeend-field").val('');
            /*$("#timepicker").data("datetimepicker").clear();
            $("#timerangepickerstart").data("datetimepicker").clear();
            $("#timerangepickerend").data("datetimepicker").clear();*/
            // Enable Timepicker/Timerange picker
            $(".timepicker-container, .timerangepicker-container").removeClass('nonactive');
        });
        /////////////////////////////////
        // Check validations on events //
        /////////////////////////////////
        $(".parent-option-field[type=text]").keydown(function (event) {
            var questionId = $(this).parent('.question-listing-item').data('questionid');
            var validation_type;
            if (questionId != undefined && self.questionsObj[questionId] != undefined) {
                var validationArr = JSON.parse(self.questionsObj[questionId].question.properties).validations;
                validation_type = validationArr[1].type != null ? validationArr[1].type : "text";
            }
            else {
                validation_type = 'text';
            }
            if (validation_type == 'number') {
                var key = event.charCode || event.keyCode || 0;
                // allow backspace, tab, enter, delete, arrows, numbers and keypad numbers ONLY
                // home, end
                var isValidInput = key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105);
                if (!isValidInput) {
                    return false;
                }
            }
        });
        $(".parent-option-field[type=text]").keyup(function (event) {
            self.validateAnswers();
        });
        // Run validation for suboptions
        $(".suboption-field[type=text]").keyup(function (event) {
            self.validateAnswers();
        });
        $(".suboption-field[type=checkbox], .suboption-field[type=radio]").click(function (event) {
            self.validateAnswers();
        });
        // On Radio options click
        // Toggle visibility of subtext and suboptions fields
        $(document).on("click", ".parent-option-field[type=radio]", function (event) {
            // Hide all textboxes for selected question
            $(this)
                .closest(".question-listing-item")
                .find("input[type=text].suboption-field")
                .addClass("d-none");
            // Show texbox if selected option has one
            if ($(this).data("hassubtext") && $(this).is(":checked"))
                $(this).siblings(".suboption-field").removeClass("d-none");
            // Hide all suboptions for selected question
            $(this)
                .closest(".question-listing-item")
                .find(".suboption-container")
                .addClass("d-none");
            $(this)
                .closest(".question-listing-item")
                .find(".suboption-container .suboption-field")
                .prop("checked", false);
            // Show Suboption if selected option has one
            if ($(this).data("hassuboption") != false)
                $(this).siblings(".suboption-container").removeClass("d-none");
            // Run validation
            this.validateAnswers();
        });
        // On Checkbox options click
        // Toggle visibility of subtext and suboptions fields
        $(document).on("click", ".parent-option-field[type=checkbox]", function (event) {
            if ($(this).data("hassubtext")) {
                if ($(this).is(":checked")) {
                    $(this)
                        .siblings(".suboption-field")
                        .removeClass("d-none");
                }
                else {
                    $(this).siblings(".suboption-field").addClass("d-none");
                }
            }
            else if ($(this).data("hassuboption") != false) {
                if ($(this).is(":checked")) {
                    $(this)
                        .siblings(".suboption-container")
                        .removeClass("d-none");
                }
                else {
                    $(this)
                        .siblings(".suboption-container")
                        .find(".suboption-field")
                        .prop("checked", false);
                    $(this)
                        .siblings(".suboption-container")
                        .addClass("d-none");
                }
            }
            // Run validation
            this.validateAnswers();
        });
    }
    validateAnswers() {
        // Reset validations
        $(".is-invalid").removeClass("is-invalid");
        $(".invalid-msg").text("");
        var isValid = true;
        $(".question-listing-item").each(function (index, el) {
            var type = $(el).data("questiontype");
            var questionId = $(el).data("questionid");
            var answerId = $(el).data("answerdetailid");
            var tags = $(el).data("questiontag");
            if (type == "text" || type == "incident-address-form" || type == "estimate-datepicker") {
                var textInvalid = false;
                var $textElement = $(el).find(".parent-option-field[data-required=true]");
                $textElement.each(function (subIndex, subEl) {
                    if ($(subEl).val() == "") {
                        console.log('setting invalid for type', type);
                        console.log($(el).data('questiontag'));
                        isValid = false;
                        textInvalid = true;
                        $(subEl).addClass("is-invalid");
                    }
                    else {
                        $(subEl).removeClass("is-invalid");
                    }
                });
                if (textInvalid) {
                    $(el).children(".invalid-msg").text("This Field is Required");
                }
                else {
                    $(el).children(".invalid-msg").text("");
                }
            }
            else if (type == "estimate-time-or-rangepicker") {
                var timePicker = $("#timepicker .parent-option-field").val();
                var timePickerStart = $("#timerangepickerstart .parent-rangestart-field").val();
                var timePickerEnd = $("#timerangepickerend .parent-rangeend-field").val();
                if (timePicker == '' && (timePickerStart == '' || timePickerEnd == '')) {
                    console.log('setting invalid for type', type);
                    isValid = false;
                    $(el).children(".invalid-msg").text("This Field is Required");
                }
                else {
                    $(el).children(".invalid-msg").text("");
                }
            }
            else if (type == "checkbox" || type == "radio") {
                // Validate Parent Fields
                if ($(el).find(".parent-option-field:checked").length == 0) {
                    console.log('setting invalid for type', type);
                    isValid = false;
                    $(el).find(".parent-option-field").addClass("is-invalid");
                    $(el).children(".invalid-msg").text("This Field is Required");
                }
                else {
                    // Remove validation
                    $(el).find(".parent-option-field").removeClass("is-invalid");
                    $(el).children(".invalid-msg").text("");
                }
                // Validate Subtext fields
                $(el)
                    .find(".parent-option-field:checked")
                    .each(function (subIndex, subEl) {
                    // Validate subtext
                    var $textElement = $(subEl).siblings(".suboption-field[type=text]");
                    if ($textElement.length > 0) {
                        if ($textElement.val() == "") {
                            console.log('setting invalid for type', type);
                            isValid = false;
                            $textElement.addClass("is-invalid");
                            $textElement
                                .siblings(".invalid-msg")
                                .text("This Field is Required");
                        }
                        else {
                            // Remove validation
                            $textElement.removeClass("is-invalid");
                            $textElement.siblings(".invalid-msg").text("");
                        }
                    }
                    else {
                        // Validate suboptions
                        var $suboptionContainer = $(subEl).siblings(".suboption-container");
                        if ($suboptionContainer.length > 0) {
                            var $suboptions = $suboptionContainer.find(".suboption-field:checked");
                            if ($suboptions.length == 0) {
                                console.log('setting invalid for type', type);
                                isValid = false;
                                $suboptions.addClass("is-invalid");
                                $suboptionContainer
                                    .children(".invalid-msg")
                                    .text("This Field is Required");
                            }
                            else {
                                // Remove validation
                                $suboptions.removeClass("is-invalid");
                                $suboptionContainer
                                    .children(".invalid-msg")
                                    .text("");
                            }
                        }
                    }
                });
            }
        });
        console.log(isValid);
        return isValid;
    }
    renderQuestion(questionsObj, answerObj, incidentData) {
        var _a;
        var question_id = answerObj.question_id;
        var question = questionsObj[question_id].question;
        var question_properties = JSON.parse(question.properties);
        var suboptions = questionsObj[question_id].suboptions || {};
        var options = questionsObj[question_id].options;
        var questionHtml = "";
        questionHtml += `
        <div class="question-listing-item col-12" 
          data-answerdetailid="${answerObj.detail_id}" 
          data-questiontype="${question_properties.type}" 
          data-questionid="${question.id}" 
          data-questiontag="${question.tags}"
        >
            <div class="label fs-15">${question.question}</div>
    `;
        var optionHtml = "";
        switch (question_properties.type) {
            case "radio":
                options.forEach(function (option) {
                    var answerIdArr = answerObj.answer_id.split(",");
                    var isSelected = answerIdArr.includes(option.id);
                    var hassuboption = option.suboption_properties != null
                        ? JSON.parse(option.suboption_properties).type
                        : false;
                    optionHtml += `
                    <div class="custom-control custom-radio">
                      <input type="radio" id="option${option.id}" name="option${question_id}" class="custom-control-input parent-option-field" ${isSelected ? "checked" : ""} value="${option.id}" data-hassubtext="${option.textbox_placeholder != null}" data-hassuboption="${hassuboption}">
                      <label class="custom-control-label" for="option${option.id}">${option.title}</label>
                `;
                    // Suboption text field
                    if (option.textbox_placeholder != null)
                        optionHtml += this.renderSubText(answerObj, option, isSelected);
                    else if (hassuboption != false) {
                        var elemsuboptions = suboptions[option.id];
                        optionHtml += this.renderSubOptions(question_id, answerIdArr, hassuboption, elemsuboptions, isSelected);
                    }
                    optionHtml += "</div>";
                });
                break;
            case "checkbox":
                if (question.is_category == true) {
                    var options;
                    this.categories.forEach(function (category) {
                        options.push({
                            id: category.id,
                            textbox_placeholder: null,
                            title: category.title,
                            parent_id: category.parent_id,
                            is_main: category.is_main,
                        });
                    });
                }
                options.forEach(function (option) {
                    var answerIdArr = answerObj.answer_id.split(",");
                    var isSelected = answerIdArr.includes(option.id);
                    var hassuboption = option.suboption_properties != null
                        ? JSON.parse(option.suboption_properties).type
                        : false;
                    var fieldId = question.is_category == true
                        ? "catoption" + option.id
                        : "option" + option.id;
                    optionHtml += `
                    <div class="form-check">
                      <input class="form-check-input parent-option-field" type="checkbox" id="${fieldId}" name="${question_id}" ${isSelected ? "checked" : ""}  value="${option.id}" data-hassubtext="${option.textbox_placeholder != null}" data-hassuboption="${hassuboption != null}">
                      <label class="form-check-label" for="${fieldId}">
                        ${option.title}
                      </label>
                `;
                    // Suboption text field
                    if (option.textbox_placeholder != null)
                        optionHtml += this.renderSubText(answerObj, option, isSelected);
                    else if (hassuboption != false) {
                        var elemsuboptions = suboptions[option.id];
                        optionHtml += this.renderSubOptions(question_id, answerIdArr, hassuboption, elemsuboptions, isSelected);
                    }
                    optionHtml += "</div>";
                });
                break;
            case "text":
                var isRequired = ((_a = question_properties.validations) === null || _a === void 0 ? void 0 : _a[0].required) != undefined;
                optionHtml += `
                <input type="text" id="option${question_id}text" class="form-control parent-option-field" value="${answerObj.answer}" data-required="${isRequired}" />
            `;
                break;
            case "estimate-datepicker":
                var isEstimate = incidentData.is_date_estimate == 0 ? true : false;
                optionHtml += `
        <div class="input-group date" id="datepicker" data-target-input="nearest">
          <input type="text" id="option${question_id}text" class="form-control parent-option-field datetimepicker-input" value="${incidentData.incident_date}" data-target="#datepicker" readonly="true" />
          <div class="input-group-append" data-target="#datepicker" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                    </div>
        </div>

                <div class="form-check">
                    <input class="form-check-input parent-estimate-field" type="checkbox" id="option${question_id}checked" name="option${question_id}" ${isEstimate ? "checked" : ""} >
                    <label class="form-check-label" for="option${question_id}checked">This is an estimate</label>
                </div>
          `;
                break;
            // <input type="text" id="option${question_id}" class="form-control estimate-datepicker parent-option-field" value="${incidentData.incident_date}" />
            case "estimate-time-or-rangepicker":
                var isEstimate = incidentData.is_time_estimate == 0 ? true : false;
                var isRange = incidentData.time_to != null;
                optionHtml += `
        <div class="row timepicker-container ${isRange ? 'nonactive' : ''}">
          <div class="col-md-9 col-sm-8 col-xs-12 col-12">
            <div class="input-group date" id="timepicker" data-target-input="nearest">
                        <input type="text" id="option${question_id}text" class="form-control parent-option-field datetimepicker-input" value="${!isRange ? incidentData.time_from : ""}" data-target="#timepicker" readonly="true" />
                        <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-clock"></i></div>
                        </div>
                    </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12 col-12">
            <a class="clearTime btn animated fadeInUp pull-right mt-0 themeColor">Clear Time</a>
                  </div>
        </div>
                <div class="form-check">
                    <input class="form-check-input parent-estimate-field" type="checkbox" id="option${question_id}checked" name="option${question_id}" ${isEstimate ? "checked" : ""} >
                    <label class="form-check-label" for="option${question_id}checked">This is an estimate</label>
                </div>
        <div class="row timerangepicker-container ${!isRange ? 'nonactive' : ''}">
          <div class="col-md-12 col-sm-12 col-xs-12 col-12">
            <label>Select Time Range</label>
          </div>
          <div class="col-md-8 col-sm-8 col-xs-12 col-12">
            <div class="col-md-5 col-5 p-0 float-left">
                <div class="input-group date" id="timerangepickerstart" data-target-input="nearest">
                            <input type="text" class="form-control parent-rangestart-field datetimepicker-input" value="${isRange ? incidentData.time_from : ''}" data-target="#timerangepickerstart" readonly="true" />
                            <div class="input-group-append" data-target="#timerangepickerstart" data-toggle="datetimepicker">
                                <div class="input-group-text"><i class="fa fa-clock"></i></div>
                            </div>
              </div>
                      </div>
            <div class="col-md-2 col-2 text-center p-0 float-left">
                          <span class="themeColor">To</span>
                        </div>
            <div class="col-md-5 col-5 p-0 float-left">
                        <div class="input-group date" id="timerangepickerend" data-target-input="nearest">
                          <input type="text" class="form-control parent-rangeend-field datetimepicker-input" value="${isRange ? incidentData.time_to : ''}" data-target="#timerangepickerend" readonly="true" />
                          <div class="input-group-append" data-target="#timerangepickerend" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="fa fa-clock"></i></div>
                          </div>
              </div>
                  </div>
          </div>
          <div class="col-md-4">
                        <a class="clearTimeRange btn animated fadeInUp pull-right mt-0 themeColor">Clear Time Range</a>
                      </div>
        </div>
          `;
                //<input type="time" id="option${question_id}" class="form-control parent-option-field" value="${incidentData.time_to == null ? incidentData.time_from : ""}" />
                //<input type="time" class="form-control parent-rangestart-field" value="${incidentData.time_to != null? incidentData.time_from: ''}" />
                //<input type="time" class="form-control parent-rangeend-field" value="${incidentData.time_to != null ? incidentData.time_to : ''}" />
                break;
            case "incident-address-form":
                optionHtml += this.init(incidentData.latitude, incidentData.longitude, incidentData.building, incidentData.landmark, incidentData.area, incidentData.city, incidentData.state, incidentData.country);
                break;
            default:
                break;
        }
        optionHtml += '<div class="invalid-msg text-danger"></div>';
        questionHtml += optionHtml + "</div>";
        return questionHtml;
    }
    getAnswers() {
        var answersArr = [];
        var self = this;
        $(".question-listing-item").each(function (index, el) {
            var type = $(el).data("questiontype");
            var questionId = $(el).data("questionid");
            var answerId = $(el).data("answerdetailid");
            var tags = $(el).data("questiontag");
            console.log($(el).data("answerjson"));
            self.answerObj = {
                id: answerId,
                question_id: questionId,
                question_type: type,
                question_tag: tags,
                answer_id: "",
                answer: "",
            };
            switch (type) {
                case "text":
                    self.answerObj.answer = $(el).find(".parent-option-field").val();
                    break;
                case "radio":
                    var radio_other_answers = {};
                    var selectedOptionElem = $(el).find(".parent-option-field:checked");
                    self.checkbox_answers = selectedOptionElem.val();
                    // Set Subtext value if any
                    if ($(selectedOptionElem).data("hassubtext"))
                        radio_other_answers[self.answerObj.answer_id] = $(selectedOptionElem)
                            .siblings(".suboption-field")
                            .val();
                    // Set Suboption value if any
                    $(el)
                        .find(".parent-option-field:checked")
                        .siblings(".suboption-container")
                        .find(".suboption-field:checked")
                        .each(function (checkedInder, checkedEl) {
                        self.checkbox_answers += "," + $(checkedEl).val();
                    });
                    self.answerObj.answer_id = self.checkbox_answers;
                    self.answerObj.other_answers = JSON.stringify(radio_other_answers);
                    break;
                case "checkbox":
                    self.checkbox_answers = "";
                    var checkbox_other_answers = {};
                    $(el)
                        .find(".parent-option-field:checked")
                        .each(function (checkedIndex, checkedEl) {
                        self.checkbox_answers += "," + $(checkedEl).val();
                        // Set Subtext value if any
                        if ($(checkedEl).data("hassubtext"))
                            checkbox_other_answers[JSON.stringify($(checkedEl).val())] = $(checkedEl)
                                .siblings(".suboption-field")
                                .val();
                        // Set Suboption value if any
                        if ($(checkedEl).data("hassuboption") != false) {
                            $(checkedEl)
                                .siblings(".suboption-container")
                                .find(".suboption-field:checked")
                                .each(function (checkedInder, checkedEl) {
                                self.checkbox_answers +=
                                    "," + $(checkedEl).val();
                            });
                        }
                    });
                    self.answerObj.answer_id = self.checkbox_answers.replace(/^,/, "");
                    self.answerObj.other_answers = JSON.stringify(checkbox_other_answers);
                    break;
                case "estimate-datepicker":
                    self.answerObj.answer_id = 0;
                    self.answerObj.answer = $(el).find(".parent-option-field").val();
                    //answerObj.isEstimate = $(el).find('.parent-estimate-field').is(':checked');
                    var isEstimate = $(el)
                        .find(".parent-estimate-field")
                        .is(":checked");
                    // Set AnswerJson
                    self.answerObj.answer_json = {};
                    self.answerObj.answer_json.option_id = 0;
                    self.answerObj.answer_json.answer = self.answerObj.answer;
                    self.answerObj.answer_json.isEstimate = isEstimate;
                    self.answerObj.answer_json = JSON.stringify(self.answerObj.answer_json);
                    break;
                case "estimate-time-or-rangepicker":
                    var time = $(el).find(".parent-option-field").val();
                    var start_time = $(el).find(".parent-rangestart-field").val();
                    var end_time = $(el).find(".parent-rangeend-field").val();
                    self.answerObj.answer_id = 0;
                    self.answerObj.answer =
                        start_time == "" || end_time == ""
                            ? time
                            : start_time + "-" + end_time;
                    //answerObj.isEstimate = start_time!='' && end_time!='' ? true:$(el).find('.parent-estimate-field').is(':checked');
                    var isEstimate = start_time != "" && end_time != ""
                        ? true
                        : $(el)
                            .find(".parent-estimate-field")
                            .is(":checked");
                    // Set AnswerJson
                    self.answerObj.answer_json = {};
                    self.answerObj.answer_json.option_id = 0;
                    self.answerObj.answer_json.answer = self.answerObj.answer;
                    self.answerObj.answer_json.isEstimate = isEstimate;
                    self.answerObj.answer_json = JSON.stringify(self.answerObj.answer_json);
                    break;
                case "incident-address-form":
                    self.answerObj.answer_id = 0;
                    // Set AnswerJson
                    self.answerObj.answer_json = {};
                    //answerObj.address = editaddressForm.getAddress();
                    self.answerObj.answer_json.address = self.getAddress();
                    self.answerObj.answer_json = JSON.stringify(self.answerObj.answer_json);
                    break;
                default:
                    break;
            }
            answersArr.push(self.answerObj);
        });
        return answersArr;
    }
    renderSubText(answerObj, option, isSelected) {
        var optionHtml;
        var otherAnswer = JSON.parse(answerObj.other_answers);
        console.log(otherAnswer);
        try {
            var placeholder = JSON.parse(option.textbox_placeholder)
                .placeholder;
        }
        catch (_a) {
            var placeholder = option.textbox_placeholder;
        }
        optionHtml = `
        <input type="text" class="form-control ${isSelected ? "" : "d-none"} suboption-field" value="${otherAnswer[option.id] != undefined ? otherAnswer[option.id] : ""}" placeholder="${placeholder}" />
    `;
        optionHtml += '<div class="invalid-msg text-danger"></div>';
        return optionHtml;
    }
    renderSubOptions(question_id, answerIdArr, hassuboption, elemsuboptions, isSelected) {
        var optionHtml = `<div class="suboption-container ${isSelected ? "" : "d-none"}">`;
        elemsuboptions.forEach(function (elemsuboption) {
            var isSubOptionSelected = answerIdArr.includes(elemsuboption.id);
            if (hassuboption == "checkbox") {
                optionHtml += `
                <div class="form-check">
                    <input class="form-check-input suboption-field" type="checkbox" id="suboption${elemsuboption.id}" name="suboption${question_id}" value="${elemsuboption.id}" data-hassubtext="${elemsuboption.textbox_placeholder != null}" ${isSubOptionSelected ? "checked" : ""}>
                    <label class="form-check-label" for="suboption${elemsuboption.id}">
                      ${elemsuboption.title}
                    </label>
                </div>
            `;
            }
            else if (hassuboption == "radio") {
                optionHtml += `
                <div class="custom-control custom-radio">
                    <input type="radio" id="suboption${elemsuboption.id}" name="suboption${question_id}" class="custom-control-input suboption-field" ${isSelected ? "checked" : ""} value="${elemsuboption.id}" data-hassubtext="${elemsuboption.textbox_placeholder != null}" ${isSubOptionSelected ? "checked" : ""}>
                    <label class="custom-control-label" for="suboption${elemsuboption.id}">${elemsuboption.title}</label>
                </div>
            `;
            }
        });
        optionHtml += '<div class="invalid-msg text-danger"></div>';
        optionHtml += "</div>";
        return optionHtml;
    }
    //edit address 
    init(newLatitude, newLongitude, newBuilding, newLandmark, newArea, newCity, newState, newCountry) {
        this.building = newBuilding;
        this.landmark = newLandmark;
        this.area = newArea;
        this.city = newCity;
        this.state = newState;
        this.country = newCountry;
        this.latitude = newLatitude;
        this.longitude = newLongitude;
        var elementHtml = `
    <div class="newedit">
      <label>Locate address on map</label>
            <input type="text" id="search_address" placeholder="Start Typing" class="form-control parent-option-field" value="" />
          </div>
          <div class="mapouter" id="editMap" style="height:467px">
    </div>
    <div class="newedit">
              <label>Building</label>
            <input type="text" id="editbuilding" class="form-control parent-option-field" value="${this.building}" />
    </div>
    <div class="newedit">
              <label>Landmark</label>
            <input type="text" id="editlandmark" class="form-control parent-option-field" value="${this.landmark}" />
          </div>
          <div class="newedit">
              <label>Area</label>
            <input type="text" id="editarea" class="form-control parent-option-field" value="${this.area}" data-required="true" />
          </div>
          <div class="newedit">
              <label>City</label>
            <input type="text" id="editcity" class="form-control parent-option-field" value="${this.city}" data-required="true" />
          </div>
          <div class="newedit">
              <label>State</label>
            <input type="text" id="editstate" class="form-control parent-option-field" value="${this.state}" data-required="true" />
          </div>
          <div class="newedit">
              <label>Country</label>
            <input type="text" id="editcountry" class="form-control parent-option-field" value="${this.country}" data-required="true" />
      </div>
   `;
        return elementHtml;
    }
    getAddress() {
        // Update values
        this.updateValues();
        var answerJson = {
            "building": this.building,
            "landmark": this.landmark,
            "area": this.area,
            "city": this.city,
            "state": this.state,
            "country": this.country,
            "latitude": this.latitude,
            "longitude": this.longitude
        };
        return answerJson;
    }
    updateMarker() {
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        this.mapMarker.setPosition(location);
        this.map.setCenter(location);
    }
    initMap(searchFieldId) {
        if (google) {
            /////////////
            // Set map //
            /////////////
            var location = new google.maps.LatLng(this.latitude, this.longitude);
            var options = {
                center: location,
                zoom: 15,
                animation: 'DROP',
                draggable: true,
                fullscreenControl: false,
                scaleControl: true,
            };
            this.map = new google.maps.Map(document.getElementById("editMap"), options);
            ////////////////
            // Set Marker //
            ////////////////
            this.mapMarker = new google.maps.Marker({
                position: location,
                // title: marker.title,
                // latitude: this.latitude,
                // longitude: this.longitude,
                animation: google.maps.Animation.DROP,
                draggable: true,
            });
            this.mapMarker.setMap(this.map);
            // On drag end
            google.maps.event.addListener(this.mapMarker, 'dragend', function () {
                var markerlatlong = this.mapMarker.getPosition();
                this.latitude = JSON.stringify(this.mapMarker.getPosition().lat());
                this.longitude = JSON.stringify(this.mapMarker.getPosition().lng());
                // Reverse Geocode to get Address
                this.geocodeLatLng();
            });
            this.geocoder = new google.maps.Geocoder();
            ///////////////
            // Searchbox //
            ///////////////
            // Create the search box
            this.input = document.getElementById(searchFieldId);
            const searchBox = new google.maps.places.SearchBox(this.input);
            // Bias the SearchBox results towards current map's viewport.
            this.map.addListener("bounds_changed", () => {
                searchBox.setBounds(this.map.getBounds());
            });
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();
                if (places.length == 0) {
                    this.resetFields("No results found");
                    return;
                }
                this.place = places[0];
                // Set Coordinates
                this.latitude = this.place.geometry.location.lat();
                this.longitude = this.place.geometry.location.lng();
                this.updateMarker();
                var addcomponent = this.place.address_components;
                // Set Address
                this.setAddress(addcomponent);
            });
        }
    }
    // Reverse Geocode
    geocodeLatLng() {
        const latlng = {
            lat: parseFloat(JSON.stringify(this.latitude)),
            lng: parseFloat(JSON.stringify(this.longitude)),
        };
        this.geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    // Set Address
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
        this.building = "";
        this.landmark = "";
        this.area = "";
        this.city = "";
        this.state = "";
        this.country = "";
        if (addcomponent) {
            this.street_number = "";
            this.routes = "";
            this.localbuilding = '';
            for (var i = 0; i < addcomponent.length; i++) {
                if (addcomponent[i].types[0] == 'country') {
                    this.country = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                    this.state = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'locality') {
                    this.city = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'postal_code') {
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                    this.area = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == "sublocality_level_3" || addcomponent[i].types[0] == "sublocality") {
                    this.landmark = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_2') {
                    this.localbuilding = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'street_number') {
                    this.street_number = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'route') {
                    this.routes = addcomponent[i].long_name;
                }
            }
            this.building = this.street_number + ' ' + this.routes;
            this.building = this.building.trim() == '' ? this.localbuilding : this.building;
        }
        $("#building_address").val(this.building);
        this.showAddress();
    }
    resetFields(message) {
        this.building = "";
        this.landmark = "";
        this.area = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.showAddress();
    }
    showAddress() {
        $("#editbuilding").val(this.building);
        $("#editlandmark").val(this.landmark);
        $("#editarea").val(this.area);
        $("#editcity").val(this.city);
        $("#editstate").val(this.state);
        $("#editcountry").val(this.country);
    }
    updateValues() {
        this.building = JSON.stringify($(".newedit #editbuilding").val());
        this.landmark = JSON.stringify($(".newedit #editlandmark").val());
        this.area = JSON.stringify($(".newedit #editarea").val());
        this.city = JSON.stringify($(".newedit #editcity").val());
        this.state = JSON.stringify($(".newedit #editstate").val());
        this.country = JSON.stringify($(".newedit #editcountry").val());
    }
};
EditreportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EditreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editreport/editreport.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editreport.page.scss */ "./src/app/editreport/editreport.page.scss")).default]
    })
], EditreportPage);



/***/ })

}]);
//# sourceMappingURL=editreport-editreport-module-es2015.js.map