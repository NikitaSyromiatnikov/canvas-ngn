export interface BoundingRect {
    x: number,
    y: number,
    width: number,
    height: number,
}

export class Sprite {
    public boundingRect: BoundingRect
    public readonly image: HTMLImageElement;

    constructor(image: HTMLImageElement) {
        this.boundingRect = {
            width: image.width,
            height: image.height,
            x: 0,
            y: 0,
        }
        this.image = image;
    }

}