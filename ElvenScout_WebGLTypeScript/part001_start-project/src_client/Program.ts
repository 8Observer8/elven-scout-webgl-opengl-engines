import { Game } from "./Game";

class Program
{
    public static Main(): void
    {
        let game = new Game("Elven Scout");
        this.PrintDebugText(`Game name: ${game.Name}`);

        let timesToSayHello = 5;
        this.PrintDebugText(`Hello World ${timesToSayHello} times :)`);
    }

    private static PrintDebugText(text: string)
    {
        let output = document.createElement("div");
        output.innerHTML = text;
        document.body.appendChild(output);
        // Add <br>
        let br = document.createElement("br");
        document.body.appendChild(br);
    }
}
Program.Main();