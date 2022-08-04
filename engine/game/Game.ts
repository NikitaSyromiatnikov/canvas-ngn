import { IGame } from "./IGame";
import { IScene } from "../scene/IScene";

export interface SceneClass extends Function {
    new(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): IScene
}

export interface GameRenderOptions {
    fps: number;
    aspectRatio: number;
    resolution: {
        width: number;
        height: number;
    }
}

export interface GameOptions {
    render: GameRenderOptions
    canvasId: string;
    containerId: string;
}

export interface GameParameters {
    gameOptions: GameOptions;
    rootScene: SceneClass;
}

export class Game implements IGame {
    public readonly canvas: HTMLCanvasElement;

    private readonly aspectRatio: number;
    private readonly canvasContainer: HTMLElement;
    private readonly renderingContext2D: CanvasRenderingContext2D;
    private readonly sceneCls: SceneClass;

    constructor({ gameOptions, rootScene }: GameParameters) {
        this.canvas = document.createElement("canvas");
        this.canvasContainer = document.getElementById(gameOptions.containerId) as HTMLElement;
        this.sceneCls = rootScene;
        this.canvas.id = gameOptions.canvasId;
        this.aspectRatio = gameOptions.render.aspectRatio;
        this.renderingContext2D = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.addCanvas();
        this.initializeGame();
    }

    public get context(): CanvasRenderingContext2D {
        return this.renderingContext2D;
    }

    private initializeGame() {
        new this.sceneCls(this.canvas, this.context);
    }

    private addCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = Math.floor(window.innerWidth / this.aspectRatio);
        this.canvasContainer.appendChild(this.canvas);
        this.subscribeOnWindowResize();
        this.subscribeOnFullScreenRequest();
    }

    private subscribeOnWindowResize() {
        window.onresize = () => {
            console.log('onresize');
            this.canvas.width = window.innerWidth;
            this.canvas.height = Math.floor(window.innerWidth / this.aspectRatio);
        }
    }

    private subscribeOnFullScreenRequest() {
        this.canvas.addEventListener('click', () => {
            this.canvas.requestFullscreen({ navigationUI: "auto" });
        })
    }
}