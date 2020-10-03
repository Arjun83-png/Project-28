
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy, boyImage, tree, treeImage, stone, mango1, mango2, mango3, mango4, mango5, mango6, mango7, slingshot;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
	treeImage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400, 690, 800, 20);

	boy = new Boy(150, 550, 200, 200);

	tree = createSprite(550, 440, 20, 20);
	tree.addImage(treeImage);
	tree.scale = 0.4;

	stone = new Stone(160, 550, 50, 50);

	mango1 = new Mango(400, 380, 50, 50);
	mango2 = new Mango(650, 350, 50, 50);
	mango3 = new Mango(500, 350, 50, 50);
	mango4 = new Mango(580, 340, 50, 50);
	mango5 = new Mango(400, 300, 50, 50);
	mango6 = new Mango(550, 280, 50, 50);
	mango7 = new Mango(480, 250, 50, 50);

	slingshot = new Slingshot(stone.body, {x:160, y:600});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  drawSprites();

  boy.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  slingshot.display();

  /*detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
 */
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:160, y:550})
		slingshot.attach(stone.body)
	}
}

function detectCollision(stoneObj, mango){
	mangoBodyPosition = mango.body.position;
	stoneObjBodyPosition = stoneObj.body.position;

	var distance = dist(stoneObjBodyPosition.x, stoneObjBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<-mango.r+stoneObj.r) {
		Matter.Body.setStatic(mango.body, false);
	}
}



