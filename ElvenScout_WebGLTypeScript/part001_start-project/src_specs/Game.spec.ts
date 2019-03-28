import { Game } from "../src_client/Game";

describe("GameTests", () =>
{
    it("Name_ThisPropertyMustReturnGameName", () =>
    {
        // Arrange
        let input = "Elven Scout";
        let game = new Game(input);
        let expectedGameName = input;

        // Act
        let actualGameName = game.Name;

        // Assert
        expect(actualGameName).toEqual(expectedGameName);
    });
});
