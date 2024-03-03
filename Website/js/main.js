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

const sprites = {};
const loader = new PIXI.Loader;
loader.add('home', "images/home.jpg");

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

//loading tex
loader.load((loader, resources) =>{
    //home = new PIXI.Sprite(resources.home.texture);
    //home = new Player(resources.home.texture, menu);
    //const homeTex = resources.home.texture;
    home = new PIXI.Sprite(resources.home.texture);
    home.x=90;
    home.y=100;
    menu.addChild(home);
    //app.stage.appendChild(home);

});

//label
const heading= makeLabel(screenWidth/2 -150,screenHeight/2-100, "Happy Taxing!", 48, menu);
makeButton(play, 100, screenHeight-100, "play",menu, game);
makeButton(back, 700, screenHeight-100, "back",game,menu);
//buildings();


setup();


//sets the app up
function setup(){
    app.stage.addChild(fin);
    app.stage.addChild(menu);
    app.stage.addChild(game);

    //menu is visible only
    fin.visible= false;
    game.visible=false;
   // const home = PIXI.Sprite.from(homeTexture);
   // menu.addChild(home);

   menu.addChild(home);
}
