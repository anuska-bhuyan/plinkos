const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight=300;

var ground;


var particles=[];
var plinkos=[];
var divisions=[];







function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

    ground= new Ground(350,780,400,40);

    for(var k=0; k<=innerWidth; k=k+80){
      divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    }


    for (var j=40;  j<=width ;j=j+50){
      plinkos.push(new Plinko(j,75))
    }

  for(var j=0; j<particles.length;j++){
    particles[j].display();
    }

    for(var k=0; k< divisions.length; k++){
      divisons[k].display();
    }



}

function draw() {
  background(255,255,255);   

  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10,),10,10))
  }


  ground.display();
}