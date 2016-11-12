define(['src/node', 'src/edge', 'src/peon'],function(Node,Edge,Peon) {

    function Graph() {
        if(Graph.instance) {
            throw new Error("Can't construct arbitrary graphs. Use getInstance() \
            to return the singleton instead.");
        }

        this.edges = [];
        this.nodes = [];
        this.peons = [];

    }

    Graph.getInstance = function() {
        if(!Graph.instance) {
            Graph.instance = new Graph();
        }
        return Graph.instance;
    }

    Graph.getInstance();


    var _p = Graph.prototype;

    _p.getPeons = function() {return this.peons;}
    _p.getEdges = function() {return this.edges;}
    _p.getNodes = function() {return this.nodes;}


    _p.register = function() {
        for(var i =0; i < arguments.length; i++) {
            var obj = arguments[i];
            if(obj === undefined) {
                throw new Error("Can't register undefined object with graph");
            }
            if(!(obj instanceof Node || obj instanceof Edge || obj instanceof Peon)) {
                throw new Error("Can only register Node,Edge and Peon types");
            }
            obj.setGraph(this);

            if(obj instanceof Node) {
                this.nodes.push(obj);

            } else if(obj instanceof Edge) {
                this.edges.push(obj);

            } else if(obj instanceof Peon) {
                this.peons.push(obj);
            }
        }

    }


    return Graph;

});
