import { Line } from "./line.js";
import { Vector } from "./vector.js";
export class Rectangle {
    constructor(position, size) {
        this.position = new Vector(position.x, position.y);
        this.size = new Vector(size.x, size.y);
        this.angle = 0;
    }

    rotate(angle) {
        this.angle += angle;
        return this;
    }

    getAxis() {
        const oX = new Vector(1, 0);
        const oY = new Vector(0, 1);
        const rX = oX.rotate(this.angle);
        const rY = oY.rotate(this.angle);
        return [
            new Line(this.position, rX),
            new Line(this.position, rY),
        ];
    }

    getCorners() {
        const axis = this.getAxis();
        const rX = axis[0].direction.multiply(this.size.x / 2);
        const rY = axis[1].direction.multiply(this.size.y / 2);
        return [
            this.position.add(rX).add(rY),
            this.position.add(rX).add(rY.multiply(-1)),
            this.position.add(rX.multiply(-1)).add(rY.multiply(-1)),
            this.position.add(rX.multiply(-1)).add(rY),
        ];
    }

    getSides() {
        let corners = this.getCorners();
        var sides = new Array();
        sides.push(new Line(corners[0], corners[1]));
        sides.push(new Line(corners[1], corners[2]));
        sides.push(new Line(corners[2], corners[3]));
        sides.push(new Line(corners[3], corners[0]));
        return sides;
    }

    getCords() {
        var corners = this.getCorners();
        var cords = [];
        for (var i = 0; i < corners.length; i++) {
            cords.push(corners[i].x);
            cords.push(corners[i].y);
        }
        return cords;
    }

    intersects(rectangle) {
        var a = this.getCords();
        var b = rectangle.getCords();
        var polygons = [a, b];
        var minA, maxA, projected, minB, maxB, j
        for (var i = 0; i < polygons.length; i++) {
            var polygon = polygons[i];
            for (var i1 = 0; i1 < polygon.length; i1 += 2) {
                var i2 = (i1 + 2) % polygon.length;
                var normal = { x: polygon[i2 + 1] - polygon[i1 + 1], y: polygon[i1] - polygon[i2] };
                minA = maxA = null;
                for (j = 0; j < a.length; j += 2) {
                    projected = normal.x * a[j] + normal.y * a[j + 1];
                    if (minA === null || projected < minA) {
                        minA = projected;
                    }
                    if (maxA === null || projected > maxA) {
                        maxA = projected;
                    }
                }
                minB = maxB = null;
                for (j = 0; j < b.length; j += 2) {
                    projected = normal.x * b[j] + normal.y * b[j + 1];
                    if (minB === null || projected < minB) {
                        minB = projected;
                    }
                    if (maxB === null || projected > maxB) {
                        maxB = projected;
                    }
                }
                if (maxA < minB || maxB < minA) {
                    return false;
                }
            }
        }
        return true;
    }
}


