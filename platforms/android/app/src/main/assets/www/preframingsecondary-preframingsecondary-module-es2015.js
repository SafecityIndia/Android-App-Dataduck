(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preframingsecondary-preframingsecondary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingsecondary/preframingsecondary.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preframingsecondary/preframingsecondary.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n   <!-- <ion-buttons slot=\"start\" > -->\n   <!-- <ion-back-button defaultHref='/reportfiledeleven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button> -->\n   <!-- </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<h4>Thank you for submitting<br> your report!</h4>\n<div class=\"newicon\">\n <ion-fab-button >\n    <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n</div>\n<p>By sharing your experience with us, you are helping prevent 3 others from experiencing something similar.<br><br> If you have 5-7 minutes, we would like to know more about the incident to understand other factors that play a role in sexual violence. By answering a few questions, you will help us build safer cities.</p>\n  </div>\n    </ion-col>\n   </ion-row>\n     <div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\t <ion-button expand=\"full\" shape=\"round\"  class=\"newbtnyes\" >YES, I WANT TO HELP</ion-button>\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"help()\">NO, I WOULD LIKE TO EXIT</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n   </div>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/preframingsecondary/preframingsecondary-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/preframingsecondary/preframingsecondary-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PreframingsecondaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreframingsecondaryPageRoutingModule", function() { return PreframingsecondaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _preframingsecondary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preframingsecondary.page */ "./src/app/preframingsecondary/preframingsecondary.page.ts");




const routes = [
    {
        path: '',
        component: _preframingsecondary_page__WEBPACK_IMPORTED_MODULE_3__["PreframingsecondaryPage"]
    }
];
let PreframingsecondaryPageRoutingModule = class PreframingsecondaryPageRoutingModule {
};
PreframingsecondaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreframingsecondaryPageRoutingModule);



/***/ }),

/***/ "./src/app/preframingsecondary/preframingsecondary.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/preframingsecondary/preframingsecondary.module.ts ***!
  \*******************************************************************/
/*! exports provided: PreframingsecondaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreframingsecondaryPageModule", function() { return PreframingsecondaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _preframingsecondary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preframingsecondary-routing.module */ "./src/app/preframingsecondary/preframingsecondary-routing.module.ts");
/* harmony import */ var _preframingsecondary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preframingsecondary.page */ "./src/app/preframingsecondary/preframingsecondary.page.ts");







let PreframingsecondaryPageModule = class PreframingsecondaryPageModule {
};
PreframingsecondaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _preframingsecondary_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreframingsecondaryPageRoutingModule"]
        ],
        declarations: [_preframingsecondary_page__WEBPACK_IMPORTED_MODULE_6__["PreframingsecondaryPage"]]
    })
], PreframingsecondaryPageModule);



/***/ }),

/***/ "./src/app/preframingsecondary/preframingsecondary.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/preframingsecondary/preframingsecondary.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.newtext ion-label {\n  white-space: inherit;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 20px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 20px;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 27px;\n  font-size: 18px;\n  color: #220E0E;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  color: #292020;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.newicon {\n  width: 100%;\n  height: auto;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n\n.newicon ion-fab-button {\n  margin: 0 auto;\n  text-align: center;\n  --background: #fff;\n  --color: #2ED35A;\n  --color-activated: #2ED35A;\n  --color-focused: #2ED35A;\n  --color-hover: #2ED35A;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  --box-shadow:none;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 55px;\n  text-align: center;\n}\n\n.newbtnyes {\n  color: #592D8D !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  --box-shadow:none;\n  font-weight: 500;\n  border: 1px solid #592D8D;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 20px;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZnJhbWluZ3NlY29uZGFyeS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxwcmVmcmFtaW5nc2Vjb25kYXJ5XFxwcmVmcmFtaW5nc2Vjb25kYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlZnJhbWluZ3NlY29uZGFyeS9wcmVmcmFtaW5nc2Vjb25kYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUlBLDhDQUFBO0FDREE7O0FES0E7RUFFQSxvQkFBQTtBQ0hBOztBRE1BO0VBRUEsd0JBQUE7QUNKQTs7QURPQTtFQUVFLG9DQUFBO0FDTEY7O0FEUUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEUUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTRTtFQUdFLHdCQUFBO0FDUko7O0FEVUE7RUFDSSx3QkFBQTtFQUNILFVBQUE7RUFDRyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNOSjs7QURVQTtFQUVBLGdCQUFBO0FDUkE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1RBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNYQTs7QURlQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2RBOztBRGlCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0MsbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZkE7O0FEa0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDaEJBOztBRG1CQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7QUNqQko7O0FEb0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNDLG1CQUFBO0VBQ0QsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNsQkE7O0FEcUJBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0UsbUJBQUE7RUFDQyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0FDbEJKOztBRG9CQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0QsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ25CQTs7QURzQkE7RUFHQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQSxpQkFBQTtFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFFRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3RCQTs7QUR5QkE7RUFFQSx1QkFBQTtBQ3ZCQTs7QUQwQkE7RUFFQSxpRUFBQTtVQUFBLGdFQUFBO0FDeEJBOztBRDJCQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLHNCQUFBO0VBQ0Qsd0JBQUE7RUFDQSxxQ0FBQTtBQ3pCQTs7QUQ0QkE7RUFDQyxzQkFBQTtBQ3pCRDs7QUQ0QkE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDMUJBOztBRDZCQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUMzQkE7O0FEOEJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM1QkEiLCJmaWxlIjoic3JjL2FwcC9wcmVmcmFtaW5nc2Vjb25kYXJ5L3ByZWZyYW1pbmdzZWNvbmRhcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5uZXd0ZXh0IGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhclxyXG57XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuIFxyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xyXG4gIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50OmluaGVyaXQ7XHJcbn1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5cclxufVxyXG5cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjI3cHg7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmxpbmUtaGVpZ2h0OjI4cHg7XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLm5ld2ljb25cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0byAzMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2ljb24gaW9uLWZhYi1idXR0b25cclxue1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4tLWNvbG9yOiAjMkVEMzVBO1xyXG4tLWNvbG9yLWFjdGl2YXRlZDogIzJFRDM1QTtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogIzJFRDM1QTtcclxuICAgIC0tY29sb3ItaG92ZXI6ICMyRUQzNUE7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIycHg7XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdCAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0byA1NXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2J0bnllc1xyXG57XHJcblxyXG5jb2xvcjojNTkyRDhEICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gYm9yZGVyOjFweCBzb2xpZCAjNTkyRDhEO1xyXG5cclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG8gMjBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1saXN0XHJcbntcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciBcclxue1xyXG5wYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xyXG59XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDowO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6bm9uZTtcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gLml0ZW0taW5uZXJ7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG59XHJcblxyXG5pb24taW5wdXRcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5oZWlnaHQ6NDBweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWRcclxue1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuXHJcbiBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NTBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiBcclxufVxyXG4iLCJpb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uZXd0ZXh0IGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XG59XG5cbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IGluaGVyaXQ7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm5ld2ljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdpY29uIGlvbi1mYWItYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjMkVEMzVBO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzJFRDM1QTtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMkVEMzVBO1xuICAtLWNvbG9yLWhvdmVyOiAjMkVEMzVBO1xufVxuXG4ubmV3dGV4dCBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDU1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2J0bnllcyB7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5MkQ4RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbmlvbi1pdGVtIC5pdGVtLWlubmVyIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/preframingsecondary/preframingsecondary.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/preframingsecondary/preframingsecondary.page.ts ***!
  \*****************************************************************/
/*! exports provided: PreframingsecondaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreframingsecondaryPage", function() { return PreframingsecondaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let PreframingsecondaryPage = class PreframingsecondaryPage {
    constructor(httpClient, route, navController) {
        this.httpClient = httpClient;
        this.route = route;
        this.navController = navController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.user_id = localStorage.getItem('userId');
        this.route.queryParams.subscribe(params => {
            this.forWho = params["forWho"];
            this.age = params["age"];
            this.pronoun = params["pronoun"];
            this.experience = params["experience"];
            this.date1 = params["date1"];
            this.dateEstimate = params["dateEstimate"];
            this.time = params["time"];
            this.timeEstimate = params["timeEstimate"];
            this.timeRange = params["timeRange"];
            this.violenceType = params["violenceType"];
            this.policeRepo = params["policeRepo"];
            this.anythingElse = params["anythingElse"];
            this.led = params["led"];
            this.locality = params["locality"];
            this.landmark = params["landmark"];
            this.city = params["city"];
            this.state = params["state"];
            this.country = params["country"];
            console.log("for Who", this.forWho);
            console.log("Age", this.age);
            console.log("pronoun", this.pronoun);
            console.log("experience", this.experience);
            console.log("date1", this.date1);
            console.log("time", this.time);
            console.log("dateEstimate", this.dateEstimate);
            console.log("timeEstimate", this.timeEstimate);
            console.log("timeRange", this.timeRange);
            console.log("policeRepo", this.policeRepo);
            console.log("violenceType", this.violenceType);
            console.log("led", this.led);
            console.log("locality", this.locality);
            console.log("landmark", this.landmark);
            console.log("city", this.city);
            console.log("state", this.state);
            console.log("country", this.country);
        });
    }
    ngOnInit() {
    }
    PostInctdentReport() {
        let data = new FormData();
        data.append('security_key', 'd152ed16bedaf0e594319efad64e39ff0b14c2ff');
        data.append('user_id', this.user_id);
        data.append('reporting_for', this.forWho);
        data.append('age', this.age);
        data.append('preferred_pronoun', this.pronoun);
        data.append('what_happened_desc', this.experience);
        data.append('start_date', this.date1);
        data.append('date_estimate', this.dateEstimate);
        data.append('time', this.time);
        data.append('time_estimate', this.timeEstimate);
        data.append('C', this.timeRange);
        data.append('violence_type', this.violenceType);
        data.append('reported_police', this.policeRepo);
        data.append('experience', this.led);
        data.append('feel_attacked', this.anythingElse);
        data.append('location', this.locality);
        data.append('landmark', this.landmark);
        data.append('city', this.city);
        data.append('state', this.state);
        data.append('country', this.country);
        data.append('exact_location', 'Karanjade Old Panvel Navi Mumbai');
        data.append('report_type', '1');
        data.append('is_consent', '1');
        //   security_key:d152ed16bedaf0e594319efad64e39ff0b14c2ff
        //   user_id:1
        //   is_consent:1
        //   reporting_for:Myselft
        //   age:35
        //   preferred_pronoun:He/Him
        //   what_happened_desc:Testsss
        //   start_date:2020-01-29
        //   time:23:30
        //   C:23:30-24:00
        //   violence_type:I Don't Know
        //   reported_police:Yes I Have / I Intend To
        //   feel_attacked:Other Please specify
        //   experience:Test Experince
        //   location:Navi Mumbai
        //   landmark:Karanjade
        //   city:Panvel
        //   state:Maharashtra
        //   country:India
        //   exact_location:Karanjade Old Panvel Navi Mumbai
        //   report_type:1
        //   date_estimate:Yes
        //   time_estimate:No
        this.httpClient.post(this.apiUrl + 'addIncidentReport', data)
            .subscribe((rdata) => {
            console.log(rdata);
            // this.countryList = rdata.data;
        }, error => {
        });
    }
    help() {
        this.navController.navigateRoot(`/helplines`);
    }
};
PreframingsecondaryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PreframingsecondaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preframingsecondary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./preframingsecondary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingsecondary/preframingsecondary.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./preframingsecondary.page.scss */ "./src/app/preframingsecondary/preframingsecondary.page.scss")).default]
    })
], PreframingsecondaryPage);



/***/ })

}]);
//# sourceMappingURL=preframingsecondary-preframingsecondary-module-es2015.js.map