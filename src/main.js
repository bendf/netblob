
requirejs.config({
    baseUrl : '../lib/',
    paths : {},
    shim: {
        'easel' : {
            exports : 'createjs'
        },
        'underscore' : {
            exports : '_'
        }

    }

});


function maximiseCanvas() {

    //Resize canvas to fill screen
    var wWidth = $(window).width();
    var wHeight = $(window).height();
    $("#canvas").attr("width", wWidth).attr("height", wHeight);
}

requirejs(["domReady!","underscore", "easel", "jquery"], function(doc,_, easel, $) {

    maximiseCanvas();

});



