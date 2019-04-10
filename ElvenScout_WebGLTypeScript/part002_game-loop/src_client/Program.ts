import { Game } from "./Game";
import { Logger } from "./Logger";

class Program
{
    public static Main(): void
    {
        let game = new Game("Elven Scout");
        game.Init();
        game.Run();
        Logger.Print(`Game name: ${game.Name}`);
    }
}
window.onload = () => Program.Main();