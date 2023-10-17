import * as PIXI from 'pixi.js';
import { Cat } from '../gamePbjects/cat';
import { Layout } from '../layout';
export class GameManager {
    constructor(_connection, _gameId) {
        this._connection = _connection;
        this._gameId = _gameId;
        this._gameWindow = document.getElementById("game");
        this._cats = new Map();
        this._isUserTurn = false;
        this._canPlay = true;
        this._gameManager = new PIXI.Application({
            width: Layout.canvas.width,
            height: Layout.canvas.height,
            background: '#ff00fd',
            antialias: true,
        });
        this._gameWindow.appendChild(this._gameManager.view);
    }
    initializeAndDrawCats() {
        let x = Layout.game.catsStartX;
        const y = Layout.game.catsY;
        for (let i = 0; i < Layout.game.numberOfCats; i++) {
            const newCat = new Cat(i);
            this._cats.set(i, newCat);
            newCat.initializeCat(x, y);
            x += newCat.getCatWidth() + Layout.game.catsMargin;
            this._gameManager.stage.addChild(newCat.getCatElement());
            this.addCatEventListener(newCat);
        }
    }
    addCatEventListener(cat) {
        cat.getCatElement().onpointerover = () => {
            if (this._isUserTurn && this._canPlay) {
                cat.makeCatWhite();
            }
        };
        cat.getCatElement().onpointerout = () => {
            if (this._isUserTurn && this._canPlay) {
                cat.makeCatBlack();
            }
        };
        cat.getCatElement().onpointertap = () => {
            if (this._isUserTurn && this._canPlay) {
                console.log("sending play request");
                this._connection.send("Play", cat.id, this._gameId);
            }
        };
    }
    restartCats() {
        this._cats.forEach(x => x.makeCatBlack());
    }
    lightCat(catId) {
        this._cats.get(catId).makeCatWhite();
    }
    changeIsUserTurnStatusAndRestartCats(isCurrentUsersTurn) {
        this._isUserTurn = isCurrentUsersTurn;
        this.restartCats();
    }
    disablePlayingAndShowUserPlay(catId) {
        this._canPlay = false;
        this.restartCats();
        this.lightCat(catId);
    }
    enablePlaying() {
        this._canPlay = true;
        this.restartCats();
    }
    getGameView() {
        return this._gameManager.view;
    }
}
