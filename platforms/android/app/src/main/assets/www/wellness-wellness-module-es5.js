function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wellness-wellness-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wellness/wellness.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wellness/wellness.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWellnessWellnessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <div class=\"ion-text-wrap\">{{'Wellness_Resources' | translate}}</div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wellnness\">\n        <p>{{'coming_soon' | translate}}</p>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/wellness/wellness-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/wellness/wellness-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: WellnessPageRoutingModule */

  /***/
  function srcAppWellnessWellnessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WellnessPageRoutingModule", function () {
      return WellnessPageRoutingModule;
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


    var _wellness_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wellness.page */
    "./src/app/wellness/wellness.page.ts");

    var routes = [{
      path: '',
      component: _wellness_page__WEBPACK_IMPORTED_MODULE_3__["WellnessPage"]
    }];

    var WellnessPageRoutingModule = function WellnessPageRoutingModule() {
      _classCallCheck(this, WellnessPageRoutingModule);
    };

    WellnessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WellnessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wellness/wellness.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/wellness/wellness.module.ts ***!
    \*********************************************/

  /*! exports provided: WellnessPageModule */

  /***/
  function srcAppWellnessWellnessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WellnessPageModule", function () {
      return WellnessPageModule;
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


    var _wellness_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wellness-routing.module */
    "./src/app/wellness/wellness-routing.module.ts");
    /* harmony import */


    var _wellness_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wellness.page */
    "./src/app/wellness/wellness.page.ts");

    var WellnessPageModule = function WellnessPageModule() {
      _classCallCheck(this, WellnessPageModule);
    };

    WellnessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _wellness_routing_module__WEBPACK_IMPORTED_MODULE_6__["WellnessPageRoutingModule"]],
      declarations: [_wellness_page__WEBPACK_IMPORTED_MODULE_7__["WellnessPage"]]
    })], WellnessPageModule);
    /***/
  },

  /***/
  "./src/app/wellness/wellness.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/wellness/wellness.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWellnessWellnessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.wellnness {\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n}\n\n.wellnness p {\n  width: 100%;\n  font-size: 22px;\n  font-weight: 500;\n  color: rgba(203, 201, 201, 0.97);\n  margin: 0 auto;\n  height: 100vh;\n  top: 39%;\n  position: absolute;\n  margin: 0 auto;\n  height: 100vh;\n  top: 40%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsbG5lc3MvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcd2VsbG5lc3NcXHdlbGxuZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsbG5lc3Mvd2VsbG5lc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUdJLDhDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC93ZWxsbmVzcy93ZWxsbmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMkYxMTUzO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmJhY2tidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4ud2VsbG5uZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGxubmVzcyBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDIwMywgMjAxLCAyMDEsIDAuOTcpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOiAzOSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMSU7XHJcbiAgICAvLyBQT1NJVElPTjogQUJTT0xVVEU7XHJcbn0iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA3NXB4O1xufVxuXG4ud2VsbG5uZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGxubmVzcyBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoMjAzLCAyMDEsIDIwMSwgMC45Nyk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDM5JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiA0MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/wellness/wellness.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/wellness/wellness.page.ts ***!
    \*******************************************/

  /*! exports provided: WellnessPage */

  /***/
  function srcAppWellnessWellnessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WellnessPage", function () {
      return WellnessPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WellnessPage = /*#__PURE__*/function () {
      function WellnessPage() {
        _classCallCheck(this, WellnessPage);
      }

      _createClass(WellnessPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WellnessPage;
    }();

    WellnessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wellness',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wellness.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wellness/wellness.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wellness.page.scss */
      "./src/app/wellness/wellness.page.scss"))["default"]]
    })], WellnessPage);
    /***/
  }
}]);
//# sourceMappingURL=wellness-wellness-module-es5.js.map