
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var rock,rubber,iron;
var ground;


function setup() {
	var canvas=createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height,800,20);

	rock=new Rock(600,600,50,50);
	rubber=new Rubber(600,500);
	iron=new Iron(600,400,50,50);



	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("light blue");
  Engine.update(engine)
  rock.display();
  rubber.display();
  iron.display();
  ground.display();
  
  drawSprites();
 
}



