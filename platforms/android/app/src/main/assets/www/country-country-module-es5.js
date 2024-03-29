function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-country-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountryCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"mainarea\">\n    <img src=\"assets/images/icons/logo.svg\" />\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n          <p>{{'welcome' | translate}}<br>{{'select_your_location' | translate}}</p>\n          <ion-item mode=\"ios\">\n            <ion-label class=\"newlabel\" style=\"display:none;\" position=\"stacked\">\n              {{'home_country_your_country' | translate }}\n            </ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCountry($event)\"\n              [(ngModel)]=\"countryName\" placeholder=\"{{'home_search_your_country' | translate}}\" disabled=\"false\" debounce=\"500\"></ion-searchbar>\n            <div class=\"newserchlist\" *ngIf=\"isItemAvailable && showCountrylist\">\n              <ion-item (click)=\"selectedLocation(item)\" *ngFor=\"let item of countryList\">{{item.country_name}}</ion-item>\n            </div>\n          </ion-item>\n          <!-- <ion-item mode=\"ios\">\n            <ion-label class=\"newlabel\" style=\"display:none;\" position=\"stacked\">\n              {{'home_country_your_country' | translate }}\n            </ion-label>\n            <ion-select placeholder=\"{{'select_one' | translate}}\" mode=\"ios\" (ionChange)=\"getCountry($event)\">\n              <ion-select-option *ngFor=\"let item of countryList\" value=\"{{item.country_id}}\">{{item.country_name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item> -->\n          \n          <ion-item mode=\"ios\">\n            <ion-label class=\"newlabel\" position=\"stacked\">{{'select_city' | translate}}</ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCity($event)\"\n              [(ngModel)]=\"searchTerm\" placeholder=\"{{'search_city' | translate}}\" [disabled]=\"!countrySelectedFlag\" debounce=\"500\"></ion-searchbar>\n            <div class=\"newserchlist\" *ngIf=\"hide_city_search\">\n              <ion-item (click)=\"selectedcity(item)\" *ngFor=\"let item of cityList\">{{item.city_name}}</ion-item>\n            </div>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"bottom\">\n    <ion-row>\n      <ion-col col-12>\n        <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"goToNext()\" [disabled]=\"buttondisable\">\n          {{'procees' | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/country/country-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/country/country-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CountryPageRoutingModule */

  /***/
  function srcAppCountryCountryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPageRoutingModule", function () {
      return CountryPageRoutingModule;
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


    var _country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./country.page */
    "./src/app/country/country.page.ts");

    var routes = [{
      path: '',
      component: _country_page__WEBPACK_IMPORTED_MODULE_3__["CountryPage"]
    }];

    var CountryPageRoutingModule = function CountryPageRoutingModule() {
      _classCallCheck(this, CountryPageRoutingModule);
    };

    CountryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CountryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/country/country.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/country/country.module.ts ***!
    \*******************************************/

  /*! exports provided: CountryPageModule */

  /***/
  function srcAppCountryCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPageModule", function () {
      return CountryPageModule;
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


    var _country_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./country-routing.module */
    "./src/app/country/country-routing.module.ts");
    /* harmony import */


    var _country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./country.page */
    "./src/app/country/country.page.ts");

    var CountryPageModule = function CountryPageModule() {
      _classCallCheck(this, CountryPageModule);
    };

    CountryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _country_routing_module__WEBPACK_IMPORTED_MODULE_6__["CountryPageRoutingModule"]],
      declarations: [_country_page__WEBPACK_IMPORTED_MODULE_7__["CountryPage"]]
    })], CountryPageModule);
    /***/
  },

  /***/
  "./src/app/country/country.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/country/country.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountryCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 35% auto 0;\n}\n\n.alert-head.sc-ion-alert-ios {\n  display: none !important;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 16px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 11px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.newsidearea {\n  width: 100%;\n  height: auto;\n}\n\n.newsidearea ion-label {\n  width: 100%;\n  height: auto;\n  flex: 1 1 0%;\n}\n\n.newsidearea .in-item {\n  padding-right: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.newsidearea .in-item[slot=start] {\n  margin: 3px 15px 0px 4px;\n}\n\n.newsidearea ion-item {\n  width: 50%;\n  float: left;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 6px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  --min-height: 44px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 104px;\n}\n\n.newselect p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  line-height: 21px;\n  text-align: left;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n\n.newselect.newselect h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  font-family: \"Mangal\";\n  line-height: 24px;\n  font-family: \"Lato\";\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\n.newserchlist {\n  height: 200px;\n  width: 1px solid #ddd;\n  overflow: scroll;\n  width: 100%;\n  padding: 0 10px;\n  border-bottom: 2px solid #ddd;\n  border: 1px solid #ddd;\n}\n\n.newserchlist ion-item {\n  margin-bottom: 0;\n  --min-height: 38px;\n}\n\nion-searchbar .searchbar-input {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.mainarea ion-searchbar {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  --background:transparent;\n  padding: 0;\n}\n\n.mainarea .sc-ion-searchbar-ios-h {\n  --background:transparent;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: 1px solid #ddd;\n  height: 42px;\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n  padding: 0;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  height: auto;\n  display: inline-block;\n  margin: 70px auto 0;\n  text-align: center;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 20px auto 40px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0;\n  }\n\n  .newselect {\n    margin-top: 70px;\n  }\n\n  .newselect p {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 32% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 40% auto 0;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .newselect p {\n    margin-top: 90px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 0;\n  }\n\n  .newselect p {\n    margin-top: 66px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 213px;\n    margin: 18% auto 0;\n  }\n\n  .newselect {\n    margin-top: 0;\n  }\n\n  .newselect p {\n    margin-top: 35px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 0;\n  }\n\n  .newselect p {\n    margin-top: 66px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxjb3VudHJ5XFxjb3VudHJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291bnRyeS9jb3VudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREdBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUE7O0FERUE7RUFFQSx3QkFBQTtBQ0FBOztBREdBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNKLGtCQUFBO0VBQ0ksb0JBQUE7QUNBSjs7QURFQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FBOztBREtBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNIQTs7QURNQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0pBOztBRE9BO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNDLGVBQUE7QUNMTDs7QURRQTtFQUVBLHdCQUFBO0FDTkE7O0FEUUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQ05BOztBRFNFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ1BKOztBRFVBO0VBQ0MseUJBQUE7QUNQRDs7QURVQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7RUFFSSxrQkFBQTtBQ1JMOztBRFdDO0VBRUEscUNBQUE7RUFDQSx5QkFBQTtFQUNJLGtCQUFBO0FDVEw7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNaQTs7QURlQTtFQUVBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDYkE7O0FEZ0JBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ2RBOztBRGdCRTtFQUVGLHdCQUFBO1VBQUEsdUJBQUE7QUNkQTs7QURnQkE7RUFFQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0ksc0JBQUE7VUFBQSxxQkFBQTtFQUNILHdCQUFBO0VBQ0EsVUFBQTtBQ2REOztBRGlCQTtFQUVBLHdCQUFBO0VBQ0EsY0FBQTtFQUNJLGlCQUFBO0VBQ0gsc0JBQUE7RUFDQSxZQUFBO0VBQ0ksMEJBQUE7VUFBQSx5QkFBQTtFQUNILFVBQUE7QUNmRjs7QURpQkE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtBQ2ZBOztBRGlCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZkE7O0FEbUJBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURvQkE7RUFFQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNsQkE7O0FEcUJBO0VBQ0EsV0FBQTtBQ2xCQTs7QUR1QkE7RUFFQztJQUVJLGtCQUFBO0VDdEJIOztFRHlCRDtJQUNBLGdCQUFBO0VDdEJDOztFRHlCRDtJQUNBLGdCQUFBO0VDdEJDO0FBQ0Y7O0FEeUJDO0VBSUE7SUFFQSx1QkFBQTtJQUNBLDZCQUFBO0VDM0JDO0FBQ0Y7O0FEaUNDO0VBSUM7SUFHRCxrQkFBQTtFQ3BDQztBQUNGOztBRHdDQztFQUlBO0lBQ0ksZ0JBQUE7RUN6Q0g7QUFDRjs7QUQ2Q0M7RUFJQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQy9DQzs7RURrREQ7SUFDQSxhQUFBO0VDL0NDOztFRGtERDtJQUNJLGdCQUFBO0VDL0NIO0FBQ0Y7O0FEa0RFO0VBSUQ7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUNwREM7O0VEdUREO0lBQ0EsYUFBQTtFQ3BEQzs7RUR1REQ7SUFDSSxnQkFBQTtFQ3BESDtBQUNGOztBRHdEQTtFQUlDO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0VDMURDOztFRDZERDtJQUNBLGFBQUE7RUMxREM7O0VENkREO0lBQ0ksZ0JBQUE7RUMxREg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnkvY291bnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluYXJlYSBpbWd7XHJcbndpZHRoOjIzNXB4O1xyXG5tYXJnaW46MzUlIGF1dG8gIDAgO1xyXG59XHJcbi5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Ncclxue1xyXG5kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG50cmFuc2Zvcm06aW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuXHJcblxyXG4ubmV3c2lkZWFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhIGlvbi1sYWJlbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbGV4OjEgMSAwJTtcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cdCAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtW3Nsb3Q9XCJzdGFydFwiXVxyXG57XHJcbm1hcmdpbjogM3B4IDE1cHggMHB4IDRweDtcclxufVxyXG4ubmV3c2lkZWFyZWEgIGlvbi1pdGVtXHJcbntcclxud2lkdGg6NTAlO1xyXG5mbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4gIGlvbi1pdGVtXHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0XHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuXHQgICAgLS1taW4taGVpZ2h0OiA0NHB4O1xyXG5cdH1cclxuXHRcclxuLm5ld3NlbGVjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxubWFyZ2luLXRvcDoxMDRweDtcclxufVxyXG5cclxuLm5ld3NlbGVjdCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmxpbmUtaGVpZ2h0OjIxcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxubWFyZ2luLWJvdHRvbTo4cHg7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3NlbGVjdC5uZXdzZWxlY3QgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1mYW1pbHk6ICdNYW5nYWwnO1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbm1hcmdpbi10b3A6MDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4ubmV3c2VyY2hsaXN0XHJcbntcclxuaGVpZ2h0OjIwMHB4O1xyXG53aWR0aDoxcHggc29saWQgI2RkZDtcclxub3ZlcmZsb3c6c2Nyb2xsO1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTBweDtcclxuYm9yZGVyLWJvdHRvbToycHggc29saWQgI2RkZDtcclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubmV3c2VyY2hsaXN0IGlvbi1pdGVtIFxyXG57XHJcbm1hcmdpbi1ib3R0b206MDtcclxuLS1taW4taGVpZ2h0OiAzOHB4O1xyXG59XHJcbiAgaW9uLXNlYXJjaGJhciAuc2VhcmNoYmFyLWlucHV0XHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcclxufVxyXG4ubWFpbmFyZWEgaW9uLXNlYXJjaGJhclxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcblx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdHBhZGRpbmc6MDtcclxufVxyXG5cclxuLm1haW5hcmVhIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oXHJcbntcclxuLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5wYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cdGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuXHRoZWlnaHQ6NDJweDtcclxuXHQgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcclxuXHRcdHBhZGRpbmc6MDtcclxufVxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjcwcHggYXV0byAwO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjIwcHggYXV0byA0MHB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KSBhbmQoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKVxyXG5cdHtcclxuXHQubWFpbmFyZWEgaW1nXHJcblx0e1xyXG5cdCAgICBtYXJnaW46IDI5JSBhdXRvIDA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3R7XHJcblx0bWFyZ2luLXRvcDo3MHB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0bWFyZ2luLXRvcDoxMHB4O1xyXG5cdH1cclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGggOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQgOiA3MzZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMykgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcclxuIG1hcmdpbjogMzIlIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBcclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuXHRcdC5tYWluYXJlYSBpbWdcclxuIHtcclxuXHJcbiBtYXJnaW46IDQwJSBhdXRvIDA7XHJcbiB9XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHsgXHJcblx0Lm5ld3NlbGVjdCBwe1xyXG5cdCAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG5cdFxyXG5cdH1cclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHg7XHJcbiBtYXJnaW46IDIwJSBhdXRvIDA7XHJcbiB9XHJcbiBcclxuIC5uZXdzZWxlY3R7XHJcbiBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4gLm5ld3NlbGVjdCBwe1xyXG4gICAgIG1hcmdpbi10b3A6IDY2cHg7XHJcbiB9XHJcblx0fVxyXG5cdFxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHg7XHJcbiBtYXJnaW46IDE4JSBhdXRvIDA7XHJcbiB9XHJcbiBcclxuIC5uZXdzZWxlY3R7XHJcbiBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4gLm5ld3NlbGVjdCBwe1xyXG4gICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiB9XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5AbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweDtcclxuIG1hcmdpbjogMjAlIGF1dG8gMDtcclxuIH1cclxuIFxyXG4gLm5ld3NlbGVjdHtcclxuIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbiAubmV3c2VsZWN0IHB7XHJcbiAgICAgbWFyZ2luLXRvcDogNjZweDtcclxuIH1cclxuIH1cclxuICBcclxuXHJcbiIsIi5tYWluYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbmFyZWEgaW1nIHtcbiAgd2lkdGg6IDIzNXB4O1xuICBtYXJnaW46IDM1JSBhdXRvIDA7XG59XG5cbi5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5uZXdzaWRlYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5uZXdzaWRlYXJlYSBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4OiAxIDEgMCU7XG59XG5cbi5uZXdzaWRlYXJlYSAuaW4taXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtW3Nsb3Q9c3RhcnRdIHtcbiAgbWFyZ2luOiAzcHggMTVweCAwcHggNHB4O1xufVxuXG4ubmV3c2lkZWFyZWEgaW9uLWl0ZW0ge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ubmV3c2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICBtYXJnaW4tdG9wOiAxMDRweDtcbn1cblxuLm5ld3NlbGVjdCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3NlbGVjdC5uZXdzZWxlY3QgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJNYW5nYWxcIjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm5ld3NlcmNobGlzdCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxcHggc29saWQgI2RkZDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5uZXdzZXJjaGxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG4ubWFpbmFyZWEgaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1haW5hcmVhIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDJweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNzBweCBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHg7XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxleDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIG1hcmdpbjogMjklIGF1dG8gMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cblxuICAubmV3c2VsZWN0IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIzNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzMiUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiA0MCUgYXV0byAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHg7XG4gICAgbWFyZ2luOiAyMCUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogNjZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHg7XG4gICAgbWFyZ2luOiAxOCUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHg7XG4gICAgbWFyZ2luOiAyMCUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogNjZweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/country/country.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/country/country.page.ts ***!
    \*****************************************/

  /*! exports provided: CountryPage */

  /***/
  function srcAppCountryCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPage", function () {
      return CountryPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CountryPage = /*#__PURE__*/function () {
      function CountryPage(httpClient, route, sharedservice, translate, navController, toastctrl, router, platform) {
        var _this = this;

        _classCallCheck(this, CountryPage);

        this.httpClient = httpClient;
        this.route = route;
        this.sharedservice = sharedservice;
        this.translate = translate;
        this.navController = navController;
        this.toastctrl = toastctrl;
        this.router = router;
        this.platform = platform;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/common_controller/';
        this.apiUrl1 = 'http://101.53.143.7/~dataduck/safecity/api/user/';
        this.showCity = false;
        this.cityId = '';
        this.buttondisable = true;
        this.cityArray = [];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.hide_city = false;
        this.hide_city_search = false;
        this.hide_city_search_back = false;
        this.tempArr = [];
        this.route.queryParams.subscribe(function (params) {
          _this.langaugeId = params["id"];
          console.log("id", _this.langaugeId);
        }); //this.closeApp()
      }

      _createClass(CountryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getcountryList();
        }
      }, {
        key: "getCountry",
        value: function getCountry(ev) {
          var _this2 = this;

          if (localStorage.getItem('countryName') == ev.target.value.trim()) {} else {
            this.showCountrylist = true;
            var val = ev.target.value;
            this.countryList = this.tempArr;
            this.countrySelectedFlag = false;
            this.hide_city_search = false;
            this.hide_city_search_back = true;
            this.city = '';
            this.city_name = '';
            this.searchTerm = '';
            this.buttondisable = true;

            if (val && val.trim() !== '') {
              this.isItemAvailable = true;
              this.countryList = this.countryList.filter(function (item) {
                console.log(_this2.countryList);
                return item.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.isItemAvailable = false;
              this.countryList = this.tempArr;
            }
          }
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this3 = this;

          this.subscription = this.platform.backButton.subscribeWithPriority(10, function (processNextHandler) {
            if (new Date().getTime() - _this3.lastTimeBackPress < _this3.timePeriodToExit) {
              navigator['app'].exitApp();
            } else {
              _this3.searchTerm = '';
              _this3.countryName = '';
              _this3.cityList = [];
              var btn_msg = '';

              _this3.translate.get('press_back_again_to_exit').subscribe(function (res) {
                btn_msg = res;
              }); // var msg = "Press back again to exit."


              _this3.presentToast(btn_msg);

              _this3.lastTimeBackPress = new Date().getTime();
            }
          });
        }
      }, {
        key: "selectedLocation",
        value: function selectedLocation(item) {
          console.log(item);
          this.countryName = item.country_name;
          this.isItemAvailable = false;
          this.showCountrylist = false;
          this.countrySelectedFlag = true;
          localStorage.setItem('ngo_id', item.ngo_id); // this.hide_Country_search_back = true

          localStorage.setItem('countryName', this.countryName);
          this.countryId = item.country_id; // this.city_name = item.name
          // this.buttondisable = false;
          // localStorage.setItem('City_id', this.city)
          // localStorage.setItem('Country_id', this.countryId)
          // localStorage.setItem('City_name', this.city_name)
          // Reset items back to all of the items
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastctrl.create({
                      message: msg,
                      cssClass: 'tostclass',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCity",
        value: function getCity(e1) {
          var _this4 = this;

          if (this.searchTerm.length == 0) {
            this.hide_city_search = false;
            return false;
          }

          if (localStorage.getItem('City_name') == this.searchTerm) {
            this.hide_city_search = false;
          } else {
            this.buttondisable = true;

            if (this.searchTerm.length >= 2) {
              if (this.hide_city_search_back == true) {
                var data = new FormData();
                data.append('query', this.searchTerm);
                data.append('country_id', this.countryId);
                this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', data).subscribe(function (rdata) {
                  console.log(rdata);
                  _this4.hide_city_search = true;
                  _this4.hide_city_search_back = false;
                  _this4.cityList = rdata['data'];

                  if (_this4.cityList.length == 0) {
                    _this4.hide_city_search = false;
                  }
                }, function (error) {//  this.sharedservice.loaderDismiss()
                }, function () {// this.sharedservice.loaderDismiss()
                });
                console.log(this.searchTerm.length);
              } else if (this.searchTerm.length >= 2) {
                var _data = new FormData();

                _data.append('query', this.searchTerm);

                _data.append('country_id', this.countryId); //  this.sharedservice.presentLoadingDefault()


                this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', _data).subscribe(function (rdata) {
                  console.log(rdata);
                  _this4.hide_city_search = true;
                  _this4.hide_city_search_back = false;
                  _this4.cityList = rdata['data'];

                  if (_this4.cityList.length == 0) {
                    _this4.hide_city_search = false;
                  }
                }, function (error) {//  this.sharedservice.loaderDismiss()
                }, function () {// this.sharedservice.loaderDismiss()
                });
                console.log(this.searchTerm.length); // }
              } else {
                this.hide_city_search = false;
              }
            }
          }
        }
      }, {
        key: "selectedcity",
        value: function selectedcity(item) {
          console.log(item);
          this.searchTerm = item.name;
          this.hide_city_search = false;
          this.hide_city_search_back = true;
          this.city = item.id;
          this.city_name = item.name;
          this.buttondisable = false; // localStorage.setItem('ngo_id',item.ngo_id)

          localStorage.setItem('City_id', this.city);
          localStorage.setItem('Country_id', this.countryId);
          localStorage.setItem('City_name', this.city_name);
          localStorage.setItem('city_latitude', item.latitude);
          localStorage.setItem('city_longitude', item.longitude);
          localStorage.setItem('countryName', this.countryName);
        } // getCity(e)
        // {
        //     this.cityId = e.detail.value
        //     console.log(this.cityId)
        //     this.cityArray=this.cityId.split(',')
        //     console.log(this.cityArray)
        //     localStorage.setItem('City_id',this.cityArray[0])
        //     localStorage.setItem('City_name',this.cityArray[1])
        //     if(this.countryId != "" && this.cityArray[0] != "")
        //     {
        //       this.buttondisable = false;
        //     }
        //     else 
        //     {
        //       this.buttondisable = true;
        //     }
        // }

      }, {
        key: "getCityByCountry",
        value: function getCityByCountry() {
          var _this5 = this;

          var data = new FormData();
          data.append('security_key', 'b0e886281185cfc68a2c119f04c5b7b105f632dd');
          data.append('country_id', this.countryId);
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('user/getCities', data).subscribe(function (rdata) {
            console.log(rdata);
            _this5.cityList = rdata.data;
          }, function (error) {
            _this5.sharedservice.loaderDismiss();
          }, function () {
            _this5.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl1 + 'getCities', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.cityList = rdata.data;
          //   }, error => {
          //   });
        } //********************************Getting Country List for select Country**************************

      }, {
        key: "getcountryList",
        value: function getcountryList() {
          var _this6 = this;

          var data = new FormData();
          data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this6.countryList = rdata.data;
            _this6.tempArr = _this6.countryList;
          }, function (error) {
            _this6.sharedservice.loaderDismiss();
          }, function () {
            _this6.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl + 'countryList', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.countryList = rdata.data;
          //   }, error => {
          //   });
        }
      }, {
        key: "organizationList",
        value: function organizationList() {
          var _this7 = this;

          var data = new FormData();
          data.append('security_key', 'b571bb06f3e196ce95f08c70324b9dd5b2d334c5');
          data.append('country_id', this.countryId);
          data.append('city_id', localStorage.getItem('City_id'));
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest('user/getOrganisations', data).subscribe(function (rdata) {
            console.log(rdata);
            _this7.orgzationList = rdata.data;
            _this7.status = rdata.status;

            if (_this7.status == false) {
              localStorage.setItem('Client_id', '1'); // if(localStorage.getItem('ngo_id') == '0')
              // {

              var navigationExtras = {
                queryParams: {
                  countryId: _this7.countryId,
                  cityId: localStorage.getItem('City_id')
                }
              };

              _this7.navController.navigateForward(["languageselection"], navigationExtras); // }
              // else
              // { 
              //   let navigationExtras: NavigationExtras = {
              //     queryParams: {
              //       countryId: this.countryId,
              //       cityId: localStorage.getItem('City_id'),
              //     }
              //   };
              //   this.navController.navigateForward([`ngopartner`], navigationExtras);
              // }

            } else {
              var _navigationExtras = {
                queryParams: {
                  countryId: _this7.countryId,
                  cityId: localStorage.getItem('City_id'),
                  orgdata: rdata
                }
              };

              _this7.navController.navigateForward(["organization"], _navigationExtras);
            }
          }, function (error) {
            _this7.sharedservice.loaderDismiss();
          }, function () {
            _this7.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl1 + 'getOrganisations', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.orgzationList = rdata.data;
          //     this.status = rdata.status
          //     if (this.status == false) {
          //       localStorage.setItem('Client_id','1')
          //       let navigationExtras: NavigationExtras = {
          //         queryParams: {
          //           countryId: this.countryId,
          //           cityId: this.cityArray[0],
          //         }
          //       };
          //       this.navController.navigateForward([`languageselection`], navigationExtras);
          //     }
          //     else {
          //       let navigationExtras: NavigationExtras = {
          //         queryParams: {
          //           countryId: this.countryId,
          //           cityId: this.cityArray[0],
          //           orgdata:rdata
          //         }
          //       };
          //       this.navController.navigateForward([`organization`], navigationExtras);
          //     }
          //   }, error => {
          //   });
        } //********************************Pass id of country and language to onboarding One Page**************************

      }, {
        key: "goToNext",
        value: function goToNext() {
          console.log("country id", this.countryId);
          console.log("cityid", localStorage.getItem('City_id'));
          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = localStorage.getItem('City_name') + ' , ' + localStorage.getItem('countryName');
          geocoder.geocode({
            'address': address
          }, function (results) {
            console.log(results);

            if (results[0].formatted_address) {
              console.log(results);
              var lat = JSON.stringify(results[0].geometry.location.lat());
              var longi = JSON.stringify(results[0].geometry.location.lng());
              localStorage.setItem('map_lat', lat);
              localStorage.setItem('map_longi', longi);
            }
          });
          this.organizationList();
        }
      }]);

      return CountryPage;
    }();

    CountryPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    CountryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-country',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./country.page.scss */
      "./src/app/country/country.page.scss"))["default"]]
    })], CountryPage);
    /***/
  }
}]);
//# sourceMappingURL=country-country-module-es5.js.map