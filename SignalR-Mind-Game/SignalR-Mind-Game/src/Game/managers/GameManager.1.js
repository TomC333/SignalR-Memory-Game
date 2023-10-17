import * as PIXI from 'pixi.js';
import { Cat } from '../gamePbjects/cat';
import { Layout } from '../layout';
export class GameManager {
    constructor(_connection, _gameId) {
        this._connection = _connection;
        this._gameId = _gameId;
        this._gameWindow = document.getElementById("game");
        this._cats = [];
        this._isUserTurn = false;
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
            this._cats.push(newCat);
            newCat.initializeCat(x, y);
            x += newCat.getCatWidth() + Layout.game.catsMargin;
            this._gameManager.stage.addChild(newCat.getCatElement());
            this.addCatEventListener(newCat);
        }
    }
    addCatEventListener(cat) {
        cat.getCatElement().onmouseover = () => {
            if (this._isUserTurn) {
                cat.makeCatWhite();
            }
        };
        cat.getCatElement().onmouseout = () => {
            if (this._isUserTurn) {
                cat.makeCatBlack();
            }
        };
        cat.getCatElement().onmousedown = () => {
            if (this._isUserTurn) {
                console.log("sending play request");
                this._connection.send("Play", cat.id, this._gameId);
            }
        };
    }
    restartCats() {
        this._cats.forEach(x => x.makeCatBlack());
    }
    changeIsUserTurnStatusAndRestartCats(isCurrentUsersTurn) {
        this._isUserTurn = isCurrentUsersTurn;
        this.restartCats();
    }
    getGameView() {
        return this._gameManager.view;
    }
}
