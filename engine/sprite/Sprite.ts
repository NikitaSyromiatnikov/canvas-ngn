export interface BoundingRect {
    x: number,
    y: number,
    width: number,
    height: number,
}

export enum RenderingStrategy {
    DEFAULT = 0,
    FILL = 1,
}

export class Sprite {
    public boundingRect: BoundingRect;
    public renderingStrategy: RenderingStrategy;
    public readonly image: HTMLImageElement;
    public readonly children: Sprite[];

    constructor(image: HTMLImageElement) {
        this.boundingRect = {
            width: image.width,
            height: image.height,
            x: 0,
            y: 0,
        }
        this.image = image;
        this.renderingStrategy = RenderingStrategy.DEFAULT;
        this.children = [];
    }

    public addChild(sprite: Sprite): void {
        this.children.push(sprite);
    }

    public setRenderingStrategy(strategy: RenderingStrategy): void {
        this.renderingStrategy = strategy;
    }
}