(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledeight-reportfiledeight-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeight/reportfiledeight.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeight/reportfiledeight.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" translucent>\n<div class=\"header-background\"></div>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/reportfiledseven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"newbg\">\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<h4>Have you reported the incident to the police?<span class=\"red\">*</span></h4>\n <ion-list>\n  <ion-radio-group (ionChange)=\"reported($event)\">\n\n    <ion-item>\n      <ion-label>Yes I have</ion-label>\n      <ion-radio slot=\"end\" value=\"Yes I have/I Intend to\"></ion-radio>\n    </ion-item>\n <ion-item>\n      <ion-label>I will in the future</ion-label>\n      <ion-radio slot=\"end\" value=\"I will in the future\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Not sure if i want to</ion-label>\n      <ion-radio slot=\"end\" value=\"No I don’t intend to\"></ion-radio>\n    </ion-item>\n\t<ion-item>\n      <ion-label>No </ion-label>\n      <ion-radio slot=\"end\" value=\"No \"></ion-radio>\n    </ion-item>\n\t    <ion-item>\n      <ion-label>I tried</ion-label>\n      <ion-radio slot=\"end\" value=\"I tried\"></ion-radio>\n    </ion-item>\n   \n  </ion-radio-group>\n  <ion-item *ngIf=\"otherFieldData\" class=\"newin\">\n    <ion-input  placeholder=\"Please specify\" [(ngModel)] = \"other\"></ion-input>\n  </ion-item>\n</ion-list>\n\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToFieldNine()\" [disabled]=\"buttonDisabled\">NEXT</ion-button>\n  </ion-col>\n   </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/reportfiledeight/reportfiledeight-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/reportfiledeight/reportfiledeight-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReportfiledeightPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledeightPageRoutingModule", function() { return ReportfiledeightPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reportfiledeight_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportfiledeight.page */ "./src/app/reportfiledeight/reportfiledeight.page.ts");




const routes = [
    {
        path: '',
        component: _reportfiledeight_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledeightPage"]
    }
];
let ReportfiledeightPageRoutingModule = class ReportfiledeightPageRoutingModule {
};
ReportfiledeightPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportfiledeightPageRoutingModule);



/***/ }),

/***/ "./src/app/reportfiledeight/reportfiledeight.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/reportfiledeight/reportfiledeight.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportfiledeightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledeightPageModule", function() { return ReportfiledeightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reportfiledeight_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportfiledeight-routing.module */ "./src/app/reportfiledeight/reportfiledeight-routing.module.ts");
/* harmony import */ var _reportfiledeight_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportfiledeight.page */ "./src/app/reportfiledeight/reportfiledeight.page.ts");







let ReportfiledeightPageModule = class ReportfiledeightPageModule {
};
ReportfiledeightPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reportfiledeight_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledeightPageRoutingModule"]
        ],
        declarations: [_reportfiledeight_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledeightPage"]]
    })
], ReportfiledeightPageModule);



/***/ }),

/***/ "./src/app/reportfiledeight/reportfiledeight.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/reportfiledeight/reportfiledeight.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".newbg {\n  --background: -moz-linear-gradient(-45deg, rgba(253,249,240,1) 0%, rgba(252,213,219,1) 100%);\n  --background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(253,249,240,1)), color-stop(100%, rgba(252,213,219,1)));\n  --background: -webkit-linear-gradient(-45deg, rgba(253,249,240,1) 0%, rgba(252,213,219,1) 100%);\n  background: -o-linear-gradient(-45deg, #fdf9f0 0%, #fcd5db 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(253,249,240,1) 0%, rgba(252,213,219,1) 100%);\n  --background: linear-gradient(135deg, rgba(253,249,240,1) 0%, rgba(252,213,219,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n  margin-bottom: 125px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  font-family: \"Lato\";\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height:41px;\n}\n\n.newin {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 17px;\n  margin-top: 1px;\n}\n\n.radio-inner {\n  width: 33%;\n  height: 50%;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    top: 18%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    top: 18%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZmlsZWRlaWdodC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxyZXBvcnRmaWxlZGVpZ2h0XFxyZXBvcnRmaWxlZGVpZ2h0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZmlsZWRlaWdodC9yZXBvcnRmaWxlZGVpZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLDRGQUFBO0VBQ0Esa0lBQUE7RUFDQSwrRkFBQTtFQUNBLGdFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FDREE7O0FES0E7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNGLCtDQUFBO0VBQ0UsMENBQUE7QUNGSjs7QURJQTtFQUVBLHdCQUFBO0FDRkE7O0FES0E7RUFFRSxvQ0FBQTtBQ0hGOztBRE1BO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE1DO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE1BO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNKQTs7QURNQTtFQUNBLGNBQUE7QUNIQTs7QURNQTtFQUNBLGdCQUFBO0FDSEE7O0FES0U7RUFHRSx3QkFBQTtBQ0pKOztBRE1BO0VBQ0ksd0JBQUE7RUFDSCxVQUFBO0VBQ0csV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURLQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDRko7O0FETUE7RUFFQSxnQkFBQTtBQ0pBOztBRE9BO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNOQTs7QURTQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUNQQTs7QURVQTtFQUVBLGNBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDWkE7O0FEZUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNiQTs7QURnQkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNiSjs7QURlQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZEE7O0FEaUJBO0VBRUEsdUJBQUE7QUNmQTs7QURrQkE7RUFFQSxpRUFBQTtVQUFBLGdFQUFBO0FDaEJBOztBRG1CQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0FDakJBOztBRG9CQTtFQUVJLGdCQUFBO0VBQ0YsaUJBQUE7RUFDQyxrQkFBQTtFQUNDLGdDQUFBO0VBQ0EseUJBQUE7QUNsQko7O0FEcUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ25CQTs7QURxQkE7RUFFSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNsQko7O0FEcUJBO0VBRUEsNEJBQUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDbkJKOztBRHNCQTtFQUdJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QUR3QkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ3JCSjs7QUR3QkE7RUFJQTtJQUVJLFFBQUE7RUN6QkY7QUFDRjs7QUQ4QkM7RUFJRDtJQUVJLFFBQUE7RUNoQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGZpbGVkZWlnaHQvcmVwb3J0ZmlsZWRlaWdodC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3Ymdcclxue1xyXG4tLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNTMsMjQ5LDI0MCwxKSAwJSwgcmdiYSgyNTIsMjEzLDIxOSwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjUzLDI0OSwyNDAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjUyLDIxMywyMTksMSkpKTtcclxuLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjUzLDI0OSwyNDAsMSkgMCUsIHJnYmEoMjUyLDIxMywyMTksMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjUzLDI0OSwyNDAsMSkgMCUsIHJnYmEoMjUyLDIxMywyMTksMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjUzLDI0OSwyNDAsMSkgMCUsIHJnYmEoMjUyLDIxMywyMTksMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTMsMjQ5LDI0MCwxKSAwJSwgcmdiYSgyNTIsMjEzLDIxOSwxKSAxMDAlKTtcclxuXHJcbmhlaWdodDoxMDAlO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuXHQgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbn1cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyXHJcbntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG59XHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuIFxyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xyXG4gIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50OmluaGVyaXQ7XHJcbn1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjglO1xyXG5tYXJnaW4tYm90dG9tOjEyNXB4O1xyXG59XHJcblxyXG4ucmVkXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxufVxyXG5cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcblxyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcblxyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiM1RDU2NTY7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxubWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0Zm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6MDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1saXN0XHJcbntcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciBcclxue1xyXG5wYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xyXG59XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDogMjBweDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4tLW1pbi1oZWlnaHQ6NDFweDtcclxufVxyXG5cclxuLm5ld2luXHJcbntcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcblx0IGJvcmRlci1sZWZ0OiBub25lO1xyXG5cdCAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG5cdCAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFEOEVCO1xyXG5cdCAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxufVxyXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZFxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MDtcclxufVxyXG5cclxuaW9uLXJhZGlvLm1kLnJhZGlvLWNoZWNrZWQgXHJcbntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcblxyXG59XHJcblxyXG4ucmFkaW8taW5uZXIge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuLm1haW5hcmVhaW4ge1xyXG4gICBcclxuICAgIHRvcDogMTglO1xyXG59XHJcblxyXG4gXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6NjQwcHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDM2MHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluYXJlYWlue1xyXG4gICBcclxuICAgIHRvcDogMTglO1xyXG59XHJcblxyXG4gXHJcbiB9XHJcblxyXG4iLCIubmV3Ymcge1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNTMsMjQ5LDI0MCwxKSAwJSwgcmdiYSgyNTIsMjEzLDIxOSwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjUzLDI0OSwyNDAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjUyLDIxMywyMTksMSkpKTtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjUzLDI0OSwyNDAsMSkgMCUsIHJnYmEoMjUyLDIxMywyMTksMSkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZGY5ZjAgMCUsICNmY2Q1ZGIgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjUzLDI0OSwyNDAsMSkgMCUsIHJnYmEoMjUyLDIxMywyMTksMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTMsMjQ5LDI0MCwxKSAwJSwgcmdiYSgyNTIsMjEzLDIxOSwxKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oZWFkZXItYmFja2dyb3VuZCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbn1cblxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyIHtcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbmhlcml0O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4JTtcbiAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0Y3MTMxMztcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tbWluLWhlaWdodDo0MXB4O1xufVxuXG4ubmV3aW4ge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG59XG5cbmlvbi1yYWRpby5tZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG59XG5cbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhaW4ge1xuICAgIHRvcDogMTglO1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICB0b3A6IDE4JTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/reportfiledeight/reportfiledeight.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/reportfiledeight/reportfiledeight.page.ts ***!
  \***********************************************************/
/*! exports provided: ReportfiledeightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledeightPage", function() { return ReportfiledeightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ReportfiledeightPage = class ReportfiledeightPage {
    constructor(navController, router, route) {
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.otherFieldData = false;
        this.buttonDisabled = true;
        this.other = '';
        this.route.queryParams.subscribe(params => {
            this.forWho = params["forWho"];
            this.age = params["age"];
            this.pronoun = params["pronoun"];
            this.experience = params["experience"];
            this.date1 = params["date1"];
            this.dateEstimate = params["dateEstimate"];
            this.time = params["time"];
            this.timeEstimate = params["timeEstimate"];
            this.timeRange = params["timeRange"];
            this.violenceType = params["violenceType"];
            console.log("for Who", this.forWho);
            console.log("Age", this.age);
            console.log("pronoun", this.pronoun);
            console.log("experience", this.experience);
            console.log("date1", this.date1);
            console.log("time", this.time);
            console.log("dateEstimate", this.dateEstimate);
            console.log("timeEstimate", this.timeEstimate);
            console.log("timeRange", this.timeRange);
            console.log("violenceType", this.violenceType);
        });
    }
    ngOnInit() {
    }
    reported(e) {
        this.buttonDisabled = false;
        console.log(e.detail.value);
        this.policeRepo = e.detail.value;
        console.log("policeRepo", this.policeRepo);
        localStorage.setItem("policeReport", this.policeRepo);
        if (this.policeRepo == 'I tried') {
            this.otherFieldData = true;
        }
    }
    goToFieldNine() {
        localStorage.setItem("otherData_Police", this.other);
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
        //               timeRange:this.timeRange,
        //               violenceType:this.violenceType,
        //               policeRepo:this.policeRepo 
        //         }
        //   };
        this.navController.navigateForward([`reportfilednine`]);
        // this.navController.navigateForward(`/reportfilednine`);
    }
};
ReportfiledeightPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ReportfiledeightPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reportfiledeight',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reportfiledeight.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeight/reportfiledeight.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reportfiledeight.page.scss */ "./src/app/reportfiledeight/reportfiledeight.page.scss")).default]
    })
], ReportfiledeightPage);



/***/ })

}]);
//# sourceMappingURL=reportfiledeight-reportfiledeight-module-es2015.js.map