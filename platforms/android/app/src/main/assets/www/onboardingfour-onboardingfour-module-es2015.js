(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardingfour-onboardingfour-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingfour/onboardingfour.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingfour/onboardingfour.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-content>\n<div class=\"mainarea\">\n<ion-row>\n      <ion-col size=\"12\" >\n<img src=\"assets/images/icons/logo.svg\"/>\n</ion-col>\n   </ion-row>\n  \n</div>\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\" >\n<div class=\"newtexton\">\n<!-- <h4>You can help by sharing your story!</h4> -->\n<p>{{'together_we_can_fight' | translate}}<br><br> {{'this_is_not_sos_service' | translate}}</p>\n\n\t  <ion-list>\n  <ion-item >\n {{'increase_public_accountability' | translate}}\n  </ion-item>\n   <ion-item >\n{{'increase_resource_allocated' | translate}}\n  </ion-item>\n  <ion-item >\n{{'push_for_policy_change' | translate}}\n  </ion-item>\n\n</ion-list>\n<p class=\"lastline\">{{'do_it_for_you' | translate}}</p>\n</div>\n\n   </ion-col>\n   </ion-row>\n   </div>\n \n</ion-content>\n\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\"  (click)=\"home()\">{{'button_done'  | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n ");

/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OnboardingfourPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingfourPageRoutingModule", function() { return OnboardingfourPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboardingfour_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboardingfour.page */ "./src/app/onboardingfour/onboardingfour.page.ts");




const routes = [
    {
        path: '',
        component: _onboardingfour_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingfourPage"]
    }
];
let OnboardingfourPageRoutingModule = class OnboardingfourPageRoutingModule {
};
OnboardingfourPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingfourPageRoutingModule);



/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingfourPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingfourPageModule", function() { return OnboardingfourPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _onboardingfour_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboardingfour-routing.module */ "./src/app/onboardingfour/onboardingfour-routing.module.ts");
/* harmony import */ var _onboardingfour_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboardingfour.page */ "./src/app/onboardingfour/onboardingfour.page.ts");








let OnboardingfourPageModule = class OnboardingfourPageModule {
};
OnboardingfourPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _onboardingfour_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnboardingfourPageRoutingModule"]
        ],
        declarations: [_onboardingfour_page__WEBPACK_IMPORTED_MODULE_7__["OnboardingfourPage"]]
    })
], OnboardingfourPageModule);



/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  background-color: transparent;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title img {\n  width: 158px;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 25% auto 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:100px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newdot {\n  width: auto;\n  float: left;\n}\n\n.newdot {\n  width: auto;\n  margin: 0 auto;\n}\n\n.newdotin {\n  width: 40px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newdotin ion-list {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  text-align: center;\n}\n\n.newdot {\n  width: auto;\n  float: left;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 180px;\n}\n\n.bannerfirst {\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  position: relative;\n  margin-right: 0;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 12% auto 0;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtexton {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-bottom: 125px;\n  margin-top: 0;\n}\n\n.newtexton p {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  margin-bottom: 0px;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.newtexton p.lastline {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.newtexton .item {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  background-image: url(/assets/images/icons/dot.svg);\n  font-size: 18px !important;\n  background-size: 6px;\n  padding-left: 15px;\n  align-items: self-start;\n  background-position: left 6px;\n  background-repeat: no-repeat;\n  margin: 12px 0;\n  --min-height:inherit;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 250px;\n  background-color: #CCCCCC;\n}\n\n.dotin {\n  width: 6px;\n  height: 6px;\n  border-radius: 250px;\n  background-color: #5F5E5E;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    bottom: inherit;\n    top: 180px;\n    margin-bottom: 25px;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    bottom: inherit;\n    top: 180px;\n    margin-bottom: 25px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (min-device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (min-device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZ2ZvdXIvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcb25ib2FyZGluZ2ZvdXJcXG9uYm9hcmRpbmdmb3VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb25ib2FyZGluZ2ZvdXIvb25ib2FyZGluZ2ZvdXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsNkJBQUE7QUNBQTs7QURHQTtFQUVBLGtCQUFBO0FDREE7O0FESUE7RUFFQSxTQUFBO0FDRkE7O0FES0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FES0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFFQSx1QkFBQTtBQ0pBOztBRE9BO0VBRUEscUJBQUE7QUNMQTs7QURRQTtFQUVBLFlBQUE7QUNOQTs7QURRQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xBOztBRFFBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTkE7O0FEU0E7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ1BBOztBRFVBO0VBRUEsV0FBQTtFQUNBLGNBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNUQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNaQTs7QURlQTtFQUVDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDYkQ7O0FEZ0JBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDYkE7O0FEaUJBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0FDZkE7O0FEa0JFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ2hCRjs7QURtQkE7RUFDQyx5QkFBQTtBQ2hCRDs7QURtQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0FDaEJEOztBRG1CQztFQUVBLHFDQUFBO0FDakJEOztBRG9CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ2xCQTs7QURxQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNuQkE7O0FEcUJBO0VBRUcsZUFBQTtFQUNILGdCQUFBO0FDbkJBOztBRHVCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNJLGtCQUFBO0VBQ0osdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0ksY0FBQTtFQUNILG9CQUFBO0FDckJEOztBRHdCQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNyQko7O0FEMEJBO0VBRUEsT0FBQTtFQUNBLFdBQUE7QUN4QkE7O0FEMEJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUN6QkE7O0FEOEJBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDNUJBOztBRCtCQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQzdCQTs7QURrQ0E7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNqQ0E7O0FEb0NDO0VBSUQ7SUFFQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0VDckNDO0FBQ0Y7O0FEeUNDO0VBSUQ7SUFFQyxlQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0VDM0NDO0FBQ0Y7O0FEK0NDO0VBSUE7SUFFQSx1QkFBQTtFQ2pEQztBQUNGOztBRHlERTtFQUtBO0lBRUQsWUFBQTtJQUNELFlBQUE7SUFDQyxtQkFBQTtFQzVEQztBQUNGOztBRDhEQTtFQUtHO0lBRUYsWUFBQTtJQUNELFlBQUE7SUFDQyxtQkFBQTtFQ2pFQztBQUNGOztBRG9FQTtFQUtHO0lBRUYsWUFBQTtJQUNELFlBQUE7SUFDQyxtQkFBQTtFQ3ZFQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZGluZ2ZvdXIvb25ib2FyZGluZ2ZvdXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItYmFja2dyb3VuZFxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcbn1cclxuICBcclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcbiBcclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcblxyXG5pb24tdGl0bGUgaW1nXHJcbntcclxud2lkdGg6MTU4cHg7XHJcbn1cclxuLm1haW5hcmVhIGltZ3tcclxud2lkdGg6MjQzcHg7XHJcbm1hcmdpbjoyNSUgYXV0byAgMCA7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6MTAwcHg7fVxyXG5cdFxyXG4ubWFpbmFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdkb3Rcclxue1xyXG53aWR0aDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4ubmV3ZG90XHJcbntcclxud2lkdGg6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLm5ld2RvdGluXHJcbntcclxud2lkdGg6NDBweDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdkb3RpbiBpb24tbGlzdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjowIGF1dG87XHJcbmRpc3BsYXk6ZmxleDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdkb3Rcclxue1xyXG53aWR0aDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4ubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE4MHB4O1xyXG59XHJcblxyXG4uYmFubmVyZmlyc3Rcclxue1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRtYXJnaW4tcmlnaHQ6MDtcclxuXHR9XHJcblxyXG4ubWFpbmFyZWEgaW1ne1xyXG53aWR0aDoyNDNweDtcclxubWFyZ2luOjEyJSBhdXRvICAwIDtcclxufVxyXG5cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuICBpb24taXRlbVxyXG4gIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdH1cclxuXHRcclxuLm5ld3RleHRvblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tYm90dG9tOjEyNXB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0b24gcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tYm90dG9tOjBweDtcclxubGluZS1oZWlnaHQ6MjVweDtcclxuZm9udC1zaXplOjE4cHg7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG4ubmV3dGV4dG9uIHAubGFzdGxpbmVcclxue1xyXG4gICBmb250LXNpemU6MThweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5cdFxyXG5cdH1cclxuXHJcbi5uZXd0ZXh0b24gLml0ZW1cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzIyMEUwRTtcclxuYmFja2dyb3VuZC1pbWFnZTp1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90LnN2Zyk7XHJcbmZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQtc2l6ZTogNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5hbGlnbi1pdGVtczogc2VsZi1zdGFydDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA2cHg7XHJcbmJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG5cdC0tbWluLWhlaWdodDppbmhlcml0O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcblxyXG4uZG90XHJcbntcclxud2lkdGg6NnB4O1xyXG5oZWlnaHQ6NnB4O1xyXG5ib3JkZXItcmFkaXVzOjI1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNDQ0NDQ0M7XHJcbn1cclxuXHJcbi5kb3RpblxyXG57XHJcbndpZHRoOjZweDtcclxuaGVpZ2h0OjZweDtcclxuYm9yZGVyLXJhZGl1czoyNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojNUY1RTVFO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4gQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluYXJlYWluXHJcbiB7XHJcbiBib3R0b206aW5oZXJpdDtcclxuIHRvcDoxODBweDtcclxuIG1hcmdpbi1ib3R0b206MjVweDtcclxuIH1cclxuIFxyXG4gfVxyXG4gXHJcbiBAbWVkaWEgKGRldmljZS1oZWlnaHQgOjY0MHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzNjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4ubWFpbmFyZWFpblxyXG4ge1xyXG4gYm90dG9tOmluaGVyaXQ7XHJcbiB0b3A6MTgwcHg7XHJcbiBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiB9XHJcbiBcclxuIH1cclxuIFxyXG4gQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiAubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHggIWltcG9ydGFudDs7XHJcbiBcclxuIH1cclxuIFxyXG5cclxuIFxyXG5cclxuIH1cclxuIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIFxyXG4gICAgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODEycHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMylcclxuICAgeyBcclxuICAubWFpbmFyZWFpblxyXG4ge1xyXG4gYm90dG9tOjcycHg7XHJcbnRvcDppbmhlcml0O1xyXG4gbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgXHJcbiAgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgeyBcclxuICAgLm1haW5hcmVhaW5cclxuIHtcclxuIGJvdHRvbTo3MnB4O1xyXG50b3A6aW5oZXJpdDtcclxuIG1hcmdpbi1ib3R0b206MjVweDtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgICBhbmQgKG1pbi1kZXZpY2UtaGVpZ2h0OiA4OTZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSBcclxuICAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7IFxyXG4gICAubWFpbmFyZWFpblxyXG4ge1xyXG4gYm90dG9tOjcycHg7XHJcbnRvcDppbmhlcml0O1xyXG4gbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gfVxyXG59IiwiLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogMTU4cHg7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjQzcHg7XG4gIG1hcmdpbjogMjUlIGF1dG8gMDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OjEwMHB4O1xufVxuXG4ubWFpbmFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2RvdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm5ld2RvdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5ld2RvdGluIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdkb3RpbiBpb24tbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3ZG90IHtcbiAgd2lkdGg6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODBweDtcbn1cblxuLmJhbm5lcmZpcnN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLm1haW5hcmVhIGltZyB7XG4gIHdpZHRoOiAyNDNweDtcbiAgbWFyZ2luOiAxMiUgYXV0byAwO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld3RleHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi1ib3R0b206IDEyNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dG9uIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dG9uIHAubGFzdGxpbmUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uZXd0ZXh0b24gLml0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzIyMEUwRTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2RvdC5zdmcpO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiA2cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgNnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW46IDEycHggMDtcbiAgLS1taW4taGVpZ2h0OmluaGVyaXQ7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZsZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XG59XG5cbi5kb3RpbiB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVGNUU1RTtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gICAgdG9wOiAxODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gICAgdG9wOiAxODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1haW5hcmVhaW4ge1xuICAgIGJvdHRvbTogNzJweDtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWluLWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubWFpbmFyZWFpbiB7XG4gICAgYm90dG9tOiA3MnB4O1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICBib3R0b206IDcycHg7XG4gICAgdG9wOiBpbmhlcml0O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour.page.ts ***!
  \*******************************************************/
/*! exports provided: OnboardingfourPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingfourPage", function() { return OnboardingfourPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let OnboardingfourPage = class OnboardingfourPage {
    constructor(navController, translate, route, sharedservice, httpClient, router, loadingController) {
        this.navController = navController;
        this.translate = translate;
        this.route = route;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.router = router;
        this.loadingController = loadingController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/user/';
        this.route.queryParams.subscribe(params => {
            this.langaugeId = params["langaugeId"];
            this.countryId = params["countryId"];
            this.cityId = params["cityId"];
            this.orgId = params["orgId"];
            console.log("countryId", this.countryId);
            console.log("langaugeId", this.langaugeId);
            console.log("city", this.cityId);
            console.log("orgid", this.orgId);
        });
    }
    ngOnInit() {
    }
    home() {
        let data = new FormData();
        data.append('security_key', '80b9d8f6dc4beeebd22ba44af9f247eadf13170b');
        data.append('country_id', this.countryId);
        data.append('language_id', this.langaugeId);
        data.append('city_id', this.cityId);
        data.append('organisation_id', this.orgId);
        data.append('age', '1');
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('user/userRegistration', data).subscribe((rdata) => {
            console.log(rdata);
            console.log(rdata);
            // this.presentLoading()
            if (rdata.status == true) {
                localStorage.setItem('userId', rdata.data.id);
                this.navController.navigateForward('/home');
            }
            else {
                this.router.navigate(['languageselection']);
                //  this.navController.(`/languageselection`);
                // this.navController.navigateForward('languageselection')
            }
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl+'userRegistration',data)
        // .subscribe((rdata: any) => {
        //   console.log(rdata);
        //   this.presentLoading()
        //   if(rdata.status == true)
        //   {
        //     localStorage.setItem('userId', rdata.data.id)
        //     this.navController.navigateForward('/home')
        //   }
        //   else{
        //     this.router.navigate(['languageselection'])
        //     //  this.navController.(`/languageselection`);
        //     // this.navController.navigateForward('languageselection')
        //   }
        //   },error => {
        // });
    }
    //  home() 
    //  {
    //      this.navController.navigateForward('home')
    //  }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
        });
    }
};
OnboardingfourPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
OnboardingfourPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboardingfour',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboardingfour.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingfour/onboardingfour.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboardingfour.page.scss */ "./src/app/onboardingfour/onboardingfour.page.scss")).default]
    })
], OnboardingfourPage);



/***/ })

}]);
//# sourceMappingURL=onboardingfour-onboardingfour-module-es2015.js.map