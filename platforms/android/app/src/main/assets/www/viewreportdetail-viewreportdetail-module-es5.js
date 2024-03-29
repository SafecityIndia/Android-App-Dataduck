function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewreportdetail-viewreportdetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreportdetail/viewreportdetail.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewreportdetail/viewreportdetail.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewreportdetailViewreportdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n     <ion-toolbar>\n          <ion-buttons slot=\"start\">\n               <ion-back-button   defaultHref='/modelreport' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n          </ion-buttons>\n     </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n     <ion-toolbar>\n     <ion-buttons slot=\"start\" (click)=\"dismiss()\" >\n      <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\"/>\n      </ion-buttons>  \n     </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <div class=\"mainareain\">\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newtext\">\n                         <h4>{{violence_type}}</h4>\n                         <h3>{{age}} {{'yrs' | translate }}\n                         <span *ngIf=\"gender != 'Prefer not to say'\"> | {{gender}}</span></h3>\n                         <p>{{what_happened_desc}}</p>\n                         <h5 *ngIf='showPerpetrator'>{{'showPerpetrator' | translate }}: {{perpetrator}}</h5>\n                         <h5 *ngIf='showAttacked'>{{'showAttacked' | translate }}: {{feel_attacked}}</h5>\n                         <h5 *ngIf=\"additional_detail != ''\">{{'additional_detail' | translate }}: {{additional_detail}}</h5>\n\n                         <ion-item *ngIf='show1'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'police_Report_filed' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show2'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'police_reprt_not_filed' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show3'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'tried_to_filed' | translate }} {{other_ans}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show4'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                  {{'intent_to_filed' | translate }}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show5'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'not_sure' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'medical_help_received' | translate }}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_not_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'medical_hlp_noy_rcvd' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/location.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{suburb}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/calendar.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_date_est}} {{date_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/time.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_time_est}} {{time_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                    </div>\n               </ion-col>\n          </ion-row>\n     </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/viewreportdetail/viewreportdetail-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/viewreportdetail/viewreportdetail-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ViewreportdetailPageRoutingModule */

  /***/
  function srcAppViewreportdetailViewreportdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewreportdetailPageRoutingModule", function () {
      return ViewreportdetailPageRoutingModule;
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


    var _viewreportdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viewreportdetail.page */
    "./src/app/viewreportdetail/viewreportdetail.page.ts");

    var routes = [{
      path: '',
      component: _viewreportdetail_page__WEBPACK_IMPORTED_MODULE_3__["ViewreportdetailPage"]
    }];

    var ViewreportdetailPageRoutingModule = function ViewreportdetailPageRoutingModule() {
      _classCallCheck(this, ViewreportdetailPageRoutingModule);
    };

    ViewreportdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewreportdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/viewreportdetail/viewreportdetail.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/viewreportdetail/viewreportdetail.module.ts ***!
    \*************************************************************/

  /*! exports provided: ViewreportdetailPageModule */

  /***/
  function srcAppViewreportdetailViewreportdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewreportdetailPageModule", function () {
      return ViewreportdetailPageModule;
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


    var _viewreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./viewreportdetail-routing.module */
    "./src/app/viewreportdetail/viewreportdetail-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _viewreportdetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./viewreportdetail.page */
    "./src/app/viewreportdetail/viewreportdetail.page.ts");

    var ViewreportdetailPageModule = function ViewreportdetailPageModule() {
      _classCallCheck(this, ViewreportdetailPageModule);
    };

    ViewreportdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _viewreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewreportdetailPageRoutingModule"]],
      declarations: [_viewreportdetail_page__WEBPACK_IMPORTED_MODULE_7__["ViewreportdetailPage"]]
    })], ViewreportdetailPageModule);
    /***/
  },

  /***/
  "./src/app/viewreportdetail/viewreportdetail.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/viewreportdetail/viewreportdetail.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewreportdetailViewreportdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-ios-s .newback {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 12px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.newtext h3 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 2px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\nion-item {\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --min-height: 38px;\n  font-size: 14px;\n}\n\nion-thumbnail {\n  width: 20px;\n  height: 20px;\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3JlcG9ydGRldGFpbC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFx2aWV3cmVwb3J0ZGV0YWlsXFx2aWV3cmVwb3J0ZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3JlcG9ydGRldGFpbC92aWV3cmVwb3J0ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFVBO0VBQ0EsY0FBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUNBLGdCQUFBO0FDUEE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUkE7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDUkE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNJLG1CQUFBO0FDVEo7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNWQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVkE7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNWQTs7QURhQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hBOztBRGFBO0VBRUMsV0FBQTtFQUNELG9CQUFBO0FDWEE7O0FEYUM7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVkQ7O0FEYUM7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUNYRDs7QURjQztFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNaRjs7QURlQztFQUVBLFdBQUE7RUFDRyxZQUFBO0VBQ0gsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2JEOztBRGdCQztFQUVDLGVBQUE7RUFDRSxrQkFBQTtBQ2RKOztBRGtCQztFQUlBO0lBRUUsa0JBQUE7SUFDQyxtQkFBQTtFQ25CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3JlcG9ydGRldGFpbC92aWV3cmVwb3J0ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5uZXdiYWNrIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjEycHg7XHJcbn1cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojMTgxNzE5O1xyXG5tYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDNcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MTZweDtcclxubWFyZ2luLXRvcDogMTBweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToyNXB4O1xyXG5jb2xvcjojNTkyRDhEO1xyXG5tYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLm5ld3RleHQgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MTRweDtcclxubWFyZ2luLXRvcDoxOHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNlxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5tYXJnaW4tdG9wOjE4cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm5ld2NhbGVuZGFyXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcblx0fVxyXG5cdC5uZXdjYWxlbmRhciBwe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdG1hcmdpbi10b3A6NXB4O1xyXG5cdG1hcmdpbi1ib3R0b206MDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhbGVuZGFyIGltZ1xyXG5cdHtcclxuXHR3aWR0aDoxN3B4O1xyXG5cdG1hcmdpbi1yaWdodDoycHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1pdGVtXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG5cdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0tbWluLWhlaWdodDogMzhweDtcclxuXHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdH1cclxuXHRcclxuXHRpb24tdGh1bWJuYWlsXHJcblx0e1xyXG5cdHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XHJcblx0bWFyZ2luLXRvcDoycHg7XHJcblx0bWFyZ2luLWJvdHRvbToycHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1sYWJlbFxyXG5cdHtcclxuXHQgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIGlvbi10aXRsZVxyXG57XHJcbiAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbn0gXHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAubmV3YmFjayB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTgxNzE5O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4ubmV3dGV4dCBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld3RleHQgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5uZXd0ZXh0IGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3dGV4dCBoNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2NhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3Y2FsZW5kYXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3Y2FsZW5kYXIgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/viewreportdetail/viewreportdetail.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/viewreportdetail/viewreportdetail.page.ts ***!
    \***********************************************************/

  /*! exports provided: ViewreportdetailPage */

  /***/
  function srcAppViewreportdetailViewreportdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewreportdetailPage", function () {
      return ViewreportdetailPage;
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ViewreportdetailPage = /*#__PURE__*/function () {
      function ViewreportdetailPage(modalCtrl, route, httpClient, navController) {
        var _this = this;

        _classCallCheck(this, ViewreportdetailPage);

        this.modalCtrl = modalCtrl;
        this.route = route;
        this.httpClient = httpClient;
        this.navController = navController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.pagename = 'from_detail';
        this.showAttacked = false;
        this.showPerpetrator = false;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.rece_medi_not_attn = false;
        this.rece_medi_attn = false;
        this.route.queryParams.subscribe(function (params) {
          _this.itemDetail = params["itemDetail"];
          _this.itemDetail = JSON.parse(_this.itemDetail);
          console.log("for Who", _this.itemDetail);
          _this.violence_type = _this.itemDetail.categories;
          _this.age = _this.itemDetail.age;
          _this.gender = _this.itemDetail.gender;
          _this.what_happened_desc = _this.itemDetail.description;
          console.log("discription", _this.what_happened_desc);
          _this.suburb = _this.itemDetail.building; // this.city = this.itemDetail.city

          _this.incidents_date_est = _this.itemDetail.is_date_estimate != "0" ? "Around " : "On";
          _this.incidents_time_est = _this.itemDetail.is_time_estimate != "0" ? "Around " : "At";
          _this.incidents_time_est = _this.itemDetail.time_to != null ? "Between " : _this.incidents_time_est;
          _this.time_estimate_name = _this.itemDetail.time_to != null ? _this.timeConvert(_this.itemDetail.time_from) + " - " + _this.timeConvert(_this.itemDetail.time_to) : _this.itemDetail.time_from;
          _this.date_estimate_name = _this.itemDetail.show_date;
          _this.time_estimate_name = _this.itemDetail.show_time;
          _this.additional_detail = _this.itemDetail.additional_detail;

          for (var i = 0; i < _this.itemDetail.answers.length; i++) {
            console.log(_this.itemDetail.answers[i]);

            if (_this.itemDetail.answers[i].question_tag == "attack_reason") {
              _this.showAttacked = true;
              _this.feel_attacked = _this.itemDetail.answers[i].answer;
            } else if (_this.itemDetail.answers[i].question_tag == "who_was_perpetrator") {
              _this.showPerpetrator = true;
              _this.perpetrator = _this.itemDetail.answers[i].answer;
            } else if (_this.itemDetail.answers[i].question_tag == "reported_to_police") {
              if (_this.itemDetail.answers[i].answer_id == '38') {
                _this.show1 = true;
              } else if (_this.itemDetail.answers[i].answer_id == '41') {
                _this.show2 = true;
              } else if (_this.itemDetail.answers[i].answer_id == '42') {
                _this.show3 = true;
                _this.other_ans = JSON.parse(_this.itemDetail.answers[i].other_answers);
                _this.other_ans = _this.other_ans[42];
                console.log(_this.other_ans);
              } else if (_this.itemDetail.answers[i].answer_id == '39') {
                _this.show4 = true;
              } else if (_this.itemDetail.answers[i].answer_id == '40') {
                _this.show5 = true;
              }
            } else if (_this.itemDetail.answers[i].question_tag == "medical_help") {
              if (_this.itemDetail.answers[i].answer_id == "28") {
                _this.rece_medi_attn = true;
              } else {
                _this.rece_medi_not_attn = true;
              }
            }
          }
        });
      }

      _createClass(ViewreportdetailPage, [{
        key: "timeConvert",
        value: function timeConvert(time) {
          console.log("Time in convert ", time); // Check correct time format and split into components

          time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) {
            // If time format correct
            time = time.slice(1); // Remove full string match value

            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM

            time[0] = +time[0] % 12 || 12; // Adjust hours
          }

          return time.join(''); // return adjusted time or original string
        }
      }, {
        key: "back",
        value: function back() {
          this.navController.navigateBack('/modelreport');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.viewReportDetail()
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var navigationExtras = {
            queryParams: {
              // incidentList: this.incidentList,
              // safetyTipList: this.safetyTipList,
              segmentModel: 'one',
              pagename: this.pagename
            }
          };
          this.navController.navigateBack(["modelreport"], navigationExtras);
        }
      }]);

      return ViewreportdetailPage;
    }();

    ViewreportdetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    ViewreportdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewreportdetail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./viewreportdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreportdetail/viewreportdetail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./viewreportdetail.page.scss */
      "./src/app/viewreportdetail/viewreportdetail.page.scss"))["default"]]
    })], ViewreportdetailPage);
    /***/
  }
}]);
//# sourceMappingURL=viewreportdetail-viewreportdetail-module-es5.js.map