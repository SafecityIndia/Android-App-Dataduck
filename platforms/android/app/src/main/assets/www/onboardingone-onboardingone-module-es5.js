function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardingone-onboardingone-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingone/onboardingone.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingone/onboardingone.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnboardingoneOnboardingonePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header> -->\n  <!-- <ion-toolbar> -->\n    <!-- <ion-title>onboardingone</ion-title> -->\n  <!-- </ion-toolbar> -->\n<!-- </ion-header> -->\n\n<ion-content class=\"bannerfirst\">\n<div class=\"mainarea\">\n<ion-row>\n      <ion-col size=\"12\" >\n<img src=\"assets/images/icons/logo.svg\"/>\n</ion-col>\n   </ion-row>\n  \n</div>\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\" >\n<div class=\"newtext\">\n<p>{{'together_we_can_fight' | translate}}<br><br> {{'this_is_not_sos_service' | translate}}</p>\n<h6 (click)=\"helpPage()\">{{'view_helplines' | translate}}</h6>\n</div>\n\n   </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToNext()\" >{{'accept_and_proceed' | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/onboardingone/onboardingone-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: OnboardingonePageRoutingModule */

  /***/
  function srcAppOnboardingoneOnboardingoneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingonePageRoutingModule", function () {
      return OnboardingonePageRoutingModule;
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


    var _onboardingone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./onboardingone.page */
    "./src/app/onboardingone/onboardingone.page.ts");

    var routes = [{
      path: '',
      component: _onboardingone_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingonePage"]
    }];

    var OnboardingonePageRoutingModule = function OnboardingonePageRoutingModule() {
      _classCallCheck(this, OnboardingonePageRoutingModule);
    };

    OnboardingonePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnboardingonePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/onboardingone/onboardingone.module.ts ***!
    \*******************************************************/

  /*! exports provided: OnboardingonePageModule */

  /***/
  function srcAppOnboardingoneOnboardingoneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingonePageModule", function () {
      return OnboardingonePageModule;
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


    var _onboardingone_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onboardingone-routing.module */
    "./src/app/onboardingone/onboardingone-routing.module.ts");
    /* harmony import */


    var _onboardingone_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./onboardingone.page */
    "./src/app/onboardingone/onboardingone.page.ts");

    var OnboardingonePageModule = function OnboardingonePageModule() {
      _classCallCheck(this, OnboardingonePageModule);
    };

    OnboardingonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _onboardingone_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnboardingonePageRoutingModule"]],
      declarations: [_onboardingone_page__WEBPACK_IMPORTED_MODULE_7__["OnboardingonePage"]]
    })], OnboardingonePageModule);
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/onboardingone/onboardingone.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnboardingoneOnboardingonePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 150px;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.bannerfirst {\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  position: relative;\n  margin-right: 0;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 25% auto 0;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 24px;\n  font-size: 18px;\n  font-weight: 400;\n  font-weight: normal;\n  color: #220E0E;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  color: #BA0B0B;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 25px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n:focus {\n  outline: -webkit-focus-ring-color auto 0px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newbtnin {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #BA0B0B;\n  --background-activated: #BA0B0B;\n  --background-focused: #BA0B0B;\n  --background-hover: #BA0B0B;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --box-shadow:0;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 18px;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n    margin: 10% auto 0 !important;\n  }\n\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: inherit;\n    top: 127px;\n    margin-bottom: 85px;\n  }\n\n  .bottom {\n    bottom: 18px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: inherit;\n    top: 163px;\n    margin-bottom: 85px;\n  }\n\n  .mainarea img {\n    width: 213px !important;\n    margin: 10% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: inherit;\n    top: 163px;\n    margin-bottom: 85px;\n  }\n\n  .mainarea img {\n    width: 213px !important;\n    margin: 10% auto 0 !important;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZ29uZS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxvbmJvYXJkaW5nb25lXFxvbmJvYXJkaW5nb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb25ib2FyZGluZ29uZS9vbmJvYXJkaW5nb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNEQTs7QURJQTtFQUlBLDhDQUFBO0FDRkE7O0FES0E7RUFFQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hEOztBRE1BO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEE7O0FET0E7RUFFQSxzQkFBQTtFQUNBLFlBQUE7QUNMQTs7QURRRTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURTQTtFQUNDLHlCQUFBO0FDTkQ7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0FDTkQ7O0FEU0M7RUFFQSxxQ0FBQTtBQ1BEOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaQTs7QURlQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNaSjs7QURlQTtFQUNJLDBDQUFBO0FDWko7O0FEZUE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtBQ2JBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNkQTs7QURpQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNoQkE7O0FEbUJBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixjQUFBO0VBQ0EsVUFBQTtFQUNJLGdCQUFBO0VBQ0gsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURvQkE7RUFFQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNsQkE7O0FEcUJBO0VBQ0EsV0FBQTtBQ2xCQTs7QURxQkE7RUFJQztJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUN0QkM7O0VEeUJGO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUN0QkY7O0VEeUJEO0lBRUEsWUFBQTtFQ3ZCQztBQUNGOztBRDJCQztFQUlEO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUM1QkY7O0VEaUNBO0lBRUQsdUJBQUE7SUFDQSw2QkFBQTtFQy9CQztBQUNGOztBRG9DQztFQUlEO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUNyQ0Y7O0VEMENBO0lBRUQsdUJBQUE7SUFDQSw2QkFBQTtFQ3hDQztBQUNGOztBRDRDQztFQUtDO0lBRUQsWUFBQTtJQUNELFlBQUE7SUFDQyxtQkFBQTtFQy9DQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZGluZ29uZS9vbmJvYXJkaW5nb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToxNTBweDtcclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uYmFubmVyZmlyc3Rcclxue1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRtYXJnaW4tcmlnaHQ6MDtcclxuXHR9XHJcblxyXG4ubWFpbmFyZWEgaW1ne1xyXG53aWR0aDoyNDNweDtcclxubWFyZ2luOjI1JSBhdXRvICAwIDtcclxufVxyXG5cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuICBpb24taXRlbVxyXG4gIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdH1cclxuXHRcclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcblxyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcblxyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjRweDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5jb2xvcjojMjIwRTBFO1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNlxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5jb2xvcjojQkEwQjBCO1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5tYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDBweDtcclxufVxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdidG5pblxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogI0JBMEIwQjtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogICNCQTBCMEI7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogICNCQTBCMEI7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICAjQkEwQjBCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4tLWJveC1zaGFkb3c6MDtcclxud2lkdGg6ODUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG8gMThweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiAubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHggIWltcG9ydGFudDs7XHJcbiBtYXJnaW46IDEwJSBhdXRvIDAgIWltcG9ydGFudDs7XHJcbiB9XHJcbiBcclxuLm1haW5hcmVhaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IGluaGVyaXQ7XHJcbiAgICB0b3A6IDEyN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo4NXB4O1xyXG4gfVxyXG4gXHJcbiAuYm90dG9tXHJcbiB7XHJcbiBib3R0b206IDE4cHg7XHJcbiB9XHJcbiBcclxuIH1cclxuIFxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuLm1haW5hcmVhaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IGluaGVyaXQ7XHJcbiAgICB0b3A6IDE2M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo4NXB4O1xyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gIC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50OztcclxuIG1hcmdpbjogMTAlIGF1dG8gMCAhaW1wb3J0YW50OztcclxuIH1cclxuIFxyXG5cdH1cclxuXHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcclxuLm1haW5hcmVhaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IGluaGVyaXQ7XHJcbiAgICB0b3A6IDE2M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo4NXB4O1xyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gIC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50OztcclxuIG1hcmdpbjogMTAlIGF1dG8gMCAhaW1wb3J0YW50OztcclxuIH1cclxuIFxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBcclxuICAgIGFuZCAobWluLWRldmljZS1oZWlnaHQ6IDgxMnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXHJcbiAgIHsgXHJcbiAgLm1haW5hcmVhaW5cclxuIHtcclxuIGJvdHRvbTo3MnB4O1xyXG50b3A6aW5oZXJpdDtcclxuIG1hcmdpbi1ib3R0b206MjVweDtcclxuIH1cclxufVxyXG5cclxuIiwiLm1haW5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1MHB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5iYW5uZXJmaXJzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjQzcHg7XG4gIG1hcmdpbjogMjUlIGF1dG8gMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMjIwRTBFO1xufVxuXG4ubmV3dGV4dCBoNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjQkEwQjBCO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3YnRuaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogI0JBMEIwQjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0JBMEIwQjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNCQTBCMEI7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0JBMEIwQjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW5hcmVhaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICAgIHRvcDogMTI3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogODVweDtcbiAgfVxuXG4gIC5ib3R0b20ge1xuICAgIGJvdHRvbTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gICAgdG9wOiAxNjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4NXB4O1xuICB9XG5cbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMCUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1haW5hcmVhaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICAgIHRvcDogMTYzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogODVweDtcbiAgfVxuXG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1haW5hcmVhaW4ge1xuICAgIGJvdHRvbTogNzJweDtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/onboardingone/onboardingone.page.ts ***!
    \*****************************************************/

  /*! exports provided: OnboardingonePage */

  /***/
  function srcAppOnboardingoneOnboardingonePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingonePage", function () {
      return OnboardingonePage;
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

    var OnboardingonePage = /*#__PURE__*/function () {
      function OnboardingonePage(route, navController) {
        var _this = this;

        _classCallCheck(this, OnboardingonePage);

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

      _createClass(OnboardingonePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToNext",
        value: function goToNext() {
          console.log("country id", this.countryId);
          console.log("language id", this.langaugeId);
          var navigationExtras = {
            queryParams: {
              langaugeId: this.langaugeId,
              countryId: this.countryId,
              cityId: this.cityId,
              orgId: this.orgId
            }
          };
          this.navController.navigateForward(["onboardingtwo"], navigationExtras);
        }
      }, {
        key: "helpPage",
        value: function helpPage() {
          this.navController.navigateForward("/help");
        }
      }]);

      return OnboardingonePage;
    }();

    OnboardingonePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    OnboardingonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-onboardingone',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./onboardingone.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingone/onboardingone.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./onboardingone.page.scss */
      "./src/app/onboardingone/onboardingone.page.scss"))["default"]]
    })], OnboardingonePage);
    /***/
  }
}]);
//# sourceMappingURL=onboardingone-onboardingone-module-es5.js.map