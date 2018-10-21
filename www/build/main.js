webpackJsonp([2],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientPage = /** @class */ (function () {
    function ClientPage(navCtrl, navParams, geolocation, http, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.http = http;
        this.formBuilder = formBuilder;
        this.SearchParameter = 0.1;
        this.geolocation.getCurrentPosition().then(function (resp) {
            //console.log('lat');
            //console.log('long');
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
            console.log("Lat" + _this.lat);
            console.log("Long" + _this.long);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    ClientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientPage');
    };
    ClientPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    ClientPage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map", { closePopupOnClick: false }).fitWorld();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'www.tphangout.com',
            maxZoom: 18
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 10
        }).on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude]).on('click', function () {
                alert("Your Location");
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
            /*var popup = leaflet.popup({
                closeButton: false,
                autoClose: false
              })
              .setLatLng([e.latitude,e.longitude])
              .setContent('<p>You</p>')
              .openOn(this.map);*/
        }).on('locationerror', function (err) {
            alert(err.message);
        });
    };
    ClientPage.prototype.SendLocation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            Latitude: this.lat,
            Longitude: this.long,
            SearchParameter: this.SearchParameter
            //Latitude:"125.32",
            //Longitude:"120.41",
            //SearchParameter:"10"
        };
        // console.log(JSON.stringify(body));
        this.http.post('http://localhost:8000/get_nearby_transports', JSON.stringify(body), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ClientPage.prototype, "mapContainer", void 0);
    ClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client',template:/*ion-inline-start:"/home/arpit/acads/cs252/assignment3/src/pages/client/client.html"*/'\n<ion-header>\n\n  <ion-navbar align-title="center">\n    <ion-title>You are Here</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <button (click)="SendLocation()"></button>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>\n'/*ion-inline-end:"/home/arpit/acads/cs252/assignment3/src/pages/client/client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], ClientPage);
    return ClientPage;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_client__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, geolocation, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.storage = storage;
        this.http = http;
        this.geolocation.getCurrentPosition().then(function (resp) {
            //console.log('lat');
            //console.log('long');
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openclient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__client_client__["a" /* ClientPage */]);
    };
    HomePage.prototype.update = function () {
        var _this = this;
        this.storage.get('mobile').then(function (val) {
            if (!val) {
                alert("You are not regisered yet");
            }
            else {
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var body = {
                    ID: parseInt(val),
                    Latitude: _this.lat,
                    Longitude: _this.long,
                };
                _this.http.post(' http://localhost:8000/update_transport_location', JSON.stringify(body), { headers: headers }).subscribe(function (data) {
                    console.log(data);
                });
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/arpit/acads/cs252/assignment3/src/pages/home/home.html"*/'\n<ion-header>\n\n  <ion-navbar align-title="center">\n    <ion-title>Find your Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<br>\n  <button (click)="openclient()">\n      <div class="grid-full">\n        <ion-row>\n            <ion-col>\n                <img src="../../assets/imgs/map.png"  style="width: 100%; height: 100%;">\n              </ion-col>\n          <ion-col>\n            <div class="center-text">\n              Click it.\n              </div>\n            \n          </ion-col>\n        </ion-row>\n      </div>\n    </button>\n    <br><br><br>\n\n  \n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/arpit/acads/cs252/assignment3/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/client/client.module": [
		680,
		1
	],
	"../pages/home/home.module": [
		681,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_client_client__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__httpservice_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_client_client__["a" /* ClientPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/client/client.module#ClientPageModule', name: 'ClientPage', segment: 'client', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_client_client__["a" /* ClientPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__httpservice_service__["a" /* HTTPService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/arpit/acads/cs252/assignment3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/arpit/acads/cs252/assignment3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTPService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HTTPService = /** @class */ (function () {
    function HTTPService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-type': 'application/json'
        });
    }
    HTTPService.prototype.sendGETRequest = function (url) {
        return this.http.get(url, this.headers)
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err);
        });
    };
    HTTPService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HTTPService);
    return HTTPService;
}());

//# sourceMappingURL=httpservice.service.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map