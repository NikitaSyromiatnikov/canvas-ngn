import { Engine } from "../engine";
import { RootScene } from "./scenes/RootScene";

export const game = new Engine.Game({
    gameOptions: {
        render: {
            resolution: {
                width: 1920,
                height: 1080,
            },
            aspectRatio: 16 / 9,
            fps: 1000 / 60,
        },
        canvasId: 'rootScene',
        containerId: 'rootContainer',
    },
    rootScene: RootScene,
});