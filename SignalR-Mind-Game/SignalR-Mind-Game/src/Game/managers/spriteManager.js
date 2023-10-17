var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as PIXI from "pixi.js";
export class SpriteManager {
    static loadInitialResources(onProgress, onLoad) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loadSprites();
            let activeBundleIds = ['textures'];
            yield PIXI.Assets.loadBundle(activeBundleIds, (progress) => {
                onProgress(progress);
            }).then((bundle) => {
                this.textures = bundle.textures;
                this.catPicturesMap = new Map([
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
            });
        });
    }
    static loadSprites() {
        let texturesPath = 'assets/';
        let textureBundleId = 'textures';
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
    static loadImage(src) {
        if (this.imageCache[src]) {
            return this.imageCache[src]; // Return the cached image if it exists
        }
        else {
            const img = new Image();
            img.src = src;
            this.imageCache[src] = img; // Cache the image
            return img;
        }
    }
}
SpriteManager.imageCache = {};
