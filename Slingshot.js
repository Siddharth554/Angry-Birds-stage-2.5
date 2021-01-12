class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        // var pos = this.sling.bodyA.position;

        //    imageMode(Center);
        image(this.sling2, 180, 60);
        image(this.sling1, 210, 60);
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48, 22, 8);
            strokeWeight(8);
            if(pointA.x<220){
            line(pointA.x - 25, pointA.y, pointB.x, pointB.y);
            line(pointA.x - 25, pointA.y, pointB.x + 28, pointB.y);
            image(this.sling3, pointA.x - 30, pointB.y - 3, 15, 30)
            }

            else {
                line(pointA.x + 20, pointA.y, pointB.x, pointB.y);
                line(pointA.x + 20      , pointA.y, pointB.x + 28, pointB.y);
                image(this.sling3, pointA.x + 30, pointB.y - 3, 15, 30)
            }
            pop();
           
        }
    }

}