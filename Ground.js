class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }

    display(){
        push();
        rectMode(CENTER);
        fill("yellow")
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}

// Ground must be static
// Ground must be 800 pixels wide
// properties must be changable in sketch.js
// Use Box.js for an example





























































