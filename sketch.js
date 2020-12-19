
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground
// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;


		
		
	
		ground=new Ground(400,700,800,30)
		
		
	
	
	
	
		Engine.run(engine);
	  
	}
	
	

function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display()
}



