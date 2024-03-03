class Building extends PIXI.Graphics{
    constructor(x,y, scale, tex,current, next){
      super(tex);
      //graphics.drawCircle(244);
      this.x=x;
      this.y =y;
      //this.scale.x = scaleX;
      //this.scale.y = scaleY
      current.addChild(this);
      this.interactive =true;

      this.on('click', function(){
        current.visible = false;
        next.visible = true;
      })
    }
  }

  class Player extends PIXI.Sprite{
    constructor(tex, scene){
      super(tex);
      this.x=30;
      this.y-90;
      scene.addChild(this);
    }
  }
