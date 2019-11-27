export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number;
    private ySpeed: number;
    private stopped: boolean = false;
    private color: string;
    private borderColor: string;

    constructor(x: number, y: number, size: number, xSpeed: number, ySpeed: number, color: string, borderColor: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.color = color;
        this.borderColor = borderColor;
    }
    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }
    // snowflakes drift down, but some go pretty fast
    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    public move(): void {
        if (this.stopped == false) {
            this.y = this.y + this.ySpeed;
            this.doBorderBehavior();
        }
    }
    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;

    }

    private doBorderBehavior() {
        if (this.onYEdge()) {
            this.y = - (this.size / 2);
            this.x = random(1, width - length / 4);
            this.ySpeed = random(2, 10);
            this.size = random(20, 30);
        }
    }

    private onYEdge(): boolean {
        if (this.y - (this.size / 2) >= 750) {
            return true;
        } else {
            return false;
        }
    }

}
