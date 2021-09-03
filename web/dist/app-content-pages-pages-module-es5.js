(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-pages-module"], {
    /***/
    "+6zA":
    /*!*************************************************!*\
      !*** ./src/app/content/pages/drawer.service.ts ***!
      \*************************************************/

    /*! exports provided: DrawerService */

    /***/
    function zA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrawerService", function () {
        return DrawerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DrawerService = /*#__PURE__*/function () {
        function DrawerService() {
          _classCallCheck(this, DrawerService);

          this.onDrawerChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          var drawer = {
            isOpen: false,
            activeMenu: ''
          };
          this.onDrawerChanged.next(drawer);
        }
        /**
         * Update
         * @param drawer
         */


        _createClass(DrawerService, [{
          key: "update",
          value: function update(drawer) {
            this.onDrawerChanged.next(drawer);
          }
        }]);

        return DrawerService;
      }();

      DrawerService.ɵfac = function DrawerService_Factory(t) {
        return new (t || DrawerService)();
      };

      DrawerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DrawerService,
        factory: DrawerService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AfIt":
    /*!********************************************************!*\
      !*** ./src/app/content/pages/blank/blank.component.ts ***!
      \********************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function AfIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/settings/settings.service */
      "b1TM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gaxon_components_common_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../gaxon/components/common/page-header/page-header.component */
      "dCDM");
      /* harmony import */


      var _gaxon_components_gx_card_gx_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../gaxon/components/gx-card/gx-card.component */
      "zhXz");

      function BlankComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This is a blank page provided in the template which could be used to setup your own custom page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          height: "400px"
        };
      };

      function BlankComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gx-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a blank page provided in the template which could be used to setup your own custom page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var BlankComponent = /*#__PURE__*/function () {
        function BlankComponent(settingService) {
          var _this2 = this;

          _classCallCheck(this, BlankComponent);

          this.settingService = settingService;
          this.onSettingChanged = this.settingService.onSettingChanged.subscribe(function (newSettings) {
            _this2.settings = newSettings;
          });
        }

        _createClass(BlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.onSettingChanged.unsubscribe();
          }
        }]);

        return BlankComponent;
      }();

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]));
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["pageTitle", "Blank Page"], [1, "row"], [1, "col-xl-12"], [1, "lead"], ["card-title", "Blank Page", 3, "ngStyle"]],
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlankComponent_ng_container_0_Template, 6, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlankComponent_ng_container_1_Template, 4, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.layout !== "intranet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.layout === "intranet");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gaxon_components_common_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _gaxon_components_gx_card_gx_card_component__WEBPACK_IMPORTED_MODULE_4__["GxCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank',
            templateUrl: './blank.component.html',
            styleUrls: ['./blank.component.scss']
          }]
        }], function () {
          return [{
            type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CUlp":
    /*!***********************************************!*\
      !*** ./node_modules/ev-emitter/ev-emitter.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function CUlp(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * EvEmitter v1.1.0
      * Lil' event emitter
      * MIT License
      */

      /* jshint unused: true, undef: true, strict: true */


      (function (global, factory) {
        // universal module definition

        /* jshint strict: false */

        /* globals define, module, window */
        if (true) {
          // AMD - RequireJS
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(typeof window != 'undefined' ? window : this, function () {
        "use strict";

        function EvEmitter() {}

        var proto = EvEmitter.prototype;

        proto.on = function (eventName, listener) {
          if (!eventName || !listener) {
            return;
          } // set events hash


          var events = this._events = this._events || {}; // set listeners array

          var listeners = events[eventName] = events[eventName] || []; // only add once

          if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
          }

          return this;
        };

        proto.once = function (eventName, listener) {
          if (!eventName || !listener) {
            return;
          } // add event


          this.on(eventName, listener); // set once flag
          // set onceEvents hash

          var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

          var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

          onceListeners[listener] = true;
          return this;
        };

        proto.off = function (eventName, listener) {
          var listeners = this._events && this._events[eventName];

          if (!listeners || !listeners.length) {
            return;
          }

          var index = listeners.indexOf(listener);

          if (index != -1) {
            listeners.splice(index, 1);
          }

          return this;
        };

        proto.emitEvent = function (eventName, args) {
          var listeners = this._events && this._events[eventName];

          if (!listeners || !listeners.length) {
            return;
          } // copy over to avoid interference if .off() in listener


          listeners = listeners.slice(0);
          args = args || []; // once stuff

          var onceListeners = this._onceEvents && this._onceEvents[eventName];

          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];

            if (isOnce) {
              // remove listener
              // remove before trigger to prevent recursion
              this.off(eventName, listener); // unset once flag

              delete onceListeners[listener];
            } // trigger listener


            listener.apply(this, args);
          }

          return this;
        };

        proto.allOff = function () {
          delete this._events;
          delete this._onceEvents;
        };

        return EvEmitter;
      });
      /***/

    },

    /***/
    "EygD":
    /*!***********************************************************************!*\
      !*** ./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js ***!
      \***********************************************************************/

    /*! exports provided: NgxMasonryComponent, NgxMasonryDirective, NgxMasonryModule */

    /***/
    function EygD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMasonryComponent", function () {
        return NgxMasonryComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMasonryDirective", function () {
        return NgxMasonryDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxMasonryModule", function () {
        return NgxMasonryModule;
      });
      /* harmony import */


      var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! masonry-layout */
      "hNNL");
      /* harmony import */


      var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var _c0 = ["ngx-masonry", ""];
      var _c1 = ["*"];
      var masonryConstructor;

      var NgxMasonryComponent = /*#__PURE__*/function () {
        function NgxMasonryComponent(platformId, _element) {
          _classCallCheck(this, NgxMasonryComponent);

          this.platformId = platformId;
          this._element = _element;
          this.updateLayout = false; // Outputs

          this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(NgxMasonryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId) && masonryConstructor === undefined) {
              masonryConstructor = masonry_layout__WEBPACK_IMPORTED_MODULE_0___default.a;
            } // Create masonry options object


            if (!this.options) {
              this.options = {};
            } // Set default itemSelector


            if (!this.options.itemSelector) {
              this.options.itemSelector = '[ngxMasonryItem], ngxMasonryItem';
            }

            this.options['transitionDuration'] = '0s';

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
              // Initialize Masonry
              this.masonryInstance = new masonryConstructor(this._element.nativeElement, this.options); // Bind to events

              this.masonryInstance.on('layoutComplete', function (items) {
                _this3.layoutComplete.emit(items);
              });
              this.masonryInstance.on('removeComplete', function (items) {
                _this3.removeComplete.emit(items);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // only update layout if it's not the first change
            if (changes.updateLayout) {
              if (!changes.updateLayout.firstChange) {
                this.layout();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.masonryInstance) {
              this.masonryInstance.destroy();
            }
          }
        }, {
          key: "layout",
          value: function layout() {
            var _this4 = this;

            setTimeout(function () {
              _this4.masonryInstance.layout();
            });
          }
        }, {
          key: "reloadItems",
          value: function reloadItems() {
            var _this5 = this;

            setTimeout(function () {
              _this5.masonryInstance.reloadItems();
            });
          }
        }, {
          key: "add",
          value: function add(element) {
            var prepend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // Tell Masonry that a child element has been added
            if (prepend) {
              this.masonryInstance.prepended(element);
            } else {
              this.masonryInstance.appended(element);
            } // Check if first item


            if (this.masonryInstance.items.length === 1) {
              this.masonryInstance.layout();
            }
          }
        }, {
          key: "remove",
          value: function remove(element) {
            // Tell Masonry that a child element has been removed
            this.masonryInstance.remove(element); // Layout items

            this.layout();
          }
        }]);

        return NgxMasonryComponent;
      }();

      NgxMasonryComponent.ɵfac = function NgxMasonryComponent_Factory(t) {
        return new (t || NgxMasonryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      NgxMasonryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NgxMasonryComponent,
        selectors: [["", "ngx-masonry", ""], ["ngx-masonry"]],
        inputs: {
          updateLayout: "updateLayout",
          options: "options"
        },
        outputs: {
          layoutComplete: "layoutComplete",
          removeComplete: "removeComplete"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function NgxMasonryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%] {\n\t\t\tdisplay: block;\n\t\t}"]
      });

      NgxMasonryComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], NgxMasonryComponent.prototype, "options", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], NgxMasonryComponent.prototype, "updateLayout", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], NgxMasonryComponent.prototype, "layoutComplete", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], NgxMasonryComponent.prototype, "removeComplete", void 0);
      NgxMasonryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]))], NgxMasonryComponent);

      var NgxMasonryDirective = /*#__PURE__*/function () {
        function NgxMasonryDirective(builder, element, parent, renderer) {
          _classCallCheck(this, NgxMasonryDirective);

          this.builder = builder;
          this.element = element;
          this.parent = parent;
          this.renderer = renderer;
          this.prepend = false;
          this.animations = {
            show: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 1
            }))],
            hide: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: '*'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 0
            }))]
          };
        }

        _createClass(NgxMasonryDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.parent.options.animations !== undefined) {
              this.animations = this.parent.options.animations;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            var images = this.element.nativeElement.getElementsByTagName('img');
            this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
            this.images = new Set(images);

            if (images.length === 0) {
              this.parent.add(this.element.nativeElement, this.prepend);
            } else {
              var _iterator = _createForOfIteratorHelper(images),
                  _step;

              try {
                var _loop = function _loop() {
                  var imageRef = _step.value;

                  _this6.renderer.listen(imageRef, 'load', function (_) {
                    _this6.imageLoaded(imageRef);
                  });

                  _this6.renderer.listen(imageRef, 'error', function (_) {
                    _this6.imageLoaded(imageRef);
                  });
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.images.size === 0 && this.element.nativeElement.parentNode) {
              this.playAnimation(false);
              this.parent.remove(this.element.nativeElement);
            }
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded(image) {
            this.images["delete"](image);

            if (this.images.size === 0) {
              this.renderer.setStyle(this.element.nativeElement, 'opacity', '100');
              this.parent.add(this.element.nativeElement, this.prepend);
              this.playAnimation(true);
            }
          }
        }, {
          key: "playAnimation",
          value: function playAnimation(show) {
            var metadata = show ? this.animations.show : this.animations.hide;

            if (metadata) {
              var player = this.builder.build(metadata).create(this.element.nativeElement);
              player.play();
            }
          }
        }]);

        return NgxMasonryDirective;
      }();

      NgxMasonryDirective.ɵfac = function NgxMasonryDirective_Factory(t) {
        return new (t || NgxMasonryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return NgxMasonryComponent;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]));
      };

      NgxMasonryDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NgxMasonryDirective,
        selectors: [["", "ngxMasonryItem", ""], ["ngxMasonryItem"]],
        inputs: {
          prepend: "prepend"
        }
      });

      NgxMasonryDirective.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: NgxMasonryComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
              return NgxMasonryComponent;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], NgxMasonryDirective.prototype, "prepend", void 0);
      NgxMasonryDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return NgxMasonryComponent;
      })))], NgxMasonryDirective);

      var NgxMasonryModule = function NgxMasonryModule() {
        _classCallCheck(this, NgxMasonryModule);
      };

      NgxMasonryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NgxMasonryModule
      });
      NgxMasonryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NgxMasonryModule_Factory(t) {
          return new (t || NgxMasonryModule)();
        },
        imports: [[]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMasonryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: '[ngx-masonry], ngx-masonry',
            template: '<ng-content></ng-content>',
            styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          updateLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          layoutComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          removeComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMasonryDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[ngxMasonryItem], ngxMasonryItem'
          }]
        }], function () {
          return [{
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: NgxMasonryComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
                return NgxMasonryComponent;
              })]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
          }];
        }, {
          prepend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxMasonryModule, {
          declarations: [NgxMasonryComponent, NgxMasonryDirective],
          exports: [NgxMasonryComponent, NgxMasonryDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMasonryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [],
            declarations: [NgxMasonryComponent, NgxMasonryDirective],
            exports: [NgxMasonryComponent, NgxMasonryDirective]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-masonry
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-masonry.js.map

      /***/

    },

    /***/
    "Hy43":
    /*!*******************************************!*\
      !*** ./node_modules/outlayer/outlayer.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function Hy43(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * Outlayer v2.1.1
      * the brains and guts of a layout library
      * MIT license
      */


      (function (window, factory) {
        'use strict'; // universal module definition

        /* jshint strict: false */

        /* globals define, module, require */

        if (true) {
          // AMD - RequireJS
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! ev-emitter/ev-emitter */
          "CUlp"), __webpack_require__(
          /*! get-size/get-size */
          "QK1G"), __webpack_require__(
          /*! fizzy-ui-utils/utils */
          "YVj6"), __webpack_require__(
          /*! ./item */
          "KK1e")], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(window, EvEmitter, getSize, utils, Item) {
        'use strict'; // ----- vars ----- //

        var console = window.console;
        var jQuery = window.jQuery;

        var noop = function noop() {}; // -------------------------- Outlayer -------------------------- //
        // globally unique identifiers


        var GUID = 0; // internal store of all Outlayer intances

        var instances = {};
        /**
         * @param {Element, String} element
         * @param {Object} options
         * @constructor
         */

        function Outlayer(element, options) {
          var queryElement = utils.getQueryElement(element);

          if (!queryElement) {
            if (console) {
              console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }

            return;
          }

          this.element = queryElement; // add jQuery

          if (jQuery) {
            this.$element = jQuery(this.element);
          } // options


          this.options = utils.extend({}, this.constructor.defaults);
          this.option(options); // add id for Outlayer.getFromElement

          var id = ++GUID;
          this.element.outlayerGUID = id; // expando

          instances[id] = this; // associate via id
          // kick it off

          this._create();

          var isInitLayout = this._getOption('initLayout');

          if (isInitLayout) {
            this.layout();
          }
        } // settings are for internal use only


        Outlayer.namespace = 'outlayer';
        Outlayer.Item = Item; // default options

        Outlayer.defaults = {
          containerStyle: {
            position: 'relative'
          },
          initLayout: true,
          originLeft: true,
          originTop: true,
          resize: true,
          resizeContainer: true,
          // item options
          transitionDuration: '0.4s',
          hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
          },
          visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
          }
        };
        var proto = Outlayer.prototype; // inherit EvEmitter

        utils.extend(proto, EvEmitter.prototype);
        /**
         * set options
         * @param {Object} opts
         */

        proto.option = function (opts) {
          utils.extend(this.options, opts);
        };
        /**
         * get backwards compatible option value, check old name
         */


        proto._getOption = function (option) {
          var oldOption = this.constructor.compatOptions[option];
          return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
        };

        Outlayer.compatOptions = {
          // currentName: oldName
          initLayout: 'isInitLayout',
          horizontal: 'isHorizontal',
          layoutInstant: 'isLayoutInstant',
          originLeft: 'isOriginLeft',
          originTop: 'isOriginTop',
          resize: 'isResizeBound',
          resizeContainer: 'isResizingContainer'
        };

        proto._create = function () {
          // get items from children
          this.reloadItems(); // elements that affect layout, but are not laid out

          this.stamps = [];
          this.stamp(this.options.stamp); // set container style

          utils.extend(this.element.style, this.options.containerStyle); // bind resize method

          var canBindResize = this._getOption('resize');

          if (canBindResize) {
            this.bindResize();
          }
        }; // goes through all children again and gets bricks in proper order


        proto.reloadItems = function () {
          // collection of item elements
          this.items = this._itemize(this.element.children);
        };
        /**
         * turn elements into Outlayer.Items to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - collection of new Outlayer Items
         */


        proto._itemize = function (elems) {
          var itemElems = this._filterFindItemElements(elems);

          var Item = this.constructor.Item; // create new Outlayer Items for collection

          var items = [];

          for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
          }

          return items;
        };
        /**
         * get item elements to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - item elements
         */


        proto._filterFindItemElements = function (elems) {
          return utils.filterFindElements(elems, this.options.itemSelector);
        };
        /**
         * getter method for getting item elements
         * @returns {Array} elems - collection of item elements
         */


        proto.getItemElements = function () {
          return this.items.map(function (item) {
            return item.element;
          });
        }; // ----- init & layout ----- //

        /**
         * lays out all items
         */


        proto.layout = function () {
          this._resetLayout();

          this._manageStamps(); // don't animate first layout


          var layoutInstant = this._getOption('layoutInstant');

          var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
          this.layoutItems(this.items, isInstant); // flag for initalized

          this._isLayoutInited = true;
        }; // _init is alias for layout


        proto._init = proto.layout;
        /**
         * logic before any new layout
         */

        proto._resetLayout = function () {
          this.getSize();
        };

        proto.getSize = function () {
          this.size = getSize(this.element);
        };
        /**
         * get measurement from option, for columnWidth, rowHeight, gutter
         * if option is String -> get element from selector string, & get size of element
         * if option is Element -> get size of element
         * else use option as a number
         *
         * @param {String} measurement
         * @param {String} size - width or height
         * @private
         */


        proto._getMeasurement = function (measurement, size) {
          var option = this.options[measurement];
          var elem;

          if (!option) {
            // default to 0
            this[measurement] = 0;
          } else {
            // use option as an element
            if (typeof option == 'string') {
              elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
              elem = option;
            } // use size of element, if element


            this[measurement] = elem ? getSize(elem)[size] : option;
          }
        };
        /**
         * layout a collection of item elements
         * @api public
         */


        proto.layoutItems = function (items, isInstant) {
          items = this._getItemsForLayout(items);

          this._layoutItems(items, isInstant);

          this._postLayout();
        };
        /**
         * get the items to be laid out
         * you may want to skip over some items
         * @param {Array} items
         * @returns {Array} items
         */


        proto._getItemsForLayout = function (items) {
          return items.filter(function (item) {
            return !item.isIgnored;
          });
        };
        /**
         * layout items
         * @param {Array} items
         * @param {Boolean} isInstant
         */


        proto._layoutItems = function (items, isInstant) {
          this._emitCompleteOnItems('layout', items);

          if (!items || !items.length) {
            // no items, emit event with empty array
            return;
          }

          var queue = [];
          items.forEach(function (item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item); // enqueue


            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
          }, this);

          this._processLayoutQueue(queue);
        };
        /**
         * get item layout position
         * @param {Outlayer.Item} item
         * @returns {Object} x and y position
         */


        proto._getItemLayoutPosition = function ()
        /* item */
        {
          return {
            x: 0,
            y: 0
          };
        };
        /**
         * iterate over array and position each item
         * Reason being - separating this logic prevents 'layout invalidation'
         * thx @paul_irish
         * @param {Array} queue
         */


        proto._processLayoutQueue = function (queue) {
          this.updateStagger();
          queue.forEach(function (obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
          }, this);
        }; // set stagger from option in milliseconds number


        proto.updateStagger = function () {
          var stagger = this.options.stagger;

          if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
          }

          this.stagger = getMilliseconds(stagger);
          return this.stagger;
        };
        /**
         * Sets position of item in DOM
         * @param {Outlayer.Item} item
         * @param {Number} x - horizontal position
         * @param {Number} y - vertical position
         * @param {Boolean} isInstant - disables transitions
         */


        proto._positionItem = function (item, x, y, isInstant, i) {
          if (isInstant) {
            // if not transition, just set CSS
            item.goTo(x, y);
          } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
          }
        };
        /**
         * Any logic you want to do after each layout,
         * i.e. size the container
         */


        proto._postLayout = function () {
          this.resizeContainer();
        };

        proto.resizeContainer = function () {
          var isResizingContainer = this._getOption('resizeContainer');

          if (!isResizingContainer) {
            return;
          }

          var size = this._getContainerSize();

          if (size) {
            this._setContainerMeasure(size.width, true);

            this._setContainerMeasure(size.height, false);
          }
        };
        /**
         * Sets width or height of container if returned
         * @returns {Object} size
         *   @param {Number} width
         *   @param {Number} height
         */


        proto._getContainerSize = noop;
        /**
         * @param {Number} measure - size of width or height
         * @param {Boolean} isWidth
         */

        proto._setContainerMeasure = function (measure, isWidth) {
          if (measure === undefined) {
            return;
          }

          var elemSize = this.size; // add padding and border width if border box

          if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
          }

          measure = Math.max(measure, 0);
          this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
        };
        /**
         * emit eventComplete on a collection of items events
         * @param {String} eventName
         * @param {Array} items - Outlayer.Items
         */


        proto._emitCompleteOnItems = function (eventName, items) {
          var _this = this;

          function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
          }

          var count = items.length;

          if (!items || !count) {
            onComplete();
            return;
          }

          var doneCount = 0;

          function tick() {
            doneCount++;

            if (doneCount == count) {
              onComplete();
            }
          } // bind callback


          items.forEach(function (item) {
            item.once(eventName, tick);
          });
        };
        /**
         * emits events via EvEmitter and jQuery events
         * @param {String} type - name of event
         * @param {Event} event - original event
         * @param {Array} args - extra arguments
         */


        proto.dispatchEvent = function (type, event, args) {
          // add original event to arguments
          var emitArgs = event ? [event].concat(args) : args;
          this.emitEvent(type, emitArgs);

          if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);

            if (event) {
              // create jQuery event
              var $event = jQuery.Event(event);
              $event.type = type;
              this.$element.trigger($event, args);
            } else {
              // just trigger with type if no event available
              this.$element.trigger(type, args);
            }
          }
        }; // -------------------------- ignore & stamps -------------------------- //

        /**
         * keep item in collection, but do not lay it out
         * ignored items do not get skipped in layout
         * @param {Element} elem
         */


        proto.ignore = function (elem) {
          var item = this.getItem(elem);

          if (item) {
            item.isIgnored = true;
          }
        };
        /**
         * return item to layout collection
         * @param {Element} elem
         */


        proto.unignore = function (elem) {
          var item = this.getItem(elem);

          if (item) {
            delete item.isIgnored;
          }
        };
        /**
         * adds elements to stamps
         * @param {NodeList, Array, Element, or String} elems
         */


        proto.stamp = function (elems) {
          elems = this._find(elems);

          if (!elems) {
            return;
          }

          this.stamps = this.stamps.concat(elems); // ignore

          elems.forEach(this.ignore, this);
        };
        /**
         * removes elements to stamps
         * @param {NodeList, Array, or Element} elems
         */


        proto.unstamp = function (elems) {
          elems = this._find(elems);

          if (!elems) {
            return;
          }

          elems.forEach(function (elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
          }, this);
        };
        /**
         * finds child elements
         * @param {NodeList, Array, Element, or String} elems
         * @returns {Array} elems
         */


        proto._find = function (elems) {
          if (!elems) {
            return;
          } // if string, use argument as selector string


          if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
          }

          elems = utils.makeArray(elems);
          return elems;
        };

        proto._manageStamps = function () {
          if (!this.stamps || !this.stamps.length) {
            return;
          }

          this._getBoundingRect();

          this.stamps.forEach(this._manageStamp, this);
        }; // update boundingLeft / Top


        proto._getBoundingRect = function () {
          // get bounding rect for container element
          var boundingRect = this.element.getBoundingClientRect();
          var size = this.size;
          this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
          };
        };
        /**
         * @param {Element} stamp
        **/


        proto._manageStamp = noop;
        /**
         * get x/y position of element relative to container element
         * @param {Element} elem
         * @returns {Object} offset - has left, top, right, bottom
         */

        proto._getElementOffset = function (elem) {
          var boundingRect = elem.getBoundingClientRect();
          var thisRect = this._boundingRect;
          var size = getSize(elem);
          var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
          };
          return offset;
        }; // -------------------------- resize -------------------------- //
        // enable event handlers for listeners
        // i.e. resize -> onresize


        proto.handleEvent = utils.handleEvent;
        /**
         * Bind layout to window resizing
         */

        proto.bindResize = function () {
          window.addEventListener('resize', this);
          this.isResizeBound = true;
        };
        /**
         * Unbind layout to window resizing
         */


        proto.unbindResize = function () {
          window.removeEventListener('resize', this);
          this.isResizeBound = false;
        };

        proto.onresize = function () {
          this.resize();
        };

        utils.debounceMethod(Outlayer, 'onresize', 100);

        proto.resize = function () {
          // don't trigger if size did not change
          // or if resize was unbound. See #9
          if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
          }

          this.layout();
        };
        /**
         * check if layout is needed post layout
         * @returns Boolean
         */


        proto.needsResizeLayout = function () {
          var size = getSize(this.element); // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be

          var hasSizes = this.size && size;
          return hasSizes && size.innerWidth !== this.size.innerWidth;
        }; // -------------------------- methods -------------------------- //

        /**
         * add items to Outlayer instance
         * @param {Array or NodeList or Element} elems
         * @returns {Array} items - Outlayer.Items
        **/


        proto.addItems = function (elems) {
          var items = this._itemize(elems); // add items to collection


          if (items.length) {
            this.items = this.items.concat(items);
          }

          return items;
        };
        /**
         * Layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */


        proto.appended = function (elems) {
          var items = this.addItems(elems);

          if (!items.length) {
            return;
          } // layout and reveal just the new items


          this.layoutItems(items, true);
          this.reveal(items);
        };
        /**
         * Layout prepended elements
         * @param {Array or NodeList or Element} elems
         */


        proto.prepended = function (elems) {
          var items = this._itemize(elems);

          if (!items.length) {
            return;
          } // add items to beginning of collection


          var previousItems = this.items.slice(0);
          this.items = items.concat(previousItems); // start new layout

          this._resetLayout();

          this._manageStamps(); // layout new stuff without transition


          this.layoutItems(items, true);
          this.reveal(items); // layout previous items

          this.layoutItems(previousItems);
        };
        /**
         * reveal a collection of items
         * @param {Array of Outlayer.Items} items
         */


        proto.reveal = function (items) {
          this._emitCompleteOnItems('reveal', items);

          if (!items || !items.length) {
            return;
          }

          var stagger = this.updateStagger();
          items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.reveal();
          });
        };
        /**
         * hide a collection of items
         * @param {Array of Outlayer.Items} items
         */


        proto.hide = function (items) {
          this._emitCompleteOnItems('hide', items);

          if (!items || !items.length) {
            return;
          }

          var stagger = this.updateStagger();
          items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.hide();
          });
        };
        /**
         * reveal item elements
         * @param {Array}, {Element}, {NodeList} items
         */


        proto.revealItemElements = function (elems) {
          var items = this.getItems(elems);
          this.reveal(items);
        };
        /**
         * hide item elements
         * @param {Array}, {Element}, {NodeList} items
         */


        proto.hideItemElements = function (elems) {
          var items = this.getItems(elems);
          this.hide(items);
        };
        /**
         * get Outlayer.Item, given an Element
         * @param {Element} elem
         * @param {Function} callback
         * @returns {Outlayer.Item} item
         */


        proto.getItem = function (elem) {
          // loop through items to get the one that matches
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];

            if (item.element == elem) {
              // return item
              return item;
            }
          }
        };
        /**
         * get collection of Outlayer.Items, given Elements
         * @param {Array} elems
         * @returns {Array} items - Outlayer.Items
         */


        proto.getItems = function (elems) {
          elems = utils.makeArray(elems);
          var items = [];
          elems.forEach(function (elem) {
            var item = this.getItem(elem);

            if (item) {
              items.push(item);
            }
          }, this);
          return items;
        };
        /**
         * remove element(s) from instance and DOM
         * @param {Array or NodeList or Element} elems
         */


        proto.remove = function (elems) {
          var removeItems = this.getItems(elems);

          this._emitCompleteOnItems('remove', removeItems); // bail if no items to remove


          if (!removeItems || !removeItems.length) {
            return;
          }

          removeItems.forEach(function (item) {
            item.remove(); // remove item from collection

            utils.removeFrom(this.items, item);
          }, this);
        }; // ----- destroy ----- //
        // remove and disable Outlayer instance


        proto.destroy = function () {
          // clean up dynamic styles
          var style = this.element.style;
          style.height = '';
          style.position = '';
          style.width = ''; // destroy items

          this.items.forEach(function (item) {
            item.destroy();
          });
          this.unbindResize();
          var id = this.element.outlayerGUID;
          delete instances[id]; // remove reference to instance by id

          delete this.element.outlayerGUID; // remove data for jQuery

          if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
          }
        }; // -------------------------- data -------------------------- //

        /**
         * get Outlayer instance from element
         * @param {Element} elem
         * @returns {Outlayer}
         */


        Outlayer.data = function (elem) {
          elem = utils.getQueryElement(elem);
          var id = elem && elem.outlayerGUID;
          return id && instances[id];
        }; // -------------------------- create Outlayer class -------------------------- //

        /**
         * create a layout class
         * @param {String} namespace
         */


        Outlayer.create = function (namespace, options) {
          // sub-class Outlayer
          var Layout = subclass(Outlayer); // apply new options and compatOptions

          Layout.defaults = utils.extend({}, Outlayer.defaults);
          utils.extend(Layout.defaults, options);
          Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
          Layout.namespace = namespace;
          Layout.data = Outlayer.data; // sub-class Item

          Layout.Item = subclass(Item); // -------------------------- declarative -------------------------- //

          utils.htmlInit(Layout, namespace); // -------------------------- jQuery bridge -------------------------- //
          // make into jQuery plugin

          if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
          }

          return Layout;
        };

        function subclass(Parent) {
          function SubClass() {
            Parent.apply(this, arguments);
          }

          SubClass.prototype = Object.create(Parent.prototype);
          SubClass.prototype.constructor = SubClass;
          return SubClass;
        } // ----- helpers ----- //
        // how many milliseconds are in each unit


        var msUnits = {
          ms: 1,
          s: 1000
        }; // munge time-like parameter into millisecond number
        // '0.4s' -> 40

        function getMilliseconds(time) {
          if (typeof time == 'number') {
            return time;
          }

          var matches = time.match(/(^\d*\.?\d*)(\w*)/);
          var num = matches && matches[1];
          var unit = matches && matches[2];

          if (!num.length) {
            return 0;
          }

          num = parseFloat(num);
          var mult = msUnits[unit] || 1;
          return num * mult;
        } // ----- fin ----- //
        // back in global


        Outlayer.Item = Item;
        return Outlayer;
      });
      /***/

    },

    /***/
    "KK1e":
    /*!***************************************!*\
      !*** ./node_modules/outlayer/item.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function KK1e(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * Outlayer Item
      */


      (function (window, factory) {
        // universal module definition

        /* jshint strict: false */

        /* globals define, module, require */
        if (true) {
          // AMD - RequireJS
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! ev-emitter/ev-emitter */
          "CUlp"), __webpack_require__(
          /*! get-size/get-size */
          "QK1G")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(EvEmitter, getSize) {
        'use strict'; // ----- helpers ----- //

        function isEmptyObj(obj) {
          for (var prop in obj) {
            return false;
          }

          prop = null;
          return true;
        } // -------------------------- CSS3 support -------------------------- //


        var docElemStyle = document.documentElement.style;
        var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
        var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
        var transitionEndEvent = {
          WebkitTransition: 'webkitTransitionEnd',
          transition: 'transitionend'
        }[transitionProperty]; // cache all vendor properties that could have vendor prefix

        var vendorProperties = {
          transform: transformProperty,
          transition: transitionProperty,
          transitionDuration: transitionProperty + 'Duration',
          transitionProperty: transitionProperty + 'Property',
          transitionDelay: transitionProperty + 'Delay'
        }; // -------------------------- Item -------------------------- //

        function Item(element, layout) {
          if (!element) {
            return;
          }

          this.element = element; // parent layout class, i.e. Masonry, Isotope, or Packery

          this.layout = layout;
          this.position = {
            x: 0,
            y: 0
          };

          this._create();
        } // inherit EvEmitter


        var proto = Item.prototype = Object.create(EvEmitter.prototype);
        proto.constructor = Item;

        proto._create = function () {
          // transition objects
          this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
          };
          this.css({
            position: 'absolute'
          });
        }; // trigger specified handler for event type


        proto.handleEvent = function (event) {
          var method = 'on' + event.type;

          if (this[method]) {
            this[method](event);
          }
        };

        proto.getSize = function () {
          this.size = getSize(this.element);
        };
        /**
         * apply CSS styles to element
         * @param {Object} style
         */


        proto.css = function (style) {
          var elemStyle = this.element.style;

          for (var prop in style) {
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
          }
        }; // measure position, and sets it


        proto.getPosition = function () {
          var style = getComputedStyle(this.element);

          var isOriginLeft = this.layout._getOption('originLeft');

          var isOriginTop = this.layout._getOption('originTop');

          var xValue = style[isOriginLeft ? 'left' : 'right'];
          var yValue = style[isOriginTop ? 'top' : 'bottom'];
          var x = parseFloat(xValue);
          var y = parseFloat(yValue); // convert percent to pixels

          var layoutSize = this.layout.size;

          if (xValue.indexOf('%') != -1) {
            x = x / 100 * layoutSize.width;
          }

          if (yValue.indexOf('%') != -1) {
            y = y / 100 * layoutSize.height;
          } // clean up 'auto' or other non-integer values


          x = isNaN(x) ? 0 : x;
          y = isNaN(y) ? 0 : y; // remove padding from measurement

          x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
          y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
          this.position.x = x;
          this.position.y = y;
        }; // set settled position, apply padding


        proto.layoutPosition = function () {
          var layoutSize = this.layout.size;
          var style = {};

          var isOriginLeft = this.layout._getOption('originLeft');

          var isOriginTop = this.layout._getOption('originTop'); // x


          var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
          var xProperty = isOriginLeft ? 'left' : 'right';
          var xResetProperty = isOriginLeft ? 'right' : 'left';
          var x = this.position.x + layoutSize[xPadding]; // set in percentage or pixels

          style[xProperty] = this.getXValue(x); // reset other property

          style[xResetProperty] = ''; // y

          var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
          var yProperty = isOriginTop ? 'top' : 'bottom';
          var yResetProperty = isOriginTop ? 'bottom' : 'top';
          var y = this.position.y + layoutSize[yPadding]; // set in percentage or pixels

          style[yProperty] = this.getYValue(y); // reset other property

          style[yResetProperty] = '';
          this.css(style);
          this.emitEvent('layout', [this]);
        };

        proto.getXValue = function (x) {
          var isHorizontal = this.layout._getOption('horizontal');

          return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + '%' : x + 'px';
        };

        proto.getYValue = function (y) {
          var isHorizontal = this.layout._getOption('horizontal');

          return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + '%' : y + 'px';
        };

        proto._transitionTo = function (x, y) {
          this.getPosition(); // get current x & y from top/left

          var curX = this.position.x;
          var curY = this.position.y;
          var didNotMove = x == this.position.x && y == this.position.y; // save end position

          this.setPosition(x, y); // if did not move and not transitioning, just go to layout

          if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
          }

          var transX = x - curX;
          var transY = y - curY;
          var transitionStyle = {};
          transitionStyle.transform = this.getTranslate(transX, transY);
          this.transition({
            to: transitionStyle,
            onTransitionEnd: {
              transform: this.layoutPosition
            },
            isCleaning: true
          });
        };

        proto.getTranslate = function (x, y) {
          // flip cooridinates if origin on right or bottom
          var isOriginLeft = this.layout._getOption('originLeft');

          var isOriginTop = this.layout._getOption('originTop');

          x = isOriginLeft ? x : -x;
          y = isOriginTop ? y : -y;
          return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
        }; // non transition + transform support


        proto.goTo = function (x, y) {
          this.setPosition(x, y);
          this.layoutPosition();
        };

        proto.moveTo = proto._transitionTo;

        proto.setPosition = function (x, y) {
          this.position.x = parseFloat(x);
          this.position.y = parseFloat(y);
        }; // ----- transition ----- //

        /**
         * @param {Object} style - CSS
         * @param {Function} onTransitionEnd
         */
        // non transition, just trigger callback


        proto._nonTransition = function (args) {
          this.css(args.to);

          if (args.isCleaning) {
            this._removeStyles(args.to);
          }

          for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
          }
        };
        /**
         * proper transition
         * @param {Object} args - arguments
         *   @param {Object} to - style to transition to
         *   @param {Object} from - style to start transition from
         *   @param {Boolean} isCleaning - removes transition styles after transition
         *   @param {Function} onTransitionEnd - callback
         */


        proto.transition = function (args) {
          // redirect to nonTransition if no transition duration
          if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);

            return;
          }

          var _transition = this._transn; // keep track of onTransitionEnd callback by css property

          for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
          } // keep track of properties that are transitioning


          for (prop in args.to) {
            _transition.ingProperties[prop] = true; // keep track of properties to clean up when transition is done

            if (args.isCleaning) {
              _transition.clean[prop] = true;
            }
          } // set from styles


          if (args.from) {
            this.css(args.from); // force redraw. http://blog.alexmaccaw.com/css-transitions

            var h = this.element.offsetHeight; // hack for JSHint to hush about unused var

            h = null;
          } // enable transition


          this.enableTransition(args.to); // set styles that are transitioning

          this.css(args.to);
          this.isTransitioning = true;
        }; // dash before all cap letters, including first for
        // WebkitTransform => -webkit-transform


        function toDashedAll(str) {
          return str.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }

        var transitionProps = 'opacity,' + toDashedAll(transformProperty);

        proto.enableTransition = function ()
        /* style */
        {
          // HACK changing transitionProperty during a transition
          // will cause transition to jump
          if (this.isTransitioning) {
            return;
          } // make `transition: foo, bar, baz` from style object
          // HACK un-comment this when enableTransition can work
          // while a transition is happening
          // var transitionValues = [];
          // for ( var prop in style ) {
          //   // dash-ify camelCased properties like WebkitTransition
          //   prop = vendorProperties[ prop ] || prop;
          //   transitionValues.push( toDashedAll( prop ) );
          // }
          // munge number to millisecond, to match stagger


          var duration = this.layout.options.transitionDuration;
          duration = typeof duration == 'number' ? duration + 'ms' : duration; // enable transition styles

          this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
          }); // listen for transition end event

          this.element.addEventListener(transitionEndEvent, this, false);
        }; // ----- events ----- //


        proto.onwebkitTransitionEnd = function (event) {
          this.ontransitionend(event);
        };

        proto.onotransitionend = function (event) {
          this.ontransitionend(event);
        }; // properties that I munge to make my life easier


        var dashedVendorProperties = {
          '-webkit-transform': 'transform'
        };

        proto.ontransitionend = function (event) {
          // disregard bubbled events from children
          if (event.target !== this.element) {
            return;
          }

          var _transition = this._transn; // get property name of transitioned property, convert to prefix-free

          var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName; // remove property that has completed transitioning

          delete _transition.ingProperties[propertyName]; // check if any properties are still transitioning

          if (isEmptyObj(_transition.ingProperties)) {
            // all properties have completed transitioning
            this.disableTransition();
          } // clean style


          if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
          } // trigger onTransitionEnd callback


          if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
          }

          this.emitEvent('transitionEnd', [this]);
        };

        proto.disableTransition = function () {
          this.removeTransitionStyles();
          this.element.removeEventListener(transitionEndEvent, this, false);
          this.isTransitioning = false;
        };
        /**
         * removes style property from element
         * @param {Object} style
        **/


        proto._removeStyles = function (style) {
          // clean up transition styles
          var cleanStyle = {};

          for (var prop in style) {
            cleanStyle[prop] = '';
          }

          this.css(cleanStyle);
        };

        var cleanTransitionStyle = {
          transitionProperty: '',
          transitionDuration: '',
          transitionDelay: ''
        };

        proto.removeTransitionStyles = function () {
          // remove transition
          this.css(cleanTransitionStyle);
        }; // ----- stagger ----- //


        proto.stagger = function (delay) {
          delay = isNaN(delay) ? 0 : delay;
          this.staggerDelay = delay + 'ms';
        }; // ----- show/hide/remove ----- //
        // remove element from DOM


        proto.removeElem = function () {
          this.element.parentNode.removeChild(this.element); // remove display: none

          this.css({
            display: ''
          });
          this.emitEvent('remove', [this]);
        };

        proto.remove = function () {
          // just remove element if no transition support or no transition
          if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
          } // start transition


          this.once('transitionEnd', function () {
            this.removeElem();
          });
          this.hide();
        };

        proto.reveal = function () {
          delete this.isHidden; // remove display: none

          this.css({
            display: ''
          });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
          onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
          this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
          });
        };

        proto.onRevealTransitionEnd = function () {
          // check if still visible
          // during transition, item may have been hidden
          if (!this.isHidden) {
            this.emitEvent('reveal');
          }
        };
        /**
         * get style property use for hide/reveal transition end
         * @param {String} styleProperty - hiddenStyle/visibleStyle
         * @returns {String}
         */


        proto.getHideRevealTransitionEndProperty = function (styleProperty) {
          var optionStyle = this.layout.options[styleProperty]; // use opacity

          if (optionStyle.opacity) {
            return 'opacity';
          } // get first property


          for (var prop in optionStyle) {
            return prop;
          }
        };

        proto.hide = function () {
          // set flag
          this.isHidden = true; // remove display: none

          this.css({
            display: ''
          });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
          onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
          this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
          });
        };

        proto.onHideTransitionEnd = function () {
          // check if still hidden
          // during transition, item may have been un-hidden
          if (this.isHidden) {
            this.css({
              display: 'none'
            });
            this.emitEvent('hide');
          }
        };

        proto.destroy = function () {
          this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
          });
        };

        return Item;
      });
      /***/

    },

    /***/
    "QK1G":
    /*!*******************************************!*\
      !*** ./node_modules/get-size/get-size.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function QK1G(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * getSize v2.0.3
      * measure size of elements
      * MIT license
      */

      /* jshint browser: true, strict: true, undef: true, unused: true */

      /* globals console: false */


      (function (window, factory) {
        /* jshint strict: false */

        /* globals define, module */
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory() {
        'use strict'; // -------------------------- helpers -------------------------- //
        // get a number from a string, not a percentage

        function getStyleSize(value) {
          var num = parseFloat(value); // not a percent like '100%', and a number

          var isValid = value.indexOf('%') == -1 && !isNaN(num);
          return isValid && num;
        }

        function noop() {}

        var logError = typeof console == 'undefined' ? noop : function (message) {
          console.error(message);
        }; // -------------------------- measurements -------------------------- //

        var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
        var measurementsLength = measurements.length;

        function getZeroSize() {
          var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          };

          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
          }

          return size;
        } // -------------------------- getStyle -------------------------- //

        /**
         * getStyle, get style of element, check for Firefox bug
         * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
         */


        function getStyle(elem) {
          var style = getComputedStyle(elem);

          if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
          }

          return style;
        } // -------------------------- setup -------------------------- //


        var isSetup = false;
        var isBoxSizeOuter;
        /**
         * setup
         * check isBoxSizerOuter
         * do on first getSize() rather than on page load for Firefox bug
         */

        function setup() {
          // setup once
          if (isSetup) {
            return;
          }

          isSetup = true; // -------------------------- box sizing -------------------------- //

          /**
           * Chrome & Safari measure the outer-width on style.width on border-box elems
           * IE11 & Firefox<29 measures the inner-width
           */

          var div = document.createElement('div');
          div.style.width = '200px';
          div.style.padding = '1px 2px 3px 4px';
          div.style.borderStyle = 'solid';
          div.style.borderWidth = '1px 2px 3px 4px';
          div.style.boxSizing = 'border-box';
          var body = document.body || document.documentElement;
          body.appendChild(div);
          var style = getStyle(div); // round value for browser zoom. desandro/masonry#928

          isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
          getSize.isBoxSizeOuter = isBoxSizeOuter;
          body.removeChild(div);
        } // -------------------------- getSize -------------------------- //


        function getSize(elem) {
          setup(); // use querySeletor if elem is string

          if (typeof elem == 'string') {
            elem = document.querySelector(elem);
          } // do not proceed on non-objects


          if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
          }

          var style = getStyle(elem); // if hidden, everything is 0

          if (style.display == 'none') {
            return getZeroSize();
          }

          var size = {};
          size.width = elem.offsetWidth;
          size.height = elem.offsetHeight;
          var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box'; // get all measurements

          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value); // any 'auto', 'medium' value will be 0

            size[measurement] = !isNaN(num) ? num : 0;
          }

          var paddingWidth = size.paddingLeft + size.paddingRight;
          var paddingHeight = size.paddingTop + size.paddingBottom;
          var marginWidth = size.marginLeft + size.marginRight;
          var marginHeight = size.marginTop + size.marginBottom;
          var borderWidth = size.borderLeftWidth + size.borderRightWidth;
          var borderHeight = size.borderTopWidth + size.borderBottomWidth;
          var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; // overwrite width and height if we can get it from style

          var styleWidth = getStyleSize(style.width);

          if (styleWidth !== false) {
            size.width = styleWidth + ( // add padding and border unless it's already including it
            isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
          }

          var styleHeight = getStyleSize(style.height);

          if (styleHeight !== false) {
            size.height = styleHeight + ( // add padding and border unless it's already including it
            isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
          }

          size.innerWidth = size.width - (paddingWidth + borderWidth);
          size.innerHeight = size.height - (paddingHeight + borderHeight);
          size.outerWidth = size.width + marginWidth;
          size.outerHeight = size.height + marginHeight;
          return size;
        }

        return getSize;
      });
      /***/

    },

    /***/
    "YVj6":
    /*!**********************************************!*\
      !*** ./node_modules/fizzy-ui-utils/utils.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function YVj6(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * Fizzy UI utils v2.0.7
      * MIT license
      */

      /*jshint browser: true, undef: true, unused: true, strict: true */


      (function (window, factory) {
        // universal module definition

        /*jshint strict: false */

        /*globals define, module, require */
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! desandro-matches-selector/matches-selector */
          "x0Ue")], __WEBPACK_AMD_DEFINE_RESULT__ = function (matchesSelector) {
            return factory(window, matchesSelector);
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(window, matchesSelector) {
        'use strict';

        var utils = {}; // ----- extend ----- //
        // extends objects

        utils.extend = function (a, b) {
          for (var prop in b) {
            a[prop] = b[prop];
          }

          return a;
        }; // ----- modulo ----- //


        utils.modulo = function (num, div) {
          return (num % div + div) % div;
        }; // ----- makeArray ----- //


        var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

        utils.makeArray = function (obj) {
          if (Array.isArray(obj)) {
            // use object if already an array
            return obj;
          } // return empty array if undefined or null. #6


          if (obj === null || obj === undefined) {
            return [];
          }

          var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';

          if (isArrayLike) {
            // convert nodeList to array
            return arraySlice.call(obj);
          } // array of single index


          return [obj];
        }; // ----- removeFrom ----- //


        utils.removeFrom = function (ary, obj) {
          var index = ary.indexOf(obj);

          if (index != -1) {
            ary.splice(index, 1);
          }
        }; // ----- getParent ----- //


        utils.getParent = function (elem, selector) {
          while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;

            if (matchesSelector(elem, selector)) {
              return elem;
            }
          }
        }; // ----- getQueryElement ----- //
        // use element as selector string


        utils.getQueryElement = function (elem) {
          if (typeof elem == 'string') {
            return document.querySelector(elem);
          }

          return elem;
        }; // ----- handleEvent ----- //
        // enable .ontype to trigger from .addEventListener( elem, 'type' )


        utils.handleEvent = function (event) {
          var method = 'on' + event.type;

          if (this[method]) {
            this[method](event);
          }
        }; // ----- filterFindElements ----- //


        utils.filterFindElements = function (elems, selector) {
          // make array of elems
          elems = utils.makeArray(elems);
          var ffElems = [];
          elems.forEach(function (elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) {
              return;
            } // add elem if no selector


            if (!selector) {
              ffElems.push(elem);
              return;
            } // filter & find items if we have a selector
            // filter


            if (matchesSelector(elem, selector)) {
              ffElems.push(elem);
            } // find children


            var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

            for (var i = 0; i < childElems.length; i++) {
              ffElems.push(childElems[i]);
            }
          });
          return ffElems;
        }; // ----- debounceMethod ----- //


        utils.debounceMethod = function (_class, methodName, threshold) {
          threshold = threshold || 100; // original method

          var method = _class.prototype[methodName];
          var timeoutName = methodName + 'Timeout';

          _class.prototype[methodName] = function () {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;

            var _this = this;

            this[timeoutName] = setTimeout(function () {
              method.apply(_this, args);
              delete _this[timeoutName];
            }, threshold);
          };
        }; // ----- docReady ----- //


        utils.docReady = function (callback) {
          var readyState = document.readyState;

          if (readyState == 'complete' || readyState == 'interactive') {
            // do async to allow for other scripts to run. metafizzy/flickity#441
            setTimeout(callback);
          } else {
            document.addEventListener('DOMContentLoaded', callback);
          }
        }; // ----- htmlInit ----- //
        // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


        utils.toDashed = function (str) {
          return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
            return $1 + '-' + $2;
          }).toLowerCase();
        };

        var console = window.console;
        /**
         * allow user to initialize classes via [data-namespace] or .js-namespace class
         * htmlInit( Widget, 'widgetName' )
         * options are parsed from data-namespace-options
         */

        utils.htmlInit = function (WidgetClass, namespace) {
          utils.docReady(function () {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function (elem) {
              var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
              var options;

              try {
                options = attr && JSON.parse(attr);
              } catch (error) {
                // log error, do not initialize
                if (console) {
                  console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                }

                return;
              } // initialize


              var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

              if (jQuery) {
                jQuery.data(elem, namespace, instance);
              }
            });
          });
        }; // -----  ----- //


        return utils;
      });
      /***/

    },

    /***/
    "hNNL":
    /*!************************************************!*\
      !*** ./node_modules/masonry-layout/masonry.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function hNNL(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * Masonry v4.2.2
      * Cascading grid layout library
      * https://masonry.desandro.com
      * MIT License
      * by David DeSandro
      */


      (function (window, factory) {
        // universal module definition

        /* jshint strict: false */

        /*globals define, module, require */
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! outlayer/outlayer */
          "Hy43"), __webpack_require__(
          /*! get-size/get-size */
          "QK1G")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(Outlayer, getSize) {
        'use strict'; // -------------------------- masonryDefinition -------------------------- //
        // create an Outlayer layout class

        var Masonry = Outlayer.create('masonry'); // isFitWidth -> fitWidth

        Masonry.compatOptions.fitWidth = 'isFitWidth';
        var proto = Masonry.prototype;

        proto._resetLayout = function () {
          this.getSize();

          this._getMeasurement('columnWidth', 'outerWidth');

          this._getMeasurement('gutter', 'outerWidth');

          this.measureColumns(); // reset column Y

          this.colYs = [];

          for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
          }

          this.maxY = 0;
          this.horizontalColIndex = 0;
        };

        proto.measureColumns = function () {
          this.getContainerWidth(); // if columnWidth is 0, default to outerWidth of first item

          if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element; // columnWidth fall back to item of first element

            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
            this.containerWidth;
          }

          var columnWidth = this.columnWidth += this.gutter; // calculate columns

          var containerWidth = this.containerWidth + this.gutter;
          var cols = containerWidth / columnWidth; // fix rounding errors, typically with gutters

          var excess = columnWidth - containerWidth % columnWidth; // if overshoot is less than a pixel, round up, otherwise floor it

          var mathMethod = excess && excess < 1 ? 'round' : 'floor';
          cols = Math[mathMethod](cols);
          this.cols = Math.max(cols, 1);
        };

        proto.getContainerWidth = function () {
          // container is parent if fit width
          var isFitWidth = this._getOption('fitWidth');

          var container = isFitWidth ? this.element.parentNode : this.element; // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be

          var size = getSize(container);
          this.containerWidth = size && size.innerWidth;
        };

        proto._getItemLayoutPosition = function (item) {
          item.getSize(); // how many columns does this brick span

          var remainder = item.size.outerWidth % this.columnWidth;
          var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil'; // round if off by 1 pixel, otherwise use ceil

          var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
          colSpan = Math.min(colSpan, this.cols); // use horizontal or top column position

          var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
          var colPosition = this[colPosMethod](colSpan, item); // position the brick

          var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
          }; // apply setHeight to necessary columns

          var setHeight = colPosition.y + item.size.outerHeight;
          var setMax = colSpan + colPosition.col;

          for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
          }

          return position;
        };

        proto._getTopColPosition = function (colSpan) {
          var colGroup = this._getTopColGroup(colSpan); // get the minimum Y value from the columns


          var minimumY = Math.min.apply(Math, colGroup);
          return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
          };
        };
        /**
         * @param {Number} colSpan - number of columns the element spans
         * @returns {Array} colGroup
         */


        proto._getTopColGroup = function (colSpan) {
          if (colSpan < 2) {
            // if brick spans only one column, use all the column Ys
            return this.colYs;
          }

          var colGroup = []; // how many different places could this brick fit horizontally

          var groupCount = this.cols + 1 - colSpan; // for each group potential horizontal position

          for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
          }

          return colGroup;
        };

        proto._getColGroupY = function (col, colSpan) {
          if (colSpan < 2) {
            return this.colYs[col];
          } // make an array of colY values for that one group


          var groupColYs = this.colYs.slice(col, col + colSpan); // and get the max value of the array

          return Math.max.apply(Math, groupColYs);
        }; // get column position based on horizontal index. #873


        proto._getHorizontalColPosition = function (colSpan, item) {
          var col = this.horizontalColIndex % this.cols;
          var isOver = colSpan > 1 && col + colSpan > this.cols; // shift to next row if item can't fit on current row

          col = isOver ? 0 : col; // don't let zero-size items take up space

          var hasSize = item.size.outerWidth && item.size.outerHeight;
          this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
          return {
            col: col,
            y: this._getColGroupY(col, colSpan)
          };
        };

        proto._manageStamp = function (stamp) {
          var stampSize = getSize(stamp);

          var offset = this._getElementOffset(stamp); // get the columns that this stamp affects


          var isOriginLeft = this._getOption('originLeft');

          var firstX = isOriginLeft ? offset.left : offset.right;
          var lastX = firstX + stampSize.outerWidth;
          var firstCol = Math.floor(firstX / this.columnWidth);
          firstCol = Math.max(0, firstCol);
          var lastCol = Math.floor(lastX / this.columnWidth); // lastCol should not go over if multiple of columnWidth #425

          lastCol -= lastX % this.columnWidth ? 0 : 1;
          lastCol = Math.min(this.cols - 1, lastCol); // set colYs to bottom of the stamp

          var isOriginTop = this._getOption('originTop');

          var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;

          for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
          }
        };

        proto._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var size = {
            height: this.maxY
          };

          if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
          }

          return size;
        };

        proto._getContainerFitWidth = function () {
          var unusedCols = 0; // count unused columns

          var i = this.cols;

          while (--i) {
            if (this.colYs[i] !== 0) {
              break;
            }

            unusedCols++;
          } // fit container to columns that have been used


          return (this.cols - unusedCols) * this.columnWidth - this.gutter;
        };

        proto.needsResizeLayout = function () {
          var previousWidth = this.containerWidth;
          this.getContainerWidth();
          return previousWidth != this.containerWidth;
        };

        return Masonry;
      });
      /***/

    },

    /***/
    "x0Ue":
    /*!********************************************************************!*\
      !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function x0Ue(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * matchesSelector v2.0.2
      * matchesSelector( element, '.selector' )
      * MIT license
      */

      /*jshint browser: true, strict: true, undef: true, unused: true */


      (function (window, factory) {
        /*global define: false, module: false */
        'use strict'; // universal module definition

        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory() {
        'use strict';

        var matchesMethod = function () {
          var ElemProto = window.Element.prototype; // check for the standard method name first

          if (ElemProto.matches) {
            return 'matches';
          } // check un-prefixed


          if (ElemProto.matchesSelector) {
            return 'matchesSelector';
          } // check vendor prefixes


          var prefixes = ['webkit', 'moz', 'ms', 'o'];

          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';

            if (ElemProto[method]) {
              return method;
            }
          }
        }();

        return function matchesSelector(elem, selector) {
          return elem[matchesMethod](selector);
        };
      });
      /***/

    },

    /***/
    "x997":
    /*!***********************************************!*\
      !*** ./src/app/content/pages/pages.module.ts ***!
      \***********************************************/

    /*! exports provided: PagesModule */

    /***/
    function x997(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
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


      var _drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drawer.service */
      "+6zA");
      /* harmony import */


      var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gaxon/modules */
      "1u1q");
      /* harmony import */


      var _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blank/blank.component */
      "AfIt");
      /* harmony import */


      var ngx_masonry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-masonry */
      "EygD");

      var appsRoutes = [// {
      //   path: 'filling',
      //   loadChildren: () => import('./filling/filling.module').then(m => m.FillingModule)
      // },
      {
        path: 'main-block',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | main-block-main-block-module */
          [__webpack_require__.e("default~layouts-auth-layout-auth-module~main-block-main-block-module~master-data-master-data-module~~af56ae8a"), __webpack_require__.e("main-block-main-block-module")]).then(__webpack_require__.bind(null,
          /*! ./main-block/main-block.module */
          "d8wM")).then(function (m) {
            return m.MainBlockModule;
          });
        }
      }, {
        path: 'tickets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mail-mail-module */
          "mail-mail-module").then(__webpack_require__.bind(null,
          /*! ./mail/mail.module */
          "EuXM")).then(function (m) {
            return m.MailModule;
          });
        }
      }, {
        path: 'ticket',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ticket-managment-ticket-managment-module */
          [__webpack_require__.e("default~layouts-auth-layout-auth-module~main-block-main-block-module~master-data-master-data-module~~af56ae8a"), __webpack_require__.e("default~master-data-master-data-module~ticket-managment-ticket-managment-module"), __webpack_require__.e("ticket-managment-ticket-managment-module")]).then(__webpack_require__.bind(null,
          /*! ./ticket-managment/ticket-managment.module */
          "PWcr")).then(function (m) {
            return m.TicketManagmentModule;
          });
        }
      }, {
        path: 'master',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | master-data-master-data-module */
          [__webpack_require__.e("default~layouts-auth-layout-auth-module~main-block-main-block-module~master-data-master-data-module~~af56ae8a"), __webpack_require__.e("default~master-data-master-data-module~ticket-managment-ticket-managment-module"), __webpack_require__.e("master-data-master-data-module")]).then(__webpack_require__.bind(null,
          /*! ./master-data/master-data.module */
          "jzxS")).then(function (m) {
            return m.MasterDataModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | zoho-zoho-module */
          [__webpack_require__.e("default~layouts-auth-layout-auth-module~main-block-main-block-module~master-data-master-data-module~~af56ae8a"), __webpack_require__.e("zoho-zoho-module")]).then(__webpack_require__.bind(null,
          /*! ./zoho/zoho.module */
          "8hGK")).then(function (m) {
            return m.ZohoModule;
          });
        }
      }];

      var PagesModule = function PagesModule() {
        _classCallCheck(this, PagesModule);
      };

      PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PagesModule
      });
      PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        providers: [_drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsRoutes), ngx_masonry__WEBPACK_IMPORTED_MODULE_6__["NgxMasonryModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
          declarations: [_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_masonry__WEBPACK_IMPORTED_MODULE_6__["NgxMasonryModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsRoutes), ngx_masonry__WEBPACK_IMPORTED_MODULE_6__["NgxMasonryModule"]],
            declarations: [_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"]],
            providers: [_drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-content-pages-pages-module-es5.js.map