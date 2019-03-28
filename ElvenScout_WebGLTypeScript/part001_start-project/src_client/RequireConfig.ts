requirejs.config({
    baseUrl: "dist_client",
    paths: {
        "gl-matrix": "https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min"
    }
});
 
requirejs(["Program"], (Program) =>
{

});