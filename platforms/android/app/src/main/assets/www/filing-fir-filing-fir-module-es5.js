function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filing-fir-filing-fir-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/filing-fir/filing-fir.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filing-fir/filing-fir.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFilingFirFilingFirPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n   <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n  </ion-buttons>\n  <ion-title><div class=\"ion-text-wrap\">{{title}}</div></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"faq\">\n    <ion-card class=\"newfirin\"   *ngFor=\"let item of firList;let i=index\">\n        <ion-row (click)=\"toggleGroup(i)\">\n          <ion-col size=\"11\" text-left >\n            <h5 class=\"newhead\">{{item.title}}</h5>\n          </ion-col>\n          <ion-col size=\"1\" >\n\t\t  <div class=\"newicon\">\n            <ion-icon tappable class=\"cent\" [ngClass]=\"{active: isGroupShown(i)}\" item-right [name]=\"isGroupShown(i) ? 'chevron-up-outline' : 'chevron-down-outline'\"></ion-icon>\n\t\t\t</div>\n          </ion-col>\n        </ion-row>\n     \n\n      <div *ngIf=\"isGroupShown(i)\" >\n        <ion-row>\n          <ion-col size=\"12\" >\n\t\t  <!--  -->\n\t\t  <!-- <p>{{item.content}}</p> -->\n\t\t  <div class=\"newcontentin\" [innerHTML]= \"item.content\">\n\n   </div>\n          </ion-col>\n        </ion-row>\n   </div>\n </ion-card>\n    </div>\n\t\t<div class=\"newbottom\">\n\t<ion-row>\n          <ion-col size=\"12\">\n\t<p>{{'for_more_info' | translate}} <span><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://safecity.in/\">safecity.in</a></span></p>\n\t </ion-col>\n        </ion-row>\n\t</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/filing-fir/filing-fir-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/filing-fir/filing-fir-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FilingFIRPageRoutingModule */

  /***/
  function srcAppFilingFirFilingFirRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilingFIRPageRoutingModule", function () {
      return FilingFIRPageRoutingModule;
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


    var _filing_fir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filing-fir.page */
    "./src/app/filing-fir/filing-fir.page.ts");

    var routes = [{
      path: '',
      component: _filing_fir_page__WEBPACK_IMPORTED_MODULE_3__["FilingFIRPage"]
    }];

    var FilingFIRPageRoutingModule = function FilingFIRPageRoutingModule() {
      _classCallCheck(this, FilingFIRPageRoutingModule);
    };

    FilingFIRPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FilingFIRPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/filing-fir/filing-fir.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/filing-fir/filing-fir.module.ts ***!
    \*************************************************/

  /*! exports provided: FilingFIRPageModule */

  /***/
  function srcAppFilingFirFilingFirModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilingFIRPageModule", function () {
      return FilingFIRPageModule;
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


    var _filing_fir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./filing-fir-routing.module */
    "./src/app/filing-fir/filing-fir-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _filing_fir_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./filing-fir.page */
    "./src/app/filing-fir/filing-fir.page.ts");

    var FilingFIRPageModule = function FilingFIRPageModule() {
      _classCallCheck(this, FilingFIRPageModule);
    };

    FilingFIRPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filing_fir_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilingFIRPageRoutingModule"]],
      declarations: [_filing_fir_page__WEBPACK_IMPORTED_MODULE_7__["FilingFIRPage"]]
    })], FilingFIRPageModule);
    /***/
  },

  /***/
  "./src/app/filing-fir/filing-fir.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/filing-fir/filing-fir.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFilingFirFilingFirPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #592D8D;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newfirin {\n  box-shadow: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  padding: 20px 20px 10px 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newhead {\n  font-size: 17px;\n  font-weight: 400;\n  color: #292020;\n  margin-top: 0;\n}\n\n.newhead h5 {\n  font-size: 17px;\n  font-weight: 500;\n  color: #292020;\n}\n\n.faq {\n  width: 100%;\n  margin-top: 25px;\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --border-width: 0 0 0 0;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newcontent {\n  width: 100%;\n  height: auto;\n}\n\n.newicon ion-icon {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n.newicon {\n  text-align: right;\n  color: #292020;\n}\n\n.item-interactive.item-has-focus {\n  --highlight-background: transparent;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.newcontentin {\n  margin-bottom: 26px;\n  width: 100%;\n}\n\n.newcontentin p {\n  height: auto;\n  font-size: 16px;\n  color: #220E0E;\n  line-height: 24px;\n  margin-top: 0;\n  padding-left: 8px;\n}\n\n.newcontentin a {\n  text-decoration: none;\n}\n\n.newcontentin h5 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  color: #220E0E;\n  line-height: 24px;\n  margin-top: 0;\n  font-weight: 400;\n  margin-bottom: 0;\n  text-decoration: underline;\n}\n\n.newbottom {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 0 15px;\n}\n\n.newbottom p {\n  width: 100%;\n  height: auto;\n  float: left;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 500;\n  margin-bottom: 45px;\n}\n\n.newbottom span {\n  color: #592D8D;\n  font-size: 16px;\n  text-decoration: underline;\n}\n\n.newcontentin h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  color: #292020;\n  font-size: 16px;\n  line-height: 24px;\n  background-image: url(/assets/images/icons/dot.svg);\n  background-size: 5px;\n  background-repeat: no-repeat;\n  background-position: 4px 7px;\n  padding-left: 20px;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsaW5nLWZpci9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxmaWxpbmctZmlyXFxmaWxpbmctZmlyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlsaW5nLWZpci9maWxpbmctZmlyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURTQTtFQUNBLGdCQUFBO0FDTkE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFDRCxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBRUMsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNHLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSw0QkFBQTtFQUNILGFBQUE7RUFDQSxnQkFBQTtBQ1JEOztBRFdDO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNURDs7QURZQztFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNWRDs7QURjQztFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ1pEOztBRGdCQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLHNCQUFBO0VBQ0Qsd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0FDZEE7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNmQTs7QURvQkE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtBQ2xCQTs7QURxQkE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUNuQkE7O0FEc0JBO0VBQ0EsbUNBQUE7QUNuQkE7O0FEdUJBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUNyQkE7O0FEd0JBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0FDdEJBOztBRHlCQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDeEJBOztBRDJCQTtFQUdBLHFCQUFBO0FDMUJBOztBRDZCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUMzQkE7O0FENkJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzNCQTs7QUQ4QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDNUJBOztBRGlDQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUMvQkE7O0FEa0NBO0VBRUEsV0FBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvZmlsaW5nLWZpci9maWxpbmctZmlyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6NjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLm5ld2ZpcmluXHJcblx0e1xyXG5cdGJveC1zaGFkb3c6bm9uZTtcclxuXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci1yYWRpdXM6MDtcclxuXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xyXG5cdG1hcmdpbi10b3A6MDtcclxuXHRtYXJnaW4tYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdoZWFkXHJcblx0e1xyXG5cdGZvbnQtc2l6ZToxN3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdG1hcmdpbi10b3A6MDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2hlYWQgaDVcclxuXHR7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdC5mYXFcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRtYXJnaW4tdG9wOjI1cHg7XHJcblx0fVxyXG5cdFxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6MDtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyOm5vbmU7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubmV3Y29udGVudFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5cclxufVxyXG5cclxuXHJcbi5uZXdpY29uIGlvbi1pY29uXHJcbntcclxubWFyZ2luLXRvcDozcHg7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcblxyXG4ubmV3aWNvblxyXG57XHJcbnRleHQtYWxpZ246cmlnaHQ7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbn1cclxuXHJcbi5pdGVtLWludGVyYWN0aXZlLml0ZW0taGFzLWZvY3Vze1xyXG4tLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbi5uZXdsaXN0XHJcbntcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW5cclxue1xyXG5tYXJnaW4tYm90dG9tOjI2cHg7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW4gcFxyXG57XHJcblxyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbm1hcmdpbi10b3A6MDtcclxucGFkZGluZy1sZWZ0OjhweDtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpbiBhXHJcbntcclxuXHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG4ubmV3Y29udGVudGluIGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxubWFyZ2luLWJvdHRvbTowO1xyXG50ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcbi5uZXdib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuXHJcbi5uZXdib3R0b20gcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5mb250LXNpemU6MThweDtcclxubGluZS1oZWlnaHQ6MjRweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5tYXJnaW4tYm90dG9tOjQ1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm5ld2JvdHRvbSBzcGFuXHJcbntcclxuY29sb3I6IzU5MkQ4RDtcclxuZm9udC1zaXplOjE2cHg7XHJcbnRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW4gaDRcclxue1xyXG53aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzI5MjAyMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2RvdC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNHB4IDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHQiLCJoZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5uZXdmaXJpbiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5ld2hlYWQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3aGVhZCBoNSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG59XG5cbi5mYXEge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXdjb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5ld2ljb24gaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5ld2ljb24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyOTIwMjA7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5uZXdsaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm5ld2NvbnRlbnRpbiB7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3Y29udGVudGluIHAge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLm5ld2NvbnRlbnRpbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmV3Y29udGVudGluIGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmV3Ym90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm5ld2JvdHRvbSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbi5uZXdib3R0b20gc3BhbiB7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmV3Y29udGVudGluIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3Quc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDRweCA3cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/filing-fir/filing-fir.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/filing-fir/filing-fir.page.ts ***!
    \***********************************************/

  /*! exports provided: FilingFIRPage */

  /***/
  function srcAppFilingFirFilingFirPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilingFIRPage", function () {
      return FilingFIRPage;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var FilingFIRPage = /*#__PURE__*/function () {
      function FilingFIRPage(httpClient, translate, sharedservice, sanitizer) {
        _classCallCheck(this, FilingFIRPage);

        this.httpClient = httpClient;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.sanitizer = sanitizer;
        this.shownGroup = false;
      }

      _createClass(FilingFIRPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getIPCList();
        }
      }, {
        key: "getIPCList",
        value: function getIPCList() {
          var _this = this;

          var data = new FormData();
          data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
          data.append('country_id', localStorage.getItem('Country_id'));
          data.append('client_id', localStorage.getItem('Client_id'));
          data.append('lang_id', localStorage.getItem('Lang_id'));
          data.append('type', 'fir');
          data.append('content_for', 'mobile');
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this.firList = rdata.data;

            for (var i = 0; i < _this.firList.length; i++) {
              _this.firList[i].content = _this.sanitizer.bypassSecurityTrustHtml(_this.firList[i].content);
            }

            _this.title = rdata.title;
            console.log("fir list", _this.firList);
          }, function (error) {
            _this.sharedservice.loaderDismiss();
          }, function () {
            _this.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "toggleGroup",
        value: function toggleGroup(group) {
          if (this.isGroupShown(group)) {
            this.shownGroup = null;
          } else {
            this.shownGroup = group;
          }
        }
      }, {
        key: "isGroupShown",
        value: function isGroupShown(group) {
          return this.shownGroup === group;
        }
      }]);

      return FilingFIRPage;
    }();

    FilingFIRPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    FilingFIRPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filing-fir',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filing-fir.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/filing-fir/filing-fir.page.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filing-fir.page.scss */
      "./src/app/filing-fir/filing-fir.page.scss"))["default"]]
    })], FilingFIRPage);
    /***/
  }
}]);
//# sourceMappingURL=filing-fir-filing-fir-module-es5.js.map