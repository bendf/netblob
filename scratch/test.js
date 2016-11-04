
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


function init() {

    //Resize canvas to fill screen

    var wWidth = $(window).width();
    var wHeight = $(window).height();
    $("#canvas").attr("width", wWidth).attr("height", wHeight);
}


define(' 

requirejs(["domReady!","underscore", "easel", "jquery"], function(doc,_, easel, $) {



    init();


    var stage = new easel.Stage("canvas"); 

    var circle_graphics = new easel.Graphics();
    circle_graphics.beginFill("red");
    var circleCommand = circle_graphics.command;

    var c1 = new easel.Shape(circle_graphics.clone());
    c1.graphics.drawCircle(0,0,50);
    var c2 = new easel.Shape(circle_graphics);
    c2.graphics.drawCircle(0,0,30);
    var c3 = new easel.Shape(circle_graphics);
    c1.x = c1.y = 50;
    c2.x = c2.y = 150;
    c3.x = c3.y = 250;

    stage.addChild(c1,c2,c3);
    stage.update();


    (function() {
        function Button(label) {
            this.Container_constructor();
            this.label = label;
        }

        var p = createjs.extend(Button, Container);

        p.draw = function () {
            this.Container_draw();
        }
    
        window.Button = createjs.promote(Button, "Container");
    })();


});



