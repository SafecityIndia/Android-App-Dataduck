function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <ion-title>{{'contact_menu' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"mainbgcontact\">\n<ion-row>\n     <ion-col col-12 >\n\t <!-- <div class=\"newarea\" [innerHTML]= \"content\" > -->\n\t <div class=\"newcontact\" [innerHTML]= \"content\" >\n\t  <!-- <h2 style=\"width:100%;height:auto;font-size:18px;font-weight:500;color:#220E0E;margin-bottom:12px;\">Get in touch</h2> -->\n        <!-- <h5 style=\"height:auto;font-size:16px;line-height:24px;font-weight:400;margin-bottom:0px;\">Give us a missed call to share your experience. This is only for India callers. Our team will call them back within 24 hours.</h5> -->\n\n      <!-- <a href=\"tel:+91 9876432456\"  rel=\"noopener noreferrer\" style=\"height:auto; display: block; text-decoration:none; font-size:16px;line-height:24px;font-weight:500;color:#592D8D;border-bottom:1px solid #ddd;margin-top: 10px; -->\n    <!-- padding-bottom: 10px; margin-bottom:15px;\">+91 9876432456</a> -->\n \n        <!-- <h5 style=\"height:auto;font-size:16px;line-height:24px;font-weight:400;    display: block;  margin-bottom:0px;\">Write To Us</h5> -->\n        <!-- <a href=\"mailto:info@reddotfoundation.org\"   style=\"height:auto;display: block; text-decoration:none;font-size:16px;line-height:24px;font-weight:500;color:#592D8D;border-bottom:1px solid #ddd;margin-top: 10px; -->\n    <!-- padding-bottom: 10px; margin-bottom:15px;\">info@reddotfoundation.org</a> -->\n \t </div>\n\t <!-- <div class=\"newarea\">\n\t <h2>Get in touch</h2>\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text >\n        <h5>Give us a missed call to share your experience. This is only for India callers. Our team will call them back within 24 hours.</h5>\n      </ion-text>\n      <p (click)=\"openDailerPad()\">+91 9876432456</p>\n     \n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text >\n        <h5>Write To Us</h5>\n      </ion-text>\n      <p (click)=\"openEmail()\">info@reddotfoundation.org</p>\n     \n \n    </ion-label>\n  </ion-item>\n \n  \n\t </div> -->\n\t </ion-col>\n   </ion-row>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/contact/contact-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/contact/contact-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactPageRoutingModule */

  /***/
  function srcAppContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
      return ContactPageRoutingModule;
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


    var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");

    var routes = [{
      path: '',
      component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }];

    var ContactPageRoutingModule = function ContactPageRoutingModule() {
      _classCallCheck(this, ContactPageRoutingModule);
    };

    ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.module.ts ***!
    \*******************************************/

  /*! exports provided: ContactPageModule */

  /***/
  function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
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


    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-routing.module */
    "./src/app/contact/contact-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _contact_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");

    var ContactPageModule = function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    };

    ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]],
      declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_7__["ContactPage"]]
    })], ContactPageModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainbgcontact {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 22%;\n}\n\n.newcontact {\n  width: 100%;\n  height: auto;\n  padding: 0 20px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainbgcontact {\n    top: 20%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainbgcontact {\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVBLGtCQUFBO0FDREE7O0FESUE7RUFFQSxTQUFBO0FDRkE7O0FETUE7RUFJQSw4Q0FBQTtBQ0pBOztBRFFBO0VBRUEsdUJBQUE7QUNOQTs7QURTQTtFQUVBLHFCQUFBO0FDUEE7O0FEU0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1BKOztBRFNBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNQQTs7QURVQTtFQUNBLGNBQUE7QUNQQTs7QURVQTtFQUNBLGdCQUFBO0FDUEE7O0FEV0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDVkE7O0FEY0E7RUFJQTtJQUVJLFFBQUE7RUNmRjtBQUNGOztBRG9CQztFQUlEO0lBRUksUUFBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcbi5tYWluYmdjb250YWN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjIlO1xyXG59XHJcblxyXG4ubmV3Y29udGFjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4ubWFpbmJnY29udGFjdCB7XHJcbiAgICBcclxuICAgIHRvcDogMjAlO1xyXG59XHJcblxyXG4gXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6NjQwcHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDM2MHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluYmdjb250YWN0e1xyXG4gICBcclxuICAgIHRvcDogMjAlO1xyXG59XHJcblxyXG4gXHJcbiB9IiwiaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYmdjb250YWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyJTtcbn1cblxuLm5ld2NvbnRhY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5iZ2NvbnRhY3Qge1xuICAgIHRvcDogMjAlO1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYmdjb250YWN0IHtcbiAgICB0b3A6IDIwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact/contact.page.ts ***!
    \*****************************************/

  /*! exports provided: ContactPage */

  /***/
  function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var ContactPage = /*#__PURE__*/function () {
      function ContactPage(callNumber, sharedservice, httpClient, sanitizer) {
        _classCallCheck(this, ContactPage);

        this.callNumber = callNumber;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/faq/getClientResourceList/';
        this.getContactinfo();
      }

      _createClass(ContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getContactinfo",
        value: function getContactinfo() {
          var _this = this;

          var data = new FormData();
          data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
          data.append('country_id', localStorage.getItem('Country_id'));
          data.append('client_id', localStorage.getItem('Client_id'));
          data.append('lang_id', localStorage.getItem('Lang_id'));
          data.append('type', 'contact_us');
          data.append('content_for', 'mobile');
          this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this.contatc_list = rdata.data;
            _this.content = _this.sanitizer.bypassSecurityTrustHtml(rdata.data[0].content);
            _this.title = rdata.data[0].title;
            console.log("contatc_list ", _this.contatc_list);
          }, function (error) {});
        }
      }]);

      return ContactPage;
    }();

    ContactPage.ctorParameters = function () {
      return [{
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/contact/contact.page.scss"))["default"]]
    })], ContactPage);
    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map