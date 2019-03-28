
export class Game
{
    private _name: string;

    public get Name(): string
    {
        return this._name;
    }
    public set Name(v: string)
    {
        this._name = v;
    }

    public constructor(name: string)
    {
        this._name = name;
    }
}