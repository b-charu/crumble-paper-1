
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObj,groundObj	
var myWorld, myEngine;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	myEngine = Engine.create();
	myWorld = myEngine.world;
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(200,450,40);
	groundObj=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(myEngine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObj.display();
  groundObj.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
    
  	}
}





