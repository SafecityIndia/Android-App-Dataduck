function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myreport-myreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myreport/myreport.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myreport/myreport.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyreportMyreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <div class=\"ion-text-wrap\">{{'incident_shared_by_me' | translate}}</div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <div class=\"notfoundin\" *ngIf=\"incident_list.length == 0\">\n        <p>{{'no_incidents_found' | translate}}</p>\n    </div>\n\n    <div class=\"tips\" *ngIf=\"incident_list.length > 0\">\n\n\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-card *ngFor=\"let item of incident_list\" class=\"newcardin\" tappable (click)=\"report(item)\">\n                    <ion-card-header>\n\n                        <ion-card-title>\n                            <ion-row>\n                                <ion-col size=\"12\">{{item.incidents_categories_show}}</ion-col>\n                            </ion-row>\n                        </ion-card-title>\n\n                    </ion-card-header>\n                    <ion-card-content>\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <div class=\"subheading\">\n                                    <h3>{{item.incidents_area_show}}</h3>\n\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"7\">\n                                <div class=\"subheading\">\n                                    <h4>{{item.getDaysAgo_show}} {{item.show_time}}</h4>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <p>{{item.incident_desc_show}} <span>{{'read_more' | translate}}</span></p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n\n                </ion-card>\n\n                <!-- <ion-card class=\"newcardin\" tappable (click)=\"report()\">\n          <ion-card-header>\n\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">Groping</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3>at Area name</h3>\n\n                </div>\n              </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>1 days ago</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor… <span>Read\n                    more</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card class=\"newcardin\" tappable (click)=\"report()\">\n          <ion-card-header>\n\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">Domestic Violence</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3>at Area name</h3>\n\n                </div>\n              </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>20 Feb 2022 10:09AM</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor… <span>Read\n                    more</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card> -->\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-fab (click)=\"share()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/myreport/myreport-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/myreport/myreport-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyreportPageRoutingModule */

  /***/
  function srcAppMyreportMyreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyreportPageRoutingModule", function () {
      return MyreportPageRoutingModule;
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


    var _myreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myreport.page */
    "./src/app/myreport/myreport.page.ts");

    var routes = [{
      path: '',
      component: _myreport_page__WEBPACK_IMPORTED_MODULE_3__["MyreportPage"]
    }];

    var MyreportPageRoutingModule = function MyreportPageRoutingModule() {
      _classCallCheck(this, MyreportPageRoutingModule);
    };

    MyreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myreport/myreport.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/myreport/myreport.module.ts ***!
    \*********************************************/

  /*! exports provided: MyreportPageModule */

  /***/
  function srcAppMyreportMyreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyreportPageModule", function () {
      return MyreportPageModule;
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


    var _myreport_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myreport-routing.module */
    "./src/app/myreport/myreport-routing.module.ts");
    /* harmony import */


    var _myreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./myreport.page */
    "./src/app/myreport/myreport.page.ts");

    var MyreportPageModule = function MyreportPageModule() {
      _classCallCheck(this, MyreportPageModule);
    };

    MyreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myreport_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyreportPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_myreport_page__WEBPACK_IMPORTED_MODULE_7__["MyreportPage"]]
    })], MyreportPageModule);
    /***/
  },

  /***/
  "./src/app/myreport/myreport.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/myreport/myreport.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyreportMyreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.notfoundin {\n  width: 80%;\n  margin: 0 auto;\n  border-radius: 4px;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notfoundin p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 58%;\n  text-align: center;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 0;\n  padding: 10px 16px;\n}\n\n.subheading {\n  width: 100%;\n  height: auto;\n}\n\n.subheading h3 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.subheading h4 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  background-image: url(/assets/images/icons/dotlight.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 5px 4px;\n  padding-left: 28px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nion-fab-button {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n}\n\n.newfab ion-fab-button {\n  --background: #F5DE5B;\n  --color: #000;\n  --color-activated: #000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n}\n\nion-fab-button ion-icon {\n  width: 1.2em;\n  height: 1.2em;\n  font-weight: 600;\n}\n\n.newarea {\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 45px;\n}\n\n.newcardin {\n  border-radius: 0;\n  box-shadow: none;\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  border-bottom: 1px solid #ddd;\n  margin-top: 22px;\n}\n\n.newcardin ion-card-title {\n  font-size: 16px;\n  color: #592D8D !important;\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n}\n\n.newcardin ion-card-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  font-size: 16px;\n  color: #592D8D !important;\n  padding: 0 0;\n}\n\n.newcardin ion-card-content {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.newcardin p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(152, 145, 145, 0.97);\n  line-height: 18px;\n}\n\n.newcardin span {\n  height: auto;\n  font-size: 14px;\n  color: #000000;\n}\n\n.fab-vertical-bottom {\n  bottom: 105px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlyZXBvcnQvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcbXlyZXBvcnRcXG15cmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlyZXBvcnQvbXlyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUdJLDhDQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbXlyZXBvcnQvbXlyZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5vdGZvdW5kaW4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDQxLCAzMiwgMzIsIDEpO1xyXG59XHJcblxyXG4ubm90Zm91bmRpbiBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDU4JTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICMyRjExNTM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uYmFja2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi50aXBzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc3ViaGVhZGluZyBoMyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzI5MjAyMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGg0IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxufVxyXG5cclxuLm5ld2ZhYiBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMS4yZW07XHJcbiAgICBoZWlnaHQ6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5ld2FyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIHNwYW4ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5mYWItdmVydGljYWwtYm90dG9tIHtcclxuICAgIGJvdHRvbTogMTA1cHg7XHJcbn0iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5vdGZvdW5kaW4ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmMGY4O1xuICBjb2xvcjogIzI5MjAyMDtcbn1cblxuLm5vdGZvdW5kaW4gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNTglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDogNzVweDtcbn1cblxuLnRpcHMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zdWJoZWFkaW5nIGgzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1YmhlYWRpbmcgaDQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xufVxuXG4ubmV3ZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVERTVCO1xuICAtLWNvbG9yOiAjMDAwO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwMDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMDAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xufVxuXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5ld2FyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4ubmV3Y2FyZGluIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLm5ld2NhcmRpbiBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld2NhcmRpbiBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMDtcbn1cblxuLm5ld2NhcmRpbiBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbn1cblxuLm5ld2NhcmRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdjYXJkaW4gc3BhbiB7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZhYi12ZXJ0aWNhbC1ib3R0b20ge1xuICBib3R0b206IDEwNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/myreport/myreport.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/myreport/myreport.page.ts ***!
    \*******************************************/

  /*! exports provided: MyreportPage */

  /***/
  function srcAppMyreportMyreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyreportPage", function () {
      return MyreportPage;
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var MyreportPage = /*#__PURE__*/function () {
      function MyreportPage(navController, translate, sharedservice, router) {
        _classCallCheck(this, MyreportPage);

        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.router = router;
        this.incident_list = [];
      }

      _createClass(MyreportPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getreport();
        }
      }, {
        key: "getreport",
        value: function getreport() {
          var _this = this;

          var data = new FormData(); // data.append('security_key','96df706ef2643e000fe98cc406d1071c04dd8dfa');

          data.append('user_id', localStorage.getItem('userId'));
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.sharedservice.presentLoadingDefault(loadertext);
          this.sharedservice.sharedPostRequest_webappurl('user-reported-incidents', data).subscribe(function (rdata) {
            console.log(rdata);
            _this.incident_list = rdata.data;
            console.log(_this.incident_list);

            for (var i = 0; i < _this.incident_list.length; i++) {
              var incidentdata = data['data'] != null ? data['data'][i] : "";
              console.log(incidentdata);
              var incident_desc = _this.incident_list[i].description != null ? _this.incident_list[i].description : "";
              _this.incident_list[i].incident_desc_show = incident_desc;
              var additional_info = _this.incident_list[i].additional_detail != null ? 'Additional Details : ' + _this.incident_list[i].additional_detail : "";
              _this.incident_list[i].additional_info_show = additional_info; // code changed by sonam - 16-10-2020 start

              var yrs;

              _this.translate.get('yrs').subscribe(function (res) {
                yrs = res;
              });

              var person_age = _this.incident_list[i].age != null ? _this.incident_list[i].age + yrs : "";
              console.log(person_age);
              _this.incident_list[i].person_age_show = person_age; // code changed by sonam - 16-10-2020 end

              var prefer_not_to_say;

              _this.translate.get('prefer_not_to_say').subscribe(function (res) {
                prefer_not_to_say = res;
              });

              var person_gender = _this.incident_list[i].gender != null && _this.incident_list[i].gender != prefer_not_to_say ? _this.incident_list[i].gender : "";
              console.log(person_gender);
              _this.incident_list[i].person_gender_show = person_gender; // code changed by sonam - 16-10-2020 start

              var around;

              _this.translate.get('around').subscribe(function (res) {
                around = res;
              });

              var On;

              _this.translate.get('On').subscribe(function (res) {
                On = res;
              });

              var At;

              _this.translate.get('At').subscribe(function (res) {
                At = res;
              });

              var Between;

              _this.translate.get('Between').subscribe(function (res) {
                Between = res;
              });

              var incidents_date_est = _this.incident_list[i].is_date_estimate != "0" ? around : On;
              _this.incident_list[i].incidents_date_est_show = incidents_date_est;
              var incidents_time_est = _this.incident_list[i].is_time_estimate != "0" ? around : At;
              _this.incident_list[i].incidents_time_est_show = incidents_time_est;
              var incidents_time_est = _this.incident_list[i].time_to != null ? Between : incidents_time_est;
              _this.incident_list[i].incidents_time_est_show = incidents_time_est; // code changed by sonam - 16-10-2020 end
              // code changed by sonam - 20-10-2020 start

              var incidents_date = _this.incident_list[i].created_on != null ? _this.incident_list[i].created_on : "";
              console.log('incidents_date', incidents_date); // var incidents_time_range = this.incident_list[i].time_to != null ? this.timeConvert(this.incident_list[i].time_from) + " - " + this.timeConvert(this.incident_list[i].time_to) : this.timeConvert(this.incident_list[i].time_from);

              var dayBetween = _this.days_between(incidents_date);

              var Today;

              _this.translate.get('Today').subscribe(function (res) {
                Today = res;
              });

              var day_ago;

              _this.translate.get('day_ago').subscribe(function (res) {
                day_ago = res;
              });

              var days_ago;

              _this.translate.get('days_ago').subscribe(function (res) {
                days_ago = res;
              });

              _this.incident_list[i].converttolongdate_show = _this.ConverttoLongDate(incidents_date);
              var incidents_time_range = _this.incident_list[i].time_to != null ? _this.timeConvert(_this.incident_list[i].time_from) + " - " + _this.timeConvert(_this.incident_list[i].time_to) : _this.timeConvert(_this.incident_list[i].time_from);
              console.log(',.,.,.,', incidents_time_range);
              console.log(',.,.,.,', dayBetween);
              var getDaysAgo = dayBetween > 7 ? _this.ChangeDateFormat(incidents_date, 1) + ' ' + incidents_time_range : dayBetween == 0 ? Today : dayBetween == 1 ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago;
              _this.incident_list[i].getDaysAgo_show = getDaysAgo;
              var incidents_time = _this.incident_list[i].time_to != null ? _this.incident_list[i].time_from + " " + to + " " + _this.incident_list[i].time_to : _this.incident_list[i].time_from;

              if (incidents_time) {
                _this.incident_list[i].timeconvert_show = _this.timeConvert(incidents_time);
              }

              _this.incident_list[i].show_time = _this.incident_list[i].timeconvert_show; // code changed by sonam - 20-10-2020 end
              //var incidents_time = incidentdata.time_from != null ? incidentdata.time_from : "";

              var to;

              _this.translate.get('to').subscribe(function (res) {
                to = res;
              });

              var incidents_area = _this.incident_list[i].area != null ? _this.incident_list[i].area : "";
              _this.incident_list[i].incidents_area_show = incidents_area;
              var incidents_city = _this.incident_list[i].city != null ? _this.incident_list[i].city : "";
              _this.incident_list[i].incidents_city_show = incidents_city;
              var incidents_state = _this.incident_list[i].state != null ? _this.incident_list[i].state : "";
              _this.incident_list[i].incidents_state_show = incidents_state;
              var incidents_categories = _this.incident_list[i].categories != null ? _this.incident_list[i].categories : "";
              _this.incident_list[i].incidents_categories_show = incidents_categories;
              var incidentdata_answers = _this.incident_list[i].answers != null ? _this.incident_list[i].answers : "";
              var incidentdata_answers_length = incidentdata_answers.length;

              for (var j = 0; j < incidentdata_answers_length; j++) {
                //console.log("incidentdata_answers");
                var incident_question_tag = incidentdata_answers[j].question_tag != null ? incidentdata_answers[j].question_tag : "";
                var incident_question_answer = incidentdata_answers[j].answer != null ? incidentdata_answers[j].answer : "";
                var incident_question_answer_id = incidentdata_answers[j].answer_id != null ? incidentdata_answers[j].answer_id : "";
                var police_tag = incidentdata_answers[j].answer;
                console.log(police_tag);

                if (incident_question_tag == "attack_reason") {
                  var what_let_to_attck;

                  _this.translate.get('what_let_to_attck').subscribe(function (res) {
                    what_let_to_attck = res;
                  });

                  var attack_reason = what_let_to_attck + incident_question_answer;
                  _this.incident_list[i].attack_reason_show = attack_reason;
                } else if (incident_question_tag == "who_was_perpetrator") {
                  var perpetrator_info = incident_question_answer;
                  console.log('perpetrator_info', perpetrator_info);
                  _this.incident_list[i].perpetrator_info_show = perpetrator_info;
                } else if (incident_question_tag == "medical_help") {
                  var medical_help_received;

                  _this.translate.get('medical_help_received').subscribe(function (res) {
                    medical_help_received = res;
                  });

                  var medical_hlp_noy_rcvd;

                  _this.translate.get('medical_hlp_noy_rcvd').subscribe(function (res) {
                    medical_hlp_noy_rcvd = res;
                  });

                  var medical_help_desc = incident_question_answer_id == 28 ? medical_help_received : medical_hlp_noy_rcvd;
                  console.log('*******', medical_help_desc);
                  console.log('*******', incident_question_answer_id);
                  console.log('*******', medical_help_received);
                  console.log('*******', medical_hlp_noy_rcvd);
                  var medical_help = medical_help_desc;
                  _this.incident_list[i].medical_help_show = medical_help;
                } else if (incident_question_tag == "reported_to_police") {
                  // code change by sonam - 16-10-2020 start
                  var incident_other_answer;

                  if (incidentdata_answers[j].other_answers.length != 2) {
                    incident_other_answer = JSON.parse(incidentdata_answers[j].other_answers)['incident_question_answer_id'] != null ? JSON.parse(incidentdata_answers[j].other_answers)['incident_question_answer_id'] : "";
                  }

                  var policeHtml = '<img src="assets/images/map-police.svg" class="img-fluid"> ';
                  var reported_to_police = '';
                  console.log(police_tag);

                  if (police_tag == "Yes I did") {
                    reported_to_police = ' Police report filed.';
                    var police_Report_filed;

                    _this.translate.get('police_Report_filed').subscribe(function (res) {
                      police_Report_filed = res;
                    });

                    _this.incident_list[i].reported_to_police_show = police_Report_filed;
                  } else if (police_tag == "No") {
                    reported_to_police = ' Police report not filed.';
                    var police_reprt_not_filed;

                    _this.translate.get('police_reprt_not_filed').subscribe(function (res) {
                      police_reprt_not_filed = res;
                    });

                    _this.incident_list[i].reported_to_police_show = police_reprt_not_filed;
                  } else if (police_tag == "I tried") {
                    var tried_to_filed;

                    _this.translate.get('tried_to_filed').subscribe(function (res) {
                      tried_to_filed = res;
                    });

                    reported_to_police = tried_to_filed + ' ' + incident_other_answer;
                    _this.incident_list[i].reported_to_police_show = reported_to_police;
                  } else if (police_tag == "I will, in the future") {
                    reported_to_police = ' Intend to file police report.';
                    var intent_to_filed;

                    _this.translate.get('intent_to_filed').subscribe(function (res) {
                      intent_to_filed = res;
                    });

                    _this.incident_list[i].reported_to_police_show = intent_to_filed;
                  } else if (police_tag == "I’m not sure if I want to") {
                    reported_to_police = ' Not sure about filing police report.';
                    var not_sure;

                    _this.translate.get('not_sure').subscribe(function (res) {
                      not_sure = res;
                    });

                    _this.incident_list[i].reported_to_police_show = not_sure;
                  } else {
                    reported_to_police = '';
                    _this.incident_list[i].reported_to_police_show = reported_to_police;
                  } // code change by sonam - 16-10-2020 end

                }
              } // latlong[i] = {"city":incidents_city, "area":incidents_area, "latitude":incidentdata.latitude, "longitude":incidentdata.longitude, "categories":incidents_categories, "dateTime":incidents_time};
              // elementHtml += `
              //     <!-- Short Desc Start -->
              //     <div class="text shortDesc " data-id="${i}">
              //       <div class="incident-title">${incidents_categories}</div>
              //       <div class="place-time">
              //         at ${incidents_area} <span class="sepration">.</span> ${getDaysAgo}
              //       </div>
              //       <div class="text1">
              //         <span class="ellipsis">${incident_desc}</span>
              //         <span>
              //           <button class="themeColor toggleThis readbtn mb-3 ml-1" id="readbtn_${i}" data-id="${i}">Read More</button>
              //         </span>
              //       </div>
              //     </div>
              //     <!-- Short Desc End -->
              //     <!-- Long Desc Start -->
              //     <div class="longDesc" id="longDesc_${i}" data-id="${i}">
              //       <button class="toggleUp shwobtn" id="toggleUp_${i}" data-id="${i}">
              //         <img src="assets/images/icon-feather-arrow-left.svg" class="img-fluid leftIcon">
              //       </button>
              //       <div class="incident-title">${incidents_categories}</div>
              //       <label>
              //         <span class="age">${person_age}</span>
              //         ${person_gender}
              //       </label>
              //       <p>${incident_desc}</p><br>
              //       ${perpetrator_info}<br>
              //       ${attack_reason}<br>
              //       ${additional_info}<br>
              //       <div class="otherDetails">
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="location">
              //                 ${reported_to_police}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="location">
              //                 ${medical_help}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="location">
              //               <img src="assets/images/location.svg" class="img-fluid">
              //               ${incidents_area},${incidents_city}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="iDate">
              //               <img src="assets/images/calendar-date-of-incident.svg" class="img-fluid">
              //               ${incidents_date_est} ${ConverttoLongDate(incidents_date)}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="iTime">
              //               <img src="assets/images/time-of-incident.svg" class="img-fluid"> ${incidents_time_est} ${timeConvert(incidents_time)}
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //     <!-- Long Desc End -->
              // `;

            }

            console.log(_this.incident_list);
          }, function (error) {
            _this.sharedservice.loaderDismiss();
          }, function () {
            _this.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "share",
        value: function share() {
          this.navController.navigateForward("/preframingtwo");
        } //   report() {
        // this.navController.navigateForward(`/myviewreport`);
        //   }

      }, {
        key: "report",
        value: function report(item) {
          console.log(item);
          var navigationExtras = {
            state: {
              data: item
            }
          };
          this.router.navigate(['/myviewreport'], navigationExtras); //this.navController.navigateForward(`/myviewreport`);
        }
      }, {
        key: "ChangeDateFormat",
        value: function ChangeDateFormat(date, val) {
          // var dayDate = new Date(date);
          // var date1: any
          var dayDate = new Date(date.replace(/ /g, "T"));
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = monthNames[dayDate.getMonth()];
          var monthVal = val == 1 ? monthName.substr(0, 3) : monthName;
          var getDate = dayDate.getDate();
          var getYear = dayDate.getFullYear();
          var format_date = getDate + " " + monthVal + " " + getYear;
          console.log('****', format_date);
          return format_date;
        }
      }, {
        key: "ConverttoLongDate",
        value: function ConverttoLongDate(date) {
          // var dayDate = new Date(date);
          var dayDate = new Date(date.replace(/ /g, "T"));
          var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var mainDate = weekday[dayDate.getDay()];
          var dateFormat = this.ChangeDateFormat(date, 0);
          var format_date = mainDate + ", " + dateFormat;
          return format_date;
        }
      }, {
        key: "days_between",
        value: function days_between(date) {
          // The number of milliseconds in one day
          console.log(date);
          var date1; //  date1 = new Date(date);

          date1 = new Date(date.replace(/ /g, "T"));
          console.log(date1);
          var todays_date;
          todays_date = new Date();
          console.log(todays_date);
          var ONE_DAY = 1000 * 60 * 60 * 24; // Calculate the difference in milliseconds

          var differenceMs = Math.abs(todays_date - date1);
          console.log(differenceMs);
          var daydiff = Math.round(differenceMs / ONE_DAY);
          console.log(daydiff);
          return daydiff; // return 0
          // Convert back to days and return

          /*if (daydiff >= 0 && daydiff <= 30) {
            // return daydiff + " Days ago";
            return daydiff;
          }
          else {
            return date;
          }*/
        }
      }, {
        key: "timeConvert",
        value: function timeConvert(time) {
          // Check correct time format and split into components
          // time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
          // if (time.length > 1) { // If time format correct
          //   time = time.slice(1);  // Remove full string match value
          //   time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          //   time[0] = +time[0] % 12 || 12; // Adjust hours
          //   var time_array =[]
          //   time_array.push(time[0])
          //   time_array.push(time[1])
          //   time_array.push(time[2])
          //   time_array.push(time[5])
          //  }
          var time_split = time.split(':');
          console.log(time_split);

          if (time_split[0].charAt(0) == '0') {
            var t = time_split[0].slice(1);
            time_split[0] = t;
            console.log(time_split[0]);
          }

          if (time_split[1].charAt(0) == '0') {
            var t = time_split[1].slice(1);
            time_split[1] = t;
            console.log(time_split[1]);
          }

          var hour = JSON.parse(time_split[0]);
          var minute = JSON.parse(time_split[1]);
          console.log(hour);
          console.log(minute);
          var hours = hour > 12 ? hour - 12 : hour;
          var am_pm = hour >= 12 ? "PM" : "AM";
          var minutes = minute < 10 ? "0" + minute : minute;
          var timeStart = hours + ":" + minutes + " " + am_pm;
          return timeStart; // return adjusted time or original string
        }
      }]);

      return MyreportPage;
    }();

    MyreportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MyreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myreport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./myreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myreport/myreport.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./myreport.page.scss */
      "./src/app/myreport/myreport.page.scss"))["default"]]
    })], MyreportPage);
    /***/
  }
}]);
//# sourceMappingURL=myreport-myreport-module-es5.js.map