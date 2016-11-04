define(['src/node', 'testlib/imagediff', 'easel'], function(Node, imagediff, easel) {

    beforeEach(function() {
        jasmine.addMatchers(imagediff.jasmine);
    });

    describe('Node', function() {

        var testImg;
        beforeEach(function(done) {
            $('#canvas_scratch').html("<canvas id='test_canvas'></canvas>");            

            testImg = new Image();
            testImg.onload = done;
            testImg.src='/test/test_images/blueNode.png';

        });

        afterEach(function() {
            $('#canvas_scratch').html("");            
        });

        it('should draw a circle', function() {

            var node = new Node(50,50, 'blue');
            var canvas = $('#test_canvas').attr("width", 100).attr("height", 100);
            var stage = new easel.Stage('test_canvas');
            stage.addChild(node);
            stage.update();
            expect(canvas.get(0)).toImageDiffEqual(testImg);

        });
        it('should spawn peons');
        it('should be converted by peons');
        it('should redirect friendly peons');


    });
});
