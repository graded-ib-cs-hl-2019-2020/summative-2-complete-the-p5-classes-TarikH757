/* Programming Summative 2

    This summative comes in 2 parts.

    Part 1 - Programming
    ---------------------
    Your PRIMARY goal is to get the program running. You can find missing elements by looking for comments marked
    TODO REQUIRED. If they are all fixed, the program should run with 10 red balls, 10 white snowflakes, and
    10 transluscent bubbles.

    Your SECONDARY goal is to implement the optional TODO requirements and any other fun things you think of.

    Part 2 - Documenting
    ------------------------
    Create UML diagrams for all three of these classes, and a flowchart that shows the basic program flow of
    index.ts. You can do these by hand (be neat!) or using an online tool - draw.io and lucidchart are both nice
    online offerings.

    For a Proficient, the documentation must be complete and the program must run and be readable.
        An Approaching might mean incomplete documentation OR hard-to-read code OR not-quite-working code
        Work your way downwrd from there
    For an Accomplished , some optional requirements or embellishments are
    required or the code must be particularly beautiful
    For an Exemplary, I would expect all optional rquirements to be implemented,
    or additional features of similar or greater
        difficulty.
*/
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";

let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;
let numBubbles = 20;
let numBalls = 15;
let numFlakes = 12;

function randomColor() {
    return ("rgb(" + Math.floor(random(1, 255)) + "," + Math.floor(random(1, 255)) + "," + Math.floor(random(1, 255)) + ")");
}
function setup() {
    createCanvas(1000, 500);
    let i: number = 0;
    for (i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), randomColor(), randomColor());
        /* TODO OPTIONAL - make the balls a random color */
    }
    for (i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(5, width - 5), random(5, height - 5),
            random(5, 25), 2, 10, "#5e81ff", "#4961fc");
    }
    for (i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(random(5, width - 5), random(5, height - 5),
            random(5, 25), 2, random(2, 10), "white", "white");
    }
}
function draw() {
    // Hexadecimal color
    background("#5779FF");
    /* for loop to move bubbles. The if statement makes it so that if my mouse
    isn't touching a ball,then the balls will move as normal. However, if I
    hover my mouse over a specific ball it will stop until I stop to hover
    over it. */
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
/*function mousePressed() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].stop();
    }
 tried to incorporate these functions to make it so when I pressed my mouse
it would stop all the balls, which it did, but I was unable to make them
move normally again.
}

function mouseReleased() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
    }
}
*/
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
