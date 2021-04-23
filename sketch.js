
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite;

function preload()
{
	dustbinImg=loadImage("trash.png");
}

function setup() {
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor=color("brown");

    dustbin=createSprite(1190,528.5,100,100);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.25;

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    paper=new Paper(150,590,70);

      dustbin1=new Dustbin(1250,600,20,100);
   // dustbin2=new Dustbin(1130,620,20,100);
   // dustbin3=new Dustbin(1250,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  //  dustbin1.display();
 // dustbin3.display();
 // dustbin1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-520});
	}
}


