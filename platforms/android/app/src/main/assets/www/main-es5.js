function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts", "tabs-tabs-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n    <ion-router-outlet dir={{dir}} [swipeGesture]=\"false\"></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | country-country-module */
        "country-country-module").then(__webpack_require__.bind(null,
        /*! ./country/country.module */
        "./src/app/country/country.module.ts")).then(function (m) {
          return m.CountryPageModule;
        });
      }
    }, {
      path: 'ngopartner',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ngopartner-ngopartner-module */
        "ngopartner-ngopartner-module").then(__webpack_require__.bind(null,
        /*! ./ngopartner/ngopartner.module */
        "./src/app/ngopartner/ngopartner.module.ts")).then(function (m) {
          return m.NgopartnerPageModule;
        });
      }
    }, {
      path: 'viewdata',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewdata-viewdata-module */
        "viewdata-viewdata-module").then(__webpack_require__.bind(null,
        /*! ./viewdata/viewdata.module */
        "./src/app/viewdata/viewdata.module.ts")).then(function (m) {
          return m.ViewdataPageModule;
        });
      }
    }, {
      path: '',
      loadChildren: './tabs/tabs.module#TabsPageModule'
    }, {
      path: 'onboardingone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingone-onboardingone-module */
        "onboardingone-onboardingone-module").then(__webpack_require__.bind(null,
        /*! ./onboardingone/onboardingone.module */
        "./src/app/onboardingone/onboardingone.module.ts")).then(function (m) {
          return m.OnboardingonePageModule;
        });
      }
    }, {
      path: 'nointernet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | nointernet-nointernet-module */
        "nointernet-nointernet-module").then(__webpack_require__.bind(null,
        /*! ./nointernet/nointernet.module */
        "./src/app/nointernet/nointernet.module.ts")).then(function (m) {
          return m.NointernetPageModule;
        });
      }
    }, {
      path: 'onboardingtwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingtwo-onboardingtwo-module */
        "onboardingtwo-onboardingtwo-module").then(__webpack_require__.bind(null,
        /*! ./onboardingtwo/onboardingtwo.module */
        "./src/app/onboardingtwo/onboardingtwo.module.ts")).then(function (m) {
          return m.OnboardingtwoPageModule;
        });
      }
    }, {
      path: 'onboardingthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingthree-onboardingthree-module */
        "onboardingthree-onboardingthree-module").then(__webpack_require__.bind(null,
        /*! ./onboardingthree/onboardingthree.module */
        "./src/app/onboardingthree/onboardingthree.module.ts")).then(function (m) {
          return m.OnboardingthreePageModule;
        });
      }
    }, {
      path: 'onboardingfour',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingfour-onboardingfour-module */
        "onboardingfour-onboardingfour-module").then(__webpack_require__.bind(null,
        /*! ./onboardingfour/onboardingfour.module */
        "./src/app/onboardingfour/onboardingfour.module.ts")).then(function (m) {
          return m.OnboardingfourPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'languageselection',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | languageselection-languageselection-module */
        "languageselection-languageselection-module").then(__webpack_require__.bind(null,
        /*! ./languageselection/languageselection.module */
        "./src/app/languageselection/languageselection.module.ts")).then(function (m) {
          return m.LanguageselectionPageModule;
        });
      }
    }, {
      path: 'onboardingtwono',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingtwono-onboardingtwono-module */
        "onboardingtwono-onboardingtwono-module").then(__webpack_require__.bind(null,
        /*! ./onboardingtwono/onboardingtwono.module */
        "./src/app/onboardingtwono/onboardingtwono.module.ts")).then(function (m) {
          return m.OnboardingtwonoPageModule;
        });
      }
    }, {
      path: 'preframing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | preframing-preframing-module */
        "preframing-preframing-module").then(__webpack_require__.bind(null,
        /*! ./preframing/preframing.module */
        "./src/app/preframing/preframing.module.ts")).then(function (m) {
          return m.PreframingPageModule;
        });
      }
    }, {
      path: 'preframingtwo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | preframingtwo-preframingtwo-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("preframingtwo-preframingtwo-module")]).then(__webpack_require__.bind(null,
        /*! ./preframingtwo/preframingtwo.module */
        "./src/app/preframingtwo/preframingtwo.module.ts")).then(function (m) {
          return m.PreframingtwoPageModule;
        });
      }
    }, {
      path: 'reportfiledone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledone-reportfiledone-module */
        "reportfiledone-reportfiledone-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledone/reportfiledone.module */
        "./src/app/reportfiledone/reportfiledone.module.ts")).then(function (m) {
          return m.ReportfiledonePageModule;
        });
      }
    }, {
      path: 'reportfiledtwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledtwo-reportfiledtwo-module */
        "reportfiledtwo-reportfiledtwo-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledtwo/reportfiledtwo.module */
        "./src/app/reportfiledtwo/reportfiledtwo.module.ts")).then(function (m) {
          return m.ReportfiledtwoPageModule;
        });
      }
    }, {
      path: 'reportfiledthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledthree-reportfiledthree-module */
        "reportfiledthree-reportfiledthree-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledthree/reportfiledthree.module */
        "./src/app/reportfiledthree/reportfiledthree.module.ts")).then(function (m) {
          return m.ReportfiledthreePageModule;
        });
      }
    }, {
      path: 'reportfiledfour',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledfour-reportfiledfour-module */
        "reportfiledfour-reportfiledfour-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledfour/reportfiledfour.module */
        "./src/app/reportfiledfour/reportfiledfour.module.ts")).then(function (m) {
          return m.ReportfiledfourPageModule;
        });
      }
    }, {
      path: 'reportfiledfive',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledfive-reportfiledfive-module */
        "reportfiledfive-reportfiledfive-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledfive/reportfiledfive.module */
        "./src/app/reportfiledfive/reportfiledfive.module.ts")).then(function (m) {
          return m.ReportfiledfivePageModule;
        });
      }
    }, {
      path: 'reportfiledsix',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledsix-reportfiledsix-module */
        "reportfiledsix-reportfiledsix-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledsix/reportfiledsix.module */
        "./src/app/reportfiledsix/reportfiledsix.module.ts")).then(function (m) {
          return m.ReportfiledsixPageModule;
        });
      }
    }, {
      path: 'reportfiledseven',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledseven-reportfiledseven-module */
        "reportfiledseven-reportfiledseven-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledseven/reportfiledseven.module */
        "./src/app/reportfiledseven/reportfiledseven.module.ts")).then(function (m) {
          return m.ReportfiledsevenPageModule;
        });
      }
    }, {
      path: 'reportfiledeight',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledeight-reportfiledeight-module */
        "reportfiledeight-reportfiledeight-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledeight/reportfiledeight.module */
        "./src/app/reportfiledeight/reportfiledeight.module.ts")).then(function (m) {
          return m.ReportfiledeightPageModule;
        });
      }
    }, {
      path: 'reportfilednine',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfilednine-reportfilednine-module */
        "reportfilednine-reportfilednine-module").then(__webpack_require__.bind(null,
        /*! ./reportfilednine/reportfilednine.module */
        "./src/app/reportfilednine/reportfilednine.module.ts")).then(function (m) {
          return m.ReportfiledninePageModule;
        });
      }
    }, {
      path: 'reportfiledten',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledten-reportfiledten-module */
        "reportfiledten-reportfiledten-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledten/reportfiledten.module */
        "./src/app/reportfiledten/reportfiledten.module.ts")).then(function (m) {
          return m.ReportfiledtenPageModule;
        });
      }
    }, {
      path: 'reportfiledeleven',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledeleven-reportfiledeleven-module */
        "reportfiledeleven-reportfiledeleven-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledeleven/reportfiledeleven.module */
        "./src/app/reportfiledeleven/reportfiledeleven.module.ts")).then(function (m) {
          return m.ReportfiledelevenPageModule;
        });
      }
    }, {
      path: 'reportfiledtwelve',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledtwelve-reportfiledtwelve-module */
        "reportfiledtwelve-reportfiledtwelve-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledtwelve/reportfiledtwelve.module */
        "./src/app/reportfiledtwelve/reportfiledtwelve.module.ts")).then(function (m) {
          return m.ReportfiledtwelvePageModule;
        });
      }
    }, {
      path: 'preframingsecondary',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | preframingsecondary-preframingsecondary-module */
        "preframingsecondary-preframingsecondary-module").then(__webpack_require__.bind(null,
        /*! ./preframingsecondary/preframingsecondary.module */
        "./src/app/preframingsecondary/preframingsecondary.module.ts")).then(function (m) {
          return m.PreframingsecondaryPageModule;
        });
      }
    }, {
      path: 'domesticviolence',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | domesticviolence-domesticviolence-module */
        "domesticviolence-domesticviolence-module").then(__webpack_require__.bind(null,
        /*! ./domesticviolence/domesticviolence.module */
        "./src/app/domesticviolence/domesticviolence.module.ts")).then(function (m) {
          return m.DomesticviolencePageModule;
        });
      }
    }, {
      path: 'safteytipone',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | safteytipone-safteytipone-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("safteytipone-safteytipone-module")]).then(__webpack_require__.bind(null,
        /*! ./safteytipone/safteytipone.module */
        "./src/app/safteytipone/safteytipone.module.ts")).then(function (m) {
          return m.SafteytiponePageModule;
        });
      }
    }, {
      path: 'safteytiptwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytiptwo-safteytiptwo-module */
        "safteytiptwo-safteytiptwo-module").then(__webpack_require__.bind(null,
        /*! ./safteytiptwo/safteytiptwo.module */
        "./src/app/safteytiptwo/safteytiptwo.module.ts")).then(function (m) {
          return m.SafteytiptwoPageModule;
        });
      }
    }, {
      path: 'safteytipthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytipthree-safteytipthree-module */
        "safteytipthree-safteytipthree-module").then(__webpack_require__.bind(null,
        /*! ./safteytipthree/safteytipthree.module */
        "./src/app/safteytipthree/safteytipthree.module.ts")).then(function (m) {
          return m.SafteytipthreePageModule;
        });
      }
    }, {
      path: 'safteytipfour',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytipfour-safteytipfour-module */
        "safteytipfour-safteytipfour-module").then(__webpack_require__.bind(null,
        /*! ./safteytipfour/safteytipfour.module */
        "./src/app/safteytipfour/safteytipfour.module.ts")).then(function (m) {
          return m.SafteytipfourPageModule;
        });
      }
    }, {
      path: 'safteytip-thankyou',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytip-thankyou-safteytip-thankyou-module */
        "safteytip-thankyou-safteytip-thankyou-module").then(__webpack_require__.bind(null,
        /*! ./safteytip-thankyou/safteytip-thankyou.module */
        "./src/app/safteytip-thankyou/safteytip-thankyou.module.ts")).then(function (m) {
          return m.SafteytipThankyouPageModule;
        });
      }
    }, {
      path: 'viewsafety',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewsafety-viewsafety-module */
        "viewsafety-viewsafety-module").then(__webpack_require__.bind(null,
        /*! ./viewsafety/viewsafety.module */
        "./src/app/viewsafety/viewsafety.module.ts")).then(function (m) {
          return m.ViewsafetyPageModule;
        });
      }
    }, {
      path: 'viewsafteydetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewsafteydetail-viewsafteydetail-module */
        "viewsafteydetail-viewsafteydetail-module").then(__webpack_require__.bind(null,
        /*! ./viewsafteydetail/viewsafteydetail.module */
        "./src/app/viewsafteydetail/viewsafteydetail.module.ts")).then(function (m) {
          return m.ViewsafteydetailPageModule;
        });
      }
    }, {
      path: 'viewsafteydetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewsafteydetail-viewsafteydetail-module */
        "viewsafteydetail-viewsafteydetail-module").then(__webpack_require__.bind(null,
        /*! ./viewsafteydetail/viewsafteydetail.module */
        "./src/app/viewsafteydetail/viewsafteydetail.module.ts")).then(function (m) {
          return m.ViewsafteydetailPageModule;
        });
      }
    }, {
      path: 'viewreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewreport-viewreport-module */
        "viewreport-viewreport-module").then(__webpack_require__.bind(null,
        /*! ./viewreport/viewreport.module */
        "./src/app/viewreport/viewreport.module.ts")).then(function (m) {
          return m.ViewreportPageModule;
        });
      }
    }, {
      path: 'help',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | help-help-module */
        "help-help-module").then(__webpack_require__.bind(null,
        /*! ./help/help.module */
        "./src/app/help/help.module.ts")).then(function (m) {
          return m.HelpPageModule;
        });
      }
    }, {
      path: 'helplines',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | helplines-helplines-module */
        [__webpack_require__.e("common"), __webpack_require__.e("helplines-helplines-module")]).then(__webpack_require__.bind(null,
        /*! ./helplines/helplines.module */
        "./src/app/helplines/helplines.module.ts")).then(function (m) {
          return m.HelplinesPageModule;
        });
      }
    }, {
      path: 'filter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | filter-filter-module */
        "filter-filter-module").then(__webpack_require__.bind(null,
        /*! ./filter/filter.module */
        "./src/app/filter/filter.module.ts")).then(function (m) {
          return m.FilterPageModule;
        });
      }
    }, {
      path: 'form-one',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | SecondaryForm-form-one-form-one-module */
        "SecondaryForm-form-one-form-one-module").then(__webpack_require__.bind(null,
        /*! ./SecondaryForm/form-one/form-one.module */
        "./src/app/SecondaryForm/form-one/form-one.module.ts")).then(function (m) {
          return m.FormOnePageModule;
        });
      }
    }, {
      path: 'form-two',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | SecondaryForm-form-two-form-two-module */
        "SecondaryForm-form-two-form-two-module").then(__webpack_require__.bind(null,
        /*! ./SecondaryForm/form-two/form-two.module */
        "./src/app/SecondaryForm/form-two/form-two.module.ts")).then(function (m) {
          return m.FormTwoPageModule;
        });
      }
    }, {
      path: 'sevensubfieldone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sevensubfieldone-sevensubfieldone-module */
        "sevensubfieldone-sevensubfieldone-module").then(__webpack_require__.bind(null,
        /*! ./sevensubfieldone/sevensubfieldone.module */
        "./src/app/sevensubfieldone/sevensubfieldone.module.ts")).then(function (m) {
          return m.SevensubfieldonePageModule;
        });
      }
    }, {
      path: 'sevensubfieldtwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sevensubfieldtwo-sevensubfieldtwo-module */
        "sevensubfieldtwo-sevensubfieldtwo-module").then(__webpack_require__.bind(null,
        /*! ./sevensubfieldtwo/sevensubfieldtwo.module */
        "./src/app/sevensubfieldtwo/sevensubfieldtwo.module.ts")).then(function (m) {
          return m.SevensubfieldtwoPageModule;
        });
      }
    }, {
      path: 'sevensubfieldthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sevensubfieldthree-sevensubfieldthree-module */
        "sevensubfieldthree-sevensubfieldthree-module").then(__webpack_require__.bind(null,
        /*! ./sevensubfieldthree/sevensubfieldthree.module */
        "./src/app/sevensubfieldthree/sevensubfieldthree.module.ts")).then(function (m) {
          return m.SevensubfieldthreePageModule;
        });
      }
    }, {
      path: 'safetyfilter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safetyfilter-safetyfilter-module */
        "safetyfilter-safetyfilter-module").then(__webpack_require__.bind(null,
        /*! ./safetyfilter/safetyfilter.module */
        "./src/app/safetyfilter/safetyfilter.module.ts")).then(function (m) {
          return m.SafetyfilterPageModule;
        });
      }
    }, {
      path: 'viewreportdetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewreportdetail-viewreportdetail-module */
        "viewreportdetail-viewreportdetail-module").then(__webpack_require__.bind(null,
        /*! ./viewreportdetail/viewreportdetail.module */
        "./src/app/viewreportdetail/viewreportdetail.module.ts")).then(function (m) {
          return m.ViewreportdetailPageModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | menu-menu-module */
        "menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./menu/menu.module */
        "./src/app/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      }
    }, {
      path: 'volunteer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | volunteer-volunteer-module */
        "volunteer-volunteer-module").then(__webpack_require__.bind(null,
        /*! ./volunteer/volunteer.module */
        "./src/app/volunteer/volunteer.module.ts")).then(function (m) {
          return m.VolunteerPageModule;
        });
      }
    }, {
      path: 'donate',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | donate-donate-module */
        "donate-donate-module").then(__webpack_require__.bind(null,
        /*! ./donate/donate.module */
        "./src/app/donate/donate.module.ts")).then(function (m) {
          return m.DonatePageModule;
        });
      }
    }, {
      path: 'contact',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-contact-module */
        "contact-contact-module").then(__webpack_require__.bind(null,
        /*! ./contact/contact.module */
        "./src/app/contact/contact.module.ts")).then(function (m) {
          return m.ContactPageModule;
        });
      }
    }, {
      path: 'setting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-setting-module */
        "setting-setting-module").then(__webpack_require__.bind(null,
        /*! ./setting/setting.module */
        "./src/app/setting/setting.module.ts")).then(function (m) {
          return m.SettingPageModule;
        });
      }
    }, {
      path: 'privacypolicy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | privacypolicy-privacypolicy-module */
        "privacypolicy-privacypolicy-module").then(__webpack_require__.bind(null,
        /*! ./privacypolicy/privacypolicy.module */
        "./src/app/privacypolicy/privacypolicy.module.ts")).then(function (m) {
          return m.PrivacypolicyPageModule;
        });
      }
    }, {
      path: 'terms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | terms-terms-module */
        "terms-terms-module").then(__webpack_require__.bind(null,
        /*! ./terms/terms.module */
        "./src/app/terms/terms.module.ts")).then(function (m) {
          return m.TermsPageModule;
        });
      }
    }, {
      path: 'faq',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | faq-faq-module */
        "faq-faq-module").then(__webpack_require__.bind(null,
        /*! ./faq/faq.module */
        "./src/app/faq/faq.module.ts")).then(function (m) {
          return m.FaqPageModule;
        });
      }
    }, {
      path: 'myviewreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | myviewreport-myviewreport-module */
        "myviewreport-myviewreport-module").then(__webpack_require__.bind(null,
        /*! ./myviewreport/myviewreport.module */
        "./src/app/myviewreport/myviewreport.module.ts")).then(function (m) {
          return m.MyviewreportPageModule;
        });
      }
    }, {
      path: 'myreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | myreport-myreport-module */
        "myreport-myreport-module").then(__webpack_require__.bind(null,
        /*! ./myreport/myreport.module */
        "./src/app/myreport/myreport.module.ts")).then(function (m) {
          return m.MyreportPageModule;
        });
      }
    }, {
      path: 'editreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editreport-editreport-module */
        "editreport-editreport-module").then(__webpack_require__.bind(null,
        /*! ./editreport/editreport.module */
        "./src/app/editreport/editreport.module.ts")).then(function (m) {
          return m.EditreportPageModule;
        });
      }
    }, {
      path: 'hospital',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | hospital-hospital-module */
        "hospital-hospital-module").then(__webpack_require__.bind(null,
        /*! ./hospital/hospital.module */
        "./src/app/hospital/hospital.module.ts")).then(function (m) {
          return m.HospitalPageModule;
        });
      }
    }, {
      path: 'findhospital',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | findhospital-findhospital-module */
        "findhospital-findhospital-module").then(__webpack_require__.bind(null,
        /*! ./findhospital/findhospital.module */
        "./src/app/findhospital/findhospital.module.ts")).then(function (m) {
          return m.FindhospitalPageModule;
        });
      }
    }, {
      path: 'hospitallisting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | hospitallisting-hospitallisting-module */
        "hospitallisting-hospitallisting-module").then(__webpack_require__.bind(null,
        /*! ./hospitallisting/hospitallisting.module */
        "./src/app/hospitallisting/hospitallisting.module.ts")).then(function (m) {
          return m.HospitallistingPageModule;
        });
      }
    }, {
      path: 'police',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | police-police-module */
        "police-police-module").then(__webpack_require__.bind(null,
        /*! ./police/police.module */
        "./src/app/police/police.module.ts")).then(function (m) {
          return m.PolicePageModule;
        });
      }
    }, {
      path: 'findpolice',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | findpolice-findpolice-module */
        "findpolice-findpolice-module").then(__webpack_require__.bind(null,
        /*! ./findpolice/findpolice.module */
        "./src/app/findpolice/findpolice.module.ts")).then(function (m) {
          return m.FindpolicePageModule;
        });
      }
    }, {
      path: 'policelisting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | policelisting-policelisting-module */
        "policelisting-policelisting-module").then(__webpack_require__.bind(null,
        /*! ./policelisting/policelisting.module */
        "./src/app/policelisting/policelisting.module.ts")).then(function (m) {
          return m.PolicelistingPageModule;
        });
      }
    }, {
      path: 'legalresources',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | legalresources-legalresources-module */
        "legalresources-legalresources-module").then(__webpack_require__.bind(null,
        /*! ./legalresources/legalresources.module */
        "./src/app/legalresources/legalresources.module.ts")).then(function (m) {
          return m.LegalresourcesPageModule;
        });
      }
    }, {
      path: 'ipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ipc-ipc-module */
        "ipc-ipc-module").then(__webpack_require__.bind(null,
        /*! ./ipc/ipc.module */
        "./src/app/ipc/ipc.module.ts")).then(function (m) {
          return m.IpcPageModule;
        });
      }
    }, {
      path: 'onlineipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onlineipc-onlineipc-module */
        "onlineipc-onlineipc-module").then(__webpack_require__.bind(null,
        /*! ./onlineipc/onlineipc.module */
        "./src/app/onlineipc/onlineipc.module.ts")).then(function (m) {
          return m.OnlineipcPageModule;
        });
      }
    }, {
      path: 'sexualassaultipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sexualassaultipc-sexualassaultipc-module */
        "sexualassaultipc-sexualassaultipc-module").then(__webpack_require__.bind(null,
        /*! ./sexualassaultipc/sexualassaultipc.module */
        "./src/app/sexualassaultipc/sexualassaultipc.module.ts")).then(function (m) {
          return m.SexualassaultipcPageModule;
        });
      }
    }, {
      path: 'oglingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | oglingipc-oglingipc-module */
        "oglingipc-oglingipc-module").then(__webpack_require__.bind(null,
        /*! ./oglingipc/oglingipc.module */
        "./src/app/oglingipc/oglingipc.module.ts")).then(function (m) {
          return m.OglingipcPageModule;
        });
      }
    }, {
      path: 'takingphotoipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | takingphotoipc-takingphotoipc-module */
        "takingphotoipc-takingphotoipc-module").then(__webpack_require__.bind(null,
        /*! ./takingphotoipc/takingphotoipc.module */
        "./src/app/takingphotoipc/takingphotoipc.module.ts")).then(function (m) {
          return m.TakingphotoipcPageModule;
        });
      }
    }, {
      path: 'commentingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | commentingipc-commentingipc-module */
        "commentingipc-commentingipc-module").then(__webpack_require__.bind(null,
        /*! ./commentingipc/commentingipc.module */
        "./src/app/commentingipc/commentingipc.module.ts")).then(function (m) {
          return m.CommentingipcPageModule;
        });
      }
    }, {
      path: 'indecentipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | indecentipc-indecentipc-module */
        "indecentipc-indecentipc-module").then(__webpack_require__.bind(null,
        /*! ./indecentipc/indecentipc.module */
        "./src/app/indecentipc/indecentipc.module.ts")).then(function (m) {
          return m.IndecentipcPageModule;
        });
      }
    }, {
      path: 'touchingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | touchingipc-touchingipc-module */
        "touchingipc-touchingipc-module").then(__webpack_require__.bind(null,
        /*! ./touchingipc/touchingipc.module */
        "./src/app/touchingipc/touchingipc.module.ts")).then(function (m) {
          return m.TouchingipcPageModule;
        });
      }
    }, {
      path: 'sexualinvitesipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sexualinvitesipc-sexualinvitesipc-module */
        "sexualinvitesipc-sexualinvitesipc-module").then(__webpack_require__.bind(null,
        /*! ./sexualinvitesipc/sexualinvitesipc.module */
        "./src/app/sexualinvitesipc/sexualinvitesipc.module.ts")).then(function (m) {
          return m.SexualinvitesipcPageModule;
        });
      }
    }, {
      path: 'chainsnachtingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chainsnachtingipc-chainsnachtingipc-module */
        "chainsnachtingipc-chainsnachtingipc-module").then(__webpack_require__.bind(null,
        /*! ./chainsnachtingipc/chainsnachtingipc.module */
        "./src/app/chainsnachtingipc/chainsnachtingipc.module.ts")).then(function (m) {
          return m.ChainsnachtingipcPageModule;
        });
      }
    }, {
      path: 'humanipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | humanipc-humanipc-module */
        "humanipc-humanipc-module").then(__webpack_require__.bind(null,
        /*! ./humanipc/humanipc.module */
        "./src/app/humanipc/humanipc.module.ts")).then(function (m) {
          return m.HumanipcPageModule;
        });
      }
    }, {
      path: 'catcallsipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | catcallsipc-catcallsipc-module */
        "catcallsipc-catcallsipc-module").then(__webpack_require__.bind(null,
        /*! ./catcallsipc/catcallsipc.module */
        "./src/app/catcallsipc/catcallsipc.module.ts")).then(function (m) {
          return m.CatcallsipcPageModule;
        });
      }
    }, {
      path: 'stakingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | stakingipc-stakingipc-module */
        "stakingipc-stakingipc-module").then(__webpack_require__.bind(null,
        /*! ./stakingipc/stakingipc.module */
        "./src/app/stakingipc/stakingipc.module.ts")).then(function (m) {
          return m.StakingipcPageModule;
        });
      }
    }, {
      path: 'mysafety',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mysafety-mysafety-module */
        "mysafety-mysafety-module").then(__webpack_require__.bind(null,
        /*! ./mysafety/mysafety.module */
        "./src/app/mysafety/mysafety.module.ts")).then(function (m) {
          return m.MysafetyPageModule;
        });
      }
    }, {
      path: 'mysafetyreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mysafetyreport-mysafetyreport-module */
        "mysafetyreport-mysafetyreport-module").then(__webpack_require__.bind(null,
        /*! ./mysafetyreport/mysafetyreport.module */
        "./src/app/mysafetyreport/mysafetyreport.module.ts")).then(function (m) {
          return m.MysafetyreportPageModule;
        });
      }
    }, {
      path: 'editsafetytip',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editsafetytip-editsafetytip-module */
        "editsafetytip-editsafetytip-module").then(__webpack_require__.bind(null,
        /*! ./editsafetytip/editsafetytip.module */
        "./src/app/editsafetytip/editsafetytip.module.ts")).then(function (m) {
          return m.EditsafetytipPageModule;
        });
      }
    }, {
      path: 'aboutsafecity',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | aboutsafecity-aboutsafecity-module */
        "aboutsafecity-aboutsafecity-module").then(__webpack_require__.bind(null,
        /*! ./aboutsafecity/aboutsafecity.module */
        "./src/app/aboutsafecity/aboutsafecity.module.ts")).then(function (m) {
          return m.AboutsafecityPageModule;
        });
      }
    }, {
      path: 'filing-fir',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | filing-fir-filing-fir-module */
        "filing-fir-filing-fir-module").then(__webpack_require__.bind(null,
        /*! ./filing-fir/filing-fir.module */
        "./src/app/filing-fir/filing-fir.module.ts")).then(function (m) {
          return m.FilingFIRPageModule;
        });
      }
    }, {
      path: 'countrymenu',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | countrymenu-countrymenu-module */
        [__webpack_require__.e("common"), __webpack_require__.e("countrymenu-countrymenu-module")]).then(__webpack_require__.bind(null,
        /*! ./countrymenu/countrymenu.module */
        "./src/app/countrymenu/countrymenu.module.ts")).then(function (m) {
          return m.CountrymenuPageModule;
        });
      }
    }, {
      path: 'languagemenu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | languagemenu-languagemenu-module */
        "languagemenu-languagemenu-module").then(__webpack_require__.bind(null,
        /*! ./languagemenu/languagemenu.module */
        "./src/app/languagemenu/languagemenu.module.ts")).then(function (m) {
          return m.LanguagemenuPageModule;
        });
      }
    }, {
      path: 'organization',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | organization-organization-module */
        "organization-organization-module").then(__webpack_require__.bind(null,
        /*! ./organization/organization.module */
        "./src/app/organization/organization.module.ts")).then(function (m) {
          return m.OrganizationPageModule;
        });
      }
    }, {
      path: 'verfication',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verfication-verfication-module */
        "verfication-verfication-module").then(__webpack_require__.bind(null,
        /*! ./verfication/verfication.module */
        "./src/app/verfication/verfication.module.ts")).then(function (m) {
          return m.VerficationPageModule;
        });
      }
    }, {
      path: 'modelreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modelreport-modelreport-module */
        "modelreport-modelreport-module").then(__webpack_require__.bind(null,
        /*! ./modelreport/modelreport.module */
        "./src/app/modelreport/modelreport.module.ts")).then(function (m) {
          return m.ModelreportPageModule;
        });
      }
    }, {
      path: 'primaryform',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | primaryform-primaryform-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("primaryform-primaryform-module")]).then(__webpack_require__.bind(null,
        /*! ./primaryform/primaryform.module */
        "./src/app/primaryform/primaryform.module.ts")).then(function (m) {
          return m.PrimaryformPageModule;
        });
      }
    }, {
      path: 'incidentfilter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | incidentfilter-incidentfilter-module */
        "incidentfilter-incidentfilter-module").then(__webpack_require__.bind(null,
        /*! ./incidentfilter/incidentfilter.module */
        "./src/app/incidentfilter/incidentfilter.module.ts")).then(function (m) {
          return m.IncidentfilterPageModule;
        });
      }
    }, {
      path: 'organizationmenu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | organizationmenu-organizationmenu-module */
        "organizationmenu-organizationmenu-module").then(__webpack_require__.bind(null,
        /*! ./organizationmenu/organizationmenu.module */
        "./src/app/organizationmenu/organizationmenu.module.ts")).then(function (m) {
          return m.OrganizationmenuPageModule;
        });
      }
    }, {
      path: 'chat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chat-chat-module */
        "chat-chat-module").then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'detailpopup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | detailpopup-detailpopup-module */
        "detailpopup-detailpopup-module").then(__webpack_require__.bind(null,
        /*! ./detailpopup/detailpopup.module */
        "./src/app/detailpopup/detailpopup.module.ts")).then(function (m) {
          return m.DetailpopupPageModule;
        });
      }
    }, {
      path: 'wellness',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wellness-wellness-module */
        "wellness-wellness-module").then(__webpack_require__.bind(null,
        /*! ./wellness/wellness.module */
        "./src/app/wellness/wellness.module.ts")).then(function (m) {
          return m.WellnessPageModule;
        });
      }
    }, {
      path: 'countrymenupopover',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | countrymenupopover-countrymenupopover-module */
        [__webpack_require__.e("common"), __webpack_require__.e("countrymenupopover-countrymenupopover-module")]).then(__webpack_require__.bind(null,
        /*! ./countrymenupopover/countrymenupopover.module */
        "./src/app/countrymenupopover/countrymenupopover.module.ts")).then(function (m) {
          return m.CountrymenupopoverPageModule;
        });
      }
    }, {
      path: 'countrymenupopover',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | countrymenupopover-countrymenupopover-module */
        [__webpack_require__.e("common"), __webpack_require__.e("countrymenupopover-countrymenupopover-module")]).then(__webpack_require__.bind(null,
        /*! ./countrymenupopover/countrymenupopover.module */
        "./src/app/countrymenupopover/countrymenupopover.module.ts")).then(function (m) {
          return m.CountrymenupopoverPageModule;
        });
      }
    }, {
      path: 'viewdata',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewdata-viewdata-module */
        "viewdata-viewdata-module").then(__webpack_require__.bind(null,
        /*! ./viewdata/viewdata.module */
        "./src/app/viewdata/viewdata.module.ts")).then(function (m) {
          return m.ViewdataPageModule;
        });
      }
    }, {
      path: 'socialpop',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | socialpop-socialpop-module */
        [__webpack_require__.e("common"), __webpack_require__.e("socialpop-socialpop-module")]).then(__webpack_require__.bind(null,
        /*! ./socialpop/socialpop.module */
        "./src/app/socialpop/socialpop.module.ts")).then(function (m) {
          return m.SocialpopPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Gelion\";\n  src: url(\"/assets/fonts/Gelion-Medium.eot\");\n  src: url(\"/assets/fonts/Gelion-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Gelion-Medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/Gelion-Medium.woff\") format(\"woff\"), url(\"/assets/fonts/Gelion-Medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/Gelion-Medium.svg#Gelion-Medium\") format(\"svg\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gelion\";\n  src: url(\"/assets/fonts/Gelion-Regular.eot\");\n  src: url(\"/assets/fonts/Gelion-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Gelion-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/Gelion-Regular.woff\") format(\"woff\"), url(\"/assets/fonts/Gelion-Regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/Gelion-Regular.svg#Gelion-Regular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gelion Semi\";\n  src: url(\"/assets/fonts/Gelion-SemiBold.eot\");\n  src: url(\"/assets/fonts/Gelion-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Gelion-SemiBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/Gelion-SemiBold.woff\") format(\"woff\"), url(\"/assets/fonts/Gelion-SemiBold.ttf\") format(\"truetype\"), url(\"/assets/fonts/Gelion-SemiBold.svg#Gelion-SemiBold\") format(\"svg\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\nbody {\n  font-family: \"Gelion\";\n}\n.alert-head {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsK1RBQUE7RUFLQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtBO0VBQ0kscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFVQUFBO0VBS0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUEo7QURVQTtFQUNJLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSwyVUFBQTtFQUtBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZ0JBO0VBRUcscUJBQUE7QUNmSDtBRG1CQTtFQUVBLHdCQUFBO0FDakJBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dlbGlvbic7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLmVvdCcpO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLU1lZGl1bS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0uc3ZnI0dlbGlvbi1NZWRpdW0nKSBmb3JtYXQoJ3N2ZycpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2VsaW9uJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLmVvdCcpO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICAgICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIuc3ZnI0dlbGlvbi1SZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHZWxpb24gU2VtaSc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQuZW90Jyk7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICAgICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQuc3ZnI0dlbGlvbi1TZW1pQm9sZCcpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG59XHJcblxyXG5cclxuYm9keVxyXG57XHJcbiAgIGZvbnQtZmFtaWx5OiAnR2VsaW9uJztcclxuXHJcbn1cclxuXHJcbi5hbGVydC1oZWFkXHJcbntcclxuZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgXHJcblxyXG5cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlbGlvblwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLU1lZGl1bS5lb3RcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLnN2ZyNHZWxpb24tTWVkaXVtXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VsaW9uXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIuc3ZnI0dlbGlvbi1SZWd1bGFyXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VsaW9uIFNlbWlcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLVNlbWlCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC5zdmcjR2VsaW9uLVNlbWlCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VsaW9uXCI7XG59XG5cbi5hbGVydC1oZWFkIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, router, translate, network, statusBar, navController, zone) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.router = router;
        this.translate = translate;
        this.network = network;
        this.statusBar = statusBar;
        this.navController = navController;
        this.zone = zone;
        this.dir = 'ltr';
        this.initializeApp();
        this.translate.onLangChange.subscribe(function (ev) {
          console.log(ev);

          if (ev.lang == "ar") {
            _this.dir = 'rtl';
            console.log(_this.dir);
          } else {
            _this.dir = 'ltr';
            console.log(_this.dir);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.hide(); // this.splashScreen.hide();


            setTimeout(function () {
              _this2.splashScreen.hide();

              _this2.initTranslate();

              if (_this2.platform.is('android')) {
                localStorage.setItem('platform', 'android');
              } else if (_this2.platform.is('ios')) {
                localStorage.setItem('platform', 'ios');
              } else {
                localStorage.setItem('platform', 'browser');
              }

              _this2.zone.run(function () {
                _this2.id = localStorage.getItem("userId");

                if (_this2.id != null) {
                  _this2.navController.navigateForward("home");
                }
              });

              console.log("id", _this2.id);
            }, 1000); // watch network for a disconnection

            var disconnectSubscription = _this2.network.onDisconnect().subscribe(function () {
              console.log("network was disconnected :-(");

              _this2.navController.navigateForward("/nointernet");

              console.log(_this2.navController); // alert('off')
            }); // stop disconnect watch
            //disconnectSubscription.unsubscribe();
            // watch network for a connection


            var connectSubscription = _this2.network.onConnect().subscribe(function () {
              console.log("network connected!", _this2.network.type);
              console.log(_this2.navController);

              if (_this2.router.url == "/nointernet") {
                _this2.navController.pop();
              } // alert('on')
              // We just got a connection but we need to wait briefly
              // before we determine the connection type. Might need to wait.
              // prior to doing any api requests as well.


              setTimeout(function () {
                if (_this2.network.type === "wifi") {
                  console.log("we got a wifi connection, woohoo!");
                }
              }, 3000);
            }); // stop connect watch
            //connectSubscription.unsubscribe();
            // this.initTranslate()


            console.log("id", _this2.id); // this.zone.run(()=>{
            //   this.id=localStorage.getItem('userId');
            //    if(this.id != null)
            // {
            //   this.navController.navigateForward('home')
            // }
            // })
          });
        }
      }, {
        key: "initTranslate",
        value: function initTranslate() {
          this.language = localStorage.getItem("language");

          if (!this.language) {
            // this.dir = 'ltr'
            this.translate.setDefaultLang("en");
            this.translate.use("en");
            this.language = localStorage.setItem("language", "en");
          } else {
            this.translate.setDefaultLang(this.language);
            this.translate.use(this.language);

            if (this.language == "ar") {
              this.dir = 'rtl';
              console.log(this.dir);
            }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
        }
      })],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }, _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"], _shared_service__WEBPACK_IMPORTED_MODULE_15__["SharedService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__["Keyboard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared.service.ts":
  /*!***********************************!*\
    !*** ./src/app/shared.service.ts ***!
    \***********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SharedService = /*#__PURE__*/function () {
      //  apiurl = 'http://139.59.76.55/api/'  //local
      //  apiurlwebapp = 'http://139.59.76.55/api/' //local
      //http://101.53.143.7/~dataduck/safecity_webapp/api
      function SharedService(httpClient, translate, loadingCtrl) {
        _classCallCheck(this, SharedService);

        this.httpClient = httpClient;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.sharedData = {}; // apiurl = 'http://139.59.76.55/api/'   //localhttp://101.53.143.7/~dataduck/safecity_webapp/api/http://139.59.76.55/api/
        // apiurlwebapp = 'http://139.59.76.55/api/' //localhttp://101.53.143.7/~dataduck/safecity_webapp/api/http://139.59.76.55/api/

        this.catArray = [];
        this.categoryArray = [];
        this.catIdArray = [];
        this.all_Array = [];
        this.safetyfiltersdata = '';
        this.apiurl = 'https://webapp.safecity.in/api/'; //production

        this.apiurlwebapp = 'https://webapp.safecity.in/api/'; //production

        this.app_version = '1.3.8';
      }

      _createClass(SharedService, [{
        key: "presentLoadingDefault",
        value: function presentLoadingDefault(loadertext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('data');
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      cssClass: 'my-custom-class',
                      message: loadertext,
                      duration: 2500
                    });

                  case 3:
                    this.loading = _context.sent;
                    _context.next = 6;
                    return this.loading.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "get_url",
        value: function get_url() {
          return this.apiurl;
        }
      }, {
        key: "loaderDismiss",
        value: function loaderDismiss() {
          console.log('data', this.loading);
          this.loading.dismiss();
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.sharedData;
        }
      }, {
        key: "setData",
        value: function setData(data) {
          this.sharedData = data;
        }
      }, {
        key: "setSafetyTipData",
        value: function setSafetyTipData(data) {
          this.sharedSafetyTipData = data;
        }
      }, {
        key: "getSafetyTipData",
        value: function getSafetyTipData() {
          return this.sharedSafetyTipData;
        }
      }, {
        key: "sharedPostRequest",
        value: function sharedPostRequest(api_name, data) {
          return this.httpClient.post(this.apiurl + api_name, data);
        }
      }, {
        key: "sharedPostRequest_webappurl",
        value: function sharedPostRequest_webappurl(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        } // set data for incident filter

      }, {
        key: "timeofArray",
        value: function timeofArray(all_Array) {
          this.all_Array = all_Array;
          console.log("1", this.all_Array);

          if (this.all_Array.length > 0) {
            var timeofArray = this.all_Array[0].length;
            var catId = this.all_Array[2].length;
            var incidentFrom = this.all_Array[1].length;

            if (incidentFrom != "") {
              incidentFrom = 1;
            } else {
              incidentFrom = 0;
            }

            var totalLen = 0;
            totalLen = timeofArray + catId + incidentFrom;
            console.log("totalLen", totalLen);

            if (totalLen >= 1) {
              this.all_Array.push(totalLen);
            }
          }
        }
      }, {
        key: "getCatArray",
        value: function getCatArray() {
          return this.all_Array;
        }
      }, {
        key: "getsafetyfiltersdata",
        value: function getsafetyfiltersdata() {
          return this.safetyfiltersdata;
        }
      }, {
        key: "setsafetyfiltersdata",
        value: function setsafetyfiltersdata(data) {
          this.safetyfiltersdata = data;
        } //Chat Module apis started**************************************************

      }, {
        key: "startChat",
        value: function startChat(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }, {
        key: "chatsync",
        value: function chatsync(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }, {
        key: "insertChat",
        value: function insertChat(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }, {
        key: "unsyncAdminUser",
        value: function unsyncAdminUser(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }]);

      return SharedService;
    }();

    SharedService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\final backup safecity\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map