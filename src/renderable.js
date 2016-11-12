define(['easel'], function(easel) {

    function Renderable() {
        this.Shape_constructor();
        this.graph = undefined;

    }

    easel.extend(Renderable, easel.Shape);
    easel.promote(Renderable, "Shape");

    var _p = Renderable.prototype;
    
    _p.setGraph = function(graph) {
        this.graph = graph;
    }

    return Renderable;
});
