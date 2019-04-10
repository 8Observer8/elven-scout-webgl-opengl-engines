import { Scene } from "../Scene";
import { Game } from "../Game";

export class Loading extends Scene
{
    private _nextScene = "menu";
    public get NextScene(): string
    {
        return this._nextScene;
    }
    public set NextScene(v: string)
    {
        this._nextScene = v;
    }

    public constructor(game: Game)
    {
        super(game);
    }

    public Render(time: number): void
    {
        this._game.Screen.Fill(0, 0, 0);
        super.Render(time);
    }
}