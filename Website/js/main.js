"use strict";
//buildings
let work;
let bankA;
let bankB;
let home;
let IRS;
let w2Scene;

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
//const loader = PIXI.Loader.shared;



//label
makeLabel(screenWidth/2 -150,screenHeight/2-100, "Happy Taxing!", 48, menu);
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
}

