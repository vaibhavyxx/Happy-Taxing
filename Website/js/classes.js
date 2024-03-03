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

  class Player extends PIXI.Graphics{
    constructor(x,y, scale, graphics){
      graphics.beginFill(0xFFF00);
      drawRect(x, y, 10, 10);
    }
  }
