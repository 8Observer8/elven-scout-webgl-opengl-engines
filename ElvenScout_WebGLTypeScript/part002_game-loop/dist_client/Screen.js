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
