define(["require", "exports", "../src_client/Game"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("GameTests", function () {
        it("Name_ThisPropertyMustReturnGameName", function () {
            // Arrange
            var input = "Elven Scout";
            var game = new Game_1.Game(input);
            var expectedGameName = input;
            // Act
            var actualGameName = game.Name;
            // Assert
            expect(actualGameName).toEqual(expectedGameName);
        });
    });
});
//# sourceMappingURL=Game.spec.js.map