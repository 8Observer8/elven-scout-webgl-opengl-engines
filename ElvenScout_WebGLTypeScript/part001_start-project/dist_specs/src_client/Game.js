define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(name) {
            this._name = name;
        }
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
});
//# sourceMappingURL=Game.js.map