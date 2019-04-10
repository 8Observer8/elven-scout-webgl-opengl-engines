
export class Screen
{
    private _width: number;
    private _height: number;
    private _canvas: HTMLCanvasElement;

    private _gl: WebGLRenderingContext;
    public get GL(): WebGLRenderingContext
    {
        return this._gl;
    }

    public constructor(width: number, height: number)
    {
        this._width = width;
        this._height = height;
        this._canvas = this.CreateCanvas();
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._gl = this._canvas.getContext("webgl");
    }

    private CreateCanvas(): HTMLCanvasElement
    {
        let elements = document.getElementsByTagName("canvas");
        if (elements.length > 0)
        {
            return elements[0];
        }
        let canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        return canvas;
    }

    public Fill(red: number, green: number, blue: number)
    {
        this.GL.clearColor(red, green, blue, 1);
        this.GL.clear(this.GL.COLOR_BUFFER_BIT);
    }
}
