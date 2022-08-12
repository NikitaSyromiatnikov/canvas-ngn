import { IScene } from "./IScene";
import { SpriteFactory } from "../sprite/SpriteFactory";
import { Engine } from "../index";
import { IRenderer } from "../renderer/IRenderer";

export abstract class Scene implements IScene {
    public readonly renderer: IRenderer;

    protected readonly canvas: HTMLCanvasElement;
    protected readonly context: CanvasRenderingContext2D;
    protected readonly spriteFactory: SpriteFactory;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.spriteFactory = new SpriteFactory();
        this.renderer = new Engine.Renderer(canvas, context);
    }
}