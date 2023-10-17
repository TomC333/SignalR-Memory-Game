var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as PIXI from 'pixi.js';
import { Layout } from '../layout';
import { SpriteManager } from '../managers/spriteManager';
export class Cat {
    constructor(_id) {
        this._id = _id;
    }
    initializeCat(x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            const str = 'bCat0';
            this._cat = PIXI.Sprite.from(SpriteManager.catPicturesMap.get(this.getBlackCatTextureKey()));
            this._cat.anchor.set(Layout.cat.anchor);
            this._cat.scale.set(Layout.cat.scale);
            this._cat.x = x;
            this._cat.y = y;
            this._cat.eventMode = "dynamic";
        });
    }
    getWhiteCatTextureKey() {
        return `white-cat-${this.id}`;
    }
    getBlackCatTextureKey() {
        return `black-cat-${this.id}`;
    }
    makeCatWhite() {
        this._cat.texture = SpriteManager.catPicturesMap.get(this.getWhiteCatTextureKey());
    }
    makeCatBlack() {
        this._cat.texture = SpriteManager.catPicturesMap.get(this.getBlackCatTextureKey());
    }
    getCatWidth() {
        return this._cat.width;
    }
    getCatElement() {
        return this._cat;
    }
    get id() {
        return this._id;
    }
}
