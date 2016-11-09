
requirejs.config({
    baseUrl : '/lib/',
    paths : {
        'testlib':['../test/lib'],
        'spec': ['../spec'],
        'src' : ['../src']
    },
    shim: {
        'easel' : {
            exports : 'createjs'
        }, 
        'underscore' : {
            exports : '_'
        },
        'testlib/custom_boot' : {
            exports: 'jasmine',
            deps: ['testlib/jasmine', 'testlib/jasmine-html']
        },
        'testlib/jasmine-html' : {
            deps: ['testlib/jasmine']
        }/*,
        'testlib/imagediff' : {
            exports: 'imagediff' 
        }
        */

    }

});

window.setupCanvas = function(width, height) {
    var test_canvas = document.createElement('canvas');
    test_canvas.setAttribute('id', 'test_canvas');
    test_canvas.setAttribute('width', width.toString());
    test_canvas.setAttribute('height', height.toString());
    document.body.appendChild(test_canvas);
}
window.tearDownCanvas = function() {
    var test_canvas = document.getElementById('test_canvas');
   document.body.removeChild(test_canvas); 

}

requirejs(['domReady!', 'testlib/custom_boot', 'jquery', 'easel', 'testlib/imagediff'],
function(doc, jasmine, $, easel, imagediff) {
    requirejs(['spec/node_spec', 'spec/scratch_spec'], function() {
        window.onload(); 

    });

});
