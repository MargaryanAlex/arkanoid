import { Rectangle } from "./rectangle.js";

export class Base {
    constructor(position, size) {
        this.position = position;
        this.size = size;

    };

    update() { }
    draw() { }
    intersect = Intersects.circleBox
    // intersect(obj) {
    //     if (
    //         this.x >= obj.x && this.x < obj.x + this.width && this.y >= obj.y && this.y < obj.y + this.height && this.width == obj.width && this.height == obj.height
    //         // this.y >= obj.y && this.y < obj.y + obj.height && this.x >= obj.x && this.x < obj.x + obj.width
    //     ) {
    //         return true;
    //     };
    //     return false;
    // };
    getRandomNumber(min, max) {
        if (max === undefined)
            return Math.floor(Math.random() * (min));
        return Math.floor(Math.random() * (max - min) + min);
    };
    get x() {
        return this.position.x;
    }

    set x(value) {
        this.position.x = value;
    }

    get y() {
        return this.position.y;
    }

    set y(value) {
        this.position.y = value;
    }

    get width() {
        return this.size.x;
    }

    set width(value) {
        this.size.x = value;
    }

    get height() {
        return this.size.y;
    }

    set height(value) {
        this.size.y = value;
    }

    rectangle() {
        return new Rectangle(this.position, this.size);
    }
}

window.Directions = {
    Up: "ArrowUp",
    Down: "ArrowDown",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Jump: "Space"

};