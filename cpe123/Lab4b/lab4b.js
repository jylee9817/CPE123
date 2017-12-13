var robotX;
var robotY;

function setup() 
{
	createCanvas(600,400);
	background(0);

	noLoop();
}

function drawRobot(x,y,rot,sc,robotX,robotY)
{
	push();
		translate(x,y);
		rotate(rot);
		scale(sc);
		strokeWeight(5);
		stroke(0);
		fill(191);
		ellipse(robotX+7,robotY+66,50,50);
		ellipse(robotX+144,robotY+66,50,50);
		rect(robotX,robotY,150,120,10);
		
		fill(random(255),random(255),random(255));
		ellipse(robotX+45,robotY+49,30,30);
		ellipse(robotX+103,robotY+49,30,30);
		noFill();
		stroke(0);
		line(robotX+32,robotY+90,robotX+119,robotY+90);
		noStroke();
		
		fill(200,0,0);
		rect(robotX+70,robotY-35,5,35);
		ellipse(robotX+72,robotY-39,20,20);
	pop();
}

function draw() 
{
	for(var i=0; i<20; i++)
	{
		drawRobot(random(600),random(400),random(2*PI),random(0.5,1.5),30,0);
	}
}	