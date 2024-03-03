"use strict";
//buildings
let work;
let bankA;
let bankB;
let home;
let IRS;
let w2Scene;

//buttons
let play, back;

//scenes
let fin = new PIXI.Container();    
let menu = new PIXI.Container();   
let game = new PIXI.Container(); 

const app = new PIXI.Application({
    width:1280,
    height:720,
    backgroundColor: 0xfabedc,
});
document.body.appendChild(app.view);
//dimension
const screenWidth = app.screen.width;
const screenHeight = app.screen.height;

// loader
const homeTexture = PIXI.Assets.load('images/home.jpg');



//label
const heading= makeLabel(screenWidth/2 -150,screenHeight/2-100, "Happy Taxing!", 48, menu);
makeButton(play, 100, screenHeight-100, "play",menu, game);
makeButton(back, 700, screenHeight-100, "back",game,menu);
buildings();
setup();

//sets the app up
function setup(){
    app.stage.addChild(fin);
    app.stage.addChild(menu);
    app.stage.addChild(game);

    //menu is visible only
    fin.visible= false;
    game.visible=false;
    const home = PIXI.Sprite.from(homeTexture);
    menu.addChild(home);
}



/*
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ background: '#1099bb', resizeTo: window });

document.body.appendChild(app.view);

// Start loading right away and create a promise
const texturePromise = PIXI.Assets.load('https://pixijs.com/assets/bunny.png');

// When the promise resolves, we have the texture!
texturePromise.then((resolvedTexture) =>
{
    // create a new Sprite from the resolved loaded Texture
    const bunny = PIXI.Sprite.from(resolvedTexture);

    // center the sprite's anchor point
    bunny.anchor.set(0.5);

    // move the sprite to the center of the screen
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);
});
*/