(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zoho-zoho-module"],{

/***/ "8hGK":
/*!***************************************************!*\
  !*** ./src/app/content/pages/zoho/zoho.module.ts ***!
  \***************************************************/
/*! exports provided: ZohoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoModule", function() { return ZohoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _zoho_return_zoho_return_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoho-return/zoho-return.component */ "EK/D");
/* harmony import */ var _zoho_main_zoho_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoho-main/zoho-main.component */ "KGIk");







const appsRoutes = [
    {
        path: 'api/zoho',
        component: _zoho_main_zoho_main_component__WEBPACK_IMPORTED_MODULE_4__["ZohoMainComponent"]
    },
    {
        path: 'api/zoho-return',
        component: _zoho_return_zoho_return_component__WEBPACK_IMPORTED_MODULE_3__["ZohoReturnComponent"]
    },
];
class ZohoModule {
}
ZohoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ZohoModule });
ZohoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ZohoModule_Factory(t) { return new (t || ZohoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ZohoModule, { declarations: [_zoho_return_zoho_return_component__WEBPACK_IMPORTED_MODULE_3__["ZohoReturnComponent"], _zoho_main_zoho_main_component__WEBPACK_IMPORTED_MODULE_4__["ZohoMainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_zoho_main_zoho_main_component__WEBPACK_IMPORTED_MODULE_4__["ZohoMainComponent"], _zoho_return_zoho_return_component__WEBPACK_IMPORTED_MODULE_3__["ZohoReturnComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZohoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_zoho_return_zoho_return_component__WEBPACK_IMPORTED_MODULE_3__["ZohoReturnComponent"], _zoho_main_zoho_main_component__WEBPACK_IMPORTED_MODULE_4__["ZohoMainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsRoutes)
                ],
                exports: [_zoho_main_zoho_main_component__WEBPACK_IMPORTED_MODULE_4__["ZohoMainComponent"], _zoho_return_zoho_return_component__WEBPACK_IMPORTED_MODULE_3__["ZohoReturnComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "EK/D":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/zoho/zoho-return/zoho-return.component.ts ***!
  \*************************************************************************/
/*! exports provided: ZohoReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoReturnComponent", function() { return ZohoReturnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/base-service.service */ "eWbo");





class ZohoReturnComponent {
    constructor(router, baseService, _router) {
        this.router = router;
        this.baseService = baseService;
        this._router = _router;
        this.code = this._router.snapshot.queryParamMap.get('code');
    }
    ngOnInit() {
        this.postZohoData();
    }
    postZohoData() {
        //https://ticket.happimobiles.com/api/zoho-return
        var zohoObj = {
            code: this.code,
            redirect_uri: "http://localhost:8033/api/zoho-return",
            client_id: "1000.PQFFUQBMERQUDFRQE10G8IGS46D4UO",
            client_secret: "5f2258398716be20f233dfb5033ed1c8a07d23476f",
            grant_type: "authorization_code"
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://accounts.zoho.in/oauth/v2/token', zohoObj, {
            headers: {
                'x-auth': this.baseService.authToken
            },
        })
            .then(response => {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
}
ZohoReturnComponent.ɵfac = function ZohoReturnComponent_Factory(t) { return new (t || ZohoReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ZohoReturnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZohoReturnComponent, selectors: [["app-zoho-return"]], decls: 2, vars: 0, template: function ZohoReturnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zoho-return works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b2hvLXJldHVybi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZohoReturnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoho-return',
                templateUrl: './zoho-return.component.html',
                styleUrls: ['./zoho-return.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_services_base_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "KGIk":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/zoho/zoho-main/zoho-main.component.ts ***!
  \*********************************************************************/
/*! exports provided: ZohoMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZohoMainComponent", function() { return ZohoMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ZohoMainComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.getCode();
    }
    getCode() {
        window.open("https://accounts.zoho.in/oauth/v2/auth?scope=ZohoProjects.tasks.ALL,ZohoProjects.portals.ALL,ZohoProjects.users.ALL,ZohoProjects.projects.ALL&client_id=1000.PQFFUQBMERQUDFRQE10G8IGS46D4UO&response_type=code&access_type=offline&redirect_uri=http://localhost:8033/api/zoho-return&prompt=consent", '_blank');
        //   axios.get("https://accounts.zoho.in/oauth/v2/auth?scope=ZohoProjects.tasks.ALL,ZohoProjects.portals.ALL,ZohoProjects.projects.ALL&client_id=1000.PQFFUQBMERQUDFRQE10G8IGS46D4UO&response_type=code&access_type=offline&redirect_uri=http://localhost:8033/api/zoho-return&prompt=consent", {
        //   })
        //     .then(response => {
        //       console.log(response);
        //     })
        //     .catch(function (error) {
        //       console.log(error)
        //     })
        this.router.navigate(["/ticket/ticket-list"]);
    }
}
ZohoMainComponent.ɵfac = function ZohoMainComponent_Factory(t) { return new (t || ZohoMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ZohoMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZohoMainComponent, selectors: [["app-zoho-main"]], decls: 3, vars: 0, consts: [[1, "container", 2, "margin-top", "100px"], [1, "h3", "text-center"]], template: function ZohoMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Wait...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b2hvLW1haW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZohoMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoho-main',
                templateUrl: './zoho-main.component.html',
                styleUrls: ['./zoho-main.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=zoho-zoho-module-es2015.js.map