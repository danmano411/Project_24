const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground; 
var trash1, trash2, trash3;
function preload(){
	
}

function setup() {
	createCanvas(1300, 300);


	engine = Engine.create();
	world = engine.world;
	
	ball = new Ball(100, 100, 15);
	ground = new Ground(650, 275, 1300, 10);

	trash1 = new Trash(950, 220, 10, 100)
	trash2 = new Trash(1000, 270, 100, 10)
	trash3 = new Trash(1050, 220, 10, 100)
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  trash1.display();
  trash2.display();
  trash3.display();

  drawSprites();
};

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 45, y: -45});
	}
}


