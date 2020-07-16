var ball,
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var options={ 
        isStatic:false,
		restition:0.3,
		friction:0.5,
		density:1.2
	}
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = createBody(circle, 50, 650, 20, 20, {restition: 1, isStatic: false} )

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
    side1 = createSprite = (350, 650, 10, 100);
	side1.shapeColor = color(255);
	side1Body = Bodies.rectangle(350, 650, 10, 100, {restitution: 3, isStatic:true});
	side2 = createSprite = (450, 650, 10, 100);
	side2.shapeColor = color(255);
	side2Body = Bodies.rectangle(450, 650, 10, 100, {restitution: 3, isStatic:true});
	bottom = createSprite = (400, 675, 200, 20);
	bottom.shapeColor = color(255);
	bottomBody = Bodies.rectangle(400, 675, 200, 20, {restitution: 3, isStatic:true});
  drawSprites();
 
}



