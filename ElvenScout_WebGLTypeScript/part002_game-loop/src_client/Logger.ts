
export class Logger
{
    public static Print(text: string): void
    {
        let output = document.createElement("div");
        output.innerHTML = text;
        document.body.appendChild(output);
        // Add <br>
        let br = document.createElement("br");
        document.body.appendChild(br);
    }
}