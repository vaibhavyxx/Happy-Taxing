"use strict";
//scenes
let work;
let bankA;
let bankB;
let home;
let IRS;
let w2Scene;
let fin;    
let menu;   

const app = new PIXI.Application({
    width:1024,
    height:768,
    backgroundColor: 0xfabedc,
});
let game = document.getElementById('game');
game.appendChild(app.view);

