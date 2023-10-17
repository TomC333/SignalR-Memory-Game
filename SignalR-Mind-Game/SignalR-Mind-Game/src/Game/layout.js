export class Layout {
}
Layout.canvas = {
    width: 900,
    height: 250,
    background: '#808080',
};
Layout.game = {
    numberOfCats: 4,
    catsY: Layout.canvas.height / 2,
    catsStartX: 100,
    catsMargin: 70,
};
Layout.cat = {
    anchor: 0.5,
    scale: 0.3,
    width: 100,
    height: 200,
};
Layout.playingLables = {
    userTurn: "Your Turn",
    oponentsTurn: "Opponents Turn",
};
Layout.gameFinishedInputs = {
    win: "Congrats You Win Game",
    lose: "You Lost Game :(",
};
