(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~master-data-master-data-module~ticket-managment-ticket-managment-module"], {
    /***/
    "+cgn":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
      \*************************************************************************************************************/

    /*! exports provided: ObjectUnsubscribedError */

    /***/
    function cgn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function () {
        return ObjectUnsubscribedError;
      });

      var ObjectUnsubscribedErrorImpl = function () {
        function ObjectUnsubscribedErrorImpl() {
          Error.call(this);
          this.message = 'object unsubscribed';
          this.name = 'ObjectUnsubscribedError';
          return this;
        }

        ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
        return ObjectUnsubscribedErrorImpl;
      }();

      var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

      /***/
    },

    /***/
    "+dYC":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js ***!
      \****************************************************************************************************/

    /*! exports provided: scheduled */

    /***/
    function dYC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scheduled", function () {
        return scheduled;
      });
      /* harmony import */


      var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scheduleObservable */
      "h+0h");
      /* harmony import */


      var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./schedulePromise */
      "75ax");
      /* harmony import */


      var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scheduleArray */
      "cRG+");
      /* harmony import */


      var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scheduleIterable */
      "2tee");
      /* harmony import */


      var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/isInteropObservable */
      "RRAU");
      /* harmony import */


      var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/isPromise */
      "B2bc");
      /* harmony import */


      var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../util/isArrayLike */
      "Et9T");
      /* harmony import */


      var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../util/isIterable */
      "hnwd");

      function scheduled(input, scheduler) {
        if (input != null) {
          if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
            return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
          } else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
            return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
          } else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
            return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
          } else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
            return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
          }
        }

        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
      } //# sourceMappingURL=scheduled.js.map

      /***/

    },

    /***/
    "/iSe":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
      \******************************************************************************************/

    /*! exports provided: DataTableDirective */

    /***/
    function iSe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
        return DataTableDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "JpEC");
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var DataTableDirective =
      /** @class */
      function () {
        function DataTableDirective(el) {
          this.el = el;
          /**
           * The DataTable option you pass to configure your table.
           */

          this.dtOptions = {};
        }

        DataTableDirective.prototype.ngOnInit = function () {
          var _this = this;

          if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
              _this.displayTable();
            });
          } else {
            this.displayTable();
          }
        };

        DataTableDirective.prototype.ngOnDestroy = function () {
          if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
          }

          if (this.dt) {
            this.dt.destroy(true);
          }
        };

        DataTableDirective.prototype.displayTable = function () {
          var _this = this;

          this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
              // Using setTimeout as a "hack" to be "part" of NgZone
              setTimeout(function () {
                // Assign DT properties here
                var options = {
                  rowCallback: function rowCallback(row, data, index) {
                    if (dtOptions.columns) {
                      var columns_1 = dtOptions.columns; // Filter columns with pipe declared

                      var colsWithPipe = columns_1.filter(function (x) {
                        return x.ngPipeInstance;
                      }); // Iterate

                      colsWithPipe.forEach(function (el) {
                        var pipe = el.ngPipeInstance; // find index of column using `data` attr

                        var i = columns_1.findIndex(function (e) {
                          return e.data == el.data;
                        }); // get <td> element which holds data using index

                        var rowFromCol = row.childNodes.item(i); // Transform data with Pipe

                        var rowVal = $(rowFromCol).text();
                        var rowValAfter = pipe.transform(rowVal); // Apply transformed string to <td>

                        $(rowFromCol).text(rowValAfter);
                      });
                    } // run user specified row callback if provided.


                    if (_this.dtOptions.rowCallback) {
                      _this.dtOptions.rowCallback(row, data, index);
                    }
                  }
                }; // merge user's config with ours

                options = Object.assign({}, dtOptions, options);
                _this.dt = $(_this.el.nativeElement).DataTable(options);
                resolve(_this.dt);
              });
            });
          });
        };

        DataTableDirective.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        };

        DataTableDirective.propDecorators = {
          dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        };

        DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
          return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
        };

        DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DataTableDirective,
          selectors: [["", "datatable", ""]],
          inputs: {
            dtOptions: "dtOptions",
            dtTrigger: "dtTrigger"
          }
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
            args: [{
              selector: '[datatable]'
            }]
          }], function () {
            return [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }];
          }, {
            dtOptions: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            dtTrigger: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          });
        })();

        return DataTableDirective;
      }(); //# sourceMappingURL=angular-datatables.directive.js.map

      /***/

    },

    /***/
    "0SeN":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js ***!
      \************************************************************************************************************/

    /*! exports provided: fromEventPattern */

    /***/
    function SeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromEventPattern", function () {
        return fromEventPattern;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isFunction */
      "ybNo");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../operators/map */
      "k3Lq");

      function fromEventPattern(addHandler, removeHandler, resultSelector) {
        if (resultSelector) {
          return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) {
            return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
          }));
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var handler = function handler() {
            for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
              e[_key] = arguments[_key];
            }

            return subscriber.next(e.length === 1 ? e[0] : e);
          };

          var retValue;

          try {
            retValue = addHandler(handler);
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }

          if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
          }

          return function () {
            return removeHandler(handler, retValue);
          };
        });
      } //# sourceMappingURL=fromEventPattern.js.map

      /***/

    },

    /***/
    "0y44":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js ***!
      \********************************************************************************************************/

    /*! exports provided: subscribeToPromise */

    /***/
    function y44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function () {
        return subscribeToPromise;
      });
      /* harmony import */


      var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hostReportError */
      "F/EN");

      var subscribeToPromise = function subscribeToPromise(promise) {
        return function (subscriber) {
          promise.then(function (value) {
            if (!subscriber.closed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function (err) {
            return subscriber.error(err);
          }).then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
          return subscriber;
        };
      }; //# sourceMappingURL=subscribeToPromise.js.map

      /***/

    },

    /***/
    "10dc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
      \***********************************************************************************************/

    /*! exports provided: zip, ZipOperator, ZipSubscriber */

    /***/
    function dc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "zip", function () {
        return zip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZipOperator", function () {
        return ZipOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function () {
        return ZipSubscriber;
      });
      /* harmony import */


      var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fromArray */
      "oNEL");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");
      /* harmony import */


      var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../internal/symbol/iterator */
      "9yG4");
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../innerSubscribe */
      "cipC");

      function zip() {
        for (var _len2 = arguments.length, observables = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          observables[_key2] = arguments[_key2];
        }

        var resultSelector = observables[observables.length - 1];

        if (typeof resultSelector === 'function') {
          observables.pop();
        }

        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
      }

      var ZipOperator = /*#__PURE__*/function () {
        function ZipOperator(resultSelector) {
          _classCallCheck(this, ZipOperator);

          this.resultSelector = resultSelector;
        }

        _createClass(ZipOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
          }
        }]);

        return ZipOperator;
      }();

      var ZipSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(ZipSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(ZipSubscriber);

        function ZipSubscriber(destination, resultSelector) {
          var _this2;

          var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.create(null);

          _classCallCheck(this, ZipSubscriber);

          _this2 = _super.call(this, destination);
          _this2.resultSelector = resultSelector;
          _this2.iterators = [];
          _this2.active = 0;
          _this2.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
          return _this2;
        }

        _createClass(ZipSubscriber, [{
          key: "_next",
          value: function _next(value) {
            var iterators = this.iterators;

            if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
              iterators.push(new StaticArrayIterator(value));
            } else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]] === 'function') {
              iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]()));
            } else {
              iterators.push(new ZipBufferIterator(this.destination, this, value));
            }
          }
        }, {
          key: "_complete",
          value: function _complete() {
            var iterators = this.iterators;
            var len = iterators.length;
            this.unsubscribe();

            if (len === 0) {
              this.destination.complete();
              return;
            }

            this.active = len;

            for (var i = 0; i < len; i++) {
              var iterator = iterators[i];

              if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe());
              } else {
                this.active--;
              }
            }
          }
        }, {
          key: "notifyInactive",
          value: function notifyInactive() {
            this.active--;

            if (this.active === 0) {
              this.destination.complete();
            }
          }
        }, {
          key: "checkIterators",
          value: function checkIterators() {
            var iterators = this.iterators;
            var len = iterators.length;
            var destination = this.destination;

            for (var i = 0; i < len; i++) {
              var iterator = iterators[i];

              if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
              }
            }

            var shouldComplete = false;
            var args = [];

            for (var _i = 0; _i < len; _i++) {
              var _iterator = iterators[_i];

              var result = _iterator.next();

              if (_iterator.hasCompleted()) {
                shouldComplete = true;
              }

              if (result.done) {
                destination.complete();
                return;
              }

              args.push(result.value);
            }

            if (this.resultSelector) {
              this._tryresultSelector(args);
            } else {
              destination.next(args);
            }

            if (shouldComplete) {
              destination.complete();
            }
          }
        }, {
          key: "_tryresultSelector",
          value: function _tryresultSelector(args) {
            var result;

            try {
              result = this.resultSelector.apply(this, args);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            this.destination.next(result);
          }
        }]);

        return ZipSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

      var StaticIterator = /*#__PURE__*/function () {
        function StaticIterator(iterator) {
          _classCallCheck(this, StaticIterator);

          this.iterator = iterator;
          this.nextResult = iterator.next();
        }

        _createClass(StaticIterator, [{
          key: "hasValue",
          value: function hasValue() {
            return true;
          }
        }, {
          key: "next",
          value: function next() {
            var result = this.nextResult;
            this.nextResult = this.iterator.next();
            return result;
          }
        }, {
          key: "hasCompleted",
          value: function hasCompleted() {
            var nextResult = this.nextResult;
            return Boolean(nextResult && nextResult.done);
          }
        }]);

        return StaticIterator;
      }();

      var StaticArrayIterator = /*#__PURE__*/function () {
        function StaticArrayIterator(array) {
          _classCallCheck(this, StaticArrayIterator);

          this.array = array;
          this.index = 0;
          this.length = 0;
          this.length = array.length;
        }

        _createClass(StaticArrayIterator, [{
          key: _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"],
          value: function value() {
            return this;
          }
        }, {
          key: "next",
          value: function next(value) {
            var i = this.index++;
            var array = this.array;
            return i < this.length ? {
              value: array[i],
              done: false
            } : {
              value: null,
              done: true
            };
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.array.length > this.index;
          }
        }, {
          key: "hasCompleted",
          value: function hasCompleted() {
            return this.array.length === this.index;
          }
        }]);

        return StaticArrayIterator;
      }();

      var ZipBufferIterator = /*#__PURE__*/function (_innerSubscribe__WEBP) {
        _inherits(ZipBufferIterator, _innerSubscribe__WEBP);

        var _super2 = _createSuper(ZipBufferIterator);

        function ZipBufferIterator(destination, parent, observable) {
          var _this3;

          _classCallCheck(this, ZipBufferIterator);

          _this3 = _super2.call(this, destination);
          _this3.parent = parent;
          _this3.observable = observable;
          _this3.stillUnsubscribed = true;
          _this3.buffer = [];
          _this3.isComplete = false;
          return _this3;
        }

        _createClass(ZipBufferIterator, [{
          key: _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"],
          value: function value() {
            return this;
          }
        }, {
          key: "next",
          value: function next() {
            var buffer = this.buffer;

            if (buffer.length === 0 && this.isComplete) {
              return {
                value: null,
                done: true
              };
            } else {
              return {
                value: buffer.shift(),
                done: false
              };
            }
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.buffer.length > 0;
          }
        }, {
          key: "hasCompleted",
          value: function hasCompleted() {
            return this.buffer.length === 0 && this.isComplete;
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {
            if (this.buffer.length > 0) {
              this.isComplete = true;
              this.parent.notifyInactive();
            } else {
              this.destination.complete();
            }
          }
        }, {
          key: "notifyNext",
          value: function notifyNext(innerValue) {
            this.buffer.push(innerValue);
            this.parent.checkIterators();
          }
        }, {
          key: "subscribe",
          value: function subscribe() {
            return Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["innerSubscribe"])(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleInnerSubscriber"](this));
          }
        }]);

        return ZipBufferIterator;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleOuterSubscriber"]); //# sourceMappingURL=zip.js.map

      /***/

    },

    /***/
    "1Y+u":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/concatAll.js ***!
      \****************************************************************************************************/

    /*! exports provided: concatAll */

    /***/
    function YU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concatAll", function () {
        return concatAll;
      });
      /* harmony import */


      var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mergeAll */
      "lVuj");

      function concatAll() {
        return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
      } //# sourceMappingURL=concatAll.js.map

      /***/

    },

    /***/
    "1luJ":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
      \*********************************************************************************************************/

    /*! exports provided: AsyncScheduler */

    /***/
    function luJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function () {
        return AsyncScheduler;
      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      "TrSG");

      var AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super3 = _createSuper(AsyncScheduler);

        function AsyncScheduler(SchedulerAction) {
          var _this4;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].now;

          _classCallCheck(this, AsyncScheduler);

          _this4 = _super3.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _assertThisInitialized(_this4)) {
              return AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this4.actions = [];
          _this4.active = false;
          _this4.scheduled = undefined;
          return _this4;
        }

        _createClass(AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
              return AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"]); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    "2LQl":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/using.js ***!
      \*************************************************************************************************/

    /*! exports provided: using */

    /***/
    function LQl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "using", function () {
        return using;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./from */
      "F0B0");
      /* harmony import */


      var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./empty */
      "KpRf");

      function using(resourceFactory, observableFactory) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var resource;

          try {
            resource = resourceFactory();
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }

          var result;

          try {
            result = observableFactory(resource);
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }

          var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
          var subscription = source.subscribe(subscriber);
          return function () {
            subscription.unsubscribe();

            if (resource) {
              resource.unsubscribe();
            }
          };
        });
      } //# sourceMappingURL=using.js.map

      /***/

    },

    /***/
    "2tee":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js ***!
      \***********************************************************************************************************/

    /*! exports provided: scheduleIterable */

    /***/
    function tee(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scheduleIterable", function () {
        return scheduleIterable;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");
      /* harmony import */


      var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../symbol/iterator */
      "9yG4");

      function scheduleIterable(input, scheduler) {
        if (!input) {
          throw new Error('Iterable cannot be null');
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
          var iterator;
          sub.add(function () {
            if (iterator && typeof iterator["return"] === 'function') {
              iterator["return"]();
            }
          });
          sub.add(scheduler.schedule(function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
            sub.add(scheduler.schedule(function () {
              if (subscriber.closed) {
                return;
              }

              var value;
              var done;

              try {
                var result = iterator.next();
                value = result.value;
                done = result.done;
              } catch (err) {
                subscriber.error(err);
                return;
              }

              if (done) {
                subscriber.complete();
              } else {
                subscriber.next(value);
                this.schedule();
              }
            }));
          }));
          return sub;
        });
      } //# sourceMappingURL=scheduleIterable.js.map

      /***/

    },

    /***/
    "2zI2":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js ***!
      \******************************************************************************************************/

    /*! exports provided: subscribeToArray */

    /***/
    function zI2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeToArray", function () {
        return subscribeToArray;
      });

      var subscribeToArray = function subscribeToArray(array) {
        return function (subscriber) {
          for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
          }

          subscriber.complete();
        };
      }; //# sourceMappingURL=subscribeToArray.js.map

      /***/

    },

    /***/
    "4Hwq":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
      \***********************************************************************************************/

    /*! exports provided: asapScheduler, asap */

    /***/
    function Hwq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asapScheduler", function () {
        return asapScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asap", function () {
        return asap;
      });
      /* harmony import */


      var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsapAction */
      "Ani/");
      /* harmony import */


      var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsapScheduler */
      "s9jB");

      var asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
      var asap = asapScheduler; //# sourceMappingURL=asap.js.map

      /***/
    },

    /***/
    "4nUx":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/filter.js ***!
      \*************************************************************************************************/

    /*! exports provided: filter */

    /***/
    function nUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filter", function () {
        return filter;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");

      function filter(predicate, thisArg) {
        return function filterOperatorFunction(source) {
          return source.lift(new FilterOperator(predicate, thisArg));
        };
      }

      var FilterOperator = /*#__PURE__*/function () {
        function FilterOperator(predicate, thisArg) {
          _classCallCheck(this, FilterOperator);

          this.predicate = predicate;
          this.thisArg = thisArg;
        }

        _createClass(FilterOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
          }
        }]);

        return FilterOperator;
      }();

      var FilterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
        _inherits(FilterSubscriber, _Subscriber__WEBPACK_2);

        var _super4 = _createSuper(FilterSubscriber);

        function FilterSubscriber(destination, predicate, thisArg) {
          var _this5;

          _classCallCheck(this, FilterSubscriber);

          _this5 = _super4.call(this, destination);
          _this5.predicate = predicate;
          _this5.thisArg = thisArg;
          _this5.count = 0;
          return _this5;
        }

        _createClass(FilterSubscriber, [{
          key: "_next",
          value: function _next(value) {
            var result;

            try {
              result = this.predicate.call(this.thisArg, value, this.count++);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            if (result) {
              this.destination.next(value);
            }
          }
        }]);

        return FilterSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=filter.js.map

      /***/

    },

    /***/
    "6Bj3":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
      \******************************************************************************************************************/

    /*! exports provided: AnimationFrameScheduler */

    /***/
    function Bj3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function () {
        return AnimationFrameScheduler;
      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      "1luJ");

      var AnimationFrameScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP) {
        _inherits(AnimationFrameScheduler, _AsyncScheduler__WEBP);

        var _super5 = _createSuper(AnimationFrameScheduler);

        function AnimationFrameScheduler() {
          _classCallCheck(this, AnimationFrameScheduler);

          return _super5.apply(this, arguments);
        }

        _createClass(AnimationFrameScheduler, [{
          key: "flush",
          value: function flush(action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (++index < count && (action = actions.shift()));

            this.active = false;

            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return AnimationFrameScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=AnimationFrameScheduler.js.map

      /***/

    },

    /***/
    "6Jry":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js ***!
      \************************************************************************************************************/

    /*! exports provided: bindNodeCallback */

    /***/
    function Jry(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function () {
        return bindNodeCallback;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../AsyncSubject */
      "y7uT");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../operators/map */
      "k3Lq");
      /* harmony import */


      var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/canReportError */
      "OKNj");
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");

      function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
        if (resultSelector) {
          if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
          } else {
            return function () {
              return bindNodeCallback(callbackFunc, scheduler).apply(void 0, arguments).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
                return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
              }));
            };
          }
        }

        return function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this
          };
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var context = params.context;
            var subject = params.subject;

            if (!scheduler) {
              if (!subject) {
                subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

                var handler = function handler() {
                  for (var _len4 = arguments.length, innerArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    innerArgs[_key4] = arguments[_key4];
                  }

                  var err = innerArgs.shift();

                  if (err) {
                    subject.error(err);
                    return;
                  }

                  subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                  subject.complete();
                };

                try {
                  callbackFunc.apply(context, [].concat(args, [handler]));
                } catch (err) {
                  if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                    subject.error(err);
                  } else {
                    console.warn(err);
                  }
                }
              }

              return subject.subscribe(subscriber);
            } else {
              return scheduler.schedule(dispatch, 0, {
                params: params,
                subscriber: subscriber,
                context: context
              });
            }
          });
        };
      }

      function dispatch(state) {
        var _this6 = this;

        var params = state.params,
            subscriber = state.subscriber,
            context = state.context;
        var callbackFunc = params.callbackFunc,
            args = params.args,
            scheduler = params.scheduler;
        var subject = params.subject;

        if (!subject) {
          subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          var handler = function handler() {
            for (var _len5 = arguments.length, innerArgs = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              innerArgs[_key5] = arguments[_key5];
            }

            var err = innerArgs.shift();

            if (err) {
              _this6.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subject: subject
              }));
            } else {
              var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

              _this6.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subject: subject
              }));
            }
          };

          try {
            callbackFunc.apply(context, [].concat(_toConsumableArray(args), [handler]));
          } catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, {
              err: err,
              subject: subject
            }));
          }
        }

        this.add(subject.subscribe(subscriber));
      }

      function dispatchNext(arg) {
        var value = arg.value,
            subject = arg.subject;
        subject.next(value);
        subject.complete();
      }

      function dispatchError(arg) {
        var err = arg.err,
            subject = arg.subject;
        subject.error(err);
      } //# sourceMappingURL=bindNodeCallback.js.map

      /***/

    },

    /***/
    "75ax":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js ***!
      \**********************************************************************************************************/

    /*! exports provided: schedulePromise */

    /***/
    function ax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "schedulePromise", function () {
        return schedulePromise;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");

      function schedulePromise(input, scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
          sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
              sub.add(scheduler.schedule(function () {
                subscriber.next(value);
                sub.add(scheduler.schedule(function () {
                  return subscriber.complete();
                }));
              }));
            }, function (err) {
              sub.add(scheduler.schedule(function () {
                return subscriber.error(err);
              }));
            });
          }));
          return sub;
        });
      } //# sourceMappingURL=schedulePromise.js.map

      /***/

    },

    /***/
    "8Az0":
    /*!****************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Subject.js ***!
      \****************************************************************************************/

    /*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */

    /***/
    function Az0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function () {
        return SubjectSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Subject", function () {
        return Subject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function () {
        return AnonymousSubject;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Observable */
      "faBL");
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Subscriber */
      "8yGl");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Subscription */
      "ZtUA");
      /* harmony import */


      var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./util/ObjectUnsubscribedError */
      "+cgn");
      /* harmony import */


      var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./SubjectSubscription */
      "gOox");
      /* harmony import */


      var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "JcfW");

      var SubjectSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_3) {
        _inherits(SubjectSubscriber, _Subscriber__WEBPACK_3);

        var _super6 = _createSuper(SubjectSubscriber);

        function SubjectSubscriber(destination) {
          var _this7;

          _classCallCheck(this, SubjectSubscriber);

          _this7 = _super6.call(this, destination);
          _this7.destination = destination;
          return _this7;
        }

        return SubjectSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

      var Subject = /*#__PURE__*/function (_Observable__WEBPACK_) {
        _inherits(Subject, _Observable__WEBPACK_);

        var _super7 = _createSuper(Subject);

        function Subject() {
          var _this8;

          _classCallCheck(this, Subject);

          _this8 = _super7.call(this);
          _this8.observers = [];
          _this8.closed = false;
          _this8.isStopped = false;
          _this8.hasError = false;
          _this8.thrownError = null;
          return _this8;
        }

        _createClass(Subject, [{
          key: _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__["rxSubscriber"],
          value: function value() {
            return new SubjectSubscriber(this);
          }
        }, {
          key: "lift",
          value: function lift(operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
          }
        }, {
          key: "next",
          value: function next(value) {
            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
            }

            if (!this.isStopped) {
              var observers = this.observers;
              var len = observers.length;
              var copy = observers.slice();

              for (var i = 0; i < len; i++) {
                copy[i].next(value);
              }
            }
          }
        }, {
          key: "error",
          value: function error(err) {
            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
            }

            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].error(err);
            }

            this.observers.length = 0;
          }
        }, {
          key: "complete",
          value: function complete() {
            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
            }

            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].complete();
            }

            this.observers.length = 0;
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(subscriber) {
            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
            } else {
              return _get(_getPrototypeOf(Subject.prototype), "_trySubscribe", this).call(this, subscriber);
            }
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
            } else if (this.hasError) {
              subscriber.error(this.thrownError);
              return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
            } else if (this.isStopped) {
              subscriber.complete();
              return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
            } else {
              this.observers.push(subscriber);
              return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__["SubjectSubscription"](this, subscriber);
            }
          }
        }, {
          key: "asObservable",
          value: function asObservable() {
            var observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
            observable.source = this;
            return observable;
          }
        }]);

        return Subject;
      }(_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]);

      Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
      };

      var AnonymousSubject = /*#__PURE__*/function (_Subject) {
        _inherits(AnonymousSubject, _Subject);

        var _super8 = _createSuper(AnonymousSubject);

        function AnonymousSubject(destination, source) {
          var _this9;

          _classCallCheck(this, AnonymousSubject);

          _this9 = _super8.call(this);
          _this9.destination = destination;
          _this9.source = source;
          return _this9;
        }

        _createClass(AnonymousSubject, [{
          key: "next",
          value: function next(value) {
            var destination = this.destination;

            if (destination && destination.next) {
              destination.next(value);
            }
          }
        }, {
          key: "error",
          value: function error(err) {
            var destination = this.destination;

            if (destination && destination.error) {
              this.destination.error(err);
            }
          }
        }, {
          key: "complete",
          value: function complete() {
            var destination = this.destination;

            if (destination && destination.complete) {
              this.destination.complete();
            }
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var source = this.source;

            if (source) {
              return this.source.subscribe(subscriber);
            } else {
              return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
            }
          }
        }]);

        return AnonymousSubject;
      }(Subject); //# sourceMappingURL=Subject.js.map

      /***/

    },

    /***/
    "8vA0":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js ***!
      \************************************************************************************************/

    /*! exports provided: InnerSubscriber */

    /***/
    function vA0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function () {
        return InnerSubscriber;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subscriber */
      "8yGl");

      var InnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_4) {
        _inherits(InnerSubscriber, _Subscriber__WEBPACK_4);

        var _super9 = _createSuper(InnerSubscriber);

        function InnerSubscriber(parent, outerValue, outerIndex) {
          var _this10;

          _classCallCheck(this, InnerSubscriber);

          _this10 = _super9.call(this);
          _this10.parent = parent;
          _this10.outerValue = outerValue;
          _this10.outerIndex = outerIndex;
          _this10.index = 0;
          return _this10;
        }

        _createClass(InnerSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
          }
        }, {
          key: "_error",
          value: function _error(error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.parent.notifyComplete(this);
            this.unsubscribe();
          }
        }]);

        return InnerSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=InnerSubscriber.js.map

      /***/

    },

    /***/
    "8yGl":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
      \*******************************************************************************************/

    /*! exports provided: Subscriber, SafeSubscriber */

    /***/
    function yGl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Subscriber", function () {
        return Subscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function () {
        return SafeSubscriber;
      });
      /* harmony import */


      var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util/isFunction */
      "ybNo");
      /* harmony import */


      var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Observer */
      "t8Ro");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Subscription */
      "ZtUA");
      /* harmony import */


      var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "JcfW");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config */
      "Mg+x");
      /* harmony import */


      var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./util/hostReportError */
      "F/EN");

      var Subscriber = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(Subscriber, _Subscription__WEBPAC);

        var _super10 = _createSuper(Subscriber);

        function Subscriber(destinationOrNext, error, complete) {
          var _this11;

          _classCallCheck(this, Subscriber);

          _this11 = _super10.call(this);
          _this11.syncErrorValue = null;
          _this11.syncErrorThrown = false;
          _this11.syncErrorThrowable = false;
          _this11.isStopped = false;

          switch (arguments.length) {
            case 0:
              _this11.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
              break;

            case 1:
              if (!destinationOrNext) {
                _this11.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                break;
              }

              if (typeof destinationOrNext === 'object') {
                if (destinationOrNext instanceof Subscriber) {
                  _this11.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                  _this11.destination = destinationOrNext;
                  destinationOrNext.add(_assertThisInitialized(_this11));
                } else {
                  _this11.syncErrorThrowable = true;
                  _this11.destination = new SafeSubscriber(_assertThisInitialized(_this11), destinationOrNext);
                }

                break;
              }

            default:
              _this11.syncErrorThrowable = true;
              _this11.destination = new SafeSubscriber(_assertThisInitialized(_this11), destinationOrNext, error, complete);
              break;
          }

          return _this11;
        }

        _createClass(Subscriber, [{
          key: _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__["rxSubscriber"],
          value: function value() {
            return this;
          }
        }, {
          key: "next",
          value: function next(value) {
            if (!this.isStopped) {
              this._next(value);
            }
          }
        }, {
          key: "error",
          value: function error(err) {
            if (!this.isStopped) {
              this.isStopped = true;

              this._error(err);
            }
          }
        }, {
          key: "complete",
          value: function complete() {
            if (!this.isStopped) {
              this.isStopped = true;

              this._complete();
            }
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            if (this.closed) {
              return;
            }

            this.isStopped = true;

            _get(_getPrototypeOf(Subscriber.prototype), "unsubscribe", this).call(this);
          }
        }, {
          key: "_next",
          value: function _next(value) {
            this.destination.next(value);
          }
        }, {
          key: "_error",
          value: function _error(err) {
            this.destination.error(err);
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.destination.complete();
            this.unsubscribe();
          }
        }, {
          key: "_unsubscribeAndRecycle",
          value: function _unsubscribeAndRecycle() {
            var _parentOrParents = this._parentOrParents;
            this._parentOrParents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parentOrParents = _parentOrParents;
            return this;
          }
        }], [{
          key: "create",
          value: function create(next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
          }
        }]);

        return Subscriber;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]);

      var SafeSubscriber = /*#__PURE__*/function (_Subscriber) {
        _inherits(SafeSubscriber, _Subscriber);

        var _super11 = _createSuper(SafeSubscriber);

        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this12;

          _classCallCheck(this, SafeSubscriber);

          _this12 = _super11.call(this);
          _this12._parentSubscriber = _parentSubscriber;
          var next;

          var context = _assertThisInitialized(_this12);

          if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
          } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;

            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"]) {
              context = Object.create(observerOrNext);

              if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(context.unsubscribe)) {
                _this12.add(context.unsubscribe.bind(context));
              }

              context.unsubscribe = _this12.unsubscribe.bind(_assertThisInitialized(_this12));
            }
          }

          _this12._context = context;
          _this12._next = next;
          _this12._error = error;
          _this12._complete = complete;
          return _this12;
        }

        _createClass(SafeSubscriber, [{
          key: "next",
          value: function next(value) {
            if (!this.isStopped && this._next) {
              var _parentSubscriber = this._parentSubscriber;

              if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
              } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
              }
            }
          }
        }, {
          key: "error",
          value: function error(err) {
            if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling;

              if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                  this.__tryOrUnsub(this._error, err);

                  this.unsubscribe();
                } else {
                  this.__tryOrSetError(_parentSubscriber, this._error, err);

                  this.unsubscribe();
                }
              } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();

                if (useDeprecatedSynchronousErrorHandling) {
                  throw err;
                }

                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
              } else {
                if (useDeprecatedSynchronousErrorHandling) {
                  _parentSubscriber.syncErrorValue = err;
                  _parentSubscriber.syncErrorThrown = true;
                } else {
                  Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                }

                this.unsubscribe();
              }
            }
          }
        }, {
          key: "complete",
          value: function complete() {
            var _this13 = this;

            if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;

              if (this._complete) {
                var wrappedComplete = function wrappedComplete() {
                  return _this13._complete.call(_this13._context);
                };

                if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                  this.__tryOrUnsub(wrappedComplete);

                  this.unsubscribe();
                } else {
                  this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                  this.unsubscribe();
                }
              } else {
                this.unsubscribe();
              }
            }
          }
        }, {
          key: "__tryOrUnsub",
          value: function __tryOrUnsub(fn, value) {
            try {
              fn.call(this._context, value);
            } catch (err) {
              this.unsubscribe();

              if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
              } else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
              }
            }
          }
        }, {
          key: "__tryOrSetError",
          value: function __tryOrSetError(parent, fn, value) {
            if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
              throw new Error('bad call');
            }

            try {
              fn.call(this._context, value);
            } catch (err) {
              if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
              } else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;

            _parentSubscriber.unsubscribe();
          }
        }]);

        return SafeSubscriber;
      }(Subscriber); //# sourceMappingURL=Subscriber.js.map

      /***/

    },

    /***/
    "98aw":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js ***!
      \*********************************************************************************************************/

    /*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */

    /***/
    function aw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
        return combineLatest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function () {
        return CombineLatestOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function () {
        return CombineLatestSubscriber;
      });
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../OuterSubscriber */
      "rxoO");
      /* harmony import */


      var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/subscribeToResult */
      "9UPp");
      /* harmony import */


      var _fromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fromArray */
      "oNEL");

      var NONE = {};

      function combineLatest() {
        for (var _len6 = arguments.length, observables = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          observables[_key6] = arguments[_key6];
        }

        var resultSelector = undefined;
        var scheduler = undefined;

        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(observables[observables.length - 1])) {
          scheduler = observables.pop();
        }

        if (typeof observables[observables.length - 1] === 'function') {
          resultSelector = observables.pop();
        }

        if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
          observables = observables[0];
        }

        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_4__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
      }

      var CombineLatestOperator = /*#__PURE__*/function () {
        function CombineLatestOperator(resultSelector) {
          _classCallCheck(this, CombineLatestOperator);

          this.resultSelector = resultSelector;
        }

        _createClass(CombineLatestOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
          }
        }]);

        return CombineLatestOperator;
      }();

      var CombineLatestSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB) {
        _inherits(CombineLatestSubscriber, _OuterSubscriber__WEB);

        var _super12 = _createSuper(CombineLatestSubscriber);

        function CombineLatestSubscriber(destination, resultSelector) {
          var _this14;

          _classCallCheck(this, CombineLatestSubscriber);

          _this14 = _super12.call(this, destination);
          _this14.resultSelector = resultSelector;
          _this14.active = 0;
          _this14.values = [];
          _this14.observables = [];
          return _this14;
        }

        _createClass(CombineLatestSubscriber, [{
          key: "_next",
          value: function _next(observable) {
            this.values.push(NONE);
            this.observables.push(observable);
          }
        }, {
          key: "_complete",
          value: function _complete() {
            var observables = this.observables;
            var len = observables.length;

            if (len === 0) {
              this.destination.complete();
            } else {
              this.active = len;
              this.toRespond = len;

              for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i));
              }
            }
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete(unused) {
            if ((this.active -= 1) === 0) {
              this.destination.complete();
            }
          }
        }, {
          key: "notifyNext",
          value: function notifyNext(_outerValue, innerValue, outerIndex) {
            var values = this.values;
            var oldVal = values[outerIndex];
            var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
            values[outerIndex] = innerValue;

            if (toRespond === 0) {
              if (this.resultSelector) {
                this._tryResultSelector(values);
              } else {
                this.destination.next(values.slice());
              }
            }
          }
        }, {
          key: "_tryResultSelector",
          value: function _tryResultSelector(values) {
            var result;

            try {
              result = this.resultSelector.apply(this, values);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            this.destination.next(result);
          }
        }]);

        return CombineLatestSubscriber;
      }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=combineLatest.js.map

      /***/

    },

    /***/
    "9UPp":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js ***!
      \*******************************************************************************************************/

    /*! exports provided: subscribeToResult */

    /***/
    function UPp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeToResult", function () {
        return subscribeToResult;
      });
      /* harmony import */


      var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../InnerSubscriber */
      "8vA0");
      /* harmony import */


      var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subscribeTo */
      "nO6v");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      "faBL");

      function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var innerSubscriber = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);

        if (innerSubscriber.closed) {
          return undefined;
        }

        if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
          return result.subscribe(innerSubscriber);
        }

        return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
      } //# sourceMappingURL=subscribeToResult.js.map

      /***/

    },

    /***/
    "9yG4":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/symbol/iterator.js ***!
      \************************************************************************************************/

    /*! exports provided: getSymbolIterator, iterator, $$iterator */

    /***/
    function yG4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function () {
        return getSymbolIterator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "iterator", function () {
        return iterator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$iterator", function () {
        return $$iterator;
      });

      function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
        }

        return Symbol.iterator;
      }

      var iterator = getSymbolIterator();
      var $$iterator = iterator; //# sourceMappingURL=iterator.js.map

      /***/
    },

    /***/
    "Ani/":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
      \*****************************************************************************************************/

    /*! exports provided: AsapAction */

    /***/
    function Ani(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsapAction", function () {
        return AsapAction;
      });
      /* harmony import */


      var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/Immediate */
      "Y1rO");
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      "Or74");

      var AsapAction = /*#__PURE__*/function (_AsyncAction__WEBPACK) {
        _inherits(AsapAction, _AsyncAction__WEBPACK);

        var _super13 = _createSuper(AsapAction);

        function AsapAction(scheduler, work) {
          var _this15;

          _classCallCheck(this, AsapAction);

          _this15 = _super13.call(this, scheduler, work);
          _this15.scheduler = scheduler;
          _this15.work = work;
          return _this15;
        }

        _createClass(AsapAction, [{
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0) {
              return _get(_getPrototypeOf(AsapAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(AsapAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
            }

            if (scheduler.actions.length === 0) {
              _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].clearImmediate(id);

              scheduler.scheduled = undefined;
            }

            return undefined;
          }
        }]);

        return AsapAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]); //# sourceMappingURL=AsapAction.js.map

      /***/

    },

    /***/
    "B2bc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isPromise.js ***!
      \***********************************************************************************************/

    /*! exports provided: isPromise */

    /***/
    function B2bc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPromise", function () {
        return isPromise;
      });

      function isPromise(value) {
        return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
      } //# sourceMappingURL=isPromise.js.map

      /***/

    },

    /***/
    "CyA0":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isObservable.js ***!
      \**************************************************************************************************/

    /*! exports provided: isObservable */

    /***/
    function CyA0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isObservable", function () {
        return isObservable;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");

      function isObservable(obj) {
        return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
      } //# sourceMappingURL=isObservable.js.map

      /***/

    },

    /***/
    "DDn8":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
      \************************************************************************************************/

    /*! exports provided: queueScheduler, queue */

    /***/
    function DDn8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queueScheduler", function () {
        return queueScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queue", function () {
        return queue;
      });
      /* harmony import */


      var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./QueueAction */
      "HPh0");
      /* harmony import */


      var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./QueueScheduler */
      "ywnc");

      var queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
      var queue = queueScheduler; //# sourceMappingURL=queue.js.map

      /***/
    },

    /***/
    "DLxg":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js ***!
      \*************************************************************************************************************/

    /*! exports provided: onErrorResumeNext */

    /***/
    function DLxg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function () {
        return onErrorResumeNext;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./from */
      "F0B0");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./empty */
      "KpRf");

      function onErrorResumeNext() {
        for (var _len7 = arguments.length, sources = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          sources[_key7] = arguments[_key7];
        }

        if (sources.length === 0) {
          return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }

        var first = sources[0],
            remainder = sources.slice(1);

        if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
          return onErrorResumeNext.apply(void 0, _toConsumableArray(first));
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var subNext = function subNext() {
            return subscriber.add(onErrorResumeNext.apply(void 0, _toConsumableArray(remainder)).subscribe(subscriber));
          };

          return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next: function next(value) {
              subscriber.next(value);
            },
            error: subNext,
            complete: subNext
          });
        });
      } //# sourceMappingURL=onErrorResumeNext.js.map

      /***/

    },

    /***/
    "Dc5y":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
      \******************************************************************************************************/

    /*! exports provided: throwError */

    /***/
    function Dc5y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwError", function () {
        return throwError;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");

      function throwError(error, scheduler) {
        if (!scheduler) {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            return subscriber.error(error);
          });
        } else {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            return scheduler.schedule(dispatch, 0, {
              error: error,
              subscriber: subscriber
            });
          });
        }
      }

      function dispatch(_ref) {
        var error = _ref.error,
            subscriber = _ref.subscriber;
        subscriber.error(error);
      } //# sourceMappingURL=throwError.js.map

      /***/

    },

    /***/
    "E7dV":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
      \***************************************************************************************************************/

    /*! exports provided: AnimationFrameAction */

    /***/
    function E7dV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function () {
        return AnimationFrameAction;
      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      "Or74");

      var AnimationFrameAction = /*#__PURE__*/function (_AsyncAction__WEBPACK2) {
        _inherits(AnimationFrameAction, _AsyncAction__WEBPACK2);

        var _super14 = _createSuper(AnimationFrameAction);

        function AnimationFrameAction(scheduler, work) {
          var _this16;

          _classCallCheck(this, AnimationFrameAction);

          _this16 = _super14.call(this, scheduler, work);
          _this16.scheduler = scheduler;
          _this16.work = work;
          return _this16;
        }

        _createClass(AnimationFrameAction, [{
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0) {
              return _get(_getPrototypeOf(AnimationFrameAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
              return scheduler.flush(null);
            }));
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(AnimationFrameAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
            }

            if (scheduler.actions.length === 0) {
              cancelAnimationFrame(id);
              scheduler.scheduled = undefined;
            }

            return undefined;
          }
        }]);

        return AnimationFrameAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=AnimationFrameAction.js.map

      /***/

    },

    /***/
    "Et9T":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js ***!
      \*************************************************************************************************/

    /*! exports provided: isArrayLike */

    /***/
    function Et9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isArrayLike", function () {
        return isArrayLike;
      });

      var isArrayLike = function isArrayLike(x) {
        return x && typeof x.length === 'number' && typeof x !== 'function';
      }; //# sourceMappingURL=isArrayLike.js.map

      /***/

    },

    /***/
    "Ezm9":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
      \*****************************************************************************************************/

    /*! exports provided: fromEvent */

    /***/
    function Ezm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromEvent", function () {
        return fromEvent;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isFunction */
      "ybNo");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../operators/map */
      "k3Lq");

      var toString = function () {
        return Object.prototype.toString;
      }();

      function fromEvent(target, eventName, options, resultSelector) {
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
          resultSelector = options;
          options = undefined;
        }

        if (resultSelector) {
          return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) {
            return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
          }));
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          function handler(e) {
            if (arguments.length > 1) {
              subscriber.next(Array.prototype.slice.call(arguments));
            } else {
              subscriber.next(e);
            }
          }

          setupSubscription(target, eventName, handler, subscriber, options);
        });
      }

      function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;

        if (isEventTarget(sourceObj)) {
          var source = sourceObj;
          sourceObj.addEventListener(eventName, handler, options);

          unsubscribe = function unsubscribe() {
            return source.removeEventListener(eventName, handler, options);
          };
        } else if (isJQueryStyleEventEmitter(sourceObj)) {
          var _source = sourceObj;
          sourceObj.on(eventName, handler);

          unsubscribe = function unsubscribe() {
            return _source.off(eventName, handler);
          };
        } else if (isNodeStyleEventEmitter(sourceObj)) {
          var _source2 = sourceObj;
          sourceObj.addListener(eventName, handler);

          unsubscribe = function unsubscribe() {
            return _source2.removeListener(eventName, handler);
          };
        } else if (sourceObj && sourceObj.length) {
          for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
          }
        } else {
          throw new TypeError('Invalid event target');
        }

        subscriber.add(unsubscribe);
      }

      function isNodeStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
      }

      function isJQueryStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
      }

      function isEventTarget(sourceObj) {
        return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
      } //# sourceMappingURL=fromEvent.js.map

      /***/

    },

    /***/
    "F/EN":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
      \*****************************************************************************************************/

    /*! exports provided: hostReportError */

    /***/
    function FEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hostReportError", function () {
        return hostReportError;
      });

      function hostReportError(err) {
        setTimeout(function () {
          throw err;
        }, 0);
      } //# sourceMappingURL=hostReportError.js.map

      /***/

    },

    /***/
    "F0B0":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/from.js ***!
      \************************************************************************************************/

    /*! exports provided: from */

    /***/
    function F0B0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "from", function () {
        return from;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeTo */
      "nO6v");
      /* harmony import */


      var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduled/scheduled */
      "+dYC");

      function from(input, scheduler) {
        if (!scheduler) {
          if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
          }

          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
        } else {
          return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
        }
      } //# sourceMappingURL=from.js.map

      /***/

    },

    /***/
    "HO/X":
    /*!***************************************************************************************!*\
      !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
      \***************************************************************************************/

    /*! exports provided: DataTablesModule */

    /***/
    function HOX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
        return DataTablesModule;
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


      var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./angular-datatables.directive */
      "/iSe");
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var DataTablesModule =
      /** @class */
      function () {
        function DataTablesModule() {}

        DataTablesModule.forRoot = function () {
          return {
            ngModule: DataTablesModule
          };
        };

        DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: DataTablesModule
        });
        DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function DataTablesModule_Factory(t) {
            return new (t || DataTablesModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, {
            declarations: function declarations() {
              return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
            },
            imports: function imports() {
              return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
            },
            exports: function exports() {
              return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
            }
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
              declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
              exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return DataTablesModule;
      }(); //# sourceMappingURL=angular-datatables.module.js.map

      /***/

    },

    /***/
    "HPh0":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
      \******************************************************************************************************/

    /*! exports provided: QueueAction */

    /***/
    function HPh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueAction", function () {
        return QueueAction;
      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      "Or74");

      var QueueAction = /*#__PURE__*/function (_AsyncAction__WEBPACK3) {
        _inherits(QueueAction, _AsyncAction__WEBPACK3);

        var _super15 = _createSuper(QueueAction);

        function QueueAction(scheduler, work) {
          var _this17;

          _classCallCheck(this, QueueAction);

          _this17 = _super15.call(this, scheduler, work);
          _this17.scheduler = scheduler;
          _this17.work = work;
          return _this17;
        }

        _createClass(QueueAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (delay > 0) {
              return _get(_getPrototypeOf(QueueAction.prototype), "schedule", this).call(this, state, delay);
            }

            this.delay = delay;
            this.state = state;
            this.scheduler.flush(this);
            return this;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            return delay > 0 || this.closed ? _get(_getPrototypeOf(QueueAction.prototype), "execute", this).call(this, state, delay) : this._execute(state, delay);
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(QueueAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            return scheduler.flush(this);
          }
        }]);

        return QueueAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=QueueAction.js.map

      /***/

    },

    /***/
    "JcfW":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
      \****************************************************************************************************/

    /*! exports provided: rxSubscriber, $$rxSubscriber */

    /***/
    function JcfW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rxSubscriber", function () {
        return rxSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function () {
        return $$rxSubscriber;
      });

      var rxSubscriber = function () {
        return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      }();

      var $$rxSubscriber = rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

      /***/
    },

    /***/
    "JhYf":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
      \**************************************************************************************************/

    /*! exports provided: observable */

    /***/
    function JhYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "observable", function () {
        return observable;
      });

      var observable = function () {
        return typeof Symbol === 'function' && Symbol.observable || '@@observable';
      }(); //# sourceMappingURL=observable.js.map

      /***/

    },

    /***/
    "JpEC":
    /*!*****************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/index.js ***!
      \*****************************************************************************/

    /*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asap, asapScheduler, async, asyncScheduler, queue, queueScheduler, animationFrame, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config */

    /***/
    function JpEC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./internal/Observable */
      "faBL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Observable", function () {
        return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"];
      });
      /* harmony import */


      var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./internal/observable/ConnectableObservable */
      "szfW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function () {
        return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"];
      });
      /* harmony import */


      var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./internal/operators/groupBy */
      "OmWi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GroupedObservable", function () {
        return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"];
      });
      /* harmony import */


      var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./internal/symbol/observable */
      "JhYf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "observable", function () {
        return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"];
      });
      /* harmony import */


      var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./internal/Subject */
      "8Az0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Subject", function () {
        return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"];
      });
      /* harmony import */


      var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./internal/BehaviorSubject */
      "viS9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function () {
        return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"];
      });
      /* harmony import */


      var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./internal/ReplaySubject */
      "gQ4j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ReplaySubject", function () {
        return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"];
      });
      /* harmony import */


      var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./internal/AsyncSubject */
      "y7uT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AsyncSubject", function () {
        return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"];
      });
      /* harmony import */


      var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./internal/scheduler/asap */
      "4Hwq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "asap", function () {
        return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "asapScheduler", function () {
        return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"];
      });
      /* harmony import */


      var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./internal/scheduler/async */
      "NW67");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "async", function () {
        return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "asyncScheduler", function () {
        return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["asyncScheduler"];
      });
      /* harmony import */


      var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./internal/scheduler/queue */
      "DDn8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "queue", function () {
        return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "queueScheduler", function () {
        return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queueScheduler"];
      });
      /* harmony import */


      var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./internal/scheduler/animationFrame */
      "K76F");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "animationFrame", function () {
        return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function () {
        return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrameScheduler"];
      });
      /* harmony import */


      var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./internal/scheduler/VirtualTimeScheduler */
      "SXei");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function () {
        return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VirtualAction", function () {
        return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"];
      });
      /* harmony import */


      var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./internal/Scheduler */
      "TrSG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Scheduler", function () {
        return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"];
      });
      /* harmony import */


      var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./internal/Subscription */
      "ZtUA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Subscription", function () {
        return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"];
      });
      /* harmony import */


      var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./internal/Subscriber */
      "8yGl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Subscriber", function () {
        return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"];
      });
      /* harmony import */


      var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./internal/Notification */
      "XyFK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Notification", function () {
        return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationKind", function () {
        return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"];
      });
      /* harmony import */


      var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./internal/util/pipe */
      "oCq4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "pipe", function () {
        return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"];
      });
      /* harmony import */


      var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./internal/util/noop */
      "mEr4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "noop", function () {
        return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"];
      });
      /* harmony import */


      var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./internal/util/identity */
      "g8rM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "identity", function () {
        return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"];
      });
      /* harmony import */


      var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./internal/util/isObservable */
      "CyA0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isObservable", function () {
        return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"];
      });
      /* harmony import */


      var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./internal/util/ArgumentOutOfRangeError */
      "Qbcf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function () {
        return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"];
      });
      /* harmony import */


      var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./internal/util/EmptyError */
      "TCKb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmptyError", function () {
        return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"];
      });
      /* harmony import */


      var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./internal/util/ObjectUnsubscribedError */
      "+cgn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function () {
        return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"];
      });
      /* harmony import */


      var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./internal/util/UnsubscriptionError */
      "i22g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function () {
        return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"];
      });
      /* harmony import */


      var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./internal/util/TimeoutError */
      "WN9+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeoutError", function () {
        return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"];
      });
      /* harmony import */


      var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./internal/observable/bindCallback */
      "WrY/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "bindCallback", function () {
        return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"];
      });
      /* harmony import */


      var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./internal/observable/bindNodeCallback */
      "6Jry");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function () {
        return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"];
      });
      /* harmony import */


      var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./internal/observable/combineLatest */
      "98aw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
        return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"];
      });
      /* harmony import */


      var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./internal/observable/concat */
      "p3Ld");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "concat", function () {
        return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"];
      });
      /* harmony import */


      var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./internal/observable/defer */
      "QHcx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "defer", function () {
        return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"];
      });
      /* harmony import */


      var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./internal/observable/empty */
      "KpRf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "empty", function () {
        return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"];
      });
      /* harmony import */


      var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./internal/observable/forkJoin */
      "eNKl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "forkJoin", function () {
        return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"];
      });
      /* harmony import */


      var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./internal/observable/from */
      "F0B0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "from", function () {
        return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"];
      });
      /* harmony import */


      var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./internal/observable/fromEvent */
      "Ezm9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fromEvent", function () {
        return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"];
      });
      /* harmony import */


      var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./internal/observable/fromEventPattern */
      "0SeN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fromEventPattern", function () {
        return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"];
      });
      /* harmony import */


      var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./internal/observable/generate */
      "bZi5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "generate", function () {
        return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"];
      });
      /* harmony import */


      var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./internal/observable/iif */
      "mdtm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "iif", function () {
        return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"];
      });
      /* harmony import */


      var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./internal/observable/interval */
      "vIMJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "interval", function () {
        return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"];
      });
      /* harmony import */


      var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./internal/observable/merge */
      "UD8B");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "merge", function () {
        return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"];
      });
      /* harmony import */


      var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./internal/observable/never */
      "wdDJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "never", function () {
        return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"];
      });
      /* harmony import */


      var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./internal/observable/of */
      "Zu/Y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "of", function () {
        return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"];
      });
      /* harmony import */


      var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./internal/observable/onErrorResumeNext */
      "DLxg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function () {
        return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"];
      });
      /* harmony import */


      var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./internal/observable/pairs */
      "zHci");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "pairs", function () {
        return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"];
      });
      /* harmony import */


      var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./internal/observable/partition */
      "YhVK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "partition", function () {
        return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__["partition"];
      });
      /* harmony import */


      var _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./internal/observable/race */
      "lXm6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "race", function () {
        return _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__["race"];
      });
      /* harmony import */


      var _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./internal/observable/range */
      "a4rz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "range", function () {
        return _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__["range"];
      });
      /* harmony import */


      var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./internal/observable/throwError */
      "Dc5y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "throwError", function () {
        return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__["throwError"];
      });
      /* harmony import */


      var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./internal/observable/timer */
      "NI0D");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "timer", function () {
        return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__["timer"];
      });
      /* harmony import */


      var _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./internal/observable/using */
      "2LQl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "using", function () {
        return _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__["using"];
      });
      /* harmony import */


      var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./internal/observable/zip */
      "10dc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "zip", function () {
        return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__["zip"];
      });
      /* harmony import */


      var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./internal/scheduled/scheduled */
      "+dYC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "scheduled", function () {
        return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__["scheduled"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
        return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NEVER", function () {
        return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"];
      });
      /* harmony import */


      var _internal_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./internal/config */
      "Mg+x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return _internal_config__WEBPACK_IMPORTED_MODULE_52__["config"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "K76F":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
      \*********************************************************************************************************/

    /*! exports provided: animationFrameScheduler, animationFrame */

    /***/
    function K76F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function () {
        return animationFrameScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "animationFrame", function () {
        return animationFrame;
      });
      /* harmony import */


      var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AnimationFrameAction */
      "E7dV");
      /* harmony import */


      var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AnimationFrameScheduler */
      "6Bj3");

      var animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
      var animationFrame = animationFrameScheduler; //# sourceMappingURL=animationFrame.js.map

      /***/
    },

    /***/
    "Kiss":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/not.js ***!
      \*****************************************************************************************/

    /*! exports provided: not */

    /***/
    function Kiss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "not", function () {
        return not;
      });

      function not(pred, thisArg) {
        function notPred() {
          return !notPred.pred.apply(notPred.thisArg, arguments);
        }

        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
      } //# sourceMappingURL=not.js.map

      /***/

    },

    /***/
    "KpRf":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/empty.js ***!
      \*************************************************************************************************/

    /*! exports provided: EMPTY, empty */

    /***/
    function KpRf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
        return EMPTY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "empty", function () {
        return empty;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");

      var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        return subscriber.complete();
      });

      function empty(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : EMPTY;
      }

      function emptyScheduled(scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          return scheduler.schedule(function () {
            return subscriber.complete();
          });
        });
      } //# sourceMappingURL=empty.js.map

      /***/

    },

    /***/
    "Mg+x":
    /*!***************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/config.js ***!
      \***************************************************************************************/

    /*! exports provided: config */

    /***/
    function MgX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });

      var _enable_super_gross_mode_that_will_cause_bad_things = false;
      var config = {
        Promise: undefined,

        set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }

          _enable_super_gross_mode_that_will_cause_bad_things = value;
        },

        get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
        }

      }; //# sourceMappingURL=config.js.map

      /***/
    },

    /***/
    "NI0D":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
      \*************************************************************************************************/

    /*! exports provided: timer */

    /***/
    function NI0D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "timer", function () {
        return timer;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../scheduler/async */
      "NW67");
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isNumeric */
      "r/PG");
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");

      function timer() {
        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        var period = -1;

        if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
          scheduler = periodOrScheduler;
        }

        if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime) ? dueTime : +dueTime - scheduler.now();
          return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
          });
        });
      }

      function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);

        if (subscriber.closed) {
          return;
        } else if (period === -1) {
          return subscriber.complete();
        }

        state.index = index + 1;
        this.schedule(state, period);
      } //# sourceMappingURL=timer.js.map

      /***/

    },

    /***/
    "NW67":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
      \************************************************************************************************/

    /*! exports provided: asyncScheduler, async */

    /***/
    function NW67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asyncScheduler", function () {
        return asyncScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "async", function () {
        return async;
      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      "Or74");
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncScheduler */
      "1luJ");

      var asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
      var async = asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    },

    /***/
    "OKNj":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
      \****************************************************************************************************/

    /*! exports provided: canReportError */

    /***/
    function OKNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canReportError", function () {
        return canReportError;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");

      function canReportError(observer) {
        while (observer) {
          var _observer = observer,
              closed = _observer.closed,
              destination = _observer.destination,
              isStopped = _observer.isStopped;

          if (closed || isStopped) {
            return false;
          } else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
          } else {
            observer = null;
          }
        }

        return true;
      } //# sourceMappingURL=canReportError.js.map

      /***/

    },

    /***/
    "OmWi":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
      \**************************************************************************************************/

    /*! exports provided: groupBy, GroupedObservable */

    /***/
    function OmWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "groupBy", function () {
        return groupBy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupedObservable", function () {
        return GroupedObservable;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Subject */
      "8Az0");

      function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
        return function (source) {
          return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
        };
      }

      var GroupByOperator = /*#__PURE__*/function () {
        function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
          _classCallCheck(this, GroupByOperator);

          this.keySelector = keySelector;
          this.elementSelector = elementSelector;
          this.durationSelector = durationSelector;
          this.subjectSelector = subjectSelector;
        }

        _createClass(GroupByOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
          }
        }]);

        return GroupByOperator;
      }();

      var GroupBySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_5) {
        _inherits(GroupBySubscriber, _Subscriber__WEBPACK_5);

        var _super16 = _createSuper(GroupBySubscriber);

        function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
          var _this18;

          _classCallCheck(this, GroupBySubscriber);

          _this18 = _super16.call(this, destination);
          _this18.keySelector = keySelector;
          _this18.elementSelector = elementSelector;
          _this18.durationSelector = durationSelector;
          _this18.subjectSelector = subjectSelector;
          _this18.groups = null;
          _this18.attemptedToUnsubscribe = false;
          _this18.count = 0;
          return _this18;
        }

        _createClass(GroupBySubscriber, [{
          key: "_next",
          value: function _next(value) {
            var key;

            try {
              key = this.keySelector(value);
            } catch (err) {
              this.error(err);
              return;
            }

            this._group(value, key);
          }
        }, {
          key: "_group",
          value: function _group(value, key) {
            var groups = this.groups;

            if (!groups) {
              groups = this.groups = new Map();
            }

            var group = groups.get(key);
            var element;

            if (this.elementSelector) {
              try {
                element = this.elementSelector(value);
              } catch (err) {
                this.error(err);
              }
            } else {
              element = value;
            }

            if (!group) {
              group = this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
              groups.set(key, group);
              var groupedObservable = new GroupedObservable(key, group, this);
              this.destination.next(groupedObservable);

              if (this.durationSelector) {
                var duration;

                try {
                  duration = this.durationSelector(new GroupedObservable(key, group));
                } catch (err) {
                  this.error(err);
                  return;
                }

                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
              }
            }

            if (!group.closed) {
              group.next(element);
            }
          }
        }, {
          key: "_error",
          value: function _error(err) {
            var groups = this.groups;

            if (groups) {
              groups.forEach(function (group, key) {
                group.error(err);
              });
              groups.clear();
            }

            this.destination.error(err);
          }
        }, {
          key: "_complete",
          value: function _complete() {
            var groups = this.groups;

            if (groups) {
              groups.forEach(function (group, key) {
                group.complete();
              });
              groups.clear();
            }

            this.destination.complete();
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(key) {
            this.groups["delete"](key);
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            if (!this.closed) {
              this.attemptedToUnsubscribe = true;

              if (this.count === 0) {
                _get(_getPrototypeOf(GroupBySubscriber.prototype), "unsubscribe", this).call(this);
              }
            }
          }
        }]);

        return GroupBySubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      var GroupDurationSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_6) {
        _inherits(GroupDurationSubscriber, _Subscriber__WEBPACK_6);

        var _super17 = _createSuper(GroupDurationSubscriber);

        function GroupDurationSubscriber(key, group, parent) {
          var _this19;

          _classCallCheck(this, GroupDurationSubscriber);

          _this19 = _super17.call(this, group);
          _this19.key = key;
          _this19.group = group;
          _this19.parent = parent;
          return _this19;
        }

        _createClass(GroupDurationSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.complete();
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var parent = this.parent,
                key = this.key;
            this.key = this.parent = null;

            if (parent) {
              parent.removeGroup(key);
            }
          }
        }]);

        return GroupDurationSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      var GroupedObservable = /*#__PURE__*/function (_Observable__WEBPACK_2) {
        _inherits(GroupedObservable, _Observable__WEBPACK_2);

        var _super18 = _createSuper(GroupedObservable);

        function GroupedObservable(key, groupSubject, refCountSubscription) {
          var _this20;

          _classCallCheck(this, GroupedObservable);

          _this20 = _super18.call(this);
          _this20.key = key;
          _this20.groupSubject = groupSubject;
          _this20.refCountSubscription = refCountSubscription;
          return _this20;
        }

        _createClass(GroupedObservable, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            var refCountSubscription = this.refCountSubscription,
                groupSubject = this.groupSubject;

            if (refCountSubscription && !refCountSubscription.closed) {
              subscription.add(new InnerRefCountSubscription(refCountSubscription));
            }

            subscription.add(groupSubject.subscribe(subscriber));
            return subscription;
          }
        }]);

        return GroupedObservable;
      }(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]);

      var InnerRefCountSubscription = /*#__PURE__*/function (_Subscription__WEBPAC2) {
        _inherits(InnerRefCountSubscription, _Subscription__WEBPAC2);

        var _super19 = _createSuper(InnerRefCountSubscription);

        function InnerRefCountSubscription(parent) {
          var _this21;

          _classCallCheck(this, InnerRefCountSubscription);

          _this21 = _super19.call(this);
          _this21.parent = parent;
          parent.count++;
          return _this21;
        }

        _createClass(InnerRefCountSubscription, [{
          key: "unsubscribe",
          value: function unsubscribe() {
            var parent = this.parent;

            if (!parent.closed && !this.closed) {
              _get(_getPrototypeOf(InnerRefCountSubscription.prototype), "unsubscribe", this).call(this);

              parent.count -= 1;

              if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
              }
            }
          }
        }]);

        return InnerRefCountSubscription;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]); //# sourceMappingURL=groupBy.js.map

      /***/

    },

    /***/
    "Or74":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
      \******************************************************************************************************/

    /*! exports provided: AsyncAction */

    /***/
    function Or74(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsyncAction", function () {
        return AsyncAction;
      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      "jYyn");

      var AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(AsyncAction, _Action__WEBPACK_IMPO);

        var _super20 = _createSuper(AsyncAction);

        function AsyncAction(scheduler, work) {
          var _this22;

          _classCallCheck(this, AsyncAction);

          _this22 = _super20.call(this, scheduler, work);
          _this22.scheduler = scheduler;
          _this22.work = work;
          _this22.pending = false;
          return _this22;
        }

        _createClass(AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__["Action"]); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    "OyF4":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/refCount.js ***!
      \***************************************************************************************************/

    /*! exports provided: refCount */

    /***/
    function OyF4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "refCount", function () {
        return refCount;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");

      function refCount() {
        return function refCountOperatorFunction(source) {
          return source.lift(new RefCountOperator(source));
        };
      }

      var RefCountOperator = /*#__PURE__*/function () {
        function RefCountOperator(connectable) {
          _classCallCheck(this, RefCountOperator);

          this.connectable = connectable;
        }

        _createClass(RefCountOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);

            if (!refCounter.closed) {
              refCounter.connection = connectable.connect();
            }

            return subscription;
          }
        }]);

        return RefCountOperator;
      }();

      var RefCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_7) {
        _inherits(RefCountSubscriber, _Subscriber__WEBPACK_7);

        var _super21 = _createSuper(RefCountSubscriber);

        function RefCountSubscriber(destination, connectable) {
          var _this23;

          _classCallCheck(this, RefCountSubscriber);

          _this23 = _super21.call(this, destination);
          _this23.connectable = connectable;
          return _this23;
        }

        _createClass(RefCountSubscriber, [{
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var connectable = this.connectable;

            if (!connectable) {
              this.connection = null;
              return;
            }

            this.connectable = null;
            var refCount = connectable._refCount;

            if (refCount <= 0) {
              this.connection = null;
              return;
            }

            connectable._refCount = refCount - 1;

            if (refCount > 1) {
              this.connection = null;
              return;
            }

            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;

            if (sharedConnection && (!connection || sharedConnection === connection)) {
              sharedConnection.unsubscribe();
            }
          }
        }]);

        return RefCountSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=refCount.js.map

      /***/

    },

    /***/
    "QHcx":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/defer.js ***!
      \*************************************************************************************************/

    /*! exports provided: defer */

    /***/
    function QHcx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defer", function () {
        return defer;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./from */
      "F0B0");
      /* harmony import */


      var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./empty */
      "KpRf");

      function defer(observableFactory) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var input;

          try {
            input = observableFactory();
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }

          var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
          return source.subscribe(subscriber);
        });
      } //# sourceMappingURL=defer.js.map

      /***/

    },

    /***/
    "Qbcf":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js ***!
      \*************************************************************************************************************/

    /*! exports provided: ArgumentOutOfRangeError */

    /***/
    function Qbcf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function () {
        return ArgumentOutOfRangeError;
      });

      var ArgumentOutOfRangeErrorImpl = function () {
        function ArgumentOutOfRangeErrorImpl() {
          Error.call(this);
          this.message = 'argument out of range';
          this.name = 'ArgumentOutOfRangeError';
          return this;
        }

        ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
        return ArgumentOutOfRangeErrorImpl;
      }();

      var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl; //# sourceMappingURL=ArgumentOutOfRangeError.js.map

      /***/
    },

    /***/
    "RRAU":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js ***!
      \*********************************************************************************************************/

    /*! exports provided: isInteropObservable */

    /***/
    function RRAU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isInteropObservable", function () {
        return isInteropObservable;
      });
      /* harmony import */


      var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../symbol/observable */
      "JhYf");

      function isInteropObservable(input) {
        return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
      } //# sourceMappingURL=isInteropObservable.js.map

      /***/

    },

    /***/
    "RSca":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js ***!
      \***********************************************************************************************************/

    /*! exports provided: subscribeToObservable */

    /***/
    function RSca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function () {
        return subscribeToObservable;
      });
      /* harmony import */


      var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../symbol/observable */
      "JhYf");

      var subscribeToObservable = function subscribeToObservable(obj) {
        return function (subscriber) {
          var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();

          if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
          } else {
            return obs.subscribe(subscriber);
          }
        };
      }; //# sourceMappingURL=subscribeToObservable.js.map

      /***/

    },

    /***/
    "SXei":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js ***!
      \***************************************************************************************************************/

    /*! exports provided: VirtualTimeScheduler, VirtualAction */

    /***/
    function SXei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function () {
        return VirtualTimeScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualAction", function () {
        return VirtualAction;
      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      "Or74");
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncScheduler */
      "1luJ");

      var VirtualTimeScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP2) {
        _inherits(VirtualTimeScheduler, _AsyncScheduler__WEBP2);

        var _super22 = _createSuper(VirtualTimeScheduler);

        function VirtualTimeScheduler() {
          var _this24;

          var SchedulerAction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VirtualAction;
          var maxFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

          _classCallCheck(this, VirtualTimeScheduler);

          _this24 = _super22.call(this, SchedulerAction, function () {
            return _this24.frame;
          });
          _this24.maxFrames = maxFrames;
          _this24.frame = 0;
          _this24.index = -1;
          return _this24;
        }

        _createClass(VirtualTimeScheduler, [{
          key: "flush",
          value: function flush() {
            var actions = this.actions,
                maxFrames = this.maxFrames;
            var error, action;

            while ((action = actions[0]) && action.delay <= maxFrames) {
              actions.shift();
              this.frame = action.delay;

              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            }

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return VirtualTimeScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]);

      VirtualTimeScheduler.frameTimeFactor = 10;

      var VirtualAction = /*#__PURE__*/function (_AsyncAction__WEBPACK4) {
        _inherits(VirtualAction, _AsyncAction__WEBPACK4);

        var _super23 = _createSuper(VirtualAction);

        function VirtualAction(scheduler, work) {
          var _this25;

          var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scheduler.index += 1;

          _classCallCheck(this, VirtualAction);

          _this25 = _super23.call(this, scheduler, work);
          _this25.scheduler = scheduler;
          _this25.work = work;
          _this25.index = index;
          _this25.active = true;
          _this25.index = scheduler.index = index;
          return _this25;
        }

        _createClass(VirtualAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (!this.id) {
              return _get(_getPrototypeOf(VirtualAction.prototype), "schedule", this).call(this, state, delay);
            }

            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            this.delay = scheduler.frame + delay;
            var actions = scheduler.actions;
            actions.push(this);
            actions.sort(VirtualAction.sortActions);
            return true;
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return undefined;
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            if (this.active === true) {
              return _get(_getPrototypeOf(VirtualAction.prototype), "_execute", this).call(this, state, delay);
            }
          }
        }], [{
          key: "sortActions",
          value: function sortActions(a, b) {
            if (a.delay === b.delay) {
              if (a.index === b.index) {
                return 0;
              } else if (a.index > b.index) {
                return 1;
              } else {
                return -1;
              }
            } else if (a.delay > b.delay) {
              return 1;
            } else {
              return -1;
            }
          }
        }]);

        return VirtualAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=VirtualTimeScheduler.js.map

      /***/

    },

    /***/
    "TCKb":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/EmptyError.js ***!
      \************************************************************************************************/

    /*! exports provided: EmptyError */

    /***/
    function TCKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyError", function () {
        return EmptyError;
      });

      var EmptyErrorImpl = function () {
        function EmptyErrorImpl() {
          Error.call(this);
          this.message = 'no elements in sequence';
          this.name = 'EmptyError';
          return this;
        }

        EmptyErrorImpl.prototype = Object.create(Error.prototype);
        return EmptyErrorImpl;
      }();

      var EmptyError = EmptyErrorImpl; //# sourceMappingURL=EmptyError.js.map

      /***/
    },

    /***/
    "TrSG":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
      \******************************************************************************************/

    /*! exports provided: Scheduler */

    /***/
    function TrSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scheduler", function () {
        return Scheduler;
      });

      var Scheduler = /*#__PURE__*/function () {
        function Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Scheduler.now;

          _classCallCheck(this, Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return Scheduler;
      }();

      Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    "UD8B":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
      \*************************************************************************************************/

    /*! exports provided: merge */

    /***/
    function UD8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "merge", function () {
        return merge;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");
      /* harmony import */


      var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../operators/mergeAll */
      "lVuj");
      /* harmony import */


      var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fromArray */
      "oNEL");

      function merge() {
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = null;

        for (var _len8 = arguments.length, observables = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          observables[_key8] = arguments[_key8];
        }

        var last = observables[observables.length - 1];

        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
          scheduler = observables.pop();

          if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
          }
        } else if (typeof last === 'number') {
          concurrent = observables.pop();
        }

        if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
          return observables[0];
        }

        return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
      } //# sourceMappingURL=merge.js.map

      /***/

    },

    /***/
    "WN9+":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js ***!
      \**************************************************************************************************/

    /*! exports provided: TimeoutError */

    /***/
    function WN9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeoutError", function () {
        return TimeoutError;
      });

      var TimeoutErrorImpl = function () {
        function TimeoutErrorImpl() {
          Error.call(this);
          this.message = 'Timeout has occurred';
          this.name = 'TimeoutError';
          return this;
        }

        TimeoutErrorImpl.prototype = Object.create(Error.prototype);
        return TimeoutErrorImpl;
      }();

      var TimeoutError = TimeoutErrorImpl; //# sourceMappingURL=TimeoutError.js.map

      /***/
    },

    /***/
    "WrY/":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/bindCallback.js ***!
      \********************************************************************************************************/

    /*! exports provided: bindCallback */

    /***/
    function WrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bindCallback", function () {
        return bindCallback;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../AsyncSubject */
      "y7uT");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../operators/map */
      "k3Lq");
      /* harmony import */


      var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/canReportError */
      "OKNj");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");

      function bindCallback(callbackFunc, resultSelector, scheduler) {
        if (resultSelector) {
          if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
          } else {
            return function () {
              return bindCallback(callbackFunc, scheduler).apply(void 0, arguments).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
                return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
              }));
            };
          }
        }

        return function () {
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          var context = this;
          var subject;
          var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler
          };
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            if (!scheduler) {
              if (!subject) {
                subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

                var handler = function handler() {
                  for (var _len10 = arguments.length, innerArgs = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                    innerArgs[_key10] = arguments[_key10];
                  }

                  subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                  subject.complete();
                };

                try {
                  callbackFunc.apply(context, [].concat(args, [handler]));
                } catch (err) {
                  if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                    subject.error(err);
                  } else {
                    console.warn(err);
                  }
                }
              }

              return subject.subscribe(subscriber);
            } else {
              var state = {
                args: args,
                subscriber: subscriber,
                params: params
              };
              return scheduler.schedule(dispatch, 0, state);
            }
          });
        };
      }

      function dispatch(state) {
        var _this26 = this;

        var self = this;
        var args = state.args,
            subscriber = state.subscriber,
            params = state.params;
        var callbackFunc = params.callbackFunc,
            context = params.context,
            scheduler = params.scheduler;
        var subject = params.subject;

        if (!subject) {
          subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          var handler = function handler() {
            for (var _len11 = arguments.length, innerArgs = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              innerArgs[_key11] = arguments[_key11];
            }

            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

            _this26.add(scheduler.schedule(dispatchNext, 0, {
              value: value,
              subject: subject
            }));
          };

          try {
            callbackFunc.apply(context, [].concat(_toConsumableArray(args), [handler]));
          } catch (err) {
            subject.error(err);
          }
        }

        this.add(subject.subscribe(subscriber));
      }

      function dispatchNext(state) {
        var value = state.value,
            subject = state.subject;
        subject.next(value);
        subject.complete();
      }

      function dispatchError(state) {
        var err = state.err,
            subject = state.subject;
        subject.error(err);
      } //# sourceMappingURL=bindCallback.js.map

      /***/

    },

    /***/
    "XyFK":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Notification.js ***!
      \*********************************************************************************************/

    /*! exports provided: NotificationKind, Notification */

    /***/
    function XyFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationKind", function () {
        return NotificationKind;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Notification", function () {
        return Notification;
      });
      /* harmony import */


      var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./observable/empty */
      "KpRf");
      /* harmony import */


      var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observable/of */
      "Zu/Y");
      /* harmony import */


      var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./observable/throwError */
      "Dc5y");

      var NotificationKind;

      (function (NotificationKind) {
        NotificationKind["NEXT"] = "N";
        NotificationKind["ERROR"] = "E";
        NotificationKind["COMPLETE"] = "C";
      })(NotificationKind || (NotificationKind = {}));

      var Notification = /*#__PURE__*/function () {
        function Notification(kind, value, error) {
          _classCallCheck(this, Notification);

          this.kind = kind;
          this.value = value;
          this.error = error;
          this.hasValue = kind === 'N';
        }

        _createClass(Notification, [{
          key: "observe",
          value: function observe(observer) {
            switch (this.kind) {
              case 'N':
                return observer.next && observer.next(this.value);

              case 'E':
                return observer.error && observer.error(this.error);

              case 'C':
                return observer.complete && observer.complete();
            }
          }
        }, {
          key: "do",
          value: function _do(next, error, complete) {
            var kind = this.kind;

            switch (kind) {
              case 'N':
                return next && next(this.value);

              case 'E':
                return error && error(this.error);

              case 'C':
                return complete && complete();
            }
          }
        }, {
          key: "accept",
          value: function accept(nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
              return this.observe(nextOrObserver);
            } else {
              return this["do"](nextOrObserver, error, complete);
            }
          }
        }, {
          key: "toObservable",
          value: function toObservable() {
            var kind = this.kind;

            switch (kind) {
              case 'N':
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);

              case 'E':
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);

              case 'C':
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
            }

            throw new Error('unexpected notification kind value');
          }
        }], [{
          key: "createNext",
          value: function createNext(value) {
            if (typeof value !== 'undefined') {
              return new Notification('N', value);
            }

            return Notification.undefinedValueNotification;
          }
        }, {
          key: "createError",
          value: function createError(err) {
            return new Notification('E', undefined, err);
          }
        }, {
          key: "createComplete",
          value: function createComplete() {
            return Notification.completeNotification;
          }
        }]);

        return Notification;
      }();

      Notification.completeNotification = new Notification('C');
      Notification.undefinedValueNotification = new Notification('N', undefined); //# sourceMappingURL=Notification.js.map

      /***/
    },

    /***/
    "Y1rO":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
      \***********************************************************************************************/

    /*! exports provided: Immediate, TestTools */

    /***/
    function Y1rO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Immediate", function () {
        return Immediate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestTools", function () {
        return TestTools;
      });

      var nextHandle = 1;

      var RESOLVED = function () {
        return Promise.resolve();
      }();

      var activeHandles = {};

      function findAndClearHandle(handle) {
        if (handle in activeHandles) {
          delete activeHandles[handle];
          return true;
        }

        return false;
      }

      var Immediate = {
        setImmediate: function setImmediate(cb) {
          var handle = nextHandle++;
          activeHandles[handle] = true;
          RESOLVED.then(function () {
            return findAndClearHandle(handle) && cb();
          });
          return handle;
        },
        clearImmediate: function clearImmediate(handle) {
          findAndClearHandle(handle);
        }
      };
      var TestTools = {
        pending: function pending() {
          return Object.keys(activeHandles).length;
        }
      }; //# sourceMappingURL=Immediate.js.map

      /***/
    },

    /***/
    "YhVK":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/partition.js ***!
      \*****************************************************************************************************/

    /*! exports provided: partition */

    /***/
    function YhVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "partition", function () {
        return partition;
      });
      /* harmony import */


      var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/not */
      "Kiss");
      /* harmony import */


      var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeTo */
      "nO6v");
      /* harmony import */


      var _operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../operators/filter */
      "4nUx");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      "faBL");

      function partition(source, predicate, thisArg) {
        return [Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(predicate, thisArg)(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source))), Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source)))];
      } //# sourceMappingURL=partition.js.map

      /***/

    },

    /***/
    "ZtUA":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Subscription.js ***!
      \*********************************************************************************************/

    /*! exports provided: Subscription */

    /***/
    function ZtUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Subscription", function () {
        return Subscription;
      });
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util/isArray */
      "n7Bv");
      /* harmony import */


      var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/isObject */
      "lpsS");
      /* harmony import */


      var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util/isFunction */
      "ybNo");
      /* harmony import */


      var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./util/UnsubscriptionError */
      "i22g");

      var Subscription = /*#__PURE__*/function () {
        function Subscription(unsubscribe) {
          _classCallCheck(this, Subscription);

          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
          }
        }

        _createClass(Subscription, [{
          key: "unsubscribe",
          value: function unsubscribe() {
            var errors;

            if (this.closed) {
              return;
            }

            var _parentOrParents = this._parentOrParents,
                _ctorUnsubscribe = this._ctorUnsubscribe,
                _unsubscribe = this._unsubscribe,
                _subscriptions = this._subscriptions;
            this.closed = true;
            this._parentOrParents = null;
            this._subscriptions = null;

            if (_parentOrParents instanceof Subscription) {
              _parentOrParents.remove(this);
            } else if (_parentOrParents !== null) {
              for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent = _parentOrParents[index];
                parent.remove(this);
              }
            }

            if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
              if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
              }

              try {
                _unsubscribe.call(this);
              } catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
              }
            }

            if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
              var _index = -1;

              var len = _subscriptions.length;

              while (++_index < len) {
                var sub = _subscriptions[_index];

                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                  try {
                    sub.unsubscribe();
                  } catch (e) {
                    errors = errors || [];

                    if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                      errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                    } else {
                      errors.push(e);
                    }
                  }
                }
              }
            }

            if (errors) {
              throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
            }
          }
        }, {
          key: "add",
          value: function add(teardown) {
            var subscription = teardown;

            if (!teardown) {
              return Subscription.EMPTY;
            }

            switch (typeof teardown) {
              case 'function':
                subscription = new Subscription(teardown);

              case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                  return subscription;
                } else if (this.closed) {
                  subscription.unsubscribe();
                  return subscription;
                } else if (!(subscription instanceof Subscription)) {
                  var tmp = subscription;
                  subscription = new Subscription();
                  subscription._subscriptions = [tmp];
                }

                break;

              default:
                {
                  throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
            }

            var _subscription = subscription,
                _parentOrParents = _subscription._parentOrParents;

            if (_parentOrParents === null) {
              subscription._parentOrParents = this;
            } else if (_parentOrParents instanceof Subscription) {
              if (_parentOrParents === this) {
                return subscription;
              }

              subscription._parentOrParents = [_parentOrParents, this];
            } else if (_parentOrParents.indexOf(this) === -1) {
              _parentOrParents.push(this);
            } else {
              return subscription;
            }

            var subscriptions = this._subscriptions;

            if (subscriptions === null) {
              this._subscriptions = [subscription];
            } else {
              subscriptions.push(subscription);
            }

            return subscription;
          }
        }, {
          key: "remove",
          value: function remove(subscription) {
            var subscriptions = this._subscriptions;

            if (subscriptions) {
              var subscriptionIndex = subscriptions.indexOf(subscription);

              if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
              }
            }
          }
        }]);

        return Subscription;
      }();

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) {
          return errs.concat(err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? err.errors : err);
        }, []);
      } //# sourceMappingURL=Subscription.js.map

      /***/

    },

    /***/
    "Zu/Y":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/of.js ***!
      \**********************************************************************************************/

    /*! exports provided: of */

    /***/
    function ZuY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "of", function () {
        return of;
      });
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");
      /* harmony import */


      var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fromArray */
      "oNEL");
      /* harmony import */


      var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduled/scheduleArray */
      "cRG+");

      function of() {
        for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          args[_key12] = arguments[_key12];
        }

        var scheduler = args[args.length - 1];

        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
          args.pop();
          return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
        } else {
          return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
        }
      } //# sourceMappingURL=of.js.map

      /***/

    },

    /***/
    "a4rz":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/range.js ***!
      \*************************************************************************************************/

    /*! exports provided: range, dispatch */

    /***/
    function a4rz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "range", function () {
        return range;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatch", function () {
        return dispatch;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");

      function range() {
        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var count = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          if (count === undefined) {
            count = start;
            start = 0;
          }

          var index = 0;
          var current = start;

          if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
              index: index,
              count: count,
              start: start,
              subscriber: subscriber
            });
          } else {
            do {
              if (index++ >= count) {
                subscriber.complete();
                break;
              }

              subscriber.next(current++);

              if (subscriber.closed) {
                break;
              }
            } while (true);
          }

          return undefined;
        });
      }

      function dispatch(state) {
        var start = state.start,
            index = state.index,
            count = state.count,
            subscriber = state.subscriber;

        if (index >= count) {
          subscriber.complete();
          return;
        }

        subscriber.next(start);

        if (subscriber.closed) {
          return;
        }

        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
      } //# sourceMappingURL=range.js.map

      /***/

    },

    /***/
    "aCrv":
    /*!*****************************************************!*\
      !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function aCrv(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * Tween.js - Licensed under the MIT license
      * https://github.com/tweenjs/tween.js
      * ----------------------------------------------
      *
      * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
      * Thank you all, you're awesome!
      */


      var _Group = function _Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
      };

      _Group.prototype = {
        getAll: function getAll() {
          return Object.keys(this._tweens).map(function (tweenId) {
            return this._tweens[tweenId];
          }.bind(this));
        },
        removeAll: function removeAll() {
          this._tweens = {};
        },
        add: function add(tween) {
          this._tweens[tween.getId()] = tween;
          this._tweensAddedDuringUpdate[tween.getId()] = tween;
        },
        remove: function remove(tween) {
          delete this._tweens[tween.getId()];
          delete this._tweensAddedDuringUpdate[tween.getId()];
        },
        update: function update(time, preserve) {
          var tweenIds = Object.keys(this._tweens);

          if (tweenIds.length === 0) {
            return false;
          }

          time = time !== undefined ? time : TWEEN.now(); // Tweens are updated in "batches". If you add a new tween during an update, then the
          // new tween will be updated in the next batch.
          // If you remove a tween during an update, it may or may not be updated. However,
          // if the removed tween was added during the current batch, then it will not be updated.

          while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};

            for (var i = 0; i < tweenIds.length; i++) {
              var tween = this._tweens[tweenIds[i]];

              if (tween && tween.update(time) === false) {
                tween._isPlaying = false;

                if (!preserve) {
                  delete this._tweens[tweenIds[i]];
                }
              }
            }

            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
          }

          return true;
        }
      };
      var TWEEN = new _Group();
      TWEEN.Group = _Group;
      TWEEN._nextId = 0;

      TWEEN.nextId = function () {
        return TWEEN._nextId++;
      }; // Include a performance.now polyfill.
      // In node.js, use process.hrtime.


      if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
        TWEEN.now = function () {
          var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

          return time[0] * 1000 + time[1] / 1000000;
        };
      } // In a browser, use self.performance.now if it is available.
      else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
          // This must be bound, because directly assigning this function
          // leads to an invocation exception in Chrome.
          TWEEN.now = self.performance.now.bind(self.performance);
        } // Use Date.now if it is available.
        else if (Date.now !== undefined) {
            TWEEN.now = Date.now;
          } // Otherwise, use 'new Date().getTime()'.
          else {
              TWEEN.now = function () {
                return new Date().getTime();
              };
            }

      TWEEN.Tween = function (object, group) {
        this._object = object;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._repeat = 0;
        this._repeatDelayTime = undefined;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = null;
        this._easingFunction = TWEEN.Easing.Linear.None;
        this._interpolationFunction = TWEEN.Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallback = null;
        this._onStartCallbackFired = false;
        this._onUpdateCallback = null;
        this._onRepeatCallback = null;
        this._onCompleteCallback = null;
        this._onStopCallback = null;
        this._group = group || TWEEN;
        this._id = TWEEN.nextId();
      };

      TWEEN.Tween.prototype = {
        getId: function getId() {
          return this._id;
        },
        isPlaying: function isPlaying() {
          return this._isPlaying;
        },
        to: function to(properties, duration) {
          this._valuesEnd = properties;

          if (duration !== undefined) {
            this._duration = duration;
          }

          return this;
        },
        duration: function duration(d) {
          this._duration = d;
          return this;
        },
        start: function start(time) {
          this._group.add(this);

          this._isPlaying = true;
          this._onStartCallbackFired = false;
          this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
          this._startTime += this._delayTime;

          for (var property in this._valuesEnd) {
            // Check if an Array was provided as property value
            if (this._valuesEnd[property] instanceof Array) {
              if (this._valuesEnd[property].length === 0) {
                continue;
              } // Create a local copy of the Array with the start value at the front


              this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
            } // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object


            if (this._object[property] === undefined) {
              continue;
            } // Save the starting value.


            this._valuesStart[property] = this._object[property];

            if (this._valuesStart[property] instanceof Array === false) {
              this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
            }

            this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
          }

          return this;
        },
        stop: function stop() {
          if (!this._isPlaying) {
            return this;
          }

          this._group.remove(this);

          this._isPlaying = false;

          if (this._onStopCallback !== null) {
            this._onStopCallback(this._object);
          }

          this.stopChainedTweens();
          return this;
        },
        end: function end() {
          this.update(Infinity);
          return this;
        },
        stopChainedTweens: function stopChainedTweens() {
          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
          }
        },
        group: function group(_group2) {
          this._group = _group2;
          return this;
        },
        delay: function delay(amount) {
          this._delayTime = amount;
          return this;
        },
        repeat: function repeat(times) {
          this._repeat = times;
          return this;
        },
        repeatDelay: function repeatDelay(amount) {
          this._repeatDelayTime = amount;
          return this;
        },
        yoyo: function yoyo(_yoyo) {
          this._yoyo = _yoyo;
          return this;
        },
        easing: function easing(easingFunction) {
          this._easingFunction = easingFunction;
          return this;
        },
        interpolation: function interpolation(interpolationFunction) {
          this._interpolationFunction = interpolationFunction;
          return this;
        },
        chain: function chain() {
          this._chainedTweens = arguments;
          return this;
        },
        onStart: function onStart(callback) {
          this._onStartCallback = callback;
          return this;
        },
        onUpdate: function onUpdate(callback) {
          this._onUpdateCallback = callback;
          return this;
        },
        onRepeat: function onRepeat(callback) {
          this._onRepeatCallback = callback;
          return this;
        },
        onComplete: function onComplete(callback) {
          this._onCompleteCallback = callback;
          return this;
        },
        onStop: function onStop(callback) {
          this._onStopCallback = callback;
          return this;
        },
        update: function update(time) {
          var property;
          var elapsed;
          var value;

          if (time < this._startTime) {
            return true;
          }

          if (this._onStartCallbackFired === false) {
            if (this._onStartCallback !== null) {
              this._onStartCallback(this._object);
            }

            this._onStartCallbackFired = true;
          }

          elapsed = (time - this._startTime) / this._duration;
          elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
          value = this._easingFunction(elapsed);

          for (property in this._valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (this._valuesStart[property] === undefined) {
              continue;
            }

            var start = this._valuesStart[property] || 0;
            var end = this._valuesEnd[property];

            if (end instanceof Array) {
              this._object[property] = this._interpolationFunction(end, value);
            } else {
              // Parses relative end values with start as base (e.g.: +10, -3)
              if (typeof end === 'string') {
                if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                  end = start + parseFloat(end);
                } else {
                  end = parseFloat(end);
                }
              } // Protect against non numeric properties.


              if (typeof end === 'number') {
                this._object[property] = start + (end - start) * value;
              }
            }
          }

          if (this._onUpdateCallback !== null) {
            this._onUpdateCallback(this._object, elapsed);
          }

          if (elapsed === 1) {
            if (this._repeat > 0) {
              if (isFinite(this._repeat)) {
                this._repeat--;
              } // Reassign starting values, restart by making startTime = now


              for (property in this._valuesStartRepeat) {
                if (typeof this._valuesEnd[property] === 'string') {
                  this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                }

                if (this._yoyo) {
                  var tmp = this._valuesStartRepeat[property];
                  this._valuesStartRepeat[property] = this._valuesEnd[property];
                  this._valuesEnd[property] = tmp;
                }

                this._valuesStart[property] = this._valuesStartRepeat[property];
              }

              if (this._yoyo) {
                this._reversed = !this._reversed;
              }

              if (this._repeatDelayTime !== undefined) {
                this._startTime = time + this._repeatDelayTime;
              } else {
                this._startTime = time + this._delayTime;
              }

              if (this._onRepeatCallback !== null) {
                this._onRepeatCallback(this._object);
              }

              return true;
            } else {
              if (this._onCompleteCallback !== null) {
                this._onCompleteCallback(this._object);
              }

              for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                // Make the chained tweens start exactly at the time they should,
                // even if the `update()` method was called way past the duration of the tween
                this._chainedTweens[i].start(this._startTime + this._duration);
              }

              return false;
            }
          }

          return true;
        }
      };
      TWEEN.Easing = {
        Linear: {
          None: function None(k) {
            return k;
          }
        },
        Quadratic: {
          In: function In(k) {
            return k * k;
          },
          Out: function Out(k) {
            return k * (2 - k);
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k;
            }

            return -0.5 * (--k * (k - 2) - 1);
          }
        },
        Cubic: {
          In: function In(k) {
            return k * k * k;
          },
          Out: function Out(k) {
            return --k * k * k + 1;
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k;
            }

            return 0.5 * ((k -= 2) * k * k + 2);
          }
        },
        Quartic: {
          In: function In(k) {
            return k * k * k * k;
          },
          Out: function Out(k) {
            return 1 - --k * k * k * k;
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k;
            }

            return -0.5 * ((k -= 2) * k * k * k - 2);
          }
        },
        Quintic: {
          In: function In(k) {
            return k * k * k * k * k;
          },
          Out: function Out(k) {
            return --k * k * k * k * k + 1;
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k * k;
            }

            return 0.5 * ((k -= 2) * k * k * k * k + 2);
          }
        },
        Sinusoidal: {
          In: function In(k) {
            return 1 - Math.cos(k * Math.PI / 2);
          },
          Out: function Out(k) {
            return Math.sin(k * Math.PI / 2);
          },
          InOut: function InOut(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
        },
        Exponential: {
          In: function In(k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
          },
          Out: function Out(k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
          },
          InOut: function InOut(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            if ((k *= 2) < 1) {
              return 0.5 * Math.pow(1024, k - 1);
            }

            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
          }
        },
        Circular: {
          In: function In(k) {
            return 1 - Math.sqrt(1 - k * k);
          },
          Out: function Out(k) {
            return Math.sqrt(1 - --k * k);
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }

            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
          }
        },
        Elastic: {
          In: function In(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
          },
          Out: function Out(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
          },
          InOut: function InOut(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            k *= 2;

            if (k < 1) {
              return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }

            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
          }
        },
        Back: {
          In: function In(k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
          },
          Out: function Out(k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
          },
          InOut: function InOut(k) {
            var s = 1.70158 * 1.525;

            if ((k *= 2) < 1) {
              return 0.5 * (k * k * ((s + 1) * k - s));
            }

            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
          }
        },
        Bounce: {
          In: function In(k) {
            return 1 - TWEEN.Easing.Bounce.Out(1 - k);
          },
          Out: function Out(k) {
            if (k < 1 / 2.75) {
              return 7.5625 * k * k;
            } else if (k < 2 / 2.75) {
              return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
            } else if (k < 2.5 / 2.75) {
              return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
            } else {
              return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
            }
          },
          InOut: function InOut(k) {
            if (k < 0.5) {
              return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
            }

            return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
          }
        }
      };
      TWEEN.Interpolation = {
        Linear: function Linear(v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = TWEEN.Interpolation.Utils.Linear;

          if (k < 0) {
            return fn(v[0], v[1], f);
          }

          if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
          }

          return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
        },
        Bezier: function Bezier(v, k) {
          var b = 0;
          var n = v.length - 1;
          var pw = Math.pow;
          var bn = TWEEN.Interpolation.Utils.Bernstein;

          for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
          }

          return b;
        },
        CatmullRom: function CatmullRom(v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = TWEEN.Interpolation.Utils.CatmullRom;

          if (v[0] === v[m]) {
            if (k < 0) {
              i = Math.floor(f = m * (1 + k));
            }

            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
          } else {
            if (k < 0) {
              return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }

            if (k > 1) {
              return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }

            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
          }
        },
        Utils: {
          Linear: function Linear(p0, p1, t) {
            return (p1 - p0) * t + p0;
          },
          Bernstein: function Bernstein(n, i) {
            var fc = TWEEN.Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
          },
          Factorial: function () {
            var a = [1];
            return function (n) {
              var s = 1;

              if (a[n]) {
                return a[n];
              }

              for (var i = n; i > 1; i--) {
                s *= i;
              }

              a[n] = s;
              return s;
            };
          }(),
          CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
          }
        }
      }; // UMD (Universal Module Definition)

      (function (root) {
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return TWEEN;
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(this);
      /***/

    },

    /***/
    "b54l":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js ***!
      \***************************************************************************************************/

    /*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber, flatMap */

    /***/
    function b54l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeMap", function () {
        return mergeMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function () {
        return MergeMapOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function () {
        return MergeMapSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flatMap", function () {
        return flatMap;
      });
      /* harmony import */


      var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./map */
      "k3Lq");
      /* harmony import */


      var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../observable/from */
      "F0B0");
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../innerSubscribe */
      "cipC");

      function mergeMap(project, resultSelector) {
        var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

        if (typeof resultSelector === 'function') {
          return function (source) {
            return source.pipe(mergeMap(function (a, i) {
              return Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(function (b, ii) {
                return resultSelector(a, b, i, ii);
              }));
            }, concurrent));
          };
        } else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
        }

        return function (source) {
          return source.lift(new MergeMapOperator(project, concurrent));
        };
      }

      var MergeMapOperator = /*#__PURE__*/function () {
        function MergeMapOperator(project) {
          var concurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

          _classCallCheck(this, MergeMapOperator);

          this.project = project;
          this.concurrent = concurrent;
        }

        _createClass(MergeMapOperator, [{
          key: "call",
          value: function call(observer, source) {
            return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
          }
        }]);

        return MergeMapOperator;
      }();

      var MergeMapSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP2) {
        _inherits(MergeMapSubscriber, _innerSubscribe__WEBP2);

        var _super24 = _createSuper(MergeMapSubscriber);

        function MergeMapSubscriber(destination, project) {
          var _this27;

          var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

          _classCallCheck(this, MergeMapSubscriber);

          _this27 = _super24.call(this, destination);
          _this27.project = project;
          _this27.concurrent = concurrent;
          _this27.hasCompleted = false;
          _this27.buffer = [];
          _this27.active = 0;
          _this27.index = 0;
          return _this27;
        }

        _createClass(MergeMapSubscriber, [{
          key: "_next",
          value: function _next(value) {
            if (this.active < this.concurrent) {
              this._tryNext(value);
            } else {
              this.buffer.push(value);
            }
          }
        }, {
          key: "_tryNext",
          value: function _tryNext(value) {
            var result;
            var index = this.index++;

            try {
              result = this.project(value, index);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            this.active++;

            this._innerSub(result);
          }
        }, {
          key: "_innerSub",
          value: function _innerSub(ish) {
            var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(ish, innerSubscriber);

            if (innerSubscription !== innerSubscriber) {
              destination.add(innerSubscription);
            }
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.hasCompleted = true;

            if (this.active === 0 && this.buffer.length === 0) {
              this.destination.complete();
            }

            this.unsubscribe();
          }
        }, {
          key: "notifyNext",
          value: function notifyNext(innerValue) {
            this.destination.next(innerValue);
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {
            var buffer = this.buffer;
            this.active--;

            if (buffer.length > 0) {
              this._next(buffer.shift());
            } else if (this.active === 0 && this.hasCompleted) {
              this.destination.complete();
            }
          }
        }]);

        return MergeMapSubscriber;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"]);

      var flatMap = mergeMap; //# sourceMappingURL=mergeMap.js.map

      /***/
    },

    /***/
    "bZi5":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/generate.js ***!
      \****************************************************************************************************/

    /*! exports provided: generate */

    /***/
    function bZi5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generate", function () {
        return generate;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/identity */
      "g8rM");
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isScheduler */
      "dcW+");

      function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        var resultSelector;
        var initialState;

        if (arguments.length == 1) {
          var options = initialStateOrOptions;
          initialState = options.initialState;
          condition = options.condition;
          iterate = options.iterate;
          resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
          scheduler = options.scheduler;
        } else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
          initialState = initialStateOrOptions;
          resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
          scheduler = resultSelectorOrObservable;
        } else {
          initialState = initialStateOrOptions;
          resultSelector = resultSelectorOrObservable;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var state = initialState;

          if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
              subscriber: subscriber,
              iterate: iterate,
              condition: condition,
              resultSelector: resultSelector,
              state: state
            });
          }

          do {
            if (condition) {
              var conditionResult = void 0;

              try {
                conditionResult = condition(state);
              } catch (err) {
                subscriber.error(err);
                return undefined;
              }

              if (!conditionResult) {
                subscriber.complete();
                break;
              }
            }

            var value = void 0;

            try {
              value = resultSelector(state);
            } catch (err) {
              subscriber.error(err);
              return undefined;
            }

            subscriber.next(value);

            if (subscriber.closed) {
              break;
            }

            try {
              state = iterate(state);
            } catch (err) {
              subscriber.error(err);
              return undefined;
            }
          } while (true);

          return undefined;
        });
      }

      function dispatch(state) {
        var subscriber = state.subscriber,
            condition = state.condition;

        if (subscriber.closed) {
          return undefined;
        }

        if (state.needIterate) {
          try {
            state.state = state.iterate(state.state);
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }
        } else {
          state.needIterate = true;
        }

        if (condition) {
          var conditionResult;

          try {
            conditionResult = condition(state.state);
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }

          if (!conditionResult) {
            subscriber.complete();
            return undefined;
          }

          if (subscriber.closed) {
            return undefined;
          }
        }

        var value;

        try {
          value = state.resultSelector(state.state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (subscriber.closed) {
          return undefined;
        }

        subscriber.next(value);

        if (subscriber.closed) {
          return undefined;
        }

        return this.schedule(state);
      } //# sourceMappingURL=generate.js.map

      /***/

    },

    /***/
    "cRG+":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js ***!
      \********************************************************************************************************/

    /*! exports provided: scheduleArray */

    /***/
    function cRG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scheduleArray", function () {
        return scheduleArray;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");

      function scheduleArray(input, scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
          var i = 0;
          sub.add(scheduler.schedule(function () {
            if (i === input.length) {
              subscriber.complete();
              return;
            }

            subscriber.next(input[i++]);

            if (!subscriber.closed) {
              sub.add(this.schedule());
            }
          }));
          return sub;
        });
      } //# sourceMappingURL=scheduleArray.js.map

      /***/

    },

    /***/
    "cbgO":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js ***!
      \*********************************************************************************************************/

    /*! exports provided: subscribeToIterable */

    /***/
    function cbgO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function () {
        return subscribeToIterable;
      });
      /* harmony import */


      var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../symbol/iterator */
      "9yG4");

      var subscribeToIterable = function subscribeToIterable(iterable) {
        return function (subscriber) {
          var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();

          do {
            var item = void 0;

            try {
              item = iterator.next();
            } catch (err) {
              subscriber.error(err);
              return subscriber;
            }

            if (item.done) {
              subscriber.complete();
              break;
            }

            subscriber.next(item.value);

            if (subscriber.closed) {
              break;
            }
          } while (true);

          if (typeof iterator["return"] === 'function') {
            subscriber.add(function () {
              if (iterator["return"]) {
                iterator["return"]();
              }
            });
          }

          return subscriber;
        };
      }; //# sourceMappingURL=subscribeToIterable.js.map

      /***/

    },

    /***/
    "cipC":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/innerSubscribe.js ***!
      \***********************************************************************************************/

    /*! exports provided: SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber, innerSubscribe */

    /***/
    function cipC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleInnerSubscriber", function () {
        return SimpleInnerSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplexInnerSubscriber", function () {
        return ComplexInnerSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleOuterSubscriber", function () {
        return SimpleOuterSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplexOuterSubscriber", function () {
        return ComplexOuterSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "innerSubscribe", function () {
        return innerSubscribe;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subscriber */
      "8yGl");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Observable */
      "faBL");
      /* harmony import */


      var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util/subscribeTo */
      "nO6v");

      var SimpleInnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_8) {
        _inherits(SimpleInnerSubscriber, _Subscriber__WEBPACK_8);

        var _super25 = _createSuper(SimpleInnerSubscriber);

        function SimpleInnerSubscriber(parent) {
          var _this28;

          _classCallCheck(this, SimpleInnerSubscriber);

          _this28 = _super25.call(this);
          _this28.parent = parent;
          return _this28;
        }

        _createClass(SimpleInnerSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.parent.notifyNext(value);
          }
        }, {
          key: "_error",
          value: function _error(error) {
            this.parent.notifyError(error);
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.parent.notifyComplete();
            this.unsubscribe();
          }
        }]);

        return SimpleInnerSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      var ComplexInnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_9) {
        _inherits(ComplexInnerSubscriber, _Subscriber__WEBPACK_9);

        var _super26 = _createSuper(ComplexInnerSubscriber);

        function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
          var _this29;

          _classCallCheck(this, ComplexInnerSubscriber);

          _this29 = _super26.call(this);
          _this29.parent = parent;
          _this29.outerValue = outerValue;
          _this29.outerIndex = outerIndex;
          return _this29;
        }

        _createClass(ComplexInnerSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
          }
        }, {
          key: "_error",
          value: function _error(error) {
            this.parent.notifyError(error);
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.parent.notifyComplete(this);
            this.unsubscribe();
          }
        }]);

        return ComplexInnerSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      var SimpleOuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_10) {
        _inherits(SimpleOuterSubscriber, _Subscriber__WEBPACK_10);

        var _super27 = _createSuper(SimpleOuterSubscriber);

        function SimpleOuterSubscriber() {
          _classCallCheck(this, SimpleOuterSubscriber);

          return _super27.apply(this, arguments);
        }

        _createClass(SimpleOuterSubscriber, [{
          key: "notifyNext",
          value: function notifyNext(innerValue) {
            this.destination.next(innerValue);
          }
        }, {
          key: "notifyError",
          value: function notifyError(err) {
            this.destination.error(err);
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {
            this.destination.complete();
          }
        }]);

        return SimpleOuterSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      var ComplexOuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_11) {
        _inherits(ComplexOuterSubscriber, _Subscriber__WEBPACK_11);

        var _super28 = _createSuper(ComplexOuterSubscriber);

        function ComplexOuterSubscriber() {
          _classCallCheck(this, ComplexOuterSubscriber);

          return _super28.apply(this, arguments);
        }

        _createClass(ComplexOuterSubscriber, [{
          key: "notifyNext",
          value: function notifyNext(_outerValue, innerValue, _outerIndex, _innerSub) {
            this.destination.next(innerValue);
          }
        }, {
          key: "notifyError",
          value: function notifyError(error) {
            this.destination.error(error);
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete(_innerSub) {
            this.destination.complete();
          }
        }]);

        return ComplexOuterSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      function innerSubscribe(result, innerSubscriber) {
        if (innerSubscriber.closed) {
          return undefined;
        }

        if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
          return result.subscribe(innerSubscriber);
        }

        return Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(result)(innerSubscriber);
      } //# sourceMappingURL=innerSubscribe.js.map

      /***/

    },

    /***/
    "dcW+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isScheduler.js ***!
      \*************************************************************************************************/

    /*! exports provided: isScheduler */

    /***/
    function dcW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isScheduler", function () {
        return isScheduler;
      });

      function isScheduler(value) {
        return value && typeof value.schedule === 'function';
      } //# sourceMappingURL=isScheduler.js.map

      /***/

    },

    /***/
    "e/mZ":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js ***!
      \***********************************************************************************************************/

    /*! exports provided: AngularMultiSelect, AngularMultiSelectModule, ClickOutsideDirective, Item, ListFilterPipe, TemplateRenderer, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵm */

    /***/
    function eMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularMultiSelect", function () {
        return AngularMultiSelect;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularMultiSelectModule", function () {
        return AngularMultiSelectModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
        return ClickOutsideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Item", function () {
        return Item;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function () {
        return ListFilterPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function () {
        return TemplateRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DROPDOWN_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return DROPDOWN_CONTROL_VALIDATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return ScrollDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return styleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return setPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return Badge;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return Search;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return CIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return VirtualScrollerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return VirtualScrollerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return DataService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @tweenjs/tween.js */
      "aCrv");
      /* harmony import */


      var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function CIcon__svg_svg_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["header"];
      var _c1 = ["container"];
      var _c2 = ["content"];
      var _c3 = ["invisiblePadding"];
      var _c4 = ["*"];
      var _c5 = ["searchInput"];
      var _c6 = ["selectedList"];
      var _c7 = ["dropdownList"];
      var _c8 = ["cuppaDropdown"];

      function AngularMultiSelect_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.settings.text);
        }
      }

      function AngularMultiSelect_span_6_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r29[ctx_r28.settings.labelKey], " ");
        }
      }

      function AngularMultiSelect_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_span_6_span_1_Template, 2, 1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.selectedItems)("ngForTrackBy", ctx_r3.trackByFn.bind(ctx_r3));
        }
      }

      function AngularMultiSelect_span_7_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r32[ctx_r34.settings.labelKey]);
        }
      }

      function AngularMultiSelect_span_7_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r35.badgeTempl)("item", item_r32);
        }
      }

      function AngularMultiSelect_span_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_span_1_Template, 2, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_span_7_div_1_span_2_Template, 2, 2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_span_7_div_1_Template_span_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var item_r32 = ctx.$implicit;
            var k_r33 = ctx.index;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r38.onItemClick(item_r32, k_r33, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "remove");
        }
      }

      function AngularMultiSelect_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_Template, 5, 3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.selectedItems)("ngForTrackBy", ctx_r4.trackByFn.bind(ctx_r4));
        }
      }

      function AngularMultiSelect_div_8_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41[ctx_r43.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_8_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r44.badgeTempl)("item", item_r41);
        }
      }

      function AngularMultiSelect_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_span_1_Template, 2, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_8_div_1_span_2_Template, 2, 2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_8_div_1_Template_span_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var item_r41 = ctx.$implicit;
            var k_r42 = ctx.index;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r47.onItemClick(item_r41, k_r42, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var k_r42 = ctx.index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", k_r42 > ctx_r40.settings.badgeShowLimit - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r40.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "remove");
        }
      }

      function AngularMultiSelect_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_Template, 5, 4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.selectedItems)("ngForTrackBy", ctx_r5.trackByFn.bind(ctx_r5));
        }
      }

      function AngularMultiSelect_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", (ctx_r6.selectedItems == null ? null : ctx_r6.selectedItems.length) - ctx_r6.settings.badgeShowLimit, "");
        }
      }

      function AngularMultiSelect_span_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_span_10_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r49.clearSelection($event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "remove");
        }
      }

      function AngularMultiSelect_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "angle-down");
        }
      }

      function AngularMultiSelect_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "angle-up");
        }
      }

      function AngularMultiSelect_div_18_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularMultiSelect_div_18_input_1_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.toggleSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r51.isSelectAll)("disabled", ctx_r51.settings.limitSelection == (ctx_r51.selectedItems == null ? null : ctx_r51.selectedItems.length))("id", ctx_r51.id);
        }
      }

      function AngularMultiSelect_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_18_input_1_Template, 1, 3, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r11.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r11.isSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.settings.selectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r11.isSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.settings.unSelectAllText);
        }
      }

      function AngularMultiSelect_img_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
        }
      }

      function AngularMultiSelect_div_20_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_3_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.clearSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r54.filter == undefined || (ctx_r54.filter == null ? null : ctx_r54.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "clear");
        }
      }

      function AngularMultiSelect_div_20_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_4_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.resetInfiniteSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r55.filter == undefined || (ctx_r55.filter == null ? null : ctx_r55.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "clear");
        }
      }

      function AngularMultiSelect_div_20_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r65.filter = $event;
          })("keyup", function AngularMultiSelect_div_20_input_5_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r67.filterGroupedList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r56.settings.searchPlaceholderText)("ngModel", ctx_r56.filter);
        }
      }

      function AngularMultiSelect_div_20_input_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 55, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_6_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r69.filter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r57.settings.searchPlaceholderText)("ngModel", ctx_r57.filter);
        }
      }

      function AngularMultiSelect_div_20_input_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_7_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r72.filter = $event;
          })("keyup", function AngularMultiSelect_div_20_input_7_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r74.searchTerm$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r58.settings.searchPlaceholderText)("ngModel", ctx_r58.filter);
        }
      }

      function AngularMultiSelect_div_20_c_templateRenderer_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-templateRenderer", 33);
        }

        if (rf & 2) {
          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r59.searchTempl)("item", ctx_r59.item);
        }
      }

      function AngularMultiSelect_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_20_span_3_Template, 2, 2, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularMultiSelect_div_20_span_4_Template, 2, 2, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularMultiSelect_div_20_input_5_Template, 2, 2, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_div_20_input_6_Template, 2, 2, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AngularMultiSelect_div_20_input_7_Template, 2, 2, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularMultiSelect_div_20_c_templateRenderer_8_Template, 1, 2, "c-templateRenderer", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.settings.lazyLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.searchTempl);
        }
      }

      function AngularMultiSelect_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.toggleFilterSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r75.isFilterSelectAll)("disabled", ctx_r75.settings.limitSelection == (ctx_r75.selectedItems == null ? null : ctx_r75.selectedItems.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r75.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r75.settings.filterSelectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r75.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r75.settings.filterUnSelectAllText);
        }
      }

      function AngularMultiSelect_div_21_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r79.toggleFilterSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r76.isFilterSelectAll && (ctx_r76.filter == null ? null : ctx_r76.filter.length) > 0)("disabled", ctx_r76.settings.limitSelection == (ctx_r76.selectedItems == null ? null : ctx_r76.selectedItems.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r76.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r76.settings.filterSelectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r76.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r76.settings.filterUnSelectAllText);
        }
      }

      function AngularMultiSelect_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_21_div_1_Template, 7, 6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_21_div_2_Template, 7, 6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && ctx_r14.filterLength > 0 && !ctx_r14.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && (ctx_r14.groupedData == null ? null : ctx_r14.groupedData.length) > 0 && !ctx_r14.settings.singleSelection);
        }
      }

      function AngularMultiSelect_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_22_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r82.toggleInfiniteFilterSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r81.isInfiniteFilterSelectAll)("disabled", ctx_r81.settings.limitSelection == (ctx_r81.selectedItems == null ? null : ctx_r81.selectedItems.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r81.isInfiniteFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r81.settings.filterSelectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r81.isInfiniteFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r81.settings.filterUnSelectAllText);
        }
      }

      function AngularMultiSelect_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_22_div_1_Template, 7, 6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.filter == null ? null : ctx_r15.filter.length) > 0 && ctx_r15.infiniteFilterLength > 0);
        }
      }

      function AngularMultiSelect_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r16.filter == undefined || (ctx_r16.filter == null ? null : ctx_r16.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.settings.noDataLabel);
        }
      }

      function AngularMultiSelect_label_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r17.filter == undefined || (ctx_r17.filter == null ? null : ctx_r17.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.settings.noDataLabel);
        }
      }

      function AngularMultiSelect_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r84.addFilterNewItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r18.filter == undefined || (ctx_r18.filter == null ? null : ctx_r18.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.settings.addNewButtonText);
        }
      }

      function AngularMultiSelect_div_27_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          var item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r89.isSelected(item_r87))("disabled", ctx_r89.settings.limitSelection == (ctx_r89.selectedItems == null ? null : ctx_r89.selectedItems.length) && !ctx_r89.isSelected(item_r87) || item_r87.disabled);
        }
      }

      var _c9 = function _c9(a0) {
        return {
          "selected-item": a0
        };
      };

      function AngularMultiSelect_div_27_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_li_2_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var item_r87 = ctx.$implicit;
            var i_r88 = ctx.index;

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r91.onItemClick(item_r87, i_r88, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_27_li_2_input_1_Template, 1, 2, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r87 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c9, ctx_r86.isSelected(item_r87) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87[ctx_r86.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_27_li_2_Template, 4, 5, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "listFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r19.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 3, ctx_r19.data, ctx_r19.filter, ctx_r19.settings.searchBy));
        }
      }

      function AngularMultiSelect_div_28_li_3_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r97.isSelected(item_r95))("disabled", ctx_r97.settings.limitSelection == (ctx_r97.selectedItems == null ? null : ctx_r97.selectedItems.length) && !ctx_r97.isSelected(item_r95) || item_r95.disabled);
        }
      }

      function AngularMultiSelect_div_28_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_28_li_3_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

            var item_r95 = ctx.$implicit;
            var i_r96 = ctx.index;

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r99.onItemClick(item_r95, i_r96, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_28_li_3_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r95 = ctx.$implicit;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c9, ctx_r94.isSelected(item_r95) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r95[ctx_r94.settings.labelKey]);
        }
      }

      var _c10 = function _c10(a0) {
        return {
          "height": a0
        };
      };

      function AngularMultiSelect_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 68, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_28_Template_ul_vsStart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r101.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_28_Template_ul_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r103.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_28_li_3_Template, 4, 5, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r20.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r20.randomSize)("items", ctx_r20.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c10, ctx_r20.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r93.viewPortItems);
        }
      }

      function AngularMultiSelect_div_29_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r107.isSelected(item_r105))("disabled", ctx_r107.settings.limitSelection == (ctx_r107.selectedItems == null ? null : ctx_r107.selectedItems.length) && !ctx_r107.isSelected(item_r105) || item_r105.disabled);
        }
      }

      function AngularMultiSelect_div_29_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_li_2_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

            var item_r105 = ctx.$implicit;
            var i_r106 = ctx.index;

            var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r109.onItemClick(item_r105, i_r106, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_29_li_2_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r105 = ctx.$implicit;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c9, ctx_r104.isSelected(item_r105) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r104.itemTempl)("item", item_r105);
        }
      }

      function AngularMultiSelect_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_29_li_2_Template, 4, 6, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "listFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r21.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 3, ctx_r21.data, ctx_r21.filter, ctx_r21.settings.searchBy));
        }
      }

      function AngularMultiSelect_div_30_li_3_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r115.isSelected(item_r113))("disabled", ctx_r115.settings.limitSelection == (ctx_r115.selectedItems == null ? null : ctx_r115.selectedItems.length) && !ctx_r115.isSelected(item_r113) || item_r113.disabled);
        }
      }

      function AngularMultiSelect_div_30_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_30_li_3_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

            var item_r113 = ctx.$implicit;
            var i_r114 = ctx.index;

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r117.onItemClick(item_r113, i_r114, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_30_li_3_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r113 = ctx.$implicit;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c9, ctx_r112.isSelected(item_r113) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r112.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r112.itemTempl)("item", item_r113);
        }
      }

      function AngularMultiSelect_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 68, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_30_Template_ul_vsStart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r119.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_30_Template_ul_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r121.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_30_li_3_Template, 4, 6, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r22.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r22.randomSize)("items", ctx_r22.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c10, ctx_r22.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r111.viewPortItems);
        }
      }

      function AngularMultiSelect_div_31_span_3_li_1_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r128.isSelected(item_r124))("disabled", ctx_r128.settings.limitSelection == (ctx_r128.selectedItems == null ? null : ctx_r128.selectedItems.length) && !ctx_r128.isSelected(item_r124) || item_r124.disabled);
        }
      }

      var _c11 = function _c11(a0, a1) {
        return {
          "grp-title": a0,
          "grp-item": a1
        };
      };

      function AngularMultiSelect_div_31_span_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_31_span_3_li_1_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var item_r124 = ctx_r131.$implicit;
            var i_r125 = ctx_r131.index;

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r130.onItemClick(item_r124, i_r125, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_31_span_3_li_1_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c11, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r126.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.settings.showCheckbox && !ctx_r126.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r126.itemTempl)("item", item_r124);
        }
      }

      function AngularMultiSelect_div_31_span_3_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r134.isSelected(item_r124))("disabled", ctx_r134.settings.limitSelection == (ctx_r134.selectedItems == null ? null : ctx_r134.selectedItems.length) && !ctx_r134.isSelected(item_r124) || item_r124.disabled);
        }
      }

      function AngularMultiSelect_div_31_span_3_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_31_span_3_li_2_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c11, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r127.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r127.itemTempl)("item", item_r124);
        }
      }

      function AngularMultiSelect_div_31_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_31_span_3_li_1_Template, 4, 7, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_3_li_2_Template, 4, 7, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r124 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r124.grpTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r124.grpTitle);
        }
      }

      function AngularMultiSelect_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 68, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_31_Template_ul_vsStart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r137.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_31_Template_ul_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

            var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r139.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_31_span_3_Template, 3, 2, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r23.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r23.randomSize)("items", ctx_r23.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c10, ctx_r23.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r122.viewPortItems);
        }
      }

      function AngularMultiSelect_div_32_span_2_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r141.selected)("disabled", ctx_r143.settings.limitSelection == (ctx_r143.selectedItems == null ? null : ctx_r143.selectedItems.length) && !ctx_r143.isSelected(item_r141) || item_r141.disabled);
        }
      }

      function AngularMultiSelect_div_32_span_2_span_6_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var val_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r148.isSelected(val_r146))("disabled", ctx_r148.settings.limitSelection == (ctx_r148.selectedItems == null ? null : ctx_r148.selectedItems.length) && !ctx_r148.isSelected(val_r146) || val_r146.disabled);
        }
      }

      function AngularMultiSelect_div_32_span_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_32_span_2_span_6_Template_li_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

            var val_r146 = ctx.$implicit;
            var j_r147 = ctx.index;

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            ctx_r150.onItemClick(val_r146, j_r147, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_32_span_2_span_6_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r146 = ctx.$implicit;

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c11, val_r146.grpTitle, !val_r146.grpTitle && !ctx_r144.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r144.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r144.itemTempl)("item", val_r146);
        }
      }

      function AngularMultiSelect_div_32_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_32_span_2_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);

            var item_r141 = ctx.$implicit;

            var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r152.selectGroup(item_r141);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_32_span_2_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_div_32_span_2_span_6_Template, 5, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r141 = ctx.$implicit;

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c11, item_r141.grpTitle, !item_r141.grpTitle && !ctx_r140.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r140.settings.showCheckbox && !ctx_r140.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r141[ctx_r140.settings.labelKey]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r141.list);
        }
      }

      function AngularMultiSelect_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_32_span_2_Template, 7, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r24.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.groupedData);
        }
      }

      function AngularMultiSelect_div_33_span_4_li_1_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r160.isSelected(item_r156))("disabled", ctx_r160.settings.limitSelection == (ctx_r160.selectedItems == null ? null : ctx_r160.selectedItems.length) && !ctx_r160.isSelected(item_r156) || item_r156.disabled);
        }
      }

      var _c12 = function _c12(a0, a1, a2) {
        return {
          "grp-title": a0,
          "grp-item": a1,
          "selected-item": a2
        };
      };

      function AngularMultiSelect_div_33_span_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_33_span_4_li_1_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c12, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r158.settings.singleSelection, ctx_r158.isSelected(item_r156) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.settings.showCheckbox && !item_r156.grpTitle && !ctx_r158.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r156[ctx_r158.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_33_span_4_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r163.isSelected(item_r156))("disabled", ctx_r163.settings.limitSelection == (ctx_r163.selectedItems == null ? null : ctx_r163.selectedItems.length) && !ctx_r163.isSelected(item_r156) || item_r156.disabled);
        }
      }

      function AngularMultiSelect_div_33_span_4_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_33_span_4_li_2_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r167);

            var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var item_r156 = ctx_r166.$implicit;
            var i_r157 = ctx_r166.index;

            var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r165.onItemClick(item_r156, i_r157, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_33_span_4_li_2_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c12, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r159.settings.singleSelection, ctx_r159.isSelected(item_r156) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r159.settings.showCheckbox && !item_r156.grpTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r156[ctx_r159.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_33_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_33_span_4_li_1_Template, 4, 7, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_33_span_4_li_2_Template, 4, 7, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r156 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r156.grpTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r156.grpTitle);
        }
      }

      function AngularMultiSelect_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "virtual-scroller", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsUpdate", function AngularMultiSelect_div_33_Template_virtual_scroller_vsUpdate_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170);

            var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r169.viewPortItems = $event;
          })("vsEnd", function AngularMultiSelect_div_33_Template_virtual_scroller_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170);

            var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r171.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 68, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_33_Template_ul_vsStart_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170);

            var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r172.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_33_Template_ul_vsEnd_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170);

            var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r173.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularMultiSelect_div_33_span_4_Template, 3, 2, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r25.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r25.groupedData)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c10, ctx_r25.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r25.randomSize)("items", ctx_r25.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c10, ctx_r25.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r154.viewPortItems);
        }
      }

      function AngularMultiSelect_div_34_span_2_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r175.selected)("disabled", ctx_r177.settings.limitSelection == (ctx_r177.selectedItems == null ? null : ctx_r177.selectedItems.length) && !ctx_r177.isSelected(item_r175) || item_r175.disabled);
        }
      }

      function AngularMultiSelect_div_34_span_2_span_6_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var val_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r182.isSelected(val_r180))("disabled", ctx_r182.settings.limitSelection == (ctx_r182.selectedItems == null ? null : ctx_r182.selectedItems.length) && !ctx_r182.isSelected(val_r180) || val_r180.disabled);
        }
      }

      var _c13 = function _c13(a0, a1, a2) {
        return {
          "selected-item": a0,
          "grp-title": a1,
          "grp-item": a2
        };
      };

      function AngularMultiSelect_div_34_span_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_34_span_2_span_6_Template_li_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

            var val_r180 = ctx.$implicit;
            var j_r181 = ctx.index;

            var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            ctx_r184.onItemClick(val_r180, j_r181, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_34_span_2_span_6_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r180 = ctx.$implicit;

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c13, ctx_r178.isSelected(val_r180) == true, val_r180.grpTitle, !val_r180.grpTitle && !ctx_r178.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r180[ctx_r178.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_34_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_34_span_2_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

            var item_r175 = ctx.$implicit;

            var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r186.selectGroup(item_r175);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_34_span_2_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_div_34_span_2_span_6_Template, 5, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r175 = ctx.$implicit;

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c11, item_r175.grpTitle, !item_r175.grpTitle && !ctx_r174.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r174.settings.showCheckbox && !ctx_r174.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r175[ctx_r174.settings.labelKey]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r175.list);
        }
      }

      function AngularMultiSelect_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_34_span_2_Template, 7, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r26.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.groupedData);
        }
      }

      function AngularMultiSelect_h5_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.settings.noDataLabel);
        }
      }

      var _c14 = function _c14(a0) {
        return {
          "disabled": a0
        };
      };

      var _c15 = function _c15(a0, a1) {
        return {
          "arrow-up": a0,
          "arrow-down": a1
        };
      };

      var _c16 = function _c16(a0) {
        return {
          "single-select-mode": a0
        };
      };

      var MyException =
      /**
       * @param {?} status
       * @param {?} body
       */
      function MyException(status, body) {
        _classCallCheck(this, MyException);

        this.status = status;
        this.body = body;
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClickOutsideDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         */
        function ClickOutsideDirective(_elementRef) {
          _classCallCheck(this, ClickOutsideDirective);

          this._elementRef = _elementRef;
          this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} event
         * @param {?} targetElement
         * @return {?}
         */


        _createClass(ClickOutsideDirective, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            if (!targetElement) {
              return;
            }
            /** @type {?} */


            var clickedInside = this._elementRef.nativeElement.contains(targetElement);

            if (!clickedInside) {
              this.clickOutside.emit(event);
            }
          }
        }]);

        return ClickOutsideDirective;
      }();

      ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
        return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClickOutsideDirective,
        selectors: [["", "clickOutside", ""]],
        hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        outputs: {
          clickOutside: "clickOutside"
        }
      });
      /** @nocollapse */

      ClickOutsideDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      ClickOutsideDirective.propDecorators = {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event', '$event.target']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchstart', ['$event', '$event.target']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[clickOutside]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @param {?} event
           * @param {?} targetElement
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchstart', ['$event', '$event.target']]
          }]
        });
      })();

      if (false) {}

      var ScrollDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         */
        function ScrollDirective(_elementRef) {
          _classCallCheck(this, ScrollDirective);

          this._elementRef = _elementRef;
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} event
         * @param {?} targetElement
         * @return {?}
         */


        _createClass(ScrollDirective, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            this.scroll.emit(event);
          }
        }]);

        return ScrollDirective;
      }();

      ScrollDirective.ɵfac = function ScrollDirective_Factory(t) {
        return new (t || ScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ScrollDirective,
        selectors: [["", "scroll", ""]],
        hostBindings: function ScrollDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollDirective_scroll_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        outputs: {
          scroll: "scroll"
        }
      });
      /** @nocollapse */

      ScrollDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      ScrollDirective.propDecorators = {
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['scroll', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[scroll]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @param {?} event
           * @param {?} targetElement
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
          }]
        });
      })();

      if (false) {}

      var styleDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         */
        function styleDirective(el) {
          _classCallCheck(this, styleDirective);

          this.el = el;
        }
        /**
         * @return {?}
         */


        _createClass(styleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.el.nativeElement.style.top = this.styleVal;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.el.nativeElement.style.top = this.styleVal;
          }
        }]);

        return styleDirective;
      }();

      styleDirective.ɵfac = function styleDirective_Factory(t) {
        return new (t || styleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      styleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: styleDirective,
        selectors: [["", "styleProp", ""]],
        inputs: {
          styleVal: ["styleProp", "styleVal"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      styleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      styleDirective.propDecorators = {
        styleVal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['styleProp']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](styleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[styleProp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          styleVal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['styleProp']
          }]
        });
      })();

      if (false) {}

      var setPosition = /*#__PURE__*/function () {
        /**
         * @param {?} el
         */
        function setPosition(el) {
          _classCallCheck(this, setPosition);

          this.el = el;
        }
        /**
         * @return {?}
         */


        _createClass(setPosition, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.height) {
              this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.height) {
              this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
            }
          }
        }]);

        return setPosition;
      }();

      setPosition.ɵfac = function setPosition_Factory(t) {
        return new (t || setPosition)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      setPosition.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: setPosition,
        selectors: [["", "setPosition", ""]],
        inputs: {
          height: ["setPosition", "height"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      setPosition.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      setPosition.propDecorators = {
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['setPosition']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](setPosition, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[setPosition]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['setPosition']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this.filteredData = [];
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }
        /**
         * @param {?} data
         * @return {?}
         */


        _createClass(DataService, [{
          key: "setData",
          value: function setData(data) {
            this.filteredData = data;
            this.subject.next(data);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getData",
          value: function getData() {
            return this.subject.asObservable();
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilteredData",
          value: function getFilteredData() {
            if (this.filteredData && this.filteredData.length > 0) {
              return this.filteredData;
            } else {
              return [];
            }
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)();
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ListFilterPipe = /*#__PURE__*/function () {
        /**
         * @param {?} ds
         */
        function ListFilterPipe(ds) {
          _classCallCheck(this, ListFilterPipe);

          this.ds = ds;
          this.filteredList = [];
        }
        /**
         * @param {?} items
         * @param {?} filter
         * @param {?} searchBy
         * @return {?}
         */


        _createClass(ListFilterPipe, [{
          key: "transform",
          value: function transform(items, filter, searchBy) {
            var _this30 = this;

            if (!items || !filter) {
              this.ds.setData(items);
              return items;
            }

            this.filteredList = items.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return _this30.applyFilter(item, filter, searchBy);
            });
            this.ds.setData(this.filteredList);
            return this.filteredList;
          }
          /**
           * @param {?} item
           * @param {?} filter
           * @param {?} searchBy
           * @return {?}
           */

        }, {
          key: "applyFilter",
          value: function applyFilter(item, filter, searchBy) {
            /** @type {?} */
            var found = false;

            if (searchBy.length > 0) {
              if (item.grpTitle) {
                found = true;
              } else {
                for (var t = 0; t < searchBy.length; t++) {
                  if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                    if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                      found = true;
                    }
                  }
                }
              }
            } else {
              if (item.grpTitle) {
                found = true;
              } else {
                for (var prop in item) {
                  if (filter && item[prop]) {
                    if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                      found = true;
                    }
                  }
                }
              }
            }

            return found;
          }
        }]);

        return ListFilterPipe;
      }();

      ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
        return new (t || ListFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataService));
      };

      ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "listFilter",
        type: ListFilterPipe,
        pure: true
      });
      /** @nocollapse */

      ListFilterPipe.ctorParameters = function () {
        return [{
          type: DataService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'listFilter',
            pure: true
          }]
        }], function () {
          return [{
            type: DataService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var Item = function Item() {
        _classCallCheck(this, Item);
      };

      Item.ɵfac = function Item_Factory(t) {
        return new (t || Item)();
      };

      Item.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Item,
        selectors: [["c-item"]],
        contentQueries: function Item_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function Item_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      Item.ctorParameters = function () {
        return [];
      };

      Item.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Item, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'c-item',
            template: ""
          }]
        }], function () {
          return [];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}

      var Badge = function Badge() {
        _classCallCheck(this, Badge);
      };

      Badge.ɵfac = function Badge_Factory(t) {
        return new (t || Badge)();
      };

      Badge.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Badge,
        selectors: [["c-badge"]],
        contentQueries: function Badge_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function Badge_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      Badge.ctorParameters = function () {
        return [];
      };

      Badge.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Badge, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'c-badge',
            template: ""
          }]
        }], function () {
          return [];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}

      var Search = function Search() {
        _classCallCheck(this, Search);
      };

      Search.ɵfac = function Search_Factory(t) {
        return new (t || Search)();
      };

      Search.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Search,
        selectors: [["c-search"]],
        contentQueries: function Search_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function Search_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      Search.ctorParameters = function () {
        return [];
      };

      Search.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Search, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'c-search',
            template: ""
          }]
        }], function () {
          return [];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}

      var TemplateRenderer = /*#__PURE__*/function () {
        /**
         * @param {?} viewContainer
         */
        function TemplateRenderer(viewContainer) {
          _classCallCheck(this, TemplateRenderer);

          this.viewContainer = viewContainer;
        }
        /**
         * @return {?}
         */


        _createClass(TemplateRenderer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.view = this.viewContainer.createEmbeddedView(this.data.template, {
              '\$implicit': this.data,
              'item': this.item
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.view.destroy();
          }
        }]);

        return TemplateRenderer;
      }();

      TemplateRenderer.ɵfac = function TemplateRenderer_Factory(t) {
        return new (t || TemplateRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      TemplateRenderer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TemplateRenderer,
        selectors: [["c-templateRenderer"]],
        inputs: {
          data: "data",
          item: "item"
        },
        decls: 0,
        vars: 0,
        template: function TemplateRenderer_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      TemplateRenderer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      TemplateRenderer.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateRenderer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'c-templateRenderer',
            template: ""
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}

      var CIcon = function CIcon() {
        _classCallCheck(this, CIcon);
      };

      CIcon.ɵfac = function CIcon_Factory(t) {
        return new (t || CIcon)();
      };

      CIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CIcon,
        selectors: [["c-icon"]],
        inputs: {
          name: "name"
        },
        decls: 5,
        vars: 5,
        consts: [["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", "style", "enable-background:new 0 0 47.971 47.971;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", "style", "enable-background:new 0 0 612 612;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", "style", "enable-background:new 0 0 615.52 615.52;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", "style", "enable-background:new 0 0 51.976 51.976;", 0, "xml", "space", "preserve", 4, "ngIf"], ["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 47.971 47.971"], ["d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 612 612"], ["id", "_x31_0_34_"], ["d", "M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"], ["id", "_x39__30_"], ["d", "M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 615.52 615.52"], ["id", "Search__x28_and_thou_shall_find_x29_"], ["d", "M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 51.976 51.976"], ["d", "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"]],
        template: function CIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CIcon__svg_svg_0_Template, 3, 0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CIcon__svg_svg_1_Template, 5, 0, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CIcon__svg_svg_2_Template, 5, 0, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CIcon__svg_svg_3_Template, 6, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CIcon__svg_svg_4_Template, 3, 0, "svg", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "clear");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      CIcon.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'c-icon',
            template: "<svg *ngIf=\"name == 'remove'\" width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                        viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\n                        <g>\n                            <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n                        </g>\n                    </svg>\n            <svg *ngIf=\"name == 'angle-down'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n<g>\n\t<g id=\"_x31_0_34_\">\n\t\t<g>\n\t\t\t<path d=\"M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n<svg *ngIf=\"name == 'angle-up'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n<g>\n\t<g id=\"_x39__30_\">\n\t\t<g>\n\t\t\t<path d=\"M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z\"/>\n\t\t</g>\n\t</g>\n</g>\n\n</svg>\n<svg *ngIf=\"name == 'search'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 615.52 615.52\" style=\"enable-background:new 0 0 615.52 615.52;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g id=\"Search__x28_and_thou_shall_find_x29_\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n</g>\n\n</svg>\n<svg *ngIf=\"name == 'clear'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 51.976 51.976\" style=\"enable-background:new 0 0 51.976 51.976;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z\"/>\n</g>\n</svg>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @return {?}
       */


      function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
        return {
          scrollThrottlingTime: 0,
          scrollDebounceTime: 0,
          scrollAnimationTime: 750,
          checkResizeInterval: 1000,
          resizeBypassRefreshThreshold: 5,
          modifyOverflowStyleOfParentScroll: true,
          stripedTable: false
        };
      }

      var VirtualScrollerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} zone
         * @param {?} changeDetectorRef
         * @param {?} platformId
         * @param {?} options
         */
        function VirtualScrollerComponent(element, renderer, zone, changeDetectorRef, platformId, options) {
          _classCallCheck(this, VirtualScrollerComponent);

          this.element = element;
          this.renderer = renderer;
          this.zone = zone;
          this.changeDetectorRef = changeDetectorRef;
          this.window = window;
          this.executeRefreshOutsideAngularZone = false;
          this._enableUnequalChildrenSizes = false;
          this.useMarginInsteadOfTranslate = false;
          this.ssrViewportWidth = 1920;
          this.ssrViewportHeight = 1080;
          this._bufferAmount = 0;
          this._items = [];

          this.compareItems =
          /**
          * @param {?} item1
          * @param {?} item2
          * @return {?}
          */
          function (item1, item2) {
            return item1 === item2;
          };

          this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.calculatedScrollbarWidth = 0;
          this.calculatedScrollbarHeight = 0;
          this.padding = 0;
          this.previousViewPort =
          /** @type {?} */
          {};
          this.cachedPageSize = 0;
          this.previousScrollNumberElements = 0;
          this.isAngularUniversalSSR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
          this.scrollThrottlingTime = options.scrollThrottlingTime;
          this.scrollDebounceTime = options.scrollDebounceTime;
          this.scrollAnimationTime = options.scrollAnimationTime;
          this.scrollbarWidth = options.scrollbarWidth;
          this.scrollbarHeight = options.scrollbarHeight;
          this.checkResizeInterval = options.checkResizeInterval;
          this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
          this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
          this.stripedTable = options.stripedTable;
          this.horizontal = false;
          this.resetWrapGroupDimensions();
        }
        /**
         * @return {?}
         */


        _createClass(VirtualScrollerComponent, [{
          key: "updateOnScrollFunction",

          /**
           * @protected
           * @return {?}
           */
          value: function updateOnScrollFunction() {
            var _this31 = this;

            if (this.scrollDebounceTime) {
              this.onScroll =
              /** @type {?} */
              this.debounce(
              /**
              * @return {?}
              */
              function () {
                _this31.refresh_internal(false);
              }, this.scrollDebounceTime);
            } else if (this.scrollThrottlingTime) {
              this.onScroll =
              /** @type {?} */
              this.throttleTrailing(
              /**
              * @return {?}
              */
              function () {
                _this31.refresh_internal(false);
              }, this.scrollThrottlingTime);
            } else {
              this.onScroll =
              /**
              * @return {?}
              */
              function () {
                _this31.refresh_internal(false);
              };
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "revertParentOverscroll",

          /**
           * @protected
           * @return {?}
           */
          value: function revertParentOverscroll() {
            /** @type {?} */
            var scrollElement = this.getScrollElement();

            if (scrollElement && this.oldParentScrollOverflow) {
              scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
              scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
            }

            this.oldParentScrollOverflow = undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            this.addScrollEventHandlers();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.removeScrollEventHandlers();
            this.revertParentOverscroll();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            /** @type {?} */
            var indexLengthChanged = this.cachedItemsLength !== this.items.length;
            this.cachedItemsLength = this.items.length;
            /** @type {?} */

            var firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
            this.refresh_internal(indexLengthChanged || firstRun);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.cachedItemsLength !== this.items.length) {
              this.cachedItemsLength = this.items.length;
              this.refresh_internal(true);
              return;
            }

            if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
              /** @type {?} */
              var itemsArrayChanged = false;

              for (var i = 0; i < this.viewPortItems.length; ++i) {
                if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
                  itemsArrayChanged = true;
                  break;
                }
              }

              if (itemsArrayChanged) {
                this.refresh_internal(true);
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "refresh",
          value: function refresh() {
            this.refresh_internal(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "invalidateAllCachedMeasurements",
          value: function invalidateAllCachedMeasurements() {
            this.wrapGroupDimensions = {
              maxChildSizePerWrapGroup: [],
              numberOfKnownWrapGroupChildSizes: 0,
              sumOfKnownWrapGroupChildWidths: 0,
              sumOfKnownWrapGroupChildHeights: 0
            };
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
            this.refresh_internal(false);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "invalidateCachedMeasurementForItem",
          value: function invalidateCachedMeasurementForItem(item) {
            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var index = this.items && this.items.indexOf(item);

              if (index >= 0) {
                this.invalidateCachedMeasurementAtIndex(index);
              }
            } else {
              this.minMeasuredChildWidth = undefined;
              this.minMeasuredChildHeight = undefined;
            }

            this.refresh_internal(false);
          }
          /**
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "invalidateCachedMeasurementAtIndex",
          value: function invalidateCachedMeasurementAtIndex(index) {
            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];

              if (cachedMeasurement) {
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
                --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
              }
            } else {
              this.minMeasuredChildWidth = undefined;
              this.minMeasuredChildHeight = undefined;
            }

            this.refresh_internal(false);
          }
          /**
           * @param {?} item
           * @param {?=} alignToBeginning
           * @param {?=} additionalOffset
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollInto",
          value: function scrollInto(item) {
            var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

            /** @type {?} */
            var index = this.items.indexOf(item);

            if (index === -1) {
              return;
            }

            this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
          }
          /**
           * @param {?} index
           * @param {?=} alignToBeginning
           * @param {?=} additionalOffset
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var _this32 = this;

            var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

            /** @type {?} */
            var maxRetries = 5;
            /** @type {?} */

            var retryIfNeeded =
            /**
            * @return {?}
            */
            function retryIfNeeded() {
              --maxRetries;

              if (maxRetries <= 0) {
                if (animationCompletedCallback) {
                  animationCompletedCallback();
                }

                return;
              }
              /** @type {?} */


              var dimensions = _this32.calculateDimensions();
              /** @type {?} */


              var desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);

              if (_this32.previousViewPort.startIndex === desiredStartIndex) {
                if (animationCompletedCallback) {
                  animationCompletedCallback();
                }

                return;
              }

              _this32.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
            };

            this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
          }
          /**
           * @protected
           * @param {?} index
           * @param {?=} alignToBeginning
           * @param {?=} additionalOffset
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollToIndex_internal",
          value: function scrollToIndex_internal(index) {
            var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
            /** @type {?} */

            var dimensions = this.calculateDimensions();
            /** @type {?} */

            var scroll = this.calculatePadding(index, dimensions) + additionalOffset;

            if (!alignToBeginning) {
              scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
            }

            this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
          }
          /**
           * @param {?} scrollPosition
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollToPosition",
          value: function scrollToPosition(scrollPosition) {
            var _this33 = this;

            var animationMilliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var animationCompletedCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            scrollPosition += this.getElementsOffset();
            animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
            /** @type {?} */

            var scrollElement = this.getScrollElement();
            /** @type {?} */

            var animationRequest;

            if (this.currentTween) {
              this.currentTween.stop();
              this.currentTween = undefined;
            }

            if (!animationMilliseconds) {
              this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
              this.refresh_internal(false, animationCompletedCallback);
              return;
            }
            /** @type {?} */


            var tweenConfigObj = {
              scrollPosition: scrollElement[this._scrollType]
            };
            /** @type {?} */

            var newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__["Tween"](tweenConfigObj).to({
              scrollPosition: scrollPosition
            }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__["Easing"].Quadratic.Out).onUpdate(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              if (isNaN(data.scrollPosition)) {
                return;
              }

              _this33.renderer.setProperty(scrollElement, _this33._scrollType, data.scrollPosition);

              _this33.refresh_internal(false);
            }).onStop(
            /**
            * @return {?}
            */
            function () {
              cancelAnimationFrame(animationRequest);
            }).start();
            /** @type {?} */

            var animate =
            /**
            * @param {?=} time
            * @return {?}
            */
            function animate(time) {
              if (!newTween["isPlaying"]()) {
                return;
              }

              newTween.update(time);

              if (tweenConfigObj.scrollPosition === scrollPosition) {
                _this33.refresh_internal(false, animationCompletedCallback);

                return;
              }

              _this33.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                animationRequest = requestAnimationFrame(animate);
              });
            };

            animate();
            this.currentTween = newTween;
          }
          /**
           * @protected
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "getElementSize",
          value: function getElementSize(element) {
            /** @type {?} */
            var result = element.getBoundingClientRect();
            /** @type {?} */

            var styles = getComputedStyle(element);
            /** @type {?} */

            var marginTop = parseInt(styles['margin-top'], 10) || 0;
            /** @type {?} */

            var marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
            /** @type {?} */

            var marginLeft = parseInt(styles['margin-left'], 10) || 0;
            /** @type {?} */

            var marginRight = parseInt(styles['margin-right'], 10) || 0;
            return {
              top: result.top + marginTop,
              bottom: result.bottom + marginBottom,
              left: result.left + marginLeft,
              right: result.right + marginRight,
              width: result.width + marginLeft + marginRight,
              height: result.height + marginTop + marginBottom
            };
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "checkScrollElementResized",
          value: function checkScrollElementResized() {
            /** @type {?} */
            var boundingRect = this.getElementSize(this.getScrollElement());
            /** @type {?} */

            var sizeChanged;

            if (!this.previousScrollBoundingRect) {
              sizeChanged = true;
            } else {
              /** @type {?} */
              var widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
              /** @type {?} */

              var heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
              sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
            }

            if (sizeChanged) {
              this.previousScrollBoundingRect = boundingRect;

              if (boundingRect.width > 0 && boundingRect.height > 0) {
                this.refresh_internal(false);
              }
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "updateDirection",
          value: function updateDirection() {
            if (this.horizontal) {
              this._invisiblePaddingProperty = 'width';
              this._offsetType = 'offsetLeft';
              this._pageOffsetType = 'pageXOffset';
              this._childScrollDim = 'childWidth';
              this._marginDir = 'margin-left';
              this._translateDir = 'translateX';
              this._scrollType = 'scrollLeft';
            } else {
              this._invisiblePaddingProperty = 'height';
              this._offsetType = 'offsetTop';
              this._pageOffsetType = 'pageYOffset';
              this._childScrollDim = 'childHeight';
              this._marginDir = 'margin-top';
              this._translateDir = 'translateY';
              this._scrollType = 'scrollTop';
            }
          }
          /**
           * @protected
           * @param {?} func
           * @param {?} wait
           * @return {?}
           */

        }, {
          key: "debounce",
          value: function debounce(func, wait) {
            /** @type {?} */
            var throttled = this.throttleTrailing(func, wait);
            /** @type {?} */

            var result =
            /**
            * @return {?}
            */
            function result() {
              throttled['cancel']();
              throttled.apply(this, arguments);
            };

            result['cancel'] =
            /**
            * @return {?}
            */
            function () {
              throttled['cancel']();
            };

            return result;
          }
          /**
           * @protected
           * @param {?} func
           * @param {?} wait
           * @return {?}
           */

        }, {
          key: "throttleTrailing",
          value: function throttleTrailing(func, wait) {
            /** @type {?} */
            var timeout = undefined;
            /** @type {?} */

            var _arguments = arguments;
            /** @type {?} */

            var result =
            /**
            * @return {?}
            */
            function result() {
              /** @type {?} */
              var _this = this;

              _arguments = arguments;

              if (timeout) {
                return;
              }

              if (wait <= 0) {
                func.apply(_this, _arguments);
              } else {
                timeout = setTimeout(
                /**
                * @return {?}
                */
                function () {
                  timeout = undefined;
                  func.apply(_this, _arguments);
                }, wait);
              }
            };

            result['cancel'] =
            /**
            * @return {?}
            */
            function () {
              if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
              }
            };

            return result;
          }
          /**
           * @protected
           * @param {?} itemsArrayModified
           * @param {?=} refreshCompletedCallback
           * @param {?=} maxRunTimes
           * @return {?}
           */

        }, {
          key: "refresh_internal",
          value: function refresh_internal(itemsArrayModified) {
            var _this34 = this;

            var refreshCompletedCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var maxRunTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

            //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
            //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
            //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
            //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
            if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
              //if items were prepended, scroll forward to keep same items visible

              /** @type {?} */
              var oldViewPort = this.previousViewPort;
              /** @type {?} */

              var oldViewPortItems = this.viewPortItems;
              /** @type {?} */

              var oldRefreshCompletedCallback = refreshCompletedCallback;

              refreshCompletedCallback =
              /**
              * @return {?}
              */
              function refreshCompletedCallback() {
                /** @type {?} */
                var scrollLengthDelta = _this34.previousViewPort.scrollLength - oldViewPort.scrollLength;

                if (scrollLengthDelta > 0 && _this34.viewPortItems) {
                  /** @type {?} */
                  var oldStartItem = oldViewPortItems[0];
                  /** @type {?} */

                  var oldStartItemIndex = _this34.items.findIndex(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return _this34.compareItems(oldStartItem, x);
                  });

                  if (oldStartItemIndex > _this34.previousViewPort.startIndexWithBuffer) {
                    /** @type {?} */
                    var itemOrderChanged = false;

                    for (var i = 1; i < _this34.viewPortItems.length; ++i) {
                      if (!_this34.compareItems(_this34.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                        itemOrderChanged = true;
                        break;
                      }
                    }

                    if (!itemOrderChanged) {
                      _this34.scrollToPosition(_this34.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);

                      return;
                    }
                  }
                }

                if (oldRefreshCompletedCallback) {
                  oldRefreshCompletedCallback();
                }
              };
            }

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (itemsArrayModified) {
                  _this34.resetWrapGroupDimensions();
                }
                /** @type {?} */


                var viewport = _this34.calculateViewport();
                /** @type {?} */


                var startChanged = itemsArrayModified || viewport.startIndex !== _this34.previousViewPort.startIndex;
                /** @type {?} */

                var endChanged = itemsArrayModified || viewport.endIndex !== _this34.previousViewPort.endIndex;
                /** @type {?} */

                var scrollLengthChanged = viewport.scrollLength !== _this34.previousViewPort.scrollLength;
                /** @type {?} */

                var paddingChanged = viewport.padding !== _this34.previousViewPort.padding;
                /** @type {?} */

                var scrollPositionChanged = viewport.scrollStartPosition !== _this34.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== _this34.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== _this34.previousViewPort.maxScrollPosition;
                _this34.previousViewPort = viewport;

                if (scrollLengthChanged) {
                  _this34.renderer.setStyle(_this34.invisiblePaddingElementRef.nativeElement, _this34._invisiblePaddingProperty, "".concat(viewport.scrollLength, "px"));
                }

                if (paddingChanged) {
                  if (_this34.useMarginInsteadOfTranslate) {
                    _this34.renderer.setStyle(_this34.contentElementRef.nativeElement, _this34._marginDir, "".concat(viewport.padding, "px"));
                  } else {
                    _this34.renderer.setStyle(_this34.contentElementRef.nativeElement, 'transform', "".concat(_this34._translateDir, "(").concat(viewport.padding, "px)"));

                    _this34.renderer.setStyle(_this34.contentElementRef.nativeElement, 'webkitTransform', "".concat(_this34._translateDir, "(").concat(viewport.padding, "px)"));
                  }
                }

                if (_this34.headerElementRef) {
                  /** @type {?} */
                  var scrollPosition = _this34.getScrollElement()[_this34._scrollType];
                  /** @type {?} */


                  var containerOffset = _this34.getElementsOffset();
                  /** @type {?} */


                  var offset = Math.max(scrollPosition - viewport.padding - containerOffset + _this34.headerElementRef.nativeElement.clientHeight, 0);

                  _this34.renderer.setStyle(_this34.headerElementRef.nativeElement, 'transform', "".concat(_this34._translateDir, "(").concat(offset, "px)"));

                  _this34.renderer.setStyle(_this34.headerElementRef.nativeElement, 'webkitTransform', "".concat(_this34._translateDir, "(").concat(offset, "px)"));
                }
                /** @type {?} */


                var changeEventArg = startChanged || endChanged ? {
                  startIndex: viewport.startIndex,
                  endIndex: viewport.endIndex,
                  scrollStartPosition: viewport.scrollStartPosition,
                  scrollEndPosition: viewport.scrollEndPosition,
                  startIndexWithBuffer: viewport.startIndexWithBuffer,
                  endIndexWithBuffer: viewport.endIndexWithBuffer,
                  maxScrollPosition: viewport.maxScrollPosition
                } : undefined;

                if (startChanged || endChanged || scrollPositionChanged) {
                  /** @type {?} */
                  var handleChanged =
                  /**
                  * @return {?}
                  */
                  function handleChanged() {
                    // update the scroll list to trigger re-render of components in viewport
                    _this34.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? _this34.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];

                    _this34.vsUpdate.emit(_this34.viewPortItems);

                    if (startChanged) {
                      _this34.vsStart.emit(changeEventArg);
                    }

                    if (endChanged) {
                      _this34.vsEnd.emit(changeEventArg);
                    }

                    if (startChanged || endChanged) {
                      _this34.changeDetectorRef.markForCheck();

                      _this34.vsChange.emit(changeEventArg);
                    }

                    if (maxRunTimes > 0) {
                      _this34.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                      return;
                    }

                    if (refreshCompletedCallback) {
                      refreshCompletedCallback();
                    }
                  };

                  if (_this34.executeRefreshOutsideAngularZone) {
                    handleChanged();
                  } else {
                    _this34.zone.run(handleChanged);
                  }
                } else {
                  if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
                    _this34.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                    return;
                  }

                  if (refreshCompletedCallback) {
                    refreshCompletedCallback();
                  }
                }
              });
            });
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getScrollElement",
          value: function getScrollElement() {
            return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "addScrollEventHandlers",
          value: function addScrollEventHandlers() {
            var _this35 = this;

            if (this.isAngularUniversalSSR) {
              return;
            }
            /** @type {?} */


            var scrollElement = this.getScrollElement();
            this.removeScrollEventHandlers();
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (_this35.parentScroll instanceof Window) {
                _this35.disposeScrollHandler = _this35.renderer.listen('window', 'scroll', _this35.onScroll);
                _this35.disposeResizeHandler = _this35.renderer.listen('window', 'resize', _this35.onScroll);
              } else {
                _this35.disposeScrollHandler = _this35.renderer.listen(scrollElement, 'scroll', _this35.onScroll);

                if (_this35._checkResizeInterval > 0) {
                  _this35.checkScrollElementResizedTimer =
                  /** @type {?} */
                  setInterval(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this35.checkScrollElementResized();
                  }, _this35._checkResizeInterval);
                }
              }
            });
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "removeScrollEventHandlers",
          value: function removeScrollEventHandlers() {
            if (this.checkScrollElementResizedTimer) {
              clearInterval(this.checkScrollElementResizedTimer);
            }

            if (this.disposeScrollHandler) {
              this.disposeScrollHandler();
              this.disposeScrollHandler = undefined;
            }

            if (this.disposeResizeHandler) {
              this.disposeResizeHandler();
              this.disposeResizeHandler = undefined;
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getElementsOffset",
          value: function getElementsOffset() {
            if (this.isAngularUniversalSSR) {
              return 0;
            }
            /** @type {?} */


            var offset = 0;

            if (this.containerElementRef && this.containerElementRef.nativeElement) {
              offset += this.containerElementRef.nativeElement[this._offsetType];
            }

            if (this.parentScroll) {
              /** @type {?} */
              var scrollElement = this.getScrollElement();
              /** @type {?} */

              var elementClientRect = this.getElementSize(this.element.nativeElement);
              /** @type {?} */

              var scrollClientRect = this.getElementSize(scrollElement);

              if (this.horizontal) {
                offset += elementClientRect.left - scrollClientRect.left;
              } else {
                offset += elementClientRect.top - scrollClientRect.top;
              }

              if (!(this.parentScroll instanceof Window)) {
                offset += scrollElement[this._scrollType];
              }
            }

            return offset;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "countItemsPerWrapGroup",
          value: function countItemsPerWrapGroup() {
            if (this.isAngularUniversalSSR) {
              return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
            }
            /** @type {?} */


            var propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
            /** @type {?} */

            var children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
            /** @type {?} */

            var childrenLength = children ? children.length : 0;

            if (childrenLength === 0) {
              return 1;
            }
            /** @type {?} */


            var firstOffset = children[0][propertyName];
            /** @type {?} */

            var result = 1;

            while (result < childrenLength && firstOffset === children[result][propertyName]) {
              ++result;
            }

            return result;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getScrollStartPosition",
          value: function getScrollStartPosition() {
            /** @type {?} */
            var windowScrollValue = undefined;

            if (this.parentScroll instanceof Window) {
              windowScrollValue = window[this._pageOffsetType];
            }

            return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "resetWrapGroupDimensions",
          value: function resetWrapGroupDimensions() {
            /** @type {?} */
            var oldWrapGroupDimensions = this.wrapGroupDimensions;
            this.invalidateAllCachedMeasurements();

            if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
              return;
            }
            /** @type {?} */


            var itemsPerWrapGroup = this.countItemsPerWrapGroup();

            for (var wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
              /** @type {?} */
              var oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

              if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
                continue;
              }

              if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
                return;
              }
              /** @type {?} */


              var itemsChanged = false;
              /** @type {?} */

              var arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;

              for (var i = 0; i < itemsPerWrapGroup; ++i) {
                if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
                  itemsChanged = true;
                  break;
                }
              }

              if (!itemsChanged) {
                ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
              }
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateDimensions",
          value: function calculateDimensions() {
            /** @type {?} */
            var scrollElement = this.getScrollElement();
            /** @type {?} */

            var maxCalculatedScrollBarSize = 25;
            this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
            this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
            /** @type {?} */

            var viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
            /** @type {?} */

            var viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
            /** @type {?} */

            var content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
            /** @type {?} */

            var itemsPerWrapGroup = this.countItemsPerWrapGroup();
            /** @type {?} */

            var wrapGroupsPerPage;
            /** @type {?} */

            var defaultChildWidth;
            /** @type {?} */

            var defaultChildHeight;

            if (this.isAngularUniversalSSR) {
              viewportWidth = this.ssrViewportWidth;
              viewportHeight = this.ssrViewportHeight;
              defaultChildWidth = this.ssrChildWidth;
              defaultChildHeight = this.ssrChildHeight;
              /** @type {?} */

              var itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
              /** @type {?} */

              var itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
              wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
            } else if (!this.enableUnequalChildrenSizes) {
              if (content.children.length > 0) {
                if (!this.childWidth || !this.childHeight) {
                  if (!this.minMeasuredChildWidth && viewportWidth > 0) {
                    this.minMeasuredChildWidth = viewportWidth;
                  }

                  if (!this.minMeasuredChildHeight && viewportHeight > 0) {
                    this.minMeasuredChildHeight = viewportHeight;
                  }
                }
                /** @type {?} */


                var child = content.children[0];
                /** @type {?} */

                var clientRect = this.getElementSize(child);
                this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
                this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
              }

              defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
              defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
              /** @type {?} */

              var _itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
              /** @type {?} */


              var _itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);

              wrapGroupsPerPage = this.horizontal ? _itemsPerRow : _itemsPerCol;
            } else {
              /** @type {?} */
              var scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
              /** @type {?} */

              var arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
              /** @type {?} */

              var wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
              /** @type {?} */

              var maxWidthForWrapGroup = 0;
              /** @type {?} */

              var maxHeightForWrapGroup = 0;
              /** @type {?} */

              var sumOfVisibleMaxWidths = 0;
              /** @type {?} */

              var sumOfVisibleMaxHeights = 0;
              wrapGroupsPerPage = 0;

              for (var i = 0; i < content.children.length; ++i) {
                ++arrayStartIndex;
                /** @type {?} */

                var _child = content.children[i];
                /** @type {?} */

                var _clientRect = this.getElementSize(_child);

                maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, _clientRect.width);
                maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, _clientRect.height);

                if (arrayStartIndex % itemsPerWrapGroup === 0) {
                  /** @type {?} */
                  var oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

                  if (oldValue) {
                    --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
                  }

                  ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                  /** @type {?} */

                  var items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
                  this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
                    childWidth: maxWidthForWrapGroup,
                    childHeight: maxHeightForWrapGroup,
                    items: items
                  };
                  this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
                  this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;

                  if (this.horizontal) {
                    /** @type {?} */
                    var maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));

                    if (scrollOffset > 0) {
                      /** @type {?} */
                      var scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
                      maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
                      scrollOffset -= scrollOffsetToRemove;
                    }

                    sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;

                    if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
                      ++wrapGroupsPerPage;
                    }
                  } else {
                    /** @type {?} */
                    var maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));

                    if (scrollOffset > 0) {
                      /** @type {?} */
                      var _scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);

                      maxVisibleHeightForWrapGroup -= _scrollOffsetToRemove;
                      scrollOffset -= _scrollOffsetToRemove;
                    }

                    sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;

                    if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
                      ++wrapGroupsPerPage;
                    }
                  }

                  ++wrapGroupIndex;
                  maxWidthForWrapGroup = 0;
                  maxHeightForWrapGroup = 0;
                }
              }
              /** @type {?} */


              var averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              /** @type {?} */

              var averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
              defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;

              if (this.horizontal) {
                if (viewportWidth > sumOfVisibleMaxWidths) {
                  wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
                }
              } else {
                if (viewportHeight > sumOfVisibleMaxHeights) {
                  wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
                }
              }
            }
            /** @type {?} */


            var itemCount = this.items.length;
            /** @type {?} */

            var itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
            /** @type {?} */

            var pageCount_fractional = itemCount / itemsPerPage;
            /** @type {?} */

            var numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
            /** @type {?} */

            var scrollLength = 0;
            /** @type {?} */

            var defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;

            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var numUnknownChildSizes = 0;

              for (var _i2 = 0; _i2 < numberOfWrapGroups; ++_i2) {
                /** @type {?} */
                var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i2] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i2][this._childScrollDim];

                if (childSize) {
                  scrollLength += childSize;
                } else {
                  ++numUnknownChildSizes;
                }
              }

              scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
            } else {
              scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
            }

            if (this.headerElementRef) {
              scrollLength += this.headerElementRef.nativeElement.clientHeight;
            }
            /** @type {?} */


            var viewportLength = this.horizontal ? viewportWidth : viewportHeight;
            /** @type {?} */

            var maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
            return {
              itemCount: itemCount,
              itemsPerWrapGroup: itemsPerWrapGroup,
              wrapGroupsPerPage: wrapGroupsPerPage,
              itemsPerPage: itemsPerPage,
              pageCount_fractional: pageCount_fractional,
              childWidth: defaultChildWidth,
              childHeight: defaultChildHeight,
              scrollLength: scrollLength,
              viewportLength: viewportLength,
              maxScrollPosition: maxScrollPosition
            };
          }
          /**
           * @protected
           * @param {?} arrayStartIndexWithBuffer
           * @param {?} dimensions
           * @return {?}
           */

        }, {
          key: "calculatePadding",
          value: function calculatePadding(arrayStartIndexWithBuffer, dimensions) {
            if (dimensions.itemCount === 0) {
              return 0;
            }
            /** @type {?} */


            var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
            /** @type {?} */

            var startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;

            if (!this.enableUnequalChildrenSizes) {
              return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
            }
            /** @type {?} */


            var numUnknownChildSizes = 0;
            /** @type {?} */

            var result = 0;

            for (var i = 0; i < startingWrapGroupIndex; ++i) {
              /** @type {?} */
              var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

              if (childSize) {
                result += childSize;
              } else {
                ++numUnknownChildSizes;
              }
            }

            result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
            return result;
          }
          /**
           * @protected
           * @param {?} scrollPosition
           * @param {?} dimensions
           * @return {?}
           */

        }, {
          key: "calculatePageInfo",
          value: function calculatePageInfo(scrollPosition, dimensions) {
            /** @type {?} */
            var scrollPercentage = 0;

            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
              /** @type {?} */

              var totalScrolledLength = 0;
              /** @type {?} */

              var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];

              for (var i = 0; i < numberOfWrapGroups; ++i) {
                /** @type {?} */
                var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

                if (childSize) {
                  totalScrolledLength += childSize;
                } else {
                  totalScrolledLength += defaultScrollLengthPerWrapGroup;
                }

                if (scrollPosition < totalScrolledLength) {
                  scrollPercentage = i / numberOfWrapGroups;
                  break;
                }
              }
            } else {
              scrollPercentage = scrollPosition / dimensions.scrollLength;
            }
            /** @type {?} */


            var startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
            /** @type {?} */

            var maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
            /** @type {?} */

            var arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
            arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup

            if (this.stripedTable) {
              /** @type {?} */
              var bufferBoundary = 2 * dimensions.itemsPerWrapGroup;

              if (arrayStartIndex % bufferBoundary !== 0) {
                arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
              }
            }
            /** @type {?} */


            var arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
            /** @type {?} */

            var endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;

            if (endIndexWithinWrapGroup > 0) {
              arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
            }

            if (isNaN(arrayStartIndex)) {
              arrayStartIndex = 0;
            }

            if (isNaN(arrayEndIndex)) {
              arrayEndIndex = 0;
            }

            arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
            arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
            /** @type {?} */

            var bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
            /** @type {?} */

            var startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
            /** @type {?} */

            var endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
            return {
              startIndex: arrayStartIndex,
              endIndex: arrayEndIndex,
              startIndexWithBuffer: startIndexWithBuffer,
              endIndexWithBuffer: endIndexWithBuffer,
              scrollStartPosition: scrollPosition,
              scrollEndPosition: scrollPosition + dimensions.viewportLength,
              maxScrollPosition: dimensions.maxScrollPosition
            };
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateViewport",
          value: function calculateViewport() {
            /** @type {?} */
            var dimensions = this.calculateDimensions();
            /** @type {?} */

            var offset = this.getElementsOffset();
            /** @type {?} */

            var scrollStartPosition = this.getScrollStartPosition();

            if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
              scrollStartPosition = dimensions.scrollLength;
            } else {
              scrollStartPosition -= offset;
            }

            scrollStartPosition = Math.max(0, scrollStartPosition);
            /** @type {?} */

            var pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
            /** @type {?} */

            var newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
            /** @type {?} */

            var newScrollLength = dimensions.scrollLength;
            return {
              startIndex: pageInfo.startIndex,
              endIndex: pageInfo.endIndex,
              startIndexWithBuffer: pageInfo.startIndexWithBuffer,
              endIndexWithBuffer: pageInfo.endIndexWithBuffer,
              padding: Math.round(newPadding),
              scrollLength: Math.round(newScrollLength),
              scrollStartPosition: pageInfo.scrollStartPosition,
              scrollEndPosition: pageInfo.scrollEndPosition,
              maxScrollPosition: pageInfo.maxScrollPosition
            };
          }
        }, {
          key: "viewPortInfo",
          get: function get() {
            /** @type {?} */
            var pageInfo = this.previousViewPort ||
            /** @type {?} */
            {};
            return {
              startIndex: pageInfo.startIndex || 0,
              endIndex: pageInfo.endIndex || 0,
              scrollStartPosition: pageInfo.scrollStartPosition || 0,
              scrollEndPosition: pageInfo.scrollEndPosition || 0,
              maxScrollPosition: pageInfo.maxScrollPosition || 0,
              startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
              endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "enableUnequalChildrenSizes",
          get: function get() {
            return this._enableUnequalChildrenSizes;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this._enableUnequalChildrenSizes === value) {
              return;
            }

            this._enableUnequalChildrenSizes = value;
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "bufferAmount",
          get: function get() {
            if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
              return this._bufferAmount;
            } else {
              return this.enableUnequalChildrenSizes ? 5 : 0;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._bufferAmount = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollThrottlingTime",
          get: function get() {
            return this._scrollThrottlingTime;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._scrollThrottlingTime = value;
            this.updateOnScrollFunction();
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollDebounceTime",
          get: function get() {
            return this._scrollDebounceTime;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._scrollDebounceTime = value;
            this.updateOnScrollFunction();
          }
        }, {
          key: "checkResizeInterval",
          get: function get() {
            return this._checkResizeInterval;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this._checkResizeInterval === value) {
              return;
            }

            this._checkResizeInterval = value;
            this.addScrollEventHandlers();
          }
          /**
           * @return {?}
           */

        }, {
          key: "items",
          get: function get() {
            return this._items;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value === this._items) {
              return;
            }

            this._items = value || [];
            this.refresh_internal(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "horizontal",
          get: function get() {
            return this._horizontal;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._horizontal = value;
            this.updateDirection();
          }
        }, {
          key: "parentScroll",
          get: function get() {
            return this._parentScroll;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this._parentScroll === value) {
              return;
            }

            this.revertParentOverscroll();
            this._parentScroll = value;
            this.addScrollEventHandlers();
            /** @type {?} */

            var scrollElement = this.getScrollElement();

            if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
              this.oldParentScrollOverflow = {
                x: scrollElement.style['overflow-x'],
                y: scrollElement.style['overflow-y']
              };
              scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
              scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
            }
          }
        }]);

        return VirtualScrollerComponent;
      }();

      VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) {
        return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
      };

      VirtualScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VirtualScrollerComponent,
        selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
        contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
          }
        },
        viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
          }
        },
        hostVars: 6,
        hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
          }
        },
        inputs: {
          executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
          useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
          ssrViewportWidth: "ssrViewportWidth",
          ssrViewportHeight: "ssrViewportHeight",
          compareItems: "compareItems",
          scrollThrottlingTime: "scrollThrottlingTime",
          scrollDebounceTime: "scrollDebounceTime",
          scrollAnimationTime: "scrollAnimationTime",
          scrollbarWidth: "scrollbarWidth",
          scrollbarHeight: "scrollbarHeight",
          checkResizeInterval: "checkResizeInterval",
          resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
          modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
          stripedTable: "stripedTable",
          horizontal: "horizontal",
          enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
          bufferAmount: "bufferAmount",
          items: "items",
          parentScroll: "parentScroll",
          childWidth: "childWidth",
          childHeight: "childHeight",
          ssrChildWidth: "ssrChildWidth",
          ssrChildHeight: "ssrChildHeight"
        },
        outputs: {
          vsUpdate: "vsUpdate",
          vsChange: "vsChange",
          vsStart: "vsStart",
          vsEnd: "vsEnd"
        },
        exportAs: ["virtualScroller"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 5,
        vars: 0,
        consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
        template: function VirtualScrollerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }"]
      });
      /** @nocollapse */

      VirtualScrollerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['virtual-scroller-default-options']
          }]
        }];
      };

      VirtualScrollerComponent.propDecorators = {
        executeRefreshOutsideAngularZone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableUnequalChildrenSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useMarginInsteadOfTranslate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modifyOverflowStyleOfParentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stripedTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollbarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollbarHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        childWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        childHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ssrChildWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ssrChildHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ssrViewportWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ssrViewportHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollAnimationTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeBypassRefreshThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollThrottlingTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollDebounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        checkResizeInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vsUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        vsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        vsStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        vsEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }],
        invisiblePaddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['invisiblePadding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }],
        headerElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['header', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }],
        containerElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['container', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'virtual-scroller,[virtualScroller]',
            exportAs: 'virtualScroller',
            template: "\n    <div class=\"total-padding\" #invisiblePadding></div>\n    <div class=\"scrollable-content\" #content>\n      <ng-content></ng-content>\n    </div>\n  ",
            host: {
              '[class.horizontal]': "horizontal",
              '[class.vertical]': "!horizontal",
              '[class.selfScroll]': "!parentScroll"
            },
            styles: ["\n    :host {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t:host.horizontal.selfScroll {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t:host.vertical.selfScroll {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content ::ng-deep > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t:host.horizontal {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t:host.horizontal .scrollable-content {\n\t\tdisplay: flex;\n\t}\n\t\n\t:host.horizontal .scrollable-content ::ng-deep > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    :host.horizontal .total-padding {\n      height: 100%;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['virtual-scroller-default-options']
            }]
          }];
        }, {
          executeRefreshOutsideAngularZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          useMarginInsteadOfTranslate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ssrViewportWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ssrViewportHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          compareItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vsUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          vsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          vsStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          vsEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          scrollThrottlingTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          scrollDebounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          scrollAnimationTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          scrollbarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          scrollbarHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          checkResizeInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          resizeBypassRefreshThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          modifyOverflowStyleOfParentScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stripedTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableUnequalChildrenSizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          childWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          childHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ssrChildWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ssrChildHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }],
          invisiblePaddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['invisiblePadding', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }],
          headerElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['header', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }],
          containerElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['container', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }]
        });
      })();

      if (false) {}

      var VirtualScrollerModule = function VirtualScrollerModule() {
        _classCallCheck(this, VirtualScrollerModule);
      };

      VirtualScrollerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VirtualScrollerModule
      });
      VirtualScrollerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VirtualScrollerModule_Factory(t) {
          return new (t || VirtualScrollerModule)();
        },
        providers: [{
          provide: 'virtual-scroller-default-options',
          useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
          declarations: function declarations() {
            return [VirtualScrollerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [VirtualScrollerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [VirtualScrollerComponent],
            declarations: [VirtualScrollerComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [{
              provide: 'virtual-scroller-default-options',
              useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return AngularMultiSelect;
        }),
        multi: true
      };
      /** @type {?} */

      var DROPDOWN_CONTROL_VALIDATION = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return AngularMultiSelect;
        }),
        multi: true
      };
      /** @type {?} */

      var noop =
      /**
      * @return {?}
      */
      function noop() {};

      var ɵ0 = noop;

      var AngularMultiSelect = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} cdr
         * @param {?} ds
         */
        function AngularMultiSelect(_elementRef, cdr, ds) {
          var _this36 = this;

          _classCallCheck(this, AngularMultiSelect);

          this._elementRef = _elementRef;
          this.cdr = cdr;
          this.ds = ds;
          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.virtualdata = [];
          this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.isActive = false;
          this.isSelectAll = false;
          this.isFilterSelectAll = false;
          this.isInfiniteFilterSelectAll = false;
          this.chunkIndex = [];
          this.cachedItems = [];
          this.groupCachedItems = [];
          this.itemHeight = 41.6;
          this.filterLength = 0;
          this.infiniteFilterLength = 0;
          this.dropdownListYOffset = 0;
          this.dropDownWidth = 0;
          this.dropDownTop = 0;
          this.dropDownLeft = 0;
          this.id = Math.random().toString(36).substring(2);
          this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            filterSelectAllText: 'Select all filtered results',
            filterUnSelectAllText: 'UnSelect all filtered results',
            enableSearchFilter: false,
            searchBy: [],
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName',
            primaryKey: 'id',
            position: 'bottom',
            autoPosition: true,
            enableFilterSelectAll: true,
            selectGroup: false,
            addNewItemOnFilter: false,
            addNewButtonText: "Add",
            escapeToClose: true,
            clearAll: true,
            tagToBody: true
          };
          this.randomSize = true;
          this.filteredList = [];
          this.virtualScroollInit = false;
          this.isDisabledItemPresent = false;
          this.onTouchedCallback = noop;
          this.onChangeCallback = noop;
          this.searchTerm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            return term;
          })).subscribe(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            _this36.filterInfiniteList(val);
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */


        _createClass(AngularMultiSelect, [{
          key: "onEscapeDown",
          value: function onEscapeDown(event) {
            if (this.settings.escapeToClose) {
              this.closeDropdown();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (this.isActive) {
              this.closeDropdown();
              /** @type {?} */

              var elem = this.cuppaDropdown.nativeElement;

              if (this.settings.autoPosition) {
                this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
              }

              this.dropDownLeft = elem.getBoundingClientRect().x;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this.settings = Object.assign(this.defaultSettings, this.settings);
            this.cachedItems = this.cloneArray(this.data);

            if (this.settings.position == 'top') {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this37.selectedListHeight = {
                  val: 0
                };
                _this37.selectedListHeight.val = _this37.selectedListElem.nativeElement.clientHeight;
              });
            }

            this.subscription = this.ds.getData().subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              if (data) {
                /** @type {?} */
                var len = 0;
                data.forEach(
                /**
                * @param {?} obj
                * @param {?} i
                * @return {?}
                */
                function (obj, i) {
                  if (obj.disabled) {
                    _this37.isDisabledItemPresent = true;
                  }

                  if (!obj.hasOwnProperty('grpTitle')) {
                    len++;
                  }
                });
                _this37.filterLength = len;

                _this37.onFilterChange(data);
              }
            });
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this37.calculateDropdownDirection();
            });
            this.virtualScroollInit = false;
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.data && !changes.data.firstChange) {
              if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);

                if (this.data.length == 0) {
                  this.selectedItems = [];
                }

                this.groupCachedItems = this.cloneArray(this.groupedData);
              }

              this.cachedItems = this.cloneArray(this.data);
            }

            if (changes.settings && !changes.settings.firstChange) {
              this.settings = Object.assign(this.defaultSettings, this.settings);
            }

            if (changes.loading) {}

            if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
              this.virtualdata = changes.data.currentValue;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.selectedItems) {
              if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.settings.lazyLoading) {// this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
              this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
              this.cdr.detectChanges();
            }

            this.calculateDropdownDirection();
          }
          /**
           * @param {?} item
           * @param {?} index
           * @param {?} evt
           * @return {?}
           */

        }, {
          key: "onItemClick",
          value: function onItemClick(item, index, evt) {
            if (item.disabled) {
              return false;
            }

            if (this.settings.disabled) {
              return false;
            }
            /** @type {?} */


            var found = this.isSelected(item);
            /** @type {?} */

            var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

            if (!found) {
              if (this.settings.limitSelection) {
                if (limit) {
                  this.addSelected(item);
                  this.onSelect.emit(item);
                }
              } else {
                this.addSelected(item);
                this.onSelect.emit(item);
              }
            } else {
              this.removeSelected(item);
              this.onDeSelect.emit(item);
            }

            if (this.isSelectAll || this.data.length > this.selectedItems.length) {
              this.isSelectAll = false;
            }

            if (this.data.length == this.selectedItems.length) {
              this.isSelectAll = true;
            }

            if (this.settings.groupBy) {
              this.updateGroupInfo(item);
            }
          }
          /**
           * @param {?} c
           * @return {?}
           */

        }, {
          key: "validate",
          value: function validate(c) {
            return null;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value !== undefined && value !== null && value !== '') {
              if (this.settings.singleSelection) {
                if (this.settings.groupBy) {
                  this.groupedData = this.transformData(this.data, this.settings.groupBy);
                  this.groupCachedItems = this.cloneArray(this.groupedData);
                  this.selectedItems = [value[0]];
                } else {
                  try {
                    if (value.length > 1) {
                      this.selectedItems = [value[0]];
                      throw new MyException(404, {
                        "msg": "Single Selection Mode, Selected Items cannot have more than one item."
                      });
                    } else {
                      this.selectedItems = value;
                    }
                  } catch (e) {
                    console.error(e.body.msg);
                  }
                }
              } else {
                if (this.settings.limitSelection) {
                  this.selectedItems = value.slice(0, this.settings.limitSelection);
                } else {
                  this.selectedItems = value;
                }

                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                  this.isSelectAll = true;
                }

                if (this.settings.groupBy) {
                  this.groupedData = this.transformData(this.data, this.settings.groupBy);
                  this.groupCachedItems = this.cloneArray(this.groupedData);
                }
              }
            } else {
              this.selectedItems = [];
            }
          } //From ControlValueAccessor interface

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          } //From ControlValueAccessor interface

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          }
          /**
           * @param {?} index
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return item[this.settings.primaryKey];
          }
          /**
           * @param {?} clickedItem
           * @return {?}
           */

        }, {
          key: "isSelected",
          value: function isSelected(clickedItem) {
            var _this38 = this;

            if (clickedItem.disabled) {
              return false;
            }
            /** @type {?} */


            var found = false;
            this.selectedItems && this.selectedItems.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (clickedItem[_this38.settings.primaryKey] === item[_this38.settings.primaryKey]) {
                found = true;
              }
            });
            return found;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "addSelected",
          value: function addSelected(item) {
            if (item.disabled) {
              return;
            }

            if (this.settings.singleSelection) {
              this.selectedItems = [];
              this.selectedItems.push(item);
              this.closeDropdown();
            } else this.selectedItems.push(item);

            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
          }
          /**
           * @param {?} clickedItem
           * @return {?}
           */

        }, {
          key: "removeSelected",
          value: function removeSelected(clickedItem) {
            var _this39 = this;

            this.selectedItems && this.selectedItems.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (clickedItem[_this39.settings.primaryKey] === item[_this39.settings.primaryKey]) {
                _this39.selectedItems.splice(_this39.selectedItems.indexOf(item), 1);
              }
            });
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
          }
          /**
           * @param {?} evt
           * @return {?}
           */

        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(evt) {
            var _this40 = this;

            if (this.settings.disabled) {
              return false;
            }

            this.isActive = !this.isActive;

            if (this.isActive) {
              if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
                setTimeout(
                /**
                * @return {?}
                */
                function () {
                  _this40.searchInput.nativeElement.focus();
                }, 0);
              }

              this.onOpen.emit(true);
            } else {
              this.onClose.emit(false);
            }

            if (this.settings.lazyLoading) {
              this.virtualdata = this.data;
              this.virtualScroollInit = true;
            }

            evt.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "openDropdown",
          value: function openDropdown() {
            var _this41 = this;

            if (this.settings.disabled) {
              return false;
            }

            this.isActive = true;

            if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this41.searchInput.nativeElement.focus();
              }, 0);
            }

            this.onOpen.emit(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            if (this.searchInput && this.settings.lazyLoading) {
              this.searchInput.nativeElement.value = "";
            }

            if (this.searchInput) {
              this.searchInput.nativeElement.value = "";
            }

            this.filter = "";
            this.isActive = false;
            this.onClose.emit(false);
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeDropdownOnClickOut",
          value: function closeDropdownOnClickOut() {
            if (this.isActive) {
              if (this.searchInput && this.settings.lazyLoading) {
                this.searchInput.nativeElement.value = "";
              }

              if (this.searchInput) {
                this.searchInput.nativeElement.value = "";
              }

              this.filter = "";
              this.isActive = false;
              this.clearSearch();
              this.onClose.emit(false);
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll(event) {
            var _this42 = this;

            if (!this.isSelectAll) {
              this.selectedItems = [];

              if (this.settings.groupBy) {
                this.groupedData.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = !obj.disabled;
                });
                this.groupCachedItems.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = !obj.disabled;
                });
              } // this.selectedItems = this.data.slice();


              this.selectedItems = this.data.filter(
              /**
              * @param {?} individualData
              * @return {?}
              */
              function (individualData) {
                return !individualData.disabled;
              });
              this.isSelectAll = true;
              this.onChangeCallback(this.selectedItems);
              this.onTouchedCallback(this.selectedItems);
              this.onSelectAll.emit(this.selectedItems);
            } else {
              if (this.settings.groupBy) {
                this.groupedData.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = false;
                });
                this.groupCachedItems.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = false;
                });
              }

              this.selectedItems = [];
              this.isSelectAll = false;
              this.onChangeCallback(this.selectedItems);
              this.onTouchedCallback(this.selectedItems);
              this.onDeSelectAll.emit(this.selectedItems);
            }

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this42.calculateDropdownDirection();
            });
            event.stopPropagation();
          }
          /**
           * @return {?}
           */

        }, {
          key: "filterGroupedList",
          value: function filterGroupedList() {
            var _this43 = this;

            if (this.filter == "" || this.filter == null) {
              this.clearSearch();
              return;
            }

            this.groupedData = this.cloneArray(this.groupCachedItems);
            this.groupedData = this.groupedData.filter(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              /** @type {?} */
              var arr = [];

              if (obj[_this43.settings.labelKey].toLowerCase().indexOf(_this43.filter.toLowerCase()) > -1) {
                arr = obj.list;
              } else {
                arr = obj.list.filter(
                /**
                * @param {?} t
                * @return {?}
                */
                function (t) {
                  return t[_this43.settings.labelKey].toLowerCase().indexOf(_this43.filter.toLowerCase()) > -1;
                });
              }

              obj.list = arr;

              if (obj[_this43.settings.labelKey].toLowerCase().indexOf(_this43.filter.toLowerCase()) > -1) {
                return arr;
              } else {
                return arr.some(
                /**
                * @param {?} cat
                * @return {?}
                */
                function (cat) {
                  return cat[_this43.settings.labelKey].toLowerCase().indexOf(_this43.filter.toLowerCase()) > -1;
                });
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggleFilterSelectAll",
          value: function toggleFilterSelectAll() {
            var _this44 = this;

            if (!this.isFilterSelectAll) {
              /** @type {?} */
              var added = [];

              if (this.settings.groupBy) {
                /*                 this.groupedData.forEach((item: any) => {
                                    if (item.list) {
                                        item.list.forEach((el: any) => {
                                            if (!this.isSelected(el)) {
                                                this.addSelected(el);
                                                added.push(el);
                                            }
                                        });
                                    }
                                    this.updateGroupInfo(item);
                
                                }); */
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} el
                * @return {?}
                */
                function (el) {
                  if (!_this44.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                    _this44.addSelected(el);

                    added.push(el);
                  }
                });
              } else {
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  if (!_this44.isSelected(item)) {
                    _this44.addSelected(item);

                    added.push(item);
                  }
                });
              }

              this.isFilterSelectAll = true;
              this.onFilterSelectAll.emit(added);
            } else {
              /** @type {?} */
              var removed = [];

              if (this.settings.groupBy) {
                /*                 this.groupedData.forEach((item: any) => {
                                    if (item.list) {
                                        item.list.forEach((el: any) => {
                                            if (this.isSelected(el)) {
                                                this.removeSelected(el);
                                                removed.push(el);
                                            }
                                        });
                                    }
                                }); */
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} el
                * @return {?}
                */
                function (el) {
                  if (_this44.isSelected(el)) {
                    _this44.removeSelected(el);

                    removed.push(el);
                  }
                });
              } else {
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  if (_this44.isSelected(item)) {
                    _this44.removeSelected(item);

                    removed.push(item);
                  }
                });
              }

              this.isFilterSelectAll = false;
              this.onFilterDeSelectAll.emit(removed);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggleInfiniteFilterSelectAll",
          value: function toggleInfiniteFilterSelectAll() {
            var _this45 = this;

            if (!this.isInfiniteFilterSelectAll) {
              this.virtualdata.forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                if (!_this45.isSelected(item)) {
                  _this45.addSelected(item);
                }
              });
              this.isInfiniteFilterSelectAll = true;
            } else {
              this.virtualdata.forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                if (_this45.isSelected(item)) {
                  _this45.removeSelected(item);
                }
              });
              this.isInfiniteFilterSelectAll = false;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearSearch",
          value: function clearSearch() {
            if (this.settings.groupBy) {
              this.groupedData = [];
              this.groupedData = this.cloneArray(this.groupCachedItems);
            }

            this.filter = "";
            this.isFilterSelectAll = false;
          }
          /**
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "onFilterChange",
          value: function onFilterChange(data) {
            var _this46 = this;

            if (this.filter && this.filter == "" || data.length == 0) {
              this.isFilterSelectAll = false;
            }
            /** @type {?} */


            var cnt = 0;
            data.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (!item.hasOwnProperty('grpTitle') && _this46.isSelected(item)) {
                cnt++;
              }
            });

            if (cnt > 0 && this.filterLength == cnt) {
              this.isFilterSelectAll = true;
            } else if (cnt > 0 && this.filterLength != cnt) {
              this.isFilterSelectAll = false;
            }

            this.cdr.detectChanges();
          }
          /**
           * @param {?} arr
           * @return {?}
           */

        }, {
          key: "cloneArray",
          value: function cloneArray(arr) {
            /** @type {?} */
            var i;
            /** @type {?} */

            var copy;

            if (Array.isArray(arr)) {
              return JSON.parse(JSON.stringify(arr));
            } else if (typeof arr === 'object') {
              throw 'Cannot clone array containing an object!';
            } else {
              return arr;
            }
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "updateGroupInfo",
          value: function updateGroupInfo(item) {
            var _this47 = this;

            if (item.disabled) {
              return false;
            }
            /** @type {?} */


            var key = this.settings.groupBy;
            this.groupedData.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              /** @type {?} */
              var cnt = 0;

              if (obj.grpTitle && item[key] == obj[key]) {
                if (obj.list) {
                  obj.list.forEach(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    if (_this47.isSelected(el)) {
                      cnt++;
                    }
                  });
                }
              }

              if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
                obj.selected = true;
              } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
                obj.selected = false;
              }
            });
            this.groupCachedItems.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              /** @type {?} */
              var cnt = 0;

              if (obj.grpTitle && item[key] == obj[key]) {
                if (obj.list) {
                  obj.list.forEach(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    if (_this47.isSelected(el)) {
                      cnt++;
                    }
                  });
                }
              }

              if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
                obj.selected = true;
              } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
                obj.selected = false;
              }
            });
          }
          /**
           * @param {?} arr
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "transformData",
          value: function transformData(arr, field) {
            var _this48 = this;

            /** @type {?} */
            var groupedObj = arr.reduce(
            /**
            * @param {?} prev
            * @param {?} cur
            * @return {?}
            */
            function (prev, cur) {
              if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
              } else {
                prev[cur[field]].push(cur);
              }

              return prev;
            }, {});
            /** @type {?} */

            var tempArr = [];
            Object.keys(groupedObj).map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              /** @type {?} */
              var obj = {};
              /** @type {?} */

              var disabledChildrens = [];
              obj["grpTitle"] = true;
              obj[_this48.settings.labelKey] = x;
              obj[_this48.settings.groupBy] = x;
              obj['selected'] = false;
              obj['list'] = [];
              /** @type {?} */

              var cnt = 0;
              groupedObj[x].forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                item['list'] = [];

                if (item.disabled) {
                  _this48.isDisabledItemPresent = true;
                  disabledChildrens.push(item);
                }

                obj.list.push(item);

                if (_this48.isSelected(item)) {
                  cnt++;
                }
              });

              if (cnt == obj.list.length) {
                obj.selected = true;
              } else {
                obj.selected = false;
              } // Check if current group item's all childrens are disabled or not


              obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
              tempArr.push(obj); // obj.list.forEach((item: any) => {
              //     tempArr.push(item);
              // });
            });
            return tempArr;
          }
          /**
           * @param {?} evt
           * @return {?}
           */

        }, {
          key: "filterInfiniteList",
          value: function filterInfiniteList(evt) {
            var _this49 = this;

            /** @type {?} */
            var filteredElems = [];

            if (this.settings.groupBy) {
              this.groupedData = this.groupCachedItems.slice();
            } else {
              this.data = this.cachedItems.slice();
              this.virtualdata = this.cachedItems.slice();
            }

            if ((evt != null || evt != '') && !this.settings.groupBy) {
              if (this.settings.searchBy.length > 0) {
                var _loop = function _loop(t) {
                  _this49.virtualdata.filter(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    if (el[_this49.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                      filteredElems.push(el);
                    }
                  });
                };

                for (var t = 0; t < this.settings.searchBy.length; t++) {
                  _loop(t);
                }
              } else {
                this.virtualdata.filter(
                /**
                * @param {?} el
                * @return {?}
                */
                function (el) {
                  for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                      filteredElems.push(el);
                      break;
                    }
                  }
                });
              }

              this.virtualdata = [];
              this.virtualdata = filteredElems;
              this.infiniteFilterLength = this.virtualdata.length;
            }

            if (evt.toString() != '' && this.settings.groupBy) {
              this.groupedData.filter(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                if (el.hasOwnProperty('grpTitle')) {
                  filteredElems.push(el);
                } else {
                  for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                      filteredElems.push(el);
                      break;
                    }
                  }
                }
              });
              this.groupedData = [];
              this.groupedData = filteredElems;
              this.infiniteFilterLength = this.groupedData.length;
            } else if (evt.toString() == '' && this.cachedItems.length > 0) {
              this.virtualdata = [];
              this.virtualdata = this.cachedItems;
              this.infiniteFilterLength = 0;
            }

            this.virtualScroller.refresh();
          }
          /**
           * @return {?}
           */

        }, {
          key: "resetInfiniteSearch",
          value: function resetInfiniteSearch() {
            this.filter = "";
            this.isInfiniteFilterSelectAll = false;
            this.virtualdata = [];
            this.virtualdata = this.cachedItems;
            this.groupedData = this.groupCachedItems;
            this.infiniteFilterLength = 0;
          }
          /**
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "onScrollEnd",
          value: function onScrollEnd(e) {
            if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {}

            this.onScrollToEnd.emit(e);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "selectGroup",
          value: function selectGroup(item) {
            var _this50 = this;

            if (item.disabled) {
              return false;
            }

            if (item.selected) {
              item.selected = false;
              item.list.forEach(
              /**
              * @param {?} obj
              * @return {?}
              */
              function (obj) {
                _this50.removeSelected(obj);
              });
              this.onGroupDeSelect.emit(item);
              this.updateGroupInfo(item);
            } else {
              item.selected = true;
              item.list.forEach(
              /**
              * @param {?} obj
              * @return {?}
              */
              function (obj) {
                if (!_this50.isSelected(obj)) {
                  _this50.addSelected(obj);
                }
              });
              this.onGroupSelect.emit(item);
              this.updateGroupInfo(item);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "addFilterNewItem",
          value: function addFilterNewItem() {
            this.onAddFilterNewItem.emit(this.filter);
            this.filterPipe = new ListFilterPipe(this.ds);
            this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
          }
          /**
           * @return {?}
           */

        }, {
          key: "calculateDropdownDirection",
          value: function calculateDropdownDirection() {
            /** @type {?} */
            var shouldOpenTowardsTop = this.settings.position == 'top';
            /** @type {?} */

            var elem = this.cuppaDropdown.nativeElement;
            /** @type {?} */

            var dropdownWidth = elem.clientWidth;
            this.dropDownWidth = dropdownWidth;
            this.dropDownLeft = elem.getBoundingClientRect().x;

            if (this.settings.position == 'top' && !this.settings.autoPosition) {
              this.openTowardsTop(true);
            } else if (this.settings.position == 'bottom' && !this.settings.autoPosition) {
              this.openTowardsTop(false);
            }

            if (this.settings.autoPosition) {
              /** @type {?} */
              var dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
              /** @type {?} */

              var viewportHeight = document.documentElement.clientHeight;
              /** @type {?} */

              var selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
              /** @type {?} */

              var spaceOnTop = selectedListBounds.top;
              /** @type {?} */

              var spaceOnBottom = viewportHeight - selectedListBounds.top;

              if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
                this.openTowardsTop(true);
              } else {
                this.openTowardsTop(false);
              } // Keep preference if there is not enough space on either the top or bottom

              /* 			if (spaceOnTop || spaceOnBottom) {
                              if (shouldOpenTowardsTop) {
                                  shouldOpenTowardsTop = spaceOnTop;
                              } else {
                                  shouldOpenTowardsTop = !spaceOnBottom;
                              }
                          } */

            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "openTowardsTop",
          value: function openTowardsTop(value) {
            /** @type {?} */
            var elem = this.cuppaDropdown.nativeElement;

            if (value && this.selectedListElem.nativeElement.clientHeight) {
              this.dropdownListYOffset = 15 - this.selectedListElem.nativeElement.clientHeight;
              this.dropDownTop = elem.getBoundingClientRect().y - this.dropdownListElem.nativeElement.clientHeight - 15;
              this.settings.position = 'top';
            } else {
              this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
              this.dropdownListYOffset = 0;
              this.settings.position = 'bottom';
            }
          }
          /**
           * @param {?=} e
           * @return {?}
           */

        }, {
          key: "clearSelection",
          value: function clearSelection(e) {
            if (this.settings.groupBy) {
              this.groupCachedItems.forEach(
              /**
              * @param {?} obj
              * @return {?}
              */
              function (obj) {
                obj.selected = false;
              });
            }

            this.clearSearch();
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
          }
        }]);

        return AngularMultiSelect;
      }();

      AngularMultiSelect.ɵfac = function AngularMultiSelect_Factory(t) {
        return new (t || AngularMultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataService));
      };

      AngularMultiSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AngularMultiSelect,
        selectors: [["angular2-multiselect"]],
        contentQueries: function AngularMultiSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, Item, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, Badge, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, Search, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTempl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.badgeTempl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchTempl = _t.first);
          }
        },
        viewQuery: function AngularMultiSelect_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](VirtualScrollerComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectedListElem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownListElem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cuppaDropdown = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function AngularMultiSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.escape", function AngularMultiSelect_keyup_escape_HostBindingHandler($event) {
              return ctx.onEscapeDown($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("scroll", function AngularMultiSelect_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.defaultSettings.classes);
          }
        },
        inputs: {
          settings: "settings",
          data: "data",
          loading: "loading"
        },
        outputs: {
          onSelect: "onSelect",
          onDeSelect: "onDeSelect",
          onSelectAll: "onSelectAll",
          onDeSelectAll: "onDeSelectAll",
          onOpen: "onOpen",
          onClose: "onClose",
          onScrollToEnd: "onScrollToEnd",
          onFilterSelectAll: "onFilterSelectAll",
          onFilterDeSelectAll: "onFilterDeSelectAll",
          onAddFilterNewItem: "onAddFilterNewItem",
          onGroupSelect: "onGroupSelect",
          onGroupDeSelect: "onGroupDeSelect"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 36,
        vars: 47,
        consts: [[1, "cuppa-dropdown", 3, "clickOutside"], ["cuppaDropdown", ""], [1, "selected-list"], ["selectedList", ""], [1, "c-btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "c-list", 4, "ngIf"], ["class", "countplaceholder", 4, "ngIf"], ["class", "c-remove clear-all", 3, "click", 4, "ngIf"], ["class", "c-angle-down", 4, "ngIf"], ["class", "c-angle-up", 4, "ngIf"], [1, "dropdown-list", "tagToBody", "animated", "fadeIn", 3, "hidden"], ["dropdownList", ""], [1, "arrow-2", 3, "ngClass"], [3, "ngClass"], [1, "list-area", 3, "ngClass"], ["class", "pure-checkbox select-all", 4, "ngIf"], ["class", "loading-icon", "src", "assets/img/loading.gif", 4, "ngIf"], ["class", "list-filter", 4, "ngIf"], ["class", "filter-select-all", 4, "ngIf"], [1, "filter-select-all"], ["class", "nodata-label", 3, "hidden", 4, "ngIf"], ["class", "btn-container", 3, "hidden", 4, "ngIf"], ["style", "overflow: auto;", 3, "maxHeight", 4, "ngIf"], ["class", "list-message", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-list"], ["class", "c-token", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token"], ["class", "c-label", 4, "ngIf"], [1, "c-remove", 3, "click"], [3, "name"], [1, "c-label"], [3, "data", "item"], ["class", "c-token", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token", 3, "hidden"], [1, "countplaceholder"], [1, "c-remove", "clear-all", 3, "click"], [1, "c-angle-down"], [1, "c-angle-up"], [1, "pure-checkbox", "select-all"], ["type", "checkbox", 3, "checked", "disabled", "id", "change", 4, "ngIf"], [3, "for"], [3, "hidden"], ["type", "checkbox", 3, "checked", "disabled", "id", "change"], ["src", "assets/img/loading.gif", 1, "loading-icon"], [1, "list-filter"], ["id", "searchIcon", 1, "c-search"], ["class", "c-clear", 3, "hidden", "click", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [3, "data", "item", 4, "ngIf"], [1, "c-clear", 3, "hidden", "click"], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchInput", ""], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "pure-checkbox select-all", 3, "click", 4, "ngIf"], [1, "pure-checkbox", "select-all", 3, "click"], ["type", "checkbox", "aria-labelledby", "optionName", "aria-label", "option", 3, "checked", "disabled"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled"], [1, "nodata-label", 3, "hidden"], [1, "btn-container", 3, "hidden"], [1, "c-btn", "btn-iceblue", 3, "click"], [2, "overflow", "auto"], [1, "lazyContainer"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pure-checkbox", 3, "ngClass", "click"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled", 4, "ngIf"], ["virtualScroller", "", 1, "lazyContainer", 3, "enableUnequalChildrenSizes", "items", "ngStyle", "vsStart", "vsEnd"], ["scroll", ""], ["type", "checkbox", 3, "checked", "disabled", 4, "ngIf"], ["type", "checkbox", 3, "checked", "disabled"], ["scroll2", ""], ["scroll3", ""], [4, "ngFor", "ngForOf"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngIf"], ["class", "pure-checkbox", 3, "ngClass", 4, "ngIf"], [1, "pure-checkbox", 3, "ngClass"], [3, "items", "ngStyle", "vsUpdate", "vsEnd"], ["scroll4", ""], [1, "list-message"]],
        template: function AngularMultiSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AngularMultiSelect_Template_div_clickOutside_0_listener() {
              return ctx.closeDropdownOnClickOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_Template_div_click_4_listener($event) {
              return ctx.toggleDropdown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularMultiSelect_span_5_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_span_6_Template, 2, 2, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AngularMultiSelect_span_7_Template, 2, 2, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularMultiSelect_div_8_Template, 2, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularMultiSelect_span_9_Template, 2, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AngularMultiSelect_span_10_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AngularMultiSelect_span_11_Template, 2, 1, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AngularMultiSelect_span_12_Template, 2, 1, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AngularMultiSelect_div_18_Template, 7, 6, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AngularMultiSelect_img_19_Template, 1, 0, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AngularMultiSelect_div_20_Template, 9, 7, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AngularMultiSelect_div_21_Template, 3, 2, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AngularMultiSelect_div_22_Template, 2, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AngularMultiSelect_label_24_Template, 2, 2, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AngularMultiSelect_label_25_Template, 2, 2, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AngularMultiSelect_div_26_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AngularMultiSelect_div_27_Template, 4, 7, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AngularMultiSelect_div_28_Template, 4, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AngularMultiSelect_div_29_Template, 4, 7, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AngularMultiSelect_div_30_Template, 4, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AngularMultiSelect_div_31_Template, 4, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AngularMultiSelect_div_32_Template, 3, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AngularMultiSelect_div_33_Template, 5, 12, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AngularMultiSelect_div_34_Template, 3, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AngularMultiSelect_h5_35_Template, 2, 1, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c14, ctx.settings.disabled));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.singleSelection && !ctx.badgeTempl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && ctx.settings.singleSelection && ctx.badgeTempl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.singleSelection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > ctx.settings.badgeShowLimit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.clearAll && (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.dropDownWidth, "px")("top", ctx.dropDownTop, "px")("left", ctx.dropDownLeft, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](39, _c15, ctx.settings.position == "bottom", ctx.settings.position == "top"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c15, ctx.settings.position == "bottom", ctx.settings.position == "top"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c16, ctx.settings.singleSelection));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.enableCheckAll && !ctx.settings.singleSelection && !ctx.settings.limitSelection && (ctx.data == null ? null : ctx.data.length) > 0 && !ctx.isDisabledItemPresent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.enableSearchFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent && !ctx.settings.singleSelection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.filterLength == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && (ctx.groupedData == null ? null : ctx.groupedData.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.addNewItemOnFilter && ctx.filterLength == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) == 0);
          }
        },
        directives: [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CIcon, TemplateRenderer, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        pipes: [ListFilterPipe],
        styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;-webkit-box-align:center;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:-webkit-box;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list.tagToBody{position:fixed}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{-webkit-transition-duration:0s;transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;-webkit-transition:.4s;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-webkit-border-image:none;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"],
        encapsulation: 2
      });
      /** @nocollapse */

      AngularMultiSelect.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: DataService
        }];
      };

      AngularMultiSelect.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onSelect']
        }],
        onDeSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onDeSelect']
        }],
        onSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onSelectAll']
        }],
        onDeSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onDeSelectAll']
        }],
        onOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onOpen']
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onClose']
        }],
        onScrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onScrollToEnd']
        }],
        onFilterSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onFilterSelectAll']
        }],
        onFilterDeSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onFilterDeSelectAll']
        }],
        onAddFilterNewItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onAddFilterNewItem']
        }],
        onGroupSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onGroupSelect']
        }],
        onGroupDeSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onGroupDeSelect']
        }],
        itemTempl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [Item, {
            "static": false
          }]
        }],
        badgeTempl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [Badge, {
            "static": false
          }]
        }],
        searchTempl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [Search, {
            "static": false
          }]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput', {
            "static": false
          }]
        }],
        selectedListElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['selectedList', {
            "static": false
          }]
        }],
        dropdownListElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dropdownList', {
            "static": false
          }]
        }],
        cuppaDropdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cuppaDropdown', {
            "static": false
          }]
        }],
        onEscapeDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.escape', ['$event']]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }],
        virtualScroller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [VirtualScrollerComponent, {
            "static": false
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMultiSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'angular2-multiselect',
            template: "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdownOnClickOut()\" #cuppaDropdown>\n    <div class=\"selected-list\" #selectedList>\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\" [attr.tabindex]=\"0\">\n\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n            <span *ngIf=\"settings.singleSelection && !badgeTempl\">\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    {{item[settings.labelKey]}}\n                </span>\n            </span>\n            <span class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && settings.singleSelection && badgeTempl \">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </span>\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </div>\n            <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n            <span class=\"c-remove clear-all\" *ngIf=\"settings.clearAll && selectedItems?.length > 0 && !settings.disabled\" (click)=\"clearSelection($event);$event.stopPropagation()\">\n                <c-icon [name]=\"'remove'\"></c-icon>\n            </span>\n            <span *ngIf=\"!isActive\" class=\"c-angle-down\">\n                <c-icon [name]=\"'angle-down'\"></c-icon>\n            </span>\n            <span *ngIf=\"isActive\" class=\"c-angle-up\">\n                <c-icon [name]=\"'angle-up'\"></c-icon>\n\n            </span>\n        </div>\n    </div>\n    <div #dropdownList class=\"dropdown-list tagToBody animated fadeIn\" \n    [style.width.px]=\"dropDownWidth\" \n    [style.top.px]=\"dropDownTop\" \n    [style.left.px]=\"dropDownLeft\" \n        [hidden]=\"!isActive\">\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\" class=\"arrow-2\"></div>\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\"></div>\n        <div class=\"list-area\" [ngClass]=\"{'single-select-mode': settings.singleSelection }\">\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection && data?.length > 0 && !isDisabledItemPresent\"\n                >\n                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                [id]=\"id\" (change)=\"toggleSelectAll($event)\"/>\n                <label [for]=\"id\">\n                    <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                    <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                </label>\n            </div>\n            <img class=\"loading-icon\" *ngIf=\"loading\" src=\"assets/img/loading.gif\" />\n            <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n                <span class=\"c-search\" id=\"searchIcon\">\n                    <c-icon [name]=\"'search'\"></c-icon>\n                </span>\n                <span *ngIf=\"!settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"clearSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n                <span *ngIf=\"settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"resetInfiniteSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n\n                <input class=\"c-input\" *ngIf=\"settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"filterGroupedList()\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"!settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"searchTerm$.next($event.target.value)\" aria-labelledby=\"searchIcon\">\n                <!--            <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl && settings.groupBy\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"filterGroupList($event)\">-->\n                <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"!settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"!settings.groupBy && filter?.length > 0 && filterLength > 0  && !settings.singleSelection\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\" aria-labelledby=\"optionName\"\n                    aria-label=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n                <div class=\"pure-checkbox select-all\" *ngIf=\"settings.groupBy && filter?.length > 0 && groupedData?.length > 0  && !settings.singleSelection\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll && filter?.length > 0\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent && !settings.singleSelection\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && infiniteFilterLength > 0\" (click)=\"toggleInfiniteFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isInfiniteFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isInfiniteFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isInfiniteFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"filter-select-all\">\n                <label class=\"nodata-label\" *ngIf=\"!settings.groupBy && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n                <label class=\"nodata-label\" *ngIf=\"settings.groupBy && groupedData?.length == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n\n                <div class=\"btn-container\" *ngIf=\"settings.addNewItemOnFilter && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">\n                    <button class=\"c-btn btn-iceblue\" (click)=\"addFilterNewItem()\">{{settings.addNewButtonText}}</button>\n                </div>\n            </div>\n\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        aria-labelledby=\"option\"/>\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading -->\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <li *ngFor=\"let item of scroll.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <!-- custom template -->\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading and custom template -->\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll2 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" class=\"lazyContainer\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <li *ngFor=\"let item of scroll2.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading, group By and custom template -->\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll3 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <span *ngFor=\"let item of scroll3.viewPortItems; let i = index;\">\n                        <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                        <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <!-- group By and custom template -->\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label></label>\n                                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"val\"></c-templateRenderer>\n                                    </li>\n                                </span>\n                            </ul>\n\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <!-- lazy loading, group By -->\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <virtual-scroller [items]=\"groupedData\" (vsUpdate)=\"viewPortItems = $event\" (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <ul virtualScroller #scroll4 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                        (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                        <span *ngFor=\"let item of scroll4.viewPortItems; let i = index;\">\n                            <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\"\n                                    [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                            <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                        </span>\n                    </ul>\n                </virtual-scroller>\n            </div>\n            <!-- group By -->\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData ; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'selected-item': isSelected(val) == true,'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label>{{val[settings.labelKey]}}</label>\n                                    </li>\n                                </span>\n                            </ul>\n                        </li>\n                    </span>\n                    <!-- <span *ngFor=\"let item of groupedData ; let i = index;\">\n                    <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                <li *ngIf=\"item.grpTitle && !settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                 <li  (click)=\"selectGroup(item)\" *ngIf=\"item.grpTitle && settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                </span> -->\n                </ul>\n            </div>\n            <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n        </div>\n    </div>\n</div>",
            host: {
              '[class]': 'defaultSettings.classes'
            },
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;-webkit-box-align:center;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:-webkit-box;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list.tagToBody{position:fixed}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{-webkit-transition-duration:0s;transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;-webkit-transition:.4s;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-webkit-border-image:none;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: DataService
          }];
        }, {
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onSelect']
          }],
          onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDeSelect']
          }],
          onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onSelectAll']
          }],
          onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDeSelectAll']
          }],
          onOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onOpen']
          }],
          onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onClose']
          }],
          onScrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onScrollToEnd']
          }],
          onFilterSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onFilterSelectAll']
          }],
          onFilterDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onFilterDeSelectAll']
          }],
          onAddFilterNewItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onAddFilterNewItem']
          }],
          onGroupSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onGroupSelect']
          }],
          onGroupDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onGroupDeSelect']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onEscapeDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.escape', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
          }],
          settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Item, {
              "static": false
            }]
          }],
          badgeTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Badge, {
              "static": false
            }]
          }],
          searchTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Search, {
              "static": false
            }]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput', {
              "static": false
            }]
          }],
          selectedListElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectedList', {
              "static": false
            }]
          }],
          dropdownListElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownList', {
              "static": false
            }]
          }],
          cuppaDropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cuppaDropdown', {
              "static": false
            }]
          }],
          virtualScroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [VirtualScrollerComponent, {
              "static": false
            }]
          }]
        });
      })();

      if (false) {}

      var AngularMultiSelectModule = function AngularMultiSelectModule() {
        _classCallCheck(this, AngularMultiSelectModule);
      };

      AngularMultiSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularMultiSelectModule
      });
      AngularMultiSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularMultiSelectModule_Factory(t) {
          return new (t || AngularMultiSelectModule)();
        },
        providers: [DataService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMultiSelectModule, {
          declarations: function declarations() {
            return [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule];
          },
          exports: function exports() {
            return [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMultiSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule],
            declarations: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
            exports: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
            providers: [DataService]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular2-multiselect-dropdown.js.map

      /***/

    },

    /***/
    "eNKl":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
      \****************************************************************************************************/

    /*! exports provided: forkJoin */

    /***/
    function eNKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forkJoin", function () {
        return forkJoin;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../operators/map */
      "k3Lq");
      /* harmony import */


      var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/isObject */
      "lpsS");
      /* harmony import */


      var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./from */
      "F0B0");

      function forkJoin() {
        for (var _len13 = arguments.length, sources = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          sources[_key13] = arguments[_key13];
        }

        if (sources.length === 1) {
          var first = sources[0];

          if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(first)) {
            return forkJoinInternal(first, null);
          }

          if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(first) && Object.getPrototypeOf(first) === Object.prototype) {
            var keys = Object.keys(first);
            return forkJoinInternal(keys.map(function (key) {
              return first[key];
            }), keys);
          }
        }

        if (typeof sources[sources.length - 1] === 'function') {
          var resultSelector = sources.pop();
          sources = sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0]) ? sources[0] : sources;
          return forkJoinInternal(sources, null).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
            return resultSelector.apply(void 0, _toConsumableArray(args));
          }));
        }

        return forkJoinInternal(sources, null);
      }

      function forkJoinInternal(sources, keys) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var len = sources.length;

          if (len === 0) {
            subscriber.complete();
            return;
          }

          var values = new Array(len);
          var completed = 0;
          var emitted = 0;

          var _loop2 = function _loop2(i) {
            var source = Object(_from__WEBPACK_IMPORTED_MODULE_4__["from"])(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
              next: function next(value) {
                if (!hasValue) {
                  hasValue = true;
                  emitted++;
                }

                values[i] = value;
              },
              error: function error(err) {
                return subscriber.error(err);
              },
              complete: function complete() {
                completed++;

                if (completed === len || !hasValue) {
                  if (emitted === len) {
                    subscriber.next(keys ? keys.reduce(function (result, key, i) {
                      return result[key] = values[i], result;
                    }, {}) : values);
                  }

                  subscriber.complete();
                }
              }
            }));
          };

          for (var i = 0; i < len; i++) {
            _loop2(i);
          }
        });
      } //# sourceMappingURL=forkJoin.js.map

      /***/

    },

    /***/
    "eqUD":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
      \**************************************************************************************************/

    /*! exports provided: toSubscriber */

    /***/
    function eqUD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toSubscriber", function () {
        return toSubscriber;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");
      /* harmony import */


      var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../symbol/rxSubscriber */
      "JcfW");
      /* harmony import */


      var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observer */
      "t8Ro");

      function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
          if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
          }

          if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
          }
        }

        if (!nextOrObserver && !error && !complete) {
          return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
        }

        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
      } //# sourceMappingURL=toSubscriber.js.map

      /***/

    },

    /***/
    "faBL":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Observable.js ***!
      \*******************************************************************************************/

    /*! exports provided: Observable */

    /***/
    function faBL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Observable", function () {
        return Observable;
      });
      /* harmony import */


      var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util/canReportError */
      "OKNj");
      /* harmony import */


      var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/toSubscriber */
      "eqUD");
      /* harmony import */


      var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./symbol/observable */
      "JhYf");
      /* harmony import */


      var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./util/pipe */
      "oCq4");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config */
      "Mg+x");

      var Observable = /*#__PURE__*/function () {
        function Observable(subscribe) {
          _classCallCheck(this, Observable);

          this._isScalar = false;

          if (subscribe) {
            this._subscribe = subscribe;
          }
        }

        _createClass(Observable, [{
          key: "lift",
          value: function lift(operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
          }
        }, {
          key: "subscribe",
          value: function subscribe(observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);

            if (operator) {
              sink.add(operator.call(sink, this.source));
            } else {
              sink.add(this.source || _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
            }

            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
              if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;

                if (sink.syncErrorThrown) {
                  throw sink.syncErrorValue;
                }
              }
            }

            return sink;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(sink) {
            try {
              return this._subscribe(sink);
            } catch (err) {
              if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
              }

              if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
              } else {
                console.warn(err);
              }
            }
          }
        }, {
          key: "forEach",
          value: function forEach(next, promiseCtor) {
            var _this51 = this;

            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
              var subscription;
              subscription = _this51.subscribe(function (value) {
                try {
                  next(value);
                } catch (err) {
                  reject(err);

                  if (subscription) {
                    subscription.unsubscribe();
                  }
                }
              }, reject, resolve);
            });
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
          }
        }, {
          key: _symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"],
          value: function value() {
            return this;
          }
        }, {
          key: "pipe",
          value: function pipe() {
            for (var _len14 = arguments.length, operations = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
              operations[_key14] = arguments[_key14];
            }

            if (operations.length === 0) {
              return this;
            }

            return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
          }
        }, {
          key: "toPromise",
          value: function toPromise(promiseCtor) {
            var _this52 = this;

            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
              var value;

              _this52.subscribe(function (x) {
                return value = x;
              }, function (err) {
                return reject(err);
              }, function () {
                return resolve(value);
              });
            });
          }
        }]);

        return Observable;
      }();

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
          promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
        }

        if (!promiseCtor) {
          throw new Error('no Promise impl found');
        }

        return promiseCtor;
      } //# sourceMappingURL=Observable.js.map

      /***/

    },

    /***/
    "g8rM":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/identity.js ***!
      \**********************************************************************************************/

    /*! exports provided: identity */

    /***/
    function g8rM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "identity", function () {
        return identity;
      });

      function identity(x) {
        return x;
      } //# sourceMappingURL=identity.js.map

      /***/

    },

    /***/
    "gOox":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
      \****************************************************************************************************/

    /*! exports provided: SubjectSubscription */

    /***/
    function gOox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function () {
        return SubjectSubscription;
      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subscription */
      "ZtUA");

      var SubjectSubscription = /*#__PURE__*/function (_Subscription__WEBPAC3) {
        _inherits(SubjectSubscription, _Subscription__WEBPAC3);

        var _super29 = _createSuper(SubjectSubscription);

        function SubjectSubscription(subject, subscriber) {
          var _this53;

          _classCallCheck(this, SubjectSubscription);

          _this53 = _super29.call(this);
          _this53.subject = subject;
          _this53.subscriber = subscriber;
          _this53.closed = false;
          return _this53;
        }

        _createClass(SubjectSubscription, [{
          key: "unsubscribe",
          value: function unsubscribe() {
            if (this.closed) {
              return;
            }

            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;

            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
              return;
            }

            var subscriberIndex = observers.indexOf(this.subscriber);

            if (subscriberIndex !== -1) {
              observers.splice(subscriberIndex, 1);
            }
          }
        }]);

        return SubjectSubscription;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]); //# sourceMappingURL=SubjectSubscription.js.map

      /***/

    },

    /***/
    "gQ4j":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
      \**********************************************************************************************/

    /*! exports provided: ReplaySubject */

    /***/
    function gQ4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplaySubject", function () {
        return ReplaySubject;
      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subject */
      "8Az0");
      /* harmony import */


      var _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scheduler/queue */
      "DDn8");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Subscription */
      "ZtUA");
      /* harmony import */


      var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./operators/observeOn */
      "iKZE");
      /* harmony import */


      var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./util/ObjectUnsubscribedError */
      "+cgn");
      /* harmony import */


      var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./SubjectSubscription */
      "gOox");

      var ReplaySubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP) {
        _inherits(ReplaySubject, _Subject__WEBPACK_IMP);

        var _super30 = _createSuper(ReplaySubject);

        function ReplaySubject() {
          var _this54;

          var bufferSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
          var windowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
          var scheduler = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, ReplaySubject);

          _this54 = _super30.call(this);
          _this54.scheduler = scheduler;
          _this54._events = [];
          _this54._infiniteTimeWindow = false;
          _this54._bufferSize = bufferSize < 1 ? 1 : bufferSize;
          _this54._windowTime = windowTime < 1 ? 1 : windowTime;

          if (windowTime === Number.POSITIVE_INFINITY) {
            _this54._infiniteTimeWindow = true;
            _this54.next = _this54.nextInfiniteTimeWindow;
          } else {
            _this54.next = _this54.nextTimeWindow;
          }

          return _this54;
        }

        _createClass(ReplaySubject, [{
          key: "nextInfiniteTimeWindow",
          value: function nextInfiniteTimeWindow(value) {
            if (!this.isStopped) {
              var _events = this._events;

              _events.push(value);

              if (_events.length > this._bufferSize) {
                _events.shift();
              }
            }

            _get(_getPrototypeOf(ReplaySubject.prototype), "next", this).call(this, value);
          }
        }, {
          key: "nextTimeWindow",
          value: function nextTimeWindow(value) {
            if (!this.isStopped) {
              this._events.push(new ReplayEvent(this._getNow(), value));

              this._trimBufferThenGetEvents();
            }

            _get(_getPrototypeOf(ReplaySubject.prototype), "next", this).call(this, value);
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var _infiniteTimeWindow = this._infiniteTimeWindow;

            var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

            var scheduler = this.scheduler;
            var len = _events.length;
            var subscription;

            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
            } else if (this.isStopped || this.hasError) {
              subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
            } else {
              this.observers.push(subscriber);
              subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
            }

            if (scheduler) {
              subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__["ObserveOnSubscriber"](subscriber, scheduler));
            }

            if (_infiniteTimeWindow) {
              for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
              }
            } else {
              for (var _i3 = 0; _i3 < len && !subscriber.closed; _i3++) {
                subscriber.next(_events[_i3].value);
              }
            }

            if (this.hasError) {
              subscriber.error(this.thrownError);
            } else if (this.isStopped) {
              subscriber.complete();
            }

            return subscription;
          }
        }, {
          key: "_getNow",
          value: function _getNow() {
            return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__["queue"]).now();
          }
        }, {
          key: "_trimBufferThenGetEvents",
          value: function _trimBufferThenGetEvents() {
            var now = this._getNow();

            var _bufferSize = this._bufferSize;
            var _windowTime = this._windowTime;
            var _events = this._events;
            var eventsCount = _events.length;
            var spliceCount = 0;

            while (spliceCount < eventsCount) {
              if (now - _events[spliceCount].time < _windowTime) {
                break;
              }

              spliceCount++;
            }

            if (eventsCount > _bufferSize) {
              spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
            }

            if (spliceCount > 0) {
              _events.splice(0, spliceCount);
            }

            return _events;
          }
        }]);

        return ReplaySubject;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]);

      var ReplayEvent = function ReplayEvent(time, value) {
        _classCallCheck(this, ReplayEvent);

        this.time = time;
        this.value = value;
      }; //# sourceMappingURL=ReplaySubject.js.map

      /***/

    },

    /***/
    "h+0h":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js ***!
      \*************************************************************************************************************/

    /*! exports provided: scheduleObservable */

    /***/
    function h0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scheduleObservable", function () {
        return scheduleObservable;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");
      /* harmony import */


      var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../symbol/observable */
      "JhYf");

      function scheduleObservable(input, scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
          sub.add(scheduler.schedule(function () {
            var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();

            sub.add(observable.subscribe({
              next: function next(value) {
                sub.add(scheduler.schedule(function () {
                  return subscriber.next(value);
                }));
              },
              error: function error(err) {
                sub.add(scheduler.schedule(function () {
                  return subscriber.error(err);
                }));
              },
              complete: function complete() {
                sub.add(scheduler.schedule(function () {
                  return subscriber.complete();
                }));
              }
            }));
          }));
          return sub;
        });
      } //# sourceMappingURL=scheduleObservable.js.map

      /***/

    },

    /***/
    "hnwd":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isIterable.js ***!
      \************************************************************************************************/

    /*! exports provided: isIterable */

    /***/
    function hnwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isIterable", function () {
        return isIterable;
      });
      /* harmony import */


      var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../symbol/iterator */
      "9yG4");

      function isIterable(input) {
        return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
      } //# sourceMappingURL=isIterable.js.map

      /***/

    },

    /***/
    "i22g":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
      \*********************************************************************************************************/

    /*! exports provided: UnsubscriptionError */

    /***/
    function i22g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function () {
        return UnsubscriptionError;
      });

      var UnsubscriptionErrorImpl = function () {
        function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ? "".concat(errors.length, " errors occurred during unsubscription:\n").concat(errors.map(function (err, i) {
            return "".concat(i + 1, ") ").concat(err.toString());
          }).join('\n  ')) : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
        }

        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
      }();

      var UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

      /***/
    },

    /***/
    "iKZE":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
      \****************************************************************************************************/

    /*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */

    /***/
    function iKZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "observeOn", function () {
        return observeOn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function () {
        return ObserveOnOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function () {
        return ObserveOnSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function () {
        return ObserveOnMessage;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");
      /* harmony import */


      var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Notification */
      "XyFK");

      function observeOn(scheduler) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return function observeOnOperatorFunction(source) {
          return source.lift(new ObserveOnOperator(scheduler, delay));
        };
      }

      var ObserveOnOperator = /*#__PURE__*/function () {
        function ObserveOnOperator(scheduler) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, ObserveOnOperator);

          this.scheduler = scheduler;
          this.delay = delay;
        }

        _createClass(ObserveOnOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
          }
        }]);

        return ObserveOnOperator;
      }();

      var ObserveOnSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_12) {
        _inherits(ObserveOnSubscriber, _Subscriber__WEBPACK_12);

        var _super31 = _createSuper(ObserveOnSubscriber);

        function ObserveOnSubscriber(destination, scheduler) {
          var _this55;

          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          _classCallCheck(this, ObserveOnSubscriber);

          _this55 = _super31.call(this, destination);
          _this55.scheduler = scheduler;
          _this55.delay = delay;
          return _this55;
        }

        _createClass(ObserveOnSubscriber, [{
          key: "scheduleMessage",
          value: function scheduleMessage(notification) {
            var destination = this.destination;
            destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
          }
        }, {
          key: "_next",
          value: function _next(value) {
            this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
          }
        }, {
          key: "_error",
          value: function _error(err) {
            this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
            this.unsubscribe();
          }
        }], [{
          key: "dispatch",
          value: function dispatch(arg) {
            var notification = arg.notification,
                destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
          }
        }]);

        return ObserveOnSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

      var ObserveOnMessage = function ObserveOnMessage(notification, destination) {
        _classCallCheck(this, ObserveOnMessage);

        this.notification = notification;
        this.destination = destination;
      }; //# sourceMappingURL=observeOn.js.map

      /***/

    },

    /***/
    "jYyn":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
      \*************************************************************************************************/

    /*! exports provided: Action */

    /***/
    function jYyn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Action", function () {
        return Action;
      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");

      var Action = /*#__PURE__*/function (_Subscription__WEBPAC4) {
        _inherits(Action, _Subscription__WEBPAC4);

        var _super32 = _createSuper(Action);

        function Action(scheduler, work) {
          _classCallCheck(this, Action);

          return _super32.call(this);
        }

        _createClass(Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    "k3Lq":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/map.js ***!
      \**********************************************************************************************/

    /*! exports provided: map, MapOperator */

    /***/
    function k3Lq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "map", function () {
        return map;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapOperator", function () {
        return MapOperator;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");

      function map(project, thisArg) {
        return function mapOperation(source) {
          if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          }

          return source.lift(new MapOperator(project, thisArg));
        };
      }

      var MapOperator = /*#__PURE__*/function () {
        function MapOperator(project, thisArg) {
          _classCallCheck(this, MapOperator);

          this.project = project;
          this.thisArg = thisArg;
        }

        _createClass(MapOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
          }
        }]);

        return MapOperator;
      }();

      var MapSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_13) {
        _inherits(MapSubscriber, _Subscriber__WEBPACK_13);

        var _super33 = _createSuper(MapSubscriber);

        function MapSubscriber(destination, project, thisArg) {
          var _this56;

          _classCallCheck(this, MapSubscriber);

          _this56 = _super33.call(this, destination);
          _this56.project = project;
          _this56.count = 0;
          _this56.thisArg = thisArg || _assertThisInitialized(_this56);
          return _this56;
        }

        _createClass(MapSubscriber, [{
          key: "_next",
          value: function _next(value) {
            var result;

            try {
              result = this.project.call(this.thisArg, value, this.count++);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            this.destination.next(result);
          }
        }]);

        return MapSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=map.js.map

      /***/

    },

    /***/
    "lVuj":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js ***!
      \***************************************************************************************************/

    /*! exports provided: mergeAll */

    /***/
    function lVuj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeAll", function () {
        return mergeAll;
      });
      /* harmony import */


      var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mergeMap */
      "b54l");
      /* harmony import */


      var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/identity */
      "g8rM");

      function mergeAll() {
        var concurrent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
        return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
      } //# sourceMappingURL=mergeAll.js.map

      /***/

    },

    /***/
    "lXm6":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/race.js ***!
      \************************************************************************************************/

    /*! exports provided: race, RaceOperator, RaceSubscriber */

    /***/
    function lXm6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "race", function () {
        return race;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RaceOperator", function () {
        return RaceOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function () {
        return RaceSubscriber;
      });
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isArray */
      "n7Bv");
      /* harmony import */


      var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fromArray */
      "oNEL");
      /* harmony import */


      var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../OuterSubscriber */
      "rxoO");
      /* harmony import */


      var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/subscribeToResult */
      "9UPp");

      function race() {
        for (var _len15 = arguments.length, observables = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
          observables[_key15] = arguments[_key15];
        }

        if (observables.length === 1) {
          if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
            observables = observables[0];
          } else {
            return observables[0];
          }
        }

        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new RaceOperator());
      }

      var RaceOperator = /*#__PURE__*/function () {
        function RaceOperator() {
          _classCallCheck(this, RaceOperator);
        }

        _createClass(RaceOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new RaceSubscriber(subscriber));
          }
        }]);

        return RaceOperator;
      }();

      var RaceSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB2) {
        _inherits(RaceSubscriber, _OuterSubscriber__WEB2);

        var _super34 = _createSuper(RaceSubscriber);

        function RaceSubscriber(destination) {
          var _this57;

          _classCallCheck(this, RaceSubscriber);

          _this57 = _super34.call(this, destination);
          _this57.hasFirst = false;
          _this57.observables = [];
          _this57.subscriptions = [];
          return _this57;
        }

        _createClass(RaceSubscriber, [{
          key: "_next",
          value: function _next(observable) {
            this.observables.push(observable);
          }
        }, {
          key: "_complete",
          value: function _complete() {
            var observables = this.observables;
            var len = observables.length;

            if (len === 0) {
              this.destination.complete();
            } else {
              for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i);

                if (this.subscriptions) {
                  this.subscriptions.push(subscription);
                }

                this.add(subscription);
              }

              this.observables = null;
            }
          }
        }, {
          key: "notifyNext",
          value: function notifyNext(_outerValue, innerValue, outerIndex) {
            if (!this.hasFirst) {
              this.hasFirst = true;

              for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                  var subscription = this.subscriptions[i];
                  subscription.unsubscribe();
                  this.remove(subscription);
                }
              }

              this.subscriptions = null;
            }

            this.destination.next(innerValue);
          }
        }]);

        return RaceSubscriber;
      }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=race.js.map

      /***/

    },

    /***/
    "lpsS":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
      \**********************************************************************************************/

    /*! exports provided: isObject */

    /***/
    function lpsS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return isObject;
      });

      function isObject(x) {
        return x !== null && typeof x === 'object';
      } //# sourceMappingURL=isObject.js.map

      /***/

    },

    /***/
    "mEr4":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/noop.js ***!
      \******************************************************************************************/

    /*! exports provided: noop */

    /***/
    function mEr4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "noop", function () {
        return noop;
      });

      function noop() {} //# sourceMappingURL=noop.js.map

      /***/

    },

    /***/
    "mdtm":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/iif.js ***!
      \***********************************************************************************************/

    /*! exports provided: iif */

    /***/
    function mdtm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "iif", function () {
        return iif;
      });
      /* harmony import */


      var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./defer */
      "QHcx");
      /* harmony import */


      var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./empty */
      "KpRf");

      function iif(condition) {
        var trueResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        var falseResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
          return condition() ? trueResult : falseResult;
        });
      } //# sourceMappingURL=iif.js.map

      /***/

    },

    /***/
    "n7Bv":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
      \*********************************************************************************************/

    /*! exports provided: isArray */

    /***/
    function n7Bv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return isArray;
      });

      var isArray = function () {
        return Array.isArray || function (x) {
          return x && typeof x.length === 'number';
        };
      }(); //# sourceMappingURL=isArray.js.map

      /***/

    },

    /***/
    "nO6v":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js ***!
      \*************************************************************************************************/

    /*! exports provided: subscribeTo */

    /***/
    function nO6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "subscribeTo", function () {
        return subscribeTo;
      });
      /* harmony import */


      var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subscribeToArray */
      "2zI2");
      /* harmony import */


      var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subscribeToPromise */
      "0y44");
      /* harmony import */


      var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./subscribeToIterable */
      "cbgO");
      /* harmony import */


      var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./subscribeToObservable */
      "RSca");
      /* harmony import */


      var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./isArrayLike */
      "Et9T");
      /* harmony import */


      var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./isPromise */
      "B2bc");
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./isObject */
      "lpsS");
      /* harmony import */


      var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../symbol/iterator */
      "9yG4");
      /* harmony import */


      var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../symbol/observable */
      "JhYf");

      var subscribeTo = function subscribeTo(result) {
        if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
          return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
        } else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
          return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
        } else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
          return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
        } else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
          return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
        } else {
          var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : "'".concat(result, "'");
          var msg = "You provided ".concat(value, " where a stream was expected.") + ' You can provide an Observable, Promise, Array, or Iterable.';
          throw new TypeError(msg);
        }
      }; //# sourceMappingURL=subscribeTo.js.map

      /***/

    },

    /***/
    "njyG":
    /*!***************************************************************!*\
      !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
      \***************************************************************/

    /*! exports provided: DataTableDirective, DataTablesModule */

    /***/
    function njyG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/angular-datatables.directive */
      "/iSe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
        return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
      });
      /* harmony import */


      var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/angular-datatables.module */
      "HO/X");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
        return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
      });
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */

      /**
       * @module
       * @description
       * Entry point from which you should import all public library APIs.
       */
      //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "oCq4":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
      \******************************************************************************************/

    /*! exports provided: pipe, pipeFromArray */

    /***/
    function oCq4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pipe", function () {
        return pipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pipeFromArray", function () {
        return pipeFromArray;
      });
      /* harmony import */


      var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./identity */
      "g8rM");

      function pipe() {
        for (var _len16 = arguments.length, fns = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
          fns[_key16] = arguments[_key16];
        }

        return pipeFromArray(fns);
      }

      function pipeFromArray(fns) {
        if (fns.length === 0) {
          return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
        }

        if (fns.length === 1) {
          return fns[0];
        }

        return function piped(input) {
          return fns.reduce(function (prev, fn) {
            return fn(prev);
          }, input);
        };
      } //# sourceMappingURL=pipe.js.map

      /***/

    },

    /***/
    "oNEL":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/fromArray.js ***!
      \*****************************************************************************************************/

    /*! exports provided: fromArray */

    /***/
    function oNEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromArray", function () {
        return fromArray;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeToArray */
      "2zI2");
      /* harmony import */


      var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduled/scheduleArray */
      "cRG+");

      function fromArray(input, scheduler) {
        if (!scheduler) {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
        } else {
          return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        }
      } //# sourceMappingURL=fromArray.js.map

      /***/

    },

    /***/
    "oOf3":
    /*!*************************************************************************!*\
      !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
      \*************************************************************************/

    /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

    /***/
    function oOf3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return DEFAULT_STYLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DEFAULT_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
        return NgxPaginationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
        return PaginationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
        return PaginationControlsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
        return PaginationControlsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
        return PaginatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.previous();
          })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.previous();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
        }
      }

      function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
        }
      }

      function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
        }
      }

      function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setCurrent(page_r10.value);
          })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setCurrent(page_r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
        }
      }

      function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
        }
      }

      function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
        }
      }

      function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.next();
          })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
        }
      }

      function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
        }
      }

      function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
        }
      }

      function PaginationControlsComponent_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.screenReaderPaginationLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
        }
      }

      var PaginationService =
      /** @class */
      function () {
        function PaginationService() {
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.instances = {};
          this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
        }

        PaginationService.prototype.defaultId = function () {
          return this.DEFAULT_ID;
        };
        /**
         * Register a PaginationInstance with this service. Returns a
         * boolean value signifying whether the instance is new or
         * updated (true = new or updated, false = unchanged).
         */


        PaginationService.prototype.register = function (instance) {
          if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
          }

          if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
          } else {
            return this.updateInstance(instance);
          }
        };
        /**
         * Check each property of the instance and update any that have changed. Return
         * true if any changes were made, else return false.
         */


        PaginationService.prototype.updateInstance = function (instance) {
          var changed = false;

          for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
              this.instances[instance.id][prop] = instance[prop];
              changed = true;
            }
          }

          return changed;
        };
        /**
         * Returns the current page number.
         */


        PaginationService.prototype.getCurrentPage = function (id) {
          if (this.instances[id]) {
            return this.instances[id].currentPage;
          }
        };
        /**
         * Sets the current page number.
         */


        PaginationService.prototype.setCurrentPage = function (id, page) {
          if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

            if (page <= maxPage && 1 <= page) {
              this.instances[id].currentPage = page;
              this.change.emit(id);
            }
          }
        };
        /**
         * Sets the value of instance.totalItems
         */


        PaginationService.prototype.setTotalItems = function (id, totalItems) {
          if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
          }
        };
        /**
         * Sets the value of instance.itemsPerPage.
         */


        PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
          if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
          }
        };
        /**
         * Returns a clone of the pagination instance object matching the id. If no
         * id specified, returns the instance corresponding to the default id.
         */


        PaginationService.prototype.getInstance = function (id) {
          if (id === void 0) {
            id = this.DEFAULT_ID;
          }

          if (this.instances[id]) {
            return this.clone(this.instances[id]);
          }

          return {};
        };
        /**
         * Perform a shallow clone of an object.
         */


        PaginationService.prototype.clone = function (obj) {
          var target = {};

          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              target[i] = obj[i];
            }
          }

          return target;
        };

        PaginationService.ɵfac = function PaginationService_Factory(t) {
          return new (t || PaginationService)();
        };

        PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: PaginationService,
          factory: function factory(t) {
            return PaginationService.ɵfac(t);
          }
        });
        return PaginationService;
      }();

      var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

      var PaginatePipe =
      /** @class */
      function () {
        function PaginatePipe(service) {
          this.service = service; // store the values from the last time the pipe was invoked

          this.state = {};
        }

        PaginatePipe.prototype.transform = function (collection, args) {
          // When an observable is passed through the AsyncPipe, it will output
          // `null` until the subscription resolves. In this case, we want to
          // use the cached data from the `state` object to prevent the NgFor
          // from flashing empty until the real values arrive.
          if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();

            if (this.state[_id]) {
              return this.state[_id].slice;
            } else {
              return collection;
            }
          }

          var serverSideMode = args.totalItems && args.totalItems !== collection.length;
          var instance = this.createInstance(collection, args);
          var id = instance.id;
          var start, end;
          var perPage = instance.itemsPerPage;
          var emitChange = this.service.register(instance);

          if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);

            if (isIdentical) {
              return this.state[id].slice;
            } else {
              var slice = collection.slice(start, end);
              this.saveState(id, collection, slice, start, end);
              this.service.change.emit(id);
              return slice;
            }
          } else {
            if (emitChange) {
              this.service.change.emit(id);
            } // save the state for server-side collection to avoid null
            // flash as new data loads.


            this.saveState(id, collection, collection, start, end);
            return collection;
          }
        };
        /**
         * Create an PaginationInstance object, using defaults for any optional properties not supplied.
         */


        PaginatePipe.prototype.createInstance = function (collection, config) {
          this.checkConfig(config);
          return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
          };
        };
        /**
         * Ensure the argument passed to the filter contains the required properties.
         */


        PaginatePipe.prototype.checkConfig = function (config) {
          var required = ['itemsPerPage', 'currentPage'];
          var missing = required.filter(function (prop) {
            return !(prop in config);
          });

          if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
          }
        };
        /**
         * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
         * array for a given id. This means that the next time the pipe is run on this collection & id, we just
         * need to check that the collection, start and end points are all identical, and if so, return the
         * last sliced array.
         */


        PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
          this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
          };
        };
        /**
         * For a given id, returns true if the collection, size, start and end values are identical.
         */


        PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
          var state = this.state[id];

          if (!state) {
            return false;
          }

          var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

          if (!isMetaDataIdentical) {
            return false;
          }

          return state.slice.every(function (element, index) {
            return element === collection[start + index];
          });
        };

        PaginatePipe = __decorate$1([__metadata("design:paramtypes", [PaginationService])], PaginatePipe);

        PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
          return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService));
        };

        PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
          name: "paginate",
          type: PaginatePipe,
          pure: false
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
            args: [{
              name: 'paginate',
              pure: false
            }]
          }], function () {
            return [{
              type: PaginationService
            }];
          }, null);
        })();

        return PaginatePipe;
      }();
      /**
       * The default template and styles for the pagination links are borrowed directly
       * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
       */


      var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
      var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

      var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      function coerceToBoolean(input) {
        return !!input && input !== 'false';
      }
      /**
       * The default pagination controls component. Actually just a default implementation of a custom template.
       */


      var PaginationControlsComponent =
      /** @class */
      function () {
        function PaginationControlsComponent() {
          this.maxSize = 7;
          this.previousLabel = 'Previous';
          this.nextLabel = 'Next';
          this.screenReaderPaginationLabel = 'Pagination';
          this.screenReaderPageLabel = 'page';
          this.screenReaderCurrentLabel = "You're on page";
          this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._directionLinks = true;
          this._autoHide = false;
          this._responsive = false;
        }

        Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
          get: function get() {
            return this._directionLinks;
          },
          set: function set(value) {
            this._directionLinks = coerceToBoolean(value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
          get: function get() {
            return this._autoHide;
          },
          set: function set(value) {
            this._autoHide = coerceToBoolean(value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
          get: function get() {
            return this._responsive;
          },
          set: function set(value) {
            this._responsive = coerceToBoolean(value);
          },
          enumerable: true,
          configurable: true
        });

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

        __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);

        PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
          return new (t || PaginationControlsComponent)();
        };

        PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PaginationControlsComponent,
          selectors: [["pagination-controls"]],
          inputs: {
            maxSize: "maxSize",
            previousLabel: "previousLabel",
            nextLabel: "nextLabel",
            screenReaderPaginationLabel: "screenReaderPaginationLabel",
            screenReaderPageLabel: "screenReaderPageLabel",
            screenReaderCurrentLabel: "screenReaderCurrentLabel",
            directionLinks: "directionLinks",
            autoHide: "autoHide",
            responsive: "responsive",
            id: "id"
          },
          outputs: {
            pageChange: "pageChange",
            pageBoundsCorrection: "pageBoundsCorrection"
          },
          decls: 3,
          vars: 3,
          consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]],
          template: function PaginationControlsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
                return ctx.pageChange.emit($event);
              })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
                return ctx.pageBoundsCorrection.emit($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
            }
          },
          directives: function directives() {
            return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]];
          },
          pipes: function pipes() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]];
          },
          styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
          encapsulation: 2,
          changeDetection: 0
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: 'pagination-controls',
              template: DEFAULT_TEMPLATE,
              styles: [DEFAULT_STYLES],
              changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
              encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
          }], function () {
            return [];
          }, {
            maxSize: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            previousLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            nextLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            screenReaderPaginationLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            screenReaderPageLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            screenReaderCurrentLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            pageChange: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }],
            pageBoundsCorrection: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }],
            directionLinks: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            autoHide: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            responsive: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            id: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          });
        })();

        return PaginationControlsComponent;
      }();

      var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * This directive is what powers all pagination controls components, including the default one.
       * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
       * with the pagination controls.
       */


      var PaginationControlsDirective =
      /** @class */
      function () {
        function PaginationControlsDirective(service, changeDetectorRef) {
          var _this = this;

          this.service = service;
          this.changeDetectorRef = changeDetectorRef;
          this.maxSize = 7;
          this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.pages = [];
          this.changeSub = this.service.change.subscribe(function (id) {
            if (_this.id === id) {
              _this.updatePageLinks();

              _this.changeDetectorRef.markForCheck();

              _this.changeDetectorRef.detectChanges();
            }
          });
        }

        PaginationControlsDirective.prototype.ngOnInit = function () {
          if (this.id === undefined) {
            this.id = this.service.defaultId();
          }

          this.updatePageLinks();
        };

        PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
          this.updatePageLinks();
        };

        PaginationControlsDirective.prototype.ngOnDestroy = function () {
          this.changeSub.unsubscribe();
        };
        /**
         * Go to the previous page
         */


        PaginationControlsDirective.prototype.previous = function () {
          this.checkValidId();
          this.setCurrent(this.getCurrent() - 1);
        };
        /**
         * Go to the next page
         */


        PaginationControlsDirective.prototype.next = function () {
          this.checkValidId();
          this.setCurrent(this.getCurrent() + 1);
        };
        /**
         * Returns true if current page is first page
         */


        PaginationControlsDirective.prototype.isFirstPage = function () {
          return this.getCurrent() === 1;
        };
        /**
         * Returns true if current page is last page
         */


        PaginationControlsDirective.prototype.isLastPage = function () {
          return this.getLastPage() === this.getCurrent();
        };
        /**
         * Set the current page number.
         */


        PaginationControlsDirective.prototype.setCurrent = function (page) {
          this.pageChange.emit(page);
        };
        /**
         * Get the current page number.
         */


        PaginationControlsDirective.prototype.getCurrent = function () {
          return this.service.getCurrentPage(this.id);
        };
        /**
         * Returns the last page number
         */


        PaginationControlsDirective.prototype.getLastPage = function () {
          var inst = this.service.getInstance(this.id);

          if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
          }

          return Math.ceil(inst.totalItems / inst.itemsPerPage);
        };

        PaginationControlsDirective.prototype.getTotalItems = function () {
          return this.service.getInstance(this.id).totalItems;
        };

        PaginationControlsDirective.prototype.checkValidId = function () {
          if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
          }
        };
        /**
         * Updates the page links and checks that the current page is valid. Should run whenever the
         * PaginationService.change stream emits a value matching the current ID, or when any of the
         * input values changes.
         */


        PaginationControlsDirective.prototype.updatePageLinks = function () {
          var _this = this;

          var inst = this.service.getInstance(this.id);
          var correctedCurrentPage = this.outOfBoundCorrection(inst);

          if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
              _this.pageBoundsCorrection.emit(correctedCurrentPage);

              _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
          } else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
          }
        };
        /**
         * Checks that the instance.currentPage property is within bounds for the current page range.
         * If not, return a correct value for currentPage, or the current value if OK.
         */


        PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
          var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
          } else if (instance.currentPage < 1) {
            return 1;
          }

          return instance.currentPage;
        };
        /**
         * Returns an array of Page objects to use in the pagination controls.
         */


        PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
          // paginationRange could be a string if passed from attribute, so cast to number.
          paginationRange = +paginationRange;
          var pages = [];
          var totalPages = Math.ceil(totalItems / itemsPerPage);
          var halfWay = Math.ceil(paginationRange / 2);
          var isStart = currentPage <= halfWay;
          var isEnd = totalPages - halfWay < currentPage;
          var isMiddle = !isStart && !isEnd;
          var ellipsesNeeded = paginationRange < totalPages;
          var i = 1;

          while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
            var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
              label = '...';
            } else {
              label = pageNumber;
            }

            pages.push({
              label: label,
              value: pageNumber
            });
            i++;
          }

          return pages;
        };
        /**
         * Given the position in the sequence of pagination links [i],
         * figure out what page number corresponds to that position.
         */


        PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
          var halfWay = Math.ceil(paginationRange / 2);

          if (i === paginationRange) {
            return totalPages;
          } else if (i === 1) {
            return i;
          } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
              return totalPages - paginationRange + i;
            } else if (halfWay < currentPage) {
              return currentPage - halfWay + i;
            } else {
              return i;
            }
          } else {
            return i;
          }
        };

        __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

        __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

        __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

        __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);

        PaginationControlsDirective = __decorate$3([__metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);

        PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
          return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: PaginationControlsDirective,
          selectors: [["pagination-template"], ["", "pagination-template", ""]],
          inputs: {
            maxSize: "maxSize",
            id: "id"
          },
          outputs: {
            pageChange: "pageChange",
            pageBoundsCorrection: "pageBoundsCorrection"
          },
          exportAs: ["paginationApi"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
            args: [{
              selector: 'pagination-template,[pagination-template]',
              exportAs: 'paginationApi'
            }]
          }], function () {
            return [{
              type: PaginationService
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
            }];
          }, {
            maxSize: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            pageChange: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }],
            pageBoundsCorrection: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }],
            id: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          });
        })();

        return PaginationControlsDirective;
      }();

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var NgxPaginationModule =
      /** @class */
      function () {
        function NgxPaginationModule() {}

        NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: NgxPaginationModule
        });
        NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function NgxPaginationModule_Factory(t) {
            return new (t || NgxPaginationModule)();
          },
          providers: [PaginationService],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, {
            declarations: function declarations() {
              return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
            },
            imports: function imports() {
              return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
            },
            exports: function exports() {
              return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
            }
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
              declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
              providers: [PaginationService],
              exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return NgxPaginationModule;
      }();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FLTztBQUNQOzs7Ozs7Ozs7MkVBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFLTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBWTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBQaXBlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxudmFyIFBhZ2luYXRpb25TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICB0aGlzLkRFRkFVTFRfSUQgPSAnREVGQVVMVF9QQUdJTkFUSU9OX0lEJztcclxuICAgIH1cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5kZWZhdWx0SWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLkRFRkFVTFRfSUQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgUGFnaW5hdGlvbkluc3RhbmNlIHdpdGggdGhpcyBzZXJ2aWNlLiBSZXR1cm5zIGFcclxuICAgICAqIGJvb2xlYW4gdmFsdWUgc2lnbmlmeWluZyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBpcyBuZXcgb3JcclxuICAgICAqIHVwZGF0ZWQgKHRydWUgPSBuZXcgb3IgdXBkYXRlZCwgZmFsc2UgPSB1bmNoYW5nZWQpLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5pZCA9IHRoaXMuREVGQVVMVF9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGVhY2ggcHJvcGVydHkgb2YgdGhlIGluc3RhbmNlIGFuZCB1cGRhdGUgYW55IHRoYXQgaGF2ZSBjaGFuZ2VkLiBSZXR1cm5cclxuICAgICAqIHRydWUgaWYgYW55IGNoYW5nZXMgd2VyZSBtYWRlLCBlbHNlIHJldHVybiBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSkge1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJvcF0gIT09IHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXVtwcm9wXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdW3Byb3BdID0gaW5zdGFuY2VbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2lkXS5jdXJyZW50UGFnZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoaWQsIHBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2lkXTtcclxuICAgICAgICAgICAgdmFyIG1heFBhZ2UgPSBNYXRoLmNlaWwoaW5zdGFuY2UudG90YWxJdGVtcyAvIGluc3RhbmNlLml0ZW1zUGVyUGFnZSk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlIDw9IG1heFBhZ2UgJiYgMSA8PSBwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0uY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBpbnN0YW5jZS50b3RhbEl0ZW1zXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKGlkLCB0b3RhbEl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSAmJiAwIDw9IHRvdGFsSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLnRvdGFsSXRlbXMgPSB0b3RhbEl0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBpbnN0YW5jZS5pdGVtc1BlclBhZ2UuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRJdGVtc1BlclBhZ2UgPSBmdW5jdGlvbiAoaWQsIGl0ZW1zUGVyUGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoZSBwYWdpbmF0aW9uIGluc3RhbmNlIG9iamVjdCBtYXRjaGluZyB0aGUgaWQuIElmIG5vXHJcbiAgICAgKiBpZCBzcGVjaWZpZWQsIHJldHVybnMgdGhlIGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRlZmF1bHQgaWQuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gdGhpcy5ERUZBVUxUX0lEOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSh0aGlzLmluc3RhbmNlc1tpZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgc2hhbGxvdyBjbG9uZSBvZiBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25TZXJ2aWNlO1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBMQVJHRV9OVU1CRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxudmFyIFBhZ2luYXRlUGlwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRlUGlwZShzZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICAvLyBzdG9yZSB0aGUgdmFsdWVzIGZyb20gdGhlIGxhc3QgdGltZSB0aGUgcGlwZSB3YXMgaW52b2tlZFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGFyZ3MpIHtcclxuICAgICAgICAvLyBXaGVuIGFuIG9ic2VydmFibGUgaXMgcGFzc2VkIHRocm91Z2ggdGhlIEFzeW5jUGlwZSwgaXQgd2lsbCBvdXRwdXRcclxuICAgICAgICAvLyBgbnVsbGAgdW50aWwgdGhlIHN1YnNjcmlwdGlvbiByZXNvbHZlcy4gSW4gdGhpcyBjYXNlLCB3ZSB3YW50IHRvXHJcbiAgICAgICAgLy8gdXNlIHRoZSBjYWNoZWQgZGF0YSBmcm9tIHRoZSBgc3RhdGVgIG9iamVjdCB0byBwcmV2ZW50IHRoZSBOZ0ZvclxyXG4gICAgICAgIC8vIGZyb20gZmxhc2hpbmcgZW1wdHkgdW50aWwgdGhlIHJlYWwgdmFsdWVzIGFycml2ZS5cclxuICAgICAgICBpZiAoIShjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSBhcmdzLmlkIHx8IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbX2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbX2lkXS5zbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXJ2ZXJTaWRlTW9kZSA9IGFyZ3MudG90YWxJdGVtcyAmJiBhcmdzLnRvdGFsSXRlbXMgIT09IGNvbGxlY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY29sbGVjdGlvbiwgYXJncyk7XHJcbiAgICAgICAgdmFyIGlkID0gaW5zdGFuY2UuaWQ7XHJcbiAgICAgICAgdmFyIHN0YXJ0LCBlbmQ7XHJcbiAgICAgICAgdmFyIHBlclBhZ2UgPSBpbnN0YW5jZS5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdmFyIGVtaXRDaGFuZ2UgPSB0aGlzLnNlcnZpY2UucmVnaXN0ZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIGlmICghc2VydmVyU2lkZU1vZGUgJiYgY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHBlclBhZ2UgPSArcGVyUGFnZSB8fCBMQVJHRV9OVU1CRVI7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gKGluc3RhbmNlLmN1cnJlbnRQYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIHBlclBhZ2U7XHJcbiAgICAgICAgICAgIHZhciBpc0lkZW50aWNhbCA9IHRoaXMuc3RhdGVJc0lkZW50aWNhbChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIGlmIChpc0lkZW50aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbaWRdLnNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWNlID0gY29sbGVjdGlvbi5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZW1pdENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBzdGF0ZSBmb3Igc2VydmVyLXNpZGUgY29sbGVjdGlvbiB0byBhdm9pZCBudWxsXHJcbiAgICAgICAgICAgIC8vIGZsYXNoIGFzIG5ldyBkYXRhIGxvYWRzLlxyXG4gICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBQYWdpbmF0aW9uSW5zdGFuY2Ugb2JqZWN0LCB1c2luZyBkZWZhdWx0cyBmb3IgYW55IG9wdGlvbmFsIHByb3BlcnRpZXMgbm90IHN1cHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb25maWcoY29uZmlnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY29uZmlnLmlkICE9IG51bGwgPyBjb25maWcuaWQgOiB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCksXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogK2NvbmZpZy5pdGVtc1BlclBhZ2UgfHwgMCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICtjb25maWcuY3VycmVudFBhZ2UgfHwgMSxcclxuICAgICAgICAgICAgdG90YWxJdGVtczogK2NvbmZpZy50b3RhbEl0ZW1zIHx8IGNvbGxlY3Rpb24ubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBmaWx0ZXIgY29udGFpbnMgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuY2hlY2tDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHJlcXVpcmVkID0gWydpdGVtc1BlclBhZ2UnLCAnY3VycmVudFBhZ2UnXTtcclxuICAgICAgICB2YXIgbWlzc2luZyA9IHJlcXVpcmVkLmZpbHRlcihmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gIShwcm9wIGluIGNvbmZpZyk7IH0pO1xyXG4gICAgICAgIGlmICgwIDwgbWlzc2luZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFnaW5hdGVQaXBlOiBBcmd1bWVudCBpcyBtaXNzaW5nIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgcHJvcGVydGllczogXCIgKyBtaXNzaW5nLmpvaW4oJywgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRvIGF2b2lkIHJldHVybmluZyBhIGJyYW5kIG5ldyBhcnJheSBlYWNoIHRpbWUgdGhlIHBpcGUgaXMgcnVuLCB3ZSBzdG9yZSB0aGUgc3RhdGUgb2YgdGhlIHNsaWNlZFxyXG4gICAgICogYXJyYXkgZm9yIGEgZ2l2ZW4gaWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgbmV4dCB0aW1lIHRoZSBwaXBlIGlzIHJ1biBvbiB0aGlzIGNvbGxlY3Rpb24gJiBpZCwgd2UganVzdFxyXG4gICAgICogbmVlZCB0byBjaGVjayB0aGF0IHRoZSBjb2xsZWN0aW9uLCBzdGFydCBhbmQgZW5kIHBvaW50cyBhcmUgYWxsIGlkZW50aWNhbCwgYW5kIGlmIHNvLCByZXR1cm4gdGhlXHJcbiAgICAgKiBsYXN0IHNsaWNlZCBhcnJheS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoaWQsIGNvbGxlY3Rpb24sIHNsaWNlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVtpZF0gPSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXHJcbiAgICAgICAgICAgIHNpemU6IGNvbGxlY3Rpb24ubGVuZ3RoLFxyXG4gICAgICAgICAgICBzbGljZTogc2xpY2UsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBlbmRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGEgZ2l2ZW4gaWQsIHJldHVybnMgdHJ1ZSBpZiB0aGUgY29sbGVjdGlvbiwgc2l6ZSwgc3RhcnQgYW5kIGVuZCB2YWx1ZXMgYXJlIGlkZW50aWNhbC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5zdGF0ZUlzSWRlbnRpY2FsID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZVtpZF07XHJcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc01ldGFEYXRhSWRlbnRpY2FsID0gc3RhdGUuc2l6ZSA9PT0gY29sbGVjdGlvbi5sZW5ndGggJiZcclxuICAgICAgICAgICAgc3RhdGUuc3RhcnQgPT09IHN0YXJ0ICYmXHJcbiAgICAgICAgICAgIHN0YXRlLmVuZCA9PT0gZW5kO1xyXG4gICAgICAgIGlmICghaXNNZXRhRGF0YUlkZW50aWNhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zbGljZS5ldmVyeShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHsgcmV0dXJuIGVsZW1lbnQgPT09IGNvbGxlY3Rpb25bc3RhcnQgKyBpbmRleF07IH0pO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRlUGlwZSA9IF9fZGVjb3JhdGUkMShbXHJcbiAgICAgICAgUGlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0ZScsXHJcbiAgICAgICAgICAgIHB1cmU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZV0pXHJcbiAgICBdLCBQYWdpbmF0ZVBpcGUpO1xyXG4gICAgcmV0dXJuIFBhZ2luYXRlUGlwZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIGFuZCBzdHlsZXMgZm9yIHRoZSBwYWdpbmF0aW9uIGxpbmtzIGFyZSBib3Jyb3dlZCBkaXJlY3RseVxyXG4gKiBmcm9tIFp1cmIgRm91bmRhdGlvbiA2OiBodHRwOi8vZm91bmRhdGlvbi56dXJiLmNvbS9zaXRlcy9kb2NzL3BhZ2luYXRpb24uaHRtbFxyXG4gKi9cclxudmFyIERFRkFVTFRfVEVNUExBVEUgPSBcIlxcbiAgICA8cGFnaW5hdGlvbi10ZW1wbGF0ZSAgI3A9XFxcInBhZ2luYXRpb25BcGlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XFxcImlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4U2l6ZV09XFxcIm1heFNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlQ2hhbmdlKT1cXFwicGFnZUNoYW5nZS5lbWl0KCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlQm91bmRzQ29ycmVjdGlvbik9XFxcInBhZ2VCb3VuZHNDb3JyZWN0aW9uLmVtaXQoJGV2ZW50KVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmd4LXBhZ2luYXRpb25cXFwiIFxcbiAgICAgICAgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgXFxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cXFwic2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsXFxcIiBcXG4gICAgICAgIFtjbGFzcy5yZXNwb25zaXZlXT1cXFwicmVzcG9uc2l2ZVxcXCJcXG4gICAgICAgICpuZ0lmPVxcXCIhKGF1dG9IaWRlICYmIHAucGFnZXMubGVuZ3RoIDw9IDEpXFxcIj5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCIgW2NsYXNzLmRpc2FibGVkXT1cXFwicC5pc0ZpcnN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPiBcXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIjEgPCBwLmdldEN1cnJlbnQoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5wcmV2aW91cygpXFxcIiAoY2xpY2spPVxcXCJwLnByZXZpb3VzKClcXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJwcmV2aW91c0xhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9saT4gXFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInNtYWxsLXNjcmVlblxcXCI+XFxuICAgICAgICAgICAge3sgcC5nZXRDdXJyZW50KCkgfX0gLyB7eyBwLmdldExhc3RQYWdlKCkgfX1cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgICAgICA8bGkgW2NsYXNzLmN1cnJlbnRdPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCIgXFxuICAgICAgICAgICAgW2NsYXNzLmVsbGlwc2lzXT1cXFwicGFnZS5sYWJlbCA9PT0gJy4uLidcXFwiXFxuICAgICAgICAgICAgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwLnBhZ2VzXFxcIj5cXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5zZXRDdXJyZW50KHBhZ2UudmFsdWUpXFxcIiAoY2xpY2spPVxcXCJwLnNldEN1cnJlbnQocGFnZS52YWx1ZSlcXFwiICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSAhPT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBhZ2UubGFiZWwgPT09ICcuLi4nKSA/IHBhZ2UubGFiZWwgOiAocGFnZS5sYWJlbCB8IG51bWJlcjonJykgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XFxcInAuZ2V0Q3VycmVudCgpID09PSBwYWdlLnZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwgfX0gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyAocGFnZS5sYWJlbCA9PT0gJy4uLicpID8gcGFnZS5sYWJlbCA6IChwYWdlLmxhYmVsIHwgbnVtYmVyOicnKSB9fTwvc3Bhbj4gXFxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW5leHRcXFwiIFtjbGFzcy5kaXNhYmxlZF09XFxcInAuaXNMYXN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPlxcbiAgICAgICAgICAgIDxhIHRhYmluZGV4PVxcXCIwXFxcIiAqbmdJZj1cXFwiIXAuaXNMYXN0UGFnZSgpXFxcIiAoa2V5dXAuZW50ZXIpPVxcXCJwLm5leHQoKVxcXCIgKGNsaWNrKT1cXFwicC5uZXh0KClcXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJuZXh0TGFiZWwgKyAnICcgKyBzY3JlZW5SZWFkZXJQYWdlTGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAge3sgbmV4dExhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwicC5pc0xhc3RQYWdlKClcXFwiPlxcbiAgICAgICAgICAgICAgICAge3sgbmV4dExhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgIDwvdWw+XFxuICAgIDwvcGFnaW5hdGlvbi10ZW1wbGF0ZT5cXG4gICAgXCI7XHJcbnZhciBERUZBVUxUX1NUWUxFUyA9IFwiXFxuLm5neC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjpiZWZvcmUsIC5uZ3gtcGFnaW5hdGlvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGRpc3BsYXk6IHRhYmxlOyB9XFxuICAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjA2MjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGEsXFxuICAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcXG4gICAgY29sb3I6ICMwYTBhMGE7IFxcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgIC5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLFxcbiAgICAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICMyMTk5ZTg7XFxuICAgIGNvbG9yOiAjZmVmZWZlO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XFxuICAgIGNvbG9yOiAjY2FjYWNhO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH0gXFxuICAgIC5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQ6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUsXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUgeyBcXG4gIGNvbnRlbnQ6ICdcXHUwMEFCJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIsXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXHUwMEJCJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnNob3ctZm9yLXNyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7IH1cXG4ubmd4LXBhZ2luYXRpb24gLnNtYWxsLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAxcHgpIHtcXG4gIC5uZ3gtcGFnaW5hdGlvbi5yZXNwb25zaXZlIC5zbWFsbC1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH0gXFxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSBsaTpub3QoLnNtYWxsLXNjcmVlbik6bm90KC5wYWdpbmF0aW9uLXByZXZpb3VzKTpub3QoLnBhZ2luYXRpb24tbmV4dCkge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxufVxcbiAgXCI7XG5cbnZhciBfX2RlY29yYXRlJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5mdW5jdGlvbiBjb2VyY2VUb0Jvb2xlYW4oaW5wdXQpIHtcclxuICAgIHJldHVybiAhIWlucHV0ICYmIGlucHV0ICE9PSAnZmFsc2UnO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBwYWdpbmF0aW9uIGNvbnRyb2xzIGNvbXBvbmVudC4gQWN0dWFsbHkganVzdCBhIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYSBjdXN0b20gdGVtcGxhdGUuXHJcbiAqL1xyXG52YXIgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xhYmVsID0gJ1ByZXZpb3VzJztcclxuICAgICAgICB0aGlzLm5leHRMYWJlbCA9ICdOZXh0JztcclxuICAgICAgICB0aGlzLnNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbCA9ICdQYWdpbmF0aW9uJztcclxuICAgICAgICB0aGlzLnNjcmVlblJlYWRlclBhZ2VMYWJlbCA9ICdwYWdlJztcclxuICAgICAgICB0aGlzLnNjcmVlblJlYWRlckN1cnJlbnRMYWJlbCA9IFwiWW91J3JlIG9uIHBhZ2VcIjtcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYXV0b0hpZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXNwb25zaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXJlY3Rpb25MaW5rc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb25MaW5rcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbkxpbmtzID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImF1dG9IaWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9IaWRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXV0b0hpZGUgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicmVzcG9uc2l2ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zaXZlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZSA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwibWF4U2l6ZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uTGlua3NcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvSGlkZVwiLCBudWxsKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInJlc3BvbnNpdmVcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwcmV2aW91c0xhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJuZXh0TGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyUGFnZUxhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJDdXJyZW50TGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwYWdlQ2hhbmdlXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicGFnZUJvdW5kc0NvcnJlY3Rpb25cIiwgdm9pZCAwKTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwYWdpbmF0aW9uLWNvbnRyb2xzJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IERFRkFVTFRfVEVNUExBVEUsXHJcbiAgICAgICAgICAgIHN0eWxlczogW0RFRkFVTFRfU1RZTEVTXSxcclxuICAgICAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICAgICAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxuICAgICAgICB9KVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQ7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlJDMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgaXMgd2hhdCBwb3dlcnMgYWxsIHBhZ2luYXRpb24gY29udHJvbHMgY29tcG9uZW50cywgaW5jbHVkaW5nIHRoZSBkZWZhdWx0IG9uZS5cclxuICogSXQgZXhwb3NlcyBhbiBBUEkgd2hpY2ggaXMgaG9va2VkIHVwIHRvIHRoZSBQYWdpbmF0aW9uU2VydmljZSB0byBrZWVwIHRoZSBQYWdpbmF0ZVBpcGUgaW4gc3luY1xyXG4gKiB3aXRoIHRoZSBwYWdpbmF0aW9uIGNvbnRyb2xzLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZShzZXJ2aWNlLCBjaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmID0gY2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gNztcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIgPSB0aGlzLnNlcnZpY2UuY2hhbmdlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrVmFsaWRJZCgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmdldEN1cnJlbnQoKSAtIDEpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR28gdG8gdGhlIG5leHQgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgKyAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBjdXJyZW50IHBhZ2UgaXMgZmlyc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzRmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnQoKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBjdXJyZW50IHBhZ2UgaXMgbGFzdCBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuaXNMYXN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0UGFnZSgpID09PSB0aGlzLmdldEN1cnJlbnQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5zZXRDdXJyZW50ID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0Q3VycmVudFBhZ2UodGhpcy5pZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IHBhZ2UgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0TGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgaWYgKGluc3QudG90YWxJdGVtcyA8IDEpIHtcclxuICAgICAgICAgICAgLy8gd2hlbiB0aGVyZSBhcmUgMCBvciBmZXdlciAoYW4gZXJyb3IgY2FzZSkgaXRlbXMsIHRoZXJlIGFyZSBubyBcInBhZ2VzXCIgYXMgc3VjaCxcclxuICAgICAgICAgICAgLy8gYnV0IGl0IG1ha2VzIHNlbnNlIHRvIGNvbnNpZGVyIGEgc2luZ2xlLCBlbXB0eSBwYWdlIGFzIHRoZSBsYXN0IHBhZ2UuXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKGluc3QudG90YWxJdGVtcyAvIGluc3QuaXRlbXNQZXJQYWdlKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldFRvdGFsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRJbnN0YW5jZSh0aGlzLmlkKS50b3RhbEl0ZW1zO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuY2hlY2tWYWxpZElkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkuaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmU6IHRoZSBzcGVjaWZpZWQgaWQgXFxcIlwiICsgdGhpcy5pZCArIFwiXFxcIiBkb2VzIG5vdCBtYXRjaCBhbnkgcmVnaXN0ZXJlZCBQYWdpbmF0aW9uSW5zdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgcGFnZSBsaW5rcyBhbmQgY2hlY2tzIHRoYXQgdGhlIGN1cnJlbnQgcGFnZSBpcyB2YWxpZC4gU2hvdWxkIHJ1biB3aGVuZXZlciB0aGVcclxuICAgICAqIFBhZ2luYXRpb25TZXJ2aWNlLmNoYW5nZSBzdHJlYW0gZW1pdHMgYSB2YWx1ZSBtYXRjaGluZyB0aGUgY3VycmVudCBJRCwgb3Igd2hlbiBhbnkgb2YgdGhlXHJcbiAgICAgKiBpbnB1dCB2YWx1ZXMgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS51cGRhdGVQYWdlTGlua3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuc2VydmljZS5nZXRJbnN0YW5jZSh0aGlzLmlkKTtcclxuICAgICAgICB2YXIgY29ycmVjdGVkQ3VycmVudFBhZ2UgPSB0aGlzLm91dE9mQm91bmRDb3JyZWN0aW9uKGluc3QpO1xyXG4gICAgICAgIGlmIChjb3JyZWN0ZWRDdXJyZW50UGFnZSAhPT0gaW5zdC5jdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VCb3VuZHNDb3JyZWN0aW9uLmVtaXQoY29ycmVjdGVkQ3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZXMgPSBfdGhpcy5jcmVhdGVQYWdlQXJyYXkoaW5zdC5jdXJyZW50UGFnZSwgaW5zdC5pdGVtc1BlclBhZ2UsIGluc3QudG90YWxJdGVtcywgX3RoaXMubWF4U2l6ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcyA9IHRoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIHRoaXMubWF4U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRoYXQgdGhlIGluc3RhbmNlLmN1cnJlbnRQYWdlIHByb3BlcnR5IGlzIHdpdGhpbiBib3VuZHMgZm9yIHRoZSBjdXJyZW50IHBhZ2UgcmFuZ2UuXHJcbiAgICAgKiBJZiBub3QsIHJldHVybiBhIGNvcnJlY3QgdmFsdWUgZm9yIGN1cnJlbnRQYWdlLCBvciB0aGUgY3VycmVudCB2YWx1ZSBpZiBPSy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5vdXRPZkJvdW5kQ29ycmVjdGlvbiA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGluc3RhbmNlLnRvdGFsSXRlbXMgLyBpbnN0YW5jZS5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzIDwgaW5zdGFuY2UuY3VycmVudFBhZ2UgJiYgMCA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGluc3RhbmNlLmN1cnJlbnRQYWdlIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmN1cnJlbnRQYWdlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBQYWdlIG9iamVjdHMgdG8gdXNlIGluIHRoZSBwYWdpbmF0aW9uIGNvbnRyb2xzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNyZWF0ZVBhZ2VBcnJheSA9IGZ1bmN0aW9uIChjdXJyZW50UGFnZSwgaXRlbXNQZXJQYWdlLCB0b3RhbEl0ZW1zLCBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAvLyBwYWdpbmF0aW9uUmFuZ2UgY291bGQgYmUgYSBzdHJpbmcgaWYgcGFzc2VkIGZyb20gYXR0cmlidXRlLCBzbyBjYXN0IHRvIG51bWJlci5cclxuICAgICAgICBwYWdpbmF0aW9uUmFuZ2UgPSArcGFnaW5hdGlvblJhbmdlO1xyXG4gICAgICAgIHZhciBwYWdlcyA9IFtdO1xyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIHZhciBpc1N0YXJ0ID0gY3VycmVudFBhZ2UgPD0gaGFsZldheTtcclxuICAgICAgICB2YXIgaXNFbmQgPSB0b3RhbFBhZ2VzIC0gaGFsZldheSA8IGN1cnJlbnRQYWdlO1xyXG4gICAgICAgIHZhciBpc01pZGRsZSA9ICFpc1N0YXJ0ICYmICFpc0VuZDtcclxuICAgICAgICB2YXIgZWxsaXBzZXNOZWVkZWQgPSBwYWdpbmF0aW9uUmFuZ2UgPCB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIHZhciBpID0gMTtcclxuICAgICAgICB3aGlsZSAoaSA8PSB0b3RhbFBhZ2VzICYmIGkgPD0gcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgdmFyIHBhZ2VOdW1iZXIgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcyk7XHJcbiAgICAgICAgICAgIHZhciBvcGVuaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gMiAmJiAoaXNNaWRkbGUgfHwgaXNFbmQpKTtcclxuICAgICAgICAgICAgdmFyIGNsb3NpbmdFbGxpcHNlc05lZWRlZCA9IChpID09PSBwYWdpbmF0aW9uUmFuZ2UgLSAxICYmIChpc01pZGRsZSB8fCBpc1N0YXJ0KSk7XHJcbiAgICAgICAgICAgIGlmIChlbGxpcHNlc05lZWRlZCAmJiAob3BlbmluZ0VsbGlwc2VzTmVlZGVkIHx8IGNsb3NpbmdFbGxpcHNlc05lZWRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFnZU51bWJlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFnZXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiB0aGUgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlIG9mIHBhZ2luYXRpb24gbGlua3MgW2ldLFxyXG4gICAgICogZmlndXJlIG91dCB3aGF0IHBhZ2UgbnVtYmVyIGNvcnJlc3BvbmRzIHRvIHRoYXQgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuY2FsY3VsYXRlUGFnZU51bWJlciA9IGZ1bmN0aW9uIChpLCBjdXJyZW50UGFnZSwgcGFnaW5hdGlvblJhbmdlLCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgdmFyIGhhbGZXYXkgPSBNYXRoLmNlaWwocGFnaW5hdGlvblJhbmdlIC8gMik7XHJcbiAgICAgICAgaWYgKGkgPT09IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQYWdlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXMgLSBwYWdpbmF0aW9uUmFuZ2UgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYWdlIC0gaGFsZldheSArIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJtYXhTaXplXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGFnZUNoYW5nZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhZ2VCb3VuZHNDb3JyZWN0aW9uXCIsIHZvaWQgMCk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUgPSBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIERpcmVjdGl2ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFnaW5hdGlvbi10ZW1wbGF0ZSxbcGFnaW5hdGlvbi10ZW1wbGF0ZV0nLFxyXG4gICAgICAgICAgICBleHBvcnRBczogJ3BhZ2luYXRpb25BcGknXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1BhZ2luYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICBDaGFuZ2VEZXRlY3RvclJlZl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUpO1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZTtcclxufSgpKTtcblxudmFyIF9fZGVjb3JhdGUgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBOZ3hQYWdpbmF0aW9uTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmd4UGFnaW5hdGlvbk1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBOZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRlUGlwZSxcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtQYWdpbmF0aW9uU2VydmljZV0sXHJcbiAgICAgICAgICAgIGV4cG9ydHM6IFtQYWdpbmF0ZVBpcGUsIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlXVxyXG4gICAgICAgIH0pXHJcbiAgICBdLCBOZ3hQYWdpbmF0aW9uTW9kdWxlKTtcclxuICAgIHJldHVybiBOZ3hQYWdpbmF0aW9uTW9kdWxlO1xyXG59KCkpO1xuXG4vKipcclxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXHJcbiAqL1xuXG5leHBvcnQgeyBERUZBVUxUX1NUWUxFUyBhcyDJtWIsIERFRkFVTFRfVEVNUExBVEUgYXMgybVhLCBOZ3hQYWdpbmF0aW9uTW9kdWxlLCBQYWdpbmF0aW9uU2VydmljZSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUsIFBhZ2luYXRlUGlwZSB9O1xuIl19

      /***/

    },

    /***/
    "p3Ld":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/concat.js ***!
      \**************************************************************************************************/

    /*! exports provided: concat */

    /***/
    function p3Ld(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concat", function () {
        return concat;
      });
      /* harmony import */


      var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./of */
      "Zu/Y");
      /* harmony import */


      var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../operators/concatAll */
      "1Y+u");

      function concat() {
        return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(Object(_of__WEBPACK_IMPORTED_MODULE_0__["of"]).apply(void 0, arguments));
      } //# sourceMappingURL=concat.js.map

      /***/

    },

    /***/
    "r/PG":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
      \***********************************************************************************************/

    /*! exports provided: isNumeric */

    /***/
    function rPG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumeric", function () {
        return isNumeric;
      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      "n7Bv");

      function isNumeric(val) {
        return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && val - parseFloat(val) + 1 >= 0;
      } //# sourceMappingURL=isNumeric.js.map

      /***/

    },

    /***/
    "rxoO":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js ***!
      \************************************************************************************************/

    /*! exports provided: OuterSubscriber */

    /***/
    function rxoO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function () {
        return OuterSubscriber;
      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subscriber */
      "8yGl");

      var OuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_14) {
        _inherits(OuterSubscriber, _Subscriber__WEBPACK_14);

        var _super35 = _createSuper(OuterSubscriber);

        function OuterSubscriber() {
          _classCallCheck(this, OuterSubscriber);

          return _super35.apply(this, arguments);
        }

        _createClass(OuterSubscriber, [{
          key: "notifyNext",
          value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
          }
        }, {
          key: "notifyError",
          value: function notifyError(error, innerSub) {
            this.destination.error(error);
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete(innerSub) {
            this.destination.complete();
          }
        }]);

        return OuterSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=OuterSubscriber.js.map

      /***/

    },

    /***/
    "s9jB":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
      \********************************************************************************************************/

    /*! exports provided: AsapScheduler */

    /***/
    function s9jB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsapScheduler", function () {
        return AsapScheduler;
      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      "1luJ");

      var AsapScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP3) {
        _inherits(AsapScheduler, _AsyncScheduler__WEBP3);

        var _super36 = _createSuper(AsapScheduler);

        function AsapScheduler() {
          _classCallCheck(this, AsapScheduler);

          return _super36.apply(this, arguments);
        }

        _createClass(AsapScheduler, [{
          key: "flush",
          value: function flush(action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (++index < count && (action = actions.shift()));

            this.active = false;

            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return AsapScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=AsapScheduler.js.map

      /***/

    },

    /***/
    "szfW":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: ConnectableObservable, connectableObservableDescriptor */

    /***/
    function szfW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function () {
        return ConnectableObservable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function () {
        return connectableObservableDescriptor;
      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subject */
      "8Az0");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Subscriber */
      "8yGl");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");
      /* harmony import */


      var _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../operators/refCount */
      "OyF4");

      var ConnectableObservable = /*#__PURE__*/function (_Observable__WEBPACK_3) {
        _inherits(ConnectableObservable, _Observable__WEBPACK_3);

        var _super37 = _createSuper(ConnectableObservable);

        function ConnectableObservable(source, subjectFactory) {
          var _this58;

          _classCallCheck(this, ConnectableObservable);

          _this58 = _super37.call(this);
          _this58.source = source;
          _this58.subjectFactory = subjectFactory;
          _this58._refCount = 0;
          _this58._isComplete = false;
          return _this58;
        }

        _createClass(ConnectableObservable, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            return this.getSubject().subscribe(subscriber);
          }
        }, {
          key: "getSubject",
          value: function getSubject() {
            var subject = this._subject;

            if (!subject || subject.isStopped) {
              this._subject = this.subjectFactory();
            }

            return this._subject;
          }
        }, {
          key: "connect",
          value: function connect() {
            var connection = this._connection;

            if (!connection) {
              this._isComplete = false;
              connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
              connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

              if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
              }
            }

            return connection;
          }
        }, {
          key: "refCount",
          value: function refCount() {
            return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_4__["refCount"])()(this);
          }
        }]);

        return ConnectableObservable;
      }(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);

      var connectableObservableDescriptor = function () {
        var connectableProto = ConnectableObservable.prototype;
        return {
          operator: {
            value: null
          },
          _refCount: {
            value: 0,
            writable: true
          },
          _subject: {
            value: null,
            writable: true
          },
          _connection: {
            value: null,
            writable: true
          },
          _subscribe: {
            value: connectableProto._subscribe
          },
          _isComplete: {
            value: connectableProto._isComplete,
            writable: true
          },
          getSubject: {
            value: connectableProto.getSubject
          },
          connect: {
            value: connectableProto.connect
          },
          refCount: {
            value: connectableProto.refCount
          }
        };
      }();

      var ConnectableSubscriber = /*#__PURE__*/function (_Subject__WEBPACK_IMP2) {
        _inherits(ConnectableSubscriber, _Subject__WEBPACK_IMP2);

        var _super38 = _createSuper(ConnectableSubscriber);

        function ConnectableSubscriber(destination, connectable) {
          var _this59;

          _classCallCheck(this, ConnectableSubscriber);

          _this59 = _super38.call(this, destination);
          _this59.connectable = connectable;
          return _this59;
        }

        _createClass(ConnectableSubscriber, [{
          key: "_error",
          value: function _error(err) {
            this._unsubscribe();

            _get(_getPrototypeOf(ConnectableSubscriber.prototype), "_error", this).call(this, err);
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.connectable._isComplete = true;

            this._unsubscribe();

            _get(_getPrototypeOf(ConnectableSubscriber.prototype), "_complete", this).call(this);
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var connectable = this.connectable;

            if (connectable) {
              this.connectable = null;
              var connection = connectable._connection;
              connectable._refCount = 0;
              connectable._subject = null;
              connectable._connection = null;

              if (connection) {
                connection.unsubscribe();
              }
            }
          }
        }]);

        return ConnectableSubscriber;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscriber"]);

      var RefCountOperator = /*#__PURE__*/function () {
        function RefCountOperator(connectable) {
          _classCallCheck(this, RefCountOperator);

          this.connectable = connectable;
        }

        _createClass(RefCountOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);

            if (!refCounter.closed) {
              refCounter.connection = connectable.connect();
            }

            return subscription;
          }
        }]);

        return RefCountOperator;
      }();

      var RefCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_15) {
        _inherits(RefCountSubscriber, _Subscriber__WEBPACK_15);

        var _super39 = _createSuper(RefCountSubscriber);

        function RefCountSubscriber(destination, connectable) {
          var _this60;

          _classCallCheck(this, RefCountSubscriber);

          _this60 = _super39.call(this, destination);
          _this60.connectable = connectable;
          return _this60;
        }

        _createClass(RefCountSubscriber, [{
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var connectable = this.connectable;

            if (!connectable) {
              this.connection = null;
              return;
            }

            this.connectable = null;
            var refCount = connectable._refCount;

            if (refCount <= 0) {
              this.connection = null;
              return;
            }

            connectable._refCount = refCount - 1;

            if (refCount > 1) {
              this.connection = null;
              return;
            }

            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;

            if (sharedConnection && (!connection || sharedConnection === connection)) {
              sharedConnection.unsubscribe();
            }
          }
        }]);

        return RefCountSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]); //# sourceMappingURL=ConnectableObservable.js.map

      /***/

    },

    /***/
    "t8Ro":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/Observer.js ***!
      \*****************************************************************************************/

    /*! exports provided: empty */

    /***/
    function t8Ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "empty", function () {
        return empty;
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      "Mg+x");
      /* harmony import */


      var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/hostReportError */
      "F/EN");

      var empty = {
        closed: true,
        next: function next(value) {},
        error: function error(err) {
          if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
          }
        },
        complete: function complete() {}
      }; //# sourceMappingURL=Observer.js.map

      /***/
    },

    /***/
    "vIMJ":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
      \****************************************************************************************************/

    /*! exports provided: interval */

    /***/
    function vIMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interval", function () {
        return interval;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../scheduler/async */
      "NW67");
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isNumeric */
      "r/PG");

      function interval() {
        var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];

        if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
          period = 0;
        }

        if (!scheduler || typeof scheduler.schedule !== 'function') {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
          }));
          return subscriber;
        });
      }

      function dispatch(state) {
        var subscriber = state.subscriber,
            counter = state.counter,
            period = state.period;
        subscriber.next(counter);
        this.schedule({
          subscriber: subscriber,
          counter: counter + 1,
          period: period
        }, period);
      } //# sourceMappingURL=interval.js.map

      /***/

    },

    /***/
    "viS9":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
      \************************************************************************************************/

    /*! exports provided: BehaviorSubject */

    /***/
    function viS9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function () {
        return BehaviorSubject;
      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subject */
      "8Az0");
      /* harmony import */


      var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/ObjectUnsubscribedError */
      "+cgn");

      var BehaviorSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP3) {
        _inherits(BehaviorSubject, _Subject__WEBPACK_IMP3);

        var _super40 = _createSuper(BehaviorSubject);

        function BehaviorSubject(_value) {
          var _this61;

          _classCallCheck(this, BehaviorSubject);

          _this61 = _super40.call(this);
          _this61._value = _value;
          return _this61;
        }

        _createClass(BehaviorSubject, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var subscription = _get(_getPrototypeOf(BehaviorSubject.prototype), "_subscribe", this).call(this, subscriber);

            if (subscription && !subscription.closed) {
              subscriber.next(this._value);
            }

            return subscription;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            if (this.hasError) {
              throw this.thrownError;
            } else if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__["ObjectUnsubscribedError"]();
            } else {
              return this._value;
            }
          }
        }, {
          key: "next",
          value: function next(value) {
            _get(_getPrototypeOf(BehaviorSubject.prototype), "next", this).call(this, this._value = value);
          }
        }, {
          key: "value",
          get: function get() {
            return this.getValue();
          }
        }]);

        return BehaviorSubject;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]); //# sourceMappingURL=BehaviorSubject.js.map

      /***/

    },

    /***/
    "wdDJ":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/never.js ***!
      \*************************************************************************************************/

    /*! exports provided: NEVER, never */

    /***/
    function wdDJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NEVER", function () {
        return NEVER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "never", function () {
        return never;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/noop */
      "mEr4");

      var NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);

      function never() {
        return NEVER;
      } //# sourceMappingURL=never.js.map

      /***/

    },

    /***/
    "y7uT":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
      \*********************************************************************************************/

    /*! exports provided: AsyncSubject */

    /***/
    function y7uT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsyncSubject", function () {
        return AsyncSubject;
      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subject */
      "8Az0");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Subscription */
      "ZtUA");

      var AsyncSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP4) {
        _inherits(AsyncSubject, _Subject__WEBPACK_IMP4);

        var _super41 = _createSuper(AsyncSubject);

        function AsyncSubject() {
          var _this62;

          _classCallCheck(this, AsyncSubject);

          _this62 = _super41.apply(this, arguments);
          _this62.value = null;
          _this62.hasNext = false;
          _this62.hasCompleted = false;
          return _this62;
        }

        _createClass(AsyncSubject, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            if (this.hasError) {
              subscriber.error(this.thrownError);
              return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
            } else if (this.hasCompleted && this.hasNext) {
              subscriber.next(this.value);
              subscriber.complete();
              return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
            }

            return _get(_getPrototypeOf(AsyncSubject.prototype), "_subscribe", this).call(this, subscriber);
          }
        }, {
          key: "next",
          value: function next(value) {
            if (!this.hasCompleted) {
              this.value = value;
              this.hasNext = true;
            }
          }
        }, {
          key: "error",
          value: function error(_error2) {
            if (!this.hasCompleted) {
              _get(_getPrototypeOf(AsyncSubject.prototype), "error", this).call(this, _error2);
            }
          }
        }, {
          key: "complete",
          value: function complete() {
            this.hasCompleted = true;

            if (this.hasNext) {
              _get(_getPrototypeOf(AsyncSubject.prototype), "next", this).call(this, this.value);
            }

            _get(_getPrototypeOf(AsyncSubject.prototype), "complete", this).call(this);
          }
        }]);

        return AsyncSubject;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]); //# sourceMappingURL=AsyncSubject.js.map

      /***/

    },

    /***/
    "ybNo":
    /*!************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
      \************************************************************************************************/

    /*! exports provided: isFunction */

    /***/
    function ybNo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return isFunction;
      });

      function isFunction(x) {
        return typeof x === 'function';
      } //# sourceMappingURL=isFunction.js.map

      /***/

    },

    /***/
    "ywnc":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
      \*********************************************************************************************************/

    /*! exports provided: QueueScheduler */

    /***/
    function ywnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueScheduler", function () {
        return QueueScheduler;
      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      "1luJ");

      var QueueScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP4) {
        _inherits(QueueScheduler, _AsyncScheduler__WEBP4);

        var _super42 = _createSuper(QueueScheduler);

        function QueueScheduler() {
          _classCallCheck(this, QueueScheduler);

          return _super42.apply(this, arguments);
        }

        return QueueScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=QueueScheduler.js.map

      /***/

    },

    /***/
    "zHci":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/angular-datatables/node_modules/rxjs/_esm2015/internal/observable/pairs.js ***!
      \*************************************************************************************************/

    /*! exports provided: pairs, dispatch */

    /***/
    function zHci(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pairs", function () {
        return pairs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatch", function () {
        return dispatch;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "faBL");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "ZtUA");

      function pairs(obj, scheduler) {
        if (!scheduler) {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);

            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
              var key = keys[i];

              if (obj.hasOwnProperty(key)) {
                subscriber.next([key, obj[key]]);
              }
            }

            subscriber.complete();
          });
        } else {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, {
              keys: keys,
              index: 0,
              subscriber: subscriber,
              subscription: subscription,
              obj: obj
            }));
            return subscription;
          });
        }
      }

      function dispatch(state) {
        var keys = state.keys,
            index = state.index,
            subscriber = state.subscriber,
            subscription = state.subscription,
            obj = state.obj;

        if (!subscriber.closed) {
          if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({
              keys: keys,
              index: index + 1,
              subscriber: subscriber,
              subscription: subscription,
              obj: obj
            }));
          } else {
            subscriber.complete();
          }
        }
      } //# sourceMappingURL=pairs.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~master-data-master-data-module~ticket-managment-ticket-managment-module-es5.js.map