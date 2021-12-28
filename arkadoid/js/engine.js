export class Engine {
    constructor(w, h, node, params) {
        var self = this;
        Object.assign(this, params)
        this.canvas = document.createElement("canvas");
        this.width = w;
        this.height = h;
        this.canvas.style.cssText = "width: 100%;height: 100%;";
        node.appendChild(this.canvas);
        this.canvasContext = this.canvas.getContext("2d");
        this.update = function () { };
        this.draw = function () { };
        this.Keys = [];
        this.mouse = {};
        this.click = false
        this.mousedown = false

        this.color = {
            green: {
                x: 0,
                y: 0,
                width: 30,
                height: 30
            },
            blue: {
                x: 0,
                y: 200,
                width: 30,
                height: 30
            },
            red: {
                x: 0,
                y: 400,
                width: 30,
                height: 30
            },
            darkBlue: {
                x: 200,
                y: 0,
                width: 30,
                height: 30
            }
        }
        window.addEventListener("click", e => {
            this.mouse = {
                x: e.offsetX,
                y: e.offsetY
            };
            this.click = true;
        })
        window.addEventListener("mousedown", e => {
            window.addEventListener("mousemove", e => {
                this.mouse = {
                    x: e.offsetX,
                    y: e.offsetY
                };
            })

            this.mousedown = true;
        })
        window.addEventListener("mouseup", e => {
            this.mouse = {
                x: e.offsetX,
                y: e.offsetY
            };
            this.mousedown = false;
        })
        window.addEventListener("keydown", (e) => {
            this.Keys[e.code] = true;
        });

        window.addEventListener("keyup", (e) => {
            this.Keys[e.code] = false;
        });

        var fps = 60;
        var now;
        var then = Date.now();
        var interval = 1000 / fps;
        var delta;

        function loop() {


            window.requestAnimationFrame(loop);

            now = Date.now();
            delta = now - then;

            if (delta > interval) {
                self.clear();
                // update time stuffs
                self.update(0);
                // Just `then = now` is not enough.
                // Lets say we set fps at 10 which means
                // each frame must take 100ms
                // Now frame executes in 16ms (60fps) so
                // the loop iterates 7 times (16*7 = 112ms) until
                // delta > interval === true
                // Eventually this lowers down the FPS as
                // 112*10 = 1120ms (NOT 1000ms).
                // So we have to get rid of that extra 12ms
                // by subtracting delta (112) % interval (100).
                // Hope that makes sense.
                then = now - (delta % interval);
                self.draw(0);

            }
        };

        window.requestAnimFrame = function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function ( /* function */ loop) {
                    window.setTimeout(loop, 1000 / 60);
                }
            );
        }();
        window.requestAnimationFrame(loop);

    };

    drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height) {
        this.canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
    };


    fillRect(x, y, width, height, color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x, y, width, height);
    };
    drawLine(position, direction) {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(position.x, position.y);
        this.canvasContext.lineTo(direction.x, direction.y)
        this.canvasContext.stroke()
    }
    strokeRect(x, y, width, height, color) {
        this.canvasContext.strokeStyle = color;
        this.canvasContext.strokeRect(x, y, width, height);
    };

    fillCircle(x, y, radius, color) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
        this.canvasContext.fillStyle = color;
        this.canvasContext.fill();
    };

    strokeCircle(x, y, radius, strokeLength, color) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
        this.canvasContext.lineWidth = strokeLength;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.stroke();
    };

    clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    get width() {
        return this.canvas.width;
    };

    set width(value) {
        this.canvas.width = value;
    };

    get height() {
        return this.canvas.height;
    };

    set height(value) {
        this.canvas.height = value;
    };

};