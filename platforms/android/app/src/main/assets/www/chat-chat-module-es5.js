function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home' icon=\"undefined\" text=\"\" class=\"backbutton\">\n            </ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'chat_with_us' | translate}}</ion-title>\n        <div class=\"homeside\" (click)=\"backtoHome()\" slot=\"end\">\n            <p>{{'home_menu' | translate}}</p>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"chatmain\">\n        <!-- <div class=\"chatday\">TODAY</div> -->\n        <div *ngIf=\"to_User_Id=='0'\">\n            <div *ngIf=\"is_admin_online==false\">\n                <p>{{'chat_default_msg' | translate}}</p>\n                <p class=\"idmsg\">\n                    {{'you_can_connect_with_us' | translate}}\n                </p>\n                <p (click)=\"callnumber()\">{{'give_missed_call' | translate}} +91 90155 10510</p>\n                <!-- <p> {{'whatsapp_our_team' | translate}}</p> -->\n                <p>{{'Leave_number' | translate}}</p>\n            </div>\n            <div *ngIf=\"is_admin_online==true\">\n                <p class=\"idmsg1\">{{'is_admin_online' | translate}}</p>\n            </div>\n        </div>\n        <div *ngIf=\"to_User_Id!='0'\">\n            <div *ngFor=\"let item of msgArr\">\n                <div class=\"messagein\" *ngIf=\"item.sent_by!= 'web'\">\n                    <div class=\"message\">\n                        <p>{{item.chat_message}}</p>\n                        <span class=\"time-right\">{{item.ampmTime}}</span>\n                    </div>\n                </div>\n                <div class=\"messageinright\" *ngIf=\"item.sent_by =='web'\">\n                    <div class=\"otherright\">\n                        <p>{{item.chat_message}}</p>\n                        <span class=\"time-right\">{{item.ampmTime}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"messagein\">\n      <div class=\"message\">\n        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n          dolore magna aliquyam erat</p>\n        <span class=\"time-right\">11:00 AM</span>\n      </div>\n\n    </div>\n    <div class=\"messagein\">\n      <div class=\"message\">\n        <p>Sure!</p>\n        <span class=\"time-right\">11:01 AM</span>\n      </div>\n\n    </div>\n    <div class=\"messageinright\">\n      <div class=\"otherright\">\n        <p>Can you tell me about ABC?</p>\n        <span class=\"time-right\">2:00 PM</span>\n\n      </div>\n\n    </div>\n    <div class=\"messageinright\">\n      <div class=\"otherright\">\n        <p>Hi</p>\n        <span class=\"time-right\">4:33 PM</span>\n      </div>\n\n    </div>\n    <div class=\"messagein\">\n      <div class=\"message\">\n        <p>What can we assist you with?!</p>\n        <span class=\"time-right\">4:35 PM</span>\n      </div>\n\n    </div>\n    <div class=\"messagein\">\n      <div class=\"message\">\n        <p>Hi</p>\n        <span class=\"time-right\">4:39 PM</span>\n      </div>\n\n    </div> -->\n    </div>\n    <div class=\"bottomchat\" [ngClass]=\"{'keyboardBottomchat' : bottomClass}\">\n        <ion-item class=\"chatinput\">\n            <ion-textarea rows=\"1\" placeholder=\"{{'type_a_message' | translate}}\" [disabled]=\"to_User_Id=='0'\" [(ngModel)]=\"chat_message\"></ion-textarea>\n            <!-- <ion-input></ion-input> -->\n            <div class=\"sendin\" slot=\"end\">\n                <img src=\"assets/images/icons/plainarrow.svg\" (click)=\"sendmsg()\" />\n            </div>\n        </ion-item>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/chat/chat-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chat/chat-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ChatPageRoutingModule */

  /***/
  function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
      return ChatPageRoutingModule;
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


    var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var routes = [{
      path: '',
      component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }];

    var ChatPageRoutingModule = function ChatPageRoutingModule() {
      _classCallCheck(this, ChatPageRoutingModule);
    };

    ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.module.ts":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.module.ts ***!
    \*************************************/

  /*! exports provided: ChatPageModule */

  /***/
  function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
      return ChatPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/chat/chat-routing.module.ts");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var ChatPageModule = function ChatPageModule() {
      _classCallCheck(this, ChatPageModule);
    };

    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatPageRoutingModule"]],
      declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
    })], ChatPageModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.page.scss":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n  z-index: 9999;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.idmsg1 {\n  font-size: 18pt;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.homeside p {\n  color: #592D8D;\n  font-size: 17px;\n  padding-right: 25px;\n  font-weight: 400;\n}\n\n.bottomchat {\n  width: 100%;\n  background: #fff;\n  padding: 20px 10PX;\n  position: fixed;\n  bottom: 28px;\n}\n\n.keyboardBottomchat {\n  width: 100%;\n  background: #fff;\n  padding: 20px 10PX;\n  position: fixed;\n  bottom: 0;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.chatmain {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  padding: 0 15px;\n  margin-bottom: 120px;\n}\n\n.chatinput {\n  border: 1px solid #592D8D;\n  border-radius: 26px;\n  --highlight-color-focused: transparent;\n  --highlight-color-valid: transparent;\n  --highlight-color-invalid: transparent;\n  --highlight-height:0;\n}\n\n.messagein {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  margin-bottom: 20px !important;\n}\n\n.messageinright {\n  display: flex !important;\n  justify-content: flex-end !important;\n  align-content: center !important;\n  align-items: center !important;\n  margin-bottom: 20px !important;\n}\n\n.messagein .message {\n  padding: 10px !important;\n  transition: all 250ms ease-in-out !important;\n  overflow: hidden !important;\n  background: #F4F5FC !important;\n  display: inline-flex !important;\n  padding: 10px 18px !important;\n  border-radius: 26px !important;\n  text-align: left !important;\n  max-width: 260px !important;\n  word-break: break-all;\n}\n\n.message p {\n  color: #220E0E !important;\n  float: left;\n  margin: 0;\n  font-size: 15px;\n  display: flex;\n  font-weight: 400;\n  word-wrap: break-word;\n}\n\n.message span {\n  color: #aaa;\n  padding-left: 8px;\n  font-size: 11px;\n  align-items: flex-end;\n  display: flex;\n  flex: none;\n}\n\n.time-right {\n  float: right;\n}\n\n.chatday {\n  font-size: 15px;\n  color: #828282;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.otherright {\n  transition: all 250ms ease-in-out !important;\n  overflow: hidden !important;\n  padding: 8px 18px !important;\n  background: #592D8D !important;\n  display: inline-flex !important;\n  max-width: 260px !important;\n  border-radius: 26px !important;\n}\n\n.otherright p {\n  color: #fff;\n  float: left;\n  margin: 0;\n  display: flex;\n  font-size: 15px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.otherright span {\n  color: #fff;\n  padding-left: 8px;\n  font-size: 11px;\n  align-items: flex-end;\n  display: flex;\n  flex: none;\n  word-break: break-all;\n}\n\n.bottomchat ion-textarea {\n  margin-top: 0;\n  align-items: center;\n  align-self: center;\n  --padding-top: 11px;\n  --highlight-background:transparent;\n  --highlight-color-focused: transparent;\n  --highlight-color-valid: transparent;\n  --highlight-color-invalid: transparent;\n  --highlight-height:0;\n}\n\n.sendin {\n  width: 10%;\n  vertical-align: middle;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBQTs7QURLQTtFQUVBLFNBQUE7QUNIQTs7QURPQTtFQUlBLDhDQUFBO0VBQ0EsYUFBQTtBQ0xBOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURPQTtFQUNBLGdCQUFBO0FDSkE7O0FET0E7RUFFQSxrQkFBQTtBQ0xBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEU0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0M7RUFFRCxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNSQTs7QURVQTtFQUNJLFdBQUE7RUFDSixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNQQTs7QURTQTtFQUVBLGtCQUFBO0FDUEE7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDUkE7O0FEV0E7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Usc0NBQUE7RUFDRCxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7QUNURDs7QURZQTtFQUVJLHdCQUFBO0VBQ0MsZ0NBQUE7RUFFQSw4QkFBQTtFQUNELDhCQUFBO0FDVko7O0FEYUE7RUFFSSx3QkFBQTtFQUNILG9DQUFBO0VBQ0ksZ0NBQUE7RUFFQSw4QkFBQTtFQUNELDhCQUFBO0FDWEo7O0FEYUE7RUFFSSx3QkFBQTtFQUNILDRDQUFBO0VBQ0csMkJBQUE7RUFDRiw4QkFBQTtFQUNFLCtCQUFBO0VBQ0QsNkJBQUE7RUFDQyw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ1hKOztBRGVDO0VBRUMseUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2JGOztBRGdCQTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNELGFBQUE7RUFDQSxVQUFBO0FDYkE7O0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGOztBRGlCQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZkE7O0FEbUJBO0VBR0ssNENBQUE7RUFDRCwyQkFBQTtFQUNDLDRCQUFBO0VBQ0YsOEJBQUE7RUFDSywrQkFBQTtFQUNKLDJCQUFBO0VBQ0QsOEJBQUE7QUNsQkg7O0FEcUJBO0VBQ0EsV0FBQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0YsYUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNJLHFCQUFBO0FDbEJOOztBRHNCQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNwQkE7O0FEdUJBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0ksc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0gsb0JBQUE7QUNyQkQ7O0FEd0JBO0VBRUEsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ3RCQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG56LWluZGV4Ojk5OTk7XHJcbn1cclxuXHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcbi5pZG1zZzF7XHJcbiAgICBmb250LXNpemU6IDE4cHQ7XHJcbn1cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuICBcclxuLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxuXHJcbn1cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhvbWVzaWRlIHBcclxue1xyXG5jb2xvcjojNTkyRDhEO1xyXG5mb250LXNpemU6MTdweDtcclxucGFkZGluZy1yaWdodDoyNXB4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbn1cclxuXHJcbi5ib3R0b21jaGF0XHJcbntcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZDojZmZmO1xyXG5wYWRkaW5nOjIwcHggMTBQWDtcclxucG9zaXRpb246Zml4ZWQ7XHJcbmJvdHRvbToyOHB4O1xyXG59XHJcbi5rZXlib2FyZEJvdHRvbWNoYXR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kOiNmZmY7XHJcbnBhZGRpbmc6MjBweCAxMFBYO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuYm90dG9tOjA7XHJcbn1cclxuLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmNoYXRtYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6MjBweDtcclxucGFkZGluZzowIDE1cHg7XHJcbm1hcmdpbi1ib3R0b206MTIwcHg7XHJcbn1cclxuXHJcbi5jaGF0aW5wdXRcclxue1xyXG5ib3JkZXI6MXB4IHNvbGlkICM1OTJEOEQ7XHJcbmJvcmRlci1yYWRpdXM6MjZweDtcclxuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB0cmFuc3BhcmVudDtcclxuIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHRyYW5zcGFyZW50O1xyXG4gLS1oaWdobGlnaHQtaGVpZ2h0OjA7XHJcbn1cclxuXHJcbi5tZXNzYWdlaW5cclxue1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcblx0ICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdCAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlaW5yaWdodFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kIWltcG9ydGFudDtcclxuXHQgICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWVzc2FnZWluIC5tZXNzYWdlXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuXHQgYmFja2dyb3VuZDogI0Y0RjVGQyAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuXHQgIHBhZGRpbmc6IDEwcHggMThweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50OyBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxyXG4gICAgXHJcblx0fVxyXG5cdFxyXG5cdC5tZXNzYWdlIHBcclxue1xyXG4gIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBtYXJnaW46MDtcclxuICBmb250LXNpemU6MTVweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLm1lc3NhZ2Ugc3BhbntcclxuIGNvbG9yOiAjYWFhO1xyXG4gcGFkZGluZy1sZWZ0OjhweDtcclxuIGZvbnQtc2l6ZToxMXB4O1xyXG4gYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleDogbm9uZTtcclxufVxyXG5cclxuLnRpbWUtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuIFxyXG59XHJcblxyXG4uY2hhdGRheVxyXG57XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5jb2xvcjojODI4MjgyO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLXRvcDoxNXB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcblxyXG59XHJcblxyXG4ub3RoZXJyaWdodFxyXG57XHJcblxyXG5cdCAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuXHQgICAgcGFkZGluZzogOHB4IDE4cHggIWltcG9ydGFudDtcclxuXHRcdCBiYWNrZ3JvdW5kOiAjNTkyRDhEICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMjYwcHggIWltcG9ydGFudDsgXHJcblx0ICBib3JkZXItcmFkaXVzOiAyNnB4ICFpbXBvcnRhbnQ7ICBcclxufVxyXG5cclxuLm90aGVycmlnaHQgcHtcclxuY29sb3I6I2ZmZjtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbjowO1xyXG5kaXNwbGF5OmZsZXg7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGxcclxuXHJcbn1cclxuXHJcbi5vdGhlcnJpZ2h0IHNwYW5cclxue1xyXG5jb2xvcjojZmZmO1xyXG5wYWRkaW5nLWxlZnQ6OHB4O1xyXG5mb250LXNpemU6MTFweDtcclxuYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleDogbm9uZTtcclxud29yZC1icmVhazogYnJlYWstYWxsXHJcbn1cclxuXHJcbi5ib3R0b21jaGF0IGlvbi10ZXh0YXJlYVxyXG57XHJcbm1hcmdpbi10b3A6MDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYWxpZ24tc2VsZjogY2VudGVyO1xyXG4tLXBhZGRpbmctdG9wOiAxMXB4O1xyXG4tLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB0cmFuc3BhcmVudDtcclxuXHQtLWhpZ2hsaWdodC1oZWlnaHQ6MDtcclxufVxyXG5cclxuLnNlbmRpblxyXG57XHJcbndpZHRoOjEwJTtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuZGlzcGxheTpmbGV4O1xyXG59XHJcblx0IiwiLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uaWRtc2cxIHtcbiAgZm9udC1zaXplOiAxOHB0O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaG9tZXNpZGUgcCB7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ib3R0b21jaGF0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBQWDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI4cHg7XG59XG5cbi5rZXlib2FyZEJvdHRvbWNoYXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAxMFBYO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cblxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGF0bWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG59XG5cbi5jaGF0aW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTkyRDhEO1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OjA7XG59XG5cbi5tZXNzYWdlaW4ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZWlucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlaW4gLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNGNEY1RkMgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm1lc3NhZ2UgcCB7XG4gIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubWVzc2FnZSBzcGFuIHtcbiAgY29sb3I6ICNhYWE7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogbm9uZTtcbn1cblxuLnRpbWUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jaGF0ZGF5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ub3RoZXJyaWdodCB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdGhlcnJpZ2h0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5vdGhlcnJpZ2h0IHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5ib3R0b21jaGF0IGlvbi10ZXh0YXJlYSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgLS1wYWRkaW5nLXRvcDogMTFweDtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogdHJhbnNwYXJlbnQ7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDowO1xufVxuXG4uc2VuZGluIHtcbiAgd2lkdGg6IDEwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/chat.page.ts":
  /*!***********************************!*\
    !*** ./src/app/chat/chat.page.ts ***!
    \***********************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
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


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"); // import { setInterval } from 'timers';


    var ChatPage = /*#__PURE__*/function () {
      function ChatPage(navController, translate, callNumber, apiProvider, keyboard, alertController) {
        _classCallCheck(this, ChatPage);

        this.navController = navController;
        this.translate = translate;
        this.callNumber = callNumber;
        this.apiProvider = apiProvider;
        this.keyboard = keyboard;
        this.alertController = alertController;
        this.msgArr = [];
        this.chat_message = "";
        this.admin_sync = false;
        this.bottomClass = false;
        this.is_admin_online = true;
        this.to_User_Id = '0';
        this.prevChatLen = 0; //Testing variables 

        this.msgcounter = 0;
        this.isUser = 'false';
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.client_id = localStorage.getItem('Client_id');
          this.from_User_Id = localStorage.getItem('incident_id');
          this.initMessages();
        }
      }, {
        key: "callnumber",
        value: function callnumber() {
          this.callNumber.callNumber('+91 90155 10510', true).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }, {
        key: "initMessages",
        value: function initMessages() {
          var _this = this;

          // console.log(this.formatAmPm(new Date(date)))
          this.startChat();
          this.chatInterval = setInterval(function () {
            _this.chat_Login_Update();

            console.log('calling update api');
          }, 4000);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.keyboard.onKeyboardWillShow().subscribe(function (res) {
            _this2.bottomClass = true;
          });
          this.keyboard.onKeyboardHide().subscribe(function (res) {
            _this2.bottomClass = false;
          });
        }
      }, {
        key: "startChat",
        value: function startChat() {
          var _this3 = this;

          console.log(this.from_User_Id, this.to_User_Id);
          var loadertext;
          this.translate.get('loadertext').subscribe(function (res) {
            loadertext = res;
          });
          this.apiProvider.presentLoadingDefault(loadertext);
          var data = new FormData();
          data.append('client_id', this.client_id);
          data.append('incident_id', this.from_User_Id);
          this.apiProvider.startChat('chat-start', data).subscribe(function (res) {
            console.log(res);
            _this3.guest_login_details_id = res.data.guest_login_details_id;
            console.log(_this3.guest_login_details_id);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "chat_Login_Update",
        value: function chat_Login_Update() {
          var _this4 = this;

          // clearInterval(this.chatInterval)
          var chatlogData = new FormData();
          chatlogData.append('client_id', this.client_id);
          chatlogData.append('from_user_id', this.from_User_Id);
          chatlogData.append('to_user_id', this.to_User_Id.toString());
          chatlogData.append('guest_login_details_id', this.guest_login_details_id);
          this.apiProvider.chatsync('chat-login-update', chatlogData).subscribe(function (res) {
            _this4.admin_sync = res.admin_sync;
            _this4.to_User_Id = res.to_user_id;
            _this4.is_admin_online = res.is_admin_online;
            _this4.msgArr = res.chat_history;
            _this4.newChatLen = _this4.msgArr.length;

            if (_this4.newChatLen > _this4.prevChatLen) {
              _this4.contentArea.scrollToBottom();

              _this4.prevChatLen = _this4.newChatLen;
            } else {}

            for (var i = 0; i < _this4.msgArr.length; i++) {
              _this4.msgArr[i].ampmTime = _this4.formatAmPm(_this4.msgArr[i].timestamp);
              _this4.msgArr[i].chat_message + " ";
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "formatAmPm",
        value: function formatAmPm(dates) {
          var date1 = new Date(dates.replace(/ /g, "T"));
          var date = new Date(date1 + " UTC");
          var hours = date.getHours();
          var minutes;
          minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'

          minutes = minutes < 10 ? '0' + minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
      }, {
        key: "sendmsg",
        value: function sendmsg() {
          var _this5 = this;

          if (this.to_User_Id != '0') {
            var myStaticChat = {
              'chat_message': this.chat_message,
              'chat_message_id': "31",
              'client_id': this.client_id,
              'from_user_id': this.from_User_Id,
              'status': "1",
              'timestamp': '',
              'sent_by': 'web',
              'to_user_id': this.to_User_Id
            };

            if (this.chat_message.length > 0) {
              var chat = new FormData();
              chat.append('chat_message', this.chat_message);
              chat.append('to_user_id', this.to_User_Id.toString());
              chat.append('from_user_id', this.from_User_Id);
              chat.append('client_id', this.client_id);
              chat.append('sent_by', 'web');
              this.apiProvider.insertChat('chat-insert', chat).subscribe(function (res) {
                console.log(res);

                _this5.msgArr.push(myStaticChat);

                _this5.chat_message = '';

                _this5.contentArea.scrollToBottom();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.unsyncAdminUser();
        }
      }, {
        key: "unsyncAdminUser",
        value: function unsyncAdminUser() {
          var _this6 = this;

          var unsyncData = new FormData();
          unsyncData.append('client_id', this.client_id);
          unsyncData.append('from_user_id', this.from_User_Id);
          this.apiProvider.unsyncAdminUser('chat-unsync-user-guest', unsyncData).subscribe(function (res) {
            console.log(res);

            if (res.status == false) {
              clearInterval(_this6.chatInterval);
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "backtoHome",
        value: function backtoHome() {
          this.presentAlert();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var message, no, yes, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.translate.get('do_you_want_to_leave_the_chat').subscribe(function (res) {
                      message = res;
                    });
                    this.translate.get('no').subscribe(function (res) {
                      no = res;
                    });
                    this.translate.get('yes').subscribe(function (res) {
                      yes = res;
                    });
                    _context.next = 5;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      backdropDismiss: false,
                      message: message,
                      mode: 'ios',
                      buttons: [{
                        text: no,
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }, {
                        text: yes,
                        handler: function handler() {
                          console.log('Buy clicked');

                          _this7.navController.navigateForward('/home');
                        }
                      }]
                    });

                  case 5:
                    alert = _context.sent;
                    _context.next = 8;
                    return alert.present();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], ChatPage.prototype, "contentArea", void 0);
    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/chat/chat.page.scss"))["default"]]
    })], ChatPage);
    /***/
  }
}]);
//# sourceMappingURL=chat-chat-module-es5.js.map