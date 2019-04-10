"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("../src_client/Game");
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
