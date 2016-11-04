
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
        'testlib/boot' : {
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


requirejs(['domReady!', 'testlib/boot', 'jquery', 'easel', 'testlib/imagediff'],
function(doc, jasmine, $, easel, imagediff) {
    requirejs(['spec/node_spec'], function() {
    console.log(new easel.Stage());
    console.log(imagediff);
        
        window.onload(); 

    });

});
