
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-10, 10);
    private ySpeed: number = random(1, 3);
    private stopped: boolean = false;
    private color: string;
    private borderColor: string;

    constructor(x: number, y: number, size: number, xSpeed: number, ySpeed: number, color: string, borderColor: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = xSpeed;
        this.color = color;
        this.borderColor = borderColor;
    }
    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }

    public move(): void {
        if (this.stopped == false) {
            this.y = this.y - this.ySpeed;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
