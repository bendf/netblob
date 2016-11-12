define(['src/renderable', 'easel'],function(Renderable, easel) {
    function Peon() {
        this.Renderable_constructor();
        this.graph = undefined;
    }
    easel.extend(Peon, Renderable);
    easel.promote(Peon, "Renderable");

    var _p = Peon.prototype;

    return Peon;
});
