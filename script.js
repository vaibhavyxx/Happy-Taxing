"use strict";
const app = new PIXI.Application({
    width:1024,
    height:768,
    backgroundColor: 0xfabedc,
});
let game = document.getElementById('game');
game.appendChild(app.view);