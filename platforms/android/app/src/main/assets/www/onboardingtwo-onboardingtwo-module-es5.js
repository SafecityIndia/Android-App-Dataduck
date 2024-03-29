function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardingtwo-onboardingtwo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingtwo/onboardingtwo.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingtwo/onboardingtwo.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnboardingtwoOnboardingtwoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header> -->\n  <!-- <ion-toolbar> -->\n    <!-- <ion-title>onboardingone</ion-title> -->\n  <!-- </ion-toolbar> -->\n<!-- </ion-header> -->\n\n<ion-content class=\"bannerfirst\">\n<div class=\"mainarea\">\n<ion-row>\n      <ion-col size=\"12\" >\n<img src=\"assets/images/icons/logo.svg\"/>\n</ion-col>\n   </ion-row>\n  \n</div>\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\" >\n<div class=\"newtext\">\n<p>{{'above_18' | translate}}</p>\n</div>\n\n   </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n<ion-button expand=\"full\" fill=\"outline\" shape=\"round\"  class=\"newbtnin\" (click)=\"goToNextPage()\">{{'yes' | translate}}</ion-button>\n<ion-button expand=\"full\" shape=\"round\" (click)=\"nopage()\"  class=\"newbtn\">{{'no' | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/onboardingtwo/onboardingtwo-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/onboardingtwo/onboardingtwo-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: OnboardingtwoPageRoutingModule */

  /***/
  function srcAppOnboardingtwoOnboardingtwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingtwoPageRoutingModule", function () {
      return OnboardingtwoPageRoutingModule;
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


    var _onboardingtwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./onboardingtwo.page */
    "./src/app/onboardingtwo/onboardingtwo.page.ts");

    var routes = [{
      path: '',
      component: _onboardingtwo_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingtwoPage"]
    }];

    var OnboardingtwoPageRoutingModule = function OnboardingtwoPageRoutingModule() {
      _classCallCheck(this, OnboardingtwoPageRoutingModule);
    };

    OnboardingtwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnboardingtwoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/onboardingtwo/onboardingtwo.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/onboardingtwo/onboardingtwo.module.ts ***!
    \*******************************************************/

  /*! exports provided: OnboardingtwoPageModule */

  /***/
  function srcAppOnboardingtwoOnboardingtwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingtwoPageModule", function () {
      return OnboardingtwoPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _onboardingtwo_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onboardingtwo-routing.module */
    "./src/app/onboardingtwo/onboardingtwo-routing.module.ts");
    /* harmony import */


    var _onboardingtwo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./onboardingtwo.page */
    "./src/app/onboardingtwo/onboardingtwo.page.ts");

    var OnboardingtwoPageModule = function OnboardingtwoPageModule() {
      _classCallCheck(this, OnboardingtwoPageModule);
    };

    OnboardingtwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _onboardingtwo_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnboardingtwoPageRoutingModule"]],
      declarations: [_onboardingtwo_page__WEBPACK_IMPORTED_MODULE_7__["OnboardingtwoPage"]]
    })], OnboardingtwoPageModule);
    /***/
  },

  /***/
  "./src/app/onboardingtwo/onboardingtwo.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/onboardingtwo/onboardingtwo.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnboardingtwoOnboardingtwoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 196px;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 25% auto 0;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 25px;\n  font-size: 20px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #EBE2F5;\n  --background-activated: #EBE2F5;\n  --background-focused: #EBE2F5;\n  --background-hover: #EBE2F5;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow:0;\n}\n\n.newbtnin {\n  color: #220E0E !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 15px;\n  text-align: center;\n  --border-color: #CDBEDE;\n  --border-width: 1px;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZ3R3by9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxvbmJvYXJkaW5ndHdvXFxvbmJvYXJkaW5ndHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb25ib2FyZGluZ3R3by9vbmJvYXJkaW5ndHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNEQTs7QURLQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZBOztBRE1BO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0FDSkE7O0FET0U7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FEUUE7RUFDQyx5QkFBQTtBQ0xEOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtBQ0xEOztBRFFDO0VBRUEscUNBQUE7QUNORDs7QURTQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNUQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVkE7O0FEY0E7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0FDWEo7O0FEZ0JBO0VBRUEsT0FBQTtFQUNBLFdBQUE7QUNkQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ2ZBOztBRGtCQTtFQUdBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2pCQTs7QURxQkE7RUFFQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbkJBOztBRHNCQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3BCQTs7QUR1QkE7RUFDQSxXQUFBO0FDcEJBOztBRHVCQTtFQUlDO0lBRUEsdUJBQUE7RUN4QkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmd0d28vb25ib2FyZGluZ3R3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3R0b206MTk2cHg7XHJcbn1cclxuXHJcblxyXG4ubWFpbmFyZWEgaW1ne1xyXG53aWR0aDoyMzVweDtcclxubWFyZ2luOjI1JSBhdXRvICAwIDtcclxufVxyXG5cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuICBpb24taXRlbVxyXG4gIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdH1cclxuXHRcclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcblxyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcblxyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjVweDtcclxuZm9udC1zaXplOjIwcHg7XHJcblxyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojMkYxMTUzICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogI0VCRTJGNTtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRUJFMkY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRUJFMkY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuLS1ib3gtc2hhZG93OjA7XHJcbn1cclxuXHJcblxyXG4ubmV3YnRuaW5cclxue1xyXG5jb2xvcjojMjIwRTBFICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvIDE1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG4tLWJvcmRlci1jb2xvcjogI0NEQkVERTtcclxuLS1ib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiAubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHggIWltcG9ydGFudDs7XHJcbiBcclxuIH1cclxuIFxyXG4gfVxyXG4iLCIubWFpbmFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTk2cHg7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjM1cHg7XG4gIG1hcmdpbjogMjUlIGF1dG8gMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZsZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogIzJGMTE1MyAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6MDtcbn1cblxuLm5ld2J0bmluIHtcbiAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJvcmRlci1jb2xvcjogI0NEQkVERTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/onboardingtwo/onboardingtwo.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/onboardingtwo/onboardingtwo.page.ts ***!
    \*****************************************************/

  /*! exports provided: OnboardingtwoPage */

  /***/
  function srcAppOnboardingtwoOnboardingtwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingtwoPage", function () {
      return OnboardingtwoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var OnboardingtwoPage = /*#__PURE__*/function () {
      function OnboardingtwoPage(route, navController) {
        var _this = this;

        _classCallCheck(this, OnboardingtwoPage);

        this.route = route;
        this.navController = navController;
        this.route.queryParams.subscribe(function (params) {
          _this.langaugeId = params["langaugeId"];
          _this.countryId = params["countryId"];
          _this.cityId = params["cityId"];
          _this.orgId = params["orgId"];
          console.log("countryId", _this.countryId);
          console.log("langaugeId", _this.langaugeId);
          console.log("city", _this.langaugeId);
          console.log("orgid", _this.langaugeId);
        });
      }

      _createClass(OnboardingtwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToNextPage",
        value: function goToNextPage() {
          var navigationExtras = {
            queryParams: {
              langaugeId: this.langaugeId,
              countryId: this.countryId,
              cityId: this.cityId,
              orgId: this.orgId
            }
          };
          this.navController.navigateForward(["onboardingfour"], navigationExtras);
        }
      }, {
        key: "nopage",
        value: function nopage() {
          this.navController.navigateForward("/onboardingtwono");
        }
      }]);

      return OnboardingtwoPage;
    }();

    OnboardingtwoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    OnboardingtwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-onboardingtwo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./onboardingtwo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingtwo/onboardingtwo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./onboardingtwo.page.scss */
      "./src/app/onboardingtwo/onboardingtwo.page.scss"))["default"]]
    })], OnboardingtwoPage);
    /***/
  }
}]);
//# sourceMappingURL=onboardingtwo-onboardingtwo-module-es5.js.map