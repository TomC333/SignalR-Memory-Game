import * as signalR from "@microsoft/signalr";
import "./css/main.css";


const startButton: HTMLElement = document.getElementById("play-button");
const textarea: HTMLElement = document.getElementById("lobby-log-textarea");
const id = new Date().getTime();


const connection = new signalR.HubConnectionBuilder()
    .withUrl("/lobby")
    .build();

connection.on("NewPlayerJoinedLobby", () => {
    textarea.innerHTML += `\n New Player Entered in Lobby `;
});

connection.on("StartGame", (gameId: string) => {
    window.location.href = `/game.html?game_id=${gameId}`;
});

connection.on("YouAreWaitingToOpponent", () => {
    textarea.innerHTML = `Waiting Oponent...`; 
});


connection.start().catch((err) => document.write(err));
startButton.addEventListener('click', () => { connection.send("play", id) });
