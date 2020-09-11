
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

	function preload() {
		//ballImg = loadImage("sprite/paper.png");
	}
	


function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = new Box(1000,400,300,20);
	box2 = new Box(1170,390,20,100);
	box3 = new Box(885,390,20,100);
	ball = new BALL(20,200,20);
	//ball.addImage(ballImg)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
     World.add(world, ground);
	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  ball.display();
  groundSprite.display();
  box1.display();
  box2.display();
  box3.display();
keyPressed();
  drawSprites();

}

function keyPressed(){
if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-100})
	   }
	 }

	



