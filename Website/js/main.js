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
    width:1024,
    height:768,
    backgroundColor: 0xfabedc,
});
let gameWindow = document.getElementById('game');
gameWindow.appendChild(app.view);
//dimension
const screenWidth = app.screen.width;
const screenHeight = app.screen.height;

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

//makes the text and placeholder buttons FOR NOW
function makeLabel(x, y,word, fontSize, scene, isInteractive){
    let text = new PIXI.Text(word,
    {fontFamily : 'Arial', 
    fontSize: fontSize, 
    fill : 0xff1010, 
    align : 'center'});
    text.x=x;
    text.y=y;
    scene.addChild(text);
    text.interactive =isInteractive;

    if(isInteractive){
        text.buttonMode =true;
        text.on('click',function(){
            
        });
    }
    
}


function buildings(){
    //work = new Building(20, 200, 1, 1, menu, game);
}
