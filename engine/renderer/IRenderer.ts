import { Sprite } from "../sprite/Sprite";

export interface IRenderer {
    framesCount: number;
    addToRenderQueue(sprite: Sprite): void;
}