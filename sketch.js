
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, p;
var world, db;

function preload(){
	p = loadImage("paper.png");
	d = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1400, 650);

	paper = createSprite(150, 625);
	paper.addImage(p);
	paper.scale = 0.5;

	db = createSprite(1400, 520);
	db.addImage(d);
	db.scale = 0.9;

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  drawSprites();
}
function keyPressed(){
	if (keyCode === "t"){
	
	}
}

