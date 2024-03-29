function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legalresources-legalresources-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/legalresources/legalresources.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legalresources/legalresources.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLegalresourcesLegalresourcesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'legal_menu' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"mainlegal\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"segmentarea\">\r\n          <div class=\"btnarea \" (click)=\"police()\">\r\n            {{'police' | translate}}\r\n          </div>\r\n          <div class=\"btnarea btnareaactive\">\r\n            {{'legal_menu' | translate}}\r\n          </div>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <!-- <form [formGroup]=\"form\"> -->\r\n          <div class=\"newlegal\">\r\n            <ion-item>\r\n              <ion-label class=\"newlabel\" position=\"stacked\">{{'home_country_your_country' | translate}}</ion-label>\r\n              <ion-select placeholder=\"Select One\" [(ngModel)]=\"country\" (ionChange)=\"getCountry($event)\">\r\n                <ion-select-option *ngFor=\"let item of country_list\" value=\"{{item.country_id}}\">{{item.country_name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n        <!-- </form> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n  <div class=\"newitemarea\">\r\n    <ion-item lines=\"none\" class=\"cardtext\" (click)=\"ipc()\">\r\n      <ion-label>{{'legal_submenu_ipc' | translate}}</ion-label>\r\n      <img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\" />\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"cardtext\" (click)=\"fir()\">\r\n      <ion-label>{{'legal_submenu_fir' | translate}}</ion-label>\r\n      <img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\" />\r\n    </ion-item>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/legalresources/legalresources-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/legalresources/legalresources-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: LegalresourcesPageRoutingModule */

  /***/
  function srcAppLegalresourcesLegalresourcesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegalresourcesPageRoutingModule", function () {
      return LegalresourcesPageRoutingModule;
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


    var _legalresources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./legalresources.page */
    "./src/app/legalresources/legalresources.page.ts");

    var routes = [{
      path: '',
      component: _legalresources_page__WEBPACK_IMPORTED_MODULE_3__["LegalresourcesPage"]
    }];

    var LegalresourcesPageRoutingModule = function LegalresourcesPageRoutingModule() {
      _classCallCheck(this, LegalresourcesPageRoutingModule);
    };

    LegalresourcesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LegalresourcesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/legalresources/legalresources.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/legalresources/legalresources.module.ts ***!
    \*********************************************************/

  /*! exports provided: LegalresourcesPageModule */

  /***/
  function srcAppLegalresourcesLegalresourcesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegalresourcesPageModule", function () {
      return LegalresourcesPageModule;
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


    var _legalresources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./legalresources-routing.module */
    "./src/app/legalresources/legalresources-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _legalresources_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./legalresources.page */
    "./src/app/legalresources/legalresources.page.ts");

    var LegalresourcesPageModule = function LegalresourcesPageModule() {
      _classCallCheck(this, LegalresourcesPageModule);
    };

    LegalresourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _legalresources_routing_module__WEBPACK_IMPORTED_MODULE_5__["LegalresourcesPageRoutingModule"]],
      declarations: [_legalresources_page__WEBPACK_IMPORTED_MODULE_7__["LegalresourcesPage"]]
    })], LegalresourcesPageModule);
    /***/
  },

  /***/
  "./src/app/legalresources/legalresources.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/legalresources/legalresources.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLegalresourcesLegalresourcesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainlegal {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.newlegal {\n  width: 100%;\n  height: auto;\n  padding: 0 0;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 30px;\n}\n\n.newlegal p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.newlegal h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n  transform: inherit;\n}\n\n.mainlegal .newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 80px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newlegal ion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  --inner-padding-end: 0;\n  border-bottom: none;\n  --background: transparent;\n  --border-width: 0 0 0px 0;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.mainlegal ion-item {\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.mainlegal ion-segment {\n  border-radius: 4px;\n  margin-top: 25px;\n}\n\n.mainlegal .segmentarea {\n  width: 100%;\n  background-color: #fcfafd;\n  padding: 1px 2px;\n  float: left;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n.mainlegal .btnarea {\n  --background: none;\n  --background-checked: none;\n  --background-hover: none;\n  --background-hover-opacity: 0;\n  --background-focused: none;\n  --background-focused-opacity: 0;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);\n  --border-style: solid;\n  --indicator-box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);\n  --indicator-color: var(--ion-color-step-350, var(--ion-background-color, #fff));\n  --indicator-height: 100%;\n  --indicator-transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --transition: 100ms all linear;\n  --padding-top: 0;\n  --padding-end: 13px;\n  --padding-bottom: 0;\n  --padding-start: 13px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  flex-basis: 0px;\n  flex-direction: row;\n  min-width: 70px;\n  min-height: 28px;\n  transform: translate3d(0px, 0px, 0px);\n  font-size: 13px;\n  font-weight: 450;\n  line-height: 35px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  color: #592D8D;\n}\n\n.mainlegal .btnareaactive {\n  background-color: white;\n  border-radius: 4px;\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: auto;\n  color: var(--color);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-kerning: none;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-decoration: none;\n  color: #592D8D;\n  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.17);\n}\n\n.cardtext {\n  --padding-start: 15px;\n  margin-bottom: 0;\n  min-height: 58px;\n  font-size: 17px;\n  font-weight: 400;\n  padding: 0 10px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  --inner-padding-end: 10px;\n  border-bottom: 1px solid #ddd;\n}\n\n.newitemarea {\n  border-top: 1px solid #ddd;\n  margin-top: 15px;\n}\n\n.cardtext ion-label {\n  white-space: inherit;\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.mainlegal ion-select {\n  border: 1px solid #ddd;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  padding-left: 18px;\n  padding-right: 18px;\n  min-height: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVnYWxyZXNvdXJjZXMvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcbGVnYWxyZXNvdXJjZXNcXGxlZ2FscmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGVnYWxyZXNvdXJjZXMvbGVnYWxyZXNvdXJjZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURPQTtFQUlBLDhDQUFBO0FDTEE7O0FEU0E7RUFFQSx1QkFBQTtBQ1BBOztBRFVBO0VBRUEscUJBQUE7QUNSQTs7QURVQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDUko7O0FEVUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUkE7O0FEV0E7RUFDQSxjQUFBO0FDUkE7O0FEV0E7RUFDQSxnQkFBQTtBQ1JBOztBRFdBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDVEE7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1ZBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZEE7O0FEaUJBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNDLGtCQUFBO0FDZEw7O0FEZ0JBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNoQkE7O0FEcUJBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FDbkJBOztBRHFCQTtFQUVBLG1DQUFBO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtFQUNKLDJCQUFBO0FDbkJBOztBRHFCQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNuQkE7O0FEc0JBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3BCQTs7QUR1QkE7RUFFQSxrQkFBQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOERBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0VBQ0EsK0VBQUE7RUFDQSx3QkFBQTtFQUNBLG9FQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0MsVUFBQTtFQUNELFdBQUE7RUFDSCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDckJEOztBRHVCQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0osY0FBQTtFQUdBLGdEQUFBO0FDckJBOztBRHdCQztFQUVHLHFCQUFBO0VBQ0MsZ0JBQUE7RUFDSCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNJLGVBQUE7RUFDSCxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDSSx5QkFBQTtFQUNKLDZCQUFBO0FDdEJIOztBRHlCRTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7O0FEMEJBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNJLG1CQUFBO0FDeEJKOztBRDJCQTtFQUVBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQ3pCRCIsImZpbGUiOiJzcmMvYXBwL2xlZ2FscmVzb3VyY2VzL2xlZ2FscmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm1haW5sZWdhbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLm5ld2xlZ2FsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAwO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MzBweDtcclxuXHJcbn1cclxuXHJcbi5uZXdsZWdhbCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjVweDtcclxufVxyXG5cclxuLm5ld2xlZ2FsIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcblxyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjZweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdCAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuLm1haW5sZWdhbCAubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjEwMCU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG5tYXJnaW46ODBweCBhdXRvIDI1cHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3bGVnYWwgaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDA7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlci10b3A6bm9uZTtcclxuYm9yZGVyLWxlZnQ6bm9uZTtcclxuYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbmJvcmRlci1ib3R0b206bm9uZTtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVx0XHJcbi5tYWlubGVnYWwgaW9uLWl0ZW1cclxue1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbi0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubWFpbmxlZ2FsIGlvbi1zZWdtZW50XHJcbntcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbm1hcmdpbi10b3A6MjVweDtcclxufVxyXG5cclxuLm1haW5sZWdhbCAuc2VnbWVudGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjUwLCAyNTMsIDEpO1xyXG5wYWRkaW5nOjFweCAycHg7XHJcbmZsb2F0OmxlZnQ7XHJcbmJvcmRlci1yYWRpdXM6NHB4O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5tYWlubGVnYWwgLmJ0bmFyZWFcclxue1xyXG4tLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xMik7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAxMDAlO1xyXG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAtLWluZGljYXRvci10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLXRyYW5zaXRpb246IDEwMG1zIGFsbCBsaW5lYXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWJhc2lzOiAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgbWluLWhlaWdodDogMjhweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDUwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0ICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzU5MkQ4RDtcclxufVxyXG4ubWFpbmxlZ2FsIC5idG5hcmVhYWN0aXZlXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbi0tY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvcik7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tY29sb3ItZGlzYWJsZWQ6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQta2VybmluZzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjojNTkyRDhEO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwwLDAsMC4xNyk7XHJcbmJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxufVxyXG5cclxuIC5jYXJkdGV4dFxyXG57XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRtaW4taGVpZ2h0OjU4cHg7XHJcblx0XHRmb250LXNpemU6MTdweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdCAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRcdGJvcmRlci10b3A6bm9uZTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6bm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0Om5vbmU7XHJcblx0XHRcdCAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Lm5ld2l0ZW1hcmVhXHJcblx0XHR7XHJcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdFx0fVxyXG5cclxuLmNhcmR0ZXh0IGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbm1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubWFpbmxlZ2FsIGlvbi1zZWxlY3Rcclxue1xyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbnBhZGRpbmctbGVmdDoxOHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6MThweDtcclxuXHRtaW4taGVpZ2h0OiA0MnB4XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmxlZ2FsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3bGVnYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubmV3bGVnYWwgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5uZXdsZWdhbCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4ubWFpbmxlZ2FsIC5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogODBweCBhdXRvIDI1cHg7XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdsZWdhbCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubWFpbmxlZ2FsIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFpbmxlZ2FsIGlvbi1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWFpbmxlZ2FsIC5zZWdtZW50YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZkO1xuICBwYWRkaW5nOiAxcHggMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWFpbmxlZ2FsIC5idG5hcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogMTAwJTtcbiAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcbiAgLS10cmFuc2l0aW9uOiAxMDBtcyBhbGwgbGluZWFyO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTkyRDhEO1xufVxuXG4ubWFpbmxlZ2FsIC5idG5hcmVhYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1jb2xvcjogaW5pdGlhbDtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0tY29sb3IpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWNvbG9yKTtcbiAgLS1jb2xvci1kaXNhYmxlZDogdmFyKC0tY29sb3IpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1rZXJuaW5nOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbn1cblxuLmNhcmR0ZXh0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiA1OHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5uZXdpdGVtYXJlYSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZHRleHQgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5tYWlubGVnYWwgaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMThweDtcbiAgbWluLWhlaWdodDogNDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/legalresources/legalresources.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/legalresources/legalresources.page.ts ***!
    \*******************************************************/

  /*! exports provided: LegalresourcesPage */

  /***/
  function srcAppLegalresourcesLegalresourcesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegalresourcesPage", function () {
      return LegalresourcesPage;
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


    var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LegalresourcesPage = /*#__PURE__*/function () {
      function LegalresourcesPage(navController, translate, sharedservice, formBuilder, router, alertController) {
        _classCallCheck(this, LegalresourcesPage);

        // this.country =  localStorage.getItem('Country_id')
        // this.form = formBuilder.group({
        //   country: [this.country ]
        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController; // });

        this.getcountryList();
      }

      _createClass(LegalresourcesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.presentAlert();
          setTimeout(function () {
            _this.country = localStorage.getItem('Country_id');
          }, 700);
        }
      }, {
        key: "getCountry",
        value: function getCountry(e) {
          console.log(e.detail.value);
          this.selected_country = e.detail.value;

          if (e.detail.value != "") {//localStorage.setItem('Country_id',this.selected_country)
          }
        }
      }, {
        key: "getcountryList",
        value: function getcountryList() {
          var _this2 = this;

          var data = new FormData();
          data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this2.country_list = rdata['data'];
            console.log(_this2.country_list); //this.getCityByCountry()     
          }, function (error) {
            _this2.sharedservice.loaderDismiss();
          }, function () {
            _this2.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "police",
        value: function police() {
          this.navController.navigateForward("/police");
        }
      }, {
        key: "ipc",
        value: function ipc() {
          this.navController.navigateForward("/ipc");
        }
      }, {
        key: "fir",
        value: function fir() {
          this.navController.navigateForward("/filing-fir");
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var message, btn_msg, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.translate.get('popup_content').subscribe(function (res) {
                      message = res;
                    });
                    this.translate.get('i_understand').subscribe(function (res) {
                      btn_msg = res;
                    });
                    _context.next = 4;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      backdropDismiss: false,
                      message: message,
                      mode: 'ios',
                      buttons: [btn_msg]
                    });

                  case 4:
                    alert = _context.sent;
                    _context.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LegalresourcesPage;
    }();

    LegalresourcesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    LegalresourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-legalresources',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./legalresources.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/legalresources/legalresources.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./legalresources.page.scss */
      "./src/app/legalresources/legalresources.page.scss"))["default"]]
    })], LegalresourcesPage);
    /***/
  }
}]);
//# sourceMappingURL=legalresources-legalresources-module-es5.js.map