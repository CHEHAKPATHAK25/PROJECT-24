
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log2,log1,log3, paper, ground;

function preload(){}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper= new Paper(130,570,20);
	log1= new Dustbin(600,720,20,100);
	log2= new Dustbin(600,610,100,20);
	log3= new Dustbin(600,6300,20,100);
	ground = new Ground(400,750,800,200);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:55,y:-55});
	}
}