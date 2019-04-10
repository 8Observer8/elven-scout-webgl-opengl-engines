define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=Scene.js.map