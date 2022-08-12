import { IRenderer } from "./IRenderer";
import { RenderingStrategy, Sprite } from "../sprite/Sprite";

export class Renderer implements IRenderer {
    public framesCount: number;

    private renderInterval: NodeJS.Timer | undefined;

    private readonly queue: Sprite[] = [];
    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.queue = [];
        this.renderInterval = undefined;
        this.framesCount = 0;
    }


    public addToRenderQueue(sprite: Sprite): void {
        this.queue.push(sprite);

        if (!this.renderInterval) {
            this.renderInterval = setInterval(this.render.bind(this), 1000 / 60);
        }
    }

    private render() {
        this.framesCount++;
        window.requestAnimationFrame(() => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.queue.forEach(this.drawSprite.bind(this));
        })
    }

    private drawSprite(sprite: Sprite) {
        if (sprite.children.length) {
            sprite.children.forEach((child: Sprite) => {
                this.drawSprite(child);
            })
        }

        switch (sprite.renderingStrategy) {
            case RenderingStrategy.DEFAULT:
                this.context.drawImage(sprite.image, 0, 0, sprite.boundingRect.width, sprite.boundingRect.height);
                break;

            case RenderingStrategy.FILL:
                this.context.drawImage(sprite.image, 0, 0, sprite.boundingRect.width, sprite.boundingRect.height, 0, 0, this.canvas.width, this.canvas.height);
                break;
        }
    }
}