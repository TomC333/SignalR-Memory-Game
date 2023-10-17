import * as PIXI from 'pixi.js';
import { Layout } from '../layout';
import { SpriteManager } from '../managers/spriteManager';

export class Cat {

    private _cat: PIXI.Sprite;

    constructor(private _id: number) { }

    async initializeCat(x: number, y: number) {

        const str: string = 'bCat0';

        this._cat = PIXI.Sprite.from(SpriteManager.catPicturesMap.get(this.getBlackCatTextureKey()));
        this._cat.anchor.set(Layout.cat.anchor);
        this._cat.scale.set(Layout.cat.scale);
        this._cat.x = x;
        this._cat.y = y;
        this._cat.eventMode = "dynamic";
    }

    private getWhiteCatTextureKey() {
        return `white-cat-${this.id}`;
    }

    private getBlackCatTextureKey() {
        return `black-cat-${this.id}`;
    }

    makeCatWhite() {
        this._cat.texture = SpriteManager.catPicturesMap.get(this.getWhiteCatTextureKey())
    }

    makeCatBlack() {
        this._cat.texture = SpriteManager.catPicturesMap.get(this.getBlackCatTextureKey());
    }

    getCatWidth(): number {
        return this._cat.width;
    }

    getCatElement(): PIXI.Sprite {
        return this._cat;
    }

    get id(): number {
        return this._id;
    }
    

}