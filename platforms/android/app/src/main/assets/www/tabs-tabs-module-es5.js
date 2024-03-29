function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\" >\n      <ion-icon class=\"home\" ></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"tab2\"> -->\n      <!-- <ion-icon class=\"hospital\" ></ion-icon> -->\n      <!-- <ion-label>Hospitals</ion-label> -->\n    <!-- </ion-tab-button> -->\n    <ion-tab-button tab=\"help\">\n   \n    </ion-tab-button>\n    <!-- <ion-tab-button tab=\"tab3\"> -->\n      <!-- <ion-icon  class=\"policestation\"></ion-icon> -->\n      <!-- <ion-label>Police Stations</ion-label> -->\n    <!-- </ion-tab-button> -->\n\t <ion-tab-button tab=\"menu\">\n      <ion-icon class=\"menu\"></ion-icon>\n      <ion-label>Menu</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n  \n</ion-tabs>\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"  (click)=\"help()\">\n    <ion-fab-button>\n        <img src=\"assets/images/icons/help.svg\"/>\n    </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'help',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | help-help-module */
          "help-help-module").then(__webpack_require__.bind(null,
          /*! ../help/help.module */
          "./src/app/help/help.module.ts")).then(function (m) {
            return m.HelpPageModule;
          });
        }
      }, {
        path: 'menu',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-menu-module */
          "menu-menu-module").then(__webpack_require__.bind(null,
          /*! ../menu/menu.module */
          "./src/app/menu/menu.module.ts")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabs-ios a[aria-selected=false] span {\n  color: #778391;\n}\n.tabs-ios a[aria-selected=false] .tab-button-icon[aria-label=home] {\n  background-image: url(/assets/images/icons/home.svg);\n}\n.tabs-ios a[aria-selected=true] span {\n  color: #ed4046;\n}\n.tabs-ios a[aria-selected=true] .tab-button-icon[aria-label=home] {\n  background-image: url(/assets/images/icons/homeactive.svg);\n}\nion-tab-button .home {\n  background-image: url(/assets/images/icons/home.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .home {\n  background-image: url(/assets/images/icons/home_active.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .home {\n  background-image: url(/assets/images/icons/home.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .home {\n  background-image: url(/assets/images/icons/home_active.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .hospital {\n  background-image: url(/assets/images/icons/hospital.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .help {\n  background-image: url(/assets/images/icons/help.svg);\n  width: 51px;\n  height: 51px;\n  background-size: contain;\n  margin-top: 5px;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .hospital {\n  background-image: url(/assets/images/icons/hospital_active.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n:focus {\n  outline: -webkit-focus-ring-color auto 0;\n}\nion-tab-button .policestation {\n  background-image: url(/assets/images/icons/police.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .policestation {\n  background-image: url(/assets/images/icons/police_active.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .menu {\n  background-image: url(/assets/images/icons/menu.svg);\n  width: 35px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .menu {\n  background-image: url(/assets/images/icons/menu_active.svg);\n  width: 35px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.fab-vertical-bottom {\n  bottom: 5px;\n}\nion-fab-button {\n  width: 60px;\n  height: 60px;\n  border: none;\n  --background: transparent;\n  --color: #D90D0D;\n  font-weight: 600;\n  border-radius: 250px;\n  --box-shadow:none;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-fab-button img {\n  width: 100%;\n  --box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  margin-top: 10px;\n}\nion-tab-bar {\n  height: 65px;\n  padding: 0 10px;\n  --border:none;\n  box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n.tab-has-label ion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNPLGNBQUE7QUNBVDtBRENRO0VBQ0Usb0RBQUE7QUNDVjtBRE9RO0VBQ0UsY0FBQTtBQ0xWO0FET007RUFDSSwwREFBQTtBQ0xWO0FEWUU7RUFFQSxvREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ1ZKO0FEYUU7RUFFQSwyREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ1hKO0FEY0U7RUFFQSxvREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ1pKO0FEZUU7RUFFQSwyREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ2JKO0FEZ0JHO0VBRUQsd0RBQUE7RUFDRCxXQUFBO0VBQ0csWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNkSjtBRGtCRztFQUVELG9EQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNKLGVBQUE7RUFDSSw0QkFBQTtBQ2hCSjtBRG1CRTtFQUVBLCtEQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDakJKO0FEcUJBO0VBQ0ksd0NBQUE7QUNsQko7QURxQkM7RUFFQyxzREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ25CSjtBRHNCRTtFQUVBLDZEQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDcEJKO0FEdUJDO0VBRUMsb0RBQUE7RUFDRCxXQUFBO0VBQ0csWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNyQko7QUR3QkU7RUFFQSwyREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ3RCSjtBRHlCQztFQUVBLFdBQUE7QUN2QkQ7QUQwQkM7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDRyx5QkFBQTtFQUNILGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRyxvQkFBQTtFQUNILGlCQUFBO0VBQ0ksbUNBQUE7RUFDRCxpQ0FBQTtFQUNBLCtCQUFBO0FDeEJKO0FENEJDO0VBRUEsV0FBQTtFQUNBLG1IQUFBO0VBQ0EsZ0JBQUE7QUMxQkQ7QUQ2QkU7RUFFQSxZQUFBO0VBQ0YsZUFBQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtBQzNCRjtBRDhCQztFQUVELGVBQUE7RUFDQSxnQkFBQTtBQzVCQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnRhYnMtaW9zIHthW2FyaWEtc2VsZWN0ZWQ9ZmFsc2Vde1xuXHRcdHNwYW4ge1xuICAgICAgICAgY29sb3I6ICM3NzgzOTE7fVxuICAgICAgICAudGFiLWJ1dHRvbi1pY29uW2FyaWEtbGFiZWw9XCJob21lXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZS5zdmcpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgXG5cdFx0XG4gICAgICB9XG4gICAgIGFbYXJpYS1zZWxlY3RlZD10cnVlXSB7XG4gICAgICAgLy9mw7xociBldmVudHVlbGxlbiB0ZXh0XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZWQ0MDQ2OyAvL3doYXRldmVyIGNvbG91ciB5b3Ugd2FudCB0byB1c2UgZm9yIHRoZSB0ZXh0XG4gICAgICAgIH1cbiAgICAgIC50YWItYnV0dG9uLWljb25bYXJpYS1sYWJlbD1ob21lXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWVhY3RpdmUuc3ZnKTtcbiAgICAgICAgfVxuICAgICAgXG5cdFx0XG4gICAgICB9XG4gICAgfVxuXHRcblx0IGlvbi10YWItYnV0dG9uIC5ob21lXG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZS5zdmcpO1xuXHR3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdCB9XG5cdCBcblx0IGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCAuaG9tZVxuXHQge1xuXHQgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWVfYWN0aXZlLnN2Zyk7XG5cdHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblx0IFxuXHQgaW9uLXRhYi1idXR0b24gLmhvbWVcblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lLnN2Zyk7XG5cdHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblx0IFxuXHQgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5ob21lXG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZV9hY3RpdmUuc3ZnKTtcblx0d2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgfVxuXHQgXG5cdCAgaW9uLXRhYi1idXR0b24gLmhvc3BpdGFsXG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9zcGl0YWwuc3ZnKTtcblx0d2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcblx0IH1cblx0IFxuXHQgIGlvbi10YWItYnV0dG9uIC5oZWxwXG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaGVscC5zdmcpO1xuXHR3aWR0aDogNTFweDtcbiAgICBoZWlnaHQ6IDUxcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xubWFyZ2luLXRvcDo1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblx0IFxuXHQgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5ob3NwaXRhbFxuXHQge1xuXHQgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvc3BpdGFsX2FjdGl2ZS5zdmcpO1xuXHR3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdCB9XG5cblxuOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAwO1xufVxuXG4gaW9uLXRhYi1idXR0b24gLnBvbGljZXN0YXRpb25cblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9wb2xpY2Uuc3ZnKTtcblx0d2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgfVxuXHQgXG5cdCBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLnBvbGljZXN0YXRpb25cblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9wb2xpY2VfYWN0aXZlLnN2Zyk7XG5cdHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDt9XG5cblxuIGlvbi10YWItYnV0dG9uIC5tZW51XG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudS5zdmcpO1xuXHR3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdCB9XG5cdCBcblx0IGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCAubWVudVxuXHQge1xuXHQgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnVfYWN0aXZlLnN2Zyk7XG5cdHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblx0IFxuXHQuZmFiLXZlcnRpY2FsLWJvdHRvbVxuXHR7XG5cdGJvdHRvbTo1cHg7XG5cdH1cblx0XG5cdGlvbi1mYWItYnV0dG9uXG5cdHtcblx0d2lkdGg6NjBweDtcblx0aGVpZ2h0OjYwcHg7XG5cdGJvcmRlcjpub25lO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdC0tY29sb3I6ICNEOTBEMEQ7XG5cdGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNTBweDtcblx0LS1ib3gtc2hhZG93Om5vbmU7XG5cdCAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcblxuXHR9XG5cdFxuXHRpb24tZmFiLWJ1dHRvbiBpbWdcblx0e1xuXHR3aWR0aDoxMDAlO1xuXHQtLWJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXHRtYXJnaW4tdG9wOjEwcHg7XG5cdH1cblx0IFxuXHQgaW9uLXRhYi1iYXJcblx0IHtcblx0IGhlaWdodDo2NXB4O1xucGFkZGluZzowIDEwcHg7XG5cdCAtLWJvcmRlcjpub25lO1xuXHQgYm94LXNoYWRvdzogMHB4IC01cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG5cdCB9XG5cbiAudGFiLWhhcy1sYWJlbCBpb24tbGFiZWxcbntcbmZvbnQtc2l6ZToxMnB4O1xuZm9udC13ZWlnaHQ6NTAwO1xufVxuIiwiLnRhYnMtaW9zIGFbYXJpYS1zZWxlY3RlZD1mYWxzZV0gc3BhbiB7XG4gIGNvbG9yOiAjNzc4MzkxO1xufVxuLnRhYnMtaW9zIGFbYXJpYS1zZWxlY3RlZD1mYWxzZV0gLnRhYi1idXR0b24taWNvblthcmlhLWxhYmVsPWhvbWVdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWUuc3ZnKTtcbn1cbi50YWJzLWlvcyBhW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0gc3BhbiB7XG4gIGNvbG9yOiAjZWQ0MDQ2O1xufVxuLnRhYnMtaW9zIGFbYXJpYS1zZWxlY3RlZD10cnVlXSAudGFiLWJ1dHRvbi1pY29uW2FyaWEtbGFiZWw9aG9tZV0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZWFjdGl2ZS5zdmcpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiAuaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lLnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5ob21lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWVfYWN0aXZlLnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24gLmhvbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZS5zdmcpO1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCAuaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lX2FjdGl2ZS5zdmcpO1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmlvbi10YWItYnV0dG9uIC5ob3NwaXRhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob3NwaXRhbC5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmlvbi10YWItYnV0dG9uIC5oZWxwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hlbHAuc3ZnKTtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNTFweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCAuaG9zcGl0YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9zcGl0YWxfYWN0aXZlLnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMDtcbn1cblxuaW9uLXRhYi1idXR0b24gLnBvbGljZXN0YXRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcG9saWNlLnN2Zyk7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5wb2xpY2VzdGF0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3BvbGljZV9hY3RpdmUuc3ZnKTtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tdGFiLWJ1dHRvbiAubWVudSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LnN2Zyk7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5tZW51IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnVfYWN0aXZlLnN2Zyk7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZhYi12ZXJ0aWNhbC1ib3R0b20ge1xuICBib3R0b206IDVweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICNEOTBEMEQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1MHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZhYi1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIC0tYm9yZGVyOm5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGFiLWhhcy1sYWJlbCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(navController, router) {
        _classCallCheck(this, TabsPage);

        this.navController = navController;
        this.router = router;
      }

      _createClass(TabsPage, [{
        key: "help",
        value: function help() {
          this.navController.navigateForward("/help");
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map