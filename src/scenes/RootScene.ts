import { Engine } from "../../engine";
import { RenderingStrategy, Sprite } from "../../engine/sprite/Sprite";

export class RootScene extends Engine.Scene {
    private readonly assetTags: string[];

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        super(canvas, context);
        this.assetTags = [
            "./assets/root-scene/root-scene-bg.png",
            "./assets/root-scene/root-scene-item.png"
        ];
        this.initialize();
    }

    private initialize() {
        this.spriteFactory.create(this.assetTags[0] as string, (background: Sprite) => {
            this.spriteFactory.create(this.assetTags[1] as string, (image: Sprite) => {
                background.setRenderingStrategy(RenderingStrategy.FILL);
                background.addChild(image);
                this.renderer.addToRenderQueue(background);
            });
        });
    }
}