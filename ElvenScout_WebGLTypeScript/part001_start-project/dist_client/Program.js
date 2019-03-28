define(["require", "exports", "./Game"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var game = new Game_1.Game("Elven Scout");
            this.PrintDebugText("Game name: " + game.Name);
            var timesToSayHello = 5;
            this.PrintDebugText("Hello World " + timesToSayHello + " times :)");
        };
        Program.PrintDebugText = function (text) {
            var output = document.createElement("div");
            output.innerHTML = text;
            document.body.appendChild(output);
            // Add <br>
            var br = document.createElement("br");
            document.body.appendChild(br);
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map