(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysafetyreport-mysafetyreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafetyreport/mysafetyreport.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mysafetyreport/mysafetyreport.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/viewsafety' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <div class=\"sidearea\" slot=\"end\">\n<h5 (click)=\"edit()\"> {{'map_edit_option' | translate }}</h5> \n<h5 (click)=\"presentAlertRadio()\"> {{'delete' | translate}}</h5> \n</div>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"mainsafety\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<ion-row >\n      <ion-col size=\"12\">\n<h4>{{title}}</h4>\n </ion-col>\n   \n   </ion-row>\n <ion-row >\n      <ion-col size=\"12\">\n <div class=\"newcalendarin\">\n<img src=\"assets/images/icons/calendar.svg\"/>\n <p>{{getDaysAgo}} {{time2}}</p></div>\n <div class=\"newcalendarin\">\n       <img src=\"assets/images/icons/location.svg\"/>\n       <p>{{location}}</p>\n\t   </div>\n<p>{{disc}}</p>\n</ion-col>\n   </ion-row>\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/mysafetyreport/mysafetyreport-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mysafetyreport/mysafetyreport-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MysafetyreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysafetyreportPageRoutingModule", function() { return MysafetyreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mysafetyreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mysafetyreport.page */ "./src/app/mysafetyreport/mysafetyreport.page.ts");




const routes = [
    {
        path: '',
        component: _mysafetyreport_page__WEBPACK_IMPORTED_MODULE_3__["MysafetyreportPage"]
    }
];
let MysafetyreportPageRoutingModule = class MysafetyreportPageRoutingModule {
};
MysafetyreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MysafetyreportPageRoutingModule);



/***/ }),

/***/ "./src/app/mysafetyreport/mysafetyreport.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mysafetyreport/mysafetyreport.module.ts ***!
  \*********************************************************/
/*! exports provided: MysafetyreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysafetyreportPageModule", function() { return MysafetyreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mysafetyreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mysafetyreport-routing.module */ "./src/app/mysafetyreport/mysafetyreport-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _mysafetyreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mysafetyreport.page */ "./src/app/mysafetyreport/mysafetyreport.page.ts");








let MysafetyreportPageModule = class MysafetyreportPageModule {
};
MysafetyreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mysafetyreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["MysafetyreportPageRoutingModule"]
        ],
        declarations: [_mysafetyreport_page__WEBPACK_IMPORTED_MODULE_7__["MysafetyreportPage"]]
    })
], MysafetyreportPageModule);



/***/ }),

/***/ "./src/app/mysafetyreport/mysafetyreport.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/mysafetyreport/mysafetyreport.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-alert [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios {\n  border-color: #2ED35A;\n}\n\n.my-custom-class inputs {\n  border-bottom: 1px solid #ddd;\n}\n\n.alert-radio-group.sc-ion-alert-ios {\n  border-top: none;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainsafety {\n  width: 100%;\n  height: auto;\n  margin-top: 40px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 4px;\n  margin-top: 0;\n}\n\n.newcalendarin {\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 12px;\n}\n\n.newcalendarin p {\n  font-size: 14px;\n  margin-top: 0px;\n  margin-bottom: 0;\n}\n\n.newcalendarin img {\n  width: 17px;\n  margin-right: 6px;\n}\n\n.sidearea {\n  width: 100%;\n  height: auto;\n  float: right;\n  text-align: right;\n  margin-right: 12px;\n}\n\n.sidearea h5 {\n  width: auto;\n  height: auto;\n  color: #592D8D;\n  margin-top: 8px;\n  font-size: 15px;\n  font-weight: 400;\n  text-align: right;\n  padding-left: 20px;\n  display: inline-block;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlzYWZldHlyZXBvcnQvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcbXlzYWZldHlyZXBvcnRcXG15c2FmZXR5cmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlzYWZldHlyZXBvcnQvbXlzYWZldHlyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUVBLHFCQUFBO0FDSEE7O0FETUE7RUFFQSw2QkFBQTtBQ0pBOztBRE9BO0VBR0EsZ0JBQUE7QUNOQTs7QURTQTtFQUlBLDhDQUFBO0FDUEE7O0FEV0E7RUFFQSx1QkFBQTtBQ1RBOztBRFlBO0VBRUEscUJBQUE7QUNWQTs7QURZQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDVko7O0FEWUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ1ZBOztBRGNBO0VBQ0EsY0FBQTtBQ1hBOztBRGNBO0VBQ0EsZ0JBQUE7QUNYQTs7QURjQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNaSjs7QURjQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNaSjs7QURjQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNaQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNaQTs7QURlQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYkE7O0FEZ0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDZEE7O0FEaUJBO0VBRUMsV0FBQTtFQUNELG9CQUFBO0VBQ0EsbUJBQUE7QUNmQTs7QURpQkM7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZEQ7O0FEbUJDO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDakJEOztBRHFCQztFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQkQ7O0FEcUJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ2xCRDs7QURxQkM7RUFFQyxlQUFBO0VBQ0Usa0JBQUE7QUNuQko7O0FEd0JDO0VBSUE7SUFFRSxrQkFBQTtJQUNDLG1CQUFBO0VDekJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9teXNhZmV0eXJlcG9ydC9teXNhZmV0eXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWFsZXJ0IFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcbmJvcmRlci1jb2xvcjojMkVEMzVBO1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIGlucHV0c1xyXG57XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5hbGVydC1yYWRpby1ncm91cC5zYy1pb24tYWxlcnQtaW9zXHJcbntcclxuXHJcbmJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5tYWluc2FmZXR5XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6NDBweDtcclxufVxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMxODE3MTk7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MjVweDtcclxuY29sb3I6IzU5MkQ4RDtcclxubWFyZ2luLWJvdHRvbTogNHB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXdjYWxlbmRhcmluXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbm1hcmdpbi1ib3R0b206MTJweDtcclxuXHR9XHJcblx0Lm5ld2NhbGVuZGFyaW4gcHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRtYXJnaW4tdG9wOjBweDtcclxuXHRtYXJnaW4tYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC5uZXdjYWxlbmRhcmluIGltZ1xyXG5cdHtcclxuXHR3aWR0aDoxN3B4O1xyXG5cdG1hcmdpbi1yaWdodDo2cHg7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC5zaWRlYXJlYVxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDphdXRvO1xyXG5cdGZsb2F0OnJpZ2h0O1xyXG5cdHRleHQtYWxpZ246cmlnaHQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cdH1cclxuLnNpZGVhcmVhIGg1e1xyXG5cdHdpZHRoOmF1dG87XHJcblx0aGVpZ2h0OmF1dG87XHJcblx0Y29sb3I6IzU5MkQ4RDtcclxuXHRtYXJnaW4tdG9wOjhweDtcclxuXHRmb250LXNpemU6MTVweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0dGV4dC1hbGlnbjpyaWdodDtcclxuXHRwYWRkaW5nLWxlZnQ6MjBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1sYWJlbFxyXG5cdHtcclxuXHQgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG5cdH1cclxuXHRcclxuXHRcclxuXHRAbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIGlvbi10aXRsZVxyXG57XHJcbiAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbn0gXHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWFsZXJ0IFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogIzJFRDM1QTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyBpbnB1dHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbnNhZmV0eSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTgxNzE5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld2NhbGVuZGFyaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5uZXdjYWxlbmRhcmluIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5ld2NhbGVuZGFyaW4gaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uc2lkZWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5zaWRlYXJlYSBoNSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICBpb24tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/mysafetyreport/mysafetyreport.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/mysafetyreport/mysafetyreport.page.ts ***!
  \*******************************************************/
/*! exports provided: MysafetyreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysafetyreportPage", function() { return MysafetyreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let MysafetyreportPage = class MysafetyreportPage {
    constructor(route, translate, sharedservice, httpClient, navController, router, alertController) {
        this.route = route;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/safety-tip/';
        this.route.queryParams.subscribe(params => {
            this.safety_tip_id = params['safety_tip_id'];
            this.pagename = params['pagename'];
            console.log("safety_id", this.safety_tip_id);
            console.log("pagename", this.pagename);
            if (this.pagename == 'safetyTip') {
                localStorage.setItem("editSafety_id", this.safety_tip_id);
                console.log("safety_id", this.safety_tip_id);
            }
            this.safetyTipDisc();
        });
    }
    ngOnInit() {
    }
    edit() {
        let navigationExtras = {
            queryParams: {
                location: this.safetyReport.data.exact_location,
                city: this.safetyReport.data.city,
                state: this.safetyReport.data.state,
                country: this.safetyReport.data.country,
                landmark: this.safetyReport.data.landmark,
                lat: this.safetyReport.data.latitude,
                long: this.safetyReport.data.longitude,
                safety_title: this.safetyReport.data.safety_tip_title,
                safety_desc: this.safetyReport.data.safety_tip_desc,
                safety_tip_id: this.safety_tip_id
            }
        };
        this.navController.navigateForward([`/editsafetytip`], navigationExtras);
    }
    presentAlertRadio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var message;
            var cancel;
            var button_done;
            var del_From_Phone;
            var del_from_safecity;
            this.translate.get('del_From_Phone').subscribe((res) => {
                del_From_Phone = res;
            });
            this.translate.get('del_from_safecity').subscribe((res) => {
                del_from_safecity = res;
            });
            this.translate.get('select_one').subscribe((res) => {
                message = res;
            });
            this.translate.get('button_done').subscribe((res) => {
                button_done = res;
            });
            this.translate.get('cancel').subscribe((res) => {
                cancel = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'newclass',
                header: message,
                mode: 'ios',
                inputs: [
                    {
                        name: del_From_Phone,
                        type: 'radio',
                        label: del_From_Phone,
                        value: 'value1',
                    },
                    {
                        name: del_from_safecity,
                        type: 'radio',
                        label: del_from_safecity,
                        value: 'value2'
                    },
                ],
                buttons: [
                    {
                        text: cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: button_done,
                        handler: (alertData) => {
                            console.log('Confirm Ok', alertData);
                            if (alertData == 'value1') {
                                this.type = 'mobile';
                            }
                            else {
                                this.type = 'web';
                            }
                            this.deleteSafetyTip();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteSafetyTip() {
        //   user_id:0
        // safety_tip_id:3
        // delete_from:mobile (web/mobile)
        var userId = localStorage.getItem('userId');
        let data = new FormData();
        data.append('user_id', userId);
        data.append('safety_tip_id', this.safety_tip_id);
        data.append('delete_from', this.type);
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('safety-tip/delete', data).subscribe((rdata) => {
            if (rdata.status == true) {
                this.navController.navigateRoot('/mysafety');
            }
            console.log(rdata);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl+'delete',data)
        //   .subscribe((rdata: any) => {
        //     if(rdata.message == 'Safety Tip deleted successfully')
        //     {
        //       this.navController.navigateRoot('/mysafety')
        //     }
        //     console.log(rdata);
        //     }, error => {
        //   });
    }
    safetyTipDisc() {
        var userId = localStorage.getItem('userId');
        var lanId = localStorage.getItem('Lang_id');
        this.safety_id = localStorage.getItem('editSafety_id');
        console.log(this.safety_id);
        let data = new FormData();
        data.append('lang_id', lanId);
        data.append('safety_tip_id', this.safety_id);
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('safety-tip/details', data).subscribe((rdata) => {
            this.safetyReport = rdata;
            this.title = this.safetyReport.data.safety_tip_title;
            this.disc = this.safetyReport.data.safety_tip_desc;
            this.location = this.safetyReport.data.location;
            var safety_tip_added_date = this.safetyReport.data.added_date != null ? this.safetyReport.data.added_date : "";
            var dayBetween = this.days_between(safety_tip_added_date);
            var time1 = this.safetyReport.data.added_date.substr(11, 19);
            // console.log("time", time1)
            this.time2 = this.timeConvert(time1);
            this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(safety_tip_added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl +'details',data)
        //   .subscribe((rdata: any) => {
        //     this.safetyReport = rdata
        //     this.title = this.safetyReport.data.safety_tip_title
        //     this.disc = this.safetyReport.data.safety_tip_desc
        //     this.location = this.safetyReport.data.location
        //     var safety_tip_added_date = this.safetyReport.data.added_date != null ? this.safetyReport.data.added_date : "";
        //     var dayBetween = this.days_between(safety_tip_added_date);
        //     var time1 = this.safetyReport.data.added_date.substr(11,19);
        //     // console.log("time", time1)
        //     this.time2 = this.timeConvert(time1)
        //     this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(safety_tip_added_date,1) : (dayBetween==0) ? 'Today' : (dayBetween==1) ? dayBetween+" day ago" : dayBetween+" days ago");
        //    }, error => {
        //   });
    }
    days_between(date) {
        // The number of milliseconds in one day
        var date1;
        date1 = new Date(date);
        var todays_date;
        todays_date = new Date();
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(todays_date - date1);
        var daydiff = Math.round(differenceMs / ONE_DAY);
        return daydiff;
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
    ChangeDateFormat(date, val) {
        var dayDate = new Date(date);
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
};
MysafetyreportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
MysafetyreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mysafetyreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mysafetyreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafetyreport/mysafetyreport.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mysafetyreport.page.scss */ "./src/app/mysafetyreport/mysafetyreport.page.scss")).default]
    })
], MysafetyreportPage);



/***/ })

}]);
//# sourceMappingURL=mysafetyreport-mysafetyreport-module-es2015.js.map