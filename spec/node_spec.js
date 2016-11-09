define(['src/node', 'testlib/imagediff', 'easel'], function(Node, imagediff, easel) {

    beforeEach(function() {
        //Gonna need those matchers...
        jasmine.addMatchers(imagediff.jasmine);
    });



    describe('Node', function() {
        describe('Creation', function() {
            when('A node is created', function() {
                this.x = 50, this.y = 50, this.color = 'blue';
                this.node = new Node(this.x, this.y,this.color);
            }).then('it should store the right x,y and color', function() {
                expect(this.node.x).toBe(this.x);
                expect(this.node.y).toBe(this.y);
                expect(this.node.color).toBe(this.color);
            });
        
        });

        describe('Rendering', function() {
            beforeEach(function() {setupCanvas(100,100);});
            afterEach(tearDownCanvas);
            
            given('A test stage', function() {
                this.stage = new easel.Stage('test_canvas'); 

            }).and('A blue node mockup', function(done) {
                this.blue_node_mockup = new Image(); 
                this.blue_node_mockup.onload = done;
                this.blue_node_mockup.src = '/test/test_images/blueNode.png';
            });


            when('The blue node is drawn at 50,50', function() {
                this.stage.addChild(this.node);
                this.stage.update();
            }).then('the canvas should match the mockup', function() {
                expect(this.stage.canvas).toImageDiffEqual(this.blue_node_mockup);
            });
        
        });
        describe('Events', function() {
            describe('Incoming Collision', function() {
                describe('With friendly peon');
                describe('With enemy peon');
            });
            describe('LinkRequest');
            describe('UnlinkRequest');
            describe('DestroyRequest');
            describe('SpawnRequest');
            describe('TypeChangeRequest');
            
    
        });
        


    });

    describe('Node', function() {
            
        describe('Rendering', function() {
            beforeEach(function() {setupCanvas(100,100);});
            afterEach(tearDownCanvas);
            given('A test stage  and a blue node mockup', function(done) {
                this.stage = new easel.Stage('test_canvas');
                this.blue_node_mockup = new Image();
                this.blue_node_mockup.onload =done;
                this.blue_node_mockup.src = '/test/test_images/blueNode.png'
            });
            when('a blue node is drawn at 50,50', function() {
                var node = new Node(50,50, 'blue');
                this.stage.addChild(node);
                this.stage.update();

            }).then('it should match the blue node mockup', function() {
                expect(this.stage.canvas).toImageDiffEqual(this.blue_node_mockup);
            });

            
        });
        describe('Intersection with Peon', function() {
            given('A blue node and a red peon on a collision course', function() {
                this.stage = new Stage();
                this.blue_node = new Node(0,0, 'blue');
                this.red_peon = new Peon(100,100, 'red');
                this.red_peon.headTowards(this.blue_node);

            });

            when('the red peon intersects with the blue node', function() {
                this.red_peon.x = 0;
                this.red_peon.y = 0;
                this.stage.update();
            }).then('the blue node should become a red one', function() {
                expect(this.blue_node.color).toBe(red_peon.color);   
                
            });
            
        });
        describe('Events', function() {
            //Some outside thing happens to the node
            describe('Collision', function() {
                given('A node', function() {
                    this.node = new Node(0,0, 'red');
                });
                describe('with a friendly peon', function() {
                    given(' and a friendly peon', function() {
                        this.node = new Node(0,0, 'red');
                        this.peon = new Peon(0,0, 'red');
                        
                    });

                    when('They are determined to have collided? Who decides?', function() {
                        game.dispatchCollision(this.node,this.peon);

                    }).then('the peon should act according to the nodes wishes', function() {
                        
                        //Well, what ARE the nodes wishes? 

                    });

                });
                
            });

            describe('Spawn', function() {


            });

            describe('Destroy',function() {

            });

            describe('Change Type', function() {

            });

            describe('Link', function() {


            });

            describe('Unlink', function() {


            });
            
        });

    });
});
