define(['easel'],function(easel) {
    function Node(x,y,color) {
        this.Shape_constructor();
        this.x = x;
        this.y = y;
        this.color = color;

        this.graphics.beginFill(color).drawCircle(0,0,50);


    }


    easel.extend(Node,easel.Shape);
    easel.promote(Node, "Shape");

    return Node;
});
