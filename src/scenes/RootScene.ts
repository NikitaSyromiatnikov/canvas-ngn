import { Engine } from "../../engine";
import { Sprite } from "../../engine/sprite/Sprite";

export class RootScene extends Engine.Scene {
    private readonly assetTag: string;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        super(canvas, context);
        this.assetTag = "./assets/root-scene/root-scene-bg.png";
        this.initialize();
    }

    private initialize() {
        this.spriteFactory.create(this.assetTag, this.renderInternal.bind(this));
    }

    public override render() {

    }


    private renderInternal(sprite: Sprite) {
        setInterval(() => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(sprite.image, 0, 0, sprite.boundingRect.width, sprite.boundingRect.height, 0, 0, this.canvas.width, this.canvas.height);
        }, 1000 / 60);
    }
}