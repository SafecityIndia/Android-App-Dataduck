(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewsafteydetail-viewsafteydetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafteydetail/viewsafteydetail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafteydetail/viewsafteydetail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/viewsafety' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>  \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n      <ion-toolbar>\n            <ion-buttons slot=\"start\" (click)=\"dismiss()\">\n                  <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\" />\n            </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div class=\"mainareain\">\n            <ion-row>\n                  <ion-col size=\"12\">\n                        <div class=\"newtext\">\n                              <h4>{{safety_tip_title}}</h4>\n                              <div class=\"newcalendar\">\n                                    <img src=\"assets/images/icons/calendar.svg\" />\n                                    <p>{{getDaysAgo}} | {{time}}</p>\n                              </div>\n                              <div class=\"newcalendar\">\n                                    <img src=\"assets/images/icons/location.svg\" />\n                                    <p>{{exact_location}}</p>\n                              </div>\n                              <p>{{safety_tip_desc}}</p>\n                        </div>\n                  </ion-col>\n            </ion-row>\n      </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/viewsafteydetail/viewsafteydetail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/viewsafteydetail/viewsafteydetail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewsafteydetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafteydetailPageRoutingModule", function() { return ViewsafteydetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _viewsafteydetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewsafteydetail.page */ "./src/app/viewsafteydetail/viewsafteydetail.page.ts");




const routes = [
    {
        path: '',
        component: _viewsafteydetail_page__WEBPACK_IMPORTED_MODULE_3__["ViewsafteydetailPage"]
    }
];
let ViewsafteydetailPageRoutingModule = class ViewsafteydetailPageRoutingModule {
};
ViewsafteydetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewsafteydetailPageRoutingModule);



/***/ }),

/***/ "./src/app/viewsafteydetail/viewsafteydetail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/viewsafteydetail/viewsafteydetail.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewsafteydetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafteydetailPageModule", function() { return ViewsafteydetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _viewsafteydetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewsafteydetail-routing.module */ "./src/app/viewsafteydetail/viewsafteydetail-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _viewsafteydetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewsafteydetail.page */ "./src/app/viewsafteydetail/viewsafteydetail.page.ts");








let ViewsafteydetailPageModule = class ViewsafteydetailPageModule {
};
ViewsafteydetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewsafteydetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewsafteydetailPageRoutingModule"]
        ],
        declarations: [_viewsafteydetail_page__WEBPACK_IMPORTED_MODULE_7__["ViewsafteydetailPage"]]
    })
], ViewsafteydetailPageModule);



/***/ }),

/***/ "./src/app/viewsafteydetail/viewsafteydetail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/viewsafteydetail/viewsafteydetail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 18px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 18px;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3NhZnRleWRldGFpbC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFx2aWV3c2FmdGV5ZGV0YWlsXFx2aWV3c2FmdGV5ZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3NhZnRleWRldGFpbC92aWV3c2FmdGV5ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURVQTtFQUNBLGNBQUE7QUNQQTs7QURVQTtFQUNBLGdCQUFBO0FDUEE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUkE7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDUkE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNWQTs7QURhQTtFQUVDLFdBQUE7RUFDRCxvQkFBQTtFQUNBLG1CQUFBO0FDWEE7O0FEYUM7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVkQ7O0FEZUM7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUNiRDs7QURnQkM7RUFJQTtJQUVFLGtCQUFBO0lBQ0MsbUJBQUE7RUNqQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzYWZ0ZXlkZXRhaWwvdmlld3NhZnRleWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6MThweDtcclxufVxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMxODE3MTk7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MjVweDtcclxuY29sb3I6IzU5MkQ4RDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5ld2NhbGVuZGFyXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbm1hcmdpbi1ib3R0b206MThweDtcclxuXHR9XHJcblx0Lm5ld2NhbGVuZGFyIHB7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0bWFyZ2luLXRvcDo1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHQubmV3Y2FsZW5kYXIgaW1nXHJcblx0e1xyXG5cdHdpZHRoOjE3cHg7XHJcblx0bWFyZ2luLXJpZ2h0OjJweDtcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiBpb24tdGl0bGVcclxue1xyXG4gICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG59IFxyXG59XHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxODE3MTk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2NhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4ubmV3Y2FsZW5kYXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3Y2FsZW5kYXIgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/viewsafteydetail/viewsafteydetail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/viewsafteydetail/viewsafteydetail.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewsafteydetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafteydetailPage", function() { return ViewsafteydetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");






let ViewsafteydetailPage = class ViewsafteydetailPage {
    constructor(navController, sharedservice, httpClient, route) {
        this.navController = navController;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/safecity_report/';
        this.route.queryParams.subscribe(params => {
            this.safetyTipDesc = params["safetyitemDetail"];
            this.safetyTipDesc = JSON.parse(this.safetyTipDesc);
            this.safety_tip_title = this.safetyTipDesc.safety_tip_title;
            this.exact_location = this.safetyTipDesc.exact_location;
            this.added_date = this.safetyTipDesc.added_date;
            this.safety_tip_desc = this.safetyTipDesc.safety_tip_desc;
            console.log("data", this.safetyTipDesc);
            var dayBetween = this.days_between(this.added_date);
            this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(this.added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
            console.log(this.getDaysAgo);
            var time1 = this.added_date.substring(11, 19);
            console.log("time", time1);
            this.time = this.timeConvert(time1);
            console.log("Time", this.time);
        });
    }
    ngOnInit() {
        // this.viewSafetyDetail()
    }
    viewSafetyDetail() {
        let data = new FormData();
        data.append('security_key', '2e2da14d4af021cd267cd61de81b2260628f8cb4');
        data.append('id', this.id);
        this.sharedservice.sharedPostRequest('safecity_report/getSafetyTipsById', data).subscribe((rdata) => {
            console.log(rdata);
            this.safety_tip_title = rdata.data.safety_tip_title;
            this.exact_location = rdata.data.exact_location;
            this.added_date = rdata.data.added_date;
            this.safety_tip_desc = rdata.data.safety_tip_desc;
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'getSafetyTipsById', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.safety_tip_title = rdata.data.safety_tip_title
        //     this.exact_location = rdata.data.exact_location
        //     this.added_date = rdata.data.added_date
        //     this.safety_tip_desc = rdata.data.safety_tip_desc
        //   }, error => {
        //   });
    }
    ChangeDateFormat(date, val) {
        var dayDate = new Date(date.replace(/ /g, "T"));
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
    days_between(date) {
        // The number of milliseconds in one day
        var date1;
        date1 = new Date(date.replace(/ /g, "T"));
        var todays_date;
        todays_date = new Date();
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(todays_date - date1);
        var daydiff = Math.round(differenceMs / ONE_DAY);
        return daydiff;
    }
    dismiss() {
        let navigationExtras = {
            queryParams: {
                // incidentList: this.incidentList,
                // safetyTipList: this.safetyTipList,
                segmentModel: 'two',
                pagename: 'safetyDetail'
            }
        };
        this.navController.navigateBack([`modelreport`], navigationExtras);
    }
};
ViewsafteydetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewsafteydetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewsafteydetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewsafteydetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafteydetail/viewsafteydetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewsafteydetail.page.scss */ "./src/app/viewsafteydetail/viewsafteydetail.page.scss")).default]
    })
], ViewsafteydetailPage);



/***/ })

}]);
//# sourceMappingURL=viewsafteydetail-viewsafteydetail-module-es2015.js.map