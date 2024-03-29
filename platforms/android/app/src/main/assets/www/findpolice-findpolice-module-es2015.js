(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["findpolice-findpolice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/findpolice/findpolice.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/findpolice/findpolice.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button (click)=back() defaultHref='/help' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'police' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t\t <div class=\"newpolice\">\r\n\t\t <div class=\"segmentarea\">\r\n\t\t <div class=\"btnarea btnareaactive\">\r\n      {{'police' | translate}}\r\n\t\t </div>\r\n\t\t  <div class=\"btnarea\" (click)=\"legal()\">\r\n        {{'legal_menu' | translate}}\r\n\t\t </div>\r\n\t\t </div>\r\n\t\t </div>\r\n    \r\n<div class=\"mainpolice\">\r\n\r\n   <ion-row>\r\n  <ion-col size=\"12\">\r\n<div class=\"policearea\">\r\n<h5>{{'map_move_pin' | translate}}</h5>\r\n<!-- <img src=\"assets/images/googleimg.png\"/>  -->\r\n<div #map id=\"map\"></div>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n      \r\n      </div>\r\n\r\n      \r\n<ion-row>\r\n     <ion-col col-12>\r\n\r\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"listing()\"   >{{'find_polc_stn' | translate}}</ion-button>\r\n  </ion-col>\r\n   </ion-row>\r\n</ion-content>\r\n <!-- <div class=\"bottom\"> -->\r\n\r\n<!-- </div> -->");

/***/ }),

/***/ "./src/app/findpolice/findpolice-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/findpolice/findpolice-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FindpolicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindpolicePageRoutingModule", function() { return FindpolicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _findpolice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findpolice.page */ "./src/app/findpolice/findpolice.page.ts");




const routes = [
    {
        path: '',
        component: _findpolice_page__WEBPACK_IMPORTED_MODULE_3__["FindpolicePage"]
    }
];
let FindpolicePageRoutingModule = class FindpolicePageRoutingModule {
};
FindpolicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FindpolicePageRoutingModule);



/***/ }),

/***/ "./src/app/findpolice/findpolice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/findpolice/findpolice.module.ts ***!
  \*************************************************/
/*! exports provided: FindpolicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindpolicePageModule", function() { return FindpolicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _findpolice_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./findpolice-routing.module */ "./src/app/findpolice/findpolice-routing.module.ts");
/* harmony import */ var _findpolice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./findpolice.page */ "./src/app/findpolice/findpolice.page.ts");








let FindpolicePageModule = class FindpolicePageModule {
};
FindpolicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _findpolice_routing_module__WEBPACK_IMPORTED_MODULE_6__["FindpolicePageRoutingModule"]
        ],
        declarations: [_findpolice_page__WEBPACK_IMPORTED_MODULE_7__["FindpolicePage"]]
    })
], FindpolicePageModule);



/***/ }),

/***/ "./src/app/findpolice/findpolice.page.scss":
/*!*************************************************!*\
  !*** ./src/app/findpolice/findpolice.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 60%;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.policearea {\n  width: 100%;\n  height: auto;\n  padding: 0 5px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 62px;\n}\n\n.policearea p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.policearea h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #2F1153;\n  float: left;\n  margin-bottom: 30px;\n}\n\n.policearea h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 35px auto 35px;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newpolice ion-segment {\n  border-radius: 4px;\n  margin-top: 25px;\n}\n\n.newpolice .segmentarea {\n  width: 100%;\n  background-color: #fcfafd;\n  padding: 1px 2px;\n  float: left;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.mainpolice {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.newpolice {\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  position: fixed;\n  z-index: 9;\n}\n\n.newpolice .btnarea {\n  --background: none;\n  --background-checked: none;\n  --background-hover: none;\n  --background-hover-opacity: 0;\n  --background-focused: none;\n  --background-focused-opacity: 0;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);\n  --border-style: solid;\n  --indicator-box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);\n  --indicator-color: var(--ion-color-step-350, var(--ion-background-color, #fff));\n  --indicator-height: 100%;\n  --indicator-transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --transition: 100ms all linear;\n  --padding-top: 0;\n  --padding-end: 13px;\n  --padding-bottom: 0;\n  --padding-start: 13px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  flex-basis: 0px;\n  flex-direction: row;\n  min-width: 70px;\n  min-height: 28px;\n  transform: translate3d(0px, 0px, 0px);\n  font-size: 13px;\n  font-weight: 450;\n  line-height: 35px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  color: #592D8D;\n}\n\n.newpolice .btnareaactive {\n  background-color: white;\n  border-radius: 4px;\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: auto;\n  color: var(--color);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-kerning: none;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-decoration: none;\n  color: #592D8D;\n  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.17);\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZHBvbGljZS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxmaW5kcG9saWNlXFxmaW5kcG9saWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmluZHBvbGljZS9maW5kcG9saWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUVGLGtCQUFBO0FDQUE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1BKOztBRFNBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBQ0EsY0FBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1JBOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNaQTs7QURlQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDYkE7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZkE7O0FEa0JBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQ2ZKOztBRGlCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBRUQseUJBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURxQkE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQ25CQTs7QURzQkE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDcEJBOztBRHVCQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3JCQTs7QUR3QkM7RUFFRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN0QkE7O0FEeUJBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ3ZCQTs7QUQwQkE7RUFFQSxrQkFBQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOERBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0VBQ0EsK0VBQUE7RUFDQSx3QkFBQTtFQUNBLG9FQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0MsVUFBQTtFQUNELFdBQUE7RUFDSCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDeEJEOztBRDBCQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0osY0FBQTtFQUdBLGdEQUFBO0FDeEJBOztBRDBCQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdkJBIiwiZmlsZSI6InNyYy9hcHAvZmluZHBvbGljZS9maW5kcG9saWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcblxyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuXHJcbi5wb2xpY2VhcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCA1cHg7XHJcblxyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcblxyXG5tYXJnaW4tdG9wOjYycHg7XHJcbn1cclxuXHJcbi5wb2xpY2VhcmVhIHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiM1RDU2NTY7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4ucG9saWNlYXJlYSBoNVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbn1cclxuXHJcblxyXG4ucG9saWNlYXJlYSBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjZweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbm1hcmdpbjozNXB4IGF1dG8gMzVweDtcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDogMDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyLXRvcDpub25lO1xyXG5ib3JkZXItbGVmdDpub25lO1xyXG5ib3JkZXItcmlnaHQ6bm9uZTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0UxRDhFQjtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVx0XHJcblxyXG4ubmV3cG9saWNlIGlvbi1zZWdtZW50XHJcbntcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbm1hcmdpbi10b3A6MjVweDtcclxufVxyXG5cclxuLm5ld3BvbGljZSAuc2VnbWVudGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjUwLCAyNTMsIDEpO1xyXG5wYWRkaW5nOjFweCAycHg7XHJcbmZsb2F0OmxlZnQ7XHJcbmJvcmRlci1yYWRpdXM6NHB4O1xyXG5tYXJnaW4tdG9wOjhweDtcclxufVxyXG5cclxuXHQubWFpbnBvbGljZVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLm5ld3BvbGljZVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQ6I2ZmZjtcclxucGFkZGluZzoxMHB4IDIwcHg7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG56LWluZGV4Ojk7XHJcbn1cclxuXHJcbi5uZXdwb2xpY2UgLmJ0bmFyZWFcclxue1xyXG4tLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xMik7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAxMDAlO1xyXG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAtLWluZGljYXRvci10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLXRyYW5zaXRpb246IDEwMG1zIGFsbCBsaW5lYXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWJhc2lzOiAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgbWluLWhlaWdodDogMjhweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDUwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0ICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzU5MkQ4RDtcclxufVxyXG4ubmV3cG9saWNlIC5idG5hcmVhYWN0aXZlXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbi0tY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvcik7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tY29sb3ItZGlzYWJsZWQ6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQta2VybmluZzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjojNTkyRDhEO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwwLDAsMC4xNyk7XHJcbmJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxufVxyXG4jbWFwe1xyXG53aWR0aDoxMDAlO1xyXG5taW4taGVpZ2h0OiA0MTVweDtcclxuaGVpZ2h0OjYwJTtcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuXHJcbiIsIiNtYXAge1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDY1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDY1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ucG9saWNlYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogNjJweDtcbn1cblxuLnBvbGljZWFyZWEgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wb2xpY2VhcmVhIGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucG9saWNlYXJlYSBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDM1cHggYXV0byAzNXB4O1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld3BvbGljZSBpb24tc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5ld3BvbGljZSAuc2VnbWVudGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmZDtcbiAgcGFkZGluZzogMXB4IDJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubWFpbnBvbGljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm5ld3BvbGljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbn1cblxuLm5ld3BvbGljZSAuYnRuYXJlYSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBub25lO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xMik7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDEwMCU7XG4gIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IHRyYW5zZm9ybSAyNjBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLWluZGljYXRvci10cmFuc2Zvcm06IG5vbmU7XG4gIC0tdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWJhc2lzOiAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDUwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU5MkQ4RDtcbn1cblxuLm5ld3BvbGljZSAuYnRuYXJlYWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tY29sb3I6IGluaXRpYWw7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yKTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1jb2xvcik7XG4gIC0tY29sb3ItZGlzYWJsZWQ6IHZhcigtLWNvbG9yKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQta2VybmluZzogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDE1cHg7XG4gIGhlaWdodDogNjAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/findpolice/findpolice.page.ts":
/*!***********************************************!*\
  !*** ./src/app/findpolice/findpolice.page.ts ***!
  \***********************************************/
/*! exports provided: FindpolicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindpolicePage", function() { return FindpolicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let FindpolicePage = class FindpolicePage {
    constructor(navController, route, router) {
        this.navController = navController;
        this.route = route;
        this.router = router;
        this.infoWindows = [];
        this.radius = 3000;
        this.markers = [
            { 'latitude': '', 'longitude': '', 'title': '', 'rating': '', 'address': '' }
        ];
        this.markers1 = [
            { 'latitude': '', 'longitude': '', 'title': '', 'rating': '', 'address': '' }
        ];
        console.log(google);
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.lat = this.router.getCurrentNavigation().extras.state.lat;
                this.longi = this.router.getCurrentNavigation().extras.state.longi;
                this.address = this.router.getCurrentNavigation().extras.state.address;
                var data = { 'latitude': this.lat, 'longitude': this.longi, 'title': this.address };
                this.markers.push(data);
                console.log(this.markers);
                console.log(this.location);
                console.log(this.lat);
                console.log(this.longi);
                console.log(this.address);
            }
        });
    }
    back() {
        localStorage.setItem('lat_police', this.lat);
        localStorage.setItem('longi_police', this.longi);
        localStorage.setItem('address_police', this.address);
        console.log(this.lat);
        console.log(this.longi);
        console.log(this.address);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.showMap();
    }
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                draggable: true,
            });
            mapMarker.setMap(this.map);
            google.maps.event.addListener(mapMarker, 'dragend', function () {
                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong   " + markerlatlong);
                console.log("lat    " + mapMarker.getPosition().lat());
                console.log("long   " + mapMarker.getPosition().lng());
                //this.placeMarkerAndPanTo(e.latLng, this.map);
                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng());
                localStorage.setItem('lat_police', lat);
                localStorage.setItem('longi_police', longi);
                //code for getting formatted address from the selected latitude and longitude 
                var geocoder = new google.maps.Geocoder();
                const latlng = {
                    lat: parseFloat(lat),
                    lng: parseFloat(longi)
                };
                geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            this.title = results[0].formatted_address;
                            localStorage.setItem('address_police', this.title);
                            console.log(this.title);
                            //this.markers = [];
                            var title = localStorage.getItem('address_police');
                            var lat1 = localStorage.getItem('lat_police');
                            var longi1 = localStorage.getItem('longi_police');
                            console.log(title);
                            let position = new google.maps.LatLng(lat1, longi1);
                            mapMarker.position = position,
                                mapMarker.title = title,
                                mapMarker.latitude = lat1,
                                mapMarker.longitude = longi1,
                                mapMarker.animation = 'DROP',
                                mapMarker.draggable = true,
                                mapMarker.setMap(this.map);
                            //var self = this;
                            this.addInfoWindowToMarker(mapMarker);
                            var data = { 'latitude': lat1, 'longitude': longi1, 'title': title };
                            this.markers = data;
                            console.log('3', this.markers);
                        }
                        else {
                            window.alert("No results found");
                        }
                    }
                    else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });
            }.bind(this));
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        let infoWindowContent = '<div id="content">' +
            '<h5 id="firstHeading" class"firstHeading">' + marker.title + '</h5>' +
            '<p>Latitude: ' + marker.latitude + '</p>' +
            '<p>Longitude: ' + marker.longitude + '</p>' +
            '</div>';
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    placeMarkerAndPanTo(latLng, map) {
        new google.maps.Marker({
            position: latLng,
            map: map
        });
        map.panTo(latLng);
    }
    showMap() {
        console.log('hi');
        console.log(this.lat);
        console.log(this.longi);
        const location = new google.maps.LatLng(this.lat, this.longi);
        const options = {
            center: location,
            zoom: 15,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false,
            gestureHandling: 'cooperative',
        };
        console.log(options);
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        // this.map.addListener('click', (e) => {
        //   console.log('clicked',e)
        //   this.placeMarkerAndPanTo(e.latLng, this.map);
        //   var lat= JSON.stringify(e.latLng.lat());
        //   var longi = JSON.stringify(e.latLng.lng());
        //   //code for getting formatted address from the selected latitude and longitude 
        //   var geocoder = new google.maps.Geocoder();
        //   const latlng = {
        //     lat: parseFloat(lat),
        //     lng: parseFloat(longi)
        //   };
        //   geocoder.geocode(
        //     { location: latlng },
        //     (
        //       results,
        //       status
        //     ) => {
        //       if (status === "OK") {
        //         if (results[0]) {
        //          this.title =  results[0].formatted_address;
        //          localStorage.setItem('title',this.title)
        //          console.log(this.title)
        //         } else {
        //           window.alert("No results found");
        //         }
        //       } else {
        //         window.alert("Geocoder failed due to: " + status);
        //       }
        //     }
        //   );
        //   //this.markers = [];
        //   var title = localStorage.getItem('title')
        //   console.log(title)
        //   var data = {'latitude' : lat, 'longitude' : longi, 'title' : title}
        //   this.markers.push(data);
        //   console.log('3',this.markers)
        // this.addMarkersToMap(this.markers);
        // });
        console.log('3', this.markers);
        this.addMarkersToMap(this.markers);
    }
    listing() {
        console.log('4', this.markers1);
        var title = localStorage.getItem('address_police');
        var lat1 = localStorage.getItem('lat_police');
        var longi1 = localStorage.getItem('longi_police');
        var pyrmont = new google.maps.LatLng(lat1, longi1);
        var request = {
            location: pyrmont,
            radius: this.radius,
            type: ['police'],
            rankby: 'distance',
            keyword: 'police'
        };
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, callback => {
            this.markers1 = callback;
            if (this.markers1.length < 3) {
                this.radius = this.radius + 2000;
                this.listing();
                return;
            }
            for (var i = 0; i < this.markers1.length; i++) {
                var j = i + 1;
                console.log(this.markers1[i].place_id);
                // var req = {
                //   placeId:this.markers[i].place_id
                // }
                // service.getDetails(req,callback =>{
                //   console.log(callback)
                //   this.markers[i].
                // },err=>{
                // })
                this.markers1[i].imgsrc = 'assets/images/icons/numberlisting/number' + j + '.png';
                this.markers1[i].pinicon = 'assets/images/icons/markericons/number' + j + '.png';
                console.log(this.markers1);
                //createMarker(results[i]);
            }
            console.log('3', this.markers1);
            this.pushto();
        }, err => {
        });
        //this.navController.navigateForward(`/policelisting`);
    }
    pushto() {
        var title = localStorage.getItem('address_police');
        var lat1 = localStorage.getItem('lat_police');
        var longi1 = localStorage.getItem('longi_police');
        let navigationExtras = {
            state: {
                data: JSON.stringify(this.markers1),
                lat: lat1,
                longi: longi1,
                address: title
            }
        };
        this.router.navigate(['/policelisting'], navigationExtras);
    }
    legal() {
        this.navController.navigateForward(`/legalresources`);
    }
};
FindpolicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], FindpolicePage.prototype, "mapRef", void 0);
FindpolicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-findpolice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./findpolice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/findpolice/findpolice.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./findpolice.page.scss */ "./src/app/findpolice/findpolice.page.scss")).default]
    })
], FindpolicePage);



/***/ })

}]);
//# sourceMappingURL=findpolice-findpolice-module-es2015.js.map