(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policelisting-policelisting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/policelisting/policelisting.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policelisting/policelisting.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/help' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title ><div class=\"ion-text-wrap\">{{'police_near_your_location' | translate}}</div></ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n <div class=\"newtop\">\r\n<div class=\"segmentarea\">\r\n\t\t <div class=\"btnarea btnareaactive\">\r\n      {{'police' | translate}}\r\n\t\t </div>\r\n\t\t  <div class=\"btnarea\" (click)=\"legal()\">\r\n        {{'legal_menu' | translate}}\r\n\t\t </div>\r\n\t\t </div>\r\n\t\t </div>\r\n<div class=\"policelist\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n\t  <ion-item>\r\n <p slot=\"start\">\r\n   {{'map_location' | translate}}\r\n  </p>\r\n  <ion-label>{{address}}</ion-label>\r\n  <ion-button slot=\"end\" class=\"newedit\" (click)=\"police()\">\r\n    {{'map_edit_option' | translate}}\r\n  </ion-button>\r\n</ion-item>\r\n\t   </ion-col>\r\n   </ion-row>\r\n      <ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"mainlistingtext\">\r\n<!-- <h5>Please move the pin to the exact location:</h5> -->\r\n<div #map id=\"map\"></div>\r\n<ion-card class=\"cardarea\" *ngFor=\"let item of markers\">\r\n  <h2><span><img [src]=item.imgsrc/></span>{{item.name}}</h2>\r\n   <div class=\"sidearea\">\r\n  <img  (click)=\"call(item.place_id)\" src=\"assets/images/icons/call.svg\"/>\r\n  <img (click)=\"direction(item)\" src=\"assets/images/icons/direction.svg\"/>\r\n  </div> \r\n  <div class=\"rating\">\r\n  <h6>{{item.rating}}</h6>\r\n  <ng-template [ngIf]=\"item.rating > '1'\" [ngIfElse]=\"star1\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star1>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '1.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\" ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '2.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '3.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '4.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  \r\n  \r\n  </div>\r\n  <p>{{item.vicinity}}</p>\r\n  <h4>Open 24 hours</h4>\r\n  </ion-card>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n      </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/policelisting/policelisting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/policelisting/policelisting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PolicelistingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicelistingPageRoutingModule", function() { return PolicelistingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _policelisting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policelisting.page */ "./src/app/policelisting/policelisting.page.ts");




const routes = [
    {
        path: '',
        component: _policelisting_page__WEBPACK_IMPORTED_MODULE_3__["PolicelistingPage"]
    }
];
let PolicelistingPageRoutingModule = class PolicelistingPageRoutingModule {
};
PolicelistingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicelistingPageRoutingModule);



/***/ }),

/***/ "./src/app/policelisting/policelisting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/policelisting/policelisting.module.ts ***!
  \*******************************************************/
/*! exports provided: PolicelistingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicelistingPageModule", function() { return PolicelistingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _policelisting_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policelisting-routing.module */ "./src/app/policelisting/policelisting-routing.module.ts");
/* harmony import */ var _policelisting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./policelisting.page */ "./src/app/policelisting/policelisting.page.ts");








let PolicelistingPageModule = class PolicelistingPageModule {
};
PolicelistingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _policelisting_routing_module__WEBPACK_IMPORTED_MODULE_6__["PolicelistingPageRoutingModule"]
        ],
        declarations: [_policelisting_page__WEBPACK_IMPORTED_MODULE_7__["PolicelistingPage"]]
    })
], PolicelistingPageModule);



/***/ }),

/***/ "./src/app/policelisting/policelisting.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/policelisting/policelisting.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.policelist {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.mainlistingtext {\n  width: 100%;\n  height: auto;\n  padding: 0 0px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\nion-title .toolbar-title {\n  white-space: normal !important;\n}\n\n.mainlistingtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.mainlistingtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 15px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0;\n  margin-top: 65px;\n  border: none;\n}\n\nion-segment {\n  border-radius: 4px;\n  margin-top: 25px;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.segmentarea {\n  width: 100%;\n  background-color: #fcfafd;\n  padding: 1px 2px;\n  float: left;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.btnarea {\n  --background: none;\n  --background-checked: none;\n  --background-hover: none;\n  --background-hover-opacity: 0;\n  --background-focused: none;\n  --background-focused-opacity: 0;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);\n  --border-style: solid;\n  --indicator-box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);\n  --indicator-color: var(--ion-color-step-350, var(--ion-background-color, #fff));\n  --indicator-height: 100%;\n  --indicator-transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --transition: 100ms all linear;\n  --padding-top: 0;\n  --padding-end: 13px;\n  --padding-bottom: 0;\n  --padding-start: 13px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  flex-basis: 0px;\n  flex-direction: row;\n  min-width: 70px;\n  min-height: 28px;\n  transform: translate3d(0px, 0px, 0px);\n  font-size: 13px;\n  font-weight: 450;\n  line-height: 35px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  color: #592D8D;\n}\n\n.btnareaactive {\n  background-color: white;\n  border-radius: 4px;\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: auto;\n  color: var(--color);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-kerning: none;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-decoration: none;\n  color: #592D8D;\n  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.17);\n}\n\n.newedit {\n  --background: transparent;\n  color: #592D8D;\n  --background-hover: #ffffff;\n  --background-focused: #ffffff;\n  --background-activated-opacity: 0;\n  --background-focused-opacity: 0.24;\n  --background-hover-opacity: 0.08;\n  --box-shadow: none;\n  font-size: 14px;\n  text-transform: inherit;\n}\n\nion-label {\n  white-space: inherit !important;\n}\n\n.newtop {\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  position: fixed;\n  z-index: 9;\n}\n\n.cardarea {\n  width: 100%;\n  height: auto;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  padding: 10px;\n  border-radius: 6px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 11px;\n}\n\n.cardarea h2 {\n  width: 75%;\n  height: auto;\n  float: left;\n  font-size: 15px;\n  font-weight: 500;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.sidearea {\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n  margin-top: 6px;\n}\n\n.sidearea img {\n  margin-left: 12px;\n  width: 18px;\n}\n\n.rating {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.rating ion-icon {\n  color: #D6D5D8;\n  margin-right: 5px;\n}\n\n.rating ion-icon.newicon {\n  color: #F5D937;\n}\n\n.rating h6 {\n  height: auto;\n  float: left;\n  font-size: 12px;\n  margin: 0 8px 0 0;\n  color: #5D5656;\n}\n\n.cardarea p {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 0;\n  font-size: 12px;\n  margin-top: 0;\n  color: #5D5656;\n}\n\n.cardarea h4 {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0;\n  font-size: 12px;\n  color: #5D5656;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n  margin-bottom: 16px;\n}\n\n.cardarea span {\n  background: #592d8d;\n  color: #fff;\n  font-size: 9px;\n  border-radius: 2px;\n  padding: 0;\n  margin-bottom: 5;\n  margin-right: 5px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9saWNlbGlzdGluZy9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxwb2xpY2VsaXN0aW5nXFxwb2xpY2VsaXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9saWNlbGlzdGluZy9wb2xpY2VsaXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNDLFNBQUE7RUFDRyxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1BBOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBQ1ZBOztBRGFBO0VBQ0ksOEJBQUE7QUNWSjs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Es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QSxXQUFBO0FDMUJBOztBRDZCQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQzNCQTs7QUQ4QkE7RUFFQSxjQUFBO0FDNUJBOztBRCtCQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQzdCQTs7QURnQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQzlCQTs7QURpQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUMvQkE7O0FEa0NBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQy9CQTs7QURpQ0E7RUFFQSxtQkFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUMvQkoiLCJmaWxlIjoic3JjL2FwcC9wb2xpY2VsaXN0aW5nL3BvbGljZWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG4gbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5wb2xpY2VsaXN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG59XHJcblxyXG4ubWFpbmxpc3Rpbmd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAwcHg7XHJcblxyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcblxyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbmlvbi10aXRsZSAudG9vbGJhci10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuXHJcbi5tYWlubGlzdGluZ3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5tYWlubGlzdGluZ3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MThweDtcclxubGluZS1oZWlnaHQ6MjJweDtcclxubWFyZ2luLWJvdHRvbTo2cHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbm1hcmdpbjoxNXB4IGF1dG8gMjVweDtcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbm1hcmdpbi10b3A6NjVweDtcclxuYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50XHJcbntcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbm1hcmdpbi10b3A6MjVweDtcclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uc2VnbWVudGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjUwLCAyNTMsIDEpO1xyXG5wYWRkaW5nOjFweCAycHg7XHJcbmZsb2F0OmxlZnQ7XHJcbmJvcmRlci1yYWRpdXM6NHB4O1xyXG5tYXJnaW4tdG9wOjhweDtcclxufVxyXG5cclxuLmJ0bmFyZWFcclxue1xyXG4tLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xMik7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAxMDAlO1xyXG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAtLWluZGljYXRvci10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLXRyYW5zaXRpb246IDEwMG1zIGFsbCBsaW5lYXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWJhc2lzOiAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgbWluLWhlaWdodDogMjhweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDUwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0ICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzU5MkQ4RDtcclxufVxyXG4uYnRuYXJlYWFjdGl2ZVxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbmJvcmRlci1yYWRpdXM6NHB4O1xyXG4tLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogdmFyKC0tY29sb3IpO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1jb2xvcik7XHJcbiAgICAtLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1jb2xvcik7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LWtlcm5pbmc6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6IzU5MkQ4RDtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwwLDAsMC4xNyk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsMCwwLDAuMTcpO1xyXG5ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwwLDAsMC4xNyk7XHJcbn1cclxuLm5ld2VkaXR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDAuMjQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4wODtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTppbmhlcml0O1xyXG5cdH1cclxuXHRcclxuXHRpb24tbGFiZWxcclxue1xyXG53aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3dG9wXHJcbntcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZDojZmZmO1xyXG5wYWRkaW5nOjEwcHggMjBweDtcclxucG9zaXRpb246Zml4ZWQ7XHJcbnotaW5kZXg6OTtcclxufVxyXG5cclxuLmNhcmRhcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6NnB4O1xyXG5tYXJnaW4tbGVmdDowO1xyXG5tYXJnaW4tcmlnaHQ6MDtcclxubWFyZ2luLWJvdHRvbToxMXB4O1xyXG59XHJcblxyXG4uY2FyZGFyZWEgaDJcclxue1xyXG53aWR0aDo3NSU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5mb250LXNpemU6MTVweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5tYXJnaW4tdG9wOjVweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWFyZWFcclxue1xyXG53aWR0aDoyNSU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpyaWdodDtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbm1hcmdpbi10b3A6NnB4O1xyXG59XHJcblxyXG4uc2lkZWFyZWEgaW1nXHJcbntcclxubWFyZ2luLWxlZnQ6MTJweDtcclxud2lkdGg6MThweDtcclxufVxyXG5cclxuLnJhdGluZ1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4ucmF0aW5nIGlvbi1pY29uXHJcbntcclxuY29sb3I6I0Q2RDVEODtcclxubWFyZ2luLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLnJhdGluZyBpb24taWNvbi5uZXdpY29uXHJcbntcclxuY29sb3I6I0Y1RDkzNztcclxufVxyXG5cclxuLnJhdGluZyBoNlxyXG57XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5mb250LXNpemU6MTJweDtcclxubWFyZ2luOjAgOHB4IDAgMDsgXHJcbmNvbG9yOiM1RDU2NTY7XHJcbn1cclxuXHJcbi5jYXJkYXJlYSBwe1xyXG5cclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbi1ib3R0b206MDtcclxuZm9udC1zaXplOjEycHg7XHJcbm1hcmdpbi10b3A6MDtcclxuY29sb3I6IzVENTY1NjtcclxufVxyXG5cclxuLmNhcmRhcmVhIGg0e1xyXG5cclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbjowO1xyXG5mb250LXNpemU6MTJweDtcclxuY29sb3I6IzVENTY1NjtcclxufVxyXG5cclxuI21hcHtcclxud2lkdGg6MTAwJTtcclxubWluLWhlaWdodDogNDE1cHg7XHJcbmhlaWdodDo2MCU7XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG5tYXJnaW4tYm90dG9tOjE2cHg7XHJcbn1cclxuLmNhcmRhcmVhIHNwYW5cclxue1xyXG5iYWNrZ3JvdW5kOiAjNTkyZDhkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLnBvbGljZWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5tYWlubGlzdGluZ3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi10aXRsZSAudG9vbGJhci10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLm1haW5saXN0aW5ndGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1haW5saXN0aW5ndGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMjVweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2VnbWVudGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmZDtcbiAgcGFkZGluZzogMXB4IDJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYnRuYXJlYSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBub25lO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4xMik7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDEwMCU7XG4gIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IHRyYW5zZm9ybSAyNjBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLWluZGljYXRvci10cmFuc2Zvcm06IG5vbmU7XG4gIC0tdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWJhc2lzOiAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDUwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU5MkQ4RDtcbn1cblxuLmJ0bmFyZWFhY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWNvbG9yOiBpbml0aWFsO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvcik7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tY29sb3IpO1xuICAtLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1jb2xvcik7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LWtlcm5pbmc6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xufVxuXG4ubmV3ZWRpdCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDAuMjQ7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjA4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXd0b3Age1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5jYXJkYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbi5jYXJkYXJlYSBoMiB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaWRlYXJlYSB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uc2lkZWFyZWEgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4ucmF0aW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yYXRpbmcgaW9uLWljb24ge1xuICBjb2xvcjogI0Q2RDVEODtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5yYXRpbmcgaW9uLWljb24ubmV3aWNvbiB7XG4gIGNvbG9yOiAjRjVEOTM3O1xufVxuXG4ucmF0aW5nIGg2IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgY29sb3I6ICM1RDU2NTY7XG59XG5cbi5jYXJkYXJlYSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM1RDU2NTY7XG59XG5cbi5jYXJkYXJlYSBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1RDU2NTY7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDE1cHg7XG4gIGhlaWdodDogNjAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jYXJkYXJlYSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzU5MmQ4ZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/policelisting/policelisting.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/policelisting/policelisting.page.ts ***!
  \*****************************************************/
/*! exports provided: PolicelistingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicelistingPage", function() { return PolicelistingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let PolicelistingPage = class PolicelistingPage {
    constructor(navController, translate, alertController, iab, callNumber, route, router, httpClient) {
        this.navController = navController;
        this.translate = translate;
        this.alertController = alertController;
        this.iab = iab;
        this.callNumber = callNumber;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.infoWindows = [];
        this.markers = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.markers = JSON.parse(this.router.getCurrentNavigation().extras.state.data);
                this.lat = this.router.getCurrentNavigation().extras.state.lat;
                this.longi = this.router.getCurrentNavigation().extras.state.longi;
                this.address = this.router.getCurrentNavigation().extras.state.address;
                // var data1 = {'latitude' : this.lat , 'longitude' : this.longi, 'title' : this.address}
                //this.markers.push(data1)
                console.log(this.markers);
                // console.log(this.location)
                // console.log(this.lat)
                // console.log(this.longi)
                // console.log(this.address)
            }
        });
    }
    ngOnInit() {
    }
    back() {
        localStorage.setItem('lat_police', this.lat);
        localStorage.setItem('longi_police', this.longi);
        localStorage.setItem('address_police', this.address);
        console.log(this.lat);
        console.log(this.longi);
        console.log(this.address);
    }
    ionViewDidEnter() {
        this.showMap();
    }
    direction(item) {
        // if(this.platform.is('android'))
        // {
        var lat1 = localStorage.getItem('lat_police');
        var longi1 = localStorage.getItem('longi_police');
        let destination = item.geometry.location.lat + ',' + item.geometry.location.lng;
        //  let source = lat1 + ',' + longi1;
        // let source = '51.8642112' + ',' + '-2.2380335';
        // console.log(source)
        let label = encodeURI('My');
        //console.log('geo:'+source+'?q=' + destination + '(' + label + ')', '_system')
        //window.open('geo:'+source+'?q=' + destination + '(' + label + ')', '_system');
        //this.iab.create('http://maps.google.com/maps?saddr='+source + '&daddr='+destination, '_system')
        this.iab.create('http://maps.google.com/maps?daddr=' + destination, '_system');
        //    var  app = this.launchNavigator.APP.GOOGLE_MAPS;
        //    this.launchNavigator.navigate([item.geometry.location.lat,item.geometry.location.lng], {
        //     start: lat1 +',' +longi1,app
        // });
        //}
        //  google.maps.event.addListenerOnce('domready',() =>{
        //   document.getElementById('navigate').addEventListener('click',() =>{
        //     console.log('direcetion clicked')
        //     window.open('https://www.google.com/maps/dir?api=AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w&destination=' +this.lat +',' + this.longi);
        //   })
        // })
    }
    call(place_id) {
        console.log('call clicked', place_id);
        var service = new google.maps.places.PlacesService(this.map);
        var req = { placeId: place_id };
        service.getDetails(req, callback => {
            console.log(callback);
            var data = callback;
            console.log(data);
            if (data.formatted_phone_number) {
                this.callNumber.callNumber(data.formatted_phone_number, true)
                    .then(res => console.log('Launched dialer!', res))
                    .catch(err => console.log('Error launching dialer', err));
                console.log(data.formatted_phone_number);
            }
            else {
                this.presentAlert();
            }
        }, err => {
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var message;
            var btn_msg;
            this.translate.get('contact_number_not_found').subscribe((res) => {
                message = res;
            });
            this.translate.get('Okay').subscribe((res) => {
                btn_msg = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                message: message,
                mode: 'ios',
                buttons: [btn_msg]
            });
            yield alert.present();
        });
    }
    addMarkersToMap(markers) {
        console.log('------------', markers);
        for (let marker of markers) {
            console.log(marker.geometry.location.lat);
            console.log(JSON.stringify(marker.geometry.location.lat));
            let position = new google.maps.LatLng(marker.geometry.location.lat, marker.geometry.location.lng);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.name,
                latitude: marker.geometry.location.lat,
                longitude: marker.geometry.location.lng,
                animation: 'DROP',
                icon: marker.pinicon,
            });
            mapMarker.setMap(this.map);
            // google.maps.event.addListener(mapMarker, 'dragend', function()
            // {
            //   console.log(mapMarker)
            //     var markerlatlong = mapMarker.getPosition();
            //     console.log("latlong   "+markerlatlong);
            //     console.log("lat    "+mapMarker.getPosition().lat());
            //     console.log("long   "+mapMarker.getPosition().lng());
            //     //this.placeMarkerAndPanTo(e.latLng, this.map); commented
            // var lat= JSON.stringify(mapMarker.getPosition().lat());
            // var longi = JSON.stringify(mapMarker.getPosition().lng());
            // localStorage.setItem('lat',lat)                                 
            // localStorage.setItem('longi',longi) 
            // //code for getting formatted address from the selected latitude and longitude 
            // var geocoder = new google.maps.Geocoder();
            // const latlng = {
            //   lat: parseFloat(lat),
            //   lng: parseFloat(longi)
            // };
            // geocoder.geocode(
            //   { location: latlng },
            //   (
            //     results,
            //     status
            //   ) => {
            //     if (status === "OK") {
            //       if (results[0]) {
            //        this.title =  results[0].formatted_address;
            //        localStorage.setItem('address',this.title)
            //        console.log(this.title)
            //        //this.markers = [];
            // var title = localStorage.getItem('address')
            // var lat1 = localStorage.getItem('lat') ;                                
            // var longi1 = localStorage.getItem('longi') 
            // console.log(title)
            // let position = new google.maps.LatLng(lat1, longi1);
            // mapMarker.position = position,
            // mapMarker.title = title,
            // mapMarker.latitude = lat1,
            // mapMarker.longitude = longi1,
            // mapMarker.animation = 'DROP',
            // mapMarker.draggable =true, 
            // mapMarker.setMap(this.map);
            // //var self = this;
            // this.addInfoWindowToMarker(mapMarker);
            // var data = {'latitude' : lat1, 'longitude' : longi1, 'title' : title}
            // this.markers = data;
            // console.log('3',this.markers)
            //       } else {
            //         window.alert("No results found");
            //       }
            //     } else {
            //       window.alert("Geocoder failed due to: " + status);
            //     }
            //   }
            // );
            // }.bind(this));
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        console.log(marker);
        console.log(marker.latitude);
        console.log(marker.longitude);
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
            gestureHandling: 'cooperative',
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false
        };
        console.log(options);
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        let position = new google.maps.LatLng(this.lat, this.longi);
        let mapMarker1 = new google.maps.Marker({
            position: position,
            title: this.address,
            latitude: this.lat,
            longitude: this.longi,
            animation: 'DROP',
        });
        mapMarker1.setMap(this.map);
        var service = new google.maps.places.PlacesService(this.map);
        // for (var i = 0; i < this.markers.length; i++) {
        // var req = {
        //           placeId:this.markers[i].place_id
        //         }
        //         service.getDetails(req,callback =>{
        //           console.log(callback)
        //           var data = callback
        //           console.log(data)
        //           this.markers[i].formatted_address = JSON.stringify(data[i].formatted_address)
        //           this.markers[i].formatted_phone_number = JSON.stringify(data[i].formatted_phone_number)
        //         },err=>{
        //         })
        //       }
        let infoWindowContent1 = '<div id="content">' +
            '<h5 id="firstHeading" class"firstHeading">' + mapMarker1.title + '</h5>' +
            '<p>Latitude: ' + mapMarker1.latitude + '</p>' +
            '<p>Longitude: ' + mapMarker1.longitude + '</p>' +
            '</div>';
        let infoWindow1 = new google.maps.InfoWindow({
            content: infoWindowContent1
        });
        console.log(this.markers);
        this.addMarkersToMap(this.markers);
    }
    police() {
        this.navController.navigateForward(`/police`);
    }
    legal() {
        this.navController.navigateForward(`/legalresources`);
    }
};
PolicelistingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], PolicelistingPage.prototype, "mapRef", void 0);
PolicelistingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policelisting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./policelisting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/policelisting/policelisting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./policelisting.page.scss */ "./src/app/policelisting/policelisting.page.scss")).default]
    })
], PolicelistingPage);



/***/ })

}]);
//# sourceMappingURL=policelisting-policelisting-module-es2015.js.map