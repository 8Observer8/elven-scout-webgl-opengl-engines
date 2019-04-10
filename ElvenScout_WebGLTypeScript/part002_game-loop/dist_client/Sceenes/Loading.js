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
