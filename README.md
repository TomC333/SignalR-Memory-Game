# SignalR Mind Game (or Memory Game! 🧠)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/TomC333/SignalR-Memory-Game)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/TomC333/SignalR-Memory-Game/blob/main/LICENSE)

## Background 🤯

This project hails from my early days at my first job. At that time, **SignalR**, **C#**, and **TypeScript** were all new to me. My boss, keen on giving me hands-on experience, asked me to build a project using SignalR. This game was a fantastic way to dive in and gain some practical skills!

## How to Play 🎮

The game is quite simple and revolves around remembering a sequence of "cats" and their sounds:

1.  The game begins once **two players** successfully join the game hub.
2.  A **first player** is randomly selected to start.
3.  **Player 1** chooses any cat from the displayed options.
4.  The **opponent** immediately sees the chosen cat highlighted (it turns white) and hears a unique sound associated with that specific cat.
5.  Now, it's **Player 2's** turn. They must choose the *same* cat that Player 1 just selected, *and then* they must choose one *additional, new* cat.
6.  This sequence continues, alternating between players. Each player's turn involves recalling the entire sequence of cats chosen so far and adding one new cat to the end of that sequence.
7.  The game concludes when one of the players makes a mistake and chooses an incorrect cat in the established sequence.

A fun aspect of this game is that you can employ different strategies to win: either by visually remembering the patterns of selected cats or by recalling the distinct sounds each cat makes! 🎶

## Achievements 🏆 or 💩?

Similar to my "Piano Shuffler" project, this one isn't responsive, which I now see as a missed opportunity! 😅 Responsiveness wasn't the project's primary goal back then, but in hindsight, it would have been a valuable addition.

Despite that, the game is fully functional, and several people from the office (around 5-6!) tested and enjoyed it. The biggest "achievement" from this project is actually a hilarious mistake: the project's name, **"SignalR-Mind-Game,"** should have been **"SignalR-Memory-Game"**! 😂 It's a great lesson in choosing the right names, especially when working with C# solutions, as renaming can be a hassle.

This project, like any learning experience, has its share of "mistakes" in terms of programmatic thinking and potentially better running instructions. But as they say, we learn best from our mistakes!

## Setup 🌱

Setting up this project can be a little tricky, so follow these steps:

1.  First, open your terminal in the project directory and install the necessary npm packages:
    ```sh
    npm i
    ```
2.  Next, build the project to create the `wwwroot` file:
    ```sh
    npm run build
    ```
3.  Finally, you can run this code directly within **Visual Studio** (not VS Code! 😂).

Make sure to run the `npm i` and `npm run build` commands *before* launching from Visual Studio to ensure all essential files are generated!

## Images ▶️

![Lobby Image](https://github.com/TomC333/SignalR-Memory-Game/blob/main/images/lobby.jpg)
![Gameplay Image](https://github.com/TomC333/SignalR-Memory-Game/blob/main/images/game.jpg)
