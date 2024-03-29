function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organizationmenu-organizationmenu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/organizationmenu/organizationmenu.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organizationmenu/organizationmenu.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrganizationmenuOrganizationmenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'organization' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"mainarea\">\n        <ion-row>\n            <ion-col col-12>\n                <div class=\"newselect\">\n\n                    <ion-item (click)=\"verifyAlert()\">\n                        <ion-label class=\"newlabel\" position=\"stacked\">{{'select_your_organization' | translate}}\n                        </ion-label>\n                        <ion-select placeholder=\"{{'select_one' | translate}}\" mode=\"ios\" (ionChange)=\"selectOrg($event)\">\n                            <ion-select-option *ngFor=\"let item of orgzationList\" value=\"{{item.id}},{{item.passcode}}\">{{item.name}}</ion-select-option>\n\n                        </ion-select>\n                    </ion-item>\n\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/organizationmenu/organizationmenu-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/organizationmenu/organizationmenu-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: OrganizationmenuPageRoutingModule */

  /***/
  function srcAppOrganizationmenuOrganizationmenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationmenuPageRoutingModule", function () {
      return OrganizationmenuPageRoutingModule;
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


    var _organizationmenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./organizationmenu.page */
    "./src/app/organizationmenu/organizationmenu.page.ts");

    var routes = [{
      path: '',
      component: _organizationmenu_page__WEBPACK_IMPORTED_MODULE_3__["OrganizationmenuPage"]
    }];

    var OrganizationmenuPageRoutingModule = function OrganizationmenuPageRoutingModule() {
      _classCallCheck(this, OrganizationmenuPageRoutingModule);
    };

    OrganizationmenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrganizationmenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/organizationmenu/organizationmenu.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/organizationmenu/organizationmenu.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrganizationmenuPageModule */

  /***/
  function srcAppOrganizationmenuOrganizationmenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationmenuPageModule", function () {
      return OrganizationmenuPageModule;
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


    var _organizationmenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./organizationmenu-routing.module */
    "./src/app/organizationmenu/organizationmenu-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _organizationmenu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./organizationmenu.page */
    "./src/app/organizationmenu/organizationmenu.page.ts");

    var OrganizationmenuPageModule = function OrganizationmenuPageModule() {
      _classCallCheck(this, OrganizationmenuPageModule);
    };

    OrganizationmenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _organizationmenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrganizationmenuPageRoutingModule"]],
      declarations: [_organizationmenu_page__WEBPACK_IMPORTED_MODULE_7__["OrganizationmenuPage"]]
    })], OrganizationmenuPageModule);
    /***/
  },

  /***/
  "./src/app/organizationmenu/organizationmenu.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/organizationmenu/organizationmenu.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrganizationmenuOrganizationmenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n  top: 33%;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  border: 0;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 0;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 400;\n  margin-bottom: 20px;\n  transform: inherit;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-family: \"Lato\";\n  font-weight: 600;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow:0;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0 !important;\n  }\n\n  .newselect {\n    margin-top: 70px !important;\n  }\n\n  .newselect p {\n    margin-top: 10px !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 40% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 50% auto 0 !important;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n    margin: 20% auto 0 !important;\n  }\n\n  .newselect p {\n    margin-top: 66px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5pemF0aW9ubWVudS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxvcmdhbml6YXRpb25tZW51XFxvcmdhbml6YXRpb25tZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JnYW5pemF0aW9ubWVudS9vcmdhbml6YXRpb25tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURTQTtFQUNBLGdCQUFBO0FDTkE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1JBOztBRGNBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0FDWkE7O0FEZUU7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0FDYkY7O0FEZ0JBO0VBQ0MseUJBQUE7QUNiRDs7QURnQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0FDYkQ7O0FEZ0JDO0VBRUEscUNBQUE7RUFDSSx5QkFBQTtFQUNILFNBQUE7QUNkRjs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDZkE7O0FEb0JBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNILGtCQUFBO0FDakJEOztBRHNCQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDcEJBOztBRHNCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDckJBOztBRHdCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNBLG1CQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDdkJBOztBRHlCQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3ZCQTs7QUQwQkE7RUFDQSxXQUFBO0FDdkJBOztBRDRCQTtFQUVDO0lBRUksNkJBQUE7RUMzQkg7O0VEOEJEO0lBQ0EsMkJBQUE7RUMzQkM7O0VEOEJEO0lBQ0EsMkJBQUE7RUMzQkM7QUFDRjs7QUQ4QkM7RUFJQTtJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUNoQ0M7QUFDRjs7QURzQ0M7RUFJQztJQUdELDZCQUFBO0VDekNDO0FBQ0Y7O0FENkNBO0VBSUM7SUFFQSx1QkFBQTtJQUNBLDZCQUFBO0VDL0NDOztFRG1ERDtJQUNJLDJCQUFBO0VDaERIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmdhbml6YXRpb25tZW51L29yZ2FuaXphdGlvbm1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuLm1haW5hcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjMzJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5cclxufVxyXG4gIGlvbi1pdGVtXHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIH1cclxuICBcclxuLnNlbGVjdC10ZXh0IGJ1dHRvblxyXG57cGFkZGluZzoxcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW4taXRlbSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDoxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6MTVweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0ICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcblx0XHRib3JkZXI6MDtcclxuXHR9XHJcblx0XHJcbi5uZXdzZWxlY3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0dHJhbnNmb3JtOmluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiBmb250LXdlaWdodDo2MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuLS1ib3gtc2hhZG93OjA7XHJcbn1cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KSBhbmQoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKVxyXG5cdHtcclxuXHQubWFpbmFyZWEgaW1nXHJcblx0e1xyXG5cdCAgICBtYXJnaW46IDI5JSBhdXRvIDAgIWltcG9ydGFudDs7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3R7XHJcblx0bWFyZ2luLXRvcDo3MHB4ICFpbXBvcnRhbnQ7O1xyXG5cdH1cclxuXHRcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0bWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7O1xyXG5cdH1cclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGggOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQgOiA3MzZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMykgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcclxuIG1hcmdpbjogNDAlIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBcclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuXHRcdC5tYWluYXJlYSBpbWdcclxuIHtcclxuXHJcbiBtYXJnaW46IDUwJSBhdXRvIDAgIWltcG9ydGFudDs7XHJcbiB9XHJcblx0XHJcblx0fVxyXG5cdFxyXG5AbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50OztcclxuIG1hcmdpbjogMjAlIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcblxyXG4gLm5ld3NlbGVjdCBwe1xyXG4gICAgIG1hcmdpbi10b3A6IDY2cHggIWltcG9ydGFudDs7XHJcbiB9XHJcbiB9XHJcbiAgICIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzJTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLm5ld3NlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6MDtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiAyOSUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmV3c2VsZWN0IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDQwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDUwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogNjZweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/organizationmenu/organizationmenu.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/organizationmenu/organizationmenu.page.ts ***!
    \***********************************************************/

  /*! exports provided: OrganizationmenuPage */

  /***/
  function srcAppOrganizationmenuOrganizationmenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationmenuPage", function () {
      return OrganizationmenuPage;
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

    var OrganizationmenuPage = /*#__PURE__*/function () {
      function OrganizationmenuPage(sharedservice, translate, navController, router, alertController) {
        _classCallCheck(this, OrganizationmenuPage);

        this.sharedservice = sharedservice;
        this.translate = translate;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
      }

      _createClass(OrganizationmenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "organizationList",
        value: function organizationList() {
          var _this = this;

          var data = new FormData();
          data.append('security_key', 'b571bb06f3e196ce95f08c70324b9dd5b2d334c5');
          data.append('country_id', localStorage.getItem('Country_id'));
          data.append('city_id', localStorage.getItem('City_id'));
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('user/getOrganisations', data).subscribe(function (rdata) {
            console.log(rdata);
            _this.orgzationList = rdata['data'];
            console.log(_this.orgzationList);
          }, function (error) {
            _this.sharedservice.loaderDismiss();
          }, function () {
            _this.sharedservice.loaderDismiss();
          }); // this.sharedservice.sharedPostRequest('user/getOrganisations',data).subscribe((rdata: any) => {
          //   console.log(rdata);
          //   this.orgzationList = rdata['data']
          //   console.log(this.orgzationList)
          //  }, error => {
          // });
        }
      }, {
        key: "verifyAlert",
        value: function verifyAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var msg, btn_msg, plc_holder, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.translate.get('enter_verifi').subscribe(function (res) {
                      msg = res;
                    });
                    this.translate.get('done').subscribe(function (res) {
                      btn_msg = res;
                    });
                    this.translate.get('ent_organ').subscribe(function (res) {
                      plc_holder = res;
                    });
                    _context.next = 5;
                    return this.alertController.create({
                      cssClass: 'newalertcss',
                      backdropDismiss: false,
                      message: msg,
                      mode: 'ios',
                      inputs: [{
                        name: 'name1',
                        type: 'text',
                        placeholder: plc_holder
                      }],
                      buttons: [{
                        text: btn_msg,
                        handler: function handler(alertData) {
                          console.log(alertData.name1);

                          if (alertData.name1 == localStorage.getItem('ov_code')) {
                            _this2.organizationList();
                          }
                        }
                      }]
                    });

                  case 5:
                    alert = _context.sent;
                    _context.next = 8;
                    return alert.present();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectOrg",
        value: function selectOrg(e) {
          console.log(e);
          e.detail.value;
          console.log('pass', e.detail.value);

          if (e.detail.value) {
            var temp = e.detail.value.split(',');
            console.log(temp);
            var client_id = temp[0];
            localStorage.setItem('Client_id', client_id);
            var passcode = temp[1];
            console.log(passcode);
            localStorage.setItem('ov_code', passcode);
          }
        }
      }]);

      return OrganizationmenuPage;
    }();

    OrganizationmenuPage.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    OrganizationmenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-organizationmenu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./organizationmenu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/organizationmenu/organizationmenu.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./organizationmenu.page.scss */
      "./src/app/organizationmenu/organizationmenu.page.scss"))["default"]]
    })], OrganizationmenuPage);
    /***/
  }
}]);
//# sourceMappingURL=organizationmenu-organizationmenu-module-es5.js.map