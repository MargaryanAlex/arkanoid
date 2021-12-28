import { Base } from "./base.js";


export class Block extends Base {
    constructor(position, size, life, color) {
        super(position, size);
        this.color = color;
        this.life = life;
    };

    update() {

    }

    draw() {
        engine.fillRect(this.x, this.y, this.width, this.height, this.color)
        // engine.drawImage(image, this.color.x, this.color.y, this.color.width, this.color.height, this.x, this.y, this.width, this.height)
    };

};