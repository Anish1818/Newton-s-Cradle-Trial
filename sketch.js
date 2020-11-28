
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
createCanvas(1300, 700);


engine = Engine.create();
world = engine.world;

roof = new Roof(650,100,300,40);
bob1=new Bob(550,350,50);
bob2=new Bob(600,350,50);
bob3=new Bob(650,350,50);
bob4=new Bob(700,350,50);
bob5=new Bob(750,350,50);

  
  sling1= new Rope(bob1.body,roof.body,-50*2,0);
  sling2= new Rope(bob2.body,roof.body,-25*2,0);
  sling3= new Rope(bob3.body,roof.body,-0*2,0);
  sling4= new Rope(bob4.body,roof.body,25*2,0);
  sling5= new Rope(bob5.body,roof.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("black");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  
  bob4.display();
  bob5.display();

  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 

  keyPressed();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 




