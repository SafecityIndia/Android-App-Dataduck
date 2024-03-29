function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incidentfilter-incidentfilter-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/incidentfilter/incidentfilter.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/incidentfilter/incidentfilter.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIncidentfilterIncidentfilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'home_all_filters' | translate}}</ion-title>\n    <div class=\"newsidetext\" slot=\"end\" tappable (click)='deselectAll()'>\n      <p>{{'button_clear' | translate }} {{'home_all_filters' | translate}}</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"newcontentin\">\n    <div class=\"newlist\">\n      <ion-card class=\"newcard\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"newhead\">{{'home_type_assault' | translate }}</h5>\n            <ion-list (ionChange)=\"getCategory($event)\">\n              <ion-item>\n                <ion-label>Domestic Violence</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Domestic Violence,1\" [(ngModel)] = \"BV1\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Online Harassment</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Online Harassment,2\" [(ngModel)] = \"BV2\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Rape/Sexual Assault</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Rape/Sexual Assault,3\" [(ngModel)] = \"BV3\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Physical Assault</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Physical Assault,4\" [(ngModel)] = \"BV4\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Stalking</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Stalking,5\" [(ngModel)] = \"BV5\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Ogling/Facial Expressions/Staring</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Ogling/Facial Expressions/Staring,6\" [(ngModel)] = \"BV6\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Taking photos without permission</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Taking photos without permission,7\" [(ngModel)] = \"BV7\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Indecent exposure/Masturbation in public</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Indecent exposure/Masturbation in public,8\" [(ngModel)] = \"BV8\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Touching /Groping</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Touching /Groping,9\" [(ngModel)] = \"BV9\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Showing Pornography without consent</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Showing Pornography without consent,10\" [(ngModel)] = \"BV10\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Commenting/Sexual Invites</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Commenting/Sexual Invites,11\" [(ngModel)] = \"BV11\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Chain Snatching/Robbery</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Chain Snatching/Robbery,12\" [(ngModel)] = \"BV12\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Human Trafficking</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Human Trafficking,13\" [(ngModel)] = \"BV13\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Other</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Other,14\" [(ngModel)] = \"BV14\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n<div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"filter()\" [disabled] = 'buttonDisable'>{{'button_apply' | translate }}</ion-button>\n    </ion-col>\n  </ion-row>\n</div>";
    /***/
  },

  /***/
  "./src/app/incidentfilter/incidentfilter-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/incidentfilter/incidentfilter-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: IncidentfilterPageRoutingModule */

  /***/
  function srcAppIncidentfilterIncidentfilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidentfilterPageRoutingModule", function () {
      return IncidentfilterPageRoutingModule;
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


    var _incidentfilter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./incidentfilter.page */
    "./src/app/incidentfilter/incidentfilter.page.ts");

    var routes = [{
      path: '',
      component: _incidentfilter_page__WEBPACK_IMPORTED_MODULE_3__["IncidentfilterPage"]
    }];

    var IncidentfilterPageRoutingModule = function IncidentfilterPageRoutingModule() {
      _classCallCheck(this, IncidentfilterPageRoutingModule);
    };

    IncidentfilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IncidentfilterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/incidentfilter/incidentfilter.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/incidentfilter/incidentfilter.module.ts ***!
    \*********************************************************/

  /*! exports provided: IncidentfilterPageModule */

  /***/
  function srcAppIncidentfilterIncidentfilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidentfilterPageModule", function () {
      return IncidentfilterPageModule;
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


    var _incidentfilter_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./incidentfilter-routing.module */
    "./src/app/incidentfilter/incidentfilter-routing.module.ts");
    /* harmony import */


    var _incidentfilter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./incidentfilter.page */
    "./src/app/incidentfilter/incidentfilter.page.ts");

    var IncidentfilterPageModule = function IncidentfilterPageModule() {
      _classCallCheck(this, IncidentfilterPageModule);
    };

    IncidentfilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _incidentfilter_routing_module__WEBPACK_IMPORTED_MODULE_6__["IncidentfilterPageRoutingModule"]],
      declarations: [_incidentfilter_page__WEBPACK_IMPORTED_MODULE_7__["IncidentfilterPage"]]
    })], IncidentfilterPageModule);
    /***/
  },

  /***/
  "./src/app/incidentfilter/incidentfilter.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/incidentfilter/incidentfilter.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIncidentfilterIncidentfilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.item-checkbox-checked {\n  --background: #D6C6EA;\n}\n\nion-checkbox {\n  --background-checked: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: #592D8D;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-width: 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, transparent));\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 15px;\n  margin-top: 18px;\n  padding-right: 11px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.newcard {\n  box-shadow: none;\n  border-bottom: none;\n  border-radius: 0;\n  -webkit-margin-start: 6px;\n          margin-inline-start: 6px;\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n  margin-bottom: 10px;\n  margin-top: 8px;\n}\n\n.newhead {\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  margin-bottom: 16px;\n}\n\n.newcard ion-item {\n  --padding-start: 14px;\n  margin-bottom: 8px;\n  --inner-padding-end: 10px;\n  font-size: 15px;\n  border: 1px solid #E1D8EB;\n  --min-height:38px;\n  border-radius: 3px;\n  color: #292020;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newcard ion-label {\n  margin-top: 10px;\n  margin-bottom: 8px;\n  white-space: inherit;\n}\n\n.item-radio-checked {\n  --background:#D6C6EA;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\nion-radio.ios.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\n.newcard {\n  box-shadow: none;\n  border-bottom: none;\n  border-radius: 0;\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newcontentin {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 185px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jaWRlbnRmaWx0ZXIvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcaW5jaWRlbnRmaWx0ZXJcXGluY2lkZW50ZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5jaWRlbnRmaWx0ZXIvaW5jaWRlbnRmaWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURJQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0FDRkE7O0FESUE7RUFFQSxxQkFBQTtBQ0ZBOztBRElBO0VBRUEsaUNBQUE7RUFDSSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0gsZUFBQTtFQUNHLGtCQUFBO0VBQ0gsbUJBQUE7RUFDQSxrRkFBQTtBQ0ZEOztBRElBO0VBSUEsOENBQUE7QUNGQTs7QURNQTtFQUVBLHVCQUFBO0FDSkE7O0FET0E7RUFFQSxxQkFBQTtBQ0xBOztBRE9BO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURPQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTEE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQyxnQkFBQTtFQUNELG1CQUFBO0FDUEE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0csdUJBQUE7VUFBQSxzQkFBQTtFQUNILG1CQUFBO0VBQ0EsZUFBQTtBQ1JEOztBRFdDO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEQ7O0FEWUM7RUFFRCxxQkFBQTtFQUNBLGtCQUFBO0VBQ0MseUJBQUE7RUFDRCxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FDVkE7O0FEYUE7RUFHSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0osb0JBQUE7QUNaQTs7QURjQTtFQUVBLG9CQUFBO0FDWkE7O0FEZUE7RUFHSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDRSxVQUFBO0VBQ0YsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGdCQTtFQUdJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNELFVBQUE7RUFDRyxVQUFBO0VBQ0YsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGlCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNoQkE7O0FEbUJBO0VBRUMsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNHLHdCQUFBO1VBQUEsdUJBQUE7QUNqQko7O0FEb0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQkE7O0FEcUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNuQkEiLCJmaWxlIjoic3JjL2FwcC9pbmNpZGVudGZpbHRlci9pbmNpZGVudGZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG4ubmV3bGlzdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG59XHJcbi5pdGVtLWNoZWNrYm94LWNoZWNrZWRcclxue1xyXG4tLWJhY2tncm91bmQ6ICNENkM2RUE7XHJcbn1cclxuaW9uLWNoZWNrYm94XHJcbntcclxuLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzU5MkQ4RDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCkpO1xyXG59XHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4ubmV3c2lkZXRleHQgcFxyXG57XHJcbmNvbG9yOiNEOTBEMEQ7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG4gbWFyZ2luLXRvcDogMThweDtcclxucGFkZGluZy1yaWdodDoxMXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubmV3Y2FyZFxyXG5cdHtcclxuXHRib3gtc2hhZG93Om5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTpub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6MDtcclxuXHRtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRtYXJnaW4tdG9wOjhweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2hlYWRcclxuXHR7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0bWFyZ2luLWJvdHRvbToxNnB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FyZCBpb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDogMTRweDtcclxubWFyZ2luLWJvdHRvbTo4cHg7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xyXG5mb250LXNpemU6MTVweDtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG4tLW1pbi1oZWlnaHQ6MzhweDtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5uZXdjYXJkIGlvbi1sYWJlbFxyXG57XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG4uaXRlbS1yYWRpby1jaGVja2VkXHJcbntcclxuLS1iYWNrZ3JvdW5kOiNENkM2RUE7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIFxyXG57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbiAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5pb3MucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICB3aWR0aDogN3B4O1xyXG4gICAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2NhcmRcclxuXHR7XHJcblx0Ym94LXNoYWRvdzpub25lO1xyXG5cdGJvcmRlci1ib3R0b206bm9uZTtcclxuXHRib3JkZXItcmFkaXVzOjA7XHJcblx0bWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG5cdH1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjE4NXB4O1xyXG59IiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubmV3bGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJhY2tncm91bmQ6ICNENkM2RUE7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjNTkyRDhEO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpKTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubmV3c2lkZXRleHQgcCB7XG4gIGNvbG9yOiAjRDkwRDBEO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDExcHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubmV3Y2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDZweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubmV3aGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5uZXdjYXJkIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1taW4taGVpZ2h0OjM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXdjYXJkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWJhY2tncm91bmQ6I0Q2QzZFQTtcbn1cblxuaW9uLXJhZGlvLm1kLnJhZGlvLWNoZWNrZWQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1yYWRpby5pb3MucmFkaW8tY2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgd2lkdGg6IDdweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3Y2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uZXdjb250ZW50aW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMTg1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/incidentfilter/incidentfilter.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/incidentfilter/incidentfilter.page.ts ***!
    \*******************************************************/

  /*! exports provided: IncidentfilterPage */

  /***/
  function srcAppIncidentfilterIncidentfilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidentfilterPage", function () {
      return IncidentfilterPage;
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


    var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var IncidentfilterPage = /*#__PURE__*/function () {
      function IncidentfilterPage(sharedService, navController) {
        _classCallCheck(this, IncidentfilterPage);

        this.sharedService = sharedService;
        this.navController = navController;
        this.catArray = [];
        this.buttonDisable = true;
      }

      _createClass(IncidentfilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this.BV1 = false;
          this.BV2 = false;
          this.BV3 = false;
          this.BV4 = false, this.BV5 = false, this.BV6 = false, this.BV7 = false, this.BV8 = false, this.BV9 = false, this.BV10 = false, this.BV11 = false, this.BV12 = false, this.BV13 = false, this.BV14 = false; // this.sharedService.setCatArray(this.catArray)
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.categoryData = this.sharedService.getCatArray();
          console.log("categoryData", this.categoryData);

          for (var j = 0; j < this.categoryData.length; j++) {
            var catData = this.categoryData[2];

            for (var i = 0; i < catData.length; i++) {
              if (catData[i] == "Domestic Violence") {
                this.BV1 = true;
              } else if (catData[i] == "Online Harassment") {
                this.BV2 = true;
              } else if (catData[i] == "Rape/Sexual Assault") {
                this.BV3 = true;
              } else if (catData[i] == "Physical Assault") {
                this.BV4 = true;
              } else if (catData[i] == "Stalking") {
                this.BV5 = true;
              } else if (catData[i] == "Ogling/Facial Expressions/Staring") {
                this.BV6 = true;
              } else if (catData[i] == "Touching /Groping") {
                this.BV7 = true;
              } else if (catData[i] == "Showing Pornography without consent") {
                this.BV8 = true;
              } else if (catData[i] == "Commenting/Sexual Invites") {
                this.BV9 = true;
              } else if (catData[i] == "Chain Snatching/Robbery") {
                this.BV10 = true;
              } else if (catData[i] == "Human Trafficking") {
                this.BV11 = true;
              } else if (catData[i] == "Other") {
                this.BV12 = true;
              }
            }
          }
        }
      }, {
        key: "getCategory",
        value: function getCategory(e) {
          console.log(e);
          this.checked = e.detail.checked;

          if (this.checked == true) {
            this.catArray.push(e.detail.value);
            console.log(this.catArray);

            if (this.catArray != []) {
              this.buttonDisable = false;
            }
          } else if (this.checked == false) {
            var index = this.catArray.indexOf(e.detail.value);
            console.log(index);
            this.catArray.splice(index, 1);
            console.log(this.catArray);
          }
        }
      }, {
        key: "filter",
        value: function filter() {
          //  this.categoryArray = []
          //  this.catIdArray = []
          // for(let i =0; i<this.catArray.length; i++)
          // {
          //   console.log(this.catArray[i])
          //   var splitValue = this.catArray[i].split(',')
          //   console.log(splitValue)
          //   this.categoryArray.push(splitValue[0])
          //   this.catIdArray.push(splitValue[1])
          // }
          // this.sharedService.setCatArray(this.catArray)
          var catArray = JSON.stringify(this.catArray); // var catId = JSON.stringify(this.catIdArray)
          // console.log("catArray",cat)
          // console.log("catIDs",catId)

          var navigationExtras = {
            queryParams: {
              catData: catArray,
              // catIDs:catId,
              pagename: 'incidentFilter'
            }
          };
          this.navController.navigateRoot(["/filter"], navigationExtras);
        }
      }]);

      return IncidentfilterPage;
    }();

    IncidentfilterPage.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    IncidentfilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-incidentfilter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./incidentfilter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/incidentfilter/incidentfilter.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./incidentfilter.page.scss */
      "./src/app/incidentfilter/incidentfilter.page.scss"))["default"]]
    })], IncidentfilterPage);
    /***/
  }
}]);
//# sourceMappingURL=incidentfilter-incidentfilter-module-es5.js.map