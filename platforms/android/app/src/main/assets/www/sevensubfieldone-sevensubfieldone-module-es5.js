function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sevensubfieldone-sevensubfieldone-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sevensubfieldone/sevensubfieldone.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sevensubfieldone/sevensubfieldone.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSevensubfieldoneSevensubfieldonePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent>\n<div class=\"header-background\"></div>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/reportfiledseven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"newbg\">\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<h4>Who was the perpetrator?</h4>\n <p>(Select all that Apply)</p>\n<ion-list (ionChange)=getViolence($event)>\n\n\n     <ion-item >\n    <ion-label>Intimate Partner</ion-label>\n    <ion-checkbox slot=\"end\" value=\"partner\" ></ion-checkbox>\n  </ion-item>\n\n    <ion-item>\n      <ion-label>Ex-Partner</ion-label>\n\t   <ion-checkbox slot=\"end\" value=\"ex-partner\" checked=\"true\"></ion-checkbox>\n   \n    </ion-item>\n\t   <ion-item>\n    <ion-label>Blood relative </ion-label>\n    <ion-checkbox slot=\"end\" value=\"blood relative\" ></ion-checkbox>\n  </ion-item>\n <ion-item>\n    <ion-label>In-laws</ion-label>\n    <ion-checkbox slot=\"end\" value=\"laws\" ></ion-checkbox>\n  </ion-item>\n   \n</ion-list>\n\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToFieldEight()\">NEXT</ion-button>\n  </ion-col>\n   </ion-row>\n</div>";
    /***/
  },

  /***/
  "./src/app/sevensubfieldone/sevensubfieldone-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/sevensubfieldone/sevensubfieldone-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SevensubfieldonePageRoutingModule */

  /***/
  function srcAppSevensubfieldoneSevensubfieldoneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SevensubfieldonePageRoutingModule", function () {
      return SevensubfieldonePageRoutingModule;
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


    var _sevensubfieldone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sevensubfieldone.page */
    "./src/app/sevensubfieldone/sevensubfieldone.page.ts");

    var routes = [{
      path: '',
      component: _sevensubfieldone_page__WEBPACK_IMPORTED_MODULE_3__["SevensubfieldonePage"]
    }];

    var SevensubfieldonePageRoutingModule = function SevensubfieldonePageRoutingModule() {
      _classCallCheck(this, SevensubfieldonePageRoutingModule);
    };

    SevensubfieldonePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SevensubfieldonePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sevensubfieldone/sevensubfieldone.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/sevensubfieldone/sevensubfieldone.module.ts ***!
    \*************************************************************/

  /*! exports provided: SevensubfieldonePageModule */

  /***/
  function srcAppSevensubfieldoneSevensubfieldoneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SevensubfieldonePageModule", function () {
      return SevensubfieldonePageModule;
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


    var _sevensubfieldone_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sevensubfieldone-routing.module */
    "./src/app/sevensubfieldone/sevensubfieldone-routing.module.ts");
    /* harmony import */


    var _sevensubfieldone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sevensubfieldone.page */
    "./src/app/sevensubfieldone/sevensubfieldone.page.ts");

    var SevensubfieldonePageModule = function SevensubfieldonePageModule() {
      _classCallCheck(this, SevensubfieldonePageModule);
    };

    SevensubfieldonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sevensubfieldone_routing_module__WEBPACK_IMPORTED_MODULE_5__["SevensubfieldonePageRoutingModule"]],
      declarations: [_sevensubfieldone_page__WEBPACK_IMPORTED_MODULE_6__["SevensubfieldonePage"]]
    })], SevensubfieldonePageModule);
    /***/
  },

  /***/
  "./src/app/sevensubfieldone/sevensubfieldone.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/sevensubfieldone/sevensubfieldone.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSevensubfieldoneSevensubfieldonePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\nion-checkbox {\n  --background-checked: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: #2ED35A;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-width: 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, transparent));\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 125px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newtext ion-label {\n  white-space: inherit;\n  margin-top: 10px;\n  margin-bottom: 11px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height:41px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 17px;\n  margin-top: 1px;\n}\n\n.radio-inner {\n  width: 33%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V2ZW5zdWJmaWVsZG9uZS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxzZXZlbnN1YmZpZWxkb25lXFxzZXZlbnN1YmZpZWxkb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V2ZW5zdWJmaWVsZG9uZS9zZXZlbnN1YmZpZWxkb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGlKQUFBO0VBQ0EsNElBQUE7RUFDQSw2SUFBQTtFQUNBLHlJQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBQTs7QURLQTtFQUVBLHdCQUFBO0FDSEE7O0FETUE7RUFFRSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDRiwrQ0FBQTtFQUNFLDBDQUFBO0FDSko7O0FET0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRE9BO0VBQ0EsY0FBQTtBQ0pBOztBRE9BO0VBQ0EsZ0JBQUE7QUNKQTs7QURPRTtFQUdFLHdCQUFBO0FDTko7O0FEUUE7RUFDSSx3QkFBQTtFQUNILFVBQUE7RUFDRyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNKSjs7QURRQTtFQUVBLGdCQUFBO0FDTkE7O0FEUUE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNGLCtDQUFBO0VBQ0UsMENBQUE7QUNMSjs7QURPQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDTkE7O0FEUUE7RUFFQSxpQ0FBQTtFQUNJLG1DQUFBO0VBQ0EsMEJBQUE7RUFDSCxlQUFBO0VBQ0csa0JBQUE7RUFDSCxtQkFBQTtFQUNBLGtGQUFBO0FDTkQ7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1JBOztBRFdBO0VBRUEsY0FBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDWkE7O0FEZUE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDQyxtQkFBQTtFQUNFLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNaSjs7QURrQkE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNoQkE7O0FEa0JBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakJBOztBRG9CQTtFQUVBLHVCQUFBO0FDbEJBOztBRHFCQTtFQUVBLGlFQUFBO1VBQUEsZ0VBQUE7QUNuQkE7O0FEc0JBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUNwQkE7O0FEdUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNELGdCQUFBO0VBQ0EsZUFBQTtBQ3JCQTs7QUR3QkE7RUFFSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNyQko7O0FEd0JBO0VBRUEsNEJBQUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDdEJKOztBRHlCQTtFQUdJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3ZCSjs7QUQyQkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL3NldmVuc3ViZmllbGRvbmUvc2V2ZW5zdWJmaWVsZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3Ymdcclxue1xyXG4tLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuaGVpZ2h0OjEwMCU7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5cclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhclxyXG57XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcblx0IC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxufVxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuIFxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuIFxyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xyXG4gIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50OmluaGVyaXQ7XHJcbn1cclxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG5cdCAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxufVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbmlvbi1jaGVja2JveFxyXG57XHJcbi0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICMyRUQzNUE7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpKTtcclxufVxyXG5cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjglO1xyXG59XHJcblxyXG4ucmVkXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxufVxyXG5cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbm1hcmdpbi1ib3R0b206IDEyNXB4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG4gZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxubWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0IGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG5cdFxyXG59XHJcblxyXG5cclxuXHJcbi5uZXd0ZXh0IGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbm1hcmdpbi10b3A6MTBweDtcclxubWFyZ2luLWJvdHRvbToxMXB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcclxufVxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuLS1taW4taGVpZ2h0OjQxcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuXHJcbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxufVxyXG5cclxuaW9uLXJhZGlvLm1kXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuXHJcbn1cclxuXHJcbi5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLm5ld2JnIHtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcbn1cblxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyIHtcbiAgY29udGVudDogaW5oZXJpdDtcbn1cblxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpKTtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjglO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGNzEzMTM7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ld3RleHQgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3dGV4dCBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLW1pbi1oZWlnaHQ6NDFweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG59XG5cbmlvbi1yYWRpby5tZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG59XG5cbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sevensubfieldone/sevensubfieldone.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sevensubfieldone/sevensubfieldone.page.ts ***!
    \***********************************************************/

  /*! exports provided: SevensubfieldonePage */

  /***/
  function srcAppSevensubfieldoneSevensubfieldonePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SevensubfieldonePage", function () {
      return SevensubfieldonePage;
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

    var SevensubfieldonePage = /*#__PURE__*/function () {
      function SevensubfieldonePage(navController, route) {
        var _this = this;

        _classCallCheck(this, SevensubfieldonePage);

        this.navController = navController;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
          _this.category = params["category"];
          console.log("category", _this.category);
        });
      }

      _createClass(SevensubfieldonePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getViolence",
        value: function getViolence(e) {
          this.value = e.detail.value;
        }
      }, {
        key: "goToFieldEight",
        value: function goToFieldEight() {
          if (this.category == undefined && this.value != undefined) {
            this.navController.navigateForward("/reportfiledeight");
          }
        }
      }]);

      return SevensubfieldonePage;
    }();

    SevensubfieldonePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SevensubfieldonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sevensubfieldone',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sevensubfieldone.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sevensubfieldone/sevensubfieldone.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sevensubfieldone.page.scss */
      "./src/app/sevensubfieldone/sevensubfieldone.page.scss"))["default"]]
    })], SevensubfieldonePage);
    /***/
  }
}]);
//# sourceMappingURL=sevensubfieldone-sevensubfieldone-module-es5.js.map