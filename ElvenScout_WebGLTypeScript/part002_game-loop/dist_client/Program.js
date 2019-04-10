define(["require", "exports", "./Game", "./Logger"], function (require, exports, Game_1, Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=Program.js.map