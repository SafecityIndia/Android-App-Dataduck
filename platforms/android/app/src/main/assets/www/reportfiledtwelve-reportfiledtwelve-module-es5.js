function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledtwelve-reportfiledtwelve-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwelve/reportfiledtwelve.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwelve/reportfiledtwelve.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportfiledtwelveReportfiledtwelvePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent>\r\n<div class=\"header-background\"></div>\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/reportfiledeleven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n   </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"newbg\">\r\n<div class=\"mainareain\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"newtext\">\r\n<h4>You’re doing great. Just one more step to go!</h4>\r\n<h5>Please move the pin to the exact location:</h5>\r\n<div #map id=\"map\"></div>\r\n   <ion-item>\r\n    <ion-label>This information is true to my knowledge </ion-label>\r\n <ion-checkbox  slot=\"start\" (ionChange) = \"knowledge($event)\"></ion-checkbox>\r\n  </ion-item>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n <div class=\"bottom\">\r\n<ion-row>\r\n     <ion-col col-12>\r\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"preframing()\">SUBMIT</ion-button>\r\n  </ion-col>\r\n   </ion-row>\r\n</div>\r\n   </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/reportfiledtwelve/reportfiledtwelve-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/reportfiledtwelve/reportfiledtwelve-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ReportfiledtwelvePageRoutingModule */

  /***/
  function srcAppReportfiledtwelveReportfiledtwelveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledtwelvePageRoutingModule", function () {
      return ReportfiledtwelvePageRoutingModule;
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


    var _reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reportfiledtwelve.page */
    "./src/app/reportfiledtwelve/reportfiledtwelve.page.ts");

    var routes = [{
      path: '',
      component: _reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledtwelvePage"]
    }];

    var ReportfiledtwelvePageRoutingModule = function ReportfiledtwelvePageRoutingModule() {
      _classCallCheck(this, ReportfiledtwelvePageRoutingModule);
    };

    ReportfiledtwelvePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportfiledtwelvePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reportfiledtwelve/reportfiledtwelve.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/reportfiledtwelve/reportfiledtwelve.module.ts ***!
    \***************************************************************/

  /*! exports provided: ReportfiledtwelvePageModule */

  /***/
  function srcAppReportfiledtwelveReportfiledtwelveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledtwelvePageModule", function () {
      return ReportfiledtwelvePageModule;
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


    var _reportfiledtwelve_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reportfiledtwelve-routing.module */
    "./src/app/reportfiledtwelve/reportfiledtwelve-routing.module.ts");
    /* harmony import */


    var _reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reportfiledtwelve.page */
    "./src/app/reportfiledtwelve/reportfiledtwelve.page.ts");

    var ReportfiledtwelvePageModule = function ReportfiledtwelvePageModule() {
      _classCallCheck(this, ReportfiledtwelvePageModule);
    };

    ReportfiledtwelvePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reportfiledtwelve_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledtwelvePageRoutingModule"]],
      declarations: [_reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledtwelvePage"]]
    })], ReportfiledtwelvePageModule);
    /***/
  },

  /***/
  "./src/app/reportfiledtwelve/reportfiledtwelve.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/reportfiledtwelve/reportfiledtwelve.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportfiledtwelveReportfiledtwelvePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 60%;\n}\n\n.newbg {\n  --background: -moz-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(239,253,255,1)), color-stop(42%, rgba(239,253,255,1)), color-stop(64%, rgba(244,232,253,1)), color-stop(100%, rgba(238,221,252,1)));\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.newtext ion-label {\n  white-space: inherit;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  position: relative;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 50px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 20px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 38px;\n}\n\nion-checkbox {\n  --border-radius:0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --border-color-checked: #ddd;\n  -webkit-margin-end: 12px;\n          margin-inline-end: 12px;\n  margin-top: 15px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 45px;\n  --box-shadow:none;\n  text-align: center;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.checkbox-icon {\n  --border-radius: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZmlsZWR0d2VsdmUvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxccmVwb3J0ZmlsZWR0d2VsdmVcXHJlcG9ydGZpbGVkdHdlbHZlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZmlsZWR0d2VsdmUvcmVwb3J0ZmlsZWR0d2VsdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBRUEsOElBQUE7RUFDQSw4TUFBQTtFQUNBLGlKQUFBO0VBQ0EsNElBQUE7RUFDQSw2SUFBQTtFQUNBLHlJQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBQTs7QURLQTtFQUVBLG9CQUFBO0FDSEE7O0FETUE7RUFFQSx3QkFBQTtBQ0pBOztBRE9BO0VBRUUsb0NBQUE7QUNMRjs7QURRQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEUUE7RUFDQSxjQUFBO0FDTEE7O0FEUUE7RUFDQSxnQkFBQTtBQ0xBOztBRE9BO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDRiwrQ0FBQTtFQUNFLDBDQUFBO0FDSko7O0FETUU7RUFHRSx3QkFBQTtBQ0xKOztBRE9BO0VBQ0ksd0JBQUE7RUFDSCxVQUFBO0VBQ0csV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURNQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDSEo7O0FET0E7RUFFQSxnQkFBQTtBQ0xBOztBRFFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05BOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1JBOztBRFdBO0VBRUEsY0FBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaQTs7QURlRTtFQUVDLGlCQUFBO0VBQ0EsMEJBQUE7RUFDRiwwQkFBQTtFQUNBLG9CQUFBO0VBQ0csNEJBQUE7RUFDQyx3QkFBQTtVQUFBLHVCQUFBO0VBQ0gsZ0JBQUE7QUNiRjs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2ZBOztBRGtCQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQ2ZKOztBRGlCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBRUQseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2pCQTs7QURtQkE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2hCQTs7QURrQkE7RUFFQSx1QkFBQTtBQ2hCQTs7QURtQkE7RUFFQSxpRUFBQTtVQUFBLGdFQUFBO0FDakJBOztBRG9CQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLHNCQUFBO0VBQ0Qsd0JBQUE7RUFDQSxxQ0FBQTtBQ2xCQTs7QURxQkE7RUFDQyxzQkFBQTtBQ2xCRDs7QURxQkE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDbkJBOztBRHNCQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNwQkE7O0FEdUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3JCQTs7QUR1QkE7RUFDQSxxQkFBQTtBQ3BCQSIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGZpbGVkdHdlbHZlL3JlcG9ydGZpbGVkdHdlbHZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4ubmV3Ymdcclxue1xyXG4tLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSksIGNvbG9yLXN0b3AoNDIlLCByZ2JhKDIzOSwyNTMsMjU1LDEpKSwgY29sb3Itc3RvcCg2NCUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkpKTtcclxuLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbmhlaWdodDoxMDAlO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuXHJcbn1cclxuXHJcblxyXG4ubmV3dGV4dCBpb24tbGFiZWxcclxue1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJcclxue1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcbi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuXHQgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbn1cclxuICBpb24tcmFkaW9cclxuICB7XHJcbiBcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcclxuICB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0d2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDppbmhlcml0O1xyXG59XHJcblxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6NTBweDtcclxufVxyXG5cclxuLnJlZFxyXG57XHJcbmNvbG9yOiNGNzEzMTM7XHJcbn1cclxuXHJcbi5uZXd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyM3B4O1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoxOXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5jb2xvcjojNTkyRDhEO1xyXG5saW5lLWhlaWdodDoyOHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMzhweDtcclxufVxyXG5cclxuICBpb24tY2hlY2tib3hcclxuICB7XHJcbiAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG4gICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcclxuIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xyXG4gLS1jaGVja21hcmstd2lkdGg6IDI7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZGRkO1xyXG5cdCAgICBtYXJnaW4taW5saW5lLWVuZDogMTJweDtcclxuXHRcdG1hcmdpbi10b3A6MTVweDtcclxuICB9XHJcbiAgXHJcblxyXG4ubmV3dGV4dCBoNVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gXHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvIDQ1cHg7XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4jbWFwe1xyXG53aWR0aDoxMDAlO1xyXG5taW4taGVpZ2h0OiA0MTVweDtcclxuaGVpZ2h0OjYwJTtcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuaW9uLWxpc3Rcclxue1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OjA7XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlcjpub25lO1xyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSAuaXRlbS1pbm5lcntcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmhlaWdodDo0MHB4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtc3RhY2tlZFxyXG57XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxufVxyXG4uY2hlY2tib3gtaWNvbiB7XHJcbi0tYm9yZGVyLXJhZGl1czogbm9uZTtcclxufVxyXG5cclxuXHJcbiIsIiNtYXAge1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLm5ld2JnIHtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkpLCBjb2xvci1zdG9wKDQyJSwgcmdiYSgyMzksMjUzLDI1NSwxKSksIGNvbG9yLXN0b3AoNjQlLCByZ2JhKDI0NCwyMzIsMjUzLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDIzOCwyMjEsMjUyLDEpKSk7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItYmFja2dyb3VuZCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbmhlcml0O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0Y3MTMxMztcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6MDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xuICAtLWNoZWNrbWFyay13aWR0aDogMjtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5uZXd0ZXh0IGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0byA0NXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQxNXB4O1xuICBoZWlnaHQ6IDYwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDowO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG5pb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1zdGFja2VkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY2hlY2tib3gtaWNvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/reportfiledtwelve/reportfiledtwelve.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/reportfiledtwelve/reportfiledtwelve.page.ts ***!
    \*************************************************************/

  /*! exports provided: ReportfiledtwelvePage */

  /***/
  function srcAppReportfiledtwelveReportfiledtwelvePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledtwelvePage", function () {
      return ReportfiledtwelvePage;
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

    var ReportfiledtwelvePage = /*#__PURE__*/function () {
      function ReportfiledtwelvePage(httpClient, navController, router, route) {
        var _this = this;

        _classCallCheck(this, ReportfiledtwelvePage);

        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.infoWindows = [];
        this.markers = []; // this.user_id = localStorage.getItem('userId');
        // this.route.queryParams.subscribe(params => {
        //   this.forWho = localStorage.getItem('forwho')
        //   this.age = localStorage.getItem('age')
        //   this.pronoun = localStorage.getItem('pronoun')
        //   this.experience = localStorage.getItem('whatHappend')
        //   this.date1 = localStorage.getItem('date')
        //   this.dateEstimate = localStorage.getItem('dateEstimate')
        //   this.time = localStorage.getItem('time')
        //   this.timeEstimate = localStorage.getItem('timeEstimate')
        //   this.timeRange = localStorage.getItem('timeRange')
        //   this.violenceType = localStorage.getItem('categories')
        //   this.policeRepo = localStorage.getItem('policeReport')
        //   this.otherData_policeRepo = localStorage.getItem('otherData_Police')
        //   this.led = localStorage.getItem('led')
        //   this.otherData = localStorage.getItem('otherData')
        //   this.otherRelationData = localStorage.getItem('RelationData')
        //   this.anythingElse =localStorage.getItem('anythingelse')

        this.route.queryParams.subscribe(function (params) {
          console.log(params);

          if (_this.router.getCurrentNavigation().extras.state) {
            console.log(_this.router.getCurrentNavigation().extras.state);
            _this.locality = _this.router.getCurrentNavigation().extras.state.locality;
            _this.landmark = _this.router.getCurrentNavigation().extras.state.landmark;
            _this.city = _this.router.getCurrentNavigation().extras.state.city;
            _this.state = _this.router.getCurrentNavigation().extras.state.state;
            _this.country = _this.router.getCurrentNavigation().extras.state.country;
            _this.area = _this.router.getCurrentNavigation().extras.state.area;
            _this.lat = _this.router.getCurrentNavigation().extras.state.lat;
            _this.longi = _this.router.getCurrentNavigation().extras.state.longi;
            _this.address = _this.router.getCurrentNavigation().extras.state.address;
          }

          _this.address2 = _this.area, +',' + _this.locality + ',' + _this.landmark + ',' + _this.city + ',' + _this.state + ',' + _this.country;
          console.log(_this.address2);
          var data = {
            'latitude': _this.lat,
            'longitude': _this.longi,
            'title': _this.address
          };

          _this.markers.push(data);
        });
      }

      _createClass(ReportfiledtwelvePage, [{
        key: "knowledge",
        value: function knowledge(e) {
          this.kwlg = e.detail.value;
          console.log("estimate", e);
          var value = e.detail.checked;

          if (value == true) {
            this.kwlg = '1';
          } else {
            this.kwlg = '0';
          }
        }
      }, {
        key: "back",
        value: function back() {
          localStorage.setItem('lat_report', this.lat);
          localStorage.setItem('longi_report', this.longi);
          localStorage.setItem('address_report', this.address);
          console.log(this.lat);
          console.log(this.longi);
          console.log(this.address);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.showMap();
        }
      }, {
        key: "addMarkersToMap",
        value: function addMarkersToMap(markers) {
          var _this2 = this;

          var _iterator = _createForOfIteratorHelper(markers),
              _step;

          try {
            var _loop = function _loop() {
              var marker = _step.value;
              var position = new google.maps.LatLng(marker.latitude, marker.longitude);
              var mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                draggable: true
              });
              mapMarker.setMap(_this2.map);
              google.maps.event.addListener(mapMarker, 'dragend', function () {
                var _this3 = this;

                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong   " + markerlatlong);
                console.log("lat    " + mapMarker.getPosition().lat());
                console.log("long   " + mapMarker.getPosition().lng()); //this.placeMarkerAndPanTo(e.latLng, this.map);

                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng());
                localStorage.setItem('lat_report', lat);
                localStorage.setItem('longi_report', longi); //code for getting formatted address from the selected latitude and longitude 

                var geocoder = new google.maps.Geocoder();
                var latlng = {
                  lat: parseFloat(lat),
                  lng: parseFloat(longi)
                };
                geocoder.geocode({
                  location: latlng
                }, function (results, status) {
                  if (status === "OK") {
                    if (results[0]) {
                      _this3.title = results[0].formatted_address;
                      localStorage.setItem('address_report', _this3.title);
                      console.log(_this3.title); //this.markers = [];

                      var title = localStorage.getItem('address_report');
                      var lat1 = localStorage.getItem('lat_report');
                      var longi1 = localStorage.getItem('longi_report');
                      console.log(title);

                      var _position = new google.maps.LatLng(lat1, longi1);

                      mapMarker.position = _position, mapMarker.title = title, mapMarker.latitude = lat1, mapMarker.longitude = longi1, mapMarker.animation = 'DROP', mapMarker.draggable = true, mapMarker.setMap(_this3.map); //var self = this;

                      _this3.addInfoWindowToMarker(mapMarker);

                      var data = {
                        'latitude': lat1,
                        'longitude': longi1,
                        'title': title
                      };
                      _this3.markers = data;
                      console.log('3', _this3.markers);
                    } else {
                      window.alert("No results found");
                    }
                  } else {
                    window.alert("Geocoder failed due to: " + status);
                  }
                });
              }.bind(_this2));

              _this2.addInfoWindowToMarker(mapMarker);
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "addInfoWindowToMarker",
        value: function addInfoWindowToMarker(marker) {
          var _this4 = this;

          var infoWindowContent = '<div id="content">' + '<h5 id="firstHeading" class"firstHeading">' + marker.title + '</h5>' + '<p>Latitude: ' + marker.latitude + '</p>' + '<p>Longitude: ' + marker.longitude + '</p>' + '</div>';
          var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
          });
          marker.addListener('click', function () {
            _this4.closeAllInfoWindows();

            infoWindow.open(_this4.map, marker);
          });
          this.infoWindows.push(infoWindow);
        }
      }, {
        key: "closeAllInfoWindows",
        value: function closeAllInfoWindows() {
          var _iterator2 = _createForOfIteratorHelper(this.infoWindows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _window = _step2.value;

              _window.close();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "placeMarkerAndPanTo",
        value: function placeMarkerAndPanTo(latLng, map) {
          new google.maps.Marker({
            position: latLng,
            map: map
          });
          map.panTo(latLng);
        }
      }, {
        key: "showMap",
        value: function showMap() {
          console.log('hi');
          console.log(this.lat);
          console.log(this.longi);
          var location = new google.maps.LatLng(this.lat, this.longi);
          var options = {
            center: location,
            zoom: 15,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false
          };
          console.log(options);
          this.map = new google.maps.Map(this.mapRef.nativeElement, options); // this.map.addListener('click', (e) => {
          //   console.log('clicked',e)
          //   this.placeMarkerAndPanTo(e.latLng, this.map);
          //   var lat= JSON.stringify(e.latLng.lat());
          //   var longi = JSON.stringify(e.latLng.lng());
          //   //code for getting formatted address from the selected latitude and longitude 
          //   var geocoder = new google.maps.Geocoder();
          //   const latlng = {
          //     lat: parseFloat(lat),
          //     lng: parseFloat(longi)
          //   };
          //   geocoder.geocode(
          //     { location: latlng },
          //     (
          //       results,
          //       status
          //     ) => {
          //       if (status === "OK") {
          //         if (results[0]) {
          //          this.title =  results[0].formatted_address;
          //          localStorage.setItem('title',this.title)
          //          console.log(this.title)
          //         } else {
          //           window.alert("No results found");
          //         }
          //       } else {
          //         window.alert("Geocoder failed due to: " + status);
          //       }
          //     }
          //   );
          //   //this.markers = [];
          //   var title = localStorage.getItem('title')
          //   console.log(title)
          //   var data = {'latitude' : lat, 'longitude' : longi, 'title' : title}
          //   this.markers.push(data);
          //   console.log('3',this.markers)
          // this.addMarkersToMap(this.markers);
          // });

          console.log('3', this.markers);
          this.addMarkersToMap(this.markers);
        }
      }, {
        key: "preframing",
        value: function preframing() {
          var data = new FormData();
          data.append('security_key', 'd152ed16bedaf0e594319efad64e39ff0b14c2ff');
          data.append('user_id', this.user_id);
          data.append('country_id', '102');
          data.append('language_id', '1');
          data.append('is_consent', '1');
          data.append('reporting_for', this.forWho);
          data.append('age', this.age);
          data.append('preferred_pronoun', this.pronoun);
          data.append('what_happened_desc', this.experience);
          data.append('start_date', this.date1);
          data.append('date_estimate', this.dateEstimate);
          data.append('time', this.time);
          data.append('time_estimate', this.timeEstimate);
          data.append('time_range', this.timeRange);
          data.append('violence_type', this.violenceType);
          data.append('reported_police', this.policeRepo);
          data.append('reported_police_tried', this.otherData_policeRepo);
          data.append('feel_attacked', this.led);
          data.append('feel_attacked_other', this.otherData);
          data.append('feel_attacked_relation', this.otherRelationData);
          data.append('experience', this.anythingElse);
          data.append('locality', this.locality);
          data.append('landmark', this.landmark);
          data.append('suburb', this.area);
          data.append('city', this.city);
          data.append('state', this.state);
          data.append('country', this.country);
          data.append('map_lat', '19.0856');
          data.append('map_lon', '72.9082');
          data.append('map_knowledge', this.kwlg);
          data.append('medical_attention', '1');
          data.append('physically_hurt', '0');
          data.append('perpetrator', '0');
          data.append('exact_location', 'Karanjade Old Panvel Navi Mumbai');
          data.append('report_type', '1');
          data.append('gender', 'male');
          this.httpClient.post(this.apiUrl + 'addIncidentReport', data).subscribe(function (rdata) {
            console.log(rdata); // this.countryList = rdata.data;
          }, function (error) {}); // this.navController.navigateForward([`preframingsecondary`]);
          //  this.navController.navigateRoot(`/preframingsecondary`);
        }
      }]);

      return ReportfiledtwelvePage;
    }();

    ReportfiledtwelvePage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], ReportfiledtwelvePage.prototype, "mapRef", void 0);
    ReportfiledtwelvePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reportfiledtwelve',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reportfiledtwelve.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwelve/reportfiledtwelve.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reportfiledtwelve.page.scss */
      "./src/app/reportfiledtwelve/reportfiledtwelve.page.scss"))["default"]]
    })], ReportfiledtwelvePage);
    /***/
  }
}]);
//# sourceMappingURL=reportfiledtwelve-reportfiledtwelve-module-es5.js.map