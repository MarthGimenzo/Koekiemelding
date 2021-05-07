(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jouke\PhpstormProjects\koekiemelding-jouke-de-vries\koekiemelding-jouke\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _hands_hands_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hands/hands.component */ "k06W");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/TextPlugin */ "M6Bw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_2__["TextPlugin"]);
class AppComponent {
    constructor() {
        this.title = 'koekiemelding-jouke';
    }
    // Angular functions
    ngOnInit() {
        this.handRandomizer();
        this.setHandStartPosition();
        this.preloadContent();
        this.initializeGame();
    }
    // Custom functions
    // Game logic
    preloadContent() {
        // Preload graphics and audio
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline().set('#preload-images', { attr: { src: '..\\assets\\left_hand_1.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\left_hand_2.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\left_hand_3.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\left_hand_hit.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\right_hand_1.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\right_hand_2.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\right_hand_3.png' } })
            .set('#preload-images', { attr: { src: '..\\assets\\right_hand_hit.png' } });
        this.audio = new Audio();
        this.audio.src = '..\\assets\\soundeffects\\ouch.wav';
        this.audio.load();
    }
    initializeGame() {
        // Game Intro
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set('#shine', { rotation: 0, scale: 1, opacity: 1, timescale: 0 });
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to('#shine', { duration: 6, rotation: 360, ease: 'none', repeat: -1 });
        this.child.gameOn = true;
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline().set('#left_button', { x: -300 })
            .set('#middle_button', { y: 300 })
            .set('#right_button', { x: 300 });
        this.intro = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
        this.intro.to('#yellow-rectangle', 0.2, { scaleY: 1, delay: 1, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power0"].easeOut })
            .from('#cookieplate', 0.6, { x: -1500, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Back"].easeOut })
            .set('#text', { text: { value: 'Laat je koekies niet afpakken!' }, opacity: 0 })
            .to('#text', { duration: 0.5, opacity: 1, yoyo: true, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power0"].easeNone, repeat: 4 })
            .to('#shine', 2, { opacity: 0 })
            .add(() => {
            gsap__WEBPACK_IMPORTED_MODULE_1__["default"].killTweensOf('#shine');
        })
            .set('#text', { delay: 0.4, text: { value: '3...' }, opacity: 1 })
            .set('#text', { delay: 0.8, text: { value: '2...' } })
            .set('#text', { delay: 0.8, text: { value: '1...' } })
            .set('#text', { delay: 0.8, text: { value: 'START' }, opacity: 1 })
            .add(gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({ repeat: 2 })
            .set('#text', { delay: 0.2, opacity: 0 })
            .set('#text', { delay: 0.2, opacity: 1 }))
            .set('#text', { delay: 0.2, opacity: 0 })
            .add(() => this.child.animateHand());
    }
    handRandomizer() {
        this.randomNumber = Math.floor(Math.random() * 2);
        this.child.side = (this.randomNumber === 0) ? 'left' : 'right';
    }
    setHandStartPosition() {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline().set('#hands', {
            attr: { src: '..\\assets\\' + this.child.side + '_hand_1.png' },
            x: this.child.side === 'left' ? -1000 : 900
        });
    }
    resetGame() {
        this.reset = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
        this.reset.set('#yellow-rectangle', {
            backgroundColor: 'powderblue',
            overwrite: true
        }).set('#text', { text: { value: ' ' } });
        this.intro.kill();
        this.child.gameOn = true;
        this.child.hitCount = 0;
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set('#shine', { repeatRefresh: true, clearProps: 'all' });
        this.handRandomizer();
        this.setHandStartPosition();
        this.initializeGame();
    }
    gameOver() {
        // Lost:
        this.playGameOver();
        this.child.gameOn = false;
        this.lost = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
        this.lost.set('#text', { delay: 0.8, text: { value: 'Verloren...' }, opacity: 1 });
        this.lost.set('#yellow-rectangle', { backgroundColor: 'maroon', overwrite: true })
            .add(() => this.displayButtons());
    }
    gameWon() {
        // Won:
        this.playWon();
        this.child.gameOn = false;
        this.won = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
        this.won.set('#text', { delay: 0.8, text: { value: 'Won!!' }, opacity: 1 });
        this.won.to('#shine', 1, { scale: 1, opacity: 1 });
        this.won.set('#yellow-rectangle', { backgroundColor: 'powderblue', overwrite: true })
            .add(() => this.playYay())
            .add(() => this.displayButtons());
    }
    displayButtons() {
        // Display buttons:
        this.ending = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
        this.ending.to('#left_button', 0.4, { x: 0, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Back"].easeOut });
        this.ending.to('#middle_button', 0.4, { y: 0, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Back"].easeOut }, '-=0.4');
        this.ending.to('#right_button', 0.4, { x: 0, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Back"].easeOut }, '-=0.4');
    }
    // Sound effects
    playWon() {
        this.audio = new Audio();
        this.audio.src = '..\\assets\\soundeffects\\win.wav';
        this.audio.load();
        this.audio.play();
    }
    playYay() {
        this.audio = new Audio();
        this.audio.src = '..\\assets\\soundeffects\\yay.wav';
        this.audio.load();
        this.audio.play();
    }
    playGameOver() {
        this.audio = new Audio();
        this.audio.src = '..\\assets\\soundeffects\\game-over.wav';
        this.audio.load();
        this.audio.play();
    }
    // Cookie placement
    placeCookie() {
        document.cookie = 'A cookie has been implemented';
        window.location.href = 'http://www.klarekoek.nl';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_hands_hands_component__WEBPACK_IMPORTED_MODULE_0__["HandsComponent"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
    } }, decls: 14, vars: 0, consts: [["id", "preload-images"], ["id", "yellow-rectangle", 1, "yellow-rectangle"], ["alt", "Koekiebord", "id", "cookieplate", "src", "..\\assets\\koekie_plate_small.png", 1, "pixelgraphics"], ["alt", "Shine", "id", "shine", "src", "..\\assets\\shine.png", 1, "pixelgraphics"], [3, "lost", "randomHand", "resetHandPosition", "win"], ["id", "text"], [1, "buttons"], ["id", "left_button", 3, "click"], ["id", "middle_button", "onclick", "window.location.href='http://www.klarekoek.nl'"], ["id", "right_button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-hands", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("lost", function AppComponent_Template_app_hands_lost_4_listener() { return ctx.gameOver(); })("randomHand", function AppComponent_Template_app_hands_randomHand_4_listener() { return ctx.handRandomizer(); })("resetHandPosition", function AppComponent_Template_app_hands_resetHandPosition_4_listener() { return ctx.setHandStartPosition(); })("win", function AppComponent_Template_app_hands_win_4_listener() { return ctx.gameWon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Laat je koekies niet afpakken!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.placeCookie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Accepteer Koekies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Koekloos Verder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.resetGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nog Eens Proberen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_hands_hands_component__WEBPACK_IMPORTED_MODULE_0__["HandsComponent"]], styles: ["@font-face {\n  font-family: KarmaticArcade;\n  src: url(\"/assets/fonts/ka1.ttf\");\n}\nh1[_ngcontent-%COMP%] {\n  font-family: KarmaticArcade;\n  position: absolute;\n  text-align: center;\n  top: 65%;\n  font-size: x-large;\n}\n#preload-images[_ngcontent-%COMP%] {\n  display: none;\n}\n#text[_ngcontent-%COMP%] {\n  opacity: 0%;\n}\n.yellow-rectangle[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n  background-color: #B0E0E6FF;\n  height: 400px;\n  width: 100%;\n  margin-top: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: -4px;\n  padding-right: -4px;\n  border-radius: 10px;\n  max-width: 850px;\n  z-index: 100;\n  transform: scaleY(0);\n}\n#cookieplate[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 85%;\n  z-index: 100;\n}\n#shine[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 110%;\n  z-index: -90;\n  filter: blur(5px);\n}\n.buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-top: 300px;\n  justify-content: space-around;\n}\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #000000FF;\n  font-family: KarmaticArcade;\n  color: #FFFFFFFF;\n  padding: 8px;\n  justify-content: space-around;\n  max-width: 106px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #FFFFFFFF;\n  color: #000000FF;\n  border: 2px solid #000000FF;\n  cursor: pointer;\n}\n@media screen and (min-width: 600px) {\n  button[_ngcontent-%COMP%] {\n    font-size: large;\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQSxXQUFBO0FER0E7RUFDRSwyQkFBQTtFQUNBLGlDQUFBO0FBQUY7QUFHQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQzNCWTtFRDRCWixhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJDOURNO0VEK0ROLDJCQUFBO0VBQ0EsZ0JDL0RNO0VEZ0VOLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLDJCQ3JFSTtFRHNFSixnQkN2RUk7RUR3RUosMkJBQUE7RUFDQSxlQUFBO0FBREo7QUFLQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEthcm1hdGljQXJjYWRlO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2thMS50dGYnKTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBLYXJtYXRpY0FyY2FkZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogNjUlO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuI3ByZWxvYWQtaW1hZ2VzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdGV4dCB7XHJcbiAgb3BhY2l0eTogMCU7XHJcbn1cclxuXHJcbi55ZWxsb3ctcmVjdGFuZ2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbGJsdWU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiAtNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IC00cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxufVxyXG5cclxuI2Nvb2tpZXBsYXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbiNzaGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMTAlO1xyXG4gIHotaW5kZXg6IC05MDtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IEthcm1hdGljQXJjYWRlO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1heC13aWR0aDogMTA2cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIvKiBDb2xvcnMgKi9cclxuXHJcbiRuZXV0cmFsYmx1ZTogI0IwRTBFNkZGO1xyXG4kYmxhY2s6ICMwMDAwMDBGRjtcclxuJHdoaXRlOiAjRkZGRkZGRkY7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _hands_hands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hands/hands.component */ "k06W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _hands_hands_component__WEBPACK_IMPORTED_MODULE_3__["HandsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "k06W":
/*!******************************************!*\
  !*** ./src/app/hands/hands.component.ts ***!
  \******************************************/
/*! exports provided: HandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandsComponent", function() { return HandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");



class HandsComponent {
    constructor() {
        this.handTimeline = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({ overwrite: true });
        this.handHit = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({ overwrite: true });
        this.handDelay = 0;
        this.hitCount = 0;
        this.lost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.win = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randomHand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetHandPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // Hand grabbing animation
    animateHand() {
        if (this.gameOn) {
            this.handTimeline = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
            this.handDelay = Math.floor(Math.random() * 5) + 1;
            this.handTimeline.add(() => this.resetHandPosition.emit(true))
                .to('#hands', { duration: 0.5, delay: this.handDelay, x: this.side === 'left' ? -110 : 0, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power0"].easeOut })
                .set('#hands', { delay: 0.08, attr: { src: '..\\assets\\' + this.side + '_hand_2.png' } })
                .set('#hands', { delay: 0.08, attr: { src: '..\\assets\\' + this.side + '_hand_3.png' } })
                .add(() => this.lost.emit(true));
        }
    }
    // Player hits hand
    playHit() {
        this.audio = new Audio();
        this.audio.src = '..\\assets\\soundeffects\\ouch.wav';
        this.audio.load();
        this.audio.play();
    }
    click() {
        if (this.gameOn) {
            this.playHit();
            this.handHit.set('#hands', { attr: { src: '..\\assets\\' + this.side + '_hand_hit.png' }, overwrite: true })
                .add(this.handTimeline.kill())
                .to('#hands', { duration: 0.3, x: this.side === 'left' ? -1000 : 900, ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power0"].easeOut })
                .add(() => this.randomHand.emit(true))
                .add(() => this.resetHandPosition.emit(true))
                .add(() => this.animateHand());
            this.hitCount += 1;
            if (this.hitCount === 3) {
                this.win.emit(true);
            }
        }
    }
}
HandsComponent.ɵfac = function HandsComponent_Factory(t) { return new (t || HandsComponent)(); };
HandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandsComponent, selectors: [["app-hands"]], inputs: { side: "side", gameOn: "gameOn", hitCount: "hitCount" }, outputs: { lost: "lost", win: "win", randomHand: "randomHand", resetHandPosition: "resetHandPosition" }, decls: 1, vars: 1, consts: [["alt", "Hands", "id", "hands", 1, "pixelgraphics", "hands", 3, "src", "click"]], template: function HandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HandsComponent_Template_img_click_0_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../assets/", ctx.side, "_hand_1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".hands[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 180px;\n  width: 115%;\n  z-index: 210;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhhbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiaGFuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE4MHB4O1xyXG4gIHdpZHRoOiAxMTUlO1xyXG4gIHotaW5kZXg6IDIxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map