import { Game } from "./Game";

export abstract class Scene
{
    protected _game: Game;

    private _isActive: boolean;
    public NextScene: any;
    public get IsActive(): boolean
    {
        return this._isActive;
    }
    public set IsActive(v: boolean)
    {
        this._isActive = v;
    }

    public constructor(game: Game)
    {
        this._game = game;
    }

    public Init(): void
    {
        this.IsActive = true;
    }

    public Render(time: number): void
    {

    }
}