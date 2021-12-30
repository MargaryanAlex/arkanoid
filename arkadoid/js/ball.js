import { Base } from "./base.js";
import { Vector } from "./vector.js";

export class Ball extends Base {
    constructor(position, size, velocity,) {
        super(position, size);
        var self = this;
        this.velocity = velocity;
        this.color = "#ed553b";
        this.radius = size.y / 2;
        // this.ballsLength = 1;
        this.timer = 0;
    };

    update() {
        if (engine.mousedown) {

            engine.drawLine(this.position, engine.mouse)
        };
        if (engine.click && this.y == engine.height - this.radius) {

            var mCords = new Vector(engine.mouse.x, engine.mouse.y);

            var angle = this.position.angle(mCords);

            this.velocity = new Vector(this.radius * Math.cos(angle), this.radius * Math.sin(angle));

        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x >= engine.width) {
            this.x = engine.width - this.radius;
            this.velocity.x *= -1;

        }
        if (this.x <= 0) {
            this.x = this.radius;
            this.velocity.x *= -1;
        } if (this.y <= 0) {
            this.y = this.radius;
            this.velocity.y *= -1;
        }
        // if (this.y > engine.height) {
        //     this.y = engine.height - this.radius;
        //     // item.x = balls.balls[0].x
        //     this.velocity.x = 0;
        //     this.velocity.y = 0;
        //     engine.click = false

        // }

        // if (this.y >= engine.height - this.radius + 0.000000000000000000000000000001) {
        //     this.y = engine.height - this.radius;
        //     this.velocity.x = 0;
        //     this.velocity.y = 0;
        //     engine.click = false
        // }

    };


    draw() {
        engine.fillCircle(this.x, this.y, this.radius, this.color);



    };


};