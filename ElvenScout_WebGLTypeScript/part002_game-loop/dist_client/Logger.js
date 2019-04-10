define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=Logger.js.map