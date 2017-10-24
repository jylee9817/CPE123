var x,y;
var r,g,b,a;

function setup() 
{
	createCanvas(600,400);
	background(0);

	drawSnail();
	a = 0;
}

function drawSnail()
{
	noStroke();
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
	for(var i = 0; i < 28*PI/3; i += PI/30)
	{
		x = 330 + (-1.5*Math.pow(Math.E,i*0.15))*cos(i);
		y = 220 + (-1.5*Math.pow(Math.E,i*0.15))*sin(i);

		r = random(50,180);
		g = random(50,180);
		b = random(50,180);
		a ++;

		fill(color(r,g,b,a));
		stroke(0);
		ellipse(x,y,i/PI*9);
	}
}

function draw() 
{
	drawShell();
}	