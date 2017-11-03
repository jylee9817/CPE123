var x,y;
var r,g,b,a;
var maxTheta;

function setup() 
{
	createCanvas(600,400);
	background(0);

	a = 255;
	r = 0;
	maxTheta = 0;
	noStroke();
	drawSnail();
}

function drawSnail()
{
	fill(150,126,66);

	push();
		translate(300,350);
		beginShape();
			curveVertex(150,0);
			curveVertex(150,0);
			curveVertex(-60,0);
			curveVertex(-150,-120);
			curveVertex(-160,-200);
			curveVertex(-100,-210);
			curveVertex(-50,-120);
			curveVertex(140,-20);
			curveVertex(150,0);
			curveVertex(150,0);
		endShape();
		
		triangle(-150,-200,-175,-280,-140,-200);
		triangle(-130,-200,-125,-270,-120,-200);
		
		ellipse(-175,-280,5);
		ellipse(-125,-270,4);
	pop();
}

function drawShell()
{
	stroke(0);
	g = 100;
	b = 255;
	r += 1;
	a -= 4/5;

	for(var i = 0; i < maxTheta; i += PI/30)
	{
		x = 330 + (-1.5*Math.pow(Math.E,i*0.15))*cos(i);
		y = 220 + (-1.5*Math.pow(Math.E,i*0.15))*sin(i);

		fill(color(r,g,b,a));
		ellipse(x,y,i/PI*9);
	}
	
	maxTheta += PI/30;

	if(maxTheta > 28*PI/3)
		noLoop();
}

function draw() 
{
	drawShell();
}	