(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysafety-mysafety-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafety/mysafety.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mysafety/mysafety.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">{{'safety_shared_by_me' | translate }}</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"notfoundin\" *ngIf = \"safetyTipList == ''\">\n    <p>{{'No_safety_tips_found' | translate}}</p>\n   </div>\n\n  <div class=\"tips\">\n    <ion-row *ngIf = \"safetyTipList !=''\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcardin\" tappable (click)=\"detail(item.id)\" *ngFor=\"let item of safetyTipList\">\n          <ion-card-header>\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">{{item.safety_tip_title}}</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3 *ngIf = \"showCity\">{{'home_at' | translate}} {{item.city}}</h3>\n                  <h3 *ngIf = \"showDiv\">{{'home_at' | translate}} {{item.exct_lcn}}</h3>\n                </div>\n                </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>{{item.show_date}} {{item.show_time}}</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p>{{item.show_disc}}… <span>{{'read_more' | translate }}</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-fab vertical=\"bottom\" class=\"newfab\" (click)=\"mysafety()\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/mysafety/mysafety-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mysafety/mysafety-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MysafetyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysafetyPageRoutingModule", function() { return MysafetyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mysafety_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mysafety.page */ "./src/app/mysafety/mysafety.page.ts");




const routes = [
    {
        path: '',
        component: _mysafety_page__WEBPACK_IMPORTED_MODULE_3__["MysafetyPage"]
    }
];
let MysafetyPageRoutingModule = class MysafetyPageRoutingModule {
};
MysafetyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MysafetyPageRoutingModule);



/***/ }),

/***/ "./src/app/mysafety/mysafety.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mysafety/mysafety.module.ts ***!
  \*********************************************/
/*! exports provided: MysafetyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysafetyPageModule", function() { return MysafetyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _mysafety_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mysafety-routing.module */ "./src/app/mysafety/mysafety-routing.module.ts");
/* harmony import */ var _mysafety_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mysafety.page */ "./src/app/mysafety/mysafety.page.ts");








let MysafetyPageModule = class MysafetyPageModule {
};
MysafetyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mysafety_routing_module__WEBPACK_IMPORTED_MODULE_6__["MysafetyPageRoutingModule"]
        ],
        declarations: [_mysafety_page__WEBPACK_IMPORTED_MODULE_7__["MysafetyPage"]]
    })
], MysafetyPageModule);



/***/ }),

/***/ "./src/app/mysafety/mysafety.page.scss":
/*!*********************************************!*\
  !*** ./src/app/mysafety/mysafety.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.notfoundin {\n  width: 80%;\n  margin: 0 auto;\n  border-radius: 4px;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notfoundin p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 58%;\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 0;\n  padding: 10px 16px;\n}\n\n.subheading {\n  width: 100%;\n  height: auto;\n}\n\n.subheading h3 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.subheading h4 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  background-image: url(/assets/images/icons/dotlight.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 5px 4px;\n  padding-left: 28px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newfab ion-fab-button {\n  --background: #F5DE5B;\n  --color: #000;\n  --color-activated: #000;\n  --color-focused: #000;\n  --color-hover: #000;\n}\n\n.fab-vertical-bottom {\n  bottom: 94px;\n}\n\nion-fab-button ion-icon {\n  width: 1.2em;\n  height: 1.2em;\n  font-weight: 600;\n}\n\n.newarea {\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 45px;\n}\n\n.newcardin {\n  border-radius: 0;\n  box-shadow: none;\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  border-bottom: 1px solid #ddd;\n  margin-top: 22px;\n}\n\n.newcardin ion-card-title {\n  font-size: 16px;\n  color: #592D8D !important;\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n}\n\n.newcardin ion-card-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  font-size: 16px;\n  color: #592D8D !important;\n  padding: 0 0;\n}\n\n.newcardin ion-card-content {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.newcardin p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(152, 145, 145, 0.97);\n  line-height: 18px;\n}\n\n.newcardin span {\n  height: auto;\n  font-size: 14px;\n  color: #000000;\n}\n\nion-fab-button {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n}\n\n.newfab ion-fab-button {\n  --background: #F5DE5B;\n  --color: #000;\n  --color-activated: #000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n}\n\n.fab-vertical-center {\n  bottom: 105px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlzYWZldHkvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcbXlzYWZldHlcXG15c2FmZXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlzYWZldHkvbXlzYWZldHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtBQ0FKOztBREdBO0VBR0ksOENBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9teXNhZmV0eS9teXNhZmV0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLm5vdGZvdW5kaW4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDQxLCAzMiwgMzIsIDEpO1xyXG59XHJcblxyXG4ubm90Zm91bmRpbiBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDU4JTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogIzJGMTE1MztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWNrYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDogNzVweDtcclxufVxyXG5cclxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDogNzVweDtcclxufVxyXG5cclxuLnRpcHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxufVxyXG5cclxuLnN1YmhlYWRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGgzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnN1YmhlYWRpbmcgaDQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICMyOTIwMjA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3RsaWdodC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubmV3ZmFiIGlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y1REU1QjtcclxuICAgIC0tY29sb3I6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwMDtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcclxuICAgIC0tY29sb3ItaG92ZXI6ICMwMDA7XHJcbn1cclxuXHJcbi5mYWItdmVydGljYWwtYm90dG9tIHtcclxuICAgIGJvdHRvbTogOTRweDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDEuMmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5uZXdhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG59XHJcblxyXG4ubmV3Y2FyZGluIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTUyLCAxNDUsIDE0NSwgMC45Nyk7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBzcGFuIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubmV3ZmFiIGlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y1REU1QjtcclxuICAgIC0tY29sb3I6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwMDtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcclxuICAgIC0tY29sb3ItaG92ZXI6ICMwMDA7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNURFNUI7XHJcbn1cclxuXHJcbi5mYWItdmVydGljYWwtY2VudGVyIHtcclxuICAgIGJvdHRvbTogMTA1cHg7XHJcbn0iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbi5ub3Rmb3VuZGluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjBmODtcbiAgY29sb3I6ICMyOTIwMjA7XG59XG5cbi5ub3Rmb3VuZGluIHAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDU4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDogNzVweDtcbn1cblxuLnRpcHMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zdWJoZWFkaW5nIGgzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1YmhlYWRpbmcgaDQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5ld2ZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0Y1REU1QjtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDA7XG4gIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcbiAgLS1jb2xvci1ob3ZlcjogIzAwMDtcbn1cblxuLmZhYi12ZXJ0aWNhbC1ib3R0b20ge1xuICBib3R0b206IDk0cHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubmV3YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG5cbi5uZXdjYXJkaW4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4ubmV3Y2FyZGluIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwO1xufVxuXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xufVxuXG4ubmV3Y2FyZGluIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm5ld2NhcmRpbiBzcGFuIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5uZXdmYWIgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XG4gIC0tY29sb3I6ICMwMDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMDAwO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICMwMDA7XG4gIC0tY29sb3ItaG92ZXI6ICMwMDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNURFNUI7XG59XG5cbi5mYWItdmVydGljYWwtY2VudGVyIHtcbiAgYm90dG9tOiAxMDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/mysafety/mysafety.page.ts":
/*!*******************************************!*\
  !*** ./src/app/mysafety/mysafety.page.ts ***!
  \*******************************************/
/*! exports provided: MysafetyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysafetyPage", function() { return MysafetyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");






let MysafetyPage = class MysafetyPage {
    constructor(sharedservice, httpClient, navController, router) {
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.showDiv = false;
        this.showCity = false;
    }
    ngOnInit() {
    }
    mysafety() {
        this.navController.navigateForward(`/safteytipone`);
    }
    ionViewDidEnter() {
        this.getSafetyTipsList();
    }
    detail(safety_Tip_id) {
        console.log("safety_tip", safety_Tip_id);
        let navigationExtras = {
            queryParams: {
                safety_tip_id: safety_Tip_id,
                pagename: 'safetyTip'
            }
        };
        this.navController.navigateForward([`/mysafetyreport`], navigationExtras);
    }
    getSafetyTipsList() {
        var user_id = localStorage.getItem('userId');
        let data = new FormData();
        data.append('user_id', user_id);
        data.append('is_mobile_visibile', '1');
        this.sharedservice.sharedPostRequest_webappurl('user-safety-tips', data).subscribe((rdata) => {
            console.log('safetyTips', rdata);
            this.safetyTipList = rdata.data;
            for (var i = 0; i < this.safetyTipList.length; i++) {
                var discription = this.safetyTipList[i].safety_tip_desc;
                console.log("discription", discription);
                console.log("city", this.safetyTipList[i].city);
                var city = this.safetyTipList[i].city;
                console.log(city);
                if (discription.length > 50) {
                    var disc = discription.substring(0, 97);
                    console.log("disc", this.disc);
                    this.safetyTipList[i].show_disc = disc;
                }
                var safety_tip_added_date = this.safetyTipList[i].added_date != null ? this.safetyTipList[i].added_date : "";
                var dayBetween = this.days_between(safety_tip_added_date);
                var getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(safety_tip_added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
                console.log(this.getDaysAgo);
                var time1 = this.safetyTipList[i].added_date.substr(11, 19);
                // console.log("time", time1)
                let time2 = this.timeConvert(time1);
                this.safetyTipList[i].show_date = getDaysAgo;
                this.safetyTipList[i].show_time = time2;
                if (city == 'undefined') {
                    console.log("hiiii");
                    var locationArray = [];
                    locationArray = this.safetyTipList[i].exact_location.split(',');
                    this.safetyTipList[i].exct_lcn = locationArray[1];
                    this.showDiv = true;
                    this.showCity = false;
                }
                else {
                    this.showCity = true;
                    this.showDiv = false;
                }
            }
        }, error => {
        });
    }
    timeConvert(time) {
        // console.log("Time in convert ", time)
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
            console.log("time1", time[0]);
            console.log("time", time);
            var time_array = [];
            time_array.push(time[0]);
            time_array.push(time[1]);
            time_array.push(time[2]);
            time_array.push(time[5]);
        }
        return time_array.join('');
        // return adjusted time or original string
    }
    days_between(date) {
        // The number of milliseconds in one day
        var date1;
        date1 = new Date(date.replace(/ /g, "T"));
        var todays_date;
        todays_date = new Date();
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(todays_date - date1);
        var daydiff = Math.round(differenceMs / ONE_DAY);
        return daydiff;
    }
    ChangeDateFormat(date, val) {
        var dayDate = new Date(date.replace(/ /g, "T"));
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[dayDate.getMonth()];
        var monthVal = (val == 1 ? monthName.substr(0, 3) : monthName);
        var getDate = dayDate.getDate();
        var getYear = dayDate.getFullYear();
        var format_date = getDate + " " + monthVal + " " + getYear;
        return format_date;
    }
    formatAMPM(date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
};
MysafetyPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MysafetyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mysafety',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mysafety.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafety/mysafety.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mysafety.page.scss */ "./src/app/mysafety/mysafety.page.scss")).default]
    })
], MysafetyPage);



/***/ })

}]);
//# sourceMappingURL=mysafety-mysafety-module-es2015.js.map