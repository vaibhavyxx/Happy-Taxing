class Building extends PIXI.Sprite{
    constructor(x,y, tex, scaleX, scaleY,scene){
      super(tex);
      this.x=x;
      this.y =y;
      this.scale.x = scaleX;
      this.scale.y = scaleY
      scene.addChild(this);
    }
  }