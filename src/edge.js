
define(['easel', 'src/renderable'], function(easel, Renderable) {

    function Edge(nodeA, nodeB) {
        this.Renderable_constructor();
        this.a = nodeA;
        this.b = nodeB;
    }


    easel.extend(Edge, Renderable);
    easel.promote(Edge, 'Renderable');


    return Edge;


});
