(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-data-master-data-module"], {
    /***/
    "1GON":
    /*!****************************************************************************!*\
      !*** ./src/app/content/pages/master-data/user-list/user-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: UserListComponent */

    /***/
    function GON(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
        return UserListComponent;
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


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function UserListComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserListComponent_div_9_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var data_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.changeStatus(data_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_div_9_Template_img_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var data_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.editUser(data_r3._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_div_9_Template_img_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var data_r3 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx_r8.open(_r1, data_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_div_9_Template_img_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var data_r3 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.deleteUser(data_r3._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "switch", i_r4, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r3.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "switch", i_r4, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.emailSplit(data_r3.email));
        }
      }

      function UserListComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_ng_template_13_Template_button_click_3_listener() {
            var d_r11 = ctx.dismiss;
            return d_r11("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_ng_template_13_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.selectedObj.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_ng_template_13_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var c_r10 = ctx.close;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r10(ctx_r16.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reset Password Of ", ctx_r2.selectedObj.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedObj.newPassword);
        }
      }

      var _c0 = function _c0(a1) {
        return {
          itemsPerPage: 10,
          currentPage: a1
        };
      };

      var DataTablesResponse = function DataTablesResponse() {
        _classCallCheck(this, DataTablesResponse);

        this.snippets = '';
      };

      var UserListComponent = /*#__PURE__*/function () {
        function UserListComponent(router, config, modalService, http, baseService) {
          _classCallCheck(this, UserListComponent);

          this.router = router;
          this.modalService = modalService;
          this.http = http;
          this.baseService = baseService;
          this.dtOptions = {}; // We use this trigger because fetching the list of persons can be quite long,
          // thus we ensure the data is fetched before rendering

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.status = false;
          this.p = 1;
        }

        _createClass(UserListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10
            }; // if(window.screen.width>= 360 || window.screen.height>=960 )
            // {
            //   this.status=false;
            // }

            this.getUserList();
            this.getScreen();
          }
        }, {
          key: "getScreen",
          value: function getScreen() {
            $(window).resize(function () {
              console.log(window.screen.width + "  " + window.screen.height);

              if (window.screen.width >= 360 || window.screen.height > 640) {
                this.status = false;
                console.log("If Block");
              } else {
                this.status = true;
                console.log("else Block");
              }
            });
          }
        }, {
          key: "getUserList",
          value: function getUserList() {
            var _this = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/users/active-user_data', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                _this.userListData = response.data.data;
                _this.temp = _this.userListData;
              } else if (_this.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          } ////////////EMail Split

        }, {
          key: "emailSplit",
          value: function emailSplit(email) {
            return email.split(",").join("\n");
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(data) {
            var _this2 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/users/user_status', {
              _id: data._id,
              isActive: !data.isActive
            }, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload(); });

                _this2.getUserList();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          } // deleteUser(id)
          // {
          //   axios.delete(this.baseService.baseUrl + 'secure/users/user_status'+id,{
          //     headers: {
          //       'x-auth' : this.baseService.authToken
          //     },
          //   })
          //   .then(response => {        
          //     console.log(response)
          //     if (response.data.status) {
          //       Swal.fire({
          //         position: 'center',
          //         icon: 'success',
          //         title: response.data["message"],
          //         showConfirmButton: false,
          //         timer: 3000
          //     }).then(() => {
          //       location.reload(); });
          //     }
          //     else{
          //       Swal.fire({
          //         position: 'center',
          //         icon: 'error',
          //         title: response.data["message"],
          //         showConfirmButton: false,
          //         timer: 3000
          //     })
          //      }
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })
          // }
          /////////Change Password

        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this3 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.selectedObj.id = selObj._id;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this3.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(_this3.baseService.baseUrl + 'secure/users/changePassword', _this3.selectedObj, {
                headers: {
                  'x-auth': _this3.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });
                } else if (_this3.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this4 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](this.baseService.baseUrl + 'secure/users/user_data/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this4.getUserList();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          } //////////Searching

        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            console.log(event);
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.userListData = temp; // Whenever the filter changes, always go back to the first page
          }
        }, {
          key: "pageChange",
          value: function pageChange(event) {
            console.log("pageChanged");
          }
        }, {
          key: "editUser",
          value: function editUser(id) {
            this.router.navigate(['/master/user-edit'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return UserListComponent;
      }();

      UserListComponent.ɵfac = function UserListComponent_Factory(t) {
        return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_7__["BaseServiceService"]));
      };

      UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserListComponent,
        selectors: [["app-user-list"]],
        decls: 15,
        vars: 6,
        consts: [[1, "row", "mb-4"], [1, "col-md-12", "text-center", "mt-2"], [1, "heading"], [1, "col-md-2", "col-sm-12", "ml-4", "mr-4"], ["type", "text", "placeholder", "Searching...", 1, "form-control", "form-control-sm", 3, "keyup"], [1, "row"], [1, "col-md-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "col-md-12", "col-sm-12", "col-xl-12"], [3, "pageChange"], ["content", ""], [1, "card"], [1, "col-md-6"], [1, "name"], [1, "switchbtn"], [1, "switchToggle"], ["type", "checkbox", 3, "checked", "id", "change"], [3, "for"], [1, "row", "d-flex"], [1, "col-md-8", "col-sm-8"], [1, ""], [1, "col-md-3", "col-sm-3"], ["src", "https://ticket-management.happimobiles.com/assets/images/icon/edit.png", "height", "30px", 3, "click"], ["src", "https://ticket-management.happimobiles.com/assets/images/icon/key.png", "height", "30px", 3, "click"], ["src", "https://ticket-management.happimobiles.com/assets/images/icon/delete.png", "height", "30px", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "newPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function UserListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USER DETAILS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserListComponent_Template_input_keyup_6_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserListComponent_div_9_Template, 18, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pagination-controls", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserListComponent_Template_pagination_controls_pageChange_12_listener($event) {
              return ctx.p = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserListComponent_ng_template_13_Template, 16, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 1, ctx.userListData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.p)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.7rem !important;\n}\n\n.custom-switch[_ngcontent-%COMP%] {\n  padding-left: 3.55rem !important;\n}\n\n.carddata[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  width: 2.75rem !important;\n}\n\n.custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #fa8c16 !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  background-color: #fa8c16;\n  padding: 2%;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.col-md-12[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-md-3[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n\n.outerDivFull[_ngcontent-%COMP%] {\n  margin: 50px;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  position: absolute;\n}\n\n.switchToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 59px;\n  max-width: 70px;\n  height: 27px;\n  background: #d1d1d1;\n  display: block;\n  border-radius: 100px;\n  position: relative;\n}\n\n.switchToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  background: #fff;\n  border-radius: 90px;\n  transition: 0.3s;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  background: #fa8c16;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: 'No';\n  position: absolute;\n  top: 4px;\n  left: 30px;\n  width: 26px;\n  height: 26px;\n  border-radius: 90px;\n  transition: 0.3s;\n  text-indent: 0;\n  color: #fff;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: 'Yes';\n  position: absolute;\n  top: 5px;\n  left: 10px;\n  width: 26px;\n  height: 26px;\n  border-radius: 90px;\n  transition: 0.3s;\n  text-indent: 0;\n  color: #fff;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after, .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  left: calc(100% - 2px);\n  transform: translateX(-100%);\n}\n\n.switchToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active:after {\n  width: 60px;\n}\n\n.toggle-switchArea[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-left: 10% !important;\n  font-size: 17px;\n}\n\n.switchbtn[_ngcontent-%COMP%] {\n  margin-left: 50% !important;\n  margin-top: 3% !important;\n}\n\n.col-md-6[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.col-md-8[_ngcontent-%COMP%] {\n  width: 70% !important;\n}\n\n.col-md-3[_ngcontent-%COMP%] {\n  width: 30% !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGlDQUFnQztBQURwQzs7QUFHQTtFQUNJLGdDQUErQjtBQUFuQzs7QUFFQTtFQUNJLGVBQWU7QUFDbkI7O0FBQ0E7RUFDSSx5QkFBd0I7QUFFNUI7O0FBQ0E7RUFDSSxvQ0FBbUM7QUFFdkM7O0FBQUE7RUFFSSx5QkFBd0I7RUFDeEIsV0FBVTtBQUVkOztBQUFBO0VBQ0ksWUFBVztBQUdmOztBQUFBO0VBRUksZ0JBQWdCO0VBQ2hCLGVBQWU7QUFFbkI7O0FBRUE7RUFFSSwyQkFBMEI7QUFBOUI7O0FBR0E7RUFBZ0IsWUFBVztBQUMzQjs7QUFDQTtFQUFtQyxTQUFTO0VBQUUsUUFBUTtFQUFFLGtCQUFrQjtFQUFFLGtCQUFrQjtBQU05Rjs7QUFMQTtFQUFxQixlQUFlO0VBQUUsb0JBQW9CO0VBQUUsV0FBVztFQUFFLGVBQWU7RUFBRSxZQUFZO0VBQUUsbUJBQW1CO0VBQUUsY0FBYztFQUFFLG9CQUFvQjtFQUFFLGtCQUFrQjtBQWlCckw7O0FBaEJBO0VBQTJCLFdBQVc7RUFBRSxrQkFBa0I7RUFBRSxRQUFRO0VBQUUsU0FBUztFQUFFLFdBQVc7RUFBRSxZQUFZO0VBQUUsZ0JBQWdCO0VBQUUsbUJBQW1CO0VBQUUsZ0JBQWdCO0FBNEJuSzs7QUEzQkE7RUFBbUYsbUJBQWtCO0FBK0JyRzs7QUE5QkE7RUFBZ0YsYUFBYTtFQUFFLGtCQUFrQjtFQUFFLFFBQVE7RUFBRSxVQUFVO0VBQUUsV0FBVztFQUFFLFlBQVk7RUFBRSxtQkFBbUI7RUFBRSxnQkFBZ0I7RUFBRSxjQUFjO0VBQUUsV0FBVztBQTJDdE87O0FBMUNBO0VBQWdHLGNBQWM7RUFBRSxrQkFBa0I7RUFBRSxRQUFRO0VBQUUsVUFBVTtFQUFFLFdBQVc7RUFBRSxZQUFZO0VBQUUsbUJBQW1CO0VBQUUsZ0JBQWdCO0VBQUUsY0FBYztFQUFFLFdBQVc7QUF1RHZQOztBQXREQTtFQUE4RixzQkFBc0I7RUFBRSw0QkFBNEI7QUEyRGxKOztBQTFEQTtFQUFrQyxXQUFXO0FBOEQ3Qzs7QUE3REE7RUFBcUIscUJBQXFCO0FBaUUxQzs7QUE5REE7RUFFSSwyQkFBMEI7RUFFMUIsZUFBZTtBQStEbkI7O0FBN0RBO0VBRUksMkJBQTBCO0VBRTFCLHlCQUF3QjtBQThENUI7O0FBM0RBO0VBRUkscUJBQW9CO0FBNkR4Qjs7QUExREE7RUFFSSxxQkFBb0I7QUE0RHhCOztBQTFEQTtFQUVJLHFCQUFvQjtBQTREeEI7O0FBMURBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLDRCQUEyQjtFQUMzQiw2QkFBNEI7QUE2RGhDIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5cclxue1xyXG4gICAgLy8gZm9udC1zaXplOiAwcmVtIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjdyZW0haW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b20tc3dpdGNoIHtcclxuICAgIHBhZGRpbmctbGVmdDogMy41NXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmRkYXRhe1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAyLjc1cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE4YzE2IWltcG9ydGFudDtcclxufSBcclxuLmhlYWRpbmdcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmE4YzE2O1xyXG4gICAgcGFkZGluZzoyJTtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY29sLW1kLTEyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4uY29sLW1kLTMsIC5jb2wtc20tM1xyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyRGl2RnVsbCB7IG1hcmdpbjo1MHB4OyB9IFxyXG5cclxuLnN3aXRjaFRvZ2dsZSBpbnB1dFt0eXBlPWNoZWNrYm94XXtoZWlnaHQ6IDA7IHdpZHRoOiAwOyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxyXG4uc3dpdGNoVG9nZ2xlIGxhYmVsIHtjdXJzb3I6IHBvaW50ZXI7IHRleHQtaW5kZW50OiAtOTk5OXB4OyB3aWR0aDogNTlweDsgbWF4LXdpZHRoOiA3MHB4OyBoZWlnaHQ6IDI3cHg7IGJhY2tncm91bmQ6ICNkMWQxZDE7IGRpc3BsYXk6IGJsb2NrOyBib3JkZXItcmFkaXVzOiAxMDBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbi5zd2l0Y2hUb2dnbGUgbGFiZWw6YWZ0ZXIge2NvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMnB4OyBsZWZ0OiAycHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IH1cclxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWwsIC5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGlucHV0ICsgbGFiZWwgIHtiYWNrZ3JvdW5kOiNmYThjMTY7IH1cclxuLnN3aXRjaFRvZ2dsZSBpbnB1dCArIGxhYmVsOmJlZm9yZSwgLnN3aXRjaFRvZ2dsZSBpbnB1dCArIGlucHV0ICsgbGFiZWw6YmVmb3JlIHtjb250ZW50OiAnTm8nOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNHB4OyBsZWZ0OiAzMHB4OyB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNnB4OyBib3JkZXItcmFkaXVzOiA5MHB4OyB0cmFuc2l0aW9uOiAwLjNzOyB0ZXh0LWluZGVudDogMDsgY29sb3I6ICNmZmY7IH1cclxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpbnB1dCArIGxhYmVsOmJlZm9yZSB7Y29udGVudDogJ1llcyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1cHg7IGxlZnQ6IDEwcHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgfVxyXG4uc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciwgLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgaW5wdXQgKyBsYWJlbDphZnRlciB7bGVmdDogY2FsYygxMDAlIC0gMnB4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxyXG4uc3dpdGNoVG9nZ2xlIGxhYmVsOmFjdGl2ZTphZnRlciB7d2lkdGg6IDYwcHg7IH0gXHJcbi50b2dnbGUtc3dpdGNoQXJlYSB7IG1hcmdpbjogMTBweCAwIDEwcHggMDsgfVxyXG5cclxuXHJcbi5uYW1lXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCUhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luOiAzJSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLnN3aXRjaGJ0blxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlIWltcG9ydGFudDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAzJSFpbXBvcnRhbnQ7XHJcbiAgIFxyXG59XHJcbi5jb2wtbWQtNlxyXG57XHJcbiAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbC1tZC04IFxyXG57XHJcbiAgICB3aWR0aDogNzAlIWltcG9ydGFudDtcclxufVxyXG4uY29sLW1kLTNcclxue1xyXG4gICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7ICAgXHJcbn1cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_7__["BaseServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6sVT":
    /*!******************************************************************!*\
      !*** ./src/app/content/pages/master-data/dept/dept.component.ts ***!
      \******************************************************************/

    /*! exports provided: DeptComponent */

    /***/
    function sVT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeptComponent", function () {
        return DeptComponent;
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


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_csvto_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-csvto-json */
      "yvBa");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function DeptComponent_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mainDept_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mainDept_r15 == null ? null : mainDept_r15.mainDeptName);
        }
      }

      function DeptComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DeptComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeptComponent_div_16_div_1_Template, 2, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function DeptComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Designation is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DeptComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeptComponent_div_23_div_1_Template, 2, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
        }
      }

      function DeptComponent_tr_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_tr_71_Template_img_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var dept_r18 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);

            return ctx_r20.open(_r11, dept_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_tr_71_Template_img_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var dept_r18 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.deleteDept(dept_r18._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dept_r18 = ctx.$implicit;
          var i_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dept_r18 == null ? null : dept_r18.dept_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, dept_r18 == null ? null : dept_r18.creationDate, "dd/MM/yyyy"));
        }
      }

      function DeptComponent_ng_template_72_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mainDept_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mainDept_r32 == null ? null : mainDept_r32.mainDeptName);
        }
      }

      function DeptComponent_ng_template_72_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DeptComponent_ng_template_72_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeptComponent_ng_template_72_div_17_div_1_Template, 2, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.errors.required);
        }
      }

      function DeptComponent_ng_template_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_ng_template_72_Template_button_click_3_listener() {
            var d_r24 = ctx.dismiss;
            return d_r24("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_72_Template_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.selectedObj.mainDeptName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "-Select-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DeptComponent_ng_template_72_option_16_Template, 2, 1, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DeptComponent_ng_template_72_div_17_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Designation Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_72_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.selectedObj.dept_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Super Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_72_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.selectedObj.isSuperAdmin = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_72_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.selectedObj.isAdmin = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ticket Allocator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_72_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.selectedObj.ticketAllocator = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_72_Template_input_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.selectedObj.isUser = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_ng_template_72_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var c_r23 = ctx.close;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r23(ctx_r42.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedObj.mainDeptName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.mainDeptNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedObj.dept_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedObj.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedObj.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedObj.ticketAllocator);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedObj.isUser);
        }
      }

      function DeptComponent_ng_template_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_ng_template_74_Template_button_click_3_listener() {
            var d_r44 = ctx.dismiss;
            return d_r44("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_ng_template_74_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.selectedObj1.mainDeptName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_ng_template_74_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var c_r43 = ctx.close;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r43(ctx_r48.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.selectedObj1.mainDeptName);
        }
      }

      var DeptComponent = /*#__PURE__*/function () {
        function DeptComponent(router, baseService, config, modalService) {
          _classCallCheck(this, DeptComponent);

          this.router = router;
          this.baseService = baseService;
          this.modalService = modalService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.dept_name_edit = '';
          this.tableStatus = true;
          this.dept = {};
          this.closeResult = '';
          this.convertedObj = '';
          this.sel = false;
          this.selectedObj = {};
          this.selectedObj1 = {};
          this.getMainDept();
          this.getDept();
        }

        _createClass(DeptComponent, [{
          key: "formSubmit",
          value: function formSubmit() {
            var _this5 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/department/add_dept', this.dept, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }).then(function () {
                  location.reload();
                });
              } else if (_this5.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          } /////////Get Main Dept

        }, {
          key: "getMainDept",
          value: function getMainDept() {
            var _this6 = this;

            console.log("Dept");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/mainDept/allMainDept', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this6.mainDeptNames = response.data.data;
              } else if (_this6.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDept",
          value: function getDept() {
            var _this7 = this;

            console.log("Dept");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/department/get_dept', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this7.deptNames = response.data.data;
                console.log(_this7.deptNames);
                console.log(response.data);

                if (_this7.tableStatus) {
                  _this7.dtTrigger.next();

                  _this7.tableStatus = false;
                }
              } else if (_this7.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this8 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this8.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(_this8.baseService.baseUrl + 'secure/department/update_dept/' + result._id, result, {
                headers: {
                  'x-auth': _this8.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });

                  _this8.getDept();
                } else if (_this8.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this8.closeResult = "Dismissed ".concat(_this8.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          } /////////Main Dept

        }, {
          key: "openDept",
          value: function openDept(content) {
            var _this9 = this;

            // console.log(selObj);
            // this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this9.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_this9.baseService.baseUrl + 'secure/mainDept/addMainDept', _this9.selectedObj1, {
                headers: {
                  'x-auth': _this9.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });

                  _this9.getMainDept();
                } else if (_this9.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this9.closeResult = "Dismissed ".concat(_this9.getDismissReason(reason));
            });
          }
        }, {
          key: "deleteDept",
          value: function deleteDept(id) {
            var _this10 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](this.baseService.baseUrl + 'secure/department/delete_dept/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this10.getDept();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "convert",
          value: function convert(objArray) {
            // console.log(objArray);
            this.sel = true;
            this.convertedObj = JSON.stringify(objArray, null, 2);
          }
        }, {
          key: "onError",
          value: function onError(err) {
            console.log(err);
            this.convertedObj = err; //  this.toaster.error(err)
          }
        }, {
          key: "save",
          value: function save() {
            var finalObj = JSON.parse(this.convertedObj);
            console.log(finalObj);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/department/csv', finalObj, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                //  this.toaster.success(response.data.message)
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              } else {
                // this.toaster.error(response.data.message)
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              // handle error
              console.log(error);
            })["finally"](function () {// always executed
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10
            };
          }
        }]);

        return DeptComponent;
      }();

      DeptComponent.ɵfac = function DeptComponent_Factory(t) {
        return new (t || DeptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      DeptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeptComponent,
        selectors: [["app-dept"]],
        decls: 76,
        vars: 14,
        consts: [[1, "container"], [1, "btn", "btn-warning", 2, "float", "right", "margin-bottom", "5px", 3, "click"], [1, "card", "col-md-6", "float-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["deptForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-12", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-6", "col-sm-12", "mb-3"], ["name", "mainDeptName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mainDeptName", "ngModel"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "name", "dept_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["dept_name", "ngModel"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-4", "col-form-label", "text-sm-right"], [1, "col-md-4", "col-sm-4", "mb-3"], ["type", "checkbox", "name", "isSuperAdmin", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["isSuperAdmin", "ngModel"], ["type", "checkbox", "name", "isAdmin", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["isAdmin", "ngModel"], ["type", "checkbox", "name", "ticketAllocator", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["ticketAllocator", "ngModel"], ["type", "checkbox", "name", "isUser", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["isUser", "ngModel"], [1, "row", "mb-2"], [1, "col-md-12"], [1, "btn", "btn-primary", 2, "margin-left", "40%", 3, "disabled"], [1, "row"], [1, "col-md-8", "mb-2"], [3, "onConvert", "onFail"], [1, "col-md-4"], [1, "btn", "btn-primary", 2, "margin-left", "40%", 3, "disabled", "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], ["content", ""], ["contentOne", ""], [1, "form-text", "text-danger"], [4, "ngIf"], ["src", "assets/images/icon/edit.png", "height", "30px", 1, "switchbtn", 3, "click"], ["src", "assets/images/icon/delete.png", "height", "30px", 1, "switchbtn", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["for", "normal-input-1", 1, "col-md-12", "col-sm-12", "col-form-label", "col-form-label-sm", "text-sm-left"], [1, "col-md-12", "col-sm-12", "mb-3"], [1, "form-group", "form-row", "mb-2"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "dept_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "text", "name", "mainDeptName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"]],
        template: function DeptComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);

              return ctx.openDept(_r13);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DeptComponent_Template_form_ngSubmit_5_listener() {
              return ctx.formSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Department Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_Template_select_ngModelChange_11_listener($event) {
              return ctx.dept.mainDeptName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-Select-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DeptComponent_option_15_Template, 2, 1, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DeptComponent_div_16_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Designation Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.dept.dept_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DeptComponent_div_23_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Super Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.dept.isSuperAdmin = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.dept.isAdmin = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ticket Allocator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.dept.ticketAllocator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeptComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.dept.isUser = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "Ngx-CSVtoJSON", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onConvert", function DeptComponent_Template_Ngx_CSVtoJSON_onConvert_54_listener($event) {
              return ctx.convert($event);
            })("onFail", function DeptComponent_Template_Ngx_CSVtoJSON_onFail_54_listener($event) {
              return ctx.onError($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeptComponent_Template_button_click_56_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "thead", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " S NO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Department Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Create Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DeptComponent_tr_71_Template, 11, 6, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, DeptComponent_ng_template_72_Template, 49, 8, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DeptComponent_ng_template_74_Template, 15, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dept.mainDeptName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dept.dept_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dept.isSuperAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dept.isAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dept.ticketAllocator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dept.isUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.sel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deptNames);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], ngx_csvto_json__WEBPACK_IMPORTED_MODULE_9__["NgxCSVtoJSONComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: [".col-sm-4[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRlcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxxQkFBb0I7QUFBckIiLCJmaWxlIjoiZGVwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtc20tNFxyXG57XHJcbiB3aWR0aDogNTAlIWltcG9ydGFudDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeptComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dept',
            templateUrl: './dept.component.html',
            styleUrls: ['./dept.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H95k":
    /*!******************************************************************!*\
      !*** ./src/app/content/pages/master-data/tags/tags.component.ts ***!
      \******************************************************************/

    /*! exports provided: TagsComponent */

    /***/
    function H95k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsComponent", function () {
        return TagsComponent;
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


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function TagsComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tag Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TagsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagsComponent_div_11_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function TagsComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_tr_29_Template_img_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var tag_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx_r9.open(_r4, tag_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_tr_29_Template_img_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var tag_r7 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.deleteDept(tag_r7._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r7 == null ? null : tag_r7.tag_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, tag_r7 == null ? null : tag_r7.creationDate, "dd/MM/yyyy"));
        }
      }

      function TagsComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_ng_template_30_Template_button_click_3_listener() {
            var d_r13 = ctx.dismiss;
            return d_r13("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TagsComponent_ng_template_30_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectedObj.tag_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_ng_template_30_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var c_r12 = ctx.close;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r12(ctx_r17.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedObj.tag_name);
        }
      }

      var TagsComponent = /*#__PURE__*/function () {
        function TagsComponent(router, baseService, config, modalService) {
          _classCallCheck(this, TagsComponent);

          this.router = router;
          this.baseService = baseService;
          this.modalService = modalService;
          this.dtOptions = {};
          this.closeResult = '';
          this.selectedObj = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.tag = {};
          this.tagNames = [];
        }

        _createClass(TagsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10
            };
            this.getTags();
          }
        }, {
          key: "formSubmit",
          value: function formSubmit(form) {
            var _this11 = this;

            console.log(this.baseService.authToken);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/tags/addTag_Name', this.tag, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload();  });  //

                form.resetForm('');

                _this11.getTags();
              } else if (_this11.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getTags",
          value: function getTags() {
            var _this12 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/tags/allTags', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                _this12.tagNames = response.data.data;
                console.log(_this12.tagNames);
              } else if (_this12.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this13 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this13.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(_this13.baseService.baseUrl + 'secure/tags/update_tags/' + result._id, result, {
                headers: {
                  'x-auth': _this13.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this13.getTags();
                } else if (_this13.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this13.closeResult = "Dismissed ".concat(_this13.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteDept",
          value: function deleteDept(id) {
            var _this14 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](this.baseService.baseUrl + 'secure/tags/delete_tags/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this14.getTags();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return TagsComponent;
      }();

      TagsComponent.ɵfac = function TagsComponent_Factory(t) {
        return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TagsComponent,
        selectors: [["app-tags"]],
        decls: 32,
        vars: 5,
        consts: [[1, "container"], [1, "card", "col-md-6", "float-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["TagForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-4", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-6", "col-sm-8", "mb-3"], ["type", "text", "name", "tag_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tag_name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "btn", "btn-primary", "offset-4"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "form-text", "text-danger"], [4, "ngIf"], ["src", "assets/images/icon/edit.png", "height", "30px", 1, "switchbtn", 3, "click"], ["src", "assets/images/icon/delete.png", "height", "30px", 1, "switchbtn", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "tag_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function TagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TagsComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.formSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tag Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TagsComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.tag.tag_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TagsComponent_div_11_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " S NO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Tag Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Create Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TagsComponent_tr_29_Template, 11, 6, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TagsComponent_ng_template_30_Template, 15, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tag.tag_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagNames);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tags',
            templateUrl: './tags.component.html',
            styleUrls: ['./tags.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KFCd":
    /*!**********************************************************************!*\
      !*** ./src/app/content/pages/master-data/status/status.component.ts ***!
      \**********************************************************************/

    /*! exports provided: StatusComponent */

    /***/
    function KFCd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusComponent", function () {
        return StatusComponent;
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


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function StatusComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function StatusComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatusComponent_div_11_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function StatusComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusComponent_tr_29_Template_img_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var status_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx_r9.open(_r4, status_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusComponent_tr_29_Template_img_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var status_r7 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.deleteDept(status_r7._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r7 == null ? null : status_r7.status_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, status_r7 == null ? null : status_r7.creationDate, "dd/MM/yyyy"));
        }
      }

      function StatusComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusComponent_ng_template_30_Template_button_click_3_listener() {
            var d_r13 = ctx.dismiss;
            return d_r13("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StatusComponent_ng_template_30_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectedObj.status_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusComponent_ng_template_30_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var c_r12 = ctx.close;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r12(ctx_r17.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedObj.status_name);
        }
      }

      var StatusComponent = /*#__PURE__*/function () {
        function StatusComponent(router, baseService, config, modalService) {
          _classCallCheck(this, StatusComponent);

          this.router = router;
          this.baseService = baseService;
          this.modalService = modalService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.status = {};
          this.tableStatus = true;
          this.closeResult = '';
          this.selectedObj = {};
          this.getStatusNames();
        }

        _createClass(StatusComponent, [{
          key: "formSubmit",
          value: function formSubmit(form) {
            var _this15 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/status/addStatus', this.status, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload(); });

                form.resetForm('');
              } else if (_this15.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getStatusNames",
          value: function getStatusNames() {
            var _this16 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/status/allStatus', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                _this16.statusNames = response.data.data;
                console.log(_this16.statusNames);
                console.log(response.data);

                if (_this16.tableStatus) {
                  _this16.tableStatus = false;

                  _this16.dtTrigger.next();
                }
              } else if (_this16.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this17 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this17.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(_this17.baseService.baseUrl + 'secure/status/update_status/' + result._id, result, {
                headers: {
                  'x-auth': _this17.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this17.getStatusNames();
                } else if (_this17.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteDept",
          value: function deleteDept(id) {
            var _this18 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](this.baseService.baseUrl + 'secure/status/delete_status/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this18.getStatusNames();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatusComponent;
      }();

      StatusComponent.ɵfac = function StatusComponent_Factory(t) {
        return new (t || StatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      StatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatusComponent,
        selectors: [["app-status"]],
        decls: 32,
        vars: 6,
        consts: [[1, "container"], [1, "card", "col-md-6", "float-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["statusForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-4", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-6", "col-sm-8", "mb-3"], ["type", "text", "name", "status_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["status_name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "btn", "btn-primary", "offset-4", 3, "disabled"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "form-text", "text-danger"], [4, "ngIf"], ["src", "assets/images/icon/edit.png", "height", "30px", 1, "switchbtn", 3, "click"], ["src", "assets/images/icon/delete.png", "height", "30px", 1, "switchbtn", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "status_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function StatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StatusComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.formSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.status.status_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StatusComponent_div_11_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " S NO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Status Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Create Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, StatusComponent_tr_29_Template, 11, 6, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StatusComponent_ng_template_30_Template, 15, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status.status_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusNames);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-status',
            templateUrl: './status.component.html',
            styleUrls: ['./status.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "W2F0":
    /*!**************************************************************************!*\
      !*** ./src/app/content/pages/master-data/sign-out/sign-out.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SignOutComponent */

    /***/
    function W2F0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignOutComponent", function () {
        return SignOutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SignOutComponent = /*#__PURE__*/function () {
        function SignOutComponent(router) {
          _classCallCheck(this, SignOutComponent);

          this.router = router;

          if (confirm("Do You Want Sign Out")) {
            window.localStorage.clear();
            this.router.navigate(['/signin']);
          } else {
            this.router.navigate(['/ticket/ticket-list']);
          }
        }

        _createClass(SignOutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignOutComponent;
      }();

      SignOutComponent.ɵfac = function SignOutComponent_Factory(t) {
        return new (t || SignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SignOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignOutComponent,
        selectors: [["app-sign-out"]],
        decls: 2,
        vars: 0,
        template: function SignOutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign-out works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignOutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-out',
            templateUrl: './sign-out.component.html',
            styleUrls: ['./sign-out.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "aWjE":
    /*!********************************************************************************************!*\
      !*** ./src/app/content/pages/master-data/inactive-userlist/inactive-userlist.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: InactiveUserlistComponent */

    /***/
    function aWjE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InactiveUserlistComponent", function () {
        return InactiveUserlistComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");

      function InactiveUserlistComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InactiveUserlistComponent_div_9_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var data_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.changeStatus(data_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InactiveUserlistComponent_div_9_Template_img_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var data_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.editUser(data_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InactiveUserlistComponent_div_9_Template_img_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var data_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.deleteUser(data_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "switch", i_r2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r1.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "switch", i_r2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.email);
        }
      }

      var _c0 = function _c0(a1) {
        return {
          itemsPerPage: 10,
          currentPage: a1
        };
      };

      var InactiveUserlistComponent = /*#__PURE__*/function () {
        function InactiveUserlistComponent(router, http, baseService) {
          _classCallCheck(this, InactiveUserlistComponent);

          this.router = router;
          this.http = http;
          this.baseService = baseService;
          this.status = false;
          this.p = 1;
        }

        _createClass(InactiveUserlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserList();
            this.getScreen();
          }
        }, {
          key: "getScreen",
          value: function getScreen() {
            $(window).resize(function () {
              console.log(window.screen.width + "  " + window.screen.height);

              if (window.screen.width >= 360 || window.screen.height > 640) {
                this.status = false;
                console.log("If Block");
              } else {
                this.status = true;
                console.log("else Block");
              }
            });
          }
        }, {
          key: "getUserList",
          value: function getUserList() {
            var _this19 = this;

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.baseService.baseUrl + 'secure/users/inactive-user_data', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                _this19.userListData = response.data.data;
                _this19.temp = _this19.userListData;
              } else if (_this19.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(data) {
            var _this20 = this;

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.baseService.baseUrl + 'secure/users/user_status', {
              _id: data._id,
              isActive: !data.isActive
            }, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload(); });

                _this20.getUserList();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          } // deleteUser(id)
          // {
          //   axios.delete(this.baseService.baseUrl + 'secure/users/user_status'+id,{
          //     headers: {
          //       'x-auth' : this.baseService.authToken
          //     },
          //   })
          //   .then(response => {        
          //     console.log(response)
          //     if (response.data.status) {
          //       Swal.fire({
          //         position: 'center',
          //         icon: 'success',
          //         title: response.data["message"],
          //         showConfirmButton: false,
          //         timer: 3000
          //     }).then(() => {
          //       location.reload(); });
          //     }
          //     else{
          //       Swal.fire({
          //         position: 'center',
          //         icon: 'error',
          //         title: response.data["message"],
          //         showConfirmButton: false,
          //         timer: 3000
          //     })
          //      }
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })
          // }

        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this21 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](this.baseService.baseUrl + 'secure/users/user_data/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this21.getUserList();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          } //////////Searching

        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            console.log(event);
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.userListData = temp; // Whenever the filter changes, always go back to the first page
          }
        }, {
          key: "pageChange",
          value: function pageChange(event) {
            console.log("pageChanged");
          }
        }, {
          key: "editUser",
          value: function editUser(id) {
            this.router.navigate(['/master/user-edit'], {
              queryParams: {
                id: id
              }
            });
          }
        }]);

        return InactiveUserlistComponent;
      }();

      InactiveUserlistComponent.ɵfac = function InactiveUserlistComponent_Factory(t) {
        return new (t || InactiveUserlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_5__["BaseServiceService"]));
      };

      InactiveUserlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InactiveUserlistComponent,
        selectors: [["app-inactive-userlist"]],
        decls: 13,
        vars: 6,
        consts: [[1, "row", "mb-4"], [1, "col-md-12", "text-center", "mt-2"], [1, "heading"], [1, "col-md-2", "col-sm-12", "ml-4", "mr-4"], ["type", "text", "placeholder", "Searching...", 1, "form-control", "form-control-sm", 3, "keyup"], [1, "row"], [1, "col-md-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "col-md-12", "col-sm-12", "col-xl-12"], [3, "pageChange"], [1, "card"], [1, "col-md-6"], [1, "name"], [1, "switchbtn"], [1, "switchToggle"], ["type", "checkbox", 3, "checked", "id", "change"], [3, "for"], [1, "row", "d-flex"], [1, "col-md-8", "col-sm-8"], [1, "m-2"], [1, "col-md-3", "col-sm-3"], ["src", "https://ticket-management.happimobiles.com/assets/images/icon/edit.png", "height", "30px", 3, "click"], ["src", "https://ticket-management.happimobiles.com/assets/images/icon/delete.png", "height", "30px", 3, "click"]],
        template: function InactiveUserlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IN ACTIVE USER DETAILS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InactiveUserlistComponent_Template_input_keyup_6_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InactiveUserlistComponent_div_9_Template, 17, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pagination-controls", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function InactiveUserlistComponent_Template_pagination_controls_pageChange_12_listener($event) {
              return ctx.p = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 1, ctx.userListData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.p)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.7rem !important;\n}\n\n.custom-switch[_ngcontent-%COMP%] {\n  padding-left: 3.55rem !important;\n}\n\n.carddata[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  width: 2.75rem !important;\n}\n\n.custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #fa8c16 !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  background-color: #fa8c16;\n  padding: 2%;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.col-md-12[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.outerDivFull[_ngcontent-%COMP%] {\n  margin: 50px;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  position: absolute;\n}\n\n.switchToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 59px;\n  max-width: 70px;\n  height: 27px;\n  background: #d1d1d1;\n  display: block;\n  border-radius: 100px;\n  position: relative;\n}\n\n.switchToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  background: #fff;\n  border-radius: 90px;\n  transition: 0.3s;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  background: #fa8c16;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: 'No';\n  position: absolute;\n  top: 4px;\n  left: 30px;\n  width: 26px;\n  height: 26px;\n  border-radius: 90px;\n  transition: 0.3s;\n  text-indent: 0;\n  color: #fff;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: 'Yes';\n  position: absolute;\n  top: 5px;\n  left: 10px;\n  width: 26px;\n  height: 26px;\n  border-radius: 90px;\n  transition: 0.3s;\n  text-indent: 0;\n  color: #fff;\n}\n\n.switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after, .switchToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  left: calc(100% - 2px);\n  transform: translateX(-100%);\n}\n\n.switchToggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active:after {\n  width: 60px;\n}\n\n.toggle-switchArea[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-left: 10% !important;\n  font-size: 17px;\n}\n\n.switchbtn[_ngcontent-%COMP%] {\n  margin-left: 50% !important;\n  margin-top: 3% !important;\n}\n\n.col-md-6[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.col-md-8[_ngcontent-%COMP%] {\n  width: 70% !important;\n}\n\n.col-md-3[_ngcontent-%COMP%] {\n  width: 30% !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluYWN0aXZlLXVzZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksaUNBQWdDO0FBRHBDOztBQUdBO0VBQ0ksZ0NBQStCO0FBQW5DOztBQUVBO0VBQ0ksZUFBZTtBQUNuQjs7QUFDQTtFQUNJLHlCQUF3QjtBQUU1Qjs7QUFDQTtFQUNJLG9DQUFtQztBQUV2Qzs7QUFBQTtFQUVJLHlCQUF3QjtFQUN4QixXQUFVO0FBRWQ7O0FBQUE7RUFDSSxZQUFXO0FBR2Y7O0FBQUE7RUFFSSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUVuQjs7QUFDQTtFQUFnQixZQUFXO0FBRzNCOztBQURBO0VBQW1DLFNBQVM7RUFBRSxRQUFRO0VBQUUsa0JBQWtCO0VBQUUsa0JBQWtCO0FBUTlGOztBQVBBO0VBQXFCLGVBQWU7RUFBRSxvQkFBb0I7RUFBRSxXQUFXO0VBQUUsZUFBZTtFQUFFLFlBQVk7RUFBRSxtQkFBbUI7RUFBRSxjQUFjO0VBQUUsb0JBQW9CO0VBQUUsa0JBQWtCO0FBbUJyTDs7QUFsQkE7RUFBMkIsV0FBVztFQUFFLGtCQUFrQjtFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQUUsV0FBVztFQUFFLFlBQVk7RUFBRSxnQkFBZ0I7RUFBRSxtQkFBbUI7RUFBRSxnQkFBZ0I7QUE4Qm5LOztBQTdCQTtFQUFtRixtQkFBa0I7QUFpQ3JHOztBQWhDQTtFQUFnRixhQUFhO0VBQUUsa0JBQWtCO0VBQUUsUUFBUTtFQUFFLFVBQVU7RUFBRSxXQUFXO0VBQUUsWUFBWTtFQUFFLG1CQUFtQjtFQUFFLGdCQUFnQjtFQUFFLGNBQWM7RUFBRSxXQUFXO0FBNkN0Tzs7QUE1Q0E7RUFBZ0csY0FBYztFQUFFLGtCQUFrQjtFQUFFLFFBQVE7RUFBRSxVQUFVO0VBQUUsV0FBVztFQUFFLFlBQVk7RUFBRSxtQkFBbUI7RUFBRSxnQkFBZ0I7RUFBRSxjQUFjO0VBQUUsV0FBVztBQXlEdlA7O0FBeERBO0VBQThGLHNCQUFzQjtFQUFFLDRCQUE0QjtBQTZEbEo7O0FBNURBO0VBQWtDLFdBQVc7QUFnRTdDOztBQS9EQTtFQUFxQixxQkFBcUI7QUFtRTFDOztBQWhFQTtFQUVJLDJCQUEwQjtFQUUxQixlQUFlO0FBaUVuQjs7QUEvREE7RUFFSSwyQkFBMEI7RUFFMUIseUJBQXdCO0FBZ0U1Qjs7QUE3REE7RUFFSSxxQkFBb0I7QUErRHhCOztBQTVEQTtFQUVJLHFCQUFvQjtBQThEeEI7O0FBNURBO0VBRUkscUJBQW9CO0FBOER4Qjs7QUEzREE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osNEJBQTJCO0VBQzNCLDZCQUE0QjtBQThEaEMiLCJmaWxlIjoiaW5hY3RpdmUtdXNlcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuXHJcbntcclxuICAgIC8vIGZvbnQtc2l6ZTogMHJlbSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjZyZW0gMS43cmVtIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9tLXN3aXRjaCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNTVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5jYXJkZGF0YXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMi43NXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhOGMxNiFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5oZWFkaW5nXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZhOGMxNjtcclxuICAgIHBhZGRpbmc6MiU7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmNvbC1tZC0xMlxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ub3V0ZXJEaXZGdWxsIHsgbWFyZ2luOjUwcHg7IH0gXHJcblxyXG4uc3dpdGNoVG9nZ2xlIGlucHV0W3R5cGU9Y2hlY2tib3hde2hlaWdodDogMDsgd2lkdGg6IDA7IHZpc2liaWxpdHk6IGhpZGRlbjsgcG9zaXRpb246IGFic29sdXRlOyB9XHJcbi5zd2l0Y2hUb2dnbGUgbGFiZWwge2N1cnNvcjogcG9pbnRlcjsgdGV4dC1pbmRlbnQ6IC05OTk5cHg7IHdpZHRoOiA1OXB4OyBtYXgtd2lkdGg6IDcwcHg7IGhlaWdodDogMjdweDsgYmFja2dyb3VuZDogI2QxZDFkMTsgZGlzcGxheTogYmxvY2s7IGJvcmRlci1yYWRpdXM6IDEwMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuLnN3aXRjaFRvZ2dsZSBsYWJlbDphZnRlciB7Y29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAycHg7IGxlZnQ6IDJweDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogOTBweDsgdHJhbnNpdGlvbjogMC4zczsgfVxyXG4uc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBsYWJlbCwgLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgaW5wdXQgKyBsYWJlbCAge2JhY2tncm91bmQ6I2ZhOGMxNjsgfVxyXG4uc3dpdGNoVG9nZ2xlIGlucHV0ICsgbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0ICsgaW5wdXQgKyBsYWJlbDpiZWZvcmUge2NvbnRlbnQ6ICdObyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA0cHg7IGxlZnQ6IDMwcHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgfVxyXG4uc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsIC5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGlucHV0ICsgbGFiZWw6YmVmb3JlIHtjb250ZW50OiAnWWVzJzsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDVweDsgbGVmdDogMTBweDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgYm9yZGVyLXJhZGl1czogOTBweDsgdHJhbnNpdGlvbjogMC4zczsgdGV4dC1pbmRlbnQ6IDA7IGNvbG9yOiAjZmZmOyB9XHJcbi5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyLCAuc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpbnB1dCArIGxhYmVsOmFmdGVyIHtsZWZ0OiBjYWxjKDEwMCUgLSAycHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XHJcbi5zd2l0Y2hUb2dnbGUgbGFiZWw6YWN0aXZlOmFmdGVyIHt3aWR0aDogNjBweDsgfSBcclxuLnRvZ2dsZS1zd2l0Y2hBcmVhIHsgbWFyZ2luOiAxMHB4IDAgMTBweCAwOyB9XHJcblxyXG5cclxuLm5hbWVcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW46IDMlIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uc3dpdGNoYnRuXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCUhaW1wb3J0YW50O1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMlIWltcG9ydGFudDtcclxuICAgXHJcbn1cclxuLmNvbC1tZC02XHJcbntcclxuICAgIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLW1kLTggXHJcbntcclxuICAgIHdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG59XHJcbi5jb2wtbWQtM1xyXG57XHJcbiAgICB3aWR0aDogMzAlIWltcG9ydGFudDsgICBcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHghaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InactiveUserlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inactive-userlist',
            templateUrl: './inactive-userlist.component.html',
            styleUrls: ['./inactive-userlist.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_5__["BaseServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iHMN":
    /*!********************************************************************!*\
      !*** ./src/app/content/pages/master-data/store/store.component.ts ***!
      \********************************************************************/

    /*! exports provided: StoreComponent */

    /***/
    function iHMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
        return StoreComponent;
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


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function StoreComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Store Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function StoreComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreComponent_div_11_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function StoreComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_tr_29_Template_img_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var store_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx_r9.open(_r4, store_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_tr_29_Template_img_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var store_r7 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.deleteDept(store_r7._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var store_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](store_r7 == null ? null : store_r7.store_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, store_r7 == null ? null : store_r7.creationDate, "dd/MM/yyyy"));
        }
      }

      function StoreComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_ng_template_30_Template_button_click_3_listener() {
            var d_r13 = ctx.dismiss;
            return d_r13("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Store Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StoreComponent_ng_template_30_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectedObj.store_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_ng_template_30_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var c_r12 = ctx.close;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r12(ctx_r17.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedObj.store_name);
        }
      }

      var StoreComponent = /*#__PURE__*/function () {
        function StoreComponent(router, baseService, config, modalService) {
          _classCallCheck(this, StoreComponent);

          this.router = router;
          this.baseService = baseService;
          this.modalService = modalService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.store = {};
          this.tableStatus = true;
          this.closeResult = '';
          this.selectedObj = {};
          this.getStoreNames();
        }

        _createClass(StoreComponent, [{
          key: "formSubmit",
          value: function formSubmit(form) {
            var _this22 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/store/addStore', this.store, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload(); }); 

                form.resetForm("");

                _this22.getStoreNames();
              } else if (_this22.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getStoreNames",
          value: function getStoreNames() {
            var _this23 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/store/allStore', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                _this23.storeNames = response.data.data;
                console.log(_this23.storeNames);
                console.log(response.data);

                if (_this23.tableStatus) {
                  _this23.dtTrigger.next();

                  _this23.tableStatus = false;
                }
              } else if (_this23.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this24 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this24.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(_this24.baseService.baseUrl + 'secure/store/update_store/' + result._id, result, {
                headers: {
                  'x-auth': _this24.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  // location.reload(); });

                  _this24.getStoreNames();
                } else if (_this24.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this24.closeResult = "Dismissed ".concat(_this24.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteDept",
          value: function deleteDept(id) {
            var _this25 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](this.baseService.baseUrl + 'secure/store/delete_store/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this25.getStoreNames();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StoreComponent;
      }();

      StoreComponent.ɵfac = function StoreComponent_Factory(t) {
        return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StoreComponent,
        selectors: [["app-store"]],
        decls: 32,
        vars: 6,
        consts: [[1, "container"], [1, "card", "col-md-6", "float-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["statusForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-4", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-6", "col-sm-8", "mb-3"], ["type", "text", "name", "store_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["store_name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "btn", "btn-primary", "offset-4", 3, "disabled"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "form-text", "text-danger"], [4, "ngIf"], ["src", "assets/images/icon/edit.png", "height", "30px", 1, "switchbtn", 3, "click"], ["src", "assets/images/icon/delete.png", "height", "30px", 1, "switchbtn", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "store_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function StoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StoreComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.formSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Store Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StoreComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.store.store_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StoreComponent_div_11_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " S NO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Store Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Create Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, StoreComponent_tr_29_Template, 11, 6, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StoreComponent_ng_template_30_Template, 15, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.store.store_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.storeNames);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-store',
            templateUrl: './store.component.html',
            styleUrls: ['./store.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jzxS":
    /*!*****************************************************************!*\
      !*** ./src/app/content/pages/master-data/master-data.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MasterDataModule */

    /***/
    function jzxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasterDataModule", function () {
        return MasterDataModule;
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


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      "e/mZ");
      /* harmony import */


      var _tags_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tags/tags.component */
      "H95k");
      /* harmony import */


      var _status_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./status/status.component */
      "KFCd");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _assign_assign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./assign/assign.component */
      "qmuJ");
      /* harmony import */


      var _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./issues/issues.component */
      "zpEz");
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user/user.component */
      "pQqd");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _dept_dept_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dept/dept.component */
      "6sVT");
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      "1GON");
      /* harmony import */


      var _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./sign-out/sign-out.component */
      "W2F0");
      /* harmony import */


      var _store_store_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./store/store.component */
      "iHMN");
      /* harmony import */


      var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./edit-user/edit-user.component */
      "yVG7");
      /* harmony import */


      var ngx_csvto_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-csvto-json */
      "yvBa");
      /* harmony import */


      var _inactive_userlist_inactive_userlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./inactive-userlist/inactive-userlist.component */
      "aWjE");

      var appsRoutes = [{
        path: 'tag-entry',
        component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"]
      }, {
        path: 'status-entry',
        component: _status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"]
      }, {
        path: 'assign-entry',
        component: _assign_assign_component__WEBPACK_IMPORTED_MODULE_8__["AssignComponent"]
      }, {
        path: 'department-entry',
        component: _dept_dept_component__WEBPACK_IMPORTED_MODULE_12__["DeptComponent"]
      }, {
        path: 'issue-entry',
        component: _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"]
      }, {
        path: 'add-user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"]
      }, {
        path: 'add-store',
        component: _store_store_component__WEBPACK_IMPORTED_MODULE_15__["StoreComponent"]
      }, {
        path: 'user-list',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"]
      }, {
        path: 'inactive-users',
        component: _inactive_userlist_inactive_userlist_component__WEBPACK_IMPORTED_MODULE_18__["InactiveUserlistComponent"]
      }, {
        path: 'user-edit',
        component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_16__["EditUserComponent"]
      }, {
        path: 'signout',
        component: _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"]
      }];

      var MasterDataModule = function MasterDataModule() {
        _classCallCheck(this, MasterDataModule);
      };

      MasterDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MasterDataModule
      });
      MasterDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MasterDataModule_Factory(t) {
          return new (t || MasterDataModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["AngularMultiSelectModule"], ngx_csvto_json__WEBPACK_IMPORTED_MODULE_17__["NgxCSVtoJSONModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterDataModule, {
          declarations: [_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"], _assign_assign_component__WEBPACK_IMPORTED_MODULE_8__["AssignComponent"], _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _dept_dept_component__WEBPACK_IMPORTED_MODULE_12__["DeptComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"], _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_15__["StoreComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_16__["EditUserComponent"], _inactive_userlist_inactive_userlist_component__WEBPACK_IMPORTED_MODULE_18__["InactiveUserlistComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["AngularMultiSelectModule"], ngx_csvto_json__WEBPACK_IMPORTED_MODULE_17__["NgxCSVtoJSONModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"], _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_15__["StoreComponent"], _assign_assign_component__WEBPACK_IMPORTED_MODULE_8__["AssignComponent"], _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"], _dept_dept_component__WEBPACK_IMPORTED_MODULE_12__["DeptComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"], _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_16__["EditUserComponent"], _inactive_userlist_inactive_userlist_component__WEBPACK_IMPORTED_MODULE_18__["InactiveUserlistComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDataModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"], _assign_assign_component__WEBPACK_IMPORTED_MODULE_8__["AssignComponent"], _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _dept_dept_component__WEBPACK_IMPORTED_MODULE_12__["DeptComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"], _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_15__["StoreComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_16__["EditUserComponent"], _inactive_userlist_inactive_userlist_component__WEBPACK_IMPORTED_MODULE_18__["InactiveUserlistComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["AngularMultiSelectModule"], ngx_csvto_json__WEBPACK_IMPORTED_MODULE_17__["NgxCSVtoJSONModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsRoutes)],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"], _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_15__["StoreComponent"], _assign_assign_component__WEBPACK_IMPORTED_MODULE_8__["AssignComponent"], _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"], _dept_dept_component__WEBPACK_IMPORTED_MODULE_12__["DeptComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"], _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_14__["SignOutComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_16__["EditUserComponent"], _inactive_userlist_inactive_userlist_component__WEBPACK_IMPORTED_MODULE_18__["InactiveUserlistComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "pQqd":
    /*!******************************************************************!*\
      !*** ./src/app/content/pages/master-data/user/user.component.ts ***!
      \******************************************************************/

    /*! exports provided: UserComponent */

    /***/
    function pQqd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_csvto_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-csvto-json */
      "yvBa");
      /* harmony import */


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      "e/mZ");

      function UserComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "Ngx-CSVtoJSON", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onConvert", function UserComponent_div_10_Template_Ngx_CSVtoJSON_onConvert_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.convert($event);
          })("onFail", function UserComponent_div_10_Template_Ngx_CSVtoJSON_onFail_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onError($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_10_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.sel);
        }
      }

      function UserComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_20_div_1_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.required);
        }
      }

      function UserComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Type is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_35_div_1_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
        }
      }

      function UserComponent_div_36_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dept_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", dept_r26._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dept_r26.dept_name);
        }
      }

      function UserComponent_div_36_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_div_36_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_36_div_7_div_1_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r23.errors.required);
        }
      }

      function UserComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_36_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.newUser.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserComponent_div_36_option_6_Template, 2, 2, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserComponent_div_36_div_7_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.newUser.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.deptNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r23.invalid && (_r23.dirty || _r23.touched));
        }
      }

      function UserComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "angular2-multiselect", 51, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_37_Template_angular2_multiselect_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.formModel.selectedItems = $event;
          })("onSelect", function UserComponent_div_37_Template_angular2_multiselect_onSelect_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.onItemSelect($event);
          })("onDeSelect", function UserComponent_div_37_Template_angular2_multiselect_onDeSelect_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.OnItemDeSelect($event);
          })("onSelectAll", function UserComponent_div_37_Template_angular2_multiselect_onSelectAll_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.onSelectAll($event);
          })("onDeSelectAll", function UserComponent_div_37_Template_angular2_multiselect_onDeSelectAll_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.onDeSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r9.dropdownList)("ngModel", ctx_r9.formModel.selectedItems)("settings", ctx_r9.dropdownSettings);
        }
      }

      function UserComponent_div_44_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_44_div_1_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);
        }
      }

      function UserComponent_div_51_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_51_div_1_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.required);
        }
      }

      function UserComponent_div_58_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_58_div_1_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.required);
        }
      }

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(router, cdRef, baseService) {
          _classCallCheck(this, UserComponent);

          this.router = router;
          this.cdRef = cdRef;
          this.baseService = baseService;
          this.csvStatus = false;
          this.newUser = {
            user_type: "Corporate"
          };
          this.roleStatus = true;
          this.dropdownList = [];
          this.formModel = {
            "selectedItems": []
          };
          this.dropdownSettings = {}; // selectedFiles: FileList;

          this.convertedObj = '';
          this.sel = false;
          this.dropdownSettings = {
            singleSelection: true,
            text: "Select Menu List",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
          };
          this.getDept();
          this.getStore();
        }

        _createClass(UserComponent, [{
          key: "getDept",
          value: function getDept() {
            var _this26 = this;

            console.log("Dept");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/department/get_dept', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this26.deptNames = response.data.data;
                console.log(_this26.deptNames);
                console.log(response.data);
              } else if (_this26.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getStore",
          value: function getStore() {
            var _this27 = this;

            console.log("Store");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/store/allStore', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this27.storeNames = response.data.data;
                var tmp = [];

                for (var i = 0; i < _this27.storeNames.length; i++) {
                  tmp.push({
                    id: _this27.storeNames[i]._id,
                    itemName: _this27.storeNames[i].store_name
                  });
                }

                _this27.dropdownList = tmp;
                console.log("DropDown Data");
                console.log(_this27.dropdownList);
                console.log(_this27.storeNames);
                console.log(response.data);
              } else if (_this27.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "convert",
          value: function convert(objArray) {
            // console.log(objArray);
            this.sel = true;
            this.convertedObj = JSON.stringify(objArray, null, 2);
          }
        }, {
          key: "onError",
          value: function onError(err) {
            console.log(err);
            this.convertedObj = err; //  this.toaster.error(err)
          }
        }, {
          key: "save",
          value: function save() {
            var finalObj = JSON.parse(this.convertedObj);
            console.log(finalObj.store_id);
            console.log(finalObj);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/users/usercsv', finalObj, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                //  this.toaster.success(response.data.message)
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              } else {
                // this.toaster.error(response.data.message)
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              // handle error
              console.log(error);
            })["finally"](function () {// always executed
            });
          }
        }, {
          key: "showCsv",
          value: function showCsv() {
            this.csvStatus = !this.csvStatus;
          }
        }, {
          key: "userTypeData",
          value: function userTypeData(data) {
            if (data == "Store") {
              this.roleStatus = false;
              this.newUser.user_type = "Store"; // this.newUser.role={
              //   isAdmin:false,
              //   isUser:true
              // }
            } else if (data == "Corporate") {
              this.roleStatus = true;
              this.newUser.user_type = "Corporate";
            } else {
              this.dropdownSettings = {
                singleSelection: false,
                text: "Select Menu List",
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                enableSearchFilter: true,
                classes: "myclass custom-class"
              };
              this.newUser.user_type = "Sales";
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.cdRef.detectChanges();
          }
        }, {
          key: "formSubmit",
          value: function formSubmit(form) {
            var _this28 = this;

            this.newUser.store_id = [];

            for (var i = 0; i < this.formModel.selectedItems.length; i++) {
              this.newUser.store_id.push(this.formModel.selectedItems[i].id);
            }

            console.log(this.newUser);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/users/add_User', this.newUser, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload();
                //  });

                form.resetForm("");
              } else if (_this28.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            console.log("on Select Item...");
            console.log(this.formModel.selectedItems); // for(let i=0;i<this.formModel.selectedItems.length;i++)
            // {
            // this.newTicket.tags.push(this.formModel.selectedItems[i].id);
            // }

            console.log("Tag Names"); // this.newTicket.tags.push(this.formModel.selectedItems)
            // console.log(this.formModel.selectedItems);
          }
        }, {
          key: "OnItemDeSelect",
          value: function OnItemDeSelect(item) {
            console.log(item); // console.log(this.formModel.selectedItems);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log("On Select All");
            console.log(this.formModel.selectedItems); // this.tags.push(this.formModel.selectedItems);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_4__["BaseServiceService"]));
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        decls: 70,
        vars: 17,
        consts: [[1, "container"], [1, "usercard"], [1, "card-header", "cheader"], [1, "row"], [1, "col-md-12", "text-center"], [2, "color", "white"], [1, "card-body"], ["type", "checkbox", "name", "csv", 1, "mt-4", "ml-4", "mr-3", 3, "change"], ["class", "row mb-2 ", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-md", "text-sm-right"], [1, "col-md-8", "col-sm-8", "mb-3"], ["type", "text", "name", "name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "col"], [1, "form-group", "m-t-15", "custom-radio-ml", "ml-2"], ["id", "Corporate", "type", "radio", "name", "user_type", "value", "Corporate", "required", "", 3, "ngModel", "ngModelChange", "change"], ["user_type", "ngModel"], ["for", "Corporate", 1, "ml-1"], ["id", "Store", "type", "radio", "name", "user_type", "value", "Store", "required", "", 1, "ml-4", 3, "ngModel", "ngModelChange", "change"], ["for", "Store", 1, "ml-1"], ["id", "Sales", "type", "radio", "name", "user_type", "value", "Sales", "required", "", 1, "ml-4", 3, "ngModel", "ngModelChange", "change"], ["for", "Sales", 1, "ml-1"], ["class", "row", 4, "ngIf"], ["type", "email", "name", "email", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "number", "name", "phone", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], [1, "row", "d-flex"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-2", "col-form-label", "col-form-label-md", "text-sm-right"], ["type", "checkbox", "name", "isActive", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["isActive", "ngModel"], [1, "btn", "btn-primary", "offset-3", 3, "disabled"], ["type", "reset", 1, "btn", "btn-danger", "ml-2"], [1, "row", "mb-2"], [1, "col-md-12"], [1, "col-md-8", "mb-2"], [3, "onConvert", "onFail"], [1, "col-md-4"], [1, "btn", "btn-primary", "offset-4", 3, "disabled", "click"], [1, "form-text", "text-danger"], [4, "ngIf"], ["name", "role", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "selectedItems", 3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["selectedItems", "ngModel"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New User ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserComponent_Template_input_change_8_listener() {
              return ctx.showCsv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Csv Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserComponent_div_10_Template, 8, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

              return ctx.formSubmit(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.newUser.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserComponent_div_20_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.newUser.user_type = $event;
            })("change", function UserComponent_Template_input_change_23_listener($event) {
              return ctx.userTypeData($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Corporate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 22, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.newUser.user_type = $event;
            })("change", function UserComponent_Template_input_change_27_listener($event) {
              return ctx.userTypeData($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 24, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.newUser.user_type = $event;
            })("change", function UserComponent_Template_input_change_31_listener($event) {
              return ctx.userTypeData($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserComponent_div_35_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserComponent_div_36_Template, 8, 3, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserComponent_div_37_Template, 7, 3, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_42_listener($event) {
              return ctx.newUser.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UserComponent_div_44_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_49_listener($event) {
              return ctx.newUser.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, UserComponent_div_51_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_56_listener($event) {
              return ctx.newUser.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, UserComponent_div_58_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Is Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_63_listener($event) {
              return ctx.newUser.isActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.csvStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.user_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.user_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.user_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleStatus || ctx.newUser.user_type == "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.roleStatus || ctx.newUser.user_type == "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], ngx_csvto_json__WEBPACK_IMPORTED_MODULE_7__["NgxCSVtoJSONComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["AngularMultiSelect"]],
        styles: [".card[_ngcontent-%COMP%] {\n  padding: 3% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7QUFDekIiLCJmaWxlIjoidXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDMlIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_4__["BaseServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qmuJ":
    /*!**********************************************************************!*\
      !*** ./src/app/content/pages/master-data/assign/assign.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AssignComponent */

    /***/
    function qmuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignComponent", function () {
        return AssignComponent;
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


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function AssignComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assign Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssignComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssignComponent_div_11_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function AssignComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r7 == null ? null : tag_r7.assign_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, tag_r7 == null ? null : tag_r7.creationDate, "dd/MM/yyyy"));
        }
      }

      function AssignComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignComponent_ng_template_30_Template_button_click_3_listener() {
            var d_r10 = ctx.dismiss;
            return d_r10("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AssignComponent_ng_template_30_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.selectedObj.dept_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignComponent_ng_template_30_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var c_r9 = ctx.close;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r9(ctx_r14.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedObj.dept_name);
        }
      }

      var AssignComponent = /*#__PURE__*/function () {
        function AssignComponent(router, baseService, config, modalService) {
          _classCallCheck(this, AssignComponent);

          this.router = router;
          this.baseService = baseService;
          this.modalService = modalService;
          this.assign = {};
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.closeResult = '';
          this.selectedObj = {};
        }

        _createClass(AssignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAssignList();
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.baseService.baseUrl + 'secure/assign/addAssignName', this.assign, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }).then(function () {
                  location.reload();
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getAssignList",
          value: function getAssignList() {
            var _this29 = this;

            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/assign/getAssignName', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.status) {
                _this29.assignList = response.data.data;
                console.log("Assign List");
                console.log(_this29.assignList);
                console.log(response.data);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this30 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this30.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(_this30.baseService.baseUrl + 'secure/assign/update_assign/' + result._id, result, {
                headers: {
                  'x-auth': _this30.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }).then(function () {
                    location.reload();
                  });
                } else if (_this30.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this30.closeResult = "Dismissed ".concat(_this30.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteDept",
          value: function deleteDept(id) {
            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](this.baseService.baseUrl + 'secure/assign/delete_assign/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }).then(function () {
                    location.reload();
                  }); // this.getDept();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return AssignComponent;
      }();

      AssignComponent.ɵfac = function AssignComponent_Factory(t) {
        return new (t || AssignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      AssignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AssignComponent,
        selectors: [["app-assign"]],
        decls: 32,
        vars: 6,
        consts: [[1, "container"], [1, "card", "col-md-6", "float-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["statusForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-4", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-6", "col-sm-8", "mb-3"], ["type", "text", "name", "assign_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["assign_name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "btn", "btn-primary", "offset-4", 3, "disabled"], [1, "table-responsive"], ["datatable", "", 1, "row-border", "hover", "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "form-text", "text-danger"], [4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "dept_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function AssignComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AssignComponent_Template_form_ngSubmit_3_listener() {
              return ctx.formSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Assign Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AssignComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.assign.assign_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AssignComponent_div_11_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " S NO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Assign Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Create Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AssignComponent_tr_29_Template, 9, 6, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AssignComponent_ng_template_30_Template, 15, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.assign.assign_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assignList);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-assign',
            templateUrl: './assign.component.html',
            styleUrls: ['./assign.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yVG7":
    /*!****************************************************************************!*\
      !*** ./src/app/content/pages/master-data/edit-user/edit-user.component.ts ***!
      \****************************************************************************/

    /*! exports provided: EditUserComponent */

    /***/
    function yVG7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
        return EditUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      "e/mZ");

      function EditUserComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditUserComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_div_17_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function EditUserComponent_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Type is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditUserComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_div_32_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
        }
      }

      function EditUserComponent_div_33_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dept_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", dept_r19._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dept_r19.dept_name);
        }
      }

      function EditUserComponent_div_33_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditUserComponent_div_33_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_div_33_div_7_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.errors.required);
        }
      }

      function EditUserComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_33_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.newUser.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditUserComponent_div_33_option_6_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditUserComponent_div_33_div_7_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.newUser.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.deptNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.invalid && (_r16.dirty || _r16.touched));
        }
      }

      function EditUserComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "angular2-multiselect", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_34_Template_angular2_multiselect_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.formModel.selectedItems = $event;
          })("onSelect", function EditUserComponent_div_34_Template_angular2_multiselect_onSelect_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.onItemSelect($event);
          })("onDeSelect", function EditUserComponent_div_34_Template_angular2_multiselect_onDeSelect_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.OnItemDeSelect($event);
          })("onSelectAll", function EditUserComponent_div_34_Template_angular2_multiselect_onSelectAll_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.onSelectAll($event);
          })("onDeSelectAll", function EditUserComponent_div_34_Template_angular2_multiselect_onDeSelectAll_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onDeSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r8.dropdownList)("ngModel", ctx_r8.formModel.selectedItems)("settings", ctx_r8.dropdownSettings);
        }
      }

      function EditUserComponent_div_41_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditUserComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_div_41_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
        }
      }

      function EditUserComponent_div_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditUserComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_div_48_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.required);
        }
      }

      var EditUserComponent = /*#__PURE__*/function () {
        function EditUserComponent(router, _router, cdRef, baseService) {
          _classCallCheck(this, EditUserComponent);

          this.router = router;
          this._router = _router;
          this.cdRef = cdRef;
          this.baseService = baseService;
          this.newUser = {};
          this.dropdownList = [];
          this.formModel = {
            "selectedItems": []
          };
          this.dropdownSettings = {};
          this.roleStatus = false;
          this.id = this._router.snapshot.queryParamMap.get('id');
          this.dropdownSettings = {
            singleSelection: true,
            text: "Select Menu List",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
          };
          this.getDept();
          this.getStore();
        }

        _createClass(EditUserComponent, [{
          key: "getUserById",
          value: function getUserById() {
            var _this31 = this;

            console.log("userBy ID");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/users/user_data/' + this.id, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log("Testing");
              console.log(response);

              if (response.data.status) {
                (function () {
                  console.log("Issue List");
                  _this31.newUser = response.data.data;
                  var tmp = [];

                  var _loop = function _loop(i) {
                    _this31.storeNames.filter(function (store) {
                      if (store._id == _this31.newUser.store_id[i]) tmp.push({
                        id: store._id,
                        itemName: store.store_name
                      });
                    });
                  };

                  for (var i = 0; i < _this31.newUser.store_id.length; i++) {
                    _loop(i);
                  }

                  _this31.formModel.selectedItems = tmp;
                  console.log(_this31.formModel.selectedItems);
                  console.log(response.data);
                  if (_this31.newUser.user_type == 'Corporate') _this31.roleStatus = false;else if (_this31.newUser.user_type == 'Sales') {
                    _this31.dropdownSettings = {
                      singleSelection: false,
                      text: "Select Menu List",
                      selectAllText: 'Select All',
                      unSelectAllText: 'UnSelect All',
                      enableSearchFilter: true,
                      classes: "myclass custom-class"
                    };
                  } else if (_this31.baseService.checkToken(response.data.message, response.data.status)) {} else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                      position: 'center',
                      icon: 'error',
                      title: response.data["message"],
                      showConfirmButton: false,
                      timer: 3000
                    });
                  }
                })();
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "userTypeData",
          value: function userTypeData(data) {
            if (data == "Store") {
              this.roleStatus = true;
              this.newUser.user_type = "Store"; // this.newUser.role={
              //   isAdmin:false,
              //   isUser:true
              // }
            } else if (data == "Corporate") {
              this.roleStatus = false;
              this.newUser.user_type = "Corporate";
            } else {
              this.dropdownSettings = {
                singleSelection: false,
                text: "Select Menu List",
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                enableSearchFilter: true,
                classes: "myclass custom-class"
              };
              this.newUser.user_type = "Sales";
            }
          }
        }, {
          key: "getDept",
          value: function getDept() {
            var _this32 = this;

            console.log("Dept");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/department/get_dept', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this32.deptNames = response.data.data;
                console.log(_this32.deptNames);
                console.log(response.data);
              } else if (_this32.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getStore",
          value: function getStore() {
            var _this33 = this;

            console.log("Store");
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseService.baseUrl + 'secure/store/allStore', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this33.storeNames = response.data.data;
                _this33.storeNames = response.data.data;

                _this33.getUserById();

                var tmp = [];

                for (var i = 0; i < _this33.storeNames.length; i++) {
                  tmp.push({
                    id: _this33.storeNames[i]._id,
                    itemName: _this33.storeNames[i].store_name
                  });
                }

                _this33.dropdownList = tmp;
                console.log(_this33.storeNames);
                console.log(response.data);
              } else if (_this33.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            var _this34 = this;

            this.newUser.store_id = [];

            for (var i = 0; i < this.formModel.selectedItems.length; i++) {
              this.newUser.store_id.push(this.formModel.selectedItems[i].id);
            }

            console.log(this.newUser);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(this.baseService.baseUrl + 'secure/users/user_data/' + this.id, this.newUser, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              console.log(response);

              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });

                _this34.getUserById(); // .then(() => {
                //   location.reload(); });

              } // else if(this.baseService.checkToken(response.data.message , response.data.status))
              // {
              // }
              else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.cdRef.detectChanges();
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            console.log("on Select Item...");
            console.log(this.formModel.selectedItems); // for(let i=0;i<this.formModel.selectedItems.length;i++)
            // {
            // this.newTicket.tags.push(this.formModel.selectedItems[i].id);
            // }

            console.log("Tag Names"); // this.newTicket.tags.push(this.formModel.selectedItems)
            // console.log(this.formModel.selectedItems);
          }
        }, {
          key: "OnItemDeSelect",
          value: function OnItemDeSelect(item) {
            console.log(item); // console.log(this.formModel.selectedItems);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log("On Select All");
            console.log(this.formModel.selectedItems); // this.tags.push(this.formModel.selectedItems);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }]);

        return EditUserComponent;
      }();

      EditUserComponent.ɵfac = function EditUserComponent_Factory(t) {
        return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_4__["BaseServiceService"]));
      };

      EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditUserComponent,
        selectors: [["app-edit-user"]],
        decls: 60,
        vars: 13,
        consts: [[1, "container"], [1, "card"], [1, "card-header", "cheader"], [1, "row"], [1, "col-md-12", "text-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["ticketForm", "ngForm"], [1, "form-group", "mt-2"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-md", "text-sm-right"], [1, "col-md-8", "col-sm-8", "mb-3"], ["type", "text", "name", "name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "row", "ml-5"], [1, "form-group", "m-t-15", "custom-radio-ml", "ml-2"], ["id", "Corporate", "type", "radio", "name", "user_type", "value", "Corporate", "required", "", 3, "ngModel", "ngModelChange", "change"], ["user_type", "ngModel"], ["for", "Corporate", 1, "ml-1"], ["id", "Store", "type", "radio", "name", "user_type", "value", "Store", "required", "", 1, "ml-4", 3, "ngModel", "ngModelChange", "change"], ["for", "Store", 1, "ml-1"], ["id", "Sales", "type", "radio", "name", "user_type", "value", "Sales", "required", "", 1, "ml-4", 3, "ngModel", "ngModelChange", "change"], ["for", "Sales", 1, "ml-1"], ["class", "row", 4, "ngIf"], ["type", "email", "name", "email", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "number", "name", "phone", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], [1, "row", "d-flex"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-2", "col-form-label", "col-form-label-md", "text-sm-right"], ["type", "checkbox", "name", "isActive", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["isActive", "ngModel"], [1, "btn", "btn-primary", "offset-3"], [1, "btn", "btn-danger"], [1, "form-text", "text-danger"], [4, "ngIf"], ["name", "role", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "form-group"], ["name", "selectedItems", 3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["selectedItems", "ngModel"]],
        template: function EditUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit User Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditUserComponent_Template_form_ngSubmit_8_listener() {
              return ctx.formSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.newUser.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditUserComponent_div_17_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.newUser.user_type = $event;
            })("change", function EditUserComponent_Template_input_change_20_listener($event) {
              return ctx.userTypeData($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Corporate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 19, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.newUser.user_type = $event;
            })("change", function EditUserComponent_Template_input_change_24_listener($event) {
              return ctx.userTypeData($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.newUser.user_type = $event;
            })("change", function EditUserComponent_Template_input_change_28_listener($event) {
              return ctx.userTypeData($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditUserComponent_div_32_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditUserComponent_div_33_Template, 8, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EditUserComponent_div_34_Template, 7, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.newUser.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditUserComponent_div_41_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.newUser.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EditUserComponent_div_48_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Is Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.newUser.isActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.user_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.user_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.user_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.roleStatus || ctx.newUser.user_type == "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleStatus || ctx.newUser.user_type == "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.isActive);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelect"]],
        styles: [".card[_ngcontent-%COMP%] {\n  padding: 3% !important;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.8rem;\n  margin-bottom: 0.8rem;\n}\n\n.col-sm-4[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQjtBQUN6Qjs7QUFDQTtFQUVJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0VBRUMscUJBQW9CO0FBQXJCIiwiZmlsZSI6ImVkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDMlIWltcG9ydGFudDtcclxufVxyXG5oM1xyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxufVxyXG5cclxuLmNvbC1zbS00XHJcbntcclxuIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-user',
            templateUrl: './edit-user.component.html',
            styleUrls: ['./edit-user.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_4__["BaseServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yvBa":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ngx-csvto-json/__ivy_ngcc__/fesm2015/ngx-csvto-json.js ***!
      \*****************************************************************************/

    /*! exports provided: NgxCSVtoJSONComponent, NgxCSVtoJSONModule, NgxCSVtoJSONService */

    /***/
    function yvBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCSVtoJSONComponent", function () {
        return NgxCSVtoJSONComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCSVtoJSONModule", function () {
        return NgxCSVtoJSONModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxCSVtoJSONService", function () {
        return NgxCSVtoJSONService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NgxCSVtoJSONService = function NgxCSVtoJSONService() {
        _classCallCheck(this, NgxCSVtoJSONService);
      };

      NgxCSVtoJSONService.ɵfac = function NgxCSVtoJSONService_Factory(t) {
        return new (t || NgxCSVtoJSONService)();
      };

      NgxCSVtoJSONService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgxCSVtoJSONService_Factory() {
          return new NgxCSVtoJSONService();
        },
        token: NgxCSVtoJSONService,
        providedIn: "root"
      });

      NgxCSVtoJSONService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCSVtoJSONService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })(); //ng build NgxCSVtoJSON


      var NgxCSVtoJSONComponent = /*#__PURE__*/function () {
        function NgxCSVtoJSONComponent() {
          _classCallCheck(this, NgxCSVtoJSONComponent);

          this.convertedArray = [];
          this.properties = "";
          this.onConvert = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(NgxCSVtoJSONComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //Click Action for Input File Control

        }, {
          key: "onFileSelect",
          value: function onFileSelect(input) {
            var files = input.files;
            var fileTypes = ['csv']; //acceptable file types

            if (files && files.length) {
              var extension = input.files[0].name.split('.').pop().toLowerCase(),
                  //file extension from input file
              //Validating type of File Uploaded
              isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types
              //console.log(isSuccess);
              //console.log("Filename: " + files[0].name);
              // console.log("Type: " + files[0].type);
              //  console.log("Size: " + files[0].size + " bytes");

              var that = this; //Flag to check the Validation Result

              if (isSuccess) {
                var fileToRead = files[0];
                var fileReader = new FileReader();

                fileReader.onload = function (fileLoadedEvent) {
                  var textFromFileLoaded = fileLoadedEvent.target.result;
                  that.csvContent = textFromFileLoaded; //Flag is for extracting first line

                  var flag = false; // Main Data

                  var objarray = []; //Properties

                  var prop = []; //Total Length

                  var size = 0;

                  var _iterator = _createForOfIteratorHelper(that.csvContent.split(/[\r\n]+/)),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var line = _step.value;

                      if (flag) {
                        var obj = {};

                        for (var k = 0; k < size; k++) {
                          //Dynamic Object Properties
                          obj[prop[k]] = line.split(',')[k];
                        }

                        objarray.push(obj);
                      } else {
                        //First Line of CSV will be having Properties
                        for (var _k = 0; _k < line.split(',').length; _k++) {
                          size = line.split(',').length; //Removing all the spaces to make them usefull

                          prop.push(line.split(',')[_k].replace(/ /g, ''));
                        }

                        flag = true;
                      }
                    } //All the values converted from CSV to JSON Array

                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  that.convertedArray = objarray;
                  that.properties = []; //Object Keys of Converted JSON Array

                  that.properties = prop;
                  var finalResult = {
                    properties: that.properties,
                    result: that.convertedArray
                  }; //On Convert Success 

                  that.onConvert.emit(finalResult);
                };

                fileReader.readAsText(fileToRead, "UTF-8");
              } else {
                that.onFail.emit("Invalid File Format!");
              }
            }
          }
        }]);

        return NgxCSVtoJSONComponent;
      }();

      NgxCSVtoJSONComponent.ɵfac = function NgxCSVtoJSONComponent_Factory(t) {
        return new (t || NgxCSVtoJSONComponent)();
      };

      NgxCSVtoJSONComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxCSVtoJSONComponent,
        selectors: [["Ngx-CSVtoJSON"]],
        outputs: {
          onConvert: "onConvert",
          onFail: "onFail"
        },
        decls: 2,
        vars: 0,
        consts: [[1, "form-group"], ["accept", ".csv", "id", "csv", "type", "file", "name", "myfile", 1, "form-control", 3, "change"]],
        template: function NgxCSVtoJSONComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxCSVtoJSONComponent_Template_input_change_1_listener($event) {
              return ctx.onFileSelect($event.target);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });

      NgxCSVtoJSONComponent.ctorParameters = function () {
        return [];
      };

      NgxCSVtoJSONComponent.propDecorators = {
        onConvert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCSVtoJSONComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'Ngx-CSVtoJSON',
            template: "\n  <div class=\"form-group\">\n  <input class=\"form-control\" accept=\".csv\" id=\"csv\" type=\"file\" \n  (change)=\"onFileSelect($event.target)\" name=\"myfile\">\n  </div>\n  "
          }]
        }], function () {
          return [];
        }, {
          onConvert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      var NgxCSVtoJSONModule = function NgxCSVtoJSONModule() {
        _classCallCheck(this, NgxCSVtoJSONModule);
      };

      NgxCSVtoJSONModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxCSVtoJSONModule
      });
      NgxCSVtoJSONModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxCSVtoJSONModule_Factory(t) {
          return new (t || NgxCSVtoJSONModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxCSVtoJSONModule, {
          declarations: [NgxCSVtoJSONComponent],
          exports: [NgxCSVtoJSONComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCSVtoJSONModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgxCSVtoJSONComponent],
            imports: [],
            exports: [NgxCSVtoJSONComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-csvto-json
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-csvto-json.js.map

      /***/

    },

    /***/
    "zpEz":
    /*!**********************************************************************!*\
      !*** ./src/app/content/pages/master-data/issues/issues.component.ts ***!
      \**********************************************************************/

    /*! exports provided: IssuesComponent */

    /***/
    function zpEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuesComponent", function () {
        return IssuesComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/base-service.service */
      "eWbo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function IssuesComponent_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mainDept_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mainDept_r9 == null ? null : mainDept_r9.mainDeptName);
        }
      }

      function IssuesComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IssuesComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssuesComponent_div_14_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function IssuesComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Issue Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IssuesComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssuesComponent_div_21_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
        }
      }

      function IssuesComponent_tr_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuesComponent_tr_39_Template_img_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var issue_r12 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return ctx_r14.open(_r7, issue_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuesComponent_tr_39_Template_img_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var issue_r12 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.deleteDept(issue_r12._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var issue_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12 == null ? null : issue_r12.deptName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12 == null ? null : issue_r12.issue_name);
        }
      }

      function IssuesComponent_ng_template_40_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mainDept_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mainDept_r22 == null ? null : mainDept_r22.mainDeptName);
        }
      }

      function IssuesComponent_ng_template_40_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IssuesComponent_ng_template_40_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssuesComponent_ng_template_40_div_17_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r19.errors.required);
        }
      }

      function IssuesComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuesComponent_ng_template_40_Template_button_click_3_listener() {
            var d_r18 = ctx.dismiss;
            return d_r18("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuesComponent_ng_template_40_Template_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.selectedObj.deptName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "-Select-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IssuesComponent_ng_template_40_option_16_Template, 2, 1, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IssuesComponent_ng_template_40_div_17_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Issue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuesComponent_ng_template_40_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.selectedObj.issue_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuesComponent_ng_template_40_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var c_r17 = ctx.close;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return c_r17(ctx_r28.selectedObj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.selectedObj.deptName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.mainDeptNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r19.invalid && (_r19.dirty || _r19.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.selectedObj.issue_name);
        }
      }

      var IssuesComponent = /*#__PURE__*/function () {
        function IssuesComponent(router, baseService, config, modalService) {
          _classCallCheck(this, IssuesComponent);

          this.router = router;
          this.baseService = baseService;
          this.modalService = modalService;
          this.dept = {};
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.issue = {};
          this.tableStatus = true;
          this.closeResult = '';
          this.selectedObj = {};
          this.getDept();
          this.getIssues();
          this.getMainDept();
        }

        _createClass(IssuesComponent, [{
          key: "formSubmit",
          value: function formSubmit(form) {
            var _this35 = this;

            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(this.baseService.baseUrl + 'secure/typeofIssue/add_issue', this.issue, {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                }); // .then(() => {
                //   location.reload(); });

                form.resetForm("");

                _this35.getIssues();
              } else if (_this35.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          } /////////Get Main Dept

        }, {
          key: "getMainDept",
          value: function getMainDept() {
            var _this36 = this;

            console.log("Dept");
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.baseService.baseUrl + 'secure/mainDept/allMainDept', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Issue List");
                _this36.mainDeptNames = response.data.data;
              } else if (_this36.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDept",
          value: function getDept() {
            var _this37 = this;

            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.baseService.baseUrl + 'secure/department/get_dept', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.data.status) {
                console.log("Dept List");
                _this37.deptNames = response.data.data;
                console.log(_this37.deptNames);
                console.log(response.data);
              } else if (_this37.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getIssues",
          value: function getIssues() {
            var _this38 = this;

            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.baseService.baseUrl + 'secure/typeofIssue/get_issue', {
              headers: {
                'x-auth': this.baseService.authToken
              }
            }).then(function (response) {
              if (response.status) {
                _this38.issuesNames = response.data.data;
                console.log(_this38.issuesNames);
                console.log(response.data);

                if (_this38.tableStatus) {
                  _this38.dtTrigger.next();

                  _this38.tableStatus = false;
                }
              } else if (_this38.baseService.checkToken(response.data.message, response.data.status)) {} else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data["message"],
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "open",
          value: function open(content, selObj) {
            var _this39 = this;

            console.log(selObj);
            this.selectedObj = selObj;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this39.closeResult = "Closed with: ".concat(result);
              console.log("LLLLLLL", result);
              axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(_this39.baseService.baseUrl + 'secure/typeofIssue/update_issue/' + result._id, result, {
                headers: {
                  'x-auth': _this39.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this39.getIssues();
                } else if (_this39.baseService.checkToken(response.data.message, response.data.status)) {} else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (reason) {
              console.log("OOOOOOOOOOo");
              _this39.closeResult = "Dismissed ".concat(_this39.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "deleteDept",
          value: function deleteDept(id) {
            var _this40 = this;

            if (confirm("Are You Sure To Delete This Record")) {
              axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](this.baseService.baseUrl + 'secure/typeofIssue/delete_issue/' + id, {
                headers: {
                  'x-auth': this.baseService.authToken
                }
              }).then(function (response) {
                console.log(response);

                if (response.data.status) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  }); // .then(() => {
                  //   location.reload(); });

                  _this40.getIssues();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.data["message"],
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IssuesComponent;
      }();

      IssuesComponent.ɵfac = function IssuesComponent_Factory(t) {
        return new (t || IssuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      IssuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IssuesComponent,
        selectors: [["app-issues"]],
        decls: 42,
        vars: 9,
        consts: [[1, "container"], [1, "card", "col-md-6", "float-center"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["statusForm", "ngForm"], [1, "row"], ["for", "normal-input-1", 1, "col-md-4", "col-sm-4", "col-form-label", "col-form-label-sm", "text-sm-right"], [1, "col-md-8", "col-sm-8", "mb-3"], ["name", "deptName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["deptName", "ngModel"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-group", "form-row"], [1, "col-md-8", "col-sm-9", "mb-3"], ["type", "text", "name", "issue_name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["issue_name", "ngModel"], [1, "col-md-12"], [1, "btn", "btn-primary", "offset-4", 3, "disabled"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], ["content", ""], [1, "form-text", "text-danger"], [4, "ngIf"], ["src", "assets/images/icon/edit.png", "height", "30px", 1, "switchbtn", 3, "click"], ["src", "assets/images/icon/delete.png", "height", "30px", 1, "switchbtn", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["for", "normal-input-1", 1, "col-md-12", "col-sm-12", "col-form-label", "col-form-label-sm", "text-sm-left"], [1, "col-md-12", "col-sm-12", "mb-3"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "name", "issue_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function IssuesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IssuesComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.formSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Department ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuesComponent_Template_select_ngModelChange_9_listener($event) {
              return ctx.issue.deptName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-Select-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IssuesComponent_option_13_Template, 2, 1, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IssuesComponent_div_14_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Type Of Issue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuesComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.issue.issue_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, IssuesComponent_div_21_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " S NO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Department Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, IssuesComponent_tr_39_Template, 10, 3, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, IssuesComponent_ng_template_40_Template, 25, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.issue.deptName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.issue.issue_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.issuesNames);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssuesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-issues',
            templateUrl: './issues.component.html',
            styleUrls: ['./issues.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_6__["BaseServiceService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=master-data-master-data-module-es5.js.map