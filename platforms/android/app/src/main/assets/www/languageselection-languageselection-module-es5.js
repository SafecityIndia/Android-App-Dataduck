function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["languageselection-languageselection-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/languageselection/languageselection.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/languageselection/languageselection.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLanguageselectionLanguageselectionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <div class=\"mainarea\">\n    <img src=\"assets/images/icons/logo.svg\" />\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n         <ion-item mode=\"ios\">\n\t\t   <ion-label  class=\"newlabel\"  position=\"stacked\">{{'select_lang' | translate}}\n            </ion-label>\n            <ion-select placeholder=\"{{'select_one' | translate}}\" mode=\"ios\" (ionChange) = \"selectLanguage($event)\">\n              <ion-select-option *ngFor=\"let item of languageList\" value = \"{{item.id}}\">{{item.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\t\n\t\n        </div>\n\n      </ion-col>\n    </ion-row>\n\t\n  </div>\n  <div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"onboarding()\" [disabled]=\"buttondisable\">{{'procees' | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/languageselection/languageselection-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/languageselection/languageselection-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: LanguageselectionPageRoutingModule */

  /***/
  function srcAppLanguageselectionLanguageselectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageselectionPageRoutingModule", function () {
      return LanguageselectionPageRoutingModule;
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


    var _languageselection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./languageselection.page */
    "./src/app/languageselection/languageselection.page.ts");

    var routes = [{
      path: '',
      component: _languageselection_page__WEBPACK_IMPORTED_MODULE_3__["LanguageselectionPage"]
    }];

    var LanguageselectionPageRoutingModule = function LanguageselectionPageRoutingModule() {
      _classCallCheck(this, LanguageselectionPageRoutingModule);
    };

    LanguageselectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LanguageselectionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/languageselection/languageselection.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/languageselection/languageselection.module.ts ***!
    \***************************************************************/

  /*! exports provided: LanguageselectionPageModule */

  /***/
  function srcAppLanguageselectionLanguageselectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageselectionPageModule", function () {
      return LanguageselectionPageModule;
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


    var _languageselection_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./languageselection-routing.module */
    "./src/app/languageselection/languageselection-routing.module.ts");
    /* harmony import */


    var _languageselection_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./languageselection.page */
    "./src/app/languageselection/languageselection.page.ts");

    var LanguageselectionPageModule = function LanguageselectionPageModule() {
      _classCallCheck(this, LanguageselectionPageModule);
    };

    LanguageselectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _languageselection_routing_module__WEBPACK_IMPORTED_MODULE_6__["LanguageselectionPageRoutingModule"]],
      declarations: [_languageselection_page__WEBPACK_IMPORTED_MODULE_7__["LanguageselectionPage"]]
    })], LanguageselectionPageModule);
    /***/
  },

  /***/
  "./src/app/languageselection/languageselection.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/languageselection/languageselection.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLanguageselectionLanguageselectionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 35% auto 0;\n}\n\n.alert-head.sc-ion-alert-ios {\n  display: none !important;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 16px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 11px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.newsidearea {\n  width: 100%;\n  height: auto;\n}\n\n.newsidearea ion-label {\n  width: 100%;\n  height: auto;\n  flex: 1 1 0%;\n}\n\n.newsidearea .in-item {\n  padding-right: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.newsidearea .in-item[slot=start] {\n  margin: 3px 15px 0px 4px;\n}\n\n.newsidearea ion-item {\n  width: 50%;\n  float: left;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 6px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  --min-height: 44px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 104px;\n}\n\n.newselect p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  line-height: 21px;\n  text-align: left;\n  margin-bottom: 12px;\n  margin-top: 0;\n}\n\n.newselect.newselect h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  font-family: \"Mangal\";\n  line-height: 24px;\n  font-family: \"Lato\";\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 20px auto 0px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0;\n  }\n\n  .newselect {\n    margin-top: 70px;\n  }\n\n  .newselect p {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 32% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 40% auto 0;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .newselect p {\n    margin-top: 90px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 66px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 66px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzZWxlY3Rpb24vRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcbGFuZ3VhZ2VzZWxlY3Rpb25cXGxhbmd1YWdlc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGFuZ3VhZ2VzZWxlY3Rpb24vbGFuZ3VhZ2VzZWxlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUE7O0FER0E7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBQTs7QURFQTtFQUVBLHdCQUFBO0FDQUE7O0FER0E7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0VBQ0osa0JBQUE7RUFDSSxvQkFBQTtBQ0FKOztBREVBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0FDQUE7O0FES0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ0hBOztBRE1BO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSkE7O0FET0E7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0MsZUFBQTtBQ0xMOztBRFFBO0VBRUEsd0JBQUE7QUNOQTs7QURRQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FDTkE7O0FEU0U7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDUEo7O0FEVUE7RUFDQyx5QkFBQTtBQ1BEOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtFQUVJLGtCQUFBO0FDUkw7O0FEV0M7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0ksa0JBQUE7QUNUTDs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1pBOztBRGdCQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDZEE7O0FEZ0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNmQTs7QURrQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakJBOztBRG1CQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2pCQTs7QURvQkE7RUFDQSxXQUFBO0FDakJBOztBRHNCQTtFQUVDO0lBRUksa0JBQUE7RUNyQkg7O0VEd0JEO0lBQ0EsZ0JBQUE7RUNyQkM7O0VEd0JEO0lBQ0EsZ0JBQUE7RUNyQkM7QUFDRjs7QUR3QkM7RUFJQTtJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUMxQkM7QUFDRjs7QURnQ0M7RUFJQztJQUdELGtCQUFBO0VDbkNDO0FBQ0Y7O0FEdUNDO0VBSUE7SUFDSSxnQkFBQTtFQ3hDSDtBQUNGOztBRDRDQztFQUlBO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0VDOUNDOztFRGlERDtJQUNBLGdCQUFBO0VDOUNDO0FBQ0Y7O0FEbURBO0VBSUM7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUNyREM7O0VEd0REO0lBQ0EsZ0JBQUE7RUNyREM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlc2VsZWN0aW9uL2xhbmd1YWdlc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm1haW5hcmVhIGltZ3tcclxud2lkdGg6MjM1cHg7XHJcbm1hcmdpbjozNSUgYXV0byAgMCA7XHJcbn1cclxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcbmRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5uZXdzaWRlYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgaW9uLWxhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsZXg6MSAxIDAlO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1cclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblx0ICAgIHBhZGRpbmctbGVmdDowO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1bc2xvdD1cInN0YXJ0XCJdXHJcbntcclxubWFyZ2luOiAzcHggMTVweCAwcHggNHB4O1xyXG59XHJcbi5uZXdzaWRlYXJlYSAgaW9uLWl0ZW1cclxue1xyXG53aWR0aDo1MCU7XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuLnNlbGVjdC10ZXh0IGJ1dHRvblxyXG57cGFkZGluZzoxcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW4taXRlbSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDoxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6MTVweDtcclxuXHRcclxuXHQgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHQtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG5cdCAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcblx0fVxyXG5cdFxyXG4ubmV3c2VsZWN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5tYXJnaW4tdG9wOjEwNHB4O1xyXG59XHJcblxyXG4ubmV3c2VsZWN0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuY29sb3I6IzI5MjAyMDtcclxubGluZS1oZWlnaHQ6MjFweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjEycHg7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3NlbGVjdC5uZXdzZWxlY3QgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1mYW1pbHk6ICdNYW5nYWwnO1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbm1hcmdpbi10b3A6MDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWxhYmVsXHJcbntcclxuZmxleDowO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjIwcHggYXV0byAwcHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpIGFuZCgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDIpXHJcblx0e1xyXG5cdC5tYWluYXJlYSBpbWdcclxuXHR7XHJcblx0ICAgIG1hcmdpbjogMjklIGF1dG8gMDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld3NlbGVjdHtcclxuXHRtYXJnaW4tdG9wOjcwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3QgcHtcclxuXHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aCA6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodCA6IDczNnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMzVweCAhaW1wb3J0YW50O1xyXG4gbWFyZ2luOiAzMiUgYXV0byAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIFxyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdFx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG5cclxuIG1hcmdpbjogNDAlIGF1dG8gMDtcclxuIH1cclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0ICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcblx0XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweDtcclxuIG1hcmdpbjogMjAlIGF1dG8gMDtcclxuIH1cclxuIFxyXG4gLm5ld3NlbGVjdHtcclxuIG1hcmdpbi10b3A6IDY2cHg7XHJcbn1cclxuXHJcblxyXG5cdH1cclxuXHRcclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiAubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHg7XHJcbiBtYXJnaW46IDIwJSBhdXRvIDA7XHJcbiB9XHJcbiBcclxuIC5uZXdzZWxlY3R7XHJcbiBtYXJnaW4tdG9wOiA2NnB4O1xyXG59XHJcblxyXG4gXHJcbiB9XHJcbiAgXHJcblxyXG4iLCIubWFpbmFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW5hcmVhIGltZyB7XG4gIHdpZHRoOiAyMzVweDtcbiAgbWFyZ2luOiAzNSUgYXV0byAwO1xufVxuXG4uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubmV3c2lkZWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3c2lkZWFyZWEgaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMSAxIDAlO1xufVxuXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uZXdzaWRlYXJlYSAuaW4taXRlbVtzbG90PXN0YXJ0XSB7XG4gIG1hcmdpbjogM3B4IDE1cHggMHB4IDRweDtcbn1cblxuLm5ld3NpZGVhcmVhIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VsZWN0LXRleHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmluLWl0ZW0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbn1cblxuLm5ld3NlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMTA0cHg7XG59XG5cbi5uZXdzZWxlY3QgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3c2VsZWN0Lm5ld3NlbGVjdCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIk1hbmdhbFwiO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDI5JSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICB9XG5cbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMzVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMzIlIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIG1hcmdpbjogNDAlIGF1dG8gMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubmV3c2VsZWN0IHAge1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIxM3B4O1xuICAgIG1hcmdpbjogMjAlIGF1dG8gMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDY2cHg7XG4gIH1cbn1cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIxM3B4O1xuICAgIG1hcmdpbjogMjAlIGF1dG8gMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDY2cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/languageselection/languageselection.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/languageselection/languageselection.page.ts ***!
    \*************************************************************/

  /*! exports provided: LanguageselectionPage */

  /***/
  function srcAppLanguageselectionLanguageselectionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageselectionPage", function () {
      return LanguageselectionPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LanguageselectionPage = /*#__PURE__*/function () {
      function LanguageselectionPage(httpClient, loadingCtrl, router, sharedservice, navController, loadingController, route, translate) {
        var _this = this;

        _classCallCheck(this, LanguageselectionPage);

        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.sharedservice = sharedservice;
        this.navController = navController;
        this.loadingController = loadingController;
        this.route = route;
        this.translate = translate;
        this.langaugeId = '';
        this.buttondisable = true;
        this.route.queryParams.subscribe(function (params) {
          _this.countryId = params["countryId"];
          _this.cityId = params["cityId"];
          _this.orgId = params["orgId"];
          console.log("con", _this.countryId);
          console.log("city", _this.cityId);
          console.log("org", _this.orgId);
        });
      }

      _createClass(LanguageselectionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLanguageList();
        } // *********************Getting language List for select Language**************************

      }, {
        key: "getLanguageList",
        value: function getLanguageList() {
          var _this2 = this;

          var data = new FormData();
          data.append('security_key', '07b337e9971f28d49c9c4b0449ea071131f4a3b6');
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('common_controller/languagesList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this2.languageList = rdata.data;
            console.log(_this2.languageList[1]);
            console.log("language", _this2.languageList);
          }, function (error) {
            _this2.sharedservice.loaderDismiss();
          }, function () {
            _this2.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl+'languagesList',data)
          // .subscribe((rdata: any) => {
          //   console.log(rdata);
          //   this.languageList = rdata.data;
          //   console.log(this.languageList[1]);
          //   console.log("language",this.languageList)
          // },error => {
          // });
        }
      }, {
        key: "selectLanguage",
        value: function selectLanguage(e) {
          this.langaugeId = e.detail.value;
          localStorage.setItem('Lang_id', this.langaugeId);

          if (e.detail.value == '1') {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            localStorage.setItem('language', 'en');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '42') {
            this.translate.setDefaultLang('hi');
            this.translate.use('hi');
            localStorage.setItem('language', 'hi');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '77') {
            this.translate.setDefaultLang('ml');
            this.translate.use('ml');
            localStorage.setItem('language', 'ml');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '76') {
            this.translate.setDefaultLang('ma');
            this.translate.use('ma');
            localStorage.setItem('language', 'ma');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '43') {
            this.translate.setDefaultLang('cr');
            this.translate.use('cr');
            localStorage.setItem('language', 'cr');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '27') {
            this.translate.setDefaultLang('sp');
            this.translate.use('sp');
            localStorage.setItem('language', 'sp');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '6') {
            this.translate.setDefaultLang('ar');
            this.translate.use('ar');
            localStorage.setItem('language', 'ar');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '89') {
            this.translate.setDefaultLang('po');
            this.translate.use('po');
            localStorage.setItem('language', 'po');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '93') {
            this.translate.setDefaultLang('ro');
            this.translate.use('ro');
            localStorage.setItem('language', 'ro');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '64') {
            this.translate.setDefaultLang('ki');
            this.translate.use('ki');
            localStorage.setItem('language', 'ki');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '107') {
            this.translate.setDefaultLang('sr');
            this.translate.use('sr');
            localStorage.setItem('language', 'sr');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '126') {
            this.translate.setDefaultLang('uk');
            this.translate.use('uk');
            localStorage.setItem('language', 'uk');
            localStorage.setItem('Lang_id', e.detail.value);
          }

          if (this.langaugeId != "") {
            this.buttondisable = false;
          } else {
            this.buttondisable = true;
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...',
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // *********************Pass language id to Next page***********************************

      }, {
        key: "onboarding",
        value: function onboarding() {
          console.log(this.langaugeId);
          var navigationExtras = {
            queryParams: {
              countryId: this.countryId,
              cityId: this.cityId,
              orgId: this.orgId,
              langaugeId: this.langaugeId
            }
          };
          this.navController.navigateRoot(["/onboardingone"], navigationExtras);
        }
      }]);

      return LanguageselectionPage;
    }();

    LanguageselectionPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }];
    };

    LanguageselectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-languageselection',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./languageselection.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/languageselection/languageselection.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./languageselection.page.scss */
      "./src/app/languageselection/languageselection.page.scss"))["default"]]
    })], LanguageselectionPage);
    /***/
  }
}]);
//# sourceMappingURL=languageselection-languageselection-module-es5.js.map