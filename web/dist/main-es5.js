(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+kh2":
    /*!*****************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-ibox/gx-ibox.component.ts ***!
      \*****************************************************************/

    /*! exports provided: GxIboxComponent */

    /***/
    function kh2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxIboxComponent", function () {
        return GxIboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var GxIboxComponent = function GxIboxComponent(eleRef) {
        var _this = this;

        _classCallCheck(this, GxIboxComponent);

        this.eleRef = eleRef;
        this.defaultClasses = ['card', 'text-center'];
        this.iconSize = '3x';
        this.defaultClasses.forEach(function (className) {
          _this.eleRef.nativeElement.classList.add(className);
        });
      };

      GxIboxComponent.ɵfac = function GxIboxComponent_Factory(t) {
        return new (t || GxIboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxIboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxIboxComponent,
        selectors: [["gx-ibox"]],
        inputs: {
          icon: "icon",
          label: "label",
          iconSize: ["icon-size", "iconSize"],
          iconClasses: ["icon-class", "iconClasses"]
        },
        decls: 5,
        vars: 6,
        consts: [[1, "card-body", "py-3", "px-1"], [3, "name", "size", "ngClass"], [1, "d-block", "f-12"]],
        template: function GxIboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon)("size", ctx.iconSize)("ngClass", ctx.iconClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.label));
          }
        },
        directives: [_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_1__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxIboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-ibox',
            templateUrl: './gx-ibox.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['icon']
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          iconSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['icon-size']
          }],
          iconClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['icon-class']
          }]
        });
      })();
      /***/

    },

    /***/
    "/Jzh":
    /*!********************************************************************!*\
      !*** ./src/gaxon/components/notifications/notifications.module.ts ***!
      \********************************************************************/

    /*! exports provided: NotificationsModule */

    /***/
    function Jzh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
        return NotificationsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pink_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pink.toast */
      "Oa/Q");
      /* harmony import */


      var _notyf_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notyf.toast */
      "CCvv");

      var NotificationsModule = function NotificationsModule() {
        _classCallCheck(this, NotificationsModule);
      };

      NotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotificationsModule
      });
      NotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotificationsModule_Factory(t) {
          return new (t || NotificationsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationsModule, {
          declarations: [_pink_toast__WEBPACK_IMPORTED_MODULE_2__["PinkToastComponent"], _notyf_toast__WEBPACK_IMPORTED_MODULE_3__["NotyfToastComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_pink_toast__WEBPACK_IMPORTED_MODULE_2__["PinkToastComponent"], _notyf_toast__WEBPACK_IMPORTED_MODULE_3__["NotyfToastComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pink_toast__WEBPACK_IMPORTED_MODULE_2__["PinkToastComponent"], _notyf_toast__WEBPACK_IMPORTED_MODULE_3__["NotyfToastComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_pink_toast__WEBPACK_IMPORTED_MODULE_2__["PinkToastComponent"], _notyf_toast__WEBPACK_IMPORTED_MODULE_3__["NotyfToastComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "/Tuz":
    /*!***********************************************************!*\
      !*** ./src/gaxon/components/gx-icon/gx-icon.component.ts ***!
      \***********************************************************/

    /*! exports provided: GxIconComponent */

    /***/
    function Tuz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxIconComponent", function () {
        return GxIconComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxIconComponent = /*#__PURE__*/function () {
        function GxIconComponent(elRef) {
          _classCallCheck(this, GxIconComponent);

          this.elRef = elRef;
          this.elRef.nativeElement.classList.add('icon');
        }

        _createClass(GxIconComponent, [{
          key: "name",
          set: function set(name) {
            if (this._previewsName) {
              this.elRef.nativeElement.classList.remove('icon-' + this._previewsName);
            }

            this._previewsName = name;
            this.elRef.nativeElement.classList.add('icon-' + this._previewsName);
          }
        }, {
          key: "size",
          set: function set(size) {
            if (this._previewsSize) {
              this.elRef.nativeElement.classList.remove('icon-' + this._previewsSize);
            }

            this._previewsSize = size;
            this.elRef.nativeElement.classList.add('icon-' + this._previewsSize);
          }
        }, {
          key: "fw",
          set: function set(input) {
            if (input === true || input === 'true') {
              this.elRef.nativeElement.classList.add('icon-fw');
            } else {
              this.elRef.nativeElement.classList.remove('icon-fw');
            }
          }
        }]);

        return GxIconComponent;
      }();

      GxIconComponent.ɵfac = function GxIconComponent_Factory(t) {
        return new (t || GxIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxIconComponent,
        selectors: [["gx-icon"]],
        inputs: {
          name: "name",
          size: "size",
          fw: "fw"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxIconComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-icon',
            template: "\n    <ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fw: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\saive\Desktop\GITHAPPITICKET\HAPPI_TICKET_MGMT\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0L9v":
    /*!*************************************!*\
      !*** ./src/gaxon/mix/animations.ts ***!
      \*************************************/

    /*! exports provided: appAnimations */

    /***/
    function L9v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appAnimations", function () {
        return appAnimations;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var appAnimations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapseInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '0px',
        display: 'none',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        display: 'block',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapseAppSidebar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        display: 'none',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        display: 'block',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('toggleWidth', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '{{newWidth}}%'
      }), {
        params: {
          newWidth: 0
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        display: 'none',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        display: 'block',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibleInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-in'))])];
      /***/
    },

    /***/
    "1ica":
    /*!****************************************************!*\
      !*** ./src/gaxon/pipes/html-to-plain-text.pipe.ts ***!
      \****************************************************/

    /*! exports provided: HtmlToPlainTextPipe */

    /***/
    function ica(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HtmlToPlainTextPipe", function () {
        return HtmlToPlainTextPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HtmlToPlainTextPipe = /*#__PURE__*/function () {
        function HtmlToPlainTextPipe() {
          _classCallCheck(this, HtmlToPlainTextPipe);
        }

        _createClass(HtmlToPlainTextPipe, [{
          key: "transform",
          value: function transform(value, args) {
            return value ? String(value).replace(/<[^>]+>/gm, '') : '';
          }
        }]);

        return HtmlToPlainTextPipe;
      }();

      HtmlToPlainTextPipe.ɵfac = function HtmlToPlainTextPipe_Factory(t) {
        return new (t || HtmlToPlainTextPipe)();
      };

      HtmlToPlainTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "htmlToPlainText",
        type: HtmlToPlainTextPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlToPlainTextPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'htmlToPlainText'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1sdc":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/gx-card/card-tool/card-tool.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CardToolComponent */

    /***/
    function sdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardToolComponent", function () {
        return CardToolComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardToolComponent = /*#__PURE__*/function () {
        function CardToolComponent(elRef) {
          _classCallCheck(this, CardToolComponent);

          this.elRef = elRef;
          this.elRef.nativeElement.classList.add('dt-card__tools');
        }

        _createClass(CardToolComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardToolComponent;
      }();

      CardToolComponent.ɵfac = function CardToolComponent_Factory(t) {
        return new (t || CardToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CardToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardToolComponent,
        selectors: [["card-tool"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CardToolComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardToolComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'card-tool',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1u1q":
    /*!************************************!*\
      !*** ./src/gaxon/modules/index.ts ***!
      \************************************/

    /*! exports provided: SharedModule */

    /***/
    function u1q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/shared.module */
      "UYrV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
      });
      /***/

    },

    /***/
    "2aXH":
    /*!******************************************************!*\
      !*** ./src/app/data-db/data/apps/mail/folders-db.ts ***!
      \******************************************************/

    /*! exports provided: MailFoldersDb */

    /***/
    function aXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailFoldersDb", function () {
        return MailFoldersDb;
      });

      var MailFoldersDb = function MailFoldersDb() {
        _classCallCheck(this, MailFoldersDb);
      };

      MailFoldersDb.list = [{
        'id': 1,
        'handle': 'inbox',
        'title': 'Inbox',
        'icon': 'inbox'
      }, {
        'id': 2,
        'handle': 'sent',
        'title': 'Sent',
        'icon': 'send'
      }, {
        'id': 3,
        'handle': 'drafts',
        'title': 'Drafts',
        'icon': 'open-mail'
      }, {
        'id': 4,
        'handle': 'spam',
        'title': 'Spam',
        'icon': 'spam'
      }, {
        'id': 5,
        'handle': 'trash',
        'title': 'Trash',
        'icon': 'trash'
      }, {
        'id': 6,
        'handle': 'archive',
        'title': 'Archive',
        'icon': 'archive'
      }];
      /***/
    },

    /***/
    "3gN1":
    /*!************************************************************************!*\
      !*** ./src/gaxon/components/bs-media-object/bs-media-object.module.ts ***!
      \************************************************************************/

    /*! exports provided: BsMediaObjectModule */

    /***/
    function gN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsMediaObjectModule", function () {
        return BsMediaObjectModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/gx-icon/gx-icon.module */
      "GGVI");
      /* harmony import */


      var _bs_media_object_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bs-media-object.component */
      "f/eI");

      var BsMediaObjectModule = function BsMediaObjectModule() {
        _classCallCheck(this, BsMediaObjectModule);
      };

      BsMediaObjectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BsMediaObjectModule
      });
      BsMediaObjectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BsMediaObjectModule_Factory(t) {
          return new (t || BsMediaObjectModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__["GxIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsMediaObjectModule, {
          declarations: [_bs_media_object_component__WEBPACK_IMPORTED_MODULE_3__["BsMediaObjectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__["GxIconModule"]],
          exports: [_bs_media_object_component__WEBPACK_IMPORTED_MODULE_3__["BsMediaObjectComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsMediaObjectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__["GxIconModule"]],
            declarations: [_bs_media_object_component__WEBPACK_IMPORTED_MODULE_3__["BsMediaObjectComponent"]],
            exports: [_bs_media_object_component__WEBPACK_IMPORTED_MODULE_3__["BsMediaObjectComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "4Kj1":
    /*!****************************************************!*\
      !*** ./src/gaxon/components/cards/cards.module.ts ***!
      \****************************************************/

    /*! exports provided: CardsModule */

    /***/
    function Kj1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsModule", function () {
        return CardsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @amcharts/amcharts3-angular */
      "Z7g2");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../gx-icon/gx-icon.module */
      "GGVI");
      /* harmony import */


      var _gx_card_gx_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../gx-card/gx-card.module */
      "MH0B");
      /* harmony import */


      var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../widgets/widgets.module */
      "cx8X");
      /* harmony import */


      var _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../bs-card/bs-card.module */
      "O1xL");
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../directives/directives.module */
      "WlwI");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "lHLr");
      /* harmony import */


      var _gx_counter_card_gx_counter_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./gx-counter-card/gx-counter-card.component */
      "raWP");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./gx-chart/gx-chart.component */
      "ztgp");
      /* harmony import */


      var _gx_trending_card_gx_trending_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./gx-trending-card/gx-trending-card.component */
      "O8wv");
      /* harmony import */


      var _gx_progress_card_gx_progress_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./gx-progress-card/gx-progress-card.component */
      "KraU");
      /* harmony import */


      var _gx_project_card_gx_project_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./gx-project-card/gx-project-card.component */
      "RZr1");
      /* harmony import */


      var _gx_employee_card_gx_employee_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./gx-employee-card/gx-employee-card.component */
      "QVfP");
      /* harmony import */


      var _gx_newsletter_card_gx_newsletter_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./gx-newsletter-card/gx-newsletter-card.component */
      "9o+U");
      /* harmony import */


      var _gx_info_card_gx_info_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./gx-info-card/gx-info-card.component */
      "LzvE");
      /* harmony import */


      var _gx_ibox_gx_ibox_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./gx-ibox/gx-ibox.component */
      "+kh2");
      /* harmony import */


      var _gx_media_card_gx_media_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./gx-media-card/gx-media-card.component */
      "9vMM");
      /* harmony import */


      var _gx_intro_card_gx_intro_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./gx-intro-card/gx-intro-card.component */
      "Tv/v");
      /* harmony import */


      var _gx_trip_card_gx_trip_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./gx-trip-card/gx-trip-card.component */
      "Pkuf");
      /* harmony import */


      var _gx_basic_card_gx_basic_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./gx-basic-card/gx-basic-card.component */
      "4yRy");
      /* harmony import */


      var _gx_crepto_news_gx_crepto_news_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./gx-crepto-news/gx-crepto-news.component */
      "IaOw");
      /* harmony import */


      var _gx_chart_overlay_gx_chart_overlay_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./gx-chart-overlay/gx-chart-overlay.component */
      "PcWZ");
      /* harmony import */


      var _gx_client_card_gx_client_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./gx-client-card/gx-client-card.component */
      "lztN");
      /* harmony import */


      var _gx_activities_gx_activities_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./gx-activities/gx-activities.component */
      "bFl3");
      /* harmony import */


      var _gx_status_card_gx_status_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./gx-status-card/gx-status-card.component */
      "Bcfy");
      /* harmony import */


      var _gx_report_card_gx_report_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./gx-report-card/gx-report-card.component */
      "SMY0");
      /* harmony import */


      var _gx_operator_card_gx_operator_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./gx-operator-card/gx-operator-card.component */
      "BiET");
      /* harmony import */


      var _gx_analytic_card_gx_analytic_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./gx-analytic-card/gx-analytic-card.component */
      "jtJr");
      /* harmony import */


      var _gx_social_card_gx_social_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./gx-social-card/gx-social-card.component */
      "rtug");
      /* harmony import */


      var _gx_value_calculator_gx_value_calculator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./gx-value-calculator/gx-value-calculator.component */
      "USGB");
      /* harmony import */


      var _gx_echarts_liquidfill_gx_echarts_liquidfill_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./gx-echarts-liquidfill/gx-echarts-liquidfill.component */
      "Z4LX");
      /* harmony import */


      var _gx_chartist_chart_gx_chartist_chart_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./gx-chartist-chart/gx-chartist-chart.component */
      "xXxx");
      /* harmony import */


      var _gx_tasks_report_gx_tasks_report_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./gx-tasks-report/gx-tasks-report.component */
      "MLg1");
      /* harmony import */


      var _gx_slider_card_gx_slider_card_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./gx-slider-card/gx-slider-card.component */
      "qlxq");
      /* harmony import */


      var _gaxon_components_cards_gx_info_basic_card_gx_info_basic_card_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @gaxon/components/cards/gx-info-basic-card/gx-info-basic-card.component */
      "uC76");
      /* harmony import */


      var _gaxon_components_cards_gx_info_classic_card_gx_info_classic_card_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @gaxon/components/cards/gx-info-classic-card/gx-info-classic-card.component */
      "wX8A");
      /* harmony import */


      var _gaxon_components_cards_gx_info_panel_card_gx_info_panel_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @gaxon/components/cards/gx-info-panel-card/gx-info-panel-card.component */
      "Ubxp");
      /* harmony import */


      var _gx_properties_gx_properties_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./gx-properties/gx-properties.component */
      "zOMt");
      /* harmony import */


      var _gx_top_vendors_gx_top_vendors_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./gx-top-vendors/gx-top-vendors.component */
      "i4vF");
      /* harmony import */


      var _gx_ratings_gx_ratings_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./gx-ratings/gx-ratings.component */
      "6ZfA");
      /* harmony import */


      var _gx_referral_traffic_gx_referral_traffic_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./gx-referral-traffic/gx-referral-traffic.component */
      "kSyU");
      /* harmony import */


      var _gx_invoices_gx_invoices_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./gx-invoices/gx-invoices.component */
      "ZOp1");
      /* harmony import */


      var _gx_my_tasks_gx_my_tasks_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./gx-my-tasks/gx-my-tasks.component */
      "z74p");
      /* harmony import */


      var _gaxon_components_cards_gx_flex_card_gx_flex_card_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @gaxon/components/cards/gx-flex-card/gx-flex-card.component */
      "bL0+");
      /* harmony import */


      var _gx_statistics_card_gx_statistics_card_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./gx-statistics-card/gx-statistics-card.component */
      "tev2");
      /* harmony import */


      var _gx_clients_list_gx_clients_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./gx-clients-list/gx-clients-list.component */
      "yhBE");
      /* harmony import */


      var _gx_crypto_card_gx_crypto_card_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./gx-crypto-card/gx-crypto-card.component */
      "g2id");
      /* harmony import */


      var _gx_currency_calculator_gx_currency_calculator_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./gx-currency-calculator/gx-currency-calculator.component */
      "8e4M");
      /* harmony import */


      var _gx_invite_friends_card_gx_invite_friends_card_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./gx-invite-friends-card/gx-invite-friends-card.component */
      "M70d");
      /* harmony import */


      var _gx_download_apps_card_gx_download_apps_card_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./gx-download-apps-card/gx-download-apps-card.component */
      "XcXI");
      /* harmony import */


      var _gaxon_components_cards_gx_online_user_list_card_gx_online_user_list_card_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! @gaxon/components/cards/gx-online-user-list-card/gx-online-user-list-card.component */
      "Vp11");
      /* harmony import */


      var _gaxon_components_cards_gx_media_icon_card_gx_media_icon_card_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! @gaxon/components/cards/gx-media-icon-card/gx-media-icon-card.component */
      "G5Zu");

      var CardsModule = function CardsModule() {
        _classCallCheck(this, CardsModule);
      };

      CardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CardsModule
      });
      CardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CardsModule_Factory(t) {
          return new (t || CardsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__["AmChartsModule"], _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_8__["GxIconModule"], _gx_card_gx_card_module__WEBPACK_IMPORTED_MODULE_9__["GxCardModule"], _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_11__["BsCardModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__["WidgetsModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_12__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardsModule, {
          declarations: [_gx_counter_card_gx_counter_card_component__WEBPACK_IMPORTED_MODULE_14__["GxCounterCardComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_15__["GxChartComponent"], _gx_trending_card_gx_trending_card_component__WEBPACK_IMPORTED_MODULE_16__["GxTrendingCardComponent"], _gx_progress_card_gx_progress_card_component__WEBPACK_IMPORTED_MODULE_17__["GxProgressCardComponent"], _gx_project_card_gx_project_card_component__WEBPACK_IMPORTED_MODULE_18__["GxProjectCardComponent"], _gx_employee_card_gx_employee_card_component__WEBPACK_IMPORTED_MODULE_19__["GxEmployeeCardComponent"], _gx_newsletter_card_gx_newsletter_card_component__WEBPACK_IMPORTED_MODULE_20__["GxNewsletterCardComponent"], _gx_info_card_gx_info_card_component__WEBPACK_IMPORTED_MODULE_21__["GxInfoCardComponent"], _gx_ibox_gx_ibox_component__WEBPACK_IMPORTED_MODULE_22__["GxIboxComponent"], _gx_media_card_gx_media_card_component__WEBPACK_IMPORTED_MODULE_23__["GxMediaCardComponent"], _gx_intro_card_gx_intro_card_component__WEBPACK_IMPORTED_MODULE_24__["GxIntroCardComponent"], _gx_trip_card_gx_trip_card_component__WEBPACK_IMPORTED_MODULE_25__["GxTripCardComponent"], _gx_basic_card_gx_basic_card_component__WEBPACK_IMPORTED_MODULE_26__["GxBasicCardComponent"], _gx_crepto_news_gx_crepto_news_component__WEBPACK_IMPORTED_MODULE_27__["GxCreptoNewsComponent"], _gx_chart_overlay_gx_chart_overlay_component__WEBPACK_IMPORTED_MODULE_28__["GxChartOverlayComponent"], _gx_client_card_gx_client_card_component__WEBPACK_IMPORTED_MODULE_29__["GxClientCardComponent"], _gx_activities_gx_activities_component__WEBPACK_IMPORTED_MODULE_30__["GxActivitiesComponent"], _gx_status_card_gx_status_card_component__WEBPACK_IMPORTED_MODULE_31__["GxStatusCardComponent"], _gx_report_card_gx_report_card_component__WEBPACK_IMPORTED_MODULE_32__["GxReportCardComponent"], _gx_operator_card_gx_operator_card_component__WEBPACK_IMPORTED_MODULE_33__["GxOperatorCardComponent"], _gx_analytic_card_gx_analytic_card_component__WEBPACK_IMPORTED_MODULE_34__["GxAnalyticCardComponent"], _gx_social_card_gx_social_card_component__WEBPACK_IMPORTED_MODULE_35__["GxSocialCardComponent"], _gx_value_calculator_gx_value_calculator_component__WEBPACK_IMPORTED_MODULE_36__["GxValueCalculatorComponent"], _gx_echarts_liquidfill_gx_echarts_liquidfill_component__WEBPACK_IMPORTED_MODULE_37__["GxEchartsLiquidfillComponent"], _gx_chartist_chart_gx_chartist_chart_component__WEBPACK_IMPORTED_MODULE_38__["GxChartistChartComponent"], _gx_tasks_report_gx_tasks_report_component__WEBPACK_IMPORTED_MODULE_39__["GxTasksReportComponent"], _gx_slider_card_gx_slider_card_component__WEBPACK_IMPORTED_MODULE_40__["GxSliderCardComponent"], _gaxon_components_cards_gx_info_basic_card_gx_info_basic_card_component__WEBPACK_IMPORTED_MODULE_41__["GxInfoBasicCardComponent"], _gaxon_components_cards_gx_info_classic_card_gx_info_classic_card_component__WEBPACK_IMPORTED_MODULE_42__["GxInfoClassicCardComponent"], _gaxon_components_cards_gx_info_panel_card_gx_info_panel_card_component__WEBPACK_IMPORTED_MODULE_43__["GxInfoPanelCardComponent"], _gx_properties_gx_properties_component__WEBPACK_IMPORTED_MODULE_44__["GxPropertiesComponent"], _gx_top_vendors_gx_top_vendors_component__WEBPACK_IMPORTED_MODULE_45__["GxTopVendorsComponent"], _gx_ratings_gx_ratings_component__WEBPACK_IMPORTED_MODULE_46__["GxRatingsComponent"], _gx_referral_traffic_gx_referral_traffic_component__WEBPACK_IMPORTED_MODULE_47__["GxReferralTrafficComponent"], _gx_invoices_gx_invoices_component__WEBPACK_IMPORTED_MODULE_48__["GxInvoicesComponent"], _gx_my_tasks_gx_my_tasks_component__WEBPACK_IMPORTED_MODULE_49__["GxMyTasksComponent"], _gaxon_components_cards_gx_flex_card_gx_flex_card_component__WEBPACK_IMPORTED_MODULE_50__["GxFlexCardComponent"], _gx_statistics_card_gx_statistics_card_component__WEBPACK_IMPORTED_MODULE_51__["GxStatisticsCardComponent"], _gx_clients_list_gx_clients_list_component__WEBPACK_IMPORTED_MODULE_52__["GxClientsListComponent"], _gx_crypto_card_gx_crypto_card_component__WEBPACK_IMPORTED_MODULE_53__["GxCryptoCardComponent"], _gx_currency_calculator_gx_currency_calculator_component__WEBPACK_IMPORTED_MODULE_54__["GxCurrencyCalculatorComponent"], _gx_invite_friends_card_gx_invite_friends_card_component__WEBPACK_IMPORTED_MODULE_55__["GxInviteFriendsCardComponent"], _gx_download_apps_card_gx_download_apps_card_component__WEBPACK_IMPORTED_MODULE_56__["GxDownloadAppsCardComponent"], _gaxon_components_cards_gx_online_user_list_card_gx_online_user_list_card_component__WEBPACK_IMPORTED_MODULE_57__["GxOnlineUserListCardComponent"], _gaxon_components_cards_gx_media_icon_card_gx_media_icon_card_component__WEBPACK_IMPORTED_MODULE_58__["GxMediaIconCardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__["AmChartsModule"], _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_8__["GxIconModule"], _gx_card_gx_card_module__WEBPACK_IMPORTED_MODULE_9__["GxCardModule"], _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_11__["BsCardModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__["WidgetsModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_12__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"]],
          exports: [_gx_counter_card_gx_counter_card_component__WEBPACK_IMPORTED_MODULE_14__["GxCounterCardComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_15__["GxChartComponent"], _gx_trending_card_gx_trending_card_component__WEBPACK_IMPORTED_MODULE_16__["GxTrendingCardComponent"], _gx_progress_card_gx_progress_card_component__WEBPACK_IMPORTED_MODULE_17__["GxProgressCardComponent"], _gx_project_card_gx_project_card_component__WEBPACK_IMPORTED_MODULE_18__["GxProjectCardComponent"], _gx_employee_card_gx_employee_card_component__WEBPACK_IMPORTED_MODULE_19__["GxEmployeeCardComponent"], _gx_newsletter_card_gx_newsletter_card_component__WEBPACK_IMPORTED_MODULE_20__["GxNewsletterCardComponent"], _gx_info_card_gx_info_card_component__WEBPACK_IMPORTED_MODULE_21__["GxInfoCardComponent"], _gx_ibox_gx_ibox_component__WEBPACK_IMPORTED_MODULE_22__["GxIboxComponent"], _gx_media_card_gx_media_card_component__WEBPACK_IMPORTED_MODULE_23__["GxMediaCardComponent"], _gx_intro_card_gx_intro_card_component__WEBPACK_IMPORTED_MODULE_24__["GxIntroCardComponent"], _gx_trip_card_gx_trip_card_component__WEBPACK_IMPORTED_MODULE_25__["GxTripCardComponent"], _gx_basic_card_gx_basic_card_component__WEBPACK_IMPORTED_MODULE_26__["GxBasicCardComponent"], _gx_crepto_news_gx_crepto_news_component__WEBPACK_IMPORTED_MODULE_27__["GxCreptoNewsComponent"], _gx_chart_overlay_gx_chart_overlay_component__WEBPACK_IMPORTED_MODULE_28__["GxChartOverlayComponent"], _gx_client_card_gx_client_card_component__WEBPACK_IMPORTED_MODULE_29__["GxClientCardComponent"], _gx_activities_gx_activities_component__WEBPACK_IMPORTED_MODULE_30__["GxActivitiesComponent"], _gx_status_card_gx_status_card_component__WEBPACK_IMPORTED_MODULE_31__["GxStatusCardComponent"], _gx_report_card_gx_report_card_component__WEBPACK_IMPORTED_MODULE_32__["GxReportCardComponent"], _gx_operator_card_gx_operator_card_component__WEBPACK_IMPORTED_MODULE_33__["GxOperatorCardComponent"], _gx_analytic_card_gx_analytic_card_component__WEBPACK_IMPORTED_MODULE_34__["GxAnalyticCardComponent"], _gx_social_card_gx_social_card_component__WEBPACK_IMPORTED_MODULE_35__["GxSocialCardComponent"], _gx_value_calculator_gx_value_calculator_component__WEBPACK_IMPORTED_MODULE_36__["GxValueCalculatorComponent"], _gx_echarts_liquidfill_gx_echarts_liquidfill_component__WEBPACK_IMPORTED_MODULE_37__["GxEchartsLiquidfillComponent"], _gx_chartist_chart_gx_chartist_chart_component__WEBPACK_IMPORTED_MODULE_38__["GxChartistChartComponent"], _gx_tasks_report_gx_tasks_report_component__WEBPACK_IMPORTED_MODULE_39__["GxTasksReportComponent"], _gx_slider_card_gx_slider_card_component__WEBPACK_IMPORTED_MODULE_40__["GxSliderCardComponent"], _gaxon_components_cards_gx_info_basic_card_gx_info_basic_card_component__WEBPACK_IMPORTED_MODULE_41__["GxInfoBasicCardComponent"], _gaxon_components_cards_gx_info_classic_card_gx_info_classic_card_component__WEBPACK_IMPORTED_MODULE_42__["GxInfoClassicCardComponent"], _gaxon_components_cards_gx_info_panel_card_gx_info_panel_card_component__WEBPACK_IMPORTED_MODULE_43__["GxInfoPanelCardComponent"], _gx_properties_gx_properties_component__WEBPACK_IMPORTED_MODULE_44__["GxPropertiesComponent"], _gx_top_vendors_gx_top_vendors_component__WEBPACK_IMPORTED_MODULE_45__["GxTopVendorsComponent"], _gx_ratings_gx_ratings_component__WEBPACK_IMPORTED_MODULE_46__["GxRatingsComponent"], _gx_referral_traffic_gx_referral_traffic_component__WEBPACK_IMPORTED_MODULE_47__["GxReferralTrafficComponent"], _gx_invoices_gx_invoices_component__WEBPACK_IMPORTED_MODULE_48__["GxInvoicesComponent"], _gx_my_tasks_gx_my_tasks_component__WEBPACK_IMPORTED_MODULE_49__["GxMyTasksComponent"], _gaxon_components_cards_gx_flex_card_gx_flex_card_component__WEBPACK_IMPORTED_MODULE_50__["GxFlexCardComponent"], _gx_statistics_card_gx_statistics_card_component__WEBPACK_IMPORTED_MODULE_51__["GxStatisticsCardComponent"], _gx_clients_list_gx_clients_list_component__WEBPACK_IMPORTED_MODULE_52__["GxClientsListComponent"], _gx_crypto_card_gx_crypto_card_component__WEBPACK_IMPORTED_MODULE_53__["GxCryptoCardComponent"], _gx_currency_calculator_gx_currency_calculator_component__WEBPACK_IMPORTED_MODULE_54__["GxCurrencyCalculatorComponent"], _gx_invite_friends_card_gx_invite_friends_card_component__WEBPACK_IMPORTED_MODULE_55__["GxInviteFriendsCardComponent"], _gx_download_apps_card_gx_download_apps_card_component__WEBPACK_IMPORTED_MODULE_56__["GxDownloadAppsCardComponent"], _gaxon_components_cards_gx_online_user_list_card_gx_online_user_list_card_component__WEBPACK_IMPORTED_MODULE_57__["GxOnlineUserListCardComponent"], _gaxon_components_cards_gx_media_icon_card_gx_media_icon_card_component__WEBPACK_IMPORTED_MODULE_58__["GxMediaIconCardComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_6__["AmChartsModule"], _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_8__["GxIconModule"], _gx_card_gx_card_module__WEBPACK_IMPORTED_MODULE_9__["GxCardModule"], _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_11__["BsCardModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__["WidgetsModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_12__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"]],
            declarations: [_gx_counter_card_gx_counter_card_component__WEBPACK_IMPORTED_MODULE_14__["GxCounterCardComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_15__["GxChartComponent"], _gx_trending_card_gx_trending_card_component__WEBPACK_IMPORTED_MODULE_16__["GxTrendingCardComponent"], _gx_progress_card_gx_progress_card_component__WEBPACK_IMPORTED_MODULE_17__["GxProgressCardComponent"], _gx_project_card_gx_project_card_component__WEBPACK_IMPORTED_MODULE_18__["GxProjectCardComponent"], _gx_employee_card_gx_employee_card_component__WEBPACK_IMPORTED_MODULE_19__["GxEmployeeCardComponent"], _gx_newsletter_card_gx_newsletter_card_component__WEBPACK_IMPORTED_MODULE_20__["GxNewsletterCardComponent"], _gx_info_card_gx_info_card_component__WEBPACK_IMPORTED_MODULE_21__["GxInfoCardComponent"], _gx_ibox_gx_ibox_component__WEBPACK_IMPORTED_MODULE_22__["GxIboxComponent"], _gx_media_card_gx_media_card_component__WEBPACK_IMPORTED_MODULE_23__["GxMediaCardComponent"], _gx_intro_card_gx_intro_card_component__WEBPACK_IMPORTED_MODULE_24__["GxIntroCardComponent"], _gx_trip_card_gx_trip_card_component__WEBPACK_IMPORTED_MODULE_25__["GxTripCardComponent"], _gx_basic_card_gx_basic_card_component__WEBPACK_IMPORTED_MODULE_26__["GxBasicCardComponent"], _gx_crepto_news_gx_crepto_news_component__WEBPACK_IMPORTED_MODULE_27__["GxCreptoNewsComponent"], _gx_chart_overlay_gx_chart_overlay_component__WEBPACK_IMPORTED_MODULE_28__["GxChartOverlayComponent"], _gx_client_card_gx_client_card_component__WEBPACK_IMPORTED_MODULE_29__["GxClientCardComponent"], _gx_activities_gx_activities_component__WEBPACK_IMPORTED_MODULE_30__["GxActivitiesComponent"], _gx_status_card_gx_status_card_component__WEBPACK_IMPORTED_MODULE_31__["GxStatusCardComponent"], _gx_report_card_gx_report_card_component__WEBPACK_IMPORTED_MODULE_32__["GxReportCardComponent"], _gx_operator_card_gx_operator_card_component__WEBPACK_IMPORTED_MODULE_33__["GxOperatorCardComponent"], _gx_analytic_card_gx_analytic_card_component__WEBPACK_IMPORTED_MODULE_34__["GxAnalyticCardComponent"], _gx_social_card_gx_social_card_component__WEBPACK_IMPORTED_MODULE_35__["GxSocialCardComponent"], _gx_value_calculator_gx_value_calculator_component__WEBPACK_IMPORTED_MODULE_36__["GxValueCalculatorComponent"], _gx_echarts_liquidfill_gx_echarts_liquidfill_component__WEBPACK_IMPORTED_MODULE_37__["GxEchartsLiquidfillComponent"], _gx_chartist_chart_gx_chartist_chart_component__WEBPACK_IMPORTED_MODULE_38__["GxChartistChartComponent"], _gx_tasks_report_gx_tasks_report_component__WEBPACK_IMPORTED_MODULE_39__["GxTasksReportComponent"], _gx_slider_card_gx_slider_card_component__WEBPACK_IMPORTED_MODULE_40__["GxSliderCardComponent"], _gaxon_components_cards_gx_info_basic_card_gx_info_basic_card_component__WEBPACK_IMPORTED_MODULE_41__["GxInfoBasicCardComponent"], _gaxon_components_cards_gx_info_classic_card_gx_info_classic_card_component__WEBPACK_IMPORTED_MODULE_42__["GxInfoClassicCardComponent"], _gaxon_components_cards_gx_info_panel_card_gx_info_panel_card_component__WEBPACK_IMPORTED_MODULE_43__["GxInfoPanelCardComponent"], _gx_properties_gx_properties_component__WEBPACK_IMPORTED_MODULE_44__["GxPropertiesComponent"], _gx_top_vendors_gx_top_vendors_component__WEBPACK_IMPORTED_MODULE_45__["GxTopVendorsComponent"], _gx_ratings_gx_ratings_component__WEBPACK_IMPORTED_MODULE_46__["GxRatingsComponent"], _gx_referral_traffic_gx_referral_traffic_component__WEBPACK_IMPORTED_MODULE_47__["GxReferralTrafficComponent"], _gx_invoices_gx_invoices_component__WEBPACK_IMPORTED_MODULE_48__["GxInvoicesComponent"], _gx_my_tasks_gx_my_tasks_component__WEBPACK_IMPORTED_MODULE_49__["GxMyTasksComponent"], _gaxon_components_cards_gx_flex_card_gx_flex_card_component__WEBPACK_IMPORTED_MODULE_50__["GxFlexCardComponent"], _gx_statistics_card_gx_statistics_card_component__WEBPACK_IMPORTED_MODULE_51__["GxStatisticsCardComponent"], _gx_clients_list_gx_clients_list_component__WEBPACK_IMPORTED_MODULE_52__["GxClientsListComponent"], _gx_crypto_card_gx_crypto_card_component__WEBPACK_IMPORTED_MODULE_53__["GxCryptoCardComponent"], _gx_currency_calculator_gx_currency_calculator_component__WEBPACK_IMPORTED_MODULE_54__["GxCurrencyCalculatorComponent"], _gx_invite_friends_card_gx_invite_friends_card_component__WEBPACK_IMPORTED_MODULE_55__["GxInviteFriendsCardComponent"], _gx_download_apps_card_gx_download_apps_card_component__WEBPACK_IMPORTED_MODULE_56__["GxDownloadAppsCardComponent"], _gaxon_components_cards_gx_online_user_list_card_gx_online_user_list_card_component__WEBPACK_IMPORTED_MODULE_57__["GxOnlineUserListCardComponent"], _gaxon_components_cards_gx_media_icon_card_gx_media_icon_card_component__WEBPACK_IMPORTED_MODULE_58__["GxMediaIconCardComponent"]],
            exports: [_gx_counter_card_gx_counter_card_component__WEBPACK_IMPORTED_MODULE_14__["GxCounterCardComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_15__["GxChartComponent"], _gx_trending_card_gx_trending_card_component__WEBPACK_IMPORTED_MODULE_16__["GxTrendingCardComponent"], _gx_progress_card_gx_progress_card_component__WEBPACK_IMPORTED_MODULE_17__["GxProgressCardComponent"], _gx_project_card_gx_project_card_component__WEBPACK_IMPORTED_MODULE_18__["GxProjectCardComponent"], _gx_employee_card_gx_employee_card_component__WEBPACK_IMPORTED_MODULE_19__["GxEmployeeCardComponent"], _gx_newsletter_card_gx_newsletter_card_component__WEBPACK_IMPORTED_MODULE_20__["GxNewsletterCardComponent"], _gx_info_card_gx_info_card_component__WEBPACK_IMPORTED_MODULE_21__["GxInfoCardComponent"], _gx_ibox_gx_ibox_component__WEBPACK_IMPORTED_MODULE_22__["GxIboxComponent"], _gx_media_card_gx_media_card_component__WEBPACK_IMPORTED_MODULE_23__["GxMediaCardComponent"], _gx_intro_card_gx_intro_card_component__WEBPACK_IMPORTED_MODULE_24__["GxIntroCardComponent"], _gx_trip_card_gx_trip_card_component__WEBPACK_IMPORTED_MODULE_25__["GxTripCardComponent"], _gx_basic_card_gx_basic_card_component__WEBPACK_IMPORTED_MODULE_26__["GxBasicCardComponent"], _gx_crepto_news_gx_crepto_news_component__WEBPACK_IMPORTED_MODULE_27__["GxCreptoNewsComponent"], _gx_chart_overlay_gx_chart_overlay_component__WEBPACK_IMPORTED_MODULE_28__["GxChartOverlayComponent"], _gx_client_card_gx_client_card_component__WEBPACK_IMPORTED_MODULE_29__["GxClientCardComponent"], _gx_activities_gx_activities_component__WEBPACK_IMPORTED_MODULE_30__["GxActivitiesComponent"], _gx_status_card_gx_status_card_component__WEBPACK_IMPORTED_MODULE_31__["GxStatusCardComponent"], _gx_report_card_gx_report_card_component__WEBPACK_IMPORTED_MODULE_32__["GxReportCardComponent"], _gx_operator_card_gx_operator_card_component__WEBPACK_IMPORTED_MODULE_33__["GxOperatorCardComponent"], _gx_analytic_card_gx_analytic_card_component__WEBPACK_IMPORTED_MODULE_34__["GxAnalyticCardComponent"], _gx_social_card_gx_social_card_component__WEBPACK_IMPORTED_MODULE_35__["GxSocialCardComponent"], _gx_value_calculator_gx_value_calculator_component__WEBPACK_IMPORTED_MODULE_36__["GxValueCalculatorComponent"], _gx_echarts_liquidfill_gx_echarts_liquidfill_component__WEBPACK_IMPORTED_MODULE_37__["GxEchartsLiquidfillComponent"], _gx_chartist_chart_gx_chartist_chart_component__WEBPACK_IMPORTED_MODULE_38__["GxChartistChartComponent"], _gx_tasks_report_gx_tasks_report_component__WEBPACK_IMPORTED_MODULE_39__["GxTasksReportComponent"], _gx_slider_card_gx_slider_card_component__WEBPACK_IMPORTED_MODULE_40__["GxSliderCardComponent"], _gaxon_components_cards_gx_info_basic_card_gx_info_basic_card_component__WEBPACK_IMPORTED_MODULE_41__["GxInfoBasicCardComponent"], _gaxon_components_cards_gx_info_classic_card_gx_info_classic_card_component__WEBPACK_IMPORTED_MODULE_42__["GxInfoClassicCardComponent"], _gaxon_components_cards_gx_info_panel_card_gx_info_panel_card_component__WEBPACK_IMPORTED_MODULE_43__["GxInfoPanelCardComponent"], _gx_properties_gx_properties_component__WEBPACK_IMPORTED_MODULE_44__["GxPropertiesComponent"], _gx_top_vendors_gx_top_vendors_component__WEBPACK_IMPORTED_MODULE_45__["GxTopVendorsComponent"], _gx_ratings_gx_ratings_component__WEBPACK_IMPORTED_MODULE_46__["GxRatingsComponent"], _gx_referral_traffic_gx_referral_traffic_component__WEBPACK_IMPORTED_MODULE_47__["GxReferralTrafficComponent"], _gx_invoices_gx_invoices_component__WEBPACK_IMPORTED_MODULE_48__["GxInvoicesComponent"], _gx_my_tasks_gx_my_tasks_component__WEBPACK_IMPORTED_MODULE_49__["GxMyTasksComponent"], _gaxon_components_cards_gx_flex_card_gx_flex_card_component__WEBPACK_IMPORTED_MODULE_50__["GxFlexCardComponent"], _gx_statistics_card_gx_statistics_card_component__WEBPACK_IMPORTED_MODULE_51__["GxStatisticsCardComponent"], _gx_clients_list_gx_clients_list_component__WEBPACK_IMPORTED_MODULE_52__["GxClientsListComponent"], _gx_crypto_card_gx_crypto_card_component__WEBPACK_IMPORTED_MODULE_53__["GxCryptoCardComponent"], _gx_currency_calculator_gx_currency_calculator_component__WEBPACK_IMPORTED_MODULE_54__["GxCurrencyCalculatorComponent"], _gx_invite_friends_card_gx_invite_friends_card_component__WEBPACK_IMPORTED_MODULE_55__["GxInviteFriendsCardComponent"], _gx_download_apps_card_gx_download_apps_card_component__WEBPACK_IMPORTED_MODULE_56__["GxDownloadAppsCardComponent"], _gaxon_components_cards_gx_online_user_list_card_gx_online_user_list_card_component__WEBPACK_IMPORTED_MODULE_57__["GxOnlineUserListCardComponent"], _gaxon_components_cards_gx_media_icon_card_gx_media_icon_card_component__WEBPACK_IMPORTED_MODULE_58__["GxMediaIconCardComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "4yRy":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-basic-card/gx-basic-card.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GxBasicCardComponent */

    /***/
    function yRy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxBasicCardComponent", function () {
        return GxBasicCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxBasicCardComponent_gx_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.data.icon);
        }
      }

      function GxBasicCardComponent_h3_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 6);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.titleColor)("innerHTML", ctx_r1.data.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function GxBasicCardComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function GxBasicCardComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.data.action["class"])("routerLink", ctx_r3.data.action.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.action.label);
        }
      }

      var _c0 = ["*"];

      var GxBasicCardComponent = function GxBasicCardComponent(eleRef) {
        _classCallCheck(this, GxBasicCardComponent);

        this.eleRef = eleRef;
        this.bodyClasses = 'text-center';
        this.eleRef.nativeElement.classList.add('dt-card');
      };

      GxBasicCardComponent.ɵfac = function GxBasicCardComponent_Factory(t) {
        return new (t || GxBasicCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxBasicCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxBasicCardComponent,
        selectors: [["gx-basic-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          titleColor: "titleColor",
          data: "data"
        },
        ngContentSelectors: _c0,
        decls: 6,
        vars: 5,
        consts: [[3, "ngClass"], ["size", "6x", "class", "mb-5", 3, "name", 4, "ngIf"], [3, "ngClass", "innerHTML", 4, "ngIf"], ["class", "card-text", 3, "innerHTML", 4, "ngIf"], [3, "ngClass", "routerLink", 4, "ngIf"], ["size", "6x", 1, "mb-5", 3, "name"], [3, "ngClass", "innerHTML"], [1, "card-text", 3, "innerHTML"], [3, "ngClass", "routerLink"]],
        template: function GxBasicCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxBasicCardComponent_gx_icon_2_Template, 1, 1, "gx-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxBasicCardComponent_h3_3_Template, 1, 2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxBasicCardComponent_p_4_Template, 1, 1, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxBasicCardComponent_a_5_Template, 2, 3, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1iYXNpYy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxBasicCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-basic-card',
            templateUrl: './gx-basic-card.component.html',
            styleUrls: ['./gx-basic-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "5XCi":
    /*!****************************************************!*\
      !*** ./src/gaxon/components/views/views.module.ts ***!
      \****************************************************/

    /*! exports provided: ViewsModule */

    /***/
    function XCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewsModule", function () {
        return ViewsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../bs-card/bs-card.module */
      "O1xL");
      /* harmony import */


      var _gx_grid_gx_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gx-grid/gx-grid.component */
      "6nyw");
      /* harmony import */


      var _gx_grid_gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gx-grid/gx-grid-footer/gx-grid-footer.component */
      "abyN");
      /* harmony import */


      var _gx_grid_gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gx-grid/gx-grid-header/gx-grid-header.component */
      "lgqE");
      /* harmony import */


      var _gx_list_gx_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gx-list/gx-list.component */
      "sqi4");
      /* harmony import */


      var _gx_list_gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./gx-list/gx-list-footer/gx-list-footer.component */
      "BDua");
      /* harmony import */


      var _gx_list_gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./gx-list/gx-list-header/gx-list-header.component */
      "enPh");

      var ViewsModule = function ViewsModule() {
        _classCallCheck(this, ViewsModule);
      };

      ViewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ViewsModule
      });
      ViewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ViewsModule_Factory(t) {
          return new (t || ViewsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_2__["BsCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewsModule, {
          declarations: [_gx_grid_gx_grid_component__WEBPACK_IMPORTED_MODULE_3__["GxGridComponent"], _gx_grid_gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_5__["GxGridHeaderComponent"], _gx_grid_gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_4__["GxGridFooterComponent"], _gx_list_gx_list_component__WEBPACK_IMPORTED_MODULE_6__["GxListComponent"], _gx_list_gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_7__["GxListFooterComponent"], _gx_list_gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_8__["GxListHeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_2__["BsCardModule"]],
          exports: [_gx_grid_gx_grid_component__WEBPACK_IMPORTED_MODULE_3__["GxGridComponent"], _gx_grid_gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_5__["GxGridHeaderComponent"], _gx_grid_gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_4__["GxGridFooterComponent"], _gx_list_gx_list_component__WEBPACK_IMPORTED_MODULE_6__["GxListComponent"], _gx_list_gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_7__["GxListFooterComponent"], _gx_list_gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_8__["GxListHeaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_2__["BsCardModule"]],
            declarations: [_gx_grid_gx_grid_component__WEBPACK_IMPORTED_MODULE_3__["GxGridComponent"], _gx_grid_gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_5__["GxGridHeaderComponent"], _gx_grid_gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_4__["GxGridFooterComponent"], _gx_list_gx_list_component__WEBPACK_IMPORTED_MODULE_6__["GxListComponent"], _gx_list_gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_7__["GxListFooterComponent"], _gx_list_gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_8__["GxListHeaderComponent"]],
            exports: [_gx_grid_gx_grid_component__WEBPACK_IMPORTED_MODULE_3__["GxGridComponent"], _gx_grid_gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_5__["GxGridHeaderComponent"], _gx_grid_gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_4__["GxGridFooterComponent"], _gx_list_gx_list_component__WEBPACK_IMPORTED_MODULE_6__["GxListComponent"], _gx_list_gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_7__["GxListFooterComponent"], _gx_list_gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_8__["GxListHeaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5qYI":
    /*!***************************************************!*\
      !*** ./src/gaxon/directives/gx-card.directive.ts ***!
      \***************************************************/

    /*! exports provided: GxCardDirective */

    /***/
    function qYI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCardDirective", function () {
        return GxCardDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GxCardDirective = /*#__PURE__*/function () {
        function GxCardDirective(el) {
          _classCallCheck(this, GxCardDirective);

          this.el = el;
          this.el.nativeElement.classList.add('dt-card');
        }

        _createClass(GxCardDirective, [{
          key: "fullHeight",
          set: function set(isFullHeight) {
            if (isFullHeight !== false) {
              this.el.nativeElement.classList.add('dt-card__full-height');
            }
          }
        }]);

        return GxCardDirective;
      }();

      GxCardDirective.ɵfac = function GxCardDirective_Factory(t) {
        return new (t || GxCardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxCardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GxCardDirective,
        selectors: [["", "gxCard", ""]],
        inputs: {
          fullHeight: "fullHeight"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCardDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[gxCard]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          fullHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "5xlS":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/gx-toggle/gx-checkbox/gx-checkbox.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GxCheckboxComponent */

    /***/
    function xlS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCheckboxComponent", function () {
        return GxCheckboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GxCheckboxComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        }
      }

      function GxCheckboxComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        }
      }

      var nextUniqueId = 0;

      var GxCheckboxComponent = /*#__PURE__*/function () {
        function GxCheckboxComponent(eleRef) {
          var _this2 = this;

          _classCallCheck(this, GxCheckboxComponent);

          this.eleRef = eleRef;
          this.gxInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.uniqueId = 'gx-checkbox-' + ++nextUniqueId;
          this.defaultHostClasses = 'dt-checkbox dt-checkbox-icon dt-checkbox-only';
          this.defaultHostClasses.split(' ').forEach(function (className) {
            _this2.eleRef.nativeElement.classList.add(className);
          });
        }

        _createClass(GxCheckboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Stop Event propagation on click host
           * @param event
           */

        }, {
          key: "onHostCLick",
          value: function onHostCLick(event) {
            event.stopPropagation();
          }
          /**
           * On toggle change
           */

        }, {
          key: "onInputChange",
          value: function onInputChange() {
            this.gxInputChange.emit(this.gxModel);
          }
        }]);

        return GxCheckboxComponent;
      }();

      GxCheckboxComponent.ɵfac = function GxCheckboxComponent_Factory(t) {
        return new (t || GxCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxCheckboxComponent,
        selectors: [["gx-checkbox"]],
        hostBindings: function GxCheckboxComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxCheckboxComponent_click_HostBindingHandler($event) {
              return ctx.onHostCLick($event);
            });
          }
        },
        inputs: {
          gxModel: "gxModel",
          indeterminate: "indeterminate"
        },
        outputs: {
          gxInputChange: "gxInputChange"
        },
        decls: 6,
        vars: 6,
        consts: [["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change"], [1, "font-weight-light", "dt-checkbox-content", 3, "for"], [1, "unchecked"], ["name", "box-o", "size", "xl", 3, "fw"], ["class", "checked", 4, "ngIf"], [1, "checked"], ["name", "box-check-o", "size", "xl", 1, "text-primary", 3, "fw"], ["name", "intermediate-o", "size", "xl", 1, "text-primary", 3, "fw"]],
        template: function GxCheckboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GxCheckboxComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.gxModel = $event;
            })("change", function GxCheckboxComponent_Template_input_change_0_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxCheckboxComponent_span_4_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxCheckboxComponent_span_5_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.uniqueId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gxModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.uniqueId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.indeterminate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.indeterminate);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1jaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCheckboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-checkbox',
            templateUrl: './gx-checkbox.component.html',
            styleUrls: ['./gx-checkbox.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          gxModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gxInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHostCLick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "6ZfA":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-ratings/gx-ratings.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GxRatingsComponent */

    /***/
    function ZfA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxRatingsComponent", function () {
        return GxRatingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          width: a0
        };
      };

      function GxRatingsComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.getPercentageWidth(review_r1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r1.totalReview);
        }
      }

      var _c1 = function _c1() {
        return {
          width: "88%"
        };
      };

      var GxRatingsComponent = /*#__PURE__*/function () {
        function GxRatingsComponent() {
          _classCallCheck(this, GxRatingsComponent);
        }

        _createClass(GxRatingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getPercentageWidth",
          value: function getPercentageWidth(review) {
            var pctValue = review.avgRating / review.masRating * 100;
            return pctValue + '%';
          }
        }]);

        return GxRatingsComponent;
      }();

      GxRatingsComponent.ɵfac = function GxRatingsComponent_Factory(t) {
        return new (t || GxRatingsComponent)();
      };

      GxRatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxRatingsComponent,
        selectors: [["gx-ratings"]],
        inputs: {
          reviews: "reviews"
        },
        decls: 16,
        vars: 3,
        consts: [[1, "mb-5"], [1, "d-flex", "mb-1"], [1, "display-1", "text-dark", "mr-3", "font-weight-light"], [1, "rating-container", "flex-column"], [1, "ratings"], [1, "rated", 3, "ngStyle"], [1, "ratings-review", "f-16", "text-light-gray"], [1, "count-number", "text-light-gray"], [1, "mb-0"], [1, "dt-list", "flex-column"], ["class", "dt-list__item", 4, "ngFor", "ngForOf"], [1, "dt-list__item"], [1, "rating-container"], [1, "ratings-review"], [1, "count-number"]],
        template: function GxRatingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "4.5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "350");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Reviews ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Overall Ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GxRatingsComponent_li_15_Template, 8, 4, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxRatingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-ratings',
            templateUrl: './gx-ratings.component.html',
            styleUrls: ['./gx-ratings.component.scss']
          }]
        }], function () {
          return [];
        }, {
          reviews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "6c5l":
    /*!*************************************************************************************!*\
      !*** ./src/gaxon/components/bs-card/card-img-overlay/card-img-overlay.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: CardImgOverlayComponent */

    /***/
    function c5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardImgOverlayComponent", function () {
        return CardImgOverlayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CardImgOverlayComponent_h3_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.cardTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CardImgOverlayComponent_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h5", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.cardSubTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CardImgOverlayComponent_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.cardText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var _c0 = ["*"];

      var CardImgOverlayComponent = /*#__PURE__*/function () {
        function CardImgOverlayComponent(elRef, renderer) {
          _classCallCheck(this, CardImgOverlayComponent);

          this.elRef = elRef;
          this.renderer = renderer;
          this.cardTitle = '';
          this.cardSubTitle = '';
          this.cardText = '';
        }

        _createClass(CardImgOverlayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.addClass(this.elRef.nativeElement, 'card-img-overlay');
          }
        }]);

        return CardImgOverlayComponent;
      }();

      CardImgOverlayComponent.ɵfac = function CardImgOverlayComponent_Factory(t) {
        return new (t || CardImgOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      CardImgOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardImgOverlayComponent,
        selectors: [["bs-card-img-overlay"]],
        inputs: {
          cardTitle: ["card-title", "cardTitle"],
          cardSubTitle: ["card-subtitle", "cardSubTitle"],
          cardText: ["card-text", "cardText"]
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 3,
        consts: [["class", "card-title", 3, "innerHTML", 4, "ngIf"], ["class", "card-subtitle mb-2 text-muted", 3, "innerHTML", 4, "ngIf"], ["class", "card-text", 3, "innerHTML", 4, "ngIf"], [1, "card-title", 3, "innerHTML"], [1, "card-subtitle", "mb-2", "text-muted", 3, "innerHTML"], [1, "card-text", 3, "innerHTML"]],
        template: function CardImgOverlayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardImgOverlayComponent_h3_0_Template, 1, 1, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardImgOverlayComponent_h5_1_Template, 1, 1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardImgOverlayComponent_p_2_Template, 1, 1, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardSubTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardText);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardImgOverlayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-card-img-overlay',
            template: "\n    <h3 *ngIf=\"cardTitle\" class=\"card-title\" [innerHTML]=\"cardTitle\"></h3>\n    <h5 *ngIf=\"cardSubTitle\" class=\"card-subtitle mb-2 text-muted\" [innerHTML]=\"cardSubTitle\"></h5>\n    <p *ngIf=\"cardText\" class=\"card-text\" [innerHTML]=\"cardText\"></p>\n    <ng-content></ng-content>\n  ",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-title']
          }],
          cardSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-subtitle']
          }],
          cardText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-text']
          }]
        });
      })();
      /***/

    },

    /***/
    "6nyw":
    /*!*****************************************************************!*\
      !*** ./src/gaxon/components/views/gx-grid/gx-grid.component.ts ***!
      \*****************************************************************/

    /*! exports provided: GxGridComponent */

    /***/
    function nyw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxGridComponent", function () {
        return GxGridComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gx-grid-header/gx-grid-header.component */
      "lgqE");
      /* harmony import */


      var _gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-grid-footer/gx-grid-footer.component */
      "abyN");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _bs_card_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../bs-card/card-footer/card-footer.component */
      "mBAb");

      function GxGridComponent_bs_card_footer_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bs-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["gx-grid-header"]], "*", [["gx-grid-footer"]]];
      var _c1 = ["gx-grid-header", "*", "gx-grid-footer"];

      var GxGridComponent = function GxGridComponent(elRef) {
        _classCallCheck(this, GxGridComponent);

        this.elRef = elRef;
        this.body_classlist = '';
        this.elRef.nativeElement.classList.add('card');
      };

      GxGridComponent.ɵfac = function GxGridComponent_Factory(t) {
        return new (t || GxGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxGridComponent,
        selectors: [["gx-grid"]],
        contentQueries: function GxGridComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_1__["GxGridHeaderComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_2__["GxGridFooterComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridFooter = _t.first);
          }
        },
        inputs: {
          body_classlist: ["body-class", "body_classlist"]
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [[3, "ngClass"], [4, "ngIf"]],
        template: function GxGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bs-card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxGridComponent_bs_card_footer_3_Template, 2, 0, "bs-card-footer", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", ctx.body_classlist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridFooter);
          }
        },
        directives: [_bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _bs_card_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__["CardFooterComponent"]],
        styles: ["./gx-grid.component.scss"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxGridComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-grid',
            templateUrl: './gx-grid.component.html',
            styles: ['./gx-grid.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          gridHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_gx_grid_header_gx_grid_header_component__WEBPACK_IMPORTED_MODULE_1__["GxGridHeaderComponent"]]
          }],
          gridFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_gx_grid_footer_gx_grid_footer_component__WEBPACK_IMPORTED_MODULE_2__["GxGridFooterComponent"]]
          }],
          body_classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['body-class']
          }]
        });
      })();
      /***/

    },

    /***/
    "8e4M":
    /*!***********************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-currency-calculator/gx-currency-calculator.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: GxCurrencyCalculatorComponent */

    /***/
    function e4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCurrencyCalculatorComponent", function () {
        return GxCurrencyCalculatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var GxCurrencyCalculatorComponent = /*#__PURE__*/function () {
        function GxCurrencyCalculatorComponent() {
          _classCallCheck(this, GxCurrencyCalculatorComponent);
        }

        _createClass(GxCurrencyCalculatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxCurrencyCalculatorComponent;
      }();

      GxCurrencyCalculatorComponent.ɵfac = function GxCurrencyCalculatorComponent_Factory(t) {
        return new (t || GxCurrencyCalculatorComponent)();
      };

      GxCurrencyCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxCurrencyCalculatorComponent,
        selectors: [["gx-currency-calculator"]],
        inputs: {
          cardTitle: "cardTitle"
        },
        decls: 40,
        vars: 1,
        consts: [[1, "mb-6", 3, "card-title"], [1, "form-row", "mb-7"], [1, "col-sm-4", "col-6"], ["for", "currency-type-1"], ["id", "currency-type-1", 1, "custom-select", "custom-select-sm"], ["selected", ""], ["value", "1"], ["value", "2"], ["for", "currency-type"], ["id", "currency-type", 1, "custom-select", "custom-select-sm"], [1, "col-sm-4", "col-12", "mt-5", "mt-sm-0"], ["for", "amount"], ["type", "text", "id", "amount", "placeholder", "Amount", 1, "form-control", "form-control-sm"], [1, "mb-6"], [1, "d-block", "f-12", "mb-1"], [1, "mb-1", "display-4", "font-weight-500", "text-primary"], [1, "d-block"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "f-14", "mr-2"], ["type", "reset", 1, "btn", "btn-light", "btn-sm", "f-14"]],
        template: function GxCurrencyCalculatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "From");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BTC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "RPL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LTE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "From");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "USD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Yen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dinar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amount(BTC)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1 Euro = 1.23 USD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "11466.78 USD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "@ 1 BTC = 6718.72 USD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Buy Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card-title", ctx.cardTitle);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1jdXJyZW5jeS1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCurrencyCalculatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-currency-calculator',
            templateUrl: './gx-currency-calculator.component.html',
            styleUrls: ['./gx-currency-calculator.component.scss']
          }]
        }], function () {
          return [];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9o+U":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-newsletter-card/gx-newsletter-card.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxNewsletterCardComponent */

    /***/
    function oU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxNewsletterCardComponent", function () {
        return GxNewsletterCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxNewsletterCardComponent_card_body_0_h4_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.newsletter.title);
        }
      }

      function GxNewsletterCardComponent_card_body_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GxNewsletterCardComponent_card_body_0_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r1.valid && ctx_r3.onSubmit(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxNewsletterCardComponent_card_body_0_h4_3_Template, 3, 1, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gx-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GxNewsletterCardComponent_card_body_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.inputEmail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.bodyClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newsletter.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.newsletter.titleIcon)("fw", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.newsletter.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.inputEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.newsletter.btnText);
        }
      }

      var GxNewsletterCardComponent = /*#__PURE__*/function () {
        function GxNewsletterCardComponent() {
          _classCallCheck(this, GxNewsletterCardComponent);

          this.onSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * On click add memeber
         * @param event
         * @param {ElementRef} btnAddMember
         */


        _createClass(GxNewsletterCardComponent, [{
          key: "onSubmit",
          value: function onSubmit(form) {
            this.onSubmitted.emit(form);
          }
        }]);

        return GxNewsletterCardComponent;
      }();

      GxNewsletterCardComponent.ɵfac = function GxNewsletterCardComponent_Factory(t) {
        return new (t || GxNewsletterCardComponent)();
      };

      GxNewsletterCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxNewsletterCardComponent,
        selectors: [["gx-newsletter-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          newsletter: "newsletter"
        },
        outputs: {
          onSubmitted: "onSubmitted"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngSubmit"], ["subscriptionForm", "ngForm"], ["class", "text-primary mb-7", 4, "ngIf"], [1, "mb-2"], ["size", "5x", 3, "name", "fw"], [1, "lead", "text-dark", "mb-5"], [1, "form-group", "mb-6"], ["for", "user-email", 1, "sr-only"], ["type", "email", "id", "user-email", "name", "inputEmail", "placeholder", "Enter your email...", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "text-primary", "mb-7"], [1, "align-middle"]],
        template: function GxNewsletterCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxNewsletterCardComponent_card_body_0_Template, 14, 7, "card-body", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsletter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtbmV3c2xldHRlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYztBQUFsQjs7QUFGQTtFQU1JLGFBQWE7QUFBakIiLCJmaWxlIjoiZ3gtbmV3c2xldHRlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgJi5kdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5kdC1jYXJkX19mdWxsLWhlaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxNewsletterCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-newsletter-card',
            templateUrl: './gx-newsletter-card.component.html',
            styleUrls: ['./gx-newsletter-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          newsletter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9vMM":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-media-card/gx-media-card.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GxMediaCardComponent */

    /***/
    function vMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxMediaCardComponent", function () {
        return GxMediaCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxMediaCardComponent_img_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.data.title || "Media Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxMediaCardComponent_h4_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title);
        }
      }

      function GxMediaCardComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.data.actionRoute)("ngClass", ctx_r2.data.actionStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.actionLabel);
        }
      }

      var _c0 = ["*"];

      var GxMediaCardComponent = function GxMediaCardComponent() {
        _classCallCheck(this, GxMediaCardComponent);

        this.textStyle = 'mb-3';
      };

      GxMediaCardComponent.ɵfac = function GxMediaCardComponent_Factory(t) {
        return new (t || GxMediaCardComponent)();
      };

      GxMediaCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxMediaCardComponent,
        selectors: [["gx-media-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          textStyle: "textStyle",
          data: "data"
        },
        ngContentSelectors: _c0,
        decls: 6,
        vars: 6,
        consts: [["class", "card-img-top", 3, "src", "alt", 4, "ngIf"], [3, "ngClass"], ["class", "mb-1", 4, "ngIf"], [1, "card-text", 3, "ngClass", "innerHTML"], ["class", "card-link ", 3, "routerLink", "ngClass", 4, "ngIf"], [1, "card-img-top", 3, "src", "alt"], [1, "mb-1"], [1, "card-link", 3, "routerLink", "ngClass"]],
        template: function GxMediaCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxMediaCardComponent_img_0_Template, 1, 2, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "bs-card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxMediaCardComponent_h4_3_Template, 2, 1, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxMediaCardComponent_a_5_Template, 2, 3, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.media);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textStyle)("innerHTML", ctx.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1tZWRpYS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxMediaCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-media-card',
            templateUrl: './gx-media-card.component.html',
            styleUrls: ['./gx-media-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AxyE":
    /*!**********************************************************!*\
      !*** ./src/gaxon/components/gx-badge/gx-badge.module.ts ***!
      \**********************************************************/

    /*! exports provided: GxBadgeModule */

    /***/
    function AxyE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxBadgeModule", function () {
        return GxBadgeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-badge.component */
      "u1Bl");

      var GxBadgeModule = function GxBadgeModule() {
        _classCallCheck(this, GxBadgeModule);
      };

      GxBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GxBadgeModule
      });
      GxBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GxBadgeModule_Factory(t) {
          return new (t || GxBadgeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GxBadgeModule, {
          declarations: [_gx_badge_component__WEBPACK_IMPORTED_MODULE_2__["GxBadgeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_gx_badge_component__WEBPACK_IMPORTED_MODULE_2__["GxBadgeComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxBadgeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_gx_badge_component__WEBPACK_IMPORTED_MODULE_2__["GxBadgeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_gx_badge_component__WEBPACK_IMPORTED_MODULE_2__["GxBadgeComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // apiUrl : 'http://13.233.192.177:8033/'
        apiUrl: 'https://ticket.happimobiles.com/' //  apiUrl : 'http://localhost:8033/'

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BDua":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/views/gx-list/gx-list-footer/gx-list-footer.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxListFooterComponent */

    /***/
    function BDua(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxListFooterComponent", function () {
        return GxListFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxListFooterComponent = function GxListFooterComponent() {
        _classCallCheck(this, GxListFooterComponent);
      };

      GxListFooterComponent.ɵfac = function GxListFooterComponent_Factory(t) {
        return new (t || GxListFooterComponent)();
      };

      GxListFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxListFooterComponent,
        selectors: [["gx-list-footer"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxListFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%] {height: 100%}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxListFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-list-footer',
            template: "\n    <ng-content></ng-content>",
            styles: [':host {height: 100%}']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Bcfy":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-status-card/gx-status-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxStatusCardComponent */

    /***/
    function Bcfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxStatusCardComponent", function () {
        return GxStatusCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxStatusCardComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.badge.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.badge.name);
        }
      }

      function GxStatusCardComponent_gx_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 6);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.icon.name)("ngClass", ctx_r1.icon.color);
        }
      }

      function GxStatusCardComponent_div_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.items[0].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.items[0].text);
        }
      }

      function GxStatusCardComponent_div_4_ul_2_li_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
        }

        if (rf & 2) {
          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r6.tooltip.color);
        }
      }

      function GxStatusCardComponent_div_4_ul_2_li_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r6.tooltip.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.tooltip.value);
        }
      }

      function GxStatusCardComponent_div_4_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxStatusCardComponent_div_4_ul_2_li_1_span_3_Template, 1, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GxStatusCardComponent_div_4_ul_2_li_1_span_6_Template, 2, 2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.tooltip);
        }
      }

      function GxStatusCardComponent_div_4_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxStatusCardComponent_div_4_ul_2_li_1_Template, 7, 4, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.items);
        }
      }

      function GxStatusCardComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxStatusCardComponent_div_4_ng_container_1_Template, 5, 2, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxStatusCardComponent_div_4_ul_2_Template, 2, 1, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.items.length == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.items.length > 1);
        }
      }

      var GxStatusCardComponent = /*#__PURE__*/function () {
        function GxStatusCardComponent(viewRef) {
          _classCallCheck(this, GxStatusCardComponent);

          this.viewRef = viewRef;
          this.viewRef.nativeElement.classList.add('dt-card');
        }

        _createClass(GxStatusCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxStatusCardComponent;
      }();

      GxStatusCardComponent.ɵfac = function GxStatusCardComponent_Factory(t) {
        return new (t || GxStatusCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxStatusCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxStatusCardComponent,
        selectors: [["gx-status-card"]],
        inputs: {
          badge: "badge",
          items: "items",
          icon: "icon"
        },
        decls: 5,
        vars: 3,
        consts: [[1, "p-xl-8", "py-sm-8", "py-6", "px-4"], ["class", "badge badge-top-right", 3, "ngClass", 4, "ngIf"], [1, "media"], ["size", "5x", "class", "mr-xl-5 mr-3 align-self-center", 3, "name", "ngClass", 4, "ngIf"], ["class", "media-body", 4, "ngIf"], [1, "badge", "badge-top-right", 3, "ngClass"], ["size", "5x", 1, "mr-xl-5", "mr-3", "align-self-center", 3, "name", "ngClass"], [1, "media-body"], [4, "ngIf"], ["class", "invoice-list", 4, "ngIf"], [1, "mb-1", "h1"], [1, "d-block", "text-light-gray"], [1, "invoice-list"], ["class", "invoice-list__item", 4, "ngFor", "ngForOf"], [1, "invoice-list__item"], [1, "invoice-list__number"], ["class", "dot-shape", 3, "ngClass", 4, "ngIf"], [1, "invoice-list__label"], ["class", "custom-tooltip", 3, "ngClass", 4, "ngIf"], [1, "dot-shape", 3, "ngClass"], [1, "custom-tooltip", 3, "ngClass"]],
        template: function GxStatusCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxStatusCardComponent_span_1_Template, 2, 2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxStatusCardComponent_gx_icon_3_Template, 1, 2, "gx-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxStatusCardComponent_div_4_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badge);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1zdGF0dXMtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxStatusCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-status-card',
            templateUrl: './gx-status-card.component.html',
            styleUrls: ['./gx-status-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          badge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "BiET":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-operator-card/gx-operator-card.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GxOperatorCardComponent */

    /***/
    function BiET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxOperatorCardComponent", function () {
        return GxOperatorCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../widgets/gx-avatar/gx-avatar.component */
      "tjww");
      /* harmony import */


      var _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../widgets/gx-status-bar/gx-status-bar.component */
      "W9Kp");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var GxOperatorCardComponent = /*#__PURE__*/function () {
        function GxOperatorCardComponent() {
          _classCallCheck(this, GxOperatorCardComponent);
        }

        _createClass(GxOperatorCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxOperatorCardComponent;
      }();

      GxOperatorCardComponent.ɵfac = function GxOperatorCardComponent_Factory(t) {
        return new (t || GxOperatorCardComponent)();
      };

      GxOperatorCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxOperatorCardComponent,
        selectors: [["gx-operator-card"]],
        inputs: {
          operator: "operator",
          cardTitle: "cardTitle",
          isLiked: "isLiked"
        },
        decls: 28,
        vars: 14,
        consts: [[1, "dt-card__header"], [1, "dt-card__title"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "dt-fab-btn", "shadow-lg", "mt-n2", "toggle-button", 3, "ngClass", "click"], [1, "show"], ["name", "thumbs-up"], [1, "hide"], ["name", "thumbs-down"], [1, "media", "flex-column", "flex-sm-row", "mb-6"], [1, "size-110", "mb-6", "mb-sm-0", "mr-sm-10", 3, "user"], [1, "media-body", "align-self-sm-center"], [1, "h3", "font-weight-600", "mb-3"], ["href", "javascript:void(0)"], [1, "rating-container", "justify-content-start", "mb-2"], [1, "ratings"], [1, "rated", 2, "width", "90%"], [1, "ratings-review"], [1, "count-number"], ["barPosition", "start", "barColor", "bg-success", "textColor", "text-gray", 3, "fullWidth", "suffix", "fillVal", "maxVal"], ["href", "javascript:void(0)", 1, "card-link", "text-uppercase", "f-12", "font-weight-500"]],
        template: function GxOperatorCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxOperatorCardComponent_Template_a_click_5_listener() {
              return ctx.isLiked = !ctx.isLiked;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gx-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "gx-avatar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "gx-status-bar", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.isLiked));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.operator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operator.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operator.rating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 200, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullWidth", true)("suffix", "\xA0/ " + ctx.operator.ticketsHandled)("fillVal", ctx.operator.ticketsClosed)("maxVal", ctx.operator.ticketsHandled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operator.description);
          }
        },
        directives: [_gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__["CardHeadingComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__["CardToolComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_6__["GxAvatarComponent"], _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_7__["GxStatusBarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1vcGVyYXRvci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxOperatorCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-operator-card',
            templateUrl: './gx-operator-card.component.html',
            styleUrls: ['./gx-operator-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          operator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isLiked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "CCvv":
    /*!***********************************************************!*\
      !*** ./src/gaxon/components/notifications/notyf.toast.ts ***!
      \***********************************************************/

    /*! exports provided: NotyfToastComponent */

    /***/
    function CCvv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotyfToastComponent", function () {
        return NotyfToastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var _c0 = ["notyf-toast-component", ""];

      var NotyfToastComponent = /*#__PURE__*/function (_ngx_toastr__WEBPACK_) {
        _inherits(NotyfToastComponent, _ngx_toastr__WEBPACK_);

        var _super = _createSuper(NotyfToastComponent);

        // constructor is only necessary when not using AoT
        function NotyfToastComponent(toastrService, toastPackage) {
          var _this3;

          _classCallCheck(this, NotyfToastComponent);

          _this3 = _super.call(this, toastrService, toastPackage);
          _this3.toastrService = toastrService;
          _this3.toastPackage = toastPackage;
          return _this3;
        }

        return NotyfToastComponent;
      }(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"]);

      NotyfToastComponent.ɵfac = function NotyfToastComponent_Factory(t) {
        return new (t || NotyfToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]));
      };

      NotyfToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotyfToastComponent,
        selectors: [["", "notyf-toast-component", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        decls: 5,
        vars: 1,
        consts: [[1, "notyf-wrapper"], [1, "notyf-icon"], [1, "notyf-confirm-icon"], [1, "notyf-message"]],
        template: function NotyfToastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'none',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            bottom: '-15px',
            'max-height': 0,
            'max-width': 0,
            'margin-top': 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.8,
            bottom: '-3px'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            bottom: '0',
            'max-height': '200px',
            'margin-top': '12px',
            'max-width': '400px'
          })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            bottom: '0',
            'max-height': '200px',
            'margin-top': '12px',
            'max-width': '400px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.6,
            bottom: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.1,
            bottom: '-3px'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            bottom: '-15px'
          })])))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotyfToastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[notyf-toast-component]',
            styles: [],
            template: "\n  <div class=\"notyf-wrapper\">\n    <div class=\"notyf-icon\">\n      <i class=\"notyf-confirm-icon\"></i>\n    </div>\n    <div class=\"notyf-message\">{{ message }}</div>\n  </div>\n  ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'none',
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0,
              bottom: '-15px',
              'max-height': 0,
              'max-width': 0,
              'margin-top': 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0.8,
              bottom: '-3px'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1,
              bottom: '0',
              'max-height': '200px',
              'margin-top': '12px',
              'max-width': '400px'
            })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              bottom: '0',
              'max-height': '200px',
              'margin-top': '12px',
              'max-width': '400px'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0.6,
              bottom: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0.1,
              bottom: '-3px'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0,
              bottom: '-15px'
            })])))])]
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CbCa":
    /*!*****************************************!*\
      !*** ./src/gaxon/pipes/getById.pipe.ts ***!
      \*****************************************/

    /*! exports provided: GetByIdPipe */

    /***/
    function CbCa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetByIdPipe", function () {
        return GetByIdPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GetByIdPipe = /*#__PURE__*/function () {
        function GetByIdPipe() {
          _classCallCheck(this, GetByIdPipe);
        }

        _createClass(GetByIdPipe, [{
          key: "transform",
          value: function transform(value, id, property) {
            var foundItem = value.find(function (item) {
              if (item.id !== undefined) {
                return item.id === id;
              }

              return false;
            });

            if (foundItem) {
              return foundItem[property];
            }
          }
        }]);

        return GetByIdPipe;
      }();

      GetByIdPipe.ɵfac = function GetByIdPipe_Factory(t) {
        return new (t || GetByIdPipe)();
      };

      GetByIdPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "getById",
        type: GetByIdPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetByIdPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'getById'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "EqEm":
    /*!**************************************************************!*\
      !*** ./src/gaxon/components/search-box/search-box.module.ts ***!
      \**************************************************************/

    /*! exports provided: SearchBoxModule */

    /***/
    function EqEm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchBoxModule", function () {
        return SearchBoxModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../gx-icon/gx-icon.module */
      "GGVI");
      /* harmony import */


      var _search_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-box.component */
      "LU9a");

      var SearchBoxModule = function SearchBoxModule() {
        _classCallCheck(this, SearchBoxModule);
      };

      SearchBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SearchBoxModule
      });
      SearchBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SearchBoxModule_Factory(t) {
          return new (t || SearchBoxModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__["GxIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchBoxModule, {
          declarations: [_search_box_component__WEBPACK_IMPORTED_MODULE_3__["SearchBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__["GxIconModule"]],
          exports: [_search_box_component__WEBPACK_IMPORTED_MODULE_3__["SearchBoxComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBoxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_2__["GxIconModule"]],
            declarations: [_search_box_component__WEBPACK_IMPORTED_MODULE_3__["SearchBoxComponent"]],
            exports: [_search_box_component__WEBPACK_IMPORTED_MODULE_3__["SearchBoxComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "F5nt":
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /*! exports provided: AppService */

    /***/
    function F5nt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppService = function AppService() {
        _classCallCheck(this, AppService);

        this.onMessagesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onNotificationsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
      };

      AppService.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)();
      };

      AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "G5Zu":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-media-icon-card/gx-media-icon-card.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxMediaIconCardComponent */

    /***/
    function G5Zu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxMediaIconCardComponent", function () {
        return GxMediaIconCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = [[["", "icon", ""]], [["", "text", ""]]];
      var _c1 = ["[icon]", "[text]"];

      var GxMediaIconCardComponent = /*#__PURE__*/function () {
        function GxMediaIconCardComponent() {
          _classCallCheck(this, GxMediaIconCardComponent);

          this.classList = 'media';
        }

        _createClass(GxMediaIconCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this["class"]) {
              this.classList += ' ' + this["class"];
            }
          }
        }]);

        return GxMediaIconCardComponent;
      }();

      GxMediaIconCardComponent.ɵfac = function GxMediaIconCardComponent_Factory(t) {
        return new (t || GxMediaIconCardComponent)();
      };

      GxMediaIconCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxMediaIconCardComponent,
        selectors: [["gx-media-icon-card"]],
        hostVars: 2,
        hostBindings: function GxMediaIconCardComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classList);
          }
        },
        inputs: {
          "class": "class",
          label: "label"
        },
        ngContentSelectors: _c1,
        decls: 5,
        vars: 1,
        consts: [[1, "media-body"], [1, "d-block", "text-light-gray", "f-12", "mb-1"]],
        template: function GxMediaIconCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxMediaIconCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-media-icon-card',
            templateUrl: './gx-media-icon-card.component.html'
          }]
        }], function () {
          return [];
        }, {
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }],
          "class": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "GGVI":
    /*!********************************************************!*\
      !*** ./src/gaxon/components/gx-icon/gx-icon.module.ts ***!
      \********************************************************/

    /*! exports provided: GxIconModule */

    /***/
    function GGVI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxIconModule", function () {
        return GxIconModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-icon.component */
      "/Tuz");

      var GxIconModule = function GxIconModule() {
        _classCallCheck(this, GxIconModule);
      };

      GxIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GxIconModule
      });
      GxIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GxIconModule_Factory(t) {
          return new (t || GxIconModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GxIconModule, {
          declarations: [_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxIconModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"]],
            declarations: [_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "IRwd":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/gx-card/card-header/card-header.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CardHeaderComponent */

    /***/
    function IRwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function () {
        return CardHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CardHeaderComponent_ng_container_0_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.cardTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CardHeaderComponent_ng_container_0_h5_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h5", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.cardSubTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CardHeaderComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardHeaderComponent_ng_container_0_h3_2_Template, 1, 1, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardHeaderComponent_ng_container_0_h5_3_Template, 1, 1, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardSubTitle);
        }
      }

      var _c0 = ["*"];

      var CardHeaderComponent = /*#__PURE__*/function () {
        function CardHeaderComponent(elRef) {
          _classCallCheck(this, CardHeaderComponent);

          this.elRef = elRef;
          this.cardTitle = '';
          this.cardSubTitle = '';
          this.elRef.nativeElement.classList.add('dt-card__header');
        }

        _createClass(CardHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardHeaderComponent;
      }();

      CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) {
        return new (t || CardHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CardHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardHeaderComponent,
        selectors: [["card-header"]],
        inputs: {
          cardTitle: ["card-title", "cardTitle"],
          cardSubTitle: ["card-subtitle", "cardSubTitle"]
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 1,
        consts: [[4, "ngIf"], [1, "dt-card__heading"], ["class", "dt-card__title", 3, "innerHTML", 4, "ngIf"], ["class", "dt-card__subtitle", 3, "innerHTML", 4, "ngIf"], [1, "dt-card__title", 3, "innerHTML"], [1, "dt-card__subtitle", 3, "innerHTML"]],
        template: function CardHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardHeaderComponent_ng_container_0_Template, 4, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardTitle || ctx.cardSubTitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'card-header',
            templateUrl: './card-header.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-title']
          }],
          cardSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-subtitle']
          }]
        });
      })();
      /***/

    },

    /***/
    "IaOw":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-crepto-news/gx-crepto-news.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxCreptoNewsComponent */

    /***/
    function IaOw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCreptoNewsComponent", function () {
        return GxCreptoNewsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _bs_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../bs-card/card-header/card-header.component */
      "gKsy");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function GxCreptoNewsComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxCreptoNewsComponent_li_11_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var category_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onChangeCategory(category_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r2.id === ctx_r0.activeCategory));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
        }
      }

      function GxCreptoNewsComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gx-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ready Full Story");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "gx-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r5.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.tags, " ");
        }
      }

      var GxCreptoNewsComponent = /*#__PURE__*/function () {
        function GxCreptoNewsComponent() {
          _classCallCheck(this, GxCreptoNewsComponent);

          this.maxVisibleItems = 3;
        }

        _createClass(GxCreptoNewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChangeCategory",
          value: function onChangeCategory(category) {
            var _this4 = this;

            if (category) {
              this.activeCategory = category;
              this.visibleItems = this._news.filter(function (item) {
                return item.category === _this4.activeCategory;
              });
            } else {
              this.activeCategory = null;
              this.visibleItems = this._news;
            }
          }
        }, {
          key: "news",
          set: function set(list) {
            this._news = list;
            this.visibleItems = this._news;
          }
        }]);

        return GxCreptoNewsComponent;
      }();

      GxCreptoNewsComponent.ɵfac = function GxCreptoNewsComponent_Factory(t) {
        return new (t || GxCreptoNewsComponent)();
      };

      GxCreptoNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxCreptoNewsComponent,
        selectors: [["gx-crepto-news"]],
        inputs: {
          title: "title",
          maxVisibleItems: "maxVisibleItems",
          categories: "categories",
          news: "news"
        },
        decls: 17,
        vars: 6,
        consts: [[1, "card-nav", "border-bottom-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "dt-card__title"], ["href", "javascript:void(0)", 1, "d-inline-block"], ["name", "circle-add-o", 1, "mr-2"], [1, "card-header-tabs", "nav", "nav-tabs", "nav-tabs-sm", "nav-scroll", "mx-0"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", 3, "ngClass", "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], [1, "tab-pane", "active"], [1, "media-list", "media-separator"], ["class", "media media-news", 4, "ngFor", "ngForOf"], [1, "media", "media-news"], [1, "img-fluid", "rounded-xl", "order-sm-2", "ml-sm-10", 3, "src", "alt"], [1, "media-body", "order-sm-1"], [1, "mb-2"], [1, "mb-5", 3, "innerHTML"], [1, "text-light-gray", "mb-2"], ["name", "tag", "size", "lg", 1, "mr-2", "align-top"], ["href", "javascript:void(0)", 1, "d-inline-block", "font-weight-500", "align-middle"], ["name", "arrow-long-right", "size", "lg", 1, "ml-1"]],
        template: function GxCreptoNewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bs-card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gx-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxCreptoNewsComponent_Template_a_click_9_listener() {
              return ctx.onChangeCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GxCreptoNewsComponent_li_11_Template, 3, 4, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "bs-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GxCreptoNewsComponent_div_16_Template, 13, 5, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.activeCategory));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleItems.slice(0, ctx.maxVisibleItems));
          }
        },
        directives: [_bs_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1jcmVwdG8tbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCreptoNewsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-crepto-news',
            templateUrl: './gx-crepto-news.component.html',
            styleUrls: ['./gx-crepto-news.component.scss']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxVisibleItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          news: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "IhJw":
    /*!**************************************************!*\
      !*** ./src/gaxon/directives/status.directive.ts ***!
      \**************************************************/

    /*! exports provided: StatusDirective */

    /***/
    function IhJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusDirective", function () {
        return StatusDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatusDirective = /*#__PURE__*/function () {
        function StatusDirective(renderer, el) {
          _classCallCheck(this, StatusDirective);

          this.renderer = renderer;
          this.el = el;
          this.statusClass = 'light';
        }

        _createClass(StatusDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            switch (this.statusCode) {
              case 'online':
                this.statusClass = 'success';
                break;

              case 'away':
                this.statusClass = 'yellow';
                break;

              case 'dnd':
                this.statusClass = 'danger';
                break;

              default:
                this.statusClass = 'light';
                break;
            }

            this.renderer.addClass(this.el.nativeElement, 'bg-' + this.statusClass);
            this.renderer.addClass(this.el.nativeElement, 'pulse-' + this.statusClass);
          }
        }]);

        return StatusDirective;
      }();

      StatusDirective.ɵfac = function StatusDirective_Factory(t) {
        return new (t || StatusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      StatusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: StatusDirective,
        selectors: [["", "status", ""]],
        inputs: {
          statusCode: "statusCode"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[status]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          statusCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "KivK":
    /*!***************************************!*\
      !*** ./src/gaxon/components/index.ts ***!
      \***************************************/

    /*! exports provided: NavigationService, SearchBoxModule, GxCardModule, GxIconModule, ViewsModule, BsCardModule, BsMediaObjectModule, WidgetsModule, GxToggleModule, CardsModule, CustomCommonModule, NotificationsModule, GxBadgeModule, GxBreadcrumbsModule */

    /***/
    function KivK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation/navigation.service */
      "ocLh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"];
      });
      /* harmony import */


      var _navigation_navigation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navigation/navigation.model */
      "cOlg");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _search_box_search_box_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-box/search-box.module */
      "EqEm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchBoxModule", function () {
        return _search_box_search_box_module__WEBPACK_IMPORTED_MODULE_2__["SearchBoxModule"];
      });
      /* harmony import */


      var _gx_card_gx_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gx-card/gx-card.module */
      "MH0B");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GxCardModule", function () {
        return _gx_card_gx_card_module__WEBPACK_IMPORTED_MODULE_3__["GxCardModule"];
      });
      /* harmony import */


      var _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gx-icon/gx-icon.module */
      "GGVI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GxIconModule", function () {
        return _gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_4__["GxIconModule"];
      });
      /* harmony import */


      var _views_views_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/views.module */
      "5XCi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ViewsModule", function () {
        return _views_views_module__WEBPACK_IMPORTED_MODULE_5__["ViewsModule"];
      });
      /* harmony import */


      var _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bs-card/bs-card.module */
      "O1xL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BsCardModule", function () {
        return _bs_card_bs_card_module__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"];
      });
      /* harmony import */


      var _bs_media_object_bs_media_object_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bs-media-object/bs-media-object.module */
      "3gN1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BsMediaObjectModule", function () {
        return _bs_media_object_bs_media_object_module__WEBPACK_IMPORTED_MODULE_7__["BsMediaObjectModule"];
      });
      /* harmony import */


      var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./widgets/widgets.module */
      "cx8X");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WidgetsModule", function () {
        return _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__["WidgetsModule"];
      });
      /* harmony import */


      var _gx_toggle_gx_toggle_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./gx-toggle/gx-toggle.module */
      "eLME");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GxToggleModule", function () {
        return _gx_toggle_gx_toggle_module__WEBPACK_IMPORTED_MODULE_9__["GxToggleModule"];
      });
      /* harmony import */


      var _cards_cards_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./cards/cards.module */
      "4Kj1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CardsModule", function () {
        return _cards_cards_module__WEBPACK_IMPORTED_MODULE_10__["CardsModule"];
      });
      /* harmony import */


      var _common_custom_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./common/custom-common.module */
      "QZuB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomCommonModule", function () {
        return _common_custom_common_module__WEBPACK_IMPORTED_MODULE_11__["CustomCommonModule"];
      });
      /* harmony import */


      var _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./notifications/notifications.module */
      "/Jzh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
        return _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_12__["NotificationsModule"];
      });
      /* harmony import */


      var _gx_badge_gx_badge_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./gx-badge/gx-badge.module */
      "AxyE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GxBadgeModule", function () {
        return _gx_badge_gx_badge_module__WEBPACK_IMPORTED_MODULE_13__["GxBadgeModule"];
      });
      /* harmony import */


      var _gx_breadcrumbs_gx_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./gx-breadcrumbs/gx-breadcrumbs.module */
      "sxR6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GxBreadcrumbsModule", function () {
        return _gx_breadcrumbs_gx_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["GxBreadcrumbsModule"];
      });
      /***/

    },

    /***/
    "Kr02":
    /*!*****************************************************!*\
      !*** ./src/gaxon/directives/get-by-id.directive.ts ***!
      \*****************************************************/

    /*! exports provided: GetByIdDirective */

    /***/
    function Kr02(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetByIdDirective", function () {
        return GetByIdDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GetByIdDirective = /*#__PURE__*/function () {
        function GetByIdDirective() {
          _classCallCheck(this, GetByIdDirective);
        }

        _createClass(GetByIdDirective, [{
          key: "getbyid",
          set: function set(id) {
            this.data = this.items.find(function (item) {
              return id && item.id === id;
            });
          }
        }]);

        return GetByIdDirective;
      }();

      GetByIdDirective.ɵfac = function GetByIdDirective_Factory(t) {
        return new (t || GetByIdDirective)();
      };

      GetByIdDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GetByIdDirective,
        selectors: [["", "getbyid", ""]],
        inputs: {
          items: "items",
          getbyid: "getbyid"
        },
        exportAs: ["item"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetByIdDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[getbyid]',
            exportAs: 'item'
          }]
        }], null, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          getbyid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "KraU":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-progress-card/gx-progress-card.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GxProgressCardComponent */

    /***/
    function KraU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxProgressCardComponent", function () {
        return GxProgressCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../gx-chart/gx-chart.component */
      "ztgp");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxProgressCardComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.data.heading.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.heading.value);
        }
      }

      function GxProgressCardComponent_div_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.trending.value);
        }
      }

      function GxProgressCardComponent_div_3_gx_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 13);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r5.data.trending.icon);
        }
      }

      function GxProgressCardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxProgressCardComponent_div_3_span_1_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxProgressCardComponent_div_3_gx_icon_2_Template, 1, 1, "gx-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.data.trending.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.trending.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.trending.icon);
        }
      }

      function GxProgressCardComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.data.tagLine.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.tagLine.text);
        }
      }

      function GxProgressCardComponent_ng_content_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "chart"]);
        }
      }

      var _c0 = [[["gx-chart"]]];
      var _c1 = ["gx-chart"];

      var GxProgressCardComponent = /*#__PURE__*/function () {
        function GxProgressCardComponent(eleRef) {
          var _this5 = this;

          _classCallCheck(this, GxProgressCardComponent);

          this.eleRef = eleRef;
          this.classlist = ['dt-card'];
          this.coloums = [5, 7];
          this.classlist.forEach(function (className) {
            _this5.eleRef.nativeElement.classList.add(className);
          });
        }

        _createClass(GxProgressCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxProgressCardComponent;
      }();

      GxProgressCardComponent.ɵfac = function GxProgressCardComponent_Factory(t) {
        return new (t || GxProgressCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxProgressCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxProgressCardComponent,
        selectors: [["gx-progress-card"]],
        contentQueries: function GxProgressCardComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_1__["GxChartComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        inputs: {
          data: "data",
          coloums: "coloums"
        },
        ngContentSelectors: _c1,
        decls: 11,
        vars: 13,
        consts: [[1, "p-5"], [1, "d-flex", "mb-5"], ["class", "d-block font-weight-500 f-16", 3, "ngClass", 4, "ngIf"], ["class", "d-flex align-items-center ml-auto", 3, "ngClass", 4, "ngIf"], [1, "row", "no-gutters"], [1, "text-dark", "display-3", "font-weight-500", "mr-1"], ["class", "mb-0", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "d-block", "font-weight-500", "f-16", 3, "ngClass"], [1, "d-flex", "align-items-center", "ml-auto", 3, "ngClass"], ["class", "mb-0 font-weight-500 mr-1", 4, "ngIf"], [3, "name", 4, "ngIf"], [1, "mb-0", "font-weight-500", "mr-1"], [3, "name"], [1, "mb-0", 3, "ngClass"]],
        template: function GxProgressCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxProgressCardComponent_span_2_Template, 2, 2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxProgressCardComponent_div_3_Template, 3, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxProgressCardComponent_p_8_Template, 2, 2, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GxProgressCardComponent_ng_content_10_Template, 1, 0, "ng-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.trending.value && ctx.data.trending.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("col-xl-", ctx.coloums[0], " col-sm-", ctx.coloums[0], " col-md-12 pr-2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.amount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.tagLine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("col-xl-", ctx.coloums[1], " col-sm-", ctx.coloums[1], " col-md-12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chart);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtcHJvZ3Jlc3MtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7QUFBbEI7O0FBRkE7RUFNSSxhQUFhO0FBQWpCIiwiZmlsZSI6Imd4LXByb2dyZXNzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAmLmR0LWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLmR0LWNhcmRfX2Z1bGwtaGVpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxProgressCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-progress-card',
            templateUrl: './gx-progress-card.component.html',
            styleUrls: ['./gx-progress-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          coloums: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_1__["GxChartComponent"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "LU9a":
    /*!*****************************************************************!*\
      !*** ./src/gaxon/components/search-box/search-box.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchBoxComponent */

    /***/
    function LU9a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function () {
        return SearchBoxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchBoxComponent = /*#__PURE__*/function () {
        function SearchBoxComponent() {
          _classCallCheck(this, SearchBoxComponent);
        }

        _createClass(SearchBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchBoxComponent;
      }();

      SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) {
        return new (t || SearchBoxComponent)();
      };

      SearchBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchBoxComponent,
        selectors: [["app-search-box"]],
        decls: 5,
        vars: 0,
        consts: [[1, "search-box"], [1, "searc-form"], [1, "form-container"], [1, "form-field"], ["type", "search", "placeholder", "Search", 1, "form-element"]],
        template: function SearchBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBoxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search-box',
            templateUrl: './search-box.component.html',
            styleUrls: ['./search-box.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LzvE":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-info-card/gx-info-card.component.ts ***!
      \***************************************************************************/

    /*! exports provided: GxInfoCardComponent */

    /***/
    function LzvE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxInfoCardComponent", function () {
        return GxInfoCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxInfoCardComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.content);
        }
      }

      function GxInfoCardComponent_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.content);
        }
      }

      function GxInfoCardComponent_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxInfoCardComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r3.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxInfoCardComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.data.actionStyles)("routerLink", ctx_r4.data.actionRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.actionLabel);
        }
      }

      function GxInfoCardComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.data.actionStyles)("routerLink", ctx_r5.data.actionRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.data.actionLabel);
        }
      }

      function GxInfoCardComponent_img_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r6.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxInfoCardComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.data.actionStyles)("routerLink", ctx_r7.data.actionRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.data.actionLabel);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "mb-4": a0
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "mb-1": a0,
          "mb-0": a1
        };
      };

      var GxInfoCardComponent = /*#__PURE__*/function () {
        function GxInfoCardComponent(eleRef) {
          _classCallCheck(this, GxInfoCardComponent);

          this.eleRef = eleRef;
          this.style = 'basic';
        }

        _createClass(GxInfoCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.style === 'basic') {
              this.bodyClasses += ' px-5';
            } else if (this.style === 'classic') {
              this.bodyClasses += ' px-5';
            } else if (this.style === 'panel') {
              this.bodyClasses += ' text-center';
            }

            if (this.style === 'panel' || this.style === 'classic') {
              this.eleRef.nativeElement.classList.add('overflow-hidden');
            }
          }
        }]);

        return GxInfoCardComponent;
      }();

      GxInfoCardComponent.ɵfac = function GxInfoCardComponent_Factory(t) {
        return new (t || GxInfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxInfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxInfoCardComponent,
        selectors: [["gx-info-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          data: "data",
          style: "style"
        },
        decls: 15,
        vars: 21,
        consts: [[1, "px-5", 3, "ngClass"], [1, "text-center"], [1, "dt-separator-h-v1", "mb-2", 3, "ngClass"], [3, "ngClass"], ["class", "d-inline-block text-primary", 4, "ngIf"], ["class", "mb-5", 4, "ngIf"], ["class", "img-fluid mb-7", 3, "src", "alt", 4, "ngIf"], ["class", "mx-n8 mb-n8", 4, "ngIf"], ["class", "btn text-uppercase btn-sm", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "text-uppercase f-12 font-weight-500", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "img-fluid mb-n15", 3, "src", "alt", 4, "ngIf"], ["class", "btn btn-block rounded-0 text-uppercase", 3, "ngClass", "routerLink", 4, "ngIf"], [1, "d-inline-block", "text-primary"], [1, "mb-5"], [1, "img-fluid", "mb-7", 3, "src", "alt"], [1, "mx-n8", "mb-n8"], [1, "w-100", 3, "src", "alt"], [1, "btn", "text-uppercase", "btn-sm", 3, "ngClass", "routerLink"], [1, "text-uppercase", "f-12", "font-weight-500", 3, "ngClass", "routerLink"], [1, "img-fluid", "mb-n15", 3, "src", "alt"], [1, "btn", "btn-block", "rounded-0", "text-uppercase", 3, "ngClass", "routerLink"]],
        template: function GxInfoCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxInfoCardComponent_span_5_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card-body", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GxInfoCardComponent_p_7_Template, 2, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxInfoCardComponent_img_8_Template, 1, 2, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GxInfoCardComponent_div_9_Template, 2, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GxInfoCardComponent_a_11_Template, 2, 3, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GxInfoCardComponent_a_12_Template, 2, 3, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GxInfoCardComponent_img_13_Template, 1, 2, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GxInfoCardComponent_a_14_Template, 2, 3, "a", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.style === "basic" || ctx.style === "classic"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.handleColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.data.titleStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, ctx.style === "basic", ctx.style === "panel" || ctx.style === "classic"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.content && ctx.style == "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.content && ctx.style == "classic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image && ctx.style === "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image && ctx.style === "panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel && ctx.style === "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel && ctx.style === "classic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image && ctx.style === "classic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel && ctx.style === "panel");
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_3__["CardHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYztBQUFsQjs7QUFGQTtFQU1JLGFBQWE7QUFBakIiLCJmaWxlIjoiZ3gtaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgJi5kdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5kdC1jYXJkX19mdWxsLWhlaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxInfoCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-info-card',
            templateUrl: './gx-info-card.component.html',
            styleUrls: ['./gx-info-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "M70d":
    /*!***********************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-invite-friends-card/gx-invite-friends-card.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: GxInviteFriendsCardComponent */

    /***/
    function M70d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxInviteFriendsCardComponent", function () {
        return GxInviteFriendsCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GxInviteFriendsCardComponent = /*#__PURE__*/function () {
        function GxInviteFriendsCardComponent() {
          _classCallCheck(this, GxInviteFriendsCardComponent);
        }

        _createClass(GxInviteFriendsCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxInviteFriendsCardComponent;
      }();

      GxInviteFriendsCardComponent.ɵfac = function GxInviteFriendsCardComponent_Factory(t) {
        return new (t || GxInviteFriendsCardComponent)();
      };

      GxInviteFriendsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxInviteFriendsCardComponent,
        selectors: [["gx-invite-friends-card"]],
        decls: 9,
        vars: 0,
        consts: [[1, "bg-overlay__inner", "mt-auto"], [1, "dt-card__body", "text-center"], [1, "text-white", "mb-2"], ["type", "email", "placeholder", "Enter Email Address", 1, "form-control", "form-control-transparent", "text-center", "mb-2"], ["href", "javascript:void(0)", 1, "btn", "btn-light", "btn-block"]],
        template: function GxInviteFriendsCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Refer & Earn $10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reffer us to your friends and earn bonus when they join.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Invite Friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1pbnZpdGUtZnJpZW5kcy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxInviteFriendsCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-invite-friends-card',
            templateUrl: './gx-invite-friends-card.component.html',
            styleUrls: ['./gx-invite-friends-card.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "MH0B":
    /*!********************************************************!*\
      !*** ./src/gaxon/components/gx-card/gx-card.module.ts ***!
      \********************************************************/

    /*! exports provided: GxCardModule */

    /***/
    function MH0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCardModule", function () {
        return GxCardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-card.component */
      "zhXz");
      /* harmony import */


      var _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./card-header/card-header.component */
      "IRwd");

      var GxCardModule = function GxCardModule() {
        _classCallCheck(this, GxCardModule);
      };

      GxCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GxCardModule
      });
      GxCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GxCardModule_Factory(t) {
          return new (t || GxCardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GxCardModule, {
          declarations: [_gx_card_component__WEBPACK_IMPORTED_MODULE_2__["GxCardComponent"], _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__["CardToolComponent"], _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__["CardHeadingComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__["CardHeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_gx_card_component__WEBPACK_IMPORTED_MODULE_2__["GxCardComponent"], _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__["CardToolComponent"], _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__["CardHeadingComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__["CardHeaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_gx_card_component__WEBPACK_IMPORTED_MODULE_2__["GxCardComponent"], _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__["CardToolComponent"], _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__["CardHeadingComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__["CardHeaderComponent"]],
            exports: [_gx_card_component__WEBPACK_IMPORTED_MODULE_2__["GxCardComponent"], _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__["CardToolComponent"], _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__["CardHeadingComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__["CardHeaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "MLg1":
    /*!*********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-tasks-report/gx-tasks-report.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GxTasksReportComponent */

    /***/
    function MLg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxTasksReportComponent", function () {
        return GxTasksReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @amcharts/amcharts3-angular */
      "Z7g2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "border-right": a0
        };
      };

      function GxTasksReportComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r1 = ctx.$implicit;
          var isLast_r2 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !isLast_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r1.dotColor);
        }
      }

      var GxTasksReportComponent = /*#__PURE__*/function () {
        function GxTasksReportComponent() {
          _classCallCheck(this, GxTasksReportComponent);
        }

        _createClass(GxTasksReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tasks.chart.listeners = [{
              event: 'init',
              method: function method(event) {
                // get map object
                var map = event.chart;
                map.amLink.remove();
              }
            }];
          }
        }]);

        return GxTasksReportComponent;
      }();

      GxTasksReportComponent.ɵfac = function GxTasksReportComponent_Factory(t) {
        return new (t || GxTasksReportComponent)();
      };

      GxTasksReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxTasksReportComponent,
        selectors: [["gx-tasks-report"]],
        inputs: {
          tasks: "tasks"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "d-flex", "flex-column", "flex-sm-row"], ["id", "gaugeChart", 1, "mb-5", "mb-sm-0", "mr-sm-4", "mx-auto", 3, "options"], [1, "flex-1", "align-self-sm-center"], [1, "row"], ["class", "col-4 text-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-4", "text-center", 3, "ngClass"], [1, "text-dark", "display-4", "mb-2"], [1, "d-block", "mb-2"], [1, "dot-shape", "dot-shape-lg", 3, "ngClass"]],
        template: function GxTasksReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "amCharts", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxTasksReportComponent_div_5_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 120, "px")("height", 120, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.tasks.chart);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks.data);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC10YXNrcy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxTasksReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-tasks-report',
            templateUrl: './gx-tasks-report.component.html',
            styleUrls: ['./gx-tasks-report.component.scss']
          }]
        }], function () {
          return [];
        }, {
          tasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "MhBl":
    /*!*********************************************************************!*\
      !*** ./src/gaxon/components/gx-toggle/gx-star/gx-star.component.ts ***!
      \*********************************************************************/

    /*! exports provided: GxStarComponent */

    /***/
    function MhBl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxStarComponent", function () {
        return GxStarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      var nextUniqueId = 0;

      var GxStarComponent = /*#__PURE__*/function () {
        function GxStarComponent(eleRef) {
          var _this6 = this;

          _classCallCheck(this, GxStarComponent);

          this.eleRef = eleRef;
          this.gxInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.uniqueId = 'gx-star-' + ++nextUniqueId;
          this.defaultHostClasses = 'dt-checkbox dt-checkbox-icon dt-checkbox-only';
          this.defaultHostClasses.split(' ').forEach(function (className) {
            _this6.eleRef.nativeElement.classList.add(className);
          });
        }

        _createClass(GxStarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Stop Event propagation on click host
           * @param event
           */

        }, {
          key: "onHostCLick",
          value: function onHostCLick(event) {
            event.stopPropagation();
          }
          /**
           * On toggle change
           */

        }, {
          key: "onInputChange",
          value: function onInputChange() {
            this.gxInputChange.emit(this.gxModel);
          }
        }]);

        return GxStarComponent;
      }();

      GxStarComponent.ɵfac = function GxStarComponent_Factory(t) {
        return new (t || GxStarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxStarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxStarComponent,
        selectors: [["gx-star"]],
        hostBindings: function GxStarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxStarComponent_click_HostBindingHandler($event) {
              return ctx.onHostCLick($event);
            });
          }
        },
        inputs: {
          gxModel: "gxModel"
        },
        outputs: {
          gxInputChange: "gxInputChange"
        },
        decls: 6,
        vars: 5,
        consts: [["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change"], [1, "font-weight-light", "dt-checkbox-content", 3, "for"], [1, "unchecked"], ["name", "star-o", "size", "xl", 3, "fw"], [1, "checked"], ["name", "star-fill", "size", "xl", 1, "text-warning", 3, "fw"]],
        template: function GxStarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GxStarComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.gxModel = $event;
            })("change", function GxStarComponent_Template_input_change_0_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gx-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.uniqueId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gxModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.uniqueId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1zdGFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxStarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-star',
            templateUrl: './gx-star.component.html',
            styleUrls: ['./gx-star.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          gxModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gxInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHostCLick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "MhUC":
    /*!***************************************************!*\
      !*** ./src/gaxon/services/dynamic-dom.service.ts ***!
      \***************************************************/

    /*! exports provided: DynamicDomService */

    /***/
    function MhUC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicDomService", function () {
        return DynamicDomService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DynamicDomService = /*#__PURE__*/function () {
        function DynamicDomService(componentFactoryResolver, appRef, injector) {
          _classCallCheck(this, DynamicDomService);

          this.componentFactoryResolver = componentFactoryResolver;
          this.appRef = appRef;
          this.injector = injector;
        }

        _createClass(DynamicDomService, [{
          key: "appendComponentToBody",
          value: function appendComponentToBody(component) {
            // 1. Create a component reference from the component
            this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector); // 2. Attach component to the appRef so that it's inside the ng component tree

            this.appRef.attachView(this.componentRef.hostView); // 3. Get DOM element from component

            var domElem = this.componentRef.hostView.rootNodes[0]; // 4. Append DOM element to the body

            document.body.appendChild(domElem);
            return this.componentRef;
          }
        }, {
          key: "destroyCard",
          value: function destroyCard(componentRef) {
            this.componentRef = componentRef; // remove component from the component tree and from the DOM

            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
          }
        }]);

        return DynamicDomService;
      }();

      DynamicDomService.ɵfac = function DynamicDomService_Factory(t) {
        return new (t || DynamicDomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      DynamicDomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DynamicDomService,
        factory: DynamicDomService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicDomService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "O1xL":
    /*!********************************************************!*\
      !*** ./src/gaxon/components/bs-card/bs-card.module.ts ***!
      \********************************************************/

    /*! exports provided: BsCardModule */

    /***/
    function O1xL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsCardModule", function () {
        return BsCardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _bs_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bs-card.component */
      "da1h");
      /* harmony import */


      var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./card-header/card-header.component */
      "gKsy");
      /* harmony import */


      var _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./card-footer/card-footer.component */
      "mBAb");
      /* harmony import */


      var _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./card-img-overlay/card-img-overlay.component */
      "6c5l");
      /* harmony import */


      var _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./card-outer-body/card-outer-body.component */
      "vccG");

      var BsCardModule = function BsCardModule() {
        _classCallCheck(this, BsCardModule);
      };

      BsCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BsCardModule
      });
      BsCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BsCardModule_Factory(t) {
          return new (t || BsCardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsCardModule, {
          declarations: [_bs_card_component__WEBPACK_IMPORTED_MODULE_2__["BsCardComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_6__["CardImgOverlayComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_7__["CardOuterBodyComponent"], _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__["CardFooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_bs_card_component__WEBPACK_IMPORTED_MODULE_2__["BsCardComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_6__["CardImgOverlayComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_7__["CardOuterBodyComponent"], _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__["CardFooterComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsCardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_bs_card_component__WEBPACK_IMPORTED_MODULE_2__["BsCardComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_6__["CardImgOverlayComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_7__["CardOuterBodyComponent"], _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__["CardFooterComponent"]],
            exports: [_bs_card_component__WEBPACK_IMPORTED_MODULE_2__["BsCardComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_6__["CardImgOverlayComponent"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_7__["CardOuterBodyComponent"], _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_5__["CardFooterComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "O8wv":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-trending-card/gx-trending-card.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GxTrendingCardComponent */

    /***/
    function O8wv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxTrendingCardComponent", function () {
        return GxTrendingCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../gx-chart/gx-chart.component */
      "ztgp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxTrendingCardComponent_h2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.data.heading.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.heading.value);
        }
      }

      function GxTrendingCardComponent_div_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.data.trending.value);
        }
      }

      function GxTrendingCardComponent_div_3_gx_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 11);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r6.data.trending.icon)("size", ctx_r6.iconSize);
        }
      }

      function GxTrendingCardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxTrendingCardComponent_div_3_span_1_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxTrendingCardComponent_div_3_gx_icon_2_Template, 1, 2, "gx-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.data.trending.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.trending.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.trending.icon);
        }
      }

      function GxTrendingCardComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.data.tagLine.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.tagLine.text);
        }
      }

      function GxTrendingCardComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.data.crypto.icon)("ngClass", ctx_r3.data.crypto.classes);
        }
      }

      function GxTrendingCardComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["gx-chart"]]];

      var _c1 = function _c1(a0, a1) {
        return {
          "my-n3": a0,
          "mb-1 vertical-view": a1
        };
      };

      var _c2 = ["gx-chart"];

      var GxTrendingCardComponent = /*#__PURE__*/function () {
        function GxTrendingCardComponent(eleRef) {
          var _this7 = this;

          _classCallCheck(this, GxTrendingCardComponent);

          this.eleRef = eleRef;
          this.classNames = ['dt-chart'];
          this.isVertical = false;
          this.cardStyle = 'default';
          this.iconSize = '';
          this.styleClasses = '';
          this.classNames.forEach(function (className) {
            _this7.eleRef.nativeElement.classList.add(className);
          });
        }

        _createClass(GxTrendingCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.isVertical) {
              this.iconSize = '1x';
            }

            if (this.cardStyle) {
              this.styleClasses = 'style-' + this.cardStyle;
            }
          }
        }]);

        return GxTrendingCardComponent;
      }();

      GxTrendingCardComponent.ɵfac = function GxTrendingCardComponent_Factory(t) {
        return new (t || GxTrendingCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxTrendingCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxTrendingCardComponent,
        selectors: [["gx-trending-card"]],
        contentQueries: function GxTrendingCardComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_1__["GxChartComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        inputs: {
          data: "data",
          isVertical: "isVertical",
          cardStyle: "cardStyle"
        },
        ngContentSelectors: _c2,
        decls: 7,
        vars: 10,
        consts: [[1, "dt-chart__header", 3, "ngClass"], [1, "style-default", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], ["class", "trending-section", 3, "ngClass", 4, "ngIf"], ["class", "action-tools", 4, "ngIf"], ["class", "dt-chart__body", 4, "ngIf"], [3, "ngClass"], [1, "trending-section", 3, "ngClass"], ["class", "value", 4, "ngIf"], [3, "name", "size", 4, "ngIf"], [1, "value"], [3, "name", "size"], [1, "action-tools"], ["size", "3x", 3, "name", "ngClass"], [1, "dt-chart__body"]],
        template: function GxTrendingCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxTrendingCardComponent_h2_2_Template, 2, 2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxTrendingCardComponent_div_3_Template, 3, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxTrendingCardComponent_p_4_Template, 2, 2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxTrendingCardComponent_div_5_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GxTrendingCardComponent_div_6_Template, 2, 0, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx.isVertical, ctx.isVertical));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.styleClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.trending.value && ctx.data.trending.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.tagLine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.crypto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chart);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtdHJlbmRpbmctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7QUFBbEI7O0FBRkE7RUFNSSxhQUFhO0FBQWpCIiwiZmlsZSI6Imd4LXRyZW5kaW5nLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAmLmR0LWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLmR0LWNhcmRfX2Z1bGwtaGVpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxTrendingCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-trending-card',
            templateUrl: './gx-trending-card.component.html',
            styleUrls: ['./gx-trending-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cardStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_1__["GxChartComponent"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Oa/Q":
    /*!**********************************************************!*\
      !*** ./src/gaxon/components/notifications/pink.toast.ts ***!
      \**********************************************************/

    /*! exports provided: PinkToastComponent */

    /***/
    function OaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PinkToastComponent", function () {
        return PinkToastComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["pink-toast-component", ""];

      function PinkToastComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
        }
      }

      function PinkToastComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function PinkToastComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.message, " ");
        }
      }

      function PinkToastComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PinkToastComponent_a_6_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.action($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.undoString, " ");
        }
      }

      function PinkToastComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PinkToastComponent_a_7_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PinkToastComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r5.width + "%");
        }
      }

      var PinkToastComponent = /*#__PURE__*/function (_ngx_toastr__WEBPACK_2) {
        _inherits(PinkToastComponent, _ngx_toastr__WEBPACK_2);

        var _super2 = _createSuper(PinkToastComponent);

        // constructor is only necessary when not using AoT
        function PinkToastComponent(toastrService, toastPackage) {
          var _this8;

          _classCallCheck(this, PinkToastComponent);

          _this8 = _super2.call(this, toastrService, toastPackage);
          _this8.toastrService = toastrService;
          _this8.toastPackage = toastPackage; // used for demo purposes

          _this8.undoString = 'undo';
          return _this8;
        }

        _createClass(PinkToastComponent, [{
          key: "action",
          value: function action(event) {
            event.stopPropagation();
            this.undoString = 'undid';
            this.toastPackage.triggerAction();
            return false;
          }
        }]);

        return PinkToastComponent;
      }(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"]);

      PinkToastComponent.ɵfac = function PinkToastComponent_Factory(t) {
        return new (t || PinkToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]));
      };

      PinkToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PinkToastComponent,
        selectors: [["", "pink-toast-component", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        decls: 9,
        vars: 6,
        consts: [[1, "row"], [1, "col-9"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [1, "col-3", "text-right"], ["class", "btn btn-pink btn-sm", 3, "click", 4, "ngIf"], [4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "btn", "btn-pink", "btn-sm", 3, "click"], [1, "toast-progress"]],
        template: function PinkToastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PinkToastComponent_div_2_Template, 2, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PinkToastComponent_div_3_Template, 1, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PinkToastComponent_div_4_Template, 2, 4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PinkToastComponent_a_6_Template, 2, 1, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PinkToastComponent_a_7_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PinkToastComponent_div_8_Template, 2, 2, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n      background-color: #FF69B4;\n      position: relative;\n      overflow: hidden;\n      margin: 0 0 6px;\n      padding: 10px 10px 10px 10px;\n      width: 300px;\n      border-radius: 3px 3px 3px 3px;\n      color: #FFFFFF;\n      pointer-events: all;\n      cursor: pointer;\n    }\n    .btn-pink[_ngcontent-%COMP%] {\n      -webkit-backface-visibility: hidden;\n      -webkit-transform: translateZ(0);\n    }"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'none',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skewX(20deg)',
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skewX(-5deg)',
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'none',
            opacity: 1
          })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translate3d(100%, 0, 0) skewX(30deg)',
            opacity: 0
          })])))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PinkToastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[pink-toast-component]',
            styles: ["\n    :host {\n      background-color: #FF69B4;\n      position: relative;\n      overflow: hidden;\n      margin: 0 0 6px;\n      padding: 10px 10px 10px 10px;\n      width: 300px;\n      border-radius: 3px 3px 3px 3px;\n      color: #FFFFFF;\n      pointer-events: all;\n      cursor: pointer;\n    }\n    .btn-pink {\n      -webkit-backface-visibility: hidden;\n      -webkit-transform: translateZ(0);\n    }\n  "],
            template: "\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n        {{ title }}\n      </div>\n      <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n        [class]=\"options.messageClass\" [innerHTML]=\"message\">\n      </div>\n      <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n        [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n        {{ message }}\n      </div>\n    </div>\n    <div class=\"col-3 text-right\">\n      <a *ngIf=\"!options.closeButton\" class=\"btn btn-pink btn-sm\" (click)=\"action($event)\">\n        {{ undoString }}\n      </a>\n      <a *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"btn btn-pink btn-sm\">\n        close\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              display: 'none',
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              transform: 'skewX(20deg)',
              opacity: 1
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              transform: 'skewX(-5deg)',
              opacity: 1
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              transform: 'none',
              opacity: 1
            })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              opacity: 1
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              transform: 'translate3d(100%, 0, 0) skewX(30deg)',
              opacity: 0
            })])))])],
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OhSz":
    /*!******************************************!*\
      !*** ./src/gaxon/pipes/date-ago.pipe.ts ***!
      \******************************************/

    /*! exports provided: DateAgoPipe */

    /***/
    function OhSz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
        return DateAgoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateAgoPipe = /*#__PURE__*/function () {
        function DateAgoPipe() {
          _classCallCheck(this, DateAgoPipe);
        }

        _createClass(DateAgoPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value) {
              var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

              if (seconds < 29) {
                return 'Just now';
              }

              var intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'min': 60,
                'second': 1
              };
              var counter;

              for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);

                if (counter > 0) {
                  if (counter === 1) {
                    return counter + ' ' + i + ' ago'; // singular (1 day ago)
                  } else {
                    return counter + ' ' + i + 's ago'; // plural (2 days ago)
                  }
                }
              }
            }

            return value;
          }
        }]);

        return DateAgoPipe;
      }();

      DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) {
        return new (t || DateAgoPipe)();
      };

      DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dateAgo",
        type: DateAgoPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dateAgo',
            pure: true
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PcWZ":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-chart-overlay/gx-chart-overlay.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GxChartOverlayComponent */

    /***/
    function PcWZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxChartOverlayComponent", function () {
        return GxChartOverlayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../gx-chart/gx-chart.component */
      "ztgp");

      function GxChartOverlayComponent_gx_chart_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-chart", 13);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx_r0.chart.chartType)("datasets", ctx_r0.chart.datasets)("labels", ctx_r0.chart.labels)("colors", ctx_r0.chart.colors)("options", ctx_r0.chart.options);
        }
      }

      function GxChartOverlayComponent_h6_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title);
        }
      }

      function GxChartOverlayComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.heading);
        }
      }

      function GxChartOverlayComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.sub_heading);
        }
      }

      function GxChartOverlayComponent_gx_icon_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 17);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r4.data.icon);
        }
      }

      function GxChartOverlayComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.data.tagline);
        }
      }

      var GxChartOverlayComponent = /*#__PURE__*/function () {
        function GxChartOverlayComponent(eleRef) {
          var _this9 = this;

          _classCallCheck(this, GxChartOverlayComponent);

          this.eleRef = eleRef;
          this.isOverlayOut = false;
          this.hostClasses = ['dt-card', 'dt-chart'];
          this.hostClasses.forEach(function (classname) {
            _this9.eleRef.nativeElement.classList.add(classname);
          });
        }

        _createClass(GxChartOverlayComponent, [{
          key: "toggleOverlay",
          value: function toggleOverlay() {
            this.isOverlayOut = !this.isOverlayOut;
          }
        }]);

        return GxChartOverlayComponent;
      }();

      GxChartOverlayComponent.ɵfac = function GxChartOverlayComponent_Factory(t) {
        return new (t || GxChartOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxChartOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxChartOverlayComponent,
        selectors: [["gx-chart-overlay"]],
        hostVars: 2,
        hostBindings: function GxChartOverlayComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dt-chart__reveal", ctx.isOverlayOut);
          }
        },
        inputs: {
          bodyClasses: "bodyClasses",
          chart: "chart",
          data: "data"
        },
        decls: 13,
        vars: 7,
        consts: [["class", "dt-chart__body", "chartClasses", "rounded-bottom", 3, "chartType", "datasets", "labels", "colors", "options", 4, "ngIf"], [1, "dt-chart__overlay", 3, "ngClass"], ["class", "title text-white text-uppercase", 4, "ngIf"], [1, "content-area"], ["class", "d-inline-block mb-1 display-3 font-weight-500", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["class", "d-inline-block mr-1", 4, "ngIf"], ["class", "f-10 mr-2", 3, "name", 4, "ngIf"], ["class", "d-inline-block f-12", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-light", "dt-fab-btn", "size-25", "action-btn", 3, "click"], ["name", "stats2", "size", "xl"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-light", "dt-fab-btn", "size-25", "close-btn", 3, "click"], ["name", "remove", "size", "lg"], ["chartClasses", "rounded-bottom", 1, "dt-chart__body", 3, "chartType", "datasets", "labels", "colors", "options"], [1, "title", "text-white", "text-uppercase"], [1, "d-inline-block", "mb-1", "display-3", "font-weight-500"], [1, "d-inline-block", "mr-1"], [1, "f-10", "mr-2", 3, "name"], [1, "d-inline-block", "f-12"]],
        template: function GxChartOverlayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxChartOverlayComponent_gx_chart_0_Template, 1, 5, "gx-chart", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxChartOverlayComponent_h6_2_Template, 2, 1, "h6", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxChartOverlayComponent_span_4_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GxChartOverlayComponent_span_6_Template, 2, 1, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GxChartOverlayComponent_gx_icon_7_Template, 1, 1, "gx-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxChartOverlayComponent_span_8_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxChartOverlayComponent_Template_a_click_9_listener() {
              return ctx.toggleOverlay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "gx-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxChartOverlayComponent_Template_a_click_11_listener() {
              return ctx.toggleOverlay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "gx-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chart);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.sub_heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.tagline);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_3__["GxChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1jaGFydC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxChartOverlayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-chart-overlay',
            templateUrl: './gx-chart-overlay.component.html',
            styleUrls: ['./gx-chart-overlay.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          isOverlayOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dt-chart__reveal']
          }],
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Pkuf":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-trip-card/gx-trip-card.component.ts ***!
      \***************************************************************************/

    /*! exports provided: GxTripCardComponent */

    /***/
    function Pkuf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxTripCardComponent", function () {
        return GxTripCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GxTripCardComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.category);
        }
      }

      var GxTripCardComponent = function GxTripCardComponent() {
        _classCallCheck(this, GxTripCardComponent);

        this.bodyClasses = 'py-sm-0';
        this.textStyle = 'mb-5';
      };

      GxTripCardComponent.ɵfac = function GxTripCardComponent_Factory(t) {
        return new (t || GxTripCardComponent)();
      };

      GxTripCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxTripCardComponent,
        selectors: [["gx-trip-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          textStyle: "textStyle",
          data: "data"
        },
        decls: 10,
        vars: 4,
        consts: [[1, "bg-overlay__inner"], [1, "row"], [1, "col-xl-6", "offset-sm-6"], ["class", "d-block mb-2", 4, "ngIf"], [1, "card-text", "display-4", "font-weight-600"], [1, "card-text", 3, "ngClass", "innerHTML"], [1, "btn", "btn-default", "btn-sm", "text-dark"], [1, "d-block", "mb-2"]],
        template: function GxTripCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bs-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxTripCardComponent_span_4_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.category);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textStyle)("innerHTML", ctx.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC10cmlwLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxTripCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-trip-card',
            templateUrl: './gx-trip-card.component.html',
            styleUrls: ['./gx-trip-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "QVfP":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-employee-card/gx-employee-card.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GxEmployeeCardComponent */

    /***/
    function QVfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxEmployeeCardComponent", function () {
        return GxEmployeeCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../widgets/gx-avatar/gx-avatar.component */
      "tjww");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../gx-chart/gx-chart.component */
      "ztgp");

      function GxEmployeeCardComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var GxEmployeeCardComponent = function GxEmployeeCardComponent() {
        _classCallCheck(this, GxEmployeeCardComponent);
      };

      GxEmployeeCardComponent.ɵfac = function GxEmployeeCardComponent_Factory(t) {
        return new (t || GxEmployeeCardComponent)();
      };

      GxEmployeeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxEmployeeCardComponent,
        selectors: [["gx-employee-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          actionItems: "actionItems",
          employee: "employee"
        },
        decls: 26,
        vars: 15,
        consts: [[1, "bg-primary", "text-white"], ["href", "javascript:void(0)", 1, "d-inline-block", "text-white", "mr-3"], ["name", "charts", "fw", "true", "size", "lg"], ["href", "javascript:void(0)", 1, "d-inline-block", "text-white"], ["name", "message", "fw", "true", "size", "lg"], ["ngbDropdown", "", "placement", "bottom-right"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", 1, "no-arrow", "text-white"], ["name", "settings", "size", "lg", 3, "fw"], ["ngbDropdownMenu", ""], [4, "ngTemplateOutlet"], [3, "ngClass"], [1, "user-avatar", "size-70", 3, "user"], [1, "dt-avatar-info", "mb-4"], [1, "h2", "dt-avatar-name", "mb-1"], [1, "d-block"], [1, "trending-section", "justify-content-center", "text-primary"], ["name", "pointer-up", 1, "mr-2"], [1, "value", "h2"], [1, "mb-0", "f-12"], ["chartClasses", "rounded-bottom", 1, "dt-chart__body", 3, "chartType", "options", "shadowType", "gradients", "datasets", "labels", "colors"]],
        template: function GxEmployeeCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gx-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card-tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GxEmployeeCardComponent_ng_container_11_Template, 1, 0, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "card-body", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "gx-avatar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "gx-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "gx-chart", 19);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.actionItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.employee.profile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.profile.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.profile.designation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.progress.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.progress.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.employee.chart.chartType)("options", ctx.employee.chart.options)("shadowType", ctx.employee.chart.shadowType)("gradients", ctx.employee.chart.gradients)("datasets", ctx.employee.chart.datasets)("labels", ctx.employee.chart.labels)("colors", ctx.employee.chart.colors);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__["CardHeadingComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_4__["CardToolComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_7__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_8__["GxAvatarComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_9__["GxChartComponent"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtZW1wbG95ZWUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7QUFBbEI7O0FBRkE7RUFNSSxhQUFhO0FBQWpCIiwiZmlsZSI6Imd4LWVtcGxveWVlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAmLmR0LWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLmR0LWNhcmRfX2Z1bGwtaGVpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxEmployeeCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-employee-card',
            templateUrl: './gx-employee-card.component.html',
            styleUrls: ['./gx-employee-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          actionItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          employee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "QZuB":
    /*!*************************************************************!*\
      !*** ./src/gaxon/components/common/custom-common.module.ts ***!
      \*************************************************************/

    /*! exports provided: CustomCommonModule */

    /***/
    function QZuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomCommonModule", function () {
        return CustomCommonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _entry_header_entry_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entry-header/entry-header.component */
      "tfyL");
      /* harmony import */


      var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./page-header/page-header.component */
      "dCDM");

      var CustomCommonModule = function CustomCommonModule() {
        _classCallCheck(this, CustomCommonModule);
      };

      CustomCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CustomCommonModule
      });
      CustomCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CustomCommonModule_Factory(t) {
          return new (t || CustomCommonModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomCommonModule, {
          declarations: [_entry_header_entry_header_component__WEBPACK_IMPORTED_MODULE_2__["EntryHeaderComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_entry_header_entry_header_component__WEBPACK_IMPORTED_MODULE_2__["EntryHeaderComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_entry_header_entry_header_component__WEBPACK_IMPORTED_MODULE_2__["EntryHeaderComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
            exports: [_entry_header_entry_header_component__WEBPACK_IMPORTED_MODULE_2__["EntryHeaderComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RZr1":
    /*!*********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-project-card/gx-project-card.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GxProjectCardComponent */

    /***/
    function RZr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxProjectCardComponent", function () {
        return GxProjectCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../widgets/gx-status-bar/gx-status-bar.component */
      "W9Kp");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../widgets/gx-avatar/gx-avatar.component */
      "tjww");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxProjectCardComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.project.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.project.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxProjectCardComponent_h2_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 15);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.project.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function GxProjectCardComponent_li_15_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r4.name);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "ml-n3": a0
        };
      };

      function GxProjectCardComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxProjectCardComponent_li_15_ng_template_1_Template, 3, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "gx-avatar", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r5 !== 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", member_r4)("charLength", 2);
        }
      }

      function GxProjectCardComponent_a_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.project.route);
        }
      }

      var _c1 = ["*"];

      var GxProjectCardComponent = /*#__PURE__*/function () {
        function GxProjectCardComponent() {
          _classCallCheck(this, GxProjectCardComponent);

          this.onClickAddMember = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(GxProjectCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * On click add member
           * @param event
           * @param {ElementRef} btnAddMember
           */

        }, {
          key: "onAddMember",
          value: function onAddMember(event, btnAddMember) {
            event.preventDefault();
            this.onClickAddMember.emit(btnAddMember);
          }
        }]);

        return GxProjectCardComponent;
      }();

      GxProjectCardComponent.ɵfac = function GxProjectCardComponent_Factory(t) {
        return new (t || GxProjectCardComponent)();
      };

      GxProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxProjectCardComponent,
        selectors: [["gx-project-card"]],
        inputs: {
          cardTitle: "cardTitle",
          bodyClasses: "bodyClasses",
          project: "project"
        },
        outputs: {
          onClickAddMember: "onClickAddMember"
        },
        ngContentSelectors: _c1,
        decls: 19,
        vars: 8,
        consts: [[3, "card-title"], [3, "ngClass"], [1, "text-center"], ["class", "img-fluid mb-4", 3, "src", "alt", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["hideCounter", "", "fullWidth", "", "barClassNames", "mb-2", "barColor", "bg-secondary", 1, "flex-column", "mb-5", 3, "fillVal", "maxVal"], [1, "d-flex", "justify-content-between"], [1, "dt-indicator-title", "text-muted", "f-12"], [1, "dt-indicator-item__count", "ml-3"], [1, "d-flex", "align-items-center"], [1, "dt-list", "dt-list-stack"], ["class", "dt-list__item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "d-inline-block", "text-muted", "ml-4"], ["href", "javascript:void(0)", "class", "btn btn-primary btn-sm btn-block rounded-0", 3, "routerLink", 4, "ngIf"], [1, "img-fluid", "mb-4", 3, "src", "alt"], [3, "innerHTML"], [1, "dt-list__item", 3, "ngClass"], ["tooltipContent", ""], ["href", "javascript:void(0)", "triggers", "mouseenter:mouseleave", "container", "body", 1, "d-inline-flex", 3, "ngbPopover"], [1, "dt-avatar", "size-30", 3, "user", "charLength"], [1, "user-bg-card__info"], [1, "dt-avatar-name", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-sm", "btn-block", "rounded-0", 3, "routerLink"]],
        template: function GxProjectCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxProjectCardComponent_img_5_Template, 1, 2, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GxProjectCardComponent_h2_6_Template, 1, 1, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "gx-status-bar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "85% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GxProjectCardComponent_li_15_Template, 5, 6, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GxProjectCardComponent_a_18_Template, 2, 1, "a", 13);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card-title", ctx.cardTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.logo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fillVal", 85)("maxVal", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.teams);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.route);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__["CardToolComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_5__["GxStatusBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopover"], _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_7__["GxAvatarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYztBQUFsQjs7QUFGQTtFQU1JLGFBQWE7QUFBakIiLCJmaWxlIjoiZ3gtcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgJi5kdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5kdC1jYXJkX19mdWxsLWhlaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxProjectCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-project-card',
            templateUrl: './gx-project-card.component.html',
            styleUrls: ['./gx-project-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClickAddMember: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SMY0":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-report-card/gx-report-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxReportCardComponent */

    /***/
    function SMY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxReportCardComponent", function () {
        return GxReportCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../gx-chart/gx-chart.component */
      "ztgp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GxReportCardComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.dotColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
        }
      }

      var GxReportCardComponent = /*#__PURE__*/function () {
        function GxReportCardComponent() {
          _classCallCheck(this, GxReportCardComponent);
        }

        _createClass(GxReportCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxReportCardComponent;
      }();

      GxReportCardComponent.ɵfac = function GxReportCardComponent_Factory(t) {
        return new (t || GxReportCardComponent)();
      };

      GxReportCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxReportCardComponent,
        selectors: [["gx-report-card"]],
        inputs: {
          title: "title",
          data: "data",
          chart: "chart"
        },
        decls: 16,
        vars: 9,
        consts: [[3, "card-title"], ["href", "javascript:void(0)", 1, "dt-card__more"], [1, "row"], [1, "col-xl-4", "col-md-12", "col-sm-4"], ["chartClasses", "mx-auto mb-5 mb-sm-0 mb-md-5 mb-xl-0", 3, "chartType", "options", "labels", "colors", "datasets"], [1, "col-xl-8", "col-md-12", "col-sm-8"], [1, "pb-3", "mb-3", "border-bottom"], [1, "display-4", "d-inline-block", "mr-2", "font-weight-500", "text-dark"], [1, "font-weight-light", "f-16"], [1, "dt-list", "dt-list-col-6"], ["class", "dt-list__item", 4, "ngFor", "ngForOf"], [1, "dt-list__item"], [1, "dot-shape", "dot-shape-lg", "mr-3", 3, "ngClass"], [1, "d-inline-block"]],
        template: function GxReportCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "See All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gx-chart", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GxReportCardComponent_li_15_Template, 4, 2, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card-title", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chart.chartType)("options", ctx.chart.options)("labels", ctx.chart.labels)("colors", ctx.chart.colors)("datasets", ctx.chart.datasets);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.items);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__["CardToolComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_4__["GxChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1yZXBvcnQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxReportCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-report-card',
            templateUrl: './gx-report-card.component.html',
            styleUrls: ['./gx-report-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "SkAW":
    /*!********************************************!*\
      !*** ./src/gaxon/pipes/one-letter.pipe.ts ***!
      \********************************************/

    /*! exports provided: OneLetterPipe */

    /***/
    function SkAW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OneLetterPipe", function () {
        return OneLetterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OneLetterPipe = /*#__PURE__*/function () {
        function OneLetterPipe() {
          _classCallCheck(this, OneLetterPipe);
        }

        _createClass(OneLetterPipe, [{
          key: "transform",
          value: function transform(input) {
            if (input) {
              return input.substring(0, 1).toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
              });
            }

            return input;
          }
        }]);

        return OneLetterPipe;
      }();

      OneLetterPipe.ɵfac = function OneLetterPipe_Factory(t) {
        return new (t || OneLetterPipe)();
      };

      OneLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "oneLetter",
        type: OneLetterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OneLetterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'oneLetter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "SmQ2":
    /*!***************************************************!*\
      !*** ./src/gaxon/pipes/thousand-suffixes.pipe.ts ***!
      \***************************************************/

    /*! exports provided: ThousandSuffixesPipe */

    /***/
    function SmQ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThousandSuffixesPipe", function () {
        return ThousandSuffixesPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ThousandSuffixesPipe = /*#__PURE__*/function () {
        function ThousandSuffixesPipe() {
          _classCallCheck(this, ThousandSuffixesPipe);
        }

        _createClass(ThousandSuffixesPipe, [{
          key: "transform",
          value: function transform(input, args) {
            var suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

            if (Number.isNaN(input)) {
              return null;
            }

            if (input < 1000) {
              return input;
            }

            var exp = Math.floor(Math.log(input) / Math.log(1000));
            return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1] + '+';
          }
        }]);

        return ThousandSuffixesPipe;
      }();

      ThousandSuffixesPipe.ɵfac = function ThousandSuffixesPipe_Factory(t) {
        return new (t || ThousandSuffixesPipe)();
      };

      ThousandSuffixesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "thousandSuff",
        type: ThousandSuffixesPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThousandSuffixesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'thousandSuff'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _app_layouts_auth_layout_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/layouts/auth-layout/auth.service */
      "sfC7");
      /* harmony import */


      var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/settings/settings.service */
      "b1TM");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-progressbar */
      "3bQh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translate, authService, settingService, // private swPush: SwPush,
        baseService, appRef, // private update: SwUpdate,
        // private newsletterService: NewsletterServiceService,
        ngProgress, router, location) {
          var _this10 = this;

          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this.authService = authService;
          this.settingService = settingService;
          this.baseService = baseService;
          this.appRef = appRef;
          this.ngProgress = ngProgress;
          this.router = router;
          this.VAPID_PUBLIC_KEY = "BAVGDCXrfGFSKqrHW_DSnlOOFPEmGh1zrlRtMBA5jaivUpwuYju2dp5vNe5VXrZjetBOXSfr9Vt-qGW6rZPS5OE";
          this.classlist = 'dt-root';
          this.isAuthenticated = false;
          if (!!JSON.parse(window.localStorage.getItem("userData"))) this.id = JSON.parse(window.localStorage.getItem("userData"))._id; // this.updateClient();
          // this.checkUpdate();
          // this.subscribeToNotifications();
          // set translation

          translate.addLangs(['en', 'es']);
          translate.setDefaultLang('en');
          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

          var _language = window.localStorage.getItem('language');

          if (_language) {
            translate.use(_language);
          } // set translation end


          this.onSettingChanged = this.settingService.onSettingChanged.subscribe(function (newSettings) {
            _this10.settings = newSettings;
          });
          this.isAuthenticated = this.authService.isAuthenticated();
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this10.ngProgress.start();

              _this10.isAuthenticated = _this10.authService.isAuthenticated();
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this10.isAuthenticated = _this10.authService.isAuthenticated();

              _this10.ngProgress.done();

              var _router$parseUrl = router.parseUrl(router.url),
                  fragment = _router$parseUrl.fragment;

              if (fragment) {
                var element = document.querySelector("#".concat(fragment));

                if (element) {
                  element.scrollIntoView();
                }
              } else {// window.scrollTo({top: 0});
              }
            }

            _this10.route = location.path();
          });
        } //////////Test
        // updateClient() {
        //   if (!this.update.isEnabled) {
        //     console.log('Not Enabled');
        //     return;
        //   }
        //   this.update.available.subscribe((event) => {
        //     console.log(`current`, event.current, `available `, event.available);
        //     if (confirm('update available for the app please conform')) {
        //       this.update.activateUpdate().then(() => location.reload());
        //     }
        //   });
        //   this.update.activated.subscribe((event) => {
        //     console.log(`current`, event.previous, `available `, event.current);
        //   });
        // }
        // checkUpdate() {
        //   this.appRef.isStable.subscribe((isStable) => {
        //     if (isStable) {
        //       const timeInterval = interval(8 * 60 * 60 * 1000);
        //       timeInterval.subscribe(() => {
        //         this.update.checkForUpdate().then(() => console.log('checked'));
        //         console.log('update checked');
        //       });
        //     }
        //   });
        // }
        // pushSubscription() {
        //   if (!this.swPush.isEnabled) {
        //     console.log('Notification is not enabled');
        //     return;
        //   }
        //   this.swPush
        //     .requestSubscription({
        //       serverPublicKey: this.VAPID_PUBLIC_KEY,
        //     })
        //     .then((sub) => {
        //       // Make a post call to serve
        //       console.log(JSON.stringify(sub));
        //       var data:any ={};
        //       data.notificattionToken = JSON.stringify(sub);
        //       axios.put(this.baseService.baseUrl + 'secure/users/updateNotificationToken/'+this.id,data,{
        //         headers: {
        //           'x-auth' : this.baseService.authToken
        //         },
        //       })
        //         .then(response => {        
        //           console.log(response)
        //           if (response.data.status) {
        //             console.log(response.data)
        //           // .then(() => {
        //           //   location.reload(); });
        //           }
        //           // else if(this.baseService.checkToken(response.data.message , response.data.status))
        //           // {
        //           // }
        //           else{
        //             console.log(response.data)
        //            }
        //         })
        //         .catch(function (error) {
        //           console.log(error)
        //         })        
        //     })
        //     .catch((err) => console.log(err));
        // }
        // postSync() {
        //   let obj = {
        //     name: 'Subrat',
        //   };
        //   //api call
        //    axios.post('http://localhost:8033/data', obj).then(
        //     (res) => {
        //       console.log(res);
        //     },
        //     (err) => {
        //       // this.indexedDBService
        //       //   .addUser(obj.name)
        //       //   .then(this.backgroundSync)
        //       //   .catch(console.log);
        //       this.backgroundSync();
        //     }
        //   );
        // }
        // backgroundSync() {
        //   navigator.serviceWorker.ready
        //     .then((swRegistration) => swRegistration.sync.register('post-data'))
        //     .catch(console.log);
        // }


        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.pushSubscription();
            // console.log("pushSubscription")
            // this.swPush.messages.subscribe((message) => console.log(message));
            // this.swPush.notificationClicks.subscribe(({ action, notification }) => {
            //   console.log("notification Test")
            //   window.open(notification.data.url);
            // });
            //  axios.get('http://dummy.restapiexample.com/api/v1/employees').then(
            //   (res: any) => {
            //     this.apiData = res.data;
            //   },
            //   (err) => {
            //     console.error(err);
            //   }
            // );
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layouts_auth_layout_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_5__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["NgProgress"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostVars: 2,
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
          }
        },
        decls: 2,
        vars: 0,
        consts: [[1, "loading-bar"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }, {
            type: _app_layouts_auth_layout_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_5__["BaseServiceService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["NgProgress"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
          }];
        }, {
          classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }]
        });
      })();
      /***/

    },

    /***/
    "Tv/v":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-intro-card/gx-intro-card.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GxIntroCardComponent */

    /***/
    function TvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxIntroCardComponent", function () {
        return GxIntroCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxIntroCardComponent_h4_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.title);
        }
      }

      function GxIntroCardComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.badge);
        }
      }

      function GxIntroCardComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.subtitle);
        }
      }

      function GxIntroCardComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.content);
        }
      }

      var GxIntroCardComponent = /*#__PURE__*/function () {
        function GxIntroCardComponent(eleRef) {
          _classCallCheck(this, GxIntroCardComponent);

          this.eleRef = eleRef;
          this.titlePos = 'top';
          this.eleRef.nativeElement.classList.add('dt-intro-card');
        }

        _createClass(GxIntroCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxIntroCardComponent;
      }();

      GxIntroCardComponent.ɵfac = function GxIntroCardComponent_Factory(t) {
        return new (t || GxIntroCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxIntroCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxIntroCardComponent,
        selectors: [["gx-intro-card"]],
        inputs: {
          titlePos: "titlePos",
          data: "data"
        },
        decls: 11,
        vars: 7,
        consts: [[1, "card-image"], [1, "img-fluid", 3, "src", "alt"], [1, "card-stacked"], [1, "py-3", "pr-7", "pl-3"], ["class", "d-inline-block mr-2 mb-2", 4, "ngIf"], ["class", "badge badge-success p-1", 4, "ngIf"], ["class", "d-block f-12 mb-1", 4, "ngIf"], ["class", "d-block f-12", 4, "ngIf"], [1, "action-area"], [1, "text-body", 3, "routerLink"], ["name", "chevrolet-right", "size", "xl"], [1, "d-inline-block", "mr-2", "mb-2"], [1, "badge", "badge-success", "p-1"], [1, "d-block", "f-12", "mb-1"], [1, "d-block", "f-12"]],
        template: function GxIntroCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "bs-card-body", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxIntroCardComponent_h4_4_Template, 2, 1, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxIntroCardComponent_span_5_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GxIntroCardComponent_span_6_Template, 2, 1, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GxIntroCardComponent_span_7_Template, 2, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "gx-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.badge);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.subtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.data.route);
          }
        },
        directives: [_bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1pbnRyby1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxIntroCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-intro-card',
            templateUrl: './gx-intro-card.component.html',
            styleUrls: ['./gx-intro-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          titlePos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "USGB":
    /*!*****************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-value-calculator/gx-value-calculator.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: GxValueCalculatorComponent */

    /***/
    function USGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxValueCalculatorComponent", function () {
        return GxValueCalculatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var GxValueCalculatorComponent = /*#__PURE__*/function () {
        function GxValueCalculatorComponent() {
          _classCallCheck(this, GxValueCalculatorComponent);
        }

        _createClass(GxValueCalculatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxValueCalculatorComponent;
      }();

      GxValueCalculatorComponent.ɵfac = function GxValueCalculatorComponent_Factory(t) {
        return new (t || GxValueCalculatorComponent)();
      };

      GxValueCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxValueCalculatorComponent,
        selectors: [["gx-value-calculator"]],
        decls: 71,
        vars: 2,
        consts: [[1, "dt-card__header"], [1, "d-flex", "align-items-center"], ["name", "calculator", "size", "2x", 1, "text-white", "mr-2", 3, "fw"], [1, "dt-card__title", "text-white"], [1, "align-self-start", "mt-n3", "mr-n2"], ["ngbDropdown", "", "placement", "bottom-right"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "no-arrow", "text-white"], ["name", "horizontal-more", "size", "3x", 3, "fw"], ["ngbDropdownMenu", ""], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "pb-3"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "custom-select", "custom-select-sm"], ["selected", ""], [1, "col-12"], [1, "d-flex", "mb-1"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-white", "ml-auto"], ["name", "editors"], ["type", "text", "placeholder", "52,400", 1, "form-control", "form-control-sm"], [1, "mb-2"], ["type", "text", 1, "form-control", "form-control-sm"], [1, "px-7", "py-5", "border-top", "border-w-2", "border-black-transparent"], [1, "d-block", "display-4", "mb-2"], [1, "f-16", "mb-0"]],
        template: function GxValueCalculatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value Calculator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card-tool", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "card-body", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ajmer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Bikaner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Chandigarh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dehradun");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Jaipur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Rajori");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Rajori gadh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pugal Road");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bopal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Bodakdev");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Price Per Sq. Feet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "gx-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Enter area (sq. feet)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$45,00,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "1000 Sq. Feet, Bikaner-RajoriGadh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
          }
        },
        directives: [_gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__["CardHeadingComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__["CardToolComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC12YWx1ZS1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxValueCalculatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-value-calculator',
            templateUrl: './gx-value-calculator.component.html',
            styleUrls: ['./gx-value-calculator.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UYrV":
    /*!***************************************************!*\
      !*** ./src/gaxon/modules/shared/shared.module.ts ***!
      \***************************************************/

    /*! exports provided: SharedModule */

    /***/
    function UYrV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/dynamic-dom.service */
      "MhUC");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components */
      "KivK");
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directives/directives.module */
      "WlwI");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "lHLr");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_5__["DynamicDomService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxIconModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsMediaObjectModule"], _components__WEBPACK_IMPORTED_MODULE_6__["NotificationsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxToggleModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBadgeModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBreadcrumbsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CustomCommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxIconModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsMediaObjectModule"], _components__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxToggleModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBadgeModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBreadcrumbsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CustomCommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxIconModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsMediaObjectModule"], _components__WEBPACK_IMPORTED_MODULE_6__["NotificationsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxToggleModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBadgeModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBreadcrumbsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CustomCommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxIconModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsMediaObjectModule"], _components__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxToggleModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBadgeModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBreadcrumbsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CustomCommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxIconModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsMediaObjectModule"], _components__WEBPACK_IMPORTED_MODULE_6__["NotificationsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxToggleModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBadgeModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBreadcrumbsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CustomCommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
            declarations: [],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxIconModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsCardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["BsMediaObjectModule"], _components__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxToggleModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBadgeModule"], _components__WEBPACK_IMPORTED_MODULE_6__["GxBreadcrumbsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CustomCommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
            providers: [_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_5__["DynamicDomService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ubxp":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-info-panel-card/gx-info-panel-card.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxInfoPanelCardComponent */

    /***/
    function Ubxp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxInfoPanelCardComponent", function () {
        return GxInfoPanelCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxInfoPanelCardComponent_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxInfoPanelCardComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.data.actionRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.actionLabel);
        }
      }

      var GxInfoPanelCardComponent = function GxInfoPanelCardComponent(eleRef) {
        _classCallCheck(this, GxInfoPanelCardComponent);

        this.eleRef = eleRef;
        this.eleRef.nativeElement.classList.add('dt-card');
      };

      GxInfoPanelCardComponent.ɵfac = function GxInfoPanelCardComponent_Factory(t) {
        return new (t || GxInfoPanelCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxInfoPanelCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxInfoPanelCardComponent,
        selectors: [["gx-info-panel-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          data: "data"
        },
        decls: 9,
        vars: 3,
        consts: [[1, "px-5", "mb-4"], [1, "text-center"], [1, "dt-separator-h-v1", "mb-2"], [1, "mb-0"], [1, "mx-n8", "mb-n8"], ["class", "w-100", 3, "src", "alt", 4, "ngIf"], ["class", "btn btn-primary btn-block rounded-0 text-uppercase", 3, "routerLink", 4, "ngIf"], [1, "w-100", 3, "src", "alt"], [1, "btn", "btn-primary", "btn-block", "rounded-0", "text-uppercase", 3, "routerLink"]],
        template: function GxInfoPanelCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GxInfoPanelCardComponent_img_7_Template, 1, 2, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxInfoPanelCardComponent_a_8_Template, 2, 2, "a", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__["CardHeadingComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxInfoPanelCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-info-panel-card',
            templateUrl: './gx-info-panel-card.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Vp11":
    /*!***************************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-online-user-list-card/gx-online-user-list-card.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: GxOnlineUserListCardComponent */

    /***/
    function Vp11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxOnlineUserListCardComponent", function () {
        return GxOnlineUserListCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @gaxon/directives/status.directive */
      "IhJw");

      function GxOnlineUserListCardComponent_li_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GxOnlineUserListCardComponent_li_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
        }

        if (rf & 2) {
          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("statusCode", user_r1.status);
        }
      }

      function GxOnlineUserListCardComponent_li_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "more-thumb": a0
        };
      };

      function GxOnlineUserListCardComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxOnlineUserListCardComponent_li_1_span_2_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxOnlineUserListCardComponent_li_1_span_3_Template, 1, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxOnlineUserListCardComponent_li_1_span_4_Template, 3, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;
          var last_r2 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + user_r1.image + ")"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, last_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
        }
      }

      var GxOnlineUserListCardComponent = /*#__PURE__*/function () {
        function GxOnlineUserListCardComponent() {
          _classCallCheck(this, GxOnlineUserListCardComponent);
        }

        _createClass(GxOnlineUserListCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxOnlineUserListCardComponent;
      }();

      GxOnlineUserListCardComponent.ɵfac = function GxOnlineUserListCardComponent_Factory(t) {
        return new (t || GxOnlineUserListCardComponent)();
      };

      GxOnlineUserListCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxOnlineUserListCardComponent,
        selectors: [["gx-online-user-list-card"]],
        inputs: {
          userList: "userList",
          limit: "limit"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "dt-list", "dt-list-sm", "dt-friend-list"], ["class", "dt-list__item", 4, "ngFor", "ngForOf"], [1, "dt-list__item"], ["href", "javascript:void(0)", 1, "card", "user-bg-card", "user-bg-card-sm", "mb-0", 3, "ngStyle", "ngClass"], ["class", "count-number display-4", 4, "ngIf"], ["class", "dot-shape dot-shape-lg dt-status", "status", "", 3, "statusCode", 4, "ngIf"], ["class", "user-bg-card__info", 4, "ngIf"], [1, "count-number", "display-4"], ["status", "", 1, "dot-shape", "dot-shape-lg", "dt-status", 3, "statusCode"], [1, "user-bg-card__info"], [1, "dt-avatar-name", "f-10", "mb-0"]],
        template: function GxOnlineUserListCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxOnlineUserListCardComponent_li_1_Template, 5, 9, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_2__["StatusDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxOnlineUserListCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-online-user-list-card',
            templateUrl: './gx-online-user-list-card.component.html'
          }]
        }], function () {
          return [];
        }, {
          userList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "W9Kp":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/widgets/gx-status-bar/gx-status-bar.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxStatusBarComponent */

    /***/
    function W9Kp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxStatusBarComponent", function () {
        return GxStatusBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _mix_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../mix/animations */
      "0L9v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GxStatusBarComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.textColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.prefix + ctx_r0.currentNumber + ctx_r0.percentText + ctx_r0.suffix);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      var _c1 = function _c1(a0) {
        return {
          newWidth: a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          value: a0,
          params: a1
        };
      };

      function GxStatusBarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@toggleWidth.start", function GxStatusBarComponent_div_1_Template_div_animation_toggleWidth_start_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.animationStarted($event);
          })("@toggleWidth.done", function GxStatusBarComponent_div_1_Template_div_animation_toggleWidth_done_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.animationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.barClassNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r1.pointClassName, ctx_r1.barColor))("@toggleWidth", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c2, ctx_r1.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r1.statusBarWidth)));
        }
      }

      function GxStatusBarComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@toggleWidth.start", function GxStatusBarComponent_div_2_Template_div_animation_toggleWidth_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.animationStarted($event);
          })("@toggleWidth.done", function GxStatusBarComponent_div_2_Template_div_animation_toggleWidth_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.animationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r2.pointClassName, ctx_r2.barColor))("@toggleWidth", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.statusBarWidth)));
        }
      }

      function GxStatusBarComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.textColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.prefix + ctx_r3.currentNumber + ctx_r3.percentText);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          textColor: a0,
          "min-w-50": a1
        };
      };

      function GxStatusBarComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, ctx_r4.textColor, ctx_r4.suffix !== "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.suffix);
        }
      }

      var _c4 = ["*"];

      var GxStatusBarComponent = /*#__PURE__*/function () {
        function GxStatusBarComponent(elRef) {
          var _this11 = this;

          _classCallCheck(this, GxStatusBarComponent);

          this.elRef = elRef;
          this.prefix = '';
          this.suffix = '';
          this.maxVal = 100;
          this.barPosition = 'end';
          this.barColor = 'bg-success';
          this.textColor = 'text-success';
          this.barClassNames = '';
          this.pointClassName = '';
          this.percentText = '';
          this._hideCounter = false;
          this._fullWidth = false;
          this._counterSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.countInterval = 1;
          this.currentNumber = 0;
          this.statusBarWidth = 0;
          this.state = false;
          this.elRef.nativeElement.classList.add('dt-indicator-item__info');

          this._counterSub.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (endRange) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, _this11.countInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(_this11.positiveOrNegative(endRange, _this11.currentNumber)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(_this11.currentNumber), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (acc, curr) {
              return acc + curr;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(_this11.isApproachingRange(endRange, _this11.currentNumber)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(function (val) {
            _this11.currentNumber = val;
          });
        }

        _createClass(GxStatusBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (this.maxVal >= this.fillVal) {
              this.statusBarWidth = Math.floor(this.fillVal * 100 / this.maxVal); // this._counterSub.next(this.fillVal);

              setTimeout(function () {
                _this12.state = true;
              }, 300);
            }
          }
        }, {
          key: "positiveOrNegative",
          value: function positiveOrNegative(endRange, currentNumber) {
            return endRange > currentNumber ? 1 : -1;
          }
        }, {
          key: "isApproachingRange",
          value: function isApproachingRange(endRange, currentNumber) {
            return endRange > currentNumber ? function (val) {
              return val <= endRange;
            } : function (val) {
              return val >= endRange;
            };
          }
        }, {
          key: "animationStarted",
          value: function animationStarted(event) {
            if (event.fromState !== 'void') {
              for (var i = 1; i <= this.fillVal; i++) {
                this.currentNumber = i;
              }
            }
          }
        }, {
          key: "animationDone",
          value: function animationDone(event) {
            if (event.fromState !== 'void') {
              this.currentNumber = this.fillVal;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onDestroy.next();

            this._onDestroy.complete();
          }
        }, {
          key: "showPercent",
          set: function set(percentage) {
            if (percentage !== false) {
              this.percentText = '%';
            }
          }
        }, {
          key: "hideCounter",
          set: function set(hideCounter) {
            if (hideCounter !== false) {
              this._hideCounter = true;
            }
          }
        }, {
          key: "fullWidth",
          set: function set(fullWidth) {
            if (fullWidth !== false) {
              this._fullWidth = true;
            }
          }
        }, {
          key: "showPoint",
          set: function set(showPoint) {
            if (showPoint !== false) {
              this.pointClassName = 'fill-pointer';
            }
          }
        }]);

        return GxStatusBarComponent;
      }();

      GxStatusBarComponent.ɵfac = function GxStatusBarComponent_Factory(t) {
        return new (t || GxStatusBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxStatusBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxStatusBarComponent,
        selectors: [["gx-status-bar"]],
        inputs: {
          prefix: "prefix",
          suffix: "suffix",
          fillVal: "fillVal",
          maxVal: "maxVal",
          barPosition: "barPosition",
          barColor: "barColor",
          textColor: "textColor",
          barClassNames: "barClassNames",
          showPercent: "showPercent",
          hideCounter: "hideCounter",
          fullWidth: "fullWidth",
          showPoint: "showPoint"
        },
        ngContentSelectors: _c4,
        decls: 6,
        vars: 5,
        consts: [["class", "dt-indicator-item__count text-nowrap mr-3", 3, "ngClass", 4, "ngIf"], ["class", "dt-indicator-item__bar", 3, "ngClass", 4, "ngIf"], ["class", "dt-indicator-item__fill", 3, "ngClass", 4, "ngIf"], ["class", "dt-indicator-item__count text-nowrap ml-3", 3, "ngClass", 4, "ngIf"], ["class", "d-inline-block", 3, "ngClass", 4, "ngIf"], [1, "dt-indicator-item__count", "text-nowrap", "mr-3", 3, "ngClass"], [1, "dt-indicator-item__bar", 3, "ngClass"], [1, "dt-indicator-item__fill", 3, "ngClass"], [1, "dt-indicator-item__count", "text-nowrap", "ml-3", 3, "ngClass"], [1, "d-inline-block", 3, "ngClass"]],
        template: function GxStatusBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxStatusBarComponent_span_0_Template, 2, 2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxStatusBarComponent_div_1_Template, 2, 11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxStatusBarComponent_div_2_Template, 1, 10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxStatusBarComponent_span_3_Template, 2, 2, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GxStatusBarComponent_span_4_Template, 2, 5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barPosition === "end" && !ctx._hideCounter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._fullWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._fullWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barPosition === "start" && !ctx._hideCounter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barPosition === "start" && ctx.suffix);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        encapsulation: 2,
        data: {
          animation: _mix_animations__WEBPACK_IMPORTED_MODULE_3__["appAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxStatusBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-status-bar',
            templateUrl: './gx-status-bar.component.html',
            animations: _mix_animations__WEBPACK_IMPORTED_MODULE_3__["appAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          prefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          suffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fillVal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxVal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          barPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          barColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          barClassNames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fullWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "WlwI":
    /*!***************************************************!*\
      !*** ./src/gaxon/directives/directives.module.ts ***!
      \***************************************************/

    /*! exports provided: DirectivesModule */

    /***/
    function WlwI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
        return DirectivesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _get_by_id_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./get-by-id.directive */
      "Kr02");
      /* harmony import */


      var _gx_card_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-card.directive */
      "5qYI");
      /* harmony import */


      var _bs_card_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bs-card.directive */
      "jSQo");
      /* harmony import */


      var _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gaxon/directives/status.directive */
      "IhJw");
      /* harmony import */


      var _gx_badge_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gx-badge.directive */
      "gwDG");

      var DirectivesModule = function DirectivesModule() {
        _classCallCheck(this, DirectivesModule);
      };

      DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DirectivesModule
      });
      DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DirectivesModule_Factory(t) {
          return new (t || DirectivesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, {
          declarations: [_get_by_id_directive__WEBPACK_IMPORTED_MODULE_1__["GetByIdDirective"], _gx_card_directive__WEBPACK_IMPORTED_MODULE_2__["GxCardDirective"], _bs_card_directive__WEBPACK_IMPORTED_MODULE_3__["BsCardDirective"], _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_4__["StatusDirective"], _gx_badge_directive__WEBPACK_IMPORTED_MODULE_5__["GxBadgeDirective"]],
          exports: [_get_by_id_directive__WEBPACK_IMPORTED_MODULE_1__["GetByIdDirective"], _gx_card_directive__WEBPACK_IMPORTED_MODULE_2__["GxCardDirective"], _bs_card_directive__WEBPACK_IMPORTED_MODULE_3__["BsCardDirective"], _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_4__["StatusDirective"], _gx_badge_directive__WEBPACK_IMPORTED_MODULE_5__["GxBadgeDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [],
            declarations: [_get_by_id_directive__WEBPACK_IMPORTED_MODULE_1__["GetByIdDirective"], _gx_card_directive__WEBPACK_IMPORTED_MODULE_2__["GxCardDirective"], _bs_card_directive__WEBPACK_IMPORTED_MODULE_3__["BsCardDirective"], _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_4__["StatusDirective"], _gx_badge_directive__WEBPACK_IMPORTED_MODULE_5__["GxBadgeDirective"]],
            exports: [_get_by_id_directive__WEBPACK_IMPORTED_MODULE_1__["GetByIdDirective"], _gx_card_directive__WEBPACK_IMPORTED_MODULE_2__["GxCardDirective"], _bs_card_directive__WEBPACK_IMPORTED_MODULE_3__["BsCardDirective"], _gaxon_directives_status_directive__WEBPACK_IMPORTED_MODULE_4__["StatusDirective"], _gx_badge_directive__WEBPACK_IMPORTED_MODULE_5__["GxBadgeDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XIvi":
    /*!************************************!*\
      !*** ./src/gaxon/helpers/index.ts ***!
      \************************************/

    /*! exports provided: GxHelper */

    /***/
    function XIvi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxHelper", function () {
        return GxHelper;
      });

      var GxHelper = /*#__PURE__*/function () {
        function GxHelper() {
          _classCallCheck(this, GxHelper);
        }

        _createClass(GxHelper, null, [{
          key: "filterArrayByString",
          value: function filterArrayByString(itemsArray, searchStr) {
            var _this13 = this;

            if (!searchStr || searchStr === '') {
              return itemsArray;
            }

            searchStr = searchStr.toLowerCase();
            return itemsArray.filter(function (itemObj) {
              return _this13.searchInObj(itemObj, searchStr);
            });
          }
        }, {
          key: "searchInObj",
          value: function searchInObj(itemObj, searchStr) {
            for (var prop in itemObj) {
              if (!itemObj.hasOwnProperty(prop)) {
                continue;
              }

              var value = itemObj[prop];

              if (typeof value === 'string') {
                if (this.searchInString(value, searchStr)) {
                  return true;
                }
              } else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchStr)) {
                  return true;
                }
              }

              if (typeof value === 'object') {
                if (this.searchInObj(value, searchStr)) {
                  return true;
                }
              }
            }
          }
        }, {
          key: "searchInArray",
          value: function searchInArray(arr, searchStr) {
            var _iterator = _createForOfIteratorHelper(arr),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;

                if (typeof value === 'string') {
                  if (this.searchInString(value, searchStr)) {
                    return true;
                  }
                }

                if (typeof value === 'object') {
                  if (this.searchInObj(value, searchStr)) {
                    return true;
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "searchInString",
          value: function searchInString(value, searchStr) {
            return value.toLowerCase().includes(searchStr);
          }
        }, {
          key: "generateGUID",
          value: function generateGUID() {
            function S4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }

            return S4() + S4();
          }
        }, {
          key: "toggleInArray",
          value: function toggleInArray(item, array) {
            if (array.indexOf(item) === -1) {
              array.push(item);
            } else {
              array.splice(array.indexOf(item), 1);
            }
          }
        }, {
          key: "UUID",
          value: function UUID() {
            if (typeof window !== 'undefined' && typeof window.crypto !== 'undefined' && typeof window.crypto.getRandomValues !== 'undefined') {
              // If we have a cryptographically secure PRNG, use that
              // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
              var buf = new Uint16Array(8);
              window.crypto.getRandomValues(buf);
              return this.pad4(buf[0]) + this.pad4(buf[1]) + '-' + this.pad4(buf[2]) + '-' + this.pad4(buf[3]) + '-' + this.pad4(buf[4]) + '-' + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]);
            } else {
              // Otherwise, just use Math.random
              // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
              // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
              return this.random4() + this.random4() + '-' + this.random4() + '-' + this.random4() + '-' + this.random4() + '-' + this.random4() + this.random4() + this.random4();
            }
          }
        }, {
          key: "pad4",
          value: function pad4(num) {
            var ret = num.toString(16);

            while (ret.length < 4) {
              ret = '0' + ret;
            }

            return ret;
          }
        }, {
          key: "random4",
          value: function random4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }
        }, {
          key: "handleize",
          value: function handleize(text) {
            return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
          }
        }]);

        return GxHelper;
      }();
      /***/

    },

    /***/
    "XcXI":
    /*!*********************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-download-apps-card/gx-download-apps-card.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: GxDownloadAppsCardComponent */

    /***/
    function XcXI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxDownloadAppsCardComponent", function () {
        return GxDownloadAppsCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "mb-2": a0
        };
      };

      function GxDownloadAppsCardComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, i_r2 === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var GxDownloadAppsCardComponent = /*#__PURE__*/function () {
        function GxDownloadAppsCardComponent() {
          _classCallCheck(this, GxDownloadAppsCardComponent);
        }

        _createClass(GxDownloadAppsCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxDownloadAppsCardComponent;
      }();

      GxDownloadAppsCardComponent.ɵfac = function GxDownloadAppsCardComponent_Factory(t) {
        return new (t || GxDownloadAppsCardComponent)();
      };

      GxDownloadAppsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxDownloadAppsCardComponent,
        selectors: [["gx-download-apps-card"]],
        inputs: {
          cardData: "cardData"
        },
        decls: 12,
        vars: 4,
        consts: [[1, "bg-overlay__inner"], [1, "py-6"], [1, "row", "no-gutters"], [1, "col-sm-7"], [1, "text-center", "text-sm-left", "mb-8", "mb-sm-0"], [1, "display-5", "font-weight-500"], [1, "d-block", "mb-3"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-sm-5", "align-self-sm-end", "text-center", "text-sm-right"], ["alt", "App Store", 1, "img-fluid", "mb-n18", 3, "src"], [3, "ngClass"], ["href", "javascript:void(0)", 1, "d-inline-block"], [1, "img-fluid", 3, "src", "alt"]],
        template: function GxDownloadAppsCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GxDownloadAppsCardComponent_div_9_Template, 3, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardData.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardData.subHeading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardData.apps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cardData.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1kb3dubG9hZC1hcHBzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxDownloadAppsCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-download-apps-card',
            templateUrl: './gx-download-apps-card.component.html',
            styleUrls: ['./gx-download-apps-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          cardData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Z4LX":
    /*!*********************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-echarts-liquidfill/gx-echarts-liquidfill.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: GxEchartsLiquidfillComponent */

    /***/
    function Z4LX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxEchartsLiquidfillComponent", function () {
        return GxEchartsLiquidfillComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! echarts */
      "MT78");
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var echarts_liquidfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! echarts-liquidfill */
      "0BWc");
      /* harmony import */


      var echarts_liquidfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts_liquidfill__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../gx-chart/gx-chart.component */
      "ztgp");

      var _c0 = ["realTimeUsers"];

      var GxEchartsLiquidfillComponent = /*#__PURE__*/function () {
        function GxEchartsLiquidfillComponent(elRef) {
          _classCallCheck(this, GxEchartsLiquidfillComponent);

          this.elRef = elRef;
          this.elRef.nativeElement.classList.add('real-time-widget');
        }

        _createClass(GxEchartsLiquidfillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.drawLiquidFillChart();
          }
        }, {
          key: "drawLiquidFillChart",
          value: function drawLiquidFillChart() {
            var realTimeUsersChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.realTimeUsers.nativeElement);
            var figureAmont = this.figure;
            var option = {
              series: [{
                type: 'liquidFill',
                data: [{
                  value: 0.6,
                  itemStyle: {
                    color: '#fec000'
                  }
                }],
                name: this.title,
                center: ['50%', '50%'],
                radius: '95px',
                // shape: 'container',
                outline: {
                  show: false
                },
                backgroundStyle: {
                  borderColor: 'transparent',
                  borderWidth: 0,
                  color: '#fff'
                },
                label: {
                  position: ['50%', '50%'],
                  formatter: function formatter() {
                    return figureAmont;
                  },
                  fontSize: 26,
                  color: '#212121',
                  insideColor: '#212121'
                }
              }],
              tooltip: {
                show: true
              }
            };
            realTimeUsersChart.setOption(option);
          }
        }]);

        return GxEchartsLiquidfillComponent;
      }();

      GxEchartsLiquidfillComponent.ɵfac = function GxEchartsLiquidfillComponent_Factory(t) {
        return new (t || GxEchartsLiquidfillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxEchartsLiquidfillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxEchartsLiquidfillComponent,
        selectors: [["gx-echarts-liquidfill"]],
        viewQuery: function GxEchartsLiquidfillComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.realTimeUsers = _t.first);
          }
        },
        inputs: {
          title: "title",
          figure: "figure",
          data: "data"
        },
        decls: 16,
        vars: 5,
        consts: [[1, "text-center"], [1, "dt-card__heading"], [1, "dt-card__title", "text-white"], [1, "dt-chart__body"], [1, "d-flex", "flex-column", "align-items-center", "mb-5"], [2, "width", "95px", "height", "95px"], ["realTimeUsers", ""], [1, "chart-fluid"], ["chartType", "bar", 3, "labels", "datasets", "colors", "options"], [1, "d-flex", "justify-content-between", "align-items-center", "text-white", "p-1"], [1, "d-inline-block", "mr-1"], [1, "d-inline-block"]],
        template: function GxEchartsLiquidfillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "card-body", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "gx-chart", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12:00AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1:00PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labels", ctx.data.labels)("datasets", ctx.data.datasets)("colors", ctx.data.colors)("options", ctx.data.options);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_4__["CardHeadingComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_6__["GxChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1lY2hhcnRzLWxpcXVpZGZpbGwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxEchartsLiquidfillComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-echarts-liquidfill',
            templateUrl: './gx-echarts-liquidfill.component.html',
            styleUrls: ['./gx-echarts-liquidfill.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          realTimeUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['realTimeUsers', {
              "static": true
            }]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          figure: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-progressbar */
      "3bQh");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _gaxon_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @gaxon/modules */
      "1u1q");
      /* harmony import */


      var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_data_db_dbdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/data-db/dbdata.service */
      "qJgT");
      /* harmony import */


      var _app_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @app/app.service */
      "F5nt");
      /* harmony import */


      var _app_layouts_auth_layout_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/layouts/auth-layout/auth.service */
      "sfC7");
      /* harmony import */


      var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @app/settings/settings.service */
      "b1TM");
      /* harmony import */


      var _gaxon_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @gaxon/components/navigation/navigation.service */
      "ocLh");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "bH2/");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-mask */
      "tmjD");
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      "koPj"); // import {AppMaterialModule} from './app-material/app-material.module';
      // AoT requires an exported function for factories


      function HttpLoaderFactory(httpClient) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](httpClient, 'assets/i18n/', '.json');
      } // const maskConfig: Partial<IConfig> = {
      //   validation: false,
      // };


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_app_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"], _gaxon_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_15__["NavigationService"], _app_layouts_auth_layout_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _app_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], // AppMaterialModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
          }
        }), ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastNoAnimationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgressModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(), angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"].forRoot({
          showMaskTyped: true
        }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_20__["HttpClientInMemoryWebApiModule"].forRoot(_app_data_db_dbdata_service__WEBPACK_IMPORTED_MODULE_11__["DbdataService"], {
          dataEncapsulation: false,
          passThruUnknownUrl: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastNoAnimationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgressModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_20__["HttpClientInMemoryWebApiModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], // AppMaterialModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
              }
            }), ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastNoAnimationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgressModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(), angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"].forRoot({
              showMaskTyped: true
            }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_20__["HttpClientInMemoryWebApiModule"].forRoot(_app_data_db_dbdata_service__WEBPACK_IMPORTED_MODULE_11__["DbdataService"], {
              dataEncapsulation: false,
              passThruUnknownUrl: true
            })],
            providers: [_app_settings_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"], _gaxon_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_15__["NavigationService"], _app_layouts_auth_layout_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _app_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZOp1":
    /*!*************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-invoices/gx-invoices.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GxInvoicesComponent */

    /***/
    function ZOp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxInvoicesComponent", function () {
        return GxInvoicesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GxInvoicesComponent_tr_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "gx-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "gx-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var invoice_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](invoice_r1.invoiceNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](invoice_r1.invoiceTo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](invoice_r1.invoiceDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, invoice_r1.amount));
        }
      }

      var GxInvoicesComponent = /*#__PURE__*/function () {
        function GxInvoicesComponent() {
          _classCallCheck(this, GxInvoicesComponent);
        }

        _createClass(GxInvoicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxInvoicesComponent;
      }();

      GxInvoicesComponent.ɵfac = function GxInvoicesComponent_Factory(t) {
        return new (t || GxInvoicesComponent)();
      };

      GxInvoicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxInvoicesComponent,
        selectors: [["gx-invoices"]],
        inputs: {
          invoices: "invoices"
        },
        decls: 39,
        vars: 3,
        consts: [[1, "bg-primary", "pb-7", "mb-0", "rounded-top"], [1, "d-flex", "align-items-center", "mb-3"], ["name", "invoice-new", "size", "2x", 1, "text-white", "mr-2", 3, "fw"], [1, "dt-card__title", "text-white"], [1, "f-16", "text-white", "mb-0"], [1, "align-self-start", "mt-n3", "mr-n2"], ["ngbDropdown", "", "placement", "bottom-right"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "no-arrow", "text-white"], ["name", "horizontal-more", "size", "3x", 3, "fw"], ["ngbDropdownMenu", ""], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "pb-3"], [1, "table-responsive"], [1, "table", "mb-0", "table-fluid"], ["scope", "col"], ["scope", "col", 1, "text-right"], [4, "ngFor", "ngForOf"], [1, "text-dark"], [1, "text-right"], [1, "dt-list", "dt-list-cm-0"], [1, "dt-list__item"], ["href", "javascript:void(0)", 1, "text-light-gray"], ["name", "editors"], ["name", "trash-filled"]],
        template: function GxInvoicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "25400 Invoice Generated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "card-tool", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "gx-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "card-body", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Invoice To");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GxInvoicesComponent_tr_38_Template, 18, 6, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoices);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__["CardHeadingComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_4__["CardToolComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_6__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1pbnZvaWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxInvoicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-invoices',
            templateUrl: './gx-invoices.component.html',
            styleUrls: ['./gx-invoices.component.scss']
          }]
        }], function () {
          return [];
        }, {
          invoices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZUXT":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/gx-card/card-body/card-body.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CardBodyComponent */

    /***/
    function ZUXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function () {
        return CardBodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardBodyComponent = /*#__PURE__*/function () {
        function CardBodyComponent(elRef) {
          _classCallCheck(this, CardBodyComponent);

          this.elRef = elRef;
          this.elRef.nativeElement.classList.add('dt-card__body');
        }

        _createClass(CardBodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardBodyComponent;
      }();

      CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) {
        return new (t || CardBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CardBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardBodyComponent,
        selectors: [["card-body"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CardBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'card-body',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "abyN":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/views/gx-grid/gx-grid-footer/gx-grid-footer.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxGridFooterComponent */

    /***/
    function abyN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxGridFooterComponent", function () {
        return GxGridFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxGridFooterComponent = function GxGridFooterComponent() {
        _classCallCheck(this, GxGridFooterComponent);
      };

      GxGridFooterComponent.ɵfac = function GxGridFooterComponent_Factory(t) {
        return new (t || GxGridFooterComponent)();
      };

      GxGridFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxGridFooterComponent,
        selectors: [["gx-grid-footer"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxGridFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxGridFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-grid-footer',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ah0e":
    /*!******************************************************!*\
      !*** ./src/app/data-db/data/apps/mail/filters-db.ts ***!
      \******************************************************/

    /*! exports provided: MailFiltersDb */

    /***/
    function ah0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailFiltersDb", function () {
        return MailFiltersDb;
      });

      var MailFiltersDb = function MailFiltersDb() {
        _classCallCheck(this, MailFiltersDb);
      };

      MailFiltersDb.list = [{
        'id': 0,
        'handle': 'starred',
        'title': 'Starred',
        'icon': 'star-o'
      }, {
        'id': 1,
        'handle': 'important',
        'title': 'Important',
        'icon': 'tag-o'
      }];
      /***/
    },

    /***/
    "b1TM":
    /*!**********************************************!*\
      !*** ./src/app/settings/settings.service.ts ***!
      \**********************************************/

    /*! exports provided: SettingsService */

    /***/
    function b1TM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");

      var SettingsService = /*#__PURE__*/function () {
        function SettingsService(router, platform) {
          _classCallCheck(this, SettingsService);

          // Set the default settings

          /*this.defaultSettings = {
            layout: {
              mode: 'full-width', // 'boxed', 'full-width', 'framed'
              theme: 'semidark',
              themeColor: '',
              navigationStyle: 'default', // 'default', 'folded', 'drawer'
              lockedNavStyle: '', // 'default', 'folded', 'drawer'
              navigationFixed: true, // true, false
              activeNavDrawer: false, // true, false
              isDrawerLocked: false, // true, false
              headerFixed: true, // true, false
            },
            customScrollbars: true
          };
                const _settings =  window.localStorage.getItem('settings');
          if (_settings) {
            this.defaultSettings = JSON.parse(_settings);
          }
                /!**
           * Disable Custom Scrollbars if Browser is Mobile
           *!/
          if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultSettings.customScrollbars = false;
          } else {
            this.defaultSettings.customScrollbars = true;
          }
                // Set the settings from the default settings
          this.settings = Object.assign({}, this.defaultSettings);
                // Reload the default settings on every navigation start
          router.events.subscribe(
            (event) => {
              if (event instanceof NavigationStart) {
                this.setSettings({layout: this.defaultSettings.layout});
              }
            }
          );*/
          this.router = router;
          this.platform = platform; // Create the behavior subject

          this.onSettingChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.settings);
        }
        /**
         * Update settings
         * @param settings
         */


        _createClass(SettingsService, [{
          key: "setSettings",
          value: function setSettings(settings) {
            /**
             * Disable Custom Scrollbars if Browser is Mobile
             */
            if (this.platform.ANDROID || this.platform.IOS) {
              settings.customScrollbars = false;
            } // Set the settings from the given object


            this.settings = Object.assign({}, this.settings, settings);
            window.localStorage.setItem(settings.layout + '-settings', JSON.stringify(this.settings)); // Trigger the event

            this.onSettingChanged.next(this.settings);
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]));
      };

      SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SettingsService,
        factory: SettingsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bFl3":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-activities/gx-activities.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GxActivitiesComponent */

    /***/
    function bFl3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxActivitiesComponent", function () {
        return GxActivitiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../widgets/gx-avatar/gx-avatar.component */
      "tjww");

      function GxActivitiesComponent_card_header_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-header", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card-title", ctx_r0.title);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          thumb: a0,
          name: ""
        };
      };

      function GxActivitiesComponent_div_2_div_3_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-avatar", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var media_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, media_r8));
        }
      }

      function GxActivitiesComponent_div_2_div_3_ul_5_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+5 More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GxActivitiesComponent_div_2_div_3_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxActivitiesComponent_div_2_div_3_ul_5_li_1_Template, 3, 3, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxActivitiesComponent_div_2_div_3_ul_5_li_2_Template, 3, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", activity_r4.mediaList.slice(0, 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", activity_r4.mediaList.length > 2);
        }
      }

      function GxActivitiesComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-avatar", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxActivitiesComponent_div_2_div_3_ul_5_Template, 3, 2, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", activity_r4)("charLength", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", activity_r4.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", activity_r4.mediaList.length > 0);
        }
      }

      function GxActivitiesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxActivitiesComponent_div_2_div_3_Template, 6, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r2.day);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2.activities);
        }
      }

      var GxActivitiesComponent = /*#__PURE__*/function () {
        function GxActivitiesComponent() {
          _classCallCheck(this, GxActivitiesComponent);

          this.bodyClasses = 'px-0';
        }

        _createClass(GxActivitiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxActivitiesComponent;
      }();

      GxActivitiesComponent.ɵfac = function GxActivitiesComponent_Factory(t) {
        return new (t || GxActivitiesComponent)();
      };

      GxActivitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxActivitiesComponent,
        selectors: [["gx-activities"]],
        inputs: {
          title: "title",
          activities: "activities",
          bodyClasses: "bodyClasses"
        },
        decls: 6,
        vars: 3,
        consts: [[3, "card-title", 4, "ngIf"], [3, "ngClass"], ["class", "dt-widget dt-widget-hover", 4, "ngFor", "ngForOf"], [1, "dt-widget-link"], ["href", "javascript:void(0)", 1, "text-uppercase", "font-weight-500"], [3, "card-title"], [1, "dt-widget", "dt-widget-hover"], [1, "dt-widget__heading"], ["class", "dt-widget__item", 4, "ngFor", "ngForOf"], [1, "dt-widget__item"], [1, "dt-widget__img"], [1, "size-35", "rounded", 3, "user", "charLength"], [1, "dt-widget__info"], ["href", "javascript:void(0)", 1, "dt-widget__title", 3, "innerHTML"], ["class", "dt-team-list mt-2", 4, "ngIf"], [1, "dt-team-list", "mt-2"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mb-1"], ["href", "javascript:void(0)"], [1, "size-35", "min-w-55", "rounded", 3, "user"], ["href", "javascript:void(0)", 1, "border", "py-2", "px-4", "rounded", "text-light-gray", "d-inline-block"]],
        template: function GxActivitiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxActivitiesComponent_card_header_0_Template, 1, 1, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxActivitiesComponent_div_2_Template, 4, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Load More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_4__["GxAvatarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxActivitiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-activities',
            templateUrl: './gx-activities.component.html',
            styleUrls: ['./gx-activities.component.scss']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activities: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "bL0+":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-flex-card/gx-flex-card.component.ts ***!
      \***************************************************************************/

    /*! exports provided: GxFlexCardComponent */

    /***/
    function bL0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxFlexCardComponent", function () {
        return GxFlexCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxFlexCardComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.badge);
        }
      }

      function GxFlexCardComponent_h4_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title);
        }
      }

      function GxFlexCardComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.subtitle);
        }
      }

      var GxFlexCardComponent = /*#__PURE__*/function () {
        function GxFlexCardComponent(eleRef) {
          _classCallCheck(this, GxFlexCardComponent);

          this.eleRef = eleRef;
          this.eleRef.nativeElement.classList.add('flex-row');
        }

        _createClass(GxFlexCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxFlexCardComponent;
      }();

      GxFlexCardComponent.ɵfac = function GxFlexCardComponent_Factory(t) {
        return new (t || GxFlexCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxFlexCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxFlexCardComponent,
        selectors: [["gx-flex-card"]],
        inputs: {
          data: "data",
          titlePos: "titlePos"
        },
        decls: 8,
        vars: 6,
        consts: [[1, "p-3"], ["class", "badge badge-success mb-1 p-1", 4, "ngIf"], ["class", "mb-1 text-truncate", 4, "ngIf"], ["class", "d-block f-12 text-truncate", 4, "ngIf"], [1, "pr-4", "d-flex", "align-items-center"], [1, "img-fluid", 3, "src", "alt"], [1, "d-inline-block", "ml-5", "text-body", 3, "routerLink"], ["name", "chevrolet-right", "size", "xl"], [1, "badge", "badge-success", "mb-1", "p-1"], [1, "mb-1", "text-truncate"], [1, "d-block", "f-12", "text-truncate"]],
        template: function GxFlexCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bs-card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxFlexCardComponent_span_1_Template, 2, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxFlexCardComponent_h4_2_Template, 2, 1, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxFlexCardComponent_span_3_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gx-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.badge);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.subtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.data.route);
          }
        },
        directives: [_bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxFlexCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-flex-card',
            templateUrl: './gx-flex-card.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titlePos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "bnsK":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/widgets/gx-loader/gx-loader.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GxLoaderComponent */

    /***/
    function bnsK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxLoaderComponent", function () {
        return GxLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GxLoaderComponent = /*#__PURE__*/function () {
        function GxLoaderComponent(eleRef) {
          _classCallCheck(this, GxLoaderComponent);

          this.eleRef = eleRef;
          this.loaderClasses = 'dt-loader'; // this.eleRef.nativeElement.classList.add();
        }

        _createClass(GxLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxLoaderComponent;
      }();

      GxLoaderComponent.ɵfac = function GxLoaderComponent_Factory(t) {
        return new (t || GxLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxLoaderComponent,
        selectors: [["gx-loader"]],
        hostVars: 2,
        hostBindings: function GxLoaderComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.loaderClasses);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["viewBox", "25 25 50 50", 1, "circular"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "2", "stroke-miterlimit", "10", 1, "path"]],
        template: function GxLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-loader',
            templateUrl: './gx-loader.component.html',
            styleUrls: ['./gx-loader.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          loaderClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }]
        });
      })();
      /***/

    },

    /***/
    "cOlg":
    /*!*************************************************************!*\
      !*** ./src/gaxon/components/navigation/navigation.model.ts ***!
      \*************************************************************/

    /*! no exports provided */

    /***/
    function cOlg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "cr+O":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/widgets/gx-slider/gx-slider.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GxSliderComponent */

    /***/
    function crO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxSliderComponent", function () {
        return GxSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxSliderComponent = function GxSliderComponent(elRef) {
        _classCallCheck(this, GxSliderComponent);

        this.elRef = elRef;
        this.elRef.nativeElement.classList.add('dt-slider');
      };

      GxSliderComponent.ɵfac = function GxSliderComponent_Factory(t) {
        return new (t || GxSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxSliderComponent,
        selectors: [["gx-slider"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%] {display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-slider',
            template: '<ng-content></ng-content>',
            styles: [':host {display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "csoJ":
    /*!***************************************!*\
      !*** ./src/gaxon/pipes/nl2br.pipe.ts ***!
      \***************************************/

    /*! exports provided: Nl2brPipe */

    /***/
    function csoJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Nl2brPipe", function () {
        return Nl2brPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var Nl2brPipe = /*#__PURE__*/function () {
        function Nl2brPipe(sanitizer) {
          _classCallCheck(this, Nl2brPipe);

          this.sanitizer = sanitizer;
        }

        _createClass(Nl2brPipe, [{
          key: "transform",
          value: function transform(value, sanitizeBeforehand) {
            if (typeof value !== 'string') {
              return value;
            }

            var result;
            var textParsed = value.replace(/(?:\r\n|\r|\n)/g, '<br />');

            if (!_angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"] || _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].major === '2') {
              result = this.sanitizer.bypassSecurityTrustHtml(textParsed);
            } else if (sanitizeBeforehand) {
              result = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, textParsed);
            } else {
              result = textParsed;
            }

            return result;
          }
        }]);

        return Nl2brPipe;
      }();

      Nl2brPipe.ɵfac = function Nl2brPipe_Factory(t) {
        return new (t || Nl2brPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      Nl2brPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "nl2br",
        type: Nl2brPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Nl2brPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'nl2br'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cx8X":
    /*!********************************************************!*\
      !*** ./src/gaxon/components/widgets/widgets.module.ts ***!
      \********************************************************/

    /*! exports provided: WidgetsModule */

    /***/
    function cx8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetsModule", function () {
        return WidgetsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-status-bar/gx-status-bar.component */
      "W9Kp");
      /* harmony import */


      var _gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gx-slider/gx-slider.component */
      "cr+O");
      /* harmony import */


      var _gx_slider_gx_slider_header_gx_slider_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gx-slider/gx-slider-header/gx-slider-header.component */
      "pi7a");
      /* harmony import */


      var _gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gx-avatar/gx-avatar.component */
      "tjww");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../pipes/pipes.module */
      "lHLr");
      /* harmony import */


      var _gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./gx-loader/gx-loader.component */
      "bnsK");

      var WidgetsModule = function WidgetsModule() {
        _classCallCheck(this, WidgetsModule);
      };

      WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WidgetsModule
      });
      WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WidgetsModule_Factory(t) {
          return new (t || WidgetsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsModule, {
          declarations: [_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_2__["GxStatusBarComponent"], _gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__["GxSliderComponent"], _gx_slider_gx_slider_header_gx_slider_header_component__WEBPACK_IMPORTED_MODULE_4__["GxSliderHeaderComponent"], _gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__["GxAvatarComponent"], _gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_7__["GxLoaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          exports: [_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_2__["GxStatusBarComponent"], _gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__["GxSliderComponent"], _gx_slider_gx_slider_header_gx_slider_header_component__WEBPACK_IMPORTED_MODULE_4__["GxSliderHeaderComponent"], _gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__["GxAvatarComponent"], _gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_7__["GxLoaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
            declarations: [_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_2__["GxStatusBarComponent"], _gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__["GxSliderComponent"], _gx_slider_gx_slider_header_gx_slider_header_component__WEBPACK_IMPORTED_MODULE_4__["GxSliderHeaderComponent"], _gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__["GxAvatarComponent"], _gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_7__["GxLoaderComponent"]],
            exports: [_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_2__["GxStatusBarComponent"], _gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__["GxSliderComponent"], _gx_slider_gx_slider_header_gx_slider_header_component__WEBPACK_IMPORTED_MODULE_4__["GxSliderHeaderComponent"], _gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__["GxAvatarComponent"], _gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_7__["GxLoaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dCDM":
    /*!**************************************************************************!*\
      !*** ./src/gaxon/components/common/page-header/page-header.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PageHeaderComponent */

    /***/
    function dCDM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
        return PageHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PageHeaderComponent_h1_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.pageTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var _c0 = ["*"];

      var PageHeaderComponent = function PageHeaderComponent(eleRef) {
        _classCallCheck(this, PageHeaderComponent);

        this.eleRef = eleRef;
        this.pageTitle = '';
        this.eleRef.nativeElement.classList.add('dt-page__header');
      };

      PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
        return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageHeaderComponent,
        selectors: [["app-page-header"]],
        inputs: {
          pageTitle: "pageTitle"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 1,
        consts: [["class", "dt-page__title", 3, "innerHTML", 4, "ngIf"], [1, "dt-page__title", 3, "innerHTML"]],
        template: function PageHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageHeaderComponent_h1_0_Template, 1, 1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageTitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-header',
            templateUrl: './page-header.component.html',
            styleUrls: ['./page-header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          pageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pageTitle']
          }]
        });
      })();
      /***/

    },

    /***/
    "da1h":
    /*!***********************************************************!*\
      !*** ./src/gaxon/components/bs-card/bs-card.component.ts ***!
      \***********************************************************/

    /*! exports provided: BsCardComponent */

    /***/
    function da1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsCardComponent", function () {
        return BsCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-header/card-header.component */
      "gKsy");
      /* harmony import */


      var _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-img-overlay/card-img-overlay.component */
      "6c5l");
      /* harmony import */


      var _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./card-footer/card-footer.component */
      "mBAb");
      /* harmony import */


      var _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./card-outer-body/card-outer-body.component */
      "vccG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BsCardComponent_ng_content_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "cardHeader"]);
        }
      }

      function BsCardComponent_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", ctx_r1.cardImageTop.classlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.cardImageTop.caption || "Card image cap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.cardImageTop.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BsCardComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", ctx_r2.cardImage.classlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.cardImage.caption || "Card image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.cardImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BsCardComponent_bs_card_body_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bs-card-body", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.body_classlist)("card-title", ctx_r3.cardTitle)("card-subtitle", ctx_r3.cardSubTitle)("card-text", ctx_r3.cardText);
        }
      }

      function BsCardComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", ctx_r4.cardImage.classlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r4.cardImage.caption || "Card image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.cardImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BsCardComponent_ng_content_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngIf", "cardOuterBody"]);
        }
      }

      function BsCardComponent_ng_content_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 4, ["*ngIf", "!cardImgOverlay && cardBody"]);
        }
      }

      function BsCardComponent_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", ctx_r7.cardImageBottom.classlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r7.cardImageBottom.caption || "Card image cap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.cardImageBottom.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BsCardComponent_ng_content_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 5, ["*ngIf", "cardFooter"]);
        }
      }

      var _c0 = [[["bs-card-img-overlay"]], [["bs-card-header"]], "*", [["bs-card-outer-body"]], [["bs-card-body"]], [["bs-card-footer"]]];
      var _c1 = ["bs-card-img-overlay", "bs-card-header", "*", "bs-card-outer-body", "bs-card-body", "bs-card-footer"];

      var BsCardComponent = /*#__PURE__*/function () {
        function BsCardComponent(elRef, renderer) {
          _classCallCheck(this, BsCardComponent);

          this.elRef = elRef;
          this.renderer = renderer;
          this.cardTitle = '';
          this.cardSubTitle = '';
          this.cardText = '';
          this.cardImg = '';
          this.cardImgTop = '';
          this.cardImgBottom = '';
          this.body_classlist = '';
          this.hasBody = true;
        }

        _createClass(BsCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cardImage = this.setCardImage(this.cardImg);
            this.cardImageTop = this.setCardImage(this.cardImgTop);
            this.cardImageBottom = this.setCardImage(this.cardImgBottom);
          }
        }, {
          key: "setCardImage",
          value: function setCardImage(cardImage) {
            var _cardImage;

            if (typeof cardImage === 'string') {
              _cardImage = {
                url: cardImage
              };
            } else {
              _cardImage = cardImage;
            }

            return _cardImage;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.addClass(this.elRef.nativeElement, 'card');
          }
        }, {
          key: "fullHeight",
          set: function set(isFullHeight) {
            if (isFullHeight !== false) {
              this.elRef.nativeElement.classList.add('dt-card__full-height');
            }
          }
        }]);

        return BsCardComponent;
      }();

      BsCardComponent.ɵfac = function BsCardComponent_Factory(t) {
        return new (t || BsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      BsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BsCardComponent,
        selectors: [["bs-card"]],
        contentQueries: function BsCardComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_2__["CardImgOverlayComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_5__["CardOuterBodyComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_3__["CardFooterComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardImgOverlay = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardBody = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardOuterBody = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardFooter = _t.first);
          }
        },
        inputs: {
          cardTitle: ["card-title", "cardTitle"],
          cardSubTitle: ["card-subtitle", "cardSubTitle"],
          cardText: ["card-text", "cardText"],
          cardImg: ["card-img", "cardImg"],
          cardImgTop: ["card-img-top", "cardImgTop"],
          cardImgBottom: ["card-img-bottom", "cardImgBottom"],
          body_classlist: ["body-class", "body_classlist"],
          hasBody: "hasBody",
          fullHeight: "fullHeight"
        },
        ngContentSelectors: _c1,
        decls: 10,
        vars: 9,
        consts: [[4, "ngIf"], ["class", "card-img-top", 3, "ngClass", "src", "alt", 4, "ngIf"], ["class", "card-img", 3, "ngClass", "src", "alt", 4, "ngIf"], [3, "ngClass", "card-title", "card-subtitle", "card-text", 4, "ngIf"], ["class", "card-img-center", 3, "ngClass", "src", "alt", 4, "ngIf"], ["class", "card-img-bottom", 3, "ngClass", "src", "alt", 4, "ngIf"], [1, "card-img-top", 3, "ngClass", "src", "alt"], [1, "card-img", 3, "ngClass", "src", "alt"], [3, "ngClass", "card-title", "card-subtitle", "card-text"], [1, "card-img-center", 3, "ngClass", "src", "alt"], [1, "card-img-bottom", 3, "ngClass", "src", "alt"]],
        template: function BsCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BsCardComponent_ng_content_0_Template, 1, 0, "ng-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BsCardComponent_img_1_Template, 1, 3, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BsCardComponent_img_2_Template, 1, 3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 0, ["[ngClass]", "body_classlist"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BsCardComponent_bs_card_body_4_Template, 2, 4, "bs-card-body", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BsCardComponent_img_5_Template, 1, 3, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BsCardComponent_ng_content_6_Template, 1, 0, "ng-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BsCardComponent_ng_content_7_Template, 1, 0, "ng-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BsCardComponent_img_8_Template, 1, 3, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BsCardComponent_ng_content_9_Template, 1, 0, "ng-content", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardImgTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardImg && ctx.cardImgOverlay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cardImgOverlay && ctx.hasBody);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardImg && !ctx.cardImgOverlay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardOuterBody);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cardImgOverlay && ctx.cardBody);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardImgBottom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFooter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-card',
            templateUrl: './bs-card.component.html',
            styleUrls: ['./bs-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          cardHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"]]
          }],
          cardImgOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_img_overlay_card_img_overlay_component__WEBPACK_IMPORTED_MODULE_2__["CardImgOverlayComponent"]]
          }],
          cardBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"]]
          }],
          cardOuterBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_outer_body_card_outer_body_component__WEBPACK_IMPORTED_MODULE_5__["CardOuterBodyComponent"]]
          }],
          cardFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_3__["CardFooterComponent"]]
          }],
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-title']
          }],
          cardSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-subtitle']
          }],
          cardText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-text']
          }],
          cardImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-img']
          }],
          cardImgTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-img-top']
          }],
          cardImgBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-img-bottom']
          }],
          body_classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['body-class']
          }],
          hasBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hasBody']
          }],
          fullHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "dnWx":
    /*!*******************************************************!*\
      !*** ./src/app/data-db/data/apps/mail/contacts-db.ts ***!
      \*******************************************************/

    /*! exports provided: MailContactsDb */

    /***/
    function dnWx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailContactsDb", function () {
        return MailContactsDb;
      });

      var MailContactsDb = function MailContactsDb() {
        _classCallCheck(this, MailContactsDb);
      };

      MailContactsDb.list = [{
        id: 1,
        first_name: 'Alex',
        last_name: 'Dolgove',
        email: 'alex-dolgove@example.com',
        thumb: 'https://via.placeholder.com/150X150',
        thumb_placeholder: 'bg-dark-blue text-white',
        bio: 'tried the suggest...',
        location: 'Palo Alto, CA, United States',
        connections: '20+ Mutual Connections'
      }, {
        id: 2,
        first_name: 'Steve',
        last_name: 'Smith',
        email: 'steve-smith@example.com',
        thumb: '',
        thumb_placeholder: 'bg-dark-blue text-white',
        bio: 'tried the suggest...',
        location: 'Palo Alto, CA, United States',
        connections: '8+ Mutual Connections'
      }, {
        id: 3,
        first_name: 'Stella',
        last_name: 'Johnson',
        email: 'stella-johnson@example.com',
        thumb: 'https://via.placeholder.com/150X150',
        thumb_placeholder: 'bg-orange text-white',
        bio: 'tried the suggest...',
        location: 'Palo Alto, CA, United States',
        connections: '13+ Mutual Connections'
      }, {
        id: 4,
        first_name: 'Domnic',
        last_name: 'Brown',
        email: 'domnic-brown@example.com',
        thumb: '',
        thumb_placeholder: 'bg-orange text-white',
        bio: 'tried the suggest...',
        location: 'Palo Alto, CA, United States',
        connections: '25+ Mutual Connections'
      }];
      /***/
    },

    /***/
    "eLME":
    /*!************************************************************!*\
      !*** ./src/gaxon/components/gx-toggle/gx-toggle.module.ts ***!
      \************************************************************/

    /*! exports provided: GxToggleModule */

    /***/
    function eLME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxToggleModule", function () {
        return GxToggleModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/gx-icon/gx-icon.module */
      "GGVI");
      /* harmony import */


      var _gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gx-checkbox/gx-checkbox.component */
      "5xlS");
      /* harmony import */


      var _gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gx-star/gx-star.component */
      "MhBl");

      var GxToggleModule = function GxToggleModule() {
        _classCallCheck(this, GxToggleModule);
      };

      GxToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GxToggleModule
      });
      GxToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GxToggleModule_Factory(t) {
          return new (t || GxToggleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_3__["GxIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GxToggleModule, {
          declarations: [_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["GxCheckboxComponent"], _gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_5__["GxStarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_3__["GxIconModule"]],
          exports: [_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["GxCheckboxComponent"], _gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_5__["GxStarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _components_gx_icon_gx_icon_module__WEBPACK_IMPORTED_MODULE_3__["GxIconModule"]],
            declarations: [_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["GxCheckboxComponent"], _gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_5__["GxStarComponent"]],
            exports: [_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["GxCheckboxComponent"], _gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_5__["GxStarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eWbo":
    /*!**************************************************!*\
      !*** ./src/app/services/base-service.service.ts ***!
      \**************************************************/

    /*! exports provided: BaseServiceService */

    /***/
    function eWbo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseServiceService", function () {
        return BaseServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BaseServiceService = /*#__PURE__*/function () {
        function BaseServiceService(httpService, router) {
          _classCallCheck(this, BaseServiceService);

          this.httpService = httpService;
          this.router = router;
          this.authToken = window.localStorage.getItem("happiTicketToken");

          if (window.location.hostname === 'localhost') {
            this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          } else {
            this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          } // this.getTenantJson();

        }

        _createClass(BaseServiceService, [{
          key: "checkToken",
          value: function checkToken(msg, status) {
            if (msg == "Invalid Token" && status == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'center',
                icon: 'error',
                title: "Invalid Token",
                showConfirmButton: false,
                timer: 2000
              }); //  window.localStorage.clear();

              this.router.navigate(['/signin']);
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "update",
          value: function update() {
            this.authToken = window.localStorage.getItem("happiTicketToken");
          }
        }]);

        return BaseServiceService;
      }();

      BaseServiceService.ɵfac = function BaseServiceService_Factory(t) {
        return new (t || BaseServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      BaseServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BaseServiceService,
        factory: BaseServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eZhc":
    /*!******************************************!*\
      !*** ./src/gaxon/pipes/time-ago.pipe.ts ***!
      \******************************************/

    /*! exports provided: TimeAgoPipe */

    /***/
    function eZhc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function () {
        return TimeAgoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TimeAgoPipe = /*#__PURE__*/function () {
        function TimeAgoPipe(changeDetectorRef, ngZone) {
          _classCallCheck(this, TimeAgoPipe);

          this.changeDetectorRef = changeDetectorRef;
          this.ngZone = ngZone;
        }

        _createClass(TimeAgoPipe, [{
          key: "transform",
          value: function transform(value) {
            var _this14 = this;

            this.removeTimer();
            var d = new Date(value);
            var now = new Date();
            var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
            var timeToUpdate = Number.isNaN(seconds) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
            this.timer = this.ngZone.runOutsideAngular(function () {
              if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                  _this14.ngZone.run(function () {
                    return _this14.changeDetectorRef.markForCheck();
                  });
                }, timeToUpdate);
              }

              return null;
            });
            var minutes = Math.round(Math.abs(seconds / 60));
            var hours = Math.round(Math.abs(minutes / 60));
            var days = Math.round(Math.abs(hours / 24));
            var months = Math.round(Math.abs(days / 30.416));
            var years = Math.round(Math.abs(days / 365));

            if (Number.isNaN(seconds)) {
              return '';
            } else if (seconds <= 45) {
              return 'a few seconds ago';
            } else if (seconds <= 90) {
              return 'a minute ago';
            } else if (minutes <= 45) {
              return minutes + ' minutes ago';
            } else if (minutes <= 90) {
              return 'an hour ago';
            } else if (hours <= 22) {
              return hours + ' hours ago';
            } else if (hours <= 36) {
              return 'a day ago';
            } else if (days <= 25) {
              return days + ' days ago';
            } else if (days <= 45) {
              return 'a month ago';
            } else if (days <= 345) {
              return months + ' months ago';
            } else if (days <= 545) {
              return 'a year ago';
            } else {
              // (days > 545)
              return years + ' years ago';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.removeTimer();
          }
        }, {
          key: "removeTimer",
          value: function removeTimer() {
            if (this.timer) {
              window.clearTimeout(this.timer);
              this.timer = null;
            }
          }
        }, {
          key: "getSecondsUntilUpdate",
          value: function getSecondsUntilUpdate(seconds) {
            var min = 60;
            var hr = min * 60;
            var day = hr * 24;

            if (seconds < min) {
              // less than 1 min, update every 2 secs
              return 2;
            } else if (seconds < hr) {
              // less than an hour, update every 30 secs
              return 30;
            } else if (seconds < day) {
              // less then a day, update every 5 mins
              return 300;
            } else {
              // update every hour
              return 3600;
            }
          }
        }]);

        return TimeAgoPipe;
      }();

      TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) {
        return new (t || TimeAgoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectPipeChangeDetectorRef"](), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      TimeAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "timeAgo",
        type: TimeAgoPipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'timeAgo',
            pure: false
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "enPh":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/views/gx-list/gx-list-header/gx-list-header.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxListHeaderComponent */

    /***/
    function enPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxListHeaderComponent", function () {
        return GxListHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxListHeaderComponent = function GxListHeaderComponent() {
        _classCallCheck(this, GxListHeaderComponent);
      };

      GxListHeaderComponent.ɵfac = function GxListHeaderComponent_Factory(t) {
        return new (t || GxListHeaderComponent)();
      };

      GxListHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxListHeaderComponent,
        selectors: [["gx-list-header"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxListHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxListHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-list-header',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "f/eI":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/bs-media-object/bs-media-object.component.ts ***!
      \***************************************************************************/

    /*! exports provided: BsMediaObjectComponent */

    /***/
    function fEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsMediaObjectComponent", function () {
        return BsMediaObjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BsMediaObjectComponent_img_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.mediaImage.alt || "Media Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.mediaImage.classlist)("src", ctx_r0.mediaImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BsMediaObjectComponent_h5_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h5", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.headingClass)("innerHTML", ctx_r1.heading, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function BsMediaObjectComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.mediaImage.alt || "Media Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.mediaImage.classlist)("src", ctx_r2.mediaImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = ["*", [["", 8, "media-actions"]]];
      var _c1 = ["*", ".media-actions"];

      var BsMediaObjectComponent = /*#__PURE__*/function () {
        function BsMediaObjectComponent(elRef, renderer) {
          _classCallCheck(this, BsMediaObjectComponent);

          this.elRef = elRef;
          this.renderer = renderer;
          this.headingClass = 'mt-0';
        }

        _createClass(BsMediaObjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.img) {
              this.mediaImage = this.setCardImage(this.img);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.addClass(this.elRef.nativeElement, 'media');
          }
        }, {
          key: "setCardImage",
          value: function setCardImage(mediaImg) {
            var _mediaImg;

            if (typeof mediaImg === 'string') {
              _mediaImg = {
                url: mediaImg,
                order: 'top'
              };
            } else {
              _mediaImg = mediaImg;
            } // set media order


            if (!_mediaImg.order) _mediaImg.order = 'top';

            if (!_mediaImg.classlist) {
              if (_mediaImg.order === 'top') _mediaImg.classlist = 'mr-3';else _mediaImg.classlist = 'ml-3';
            }

            return _mediaImg;
          }
        }]);

        return BsMediaObjectComponent;
      }();

      BsMediaObjectComponent.ɵfac = function BsMediaObjectComponent_Factory(t) {
        return new (t || BsMediaObjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      BsMediaObjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BsMediaObjectComponent,
        selectors: [["bs-media-object"]],
        inputs: {
          heading: "heading",
          headingClass: ["heading-class", "headingClass"],
          bodyClass: ["body-class", "bodyClass"],
          img: "img"
        },
        ngContentSelectors: _c1,
        decls: 6,
        vars: 4,
        consts: [[3, "ngClass", "src", "alt", 4, "ngIf"], [1, "media-body", 3, "ngClass"], [3, "ngClass", "innerHTML", 4, "ngIf"], [3, "ngClass", "src", "alt"], [3, "ngClass", "innerHTML"]],
        template: function BsMediaObjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BsMediaObjectComponent_img_0_Template, 1, 3, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BsMediaObjectComponent_h5_2_Template, 1, 2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BsMediaObjectComponent_img_4_Template, 1, 3, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaImage.url && ctx.mediaImage.order === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaImage.url && ctx.mediaImage.order !== "top");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsMediaObjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-media-object',
            templateUrl: './bs-media-object.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['heading']
          }],
          headingClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['heading-class']
          }],
          bodyClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['body-class']
          }],
          img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['img']
          }]
        });
      })();
      /***/

    },

    /***/
    "g2id":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-crypto-card/gx-crypto-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxCryptoCardComponent */

    /***/
    function g2id(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCryptoCardComponent", function () {
        return GxCryptoCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");

      function GxCryptoCardComponent_div_9_gx_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 12);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.data.trending.icon);
        }
      }

      function GxCryptoCardComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxCryptoCardComponent_div_9_gx_icon_3_Template, 1, 1, "gx-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.data.trending.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.trending.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.trending.icon);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "vertical-view": a0
        };
      };

      var _c1 = ["*"];

      var GxCryptoCardComponent = /*#__PURE__*/function () {
        function GxCryptoCardComponent() {
          _classCallCheck(this, GxCryptoCardComponent);

          this.isVertical = false;
          this.amountColor = 'text-dark';
        }

        _createClass(GxCryptoCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data.amount && this.data.amount.color) {
              this.amountColor = this.data.amount.color;
            }
          }
        }]);

        return GxCryptoCardComponent;
      }();

      GxCryptoCardComponent.ɵfac = function GxCryptoCardComponent_Factory(t) {
        return new (t || GxCryptoCardComponent)();
      };

      GxCryptoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxCryptoCardComponent,
        selectors: [["gx-crypto-card"]],
        inputs: {
          data: "data",
          isVertical: "isVertical"
        },
        ngContentSelectors: _c1,
        decls: 14,
        vars: 10,
        consts: [[1, "px-5", "pt-4", "mb-4", 3, "ngClass"], [1, "dt-card__title", "f-12", "font-weight-400"], ["size", "2x", 1, "mr-2", 3, "name", "ngClass"], [1, "align-middle", 3, "ngClass"], [1, "px-5", "pb-4"], [1, "row", "no-gutters"], [1, "col-6"], ["class", "d-flex align-items-center", 3, "ngClass", 4, "ngIf"], [1, "display-4", "font-weight-500", 3, "ngClass"], [1, "d-flex", "align-items-center", 3, "ngClass"], [1, "f-16", "mr-1"], [3, "name", 4, "ngIf"], [3, "name"]],
        template: function GxCryptoCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card-body", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GxCryptoCardComponent_div_9_Template, 4, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isVertical));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.data.crypto.icon)("ngClass", ctx.data.crypto.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.tagLine.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.tagLine.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.trending);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.amountColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.amount.value);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_3__["CardHeadingComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCryptoCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-crypto-card',
            templateUrl: './gx-crypto-card.component.html'
          }]
        }], function () {
          return [];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "gKsy":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/bs-card/card-header/card-header.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CardHeaderComponent */

    /***/
    function gKsy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function () {
        return CardHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardHeaderComponent = /*#__PURE__*/function () {
        function CardHeaderComponent(elRef, renderer) {
          _classCallCheck(this, CardHeaderComponent);

          this.elRef = elRef;
          this.renderer = renderer;
        }

        _createClass(CardHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.addClass(this.elRef.nativeElement, 'card-header');
          }
        }]);

        return CardHeaderComponent;
      }();

      CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) {
        return new (t || CardHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      CardHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardHeaderComponent,
        selectors: [["bs-card-header"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CardHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-card-header',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gwDG":
    /*!****************************************************!*\
      !*** ./src/gaxon/directives/gx-badge.directive.ts ***!
      \****************************************************/

    /*! exports provided: GxBadgeDirective */

    /***/
    function gwDG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxBadgeDirective", function () {
        return GxBadgeDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GxBadgeDirective = /*#__PURE__*/function () {
        function GxBadgeDirective(el) {
          _classCallCheck(this, GxBadgeDirective);

          this.el = el;
          this.el.nativeElement.classList.add('badge');
        }

        _createClass(GxBadgeDirective, [{
          key: "gxBadge",
          set: function set(type) {
            if (type) {
              this.el.nativeElement.classList.add('badge-' + type);
            }
          }
        }, {
          key: "pill",
          set: function set(isPill) {
            if (isPill !== false) {
              this.el.nativeElement.classList.add('badge-pill');
            }
          }
        }]);

        return GxBadgeDirective;
      }();

      GxBadgeDirective.ɵfac = function GxBadgeDirective_Factory(t) {
        return new (t || GxBadgeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxBadgeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GxBadgeDirective,
        selectors: [["", "gxBadge", ""]],
        inputs: {
          gxBadge: "gxBadge",
          pill: "pill"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxBadgeDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[gxBadge]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          gxBadge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "i4vF":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-top-vendors/gx-top-vendors.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxTopVendorsComponent */

    /***/
    function i4vF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxTopVendorsComponent", function () {
        return GxTopVendorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function GxTopVendorsComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GxTopVendorsComponent_li_3_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var category_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onChangeCategory(category_r2.slug);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r2.slug === ctx_r0.currentCat));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
        }
      }

      function GxTopVendorsComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Favorites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vendor_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", vendor_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", vendor_r5.siteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vendor_r5.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", vendor_r5.properties, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", vendor_r5.favorites, " ");
        }
      }

      var GxTopVendorsComponent = /*#__PURE__*/function () {
        function GxTopVendorsComponent() {
          _classCallCheck(this, GxTopVendorsComponent);

          this.categories = [{
            name: 'Premium',
            slug: 'premium'
          }, {
            name: 'Full',
            slug: 'full'
          }];
        }

        _createClass(GxTopVendorsComponent, [{
          key: "onChangeCategory",
          value: function onChangeCategory(category) {
            var _this15 = this;

            if (category) {
              this.currentCat = category;
              this.visibleItems = this._data.filter(function (item) {
                return item.category === _this15.currentCat;
              });
            } else {
              this.currentCat = null;
              this.visibleItems = this._data;
            }
          }
        }, {
          key: "vendors",
          set: function set(vendors) {
            this._data = vendors;
            this.onChangeCategory('premium');
          }
        }]);

        return GxTopVendorsComponent;
      }();

      GxTopVendorsComponent.ɵfac = function GxTopVendorsComponent_Factory(t) {
        return new (t || GxTopVendorsComponent)();
      };

      GxTopVendorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxTopVendorsComponent,
        selectors: [["gx-top-vendors"]],
        inputs: {
          vendors: "vendors"
        },
        decls: 9,
        vars: 2,
        consts: [["card-title", "Top Vendors", 1, "mb-5"], [1, "nav", "nav-sm", "nav-underline", "nav-underline-none"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "p-0"], [1, "tab-content"], [1, "tab-pane", "active"], [1, "dt-widget", "dt-widget-sm", "dt-widget-hover"], ["class", "dt-widget__item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", 3, "ngClass", "click"], [1, "dt-widget__item"], [1, "dt-widget__img"], ["alt", "Logo", 1, "img-fluid", "max-w-90", 3, "src"], [1, "dt-widget__info", "text-truncate"], [1, "dt-widget__title", "text-truncate"], [3, "href"], [1, "dt-list", "dt-list-bordered", "dt-widget__subtitle", "text-light-gray", "dt-list-cm-0", "flex-nowrap"], [1, "dt-list__item", "text-truncate"], [1, "text-dark"]],
        template: function GxTopVendorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxTopVendorsComponent_li_3_Template, 3, 4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-body", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxTopVendorsComponent_div_8_Template, 18, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleItems);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__["CardToolComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC10b3AtdmVuZG9ycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxTopVendorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-top-vendors',
            templateUrl: './gx-top-vendors.component.html',
            styleUrls: ['./gx-top-vendors.component.scss']
          }]
        }], function () {
          return [];
        }, {
          vendors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jLpu":
    /*!****************************************************!*\
      !*** ./src/app/data-db/data/apps/mail/mails-db.ts ***!
      \****************************************************/

    /*! exports provided: MailsDb */

    /***/
    function jLpu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsDb", function () {
        return MailsDb;
      });

      var MailsDb = function MailsDb() {
        _classCallCheck(this, MailsDb);
      };

      MailsDb.list = [{
        'id': '15453ba60d3baa5daaf',
        'from': {
          'name': 'Domnic Harris',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'domnicharris@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }, {
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Fusce a libero pellentesque',
        'message': 'Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus. Sed vehicula commodo porta. Etiam nec dictum mauris. Ut imperdiet maximus orci vitae ornare. Nullam et libero sit amet tellus ultricies rutrum et sit amet nisl. Pellentesque condimentum diam sed hendrerit facilisis. Suspendisse bibendum convallis quam, sit amet rutrum nisi pulvinar et. Nunc placerat, diam at scelerisque viverra, mi velit auctor nibh, at rhoncus erat ex vitae felis. Integer sed ante eget est rutrum ultrices ut non ipsum.',
        'time': '8 Aug',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [3, 2],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '15453a06c08fb021776',
        'from': {
          'name': 'Garry Sobars',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'danielleobrien@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Nullam id ex at augue pharetra vestibulum eget id mauris.',
        'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
        'time': '3 Dec',
        'read': true,
        'starred': true,
        'important': false,
        'hasAttachments': false,
        'labels': [1, 3],
        'selected': false,
        'folder': 'inbox',
        'conversation': [{
          'from': {
            'name': 'Garry Sobars',
            'avatar': 'https://via.placeholder.com/150X150',
            'email': 'danielleobrien@example.com'
          },
          'to': [{
            'name': 'me',
            'email': 'robert.johnson@example.com'
          }],
          'message': 'Hi Mate,\n' + 'Sorry for the delay in response!\n' + 'I’m afraid, I won’t be able to join you in the conference call. I have to take my daughter for her game.\n' + 'I hope that is ok.\n' + '\n' + '\n' + 'Cheers!\n' + 'Dom ',
          'time': '4 Dec',
          'starred': true
        }, {
          'from': {
            'name': 'Alex Dolgove',
            'avatar': 'https://via.placeholder.com/150X150',
            'email': 'alex-dolgove@example.com'
          },
          'to': [{
            'name': 'me',
            'email': 'robert.johnson@example.com'
          }],
          'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque ' + 'quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie ' + 'tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa ' + 'vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut ' + 'felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
          'time': '5 Dec',
          'starred': true
        }, {
          'from': {
            'name': 'Stella Brown',
            'avatar': '',
            'email': 'stellgrown@example.com'
          },
          'to': [{
            'name': 'me',
            'email': 'robert.johnson@example.com'
          }],
          'message': 'Hi Mate,\n' + 'Sorry for the delay in response!\n' + 'I’m afraid, I won’t be able to join you in the conference call. I have to take my daughter for her game.\n' + 'I hope that is ok.\n' + '\n' + '\n' + 'Cheers!\n' + 'Dom ',
          'time': '6 Dec',
          'starred': true
        }]
      }, {
        'id': '1541ca7af66da284177',
        'from': {
          'name': 'Stella Brown',
          'avatar': '',
          'email': 'stellgrown@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Vivamus venenatis tempus ipsum, id finibus libero aliquet convallis.',
        'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        'time': '3 Dec',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '154297167e781781745',
        'from': {
          'name': 'Steve Jonson',
          'avatar': '',
          'email': 'stevejonson@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Donec ut ante tristique, gravida justo vitae',
        'message': 'dictum at ligula vitae, posuere sagittis augue. Nam vitae eros quis felis consectetur egestas vitae vitae massa. Vestibulum tincidunt nisi neque, eu ullamcorper risus aliquet vel. Nunc ut lorem dapibus, interdum nulla vel, euismod elit. Fusce a mollis erat, non egestas dui. Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum iaculis. Morbi eget nibh ut nibh convallis fermentum vitae ac mauris. Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
        'time': '3 Dec',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '15427f4c1b7f3953234',
        'from': {
          'name': 'Ira Shorter',
          'avatar': '',
          'email': 'irashorter@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet',
        'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        'time': '2 Dec',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'spam',
        'conversation': []
      }, {
        'id': '15459251a6d6b397565',
        'from': {
          'name': 'Alex Dolgove',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'alexdolgove@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Ut tincidunt massa non elementum fermentum..',
        'message': 'Nullam vel ipsum eget odio viverra pellentesque. Nulla auctor eu felis eget vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quam nisi, pulvinar vitae nulla sed, blandit auctor lacus. Vestibulum et semper lorem. Suspendisse interdum est neque, ut tempus eros ultricies et. Proin ultricies elit ac est egestas pharetra. Praesent id mollis enim. Suspendisse quis arcu nec lacus molestie pharetra sit amet in mauris.',
        'time': '2 Dec',
        'read': false,
        'starred': false,
        'important': true,
        'hasAttachments': true,
        'attachments': [{
          'type': 'image',
          'fileName': 'bike',
          'preview': 'assets/images/gridList/bike.jpeg',
          'url': '',
          'size': '1.1Mb'
        }, {
          'type': 'image',
          'fileName': 'burgers',
          'preview': 'assets/images/gridList/burgers.jpeg',
          'url': '',
          'size': '380kb'
        }, {
          'type': 'image',
          'fileName': 'camera',
          'preview': 'assets/images/gridList/camera.jpeg',
          'url': 'assets/images/gridList/camera.jpeg',
          'size': '17Mb'
        }],
        'labels': [1],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '154588a0864d2881124',
        'from': {
          'name': 'Domnic Brown',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'domnicbrown@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum ',
        'message': 'Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..',
        'time': '1 Dec',
        'read': false,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '154537435d5b32bf11a',
        'from': {
          'name': 'Brian Lara',
          'avatar': '',
          'email': 'brianlara@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Quisque felis nisi, iaculis at lacinia et.',
        'message': 'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
        'time': '1 Dec',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '1544e43dcdae6ebf876',
        'from': {
          'name': 'Jeson Born',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'jesonborn@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'The standard Lorem Ipsum passage',
        'message': 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.\n But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
        'time': '30 Nov',
        'read': true,
        'starred': false,
        'important': true,
        'hasAttachments': false,
        'labels': [2],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '1543ee3a5b43e0f9f45',
        'from': {
          'name': 'Domnic White',
          'avatar': '',
          'email': 'domnicwhite@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Cras bibendum tortor tortor.',
        'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
        'time': '30 Nov',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '1543cc4515df3146112',
        'from': {
          'name': 'Jimmy Jo',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'jimmy.jo@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Contrary to popular belief. ',
        'message': 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\n This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
        'time': '29 Nov',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '154398a4770d7aaf9a2',
        'from': {
          'name': 'Kemroon White',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'kemroon-white@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Ut elementum rhoncus nisl.',
        'message': ['Suspendisse congue ipsum tincidunt justo dictum, sit amet finibus lectus egestas. Proin fermentum nec risus vitae accumsan. Vivamus non ligula eu urna mattis feugiat." ,<br/>," Pellentesque ex felis, commodo sed sem a, pharetra semper purus. Curabitur in quam rhoncus, blandit eros tempor, sodales metus. Pellentesque vel luctus ex. Quisque blandit nisl at tincidunt viverra. Phasellus elementum faucibus leo ac molestie.'],
        'time': '1 Dec',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '15438351f87dcd68567',
        'from': {
          'name': 'Jonny Brown',
          'avatar': '',
          'email': 'jonnnybrown@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Integer nec tempus eros.',
        'message': 'Vestibulum ornare orci hendrerit elit egestas, nec consectetur mi lobortis. Mauris porttitor dolor in neque aliquam, in sollicitudin enim consequat. Fusce pharetra venenatis fermentum.\n \n Maecenas semper nisi quis lectus dictum, vel fermentum purus malesuada. Nunc tincidunt sit amet nunc sit amet eleifend. Sed tellus risus, sagittis id magna in, commodo feugiat risus. Donec commodo pretium dolor non hendrerit. Nullam id leo et quam cursus vestibulum. Ut id aliquet diam, id varius libero. Ut et felis et est eleifend dignissim vitae condimentum ex. Ut a ullamcorper ante, ac laoreet erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        'time': '28 Nov',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [0],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '1542d75d929a603125',
        'from': {
          'name': 'Rahim Kadir',
          'avatar': '',
          'email': 'rahimkadir@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Praesent tortor odio, laoreet.',
        'message': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id eros sit amet lorem viverra tincidunt eget id dolor. Morbi egestas bibendum ipsum at efficitur. Suspendisse at mauris justo. Curabitur elementum ante et lacus blandit, quis faucibus lorem pellentesque. Duis et auctor quam, sed lacinia ante. Nam placerat lacus eu mollis lobortis. Sed placerat, ipsum eu vestibulum gravida, magna sapien feugiat felis, non varius leo mauris vitae ligula. Suspendisse tincidunt nec enim eu porttitor.',
        'time': '27 Nov',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'inbox',
        'conversation': []
      }, {
        'id': '154204e45a59b168453',
        'from': {
          'name': 'Kadir',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'kadirm@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Many desktop publishing packages',
        'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a.  \n \n Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. \n \n In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        'time': '26 Nov',
        'read': true,
        'starred': true,
        'important': true,
        'hasAttachments': false,
        'labels': [0],
        'selected': false,
        'folder': 'spam',
        'conversation': []
      }, {
        'id': '1541dd1e05dfc439216',
        'from': {
          'name': 'Stella Johnson',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'stella-johnson@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Section 1.10.32 of "de',
        'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. \n \n Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
        'time': '25 Nov',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'spam',
        'conversation': []
      }, {
        'id': '1541dd1e05dfc439217',
        'from': {
          'name': 'Steve Smith',
          'avatar': 'https://via.placeholder.com/150X150',
          'email': 'stevesmith@example.com'
        },
        'to': [{
          'name': 'me',
          'email': 'robert.johnson@example.com'
        }],
        'subject': 'Integer nec tempus eros.',
        'message': 'Curabitur id rutrum ex. Morbi tempus libero eget mauris ultricies venenatis. Curabitur eget pellentesque lorem. Morbi in tempor sem, vel posuere odio. Vivamus sit amet efficitur tortor. Fusce in tortor non lorem blandit eleifend quis eu risus. Donec lobortis ex justo, sed suscipit dolor posuere eget.',
        'time': '24 Nov',
        'read': true,
        'starred': false,
        'important': false,
        'hasAttachments': false,
        'labels': [],
        'selected': false,
        'folder': 'spam',
        'conversation': []
      }];
      /***/
    },

    /***/
    "jSQo":
    /*!***************************************************!*\
      !*** ./src/gaxon/directives/bs-card.directive.ts ***!
      \***************************************************/

    /*! exports provided: BsCardDirective */

    /***/
    function jSQo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsCardDirective", function () {
        return BsCardDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BsCardDirective = /*#__PURE__*/function () {
        function BsCardDirective(el) {
          _classCallCheck(this, BsCardDirective);

          this.el = el;
          this.el.nativeElement.classList.add('card');
        }

        _createClass(BsCardDirective, [{
          key: "fullHeight",
          set: function set(isFullHeight) {
            if (isFullHeight !== false) {
              this.el.nativeElement.classList.add('dt-card__full-height');
            }
          }
        }]);

        return BsCardDirective;
      }();

      BsCardDirective.ɵfac = function BsCardDirective_Factory(t) {
        return new (t || BsCardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      BsCardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BsCardDirective,
        selectors: [["", "bsCard", ""]],
        inputs: {
          fullHeight: "fullHeight"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsCardDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[bsCard]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          fullHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jtJr":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-analytic-card/gx-analytic-card.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GxAnalyticCardComponent */

    /***/
    function jtJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxAnalyticCardComponent", function () {
        return GxAnalyticCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxAnalyticCardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon.name)("ngClass", ctx_r0.icon.colorClasses);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "text-danger": a0,
          "text-success": a1
        };
      };

      var GxAnalyticCardComponent = /*#__PURE__*/function () {
        function GxAnalyticCardComponent() {
          _classCallCheck(this, GxAnalyticCardComponent);

          this.growthIcon = 'profit';
        }

        _createClass(GxAnalyticCardComponent, [{
          key: "positiveGrowth",
          set: function set(value) {
            if (!value) {
              this.growthIcon = 'loss';
            }
          },
          get: function get() {
            return this.growthIcon !== 'loss';
          }
        }]);

        return GxAnalyticCardComponent;
      }();

      GxAnalyticCardComponent.ɵfac = function GxAnalyticCardComponent_Factory(t) {
        return new (t || GxAnalyticCardComponent)();
      };

      GxAnalyticCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxAnalyticCardComponent,
        selectors: [["gx-analytic-card"]],
        inputs: {
          title: "title",
          description: "description",
          icon: "icon",
          number: "number",
          percent: "percent",
          positiveGrowth: "positiveGrowth"
        },
        decls: 13,
        vars: 12,
        consts: [[1, "d-flex", "flex-sm-column"], ["class", "mb-sm-7 mr-7 mr-sm-0", 4, "ngIf"], [1, "flex-1"], [1, "d-flex", "align-items-center", "mb-2"], [1, "h2", "mb-0", "font-weight-500", "mr-2"], [1, "d-inline-flex", 3, "ngClass"], [3, "name", "fw"], [1, "h5", "mb-2"], [1, "card-text", "text-light-gray", "f-12"], [1, "mb-sm-7", "mr-7", "mr-sm-0"], [1, "dt-icon-bg", 3, "name", "ngClass"]],
        template: function GxAnalyticCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxAnalyticCardComponent_div_1_Template, 2, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gx-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.number);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !ctx.positiveGrowth, ctx.positiveGrowth));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.growthIcon)("fw", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.positiveGrowth ? "+" : "-", "", ctx.percent, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1hbmFseXRpYy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxAnalyticCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-analytic-card',
            templateUrl: './gx-analytic-card.component.html',
            styleUrls: ['./gx-analytic-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          positiveGrowth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "kSyU":
    /*!*****************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-referral-traffic/gx-referral-traffic.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: GxReferralTrafficComponent */

    /***/
    function kSyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxReferralTrafficComponent", function () {
        return GxReferralTrafficComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../gx-chart/gx-chart.component */
      "ztgp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../widgets/gx-status-bar/gx-status-bar.component */
      "W9Kp");

      function GxReferralTrafficComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-status-bar", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullWidth", true)("fillVal", item_r1.value)("maxVal", item_r1.maxValue)("barColor", item_r1.color);
        }
      }

      var GxReferralTrafficComponent = /*#__PURE__*/function () {
        function GxReferralTrafficComponent() {
          _classCallCheck(this, GxReferralTrafficComponent);
        }

        _createClass(GxReferralTrafficComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxReferralTrafficComponent;
      }();

      GxReferralTrafficComponent.ɵfac = function GxReferralTrafficComponent_Factory(t) {
        return new (t || GxReferralTrafficComponent)();
      };

      GxReferralTrafficComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxReferralTrafficComponent,
        selectors: [["gx-referral-traffic"]],
        inputs: {
          progressRecords: "progressRecords",
          chart: "chart"
        },
        decls: 25,
        vars: 6,
        consts: [[1, "dt-card__title", "mb-1"], [1, "mb-0", "text-light-gray", "f-12"], ["ngbDropdown", "", "placement", "bottom-right", 1, "d-inline-block"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "d-inline-block", "f-12", "py-1", "px-2", "py-1", "border", "rounded"], ["ngbDropdownMenu", ""], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "row", "no-gutters"], [1, "col-sm-6", "order-sm-2"], [1, "pt-0", "d-flex", "justify-content-center", "align-items-center"], [3, "chartType", "options", "labels", "colors", "datasets"], [1, "col-sm-6", "order-sm-1"], [1, "pt-0"], [1, "dt-indicator"], ["class", "dt-indicator-item", 4, "ngFor", "ngForOf"], [1, "dt-indicator-item"], [1, "dt-indicator-title"], ["showPercent", "", "barPosition", "start", "textColor", "", 3, "fullWidth", "fillVal", "maxVal", "barColor"]],
        template: function GxReferralTrafficComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Referral Traffic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Updated 30 min ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card-tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unread ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unread");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Spam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "card-body", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "gx-chart", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "card-body", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GxReferralTrafficComponent_li_24_Template, 4, 5, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chart.chartType)("options", ctx.chart.options)("labels", ctx.chart.labels)("colors", ctx.chart.colors)("datasets", ctx.chart.datasets);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.progressRecords);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__["CardHeadingComponent"], _gx_card_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_3__["CardToolComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _gx_chart_gx_chart_component__WEBPACK_IMPORTED_MODULE_6__["GxChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_8__["GxStatusBarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1yZWZlcnJhbC10cmFmZmljLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxReferralTrafficComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-referral-traffic',
            templateUrl: './gx-referral-traffic.component.html',
            styleUrls: ['./gx-referral-traffic.component.scss']
          }]
        }], function () {
          return [];
        }, {
          progressRecords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "lHLr":
    /*!*****************************************!*\
      !*** ./src/gaxon/pipes/pipes.module.ts ***!
      \*****************************************/

    /*! exports provided: PipesModule */

    /***/
    function lHLr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _getById_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getById.pipe */
      "CbCa");
      /* harmony import */


      var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-ago.pipe */
      "eZhc");
      /* harmony import */


      var _one_letter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./one-letter.pipe */
      "SkAW");
      /* harmony import */


      var _html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./html-to-plain-text.pipe */
      "1ica");
      /* harmony import */


      var _nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nl2br.pipe */
      "csoJ");
      /* harmony import */


      var _filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filter.pipe */
      "uSpw");
      /* harmony import */


      var _gaxon_pipes_short_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @gaxon/pipes/short-title.pipe */
      "zOfF");
      /* harmony import */


      var _gaxon_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @gaxon/pipes/date-ago.pipe */
      "OhSz");
      /* harmony import */


      var _gaxon_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @gaxon/pipes/thousand-suffixes.pipe */
      "SmQ2");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PipesModule
      });
      PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PipesModule_Factory(t) {
          return new (t || PipesModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
          declarations: [_getById_pipe__WEBPACK_IMPORTED_MODULE_1__["GetByIdPipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeAgoPipe"], _one_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["OneLetterPipe"], _html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__["HtmlToPlainTextPipe"], _nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__["Nl2brPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"], _gaxon_pipes_short_title_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortTitlePipe"], _gaxon_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"], _gaxon_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__["ThousandSuffixesPipe"]],
          exports: [_getById_pipe__WEBPACK_IMPORTED_MODULE_1__["GetByIdPipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeAgoPipe"], _one_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["OneLetterPipe"], _html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__["HtmlToPlainTextPipe"], _nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__["Nl2brPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"], _gaxon_pipes_short_title_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortTitlePipe"], _gaxon_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"], _gaxon_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__["ThousandSuffixesPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [],
            declarations: [_getById_pipe__WEBPACK_IMPORTED_MODULE_1__["GetByIdPipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeAgoPipe"], _one_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["OneLetterPipe"], _html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__["HtmlToPlainTextPipe"], _nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__["Nl2brPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"], _gaxon_pipes_short_title_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortTitlePipe"], _gaxon_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"], _gaxon_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__["ThousandSuffixesPipe"]],
            exports: [_getById_pipe__WEBPACK_IMPORTED_MODULE_1__["GetByIdPipe"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeAgoPipe"], _one_letter_pipe__WEBPACK_IMPORTED_MODULE_3__["OneLetterPipe"], _html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__["HtmlToPlainTextPipe"], _nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__["Nl2brPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"], _gaxon_pipes_short_title_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortTitlePipe"], _gaxon_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"], _gaxon_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__["ThousandSuffixesPipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lgqE":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/views/gx-grid/gx-grid-header/gx-grid-header.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxGridHeaderComponent */

    /***/
    function lgqE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxGridHeaderComponent", function () {
        return GxGridHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxGridHeaderComponent = function GxGridHeaderComponent() {
        _classCallCheck(this, GxGridHeaderComponent);
      };

      GxGridHeaderComponent.ɵfac = function GxGridHeaderComponent_Factory(t) {
        return new (t || GxGridHeaderComponent)();
      };

      GxGridHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxGridHeaderComponent,
        selectors: [["gx-grid-header"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxGridHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxGridHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-grid-header',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "lztN":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-client-card/gx-client-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxClientCardComponent */

    /***/
    function lztN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxClientCardComponent", function () {
        return GxClientCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      var GxClientCardComponent = /*#__PURE__*/function () {
        function GxClientCardComponent(eleRef, sanitizer) {
          var _this16 = this;

          _classCallCheck(this, GxClientCardComponent);

          this.eleRef = eleRef;
          this.sanitizer = sanitizer;
          this.hostClasses = ['card', 'user-bg-card', 'mb-1', 'mb-sm-0'];
          this.hostClasses.forEach(function (classname) {
            _this16.eleRef.nativeElement.classList.add(classname);
          });
        }

        _createClass(GxClientCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.eleRef.nativeElement.classList.add('bg-primary');

            if (this.client.thumb) {
              this.eleRef.nativeElement.style.backgroundImage = 'url(' + this.client.thumb + ')';
            } else {
              this.eleRef.nativeElement.classList.add('bg-image');
            }
          }
        }]);

        return GxClientCardComponent;
      }();

      GxClientCardComponent.ɵfac = function GxClientCardComponent_Factory(t) {
        return new (t || GxClientCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      GxClientCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxClientCardComponent,
        selectors: [["gx-client-card"]],
        inputs: {
          client: "client"
        },
        decls: 10,
        vars: 3,
        consts: [[1, "user-bg-card__info"], [1, "dt-avatar-name", "mb-1"], [1, "d-flex", "align-items-center", "f-12"], [1, "d-inline-block", "mr-2", "pr-2", "border-right"], ["name", "star-fill", 1, "mr-2", "text-yellow"], [1, "d-inline-block"]],
        template: function GxClientCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gx-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.rating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.deals);
          }
        },
        directives: [_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1jbGllbnQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxClientCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-client-card',
            templateUrl: './gx-client-card.component.html',
            styleUrls: ['./gx-client-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, {
          client: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "mBAb":
    /*!***************************************************************************!*\
      !*** ./src/gaxon/components/bs-card/card-footer/card-footer.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CardFooterComponent */

    /***/
    function mBAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFooterComponent", function () {
        return CardFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardFooterComponent = /*#__PURE__*/function () {
        function CardFooterComponent(elRef, renderer) {
          _classCallCheck(this, CardFooterComponent);

          this.elRef = elRef;
          this.renderer = renderer;
        }

        _createClass(CardFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.addClass(this.elRef.nativeElement, 'card-footer');
          }
        }]);

        return CardFooterComponent;
      }();

      CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) {
        return new (t || CardFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      CardFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardFooterComponent,
        selectors: [["bs-card-footer"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CardFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-card-footer',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ocLh":
    /*!***************************************************************!*\
      !*** ./src/gaxon/components/navigation/navigation.service.ts ***!
      \***************************************************************/

    /*! exports provided: NavigationService */

    /***/
    function ocLh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService() {
          _classCallCheck(this, NavigationService);

          this.onNavCollapseToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onNavCollapseToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onNavigationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.onHeaderMenuChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        }
        /**
         * Set the navigations items
         *
         * @param navModel
         */


        _createClass(NavigationService, [{
          key: "setNavigationModel",
          value: function setNavigationModel(navModel) {
            this.navigationModel = navModel;
            this.onNavigationChanged.next(this.navigationModel.navigation);
          }
          /**
           * Set the header menu items
           *
           * @param navModel
           */

        }, {
          key: "setHeaderMenu",
          value: function setHeaderMenu(navModel) {
            this.headerMenu = navModel;
            this.onHeaderMenuChanged.next(this.headerMenu.navigation);
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)();
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ogIi":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/gx-card/card-heading/card-heading.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CardHeadingComponent */

    /***/
    function ogIi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardHeadingComponent", function () {
        return CardHeadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardHeadingComponent = /*#__PURE__*/function () {
        function CardHeadingComponent(elRef) {
          _classCallCheck(this, CardHeadingComponent);

          this.elRef = elRef;
          this.elRef.nativeElement.classList.add('dt-card__heading');
        }

        _createClass(CardHeadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardHeadingComponent;
      }();

      CardHeadingComponent.ɵfac = function CardHeadingComponent_Factory(t) {
        return new (t || CardHeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CardHeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardHeadingComponent,
        selectors: [["card-heading"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CardHeadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHeadingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'card-heading',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pi7a":
    /*!***********************************************************************************************!*\
      !*** ./src/gaxon/components/widgets/gx-slider/gx-slider-header/gx-slider-header.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: GxSliderHeaderComponent */

    /***/
    function pi7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxSliderHeaderComponent", function () {
        return GxSliderHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxSliderHeaderComponent = function GxSliderHeaderComponent(elRef) {
        _classCallCheck(this, GxSliderHeaderComponent);

        this.elRef = elRef;
        this.elRef.nativeElement.classList.add('dt-slider__header');
      };

      GxSliderHeaderComponent.ɵfac = function GxSliderHeaderComponent_Factory(t) {
        return new (t || GxSliderHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxSliderHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxSliderHeaderComponent,
        selectors: [["gx-slider-header"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxSliderHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxSliderHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-slider-header',
            template: "<ng-content></ng-content>",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qJgT":
    /*!*******************************************!*\
      !*** ./src/app/data-db/dbdata.service.ts ***!
      \*******************************************/

    /*! exports provided: DbdataService */

    /***/
    function qJgT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DbdataService", function () {
        return DbdataService;
      });
      /* harmony import */


      var _data_apps_mail_mails_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data/apps/mail/mails-db */
      "jLpu");
      /* harmony import */


      var _data_apps_mail_labels_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data/apps/mail/labels-db */
      "uiYD");
      /* harmony import */


      var _data_apps_mail_filters_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data/apps/mail/filters-db */
      "ah0e");
      /* harmony import */


      var _data_apps_mail_folders_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data/apps/mail/folders-db */
      "2aXH");
      /* harmony import */


      var _data_apps_mail_contacts_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./data/apps/mail/contacts-db */
      "dnWx");

      var DbdataService = /*#__PURE__*/function () {
        function DbdataService() {
          _classCallCheck(this, DbdataService);
        }

        _createClass(DbdataService, [{
          key: "createDb",
          value: function createDb() {
            return {
              //  // Mail
              'mail-list': _data_apps_mail_mails_db__WEBPACK_IMPORTED_MODULE_0__["MailsDb"].list,
              'mail-folders': _data_apps_mail_folders_db__WEBPACK_IMPORTED_MODULE_3__["MailFoldersDb"].list,
              'mail-filters': _data_apps_mail_filters_db__WEBPACK_IMPORTED_MODULE_2__["MailFiltersDb"].list,
              'mail-labels': _data_apps_mail_labels_db__WEBPACK_IMPORTED_MODULE_1__["MailLabelsDb"].list,
              'mail-contacts': _data_apps_mail_contacts_db__WEBPACK_IMPORTED_MODULE_4__["MailContactsDb"].list
            };
          }
        }]);

        return DbdataService;
      }();
      /***/

    },

    /***/
    "qlxq":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-slider-card/gx-slider-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxSliderCardComponent */

    /***/
    function qlxq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxSliderCardComponent", function () {
        return GxSliderCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxSliderCardComponent_ngb_carousel_7_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create your account \u201CFREE\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mother nature want you to become a part of it and feel the love. There could be more which you can take as an initiative and collaborate in making this world a better world. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var image_r2 = ctx_r5.$implicit;
          var i_r3 = ctx_r5.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("data-thumb", "/", image_r2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Step-", i_r3 + 1, "");
        }
      }

      function GxSliderCardComponent_ngb_carousel_7_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxSliderCardComponent_ngb_carousel_7_1_ng_template_0_Template, 12, 2, "ng-template", 10);
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "ngb-slider-", i_r3, "");
        }
      }

      function GxSliderCardComponent_ngb_carousel_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slide", function GxSliderCardComponent_ngb_carousel_7_Template_ngb_carousel_slide_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onSlideChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxSliderCardComponent_ngb_carousel_7_1_Template, 1, 1, undefined, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.imageUrls);
        }
      }

      var GxSliderCardComponent = /*#__PURE__*/function () {
        function GxSliderCardComponent(elementRef) {
          _classCallCheck(this, GxSliderCardComponent);

          this.elementRef = elementRef;
        }

        _createClass(GxSliderCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.activeSlideImage = this.data.imageUrls[0];
          }
        }, {
          key: "onSlideChange",
          value: function onSlideChange(event) {
            var currentSliderId = event.current.replace('ngb-slider-', '');
            this.activeSlideImage = this.data.imageUrls[currentSliderId];
          }
        }]);

        return GxSliderCardComponent;
      }();

      GxSliderCardComponent.ɵfac = function GxSliderCardComponent_Factory(t) {
        return new (t || GxSliderCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxSliderCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxSliderCardComponent,
        selectors: [["gx-slider-card"]],
        inputs: {
          data: "data"
        },
        decls: 8,
        vars: 2,
        consts: [[1, "p-0"], [1, "row", "no-gutters", "h-100"], [1, "col-sm-5", "order-sm-2"], [1, "card-image", "carousel-thumb", "object-none", "bg-primary", "text-center", "rounded-right"], ["alt", "Plant", 1, "img-fluid", 3, "src"], [1, "col-sm-7", "order-sm-1"], [1, "owl-carousel", "owl-theme"], [3, "showNavigationArrows", "showNavigationIndicators", "slide", 4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators", "slide"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", 3, "id"], [1, "card-body"], [1, "d-block", "f-16", "text-light-gray", "mb-2"], [1, "card-title", "font-weight-normal"], [1, "card-text"], [1, "mb-3"], ["href", "#", 1, "d-flex", "align-items-center"], ["name", "play-circle-o", 1, "mr-2"], [1, "text-dark", "f-12"]],
        template: function GxSliderCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GxSliderCardComponent_ngb_carousel_7_Template, 2, 3, "ngb-carousel", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.activeSlideImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.imageUrls);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxSliderCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-slider-card',
            templateUrl: './gx-slider-card.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "raWP":
    /*!*********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-counter-card/gx-counter-card.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GxCounterCardComponent */

    /***/
    function raWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCounterCardComponent", function () {
        return GxCounterCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      var _c0 = function _c0(a0, a1) {
        return {
          "p-xl-8 py-sm-8": a0,
          "text-center": a1
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "flex-column align-items-center": a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return [a0, a1];
      };

      var GxCounterCardComponent = /*#__PURE__*/function () {
        function GxCounterCardComponent() {
          _classCallCheck(this, GxCounterCardComponent);

          this.isVertical = false;
          this.iconSize = '6x';
          this.classNames = 'mr-6 align-self-center';
        }

        _createClass(GxCounterCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.isVertical) {
              this.iconSize = '7x';
              this.classNames = 'mb-6';
            }
          }
        }]);

        return GxCounterCardComponent;
      }();

      GxCounterCardComponent.ɵfac = function GxCounterCardComponent_Factory(t) {
        return new (t || GxCounterCardComponent)();
      };

      GxCounterCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxCounterCardComponent,
        selectors: [["gx-counter-card"]],
        inputs: {
          data: "data",
          isVertical: "isVertical"
        },
        decls: 9,
        vars: 22,
        consts: [[1, "p-xl-8", "py-sm-8", "py-6", "px-4", 3, "ngClass"], [1, "media", 3, "ngClass"], [3, "name", "size", "ngClass"], [1, "media-body"], [1, "display-3", "font-weight-600", "mb-1", "init-counter", 3, "ngClass"], [1, "d-block", 3, "ngClass"]],
        template: function GxCounterCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, !ctx.isVertical, ctx.isVertical));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.isVertical));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.data.icon.name)("size", ctx.iconSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c2, ctx.data.icon.color, ctx.classNames));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.counter.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 9, ctx.data.counter.number, ctx.data.counter.currency, ctx.data.counter.symbol, "1.0-0"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.tagLine.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.tagLine.text);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtY291bnRlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYztBQUFsQjs7QUFGQTtFQU1JLGFBQWE7QUFBakIiLCJmaWxlIjoiZ3gtY291bnRlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgJi5kdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5kdC1jYXJkX19mdWxsLWhlaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCounterCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-counter-card',
            templateUrl: './gx-counter-card.component.html',
            styleUrls: ['./gx-counter-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "rtug":
    /*!*******************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-social-card/gx-social-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GxSocialCardComponent */

    /***/
    function rtug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxSocialCardComponent", function () {
        return GxSocialCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxSocialCardComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.circleColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.logoIcon)("fw", true)("ngClass", ctx_r0.iconColor);
        }
      }

      function GxSocialCardComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Likes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.likes, " ");
        }
      }

      function GxSocialCardComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.friends, " ");
        }
      }

      function GxSocialCardComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.followers, " ");
        }
      }

      var GxSocialCardComponent = /*#__PURE__*/function () {
        function GxSocialCardComponent(viewRef) {
          var _this17 = this;

          _classCallCheck(this, GxSocialCardComponent);

          this.viewRef = viewRef;
          this.cardClasses = 'dt-card dt-social-card animate-slide border border-w-2';
          this.cardClasses.split(' ').forEach(function (className) {
            _this17.viewRef.nativeElement.classList.add(className);
          });
        }

        _createClass(GxSocialCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.color) {
              this.iconColor = 'text-' + this.color;
              this.circleColor = 'bg-' + this.color;
              this.viewRef.nativeElement.classList.add('border-' + this.color);
            }
          }
        }]);

        return GxSocialCardComponent;
      }();

      GxSocialCardComponent.ɵfac = function GxSocialCardComponent_Factory(t) {
        return new (t || GxSocialCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxSocialCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxSocialCardComponent,
        selectors: [["gx-social-card"]],
        inputs: {
          title: "title",
          color: "color",
          likes: "likes",
          friends: "friends",
          followers: "followers",
          logoIcon: "logoIcon"
        },
        decls: 8,
        vars: 5,
        consts: [["class", "dt-social__circle", 3, "ngClass", 4, "ngIf"], [1, "font-weight-500", "mb-1"], [1, "dt-list", "dt-list-bordered", "dt-list-cm-0", "flex-nowrap"], ["class", "dt-list__item text-truncate", 4, "ngIf"], [1, "dt-social__circle", 3, "ngClass"], ["size", "3x", 3, "name", "fw", "ngClass"], [1, "dt-list__item", "text-truncate"], [1, "text-dark"]],
        template: function GxSocialCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxSocialCardComponent_div_0_Template, 2, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxSocialCardComponent_li_5_Template, 5, 1, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GxSocialCardComponent_li_6_Template, 5, 1, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GxSocialCardComponent_li_7_Template, 5, 1, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logoIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.likes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friends);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.followers);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1zb2NpYWwtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxSocialCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-social-card',
            templateUrl: './gx-social-card.component.html',
            styleUrls: ['./gx-social-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          likes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          friends: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          followers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          logoIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "sfC7":
    /*!*****************************************************!*\
      !*** ./src/app/layouts/auth-layout/auth.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthService */

    /***/
    function sfC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase */
      "JZFu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, activatedRoute) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.activatedRoute = activatedRoute;
        }

        _createClass(AuthService, [{
          key: "signupUser",
          value: function signupUser(email, password) {
            var _this18 = this;

            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(email, password).then(function (response) {
              firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdToken().then(function (token) {
                _this18.token = token;
                window.localStorage.setItem('currentUser', _this18.token);
              });

              _this18.router.navigate(['/']);
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "signinUser",
          value: function signinUser(email, password) {
            var _this19 = this;

            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(email, password).then(function (response) {
              firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdToken().then(function (token) {
                _this19.token = token;
                window.localStorage.setItem('currentUser', _this19.token);

                if (_this19.activatedRoute.snapshot.queryParams.returnUrl) {
                  _this19.router.navigate([_this19.activatedRoute.snapshot.queryParams.returnUrl]);
                } else {
                  _this19.router.navigate(['/']);
                }
              });
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut();
            this.token = null;
            window.localStorage.removeItem('currentUser');
            this.router.navigate(['/signin']);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            // firebase.auth().currentUser.getIdToken()
            //   .then(
            //     (token: string) => {
            //       this.token = token;
            //        window.localStorage.setItem('currentUser', this.token);
            //     }
            //   );
            return this.token;
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            if (!!window.localStorage.getItem('happiTicketToken')) return true;else return false;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sqi4":
    /*!*****************************************************************!*\
      !*** ./src/gaxon/components/views/gx-list/gx-list.component.ts ***!
      \*****************************************************************/

    /*! exports provided: GxListComponent */

    /***/
    function sqi4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxListComponent", function () {
        return GxListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gx-list-header/gx-list-header.component */
      "enPh");
      /* harmony import */


      var _gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gx-list-footer/gx-list-footer.component */
      "BDua");
      /* harmony import */


      var _widgets_gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../widgets/gx-slider/gx-slider.component */
      "cr+O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../bs-card/card-body/card-body.component */
      "vKLB");
      /* harmony import */


      var _bs_card_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../bs-card/card-footer/card-footer.component */
      "mBAb");

      function GxListComponent_ng_content_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "listHeader"]);
        }
      }

      function GxListComponent_ng_content_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "slider"]);
        }
      }

      function GxListComponent_bs_card_footer_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bs-card-footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.footerClass);
        }
      }

      var _c0 = ["*", [["gx-list-header"]], [["gx-slider"]], [["gx-list-footer"]]];
      var _c1 = ["*", "gx-list-header", "gx-slider", "gx-list-footer"];

      var GxListComponent = /*#__PURE__*/function () {
        function GxListComponent(elRef) {
          _classCallCheck(this, GxListComponent);

          this.elRef = elRef;
          this.classNames = '';
          this.bodyClass = '';
          this.footerClass = '';
          this.elRef.nativeElement.classList.add('card');
        }

        _createClass(GxListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxListComponent;
      }();

      GxListComponent.ɵfac = function GxListComponent_Factory(t) {
        return new (t || GxListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxListComponent,
        selectors: [["gx-list"]],
        contentQueries: function GxListComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_1__["GxListHeaderComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_2__["GxListFooterComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _widgets_gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__["GxSliderComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listFooter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
          }
        },
        inputs: {
          classNames: "classNames",
          bodyClass: "bodyClass",
          footerClass: "footerClass"
        },
        ngContentSelectors: _c1,
        decls: 6,
        vars: 5,
        consts: [[4, "ngIf"], [1, "card-stacked", 3, "ngClass"], [3, "ngClass"], [3, "ngClass", 4, "ngIf"]],
        template: function GxListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxListComponent_ng_content_0_Template, 1, 0, "ng-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxListComponent_ng_content_1_Template, 1, 0, "ng-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "bs-card-body", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxListComponent_bs_card_footer_5_Template, 2, 1, "bs-card-footer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slider);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listFooter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _bs_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_5__["CardBodyComponent"], _bs_card_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_6__["CardFooterComponent"]],
        styles: ["./gx-list.component.scss"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-list',
            templateUrl: './gx-list.component.html',
            styles: ['./gx-list.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          listHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_gx_list_header_gx_list_header_component__WEBPACK_IMPORTED_MODULE_1__["GxListHeaderComponent"]]
          }],
          listFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_gx_list_footer_gx_list_footer_component__WEBPACK_IMPORTED_MODULE_2__["GxListFooterComponent"]]
          }],
          slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_widgets_gx_slider_gx_slider_component__WEBPACK_IMPORTED_MODULE_3__["GxSliderComponent"]]
          }],
          classNames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bodyClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          footerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "sxR6":
    /*!**********************************************************************!*\
      !*** ./src/gaxon/components/gx-breadcrumbs/gx-breadcrumbs.module.ts ***!
      \**********************************************************************/

    /*! exports provided: GxBreadcrumbsModule */

    /***/
    function sxR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxBreadcrumbsModule", function () {
        return GxBreadcrumbsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _gx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gx-breadcrumbs.component */
      "zVq5");

      var GxBreadcrumbsModule = function GxBreadcrumbsModule() {
        _classCallCheck(this, GxBreadcrumbsModule);
      };

      GxBreadcrumbsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GxBreadcrumbsModule
      });
      GxBreadcrumbsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GxBreadcrumbsModule_Factory(t) {
          return new (t || GxBreadcrumbsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GxBreadcrumbsModule, {
          declarations: [_gx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["GxBreadcrumbsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_gx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["GxBreadcrumbsComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxBreadcrumbsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_gx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["GxBreadcrumbsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: [_gx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["GxBreadcrumbsComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "tev2":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-statistics-card/gx-statistics-card.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxStatisticsCardComponent */

    /***/
    function tev2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxStatisticsCardComponent", function () {
        return GxStatisticsCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../widgets/gx-status-bar/gx-status-bar.component */
      "W9Kp");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxStatisticsCardComponent_div_8_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.trending.text);
        }
      }

      function GxStatisticsCardComponent_div_8_gx_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 12);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r2.data.trending.icon);
        }
      }

      function GxStatisticsCardComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxStatisticsCardComponent_div_8_span_1_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxStatisticsCardComponent_div_8_gx_icon_2_Template, 1, 1, "gx-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.data.trending.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.trending.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.trending.icon);
        }
      }

      var GxStatisticsCardComponent = /*#__PURE__*/function () {
        function GxStatisticsCardComponent() {
          _classCallCheck(this, GxStatisticsCardComponent);

          this.headingColor = 'text-body';
        }

        _createClass(GxStatisticsCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data.heading.color) {
              this.headingColor = this.data.heading.color;
            }
          }
        }]);

        return GxStatisticsCardComponent;
      }();

      GxStatisticsCardComponent.ɵfac = function GxStatisticsCardComponent_Factory(t) {
        return new (t || GxStatisticsCardComponent)();
      };

      GxStatisticsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxStatisticsCardComponent,
        selectors: [["gx-statistics-card"]],
        inputs: {
          data: "data"
        },
        decls: 12,
        vars: 14,
        consts: [[1, "px-5", "py-4"], [1, "text-uppercase", "mb-2", 3, "ngClass"], [1, "d-flex", "align-items-baseline", "mb-4"], [1, "display-4", "font-weight-500", "text-dark", "mr-2"], [1, "d-flex", "align-items-center"], ["class", "trending-section font-weight-500 mr-2", 3, "ngClass", 4, "ngIf"], [1, "f-12", 3, "ngClass"], [1, "mb-2", 3, "fillVal", "maxVal", "barColor", "fullWidth", "hideCounter", "showPoint"], [1, "trending-section", "font-weight-500", "mr-2", 3, "ngClass"], ["class", "value", 4, "ngIf"], [3, "name", 4, "ngIf"], [1, "value"], [3, "name"]],
        template: function GxStatisticsCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxStatisticsCardComponent_div_8_Template, 3, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "gx-status-bar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.headingColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.heading.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx.data.amount));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.trending);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.tagLine.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.tagLine.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fillVal", ctx.data.progressBar.val)("maxVal", ctx.data.progressBar.maxVal)("barColor", ctx.data.progressBar.color)("fullWidth", true)("hideCounter", true)("showPoint", true);
          }
        },
        directives: [_gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _widgets_gx_status_bar_gx_status_bar_component__WEBPACK_IMPORTED_MODULE_3__["GxStatusBarComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1zdGF0aXN0aWNzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxStatisticsCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-statistics-card',
            templateUrl: './gx-statistics-card.component.html',
            styleUrls: ['./gx-statistics-card.component.scss']
          }]
        }], function () {
          return [];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "tfyL":
    /*!****************************************************************************!*\
      !*** ./src/gaxon/components/common/entry-header/entry-header.component.ts ***!
      \****************************************************************************/

    /*! exports provided: EntryHeaderComponent */

    /***/
    function tfyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryHeaderComponent", function () {
        return EntryHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["headingHtml"];

      function EntryHeaderComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.heading, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var _c1 = ["*"];

      var EntryHeaderComponent = function EntryHeaderComponent(eleRef) {
        _classCallCheck(this, EntryHeaderComponent);

        this.eleRef = eleRef;
        this.heading = '';
        this.headingHtml = '';
        this.eleRef.nativeElement.classList.add('dt-entry__header');
      };

      EntryHeaderComponent.ɵfac = function EntryHeaderComponent_Factory(t) {
        return new (t || EntryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      EntryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EntryHeaderComponent,
        selectors: [["app-entry-header"]],
        viewQuery: function EntryHeaderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headingHtml = _t.first);
          }
        },
        inputs: {
          heading: "heading"
        },
        ngContentSelectors: _c1,
        decls: 3,
        vars: 1,
        consts: [[1, "dt-entry__heading"], ["class", "dt-entry__title", 3, "innerHTML", 4, "ngIf"], [1, "dt-entry__title", 3, "innerHTML"]],
        template: function EntryHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryHeaderComponent_h3_1_Template, 1, 1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-entry-header',
            templateUrl: './entry-header.component.html',
            styleUrls: ['./entry-header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['heading']
          }],
          headingHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['headingHtml']
          }]
        });
      })();
      /***/

    },

    /***/
    "tjww":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/widgets/gx-avatar/gx-avatar.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GxAvatarComponent */

    /***/
    function tjww(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxAvatarComponent", function () {
        return GxAvatarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_one_letter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../pipes/one-letter.pipe */
      "SkAW");

      function GxAvatarComponent_img_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", ctx_r0.avatarClass);
        }
      }

      function GxAvatarComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "oneLetter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.user.name));
        }
      }

      function GxAvatarComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "oneLetter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var word_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, word_r4));
        }
      }

      function GxAvatarComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxAvatarComponent_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.user.name.split(" "));
        }
      }

      var GxAvatarComponent = /*#__PURE__*/function () {
        function GxAvatarComponent(eleRef) {
          var _this20 = this;

          _classCallCheck(this, GxAvatarComponent);

          this.eleRef = eleRef;
          this.avatarClass = '';
          this.charLength = 1;
          this.thumbPlaceHolders = ['bg-dark-blue', 'bg-orange', 'bg-success', 'bg-danger'];
          this.defaultClasses = ['dt-avatar', 'text-white'];
          this.defaultClasses.forEach(function (className) {
            _this20.eleRef.nativeElement.classList.add(className);
          });
        }

        _createClass(GxAvatarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            if (this.user.color) {
              this.user.color.split(' ').forEach(function (className) {
                _this21.eleRef.nativeElement.classList.add(className);
              });
            } else if (this.user.thumb_placeholder) {
              this.user.thumb_placeholder.split(' ').forEach(function (className) {
                _this21.eleRef.nativeElement.classList.add(className);
              });
            } else {
              var randomIndex = Math.floor(Math.random() * this.thumbPlaceHolders.length);
              this.eleRef.nativeElement.classList.add(this.thumbPlaceHolders[randomIndex]);
            }

            if (!this.user.color && this.avatarClass) {
              this.eleRef.nativeElement.classList.add(this.avatarClass);
            }
          }
        }, {
          key: "user",
          set: function set(profile) {
            if (!profile.name && profile.first_name) {
              profile.name = profile.first_name + ' ' + profile.last_name;
            }

            if (!profile.thumb && profile.avatar) {
              profile.thumb = profile.avatar;
            }

            this._user = profile;
          },
          get: function get() {
            return this._user;
          }
        }]);

        return GxAvatarComponent;
      }();

      GxAvatarComponent.ɵfac = function GxAvatarComponent_Factory(t) {
        return new (t || GxAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxAvatarComponent,
        selectors: [["gx-avatar"]],
        inputs: {
          avatarClass: "avatarClass",
          charLength: "charLength",
          user: "user"
        },
        decls: 3,
        vars: 3,
        consts: [["class", "img-fluid", 3, "src", "ngClass", "alt", 4, "ngIf"], [4, "ngIf"], [1, "img-fluid", 3, "src", "ngClass", "alt"], [4, "ngFor", "ngForOf"]],
        template: function GxAvatarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxAvatarComponent_img_0_Template, 1, 3, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxAvatarComponent_ng_container_1_Template, 3, 3, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxAvatarComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.thumb);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.thumb && ctx.charLength == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.thumb && ctx.charLength != 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        pipes: [_pipes_one_letter_pipe__WEBPACK_IMPORTED_MODULE_2__["OneLetterPipe"]],
        styles: ["[_nghost-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3gtYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6Imd4LWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxAvatarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-avatar',
            templateUrl: './gx-avatar.component.html',
            styleUrls: ['./gx-avatar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          avatarClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          charLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "u1Bl":
    /*!*************************************************************!*\
      !*** ./src/gaxon/components/gx-badge/gx-badge.component.ts ***!
      \*************************************************************/

    /*! exports provided: GxBadgeComponent */

    /***/
    function u1Bl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxBadgeComponent", function () {
        return GxBadgeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var GxBadgeComponent = /*#__PURE__*/function () {
        function GxBadgeComponent(el) {
          _classCallCheck(this, GxBadgeComponent);

          this.el = el;
          this.el.nativeElement.classList.add('badge');
        }

        _createClass(GxBadgeComponent, [{
          key: "type",
          set: function set(type) {
            if (type) {
              this.el.nativeElement.classList.add('badge-' + type);
            }
          }
        }, {
          key: "pill",
          set: function set(isPill) {
            if (isPill !== false) {
              this.el.nativeElement.classList.add('badge-pill');
            }
          }
        }]);

        return GxBadgeComponent;
      }();

      GxBadgeComponent.ɵfac = function GxBadgeComponent_Factory(t) {
        return new (t || GxBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxBadgeComponent,
        selectors: [["gx-badge"]],
        inputs: {
          type: "type",
          pill: "pill"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function GxBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxBadgeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-badge',
            template: "\n    <ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "uC76":
    /*!***************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-info-basic-card/gx-info-basic-card.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: GxInfoBasicCardComponent */

    /***/
    function uC76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxInfoBasicCardComponent", function () {
        return GxInfoBasicCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxInfoBasicCardComponent_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GxInfoBasicCardComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.data.actionRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.actionLabel);
        }
      }

      var GxInfoBasicCardComponent = function GxInfoBasicCardComponent(eleRef) {
        _classCallCheck(this, GxInfoBasicCardComponent);

        this.eleRef = eleRef;
        this.eleRef.nativeElement.classList.add('dt-card');
      };

      GxInfoBasicCardComponent.ɵfac = function GxInfoBasicCardComponent_Factory(t) {
        return new (t || GxInfoBasicCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxInfoBasicCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxInfoBasicCardComponent,
        selectors: [["gx-info-basic-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          data: "data"
        },
        decls: 11,
        vars: 4,
        consts: [[1, "px-5", "mb-4"], [1, "text-center"], [1, "dt-separator-h-v1", "mb-2"], [1, "mb-1"], [1, "d-inline-block", "text-primary"], [1, "px-5"], ["class", "img-fluid mb-7", 3, "src", "alt", 4, "ngIf"], ["class", "btn bg-brown text-uppercase text-white btn-sm", 3, "routerLink", 4, "ngIf"], [1, "img-fluid", "mb-7", 3, "src", "alt"], [1, "btn", "bg-brown", "text-uppercase", "text-white", "btn-sm", 3, "routerLink"]],
        template: function GxInfoBasicCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "card-body", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxInfoBasicCardComponent_img_8_Template, 1, 2, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GxInfoBasicCardComponent_a_10_Template, 2, 2, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__["CardHeadingComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxInfoBasicCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-info-basic-card',
            templateUrl: './gx-info-basic-card.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "uSpw":
    /*!****************************************!*\
      !*** ./src/gaxon/pipes/filter.pipe.ts ***!
      \****************************************/

    /*! exports provided: FilterPipe */

    /***/
    function uSpw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../helpers */
      "XIvi");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(itemsArray, searchStr) {
            return _helpers__WEBPACK_IMPORTED_MODULE_1__["GxHelper"].filterArrayByString(itemsArray, searchStr);
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.ɵfac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uiYD":
    /*!*****************************************************!*\
      !*** ./src/app/data-db/data/apps/mail/labels-db.ts ***!
      \*****************************************************/

    /*! exports provided: MailLabelsDb */

    /***/
    function uiYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailLabelsDb", function () {
        return MailLabelsDb;
      });

      var MailLabelsDb = function MailLabelsDb() {
        _classCallCheck(this, MailLabelsDb);
      };

      MailLabelsDb.list = [{
        'id': 0,
        'handle': 'note',
        'title': 'PayPal',
        'icon': 'text-dark-blue',
        'color': 'bg-dark-blue text-white'
      }, {
        'id': 1,
        'handle': 'paypal',
        'title': 'Upwork',
        'icon': 'text-danger',
        'color': 'badge-danger'
      }, {
        'id': 2,
        'handle': 'invoice',
        'title': 'In-house',
        'icon': 'text-light-cyan',
        'color': 'bg-light-cyan text-white'
      }, {
        'id': 3,
        'handle': 'amazon',
        'title': 'Clients',
        'icon': 'text-success',
        'color': 'badge-success'
      }];
      /***/
    },

    /***/
    "vKLB":
    /*!***********************************************************************!*\
      !*** ./src/gaxon/components/bs-card/card-body/card-body.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CardBodyComponent */

    /***/
    function vKLB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function () {
        return CardBodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CardBodyComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.cardTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CardBodyComponent_h5_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h5", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.cardSubTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CardBodyComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.cardText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var _c0 = ["*"];

      var CardBodyComponent = /*#__PURE__*/function () {
        function CardBodyComponent(elRef, renderer) {
          _classCallCheck(this, CardBodyComponent);

          this.elRef = elRef;
          this.renderer = renderer;
          this.cardTitle = '';
          this.cardSubTitle = '';
          this.cardText = '';
        }

        _createClass(CardBodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.addClass(this.elRef.nativeElement, 'card-body');
          }
        }]);

        return CardBodyComponent;
      }();

      CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) {
        return new (t || CardBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      CardBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardBodyComponent,
        selectors: [["bs-card-body"]],
        inputs: {
          cardTitle: ["card-title", "cardTitle"],
          cardSubTitle: ["card-subtitle", "cardSubTitle"],
          cardText: ["card-text", "cardText"]
        },
        ngContentSelectors: _c0,
        decls: 5,
        vars: 3,
        consts: [["class", "card-title", 3, "innerHTML", 4, "ngIf"], ["class", "card-subtitle mb-2 text-muted", 3, "innerHTML", 4, "ngIf"], ["class", "card-text", 3, "innerHTML", 4, "ngIf"], [1, "card-title", 3, "innerHTML"], [1, "card-subtitle", "mb-2", "text-muted", 3, "innerHTML"], [1, "card-text", 3, "innerHTML"]],
        template: function CardBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardBodyComponent_h3_1_Template, 1, 1, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardBodyComponent_h5_2_Template, 1, 1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardBodyComponent_p_3_Template, 1, 1, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardSubTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardText);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-card-body',
            template: "\n    <ng-container>\n      <h3 *ngIf=\"cardTitle\" class=\"card-title\" [innerHTML]=\"cardTitle\"></h3>\n      <h5 *ngIf=\"cardSubTitle\" class=\"card-subtitle mb-2 text-muted\" [innerHTML]=\"cardSubTitle\"></h5>\n      <p *ngIf=\"cardText\" class=\"card-text\" [innerHTML]=\"cardText\"></p>\n      <ng-content></ng-content>\n    </ng-container>\n  ",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-title']
          }],
          cardSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-subtitle']
          }],
          cardText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-text']
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var appRoutes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: '/signin'
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layouts-auth-layout-auth-module */
          [__webpack_require__.e("default~layouts-auth-layout-auth-module~main-block-main-block-module~master-data-master-data-module~~af56ae8a"), __webpack_require__.e("layouts-auth-layout-auth-module")]).then(__webpack_require__.bind(null,
          /*! ./layouts/auth-layout/auth.module */
          "6xS6")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, // {
      //   path: '',
      //   loadChildren: () => import('./layouts/saas-layout/saas-layout.module').then(m => m.SaasLayoutModule),
      //   // canActivate: [AuthGuard]
      // },
      {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | layouts-back-office-mini-layout-back-office-mini-layout-module */
          "layouts-back-office-mini-layout-back-office-mini-layout-module").then(__webpack_require__.bind(null,
          /*! ./layouts/back-office-mini-layout/back-office-mini-layout.module */
          "viOJ")).then(function (m) {
            return m.BackOfficeMiniLayoutModule;
          });
        }
      }, {
        path: '**',
        redirectTo: '/ticket/ticket-generate'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vccG":
    /*!***********************************************************************************!*\
      !*** ./src/gaxon/components/bs-card/card-outer-body/card-outer-body.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CardOuterBodyComponent */

    /***/
    function vccG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardOuterBodyComponent", function () {
        return CardOuterBodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardOuterBodyComponent = /*#__PURE__*/function () {
        function CardOuterBodyComponent() {
          _classCallCheck(this, CardOuterBodyComponent);
        }

        _createClass(CardOuterBodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardOuterBodyComponent;
      }();

      CardOuterBodyComponent.ɵfac = function CardOuterBodyComponent_Factory(t) {
        return new (t || CardOuterBodyComponent)();
      };

      CardOuterBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardOuterBodyComponent,
        selectors: [["bs-card-outer-body"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CardOuterBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardOuterBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-card-outer-body',
            template: "\n    <ng-content></ng-content>\n  ",
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "wX8A":
    /*!*******************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-info-classic-card/gx-info-classic-card.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: GxInfoClassicCardComponent */

    /***/
    function wX8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxInfoClassicCardComponent", function () {
        return GxInfoClassicCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function GxInfoClassicCardComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.data.actionRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.actionLabel);
        }
      }

      function GxInfoClassicCardComponent_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var GxInfoClassicCardComponent = function GxInfoClassicCardComponent(eleRef) {
        _classCallCheck(this, GxInfoClassicCardComponent);

        this.eleRef = eleRef;
        this.eleRef.nativeElement.classList.add('dt-card');
      };

      GxInfoClassicCardComponent.ɵfac = function GxInfoClassicCardComponent_Factory(t) {
        return new (t || GxInfoClassicCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxInfoClassicCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxInfoClassicCardComponent,
        selectors: [["gx-info-classic-card"]],
        inputs: {
          bodyClasses: "bodyClasses",
          data: "data"
        },
        decls: 10,
        vars: 4,
        consts: [[1, "px-5", "mb-4"], [1, "text-center"], [1, "dt-separator-h-v1", "mb-2"], [1, "mb-0"], [1, "px-5"], [1, "mb-5"], ["class", "text-uppercase f-12 font-weight-500", 3, "routerLink", 4, "ngIf"], ["class", "img-fluid mb-n15", 3, "src", "alt", 4, "ngIf"], [1, "text-uppercase", "f-12", "font-weight-500", 3, "routerLink"], [1, "img-fluid", "mb-n15", 3, "src", "alt"]],
        template: function GxInfoClassicCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-heading", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "card-body", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GxInfoClassicCardComponent_a_8_Template, 2, 2, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GxInfoClassicCardComponent_img_9_Template, 1, 2, "img", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_2__["CardHeadingComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxInfoClassicCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-info-classic-card',
            templateUrl: './gx-info-classic-card.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "xXxx":
    /*!*************************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-chartist-chart/gx-chartist-chart.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: GxChartistChartComponent */

    /***/
    function xXxx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxChartistChartComponent", function () {
        return GxChartistChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chartist */
      "uki+");
      /* harmony import */


      var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var GxChartistChartComponent = /*#__PURE__*/function () {
        function GxChartistChartComponent() {
          _classCallCheck(this, GxChartistChartComponent);
        }

        _createClass(GxChartistChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.lineSmooth && this.options) {
              this.options.lineSmooth = chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 1
              });
            }
          }
        }]);

        return GxChartistChartComponent;
      }();

      GxChartistChartComponent.ɵfac = function GxChartistChartComponent_Factory(t) {
        return new (t || GxChartistChartComponent)();
      };

      GxChartistChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxChartistChartComponent,
        selectors: [["gx-chartist-chart"]],
        inputs: {
          data: "data",
          options: "options",
          type: "type",
          responsiveOptions: "responsiveOptions",
          events: "events",
          lineSmooth: "lineSmooth",
          classNames: "classNames"
        },
        decls: 1,
        vars: 6,
        consts: [[3, "type", "data", "options", "responsiveOptions", "events", "ngClass"]],
        template: function GxChartistChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "x-chartist", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("data", ctx.data)("options", ctx.options)("responsiveOptions", ctx.responsiveOptions)("events", ctx.events)("ngClass", ctx.classNames);
          }
        },
        directives: [ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxChartistChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-chartist-chart',
            template: "\n    <x-chartist\n      [type]=\"type\"\n      [data]=\"data\"\n      [options]=\"options\"\n      [responsiveOptions]=\"responsiveOptions\"\n      [events]=\"events\"\n      [ngClass]=\"classNames\"\n    ></x-chartist>"
          }]
        }], function () {
          return [];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lineSmooth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          classNames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "yhBE":
    /*!*********************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-clients-list/gx-clients-list.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GxClientsListComponent */

    /***/
    function yhBE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxClientsListComponent", function () {
        return GxClientsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../widgets/gx-avatar/gx-avatar.component */
      "tjww");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxClientsListComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-avatar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", client_r1)("charLength", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.deals);
        }
      }

      var GxClientsListComponent = /*#__PURE__*/function () {
        function GxClientsListComponent() {
          _classCallCheck(this, GxClientsListComponent);
        }

        _createClass(GxClientsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxClientsListComponent;
      }();

      GxClientsListComponent.ɵfac = function GxClientsListComponent_Factory(t) {
        return new (t || GxClientsListComponent)();
      };

      GxClientsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxClientsListComponent,
        selectors: [["gx-clients-list"]],
        inputs: {
          clients: "clients"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "dt-list", "dt-list-xxl", "dt-list-bordered", "flex-nowrap"], ["class", "dt-list__item text-center col", 4, "ngFor", "ngForOf"], [1, "dt-list__item", "text-center", "col"], [1, "dt-avatar-wrapper", "flex-column"], [1, "mb-4", "size-80", 3, "user", "charLength"], [1, "dt-avatar-info"], [1, "dt-avatar-name", "mb-1", "text-nowrap"], [1, "dt-list", "dt-list-bordered", "dt-list-cm-0", "f-12", "flex-nowrap"], [1, "dt-list__item"], [1, "d-inline-flex", "align-items-center"], ["name", "star-fill", 1, "mr-2", "text-yellow"], [1, "d-inline-block", "text-nowrap"]],
        template: function GxClientsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxClientsListComponent_li_1_Template, 15, 5, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clients);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_2__["GxAvatarComponent"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1jbGllbnRzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxClientsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-clients-list',
            templateUrl: './gx-clients-list.component.html',
            styleUrls: ['./gx-clients-list.component.scss']
          }]
        }], function () {
          return [];
        }, {
          clients: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "z74p":
    /*!*************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-my-tasks/gx-my-tasks.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GxMyTasksComponent */

    /***/
    function z74p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxMyTasksComponent", function () {
        return GxMyTasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../pipes/filter.pipe */
      "uSpw");

      function GxMyTasksComponent_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GxMyTasksComponent_ng_container_5_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return task_r1.completed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r2 = ctx_r7.index;
          var task_r1 = ctx_r7.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox-", i_r2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", task_r1.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox-", i_r2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r1.title, "");
        }
      }

      function GxMyTasksComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxMyTasksComponent_ng_container_5_div_1_Template, 4, 4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 < 4);
        }
      }

      var GxMyTasksComponent = /*#__PURE__*/function () {
        function GxMyTasksComponent(viewRef) {
          _classCallCheck(this, GxMyTasksComponent);

          this.viewRef = viewRef;
          this.searchText = '';
          this.viewRef.nativeElement.classList.add('dt-card');
          this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        }

        _createClass(GxMyTasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.searchQuery.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (searchText) {
              _this22.searchText = searchText;
            });
          }
        }]);

        return GxMyTasksComponent;
      }();

      GxMyTasksComponent.ɵfac = function GxMyTasksComponent_Factory(t) {
        return new (t || GxMyTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxMyTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxMyTasksComponent,
        selectors: [["gx-my-tasks"]],
        inputs: {
          tasks: "tasks"
        },
        decls: 11,
        vars: 6,
        consts: [["card-title", "My Task"], [1, "dt-todo-group"], ["placeholder", "Search in tasks...", "type", "search", 1, "form-control", "mb-5", 3, "formControl"], [4, "ngFor", "ngForOf"], [1, "mt-5"], ["href", "javascript:void(0)", 1, "card-link"], ["name", "arrow-long-right", 3, "fw"], ["class", "dt-checkbox dt-checkbox-todo mb-3", 4, "ngIf"], [1, "dt-checkbox", "dt-checkbox-todo", "mb-3"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange"], [1, "dt-checkbox-content", 3, "for"]],
        template: function GxMyTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GxMyTasksComponent_ng_container_5_Template, 2, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Go to My task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "gx-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx.tasks, ctx.searchText));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_6__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1teS10YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxMyTasksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-my-tasks',
            templateUrl: './gx-my-tasks.component.html',
            styleUrls: ['./gx-my-tasks.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          tasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zOMt":
    /*!*****************************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-properties/gx-properties.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: GxPropertiesComponent */

    /***/
    function zOMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxPropertiesComponent", function () {
        return GxPropertiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../gx-card/card-header/card-header.component */
      "IRwd");
      /* harmony import */


      var _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../gx-card/card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../gx-icon/gx-icon.component */
      "/Tuz");

      function GxPropertiesComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "gx-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "gx-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "gx-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var property_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.visitors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        }
      }

      var GxPropertiesComponent = /*#__PURE__*/function () {
        function GxPropertiesComponent() {
          _classCallCheck(this, GxPropertiesComponent);
        }

        _createClass(GxPropertiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GxPropertiesComponent;
      }();

      GxPropertiesComponent.ɵfac = function GxPropertiesComponent_Factory(t) {
        return new (t || GxPropertiesComponent)();
      };

      GxPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxPropertiesComponent,
        selectors: [["gx-properties"]],
        inputs: {
          cardTitle: ["card-title", "cardTitle"],
          properties: "properties"
        },
        decls: 4,
        vars: 2,
        consts: [[1, "mb-5", 3, "card-title"], [1, "p-0"], [1, "dt-widget", "dt-widget-sm", "dt-widget-hover"], ["class", "dt-widget__item", 4, "ngFor", "ngForOf"], [1, "dt-widget__item"], [1, "dt-widget__info", "text-truncate"], [1, "dt-widget__title", "text-truncate"], ["href", "javascript:void(0)", 1, "text-truncate"], [1, "dt-list", "dt-widget__subtitle", "text-light-gray", "dt-list-cm-0", "flex-nowrap"], [1, "dt-list__item", "text-truncate"], [1, "text-truncate"], ["name", "users2", 1, "mr-1"], [1, "text-dark"], ["name", "location", 1, "mr-1"], [1, "dt-extra", "animate-slide", "align-self-center"], [1, "slide-content"], ["href", "javascript:void(0)"], ["name", "arrow-right", "size", "xl", 3, "fw"]],
        template: function GxPropertiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxPropertiesComponent_div_3_Template, 20, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card-title", ctx.cardTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.properties);
          }
        },
        directives: [_gx_card_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"], _gx_card_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxPropertiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-properties',
            templateUrl: './gx-properties.component.html',
            styleUrls: ['./gx-properties.component.scss']
          }]
        }], function () {
          return [];
        }, {
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-title']
          }],
          properties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zOfF":
    /*!*********************************************!*\
      !*** ./src/gaxon/pipes/short-title.pipe.ts ***!
      \*********************************************/

    /*! exports provided: ShortTitlePipe */

    /***/
    function zOfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShortTitlePipe", function () {
        return ShortTitlePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShortTitlePipe = /*#__PURE__*/function () {
        function ShortTitlePipe() {
          _classCallCheck(this, ShortTitlePipe);
        }

        _createClass(ShortTitlePipe, [{
          key: "transform",
          value: function transform(value) {
            var stringArray = value.split(' ');
            var firstChar = stringArray[0].charAt(0).toUpperCase();
            var lastChar = '';

            if (stringArray.length > 1) {
              lastChar = stringArray.slice(-1).pop().charAt(0).toUpperCase();
            }

            return firstChar + lastChar;
          }
        }]);

        return ShortTitlePipe;
      }();

      ShortTitlePipe.ɵfac = function ShortTitlePipe_Factory(t) {
        return new (t || ShortTitlePipe)();
      };

      ShortTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "shortTitle",
        type: ShortTitlePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortTitlePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'shortTitle'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });

      var onDeviceReady = function onDeviceReady() {
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      };

      document.addEventListener('deviceready', onDeviceReady, false);
      /***/
    },

    /***/
    "zVq5":
    /*!*************************************************************************!*\
      !*** ./src/gaxon/components/gx-breadcrumbs/gx-breadcrumbs.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GxBreadcrumbsComponent */

    /***/
    function zVq5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxBreadcrumbsComponent", function () {
        return GxBreadcrumbsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function GxBreadcrumbsComponent_ol_0_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r3.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
        }
      }

      function GxBreadcrumbsComponent_ol_0_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
        }
      }

      function GxBreadcrumbsComponent_ol_0_li_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          active: a0
        };
      };

      function GxBreadcrumbsComponent_ol_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxBreadcrumbsComponent_ol_0_li_1_a_1_Template, 2, 4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxBreadcrumbsComponent_ol_0_li_1_a_2_Template, 2, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxBreadcrumbsComponent_ol_0_li_1_ng_container_3_Template, 2, 1, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, item_r3.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.active && item_r3.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.active && !item_r3.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.active);
        }
      }

      function GxBreadcrumbsComponent_ol_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxBreadcrumbsComponent_ol_0_li_1_Template, 4, 6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
        }
      }

      function GxBreadcrumbsComponent_nav_1_ng_container_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r11.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.label);
        }
      }

      function GxBreadcrumbsComponent_nav_1_ng_container_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.label);
        }
      }

      function GxBreadcrumbsComponent_nav_1_ng_container_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.label);
        }
      }

      function GxBreadcrumbsComponent_nav_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxBreadcrumbsComponent_nav_1_ng_container_1_a_1_Template, 2, 4, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GxBreadcrumbsComponent_nav_1_ng_container_1_a_2_Template, 2, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GxBreadcrumbsComponent_nav_1_ng_container_1_span_3_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.active && item_r11.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.active && !item_r11.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.active);
        }
      }

      function GxBreadcrumbsComponent_nav_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxBreadcrumbsComponent_nav_1_ng_container_1_Template, 4, 3, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data);
        }
      }

      var GxBreadcrumbsComponent = function GxBreadcrumbsComponent() {
        _classCallCheck(this, GxBreadcrumbsComponent);

        this.displayAs = 'list';
        this.data = [];
      };

      GxBreadcrumbsComponent.ɵfac = function GxBreadcrumbsComponent_Factory(t) {
        return new (t || GxBreadcrumbsComponent)();
      };

      GxBreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxBreadcrumbsComponent,
        selectors: [["gx-breadcrumbs"]],
        inputs: {
          displayAs: "displayAs",
          data: "data"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "breadcrumb", 4, "ngIf"], [1, "breadcrumb"], ["class", "breadcrumb-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", 3, "ngClass"], [3, "routerLink", 4, "ngIf"], ["href", "javascript:void(0)", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], ["href", "javascript:void(0)"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["href", "javascript:void(0)", "class", "breadcrumb-item", 4, "ngIf"], ["class", "active breadcrumb-item", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)", 1, "breadcrumb-item"], [1, "active", "breadcrumb-item"]],
        template: function GxBreadcrumbsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxBreadcrumbsComponent_ol_0_Template, 2, 1, "ol", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GxBreadcrumbsComponent_nav_1_Template, 2, 1, "nav", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayAs == "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayAs != "list");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%]{display: block;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxBreadcrumbsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-breadcrumbs',
            templateUrl: './gx-breadcrumbs.component.html',
            styles: [':host{display: block;}']
          }]
        }], function () {
          return [];
        }, {
          displayAs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zhXz":
    /*!***********************************************************!*\
      !*** ./src/gaxon/components/gx-card/gx-card.component.ts ***!
      \***********************************************************/

    /*! exports provided: GxCardComponent */

    /***/
    function zhXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxCardComponent", function () {
        return GxCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-heading/card-heading.component */
      "ogIi");
      /* harmony import */


      var _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-tool/card-tool.component */
      "1sdc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./card-body/card-body.component */
      "ZUXT");
      /* harmony import */


      var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./card-header/card-header.component */
      "IRwd");

      function GxCardComponent_card_header_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.headerClasses)("card-title", ctx_r0.cardTitle)("card-subtitle", ctx_r0.cardSubTitle);
        }
      }

      var _c0 = ["*", [["card-body"]], [["card-heading"]], [["card-tool"]]];
      var _c1 = ["*", "card-body", "card-heading", "card-tool"];

      var GxCardComponent = /*#__PURE__*/function () {
        function GxCardComponent(elRef) {
          _classCallCheck(this, GxCardComponent);

          this.elRef = elRef;
          this.cardTitle = '';
          this.cardSubTitle = '';
          this.bodyClasses = '';
          this.headerClasses = '';
          this.elRef.nativeElement.classList.add('dt-card');
        }

        _createClass(GxCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fullHeight",
          set: function set(isFullHeight) {
            if (isFullHeight !== false) {
              this.elRef.nativeElement.classList.add('dt-card__full-height');
            }
          }
        }]);

        return GxCardComponent;
      }();

      GxCardComponent.ɵfac = function GxCardComponent_Factory(t) {
        return new (t || GxCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GxCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxCardComponent,
        selectors: [["gx-card"]],
        contentQueries: function GxCardComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__["CardHeadingComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__["CardToolComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardHeading = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardTool = _t.first);
          }
        },
        inputs: {
          cardTitle: ["card-title", "cardTitle"],
          cardSubTitle: ["card-subtitle", "cardSubTitle"],
          bodyClasses: ["body-class", "bodyClasses"],
          headerClasses: ["header-class", "headerClasses"],
          fullHeight: "fullHeight"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [[3, "ngClass", "card-title", "card-subtitle", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", "card-title", "card-subtitle"]],
        template: function GxCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GxCardComponent_card_header_0_Template, 3, 3, "card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card-body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardTitle || ctx.cardSubTitle || ctx.cardHeading || ctx.cardTool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bodyClasses);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _card_body_card_body_component__WEBPACK_IMPORTED_MODULE_4__["CardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__["CardHeaderComponent"]],
        styles: [".dt-card[_nghost-%COMP%] {\n  display: block;\n}\n\n.dt-card__full-height[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxneC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYztBQUFsQjs7QUFGQTtFQU1JLGFBQWE7QUFBakIiLCJmaWxlIjoiZ3gtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAmLmR0LWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLmR0LWNhcmRfX2Z1bGwtaGVpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-card',
            templateUrl: './gx-card.component.html',
            styleUrls: ['./gx-card.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          cardHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_heading_card_heading_component__WEBPACK_IMPORTED_MODULE_1__["CardHeadingComponent"]]
          }],
          cardTool: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_card_tool_card_tool_component__WEBPACK_IMPORTED_MODULE_2__["CardToolComponent"]]
          }],
          cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-title']
          }],
          cardSubTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['card-subtitle']
          }],
          bodyClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['body-class']
          }],
          headerClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['header-class']
          }],
          fullHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "ztgp":
    /*!*******************************************************************!*\
      !*** ./src/gaxon/components/cards/gx-chart/gx-chart.component.ts ***!
      \*******************************************************************/

    /*! exports provided: GxChartComponent */

    /***/
    function ztgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GxChartComponent", function () {
        return GxChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["chartRef"];

      var GxChartComponent = /*#__PURE__*/function () {
        function GxChartComponent() {
          _classCallCheck(this, GxChartComponent);

          this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.defaultOptions = {
            responsive: true,
            legend: {
              display: false
            },
            layout: {
              padding: 0
            },
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            }
          };
        }

        _createClass(GxChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createChartGradient();
            this.createChartShadow();
            this.writeCenteredText();

            if (this.options.height) {
              this.chartRef.nativeElement.height = this.options.height;
            }

            if (this.options.width) {
              this.chartRef.nativeElement.width = this.options.width;
            }
          }
          /**
           * Write text incenter of doughnut, and pie chart
           */

        }, {
          key: "writeCenteredText",
          value: function writeCenteredText() {
            // creating center text
            window.Chart.pluginService.register({
              beforeDraw: function beforeDraw(chart) {
                var width = chart.chart.width,
                    height = chart.chart.height,
                    ctx = chart.chart.ctx;
                var centerText = chart.options.centerText;

                if (centerText) {
                  ctx.restore();
                  var fontSize = (height / 114).toFixed(2);
                  ctx.font = 3 + 'rem Source Sans Pro';
                  ctx.textBaseline = 'middle';
                  var textX = Math.round((width - ctx.measureText(centerText).width) / 2),
                      textY = height / 2;
                  ctx.fillText(centerText, textX, textY);
                  ctx.save();
                }
              }
            });
          }
          /**
           * Creating chart shadow
           */

        }, {
          key: "createChartShadow",
          value: function createChartShadow() {
            if (this.shadowType) {
              var shadowType = this.shadowType;
              var chartColor = window.Chart.helpers.color;
              var _draw = window.Chart.controllers.line.prototype.draw;
              window.Chart.controllers.line = window.Chart.controllers.line.extend({
                draw: function draw() {
                  _draw.apply(this, arguments);

                  var ctx = this.chart.chart.ctx;

                  if (shadowType === 'area') {
                    var _fill = ctx.fill;

                    ctx.fill = function () {
                      ctx.save();
                      ctx.shadowColor = chartColor('#5c5c5c').alpha(0.5).rgbString();
                      ctx.shadowBlur = 16;
                      ctx.shadowOffsetX = 0;
                      ctx.shadowOffsetY = 0;

                      _fill.apply(this, arguments);

                      ctx.restore();
                    };
                  } else if (shadowType === 'line') {
                    var _stroke = ctx.stroke;

                    ctx.stroke = function () {
                      ctx.save();
                      ctx.shadowColor = '#07C';
                      ctx.shadowBlur = 10;
                      ctx.shadowOffsetX = 0;
                      ctx.shadowOffsetY = 4;

                      _stroke.apply(this, arguments);

                      ctx.restore();
                    };
                  }
                }
              });
            }
          }
          /**
           * Creating Chart gradient
           */

        }, {
          key: "createChartGradient",
          value: function createChartGradient() {
            var _this23 = this;

            if (this.gradients) {
              var chartColor = window.Chart.helpers.color;
              var context = this.chartRef.nativeElement.getContext('2d');
              this.colors = [];
              this.gradients.forEach(function (dataset) {
                var gradRef = context.createLinearGradient(dataset.position[0], dataset.position[1], dataset.position[2], dataset.position[3]);
                dataset.colors.forEach(function (color) {
                  gradRef.addColorStop(color.point, chartColor(color.code).alpha(color.opacity).rgbString());
                });

                if (dataset.borderColor) {
                  _this23.colors.push({
                    backgroundColor: gradRef,
                    borderColor: dataset.borderColor,
                    pointBackgroundColor: gradRef,
                    pointBorderColor: dataset.borderColor,
                    pointHoverBackgroundColor: gradRef,
                    pointHoverBorderColor: gradRef
                  });
                } else {
                  _this23.colors.push({
                    backgroundColor: gradRef,
                    borderColor: gradRef,
                    pointBackgroundColor: gradRef,
                    pointBorderColor: gradRef,
                    pointHoverBackgroundColor: gradRef,
                    pointHoverBorderColor: gradRef
                  });
                }
              });
            }
          } // events

        }, {
          key: "chartClicked",
          value: function chartClicked(e) {
            this.chartClick.next(e);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {
            this.chartHover.emit(e);
          }
        }, {
          key: "options",
          set: function set(options) {
            // options
            if (options) {
              this.__options = Object.assign(this.defaultOptions, options);
            } else {
              this.__options = Object.assign({}, this.defaultOptions);
            }
          },
          get: function get() {
            return this.__options;
          }
        }]);

        return GxChartComponent;
      }();

      GxChartComponent.ɵfac = function GxChartComponent_Factory(t) {
        return new (t || GxChartComponent)();
      };

      GxChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GxChartComponent,
        selectors: [["gx-chart"]],
        viewQuery: function GxChartComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartRef = _t.first);
          }
        },
        inputs: {
          labels: "labels",
          data: "data",
          datasets: "datasets",
          colors: "colors",
          chartType: "chartType",
          gradients: "gradients",
          shadowType: "shadowType",
          chartClasses: "chartClasses",
          options: "options"
        },
        outputs: {
          chartHover: "chartHover",
          chartClick: "chartClick"
        },
        decls: 2,
        vars: 7,
        consts: [["baseChart", "", 3, "ngClass", "data", "datasets", "labels", "options", "colors", "chartType", "chartHover", "chartClick"], ["chartRef", ""]],
        template: function GxChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function GxChartComponent_Template_canvas_chartHover_0_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function GxChartComponent_Template_canvas_chartClick_0_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.chartClasses)("data", ctx.data)("datasets", ctx.datasets)("labels", ctx.labels)("options", ctx.options)("colors", ctx.colors)("chartType", ctx.chartType);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["[_nghost-%COMP%]{display: block}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GxChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gx-chart',
            templateUrl: './gx-chart.component.html',
            styles: [':host{display: block}']
          }]
        }], function () {
          return [];
        }, {
          labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          datasets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chartType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gradients: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          shadowType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chartClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          chartHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          chartClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          chartRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartRef', {
              "static": true
            }]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map