function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'help_menu' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"help\">\r\n   \r\n<ion-row>\r\n <ion-col size=\"12\">\r\n  <!-- <form [formGroup]=\"form\"> -->\r\n <ion-item>\r\n    <ion-label class=\"newlabel\" position=\"stacked\">{{'emergency_number_in' | translate}}</ion-label>\r\n    <ion-select placeholder=\"{{'select_one' | translate}}\" (ionChange)=\"onOptChange($event)\"  [(ngModel)]=\"country\">\r\n      <ion-select-option  *ngFor=\"let item of country_list\" value=\"{{item.country_id}}\">{{item.country_name}}</ion-select-option>\r\n    </ion-select>\r\n\t\r\n  </ion-item>\r\n  <!-- </form> -->\r\n  <ion-card  *ngIf=\"heliplinelist.length > 0\">\r\n  <ion-item *ngFor=\"let item of heliplinelist\">\r\n    <ion-label>{{item.emergency_title}}:<h4 class=\"heading\" (click)=\"call(item.emergency_no)\">{{item.emergency_no}}</h4></ion-label>\r\n  </ion-item>\r\n  <!-- <ion-item >\r\n\r\n    <ion-label>Domestic Violence Helpline: <h4 class=\"heading\">100</h4></ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label>Women’s Safety Hotline: <h4 class=\"heading\">100</h4></ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n     <ion-label>Police Emergency Number: <h4 class=\"heading\">100</h4></ion-label>\r\n  </ion-item> -->\r\n</ion-card>\r\n   </ion-col>\r\n    </ion-row>\r\n<ion-row>\r\n <ion-col size=\"12\">\r\n<ion-item lines=\"none\" class=\"newcardhelp\" (click)= \"hospital()\">\r\n  <ion-label>{{'view_hospital' | translate}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcardhelp\" (click)= \"policein()\">\r\n  <ion-label>{{'view_police_station' | translate}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item *ngIf=\"country_id == '101'\" lines=\"none\" class=\"newcardhelp\" (click)= \"legal()\">\r\n  <ion-label>{{'more_legal_resources' | translate}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n </ion-col>\r\n    </ion-row>\r\n\t</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/help/help-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/help/help-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HelpPageRoutingModule */

  /***/
  function srcAppHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function () {
      return HelpPageRoutingModule;
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


    var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    var routes = [{
      path: '',
      component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }];

    var HelpPageRoutingModule = function HelpPageRoutingModule() {
      _classCallCheck(this, HelpPageRoutingModule);
    };

    HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/help/help.module.ts":
  /*!*************************************!*\
    !*** ./src/app/help/help.module.ts ***!
    \*************************************/

  /*! exports provided: HelpPageModule */

  /***/
  function srcAppHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
      return HelpPageModule;
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


    var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./help-routing.module */
    "./src/app/help/help-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _help_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    var HelpPageModule = function HelpPageModule() {
      _classCallCheck(this, HelpPageModule);
    };

    HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]],
      declarations: [_help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"]]
    })], HelpPageModule);
    /***/
  },

  /***/
  "./src/app/help/help.page.scss":
  /*!*************************************!*\
    !*** ./src/app/help/help.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.help {\n  width: 100%;\n  height: auto;\n  margin-top: 30px;\n  padding: 0 12px;\n  margin-bottom: 100px;\n}\n\n.newcardhelp {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n  font-size: 17px;\n  font-weight: 400;\n  --min-height: 60px;\n  background-color: #fff;\n  padding-right: 10px;\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start: 20px!important;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n  margin-bottom: 10px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\nion-item {\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0 0;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  margin-bottom: 10px;\n  border: none;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 80px;\n}\n\nion-card {\n  -webkit-margin-start: 4px;\n          margin-inline-start: 4px;\n  -webkit-margin-end: 4px;\n          margin-inline-end: 4px;\n  border-radius: 6px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin: 0;\n}\n\nion-card .item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start:20px;\n}\n\nion-card .sc-ion-label-ios-h {\n  white-space: inherit;\n  font-size: 17px;\n  font-weight: 400;\n  padding-right: 5px;\n  white-space: inherit;\n  margin: 0;\n}\n\nion-card .sc-ion-label-md-h {\n  white-space: inherit;\n  font-size: 17px;\n  font-weight: 400;\n  padding-right: 5px;\n  margin: 0;\n}\n\n.item .sc-ion-label-ios-h {\n  white-space: inherit;\n}\n\n.item .sc-ion-label-md-h {\n  white-space: inherit;\n}\n\n.newcardhelp.md {\n  --inner-padding-end: 12px;\n}\n\n.heading {\n  color: #592D8D;\n  display: inline-flex;\n  font-size: 17px;\n  font-weight: bold;\n  font-weight: 500;\n  padding-left: 0;\n  text-decoration: underline;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 17px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n  transform: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxoZWxwXFxoZWxwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaGVscC9oZWxwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNQRDs7QURVQztFQUVBLGtCQUFBO0VBR0Qsa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDSSxrQkFBQTtFQUNKLHNCQUFBO0VBQ0ksbUJBQUE7RUFDSixxQ0FBQTtFQUNDLCtCQUFBO0FDUkQ7O0FEWUE7RUFFQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRFlBO0VBQ0MseUJBQUE7QUNURDs7QURXQTtFQUVBLG1DQUFBO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtFQUNKLDJCQUFBO0FDVEE7O0FEYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0FDVkQ7O0FEY0U7RUFFRCxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0ksd0JBQUE7RUFDQyxvQkFBQTtFQUNILG1CQUFBO0VBQ0EsWUFBQTtBQ1pIOztBRGdCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZEE7O0FEaUJBO0VBRUEseUJBQUE7VUFBQSx3QkFBQTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7RUFDSCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFHRCxrREFBQTtFQUNBLFNBQUE7QUNmQTs7QURrQkE7RUFFQyxxQ0FBQTtFQUNBLG9CQUFBO0FDaEJEOztBRG1CQztFQUVBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUNqQkQ7O0FEb0JDO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNsQkQ7O0FEc0JDO0VBRUEsb0JBQUE7QUNwQkQ7O0FEdUJDO0VBRUEsb0JBQUE7QUNyQkQ7O0FEdUJDO0VBQ0EseUJBQUE7QUNwQkQ7O0FEdUJBO0VBRUEsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNyQkE7O0FEd0JBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNILGtCQUFBO0FDckJEIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVscFxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDphdXRvO1xyXG5cdG1hcmdpbi10b3A6MzBweDtcclxuXHRwYWRkaW5nOjAgMTJweDtcclxuXHRtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FyZGhlbHBcclxuXHR7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4td2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4tbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbmZvbnQtc2l6ZToxN3B4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDYwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAyMHB4IWltcG9ydGFudDtcclxuXHR9XHJcblx0XHJcblx0XHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxubWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc2VsZWN0LXRleHQgYnV0dG9uXHJcbntwYWRkaW5nOjFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW1cclxue1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbi0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbi5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdH1cclxuXHRcclxuXHJcblx0IC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG5cdCAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFxyXG5cdH1cclxuXHRcclxuLm5ld3NlbGVjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxubWFyZ2luLXRvcDo4MHB4O1xyXG59XHJcblxyXG5pb24tY2FyZFxyXG57XHJcbm1hcmdpbi1pbmxpbmUtc3RhcnQ6IDRweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czo2cHg7XHJcblx0cGFkZGluZy10b3A6MTVweDtcclxuXHRwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbi1tb3otYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbmJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5tYXJnaW46MDtcclxufVxyXG5cclxuaW9uLWNhcmQgLml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OjIwcHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1jYXJkIC5zYy1pb24tbGFiZWwtaW9zLWhcclxuXHR7XHJcblx0d2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0cGFkZGluZy1yaWdodDo1cHg7XHJcblx0d2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuXHRtYXJnaW46MDtcclxuXHR9XHJcblx0XHJcblx0aW9uLWNhcmQgLnNjLWlvbi1sYWJlbC1tZC1oXHJcblx0e1xyXG5cdHdoaXRlLXNwYWNlOmluaGVyaXQ7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdHBhZGRpbmctcmlnaHQ6NXB4O1xyXG5cdG1hcmdpbjowO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oXHJcblx0e1xyXG5cdHdoaXRlLXNwYWNlOmluaGVyaXQ7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaFxyXG5cdHtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5cdH1cclxuXHQubmV3Y2FyZGhlbHAubWR7XHJcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcclxufVx0XHJcblxyXG4uaGVhZGluZ1xyXG57XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbmZvbnQtc2l6ZToxN3B4O1xyXG5mb250LXdlaWdodDpib2xkO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbnBhZGRpbmctbGVmdDowO1xyXG50ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0dHJhbnNmb3JtOmluaGVyaXQ7XHJcbn1cclxuXHJcblx0XHJcblx0IiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDY1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDY1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWxwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLm5ld2NhcmRoZWxwIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweCFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmluLWl0ZW0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLml0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmV3c2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDRweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1jYXJkIC5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjIwcHg7XG59XG5cbmlvbi1jYXJkIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1jYXJkIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4ubmV3Y2FyZGhlbHAubWQge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/help/help.page.ts":
  /*!***********************************!*\
    !*** ./src/app/help/help.page.ts ***!
    \***********************************/

  /*! exports provided: HelpPage */

  /***/
  function srcAppHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
      return HelpPage;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var HelpPage = /*#__PURE__*/function () {
      function HelpPage(navController, translate, formBuilder, sharedservice, router, httpClient, callNumber) {
        var _this = this;

        _classCallCheck(this, HelpPage);

        this.navController = navController;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.sharedservice = sharedservice;
        this.router = router;
        this.httpClient = httpClient;
        this.callNumber = callNumber;
        this.heliplinelist = [];
        this.sharedData = this.sharedservice.getData();
        this.country_id = localStorage.getItem('Country_id');
        this.apiurl = 'http://101.53.143.7/~dataduck/safecity/api/common_controller/';
        console.log(this.country_id); //   this.form = formBuilder.group({      
        //     country: [localStorage.getItem('Country_id')]
        // });

        var data = new FormData();
        data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
        var loadertext;
        this.translate.get('loadertext').subscribe(function (res) {
          loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe(function (rdata) {
          console.log(rdata);
          _this.country_list = rdata['data'];
          console.log(_this.country_list); //this.sharedData['country_id']

          _this.getEmergencyhelplinelist(localStorage.getItem('Country_id'));
        }, function (error) {
          _this.sharedservice.loaderDismiss();
        }, function () {
          _this.sharedservice.loaderDismiss();
        }); // this.sharedData['roll'] = '22'
        // this.sharedservice.setData(this.sharedData)
      }

      _createClass(HelpPage, [{
        key: "onOptChange",
        value: function onOptChange(e) {
          console.log(e);
          console.log(e.detail.value); // this.sharedData['country_id'] =e.detail.value;
          // this.sharedservice.setData(this.sharedData)
          // console.log(this.sharedData)

          this.getEmergencyhelplinelist(e.detail.value);
        }
      }, {
        key: "getEmergencyhelplinelist",
        value: function getEmergencyhelplinelist(country_id) {
          var _this2 = this;

          var data1 = new FormData();
          data1.append("security_key", '99402b5fff8f2a45890fb8bf6de094ee00a210ce');
          data1.append("country_id", country_id);
          data1.append('city_id', localStorage.getItem('City_id'));
          data1.append("lang_id", localStorage.getItem('Lang_id')); // console.log(this.sharedData)

          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('common_controller/emergencyHelpList', data1).subscribe(function (rdata) {
            console.log(rdata);

            if (rdata['status'] == true) {
              _this2.heliplinelist = rdata['data'];
              console.log(_this2.heliplinelist);
            } else {
              _this2.heliplinelist = [];
            }
          }, function (error) {
            _this2.sharedservice.loaderDismiss();
          }, function () {
            _this2.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "call",
        value: function call(no) {
          console.log('call clicked', no);
          this.callNumber.callNumber(no, true).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          setTimeout(function () {
            _this3.country = localStorage.getItem('Country_id');
          }, 700);
        }
      }, {
        key: "hospital",
        value: function hospital() {
          this.navController.navigateForward("/hospital");
        }
      }, {
        key: "policein",
        value: function policein() {
          this.navController.navigateForward("/police");
        }
      }, {
        key: "legal",
        value: function legal() {
          this.navController.navigateForward("/legalresources");
        }
      }]);

      return HelpPage;
    }();

    HelpPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
      }];
    };

    HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-help',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./help.page.scss */
      "./src/app/help/help.page.scss"))["default"]]
    })], HelpPage);
    /***/
  }
}]);
//# sourceMappingURL=help-help-module-es5.js.map