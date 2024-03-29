function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospital-hospital-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hospital/hospital.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hospital/hospital.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHospitalHospitalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/help' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'Hospital' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n   <div class=\"mainhospital\">\r\n      <form [formGroup]=\"hospitalForm\">\r\n   <ion-row >\r\n         <ion-col size=\"12\">\r\n   <div class=\"hospitalarea\">\r\n   <h4>{{'map_find_loc' | translate}}</h4>\r\n    <ion-list>\r\n       <ion-item>\r\n        <ion-input formControlName=\"location\" id=\"autocomplete1\"   placeholder=\"{{'Enter_location' | translate}}\" type=\"text\" ></ion-input>\r\n       </ion-item>\r\n       <p class=\"error\" *ngIf=\"errorControl.location.errors?.required && submitAttempt\">{{'map_police_find_loc_error' | translate}}</p>\r\n   </ion-list>\r\n\r\n      </div>\r\n       </ion-col>\r\n      </ion-row>\r\n         <ion-row>\r\n        <ion-col col-12>\r\n   \r\n   <ion-button expand=\"full\" shape=\"round\"  class=\"hospitalnewbtn\" (click)= \"getlatlong()\" >{{'next' | translate}}</ion-button>\r\n     </ion-col>\r\n      </ion-row>\r\n      </form>\r\n      </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/hospital/hospital-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/hospital/hospital-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: HospitalPageRoutingModule */

  /***/
  function srcAppHospitalHospitalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalPageRoutingModule", function () {
      return HospitalPageRoutingModule;
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


    var _hospital_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hospital.page */
    "./src/app/hospital/hospital.page.ts");

    var routes = [{
      path: '',
      component: _hospital_page__WEBPACK_IMPORTED_MODULE_3__["HospitalPage"]
    }];

    var HospitalPageRoutingModule = function HospitalPageRoutingModule() {
      _classCallCheck(this, HospitalPageRoutingModule);
    };

    HospitalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HospitalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/hospital/hospital.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/hospital/hospital.module.ts ***!
    \*********************************************/

  /*! exports provided: HospitalPageModule */

  /***/
  function srcAppHospitalHospitalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalPageModule", function () {
      return HospitalPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _hospital_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hospital-routing.module */
    "./src/app/hospital/hospital-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _hospital_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hospital.page */
    "./src/app/hospital/hospital.page.ts");

    var HospitalPageModule = function HospitalPageModule() {
      _classCallCheck(this, HospitalPageModule);
    };

    HospitalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _hospital_routing_module__WEBPACK_IMPORTED_MODULE_5__["HospitalPageRoutingModule"]],
      declarations: [_hospital_page__WEBPACK_IMPORTED_MODULE_7__["HospitalPage"]]
    })], HospitalPageModule);
    /***/
  },

  /***/
  "./src/app/hospital/hospital.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/hospital/hospital.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHospitalHospitalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#locationField,\n#controls {\n  position: relative;\n  width: 480px;\n}\n\n#autocomplete {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 99%;\n}\n\n.label {\n  text-align: right;\n  font-weight: bold;\n  width: 100px;\n  color: #303030;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n}\n\n#address {\n  border: 1px solid #000090;\n  background-color: #f0f9ff;\n  width: 480px;\n  padding-right: 2px;\n}\n\n#address td {\n  font-size: 10pt;\n}\n\n.field {\n  width: 99%;\n}\n\n.slimField {\n  width: 80px;\n}\n\n.wideField {\n  width: 200px;\n}\n\n#locationField {\n  height: 20px;\n  margin-bottom: 2px;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainhospital {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n}\n\n.hospitalarea {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.hospitalarea p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.hospitalarea h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.hospitalnewbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 80px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWwvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcaG9zcGl0YWxcXGhvc3BpdGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9zcGl0YWwvaG9zcGl0YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURJQTtFQUVBLGtCQUFBO0FDRkE7O0FES0E7RUFFQSxTQUFBO0FDSEE7O0FET0E7RUFJQSw4Q0FBQTtBQ0xBOztBRFNBO0VBRUEsdUJBQUE7QUNQQTs7QURVQTtFQUVBLHFCQUFBO0FDUkE7O0FEVUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1RKOztBRFdBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RBOztBRFlBO0VBQ0EsY0FBQTtBQ1RBOztBRFlBO0VBQ0EsZ0JBQUE7QUNUQTs7QURZQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0FDYkE7O0FEZ0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2RBOztBRGlCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZBOztBRGtCQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNmSjs7QURpQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2pCQTs7QURvQkE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQ2xCQSIsImZpbGUiOiJzcmMvYXBwL2hvc3BpdGFsL2hvc3BpdGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2NhdGlvbkZpZWxkLFxyXG4jY29udHJvbHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDgwcHg7XHJcbn1cclxuXHJcbiNhdXRvY29tcGxldGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDk5JTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgY29sb3I6ICMzMDMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNhZGRyZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDkwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxufVxyXG5cclxuI2FkZHJlc3MgdGQge1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICB3aWR0aDogOTklO1xyXG59XHJcblxyXG4uc2xpbUZpZWxkIHtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLndpZGVGaWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jbG9jYXRpb25GaWVsZCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcblxyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm1haW5ob3NwaXRhbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjI4JTtcclxufVxyXG5cclxuLmhvc3BpdGFsYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLmhvc3BpdGFsYXJlYSBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjVweDtcclxufVxyXG5cclxuLmhvc3BpdGFsYXJlYSBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjZweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5ob3NwaXRhbG5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG5tYXJnaW46ODBweCBhdXRvIDI1cHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDA7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlci10b3A6bm9uZTtcclxuYm9yZGVyLWxlZnQ6bm9uZTtcclxuYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNFMUQ4RUI7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cdCIsIiNsb2NhdGlvbkZpZWxkLFxuI2NvbnRyb2xzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDgwcHg7XG59XG5cbiNhdXRvY29tcGxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbi5sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNhZGRyZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDA5MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjlmZjtcbiAgd2lkdGg6IDQ4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbiNhZGRyZXNzIHRkIHtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uZmllbGQge1xuICB3aWR0aDogOTklO1xufVxuXG4uc2xpbUZpZWxkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi53aWRlRmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbiNsb2NhdGlvbkZpZWxkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5ob3NwaXRhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG59XG5cbi5ob3NwaXRhbGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaG9zcGl0YWxhcmVhIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaG9zcGl0YWxhcmVhIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4uaG9zcGl0YWxuZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gMjVweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hospital/hospital.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/hospital/hospital.page.ts ***!
    \*******************************************/

  /*! exports provided: HospitalPage */

  /***/
  function srcAppHospitalHospitalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalPage", function () {
      return HospitalPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HospitalPage = /*#__PURE__*/function () {
      function HospitalPage(navController, router, sharedservice, formBuilder, httpClient) {
        _classCallCheck(this, HospitalPage);

        this.navController = navController;
        this.router = router;
        this.sharedservice = sharedservice;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.submitAttempt = false;
        this.autoaddress = [];
        this.autoadd1 = [];
        this.sharedData = this.sharedservice.getData();
        this.hospitalForm = formBuilder.group({
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
        console.log(this.sharedData); // var lat = { 'latitude': '19.998518', 'longitude': '73.7919103' }
        // this.httpClient.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.503186,-0.126446&radius=5000&types=hospital&key=AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w')
        //   .subscribe((rdata: any) => {
        //     console.log(rdata)
        //   }, err => {
        //     console.log(err)
        //   })
      }

      _createClass(HospitalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.initAutocomplete();
        }
      }, {
        key: "getlatlong",
        // hospitalForm.value.location
        value: function getlatlong() {
          var _this = this;

          console.log(this.hospitalForm.value.location);
          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = this.hospitalForm.value.location;
          geocoder.geocode({
            'address': address
          }, function (results) {
            if (results[0].formatted_address) {
              console.log(results);
              _this.address = JSON.stringify(results[0].formatted_address);
              _this.lat = JSON.stringify(results[0].geometry.location.lat());
              _this.longi = JSON.stringify(results[0].geometry.location.lng()); //this.locations = new google.maps.LatLng(this.lat, this.longi);

              console.log(_this.lat);
              console.log(_this.longi);
              localStorage.setItem('lat', _this.lat);
              localStorage.setItem('longi', _this.longi);
              localStorage.setItem('address', _this.address);
              _this.submitAttempt = true;

              if (!_this.hospitalForm.valid) {
                localStorage.setItem('lat', '');
                localStorage.setItem('longi', '');
                localStorage.setItem('address', '');
              } else {
                var navigationExtras = {
                  state: {
                    lat: _this.lat,
                    longi: _this.longi,
                    address: _this.address
                  }
                };

                _this.router.navigate(['/findhospital'], navigationExtras);
              } // this.sharedData['lat_hospital'] = this.lat
              // this.sharedData['longi_hospital'] = this.longi
              // this.sharedData['address_hospital'] = this.address


              console.log(_this.sharedData); //this.sharedservice.setData(this.sharedData)
            }
          });
        }
      }, {
        key: "find",
        value: function find() {
          console.log(this.lat);
          console.log(this.longi);
          console.log(this.address);
          this.lat = localStorage.getItem('lat');
          this.longi = localStorage.getItem('longi');
          this.address = localStorage.getItem('address'); // this.lat = this.sharedData['lat_hospital']
          // this.longi = this.sharedData['longi_hospital']
          // this.address = this.sharedData['address_hospital']

          console.log(this.lat);
          console.log(this.longi);
          console.log(this.address);
          this.submitAttempt = true;

          if (!this.hospitalForm.valid) {
            localStorage.setItem('lat', '');
            localStorage.setItem('longi', '');
            localStorage.setItem('address', '');
          } else {
            var navigationExtras = {
              state: {
                lat: this.lat,
                longi: this.longi,
                address: this.address
              }
            };
            this.router.navigate(['/findhospital'], navigationExtras);
          }
        } //autocomplete code

      }, {
        key: "initAutocomplete",
        value: function initAutocomplete() {
          var _this2 = this;

          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete1').getElementsByTagName('input')[0]); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          this.autocomplete.setFields(["address_component"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          this.autocomplete.addListener("place_changed", function (fillInAddress) {
            _this2.autoaddress = [];

            _this2.autocomplete.getPlace();

            console.log(_this2.autocomplete.getPlace());

            var autoadd = _this2.autocomplete.getPlace();

            console.log(autoadd);
            _this2.autoadd1 = autoadd.address_components;
            console.log(_this2.autoadd1);

            for (var i = 0; i < _this2.autoadd1.length; i++) {
              _this2.autoaddress.push(_this2.autoadd1[i].long_name);
            } // this.autoaddress = autoadd.long_name.join(',')


            console.log(_this2.autoaddress);

            var final_result = _this2.autoaddress.join(',');

            console.log(final_result);
            console.log(_this2.autoaddress);
            _this2.hospitalForm.value.location = ''; // this.getlatlong(final_result)

            _this2.hospitalForm.controls['location'].setValue(final_result);
          });
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.hospitalForm.controls;
        }
      }]);

      return HospitalPage;
    }();

    HospitalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    HospitalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hospital',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hospital.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hospital/hospital.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hospital.page.scss */
      "./src/app/hospital/hospital.page.scss"))["default"]]
    })], HospitalPage);
    /***/
  }
}]);
//# sourceMappingURL=hospital-hospital-module-es5.js.map