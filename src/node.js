define(['easel', 'src/peon', 'underscore', 'src/renderable'],function(easel, Peon, _, Renderable) {
    function Node(x,y,color) {
        this.Renderable_constructor();
        this.x = x;
        this.y = y;
        this.color = color;

        this.graphics.beginFill(color).drawCircle(0,0,50);

        this.graph = undefined;
    }
    easel.extend(Node, Renderable);
    easel.promote(Node, "Renderable");

    var _p = Node.prototype;

    _p.spawnPeons = function() {
        _.each(this.attachedEdges(), _p.spawn, this);
    }
    _p.attachedEdges = function() {
        return this.graph.attachedEdges(this);;
    }

    _p.spawn = function(edge) {
        console.log("spawning peon along edge", edge);
        var peon = new Peon(this, edge);
        edge.attachedPeons.push(peon);
    }

    return Node;
});
