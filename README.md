# Canvas-ngn

TypeScript game engine that provides rendering methods and strategies for building complex game scenes

What do we all want to achieve?
Simplicity, the main goal of making that engine is to create game scenes easily.

index.ts

```
import { LobbyScene } from '../scenes/Lobby';

const game = Engine.Game({
    gameOptions: {
        render: {
            fps: 1000 / 60,  
        }, 
        resolution: {
            width: 1920,
            height: 1080,
        },
        canvasId: 'root',
    },
    rootScene: LobbyScene,
});
```
