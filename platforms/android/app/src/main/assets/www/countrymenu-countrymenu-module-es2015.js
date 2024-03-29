(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["countrymenu-countrymenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenu/countrymenu.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenu/countrymenu.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'country' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainselect\">\n\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n\n          <!-- <ion-label class=\"newlabel\" position=\"stacked\">{{'home_country_your_country' | translate }}</ion-label> -->\n          <!-- <ion-searchbar placeholder=\"Filter Schedules\"></ion-searchbar> -->\n\n\n          <!-- <form [formGroup]=\"form\"> -->\n          <!-- <ion-item >    \n    <ion-label class=\"newlabel\" position=\"stacked\">{{'home_country_your_country' | translate }}</ion-label>\n    <ion-select placeholder=\"{{'select_one' | translate}}\" [(ngModel)]=\"country\" (ionChange) = \"getCountry($event)\">\n      <ion-select-option *ngFor=\"let item of country_list\"  value=\"{{item.country_id}}\">{{item.country_name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item> -->\n          <ion-item>\n            <ion-label class=\"newlabel\"   position=\"stacked\">\n              {{'home_country_your_country' | translate }}\n            </ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCountry($event)\"\n              [(ngModel)]=\"countryName\" placeholder=\"Search for Location\" disabled=\"false\" debounce=\"500\">\n            </ion-searchbar>\n            <div class=\"newserchlist\" *ngIf=\"isItemAvailable && showCountrylist\">\n              <ion-item (click)=\"selectedLocation(item)\" *ngFor=\"let item of countryList\">{{item.country_name}}\n              </ion-item>\n            </div>\n          </ion-item>\n          <!-- </form> -->\n\n          <ion-item>\n            <ion-label class=\"newlabel\" position=\"stacked\">{{'select_city' | translate}}</ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCity($event)\"\n              [(ngModel)]=\"searchTerm\" placeholder=\"Search for city\" disabled=\"false\" debounce=\"500\"></ion-searchbar>\n\n            <!-- <ion-item> -->\n\n            <!-- <ion-select placeholder=\"{{'select_one' | translate}}\"  > -->\n\n            <div class=\"newserchlist\" *ngIf=\"hide_city_search\">\n              <ion-item (click)=\"selectedcity(item)\" *ngFor=\"let item of city_list\">{{item.city_name}}</ion-item>\n            </div>\n          </ion-item>\n          <!-- \n\t  \n      </ion-select-option>\n    </ion-select> -->\n          <!-- </ion-item> -->\n        </div>\n        <!-- </form> -->\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/countrymenu/countrymenu-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/countrymenu/countrymenu-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CountrymenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenuPageRoutingModule", function() { return CountrymenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _countrymenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countrymenu.page */ "./src/app/countrymenu/countrymenu.page.ts");




const routes = [
    {
        path: '',
        component: _countrymenu_page__WEBPACK_IMPORTED_MODULE_3__["CountrymenuPage"]
    }
];
let CountrymenuPageRoutingModule = class CountrymenuPageRoutingModule {
};
CountrymenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CountrymenuPageRoutingModule);



/***/ }),

/***/ "./src/app/countrymenu/countrymenu.module.ts":
/*!***************************************************!*\
  !*** ./src/app/countrymenu/countrymenu.module.ts ***!
  \***************************************************/
/*! exports provided: CountrymenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenuPageModule", function() { return CountrymenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _countrymenu_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countrymenu-routing.module */ "./src/app/countrymenu/countrymenu-routing.module.ts");
/* harmony import */ var _countrymenu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countrymenu.page */ "./src/app/countrymenu/countrymenu.page.ts");








let CountrymenuPageModule = class CountrymenuPageModule {
};
CountrymenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _countrymenu_routing_module__WEBPACK_IMPORTED_MODULE_6__["CountrymenuPageRoutingModule"]
        ],
        declarations: [_countrymenu_page__WEBPACK_IMPORTED_MODULE_7__["CountrymenuPage"]]
    })
], CountrymenuPageModule);



/***/ }),

/***/ "./src/app/countrymenu/countrymenu.page.scss":
/*!***************************************************!*\
  !*** ./src/app/countrymenu/countrymenu.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainselect {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 70px;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nion-item {\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.newserchlist {\n  height: 200px;\n  width: 1px solid #ddd;\n  overflow: scroll;\n  width: 100%;\n  padding: 0 10px;\n  border-bottom: 2px solid #ddd;\n  border: 1px solid #ddd;\n}\n\n.newserchlist ion-item {\n  margin-bottom: 0;\n  --min-height: 38px;\n}\n\nion-searchbar .searchbar-input {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.mainselect ion-searchbar {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  --background:transparent;\n  padding: 0;\n}\n\n.mainselect .sc-ion-searchbar-ios-h {\n  --background:transparent;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: 1px solid #ddd;\n  height: 42px;\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n  padding: 0;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  margin-bottom: 28px;\n  border: 0;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 0;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 400;\n  margin-bottom: 15px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 600;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow:0;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0 !important;\n  }\n\n  .newselect {\n    margin-top: 70px !important;\n  }\n\n  .newselect p {\n    margin-top: 10px !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 40% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 50% auto 0 !important;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n    margin: 20% auto 0 !important;\n  }\n\n  .newselect p {\n    margin-top: 66px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeW1lbnUvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcY291bnRyeW1lbnVcXGNvdW50cnltZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291bnRyeW1lbnUvY291bnRyeW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSQTs7QURjQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ1pBOztBRGVFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ2JGOztBRGdCQTtFQUNDLHlCQUFBO0FDYkQ7O0FEZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtBQ2JEOztBRGVBO0VBRUEsbUNBQUE7RUFDSSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0osMkJBQUE7QUNiQTs7QURnQkE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ2RBOztBRGlCQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURpQkU7RUFFRix3QkFBQTtVQUFBLHVCQUFBO0FDZkE7O0FEaUJBO0VBRUEsd0JBQUE7VUFBQSx1QkFBQTtFQUNJLHNCQUFBO1VBQUEscUJBQUE7RUFDSCx3QkFBQTtFQUNBLFVBQUE7QUNmRDs7QURrQkE7RUFFQSx3QkFBQTtFQUNBLGNBQUE7RUFDSSxpQkFBQTtFQUNILHNCQUFBO0VBQ0EsWUFBQTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7RUFDSCxVQUFBO0FDaEJGOztBRG9CQztFQUVBLHFDQUFBO0VBQ0kseUJBQUE7RUFDSCxtQkFBQTtFQUNBLFNBQUE7QUNsQkY7O0FEcUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ25CQTs7QUR3QkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0VBQ0gsa0JBQUE7RUFDQSxvQkFBQTtBQ3JCRDs7QUQwQkE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtBQ3hCQTs7QUQwQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ3pCQTs7QUQ0QkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFFQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUM1QkE7O0FEOEJBO0VBRUEsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDNUJBOztBRCtCQTtFQUNBLFdBQUE7QUM1QkE7O0FEaUNBO0VBRUM7SUFFSSw2QkFBQTtFQ2hDSDs7RURtQ0Q7SUFDQSwyQkFBQTtFQ2hDQzs7RURtQ0Q7SUFDQSwyQkFBQTtFQ2hDQztBQUNGOztBRG1DQztFQUlBO0lBRUEsdUJBQUE7SUFDQSw2QkFBQTtFQ3JDQztBQUNGOztBRDJDQztFQUlDO0lBR0QsNkJBQUE7RUM5Q0M7QUFDRjs7QURrREE7RUFJQztJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUNwREM7O0VEd0REO0lBQ0ksMkJBQUE7RUNyREg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnltZW51L2NvdW50cnltZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcbi5tYWluc2VsZWN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tdG9wOjcwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuICBpb24taXRlbVxyXG4gIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5pb24taXRlbVxyXG57XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmV3c2VyY2hsaXN0XHJcbntcclxuaGVpZ2h0OjIwMHB4O1xyXG53aWR0aDoxcHggc29saWQgI2RkZDtcclxub3ZlcmZsb3c6c2Nyb2xsO1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTBweDtcclxuYm9yZGVyLWJvdHRvbToycHggc29saWQgI2RkZDtcclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubmV3c2VyY2hsaXN0IGlvbi1pdGVtIFxyXG57XHJcbm1hcmdpbi1ib3R0b206MDtcclxuLS1taW4taGVpZ2h0OiAzOHB4O1xyXG59XHJcbiAgaW9uLXNlYXJjaGJhciAuc2VhcmNoYmFyLWlucHV0XHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcclxufVxyXG4ubWFpbnNlbGVjdCBpb24tc2VhcmNoYmFyXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuXHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0cGFkZGluZzowO1xyXG59XHJcblxyXG4ubWFpbnNlbGVjdCAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaFxyXG57XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxucGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHRib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcblx0aGVpZ2h0OjQycHg7XHJcblx0ICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XHJcblx0XHRwYWRkaW5nOjA7XHJcbn1cclxuXHJcblxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdCAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbToyOHB4O1xyXG5cdFx0Ym9yZGVyOjA7XHJcblx0fVxyXG5cdFxyXG4ubmV3c2VsZWN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcblxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdHRyYW5zZm9ybTppbmhlcml0O1xyXG5cdHdoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcblxyXG4gZm9udC13ZWlnaHQ6NjAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbi0tYm94LXNoYWRvdzowO1xyXG59XHJcbi5zZWxlY3QtcGxhY2Vob2xkZXIgXHJcbntcclxubWluLXdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxud2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5mbGV4OjAgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweCkgYW5kKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMilcclxuXHR7XHJcblx0Lm1haW5hcmVhIGltZ1xyXG5cdHtcclxuXHQgICAgbWFyZ2luOiAyOSUgYXV0byAwICFpbXBvcnRhbnQ7O1xyXG5cdH1cclxuXHRcclxuXHQubmV3c2VsZWN0e1xyXG5cdG1hcmdpbi10b3A6NzBweCAhaW1wb3J0YW50OztcclxuXHR9XHJcblx0XHJcblx0Lm5ld3NlbGVjdCBwe1xyXG5cdG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50OztcclxuXHR9XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoIDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0IDogNzM2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpIHsgXHJcblx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIzNXB4ICFpbXBvcnRhbnQ7XHJcbiBtYXJnaW46IDQwJSBhdXRvIDAgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gXHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgXHJcblx0XHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcblxyXG4gbWFyZ2luOiA1MCUgYXV0byAwICFpbXBvcnRhbnQ7O1xyXG4gfVxyXG5cdFxyXG5cdH1cclxuXHRcclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiAubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHggIWltcG9ydGFudDs7XHJcbiBtYXJnaW46IDIwJSBhdXRvIDAgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG5cclxuIC5uZXdzZWxlY3QgcHtcclxuICAgICBtYXJnaW4tdG9wOiA2NnB4ICFpbXBvcnRhbnQ7O1xyXG4gfVxyXG5cclxuIFxyXG4gfVxyXG4gICAiLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5ld3NlcmNobGlzdCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxcHggc29saWQgI2RkZDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5uZXdzZXJjaGxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG4ubWFpbnNlbGVjdCBpb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbnNlbGVjdCAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubmV3c2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1ib3gtc2hhZG93OjA7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxleDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIG1hcmdpbjogMjklIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIzNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA0MCUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiA1MCUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAyMCUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmV3c2VsZWN0IHAge1xuICAgIG1hcmdpbi10b3A6IDY2cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/countrymenu/countrymenu.page.ts":
/*!*************************************************!*\
  !*** ./src/app/countrymenu/countrymenu.page.ts ***!
  \*************************************************/
/*! exports provided: CountrymenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenuPage", function() { return CountrymenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _countrymenupopover_countrymenupopover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../countrymenupopover/countrymenupopover.page */ "./src/app/countrymenupopover/countrymenupopover.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let CountrymenuPage = class CountrymenuPage {
    constructor(sharedservice, zone, popoverCtrl, translate, formBuilder, alertController) {
        this.sharedservice = sharedservice;
        this.zone = zone;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.country_selct_flag = false;
        this.hide_city = false;
        this.hide_city_search = false;
        this.hide_city_search_back = false;
        this.countrySelectedFlag = false;
        console.log(this.city);
        console.log(this.countryId);
        // this.form = formBuilder.group({
        //   'country': [this.country]
        // });
        this.getcountryList();
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.city = localStorage.getItem('City_id')
        //   this.countryId = localStorage.getItem('Country_id')
        // }, 1000);
        // this.selected_country = localStorage.getItem('Country_id')
        // this.searchTerm = localStorage.getItem('City_name')
        // this.city_name = localStorage.getItem('City_name');
        // this.countryName=localStorage.getItem('countryName')
        // this.temp_country = this.countryName
    }
    ionViewWillEnter() {
        this.zone.run(() => {
            this.city = localStorage.getItem('City_id');
            this.countryId = localStorage.getItem('Country_id');
            this.selected_country = localStorage.getItem('Country_id');
            this.searchTerm = localStorage.getItem('City_name');
            this.city_name = localStorage.getItem('City_name');
            this.countryName = localStorage.getItem('countryName');
            this.temp_country = this.countryName;
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _countrymenupopover_countrymenupopover_page__WEBPACK_IMPORTED_MODULE_5__["CountrymenupopoverPage"],
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
                backdropDismiss: false,
                componentProps: { 'countryList': this.countryList }
            });
            return yield popover.present();
        });
    }
    getCityByCountry(value, id) {
        let data = new FormData();
        data.append('security_key', 'b0e886281185cfc68a2c119f04c5b7b105f632dd');
        data.append('country_id', id);
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('user/getCities', data).subscribe((rdata) => {
            console.log(rdata);
            this.city_list = rdata['data'];
            if (value == '2') {
                //this.form.controls['city'].setValue(this.city)
            }
            else {
                // this.form.controls['city'].setValue('')
            }
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    //********************************Getting Country List for select Country**************************
    getcountryList() {
        let data = new FormData();
        data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe((rdata) => {
            console.log(rdata);
            this.countryList = rdata['data'];
            this.tempArr = this.countryList;
            console.log(this.countryList);
            this.ionViewDidLoad();
            //this.getCityByCountry('2',this.country)     
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    ionViewDidLoad() {
        this.countryId = localStorage.getItem('Country_id');
        console.log('view loaded  ', this.countryId);
    }
    // getCountry(e) {
    //   console.log(e.detail.value)
    //   this.country_selct_flag = true
    //   this.selected_country = e.detail.value;
    //   this.hide_city = true
    //   if (e.detail.value != "") {
    //     // this.getCityByCountry('1',this.selected_country)     
    //   }
    // }
    getCountry(ev) {
        if (this.temp_country == ev.target.value.trim()) {
        }
        else {
            this.showCountrylist = true;
            const val = ev.target.value;
            this.countryList = this.tempArr;
            this.countrySelectedFlag = false;
            this.hide_city_search = false;
            this.hide_city_search_back = true;
            this.city = '';
            this.city_name = '';
            this.searchTerm = '';
            if (val && val.trim() !== '') {
                this.isItemAvailable = true;
                this.countryList = this.countryList.filter((item) => {
                    console.log(item);
                    return (item.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            else {
                this.isItemAvailable = false;
                this.countryList = this.tempArr;
            }
        }
    }
    selectedLocation(item) {
        console.log(item);
        this.countryName = item.country_name;
        localStorage.setItem('ngo_id', item.ngo_id);
        this.isItemAvailable = false;
        this.showCountrylist = false;
        this.countrySelectedFlag = true;
        this.temp_country = item.country_name;
        // this.hide_Country_search_back = true
        //localStorage.setItem('countryName',this.countryName)
        console.log(item.country_id);
        this.countryId = item.country_id;
        localStorage.setItem('tempcountry_id', item.country_id);
        // this.city_name = item.name
        // this.buttondisable = false;
        // localStorage.setItem('City_id', this.city)
        //localStorage.setItem('Country_id', this.countryId)
        // localStorage.setItem('City_name', this.city_name)
        // Reset items back to all of the items
    }
    getCity(e1) {
        console.log(this.selected_country);
        console.log(localStorage.getItem('tempcountry_id'));
        this.country;
        if (localStorage.getItem('tempcountry_id') == null || localStorage.getItem('tempcountry_id') === "null") {
            this.country = this.selected_country;
        }
        else {
            this.country = localStorage.getItem('tempcountry_id');
        }
        console.log(this.country, ' country passed to the api');
        if (this.searchTerm.length == 0) {
            this.hide_city_search = false;
            return false;
        }
        console.log(this.searchTerm);
        if (localStorage.getItem('City_name') == this.searchTerm) {
            this.hide_city_search = false;
        }
        else {
            if (this.searchTerm.length >= 2) {
                if (this.hide_city_search_back == true) {
                    let data = new FormData();
                    console.log(this.countryId);
                    data.append('query', this.searchTerm);
                    data.append('country_id', this.country);
                    this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', data).subscribe((rdata) => {
                        console.log(rdata);
                        this.hide_city_search = true;
                        this.hide_city_search_back = false;
                        this.city_list = rdata['data'];
                        if (this.city_list.length == 0) {
                            this.hide_city_search = false;
                        }
                    }, error => {
                        //  this.sharedservice.loaderDismiss()
                    }, () => {
                        // this.sharedservice.loaderDismiss()
                    });
                    console.log(this.searchTerm.length);
                }
                else if (this.searchTerm.length >= 2) {
                    let data = new FormData();
                    data.append('query', this.searchTerm);
                    data.append('country_id', this.country);
                    //  this.sharedservice.presentLoadingDefault()
                    this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', data).subscribe((rdata) => {
                        console.log(rdata);
                        this.hide_city_search = true;
                        this.hide_city_search_back = false;
                        this.city_list = rdata['data'];
                        if (this.city_list.length == 0) {
                            this.hide_city_search = false;
                        }
                    }, error => {
                        //  this.sharedservice.loaderDismiss()
                    }, () => {
                        // this.sharedservice.loaderDismiss()
                    });
                    console.log(this.searchTerm.length);
                    // }
                }
                else {
                    this.hide_city_search = false;
                }
            }
        }
    }
    selectedcity(item) {
        console.log(item);
        this.searchTerm = item.name;
        this.hide_city_search = false;
        this.hide_city_search_back = true;
        this.city = item.id;
        this.city_name = item.name;
        // localStorage.setItem('ngo_id',item.ngo_id)
        localStorage.setItem('City_id', this.city);
        localStorage.setItem('Country_id', this.country);
        localStorage.setItem('City_name', this.city_name);
        localStorage.setItem('city_latitude', item.latitude);
        localStorage.setItem('city_longitude', item.longitude);
        localStorage.setItem('countryName', this.countryName);
        var geocoder = new google.maps.Geocoder();
        var city, hascity, address = localStorage.getItem('City_name') + ' , ' + localStorage.getItem('countryName');
        geocoder.geocode({ 'address': address }, results => {
            console.log(results);
            if (results[0].formatted_address) {
                console.log(results);
                var lat = JSON.stringify(results[0].geometry.location.lat());
                var longi = JSON.stringify(results[0].geometry.location.lng());
                localStorage.setItem('map_lat', lat);
                localStorage.setItem('map_longi', longi);
            }
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var message;
            var btn_msg;
            this.translate.get('country_first').subscribe((res) => {
                message = res;
            });
            this.translate.get('done').subscribe((res) => {
                btn_msg = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: message,
                mode: 'ios',
                buttons: [{
                        text: btn_msg,
                        handler: (alertData) => {
                            console.log('in');
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
CountrymenuPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
CountrymenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countrymenu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./countrymenu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenu/countrymenu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./countrymenu.page.scss */ "./src/app/countrymenu/countrymenu.page.scss")).default]
    })
], CountrymenuPage);



/***/ })

}]);
//# sourceMappingURL=countrymenu-countrymenu-module-es2015.js.map