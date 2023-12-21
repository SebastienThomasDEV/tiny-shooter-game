import Entity from "../models/Entity";

export default class Archer extends Entity {
    constructor(x: number, y: number, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(x, y, 10, context, canvas);
    }

    public draw(): void {
        this.context.fillStyle = 'rgb(0, 0, 255)';
        this.context.fillRect(this.x, this.y, this.radius, this.radius);
    }
}