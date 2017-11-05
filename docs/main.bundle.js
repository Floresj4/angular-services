webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/active-users/active-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/active-users/active-users.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Active Users</h3>\r\n<ul class=\"list-group\"\r\n\t*ngIf=\"users.length != 0; else noUsers\">\r\n  <li\r\n    class=\"list-group-item\"\r\n    *ngFor=\"let user of users; let i = index\">\r\n    \t<span class='glyphicon glyphicon-user'></span>\r\n    \t\t{{ user }} \r\n    \t<a href=\"#\"\r\n    \t\t(click)=\"onSetToInactive(i)\"\r\n    \t\tclass='activity-toggle pull-right'>\r\n    \t\t<span class='label label-danger'>Set to Inactive</span>\r\n    \t</a>\r\n  </li>\r\n</ul>\r\n<ng-template #noUsers>\r\n\t<div class='panel panel-danger'>\r\n\t\t<div class='panel-heading'>No users</div>\r\n\t\t<div class='panel-body'>\r\n\t\t\t<p>There a no active users.</p>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/active-users/active-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActiveUsersComponent = (function () {
    function ActiveUsersComponent(userservice) {
        this.userservice = userservice;
    }
    ActiveUsersComponent.prototype.onSetToInactive = function (id) {
        this.userservice.setToInactive(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], ActiveUsersComponent.prototype, "users", void 0);
    ActiveUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-active-users',
            template: __webpack_require__("../../../../../src/app/active-users/active-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/active-users/active-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]])
    ], ActiveUsersComponent);
    return ActiveUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  \r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-md-6 col-md-offset-3\">\r\n\t\t\t<app-active-users\r\n\t\t\t\t[users]=\"activeUsers\"\r\n\t\t\t\t(userSetToInactive)=\"onSetToInactive($event)\">\r\n\t\t\t</app-active-users>\r\n\r\n\t\t\t<app-inactive-users\r\n\t\t\t\t[users]=\"inactiveUsers\"\r\n\t\t\t\t(userSetToActive)=\"onSetToActive($event)\">\r\n\t\t\t</app-inactive-users>\r\n\r\n\t\t\t<h3>Statistics</h3>\r\n\t\t\t<div class='list-group'>\r\n\t\t\t\t<p class='list-group-item'>Number of account transitions: {{ getTransitionCount() }}</p>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class='list-group'>\r\n\t\t\t\t<a class='list-group-item' href='https://floresj4.github.io/'>\r\n\t\t\t\t\t<span class='glyphicon glyphicon-home'></span> &nbsp; floresj4.github.io\r\n\t\t\t\t</a>\r\n\t\t\t\t<a class='list-group-item' href='https://github.com/Floresj4/angular-services'>\r\n\t\t\t\t\t<span class='glyphicon glyphicon-console'></span> &nbsp; https://github.com/Floresj4/angular-services\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_counter_service__ = __webpack_require__("../../../../../src/app/services/counter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userservice, counterService) {
        this.userservice = userservice;
        this.counterService = counterService;
        this.activeUsers = [];
        this.inactiveUsers = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.activeUsers = this.userservice.getActiveUsers();
        this.inactiveUsers = this.userservice.getInactiveUsers();
    };
    AppComponent.prototype.getTransitionCount = function () {
        return this.counterService.getTransitionCount();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__services_counter_service__["a" /* CounterService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__active_users_active_users_component__ = __webpack_require__("../../../../../src/app/active-users/active-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inactive_users_inactive_users_component__ = __webpack_require__("../../../../../src/app/inactive-users/inactive-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_counter_service__ = __webpack_require__("../../../../../src/app/services/counter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__active_users_active_users_component__["a" /* ActiveUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inactive_users_inactive_users_component__["a" /* InactiveUsersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_8__services_counter_service__["a" /* CounterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/inactive-users/inactive-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inactive-users/inactive-users.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Inactive Users</h3>\r\n<ul class=\"list-group\"\r\n\t*ngIf=\"users.length != 0; else noUsers\">\r\n  <li\r\n    class=\"list-group-item\"\r\n    *ngFor=\"let user of users; let i = index\">\r\n    \t<span class='glyphicon glyphicon-user'></span>\r\n    \t\t{{ user }} \r\n    \t<a href=\"#\"\r\n    \t\t(click)=\"onSetToActive(i)\"\r\n    \t\tclass='activity-toggle pull-right'>\r\n\t\t\t<span class='label label-success'>Set to Active</span>\r\n\t\t</a>\r\n  </li>\r\n</ul>\r\n<ng-template #noUsers>\r\n\t<div class='panel panel-danger'>\r\n\t\t<div class='panel-heading'>No users</div>\r\n\t\t<div class='panel-body'>\r\n\t\t\t<p>There a no inactive users.</p>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/inactive-users/inactive-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InactiveUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InactiveUsersComponent = (function () {
    function InactiveUsersComponent(userservice) {
        this.userservice = userservice;
    }
    InactiveUsersComponent.prototype.onSetToActive = function (id) {
        this.userservice.setToActive(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], InactiveUsersComponent.prototype, "users", void 0);
    InactiveUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-inactive-users',
            template: __webpack_require__("../../../../../src/app/inactive-users/inactive-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inactive-users/inactive-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]])
    ], InactiveUsersComponent);
    return InactiveUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/counter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterService; });
var CounterService = (function () {
    function CounterService() {
        this.transitionCount = 0;
    }
    CounterService.prototype.updateTransitionCount = function () {
        this.transitionCount++;
        console.log('updated transition count: ' + this.transitionCount);
    };
    CounterService.prototype.getTransitionCount = function () {
        return this.transitionCount;
    };
    return CounterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter_service__ = __webpack_require__("../../../../../src/app/services/counter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(counterService) {
        this.counterService = counterService;
        this.activeUsers = ['Max', 'Felicia'];
        this.inactiveUsers = ['Erica', 'Carl'];
    }
    UsersService.prototype.setToInactive = function (id) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.counterService.updateTransitionCount();
        this.activeUsers.splice(id, 1);
    };
    UsersService.prototype.setToActive = function (id) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.counterService.updateTransitionCount();
        this.inactiveUsers.splice(id, 1);
    };
    UsersService.prototype.getActiveUsers = function () {
        return this.activeUsers;
    };
    UsersService.prototype.getInactiveUsers = function () {
        return this.inactiveUsers;
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map