class Paper {
    constructor() {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(300,290,100,PI/2, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var  angle =this.body.angle
      push()
      translate (pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill("pink");
      rect(0,0, this.width, this.height);
      pop();
    }
  };