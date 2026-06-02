"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_admin_admin_module_ts"],{

/***/ 3627:
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-auth/admin-auth.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthComponent: () => (/* binding */ AdminAuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/admin-auth.service */ 4858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function AdminAuthComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function AdminAuthComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Acc\u00E9der au panneau ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminAuthComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Authentification... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AdminAuthComponent {
  constructor(adminAuth, router) {
    this.adminAuth = adminAuth;
    this.router = router;
    this.email = '';
    this.password = '';
    this.showPassword = false;
    this.loading = false;
    this.error = '';
  }
  ngOnInit() {
    if (this.adminAuth.isLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
    }
  }
  login() {
    if (!this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }
    this.loading = true;
    this.error = '';
    this.adminAuth.login(this.email, this.password).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.data?.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.error = 'Accès refusé. Compte administrateur requis.';
        }
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Erreur de connexion.';
      }
    });
  }
  static {
    this.ɵfac = function AdminAuthComponent_Factory(t) {
      return new (t || AdminAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminAuthComponent,
      selectors: [["app-admin-auth"]],
      decls: 47,
      vars: 11,
      consts: [["loginForm", "ngForm"], [1, "admin-login-page"], [1, "bg-orbs"], [1, "orb", "orb-1"], [1, "orb", "orb-2"], [1, "orb", "orb-3"], [1, "login-container"], [1, "brand-section"], [1, "brand-logo"], [1, "bi", "bi-shield-fill-check"], [1, "brand-title"], [1, "gradient-text"], [1, "brand-subtitle"], [1, "login-card", "glass-card"], [1, "card-header-section"], ["autocomplete", "off", 1, "login-form", 3, "ngSubmit"], ["class", "alert-error", 4, "ngIf"], [1, "field-group"], [1, "field-label"], [1, "field-input-wrap"], [1, "bi", "bi-envelope", "field-icon"], ["type", "email", "name", "email", "placeholder", "admin@entreprise.com", "autocomplete", "username", "required", "", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-lock", "field-icon"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", "required", "", 1, "field-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-pw", 3, "click"], [1, "bi"], ["type", "submit", 1, "btn-login", 3, "disabled"], [4, "ngIf"], ["class", "loading-spin", 4, "ngIf"], [1, "card-footer-note"], [1, "bi", "bi-shield-fill-exclamation"], ["routerLink", "/landing", 1, "back-link"], [1, "bi", "bi-arrow-left"], [1, "alert-error"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-shield-lock", "me-2"], [1, "loading-spin"], [1, "bi", "bi-arrow-clockwise", "spin-icon"]],
      template: function AdminAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "SIT ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Portail Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Connexion Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Acc\u00E8s r\u00E9serv\u00E9 aux administrateurs syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminAuthComponent_Template_form_ngSubmit_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.login());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminAuthComponent_div_23_Template, 3, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Adresse email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminAuthComponent_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17)(31, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminAuthComponent_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminAuthComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.showPassword = !ctx.showPassword);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AdminAuthComponent_span_39_Template, 3, 0, "span", 27)(40, AdminAuthComponent_span_40_Template, 3, 0, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Acc\u00E8s s\u00E9curis\u00E9 \u2014 activit\u00E9 journalis\u00E9e ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Retour \u00E0 l'accueil ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".admin-login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-darker, #020617);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  font-family: 'Inter', sans-serif;\n}\n\n\n\n.bg-orbs[_ngcontent-%COMP%] { position: absolute; inset: 0; pointer-events: none; }\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.18;\n  animation: _ngcontent-%COMP%_floatOrb 8s ease-in-out infinite;\n}\n.orb-1[_ngcontent-%COMP%] { width: 500px; height: 500px; background: #6366f1; top: -150px; left: -150px; animation-delay: 0s; }\n.orb-2[_ngcontent-%COMP%] { width: 400px; height: 400px; background: #0ea5e9; bottom: -100px; right: -100px; animation-delay: 3s; }\n.orb-3[_ngcontent-%COMP%] { width: 300px; height: 300px; background: #f43f5e; top: 40%; left: 50%; animation-delay: 1.5s; }\n\n@keyframes _ngcontent-%COMP%_floatOrb {\n  0%, 100% { transform: translateY(0) scale(1); }\n  50% { transform: translateY(-30px) scale(1.05); }\n}\n\n\n\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 24px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) both;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from { opacity: 0; transform: translateY(24px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n.brand-section[_ngcontent-%COMP%] { text-align: center; }\n.brand-logo[_ngcontent-%COMP%] {\n  width: 72px; height: 72px;\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  border-radius: 20px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 32px; color: #fff;\n  margin: 0 auto 16px;\n  box-shadow: 0 0 40px rgba(99,102,241,0.4);\n  animation: _ngcontent-%COMP%_pulseLogo 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseLogo {\n  0%, 100% { box-shadow: 0 0 40px rgba(99,102,241,0.4); }\n  50%       { box-shadow: 0 0 60px rgba(99,102,241,0.7); }\n}\n.brand-title[_ngcontent-%COMP%] { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: #f8fafc; margin: 0; }\n.brand-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  -webkit-background-clip: text; -webkit-text-fill-color: transparent;\n}\n.brand-subtitle[_ngcontent-%COMP%] { color: #64748b; font-size: 14px; margin: 4px 0 0; }\n\n\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(15, 23, 42, 0.8);\n  border: 1px solid rgba(99,102,241,0.15);\n  border-radius: 20px;\n  padding: 32px;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);\n}\n.card-header-section[_ngcontent-%COMP%] { margin-bottom: 28px; }\n.card-header-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 6px; }\n.card-header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #64748b; font-size: 13px; margin: 0; }\n\n\n\n.login-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 18px; }\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(244,63,94,0.12);\n  border: 1px solid rgba(244,63,94,0.3);\n  color: #fb7185;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  display: flex; align-items: center; gap: 8px;\n  animation: _ngcontent-%COMP%_shake 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-6px); }\n  75% { transform: translateX(6px); }\n}\n\n.field-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.field-label[_ngcontent-%COMP%] { color: #94a3b8; font-size: 13px; font-weight: 500; }\n.field-input-wrap[_ngcontent-%COMP%] { position: relative; }\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute; left: 14px; top: 50%; transform: translateY(-50%);\n  color: #475569; font-size: 15px; pointer-events: none;\n}\n.field-input[_ngcontent-%COMP%] {\n  width: 100%; background: rgba(30, 41, 59, 0.6);\n  border: 1px solid rgba(99,102,241,0.2);\n  border-radius: 10px; padding: 11px 14px 11px 40px;\n  color: #f8fafc; font-size: 14px; outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);\n}\n.field-input[_ngcontent-%COMP%]::placeholder { color: #475569; }\n.toggle-pw[_ngcontent-%COMP%] {\n  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);\n  background: none; border: none; color: #64748b; cursor: pointer;\n  font-size: 16px; padding: 4px; transition: color 0.2s;\n}\n.toggle-pw[_ngcontent-%COMP%]:hover { color: #6366f1; }\n\n\n\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%; padding: 13px;\n  background: linear-gradient(135deg, #6366f1, #0ea5e9);\n  border: none; border-radius: 12px;\n  color: #fff; font-size: 15px; font-weight: 600;\n  cursor: pointer; transition: all 0.3s;\n  display: flex; align-items: center; justify-content: center;\n  gap: 8px; font-family: 'Inter', sans-serif;\n  box-shadow: 0 4px 20px rgba(99,102,241,0.35);\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(99,102,241,0.5);\n}\n.btn-login[_ngcontent-%COMP%]:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }\n\n.loading-spin[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.spin-icon[_ngcontent-%COMP%] { display: inline-block; animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n\n\n\n.card-footer-note[_ngcontent-%COMP%] {\n  margin-top: 20px; padding-top: 16px;\n  border-top: 1px solid rgba(99,102,241,0.1);\n  color: #475569; font-size: 12px;\n  display: flex; align-items: center; gap: 6px;\n}\n\n\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b; font-size: 13px; text-decoration: none;\n  display: flex; align-items: center; gap: 6px;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover { color: #6366f1; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1hdXRoL2FkbWluLWF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUEsbUJBQW1CO0FBQ25CLFdBQVcsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO0FBQy9EO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJDQUEyQztBQUM3QztBQUNBLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFO0FBQzNHLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFO0FBQy9HLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFOztBQUV2RztFQUNFLFdBQVcsaUNBQWlDLEVBQUU7RUFDOUMsTUFBTSx3Q0FBd0MsRUFBRTtBQUNsRDs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtFQUNoRCxPQUFPLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUMvQzs7QUFFQSxVQUFVO0FBQ1YsaUJBQWlCLGtCQUFrQixFQUFFO0FB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RCxnQkFBZ0I7QUFDaEI7RUFDRSxnQkFBZ0IsRUFBRSxpQkFBaUI7RUFDbkMsMENBQTBDO0VBQzFDLGNBQWMsRUFBRSxlQUFlO0VBQy9CLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRO0FBQzlDOztBQUVBLGNBQWM7QUFDZDtFQUNFLGNBQWMsRUFBRSxlQUFlLEVBQUUscUJBQXFCO0VBQ3RELGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRO0VBQzVDLHNCQUFzQjtBQUN4QjtBQUNBLG1CQUFtQixjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbG9naW4tcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrZXIsICMwMjA2MTcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuLyogT3JiIGJhY2tncm91bmQgKi9cbi5iZy1vcmJzIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5vcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsdGVyOiBibHVyKDgwcHgpO1xuICBvcGFjaXR5OiAwLjE4O1xuICBhbmltYXRpb246IGZsb2F0T3JiIDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLm9yYi0xIHsgd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDUwMHB4OyBiYWNrZ3JvdW5kOiAjNjM2NmYxOyB0b3A6IC0xNTBweDsgbGVmdDogLTE1MHB4OyBhbmltYXRpb24tZGVsYXk6IDBzOyB9XG4ub3JiLTIgeyB3aWR0aDogNDAwcHg7IGhlaWdodDogNDAwcHg7IGJhY2tncm91bmQ6ICMwZWE1ZTk7IGJvdHRvbTogLTEwMHB4OyByaWdodDogLTEwMHB4OyBhbmltYXRpb24tZGVsYXk6IDNzOyB9XG4ub3JiLTMgeyB3aWR0aDogMzAwcHg7IGhlaWdodDogMzAwcHg7IGJhY2tncm91bmQ6ICNmNDNmNWU7IHRvcDogNDAlOyBsZWZ0OiA1MCU7IGFuaW1hdGlvbi1kZWxheTogMS41czsgfVxuXG5Aa2V5ZnJhbWVzIGZsb2F0T3JiIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSBzY2FsZSgxLjA1KTsgfVxufVxuXG4vKiBDb250YWluZXIgKi9cbi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZzogMjRweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0cHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLyogQnJhbmQgKi9cbi5icmFuZC1zZWN0aW9uIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4uYnJhbmQtbG9nbyB7XG4gIHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICMwZWE1ZTkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4OyBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg5OSwxMDIsMjQxLDAuNCk7XG4gIGFuaW1hdGlvbjogcHVsc2VMb2dvIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBwdWxzZUxvZ28ge1xuICAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoOTksMTAyLDI0MSwwLjQpOyB9XG4gIDUwJSAgICAgICB7IGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoOTksMTAyLDI0MSwwLjcpOyB9XG59XG4uYnJhbmQtdGl0bGUgeyBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjZjhmYWZjOyBtYXJnaW46IDA7IH1cbi5icmFuZC10aXRsZSAuZ3JhZGllbnQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICMwZWE1ZTkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJyYW5kLXN1YnRpdGxlIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTRweDsgbWFyZ2luOiA0cHggMCAwOyB9XG5cbi8qIENhcmQgKi9cbi5sb2dpbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA0OHB4IHJnYmEoMCwwLDAsMC40KSwgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG4uY2FyZC1oZWFkZXItc2VjdGlvbiB7IG1hcmdpbi1ib3R0b206IDI4cHg7IH1cbi5jYXJkLWhlYWRlci1zZWN0aW9uIGgyIHsgY29sb3I6ICNmOGZhZmM7IGZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAwIDAgNnB4OyB9XG4uY2FyZC1oZWFkZXItc2VjdGlvbiBwIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAwOyB9XG5cbi8qIEZvcm0gKi9cbi5sb2dpbi1mb3JtIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxOHB4OyB9XG4uYWxlcnQtZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjEyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsNjMsOTQsMC4zKTtcbiAgY29sb3I6ICNmYjcxODU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjRzIGVhc2U7XG59XG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpOyB9XG59XG5cbi5maWVsZC1ncm91cCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogOHB4OyB9XG4uZmllbGQtbGFiZWwgeyBjb2xvcjogIzk0YTNiODsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyB9XG4uZmllbGQtaW5wdXQtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmZpZWxkLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDE0cHg7IHRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDE1cHg7IHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMzAsIDQxLCA1OSwgMC42KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDExcHggMTRweCAxMXB4IDQwcHg7XG4gIGNvbG9yOiAjZjhmYWZjOyBmb250LXNpemU6IDE0cHg7IG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLmZpZWxkLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xufVxuLmZpZWxkLWlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNDc1NTY5OyB9XG4udG9nZ2xlLXB3IHtcbiAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTJweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjb2xvcjogIzY0NzQ4YjsgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7IHBhZGRpbmc6IDRweDsgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbi50b2dnbGUtcHc6aG92ZXIgeyBjb2xvcjogIzYzNjZmMTsgfVxuXG4vKiBCdXR0b24gKi9cbi5idG4tbG9naW4ge1xuICB3aWR0aDogMTAwJTsgcGFkZGluZzogMTNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgIzBlYTVlOSk7XG4gIGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4OyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk5LDEwMiwyNDEsMC4zNSk7XG59XG4uYnRuLWxvZ2luOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoOTksMTAyLDI0MSwwLjUpO1xufVxuLmJ0bi1sb2dpbjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNjsgY3Vyc29yOiBub3QtYWxsb3dlZDsgdHJhbnNmb3JtOiBub25lOyB9XG5cbi5sb2FkaW5nLXNwaW4geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgfVxuLnNwaW4taWNvbiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuLyogRm9vdGVyIG5vdGUgKi9cbi5jYXJkLWZvb3Rlci1ub3RlIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgcGFkZGluZy10b3A6IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcbiAgY29sb3I6ICM0NzU1Njk7IGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG59XG5cbi8qIEJhY2sgbGluayAqL1xuLmJhY2stbGluayB7XG4gIGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDEzcHg7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG4uYmFjay1saW5rOmhvdmVyIHsgY29sb3I6ICM2MzY2ZjE7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6597:
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/admin-auth.service */ 4858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





const _c0 = () => ({
  nom: "A",
  prenom: "",
  role: "admin",
  id: 0,
  email: "",
  actif: 1
});
const _c1 = () => ["admin", "manager", "employee"];
const _c2 = () => ({
  name: "API Backend",
  status: "ok",
  latency: "12ms"
});
const _c3 = () => ({
  name: "Base de donn\u00E9es",
  status: "ok",
  latency: "3ms"
});
const _c4 = () => ({
  name: "Authentification JWT",
  status: "ok",
  latency: "1ms"
});
const _c5 = () => ({
  name: "Module Pr\u00E9sence",
  status: "ok",
  latency: "8ms"
});
const _c6 = () => ({
  name: "Module Documents",
  status: "ok",
  latency: "15ms"
});
const _c7 = () => ({
  name: "IA & Recommandations",
  status: "ok",
  latency: "45ms"
});
const _c8 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function AdminDashboardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.unreadNotifications);
  }
}
function AdminDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 265)(1, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Administrateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.admin == null ? null : ctx_r0.admin.prenom, " ", ctx_r0.admin == null ? null : ctx_r0.admin.nom, "");
  }
}
function AdminDashboardComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.unreadNotifications);
  }
}
function AdminDashboardComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.markAllRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tout lire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tout lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_77_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 279);
  }
}
function AdminDashboardComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_77_Template_div_click_0_listener() {
      const n_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.markNotifRead(n_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 273)(4, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 275)(7, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminDashboardComponent_div_77_div_12_Template, 1, 0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("unread", !n_r4.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("notif-color-" + n_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](n_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r4.detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", n_r4.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !n_r4.read);
  }
}
function AdminDashboardComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aucune notification r\u00E9cente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 285)(1, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 287)(4, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 289)(7, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(log_r5.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getInitials(log_r5), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", log_r5.prenom, " ", log_r5.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-" + log_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(log_r5.lastActivity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", log_r5.actif)("inactive", !log_r5.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r5.actif ? "Actif" : "Inactif", " ");
  }
}
function AdminDashboardComponent_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucune activit\u00E9 r\u00E9cente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_tr_281_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r7.telephone);
  }
}
function AdminDashboardComponent_tr_281_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 294)(1, "td")(2, "div", 295)(3, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 297)(6, "div", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminDashboardComponent_tr_281_div_8_Template, 2, 1, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "div", 302)(17, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_281_Template_button_click_17_listener() {
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleUserStatus(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 307)(24, "div", 308)(25, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_281_Template_button_click_25_listener() {
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openEditUser(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_281_Template_button_click_27_listener() {
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openResetPassword(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_tr_281_Template_button_click_29_listener() {
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.confirmDelete(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(user_r7.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getInitials(user_r7), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r7.prenom, " ", user_r7.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r7.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-" + user_r7.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getRoleIcon(user_r7.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r7.role === "admin" ? "Admin" : user_r7.role === "manager" ? "Manager" : "Employ\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("on", user_r7.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", user_r7.actif ? "D\u00E9sactiver" : "Activer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r7.actif ? "Actif" : "Inactif");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(user_r7.date_creation || ""));
  }
}
function AdminDashboardComponent_tr_282_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Aucun utilisateur trouv\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_div_283_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_283_button_3_Template_button_click_0_listener() {
      const p_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.currentPage = p_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", p_r10 === ctx_r0.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r10, " ");
  }
}
function AdminDashboardComponent_div_283_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 316)(1, "button", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_283_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.currentPage = ctx_r0.currentPage - 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminDashboardComponent_div_283_button_3_Template, 2, 3, "button", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_div_283_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.currentPage = ctx_r0.currentPage + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.totalPagesArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function AdminDashboardComponent_div_308_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 330);
  }
}
function AdminDashboardComponent_div_308_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 331);
  }
}
function AdminDashboardComponent_div_308_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 322)(1, "div", 323)(2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminDashboardComponent_div_308_i_3_Template, 1, 0, "i", 325)(4, AdminDashboardComponent_div_308_i_4_Template, 1, 0, "i", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 223)(11, "input", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_div_308_Template_input_ngModelChange_11_listener($event) {
      const perm_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r12], $event) || (ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r12] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const perm_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](perm_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R\u00F4le : ", ctx_r0.selectedPermRole, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r0.selectedPermRole === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.permissions[ctx_r0.selectedPermRole][perm_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.selectedPermRole === "admin");
  }
}
function AdminDashboardComponent_div_310_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 332)(1, "div", 333)(2, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 337)(10, "span", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const role_r13 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-icon-" + role_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getRoleIcon(role_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r13 === "admin" ? "Administrateur" : role_r13 === "manager" ? "Manager" : "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getRoleBarWidth(role_r13), "% des utilisateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.getPermCount(role_r13, true), " autoris\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.getPermCount(role_r13, false), " bloqu\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("fill-" + role_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.getRoleBarWidth(role_r13), "%");
  }
}
function AdminDashboardComponent_div_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rs_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("dot-" + rs_r14.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rs_r14.role === "admin" ? "Admin" : rs_r14.role === "manager" ? "Manager" : "Employ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rs_r14.count);
  }
}
function AdminDashboardComponent_div_371_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 344)(1, "div", 345)(2, "div", 346)(3, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r15 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.getMaxGrowth() ? d_r15.count / ctx_r0.getMaxGrowth() * 100 : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r15.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, d_r15.day, "dd/MM"));
  }
}
function AdminDashboardComponent_div_372_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucune donn\u00E9e disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_411_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 351)(1, "div", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "En ligne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.latency);
  }
}
function AdminDashboardComponent_div_424_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 356)(1, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 359)(6, "div", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r18 * 40, "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(log_r17.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getInitials(log_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", log_r17.prenom, " ", log_r17.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r17.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("role-" + log_r17.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r17.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(log_r17.lastActivity));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", log_r17.actif)("inactive", !log_r17.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-circle-fill", log_r17.actif)("bi-circle", !log_r17.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r17.actif ? "Actif" : "Inactif", " ");
  }
}
function AdminDashboardComponent_div_425_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aucune activit\u00E9 enregistr\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_570_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.modalError, " ");
  }
}
function AdminDashboardComponent_div_599_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 243)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_div_599_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.userForm.password, $event) || (ctx_r0.userForm.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.userForm.password);
  }
}
function AdminDashboardComponent_span_604_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sauvegarder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_605_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sauvegarde...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_624_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_625_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_div_635_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.modalError, " ");
  }
}
function AdminDashboardComponent_span_652_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " R\u00E9initialiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_span_653_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AdminDashboardComponent {
  get admin() {
    return this.adminAuth.currentAdmin;
  }
  get unreadNotifications() {
    return this.notifications.filter(n => !n.read).length;
  }
  get pagedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.pageSize);
  }
  get totalPagesArr() {
    return Array.from({
      length: this.totalPages
    }, (_, i) => i + 1);
  }
  get permissionsList() {
    return Object.keys(this.permissions['admin']);
  }
  constructor(adminAuth, router) {
    this.adminAuth = adminAuth;
    this.router = router;
    // Layout
    this.sidebarCollapsed = false;
    this.mobileMenuOpen = false;
    this.darkMode = true;
    this.activeSection = 'overview';
    this.searchQuery = '';
    this.showNotifications = false;
    this.showProfileMenu = false;
    // Data
    this.stats = {
      totalUsers: 0,
      activeEmployees: 0,
      activeManagers: 0,
      totalAdmins: 0,
      todayLogins: 0,
      inactiveUsers: 0,
      attendanceToday: 0
    };
    this.users = [];
    this.filteredUsers = [];
    this.activityLogs = [];
    this.roleStats = [];
    this.growthData = [];
    // Animated counters
    this.animatedStats = {
      totalUsers: 0,
      activeEmployees: 0,
      activeManagers: 0,
      todayLogins: 0
    };
    // User management
    this.userSearch = '';
    this.userRoleFilter = 'all';
    this.userStatusFilter = 'all';
    this.currentPage = 1;
    this.pageSize = 8;
    this.showUserModal = false;
    this.showDeleteModal = false;
    this.showResetModal = false;
    this.editingUser = null;
    this.deletingUser = null;
    this.resetPasswordUser = null;
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.modalLoading = false;
    this.modalError = '';
    this.modalSuccess = '';
    this.userForm = {};
    // Permissions config
    this.permissions = {
      admin: {
        'Gestion utilisateurs': true,
        'Gestion projets': true,
        'Gestion tâches': true,
        'Gestion réunions': true,
        'Analytics': true,
        'Documents': true,
        'Présence': true,
        'Configuration': true,
        'Rôles & Permissions': true
      },
      manager: {
        'Gestion utilisateurs': true,
        'Gestion projets': true,
        'Gestion tâches': true,
        'Gestion réunions': true,
        'Analytics': true,
        'Documents': true,
        'Présence': true,
        'Configuration': false,
        'Rôles & Permissions': false
      },
      employee: {
        'Gestion utilisateurs': false,
        'Gestion projets': false,
        'Gestion tâches': true,
        'Gestion réunions': true,
        'Analytics': false,
        'Documents': true,
        'Présence': true,
        'Configuration': false,
        'Rôles & Permissions': false
      }
    };
    this.selectedPermRole = 'admin';
    // System settings
    this.settings = {
      platformName: 'SIT ERP',
      maintenanceMode: false,
      registrationOpen: true,
      emailNotifications: true,
      twoFactorRequired: false,
      sessionTimeout: 60,
      maxLoginAttempts: 15,
      aiEnabled: true,
      darkModeDefault: true,
      language: 'fr'
    };
    this.settingsSaved = false;
    this.permissionsSaved = false;
    // Notifications dynamiques
    this.notifications = [];
    this.readNotifIds = new Set();
    this.animationFrames = [];
  }
  ngOnInit() {
    this.loadReadIds();
    this.loadAll();
    this.statsInterval = setInterval(() => {
      this.loadStats();
      this.loadNotifications();
    }, 30000);
  }
  ngOnDestroy() {
    clearInterval(this.statsInterval);
    this.animationFrames.forEach(id => cancelAnimationFrame(id));
  }
  loadAll() {
    this.loadStats();
    this.loadUsers();
    this.loadActivity();
    this.loadRoleStats();
    this.loadGrowth();
    this.loadPermissions();
    this.loadSettingsFromDB();
    this.loadNotifications();
  }
  loadReadIds() {
    try {
      const stored = localStorage.getItem('adminNotifRead');
      if (stored) this.readNotifIds = new Set(JSON.parse(stored));
    } catch (_) {}
  }
  saveReadIds() {
    localStorage.setItem('adminNotifRead', JSON.stringify([...this.readNotifIds]));
  }
  loadNotifications() {
    this.adminAuth.getNotifications().subscribe({
      next: res => {
        if (res.success) {
          this.notifications = res.data.map(n => ({
            ...n,
            time: this.timeAgo(n.time),
            read: this.readNotifIds.has(n.id)
          }));
        }
      }
    });
  }
  markNotifRead(notif) {
    notif.read = true;
    this.readNotifIds.add(notif.id);
    this.saveReadIds();
  }
  markAllRead() {
    this.notifications.forEach(n => {
      n.read = true;
      this.readNotifIds.add(n.id);
    });
    this.saveReadIds();
  }
  timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return 'À l\'instant';
    if (m < 60) return `Il y a ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 24) return `Il y a ${h}h`;
    const d = Math.floor(h / 24);
    return `Il y a ${d}j`;
  }
  loadStats() {
    this.adminAuth.getStats().subscribe({
      next: res => {
        if (res.success) {
          this.stats = res.data;
          this.animateCounters();
        }
      }
    });
  }
  loadUsers() {
    this.adminAuth.getUsers().subscribe({
      next: res => {
        if (res.success) {
          this.users = res.data;
          this.applyFilters();
        }
      }
    });
  }
  loadActivity() {
    this.adminAuth.getActivity().subscribe({
      next: res => {
        if (res.success) this.activityLogs = res.data;
      }
    });
  }
  loadRoleStats() {
    this.adminAuth.getRoleStats().subscribe({
      next: res => {
        if (res.success) this.roleStats = res.data;
      }
    });
  }
  loadGrowth() {
    this.adminAuth.getGrowth().subscribe({
      next: res => {
        if (res.success) this.growthData = res.data;
      }
    });
  }
  animateCounters() {
    const targets = {
      totalUsers: this.stats.totalUsers,
      activeEmployees: this.stats.activeEmployees,
      activeManagers: this.stats.activeManagers,
      todayLogins: this.stats.todayLogins
    };
    const duration = 1200;
    const start = performance.now();
    const animate = time => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      this.animatedStats = {
        totalUsers: Math.round(targets.totalUsers * ease),
        activeEmployees: Math.round(targets.activeEmployees * ease),
        activeManagers: Math.round(targets.activeManagers * ease),
        todayLogins: Math.round(targets.todayLogins * ease)
      };
      if (progress < 1) {
        const id = requestAnimationFrame(animate);
        this.animationFrames.push(id);
      }
    };
    const id = requestAnimationFrame(animate);
    this.animationFrames.push(id);
  }
  applyFilters() {
    let result = [...this.users];
    if (this.userSearch) {
      const q = this.userSearch.toLowerCase();
      result = result.filter(u => u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    if (this.userRoleFilter !== 'all') result = result.filter(u => u.role === this.userRoleFilter);
    if (this.userStatusFilter !== 'all') result = result.filter(u => this.userStatusFilter === 'active' ? u.actif : !u.actif);
    this.filteredUsers = result;
    this.currentPage = 1;
  }
  setSection(section) {
    this.activeSection = section;
    this.mobileMenuOpen = false;
  }
  openCreateUser() {
    this.editingUser = null;
    this.userForm = {
      role: 'employee'
    };
    this.modalError = '';
    this.modalSuccess = '';
    this.showUserModal = true;
  }
  openEditUser(user) {
    this.editingUser = user;
    this.userForm = {
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      telephone: user.telephone,
      role: user.role
    };
    this.modalError = '';
    this.modalSuccess = '';
    this.showUserModal = true;
  }
  saveUser() {
    this.modalError = '';
    this.modalLoading = true;
    const action = this.editingUser ? this.adminAuth.updateUser(this.editingUser.id, this.userForm) : this.adminAuth.createUser(this.userForm);
    action.subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showUserModal = false;
          this.loadUsers();
          this.loadStats();
        } else {
          this.modalError = res.message;
        }
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    });
  }
  confirmDelete(user) {
    this.deletingUser = user;
    this.showDeleteModal = true;
  }
  deleteUser() {
    if (!this.deletingUser) return;
    this.modalLoading = true;
    this.adminAuth.deleteUser(this.deletingUser.id).subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showDeleteModal = false;
          this.deletingUser = null;
          this.loadUsers();
          this.loadStats();
        }
      },
      error: () => {
        this.modalLoading = false;
      }
    });
  }
  toggleUserStatus(user) {
    this.adminAuth.toggleUser(user.id).subscribe({
      next: res => {
        if (res.success) {
          user.actif = res.actif;
          this.loadStats();
        }
      }
    });
  }
  openResetPassword(user) {
    this.resetPasswordUser = user;
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.modalError = '';
    this.showResetModal = true;
  }
  resetPassword() {
    if (this.newPassword !== this.confirmNewPassword) {
      this.modalError = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if (!this.resetPasswordUser) return;
    this.modalLoading = true;
    this.adminAuth.resetPassword(this.resetPasswordUser.id, this.newPassword).subscribe({
      next: res => {
        this.modalLoading = false;
        if (res.success) {
          this.showResetModal = false;
          this.resetPasswordUser = null;
        } else {
          this.modalError = res.message;
        }
      },
      error: err => {
        this.modalLoading = false;
        this.modalError = err.error?.message || 'Erreur.';
      }
    });
  }
  loadPermissions() {
    this.adminAuth.getPermissions().subscribe({
      next: res => {
        if (res.success && Object.keys(res.data).length > 0) {
          // Merge DB permissions into the default structure (keeps defaults if DB is empty)
          for (const role of ['admin', 'manager', 'employee']) {
            if (res.data[role] && Object.keys(res.data[role]).length > 0) {
              this.permissions[role] = {
                ...this.permissions[role],
                ...res.data[role]
              };
            }
          }
        }
      }
    });
  }
  savePermissions() {
    this.adminAuth.savePermissions(this.permissions).subscribe({
      next: res => {
        if (res.success) {
          this.permissionsSaved = true;
          setTimeout(() => this.permissionsSaved = false, 3000);
        }
      }
    });
  }
  loadSettingsFromDB() {
    this.adminAuth.getSettings().subscribe({
      next: res => {
        if (res.success && Object.keys(res.data).length > 0) {
          this.settings = {
            ...this.settings,
            ...res.data
          };
        }
      }
    });
  }
  saveSettings() {
    this.adminAuth.saveSettings(this.settings).subscribe({
      next: res => {
        if (res.success) {
          this.settingsSaved = true;
          setTimeout(() => this.settingsSaved = false, 3000);
        }
      },
      error: () => {
        this.settingsSaved = true;
        setTimeout(() => this.settingsSaved = false, 3000);
      }
    });
  }
  logout() {
    this.adminAuth.logout();
    this.router.navigate(['/admin/login']);
  }
  getRoleColor(role) {
    return role === 'admin' ? 'danger' : role === 'manager' ? 'warning' : 'primary';
  }
  getRoleIcon(role) {
    return role === 'admin' ? 'bi-shield-fill' : role === 'manager' ? 'bi-briefcase-fill' : 'bi-person-fill';
  }
  getInitials(user) {
    return `${user.prenom?.[0] || ''}${user.nom?.[0] || ''}`.toUpperCase();
  }
  getPermCount(role, allowed) {
    const perms = this.permissions[role];
    if (!perms) return 0;
    return Object.values(perms).filter(v => v === allowed).length;
  }
  getAvatarColor(role) {
    return role === 'admin' ? '#f43f5e' : role === 'manager' ? '#f59e0b' : '#6366f1';
  }
  getRoleBarWidth(role) {
    const found = this.roleStats.find(r => r.role === role);
    if (!found || !this.stats.totalUsers) return 0;
    return Math.round(found.count / this.stats.totalUsers * 100);
  }
  getMaxGrowth() {
    return Math.max(1, ...this.growthData.map(d => d.count));
  }
  formatDate(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  onDocumentClick(e) {
    const target = e.target;
    if (!target.closest('.notif-bell-wrap')) this.showNotifications = false;
    if (!target.closest('.profile-menu-wrap')) this.showProfileMenu = false;
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      hostBindings: function AdminDashboardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      decls: 654,
      vars: 176,
      consts: [[1, "admin-shell"], [1, "admin-sidebar"], [1, "sidebar-brand", 3, "click"], [1, "sidebar-logo"], [1, "bi", "bi-shield-fill-check"], [1, "sidebar-brand-text"], [1, "sidebar-nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "bi", "bi-grid-fill", "nav-icon"], [1, "nav-label"], ["class", "nav-pill", 4, "ngIf"], [1, "bi", "bi-people-fill", "nav-icon"], [1, "nav-count"], [1, "bi", "bi-key-fill", "nav-icon"], [1, "bi", "bi-bar-chart-fill", "nav-icon"], [1, "bi", "bi-activity", "nav-icon"], [1, "bi", "bi-gear-fill", "nav-icon"], [1, "sidebar-footer"], [1, "sidebar-admin-card"], [1, "admin-avatar-sm"], ["class", "admin-info", 4, "ngIf"], ["title", "R\u00E9duire", 1, "btn-collapse", 3, "click"], [1, "bi"], [1, "sidebar-overlay", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "topbar-left"], [1, "mobile-menu-btn", 3, "click"], [1, "bi", "bi-list"], [1, "topbar-search-wrap"], [1, "bi", "bi-search", "topbar-search-icon"], ["type", "text", "placeholder", "Recherche globale...", 1, "topbar-search", 3, "ngModelChange", "ngModel"], [1, "search-kbd"], [1, "topbar-right"], [1, "system-status"], [1, "status-dot", "online"], [1, "status-text"], [1, "notif-bell-wrap"], [1, "icon-btn", 3, "click"], [1, "bi", "bi-bell-fill"], ["class", "notif-badge", 4, "ngIf"], [1, "notif-dropdown"], [1, "notif-header"], ["class", "notif-mark-all", 3, "click", 4, "ngIf"], ["class", "notif-count", 4, "ngIf"], [1, "notif-list"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "notif-empty", 4, "ngIf"], [1, "icon-btn", "theme-toggle", 3, "click", "title"], [1, "profile-menu-wrap"], [1, "admin-avatar-btn", 3, "click"], [1, "profile-dropdown"], [1, "profile-header"], [1, "profile-action", 3, "click"], [1, "bi", "bi-gear"], [1, "profile-action", "danger", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "admin-content"], [1, "page-section"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary-action", 3, "click"], [1, "bi", "bi-person-plus-fill", "me-2"], [1, "stats-grid"], [1, "stat-card", "stat-indigo"], [1, "stat-top"], [1, "stat-icon-wrap", "indigo"], [1, "bi", "bi-people-fill"], [1, "stat-trend", "up"], [1, "bi", "bi-arrow-up-right"], [1, "stat-value"], [1, "stat-label"], [1, "stat-bar"], [1, "stat-bar-fill"], [1, "stat-card", "stat-emerald"], [1, "stat-icon-wrap", "emerald"], [1, "bi", "bi-person-check-fill"], [1, "stat-bar-fill", "emerald"], [1, "stat-card", "stat-amber"], [1, "stat-icon-wrap", "amber"], [1, "bi", "bi-briefcase-fill"], [1, "stat-trend", "neutral"], [1, "bi", "bi-dash"], [1, "stat-bar-fill", "amber"], [1, "stat-card", "stat-sky"], [1, "stat-icon-wrap", "sky"], [1, "bi", "bi-box-arrow-in-right"], [1, "stat-bar-fill", "sky"], [1, "stat-card", "stat-rose"], [1, "stat-icon-wrap", "rose"], [1, "bi", "bi-person-x-fill"], ["class", "stat-trend down", 4, "ngIf"], ["class", "stat-trend up", 4, "ngIf"], [1, "stat-bar-fill", "rose"], [1, "stat-card", "stat-violet"], [1, "stat-icon-wrap", "violet"], [1, "bi", "bi-calendar-check-fill"], [1, "stat-bar-fill", "violet"], [1, "overview-bottom"], [1, "activity-card", "glass-card"], [1, "card-section-header"], [1, "bi", "bi-activity", "me-2", "text-indigo"], [1, "btn-text", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "activity-list"], ["class", "activity-row", 4, "ngFor", "ngForOf"], ["class", "activity-empty", 4, "ngIf"], [1, "quick-actions-card", "glass-card"], [1, "bi", "bi-lightning-fill", "me-2", "text-amber"], [1, "quick-actions-grid"], [1, "quick-btn", 3, "click"], [1, "quick-icon", "indigo"], [1, "bi", "bi-person-plus-fill"], [1, "quick-icon", "amber"], [1, "bi", "bi-key-fill"], [1, "quick-icon", "sky"], [1, "bi", "bi-bar-chart-fill"], [1, "quick-icon", "violet"], [1, "bi", "bi-gear-fill"], [1, "quick-icon", "emerald"], [1, "bi", "bi-arrow-clockwise"], [1, "quick-icon", "rose"], [1, "bi", "bi-journal-text"], [1, "filters-bar", "glass-card"], [1, "filter-search-wrap"], [1, "bi", "bi-search", "filter-search-icon"], ["type", "text", "placeholder", "Rechercher par nom, email...", 1, "filter-search", 3, "ngModelChange", "ngModel"], [1, "filter-chips"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "admin"], ["value", "manager"], ["value", "employee"], ["value", "active"], ["value", "inactive"], [1, "table-card", "glass-card"], [1, "data-table"], [1, "th-actions"], ["class", "table-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination-bar", 4, "ngIf"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "settings-saved-banner"], [1, "bi", "bi-check-circle-fill"], [1, "role-tabs"], [1, "role-tab", 3, "click"], [1, "bi", "bi-shield-fill", "me-2", "text-rose"], [1, "bi", "bi-briefcase-fill", "me-2", "text-amber"], [1, "bi", "bi-person-fill", "me-2", "text-indigo"], [1, "permissions-grid"], ["class", "perm-card glass-card", 4, "ngFor", "ngForOf"], [1, "role-summary-grid"], ["class", "role-summary-card glass-card", 4, "ngFor", "ngForOf"], [1, "btn-secondary-action", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-2"], [1, "kpi-row"], [1, "kpi-card", "glass-card"], [1, "kpi-icon", "indigo"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "emerald"], [1, "bi", "bi-activity"], [1, "kpi-icon", "rose"], [1, "bi", "bi-person-x"], [1, "kpi-icon", "sky"], [1, "bi", "bi-calendar-check"], [1, "charts-row"], [1, "chart-card", "glass-card"], [1, "chart-title"], [1, "bi", "bi-pie-chart-fill", "me-2"], [1, "donut-chart-wrap"], ["viewBox", "0 0 120 120", 1, "donut-svg"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke", "#1e293b", "stroke-width", "18", 1, "donut-ring"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke", "#6366f1", "stroke-width", "18", "stroke-dasharray", "283", "stroke-dashoffset", "0", "transform", "rotate(-90 60 60)", 1, "donut-seg", "seg-indigo"], [1, "donut-center"], [1, "donut-total"], [1, "donut-label"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "bi", "bi-graph-up", "me-2"], [1, "bar-chart-wrap"], ["class", "bar-group", 4, "ngFor", "ngForOf"], ["class", "bar-empty", 4, "ngIf"], [1, "bi", "bi-toggle-on", "me-2"], [1, "status-chart"], [1, "status-ring-wrap"], [1, "ring-segment", "active"], [1, "status-stats"], [1, "status-stat"], [1, "ss-dot", "active"], [1, "ss-info"], [1, "ss-value"], [1, "ss-label"], [1, "ss-dot", "inactive"], [1, "ss-dot", "admin"], [1, "system-health-card", "glass-card"], [1, "bi", "bi-cpu-fill", "me-2", "text-indigo"], [1, "health-badge", "online"], [1, "bi", "bi-circle-fill", "me-1"], [1, "health-modules"], ["class", "health-module", 4, "ngFor", "ngForOf"], [1, "activity-full-card", "glass-card"], [1, "activity-full-list"], ["class", "activity-full-row", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["class", "table-empty", 4, "ngIf"], [1, "settings-grid"], [1, "settings-section", "glass-card"], [1, "settings-section-header"], [1, "settings-section-icon", "indigo"], [1, "bi", "bi-building"], [1, "settings-fields"], [1, "settings-field"], ["type", "text", 1, "settings-input", 3, "ngModelChange", "ngModel"], [1, "settings-input", 3, "ngModelChange", "ngModel"], ["value", "fr"], ["value", "en"], ["value", "ar"], [1, "settings-toggle-field"], [1, "settings-toggle-info"], [1, "toggle-title"], [1, "toggle-desc"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-track"], [1, "toggle-thumb"], [1, "settings-section-icon", "rose"], [1, "bi", "bi-shield-fill"], ["type", "number", "min", "5", "max", "480", 1, "settings-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "3", "max", "50", 1, "settings-input", 3, "ngModelChange", "ngModel"], [1, "settings-section-icon", "amber"], [1, "settings-section-icon", "violet"], [1, "bi", "bi-robot"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body"], ["class", "alert-error", 4, "ngIf"], [1, "modal-fields"], [1, "modal-field-row"], [1, "modal-field"], ["type", "text", "placeholder", "Pr\u00E9nom", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "email@exemple.com", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+216 XX XXX XXX", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "modal-input", 3, "ngModelChange", "ngModel"], ["class", "modal-field", 4, "ngIf"], [1, "modal-footer"], [1, "btn-modal-cancel", 3, "click"], [1, "btn-modal-save", 3, "click", "disabled"], [1, "modal-box", "modal-sm", 3, "click"], [1, "modal-header", "danger"], [1, "bi", "bi-trash-fill", "me-2"], [1, "delete-confirm-text"], [1, "btn-modal-delete", 3, "click", "disabled"], [1, "bi", "bi-key-fill", "me-2"], [2, "color", "#94a3b8", "font-size", "13px", "margin-bottom", "16px"], [2, "color", "#f8fafc"], ["type", "password", "placeholder", "Min. 6 caract\u00E8res", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "modal-field", 2, "margin-top", "12px"], ["type", "password", "placeholder", "Confirmer", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "nav-pill"], [1, "admin-info"], [1, "admin-name"], [1, "admin-role-badge"], [1, "notif-badge"], [1, "notif-mark-all", 3, "click"], [1, "notif-count"], [1, "notif-item", 3, "click"], [1, "notif-icon-wrap"], [1, "notif-body"], [1, "notif-text"], [1, "notif-time"], [1, "notif-detail"], [1, "notif-sep"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-unread-dot"], [1, "notif-empty"], [1, "bi", "bi-bell-slash"], [1, "stat-trend", "down"], [1, "bi", "bi-exclamation"], [1, "bi", "bi-check"], [1, "activity-row"], [1, "activity-avatar"], [1, "activity-info"], [1, "activity-name"], [1, "activity-detail"], [1, "role-chip"], [1, "activity-status"], [1, "activity-empty"], [1, "bi", "bi-inbox"], [1, "table-row"], [1, "user-cell"], [1, "user-avatar"], [1, "user-info"], [1, "user-fullname"], ["class", "user-tel", 4, "ngIf"], [1, "td-email"], [1, "bi", "me-1"], [1, "status-toggle-wrap"], [1, "status-toggle", 3, "click", "title"], [1, "status-toggle-thumb"], [1, "status-label"], [1, "td-date"], [1, "td-actions"], [1, "row-actions"], ["title", "Modifier", 1, "row-btn", "edit", 3, "click"], [1, "bi", "bi-pencil-fill"], ["title", "R\u00E9initialiser MDP", 1, "row-btn", "key", 3, "click"], ["title", "Supprimer", 1, "row-btn", "delete", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "user-tel"], ["colspan", "6", 1, "table-empty"], [1, "pagination-bar"], [1, "page-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], [1, "page-btn", 3, "click"], [1, "perm-card", "glass-card"], [1, "perm-info"], [1, "perm-icon-wrap"], ["class", "bi bi-check-circle-fill text-emerald", 4, "ngIf"], ["class", "bi bi-x-circle-fill text-rose", 4, "ngIf"], [1, "perm-name"], [1, "perm-role-note"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "bi", "bi-check-circle-fill", "text-emerald"], [1, "bi", "bi-x-circle-fill", "text-rose"], [1, "role-summary-card", "glass-card"], [1, "role-summary-header"], [1, "role-summary-icon"], [1, "role-summary-title"], [1, "role-summary-count"], [1, "role-perm-count"], [1, "perm-active"], [1, "perm-blocked"], [1, "role-progress-bar"], [1, "role-progress-fill"], [1, "legend-item"], [1, "legend-dot"], [1, "bar-group"], [1, "bar-col"], [1, "bar-fill", "indigo"], [1, "bar-value"], [1, "bar-label"], [1, "bar-empty"], [1, "bi", "bi-bar-chart"], [1, "health-module"], [1, "hm-icon", "ok"], [1, "hm-name"], [1, "hm-latency"], [1, "hm-status", "online"], [1, "activity-full-row"], [1, "afl-index"], [1, "afl-avatar"], [1, "afl-info"], [1, "afl-name"], [1, "afl-email"], [1, "afl-time"], [1, "afl-status"], [1, "table-empty"], [1, "alert-error"], [1, "bi", "bi-exclamation-triangle-fill"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "bi", "bi-arrow-clockwise", "spin-icon", "me-1"], [1, "bi", "bi-trash-fill", "me-1"], [1, "bi", "bi-key-fill", "me-1"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_2_listener() {
            return ctx.setSection("overview");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SIT ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ERP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nav", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Principal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_12_listener() {
            return ctx.setSection("overview");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Vue d'ensemble");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdminDashboardComponent_span_16_Template, 2, 1, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_17_listener() {
            return ctx.setSection("users");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_23_listener() {
            return ctx.setSection("roles");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "R\u00F4les & Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Supervision");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_29_listener() {
            return ctx.setSection("analytics");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_33_listener() {
            return ctx.setSection("activity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Activit\u00E9 syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_a_click_39_listener() {
            return ctx.setSection("settings");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 18)(44, "div", 19)(45, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AdminDashboardComponent_div_47_Template, 5, 2, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_48_listener() {
            return ctx.sidebarCollapsed = !ctx.sidebarCollapsed;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_50_listener() {
            return ctx.mobileMenuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 25)(52, "header", 26)(53, "div", 27)(54, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_54_listener() {
            return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "kbd", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u2318K");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 34)(62, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Syst\u00E8me OK");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 38)(67, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_67_listener() {
            return ctx.showNotifications = !ctx.showNotifications;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AdminDashboardComponent_span_69_Template, 2, 1, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 42)(71, "div", 43)(72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, AdminDashboardComponent_button_74_Template, 2, 0, "button", 44)(75, AdminDashboardComponent_span_75_Template, 2, 0, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, AdminDashboardComponent_div_77_Template, 13, 10, "div", 47)(78, AdminDashboardComponent_div_78_Template, 4, 0, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_79_listener() {
            return ctx.darkMode = !ctx.darkMode;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 50)(82, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_82_listener() {
            return ctx.showProfileMenu = !ctx.showProfileMenu;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 52)(85, "div", 53)(86, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_90_listener() {
            ctx.setSection("settings");
            return ctx.showProfileMenu = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Param\u00E8tres ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_93_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " D\u00E9connexion ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "main", 58)(97, "section", 59)(98, "div", 60)(99, "div")(100, "h2", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Vue d'ensemble");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Tableau de bord administrateur \u2014 donn\u00E9es en temps r\u00E9el");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_104_listener() {
            return ctx.openCreateUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Nouvel utilisateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 65)(108, "div", 66)(109, "div", 67)(110, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " +12%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Total utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 76)(122, "div", 67)(123, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " Actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Employ\u00E9s actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 80)(135, "div", 67)(136, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " Stable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Managers actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "div", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 86)(148, "div", 67)(149, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " Aujourd'hui");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Connexions du jour");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "div", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 90)(161, "div", 67)(162, "div", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, AdminDashboardComponent_div_164_Template, 3, 0, "div", 93)(165, AdminDashboardComponent_div_165_Template, 3, 0, "div", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Comptes d\u00E9sactiv\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "div", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 96)(173, "div", 67)(174, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "i", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Pr\u00E9sences");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Pr\u00E9sences aujourd'hui");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 100)(186, "div", 101)(187, "div", 102)(188, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Activit\u00E9 r\u00E9cente");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "button", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_191_listener() {
            return ctx.setSection("activity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Voir tout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](195, AdminDashboardComponent_div_195_Template, 12, 14, "div", 107)(196, AdminDashboardComponent_div_196_Template, 3, 0, "div", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 109)(198, "div", 102)(199, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Actions rapides");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 111)(203, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_203_listener() {
            return ctx.openCreateUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Ajouter utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_208_listener() {
            return ctx.setSection("roles");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "G\u00E9rer permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_213_listener() {
            return ctx.setSection("analytics");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_218_listener() {
            return ctx.setSection("settings");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_223_listener() {
            return ctx.loadAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Actualiser");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_228_listener() {
            return ctx.setSection("activity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "i", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Logs syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "section", 59)(234, "div", 60)(235, "div")(236, "h2", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Gestion des utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_240_listener() {
            return ctx.openCreateUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Nouvel utilisateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 125)(244, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "input", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_246_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userSearch, $event) || (ctx.userSearch = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_246_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 129)(248, "select", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_248_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userRoleFilter, $event) || (ctx.userRoleFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_248_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "option", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Tous les r\u00F4les");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "option", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "option", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "option", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "select", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_257_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userStatusFilter, $event) || (ctx.userStatusFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_257_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "option", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Tous les statuts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "option", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "option", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Inactif");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 137)(265, "table", 138)(266, "thead")(267, "tr")(268, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "R\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Statut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Inscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "th", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](281, AdminDashboardComponent_tr_281_Template, 31, 17, "tr", 140)(282, AdminDashboardComponent_tr_282_Template, 4, 0, "tr", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](283, AdminDashboardComponent_div_283_Template, 6, 3, "div", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "section", 59)(285, "div", 60)(286, "div")(287, "h2", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "R\u00F4les & Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Contr\u00F4le des acc\u00E8s par r\u00F4le \u2014 persist\u00E9 en base");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_291_listener() {
            return ctx.savePermissions();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Sauvegarder ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, " Permissions sauvegard\u00E9es en base de donn\u00E9es ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 146)(298, "button", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_298_listener() {
            return ctx.selectedPermRole = "admin";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Administrateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "button", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_301_listener() {
            return ctx.selectedPermRole = "manager";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "i", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Manager ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "button", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_304_listener() {
            return ctx.selectedPermRole = "employee";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "i", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Employ\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](308, AdminDashboardComponent_div_308_Template, 14, 8, "div", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](310, AdminDashboardComponent_div_310_Template, 16, 12, "div", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "section", 59)(312, "div", 60)(313, "div")(314, "h2", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Analytics & Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Visualisation des donn\u00E9es plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "button", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_318_listener() {
            return ctx.loadAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "i", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 157)(322, "div", 158)(323, "div", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Total comptes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 158)(330, "div", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "i", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Comptes actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 158)(337, "div", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "i", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Comptes inactifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 158)(344, "div", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "i", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Pr\u00E9sences auj.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 168)(351, "div", 169)(352, "div", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "R\u00E9partition par r\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "svg", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "circle", 174)(358, "circle", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 176)(360, "div", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](365, AdminDashboardComponent_div_365_Template, 6, 4, "div", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 169)(367, "div", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Inscriptions (7 derniers jours)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](371, AdminDashboardComponent_div_371_Template, 8, 7, "div", 183)(372, AdminDashboardComponent_div_372_Template, 3, 0, "div", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 169)(374, "div", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "i", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Comptes actifs vs inactifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 186)(378, "div", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 189)(381, "div", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "div", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 192)(384, "div", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "div", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 192)(391, "div", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Inactifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](396, "div", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 192)(398, "div", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Admins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 197)(403, "div", 102)(404, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "i", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "\u00C9tat du syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "span", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](409, "Op\u00E9rationnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](411, AdminDashboardComponent_div_411_Template, 9, 2, "div", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "section", 59)(413, "div", 60)(414, "div")(415, "h2", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Activit\u00E9 syst\u00E8me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "Logs et \u00E9v\u00E9nements r\u00E9cents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "button", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_419_listener() {
            return ctx.loadActivity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "i", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "div", 203)(423, "div", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](424, AdminDashboardComponent_div_424_Template, 17, 22, "div", 205)(425, AdminDashboardComponent_div_425_Template, 3, 0, "div", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "section", 59)(427, "div", 60)(428, "div")(429, "h2", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Param\u00E8tres globaux");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "Configuration de la plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_433_listener() {
            return ctx.saveSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Sauvegarder ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](437, "i", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, " Param\u00E8tres sauvegard\u00E9s avec succ\u00E8s ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 207)(440, "div", 208)(441, "div", 209)(442, "div", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "i", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "div")(445, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "Plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Configuration g\u00E9n\u00E9rale");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 212)(450, "div", 213)(451, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Nom de la plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "input", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_453_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.platformName, $event) || (ctx.settings.platformName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "div", 213)(455, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Langue par d\u00E9faut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "select", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_457_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.language, $event) || (ctx.settings.language = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "option", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Fran\u00E7ais");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "option", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "English");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "option", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "div", 219)(465, "div", 220)(466, "span", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Mode maintenance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Restreint l'acc\u00E8s aux admins uniquement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "label", 223)(471, "input", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_471_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.maintenanceMode, $event) || (ctx.settings.maintenanceMode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "span", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "div", 219)(475, "div", 220)(476, "span", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "Inscriptions ouvertes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Autoriser les nouvelles inscriptions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "label", 223)(481, "input", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_481_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.registrationOpen, $event) || (ctx.settings.registrationOpen = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "span", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 208)(485, "div", 209)(486, "div", 227);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](487, "i", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "div")(489, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "S\u00E9curit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Authentification & acc\u00E8s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 212)(494, "div", 213)(495, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Timeout session (minutes)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "input", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_497_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.sessionTimeout, $event) || (ctx.settings.sessionTimeout = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "div", 213)(499, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "Tentatives de connexion max");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "input", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_501_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.maxLoginAttempts, $event) || (ctx.settings.maxLoginAttempts = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "div", 219)(503, "div", 220)(504, "span", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "Double authentification");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Requis pour tous les comptes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "label", 223)(509, "input", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_509_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.twoFactorRequired, $event) || (ctx.settings.twoFactorRequired = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](511, "span", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "div", 208)(513, "div", 209)(514, "div", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](515, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div")(517, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Alertes et communications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 212)(522, "div", 219)(523, "div", 220)(524, "span", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Notifications email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Envoyer des alertes par email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "label", 223)(529, "input", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_529_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.emailNotifications, $event) || (ctx.settings.emailNotifications = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](531, "span", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "div", 208)(533, "div", 209)(534, "div", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](535, "i", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "div")(537, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "IA & Int\u00E9grations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "Modules intelligents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "div", 212)(542, "div", 219)(543, "div", 220)(544, "span", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "Module IA actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, "Recommandations et analyses IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "label", 223)(549, "input", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_549_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.aiEnabled, $event) || (ctx.settings.aiEnabled = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](551, "span", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "div", 219)(553, "div", 220)(554, "span", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](555, "Mode sombre par d\u00E9faut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](557, "Th\u00E8me sombre pour les nouveaux utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "label", 223)(559, "input", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_559_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.settings.darkModeDefault, $event) || (ctx.settings.darkModeDefault = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "span", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_562_listener() {
            return ctx.showUserModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "div", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_563_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 236)(565, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](566);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "button", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_567_listener() {
            return ctx.showUserModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](568, "i", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "div", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](570, AdminDashboardComponent_div_570_Template, 3, 1, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "div", 241)(572, "div", 242)(573, "div", 243)(574, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](575, "Pr\u00E9nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "input", 244);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_576_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.prenom, $event) || (ctx.userForm.prenom = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "div", 243)(578, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "Nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "input", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_580_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.nom, $event) || (ctx.userForm.nom = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "div", 243)(582, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "input", 246);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_584_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.email, $event) || (ctx.userForm.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "div", 243)(586, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](587, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "input", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_588_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.telephone, $event) || (ctx.userForm.telephone = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "div", 243)(590, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](591, "R\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](592, "select", 248);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_592_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.userForm.role, $event) || (ctx.userForm.role = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "option", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](594, "Employ\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "option", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](596, "Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "option", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](598, "Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](599, AdminDashboardComponent_div_599_Template, 4, 1, "div", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "div", 250)(601, "button", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_601_listener() {
            return ctx.showUserModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](602, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "button", 252);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_603_listener() {
            return ctx.saveUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](604, AdminDashboardComponent_span_604_Template, 3, 0, "span", 141)(605, AdminDashboardComponent_span_605_Template, 3, 0, "span", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "div", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_606_listener() {
            return ctx.showDeleteModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "div", 253);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_607_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "div", 254)(609, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](610, "i", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](611, "Supprimer l'utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](612, "button", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_612_listener() {
            return ctx.showDeleteModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](613, "i", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](614, "div", 239)(615, "p", 256);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, " \u00CAtes-vous s\u00FBr de vouloir supprimer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](619, " ? Cette action est irr\u00E9versible. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "div", 250)(621, "button", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_621_listener() {
            return ctx.showDeleteModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](622, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "button", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_623_listener() {
            return ctx.deleteUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](624, AdminDashboardComponent_span_624_Template, 3, 0, "span", 141)(625, AdminDashboardComponent_span_625_Template, 2, 0, "span", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](626, "div", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_626_listener() {
            return ctx.showResetModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "div", 253);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_div_click_627_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](628, "div", 236)(629, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](630, "i", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "R\u00E9initialiser le mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "button", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_632_listener() {
            return ctx.showResetModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](633, "i", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "div", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](635, AdminDashboardComponent_div_635_Template, 3, 1, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "p", 259);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, " Nouveau mot de passe pour ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "strong", 260);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "div", 243)(641, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](642, "Nouveau mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "input", 261);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_643_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.newPassword, $event) || (ctx.newPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](644, "div", 262)(645, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](646, "Confirmer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "input", 263);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_647_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.confirmNewPassword, $event) || (ctx.confirmNewPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](648, "div", 250)(649, "button", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_649_listener() {
            return ctx.showResetModal = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](650, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "button", 252);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_651_listener() {
            return ctx.resetPassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](652, AdminDashboardComponent_span_652_Template, 3, 0, "span", 141)(653, AdminDashboardComponent_span_653_Template, 2, 0, "span", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sidebar-collapsed", ctx.sidebarCollapsed)("light-mode", !ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.mobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadNotifications > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.getAvatarColor((ctx.admin == null ? null : ctx.admin.role) || "admin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getInitials(ctx.admin || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](160, _c0)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sidebarCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-chevron-double-left", !ctx.sidebarCollapsed)("bi-chevron-double-right", ctx.sidebarCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.mobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadNotifications > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadNotifications > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadNotifications === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.darkMode ? "Mode clair" : "Mode sombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-sun-fill", ctx.darkMode)("bi-moon-fill", !ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.getAvatarColor((ctx.admin == null ? null : ctx.admin.role) || "admin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getInitials(ctx.admin || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](161, _c0)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showProfileMenu);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.admin == null ? null : ctx.admin.prenom, " ", ctx.admin == null ? null : ctx.admin.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.admin == null ? null : ctx.admin.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.activeEmployees);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.activeEmployees / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.activeManagers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.activeManagers / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedStats.todayLogins);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.todayLogins / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stats.inactiveUsers > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stats.inactiveUsers === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.inactiveUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.inactiveUsers / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.attendanceToday);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.stats.totalUsers ? ctx.stats.attendanceToday / ctx.stats.totalUsers * 100 : 0, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityLogs.slice(0, 6));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activityLogs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.filteredUsers.length, " utilisateur(s) trouv\u00E9(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userRoleFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userStatusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pagedUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pagedUsers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.permissionsSaved);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPermRole === "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPermRole === "manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPermRole === "employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissionsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](162, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.activeEmployees + ctx.stats.activeManagers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.inactiveUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.attendanceToday);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roleStats);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.growthData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.growthData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("--pct", ctx.stats.totalUsers ? (ctx.stats.activeEmployees + ctx.stats.activeManagers) / ctx.stats.totalUsers : 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.activeEmployees + ctx.stats.activeManagers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.inactiveUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalAdmins);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](169, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](163, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](164, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](165, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](166, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](167, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](168, _c7)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityLogs);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activityLogs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeSection === "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.settingsSaved);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.platformName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.language);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.maintenanceMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.registrationOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.sessionTimeout);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.maxLoginAttempts);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.twoFactorRequired);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.emailNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.aiEnabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.darkModeDefault);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.editingUser ? "Modifier" : "Cr\u00E9er", " un utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalError);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.prenom);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.nom);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.telephone);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.userForm.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showDeleteModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.deletingUser == null ? null : ctx.deletingUser.prenom, " ", ctx.deletingUser == null ? null : ctx.deletingUser.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.showResetModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalError);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.resetPasswordUser == null ? null : ctx.resetPasswordUser.prenom, " ", ctx.resetPasswordUser == null ? null : ctx.resetPasswordUser.nom, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmNewPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["\n\n\n\n\n[_nghost-%COMP%] { display: block; height: 100vh; }\n\n\n\n.admin-shell[_ngcontent-%COMP%] {\n  --sidebar-w: 260px;\n  --sidebar-w-sm: 72px;\n  --topbar-h: 64px;\n  --bg: #0b1120;\n  --bg-card: rgba(15,23,42,0.75);\n  --bg-card-hover: rgba(20,30,55,0.9);\n  --border: rgba(99,102,241,0.12);\n  --text-primary: #f1f5f9;\n  --text-secondary: #94a3b8;\n  --text-muted: #475569;\n  --indigo: #6366f1;\n  --indigo-glow: rgba(99,102,241,0.25);\n  --sky: #0ea5e9;\n  --emerald: #10b981;\n  --amber: #f59e0b;\n  --rose: #f43f5e;\n  --violet: #8b5cf6;\n  display: flex;\n  height: 100vh;\n  background: var(--bg);\n  overflow: hidden;\n  font-family: 'Inter', sans-serif;\n  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);\n}\n\n.admin-shell.light-mode[_ngcontent-%COMP%] {\n  --bg: #f1f5f9;\n  --bg-card: rgba(255,255,255,0.85);\n  --border: rgba(99,102,241,0.15);\n  --text-primary: #0f172a;\n  --text-secondary: #475569;\n  --text-muted: #94a3b8;\n}\n\n\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-width: var(--sidebar-w);\n  height: 100vh;\n  background: rgba(8,13,28,0.95);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s cubic-bezier(0.16,1,0.3,1), min-width 0.3s;\n  position: relative;\n  z-index: 100;\n  backdrop-filter: blur(20px);\n  overflow: hidden;\n}\n\n.sidebar-collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w-sm);\n  min-width: var(--sidebar-w-sm);\n}\n\n\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 18px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border);\n  min-height: 64px;\n  overflow: hidden;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  background: linear-gradient(135deg, var(--indigo), var(--sky));\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 18px; color: #fff;\n  box-shadow: 0 0 20px var(--indigo-glow);\n}\n.sidebar-brand-text[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 17px;\n  font-family: 'Syne', sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.sidebar-brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--indigo); }\n.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-brand-text[_ngcontent-%COMP%] { display: none; }\n\n\n\n.sidebar-nav[_ngcontent-%COMP%] { flex: 1; padding: 16px 10px; overflow-y: auto; overflow-x: hidden; }\n.nav-section-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 10px 10px 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.2s;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] { opacity: 0; height: 0; padding: 0; }\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.nav-item[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.08); color: var(--text-primary); }\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(99,102,241,0.15);\n  color: var(--indigo);\n  box-shadow: inset 3px 0 0 var(--indigo);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] { color: var(--indigo); }\n.nav-icon[_ngcontent-%COMP%] { font-size: 16px; min-width: 16px; transition: transform 0.2s; }\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] { transform: scale(1.1); }\n.nav-label[_ngcontent-%COMP%] { font-size: 14px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; }\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] { display: none; }\n.nav-pill[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--rose);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 2px 7px;\n}\n.nav-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--text-muted);\n  font-size: 12px;\n  font-weight: 600;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-pill[_ngcontent-%COMP%], .sidebar-collapsed[_ngcontent-%COMP%]   .nav-count[_ngcontent-%COMP%] { display: none; }\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar-admin-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.admin-avatar-sm[_ngcontent-%COMP%] {\n  width: 34px; height: 34px; min-width: 34px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.admin-info[_ngcontent-%COMP%] { min-width: 0; overflow: hidden; }\n.admin-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.admin-role-badge[_ngcontent-%COMP%] { color: var(--indigo); font-size: 11px; font-weight: 500; }\n.sidebar-collapsed[_ngcontent-%COMP%]   .admin-info[_ngcontent-%COMP%] { display: none; }\n\n.btn-collapse[_ngcontent-%COMP%] {\n  background: none; border: 1px solid var(--border);\n  border-radius: 8px; padding: 6px 8px;\n  color: var(--text-muted); cursor: pointer;\n  transition: all 0.2s; min-width: 32px;\n}\n.btn-collapse[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.1); color: var(--indigo); border-color: var(--indigo); }\n\n\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 99;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.sidebar-overlay.visible[_ngcontent-%COMP%] { opacity: 1; }\n\n\n\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n\n\n\n.admin-topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: rgba(8,13,28,0.9);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  gap: 16px;\n  backdrop-filter: blur(20px);\n  flex-shrink: 0;\n}\n.light-mode[_ngcontent-%COMP%]   .admin-topbar[_ngcontent-%COMP%] { background: rgba(248,250,252,0.9); }\n\n.topbar-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none; border: 1px solid var(--border);\n  border-radius: 8px; padding: 6px 10px;\n  color: var(--text-secondary); cursor: pointer;\n  font-size: 18px; transition: all 0.2s;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]:hover { color: var(--indigo); border-color: var(--indigo); }\n\n.topbar-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n  width: 100%;\n}\n.topbar-search-icon[_ngcontent-%COMP%] {\n  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);\n  color: var(--text-muted); font-size: 14px; pointer-events: none;\n}\n.topbar-search[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 40px 8px 36px;\n  color: var(--text-primary);\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.topbar-search[_ngcontent-%COMP%]:focus { border-color: var(--indigo); box-shadow: 0 0 0 3px var(--indigo-glow); }\n.topbar-search[_ngcontent-%COMP%]::placeholder { color: var(--text-muted); }\n.search-kbd[_ngcontent-%COMP%] {\n  position: absolute; right: 10px; top: 50%; transform: translateY(-50%);\n  background: rgba(99,102,241,0.1); border: 1px solid var(--border);\n  border-radius: 4px; padding: 1px 6px; font-size: 10px; color: var(--text-muted);\n}\n\n.topbar-right[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n\n.system-status[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 6px;\n  padding: 5px 12px;\n  background: rgba(16,185,129,0.08);\n  border: 1px solid rgba(16,185,129,0.2);\n  border-radius: 20px;\n  font-size: 12px; font-weight: 500; color: var(--emerald);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 7px; height: 7px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_blink 2s ease-in-out infinite;\n}\n.status-dot.online[_ngcontent-%COMP%] { background: var(--emerald); box-shadow: 0 0 6px var(--emerald); }\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% { opacity: 1; } 50% { opacity: 0.4; }\n}\n.status-text[_ngcontent-%COMP%] { white-space: nowrap; }\n\n\n\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px; height: 36px;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  color: var(--text-secondary); cursor: pointer;\n  font-size: 15px; transition: all 0.2s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.1); color: var(--indigo); border-color: var(--indigo); }\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute; top: -4px; right: -4px;\n  background: var(--rose);\n  color: #fff; font-size: 9px; font-weight: 700;\n  border-radius: 10px; padding: 1px 4px;\n  border: 2px solid var(--bg);\n}\n\n\n\n.notif-bell-wrap[_ngcontent-%COMP%] { position: relative; }\n.notif-dropdown[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 320px;\n  background: rgba(8,13,28,0.97);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 0;\n  opacity: 0; transform: translateY(-10px) scale(0.97);\n  pointer-events: none;\n  transition: all 0.2s cubic-bezier(0.16,1,0.3,1);\n  z-index: 200;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 20px 40px rgba(0,0,0,0.4);\n  overflow: hidden;\n}\n.notif-dropdown.open[_ngcontent-%COMP%] { opacity: 1; transform: none; pointer-events: all; }\n.notif-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex; justify-content: space-between; align-items: center;\n  border-bottom: 1px solid var(--border);\n  font-weight: 600; color: var(--text-primary); font-size: 13px;\n}\n.notif-count[_ngcontent-%COMP%] { color: var(--indigo); font-size: 11px; }\n.notif-item[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; cursor: pointer;\n  transition: background 0.15s;\n  border-bottom: 1px solid rgba(255,255,255,0.03);\n}\n.notif-item[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.06); }\n.notif-item.unread[_ngcontent-%COMP%] { background: rgba(99,102,241,0.04); }\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; min-width: 32px;\n  border-radius: 8px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 14px;\n}\n.notif-color-success[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.notif-color-warning[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.notif-color-info[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.notif-mark-all[_ngcontent-%COMP%] {\n  background: none; border: none;\n  color: var(--indigo); font-size: 11px; font-weight: 600;\n  cursor: pointer; padding: 0; font-family: 'Inter', sans-serif;\n  transition: color 0.15s;\n}\n.notif-mark-all[_ngcontent-%COMP%]:hover { color: #818cf8; }\n.notif-body[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.notif-text[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 500; line-height: 1.4; }\n.notif-time[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; margin-top: 3px; display: flex; align-items: center; gap: 4px; }\n.notif-detail[_ngcontent-%COMP%] { color: var(--text-muted); }\n.notif-sep[_ngcontent-%COMP%] { color: var(--text-muted); opacity: 0.4; }\n.notif-unread-dot[_ngcontent-%COMP%] {\n  width: 7px; height: 7px; min-width: 7px;\n  border-radius: 50%; background: var(--indigo);\n  box-shadow: 0 0 6px var(--indigo-glow);\n  align-self: center;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; align-items: center; gap: 8px;\n  padding: 28px 16px;\n  color: var(--text-muted); font-size: 13px;\n}\n.notif-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 24px; opacity: 0.4; }\n\n\n\n.profile-menu-wrap[_ngcontent-%COMP%] { position: relative; }\n.admin-avatar-btn[_ngcontent-%COMP%] {\n  width: 36px; height: 36px;\n  border-radius: 10px;\n  border: none; cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n  transition: all 0.2s;\n  box-shadow: 0 0 15px rgba(99,102,241,0.3);\n}\n.admin-avatar-btn[_ngcontent-%COMP%]:hover { transform: scale(1.05); }\n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 200px;\n  background: rgba(8,13,28,0.97);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 8px;\n  opacity: 0; transform: translateY(-8px) scale(0.97);\n  pointer-events: none;\n  transition: all 0.2s;\n  z-index: 200;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 16px 32px rgba(0,0,0,0.4);\n}\n.profile-dropdown.open[_ngcontent-%COMP%] { opacity: 1; transform: none; pointer-events: all; }\n.profile-header[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 6px;\n}\n.profile-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; color: var(--text-primary); font-size: 13px; }\n.profile-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; }\n.profile-action[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  width: 100%; padding: 8px 12px;\n  background: none; border: none; border-radius: 8px;\n  color: var(--text-secondary); font-size: 13px; cursor: pointer;\n  transition: all 0.15s; text-align: left;\n}\n.profile-action[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.08); color: var(--text-primary); }\n.profile-action.danger[_ngcontent-%COMP%]:hover { background: rgba(244,63,94,0.08); color: var(--rose); }\n\n\n\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1; overflow-y: auto;\n  padding: 28px;\n  display: flex; flex-direction: column; gap: 0;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99,102,241,0.3) transparent;\n}\n.admin-content[_ngcontent-%COMP%]::-webkit-scrollbar { width: 6px; }\n.admin-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }\n\n\n\n.page-section[_ngcontent-%COMP%] { display: none; flex-direction: column; gap: 24px; animation: _ngcontent-%COMP%_fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1); }\n.page-section.active[_ngcontent-%COMP%] { display: flex; }\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: 'Syne', sans-serif;\n  font-size: 24px; font-weight: 800;\n  color: var(--text-primary); margin: 0 0 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 14px; margin: 0; }\n\n\n\n.btn-primary-action[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: linear-gradient(135deg, var(--indigo), var(--sky));\n  border: none; border-radius: 10px;\n  color: #fff; font-size: 14px; font-weight: 600;\n  cursor: pointer; transition: all 0.3s;\n  display: flex; align-items: center;\n  font-family: 'Inter', sans-serif;\n  box-shadow: 0 4px 16px var(--indigo-glow);\n  white-space: nowrap;\n}\n.btn-primary-action[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.4); }\n\n.btn-secondary-action[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(99,102,241,0.1);\n  border: 1px solid rgba(99,102,241,0.25);\n  border-radius: 10px;\n  color: var(--indigo); font-size: 14px; font-weight: 500;\n  cursor: pointer; transition: all 0.2s;\n  display: flex; align-items: center;\n  font-family: 'Inter', sans-serif;\n  white-space: nowrap;\n}\n.btn-secondary-action[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.18); }\n\n.btn-text[_ngcontent-%COMP%] {\n  background: none; border: none;\n  color: var(--indigo); font-size: 13px; cursor: pointer;\n  display: flex; align-items: center; gap: 4px;\n  font-family: 'Inter', sans-serif;\n  transition: color 0.2s;\n}\n.btn-text[_ngcontent-%COMP%]:hover { color: #818cf8; }\n\n\n\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  backdrop-filter: blur(16px);\n  box-shadow: 0 4px 24px rgba(0,0,0,0.2);\n  transition: box-shadow 0.3s;\n}\n.glass-card[_ngcontent-%COMP%]:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.3); }\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  backdrop-filter: blur(16px);\n  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }\n\n.stat-top[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px; height: 40px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 18px;\n}\n.stat-icon-wrap.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.stat-icon-wrap.emerald[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.stat-icon-wrap.amber[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.stat-icon-wrap.sky[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.stat-icon-wrap.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.stat-icon-wrap.violet[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: var(--violet); }\n\n.stat-trend[_ngcontent-%COMP%] {\n  font-size: 11px; font-weight: 600;\n  padding: 3px 7px; border-radius: 6px;\n  display: flex; align-items: center; gap: 3px;\n}\n.stat-trend.up[_ngcontent-%COMP%] { background: rgba(16,185,129,0.12); color: var(--emerald); }\n.stat-trend.down[_ngcontent-%COMP%] { background: rgba(244,63,94,0.12); color: var(--rose); }\n.stat-trend.neutral[_ngcontent-%COMP%] { background: rgba(100,116,139,0.12); color: var(--text-muted); }\n\n.stat-value[_ngcontent-%COMP%] { font-size: 32px; font-weight: 800; color: var(--text-primary); line-height: 1; margin-bottom: 4px; }\n.stat-label[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 13px; margin-bottom: 12px; }\n\n.stat-bar[_ngcontent-%COMP%] { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }\n.stat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%; border-radius: 2px;\n  background: var(--indigo);\n  transition: width 1s cubic-bezier(0.16,1,0.3,1);\n}\n.stat-bar-fill.emerald[_ngcontent-%COMP%] { background: var(--emerald); }\n.stat-bar-fill.amber[_ngcontent-%COMP%] { background: var(--amber); }\n.stat-bar-fill.sky[_ngcontent-%COMP%] { background: var(--sky); }\n.stat-bar-fill.rose[_ngcontent-%COMP%] { background: var(--rose); }\n.stat-bar-fill.violet[_ngcontent-%COMP%] { background: var(--violet); }\n\n\n\n.overview-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n}\n\n.card-section-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 0;\n}\n\n\n\n.activity-card[_ngcontent-%COMP%] { padding: 20px; }\n.activity-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; }\n.activity-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 10px 8px; border-radius: 10px;\n  transition: background 0.15s;\n}\n.activity-row[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.05); }\n.activity-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.activity-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.activity-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; }\n.activity-detail[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; display: flex; align-items: center; gap: 6px; margin-top: 2px; }\n.activity-status[_ngcontent-%COMP%] {\n  font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 6px;\n  white-space: nowrap;\n}\n.activity-status.active[_ngcontent-%COMP%] { background: rgba(16,185,129,0.12); color: var(--emerald); }\n.activity-status.inactive[_ngcontent-%COMP%] { background: rgba(244,63,94,0.12); color: var(--rose); }\n.activity-empty[_ngcontent-%COMP%] { color: var(--text-muted); text-align: center; padding: 24px; font-size: 13px; }\n\n\n\n.quick-actions-card[_ngcontent-%COMP%] { padding: 20px; }\n.quick-actions-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; align-items: center; gap: 8px;\n  padding: 14px 8px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 12px; cursor: pointer;\n  transition: all 0.2s; color: var(--text-secondary);\n  font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99,102,241,0.08);\n  border-color: rgba(99,102,241,0.25);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.quick-icon[_ngcontent-%COMP%] {\n  width: 36px; height: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 16px;\n}\n.quick-icon.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.quick-icon.amber[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.quick-icon.sky[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.quick-icon.violet[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: var(--violet); }\n.quick-icon.emerald[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.quick-icon.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n\n\n\n.role-chip[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center;\n  padding: 3px 9px; border-radius: 6px;\n  font-size: 11px; font-weight: 600; white-space: nowrap;\n}\n.role-admin[_ngcontent-%COMP%] { background: rgba(244,63,94,0.12); color: var(--rose); border: 1px solid rgba(244,63,94,0.2); }\n.role-manager[_ngcontent-%COMP%] { background: rgba(245,158,11,0.12); color: var(--amber); border: 1px solid rgba(245,158,11,0.2); }\n.role-employee[_ngcontent-%COMP%] { background: rgba(99,102,241,0.12); color: var(--indigo); border: 1px solid rgba(99,102,241,0.2); }\n\n\n\n.text-indigo[_ngcontent-%COMP%] { color: var(--indigo); }\n.text-emerald[_ngcontent-%COMP%] { color: var(--emerald); }\n.text-amber[_ngcontent-%COMP%] { color: var(--amber); }\n.text-sky[_ngcontent-%COMP%] { color: var(--sky); }\n.text-rose[_ngcontent-%COMP%] { color: var(--rose); }\n\n\n\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;\n}\n.filter-search-wrap[_ngcontent-%COMP%] { position: relative; flex: 1; min-width: 200px; }\n.filter-search-icon[_ngcontent-%COMP%] {\n  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);\n  color: var(--text-muted); font-size: 14px;\n}\n.filter-search[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 8px 12px 8px 36px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  transition: border-color 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.filter-search[_ngcontent-%COMP%]:focus { border-color: var(--indigo); }\n.filter-search[_ngcontent-%COMP%]::placeholder { color: var(--text-muted); }\n.filter-chips[_ngcontent-%COMP%] { display: flex; gap: 8px; flex-wrap: wrap; }\n.filter-select[_ngcontent-%COMP%] {\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 7px 12px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  cursor: pointer; font-family: 'Inter', sans-serif;\n}\n\n\n\n.table-card[_ngcontent-%COMP%] { padding: 0; overflow: hidden; }\n.data-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] { border-bottom: 1px solid var(--border); }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: var(--text-muted); font-size: 11px; font-weight: 600;\n  text-transform: uppercase; letter-spacing: 0.05em;\n  text-align: left; white-space: nowrap;\n}\n.th-actions[_ngcontent-%COMP%] { text-align: right; }\n.table-row[_ngcontent-%COMP%] { border-bottom: 1px solid rgba(255,255,255,0.03); transition: background 0.15s; }\n.table-row[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.04); }\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 12px 16px; }\n\n.user-cell[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.user-fullname[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; }\n.user-tel[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; margin-top: 2px; }\n.td-email[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 13px; }\n.td-date[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; white-space: nowrap; }\n.td-actions[_ngcontent-%COMP%] { text-align: right; }\n\n.row-actions[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: flex-end; gap: 6px; }\n.row-btn[_ngcontent-%COMP%] {\n  width: 30px; height: 30px;\n  border-radius: 7px; border: 1px solid var(--border);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; cursor: pointer; transition: all 0.15s;\n  background: rgba(30,41,59,0.4); color: var(--text-muted);\n}\n.row-btn.edit[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.15); color: var(--indigo); border-color: rgba(99,102,241,0.3); }\n.row-btn.key[_ngcontent-%COMP%]:hover { background: rgba(245,158,11,0.15); color: var(--amber); border-color: rgba(245,158,11,0.3); }\n.row-btn.delete[_ngcontent-%COMP%]:hover { background: rgba(244,63,94,0.15); color: var(--rose); border-color: rgba(244,63,94,0.3); }\n\n.table-empty[_ngcontent-%COMP%] { text-align: center; padding: 40px; color: var(--text-muted); font-size: 14px; }\n\n\n\n.status-toggle-wrap[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.status-toggle[_ngcontent-%COMP%] {\n  width: 36px; height: 20px;\n  background: rgba(100,116,139,0.3);\n  border: none; border-radius: 10px;\n  cursor: pointer; position: relative;\n  transition: background 0.2s;\n  padding: 0;\n}\n.status-toggle.on[_ngcontent-%COMP%] { background: var(--emerald); }\n.status-toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute; top: 2px; left: 2px;\n  width: 16px; height: 16px;\n  background: #fff; border-radius: 50%;\n  transition: transform 0.2s;\n  pointer-events: none;\n}\n.status-toggle.on[_ngcontent-%COMP%]   .status-toggle-thumb[_ngcontent-%COMP%] { transform: translateX(16px); }\n.status-label[_ngcontent-%COMP%] { font-size: 12px; color: var(--text-muted); }\n\n\n\n.pagination-bar[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: center; gap: 6px;\n  padding: 14px;\n  border-top: 1px solid var(--border);\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 32px; height: 32px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 8px; color: var(--text-secondary);\n  font-size: 13px; cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  transition: all 0.15s; font-family: 'Inter', sans-serif;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) { background: rgba(99,102,241,0.1); color: var(--indigo); }\n.page-btn.active[_ngcontent-%COMP%] { background: var(--indigo); color: #fff; border-color: var(--indigo); }\n.page-btn[_ngcontent-%COMP%]:disabled { opacity: 0.3; cursor: not-allowed; }\n\n\n\n.role-tabs[_ngcontent-%COMP%] {\n  display: flex; gap: 8px; flex-wrap: wrap;\n}\n.role-tab[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  color: var(--text-secondary); font-size: 14px; font-weight: 500;\n  cursor: pointer; transition: all 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.role-tab[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.08); color: var(--text-primary); }\n.role-tab.active[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); border-color: rgba(99,102,241,0.3); }\n\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 12px;\n}\n.perm-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex; align-items: center; justify-content: space-between; gap: 12px;\n  transition: all 0.2s;\n}\n.perm-card[_ngcontent-%COMP%]:hover { transform: translateY(-2px); }\n.perm-info[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }\n.perm-icon-wrap[_ngcontent-%COMP%] { font-size: 18px; min-width: 20px; }\n.perm-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 14px; font-weight: 500; }\n.perm-role-note[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; }\n\n\n\n.toggle-switch[_ngcontent-%COMP%] { position: relative; display: inline-flex; cursor: pointer; }\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { display: none; }\n.toggle-track[_ngcontent-%COMP%] {\n  width: 44px; height: 24px;\n  background: rgba(100,116,139,0.3);\n  border-radius: 12px; transition: background 0.2s;\n  position: relative;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] { background: var(--indigo); }\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute; top: 3px; left: 3px;\n  width: 18px; height: 18px;\n  background: #fff; border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.3);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] { transform: translateX(20px); }\n.toggle-switch.disabled[_ngcontent-%COMP%] { opacity: 0.4; cursor: not-allowed; pointer-events: none; }\n\n\n\n.role-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.role-summary-card[_ngcontent-%COMP%] { padding: 20px; }\n.role-summary-header[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }\n.role-summary-icon[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px;\n}\n.role-icon-admin[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.role-icon-manager[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.role-icon-employee[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.role-summary-title[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 15px; font-weight: 700; }\n.role-summary-count[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; margin-top: 2px; }\n.role-perm-count[_ngcontent-%COMP%] { display: flex; gap: 12px; margin-bottom: 12px; font-size: 12px; }\n.perm-active[_ngcontent-%COMP%] { color: var(--emerald); }\n.perm-blocked[_ngcontent-%COMP%] { color: var(--rose); }\n.role-progress-bar[_ngcontent-%COMP%] { height: 4px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }\n.role-progress-fill[_ngcontent-%COMP%] {\n  height: 100%; border-radius: 2px;\n  transition: width 1s cubic-bezier(0.16,1,0.3,1);\n}\n.fill-admin[_ngcontent-%COMP%] { background: var(--rose); }\n.fill-manager[_ngcontent-%COMP%] { background: var(--amber); }\n.fill-employee[_ngcontent-%COMP%] { background: var(--indigo); }\n\n\n\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 14px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex; flex-direction: column; align-items: center; text-align: center;\n  gap: 6px; transition: all 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover { transform: translateY(-3px); }\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px; margin-bottom: 4px;\n}\n.kpi-icon.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.kpi-icon.emerald[_ngcontent-%COMP%] { background: rgba(16,185,129,0.15); color: var(--emerald); }\n.kpi-icon.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.kpi-icon.sky[_ngcontent-%COMP%] { background: rgba(14,165,233,0.15); color: var(--sky); }\n.kpi-value[_ngcontent-%COMP%] { font-size: 28px; font-weight: 800; color: var(--text-primary); line-height: 1; }\n.kpi-label[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 12px; }\n\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.chart-card[_ngcontent-%COMP%] { padding: 20px; }\n.chart-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; display: flex; align-items: center; }\n\n\n\n.donut-chart-wrap[_ngcontent-%COMP%] { position: relative; display: flex; justify-content: center; margin-bottom: 16px; }\n.donut-svg[_ngcontent-%COMP%] { width: 120px; height: 120px; }\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute; top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.donut-total[_ngcontent-%COMP%] { font-size: 22px; font-weight: 800; color: var(--text-primary); }\n.donut-label[_ngcontent-%COMP%] { font-size: 10px; color: var(--text-muted); }\n.chart-legend[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.legend-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-secondary); }\n.legend-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { margin-left: auto; color: var(--text-primary); }\n.legend-dot[_ngcontent-%COMP%] { width: 10px; height: 10px; border-radius: 50%; min-width: 10px; }\n.dot-admin[_ngcontent-%COMP%] { background: var(--rose); }\n.dot-manager[_ngcontent-%COMP%] { background: var(--amber); }\n.dot-employee[_ngcontent-%COMP%] { background: var(--indigo); }\n\n\n\n.bar-chart-wrap[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-end; gap: 6px;\n  height: 100px; padding-bottom: 20px; position: relative;\n}\n.bar-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; flex: 1; height: 100%; }\n.bar-col[_ngcontent-%COMP%] { flex: 1; display: flex; align-items: flex-end; width: 100%; }\n.bar-fill[_ngcontent-%COMP%] {\n  width: 100%; border-radius: 4px 4px 0 0;\n  min-height: 4px; transition: height 1s cubic-bezier(0.16,1,0.3,1);\n  position: relative; display: flex; align-items: flex-start; justify-content: center;\n}\n.bar-fill.indigo[_ngcontent-%COMP%] { background: linear-gradient(to top, var(--indigo), rgba(99,102,241,0.5)); }\n.bar-value[_ngcontent-%COMP%] { font-size: 9px; color: var(--text-muted); margin-top: 2px; }\n.bar-label[_ngcontent-%COMP%] { font-size: 9px; color: var(--text-muted); margin-top: 4px; }\n.bar-empty[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 13px; width: 100%; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 20px 0; }\n\n\n\n.status-chart[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 20px; }\n.status-ring-wrap[_ngcontent-%COMP%] { position: relative; }\n.ring-segment[_ngcontent-%COMP%] {\n  width: 90px; height: 90px;\n  border-radius: 50%;\n  background: conic-gradient(var(--emerald) calc(var(--pct) * 360deg), rgba(255,255,255,0.07) 0deg);\n  display: flex; align-items: center; justify-content: center;\n}\n.status-stats[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; flex: 1; }\n.status-stat[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.ss-dot[_ngcontent-%COMP%] { width: 10px; height: 10px; border-radius: 50%; min-width: 10px; }\n.ss-dot.active[_ngcontent-%COMP%] { background: var(--emerald); }\n.ss-dot.inactive[_ngcontent-%COMP%] { background: var(--rose); }\n.ss-dot.admin[_ngcontent-%COMP%] { background: var(--indigo); }\n.ss-info[_ngcontent-%COMP%] {}\n.ss-value[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: var(--text-primary); line-height: 1; }\n.ss-label[_ngcontent-%COMP%] { font-size: 11px; color: var(--text-muted); }\n\n\n\n.system-health-card[_ngcontent-%COMP%] { padding: 20px; }\n.health-badge[_ngcontent-%COMP%] {\n  padding: 5px 12px; border-radius: 20px;\n  font-size: 12px; font-weight: 600;\n  display: flex; align-items: center;\n}\n.health-badge.online[_ngcontent-%COMP%] { background: rgba(16,185,129,0.12); color: var(--emerald); }\n.health-modules[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; margin-top: 4px; }\n.health-module[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 12px 14px;\n  background: rgba(30,41,59,0.4);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.hm-icon[_ngcontent-%COMP%] { font-size: 16px; }\n.hm-icon.ok[_ngcontent-%COMP%] { color: var(--emerald); }\n.hm-name[_ngcontent-%COMP%] { flex: 1; color: var(--text-primary); font-size: 13px; font-weight: 500; }\n.hm-latency[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; }\n.hm-status[_ngcontent-%COMP%] { font-size: 11px; font-weight: 600; }\n.hm-status.online[_ngcontent-%COMP%] { color: var(--emerald); }\n\n\n\n.activity-full-card[_ngcontent-%COMP%] { padding: 0; overflow: hidden; }\n.activity-full-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.activity-full-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.03);\n  transition: background 0.15s;\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s both;\n}\n.activity-full-row[_ngcontent-%COMP%]:hover { background: rgba(99,102,241,0.04); }\n.afl-index[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; min-width: 28px; }\n.afl-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; min-width: 36px;\n  border-radius: 10px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 13px; font-weight: 700; color: #fff;\n}\n.afl-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.afl-name[_ngcontent-%COMP%] { color: var(--text-primary); font-size: 13px; font-weight: 600; }\n.afl-email[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.afl-time[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 12px; white-space: nowrap; }\n.afl-status[_ngcontent-%COMP%] { font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 4px; white-space: nowrap; }\n.afl-status.active[_ngcontent-%COMP%] { color: var(--emerald); }\n.afl-status.inactive[_ngcontent-%COMP%] { color: var(--rose); }\n\n\n\n.settings-saved-banner[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(16,185,129,0.1);\n  border: 1px solid rgba(16,185,129,0.25);\n  border-radius: 10px;\n  color: var(--emerald);\n  font-size: 14px; font-weight: 500;\n  display: flex; align-items: center; gap: 8px;\n  opacity: 0; transform: translateY(-8px);\n  transition: all 0.3s;\n  pointer-events: none;\n}\n.settings-saved-banner.visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.settings-section[_ngcontent-%COMP%] { padding: 22px; }\n.settings-section-header[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px;\n}\n.settings-section-icon[_ngcontent-%COMP%] {\n  width: 44px; height: 44px; min-width: 44px;\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 20px;\n}\n.settings-section-icon.indigo[_ngcontent-%COMP%] { background: rgba(99,102,241,0.15); color: var(--indigo); }\n.settings-section-icon.rose[_ngcontent-%COMP%] { background: rgba(244,63,94,0.15); color: var(--rose); }\n.settings-section-icon.amber[_ngcontent-%COMP%] { background: rgba(245,158,11,0.15); color: var(--amber); }\n.settings-section-icon.violet[_ngcontent-%COMP%] { background: rgba(139,92,246,0.15); color: var(--violet); }\n.settings-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }\n.settings-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 12px; color: var(--text-muted); margin: 0; }\n.settings-fields[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.settings-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; color: var(--text-secondary); font-size: 12px; font-weight: 500; margin-bottom: 6px; }\n.settings-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 8px 12px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  transition: border-color 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.settings-input[_ngcontent-%COMP%]:focus { border-color: var(--indigo); }\n.settings-toggle-field[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between; gap: 12px;\n}\n.settings-toggle-info[_ngcontent-%COMP%] { flex: 1; }\n.toggle-title[_ngcontent-%COMP%] { display: block; color: var(--text-primary); font-size: 13px; font-weight: 500; }\n.toggle-desc[_ngcontent-%COMP%] { display: block; color: var(--text-muted); font-size: 11px; margin-top: 2px; }\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.6);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 500;\n  opacity: 0; pointer-events: none;\n  transition: opacity 0.25s;\n  backdrop-filter: blur(4px);\n  padding: 20px;\n}\n.modal-overlay.open[_ngcontent-%COMP%] { opacity: 1; pointer-events: all; }\n\n.modal-box[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  width: 100%; max-width: 520px;\n  box-shadow: 0 24px 60px rgba(0,0,0,0.5);\n  transform: scale(0.96) translateY(16px);\n  transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);\n  overflow: hidden;\n}\n.modal-box.modal-sm[_ngcontent-%COMP%] { max-width: 400px; }\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-box[_ngcontent-%COMP%] { transform: none; }\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  display: flex; align-items: center; justify-content: space-between;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; }\n.modal-header.danger[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { color: var(--rose); }\n.modal-close[_ngcontent-%COMP%] {\n  background: none; border: none;\n  color: var(--text-muted); cursor: pointer; font-size: 16px;\n  width: 28px; height: 28px;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 6px; transition: all 0.15s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(244,63,94,0.1); color: var(--rose); }\n\n.modal-body[_ngcontent-%COMP%] { padding: 20px; }\n.modal-fields[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.modal-field-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.modal-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; color: var(--text-secondary); font-size: 12px; font-weight: 500; margin-bottom: 6px; }\n.modal-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(30,41,59,0.6);\n  border: 1px solid var(--border);\n  border-radius: 9px; padding: 9px 12px;\n  color: var(--text-primary); font-size: 13px; outline: none;\n  transition: border-color 0.2s;\n  font-family: 'Inter', sans-serif;\n}\n.modal-input[_ngcontent-%COMP%]:focus { border-color: var(--indigo); box-shadow: 0 0 0 3px var(--indigo-glow); }\n\n.delete-confirm-text[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 14px; line-height: 1.6; }\n.delete-confirm-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--text-primary); }\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex; align-items: center; justify-content: flex-end; gap: 10px;\n  border-top: 1px solid var(--border);\n}\n.btn-modal-cancel[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(30,41,59,0.5);\n  border: 1px solid var(--border);\n  border-radius: 9px; color: var(--text-secondary);\n  font-size: 13px; font-weight: 500; cursor: pointer;\n  transition: all 0.15s; font-family: 'Inter', sans-serif;\n}\n.btn-modal-cancel[_ngcontent-%COMP%]:hover { background: rgba(30,41,59,0.8); color: var(--text-primary); }\n.btn-modal-save[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: linear-gradient(135deg, var(--indigo), var(--sky));\n  border: none; border-radius: 9px;\n  color: #fff; font-size: 13px; font-weight: 600;\n  cursor: pointer; transition: all 0.2s;\n  display: flex; align-items: center; gap: 6px;\n  font-family: 'Inter', sans-serif;\n}\n.btn-modal-save[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px var(--indigo-glow); }\n.btn-modal-save[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n.btn-modal-delete[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: linear-gradient(135deg, var(--rose), #dc2626);\n  border: none; border-radius: 9px;\n  color: #fff; font-size: 13px; font-weight: 600;\n  cursor: pointer; transition: all 0.2s;\n  display: flex; align-items: center; gap: 6px;\n  font-family: 'Inter', sans-serif;\n}\n.btn-modal-delete[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(244,63,94,0.35); }\n.btn-modal-delete[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(244,63,94,0.1);\n  border: 1px solid rgba(244,63,94,0.25);\n  color: #fb7185; border-radius: 9px;\n  padding: 10px 14px; font-size: 13px;\n  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;\n}\n\n.spin-icon[_ngcontent-%COMP%] { display: inline-block; animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n\n\n\n@media (max-width: 1024px) {\n  .overview-bottom[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .charts-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 768px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    position: fixed; left: -100%; top: 0; height: 100vh;\n    width: 260px !important; min-width: 260px !important;\n    transition: left 0.3s cubic-bezier(0.16,1,0.3,1);\n    z-index: 200;\n  }\n  .admin-sidebar.open[_ngcontent-%COMP%] { left: 0; }\n  .sidebar-overlay[_ngcontent-%COMP%] { display: block; pointer-events: none; }\n  .sidebar-overlay.visible[_ngcontent-%COMP%] { pointer-events: all; }\n  .mobile-menu-btn[_ngcontent-%COMP%] { display: flex; }\n  .topbar-search-wrap[_ngcontent-%COMP%] { max-width: 200px; }\n  .system-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] { display: none; }\n  .admin-content[_ngcontent-%COMP%] { padding: 16px; }\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n  .modal-field-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .search-kbd[_ngcontent-%COMP%] { display: none; }\n}\n\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .admin-content[_ngcontent-%COMP%] { padding: 12px; }\n  .page-header[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; }\n  .filters-bar[_ngcontent-%COMP%] { flex-direction: column; }\n  .kpi-row[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3dEQUV3RDs7QUFFeEQsUUFBUSxjQUFjLEVBQUUsYUFBYSxFQUFFOztBQUV2QyxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlFQUFpRTtFQUNqRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFD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RUFBRSxvQkFBb0IsRUFBRTtFQUN6RCwyQkFBMkIsbUJBQW1CLEVBQUU7RUFDaEQsbUJBQW1CLGFBQWEsRUFBRTtFQUNsQyxzQkFBc0IsZ0JBQWdCLEVBQUU7RUFDeEMsOEJBQThCLGFBQWEsRUFBRTtFQUM3QyxpQkFBaUIsYUFBYSxFQUFFO0VBQ2hDLGNBQWMscUNBQXFDLEVBQUU7RUFDckQsbUJBQW1CLDBCQUEwQixFQUFFO0VBQy9DLGNBQWMsYUFBYSxFQUFFO0FBQy9COztBQUVBO0VBQ0UsY0FBYywwQkFBMEIsRUFBRTtFQUMxQyxpQkFBaUIsYUFBYSxFQUFFO0VBQ2hDLGVBQWUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUU7RUFDaEUsZUFBZSxzQkFBc0IsRUFBRTtFQUN2QyxXQUFXLHFDQUFxQyxFQUFFO0FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBBRE1JTiBEQVNIQk9BUkQgw6LCgMKUIFByZW1pdW0gRGVzaWduIFN5c3RlbVxuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbjpob3N0IHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMTAwdmg7IH1cblxuLyogw6LClMKAw6LClMKAIFZhcmlhYmxlcyDDosKUwoDDosKUwoAgKi9cbi5hZG1pbi1zaGVsbCB7XG4gIC0tc2lkZWJhci13OiAyNjBweDtcbiAgLS1zaWRlYmFyLXctc206IDcycHg7XG4gIC0tdG9wYmFyLWg6IDY0cHg7XG4gIC0tYmc6ICMwYjExMjA7XG4gIC0tYmctY2FyZDogcmdiYSgxNSwyMyw0MiwwLjc1KTtcbiAgLS1iZy1jYXJkLWhvdmVyOiByZ2JhKDIwLDMwLDU1LDAuOSk7XG4gIC0tYm9yZGVyOiByZ2JhKDk5LDEwMiwyNDEsMC4xMik7XG4gIC0tdGV4dC1wcmltYXJ5OiAjZjFmNWY5O1xuICAtLXRleHQtc2Vjb25kYXJ5OiAjOTRhM2I4O1xuICAtLXRleHQtbXV0ZWQ6ICM0NzU1Njk7XG4gIC0taW5kaWdvOiAjNjM2NmYxO1xuICAtLWluZGlnby1nbG93OiByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7XG4gIC0tc2t5OiAjMGVhNWU5O1xuICAtLWVtZXJhbGQ6ICMxMGI5ODE7XG4gIC0tYW1iZXI6ICNmNTllMGI7XG4gIC0tcm9zZTogI2Y0M2Y1ZTtcbiAgLS12aW9sZXQ6ICM4YjVjZjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xufVxuXG4uYWRtaW4tc2hlbGwubGlnaHQtbW9kZSB7XG4gIC0tYmc6ICNmMWY1Zjk7XG4gIC0tYmctY2FyZDogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcbiAgLS1ib3JkZXI6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTtcbiAgLS10ZXh0LXByaW1hcnk6ICMwZjE3MmE7XG4gIC0tdGV4dC1zZWNvbmRhcnk6ICM0NzU1Njk7XG4gIC0tdGV4dC1tdXRlZDogIzk0YTNiODtcbn1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFNJREVCQVIgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4uYWRtaW4tc2lkZWJhciB7XG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXcpO1xuICBtaW4td2lkdGg6IHZhcigtLXNpZGViYXItdyk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOCwxMywyOCwwLjk1KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKSwgbWluLXdpZHRoIDAuM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyLWNvbGxhcHNlZCAuYWRtaW4tc2lkZWJhciB7XG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXctc20pO1xuICBtaW4td2lkdGg6IHZhcigtLXNpZGViYXItdy1zbSk7XG59XG5cbi8qIEJyYW5kICovXG4uc2lkZWJhci1icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMjBweCAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBtaW4taGVpZ2h0OiA2NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNpZGViYXItbG9nbyB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IG1pbi13aWR0aDogMzZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW5kaWdvKSwgdmFyKC0tc2t5KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1pbmRpZ28tZ2xvdyk7XG59XG4uc2lkZWJhci1icmFuZC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyLWJyYW5kLXRleHQgc3Ryb25nIHsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5zaWRlYmFyLWNvbGxhcHNlZCAuc2lkZWJhci1icmFuZC10ZXh0IHsgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBOYXYgKi9cbi5zaWRlYmFyLW5hdiB7IGZsZXg6IDE7IHBhZGRpbmc6IDE2cHggMTBweDsgb3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG4ubmF2LXNlY3Rpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuLnNpZGViYXItY29sbGFwc2VkIC5uYXYtc2VjdGlvbi1sYWJlbCB7IG9wYWNpdHk6IDA7IGhlaWdodDogMDsgcGFkZGluZzogMDsgfVxuXG4ubmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5uYXYtaXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IH1cbi5uYXYtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1pbmRpZ28pO1xuICBib3gtc2hhZG93OiBpbnNldCAzcHggMCAwIHZhcigtLWluZGlnbyk7XG59XG4ubmF2LWl0ZW0uYWN0aXZlIC5uYXYtaWNvbiB7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4ubmF2LWljb24geyBmb250LXNpemU6IDE2cHg7IG1pbi13aWR0aDogMTZweDsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7IH1cbi5uYXYtaXRlbTpob3ZlciAubmF2LWljb24geyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbi5uYXYtbGFiZWwgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA1MDA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4uc2lkZWJhci1jb2xsYXBzZWQgLm5hdi1sYWJlbCB7IGRpc3BsYXk6IG5vbmU7IH1cbi5uYXYtcGlsbCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4IDdweDtcbn1cbi5uYXYtY291bnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2lkZWJhci1jb2xsYXBzZWQgLm5hdi1waWxsLFxuLnNpZGViYXItY29sbGFwc2VkIC5uYXYtY291bnQgeyBkaXNwbGF5OiBub25lOyB9XG5cbi8qIFNpZGViYXIgZm9vdGVyICovXG4uc2lkZWJhci1mb290ZXIge1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4uc2lkZWJhci1hZG1pbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG4uYWRtaW4tYXZhdGFyLXNtIHtcbiAgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgbWluLXdpZHRoOiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2ZmZjtcbn1cbi5hZG1pbi1pbmZvIHsgbWluLXdpZHRoOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB9XG4uYWRtaW4tbmFtZSB7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4uYWRtaW4tcm9sZS1iYWRnZSB7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi5zaWRlYmFyLWNvbGxhcHNlZCAuYWRtaW4taW5mbyB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLmJ0bi1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogNnB4IDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyBtaW4td2lkdGg6IDMycHg7XG59XG4uYnRuLWNvbGxhcHNlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMSk7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyBib3JkZXItY29sb3I6IHZhcigtLWluZGlnbyk7IH1cblxuLyogT3ZlcmxheSAobW9iaWxlKSAqL1xuLnNpZGViYXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgei1pbmRleDogOTk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbn1cbi5zaWRlYmFyLW92ZXJsYXkudmlzaWJsZSB7IG9wYWNpdHk6IDE7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIE1BSU4gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4uYWRtaW4tbWFpbiB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFRPUEJBUiDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG1pbi10b3BiYXIge1xuICBoZWlnaHQ6IHZhcigtLXRvcGJhci1oKTtcbiAgYmFja2dyb3VuZDogcmdiYSg4LDEzLDI4LDAuOSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZ2FwOiAxNnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmxpZ2h0LW1vZGUgLmFkbWluLXRvcGJhciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ4LDI1MCwyNTIsMC45KTsgfVxuXG4udG9wYmFyLWxlZnQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLm1vYmlsZS1tZW51LWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogNnB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5tb2JpbGUtbWVudS1idG46aG92ZXIgeyBjb2xvcjogdmFyKC0taW5kaWdvKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG5cbi50b3BiYXItc2VhcmNoLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvcGJhci1zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTJweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDE0cHg7IHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnRvcGJhci1zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggNDBweCA4cHggMzZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLnRvcGJhci1zZWFyY2g6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWluZGlnbyk7IGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1pbmRpZ28tZ2xvdyk7IH1cbi50b3BiYXItc2VhcmNoOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuLnNlYXJjaC1rYmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAxMHB4OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBwYWRkaW5nOiAxcHggNnB4OyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnRvcGJhci1yaWdodCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG5cbi5zeXN0ZW0tc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTtcbn1cbi5zdGF0dXMtZG90IHtcbiAgd2lkdGg6IDdweDsgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBibGluayAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5zdGF0dXMtZG90Lm9ubGluZSB7IGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQpOyBib3gtc2hhZG93OiAwIDAgNnB4IHZhcigtLWVtZXJhbGQpOyB9XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IDAuNDsgfVxufVxuLnN0YXR1cy10ZXh0IHsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4vKiBJY29uIGJ1dHRvbnMgKi9cbi5pY29uLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7IHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmljb24tYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMSk7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyBib3JkZXItY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5ub3RpZi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNHB4OyByaWdodDogLTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcm9zZSk7XG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDlweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogMXB4IDRweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmcpO1xufVxuXG4vKiBOb3RpZmljYXRpb25zIGRyb3Bkb3duICovXG4ubm90aWYtYmVsbC13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4ubm90aWYtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogY2FsYygxMDAlICsgMTBweCk7IHJpZ2h0OiAwO1xuICB3aWR0aDogMzIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOCwxMywyOCwwLjk3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMDtcbiAgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgwLjk3KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xuICB6LWluZGV4OiAyMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLDAsMCwwLjQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm5vdGlmLWRyb3Bkb3duLm9wZW4geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG5vbmU7IHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cbi5ub3RpZi1oZWFkZXIge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7XG59XG4ubm90aWYtY291bnQgeyBjb2xvcjogdmFyKC0taW5kaWdvKTsgZm9udC1zaXplOiAxMXB4OyB9XG4ubm90aWYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTtcbn1cbi5ub3RpZi1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDYpOyB9XG4ubm90aWYtaXRlbS51bnJlYWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wNCk7IH1cbi5ub3RpZi1pY29uLXdyYXAge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBtaW4td2lkdGg6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ub3RpZi1jb2xvci1zdWNjZXNzIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5ub3RpZi1jb2xvci13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4ubm90aWYtY29sb3ItaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6IHZhcigtLXNreSk7IH1cbi5ub3RpZi1tYXJrLWFsbCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWluZGlnbyk7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyBwYWRkaW5nOiAwOyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXM7XG59XG4ubm90aWYtbWFyay1hbGw6aG92ZXIgeyBjb2xvcjogIzgxOGNmODsgfVxuLm5vdGlmLWJvZHkgeyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5ub3RpZi10ZXh0IHsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDsgbGluZS1oZWlnaHQ6IDEuNDsgfVxuLm5vdGlmLXRpbWUgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgbWFyZ2luLXRvcDogM3B4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxuLm5vdGlmLWRldGFpbCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuLm5vdGlmLXNlcCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgb3BhY2l0eTogMC40OyB9XG4ubm90aWYtdW5yZWFkLWRvdCB7XG4gIHdpZHRoOiA3cHg7IGhlaWdodDogN3B4OyBtaW4td2lkdGg6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiB2YXIoLS1pbmRpZ28pO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IHZhcigtLWluZGlnby1nbG93KTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm5vdGlmLWVtcHR5IHtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDI4cHggMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDEzcHg7XG59XG4ubm90aWYtZW1wdHkgaSB7IGZvbnQtc2l6ZTogMjRweDsgb3BhY2l0eTogMC40OyB9XG5cbi8qIFByb2ZpbGUgbWVudSAqL1xuLnByb2ZpbGUtbWVudS13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uYWRtaW4tYXZhdGFyLWJ0biB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoOTksMTAyLDI0MSwwLjMpO1xufVxuLmFkbWluLWF2YXRhci1idG46aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XG4ucHJvZmlsZS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTsgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSg4LDEzLDI4LDAuOTcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSBzY2FsZSgwLjk3KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB6LWluZGV4OiAyMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggcmdiYSgwLDAsMCwwLjQpO1xufVxuLnByb2ZpbGUtZHJvcGRvd24ub3BlbiB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogbm9uZTsgcG9pbnRlci1ldmVudHM6IGFsbDsgfVxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxMnB4IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ucHJvZmlsZS1oZWFkZXIgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IH1cbi5wcm9maWxlLWhlYWRlciBzcGFuIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cbi5wcm9maWxlLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xuICB3aWR0aDogMTAwJTsgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6IDEzcHg7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzOyB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByb2ZpbGUtYWN0aW9uOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDgpOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgfVxuLnByb2ZpbGUtYWN0aW9uLmRhbmdlcjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMDgpOyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIENPTlRFTlQgQVJFQSDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5hZG1pbi1jb250ZW50IHtcbiAgZmxleDogMTsgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjhweDtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAwO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMykgdHJhbnNwYXJlbnQ7XG59XG4uYWRtaW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogNnB4OyB9XG4uYWRtaW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4zKTsgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbi8qIFBhZ2Ugc2VjdGlvbnMgKi9cbi5wYWdlLXNlY3Rpb24geyBkaXNwbGF5OiBub25lOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDI0cHg7IGFuaW1hdGlvbjogZmFkZUluVXAgMC40cyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTsgfVxuLnBhZ2Utc2VjdGlvbi5hY3RpdmUgeyBkaXNwbGF5OiBmbGV4OyB9XG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBhZ2UtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBtYXJnaW46IDAgMCA0cHg7XG59XG4ucGFnZS1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTRweDsgbWFyZ2luOiAwOyB9XG5cbi8qIEJ1dHRvbnMgKi9cbi5idG4tcHJpbWFyeS1hY3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWluZGlnbyksIHZhcigtLXNreSkpO1xuICBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHZhcigtLWluZGlnby1nbG93KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5idG4tcHJpbWFyeS1hY3Rpb246aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSg5OSwxMDIsMjQxLDAuNCk7IH1cblxuLmJ0bi1zZWNvbmRhcnktYWN0aW9uIHtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pbmRpZ28pOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJ0bi1zZWNvbmRhcnktYWN0aW9uOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTgpOyB9XG5cbi5idG4tdGV4dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWluZGlnbyk7IGZvbnQtc2l6ZTogMTNweDsgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG4uYnRuLXRleHQ6aG92ZXIgeyBjb2xvcjogIzgxOGNmODsgfVxuXG4vKiBHbGFzcyBjYXJkICovXG4uZ2xhc3MtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhcmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG4uZ2xhc3MtY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLDAsMCwwLjMpOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBTVEFUUyBHUklEIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhcmQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc3RhdC1jYXJkOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpOyBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDAsMCwwLDAuMyk7IH1cblxuLnN0YXQtdG9wIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4uc3RhdC1pY29uLXdyYXAge1xuICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnN0YXQtaWNvbi13cmFwLmluZGlnbyB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5zdGF0LWljb24td3JhcC5lbWVyYWxkIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5zdGF0LWljb24td3JhcC5hbWJlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjE1KTsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxuLnN0YXQtaWNvbi13cmFwLnNreSB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6IHZhcigtLXNreSk7IH1cbi5zdGF0LWljb24td3JhcC5yb3NlIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xNSk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuLnN0YXQtaWNvbi13cmFwLnZpb2xldCB7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwwLjE1KTsgY29sb3I6IHZhcigtLXZpb2xldCk7IH1cblxuLnN0YXQtdHJlbmQge1xuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDNweCA3cHg7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAzcHg7XG59XG4uc3RhdC10cmVuZC51cCB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEyKTsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4uc3RhdC10cmVuZC5kb3duIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xMik7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuLnN0YXQtdHJlbmQubmV1dHJhbCB7IGJhY2tncm91bmQ6IHJnYmEoMTAwLDExNiwxMzksMC4xMik7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuXG4uc3RhdC12YWx1ZSB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGxpbmUtaGVpZ2h0OiAxOyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cbi5zdGF0LWxhYmVsIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG5cbi5zdGF0LWJhciB7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBib3JkZXItcmFkaXVzOiAycHg7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5zdGF0LWJhci1maWxsIHtcbiAgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWluZGlnbyk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xufVxuLnN0YXQtYmFyLWZpbGwuZW1lcmFsZCB7IGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQpOyB9XG4uc3RhdC1iYXItZmlsbC5hbWJlciB7IGJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTsgfVxuLnN0YXQtYmFyLWZpbGwuc2t5IHsgYmFja2dyb3VuZDogdmFyKC0tc2t5KTsgfVxuLnN0YXQtYmFyLWZpbGwucm9zZSB7IGJhY2tncm91bmQ6IHZhcigtLXJvc2UpOyB9XG4uc3RhdC1iYXItZmlsbC52aW9sZXQgeyBiYWNrZ3JvdW5kOiB2YXIoLS12aW9sZXQpOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBPVkVSVklFVyBCT1RUT00gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4ub3ZlcnZpZXctYm90dG9tIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzQwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmNhcmQtc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY2FyZC1zZWN0aW9uLWhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IG1hcmdpbjogMDtcbn1cblxuLyogQWN0aXZpdHkgY2FyZCAqL1xuLmFjdGl2aXR5LWNhcmQgeyBwYWRkaW5nOiAyMHB4OyB9XG4uYWN0aXZpdHktbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMnB4OyB9XG4uYWN0aXZpdHktcm93IHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDhweDsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cbi5hY3Rpdml0eS1yb3c6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wNSk7IH1cbi5hY3Rpdml0eS1hdmF0YXIge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBtaW4td2lkdGg6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZmZmO1xufVxuLmFjdGl2aXR5LWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5hY3Rpdml0eS1uYW1lIHsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLmFjdGl2aXR5LWRldGFpbCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxMXB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgbWFyZ2luLXRvcDogMnB4OyB9XG4uYWN0aXZpdHktc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYWN0aXZpdHktc3RhdHVzLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEyKTsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4uYWN0aXZpdHktc3RhdHVzLmluYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xMik7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuLmFjdGl2aXR5LWVtcHR5IHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDI0cHg7IGZvbnQtc2l6ZTogMTNweDsgfVxuXG4vKiBRdWljayBhY3Rpb25zICovXG4ucXVpY2stYWN0aW9ucy1jYXJkIHsgcGFkZGluZzogMjBweDsgfVxuLnF1aWNrLWFjdGlvbnMtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAxMHB4OyB9XG4ucXVpY2stYnRuIHtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDE0cHggOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDUwMDsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG4ucXVpY2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDgpO1xuICBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjI1KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5xdWljay1pY29uIHtcbiAgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5xdWljay1pY29uLmluZGlnbyB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5xdWljay1pY29uLmFtYmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4ucXVpY2staWNvbi5za3kgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsMC4xNSk7IGNvbG9yOiB2YXIoLS1za3kpOyB9XG4ucXVpY2staWNvbi52aW9sZXQgeyBiYWNrZ3JvdW5kOiByZ2JhKDEzOSw5MiwyNDYsMC4xNSk7IGNvbG9yOiB2YXIoLS12aW9sZXQpOyB9XG4ucXVpY2staWNvbi5lbWVyYWxkIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5xdWljay1pY29uLnJvc2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjE1KTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBST0xFIENISVBTIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLnJvbGUtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggOXB4OyBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5yb2xlLWFkbWluIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xMik7IGNvbG9yOiB2YXIoLS1yb3NlKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsNjMsOTQsMC4yKTsgfVxuLnJvbGUtbWFuYWdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjEyKTsgY29sb3I6IHZhcigtLWFtYmVyKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLDAuMik7IH1cbi5yb2xlLWVtcGxveWVlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMTIpOyBjb2xvcjogdmFyKC0taW5kaWdvKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMik7IH1cblxuLyogQ29sb3IgdXRpbGl0aWVzICovXG4udGV4dC1pbmRpZ28geyBjb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLnRleHQtZW1lcmFsZCB7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLnRleHQtYW1iZXIgeyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4udGV4dC1za3kgeyBjb2xvcjogdmFyKC0tc2t5KTsgfVxuLnRleHQtcm9zZSB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuXG4vKiDDosKVwpDDosKVwpDDosKVwpAgRklMVEVSUyBCQVIgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG4uZmlsdGVycy1iYXIge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwO1xufVxuLmZpbHRlci1zZWFyY2gtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleDogMTsgbWluLXdpZHRoOiAyMDBweDsgfVxuLmZpbHRlci1zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTJweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDE0cHg7XG59XG4uZmlsdGVyLXNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDlweDsgcGFkZGluZzogOHB4IDEycHggOHB4IDM2cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5maWx0ZXItc2VhcmNoOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4uZmlsdGVyLXNlYXJjaDo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbi5maWx0ZXItY2hpcHMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgZmxleC13cmFwOiB3cmFwOyB9XG4uZmlsdGVyLXNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4OyBwYWRkaW5nOiA3cHggMTJweDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTNweDsgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIFRBQkxFIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLnRhYmxlLWNhcmQgeyBwYWRkaW5nOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB9XG4uZGF0YS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG4uZGF0YS10YWJsZSB0aGVhZCB0ciB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XG4uZGF0YS10YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7IHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udGgtYWN0aW9ucyB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4udGFibGUtcm93IHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7IH1cbi50YWJsZS1yb3c6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wNCk7IH1cbi5kYXRhLXRhYmxlIHRkIHsgcGFkZGluZzogMTJweCAxNnB4OyB9XG5cbi51c2VyLWNlbGwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cbi51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IG1pbi13aWR0aDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7XG59XG4udXNlci1mdWxsbmFtZSB7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi51c2VyLXRlbCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxMXB4OyBtYXJnaW4tdG9wOiAycHg7IH1cbi50ZC1lbWFpbCB7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTNweDsgfVxuLnRkLWRhdGUgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTJweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnRkLWFjdGlvbnMgeyB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4ucm93LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBnYXA6IDZweDsgfVxuLnJvdy1idG4ge1xuICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNCk7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cbi5yb3ctYnRuLmVkaXQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjMpOyB9XG4ucm93LWJ0bi5rZXk6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNSk7IGNvbG9yOiB2YXIoLS1hbWJlcik7IGJvcmRlci1jb2xvcjogcmdiYSgyNDUsMTU4LDExLDAuMyk7IH1cbi5yb3ctYnRuLmRlbGV0ZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMTUpOyBjb2xvcjogdmFyKC0tcm9zZSk7IGJvcmRlci1jb2xvcjogcmdiYSgyNDQsNjMsOTQsMC4zKTsgfVxuXG4udGFibGUtZW1wdHkgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDQwcHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zaXplOiAxNHB4OyB9XG5cbi8qIFN0YXR1cyB0b2dnbGUgKi9cbi5zdGF0dXMtdG9nZ2xlLXdyYXAgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgfVxuLnN0YXR1cy10b2dnbGUge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMTYsMTM5LDAuMyk7XG4gIGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyOyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgcGFkZGluZzogMDtcbn1cbi5zdGF0dXMtdG9nZ2xlLm9uIHsgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZCk7IH1cbi5zdGF0dXMtdG9nZ2xlLXRodW1iIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDJweDsgbGVmdDogMnB4O1xuICB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zdGF0dXMtdG9nZ2xlLm9uIC5zdGF0dXMtdG9nZ2xlLXRodW1iIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpOyB9XG4uc3RhdHVzLWxhYmVsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cblxuLyogUGFnaW5hdGlvbiAqL1xuLnBhZ2luYXRpb24tYmFyIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogNnB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cbi5wYWdlLWJ0biB7XG4gIG1pbi13aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxM3B4OyBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLnBhZ2UtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMSk7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4ucGFnZS1idG4uYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvKTsgY29sb3I6ICNmZmY7IGJvcmRlci1jb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLnBhZ2UtYnRuOmRpc2FibGVkIHsgb3BhY2l0eTogMC4zOyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBST0xFUyAmIFBFUk1JU1NJT05TIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLnJvbGUtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucm9sZS10YWIge1xuICBwYWRkaW5nOiA5cHggMThweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLnJvbGUtdGFiOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDgpOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgfVxuLnJvbGUtdGFiLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMyk7IH1cblxuLnBlcm1pc3Npb25zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbn1cbi5wZXJtLWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4ucGVybS1jYXJkOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XG4ucGVybS1pbmZvIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cbi5wZXJtLWljb24td3JhcCB7IGZvbnQtc2l6ZTogMThweDsgbWluLXdpZHRoOiAyMHB4OyB9XG4ucGVybS1uYW1lIHsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuLnBlcm0tcm9sZS1ub3RlIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cblxuLyogVG9nZ2xlIHN3aXRjaCAqL1xuLnRvZ2dsZS1zd2l0Y2ggeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi50b2dnbGUtc3dpdGNoIGlucHV0IHsgZGlzcGxheTogbm9uZTsgfVxuLnRvZ2dsZS10cmFjayB7XG4gIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAwLDExNiwxMzksMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnRvZ2dsZS10cmFjayB7IGJhY2tncm91bmQ6IHZhcigtLWluZGlnbyk7IH1cbi50b2dnbGUtdGh1bWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogM3B4OyBsZWZ0OiAzcHg7XG4gIHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnRvZ2dsZS10cmFjayAudG9nZ2xlLXRodW1iIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9XG4udG9nZ2xlLXN3aXRjaC5kaXNhYmxlZCB7IG9wYWNpdHk6IDAuNDsgY3Vyc29yOiBub3QtYWxsb3dlZDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLyogUm9sZSBzdW1tYXJ5ICovXG4ucm9sZS1zdW1tYXJ5LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNjBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbn1cbi5yb2xlLXN1bW1hcnktY2FyZCB7IHBhZGRpbmc6IDIwcHg7IH1cbi5yb2xlLXN1bW1hcnktaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNHB4OyBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4ucm9sZS1zdW1tYXJ5LWljb24ge1xuICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnJvbGUtaWNvbi1hZG1pbiB7IGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMTUpOyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cbi5yb2xlLWljb24tbWFuYWdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjE1KTsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxuLnJvbGUtaWNvbi1lbXBsb3llZSB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5yb2xlLXN1bW1hcnktdGl0bGUgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogNzAwOyB9XG4ucm9sZS1zdW1tYXJ5LWNvdW50IHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDEycHg7IG1hcmdpbi10b3A6IDJweDsgfVxuLnJvbGUtcGVybS1jb3VudCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgZm9udC1zaXplOiAxMnB4OyB9XG4ucGVybS1hY3RpdmUgeyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5wZXJtLWJsb2NrZWQgeyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cbi5yb2xlLXByb2dyZXNzLWJhciB7IGhlaWdodDogNHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBib3JkZXItcmFkaXVzOiAycHg7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5yb2xlLXByb2dyZXNzLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSk7XG59XG4uZmlsbC1hZG1pbiB7IGJhY2tncm91bmQ6IHZhcigtLXJvc2UpOyB9XG4uZmlsbC1tYW5hZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpOyB9XG4uZmlsbC1lbXBsb3llZSB7IGJhY2tncm91bmQ6IHZhcigtLWluZGlnbyk7IH1cblxuLyogw6LClcKQw6LClcKQw6LClcKQIEFOQUxZVElDUyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5rcGktcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICBnYXA6IDE0cHg7XG59XG4ua3BpLWNhcmQge1xuICBwYWRkaW5nOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogNnB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5rcGktY2FyZDpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgfVxuLmtwaS1pY29uIHtcbiAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDsgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmtwaS1pY29uLmluZGlnbyB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgY29sb3I6IHZhcigtLWluZGlnbyk7IH1cbi5rcGktaWNvbi5lbWVyYWxkIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTUpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5rcGktaWNvbi5yb3NlIHsgYmFja2dyb3VuZDogcmdiYSgyNDQsNjMsOTQsMC4xNSk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuLmtwaS1pY29uLnNreSB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywwLjE1KTsgY29sb3I6IHZhcigtLXNreSk7IH1cbi5rcGktdmFsdWUgeyBmb250LXNpemU6IDI4cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBsaW5lLWhlaWdodDogMTsgfVxuLmtwaS1sYWJlbCB7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uY2hhcnRzLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xufVxuLmNoYXJ0LWNhcmQgeyBwYWRkaW5nOiAyMHB4OyB9XG4uY2hhcnQtdGl0bGUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBtYXJnaW4tYm90dG9tOiAyMHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi8qIERvbnV0IGNoYXJ0ICovXG4uZG9udXQtY2hhcnQtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbi5kb251dC1zdmcgeyB3aWR0aDogMTIwcHg7IGhlaWdodDogMTIwcHg7IH1cbi5kb251dC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZG9udXQtdG90YWwgeyBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyB9XG4uZG9udXQtbGFiZWwgeyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuLmNoYXJ0LWxlZ2VuZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogOHB4OyB9XG4ubGVnZW5kLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyB9XG4ubGVnZW5kLWl0ZW0gc3Ryb25nIHsgbWFyZ2luLWxlZnQ6IGF1dG87IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyB9XG4ubGVnZW5kLWRvdCB7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgbWluLXdpZHRoOiAxMHB4OyB9XG4uZG90LWFkbWluIHsgYmFja2dyb3VuZDogdmFyKC0tcm9zZSk7IH1cbi5kb3QtbWFuYWdlciB7IGJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTsgfVxuLmRvdC1lbXBsb3llZSB7IGJhY2tncm91bmQ6IHZhcigtLWluZGlnbyk7IH1cblxuLyogQmFyIGNoYXJ0ICovXG4uYmFyLWNoYXJ0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGdhcDogNnB4O1xuICBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nLWJvdHRvbTogMjBweDsgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhci1ncm91cCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXg6IDE7IGhlaWdodDogMTAwJTsgfVxuLmJhci1jb2wgeyBmbGV4OiAxOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IHdpZHRoOiAxMDAlOyB9XG4uYmFyLWZpbGwge1xuICB3aWR0aDogMTAwJTsgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIG1pbi1oZWlnaHQ6IDRweDsgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGN1YmljLWJlemllcigwLjE2LDEsMC4zLDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iYXItZmlsbC5pbmRpZ28geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB2YXIoLS1pbmRpZ28pLCByZ2JhKDk5LDEwMiwyNDEsMC41KSk7IH1cbi5iYXItdmFsdWUgeyBmb250LXNpemU6IDlweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tdG9wOiAycHg7IH1cbi5iYXItbGFiZWwgeyBmb250LXNpemU6IDlweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tdG9wOiA0cHg7IH1cbi5iYXItZW1wdHkgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTNweDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHBhZGRpbmc6IDIwcHggMDsgfVxuXG4vKiBTdGF0dXMgY2hhcnQgKi9cbi5zdGF0dXMtY2hhcnQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDIwcHg7IH1cbi5zdGF0dXMtcmluZy13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4ucmluZy1zZWdtZW50IHtcbiAgd2lkdGg6IDkwcHg7IGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudCh2YXIoLS1lbWVyYWxkKSBjYWxjKHZhcigtLXBjdCkgKiAzNjBkZWcpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpIDBkZWcpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdGF0dXMtc3RhdHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEwcHg7IGZsZXg6IDE7IH1cbi5zdGF0dXMtc3RhdCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG4uc3MtZG90IHsgd2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBtaW4td2lkdGg6IDEwcHg7IH1cbi5zcy1kb3QuYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZCk7IH1cbi5zcy1kb3QuaW5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlKTsgfVxuLnNzLWRvdC5hZG1pbiB7IGJhY2tncm91bmQ6IHZhcigtLWluZGlnbyk7IH1cbi5zcy1pbmZvIHt9XG4uc3MtdmFsdWUgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBsaW5lLWhlaWdodDogMTsgfVxuLnNzLWxhYmVsIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cblxuLyogU3lzdGVtIGhlYWx0aCAqL1xuLnN5c3RlbS1oZWFsdGgtY2FyZCB7IHBhZGRpbmc6IDIwcHg7IH1cbi5oZWFsdGgtYmFkZ2Uge1xuICBwYWRkaW5nOiA1cHggMTJweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWx0aC1iYWRnZS5vbmxpbmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xMik7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuLmhlYWx0aC1tb2R1bGVzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjQwcHgsIDFmcikpOyBnYXA6IDEwcHg7IG1hcmdpbi10b3A6IDRweDsgfVxuLmhlYWx0aC1tb2R1bGUge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhtLWljb24geyBmb250LXNpemU6IDE2cHg7IH1cbi5obS1pY29uLm9rIHsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4uaG0tbmFtZSB7IGZsZXg6IDE7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi5obS1sYXRlbmN5IHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cbi5obS1zdGF0dXMgeyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5obS1zdGF0dXMub25saW5lIHsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBBQ1RJVklUWSBGVUxMIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLmFjdGl2aXR5LWZ1bGwtY2FyZCB7IHBhZGRpbmc6IDA7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5hY3Rpdml0eS1mdWxsLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uYWN0aXZpdHktZnVsbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC4zcyBib3RoO1xufVxuLmFjdGl2aXR5LWZ1bGwtcm93OmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDQpOyB9XG4uYWZsLWluZGV4IHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDEycHg7IG1pbi13aWR0aDogMjhweDsgfVxuLmFmbC1hdmF0YXIge1xuICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBtaW4td2lkdGg6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZmZmO1xufVxuLmFmbC1pbmZvIHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG4uYWZsLW5hbWUgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB9XG4uYWZsLWVtYWlsIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4uYWZsLXRpbWUgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTJweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLmFmbC1zdGF0dXMgeyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uYWZsLXN0YXR1cy5hY3RpdmUgeyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IH1cbi5hZmwtc3RhdHVzLmluYWN0aXZlIHsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBTRVRUSU5HUyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5zZXR0aW5ncy1zYXZlZC1iYW5uZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkKTtcbiAgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc2V0dGluZ3Mtc2F2ZWQtYmFubmVyLnZpc2libGUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG5vbmU7IH1cbi5zZXR0aW5ncy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG4uc2V0dGluZ3Mtc2VjdGlvbiB7IHBhZGRpbmc6IDIycHg7IH1cbi5zZXR0aW5ncy1zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDE0cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2V0dGluZ3Mtc2VjdGlvbi1pY29uIHtcbiAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDsgbWluLXdpZHRoOiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnNldHRpbmdzLXNlY3Rpb24taWNvbi5pbmRpZ28geyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IGNvbG9yOiB2YXIoLS1pbmRpZ28pOyB9XG4uc2V0dGluZ3Mtc2VjdGlvbi1pY29uLnJvc2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NCw2Myw5NCwwLjE1KTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG4uc2V0dGluZ3Mtc2VjdGlvbi1pY29uLmFtYmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTUpOyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4uc2V0dGluZ3Mtc2VjdGlvbi1pY29uLnZpb2xldCB7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwwLjE1KTsgY29sb3I6IHZhcigtLXZpb2xldCk7IH1cbi5zZXR0aW5ncy1zZWN0aW9uLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IG1hcmdpbjogMCAwIDRweDsgfVxuLnNldHRpbmdzLXNlY3Rpb24taGVhZGVyIHAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luOiAwOyB9XG4uc2V0dGluZ3MtZmllbGRzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNHB4OyB9XG4uc2V0dGluZ3MtZmllbGQgbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbi5zZXR0aW5ncy1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDlweDsgcGFkZGluZzogOHB4IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBmb250LXNpemU6IDEzcHg7IG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5zZXR0aW5ncy1pbnB1dDpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0taW5kaWdvKTsgfVxuLnNldHRpbmdzLXRvZ2dsZS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMnB4O1xufVxuLnNldHRpbmdzLXRvZ2dsZS1pbmZvIHsgZmxleDogMTsgfVxuLnRvZ2dsZS10aXRsZSB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyB9XG4udG9nZ2xlLWRlc2MgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IG1hcmdpbi10b3A6IDJweDsgfVxuXG4vKiDDosKVwpDDosKVwpDDosKVwpAgTU9EQUxTIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA1MDA7XG4gIG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tb2RhbC1vdmVybGF5Lm9wZW4geyBvcGFjaXR5OiAxOyBwb2ludGVyLWV2ZW50czogYWxsOyB9XG5cbi5tb2RhbC1ib3gge1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiA1MjBweDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDYwcHggcmdiYSgwLDAsMCwwLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpIHRyYW5zbGF0ZVkoMTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb2RhbC1ib3gubW9kYWwtc20geyBtYXgtd2lkdGg6IDQwMHB4OyB9XG4ubW9kYWwtb3ZlcmxheS5vcGVuIC5tb2RhbC1ib3ggeyB0cmFuc2Zvcm06IG5vbmU7IH1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cbi5tb2RhbC1oZWFkZXIgaDMgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyBtYXJnaW46IDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbi5tb2RhbC1oZWFkZXIuZGFuZ2VyIGgzIHsgY29sb3I6IHZhcigtLXJvc2UpOyB9XG4ubW9kYWwtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7IHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cbi5tb2RhbC1jbG9zZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMSk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuXG4ubW9kYWwtYm9keSB7IHBhZGRpbmc6IDIwcHg7IH1cbi5tb2RhbC1maWVsZHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE0cHg7IH1cbi5tb2RhbC1maWVsZC1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMTJweDsgfVxuLm1vZGFsLWZpZWxkIGxhYmVsIHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDUwMDsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4ubW9kYWwtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCw0MSw1OSwwLjYpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7IHBhZGRpbmc6IDlweCAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTsgZm9udC1zaXplOiAxM3B4OyBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG4ubW9kYWwtaW5wdXQ6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWluZGlnbyk7IGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1pbmRpZ28tZ2xvdyk7IH1cblxuLmRlbGV0ZS1jb25maXJtLXRleHQgeyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IH1cbi5kZWxldGUtY29uZmlybS10ZXh0IHN0cm9uZyB7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpOyB9XG5cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGdhcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG4uYnRuLW1vZGFsLWNhbmNlbCB7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDQxLDU5LDAuNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDlweDsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1czsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG4uYnRuLW1vZGFsLWNhbmNlbDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMzAsNDEsNTksMC44KTsgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7IH1cbi5idG4tbW9kYWwtc2F2ZSB7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pbmRpZ28pLCB2YXIoLS1za3kpKTtcbiAgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5idG4tbW9kYWwtc2F2ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgYm94LXNoYWRvdzogMCA2cHggMjBweCB2YXIoLS1pbmRpZ28tZ2xvdyk7IH1cbi5idG4tbW9kYWwtc2F2ZTpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLmJ0bi1tb2RhbC1kZWxldGUge1xuICBwYWRkaW5nOiA5cHggMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcm9zZSksICNkYzI2MjYpO1xuICBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xufVxuLmJ0bi1tb2RhbC1kZWxldGU6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNDQsNjMsOTQsMC4zNSk7IH1cbi5idG4tbW9kYWwtZGVsZXRlOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbi5hbGVydC1lcnJvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LDYzLDk0LDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ0LDYzLDk0LDAuMjUpO1xuICBjb2xvcjogI2ZiNzE4NTsgYm9yZGVyLXJhZGl1czogOXB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7IGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zcGluLWljb24geyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7IH1cbkBrZXlmcmFtZXMgc3BpbiB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkCBSRVNQT05TSVZFIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAub3ZlcnZpZXctYm90dG9tIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLmNoYXJ0cy1yb3cgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFkbWluLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgbGVmdDogLTEwMCU7IHRvcDogMDsgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMjYwcHggIWltcG9ydGFudDsgbWluLXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKTtcbiAgICB6LWluZGV4OiAyMDA7XG4gIH1cbiAgLmFkbWluLXNpZGViYXIub3BlbiB7IGxlZnQ6IDA7IH1cbiAgLnNpZGViYXItb3ZlcmxheSB7IGRpc3BsYXk6IGJsb2NrOyBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuc2lkZWJhci1vdmVybGF5LnZpc2libGUgeyBwb2ludGVyLWV2ZW50czogYWxsOyB9XG4gIC5tb2JpbGUtbWVudS1idG4geyBkaXNwbGF5OiBmbGV4OyB9XG4gIC50b3BiYXItc2VhcmNoLXdyYXAgeyBtYXgtd2lkdGg6IDIwMHB4OyB9XG4gIC5zeXN0ZW0tc3RhdHVzIC5zdGF0dXMtdGV4dCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLmFkbWluLWNvbnRlbnQgeyBwYWRkaW5nOiAxNnB4OyB9XG4gIC5zdGF0cy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxuICAubW9kYWwtZmllbGQtcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLnNlYXJjaC1rYmQgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc3RhdHMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5hZG1pbi1jb250ZW50IHsgcGFkZGluZzogMTJweDsgfVxuICAucGFnZS1oZWFkZXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAuZmlsdGVycy1iYXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5rcGktcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3661:
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../guards/admin-auth.guard */ 6406);
/* harmony import */ var _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-auth/admin-auth.component */ 3627);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 6597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__.AdminAuthComponent
}, {
  path: 'dashboard',
  component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent,
  canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AdminAuthGuard]
}];
class AdminRoutingModule {
  static {
    this.ɵfac = function AdminRoutingModule_Factory(t) {
      return new (t || AdminRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6836:
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3661);
/* harmony import */ var _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-auth/admin-auth.component */ 3627);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 6597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);








class AdminModule {
  static {
    this.ɵfac = function AdminModule_Factory(t) {
      return new (t || AdminModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_1__.AdminAuthComponent, _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 6406:
/*!********************************************!*\
  !*** ./src/app/guards/admin-auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthGuard: () => (/* binding */ AdminAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin-auth.service */ 4858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AdminAuthGuard {
  constructor(adminAuth, router) {
    this.adminAuth = adminAuth;
    this.router = router;
  }
  canActivate() {
    if (this.adminAuth.isLoggedIn) return true;
    this.router.navigate(['/admin-login']);
    return false;
  }
  static {
    this.ɵfac = function AdminAuthGuard_Factory(t) {
      return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminAuthGuard,
      factory: AdminAuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4858:
/*!************************************************!*\
  !*** ./src/app/services/admin-auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthService: () => (/* binding */ AdminAuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class AdminAuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.currentAdminSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentAdmin$ = this.currentAdminSubject.asObservable();
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const stored = localStorage.getItem('adminUser');
      if (stored) this.currentAdminSubject.next(JSON.parse(stored));
    } catch (_) {}
  }
  get token() {
    return localStorage.getItem('adminToken');
  }
  get isLoggedIn() {
    return !!this.token && !!this.currentAdminSubject.value;
  }
  get currentAdmin() {
    return this.currentAdminSubject.value;
  }
  headers() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/users/login`, {
      email,
      password
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      if (res.success && res.data?.role === 'admin') {
        // token is at res.token, not res.data.token
        localStorage.setItem('adminToken', res.token);
        const userWithToken = {
          ...res.data,
          token: res.token
        };
        localStorage.setItem('adminUser', JSON.stringify(userWithToken));
        this.currentAdminSubject.next(userWithToken);
      }
    }));
  }
  logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    this.currentAdminSubject.next(null);
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/admin/stats`, {
      headers: this.headers()
    });
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}/admin/users`, {
      headers: this.headers()
    });
  }
  createUser(data) {
    return this.http.post(`${this.apiUrl}/admin/users`, data, {
      headers: this.headers()
    });
  }
  updateUser(id, data) {
    return this.http.put(`${this.apiUrl}/admin/users/${id}`, data, {
      headers: this.headers()
    });
  }
  toggleUser(id) {
    return this.http.patch(`${this.apiUrl}/admin/users/${id}/toggle`, {}, {
      headers: this.headers()
    });
  }
  resetPassword(id, newPassword) {
    return this.http.patch(`${this.apiUrl}/admin/users/${id}/reset-password`, {
      newPassword
    }, {
      headers: this.headers()
    });
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, {
      headers: this.headers()
    });
  }
  getActivity() {
    return this.http.get(`${this.apiUrl}/admin/activity`, {
      headers: this.headers()
    });
  }
  getRoleStats() {
    return this.http.get(`${this.apiUrl}/admin/role-stats`, {
      headers: this.headers()
    });
  }
  getGrowth() {
    return this.http.get(`${this.apiUrl}/admin/growth`, {
      headers: this.headers()
    });
  }
  getNotifications() {
    return this.http.get(`${this.apiUrl}/admin/notifications`, {
      headers: this.headers()
    });
  }
  getPermissions() {
    return this.http.get(`${this.apiUrl}/admin/permissions`, {
      headers: this.headers()
    });
  }
  savePermissions(permissions) {
    return this.http.post(`${this.apiUrl}/admin/permissions`, {
      permissions
    }, {
      headers: this.headers()
    });
  }
  getSettings() {
    return this.http.get(`${this.apiUrl}/admin/settings`, {
      headers: this.headers()
    });
  }
  saveSettings(settings) {
    return this.http.post(`${this.apiUrl}/admin/settings`, settings, {
      headers: this.headers()
    });
  }
  static {
    this.ɵfac = function AdminAuthService_Factory(t) {
      return new (t || AdminAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AdminAuthService,
      factory: AdminAuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_admin_module_ts.js.map