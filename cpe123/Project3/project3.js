var maxTheta;
var x,y;
var cx,cy;

function setup()
{
   createCanvas(600,400);
   background(0);
   noStroke();

   maxTheta = 0;

   drawTile();
   drawHill();
   drawPattern();
}

function drawHill()
{
   for(var i = 0; i < 37*PI/3; i += PI/30)
   {
      x = 330 + (-1.5*Math.pow(Math.E,i*0.15))*cos(i);
      y = 220 + (-1.5*Math.pow(Math.E,i*0.15))*sin(i);

      fill(38,24,0);
      ellipse(x,y,pow(i/PI,2));
   }
}

function drawSkull(x,y,theta)
{
   push();
      scale(0.5);
      translate(x,y);
      rotate(theta);

      fill(160);
      ellipse(0,0,50); //head
      rect(-1,25,3,10); //teeth1
      rect(-5,23,3,10); //teeth2
      rect(-9,21,3,10); //teeth3
      rect(3,23,3,10); //teeth4
      rect(7,21,3,10); //teeth5      

      fill(0);
      triangle(-5,10,-1,23,-1,15); //right nose
      triangle(5,10,1,23,1,15); //left nose
      triangle(-20,8,-10,20,-1,15); //right eye
      triangle(20,8,10,20,1,15);; //left eye
   pop();
}

function drawGhost(x,y,theta,gScale,col,shape)
{
   fill(col); //fill the ghost with new color

   push();
      translate(x,y);
      rotate(theta);
      scale(gScale);

      beginShape(); //body of the ghost
         curveVertex(-20,0); //maybe consider bezier curve
         curveVertex(-20,0);
         curveVertex(-15,45);
         curveVertex(0,55);
         curveVertex(15,45);
         curveVertex(20,0);
         curveVertex(20,0);
      endShape();

      fill(0);
      switch(shape)
      {
         case 1:
            ellipse(0,30,5); //mouth
            ellipse(-8,45,8); //right eye
            ellipse(7,45,8); //left eye
            break;
         case 2:
            rect(-1,30,5,5);
            rect(-10,40,8,8);
            rect(4,40,8,8);
            break;
      }
   pop();
}

function drawTile()
{
   //repeating image of skulls rotating
   for(x=0;x<13;x++)
   {
      for(y=0;y<10;y++)
      {
         drawSkull(65+90*x,30+90*y,PI/4*y);
      }
   }   
}

function drawPattern()
{
   //random floating ghosts with different sizes and eye shapes
   noStroke();
   for(i=0;i<20;i++)
   {
      drawGhost(random(50,550),random(50,350),random(0,2*PI),
      random(0.5,1),color(random(100,250),0,0),Math.floor(random(1,3)));
   }
}

function drawCurve(xCor,yCor)
{
   for(var i = 0; i < maxTheta; i += PI/30)
   {
      x = xCor + (-1.5*Math.pow(Math.E,i*0.15))*cos(i);
      y = yCor + (-1.5*Math.pow(Math.E,i*0.15))*sin(i);

      fill(255);
      ellipse(x,y,i/3);
   }

   maxTheta += PI/30;

   if(maxTheta > 14*PI/3)
      noLoop();
}

function draw()
{   
   drawCurve(320,200);
   drawCurve(280,200);
   drawCurve(360,200);
   drawCurve(400,200);
}