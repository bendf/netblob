define(['src/graph', 'src/node', 'src/edge', 'src/peon'], function(Graph, Node, Edge, Peon) {

    describe('Graph', function() {
        
        describe('creation - singleton', function() {
           it('should throw an error when used as a constructor', function() {
                expect(function(){new Graph();}).toThrow();
           });
           it('should return the instance when instance() is called', function() {
               var instance = Graph.getInstance();
                expect(instance instanceof Graph).toBe(true);
           });

        });

        describe('registration', function() {
            var graph, node, peon, edge;
            beforeEach(function() {
                graph  = Graph.getInstance();
                node = new Node(), peon = new Peon(), edge = new Edge();

            });
            it('should store a reference to registered nodes/edges/peons', function() {
                graph.register(node,peon,edge);

                expect(graph.getPeons()).toContain(peon);
                expect(graph.getEdges()).toContain(edge);
                expect(graph.getNodes()).toContain(node);
            });

            it('should fail to register an unknown type', function() {
                var undef =undefined;
                var badType = {};
                expect(function() {graph.register(undef)}).toThrow();
                expect(function() {graph.register(badType)}).toThrow();
            });


            it('should fail to register anything more than once', function() {


            });

            it('should call the registered objects "setgraph" function', function() {


            });


        });

    });



});
