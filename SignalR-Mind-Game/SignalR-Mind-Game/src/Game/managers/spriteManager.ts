import * as PIXI from "pixi.js";
export type Textures = {
    bCat0: PIXI.Texture,
    bCat1: PIXI.Texture,
    bCat2: PIXI.Texture,
    bCat3: PIXI.Texture,
    wCat0: PIXI.Texture,
    wCat1: PIXI.Texture,
    wCat2: PIXI.Texture,
    wCat3: PIXI.Texture,
};

type BundleId = 'textures';
export class SpriteManager {
    static textures: Textures;
    static catPicturesMap: Map<string, PIXI.Texture>;

    static async loadInitialResources(onProgress: (progress: number) => void, onLoad: () => void) {
        this.loadSprites();
        let activeBundleIds: BundleId[] = ['textures'];
        await PIXI.Assets.loadBundle(activeBundleIds, (progress: number) => {
            onProgress(progress);
        }).then((bundle: { textures: Textures }) => {
            this.textures = bundle.textures;
            this.catPicturesMap = new Map<string, PIXI.Texture>([
                ["black-cat-0", SpriteManager.textures.bCat0],
                ["black-cat-1", SpriteManager.textures.bCat1],
                ["black-cat-2", SpriteManager.textures.bCat2],
                ["black-cat-3", SpriteManager.textures.bCat3],
                ["white-cat-0", SpriteManager.textures.wCat0],
                ["white-cat-1", SpriteManager.textures.wCat1],
                ["white-cat-2", SpriteManager.textures.wCat2],
                ["white-cat-3", SpriteManager.textures.wCat3],
            ]);
            onLoad();
        })
    }

    private static loadSprites() {
        let texturesPath = 'assets/';
        let textureBundleId: BundleId = 'textures';
        PIXI.Assets.addBundle(textureBundleId, {
            bCat0: `${texturesPath}b-0.png`,
            bCat1: `${texturesPath}b-1.png`,
            bCat2: `${texturesPath}b-2.png`,
            bCat3: `${texturesPath}b-3.png`,
            wCat0: `${texturesPath}w-0.png`,
            wCat1: `${texturesPath}w-1.png`,
            wCat2: `${texturesPath}w-2.png`,
            wCat3: `${texturesPath}w-3.png`,
        });
    }

    private static imageCache: { [key: string]: HTMLImageElement } = {};
    static loadImage(src: string) {
        if (this.imageCache[src]) {
            return this.imageCache[src]; // Return the cached image if it exists
        } else {
            const img = new Image();
            img.src = src;
            this.imageCache[src] = img; // Cache the image
            return img;
        }
    }
}