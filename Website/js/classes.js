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
      wage =0;
      hoursWorked=0;
    }
  }

  class Work extends PIXI.Sprite{
    constructor( scene, x, y,scale){
      //super(tex);
      this.x =x;
      this.y=y;
      this.scale.x =scale;
      this.scale.y = scale;
      this.interactive =true;
      this.buttonMode = true;
    }

    Pay(wage) {
      wage = 15* 40* 4;
      console.log('Player earns '+ wage+' dollars but due to taxes they get,'+ wage-300);
    }
  }
