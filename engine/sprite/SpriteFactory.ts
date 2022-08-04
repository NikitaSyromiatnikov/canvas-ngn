import { Sprite } from "./Sprite";

export class SpriteFactory {
    public async create(assetTag: string, assetLoadedCb: (image: Sprite) => void) {
        const image = document.createElement("img");

        image.src = assetTag;
        image.onload = () => {
            assetLoadedCb(new Sprite(image));
        };
    }
}