export class Layout {

    static canvas = {
        width: 900,
        height: 250,
        background: '#808080',
    }

    static game = {
        numberOfCats: 4,
        catsY: Layout.canvas.height / 2,
        catsStartX: 100,
        catsMargin: 70,
    }

    static cat = {
        anchor: 0.5,
        scale: 0.3,
        width: 100,
        height: 200,
    }

    static playingLables = {
        userTurn: "Your Turn",
        oponentsTurn: "Opponents Turn",
    }

    static gameFinishedInputs = {
        win: "Congrats You Win Game",
        lose: "You Lost Game :(",
    }
}