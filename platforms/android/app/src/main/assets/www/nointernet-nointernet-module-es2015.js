(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nointernet-nointernet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n<div class=\"nointernet\">\n<img src=\"assets/images/icons/nointernet.svg\"/>\n<p>Please check your internet connection to return to Safecity.</p>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/nointernet/nointernet-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nointernet/nointernet-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NointernetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NointernetPageRoutingModule", function() { return NointernetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nointernet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nointernet.page */ "./src/app/nointernet/nointernet.page.ts");




const routes = [
    {
        path: '',
        component: _nointernet_page__WEBPACK_IMPORTED_MODULE_3__["NointernetPage"]
    }
];
let NointernetPageRoutingModule = class NointernetPageRoutingModule {
};
NointernetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NointernetPageRoutingModule);



/***/ }),

/***/ "./src/app/nointernet/nointernet.module.ts":
/*!*************************************************!*\
  !*** ./src/app/nointernet/nointernet.module.ts ***!
  \*************************************************/
/*! exports provided: NointernetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NointernetPageModule", function() { return NointernetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nointernet-routing.module */ "./src/app/nointernet/nointernet-routing.module.ts");
/* harmony import */ var _nointernet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nointernet.page */ "./src/app/nointernet/nointernet.page.ts");







let NointernetPageModule = class NointernetPageModule {
};
NointernetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NointernetPageRoutingModule"]
        ],
        declarations: [_nointernet_page__WEBPACK_IMPORTED_MODULE_6__["NointernetPage"]]
    })
], NointernetPageModule);



/***/ }),

/***/ "./src/app/nointernet/nointernet.page.scss":
/*!*************************************************!*\
  !*** ./src/app/nointernet/nointernet.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nointernet {\n  position: absolute;\n  margin: 0 auto;\n  top: 40%;\n  left: 5%;\n  right: 5%;\n  text-align: center;\n}\n\n.nointernet img {\n  text-align: center;\n  margin: 0 auto 15px;\n}\n\n.nointernet p {\n  width: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  text-align: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9pbnRlcm5ldC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxub2ludGVybmV0XFxub2ludGVybmV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm9pbnRlcm5ldC9ub2ludGVybmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUVHLGtCQUFBO0VBQ0MsY0FBQTtFQUNELFFBQUE7RUFDRCxRQUFBO0VBQ0EsU0FBQTtFQUNGLGtCQUFBO0FDREQ7O0FES0M7RUFFQSxrQkFBQTtFQUNLLG1CQUFBO0FDSE47O0FETUU7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNDLGtCQUFBO0VBQ0csY0FBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvbm9pbnRlcm5ldC9ub2ludGVybmV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdC5ub2ludGVybmV0XHJcblx0e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcblx0ICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgIGxlZnQ6NSU7XHJcbiAgIHJpZ2h0OjUlO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuXHR9XHJcblx0XHJcblx0Lm5vaW50ZXJuZXQgaW1nXHJcblx0e1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0ICAgIG1hcmdpbjogMCBhdXRvIDE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdFx0Lm5vaW50ZXJuZXQgcHtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRcdGNvbG9yOiMyOTIwMjA7XHJcblx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0ICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gXHJcblx0XHR9IiwiLm5vaW50ZXJuZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9pbnRlcm5ldCBpbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvIDE1cHg7XG59XG5cbi5ub2ludGVybmV0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nointernet/nointernet.page.ts":
/*!***********************************************!*\
  !*** ./src/app/nointernet/nointernet.page.ts ***!
  \***********************************************/
/*! exports provided: NointernetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NointernetPage", function() { return NointernetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let NointernetPage = class NointernetPage {
    constructor(navController, platform) {
        this.navController = navController;
        this.platform = platform;
        console.log(this.navController);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // alert('enter')
        this.subscription = this.platform.backButton.subscribeWithPriority(20, (processNextHandler) => {
            //navigator['app'].exitApp();
            //alert('hit')
        });
    }
    ionViewWillLeave() {
        // alert('exit')
        this.subscription.unsubscribe();
    }
};
NointernetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
NointernetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nointernet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nointernet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nointernet.page.scss */ "./src/app/nointernet/nointernet.page.scss")).default]
    })
], NointernetPage);



/***/ })

}]);
//# sourceMappingURL=nointernet-nointernet-module-es2015.js.map