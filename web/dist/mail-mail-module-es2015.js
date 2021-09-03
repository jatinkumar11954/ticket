(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"],{

/***/ "+6p5":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-header/mail-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: MailHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailHeaderComponent", function() { return MailHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mail.service */ "KOQm");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _gaxon_components_gx_toggle_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-toggle/gx-checkbox/gx-checkbox.component */ "5xlS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");







function MailHeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setFolderOnSelectedMails("archive"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_div_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setFolderOnSelectedMails("spam"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "gx-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_div_18_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setFolderOnSelectedMails("trash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "gx-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
} }
function MailHeaderComponent_div_19_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_div_19_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const folder_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.setFolderOnSelectedMails(folder_r9.handle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r9.title);
} }
function MailHeaderComponent_div_19_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_div_19_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const label_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleLabelOnSelectedMails(label_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r12.title);
} }
function MailHeaderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MailHeaderComponent_div_19_a_5_Template, 2, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "gx-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MailHeaderComponent_div_19_a_10_Template, 2, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.folders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.labels);
} }
function MailHeaderComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Starred");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unstarred");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MailHeaderComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'px-1 pb-4 border-bottom border-w-2 mb-1 mt-n1';
        this.selected = 'None';
        this.labels = [];
        this.folders = [];
    }
    ngOnInit() {
        // Subscribe to update SelectedMails on changes
        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(selectedMails => {
                setTimeout(() => {
                    this.hasSelectedMails = selectedMails.length > 0;
                    this.isIndeterminate = (selectedMails.length !== this.mailService.mails.length && selectedMails.length > 0);
                    if (selectedMails.length === 0) {
                        this.selected = 'None';
                    }
                    else if (selectedMails.length === this.mailService.mails.length) {
                        this.selected = 'All';
                    }
                }, 0);
            });
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe((labels) => {
                this.labels = labels;
            });
        // Subscribe to update folders on changes
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe((folders) => {
                this.folders = folders;
            });
    }
    /**
     * Toggle select all mails
     */
    toggleSelectAll() {
        this.mailService.toggleSelectAll();
    }
    /**
     * Select mails by filter
     * @param selected
     * @param filterParameter
     * @param filterValue
     */
    selectMails(selected, filterParameter, filterValue) {
        this.selected = (selected) ? selected : this.selected;
        this.mailService.selectMails(filterParameter, filterValue);
    }
    /**
     * Deselect all mails
     */
    deselectMails() {
        this.mailService.deselectMails();
    }
    /**
     * Change folder to selected emails
     * @param folderHandle
     */
    setFolderOnSelectedMails(folderHandle) {
        this.mailService.setFolderOnSelectedMails(folderHandle);
    }
    /**
     * Change lables to selectd emails
     * @param labelId
     */
    toggleLabelOnSelectedMails(labelId) {
        this.mailService.toggleLabelOnSelectedMails(labelId);
    }
    ngOnDestroy() {
        this.onLabelsChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
        this.onSelectedMailsChanged.unsubscribe();
    }
}
MailHeaderComponent.ɵfac = function MailHeaderComponent_Factory(t) { return new (t || MailHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"])); };
MailHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailHeaderComponent, selectors: [["mail-header"]], hostVars: 2, hostBindings: function MailHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 21, vars: 6, consts: [[1, "d-flex", "flex-wrap"], ["ngbDropdown", "", 1, "mr-auto"], [1, "mr-3", 3, "gxModel", "indeterminate", "gxInputChange"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "text-dark"], ["ngbDropdownMenu", ""], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], ["class", "btn-group btn-group-sm mr-3 mr-lg-7 mb-1", "role", "group", 4, "ngIf"], ["class", "btn-group btn-group-sm mr-4 mr-lg-7 mb-1", "role", "group", 4, "ngIf"], ["ngbDropdown", "", "placement", "bottom-right", 4, "ngIf"], ["role", "group", 1, "btn-group", "btn-group-sm", "mr-3", "mr-lg-7", "mb-1"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["name", "archive", "size", "lg", 3, "fw"], ["name", "spam", "size", "lg", 3, "fw"], ["name", "trash-filled", "size", "lg", 3, "fw"], ["role", "group", 1, "btn-group", "btn-group-sm", "mr-4", "mr-lg-7", "mb-1"], ["role", "group", "ngbDropdown", "", 1, "btn-group", "btn-group-sm"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-dark", "no-arrow"], ["name", "folder", "size", "lg", 3, "fw"], ["href", "javascript:void(0)", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["role", "group", "ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "btn-group-sm"], ["name", "tag", "size", "lg", 3, "fw"], ["ngbDropdown", "", "placement", "bottom-right"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "btn", "btn-outline-dark", "btn-sm"], ["href", "javascript:void(0)", 1, "dropdown-item"]], template: function MailHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "gx-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gxInputChange", function MailHeaderComponent_Template_gx_checkbox_gxInputChange_2_listener() { return ctx.toggleSelectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_Template_a_click_6_listener() { return ctx.selectMails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_Template_a_click_8_listener() { return ctx.deselectMails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_Template_a_click_10_listener() { return ctx.selectMails("Read", "read", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_Template_a_click_12_listener() { return ctx.selectMails("Unread", "read", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_Template_a_click_14_listener() { return ctx.selectMails("Starred", "starred", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailHeaderComponent_Template_a_click_16_listener() { return ctx.selectMails("Unstarred", "starred", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unstarred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MailHeaderComponent_div_18_Template, 7, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MailHeaderComponent_div_19_Template, 11, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MailHeaderComponent_div_20_Template, 12, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gxModel", ctx.hasSelectedMails)("indeterminate", ctx.isIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selected, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSelectedMails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSelectedMails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSelectedMails);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _gaxon_components_gx_toggle_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["GxCheckboxComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_5__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1haWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJtYWlsLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-header',
                templateUrl: './mail-header.component.html',
                styleUrls: ['./mail-header.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "DVti":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/mail/drawer/notifications/notifications.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app.service */ "F5nt");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");







function NotificationsComponent_a_19_gx_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 19);
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", notification_r1.icon.name)("ngClass", notification_r1.icon.color)("fw", true);
} }
function NotificationsComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-avatar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_a_19_gx_icon_5_Template, 1, 3, "gx-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", notification_r1)("charLength", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notification_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r1.icon.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r1.time, " ");
} }
class NotificationsComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-notification';
        this.notifications = [];
        this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications) => {
            this.notifications = notifications;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onNotificationsChanged.unsubscribe();
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["todo-notifications"]], hostVars: 2, hostBindings: function NotificationsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 20, vars: 5, consts: [[1, "d-flex", "align-items-center", "mb-6"], [1, "mb-0"], [1, "ml-auto", "action-area"], ["href", "javascript:void(0)"], ["ngbDropdown", "", "placement", "bottom-right", 1, "ml-2", "d-inline-block"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "no-arrow"], ["name", "settings", "size", "lg", 1, "text-light-gray"], ["ngbDropdownMenu", ""], ["href", "javascript:void(0)", 1, "dropdown-item"], ["name", "editors", 3, "fw"], ["name", "contacts", 3, "fw"], ["name", "heart", 3, "fw"], ["href", "javascript:void(0)", "class", "media", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "media"], [1, "mr-3", 3, "user", "charLength"], [1, "media-body"], [1, "message", 3, "innerHTML"], [1, "meta-date"], ["class", "mr-1", 3, "name", "ngClass", "fw", 4, "ngIf"], [1, "mr-1", 3, "name", "ngClass", "fw"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mark All Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "gx-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "gx-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "gx-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Contact List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "gx-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Favourite List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NotificationsComponent_a_19_Template, 7, 5, "a", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notifications (", ctx.notifications.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_3__["GxIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__["GxAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'todo-notifications',
                templateUrl: './notifications.component.html',
                styleUrls: ['./notifications.component.scss']
            }]
    }], function () { return [{ type: _app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "EWvb":
/*!******************************************************************************************************!*\
  !*** ./src/app/content/pages/mail/helper-widgets/contact-hover-card/contact-hover-card.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ContactHoverCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHoverCardComponent", function() { return ContactHoverCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mail.service */ "KOQm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");






function ContactHoverCardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-avatar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "gx-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "gx-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add to Contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "gx-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "gx-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "gx-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r0.contact)("charLength", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contact.first_name + " " + ctx_r0.contact.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contact.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contact.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contact.connections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
} }
class ContactHoverCardComponent {
    constructor(el, mailService) {
        this.mailService = mailService;
        this.classlist = 'card user-info-card';
        this.display = 'block';
        this.isVisible = false;
        this.el = el.nativeElement;
    }
    ngOnInit() {
        this.onContactHovered = this.mailService.onContactHovered
            .subscribe(data => {
            this.contact = data.contact;
            this.isVisible = data.show;
            this.position = data.position;
            this.setPosition();
        });
    }
    onMouseEnter() {
        this.showContactHoveredCard();
    }
    onMouseLeave() {
        this.hideContactHoveredCard();
    }
    /**
     * Show contact hover card
     */
    showContactHoveredCard() {
        this.isVisible = true;
    }
    /**
     * Hide contact hover card
     */
    hideContactHoveredCard() {
        this.isVisible = false;
    }
    ngOnDestroy() {
        this.onContactHovered.unsubscribe();
    }
    /**
     * Set hover card position
     */
    setPosition() {
        if (this.position && this.isVisible) {
            const windowHeight = window.innerHeight;
            if (!this.el.style.top) {
                this.el.style.top = (windowHeight / 2) + 'px';
            }
            this.el.style.left = (this.position.left + this.position.width) + 'px';
            setTimeout(() => {
                const cardHeight = this.el.offsetHeight;
                const cardTotalHeight = cardHeight + this.position.top + 20;
                if (cardTotalHeight > windowHeight) {
                    this.el.style.top = (windowHeight - (cardHeight + 20)) + 'px';
                }
                else if (cardHeight > 0) {
                    this.el.style.top = this.position.top + 'px';
                }
            }, 100);
        }
    }
}
ContactHoverCardComponent.ɵfac = function ContactHoverCardComponent_Factory(t) { return new (t || ContactHoverCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"])); };
ContactHoverCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactHoverCardComponent, selectors: [["contact-hover-card"]], hostVars: 4, hostBindings: function ContactHoverCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ContactHoverCardComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ContactHoverCardComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.display);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "p-4"], [1, "dt-avatar-wrapper", "mb-3"], [1, "size-50", 3, "user", "charLength"], [1, "dt-avatar-info"], [1, "dt-avatar-name", "h4", "mb-1"], [1, "dt-avatar-desc", "f-12"], [1, "mb-1"], ["name", "maps", 1, "mr-1", 3, "fw"], [1, "f-12"], ["name", "contacts", 1, "mr-1", 3, "fw"], [1, "px-4", "py-2", "border-top", "d-flex", "justify-content-between"], ["href", "javascript:void(0)", 1, "card-link"], [1, "ml-2", "ml-sm-10"], ["href", "javascript:void(0)", 1, "mr-1"], ["name", "mail", "size", "xl", 3, "fw"], ["name", "tag-o", "size", "xl", 3, "fw"], ["href", "javascript:void(0)"], ["name", "chat-app", "size", "xl", 3, "fw"]], template: function ContactHoverCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactHoverCardComponent_ng_container_0_Template, 27, 11, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contact && ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_3__["GxAvatarComponent"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWhvdmVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJjb250YWN0LWhvdmVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactHoverCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-hover-card',
                templateUrl: './contact-hover-card.component.html',
                styleUrls: ['./contact-hover-card.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "EuXM":
/*!***************************************************!*\
  !*** ./src/app/content/pages/mail/mail.module.ts ***!
  \***************************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaxon/modules */ "1u1q");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail.service */ "KOQm");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail.component */ "WfiI");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "nsYW");
/* harmony import */ var _mail_list_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail-list/mail-item/mail-item.component */ "d7xs");
/* harmony import */ var _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-sidebar/mail-sidebar.component */ "R8Wm");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "P1h1");
/* harmony import */ var _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-details/mail-details.component */ "IuHE");
/* harmony import */ var _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helper-widgets/contact/contact.component */ "OXAT");
/* harmony import */ var _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helper-widgets/badges/badges.component */ "GdpN");
/* harmony import */ var _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-widgets/contact-hover-card/contact-hover-card.component */ "EWvb");
/* harmony import */ var _helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-widgets/search-bar/search-bar.component */ "gfPm");
/* harmony import */ var _mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mail-header/mail-header.component */ "+6p5");
/* harmony import */ var _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./module-header/module-header.component */ "qyRL");
/* harmony import */ var _mail_details_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mail-details/details-header/details-header.component */ "Znba");
/* harmony import */ var _mail_details_mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mail-details/mail-conversation/mail-conversation.component */ "MUj3");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./drawer/drawer.component */ "k0bI");
/* harmony import */ var _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drawer/notifications/notifications.component */ "DVti");
/* harmony import */ var _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drawer/search/search.component */ "uI6b");
























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true
};
const routes = [
    {
        path: 'filter/:filterHandle',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]
        }
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]
        }
    },
    {
        path: 'label/:labelHandle',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        resolve: {
            tasks: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]
        }
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]
        }
    },
    {
        path: ':folderHandle',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]
        }
    },
    {
        path: ':folderHandle/:mailId',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        resolve: {
            mails: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]
        }
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
class MailModule {
}
MailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MailModule });
MailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MailModule_Factory(t) { return new (t || MailModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MailModule, { declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
        _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_6__["MailListComponent"],
        _mail_list_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_7__["MailItemComponent"],
        _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["MailSidebarComponent"],
        _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_9__["MailComposeComponent"],
        _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailsComponent"],
        _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_12__["BadgesComponent"],
        _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_13__["ContactHoverCardComponent"],
        _helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
        _mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_15__["MailHeaderComponent"],
        _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_16__["ModuleHeaderComponent"],
        _mail_details_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_17__["DetailsHeaderComponent"],
        _mail_details_mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_18__["MailConversationComponent"],
        _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_19__["DrawerComponent"],
        _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__["NotificationsComponent"],
        _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _gaxon_modules__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _gaxon_modules__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]
                ],
                declarations: [
                    _mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"],
                    _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_6__["MailListComponent"],
                    _mail_list_mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_7__["MailItemComponent"],
                    _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["MailSidebarComponent"],
                    _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_9__["MailComposeComponent"],
                    _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailsComponent"],
                    _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                    _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_12__["BadgesComponent"],
                    _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_13__["ContactHoverCardComponent"],
                    _helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
                    _mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_15__["MailHeaderComponent"],
                    _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_16__["ModuleHeaderComponent"],
                    _mail_details_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_17__["DetailsHeaderComponent"],
                    _mail_details_mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_18__["MailConversationComponent"],
                    _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_19__["DrawerComponent"],
                    _drawer_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__["NotificationsComponent"],
                    _drawer_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GdpN":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/mail/helper-widgets/badges/badges.component.ts ***!
  \******************************************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_pipes_getById_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../gaxon/pipes/getById.pipe */ "CbCa");




function BadgesComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "getById");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getById");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lid_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 2, ctx_r0.labels, lid_r2, "color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 6, ctx_r0.labels, lid_r2, "title"));
} }
function BadgesComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BadgesComponent {
    constructor() {
        this.showAll = true;
    }
    ngOnInit() {
        if (this.showAll) {
            this.items = this.ids;
        }
        else {
            this.items = this.ids.slice(0, 2);
        }
    }
}
BadgesComponent.ɵfac = function BadgesComponent_Factory(t) { return new (t || BadgesComponent)(); };
BadgesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgesComponent, selectors: [["task-badges"]], inputs: { ids: "ids", labels: "labels", showAll: "showAll" }, decls: 3, vars: 2, consts: [[1, "badge-group"], ["class", "badge", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "badge badge-light", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "badge", "badge-light"], ["moreBadges", ""]], template: function BadgesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BadgesComponent_span_1_Template, 4, 10, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BadgesComponent_span_2_Template, 3, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAll && ctx.ids.length > 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_gaxon_pipes_getById_pipe__WEBPACK_IMPORTED_MODULE_2__["GetByIdPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'task-badges',
                templateUrl: './badges.component.html'
            }]
    }], null, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IuHE":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-details/mail-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: MailDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailsComponent", function() { return MailDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mail.service */ "KOQm");
/* harmony import */ var _details_header_details_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-header/details-header.component */ "Znba");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");
/* harmony import */ var _gaxon_components_gx_toggle_gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-toggle/gx-star/gx-star.component */ "MhBl");
/* harmony import */ var _mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail-conversation/mail-conversation.component */ "MUj3");
/* harmony import */ var _gaxon_pipes_html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../gaxon/pipes/html-to-plain-text.pipe */ "1ica");
/* harmony import */ var _gaxon_pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../gaxon/pipes/nl2br.pipe */ "csoJ");











function MailDetailsComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "htmlToPlainText");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.currentMail.message), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MailDetailsComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "nl2br");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.currentMail.message), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MailDetailsComponent_mail_conversation_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mail-conversation", 14);
} if (rf & 2) {
    const conversation_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("conversation", conversation_r3);
} }
const _c0 = function (a0) { return { "open": a0 }; };
class MailDetailsComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-module__content position-relative ps';
        this.isOpened = true;
    }
    ngOnInit() {
        // Subscribe to update currentMail on changes
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                if (!currentMail) {
                    this.currentMail = null;
                }
                else {
                    this.currentMail = currentMail;
                    this.markAsRead();
                }
                setTimeout(() => {
                    this.scrollToBottom();
                }, 300);
            });
    }
    /**
     * Mark as read mail
     */
    markAsRead() {
        this.currentMail.read = true;
        this.mailService.saveMail(this.currentMail);
    }
    /**
     * On toggle starred
     */
    onToggleStarred(event) {
        this.currentMail.starred = event;
        this.mailService.saveMail(this.currentMail);
    }
    scrollToBottom() {
        if (this.directiveRef) {
            this.directiveRef.update();
            this.directiveRef.scrollToBottom();
        }
    }
    ngOnDestroy() {
        this.onCurrentMailChanged.unsubscribe();
    }
}
MailDetailsComponent.ɵfac = function MailDetailsComponent_Factory(t) { return new (t || MailDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"])); };
MailDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailDetailsComponent, selectors: [["app-mail-details"]], viewQuery: function MailDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 2, hostBindings: function MailDetailsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 15, vars: 10, consts: [[1, "dt-module__content-inner"], [1, "dt-module__list", "mail-detail-list"], [1, "dt-module__list-item", "open", 3, "ngClass"], [1, "cursor-pointer", "mr-4", 3, "user", "click"], [1, "dt-module__list-item-content"], [1, "d-inline-block", "cursor-pointer", "mb-1", 3, "click"], ["class", "mb-0 text-light-gray text-truncate", 3, "innerHTML", 4, "ngIf"], ["class", "mb-0 text-light-gray", 3, "innerHTML", 4, "ngIf"], [1, "dt-module__list-item-info"], [1, "mt-1"], [1, "ml-sm-3", 3, "gxModel", "gxInputChange"], [3, "conversation", 4, "ngFor", "ngForOf"], [1, "mb-0", "text-light-gray", "text-truncate", 3, "innerHTML"], [1, "mb-0", "text-light-gray", 3, "innerHTML"], [3, "conversation"]], template: function MailDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mail-details-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "gx-avatar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailDetailsComponent_Template_gx_avatar_click_4_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailDetailsComponent_Template_h4_click_6_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MailDetailsComponent_p_8_Template, 2, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MailDetailsComponent_p_9_Template, 2, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "gx-star", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gxInputChange", function MailDetailsComponent_Template_gx_star_gxInputChange_13_listener($event) { return ctx.onToggleStarred($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MailDetailsComponent_mail_conversation_14_Template, 1, 1, "mail-conversation", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.currentMail.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentMail.from.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentMail.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gxModel", ctx.currentMail.starred);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentMail.conversation);
    } }, directives: [_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_3__["DetailsHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_5__["GxAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _gaxon_components_gx_toggle_gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_6__["GxStarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _mail_conversation_mail_conversation_component__WEBPACK_IMPORTED_MODULE_7__["MailConversationComponent"]], pipes: [_gaxon_pipes_html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_8__["HtmlToPlainTextPipe"], _gaxon_pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_9__["Nl2brPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-details',
                templateUrl: './mail-details.component.html',
                styleUrls: ['./mail-details.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]]
        }] }); })();


/***/ }),

/***/ "KOQm":
/*!****************************************************!*\
  !*** ./src/app/content/pages/mail/mail.service.ts ***!
  \****************************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class MailService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.mailsUrl = 'api/mail-list'; // URL to web api
        this.contactsUrl = 'api/mail-contacts'; // URL to web api
        this.labelsUrl = 'api/mail-labels'; // URL to web api
        this.filtersUrl = 'api/mail-filters'; // URL to web api
        this.foldersUrl = 'api/mail-folders'; // URL to web api
        this.selectedMails = [];
        this.currentUser = {
            name: 'Alex Dolgove',
            email: 'alex-dolgove@example.com',
            avatar: ''
        };
        this.onMailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onSelectedMailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onCurrentMailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onComposeMailClicked = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onContactHovered = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onLabelsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onFiltersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onFoldersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onSearchQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getMails(),
                this.getContacts(),
                this.getLabels(),
                this.getFilters(),
                this.getFolders()
            ]).then(() => {
                if (this.routeParams.mailId) {
                    this.setCurrentMail(this.routeParams.mailId);
                }
                else {
                    this.setCurrentMail(null);
                }
                resolve();
            }, reject);
        });
    }
    /**
     * Get mails
     * @returns {Promise<any[]>}
     */
    getMails() {
        if (this.routeParams.folderHandle) {
            return this.getMailsByFolder(this.routeParams.folderHandle);
        }
        else if (this.routeParams.filterHandle) {
            return this.getMailsByFilter(this.routeParams.filterHandle);
        }
        else if (this.routeParams.labelHandle) {
            return this.getMailsByLabel(this.routeParams.labelHandle);
        }
        else {
            return this.getMailsList();
        }
    }
    /**
     * Get mails list
     * @returns {Promise<any[]>}
     */
    getMailsList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.mailsUrl)
                .subscribe((response) => {
                this.mails = response;
                this.onMailsChanged.next(this.mails);
                resolve(this.mails);
            }, reject);
        });
    }
    /**
     * Get mails by folder
     * @param folder
     * @returns {Promise<any[]>}
     */
    getMailsByFolder(folder) {
        return new Promise((resolve, reject) => {
            this.http.get(this.mailsUrl + '?folder=' + folder)
                .subscribe((response) => {
                this.mails = response;
                this.onMailsChanged.next(this.mails);
                resolve(this.mails);
            }, reject);
        });
    }
    /**
     * Get mails by filter
     * @param filter
     * @returns {Promise<any[]>}
     */
    getMailsByFilter(filter) {
        return new Promise((resolve, reject) => {
            this.http.get(this.mailsUrl + '?' + filter + '=true')
                .subscribe((mails) => {
                this.mails = mails;
                this.onMailsChanged.next(this.mails);
                resolve(this.mails);
            }, reject);
        });
    }
    /**
     * Get mails by label
     * @param handle
     * @returns {Promise<any[]>}
     */
    getMailsByLabel(handle) {
        return new Promise((resolve, reject) => {
            this.http.get(this.labelsUrl + '?handle=' + handle)
                .subscribe((labels) => {
                const labelId = labels[0].id;
                this.http.get(this.mailsUrl + '?labels=' + labelId)
                    .subscribe((mails) => {
                    this.mails = mails;
                    this.onMailsChanged.next(this.mails);
                    resolve(this.mails);
                }, reject);
            });
        });
    }
    /**
     * Get all labels
     * @returns {Promise<any[]>}
     */
    getLabels() {
        return new Promise((resolve, reject) => {
            this.http.get(this.labelsUrl)
                .subscribe((response) => {
                this.labels = response;
                this.onLabelsChanged.next(this.labels);
                resolve(this.labels);
            }, reject);
        });
    }
    /**
     * Get all filters
     * @returns {Promise<any[]>}
     */
    getFilters() {
        return new Promise((resolve, reject) => {
            this.http.get(this.filtersUrl)
                .subscribe((response) => {
                this.filters = response;
                this.onFiltersChanged.next(this.filters);
                resolve(this.filters);
            }, reject);
        });
    }
    /**
     * Get all folders
     * @returns {Promise<any[]>}
     */
    getFolders() {
        return new Promise((resolve, reject) => {
            this.http.get(this.foldersUrl)
                .subscribe((response) => {
                this.folders = response;
                this.onFoldersChanged.next(this.folders);
                resolve(this.folders);
            }, reject);
        });
    }
    /**
     * Get all contacts
     * @returns {Promise<Contact[]>}
     */
    getContacts() {
        return new Promise((resolve, reject) => {
            this.http.get(this.contactsUrl)
                .subscribe((response) => {
                this.contacts = response;
                this.onContactsChanged.next(this.contacts);
                resolve(this.contacts);
            }, reject);
        });
    }
    /**
     * Toggle selected mail by id
     * @param id
     */
    toggleSelectedMail(id) {
        // First, check if we already have that mail as selected...
        if (this.selectedMails.length > 0) {
            for (const mail of this.selectedMails) {
                // ...delete the selected mail
                if (mail.id === id) {
                    const index = this.selectedMails.indexOf(mail);
                    if (index !== -1) {
                        this.selectedMails.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedMailsChanged.next(this.selectedMails);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedMails.push(this.mails.find(mail => {
            return mail.id === id;
        }));
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }
    /**
     * Toggle select all
     */
    toggleSelectAll() {
        if (this.selectedMails.length > 0) {
            this.deselectMails();
        }
        else {
            this.selectMails();
        }
    }
    selectMails(filterParameter, filterValue) {
        this.selectedMails = [];
        // If there is no filter, select all mails
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedMails = this.mails.map(x => Object.assign({}, x));
        }
        else {
            this.selectedMails.push(...this.mails.filter(mail => {
                return mail[filterParameter] === filterValue;
            }));
        }
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }
    deselectMails() {
        this.selectedMails = [];
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }
    /**
     * Toggle label on selected mails
     * @param labelId
     */
    toggleLabelOnSelectedMails(labelId) {
        this.selectedMails.map(mail => {
            const index = mail.labels.indexOf(labelId);
            if (index !== -1) {
                mail.labels.splice(index, 1);
            }
            else {
                mail.labels.push(labelId);
            }
            this.saveMail(mail);
        });
    }
    /**
     * Set folder on selected mails
     * @param folderHandle
     */
    setFolderOnSelectedMails(folderHandle) {
        this.selectedMails.map(mail => {
            mail.folder = folderHandle;
            this.saveMail(mail);
        });
        this.deselectMails();
    }
    /**
     * Set current mail by id
     * @param id
     */
    setCurrentMail(id) {
        this.currentMail = this.mails.find(mail => {
            if (id) {
                return mail.id === id;
            }
            return false;
        });
        this.onCurrentMailChanged.next(this.currentMail);
        const taskParam = (this.currentMail) ? '/' + this.currentMail.id : '';
        const labelHandle = this.routeParams.labelHandle;
        const folderHandle = this.routeParams.folderHandle;
        const filterHandle = this.routeParams.filterHandle;
        const segments = this.location.path().split('/');
        if (labelHandle) {
            this.location.go(segments[1] + '/ticket/label/' + labelHandle + taskParam);
        }
        else if (filterHandle) {
            this.location.go(segments[1] + '/ticket/filter/' + filterHandle + taskParam);
        }
        else if (filterHandle) {
            this.location.go(segments[1] + '/ticket/' + folderHandle + taskParam);
        }
        else {
            this.location.go(segments[1] + '/ticket/inbox' + taskParam);
        }
    }
    /**
     * Toggle label on task
     * @param labelId
     * @param mail
     */
    toggleLabel(labelId, mail) {
        const index = mail.labels.indexOf(labelId);
        if (index !== -1) {
            mail.labels.splice(index, 1);
        }
        else {
            mail.labels.push(labelId);
        }
        this.saveMail(mail);
    }
    /**
     * Check mail has given label
     * @param labelId
     * @param mail
     * @return {boolean}
     */
    hasLabel(labelId, mail) {
        if (!mail.labels) {
            return false;
        }
        return mail.labels.indexOf(labelId) !== -1;
    }
    /**
     * Save a mail
     * @param {Mail} mail
     * @return {Promise<any>}
     */
    saveMail(mail) {
        return new Promise((resolve, reject) => {
            this.http.post(this.mailsUrl + '/' + mail.id, Object.assign({}, mail))
                .subscribe(response => {
                this.getMails().then(mails => {
                    resolve(mails);
                }, reject);
            });
        });
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "MUj3":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-details/mail-conversation/mail-conversation.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MailConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConversationComponent", function() { return MailConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_gx_toggle_gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-toggle/gx-star/gx-star.component */ "MhBl");
/* harmony import */ var _gaxon_pipes_html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../gaxon/pipes/html-to-plain-text.pipe */ "1ica");
/* harmony import */ var _gaxon_pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../gaxon/pipes/nl2br.pipe */ "csoJ");







function MailConversationComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "htmlToPlainText");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.conversation.message), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MailConversationComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "nl2br");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.conversation.message), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class MailConversationComponent {
    constructor() {
        this.classlist = 'dt-module__list-item';
    }
    ngOnInit() {
    }
}
MailConversationComponent.ɵfac = function MailConversationComponent_Factory(t) { return new (t || MailConversationComponent)(); };
MailConversationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailConversationComponent, selectors: [["mail-conversation"]], hostVars: 4, hostBindings: function MailConversationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpened);
    } }, inputs: { conversation: "conversation" }, decls: 10, vars: 6, consts: [[1, "mr-4", "cursor-pointer", 3, "user", "click"], [1, "dt-module__list-item-content"], [1, "d-inline-block", "mb-1", "cursor-pointer", 3, "click"], ["class", "mb-0 text-light-gray text-truncate", 3, "innerHTML", 4, "ngIf"], ["class", "mb-0 text-light-gray", 3, "innerHTML", 4, "ngIf"], [1, "dt-module__list-item-info"], [1, "mt-1"], [1, "ml-sm-3", 3, "gxModel"], [1, "mb-0", "text-light-gray", "text-truncate", 3, "innerHTML"], [1, "mb-0", "text-light-gray", 3, "innerHTML"]], template: function MailConversationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gx-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailConversationComponent_Template_gx_avatar_click_0_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailConversationComponent_Template_h4_click_2_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MailConversationComponent_p_4_Template, 2, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MailConversationComponent_p_5_Template, 2, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-star", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.conversation.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.conversation.from.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.conversation.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gxModel", ctx.conversation.starred);
    } }, directives: [_gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_1__["GxAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gaxon_components_gx_toggle_gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_3__["GxStarComponent"]], pipes: [_gaxon_pipes_html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_4__["HtmlToPlainTextPipe"], _gaxon_pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_5__["Nl2brPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailConversationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-conversation',
                templateUrl: './mail-conversation.component.html'
            }]
    }], function () { return []; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], isOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }], conversation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OXAT":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/mail/helper-widgets/contact/contact.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mail.service */ "KOQm");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");




class ContactComponent {
    constructor(el, mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-contact';
        this.contactCardData = { show: false };
        this.el = el.nativeElement;
    }
    ngOnInit() {
    }
    onMouseEnter() {
        this.contactCardData.position = this.el.getBoundingClientRect();
        this.contactCardData.show = true;
        this.contactCardData.contact = this.contact;
        this.mailService.onContactHovered.next(this.contactCardData);
    }
    onMouseLeave() {
        this.contactCardData.show = false;
        this.mailService.onContactHovered.next(this.contactCardData);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["mail-contact"]], hostVars: 2, hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ContactComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ContactComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, inputs: { contact: "contact" }, decls: 6, vars: 4, consts: [[3, "user", "charLength"], [1, "dt-contact__info"], [1, "dt-contact__title"], [1, "dt-contact__desc"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.contact)("charLength", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.first_name + " " + ctx.contact.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.bio);
    } }, directives: [_gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_2__["GxAvatarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-contact',
                templateUrl: './contact.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "P1h1":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-compose/mail-compose.component.ts ***!
  \***************************************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gaxon_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaxon/helpers */ "XIvi");
/* harmony import */ var _models_mail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/mail.model */ "pWhx");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../mail.service */ "KOQm");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function MailComposeComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MailComposeComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MailComposeComponent {
    constructor(mailService, componentRef, formBuilder) {
        this.mailService = mailService;
        this.componentRef = componentRef;
        this.formBuilder = formBuilder;
        this.classlist = 'compose-mail-box';
        this.minimized = false;
        this.componentRef.nativeElement.style.display = 'none';
    }
    ngOnInit() {
        this.composeMailForm = this.createComposeForm();
        // Subscribe to update composedMail on changes
        this.onComposeMailClicked = this.mailService.onComposeMailClicked
            .subscribe((response) => {
            this.componentRef.nativeElement.style.display = 'block';
            this.composeMail = this.resetMail();
        });
    }
    /**
     * Reset new mail
     * @return {Mail}
     */
    resetMail() {
        const newMail = new _models_mail_model__WEBPACK_IMPORTED_MODULE_3__["Mail"]();
        newMail.id = _gaxon_helpers__WEBPACK_IMPORTED_MODULE_2__["GxHelper"].UUID();
        newMail.from = this.mailService.currentUser;
        newMail.read = true;
        newMail.attachments = [];
        newMail.labels = [];
        newMail.conversation = [];
        return newMail;
    }
    /**
     * Create comose reactive form
     */
    createComposeForm() {
        const subject = 'subject';
        const message = 'Hi Mate,\n' +
            'Sorry for the delay in response!\n' +
            'I’m afraid, I won’t be able to join you in the conference call. I have to take my\n' +
            'daughter for her game. I hope that is ok.\n' +
            '\n' +
            'Cheers!\n' +
            'Dom';
        const toUsers = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        toUsers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }));
        return this.formBuilder.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](subject, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](message, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            to: toUsers
        });
    }
    /**
     * On close form
     * @param event
     */
    onCloseClick(event) {
        event.stopPropagation();
        const today = new Date();
        this.composeMail.time = today.getDate() + ' ' + today.toLocaleString('en', { month: 'short' });
        this.composeMail.folder = 'drafts';
        this.composeMail.subject = this.composeMailForm.get('subject').value;
        this.composeMail.message = this.composeMailForm.get('message').value;
        this.composeMail.to = this.composeMailForm.get('to').value;
        this.saveMail(this.composeMail).then((response) => {
            this.composeMailForm = this.createComposeForm();
            this.composeMail = this.resetMail();
            this.componentRef.nativeElement.style.display = 'none';
        });
    }
    /**
     * On submit form
     */
    onSubmitForm() {
        const today = new Date();
        this.composeMail.time = today.getDate() + ' ' + today.toLocaleString('en', { month: 'short' });
        this.composeMail.folder = 'sent';
        this.composeMail.subject = this.composeMailForm.get('subject').value;
        this.composeMail.message = this.composeMailForm.get('message').value;
        this.composeMail.to = this.composeMailForm.get('to').value;
        this.saveMail(this.composeMail).then((response) => {
            this.composeMailForm = this.createComposeForm();
            this.composeMail = this.resetMail();
            this.componentRef.nativeElement.style.display = 'none';
        });
    }
    /**
     * Save mail in data
     * @param mail
     * @return {Promise<any>}
     */
    saveMail(mail) {
        return this.mailService.saveMail(mail);
    }
    /**
     * On Discard Mail
     */
    onDiscardMail() {
        this.composeMailForm = this.createComposeForm();
        this.composeMail = this.resetMail();
        this.componentRef.nativeElement.style.display = 'none';
    }
    ngOnDestroy() {
        this.onComposeMailClicked.unsubscribe();
    }
}
MailComposeComponent.ɵfac = function MailComposeComponent_Factory(t) { return new (t || MailComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
MailComposeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailComposeComponent, selectors: [["app-mail-compose"]], hostVars: 2, hostBindings: function MailComposeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 33, vars: 6, consts: [["perfectScrollbar", ""], [1, "compose-mail-box__header", "cursor-pointer", 3, "click"], [1, "title"], ["name", "editors", "size", "xl", 1, "mr-2", 3, "fw"], [1, "action-area", "ml-auto"], ["class", "text-white mr-3", "href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)", 1, "text-white", 3, "click"], ["name", "remove", "size", "sm"], [1, "compose-mail-box__body", 3, "hidden"], [3, "formGroup", "submit"], ["formArrayName", "to", 1, "form-group", "mb-1"], [3, "formGroupName"], ["for", "email", 1, "sr-only"], ["type", "email", "id", "email", "placeholder", "Enter email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "form-group"], ["for", "subject", 1, "sr-only"], ["type", "text", "placeholder", "Subject", "id", "subject", "name", "subject", "formControlName", "subject", 1, "form-control"], ["for", "textarea", 1, "sr-only"], ["placeholder", "Your message here...", "id", "textarea", "name", "message", "formControlName", "message", 1, "form-control"], [1, "d-flex", "align-items-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], ["href", "javascript:void(0)", 1, "text-dark", 3, "click"], ["name", "trash", 1, "mr-1"], [1, "f-12", "text-uppercase"], ["href", "javascript:void(0)", 1, "text-white", "mr-3"], ["name", "chevrolet-up", "size", "xl"], ["name", "chevrolet-down", "size", "xl"]], template: function MailComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComposeComponent_Template_div_click_1_listener() { return ctx.minimized = !ctx.minimized; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Compose New Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MailComposeComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MailComposeComponent_a_7_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComposeComponent_Template_a_click_8_listener($event) { return ctx.onCloseClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function MailComposeComponent_Template_form_submit_11_listener() { return ctx.onSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComposeComponent_Template_a_click_29_listener() { return ctx.onDiscardMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "gx-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.composeMailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", 0);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_6__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWNvbXBvc2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailComposeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-compose',
                templateUrl: './mail-compose.component.html',
                styleUrls: ['./mail-compose.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "R8Wm":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-sidebar/mail-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: MailSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSidebarComponent", function() { return MailSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaxon/mix/animations */ "0L9v");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mail.service */ "KOQm");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../drawer.service */ "+6zA");
/* harmony import */ var _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/settings/settings.service */ "b1TM");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper-widgets/contact/contact.component */ "OXAT");













const _c0 = function (a0) { return { "active": a0 }; };
function MailSidebarComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailSidebarComponent_a_6_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleNavigation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.settings.activeNavDrawer));
} }
function MailSidebarComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MailSidebarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx_r2.settings.layout + "/ticket/" + folder_r8.handle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", folder_r8.icon)("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r8.title);
} }
function MailSidebarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx_r3.settings.layout + "/ticket/filter/" + filter_r9.handle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", filter_r9.icon)("fw", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r9.title);
} }
function MailSidebarComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx_r4.settings.layout + "/ticket/label/" + label_r10.handle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true)("ngClass", label_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r10.title);
} }
function MailSidebarComponent_mail_contact_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mail-contact", 35);
} if (rf & 2) {
    const contact_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r11);
} }
const _c1 = function (a0, a1) { return { "active": a0, "d-none d-md-block": a1 }; };
const _c2 = function () { return ["/ticket/ticket-generate"]; };
class MailSidebarComponent {
    constructor(mailService, drawerService, settingService, router) {
        this.mailService = mailService;
        this.drawerService = drawerService;
        this.settingService = settingService;
        this.router = router;
        this.classNames = 'dt-module__sidebar';
        this.isOpen = false;
        this.contacts = [];
        this.labels = [];
        this.folders = [];
        this.filters = [];
        this.headerLessLayout = ['modern', 'back-office', 'back-office-mini'];
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
            this.activeMenu = this.drawer.activeMenu;
            if (!this.drawer.isOpen) {
                this.activeMenu = '';
            }
        });
        this.onSettingChanged = this.settingService.onSettingChanged.subscribe((newSettings) => {
            this.settings = newSettings;
            this.hiddenPageHeader = this.headerLessLayout.includes(this.settings.layout);
        });
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.isOpen = window.innerWidth > 767;
            }
        });
    }
    onResize(event) {
        this.isOpen = event.target.innerWidth > 767;
    }
    ngOnInit() {
        // Subscribe to update lebels on changes
        this.onLabelsChanged = this.mailService.onLabelsChanged
            .subscribe(labels => {
            this.labels = labels;
        });
        // Subscribe to update filters on changes
        this.onFiltersChanged = this.mailService.onFiltersChanged
            .subscribe(filters => {
            this.filters = filters;
        });
        // Subscribe to update folders on changes
        this.onFoldersChanged = this.mailService.onFoldersChanged
            .subscribe(folders => {
            console.log(this.folders);
            this.folders = folders;
        });
        // Subscribe to update contacts on changes
        this.onContactsChanged = this.mailService.onContactsChanged
            .subscribe(contacts => {
            this.contacts = contacts;
        });
        // display app sidebar
        this.isOpen = window.innerWidth > 767;
    }
    /**
     * On Click Menu
     */
    onClickMenu(event, activeMenu) {
        event.preventDefault();
        this.drawer.activeMenu = this.activeMenu = activeMenu;
        this.drawer.isOpen = true;
        this.drawerService.update(this.drawer);
    }
    /**
     * Toggle collapse
     *
     * @param ev
     */
    toggleOpen(ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
    }
    onComposeMail() {
        this.mailService.onComposeMailClicked.next('');
    }
    /**
     * Toggle main navigation
     * @param event
     */
    toggleNavigation(event) {
        event.preventDefault();
        this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
        this.settingService.setSettings(this.settings);
    }
    ngOnDestroy() {
        this.onContactsChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
        this.onSettingChanged.unsubscribe();
    }
}
MailSidebarComponent.ɵfac = function MailSidebarComponent_Factory(t) { return new (t || MailSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_drawer_service__WEBPACK_IMPORTED_MODULE_4__["DrawerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MailSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailSidebarComponent, selectors: [["mail-sidebar"]], hostVars: 4, hostBindings: function MailSidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MailSidebarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isOpen);
    } }, decls: 35, vars: 20, consts: [[1, "dt-module__sidebar-header", "border-bottom"], [1, "d-none", "d-md-flex", "align-items-center"], ["name", "open-mail", "size", "1x", 1, "mr-3", "text-dark"], [1, "h3", "mb-0"], [1, "quick-menu-list", "d-md-none"], ["href", "javascript:void(0)", "class", "quick-menu mr-auto d-md-none", 3, "ngClass", "click", 4, "ngIf"], ["class", "search-box d-md-none", 4, "ngIf"], ["href", "javascript:void(0)", 1, "quick-menu", 3, "ngClass", "click"], ["name", "search"], ["href", "javascript:void(0)", 1, "quick-menu", 3, "click"], ["name", "editors"], ["name", "notification2"], ["href", "javascript:void(0)", 1, "quick-menu", "d-md-none", 3, "ngClass", "click"], [3, "name"], ["perfectScrollbar", "", 1, "dt-module__sidebar-content", "position-relative"], [1, "dt-module__sidebar-content-inner"], [1, "action-area", "mt-5", "mb-7", "d-none", "d-md-block"], ["href", "javascript:void(0)", 1, "btn", "btn-shadow", "btn-default", "compose-btn", "btn-rounded", 3, "routerLink"], [1, "dt-module-side-nav"], ["class", "dt-module-side-nav__item", "routerLinkActive", "active", 4, "ngFor", "ngForOf"], [1, "dt-module-side-nav__header"], [1, "dt-module-side-nav__text"], [1, "dt-contacts", "contacts-list"], [1, "dt-contact__heading", "text-uppercase"], [3, "contact", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "quick-menu", "mr-auto", "d-md-none", 3, "ngClass", "click"], ["name", "menu"], [1, "search-box", "d-md-none"], ["type", "search", "id", "address", "name", "address", "placeholder", "Search in app...", 1, "form-control"], ["type", "submit", 1, "search-icon"], ["name", "search", "size", "lg"], ["routerLinkActive", "active", 1, "dt-module-side-nav__item"], [1, "dt-module-side-nav__link", 3, "routerLink"], ["size", "lg", 3, "name", "fw"], ["name", "tag", "size", "lg", 3, "fw", "ngClass"], [3, "contact"]], template: function MailSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MailSidebarComponent_a_6_Template, 2, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MailSidebarComponent_form_7_Template, 4, 0, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailSidebarComponent_Template_a_click_8_listener($event) { return ctx.onClickMenu($event, "search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailSidebarComponent_Template_a_click_10_listener() { return ctx.onComposeMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "gx-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailSidebarComponent_Template_a_click_12_listener($event) { return ctx.onClickMenu($event, "notifications"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "gx-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailSidebarComponent_Template_a_click_14_listener($event) { return ctx.toggleOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "gx-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Create New Ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MailSidebarComponent_li_22_Template, 5, 4, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MailSidebarComponent_li_26_Template, 5, 4, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MailSidebarComponent_li_30_Template, 5, 4, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CONNECTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MailSidebarComponent_mail_contact_34_Template, 1, 1, "mail-contact", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiddenPageHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hiddenPageHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c1, ctx.activeMenu == "search", !ctx.hiddenPageHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.activeMenu == "notifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.hiddenPageHeader ? "vertical-more" : "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapseAppSidebar", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_6__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _helper_widgets_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]], encapsulation: 2, data: { animation: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_2__["appAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-sidebar',
                templateUrl: './mail-sidebar.component.html',
                animations: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_2__["appAnimations"]
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }, { type: _drawer_service__WEBPACK_IMPORTED_MODULE_4__["DrawerService"] }, { type: _app_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { classNames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "WfiI":
/*!******************************************************!*\
  !*** ./src/app/content/pages/mail/mail.component.ts ***!
  \******************************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-widgets/contact-hover-card/contact-hover-card.component */ "EWvb");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "P1h1");
/* harmony import */ var _gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/services/dynamic-dom.service */ "MhUC");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail.service */ "KOQm");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../drawer.service */ "+6zA");
/* harmony import */ var _mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-sidebar/mail-sidebar.component */ "R8Wm");
/* harmony import */ var _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module-header/module-header.component */ "qyRL");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "nsYW");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drawer/drawer.component */ "k0bI");
/* harmony import */ var _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mail-details/mail-details.component */ "IuHE");














function MailComponent_app_mail_details_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mail-details", 8);
} }
function MailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_div_9_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeDrawer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "open": a0 }; };
class MailComponent {
    constructor(dynamicDom, mailService, drawerService) {
        this.dynamicDom = dynamicDom;
        this.mailService = mailService;
        this.drawerService = drawerService;
        this.hoverCard = this.dynamicDom.appendComponentToBody(_helper_widgets_contact_hover_card_contact_hover_card_component__WEBPACK_IMPORTED_MODULE_1__["ContactHoverCardComponent"]);
        this.composeMail = this.dynamicDom.appendComponentToBody(_mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__["MailComposeComponent"]);
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            this.drawer = drawer;
        });
    }
    ngOnInit() {
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                if (!currentMail) {
                    this.currentMail = null;
                }
                else {
                    this.currentMail = currentMail;
                }
            });
    }
    /**
     * Close Drawer
     * @param event
     */
    closeDrawer(event) {
        event.preventDefault();
        this.drawer.isOpen = false;
        this.drawerService.update(this.drawer);
    }
    ngOnDestroy() {
        this.dynamicDom.destroyCard(this.hoverCard);
        this.dynamicDom.destroyCard(this.composeMail);
        this.onCurrentMailChanged.unsubscribe();
        this.onDrawerChanged.unsubscribe();
    }
}
MailComponent.ɵfac = function MailComponent_Factory(t) { return new (t || MailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_3__["DynamicDomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_drawer_service__WEBPACK_IMPORTED_MODULE_5__["DrawerService"])); };
MailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailComponent, selectors: [["app-mail"]], decls: 10, vars: 6, consts: [[1, "row"], [1, "col-xl-12"], [1, "dt-module"], [1, "dt-module__container"], ["perfectScrollbar", "", 3, "hidden"], ["perfectScrollbar", "", 4, "ngIf"], [3, "ngClass"], ["class", "dt-backdrop", 3, "click", 4, "ngIf"], ["perfectScrollbar", ""], [1, "dt-backdrop", 3, "click"]], template: function MailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mail-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mail-module-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-mail-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MailComponent_app_mail_details_7_Template, 1, 0, "app-mail-details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mail-drawer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MailComponent_div_9_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.currentMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.drawer.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drawer.isOpen);
    } }, directives: [_mail_sidebar_mail_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["MailSidebarComponent"], _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_7__["ModuleHeaderComponent"], _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_8__["MailListComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_11__["DrawerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_12__["MailDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail',
                templateUrl: './mail.component.html',
                styleUrls: ['./mail.component.scss']
            }]
    }], function () { return [{ type: _gaxon_services_dynamic_dom_service__WEBPACK_IMPORTED_MODULE_3__["DynamicDomService"] }, { type: _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"] }, { type: _drawer_service__WEBPACK_IMPORTED_MODULE_5__["DrawerService"] }]; }, null); })();


/***/ }),

/***/ "Znba":
/*!********************************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-details/details-header/details-header.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DetailsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderComponent", function() { return DetailsHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mail.service */ "KOQm");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper-widgets/badges/badges.component */ "GdpN");







const _c0 = function (a0) { return { "active": a0 }; };
function DetailsHeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const folder_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setFolder(folder_r2.handle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, folder_r2.handle == ctx_r0.currentMail.folder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r2.title);
} }
function DetailsHeaderComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const label_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleLabel(label_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.hasLabel(label_r5.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r5.title);
} }
class DetailsHeaderComponent {
    constructor(eleRef, mailService) {
        this.eleRef = eleRef;
        this.mailService = mailService;
        this.classlist = 'd-block px-1 pb-4 border-bottom border-w-2';
        this.labels = [];
        this.folders = [];
    }
    ngOnInit() {
        // Subscribe to update currentMail on changes
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                if (!currentMail) {
                    this.currentMail = null;
                    this.eleRef.nativeElement.classList.add('mb-1');
                    this.eleRef.nativeElement.classList.add('mt-n1');
                }
                else {
                    this.currentMail = currentMail;
                }
            });
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe((labels) => {
                this.labels = labels;
            });
        // Subscribe to update folders on changes
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe((folders) => {
                this.folders = folders;
            });
    }
    /**
     * Go to back mail listing
     */
    goToBack() {
        this.mailService.setCurrentMail(null);
    }
    /**
     * On toggle starred
     */
    onToggleStarred(event) {
        this.currentMail.starred = event;
        this.mailService.saveMail(this.currentMail);
    }
    /**
     * Mark mail as unread
     */
    markAsUnread() {
        this.currentMail.read = false;
        this.mailService.saveMail(this.currentMail).then((response) => {
            this.goToBack();
        });
    }
    /**
     * Change folder to selected emails
     * @param folderHandle
     */
    setFolder(folderHandle) {
        this.currentMail.folder = folderHandle;
        this.mailService.saveMail(this.currentMail).then((response) => {
            if (folderHandle == 'trash') {
                this.goToBack();
            }
        });
    }
    /**
     * Check Mail has label
     * @param labelId
     * @return {any | boolean}
     */
    hasLabel(labelId) {
        return this.mailService.hasLabel(labelId, this.currentMail);
    }
    /**
     * Change lables to selectd emails
     * @param labelId
     */
    toggleLabel(labelId) {
        this.mailService.toggleLabel(labelId, this.currentMail);
    }
    ngOnDestroy() {
        this.onCurrentMailChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
        this.onFoldersChanged.unsubscribe();
    }
}
DetailsHeaderComponent.ɵfac = function DetailsHeaderComponent_Factory(t) { return new (t || DetailsHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"])); };
DetailsHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsHeaderComponent, selectors: [["mail-details-header"]], hostVars: 2, hostBindings: function DetailsHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 35, vars: 11, consts: [[1, "d-flex", "flex-wrap", "mb-5"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-dark", "btn-sm", "mr-auto", "mb-1", 3, "click"], ["name", "arrow-left", "size", "lg", 3, "fw"], ["role", "group", 1, "btn-group", "btn-group-sm", "mr-3", "mr-lg-7", "mb-1"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["name", "archive", "size", "lg", 3, "fw"], ["name", "spam", "size", "lg", 3, "fw"], ["name", "trash-filled", "size", "lg", 3, "fw"], ["role", "group", 1, "btn-group", "btn-group-sm", "mr-4", "mr-lg-7", "mb-1"], ["role", "group", "ngbDropdown", "", 1, "btn-group", "btn-group-sm"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-dark", "no-arrow"], ["name", "folder", "size", "lg", 3, "fw"], ["ngbDropdownMenu", ""], ["href", "javascript:void(0)", "class", "dropdown-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "group", "ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "btn-group-sm"], ["name", "tag", "size", "lg", 3, "fw"], ["ngbDropdown", "", "placement", "bottom-right"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "btn", "btn-outline-dark", "btn-sm"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "d-flex", "flex-wrap"], [1, "mb-0", "text-truncate", "flex-1"], [1, "ml-auto", "dt-module__list-item-info", 3, "ids", "labels"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "ngClass", "click"]], template: function DetailsHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_a_click_1_listener() { return ctx.goToBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_button_click_4_listener() { return ctx.setFolder("archive"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gx-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_button_click_6_listener() { return ctx.setFolder("spam"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gx-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_button_click_8_listener() { return ctx.setFolder("trash"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "gx-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "gx-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetailsHeaderComponent_a_15_Template, 2, 4, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "gx-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetailsHeaderComponent_a_20_Template, 2, 4, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_a_click_25_listener() { return ctx.markAsUnread(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_a_click_27_listener() { return ctx.onToggleStarred(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsHeaderComponent_Template_a_click_29_listener() { return ctx.onToggleStarred(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Unstarred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "task-badges", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentMail.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ids", ctx.currentMail.labels)("labels", ctx.labels);
    } }, directives: [_gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_5__["BadgesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-details-header',
                templateUrl: './details-header.component.html',
                styleUrls: ['./details-header.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "d7xs":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-list/mail-item/mail-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailItemComponent", function() { return MailItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mail.service */ "KOQm");
/* harmony import */ var _gaxon_components_gx_toggle_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-toggle/gx-checkbox/gx-checkbox.component */ "5xlS");
/* harmony import */ var _gaxon_components_gx_toggle_gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-toggle/gx-star/gx-star.component */ "MhBl");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");
/* harmony import */ var _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper-widgets/badges/badges.component */ "GdpN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_pipes_html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../gaxon/pipes/html-to-plain-text.pipe */ "1ica");









class MailItemComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-module__list-item cursor-pointer';
        this.labels = [];
    }
    ngOnInit() {
        // Subscribe to update labels on changes
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe((labels) => {
                this.labels = labels;
            });
        // Subscribe to update SelectedMails on changes
        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(selectedMails => {
                this.selected = selectedMails.find((mail) => {
                    return mail.id === this.mail.id;
                });
            });
    }
    onSelectedChange(event) {
        this.selected = event;
        this.mailService.toggleSelectedMail(this.mail.id);
    }
    /**
     * On toggle starred
     */
    onToggleStarred(event) {
        this.mail.starred = event;
        this.mailService.saveMail(this.mail);
    }
    ngOnDestroy() {
        this.onLabelsChanged.unsubscribe();
        this.onSelectedMailsChanged.unsubscribe();
    }
}
MailItemComponent.ɵfac = function MailItemComponent_Factory(t) { return new (t || MailItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"])); };
MailItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailItemComponent, selectors: [["mail-item"]], hostVars: 4, hostBindings: function MailItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { mail: "mail" }, decls: 21, vars: 22, consts: [[1, "mr-5", 3, "gxModel", "gxInputChange"], [1, "mr-4", 3, "user"], ["data-location", "mail-detail.html", 1, "dt-module__list-item-content"], [1, "user-detail"], [1, "user-name"], [1, "dt-separator-v"], [1, "designation"], [1, "mb-0", "text-light-gray", "text-truncate"], [1, "dt-module__list-item-info"], [1, "badge-group", 3, "ids", "labels", "showAll"]], template: function MailItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gx-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gxInputChange", function MailItemComponent_Template_gx_checkbox_gxInputChange_0_listener($event) { return ctx.onSelectedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gx-star", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gxInputChange", function MailItemComponent_Template_gx_star_gxInputChange_1_listener($event) { return ctx.onToggleStarred($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "htmlToPlainText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "htmlToPlainText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "task-badges", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gxModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gxModel", ctx.mail.starred);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.mail.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mail.from.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, ctx.mail.subject), 0, 30));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, ctx.mail.message), 0, 100));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ids", ctx.mail.labels)("labels", ctx.labels)("showAll", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mail.time);
    } }, directives: [_gaxon_components_gx_toggle_gx_checkbox_gx_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["GxCheckboxComponent"], _gaxon_components_gx_toggle_gx_star_gx_star_component__WEBPACK_IMPORTED_MODULE_3__["GxStarComponent"], _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_4__["GxAvatarComponent"], _helper_widgets_badges_badges_component__WEBPACK_IMPORTED_MODULE_5__["BadgesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _gaxon_pipes_html_to_plain_text_pipe__WEBPACK_IMPORTED_MODULE_7__["HtmlToPlainTextPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-item',
                templateUrl: './mail-item.component.html',
                styleUrls: ['./mail-item.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selected']
        }], mail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gfPm":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/mail/helper-widgets/search-bar/search-bar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../mail.service */ "KOQm");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");







class SearchBarComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'search-box ml-n4';
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    ngOnInit() {
        this.searchQuery.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(searchText => {
            this.mailService.onSearchQueryChanged.next(searchText);
        });
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["mail-search-bar"]], hostVars: 2, hostBindings: function SearchBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 4, vars: 1, consts: [["type", "search", "placeholder", "Search in mails...", 1, "form-control", "border-0", "shadow-none", "bg-focus", "form-control-sm", 3, "formControl"], [1, "search-icon"], ["name", "search", "size", "lg"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchQuery);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "k0bI":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/mail/drawer/drawer.component.ts ***!
  \***************************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _drawer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../drawer.service */ "+6zA");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_widgets_gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../gaxon/components/widgets/gx-loader/gx-loader.component */ "bnsK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "uI6b");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications/notifications.component */ "DVti");









const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
class DrawerComponent {
    constructor(drawerService) {
        this.drawerService = drawerService;
        this.draverClasses = 'dt-module__drawer dt-drawer position-left';
        this.isOpen = false;
        this.showLoader = false;
        this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
            if (!this.activeMenu) {
                this.processLoader();
            }
            this.drawer = drawer;
            this.isOpen = this.isOpen;
            this.activeMenu = this.drawer.activeMenu;
            if (!this.drawer.isOpen) {
                this.activeMenu = '';
            }
        });
    }
    ngOnInit() {
    }
    processLoader() {
        this.showLoader = true;
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
    }
    /**
     * Close Drawer
     * @param event
     */
    closeDrawer(event) {
        event.preventDefault();
        this.drawer.isOpen = false;
        this.drawerService.update(this.drawer);
    }
    onSelectMenu(event, activeMenu) {
        event.preventDefault();
        this.processLoader();
        this.drawer.activeMenu = this.activeMenu = activeMenu;
        this.drawerService.update(this.drawer);
    }
    ngOnDestroy() {
        this.onDrawerChanged.unsubscribe();
    }
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_drawer_service__WEBPACK_IMPORTED_MODULE_1__["DrawerService"])); };
DrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["mail-drawer"]], hostVars: 4, hostBindings: function DrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.draverClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
    } }, decls: 21, vars: 17, consts: [[1, "dt-module__drawer-inner"], [1, "dt-module__drawer-header"], ["href", "javascript:void(0)", 1, "d-inline-block", 3, "click"], ["name", "arrow-long-left", "size", "2x", 1, "mr-3"], [1, "align-middle"], [1, "dt-actionable-drawer"], [1, "dt-action-bar"], [1, "dt-action-nav"], [1, "dt-action-nav__item", 3, "ngClass"], ["href", "javascript:void(0)", 1, "dt-action-nav__link", 3, "click"], ["name", "notification2", 3, "fw"], ["name", "search", 3, "fw"], [1, "dt-action-content-wrapper"], [3, "ngClass"], ["perfectScrollbar", "", 1, "dt-action-content", "fade", "position-relative", 3, "ngClass"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_2_listener($event) { return ctx.closeDrawer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_10_listener($event) { return ctx.onSelectMenu($event, "notifications"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "gx-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_13_listener($event) { return ctx.onSelectMenu($event, "search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "gx-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "gx-loader", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "todo-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "todo-notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.activeMenu == "notifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.activeMenu == "search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.showLoader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, !ctx.showLoader && ctx.activeMenu == "search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, !ctx.showLoader && ctx.activeMenu == "notifications"));
    } }, directives: [_gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_2__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _gaxon_components_widgets_gx_loader_gx_loader_component__WEBPACK_IMPORTED_MODULE_4__["GxLoaderComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmF3ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-drawer',
                templateUrl: './drawer.component.html',
                styleUrls: ['./drawer.component.scss']
            }]
    }], function () { return [{ type: _drawer_service__WEBPACK_IMPORTED_MODULE_1__["DrawerService"] }]; }, { draverClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }] }); })();


/***/ }),

/***/ "nsYW":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/mail/mail-list/mail-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mail.service */ "KOQm");
/* harmony import */ var _mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mail-header/mail-header.component */ "+6p5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail-item/mail-item.component */ "d7xs");
/* harmony import */ var _gaxon_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../gaxon/pipes/filter.pipe */ "uSpw");








function MailListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No record found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MailListComponent_mail_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mail-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailListComponent_mail_item_4_Template_mail_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const mail_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.omMailClick(mail_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mail", mail_r2);
} }
class MailListComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.classlist = 'dt-module__content position-relative ps';
        this.mails = [];
        this.searchQuery = '';
    }
    ngOnInit() {
        // Subscribe to update mails on changes
        this.onMailsChanged = this.mailService.onMailsChanged
            .subscribe(mails => {
            this.mails = mails;
            setTimeout(() => {
                this.scrollToBottom();
            }, 300);
        });
        // Subscribe to update search keywords on changes
        this.onSearchQueryChanged = this.mailService.onSearchQueryChanged
            .subscribe(searchStr => {
            this.searchQuery = searchStr;
            if (searchStr) {
                this.mailService.setCurrentMail(null);
            }
        });
    }
    /**
     * On click mail
     * @param mailId
     */
    omMailClick(mailId) {
        this.mailService.setCurrentMail(mailId);
    }
    scrollToBottom() {
        if (this.directiveRef) {
            this.directiveRef.update();
            this.directiveRef.scrollToBottom();
        }
    }
    ngOnDestroy() {
        this.onMailsChanged.unsubscribe();
        this.onSearchQueryChanged.unsubscribe();
    }
}
MailListComponent.ɵfac = function MailListComponent_Factory(t) { return new (t || MailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"])); };
MailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailListComponent, selectors: [["app-mail-list"]], viewQuery: function MailListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 2, hostBindings: function MailListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 6, vars: 5, consts: [[1, "dt-module__content-inner"], [1, "dt-module__list"], ["class", "dt-module__list-item", 4, "ngIf"], [3, "mail", "click", 4, "ngFor", "ngForOf"], [1, "dt-module__list-item"], [1, "empty-result"], [3, "mail", "click"]], template: function MailListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mail-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MailListComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MailListComponent_mail_item_4_Template, 1, 1, "mail-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mails.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx.mails, ctx.searchQuery));
    } }, directives: [_mail_header_mail_header_component__WEBPACK_IMPORTED_MODULE_3__["MailHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _mail_item_mail_item_component__WEBPACK_IMPORTED_MODULE_5__["MailItemComponent"]], pipes: [_gaxon_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-list',
                templateUrl: './mail-list.component.html',
                styleUrls: ['./mail-list.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]]
        }] }); })();


/***/ }),

/***/ "pWhx":
/*!*********************************************************!*\
  !*** ./src/app/content/pages/mail/models/mail.model.ts ***!
  \*********************************************************/
/*! exports provided: Mail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
class Mail {
}


/***/ }),

/***/ "qyRL":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/mail/module-header/module-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModuleHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleHeaderComponent", function() { return ModuleHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app.service */ "F5nt");
/* harmony import */ var _helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-widgets/search-bar/search-bar.component */ "gfPm");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");









function ModuleHeaderComponent_a_15_gx_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-icon", 22);
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", notification_r1.icon.name)("ngClass", notification_r1.icon.color)("fw", true);
} }
function ModuleHeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gx-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModuleHeaderComponent_a_15_gx_icon_5_Template, 1, 3, "gx-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", notification_r1)("charLength", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notification_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r1.icon.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r1.time, " ");
} }
class ModuleHeaderComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-module__header d-none d-md-flex';
        this.notifications = [];
        this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications) => {
            this.notifications = notifications;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.onNotificationsChanged.unsubscribe();
    }
}
ModuleHeaderComponent.ɵfac = function ModuleHeaderComponent_Factory(t) { return new (t || ModuleHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ModuleHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleHeaderComponent, selectors: [["mail-module-header"]], hostVars: 2, hostBindings: function ModuleHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 20, vars: 3, consts: [["ngbDropdown", "", "placement", "bottom-right", 1, "ml-auto", "dt-notification"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "no-arrow"], ["name", "notification2", "size", "1x", 1, "dt-icon-alert", 3, "fw"], ["ngbDropdownMenu", "", 1, "dropdown-menu-media"], [1, "dropdown-menu-header"], [1, "title"], [1, "ml-auto", "action-area"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 1, "ml-2"], ["name", "settings", "size", "lg", 1, "text-light-gray"], ["perfectScrollbar", "", 1, "dropdown-menu-body", "position-relative"], [1, "h-auto"], ["href", "javascript:void(0)", "class", "media", 4, "ngFor", "ngForOf"], [1, "dropdown-menu-footer"], ["href", "javascript:void(0)", 1, "card-link"], ["name", "arrow-right", 3, "fw"], ["href", "javascript:void(0)", 1, "media"], [1, "mr-3", 3, "user", "charLength"], [1, "media-body"], [1, "message", 3, "innerHTML"], [1, "meta-date"], ["class", "mr-1", 3, "name", "ngClass", "fw", 4, "ngIf"], [1, "mr-1", 3, "name", "ngClass", "fw"]], template: function ModuleHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mail-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Notifications (9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mark All Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "gx-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModuleHeaderComponent_a_15_Template, 7, 5, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " See All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "gx-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fw", true);
    } }, directives: [_helper_widgets_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_7__["GxAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mail-module-header',
                templateUrl: './module-header.component.html',
                styleUrls: ['./module-header.component.scss']
            }]
    }], function () { return [{ type: _app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "uI6b":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/mail/drawer/search/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.service */ "F5nt");
/* harmony import */ var _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../gaxon/components/gx-icon/gx-icon.component */ "/Tuz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../gaxon/components/widgets/gx-avatar/gx-avatar.component */ "tjww");
/* harmony import */ var _gaxon_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../gaxon/pipes/filter.pipe */ "uSpw");










function SearchComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "gx-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", message_r1)("charLength", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", message_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SearchComponent {
    constructor(appService) {
        this.appService = appService;
        this.classlist = 'dt-notification';
        this.messages = [];
        this.searchText = '';
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages) => {
            this.messages = messages;
        });
    }
    ngOnInit() {
        this.searchQuery.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(searchText => {
            this.searchText = searchText;
        });
    }
    ngOnDestroy() {
        this.onMessagesChanged.unsubscribe();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["todo-search"]], hostVars: 2, hostBindings: function SearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classlist);
    } }, decls: 8, vars: 5, consts: [[1, "search-box", "right-side-icon", "mw-100", "mb-8"], ["type", "search", "placeholder", "Search in mails...", 1, "form-control", "form-control-lg", 3, "formControl"], ["type", "submit", 1, "search-icon"], ["name", "search", "size", "lg"], ["class", "search-result", 4, "ngFor", "ngForOf"], [1, "search-result"], ["href", "javascript:void(0)", 1, "dt-avatar-wrapper"], [1, "font-italic", 3, "user", "charLength"], [1, "dt-avatar-info"], [1, "dt-avatar-name"], [1, "f-12", 3, "innerHTML"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gx-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recently Viewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_div_6_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "filter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, ctx.messages, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _gaxon_components_gx_icon_gx_icon_component__WEBPACK_IMPORTED_MODULE_4__["GxIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _gaxon_components_widgets_gx_avatar_gx_avatar_component__WEBPACK_IMPORTED_MODULE_6__["GxAvatarComponent"]], pipes: [_gaxon_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'todo-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, { classlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=mail-mail-module-es2015.js.map