import * as signalR from "@microsoft/signalr";
import "./css/game.css";
import { Loader } from "./Game/loader";
import { SpriteManager } from "./Game/managers/spriteManager";
import { Layout } from "./Game/layout";
import { GameManager } from "./Game/managers/gameManager";
import { SoundsManager } from "./Game/managers/soundsManager";
const activePlayerLabel = document.getElementById("active-player-label");
const gameWindow = document.getElementById("game");
const gameNotFoundInput = document.querySelector("#game-not-created-input-container input");
const gameFinishedInput = document.querySelector("#game-finished-input-container input");
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/game")
    .build();
connection.on("CurrentPlayerIs", (isCurrentUsersTurn) => {
    if (isCurrentUsersTurn) {
        activePlayerLabel.innerText = Layout.playingLables.userTurn;
    }
    else {
        activePlayerLabel.innerText = Layout.playingLables.oponentsTurn;
    }
    gameManager.changeIsUserTurnStatusAndRestartCats(isCurrentUsersTurn);
});
connection.on("GameNotFound", () => {
    gameWindow.style.visibility = "hidden";
    gameNotFoundInput.style.visibility = "visible";
});
connection.on("UserPlayed", (catId) => {
    gameManager.disablePlayingAndShowUserPlay(catId);
    SoundsManager.playSound(catId);
});
connection.on("YouLoseGame", () => {
    gameFinishedInput.value = Layout.gameFinishedInputs.lose;
    gameFinishedInput.style.visibility = "visible";
    gameWindow.style.visibility = "hidden";
});
connection.on("YouWinGame", () => {
    gameFinishedInput.value = Layout.gameFinishedInputs.win;
    gameFinishedInput.style.visibility = "visible";
    gameWindow.style.visibility = "hidden";
});
connection.on("ContinuePlaying", () => {
    gameManager.enablePlaying();
});
connection.on("ReturnToLobby", () => {
    window.location.href = `/index.html`;
});
connection.start()
    .then(result => { console.log("Connection started"); connection.send("registerUserToGame", gameId); });
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("game_id");
const gameManager = new GameManager(connection, gameId);
const loader = new Loader();
SpriteManager.loadInitialResources((progress) => {
    loader.setProgress(Math.max(0, progress));
}, () => {
    gameManager.initializeAndDrawCats();
    gameWindow.appendChild(gameManager.getGameView());
    loader.hideProgressBar();
    loader.showGame();
});
