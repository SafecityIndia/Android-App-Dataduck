function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewreport-viewreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreport/viewreport.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewreport/viewreport.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewreportViewreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Incidents Shared by Others</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- content of all records -->\n<ion-content *ngIf = \"showAllList\">\n  <div class=\"tips\">\n    <!-- <ion-row>\n      <ion-col size=\"12\">\n\t  <div class=\"newtext\">\n\t  <p>Filters :</p>\n\t  <ion-chip fill=\"outline\">\n  <ion-label>Thane</ion-label>\n  <ion-icon name=\"close\"></ion-icon>\n</ion-chip>\n\n</div>\n  </ion-col>\n    </ion-row> -->\n\n    <ion-row *ngFor=\"let item of reportList\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcard\" tappable (click)=\"reportdetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.violence_type}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.what_happened_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.location}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf = \"resultNotFound\">\n      <ion-col size=\"12\">\n      <div class=\"notfound\">\n      <p>No Data Found</p>\n      </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>\n\n<!-- // content of filter -->\n<ion-content *ngIf=\"showList\">\n  <div class=\"tips\">\n    <ion-row>\n   <ion-col size=\"12\">\n        <div class=\"newtext\">   \n          <p>Filters:</p>\n          <ion-chip fill=\"outline\"  *ngFor=\"let item of violenceType;index as i\">\n            <ion-label *ngIf= 'violenceType != []' >{{item}}</ion-label>\n            <ion-icon name=\"close\" (click)=\"close(i,'violence_type')\"></ion-icon>\n          </ion-chip>\n          <ion-chip fill=\"outline\"  *ngFor=\"let item of address;index as i\">\n            <ion-label *ngIf= 'address != []' >{{item}}</ion-label>\n            <ion-icon name=\"close\" (click)=\"close(i,'address')\"></ion-icon>\n          </ion-chip>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"12\" *ngFor=\"let item of reportList\">\n        <ion-card class=\"newcard\" tappable (click)=\"reportdetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.violence_type}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.what_happened_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.locality}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"filterin()\">Filter</ion-button>\n    </ion-col>\n  </ion-row>\n</div>";
    /***/
  },

  /***/
  "./src/app/viewreport/viewreport-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/viewreport/viewreport-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ViewreportPageRoutingModule */

  /***/
  function srcAppViewreportViewreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewreportPageRoutingModule", function () {
      return ViewreportPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _viewreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viewreport.page */
    "./src/app/viewreport/viewreport.page.ts");

    var routes = [{
      path: '',
      component: _viewreport_page__WEBPACK_IMPORTED_MODULE_3__["ViewreportPage"]
    }];

    var ViewreportPageRoutingModule = function ViewreportPageRoutingModule() {
      _classCallCheck(this, ViewreportPageRoutingModule);
    };

    ViewreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/viewreport/viewreport.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/viewreport/viewreport.module.ts ***!
    \*************************************************/

  /*! exports provided: ViewreportPageModule */

  /***/
  function srcAppViewreportViewreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewreportPageModule", function () {
      return ViewreportPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _viewreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./viewreport-routing.module */
    "./src/app/viewreport/viewreport-routing.module.ts");
    /* harmony import */


    var _viewreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./viewreport.page */
    "./src/app/viewreport/viewreport.page.ts");

    var ViewreportPageModule = function ViewreportPageModule() {
      _classCallCheck(this, ViewreportPageModule);
    };

    ViewreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _viewreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewreportPageRoutingModule"]],
      declarations: [_viewreport_page__WEBPACK_IMPORTED_MODULE_6__["ViewreportPage"]]
    })], ViewreportPageModule);
    /***/
  },

  /***/
  "./src/app/viewreport/viewreport.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/viewreport/viewreport.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewreportViewreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n\nion-card-header {\n  padding-bottom: 10px;\n}\n\n.newcard ion-card-content {\n  font-size: 14px;\n  color: #292020;\n  padding-bottom: 0;\n}\n\n.newcard {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n}\n\n.newcalendar {\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 12px;\n  margin: 10px 0 10px 0;\n}\n\n.newcalendar img {\n  width: 15px;\n  margin-right: 2px;\n}\n\n.bottomcard {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 32px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newtext {\n  width: 100%;\n  padding: 0 10px;\n  margin-bottom: 6px;\n}\n\n.newtext ion-icon {\n  font-size: 14px;\n  margin-top: -2px;\n}\n\n.newtext ion-chip {\n  font-size: 15px;\n  background: #EBE2F5;\n  border: 1px solid #D7BAF8;\n  height: 28px;\n  line-height: 28px;\n}\n\n.newtext p {\n  margin: 8px 0;\n  float: left;\n  font-size: 16px;\n}\n\n.newbtn {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #EBE2F5;\n  --background-activated: #EBE2F5;\n  --background-focused: #EBE2F5;\n  --background-hover: #EBE2F5;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 46%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3JlcG9ydC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFx2aWV3cmVwb3J0XFx2aWV3cmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3JlcG9ydC92aWV3cmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0FDUEo7O0FEU0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUEE7O0FEVUE7RUFDQSxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFdBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBRUEsZUFBQTtBQ1REOztBRGFDO0VBRUEsb0JBQUE7QUNYRDs7QURjQztFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNaRDs7QURlQztFQUVBLGtCQUFBO0VBR0Qsa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNiQTs7QURnQkM7RUFFQSxvQkFBQTtBQ2REOztBRGdCQztFQUNBLGVBQUE7RUFDQyxxQkFBQTtBQ2JGOztBRGdCQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ2REOztBRGlCQztFQUVBLFdBQUE7RUFDQSxlQUFBO0FDZkQ7O0FEa0JDO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNoQkQ7O0FEbUJDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNqQkE7O0FEb0JBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURxQkE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUNuQkE7O0FEc0JBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNwQkE7O0FEc0JBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDcEJBOztBRHVCQTtFQUVBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3JCQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdyZXBvcnQvdmlld3JlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0aW9uLWNhcmQtdGl0bGVcclxuXHR7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRpb24tY2FyZC1oZWFkZXJcclxuXHR7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYXJkIGlvbi1jYXJkLWNvbnRlbnRcclxuXHR7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRwYWRkaW5nLWJvdHRvbTowO1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FyZFxyXG5cdHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbi1tb3otYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbmJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbm1hcmdpbi10b3A6MDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhbGVuZGFyXHJcblx0e1xyXG5cdGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcblx0fVxyXG5cdC5uZXdjYWxlbmRhciBwe1xyXG5cdGZvbnQtc2l6ZToxMnB4O1xyXG5cdCBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYWxlbmRhciBpbWdcclxuXHR7XHJcblx0d2lkdGg6MTVweDtcclxuXHRtYXJnaW4tcmlnaHQ6MnB4O1xyXG5cdH1cclxuXHRcclxuXHQuYm90dG9tY2FyZFxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdHBhZGRpbmc6MCAxNXB4O1xyXG5cdH1cclxuXHRcclxuXHQudGlwc1xyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206NTBweDtcclxuXHRtYXJnaW4tdG9wOjMycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTBweDtcclxubWFyZ2luLWJvdHRvbTo2cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGlvbi1pY29uXHJcbntcclxuZm9udC1zaXplOjE0cHg7XHJcbm1hcmdpbi10b3A6LTJweDtcclxufVxyXG5cclxuLm5ld3RleHQgaW9uLWNoaXBcclxue1xyXG5mb250LXNpemU6MTVweDtcclxuYmFja2dyb3VuZDojRUJFMkY1O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNEN0JBRjg7XHJcbmhlaWdodDoyOHB4O1xyXG5saW5lLWhlaWdodDoyOHB4O1xyXG59XHJcbi5uZXd0ZXh0IHBcclxue1xyXG5tYXJnaW46OHB4IDA7XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuY29sb3I6IzJGMTE1MyAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo0MHB4O1xyXG4tLWJhY2tncm91bmQ6ICNFQkUyRjU7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNFQkUyRjU7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6NDYlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmV3Y2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5uZXdjYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld2NhbGVuZGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXdjYWxlbmRhciBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG59XG5cbi5uZXdjYWxlbmRhciBpbWcge1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5ib3R0b21jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnRpcHMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm5ld3RleHQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5uZXd0ZXh0IGlvbi1jaGlwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRUJFMkY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDdCQUY4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjMkYxMTUzICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRUJFMkY1O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRUJFMkY1O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRUJFMkY1O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogNDYlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/viewreport/viewreport.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/viewreport/viewreport.page.ts ***!
    \***********************************************/

  /*! exports provided: ViewreportPage */

  /***/
  function srcAppViewreportViewreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewreportPage", function () {
      return ViewreportPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var ViewreportPage = /*#__PURE__*/function () {
      function ViewreportPage(toastController, sharedservice, navController, router, httpClient, route) {
        var _this = this;

        _classCallCheck(this, ViewreportPage);

        this.toastController = toastController;
        this.sharedservice = sharedservice;
        this.navController = navController;
        this.router = router;
        this.httpClient = httpClient;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.showList = false;
        this.showAllList = false;
        this.addressArray = [];
        this.violenceTypeArray = [];
        this.allCategoryArray = [];
        this.resultNotFound = false;
        this.route.queryParams.subscribe(function (params) {
          _this.violenceType = params["violenceType"];
          _this.address = params["address"];
          _this.pagename = params["pagename"];

          _this.callFirst();

          console.log("address", _this.address);
          console.log("violenceType", _this.violenceType);
          console.log("pagename", _this.pagename);
        });
      }

      _createClass(ViewreportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "callFirst",
        value: function callFirst() {
          if (this.pagename == 'reportFilterPage') {
            this.showList = true;
            this.showAllList = false;
            console.log('pagein');
            this.getFilteredReportList();
          } else if (this.pagename == undefined) {
            this.showList = false;
            this.showAllList = true;
            console.log('pageout');
            this.getAllReportList();
          }
        }
      }, {
        key: "getAllReportList",
        value: function getAllReportList() {
          var _this2 = this;

          var data = new FormData();
          data.append('security_key', '4b89b2831f1aae8067eb87a2d042e0fc4d8dd432');
          this.sharedservice.sharedPostRequest('incident_report/getAllIncidentReport', data).subscribe(function (rdata) {
            console.log(rdata);
            _this2.reportList = rdata.data;
            console.log(_this2.reportList);
          }, function (error) {}, function () {}); // this.httpClient.post(this.apiUrl + 'getAllIncidentReport', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.reportList = rdata.data;
          //     console.log(this.reportList);
          //   }, error => {
          //   });
        }
      }, {
        key: "getFilteredReportList",
        value: function getFilteredReportList() {
          var _this3 = this;

          var addstring = this.address.join(',');
          var violenceString = this.violenceType.join(',');
          var data = new FormData();
          data.append('security_key', '14a077af215a19bcf0c3c9a28a1ae27b1260df7d');
          data.append('incloc', addstring);
          data.append('inctype', violenceString);
          this.sharedservice.sharedPostRequest('incident_report/searchIncidentReport', data).subscribe(function (rdata) {
            console.log(rdata);
            _this3.reportList = rdata.data;

            if (_this3.reportList == '') {
              _this3.showList = false;
              _this3.resultNotFound = true; // this.showAllList = true
              //  this.presentToast()

              console.log('pageout'); // this.getAllReportList()
            }

            console.log(_this3.reportList);
          }, function (error) {}, function () {}); // this.httpClient.post(this.apiUrl + 'searchIncidentReport', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.reportList = rdata.data;
          //     if (this.reportList == '') {
          //       this.showList = false
          //       this.resultNotFound = true
          //       // this.showAllList = true
          //       //  this.presentToast()
          //       console.log('pageout')
          //       // this.getAllReportList()
          //     }
          //     console.log(this.reportList);
          //   }, error => {
          //   });
        }
      }, {
        key: "reportdetail",
        value: function reportdetail(item) {
          console.log(item);
          var navigationExtras = {
            queryParams: {
              item: item.id
            }
          };
          this.navController.navigateForward(["viewreportdetail"], navigationExtras); // this.navController.navigateForward(`/viewreportdetail`);
        }
      }, {
        key: "filterin",
        value: function filterin() {
          this.navController.navigateForward("/filter");
        }
      }, {
        key: "close",
        value: function close(i, type) {
          this.item = i;
          console.log(i);
          console.log(type);

          if (type == 'violence_type') {
            if (this.violenceType == []) {} else {
              this.violenceType.pop(this.item);
              this.getFilteredReportList();
              console.log(this.violenceType);
            }
          } else {
            if (this.address == []) {} else {
              this.address.pop(this.item);
              this.getFilteredReportList();
              console.log(this.addressArray);
            }
          }
        }
      }]);

      return ViewreportPage;
    }();

    ViewreportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ViewreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewreport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./viewreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreport/viewreport.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./viewreport.page.scss */
      "./src/app/viewreport/viewreport.page.scss"))["default"]]
    })], ViewreportPage);
    /***/
  }
}]);
//# sourceMappingURL=viewreport-viewreport-module-es5.js.map