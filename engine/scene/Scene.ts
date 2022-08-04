import { IScene } from "./IScene";
import { SpriteFactory } from "../sprite/SpriteFactory";

export abstract class Scene implements IScene {
    protected readonly canvas: HTMLCanvasElement;
    protected readonly context: CanvasRenderingContext2D;
    protected readonly spriteFactory: SpriteFactory;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.spriteFactory = new SpriteFactory();
    }

    public abstract render(): void;
}