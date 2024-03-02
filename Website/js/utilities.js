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
    return text;
}

//for interactive texts only-BUTTON
function makeButton(text,x,y,word, current, nextScene){
    text = makeLabel(x, y, word, 32, current, true);
    text.on('click', function(){
        current.visible =false;
        nextScene.visible =true;
    })
}


function buildings(){
    //work = new Building(20, 200, 1, 1, menu, game);
}
