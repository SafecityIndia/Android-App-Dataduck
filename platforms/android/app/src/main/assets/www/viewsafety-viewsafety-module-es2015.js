(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewsafety-viewsafety-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafety/viewsafety.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafety/viewsafety.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Safety Tips</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf = \"showAllList\">\n  <div class=\"tips\">\n  \n    <ion-row *ngFor=\"let item of SaftyTipList\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcard\" tappable (click)=\"safteydetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.safety_tip_title}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.safety_tip_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.city}}, {{item.location}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"showList\">\n  <div class=\"tips\">  \n  <ion-row >\n      <ion-col size=\"12\">\n\t  <div class=\"newtext\">\n\t  <p>Filters :</p>\n\t  <ion-chip fill=\"outline\" (click)='close()'>\n  <ion-label>{{address}}</ion-label>\n  <ion-icon name=\"close\"></ion-icon>\n</ion-chip>\n\t \n</div>\n  </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of SaftyTipSearchList\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcard\" tappable (click)=\"safteydetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.safety_tip_title}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.safety_tip_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.city}}, {{item.location}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"safteyfilter()\" >Filter</ion-button>\n  </ion-col>\n   </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/viewsafety/viewsafety-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/viewsafety/viewsafety-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewsafetyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafetyPageRoutingModule", function() { return ViewsafetyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _viewsafety_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewsafety.page */ "./src/app/viewsafety/viewsafety.page.ts");




const routes = [
    {
        path: '',
        component: _viewsafety_page__WEBPACK_IMPORTED_MODULE_3__["ViewsafetyPage"]
    }
];
let ViewsafetyPageRoutingModule = class ViewsafetyPageRoutingModule {
};
ViewsafetyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewsafetyPageRoutingModule);



/***/ }),

/***/ "./src/app/viewsafety/viewsafety.module.ts":
/*!*************************************************!*\
  !*** ./src/app/viewsafety/viewsafety.module.ts ***!
  \*************************************************/
/*! exports provided: ViewsafetyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafetyPageModule", function() { return ViewsafetyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _viewsafety_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewsafety-routing.module */ "./src/app/viewsafety/viewsafety-routing.module.ts");
/* harmony import */ var _viewsafety_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewsafety.page */ "./src/app/viewsafety/viewsafety.page.ts");







let ViewsafetyPageModule = class ViewsafetyPageModule {
};
ViewsafetyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewsafety_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewsafetyPageRoutingModule"]
        ],
        declarations: [_viewsafety_page__WEBPACK_IMPORTED_MODULE_6__["ViewsafetyPage"]]
    })
], ViewsafetyPageModule);



/***/ }),

/***/ "./src/app/viewsafety/viewsafety.page.scss":
/*!*************************************************!*\
  !*** ./src/app/viewsafety/viewsafety.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n\nion-card-header {\n  padding-bottom: 10px;\n}\n\n.newcard ion-card-content {\n  font-size: 14px;\n  color: #292020;\n  padding-bottom: 0;\n}\n\n.newcard {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n}\n\n.newcalendar {\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 12px;\n  margin: 10px 0 10px 0;\n}\n\n.newtext {\n  width: 100%;\n  padding: 0 10px;\n  margin-bottom: 6px;\n}\n\n.newtext ion-icon {\n  font-size: 14px;\n  margin-top: -2px;\n}\n\n.newtext ion-chip {\n  font-size: 15px;\n  background: #EBE2F5;\n  border: 1px solid #D7BAF8;\n  height: 28px;\n  line-height: 28px;\n}\n\n.newtext p {\n  margin: 8px 0;\n  float: left;\n  font-size: 16px;\n}\n\n.newcalendar img {\n  width: 15px;\n  margin-right: 2px;\n}\n\n.bottomcard {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 32px;\n}\n\n.newbtn {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #EBE2F5;\n  --background-activated: #EBE2F5;\n  --background-focused: #EBE2F5;\n  --background-hover: #EBE2F5;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 46%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3NhZmV0eS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFx2aWV3c2FmZXR5XFx2aWV3c2FmZXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3NhZmV0eS92aWV3c2FmZXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURVQTtFQUVBLHFCQUFBO0FDUkE7O0FEVUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDUko7O0FEVUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ1JBOztBRFlBO0VBQ0EsY0FBQTtBQ1RBOztBRFlBO0VBQ0EsZ0JBQUE7QUNUQTs7QURZQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQztFQUVBLGVBQUE7QUNWRDs7QURjQztFQUVBLG9CQUFBO0FDWkQ7O0FEZUM7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDYkQ7O0FEZ0JDO0VBRUEsa0JBQUE7RUFHRCxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2RBOztBRGlCQztFQUVBLG9CQUFBO0FDZkQ7O0FEaUJDO0VBQ0EsZUFBQTtFQUNDLHFCQUFBO0FDZEY7O0FEZ0JDO0VBRUQsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2RBOztBRGlCQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQ2ZBOztBRGtCQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDaEJBOztBRGtCQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2hCQTs7QURrQkM7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUNoQkQ7O0FEbUJDO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUNqQkQ7O0FEb0JDO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNsQkQ7O0FEb0JDO0VBRUQseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbEJBOztBRG9CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEJBIiwiZmlsZSI6InNyYy9hcHAvdmlld3NhZmV0eS92aWV3c2FmZXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHRpb24tY2FyZC10aXRsZVxyXG5cdHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1jYXJkLWhlYWRlclxyXG5cdHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhcmQgaW9uLWNhcmQtY29udGVudFxyXG5cdHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdHBhZGRpbmctYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYXJkXHJcblx0e1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxubWFyZ2luLXRvcDowO1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FsZW5kYXJcclxuXHR7XHJcblx0ZGlzcGxheTppbmxpbmUtZmxleDtcclxuXHR9XHJcblx0Lm5ld2NhbGVuZGFyIHB7XHJcblx0Zm9udC1zaXplOjEycHg7XHJcblx0IG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuXHR9XHJcblx0Lm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTBweDtcclxubWFyZ2luLWJvdHRvbTo2cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGlvbi1pY29uXHJcbntcclxuZm9udC1zaXplOjE0cHg7XHJcbm1hcmdpbi10b3A6LTJweDtcclxufVxyXG5cclxuLm5ld3RleHQgaW9uLWNoaXBcclxue1xyXG5mb250LXNpemU6MTVweDtcclxuYmFja2dyb3VuZDojRUJFMkY1O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNEN0JBRjg7XHJcbmhlaWdodDoyOHB4O1xyXG5saW5lLWhlaWdodDoyOHB4O1xyXG59XHJcbi5uZXd0ZXh0IHBcclxue1xyXG5tYXJnaW46OHB4IDA7XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblx0Lm5ld2NhbGVuZGFyIGltZ1xyXG5cdHtcclxuXHR3aWR0aDoxNXB4O1xyXG5cdG1hcmdpbi1yaWdodDoycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5ib3R0b21jYXJkXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0cGFkZGluZzowIDE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC50aXBzXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdG1hcmdpbi10b3A6MzJweDtcclxuXHR9XHJcblx0Lm5ld2J0blxyXG57XHJcbmNvbG9yOiMyRjExNTMgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NDBweDtcclxuLS1iYWNrZ3JvdW5kOiAjRUJFMkY1O1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRUJFMkY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNFQkUyRjU7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNFQkUyRjU7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjQ2JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm5ld2NhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ubmV3Y2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdjYWxlbmRhciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3Y2FsZW5kYXIgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm5ld3RleHQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5uZXd0ZXh0IGlvbi1jaGlwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRUJFMkY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDdCQUY4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ld2NhbGVuZGFyIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmJvdHRvbWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4udGlwcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICMyRjExNTMgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRUJFMkY1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA0NiU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/viewsafety/viewsafety.page.ts":
/*!***********************************************!*\
  !*** ./src/app/viewsafety/viewsafety.page.ts ***!
  \***********************************************/
/*! exports provided: ViewsafetyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafetyPage", function() { return ViewsafetyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");







let ViewsafetyPage = class ViewsafetyPage {
    constructor(platform, sharedservice, toastController, navController, router, httpClient, route) {
        this.platform = platform;
        this.sharedservice = sharedservice;
        this.toastController = toastController;
        this.navController = navController;
        this.router = router;
        this.httpClient = httpClient;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/safecity_report/';
        this.showList = false;
        this.showAllList = false;
        // this.platform.registerBackButtonAction(this.backButtonAction.bind(this), 500);
        this.route.queryParams.subscribe(params => {
            this.address = params["address"];
            this.pagename = params["pagename"];
            this.callFirst();
            console.log("address", this.address);
            console.log("pronoun", this.pagename);
        });
    }
    ngOnInit() {
    }
    callFirst() {
        if (this.pagename == 'safetyFilterPage') {
            this.showList = true;
            this.showAllList = false;
            console.log('pagein');
            this.getFilteredSafetyList();
        }
        else if (this.pagename == undefined) {
            this.showList = false;
            this.showAllList = true;
            console.log('pageout');
            this.getAllSafetyTipList();
        }
    }
    getAllSafetyTipList() {
        let data = new FormData();
        data.append('security_key', 'c86c38648cf225ad895f634c3dc922d09e1ca27a');
        this.sharedservice.sharedPostRequest('safecity_report/getAllSafetyTips', data).subscribe((rdata) => {
            console.log(rdata);
            this.SaftyTipList = rdata.data;
            console.log(this.SaftyTipList);
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'getAllSafetyTips', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.SaftyTipList = rdata.data;
        //     console.log(this.SaftyTipList);
        //   }, error => {
        //   });
    }
    getFilteredSafetyList() {
        let data = new FormData();
        data.append('security_key', '5c93e42352c3f75b5eb7d0b0441bb79612aa4004');
        data.append('inc_loc', this.address);
        this.sharedservice.sharedPostRequest('safecity_report/searchSafetyTips', data).subscribe((rdata) => {
            console.log(rdata);
            this.SaftyTipSearchList = rdata.data;
            if (this.SaftyTipSearchList == '') {
                this.showList = false;
                this.showAllList = true;
                this.presentToast();
                console.log('pageout');
                this.getAllSafetyTipList();
            }
            console.log(this.SaftyTipList);
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'searchSafetyTips', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.SaftyTipSearchList = rdata.data;
        //     if(this.SaftyTipSearchList == '')
        //     {
        //       this.showList = false
        //        this.showAllList = true
        //        this.presentToast()
        //       console.log('pageout')
        //       this.getAllSafetyTipList()
        //     }
        //     console.log(this.SaftyTipList);
        //   }, error => {
        //   });
    }
    safteydetail(item) {
        console.log(item);
        let navigationExtras = {
            queryParams: {
                item: item.id,
            }
        };
        this.navController.navigateForward([`viewsafteydetail`], navigationExtras);
        // this.navController.navigateForward(`/viewsafteydetail`);
    }
    safteyfilter() {
        this.navController.navigateForward(`/safetyfilter`);
    }
    close() {
        this.showList = false;
        this.showAllList = true;
        console.log('pageout');
        this.getAllSafetyTipList();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Record Not Found.',
                duration: 3000
            });
            toast.present();
        });
    }
};
ViewsafetyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewsafetyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewsafety',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewsafety.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafety/viewsafety.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewsafety.page.scss */ "./src/app/viewsafety/viewsafety.page.scss")).default]
    })
], ViewsafetyPage);



/***/ })

}]);
//# sourceMappingURL=viewsafety-viewsafety-module-es2015.js.map