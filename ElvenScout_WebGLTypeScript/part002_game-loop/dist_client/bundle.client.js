(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen_1 = require("./Screen");
var Loading_1 = require("./Sceenes/Loading");
var Game = /** @class */ (function () {
    function Game(name) {
        this._scenes = { loading: null };
        this._name = name;
    }
    Object.defineProperty(Game.prototype, "Screen", {
        get: function () {
            return this._screen;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.Init = function () {
        this._screen = new Screen_1.Screen(256, 256);
        this._scenes.loading = new Loading_1.Loading(this);
        this._currentScene = this._scenes.loading;
        this._currentScene.Init();
    };
    Game.prototype.Frame = function (time) {
        var _this = this;
        if (this._currentScene.IsActive === false) {
            this._currentScene = this._scenes[this._currentScene.NextScene];
            this._currentScene.Init();
        }
        this._currentScene.Render(time);
        requestAnimationFrame(function (time) { return _this.Frame(time); });
    };
    Game.prototype.Run = function () {
        var _this = this;
        requestAnimationFrame(function (time) { return _this.Frame(time); });
    };
    Object.defineProperty(Game.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;

},{"./Sceenes/Loading":4,"./Screen":6}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.Print = function (text) {
        var output = document.createElement("div");
        output.innerHTML = text;
        document.body.appendChild(output);
        // Add <br>
        var br = document.createElement("br");
        document.body.appendChild(br);
    };
    return Logger;
}());
exports.Logger = Logger;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var Logger_1 = require("./Logger");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var game = new Game_1.Game("Elven Scout");
        game.Init();
        game.Run();
        Logger_1.Logger.Print("Game name: " + game.Name);
    };
    return Program;
}());
window.onload = function () { return Program.Main(); };

},{"./Game":1,"./Logger":2}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = require("../Scene");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading(game) {
        var _this = _super.call(this, game) || this;
        _this._nextScene = "menu";
        return _this;
    }
    Object.defineProperty(Loading.prototype, "NextScene", {
        get: function () {
            return this._nextScene;
        },
        set: function (v) {
            this._nextScene = v;
        },
        enumerable: true,
        configurable: true
    });
    Loading.prototype.Render = function (time) {
        this._game.Screen.Fill(0, 0, 0);
        _super.prototype.Render.call(this, time);
    };
    return Loading;
}(Scene_1.Scene));
exports.Loading = Loading;

},{"../Scene":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene = /** @class */ (function () {
    function Scene(game) {
        this._game = game;
    }
    Object.defineProperty(Scene.prototype, "IsActive", {
        get: function () {
            return this._isActive;
        },
        set: function (v) {
            this._isActive = v;
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.Init = function () {
        this.IsActive = true;
    };
    Scene.prototype.Render = function (time) {
    };
    return Scene;
}());
exports.Scene = Scene;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen(width, height) {
        this._width = width;
        this._height = height;
        this._canvas = this.CreateCanvas();
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._gl = this._canvas.getContext("webgl");
    }
    Object.defineProperty(Screen.prototype, "GL", {
        get: function () {
            return this._gl;
        },
        enumerable: true,
        configurable: true
    });
    Screen.prototype.CreateCanvas = function () {
        var elements = document.getElementsByTagName("canvas");
        if (elements.length > 0) {
            return elements[0];
        }
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        return canvas;
    };
    Screen.prototype.Fill = function (red, green, blue) {
        this.GL.clearColor(red, green, blue, 1);
        this.GL.clear(this.GL.COLOR_BUFFER_BIT);
    };
    return Screen;
}());
exports.Screen = Screen;

},{}]},{},[3]);
