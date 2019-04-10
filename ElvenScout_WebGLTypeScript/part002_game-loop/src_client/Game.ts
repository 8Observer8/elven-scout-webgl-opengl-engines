import { Screen } from "./Screen";
import { Loading } from "./Sceenes/Loading";
import { Scene } from "./Scene";

export class Game
{
    private _scenes: { loading: Loading } = { loading: null };
    private _currentScene: Scene;

    private _screen: Screen;
    public get Screen(): Screen
    {
        return this._screen;
    }

    public constructor(name: string)
    {
        this._name = name;
    }

    public Init(): void
    {
        this._screen = new Screen(256, 256);
        this._scenes.loading = new Loading(this);
        this._currentScene = this._scenes.loading;
        this._currentScene.Init();
    }

    private Frame(time: number): void
    {
        if (this._currentScene.IsActive === false)
        {
            this._currentScene = this._scenes[this._currentScene.NextScene];
            this._currentScene.Init();
        }
        this._currentScene.Render(time);
        requestAnimationFrame(time => this.Frame(time));
    }

    public Run()
    {
        requestAnimationFrame(time => this.Frame(time));
    }

    private _name: string;

    public get Name(): string
    {
        return this._name;
    }
    public set Name(v: string)
    {
        this._name = v;
    }
}