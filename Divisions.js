class Divisions{
    constructor(x,y,w,h){
        var options={

            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
      }
      display(){
        var dpos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(dpos.x, dpos.y, this.w, this.h);
    }
}
