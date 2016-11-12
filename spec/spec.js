define(['src/node', 'testlib/imagediff', 'easel'], function(Node, imagediff, easel) {

    beforeEach(function() {
        //Gonna need those matchers...
        jasmine.addMatchers(imagediff.jasmine);
    });

function MockEdge(nodeA,nodeB) {
    this.nodeA = nodeA;
    this.nodeB = nodeB;
    this.attachedPeons = []

    this.graph = undefined;
}

MockEdge.prototype.setGraph = function(graph) {
   this.graph = graph; 
}
     
function MockGraph() {
    this.nodes = [];
    this.edges = [];
}

MockGraph.prototype.attachedEdges = function(node) {
    var attached = [];
    _.each(this.edges, function(edge) {
       if(edge.nodeA == node || edge.nodeB == node) {
            attached.push(edge);
       }
    });
    return attached;

}

MockGraph.prototype.register = function(obj) {
    obj.setGraph(this);
    if(obj instanceof Node) {
            this.nodes.push(obj);
    } else if(obj instanceof Edge) {
            this.edges.push(obj);
            this.attachEdge(obj,obj.nodeA);
            this.attachEdge(obj,obj.nodeB);
    };

}

MockGraph.prototype.attachEdge = function(edge, node) {
    if(node) {
        var attachments = this.attachedEdges[node];
        if(!attachments) {
            attachments = [];
        }
        attachments.push(edge);
    }


}

MockGraph.instance = function() {
    if(!MockGraph.singleton) {
        MockGraph.singleton = new MockGraph();
    }
    return MockGraph.singleton;
}

Graph = MockGraph;
Edge = MockEdge;

game = {};
game.dispatchSpawn = function(node) {
    node.spawnPeons();
}





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

                given('A blue node', function() {
                    this.node = new Node(0,0, 'blue');
                });
                describe('With friendly peon', function() {
                    given('A blue peon', function() {
                        this.peon = new Peon(0,0, 'red');
                    });
                    when('the system decides they have intersected', function() {
                        game.dispatchCollision(this.node,this.peon);
                    }).then('the node should not change?', function() {
                        //But the peon should start moving down another lane?
                    });

                });
                describe('With enemy peon', function() {
                    given('A red peon', function() {
                        this.peon = new Peon(0,0, 'blue');
                    });
                    when('the system decies they have intersected', function() {
                        game.dispatchCollision(this.node,this.peon);
                    }).then('the node should change color to match the Peon', function() {
                        expect(node.color).toBe(peon.color);

                    });
                });
            });
            describe('Linking and unlinking', function() {
                given('Two nodes', function() {
                    this.nodeA = new Node(0,0, 'blue');
                    this.nodeB = new Node(100,0, 'red');
                });
                describe('LinkRequest', function() {
                    when('the system sends off a LinkRequest to them', function() {
                        game.dispatchLink(this.nodeA, this.nodeB);
                    }).then('the nodes should both have the same new attached edge', function() {
                        expect(this.nodeA.latestEdge()).toBe(this.nodeB.latestEdge());
                    });

                });
                describe('UnlinkRequest', function() {
                    given('With an edge between them', function() {
                        //replace with game.dispatchLink?
                        this.edge = new Edge(this.nodeA, this.nodeB);
                        this.nodeA.addEdge(edge);
                        this.nodeB.addEdge(edge);
                    });

                    when('the system sends off an UnlinkRequest to them' ,function() {
                        game.dispatchUnlink(this.nodeA, this.nodeB);
                    }).then('neither node should have an edge linking them attached', function() {
                        expect(this.nodeA.attachedEdges).notToContain(this.edge);
                        expect(this.nodeB.attachedEdges).notToContain(this.edge);
                    });
                
                });
            });
            describe('DestroyRequest', function() {
                given('A node', function() {
                    this.node = new Node(0,0, 'blue');
                });
                when('The system sends off a DestroyRequest to it', function() {
                    game.dispatchDestroy(this.node);
                }).then('the node should be destroyed', function() {
                    expect(this.node.isAlive()).toBe(true);
                });

            });
            describe('SpawnRequest', function() {
                given('A node with an attached Edge', function() {
                    this.node = new Node(0,0, 'blue');
                    Graph.instance().register(this.node);
                    this.edge = new Edge(this.node, undefined);
                    Graph.instance().register(this.edge);
                });

                when('The system sends out a SpawnRequest to the node', function() {
                    console.log(this.node);
                    game.dispatchSpawn(this.node);
                }).then('the edge should contain a new Peon of the node\'s color', function() {
                    expect(this.edge.attachedPeons).toBeNonEmptyArray();
                    expect(this.edge.attachedPeons[0].color).toBe(this.node.color);
                });
            
            });
            describe('TypeChangeRequest', function() {
                given('A node of normal type', function() {
                    this.node = new Node(0,0, 'blue');
                });
                when('The system sends a TypeChangeRequest : Hypertype to it ', function() {
                    game.dispatchTypeChange(this.node, 'HyperType');
                }).then('the node should now be of type Hypertype', function() {
                    expect(this.node).toHaveType('HyperType'); 
                }); 
            
            });

        });

    });

});
