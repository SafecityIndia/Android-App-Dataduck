function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledseven-reportfiledseven-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledseven/reportfiledseven.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledseven/reportfiledseven.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportfiledsevenReportfiledsevenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n<div class=\"header-background\"></div>\n    <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/reportfiledsix' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n  </ion-buttons>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"newbg\">\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<h4>What type of sexual violence did you experience?<span class=\"red\">*</span></h4>\n <p>(Select all that Apply)</p>\n \n  <ion-list (ionChange)=getViolence($event)>\n  <ion-item >\n    <ion-label>Domestic Violence</ion-label>\n    <ion-checkbox slot=\"end\"  value='1'></ion-checkbox>\n  </ion-item>\n  <ion-item>\n     <ion-label>Online Harassment</ion-label>\n<ion-checkbox slot=\"end\" value='2'></ion-checkbox>\n  </ion-item>\n  <ion-item >\n    <ion-label >Rape/Sexual Assault</ion-label>\n    <ion-checkbox slot=\"end\" value='3'></ion-checkbox>\n  </ion-item>\n   <ion-item >\n    <ion-label >Physical Assault</ion-label>\n    <ion-checkbox slot=\"end\"  value='4'></ion-checkbox>\n  </ion-item>\n   <ion-item >\n    <ion-label >Stalking</ion-label>\n    <ion-checkbox slot=\"end\" value='5' ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Ogling/Facial Expressions/Staring</ion-label>\n    <ion-checkbox slot=\"end\" value='6' ></ion-checkbox>\n  </ion-item>\n<ion-item>\n    <ion-label>Taking photos without permission</ion-label>\n    <ion-checkbox slot=\"end\" value='7'></ion-checkbox>\n  </ion-item>\n  <ion-item>\n   <ion-label>Indecent exposure/Masturbation in public</ion-label>\n    <ion-checkbox slot=\"end\" value='8'></ion-checkbox>\n  </ion-item>\n   <ion-item>\n   <ion-label>Touching /Groping</ion-label>\n    <ion-checkbox slot=\"end\" value='9'></ion-checkbox>\n  </ion-item>\n   <ion-item>\n   <ion-label>Showing Pornography without consent</ion-label>\n    <ion-checkbox slot=\"end\" value='10'></ion-checkbox>\n  </ion-item>\n  <ion-item>\n  <ion-label>Commenting/Sexual Invites</ion-label>\n    <ion-checkbox slot=\"end\" value='11'></ion-checkbox>\n  </ion-item>\n    <ion-item>\n    <ion-label>Chain Snatching/Robbery</ion-label>\n    <ion-checkbox slot=\"end\"  value='12'></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Human Trafficking</ion-label>\n    <ion-checkbox slot=\"end\" value='13'></ion-checkbox>\n  </ion-item>\n   <ion-item>\n    <ion-label>Other</ion-label>\n    <ion-checkbox slot=\"end\" value='14'></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToFieldEight()\" [disabled]=\"buttonDisabled\">NEXT</ion-button>\n  </ion-col>\n   </ion-row>\n</div>";
    /***/
  },

  /***/
  "./src/app/reportfiledseven/reportfiledseven-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/reportfiledseven/reportfiledseven-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ReportfiledsevenPageRoutingModule */

  /***/
  function srcAppReportfiledsevenReportfiledsevenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledsevenPageRoutingModule", function () {
      return ReportfiledsevenPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _reportfiledseven_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reportfiledseven.page */
    "./src/app/reportfiledseven/reportfiledseven.page.ts");

    var routes = [{
      path: '',
      component: _reportfiledseven_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledsevenPage"]
    }];

    var ReportfiledsevenPageRoutingModule = function ReportfiledsevenPageRoutingModule() {
      _classCallCheck(this, ReportfiledsevenPageRoutingModule);
    };

    ReportfiledsevenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportfiledsevenPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reportfiledseven/reportfiledseven.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/reportfiledseven/reportfiledseven.module.ts ***!
    \*************************************************************/

  /*! exports provided: ReportfiledsevenPageModule */

  /***/
  function srcAppReportfiledsevenReportfiledsevenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledsevenPageModule", function () {
      return ReportfiledsevenPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _reportfiledseven_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reportfiledseven-routing.module */
    "./src/app/reportfiledseven/reportfiledseven-routing.module.ts");
    /* harmony import */


    var _reportfiledseven_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reportfiledseven.page */
    "./src/app/reportfiledseven/reportfiledseven.page.ts");

    var ReportfiledsevenPageModule = function ReportfiledsevenPageModule() {
      _classCallCheck(this, ReportfiledsevenPageModule);
    };

    ReportfiledsevenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reportfiledseven_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledsevenPageRoutingModule"]],
      declarations: [_reportfiledseven_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledsevenPage"]]
    })], ReportfiledsevenPageModule);
    /***/
  },

  /***/
  "./src/app/reportfiledseven/reportfiledseven.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/reportfiledseven/reportfiledseven.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportfiledsevenReportfiledsevenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\nion-checkbox {\n  --background-checked: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: #2ED35A;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-width: 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, transparent));\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 60px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 125px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newtext ion-label {\n  white-space: inherit;\n  margin-top: 10px;\n  margin-bottom: 11px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height:41px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 17px;\n  margin-top: 1px;\n}\n\n.radio-inner {\n  width: 33%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZmlsZWRzZXZlbi9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxyZXBvcnRmaWxlZHNldmVuXFxyZXBvcnRmaWxlZHNldmVuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZmlsZWRzZXZlbi9yZXBvcnRmaWxlZHNldmVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGlKQUFBO0VBQ0EsNElBQUE7RUFDQSw2SUFBQTtFQUNBLHlJQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBQTs7QURLQTtFQUVBLHdCQUFBO0FDSEE7O0FETUE7RUFFRSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDRiwrQ0FBQTtFQUNFLDBDQUFBO0FDSko7O0FET0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRE9BO0VBQ0EsY0FBQTtBQ0pBOztBRE9BO0VBQ0EsZ0JBQUE7QUNKQTs7QURPRTtFQUdFLHdCQUFBO0FDTko7O0FEUUE7RUFDSSx3QkFBQTtFQUNILFVBQUE7RUFDRyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNKSjs7QURRQTtFQUVBLGdCQUFBO0FDTkE7O0FEUUE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNGLCtDQUFBO0VBQ0UsMENBQUE7QUNMSjs7QURPQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDTkE7O0FEUUE7RUFFQSxpQ0FBQTtFQUNJLG1DQUFBO0VBQ0EsMEJBQUE7RUFDSCxlQUFBO0VBQ0csa0JBQUE7RUFDSCxtQkFBQTtFQUNBLGtGQUFBO0FDTkQ7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1JBOztBRFdBO0VBRUEsY0FBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDWkE7O0FEZUE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDQyxtQkFBQTtFQUNFLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNaSjs7QURnQkE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNkQTs7QURnQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURrQkE7RUFFQSx1QkFBQTtBQ2hCQTs7QURtQkE7RUFFQSxpRUFBQTtVQUFBLGdFQUFBO0FDakJBOztBRG9CQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0FDbEJBOztBRHFCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGVBQUE7QUNuQkE7O0FEc0JBO0VBRUksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDbkJKOztBRHNCQTtFQUVBLDRCQUFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkE7RUFHSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNyQko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUN0QkoiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRmaWxlZHNldmVuL3JlcG9ydGZpbGVkc2V2ZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld2JnXHJcbntcclxuLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XHJcbmhlaWdodDoxMDAlO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuXHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJcclxue1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG5cdCAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcbiBcclxuICBpb24tcmFkaW9cclxuICB7XHJcbiBcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcclxuICB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0d2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDppbmhlcml0O1xyXG59XHJcbi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuXHQgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5pb24tY2hlY2tib3hcclxue1xyXG4tLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHQtLWJvcmRlci13aWR0aDogMHB4O1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KSk7XHJcbn1cclxuXHJcblxyXG4ubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjYwcHg7XHJcbn1cclxuXHJcbi5yZWRcclxue1xyXG5jb2xvcjojRjcxMzEzO1xyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxubWFyZ2luLWJvdHRvbTogMTI1cHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG5tYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHQgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcblx0XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbm1hcmdpbi10b3A6MTBweDtcclxubWFyZ2luLWJvdHRvbToxMXB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcclxufVxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuLS1taW4taGVpZ2h0OjQxcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuXHJcbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxufVxyXG5cclxuaW9uLXJhZGlvLm1kXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuXHJcbn1cclxuXHJcbi5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLm5ld2JnIHtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcbn1cblxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyIHtcbiAgY29udGVudDogaW5oZXJpdDtcbn1cblxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpKTtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRjcxMzEzO1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1taW4taGVpZ2h0OjQxcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1kLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xufVxuXG5pb24tcmFkaW8ubWQge1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXJhZGl1czowO1xufVxuXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/reportfiledseven/reportfiledseven.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/reportfiledseven/reportfiledseven.page.ts ***!
    \***********************************************************/

  /*! exports provided: ReportfiledsevenPage */

  /***/
  function srcAppReportfiledsevenReportfiledsevenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledsevenPage", function () {
      return ReportfiledsevenPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ReportfiledsevenPage = /*#__PURE__*/function () {
      function ReportfiledsevenPage(navController, translate, sharedservice, router, route, httpClient) {
        var _this = this;

        _classCallCheck(this, ReportfiledsevenPage);

        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.router = router;
        this.route = route;
        this.httpClient = httpClient;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.buttonDisabled = true;
        this.selectcity = [];
        this.idArray = [];
        this.route.queryParams.subscribe(function (params) {
          _this.forWho = params["forWho"];
          _this.age = params["age"];
          _this.pronoun = params["pronoun"];
          _this.experience = params["experience"];
          _this.date1 = params["date1"];
          _this.dateEstimate = params["dateEstimate"];
          _this.time = params["time"];
          _this.timeEstimate = params["timeEstimate"];
          _this.timeRange = params["timeRange"];
          console.log("for Who", _this.forWho);
          console.log("Age", _this.age);
          console.log("pronoun", _this.pronoun);
          console.log("experience", _this.experience);
          console.log("date1", _this.date1);
          console.log("time", _this.time);
          console.log("dateEstimate", _this.dateEstimate);
          console.log("timeEstimate", _this.timeEstimate);
          console.log("timeRange", _this.timeRange);
        });
      }

      _createClass(ReportfiledsevenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getViolence",
        value: function getViolence(e) {
          this.buttonDisabled = false;
          this.value = e.detail.value;
          console.log(e);

          if (e.detail.checked == true) {
            this.idArray.push(this.value);
          } else {
            this.idArray.pop(this.value);
          } // Array Sorting


          console.log("Random Array", this.idArray);
          this.idArray.sort(function (a, b) {
            return a - b;
          });
          console.log("sortArray", this.idArray);
        }
      }, {
        key: "goToFieldEight",
        value: function goToFieldEight() {
          this.str = this.idArray.join(',');
          console.log(this.str);
          localStorage.setItem('categories', this.str);
          this.getCategory();
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this2 = this;

          var data = new FormData();
          data.append('security_key', 'f9f59256b4c2a0514d954d0218600f6f74d3a747');
          data.append('country_id', '102');
          data.append('language_id', '1');
          data.append('category_comb', this.str); // let loader = this.loadingCtrl.create({
          //   });  
          // loader.present();

          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('incident_report/getCategoriesList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this2.catstatus = rdata.status;

            if (_this2.catstatus == true) {
              _this2.link = rdata.data[0].category_links;

              _this2.pageRedirection();

              console.log(_this2.link);
            } else {
              _this2.navController.navigateForward(["reportfiledeight"]);
            }
          }, function (error) {
            _this2.sharedservice.loaderDismiss();
          }, function () {
            _this2.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl + 'getCategoriesList', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.catstatus = rdata.status
          //     if(this.catstatus == true)
          //     {
          //     this.link = rdata.data[0].category_links
          //     this. pageRedirection()
          //     console.log(this.link)
          //     }
          //     else{
          //       this.navController.navigateForward([`reportfiledeight`]);
          //     }
          //         }, error => {
          //   });
        }
      }, {
        key: "pageRedirection",
        value: function pageRedirection() {
          if (this.link == '{"mainLink":"form_pc"}') {
            this.navController.navigateForward(["sevensubfieldone"]);
          } else if (this.link == '{"mainLink":"form_pb","form_pb":{"yes":"form_pa","no":"form_p8","form_pa":{"next":"form_p8"}}}') {
            var navigationExtras = {
              queryParams: {
                category: 'GoToA'
              }
            };
            this.navController.navigateForward(["sevensubfieldthree"], navigationExtras);
          } else if (this.link == '{"mainLink":"form_pa","form_pa":{"next":"form_pc"}}') {
            var _navigationExtras = {
              queryParams: {
                category: 'GoToC'
              }
            };
            this.navController.navigateForward(["sevensubfieldtwo"], _navigationExtras);
          } else if (this.link == '{"mainLink":"form_pb","form_pb":{"yes":"form_pa","no":"form_pc","form_pa":{"next":"form_pc"}}}') {
            var _navigationExtras2 = {
              queryParams: {
                category: 'GoToB'
              }
            };
            this.navController.navigateForward(["sevensubfieldthree"], _navigationExtras2);
          } else if (this.link == '{"mainLink":"form_pa","form_pa":{"next":"form_p8"}}') {
            var _navigationExtras3 = {
              queryParams: {
                category: 'GoToA1'
              }
            };
            this.navController.navigateForward(["sevensubfieldtwo"], _navigationExtras3);
          }
        }
      }]);

      return ReportfiledsevenPage;
    }();

    ReportfiledsevenPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ReportfiledsevenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reportfiledseven',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reportfiledseven.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledseven/reportfiledseven.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reportfiledseven.page.scss */
      "./src/app/reportfiledseven/reportfiledseven.page.scss"))["default"]]
    })], ReportfiledsevenPage);
    /***/
  }
}]);
//# sourceMappingURL=reportfiledseven-reportfiledseven-module-es5.js.map