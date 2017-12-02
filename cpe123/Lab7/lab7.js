var numLady;
var dir = [];
var loc = [];
var ladyScale = [];
var ladyColor = [];
var theta = [];
var addTheta = [];
var centerLoc = [];

var leafX = [];
var leafY = [];
var leafRot = [];
var leafColor = [];
var leafInColor = [];
var leafScale = [];

function setup() 
{
   createCanvas(600, 400);
   numLady = 5;

   for (var i=0; i<numLady; i++)
   {
      centerLoc.push(createVector(random(100, 400), random(100, 400)));
      loc.push(createVector());
      dir.push(createVector());
      theta.push(random(2*PI));
      addTheta.push(random(-PI/30, PI/30));
      ladyScale.push(random(.5,2));
      ladyColor.push(color(random(150,200), 0, 0));
   }

   var y = -50;
   while (y < height + 50)
   {
      leafX.push(random(50,550));
      leafY.push(y);
      leafRot.push(random(2*PI));
      leafColor.push(color(0, random(80,160), 0));
      leafInColor.push(color(0, random(200,255), 0));
      leafScale.push(random(1,2));
      y += random(30,70);
   }

   noStroke();
}

function draw() 
{
   var next = createVector();
   background(8,46,0);

   //leaves
   for (var i=0; i < leafX.length; i++)
   {
      drawLeaf(leafX[i], leafY[i], leafRot[i], leafColor[i], leafInColor[i], leafScale[i]);
   }

   //ladybugs
   for (var i=0; i<numLady; i++)
   {
      drawLadybug(loc[i].x, loc[i].y, dir[i].x, dir[i].y, ladyScale[i], ladyColor[i]);
      
      // updates the dragonfly's location by getting the next (x,y) and 
      // determining the direction from the current location to the next.
      theta[i] += addTheta[i];
      next.x = centerLoc[i].x + 200 * Math.pow(Math.E,i*0.15)*cos(theta[i]);
      next.y = centerLoc[i].y + 100 * Math.pow(Math.E,i*0.15)*sin(theta[i]);

      dir[i].x = next.x - loc[i].x;
      dir[i].y = next.y - loc[i].y;

      loc[i].x += dir[i].x
      loc[i].y += dir[i].y;
   }
}

function drawLadybug(x, y, dx, dy, sc, col)
{
   push();
   		translate(x,y);
   		scale(sc);
   		rotate(atan2(dy,dx)+PI/2);

   		fill(0);
   		ellipse(0,0,50,50);

   		fill(col);
   		arc(0,0,50,50,0,5*PI/4,CHORD);

   		stroke(0);
   		strokeWeight(1.5);
   		line(-10,22,4,-10);

   		noStroke();
   		fill(255);
   		ellipse(-3,-20,10,10);
   		ellipse(18,-12,10,10);

   		fill(0);
   		ellipse(-18,-10,5,5);
   		ellipse(-10,0,8,8);
   		ellipse(0,-5,10,10);
   		ellipse(10,15,6,6);
   		ellipse(20,7,9,9);

   pop();
}

function drawLeaf(x, y, rot, col, inCol, sc)
{
   fill(col);

    push();
    	translate(x,y);
    	scale(sc);
    	rotate(rot);

		beginShape();
	    	vertex(0,0);
	    	bezierVertex(40,0,40,-75,160,0);
	    	bezierVertex(50,80,60,25,0,0);
		endShape();

		fill(inCol); //inside of the leaf
		rotate(PI/4);
		ellipse(20,-45,10,20);
		ellipse(40,-65,10,30);
		ellipse(60,-80,10,25);
		ellipse(80,-93,10,20);

		rotate(PI/2);
		ellipse(-30,-55,10,35);
		ellipse(-50,-70,10,30);
		ellipse(-70,-85,10,25);
	pop();
}