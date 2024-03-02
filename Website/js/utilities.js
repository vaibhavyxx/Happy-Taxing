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
