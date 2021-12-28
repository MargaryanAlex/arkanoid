export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    };
    // Add(5)
    // Add(Vector)
    // Add({x, y})
    add(factor) {
        const f = typeof factor === 'object'
            ? { x: 0, y: 0, ...factor }
            : { x: factor, y: factor };
        return new Vector(this.x + f.x, this.y + f.y);
    }
    // Minus(5)
    // Minus(Vector)
    // Minus({x, y})
    minus(factor) {
        const f = typeof factor === 'object'
            ? { x: 0, y: 0, ...factor }
            : { x: factor, y: factor };
        return new Vector(this.x - f.x, this.y - f.y);
    }
    // Multiply(5)
    // Multiply(Vector)
    // Multiply({x, y})
    multiply(factor) {
        const f = typeof factor === 'object'
            ? { x: 0, y: 0, ...factor }
            : { x: factor, y: factor };

        return new Vector(this.x * f.x, this.y * f.y);
    }
    divide(factor) {
        const f = typeof factor === 'object'
            ? { x: 0, y: 0, ...factor }
            : { x: factor, y: factor };
        return new Vector(this.x / f.x, this.y / f.y);

    }

    rotate(angle) {
        return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
    }
    angle(vector) {
        var dy = vector.y - this.y;
        var dx = vector.x - this.x;
        var angle = Math.atan2(dy, dx); // range (-PI, PI]
        return angle;
    }
    distance(vector) {
        return Math.sqrt(Math.pow((this.x - vector.x), 2) + Math.pow((this.y - vector.y), 2));
    }
}