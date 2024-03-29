function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledtwo-reportfiledtwo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwo/reportfiledtwo.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwo/reportfiledtwo.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportfiledtwoReportfiledtwoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n   <div class=\"header-background\"></div>\n     <ion-toolbar>\n      <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref='/reportfiledone' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n    \n     </ion-buttons>\n     </ion-toolbar>\n   </ion-header>\n   \n   <ion-content class=\"newbg\">\n   <div class=\"mainareain\">\n   <ion-row >\n         <ion-col size=\"12\">\n   <div class=\"newtext\">\n   <h4>How old are you?<span class=\"red\">*</span></h4>\n    <ion-list>\n       <ion-item>\n        <ion-input placeholder=\"Please type your age here\" type=\"number\" (ionChange)=\"getAge($event)\"></ion-input>\n       </ion-item>\n   </ion-list>\n   \n   <p *ngIf = 'error'><span class=\"red1\">Sorry, we only crowdsource data on sexual violence from adults above 18 years of age.</span></p>\n   \n   <p>This information will help us understand the incident better</p>\n      </div>\n       </ion-col>\n      </ion-row>\n         <ion-row>\n        <ion-col col-12>\n   \n   <ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goTofieldThree()\" [disabled]=\"buttonDisabled\">NEXT</ion-button>\n     </ion-col>\n      </ion-row>\n      </div>\n   </ion-content>\n   <!-- <div class=\"bottom\"> -->\n   \n   <!-- </div> -->";
    /***/
  },

  /***/
  "./src/app/reportfiledtwo/reportfiledtwo-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/reportfiledtwo/reportfiledtwo-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ReportfiledtwoPageRoutingModule */

  /***/
  function srcAppReportfiledtwoReportfiledtwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledtwoPageRoutingModule", function () {
      return ReportfiledtwoPageRoutingModule;
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


    var _reportfiledtwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reportfiledtwo.page */
    "./src/app/reportfiledtwo/reportfiledtwo.page.ts");

    var routes = [{
      path: '',
      component: _reportfiledtwo_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledtwoPage"]
    }];

    var ReportfiledtwoPageRoutingModule = function ReportfiledtwoPageRoutingModule() {
      _classCallCheck(this, ReportfiledtwoPageRoutingModule);
    };

    ReportfiledtwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportfiledtwoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reportfiledtwo/reportfiledtwo.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/reportfiledtwo/reportfiledtwo.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReportfiledtwoPageModule */

  /***/
  function srcAppReportfiledtwoReportfiledtwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledtwoPageModule", function () {
      return ReportfiledtwoPageModule;
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


    var _reportfiledtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reportfiledtwo-routing.module */
    "./src/app/reportfiledtwo/reportfiledtwo-routing.module.ts");
    /* harmony import */


    var _reportfiledtwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reportfiledtwo.page */
    "./src/app/reportfiledtwo/reportfiledtwo.page.ts");

    var ReportfiledtwoPageModule = function ReportfiledtwoPageModule() {
      _classCallCheck(this, ReportfiledtwoPageModule);
    };

    ReportfiledtwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reportfiledtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledtwoPageRoutingModule"]],
      declarations: [_reportfiledtwo_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledtwoPage"]]
    })], ReportfiledtwoPageModule);
    /***/
  },

  /***/
  "./src/app/reportfiledtwo/reportfiledtwo.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/reportfiledtwo/reportfiledtwo.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportfiledtwoReportfiledtwoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\n.md .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.md in-item {\n  width: 15px;\n  height: 24px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 80px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\n.red {\n  color: #F71313;\n}\n\n.red1 {\n  color: #F71313;\n  font-size: 13px !important;\n  margin-bottom: 0 !important;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZmlsZWR0d28vRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxccmVwb3J0ZmlsZWR0d29cXHJlcG9ydGZpbGVkdHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0ZmlsZWR0d28vcmVwb3J0ZmlsZWR0d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsaUpBQUE7RUFDQSw0SUFBQTtFQUNBLDZJQUFBO0VBQ0EseUlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FBOztBREtBO0VBRUEsd0JBQUE7QUNIQTs7QURNQTtFQUVFLG9DQUFBO0FDSkY7O0FET0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRE9BO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDRiwrQ0FBQTtFQUNFLDBDQUFBO0FDSko7O0FETUE7RUFDQSxjQUFBO0FDSEE7O0FETUE7RUFDQSxnQkFBQTtBQ0hBOztBRE1FO0VBR0Usd0JBQUE7QUNMSjs7QURPQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUVBLFdBQUE7RUFDSSxZQUFBO0FDSko7O0FET0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ05BOztBRFNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNQQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNWQTs7QURhQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1pBOztBRGVBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0FDWko7O0FEY0E7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2RBOztBRGlCQTtFQUVBLHVCQUFBO0FDZkE7O0FEa0JBO0VBRUEsaUVBQUE7VUFBQSxnRUFBQTtBQ2hCQTs7QURtQkE7RUFFQSxjQUFBO0FDakJBOztBRG1CQTtFQUVBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDakJBOztBRG9CQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FDbEJBOztBRHFCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNuQkEiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRmaWxlZHR3by9yZXBvcnRmaWxlZHR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3Ymdcclxue1xyXG4tLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuaGVpZ2h0OjEwMCU7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5cclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhclxyXG57XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxufVxyXG4uaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcblx0IC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG59XHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuICBpb24tcmFkaW9cclxuICB7XHJcbiBcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcclxuICB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLm1kIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi5tZCBpbi1pdGVtXHJcbntcclxud2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjglO1xyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbm1hcmdpbi1ib3R0b206MjhweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0Zm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG5tYXJnaW46ODBweCBhdXRvIDI1cHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3Rcclxue1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbi5yZWRcclxue1xyXG5jb2xvcjojRjcxMzEzO1xyXG59XHJcbi5yZWQxXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxuZm9udC1zaXplOjEzcHggIWltcG9ydGFudDtcclxubWFyZ2luLWJvdHRvbTowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXItdG9wOm5vbmU7XHJcbmJvcmRlci1sZWZ0Om5vbmU7XHJcbmJvcmRlci1yaWdodDpub25lO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEOEVCO1xyXG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuXHJcblxyXG4iLCIubmV3Ymcge1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubWQgLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5tZCBpbi1pdGVtIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDgwcHggYXV0byAyNXB4O1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGNzEzMTM7XG59XG5cbi5yZWQxIHtcbiAgY29sb3I6ICNGNzEzMTM7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFEOEVCO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/reportfiledtwo/reportfiledtwo.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/reportfiledtwo/reportfiledtwo.page.ts ***!
    \*******************************************************/

  /*! exports provided: ReportfiledtwoPage */

  /***/
  function srcAppReportfiledtwoReportfiledtwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledtwoPage", function () {
      return ReportfiledtwoPage;
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

    var ReportfiledtwoPage = /*#__PURE__*/function () {
      function ReportfiledtwoPage(navController, router, route) {
        _classCallCheck(this, ReportfiledtwoPage);

        this.navController = navController;
        this.router = router;
        this.route = route;
        this.buttonDisabled = true;
        this.error = false; //   this.route.queryParams.subscribe(params => {
        //     this.forWho = params["forWho"];
        //     console.log("for Who",this.forWho);
        //  })
      }

      _createClass(ReportfiledtwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAge",
        value: function getAge(e) {
          // console.log(e.detail.value)
          this.age = e.detail.value;
          localStorage.setItem('age', this.age);

          if (this.age >= '18') {
            this.error = false;
            this.buttonDisabled = false;
          } else {
            this.error = true;
            this.buttonDisabled = false;
          }
        }
      }, {
        key: "goTofieldThree",
        value: function goTofieldThree() {
          if (this.age >= '18') {
            // let navigationExtras: NavigationExtras = {
            //   queryParams: {
            //           age:this.age,
            //           forWho:this.forWho
            //     }
            //   };
            this.navController.navigateForward(["reportfiledthree"]);
          } else {
            this.navController.navigateForward('/tabs/home');
          }
        }
      }]);

      return ReportfiledtwoPage;
    }();

    ReportfiledtwoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ReportfiledtwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reportfiledtwo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reportfiledtwo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwo/reportfiledtwo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reportfiledtwo.page.scss */
      "./src/app/reportfiledtwo/reportfiledtwo.page.scss"))["default"]]
    })], ReportfiledtwoPage);
    /***/
  }
}]);
//# sourceMappingURL=reportfiledtwo-reportfiledtwo-module-es5.js.map