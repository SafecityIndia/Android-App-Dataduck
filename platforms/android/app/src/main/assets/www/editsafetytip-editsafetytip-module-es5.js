function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editsafetytip-editsafetytip-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editsafetytip/editsafetytip.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editsafetytip/editsafetytip.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditsafetytipEditsafetytipPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/viewreport' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons> \n  <ion-title><div class=\"ion-text-wrap\">{{'edit_safety_tip' | translate }}</div></ion-title>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"newbg\">\n  <form [formGroup]=\"editsafetyForm\" (ngSubmit)=\"editSafetyTip()\">\n<ion-row>\n      <ion-col col-12>\n<ion-item>\n  <ion-label position=\"stacked\">{{'location_for_which_you_want_to_submit_safety_tip' | translate }}</ion-label>\n  <ion-input type=\"text\" formControlName=\"location\" (ionChange)=\"getlatlong(editsafetyForm.value.location)\" id=\"autocomplete3\"></ion-input>\n</ion-item>\n\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">{{'map_move_pin' | translate }}:</ion-label>\n  <!-- <div class=\"newarea\"> -->\n  <!-- <ion-input type=\"text\"></ion-input> -->\n   <!-- <img  src=\"assets/images/icons/location.svg\"/> -->\n   <!-- </div> -->\n   <div #map id=\"map\" ></div>\n    <!-- <img class=\"newloc\" src=\"assets/images/googleimg.png\"/> -->\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">{{'safety_tips' | translate }}</ion-label>\n  <ion-textarea rows=\"4\" cols=\"15\" placeholder=\"{{'enter_any_notes_here' | translate}}\" formControlName=\"safety_desc\"></ion-textarea>\n</ion-item>\n<ion-item >\n  <ion-label position=\"stacked\" >{{'please_enter_title_for_safety_tips' | translate}}</ion-label>\n  <ion-input type=\"text\" formControlName=\"safety_title\"></ion-input>\n</ion-item>\n\n\t\n\t \n\t <ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" type=\"submit\">{{'button_done' | translate }}</ion-button>\n  </ion-col>\n  </ion-row>\n\t </ion-col>\n    </ion-row>\n  </form>\n\t</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EditsafetytipPageRoutingModule */

  /***/
  function srcAppEditsafetytipEditsafetytipRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsafetytipPageRoutingModule", function () {
      return EditsafetytipPageRoutingModule;
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


    var _editsafetytip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editsafetytip.page */
    "./src/app/editsafetytip/editsafetytip.page.ts");

    var routes = [{
      path: '',
      component: _editsafetytip_page__WEBPACK_IMPORTED_MODULE_3__["EditsafetytipPage"]
    }];

    var EditsafetytipPageRoutingModule = function EditsafetytipPageRoutingModule() {
      _classCallCheck(this, EditsafetytipPageRoutingModule);
    };

    EditsafetytipPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditsafetytipPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditsafetytipPageModule */

  /***/
  function srcAppEditsafetytipEditsafetytipModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsafetytipPageModule", function () {
      return EditsafetytipPageModule;
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


    var _editsafetytip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editsafetytip-routing.module */
    "./src/app/editsafetytip/editsafetytip-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _editsafetytip_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./editsafetytip.page */
    "./src/app/editsafetytip/editsafetytip.page.ts");

    var EditsafetytipPageModule = function EditsafetytipPageModule() {
      _classCallCheck(this, EditsafetytipPageModule);
    };

    EditsafetytipPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editsafetytip_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditsafetytipPageRoutingModule"]],
      declarations: [_editsafetytip_page__WEBPACK_IMPORTED_MODULE_7__["EditsafetytipPage"]]
    })], EditsafetytipPageModule);
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditsafetytipEditsafetytipPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n#map {\n  width: 100%;\n  min-height: 330px;\n  padding: 0 15px;\n}\n\n.newinput .newloc {\n  border: none;\n  padding: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 18px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  border: none;\n}\n\nion-select {\n  width: 100%;\n  margin-top: 0;\n  white-space: inherit;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\n.newbg {\n  width: 100%;\n  height: auto;\n  padding: 0 20px;\n  margin-top: 25px;\n  margin-bottom: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.item .sc-ion-label-ios-h {\n  margin-bottom: 10px;\n}\n\n.item .sc-ion-label-md-h {\n  margin-bottom: 10px;\n}\n\nion-textarea {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.alert-radio-label.sc-ion-alert-ios {\n  white-space: inherit;\n}\n\nion-alert.alert-radio-button {\n  white-space: inherit !important;\n}\n\n.my-custom-class .alert-radio-button {\n  border-bottom: 1px solid #ddd;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 0;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 35px auto 140px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newinput img {\n  margin-top: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  border: 1px solid #ddd;\n  padding: 8px;\n  margin-bottom: 0;\n  border-left: 0;\n  border-radius: 0 3px 3px 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.newarea {\n  display: inline-flex;\n  width: 100%;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  transform: inherit;\n  white-space: inherit;\n  font-size: 15px;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n  white-space: inherit;\n  font-size: 15px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.alert-radio-group.alert-radio-label {\n  white-space: inherit;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  transform: inherit;\n  white-space: inherit;\n}\n\n.newinput ion-input {\n  border-radius: 3px 0px 0px 3px;\n}\n\n.newinput ion-datetime {\n  border-radius: 3px 0px 0px 3px;\n}\n\nion-datetime {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  --min-height: 40px;\n  --padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHNhZmV0eXRpcC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxlZGl0c2FmZXR5dGlwXFxlZGl0c2FmZXR5dGlwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdHNhZmV0eXRpcC9lZGl0c2FmZXR5dGlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FESUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FDRko7O0FESUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZBOztBRE1BO0VBSUEsOENBQUE7QUNKQTs7QURRQTtFQUVBLHVCQUFBO0FDTkE7O0FEU0E7RUFFQSxxQkFBQTtBQ1BBOztBRFNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURTQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDUEE7O0FEV0E7RUFDQSxjQUFBO0FDUkE7O0FEV0E7RUFDQSxnQkFBQTtBQ1JBOztBRFdBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFVBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0FDUkE7O0FEV0U7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNURjs7QURZQTtFQUNDLHlCQUFBO0FDVEQ7O0FEWUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0FDVEQ7O0FEWUM7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1ZEOztBRGFBO0VBQ0EsV0FBQTtFQUNJLGFBQUE7RUFDSCxvQkFBQTtBQ1ZEOztBRGFBO0VBRUEsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWkE7O0FEY0E7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0csZ0JBQUE7QUNaSDs7QURlQTtFQUNBLG1CQUFBO0FDWkE7O0FEY0E7RUFDQSxtQkFBQTtBQ1hBOztBRGFBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNHLGdCQUFBO0FDWEg7O0FEY0E7RUFFQSxvQkFBQTtBQ1pBOztBRGVBO0VBRUEsb0JBQUE7QUNiQTs7QURnQkE7RUFFQSwrQkFBQTtBQ2RBOztBRGlCQTtFQUVBLDZCQUFBO0FDZkE7O0FEa0JBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakJBOztBRHFCQTtFQUNHLGFBQUE7RUFDQyx1QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDSCxxQkFBQTtVQUFBLG9CQUFBO0FDbEJEOztBRHFCQTtFQUVBLG9CQUFBO0VBQ0EsV0FBQTtBQ25CQTs7QURxQkE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ25CQTs7QURxQkE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ25CQTs7QURxQkE7RUFFQSxvQkFBQTtBQ25CQTs7QURxQkE7RUFFQSxvQkFBQTtBQ25CQTs7QURzQkE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FDcEJBOztBRHVCQTtFQUVHLDhCQUFBO0FDckJIOztBRHdCQTtFQUVHLDhCQUFBO0FDdEJIOztBRHlCQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0FDdkJIIiwiZmlsZSI6InNyYy9hcHAvZWRpdHNhZmV0eXRpcC9lZGl0c2FmZXR5dGlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcbiNtYXB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWluLWhlaWdodDozMzBweDtcclxuXHJcbiAgICBwYWRkaW5nOjAgMTVweDtcclxuICAgIH1cclxuLm5ld2lucHV0IC5uZXdsb2MgXHJcbntcclxuYm9yZGVyOm5vbmU7XHJcbnBhZGRpbmc6MDtcclxufVxyXG5cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5cclxufVxyXG4gIGlvbi1pdGVtXHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206MThweDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcblx0Ym9yZGVyOm5vbmU7XHJcblx0fVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcblx0d2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld2JnXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyMHB4O1xyXG5tYXJnaW4tdG9wOjI1cHg7XHJcbm1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaW9uLWlucHV0XHJcbntcclxuLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tdG9wOjA7XHJcbiAgIG1pbi1oZWlnaHQ6IDQwcHhcclxufVxyXG5cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaHtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaHtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYVxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxubWFyZ2luLXRvcDowO1xyXG4gICBtaW4taGVpZ2h0OiA0MHB4XHJcbn1cclxuXHJcbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWRcclxue1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbmlvbi1hbGVydC5hbGVydC1yYWRpby1idXR0b25cclxue1xyXG53aGl0ZS1zcGFjZTppbmhlcml0IWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtcmFkaW8tYnV0dG9uXHJcbntcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDoxMDAlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDowO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjM1cHggYXV0byAxNDBweDtcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuLm5ld2lucHV0IGltZ3tcclxuICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcblx0bWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuXHJcbi5uZXdhcmVhXHJcbntcclxuZGlzcGxheTppbmxpbmUtZmxleDtcclxud2lkdGg6MTAwJTtcclxufVxyXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtaW9zLWhcclxue1xyXG50cmFuc2Zvcm06aW5oZXJpdDtcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuZm9udC1zaXplOjE1cHg7XHJcbn1cclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWhcclxue1xyXG50cmFuc2Zvcm06aW5oZXJpdDtcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuZm9udC1zaXplOjE1cHg7XHJcbn1cclxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuLmFsZXJ0LXJhZGlvLWdyb3VwLmFsZXJ0LXJhZGlvLWxhYmVse1xyXG5cclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufSBcclxuXHJcbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4ubmV3aW5wdXQgaW9uLWlucHV0XHJcbntcclxuICAgYm9yZGVyLXJhZGl1czozcHggMHB4IDBweCAzcHg7XHJcbn1cclxuXHJcbi5uZXdpbnB1dCBpb24tZGF0ZXRpbWVcclxue1xyXG4gICBib3JkZXItcmFkaXVzOjNweCAwcHggMHB4IDNweDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lXHJcbntcclxuLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tdG9wOjA7XHJcbiAgIC0tbWluLWhlaWdodDogNDBweDtcclxuICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3aW5wdXQgLm5ld2xvYyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdiZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbmlvbi1hbGVydC5hbGVydC1yYWRpby1idXR0b24ge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC1yYWRpby1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDM1cHggYXV0byAxNDBweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2lucHV0IGltZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbn1cblxuLm5ld2FyZWEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLmFsZXJ0LXJhZGlvLWdyb3VwLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5uZXdpbnB1dCBpb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAzcHggMHB4IDBweCAzcHg7XG59XG5cbi5uZXdpbnB1dCBpb24tZGF0ZXRpbWUge1xuICBib3JkZXItcmFkaXVzOiAzcHggMHB4IDBweCAzcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAtLXBhZGRpbmctdG9wOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip.page.ts ***!
    \*****************************************************/

  /*! exports provided: EditsafetytipPage */

  /***/
  function srcAppEditsafetytipEditsafetytipPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsafetytipPage", function () {
      return EditsafetytipPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EditsafetytipPage = /*#__PURE__*/function () {
      function EditsafetytipPage(sharedservice, navContrl, route, formBuilder, httpClient) {
        var _this = this;

        _classCallCheck(this, EditsafetytipPage);

        this.sharedservice = sharedservice;
        this.navContrl = navContrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.lat = '';
        this["long"] = '';
        this.location = '';
        this.area = '';
        this.safety_title = '';
        this.safety_desc = '';
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/safety-tip/';
        this.route.queryParams.subscribe(function (params) {
          _this.location = params["location"];
          _this.city = params["city"];
          _this.state = params["state"];
          _this.country = params["country"];
          _this.landmark = params['landmark'];
          _this.location = params["location"];
          _this.lat = params["lat"];
          _this["long"] = params["long"];
          _this.safety_title = params["safety_title"];
          _this.safety_desc = params["safety_desc"];
          _this.safetip_id = localStorage.getItem('editSafety_id'); // this.safetip_id = params["safety_tip_id"];

          _this.editsafetyForm.controls['location'].setValue(_this.location);

          _this.editsafetyForm.controls['safety_title'].setValue(_this.safety_title);

          _this.editsafetyForm.controls['safety_desc'].setValue(_this.safety_desc);
        });
        this.editsafetyForm = formBuilder.group({
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          safety_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          safety_desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          lat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          "long": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(EditsafetytipPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.showMap();
          this.initAutocomplete();
        }
      }, {
        key: "showMap",
        value: function showMap() {
          console.log('hi');
          console.log(this.lat);
          console.log(this["long"]);
          var location = new google.maps.LatLng(this.lat, this["long"]);
          var options = {
            center: location,
            zoom: 5,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            gestureHandling: 'cooperative',
            fullscreenControl: false
          };
          console.log(options);
          this.map = new google.maps.Map(this.mapRef.nativeElement, options);
          this.addMarkersToMap(this.lat, this["long"]);
        }
      }, {
        key: "addMarkersToMap",
        value: function addMarkersToMap(lat, _long) {
          var position = new google.maps.LatLng(lat, _long);
          var mapMarker = new google.maps.Marker({
            position: position,
            title: this.safety_title,
            // latitude: marker.latitude,
            // longitude: marker.longitude,
            animation: 'DROP',
            draggable: true
          });
          mapMarker.setMap(this.map);
          google.maps.event.addListener(mapMarker, 'dragend', function () {
            var _this2 = this;

            console.log(mapMarker);
            var markerlatlong = mapMarker.getPosition();
            console.log("latlong" + markerlatlong);
            console.log("lat" + mapMarker.getPosition().lat());
            console.log("long" + mapMarker.getPosition().lng()); //this.placeMarkerAndPanTo(e.latLng, this.map);

            var lat = JSON.stringify(mapMarker.getPosition().lat());
            var longi = JSON.stringify(mapMarker.getPosition().lng()); //code for getting formatted address from the selected latitude and longitude 

            var geocoder = new google.maps.Geocoder();
            var latlng = {
              lat: parseFloat(lat),
              lng: parseFloat(longi)
            };
            geocoder.geocode({
              location: latlng
            }, function (results, status) {
              if (status === "OK") {
                if (results[0]) {
                  console.log(results[0]);
                  _this2.title = results[0].formatted_address; // localStorage.setItem('address_police', this.title)

                  console.log(_this2.title);

                  _this2.editsafetyForm.controls['location'].setValue(_this2.title);

                  _this2.autoaddress = [];
                  var street_number = '';
                  var route = '';
                  var localbuilding = '';
                  _this2.country = undefined;
                  _this2.state = undefined;
                  _this2.city = undefined;
                  _this2.landmark = undefined;

                  _this2.autocomplete.getPlace();

                  var autoadd = results[0];
                  _this2.autoadd1 = autoadd.address_components;

                  for (var i = 0; i < _this2.autoadd1.length; i++) {
                    if (_this2.autoadd1[i].types[0] == 'country') {
                      _this2.country = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'administrative_area_level_1') {
                      _this2.state = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'locality') {
                      _this2.city = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'postal_code') {} else if (_this2.autoadd1[i].types[0] == 'sublocality_level_1') {
                      if (_this2.landmark == undefined || _this2.landmark == null || _this2.landmark == '') {
                        _this2.landmark = _this2.autoadd1[i].long_name;
                      }
                    } else if (_this2.autoadd1[i].types[0] == "sublocality_level_3" || _this2.autoadd1[i].types[0] == "sublocality") {
                      if (_this2.landmark == undefined || _this2.landmark == null || _this2.landmark == '') {
                        _this2.landmark = _this2.autoadd1[i].long_name;
                      }
                    } else if (_this2.autoadd1[i].types[0] == 'sublocality_level_2') {
                      localbuilding = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'street_number') {
                      street_number = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'route') {
                      route = _this2.autoadd1[i].long_name;
                    }

                    _this2.area = street_number + ' ' + route;
                    _this2.area = _this2.area.trim() == '' ? localbuilding : _this2.area;
                  }

                  for (var i = 0; i < _this2.autoadd1.length; i++) {
                    _this2.autoaddress.push(_this2.autoadd1[i].long_name);
                  } // this.autoaddress = autoadd.long_name.join(',')


                  console.log(_this2.autoaddress);

                  var final_result = _this2.autoaddress.join(',');

                  console.log(final_result);
                  console.log(_this2.autoaddress); // this.searchForm.value.location = '';

                  _this2.editsafetyForm.controls['location'].setValue(final_result);
                } else {}
              } else {}
            });
          }.bind(this));
        }
      }, {
        key: "initAutocomplete",
        value: function initAutocomplete() {
          var _this3 = this;

          console.log("hiiiiiiiiii");
          this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete3').getElementsByTagName('input')[0], {
            types: ["geocode"]
          }); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          this.autocomplete.setFields(["address_component"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          this.autocomplete.addListener("place_changed", function () {
            console.log("autocomplete", _this3.autocomplete.getPlace());
            _this3.autoaddress = [];
            var street_number = '';
            var route = '';
            var localbuilding = '';

            _this3.autocomplete.getPlace();

            var autoadd = _this3.autocomplete.getPlace();

            _this3.autoadd1 = autoadd.address_components;

            for (var i = 0; i < _this3.autoadd1.length; i++) {
              if (_this3.autoadd1[i].types[0] == 'country') {
                _this3.country = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'administrative_area_level_1') {
                _this3.state = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'locality') {
                _this3.city = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'postal_code') {} else if (_this3.autoadd1[i].types[0] == 'sublocality_level_1') {
                _this3.area = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == "sublocality_level_3" || _this3.autoadd1[i].types[0] == "sublocality") {
                _this3.landmark = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'sublocality_level_2') {
                localbuilding = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'street_number') {
                street_number = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'route') {
                route = _this3.autoadd1[i].long_name;
              }

              _this3.area = street_number + ' ' + route;
              _this3.area = _this3.area.trim() == '' ? localbuilding : _this3.area;
              console.log(_this3.country);
              console.log(_this3.state);
              console.log(_this3.city);
              console.log(_this3.area);
              console.log(_this3.location);
            }

            for (var i = 0; i < _this3.autoadd1.length; i++) {
              _this3.autoaddress.push(_this3.autoadd1[i].long_name);
            } // this.autoaddress = autoadd.long_name.join(',')


            console.log(_this3.autoaddress);

            var final_result = _this3.autoaddress.join(',');

            console.log(final_result);
            console.log(_this3.autoaddress); // this.searchForm.value.location = '';

            _this3.editsafetyForm.controls['location'].setValue(final_result); // this.address = this.autoadd1[0].long_name


            console.log("autocomplt", _this3.address1); // localStorage.setItem('City_name', this.address)
          });
        }
      }, {
        key: "getlatlong",
        value: function getlatlong(value) {
          var _this4 = this;

          console.log(value);
          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = value;
          geocoder.geocode({
            'address': address
          }, function (results) {
            if (results[0].formatted_address) {
              console.log(results);
              _this4.address = JSON.stringify(results[0].formatted_address);
              _this4.lat = JSON.stringify(results[0].geometry.location.lat());
              _this4["long"] = JSON.stringify(results[0].geometry.location.lng());
              console.log(_this4.lat);
              console.log(_this4["long"]);

              if (_this4.lat != undefined && _this4["long"] != undefined) {
                _this4.editsafetyForm.controls['lat'].setValue(_this4.lat);

                _this4.editsafetyForm.controls['long'].setValue(_this4["long"]);

                _this4.showMap();
              }
            }
          }); // this.showMap()
        }
      }, {
        key: "editSafetyTip",
        value: function editSafetyTip() {
          var _this5 = this;

          // safety_tip_id:4
          // user_id:0
          // location_city_state:Ghatkopar East, Mumbai, Maharashtra, India Mumbai Maharashtra
          // location:Ghatkopar East, Mumbai, Maharashtra, India
          // landmark:near bus stop
          // city:Mumbai
          // state:Maharashtra
          // country:India
          // exact_location:"Ghatkopar, Near Ghatkopar Station East, Link Rd, Best Colony, Mankur, Mumbai, Maharashtra 400075, India"
          // map_lat:19.0876229
          // map_lon:72.9177548
          // safety_tip_title:testing title updated
          // safety_tip_desc:testing description
          console.log("location", this.editsafetyForm); // if(this.editsafetyForm)

          this.address = localStorage.getItem('City_name');
          var user_id = localStorage.getItem('userId');
          var data = new FormData();

          if (this.editsafetyForm.value.lat && this.editsafetyForm.value["long"] != '') {
            data.append('map_lat', this.editsafetyForm.value.lat);
            data.append('map_lon', this.editsafetyForm.value["long"]);
          } else {
            data.append('map_lat', this.lat);
            data.append('map_lon', this["long"]);
          }

          data.append('safety_tip_id', this.safetip_id);
          data.append('user_id', user_id);
          data.append('location_city_state', this.editsafetyForm.value.location);
          data.append('location', this.editsafetyForm.value.location);
          data.append('landmark', this.landmark);
          data.append('city', this.city);
          data.append('state', this.state);
          data.append('country', this.country);
          data.append('exact_location', this.editsafetyForm.value.location);
          data.append('safety_tip_title', this.editsafetyForm.value.safety_title);
          data.append('safety_tip_desc', this.editsafetyForm.value.safety_desc);
          this.sharedservice.sharedPostRequest('safety-tip/update', data).subscribe(function (rdata) {
            console.log(rdata);

            if (rdata.status == true) {
              _this5.navContrl.navigateForward('/mysafety');
            }
          }, function (error) {}, function () {}); // this.httpClient.post(this.apiUrl +'update', data)
          //   .subscribe((rdata: any) => {
          //     console.log("rdata", rdata)
          //   if(rdata.message ==  "Safety Tip updated successfully")
          //   {
          //     this.navContrl.navigateForward('/mysafetyreport')
          //   }
          //   }, error => {
          //   });
        }
      }]);

      return EditsafetytipPage;
    }();

    EditsafetytipPage.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], EditsafetytipPage.prototype, "mapRef", void 0);
    EditsafetytipPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editsafetytip',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editsafetytip.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editsafetytip/editsafetytip.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editsafetytip.page.scss */
      "./src/app/editsafetytip/editsafetytip.page.scss"))["default"]]
    })], EditsafetytipPage);
    /***/
  }
}]);
//# sourceMappingURL=editsafetytip-editsafetytip-module-es5.js.map