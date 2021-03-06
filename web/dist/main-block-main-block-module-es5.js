(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-block-main-block-module"], {
    /***/
    "K0QA":
    /*!****************************************************************************************************!*\
      !*** ./src/app/content/pages/main-block/entry-form/truck-entry-form/truck-entry-form.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TruckEntryFormComponent */

    /***/
    function K0QA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TruckEntryFormComponent", function () {
        return TruckEntryFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "bH2/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TruckEntryFormComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r36.truck_number);
        }
      }

      function TruckEntryFormComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 58);
        }

        if (rf & 2) {
          var notFound_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", notFound_r37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function TruckEntryFormComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Transporter Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_17_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors.required);
        }
      }

      function TruckEntryFormComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product Code is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_23_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.errors.required);
        }
      }

      function TruckEntryFormComponent_div_29_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_29_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.errors.required);
        }
      }

      function TruckEntryFormComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Code is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_35_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r11.errors.required);
        }
      }

      function TruckEntryFormComponent_div_41_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_41_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r13.errors.required);
        }
      }

      function TruckEntryFormComponent_div_47_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Destination is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_47_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r15.errors.required);
        }
      }

      function TruckEntryFormComponent_div_53_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tare Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_53_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r17.errors.required);
        }
      }

      function TruckEntryFormComponent_div_59_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Target Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_59_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r19.errors.required);
        }
      }

      function TruckEntryFormComponent_div_65_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Max Gross Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_65_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r21.errors.required);
        }
      }

      function TruckEntryFormComponent_div_71_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " CCOE Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_71_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r23.errors.required);
        }
      }

      function TruckEntryFormComponent_div_77_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Coarse Set Point is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TruckEntryFormComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TruckEntryFormComponent_div_77_div_1_Template, 2, 0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r25.errors.required);
        }
      }

      var TruckEntryFormComponent = /*#__PURE__*/function () {
        function TruckEntryFormComponent(router, baseService) {
          _classCallCheck(this, TruckEntryFormComponent);

          this.router = router;
          this.baseService = baseService;
          this.truckData = {};
          this.keyword = 'truck_number';
          this.truckList = [];
          this.truckNumberSelected = '';
        }

        _createClass(TruckEntryFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTrucksList();
          }
        }, {
          key: "truckSelected",
          value: function truckSelected(a) {
            console.log(a);
            this.getTruckById(a);
            this.truckNumberSelected = a.truck_number;
          }
        }, {
          key: "getTrucksList",
          value: function getTrucksList() {
            var _this = this;

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.baseService.baseUrl + 'api/truck', {}).then(function (response) {
              console.log(response);
              _this.truckList = response.data.data;
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getTruckById",
          value: function getTruckById(obj) {
            var _this2 = this;

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.baseService.baseUrl + 'api/truck/' + obj.truck_number, {}).then(function (response) {
              if (response.status) {
                _this2.truckData = response.data.data;
                console.log(_this2.truckData);
                console.log(response.data);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.truckData = {};
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(this.baseService.baseUrl + 'api/truck/' + this.truckData._id, this.truckData, {// headers: {
              //   "Authorization": `Bearer ${this.authS.userValue.jwtToken}`
              // }
            }).then(function (response) {
              console.log('resp: ', response);
              location.reload();
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "post",
          value: function post() {
            var obj = {};
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.baseService.baseUrl + '', obj, {// headers: {
              //   "Authorization": `Bearer ${this.authS.userValue.jwtToken}`
              // }
            }).then(function (response) {
              console.log('resp: ', response);
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "patch",
          value: function patch() {
            var obj = {};
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(this.baseService.baseUrl + '', obj, {// headers: {
              //   "Authorization": `Bearer ${this.authS.userValue.jwtToken}`
              // }
            }).then(function (response) {
              console.log('resp: ', response);
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }]);

        return TruckEntryFormComponent;
      }();

      TruckEntryFormComponent.??fac = function TruckEntryFormComponent_Factory(t) {
        return new (t || TruckEntryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseServiceService"]));
      };

      TruckEntryFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TruckEntryFormComponent,
        selectors: [["app-truck-entry-form"]],
        decls: 152,
        vars: 36,
        consts: [["novalidate", "", 3, "ngSubmit"], ["truckForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-4", "col-sm-9", "mb-3"], [1, "ng-autocomplete", 2, "width", "auto"], ["historyIdentifier", "truckList", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["type", "text", "name", "transporter_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["transporter_name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "name", "product_code", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["product_code", "ngModel"], ["type", "text", "name", "product_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["product_name", "ngModel"], ["type", "text", "name", "customer_code", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["customer_code", "ngModel"], ["type", "text", "name", "customer_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["customer_name", "ngModel"], ["type", "text", "name", "destination", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["destination", "ngModel"], ["type", "text", "name", "tare_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tare_wt", "ngModel"], ["type", "text", "name", "target_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["target_wt", "ngModel"], ["type", "text", "name", "max_gross_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["max_gross_wt", "ngModel"], ["type", "text", "name", "ccoe_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["ccoe_wt", "ngModel"], ["type", "text", "name", "coarse_set_point", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["coarse_set_point", "ngModel"], [1, "form-group"], [1, "input-group"], ["type", "text", "name", "srv_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["srv_due_date", "ngModel"], ["type", "text", "name", "ccoe_licence_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["ccoe_licence_date", "ngModel"], ["type", "text", "name", "eecv_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["eecv_due_date", "ngModel"], ["type", "text", "name", "hydro_test_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["hydro_test_due_date", "ngModel"], ["type", "text", "name", "fc_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["fc_due_date", "ngModel"], ["type", "text", "name", "read_permit_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["read_permit_date", "ngModel"], ["type", "text", "name", "fire_extinguisher_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["fire_extinguisher_date", "ngModel"], ["type", "text", "name", "insurance_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["insurance_due_date", "ngModel"], ["_ngcontent-yqo-c332", "", "aria-label", "With textarea", "name", "special_remarks", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["special_remarks", "ngModel"], [1, "col-md-2", "col-sm-3", "text-sm-right", "mb-4", "mb-sm-0"], [1, "col-md-1", "col-sm-3", "mb-4", "mb-sm-0", 2, "width", "150px"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "item"], [3, "innerHTML"], [1, "form-text", "text-danger"], [4, "ngIf"]],
        template: function TruckEntryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function TruckEntryFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.formSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Truck Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ng-autocomplete", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selected", function TruckEntryFormComponent_Template_ng_autocomplete_selected_7_listener($event) {
              return ctx.truckSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TruckEntryFormComponent_ng_template_8_Template, 3, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, TruckEntryFormComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Transporter Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.truckData.transporter_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, TruckEntryFormComponent_div_17_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Product Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.truckData.product_code = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, TruckEntryFormComponent_div_23_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.truckData.product_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, TruckEntryFormComponent_div_29_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Customer Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.truckData.customer_code = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, TruckEntryFormComponent_div_35_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.truckData.customer_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, TruckEntryFormComponent_div_41_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Destination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "input", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.truckData.destination = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, TruckEntryFormComponent_div_47_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Tare Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.truckData.tare_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, TruckEntryFormComponent_div_53_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Target Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_57_listener($event) {
              return ctx.truckData.target_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, TruckEntryFormComponent_div_59_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Max Gross Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "input", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_63_listener($event) {
              return ctx.truckData.max_gross_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, TruckEntryFormComponent_div_65_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "CCOE Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_69_listener($event) {
              return ctx.truckData.ccoe_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, TruckEntryFormComponent_div_71_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Coarse Set Point");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_75_listener($event) {
              return ctx.truckData.coarse_set_point = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, TruckEntryFormComponent_div_77_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "SRV Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_83_listener($event) {
              return ctx.truckData.srv_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "CCOE Licence Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "input", 36, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_90_listener($event) {
              return ctx.truckData.ccoe_licence_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "EECV Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "input", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_97_listener($event) {
              return ctx.truckData.eecv_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Hydro Test Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "input", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_104_listener($event) {
              return ctx.truckData.hydro_test_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "FC Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "input", 42, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_111_listener($event) {
              return ctx.truckData.fc_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Read Permit Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "input", 44, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_118_listener($event) {
              return ctx.truckData.read_permit_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Fire Extinguisher Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "input", 46, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_125_listener($event) {
              return ctx.truckData.fire_extinguisher_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Insurance Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "input", 48, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_input_ngModelChange_132_listener($event) {
              return ctx.truckData.insurance_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Any Special Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "textarea", 50, 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TruckEntryFormComponent_Template_textarea_ngModelChange_139_listener($event) {
              return ctx.truckData.special_remarks = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "button", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TruckEntryFormComponent_Template_button_click_150_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](40);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](52);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](58);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](64);

            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](70);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.truckList)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.transporter_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.product_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.product_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.customer_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.customer_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r13.invalid && (_r13.dirty || _r13.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.tare_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r17.invalid && (_r17.dirty || _r17.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.target_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r19.invalid && (_r19.dirty || _r19.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.max_gross_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r21.invalid && (_r21.dirty || _r21.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.ccoe_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r23.invalid && (_r23.dirty || _r23.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.coarse_set_point);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.srv_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.ccoe_licence_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.eecv_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.hydro_test_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.fc_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.read_permit_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.fire_extinguisher_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.insurance_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.special_remarks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".text-danger[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  font-size: 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0cnVjay1lbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJ0cnVjay1lbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZGFuZ2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TruckEntryFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-truck-entry-form',
            templateUrl: './truck-entry-form.component.html',
            styleUrls: ['./truck-entry-form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "L8iN":
    /*!****************************************************************************************************!*\
      !*** ./src/app/content/pages/main-block/entry-form/order-entry-form/order-entry-form.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: OrderEntryFormComponent */

    /***/
    function L8iN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderEntryFormComponent", function () {
        return OrderEntryFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "bH2/");

      function OrderEntryFormComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Card No is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_7_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.errors.required);
        }
      }

      function OrderEntryFormComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Bay No is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_17_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.errors.required);
        }
      }

      function OrderEntryFormComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r54.truck_number);
        }
      }

      function OrderEntryFormComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 79);
        }

        if (rf & 2) {
          var notFound_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", notFound_r55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function OrderEntryFormComponent_div_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Transporter Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_36_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.errors.required);
        }
      }

      function OrderEntryFormComponent_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product Code is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_42_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r11.errors.required);
        }
      }

      function OrderEntryFormComponent_div_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_48_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r13.errors.required);
        }
      }

      function OrderEntryFormComponent_div_54_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Code is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_54_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r15.errors.required);
        }
      }

      function OrderEntryFormComponent_div_60_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_60_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r17.errors.required);
        }
      }

      function OrderEntryFormComponent_div_66_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Destination is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_66_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r19.errors.required);
        }
      }

      function OrderEntryFormComponent_div_72_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tare Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_72_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r21.errors.required);
        }
      }

      function OrderEntryFormComponent_div_78_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Target Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_78_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r23.errors.required);
        }
      }

      function OrderEntryFormComponent_div_84_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Max Gross Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_84_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r25.errors.required);
        }
      }

      function OrderEntryFormComponent_div_90_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " CCOE Weight is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_90_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r27.errors.required);
        }
      }

      function OrderEntryFormComponent_div_96_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Coarse Set Point is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_96_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r29.errors.required);
        }
      }

      function OrderEntryFormComponent_div_158_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Qty To be Loaded is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_158_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r39.errors.required);
        }
      }

      function OrderEntryFormComponent_div_171_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Customer Order No is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_171_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_171_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r42.errors.required);
        }
      }

      function OrderEntryFormComponent_div_184_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No Of Loading is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_184_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_184_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r44.errors.required);
        }
      }

      function OrderEntryFormComponent_div_190_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tare Wt is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_190_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_190_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r46.errors.required);
        }
      }

      function OrderEntryFormComponent_div_196_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tare Wt is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_196_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_196_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r46.errors.required);
        }
      }

      function OrderEntryFormComponent_div_202_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tare Wt is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderEntryFormComponent_div_202_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderEntryFormComponent_div_202_div_1_Template, 2, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r46.errors.required);
        }
      }

      var OrderEntryFormComponent = /*#__PURE__*/function () {
        function OrderEntryFormComponent(router, baseService) {
          _classCallCheck(this, OrderEntryFormComponent);

          this.router = router;
          this.baseService = baseService;
          this.truckData = {};
          this.keyword = 'truck_number';
          this.truckList = [];
        }

        _createClass(OrderEntryFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTrucksList();
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.truckData = {};
            return;
          }
        }, {
          key: "truckSelected",
          value: function truckSelected(a) {
            console.log(a);
            this.getTruckById(a);
          }
        }, {
          key: "getTrucksList",
          value: function getTrucksList() {
            var _this3 = this;

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.baseService.baseUrl + 'api/truck', {}).then(function (response) {
              console.log(response);
              _this3.truckList = response.data.data;
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getTruckById",
          value: function getTruckById(obj) {
            var _this4 = this;

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.baseService.baseUrl + 'api/truck/' + obj.truck_number, {}).then(function (response) {
              if (response.status) {
                _this4.truckData = response.data.data;
                console.log(_this4.truckData);
                console.log(response.data);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(this.baseService.baseUrl + 'api/truck/' + this.truckData._id, this.truckData, {// headers: {
              //   "Authorization": `Bearer ${this.authS.userValue.jwtToken}`
              // }
            }).then(function (response) {
              console.log('resp: ', response);
              location.reload();
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }]);

        return OrderEntryFormComponent;
      }();

      OrderEntryFormComponent.??fac = function OrderEntryFormComponent_Factory(t) {
        return new (t || OrderEntryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseServiceService"]));
      };

      OrderEntryFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrderEntryFormComponent,
        selectors: [["app-order-entry-form"]],
        decls: 214,
        vars: 51,
        consts: [[1, ""], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-3", "col-sm-9", "mb-3"], ["type", "text", "name", "cardNo", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["cardNo", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], ["for", "normal-input-1", 1, "col-md-1", "col-sm-3", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-2", "col-sm-9", "mb-3", "d-flex", "align-items-center"], ["type", "text", "name", "bayNo", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["bayNo", "ngModel"], ["novalidate", "", 3, "ngSubmit"], ["truckForm", "ngForm"], [1, "col-md-4", "col-sm-9", "mb-3"], [1, "ng-autocomplete", 2, "width", "auto"], ["historyIdentifier", "truckList", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["type", "text", "name", "transporter_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["transporter_name", "ngModel"], ["type", "text", "name", "product_code", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["product_code", "ngModel"], ["type", "text", "name", "product_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["product_name", "ngModel"], ["type", "text", "name", "customer_code", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["customer_code", "ngModel"], ["type", "text", "name", "customer_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["customer_name", "ngModel"], ["type", "text", "name", "destination", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["destination", "ngModel"], ["type", "text", "name", "tare_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tare_wt", "ngModel"], ["type", "text", "name", "target_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["target_wt", "ngModel"], ["type", "text", "name", "max_gross_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["max_gross_wt", "ngModel"], ["type", "text", "name", "ccoe_wt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["ccoe_wt", "ngModel"], ["type", "text", "name", "coarse_set_point", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["coarse_set_point", "ngModel"], [1, "form-group"], [1, "input-group"], ["type", "text", "name", "srv_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["srv_due_date", "ngModel"], ["type", "text", "name", "ccoe_licence_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["ccoe_licence_date", "ngModel"], ["type", "text", "name", "eecv_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["eecv_due_date", "ngModel"], ["type", "text", "name", "hydro_test_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["hydro_test_due_date", "ngModel"], ["type", "text", "name", "fc_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["fc_due_date", "ngModel"], ["type", "text", "name", "read_permit_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["read_permit_date", "ngModel"], ["type", "text", "name", "fire_extinguisher_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["fire_extinguisher_date", "ngModel"], ["type", "text", "name", "insurance_due_date", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["insurance_due_date", "ngModel"], ["type", "text", "placeholder", "Qty To be Loaded", "name", "qtyTobeLoaded", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["qtyTobeLoaded", "ngModel"], ["_ngcontent-yqo-c332", "", "name", "special_remarks", "aria-label", "With textarea", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["special_remarks", "ngModel"], ["type", "text", "placeholder", "Customer Order No", "name", "customerOrderNo", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["customerOrderNo", "ngModel"], [1, "loading-type", "mb-3", 2, "border", "2px solid #efefef", "padding", "1rem"], [1, "form-row"], [1, "col-2"], [1, "col-md-2", "col-sm-3", "dt-card__title", "ng-star-inserted"], ["type", "text", "placeholder", "No Of Loading", "name", "noOfLoading", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["noOfLoading", "ngModel"], ["type", "text", "placeholder", "Tare Wt", "name", "tareWt", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tareWt", "ngModel"], [1, "col-md-2", "col-sm-3", "text-sm-right", "mb-4", "mb-sm-0"], [1, "col-md-1", "col-sm-3", "mb-4", "mb-sm-0", 2, "width", "150px"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-text", "text-danger"], [4, "ngIf"], [1, "item"], [3, "innerHTML"]],
        template: function OrderEntryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Card No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.truckData.cardNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, OrderEntryFormComponent_div_7_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " 02-12-2020 06:54:15 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Bay No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.truckData.bayNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, OrderEntryFormComponent_div_17_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "form", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OrderEntryFormComponent_Template_form_ngSubmit_18_listener() {
              return ctx.formSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Truck Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ng-autocomplete", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selected", function OrderEntryFormComponent_Template_ng_autocomplete_selected_25_listener($event) {
              return ctx.truckSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, OrderEntryFormComponent_ng_template_26_Template, 3, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, OrderEntryFormComponent_ng_template_28_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Transporter Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.truckData.transporter_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, OrderEntryFormComponent_div_36_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Product Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.truckData.product_code = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, OrderEntryFormComponent_div_42_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.truckData.product_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, OrderEntryFormComponent_div_48_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Customer Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_52_listener($event) {
              return ctx.truckData.customer_code = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, OrderEntryFormComponent_div_54_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "input", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_58_listener($event) {
              return ctx.truckData.customer_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, OrderEntryFormComponent_div_60_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Destination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_64_listener($event) {
              return ctx.truckData.destination = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, OrderEntryFormComponent_div_66_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Tare Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.truckData.tare_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, OrderEntryFormComponent_div_72_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Target Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "input", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_76_listener($event) {
              return ctx.truckData.target_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, OrderEntryFormComponent_div_78_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Max Gross Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_82_listener($event) {
              return ctx.truckData.max_gross_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, OrderEntryFormComponent_div_84_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "CCOE Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "input", 36, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_88_listener($event) {
              return ctx.truckData.ccoe_wt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](90, OrderEntryFormComponent_div_90_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Coarse Set Point");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "input", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_94_listener($event) {
              return ctx.truckData.coarse_set_point = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](96, OrderEntryFormComponent_div_96_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "SRV Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "input", 42, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_102_listener($event) {
              return ctx.truckData.srv_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "CCOE Licence Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "input", 44, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_109_listener($event) {
              return ctx.truckData.ccoe_licence_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "EECV Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "input", 46, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.truckData.eecv_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Hydro Test Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "input", 48, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_123_listener($event) {
              return ctx.truckData.hydro_test_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "FC Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "input", 50, 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_130_listener($event) {
              return ctx.truckData.fc_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Read Permit Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "input", 52, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_137_listener($event) {
              return ctx.truckData.read_permit_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Fire Extinguisher Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "input", 54, 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_144_listener($event) {
              return ctx.truckData.fire_extinguisher_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Insurance Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "input", 56, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_151_listener($event) {
              return ctx.truckData.insurance_due_date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Qty To be Loaded");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "input", 58, 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_156_listener($event) {
              return ctx.truckData.qtyTobeLoaded = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](158, OrderEntryFormComponent_div_158_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "textarea", 60, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_textarea_ngModelChange_164_listener($event) {
              return ctx.truckData.special_remarks = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Customer Order No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "input", 62, 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_169_listener($event) {
              return ctx.truckData.customerOrderNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](171, OrderEntryFormComponent_div_171_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Loading Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "No Of Loading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "input", 68, 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_182_listener($event) {
              return ctx.truckData.noOfLoading = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](184, OrderEntryFormComponent_div_184_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Tare Wt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "input", 70, 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_188_listener($event) {
              return ctx.truckData.tareWt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](190, OrderEntryFormComponent_div_190_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Tare Wt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "input", 70, 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_194_listener($event) {
              return ctx.truckData.tareWt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](196, OrderEntryFormComponent_div_196_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Tare Wt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "input", 70, 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function OrderEntryFormComponent_Template_input_ngModelChange_200_listener($event) {
              return ctx.truckData.tareWt = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](202, OrderEntryFormComponent_div_202_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](204, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderEntryFormComponent_Template_button_click_212_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](27);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](35);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](53);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](59);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](65);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](71);

            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](83);

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](89);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](95);

            var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](157);

            var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](170);

            var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](183);

            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](189);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.cardNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.invalid && (_r0.dirty || _r0.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.bayNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.truckList)("searchKeyword", ctx.keyword)("itemTemplate", _r5)("notFoundTemplate", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.transporter_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.product_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.product_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r13.invalid && (_r13.dirty || _r13.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.customer_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.customer_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r17.invalid && (_r17.dirty || _r17.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r19.invalid && (_r19.dirty || _r19.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.tare_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r21.invalid && (_r21.dirty || _r21.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.target_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r23.invalid && (_r23.dirty || _r23.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.max_gross_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.ccoe_wt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r27.invalid && (_r27.dirty || _r27.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.coarse_set_point);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.srv_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.ccoe_licence_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.eecv_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.hydro_test_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.fc_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.read_permit_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.fire_extinguisher_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.insurance_due_date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.qtyTobeLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.special_remarks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.customerOrderNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r42.invalid && (_r42.dirty || _r42.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.noOfLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r44.invalid && (_r44.dirty || _r44.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.tareWt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r46.invalid && (_r46.dirty || _r46.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.tareWt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r46.invalid && (_r46.dirty || _r46.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.truckData.tareWt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r46.invalid && (_r46.dirty || _r46.touched));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"]],
        styles: [".text-danger[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  font-size: 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxvcmRlci1lbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJvcmRlci1lbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZGFuZ2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderEntryFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-entry-form',
            templateUrl: './order-entry-form.component.html',
            styleUrls: ['./order-entry-form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "d8wM":
    /*!***************************************************************!*\
      !*** ./src/app/content/pages/main-block/main-block.module.ts ***!
      \***************************************************************/

    /*! exports provided: MainBlockModule */

    /***/
    function d8wM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainBlockModule", function () {
        return MainBlockModule;
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


      var _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entry-form/entry-form.component */
      "ekZ8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "bH2/");
      /* harmony import */


      var _entry_form_truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./entry-form/truck-entry-form/truck-entry-form.component */
      "K0QA");
      /* harmony import */


      var _entry_form_order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./entry-form/order-entry-form/order-entry-form.component */
      "L8iN");

      var appsRoutes = [{
        path: 'entry-form',
        component: _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["EntryFormComponent"]
      }, {
        path: 'order-form',
        component: _entry_form_order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_8__["OrderEntryFormComponent"]
      }, {
        path: '**',
        component: _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["EntryFormComponent"]
      }];

      var MainBlockModule = function MainBlockModule() {
        _classCallCheck(this, MainBlockModule);
      };

      MainBlockModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MainBlockModule
      });
      MainBlockModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MainBlockModule_Factory(t) {
          return new (t || MainBlockModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appsRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MainBlockModule, {
          declarations: [_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["EntryFormComponent"], _entry_form_truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_7__["TruckEntryFormComponent"], _entry_form_order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_8__["OrderEntryFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["EntryFormComponent"], _entry_form_truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_7__["TruckEntryFormComponent"], _entry_form_order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_8__["OrderEntryFormComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainBlockModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["EntryFormComponent"], _entry_form_truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_7__["TruckEntryFormComponent"], _entry_form_order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_8__["OrderEntryFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appsRoutes)],
            exports: [_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["EntryFormComponent"], _entry_form_truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_7__["TruckEntryFormComponent"], _entry_form_order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_8__["OrderEntryFormComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ekZ8":
    /*!*****************************************************************************!*\
      !*** ./src/app/content/pages/main-block/entry-form/entry-form.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: EntryFormComponent */

    /***/
    function ekZ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryFormComponent", function () {
        return EntryFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./truck-entry-form/truck-entry-form.component */
      "K0QA");
      /* harmony import */


      var _order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-entry-form/order-entry-form.component */
      "L8iN");

      function EntryFormComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-truck-entry-form");
        }
      }

      function EntryFormComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-order-entry-form");
        }
      }

      var EntryFormComponent = /*#__PURE__*/function () {
        function EntryFormComponent() {
          _classCallCheck(this, EntryFormComponent);

          this.snippets = '';
          this.navsAlignment = 'start';
          this.navsOrientation = 'horizontal';
          this.active = 1;
        }

        _createClass(EntryFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EntryFormComponent;
      }();

      EntryFormComponent.??fac = function EntryFormComponent_Factory(t) {
        return new (t || EntryFormComponent)();
      };

      EntryFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EntryFormComponent,
        selectors: [["app-entry-form"]],
        decls: 14,
        vars: 4,
        consts: [[1, "row", "m-4"], [1, "card", "col-12"], [1, "card-body", "pt-3"], ["ngbNav", "", "demoTitle", "Pills Tabs", 1, "nav-tabs", "justify-content-around", 2, "border-bottom", "1px solid #512da8 !important", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"]],
        template: function EntryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("activeIdChange", function EntryFormComponent_Template_ul_activeIdChange_3_listener($event) {
              return ctx.active = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Truck Master Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, EntryFormComponent_ng_template_8_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Customer Order Entry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, EntryFormComponent_ng_template_12_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeId", ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavItem", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavItem", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavOutlet", _r0);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _truck_entry_form_truck_entry_form_component__WEBPACK_IMPORTED_MODULE_2__["TruckEntryFormComponent"], _order_entry_form_order_entry_form_component__WEBPACK_IMPORTED_MODULE_3__["OrderEntryFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EntryFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-entry-form',
            templateUrl: './entry-form.component.html',
            styleUrls: ['./entry-form.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=main-block-main-block-module-es5.js.map