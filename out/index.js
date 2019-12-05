import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
let numBubbles = 20;
let numBalls = 15;
let numFlakes = 12;
function randomColor() {
    return ("rgb(" + Math.floor(random(1, 255)) + "," + Math.floor(random(1, 255)) + "," + Math.floor(random(1, 255)) + ")");
}
function setup() {
    createCanvas(1000, 500);
    let i = 0;
    for (i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), randomColor(), randomColor());
    }
    for (i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(5, width - 5), random(5, height - 5), random(5, 25), 2, 10, "#5e81ff", "#4961fc");
    }
    for (i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(5, width - 5), random(5, height - 5), random(5, 25), 2, random(2, 10), "white", "white");
    }
}
function draw() {
    background("#5779FF");
    for (let i = 0; i < numBalls; i++) {
        balls[i].draw();
        if (!balls[i].touchingMouse()) {
            balls[i].move();
        }
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i].draw();
        snowflakes[i].move();
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map