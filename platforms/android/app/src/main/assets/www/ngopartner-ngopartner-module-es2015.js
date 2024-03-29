(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ngopartner-ngopartner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngopartner/ngopartner.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngopartner/ngopartner.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class=\"mainareango\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <img src=\"assets/images/icons/logo.svg\" />\n                <p>{{'partners_with' | translate}}</p>\n            </ion-col>\n        </ion-row>\n\n    </div>\n    <div class=\"newlogosecmain\">\n        <ion-row>\n            <ion-col *ngFor=\"let item of ngodetails\" size=\"12\">\n                <div class=\"newlogosec\">\n                    <img src=\"{{item.logo}}\" />\n                </div>\n            </ion-col>\n            <!-- <ion-col size=\"12\">\n\t\t\t\t<div class=\"newlogosec\">\n\t\t\t\t\t<img src=\"assets/images/nglogoone.png\" />\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<div class=\"newlogosec\">\n\t\t\t\t\t<img src=\"assets/images/nglogotwo.png\" />\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<div class=\"newlogosec\">\n\t\t\t\t\t<img src=\"assets/images/nglogothree.png\" />\n\t\t\t\t</div>\n\t\t\t</ion-col> -->\n        </ion-row>\n    </div>\n</ion-content>\n<div class=\"bottom\">\n    <ion-row>\n        <ion-col col-12>\n            <ion-button expand=\"full\" (click)=\"proceed()\" shape=\"round\" class=\"newbtn\">{{'proceed' | translate}}</ion-button>\n        </ion-col>\n    </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/ngopartner/ngopartner-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ngopartner/ngopartner-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NgopartnerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgopartnerPageRoutingModule", function() { return NgopartnerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngopartner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngopartner.page */ "./src/app/ngopartner/ngopartner.page.ts");




const routes = [
    {
        path: '',
        component: _ngopartner_page__WEBPACK_IMPORTED_MODULE_3__["NgopartnerPage"]
    }
];
let NgopartnerPageRoutingModule = class NgopartnerPageRoutingModule {
};
NgopartnerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NgopartnerPageRoutingModule);



/***/ }),

/***/ "./src/app/ngopartner/ngopartner.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ngopartner/ngopartner.module.ts ***!
  \*************************************************/
/*! exports provided: NgopartnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgopartnerPageModule", function() { return NgopartnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngopartner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngopartner-routing.module */ "./src/app/ngopartner/ngopartner-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngopartner_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngopartner.page */ "./src/app/ngopartner/ngopartner.page.ts");








let NgopartnerPageModule = class NgopartnerPageModule {
};
NgopartnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngopartner_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgopartnerPageRoutingModule"]
        ],
        declarations: [_ngopartner_page__WEBPACK_IMPORTED_MODULE_7__["NgopartnerPage"]]
    })
], NgopartnerPageModule);



/***/ }),

/***/ "./src/app/ngopartner/ngopartner.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ngopartner/ngopartner.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainareango {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 150px;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.newlogosecmain {\n  width: 100%;\n  margin: 25px auto 105px;\n  text-align: center;\n}\n\n.mainareango img {\n  width: 243px;\n  margin: 25% auto 0;\n}\n\n.mainareango p {\n  width: 100%;\n  margin: 0 auto;\n  color: #292020;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.newlogosec {\n  width: 100%;\n  height: auto;\n  margin: 10px auto 0;\n}\n\n.newlogosec img {\n  width: 210px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmdvcGFydG5lci9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxuZ29wYXJ0bmVyXFxuZ29wYXJ0bmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmdvcGFydG5lci9uZ29wYXJ0bmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RBOztBRElBO0VBRUEsa0JBQUE7QUNGQTs7QURLQTtFQUVBLFNBQUE7QUNIQTs7QURTQTtFQUlBLDhDQUFBO0FDUEE7O0FEV0E7RUFFQSx1QkFBQTtBQ1RBOztBRFlBO0VBRUEscUJBQUE7QUNWQTs7QURZQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDVko7O0FEWUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVkE7O0FEYUE7RUFDQSxjQUFBO0FDVkE7O0FEYUE7RUFDQSxnQkFBQTtBQ1ZBOztBRGFBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGFDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGFBO0VBRUEsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNYQTs7QURjQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1hBOztBRGNBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWkE7O0FEZUE7RUFFQSxZQUFBO0FDYkE7O0FEZUE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNkQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ2ZBIiwiZmlsZSI6InNyYy9hcHAvbmdvcGFydG5lci9uZ29wYXJ0bmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluYXJlYW5nb1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToxNTBweDtcclxufVxyXG5cclxuLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHJcbi5uZXdsb2dvc2VjbWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjoyNXB4IGF1dG8gMTA1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubWFpbmFyZWFuZ28gaW1ne1xyXG53aWR0aDoyNDNweDtcclxubWFyZ2luOjI1JSBhdXRvICAwIDtcclxufVxyXG5cclxuLm1haW5hcmVhbmdvIHB7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjowIGF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbn1cclxuXHJcbi5uZXdsb2dvc2VjXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjoxMHB4IGF1dG8gMDtcclxufVxyXG5cclxuLm5ld2xvZ29zZWMgaW1nXHJcbntcclxud2lkdGg6MjEwcHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4iLCIubWFpbmFyZWFuZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNTBweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubmV3bG9nb3NlY21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMTA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW5hcmVhbmdvIGltZyB7XG4gIHdpZHRoOiAyNDNweDtcbiAgbWFyZ2luOiAyNSUgYXV0byAwO1xufVxuXG4ubWFpbmFyZWFuZ28gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5ld2xvZ29zZWMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggYXV0byAwO1xufVxuXG4ubmV3bG9nb3NlYyBpbWcge1xuICB3aWR0aDogMjEwcHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ngopartner/ngopartner.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ngopartner/ngopartner.page.ts ***!
  \***********************************************/
/*! exports provided: NgopartnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgopartnerPage", function() { return NgopartnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







let NgopartnerPage = class NgopartnerPage {
    constructor(httpClient, loadingCtrl, router, sharedservice, navController, loadingController, route, translate) {
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.sharedservice = sharedservice;
        this.navController = navController;
        this.loadingController = loadingController;
        this.route = route;
        this.translate = translate;
        this.ngodetails = [];
        this.route.queryParams.subscribe(params => {
            this.countryId = params["countryId"];
            this.cityId = params["cityId"];
            this.orgId = params["orgId"];
            console.log("con", this.countryId);
            console.log("city", this.cityId);
            console.log("org", this.orgId);
        });
        this.ngoDetails();
    }
    ngOnInit() {
    }
    ngoDetails() {
        let data = new FormData();
        // data.append('security_key', 'b571bb06f3e196ce95f08c70324b9dd5b2d334c5');
        data.append('ngo_id', localStorage.getItem('ngo_id'));
        var loadertext;
        this.translate.get('loadertext').subscribe((res) => {
            loadertext = res;
        });
        this.sharedservice.presentLoadingDefault(loadertext);
        this.sharedservice.sharedPostRequest('ngo/getNgoDetails', data).subscribe((rdata) => {
            console.log(rdata);
            console.log(rdata);
            this.ngodetails = rdata.data;
            // for(var i=0;i< this.ngodetails.length;i++)
            // {
            //   this.ngodetails[i].logo_name = 'http://139.59.76.55/assets/' + this.ngodetails[i].logo
            // }
            console.log(this.ngodetails);
            // this.orgzationList = rdata.data;
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    proceed() {
        this.navController.navigateForward(`/preframingtwo`);
    }
};
NgopartnerPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
NgopartnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngopartner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ngopartner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngopartner/ngopartner.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ngopartner.page.scss */ "./src/app/ngopartner/ngopartner.page.scss")).default]
    })
], NgopartnerPage);



/***/ })

}]);
//# sourceMappingURL=ngopartner-ngopartner-module-es2015.js.map