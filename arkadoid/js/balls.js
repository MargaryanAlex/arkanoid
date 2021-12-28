import { Ball } from "./ball.js";
import { Base } from "./base.js";
import { Vector } from "./vector.js";

export class Balls extends Base {
    constructor(position, size,) {
        super(position, size);
        var self = this;
        this.color = "#ed553b";
        this.radius = size.y / 2;

        this.balls = new Array();
        for (let i = 0; i < 3; i++) {
            // engine.fillCircle(this.x, this.y, this.radius, this.color);
            this.balls.push(new Ball(this.position, this.size, new Vector(0, 0)))
        }
    };

    update() {
        if (engine.mousedown) {

            engine.drawLine(this.balls[0].position, engine.mouse)
        };
        // if (this.balls[0].x >= engine.width) {
        //     this.balls[0].x = engine.width - this.balls[0].radius;
        //     this.velocity.x *= -1;

        // }
        // if (this.balls[0].x <= 0) {
        //     this.balls[0].x = this.balls[0].radius;
        //     this.velocity.x *= -1;
        // } if (this.balls[0].y <= 0) {
        //     this.balls[0].y = this.balls[0].radius;
        //     this.velocity.y *= -1;
        // }
        // if (engine.click && this.balls[0].y == engine.height - this.size.y / 2) {

        //     var mCords = new Vector(engine.mouse.x, engine.mouse.y);

        //     var angle = this.balls[0].position.angle(mCords);
        //     for (let j = 0; j < this.balls.length; j++) {

        //         this.balls[j].velocity = new Vector((size.y / 2) * Math.cos(angle), (size.y / 2) * Math.sin(angle));


        //     };


        // };

        var delta = Date.now() - this.lastTime;
        let steps = Math.floor(delta / this.frameTime);
        if (steps <= 0) return;

        for (let j = this.balls.length - 1; j >= 0; j--) {
            this.balls[j].update()

            // if (this.balls[j].x >= engine.width) {
            //     this.balls[j].x = engine.width - this.balls[j].radius;
            //     this.velocity.x *= -1;

            // }
            // if (this.balls[j].x <= 0) {
            //     this.balls[j].x = this.balls[j].radius;
            //     this.velocity.x *= -1;
            // } if (this.balls[j].y <= 0) {
            //     this.balls[j].y = this.balls[j].radius;
            //     this.velocity.y *= -1;
            // }
            // this.balls[j].x += this.velocity.x;
            // this.balls[j].y += this.velocity.y;
            // var previousPart = this.balls[j - 1];

            // this.balls[j].x = previousPart.x;
            // this.balls[j].y = previousPart.y;

        };




        // if (this.balls[0].y >= engine.height - this.balls[0].radius + 0.000000000000000000000000000001) {
        //     this.balls[0].y = engine.height - this.balls[0].radius;
        //     this.velocity.x = 0;
        //     this.velocity.y = 0;
        // }

    };
    addNewBall() {
        this.balls.push(new Ball(this.position.add(this.size.multiply(this.balls.length)), this.size))
    }

    draw() {
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw();
        }

    };


};