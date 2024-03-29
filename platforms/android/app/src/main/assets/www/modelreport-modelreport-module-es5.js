function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modelreport-modelreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modelreport/modelreport.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modelreport/modelreport.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModelreportModelreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home' icon=\"undefined\" text=\"\" class=\"backbutton\">\n      </ion-back-button>\n    </ion-buttons> -->\n\n        <ion-buttons slot=\"start\" (click)=\"dismiss()\">\n            <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\" />\n        </ion-buttons>\n\n        <div class=\"newsidetext\" slot=\"end\" (click)=\"help()\">\n            <p>{{'help_menu' | translate}}</p>\n        </div>\n\n        <ion-buttons slot=\"end\" class=\"newmenu\" (click)=\"menu()\">\n            <img src=\"assets/images/icons/menunew.svg\" />\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!-- <div class=\"toparrow\" *ngIf = \"showFull != 'true'\" (click)=\"newmodalin()\">\n<ion-icon name=\"chevron-up-outline\"></ion-icon>\n</div> -->\n    <div class=\"mainseg\">\n        <div class=\"segmentin\">\n            <ion-segment mode=\"ios\" value=\"one\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"one\">\n                    <ion-label>{{'incidents'| translate}}</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"two\">\n                    <ion-label>{{'safety_tips' | translate }}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <div *ngIf=\"segmentModel === 'one'\">\n            <ion-card class=\"newcard\" (click)=\"preframing()\">\n                <ion-card-content>\n                    <p>{{'incident_detail_msg' | translate}}</p>\n                    <h5>{{'incident_button' | translate}}</h5>\n                </ion-card-content>\n            </ion-card>\n            <div class=\"newitemone\">\n                <h2>{{'incident_shared_community' | translate}}</h2>\n                <ion-chip fill=\"outline\" (click)=\"filter()\">\n                    <ion-label>{{'home_all_filters' | translate}} <span *ngIf=\"incidentNumber\">{{filterCount}}</span></ion-label>\n                </ion-chip>\n\n                <div class=\"clear\" (click)=\"clearList('incident')\">\n                    {{'button_clear' | translate }}\n                </div>\n\n\n\n                <ion-card *ngFor=\"let item of incidentList\" class=\"newcardin\" tappable (click)=\"viewreport(item)\">\n                    <ion-card-header *ngIf=\"incidentList.length > 0\">\n\n                        <ion-card-title>\n                            <ion-row>\n                                <ion-col size=\"12\">{{item.categories}}</ion-col>\n                            </ion-row>\n                        </ion-card-title>\n\n                    </ion-card-header>\n                    <ion-card-content *ngIf=\"incidentList.length > 0\">\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <div class=\"subheading\">\n                                    <h3>{{'At' | translate}} {{item.area}}</h3>\n\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"7\">\n                                <div class=\"subheading\">\n                                    <h4>{{item.show_date}} {{item.show_time}}</h4>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <p>{{item.show_disc}}...<span>{{'read_more' | translate}}</span></p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n\n                </ion-card>\n                <div class=\"notfoundin\" *ngIf=\"incidentList.length == 0 && segmentModel === 'one'\">\n                    <p>{{'incident_no_data' | translate}} </p>\n                </div>\n                <!-- <div class=\"notviewincidents\" >\n          <p>To view incidents reported before 01 Dec 2020, <a href=\"https://public.tableau.com/profile/mehul.sharma3900#!/vizhome/Safecity_Dashboard_Delhi_final/MumbaiStory\" target=\"_blank\">click here</a></p>\n        </div> -->\n                <ion-fab (click)=\"preframing()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n                    <ion-fab-button>\n                        <ion-icon name=\"add\"></ion-icon>\n                    </ion-fab-button>\n                </ion-fab>\n                <div class=\"pagination\" *ngIf=\"incidentList.length > 0\">\n                    <div class=\"textpage\">\n                        <p>{{showing}}</p>\n                        <!-- <p>Showing</p><p>1</p><p>-</p><p>20</p><p>0f</p><p>300</p> -->\n                    </div>\n                    <div class=\"textpage\">\n                        <ion-button class=\"arrowbtn\" (click)=\"previousforward('previous')\" [disabled]=\"hide_back\">\n                            <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                        </ion-button>\n                        <ion-button class=\"arrowbtn\" [disabled]=\"forwardincidentdisabled\" (click)=\"previousforward('forward')\">\n                            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- <ion-button class=\"newsafe\" shape=\"round\" expand=\"full\" (click)=\"preframing()\">Share Incident anonymously\n      </ion-button> -->\n        </div>\n\n        <div *ngIf=\"segmentModel === 'two'\">\n            <ion-card class=\"newcard\" (click)=\"safetytip()\">\n                <ion-card-content>\n                    <p>{{'short_safety_msg' | translate}}</p>\n                    <h5>{{'safety_button' | translate}}</h5>\n                </ion-card-content>\n            </ion-card>\n            <div class=\"newitemone\">\n                <h2>{{'safety_shared_community' | translate}}</h2>\n                <ion-chip fill=\"outline\" (click)=\"safteyfilter()\">\n                    <ion-label>{{'home_all_filters' | translate}}<span *ngIf=\"number\">1</span></ion-label>\n                </ion-chip>\n                <div class=\"clear\" (click)='clearList(safetytip)'>\n                    {{'button_clear' | translate }}\n                </div>\n                <ion-card class=\"newcardin\" *ngFor=\"let item of safetyTipList\" tappable (click)=\"viewsafety(item)\">\n                    <ion-card-header *ngIf=\"safetyTipList.length > 0\">\n                        <ion-card-title>\n                            <ion-row>\n                                <ion-col size=\"12\">{{item.safety_tip_title}}</ion-col>\n                            </ion-row>\n                        </ion-card-title>\n\n                    </ion-card-header>\n                    <ion-card-content *ngIf=\"safetyTipList.length > 0\">\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <div class=\"subheading\">\n                                    <h3>{{'At' | translate}} {{item.city}}</h3>\n\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"7\">\n                                <div class=\"subheading\">\n                                    <h4>{{item.show_date}} {{item.show_time}}</h4>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <p>{{item.show_disc}}…<span>{{'read_more' | translate}}</span></p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n\n                </ion-card>\n                <div class=\"notfoundin\" *ngIf=\"safetyTipList.length == 0 && segmentModel === 'two'\">\n                    <p>{{'safety_tip_no_data' | translate}}</p>\n                </div>\n\n            </div>\n            <ion-fab vertical=\"bottom\" class=\"newfab\" (click)=\"safetytip()\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button>\n                    <ion-icon name=\"add\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n            <div class=\"pagination\" *ngIf=\"safetyTipList.length > 0\">\n                <div class=\"textpage\">\n                    <p>{{safetyShowing}}</p>\n                    <!-- <p>Showing</p><p>1</p><p>-</p><p>20</p><p>0f</p><p>300</p> -->\n                </div>\n                <div class=\"textpage\">\n                    <ion-button class=\"arrowbtn\" [disabled]=\"hide_safety_back\" (click)=\"previousforwardsafety('previous')\">\n                        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button class=\"arrowbtn\" [disabled]=\"forwardsafetydisabled\" (click)=\"previousforwardsafety('forward')\">\n                        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                    </ion-button>\n                </div>\n            </div>\n            <!-- <ion-button class=\"newsafein\" shape=\"round\" expand=\"full\" (click)=\"safetytip()\">Share safety tipy anonymously\n      </ion-button> -->\n        </div>\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/modelreport/modelreport-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modelreport/modelreport-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ModelreportPageRoutingModule */

  /***/
  function srcAppModelreportModelreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelreportPageRoutingModule", function () {
      return ModelreportPageRoutingModule;
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


    var _modelreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modelreport.page */
    "./src/app/modelreport/modelreport.page.ts");

    var routes = [{
      path: '',
      component: _modelreport_page__WEBPACK_IMPORTED_MODULE_3__["ModelreportPage"]
    }];

    var ModelreportPageRoutingModule = function ModelreportPageRoutingModule() {
      _classCallCheck(this, ModelreportPageRoutingModule);
    };

    ModelreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModelreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modelreport/modelreport.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modelreport/modelreport.module.ts ***!
    \***************************************************/

  /*! exports provided: ModelreportPageModule */

  /***/
  function srcAppModelreportModelreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelreportPageModule", function () {
      return ModelreportPageModule;
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


    var _modelreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modelreport-routing.module */
    "./src/app/modelreport/modelreport-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _modelreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modelreport.page */
    "./src/app/modelreport/modelreport.page.ts");

    var ModelreportPageModule = function ModelreportPageModule() {
      _classCallCheck(this, ModelreportPageModule);
    };

    ModelreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _modelreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModelreportPageRoutingModule"]],
      declarations: [_modelreport_page__WEBPACK_IMPORTED_MODULE_7__["ModelreportPage"]]
    })], ModelreportPageModule);
    /***/
  },

  /***/
  "./src/app/modelreport/modelreport.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/modelreport/modelreport.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModelreportModelreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".segment-button-checked {\n  --indicator-color: #592D8D;\n  color: #fff;\n  --border-radius: 4px;\n  background: #592D8D;\n}\n\n.pagination {\n  height: auto;\n  z-index: 999;\n  float: right;\n  text-align: right;\n  margin-bottom: 25px;\n}\n\n.textpage {\n  height: auto;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.arrowbtn {\n  --background: #fff;\n  --background-activated: #fff;\n  --background-focused: #fff;\n  --background-hover: #fff;\n  --padding-start: 0.4em;\n  height: 25px;\n  --border-radius: 0;\n  --padding-end: 0.6em;\n  color: rgba(152, 145, 145, 0.97);\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.notviewincidents {\n  width: 100%;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notviewincidents p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.notviewincidents a {\n  font-size: 16px;\n  color: #592D8D;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.notfoundin {\n  width: 100%;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notfoundin p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.textpage p {\n  display: flex;\n  margin: 0;\n  color: rgba(152, 145, 145, 0.97);\n  padding-right: 8px;\n}\n\nion-segment-button {\n  background: #EBE2F5;\n  min-height: 35px;\n  font-size: 16px;\n  --border-radius: 5px;\n  font-weight: 400;\n  margin-top: 0;\n}\n\n.mainseg {\n  width: 100%;\n  height: auto;\n  padding: 10px 16px;\n  margin-top: 0px;\n}\n\n.toparrow {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #C5C5C5;\n  font-size: 28px;\n  position: fixed;\n  z-index: 999;\n  background: #fff;\n  padding: 0px 0 0 0;\n}\n\n.toparrow ion-icon {\n  margin-top: 5px;\n}\n\n.newcard {\n  width: 100%;\n  height: auto;\n  background: #F8F4FD;\n  --border-radius: 4px;\n  box-shadow: none;\n  margin-top: 78px;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.newcard p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: #220E0E;\n  line-height: 18px;\n}\n\n.newcard h5 {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 500;\n  color: #592D8D !important;\n  margin-top: 10px;\n  line-height: 18px;\n}\n\n.newitemone {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.newitemone h2 {\n  width: 100%;\n  height: auto;\n  color: #2F1153;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.newcardin {\n  border-radius: 0;\n  box-shadow: none;\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  border-bottom: 1px solid #ddd;\n  margin-top: 22px;\n}\n\n.newcardin ion-card-title {\n  font-size: 16px;\n  color: #592D8D !important;\n  width: 100%;\n  height: auto;\n}\n\n.newcardin ion-card-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  font-size: 16px;\n  color: #592D8D !important;\n  padding: 0 0;\n}\n\n.segmentin {\n  width: auto;\n  position: fixed;\n  background: #fff;\n  z-index: 99;\n  padding: 20px;\n  left: 0;\n  right: 0;\n}\n\n.newcardin ion-card-content {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.newcardin p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(152, 145, 145, 0.97);\n  line-height: 18px;\n}\n\n.newcardin span {\n  height: auto;\n  font-size: 14px;\n  color: #000000;\n}\n\n.newcard p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n  line-height: 18px;\n}\n\n.newitemone ion-chip {\n  background: transparent;\n  border: 1px solid #592D8D;\n  height: 35px;\n  color: #592D8D;\n  font-size: 16px;\n  line-height: 35px;\n  padding: 0 19px;\n  border-radius: 18px;\n}\n\n.newitemone ion-chip span {\n  width: 18px;\n  height: 18px;\n  border-radius: 250px;\n  background: #592D8D;\n  color: #fff;\n  font-size: 11px;\n  display: inline-block;\n  line-height: 18px;\n  text-align: center;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n\n.clear {\n  display: inline-block;\n  color: #D90D0D;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-left: 15px;\n  padding: 20px;\n}\n\n.subheading {\n  width: 100%;\n  height: auto;\n}\n\n.subheading h3 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.subheading h4 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  background-image: url(/assets/images/icons/dotlight.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 5px 4px;\n  padding-left: 28px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nion-segment-button {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 16px;\n  padding-right: 25px;\n}\n\n.newmenu {\n  padding-right: 12px;\n}\n\nheader-md ion-title {\n  text-align: left;\n}\n\n.header-ios ion-title {\n  text-align: left;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n  z-index: 9999;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 16px;\n  padding-right: 25px;\n}\n\nion-title {\n  padding: 0px 20px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.subheading img {\n  width: 8px;\n}\n\n.newsafe {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  top: 67%;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 75%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow: 0;\n  text-align: center;\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  right: 0;\n}\n\n.newsafein {\n  color: #000 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #F5DE5B;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 75%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow: 0;\n  text-align: center;\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  top: 67%;\n}\n\nion-fab-button {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n}\n\n.newfab ion-fab-button {\n  --background: #F5DE5B;\n  --color: #000;\n  --color-activated: #000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n}\n\nion-fab-button ion-icon {\n  width: 1.2em;\n  height: 1.2em;\n  font-weight: 600;\n}\n\n.fab-vertical-bottom {\n  bottom: 115px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxyZXBvcnQvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcbW9kZWxyZXBvcnRcXG1vZGVscmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kZWxyZXBvcnQvbW9kZWxyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUhBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUdJLDhDQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZGVscmVwb3J0L21vZGVscmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjNTkyRDhEO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnRleHRwYWdlIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFycm93YnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMC40ZW07XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjZlbTtcclxuICAgIGNvbG9yOiByZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5ub3R2aWV3aW5jaWRlbnRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDQxLCAzMiwgMzIsIDEpO1xyXG59XHJcblxyXG4ubm90dmlld2luY2lkZW50cyBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5vdHZpZXdpbmNpZGVudHMgYSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzU5MkQ4RDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZGluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDQxLCAzMiwgMzIsIDEpO1xyXG59XHJcblxyXG4ubm90Zm91bmRpbiBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRleHRwYWdlIHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogI0VCRTJGNTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ubWFpbnNlZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnRvcGFycm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwO1xyXG4gICAgY29sb3I6ICNDNUM1QzU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDAgMCAwO1xyXG59XHJcblxyXG4udG9wYXJyb3cgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNGOEY0RkQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA3OHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG59XHJcblxyXG4ubmV3Y2FyZCBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMjIwRTBFO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5uZXdjYXJkIGg1IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5uZXdpdGVtb25lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uZXdpdGVtb25lIGgyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICMyRjExNTM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbn1cclxuXHJcbi5zZWdtZW50aW4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIHNwYW4ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLm5ld2l0ZW1vbmUgaW9uLWNoaXAge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTkyRDhEO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICM1OTJEOEQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDAgMTlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbn1cclxuXHJcbi5uZXdpdGVtb25lIGlvbi1jaGlwIHNwYW4ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jbGVhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI0Q5MEQwRDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc3ViaGVhZGluZyBoMyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzI5MjAyMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGg0IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmJhY2tidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5uZXdzaWRldGV4dCBwIHtcclxuICAgIGNvbG9yOiAjRDkwRDBEO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm5ld21lbnUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxufVxyXG5cclxuaGVhZGVyLW1kIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuLm5ld3NpZGV0ZXh0IHAge1xyXG4gICAgY29sb3I6ICNEOTBEMEQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uc3ViaGVhZGluZyBpbWcge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuLm5ld3NhZmUge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdG9wOiA2NyU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3c2FmZWluIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAtLWJveC1zaGFkb3c6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDY3JTtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxufVxyXG5cclxuLm5ld2ZhYiBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMS4yZW07XHJcbiAgICBoZWlnaHQ6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZhYi12ZXJ0aWNhbC1ib3R0b20ge1xyXG4gICAgYm90dG9tOiAxMTVweDtcclxufSIsIi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6ICM1OTJEOEQ7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzU5MkQ4RDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDk5OTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRleHRwYWdlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFycm93YnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNGVtO1xuICBoZWlnaHQ6IDI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgLS1wYWRkaW5nLWVuZDogMC42ZW07XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm5vdHZpZXdpbmNpZGVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Y0ZjBmODtcbiAgY29sb3I6ICMyOTIwMjA7XG59XG5cbi5ub3R2aWV3aW5jaWRlbnRzIHAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ub3R2aWV3aW5jaWRlbnRzIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ub3Rmb3VuZGluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmNGYwZjg7XG4gIGNvbG9yOiAjMjkyMDIwO1xufVxuXG4ubm90Zm91bmRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dHBhZ2UgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNDUsIDE0NSwgMC45Nyk7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0VCRTJGNTtcbiAgbWluLWhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1haW5zZWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRvcGFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvIDA7XG4gIGNvbG9yOiAjQzVDNUM1O1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwcHggMCAwIDA7XG59XG5cbi50b3BhcnJvdyBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5ld2NhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjRjhGNEZEO1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogNzhweDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbi5uZXdjYXJkIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm5ld2NhcmQgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3aXRlbW9uZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubmV3aXRlbW9uZSBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uZXdjYXJkaW4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4ubmV3Y2FyZGluIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwO1xufVxuXG4uc2VnbWVudGluIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xufVxuXG4ubmV3Y2FyZGluIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm5ld2NhcmRpbiBzcGFuIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubmV3Y2FyZCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3aXRlbW9uZSBpb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTkyRDhEO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwIDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbi5uZXdpdGVtb25lIGlvbi1jaGlwIHNwYW4ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2xlYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjRDkwRDBEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zdWJoZWFkaW5nIGgzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1YmhlYWRpbmcgaDQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5uZXdzaWRldGV4dCBwIHtcbiAgY29sb3I6ICNEOTBEMEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm5ld21lbnUge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG4ubmV3c2lkZXRleHQgcCB7XG4gIGNvbG9yOiAjRDkwRDBEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA3NXB4O1xufVxuXG4uc3ViaGVhZGluZyBpbWcge1xuICB3aWR0aDogOHB4O1xufVxuXG4ubmV3c2FmZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiA2NyU7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5uZXdzYWZlaW4ge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNjclO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG59XG5cbi5uZXdmYWIgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XG4gIC0tY29sb3I6ICMwMDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMDAwO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICMwMDA7XG4gIC0tY29sb3ItaG92ZXI6ICMwMDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNURFNUI7XG59XG5cbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmFiLXZlcnRpY2FsLWJvdHRvbSB7XG4gIGJvdHRvbTogMTE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modelreport/modelreport.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/modelreport/modelreport.page.ts ***!
    \*************************************************/

  /*! exports provided: ModelreportPage */

  /***/
  function srcAppModelreportModelreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelreportPage", function () {
      return ModelreportPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ModelreportPage = /*#__PURE__*/function () {
      function ModelreportPage(loadingController, translate, shareddata, httpClient, route, navController, router, modalController) {
        var _this = this;

        _classCallCheck(this, ModelreportPage);

        this.loadingController = loadingController;
        this.translate = translate;
        this.shareddata = shareddata;
        this.httpClient = httpClient;
        this.route = route;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.apiUrl1 = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.showFull = '';
        this.toparrow = true;
        this.incidentList = [];
        this.safetyTipList = [];
        this.number = false;
        this.filterCount = 0;
        this.incidentNumber = false;
        this.pagename1 = 'modelpage';
        this.offset = 0;
        this.total_offset = 0;
        this.safetytotaloffset = 0;
        this.safecity_offset = 0;
        this.forwardincidentdisabled = false;
        this.forwardsafetydisabled = false;
        this.shared_data = this.shareddata.getData();
        this.hide_back = false;
        this.hide_safety_back = false;
        this.route.queryParams.subscribe(function (params) {
          console.log(_this.pagename);
          _this.pagename = params['pagename'];
          _this.segmentModel = params['segmentModel'];
          var clear_filter = params['clear_filter'];
          console.log("segment model", _this.segmentModel); // this.incidentFrom = params['incidentFrom'];
          // this.catId = params['catId'];
          // this.timeOfString = params['timeOfString'];

          _this.safetyFrom = params['safetyFrom'];
          console.log("safetyFrom", _this.safetyFrom);
          console.log("pagename", _this.pagename);

          if (_this.pagename == 'from_detail') {
            _this.all_array = _this.shareddata.getCatArray();
            console.log('all arraay', _this.all_array);

            for (var i = 0; i < _this.all_array.length; i++) {
              _this.filterCount = _this.all_array[4];
            }

            if (_this.filterCount != 0) {
              console.log("hellow");
              _this.incidentNumber = true;
            } else {
              console.log("hellow");
              _this.incidentNumber = false;
            }

            _this.getReportedIncident();
          }

          if (_this.pagename == 'IncidentFilterPage') {
            _this.all_array = _this.shareddata.getCatArray();
            console.log('all arraay', _this.all_array);

            for (var _i = 0; _i < _this.all_array.length; _i++) {
              _this.filterCount = _this.all_array[4];
            }

            if (_this.filterCount != 0) {
              console.log("hellow");

              _this.getReportedIncident();

              _this.incidentNumber = true;
            } else {
              console.log("hellow");
              _this.incidentNumber = false;
            }
          } // if(clear_filter == 'true')
          // {
          //   this.incidentNumber = false;
          //   var empty1 = {}
          //   this.shareddata.setData(empty1)
          //   var empty = []
          // this.shareddata.timeofArray(empty)  
          // }


          if (_this.pagename == 'safetyFilterPage') {
            _this.number = true;

            _this.getSafetyTipsList();
          }

          var safety_tip_filter = _this.shareddata.getsafetyfiltersdata();

          if (safety_tip_filter.length == 0) {
            _this.number = false;
          } else {
            _this.number = true;
          }
        });
      }

      _createClass(ModelreportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // this.getReportedIncident()
          //this.getSafetyTipsList()
          console.log('in ngoninit'); // this.presentLoading() 

          this.all_array = this.shareddata.getCatArray();
          console.log(this.all_array);
          console.log(this.shared_data);
          this.mapBound = localStorage.getItem('mapBound');
          this.mapZoom = localStorage.getItem('map_zoom');

          if (this.all_array.length) {
            this.getReportedIncident();
          } else {
            this.getReportedIncident();
          }

          if (this.shareddata.getsafetyfiltersdata()) {
            this.getSafetyTipsList();
          } else {
            this.getSafetyTipsList();
          }
        }
      }, {
        key: "previousforward",
        value: function previousforward(key) {
          if (key == 'previous') {
            this.offset -= this.incidentData['limit'];
          } else {}

          if (this.all_array.length > 0) {
            this.getReportedIncident();
          } else {
            this.getincident_list();
          }
        }
      }, {
        key: "previousforwardsafety",
        value: function previousforwardsafety(key) {
          if (key == 'previous') {
            this.safecity_offset -= this.safetyTipData['limit'];
          } else {}

          if (this.shareddata.getsafetyfiltersdata()) {
            this.getSafetyTipsList();
          } else {
            this.getSafetyTip();
          }
        }
      }, {
        key: "getincident_list",
        value: function getincident_list() {
          var _this2 = this;

          console.log(this.offset);
          console.log(JSON.stringify(this.offset)); // this.shareddata.presentLoadingDefault()

          var address = localStorage.getItem('City_name');
          var client_id = localStorage.getItem('Client_id');
          var lang_id = localStorage.getItem('Lang_id');
          var data = new FormData();
          data.append('lang_id', lang_id);
          data.append('client_id', client_id);
          data.append('city', address);
          data.append('offset', JSON.stringify(this.offset));
          data.append('map_bound', localStorage.getItem('mapBound'));
          data.append('map_zoom', localStorage.getItem('map_zoom'));

          if (this.all_array.length > 0) {
            for (var i = 0; i < this.all_array.length; i++) {
              var timeOfArray = this.all_array[0];
              var incidentFrom = this.all_array[1];
              var catIdFrom = this.all_array[3];
            }

            if (this.catId == undefined) {
              this.catId = '';
            }

            this.incidentFrom = incidentFrom;
            console.log("****", this.all_array.length);
            var all_array_status = this.all_array.length;

            if (all_array_status > 0) {
              this.catId = catIdFrom.join(',');
              this.timeOfString = timeOfArray.join(',');
            }

            data.append('reported_on', this.incidentFrom);
            data.append('categories_ids', this.catId);
            data.append('reported_time', this.timeOfString);
          } //   this.shareddata.presentLoadingDefault()


          this.shareddata.sharedPostRequest('reported-incidents', data).subscribe(function (rdata) {
            //console.log(rdata);
            //console.log("incidents", rdata);
            _this2.incidentList = rdata.data;
            _this2.incidentData = rdata;

            if (rdata.data.length > 0) {
              _this2.showing = _this2.incidentData.showing;
              _this2.forwardincidentdisabled = false;
              _this2.total_offset = _this2.incidentData.total;
              console.log(_this2.offset);

              if (_this2.offset == 0) {
                _this2.hide_back = true;
                _this2.offset += _this2.incidentData['limit'];
              } else {
                _this2.offset += _this2.incidentData['limit'];
                _this2.hide_back = false;
              }

              console.log(_this2.offset);

              if (_this2.offset >= _this2.total_offset) {
                console.log(_this2.offset);
                _this2.forwardincidentdisabled = true;
                _this2.offset -= _this2.incidentData['limit'];
              }

              console.log(_this2.offset);

              _this2.shareddata.setData(_this2.incidentList);

              for (var _i2 = 0; _i2 < _this2.incidentList.length; _i2++) {
                var added_date = _this2.incidentList[_i2].created_on != null ? _this2.incidentList[_i2].created_on : "";

                var dayBetween = _this2.days_between(added_date);

                var Today;

                _this2.translate.get('Today').subscribe(function (res) {
                  Today = res;
                });

                var day_ago;

                _this2.translate.get('day_ago').subscribe(function (res) {
                  day_ago = res;
                });

                var days_ago;

                _this2.translate.get('days_ago').subscribe(function (res) {
                  days_ago = res;
                });

                _this2.getDaysAgo = dayBetween > 7 ? _this2.ChangeDateFormat(added_date, 1) : dayBetween == 0 ? Today : dayBetween == 1 ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago; // console.log(this.getDaysAgo)

                _this2.incidentList[_i2].show_date = _this2.getDaysAgo;

                var time = _this2.timeConvert(_this2.incidentList[_i2].time_from); // console.log("Time", time)


                _this2.incidentList[_i2].show_time = time;

                var disc = _this2.incidentList[_i2].description.substring(0, 97); // console.log("disc", disc)


                _this2.incidentList[_i2].show_disc = disc;
              }
            } else {
              _this2.forwardincidentdisabled = true;
            } // this.shared_data['incidentdata'] = this.incidentList
            // this.shareddata.setData(this.shared_data)
            //  this.shareddata.loaderDismiss()

          }, function (error) {// this.shareddata.loaderDismiss()
          }, function () {});
        }
      }, {
        key: "getReportedIncident",
        value: function getReportedIncident() {
          var _this3 = this;

          var address = localStorage.getItem('City_name');
          var client_id = localStorage.getItem('Client_id');
          var lang_id = localStorage.getItem('Lang_id');

          if (this.pagename == 'Incit_safety_fr_Home') //  || this.pagename == 'from_detail' || this.pagename == 'safetyFilterPage' || this.pagename == 'safetyDetail') 
            {
              // this.incidentData = this.shareddata.getData()
              // console.log("incident from shared",this.incidentData)
              // this.incidentList = this.incidentData.data
              // console.log("incidentList",this.incidentList)
              // this.showing = this.incidentData.showing
              this.mapZoom = localStorage.getItem('map_zoom');

              if (this.incidentList.length == 0 && this.mapZoom < 15) {
                this.getincident_list();
              } else if (this.mapZoom >= 15) {
                this.getincident_list();
              }
            } else if (this.pagename == 'safetyFilterPage') {
            this.getSafetyTipsList();
          } else if (this.pagename == 'IncidentFilterPage' || this.pagename == 'from_detail') {
            // this.timeOfString
            // this.incidentFrom =''
            // this.catId =''
            console.log("all_array", this.all_array);
            console.log("all_array", this.all_array.length);

            if (this.all_array.length > 0) {
              var data = new FormData();
              data.append('lang_id', lang_id);
              data.append('client_id', client_id);
              data.append('city', address);
              data.append('reported_on', this.incidentFrom);
              data.append('map_bound', localStorage.getItem('mapBound'));
              data.append('map_zoom', localStorage.getItem('map_zoom'));

              if (this.all_array.length > 0) {
                for (var i = 0; i < this.all_array.length; i++) {
                  var timeOfArray = this.all_array[0];
                  var incidentFrom = this.all_array[1];
                  var catIdFrom = this.all_array[3];
                }

                if (this.catId == undefined) {
                  this.catId = '';
                }

                this.incidentFrom = incidentFrom;
                console.log("****", this.all_array.length);
                var all_array_status = this.all_array.length;

                if (all_array_status > 0) {
                  this.catId = catIdFrom.join(',');
                  this.timeOfString = timeOfArray.join(',');
                }

                data.append('categories_ids', this.catId);
                data.append('reported_time', this.timeOfString);
                data.append('offset', JSON.stringify(this.offset));
              }

              var loadertext;
              this.translate.get('loadertext').subscribe(function (res) {
                loadertext = res;
              });
              this.shareddata.presentLoadingDefault(loadertext);
              this.shareddata.sharedPostRequest('reported-incidents', data).subscribe(function (rdata) {
                console.log(rdata);
                console.log("incidents", rdata);
                _this3.incidentData = rdata;
                _this3.incidentList = rdata.data;

                if (rdata.data.length > 0) {
                  _this3.total_offset = _this3.incidentData.total;
                  _this3.showing = _this3.incidentData.showing;
                  _this3.forwardincidentdisabled = false;

                  if (_this3.offset == 0) {
                    _this3.hide_back = true;
                    _this3.offset += _this3.incidentData['limit'];
                  } else {
                    _this3.offset += _this3.incidentData['limit'];
                    _this3.hide_back = false;
                  }

                  if (_this3.offset >= _this3.total_offset) {
                    _this3.forwardincidentdisabled = true;
                    _this3.offset -= _this3.incidentData['limit'];
                  }

                  _this3.shareddata.setData(_this3.incidentList);

                  for (var _i3 = 0; _i3 < _this3.incidentList.length; _i3++) {
                    var added_date = _this3.incidentList[_i3].created_on != null ? _this3.incidentList[_i3].created_on : "";

                    var dayBetween = _this3.days_between(added_date);

                    var Today;

                    _this3.translate.get('Today').subscribe(function (res) {
                      Today = res;
                    });

                    var day_ago;

                    _this3.translate.get('day_ago').subscribe(function (res) {
                      day_ago = res;
                    });

                    var days_ago;

                    _this3.translate.get('days_ago').subscribe(function (res) {
                      days_ago = res;
                    });

                    _this3.getDaysAgo = dayBetween > 7 ? _this3.ChangeDateFormat(added_date, 1) : dayBetween == 0 ? Today : dayBetween == 1 ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago; // console.log(this.getDaysAgo)

                    _this3.incidentList[_i3].show_date = _this3.getDaysAgo;

                    var time = _this3.timeConvert(_this3.incidentList[_i3].time_from); // console.log("Time", time)


                    _this3.incidentList[_i3].show_time = time;

                    var disc = _this3.incidentList[_i3].description.substring(0, 97); // console.log("disc", disc)


                    _this3.incidentList[_i3].show_disc = disc;
                  }

                  _this3.shared_data['incidentdata'] = _this3.incidentList;
                } else {
                  _this3.forwardincidentdisabled = true;
                } // this.shareddata.setData(this.shared_data)
                // this.shareddata.loaderDismiss()

              }, function (error) {
                _this3.shareddata.loaderDismiss();
              }, function () {}); // this.httpClient.post(this.apiUrl1 + 'reported-incidents', data)
              //   .subscribe((rdata: any) => {
              //     console.log("incidents", rdata);
              //     this.incidentData = rdata
              //     // this.showing = this.incidentData.showing
              //     this.incidentList = rdata.data
              //     this.shareddata.setData(this.incidentData)
              //     for (let i = 0; i < this.incidentList.length; i++) {
              //       var added_date = this.incidentList[i].created_on != null ? this.incidentList[i].created_on : "";
              //       var dayBetween = this.days_between(added_date);
              //       this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
              //       // console.log(this.getDaysAgo)
              //       this.incidentList[i].show_date = this.getDaysAgo
              //       let time = this.timeConvert(this.incidentList[i].time_from)
              //       // console.log("Time", time)
              //       this.incidentList[i].show_time = time
              //       var disc = this.incidentList[i].description.substring(0, 97)
              //       // console.log("disc", disc)
              //       this.incidentList[i].show_disc = disc
              //     }
              //     // this.showMap();
              //   }, error => {
              //   });
            } else {
              this.filterCount = 0;

              if (this.incidentList.length == 0 && this.mapZoom < 15) {
                this.getincident_list();
              } else if (this.mapZoom >= 15) {
                this.getincident_list();
              }
            }
          }
        }
      }, {
        key: "getSafetyTip",
        value: function getSafetyTip() {
          var _this4 = this;

          var address = localStorage.getItem('City_name');
          var client_id = localStorage.getItem('Client_id');
          var lang_id = localStorage.getItem('Lang_id');
          var data = new FormData();
          data.append('lang_id', lang_id);
          data.append('client_id', client_id);
          data.append('city', address);
          data.append('map_bound', localStorage.getItem('mapBound'));
          data.append('map_zoom', localStorage.getItem('map_zoom'));
          data.append('offset', JSON.stringify(this.safecity_offset));

          if (this.shareddata.getsafetyfiltersdata()) {
            data.append('reported_on', this.shareddata.getsafetyfiltersdata());
          } // this.shareddata.presentLoadingDefault()


          this.shareddata.sharedPostRequest('get-safety-tips', data).subscribe(function (rdata) {
            //  console.log(rdata);
            _this4.safetyTipData = rdata;
            _this4.safetyTipList = rdata.data;

            if (rdata.data.length > 0) {
              _this4.safetytotaloffset = _this4.safetyTipData.total;

              _this4.shareddata.setSafetyTipData(_this4.safetyTipData);

              _this4.safetyShowing = _this4.safetyTipData.showing;
              _this4.forwardsafetydisabled = false;

              _this4.shareddata.setSafetyTipData(_this4.safetyTipList);

              if (_this4.safecity_offset == 0) {
                _this4.hide_safety_back = true;
                _this4.safecity_offset += _this4.safetyTipData['limit'];
              } else {
                _this4.safecity_offset += _this4.safetyTipData['limit'];
                _this4.hide_safety_back = false;
              }

              if (_this4.safecity_offset >= _this4.safetytotaloffset) {
                //this.safecity_offset = 0
                _this4.forwardsafetydisabled = true;
                _this4.safecity_offset -= _this4.safetyTipData['limit'];
              }

              for (var i = 0; i < _this4.safetyTipList.length; i++) {
                var added_date = _this4.safetyTipList[i].added_date != null ? _this4.safetyTipList[i].added_date : "";

                var dayBetween = _this4.days_between(added_date);

                var Today;

                _this4.translate.get('Today').subscribe(function (res) {
                  Today = res;
                });

                var day_ago;

                _this4.translate.get('day_ago').subscribe(function (res) {
                  day_ago = res;
                });

                var days_ago;

                _this4.translate.get('days_ago').subscribe(function (res) {
                  days_ago = res;
                });

                var getDaysAgo = dayBetween > 7 ? _this4.ChangeDateFormat(added_date, 1) : dayBetween == 0 ? Today : dayBetween == 1 ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago; // console.log(getDaysAgo)

                _this4.safetyTipList[i].show_date = getDaysAgo;

                var time1 = _this4.safetyTipList[i].added_date.substring(11, 19); // console.log("time", time1)


                var time2 = _this4.timeConvert(time1); // console.log("Time", time2)


                _this4.safetyTipList[i].show_time = time2;

                var disc = _this4.safetyTipList[i].safety_tip_desc.substring(0, 97); // console.log("disc", disc)


                _this4.safetyTipList[i].show_disc = disc;
              }
            } else {
              _this4.forwardsafetydisabled = true;
            } // this.shared_data['safetytipdata'] = this.safetyTipList
            // this.shareddata.setData(this.shared_data)
            // this.safetyTipData.rdata

          }, function (error) {// this.shareddata.loaderDismiss()
          }, function () {//this.shareddata.loaderDismiss()
          });
        }
      }, {
        key: "getSafetyTipsList",
        value: function getSafetyTipsList() {
          var _this5 = this;

          var address = localStorage.getItem('City_name');
          var client_id = localStorage.getItem('Client_id');
          var lang_id = localStorage.getItem('Lang_id');

          if (this.pagename == 'from_detail' || this.pagename == 'safetyDetail' || this.pagename == 'IncidentFilterPage' || this.pagename == 'safetyFilterPage') {
            //  this.safetyTipData = this.shareddata.getSafetyTipData()
            // this.safetyShowing = this.safetyTipData.showing
            //this.safetyTipList = this.safetyTipData
            console.log("pagename in safety else", this.pagename);
            var data = new FormData();
            data.append('lang_id', lang_id);
            data.append('client_id', client_id);
            data.append('city', address);
            data.append('map_bound', localStorage.getItem('mapBound'));
            data.append('map_zoom', localStorage.getItem('map_zoom'));

            if (this.shareddata.getsafetyfiltersdata()) {
              data.append('reported_on', this.shareddata.getsafetyfiltersdata());
            } // data.append('reported_time', this.timeOfString);


            data.append('offset', JSON.stringify(this.safecity_offset)); //  this.shareddata.presentLoadingDefault()

            this.shareddata.sharedPostRequest('get-safety-tips', data).subscribe(function (rdata) {
              console.log(rdata);
              _this5.safetyTipData = rdata;
              _this5.safetyTipList = rdata.data;

              if (rdata.data.length > 0) {
                _this5.safetytotaloffset = _this5.safetyTipData.total;
                _this5.safetyShowing = _this5.safetyTipData.showing;
                _this5.forwardsafetydisabled = false;

                _this5.shareddata.setSafetyTipData(_this5.safetyTipList);

                if (_this5.safecity_offset == 0) {
                  _this5.hide_safety_back = true;
                  _this5.safecity_offset += _this5.safetyTipData['limit'];
                } else {
                  _this5.safecity_offset += _this5.safetyTipData['limit'];
                  _this5.hide_safety_back = false;
                }

                if (_this5.safecity_offset >= _this5.safetytotaloffset) {
                  _this5.forwardsafetydisabled = true;
                  _this5.safecity_offset -= _this5.safetyTipData['limit'];
                }

                for (var i = 0; i < _this5.safetyTipList.length; i++) {
                  var added_date = _this5.safetyTipList[i].added_date != null ? _this5.safetyTipList[i].added_date : "";

                  var dayBetween = _this5.days_between(added_date);

                  var Today;

                  _this5.translate.get('Today').subscribe(function (res) {
                    Today = res;
                  });

                  var day_ago;

                  _this5.translate.get('day_ago').subscribe(function (res) {
                    day_ago = res;
                  });

                  var days_ago;

                  _this5.translate.get('days_ago').subscribe(function (res) {
                    days_ago = res;
                  });

                  var getDaysAgo = dayBetween > 7 ? _this5.ChangeDateFormat(added_date, 1) : dayBetween == 0 ? Today : dayBetween == 1 ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago; // console.log(getDaysAgo)

                  _this5.safetyTipList[i].show_date = getDaysAgo;

                  var time1 = _this5.safetyTipList[i].added_date.substring(11, 19); // console.log("time", time1)


                  var time2 = _this5.timeConvert(time1); // console.log("Time", time2)


                  _this5.safetyTipList[i].show_time = time2;

                  var disc = _this5.safetyTipList[i].safety_tip_desc.substring(0, 97); // console.log("disc", disc)


                  _this5.safetyTipList[i].show_disc = disc;
                }
              } else {
                _this5.forwardsafetydisabled = true;
              } // this.shared_data['safetytipdata'] = this.safetyTipList
              // this.shareddata.setData(this.shared_data)
              // this.safetyTipData.rdata

            }, function (error) {//  this.shareddata.loaderDismiss()
            }, function () {// this.shareddata.loaderDismiss()
            });
          } else {
            if (this.safetyTipList.length == 0 && this.mapZoom < 15) {
              this.getSafetyTip();
            } else if (this.mapZoom >= 15) {
              this.getSafetyTip();
            } // this.httpClient.post(this.apiUrl1 + 'get-safety-tips', data)
            //   .subscribe((rdata: any) => {
            //     this.safetyTipData =rdata
            //     this.shareddata.setSafetyTipData(this.safetyTipData)
            //     // this.safetyShowing = this.safetyTipData.showing
            //     this.safetyTipList = rdata.data
            //     for (let i = 0; i < this.safetyTipList.length; i++) 
            //     {
            //       var added_date = this.safetyTipList[i].added_date != null ? this.safetyTipList[i].added_date : "";
            //       var dayBetween = this.days_between(added_date);
            //       var getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
            //       // console.log(getDaysAgo)
            //       this.safetyTipList[i].show_date = getDaysAgo
            //       var time1 = this.safetyTipList[i].added_date.substring(11, 19);
            //       // console.log("time", time1)
            //       let time2 = this.timeConvert(time1)
            //       // console.log("Time", time2)
            //       this.safetyTipList[i].show_time = time2
            //       var disc = this.safetyTipList[i].safety_tip_desc.substring(0, 97)
            //       // console.log("disc", disc)
            //       this.safetyTipList[i].show_disc = disc
            //     }
            //     // this.safetyTipData.rdata
            //   }, error => {
            //   });

          }
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {}
      }, {
        key: "clearList",
        value: function clearList(e) {
          console.log(e);

          if (e == 'incident') {
            this.all_array = [];
            this.shareddata.timeofArray(this.all_array);
            this.timeOfString = '';
            this.incidentFrom = '';
            this.catId = '';
            this.pagename = '';
            console.log("name", this.incidentFrom);
            console.log("name", this.timeOfString);
            console.log("name", this.catId);
            console.log("name", this.pagename);
            this.incidentNumber = false;
            this.pagename = null;
            this.offset = 0;
            this.getincident_list();
          } else {
            this.number = false;
            this.safetyFrom = '';
            this.pagename = null;
            this.getSafetyTip();
            this.safecity_offset = 0;
            this.shareddata.safetyfiltersdata = '';
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          console.log(this.segmentModel);
          console.log(event);

          if (this.segmentModel == "two") {
            this.getSafetyTipsList();
          } else {
            this.getReportedIncident();
          }
        }
      }, {
        key: "back",
        value: function back() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.navController.navigateBack('/home');

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "preframing",
        value: function preframing() {
          this.navController.navigateForward("/preframingtwo");
        }
      }, {
        key: "help",
        value: function help() {
          this.navController.navigateForward("/help");
        }
      }, {
        key: "menu",
        value: function menu() {
          this.navController.navigateForward("/menu");
        }
      }, {
        key: "safetytip",
        value: function safetytip() {
          this.navController.navigateForward("/safteytipone");
        }
      }, {
        key: "viewreport",
        value: function viewreport(item) {
          console.log(item);
          var itemDetail = JSON.stringify(item);
          var navigationExtras = {
            queryParams: {
              itemDetail: itemDetail
            }
          };
          this.navController.navigateForward(["/viewreportdetail"], navigationExtras);
        }
      }, {
        key: "viewsafety",
        value: function viewsafety(item) {
          console.log(item);
          var itemDetail = JSON.stringify(item);
          var navigationExtras = {
            queryParams: {
              safetyitemDetail: itemDetail
            }
          };
          this.navController.navigateForward(["/viewsafteydetail"], navigationExtras);
        }
      }, {
        key: "filter",
        value: function filter() {
          this.offset = 0;
          console.log('-+-+-+-+', this.pagename);
          var navigationExtras = {
            queryParams: {
              catData: [],
              // catIDs:catId,
              pagename: this.pagename
            }
          };
          this.navController.navigateForward(["/filter"], navigationExtras); //this.navController.navigateForward(`/filter`);
        }
      }, {
        key: "safteyfilter",
        value: function safteyfilter() {
          this.safecity_offset = 0;
          this.navController.navigateForward("/safetyfilter");
        }
      }, {
        key: "ChangeDateFormat",
        value: function ChangeDateFormat(date, val) {
          var dayDate = new Date(date.replace(/ /g, "T"));
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = monthNames[dayDate.getMonth()];
          var monthVal = val == 1 ? monthName.substr(0, 3) : monthName;
          var getDate = dayDate.getDate();
          var getYear = dayDate.getFullYear();
          var format_date = getDate + " " + monthVal + " " + getYear;
          return format_date;
        }
      }, {
        key: "timeConvert",
        value: function timeConvert(time) {
          //  console.log("Time in convert ", time)
          var time_split = time.split(':'); //  console.log(time_split)

          if (time_split[0].charAt(0) == '0') {
            var t = time_split[0].slice(1);
            time_split[0] = t; //console.log(time_split[0])
          }

          if (time_split[1].charAt(0) == '0') {
            var t = time_split[1].slice(1);
            time_split[1] = t; // console.log(time_split[1])
          }

          var hour = JSON.parse(time_split[0]);
          var minute = JSON.parse(time_split[1]); //  console.log(hour)
          //  console.log(minute)

          var hours = hour > 12 ? hour - 12 : hour;
          var am_pm = hour >= 12 ? "PM" : "AM";
          var minutes = minute < 10 ? "0" + minute : minute;
          var timeStart = hours + ":" + minutes + " " + am_pm; // Check correct time format and split into components
          // time = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
          // if (time.length > 1) { // If time format correct
          //   time = time.slice(1);  // Remove full string match value
          //   time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          //   time[0] = +time[0] % 12 || 12; // Adjust hours
          // }

          return timeStart; // return adjusted time or original string
        }
      }, {
        key: "days_between",
        value: function days_between(date) {
          // The number of milliseconds in one day
          var date1;
          date1 = new Date(date.replace(/ /g, "T"));
          var todays_date;
          todays_date = new Date();
          var ONE_DAY = 1000 * 60 * 60 * 24;
          var differenceMs = Math.abs(todays_date - date1);
          var daydiff = Math.round(differenceMs / ONE_DAY);
          return daydiff;
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...',
                      duration: 2000
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var navigationExtras = {
            queryParams: {
              pagename: this.pagename1,
              safetyFrom: this.safetyFrom
            }
          };
          this.navController.navigateForward(["/home"], navigationExtras);
        }
      }]);

      return ModelreportPage;
    }();

    ModelreportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModelreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modelreport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modelreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modelreport/modelreport.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modelreport.page.scss */
      "./src/app/modelreport/modelreport.page.scss"))["default"]]
    })], ModelreportPage);
    /***/
  }
}]);
//# sourceMappingURL=modelreport-modelreport-module-es5.js.map