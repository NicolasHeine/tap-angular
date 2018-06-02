(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _components_me_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/me/me.component */ "./src/app/components/me/me.component.ts");
/* harmony import */ var _components_tap_tap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tap/tap.component */ "./src/app/components/tap/tap.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Importer le module






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_me_me_component__WEBPACK_IMPORTED_MODULE_7__["MeComponent"],
                _components_tap_tap_component__WEBPACK_IMPORTED_MODULE_8__["TapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["Routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_me_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/me/me.component */ "./src/app/components/me/me.component.ts");
/* harmony import */ var _components_tap_tap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tap/tap.component */ "./src/app/components/tap/tap.component.ts");

// Importer le composant à utiliser dans le route



// Création du tableau de routes
var appRoutes = [
    // Définition de la route principale
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'me',
        component: _components_me_me_component__WEBPACK_IMPORTED_MODULE_2__["MeComponent"]
    },
    {
        path: 'tap',
        component: _components_tap_tap_component__WEBPACK_IMPORTED_MODULE_3__["TapComponent"]
    }
];
// Exporter le Routing
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" Class=\"container\">\n  <div class=\"title_form\" (click)=\"show_form = 'login'\">Login</div>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitLogin()\" *ngIf=\"show_form === 'login'\">\n    <div class=\"form-group\">\n      <label for=\"email_login\">Email</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"userLogin.email\" name=\"email_login\" id=\"email_login\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password_login\">Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userLogin.password\" name=\"password_login\" id=\"password_login\" required>\n    </div>\n\n    <div class=\"submit\">\n      <button type=\"submit\" [disabled]=\"!loginForm.form.valid\">Connexion</button>\n    </div>\n  </form>\n</div>\n\n<div id=\"register\" Class=\"container\">\n  <div class=\"title_form\" (click)=\"show_form = 'register'\">Register</div>\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmitRegister()\" *ngIf=\"show_form === 'register'\">\n    <div class=\"subtitle_form\">About you</div>\n    <div class=\"form-group\">\n      <label for=\"first_name\">First name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userRegister.firstName\" name=\"first_name\" id=\"first_name\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last_name\">Last name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userRegister.lastName\" name=\"last_name\" id=\"last_name\" required>\n    </div>\n\n    <div class=\"subtitle_form\">Login informations</div>\n    <div class=\"form-group\">\n      <label for=\"email_register\">Email</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"userRegister.email\" name=\"email_register\" id=\"email_register\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userRegister.password\" name=\"password\" id=\"password\" required>\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"checkbox\" [(ngModel)]=\"cgv\" name=\"cgv\" id=\"cgv\" required>\n        <label for=\"cgv\">I accept the terms and conditions</label>\n    </div>\n\n    <div class=\"submit\">\n      <button type=\"submit\" [disabled]=\"!registerForm.form.valid\">Connexion</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mongodb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mongodb.service */ "./src/app/services/mongodb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(mongodbService, router) {
        this.mongodbService = mongodbService;
        this.router = router;
        this.userRegister = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.cgv = false;
        this.userLogin = {
            email: 'nicolas.heine11@gmail.com',
            password: 'password'
        };
        this.show_form = 'login';
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/me']);
        }
    };
    HomeComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.mongodbService.loginUser(this.userLogin).then(function (user) {
            if (!user['error']) {
                localStorage.setItem('token', user['token']);
                _this.router.navigate(['/me']);
            }
            else {
                // error
            }
        });
    };
    HomeComponent.prototype.onSubmitRegister = function () {
        var _this = this;
        this.mongodbService.registerUser(this.userRegister).then(function (user) {
            if (!user['error']) {
                _this.show_form = 'login';
            }
            else {
                console.log('error');
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_mongodb_service__WEBPACK_IMPORTED_MODULE_1__["MongodbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/me/me.component.html":
/*!*************************************************!*\
  !*** ./src/app/components/me/me.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  Bonjour {{ user.firstName }} {{ user.lastName }}\n  You have 10 seconds to tap, ready? steady? tap!\n  <a routerLink=\"/tap\">Scores</a>\n  <a (click)=\"logOut()\">Logout</a>\n</header>\n<main>\n  <button (click)=\"startGame()\">CLIQUE ICI</button>\n  <div class=\"state state-{{ count }}\">Timer</div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/me/me.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/me/me.component.ts ***!
  \***********************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mongodb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mongodb.service */ "./src/app/services/mongodb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeComponent = /** @class */ (function () {
    function MeComponent(mongodbService, router) {
        this.mongodbService = mongodbService;
        this.router = router;
        // Data
        this.score = 0;
        this.token = '';
        this.user = {
            _id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.start = false;
        this.finish = false;
        this.count = 0;
    }
    MeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        else {
            this.token = localStorage.getItem('token');
            this.mongodbService.getDataFromToken(this.token).then(function (data) {
                if (data['error']) {
                }
                else {
                    _this.user = data['user'];
                }
            });
        }
    };
    MeComponent.prototype.startGame = function () {
        if (!this.finish) {
            if (this.start) {
                this.score++;
            }
            else {
                var that_1 = this;
                this.start = true;
                this.score++;
                this.timer = setInterval(function () {
                    that_1.count++;
                    if (that_1.count === 10) {
                        that_1.finish = true;
                        clearInterval(that_1.timer);
                        that_1.sendScore();
                    }
                }, 1000);
            }
        }
    };
    MeComponent.prototype.sendScore = function () {
        var _this = this;
        this.mongodbService.saveTap(sessionStorage.getItem('token'), { id_user: this.user._id, score: this.score }).then(function (data) {
            if (!data['error']) {
                _this.router.navigate(['/tap']);
            }
        });
    };
    MeComponent.prototype.logOut = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    MeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-me',
            template: __webpack_require__(/*! ./me.component.html */ "./src/app/components/me/me.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_mongodb_service__WEBPACK_IMPORTED_MODULE_1__["MongodbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MeComponent);
    return MeComponent;
}());



/***/ }),

/***/ "./src/app/components/tap/tap.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/tap/tap.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  Score table\n  Here is the list of the scores\n  <a routerLink=\"/me\">Play</a>\n  <a (click)=\"logOut()\">Logout</a>\n</header>\n<main>\n  <ul class=\"scores\">\n    <li *ngFor=\"let score of scores\">\n      <span class=\"score\">{{ score.score }}pts</span> <span class=\"info\">{{ score.firstName}} {{ score.lastName }} / {{ score.time|date:'dd/MM/y - HH\\'h\\'mm\\'m\\'ss\\'s\\'' }}</span>\n    </li>\n  </ul>\n</main>\n"

/***/ }),

/***/ "./src/app/components/tap/tap.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tap/tap.component.ts ***!
  \*************************************************/
/*! exports provided: TapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TapComponent", function() { return TapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mongodb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mongodb.service */ "./src/app/services/mongodb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TapComponent = /** @class */ (function () {
    function TapComponent(mongodbService, router) {
        this.mongodbService = mongodbService;
        this.router = router;
    }
    TapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        else {
            this.token = localStorage.getItem('token');
            this.mongodbService.getScores(this.token).then(function (data) {
                if (data['error']) {
                }
                else {
                    _this.scores = data['scores'].reverse();
                }
            });
        }
    };
    TapComponent.prototype.logOut = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    TapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tap',
            template: __webpack_require__(/*! ./tap.component.html */ "./src/app/components/tap/tap.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_mongodb_service__WEBPACK_IMPORTED_MODULE_1__["MongodbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TapComponent);
    return TapComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  Under MIT Licence @2018 <a href=\"http://www.nicolasheine.fr\">Nicolas Heine</a>\n</footer>"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/services/mongodb.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/mongodb.service.ts ***!
  \*********************************************/
/*! exports provided: MongodbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongodbService", function() { return MongodbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MongodbService = /** @class */ (function () {
    function MongodbService() {
        this.registerUserUrl = 'http://localhost:8080/api/register';
        this.loginUserUrl = 'http://localhost:8080/api/login';
        this.getDataUrl = 'http://localhost:8080/api/getdata';
        this.saveTapUrl = 'http://localhost:8080/api/save';
        this.getScoresUrl = 'http://localhost:8080/api/getscores';
    }
    MongodbService.prototype.registerUser = function (user) {
        return fetch(this.registerUserUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(function (data) {
            return Promise.resolve(data);
        })
            .then(function (data) { return data.json(); })
            .catch(function (err) { return console.log(err); });
    };
    MongodbService.prototype.loginUser = function (user) {
        return fetch(this.loginUserUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(function (data) {
            return Promise.resolve(data);
        })
            .then(function (data) { return data.json(); })
            .catch(function (err) { return console.log(err); });
    };
    MongodbService.prototype.getDataFromToken = function (token) {
        return fetch(this.getDataUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
            .then(function (data) {
            return Promise.resolve(data);
        })
            .then(function (data) { return data.json(); })
            .catch(function (err) { return console.log(err); });
    };
    MongodbService.prototype.saveTap = function (token, content) {
        return fetch(this.saveTapUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(content)
        })
            .then(function (data) {
            return Promise.resolve(data);
        })
            .then(function (data) { return data.json(); })
            .catch(function (err) { return console.log(err); });
    };
    MongodbService.prototype.getScores = function (token) {
        return fetch(this.getScoresUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
            .then(function (data) {
            return Promise.resolve(data);
        })
            .then(function (data) { return data.json(); })
            .catch(function (err) { return console.log(err); });
    };
    MongodbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MongodbService);
    return MongodbService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\tap-angular\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map