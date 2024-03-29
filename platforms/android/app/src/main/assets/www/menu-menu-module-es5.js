function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n   <ion-back-button  icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <ion-title>{{'menu_option' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row >\n      <ion-col size=\"12\">\n   <ion-list class=\"newitem\">\n    <ion-item (click)=\"view_data()\">\n      <ion-label>{{'view_data' | translate}}</ion-label>\n      <!-- <ion-label><a class=\"viewinnn\" href=\"https://public.tableau.com/profile/mehul.sharma3900#!/vizhome/Safecity_Dashboard_Delhi_final/MumbaiStory\" target=\"_blank\">{{'view_data' | translate}}</a></ion-label> -->\n    </ion-item>\n  <ion-item (click)=\"legal()\">\n    <ion-label> {{'legal_menu' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"contact()\">\n    <ion-label>{{'contact_menu' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"wellness()\">\n    <ion-label>{{'Wellness_Resources' | translate}}</ion-label>\n  </ion-item>\n  \n  <ion-item (click)=\"report()\">\n    <ion-label>{{'incident_shared_by_me' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"safety()\">\n    <ion-label>{{'safety_shared_by_me' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"setting()\">\n    <ion-label>{{'settings' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"faq()\">\n    <ion-label>{{'faq_menu' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"about()\">\n    <ion-label>{{'about_safecity_menu' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"volunteer()\">\n    <ion-label>{{'volunteer_menu' | translate}}</ion-label>\n  </ion-item>\n    <ion-item (click)=\"donate()\">\n    <ion-label>{{'donate_menu' | translate}}</ion-label>\n  </ion-item>\n \n</ion-list>\n</ion-col>\n   </ion-row>\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/menu/menu-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/menu/menu-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
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


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var routes = [{
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }];

    var MenuPageRoutingModule = function MenuPageRoutingModule() {
      _classCallCheck(this, MenuPageRoutingModule);
    };

    MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
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


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/menu/menu-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.page.scss":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\na:focus {\n  outline: 0;\n}\n\n.viewinnn {\n  text-decoration: none;\n  color: #220E0E;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.newitem .item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  font-size: 18px;\n  --min-height:66px;\n  border-bottom: 1px solid #ddd;\n  --inner-border-width: 0 0 0px 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-left: 0;\n  border-right: 0;\n}\n\n.item .sc-ion-label-ios-h {\n  padding-left: 28px;\n}\n\n.item .sc-ion-label-md-h {\n  padding-left: 28px;\n}\n\n.newitem {\n  margin-bottom: 35px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FER0E7RUFFQSxxQkFBQTtFQUNBLGNBQUE7QUNEQTs7QURJQTtFQUlBLDhDQUFBO0FDRkE7O0FETUE7RUFFQSx1QkFBQTtBQ0pBOztBRE9BO0VBRUEscUJBQUE7QUNMQTs7QURPQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTEo7O0FET0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRFFBO0VBQ0EsY0FBQTtBQ0xBOztBRFFBO0VBQ0EsZ0JBQUE7QUNMQTs7QURTQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNJLCtCQUFBO0VBQ0MsZ0JBQUE7RUFDSCxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUEg7O0FEVUE7RUFFQSxrQkFBQTtBQ1JBOztBRFVBO0VBRUEsa0JBQUE7QUNSQTs7QURXQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQ1RBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcbmE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4udmlld2lubm5cclxue1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxuY29sb3I6IzIyMEUwRTtcclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5uZXdpdGVtIC5pdGVtXHJcblx0e1xyXG5cdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdC0tbWluLWhlaWdodDo2NnB4O1xyXG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcblx0ICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcblx0XHQgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0Ym9yZGVyLXRvcDpub25lO1xyXG5cdFx0XHRib3JkZXItbGVmdDowO1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6MDtcclxuXHR9XHJcblx0XHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWhcclxue1xyXG5wYWRkaW5nLWxlZnQ6MjhweDtcclxufVxyXG4uaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWhcclxue1xyXG5wYWRkaW5nLWxlZnQ6MjhweDtcclxufVxyXG5cdFxyXG4ubmV3aXRlbVxyXG57XHJcbm1hcmdpbi1ib3R0b206MzVweDtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn0iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4udmlld2lubm4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjIwRTBFO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubmV3aXRlbSAuaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtLW1pbi1oZWlnaHQ6NjZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLm5ld2l0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.page.ts":
  /*!***********************************!*\
    !*** ./src/app/menu/menu.page.ts ***!
    \***********************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
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

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(navController, router) {
        _classCallCheck(this, MenuPage);

        this.navController = navController;
        this.router = router;
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "view_data",
        value: function view_data() {
          this.navController.navigateForward("/viewdata");
        }
      }, {
        key: "volunteer",
        value: function volunteer() {
          this.navController.navigateForward("/volunteer");
        }
      }, {
        key: "donate",
        value: function donate() {
          this.navController.navigateForward("/donate");
        }
      }, {
        key: "contact",
        value: function contact() {
          this.navController.navigateForward("/contact");
        }
      }, {
        key: "setting",
        value: function setting() {
          this.navController.navigateForward("/setting");
        }
      }, {
        key: "faq",
        value: function faq() {
          this.navController.navigateForward("/faq");
        }
      }, {
        key: "report",
        value: function report() {
          this.navController.navigateForward("/myreport");
        }
      }, {
        key: "legal",
        value: function legal() {
          this.navController.navigateForward("/legalresources");
        }
      }, {
        key: "safety",
        value: function safety() {
          this.navController.navigateForward("/mysafety");
        }
      }, {
        key: "about",
        value: function about() {
          this.navController.navigateForward("/aboutsafecity");
        }
      }, {
        key: "wellness",
        value: function wellness() {
          this.navController.navigateForward("/wellness");
        }
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/menu/menu.page.scss"))["default"]]
    })], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map