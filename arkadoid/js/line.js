import { Vector } from "./vector.js";

export class Line {
    constructor(origin, direction) {
        this.origin = new Vector(origin.x, origin.y);
        this.direction = new Vector(direction.x, direction.y);
    }
    directionAngle() {
        return this.origin.angle(this.direction);
    }
    intersectWith(line) {

        // down part of intersection point formula
        var d1 = (this.origin.x - this.direction.x) * (line.origin.y - line.direction.y); // (x1 - x2) * (y3 - y4)
        var d2 = (this.origin.y - this.direction.y) * (line.origin.x - line.direction.x); // (y1 - y2) * (x3 - x4)
        var d = (d1) - (d2);

        if (d == 0) {
            return null;
        }

        // upper part of intersection point formula
        var u1 = (this.origin.x * this.direction.y - this.origin.y * this.direction.x); // (x1 * y2 - y1 * x2)
        var u4 = (line.origin.x * line.direction.y - line.origin.y * line.direction.x); // (x3 * y4 - y3 * x4)

        var u2x = line.origin.x - line.direction.x; // (x3 - x4)
        var u3x = this.origin.x - this.direction.x; // (x1 - x2)
        var u2y = line.origin.y - line.direction.y; // (y3 - y4)
        var u3y = this.origin.y - this.direction.y; // (y1 - y2)

        // intersection point formula

        var px = (u1 * u2x - u3x * u4) / d;
        var py = (u1 * u2y - u3y * u4) / d;

        return new Vector(px, py);
    }
    get length() {
        return Math.sqrt(Math.pow((this.origin.x - this.direction.x), 2) + Math.pow((this.origin.y - this.direction.y), 2));
    }

}