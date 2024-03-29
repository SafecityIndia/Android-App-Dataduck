(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailpopup-detailpopup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailpopup/detailpopup.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailpopup/detailpopup.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"newheader\">\n     <ion-toolbar>\n          <ion-buttons slot=\"end\">\n               <button (click)=\"dismiss()\" ion-button class=\"newclose\">\n                    <ion-icon name=\"close\"></ion-icon>\n               </button>\n          </ion-buttons>\n     </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <div class=\"mainareain\" *ngIf='type == \"incident\"'>\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newtext\">\n                         <h4>{{violence_type}}</h4>\n                         <h3>{{age}} Yrs\n                              <span *ngIf=\"gender != 'Prefer not to say'\"> | {{gender}}</span></h3>\n                         <p>{{what_happened_desc}}</p>\n                         <h5 *ngIf='showPerpetrator'>{{\"showPerpetrator\" | translate}}: {{showPerpetrator}}</h5>\n                         <h5 *ngIf='showAttacked'>{{\"showAttacked\" | translate}}: {{feel_attacked}}</h5>\n                         <h5 *ngIf=\"additional_detail != ''\">{{\"additional_detail\"| translate}}: {{additional_detail}}</h5>\n\n                         <ion-item *ngIf='show1'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"police_report_filed\" | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show2'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"police_report_not_filed\"| translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show3'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"tried_to_file_police_report\" | translate}} {{other_ans}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show4'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"intend_to_file_police_report\" | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show5'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"not_sure_about_filing_police_report\"|translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"medical_help_received\"|translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_not_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"medical_hlp_noy_rcvd\" |translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"suburb\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/location.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{suburb}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item *ngIf=\"incidents_date_est\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/calendar.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_date_est}} {{date_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item *ngIf=\"incidents_time_est\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/time.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_time_est}} {{time_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                    </div>\n               </ion-col>\n          </ion-row>\n     </div>\n\n     <div class=\"mainareain\" *ngIf='type == \"safetyTip\"'>\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newtext\">\n                         <h4>{{safety_tip_title}}</h4>\n                         <div class=\"newcalendar\" *ngIf=\"getDaysAgo\">\n                              <img src=\"assets/images/icons/calendar.svg\" />\n                              <p>{{getDaysAgo}} | {{time}}</p>\n                         </div>\n                         <div class=\"newcalendar\" *ngIf=\"exact_location\">\n                              <img src=\"assets/images/icons/location.svg\" />\n                              <p>{{exact_location}}</p>\n                         </div>\n                         <p>{{safety_tip_desc}}</p>\n                    </div>\n               </ion-col>\n          </ion-row>\n     </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/detailpopup/detailpopup-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/detailpopup/detailpopup-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailpopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpopupPageRoutingModule", function() { return DetailpopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailpopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailpopup.page */ "./src/app/detailpopup/detailpopup.page.ts");




const routes = [
    {
        path: '',
        component: _detailpopup_page__WEBPACK_IMPORTED_MODULE_3__["DetailpopupPage"]
    }
];
let DetailpopupPageRoutingModule = class DetailpopupPageRoutingModule {
};
DetailpopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailpopupPageRoutingModule);



/***/ }),

/***/ "./src/app/detailpopup/detailpopup.module.ts":
/*!***************************************************!*\
  !*** ./src/app/detailpopup/detailpopup.module.ts ***!
  \***************************************************/
/*! exports provided: DetailpopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpopupPageModule", function() { return DetailpopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detailpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailpopup-routing.module */ "./src/app/detailpopup/detailpopup-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _detailpopup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detailpopup.page */ "./src/app/detailpopup/detailpopup.page.ts");








let DetailpopupPageModule = class DetailpopupPageModule {
};
DetailpopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _detailpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailpopupPageRoutingModule"]
        ],
        declarations: [_detailpopup_page__WEBPACK_IMPORTED_MODULE_7__["DetailpopupPage"]]
    })
], DetailpopupPageModule);



/***/ }),

/***/ "./src/app/detailpopup/detailpopup.page.scss":
/*!***************************************************!*\
  !*** ./src/app/detailpopup/detailpopup.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 12px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.newtext h3 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 2px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n:focus {\n  outline: none;\n}\n\n.newclose {\n  background-color: transparent;\n  font-size: 32px;\n  float: right;\n}\n\n.newheader {\n  box-shadow: none !important;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\nion-item {\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --min-height: 38px;\n  font-size: 14px;\n  border: none;\n  margin-bottom: 5px;\n}\n\nion-thumbnail {\n  width: 20px;\n  height: 20px;\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 18px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 18px;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscG9wdXAvRDpcXGZpbmFsIGJhY2t1cCBzYWZlY2l0eS9zcmNcXGFwcFxcZGV0YWlscG9wdXBcXGRldGFpbHBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlscG9wdXAvZGV0YWlscG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEVUE7RUFDQSxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1JBOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1JBOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDSSxtQkFBQTtBQ1RKOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVkE7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1ZBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNYQTs7QURhQTtFQUVDLFdBQUE7RUFDRCxvQkFBQTtBQ1hBOztBRGFDO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZEOztBRGFDO0VBRUQsYUFBQTtBQ1hBOztBRGNDO0VBRUQsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1pBOztBRGdCQztFQUVELDJCQUFBO0FDZEE7O0FEaUJDO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDZkQ7O0FEa0JDO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNJLFlBQUE7RUFDQyxrQkFBQTtBQ2hCUDs7QURtQkM7RUFFQSxXQUFBO0VBQ0csWUFBQTtFQUNILHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNqQkQ7O0FEb0JDO0VBRUMsZUFBQTtFQUNFLGtCQUFBO0FDbEJKOztBRHNCQztFQUlBO0lBRUUsa0JBQUE7SUFDQyxtQkFBQTtFQ3ZCRjtBQUNGOztBRDBCQTtFQUVBLGtCQUFBO0FDekJBOztBRDRCQTtFQUVBLFNBQUE7QUMxQkE7O0FEOEJBO0VBSUEsOENBQUE7QUM1QkE7O0FEZ0NBO0VBRUEsdUJBQUE7QUM5QkE7O0FEaUNBO0VBRUEscUJBQUE7QUMvQkE7O0FEaUNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUMvQko7O0FEaUNBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUMvQkE7O0FEbUNBO0VBQ0EsY0FBQTtBQ2hDQTs7QURtQ0E7RUFDQSxnQkFBQTtBQ2hDQTs7QURtQ0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDakNKOztBRG1DQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQ0o7O0FEbUNDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2pDQTs7QURtQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDakNBOztBRG9DQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbENBOztBRHFDQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbkNBOztBRHNDQTtFQUVDLFdBQUE7RUFDRCxvQkFBQTtFQUNBLG1CQUFBO0FDcENBOztBRHNDQztFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNuQ0Q7O0FEd0NDO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDdENEOztBRHlDQztFQUlBO0lBRUUsa0JBQUE7SUFDQyxtQkFBQTtFQzFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscG9wdXAvZGV0YWlscG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjEycHg7XHJcbn1cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojMTgxNzE5O1xyXG5tYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDNcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MTZweDtcclxubWFyZ2luLXRvcDogMTBweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToyNXB4O1xyXG5jb2xvcjojNTkyRDhEO1xyXG5tYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLm5ld3RleHQgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MTRweDtcclxubWFyZ2luLXRvcDoxOHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNlxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5tYXJnaW4tdG9wOjE4cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm5ld2NhbGVuZGFyXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcblx0fVxyXG5cdC5uZXdjYWxlbmRhciBwe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdG1hcmdpbi10b3A6NXB4O1xyXG5cdG1hcmdpbi1ib3R0b206MDtcclxuXHR9XHJcblx0XHJcblx0OmZvY3VzIFxyXG57XHJcbm91dGxpbmU6bm9uZTtcclxufVxyXG5cdFxyXG5cdC5uZXdjbG9zZVxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbmZvbnQtc2l6ZTozMnB4O1xyXG5mbG9hdDpyaWdodDtcclxuXHJcbn1cclxuXHRcclxuXHQubmV3aGVhZGVyXHJcbntcclxuYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHRcclxuXHQubmV3Y2FsZW5kYXIgaW1nXHJcblx0e1xyXG5cdHdpZHRoOjE3cHg7XHJcblx0bWFyZ2luLXJpZ2h0OjJweDtcclxuXHR9XHJcblx0XHJcblx0aW9uLWl0ZW1cclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1taW4taGVpZ2h0OiAzOHB4O1xyXG5cdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHQgICAgYm9yZGVyOm5vbmU7XHJcblx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi10aHVtYm5haWxcclxuXHR7XHJcblx0d2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luLWlubGluZS1lbmQ6IDhweDtcclxuXHRtYXJnaW4tdG9wOjJweDtcclxuXHRtYXJnaW4tYm90dG9tOjJweDtcclxuXHR9XHJcblx0XHJcblx0aW9uLWxhYmVsXHJcblx0e1xyXG5cdCBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gaW9uLXRpdGxlXHJcbntcclxuICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxufSBcclxufVxyXG5cclxuLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjE4cHg7XHJcbn1cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojMTgxNzE5O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjI1cHg7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5uZXdjYWxlbmRhclxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmlubGluZS1mbGV4O1xyXG5tYXJnaW4tYm90dG9tOjE4cHg7XHJcblx0fVxyXG5cdC5uZXdjYWxlbmRhciBwe1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdG1hcmdpbi10b3A6NXB4O1xyXG5cdG1hcmdpbi1ib3R0b206MDtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0Lm5ld2NhbGVuZGFyIGltZ1xyXG5cdHtcclxuXHR3aWR0aDoxN3B4O1xyXG5cdG1hcmdpbi1yaWdodDoycHg7XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gaW9uLXRpdGxlXHJcbntcclxuICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxufSBcclxufVxyXG5cclxuXHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzE4MTcxOTtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLm5ld3RleHQgaDMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ubmV3dGV4dCBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld3RleHQgaDYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXdjYWxlbmRhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5ld2NhbGVuZGFyIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5ld2Nsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubmV3aGVhZGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV3Y2FsZW5kYXIgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICBpb24tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICB9XG59XG4uaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxODE3MTk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2NhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4ubmV3Y2FsZW5kYXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3Y2FsZW5kYXIgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/detailpopup/detailpopup.page.ts":
/*!*************************************************!*\
  !*** ./src/app/detailpopup/detailpopup.page.ts ***!
  \*************************************************/
/*! exports provided: DetailpopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpopupPage", function() { return DetailpopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let DetailpopupPage = class DetailpopupPage {
    constructor(route, httpClient, navController, router, modalCtrl) {
        this.route = route;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/reported-incident/';
        this.showAttacked = false;
        this.showPerpetrator = false;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.rece_medi_not_attn = false;
        this.rece_medi_attn = false;
        this.showincident = false;
        this.showSafetyTip = false;
        this.route.queryParams.subscribe(params => {
            this.type = params['type'];
            if (this.type == 'incident') {
                this.showincident = true;
                this.showincident = false;
                var detail = params['marker'];
                console.log("stringdetail", detail);
                this.itemDetail = JSON.parse(detail);
                console.log("item array", this.itemDetail);
                this.violence_type = this.itemDetail.categories;
                this.age = this.itemDetail.age;
                this.gender = this.itemDetail.gender;
                this.what_happened_desc = this.itemDetail.description;
                console.log("discription", this.what_happened_desc);
                this.suburb = this.itemDetail.building;
                this.incidents_date_est = this.itemDetail.is_date_estimate != "0" ? "Around " : "On";
                this.incidents_time_est = this.itemDetail.is_time_estimate != "0" ? "Around " : "At";
                this.incidents_time_est = this.itemDetail.time_to != null ? "Between " : this.incidents_time_est;
                this.time_estimate_name = this.itemDetail.time_to != null ? this.timeConvert(this.itemDetail.time_from) + " - " + this.timeConvert(this.itemDetail.time_to) : this.itemDetail.time_from;
                this.time_estimate_name = this.timeConvert(this.itemDetail.time_from);
                this.date_estimate_name = this.ChangeDateFormat(this.itemDetail.created_on, 1);
                console.log("date_estimate", this.date_estimate_name);
                console.log("time_estimate", this.time_estimate_name);
                // this.date_estimate_name = this.itemDetail.show_date
                // this.time_estimate_name = this.itemDetail.show_time
                this.additional_detail = this.itemDetail.additional_detail;
                for (let i = 0; i < this.itemDetail.answers.length; i++) {
                    console.log(this.itemDetail.answers[i]);
                    if (this.itemDetail.answers[i].question_tag == "attack_reason") {
                        this.showAttacked = true;
                        this.feel_attacked = this.itemDetail.answers[i].answer;
                    }
                    else if (this.itemDetail.answers[i].question_tag == "who_was_perpetrator") {
                        this.showPerpetrator = true;
                        this.perpetrator = this.itemDetail.answers[i].answer;
                    }
                    else if (this.itemDetail.answers[i].question_tag == "reported_to_police") {
                        if (this.itemDetail.answers[i].answer_id == '38') {
                            this.show1 = true;
                        }
                        else if (this.itemDetail.answers[i].answer_id == '41') {
                            this.show2 = true;
                        }
                        else if (this.itemDetail.answers[i].answer_id == '42') {
                            this.show3 = true;
                            this.other_ans = JSON.parse(this.itemDetail.answers[i].other_answers);
                            this.other_ans = this.other_ans[42];
                            console.log(this.other_ans);
                        }
                        else if (this.itemDetail.answers[i].answer_id == '39') {
                            this.show4 = true;
                        }
                        else if (this.itemDetail.answers[i].answer_id == '40') {
                            this.show5 = true;
                        }
                    }
                    else if (this.itemDetail.answers[i].question_tag == "medical_help") {
                        if (this.itemDetail.answers[i].answer_id == "28") {
                            this.rece_medi_attn = true;
                        }
                        else {
                            this.rece_medi_not_attn = true;
                        }
                    }
                }
            }
            else {
                this.showSafetyTip = true;
                this.showincident = false;
                this.safetyTipDesc = params['marker'];
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
            }
        });
    }
    ngOnInit() {
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
    dismiss() {
        this.navController.navigateForward("/home");
    }
};
DetailpopupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DetailpopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailpopup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detailpopup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailpopup/detailpopup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detailpopup.page.scss */ "./src/app/detailpopup/detailpopup.page.scss")).default]
    })
], DetailpopupPage);



/***/ })

}]);
//# sourceMappingURL=detailpopup-detailpopup-module-es2015.js.map