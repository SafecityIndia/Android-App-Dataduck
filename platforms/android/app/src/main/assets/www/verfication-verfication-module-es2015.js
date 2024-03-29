(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verfication-verfication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verfication/verfication.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verfication/verfication.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"mainarea\">\n    <img src=\"assets/images/icons/logo.svg\" />\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n        \n\t\t<ion-item mode=\"ios\">\n\t\t <ion-label class=\"newlabel\" position=\"stacked\">{{'enter_verifi' | translate }}\n            </ion-label>\n         <ion-input  (ionChange) = \"verification($event)\"></ion-input>\n        </ion-item>\n\t\t    <span >{{'please_enter' | translate }}</span>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n <div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"language()\" [disabled]=\"buttondisable\" >{{'verify' | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n<!-- <div class=\"bottom\"> -->\n\n<!-- </div> -->");

/***/ }),

/***/ "./src/app/verfication/verfication-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/verfication/verfication-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VerficationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerficationPageRoutingModule", function() { return VerficationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verfication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verfication.page */ "./src/app/verfication/verfication.page.ts");




const routes = [
    {
        path: '',
        component: _verfication_page__WEBPACK_IMPORTED_MODULE_3__["VerficationPage"]
    }
];
let VerficationPageRoutingModule = class VerficationPageRoutingModule {
};
VerficationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerficationPageRoutingModule);



/***/ }),

/***/ "./src/app/verfication/verfication.module.ts":
/*!***************************************************!*\
  !*** ./src/app/verfication/verfication.module.ts ***!
  \***************************************************/
/*! exports provided: VerficationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerficationPageModule", function() { return VerficationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verfication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verfication-routing.module */ "./src/app/verfication/verfication-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _verfication_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verfication.page */ "./src/app/verfication/verfication.page.ts");








let VerficationPageModule = class VerficationPageModule {
};
VerficationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _verfication_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerficationPageRoutingModule"]
        ],
        declarations: [_verfication_page__WEBPACK_IMPORTED_MODULE_7__["VerficationPage"]]
    })
], VerficationPageModule);



/***/ }),

/***/ "./src/app/verfication/verfication.page.scss":
/*!***************************************************!*\
  !*** ./src/app/verfication/verfication.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 35% auto 0;\n}\n\n.alert-head.sc-ion-alert-ios {\n  display: none !important;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 16px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 11px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-input {\n  border: 1px solid #ddd;\n  height: 40px;\n  --padding-start: 12px !important;\n}\n\n.newselect span {\n  color: #BA0B0B;\n  font-size: 14px;\n  text-align: left;\n  float: left;\n  padding-top: 8px;\n}\n\n.newsidearea {\n  width: 100%;\n  height: auto;\n}\n\n.newsidearea ion-label {\n  width: 100%;\n  height: auto;\n  flex: 1 1 0%;\n}\n\n.newsidearea .in-item {\n  padding-right: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.newsidearea .in-item[slot=start] {\n  margin: 3px 15px 0px 4px;\n}\n\n.newsidearea ion-item {\n  width: 50%;\n  float: left;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 6px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  --min-height: 44px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 28%;\n}\n\n.newselect p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  line-height: 21px;\n  text-align: left;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n\n.newselect.newselect h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  font-family: \"Mangal\";\n  line-height: 24px;\n  font-family: \"Lato\";\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 0;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 20px auto 40px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0;\n  }\n\n  .newselect {\n    margin-top: 70px;\n  }\n\n  .newselect p {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 32% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 40% auto 0;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .newselect p {\n    margin-top: 90px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 81px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 66px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyZmljYXRpb24vRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcdmVyZmljYXRpb25cXHZlcmZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVyZmljYXRpb24vdmVyZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUE7O0FER0E7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBQTs7QURFQTtFQUVBLHdCQUFBO0FDQUE7O0FER0E7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0VBQ0osa0JBQUE7RUFDSSxvQkFBQTtBQ0FKOztBREVBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNBQTs7QURFQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBQTs7QURHQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDREE7O0FESUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNGQTs7QURLQTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQyxlQUFBO0FDSEw7O0FETUE7RUFFQSx3QkFBQTtBQ0pBOztBRE1BO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUNKQTs7QURPRTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjs7QURRQTtFQUNDLHlCQUFBO0FDTEQ7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0VBRUksa0JBQUE7QUNOTDs7QURTQztFQUVBLHFDQUFBO0VBQ0EseUJBQUE7RUFDSSxrQkFBQTtBQ1BMOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1JBOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNWQTs7QURjQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDWkE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ2JBOztBRGdCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURpQkE7RUFFQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURrQkE7RUFDQSxXQUFBO0FDZkE7O0FEb0JBO0VBRUM7SUFFSSxrQkFBQTtFQ25CSDs7RURzQkQ7SUFDQSxnQkFBQTtFQ25CQzs7RURzQkQ7SUFDQSxnQkFBQTtFQ25CQztBQUNGOztBRHNCQztFQUlBO0lBRUEsdUJBQUE7SUFDQSw2QkFBQTtFQ3hCQztBQUNGOztBRDhCQztFQUlDO0lBR0Qsa0JBQUE7RUNqQ0M7QUFDRjs7QURxQ0M7RUFJQTtJQUNJLGdCQUFBO0VDdENIO0FBQ0Y7O0FEMENDO0VBSUE7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUM1Q0M7O0VEK0NEO0lBQ0EsZ0JBQUE7RUM1Q0M7QUFDRjs7QURpREE7RUFJQztJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQ25EQzs7RURzREQ7SUFDQSxnQkFBQTtFQ25EQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmVyZmljYXRpb24vdmVyZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5hcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubWFpbmFyZWEgaW1ne1xyXG53aWR0aDoyMzVweDtcclxubWFyZ2luOjM1JSBhdXRvICAwIDtcclxufVxyXG4uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zXHJcbntcclxuZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxudHJhbnNmb3JtOmluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxufVxyXG5pb24taW5wdXQge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiAxMnB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5uZXdzZWxlY3Qgc3BhblxyXG57XHJcbmNvbG9yOiNCQTBCMEI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmZsb2F0OmxlZnQ7XHJcbnBhZGRpbmctdG9wOjhweDtcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbn1cclxuXHJcbi5uZXdzaWRlYXJlYSBpb24tbGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxleDoxIDEgMCU7XHJcbn1cclxuXHJcbi5uZXdzaWRlYXJlYSAuaW4taXRlbVxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHQgICAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuXHJcbi5uZXdzaWRlYXJlYSAuaW4taXRlbVtzbG90PVwic3RhcnRcIl1cclxue1xyXG5tYXJnaW46IDNweCAxNXB4IDBweCA0cHg7XHJcbn1cclxuLm5ld3NpZGVhcmVhICBpb24taXRlbVxyXG57XHJcbndpZHRoOjUwJTtcclxuZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuICBpb24taXRlbVxyXG4gIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0XHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuXHQgICAgLS1taW4taGVpZ2h0OiA0NHB4O1xyXG5cdH1cclxuXHRcclxuLm5ld3NlbGVjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxubWFyZ2luLXRvcDoyOCU7XHJcbn1cclxuXHJcbi5uZXdzZWxlY3QgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5jb2xvcjojMjkyMDIwO1xyXG5saW5lLWhlaWdodDoyMXB4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbm1hcmdpbi1ib3R0b206OHB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXdzZWxlY3QubmV3c2VsZWN0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtZmFtaWx5OiAnTWFuZ2FsJztcclxubGluZS1oZWlnaHQ6MjRweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5tYXJnaW4tdG9wOjA7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuXHJcbmlvbi1sYWJlbFxyXG57XHJcbmZsZXg6MDtcclxud2lkdGg6MTAwJTtcclxufVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjA7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjoyMHB4IGF1dG8gNDBweDtcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5zZWxlY3QtcGxhY2Vob2xkZXIgXHJcbntcclxubWluLXdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxud2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5mbGV4OjAgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweCkgYW5kKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMilcclxuXHR7XHJcblx0Lm1haW5hcmVhIGltZ1xyXG5cdHtcclxuXHQgICAgbWFyZ2luOiAyOSUgYXV0byAwO1xyXG5cdH1cclxuXHRcclxuXHQubmV3c2VsZWN0e1xyXG5cdG1hcmdpbi10b3A6NzBweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld3NlbGVjdCBwe1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxuXHR9XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoIDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0IDogNzM2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpIHsgXHJcblx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIzNXB4ICFpbXBvcnRhbnQ7XHJcbiBtYXJnaW46IDMyJSBhdXRvIDAgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gXHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgXHJcblx0XHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcblxyXG4gbWFyZ2luOiA0MCUgYXV0byAwO1xyXG4gfVxyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7IFxyXG5cdC5uZXdzZWxlY3QgcHtcclxuXHQgICAgbWFyZ2luLXRvcDogOTBweDtcclxuXHRcclxuXHR9XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgXHJcblx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4O1xyXG4gbWFyZ2luOiAyMCUgYXV0byAwO1xyXG4gfVxyXG4gXHJcbiAubmV3c2VsZWN0e1xyXG4gbWFyZ2luLXRvcDogODFweDtcclxufVxyXG5cclxuIFxyXG5cdH1cclxuXHRcclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiAubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHg7XHJcbiBtYXJnaW46IDIwJSBhdXRvIDA7XHJcbiB9XHJcbiBcclxuIC5uZXdzZWxlY3R7XHJcbiBtYXJnaW4tdG9wOiA2NnB4O1xyXG59XHJcblxyXG5cclxuIH1cclxuICBcclxuXHJcbiIsIi5tYWluYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbmFyZWEgaW1nIHtcbiAgd2lkdGg6IDIzNXB4O1xuICBtYXJnaW46IDM1JSBhdXRvIDA7XG59XG5cbi5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdzZWxlY3Qgc3BhbiB7XG4gIGNvbG9yOiAjQkEwQjBCO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ubmV3c2lkZWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3c2lkZWFyZWEgaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMSAxIDAlO1xufVxuXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uZXdzaWRlYXJlYSAuaW4taXRlbVtzbG90PXN0YXJ0XSB7XG4gIG1hcmdpbjogM3B4IDE1cHggMHB4IDRweDtcbn1cblxuLm5ld3NpZGVhcmVhIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG4uc2VsZWN0LXRleHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmluLWl0ZW0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbn1cblxuLm5ld3NlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMjglO1xufVxuXG4ubmV3c2VsZWN0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3c2VsZWN0Lm5ld3NlbGVjdCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIk1hbmdhbFwiO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiAyOSUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDMyJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDQwJSBhdXRvIDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA4MXB4O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/verfication/verfication.page.ts":
/*!*************************************************!*\
  !*** ./src/app/verfication/verfication.page.ts ***!
  \*************************************************/
/*! exports provided: VerficationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerficationPage", function() { return VerficationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let VerficationPage = class VerficationPage {
    constructor(router, navController, route) {
        this.router = router;
        this.navController = navController;
        this.route = route;
        this.orgArray = [];
        this.showError = false;
        this.buttondisable = true;
        this.route.queryParams.subscribe(params => {
            this.countryId = params["countryId"];
            this.cityId = params["cityId"];
            this.orgId = params["orgId"];
            console.log("orgid", this.orgId);
            this.orgArray = this.orgId.split(',');
            localStorage.setItem('ov_code', this.orgArray[1]);
            console.log("array", this.orgArray);
            console.log("countryId", this.countryId);
            console.log("city", this.cityId);
        });
    }
    ngOnInit() {
    }
    verification(e) {
        console.log(e.detail.value);
        if (e.detail.value != this.orgArray[1]) {
            this.showError = true;
            this.buttondisable = true;
        }
        else {
            this.showError = false;
            this.buttondisable = false;
        }
    }
    language() {
        localStorage.setItem('Client_id', this.orgArray[0]);
        //  if(localStorage.getItem('ngo_id') == '0')
        //  {
        let navigationExtras = {
            queryParams: {
                countryId: this.countryId,
                cityId: this.cityId,
                orgId: this.orgArray[0]
            }
        };
        this.navController.navigateRoot([`/languageselection`], navigationExtras);
        //  }
        //  else
        //  { 
        //   let navigationExtras: NavigationExtras = {
        //     queryParams: {
        //       countryId:this.countryId,
        //        cityId:this.cityId,
        //        orgId:this.orgArray[0]
        //     }
        //   };
        //   this.navController.navigateForward([`ngopartner`], navigationExtras);
        //  }
    }
};
VerficationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
VerficationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verfication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verfication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verfication/verfication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verfication.page.scss */ "./src/app/verfication/verfication.page.scss")).default]
    })
], VerficationPage);



/***/ })

}]);
//# sourceMappingURL=verfication-verfication-module-es2015.js.map