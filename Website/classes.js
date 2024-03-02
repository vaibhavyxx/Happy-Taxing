class Building extends PIXI.Sprite{
    constructor(x,y, tex, scaleX, scaleY,current, next){
      super(tex);
      this.x=x;
      this.y =y;
      this.scale.x = scaleX;
      this.scale.y = scaleY
      scene.addChild(this);
      this.interactive =true;

      this.on('click', function(){
        current.visible = false;
        next.visible = true;
      })
    }
  }