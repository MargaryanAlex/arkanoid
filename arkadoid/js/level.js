import { Base } from "./base.js";
import { Block } from "./block.js";
import { Vector } from "./vector.js";


export class Level {
    constructor(levelData) {
        this.levelNumber = 0;
        this.speed;
        this.blocks = [];
        this.levelMap = levelData.map;
        this.levelColor = levelData.color
        this.rowIndex = -1;
    };

    update() {

    };

    addRow(count) {
        var current = 0;
        while (true) {
            if (current + 1 > count)
                break;
            current++;
            this.blocks.map((block) => {
                block.y += size.y;
            });
            var y = this.levelMap.length - 1 - this.rowIndex - current;
            var row = this.levelMap[y];

            row.map((el, elIndex) => {
                let color
                for (let key in this.levelColor) {
                    if (el <= key) {
                        color = this.levelColor[key];
                        break;
                    }

                };
                switch (el) {
                    case 0: {
                        return;
                    }
                    default: {
                        this.blocks.push(new Block(new Vector(elIndex * size.x, 0), size, el, color));
                        break;
                    }
                }
            });
        }
        this.rowIndex += current;
    }

    draw() {
        this.blocks.map((block) => {
            block.draw();
        });
    };
};