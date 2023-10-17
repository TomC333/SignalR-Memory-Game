import * as PIXI from 'pixi.js';
import { Cat } from '../gamePbjects/cat';
import { Layout } from '../layout';


export class GameManager {  

    private _gameWindow: HTMLElement = document.getElementById("game");

    private _gameManager: PIXI.Application<HTMLCanvasElement>;
    private _cats: Map<number, Cat> = new Map();
    private _isUserTurn: boolean = false;
    private _canPlay: boolean = true;


    constructor(private _connection: signalR.HubConnection, private _gameId: string) {

        this._gameManager = new PIXI.Application<HTMLCanvasElement>({
            width: Layout.canvas.width,
            height: Layout.canvas.height,
            background: '#ff00fd',
            antialias: true,
        });

        this._gameWindow.appendChild(this._gameManager.view);
    }

    public initializeAndDrawCats() {

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

    private addCatEventListener(cat: Cat) {

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

                this._connection.send("Play", cat.id, this._gameId);
            }

        };
    }

    private restartCats() {
        this._cats.forEach(x => x.makeCatBlack());
    }

    private lightCat(catId: number) {
        this._cats.get(catId).makeCatWhite();
    }

    changeIsUserTurnStatusAndRestartCats(isCurrentUsersTurn: boolean) {

        this._isUserTurn = isCurrentUsersTurn;
        this.restartCats();
    }

    disablePlayingAndShowUserPlay(catId: number) {
        this._canPlay = false;
        this.restartCats();
        this.lightCat(catId);

    }

    enablePlaying() {
        this._canPlay = true;
        this.restartCats();
    }

    getGameView(): HTMLCanvasElement {
        return this._gameManager.view;
    }
}