requirejs.config({
    baseUrl: "./dist_specs",
    paths: {
        "jasmine":
            "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min",
        // "jasmine-jquery" : 
        //     "./bower_components/jasmine-jquery/lib/jasmine-jquery",
        "jasmine-html":
            "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.min",
        "jasmine-boot":
            "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.min"
    },
    shim: {
        "jasmine": {
            exports: "window.jasmineRequire"
        },
        "jasmine-html": {
            deps: ["jasmine"],
            exports: "window.jasmineRequire"
        },
        'jasmine-boot': {
            deps: ["jasmine-html"],
            exports: "window.jasmineRequire"
        }
    }
});

var specs = [
    "src_specs/Game.spec"
];

require(["jasmine-boot"], (jasmineBoot) =>
{
    require(specs, () =>
    {
        (<any>window).onload();
    });
});