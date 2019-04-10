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
