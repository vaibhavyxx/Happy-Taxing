"use strict";
const app = new PIXI.Application({
    width:1280,
    height:720,
    backgroundColor: 0xfabedc,
});
document.body.appendChild(app.view);

let loader = new PIXI.Loader();
let cat;
loader.add('cat', 'js/home.png');

loader.load((loader, resources)=> {
    cat = new PIXI.Sprite(resources.cat.texture);
    //cat = resources.cat.texture;
     // Position the cat sprite
     cat.x = 50; // Center horizontally
     cat.y =50; // Center vertically
 
     // Add the cat sprite to the stage
     app.stage.addChild(cat);
});

//app.stage.addChild(cat);